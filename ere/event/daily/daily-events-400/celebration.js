const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const ss = get_chara_talk(400),
    callname = sys_get_callname(400, 0),
    me = get_chara_talk(0);
  await print_event_name('打上花火', ss);
  await ss.say_and_wait(['所以说……', callname, '，我的和服看起来好看吗？']);
  await era.printAndWait([
    '和年初时的和服截然不同，此刻的 ',
    ss.get_colored_name(),
    ' 穿着一身充满了夏日气息的和服，',
  ]);
  await era.printAndWait([
    '将自己的长发梳起来之后，',
    ss.get_colored_name(),
    ' 显得文静而优雅。',
  ]);
  await era.printAndWait([
    ss.sex,
    '自然的牵着 ',
    me.get_colored_name(),
    ' 的手，靠在 ',
    me.get_colored_name(),
    ' 的怀里面，任由 ',
    me.get_colored_name(),
    ' 牵着',
    ss.sex,
    '在夏日祭典举办的场所之中随处走动。',
  ]);
  await era.printAndWait([
    me.get_couple_title(),
    ' 体验了几乎所有的小商家，从吃的到玩的一个都没有放过，',
  ]);
  await era.printAndWait([
    ss.get_colored_name(),
    ' 似乎还特别幸运的抽到了一根发簪，在商家的注视下让 ',
    me.get_colored_name(),
    ' 将发簪别到',
    ss.sex,
    '的头发里面。',
  ]);
  await ss.say_and_wait(
    '今天我玩的很愉快哦……说实话如果没有遇到你的话，说不定我连烟花都不会想来看呢。',
  );
  await era.printAndWait([
    '在盛大的烟火表演之下，',
    me.get_couple_title(),
    ' 坐在某个不容易被发现的角落之中，看起来就好像是一对甜蜜的小情侣一般。',
  ]);
  era.printButton('「是吗？我有礼物要送给你，和我来吧。」', 1);
  await era.input();
  await era.printAndWait([
    '烟火结束之后，',
    me.get_colored_name(),
    ' 拉起了',
    ss.sex,
    '的手，无视 ',
    ss.get_colored_name(),
    ' 疑惑的神情，将',
    ss.sex,
    '带到了一片空旷的沙滩处。',
  ]);
  await ss.say_and_wait(['诶，', callname, ' 的礼物……是……是什么啊？']);
  await era.printAndWait([
    ss.sex,
    '看起来有些不安又有些兴奋的望向 ',
    me.get_colored_name(),
    '，甚至已经将手伸向了自己和服的系带。',
  ]);
  await era.printAndWait('（嘭！！！）');
  await era.printAndWait([
    '烟花升天之后爆炸开来的声音传到了',
    ss.sex,
    '的耳朵里面，',
    ss.sex,
    '惊讶的回头望去，',
  ]);
  await era.printAndWait(
    '一颗又一颗烟花在远处炸开，爆出了一个又一个美轮美奂的图案。',
  );
  await ss.say_and_wait('这……这是……？');
  await era.printAndWait([
    ss.sex,
    '的眼睛似乎有些湿润，回头看到了拿出仙女棒的 ',
    me.get_colored_name(),
    '。',
  ]);
  await me.say_and_wait(
    '夏天啊，当然是要一起来玩烟火才开心啦，这是我送给你的烟火表演，看完之后就一起来玩怎么样？',
  );
  await era.printAndWait([
    '随后 ',
    me.get_colored_name(),
    ' 感觉到一阵劲风袭来，瞬间就被 ',
    ss.get_colored_name(),
    ' 扑到在了柔软的沙滩上，',
  ]);
  await era.printAndWait([
    '听着',
    ss.sex,
    '的声音，轻轻的抚摸着 ',
    ss.get_colored_name(),
    ' 的脑袋，还时不时挠挠',
    ss.sex,
    '耳朵里面的绒毛。',
  ]);
  await era.printAndWait([
    '柔情似水的 ',
    ss.get_colored_name(),
    ' 趴在 ',
    me.get_colored_name(),
    ' 的身上，露出了绝美的笑容。',
  ]);
  await ss.say_and_wait([
    callname,
    ' 的礼物实在是太贵重了……还请允许用身体来偿还这份贵重的礼物吧。',
  ]);
  await era.printAndWait([
    '最后 ',
    me.get_couple_title(),
    ' 还是因为在夜晚的沙滩上疯玩了大半个晚上，最后精疲力尽回到房间一碰床就睡着了为结束。',
  ]);
};
