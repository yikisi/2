/**
 * @file 高多芬柏布 - 招募
 * @author フィンランド
 */
const { get, printAndWait, set } = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const me = get_chara_talk(0);
    const god = get_chara_talk(341);
    await print_event_name('流转变换，化为你所看见的模样', god);
    await printAndWait('新的一天，新的开始。');
    await printAndWait([
      me.get_colored_name(),
      ' 打开训练室的门，与往常不同的是，已经有人在里面了。',
    ]);
    await printAndWait(
      '窗外的风吹起水蓝的长发，她靠在窗边，沐浴在恰到好处的晨光里。',
    );
    await god.say_as_unknown_and_wait([
      '啊啦，今天也很勤奋呢，',
      sys_get_colored_callname(341, 0),
      '。',
    ]);
    await printAndWait(
      '褪去女神象征的希腊式长袍，穿着蓝色运动装的她，此刻与一位普通马娘无异。',
    );
    await printAndWait([
      '但那微微弯起，时刻微笑着的，透出如水般温柔的慈爱与包容的双眼，让 ',
      me.get_colored_name(),
      ' 霎时间便认出了祂。',
    ]);
    await printAndWait(
      '学院中持瓶的微笑女神，梦境中带着朦胧雾气的访客，与眼前的马娘重合在了一起。',
    );
    await god.say_and_wait([
      '训练员的工作很辛苦吧？身为引导',
      get('flag:角色性别') === 1 ? '马郎' : '马娘',
      '，为',
      get('flag:角色性别') === 1 ? '他' : '她',
      '们指引方向的人，迄今为止真是辛苦了呢。',
    ]);
    await god.say_and_wait('不过，今后我会看着你的。');
    await printAndWait([
      '她迈出那片金黄的晨光，走到 ',
      me.get_colored_name(),
      ' 的面前——宛如从另一个世界降临至人间。',
    ]);
    await god.say_and_wait('今后请多指教。');
    set('flag:当前互动角色', 341);
    set('cflag:341:招募状态', recruit_flags.yes);
    set('cflag:341:育成回合计时', 'x');
    await this.recruit_end();
  }
};
