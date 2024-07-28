const { printAndWait, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');

/** @type {Record<string,function(CharaTalk):Promise>} */
const handlers = {};

/** @author 雞雞 */
handlers.all_round = async (meek) => {
  await print_event_name('什么都会一点的米可同学', meek);
  await printAndWait('突然从哪里吹过来一张很有年代感的书页！？');
  await printAndWait('……伸手抓住了。');
  await printAndWait(
    '为什么关于短距离英里中距离长距离的内容会同时出现在一页书上啊喂——',
  );
  await meek.say_and_wait('啊，这个能请还给我吗……');
  await printAndWait([
    '正震惊的时候，被 ',
    meek.get_colored_name(),
    ' 这么搭话了。',
  ]);
  await printAndWait('……嘶有种偷窥了他人宝物的心虚感乖乖地递了回去。');
  println();
  await printAndWait('……啊，难道说那一页是那个桐生院家的训练秘笈！？');
  await printAndWait('隔了很久之后才突然想起来，狠狠地捶了下手心。');
  println();
  let wait_flag = get_attr_and_print_in_event(
    0,
    [0, 0, 0, 0, 3],
    get_random_value(0, 10),
    undefined,
    true,
  );
  wait_flag = sys_like_chara(201, 0, get_random_value(5, 15)) || wait_flag;
  wait_flag && (await waitAnyKey());
  new MeekEduMarks().all_round = get_random_value(36, 60);
};

/**
 * 快乐米可 - 育成
 *
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (!handlers[event_object?.arg]) {
    throw new Error();
  }
  return await handlers[event_object?.arg](get_chara_talk(201));
};
