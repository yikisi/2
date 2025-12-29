const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

const { i18n } = require('#/i18n/selector');

const ruby_color = get_chara_color(85);

/** @param {array|string} _content */
async function say_by_mother(_content) {
  const content = Array.isArray(_content) ? _content : [_content];
  await era.printAndWait(
    [
      { content: i18n().name.ruby_mother, fontWeight: 'bold' },
      '「',
      ...content,
      '」',
    ],
    {
      color: ruby_color,
    },
  );
}

module.exports = say_by_mother;
