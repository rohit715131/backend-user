const express = require("express");
const router = express.Router();
const { register, getUser } = require("../controller/userController");

router.post("/register", register);
router.get("/user", getUser);

module.exports = router;
