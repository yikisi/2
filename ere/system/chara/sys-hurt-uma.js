const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {number} chara_id
 * @param {number} num
 * @param {boolean} [shown]
 */
function sys_hurt_uma(chara_id, num, shown) {
  if (era.get('flag:可能伤病') && num > 0) {
    const a = era.add(`status:${chara_id}:伤病`, num),
      tired = era.get(`status:${chara_id}:疲惫`);
    if (tired > 0) {
      era.add(`status:${chara_id}:伤病`, 2 * tired);
      era.set(`status:${chara_id}:疲惫`, 0);
    }

    if (shown !== false) {
      if (a > num) {
        era.print([
          get_chara_talk(chara_id).get_colored_name(),
          ' 的受伤程度加深了！',
        ]);
      } else if (tired > 0) {
        era.print([
          get_chara_talk(chara_id).get_colored_name(),
          ' 在疲惫之下受了更加严重的伤！',
        ]);
      } else {
        era.print([get_chara_talk(chara_id).get_colored_name(), ' 受伤了！']);
      }
    }
  }
}

module.exports = sys_hurt_uma;
