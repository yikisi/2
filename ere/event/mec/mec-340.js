const { set } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');

module.exports = class extends CustomizedMec {
  get_talents() {
    const title_check = new DarleyLifeMarks().buff;
    return [
      {
        color: buff_colors[1],
        content: '[望]',
        fontWeight: title_check ? 'bold' : '',
        title: `[望]：队伍成员速度与力量训练效果+${title_check ? 100 : 50}%`,
      },
    ];
  }

  set_callname() {
    set('callname:340:0', '羔羊君');
  }

  // eslint-disable-next-line no-unused-vars
  set_foreign_debuff(before_race, loc) {}
};
