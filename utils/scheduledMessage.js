var CronJob = require("cron").CronJob;

const scheduledMessage = (bot, chatId, text, time = "* * * * * *") => {
  const job = new CronJob(time, function () {
    bot.sendMessage(chatId, text);
  });
  job.start();
//   setTimeout(() => {
// console.log({job});

//     job.stop();
//   }, 7000);
// console.log({job});
  return job;
};

module.exports = {
  scheduledMessage
};
