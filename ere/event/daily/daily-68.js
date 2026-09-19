const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (!sys_check_awake(68)) {
      return super.select();
    }
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(67),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 3),
      sys_get_colored_callname(this.id, 7),
      sys_get_colored_callname(this.id, 44),
      sys_get_colored_callname(this.id, 67),
      sys_get_colored_callname(this.id, 98),
      sys_get_colored_callname(this.id, 301),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id));
  }

  async office_rest() {
    await this.#kojo.office_rest(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_prepare() {
    await this.#kojo.office_prepare(
      get_chara_talk(this.id),
      get_chara_talk(3),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 67),
    );
  }

  async o_s_arcade(kita, me, hook) {
    await this.#kojo.o_s_arcade(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 3),
      sys_get_colored_callname(this.id, 13),
    );
  }

  async o_s_drawing(kita, me, hook) {
    const edu_marks = new KitaEduMarks();
    let hot_spring = !edu_marks.hot_spring && Math.random() < 0.2;

    await this.#kojo.o_s_drawing(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 44),
      sys_get_colored_callname(this.id, 67),
      hot_spring,
    );
    if (hot_spring) {
      edu_marks.hot_spring = 1;
    }
  }

  async o_s_ktv(kita, me) {
    await this.#kojo.o_s_ktv(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 44),
    );
  }

  async o_s_restaurant(kita, me) {
    await this.#kojo.o_s_restaurant(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 67),
      sys_get_colored_callname(this.id, 98),
    );
  }

  async o_s_dating(kita, me) {
    await this.#kojo.o_s_dating(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 3),
      sys_get_colored_callname(this.id, 13),
      sys_get_colored_callname(this.id, 67),
    );
  }

  async o_r_fishing(kita, me) {
    await this.#kojo.o_r_fishing(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_r_walking(kita, me) {
    await this.#kojo.o_r_walking(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  good_night_normal(kita, me) {
    this.#kojo.good_night_normal(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async good_night_sex(kita, me, check) {
    return (await this.#kojo.good_night_sex(kita, me, check)) === 1;
  }

  async talk() {
    if (!sys_check_awake(68) || !(era.get('cflag:68:育成回合计时') < 3 * 48)) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_c_pray(kita, me, dice) {
    await this.#kojo.o_c_pray(
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 98),
      dice,
    );
  }

  async week_start() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      punish_level = era.get('flag:惩戒力度');
    if (punish_level === 1) {
      await print_title_with_kojo(this.#kojo, 'punishment_1', kita, me);
    } else if (punish_level === 3) {
      await print_title_with_kojo(this.#kojo, 'punishment_3', kita, me);
    }
  }

  async slave_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'slave_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async cl_valentine(kita, me) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_valentine',
      kita,
      me,
      sys_get_colored_callname(this.id, 0),
    );
    if (era.get('cflag:68:育成回合计时') === 47 + 6) {
      new KitaEduMarks().classical_valentine++;
    }
  }

  async cl_christmas(kita, me) {
    await print_title_with_kojo(this.#kojo, 'cl_christmas', kita, me);
  }
};
