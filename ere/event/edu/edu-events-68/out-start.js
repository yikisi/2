const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} kita
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kita, me, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 68) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg;
  if (event_arg === 95 + 1) {
    await print_event_name('新年拜访', kita);
    await era.printAndWait('众弟子「师父，新年快乐！！！」');
    await era.printAndWait(
      `下午三点十五分，身为训练员的 ${me.name} 听着 ${kita.name} 父亲弟子们震耳欲聋的问好声，终于松了口气。`,
    );
    await era.printAndWait(
      `${me.name} 身穿黑色和服，在榻榻米上撑起身体向一旁的男人鞠了一躬。`,
    );
    await era.printAndWait(
      `身旁小北的父亲微微颌首，此人身材高大不怒自威，让 ${me.name} 看起来像黑道们请的文化人顾问。`,
    );
    await era.printAndWait(
      `若不是同样穿着印有荷叶纹样黑色和服，满脸笑意轻松写意的小北正坐在 ${me.name} 身旁，恐怕 ${me.name} 早就起身鞠躬站到弟子的行列里了吧。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，第一次在这么多人面前很紧张对吧～`,
    );
    await era.printAndWait(
      `合上推拉门，小北笑嘻嘻地凑在 ${me.name} 身边对 ${me.name} 说。`,
    );
    await era.printAndWait(
      `${me.name} 揉了揉担当的脑袋，在嘻嘻哈哈的轻巧吵闹声中开始享受起了新的一年。`,
    );
    era.println();
    get_attr_and_print_in_event(
      68,
      [5, 5, 5, 5, 5],
      35,
      JSON.parse('{"体力":300}'),
    ) && (await era.waitAnyKey());
  } else if (event_arg === 'hot_spring_event') {
    await print_event_name('温泉旅行', kita);
    await era.printAndWait(`${me.name} 在训练员室里整理着文件……`);
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}！那个，我要和你说温泉券的声音！`,
    );
    await kita.say_and_wait(`这三年，我有好好努力对吧！`);
    await kita.say_and_wait(`是这样了吧训练员${me.get_adult_sex_title()}！`);

    await era.printAndWait(
      `突然闯进训练员室的小北，这么大声向 ${me.name} 询问道。`,
    );
    await era.printAndWait([
      '怎么突然开始说这个了？',
      me.get_colored_name(),
      ' 略带诧异地看着面前的',
      kita.get_teen_sex_title(),
      '。',
    ]);
    era.println();
    era.printButton('「嗯，有好好努力了哦。」', 1);
    await era.input();
    await era.printAndWait(`毕竟无论如何，这三年来的胜利都是有目共睹的。`);
    await era.printAndWait(
      `${kita.name} 付出的努力毫无疑问，甚至远超我个人的预计，而结果也是显而易见的。`,
    );
    await kita.say_and_wait(`谢谢你，这三年来小北我一直在压抑着自己……`);
    await kita.say_and_wait(
      `但是，现在有了训练员${me.get_adult_sex_title()}的努力，就算稍微奖励一下小北也是可以的，对吧！`,
    );
    await era.printAndWait(
      `黑发的${kita.get_teen_sex_title()}一步步地逼近，用纤细的双手压住 ${
        me.name
      } 的肩膀让 ${me.name} 无法动弹。`,
    );
    if (new KitaEduMarks().hot_spring > 0) {
      await kita.say_and_wait([
        '所以 ',
        sys_get_colored_callname(68, 0),
        '，我们就用之前的温泉券去温泉吧！',
      ]);
      era.println();
      era.printButton(
        `「可以去！${sys_get_callname(0, 68)}你松手，我们这就去！所以松手哇！」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '一边这么说着，',
        me.get_colored_name(),
        ' 慌忙从抽屉里找出放好的温泉券在 ',
        kita.get_colored_name(),
        ' 面前摇晃了起来。',
      ]);
    } else {
      await kita.say_and_wait([
        '所以 ',
        sys_get_colored_callname(68, 0),
        '，我们就去温泉吧！',
      ]);
      await era.printAndWait([
        kita.get_colored_name(),
        ' 一边说一边亮出了一张温泉券，上面隐约印着一个以「北」开头的词……',
      ]);
    }
    era.drawLine({ content: '温泉旅馆' });
    await era.printAndWait(
      `为了防止过于想要奖励的小北做出什么出格的事，${me.name} 和小北一起来到了温泉旅馆。`,
    );
    await kita.say_and_wait(
      `呼啊～这里的温泉洗的好舒服啊～感觉身体心灵都洗的干干净净了～`,
    );
    await era.printAndWait(
      `用毛巾擦着白皙的后颈，${kita.name} 跪坐在柔软的垫子上，柔顺的马尾在软嫩有力的两只小脚间摇来摇去。`,
    );
    await era.printAndWait(
      `平日里紧绷的态度消失不见，看起来在泡过温泉后小北放松了不少。`,
    );
    await era.printAndWait(`挠～挠～`);
    await era.printAndWait(
      `${me.name} 打了个激灵，发现小北不知不觉转身趴在地板上，用尾巴轻轻挠着 ${me.name} 的脚心。`,
    );
    await era.printAndWait(
      `而在被 ${me.name} 发现之后，小北立刻打着滚在榻榻米上嘻嘻笑了起来。`,
    );
    await kita.say_and_wait(
      `呼呼呼～平时都一直紧绷着，放松下来后想要像小孩子一样在训练员面前撒娇玩闹了呢……哇！`,
    );
    await era.printAndWait(
      `打着滚的 ${kita.name}，不知不觉间就撞到了墙上，就这么大叫着露出了傻乎乎的笑容。`,
    );
    await era.printAndWait(
      `偶尔犯一下傻放开瞎闹似乎也挺好的呢，一边这么想着，${me.name} 开始和 ${kita.name} 在房间里就这么傻笑着打闹起来。`,
    );
    era.println();
    sys_like_chara(68, 0, 50) && (await era.waitAnyKey());
  } else {
    return false;
  }
  return true;
};
