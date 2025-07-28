const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  init_love() {
    if (sys_personal_achievement.get(this.id) > 0) {
      set(`love:${this.id}`, 40);
    }
  }

  is_anger_for_unfaithful() {
    return false;
  }

  get_ero_check(action) {
    if (new ByerleyLifeMarks().love === 2) {
      return Math.min(40, 90 - get(`love:${this.id}`));
    }
    return super.get_ero_check(action);
  }

  get_love_limit() {
    if (!new ByerleyLifeMarks().love) {
      return 50;
    } else if (get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      return 55;
    } else {
      return 0;
    }
  }

  get_talents() {
    const { buff } = new ByerleyLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '信',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `队伍成员耐力与根性训练效果+${50 * (buff + 1)}%。`,
      },
    ];
  }

  set_callname() {
    set(`callname:${this.id}:0`, '训练员');
  }

  set_foreign_debuff() {}

  set_my_sex() {
    return set(`cflag:${this.id}:性别`, get('flag:角色性别') === 99 ? 10 : 0);
  }
};
