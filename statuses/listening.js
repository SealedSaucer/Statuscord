const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");

/**
 * @param {ShardClient} client
 */
module.exports = {
  args: ["song", "artist", "album", "image"],
  async run({
    statusInfo: {
      song,
      artist,
      album,
      image
    },
    setPresence
  }) {
    return await setPresence({
      assets: {
        largeImage: image,
        largeText: `on ${album}`
      },
      type: GatewayActivityTypes.LISTENING,
      name: "Spotify",
      details: song,
      state: `by ${artist}`
    });
  }
}