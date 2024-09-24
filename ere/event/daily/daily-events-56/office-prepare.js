const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const message = [],
    callname = sys_get_callname(56, 0);
  message.push(
    () =>
      get_chara_talk(56).say_and_wait([
        '多谢 ',
        callname,
        '！开运仪式现在就差一个助手！',
      ]),
    () =>
      get_chara_talk(56).say_and_wait([
        '完成这个仪式需要……啊，',
        callname,
        '，能来帮忙太好了！',
      ]),
    () =>
      get_chara_talk(56).say_and_wait([
        callname,
        '！这个请神术的加上你的POW值一定没问题的！',
      ]),
    () => get_chara_talk(56).say_and_wait('置闰仪式？感觉做起来会亮堂堂的……'),
    () =>
      get_chara_talk(56).say_and_wait(
        '联络术，请神术，驱逐术，这个仪式该归到哪一类呢？',
      ),
  );
  await get_random_entry(message)();
};
