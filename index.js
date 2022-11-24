const
  express = require("express"),
  chalk = require("chalk"),
  server = express(),
  prompt = require("prompt-sync")({sigint: true}),
  statuses = new Map([
    [1, "playing"],
    [2, "listening"],
    [3, "streaming"]
  ]);

console.log(`${chalk.cyanBright.bold("Statuscord")} | ${chalk.greenBright.bold("SealedSaucer")}`);

server.all("/", (req, res) => res.send(`<meta http-equiv="refresh" content="0; URL=https://phantom.is-a.dev/support"/>`));
server.listen(process.env.PORT ?? 3000);

console.log(`[${chalk.green.bold("+")}] The webserver is ready.`);

console.log(
  `[${chalk.yellow.bold("!")}] Which presence would you like to start?`,
  [ ...statuses.entries() ]
  .map((number, statusName) => `[${number}] ${statusName.replace(/^./, m => m.toUpperCase())}`)
  .join("\n")
);
const number = prompt("> ");
const statusName = statuses.get(+number);

if (statusName) {
  const statusModule = require(`./statuses/${statusName}.js`);

  console.clear();
  statusModule(client);
} else {
  console.log(`[${chalk.red.bold("-")}] Invalid option.`);
}