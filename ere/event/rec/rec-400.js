const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    await i18n().kojo[this.id].recruit.rec(
      get_chara_talk(400),
      get_chara_talk(25),
      get_chara_talk(0),
      sys_get_colored_callname(0, 25),
      get_trainer_title().full(),
    );
    era.set('cflag:400:招募状态', recruit_flags.yes);
    add_event(
      event_hooks.week_end,
      new EventObject(400, cb_enum.edu).set_arg('beginning'),
    );
  }
};
