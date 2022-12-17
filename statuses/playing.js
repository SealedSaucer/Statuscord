const { ShardClient } = require("detritus-client");
const { ActivityTypes } = require("detritus-client/lib/constants");

/**
 * 
 * @param {ShardClient} client 
 */
module.exports = async (client, _, statusInfo) => client.gateway.setPresence({
    activity: {
        name: statusInfo.game,
        type: ActivityTypes.PLAYING
    }
});