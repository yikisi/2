const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');

module.exports = class extends MecNpc {
  get_talents() {
    let { buff } = new EtsukoLifeMarks();
    buff += 1;
    return [
      {
        color: get_chara_color(this.id),
        content: '彻底取材',
        fontWeight: buff > 1 ? 'bold' : undefined,
        title: `声望获取+${10 * buff}%，声望下降-${10 * buff}%。`,
      },
    ];
  }
};
