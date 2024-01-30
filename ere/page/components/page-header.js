const era = require('#/era-electron');

const date_indicator = require('#/page/components/date-indicator');
const race_indicator = require('#/page/components/race-indicator');

const { celebration_color, money_color } = require('#/data/color-const');
const {
  get_status,
  get_trainer_title,
  get_celebration,
} = require('#/data/info-generator');
const { attr_background_colors, trainer_colors } = require('#/data/const.json');
const { location_name } = require('#/data/locations');

function page_header() {
  let cur_year = era.get('flag:当前年');

  if (!cur_year) {
    era.drawLine();
    era.print('当前未加载存档', { align: 'center' });
  } else {
    const celebration = get_celebration(),
      cur_fame = era.get('flag:当前声望'),
      cur_coin = era.get('flag:当前马币'),
      money_change = era.get('flag:收支'),
      title_level = get_trainer_title(),
      trainer_title_color = trainer_colors[title_level.substring(0, 2)];
    era.printInColRows([{ type: 'divider' }], {
      columns: [
        {
          config: { width: 16 },
          content: [
            ...date_indicator(),
            {
              content: celebration ? ` [${celebration}]` : '',
              color: celebration_color,
            },
          ],
          type: 'text',
        },
        {
          config: { width: 8 },
          content: [
            '位于 ',
            {
              content: location_name[era.get('flag:当前位置')],
              fontWeight: 'bold',
            },
          ],
          type: 'text',
        },
        {
          config: { width: 16 },
          content: [
            {
              color: trainer_title_color,
              content: cur_fame.toLocaleString(),
              fontWeight: 'bold',
            },
            ' 声望 (',
            {
              color: trainer_title_color,
              content: title_level,
              fontWeight: 'bold',
            },
            ')',
            ...race_indicator(0),
          ],
          type: 'text',
        },
        {
          config: { width: 8 },
          content: [
            {
              color: money_color,
              content: cur_coin.toLocaleString(),
              fontWeight: 'bold',
            },
            {
              color: money_change > 0 ? 'palegreen' : 'orangered',
              content: money_change
                ? ` (${money_change > 0 ? '+' : ''}${money_change})`
                : '',
              fontWeight: 'bold',
              opacity: 0.5,
            },
            ' 马币',
          ],
          type: 'text',
        },
        {
          config: { width: 2 },
          content: '体力',
          type: 'text',
        },
        {
          config: {
            color: attr_background_colors['体力'],
            height: 22,
            width: 9,
          },
          inContent: `${era.get(`base:0:体力`)}/${era.get(`maxbase:0:体力`)}`,
          percentage:
            (era.get(`base:0:体力`) * 100) / era.get(`maxbase:0:体力`),
          type: 'progress',
        },
        {
          config: { offset: 1, width: 2 },
          content: '精力',
          type: 'text',
        },
        {
          config: {
            color: attr_background_colors['精力'],
            height: 22,
            width: 9,
          },
          inContent: `${era.get(`base:0:精力`)}/${era.get(`maxbase:0:精力`)}`,
          percentage:
            (era.get(`base:0:精力`) * 100) / era.get(`maxbase:0:精力`),
          type: 'progress',
        },
        {
          config: { width: 2 },
          content: '状态',
          type: 'text',
        },
        {
          config: { width: 22 },
          content: get_status(0),
          type: 'text',
        },
      ],
      config: { width: 16 },
    });
  }
}

module.exports = page_header;
