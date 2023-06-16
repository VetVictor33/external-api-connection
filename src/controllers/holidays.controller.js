const { apiHolidays } = require("../external_apis/abstract_holidays");
const { getQueryWithHolidayApiKey } = require("../utils/abstract_api_key");
const { logData, logError } = require("../utils/dataLog");

const getHolidays = async (req, res) => {
    const { country, year, month, day } = req.body;
    const query = getQueryWithHolidayApiKey({ country, year, month });
    try {
        const { data } = await apiHolidays.get(`/?${query}`);
        if (data.length < 1) return res.status(404).json({ message: "No holidays for that day" })
        await logData(data, 'holidays')
        res.json(data)
    } catch (error) {
        const statusCode = error?.response?.status || 500;
        const statusMessage = error?.response?.statusText || "Internal Server Error";
        await logError({ statusCode, statusMessage }, 'holidays');
        res.status(statusCode).json({ message: statusMessage })
    }
}

module.exports = {
    getHolidays
}