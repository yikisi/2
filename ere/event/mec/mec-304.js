const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends MecNpc {
  get_take_care_buff(chara_id) {
    if (chara_id === 201) {
      return 70;
    }
    return 50;
  }

  get_talents() {
    return [
      {
        color: get_chara_color(this.id),
        content: get(`staticcstr:${this.id}:称号`),
        title: '训练员头衔对训练成功率与效果加成上升一级，照看时训练效果+50%',
      },
    ];
  }
};
