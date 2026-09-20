const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  async cl_temple_fair(ss, me, hook) {
    if (era.get('cflag:400:育成回合计时') < 96 || era.get('love:400') < 75) {
      return await super.cl_temple_fair(ss, me, hook);
    }
    await print_title_with_kojo(
      this.#kojo,
      'cl_temple_fair',
      ss,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  select() {
    if (!sys_check_awake(400)) {
      return super.select();
    }
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 25),
      sys_get_colored_callname(this.id, 32),
      sys_get_colored_callname(this.id, 301),
    );
  }

  good_night_normal(ss, me, c_awake, m_awake) {
    if (!c_awake || m_awake) {
      return super.good_night_normal(ss, me, c_awake, m_awake);
    }
    this.#kojo.good_night_normal(ss, me);
  }

  async good_night_sex(ss, me, check) {
    return (await this.#kojo.good_night_sex(ss, me, check)) === 1;
  }

  async talk() {
    if (!sys_check_awake(400)) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 25),
    );
  }

  async office_gift() {
    await this.#kojo.office_gift(get_chara_talk(this.id));
  }

  async office_cook() {
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async office_study() {
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(this.id), get_chara_talk(0));
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
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 67),
    );
  }

  async s_a_tree_hollow(ss, me) {
    await this.#kojo.s_a_tree_hollow(ss, me);
  }

  async s_a_dating(ss, me) {
    await this.#kojo.s_a_dating(ss, me, sys_get_callname(this.id, 0));
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async o_r_fishing(ss, me, callname) {
    await this.#kojo.o_r_fishing(ss, me, callname);
  }

  async o_r_walking(ss, me) {
    await this.#kojo.o_r_walking(ss, me);
  }

  async o_s_arcade(ss, me, callname) {
    await this.#kojo.o_s_arcade(ss, me, callname);
  }

  async o_s_drawing(ss) {
    await this.#kojo.o_s_drawing(ss);
  }

  async o_s_ktv(ss, me, callname) {
    await this.#kojo.o_s_ktv(ss, me, callname);
  }

  async o_s_movie(ss, me, callname) {
    await this.#kojo.o_s_movie(
      ss,
      me,
      callname,
      sys_get_colored_callname(this.id, 25),
    );
  }

  async o_c_pray(ss, me, dice) {
    await this.#kojo.o_c_pray(ss, me, sys_get_callname(this.id, 0), dice);
  }

  async o_s_restaurant(ss) {
    await this.#kojo.o_s_restaurant(ss);
  }

  async o_s_dating(ss, me, callname) {
    await this.#kojo.o_s_dating(ss, me, callname);
  }

  async o_s_shopping(ss, me, callname) {
    await this.#kojo.o_s_shopping(ss, callname);
  }
};
