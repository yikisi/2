/**
 * @file 无声铃鹿 - 招募
 * @author 牛蛙煲
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-2.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const suzuka = get_chara_talk(this.id);
    const dict = generate_dictionary(this.id, {
      teen: !0,
      uma: !0,
      your_name: !0,
      sir: !0,
      title: !0,
    });
    switch (ebj?.arg) {
      default:
        await print_event_name('初识', suzuka);
        if ((await kojo['start'](dict))['rec'] < 3) {
          // FLAGNAME:33 = 物色对象
          era.set('flag:33', this.id);
          add_event(
            event_hooks.recruit_start,
            new EventObject(this.id, cb_enum.recruit).set_arg('tomorrow'),
          );
          EventMarks.get(0).add(event_hooks.recruit_start);
        } else {
          return false;
        }
        break;
      case 'tomorrow':
        EventMarks.get(0).sub(event_hooks.recruit_start);
        // FLAGNAME:15 = 当前声望
        if (era.get('flag:15') < 1000) {
          await print_event_name('选拔赛后', suzuka);
          await kojo['after'](dict);
          // CFLAGNAME:66 = 招募状态
          era.set(`cflag:${this.id}:66`, recruit_flags.yes);
          era.set('flag:33', 0);
        } else {
          await print_event_name('选拔赛翌日', suzuka);
          await kojo['tomorrow'](dict);
          add_event(
            event_hooks.recruit_start,
            ebj.set_arg('tomorrow_after_tomorrow'),
          );
          EventMarks.get(0).add(event_hooks.recruit_start);
        }
        break;
      case 'tomorrow_after_tomorrow':
        EventMarks.get(0).sub(event_hooks.recruit_start);
        await print_event_name('选拔赛又翌日', suzuka);
        await kojo['tomorrow_after_tomorrow'](dict);
        add_event(event_hooks.out_river, ebj.set_arg('river'));
        EventMarks.get(0).add(event_hooks.out_river);
        break;
      case 'river':
        EventMarks.get(0).sub(event_hooks.out_river);
        await print_event_name('河堤', suzuka);
        await kojo['river'](dict);
        add_event(event_hooks.recruit_start, ebj.set_arg('beginning'));
        EventMarks.get(0).add(event_hooks.recruit_start);
        break;
      case 'beginning':
        EventMarks.get(0).sub(event_hooks.recruit_start);
        await print_event_name('新的开始', suzuka);
        await kojo['beginning'](dict);
        era.set(`cflag:${this.id}:66`, recruit_flags.yes);
        era.set('flag:33', 0);
    }
    return true;
  }
};
