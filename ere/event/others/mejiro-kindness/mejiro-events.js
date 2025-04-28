const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const bad_events = require('#/event/others/mejiro-kindness/bad-events.kojo');
const good_events = require('#/event/others/mejiro-kindness/good-events.kojo');
const normal_events = require('#/event/others/mejiro-kindness/normal-events.kojo');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {{f:function(number,number):boolean,h:function():Promise}[]} events
 * @param {MejiroEvents} _this
 * @param {number} progress
 * @param {number} lust
 */
function get_random_event(events, _this, progress, lust) {
  return (
    get_random_entry(events.filter((e) => e.f.call(_this, progress, lust))) || {
      async h() {},
    }
  ).h;
}

const action_type_enum = { good: 0, normal: 1, bad: 2, avg: 3 };

class MejiroEvents {
  /** @type {CharaTalk} */
  chara;
  /** @type {CharaTalk} */
  me;
  /** @type {Record<string,any>} */
  dict = {};
  /** @type {Record<string,any>} */
  params = {};
  good_events = [
    {
      f() {
        return true;
      },
      async h(type) {
        const key = '甘泉水';
        const d = { ...this.dict, first: +!this.params[key] };
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
      f() {
        return true;
      },
      async h() {
        const key = '失物招领';
        const reward = get_random_value(1, 3);
        await good_events[key]({
          ...this.dict,
          first: +!this.params[key],
          reward,
        });
        this.params[key] = true;
        era.add('item:「恩宠」', reward);
      },
    },
  ];
  normal_events = [
    {
      f() {
        return true;
      },
      async h() {
        const key = '普通穿行';
        await normal_events[key]({ ...this.dict, first: +!this.params[key] });
        this.params[key] = true;
      },
    },
  ];
  bad_events = [
    {
      f() {
        return era.get(`base:${this.chara.id}:性欲`) < lust_border.absent_mind;
      },
      async h() {
        await quick_make_love(
          new EroParticipant(this.chara.id, part_enum.hand),
          new EroParticipant(0, part_enum.anal),
          false,
        );
        era.add(`base:${this.chara.id}:性欲`, get_random_value(0, 300));
        if ((await bad_events['摸屁股'](this.dict))[0] === 1) {
          era.add('base:0:性欲', get_random_value(0, 600));
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(this.chara.id, part_enum.anal),
            false,
          );
        } else {
          era.add(`base:${this.chara.id}:性欲`, get_random_value(0, 300));
        }
      },
    },
    {
      f() {
        return era.get(`base:${this.chara.id}:性欲`) > lust_border.itch;
      },
      async h() {
        era.add(`base:${this.chara.id}:性欲`, get_random_value(150, 450));
        if ((await bad_events['咖啡馆'](this.dict))[0] === 1) {
          era.add('base:0:性欲', get_random_value(300, 900));
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(this.chara.id, part_enum.mouth),
            false,
          );
        } else {
          era.add(`base:${this.chara.id}:性欲`, get_random_value(150, 450));
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
    this.dict['你'] = me.name;
    this.dict['担当'] = chara.name;
    this.dict['你们'] = me.get_couple_title();
    this.dict['她'] = chara.sex;
  }

  /**
   * @param {number[]} percentages
   * @param {number} progress
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
   * @param {number} progress
   * @param {number} lust
   */
  good_event(progress, lust) {
    return this.#get_event_by_category([0.3, 0.5], progress, lust).call(
      this,
      action_type_enum.good,
    );
  }

  /**
   * @param {number} progress
   * @param {number} lust
   */
  normal_event(progress, lust) {
    return this.#get_event_by_category([0.2, 0.5], progress, lust).call(
      this,
      action_type_enum.normal,
    );
  }

  /**
   * @param {number} progress
   * @param {number} lust
   */
  bad_event(progress, lust) {
    return this.#get_event_by_category([0.1, 0.3], progress, lust).call(
      this,
      action_type_enum.bad,
    );
  }

  /**
   * @param {number} progress
   * @param {number} lust
   */
  avg_event(progress, lust) {
    return this.#get_event_by_category([1 / 3, 1 / 3], progress, lust).call(
      this,
      action_type_enum.avg,
    );
  }
}

module.exports = MejiroEvents;
