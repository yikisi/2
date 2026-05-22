const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    const maru = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_callname(this.id, 0);
    const edu_marks = new MaEduMarks();
    if (edu_marks.after_recruit > 0) {
      this.#kojo.select_after_recruit(maru, me, callname);
      edu_marks.after_recruit = 1;
    } else if (edu_marks.sister_annoyance > 0) {
      this.#kojo.select_sister_annoyance(maru);
      edu_marks.sister_annoyance = 0;
    } else if (edu_marks.girls_blue > 0) {
      this.#kojo.select_girls_blue(maru, callname);
      edu_marks.girls_blue = 0;
    } else if (edu_marks.true_end_notify > 0) {
      this.#kojo.select_true_end(maru);
      edu_marks.true_end_notify = 0;
    } else if (edu_marks.good_end_notify > 0) {
      this.#kojo.select_good_end(maru, me, callname);
      edu_marks.good_end_notify = 0;
    } else if (!this.#kojo.select_by_wind(maru, me, callname, edu_marks.wind)) {
      if (edu_marks.Self_contempt > 0) {
        this.#kojo.select_Self_contempt(maru, callname);
      } else if (edu_marks.happiness_day > 0) {
        this.#kojo.select_happiness_day(maru, callname);
      } else {
        this.#kojo.select(maru, me, callname);
      }
    }
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async talk() {
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
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
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
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
      sys_get_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async out_church() {
    await this.#kojo.out_church(
      get_chara_talk(this.id),
      get_chara_talk(340),
      get_chara_talk(341),
      get_chara_talk(342),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async o_s_arcade(zensky, me) {
    await this.#kojo.o_s_arcade(zensky, me, sys_get_callname(this.id, 0));
  }

  async o_s_drawing(zensky, me) {
    await this.#kojo.o_s_drawing(zensky, me, sys_get_callname(this.id, 0));
  }

  async o_s_ktv(zensky, me) {
    await this.#kojo.o_s_ktv(zensky, me, sys_get_callname(this.id, 0));
  }

  async o_s_movie(zensky, me) {
    await this.#kojo.o_s_movie(zensky, me, sys_get_callname(this.id, 0));
  }

  async o_s_restaurant(zensky, me) {
    await this.#kojo.o_s_restaurant(zensky, me);
  }

  async o_s_dating(zensky, me) {
    await this.#kojo.o_s_dating(zensky, me, sys_get_callname(this.id, 0));
  }

  async o_s_shopping(zensky, me) {
    await this.#kojo.o_s_shopping(zensky, sys_get_callname(this.id, 0));
  }

  async o_r_fishing(zensky) {
    await this.#kojo.o_r_fishing(zensky, sys_get_callname(this.id, 0));
  }

  async o_r_walking(zensky) {
    await this.#kojo.o_r_walking(zensky, sys_get_callname(this.id, 0));
  }

  async s_a_tree_hollow(zensky) {
    await this.#kojo.s_a_tree_hollow(zensky);
  }

  async s_a_dating(zensky) {
    await this.#kojo.s_a_dating(zensky, sys_get_callname(this.id, 0));
  }

  async school_rooftop() {
    await this.#kojo.school_rooftop(get_chara_talk(this.id));
  }
};
