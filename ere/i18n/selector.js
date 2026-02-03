let lan = 'zh-CN';

/** @type {Record<string,I18nEntry>} */
const dict = {};
dict['zh-CN'] = new (require('./zh-CN/entry'))();
dict['ja-JP'] = new (require('./ja-JP/entry'))();
dict['en-US'] = new (require('./en-US/entry'))();

module.exports = {
  /**
   * @param {string} key
   * @param {string|(()=>string)} [_default]
   * @returns {string}
   */
  __(key, _default = key) {
    const arr = (key ?? '').split('.');
    let o = dict[lan];
    for (let i = 0; i < arr.length; ++i) {
      if (o[arr[i]] === void 0) {
        return typeof _default === 'function' ? _default() : _default;
      }
      o = o[arr[i]];
    }
    return o.toString();
  },
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
