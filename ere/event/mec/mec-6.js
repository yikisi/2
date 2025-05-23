const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    switch (era.get('flag:当前赛事')) {
      case race_enum.mile_cha:
        if (edu_weeks < 96) {
          return [new LegendUmaSelector(53, 1.1)];
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          return [2, 21, 45, 63].map((e) => new LegendUmaSelector(e, 1.1));
        } else {
          return [27, 71, 72].map((e) => new LegendUmaSelector(e, 1.2));
        }
    }
    return super.get_race_contestants(info);
  }

  get_race_finish_report(uma, race_id) {
    if (
      race_id === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:育成回合计时`) > 96
    ) {
      return [
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！',
        },
        uma.get_colored_name(),
        {
          color: uma.color,
          content: ' 一着！高举右手的胜者，正是超级赛马娘 ',
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
      const color = get_chara_color(this.id);
      const ret = [
        {
          color,
          content: '灰姑娘',
          title: '回合开始时压力自动下降到抑郁以下，干劲自动上升到较差以上',
        },
      ];
      if (era.get(`cflag:${this.id}:育成次数`) === 0) {
        ret.push({
          color,
          content: '迟到者',
          title:
            '育成从经典年开始，无法出赛经典三冠（皋月赏、日本德比、菊花赏）',
        });
      }
      const { train_buff } = new OguriEduMarks();
      if (train_buff > 0) {
        ret.push({
          color,
          content: `转学生 (${train_buff})`,
          title: `${train_buff}回合内训练效果+100%`,
        });
      }
      return ret;
    }
    return [];
  }

  get_train_buff() {
    if (new OguriEduMarks().train_buff > 0) {
      return 100;
    }
    return 0;
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:6:0', '训练员');
    }
  }
};
