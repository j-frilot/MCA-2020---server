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

const covidQueries = {
    ...commonQueries,
    ...require("./covidQueries")
};

module.exports = {
    physicianQueries,
    appointmentQueries,
    dashboardQueries,
    covidQueries
};
