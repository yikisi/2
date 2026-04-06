const { part_enum } = require('#/data/ero/part-const');

const item_enum = {
  // 口球
  gag: 71,
  // 夹子（乳樱）
  clamps: 74,
  // 电击器（乳樱）
  electric_stunner: 78,
  // 吸奶器
  milk_pump: 73,
  // 跳蛋（乳核樱菊）
  love_eggs: 75,
  // 伪器（樱菊）
  dildo: 77,
  // 肛塞
  butt_plug: 79,
  // 拉珠
  anal_beads: 80,
  // 眼罩
  blindfold: 70,
  // 项圈
  collar: 72,
  // 全身镜
  mirror: 81,
  // 飞机杯
  artificial_virgin: 76,
};

const medicine_enum = {
  // 长效避孕药
  anti_p_l: 35,
  // 短效避孕药
  anti_p_s: 34,
  // 母乳药剂
  drug_m: 37,
  // 促排卵药
  drug_p: 36,
  // 弗隆K
  fron_k: 39,
  // 弗隆P
  fron_p: 40,
  // 人奶
  milk_h: 46,
  // 马奶
  milk_u: 45,
  // 高潮阻断剂
  stop_o: 43,
  // 超马跳Z
  super_z: 33,
  // 马跳S
  uma_s: 32,
  // 马跳Z
  uma_z: 31,
};

module.exports = {
  /**
   * @param {number} item
   * @param {number} part
   * @returns {string}
   */
  get_item_action(item, part) {
    switch (item) {
      case item_enum.anal_beads:
      case item_enum.butt_plug:
      case item_enum.dildo:
      case item_enum.gag:
        return 'r_v_push';
      case item_enum.clamps:
      case item_enum.milk_pump:
      case item_enum.artificial_virgin:
        return 'r_v_equip';
      case item_enum.love_eggs:
        switch (part) {
          case part_enum.breast:
          case part_enum.clitoris:
            return 'r_v_equip';
          case part_enum.anal:
          case part_enum.virgin:
            return 'r_v_push';
        }
    }
    return 'r_v_equip';
  },
  item_enum,
  medicine_enum,
  tequip_parts: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    item_enum.collar.toString(),
    item_enum.blindfold.toString(),
  ],
};
