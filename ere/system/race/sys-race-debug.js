const { attr_enum } = require('#/data/train-const');

/**
 * @param {PseudoUma[]} list_chara
 * @param {RaceInfo} race_info
 */
module.exports = (list_chara, race_info) => {
  console.log(race_info.name_zh);
  for (const itemUma of list_chara) {
    //先使用单纯计算过Buff后的比赛中属性等权求和作为战斗力粗暴对比
    //各种属性Buff和Debuff的具体效果应该就做成Object放data/skill/race-passive-stat那边吧
    //待会去做个被动技能的Object示例

    itemUma.score = 0;
    Object.values(attr_enum).forEach((v) => {
      itemUma.score += itemUma.attrs[v];
    });
  }

  let result = [];
  list_chara.sort((a, b) => b.index_chara - a.index_chara);
  for (const itemUma of list_chara) {
    result.push(itemUma.index_chara);
  }

  return result;
};
