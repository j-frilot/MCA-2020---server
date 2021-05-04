const express = require("express");
const router = express.Router();
const { appointmentQueries: query } = require("../queries/Query");

// appointments
router.post("/makeAppointment", (req, res) => {
    query.makeAppointment(req, res);
});

module.exports = router;
