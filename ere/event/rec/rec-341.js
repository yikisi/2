const { set } = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 高多芬柏布 - 招募
 *
 * @author 黑奴队长（临时）
 */
module.exports = {
  async run() {
    await print_event_name('为你所有的「微笑」', get_chara_talk(341));
    set('flag:当前互动角色', 341);
    set('cflag:341:招募状态', recruit_flags.yes);
  },
};
