const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  async cl_new_year(teio, me) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_new_year',
      teio,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async cl_valentine(teio, me) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'cl_valentine',
          teio,
          me,
          sys_get_colored_callname(this.id, 0),
        )
      )[0] === 2
    ) {
      await quick_into_sex(this.id);
    }
  }

  async cl_temple_fair(teio, me) {
    if (
      (
        await print_title_with_kojo(this.#kojo, 'cl_temple_fair', teio, me)
      )[0] === 1
    ) {
      await quick_into_sex(this.id);
    }
  }

  async cl_halloween(teio, me) {
    await print_title_with_kojo(this.#kojo, 'cl_halloween', teio, me);
  }

  async cl_christmas(teio, me) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_christmas',
      teio,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  good_morning() {
    const life_marks = LifeEventMarks.get_marks(this.id);
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      life_marks.b_escape,
    );
    life_marks.b_escape = 0;
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(3)) {
      return super.good_night_normal(
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_check_awake(this.id),
        sys_check_awake(0),
      );
    }
    await super.good_night(hook);
  }

  good_night_normal(teio, me) {
    this.#kojo.good_night_normal(teio, me, sys_get_callname(this.id, 0));
  }

  async good_night_sex(teio, me, check) {
    this.#kojo.gn_sex_intro(teio, me);
    if (
      await select_yes_or_no(
        this.#kojo.gn_sex_confirm(teio, me),
        i18n().timon.daily.gn_sex_yes,
        i18n().timon.daily.gn_sex_no,
      )
    ) {
      return true;
    } else {
      await this.#kojo.gn_sex_reject(
        teio,
        me,
        sys_get_colored_callname(this.id, 0),
        check,
      );
    }
    return false;
  }

  async load_talk() {
    const teio_marks = LifeEventMarks.get_marks(3),
      my_marks = LifeEventMarks.get_marks(0);
    if (
      (era.get('cflag:3:妊娠阶段') !== 1 << pregnant_stage_enum.no &&
        !teio_marks.report) ||
      (my_marks.sperm === 3 &&
        era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.no > 0 &&
        my_marks.report !== 1) ||
      era.get('exp:3:生产次数') > 0 ||
      era.get('exp:3:孩子数量') > 0
    ) {
      await this.#kojo.load_talk(
        get_chara_talk(this.id),
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(this.id), get_chara_talk(0));
  }

  async office_game() {
    await this.#kojo.office_game(get_chara_talk(this.id), get_chara_talk(0));
  }

  async office_gift() {
    await this.#kojo.office_gift(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(this.id), get_chara_talk(0));
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id), get_chara_talk(0));
  }

  async o_r_fishing(teio, me) {
    await this.#kojo.o_r_fishing(
      teio,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_r_walking(teio, me) {
    await this.#kojo.o_r_walking(teio, me);
  }

  async o_s_arcade(teio, me) {
    await this.#kojo.o_s_arcade(teio, me);
  }

  async o_s_drawing(teio, me) {
    await this.#kojo.o_s_drawing(
      teio,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_ktv(teio, me) {
    await this.#kojo.o_s_ktv(teio, me, sys_get_colored_callname(this.id, 0));
  }

  async o_s_movie(teio, me) {
    await this.#kojo.o_s_movie(teio, me);
  }

  async o_c_pray(teio, me, dice) {
    await this.#kojo.o_c_pray(
      teio,
      me,
      sys_get_colored_callname(this.id, 0),
      dice,
    );
  }

  async s_a_tree_hollow(teio, me) {
    await this.#kojo.s_a_tree_hollow(teio);
  }

  async s_a_dating(teio, me) {
    await this.#kojo.s_a_dating(teio, me);
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(get_chara_talk(this.id));
  }

  select() {
    if (!sys_check_awake(0) || !sys_check_awake(3)) {
      return super.select();
    }
    const life_marks = LifeEventMarks.get_marks(3);
    this.#kojo.select(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      life_marks.b_escape,
    );
    life_marks.b_escape = 0;
  }

  async talk() {
    if (!sys_check_awake(3)) {
      return await super.talk();
    }
    await this.#kojo.talk(get_chara_talk(this.id), get_chara_talk(0));
  }

  async end_talk() {
    await this.#kojo.end_talk(get_chara_talk(this.id), get_chara_talk(0));
  }
};
