/**
 * @file 胜利奖券 - 日常
 *
 * @author 幽白書
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  /** @author 幽白書 */
  good_morning() {
    const life_marks = LifeEventMarks.get_marks(35);
    if (!life_marks.b_escape) {
      return super.good_morning();
    }
    const callname = sys_get_callname(35, 0),
      ticket = get_chara_talk(35);
    ticket.say(['诶？', callname, '，为什么看到我脸上的表情却那么惊讶呢？']);
    ticket.say('难道说……不想再见到我吗？想要从我身边永远逃开吗？');
    ticket.say([
      '欸……欸嘿嘿，嗯，我就知道不是那样，',
      callname,
      ' 会一直和我在一起的，对吧？',
    ]);
    life_marks.b_escape = 0;
  }

  /** @author 幽白書 */
  select() {
    const life_marks = LifeEventMarks.get_marks(35);
    if (!sys_check_awake(35) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const callname = sys_get_callname(35, 0),
      ticket = get_chara_talk(35);
    ticket.say(['呜哇啊啊啊啊啊啊啊，', callname, ' 不理我好难过……']);
    ticket.say(['差一点，我就要把 ', callname, ' 再带回去我们的爱巢了……']);
    ticket.say([
      '还好，',
      callname,
      ' 还是过来找我了！因为我们是真心相爱的，对吧！',
    ]);
    life_marks.b_escape = 0;
  }
};
