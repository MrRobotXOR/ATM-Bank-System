const db = require("../config/db");

const User = {
  create: async (name, email, password) => {
    const sql =
      "INSERT INTO users (name, email, password, balance) VALUES (?, ?, ?, 0)";
    return db.execute(sql, [name, email, password]);
  },

  findByEmail: async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [rows] = await db.execute(sql, [email]);
    return rows[0];
  },
};

module.exports = User;