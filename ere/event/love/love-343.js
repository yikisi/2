/**
 * @file 佐岳五月 - 爱慕
 *
 * @author 无名黑奴（临时）
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (event_object?.arg !== 49) {
    throw new Error();
  }
  const may = get_chara_talk(343),
    me = get_chara_talk(0);
  await print_event_name('凯旋门之梦', may);
  await era.printAndWait([
    '这个周末，',
    may.get_colored_name(),
    ' 约 ',
    me.get_colored_name(),
    ' 外出。',
  ]);
  await era.printAndWait([
    '虽然理由是讨论下一次海外远征的事宜，但是在餐厅的包间中，',
    may.sex,
    '和 ',
    me.get_colored_name(),
    ' 只是相对而坐，一时无言。',
  ]);
  await era.printAndWait([
    '半晌，',
    may.sex,
    '才开口感谢 ',
    me.get_colored_name(),
    ' 为海外远征做出的努力。',
  ]);
  const life_marks = new MayLifeMarks();
  switch (life_marks.who_am_i) {
    case 1:
      await era.printAndWait([
        '虽然已经摘得了凯旋门的桂冠，但还有更多梦想等 ',
        me.get_couple_title(),
        ' 实现。',
      ]);
      break;
    case 0:
      await era.printAndWait([
        '虽然还没摘得凯旋门的桂冠，但这梦想在 ',
        me.get_colored_name(),
        ' 的推动下一定有成真之时。',
      ]);
  }
  await era.printAndWait([
    '不论如何，',
    me.get_colored_name(),
    ' 都是',
    may.sex,
    '最重要的追梦伙伴。',
  ]);
  if (life_marks.who_am_i !== 2) {
    may.actual_name = era.set('callname:343:-1', '狄杜斯');
    await era.printAndWait([
      '深深吸了口气，',
      may.sex,
      '像是做出了某种决定，缓缓摘下了头上的帽子，露出了一对马耳。',
    ]);
    await era.printAndWait([
      may.sex,
      '说自己的真名是 ',
      may.get_colored_actual_name(),
      '，并为隐藏身份至今向 ',
      me.get_colored_name(),
      ' 道歉，希望以后 ',
      me.get_couple_title(),
      ' 能更加真诚地对待彼此。',
    ]);
  }
  await era.printAndWait([
    '末了，',
    may.sex,
    '向 ',
    me.get_colored_name(),
    ' 举杯致意。',
  ]);
  await era.printAndWait(['那被咖啡的热气掩藏的双眼中，隐隐闪过一丝情意。']);
  if (!era.get('flag:回合爱慕惩罚')) {
    await sys_love_uma_in_event(343);
  }
  life_marks.who_am_i = 3;
};
