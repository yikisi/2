const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 32] = async (maya, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:24:位置') !== location_enum.beach
    ) {
      cb();
      return;
    }
    await print_event_name('夏季合宿（经典年）结束', maya);
    await era.printAndWait('夏季合宿转眼间就结束了。');
    await era.printAndWait([maya.get_colored_name(), ' 也算是相当努力──']);
    await say_by_passer_by_and_wait('巴士司机', '好的，抵达特雷森学园了。');
    await maya.say_and_wait('呼……呼……');
    era.printButton('「' + sys_get_callname(0, 24) + '，已经到了哦」', 1);
    await era.input();
    await maya.say_and_wait(['咦……？', sys_get_callname(24, 0), '……呼。']);
    await maya.say_and_wait('呼啊……没事。我知道的……');
    await maya.say_and_wait('呼……呼……');
    await era.printAndWait([
      '……',
      maya.sex,
      '这个夏天很努力，',
      me.get_colored_name(),
      ' 决定让',
      maya.sex,
      '稍微再睡一下。',
    ]);
  };

  handlers[95 + 32] = async (maya, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:24:位置') !== location_enum.beach
    ) {
      cb();
      return;
    }
    const brian = get_chara_talk(16);
    await print_event_name('夏季合宿（资深年）结束', maya);
    await maya.say_and_wait('呼……『夏季合宿』终于在今天结束了……');
    await maya.say_and_wait('嘻嘻……人家也引擎全开认真训练了……');
    await maya.say_and_wait('所以在回程的巴士上……我要……稍微休息一下……');
    await maya.say_and_wait('到了之后……会起来的……');
    await maya.say_and_wait('呼……呼……');
    await era.printAndWait([
      '……于是 ',
      me.get_colored_name(),
      ' 今年也让',
      maya.sex,
      '在巴士上好好地休息了。',
    ]);
    era.drawLine();
    await maya.say_and_wait('嗯……到学园了……？呼啊……嗯。');
    await maya.say_and_wait(
      '嘻嘻。我在车上睡得很饱。所以追加训练也能好好加油……的……',
    );
    era.printButton('「你看起来还是很困」', 1);
    await era.input();
    await maya.say_and_wait('唔……才没有…………嗯？');
    await brian.say_and_wait('呼……呼…………还没……！');
    await brian.say_and_wait('我……还可以……！');
    await maya.say_and_wait(['……！', callname, '，刚才那是──']);
    era.printButton(`「是 ${sys_get_callname(0, 16)} 啊」`, 1);
    await era.input();
    await maya.say_and_wait('嗯……是没错……');
    await maya.say_and_wait(['……', maya.sex, '十分耀眼。亮到很刺眼。']);
    await maya.say_and_wait('比起之前……还要耀眼。');
    await maya.say_and_wait([
      '……',
      callname,
      '。我还是想要现在开始训练。可以吧？',
    ]);
    await era.printAndWait([
      '于是',
      maya.sex,
      '揉了几下眼睛之后，就跑去训练场了。',
    ]);
  };
};
