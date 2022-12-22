const { ShardClient } = require("detritus-client");
const { ActivityTypes } = require("detritus-client/lib/constants");

/**
 * 
 * @param {ShardClient} client 
 */
module.exports = {
  args: ["game"],
  async run(client, _, { game }) {
    client.gateway.setPresence({
      activity: {
        name: statusInfo.game,
        type: ActivityTypes.PLAYING
      }
    });
  }
};