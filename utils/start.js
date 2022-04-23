const { getUSDBlackRate } = require("./blackRate");
const { scheduledMessage } = require("./scheduledMessage");

const start = (bot) => {
  bot.on("message", async (msg) => {
    console.log(msg);
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendMessage(
        chatId,
        `Привіт, я бот, який допоможе тобі знати актуальний курс валют`
      );

      return bot.sendMessage(
        chatId,
        `Хочеш знати О̶т̶к̶у̶д̶а̶ ̶н̶а̶ ̶Б̶е̶л̶о̶р̶у̶с̶ь̶ ̶г̶о̶т̶о̶в̶и̶л̶о̶с̶ь̶ ̶н̶а̶п̶а̶д̶е̶н̶и̶е̶ курс долара США на чорному ринку зараз? Нажимай /blackrate`
      );
    }

    if (text.includes("Доброго ранку") || text.includes("Добрий ранок")) {
      return bot.sendMessage(chatId, `Доброго ранку`);
    }

    if (text === "/blackrate") {
      const USDBlackRate = await getUSDBlackRate();

      bot.sendMessage(
        chatId,
        `Покупка$ : ${USDBlackRate.USDRateBuy}; Продаж$ : ${USDBlackRate.USDRateSell};`
      );
    }

    if (text === "/scheduleStart") {
      const USDBlackRate = await getUSDBlackRate();

      scheduleJob = scheduledMessage(
        bot,
        chatId,
        `Покупка$ : ${USDBlackRate.USDRateBuy}; Продаж$ : ${USDBlackRate.USDRateSell};`,
        "00 00 9 * * *"
      );
    }

    if (text === "/scheduleStop") {
    }

    // if (text === "/scheduleStop") {
    //   console.log({ scheduleJob });

    // }

    // return "Я тебе не зрозумів, але я навчаюсь для тебе. Напиши ще щось мені";
  });
};

module.exports = start;
