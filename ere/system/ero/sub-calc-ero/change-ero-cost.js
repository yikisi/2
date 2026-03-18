const era = require('#/era-electron');

const {
  check_lubrication,
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { add_juel } = require('#/system/ero/sys-calc-juel');
const { set_stain } = require('#/system/ero/sys-calc-stain');

const {
  expansion_coefficient,
  lubrication_coefficient,
  wound_percentage,
} = require('#/data/ero/battle-const');
const { base_emotion_juel } = require('#/data/ero/juel-const');
const { part2jid, part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} penis_owner
 * @param {number} hole_owner
 * @param {number} body_part
 * @param {{attacker:number,defender:number}} damage
 */
function change_ero_cost(penis_owner, hole_owner, body_part, damage) {
  // 一方为牛子，另一方为浦西和菊花，扩张和润滑影响基础攻击力
  // 一方为牛子，另一方为欧派，润滑影响基础攻击力
  const lubrication =
      check_lubrication(hole_owner, body_part) +
      check_lubrication(penis_owner, part_enum.penis),
    lc = lubrication_coefficient[body_part];
  let coefficient = 1 - lc + (lc * lubrication) / 2;
  if (body_part === part_enum.virgin || body_part === part_enum.anal) {
    let expansion = get_expansion(
      get_penis_size(penis_owner),
      hole_owner,
      body_part,
    );
    const pname = i18n('zh-CN').tb_param[part2jid[body_part]];
    if (
      era.get(`ex:${hole_owner}:${pname}撕裂`) === 0 &&
      (expansion > 1 || (!lubrication && Math.random() < wound_percentage))
    ) {
      // 扩张后仍然过大，撕裂
      set_stain(hole_owner, body_part, stain_enum.wound);
      const pain = base_emotion_juel * Math.max(expansion * 2 - 1, 1);
      // JEWELNAME:11 = 痛苦
      add_juel(hole_owner, 11, pain * (0.3 * expansion + 0.4));
      add_juel(penis_owner, 11, pain * (0.2 * expansion + 0.1));
      era.set(`nowex:${hole_owner}:${pname}撕裂`, 1);
    } else if (era.get(`ex:${hole_owner}:${pname}撕裂`) > 0) {
      const pain = base_emotion_juel * Math.max(expansion * 2, 1);
      add_juel(hole_owner, 11, pain * (0.2 * expansion + 0.7));
      add_juel(penis_owner, 11, pain * (0.1 * expansion + 0.1));
    }
    if (expansion > 1) {
      expansion = 1 - expansion;
    }
    coefficient *= 1 + expansion_coefficient[body_part] * expansion;
  }
  if (!lubrication) {
    // JEWELNAME:11 = 痛苦
    add_juel(penis_owner, 11, base_emotion_juel);
    add_juel(hole_owner, 11, base_emotion_juel);
  }
  return {
    attacker: damage.attacker * coefficient,
    defender: damage.defender * coefficient,
  };
}

module.exports = change_ero_cost;
