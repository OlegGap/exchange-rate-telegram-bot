const axios = require("axios");

const getUSDBlackRate = async () => {
  return await axios
    .get("https://old.kurs.com.ua/informer/valyuta/usd/comm")
    .then((res) => {
      const htmlValues = res.data.replace(/<[^>]+>/g, "%").split("%");
      const indexOfRootWord = htmlValues.indexOf("Наличный");

      return {
        USDRateBuy: htmlValues[indexOfRootWord + 3],
        USDRateSell: htmlValues[indexOfRootWord + 7]
      };
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  getUSDBlackRate
};
