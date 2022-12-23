const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");
const { URL } = require("node:url");

/**
 * @param {ShardClient} client
 */
module.exports = {
  args: ["title", "url"],
  async run(client, { title, url }, setPresence) {
    const { hostname } = new URL(url);

    const siteName = new Map([
      ["twitch.tv", "Twitch"],
      ["youtube.com", "YouTube"]
    ]).get(hostname);

    if (!siteName) throw "Only twitch.tv and youtube.com urls are supported";

    return await setPresence({
      type: GatewayActivityTypes.STREAMING,
      name: siteName,
      details: title,
      url
    });
  }
}