const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

const { adaptability_colors, attr_colors } = require('#/data/color-const');
const { growth_info, no_info } = require('#/data/exp-const');
const {
  get_adaptability_rank,
  get_chara_score,
  get_rank_level,
} = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const page_name = '育成情况';

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
          : new Array(5).fill(0).map((_, i) => ({
              config: { width: 4, color: attr_colors[i] },
              content: [
                di18n.n_attr[i],
                '：',
                {
                  content: Math.floor(
                    era.get(`base:${chara.id}:${5 + i}`),
                  ).toLocaleString(),
                  fontWeight: 'bold',
                },
              ],
              type: 'text',
            }))),
      ];
    if (era.get(`cflag:${chara.id}:种族`)) {
      const edu_weeks = era.get(`cflag:${chara.id}:48`);
      if (
        !chara.id ||
        // CFLAGNAME:48 = 育成回合计时
        edu_weeks < 3 * 48 ||
        // CFLAGNAME:47 = 殿堂
        era.get(`cflag:${chara.id}:47`)
      ) {
        const out_of_train = era.get(`cflag:${chara.id}:47`);
        const train_time = `${di18n.n_edu[Math.floor(edu_weeks / 48)]} ${
          (Math.floor(edu_weeks / 4) % 12) + 1
        } 月 第 ${(edu_weeks % 4) + 1} 周`;
        const chara_score = get_chara_score(chara.id);
        const chara_level = get_rank_level(chara_score);
        const adapt_info = [];
        new Array(10).fill(0).forEach((_, i) => {
          // 适性ID：30-40
          const adapt = era.get(`cflag:${chara.id}:${30 + i}`);
          adapt_info.push(
            {
              config: { width: 3 },
              content: [di18n.n_adapt[i], '：'],
              type: 'text',
            },
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
            content:
              out_of_train >= 1
                ? [
                    di18n.n_oot[out_of_train - 1],
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
                      ? // CFLAGNAME:49 = 育成次数
                        `${train_time}${era.get(`cflag:${chara.id}:49`) > 0 ? ` (第 ${era.get(`cflag:${chara.id}:49`) + 1} 轮)` : ''} ｜ `
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
      ...[5, 6, 7].map((aid) => ({
        config: { width: 6 },
        content: i18n()
          .tb_abl.template.replace('%ABL%', i18n().tb_abl[aid])
          .replace('%LEVEL%', era.get(`abl:${chara.id}:${aid}`)),
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
