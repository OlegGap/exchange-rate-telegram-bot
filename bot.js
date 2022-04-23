const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
const start = require('./utils/start');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

// bot.setMyCommands([
//   { command: "/start", description: "Почати знову" },
//   { command: "/blackrate", description: "Отримати курс $ на чорному ринку" },
//   { command: "/scheduleStart", description: "Отримувати курс валют регулярно о 9.00 ранку" }
//   // { command: "/scheduleStop", description: "Зупинити регулярне отримування курсу валют" }
// ]);

start(bot);

module.exports = bot;
