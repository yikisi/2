/**
 * @file 玉藻十字 - 爱慕
 * @author 雞雞
 */
const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/love/love-21.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');

module.exports = class extends CustomizedLove {
  get #dict() {
    const o = {};
    o['代表色'] = get_chara_color(this.id);
    o['称呼'] = sys_get_callname(this.id, 0);
    o['玩家名'] = era.get('callname:0:-2');
    o['玩家本名'] = era.get('callname:0:-1');
    o['她'] = era.get(`cflag:${this.id}:性别`) === 1 ? '他' : '她';
    o['他'] = era.get('cflag:0:性别') === 1 ? '他' : '她';
    return o;
  }

  async 49(tama, me, callname, stage, extra_flag, event_object) {
    if (event_object.arg.length === 1) {
      await print_name_and_show_kojo('思慕', tama, kojo, this.#dict);
      add_event(stage, event_object.set_arg([49, 0]));
      begin_and_init_ero(this.id);
      await masturbate(this.id);
      end_ero_and_train();
    } else {
      if (sys_check_remote(this.id)) {
        add_event(stage, event_object);
        return;
      }
      if (
        (await print_name_and_show_kojo('思慕', tama, kojo, this.#dict))[0] ===
        1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:爱慕暂拒`, 49);
        await punish_rejecting_love(this.id);
      }
    }
  }

  async 74(tama, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      if (
        (await print_name_and_show_kojo('爱慕', tama, kojo, this.#dict))[0] ===
        1
      ) {
        add_event(event_hooks.week_start, event_object);
      } else {
        era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      }
    } else {
      if (sys_check_remote(this.id)) {
        add_event(stage, event_object);
        return;
      }
      if (
        (await print_name_and_show_kojo('表白', tama, kojo, this.#dict))[0] ===
        1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:爱慕暂拒`, 74);
        await punish_rejecting_love(this.id);
      }
    }
  }
};
