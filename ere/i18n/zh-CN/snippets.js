const era = require('#/era-electron');

const { akuochi } = require('#/data/color-const');

module.exports = {
  /**
   * @param {string} bt_yes
   * @param {string} bt_no
   */
  async degeneration_to_evil(bt_yes, bt_no) {
    const flag = era.get('flag:恶堕');
    era.printButton(bt_yes, 1, {
      color: akuochi[1],
      disabled: flag === 1,
    });
    if (!flag) {
      era.print('（选择此项将会在相关事件中表现为接受态度）', {
        color: akuochi[1],
      });
    }
    era.printButton(bt_no, 2, {
      color: akuochi[0],
      disabled: flag === 2,
    });
    if (!flag) {
      era.print('（选择此项将会在相关事件中表现为抗拒态度）', {
        color: akuochi[0],
      });
    }
    const ret = await era.input();
    if (ret === 1) {
      era.set('flag:恶堕', 2);
    } else {
      era.set('flag:恶堕', 1);
    }
    return ret;
  },
};
