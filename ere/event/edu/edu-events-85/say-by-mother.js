const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

const ruby_color = get_chara_color(85);

/** @param {array|string} _content */
module.exports = (_content) => {
  const content = _content instanceof Array ? _content : [_content];
  return era.printAndWait(
    [{ content: '荻野贵女', fontWeight: 'bold' }, '「', ...content, '」'],
    {
      color: ruby_color,
    },
  );
};
