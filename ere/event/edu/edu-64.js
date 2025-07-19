/**
 * @file 目白善信 - 育成
 * @author KUN
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-64.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const l_kojo = require('#/event/love/love-64.kojo');
const { add_event, cb_enum } = require('#/event/queue');
const { i_pama_yandere } = require('#/event/snippets/64');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { attr_enum, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  get #dict() {
    const o = {};
    o['代表色'] = get_chara_color(this.id);
    o['善信'] = era.get(`callname:${this.id}:-2`);
    o['称呼'] = sys_get_callname(this.id, 0);
    o.T = era.get('callname:0:-2');
    o['自称'] = sys_get_callname(this.id, this.id);
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      o['马娘'] = '马郎';
    } else {
      o['马娘'] = '马娘';
    }
    return o;
  }

  async train() {
    await kojo['训练'](this.#dict);
  }

  async train_success_add(pama, me, callname, hook) {
    hook.arg =
      (await print_name_and_show_kojo('加练', pama, kojo, this.#dict))[0] === 1;
  }

  async train_fail(pama, me, callname, hook, extra_flag) {
    await CustomizedEdu.print_fail_info_in_train(
      pama,
      extra_flag.train,
      extra_flag.fumble,
    );
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.train !== attr_enum.intelligence) {
      await print_event_name('在保健室', pama);
      await kojo['训练失败'](this.#dict);
    }
  }

  async race_end(pama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const edu_marks = new PamaEduMarks();
    if (
      edu_weeks >= 96 &&
      i_pama_yandere() &&
      edu_marks.only_you <= 3 &&
      extra_flag.rank === 1
    ) {
      add_event(
        get_random_entry([event_hooks.school_atrium, event_hooks.out_station]),
        new EventObject(this.id, cb_enum.love, true).set_arg('s_feeling'),
      );
    }
    await super.race_end(pama, me, callname, hook, extra_flag);
  }

  async crazy_fan_end() {
    const pama = get_chara_talk(this.id);
    let name;
    if (i_pama_yandere()) {
      name = '无终的逃亡';
      await l_kojo[name](this.#dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else if (era.get(`love:${this.id}`) >= 75) {
      name = '无力逃亡';
      await kojo[name](this.#dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else {
      return await super.slave_end();
    }
  }
};
