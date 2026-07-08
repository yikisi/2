const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { distance_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return era.get('status:3:100') > 0 ? 0.1 : 0;
  }

  get_maxbase_buff() {
    return era.get('status:3:100') > 0 ? 200 : 0;
  }

  get_pressure_buff() {
    return era.get('status:3:100') > 0 ? 0.1 : 0;
  }

  get_race_cloth() {
    if (
      // STATUSNAME:100 = 腿伤
      !era.get('status:3:100') ||
      // CFLAGNAME:48 = 育成回合计时
      era.get('cflag:3:48') !== race_infos[race_enum.arim_kin].date + 95 ||
      // FLAGNAME:7 = 当前赛事
      era.get('flag:7') !== race_enum.arim_kin
    ) {
      return super.get_race_cloth();
    }
    return ['帝王2'];
  }

  get_race_contestants(info) {
    switch (era.get('flag:7')) {
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(13, 1.1)];
      case race_enum.tenn_sho:
        if (era.get('cflag:3:48') > 96) {
          return [64, 65].map((e) => new LegendUmaSelector(e, 1.05));
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:3:48') > 96) {
          return [
            new LegendUmaSelector(23, 1.1),
            ...[35, 60, 64].map((e) => new LegendUmaSelector(e, 1.05)),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`status:${this.id}:100`) > 0
    ) {
      return i18n().kojo[this.id].report_arim_kin(uma.get_colored_name());
    } else if (
      era.get('cflag:3:48') > 96 &&
      race_infos[race_id]?.distance === distance_enum.long
    ) {
      return i18n().kojo[this.id].report_long_dis(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status() {
    if (era.get('status:3:100') > 0) {
      return [
        {
          ...di18n.kojo.get_titled_content(this.id, 'hurt'),
          color: buff_colors[3],
          fontWeight: 'bold',
        },
      ];
    }
    return [];
  }

  get_train_buff() {
    return era.get('status:3:100') > 0 ? -20 : 0;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get('relation:3:0') > 375) {
        era.set('callname:3:0', 'trainer3');
      } else {
        era.set('callname:3:0', 'trainer');
      }
    }
  }
};
