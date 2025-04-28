const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const HelloLifeMarks = require('#/data/event/life-event-marks/life-event-marks-308');

module.exports = class extends MecNpc {
  get_talents() {
    const { buff } = new HelloLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '梦之开拓者',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title:
          buff > 0
            ? '队伍成员参加大舞台赛事时声望奖励+100%，自身及后裔参赛时+200%。'
            : '自身及后裔参加大舞台赛事时声望奖励+100%。',
      },
    ];
  }
};
