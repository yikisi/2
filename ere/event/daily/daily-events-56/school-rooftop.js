const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0),
    message = [];
  message.push(async () => {
    await kitaru.say_and_wait('喔喔喔喔喔！！！');
    await kitaru.say_and_wait([callname, ' 的便当看起来很不错啊！']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 最终还是没有抵挡住 ',
      kitaru.get_colored_name(),
      ' 的热切目光，将饭盒推到了',
      kitaru.sex,
      '面前。',
    ]);
  });
  if (love > 50) {
    message.push(async () => {
      await kitaru.say_and_wait(['那个，', callname, ' 的筷子请借我用一下！']);
      await era.printAndWait([
        me.get_colored_name(),
        '的一次性筷子在，',
        kitaru.get_colored_name(),
        ' 的手中发出了清脆的响声分开了。',
      ]);
      await kitaru.say_and_wait([
        '喔喔！依据这个占卜的话，',
        callname,
        ' 今日的运势看起来很不错呢！',
      ]);
    });
  }
  if (love > 75) {
    message.push(async () => {
      await kitaru.say_and_wait('训——练——员！想要！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 柔软的身体贴在 ',
        me.get_colored_name(),
        ' 的身上，仿佛能滴出水的眼神看着',
        me.get_colored_name(),
      ]);
      await era.printAndWait(['夹起一块肉堵住了', kitaru.sex, '的嘴。']);
      await kitaru.say_and_wait('唔……这个也不错就是啦！');
    });
  }
  await get_random_entry(message)();
};
