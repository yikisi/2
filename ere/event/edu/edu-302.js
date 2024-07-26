const {
  add,
  get,
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

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const recruit_flags = require('#/data/event/recruit-flags');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

/** @type {Record<string,function(CharaTalk,CharaTalk):Promise>} */
const handlers = {};

/** @author 雞雞 */
handlers.annoyance1 = async (taste) => {
  new TasteLifeMarks().annoyance = -get_random_value(5, 12);
  await print_event_name(
    [taste.get_teen_sex_title(), '理事长的烦恼之一'],
    taste,
  );
  await printAndWait([
    '学园理事长 ',
    taste.get_colored_actual_name(),
    ' 正在苦恼着，准确来说是钱财上的问题：特雷森的预算又一次超支了——！！',
  ]);
  await printAndWait(
    '如今这位橙发的小矮子正在绿色秘书的训斥下瑟瑟发抖……但无法忽视的财政问题到底该怎么解决呢？',
  );
  printButton('「开源节流，带头降薪！」（马币-50，育成中马娘技能点数+10）', 1);
  printButton('「这方面不由我负责……」', 2);
  if ((await input()) === 1) {
    await printAndWait('似乎发生了好事！');
    await printAndWait('……但这个月要吃泡面度日了！');
    sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
      .filter((e) => get(`cflag:${e}:育成回合计时`) < 3 * 48)
      .forEach((e) => add(`exp:${e}:技能点数`, 10));
    println();
    sys_like_chara(302, 0, get_random_value(20, 40)) && (await waitAnyKey());
  } else {
    await printAndWait('似乎没什么特别的。');
  }
};

/** @author 雞雞 */
handlers.annoyance2 = async (taste) => {
  await print_event_name(
    [taste.get_teen_sex_title(), '理事长的烦恼之二'],
    taste,
  );
  await printAndWait([
    '学园理事长 ',
    taste.get_colored_actual_name(),
    ' 的猫咪失踪了！因为猫咪不见而陷入消沉的理事长，连带让特雷森的运作效率也大大降低！',
  ]);
  printButton('「总动员所有人力，务必找到小猫！」（精力-50，好感+25）', 1);
  printButton('「所以呢？」', 2);
  if ((await input()) === 1) {
    await printAndWait([
      '找到小猫后，',
      taste.get_colored_name(),
      ' 十分高兴，特雷森也重回正轨了！',
    ]);
    println();
    sys_change_attr_and_print(0, '精力', -50);
    sys_like_chara(302, 0, 25) && (await waitAnyKey());
  } else {
    await printAndWait('似乎没什么特别的……所以理事长平常都在干什么？');
  }
};

/**
 * 秋川弥生 - 育成
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
    get_chara_talk(302),
    get_chara_talk(0),
  );
};
