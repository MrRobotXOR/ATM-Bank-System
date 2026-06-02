const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const user = require("../controllers/userController");

// 👤 PROFILE
router.get("/profile", auth, user.getProfile);

// 👤 HISTORY (if exists)
router.get("/history", auth, user.history);

module.exports = router;