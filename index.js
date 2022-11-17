const express = require("express");
const chalk = require("chalk");
const server = express();
const prompt = require('prompt-sync')({sigint: true});

console.log(chalk.cyanBright.bold("Statuscord") + " | " + chalk.greenBright.bold("SealedSaucer"));

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://phantom.is-a.dev/support"/>')
})
server.listen(3000);
console.log(("\n[" + chalk.green.bold("+") + "]") + " The webserver is ready.");

console.log("\n[" + chalk.yellow.bold("!") + "] Which presence would you like to start?\n\n[1] Playing Status \n[2] Listening Status\n[3] Streaming Status\n\n");

status = prompt("> ");

if (status == 1) {
  console.clear();
  import('./statuses/playing.js');
} else if (status == 2) {
  console.clear();
  import('./statuses/listening.js');
} else if (status == 3) {
  console.clear();
  import('./statuses/streaming.js');
} else {
  console.log("[" + chalk.red.bold("-") + "] Invalid option.");
  process.exit();
}
