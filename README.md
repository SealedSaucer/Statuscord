# Fake-Streamer
A Code that allows you to get the "Streaming" Discord Status WITHOUT Streaming!

----

The [index.js](https://github.com/SealedSaucer/Fake-Streamer/blob/main/index.js) is the main file. [server.js](https://github.com/SealedSaucer/Fake-Streamer/blob/main/server.js) prevents your repl from going to sleep. (If you have a replit hacker plan, then you can delete [this file](https://github.com/SealedSaucer/Fake-Streamer/blob/main/server.js) and paste this code inside the [index.js](https://github.com/SealedSaucer/Fake-Streamer/blob/main/index.js) file : 

</br>

```js
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("CLIENT_ID", "IMAGE_NAME")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl("https://twitch.tv/SealedSaucer")
        .setType("STREAMING")
        .setApplicationId("CLIENT_ID")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("youtube.com/SealedSaucer")
        .setDetails("Subscribe!")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})
```

This Code is from [this tutorial](https://youtu.be/GjrF217g5qs). If you have any doubts regarding this, feel free to [contact me](https://dsc.gg/phantom).

**DO NOT GIVE YOUR TOKEN TO OTHERS!**

Use [uptimerobot.com](https://uptimerobot.com) to make your repl online 24/7.

</br>

> ⭐ Feel free to Star the Repository if this helped you! ;)

----

> Fake Streamer © 2021 by SealedSaucer is licensed under Attribution 4.0 International 
