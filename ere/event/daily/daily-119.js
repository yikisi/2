/**
 * @file 梦之旅 - 日常
 *
 * @author 幽白書
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/** @type {Record<string,function(HookArg,*):Promise<boolean|void>>} */
const handlers = {};

/** @author 幽白書 */
handlers[event_hooks.select] = () => {
  const life_marks = new LifeEventMarks(119);
  if (sys_check_awake(119) && sys_check_awake(0) && life_marks.b_escape) {
    const callname = sys_get_callname(119, 0),
      dj = get_chara_talk(119);
    dj.say([
      '嗯？',
      callname,
      '……难道您一点都不怕吗？比如，之前的事再度重演。',
    ]);
    dj.say('……呵呵，您，真是个温柔的人呢。');
    life_marks.b_escape = 0;
    return;
  }
  throw new Error();
};

/** @author 幽白書 */
handlers[event_hooks.good_morning] = () => {
  const life_marks = new LifeEventMarks(119);
  if (life_marks.b_escape) {
    const callname = sys_get_callname(119, 0),
      dj = get_chara_talk(119);
    dj.say(['怎么了，', callname, '？']);
    dj.say(
      '脸色，不是很好呢……难道说，太久没接触到外界，对环境反而感到害怕了吗？',
    );
    dj.say('不怕，不怕……只要依偎在我身旁……就没什么好怕的了……');
    life_marks.b_escape = 0;
    return;
  }
  throw new Error();
};

module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return (await handlers[stage_id.hook](stage_id, extra_flag)) !== undefined;
  },
};
