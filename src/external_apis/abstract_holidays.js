const axios = require("axios");

const apiHolidays = axios.create({
    baseURL: "https://holidays.abstractapi.com/v1"
})


module.exports = {
    apiHolidays
};