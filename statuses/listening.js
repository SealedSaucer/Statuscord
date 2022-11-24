const
  rpcGenerator = require("discordrpcgenerator"),

  // Change these
  IMAGE = "The name of the image",
  SONG = "The name of the song",
  ARTIST = "The artist of the song";

module.exports = client => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
  .then(image => client.user.setPresence(
    rpcGenerator.createSpotifyRpc(client)
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setDetails(SONG)
      .setState(ARTIST)
      .toDiscord()
  ));