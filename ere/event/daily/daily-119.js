/**
 * @file 梦之旅 - 日常
 * @author 幽白書
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/daily/daily-119.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const r = {};
    r['你'] = get_chara_talk(0).name;
    r['称呼'] = sys_get_callname(this.id, 0);
    r['代表色'] = get_chara_color(this.id);
    return r;
  }

  select() {
    const life_marks = LifeEventMarks.get_marks(119);
    if (!sys_check_awake(119) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    const callname = sys_get_callname(119, 0);
    const dj = get_chara_talk(119);
    dj.say([
      '嗯？',
      callname,
      '……难道您一点都不怕吗？比如，之前的事再度重演。',
    ]);
    dj.say('……呵呵，您，真是个温柔的人呢。');
    life_marks.b_escape = 0;
  }

  good_morning() {
    const life_marks = LifeEventMarks.get_marks(119);
    const callname = sys_get_callname(119, 0),
      dj = get_chara_talk(119);
    if (life_marks.b_escape) {
      dj.say(['怎么了，', callname, '？']);
      dj.say(
        '脸色，不是很好呢……难道说，太久没接触到外界，对环境反而感到害怕了吗？',
      );
      dj.say('不怕，不怕……只要依偎在我身旁……就没什么好怕的了……');
      life_marks.b_escape = 0;
    } else {
      kojo['good_morning'](this.#dict);
    }
  }

  async end_talk() {
    await kojo['end_talk'](this.#dict);
  }
};
