const {
  input,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

/** @type {Record<string,function(CharaTalk,CharaTalk):Promise>} */
const handlers = {};

/** @author 雞雞 */
handlers.shadow = async (tokino, me) => {
  await print_event_name('绿色的幻影', tokino);
  const life_marks = new TokinoLifeMarks(),
    taiki = get_chara_talk(10);
  if (life_marks.who_am_i >= 1) {
    await printAndWait([
      me.get_colored_name(),
      ' 远远地看到了两抹绿色的身影在视野里不断变大，原来是 ',
      taiki.get_colored_name(),
      ' 因为不明的缘故被 ',
      tokino.get_colored_name(),
      ' 追赶着……真是宝刀未老啊！',
    ]);
  } else {
    await printAndWait([
      me.get_colored_name(),
      ' 远远地看到了两抹绿色的身影在视野里不断变大，原来是 ',
      taiki.get_colored_name(),
      ' 因为不明的缘故被 ',
      tokino.get_colored_name(),
      ' 追赶着……说起来，为什么人类能追上',
      taiki.get_uma_sex_title(),
      '的速度啊？',
    ]);
  }
  printButton('「慢下来！不要受伤了！」', 1);
  await input();
  await printAndWait([
    '走在前头的 ',
    taiki.get_colored_name(),
    ' 慢慢降下速度，一身绿色的秘书连忙向 ',
    me.get_colored_name(),
    ' 言谢。又做了一件好事！',
  ]);
  println();
  let wait_flag = sys_like_chara(10, 0, get_random_value(5, 15));
  wait_flag = sys_like_chara(301, 0, get_random_value(5, 15)) || wait_flag;
  wait_flag && (await waitAnyKey());
  life_marks.shadow = get_random_value(36, 60);
};

/**
 * 骏川缰绳 - 育成
 *
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (!handlers[event_object?.arg]) {
    throw new Error();
  }
  return await handlers[event_object?.arg](
    get_chara_talk(301),
    get_chara_talk(0),
  );
};
