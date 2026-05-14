const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (!sys_check_awake(60)) {
      return super.select();
    }
    this.#kojo.select(
      get_chara_talk(this.id),
      sys_get_callname(this.id, this.id),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  good_night_normal(nature, me, n_awake, m_awake) {
    if (!n_awake || !m_awake) {
      return super.good_night_normal(nature, me, n_awake, m_awake);
    }
    this.#kojo.good_night_normal(nature, me, sys_get_callname(this.id, 0));
  }

  async good_night_sex(nature, me, check) {
    return (
      (await this.#kojo.good_night_sex(
        nature,
        me,
        sys_get_callname(this.id, 0),
        check,
      )) === 1
    );
  }

  async talk() {
    if (!sys_check_awake(60)) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
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
      sys_get_callname(this.id, this.id),
    );
  }

  async office_study() {
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
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
      sys_get_callname(this.id, this.id),
    );
  }

  async s_a_tree_hollow(nature, me, hook) {
    await this.#kojo.s_a_tree_hollow(nature, sys_get_callname(this.id, 0));
  }

  async s_a_dating(nature, me, hook) {
    await this.#kojo.s_a_dating(nature, sys_get_callname(this.id, 0));
  }

  async s_r_lunch(hook) {
    await this.#kojo.s_r_lunch(
      get_chara_talk(this.id),
      sys_get_callname(this.id, this.id),
    );
  }

  async out_river(hook, extra) {
    if (Math.random() > 0.33) {
      return await super.out_river(hook, extra);
    }
    await this.#kojo.out_river_talk(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
    hook.override = true;
    if (all_reward_in_event(this.id, { motivation: 1, relation: 5 })) {
      await era.waitAnyKey();
    }
  }

  async o_r_fishing(nature, me, hook, extra) {
    await this.#kojo.o_r_fishing(
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
      sys_get_colored_callname(this.id, 20),
    );
  }

  async o_r_walking(nature, me) {
    await this.#kojo.o_r_walking(nature, sys_get_callname(this.id, 0));
  }

  async o_c_pray(nature, me, dice, hook) {
    await this.#kojo.o_c_pray(nature, sys_get_callname(this.id, this.id), dice);
  }

  async o_s_arcade(nature, me, hook) {
    await this.#kojo.o_s_arcade(
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  async o_s_drawing(nature, me, hook) {
    await this.#kojo.o_s_drawing(nature);
  }

  async o_s_ktv(nature, me, hook) {
    await this.#kojo.o_s_ktv(
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  async o_s_movie(nature, me, hook) {
    await this.#kojo.o_s_movie(nature, sys_get_callname(this.id, 0));
  }

  async o_s_restaurant(nature, me, hook) {
    await this.#kojo.o_s_restaurant(nature, sys_get_callname(this.id, 0));
  }

  async o_s_dating(nature, me, hook) {
    await this.#kojo.o_s_dating(
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  async o_s_shopping(nature, me, hook) {
    await this.#kojo.o_s_shopping(
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  async cl_valentine(nature, me, hook) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_valentine',
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  async cl_fans(nature, me, hook) {
    await print_title_with_kojo(this.#kojo, 'cl_fans', nature);
  }

  async cl_christmas(nature, me, hook) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_christmas',
      nature,
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
    );
  }

  async load_talk() {
    const nature = get_chara_talk(this.id);
    const callname = sys_get_colored_callname(this.id, 0);
    if (
      era.get('cflag:60:妊娠阶段') >> pregnant_stage_enum.embryo &&
      !LifeEventMarks.get_marks(this.id).report
    ) {
      await this.#kojo.load_talk_pregnant(nature, callname);
    } else {
      await this.#kojo.load_talk_normal(
        nature,
        callname,
        sys_get_callname(this.id, this.id),
      );
    }
  }
};
