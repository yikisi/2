const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-64.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_enum, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  get #dict() {
    const o = {};
    o['代表色'] = get_chara_color(this.id);
    o['善信'] = era.get(`callname:${this.id}:-2`);
    o['称呼'] = sys_get_callname(this.id, 0);
    o['T'] = era.get('callname:0:-2');
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      o['小姐'] = '先生';
      o['马娘'] = '马郎';
    } else {
      o['小姐'] = '小姐';
      o['马娘'] = '马娘';
    }
    return o;
  }

  async train() {
    await kojo['训练'](this.#dict);
  }

  async additional_train(pama, me, callname, hook) {
    await print_event_name('热血的追加训练！', pama);
    hook.arg = (await kojo['加练'](this.#dict))[0] === 1;
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
};
