const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const kojo = i18n().kojo[this.id].recruit;

    const halo = get_chara_talk(this.id);
    if (stage === event_hooks.recruit) {
      await print_title_with_kojo(
        kojo,
        'rec1',
        halo,
        generate_dictionary(this.id, { your_name: !0, uma: !0 }),
      );
      add_event(
        event_hooks.recruit_start,
        new EventObject(this.id, cb_enum.recruit),
      );
      EventMarks.get(0).add(event_hooks.recruit_start);
      return true;
    } else {
      EventMarks.get(0).sub(event_hooks.recruit_start);
      if (
        (
          await print_title_with_kojo(
            kojo,
            'rec2',
            halo,
            generate_dictionary(this.id, { uma: !0 }),
          )
        )['rec'] === 1
      ) {
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('ws_cloudy'),
        );
        await this.recruit_end();
        return true;
      }
    }
  }
};
