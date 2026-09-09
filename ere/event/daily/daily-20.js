const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');
const event_hooks = require('#/data/event/event-hooks');
const { base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return { ...generate_dictionary(this.id, { call: !0 }), eh: event_hooks };
  }

  get #marks() {
    return new SkyEduMarks();
  }

  good_morning() {
    this.#kojo['good_morning'](this.#dict);
  }

  select() {
    this.#kojo['select'](this.#dict);
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
    this.#marks.action = event_hooks.office_study;
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
    this.#marks.action = event_hooks.office_prepare;
  }

  async talk() {
    await this.#kojo['talk']({ ...this.#dict, eh: event_hooks });
    this.#marks.action = event_hooks.talk;
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
    this.#marks.action = event_hooks.office_gift;
  }

  async office_cook() {
    await this.#kojo['office_cook']({ ...this.#dict, eh: event_hooks });
    this.#marks.action = event_hooks.office_cook;
  }

  async office_rest() {
    await this.#kojo['office_rest']({ ...this.#dict, eh: event_hooks });
    this.#marks.action = event_hooks.office_rest;
  }

  async office_game() {
    this.#marks.action = event_hooks.office_game;
    return await super.office_game();
  }

  async s_a_tree_hollow(sky, me, hook) {
    await this.#kojo['a_s_a_tree_hollow'](this.#dict);
    this.#marks.action = event_hooks.school_atrium;
  }

  async s_a_dating(sky, me, hook) {
    await this.#kojo['s_a_dating'](this.#dict);
    this.#marks.action = event_hooks.school_atrium;
  }

  async school_rooftop() {
    await this.#kojo['school_rooftop'](
      generate_dictionary(this.id, { uma: !0 }),
    );
    this.#marks.action = event_hooks.school_rooftop;
  }

  async o_r_walking(sky, me) {
    await this.#kojo['o_r_walking'](this.#dict);
    this.#marks.action = event_hooks.out_river;
  }

  async o_s_arcade(sky, me, hook) {
    let dice = Math.random();
    if (dice < 0.05 && !this.#marks.o_s_reward) {
      dice = 0;
      this.#marks.o_s_reward = 1;
    } else if (dice < 0.2) {
      dice = 1;
    } else if (dice < 0.4) {
      dice = 2;
    } else if (dice < 0.7) {
      dice = 3;
    } else {
      dice = 4;
    }
    const ret = await this.#kojo['o_s_arcade']({ ...this.#dict, dice });
    if (ret['arcade'] === 2) {
      hook.override = true;
      let wait = false;
      switch (dice) {
        case 0:
          wait = all_reward_in_event(this.id, {
            attr: [30, 50, 30, 30, 50],
            pt: 50,
            motivation: 4,
          });
          break;
        case 1:
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 25),
            pt: 25,
            motivation: 2,
          });
          break;
        case 2:
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 15),
            pt: 15,
          });
          break;
        case 3:
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 8),
          });
      }
      wait && (await era.waitAnyKey());
    }
    this.#marks.action = event_hooks.out_shopping;
  }

  async o_s_movie(sky, me, hook) {
    await this.#kojo['o_s_movie'](this.#dict);
    this.#marks.action = event_hooks.out_shopping;
  }

  async o_c_pray(sky, me, dice, hook) {
    await this.#kojo['o_c_pray'](this.#dict);
    this.#marks.action = event_hooks.out_church;
  }

  async o_s_restaurant(sky, me, hook) {
    await this.#kojo['o_s_restaurant'](this.#dict);
    this.#marks.action = event_hooks.out_station;
  }

  async o_s_dating(sky, me, hook) {
    this.#marks.action = event_hooks.out_station;
    switch (this.#marks.o_s_dating) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        await this.#kojo['o_s_dating']({
          ...generate_dictionary(this.id, { uma: !0 }),
          dating: this.#marks.o_s_dating++,
        });
        break;
      case 6:
        await this.#kojo['o_s_dating']({
          ...generate_dictionary(this.id, { uma: !0 }),
          dating: this.#marks.o_s_dating++,
        });
        break;
      default:
        return await super.o_s_dating(sky, me, hook);
    }
    hook.override = true;
    sys_like_chara(this.id, 0, 20) && (await era.waitAnyKey());
  }

  good_night_normal(sky, me, c_awake, m_awake) {
    this.#kojo['good_night_normal'](generate_dictionary(this.id, { uma: !0 }));
  }

  async birthday(hook) {
    await print_title_with_kojo(
      this.#kojo,
      'birthday',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_new_year(sky, me, hook) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_new_year',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_valentine(sky, me, hook) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_valentine',
      get_chara_talk(this.id),
      generate_dictionary(this.id, { uma: !0 }),
    );
  }

  async cl_palace(sky, me) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_palace',
      get_chara_talk(this.id),
      generate_dictionary(this.id, { uma: !0 }),
    );
  }

  async cl_fans(sky, me, hook) {
    const spe = get_chara_talk(1);
    const condor = get_chara_talk(14);
    await print_title_with_kojo(
      this.#kojo,
      'cl_fans',
      get_chara_talk(this.id),
      {
        ...generate_dictionary(this.id, { uma: !0 }),
        SPE: spe.name,
        COLOR_1: spe.color,
        CONDOR: condor.name,
        COLOR_14: condor.color,
      },
    );
  }

  async cl_halloween(sky, me, hook) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_halloween',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_christmas(sky, me, hook) {
    await print_title_with_kojo(
      this.#kojo,
      'cl_christmas',
      get_chara_talk(this.id),
      this.#dict,
    );
  }
};
