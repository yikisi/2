const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const treve = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    if (stage === event_hooks.recruit) {
      const ret = await kojo.rec(
        treve,
        get_chara_talk(302),
        get_chara_talk(343),
        me,
        sys_get_colored_callname(this.id, 0),
      );
      if (ret['foreign'] === 2) {
        return false;
      }
      if (ret['select'] === 1) {
        return true;
      }
      add_event(event_hooks.week_start, new EventObject(205, cb_enum.recruit));
      era.set('cflag:205:随机招募', 0);
      era.set('flag:物色对象', 205);
      return true;
    } else if (stage === event_hooks.week_start) {
      await print_title_with_kojo(kojo, 'rec_final', treve, me);
      era.set('flag:物色对象', 0);
      era.set('cflag:205:招募状态', recruit_flags.yes);
      era.set('flag:当前互动角色', 205);
    }
    return false;
  }
};
