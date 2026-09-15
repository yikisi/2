const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const { el_success_color } = require('#/data/color-const');
const SweepEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-44');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, 'trainer44');
    }
  }

  get_race_finish_report(uma, race_id) {
    if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
      if (race_id === race_enum.takz_kin) {
        return i18n().kojo[this.id].report_takz_kin_s(uma.get_colored_name());
      } else if (race_id === race_enum.eliz_cup) {
        return i18n().kojo[this.id].report_eliz_cup_s(uma.get_colored_name());
      }
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status(show_train_buff) {
    if (show_train_buff && new SweepEduMarks().agreement > 0) {
      const color = get_chara_color(this.id);
      return [
        {
          ...di18n.kojo.get_titled_content(this.id, 'agreement'),
          color,
        },
      ];
    }
    return super.get_status(show_train_buff);
  }

  get_talents() {
    if (era.get(`talent:${this.id}:绿帽癖`) > 0) {
      return [
        {
          ...di18n.kojo.get_titled_content(this.id, 'cuckold'),
          color: el_success_color,
        },
      ];
    }
    return super.get_talents();
  }
};
