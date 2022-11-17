const dotenv = require('dotenv');
const chalk = require("chalk");
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Cyberpunk 2077", { type: "PLAYING"})
   console.log(("[" + chalk.yellowBright.bold("PLAYING") + "]") + ` Successfully logged in as ${client.user.username} (${client.user.id})!`);
})

client.login(TOKEN);
