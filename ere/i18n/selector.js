let lan = 'zh-CN';

/** @type {Record<string,I18nEntry>} */
const dict = {};
dict['zh-CN'] = new (require('./zh-CN/entry'))();

function __(key) {
  const arr = (key ?? '').split('.');
  let o = dict[lan];
  for (let i = 0; i < arr.length; ++i) {
    if (!o[arr[i]]) {
      return dict[lan].not_found;
    }
    o = o[arr[i]];
  }
  return o;
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
  res: { __ },
  /** @param {string} _l */
  set_lan(_l) {
    if (dict[_l]) {
      lan = _l;
    }
  },
};
