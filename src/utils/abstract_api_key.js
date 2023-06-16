require('dotenv').config();
const qs = require('qs');

const HolidayApiKey = { api_key: process.env.HOLIDAY_API_KEY };
const DomainApiKey = { api_key: process.env.DOMAIN_API_KEY };

function getQueryWithHolidayApiKey(data) {
    return qs.stringify({
        ...HolidayApiKey,
        ...data
    })
}
function getQueryWithDomainApiKey(data) {
    return qs.stringify({
        ...DomainApiKey,
        ...data
    })
}

module.exports = {
    getQueryWithHolidayApiKey,
    getQueryWithDomainApiKey
};