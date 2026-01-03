/**
 * @file 目白光明 - 育成
 * @author KUN
 */
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

/** @type {KojoFile} */
const kojo = require('#/event/edu/edu-74.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

module.exports = class extends CustomizedEdu {
  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async train() {
    await kojo.train(this.#dict);
  }

  /** @param {CharaTalk} bright */
  async at_my_side(bright) {
    await print_title_with_kojo(kojo, 'at_my_side', bright, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      ELDER_SISTER: bright.get_bigger_sibling_sex_title(),
      CALL_13: sys_get_callname(this.id, 13),
      CALL_27: sys_get_callname(this.id, 27),
      CALL_64: sys_get_callname(this.id, 64),
    });
  }
};
