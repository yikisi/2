const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

const { adaptability_colors, attr_colors } = require('#/data/color-const');
const { growth_info, no_info } = require('#/data/exp-const');
const {
  get_adaptability_rank,
  get_chara_score,
  get_rank_level,
  get_train_time,
} = require('#/data/info-generator');
const {
  adaptability_names,
  attr_names,
  out_of_train_type,
} = require('#/data/train-const');

const page_name = '育成情况';

const skill_names = ['粤语', '英语', '法语'];

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_body:boolean,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const aim_list = [],
      attr_list = [
        {
          config: { content: '基础属性', position: 'left' },
          type: 'divider',
        },
        ...(flags.in_growth
          ? [{ content: growth_info, type: 'text' }]
          : attr_names.map((e, i) => ({
              config: { width: 4, color: attr_colors[i] },
              content: [
                e,
                '：',
                {
                  content: Math.floor(
                    era.get(`base:${chara.id}:${e}`),
                  ).toLocaleString(),
                  fontWeight: 'bold',
                },
              ],
              type: 'text',
            }))),
      ];
    if (era.get(`cflag:${chara.id}:种族`)) {
      if (
        !chara.id ||
        era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48 ||
        era.get(`cflag:${chara.id}:殿堂`)
      ) {
        const out_of_train = era.get(`cflag:${chara.id}:殿堂`),
          train_time = get_train_time(chara.id),
          chara_score = get_chara_score(chara.id),
          chara_level = get_rank_level(chara_score),
          adapt_info = [];
        adaptability_names.forEach((e, i) => {
          const adapt = era.get(`cflag:${chara.id}:${30 + i}`);
          adapt_info.push(
            { config: { width: 3 }, content: [e, '：'], type: 'text' },
            {
              config: {
                color: adaptability_colors[adapt],
                fontWeight: 'bold',
                width: 1,
              },
              content: get_adaptability_rank(adapt),
              type: 'text',
            },
          );
        });
        aim_list.push(
          {
            config: { content: '育成情况', position: 'left' },
            type: 'divider',
          },
          {
            content: out_of_train
              ? [
                  out_of_train_type[out_of_train - 1],
                  ' ｜ 评价：',
                  {
                    content: chara_score,
                    color: adaptability_colors[chara_level],
                    fontWeight: 'bold',
                  },
                ]
              : [
                  '评价：',
                  {
                    content: chara_score,
                    color: adaptability_colors[chara_level],
                    fontWeight: 'bold',
                  },
                  ' ｜ ',
                  train_time.length > 1
                    ? `${train_time}${era.get(`cflag:${chara.id}:育成次数`) ? ` (第 ${era.get(`cflag:${chara.id}:育成次数`) + 1} 轮)` : ''} ｜ `
                    : '',
                  '拥有 ',
                  {
                    content: era.get(`exp:${chara.id}:技能点数`),
                    fontWeight: 'bold',
                  },
                  ' 点技能点数',
                ],
            type: 'text',
          },
          ...attr_list,
          {
            config: { content: '比赛适应', position: 'left' },
            type: 'divider',
          },
          ...adapt_info,
        );
        if (chara.id) {
          const aims = get_custom_check(chara.id).get_edu_aims(),
            aim_count = aims.filter((e) => e.check === 1).length;
          aim_list.push(
            {
              config: {
                content: `育成目标 (${
                  aim_count === aims.length
                    ? '完成！'
                    : `${aim_count}/${aims.length}`
                })`,
                position: 'left',
              },
              type: 'divider',
            },
            ...aims.map((e) => {
              return {
                config: { color: e.color },
                content: e.content,
                type: 'text',
              };
            }),
          );
        }
      } else {
        aim_list.push(
          {
            config: {
              content: page_name,
              position: 'left',
            },
            type: 'divider',
          },
          { content: no_info, type: 'text' },
        );
      }
    } else {
      aim_list.push(
        {
          config: {
            content: page_name,
            position: 'left',
          },
          type: 'divider',
        },
        { content: '一介训练员而已……', type: 'text' },
        ...attr_list,
      );
    }
    aim_list.push(
      {
        config: { content: '语言技能', position: 'left' },
        type: 'divider',
      },
      ...skill_names.map((e) => ({
        config: { width: 6 },
        content: `[${e}] Lv.${era.get(`abl:${chara.id}:${e}`)}`,
        type: 'text',
      })),
    );

    return {
      print() {
        return aim_list;
      },
    };
  },
  name: page_name,
};
