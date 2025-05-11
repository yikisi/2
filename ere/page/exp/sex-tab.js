const era = require('#/era-electron');

const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');

const CharaTalk = require('#/utils/chara-talk');
const get_gradient_color = require('#/utils/gradient-color');

const sex_color = require('#/data/const.json').mark_colors['淫纹'];
const { attr_change_colors, palam_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const { palam2juel } = require('#/data/ero/orgasm-const');
const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');
const {
  abl_desc,
  growth_info,
  no_info,
  unknown_info,
} = require('#/data/exp-const');
const { get_breast_cup, get_talent, get_xp } = require('#/data/info-generator');

const page_name = '性爱情况';

/**
 * @param {number} chara_id
 * @param {string} mark_name
 * @param {number} [mark_level]
 */
function get_mark_info(chara_id, mark_name, mark_level) {
  const level =
    mark_level === undefined
      ? era.get(`mark:${chara_id}:${mark_name}`)
      : mark_level;
  return {
    config: { width: 4 },
    content: [
      { color: mark_colors[mark_name], content: `${mark_name} Lv.${level}` },
      { isBr: true },
      {
        content: new Array(level).fill('★').join(''),
        color: get_gradient_color(undefined, mark_colors[mark_name], level / 3),
      },
      {
        content: new Array(3 - level).fill('☆').join(''),
      },
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
        const plugin_list = CharaInmon.get(chara.id).to_list;
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
        const sex_count = era.get(`exp:${chara.id}:性爱次数`),
          sleep_count = era.get(`exp:${chara.id}:睡奸次数`),
          prison_count = era.get(`exp:${chara.id}:监禁次数`);
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
      const skill_list = [
        '甜言蜜语',
        '接吻技巧',
        '口交技巧',
        '口腔耐性',
        '口腔掌握',
        '乳交技巧',
        '胸部耐性',
        '胸部掌握',
        '手交技巧',
        '足交技巧',
        '身体技巧',
        '身体耐性',
        '身体掌握',
      ];
      if (chara.sex_code > 0) {
        skill_list.push('插入技巧', '阴茎耐性');
      }
      skill_list.push('阴茎掌握');
      if (chara.sex_code !== 1) {
        skill_list.push('性交技巧');
      }
      if (chara.sex_code === 0) {
        skill_list.push('外阴耐性');
      }
      if (chara.sex_code !== 1) {
        skill_list.push('阴道耐性');
      }
      skill_list.push(
        '外阴掌握',
        '阴道掌握',
        '肛交技巧',
        '肛门耐性',
        '肛门掌握',
        '施虐技巧',
        '受虐耐性',
        '受虐掌握',
      );
      skill_list.forEach((e) => {
        const level = era.get(`abl:${chara.id}:${e}`);
        sex_info_list.push({
          config: { width: 6 },
          content: [
            e,
            '：',
            {
              content: `Lv.${level}`,
              color: get_gradient_color(
                undefined,
                palam_colors.notifications[1],
                level / 5,
              ),
              title: (abl_desc[e] || abl_desc[e.substring(2)])[level],
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
          const num = era.get(`juel:${chara.id}:${juel}`),
            got_juel = Math.floor(
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
                color: num ? palam_colors.notifications[1] : '',
                content: num.toLocaleString(),
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
          sex_info_list.push(get_mark_info(chara.id, '淫纹', sex_level));
        } else if (chara.id > 0) {
          sex_info_list.push(get_mark_info(chara.id, '欢愉'));
        }
        if (chara.id > 0) {
          era
            .get('marknames')
            .slice(2)
            .forEach((e) => sex_info_list.push(get_mark_info(chara.id, e)));
        }
      }
    } else {
      sex_info_list.push(
        { type: 'divider', config: { content: page_name, position: 'left' } },
        { content: unknown_info(chara.id), type: 'text' },
      );
    }
    return {
      print() {
        return sex_info_list;
      },
    };
  },
  name: page_name,
};
