/**
 * @file 目白善信 - 日常
 *
 * @author KUN
 */
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends CustomizedDaily {
  good_morning() {
    const life_marks = new PamaEduMarks();
    if (!sys_check_awake(64) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.good_morning();
    }
    super.select();
  }

  select() {
    const life_marks = new PamaEduMarks();
    if (!sys_check_awake(64) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const pama = get_chara_talk(64),
      callname = sys_get_colored_callname(64, 0);
    if (life_marks.half_life) {
      pama.say(['我在这里很奇怪吗，', callname, '？']);
      pama.say(['除了 ', callname, ' 的身边……我已经不知道能去哪里了……']);
      pama.say(['只要能在 ', callname, ' 身边……']);
    } else {
      pama.say(['呀，', callname, '。']);
      pama.say('……抱歉呢，做了那样的事情，就算不被原谅也是正常的吧……');
      pama.say('但我还是……想要在你的身边。');
    }
    life_marks.b_escape = 0;
  }
};
