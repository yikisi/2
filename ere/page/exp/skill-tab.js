const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const { gene_dict } = require('#/data/race/gene/gene-const');
const { gene_type_colors } = require('#/data/race/model/uma-gene');
const { skills_dict } = require('#/data/race/skill/skill-const');

const { __, i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const in_edu = era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48,
      in_palace = era.get(`cflag:${chara.id}:殿堂`);
    const skill_list = CharaSkills.get(chara.id)
      .get()
      .map((e) => ({
        config: { width: 6 },
        content: skills_dict[e].get_colored_name(),
        type: 'text',
      }));
    const aim_list = [
      {
        config: {
          content: i18n().detail.skill_header_learnt,
          position: 'left',
        },
        type: 'divider',
      },
      ...(skill_list.length
        ? skill_list
        : [{ content: i18n().detail.skill_no_skill, type: 'text' }]),
    ];
    const available_skills = CharaAvailableSkills.get(chara.id).get();
    if (available_skills.length > 0) {
      aim_list.push(
        {
          config: {
            content: i18n().detail.skill_header_available,
            position: 'left',
          },
          type: 'divider',
        },
        ...available_skills.map((s) => ({
          config: { width: 6 },
          content: skills_dict[s].get_colored_name(),
          type: 'text',
        })),
      );
    }
    aim_list.push(
      {
        config: { content: i18n().detail.skill_header_gene, position: 'left' },
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
            // PARAMNAME:20 - 22 = 粉 - 白
            ...new Array(3).fill(0).map((_, i) => ({
              config: { color: gene_type_colors[i], width: 8 },
              content: i18n().tb_param.get_jewel_count(
                __(`tb_param.jewel${20 + i}`),
                get_abbr_number(era.get(`juel:${chara.id}:${20 + i}`)),
              ),
              type: 'text',
            })),
            { content: [], type: 'text' },
            ...new CharaGenes(chara.id).get_values().map((e) => ({
              config: { width: 8 },
              content: [...gene_dict[e.id].get_colored_name(), `× ${e.count}`],
              type: 'text',
            })),
          ]
        : [{ content: i18n().detail.skill_no_gene, type: 'text' }]),
      ...(in_palace
        ? [
            {
              config: {
                content: i18n().detail.skill_header_gene_available,
                position: 'left',
              },
              type: 'divider',
            },
            // PARAMNAME:20 - 22 = 粉 - 白
            ...new Array(3).fill(0).map((_, i) => ({
              config: { color: gene_type_colors[i], width: 6 },
              content: i18n().tb_param.get_jewel_count(
                __(`tb_param.jewel${20 + i}`),
                get_abbr_number(era.get(`juel:${chara.id}:${20 + i}`)),
              ),
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
    );
    return {
      print: () => aim_list,
    };
  },
  name: i18n().detail.skill_title,
  uma: true,
};
