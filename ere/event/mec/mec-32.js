const { get, set } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get #uma() {
    return get('flag:角色性别') === 1
      ? i18n().name.uma_boy
      : i18n().name.uma_girl;
  }

  is_race_register_enabled() {
    return !new TachyonEduMarks().plan_b;
  }

  is_train_enabled() {
    const edu_marks = new TachyonEduMarks();
    return !edu_marks.train_stop && !edu_marks.glass_leg;
  }

  get_race_contestants(info) {
    switch (get('flag:当前赛事')) {
      case race_enum.sats_sho:
        return [new LegendUmaSelector(25, 1.05)];
      case race_enum.toky_yus:
        return [new LegendUmaSelector(94, 1.05)];
      case race_enum.kiku_sho:
        return [new LegendUmaSelector(25, 1.05)];
      case race_enum.arim_kin:
        if (get('cflag:32:育成回合计时') > 96) {
          return [new LegendUmaSelector(25, 1.05)];
        }
    }
    return super.get_race_contestants(info);
  }

  set_callname() {
    if (get('cflag:32:招募状态') !== recruit_flags.yes) {
      return super.set_callname();
    }
    if (!this.set_callname_from_src()) {
      if (get('flag:惩戒力度') === 3) {
        set('callname:32:0', ['trainer32', 'slave_p']);
      } else if (get('flag:惩戒力度') === 2) {
        set('callname:32:0', ['trainer32', 'slave_s']);
      } else if (get('mark:32:同心') === 3) {
        set('callname:32:0', ['trainer32', 'big_master']);
      } else {
        set('callname:32:0', 'trainer32');
      }
    }
  }

  get_status(show_train_buff) {
    const ret_list = [];
    if (show_train_buff) {
      const edu_marks = new TachyonEduMarks();
      const uma_sex = this.#uma;
      const color = get_chara_color(this.id);
      if (edu_marks.uma_limit) {
        ret_list.push({
          ...di18n.kojo.get_titled_content(this.id, 'uma_limit', uma_sex),
          color,
        });
      }
      if (edu_marks.limited) {
        ret_list.push({
          ...di18n.kojo.get_titled_content(this.id, 'limited_tachyon', uma_sex),
          color,
        });
      }
    }
    return ret_list;
  }

  get_train_buff() {
    return new TachyonEduMarks().limited * 50;
  }

  set_pseudo_uma(uma) {
    if (new TachyonEduMarks().uma_limit) {
      const buff_name = i18n().kojo[this.id].uma_limit(this.#uma);
      uma.attr_buffs.forEach((l, i) => {
        const val = Math.ceil(1200 - uma.attrs[i]);
        if (val > 0) {
          l.push([`+${val}`, buff_name]);
        }
      });
    }
  }
};
