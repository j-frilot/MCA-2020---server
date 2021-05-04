const commonQueries = require("./commonQueries");

const physicianQueries = {
    ...commonQueries,
    ...require("./physicianQueries")
};

const appointmentQueries = {
    ...commonQueries,
    ...require("./appointmentQueries")
};

module.exports = { physicianQueries, appointmentQueries };
