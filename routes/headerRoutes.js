const express = require("express");
const router = express.Router();
const { headerQueries: query } = require("../queries/Query");

// all of the header/footer links  :3000/api/header
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

module.exports = router;
