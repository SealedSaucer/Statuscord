const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");

/***
 * @param {ShardClient} client
 */
module.exports = {
  args: ["song", "artist", "image"],
  async run(client, {
    song,
    artist,
    image
  }, setPresence, CLIENT_ID) {
    return await setPresence({
      assets: {
        largeImage: image
      },
      type: GatewayActivityTypes.LISTENING,
      name: song,
      state: artist
    });
  }
}