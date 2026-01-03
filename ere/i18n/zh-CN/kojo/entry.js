class I18nKojo {
  recruit = new (require('#/i18n/zh-CN/kojo/rec/entry'))();
  daily = new (require('#/i18n/zh-CN/kojo/daily/entry'))();
  edu = new (require('#/i18n/zh-CN/kojo/edu/entry'))();
  love = new (require('#/i18n/zh-CN/kojo/love/entry'))();
  ero = new (require('#/i18n/zh-CN/kojo/ero/entry'))();
  basement = new (require('#/i18n/zh-CN/kojo/basement/entry'))();
}

module.exports = I18nKojo;
