const { get, set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  init_love() {
    if (sys_personal_achievement.get(341)) {
      set('love:341', 50);
    }
  }

  is_anger_for_unfaithful() {
    return false;
  }

  get_ero_check(action) {
    if (new GodolphinLifeMarks().love === 2) {
      return Math.min(40, 90 - get('love:341'));
    }
    return super.get_ero_check(action);
  }

  get_love_limit() {
    return get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes ? 55 : 0;
  }

  get_talents() {
    const title_check = new GodolphinLifeMarks().buff;
    return [
      {
        color: buff_colors[1],
        content: '[爱]',
        fontWeight: title_check ? 'bold' : '',
        title: `队伍成员智力与技能点数训练效果+${title_check ? 100 : 50}%`,
      },
    ];
  }

  set_callname() {
    set('callname:341:0', get('callname:0:-1') + '君');
  }

  set_foreign_debuff() {}

  set_my_sex() {
    return get('flag:角色性别') === 99 ? 10 : set('cflag:341:性别', 0);
  }
};
