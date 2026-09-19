const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

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
    const dict = generate_dictionary(this.id, { uma: !0 });

    const my_marks = EventMarks.get(0);

    const sky = get_chara_talk(this.id);
    if (stage === event_hooks.recruit) {
      const flower = get_chara_talk(51);
      const taste = get_chara_talk(302);
      const flower_high_rel =
        era.get('cflag:51:招募状态') === recruit_flags.yes &&
        era.get('relation:51:0') > 75;
      const { rec: ret } = await print_title_with_kojo(
        kojo,
        flower_high_rel ? 'rec1_flower' : 'rec1',
        sky,
        {
          ...dict,
          FLOWER: flower.name,
          COLOR_51: flower.color,
          CALLNAME_51: sys_get_callname(51, 0),
          F_CALL_S: sys_get_callname(51, this.id),
          TASTE: taste.name,
          COLOR_302: taste.color,
        },
      );
      if (flower_high_rel || ret === 1) {
        era.set(`cflag:${this.id}:随机招募`, 0);
        era.set('flag:物色对象', this.id);
        add_event(
          event_hooks.out_river,
          new EventObject(this.id, cb_enum.recruit),
        );
        my_marks.add(event_hooks.out_river);
      }
      return;
    } else if (stage === event_hooks.out_river) {
      if (era.get('flag:当前互动角色') > 0) {
        add_event(stage, ebj);
        return;
      }
      my_marks.sub(event_hooks.out_river);
      await print_title_with_kojo(kojo, 'rec2', sky, dict);
      add_event(event_hooks.recruit_start, ebj);
      my_marks.add(event_hooks.recruit_start);
    } else if (stage === event_hooks.recruit_start) {
      my_marks.sub(event_hooks.recruit_start);
      await print_title_with_kojo(kojo, 'rec3', sky, dict);
      era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
      era.set('flag:物色对象', 0);
      await this.recruit_end();
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('ws_find_you'),
      );
    }
    return true;
  }
};
