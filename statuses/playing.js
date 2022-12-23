const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");

/**
 * @param {ShardClient} client 
 */
module.exports = {
  args: ["game"],
  async run({
    statusInfo: {
      game
    },
    setPresence
  }) {
    return await setPresence({
      name: game,
      type: GatewayActivityTypes.PLAYING
    });
  }
};