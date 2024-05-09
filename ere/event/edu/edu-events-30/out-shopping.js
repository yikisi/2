const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 30) {
    add_event(event_hooks.out_shopping, event_object);
    return;
  }
  if (event_object.arg !== 95 + 21) {
    return;
  }
  const callname = sys_get_callname(30, 0),
    me = get_chara_talk(0),
    rice = get_chara_talk(30),
    self_name = sys_get_callname(30, 30),
    tokino = get_chara_talk(301);
  await print_event_name('万有一失', rice);
  await era.printAndWait([
    '把参加 ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    ' 定为目标后……',
  ]);
  await era.printAndWait(
    '路人B「我把我的粉丝投票，投给了你哦！绝对要拿第一啊！」',
  );
  await rice.say_and_wait('哇！？谢……谢谢你的支持！');
  await era.printAndWait([
    '商店街的老板「啊，你难不成是……',
    rice.get_colored_name(),
    ' 吗？」',
  ]);
  await rice.say_and_wait('是！那个、是的没错……');
  await era.printAndWait('商店街的老板「嘛！一定要在我家吃炸肉饼！」');
  await era.printAndWait('商店街的老板「我家的孩子是你的粉丝呢。」');
  await rice.say_and_wait('欸！？这样可以吗？');
  era.drawLine();
  await rice.say_and_wait('欸嘿嘿……令人开心的事情竟然有这么多，真的好吗？');
  await me.say_and_wait('要连带着这份一起努力呢。');
  await rice.say_and_wait('说的是啊……');
  await tokino.say_and_wait('啊，两位都找到了！');
  await me.say_and_wait('是有什么事吗？');
  await tokino.say_and_wait('其实是这样的！');
  await tokino.say_and_wait('刚才阪神赛马场传来了消息……！！');
  await tokino.say_and_wait([
    '在【粉丝人气投票】中，',
    sys_get_colored_callname(301, 30),
    ' 可是遥遥领先的第一哦！',
  ]);
  await tokino.say_and_wait('希望能来参加开幕仪式！');
  await rice.say_and_wait('欸欸欸欸欸？');
  await tokino.say_and_wait('所以，要在明天进行彩排。');
  await rice.say_and_wait(['……哇。', self_name, ' 是……人气第一？开幕、仪式？']);
  await tokino.say_and_wait('啊哈哈……抱歉。我好像也有点太兴奋了。');
  await tokino.say_and_wait(
    '详细内容已经整理成了文件，请稍后确认，讨论一下吧。',
  );
  await tokino.say_and_wait('那，我告辞了。');
  await era.printAndWait([tokino.get_colored_name(), ' 离开后……']);
  await rice.say_and_wait(['……好棒，', self_name, ' 是，大家的……']);
  await me.say_and_wait('去参加彩排吧。');
  await rice.say_and_wait('嗯！');
  await era.printAndWait([
    '第二天，你和 ',
    rice.get_colored_name(),
    ' 一起，去到了阪神赛马场。',
  ]);
  await era.printAndWait([
    '工作人员A「',
    rice.get_colored_name(),
    ' 选手！接下来是献上花束时站的位置——」',
  ]);
  await rice.say_and_wait('是、是的！');
  await era.printAndWait(
    '工作人员B「啊，那个结束之后，我们也想拜托你一件事——」',
  );
  await rice.say_and_wait('呜哇……我知道了～！');
  await era.printAndWait('各种各样的彩排告一段落后……');
  await rice.say_and_wait('呼啊……');
  await me.say_and_wait('稍微休息一下吧。');
  await rice.say_and_wait('欸嘿嘿，没问题的，因为……');
  await era.printAndWait([
    '工作人员C「抱歉，',
    rice.get_colored_name(),
    ' 选手！想拜托你再调整一次麦克风……」',
  ]);
  await rice.say_and_wait('好的！来、来了！');
  await rice.say_and_wait('……我想要坚持到最后。想要让大家都能露出笑容。');
  era.drawLine({ content: '登场舞台上' });
  await rice.say_and_wait(['那么，大家……还请大家多多支持 ', self_name, '！！']);
  await era.printAndWait('工作人员A「当然、没问题！！」');
  await era.printAndWait('那今天的彩排就到此为止了！');
  await rice.say_and_wait('呼……终于，结束了……呢。');
  await me.say_and_wait('没事吧？');
  await rice.say_and_wait('嗯，没事的哦。');
  await rice.say_and_wait('虽然第一次还是有很多不熟练。');
  await rice.say_and_wait('真正开幕的时候，大家都聚到这里的时候。');
  await rice.say_and_wait('我想那时候我就可以做到了。');
  await rice.say_and_wait('一点也不觉得累哦。');
  await rice.say_and_wait('更多、更多……想要更加努力。');
  await era.printAndWait([
    '工作人员B「啊，',
    rice.get_colored_name(),
    ' 选手！好像落下东西了哦——」',
  ]);
  await rice.say_and_wait('欸！？抱歉！现在就去拿！');
  await rice.say_and_wait('呀啊！？');
  await era.printAndWait('吧啦……吧啦吧啦……哐——！');
  await era.printAndWait([
    '工作人员C「怎么回事！？门倒下来了——',
    rice.get_colored_name(),
    '，危——」',
  ]);
  await era.printAndWait([
    '千钧一发之际，',
    me.get_colored_name(),
    ' 只来得及抱住 ',
    rice.get_colored_name(),
    '。',
  ]);
  await me.say_and_wait('没事吧？');
  await era.printAndWait('咚！', { fontSize: '2.5rem' });
  await rice.say_and_wait([callname.substring(0, 1), '、', callname, '！？']);
  era.drawLine();
  await rice.say_and_wait(['呼……呜……', callname, '……']);
  await me.say_and_wait('这里。');
  await rice.say_and_wait([
    '啊、',
    callname,
    '！',
    callname,
    '！！没事吗！？有哪里痛吗？',
  ]);
  await era.printAndWait([
    '……看样子 ',
    me.get_colored_name(),
    ' 是在保护 ',
    rice.get_colored_name(),
    ' 的时候，撞到了头。',
  ]);
  await me.say_and_wait('好像没事了。');
  await rice.say_and_wait('真、真的吗？但……但是还是去医院——');
  await era.printAndWait('工作人员A「啊，太好了，已经醒过来了！」');
  await era.printAndWait('工作人员A「很快救护车也会来的。」');
  await me.say_and_wait('谢谢。');
  await era.printAndWait(
    '工作人员A「哪里哪里！我们也很抱歉。突然间就开始变得糟糕起来……」',
  );
  await era.printAndWait('工作人员A「真是非常抱歉，让我们送你去医院吧。」');
  era.drawLine({ content: '医院检查后' });
  await era.printAndWait('工作人员A「……是吗。经过检查后，没有发现异常吗——」');
  await me.say_and_wait('让你们担心了，真是抱歉。');
  await era.printAndWait('工作人员A「哪里！这是我们的失误……」');
  await era.printAndWait('工作人员A「而且……我们还有必须向你们道歉的事啊。」');
  await rice.say_and_wait('但……但是大家，都已经足够……');
  await era.printAndWait([
    '工作人员A「——这次的仪式，还有 ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    '。」',
  ]);
  await era.printAndWait('工作人员A「有消息说阪神的举办会被推迟。」');
  await rice.say_and_wait('……！');
  await me.say_and_wait('这是怎么一回事？');
  await era.printAndWait(
    '工作人员A「其实……这次在赛马场里的事故，原因现在还不清楚。」',
  );
  await era.printAndWait(
    '工作人员A「而且还出现了伤者。这样的话就有必要对赛场进行全面的检查。」',
  );
  await era.printAndWait(
    '工作人员A「包括检查和维修在内，估计要花上3周以上的时间。」',
  );
  await rice.say_and_wait([
    '那样的话，就赶不上 ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    ' 了……',
  ]);
  await era.printAndWait(
    '工作人员A「嗯。为了不发生这样的事情，我们每天都在努力……」',
  );
  await era.printAndWait('工作人员A「目前为止都还没有过的事例……」');
  await era.printAndWait([
    '工作人员A「对二位和期待着 ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    ' 的大家，实在是非常抱歉！」',
  ]);
  await rice.say_and_wait(['以前都还有没有，', self_name, ' 来了，突然……']);
  await rice.say_and_wait('……');
  await era.printAndWait(
    [rice.get_colored_name(), '「难道是，', self_name, ' 的……缘故？」'],
    {
      color: rice.color,
      fontSize: '0.75rem',
    },
  );
  await era.printAndWait('那个微小的声音，不知为何却回响得特别巨大——');
  get_attr_and_print_in_event(30, [0, 0, 0, 5], 0) && (await era.waitAnyKey());
  return true;
};
