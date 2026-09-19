const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(rice, me, callname) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '49',
          rice,
          me,
          callname,
          sys_get_callname(30, 30),
        )
      )[0] === 1
    ) {
      era.set('cflag:30:爱慕暂拒', 49);
    } else {
      await sys_love_uma_in_event(30);
    }
  }

  async 74(rice, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      '74',
      rice,
      me,
      callname,
      sys_get_callname(this.id, this.id),
      sys_get_colored_callname(0, this.id),
    );
    await sys_love_uma_in_event(30);
  }

  async 89(rice, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      '89',
      rice,
      me,
      callname,
      sys_get_callname(this.id, this.id),
    );
    await sys_love_uma_in_event(30);
  }

  async 99(rice, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      '99',
      rice,
      me,
      callname,
      sys_get_callname(this.id, this.id),
    );
    await sys_love_uma_in_event(30);
  }
};
