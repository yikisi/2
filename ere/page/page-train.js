const era = require('#/era-electron');

const {
  sys_check_train_disabled,
  sys_check_train_enabled,
  sys_get_debuff,
  sys_get_discount,
  sys_get_succ_rate,
} = require('#/system/sys-calc-chara-param');
const { switch_image } = require('#/system/sys-calc-image');
const { get_train_bonus, train_uma } = require('#/system/sys-train-uma');

const print_curr_chara_info = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');
const select_target_chara = require('#/page/components/select-target');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const game_guides = require('#/event/others/game-guides');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { flat_join_list, sort_list } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const chara_info_type = require('#/data/chara-info-type');
const CharaSkills = require('#/data/chara-skills');
const { adaptability_colors, attr_colors } = require('#/data/color-const');
const {
  get_adaptability_rank,
  get_attr_rank,
  get_chara_score,
  get_rank_level,
  get_trainer_train_buff,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const {
  chara_skill_dict,
  common_skills,
  skills_dict,
} = require('#/data/race/skill/skill-const');
const { attr_enum, time_cost } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

// 感谢辛烈治先生吧，原谅我用了他最讨厌的人的数字和他的数字相乘
const skill_limit = 27;

/**
 * @param {number} cid
 * @param {CharaSkills} skill_control
 * @param {number} pt
 * @param {number} discount
 */
function get_skill_buffer(cid, skill_control, pt, discount) {
  const unused_group2level = {};
  let available_skills = {},
    got_skills = {};
  common_skills.forEach((e) => (available_skills[e] = 1));
  CharaAvailableSkills.get(cid)
    .get()
    .forEach((e) => {
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
                content: i18n().skill.learnt,
                type: 'text',
              }
            : {
                config: {
                  align: 'right',
                  disabled: got_skills[s] || pt < price,
                  showAcc: got_skills[s] !== 1,
                  width: 8,
                },
                content: i18n().skill.price_template.replace(
                  '%PRICE%',
                  price.toString(),
                ),
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
  let flag_train = true;
  let cid = era.get('flag:当前互动角色');
  let skill_control = CharaSkills.get(cid);
  let index = train_list.indexOf(cid);
  let discount = sys_get_discount(cid);

  await game_guides.office_train();

  while (flag_train) {
    await era.clear();

    print_page_header();

    const race = era.get(`cflag:${cid}:种族`),
      trainer_buff = get_trainer_train_buff(cid);
    let pt = era.get(`exp:${cid}:技能点数`);
    if (cid || !race) {
      print_curr_chara_info(cid, chara_info_type.train);
    }

    let extra_buff =
      era.get(`cflag:${cid}:位置`) === era.get('cflag:0:位置')
        ? trainer_buff
        : 0;

    if (race) {
      const columns = [];
      const adaptivity = new Array(10)
        .fill(0)
        // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
        .map((_, i) => era.get(`cflag:${cid}:${30 + i}`));
      const chara_score = get_chara_score(cid);
      let chara_level = get_rank_level(chara_score);
      columns.push(
        { config: { content: i18n().ui_train_base }, type: 'divider' },
        { config: { width: 4 }, content: i18n().ui_train_score, type: 'text' },
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
          content: i18n().ui_train_pt,
          type: 'text',
        },
        {
          config: {
            align: 'right',
            width: 4,
            fontWeight: 'bold',
          },
          content: [get_abbr_number(pt)],
          type: 'text',
        },
      );
      for (let i = 0; i < 5; ++i) {
        let buff = get_train_bonus(cid, i);
        if (i === attr_enum.speed && era.get(`status:${cid}:发胖`)) {
          buff = -100;
        }
        // BASENAME:5 - 9 = 速度 - 智力
        const val = era.get(`base:${cid}:${5 + i}`);
        const limit = era.get(`maxbase:${cid}:${5 + i}`);
        columns.push(
          {
            config: { width: 8 },
            content: di18n.n_attr[i],
            type: 'text',
          },
          {
            config: {
              color: attr_colors[i],
              height: 22,
              width: 16,
            },
            inContent: `${Math.floor(val)}/${limit} ${
              buff < 0 ? buff.toFixed(0) : `+${buff.toFixed(0)}`
            }% ${get_attr_rank(val)}`,
            percentage: (val * 100) / limit,
            type: 'progress',
          },
        );
      }
      era.printInColRows(
        {
          columns,
          config: { width: 6 },
        },
        { columns: [], config: { width: 1 } },
        {
          columns: [
            {
              config: { content: i18n().ui_train_race },
              type: 'divider',
            },
            {
              config: { width: 3 },
              content: i18n().ui_train_adapt_track,
              type: 'text',
            },
            {
              config: { width: 4 },
              content: flat_join_list(
                di18n.race.a_ground.map((n, i) => [
                  n,
                  {
                    color: adaptability_colors[adaptivity[i]],
                    content: get_adaptability_rank(adaptivity[i]),
                    fontWeight: 'bold',
                  },
                ]),
                i18n().ui_train_adapt_ui_conjunction,
              ),
              type: 'text',
            },
            {
              config: { width: 3 },
              content: i18n().ui_train_adapt_dis,
              type: 'text',
            },
            {
              config: { width: 6 },
              content: flat_join_list(
                di18n.race.a_distance.map((n, i) => [
                  n,
                  {
                    color: adaptability_colors[adaptivity[2 + i]],
                    content: get_adaptability_rank(adaptivity[2 + i]),
                    fontWeight: 'bold',
                  },
                ]),
                i18n().ui_train_adapt_ui_conjunction,
              ),
              type: 'text',
            },
            {
              config: { width: 3 },
              content: i18n().ui_train_adapt_style,
              type: 'text',
            },
            {
              config: { width: 5 },
              content: flat_join_list(
                di18n.race.a_style.map((n, i) => [
                  n,
                  {
                    color: adaptability_colors[adaptivity[6 + i]],
                    content: get_adaptability_rank(adaptivity[6 + i]),
                    fontWeight: 'bold',
                  },
                ]),
                i18n().ui_train_adapt_ui_conjunction,
              ),
              type: 'text',
            },
            {
              config: { content: i18n().ui_train_learnt_skills },
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
        content: i18n().ui_show_team,
        type: 'button',
      },
      ...(train_list.length > 1
        ? [
            {
              accelerator: 101,
              config: { width: 4, disabled: index === 0 },
              content: i18n().ui_ch_prev,
              type: 'button',
            },
            {
              accelerator: 102,
              config: { width: 4, disabled: index === train_list.length - 1 },
              content: i18n().ui_ch_next,
              type: 'button',
            },
          ]
        : []),
      ...(race && (cid === 0 || era.get(`cflag:${cid}:育成回合计时`) < 3 * 48)
        ? [
            {
              accelerator: 103,
              config: {
                disabled:
                  cid === 0 &&
                  skill_control
                    .get()
                    .filter((e) => !skills_dict[e].is_generated).length >=
                    skill_limit &&
                  pt < 100,
                width: 4,
              },
              content:
                cid === 0 &&
                skill_control.get().filter((e) => !skills_dict[e].is_generated)
                  .length >= skill_limit
                  ? i18n().ui_train_reset_skill
                  : i18n().ui_train_learn_skill,
              type: 'button',
            },
          ]
        : []),
    ]);

    const player_time = era.get('base:0:精力');
    const chara_time = era.get(`base:${cid}:精力`) || 0;
    const chara_stamina = era.get(`base:${cid}:体力`) || 0;
    /** @type {number[]} */
    const debuff = [0, cid].map(sys_get_debuff);
    const train_disabled = sys_check_train_disabled(cid);
    const beach_level =
      (era.get(`cflag:${cid}:位置`) === location_enum.beach) * 5;
    const train_enabled = sys_check_train_enabled(cid) && !train_disabled;
    era.printMultiColumns(
      new Array(5).fill(0).map((_, i) => {
        // ABLNAME:0 - 4 = 速度训练等级 - 智力训练等级
        const train_level = beach_level || era.get(`abl:${cid}:${i}`);
        const train_cost = time_cost[train_level - 1];
        const cost = {
          mark: 0,
          time: (train_cost * (1 + debuff[0])) / 2,
        };
        if (!cid) {
          cost.time = train_cost * (1 + debuff[1]);
          cost.mark = (player_time < cost.time) * 0b10;
        } else {
          cost.ctime = train_cost * (1 + debuff[1]);
          cost.mark =
            (player_time < cost.time) * 0b10 +
            (chara_time < cost.ctime) * 0b1000;
        }
        return {
          accelerator: 200 + i,
          config: {
            width: 4,
            disabled:
              !race || cost.mark > 0 || chara_stamina === 0 || !train_enabled,
            title: di18n.get_act_tip(false, cost),
          },
          content: i18n()
            .ui_train_with_s_rate_template.replace('%ATTR%', di18n.n_attr[i])
            .replace('%LEVEL%', train_level.toString())
            .replace(
              '%SUCCESS%',
              train_level > 0 ? sys_get_succ_rate(cid, i, extra_buff) : '0',
            ),
          type: 'button',
        };
      }),
    );
    era.printButton(i18n().ui_back, 999);

    const ret = await era.input();
    let flag_skill = true;
    switch (ret) {
      case 100:
        index = train_list.indexOf(
          (cid = era.set(
            'flag:当前互动角色',
            await select_target_chara(chara_info_type.train),
          )),
        );
        skill_control = CharaSkills.get(cid);
        discount = sys_get_discount(cid);
        break;
      case 101:
      case 102:
        cid = train_list[ret === 101 ? --index : ++index];
        skill_control = CharaSkills.get(cid);
        discount = sys_get_discount(cid);
        break;
      case 103:
        if (
          cid === 0 &&
          skill_control.get().filter((e) => !skills_dict[e].is_generated)
            .length >= skill_limit
        ) {
          if (await select_yes_or_no(i18n().ui_train_reset_skill_confirm)) {
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
          let buffer = get_skill_buffer(cid, skill_control, pt, discount);
          let skill_filter = -1;
          let ground_filter = -1;
          let dis_filter = -1;
          let style_filter = -1;
          let ability_filter = -1;
          let enable_filter = false;
          let page = 1;
          let skill_page_size;
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
                    content: i18n().ui_train_skill_header_template.replace(
                      '%NAME%',
                      get_chara_talk(cid).full_name,
                    ),
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
                      content: i18n().ui_pg_prev,
                      type: 'button',
                    },
                    {
                      config: { align: 'center', width: 6 },
                      content: i18n()
                        .ui_pagination_template.replace(
                          '%CURR%',
                          page.toString(),
                        )
                        .replace('%TOTAL%', max_page.toString()),
                      type: 'text',
                    },
                    {
                      accelerator: 901,
                      config: {
                        align: 'right',
                        disabled: page === max_page,
                        width: 4,
                      },
                      content: i18n().ui_pg_next,
                      type: 'button',
                    },
                  ],
              [{ content: [{ isBr: 1 }], type: 'text' }],
              ...(enable_filter
                ? [
                    [
                      {
                        config: { width: 3 },
                        content: i18n().skill.n_type,
                        type: 'text',
                      },
                      ...[i18n().ui_all, ...di18n.skill.n_type.slice(0, 4)].map(
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
                        content: i18n().skill.n_ground,
                        type: 'text',
                      },
                      ...[i18n().ui_all, ...di18n.n_ground].map((e, i) => ({
                        accelerator: 940 + i,
                        config: {
                          buttonType:
                            i === ground_filter + 1 ? 'warning' : 'info',
                          width: 3,
                        },
                        content: e,
                        type: 'button',
                      })),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: i18n().skill.n_dis,
                        type: 'text',
                      },
                      ...[i18n().ui_all, ...di18n.n_dis].map((e, i) => ({
                        accelerator: 950 + i,
                        config: {
                          buttonType: i === dis_filter + 1 ? 'warning' : 'info',
                          width: 3,
                        },
                        content: e,
                        type: 'button',
                      })),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: i18n().skill.n_style,
                        type: 'text',
                      },
                      ...[i18n().ui_all, ...di18n.n_style].map((e, i) => ({
                        accelerator: 960 + i,
                        config: {
                          buttonType:
                            i === style_filter + 1 ? 'warning' : 'info',
                          width: 3,
                        },
                        content: e,
                        type: 'button',
                      })),
                    ],
                    [
                      {
                        config: { width: 3 },
                        content: i18n().skill.n_ability,
                        type: 'text',
                      },
                      ...[i18n().ui_all, ...di18n.skill.n_tag].map((e, i) => ({
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
                  content: i18n().get_ui_train_skill_pt_info(
                    get_abbr_number(pt),
                  ),
                  type: 'text',
                },
                ...(enable_filter
                  ? [
                      {
                        accelerator: 997,
                        config: { width: 3 },
                        content: i18n().ui_reset,
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
                  content: enable_filter
                    ? i18n().ui_train_skill_enable_filter
                    : i18n().ui_train_skill_disable_filter,
                  type: 'button',
                },
                {
                  accelerator: 999,
                  config: { width: 3 },
                  content: i18n().ui_back,
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
              pt = era.add(`exp:${cid}:技能点数`, 9999);
              buffer = get_skill_buffer(cid, skill_control, pt, discount);
            } else if (typeof ret === 'number' && buffer[ret - 1]) {
              const skill = skills_dict[buffer[ret - 1].id];
              const to_remove =
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
                await select_yes_or_no(
                  to_remove
                    ? i18n().get_ui_train_replace_skill(
                        skill.get_colored_name(),
                        to_remove.get_colored_name(),
                      )
                    : i18n().get_ui_train_learn_skill(skill.get_colored_name()),
                )
              ) {
                pt = era.add(
                  `exp:${cid}:技能点数`,
                  -Math.floor(skill.price * (1 - discount)),
                );
                get_skills_and_print_in_event(cid, [skill.id], skill_control) &&
                  (await era.waitAnyKey());
                buffer = get_skill_buffer(cid, skill_control, pt, discount);
              }
            }
            await era.clear();
            flag_skill &&=
              cid > 0 ||
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
        await train_uma(cid, ret - 200, extra_buff);
    }
  }
};
