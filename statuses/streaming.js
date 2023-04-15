const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");
const { URL } = require("node:url");
const { logError } = require("../chalk");

const getSiteName = url => {
  const { hostname } = new URL(url);

  const siteName = new Map([
    ["twitch.tv", "Twitch"],
    ["youtube.com", "YouTube"]
  ]).get(hostname);

  if (!siteName) return logError("Only twitch.tv and youtube.com urls are supported");

  return siteName;
};

module.exports = {
  args: {
    required: ["title", "url"]
  },
  validateArgs: ({ url }) => getSiteName(url),
  async run({
    statusInfo: {
      title,
      url
    },
    setPresence
  }) {
    const siteName = getSiteName(url);

    return await setPresence({
      type: GatewayActivityTypes.STREAMING,
      name: siteName,
      details: title,
      url
    });
  }
}