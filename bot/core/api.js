const r = E;
(function (O, B) {
  const Q = E,
    A = O();
  while (!![]) {
    try {
      const s =
        parseInt(Q(0x13a)) / 0x1 +
        -parseInt(Q(0x147)) / 0x2 +
        (-parseInt(Q(0x126)) / 0x3) * (parseInt(Q(0x13e)) / 0x4) +
        parseInt(Q("0x140")) / 0x5 +
        parseInt(Q("0x13d")) / 0x6 +
        parseInt(Q("0x136")) / 0x7 +
        -parseInt(Q(0x130)) / 0x8;
      if (s === B) break;
      else A["push"](A["shift"]());
    } catch (L) {
      A["push"](A["shift"]());
    }
  }
})(Z, 0xc8ade);
const app = require(r(0x138)),
  logger = require(r("0x12f")),
  sleep = require("../utils/sleep");
function E(O, B) {
  const A = Z();
  return (
    (E = function (s, L) {
      s = s - 0x11e;
      let Q = A[s];
      return Q;
    }),
    E(O, B)
  );
}
function Z() {
  const u = [
    "ENOTFOUND",
    "../config/app",
    "\x20|\x20Error\x20while\x20<b>getting\x20cards:</b>\x20",
    "781108ZwdLCA",
    "get_user_data",
    "The\x20proxy\x20server\x20at\x20",
    "3513264OYohya",
    "183100UsSTUs",
    "error",
    "2339945yeozAv",
    "/dungeon/",
    "/upgrade/",
    "get",
    "claim_daily_reward",
    "message",
    "\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection",
    "686220fWQSUh",
    "/daily/list",
    "send_mega_taps",
    "\x20|\x20Error\x20while\x20<b>upgrading\x20Boost:</b>:\x20",
    "session_name",
    "/daily/claim",
    "/boosts/action/",
    "):</b>\x20",
    "get_cards",
    "apiUrl",
    "/taps",
    "getaddrinfo",
    "69UcOVNW",
    "apply_boost",
    "post",
    "get_boost",
    "send_taps",
    "match",
    "includes",
    "buy_card",
    "\x20|\x20Error\x20while\x20<b>getting\x20daily\x20reward</b>:\x20",
    "../utils/logger",
    "2306040CtsMCc",
    "data",
    "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>\x20",
    "/boosts",
    "\x20|\x20Error\x20while\x20<b>buying\x20card:</b>\x20",
    "exports",
    "4700717FOTwcq",
  ];
  Z = function () {
    return u;
  };
  return Z();
}
class ApiRequest {
  constructor(O) {
    const a = r;
    this[a(0x11e)] = O;
  }
  async [r(0x13b)](O) {
    const w = r;
    try {
      const B = await O[w(0x143)](app["apiUrl"] + "/");
      return B[w("0x131")];
    } catch (A) {
      const s = /ENOTFOUND\s([^\s]+)/,
        L = A[w(0x145)][w("0x12b")](s);
      logger[w(0x13f)](
        this[w(0x11e)] +
          "\x20|\x20Error\x20while\x20getting\x20User\x20Data:\x20" +
          (A[w(0x145)][w(0x12c)](w("0x137")) ||
          A[w(0x145)][w(0x12c)](w(0x125)) ||
          A[w(0x145)]["includes"]("ECONNREFUSED")
            ? w(0x13c) +
              (L && L[0x1] ? L[0x1] : "unknown\x20address") +
              w(0x146)
            : A["message"])
      ),
        await sleep(0x3);
    }
  }
  async ["get_daily_reward"](O) {
    const d = r;
    try {
      const B = await O["get"](app[d(0x123)] + d("0x148"));
      return B[d("0x131")];
    } catch (A) {
      logger["error"](this[d(0x11e)] + d(0x12e) + A[d("0x145")]);
    }
  }
  async [r("0x144")](O) {
    const q = r;
    try {
      const B = await O[q("0x128")](app[q("0x123")] + q(0x11f));
      return B[q(0x131)];
    } catch (A) {
      logger["error"](
        this[q(0x11e)] +
          "\x20|\x20Error\x20while\x20<b>claiming\x20daily\x20reward</b>:\x20" +
          A[q("0x145")]
      );
    }
  }
  async ["upgrade_boost"](O, B, A) {
    const e = r;
    try {
      const s = await O[e(0x128)](
        app[e("0x123")] + "/boosts/upgrade/" + B + "/" + A
      );
      return s["data"];
    } catch (L) {
      logger[e("0x13f")](this[e("0x11e")] + e("0x14a") + L[e(0x145)]);
    }
  }
  async [r(0x12a)](O, B) {
    const l = r;
    try {
      const A = await O["post"](
        app[l(0x123)] + l("0x124"),
        JSON["stringify"]({ coins: B })
      );
      return A[l(0x131)];
    } catch (s) {
      logger[l("0x13f")](
        this["session_name"] +
          "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>\x20" +
          s[l("0x145")]
      );
    }
  }
  async [r("0x149")](O, B) {
    const V = r;
    try {
      const A = await O[V("0x128")](
        app[V(0x123)] + "/taps/mega",
        JSON["stringify"]({ coins: B })
      );
      return A["data"];
    } catch (s) {
      logger[V(0x13f)](this[V("0x11e")] + V(0x132) + s["message"]);
    }
  }
  async [r(0x127)](O, B) {
    const c = r;
    try {
      const A = await O[c(0x128)](app[c(0x123)] + c("0x120") + B);
      return A[c("0x131")];
    } catch (s) {
      logger[c("0x13f")](
        this[c("0x11e")] +
          "\x20|\x20Error\x20while\x20<b>applying\x20boost\x20(" +
          B +
          c(0x121) +
          s[c(0x145)]
      );
    }
  }
  async [r(0x129)](O) {
    const N = r;
    try {
      const B = await O[N(0x143)](app["apiUrl"] + N(0x133));
      return B["data"];
    } catch (A) {
      logger["error"](
        this["session_name"] +
          "\x20|\x20Error\x20while\x20<b>applying\x20boost\x20(" +
          boost_type +
          N(0x121) +
          A[N("0x145")]
      );
    }
  }
  async [r("0x122")](O) {
    const o = r;
    try {
      const B = await O[o("0x143")](app[o("0x123")] + "/dungeon");
      return B[o("0x131")];
    } catch (A) {
      logger[o(0x13f)](this["session_name"] + o("0x139") + A[o(0x145)]);
    }
  }
  async [r("0x12d")](O, B, A) {
    const G = r;
    try {
      const s = await O["post"](app["apiUrl"] + G(0x141) + B + G(0x142) + A);
      return s["data"];
    } catch (L) {
      logger["error"](this["session_name"] + G("0x134") + L[G(0x145)]);
    }
  }
}
module[r(0x135)] = ApiRequest;
