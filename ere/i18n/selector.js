let lan = 'zh-CN';

/** @type {Record<string,I18nEntry>} */
const dict = {};
dict['zh-CN'] = new (require('./zh-CN/entry'))();
dict['ja-JP'] = new (require('./ja-JP/entry'))();
dict['en-US'] = new (require('./en-US/entry'))();

/**
 * @param {string} key
 * @param {string|(()=>string)} [_default]
 * @returns {string}
 */
function __(key, _default = key) {
  const arr = (key ?? '').split('.');
  let o = dict[lan];
  for (let i = 0; i < arr.length; ++i) {
    if (!o[arr[i]]) {
      return _default instanceof Function ? _default() : _default;
    }
    o = o[arr[i]];
  }
  return o.toString();
}

module.exports = {
  __,
  /**
   * @param {string} _l
   * @returns {I18nEntry}
   */
  i18n(_l = lan) {
    return dict[_l];
  },
  lan() {
    return lan;
  },
  lans() {
    return Object.keys(dict);
  },
  /** @param {string} _l */
  set_lan(_l) {
    if (dict[_l]) {
      lan = _l;
    }
  },
};
