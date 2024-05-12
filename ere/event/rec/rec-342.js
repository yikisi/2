const { set } = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 拜耶尔土耳其 - 招募
 *
 * @author 黑奴队长（临时）
 */
module.exports = {
  async run() {
    await print_event_name('近可亵玩的「身姿」', get_chara_talk(342));
    set('flag:当前互动角色', 342);
    set('cflag:342:招募状态', recruit_flags.yes);
  },
};
