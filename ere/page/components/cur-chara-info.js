const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const { get_image } = require('#/system/sys-calc-image');

const race_indicator = require('#/page/components/race-indicator');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const { motivation_colors } = require('#/data/color-const');
const {
  attr_background_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const {
  chara_desc,
  chara_full_desc,
  growth_stage,
} = require('#/data/ero/status-const');
const {
  get_love_info,
  get_relation_info,
  get_train_time,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { motivation_names, out_of_train_type } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} [type]
 * @param {number} [location_npc]
 */
function cur_chara_component(chara_id, type, location_npc) {
  let temp;
  if (chara_id === 0) {
    if (location_npc) {
      const relation = get_relation_info(location_npc),
        love = get_love_info(location_npc),
        title = new CharaTitles(location_npc).get_colored_curr_title();
      era.printInColRows(
        [{ type: 'divider' }],
        {
          columns: [
            {
              config: { width: 23 },
              names: get_image(location_npc)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
          ],
          config: { width: 4 },
        },
        {
          columns: [
            {
              content: [
                title ? [title, ' '] : [],
                get_chara_talk(location_npc).get_colored_name(),
              ],
              type: 'text',
            },
            {
              config: { width: 2 },
              content: '好感',
              type: 'text',
            },
            {
              config: { color: relation_colors[relation[0]], width: 22 },
              content: relation.join(' '),
              type: 'text',
            },
            { config: { width: 2 }, content: '爱慕', type: 'text' },
            {
              config: {
                color: love_colors[love[0]],
                width: 22,
              },
              content: love.join(' '),
              type: 'text',
            },
          ],
          config: { width: 16 },
        },
      );
    } else if (
      type !== chara_info_type.out &&
      type !== chara_info_type.school
    ) {
      era.printMultiColumns([
        { type: 'divider' },
        {
          content: '未选择互动角色',
          type: 'text',
          config: { align: 'center' },
        },
      ]);
    }
  } else {
    era.drawLine();
    const relation = get_relation_info(chara_id),
      love = get_love_info(chara_id),
      growth = era.get(`cflag:${chara_id}:成长阶段`),
      title = new CharaTitles(chara_id).get_colored_curr_title(true),
      in_train =
        growth >= 2 && era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48,
      motivation = era.get(`cflag:${chara_id}:干劲`),
      out_of_train = era.get(`cflag:${chara_id}:殿堂`),
      race = era.get(`cflag:${chara_id}:种族`),
      characteristic = era.get(`cflag:${chara_id}:气性`);
    /** @type {*[]} */
    const name_columns = ['当前角色：'];
    if (title) {
      name_columns.push(title, ' ');
    }
    name_columns.push(get_chara_talk(chara_id).get_colored_name());
    if (out_of_train) {
      name_columns.push(` [${out_of_train_type[out_of_train - 1]}]`);
    }
    name_columns.push(` (${growth_stage[Math.min(growth, 2)]})`);
    if (era.get('flag:当前位置') !== location_enum.basement) {
      if (in_train) {
        name_columns.push(
          ' 干劲',
          {
            color: motivation_colors[motivation + 2],
            content: motivation_names[motivation + 2],
          },
          ' ',
          get_train_time(chara_id).substring(0, 3),
        );
      } else if (race && !out_of_train && (growth === 2 || growth === 3)) {
        name_columns.push(' 待入学');
      }
      name_columns.push(...race_indicator(chara_id));
    }
    location_npc &&
      (temp = new CharaTitles(location_npc).get_colored_curr_title());
    era.setVerticalAlign('middle');
    const image_switch = era.get('flag:显示半身像'),
      status_list = get_status(chara_id);
    era.printInColRows(
      {
        columns: [{ content: name_columns, type: 'text' }],
        config: { width: 18 },
      },
      {
        columns: location_npc
          ? [
              {
                config: { align: 'center' },
                content: [
                  ...(temp ? [temp, ' '] : []),
                  get_chara_talk(location_npc).get_colored_name(),
                ],
                type: 'text',
              },
            ]
          : [],
        config: { width: 5 },
      },
      [],
      {
        columns: [
          {
            config: { width: 21 },
            names: get_image(chara_id)
              .map((e) => `${e}${image_switch ? '_半身' : ''}`)
              .join('\t'),
            type: 'image.whole',
          },
        ],
        config: {
          width: 3,
        },
      },
      {
        columns: [
          type !== chara_info_type.out && type !== chara_info_type.school
            ? {
                accelerator: 990,
                config: { showAcc: false },
                content: `显示${image_switch ? '头像' : '半身像'}`,
                type: 'button',
              }
            : { content: '\n', type: 'text' },
          {
            config: { width: 2 },
            content: '体力',
            type: 'text',
          },
          {
            config: {
              color: attr_background_colors['体力'],
              height: 22,
              width: 12,
            },
            inContent: `${Math.floor(era.get(`base:${chara_id}:体力`))}/${era.get(
              `maxbase:${chara_id}:体力`,
            )}`,
            percentage:
              (era.get(`base:${chara_id}:体力`) * 100) /
              era.get(`maxbase:${chara_id}:体力`),
            type: 'progress',
          },
          { content: '', type: 'text' },
          {
            config: { width: 2 },
            content: '精力',
            type: 'text',
          },
          {
            config: {
              color: attr_background_colors['精力'],
              height: 22,
              width: 12,
            },
            inContent: `${Math.floor(era.get(`base:${chara_id}:精力`))}/${era.get(
              `maxbase:${chara_id}:精力`,
            )}`,
            percentage:
              (era.get(`base:${chara_id}:精力`) * 100) /
              era.get(`maxbase:${chara_id}:精力`),
            type: 'progress',
          },
          { content: '', type: 'text' },
          ...(race && growth >= 1
            ? [
                {
                  config: { width: 2 },
                  content: '气性',
                  type: 'text',
                },
                {
                  config: { width: 4 },
                  content: [
                    {
                      content: chara_desc[characteristic + 3],
                      title: `${chara_desc[characteristic + 3]}：${chara_full_desc[characteristic + 3]}`,
                    },
                  ],
                  type: 'text',
                },
              ]
            : []),
          {
            config: { width: 2 },
            content: '状态',
            type: 'text',
          },
          {
            config: { width: 16 + !(race && growth >= 1) * 6 },
            content: status_list.length > 0 ? status_list : '正常',
            type: 'text',
          },
          {
            config: { width: 2 },
            content: '好感',
            type: 'text',
          },
          {
            config: { color: relation_colors[relation[0]], width: 4 },
            content: relation.join(' '),
            type: 'text',
          },
          { config: { width: 2 }, content: '爱慕', type: 'text' },
          {
            config: {
              color: love_colors[love[0]],
              width: 4,
            },
            content: love.join(' '),
            type: 'text',
          },
        ],
        config: {
          width: 15,
        },
      },
      {
        columns: location_npc
          ? [
              {
                config: { width: 23 },
                names: get_image(location_npc)
                  .map((e) => `${e}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
            ]
          : [],
        config: { offset: 1, width: 3 },
      },
      {
        columns: location_npc
          ? [
              {
                content: [
                  '🤝',
                  {
                    color:
                      relation_colors[
                        (temp = get_relation_info(location_npc))[0]
                      ],
                    content: temp[0],
                    title: `好感：${temp.join(' ')}`,
                  },
                ],
                type: 'text',
              },
              {
                content: [
                  ' ❤️',
                  {
                    color: love_colors[(temp = get_love_info(location_npc))[0]],
                    content: temp[0],
                    title: `爱慕：${temp.join(' ')}`,
                  },
                ],
                type: 'text',
              },
            ]
          : [],
        config: { width: 2 },
      },
    );
    era.setVerticalAlign('top');
  }
}

module.exports = cur_chara_component;
