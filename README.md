# Fake-Streamer
A Code that allows you to get the "Streaming" Discord Status WITHOUT Streaming!

----

A Code written in JavaScript that allows you to get the "Streaming" Discord Status without Streaming!

The [index.js](https://github.com/SealedSaucer/Online-Forever/blob/main/index.js) is the main file. [server.js](https://github.com/SealedSaucer/Online-Forever/blob/main/server.js) prevents your repl from going to sleep. (If you have a replit hacker plan, then you can delete [this file](https://github.com/SealedSaucer/Online-Forever/blob/main/server.js) and paste this code inside the [index.js](https://github.com/SealedSaucer/Online-Forever/blob/main/index.js) file : 

</br>

```js
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Subscribe!", {type: "STREAMING", url: "https://twitch.tv/ninja"})
   console.log(`${client.user.username} Successfully Logged in!`)
})

client.login(TOKEN);
```

If you have any doubts regarding this, feel free to [contact me](https://dsc.gg/phantom).

**DO NOT GIVE YOUR TOKEN TO OTHERS!**

Use [uptimerobot.com](https://uptimerobot.com) to make your repl online 24/7.

----

> Fake Streamer © 2021 by SealedSaucer is licensed under Attribution 4.0 International 
