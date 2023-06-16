const { apiDomains } = require("../external_apis/abstract_domains");
const { getQueryWithDomainApiKey } = require("../utils/abstract_api_key");
const { logData, logError } = require("../utils/dataLog");

const getDomains = async (req, res) => {
    const { domain } = req.body;
    const query = getQueryWithDomainApiKey({ domain });
    try {
        const { data } = await apiDomains.get(`/?${query}`);
        if (!data.name) return res.status(404).json({ message: "No such domain, ma'man" })
        await logData(data, 'domains');

        res.json(data)
    } catch (error) {
        const statusCode = error?.response?.status || 500
        const statusMessage = error?.response?.statusText || "Internal Server Error"
        await logError({ statusCode, statusMessage }, 'domains')
        res.status(statusCode).json({ message: statusMessage })
    }
}

module.exports = {
    getDomains
}