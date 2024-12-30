/**
 * @file 目白高峰 - 日常
 *
 * @author イーウィヤ
 */
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  /** @author イーウィヤ */
  good_morning() {
    const life_marks = LifeEventMarks.get_marks(86);
    if (!sys_check_awake(86) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.good_morning();
    }
    super.select();
  }

  /** @author イーウィヤ */
  select() {
    const life_marks = LifeEventMarks.get_marks(86);
    if (!sys_check_awake(86) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const ramonu = get_chara_talk(86);
    ramonu.say('……您很惊讶么？恐惧了吗？恐惧于我对您的『爱』了吗？');
    ramonu.say(
      '呵呵，是呢。我也坚信着您与我之间的爱一定不会因此而改变的，对吧。',
    );
    ramonu.say('……接下来，我还会听从您的一切指挥，和您的一切的『爱』的。');
    life_marks.b_escape = 0;
  }
};
