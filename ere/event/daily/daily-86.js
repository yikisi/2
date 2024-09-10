const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/** @type {Record<string,function(HookArg,*):Promise<boolean|void>>} */
const handlers = {};

/** @author イーウィヤ */
handlers[event_hooks.select] = handlers[event_hooks.good_morning] = () => {
  const life_marks = new LifeEventMarks(86);
  if (sys_check_awake(86) && sys_check_awake(0) && life_marks.b_escape) {
    const ramonu = get_chara_talk(86);
    ramonu.say('……您很惊讶么？恐惧了吗？恐惧于我对您的『爱』了吗？');
    ramonu.say(
      '呵呵，是呢。我也坚信着您与我之间的爱一定不会因此而改变的，对吧。',
    );
    ramonu.say('……接下来，我还会听从您的一切指挥，和您的一切的『爱』的。');
    life_marks.b_escape = 0;
    return;
  }
  throw new Error();
};

/**
 * 目白高峰 日常
 */
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
