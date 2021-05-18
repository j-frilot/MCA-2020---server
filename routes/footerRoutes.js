const express = require("express");
const router = express.Router();
const { footerQueries: query } = require("../queries/Query");

// all of the footer links  :3000/api/footer
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
