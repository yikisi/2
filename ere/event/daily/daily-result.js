const era = require('#/era-electron');

const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
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

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {number} cid
 * @param {[]} to_print
 */
function print_attr_change(cid, to_print) {
  if (to_print.length > 0) {
    era.print([
      get_chara_talk(cid).get_colored_name(),
      ' 的 ',
      ...to_print,
      '！',
    ]);
  }
  return to_print.length > 0;
}

/**
 * @param {number} cid
 * @param {number[]} stamina
 * @param {number[]} time
 */
function random_cost_in_action(cid, stamina, time) {
  sys_change_attr_and_print(0, '体力', -get_random_value(...stamina));
  sys_change_attr_and_print(0, '精力', -get_random_value(...time));
  if (cid > 0) {
    sys_change_attr_and_print(cid, '体力', -get_random_value(...stamina));
    sys_change_attr_and_print(cid, '精力', -get_random_value(...time));
  }
}

/** @type {Record<string,function(number,HookArg,Record<string,any>):Promise>} */
const handlers = {};

handlers[event_hooks.office_gift] = async (cid) => {
  era.println();
  sys_change_money(-10);
  sys_change_attr_and_print(0, '精力', -get_random_value(100, 200));
  if (sys_like_chara(cid, 0, get_random_value(20, 40))) {
    await era.waitAnyKey();
  }
};

handlers[event_hooks.office_cook] = async (cid) => {
  era.println();
  let wait_flag = false;
  wait_flag =
    print_attr_change(
      0,
      sys_change_attr_and_print(0, '体力', -get_random_value(50, 100)),
    ) || wait_flag;
  wait_flag =
    print_attr_change(
      0,
      sys_change_attr_and_print(0, '精力', get_random_value(0, 20)),
    ) || wait_flag;
  sys_change_weight(0, get_random_value(20, 40, true));
  if (cid > 0) {
    wait_flag =
      print_attr_change(
        cid,
        sys_change_attr_and_print(cid, '体力', get_random_value(100, 200)),
      ) || wait_flag;
    wait_flag =
      print_attr_change(
        cid,
        sys_change_attr_and_print(cid, '精力', get_random_value(0, 50)),
      ) || wait_flag;
    wait_flag = sys_like_chara(cid, 0, get_random_value(5, 10)) || wait_flag;
    sys_change_weight(cid, get_random_value(20, 40, true));
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_study] = async (cid) => {
  era.println();
  random_cost_in_action(cid, [0, 0], [100, 300]);
  print_attr_change(
    cid,
    sys_change_attr_and_print(
      cid,
      attr_enum.intelligence,
      get_random_value(5, 10),
    ),
  );
  sys_like_chara(cid, 0, get_random_value(5, 10));
  await era.printAndWait([
    get_chara_talk(cid).get_colored_name(),
    ' 获得了 4 点技能点数',
  ]);
  era.add(`exp:${cid}:技能点数`, 4);
};

handlers[event_hooks.office_rest] = async (cid) => {
  era.println();
  let wait_flag = false;
  wait_flag =
    print_attr_change(
      0,
      sys_change_attr_and_print(0, '精力', -get_random_value(50, 100)),
    ) || wait_flag;
  wait_flag =
    print_attr_change(
      0,
      sys_change_attr_and_print(0, '体力', get_random_value(0, 20)),
    ) || wait_flag;
  if (cid > 0) {
    wait_flag =
      print_attr_change(
        cid,
        sys_change_attr_and_print(cid, '精力', get_random_value(100, 200)),
      ) || wait_flag;
    wait_flag =
      print_attr_change(
        cid,
        sys_change_attr_and_print(cid, '体力', get_random_value(0, 50)),
      ) || wait_flag;
    wait_flag = sys_like_chara(cid, 0, get_random_value(5, 10)) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.office_prepare] = async (cid) => {
  era.println();
  sys_change_money(-20);
  random_cost_in_action(cid, [0, 0], [100, 300]);
  print_attr_change(
    cid,
    sys_change_attr_and_print(
      cid,
      attr_enum.intelligence,
      get_random_value(5, 10),
    ),
  );
  Math.random() < 0.75 + era.get('flag:训练难度') / 100 &&
    sys_change_motivation(cid, 1);
  await era.printAndWait([
    get_chara_talk(cid).get_colored_name(),
    ' 获得了 10 点技能点数',
  ]);
  era.add(`exp:${cid}:技能点数`, 10);
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
  if (hook.arg !== undefined) {
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
  let to_print = sys_change_attr_and_print(0, '体力', get_random_value(0, 100));
  wait_flag = print_attr_change(0, to_print) || wait_flag;
  sys_change_weight(0, get_random_value(20, 40, true));
  if (cid > 0) {
    to_print = sys_change_attr_and_print(
      cid,
      '体力',
      get_random_value(50, 150),
    );
    print_attr_change(cid, to_print);
    wait_flag ||= to_print.length > 0;
    wait_flag = sys_like_chara(cid, 0, get_random_value(5, 15)) || wait_flag;
    sys_change_weight(cid, get_random_value(20, 40, true));
  }
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
    got_jpy && era.print(`钓到的鱼卖出了 ${got_jpy} 马币……`);
    sys_change_money(got_jpy);
    wait_flag =
      (cid && sys_like_chara(cid, 0, get_random_value(5, 10))) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
};

handlers[event_hooks.out_shopping] = async (cid, hook) => {
  let wait_flag = false;
  if (hook.arg === 2) {
    await print_shop_page([
      ...new Array(11).fill(0).map((_, i) => i + 70),
      ...new Array(3).fill(0).map((_, i) => ({ id: i + 81, limit: true })),
    ]);
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
      const temp = era.get(`cflag:${cid}:种族`)
        ? sys_change_attr_and_print(
            cid,
            attr_enum.intelligence,
            get_random_value(5, 10),
          )
        : [];
      wait_flag =
        (cid > 0 && sys_like_chara(cid, 0, get_random_value(10, 15))) ||
        wait_flag;
      print_attr_change(cid, temp);
      wait_flag ||= temp.length > 0;
      random_cost_in_action(cid, [0, 100], [200, 600]);
      const dice = Math.random();
      wait_flag =
        (dice < 0.75 + era.get('flag:训练难度') / 100 &&
          sys_change_motivation(cid, 1 + (dice < 0.25))) ||
        wait_flag;
    }
    sys_change_money(-10);
    wait_flag && (await era.waitAnyKey());
  }
};

handlers[event_hooks.out_church] = async (cid) => {
  const condition_chara = cid > 0 && era.get(`status:${cid}:练习X手`) < 0;
  const condition_me = era.get('status:0:练习X手') < 0;
  if (condition_chara || condition_me) {
    era.println();
  }
  if (condition_chara) {
    era.set(`status:${cid}:练习X手`, 0);
    era.print([
      get_chara_talk(cid).get_colored_name(),
      ' 的训练似乎更加顺利了……',
    ]);
  }
  if (condition_me) {
    era.set('status:0:练习X手', 0);
    era.print([
      get_chara_talk(0).get_colored_name(),
      ' 的训练似乎更加顺利了……',
    ]);
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
  let temp,
    wait_flag = false;
  era.println();
  switch (hook.arg) {
    case 0:
      // 用餐
      sys_change_money(-10);
      random_cost_in_action(cid, [0, 0], [0, 200]);
      sys_change_weight(0, get_random_value(20, 40, true));
      if (cid > 0) {
        wait_flag =
          sys_like_chara(cid, 0, get_random_value(10, 15)) || wait_flag;
        temp = sys_change_attr_and_print(
          cid,
          '体力',
          get_random_value(100, 200),
        );
        wait_flag ||= temp.length > 0;
        print_attr_change(cid, temp);
        sys_change_weight(cid, get_random_value(20, 40, true));
      }
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
  era.set(`cflag:${cid}:节日事件标记`, 0);
  era.add('cflag:0:节日事件标记', 1);
  era.println();
  let wait_flag = false;
  if ((era.get('flag:当前回合数') - 1) % 48 === 5) {
    era.print('获得了【情人节巧克力】！');
    era.add('item:情人节巧克力', 1);
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
