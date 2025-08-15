const { set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const { get_chara_color } = require('#/data/chara-colors');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');

module.exports = class extends MecGod {
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
};
