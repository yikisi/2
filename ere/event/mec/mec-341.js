const { get, set } = require('#/era-electron');

const MecGod = require('#/event/mec/mec-god');

const { get_chara_color } = require('#/data/chara-colors');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');

module.exports = class extends MecGod {
  get_talents() {
    let { buff } = new GodolphinLifeMarks();
    buff += 1;
    return [
      {
        color: get_chara_color(this.id),
        content: '爱',
        fontWeight: buff > 1 ? 'bold' : undefined,
        title: `队伍成员智力训练效果+${50 * buff}%，从训练中获得的技能点数+${25 * buff}%。`,
      },
    ];
  }

  set_callname() {
    set(`callname:${this.id}:0`, get('callname:0:-1') + '君');
  }
};
