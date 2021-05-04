const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 3000;

router.get("/", (req, res) => {
    res.json({
        "All Physicians": `http://localhost:${PORT}/api/physicians`,
        "All Physician Specialties": `http://localhost:${PORT}/api/physicians/specialties`,
        "All Physician Specialties": `http://localhost:${PORT}/api/dash
    });
});

// original
router.use("/physicians", require("./routes/physicianRoutes"));
router.use("/appointments", require("./routes/appointmentRoutes"));
router.use("/dash", require("./routes/dash"));

module.exports = router;
