const { get, printAndWait, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const handlers = {
  async fail(riko, me) {
    await print_event_name('失败', riko);
    const glasse = get_chara_talk(202),
      cocon = get_chara_talk(203);
    await printAndWait([
      glasse.get_colored_name(),
      ' 和 ',
      cocon.get_colored_name(),
      ' 的育成结束了。',
    ]);
    await printAndWait([
      riko.get_colored_name(),
      ' 并没有大声斥责 ',
      me.get_colored_name(),
      '。',
    ]);
    await printAndWait([
      '在安抚好两位担当后，',
      riko.sex,
      '与 ',
      me.get_colored_name(),
      ' 静静地穿行在学园内。',
    ]);
    if (get('cflag:202:育成次数') === 1) {
      await printAndWait([
        '在接近训练员办公室时，',
        riko.sex,
        '才淡淡地开口，问 ',
        me.get_colored_name(),
        ' 是否已经竭尽全力。',
      ]);
      await printAndWait([
        '不等 ',
        me.get_colored_name(),
        ' 做出反应，',
        riko.sex,
        '径直往办公室而去。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 站在原地，回想起学园内关于',
        glasse.get_uma_sex_title(),
        '第二次机会的传闻。',
      ]);
    } else {
      await printAndWait([
        '在接近训练员办公室时，',
        riko.sex,
        '才淡淡地开口，问 ',
        me.get_colored_name(),
        ' 还有没有再来一次的勇气。',
      ]);
    }
    println();
    sys_like_chara(306, 0, -200 - 100 * get('cflag:202:育成次数')) &&
      (await waitAnyKey());
  },
  async welcome(riko, me) {
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
  },
};

/**
 * 㭴本理子 - 育成
 *
 * @author 黑奴队长（临时）
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[event_object?.arg]) {
    throw new Error();
  }
  return await handlers[event_object.arg](
    get_chara_talk(306),
    get_chara_talk(0),
  );
};
