const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56'),
    message = [],
    callname = sys_get_callname(56, 0);
  if (love > 84) {
    message.push(() =>
      kitaru
        .say_and_wait(['要试试 ', sys_get_callname(0, 56), ' 做的味增汤吗！'])
        .then(() =>
          kitaru.say_and_wait(['喜欢的话！每天都可以做给 ', callname, ' 哦！']),
        ),
    );
  } else if (love > 75) {
    message.push(() =>
      kitaru
        .say_and_wait('让我来帮忙吧！这回绝对没问题的！')
        .then(() =>
          era.printAndWait([
            '看来 ',
            kitaru.get_colored_name(),
            ' 这段时间学了许多。',
          ]),
        ),
    );
  } else if (love > 49) {
    message.push(() =>
      kitaru
        .say_and_wait('呃，这次我在一旁学着就好！')
        .then(() => kitaru.say_and_wait('只是想将来可能会有要用的时候！'))
        .then(() =>
          era.printAndWait([
            '望着 ',
            me.get_colored_name(),
            ' 的脸，',
            kitaru.get_colored_name(),
            ' 说出了这番话。',
          ]),
        ),
    );
  } else {
    message.push(() =>
      kitaru
        .say_and_wait([callname, ' 需要的话！我也可以来帮忙！'])
        .then(() =>
          era.printAndWait([
            '在 ',
            kitaru.get_colored_name(),
            ' 的各种奇思妙想下，做饭的速度反而慢上了许多。',
          ]),
        ),
    );
  }
  await get_random_entry(message)();
};
