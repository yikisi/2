const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @type {Record<string,function(HookArg,*,EventObject)>} */
const handlers = {};

function check_tachyon_plan_b() {
  return (
    era.get('cflag:32:育成回合计时') < 3 * 48 && new TachyonEduMarks().plan_b
  );
}

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-25/week-start-1'),
  require('#/event/edu/edu-events-25/week-start-2'),
].forEach((f) => f(week_start_handlers, check_tachyon_plan_b));

handlers[event_hooks.week_start] = async (_, __, event_object) => {
  if (week_start_handlers[event_object.arg]) {
    const flags = { wait_flag: false };
    const ret = await week_start_handlers[event_object.arg](
      get_chara_talk(25),
      get_chara_talk(0),
      sys_get_callname(25, 0),
      flags,
      event_object,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-25/week-end')(
  week_end_handlers,
  check_tachyon_plan_b,
);

handlers[event_hooks.week_end] = async (_, __, event_object) => {
  if (week_end_handlers[event_object.arg]) {
    const flags = { wait_flag: false };
    const ret = await week_end_handlers[event_object.arg](
      get_chara_talk(25),
      get_chara_talk(0),
      sys_get_callname(25, 0),
      flags,
      event_object,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};

handlers[event_hooks.out_church] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  if (event_object.arg !== 95 + 1) {
    return;
  }
  era.set('cflag:25:节日事件标记', 0);
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  await print_event_name('新年的抱负', coffee);

  await era.printAndWait('资深级，年初。');
  await era.printAndWait([
    '为了祈求 ',
    coffee.get_colored_name(),
    ' 今年能够得到成功，',
    me.get_couple_title(),
    ' 来到神社进行新年参拜。',
  ]);
  if (check_tachyon_plan_b()) {
    const tachyon = get_chara_talk(32);
    await coffee.say_and_wait([
      '那个……',
      sys_get_colored_callname(25, 32),
      ' 最近怎么样……？',
      coffee.sex,
      '之前说要恢复比赛了……',
    ]);
    await era.printAndWait([
      '从 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 之后，',
      tachyon.get_colored_name(),
      ' 就恢复了训练。在 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 结束后，',
      coffee.sex,
      '更是公开宣布了自己将要回归比赛的计划，而',
      coffee.sex,
      '要参加的第一个比赛，正是 ',
      coffee.get_colored_name(),
      ' 会参加的 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '。',
    ]);
    era.printButton(`「${tachyon.sex}……最近比较忙。」`, 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 点了点头，随后便不再提起有关 ',
      tachyon.get_colored_name(),
      ' 的事。',
    ]);
  }
  await coffee.say_and_wait('今天只有我们……两个呢……朋友不知道为什么不见了……');
  await era.printAndWait([
    '自从 ',
    race_infos[race_enum.arim_kin].get_colored_name(),
    ' 后，',
    coffee.get_colored_name(),
    ' 的样子就变得有点怪……但也不会总是那副模样。',
  ]);
  await era.printAndWait(['尽管平常的', coffee.sex, '十分文静——']);
  await era.printAndWait(
    '工作人员「现场的各位，来做新春的祈福吧！无论是什么心愿，神明大人一定都会帮忙实现的哦！」',
  );
  await coffee.say_and_wait('……………………');
  await coffee.say_and_wait('这是骗人的。');
  await coffee.say_and_wait('愿望根本不会被实现。这个地方，根本没有神明存在。');
  await era.printAndWait([
    '——但……偶尔却会变成这样。是不是有什么触发开关导致了',
    coffee.sex,
    '的转变呢？',
  ]);
  await coffee.say_and_wait([
    callname,
    '，往这边来……让我们去一个能实现所有愿望的城镇……',
  ]);
  era.drawLine();
  await era.printAndWait([
    '随后，',
    coffee.get_colored_name(),
    ' 带 ',
    me.get_colored_name(),
    ' 去了一个完全没有新年气氛的诡异城镇……',
  ]);
  await coffee.say_and_wait('这里……才是真正能实现愿望的地方……');
  await coffee.say_and_wait([
    '为了能够追上朋友……',
    callname,
    ' 会为我许下什么愿望呢？',
  ]);
  await coffee.say_and_wait('从这里面……选一个吧。');
  await era.printAndWait('地面的砂土开始慢慢移动，脚边浮现出一些文字。');
  await era.printAndWait([
    '尽管已经经历过不止一次的灵异事件，但这仍让 ',
    me.get_colored_name(),
    ' 感到发抖。',
  ]);
  await era.printAndWait(['从中，', me.get_colored_name(), ' 所选择的是——']);
  era.printButton('「星光的治疗」（体力+500）', 1);
  era.printButton('「全身的鳞片」（全属性+10）', 2);
  era.printButton('「过往者的睿智」（技能点数+35）', 3);
  const ret = await era.input();
  let wait_flag = false;
  switch (ret) {
    case 1:
      await coffee.say_and_wait('治疗……的确……星星……一直在天上注视着我们……');
      await coffee.say_and_wait('若以不受限制的星光垄罩全身……');
      await coffee.say_and_wait([
        '谢谢你，',
        callname,
        '。我感觉比较有活力了……',
      ]);
      await coffee.say_and_wait(
        '我想，我能继续努力训练了。不再低着头……往前迈进……',
      );
      await era.printAndWait([
        '刚才那座城镇是幻觉吗……？一转眼，',
        me.get_couple_title(),
        ' 就又回到了普通的街道上。',
      ]);
      await era.printAndWait([
        '无论如何，',
        coffee.get_colored_name(),
        ' 的脸上又再次散发着活力了。',
      ]);
      wait_flag = get_attr_and_print_in_event(
        25,
        undefined,
        0,
        JSON.parse('{"体力":500}'),
      );
      break;
    case 2:
      await coffee.say_and_wait(
        '全身的鳞片……宛如把头发……视网膜……和灵魂……全以鳞甲包覆一般……',
      );
      await coffee.say_and_wait('若能将我的存在加以增强。啊啊……');
      await era.printAndWait('——噗通。');
      await era.printAndWait(
        '耳边传来了幻听一般的水声，仿佛是沉入了漆黑的海洋，无边无际。',
      );
      await era.printAndWait([
        '水压温柔地包裹着 ',
        me.get_colored_name(),
        ' 全身，',
        me.get_colored_name(),
        ' 感觉似乎有什么生物在 ',
        me.get_colored_name(),
        ' 身旁游动——它那冰冷、细腻的鳞片伴随着水流划过 ',
        me.get_colored_name(),
        ' 耳畔，它那分叉的细舌试探性地吐出，撩动 ',
        me.get_colored_name(),
        ' 的发丝……',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 从恍惚中醒来时，',
        me.get_couple_title(),
        ' 就又回到了普通的街道上。',
      ]);
      await era.printAndWait('刚才的是梦吗，或者有是一次灵异事件？');
      await era.printAndWait([
        '看向身边精神饱满，似乎仍意犹未尽的 ',
        coffee.get_colored_name(),
        '，或许许愿确实发挥了效果……',
      ]);
      wait_flag = get_attr_and_print_in_event(25, new Array(5).fill(10), 0);
      break;
    case 3:
      await coffee.say_and_wait('过往者的睿智……先人们的记忆……');
      await coffee.say_and_wait('若能从中窥探……纵使仅有一二……');
      await era.printAndWait([
        '——陌生的记忆流淌进 ',
        coffee.get_colored_name(),
        ' 的脑中。',
      ]);
      await era.printAndWait(
        '连是否曾经存在都未知的景色，以及当中的古老智慧也一并涌现，却马上又如同蜻蜓点水般转瞬即逝，最终所能记住的，也不过是皮毛。',
      );
      await era.printAndWait('但就算只是皮毛……');
      await coffee.say_and_wait([
        callname,
        '，我似乎明白世上存在着的许多不同跑法了。我想更加地……',
      ]);
      await coffee.say_and_wait('将这些灵感……在之后的比赛中，逐一尝试看看……');
      await era.printAndWait([
        me.get_colored_name(),
        ' 并不清楚到底发生了什么，而 ',
        me.get_colored_name(),
        ' 在一旁所见的，只不过是 ',
        coffee.get_colored_name(),
        ' 闭上眼又睁开眼的一瞬后，',
        me.get_couple_title(),
        ' 就又回到了普通的街道上。',
      ]);
      wait_flag = get_attr_and_print_in_event(25, undefined, 25);
  }
  if (sys_like_chara(25, 0, 25) || wait_flag) {
    await era.waitAnyKey();
  }
  return true;
};

handlers[event_hooks.back_school] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 25) {
    add_event(hook.hook, event_object);
    return;
  }
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    edu_marks = new CoffeeEduMarks(),
    me = get_chara_talk(0);
  edu_marks.our_taste = 1;
  await print_event_name('只属于我们的口味', coffee);
  await era.printAndWait([
    '在 ',
    coffee.get_colored_name(),
    ' 一起外出后，回到特雷森的校门时——',
  ]);
  await coffee.say_and_wait(['……', callname, '。']);
  await coffee.say_and_wait('如果你愿意的话，等一下……要不要喝杯咖啡呢……');
  await coffee.say_and_wait(['我有些……想让 ', callname, ' 你尝尝看的豆子……']);
  era.printButton('「当然。」', 1);
  await era.input();
  await coffee.say_and_wait('……谢谢。');
  await coffee.say_and_wait('那么，请你专注地看着我……跟着我走……');
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 带 ',
    me.get_colored_name(),
    ' 来到',
    coffee.sex,
    '在学园里的一个私人空间。',
  ]);
  await coffee.say_and_wait('我刚才提到的豆子，就是这个……');
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 说道，并指着装在桌上玻璃罐里还没磨成粉的豆子。',
  ]);
  await coffee.say_and_wait(
    '这些……是从我的咖啡树采收的豆子……也是我自己烘炒的……',
  );
  era.printButton('「咖啡树……」', 1);
  await era.input();
  await coffee.say_and_wait(
    '一棵咖啡树……要长到能结出果实……最快……也需要、三年的时间。',
  );
  await coffee.say_and_wait('而且，收成的次数……一年只有一次……');
  await era.printAndWait([
    '所以，这是 ',
    coffee.get_colored_name(),
    ' 从自己栽种的咖啡树上采收，再由',
    coffee.sex,
    '亲手烘炒过的咖啡豆……',
  ]);
  await era.printAndWait('何等的珍贵……');
  era.printButton('「……这么珍贵的东西，真的要给我喝吗？」', 1);
  await era.input();
  await coffee.say_and_wait(['……正因为珍贵，所以才要给 ', callname, ' 品尝……']);
  await coffee.say_and_wait('那么…………你愿意，跟我一起喝吗？');
  era.printButton('「乐意至极！」', 1);
  await era.input();
  await coffee.say_and_wait('那我现在来煮……请稍等一下。');
  await era.printAndWait([
    '这个安静的空间里，只有 ',
    coffee.get_colored_name(),
    ' 冲煮咖啡的声音回响着……',
  ]);
  await coffee.say_and_wait('…………久等了。请用。');
  await era.printAndWait([
    '将',
    coffee.sex,
    '冲煮的咖啡含在口中。刹那间，咖啡的风味和温度，仿佛渗透了肉体与心灵。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 和 ',
    coffee.get_colored_name(),
    ' 就这样面对面坐着，一起静静地享用咖啡。',
  ]);
  await era.printAndWait([
    '一杯咖啡下肚，当 ',
    me.get_colored_name(),
    ' 还沉浸在余韵中时，',
    coffee.get_colored_name(),
    ' 轻轻触碰了 ',
    me.get_colored_name(),
    ' 的手。',
  ]);
  await coffee.say_and_wait('…………味道，怎么样？');
  era.printButton('「……我第一次喝到这么好喝的咖啡。」', 1);
  era.printButton('「谢谢你让我度过一段美好的时光。」', 2);
  era.printButton('「有机会的话，我也想为你煮咖啡。」', 3);
  await era.input();
  await coffee.say_and_wait('……你说得太夸张了。');
  await coffee.say_and_wait('不过……我也有，同感。');
  await era.printAndWait([
    '受到 ',
    me.get_colored_name(),
    ' 的赞美影响，',
    coffee.get_colored_name(),
    ' 白皙的脸染上了羞红。',
  ]);
  await era.printAndWait([
    '但这并不是 ',
    me.get_colored_name(),
    ' 的阿谀奉承，这一杯咖啡投注的心血和时间抵过千言万语。也许 ',
    me.get_colored_name(),
    ' 这辈子都无法忘记在这里与',
    coffee.sex,
    '一同品尝到的味道了吧……',
  ]);
  await coffee.say_and_wait('……应该是我要道谢才对。');
  await coffee.say_and_wait('……谢谢你，愿意成为我的训练员……');
  await coffee.say_and_wait('等到明年收成的时候……我们也像今天这样……');
  await coffee.say_and_wait('一起喝咖啡，好吗？');
  era.printButton('「不管是明年还是后年，我们都要一起喝。」', 1);
  await era.input();
  await coffee.say_and_wait('——！');
  await coffee.say_and_wait('……好的。');
  await coffee.say_and_wait('明年……后年……都要一起……');
  await era.printAndWait([
    '明年和',
    coffee.sex,
    '一起喝的咖啡会是什么样的味道呢？这让 ',
    me.get_colored_name(),
    ' 对不久后与 ',
    coffee.get_colored_name(),
    ' 的将来充满了想像。',
  ]);
  await coffee.say_and_wait('……既然如此……');
  await coffee.say_and_wait('要不要一试试看……？……一起种咖啡树。');
  await coffee.say_and_wait('虽然要重新种一棵的话……至少得等三年才能收成。');
  era.printButton('「那我会为了那天好好努力的。」', 1);
  await era.input();
  await coffee.say_and_wait('……呵呵，不小心定下了一个有点遥远的约定呢。');
  await coffee.say_and_wait('不过……我也会期待的。');
  await era.printAndWait([
    '到时候与',
    coffee.sex,
    '一同完成的咖啡，一定会比现在喝到的还要美味吧。',
  ]);
  await era.printAndWait([
    '就这样，',
    me.get_couple_title(),
    ' 对那比夜晚更加香醇浓厚的未来充满了期待。',
  ]);
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    25,
    new Array(5).fill(10),
    0,
    undefined,
    true,
  );
  wait_flag = sys_like_chara(25, 0, 25, true, 5) || wait_flag;
  wait_flag && (await era.waitAnyKey());
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise<boolean|void>>} */
const race_start_handlers = {};

require('#/event/edu/edu-events-25/race-start')(
  race_start_handlers,
  check_tachyon_plan_b,
);

/**
 * @param _
 * @param {number} race
 */
handlers[event_hooks.race_start] = async (_, { race }) => {
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  if (
    !race_start_handlers[race] ||
    (await race_start_handlers[race](coffee, me, callname))
  ) {
    throw new Error();
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{base_change:Record<string,number>,contestants:PseudoUma[],race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number,motivation_change:number},TachyonEduMarks,number,number):Promise<boolean|void>>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-25/race-end-1'),
  require('#/event/edu/edu-events-25/race-end-2'),
].forEach((f) => f(race_end_handlers, check_tachyon_plan_b));

/**
 * @param {HookArg} _
 * @param {{base_change:Record<string,number>,contestants:PseudoUma[],race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number,motivation_change:number}} extra_flag
 */
handlers[event_hooks.race_end] = async (_, extra_flag) => {
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  if (
    !race_end_handlers[extra_flag.race] ||
    (await race_end_handlers[extra_flag.race](coffee, me, callname, extra_flag))
  ) {
    if (extra_flag.rank === 1) {
      await print_event_name('比赛获胜！', coffee);
      await coffee.say_and_wait('……成功了……我拿到……第一名了。');
      await coffee.say_and_wait(
        '我成功地……靠近那个背影了……呵呵。我果然很喜欢……这种感觉……',
      );
      era.printButton('恭喜你，茶座！', 1);
      await era.input();
      await coffee.say_and_wait([
        '谢谢你，',
        callname,
        '……我，下次也会努力的……',
      ]);
      await coffee.say_and_wait('努力获胜……然后再次享受，这份心情……');
      era.printButton('但可不能松懈。', 1);
      await era.input();
      await coffee.say_and_wait('……！');
      await coffee.say_and_wait('……是的，说得没错。要保持警戒不要大意了才好……');
      await coffee.say_and_wait('因为我——不，我们……还没能超越那个背影……');
    } else if (extra_flag.rank <= 5) {
      await print_event_name('比赛入着！！', coffee);
      await coffee.say_and_wait('……我入着了……');
      era.printButton('你很努力了，茶座。', 1);
      await era.input();
      await coffee.say_and_wait('……是的，我觉得有确实发挥了……自己的实力……');
      await coffee.say_and_wait('……但是，远远不够……');
      await coffee.say_and_wait('我们的目标……是在更遥远的前方……');
      era.printButton('接下来要更努力地训练。', 1);
      await era.input();
      await coffee.say_and_wait('……嗯，我可不能，就这样停下脚步……');
      await coffee.say_and_wait(['……', callname, '。今后……也要请多指教了……！']);
      era.println();
      await era.printAndWait('——咚。');
      await era.printAndWait([
        '不轻不重的敲击声在 ',
        coffee.get_colored_name(),
        ' 的脑门上响起。',
      ]);
      era.println();
      await coffee.say_and_wait('疼……没把你忘记掉……！');
      era.println();
      era.printButton('今后大家一起努力吧。', 1);
      await era.input();
    } else {
      await print_event_name('比赛失败……', coffee);
      await coffee.say_and_wait('……我输了……是我实力不济……');
      await coffee.say_and_wait('在这里就失败……那我……离那个背影……');
      era.printButton('已经做得很好了！', 1);
      await era.input();
      await coffee.say_and_wait(
        '『已经做得很好了』、吗……这种精神上的鼓励……我实在不认为有意义……',
      );
      era.println();
      await era.printAndWait('——咚。');
      await era.printAndWait('稍微有点用力的敲击声在茶座的脑门上响起。');
      era.println();
      await coffee.say_and_wait('好疼……！朋友也这样……可是，以我现在的实力……');
      era.printButton('要就这样认输了吗？', 1);
      await era.input();
      await coffee.say_and_wait('……就这样认输……我……不要。');
      era.println();
      await era.printAndWait('——这样就对了。');
      await era.printAndWait([
        '耳边仿佛听到了这样的话语，周围的空气像是凝结了一瞬般、感觉温度变低了一些……',
      ]);
      era.println();
      await coffee.say_and_wait([callname, '……还要朋友……谢谢你们……']);
      await coffee.say_and_wait('我不会再输了。');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 重新充满了干劲，准备朝下一场比赛前进。',
      ]);
    }
  }
};

handlers[event_hooks.crazy_fan_end] = async () => {
  const coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 的趾甲始终无法根治，在一次训练中的意外后，校方以 ',
    coffee.get_colored_name(),
    ' 的健康为由决定让其退役……但某些人并不这么认为。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 手上提着要送给 ',
    coffee.get_colored_name(),
    ' 的咖啡豆独自走在大雨的路上，只听身后传来一阵急促的脚步声，然后便是后腰钻心的痛楚。',
    me.get_colored_name(),
    ' 被推倒在地，身后来人不断刺向 ',
    me.get_colored_name(),
    ' 的背部，直到 ',
    me.get_colored_name(),
    ' 一动也不动。',
  ]);
  await era.printAndWait([
    '纸袋中的咖啡豆散落一地，',
    me.get_colored_name(),
    ' 闻到了不应存在的咖啡香味……',
  ]);
  await era.printAndWait([
    '死掉之后，还能再见到 ',
    coffee.get_colored_name(),
    ' 吗？如果是',
    coffee.sex,
    '的话，或许……',
  ]);
  await era.printAndWait([me.get_colored_name(), ' 的意识陷入了黑暗。']);
  await print_event_name(
    [{ content: '雨与咖啡', color: buff_colors[3] }],
    coffee,
  );
};

/**
 * 曼城茶座 - 育成
 *
 * @author Necroz
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
