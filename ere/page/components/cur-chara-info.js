const era = require('#/era-electron');

const {
  sys_get_full_chara,
} = require('#/system/chara/sys-calc-characteristic');
const get_status = require('#/system/chara/sys-get-status');
const { get_image } = require('#/system/sys-calc-image');

const get_progress_bar = require('#/page/components/get-progress-bar');
const race_indicator = require('#/page/components/race-indicator');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const { motivation_colors } = require('#/data/color-const');
const { love_colors, relation_colors } = require('#/data/color-const');
const {
  get_love_info,
  get_relation_info,
  get_train_year,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number} [type]
 * @param {number} [location_npc]
 */
function cur_chara_component(cid, type, location_npc) {
  let temp;
  if (cid === 0) {
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
              content: i18n().ui_relation,
              type: 'text',
            },
            {
              config: { color: relation_colors[relation.level], width: 22 },
              content: relation.full(),
              type: 'text',
            },
            { config: { width: 2 }, content: i18n().ui_love, type: 'text' },
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
          content: i18n().ui_no_target,
          type: 'text',
          config: { align: 'center' },
        },
      ]);
    }
  } else {
    era.drawLine();
    const relation = get_relation_info(cid);
    const love = get_love_info(cid);
    const growth = era.get(`cflag:${cid}:成长阶段`);
    const title = CharaTitles.get(cid).get_colored_curr_title(true);
    const in_train =
      growth >= 2 && era.get(`cflag:${cid}:育成回合计时`) < 3 * 48;
    const motivation = era.get(`cflag:${cid}:干劲`);
    const out_of_train = era.get(`cflag:${cid}:殿堂`);
    const race = era.get(`cflag:${cid}:种族`);
    const title_info = title ? [title, ' '] : [];
    const palace_info =
      out_of_train >= 1
        ? ' ' +
          i18n().ui_palace_template.replace(
            '%PALACE%',
            di18n.n_oot[out_of_train - 1],
          )
        : '';
    let mot_info = [];
    let edu_info = '';
    let race_info = [];
    if (era.get('flag:当前位置') !== location_enum.basement) {
      if (in_train) {
        mot_info = [
          ' ',
          ...i18n().get_ui_motivation({
            color: motivation_colors[motivation + 2],
            content: di18n.n_mot[motivation + 2],
          }),
        ];
        edu_info =
          ' ' + i18n().ui_edu_template.replace('%EDU%', get_train_year(cid));
      } else if (race > 0 && !out_of_train && (growth === 2 || growth === 3)) {
        edu_info =
          ' ' + i18n().ui_edu_template.replace('%EDU%', i18n().pre_edu);
      }
      race_info = race_indicator(cid);
      if (race_info.length > 0) {
        race_info.unshift(' ');
      }
    }
    location_npc &&
      (temp = CharaTitles.get(location_npc).get_colored_curr_title());
    era.setVerticalAlign('middle');
    const image_switch = era.get('flag:立绘类型');
    const status_list = get_status(cid, 24);
    era.printInColRows(
      {
        columns: [
          {
            content: i18n().get_ui_cur_chara_info(
              title_info,
              get_chara_talk(cid).get_colored_name(),
              palace_info,
              di18n.feature.get_growth(growth, 1),
              mot_info,
              edu_info,
              race_info,
            ),
            type: 'text',
          },
        ],
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
            names: get_image(cid)
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
                content: i18n().ui_change_image,
                type: 'button',
              }
            : { content: '\n', type: 'text' },
          ...get_progress_bar(cid),
          ...(race && growth >= 1
            ? [
                {
                  config: { width: 2 },
                  content: i18n().feature.n_chara,
                  type: 'text',
                },
                {
                  config: { width: 4 },
                  content: [sys_get_full_chara(cid)],
                  type: 'text',
                },
              ]
            : []),
          {
            config: { width: 2 },
            content: i18n().tb_status.n_status,
            type: 'text',
          },
          {
            config: { width: 16 + !(race && growth >= 1) * 6 },
            content:
              status_list.length > 0 ? status_list : i18n().tb_status.normal,
            type: 'text',
          },
          {
            config: { width: 2 },
            content: i18n().ui_relation,
            type: 'text',
          },
          {
            config: { color: relation_colors[relation.level], width: 4 },
            content: relation.full(),
            type: 'text',
          },
          { config: { width: 2 }, content: i18n().ui_love, type: 'text' },
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
                  i18n().ui_relation_icon,
                  {
                    color:
                      relation_colors[
                        (temp = get_relation_info(location_npc)).level
                      ],
                    content: temp.mark(),
                    title: i18n().ui_relation_template.replace(
                      '%RELATIONINFO%',
                      temp.full(),
                    ),
                  },
                ],
                type: 'text',
              },
              {
                content: [
                  i18n().ui_love_icon,
                  {
                    color:
                      love_colors[(temp = get_love_info(location_npc)).level],
                    content: temp.mark(),
                    title: i18n().ui_love_template.replace(
                      '%LOVEINFO%',
                      temp.full(),
                    ),
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
