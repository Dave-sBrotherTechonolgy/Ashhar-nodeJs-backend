const router = require("express").Router();
const instructor = require('../componnents/dashboard/instructor/dashboard')

router.get('/allstudents',instructor.get);

module.exports = router;