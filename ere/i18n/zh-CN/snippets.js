const era = require('#/era-electron');

const { akuochi } = require('#/data/color-const');

module.exports = {
  /**
   * 用于实现打字效果的工具函数
   * @param {string} content 打字的内容，必须是字符串
   * @param {string} color 说话颜色
   * @param {number} interval 打字间隔，默认125ms，最小100ms，最大1000ms
   */
  async typing(content, color, interval = 125) {
    if (interval < 100) {
      interval = 100;
    } else if (interval > 1000) {
      interval = 1000;
    }
    let print_flag = true;
    for (let i = 1; i <= content.length; ++i) {
      (print_flag ? era.print : era.replaceText)(
        ['<', content.slice(0, i), '>'],
        {
          align: 'center',
          color,
          fontSize: '2.25rem',
          fontWeight: 'bold',
        },
      );
      await era.delay(interval);
      print_flag = false;
    }
  },
  /**
   * 用于输出恶堕选项的工具函数，注意如果有变色的话在最后要再执行一次 era.setColor 清除颜色
   * @param {string} bt_yes 选择恶堕的选项名
   * @param {string} bt_no 选择抗拒的选项名
   * @param {boolean} change_color 是否变更颜色，默认 true，延迟变更传入 false 然后自行处理
   */
  async degeneration_to_evil(bt_yes, bt_no, change_color = true) {
    const flag = era.get('flag:恶堕');
    era.printButton(bt_yes, 1, {
      buttonType: '',
      color: akuochi[1],
      disabled: flag === 1,
    });
    if (!flag) {
      era.print('（选择此项将会在相关事件中表现为接受态度）', {
        color: akuochi[1],
      });
    }
    era.printButton(bt_no, 2, {
      buttonType: '',
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
      change_color && era.setColor(akuochi[1]);
    } else {
      era.set('flag:恶堕', 1);
      change_color && era.setColor(akuochi[0]);
    }
    return ret;
  },
};
