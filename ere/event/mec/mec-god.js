const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

class MecGod extends CustomizedMec {
  init_love() {
    if (sys_personal_achievement.get(this.id) > 0) {
      set(`love:${this.id}`, 40);
    }
  }

  is_anger_for_unfaithful() {
    return false;
  }

  get_ero_check(action) {
    if (LifeEventMarks.get_marks(this.id).get('love') === 2) {
      return Math.min(40, 90 - get(`love:${this.id}`));
    }
    return super.get_ero_check(action);
  }

  get_love_limit() {
    if (!LifeEventMarks.get_marks(this.id).get('love')) {
      return 50 + get('flag:回合爱慕惩罚');
    } else if (get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      return 55;
    }
    return 0;
  }

  set_foreign_debuff() {}

  set_my_sex() {
    return set(`cflag:${this.id}:性别`, get('flag:角色性别') === 99 ? 10 : 0);
  }
}

module.exports = MecGod;
