const era = require('#/era-electron');

const { akuochi } = require('#/data/color-const');

module.exports = {
  /**
   * Utility function that creates a typing effect
   * @param {string} content Text to type; must be a string
   * @param {string} color Text color
   * @param {number} interval Typing interval; defaults to 125ms, with a minimum of 100ms and maximum of 1000ms
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
   * Utility function that displays corruption choices
   * @param {string} bt_yes Label for accepting corruption
   * @param {string} bt_no Label for resisting corruption
   */
  async degeneration_to_evil(bt_yes, bt_no) {
    const flag = era.get('flag:恶堕');
    era.printButton(bt_yes, 1, {
      buttonType: '',
      color: akuochi[1],
      disabled: flag === 1,
    });
    if (!flag) {
      era.print('(Select this to accept advances during related events.)', {
        color: akuochi[1],
      });
    }
    era.printButton(bt_no, 2, {
      buttonType: '',
      color: akuochi[0],
      disabled: flag === 2,
    });
    if (!flag) {
      era.print('(Select this to resist advances during related events.)', {
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
