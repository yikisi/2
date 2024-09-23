/**
 * @file 秋川弥生 - 爱慕
 *
 * @author 无名黑奴（临时）
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const life_marks = new TasteLifeMarks(),
    me = get_chara_talk(0),
    taste = get_chara_talk(302);
  switch (event_object?.arg) {
    case 49:
      await print_event_name('发 情！', get_chara_talk(302));
      if (life_marks.who_am_i === 0) {
        await era.printAndWait([
          '一个偶然的机会，',
          me.get_colored_name(),
          ' 得知了 ',
          taste.get_colored_name(),
          ' 的真实身份——',
          taste.get_uma_sex_title(),
          ' ',
          { color: taste.color, content: '北方风味', fontWeight: 'bold' },
          '。',
        ]);
        taste.actual_name = era.set('callname:302:-1', '北方风味');
        await era.printAndWait([
          taste.get_colored_name(),
          ' 一脸挫败的表情，拜托 ',
          me.get_colored_name(),
          ' 帮',
          taste.sex,
          '保守秘密。',
        ]);
      }
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        taste.get_colored_name(),
        ' 的关系出现了突破性的进展……',
      ]);
      await era.printAndWait([
        taste.get_colored_name(),
        ' 「啪」地把折扇打开，遮住了流转的眼波……',
      ]);
      life_marks.who_am_i = 2;
      break;
    case 74:
      await print_event_name('倾 慕！', get_chara_talk(302));
      break;
    case 89:
      await print_event_name('爱 恋！', get_chara_talk(302));
      break;
    case 99:
      await print_event_name('相 依！', get_chara_talk(302));
  }
  if (event_object?.arg >= 74) {
    era.printButton('升级关系', 1);
    era.printButton('暂不升级', 2);
    if ((await era.input()) === 2) {
      era.set('cflag:302:爱慕暂拒', event_object.arg);
      await punish_rejecting_love(302);
      return;
    }
  }
  if (!era.get('flag:回合爱慕惩罚')) {
    await sys_love_uma_in_event(302);
  }
};
