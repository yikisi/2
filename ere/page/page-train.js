const era = require('#/era-electron');

const {
  sys_check_train_enabled,
  sys_get_debuff,
  sys_get_succ_rate,
} = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const { get_train_bonus, train_uma } = require('#/system/sys-train-uma');

const print_curr_chara_info = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');
const select_target_chara = require('#/page/components/select-target');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const GameGuides = require('#/event/others/game-guides');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const chara_info_type = require('#/data/chara-info-type');
const CharaSkills = require('#/data/chara-skills');
const { adaptability_colors } = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const {
  get_adaptability_rank,
  get_attr_rank,
  get_chara_score,
  get_rank_level,
  get_trainer_train_buff,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { ability_tag_names } = require('#/data/race/model/uma-skill');
const {
  chara_skill_dict,
  common_skills,
  skills_dict,
} = require('#/data/race/skill/skill-const');
const {
  adaptability_names,
  attr_enum,
  attr_names,
  time_cost,
} = require('#/data/train-const');

const skill_limit = 15;

function get_discount(chara_id) {
  return Math.min(era.get(`cflag:${chara_id}:育成次数`) * 0.015, 0.1);
}

/**
 * @param {number} chara_id
 * @param {CharaSkills} skill_control
 * @param {number} pt
 * @param {number} discount
 */
function get_skill_buffer(chara_id, skill_control, pt, discount) {
  const unused_group2level = {};
  let available_skills = {},
    got_skills = {};
  common_skills.forEach((e) => (available_skills[e] = 1));
  new CharaAvailableSkills(chara_id).get().forEach((e) => {
    const s = skills_dict[e];
    if (!unused_group2level[s.group_id]) {
      unused_group2level[s.group_id] = s.group_level;
    } else {
      unused_group2level[s.group_id] = Math.min(
        unused_group2level[s.group_id],
        s.group_level,
      );
    }
  });
  available_skills = Object.keys(available_skills)
    .map(Number)
    .reduce((p, c) => {
      (p[skills_dict[c].group_id] || (p[skills_dict[c].group_id] = [])).push(c);
      return p;
    }, {});
  skill_control.get().forEach((s) => (got_skills[skills_dict[s].group_id] = s));
  Object.keys(available_skills).forEach((k) => {
    const learned_skill_level =
      unused_group2level[skills_dict[available_skills[k][0]].group_id];
    if (learned_skill_level) {
      available_skills[k] = available_skills[k].filter(
        (e) => skills_dict[e].group_level < learned_skill_level,
      );
    }
    available_skills[k] = sort_list(
      available_skills[k],
      (e) => skills_dict[e].group_level,
      true,
    );
    if (got_skills[k]) {
      const sort_key = skills_dict[got_skills[k]].group_level;
      available_skills[k] = available_skills[k]
        .filter((e) => skills_dict[e].group_level >= sort_key)
        .slice(0, 2);
    } else {
      available_skills[k] = available_skills[k].slice(0, 1);
    }
  });
  got_skills = {};
  skill_control.get().forEach((e) => (got_skills[e] = 1));
  const buffer = [];
  Object.values(available_skills).map((e) =>
    e.forEach((s) => {
      const skill = skills_dict[s];
      const price = Math.floor(skill.price * (1 - discount));
      buffer.push({
        columns: [
          {
            config: { width: 15 },
            content: skill.get_colored_name(),
            type: 'text',
          },
          got_skills[s]
            ? {
                config: {
                  align: 'right',
                  width: 8,
                },
                content: '[已习得]',
                type: 'text',
              }
            : {
                config: {
                  align: 'right',
                  disabled: got_skills[s] || pt < price,
                  showAcc: got_skills[s] !== 1,
                  width: 8,
                },
                content: `${price} PT`,
                type: 'button',
              },
        ],
        config: { width: 8 },
        id: s,
      });
    }),
  );
  return buffer.map((e, i) => {
    e.columns[1].accelerator = i + 1;
    return e;
  });
}

module.exports = async () => {
  const train_list = era
    .getAddedCharacters()
    .filter((chara_id) => sys_check_train_enabled(chara_id));
  let flag_train = true,
    chara_id = era.get('flag:当前互动角色'),
    skill_control = new CharaSkills(chara_id),
    index = train_list.indexOf(chara_id),
    discount = get_discount(chara_id);

  await new GameGuides().office_train();

  while (flag_train) {
    await era.clear();

    print_page_header();

    const race = era.get(`cflag:${chara_id}:种族`),
      trainer_buff = get_trainer_train_buff(chara_id);
    let pt = era.get(`exp:${chara_id}:技能点数`);
    if (chara_id || !race) {
      print_curr_chara_info(chara_id, chara_info_type.train);
    }

    let extra_buff =
      era.get(`cflag:${chara_id}:位置`) === era.get('cflag:0:位置')
        ? trainer_buff
        : 0;

    if (race) {
      const columns = [],
        adaptivity = adaptability_names.map((e) =>
          era.get(`cflag:${chara_id}:${e}适性`),
        );
      const chara_score = get_chara_score(chara_id);
      let chara_level = get_rank_level(chara_score);
      columns.push(
        { config: { content: '基础能力' }, type: 'divider' },
        { config: { width: 4 }, content: '评价', type: 'text' },
        {
          config: {
            color: adaptability_colors[chara_level],
            width: 4,
            fontWeight: 'bold',
          },
          content: chara_score,
          type: 'text',
        },
        {
          config: { align: 'right', width: 12 },
          content: '技能点数',
          type: 'text',
        },
        {
          config: {
            align: 'right',
            width: 4,
            fontWeight: 'bold',
          },
          content: pt.toLocaleString(),
          type: 'text',
        },
      );
      attr_names.forEach((k, index) => {
        let buff = get_train_bonus(chara_id, index);
        if (index === attr_enum.speed && era.get(`status:${chara_id}:发胖`)) {
          buff = -100;
        }
        columns.push(
          {
            config: { width: 4 },
            content: k,
            type: 'text',
          },
          {
            config: {
              color: attr_colors[k],
              height: 22,
              width: 20,
            },
            inContent: `${Math.floor(era.get(`base:${chara_id}:${k}`))}/${era.get(
              `maxbase:${chara_id}:${k}`,
            )} ${
              buff < 0 ? buff.toFixed(0) : `+${buff.toFixed(0)}`
            }% ${get_attr_rank(era.get(`base:${chara_id}:${k}`))}`,
            percentage:
              (era.get(`base:${chara_id}:${k}`) * 100) /
              era.get(`maxbase:${chara_id}:${k}`),
            type: 'progress',
          },
        );
      });
      era.printInColRows(
        {
          columns,
          config: { width: 6 },
        },
        { columns: [], config: { width: 1 } },
        {
          columns: [
            {
              config: { content: '比赛能力' },
              type: 'divider',
            },
            {
              config: { width: 3 },
              content: '场地适性',
              type: 'text',
            },
            {
              config: { width: 3 },
              content: [
                '草',
                {
                  color: adaptability_colors[adaptivity[0]],
                  content: get_adaptability_rank(adaptivity[0]),
                  fontWeight: 'bold',
                },
                '·泥',
                {
                  color: adaptability_colors[adaptivity[1]],
                  content: get_adaptability_rank(adaptivity[1]),
                  fontWeight: 'bold',
                },
              ],
              type: 'text',
            },
            {
              config: { width: 3 },
              content: '距离适性',
              type: 'text',
            },
            {
              config: { width: 6 },
              content: [
                '短',
                {
                  color: adaptability_colors[adaptivity[2]],
                  content: get_adaptability_rank(adaptivity[2]),
                  fontWeight: 'bold',
                },
                '·英',
                {
                  color: adaptability_colors[adaptivity[3]],
                  content: get_adaptability_rank(adaptivity[3]),
                  fontWeight: 'bold',
                },
                '·中',
                {
                  color: adaptability_colors[adaptivity[4]],
                  content: get_adaptability_rank(adaptivity[4]),
                  fontWeight: 'bold',
                },
                '·长',
                {
                  color: adaptability_colors[adaptivity[5]],
                  content: get_adaptability_rank(adaptivity[5]),
                  fontWeight: 'bold',
                },
              ],
              type: 'text',
            },
            {
              config: { width: 3 },
              content: '跑法适性',
              type: 'text',
            },
            {
              config: { width: 6 },
              content: [
                '逃',
                {
                  color: adaptability_colors[adaptivity[6]],
                  content: get_adaptability_rank(adaptivity[6]),
                  fontWeight: 'bold',
                },
                '·先',
                {
                  color: adaptability_colors[adaptivity[7]],
                  content: get_adaptability_rank(adaptivity[7]),
                  fontWeight: 'bold',
                },
                '·差',
                {
                  color: adaptability_colors[adaptivity[8]],
                  content: get_adaptability_rank(adaptivity[8]),
                  fontWeight: 'bold',
                },
                '·追',
                {
                  color: adaptability_colors[adaptivity[9]],
                  content: get_adaptability_rank(adaptivity[9]),
                  fontWeight: 'bold',
                },
              ],
              type: 'text',
            },
            {
              config: { content: '习得技能' },
              type: 'divider',
            },
            ...skill_control.get().map((e) => ({
              config: { display: 'inline-block', width: 8 },
              content: skills_dict[e].get_colored_name(),
              type: 'text',
            })),
          ],
          config: { width: 17 },
        },
      );
    }

    era.drawLine();
    era.printMultiColumns([
      {
        accelerator: 100,
        config: { width: 4 },
        content: '查看队伍列表',
        type: 'button',
      },
      ...(train_list.length > 1
        ? [
            {
              accelerator: 101,
              config: { width: 4, disabled: index === 0 },
              content: '上一位',
              type: 'button',
            },
            {
              accelerator: 102,
              config: { width: 4, disabled: index === train_list.length - 1 },
              content: '下一位',
              type: 'button',
            },
          ]
        : []),
      ...(race &&
      (chara_id === 0 || era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48)
        ? [
            {
              accelerator: 103,
              config: {
                disabled:
                  chara_id === 0 &&
                  skill_control
                    .get()
                    .filter((e) => !skills_dict[e].is_generated).length >=
                    skill_limit &&
                  pt < 100,
                width: 4,
              },
              content:
                chara_id === 0 &&
                skill_control.get().filter((e) => !skills_dict[e].is_generated)
                  .length >= skill_limit
                  ? '重置技能'
                  : '学习技能',
              type: 'button',
            },
          ]
        : []),
    ]);

    const player_time = era.get('base:0:精力'),
      chara_time = era.get(`base:${chara_id}:精力`) || 0,
      chara_stamina = era.get(`base:${chara_id}:体力`) || 0,
      /** @type {number[]} */
      debuff = [0, chara_id].map(sys_get_debuff);
    if (debuff[1] >= 0.5) {
      debuff[1] = 1000;
    }
    const beach_level =
      (era.get(`cflag:${chara_id}:位置`) === location_enum.beach) * 5;

    const train_enabled = sys_check_train_enabled(chara_id);
    era.printMultiColumns(
      attr_names.map((e, i) => {
        const train_level =
            beach_level || era.get(`abl:${chara_id}:${e}训练等级`),
          train_cost = time_cost[train_level - 1] * (1 + debuff[0]);
        return {
          accelerator: 200 + i,
          config: {
            width: 4,
            disabled:
              !race ||
              player_time < train_cost / 2 ||
              chara_time < train_cost ||
              chara_stamina === 0 ||
              !train_enabled,
          },
          content: `${e}训练 Lv.${train_level}\n成功率：${
            train_level ? sys_get_succ_rate(chara_id, i, extra_buff) : 0
          }%`,
          type: 'button',
        };
      }),
    );
    era.printButton('返回', 999);

    const ret = await era.input();
    let flag_skill = true;
    switch (ret) {
      case 100:
        index = train_list.indexOf(
          (chara_id = era.set(
            'flag:当前互动角色',
            await select_target_chara(chara_info_type.train),
          )),
        );
        skill_control = new CharaSkills(chara_id);
        discount = get_discount(chara_id);
        break;
      case 101:
      case 102:
        chara_id = train_list[ret === 101 ? --index : ++index];
        skill_control = new CharaSkills(chara_id);
        discount = get_discount(chara_id);
        break;
      case 103:
        if (
          chara_id === 0 &&
          skill_control.get().filter((e) => !skills_dict[e].is_generated)
            .length >= skill_limit
        ) {
          if (await select_yes_or_no('要使用 100 点技能点数重置技能吗？')) {
            era.add('exp:0:技能点数', -100);
            const generated_skills = skill_control
              .get()
              .filter((e) => skills_dict[e].is_generated);
            skill_control.clear();
            if (era.get('cflag:0:模版角色') > 0) {
              chara_skill_dict[era.get('cflag:0:模版角色')].forEach((s) =>
                get_skills_and_print_in_event(0, [s], skill_control, false),
              );
            }
            skill_control.add(...generated_skills);
          }
        } else {
          let buffer = get_skill_buffer(chara_id, skill_control, pt, discount),
            skill_filter = -1,
            ground_filter = -1,
            dis_filter = -1,
            style_filter = -1,
            ability_filter = -1,
            enable_filter = false,
            page = 1,
            skill_page_size;
          while (flag_skill) {
            /** @type {(function(UmaSkill):boolean)[]} */
            const filters = [
              (s) => skill_filter === -1 || s.category >> 3 === skill_filter,
              (s) =>
                ground_filter === -1 ||
                s.adapt_tags.indexOf(ground_filter) !== -1,
              (s) =>
                dis_filter === -1 ||
                s.adapt_tags.indexOf(dis_filter + 2) !== -1,
              (s) =>
                style_filter === -1 ||
                s.adapt_tags.indexOf(style_filter + 6) !== -1,
              (s) =>
                ability_filter === -1 ||
                s.ability_tags.indexOf(ability_filter) !== -1,
            ];
            skill_page_size = enable_filter ? 63 : 84;
            const filtered_buffer = buffer.filter(
                (e) =>
                  !enable_filter ||
                  filters.reduce((p, c) => p && c(skills_dict[e.id]), true),
              ),
              max_page = Math.max(
                Math.ceil(filtered_buffer.length / skill_page_size),
                1,
              );
            if (page > max_page) {
              page = max_page;
            }
            era.printInColRows(
              [
                {
                  config: {
                    content: `为 ${get_chara_talk(chara_id).get_full_name()} 选择技能`,
                  },
                  type: 'divider',
                },
              ],
              ...filtered_buffer.slice(
                (page - 1) * skill_page_size,
                page * skill_page_size,
              ),
              max_page === 1
                ? []
                : [
                    {
                      accelerator: 900,
                      config: {
                        align: 'left',
                        disabled: page === 1,
                        width: 4,
                      },
                      content: '上一页',
                      type: 'button',
                    },
                    {
                      config: { align: 'center', width: 6 },
                      content: `第 ${page} 页 / 共 ${max_page} 页`,
                      type: 'text',
                    },
                    {
                      accelerator: 901,
                      config: {
                        align: 'right',
                        disabled: page === max_page,
                        width: 4,
                      },
                      content: '下一页',
                      type: 'button',
                    },
                  ],
              [{ content: [{ isBr: true }], type: 'text' }],
              ...(enable_filter
                ? [
                    [
                      {
                        config: { width: 3 },
                        content: '技能类型',
                        type: 'text',
                      },
                      ...['全部', '被动', '恢复', '增幅', '削弱'].map(
                        (e, i) => ({
                          accelerator: 930 + i,
                          config: {
                            buttonType:
                              i === skill_filter + 1 ? 'warning' : 'info',
                            width: 3,
                          },
                          content: e,
                          type: 'button',
                        }),
                      ),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: '场地类型',
                        type: 'text',
                      },
                      ...['全部', ...adaptability_names.slice(0, 2)].map(
                        (e, i) => ({
                          accelerator: 940 + i,
                          config: {
                            buttonType:
                              i === ground_filter + 1 ? 'warning' : 'info',
                            width: 3,
                          },
                          content: e,
                          type: 'button',
                        }),
                      ),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: '距离类型',
                        type: 'text',
                      },
                      ...['全部', ...adaptability_names.slice(2, 6)].map(
                        (e, i) => ({
                          accelerator: 950 + i,
                          config: {
                            buttonType:
                              i === dis_filter + 1 ? 'warning' : 'info',
                            width: 3,
                          },
                          content: e,
                          type: 'button',
                        }),
                      ),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: '策略类型',
                        type: 'text',
                      },
                      ...['全部', ...adaptability_names.slice(6)].map(
                        (e, i) => ({
                          accelerator: 960 + i,
                          config: {
                            buttonType:
                              i === style_filter + 1 ? 'warning' : 'info',
                            width: 3,
                          },
                          content: e,
                          type: 'button',
                        }),
                      ),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: '效果类型',
                        type: 'text',
                      },
                      ...['全部', ...ability_tag_names].map((e, i) => ({
                        accelerator: 970 + i,
                        config: {
                          buttonType:
                            i === ability_filter + 1 ? 'warning' : 'info',
                          width: 3,
                        },
                        content: e,
                        type: 'button',
                      })),
                    ],
                  ]
                : []),
              [
                {
                  config: { width: 12 },
                  content: ['技能点数：', pt.toString()],
                  type: 'text',
                },
                ...(enable_filter
                  ? [
                      {
                        accelerator: 997,
                        config: { width: 3 },
                        content: '重置',
                        type: 'button',
                      },
                    ]
                  : [{ config: { width: 3 }, content: [], type: 'text' }]),
                {
                  accelerator: 998,
                  config: {
                    buttonType: enable_filter ? 'warning' : 'info',
                    width: 6,
                  },
                  content: enable_filter ? '打开筛选器' : '关闭筛选器',
                  type: 'button',
                },
                {
                  accelerator: 999,
                  config: { width: 3 },
                  content: '结束',
                  type: 'button',
                },
              ],
            );
            const ret = await era.input({ useRule: false });
            if (ret === 999) {
              flag_skill = false;
            } else if (ret === 998) {
              enable_filter = !enable_filter;
            } else if (ret === 997) {
              ability_filter =
                style_filter =
                dis_filter =
                ground_filter =
                skill_filter =
                  -1;
            } else if (ret >= 970) {
              ability_filter = ret - 971;
            } else if (ret >= 960) {
              style_filter = ret - 961;
            } else if (ret >= 950) {
              dis_filter = ret - 951;
            } else if (ret >= 940) {
              ground_filter = ret - 941;
            } else if (ret >= 930) {
              skill_filter = ret - 931;
            } else if (ret === 901) {
              page++;
            } else if (ret === 900) {
              page--;
            } else if (ret === 'irwinner') {
              pt = era.add(`exp:${chara_id}:技能点数`, 9999);
              buffer = get_skill_buffer(chara_id, skill_control, pt, discount);
            } else if (typeof ret === 'number' && buffer[ret - 1]) {
              const skill = skills_dict[buffer[ret - 1].id],
                to_remove =
                  skills_dict[
                    skill_control
                      .get()
                      .find(
                        (s) =>
                          s !== skill.id &&
                          skills_dict[s].group_id === skill.group_id,
                      )
                  ];
              if (
                await select_yes_or_no([
                  '要学习',
                  ...skill.get_colored_name(),
                  '吗？',
                  ...(to_remove
                    ? ['将取代', ...to_remove.get_colored_name(), '。']
                    : []),
                ])
              ) {
                pt = era.add(
                  `exp:${chara_id}:技能点数`,
                  -Math.floor(skill.price * (1 - discount)),
                );
                get_skills_and_print_in_event(
                  chara_id,
                  [skill.id],
                  skill_control,
                ) && (await era.waitAnyKey());
                buffer = get_skill_buffer(
                  chara_id,
                  skill_control,
                  pt,
                  discount,
                );
              }
            }
            await era.clear();
            flag_skill &&=
              chara_id > 0 ||
              skill_control.get().filter((e) => !skills_dict[e].is_generated)
                .length < skill_limit;
          }
        }
        break;
      case 990:
        switch_image();
        break;
      case 999:
        flag_train = false;
        break;
      default:
        era.drawLine();
        await train_uma(chara_id, ret - 200, extra_buff);
    }
  }
};
