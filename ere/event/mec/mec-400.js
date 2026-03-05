const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const { location_enum } = require('#/data/locations');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { mess_enum, weather_enum } = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} wins
 * @returns {number}
 */
function get_attr_buff(wins) {
  return Math.min(wins, 25);
}

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    if (era.get('flag:当前赛事') === race_enum.tenn_spr) {
      info.weather = weather_enum.rain;
      info.mess = mess_enum.bad;
      return [new LegendUmaSelector(25, 1.1)];
    }
    return super.get_race_contestants(info);
  }

  get_relation_buff() {
    return Math.min(new SSEduMarks().wins, 30);
  }

  get_status(show_train_buff) {
    const ret_list = [];
    if (show_train_buff) {
      const { wins } = new SSEduMarks();
      if (wins) {
        ret_list.push({
          ...di18n.kojo.get_titled_content(
            this.id,
            'win',
            wins,
            get_attr_buff(wins),
            this.get_relation_buff(),
          ),
          color: get_chara_color(this.id),
        });
      }
    }
    return ret_list;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:400:0', 'trainer400');
    }
  }

  set_foreign_debuff(before_race, loc) {
    if (loc !== location_enum.new_york) {
      return super.set_foreign_debuff(before_race, loc);
    }
    // STATUSNAME:8 = 水土不服
    // TALENTNAME:17 = 身体素质
    era.set('status:400:8', 2 - era.get('talent:400:17'));
  }

  set_pseudo_uma(uma) {
    const { wins } = new SSEduMarks();
    if (wins > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push([`+${get_attr_buff(wins)}%`, i18n().kojo[this.id].win(wins)]),
      );
    }
  }
};
