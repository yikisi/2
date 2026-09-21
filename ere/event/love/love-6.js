const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const masturbate = require('#/event/snippets/masturbate');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_date_obj } = require('#/data/date-indicator');
const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(oguri, me, callname, stage, extra, ebj) {
    begin_and_init_ero(this.id);
    await masturbate(this.id);
    end_ero_and_train();
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '49',
          oguri,
          generate_dictionary(this.id, { uma: !0, your_name: !0 }),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 49);
    }
  }

  async 74(oguri, me, callname, stage, extra, ebj) {
    if (stage === event_hooks.week_end) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-1',
            oguri,
            generate_dictionary(this.id, { your_sex: !0 }),
          )
        )['update'] === 1
      ) {
        add_event(event_hooks.back_school, ebj);
      } else {
        era.set(`cflag:${this.id}:46`, 74);
      }
    } else {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-2',
            oguri,
            generate_dictionary(this.id, { uma: !0, your_name: !0 }),
          )
        )['update'] === 1
      ) {
        update_kiss_exp(get_date_obj(), this.id, 0);
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:46`, 74);
        await punish_rejecting_love(this.id);
      }
    }
  }

  async 89(oguri, me, callname, stage, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      '89',
      oguri,
      generate_dictionary(this.id, { call: !0, uma: !0, your_sex: !0 }),
    );
    await sys_love_uma_in_event(this.id);
  }
};
