// Change this to the name of the game you want
const GAME_NAME = "Cyberpunk 207";

module.exports = (client) => client.user.setActivity(GAME_NAME, { type: "PLAYING" });
