const get_titled_content = require('#/i18n/get-titled-content');

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

  get_titled_content = (ckey, ...args) =>
    get_titled_content(this[ckey], ...args);
}

module.exports = I18nKojo;
