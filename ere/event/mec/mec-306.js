const { get } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const RikoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-306');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      return 0;
    }
    return 76;
  }

  get_take_care_buff(chara_id) {
    let base = 50 + 30 * new RikoLifeMarks().buff;
    if (chara_id === 202 || chara_id === 203) {
      return base + 20;
    }
    return 50;
  }

  get_talents() {
    const buff = this.get_take_care_buff();
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'buff', buff),
        color: get_chara_color(this.id),
        fontWeight: buff > 50 ? 'bold' : undefined,
      },
    ];
  }
};
