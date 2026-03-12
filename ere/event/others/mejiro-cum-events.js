const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_attr_and_print,
  sys_change_lust,
} = require('#/system/sys-calc-base-cflag');

const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

/**
 * @typedef CityProgress
 * @property {number} c
 * @property {number} p
 */
/**
 * @typedef MejiroEvent
 * @property {function(CityProgress,number):Promise} h
 * @property {function(CityProgress?,number?):boolean} [f]
 */

/**
 * @param {MejiroEvent[]} events
 * @param {MejiroCumEvents} _this
 * @param {CityProgress} progress
 * @param {number} lust
 */
function get_random_event(events, _this, progress, lust) {
  return (
    get_random_entry(
      events.filter(({ f = () => true }) => f.call(_this, progress, lust)),
    ) || {
      async h() {},
    }
  ).h;
}

const action_type_enum = { good: 0, normal: 1, bad: 2, avg: 3 };

/**
 * @this MejiroCumEvents
 * @param {string} key
 * @param {Record<string,any>} dict
 */
async function bad_event_common(key, dict) {
  sys_change_lust(this.chara.id, get_random_value(100, 300));
  if (
    (
      await i18n().timon.cum_events[key]({ ...dict, first: +!this.params[key] })
    )[0] === 1
  ) {
    sys_change_lust(0, get_random_value(100, 300));
    return true;
  } else {
    sys_change_lust(this.chara.id, get_random_value(100, 300));
  }
  this.params[key] = true;
  return false;
}

class MejiroCumEvents {
  /** @type {CharaTalk} */
  chara;
  /** @type {Record<string,any>} */
  #dict = {};
  /** @type {Record<string,any>} */
  params = {};

  get #kojo() {
    return i18n().timon.cum_events;
  }

  /** @type {MejiroEvent[]} */
  good_events = [
    {
      async h(_, type) {
        const key = 'g_water';
        const d = {
          ...this.#dict,
          first: +!this.params[key],
          action: type ?? 0,
        };
        this.params[key] = true;
        await this.#kojo[key](d);
        sys_change_attr_and_print(0, attr_enum.hp, get_random_value(50, 100));
      },
    },
    {
      async h() {
        const key = 'g_lost_and_found';
        const reward = get_random_value(1, 3);
        await this.#kojo[key]({
          ...this.#dict,
          first: +!this.params[key],
          REWARD: reward.toString(),
        });
        this.params[key] = true;
        era.add('item:「恩宠」', reward);
      },
    },
    {
      async h() {
        const key = 'g_clothe';
        await this.#kojo[key]({
          ...this.#dict,
          first: +!this.params[key],
        });
        this.params[key] = true;
        sys_change_lust(0, -get_random_value(100, 300));
        sys_change_lust(this.chara.id, -get_random_value(100, 300));
      },
    },
    {
      async h() {
        const key = 'g_chair';
        switch (
          (
            await this.#kojo[key]({
              ...this.#dict,
              first: +!this.params[key],
            })
          )[0]
        ) {
          case 1:
            sys_change_lust(0, -get_random_value(200, 600));
            break;
          case 2:
            sys_change_lust(this.chara.id, -get_random_value(200, 600));
            break;
          case 3:
            sys_change_lust(0, -get_random_value(100, 300));
            sys_change_lust(this.chara.id, -get_random_value(100, 300));
        }
        this.params[key] = true;
      },
    },
    {
      async h(p) {
        const key = 'g_bus';
        await this.#kojo[key]({
          ...this.#dict,
          first: +!this.params[key],
        });
        p.c++;
        this.params[key] = true;
      },
    },
    {
      async h() {
        const key = 'g_lucky';
        const reward = get_random_value(1, 3);
        const ret = await this.#kojo[key]({
          ...this.#dict,
          first: +!this.params[key],
          REWARD: reward.toString(),
        });
        this.params[key] = true;
        if (ret[0] === 1) {
          era.add('item:「恩宠」', reward);
        } else {
          sys_change_attr_and_print(0, attr_enum.hp, get_random_value(50, 100));
        }
      },
    },
  ];
  /** @type {MejiroEvent[]} */
  normal_events = [
    {
      async h() {
        const key = 'n_walk_through';
        await this.#kojo[key]({
          ...this.#dict,
          first: +!this.params[key],
        });
        this.params[key] = true;
      },
    },
    {
      async h() {
        const key = 'n_walk';
        await this.#kojo[key]({
          ...this.#dict,
          first: +!this.params[key],
        });
        this.params[key] = true;
      },
    },
    {
      async h(p) {
        const key = 'n_shortcut';
        if ((await this.#kojo[key](this.#dict))[0] === 1) {
          p.c++;
          sys_change_attr_and_print(0, attr_enum.hp, -get_random_value(25, 75));
        }
      },
    },
    {
      async h() {
        const key = 'n_street_food';
        if ((await this.#kojo[key](this.#dict))[0]) {
          era.add('item:「恩宠」', -1);
          sys_change_attr_and_print(0, attr_enum.hp, get_random_value(50, 100));
        }
      },
    },
    {
      async h() {
        const key = 'n_arcade';
        const reward = get_random_value(1, 5);
        if (
          (
            await this.#kojo[key]({
              ...this.#dict,
              first: +!this.params[key],
              REWARD: reward.toString(),
            })
          )[0] === 1
        ) {
          era.add('item:「恩宠」', reward);
          sys_change_attr_and_print(0, attr_enum.hp, -get_random_value(25, 75));
        }
        this.params[key] = true;
      },
    },
    {
      async h() {
        const key = 'n_promotion';
        const reward = get_random_value(1, 5);
        if (
          (
            await this.#kojo[key]({
              ...this.#dict,
              first: +!this.params[key],
              REWARD: reward.toString(),
            })
          )[0] === 1
        ) {
          era.add('item:「恩宠」', reward);
          sys_change_lust(0, get_random_value(150, 450));
          sys_change_lust(this.chara.id, get_random_value(150, 450));
        }
        this.params[key] = true;
      },
    },
  ];
  /** @type {MejiroEvent[]} */
  bad_events = [
    {
      f: (_, lust) => lust < lust_border.absent_mind,
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.hand),
          new EroParticipant(0, part_enum.anal),
          false,
        );
        if (await bad_event_common.call(this, 'b_pet_anal', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.anal),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) => lust < lust_border.absent_mind,
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.hand),
          new EroParticipant(0, part_enum.body),
          false,
        );
        if (await bad_event_common.call(this, 'b_hug', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.body),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) => lust < lust_border.absent_mind,
      async h() {
        if (await bad_event_common.call(this, 'b_pet_leg', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.body),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) => lust < lust_border.absent_mind,
      async h() {
        if (await bad_event_common.call(this, 'b_movie', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) =>
        lust >= lust_border.itch && lust < lust_border.absent_mind,
      async h() {
        if (await bad_event_common.call(this, 'b_cafe', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) =>
        lust >= lust_border.itch && lust < lust_border.absent_mind,
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.breast),
          new EroParticipant(0, part_enum.hand),
          false,
        );
        if (await bad_event_common.call(this, 'b_lucky_sukebe', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.breast),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) =>
        lust >= lust_border.itch && lust < lust_border.absent_mind,
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.breast),
          new EroParticipant(0, part_enum.hand),
          false,
        );
        if (await bad_event_common.call(this, 'b_rain', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        }
      },
    },
    {
      f: (_, lust) =>
        this.chara.sex_code !== 1 && lust < lust_border.absent_mind,
      async h() {
        sys_change_lust(this.chara.id, get_random_value(150, 450));
        if (await bad_event_common.call(this, 'b_ero_item', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.breast),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust >= lust_border.itch;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.hand),
          new EroParticipant(
            0,
            era.get('cflag:0:性别') > 0 ? part_enum.penis : part_enum.virgin,
          ),
          false,
        );
        if (await bad_event_common.call(this, 'b_advance', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(
              this.chara.id,
              this.chara.sex_code !== 1 ? part_enum.virgin : part_enum.penis,
            ),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust >= lust_border.itch;
      },
      async h() {
        if (await bad_event_common.call(this, 'b_blow_job', this.#dict)) {
          await quick_make_love(
            new EroParticipant(this.chara.id, part_enum.mouth),
            new EroParticipant(
              0,
              get_penis_size(0) > 0 ? part_enum.penis : part_enum.virgin,
            ),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust >= lust_border.itch;
      },
      async h() {
        if (await bad_event_common.call(this, 'b_anal_item', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.anal),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return get_penis_size(0) > 0 && lust >= lust_border.itch;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.foot),
          new EroParticipant(0, part_enum.penis),
          false,
        );
        if (await bad_event_common.call(this, 'b_foot_job', this.#dict)) {
          await quick_make_love(
            new EroParticipant(this.chara.id, part_enum.hand),
            new EroParticipant(
              this.chara.id,
              this.chara.sex_code !== 1 ? part_enum.virgin : part_enum.penis,
            ),
            false,
          );
        }
      },
    },
  ];

  /** @param {CharaTalk} chara */
  constructor(chara) {
    this.chara = chara;
    this.#dict = generate_dictionary(chara.id, { teen: !0 });
  }

  /**
   * @param {number[]} percentages
   * @param {CityProgress} progress
   * @param {number} lust
   */
  #get_event_by_category(percentages, progress, lust) {
    const [good, normal] = percentages;
    let dice = Math.random();
    if (dice < good) {
      return get_random_event(this.good_events, this, progress, lust);
    }
    dice -= good;
    if (dice <= normal) {
      return get_random_event(this.normal_events, this, progress, lust);
    }
    return get_random_event(this.bad_events, this, progress, lust);
  }

  /**
   * @param {CityProgress} progress
   * @param {number} lust
   */
  good_event(progress, lust) {
    return this.#get_event_by_category([0.3, 0.5], progress, lust).call(
      this,
      progress,
      action_type_enum.good,
    );
  }

  /**
   * @param {CityProgress} progress
   * @param {number} lust
   */
  normal_event(progress, lust) {
    return this.#get_event_by_category([0.2, 0.5], progress, lust).call(
      this,
      progress,
      action_type_enum.normal,
    );
  }

  /**
   * @param {CityProgress} progress
   * @param {number} lust
   */
  bad_event(progress, lust) {
    return this.#get_event_by_category([0.1, 0.3], progress, lust).call(
      this,
      progress,
      action_type_enum.bad,
    );
  }

  /**
   * @param {CityProgress} progress
   * @param {number} lust
   */
  avg_event(progress, lust) {
    return this.#get_event_by_category([1 / 3, 1 / 3], progress, lust).call(
      this,
      progress,
      action_type_enum.avg,
    );
  }
}

module.exports = MejiroCumEvents;
