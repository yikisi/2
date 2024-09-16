const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

module.exports = async () => {
  // 改成占卜会决定你担当心情的好坏。
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    callname = sys_get_callname(56, 0);
  await era.printAndWait(['和担当一起来到了', kitaru.sex, '们家的神社。']);
  await kitaru.say_and_wait('那么，是求签的时候了！');
  await kitaru.say_and_wait('我看看！今天的运势是！');
  await kitaru.say_and_wait('白兴大人～白兴大人～');
  await era.printAndWait([
    kitaru.get_colored_name(),
    ' 以其独创的手法摇着签筒，伴随着吟唱的祷词，一条纸签从签筒中滑落。',
  ]);
  await kitaru.say_and_wait('嘿！');
  // test here
  let luck = era.get('status:56:PTSD') === 1 ? 3 : get_random_value(0, 3);
  switch (luck) {
    case 0:
      await era.printAndWait('（小吉！）');
      await kitaru.say_and_wait('还不错！');
      break;
    case 1:
      await era.printAndWait('（中吉！）');
      await kitaru.say_and_wait('哦！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 对 ',
        me.get_colored_name(),
        ' 露出了笑容。',
      ]);
      break;
    case 2:
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 将纸签交给了 ',
          me.get_colored_name(),
          ' 并示意念出上面的字。在听到大吉之后，',
          kitaru.sex,
          '露出惊喜的神情扑到 ',
          me.get_colored_name(),
          ' 的身上。',
        ]);
        await kitaru.say_and_wait(['把好运也分给我一点吧！', callname, '！']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 紧紧抱住了 ',
          me.get_colored_name(),
          ' 的腰，让 ',
          me.get_colored_name(),
          ' 得以感受到',
          kitaru.sex,
          '的体温和心跳。',
        ]);
      } else {
        await kitaru.say_and_wait('哇！大吉！');
        await kitaru.say_and_wait([callname, '！你看到了吗？']);
        await era.printAndWait(
          '倒不如说，对于此间神社的巫女而言，抽不出大吉才是一件奇怪的事。',
        );
      }
      break;
    case 3:
      await era.printAndWait('（凶）');
      await kitaru.say_and_wait('唔……');
      await era.printAndWait([
        '就在 ',
        me.get_colored_name(),
        ' 思考该如何安慰',
        kitaru.sex,
        '的时候，一阵疾风吹来，将 ',
        kitaru.get_colored_name(),
        ' 手中的纸签卷走。',
      ]);
      await kitaru.say_and_wait('白兴大人保佑……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 盯着飞走的纸签喃喃自语，',
        me.get_colored_name(),
        ' 不知道该说些什么。',
      ]);
  }
  if (era.get('status:56:运势依赖') === 1 || era.get('status:56:稳定') !== 1) {
    if (luck === 2) {
      era.set('status:56:大吉', 1);
      era.set('status:56:中吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);

      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:干劲', 2);
      }
    }
    if (luck === 1) {
      era.set('status:56:中吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:干劲', 1);
      }
    }
    if (luck === 0) {
      era.set('status:56:小吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:中吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') !== 1) {
        era.set('cflag:56:干劲', 0);
      }
    }
    if (luck === 3) {
      era.set('status:56:凶', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:中吉', 0);

      era.set('cflag:56:干劲', -1 - (Math.random() < 0.5));
    }
  }
};
