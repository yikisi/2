const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_check_awake(this.id),
    );
  }

  good_morning() {
    this.#kojo.good_morning(get_chara_talk(this.id));
  }

  async talk() {
    if (!sys_check_awake(30)) {
      return super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(this.id));
  }

  async office_study() {
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_rest() {
    await this.#kojo.office_rest(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(rice, me, hook) {
    await this.#kojo.s_a_tree_hollow(
      rice,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_a_dating(rice, me, hook) {
    await this.#kojo.s_a_dating(rice);
  }

  async s_r_lunch(hook) {
    await this.#kojo.s_r_lunch(get_chara_talk(this.id));
  }

  async o_r_fishing(rice, me, hook, extra) {
    extra.jpy = Math.random() < 0.1 ? 10 : 0;
    await this.#kojo.o_r_fishing(
      rice,
      sys_get_colored_callname(this.id, 0),
      extra.jpy,
    );
  }

  async o_r_walking(rice, me) {
    await this.#kojo.o_r_walking(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_arcade(rice, me, hook) {
    await this.#kojo.o_s_arcade(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_drawing(rice, me, hook) {
    await this.#kojo.o_s_drawing(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_ktv(rice, me, hook) {
    await this.#kojo.o_s_ktv(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_movie(rice, me, hook) {
    await this.#kojo.o_s_movie(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_restaurant(rice, me, hook) {
    await this.#kojo.o_s_restaurant(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_dating(rice, me, hook) {
    await this.#kojo.o_s_dating(rice, sys_get_colored_callname(this.id, 0));
  }

  async o_s_shopping(rice, me, hook) {
    await this.#kojo.o_s_shopping(rice, sys_get_colored_callname(this.id, 0));
  }
};
