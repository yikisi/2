const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const { add_event, cb_enum } = require('#/event/queue');
const {
  fill_moho_in_dict,
  reset_no_action,
} = require('#/event/snippets/104400');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SweepEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-44');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const SweepLifeMarks = require('#/data/event/life-event-marks/life-event-marks-44');

const { i18n } = require('#/i18n/selector');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return fill_moho_in_dict(
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  get #marks() {
    return new SweepEduMarks();
  }

  /** @param {HookArg} hook */
  async #check_out_disabled(hook) {
    if (this.#marks.agreement > 0) {
      hook.override = true;
      await this.#kojo['out_disabled_in_agreement'](this.#dict);
      return true;
    }
    return false;
  }

  good_morning() {
    this.select();
  }

  select() {
    if (!sys_check_awake(this.id)) {
      return this.#kojo['gn_normal_sleep'](this.#dict);
    }
    get_chara_talk(68);
    this.#kojo['select']({
      CALL_68: sys_get_callname(this.id, 68),
      ...this.#dict,
    });
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
  }

  async talk() {
    if (!sys_check_awake(this.id)) {
      this.#kojo['gn_normal_sleep'](this.#dict);
      await era.waitAnyKey();
      return;
    }
    await this.#kojo['talk'](this.#dict);
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async office_cook() {
    await this.#kojo['office_cook'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](this.#dict);
  }

  async office_game() {
    await this.#kojo['office_game']({ game: this.#marks.game, ...this.#dict });
    if (this.edu_weeks >= 12) {
      this.#marks.game++;
    }
  }

  async borrow_money() {
    const borrow = this.#marks.borrow;
    await this.#kojo['borrow_money']({
      borrow,
      ...this.#dict,
    });
    if (this.edu_weeks >= 12) {
      if (!borrow) {
        era.add('flag:当前马币', 100);
      }
      this.#marks.borrow++;
    }
  }

  async s_a_tree_hollow(sweep, me, hook) {
    await this.#kojo['s_a_tree_hollow']({
      tree_hollow: this.#marks.tree_hollow,
      ...this.#dict,
    });
    if (this.edu_weeks >= 12) {
      this.#marks.tree_hollow++;
    }
  }

  async s_a_dating(sweep, me, hook) {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async out_river(hook, extra) {
    if (await this.#check_out_disabled(hook)) {
      return;
    }
    await super.out_river(hook, extra);
  }

  async o_r_fishing(sweep, me, hook, extra) {
    await this.#kojo['o_r_fishing'](this.#dict);
  }

  async o_r_walking(sweep, me) {
    await this.#kojo['o_r_walking'](this.#dict);
  }

  async out_shopping(hook) {
    if (await this.#check_out_disabled(hook)) {
      return;
    }
    await super.out_shopping(hook);
  }

  async o_s_arcade(sweep, me, hook) {
    await this.#kojo['o_s_arcade'](this.#dict);
  }

  async o_s_drawing(sweep, me, hook) {
    const dict = this.#dict;
    await this.#kojo['o_s_drawing']({
      drawing: this.#marks.drawing++,
      ...dict,
    });
    let r;
    while (r !== 2) {
      r = (await this.#kojo['osd_loop'](dict))[0];
    }
  }

  async o_s_ktv(sweep, me, hook) {
    await this.#kojo['o_s_ktv'](this.#dict);
  }

  async o_s_movie(sweep, me, hook) {
    await this.#kojo['o_s_movie'](this.#dict);
  }

  async out_church(hook) {
    if (await this.#check_out_disabled(hook)) {
      return;
    }
    await super.out_church(hook);
  }

  async o_c_pray(sweep, me, dice, hook) {
    await this.#kojo['o_c_pray']({ dice, ...this.#dict });
  }

  async out_station(hook) {
    if (await this.#check_out_disabled(hook)) {
      return;
    }
    await super.out_station(hook);
  }

  async o_s_restaurant(sweep, me, hook) {
    await this.#kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating(sweep, me, hook) {
    await this.#kojo['o_s_dating'](this.#dict);
  }

  async o_s_shopping(sweep, me, hook) {
    await this.#kojo['o_s_shopping'](this.#dict);
  }

  good_night_normal(sweep, me, c_awake, m_awake) {
    if (this.edu_weeks >= 12 && !m_awake && !this.#marks.slave_rest) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.daily).set_arg('slave_rest'),
      );
      this.#marks.slave_rest = 1;
    } else if (!c_awake) {
      this.#kojo['gn_normal_sleep'](this.#dict);
    } else {
      return super.good_night_normal(sweep, me, c_awake, m_awake);
    }
  }

  async good_night_sex(sweep, me, check) {
    return (
      (await this.#kojo['good_night_sex']({ check, ...this.#dict }))['sex'] ===
      1
    );
  }

  async birthday(hook) {
    const fuji = get_chara_talk(5);
    const maya = get_chara_talk(24);
    const zob_zoy = get_chara_talk(47);
    await print_title_with_kojo(
      this.#kojo,
      'birthday',
      get_chara_talk(this.id),
      {
        FUJI: fuji.name,
        COLOR_5: fuji.color,
        MAYA: maya.name,
        COLOR_24: maya.color,
        ZOB_ZOY: zob_zoy.name,
        COLOR_47: zob_zoy.color,
        ...this.#dict,
      },
    );
  }

  async week_end(hook, extra, ebj) {
    if (ebj?.arg === 'no_action_check') {
      const life_marks = new SweepLifeMarks();
      if (!life_marks.no_action) {
        await this.#kojo['ws_no_action_2_weeks'](this.#dict);
        life_marks.no_action = 2;
      }
    } else if (ebj?.arg === 'slave_rest') {
      await print_title_with_kojo(
        this.#kojo,
        'gn_rest',
        get_chara_talk(this.id),
        this.#dict,
      );
      if (all_reward_in_event(0, { attr: [100, 200] })) {
        await era.waitAnyKey();
      }
    }
  }

  async load_talk() {
    await this.#kojo['load_talk'](this.#dict);
  }

  async end_talk(hentai) {
    await this.#kojo['end_talk']({ hentai, ...this.#dict });
  }

  async run(hook, extra, ebj) {
    if (
      hook.hook !== event_hooks.week_start &&
      hook.hook !== event_hooks.week_end &&
      hook.hook !== event_hooks.select &&
      hook.hook !== event_hooks.good_morning &&
      hook.hook !== event_hooks.good_night
    ) {
      reset_no_action();
    }
    return super.run(hook, extra, ebj);
  }
};
