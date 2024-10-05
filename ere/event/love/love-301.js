/**
 * @file 骏川缰绳 - 爱慕
 *
 * @author 无名黑奴（临时）
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const life_marks = new TokinoLifeMarks(),
    me = get_chara_talk(0),
    tokino = get_chara_talk(301);
  switch (event_object?.arg) {
    case 49:
      await print_event_name('爱欲', tokino);
      if (life_marks.who_am_i === 0) {
        await era.printAndWait([
          '某天 ',
          tokino.get_colored_name(),
          ' 向 ',
          me.get_colored_name(),
          ' 坦白了自己的真实身份。',
        ]);
        tokino.actual_name = era.set('callname:301:-1', '丰收时刻');
        await era.printAndWait([
          tokino.get_uma_sex_title(),
          ' ',
          tokino.get_colored_actual_name(),
          '，这才是',
          tokino.sex,
          '真正的名字。',
        ]);
      }
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        tokino.get_colored_name(),
        ' 的关系出现了突破性的进展……',
      ]);
      await era.printAndWait([
        '在 ',
        tokino.get_colored_name(),
        ' 完美的职业笑容之下，有什么东西改变了……',
      ]);
      life_marks.who_am_i = 2;
      break;
    case 74:
      await print_event_name('热恋', tokino);
      break;
    case 89:
      await print_event_name('佳偶', tokino);
      break;
    case 99:
      await print_event_name('依存', tokino);
  }
  if (event_object?.arg >= 74) {
    era.printButton('升级关系', 1);
    era.printButton('暂不升级', 2);
    if ((await era.input()) === 2) {
      era.set('cflag:301:爱慕暂拒', event_object.arg);
      await punish_rejecting_love(301);
      return;
    }
  }
  if (!era.get('flag:回合爱慕惩罚')) {
    await sys_love_uma_in_event(301);
  }
};
