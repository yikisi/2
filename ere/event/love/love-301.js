/**
 * @file 骏川缰绳 - 爱慕
 * @author 黑奴队长（临时）
 */
const era = require('#/era-electron');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

module.exports = class extends CustomizedLove {
  async 49(minoru, me) {
    const life_marks = new TokinoLifeMarks();
    await print_event_name('爱欲', minoru);
    if (life_marks.who_am_i === 0) {
      await era.printAndWait([
        '某天 ',
        minoru.get_colored_name(),
        ' 向 ',
        me.get_colored_name(),
        ' 坦白了自己的真实身份。',
      ]);
      era.set('callname:301:-1', '900102');
      await era.printAndWait([
        minoru.uma_sex_title,
        ' ',
        minoru.get_colored_actual_name(),
        '，这才是',
        minoru.sex,
        '真正的名字。',
      ]);
    }
    await era.printAndWait([
      me.get_colored_name(),
      ' 与 ',
      minoru.get_colored_name(),
      ' 的关系出现了突破性的进展……',
    ]);
    await era.printAndWait([
      '在 ',
      minoru.get_colored_name(),
      ' 完美的职业笑容之下，有什么东西改变了……',
    ]);
    life_marks.who_am_i = 2;
    await this.common_result();
  }

  async 74(minoru) {
    await print_event_name('热恋', minoru);
    await this.common_result();
  }

  async 89(minoru) {
    await print_event_name('佳偶', minoru);
    await this.common_result();
  }

  async 99(minoru) {
    await print_event_name('依存', minoru);
    await this.common_result();
  }
};
