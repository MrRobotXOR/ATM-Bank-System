const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const transaction =
  require("../controllers/transactionController");


// DEPOSIT
router.post(
  "/deposit",
  auth,
  transaction.deposit
);


// WITHDRAW
router.post(
  "/withdraw",
  auth,
  transaction.withdraw
);


// HISTORY
router.get(
  "/history",
  auth,
  transaction.history
);

module.exports = router;