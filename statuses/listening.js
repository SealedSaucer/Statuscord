const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");

/***
 * @param {ShardClient} client
 */
module.exports = {
  args: ["song", "artist", "image"],
  async run(client, _, {
    song,
    artist,
    image
  }) {
    return await client.gateway.setPresence({
      activity: {
        assets: {
          smallImage: image
        },
        type: GatewayActivityTypes.LISTENING,
        name: song
      }
    });
  }
}