const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[15] = async (rice, me, callname, self_name, flags) => {
    await print_event_name('湖泊中绽放的花朵', rice);
    await rice.say_and_wait('哇……！观众……好多……！而且大家的眼神都闪闪发光。');
    await era.printAndWait([
      '这天，',
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 一起来到 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 的比赛场地来观摩学习，这是因为……',
    ]);
    era.drawLine({ content: '1周前' });
    await era.printAndWait(
      '托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——。',
    );
    const bakushin = get_chara_talk(41);
    await bakushin.say_as_unknown_and_wait('呵啊……哈啊……');
    await bakushin.say_as_unknown_and_wait([
      sys_get_colored_callname(41, 30),
      '……请等一下……',
    ]);
    await rice.say_and_wait('欸？怎、怎么了？');
    await bakushin.say_and_wait(
      '不，其实我从刚才开始就为了完成学级委员长的使命而擅自在跟着跑。',
    );
    await bakushin.say_and_wait([
      sys_get_colored_callname(41, 30),
      ' 的耐力实在是太棒了！所以、我有一个提案！',
    ]);

    await bakushin.say_and_wait([
      '一起，去 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 观摩学习怎么样？',
    ]);
    await bakushin.say_and_wait([
      '拥有着能够制霸长距离的速度的赛',
      rice.uma_sex_title,
      '们都在那里！',
    ]);
    await rice.say_and_wait('一起？天皇……赏？');
    await bakushin.say_and_wait('嗯，一起去！');
    await bakushin.say_and_wait(
      '帮助朋友发掘出隐藏的力量，这也是委员长的职责！',
    );
    await era.printAndWait(['正如 ', bakushin.get_colored_name(), ' 所说。']);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 的长距离……的确有着钢铁般的素质。',
    ]);
    await era.printAndWait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 也迟早会成为',
      rice.sex,
      '目标里舞台的一部分吧。',
    ]);
    era.printButton('「去京都参观学习吧。」', 1);
    await era.input();
    await bakushin.say_and_wait('太好了！只有一个人去的话就太寂寞了！');
    await bakushin.say_and_wait('顺带一提，那里的点心只卖300円哦！');
    await rice.say_and_wait('……总觉得，有点像郊游呢。');
    await rice.say_and_wait('诶嘿嘿，好期待啊！');
    await era.printAndWait('回到现在。');
    await bakushin.say_and_wait('啊～！多么激烈的追逐！');
    await bakushin.say_and_wait('我，要到更前面去看看！！');
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 5], 0);
  };

  handlers[47 + 32] = async (
    rice,
    me,
    callname,
    self_name,
    flags,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:30:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('夏季合宿（经典年）结束', rice);
    await era.printAndWait([
      '合宿的最后一天，在 ',
      rice.get_colored_name(),
      ' 的希望下，直到最后为止都在进行着训练。',
    ]);
    await rice.say_and_wait('哈啊……哈啊……抱歉，我来晚了。');
    await get_chara_talk(52).say_and_wait([
      '快点快点，',
      sys_get_colored_callname(52, 30),
      '！巴士和大家都在等着哦！',
    ]);
    await rice.say_and_wait('呜……呜！马上就来！');
    await rice.say_and_wait('太好了，赶上了。');
    await me.say_and_wait('多亏了大家的等待呢。');
    await rice.say_and_wait('嗯！不和大家说声谢谢的话——');
    const change_list = new Array(5).fill(0);
    gacha(base_attr_list, 3).forEach((e) => (change_list[e] = 5));
    flags.wait_flag = get_attr_and_print_in_event(30, change_list, 0);
  };

  handlers[95 + 14] = async (rice, me, callname, self_name, flags) => {
    const zob_zoy = get_chara_talk(47),
      bourbon = get_chara_talk(26);
    await print_event_name('正因无法独自盛开', rice);
    await era.printAndWait('训练员室内');
    await era.printAndWait('……咚咚');
    await era.printAndWait('传来轻轻的敲门声。');
    await zob_zoy.say_as_unknown_and_wait([
      '失礼了……那个，是 ',
      zob_zoy.get_colored_name(),
      ' 的说。',
    ]);
    await zob_zoy.say_and_wait([
      '有看见过 ',
      sys_get_colored_callname(47, 30),
      ' 去哪儿了吗？',
    ]);
    await zob_zoy.say_and_wait([
      '其实',
      rice.sex,
      '现在还没有回宿舍，明明要到点名的时间了……',
    ]);
    await me.say_and_wait('——难道', true);
    era.drawLine({ content: '训练场上' });
    await rice.say_and_wait('哈啊……哈啊……哈啊……！');
    await me.say_and_wait([sys_get_colored_callname(0, 30), '！']);
    await rice.say_and_wait([
      '欸。',
      callname,
      '，和……',
      sys_get_colored_callname(30, 47),
      '？',
    ]);
    await rice.say_and_wait('……');
    await me.say_and_wait('努力过头了哦。。');
    await rice.say_and_wait('对不起，但是……');
    await rice.say_and_wait('……');
    await rice.say_and_wait('嗯，对不起。会好好休息的。');
    await zob_zoy.say_and_wait('……');
    await zob_zoy.say_and_wait([
      '那个，',
      sys_get_colored_callname(47, 30),
      '！',
    ]);
    await zob_zoy.say_and_wait([
      '对 ',
      sys_get_colored_callname(47, 30),
      ' 来说，',
      callname,
      ' 意味着什么呢？',
    ]);
    await zob_zoy.say_and_wait(
      '那个……一直都是这么温柔，就像是从绘本里走出来的那个命中注定的人。',
    );
    await rice.say_and_wait([
      '呀啊啊啊！？',
      sys_get_colored_callname(30, 47),
      '？安……安……',
    ]);
    await zob_zoy.say_and_wait('还不能安静。而且我也是在为你加油。');
    await rice.say_and_wait([sys_get_colored_callname(30, 47), '……']);
    await zob_zoy.say_and_wait(
      '要是有什么困扰的话……我觉得就应该大家好好谈谈。',
    );
    await rice.say_and_wait('……');
    await me.say_and_wait(['你觉得呢，', sys_get_callname(0, 30), '？']);
    await rice.say_and_wait('……但是，很害怕啊……');
    await rice.say_and_wait('可以依赖的某个人，我也是知道的啊……');
    await rice.say_and_wait([
      '好不容易对 ',
      self_name,
      ' 抱有期待，',
      self_name,
      ' 却有可能做不到。',
    ]);
    await rice.say_and_wait([
      self_name,
      '，明明已经不想让 ',
      callname,
      ' 失望了……',
    ]);
    await era.printAndWait(['说完，', rice.teen_sex_title, '小声地抽泣起来。']);
    await me.say_and_wait('不要想那种事情。');
    await zob_zoy.say_and_wait([
      '没错！我也是！不会对 ',
      sys_get_colored_callname(47, 30),
      ' 失望的！',
    ]);
    await zob_zoy.say_and_wait([
      '支持着 ',
      sys_get_colored_callname(47, 30),
      ' 的大家，一定也是这样的。',
    ]);
    await me.say_and_wait('所以不要再一个人勉强自己了。');
    await rice.say_and_wait([callname, '……唔……呜……']);
    await rice.say_and_wait('呜啊～～！');
    await era.printAndWait([
      '从 ',
      rice.get_colored_name(),
      ' 的眼睛里，大颗的泪珠决堤似地掉下来。',
    ]);
    era.drawLine({ content: '第二天' });
    await zob_zoy.say_and_wait([
      '啊，',
      sys_get_colored_callname(47, 30),
      '！要加油哦。',
    ]);
    await rice.say_and_wait('……呜、呜呜……真的没问题吗？');
    await zob_zoy.say_and_wait('没、没问题的！');
    await zob_zoy.say_and_wait([
      '看，',
      sys_get_colored_callname(47, 0),
      ' 也来给 ',
      sys_get_colored_callname(47, 30),
      ' 加油了哦。',
    ]);
    await rice.say_and_wait('嗯。');
    await bourbon.say_and_wait('那么，我可以开始进行移动了吗？');
    await rice.say_and_wait([
      '啊！抱歉！',
      sys_get_colored_callname(30, 26),
      '……这个、那个……！',
    ]);
    await rice.say_and_wait(['请，一定要帮帮 ', self_name, '！']);
    await bourbon.say_and_wait('……？在意识的沟通上发生了误解吗？');
    await rice.say_and_wait([
      '没有发生哦！因为，',
      sys_get_colored_callname(30, 26),
      ' 肯定能帮上忙的！',
    ]);
    await rice.say_and_wait('虽然听到了可能会很失望……');
    await rice.say_and_wait([
      self_name,
      ' 现在，没有 ',
      sys_get_colored_callname(30, 26),
      ' 的帮助是不行的！',
    ]);
    await rice.say_and_wait([
      '因为现在的 ',
      self_name,
      ' 还很弱，再这样下去……',
    ]);
    await rice.say_and_wait('根本跑赢不了！');
    await rice.say_and_wait([
      '所以希望 ',
      sys_get_colored_callname(30, 26),
      ' 来教 ',
      self_name,
      ' 跑步！',
    ]);
    await rice.say_and_wait(['把我没有的东西，全部都教给 ', self_name, '！']);
    await bourbon.say_and_wait('……');
    await me.say_and_wait([
      '相信 ',
      sys_get_callname(0, 30),
      ' 会创造奇迹吧。',
    ]);
    await bourbon.say_and_wait('我知道了。');
    await bourbon.say_and_wait('如果这是创造史上最高的比赛所必要的过程的话。');
    await bourbon.say_and_wait('申请受理，开始改变预定。');
    await bourbon.say_and_wait([
      '从下午开始，作为第一阶段，开始参加 ',
      self_name,
      ' 的10组坡道练习。',
    ]);
    await bourbon.say_and_wait('目的，提高肌肉力量和速度。');
    await bourbon.say_and_wait('在需要负荷的情况下，可以借出特制的负重袋。');
    await bourbon.say_and_wait('啊，有人称我的训练是『魔鬼』——');
    await bourbon.say_and_wait([
      '准备好要来吗？',
      sys_get_colored_callname(26, 30),
      '。',
    ]);
    await rice.say_and_wait('……是的！');
    await era.printAndWait([
      '然后',
      rice.couple_title,
      '便开始了奔跑，向着即将到来的 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '——！',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 10], 0);
  };

  handlers[95 + 32] = async (
    rice,
    me,
    callname,
    self_name,
    flags,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:30:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('夏季合宿（资深年）结束', rice);
    await era.printAndWait('依旧是一次严格的夏季合宿。');
    await era.printAndWait([
      '夏合宿的最后一天，',
      me.get_colored_name(),
      ' 坐在长椅上等待着准备回家的 ',
      rice.get_colored_name(),
      ' 的时候……',
    ]);
    await rice.say_and_wait(['啊啊啊啊啊～', callname, '！']);
    await rice.say_and_wait([
      '让 ',
      me.get_colored_name(),
      ' 久等了，真是不好意思……！',
    ]);
    await rice.say_and_wait('呼……去帮了很多忙，结果这么晚才回来。');
    await me.say_and_wait('去帮忙？');
    await rice.say_and_wait('嗯，也受到了这里合宿所的很多照顾吧？');
    await rice.say_and_wait([
      self_name,
      ' 就去给花浇水啦……重新粉刷长椅的油漆啦——',
    ]);
    await me.say_and_wait('长椅的油漆？');
    await rice.say_and_wait(['嗯！就是，', callname, ' 现在正在休息的长椅——']);
    await me.say_and_wait('……');
    await rice.say_and_wait([callname, '？']);
    await era.printAndWait('啪啦啪啦！！');
    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 慌慌张张地站了起来，但已经沾满了黏糊糊的油漆。',
    ]);
    await rice.say_and_wait([
      '对、对不起！都是因为 ',
      self_name,
      ' 没写上提醒',
    ]);
    await rice.say_and_wait(['哇啊啊啊……怎么办、', callname, '。呜啊～～']);
    await me.say_and_wait('重新刷一遍油漆吧。');
    await rice.say_and_wait('呜……真的对不起。');
    await rice.say_and_wait('还要去和管理人道歉才行啊。');
    await rice.say_and_wait('还有，也要去借油漆。');
    await era.printAndWait([
      '和 ',
      rice.get_colored_name(),
      ' 一起给管理人员帮了忙。',
    ]);
    const change_list = new Array(5).fill(0);
    gacha(base_attr_list, 3).forEach((e) => (change_list[e] = 5));
    flags.wait_flag = get_attr_and_print_in_event(30, change_list, 0);
  };
};
