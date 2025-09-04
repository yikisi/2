const era = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { get_chara_color } = require('#/data/chara-colors');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (era.get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      if (era.get(`love:${this.id}`) >= 50) {
        return 51;
      }
      return 50 + era.get('flag:回合爱慕惩罚');
    }
    return super.get_love_limit();
  }

  get_talents() {
    const { buff } = new MayLifeMarks();
    return [
      {
        color: get_chara_color(this.id),
        content: '梦之追逐者',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `队伍成员海外远征的负面影响${buff > 0 ? '减轻' : '减半'}。`,
      },
    ];
  }
};
