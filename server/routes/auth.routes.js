const { SignUp } = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/signup", SignUp)

module.exports = router;
