const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const { check_slavery } = require('#/event/snippets/check-slavery');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (!sys_check_awake(100)) {
      return super.select();
    }
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      check_slavery(this.id),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      check_slavery(this.id),
    );
  }

  async talk() {
    if (!sys_check_awake(100)) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 301),
      check_slavery(this.id),
    );
  }

  async office_gift() {
    await this.#kojo.office_gift(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id), get_chara_talk(0));
  }

  async office_prepare() {
    await this.#kojo.office_prepare(get_chara_talk(this.id));
  }

  async office_game() {
    await this.#kojo.office_game(get_chara_talk(this.id));
  }

  async s_a_tree_hollow(acute) {
    const edu_marks = new AcuteEduMarks();
    if (era.get('love:100') >= 50 && !edu_marks.possessive) {
      edu_marks.possessive = 1;
      return await this.#kojo.possessive(
        acute,
        sys_get_colored_callname(this.id, 0),
      );
    }
    await this.#kojo.s_a_tree_hollow(acute);
  }

  async s_a_dating(acute, me) {
    const edu_marks = new AcuteEduMarks();
    if (era.get('love:100') >= 90 && !edu_marks.kiss) {
      edu_marks.kiss = 1;
      return await this.#kojo.kiss(acute, get_chara_talk(20), me);
    }
    await this.#kojo.s_a_dating(acute, me);
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(get_chara_talk(this.id), get_chara_talk(0));
  }

  async o_r_fishing(acute, me, hook, extra) {
    await this.#kojo.o_r_fishing(acute, me, extra.jpy);
  }

  async o_r_walking(acute, me) {
    await this.#kojo.o_r_walking(acute, sys_get_colored_callname(this.id, 0));
  }

  async o_c_pray(acute, me, dice) {
    await this.#kojo.o_c_pray(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
      dice,
    );
  }

  async o_s_arcade(acute, me, hook) {
    const edu_marks = new AcuteEduMarks();
    if (
      !edu_marks.boxing &&
      era.get('relation:100:0') >= 200 &&
      era.get('love:100') >= 50
    ) {
      await this.#kojo.boxing(acute, me, sys_get_colored_callname(this.id, 0));
      edu_marks.boxing = 1;
      begin_and_init_ero(0, 100);
      await quick_make_love(
        new EroParticipant(0, part_enum.hit),
        new EroParticipant(100, part_enum.anal, 0.5),
        false,
      );
      end_ero_and_train();
      hook.override = true;
      era.println();
      get_attr_and_print_in_event(100, [0, 0, 0, 10], 0, undefined, true);
      sys_like_chara(100, 0, 20);
      add_jewel_reward(100, 8, 100);
      await era.waitAnyKey();
    } else {
      await this.#kojo.o_s_arcade(
        acute,
        me,
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async o_s_drawing(acute, me) {
    const special_item =
      !era.get('item:斗魂注入鞭（S用）') && Math.random() < 0.2;
    await this.#kojo.o_s_drawing(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 301),
      special_item,
    );
    if (special_item) {
      era.set('item:斗魂注入鞭（S用）', 1);
    }
  }

  async o_s_ktv(acute) {
    await this.#kojo.o_s_ktv(acute);
  }

  async o_s_movie(acute) {
    await this.#kojo.o_s_movie(acute, sys_get_colored_callname(this.id, 0));
  }

  async o_s_restaurant(acute, me) {
    await this.#kojo.o_s_restaurant(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_dating(acute, me, hook) {
    const sex = Math.random() < 0.5 && era.get('love:100') >= 75;
    await this.#kojo.o_s_dating(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
      sex,
    );
    if (sex) {
      hook.override = true;
      era.println();
      if (era.get('item:斗魂注入鞭（S用）') > 0) {
        begin_and_init_ero(0, 100);
        await quick_make_love(
          new EroParticipant(0, part_enum.hit),
          new EroParticipant(100, part_enum.anal, 0.5),
          false,
        );
        end_ero_and_train();
        get_attr_and_print_in_event(
          100,
          [0, 0, 0, 10, 0],
          0,
          [-100, 100],
          true,
        );
        sys_change_motivation(100, 1);
        add_jewel_reward(100, 8, 100);
        era.println();
        get_attr_and_print_in_event(0, [0, 0, 10], 0, undefined, true);
        add_jewel_reward(0, 7, 100);
      } else {
        get_attr_and_print_in_event(100, [0, 0, 10], 0, undefined, true);
        add_jewel_reward(100, 7, 100);
        era.println();
        get_attr_and_print_in_event(0, [0, 10], 0, [-100]);
      }
      await era.waitAnyKey();
    }
  }

  async o_s_shopping(acute, me) {
    await this.#kojo.o_s_shopping(
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
    );
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

  async basement_end() {
    const acute = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    if (acute.sex_code === 1 || me.sex_code === 0) {
      return await super.basement_end();
    }
    await print_title_with_kojo.ending(
      this.#kojo,
      'basement_end',
      acute,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }
};
