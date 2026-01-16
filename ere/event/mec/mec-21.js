const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    const edu_marks = new TamaEduMarks();
    return (
      0.1 * (edu_marks.lightning === 1) +
      0.05 * (edu_marks.heal === 1) -
      0.1 * (edu_marks.heal === -1)
    );
  }

  get_maxbase_buff() {
    if (new TamaEduMarks().lightning === 1) {
      return -200;
    }
    return 0;
  }

  get_pressure_buff() {
    if (new TamaEduMarks().lightning === 1) {
      return 0.1;
    }
    return 0;
  }

  get_race_contestants(info) {
    // FLAGNAME:7 = 当前赛事
    switch (era.get('flag:7')) {
      case race_enum.takz_kin:
        // CFLAGNAME:48 = 育成回合计时
        if (era.get('cflag:21:48') > 96) {
          return [
            new LegendUmaFilter(
              i18n().name.c02101,
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 6 &&
                e.adapt_style[1] >= 6,
            ).set_image('秋津帝王'),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.tenn_spr) {
      return i18n().kojo[this.id].report_tenn_spr(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      const { lightning, heal } = new TamaEduMarks();
      switch (lightning) {
        default:
          ret.push({
            ...di18n.kojo.get_titled_content(this.id, 'flash'),
            color: get_chara_color(this.id),
          });
          break;
        case 1:
          ret.push({
            ...di18n.kojo.get_titled_content(this.id, 'lightning'),
            color: get_chara_color(this.id),
            fontWeight: 'bold',
          });
          break;
        case 2:
          ret.push({
            ...di18n.kojo.get_titled_content(this.id, 'thundercloud'),
            color: get_chara_color(this.id),
            fontWeight: 'bold',
          });
          break;
        case 3:
          ret.push({
            ...di18n.kojo.get_titled_content(this.id, 'pilot'),
            color: get_chara_color(this.id),
            fontWeight: 'bold',
          });
      }
      if (heal === 1) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'spartan'),
          color: get_chara_color(this.id),
        });
      } else if (heal === -1) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'uma_first'),
          color: get_chara_color(this.id),
        });
      }
    }
    return ret;
  }

  get_train_buff() {
    const edu_marks = new TamaEduMarks();
    return -20 * (edu_marks.lightning === 1) + 20 * (edu_marks.heal === 1);
  }

  is_race_disabled(race) {
    switch (new TamaEduMarks().lightning) {
      case 1:
        return (
          // CFLAGNAME:49 = 育成次数
          era.get(`cflag:${this.id}:49`) === 0 &&
          race_infos[race].race_class < class_enum.OP
        );
      case 2:
        return race_infos[race].race_class < class_enum.OP;
      case 3:
        return race_infos[race].race_class < class_enum.G3;
    }
    return false;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:21:0', 'trainer');
    }
  }
};
