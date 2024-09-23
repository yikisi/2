/**
 * @file 爱慕织姬 - 育成
 *
 * @author 雞雞
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const VegaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-33');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_random_value } = require('#/utils/value-utils');

/** @type {Record<string,function(CharaTalk,CharaTalk):Promise>} */
const handlers = {};

/** @author 雞雞 */
handlers.meteor = async (vega, me) => {
  await print_event_name('观测彗星', vega);
  await printAndWait([
    '一天晚上，',
    me.get_colored_name(),
    ' 在枯树洞旁看到了抬头仰望星空的 ',
    vega.get_colored_name(),
    '。',
  ]);
  await printAndWait('顺着视线看去，用余光捕捉到了一颗流星堪堪掠过。');
  printButton('「这一定是什么预兆！」（育成中马娘干劲+1 or -1）', 1);
  printButton('「此事平平无奇。」（稳定度+1）', 2);
  if ((await input()) === 1) {
    const edu_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter((e) => get(`cflag:${e}:育成回合计时`) < 3 * 48);
    let wait_flag;
    if (Math.random() < 0.5) {
      await printAndWait('似乎发生了好事！');
      println();
      wait_flag = edu_list.reduce(
        (p, c) => sys_change_motivation(c, 1) || p,
        false,
      );
    } else {
      await printAndWait('坏事……');
      println();
      wait_flag = edu_list.reduce(
        (p, c) => sys_change_motivation(c, -1) || p,
        false,
      );
    }
    wait_flag && (await waitAnyKey());
  } else {
    await printAndWait('似乎发生了平淡无奇的事！');
  }
  new VegaEduMarks().meteor = get_random_value(24, 48);
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (!handlers[event_object?.arg]) {
    throw new Error();
  }
  return await handlers[event_object?.arg](
    get_chara_talk(33),
    get_chara_talk(0),
  );
};
