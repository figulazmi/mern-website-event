const express = require("express");
const router = express();
const { index } = require("./contoller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.get(
  "/orders",
  authenticateUser,
  authorizeRoles("organizer", "admin", "owner"),
  index
);

module.exports = router;
