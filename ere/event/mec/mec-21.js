const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.takz_kin:
        if (era.get('cflag:21:育成回合计时') > 96) {
          return [
            new LegendUmaFilter(
              '秋津帝王',
              1.1,
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
      return [
        {
          color: uma.color,
          content: '名副其实的白色闪电照亮全场，谁还敢瞧不起我！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: '！',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:21:0', '训练员');
    }
  }
};
