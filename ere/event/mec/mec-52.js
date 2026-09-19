const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { distance_enum, ground_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:育成回合计时`) > 96
    ) {
      return i18n().kojo[this.id].report_arim_kin(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status(show_train_buff) {
    const ret_list = [];
    if (show_train_buff) {
      const { gad, dad } = new UraraEduMarks();
      if (gad + dad > 0) {
        ret_list.push({
          ...di18n.kojo.get_titled_content(
            this.id,
            'echo',
            gad + dad,
            gad,
            dad,
          ),
          color: get_chara_color(this.id),
        });
      }
    }
    return ret_list;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:52:0', 'trainer');
    }
  }

  set_my_name() {}

  set_pseudo_uma(uma) {
    const { dad, fans, gad, sbuff } = new UraraEduMarks(),
      attr_buff = Math.min(Math.floor(fans / 500), 200 * (1 + sbuff));
    if (attr_buff) {
      uma.attr_buffs.forEach((l) =>
        l.push([`+${attr_buff}`, i18n().kojo[this.id].fans_buff]),
      );
    }
    const info = race_infos[era.get('flag:当前赛事')];
    if (gad && info.ground === ground_enum.grass) {
      uma.ground_buffs.push([`+${gad}`, i18n().kojo[this.id].echo(gad)]);
    }
    if (
      dad &&
      (info.distance === distance_enum.long ||
        info.distance === distance_enum.medium)
    ) {
      uma.dis_buffs.push([`+${dad}`, i18n().kojo[this.id].echo(dad)]);
    }
  }
};
