const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (event_object.arg !== 'all_like') {
    return false;
  }
  const urara = get_chara_talk(52);
  if (era.get('flag:当前互动角色') > 0) {
    await era.printAndWait([
      '听说 ',
      urara.get_colored_name(),
      ' 最近经常去学园附近的小公园……下次独自出行的时候注意一下吧',
    ]);
    add_event(hook.hook, event_object);
    return false;
  }
  new EventMarks(0).sub(event_hooks.out_start);
  const callname = sys_get_callname(52, 0),
    me = get_chara_talk(0);
  await print_event_name('人见人爱', urara);
  await era.printAndWait([
    '结束了今天的工作后，',
    me.get_colored_name(),
    ' 正独自在学园周围散步，却又在路过小公园时看到了熟悉的身影。',
  ]);
  await era.printAndWait([
    '公园的草坪上铺着干净的餐布，而 ',
    urara.get_colored_name(),
    ' 正跟一对拿出便当的母子开心地坐在一起聊着什么。',
  ]);
  await urara.say_and_wait('咦？我的名字？春乌拉拉！我的名字叫春乌拉拉！');
  await era.printAndWait(
    '阿姨A「乌拉拉……？原来你就是特雷森学园的春乌拉拉啊，你的比赛我们都看过哦！」',
  );
  await urara.say_and_wait(
    '诶？原来乌拉拉很厉害吗？嘿嘿～总觉得有点不好意思，不过……',
  );
  await urara.say_and_wait([
    '我的 ',
    callname,
    ' 在那边哦！所以——',
    callname,
    '！要一起吃便当吗？',
  ]);
  await era.printAndWait([
    '不知何时注意到了远处的 ',
    me.get_colored_name(),
    '，小',
    urara.get_uma_sex_title(),
    '正摇着耳朵向 ',
    me.get_colored_name(),
    ' 的方向招着手。',
  ]);

  era.printButton('「嗯？等下，我也可以吗？」', 1);
  await era.input();

  await era.printAndWait([
    '阿姨A「别客气嘛，训练员',
    me.get_adult_sex_title(),
    '，就当是感谢您的担当陪我家孩子玩了！」',
  ]);
  await era.printAndWait([
    '在 ',
    urara.get_colored_name(),
    ' 与路人阿姨的热情邀请下，',
    me.get_colored_name(),
    ' 还是有些不好意思的在餐布的一角坐了下来。',
  ]);
  await era.printAndWait([
    '而在 ',
    me.get_colored_name(),
    ' 也坐好之后，',
    urara.get_colored_name(),
    ' 则又向一旁的小男孩继续开心地搭起了话。',
  ]);
  await urara.say_and_wait(
    '不过，我们的黑白猜的第七场比赛还没分出胜负呢！要继续吗？',
  );
  await era.printAndWait(
    '男孩A「诶？不是约好吃完再继续比吗？而且反正下次也会是我赢啦！」',
  );
  await urara.say_and_wait(
    '还真敢说呢，但我也绝对不会输！乌拉拉每次猜拳都会赢，而且头也会转得非常快哦！',
  );
  await era.printAndWait([
    '男孩的母亲正用温柔的目光注视着互动的两人，但一旁的 ',
    me.get_colored_name(),
    ' 却在小男孩的表情中读出了一丝焦虑……',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 开朗又惹人怜爱的个性可以在转眼间跟任何人成为朋友，',
    urara.sex,
    '也因此很受小孩子们的欢迎。',
  ]);
  await era.printAndWait([
    '但也正因如此，',
    urara.sex,
    '也对即将步入青春期的孩子们有着不亚于其他「初恋杀手」的吸引力，所以……',
  ]);
  await era.printAndWait([
    '男孩A「那个……乌拉拉',
    urara.sex_code - 1 ? '姐姐' : '哥哥',
    '，我们之后……之后还能再见吗？」',
  ]);
  await urara.say_and_wait([
    '嗯？我以后还会来这个公园的，所以肯定能再见哦？对吧，',
    callname,
    '？',
  ]);
  await era.printAndWait([
    '在分开之前，连着妈妈的手，男孩向这名',
    urara.get_uma_sex_title(),
    urara.sex_code - 1 ? '姐姐' : '哥哥',
    '投出了朦胧但勇敢的情意。',
  ]);
  await era.printAndWait([
    '勇气可嘉，但不明不白的',
    urara.get_uma_sex_title(),
    urara.sex_code - 1 ? '姐姐' : '哥哥',
    '只是回以了理所当然的答案，并向身旁紧贴的大人投出了笑容。',
  ]);
  await era.printAndWait([
    '不但没传达到，状况还恶化了？在 ',
    urara.get_colored_name(),
    ' 的笑容中，没敢去直视男孩的目光的 ',
    me.get_colored_name(),
    ' 只是默默地点点头。',
  ]);
  await era.printAndWait([
    '作为赛',
    urara.get_uma_sex_title(),
    '受欢迎的确不错，但总觉得有什么不知不觉间变得糟糕了，总之希望那名男孩一切安好吧……',
  ]);
  await era.printAndWait([
    '牵着 ',
    urara.get_colored_name(),
    ' 的手欲言又止的 ',
    me.get_colored_name(),
    '，与还在笑着向身后挥着手的 ',
    urara.get_colored_name(),
    '，一起踏上了归路。',
  ]);
  // TODO 技能「爱娇」
  return true;
};
