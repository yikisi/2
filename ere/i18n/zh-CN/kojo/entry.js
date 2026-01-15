class I18nKojo {
  1 = new (require('#/i18n/zh-CN/kojo/1001/entry'))();
  2 = new (require('#/i18n/zh-CN/kojo/1002/entry'))();
  3 = new (require('#/i18n/zh-CN/kojo/1003/entry'))();
  6 = new (require('#/i18n/zh-CN/kojo/1006/entry'))();
  7 = new (require('#/i18n/zh-CN/kojo/1007/entry'))();
  21 = new (require('#/i18n/zh-CN/kojo/1021/entry'))();
  50 = new (require('#/i18n/zh-CN/kojo/1050/entry'))();
  60 = new (require('#/i18n/zh-CN/kojo/1060/entry'))();
  74 = new (require('#/i18n/zh-CN/kojo/1074/entry'))();
  308 = new (require('#/i18n/zh-CN/kojo/9008/entry'))();
  av_sister = new (require('#/i18n/zh-CN/kojo/av-sister/entry'))();

  get_titled_content(ckey, key, ...args) {
    const desc = key + '_desc';
    if (this[ckey][key] && this[ckey][desc]) {
      const ret = { content: this[ckey][key], title: this[ckey][desc] };
      for (const k in ret) {
        if (typeof ret[k] === 'function') {
          ret[k] = ret[k](...args);
        }
      }
      return ret;
    }
    return {};
  }
}

module.exports = I18nKojo;
