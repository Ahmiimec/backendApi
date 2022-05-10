var express = require("express");
var controller = require("../controllers/users.controller")

const router = express.Router();

router.route('/')
    // Get all Users
    .get(controller.getAll)

module.exports = router;
