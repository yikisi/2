/**
 * @file 春乌拉拉 - 爱慕
 *
 * @author 99
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const print_event_name = require('#/event/snippets/print-event-name');

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,number,string,string,EventObject):Promise<*>>} */
const handlers = {};

handlers.le49 = require('#/event/love/love-events-52/before-fuck-buddy');
handlers[50] = require('#/event/love/love-events-52/fuck-buddy');
handlers.le74 = require('#/event/love/love-events-52/before-girl-friend');
handlers[74] = require('#/event/love/love-events-52/girl-friend');
handlers[75] = require('#/event/love/love-events-52/after-girl-friend');
handlers.le89 = require('#/event/love/love-events-52/before-wife');
handlers[89] = require('#/event/love/love-events-52/wife');
handlers[90] = require('#/event/love/love-events-52/after-wife');
handlers[99] = require('#/event/love/love-events-52/half-life');

/**
 * @param {CharaTalk} me
 * @param {CharaTalk} urara
 * @param {CharaTalk} in_urara
 * @param _
 * @param {string} callname
 * @param {string} chara_self_name
 */
handlers[101] = async (me, urara, in_urara, _, callname, chara_self_name) => {
  await print_event_name('独占力', urara);
  new UraraLifeMarks().want_you = 1;
  await in_urara.say_as_unknown_and_wait(
    '小乌拉拉也是会嫉妒的，就是那么回事。',
  );
  era.drawLine();
  await era.printAndWait([
    '当 ',
    me.get_colored_name(),
    ' 来到训练场入口时，意外地被突然冲过来的 ',
    urara.get_colored_name(),
    ' 撞了个满怀。',
  ]);
  await urara.say_and_wait([
    '今天也来陪我一起吧！只要 ',
    callname,
    ' 想的话我们做什么都可以哦？',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 从正面用双臂紧紧地捉住了 ',
    me.get_colored_name(),
    '，使 ',
    me.get_colored_name(),
    ' 完全失去了移开视线溜走的机会。',
  ]);
  await era.printAndWait([
    '而现在还没搞清楚状况的 ',
    me.get_colored_name(),
    '，也只能这样略带紧张地迎向 ',
    urara.get_colored_name(),
    ' 的笑脸。',
  ]);
  await urara.say_and_wait([
    '所以说，今天再多陪 ',
    chara_self_name,
    ' 一会吧！',
  ]);
  await era.printAndWait([
    '并没有给 ',
    me.get_colored_name(),
    ' 回话的机会，',
    urara.get_colored_name(),
    ' 带着缺了些真实感的笑容单方面结束了对话。',
  ]);
  await era.printAndWait([
    '随后，',
    urara.get_colored_name(),
    ' 用出乎意料的力道半拖着 ',
    me.get_colored_name(),
    ' 离开了训练场。',
  ]);
  await era.printAndWait([
    '是太寂寞了吗？不过 ',
    urara.get_colored_name(),
    ' 出现在这里……应该只是偶然吧？',
  ]);
  await era.printAndWait([
    '至少比起无法想象的被 ',
    sys_get_colored_callname(0, 52),
    ' 提前蹲守，',
    me.get_colored_name(),
    ' 更愿如此相信。',
  ]);
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  const callname = sys_get_callname(52, 0),
    chara_self_name = sys_get_callname(52, 52),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    me = get_chara_talk(0),
    relation = new UraraEduMarks().loop === 2 ? 150 : era.get('relation:52:0'),
    urara = get_chara_talk(52);
  let temp;
  if (
    (temp = handlers[event_object.arg] || handlers[`le${era.get('love:52')}`])
  ) {
    return await temp(
      me,
      urara,
      in_urara,
      relation,
      callname,
      chara_self_name,
      event_object,
    );
  }
  throw new Error();
};
