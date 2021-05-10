const express = require("express");
const router = express.Router();
const { covidQueries: query } = require("../queries/Query");

// covid    4000/api/content/covid
router.get("/covid", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
