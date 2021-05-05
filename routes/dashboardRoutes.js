const express = require("express");
const router = express.Router();
const { dashboardQueries: query } = require("../queries/Query");

// dashboard    4000/api/content/dash
router.get("/dash", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
