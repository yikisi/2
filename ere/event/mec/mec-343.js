const era = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (era.get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      if (
        era.get(`love:${this.id}`) >= 50 ||
        era.get('flag:回合爱慕惩罚') > 0
      ) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    const { buff } = new MayLifeMarks();
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'dream_chaser', buff > 0),
        color: get_chara_color(this.id),
        fontWeight: buff > 0 ? 'bold' : void 0,
      },
    ];
  }
};
