const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const RubyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-85');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  async cl_new_year(ruby, me, hook) {
    if (ruby.sex_code !== 0 || me.sex_code !== 1 || era.get('love:85') < 75) {
      return await super.cl_new_year(ruby, me, hook);
    }
    hook.override = true;
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    if (
      (await print_title_with_kojo(this.#kojo, 'cl_new_year', ruby, me))[0] ===
      2
    ) {
      const pregnant_cache = era.get('cflag:85:妊娠阶段');
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      end_ero_and_train();
      era.set('cflag:85:妊娠阶段', pregnant_cache);
    }
  }

  async cl_christmas(ruby, me, hook) {
    if (ruby.sex_code !== 0 || me.sex_code !== 1 || era.get('love:85') < 75) {
      return await super.cl_christmas(ruby, me, hook);
    }
    hook.override = true;
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_title_with_kojo(this.#kojo, 'cl_christmas', ruby, me);
    const pregnant_cache = era.get('cflag:85:妊娠阶段');
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    end_ero_and_train();
    era.set('cflag:85:妊娠阶段', pregnant_cache);
  }

  select() {
    const life_marks = new RubyLifeMarks();
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_check_awake(this.id),
      life_marks.after_recruit > 0,
    );
    life_marks.after_recruit = 0;
  }

  good_morning() {
    this.#kojo.good_morning(get_chara_talk(this.id));
  }

  async talk() {
    if (!sys_check_awake(85)) {
      return await super.talk();
    }
    await this.#kojo.talk(get_chara_talk(this.id), get_chara_talk(0));
  }

  async office_gift() {
    await this.#kojo.office_gift(get_chara_talk(this.id));
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(this.id));
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id));
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(this.id));
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 67),
    );
  }

  async s_a_tree_hollow(ruby, me) {
    await this.#kojo.s_a_tree_hollow(ruby);
  }

  async s_a_dating(ruby, me) {
    await this.#kojo.s_a_dating(ruby);
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(get_chara_talk(this.id), get_chara_talk(0));
  }

  async o_r_fishing(ruby) {
    await this.#kojo.o_r_fishing(ruby);
  }

  async o_r_walking(ruby) {
    await this.#kojo.o_r_walking(ruby);
  }

  async o_s_arcade(ruby) {
    await this.#kojo.o_s_arcade(ruby);
  }

  async o_s_drawing(ruby) {
    const edu_marks = new RubyEduMarks();
    const hot_spring = !edu_marks.hot_spring && Math.random() < 0.3;
    await this.#kojo.o_s_drawing(ruby, hot_spring);
    if (hot_spring) {
      edu_marks.hot_spring = 1;
    }
  }

  async o_s_ktv(ruby) {
    await this.#kojo.o_s_ktv(ruby, sys_get_colored_callname(this.id, 93));
  }

  async o_s_movie(ruby) {
    await this.#kojo.o_s_movie(ruby, sys_get_colored_callname(this.id, 0));
  }

  async o_c_pray(ruby, me) {
    await this.#kojo.o_c_pray(ruby, me, sys_get_colored_callname(this.id, 0));
  }

  async o_s_restaurant(ruby) {
    await this.#kojo.o_s_restaurant(ruby);
  }

  async o_s_dating(ruby) {
    await this.#kojo.o_s_dating(ruby, sys_get_colored_callname(this.id, 0));
  }

  async o_s_shopping(ruby) {
    await this.#kojo.o_s_shopping(ruby);
  }

  async basement_end() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    if (
      !era.get('talent:85:神之足') ||
      era.get('abl:85:足交技巧') !== 5 ||
      ruby.sex_code === 1 ||
      me.sex_code === 0
    ) {
      return await super.basement_end();
    }
    await print_title_with_kojo.ending(this.#kojo, 'basement_end', ruby, me);
  }

  async load_talk() {
    await this.#kojo.load_talk(get_chara_talk(this.id));
  }
};
