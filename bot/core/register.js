function Z() {
  const q = [
    "Please\x20enter\x20the\x20code\x20you\x20received:\x20",
    "error",
    "telegram",
    "\x20already\x20exists!",
    "number",
    "Please\x20enter\x20a\x20different\x20session\x20name:\x20",
    "text",
    "5856605LyJmHn",
    "../utils/logger",
    "stringify",
    "telegram/sessions",
    "2751278kNlVPi",
    "1.0.0",
    "cwd",
    "11mHneZs",
    "Please\x20enter\x20your\x20password:\x20",
    "Session\x20saved\x20as\x20",
    "14452wVqPwt",
    "19413070NrVKuv",
    "existsSync",
    "51664lgFqFQ",
    "disconnect",
    ".session",
    "Please\x20enter\x20your\x20session\x20name:\x20",
    "sessions",
    "string",
    "config",
    "../utils/TldLogger",
    "input",
    "650665NBKvhF",
    "join",
    "API_HASH",
    "741zNZjgH",
    "exit",
    "exports",
    "mkdirSync",
    "666kUPceN",
    "API_ID\x20and\x20API_HASH\x20must\x20be\x20provided.",
    "start",
    "../config/config",
    "426118NIJJeY",
    "success",
    "API_ID\x20and\x20API_HASH\x20must\x20be\x20numbers\x20and\x20strings\x20respectively.",
    "84FmyLBX",
  ];
  Z = function () {
    return q;
  };
  return Z();
}
const r = E;
(function (O, B) {
  const Q = E,
    A = O();
  while (!![]) {
    try {
      const s =
        parseInt(Q("0x1ef")) / 0x1 +
        parseInt(Q(0x209)) / 0x2 +
        (parseInt(Q("0x1f2")) / 0x3) * (-parseInt(Q("0x1e3")) / 0x4) +
        parseInt(Q(0x205)) / 0x5 +
        (parseInt(Q(0x1fd)) / 0x6) * (parseInt(Q(0x1fa)) / 0x7) +
        (-parseInt(Q(0x1e6)) / 0x8) * (parseInt(Q("0x1f6")) / 0x9) +
        (-parseInt(Q("0x1e4")) / 0xa) * (parseInt(Q(0x1e0)) / 0xb);
      if (s === B) break;
      else A["push"](A["shift"]());
    } catch (L) {
      A["push"](A["shift"]());
    }
  }
})(Z, 0xb43cb);
const { TelegramClient, sessions } = require(r(0x200)),
  { StringSession } = require(r(0x208)),
  input = require(r("0x1ee")),
  fs = require("fs"),
  logger = require(r("0x206")),
  settings = require(r("0x1f9"));
function E(O, B) {
  const A = Z();
  return (
    (E = function (s, L) {
      s = s - 0x1e0;
      let Q = A[s];
      return Q;
    }),
    E(O, B)
  );
}
require("dotenv")[r(0x1ec)]();
const path = require("path"),
  logger2 = require(r(0x1ed));
class Register {
  #stringSession;
  #apiId;
  #apiHash;
  constructor() {
    const a = r;
    (this.#apiId = settings["API_ID"]),
      (this.#apiHash = settings[a(0x1f1)]),
      (this.#stringSession = new StringSession(""));
  }
  async #getSessionName() {
    const w = r,
      O = path[w("0x1f0")](process[w("0x20b")](), "sessions");
    let B = await input["text"](w("0x1e9"));
    do {
      fs[w("0x1e5")](O + "/" + B + w(0x1e8)) &&
        (logger["warning"]("Session\x20name\x20" + B + w("0x201")),
        (B = await input["text"](w("0x203"))));
    } while (fs["existsSync"](O + "/" + B + w("0x1e8")));
    return B;
  }
  async ["start"]() {
    const d = r,
      O = path[d("0x1f0")](process[d("0x20b")](), d("0x1ea"));
    (!this.#apiId || !this.#apiHash) &&
      (logger[d("0x1ff")](d(0x1f7)), process[d(0x1f3)](0x1));
    (typeof this.#apiHash !== d("0x1eb") || typeof this.#apiId !== d(0x202)) &&
      (logger["error"](d(0x1fc)), process[d("0x1f3")](0x1));
    const B = await this.#getSessionName(),
      A = new TelegramClient(this.#stringSession, this.#apiId, this.#apiHash, {
        connectionRetries: 0x5,
        deviceModel: "FreddyBot\x201.0",
        appVersion: d("0x20a"),
        baseLogger: logger2,
      });
    await A[d(0x1f8)]({
      phoneNumber: async () =>
        await input[d(0x204)]("Please\x20enter\x20your\x20number:\x20"),
      password: async () => await input[d("0x204")](d("0x1e1")),
      phoneCode: async () => await input[d(0x204)](d(0x1fe)),
      onError: (L) => console[d(0x1ff)](L),
    });
    !fs[d(0x1e5)](O) && fs[d("0x1f5")](O);
    const s = {
      apiId: this.#apiId,
      apiHash: this.#apiHash,
      sessionString: this.#stringSession["save"](),
    };
    fs["writeFileSync"](
      O + "/" + B + d("0x1e8"),
      JSON[d("0x207")](s, null, 0x2)
    ),
      logger[d(0x1fb)](d(0x1e2) + B + d("0x1e8")),
      A[d(0x1e7)](),
      process[d(0x1f3)](0x0);
  }
}
const register = new Register();
module[r(0x1f4)] = register;
