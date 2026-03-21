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
    const kojo = i18n().kojo[this.id].recruit;
    if ((await kojo.rec(get_chara_talk(this.id), get_chara_talk(0))) === 1) {
      get_chara_talk(67);
      era.set('cflag:68:招募状态', recruit_flags.yes);
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
      );
      await this.recruit_end();
    }
  }
};
