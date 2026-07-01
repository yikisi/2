const CharaTalk = require('#/utils/chara-talk');

const { i18n } = require('#/i18n/selector');

module.exports = {
  get_mother() {
    const mother = new CharaTalk(85);
    mother.name = i18n().name.ruby_mother;
    return mother;
  },
};
