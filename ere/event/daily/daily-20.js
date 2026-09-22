const era = require('#/era-electron');

const sys_change_tired = require('#/system/chara/sys-change-tired');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum, base_attr_list } = require('#/data/train-const');

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

  #sub_easy_go(val = 1) {
    if (era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48) {
      this.#marks.easy_go = Math.max(this.#marks.easy_go - val, 0);
      this.#marks.radiant = Math.min(this.#marks.radiant + 1, 10);
    }
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
    this.#sub_easy_go();
  }

  async office_cook() {
    await this.#kojo['office_cook']({ ...this.#dict, eh: event_hooks });
    this.#marks.action = event_hooks.office_cook;
    this.#sub_easy_go();
  }

  async office_rest() {
    await this.#kojo['office_rest']({ ...this.#dict, eh: event_hooks });
    this.#marks.action = event_hooks.office_rest;
    this.#sub_easy_go(2);
  }

  async office_game() {
    await this.#kojo['office_game']({ ...this.#dict, eh: event_hooks });
    this.#marks.action = event_hooks.office_game;
    this.#sub_easy_go();
  }

  async school_atrium(hook) {
    const ret = await super.school_atrium(hook);
    this.#marks.action = event_hooks.school_atrium;
    this.#sub_easy_go();
    return ret;
  }

  async s_a_tree_hollow(sky, me, hook) {
    await this.#kojo['s_a_tree_hollow'](this.#dict);
  }

  async s_a_dating(sky, me, hook) {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async school_rooftop(hook) {
    await this.#kojo['school_rooftop'](
      generate_dictionary(this.id, { uma: !0 }),
    );
    this.#marks.action = event_hooks.school_rooftop;
    this.#sub_easy_go();
  }

  async out_river(hook, extra) {
    this.#marks.action = event_hooks.out_river;
    return await super.out_river(hook, extra);
  }

  async o_r_walking(sky, me) {
    await this.#kojo['o_r_walking'](this.#dict);
    this.#sub_easy_go();
  }

  async o_r_fishing(sky, me, hook, extra) {
    hook.override = true;
    const dict = this.#dict;
    await this.#kojo['o_r_fishing'](dict);
    const [ret] = await this.#kojo['orf_loc'](dict);
    let dice = get_random_value(0, 99);
    const fill_d_fish = (...p) => {
      dict.fish = 1;
      let ap = p[0];
      while (dice >= ap) {
        ap += p[dict.fish];
        dict.fish++;
      }
    };
    let key;
    switch (ret) {
      case 1:
        key = 'orf_creek';
        fill_d_fish(20, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 3);
        break;
      case 2:
        key = 'orf_river';
        fill_d_fish(20, 7, 7, 7, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 4);
        break;
      case 3:
        key = 'orf_lake';
        fill_d_fish(20, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 4, 2);
        break;
      case 4:
        key = 'orf_sea';
        fill_d_fish(20, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 2);
    }
    await this.#kojo[key](dict);
    const op = {};
    switch (ret) {
      case 1:
        switch (dict.fish) {
          case 1:
            op.motivation = -1;
            break;
          case 2:
            op.base = [
              0.05 * era.get('maxbase:20:体力'),
              0.05 * era.get('maxbase:20:精力'),
            ];
            op.pt = 5;
            break;
          case 3:
            op.base = [
              0.1 * era.get('maxbase:20:体力'),
              0.1 * era.get('maxbase:20:精力'),
            ];
            op.pt = 5;
            break;
          case 4:
            op.base = [
              0.15 * era.get('maxbase:20:体力'),
              0.15 * era.get('maxbase:20:精力'),
            ];
            op.pt = 5;
            break;
          case 5:
            op.motivation = 1;
            op.pt = 5;
            break;
          case 6:
            op.motivation = 1;
            op.pt = 10;
            break;
          case 7:
            sys_change_tired(this.id, -1);
            op.pt = 5;
            break;
          case 8:
            sys_change_tired(this.id, -1);
            op.pt = 10;
            break;
          case 9:
            era.set(`base:${this.id}:药物残留`, 0);
            op.pt = 10;
            break;
          case 10:
            op.motivation = 4;
            op.pt = 10;
            break;
          case 11:
            op.base = [
              0.2 * era.get('maxbase:20:体力'),
              0.2 * era.get('maxbase:20:精力'),
            ];
            op.pt = 10;
            break;
          case 12:
            era.set(`base:${this.id}:药物残留`, 0);
            era.set(`status:${this.id}:偏头痛`, 0);
            op.motivation = 4;
            op.pt = 20;
        }
        break;
      case 2:
        switch (dict.fish) {
          case 1:
            op.attr = base_attr_list.map(() => -1);
            break;
          case 2:
            op.attr = base_attr_list.map(() => 1);
            break;
          case 3:
            op.attr = base_attr_list.map(() => 1 + Math.random());
            break;
          case 4:
            op.attr = base_attr_list.map(() => 2);
            break;
          case 5:
            op.attr = { [attr_enum.speed]: 5 };
            break;
          case 6:
            op.attr = { [attr_enum.endurance]: 5 };
            break;
          case 7:
            op.attr = { [attr_enum.strength]: 5 };
            break;
          case 8:
            op.attr = { [attr_enum.toughness]: 5 };
            break;
          case 9:
            op.attr = { [attr_enum.intelligence]: 5 };
            break;
          case 10:
            op.attr = { [attr_enum.speed]: 10 };
            break;
          case 11:
            op.attr = { [attr_enum.endurance]: 10 };
            break;
          case 12:
            op.attr = { [attr_enum.strength]: 10 };
            break;
          case 13:
            op.attr = { [attr_enum.toughness]: 10 };
            break;
          case 14:
            op.attr = { [attr_enum.intelligence]: 10 };
            break;
          case 15:
            op.attr = base_attr_list.map(() => 10);
        }
        break;
      case 3:
        switch (dict.fish) {
          case 1:
            era.add('flag:当前马币', -5);
            break;
          case 2:
            era.add('flag:当前马币', 1);
            break;
          case 3:
            era.add('flag:当前马币', 2);
            break;
          case 4:
            era.add('flag:当前马币', 3);
            break;
          case 5:
            era.add('flag:当前马币', 4);
            break;
          case 6:
            era.add('flag:当前马币', 5);
            break;
          case 7:
            era.add('flag:当前马币', 6);
            break;
          case 8:
            era.add('flag:当前马币', 7);
            break;
          case 9:
            era.add('flag:当前马币', 8);
            break;
          case 10:
            era.add('flag:当前马币', 15);
            break;
          case 11:
            era.add('flag:当前马币', 16);
            break;
          case 12:
            era.add('flag:当前马币', 17);
            break;
          case 13:
            era.add('global:金钱加成', 1);
            break;
          case 14:
            era.add('flag:当前马币', 30);
            era.add('global:金钱加成', 1);
        }
        break;
      case 4:
        switch (dict.fish) {
          case 1:
            era.add('flag:当前声望', -3);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            era.add('flag:当前声望', 2);
            break;
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            era.add('flag:当前声望', 4);
            break;
          case 13:
            era.add('global:声望加成', 1);
            break;
          case 14:
            era.add('flag:当前声望', 10);
            era.add('global:声望加成', 1);
        }
    }
    if (Object.keys(op).length > 0 && all_reward_in_event(this.id, op)) {
      await era.waitAnyKey();
    }
    this.#sub_easy_go(2);
  }

  async out_shopping(hook) {
    const ret = await super.out_shopping(hook);
    this.#marks.action = event_hooks.out_shopping;
    this.#sub_easy_go();
    return ret;
  }

  async o_s_drawing(sky, me, hook) {
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
    const ret = await this.#kojo['o_s_drawing']({ ...this.#dict, dice });
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
  }

  async o_s_movie(sky, me, hook) {
    await this.#kojo['o_s_movie'](this.#dict);
  }

  async o_c_pray(sky, me, dice, hook) {
    await this.#kojo['o_c_pray'](this.#dict);
    this.#marks.action = event_hooks.out_church;
    this.#sub_easy_go();
  }

  async out_station(hook) {
    this.#marks.action = event_hooks.out_station;
    this.#sub_easy_go();
    return await super.out_station(hook);
  }

  async o_s_restaurant(sky, me, hook) {
    await this.#kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating(sky, me, hook) {
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

  async good_night(hook) {
    if (era.get(`love:${this.id}`) < 75) {
      return await super.good_night(hook);
    }
    const sky = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const s_awake = sys_check_awake(this.id);
    const m_awake = sys_check_awake(0);
    if (s_awake && m_awake) {
      const check = get_custom_check(this.id).is_want_make_love();
      if (check > 0) {
        const [ret] = await print_title_with_kojo(this.#kojo, 'gn_sex', sky, {
          check,
          ...this.#dict,
        });
        if (check === 2) {
          hook.arg = 2;
        } else {
          hook.arg = ret === 1 ? 1 : 0;
        }
        return;
      }
    }
    this.good_night_normal(sky, me, s_awake, m_awake);
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

  async week_start(hook, extra, ebj) {
    if (ebj.arg === 'ws_happy_birthday') {
      await print_title_with_kojo(
        this.#kojo,
        'ws_happy_birthday',
        get_chara_talk(this.id),
        this.#dict,
      );
    }
  }
};
