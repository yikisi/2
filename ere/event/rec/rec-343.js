/**
 * @file 佐岳五月 - 招募
 *
 * @author 无名黑奴（临时）
 */
const { printAndWait } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const may = get_chara_talk(343),
      me = get_chara_talk(0);
    await print_event_name('凯旋门之梦', may);
    await printAndWait([
      me.get_colored_name(),
      ' 在海外赛事上的成绩使 ',
      may.get_colored_name(),
      ' 倍感激励。',
    ]);
    await printAndWait([
      '如果想更直接地支持',
      may.sex,
      '，就去访客接待室和',
      may.sex,
      '谈谈吧。',
    ]);
  }
};
