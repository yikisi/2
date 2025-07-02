const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

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
    return -200 * (new TamaEduMarks().lightning === 1);
  }

  get_pressure_buff() {
    return 0.1 * (new TamaEduMarks().lightning === 1);
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
    const ret = [];
    if (show_train_buff) {
      const { lightning, heal } = new TamaEduMarks();
      switch (lightning) {
        default:
          ret.push({
            color: get_chara_color(this.id),
            content: '闪光',
            title: '白色闪电，开放参与所有比赛',
          });
          break;
        case 1:
          ret.push({
            color: get_chara_color(this.id),
            content: '雷殛',
            fontWeight: 'bold',
            title:
              '电流衰弱；训练效果-20%，体力精力上限-200，消耗+10%，压力获取+10%',
          });
          break;
        case 2:
          ret.push({
            color: get_chara_color(this.id),
            content: '雷云',
            fontWeight: 'bold',
            title: '山雨欲来，目前只能参与OP级比赛',
          });
          break;
        case 3:
          ret.push({
            color: get_chara_color(this.id),
            content: '先导',
            fontWeight: 'bold',
            title: '雷光初成，目前只能参与OP-G3级比赛',
          });
      }
      if (heal === 1) {
        ret.push({
          color: get_chara_color(this.id),
          content: '斯巴达式',
          title: '训练效果+20%，体力精力消耗+5%',
        });
      } else if (heal === -1) {
        ret.push({
          color: get_chara_color(this.id),
          content: '马娘优先',
          title: '每回合自动提高干劲，体力精力消耗-10%',
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
          era.get(`cflag:${this.id}:育成次数`) === 0 &&
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
      era.set('callname:21:0', '训练员');
    }
  }
};
