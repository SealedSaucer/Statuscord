const chalk = require("chalk");
const { ShardClient } = require("detritus-client");
const { GatewayActivityTypes } = require("detritus-client-socket/lib/constants");

module.exports = {
  args: {
    required: ["game"],
    optional: ["image", "details", "state"]
  },
  validateArgs: ({ details, state, image }) => {
    if (!details && !state) console.log(`[${chalk.yellowBright("!")}] The time played will display as "for x time" in your profile. Try passing the --details and --state options to make it display as "HH:DD elapsed"`);
    if (!image) console.log(`[${chalk.yellowBright("!")}] Consider adding an image to your playing status with --image`);

    return true;
  },
  async run({
    statusInfo: {
      game,
      image,
      details,
      state
    },
    setPresence
  }) {
    return await setPresence({
      name: game,
      type: GatewayActivityTypes.PLAYING,
      assets: image ? {
        largeImage: image
      } : null,
      details,
      state
    });
  }
};