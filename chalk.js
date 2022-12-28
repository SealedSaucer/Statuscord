const chalk = require("chalk");

module.exports = {
    logInfo: msg => console.log(`[${chalk.yellowBright("!")}] ${msg}`),
    logError: msg => {
        console.error(chalk.redBright(msg));
        process.exit();
    }
};