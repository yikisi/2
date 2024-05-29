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

const chara_info_type = require('#/data/chara-info-type');
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
const { skills_dict } = require('#/data/race/skill/skill-const');
const {
  adaptability_names,
  attr_enum,
  attr_names,
  time_cost,
} = require('#/data/train-const');

module.exports = async () => {
  let flag_train = true;

  while (flag_train) {
    await era.clear();

    print_page_header();

    const chara_id = era.get('flag:当前互动角色'),
      race = era.get(`cflag:${chara_id}:种族`),
      trainer_buff = get_trainer_train_buff(chara_id);
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
        { config: { width: 3 }, content: '评价', type: 'text' },
        {
          config: {
            color: adaptability_colors[chara_level],
            width: 21,
            fontWeight: 'bold',
          },
          content: chara_score,
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
            config: { width: 3 },
            content: k,
            type: 'text',
          },
          {
            config: {
              color: attr_colors[k],
              height: 22,
              width: 21,
            },
            inContent: `${era.get(`base:${chara_id}:${k}`)}/${era.get(
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
          config: { width: 9 },
        },
        { columns: [], config: { width: 1 } },
        {
          columns: [
            {
              config: { content: '比赛能力' },
              type: 'divider',
            },
            {
              config: { width: 4 },
              content: '场地适性',
              type: 'text',
            },
            {
              config: { width: 8 },
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
              config: { width: 4 },
              content: '距离适性',
              type: 'text',
            },
            {
              config: { width: 8 },
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
              config: { width: 4 },
              content: '技能点数',
              type: 'text',
            },
            {
              config: { width: 8 },
              content: era.get(`exp:${chara_id}:技能点数`),
              type: 'text',
            },
            {
              config: { width: 4 },
              content: '跑法适性',
              type: 'text',
            },
            {
              config: { width: 8 },
              content: [
                { content: '逃' },
                {
                  color: adaptability_colors[adaptivity[6]],
                  content: get_adaptability_rank(adaptivity[6]),
                  fontWeight: 'bold',
                },
                { content: '·先' },
                {
                  color: adaptability_colors[adaptivity[7]],
                  content: get_adaptability_rank(adaptivity[7]),
                  fontWeight: 'bold',
                },
                { content: '·差' },
                {
                  color: adaptability_colors[adaptivity[8]],
                  content: get_adaptability_rank(adaptivity[8]),
                  fontWeight: 'bold',
                },
                { content: '·追' },
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
            ...era.get(`skill:${chara_id}:习得技能`).map((e) => ({
              config: { display: 'inline-block', width: 8 },
              content: skills_dict[e].get_colored_name(),
              type: 'text',
            })),
          ],
          config: { width: 14 },
        },
      );
    }

    era.drawLine();
    era.printButton('查看队伍列表', 100);

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

    switch (ret) {
      case 100:
        era.set(
          'flag:当前互动角色',
          await select_target_chara(chara_info_type.train),
        );
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
