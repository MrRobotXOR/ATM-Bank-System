const db = require("../config/db");


// 👑 ADMIN STATS
exports.getStats = async (req, res) => {

  try {

    const [users] = await db.query(
      "SELECT COUNT(*) AS totalUsers FROM users"
    );

    const [transactions] = await db.query(
      "SELECT COUNT(*) AS totalTransactions FROM transactions"
    );

    const [balance] = await db.query(
      "SELECT SUM(balance) AS totalBalance FROM users"
    );

    const [recent] = await db.query(`

      SELECT
      users.name,
      transactions.type,
      transactions.amount,
      transactions.created_at

      FROM transactions

      JOIN users
      ON transactions.user_id = users.id

      ORDER BY transactions.id DESC

      LIMIT 5

    `);

res.json({
  totalUsers: users[0].totalUsers,
  totalTransactions: transactions[0].totalTransactions,
  totalBalance: balance[0].totalBalance || 0,
  recent: recent || []
});
  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};



// 👥 ALL USERS
exports.getUsers = async (req, res) => {

  try {

    const [users] = await db.query(

      `SELECT
        id,
        name,
        email,
        account,
        balance,
        role
       FROM users`

    );

    res.json(users);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};



// 💳 ALL TRANSACTIONS
exports.getTransactions = async (req, res) => {
  try {
    const [transactions] = await db.query(`
      SELECT 
        transactions.id,
        users.name,
        users.account,
        transactions.type,
        transactions.amount,
        transactions.created_at
      FROM transactions
      JOIN users ON transactions.user_id = users.id
      ORDER BY transactions.id DESC
    `);

    res.json(transactions);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ❌ DELETE USER
exports.deleteUser =
async (req, res) => {

  try {

    await db.query(
      "DELETE FROM users WHERE id=?",
      [req.params.id]
    );

    res.json({
      message: "User Deleted",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};