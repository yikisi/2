const era = require('#/era-electron');

const CharaTitles = require('#/data/chara-titles');
const {
  attr_background_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const { get_relation_info, get_love_info } = require('#/data/info-generator');

/** @param {CharaTalk} chara */
function exp_chara_info(chara) {
  const relation_info = get_relation_info(chara.id, 0),
    love_info = get_love_info(chara.id),
    curr_title = new CharaTitles(chara.id).get_colored_curr_title();
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
          content: relation_info.join(' '),
          color: relation_colors[relation_info[0]],
        },
      ],
      type: 'text',
    },
    {
      config: { width: 6 },
      content: [
        ' 爱慕：',
        { content: love_info.join(' '), color: love_colors[love_info[0]] },
      ],
      type: 'text',
    },
    { config: { width: 2 }, content: '体力', type: 'text' },
    {
      config: {
        color: attr_background_colors['体力'],
        height: 22,
        width: 9,
      },
      inContent: `${era.get(`base:${chara.id}:体力`)}/${era.get(
        `maxbase:${chara.id}:体力`,
      )}`,
      percentage:
        (era.get(`base:${chara.id}:体力`) * 100) /
        era.get(`maxbase:${chara.id}:体力`),
      type: 'progress',
    },
    { config: { width: 2, offset: 1 }, content: '精力', type: 'text' },
    {
      config: {
        color: attr_background_colors['精力'],
        height: 22,
        width: 9,
      },
      inContent: `${era.get(`base:${chara.id}:精力`)}/${era.get(
        `maxbase:${chara.id}:精力`,
      )}`,
      percentage:
        (era.get(`base:${chara.id}:精力`) * 100) /
        era.get(`maxbase:${chara.id}:精力`),
      type: 'progress',
    },
  ];
}

module.exports = exp_chara_info;
