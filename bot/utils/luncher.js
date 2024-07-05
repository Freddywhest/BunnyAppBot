function _0x223a(_0x337ac2, _0x3dc670) {
  const _0x5136a5 = _0x5136();
  return (
    (_0x223a = function (_0x223a5e, _0x189107) {
      _0x223a5e = _0x223a5e - 0xbd;
      let _0x28d8f2 = _0x5136a5[_0x223a5e];
      return _0x28d8f2;
    }),
    _0x223a(_0x337ac2, _0x3dc670)
  );
}
const _0x171496 = _0x223a;
(function (_0x508987, _0xffeca1) {
  const _0x9514b5 = _0x223a,
    _0x186f0f = _0x508987();
  while (!![]) {
    try {
      const _0x264fab =
        parseInt(_0x9514b5(0xc7)) / 0x1 +
        (-parseInt(_0x9514b5(0xeb)) / 0x2) * (parseInt(_0x9514b5(0xbf)) / 0x3) +
        (-parseInt(_0x9514b5(0xd4)) / 0x4) * (parseInt(_0x9514b5(0xdb)) / 0x5) +
        (parseInt(_0x9514b5(0xcc)) / 0x6) * (-parseInt(_0x9514b5(0xd1)) / 0x7) +
        (parseInt(_0x9514b5(0xf5)) / 0x8) * (-parseInt(_0x9514b5(0xe3)) / 0x9) +
        (parseInt(_0x9514b5(0xcd)) / 0xa) * (parseInt(_0x9514b5(0xc4)) / 0xb) +
        (-parseInt(_0x9514b5(0xc3)) / 0xc) * (-parseInt(_0x9514b5(0xd3)) / 0xd);
      if (_0x264fab === _0xffeca1) break;
      else _0x186f0f["push"](_0x186f0f["shift"]());
    } catch (_0x5e5e03) {
      _0x186f0f["push"](_0x186f0f["shift"]());
    }
  }
})(_0x5136, 0xe0d83);
const register = require(_0x171496(0xdc)),
  logger = require(_0x171496(0xe2)),
  input = require(_0x171496(0xc1)),
  fs = require("fs"),
  path = require(_0x171496(0xe9)),
  settings = require(_0x171496(0xfd)),
  proxies = require(_0x171496(0xd8)),
  { program, Option } = require(_0x171496(0xc2)),
  { TelegramClient, client } = require("telegram"),
  Tapper = require("../core/tapper"),
  { StringSession } = require(_0x171496(0xf8)),
  logger2 = require("./TldLogger");
function _0x5136() {
  const _0x5d3685 = [
    "sessions",
    "trim",
    "../config/proxies",
    "text",
    "USE_PROXY_FROM_FILE",
    "285JnrpYb",
    "../core/register",
    "match",
    "cwd",
    "readFileSync",
    "start",
    "info",
    "./logger",
    "10138815vNxKVO",
    "apiId",
    "warning",
    "apiHash",
    "</b></la>\x20|\x20Error:\x20",
    "sessionString",
    "path",
    "Detected\x20<lb>",
    "155514sVkhlL",
    "split",
    "length",
    "error",
    "parse",
    "showHelpAfterError",
    "endsWith",
    "utf8",
    "paragraph",
    "join",
    "8TXsQoE",
    "addOption",
    "Error\x20in\x20task\x20for\x20tg_client:\x20",
    "telegram/sessions",
    "choices",
    ".session",
    "<ye><u><b>WARNING</b></u></ye>\x20<br\x20/>\x0a<b><bl>en:</bl></b>\x20NOT\x20FOR\x20SALE\x0a<b><bl>ru:</bl></b>\x20НЕ\x20ДЛЯ\x20ПРОДАЖИ\x0a<b><bl>es:</bl></b>\x20NO\x20VENTA\x0a<b><bl>fr:</bl></b>\x20PAS\x20À\x20VENDRE\x0a<b><bl>it:</bl></b>\x20NON\x20PER\x20VENDITA\x0a<b><bl>gh:</bl></b>\x20YƐN\x20TƆN\x0a\x0a<b>For\x20updates\x20and\x20more\x20bots\x20join\x20us:</b>\x20\x0a<la>https://t.me/freddy_bots</la>\x0a",
    "1.0.0",
    "../config/config",
    "message",
    "API_ID\x20and\x20API_HASH\x20must\x20be\x20provided.",
    "process",
    "value",
    "54witAUC",
    "exit",
    "input",
    "commander",
    "2796zNVkex",
    "22QWShDG",
    "Enter\x20the\x20number\x20of\x20the\x20action\x20you\x20want\x20to\x20perform:\x20",
    "next",
    "295934FFFxsi",
    "map",
    "test",
    "isArray",
    "API_HASH",
    "5124GLTSVH",
    "2443010wUMDXD",
    "<la><b>",
    "--action\x20<action>",
    "</b></la>\x20|\x20Invalid\x20session\x20data.\x20Create\x20a\x20new\x20one.",
    "10353KnHJGB",
    "</b></la>\x20|\x20Session\x20is\x20empty\x20or\x20expired.\x20Create\x20a\x20new\x20one.",
    "219947sJpoyd",
    "1156XBpQZk",
    "run",
  ];
  _0x5136 = function () {
    return _0x5d3685;
  };
  return _0x5136();
}
class Luncher {
  #start_text;
  constructor() {
    this.#start_text =
      "\x0a╔══╗\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╔═══╗\x20\x20\x20\x20\x20\x20\x20\x20╔══╗\x20\x20\x20\x20\x20\x20╔╗\x20\x0a║╔╗║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╔═╗║\x20\x20\x20\x20\x20\x20\x20\x20║╔╗║\x20\x20\x20\x20\x20╔╝╚╗\x0a║╚╝╚╗╔╗╔╗╔═╗\x20╔═╗\x20╔╗\x20╔╗║║\x20║║╔══╗╔══╗║╚╝╚╗╔══╗╚╗╔╝\x0a║╔═╗║║║║║║╔╗╗║╔╗╗║║\x20║║║╚═╝║║╔╗║║╔╗║║╔═╗║║╔╗║\x20║║\x20\x0a║╚═╝║║╚╝║║║║║║║║║║╚═╝║║╔═╗║║╚╝║║╚╝║║╚═╝║║╚╝║\x20║╚╗\x0a╚═══╝╚══╝╚╝╚╝╚╝╚╝╚═╗╔╝╚╝\x20╚╝║╔═╝║╔═╝╚═══╝╚══╝\x20╚═╝\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╔═╝║\x20\x20\x20\x20\x20\x20║║\x20\x20║║\x20By\x20Freddy\x20Bots\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╚══╝\x20\x20\x20\x20\x20\x20╚╝\x20\x20╚╝\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aSelect\x20an\x20action:\x0a\x0a1.\x20Create\x20session\x0a2.\x20Run\x20bot\x0a\x20\x20\x20\x20\x20";
  }
  #printStartText() {
    const _0x45f809 = _0x171496;
    logger[_0x45f809(0xe1)](
      _0x45f809(0xea) +
        this.#get_sessions()["length"] +
        "</lb>\x20sessions\x20|\x20<pi>" +
        (this.#get_proxies() && Array[_0x45f809(0xca)](this.#get_proxies())
          ? this.#get_proxies()[_0x45f809(0xed)]
          : 0x0) +
        "</pi>\x20proxies"
    ),
      logger[_0x45f809(0xf3)](_0x45f809(0xfb)),
      console["log"](this.#start_text);
  }
  async [_0x171496(0xbd)]() {
    const _0x328050 = _0x171496;
    let _0x7661a1;
    program[_0x328050(0xf6)](
      new Option(_0x328050(0xcf), "Action\x20type")[_0x328050(0xf9)](["1", "2"])
    )[_0x328050(0xf0)](!![]),
      program[_0x328050(0xef)]();
    const _0x56273d = program["opts"]();
    _0x7661a1 = _0x56273d ? parseInt(_0x56273d["action"]) : null;
    if (!_0x7661a1) {
      this.#printStartText();
      let _0x265be2 = "";
      while (!![]) {
        _0x265be2 = await input[_0x328050(0xd9)](_0x328050(0xc5));
        if (!_0x265be2[_0x328050(0xd7)]()[_0x328050(0xdd)](/^[1-2]$/))
          logger[_0x328050(0xe5)]("Action\x20must\x20be\x201\x20or\x202");
        else break;
      }
      _0x7661a1 = parseInt(_0x265be2[_0x328050(0xd7)]());
    }
    if (_0x7661a1 === 0x1) register[_0x328050(0xe0)]();
    else {
      if (_0x7661a1 === 0x2) {
        const _0x3b9da9 = await this.#get_tg_clients();
        await this.#run_tasks(_0x3b9da9);
      }
    }
  }
  async #get_tg_clients() {
    const _0x5355d9 = _0x171496,
      _0x42e044 = this.#get_sessions(),
      _0x3dfc65 = _0x42e044[_0x5355d9(0xc8)]((_0x20da48) => {
        const _0x1d7c16 = _0x5355d9;
        try {
          const _0x25de26 = fs[_0x1d7c16(0xdf)](
            path[_0x1d7c16(0xf4)](
              process["cwd"](),
              "sessions",
              _0x20da48 + ".session"
            ),
            _0x1d7c16(0xf2)
          );
          if (!_0x25de26) {
            logger[_0x1d7c16(0xee)]("<la><b>" + _0x20da48 + _0x1d7c16(0xd2));
            return;
          }
          const _0x308be1 = JSON[_0x1d7c16(0xef)](_0x25de26);
          (!settings["API_ID"] || !settings[_0x1d7c16(0xcb)]) &&
            (logger[_0x1d7c16(0xee)](_0x1d7c16(0xff)), process["exit"](0x1));
          (!_0x308be1[_0x1d7c16(0xe8)] ||
            !_0x308be1[_0x1d7c16(0xe4)] ||
            !_0x308be1[_0x1d7c16(0xe6)]) &&
            (logger[_0x1d7c16(0xee)]("<la><b>" + _0x20da48 + _0x1d7c16(0xd0)),
            process["exit"](0x1));
          !/^\d+$/[_0x1d7c16(0xc9)](_0x308be1[_0x1d7c16(0xe4)]) &&
            (logger[_0x1d7c16(0xee)](
              _0x1d7c16(0xce) + _0x20da48 + _0x1d7c16(0xd0)
            ),
            process[_0x1d7c16(0xc0)](0x1));
          const _0x19b8db = new StringSession(_0x308be1[_0x1d7c16(0xe8)]),
            _0x1cd7b5 = new TelegramClient(
              _0x19b8db,
              _0x308be1["apiId"],
              _0x308be1[_0x1d7c16(0xe6)],
              {
                connectionRetries: 0x5,
                deviceModel: "Freddy\x20Bots",
                appVersion: _0x1d7c16(0xfc),
                systemVersion: "1.0.0",
                langCode: "en",
                baseLogger: logger2,
              }
            );
          return { tg_client: _0x1cd7b5, session_name: _0x20da48 };
        } catch (_0x283bb0) {
          logger[_0x1d7c16(0xee)](
            "<la><b>" + _0x20da48 + _0x1d7c16(0xe7) + _0x283bb0[_0x1d7c16(0xfe)]
          );
        }
      });
    return _0x3dfc65;
  }
  #get_sessions() {
    const _0x1cc698 = _0x171496,
      _0xf0077e = path[_0x1cc698(0xf4)](
        process[_0x1cc698(0xde)](),
        _0x1cc698(0xd6)
      );
    if (!fs["existsSync"](_0xf0077e)) return [];
    const _0x13911f = fs["readdirSync"](_0xf0077e)[_0x1cc698(0xc8)](
      (_0x12f25f) => {
        const _0x5ef7ba = _0x1cc698,
          _0xcd352f = _0x12f25f[_0x5ef7ba(0xf1)](_0x5ef7ba(0xfa))
            ? _0x12f25f[_0x5ef7ba(0xec)](".")[0x0]
            : null;
        return _0xcd352f;
      }
    );
    return _0x13911f;
  }
  #get_proxies() {
    const _0x4ee35f = _0x171496;
    if (!settings[_0x4ee35f(0xda)]) return null;
    return proxies;
  }
  async #run_tasks(_0x3bdc4f) {
    const _0x45e51e = _0x171496,
      _0xc95c5 = this.#get_proxies();
    let _0x176f4d = _0xc95c5 ? _0xc95c5[Symbol["iterator"]]() : null;
    const _0x39c521 = _0x3bdc4f[_0x45e51e(0xc8)](async (_0x1f7c91) => {
      const _0x4d0cf7 = _0x45e51e,
        _0x991b80 = _0x176f4d
          ? _0x176f4d[_0x4d0cf7(0xc6)]()[_0x4d0cf7(0xbe)]
          : null;
      try {
        await new Tapper(_0x1f7c91)[_0x4d0cf7(0xd5)](_0x991b80);
      } catch (_0x6919b6) {
        logger[_0x4d0cf7(0xee)](_0x4d0cf7(0xf7) + _0x6919b6[_0x4d0cf7(0xfe)]);
      }
    });
    await Promise["all"](_0x39c521);
  }
}
const luncher = new Luncher();
module["exports"] = luncher;
