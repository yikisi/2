const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaSkills = require('#/data/chara-skills');
const { skills_dict } = require('#/data/race/skill/skill-const');

/**
 * @param {number} chara_id
 * @param {number[]} skills
 * @param {UmaSkill} [skill_control]
 * @returns {boolean}
 */
function get_skills_and_print_in_event(chara_id, skills, skill_control) {
  let ret_flag = false;
  if (skills instanceof Array) {
    const got = (skill_control || new CharaSkills(chara_id)).add(...skills);
    if (got.length > 0) {
      const buffer = [];
      got.forEach((e) => buffer.push(...skills_dict[e].get_colored_name()));
      era.print([
        get_chara_talk(chara_id).get_colored_name(),
        ' 习得了 ',
        ...buffer,
      ]);
      ret_flag = true;
    }
  }
  return ret_flag;
}

module.exports = get_skills_and_print_in_event;
