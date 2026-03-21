const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const kitaru = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const kojo = i18n().kojo[this.id].recruit;
    if (await this.check_before_rec()) {
      return false;
    }
    if ((await kojo.rec(kitaru, me)) === 1) {
      era.set('cflag:56:招募状态', recruit_flags.yes);
      add_event(
        event_hooks.week_start,
        new EventObject(56, cb_enum.edu).set_arg('beginning'),
      );
    }
  }
};
