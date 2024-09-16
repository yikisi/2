const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0);
  if (love > 49) {
    await me.say_and_wait('好了吗？阿福');
    await kitaru.say_and_wait('嗯——嗯～');
    await era.printAndWait([
      '名叫 ',
      kitaru.get_colored_name(),
      ' 的，栗毛的团子，正趴在 ',
      me.get_colored_name(),
      ' 的身上',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '正依着',
      kitaru.sex,
      '的请求，顺起自己担当',
      kitaru.get_uma_sex_title(),
      '毛茸茸的头发。',
    ]);
    await era.printAndWait([
      '偶尔指尖掠过 ',
      kitaru.get_colored_name(),
      ' 敏感的耳朵根部时，',
      kitaru.sex,
      '的身体就会微微颤抖。',
    ]);
    await kitaru.say_and_wait(['呼呼……', callname, '……']);
    await era.printAndWait(['看来距离', kitaru.sex, '休息够还有好久']);
  } else {
    await kitaru.say_and_wait('呼……呼……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 难得的安静了下来，如寺庙中的佛像般陷入了入定的状态。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '则开始准备起先前二人一起买回来的苹果。',
    ]);
  }
};
