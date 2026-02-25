const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_date_obj } = require('#/data/date-indicator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, uma: !0 });
  }

  async 49(suzuka, me, callname, hook, extra, ebj) {
    const spe = get_chara_talk(1);
    await print_title_with_kojo(this.#kojo, '49', suzuka, {
      ...this.#dict,
      '1_CALL': sys_get_callname(1, this.id),
      CALL_1: sys_get_callname(this.id, 1),
      S_COLOR: spe.color,
      S_NAME: spe.name,
    });
    await sys_love_uma_in_event(this.id);
  }

  async 74(suzuka, me, callname, hook, extra, ebj) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '74',
          suzuka,
          generate_dictionary(this.id, { call: !0, uma: !0, your_sex: !0 }),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
      update_kiss_exp(get_date_obj(), this.id, 0);
    } else {
      await punish_rejecting_love(this.id);
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 74);
    }
  }

  async 89(suzuka, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, '89', suzuka, {
      ...this.#dict,
      CHARA_FULL: suzuka.actual_name_with_title,
    });
    await sys_love_uma_in_event(this.id);
  }

  async 99(suzuka, me, callname, hook, extra, ebj) {
    const spe = get_chara_talk(1);
    const ret = await print_title_with_kojo(this.#kojo, '99', suzuka, {
      ...this.#dict,
      '1_CALL': sys_get_callname(1, this.id),
      CALL_1: sys_get_callname(this.id, 1),
      S_COLOR: spe.color,
      S_NAME: spe.name,
    });
    if (ret['update'] === 1) {
      if (ret['sex'] === 1) {
        begin_and_init_ero(0, this.id);
        await print_ero_page(this.id, true);
        await end_ero_and_show_result(true);
      }
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 99);
    }
  }
};
