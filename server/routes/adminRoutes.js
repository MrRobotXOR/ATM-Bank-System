const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const adminCheck = require("../middleware/adminMiddleware");
const admin = require("../controllers/adminController");

router.get("/stats", auth, adminCheck, admin.getStats);
router.get("/users", auth, adminCheck, admin.getUsers);
router.get("/transactions", auth, adminCheck, admin.getTransactions); // ✅ FIX ADDED

router.delete("/user/:id", auth, adminCheck, admin.deleteUser);

module.exports = router;