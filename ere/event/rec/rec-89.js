/**
 * @file 高尚骏逸 - 招募
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const { add_event, cb_enum } = require('#/event/queue');
const kojo = require('#/event/rec/rec-89.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_obj) {
    const dict = {};
    const grand = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    dict['你'] = era.get('callname:0:-2');
    dict['马娘'] = grand.get_uma_sex_title();
    dict['少女'] = grand.get_teen_sex_title();
    dict['她'] = grand.sex;
    dict['女孩'] = grand.get_baby_sex_title();
    dict['代表色'] = grand.color;
    switch (stage) {
      case event_hooks.recruit:
        if (
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length ===
            1 &&
          era.get('flag:当前声望') < 500
        ) {
          await print_event_name('高尚骏逸登场！：「开头」', grand);
          if ((await kojo['开头'](dict)).at(-1) === 1) {
            era.set('flag:物色对象', this.id);
            add_event(
              event_hooks.school_atrium,
              new EventObject(this.id, cb_enum.recruit),
            );
            new EventMarks(0).add(event_hooks.school_atrium);
            era.set(`cflag:${this.id}:随机招募`, 0);
          }
        } else {
          dict['训练员头衔'] = get_trainer_title() + '训练员';
          await print_event_name('高尚骏逸登场！：「开端」', grand);
          if ((await kojo['开端'](dict)).at(-1) <= 2) {
            await kojo['开端结束'](dict);
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
          }
        }
        break;
      case event_hooks.school_atrium:
        if (era.get('flag:当前互动') > 0) {
          add_event(stage, event_obj);
          return;
        }
        new EventMarks(0).sub(event_hooks.school_atrium);
        await print_event_name('高尚骏逸登场！：「起锚」', grand);
        if ((await kojo['起锚'](dict)).at(-1) === 2) {
          add_event(event_hooks.recruit_start, event_obj);
          new EventMarks(0).add(event_hooks.recruit_start);
          return true;
        } else {
          era.set('flag:物色对象', 0);
          era.set(`cflag:${this.id}:随机招募`, 1);
        }
        break;
      case event_hooks.recruit_start:
        new EventMarks(0).sub(event_hooks.recruit_start);
        await print_event_name('高尚骏逸登场！：「入海」', grand);
        dict['强击代表色'] = get_chara_color(91);
        dict['极峰代表色'] = get_chara_color(90);
        dict['姐姐'] = grand.get_bigger_sibling_sex_title();
        dict['男性'] = me.get_phy_sex_title();
        dict['他'] = me.sex;
        dict['玩家名'] = me.actual_name;
        dict['训练员先生'] = '训练员' + me.get_adult_sex_title();
        if ((await kojo['入海'](dict))[1] === 1) {
          era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        } else {
          era.set(`cflag:${this.id}:随机招募`, 1);
        }
        era.set('flag:物色对象', 0);
    }
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      await this.recruit_end();
      if (stage !== event_hooks.recruit) {
        return true;
      }
    }
  }
};
