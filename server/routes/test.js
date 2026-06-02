const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Backend Working Successfully 🚀",
  });
});

module.exports = router;