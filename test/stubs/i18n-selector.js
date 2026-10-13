const LANGS = ['zh-CN', 'en-US', 'ru-RU', 'ja-JP', 'ko-KR'];

let lan = 'zh-CN';

function create_magic() {
  const target = function () {};
  const proxy = new Proxy(target, {
    apply: () => proxy,
    get(_target, prop) {
      if (prop === 'then') {
        return undefined;
      }
      if (prop === Symbol.toPrimitive) {
        return () => '';
      }
      if (prop === Symbol.iterator) {
        return function* () {};
      }
      if (prop === 'toString') {
        return () => '';
      }
      if (prop === 'valueOf') {
        return () => 0;
      }
      return proxy;
    },
  });
  return proxy;
}

const magic = create_magic();

module.exports = {
  __(key, _default = key) {
    return typeof _default === 'function' ? _default() : _default;
  },
  i18n() {
    return magic;
  },
  lan() {
    return lan;
  },
  lans() {
    return [...LANGS];
  },
  set_lan(_lan) {
    if (LANGS.includes(_lan)) {
      lan = _lan;
    }
  },
};
