const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_action_debuff() {
    return (
      0.1 *
      (new TokinoLifeMarks().buff + 1) *
      (get('cflag:301:招募状态') === recruit_flags.yes)
    );
  }

  get_talents() {
    const buff = this.get_action_debuff();
    return [
      {
        color: get_chara_color(this.id),
        content: '私人助理',
        fontWeight: buff > 0.1 ? 'bold' : undefined,
        title: `自身体力与精力消耗+${buff * 100}%，使 ${get('callname:0:-1')} 的体力与精力消耗-${buff * 100}%。`,
      },
    ];
  }
};
