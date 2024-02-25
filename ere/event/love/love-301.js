const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * 骏川缰绳 - 爱慕
 *
 * @author 黑奴队长
 */
module.exports = async () => {
  switch (era.get('love:301')) {
    case 49:
      await print_event_name('爱欲', get_chara_talk(301));
      break;
    case 74:
      await print_event_name('热恋', get_chara_talk(301));
      break;
    case 89:
      await print_event_name('佳偶', get_chara_talk(301));
      break;
    case 99:
      await print_event_name('依存', get_chara_talk(301));
  }
  await sys_love_uma_in_event(301);
};
