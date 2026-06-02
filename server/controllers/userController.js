const db = require("../config/db");

// STATS
exports.getStats = async (req, res) => {
  try {
    const [users] = await db.query("SELECT COUNT(*) AS totalUsers FROM users");
    const [transactions] = await db.query("SELECT COUNT(*) AS totalTransactions FROM transactions");
    const [balance] = await db.query("SELECT SUM(balance) AS totalBalance FROM users");

    const [activities] = await db.query(`
      SELECT users.name, transactions.type, transactions.amount, transactions.created_at
      FROM transactions
      JOIN users ON transactions.user_id = users.id
      ORDER BY transactions.id DESC
      LIMIT 5
    `);

    res.json({
      totalUsers: users[0].totalUsers,
      totalTransactions: transactions[0].totalTransactions,
      totalBalance: balance[0].totalBalance || 0,
      recent: activities || []
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getProfile = async (req, res) => {
  try {
    const id = req.user.id;

    const [user] = await db.query(
      "SELECT id, name, email, account, role, balance FROM users WHERE id=?",
      [id]
    );

    res.json(user[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.history = async (req, res) => {
  try {
    const [tx] = await db.query(
      "SELECT * FROM transactions WHERE user_id=?",
      [req.user.id]
    );

    res.json(tx);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




// USERS
exports.getUsers = async (req, res) => {
  const [users] = await db.query("SELECT * FROM users");
  res.json(users);
};

// DELETE
exports.deleteUser = async (req, res) => {
  await db.query("DELETE FROM users WHERE id=?", [req.params.id]);
  res.json({ message: "Deleted" });
};