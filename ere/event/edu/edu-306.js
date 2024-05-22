const { printAndWait, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async (hook, extra_flag, event_object) => {
  if (event_object?.arg !== 'welcome') {
    throw new Error();
  }
  const riko = get_chara_talk(306),
    me = get_chara_talk(0);
  await print_event_name('欢迎', riko);
  await printAndWait([
    '这天，',
    me.get_colored_name(),
    ' 在训练室门口看到一个正在等待的',
    riko.get_phy_sex_title(),
    '。',
  ]);
  await printAndWait([
    me.get_colored_name(),
    ' 认出',
    riko.sex,
    ' 是学园的代理理事长 ',
    riko.get_colored_actual_name(),
    '，赶紧问好。',
  ]);
  await printAndWait([
    riko.get_colored_name(),
    ' 的声音客气而庄重，',
    riko.sex,
    '表示新训练员可能事务繁忙，但学园的同僚还是应该相互认识一下的。',
  ]);
  await printAndWait([
    riko.sex,
    ' 告诉 ',
    me.get_colored_name(),
    ' 不远处的训练员办公室是所有训练员公用的，',
    me.get_colored_name(),
    ' 也可以使用，当然继续在训练室办公也是可以的。',
  ]);
  await printAndWait([
    '如果 ',
    me.get_colored_name(),
    ' 有其他问题需要商量，可以去训练员办公室找',
    riko.sex,
    '。在 ',
    get_chara_talk(302).get_colored_name(),
    ' 出差而需要',
    riko.sex,
    '代班的时候，可以找训练员办公室的 ',
    get_chara_talk(304).get_colored_name(),
    '，或者去理事长办公室找',
    riko.sex,
    '。',
  ]);
  await printAndWait([
    '告知这些信息后，',
    riko.get_colored_name(),
    ' 离去了。',
    me.get_colored_name(),
    ' 隐隐感觉到这位代理理事长心中的不满。',
  ]);
  println();
  sys_like_chara(306, 0, -25) && (await waitAnyKey());
};
