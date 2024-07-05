const _0x4aee72 = _0x3a15;
(function (_0x561085, _0x37a6f8) {
  const _0x299a0d = _0x3a15,
    _0x5523a8 = _0x561085();
  while (!![]) {
    try {
      const _0x544a86 =
        (-parseInt(_0x299a0d(0xbd)) / 0x1) * (parseInt(_0x299a0d(0x98)) / 0x2) +
        -parseInt(_0x299a0d(0xc0)) / 0x3 +
        -parseInt(_0x299a0d(0x9c)) / 0x4 +
        parseInt(_0x299a0d(0xbf)) / 0x5 +
        (parseInt(_0x299a0d(0xc2)) / 0x6) * (-parseInt(_0x299a0d(0xb0)) / 0x7) +
        (parseInt(_0x299a0d(0xb7)) / 0x8) * (parseInt(_0x299a0d(0x9f)) / 0x9) +
        parseInt(_0x299a0d(0xa8)) / 0xa;
      if (_0x544a86 === _0x37a6f8) break;
      else _0x5523a8["push"](_0x5523a8["shift"]());
    } catch (_0x234b0e) {
      _0x5523a8["push"](_0x5523a8["shift"]());
    }
  }
})(_0x394f, 0x56415);
function _0x394f() {
  const _0x2c2a28 = [
    "\x20|\x20Error\x20while\x20<b>buying\x20card:</b>:\x20",
    "/boosts/action/",
    "\x20|\x20Error\x20while\x20<b>claiming\x20daily\x20reward</b>:\x20",
    "/taps",
    "match",
    "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>:\x20",
    "message",
    "350uVSDVZ",
    "buy_card",
    "session_name",
    "../utils/logger",
    "apiUrl",
    "/dungeon",
    "getaddrinfo",
    "72jjahCE",
    "error",
    "../utils/sleep",
    "stringify",
    "\x20|\x20Error\x20while\x20<b>buying\x20card:</b>\x20",
    "exports",
    "152058gsCsYo",
    "\x20|\x20Error\x20while\x20<b>getting\x20cards:</b>\x20",
    "2990065BPnZbx",
    "424860fMAKXh",
    "data",
    "32484umcmFb",
    "apply_boost",
    "\x20|\x20Error\x20while\x20<b>getting\x20daily\x20reward</b>:\x20",
    "send_mega_taps",
    "ECONNREFUSED",
    "ENOTFOUND",
    "/upgrade/",
    "unknown\x20address",
    "response",
    "/boosts",
    "get",
    "get_user_data",
    "8fTzApA",
    "/dungeon/",
    "\x20|\x20Error\x20while\x20<b>upgrading\x20Boost:</b>:\x20",
    "send_taps",
    "569988veCoBR",
    "get_boost",
    "upgrade_boost",
    "568845rLzKeE",
    "/daily/list",
    "\x20|\x20Error\x20while\x20<b>getting\x20boost:</b>:\x20",
    "post",
    "includes",
    "../config/app",
    "get_daily_reward",
    "\x20|\x20Error\x20while\x20<b>applying\x20boost\x20(",
    "):</b>\x20",
    "3494920QtBIhO",
  ];
  _0x394f = function () {
    return _0x2c2a28;
  };
  return _0x394f();
}
const app = require(_0x4aee72(0xa4)),
  logger = require(_0x4aee72(0xb3)),
  sleep = require(_0x4aee72(0xb9));
function _0x3a15(_0x1bcb04, _0x3ba7ec) {
  const _0x394fc8 = _0x394f();
  return (
    (_0x3a15 = function (_0x3a15e8, _0x34142a) {
      _0x3a15e8 = _0x3a15e8 - 0x8e;
      let _0x149304 = _0x394fc8[_0x3a15e8];
      return _0x149304;
    }),
    _0x3a15(_0x1bcb04, _0x3ba7ec)
  );
}
class ApiRequest {
  constructor(_0x56fabb) {
    const _0x4e300e = _0x4aee72;
    this[_0x4e300e(0xb2)] = _0x56fabb;
  }
  async [_0x4aee72(0x97)](_0x5b9cb4) {
    const _0x47e9f1 = _0x4aee72;
    try {
      const _0x4b07ae = await _0x5b9cb4[_0x47e9f1(0x96)](
        app[_0x47e9f1(0xb4)] + "/"
      );
      return _0x4b07ae[_0x47e9f1(0xc1)];
    } catch (_0x374083) {
      const _0x1e6698 = /ENOTFOUND\s([^\s]+)/,
        _0x1af9d9 = _0x374083[_0x47e9f1(0xaf)][_0x47e9f1(0xad)](_0x1e6698);
      logger[_0x47e9f1(0xb8)](
        this["session_name"] +
          "\x20|\x20Error\x20while\x20getting\x20User\x20Data:\x20" +
          (_0x374083[_0x47e9f1(0xaf)][_0x47e9f1(0xa3)](_0x47e9f1(0x91)) ||
          _0x374083[_0x47e9f1(0xaf)][_0x47e9f1(0xa3)](_0x47e9f1(0xb6)) ||
          _0x374083[_0x47e9f1(0xaf)][_0x47e9f1(0xa3)](_0x47e9f1(0x90))
            ? "The\x20proxy\x20server\x20at\x20" +
              (_0x1af9d9 && _0x1af9d9[0x1] ? _0x1af9d9[0x1] : _0x47e9f1(0x93)) +
              "\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection"
            : _0x374083[_0x47e9f1(0xaf)])
      ),
        await sleep(0x3);
    }
  }
  async [_0x4aee72(0xa5)](_0xdd1662) {
    const _0xe4e7cb = _0x4aee72;
    try {
      const _0x398a68 = await _0xdd1662[_0xe4e7cb(0x96)](
        app[_0xe4e7cb(0xb4)] + _0xe4e7cb(0xa0)
      );
      return _0x398a68[_0xe4e7cb(0xc1)];
    } catch (_0x11af04) {
      _0x11af04?.["response"] && _0x11af04?.["response"]["data"]
        ? logger["error"](
            this[_0xe4e7cb(0xb2)] +
              _0xe4e7cb(0x8e) +
              _0x11af04[_0xe4e7cb(0x94)][_0xe4e7cb(0xc1)]
          )
        : logger[_0xe4e7cb(0xb8)](
            this[_0xe4e7cb(0xb2)] + _0xe4e7cb(0x8e) + _0x11af04[_0xe4e7cb(0xaf)]
          );
    }
  }
  async ["claim_daily_reward"](_0x51dd9d) {
    const _0x9b31f5 = _0x4aee72;
    try {
      const _0x4650f0 = await _0x51dd9d[_0x9b31f5(0xa2)](
        app[_0x9b31f5(0xb4)] + "/daily/claim"
      );
      return _0x4650f0[_0x9b31f5(0xc1)];
    } catch (_0xc23745) {
      _0xc23745?.["response"] && _0xc23745?.[_0x9b31f5(0x94)][_0x9b31f5(0xc1)]
        ? logger[_0x9b31f5(0xb8)](
            this["session_name"] +
              _0x9b31f5(0xab) +
              _0xc23745[_0x9b31f5(0x94)][_0x9b31f5(0xc1)]
          )
        : logger[_0x9b31f5(0xb8)](
            this[_0x9b31f5(0xb2)] + _0x9b31f5(0xab) + _0xc23745[_0x9b31f5(0xaf)]
          );
    }
  }
  async [_0x4aee72(0x9e)](_0x572b68, _0x34a759, _0x658115) {
    const _0x54c493 = _0x4aee72;
    try {
      const _0x56bf2b = await _0x572b68[_0x54c493(0xa2)](
        app[_0x54c493(0xb4)] + "/boosts/upgrade/" + _0x34a759 + "/" + _0x658115
      );
      return _0x56bf2b[_0x54c493(0xc1)];
    } catch (_0xb25927) {
      _0xb25927?.[_0x54c493(0x94)] &&
      _0xb25927?.[_0x54c493(0x94)][_0x54c493(0xc1)]
        ? logger["error"](
            this[_0x54c493(0xb2)] +
              _0x54c493(0x9a) +
              _0xb25927[_0x54c493(0x94)][_0x54c493(0xc1)]
          )
        : logger["error"](
            this[_0x54c493(0xb2)] + _0x54c493(0x9a) + _0xb25927["message"]
          );
    }
  }
  async [_0x4aee72(0x9b)](_0x53cb33, _0x135aae) {
    const _0x20ed2f = _0x4aee72;
    try {
      const _0xcb9705 = await _0x53cb33["post"](
        app[_0x20ed2f(0xb4)] + _0x20ed2f(0xac),
        JSON[_0x20ed2f(0xba)]({ coins: _0x135aae })
      );
      return _0xcb9705[_0x20ed2f(0xc1)];
    } catch (_0xba1f29) {
      _0xba1f29?.["response"] && _0xba1f29?.["response"][_0x20ed2f(0xc1)]
        ? logger["error"](
            this[_0x20ed2f(0xb2)] +
              _0x20ed2f(0xae) +
              _0xba1f29[_0x20ed2f(0x94)][_0x20ed2f(0xc1)]
          )
        : logger[_0x20ed2f(0xb8)](
            this[_0x20ed2f(0xb2)] +
              "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>:\x20" +
              _0xba1f29[_0x20ed2f(0xaf)]
          );
    }
  }
  async [_0x4aee72(0x8f)](_0x471622, _0xc7c2bc) {
    const _0x34b898 = _0x4aee72;
    try {
      const _0x3ae962 = await _0x471622[_0x34b898(0xa2)](
        app["apiUrl"] + "/taps/mega",
        JSON[_0x34b898(0xba)]({ coins: _0xc7c2bc })
      );
      return _0x3ae962[_0x34b898(0xc1)];
    } catch (_0x5ebf61) {
      _0x5ebf61?.["response"] && _0x5ebf61?.[_0x34b898(0x94)][_0x34b898(0xc1)]
        ? logger[_0x34b898(0xb8)](
            this[_0x34b898(0xb2)] +
              "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>:\x20" +
              _0x5ebf61[_0x34b898(0x94)]["data"]
          )
        : logger[_0x34b898(0xb8)](
            this[_0x34b898(0xb2)] + _0x34b898(0xae) + _0x5ebf61[_0x34b898(0xaf)]
          );
    }
  }
  async [_0x4aee72(0xc3)](_0x4558d8, _0xf64ab4) {
    const _0x2efaef = _0x4aee72;
    try {
      const _0x420bf7 = await _0x4558d8[_0x2efaef(0xa2)](
        app["apiUrl"] + _0x2efaef(0xaa) + _0xf64ab4
      );
      return _0x420bf7[_0x2efaef(0xc1)];
    } catch (_0x3cb6d5) {
      _0x3cb6d5?.["response"] && _0x3cb6d5?.[_0x2efaef(0x94)][_0x2efaef(0xc1)]
        ? logger[_0x2efaef(0xb8)](
            this[_0x2efaef(0xb2)] +
              _0x2efaef(0xa6) +
              _0xf64ab4 +
              "):</b>:\x20" +
              _0x3cb6d5[_0x2efaef(0x94)][_0x2efaef(0xc1)]
          )
        : logger[_0x2efaef(0xb8)](
            this[_0x2efaef(0xb2)] +
              _0x2efaef(0xa6) +
              _0xf64ab4 +
              _0x2efaef(0xa7) +
              _0x3cb6d5[_0x2efaef(0xaf)]
          );
    }
  }
  async [_0x4aee72(0x9d)](_0x118dab) {
    const _0x3695a8 = _0x4aee72;
    try {
      const _0xb72d3f = await _0x118dab["get"](
        app[_0x3695a8(0xb4)] + _0x3695a8(0x95)
      );
      return _0xb72d3f[_0x3695a8(0xc1)];
    } catch (_0x623699) {
      _0x623699?.["response"] && _0x623699?.["response"][_0x3695a8(0xc1)]
        ? logger[_0x3695a8(0xb8)](
            this[_0x3695a8(0xb2)] +
              _0x3695a8(0xa1) +
              _0x623699["response"][_0x3695a8(0xc1)]
          )
        : logger[_0x3695a8(0xb8)](
            this["session_name"] + _0x3695a8(0xa1) + _0x623699[_0x3695a8(0xaf)]
          );
    }
  }
  async ["get_cards"](_0x3dea61) {
    const _0x160821 = _0x4aee72;
    try {
      const _0x1dabad = await _0x3dea61[_0x160821(0x96)](
        app[_0x160821(0xb4)] + _0x160821(0xb5)
      );
      return _0x1dabad["data"];
    } catch (_0x59377a) {
      _0x59377a?.[_0x160821(0x94)] && _0x59377a?.[_0x160821(0x94)]["data"]
        ? logger["error"](
            this[_0x160821(0xb2)] +
              "\x20|\x20Error\x20while\x20<b>getting\x20cards:</b>:\x20" +
              _0x59377a[_0x160821(0x94)][_0x160821(0xc1)]
          )
        : logger[_0x160821(0xb8)](
            this[_0x160821(0xb2)] + _0x160821(0xbe) + _0x59377a[_0x160821(0xaf)]
          );
    }
  }
  async [_0x4aee72(0xb1)](_0xa37894, _0x350439, _0x13c395) {
    const _0x2daf0e = _0x4aee72;
    try {
      const _0x3d27fd = await _0xa37894[_0x2daf0e(0xa2)](
        app[_0x2daf0e(0xb4)] +
          _0x2daf0e(0x99) +
          _0x350439 +
          _0x2daf0e(0x92) +
          _0x13c395
      );
      return _0x3d27fd[_0x2daf0e(0xc1)];
    } catch (_0x3c7303) {
      _0x3c7303?.["response"] && _0x3c7303?.[_0x2daf0e(0x94)][_0x2daf0e(0xc1)]
        ? logger[_0x2daf0e(0xb8)](
            this[_0x2daf0e(0xb2)] +
              _0x2daf0e(0xa9) +
              _0x3c7303["response"]["data"]
          )
        : logger[_0x2daf0e(0xb8)](
            this[_0x2daf0e(0xb2)] + _0x2daf0e(0xbb) + _0x3c7303["message"]
          );
    }
  }
}
module[_0x4aee72(0xbc)] = ApiRequest;
