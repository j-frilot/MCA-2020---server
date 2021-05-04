const conn = require("../db/dbconfig");
const physicianQueries = require("./physicianQueries");
const appoinmentQueries = require("./appointmentQueries");

const commonQueries = {
    findAll: (res, table) => {
        conn.execute(`SELECT * FROM ${table}`, (error, results) => {
            if (!error) {
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                } else {
                    res.json(results);
                }
            } else {
                console.log("Query Error", error);
            }
        });
    },
    findById: (res, table, id) => {
        conn.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ?`,
            [id],
            (error, results) => {
                if (!error) {
                    if (results.length == 1) {
                        res.json(...results);
                    } else {
                        res.json(results);
                    }
                } else {
                    console.log("Query Error", error);
                }
            }
        );
    }
};

module.exports = commonQueries;
