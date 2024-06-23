const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedMec {
  get_relation_buff() {
    return 3 * new SSEduMarks().wins;
  }

  get_status() {
    const { wins } = new SSEduMarks(),
      ret_list = [];
    if (wins) {
      ret_list.push({
        color: get_chara_color(400),
        content: `胜利的承诺(${wins})`,
        title: `[胜利的承诺${wins}] 参赛时属性+${3 * wins}%，好感获取+${3 * wins}%`,
      });
    }
    return ret_list;
  }

  set_callname() {
    era.set('callname:400:0', '拖雷纳君');
  }

  set_foreign_debuff(before_race, loc) {
    if (loc !== location_enum.new_york) {
      return super.set_foreign_debuff(before_race, loc);
    }
    era.set('status:400:水土不服', 2 - era.get('talent:400:身体素质'));
  }

  set_pseudo_uma(uma) {
    const { wins } = new SSEduMarks();
    if (wins > 0) {
      uma.attr_buffs.forEach((l) => l.push(`+${3 * wins}[胜利的承诺]`));
    }
  }
};
