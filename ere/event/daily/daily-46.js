const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    const falcon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    if (new FalconEduMarks().after_recruit > 0) {
      this.#kojo.select_after_recruit(falcon, me);
      new FalconEduMarks().after_recruit = 0;
    } else {
      this.#kojo.select(
        falcon,
        me,
        sys_get_callname(this.id, 0),
        sys_get_callname(this.id, 301),
      );
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
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      get_chara_talk(0),
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

  async s_a_tree_hollow(falcon, me, hook) {
    await this.#kojo.s_a_tree_hollow(falcon);
  }

  async s_a_dating(falcon, me, hook) {
    await this.#kojo.s_a_dating(falcon, sys_get_callname(this.id, 0));
  }

  async school_rooftop(hook) {
    await this.#kojo.school_rooftop(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async out_church(hook) {
    if (era.get(`cflag:${this.id}:育成回合计时`) < 47 + 15) {
      hook.override = true;
      const edu_marks = new FalconEduMarks();
      if (!edu_marks.idol) {
        await print_title_with_kojo(
          this.#kojo,
          'church_idol',
          get_chara_talk(this.id),
          get_chara_talk(340),
          get_chara_talk(341),
          get_chara_talk(342),
          get_chara_talk(0),
          sys_get_callname(this.id, 0),
        );
        if (era.get(`love:${this.id}`) >= 75) {
          edu_marks.idol = 1;
        }
        return;
      }
    }
    return super.out_church(hook);
  }

  async o_s_arcade(falcon, me, hook) {
    await this.#kojo.o_s_arcade(falcon, me, sys_get_callname(this.id, 0));
  }

  async o_s_drawing(falcon, me, hook) {
    const edu_marks = new FalconEduMarks();
    let hot_spring = false;
    if (!edu_marks.hot_spring && Math.random() < 0.05) {
      edu_marks.hot_spring = 1;
      hot_spring = true;
    }
    await this.#kojo.o_s_drawing(
      falcon,
      me,
      sys_get_callname(this.id, 0),
      hot_spring,
    );
  }

  async o_s_ktv(falcon, me, hook) {
    await this.#kojo.o_s_ktv(falcon, me, sys_get_callname(this.id, 0));
  }

  async o_s_movie(falcon, me, hook) {
    await this.#kojo.o_s_movie(falcon, me, sys_get_callname(this.id, 0));
  }

  async o_s_restaurant(falcon, me, hook) {
    await this.#kojo.o_s_restaurant(falcon, me);
  }

  async o_s_dating(falcon, me, hook) {
    await this.#kojo.o_s_dating(falcon);
  }

  async o_s_shopping(falcon, me, hook) {
    await this.#kojo.o_s_shopping(falcon);
  }

  async o_r_fishing(falcon, me, hook, extra) {
    await this.#kojo.o_r_fishing(falcon);
  }

  async o_r_walking(falcon, me) {
    await this.#kojo.o_r_walking(falcon);
  }
};
