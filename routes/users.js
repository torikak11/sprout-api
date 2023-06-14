const express = require("express");
const { getUserName } = require("../controllers/users");
const router = express.Router();

router.route("/").get(getUserName);

module.exports = router;