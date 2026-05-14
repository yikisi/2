const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

const { max_chara_id } = require('#/data/other-const');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (!sys_check_awake(205)) {
      return super.select();
    }
    this.#kojo.select(get_chara_talk(this.id), sys_get_callname(this.id, 0));
  }

  good_morning() {
    this.#kojo.good_morning(get_chara_talk(this.id));
  }

  async talk() {
    if (!sys_check_awake(205)) {
      return await super.talk();
    }
    await this.#kojo.talk(get_chara_talk(this.id));
  }

  async office_gift() {
    await this.#kojo.office_gift(get_chara_talk(this.id));
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id));
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(this.id));
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(this.id));
  }

  async office_prepare() {
    await this.#kojo.office_prepare(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(treve, me, hook) {
    await this.#kojo.s_a_tree_hollow(treve);
  }

  async s_a_dating(treve, me, hook) {
    await this.#kojo.s_a_dating(treve);
  }

  async s_r_lunch(hook) {
    await this.#kojo.s_r_lunch(get_chara_talk(this.id));
  }

  async o_r_fishing(treve, me, hook, extra) {
    await this.#kojo.o_r_fishing(treve, me);
  }

  async o_r_walking(treve, me) {
    await this.#kojo.o_r_walking(treve);
  }

  async o_s_arcade(treve, me, hook) {
    const target = get_random_entry(
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
        (cid) =>
          cid > 0 &&
          cid < max_chara_id &&
          cid !== 205 &&
          era.get(`cflag:${cid}:种族`) > 0,
      ),
    );
    await this.#kojo.o_s_arcade(
      treve,
      me,
      sys_get_callname(this.id, 0),
      target > 0 && sys_get_colored_callname(this.id, target),
    );
  }

  async o_s_drawing(treve, me, hook) {
    await this.#kojo.o_s_drawing(treve, sys_get_callname(this.id, 0));
  }

  async o_s_ktv(treve, me, hook) {
    await this.#kojo.o_s_ktv(treve);
  }

  async o_s_movie(treve, me, hook) {
    await this.#kojo.o_s_movie(treve);
  }

  async o_c_pray(treve, me, dice, hook) {
    await this.#kojo.o_c_pray(treve, me, sys_get_callname(this.id, 0), dice);
  }

  async o_s_restaurant(treve, me, hook) {
    await this.#kojo.o_s_restaurant(treve);
  }

  async o_s_dating(treve, me, hook) {
    await this.#kojo.o_s_dating(treve);
  }

  async o_s_shopping(treve, me, hook) {
    await this.#kojo.o_s_shopping(treve, sys_get_callname(this.id, 0));
  }

  async basement_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'basement_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }
};
