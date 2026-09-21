const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(falcon, me, callname) {
    await print_title_with_kojo(this.#kojo, '49', falcon, me, callname);
    await sys_love_uma_in_event(this.id);
  }

  async 74(falcon, me, callname) {
    const ret = await print_title_with_kojo(
      this.#kojo,
      '74',
      falcon,
      me,
      callname,
    );
    if (ret[1] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      if (ret[1] === 2) {
        await punish_rejecting_love(this.id);
      }
      era.set('cflag:46:爱慕暂拒', 74);
    }
  }

  async 89(falcon, me, callname) {
    await print_title_with_kojo(this.#kojo, '89', falcon, me, callname);
    await sys_love_uma_in_event(this.id);
  }

  async 99(falcon, me, callname) {
    await print_title_with_kojo(this.#kojo, '99', falcon, me);
    await sys_love_uma_in_event(this.id);
  }
};
