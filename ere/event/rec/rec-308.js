const { printAndWait } = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * 光辉致意 - 招募
 *
 * @author 黑奴零号（临时）
 */
module.exports = {
  async run() {
    const hello = get_chara_talk(308),
      me = get_chara_talk(0);
    await print_event_name('大舞台的光辉', hello);
    await printAndWait([
      hello.get_colored_name(),
      ' 非常感谢 ',
      me.get_colored_name(),
      ' 对大舞台运动的支持，最近也常在特雷森学园出现了。',
    ]);
    await printAndWait([
      '如果想更直接地支持',
      hello.sex,
      '，就去访客接待室和',
      hello.sex,
      '谈谈吧。',
    ]);
  },
};
