const era = require('#/era-electron');

const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_change_pressure,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const print_shop_page = require('#/page/page-shop');

const all_reward_in_event = require('#/event/snippets/all-reward-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @param {number[]} stamina
 * @param {number[]} time
 */
function random_cost_in_action(cid, stamina, time) {
  sys_change_attr_and_print(0, attr_enum.hp, -get_random_value(...stamina));
  sys_change_attr_and_print(0, attr_enum.tp, -get_random_value(...time));
  if (cid > 0) {
    sys_change_attr_and_print(cid, attr_enum.hp, -get_random_value(...stamina));
    sys_change_attr_and_print(cid, attr_enum.tp, -get_random_value(...time));
  }
}

/** @type {Record<string,function(number,HookArg,Record<string,any>):Promise>} */
const handlers = {};

handlers[event_hooks.office_gift] = async (cid) => {
  era.println();
  sys_change_money(-10);
  sys_change_attr_and_print(0, attr_enum.tp, -get_random_value(100, 200));
  if (sys_like_chara(cid, 0, get_random_value(20, 40))) {
    await era.waitAnyKey();
  }
};

handlers[event_hooks.office_cook] = async (cid) => {
  era.println();
  let wait_flag = false;
  if (cid > 0) {
    wait_flag =
      all_reward_in_event(cid, {
        base: [get_random_value(100, 200), get_random_value(0, 50)],
        relation: get_random_value(5, 10),
      }) || wait_flag;
    sys_change_weight(cid, get_random_value(20, 40, true));
  }
  wait_flag =
    all_reward_in_event(0, {
      base: [-get_random_value(50, 100), get_random_value(0, 20)],
    }) || wait_flag;
  sys_change_weight(0, get_random_value(20, 40, true));
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_study] = async (cid) => {
  era.println();
  random_cost_in_action(cid, [0, 0], [100, 300]);
  all_reward_in_event(cid, {
    attr: [0, 0, 0, 0, get_random_value(5, 10)],
    relation: get_random_value(5, 10),
    pt: 4,
  });
  await era.waitAnyKey();
};

handlers[event_hooks.office_rest] = async (cid) => {
  era.println();
  let wait_flag = false;
  if (cid > 0) {
    wait_flag =
      all_reward_in_event(cid, {
        base: [get_random_value(0, 50), get_random_value(100, 200)],
        relation: get_random_value(5, 10),
      }) || wait_flag;
  }
  wait_flag =
    all_reward_in_event(0, {
      base: [get_random_value(0, 20), -get_random_value(50, 100)],
    }) || wait_flag;
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_prepare] = async (cid) => {
  era.println();
  sys_change_money(-20);
  random_cost_in_action(cid, [0, 0], [100, 300]);
  all_reward_in_event(cid, {
    attr: [0, 0, 0, 0, get_random_value(5, 10)],
    pt: 10,
    motivation: +(Math.random() < 0.75 + era.get('flag:训练难度') / 100),
  });
  await era.waitAnyKey();
};

handlers[event_hooks.office_game] = async (cid) => {
  let wait_flag = false;
  random_cost_in_action(cid, [0, 0], [100, 300]);
  if (cid > 0) {
    era.println();
    wait_flag = sys_like_chara(cid, 0, get_random_value(5, 10)) || wait_flag;
    wait_flag =
      (Math.random() < 0.5 + era.get('flag:训练难度') / 100 &&
        sys_change_motivation(cid, 1)) ||
      wait_flag;
    sys_change_pressure(cid, -get_random_value(100, 300));
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.good_night] = async (cid, hook) => {
  if (hook.arg !== void 0) {
    if (hook.arg > 0) {
      era.set('flag:床伴', cid);
      hook.arg === 2 && (LifeEventMarks.get_marks(cid).marital_rape = 1);
    } else {
      sys_change_lust(cid, lust_from_palam);
      era.println();
      if (sys_like_chara(cid, 0, -100)) {
        await era.waitAnyKey();
      }
      new MyEduMarks().reject++;
      if (era.get(`love:${cid}`) < 75 && Math.random() < 0.01) {
        era.set(`status:${cid}:爱意克制`, 1);
      }
    }
  }
};

handlers[event_hooks.school_atrium] = async (cid, hook) => {
  if (hook.arg) {
    random_cost_in_action(cid, [0, 100], [100, 200]);
  } else {
    random_cost_in_action(cid, [100, 200], [0, 100]);
  }
  if (cid > 0) {
    era.println();
    let wait_flag = sys_like_chara(cid, 0, get_random_value(5, 10));
    wait_flag =
      (Math.random() < 0.5 + era.get('flag:训练难度') / 100 &&
        sys_change_motivation(cid, 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  }
};

handlers[event_hooks.school_rooftop] = async (cid) => {
  era.println();
  let wait_flag = false;
  if (cid > 0) {
    wait_flag =
      all_reward_in_event(cid, {
        base: [get_random_value(50, 150)],
        relation: get_random_value(5, 15),
      }) || wait_flag;
    sys_change_weight(cid, get_random_value(20, 40, true));
  }
  wait_flag =
    all_reward_in_event(0, { base: [get_random_value(0, 100)] }) || wait_flag;
  sys_change_weight(0, get_random_value(20, 40, true));
  wait_flag && (await era.waitAnyKey());
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {{jpy:number}} extra_flag
 */
handlers[event_hooks.out_river] = async (cid, hook, extra_flag) => {
  let wait_flag = false;
  if (hook.arg) {
    random_cost_in_action(cid, [200, 600], [0, 100]);
  } else {
    random_cost_in_action(cid, [0, 100], [200, 600]);
  }
  if (hook.arg) {
    // 散步
    if (cid > 0) {
      era.println();
      wait_flag = sys_like_chara(cid, 0, get_random_value(10, 20)) || wait_flag;
    }
  } else {
    era.println();
    // 钓鱼
    const got_jpy = extra_flag?.jpy ?? get_random_value(0, 5);
    wait_flag ||= got_jpy > 0;
    got_jpy &&
      era.print(
        i18n().timon.it_sell_fish_template.replace(
          '%MONEY%',
          got_jpy.toString(),
        ),
      );
    sys_change_money(got_jpy);
    wait_flag =
      (cid && sys_like_chara(cid, 0, get_random_value(5, 10))) || wait_flag;
  }
  if (wait_flag) {
    await era.waitAnyKey();
  }
};

handlers[event_hooks.out_shopping] = async (cid, hook) => {
  let wait_flag = false;
  if (hook.arg === 2) {
    const items = [
      ...new Array(11).fill(0).map((_, i) => i + 70),
      ...new Array(3).fill(0).map((_, i) => ({ id: i + 81, limit: true })),
    ];
    if (era.get('flag:当前月') === 6 || era.get('flag:当前年') % 100 === 66) {
      items.push(84, { id: 85, limit: true });
    } else if (
      era.get('flag:当前月') + era.get('flag:当前周') === 6 ||
      era.get('flag:当前年') % 10 === 6
    ) {
      items.push(84);
    }
    await print_shop_page(items);
    random_cost_in_action(0, [0, 100], [0, 100]);
  } else {
    era.println();
    if (hook.arg) {
      // 街机厅和抽奖
      random_cost_in_action(cid, [0, 100], [0, 100]);
      wait_flag =
        (cid && sys_like_chara(cid, 0, get_random_value(5, 10))) || wait_flag;
    } else {
      // 卡拉OK和看电影
      const dice = Math.random();
      wait_flag =
        all_reward_in_event(cid, {
          attr:
            era.get(`cflag:${cid}:种族`) > 0
              ? [0, 0, 0, 0, get_random_value(5, 10)]
              : void 0,
          relation: +(cid > 0 && get_random_value(10, 15)),
          motivation: +(
            cid > 0 &&
            dice < 0.75 + era.get('flag:训练难度') / 100 &&
            1 + (dice < 0.25)
          ),
        }) || wait_flag;
      random_cost_in_action(cid, [0, 100], [200, 600]);
    }
    sys_change_money(-10);
    wait_flag && (await era.waitAnyKey());
  }
};

handlers[event_hooks.out_church] = async (cid) => {
  const condition_chara = cid > 0 && era.get(`status:${cid}:练习X手`) < 0;
  const condition_me = era.get('status:0:练习X手') < 0;
  era.println();
  if (condition_chara) {
    era.set(`status:${cid}:练习X手`, 0);
    i18n().timon.daily.oc_remove_train_debuff(get_chara_talk(cid));
  }
  if (condition_me) {
    era.set('status:0:练习X手', 0);
    i18n().timon.daily.oc_remove_train_debuff(get_chara_talk(0));
  }
  if (
    sys_like_chara(
      sys_get_random_uma_god(),
      0,
      get_random_value(5, 10 + 10 * (cid > 0)),
    ) ||
    condition_chara ||
    condition_me
  ) {
    await era.waitAnyKey();
  }
};

handlers[event_hooks.out_station] = async (cid, hook) => {
  let wait_flag = false;
  era.println();
  switch (hook.arg) {
    case 0:
      // 用餐
      sys_change_money(-10);
      random_cost_in_action(cid, [0, 0], [0, 200]);
      if (cid > 0) {
        wait_flag =
          all_reward_in_event(cid, {
            base: [get_random_value(100, 200)],
            relation: get_random_value(10, 15),
          }) || wait_flag;
        sys_change_weight(cid, get_random_value(20, 40, true));
      }
      sys_change_weight(0, get_random_value(20, 40, true));
      break;
    case 1:
      // 约会
      sys_change_money(-10);
      wait_flag = sys_like_chara(cid, 0, get_random_value(10, 15)) || wait_flag;
      random_cost_in_action(cid, [100, 300], [0, 200]);
      break;
    case 2:
      // 购物
      await print_shop_page(
        new Array(7).fill(0).map((_, i) => {
          return {
            id: i + 60,
            limit: true,
          };
        }),
      );
      wait_flag =
        (cid > 0 && sys_like_chara(cid, 0, get_random_value(5, 10))) ||
        wait_flag;
      random_cost_in_action(cid, [0, 200], [0, 200]);
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.celebration] = async (cid) => {
  // CFLAGNAME:56 = 节日事件标记
  era.set(`cflag:${cid}:56`, 0);
  if (era.add('cflag:0:56', 1) >= 6) {
    global_achievement.blnc_cel = 1;
  }
  era.println();
  let wait_flag = false;
  if (era.get('flag:当前回合数') % 48 === 6) {
    // ITEMNAME:100 = 情人节巧克力
    era.print(di18n.tb_item.notify(100));
    era.add('item:100', 1);
    wait_flag = true;
  }
  sys_change_pressure(cid, -get_random_value(500, 1000));
  wait_flag = sys_like_chara(cid, 0, get_random_value(40, 80)) || wait_flag;
  if (wait_flag) {
    await era.waitAnyKey();
  }
};

handlers[event_hooks.birthday] = async (cid) => {
  era.add(`exp:${cid}:过生日次数`, 1);
  era.set(`status:${cid}:生日`, 1);
  era.println();
  sys_change_pressure(cid, -get_random_value(750, 1250));
  if (sys_like_chara(cid, 0, get_random_value(50, 100))) {
    await era.waitAnyKey();
  }
};

/**
 * @param {number} cid
 * @param {HookArg} hook
 * @param {Record<string,any>} extra_flag
 */
module.exports = async (cid, hook, extra_flag) => {
  if (handlers[hook.hook]) {
    return await handlers[hook.hook](cid, hook, extra_flag);
  }
};
