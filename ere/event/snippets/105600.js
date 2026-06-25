const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = {
  /** @param {number} luck */
  set_luck_result(luck) {
    switch (luck) {
      case 2:
        era.set('status:56:大吉', 1);
        era.set('status:56:中吉', 0);
        era.set('status:56:小吉', 0);
        era.set('status:56:凶', 0);

        if (era.get('status:56:PTSD') !== 1) {
          era.set('cflag:56:干劲', 2);
        }
        break;
      case 1:
        era.set('status:56:中吉', 1);
        era.set('status:56:大吉', 0);
        era.set('status:56:小吉', 0);
        era.set('status:56:凶', 0);
        if (era.get('status:56:PTSD') !== 1) {
          era.set('cflag:56:干劲', 1);
        }
        break;
      case 0:
        era.set('status:56:小吉', 1);
        era.set('status:56:大吉', 0);
        era.set('status:56:中吉', 0);
        era.set('status:56:凶', 0);
        if (era.get('status:56:PTSD') !== 1) {
          era.set('cflag:56:干劲', 0);
        }
        break;
      case 3:
        era.set('status:56:凶', 1);
        era.set('status:56:大吉', 0);
        era.set('status:56:小吉', 0);
        era.set('status:56:中吉', 0);
        era.set('cflag:56:干劲', -1 - (Math.random() < 0.5));
    }
  },
  /** @param {string} content */
  async typing(content) {
    let print_flag = true;
    for (let i = 1; i <= content.length; ++i) {
      (print_flag ? era.print : era.replaceText)(
        ['<', content.slice(0, i), '>'],
        {
          align: 'center',
          color: get_chara_color(56),
          fontSize: '2.25rem',
          fontWeight: 'bold',
        },
      );
      await era.delay(150);
      print_flag = false;
    }
  },
};
