const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { distance_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return 0.1 * era.get('status:3:腿伤');
  }

  get_maxbase_buff() {
    return -200 * era.get('status:3:腿伤');
  }

  get_pressure_buff() {
    return 0.1 * era.get('status:3:腿伤');
  }

  get_race_cloth() {
    if (
      !era.get('status:3:腿伤') ||
      era.get('cflag:3:育成回合计时') !==
        race_infos[race_enum.arim_kin].date + 95 ||
      era.get('flag:当前赛事') !== race_enum.arim_kin
    ) {
      return super.get_race_cloth();
    }
    return ['帝王2'];
  }

  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(13, 1.1)];
      case race_enum.tenn_sho:
        if (era.get('cflag:3:育成回合计时') > 96) {
          return [64, 65].map((e) => new LegendUmaSelector(e, 1.05));
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:3:育成回合计时') > 96) {
          return [
            new LegendUmaSelector(23, 1.1),
            ...[35, 60, 64].map((e) => new LegendUmaSelector(e, 1.05)),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.arim_kin && era.get(`status:${this.id}:腿伤`)) {
      return [
        uma.get_colored_name(),
        { color: uma.color, content: '，奇迹的复活！' },
      ];
    } else if (
      era.get(`cflag:${this.id}:育成回合计时`) > 96 &&
      race_infos[race_id]?.distance === distance_enum.long
    ) {
      return [
        {
          color: uma.color,
          content: '超越极限，奔向世界的尽头——',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 再夺一胜！',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_status() {
    if (era.get('status:3:腿伤')) {
      return [
        {
          color: buff_colors[3],
          content: '腿伤！',
          fontWeight: 'bold',
          title:
            '严重腿伤，无法根治，即使是三女神；训练效果-20%，体力精力上限-200，消耗+10%，压力获取+10%，目标赛事一着以外-5声望，未入着+25%压力、-10声望',
        },
      ];
    }
    return [];
  }

  get_train_buff() {
    return -20 * era.get('status:3:腿伤');
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get('relation:3:0') > 375) {
        era.set('callname:3:0', '训～练～员～');
      } else {
        era.set('callname:3:0', '训练员');
      }
    }
  }
};
