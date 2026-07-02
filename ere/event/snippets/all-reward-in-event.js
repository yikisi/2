const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_random_value } = require('#/utils/value-utils');

/**
 * @param {number} cid
 * @param {object} changes
 * @param {number[]|Record<string,number>} changes.attr=([])
 * @param {number} changes.pt=0
 * @param {number[]} changes.base=([])
 * @param {number[]} changes.skills=([])
 * @param {number} changes.motivation=0
 * @param {number} changes.relation=0
 * @param {number} changes.love=0
 * @param {boolean} changes.skip_line_break=false
 */
function all_reward_in_event(
  cid,
  {
    attr = [],
    pt = 0,
    base = [],
    skills = [],
    motivation = 0,
    relation = get_random_value(0, 25),
    love = 0,
    skip_line_break = false,
  } = {},
) {
  let ret = get_attr_and_print_in_event(cid, attr, pt, base, skip_line_break);
  ret = get_skills_and_print_in_event(cid, skills) || ret;
  ret = sys_change_motivation(cid, motivation) || ret;
  if (relation !== 0 && relation !== void 0) {
    ret = sys_like_chara(cid, 0, relation, true, love);
  } else if (love > 0) {
    ret = sys_love_uma(cid, love);
  }
  return ret;
}

module.exports = all_reward_in_event;
