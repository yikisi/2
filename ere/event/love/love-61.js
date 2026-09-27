const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const masturbate = require('#/event/snippets/masturbate');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_date_obj } = require('#/data/date-indicator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(halo, me, callname, stage, extra, ebj) {
    const urara = get_chara_talk(52);
    await print_title_with_kojo(this.#kojo, '49', halo, {
      ...generate_dictionary(this.id, {
        call: !0,
        your_name: !0,
      }),
      URARA: urara.name,
      COLOR_52: urara.color,
      CALLNAME_52: sys_get_callname(52, 0),
    });
    begin_and_init_ero(this.id);
    await masturbate(this.id);
    end_ero_and_train();
    await sys_love_uma_in_event(this.id);
  }

  async 74(halo, me, callname, stage, extra, ebj) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '74',
          halo,
          generate_dictionary(this.id, { call: !0 }),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(halo, me, callname, stage, extra, ebj) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '89',
          halo,
          generate_dictionary(this.id, { call: !0, uma: !0 }),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
      update_kiss_exp(get_date_obj(), 0, this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
      await punish_rejecting_love(this.id);
    }
  }

  async 99(halo, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      '99',
      halo,
      generate_dictionary(this.id, { call: !0 }),
    );
    await quick_into_sex(this.id, this.id);
    await sys_love_uma_in_event(this.id);
  }

  async fraternity(halo, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      'fraternity',
      halo,
      generate_dictionary(this.id, { call: !0 }),
    );
    sys_change_pressure(this.id, 2000);
  }
};
