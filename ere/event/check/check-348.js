const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const HaiseikoEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-348');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos, race_rewards } = require('#/data/race/race-const');

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      extra_flag.rank === 1
    ) {
      new HaiseikoEduMarks().fame += race_rewards[class_enum.G1].r01.fame;
    }
  }

  check_and_get_titles(aim_check) {
    const titles = [];
    if (new HaiseikoEduMarks().fame >= 500) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
      LifeEventMarks.get_marks(this.id).buff = 1;
    }
    return titles;
  }

  check_next_week() {
    if (era.get(`cflag:${this.id}:随机招募`) <= -3) {
      era.set(`cflag:${this.id}:招募状态`, -1);
      era.set(`cflag:${this.id}:随机招募`, 0);
      const chara = get_chara_talk(this.id);
      era.print([
        '据说 ',
        {
          color: get_chara_color(this.id),
          content: '一名传奇' + chara.get_uma_sex_title(),
        },
        ' 对 ',
        get_chara_talk(0).get_colored_name(),
        ' 的事迹很感兴趣，也许可以在招待室遇到……',
      ]);
    }
  }

  get_edu_aims() {
    return [
      {
        check: 1,
        color: undefined,
        content: [
          '从 G1 赛事获胜中争得声望：',
          get_abbr_number(new HaiseikoEduMarks().fame),
        ],
      },
      ...super.get_edu_aims(),
    ];
  }
};
