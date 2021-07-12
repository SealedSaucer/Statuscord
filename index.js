const keepAlive = require("./server")
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("TEXT_HERE", {type: "STREAMING", url: "https://twitch.tv/ninja"})
   console.log(`${client.user.username} Successfully Logged in!`)
})

keepAlive()
client.login('TOKEN');
