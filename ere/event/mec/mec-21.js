const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return 0.1 * (new TamaEduMarks().status === 1);
  }

  get_maxbase_buff() {
    return -200 * (new TamaEduMarks().status === 1);
  }

  get_pressure_buff() {
    return 0.1 * (new TamaEduMarks().status === 1);
  }

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

  get_status(show_train_buff) {
    if (show_train_buff) {
      switch (new TamaEduMarks().status) {
        default:
          return [
            {
              color: get_chara_color(this.id),
              content: '闪光',
              title: '白色闪电，开放参与所有比赛',
            },
          ];
        case 1:
          return [
            {
              color: get_chara_color(this.id),
              content: '雷殛',
              fontWeight: 'bold',
              title:
                '电流衰弱；训练效果-20%，体力精力上限-200，消耗+10%，压力获取+10%',
            },
          ];
        case 2:
          return [
            {
              color: get_chara_color(this.id),
              content: '雷云',
              fontWeight: 'bold',
              title: '山雨欲来，目前只能参与OP级比赛',
            },
          ];
        case 3:
          return [
            {
              color: get_chara_color(this.id),
              content: '先导',
              fontWeight: 'bold',
              title: '雷光初成，目前只能参与OP-G3级比赛',
            },
          ];
      }
    }
    return [];
  }

  get_train_buff() {
    return -20 * (new TamaEduMarks().status === 1);
  }

  is_race_register_enabled() {
    return new TamaEduMarks().status < 2;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:21:0', '训练员');
    }
  }
};
