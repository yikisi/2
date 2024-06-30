const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const { location_enum } = require('#/data/locations');
const { mess_enum, weather_enum } = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (era.get('flag:当前赛事') === race_enum.tenn_spr) {
      info.weather = weather_enum.rain;
      info.mess = mess_enum.bad;
      return [{ id: 25, buff: 1.2 }];
    }
    return super.get_race_contestants(info);
  }

  get_relation_buff() {
    return Math.min(new SSEduMarks().wins, 20);
  }

  get_status() {
    const { wins } = new SSEduMarks(),
      ret_list = [];
    if (wins) {
      ret_list.push({
        color: get_chara_color(this.id),
        content: `胜利的承诺(${wins})`,
        title: `[胜利的承诺(${wins})]：参赛时属性+${this.get_relation_buff()}%，好感获取+${3 * wins}%，效果随连胜次数增强`,
      });
    }
    return ret_list;
  }

  set_callname() {
    era.set('callname:400:0', '托雷纳君');
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
      uma.attr_buffs.forEach((l) => l.push(`+${3 * wins}%[胜利的承诺]`));
    }
  }
};
