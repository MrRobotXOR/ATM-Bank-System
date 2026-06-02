const db = require("../config/db");


// 💰 DEPOSIT
exports.deposit = async (req, res) => {
  try {

    const { amount } = req.body;

    const userId = req.user.id;

    // USER FIND
    const [users] = await db.query(
      "SELECT * FROM users WHERE id=?",
      [userId]
    );

    const user = users[0];

    // NEW BALANCE
    const newBalance =
      Number(user.balance) + Number(amount);

    // UPDATE BALANCE
    await db.query(
      "UPDATE users SET balance=? WHERE id=?",
      [newBalance, userId]
    );

    // SAVE TRANSACTION
    await db.query(
      "INSERT INTO transactions (user_id, type, amount) VALUES (?, ?, ?)",
      [userId, "deposit", amount]
    );

    res.json({
      message: "Deposit Successful",
      balance: newBalance,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};



// 💸 WITHDRAW
exports.withdraw = async (req, res) => {
  try {

    const { amount } = req.body;

    const userId = req.user.id;

    const [users] = await db.query(
      "SELECT * FROM users WHERE id=?",
      [userId]
    );

    const user = users[0];

    // BALANCE CHECK
    if (Number(user.balance) < Number(amount)) {
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    const newBalance =
      Number(user.balance) - Number(amount);

    // UPDATE
    await db.query(
      "UPDATE users SET balance=? WHERE id=?",
      [newBalance, userId]
    );

    // SAVE TXN
    await db.query(
      "INSERT INTO transactions (user_id, type, amount) VALUES (?, ?, ?)",
      [userId, "withdraw", amount]
    );

    res.json({
      message: "Withdraw Successful",
      balance: newBalance,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
};




// 📄 HISTORY
exports.history = async (req, res) => {
  try {

    const [transactions] = await db.query(
      "SELECT * FROM transactions WHERE user_id=? ORDER BY id DESC",
      [req.user.id]
    );

    res.json(transactions);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });
  }
};