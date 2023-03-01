const express = require("express");
const router = express();
const { signinCms } = require("./contoller");

router.post("/auth/signin", signinCms);

module.exports = router;
