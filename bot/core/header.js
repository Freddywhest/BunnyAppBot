const app = require("../config/app");

const header = {
  host: app.host,
  "content-type": "application/json",
  accept: "*/*",
  "sec-fetch-site": "same-site",
  "accept-encoding": "gzip, deflate",
  "accept-language": "en",
  "sec-fetch-mode": "cors",
  origin: app.origin,
  "user-agent":
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  referer: app.referer,
  "sec-fetch-dest": "empty",
};

module.exports = header;
