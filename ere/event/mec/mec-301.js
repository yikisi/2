const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const get_display_name = require('#/utils/calc-display-name');

const { get_chara_color } = require('#/data/chara-colors');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_action_debuff() {
    return (
      0.1 *
      (new TokinoLifeMarks().buff + 1) *
      (get('cflag:301:招募状态') === recruit_flags.yes)
    );
  }

  get_love_limit() {
    if (get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      if (get(`love:${this.id}`) >= 50 || get('flag:回合爱慕惩罚') > 0) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    const buff = this.get_action_debuff();
    return [
      {
        ...di18n.kojo.get_titled_content(
          this.id,
          'assist',
          buff * 100,
          get_display_name(get('callname:0:-1')),
        ),
        color: get_chara_color(this.id),
        fontWeight: buff > 0.1 ? 'bold' : void 0,
      },
    ];
  }
};
