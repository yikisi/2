/**
 * @file 无声铃鹿 - 招募
 * @author 牛蛙煲
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-2.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, ebj) {
    const suzuka = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const dict = {};
    dict['你'] = me.name;
    dict['玩家名'] = me.actual_name;
    dict['先生'] = me.adult_sex_title;
    dict['头衔'] = get_trainer_title().prefix();
    dict['她'] = suzuka.sex;
    dict['马娘'] = suzuka.uma_sex_title;
    dict['代表色'] = suzuka.color;
    dict['少女'] = suzuka.teen_sex_title;
    switch (ebj?.arg) {
      default:
        if (
          (await print_name_and_show_kojo('初识', suzuka, kojo, dict))[9] < 3
        ) {
          era.set('flag:物色对象', this.id);
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
        if (era.get('flag:当前声望') < 1000) {
          await print_name_and_show_kojo('选拔赛后', suzuka, kojo, dict);
          era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
          era.set('flag:物色对象', 0);
        } else {
          await print_name_and_show_kojo('选拔赛翌日', suzuka, kojo, dict);
          add_event(
            event_hooks.recruit_start,
            ebj.set_arg('tomorrow_after_tomorrow'),
          );
          EventMarks.get(0).add(event_hooks.recruit_start);
        }
        break;
      case 'tomorrow_after_tomorrow':
        EventMarks.get(0).sub(event_hooks.recruit_start);
        await print_name_and_show_kojo('选拔赛又翌日', suzuka, kojo, dict);
        add_event(event_hooks.out_river, ebj.set_arg('river'));
        EventMarks.get(0).add(event_hooks.out_river);
        break;
      case 'river':
        EventMarks.get(0).sub(event_hooks.out_river);
        await print_name_and_show_kojo('河堤', suzuka, kojo, dict);
        add_event(event_hooks.recruit_start, ebj.set_arg('beginning'));
        EventMarks.get(0).add(event_hooks.recruit_start);
        break;
      case 'beginning':
        EventMarks.get(0).sub(event_hooks.recruit_start);
        await print_name_and_show_kojo('新的开始', suzuka, kojo, dict);
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        era.set('flag:物色对象', 0);
    }
    return true;
  }
};
