const fs = require('fs/promises');
const dataLogPath = './logs/data.log.json';
const errorLogPath = './logs/error.log.json';

async function logData(data, logType) {
    const logs = JSON.parse(await fs.readFile(dataLogPath));
    const formatedeData = { date: new Date(), data }
    try {
        if (logType === 'holidays') {
            logs.holidaysApi.push(formatedeData);
        } else if (logType === 'domains') {
            logs.domainsApi.push(formatedeData);
        }
        const response = await fs.writeFile(dataLogPath, JSON.stringify(logs));
        return response
    } catch (error) {
        return error
    }
}

async function logError(data, logType) {
    const logs = JSON.parse(await fs.readFile(errorLogPath));
    const formatedeData = { date: new Date(), data }
    try {
        if (logType === 'holidays') {
            logs.holidaysApiErrors.push(formatedeData);
        } else if (logType === 'domains') {
            logs.domainsApiErrors.push(formatedeData);
            console.log(logs)
        }
        const response = await fs.writeFile(errorLogPath, JSON.stringify(logs));
        return response
    } catch (error) {
        return error
    }
}

module.exports = {
    logData,
    logError
}