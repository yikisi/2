const era = require('#/era-electron');

const CharaTitles = require('#/data/chara-titles');
const { love_colors, relation_colors } = require('#/data/color-const');
const { get_love_info, get_relation_info } = require('#/data/info-generator');

const { attr_bg_colors } = require('#/data/color-const');

const { __ } = require('#/i18n/selector');

/** @param {CharaTalk} chara */
function exp_chara_info(chara) {
  const relation = get_relation_info(chara.id, 0);
  const love = get_love_info(chara.id);
  const curr_title = CharaTitles.get(chara.id).get_colored_curr_title();
  return [
    { type: 'divider' },
    {
      config: { width: 12 },
      content: [
        ...(curr_title ? [curr_title, ' '] : []),
        chara.get_colored_full_name(),
      ],
      type: 'text',
    },
    {
      config: { width: 6 },
      content: [
        ' 好感：',
        {
          content: relation.full(),
          color: relation_colors[relation.level],
        },
      ],
      type: 'text',
    },
    {
      config: { width: 6 },
      content: [
        ' 爱慕：',
        { content: love.full(), color: love_colors[love.level] },
      ],
      type: 'text',
    },
    ...['hp', 'tp'].reduce((p, c, i) => {
      const val = era.get(`base:${chara.id}:${i}`);
      const limit = era.get(`maxbase:${chara.id}:${i}`);
      p.push(
        { config: { offset: i, width: 2 }, content: __(c), type: 'text' },
        {
          config: { color: attr_bg_colors[c], height: 22, width: 9 },
          inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
          percentage: (val * 100) / limit,
          type: 'progress',
        },
      );
      return p;
    }, []),
  ];
}

module.exports = exp_chara_info;
