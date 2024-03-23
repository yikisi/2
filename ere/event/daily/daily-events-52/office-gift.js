const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  let random_range = 3;
  if (love === 100) {
    random_range = 11;
  } else if (love >= 75) {
    random_range = 9;
  } else if (love >= 50) {
    random_range = 7;
  } else if (love > 0) {
    random_range = 5;
  }
  switch (get_random_value(0, random_range)) {
    case 0:
      await urara.say_and_wait(['嗯？', callname, ' 要送我礼物吗？谢谢！']);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 摇着尾巴，开心地收下了 ',
        me.get_colored_name(),
        ' 的礼物。',
      ]);
      break;
    case 1:
      await urara.say_and_wait([
        callname,
        ' 送我礼物，正好我也有好吃的要和 ',
        callname,
        ' 分享哦！嘿嘿～',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 笑着用萝卜与 ',
        me.get_colored_name(),
        ' 手中的礼物进行了交换。',
      ]);
      break;
    case 2:
      await urara.say_and_wait([
        '好！为了感谢 ',
        callname,
        ' 的礼物，今天的乌拉拉也会更努力的！',
      ]);
      await era.printAndWait([
        '收到 ',
        me.get_colored_name(),
        ' 的礼物后，',
        urara.get_colored_name(),
        ' 显得更有精神了。',
      ]);
      break;
    case 3:
      await urara.say_and_wait([
        '谢谢 ',
        callname,
        ' 的礼物！看来乌拉拉也要准备回礼了！诶？不用了？',
      ]);
      await era.printAndWait([
        '其实 ',
        urara.get_colored_name(),
        ' 几乎记不住回礼，但能看到',
        urara.sex,
        '的笑脸，回礼也不重要了。',
      ]);
      break;
    case 4:
      await urara.say_and_wait([
        sys_get_colored_callname(52, 47),
        ' 说不同的礼物会有，那 ',
        callname,
        ' 的礼物……果然是希望乌拉拉跑得更快吧！',
      ]);
      await era.printAndWait([
        '依旧是很有 ',
        urara.get_colored_name(),
        ' 风格的回答，但总感觉',
        urara.sex,
        '最后想到了别的什么。',
      ]);
      break;
    case 5:
      await urara.say_and_wait([
        '并不是什么贵重的东西？不管贵不贵重乌拉拉都会珍惜的！这是 ',
        callname,
        ' 的礼物嘛！',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 温和地笑着接过礼物，总感觉',
        urara.sex,
        '比以前要更成熟了。',
      ]);
      break;
    case 6:
      await urara.say_and_wait([
        '虽然不太明白，但收到 ',
        callname,
        ' 的礼物身体就变会得暖呼呼的！这是怎么回事呢……',
      ]);
      await era.printAndWait([
        '虽然说的是礼物的事情，但红着脸的 ',
        urara.get_colored_name(),
        ' 却始终热情地注视着 ',
        me.get_colored_name(),
        ' 的眼睛。',
      ]);
      break;
    case 7:
      await urara.say_and_wait([
        '谢谢 ',
        callname,
        '！不过这样的话……这个也会有 ',
        callname,
        ' 的味道吗……？',
      ]);
      await era.printAndWait([
        '盯着手中的礼物，从 ',
        urara.get_colored_name(),
        ' 身上散发出的氛围变得有些奇怪起来。',
      ]);
      break;
    case 8:
      await urara.say_and_wait(
        '今天是特别的日子吗？要是每天都是特别的日子就好了呢！',
      );
      await urara.say_and_wait([
        '不过不是也没关系！对乌拉拉来说只要和 ',
        callname,
        ' 每天都很特别哦！',
      ]);
      await era.printAndWait([
        '抱着礼物紧紧贴在 ',
        me.get_colored_name(),
        ' 身边，将尾巴悄悄缠在 ',
        me.get_colored_name(),
        ' 的腿上，小小的担当开心的说道。',
      ]);
      break;
    case 9:
      await urara.say_and_wait([
        '礼物……',
        callname,
        ' 不想收回礼的话，那就……先收下乌拉拉的『这个』吧！',
      ]);
      await era.printAndWait([
        '竖起耳朵，',
        urara.get_colored_name(),
        ' 掂起脚，趁 ',
        me.get_colored_name(),
        ' 不注意时「啾」地偷袭了 ',
        me.get_colored_name(),
        ' 的脸颊后，害羞地退开了。',
      ]);
      break;
    case 10:
      await urara.say_and_wait([
        '谢谢 ',
        callname,
        '！',
        callname,
        ' 是想要下次的一着呢？还是想要抱抱现在的乌拉拉呢？',
      ]);
      await urara.say_and_wait([
        '不过乌拉拉的话，推荐 ',
        callname,
        ' 都要哦？',
      ]);
      await era.printAndWait([
        '以纯真的语气说着的触动神经的话语，',
        urara.get_colored_name(),
        ' 渴求的樱瞳里摇曳着 ',
        me.get_colored_name(),
        ' 的倒影……',
      ]);
      break;
    case 11:
      await urara.say_and_wait([
        '……',
        callname,
        '，不只是现在，乌拉拉未来的回礼，也可以好好期待吗？',
      ]);
      await era.printAndWait([
        '收下礼物的 ',
        urara.get_colored_name(),
        ' 静静地将手盖在小腹上，面带潮红的向 ',
        me.get_colored_name(),
        ' 问着模棱两可的问题。',
      ]);
      await era.printAndWait([
        '明白小',
        urara.get_uma_sex_title(),
        '并没有期待回答，',
        me.get_colored_name(),
        ' 也只能无奈地做好迎接可能的未来的心理准备。',
      ]);
  }
};
