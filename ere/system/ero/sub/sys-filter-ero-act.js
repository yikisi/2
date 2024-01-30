const era = require('#/era-electron');

const {
  check_lubrication,
  check_virgin_enabled,
  check_erect,
  get_penis_size,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { part_enum } = require('#/data/ero/part-const');
const {
  ero_hook_tags,
  ero_tagged_hooks,
  ero_actions,
} = require('#/data/event/ero-hooks');
const EroHookTag = require('#/data/event/ero-hook-tag');
const { get_breast_cup } = require('#/data/info-generator');

/**
 * @param {(number|function)[]} tags
 * @param {boolean[]} chara_tags_check
 * @param {boolean[]} common_tags_check
 * @param {number} chara_id
 * @param {number} other_id
 * @returns {boolean}
 */
function check_tags(
  tags,
  chara_tags_check,
  common_tags_check,
  chara_id,
  other_id,
) {
  const ret_list = tags.map((tag) => {
    let ret;
    if (typeof tag === 'number') {
      ret = chara_tags_check[tag] === false || common_tags_check[tag] === false;
    } else {
      ret = !tag(chara_id, other_id);
    }
    return ret;
  });
  return ret_list.filter((e) => e).length === 0;
}

/**
 * @param {number} attacker
 * @param {number} defender
 * @param {boolean[]} filters
 * @returns {number[]}
 */
function sys_filter_ero_act(attacker, defender, filters) {
  /** @type {Record<string,boolean[]>} */
  const tag_checks = {};
  [attacker, defender].forEach((chara_id) => {
    tag_checks[chara_id] = [];
    tag_checks[chara_id][ero_hook_tags.anal] =
      !filters[1] &&
      era.get(`tequip:${chara_id}:肛门`) === -1 &&
      (!attacker || check_lubrication(chara_id, part_enum.anal));
    tag_checks[chara_id][ero_hook_tags.awake] =
      sys_check_awake(chara_id) &&
      !era.get(`tcvar:${chara_id}:脱力`) &&
      !era.get(`tcvar:${chara_id}:失神`);
    tag_checks[chara_id][ero_hook_tags.body] = true;
    tag_checks[chara_id][ero_hook_tags.breast] =
      era.get(`cflag:${chara_id}:性别`) - 1 &&
      (!filters[4] ||
        (get_breast_cup(chara_id) >= 'C' &&
          check_lubrication(chara_id, part_enum.breast)));
    tag_checks[chara_id][ero_hook_tags.clitoris] =
      !filters[0] &&
      check_virgin_enabled(chara_id) &&
      !get_penis_size(chara_id) &&
      era.get(`tequip:${chara_id}:外阴`) === -1;
    tag_checks[chara_id][ero_hook_tags.foot] = true;
    tag_checks[chara_id][ero_hook_tags.hand] = true;
    tag_checks[chara_id][ero_hook_tags.m_abused] =
      !filters[2] && (!attacker || era.get(`talent:${chara_id}:喜欢责骂`) > 0);
    tag_checks[chara_id][ero_hook_tags.m_hit] =
      !filters[2] && (!attacker || era.get(`talent:${chara_id}:喜欢痛苦`) > 0);
    tag_checks[chara_id][ero_hook_tags.mouth] =
      era.get(`tequip:${chara_id}:口腔`) === -1;
    tag_checks[chara_id][ero_hook_tags.nipple] =
      era.get(`tequip:${chara_id}:胸部`) === -1;
    tag_checks[chara_id][ero_hook_tags.touched_nipple] =
      (era.get(`talent:${chara_id}:乳头类型`) !== 2 ||
        era.get(`tcvar:${chara_id}:乳突`) > 0) &&
      tag_checks[chara_id][ero_hook_tags.nipple];
    tag_checks[chara_id][ero_hook_tags.penis] =
      get_penis_size(chara_id) > 0 && era.get(`tequip:${chara_id}:阴茎`) === -1;
    tag_checks[chara_id][ero_hook_tags.insert] =
      tag_checks[chara_id][ero_hook_tags.penis] && check_erect(chara_id);
    tag_checks[chara_id][ero_hook_tags.pet] = !filters[3];
    tag_checks[chara_id][ero_hook_tags.race] =
      era.get(`cflag:${chara_id}:种族`) > 0;
    tag_checks[chara_id][ero_hook_tags.sadism] =
      !filters[2] &&
      (!attacker ||
        (era.get('tflag:强奸') === attacker &&
          get_sex_acceptable(chara_id) < 0) ||
        era.get(`talent:${chara_id}:抖S`) > 0 ||
        era.get(`talent:${chara_id}:小恶魔`) > 0 ||
        era.get(`mark:${chara_id}:反抗`) >= 2 ||
        era.get(`base:${chara_id}:压力`) >= 5000);
    tag_checks[chara_id][ero_hook_tags.sex_check] =
      !filters[0] &&
      (get_penis_size(chara_id) > 0 || check_virgin_enabled(chara_id));
    tag_checks[chara_id][ero_hook_tags.tongue] = true;
    tag_checks[chara_id][ero_hook_tags.virgin] =
      !filters[0] &&
      check_virgin_enabled(chara_id) &&
      era.get(`tequip:${chara_id}:阴道`) === -1 &&
      (!attacker || check_lubrication(chara_id, part_enum.virgin));
  });
  tag_checks[attacker][ero_hook_tags.height_check] =
    era.get(`cflag:${attacker}:身高`) > era.get(`cflag:${defender}:身高`);
  const supporter = era.get('tflag:当前助手');
  const supporter_tag_checks = {};
  supporter_tag_checks[ero_hook_tags.supporter_awake] =
    supporter > 0 &&
    sys_check_awake(supporter) &&
    !era.get(`tcvar:${supporter}:脱力`) &&
    !era.get(`tcvar:${supporter}:失神`);
  supporter_tag_checks[ero_hook_tags.supporter_breast] =
    supporter > 0 &&
    era.get(`cflag:${supporter}:性别`) - 1 &&
    (!filters[4] ||
      (get_breast_cup(supporter) >= 'C' &&
        check_lubrication(supporter, part_enum.breast)));
  supporter_tag_checks[ero_hook_tags.supporter_insert] =
    supporter > 0 && get_penis_size(supporter) > 0 && check_erect(supporter);
  supporter_tag_checks[ero_hook_tags.supporter_sex_check] =
    supporter > 0 &&
    !filters[0] &&
    (get_penis_size(supporter) > 0 || check_virgin_enabled(supporter));
  supporter_tag_checks[ero_hook_tags.supporter_virgin] =
    supporter > 0 &&
    !filters[0] &&
    check_virgin_enabled(supporter) &&
    (!attacker || check_lubrication(supporter, part_enum.virgin));

  const is_master = attacker === era.get('tflag:主导权');
  return ero_actions.filter((e) => {
    const tags = ero_tagged_hooks[e] || EroHookTag.default_tags;
    return (
      (tags.condition === EroHookTag.condition_type.no ||
        (is_master && tags.condition === EroHookTag.condition_type.active) ||
        (!is_master &&
          tags.condition === EroHookTag.condition_type.in_active)) &&
      check_tags(
        tags.attacker_tags,
        tag_checks[attacker],
        supporter_tag_checks,
        attacker,
        defender,
      ) &&
      check_tags(
        tags.defender_tags,
        tag_checks[defender],
        supporter_tag_checks,
        defender,
        attacker,
      )
    );
  });
}

module.exports = sys_filter_ero_act;
