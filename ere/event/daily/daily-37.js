const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const FlashLifeMarks = require('#/data/event/life-event-marks/life-event-marks-37');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (!sys_check_awake(37)) {
      return super.select();
    }
    this.#kojo.select(get_chara_talk(this.id), sys_get_callname(this.id, 0));
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  good_night_normal(flash, me, f_awake, m_awake) {
    if (!f_awake || !m_awake) {
      return super.good_night_normal(flash, me, f_awake, m_awake);
    }
    this.#kojo.good_night_normal(flash, sys_get_callname(this.id, 0));
  }

  async talk() {
    if (!sys_check_awake(37)) {
      return await super.talk();
    }
    const flash = get_chara_talk(37);
    const life_marks = new FlashLifeMarks();
    if (!life_marks.gacha_talk && Math.random() < 0.1) {
      life_marks.gacha_talk = 1;
      await this.#kojo.talk_about_gacha(flash);
    } else if (
      era.get('cflag:46:招募状态') === 1 &&
      life_marks.gacha_talk === 1
    ) {
      await this.#kojo.talk_about_falcon_and_gacha(flash);
      life_marks.gacha_talk = 2;
    } else {
      await this.#kojo.talk(flash, sys_get_callname(this.id, 0));
    }
  }

  async office_gift() {
    await this.#kojo.office_gift(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id));
  }

  async office_rest() {
    await this.#kojo.office_rest(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async office_prepare() {
    await this.#kojo.office_prepare(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(flash, me, hook) {
    await this.#kojo.s_a_tree_hollow(flash, me);
  }

  async s_a_dating(flash, me, hook) {
    await this.#kojo.s_a_dating(flash, me, sys_get_callname(this.id, 0));
  }

  async s_r_lunch(hook) {
    await this.#kojo.s_r_lunch(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async o_r_fishing(flash, me, hook, extra) {
    await this.#kojo.o_r_fishing(flash, me, sys_get_callname(this.id, 0));
  }

  async o_r_walking(flash, me) {
    await this.#kojo.o_r_walking(flash, me, sys_get_callname(this.id, 0));
  }

  async o_c_pray(flash, me, dice, hook) {
    await this.#kojo.o_c_pray(flash, me, sys_get_callname(this.id, 0));
  }

  async o_s_arcade(flash, me, hook) {
    await this.#kojo.o_s_arcade(flash, me);
  }

  async o_s_drawing(flash, me, hook) {
    await this.#kojo.o_s_drawing(flash, me, sys_get_callname(this.id, 0));
  }

  async o_s_ktv(flash, me, hook) {
    await this.#kojo.o_s_ktv(flash, me);
  }

  async o_s_movie(flash, me, hook) {
    await this.#kojo.o_s_movie(flash, me, sys_get_callname(this.id, 0));
  }

  async o_s_restaurant(flash, me, hook) {
    await this.#kojo.o_s_restaurant(flash, me);
  }

  async o_s_dating(flash, me, hook) {
    await this.#kojo.o_s_dating(flash, me, sys_get_callname(this.id, 0));
  }

  async o_s_shopping(flash, me, hook) {
    await this.#kojo.o_s_shopping(flash, me, sys_get_callname(this.id, 0));
  }

  async load_talk() {
    if (
      (era.get('cflag:37:妊娠阶段') !== 1 << pregnant_stage_enum.no &&
        !LifeEventMarks.get_marks(37).report) ||
      era.get(`exp:37:生产次数`) > 0
    ) {
      await this.#kojo.load_talk_pregnant(get_chara_talk(this.id));
    }
  }
};
