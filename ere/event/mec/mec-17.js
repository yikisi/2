const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  init_love() {
    // FLAGNAME:105 = 马娘初始爱慕
    era.set('love:17', 40 + era.get('flag:105'));
  }

  get_race_contestants(info) {
    // FLAGNAME:7 = 当前赛事
    // CFLAGNAME:48 = 育成回合计时
    switch (era.get('flag:7')) {
      case race_enum.hoch_sho:
      case race_enum.sats_sho:
        return [new LegendUmaSelector(65, 1.05)];
      case race_enum.toky_yus:
        return [
          new LegendUmaSelector(57, 1.05),
          new LegendUmaSelector(104, 1.05),
        ];
      case race_enum.arim_kin:
        if (era.get(`cflag:${this.id}:48`) < 96) {
          return [
            new LegendUmaSelector(57, 1.05),
            new LegendUmaSelector(104, 1.05),
          ];
        }
        return [
          new LegendUmaFilter(
            i18n().name.c01701,
            1.05,
            (e) =>
              e.adapt_ground[0] >= 6 &&
              e.adapt_distance[3] >= 6 &&
              e.adapt_style[2] >= 6,
          ).set_image('麦昆_半身'),
        ];
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(57, 1.05)];
      case race_enum.takz_kin:
        if (era.get('cflag:17:48') >= 96) {
          return [new LegendUmaSelector(70, 1.05)];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:17:48') >= 96) {
          return [
            new LegendUmaFilter(
              i18n().name.c01702,
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 5 &&
                e.adapt_style[3] >= 6,
            ).set_image('老爹_半身'),
            new LegendUmaSelector(78, 1.05),
          ];
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:17:48') >= 96) {
          return [
            new LegendUmaFilter(
              i18n().name.c01702,
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 5 &&
                e.adapt_style[3] >= 6,
            ).set_image('老爹_半身'),
            new LegendUmaSelector(6, 1.05),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_love_buff() {
    return 20 * era.get('status:17:111');
  }

  get_love_limit() {
    if (era.get('status:17:113') > 0) {
      return 40;
    }
    return super.get_love_limit();
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.kiku_sho) {
      return i18n().kojo[this.id].report_kiku_sho(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_relation_buff() {
    // STATUSNAME:113 = 心术
    return -20 * era.get('status:17:113');
  }

  get_status() {
    const ret_list = [];
    // STATUSNAME:110 - 115 = 自毁 - 神经衰弱
    if (era.get('status:17:110') > 0) {
      ret_list.push({
        ...di18n.kojo.get_titled_content(this.id, 'self_destruct'),
        color: color_17[0],
      });
    }
    if (era.get('status:17:111') > 0) {
      ret_list.push({
        ...di18n.kojo.get_titled_content(this.id, 'crush'),
        color: color_17[0],
      });
    }
    if (era.get('status:17:112') > 0) {
      ret_list.push({
        ...di18n.kojo.get_titled_content(this.id, 'emperor'),
        color: color_17[1],
      });
    }
    if (era.get('status:17:113') > 0) {
      ret_list.push({
        ...di18n.kojo.get_titled_content(this.id, 'intention'),
        color: color_17[1],
      });
    }
    const debuff = era.get('status:17:114');
    if (debuff > 0) {
      ret_list.push({
        ...di18n.kojo.get_titled_content(
          this.id,
          'moral_damage',
          debuff,
          debuff * 5,
          debuff * 3,
        ),
        color: buff_colors[0],
      });
    }
    if (era.get('status:17:115') > 0) {
      ret_list.push({
        ...di18n.kojo.get_titled_content(this.id, 'fallen'),
        color: buff_colors[3],
        fontWeight: 'bold',
      });
    }
    return ret_list;
  }

  get_success_rate_buff() {
    // STATUSNAME:112 = 皇帝
    // STATUSNAME:110 = 自毁
    return 5 * (era.get('status:17:112') - era.get('status:17:110'));
  }

  get_train_buff() {
    // STATUSNAME:114 = 精神损伤
    let train_buff = era.get('status:17:114');
    if (train_buff > 0) {
      if (new LunaEduMarks().emperor > 0) {
        train_buff *= 3;
      } else {
        train_buff *= -5;
      }
    }
    train_buff += 4 * era.get('status:17:112') - 8 * era.get('status:17:110');
    return train_buff;
  }

  set_pseudo_uma(uma) {
    // STATUSNAME:112 = 皇帝
    if (era.get('status:17:112') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['+2%', i18n().kojo[this.id].emperor]),
      );
    }
    // STATUSNAME:110 = 自毁
    if (era.get('status:17:110') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['-5%', i18n().kojo[this.id].self_destruct]),
      );
    }
    if (!new LunaEduMarks().emperor && era.get('status:17:115') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['-8%', i18n().kojo[this.id].r_fallen]),
      );
    }
  }
};
