const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_lust,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const {
  check_high_relation,
  get_inner_urara,
} = require('#/event/snippets/105200');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_date_obj } = require('#/data/date-indicator');
const EroParticipant = require('#/data/ero/ero-participant');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    this.#kojo.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
      check_high_relation(),
      sys_check_awake(this.id),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
      sys_get_colored_callname(this.id, 1),
      sys_get_colored_callname(this.id, 11),
      sys_get_colored_callname(this.id, 14),
      sys_get_colored_callname(this.id, 15),
      sys_get_colored_callname(this.id, 19),
      sys_get_colored_callname(this.id, 20),
      sys_get_colored_callname(this.id, 30),
      sys_get_colored_callname(this.id, 33),
      sys_get_colored_callname(this.id, 47),
      sys_get_colored_callname(this.id, 58),
      sys_get_colored_callname(this.id, 61),
      sys_get_colored_callname(this.id, 77),
      check_high_relation(),
    );
  }

  good_night_normal(urara, me, u_awake, m_awake) {
    this.#kojo.good_night_normal(
      urara,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_callname(this.id, this.id),
      check_high_relation(),
      u_awake,
      m_awake,
    );
  }

  async good_night_sex(urara, me, check) {
    return (
      (await this.#kojo.good_night_sex(
        urara,
        me,
        sys_get_colored_callname(this.id, 0),
        sys_get_callname(this.id, this.id),
        check_high_relation(),
        check,
      )) === 1
    );
  }

  async talk() {
    await this.#kojo.talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_check_awake(this.id),
    );
  }

  async office_gift() {
    await this.#kojo.office_gift(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 47),
    );
  }

  async o_c_pray(urara, me, dice, hook) {
    const callname = sys_get_colored_callname(this.id, 0);
    const edu_marks = new UraraEduMarks();
    const high_relation = check_high_relation();
    if (dice >= 0.5 && edu_marks.church === 1) {
      edu_marks.church = 2;
      const ret = await this.#kojo.church(
        urara,
        get_inner_urara(),
        me,
        callname,
        sys_get_colored_callname(this.id, 56),
        high_relation,
      );
      await print_event_name(this.#kojo.church.title, urara);
      const attr = new Array(5).fill(0);
      attr[ret === 1 ? attr_enum.endurance : attr_enum.speed] = 10;
      all_reward_in_event(this.id, { attr });
      return;
    }
    await this.#kojo.o_c_pray(urara, me, callname, high_relation, dice);
  }

  async o_r_fishing(urara, me, hook, extra) {
    await this.#kojo.o_r_fishing(
      urara,
      me,
      sys_get_colored_callname(this.id, 0),
      check_high_relation(),
      extra.jpy,
    );
  }

  async o_r_walking(urara, me) {
    await this.#kojo.o_r_walking(
      urara,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 30),
    );
  }

  async o_s_arcade(urara, me, hook) {
    const edu_marks = new UraraEduMarks();
    if (
      !edu_marks.spe_mach &&
      ((era.get('love:52') >= 50 && Math.random() < 0.3) ||
        era.get('mark:52:欢愉') ||
        era.get('mark:52:淫纹'))
    ) {
      edu_marks.spe_mach = 1;
      hook.override = true;
      await print_title_with_kojo(
        this.#kojo,
        'spe_mach',
        urara,
        get_inner_urara(),
        me,
        sys_get_colored_callname(this.id, 0),
        sys_get_colored_callname(this.id, 19),
        sys_get_colored_callname(this.id, 30),
      );
      begin_and_init_ero(52);
      set_palam_to_max(52, part_enum.anal);
      await quick_make_love(
        new EroParticipant(52, part_enum.hand),
        new EroParticipant(52, part_enum.anal),
        false,
      );
      end_ero_and_train();
      sys_change_lust(
        0,
        get_random_value(lust_from_palam, 2 * lust_from_palam),
      );
      sys_change_lust(
        52,
        get_random_value(lust_from_palam, 2 * lust_from_palam),
      );
      era.add('exp:52:肛交次数', 1);
      switch (era.get('talent:52:淫臀')) {
        case -4:
          era.set('talent:52:淫臀', 0);
          break;
        case 0:
          era.set('talent:52:淫臀', 1);
      }
      era.set('talent:52:肠道敏感', 1);
      return;
    }
    await this.#kojo.o_s_arcade(
      urara,
      get_chara_talk(3),
      get_chara_talk(24),
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 3),
      sys_get_colored_callname(this.id, 24),
    );
  }

  async o_s_drawing(urara, me, hook) {
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.spe_item && Math.random() < 0.2) {
      edu_marks.spe_item = 1;
      hook.override = true;
      await this.#kojo.spe_item(
        urara,
        get_inner_urara(),
        get_chara_talk(61),
        me,
        sys_get_colored_callname(this.id, 0),
        sys_get_colored_callname(this.id, 1),
        sys_get_colored_callname(this.id, 14),
        sys_get_colored_callname(this.id, 61),
      );
      await print_event_name(this.#kojo.spe_item.title, urara);
      era.set('talent:52:工口好奇', -1);
      return;
    }
    let ticket = !edu_marks.ticket && Math.random() < 0.2;
    await this.#kojo.o_s_drawing(
      urara,
      me,
      sys_get_callname(this.id, 0),
      ticket,
    );
    if (ticket) {
      edu_marks.ticket = 1;
    }
  }

  async o_s_ktv(urara, me, hook) {
    await this.#kojo.o_s_ktv(
      urara,
      get_chara_talk(15),
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 15),
    );
  }

  async o_s_movie(urara, me, hook) {
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.cor_game && urara.sex_code === 0 && Math.random() < 0.3) {
      edu_marks.cor_game = 1;
      hook.override = true;
      const ret = await print_title_with_kojo(
        this.#kojo,
        'cor_game',
        urara,
        get_inner_urara(),
        get_chara_talk(7),
        me,
        sys_get_colored_callname(this.id, 0),
      );

      era.set('status:52:沉睡', 1);
      begin_and_init_ero(0, 52);
      if (ret[0] === 1) {
        set_palam_to_max(52, part_enum.clitoris);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.clitoris),
          false,
        );
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.breast),
          false,
        );
      } else {
        set_palam_to_max(52, part_enum.mouth);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.mouth),
          false,
        );
      }
      era.set('status:52:沉睡', 0);
      end_ero_and_train();
      return;
    }
    await this.#kojo.o_s_movie(urara, me, sys_get_colored_callname(this.id, 0));
  }

  async o_s_restaurant(urara, me, hook) {
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.hid_menu && era.get(`love:${this.id}`) >= 75) {
      edu_marks.hid_menu = 1;
      hook.override = true;
      await print_title_with_kojo(
        this.#kojo,
        'hid_menu',
        urara,
        get_inner_urara(),
        me,
        sys_get_callname(this.id, 0),
        check_high_relation(),
      );
      update_kiss_exp(get_date_obj(), this.id, 0);
      return;
    }
    await this.#kojo.o_s_restaurant(
      urara,
      me,
      sys_get_callname(this.id, 0),
      sys_get_colored_callname(this.id, 30),
      sys_get_colored_callname(this.id, 33),
    );
  }

  async o_s_dating(urara, me) {
    await this.#kojo.o_s_dating(
      urara,
      me,
      sys_get_callname(this.id, 0),
      sys_get_colored_callname(this.id, 47),
      sys_get_colored_callname(this.id, 56),
      sys_get_colored_callname(this.id, 58),
      sys_get_colored_callname(this.id, 77),
    );
  }

  async o_s_shopping(urara, me, hook) {
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.try_dress && era.get(`love:${this.id}`) >= 25) {
      edu_marks.try_dress = 1;
      hook.override = true;
      const [ret] = await print_title_with_kojo(
        this.#kojo,
        'try_dress',
        urara,
        get_inner_urara(),
        me,
        sys_get_colored_callname(this.id, 0),
        check_high_relation(),
      );
      sys_like_chara(52, 0, (ret === 1) * 10, true, (ret === 2) * 5) &&
        (await era.waitAnyKey());
      return;
    }
    await this.#kojo.o_s_shopping(
      urara,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(urara, me, hook) {
    const callname = sys_get_colored_callname(this.id, 0);
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.time_cap && era.get('love:52') === 100) {
      edu_marks.time_cap = 1;
      await print_title_with_kojo(
        this.#kojo,
        'time_cap',
        urara,
        get_inner_urara(),
        me,
        callname,
      );
      hook.override = true;
      if (
        all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          relation: 10,
        })
      ) {
        await era.waitAnyKey();
      }
      return;
    }
    await this.#kojo.s_a_tree_hollow(urara, me, callname);
  }

  async s_a_dating(urara, me) {
    await this.#kojo.s_a_dating(
      urara,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 20),
      sys_get_colored_callname(this.id, 30),
      sys_get_colored_callname(this.id, 56),
    );
  }

  async school_rooftop(hook) {
    const urara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_colored_callname(this.id, 0);
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.rof_time && Math.random() < 0.3) {
      edu_marks.rof_time = 1;
      await print_title_with_kojo(
        this.#kojo,
        'rof_time',
        urara,
        get_inner_urara(),
        me,
        callname,
        check_high_relation(),
      );
      hook.override = true;
      if (all_reward_in_event(this.id, { base: [300], relation: 10 })) {
        await era.waitAnyKey();
      }
      return;
    }
    await this.#kojo.school_rooftop(
      urara,
      me,
      callname,
      sys_get_colored_callname(this.id, 15),
      sys_get_colored_callname(this.id, 32),
      sys_get_colored_callname(this.id, 47),
      sys_get_colored_callname(this.id, 61),
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
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 61),
    );
  }

  /** @param {HookArg} hook */
  async office_rest(hook) {
    const urara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_colored_callname(this.id, 0);
    const edu_marks = new UraraEduMarks();
    if (!edu_marks.lets_slp && Math.random() < 0.3) {
      edu_marks.lets_slp = 1;
      await print_title_with_kojo(
        this.#kojo,
        'lets_slp',
        urara,
        get_inner_urara(),
        me,
        callname,
        check_high_relation(),
      );
      hook.override = true;
      if (
        all_reward_in_event(this.id, {
          base: [0, 300],
          relation: 10,
          love: 5,
        })
      ) {
        await era.waitAnyKey();
      }
      return;
    }
    await this.#kojo.office_rest(urara, me, callname);
  }

  async office_prepare() {
    await this.#kojo.office_prepare(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async load_talk() {
    await this.#kojo.load_talk(
      get_chara_talk(this.id),
      get_inner_urara(),
      sys_get_colored_callname(this.id, 0),
      era.get('exp:52:生产次数') +
        (era.get('cflag:52:妊娠状态') >> pregnant_stage_enum.embryo > 0),
      check_high_relation(),
    );
  }

  async cl_christmas(urara, me, hook) {
    if (
      era.get('cflag:52:育成回合计时') !== 47 + 48 ||
      sys_reg_race(52).curr.race !== -1
    ) {
      return await super.cl_christmas(urara, me, hook);
    }
    const race_result = RaceHistory.get(this.id).get_result(47 + 48);
    const [ret] = await print_title_with_kojo(
      this.#kojo,
      'cl_christmas',
      urara,
      get_inner_urara(),
      me,
      sys_get_callname(this.id, 0),
      check_high_relation(),
      +(race_result.race === race_enum.arim_kin && race_result.rank),
    );
    const attr = new Array(5).fill(0);
    switch (ret) {
      case 1:
        attr[attr_enum.speed] =
          attr[attr_enum.endurance] =
          attr[attr_enum.intelligence] =
            10;
        break;
      case 2:
        attr[attr_enum.strength] = attr[attr_enum.toughness] = 10;
        break;
      case 3:
        await quick_into_sex(52);
        attr.fill(5);
    }
    if (all_reward_in_event(this.id, { attr, relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  async week_start(_, __, ebj) {
    if (ebj?.arg?.punish === 1) {
      await this.#kojo.after_punish(
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
        check_high_relation(),
      );
    }
  }

  async basement_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'basement_end',
      get_chara_talk(this.id),
      get_inner_urara(),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }
};
