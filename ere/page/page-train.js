const era = require('#/era-electron');

const {
  sys_check_train_enabled,
  sys_get_debuff,
  sys_get_succ_rate,
} = require('#/system/sys-calc-chara-param');
const { get_train_bonus, train_uma } = require('#/system/sys-train-uma');

const print_curr_chara_info = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');
const select_target_chara = require('#/page/components/select-target');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

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
const { common_skills, skills_dict } = require('#/data/race/skill/skill-const');
const {
  adaptability_names,
  attr_enum,
  attr_names,
  time_cost,
} = require('#/data/train-const');

module.exports = async () => {
  const train_list = era
    .getAddedCharacters()
    .filter((chara_id) => sys_check_train_enabled(chara_id));
  let flag_train = true,
    chara_id = era.get('flag:当前互动角色'),
    skill_control = new CharaSkills(chara_id),
    index = train_list.indexOf(chara_id);

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
        let buff = get_train_bonus(chara_id, index, !extra_buff);
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
              config: { width: 5 },
              content: [
                '草',
                {
                  color: adaptability_colors[adaptivity[0]],
                  content: get_adaptability_rank(adaptivity[0]),
                  fontWeight: 'bold',
                },
                ' · 泥',
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
              config: { width: 5 },
              content: [
                '短',
                {
                  color: adaptability_colors[adaptivity[2]],
                  content: get_adaptability_rank(adaptivity[2]),
                  fontWeight: 'bold',
                },
                ' · 英',
                {
                  color: adaptability_colors[adaptivity[3]],
                  content: get_adaptability_rank(adaptivity[3]),
                  fontWeight: 'bold',
                },
                ' · 中',
                {
                  color: adaptability_colors[adaptivity[4]],
                  content: get_adaptability_rank(adaptivity[4]),
                  fontWeight: 'bold',
                },
                ' · 长',
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
              config: { width: 5 },
              content: [
                { content: '逃' },
                {
                  color: adaptability_colors[adaptivity[6]],
                  content: get_adaptability_rank(adaptivity[6]),
                  fontWeight: 'bold',
                },
                { content: ' · 先' },
                {
                  color: adaptability_colors[adaptivity[7]],
                  content: get_adaptability_rank(adaptivity[7]),
                  fontWeight: 'bold',
                },
                { content: ' · 差' },
                {
                  color: adaptability_colors[adaptivity[8]],
                  content: get_adaptability_rank(adaptivity[8]),
                  fontWeight: 'bold',
                },
                { content: ' · 追' },
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
                  chara_id === 0 && skill_control.get().length >= 9 && pt < 100,
                width: 4,
              },
              content:
                chara_id === 0 && skill_control.get().length >= 9
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
    const player_cost = time_cost.player * (1 + debuff[0]),
      uma_cost = time_cost.uma * (1 + debuff[1]);
    const beach_level =
      (era.get(`cflag:${chara_id}:位置`) === location_enum.beach) * 5;

    const train_enabled = sys_check_train_enabled(chara_id);
    era.printMultiColumns(
      attr_names.map((e, i) => {
        const train_level =
          beach_level || era.get(`abl:${chara_id}:${e}训练等级`);
        return {
          accelerator: 200 + i,
          config: {
            width: 4,
            disabled:
              !race ||
              player_time < player_cost ||
              chara_time < uma_cost ||
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
        chara_id = era.set(
          'flag:当前互动角色',
          await select_target_chara(chara_info_type.train),
        );
        skill_control = new CharaSkills(chara_id);
        break;
      case 101:
      case 102:
        chara_id = train_list[ret === 101 ? --index : ++index];
        skill_control = new CharaSkills(chara_id);
        break;
      case 103:
        if (chara_id === 0 && skill_control.get().length >= 9) {
          if (await select_yes_or_no('要使用 100 点技能点数重置技能吗？')) {
            era.add('exp:0:技能点数', -100);
            skill_control.clear();
          }
        } else {
          while (flag_skill) {
            era.drawLine({
              content: `为 ${era.get(`callname:${chara_id}:-2`)} 选择技能`,
            });
            let available_skills = {},
              got_skills = {};
            common_skills.forEach((e) => (available_skills[e] = 1));
            new CharaAvailableSkills(chara_id)
              .get()
              .forEach((e) => delete available_skills[e]);
            available_skills = Object.keys(available_skills)
              .map(Number)
              .reduce((p, c) => {
                (
                  p[skills_dict[c].group_id] ||
                  (p[skills_dict[c].group_id] = [])
                ).push(c);
                return p;
              }, {});
            skill_control
              .get()
              .forEach((s) => (got_skills[skills_dict[s].group_id] = s));
            Object.keys(available_skills).forEach((k) => {
              available_skills[k] = available_skills[k].sort(
                (a, b) =>
                  skills_dict[a].rarity * 10 +
                  Math.abs((a % 10) * 2 - 3.5) -
                  skills_dict[b].rarity * 10 -
                  Math.abs((b % 10) * 2 - 3.5),
              );
              if (got_skills[k]) {
                const sort_key =
                  skills_dict[got_skills[k]].rarity * 10 +
                  Math.abs((got_skills[k] % 10) * 2 - 3.5);
                available_skills[k] = available_skills[k]
                  .filter(
                    (e) =>
                      skills_dict[e].rarity * 10 +
                        Math.abs((e % 10) * 2 - 3.5) >=
                      sort_key,
                  )
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
                            disabled: got_skills[s] || pt < skill.price,
                            showAcc: got_skills[s] !== 1,
                            width: 8,
                          },
                          content: `${skill.price} PT`,
                          type: 'button',
                        },
                  ],
                  config: { width: 8 },
                  id: s,
                });
              }),
            );
            era.printInColRows(
              ...buffer.map((e, i) => {
                e.columns[1].accelerator = i + 1;
                return e;
              }),
              [
                {
                  config: { width: 12 },
                  content: ['技能点数：', pt.toString()],
                  type: 'text',
                },
                {
                  accelerator: 999,
                  config: { align: 'right', width: 12 },
                  content: '结束',
                  type: 'button',
                },
              ],
            );
            const ret = await era.input();
            if (ret === 999) {
              flag_skill = false;
            } else {
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
                  '要学习 ',
                  ...skill.get_colored_name(),
                  ' 吗？',
                  ...(to_remove
                    ? ['将遗忘 ', ...to_remove.get_colored_name(), '。']
                    : []),
                ])
              ) {
                pt = era.add(`exp:${chara_id}:技能点数`, -skill.price);
                get_skills_and_print_in_event(
                  chara_id,
                  [skill.id],
                  skill_control,
                ) && (await era.waitAnyKey());
                await era.clear();
              }
            }
            flag_skill &&= chara_id > 0 || skill_control.get().length < 9;
          }
        }
        break;
      case 990:
        era.set('flag:显示半身像', 1 - era.get('flag:显示半身像'));
        break;
      case 999:
        flag_train = false;
        break;
      default:
        era.drawLine();
        await train_uma(chara_id, ret - 200, extra_buff);
        break;
    }
  }
};
