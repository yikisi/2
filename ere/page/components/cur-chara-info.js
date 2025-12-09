const era = require('#/era-electron');

const {
  sys_get_full_chara,
} = require('#/system/chara/sys-calc-characteristic');
const get_status = require('#/system/chara/sys-get-status');
const { get_image } = require('#/system/sys-calc-image');

const race_indicator = require('#/page/components/race-indicator');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const { attr_bg_colors, motivation_colors } = require('#/data/color-const');
const { love_colors, relation_colors } = require('#/data/color-const');
const { get_growth } = require('#/data/ero/status-const');
const {
  get_love_info,
  get_relation_info,
  get_train_time,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { motivation_names, out_of_train_type } = require('#/data/train-const');

const { __ } = require('#/i18n/selector');

/**
 * @param {number} chara_id
 * @param {number} [type]
 * @param {number} [location_npc]
 */
function cur_chara_component(chara_id, type, location_npc) {
  let temp;
  if (chara_id === 0) {
    if (location_npc) {
      const relation = get_relation_info(location_npc);
      const love = get_love_info(location_npc);
      const title = CharaTitles.get(location_npc).get_colored_curr_title();
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
              config: { color: relation_colors[relation.level], width: 22 },
              content: relation.full(),
              type: 'text',
            },
            { config: { width: 2 }, content: '爱慕', type: 'text' },
            {
              config: { color: love_colors[love.level], width: 22 },
              content: love.full(),
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
    const relation = get_relation_info(chara_id);
    const love = get_love_info(chara_id);
    const growth = era.get(`cflag:${chara_id}:成长阶段`);
    const title = CharaTitles.get(chara_id).get_colored_curr_title(true);
    const in_train =
      growth >= 2 && era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48;
    const motivation = era.get(`cflag:${chara_id}:干劲`);
    const out_of_train = era.get(`cflag:${chara_id}:殿堂`);
    const race = era.get(`cflag:${chara_id}:种族`);
    /** @type {*[]} */
    const name_columns = ['当前角色：'];
    if (title) {
      name_columns.push(title, ' ');
    }
    name_columns.push(get_chara_talk(chara_id).get_colored_name());
    if (out_of_train) {
      name_columns.push(` [${out_of_train_type[out_of_train - 1]}]`);
    }
    name_columns.push(` (${get_growth(growth, 1)})`);
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
      } else if (race > 0 && !out_of_train && (growth === 2 || growth === 3)) {
        name_columns.push(' 待入学');
      }
      name_columns.push(...race_indicator(chara_id));
    }
    location_npc &&
      (temp = CharaTitles.get(location_npc).get_colored_curr_title());
    era.setVerticalAlign('middle');
    const image_switch = era.get('flag:立绘类型'),
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
              .map((e) => {
                switch (image_switch) {
                  case 0:
                    return e;
                  case 1:
                    return `${e}_半身`;
                  case 2:
                    return `${e}_gif\t${e}_半身`;
                }
              })
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
                content: '切换立绘',
                type: 'button',
              }
            : { content: '\n', type: 'text' },
          ...['hp', 'tp'].reduce((p, c, i) => {
            const val = era.get(`base:${chara_id}:${i}`);
            const limit = era.get(`maxbase:${chara_id}:${i}`);
            p.push(
              { config: { width: 2 }, content: __(c), type: 'text' },
              {
                config: { color: attr_bg_colors[c], height: 22, width: 12 },
                inContent: `${Math.floor(val)}/${Math.floor(limit)}`,
                percentage: (val * 100) / limit,
                type: 'progress',
              },
              { content: [], type: 'text' },
            );
            return p;
          }, []),
          ...(race && growth >= 1
            ? [
                {
                  config: { width: 2 },
                  content: '气性',
                  type: 'text',
                },
                {
                  config: { width: 4 },
                  content: [sys_get_full_chara(chara_id)],
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
            config: { color: relation_colors[relation.level], width: 4 },
            content: relation.full(),
            type: 'text',
          },
          { config: { width: 2 }, content: '爱慕', type: 'text' },
          {
            config: { color: love_colors[love.level], width: 4 },
            content: love.full(),
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
                        (temp = get_relation_info(location_npc)).level
                      ],
                    content: temp.mark(),
                    title: `好感：${temp.full()}`,
                  },
                ],
                type: 'text',
              },
              {
                content: [
                  ' ❤️',
                  {
                    color:
                      love_colors[(temp = get_love_info(location_npc)).level],
                    content: temp.mark(),
                    title: `爱慕：${temp.full()}`,
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
