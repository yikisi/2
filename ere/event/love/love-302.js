const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * 秋川弥生 - 爱慕
 *
 * @author 黑奴队长
 */
module.exports = async () => {
  switch (era.get('love:302')) {
    case 49:
      await print_event_name('发 情！', get_chara_talk(302));
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
  await sys_love_uma_in_event(302);
};
