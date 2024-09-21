const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0);
  if (era.get('cflag:56:妊娠回合计时') > 0) {
    await kitaru.print_and_wait([
      '自 ',
      callname,
      ' 离开后，',
      kitaru.get_colored_name(),
      ' 一直把自己封在家里的藏书室。',
    ]);
    await kitaru.say_and_wait('是的！是的！找到了！');
    await era.printAndWait(
      [
        kitaru.get_colored_name(),
        {
          color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
          content: '「找到了找到了找到了找到了找到了找到了找到了！！！！！」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await kitaru.say_and_wait([
      '献祭需要孩子的血，这样就能追踪到 ',
      sys_get_callname(56, 0),
      '！',
    ]);
    await kitaru.print_and_wait([
      '摸着自己微微隆起的肚子，披头散发的 ',
      kitaru.get_colored_name(),
      ' 脸上挂着足以称之为扭曲的微笑。',
    ]);
  } else if (love < 49) {
    await kitaru.say_and_wait(['这个闹钟是 ', callname, ' 的开运道具吗？']);
    await kitaru.say_and_wait('唔！');
    await kitaru.say_and_wait('我现在就还给你！');
  } else if (love > 89) {
    await kitaru.say_and_wait('离开了……');
    await kitaru.say_and_wait('命定之人……离开了……');
    await era.printAndWait(
      [
        kitaru.get_colored_name(),
        {
          color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
          content: '「不……不要不要不要不要不要不不不不要啊！」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
  }
};
