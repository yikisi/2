/**
 * @file 无声铃鹿 - 育成
 * @author 牛蛙煲
 */
const kojo = require('#/event/edu/edu-2.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { attr_enum, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async train() {
    await kojo['train'](this.#dict);
  }

  train_success_content() {
    kojo['train_success'](this.#dict);
  }

  async train_fail(suzuka, me, callname, hook, extra) {
    await kojo['train_fail'](this.#dict);
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    hook.arg = 0;
  }

  async train_success_add(suzuka, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return false;
    }
    return (await kojo['train_additional'](this.#dict))['train'] === 1;
  }

  async race_start() {
    await kojo['race_start'](this.#dict);
  }
};
