const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = LifeEventMarks.get_marks(this.id);
    return [
      {
        color: get_chara_color(this.id),
        content: '三冠传奇',
        fontWeight: buff > 0 ? 'bold' : void 0,
        title:
          '干劲极佳的队伍成员训练成功率和效果' +
          (buff > 0 ? '上升' : '稍微上升。'),
      },
    ];
  }
};
