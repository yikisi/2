const era = require('#/era-electron');

const {
  check_chara_ero_image,
  sys_get_ero_image,
} = require('#/system/ero/sys-calc-ero-image');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');

const CharaTalk = require('#/utils/chara-talk');
const get_gradient_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const { attr_change_colors, palam_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { mark_colors, mark_enum } = require('#/data/ero/mark-const');
const { palam2juel } = require('#/data/ero/orgasm-const');
const { get_skill_list } = require('#/data/ero/part-const');
const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');
const { growth_info, no_info, unknown_info } = require('#/data/exp-const');
const { get_breast_cup, get_talent, get_xp } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const page_name = '性爱情况';

const sex_color = mark_colors[mark_enum.ero];

/**
 * @param {number} cid
 * @param {number} mid
 * @param {number} [level]
 */
function get_mark_info(cid, mid, level = era.get(`mark:${cid}:${mid}`)) {
  return {
    config: { width: 4 },
    content: [
      {
        color: mark_colors[mid],
        content: `${era.get(`markname:${mid}`)} Lv.${level}`,
      },
      { isBr: true },
      {
        content: '★'.repeat(level),
        color: get_gradient_color(undefined, mark_colors[mid], level / 3),
      },
      { content: '☆'.repeat(level) },
    ],
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
    const sex_info_list = [];
    if (flags.in_growth) {
      sex_info_list.push(
        { type: 'divider', config: { content: page_name, position: 'left' } },
        { content: growth_info, type: 'text' },
      );
    } else if (!chara.id || flags.show_exp) {
      const in_train = era.get(`ex:${chara.id}:TotalEX`) !== undefined;
      if (in_train) {
        const plugin_list = CharaInmon.get(chara.id).list;
        const inmon_info =
          plugin_list.length > 0
            ? [
                {
                  config: { width: 2 },
                  content: '淫纹',
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: plugin_list.map((e) => {
                    const p = inmon_plugin_dict[e];
                    return {
                      content: `[${p.name}]`,
                      color: get_gradient_color('', sex_color, p.level / 3),
                      title: `[${p.name}]：${p.description}`,
                    };
                  }),
                  type: 'text',
                },
              ]
            : [];
        sex_info_list.push(
          {
            config: { content: '身体尺寸', position: 'left' },
            type: 'divider',
          },
          {
            content: [
              '身高：',
              era.get(`cflag:${chara.id}:身高`).toString(),
              'cm ｜ ',
              '体重：',
              era.get(`status:${chara.id}:发胖`)
                ? '幸、幸福胖哦……'
                : era.get(`base:${chara.id}:体重偏差`) >= 2000
                  ? '微增'
                  : '控制得当',
              chara.sex_code === 1
                ? ''
                : ` ｜ 三围：B${get_bust_size(
                    chara.id,
                    true,
                  )} (${get_breast_cup(chara.id, true)} Cup) · W${get_waist_size(
                    chara.id,
                  )} · H${get_hip_size(chara.id)}`,
            ],
            type: 'text',
          },
          {
            config: { content: '特征', position: 'left' },
            type: 'divider',
          },
          {
            config: { width: 2 },
            content: '性格',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: get_talent(chara.id),
            type: 'text',
          },
          {
            config: { width: 2 },
            content: '其他',
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
        sex_info_list.push(
          {
            config: { content: '基本情况', position: 'left' },
            type: 'divider',
          },
          {
            type: 'text',
            content:
              sex_count && flags.show_exp
                ? chara.id
                  ? [
                      '和 ',
                      CharaTalk.me.get_colored_name(),
                      ' 上过 ',
                      {
                        content: sex_count.toLocaleString(),
                        color: palam_colors.notifications[1],
                      },
                      ' 次床',
                    ].concat(
                      sleep_count
                        ? [
                            '，包括 ',
                            {
                              content: sleep_count.toLocaleString(),
                              color: palam_colors.notifications[1],
                            },
                            ' 次睡奸',
                          ]
                        : [],
                      prison_count
                        ? [
                            '；对 ',
                            CharaTalk.me.get_colored_name(),
                            ' 实施过 ',
                            {
                              content: prison_count.toLocaleString(),
                              color: attr_change_colors.down,
                            },
                            ' 次监禁',
                          ]
                        : [],
                    )
                  : [
                      '和其他角色共上过 ',
                      {
                        content: sex_count.toLocaleString(),
                        color: palam_colors.notifications[1],
                      },
                      ' 次床',
                    ].concat(
                      sleep_count
                        ? [
                            '，包括 ',
                            {
                              content: sleep_count.toLocaleString(),
                              color: palam_colors.notifications[1],
                            },
                            ' 次被睡奸',
                          ]
                        : [],
                      prison_count
                        ? [
                            '；被监禁过 ',
                            {
                              content: prison_count.toLocaleString(),
                              color: attr_change_colors.down,
                            },
                            ' 次',
                          ]
                        : [],
                    )
                : no_info,
          },
        );
      }
      sex_info_list.push({
        config: { content: '性爱能力', position: 'left' },
        type: 'divider',
      });
      get_skill_list(chara.sex_code).forEach((aid) => {
        const level = era.get(`abl:${chara.id}:${aid}`);
        sex_info_list.push({
          config: { width: 6 },
          content: [
            i18n().tb_abl[aid],
            '：',
            {
              content: `Lv.${level}`,
              color: get_gradient_color(
                undefined,
                palam_colors.notifications[1],
                level / 5,
              ),
              title: di18n.tb_abl.get_abl_desc(aid, level),
            },
          ],
          type: 'text',
        });
      });

      sex_info_list.push({
        type: 'divider',
        config: { content: '因子', position: 'left' },
      });
      era
        .get('palamnames')
        .slice(0, chara.id ? 15 : 10)
        .forEach((juel, i) => {
          const num = era.get(`juel:${chara.id}:${juel}`);
          const got_juel = Math.floor(
            (era.get(`gotjuel:${chara.id}:${juel}`) || 0) / palam2juel,
          );
          const buff = era.get(
            `tcvar:${chara.id}:${juel.substring(0, 2)}因子加成`,
          );
          sex_info_list.push({
            config: { width: 4 + 4 * in_train },
            content: [
              juel.substring(0, 2),
              '：',
              {
                color: num > 0 ? palam_colors.notifications[1] : '',
                ...get_abbr_number(num),
              },
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
                        i >= 10
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
          config: { content: '刻印', position: 'left' },
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
        { type: 'divider', config: { content: page_name, position: 'left' } },
        { content: unknown_info(chara.id), type: 'text' },
      );
    }
    // CSTRNAME:10 = 头像
    // CSTRNAME:13 = 头像T
    const img_name = era.get(`cstr:${chara.id}:10`);
    if (
      !era.getCharactersInTrain().includes(chara.id) &&
      check_chara_ero_image(chara.id)
    ) {
      sex_info_list.push({ content: [{ isBr: true }], type: 'text' });
      const img_t = era.get(`cstr:${chara.id}:13`);
      if (img_t) {
        sex_info_list.push({
          accelerator: 100,
          content: `更改调教立绘（当前：第 ${img_t.substring(img_name.length) || '1'} 套）`,
          type: 'button',
        });
      } else {
        sex_info_list.push({ content: '使用专属调教立绘', type: 'text' });
      }
    }
    return {
      /** @param {number} cmd */
      async handle(cmd) {
        if (cmd === 100) {
          let option = 2;
          const get_name = (i) => `${img_name}${i > 1 ? i : ''}`;
          while (era.checkImage(`${get_name(option + 1)}_头`)) {
            option++;
          }
          era.setHorizontalAlign('space-evenly');
          era.setAlign('center');
          era.printInColRows(
            ...new Array(option).fill(void 0).map((_, i) => {
              const names = sys_get_ero_image(chara.id, get_name(i + 1), false);
              return {
                columns: [
                  {
                    names,
                    type: 'image.whole',
                  },
                  {
                    accelerator: 100 + i,
                    content: `第 ${i + 1} 套`,
                    type: 'button',
                  },
                ],
                config: { width: 4 },
              };
            }),
          );
          era.setAlign('left');
          era.setHorizontalAlign('start');
          const ret = (await era.input()) - 100;
          era.set(
            `cstr:${chara.id}:头像T`,
            `${img_name}${ret > 0 ? ret + 1 : ''}`,
          );
        }
      },
      print() {
        return sex_info_list;
      },
    };
  },
  name: page_name,
};
