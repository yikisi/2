const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    // CFLAGNAME:48 = 育成回合计时
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    // FLAGNAME:7 = 当前赛事
    switch (era.get('flag:7')) {
      case race_enum.mile_cha:
        if (edu_weeks < 96) {
          return [new LegendUmaSelector(53, 1.05)];
        }
        break;
      case race_enum.kiku_sho:
        return [340, 341, 342].map((e) => new LegendUmaSelector(e, 1.1));
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          return [2, 21, 45, 63].map((e) => new LegendUmaSelector(e, 1.05));
        } else {
          return [27, 71, 72].map((e) => new LegendUmaSelector(e, 1.1));
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.arim_kin && era.get(`cflag:${this.id}:48`) > 96) {
      return i18n().kojo[this.id].report_arim_kin(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status(show_train_buff) {
    if (show_train_buff) {
      const color = get_chara_color(this.id);
      const ret = [
        {
          ...di18n.kojo.get_titled_content(this.id, 'cinderella'),
          color,
        },
      ];
      // CFLAGNAME:49 = 育成次数
      if (era.get(`cflag:${this.id}:49`) === 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'latecomer'),
          color,
        });
      }
      const { train_buff } = new OguriEduMarks();
      if (train_buff > 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'transfer', train_buff),
          color,
        });
      }
      return ret;
    }
    return [];
  }

  get_train_buff() {
    return new OguriEduMarks().train_buff > 0 ? 100 : 0;
  }

  is_race_disabled(race) {
    // CFLAGNAME:49 = 育成次数
    if (era.get(`cflag:${this.id}:49`) === 0) {
      switch (race) {
        case race_enum.sats_sho:
        case race_enum.toky_yus:
        case race_enum.kiku_sho:
          return true;
      }
    }
    return false;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:6:0', 'trainer');
    }
  }
};
