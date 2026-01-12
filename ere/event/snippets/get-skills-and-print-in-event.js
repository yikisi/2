const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaSkills = require('#/data/chara-skills');
const { skills_dict } = require('#/data/race/skill/skill-const');

/**
 * @param {number} id
 * @param {number[]} skills
 * @param {CharaSkills} [skill_control]
 * @param {boolean} [shown=true]
 * @returns {boolean}
 */
function get_skills_and_print_in_event(
  id,
  skills,
  skill_control = CharaSkills.get(id),
  shown = true,
) {
  let ret_flag = false;
  if (skills instanceof Array) {
    const to_remove = [],
      current_skills = skill_control.get(),
      new_skills = skills.filter((e) => {
        const os = current_skills.find(
          (s) => s !== e && skills_dict[s].group_id === skills_dict[e].group_id,
        );
        if (!os) {
          return true;
        } else if (
          (skills_dict[e].category & skills_dict[os].category & 0b111) === 0 ||
          skills_dict[e].group_level > skills_dict[os].group_level
        ) {
          to_remove.push(os);
          return true;
        }
        return false;
      });
    skill_control.remove(...to_remove);
    const got = skill_control.add(...new_skills);
    if (got.length > 0 && shown) {
      const buffer = [];
      got.forEach((e) => buffer.push(...skills_dict[e].get_colored_name()));
      era.print([get_chara_talk(id).get_colored_name(), ' 习得了', ...buffer]);
      ret_flag = true;
    }
  }
  return ret_flag;
}

module.exports = get_skills_and_print_in_event;
