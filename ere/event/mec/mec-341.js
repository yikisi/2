const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');

module.exports = class extends CustomizedMec {
  is_anger_for_unfaithful() {
    return false;
  }

  get_talents() {
    const title_check = new GodolphinLifeMarks().buff;
    return [
      {
        color: buff_colors[1],
        content: '[爱]',
        fontWeight: title_check ? 'bold' : '',
        title: `[爱]：队伍成员智力与技能点数训练效果+${title_check ? 100 : 50}%`,
      },
    ];
  }

  // eslint-disable-next-line no-unused-vars
  set_foreign_debuff(before_race, loc) {}
};
