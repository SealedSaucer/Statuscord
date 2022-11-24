const
  rpcGenerator = require("discordrpcgenerator"),

  // Change these
  IMAGE_NAME = "The name of the image",
  LARGE_TEXT = "Large text on the status",
  SMALL_TEXT = "Small text on the status",
  LINK = "https://twitch.tv/SealedSaucer";
 
module.exports = client => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
  .then(image => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName("twitch")
      .setUrl(LINK)
      .setType("STREAMING")
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setAssetsLargeText(SMALL_TEXT)
      .setDetails(LARGE_TEXT)
      .toDiscord()
  ));