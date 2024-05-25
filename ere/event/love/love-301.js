const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * 骏川缰绳 - 爱慕
 *
 * @author 黑奴队长
 *
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  switch (event_object?.arg) {
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
  if (event_object?.arg >= 74) {
    era.printButton('升级关系', 1);
    era.printButton('暂不升级', 2);
    if ((await era.input()) === 2) {
      era.set('cflag:301:爱慕暂拒', event_object.arg);
      await punish_rejecting_love(301);
      return;
    }
  }
  await sys_love_uma_in_event(301);
};
