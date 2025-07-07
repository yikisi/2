/**
 * @file 调教地文 - 道具系
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const EroItems = require('#/event/ero/common-lines/interface/ero-items');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');

class EroNormalItems extends EroItems {
  /**
   * @author 无名黑奴
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.user
   */
  async use_medicine(attacker, defender, hook, extra_flag) {
    let aim_chara = extra_flag.user === defender.id ? defender : attacker;
    switch (extra_flag.item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (era.get(`cflag:${aim_chara.id}:性别`) === 0) {
          await era.printAndWait([
            aim_chara.get_colored_name(),
            ' 长出了 ',
            { color: buff_colors[2], content: '凶恶的巨根' },
            '！',
          ]);
        } else {
          await era.printAndWait([
            aim_chara.get_colored_name(),
            ' 的肉棒更形健硕了……',
          ]);
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait([
          aim_chara.get_colored_name(),
          ' 的乳房开始流出',
          { color: buff_colors[2], content: '乳汁' },
          '……',
        ]);
    }
    if (
      !era.get(`tcvar:${aim_chara.id}:发情`) &&
      (extra_flag.item === medicine_enum.uma_z ||
        extra_flag.item === medicine_enum.fron_k ||
        extra_flag.item === medicine_enum.fron_p)
    ) {
      await era.printAndWait([
        aim_chara.get_colored_name(),
        ' 变得兴奋起来了……',
      ]);
    }
  }
}

module.exports = EroNormalItems;
