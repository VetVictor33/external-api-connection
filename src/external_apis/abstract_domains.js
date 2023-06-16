const axios = require("axios");

const apiDomains = axios.create({
    baseURL: "https://companyenrichment.abstractapi.com/v1"
})


module.exports = {
    apiDomains
};