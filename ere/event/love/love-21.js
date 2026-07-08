const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const masturbate = require('#/event/snippets/masturbate');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(tama, me, callname, stage, extra_flag, event_object) {
    if (event_object.arg.length === 1) {
      await print_title_with_kojo(
        this.#kojo,
        '49-1',
        tama,
        generate_dictionary(this.id, { call: !0 }),
      );
      add_event(stage, event_object.set_arg([49, 0]));
      begin_and_init_ero(this.id);
      await masturbate(this.id);
      end_ero_and_train();
    } else {
      if (sys_check_remote(this.id)) {
        add_event(stage, event_object);
        return;
      }
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '49-2',
            tama,
            generate_dictionary(this.id, { uma: !0 }),
          )
        )[0] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        // CFLAGNAME:46 = 爱慕暂拒
        era.set(`cflag:${this.id}:46`, 49);
        await punish_rejecting_love(this.id);
      }
    }
  }

  async 74(tama, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-1',
            tama,
            generate_dictionary(this.id, { your_name: !0, your_sex: !0 }),
          )
        )[0] === 1
      ) {
        add_event(event_hooks.week_start, event_object);
      } else {
        era.set(`cflag:${this.id}:46`, 74);
      }
    } else {
      if (sys_check_remote(this.id)) {
        add_event(stage, event_object);
        return;
      }
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-2',
            tama,
            generate_dictionary(this.id, { your_name: !0 }),
          )
        )[0] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:46`, 74);
        await punish_rejecting_love(this.id);
      }
    }
  }
};
