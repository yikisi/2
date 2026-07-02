const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const TaishinEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-50');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  is_race_disabled(race) {
    return new TaishinEduMarks().choice > 0 && race === race_enum.kiku_sho;
  }

  is_race_register_enabled() {
    return !new TaishinEduMarks().frog;
  }

  get_maxbase_buff() {
    if (new TaishinEduMarks().debuff > 0) {
      return -200;
    }
    return super.get_maxbase_buff();
  }

  get_motivation_limit() {
    if (new TaishinEduMarks().debuff > 0) {
      return -2;
    }
    return super.get_motivation_limit();
  }

  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.sats_sho:
      case race_enum.toky_yus:
      case race_enum.kiku_sho:
        // return [35, 23].map((e) => new LegendUmaSelector(e, 2));
        return [new LegendUmaSelector(23, 0.5), new LegendUmaSelector(35, 0.5)];
      case race_enum.tenn_spr:
      case race_enum.arim_kin:
        if (era.get('cflag:50:育成回合计时') > 96) {
          return [new LegendUmaSelector(23, 1.1)];
        }
    }
    return super.get_race_contestants(info);
  }

  get_status(show_train_buff) {
    const buffer = [];
    if (show_train_buff) {
      const edu_marks = new TaishinEduMarks();
      if (edu_marks.debuff > 0) {
        buffer.push({
          ...di18n.kojo.get_titled_content(this.id, 'debuff'),
          color: buff_colors[3],
        });
      }
      const color = get_chara_color(this.id);
      ['frog', 'new_goal', 'together'].forEach((s) => {
        if (edu_marks[s] > 0) {
          buffer.push({
            ...di18n.kojo.get_titled_content(this.id, s),
            color,
          });
        }
      });
    }
    if (
      era.get(`cflag:${this.id}:育成回合计时`) <= 47 + 44 &&
      era.get(`love:${this.id}`) === 49 &&
      !era.get(`cflag:${this.id}:爱慕暂拒`)
    ) {
      buffer.push({
        ...di18n.kojo.get_titled_content(this.id, 'resist'),
        color: buff_colors[2],
      });
    }
    return buffer;
  }

  get_talents() {
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'swim_up'),
        color: get_chara_color(this.id),
        fontWeight: 'bold',
      },
    ];
  }

  get_train_buff() {
    const edu_marks = new TaishinEduMarks();
    if (edu_marks.frog > 0) {
      return -100;
    }
    let ret = 0;
    if (edu_marks.new_goal > 0) {
      ret += 10;
    }
    if (edu_marks.together > 0) {
      ret += 5;
    }
    return ret;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, 'trainer');
    }
  }

  set_pseudo_uma(uma) {
    uma.attr_buffs.forEach((l) =>
      l.push(['+0.5%', i18n().kojo[this.id].swim_up]),
    );
  }
};
