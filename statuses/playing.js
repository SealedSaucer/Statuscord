const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes, GatewayActivityFlags } = require("detritus-client-socket/lib/constants");

/**
 * 
 * @param {ShardClient} client 
 */
module.exports = {
  args: ["game"],
  async run(client, { game }, setPresence) {
    return await setPresence({
      name: game,
      type: GatewayActivityTypes.PLAYING,
      flags: GatewayActivityFlags.INSTANCE
    });
  }
};