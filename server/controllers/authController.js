const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, account, password } = req.body;

    const [exists] = await db.query(
      "SELECT * FROM users WHERE email=? OR account=?",
      [email, account]
    );

    if (exists.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);
let userRole = "user";



// 👑 FIXED ADMIN
if (

  account === "999999999" &&
  password === "admin123"

) {

  userRole = "admin";

}



await db.query(

  `
  INSERT INTO users
  (name, email, account, password, role)

  VALUES (?, ?, ?, ?, ?)
  `,

  [
    name,
    email,
    account,
    hash,
    userRole,
  ]
);

    res.json({ message: "Account created successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { account, password, role } = req.body;

    const [users] = await db.query(
      "SELECT * FROM users WHERE account=?",
      [account]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = users[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    if (role && role !== user.role) {
      return res.status(403).json({ message: "Role mismatch" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        account: user.account,
        role: user.role,
        balance: user.balance,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};