const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

class MecNpc extends CustomizedMec {
  init_love() {
    if (get(`cflag:${this.id}:种族`) > 0) {
      set(
        `love:${this.id}`,
        Math.min(
          // FLAGNAME:105 = 马娘初始爱慕
          get('flag:105') + (sys_personal_achievement.get(this.id) > 0) * 20,
          30,
        ),
      );
    } else {
      set(`love:${this.id}`, (sys_personal_achievement.get(this.id) > 0) * 20);
    }
  }

  is_able_to_be_selected() {
    return (
      get(`cflag:${this.id}:位置`) > 0 ||
      get(`cflag:${this.id}:育成回合计时`) < 3 * 48
    );
  }

  set_my_sex() {
    if (get(`cflag:${this.id}:种族`) > 0) {
      return super.set_my_sex();
    }
    return 0;
  }
}

module.exports = MecNpc;
