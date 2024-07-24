const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const { gene_juel_names } = require('#/data/other-const');
const { gene_dict } = require('#/data/race/gene/gene-const');
const { gene_type_colors } = require('#/data/race/model/uma-gene');
const { skills_dict } = require('#/data/race/skill/skill-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const in_edu = era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48,
      in_palace = era.get(`cflag:${chara.id}:殿堂`);
    const skill_list = new CharaSkills(chara.id).get().map((e) => ({
      config: { width: 6 },
      content: skills_dict[e].get_colored_name(),
      type: 'text',
    }));
    const aim_list = [
      {
        config: { content: '习得技能', position: 'left' },
        type: 'divider',
      },
      ...(skill_list.length
        ? skill_list
        : [{ content: '未习得', type: 'text' }]),
      { content: [], type: 'text' },
      ...[].map((e) => ({
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
            ...(chara.id
              ? [
                  {
                    content: [
                      get_chara_talk(
                        era.get(`cflag:${chara.id}:继承方1`),
                      ).get_colored_name(),
                      ' & ',
                      get_chara_talk(
                        era.get(`cflag:${chara.id}:继承方2`),
                      ).get_colored_name(),
                      ' =>',
                    ],
                    type: 'text',
                  },
                ]
              : []),
            ...gene_juel_names.map((e, i) => ({
              config: { color: gene_type_colors[i], width: 8 },
              content: `${e}因子：${era.get(`juel:${chara.id}:${e}`)}`,
              type: 'text',
            })),
            { content: [], type: 'text' },
            ...new CharaGenes(chara.id).get_values().map((e) => ({
              config: { width: 8 },
              content: [...gene_dict[e.id].get_colored_name(), `× ${e.count}`],
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
            ...gene_juel_names.map((e, i) => ({
              config: { color: gene_type_colors[i], width: 6 },
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
            { content: [], type: 'text' },
            ...new CharaAvailableGenes(chara.id).get_values().map((e) => ({
              config: { width: 6 },
              content: [...gene_dict[e.id].get_colored_name(), `× ${e.count}`],
              type: 'text',
            })),
          ]
        : []),
    ];
    return {
      print() {
        return aim_list;
      },
    };
  },
  name: '比赛技巧',
  uma: true,
};
