const chalk = require("chalk");
const { ShardClient } = require("detritus-client");
const { ActivityTypes } = require("detritus-client/lib/constants");
const { URL } = require("node:url");

/**
 * @param {ShardClient} client
 */
module.exports = async (client, CLIENT_ID, statusInfo) => {
  const url = new URL(statusInfo.url);
  if (!["twitch.tv", "youtube.com"].includes(url.hostname)) {
    console.log(chalk.red("Only twitch.tv and youtube.com urls are supported"));
    process.exit();
  }

  const siteName = new Map([
    ["twitch.tv", "Twitch"],
    ["youtube.com", "YouTube"]
  ]).get(url.hostname);

  client.gateway.setPresence({
    activity: {
      type: ActivityTypes.STREAMING,
      name: siteName,
      url: statusInfo.url
    }
  });
};