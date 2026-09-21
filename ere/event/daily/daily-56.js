const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedDaily = require('#/event/daily/daily-common');
const { add_event, cb_enum } = require('#/event/queue');
const { set_luck_result } = require('#/event/snippets/105600');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_date_obj } = require('#/data/date-indicator');
const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 58),
      sys_get_colored_callname(this.id, 98),
    );
  }

  good_night_normal(kitaru, me, c_awake, m_awake) {
    if (!c_awake || !m_awake) {
      return super.good_night_normal(kitaru, me, c_awake, m_awake);
    }
    this.#kojo.good_night_normal(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async good_night_sex(kitaru, me, check) {
    return (
      (await this.#kojo.good_night_sex(
        kitaru,
        me,
        sys_get_colored_callname(this.id, 0),
        check,
      )) === 1
    );
  }

  async talk() {
    if (!sys_check_awake(56)) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      new FukuEventMarks().luck_train,
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
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_study() {
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      get_chara_talk(1),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
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
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_game() {
    const edu_marks = new FukuEventMarks();
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      edu_marks.game_times,
    );
    edu_marks.game_times < 3 && edu_marks.game_times++;
    if (edu_marks.game_times === 3) {
      edu_marks.game_times = 4;
      add_event(
        event_hooks.office_game,
        new EventObject(56, cb_enum.edu).set_arg('fortune_game_duel_1'),
      );
    }
  }

  async s_a_tree_hollow(kitaru) {
    await this.#kojo.s_a_tree_hollow(kitaru);
  }

  async s_a_dating(kitaru, me) {
    await this.#kojo.s_a_dating(kitaru, me);
  }

  async s_r_lunch(kitaru, me) {
    await this.#kojo.s_r_lunch(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_r_fishing(kitaru, me) {
    await this.#kojo.o_r_fishing(kitaru, me);
  }

  async o_r_walking(kitaru, me) {
    await this.#kojo.o_r_walking(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_arcade(kitaru, me) {
    await this.#kojo.o_s_arcade(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_drawing(kitaru, me) {
    await this.#kojo.o_s_drawing(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_ktv(kitaru, me) {
    await this.#kojo.o_s_ktv(kitaru, me, sys_get_colored_callname(this.id, 0));
  }

  async o_s_movie(kitaru, me) {
    await this.#kojo.o_s_movie(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async out_church() {
    const luck = era.get('status:56:PTSD') === 1 ? 3 : get_random_value(0, 3);
    await this.#kojo.out_church(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      luck,
    );
    if (era.get('status:56:运势依赖')) {
      set_luck_result(luck);
    }
  }

  async o_s_restaurant(kitaru) {
    await this.#kojo.o_s_restaurant(
      kitaru,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_dating(kitaru, me) {
    await this.#kojo.o_s_dating(
      kitaru,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_s_shopping(kitaru, me, hook) {
    const edu_marks = new FukuEventMarks();
    let haircut = false;
    if (era.get('love:56') >= 75) {
      if (edu_marks.haircut === 0) {
        edu_marks.haircut = 1;
        await print_title_with_kojo(
          this.#kojo,
          'haircut',
          kitaru,
          me,
          sys_get_colored_callname(this.id, 0),
          sys_get_colored_callname(this.id, 2),
          sys_get_colored_callname(this.id, 62),
          sys_get_colored_callname(this.id, 58),
          sys_get_colored_callname(this.id, 74),
        );
        haircut = true;
      } else if (
        (haircut = await select_yes_or_no(
          this.#kojo.get_haircut_confirm(kitaru),
        ))
      ) {
        await this.#kojo.haircut_intro(
          kitaru,
          me,
          sys_get_colored_callname(this.id, 0),
        );
      }
    }
    if (haircut) {
      switch (await this.#kojo.haircut_select(kitaru, me)) {
        case 1:
          era.set('cstr:56:后发', 'shor_hair');
          break;
        case 2:
          era.set('cstr:56:后发', 'long_straight');
      }
      sys_change_hair(this.id);
    } else {
      await this.#kojo.o_s_shopping(
        kitaru,
        me,
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async week_start(_, __, ebj) {
    let key;
    switch (ebj?.arg) {
      case 'p1':
        key = 'punishment_1';
        break;
      case 'p2':
        key = 'punishment_2';
        break;
      case 'p3':
        key = 'punishment_3';
    }
    if (key) {
      await print_title_with_kojo(
        this.#kojo,
        key,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async load_talk() {
    await this.#kojo.load_talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async cl_temple_fair(kitaru, me, hook) {
    if (kitaru.sex_code === 1) {
      return await super.cl_temple_fair(kitaru, me, hook);
    }
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'cl_temple_fair',
          kitaru,
          me,
          sys_get_colored_callname(this.id, 0),
        )
      )[0] === 1
    ) {
      await quick_into_sex(this.id);
    }
  }

  async cl_halloween(kitaru, me) {
    if (kitaru.sex_code === 1) {
      return await super.cl_halloween(kitaru, me);
    }
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'cl_halloween',
          kitaru,
          me,
          sys_get_colored_callname(this.id, 0),
        )
      )[0] === 2
    ) {
      update_kiss_exp(get_date_obj(), 0, this.id, true);
    }
  }
};
