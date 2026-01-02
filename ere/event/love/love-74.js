/**
 * @file 目白光明 - 爱慕
 * @author KUN
 */
const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const kojo = require('#/event/love/love-74.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event } = require('#/event/queue');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

module.exports = class extends CustomizedLove {
  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async 49(chara) {
    if (
      (await print_title_with_kojo(kojo, '49', chara, this.#dict))['update'] ===
      1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 49);
    }
  }

  async 74(chara) {
    const dober = get_chara_talk(59);
    await print_title_with_kojo(kojo, '74', chara, {
      ...this.#dict,
      D_NAME: dober.name,
      D_COLOR: dober.color,
    });
    await sys_love_uma_in_event(this.id);
  }

  async 89(chara) {
    if (
      (await print_title_with_kojo(kojo, '89', chara, this.#dict))['update'] ===
      1
    ) {
      begin_and_init_ero(0, this.id);
      await print_ero_page(this.id, true);
      await end_ero_and_show_result(true);
      await kojo['89_sex'](this.#dict);
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 89);
    }
  }

  async 99(chara, me, callname, stage, extra, event_object) {
    if (stage === event_hooks.week_end) {
      await print_title_with_kojo(kojo, '99_1', chara, this.#dict);
      add_event(event_hooks.week_start, event_object);
    } else if (
      (await print_title_with_kojo(kojo, '99_2', chara, this.#dict))['sex'] ===
      2
    ) {
      begin_and_init_ero(0, this.id);
      await print_ero_page(this.id, true);
      await end_ero_and_show_result(true);
      await kojo['99_sex'](this.#dict);
    }
    get_custom_mec(this.id).set_callname();
    await sys_love_uma_in_event(this.id);
  }
};
