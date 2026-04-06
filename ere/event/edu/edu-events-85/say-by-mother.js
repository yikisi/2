const era = require('#/era-electron');

const ruby_color = require('#/data/chara-colors').get_chara_color(85);

const { i18n } = require('#/i18n/selector');

/** @param {array|string} _content */
async function say_by_mother(_content) {
  const content = Array.isArray(_content) ? _content : [_content];
  await era.printAndWait(
    [
      { content: i18n().name.ruby_mother, fontWeight: 'bold' },
      i18n().tk_speak_border[0],
      ...content,
      i18n().tk_speak_border[1],
    ],
    { color: ruby_color },
  );
}

module.exports = say_by_mother;
