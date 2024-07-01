require("dotenv").config();
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  AUTO_UPGRADE_MULTITAP: process.env.AUTO_UPGRADE_MULTITAP
    ? process.env.AUTO_UPGRADE_MULTITAP.toLowerCase() === "true"
    : true,
  MAX_MULTITAP_LEVEL: process.env.MAX_MULTITAP_LEVEL
    ? parseInt(process.env.MAX_MULTITAP_LEVEL)
    : 5,

  APPLY_DAILY_ENERGY: process.env.APPLY_DAILY_ENERGY
    ? process.env.APPLY_DAILY_ENERGY.toLowerCase() === "true"
    : true,
  APPLY_DAILY_TURBO: process.env.APPLY_DAILY_TURBO
    ? process.env.APPLY_DAILY_TURBO.toLowerCase() === "true"
    : true,

  AUTO_UPGRADE_ENERGY: process.env.AUTO_UPGRADE_ENERGY
    ? process.env.AUTO_UPGRADE_ENERGY.toLowerCase() === "true"
    : true,

  MAX_ENERGY_LEVEL: process.env.MAX_ENERGY_LEVEL
    ? parseInt(process.env.MAX_ENERGY_LEVEL)
    : 5,

  AUTO_BUY_CARDS: process.env.AUTO_BUY_CARDS
    ? process.env.AUTO_BUY_CARDS.toLowerCase() === "true"
    : true,
  MAX_LEVEL_CARDS: process.env.MAX_LEVEL_CARDS
    ? parseInt(process.env.MAX_LEVEL_CARDS)
    : 5,

  SLEEP_BETWEEN_TAP: process.env.SLEEP_BETWEEN_TAP
    ? process.env.SLEEP_BETWEEN_TAP.split(",").map((str) =>
        parseInt(str.trim())
      )
    : 70,

  USE_PROXY_FROM_FILE: process.env.USE_PROXY_FROM_FILE
    ? process.env.USE_PROXY_FROM_FILE.toLowerCase() === "true"
    : false,

  RANDOM_TAPS_COUNT:
    process.env.RANDOM_TAPS_COUNT &&
    Array.isArray(JSON.parse(process.env.RANDOM_TAPS_COUNT))
      ? JSON.parse(process.env.RANDOM_TAPS_COUNT)
      : [900, 1200],

  RANDOM_MEGA_TAPS_COUNT:
    process.env.RANDOM_MEGA_TAPS_COUNT &&
    Array.isArray(JSON.parse(process.env.RANDOM_MEGA_TAPS_COUNT))
      ? JSON.parse(process.env.RANDOM_MEGA_TAPS_COUNT)
      : [8000, 10000],
};

module.exports = settings;
