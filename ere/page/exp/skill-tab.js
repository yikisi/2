const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

const CharaSkills = require('#/data/chara-skills');
const { adaptability_colors } = require('#/data/color-const');
const { no_info } = require('#/data/exp-const');
const {
  get_adaptability_rank,
  get_train_time,
} = require('#/data/info-generator');
const { gene_juel_names } = require('#/data/other-const');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names, out_of_train_type } = require('#/data/train-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const page_name = '育成情况';

let skill_names = undefined;

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    if (!skill_names) {
      skill_names = era
        .get('ablentries')
        .filter((e) => e[1] >= 15 && e[1] <= 17)
        .map((e) => e[0]);
    }
    const aim_list = [],
      in_edu = era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48,
      in_palace = era.get(`cflag:${chara.id}:殿堂`);
    if (era.get(`cflag:${chara.id}:种族`)) {
      if (
        !chara.id ||
        era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48 ||
        in_palace
      ) {
        const out_of_train = era.get(`cflag:${chara.id}:殿堂`),
          train_time = get_train_time(chara.id);
        aim_list.push(
          {
            config: { content: '育成情况', position: 'left' },
            type: 'divider',
          },
          {
            content: out_of_train
              ? out_of_train_type[out_of_train - 1]
              : [
                  train_time.length > 1 ? train_time + ' ｜ ' : '',
                  '拥有 ',
                  {
                    content: era.get(`exp:${chara.id}:技能点数`),
                    fontWeight: 'bold',
                  },
                  ' 点技能点数',
                ],
            type: 'text',
          },
          {
            config: { content: '比赛适应', position: 'left' },
            type: 'divider',
          },
          ...adaptability_names.map((e) => {
            const adapt = era.get(`cflag:${chara.id}:${e}适性`);
            return {
              config: { width: 3 },
              content: [
                e,
                '：',
                {
                  color: adaptability_colors[adapt],
                  content: get_adaptability_rank(adapt),
                  fontWeight: 'bold',
                },
              ],
              type: 'text',
            };
          }),
          {
            config: { content: '习得技能', position: 'left' },
            type: 'divider',
          },
          ...new CharaSkills(chara.id).get().map((e) => ({
            config: { width: 6 },
            content: skills_dict[e].get_colored_name(),
            type: 'text',
          })),
          { content: [], type: 'text' },
          ...skill_names.map((e) => ({
            config: { width: 6 },
            content: `[${e}] Lv.${era.get(`abl:${chara.id}:${e}`)}`,
            type: 'text',
          })),
          {
            config: { content: '因子继承', position: 'left' },
            type: 'divider',
          },
          ...(!chara.id || (in_edu && era.get(`cflag:${chara.id}:继承方1`))
            ? [
                ...gene_juel_names.map((e) => ({
                  config: { width: 6 },
                  content: `${e}因子：${era.get(`juel:${chara.id}:${e}`)}`,
                  type: 'text',
                })),
              ]
            : [{ content: '未继承', type: 'text' }]),
          ...(in_palace
            ? [
                {
                  config: { content: '可继承因子', position: 'left' },
                  type: 'divider',
                },
                ...gene_juel_names.map((e) => ({
                  config: { width: 6 },
                  content: `${e}因子：${era.get(`juel:${chara.id}:${e}`)}`,
                  type: 'text',
                })),
                ...(era.get(`cflag:${chara.id}:被继承`)
                  ? [
                      {
                        config: { width: 6 },
                        content: [
                          '=> ',
                          get_chara_talk(
                            era.get(`cflag:${chara.id}:被继承`),
                          ).get_colored_name(),
                        ],
                        type: 'text',
                      },
                    ]
                  : []),
              ]
            : []),
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
        {
          config: { content: '习得技能', position: 'left' },
          type: 'divider',
        },
        ...new CharaSkills(chara.id).get().map((e) => ({
          config: { width: 6 },
          content: skills_dict[e].get_colored_name(),
          type: 'text',
        })),
        { content: [], type: 'text' },
        ...skill_names.map((e) => ({
          config: { width: 6 },
          content: `[${e}] Lv.${era.get(`abl:${chara.id}:${e}`)}`,
          type: 'text',
        })),
      );
    }

    return {
      print() {
        return aim_list;
      },
    };
  },
  name: page_name,
};
