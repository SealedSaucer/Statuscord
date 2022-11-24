// code913 was here :)

const
  // Change this
  CLIENT_ID = "886549136172789830",

  express = require("express"),
  chalk = require("chalk"),
  server = express(),
  prompt = require("prompt-sync")({ sigint: true }),
  dotenv = require('dotenv'),
  { Client } = require('discord.js-selfbot-v11'),
  client = new Client(),

  statuses = new Map([
    [1, ["playing", chalk.yellowBright.bold]],
    [2, ["listening", chalk.greenBright.bold]],
    [3, ["streaming", chalk.magentaBright.bold]]
  ]);

dotenv.config();

if (!process.env.TOKEN) {
  console.error("You need to put a token");
  process.exit();
}

console.log(`${chalk.cyanBright.bold("Statuscord")} | ${chalk.greenBright.bold("SealedSaucer")}`);

server.all("/", (req, res) => res.send(`<meta http-equiv="refresh" content="0; URL=https://phantom.is-a.dev/support"/>`));
server.listen(process.env.PORT ?? 3000);

console.log(`[${chalk.green.bold("+")}] The webserver is ready.`);

client.login(process.env.TOKEN);

console.log(
  `[${chalk.yellow.bold("!")}] Which presence would you like to start?`, "\n",
  [...statuses.entries()]
    .map(([number, [statusName]]) => `[${number}] ${statusName.replace(/^./, m => m.toUpperCase())}`)
    .join("\n")
);
const number = prompt("> ");
const [statusName, style] = statuses.get(+number);

if (statusName) {
  const statusModule = require(`./statuses/${statusName}.js`);

  console.clear();
  // Underscore argument ignore syntax inspired by Elixir
  client.on("ready", _ => statusModule(client, CLIENT_ID)
    .then(_ => console.log(`[${style(statusName.toUpperCase())}] Successfully logged in as ${client.user.username} (${client.user.id})!`))
    .catch(console.error)
  );
} else {
  console.log(`[${chalk.red.bold("-")}] Invalid option.`);
  process.exit();
}
