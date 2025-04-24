const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: '梦之开拓者',
        title: '参加大舞台赛事时声望奖励+100%。',
      },
    ];
  }
};
