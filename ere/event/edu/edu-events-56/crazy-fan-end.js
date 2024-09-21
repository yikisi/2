const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');

module.exports = async () => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0);

  if (!era.get('flag:强制BE')) {
    throw new Error();
  }
  await me.say_and_wait('又输了？');
  await era.printAndWait([
    '已经不记得是第几次安慰失败后的 ',
    kitaru.get_colored_name(),
    ' 了，自那次对',
    kitaru.sex,
    '来说至关重要的比赛失败后，破裂成无数碎片的自信心再也没有合起来过。',
  ]);
  await era.printAndWait([
    '稍稍挪了一下桌面上的文件，以免',
    kitaru.sex,
    '的泪水滴在文件上。',
  ]);
  await me.say_and_wait(['……这次的理由是什么？']);
  await kitaru.say_and_wait(['运势不佳。']);
  await era.printAndWait([
    '也对，',
    me.get_colored_name(),
    ' 还能从',
    kitaru.sex,
    '的口中听到什么回答。',
  ]);
  await era.printAndWait([
    '就算是被',
    kitaru.sex,
    '口口生生叫着是命定之人的 ',
    me.get_colored_name(),
    '，现在也感觉有些厌烦了。',
  ]);
  await era.printAndWait(['该怎么办呢？']);
  await era.printAndWait(['自信……自信……自信……']);
  await era.printAndWait([
    '面前这家伙明明很强的，为什么，为什么连 ',
    me.get_colored_name(),
    ' 这样一个普通的人类都能把',
    kitaru.sex,
    '当成是养殖场里的兔子一样对待，是时候让',
    kitaru.sex,
    '意识到这一点了。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 走到',
    kitaru.sex,
    '面前，弯下腰，在',
    kitaru.sex,
    '闪躲的目光中，抬起了',
    kitaru.sex,
    '的双手，放在了自己的脖颈上。',
  ]);
  await me.say_and_wait([
    '感觉到了吗？',
    sys_get_colored_callname(0, 56),
    '。',
  ]);
  await kitaru.say_and_wait(['那个，那个，', callname, ' 这回要怎么惩罚我？']);
  await era.printAndWait([
    '于是，',
    me.get_colored_name(),
    ' 在',
    kitaru.sex,
    '略微有些期待的目光中回答道。',
  ]);
  await me.say_and_wait(['试着掐一下我吧！']);
  await era.printAndWait([
    '就是这样，勾起赛',
    kitaru.get_uma_sex_title(),
    '埋在心底的支配欲。',
  ]);
  await era.printAndWait([
    '对一直压制着自己的 ',
    kitaru.get_colored_name(),
    ' 而言，突然释放出来的结果和随之而来的快感只会更为强烈。',
  ]);
  await era.printAndWait([
    '连自己最敬重的 ',
    callname,
    ' 都能踩在脚下，理所当然的自卑也就不存在了。',
  ]);
  await era.printAndWait([
    '窒息感逐渐涌了上来，在失去意识前，最后记得的是面前 ',
    kitaru.get_colored_name(),
    ' 带着可爱笑容的俏脸。',
  ]);
  era.drawLine();
  await era.printAndWait('计划是成功的。');
  await era.printAndWait([
    kitaru.get_colored_name(),
    ' 的确变得强硬了很多，作为差马在红技能的使用上变得愈发熟练，或者说……狠毒？',
  ]);
  await era.printAndWait([
    '在推开家里的门前，',
    me.get_colored_name(),
    ' 想着这件事。',
  ]);
  await era.printAndWait([
    '在家里迎接 ',
    me.get_colored_name(),
    ' 的是直截了当的一拳，用手捂着脸颊，逐渐变成朱红色的嘴角正滴下些许带着血的唾液。',
  ]);
  await era.printAndWait([
    '抬起头，身前的 ',
    kitaru.get_colored_name(),
    ' 舔了舔嘴唇，露出了在 ',
    me.get_colored_name(),
    ' 眼中仍然如太阳般明亮的笑容。',
  ]);
  await era.printAndWait([
    '在',
    kitaru.sex,
    '下一脚踢到 ',
    me.get_colored_name(),
    ' 的肚子上前，',
    me.get_colored_name(),
    ' 突然想起还没有约定今天的安全词是什么。',
  ]);
  await print_event_name(
    [{ content: '给现人神的祭品', color: buff_colors[3] }],
    kitaru,
  );
};
