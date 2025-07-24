/**
 * @file 麦吉罗的呼唤 - 随机事件
 * @author イーウィヤ
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_attr_and_print,
  sys_change_lust,
} = require('#/system/sys-calc-base-cflag');

const bad_events = require('#/event/others/mejiro-kindness/bad-events.kojo');
const good_events = require('#/event/others/mejiro-kindness/good-events.kojo');
const normal_events = require('#/event/others/mejiro-kindness/normal-events.kojo');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');

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
 * @param {MejiroEvents} _this
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
 * @this MejiroEvents
 * @param {string} key
 * @param {Record<string,any>} dict
 */
async function bad_event_common(key, dict) {
  sys_change_lust(this.chara.id, get_random_value(100, 300));
  if ((await bad_events[key](dict))[0] === 1) {
    sys_change_lust(0, get_random_value(100, 300));
    return true;
  } else {
    sys_change_lust(this.chara.id, get_random_value(100, 300));
  }
  return false;
}

class MejiroEvents {
  /** @type {CharaTalk} */
  chara;
  /** @type {CharaTalk} */
  me;
  /** @type {Record<string,any>} */
  #dict = {};
  /** @type {Record<string,any>} */
  params = {};
  /** @type {MejiroEvent[]} */
  good_events = [
    {
      async h(_, type) {
        const key = '甘泉水';
        const d = { ...this.#dict, first: +!this.params[key] };
        this.params[key] = true;
        switch (type) {
          case action_type_enum.good:
            d['行动'] = '谨慎地从建筑的后方缓缓走出';
            break;
          case action_type_enum.bad:
            d['行动'] = '急匆匆地跑来';
            break;
          default:
            d['行动'] = '快步走来';
        }
        await good_events[key](d);
        sys_change_attr_and_print(0, '体力', get_random_value(50, 100));
      },
    },
    {
      async h() {
        const key = '失物招领';
        const reward = get_random_value(1, 3);
        await good_events[key]({
          ...this.#dict,
          first: +!this.params[key],
          reward,
        });
        this.params[key] = true;
        era.add('item:「恩宠」', reward);
      },
    },
    {
      async h() {
        const key = '整理衣装';
        await good_events[key]({
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
        const key = '林荫长椅';
        switch (
          (
            await good_events[key]({ ...this.#dict, first: +!this.params[key] })
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
        const key = '公共交通';
        await good_events[key]({ ...this.#dict, first: +!this.params[key] });
        p.c++;
        this.params[key] = true;
      },
    },
    {
      async h() {
        const key = '幸运奖励';
        const reward = get_random_value(1, 3);
        const ret = await good_events[key]({
          ...this.#dict,
          first: +!this.params[key],
          reward,
        });
        this.params[key] = true;
        if (ret[0] === 1) {
          era.add('item:「恩宠」', reward);
        } else {
          sys_change_attr_and_print(0, '体力', get_random_value(50, 100));
        }
      },
    },
  ];
  /** @type {MejiroEvent[]} */
  normal_events = [
    {
      async h() {
        const key = '普通穿行';
        await normal_events[key]({ ...this.#dict, first: +!this.params[key] });
        this.params[key] = true;
      },
    },
    {
      async h() {
        const key = '街道漫步';
        await normal_events[key]({ ...this.#dict, first: +!this.params[key] });
        this.params[key] = true;
      },
    },
    {
      async h(p) {
        const key = '林间捷径';
        if ((await normal_events[key](this.#dict))[0] === 1) {
          p.c++;
          sys_change_attr_and_print(0, '体力', -get_random_value(25, 75));
        }
      },
    },
    {
      async h() {
        const key = '街头小吃';
        if ((await normal_events[key](this.#dict))[0]) {
          era.add('item:「恩宠」', -1);
          sys_change_attr_and_print(0, '体力', get_random_value(50, 100));
        }
      },
    },
    {
      async h() {
        const key = '摇奖游戏';
        const reward = get_random_value(1, 5);
        if (
          (
            await normal_events[key]({
              ...this.#dict,
              reward,
              first: +!this.params[key],
            })
          )[0] === 1
        ) {
          era.add('item:「恩宠」', reward);
          sys_change_attr_and_print(0, '体力', -get_random_value(25, 75));
        }
        this.params[key] = true;
      },
    },
    {
      async h() {
        const key = '店面宣传';
        const reward = get_random_value(1, 5);
        if (
          (
            await normal_events[key]({
              ...this.#dict,
              reward,
              first: +!this.params[key],
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
      f(_, lust) {
        return lust < lust_border.absent_mind;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.hand),
          new EroParticipant(0, part_enum.anal),
          false,
        );
        if (await bad_event_common.call(this, '摸屁股', this.#dict)) {
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
        return lust < lust_border.absent_mind;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.hand),
          new EroParticipant(0, part_enum.body),
          false,
        );
        if (await bad_event_common.call(this, '意外相拥', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.body),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust < lust_border.absent_mind;
      },
      async h() {
        if (await bad_event_common.call(this, '抚摸大腿', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.body),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust < lust_border.absent_mind;
      },
      async h() {
        if (await bad_event_common.call(this, '街头放映', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust >= lust_border.itch && lust < lust_border.absent_mind;
      },
      async h() {
        if (await bad_event_common.call(this, '咖啡馆', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return lust >= lust_border.itch && lust < lust_border.absent_mind;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.breast),
          new EroParticipant(0, part_enum.hand),
          false,
        );
        if (await bad_event_common.call(this, '幸运色狼？', this.#dict)) {
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
        return lust >= lust_border.itch && lust < lust_border.absent_mind;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.breast),
          new EroParticipant(0, part_enum.hand),
          false,
        );
        if (await bad_event_common.call(this, '突然降雨', this.#dict)) {
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        }
      },
    },
    {
      f(_, lust) {
        return this.chara.sex_code !== 1 && lust < lust_border.absent_mind;
      },
      async h() {
        sys_change_lust(this.chara.id, get_random_value(150, 450));
        const key = '震动玩具';
        if (
          await bad_event_common.call(this, key, {
            ...this.#dict,
            first: +!this.params[key],
          })
        ) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.breast),
            false,
          );
        }
        this.params[key] = true;
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
        if (await bad_event_common.call(this, '无端挑逗', this.#dict)) {
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
        if (await bad_event_common.call(this, '露天口交', this.#dict)) {
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
        const key = '后穴玩具';
        if (
          await bad_event_common.call(this, key, {
            ...this.#dict,
            first: +!this.params[key],
          })
        ) {
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.anal),
            false,
          );
        }
        this.params[key] = true;
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
        if (await bad_event_common.call(this, '隐秘游戏', this.#dict)) {
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

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  constructor(chara, me) {
    this.chara = chara;
    this.me = me;
    this.#dict['你'] = me.name;
    this.#dict['担当'] = chara.name;
    this.#dict['她'] = chara.sex;
    this.#dict['少女'] = chara.teen_sex_title;
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

module.exports = MejiroEvents;
