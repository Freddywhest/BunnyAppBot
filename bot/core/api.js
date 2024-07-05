const _0x47df5e = _0x4dc9;
(function (_0x247136, _0x1f9e63) {
  const _0x5cdff2 = _0x4dc9,
    _0x392647 = _0x247136();
  while (!![]) {
    try {
      const _0x18252d =
        parseInt(_0x5cdff2(0x1f5)) / 0x1 +
        (-parseInt(_0x5cdff2(0x1fe)) / 0x2) *
          (-parseInt(_0x5cdff2(0x20a)) / 0x3) +
        parseInt(_0x5cdff2(0x210)) / 0x4 +
        parseInt(_0x5cdff2(0x1eb)) / 0x5 +
        -parseInt(_0x5cdff2(0x1fd)) / 0x6 +
        parseInt(_0x5cdff2(0x1e7)) / 0x7 +
        (-parseInt(_0x5cdff2(0x205)) / 0x8) *
          (parseInt(_0x5cdff2(0x208)) / 0x9);
      if (_0x18252d === _0x1f9e63) break;
      else _0x392647["push"](_0x392647["shift"]());
    } catch (_0x2ddd37) {
      _0x392647["push"](_0x392647["shift"]());
    }
  }
})(_0xce6e, 0x2588c);
const app = require(_0x47df5e(0x1f4)),
  logger = require(_0x47df5e(0x206)),
  sleep = require(_0x47df5e(0x215));
function _0x4dc9(_0x2623a6, _0x378a27) {
  const _0xce6ec4 = _0xce6e();
  return (
    (_0x4dc9 = function (_0x4dc9c7, _0x1e245b) {
      _0x4dc9c7 = _0x4dc9c7 - 0x1e5;
      let _0x46c658 = _0xce6ec4[_0x4dc9c7];
      return _0x46c658;
    }),
    _0x4dc9(_0x2623a6, _0x378a27)
  );
}
function _0xce6e() {
  const _0x14bd6b = [
    "getaddrinfo",
    "659350STYHCa",
    "buy_card",
    "\x20|\x20Error\x20while\x20<b>applying\x20boost\x20(",
    "session_name",
    "/boosts/upgrade/",
    "/taps",
    "data",
    "get_cards",
    "claim_daily_reward",
    "../config/app",
    "152459reqNnx",
    "/dungeon",
    "The\x20proxy\x20server\x20at\x20",
    "apply_boost",
    "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>\x20",
    "includes",
    "match",
    "/taps/mega",
    "1403226oivzfS",
    "2emmNpN",
    "send_taps",
    "post",
    "upgrade_boost",
    "apiUrl",
    "message",
    "get_daily_reward",
    "8YjdiMW",
    "../utils/logger",
    "get_user_data",
    "2957319dvxAWF",
    "stringify",
    "693612PhRFoP",
    "):</b>\x20",
    "\x20|\x20Error\x20while\x20<b>getting\x20cards:</b>\x20",
    "/boosts",
    "get",
    "error",
    "391596AtpJQf",
    "exports",
    "/upgrade/",
    "unknown\x20address",
    "send_mega_taps",
    "../utils/sleep",
    "\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection",
    "\x20|\x20Error\x20while\x20<b>claiming\x20daily\x20reward</b>:\x20",
    "get_boost",
    "719390FIAejw",
    "/dungeon/",
    "/daily/claim",
  ];
  _0xce6e = function () {
    return _0x14bd6b;
  };
  return _0xce6e();
}
class ApiRequest {
  constructor(_0x287779) {
    const _0x5752a3 = _0x47df5e;
    this[_0x5752a3(0x1ee)] = _0x287779;
  }
  async [_0x47df5e(0x207)](_0x5dd9d8) {
    const _0x554169 = _0x47df5e;
    try {
      const _0x9b686f = await _0x5dd9d8[_0x554169(0x20e)](
        app[_0x554169(0x202)] + "/"
      );
      return _0x9b686f["data"];
    } catch (_0x962fa7) {
      const _0x46aa84 = /ENOTFOUND\s([^\s]+)/,
        _0x56108f = _0x962fa7[_0x554169(0x203)][_0x554169(0x1fb)](_0x46aa84);
      logger[_0x554169(0x20f)](
        this[_0x554169(0x1ee)] +
          "\x20|\x20Error\x20while\x20getting\x20User\x20Data:\x20" +
          (_0x962fa7[_0x554169(0x203)][_0x554169(0x1fa)]("ENOTFOUND") ||
          _0x962fa7["message"]["includes"](_0x554169(0x1ea)) ||
          _0x962fa7[_0x554169(0x203)][_0x554169(0x1fa)]("ECONNREFUSED")
            ? _0x554169(0x1f7) +
              (_0x56108f && _0x56108f[0x1]
                ? _0x56108f[0x1]
                : _0x554169(0x213)) +
              _0x554169(0x216)
            : _0x962fa7[_0x554169(0x203)])
      ),
        await sleep(0x3);
    }
  }
  async [_0x47df5e(0x204)](_0x196d36) {
    const _0x8596aa = _0x47df5e;
    try {
      const _0x3cf854 = await _0x196d36[_0x8596aa(0x20e)](
        app["apiUrl"] + "/daily/list"
      );
      return _0x3cf854[_0x8596aa(0x1f1)];
    } catch (_0x2f7c2d) {
      logger["error"](
        this["session_name"] +
          "\x20|\x20Error\x20while\x20<b>getting\x20daily\x20reward</b>:\x20" +
          _0x2f7c2d[_0x8596aa(0x203)]
      );
    }
  }
  async [_0x47df5e(0x1f3)](_0x48106f) {
    const _0x4746cc = _0x47df5e;
    try {
      const _0x5775a8 = await _0x48106f[_0x4746cc(0x200)](
        app[_0x4746cc(0x202)] + _0x4746cc(0x1e9)
      );
      return _0x5775a8["data"];
    } catch (_0x2ecc27) {
      logger[_0x4746cc(0x20f)](
        this[_0x4746cc(0x1ee)] + _0x4746cc(0x1e5) + _0x2ecc27[_0x4746cc(0x203)]
      );
    }
  }
  async [_0x47df5e(0x201)](_0x21e4b2, _0x50fa7e, _0x432214) {
    const _0x5115d9 = _0x47df5e;
    try {
      const _0x1294b4 = await _0x21e4b2["post"](
        app[_0x5115d9(0x202)] + _0x5115d9(0x1ef) + _0x50fa7e + "/" + _0x432214
      );
      return _0x1294b4["data"];
    } catch (_0x259dbd) {
      logger[_0x5115d9(0x20f)](
        this[_0x5115d9(0x1ee)] +
          "\x20|\x20Error\x20while\x20<b>upgrading\x20Boost:</b>:\x20" +
          _0x259dbd[_0x5115d9(0x203)]
      );
    }
  }
  async [_0x47df5e(0x1ff)](_0x37b66a, _0x1545d4) {
    const _0x19e0ee = _0x47df5e;
    try {
      const _0x4655b4 = await _0x37b66a[_0x19e0ee(0x200)](
        app[_0x19e0ee(0x202)] + _0x19e0ee(0x1f0),
        JSON[_0x19e0ee(0x209)]({ coins: _0x1545d4 })
      );
      return _0x4655b4[_0x19e0ee(0x1f1)];
    } catch (_0x1d6b49) {
      logger[_0x19e0ee(0x20f)](
        this[_0x19e0ee(0x1ee)] + _0x19e0ee(0x1f9) + _0x1d6b49[_0x19e0ee(0x203)]
      );
    }
  }
  async [_0x47df5e(0x214)](_0x57f973, _0x5b946a) {
    const _0x5bd5e4 = _0x47df5e;
    try {
      const _0x2eae2e = await _0x57f973[_0x5bd5e4(0x200)](
        app[_0x5bd5e4(0x202)] + _0x5bd5e4(0x1fc),
        JSON["stringify"]({ coins: _0x5b946a })
      );
      return _0x2eae2e[_0x5bd5e4(0x1f1)];
    } catch (_0x360d9f) {
      logger[_0x5bd5e4(0x20f)](
        this[_0x5bd5e4(0x1ee)] + _0x5bd5e4(0x1f9) + _0x360d9f[_0x5bd5e4(0x203)]
      );
    }
  }
  async [_0x47df5e(0x1f8)](_0x419465, _0x3e5518) {
    const _0x38db92 = _0x47df5e;
    try {
      const _0x195e6d = await _0x419465[_0x38db92(0x200)](
        app[_0x38db92(0x202)] + "/boosts/action/" + _0x3e5518
      );
      return _0x195e6d[_0x38db92(0x1f1)];
    } catch (_0x4ace1b) {
      logger[_0x38db92(0x20f)](
        this[_0x38db92(0x1ee)] +
          _0x38db92(0x1ed) +
          _0x3e5518 +
          _0x38db92(0x20b) +
          _0x4ace1b[_0x38db92(0x203)]
      );
    }
  }
  async [_0x47df5e(0x1e6)](_0x169fda) {
    const _0x4565b4 = _0x47df5e;
    try {
      const _0x2c6034 = await _0x169fda["get"](
        app[_0x4565b4(0x202)] + _0x4565b4(0x20d)
      );
      return _0x2c6034[_0x4565b4(0x1f1)];
    } catch (_0xc03529) {
      logger[_0x4565b4(0x20f)](
        this["session_name"] +
          _0x4565b4(0x1ed) +
          boost_type +
          _0x4565b4(0x20b) +
          _0xc03529[_0x4565b4(0x203)]
      );
    }
  }
  async [_0x47df5e(0x1f2)](_0x219535) {
    const _0x32f643 = _0x47df5e;
    try {
      const _0x1d0c52 = await _0x219535[_0x32f643(0x20e)](
        app[_0x32f643(0x202)] + _0x32f643(0x1f6)
      );
      return _0x1d0c52[_0x32f643(0x1f1)];
    } catch (_0x224d2e) {
      logger[_0x32f643(0x20f)](
        this[_0x32f643(0x1ee)] + _0x32f643(0x20c) + _0x224d2e[_0x32f643(0x203)]
      );
    }
  }
  async [_0x47df5e(0x1ec)](_0x4764d7, _0x597603, _0x49d10c) {
    const _0x37e802 = _0x47df5e;
    try {
      const _0x1ebd3f = await _0x4764d7[_0x37e802(0x200)](
        app["apiUrl"] +
          _0x37e802(0x1e8) +
          _0x597603 +
          _0x37e802(0x212) +
          _0x49d10c
      );
      return _0x1ebd3f[_0x37e802(0x1f1)];
    } catch (_0x45e475) {
      logger[_0x37e802(0x20f)](
        this[_0x37e802(0x1ee)] +
          "\x20|\x20Error\x20while\x20<b>buying\x20card:</b>\x20" +
          _0x45e475[_0x37e802(0x203)]
      );
    }
  }
}
module[_0x47df5e(0x211)] = ApiRequest;
