const express = require("express");
const router = express.Router();
const { physicianQueries: query } = require("../queries/Query");

//    3000/api/physicians

// all of the physicians  :3000/api/physicians
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

// find by id  :3000/api/5
router.get("/:id", (req, res) => {
    query.findById(res, query.table, req.params.id);
});

// all of the male physicians   :3000/api/physicians/male
router.get("/male", (req, res) => {
    query.male(res, query.table);
});

// all of the female physicians :3000/api/physicians/female
router.get("/female", (req, res) => {
    query.female(res, query.table);
});

// all of the specialties :3000/api/physicians/specialties
router.get("/specialties", (req, res) => {
    query.specialties(res, query.table);
});

module.exports = router;
