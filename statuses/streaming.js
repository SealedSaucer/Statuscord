const chalk = require("chalk");
const { ShardClient } = require("detritus-client");
const { ActivityTypes } = require("detritus-client/lib/constants");
const { URL } = require("node:url");

/**
 * @param {ShardClient} client
 */
module.exports = {
  args: ["url"],
  async run(client, _, { url }) {
    const { hostname } = new URL(url);

    const siteName = new Map([
      ["twitch.tv", "Twitch"],
      ["youtube.com", "YouTube"]
    ]).get(hostname);

    if (!siteName) throw "Only twitch.tv and youtube.com urls are supported";

    return await client.gateway.setPresence({
      activity: {
        type: ActivityTypes.STREAMING,
        name: siteName,
        url
      }
    });
  }
}