const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(acute, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await this.#kojo['49-before'](acute);
      add_event(event_hooks.school_atrium, event_object);
      EventMarks.get(0).add(event_hooks.school_atrium);
    } else if (stage === event_hooks.school_atrium) {
      const cur_chara = era.get('flag:当前互动角色');
      if (cur_chara > 0 && cur_chara !== this.id) {
        await this.#kojo['49-before'](acute);
        add_event(stage, event_object);
        return;
      }
      EventMarks.get(0).sub(event_hooks.school_atrium);
      await this.#kojo[49](acute, me);
      all_reward_in_event(this.id, { base: [100, 100], motivation: 1 });
      await sys_love_uma_in_event(100);
      return true;
    }
  }

  async 74(acute, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await this.#kojo['74-before'](acute);
      add_event(event_hooks.out_station, event_object);
    } else if (stage === event_hooks.out_station) {
      if (era.get('flag:当前互动角色') !== this.id) {
        await this.#kojo['74-before'](acute);
        add_event(stage, event_object);
        return;
      }
      if ((await this.#kojo[74](acute, me, callname)) === 1) {
        await sys_love_uma_in_event(100);
      } else {
        era.set('cflag:100:爱慕暂拒', 74);
        await punish_rejecting_love(100);
      }
      return true;
    }
  }

  async 89(acute, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await this.#kojo['89-before'](acute, me);
      add_event(event_hooks.school_atrium, event_object);
    } else if (stage === event_hooks.school_atrium) {
      if (era.get('flag:当前互动角色') !== this.id) {
        await this.#kojo['89-before'](acute, me);
        add_event(stage, event_object);
        return;
      }
      await this.#kojo[89](acute, get_chara_talk(20), me, callname);
      era.println();
      get_attr_and_print_in_event(100, [0, 0, 0, 10], 0, void 0, true);
      await sys_love_uma_in_event(this.id);
      return true;
    }
  }

  async 99(acute, me, callname, stage, extra_flag, event_object) {
    if (acute.sex_code === 1 || me.sex_code === 0) {
      return await super[99](
        acute,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    if (stage === event_hooks.week_end) {
      await this.#kojo['99-before'](acute, me);
      EventMarks.get(0).add(event_hooks.school_rooftop);
      add_event(event_hooks.school_rooftop, event_object);
    } else if (stage === event_hooks.school_rooftop) {
      const cur_chara = era.get('flag:当前互动角色');
      if (cur_chara && cur_chara !== this.id) {
        await this.#kojo['99-notify'](acute, me);
        add_event(stage, event_object);
        return;
      }
      EventMarks.get(0).sub(event_hooks.school_rooftop);
      await this.#kojo[99](acute, me, callname);
      await quick_into_sex(100);
      await this.#kojo['99-end'](acute, callname);
      era.println();
      get_attr_and_print_in_event(100, void 0, 66, void 0, true);
      add_jewel_reward(100, 10, 200);
      era.set('mark:100:苦痛', 0);
      era.set('mark:100:羞耻', 0);
      era.set('mark:100:反抗', 0);
      era.add('item:项圈', 1);
      await sys_love_uma_in_event(100);
      return true;
    }
  }
};
