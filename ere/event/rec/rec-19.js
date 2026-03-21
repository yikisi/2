const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const digital = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    if (stage === event_hooks.recruit) {
      if (await this.check_before_rec()) {
        return;
      }
      const ret = await print_title_with_kojo(kojo, 'rec_start', digital, me);
      era.add('relation:19:0', (ret[0] === 1) * 5);
      era.set('cflag:19:随机招募', 0);
      era.set('flag:物色对象', 19);
      EventMarks.get(0).add(event_hooks.recruit_start);
      add_event(
        event_hooks.recruit_start,
        new EventObject(19, cb_enum.recruit),
      );
    } else {
      await print_title_with_kojo(kojo, 'rec_end', digital, me);
      era.set('cflag:19:招募状态', recruit_flags.yes);
      era.set('flag:物色对象', 0);
      EventMarks.get(0).sub(event_hooks.recruit_start);
      era.set('callname:0:19', '101912');
      await this.recruit_end();
      return true;
    }
  }
};
