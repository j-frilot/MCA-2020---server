const conn = require("../db/dbconfig");

const physicianQueries = {
    table: "physicians",
    findByName: (res, table) => {
        conn.execute(
            `SELECT * FROM physicians WHERE first_name LIKE %?%`,
            ["?"],

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
    },
    male: (res, table) => {
        conn.execute(
            `SELECT * FROM physicians WHERE gender = "male"`,
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
    },
    female: (res, table) => {
        conn.execute(
            `SELECT * FROM physicians WHERE gender = "female"`,
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
    },
    specialties: (res, table) => {
        conn.execute(`SELECT specialty from physicians;`, (error, results) => {
            if (!error) {
                if (results.length == 1) {
                    res.json(...results);
                } else {
                    res.json(results);
                }
            } else {
                console.log("Query Error", error);
            }
        });
    }
};

module.exports = physicianQueries;
