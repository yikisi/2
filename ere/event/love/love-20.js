const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(sky, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      '49',
      sky,
      generate_dictionary(this.id),
    );
    await sys_love_uma_in_event(this.id);
  }

  async 74(sky, me, callname, stage, extra, ebj) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '74',
          sky,
          generate_dictionary(this.id, { uma: !0, your_sex: !0 }),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(sky, me, callname, stage, extra, ebj) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '89',
          sky,
          generate_dictionary(this.id),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
      await punish_rejecting_love(this.id);
    }
  }

  async 99(sky, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      '99',
      sky,
      generate_dictionary(this.id),
    );
    await sys_love_uma_in_event(this.id);
  }
};
