const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.override = true;
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  await print_event_name('粉丝感谢祭', coffee);
  await era.printAndWait('粉丝感谢祭当天。据说只有在这一天，特雷森里……');
  await era.printAndWait('——叮铃叮铃。');
  await coffee.say_and_wait('……欢迎光临。');
  await era.printAndWait('一间平时并不存在的、气氛舒适的咖啡厅才会营业。');
  await coffee.say_and_wait([
    callname,
    '……让你久等了。这是经过特别烘焙的曼哈顿特调咖啡。',
  ]);
  await coffee.say_and_wait('请你、品尝看看……');
  await era.printAndWait('盯——');
  await era.printAndWait([
    me.get_colored_name(),
    ' 仿佛感受到了 ',
    coffee.get_colored_name(),
    ' 灼热的目光。',
  ]);
  era.printButton('「……不用去服务其他客人吗？」', 1);
  await era.input();
  await coffee.say_and_wait(
    '不会有其他的客人了。这份宁静就是这里最迷人的部分，而且……',
  );
  await coffee.say_and_wait(
    '一定不会有人能发现这里。就算他们走进入口，也会直接通往出口……',
  );
  await era.printAndWait('这样的咖啡厅开来有什么意义吗……');
  await era.printAndWait('心中默默吐槽，随后细细品尝起手中的咖啡。');
  await era.printAndWait('——叮铃叮铃。');
  await coffee.say_and_wait('咦……居然还有其他人……');
  await era.printAndWait('——叮铃叮铃叮铃叮铃……');
  era.printButton('「……一下子进来了好多人！」', 1);
  await era.input();
  await say_by_passer_by_and_wait('男性', [
    '喔，就是这里！那位 ',
    coffee.get_colored_name(),
    ' 经营的咖啡厅！',
  ]);
  await say_by_passer_by_and_wait('女性', [
    '是啊，很有气氛呢～！装潢也好漂亮～！我可是',
    coffee.sex,
    '的粉丝呢～',
  ]);
  await coffee.say_and_wait('这是……');
  era.printButton('「结果还是被大家找到了呢。」', 1);
  await era.input();
  await coffee.say_and_wait('是啊……不过，这是什么情况……？为什么被大家发现呢？');
  era.printButton('「这就代表大家非常努力地在找吧。」', 1);
  await era.input();
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 最近表现得十分活跃，',
    coffee.sex,
    '的支持度也随着越来越高。',
  ]);
  await era.printAndWait(['看来是', coffee.sex, '的知名度把粉丝给招来了。']);
  await coffee.say_and_wait(['虽然人很多……但既然来了，就是客人……我会努力的。']);
  await era.printAndWait([
    '几分钟后，看着忙得晕头转向的 ',
    coffee.get_colored_name(),
    '，作为顾客的 ',
    me.get_colored_name(),
    ' 也只好充当了一回临时服务员。',
  ]);
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    25,
    [0, 10, 0, 10, 0],
    0,
    undefined,
    true,
  );
  wait_flag = sys_like_chara(25, 0, 100) || wait_flag;
  sys_change_money(100, 25);
  wait_flag && (await era.waitAnyKey());
  era.set('cflag:25:节日事件标记', 0);
};
