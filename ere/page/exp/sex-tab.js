const era = require('#/era-electron');

const {
  check_chara_ero_image,
  sys_get_ero_image,
} = require('#/system/ero/sys-calc-ero-image');

const {
  get_shared_com_base_body,
  get_shared_com_base_female,
  get_unknown_info,
} = require('#/page/exp/snippets');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const {
  akuochi: a_colors,
  attr_change_colors,
  palam_colors,
} = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { mark_colors, mark_enum } = require('#/data/ero/mark-const');
const { palam2juel } = require('#/data/ero/orgasm-const');
const { get_skill_list } = require('#/data/ero/part-const');
const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');
const { get_talent, get_xp } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

const sex_color = mark_colors[mark_enum.ero];

/**
 * @param {number} cid
 * @param {number} mid
 * @param {number} [level]
 */
function get_mark_info(cid, mid, level = era.get(`mark:${cid}:${mid}`)) {
  return {
    config: { color: mark_colors[mid], width: 4 },
    content: di18n.tb_mark.get_mark_with_level_stars(
      mid,
      level,
      {
        content: '★'.repeat(level),
        color: get_gradient_color(void 0, mark_colors[mid], level / 3),
      },
      '☆'.repeat(3 - level),
      { isBr: true },
    ),
    type: 'text',
  };
}

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const me = get_chara_talk(0);
    const sex_info_list = [];
    if (flags.in_growth) {
      sex_info_list.push(
        {
          type: 'divider',
          config: { content: i18n().detail.sex_title, position: 'left' },
        },
        { content: i18n().detail.growth_info, type: 'text' },
      );
    } else if (!chara.id || flags.show_exp) {
      const in_train = era.getCharactersInTrain().includes(chara.id);
      if (in_train) {
        const plugin_list = CharaInmon.get(chara.id).list;
        const inmon_info =
          plugin_list.length > 0
            ? [
                {
                  config: { width: 2 },
                  content: i18n().detail.sex_header_inmon,
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: plugin_list.map((pid) => {
                    const p = inmon_plugin_dict[pid];
                    return {
                      content: i18n().inmon.bordered_name_template.replace(
                        '%NAME%',
                        p.name,
                      ),
                      color: get_gradient_color('', sex_color, p.level / 3),
                      title: p.title,
                    };
                  }),
                  type: 'text',
                },
              ]
            : [];
        sex_info_list.push(
          {
            config: {
              content: i18n().detail.base_header_body,
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: [
              ...get_shared_com_base_body(chara.id),
              ...(chara.sex_code === 1
                ? get_shared_com_base_female(chara.id, true)
                : []),
            ],
            type: 'text',
          },
          {
            config: { content: i18n().tb_talent.n_talent, position: 'left' },
            type: 'divider',
          },
          {
            config: { width: 2 },
            content: i18n().tb_talent.n_normal,
            type: 'text',
          },
          {
            config: { width: 22 },
            content: get_talent(chara.id),
            type: 'text',
          },
          {
            config: { width: 2 },
            content: i18n().tb_talent.n_xp,
            type: 'text',
          },
          {
            config: { width: 22 },
            content: get_xp(chara.id),
            type: 'text',
          },
          ...inmon_info,
        );
      } else {
        const sex_count = era.get(`exp:${chara.id}:性爱次数`);
        const sleep_count = era.get(`exp:${chara.id}:睡奸次数`);
        const prison_count = era.get(`exp:${chara.id}:监禁次数`);
        sex_info_list.push({
          config: { content: i18n().detail.sex_title, position: 'left' },
          type: 'divider',
        });
        const punishment = !chara.id && era.get('flag:惩戒力度');
        let akuochi = era.get('flag:恶堕');
        if (punishment >= 2 && akuochi > 0) {
          akuochi = akuochi === 2;
          sex_info_list.push({
            config: { color: a_colors[+akuochi] },
            content: __(
              `detail.sex_exp_slave_${punishment}_${akuochi ? 'accept' : 'reject'}`,
            ),
            type: 'text',
          });
        }
        sex_info_list.push({
          type: 'text',
          content:
            sex_count > 0 && flags.show_exp > 0
              ? chara.id > 0
                ? i18n().detail.get_sex_exp(
                    me.get_colored_name(),
                    {
                      ...get_abbr_number(sex_count),
                      color: palam_colors.notifications[1],
                    },
                    sleep_count > 0
                      ? i18n().detail.get_sex_sleep_exp({
                          ...get_abbr_number(sleep_count),
                          color: palam_colors.notifications[1],
                        })
                      : [],
                    prison_count > 0
                      ? i18n().detail.get_sex_prison_exp({
                          ...get_abbr_number(prison_count),
                          color: attr_change_colors.down,
                        })
                      : [],
                  )
                : i18n().detail.get_sex_exp_you(
                    {
                      ...get_abbr_number(sex_count),
                      color: palam_colors.notifications[1],
                    },
                    sleep_count > 0
                      ? i18n().detail.get_sex_sleep_exp_you({
                          ...get_abbr_number(sleep_count),
                          color: palam_colors.notifications[1],
                        })
                      : [],
                    prison_count > 0
                      ? i18n().detail.get_sex_prison_exp_you({
                          ...get_abbr_number(prison_count),
                          color: attr_change_colors.down,
                        })
                      : [],
                  )
              : i18n().detail.no_exp_info,
        });
      }
      sex_info_list.push({
        config: { content: i18n().detail.sex_header_abl, position: 'left' },
        type: 'divider',
      });
      get_skill_list(chara.sex_code).forEach((aid) => {
        const level = era.get(`abl:${chara.id}:${aid}`);
        sex_info_list.push({
          config: { width: 6 },
          content: i18n().detail.get_sex_abl_entry(i18n().tb_abl[aid], {
            content: i18n().tb_abl.lv_template.replace(
              '%LEVEL%',
              level.toString(),
            ),
            color: get_gradient_color(
              void 0,
              palam_colors.notifications[1],
              level / 5,
            ),
            title: di18n.tb_abl.get_abl_desc(aid, level),
          }),
          type: 'text',
        });
      });

      sex_info_list.push({
        type: 'divider',
        config: { content: i18n().detail.sex_header_jewel, position: 'left' },
      });
      era
        .get('jewelkeys')
        .slice(0, chara.id > 0 ? 15 : 10)
        .forEach((jid) => {
          const num = era.get(`jewel:${chara.id}:${jid}`);
          const got_juel = Math.floor(
            (era.get(`gotjewel:${chara.id}:${jid}`) || 0) / palam2juel,
          );
          const buff = era.get(
            `tcvar:${chara.id}:${i18n('zh-CN').tb_param[jid]}因子加成`,
          );
          sex_info_list.push({
            config: { width: 4 + 4 * in_train },
            content: [
              ...i18n().tb_param.get_jewel_count(i18n().tb_param[jid], {
                color: num > 0 ? palam_colors.notifications[1] : '',
                ...get_abbr_number(num),
              }),
              ...(got_juel
                ? [
                    ' (',
                    {
                      color: palam_colors.notifications[1],
                      content:
                        got_juel > 0
                          ? '+' + got_juel.toLocaleString()
                          : got_juel.toLocaleString(),
                    },
                    ')',
                  ]
                : []),
              ...(buff
                ? [
                    ' (',
                    {
                      color:
                        jid >= 11
                          ? buff > 0
                            ? attr_change_colors.down
                            : attr_change_colors.up
                          : buff > 0
                            ? attr_change_colors.up
                            : attr_change_colors.down,
                      content: `${buff > 0 ? '+' : ''}${Math.floor(
                        100 * buff,
                      ).toString()}%`,
                    },
                    ')',
                  ]
                : []),
            ],
            type: 'text',
          });
        });

      const sex_level = era.get(`mark:${chara.id}:淫纹`);

      if (sex_level > 0 || chara.id > 0) {
        sex_info_list.push({
          type: 'divider',
          config: { content: i18n().detail.sex_header_mark, position: 'left' },
        });

        if (sex_level > 0) {
          sex_info_list.push(get_mark_info(chara.id, mark_enum.ero, sex_level));
        } else if (chara.id > 0) {
          sex_info_list.push(get_mark_info(chara.id, mark_enum.pleasure));
        }
        if (chara.id > 0) {
          Object.values(mark_enum)
            .slice(2)
            .forEach((mid) => sex_info_list.push(get_mark_info(chara.id, mid)));
        }
      }
    } else {
      sex_info_list.push(
        {
          type: 'divider',
          config: { content: i18n().detail.sex_title, position: 'left' },
        },
        { content: get_unknown_info(chara.id), type: 'text' },
      );
    }
    const img_name = era.get(`cstr:${chara.id}:头像`);
    if (chara.id > 0) {
      if (
        !era.getCharactersInTrain().includes(chara.id) &&
        era.checkImage('通用_裸')
      ) {
        sex_info_list.push({ content: [{ isBr: true }], type: 'text' });
        if (check_chara_ero_image(chara.id)) {
          const img_t = era.get(`cstr:${chara.id}:头像T`);
          sex_info_list.push({
            accelerator: 100,
            content: i18n().detail.sex_image_bt_change_template.replace(
              '%CURRENT%',
              img_t
                ? i18n().detail.sex_image_set_template.replace(
                    '%SET%',
                    img_t.substring(img_name.length) || '1',
                  )
                : i18n().detail.sex_image_set_common,
            ),
            type: 'button',
          });
        } else {
          sex_info_list.push({
            content: i18n().detail.sex_image_common_info,
            type: 'text',
          });
        }
      }
    }
    return {
      /** @param {number} cmd */
      async handle(cmd) {
        if (cmd === 100) {
          let option = 1;
          const get_name = (i) => `${img_name}${i > 1 ? i : ''}`;
          while (era.checkImage(`${get_name(option + 1)}_头`)) {
            option++;
          }
          era.setHorizontalAlign('space-evenly');
          era.setAlign('center');
          era.printInColRows(
            {
              columns: [
                {
                  names: sys_get_ero_image(chara.id, '', false),
                  type: 'image.whole',
                },
                {
                  accelerator: 100,
                  content: i18n().detail.sex_image_set_common,
                  type: 'button',
                },
              ],
              config: { width: 4 },
            },
            ...new Array(option).fill(void 0).map((_, i) => ({
              columns: [
                {
                  names: sys_get_ero_image(chara.id, get_name(i + 1), false),
                  type: 'image.whole',
                },
                {
                  accelerator: 101 + i,
                  content: i18n().detail.sex_image_set_template.replace(
                    '%SET%',
                    (i + 1).toString(),
                  ),
                  type: 'button',
                },
              ],
              config: { width: 4 },
            })),
          );
          era.setAlign('left');
          era.setHorizontalAlign('start');
          const ret = (await era.input()) - 100;
          era.set(
            `cstr:${chara.id}:头像T`,
            ret > 0 ? `${img_name}${ret > 1 ? ret : ''}` : '',
          );
        }
      },
      print: () => sex_info_list,
    };
  },
  name: i18n().detail.sex_title,
};
