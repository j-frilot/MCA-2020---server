const commonQueries = require("./commonQueries");

const physicianQueries = {
    ...commonQueries,
    ...require("./physicianQueries")
};

const appointmentQueries = {
    ...commonQueries,
    ...require("./appointmentQueries")
};

const dashboardQueries = {
    ...commonQueries,
    ...require("./dashboardQueries")
};

module.exports = { physicianQueries, appointmentQueries, dashboardQueries };
