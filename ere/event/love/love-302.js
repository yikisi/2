/**
 * @file 秋川弥生 - 爱慕
 * @author 无名黑奴（临时）
 */
const era = require('#/era-electron');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');

module.exports = class extends CustomizedLove {
  async 49(taste, me) {
    const life_marks = new TasteLifeMarks();
    await print_event_name('发 情！', taste);
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
      era.set('callname:302:-1', '北方风味');
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
      '「啪」地把折扇打开，遮住了流转的眼波……',
    ]);
    life_marks.who_am_i = 2;
    await this.common_result();
  }

  async 74(taste) {
    await print_event_name('倾 慕！', taste);
    await this.common_result();
  }

  async 89(taste) {
    await print_event_name('爱 恋！', taste);
    await this.common_result();
  }

  async 99(taste) {
    await print_event_name('相 依！', taste);
    await this.common_result();
  }
};
