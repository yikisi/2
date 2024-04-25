const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const { add_event } = require('#/event/queue');

async function love_49_week_end(chara_talk) {
  const me = get_chara_talk(0);
  await print_event_name('爱欲', chara_talk);
  await era.printAndWait(
    `首先，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人很帅气，温柔、可靠，即使${chara_talk.name}给${me.sex_code - 1 ? '姐姐' : '哥哥'}大人添了很多麻烦，也还是会笑着给${chara_talk.name}打气。`,
  );
  await era.printAndWait(
    `……有时候还很可爱！总之${chara_talk.name}喜欢${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
  );
  await era.printAndWait(
    `好几次好几次好几次，${chara_talk.name}想把${me.sex_code - 1 ? '姐姐' : '哥哥'}大人扑倒。`,
  );
  await era.printAndWait(
    `可一想到会让${me.sex_code - 1 ? '姐姐' : '哥哥'}大人伤心，${chara_talk.name}都努力忍耐下来了。`,
  );
  await era.printAndWait(`正准备回去时，你看到了一个站在走廊下的粉色身影。`);
  era.printButton(
    `当然了，因为${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的心情才是最重要的。`,
    1,
  );
  era.printButton(
    `不管${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的回答是哪一种，${chara_talk.name}都不会再忍受下去了。`,
    2,
  );
  const ret = await era.input();
  if (ret === 1) {
    era.set('cflag:30:爱慕暂拒', 49);
  } else {
    await chara_talk.say_and_wait(
      `教会了${chara_talk.name}要相信自己的人正是${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，${chara_talk.name}这次一定会努力下去，绝不放弃。\n`,
    );
  }
  return true;
}
async function love_49(chara_talk) {
  const me = get_chara_talk(0);
  await print_event_name('告白', chara_talk);
  chara_talk.print(
    `${chara_talk.name}最喜欢${me.sex_code - 1 ? '姐姐' : '哥哥'}大人了`,
  );
  chara_talk.print(`正因为最喜欢，所以这份爱，即使无法结出果实也没有关系。`);
  chara_talk.print(`所以呢，这样就可以了。`);
  chara_talk.print(`${chara_talk.name}，走到这里就好。`);
  chara_talk.print(`${chara_talk.name}，本是如此祈愿的。\n`);
  chara_talk.print(
    `${chara_talk.name}对${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说，无论如何都想要看某些店。`,
  );
  chara_talk.print(
    `于是他就带${chara_talk.name}来到了这里，是距离学院有些远的街区。`,
  );
  chara_talk.print(`一家是大大的书店，一家是精美的杂货屋。`);
  chara_talk.print(`这里尚且是闪耀着彩灯，让恋人们欢度圣诞的街道。`);
  chara_talk.print(`稍远处，便是闪烁着霓虹色灯光的大人的场所。`);
  await chara_talk.say_and_wait(
    `${chara_talk.name}，有想要送给${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的礼物。`,
  );
  await chara_talk.say_and_wait(
    `${chara_talk.name}的一切，都是${me.sex_code - 1 ? '姐姐' : '哥哥'}大人赋予的。`,
  );
  await chara_talk.say_and_wait(
    `所以${chara_talk.name}想要对${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说一句，万分感谢您一直以来对${chara_talk.name}的照顾。`,
  );
  await chara_talk.say_and_wait(
    `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，我一定会努力当一个好赛马娘的，所以请你不要放弃我。`,
  );
  await era.printAndWait(`${chara_talk.name}抬起头来，突然对你如此说道。`);
  await chara_talk.say_and_wait(
    `当我听到${me.sex_code - 1 ? '姐姐' : '哥哥'}大人愿意当我训练员的时候，真的很高兴喔。`,
  );
  await chara_talk.say_and_wait(`我从小就一直努力想成为给人带来幸福的人。`);
  await chara_talk.say_and_wait(
    `但是，对爸爸妈妈来说，我想他们一定放心不下${chara_talk.name}吧。`,
  );
  await era.printAndWait(`${chara_talk.name}一字一句地从喉咙里吐出话来。`);
  await chara_talk.say_and_wait(
    `从小${chara_talk.name}就一直希望有个${me.sex_code - 1 ? '姐姐' : '哥哥'}。如果真能有个${me.sex_code - 1 ? '姐姐' : '哥哥'}的话，${chara_talk.name}就可以像他撒娇…`,
  );
  await era.printAndWait(`充满真挚纯粹的眼神。`);
  await era.printAndWait(`${chara_talk.name}美丽的双眸，现在正静静地凝视你。`);
  await chara_talk.say_and_wait(
    `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，你会不会觉得这样的${chara_talk.name}很麻烦呢？`,
  );
  era.printButton(`一点也不会觉得麻烦。`, 1);
  await era.input();
  era.printButton(`${chara_talk.name}任何时候都可以向我撒娇哦。`, 1);
  await era.input();
  await chara_talk.say_and_wait(
    `真的吗？你愿意一直陪在${chara_talk.name}的身边吗？`,
  );
  await era.printAndWait(`两人之间的距离瞬间拉近。`);
  era.printButton(`嗯，我会一直陪在你身边。`, 1);
  await era.input();
  await chara_talk.say_and_wait(
    `一定哦？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人要一直陪在${chara_talk.name}身旁。`,
  );
  await chara_talk.say_and_wait(`不可以不告而别，也不准突然撒手人寰地离开。`);
  era.printButton(`我会永远陪在${chara_talk.name}身边的。`, 1);
  await era.input();
  await chara_talk.say_and_wait(
    `谢谢，我最喜欢${me.sex_code - 1 ? '姐姐' : '哥哥'}大人了。`,
  );
  await era.printAndWait(`${chara_talk.name}双手一把抱住了你。`);
  await sys_love_uma_in_event(30);
  return false;
}

async function love_74_week_end(chara_talk) {
  const me = get_chara_talk(0);
  await print_event_name(`热恋`, chara_talk);
  await era.printAndWait(
    `${chara_talk.name}结束了C位的LIVE后，${CharaTalk.me.actual_name}和她的心情都十分愉悦。`,
  );
  await era.printAndWait(
    `但是，现在的${chara_talk.name}，正带着妖艳的目光，迈出可爱又急促的小步伐向你奔来。`,
  );
  await me.say_and_wait(`嗯…`);
  await era.printAndWait(
    `身着胜负服的${chara_talk.name}兴奋地双手抱住你两侧的腹部。`,
  );
  await era.printAndWait(
    `她带着不可思议的表情抬头仰望你，眼中的艳丽满溢而出。`,
  );
  await chara_talk.say_and_wait(
    `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，${chara_talk.name}做了什么坏事吗？`,
  );
  await chara_talk.say_and_wait(`为什么……不抱着${chara_talk.name}呢？`);
  await era.printAndWait(
    `敌不过${chara_talk.name}湿润起来的眼神，${CharaTalk.me.actual_name}紧紧抱住了少女娇小的身躯。`,
  );
  await era.printAndWait(
    `时间流逝，觉得差不多该换衣服解散的你，抓住了${chara_talk.name}的肩膀。`,
  );
  await era.printAndWait(
    `${chara_talk.name}恋恋不舍地摩挲了下你的手指，说了声回头见便走向更衣室。`,
  );
  await era.printAndWait(
    `以前无论做什么都小心翼翼，战战兢兢的${chara_talk.name}，现在却像小恶魔一样和你亲昵。`,
  );
  await era.printAndWait(
    `LIVE之后的一次训练后，${chara_talk.name}穿着体操服向你走来。`,
  );
  await era.printAndWait(
    `${chara_talk.name}把体操服号码牌的部分压在你身上，享受着你的气味。`,
  );
  await era.printAndWait(
    `心想有女儿的父亲大概是这种心情吧？更用力地回抱住她。`,
  );
  await era.printAndWait(`很痒哦，${chara_talk.name}。`);
  await chara_talk.say_and_wait(`诶？`);
  await era.printAndWait(`你催促${chara_talk.name}去换衣服。`);
  await era.printAndWait(
    `目送她步履蹒跚的身影，你深切认识到你们之间的关系产生了某种变化。`,
  );
  await era.printAndWait(
    `最近，${chara_talk.name}对${CharaTalk.me.actual_name}的亲昵之举逐渐过激。`,
  );
  await era.printAndWait(
    `搂抱、亲吻、拉着你的手不小心摸了摸胸部，这些甚至不会让你觉得有问题了。`,
  );
  await sys_love_uma_in_event(30);
  return true;
}
async function love_89_week_end(chara_talk) {
  const me = get_chara_talk(0);
  await print_event_name(`佳偶`, chara_talk);
  era.drawLine({ content: '某个休息日的早上' });
  await era.printAndWait(
    `${chara_talk.name}，被包裹在灼热中、带有些许痛苦的、无法言说的不安弄醒了。`,
  );
  await era.printAndWait(`这种感觉，${chara_talk.name}并不是第一次经历。`);
  await era.printAndWait(
    `如果是以往，稍微再睡一下，之后活动活动身体，就可以痊愈了。`,
  );
  await era.printAndWait(
    `于是，${chara_talk.name}就像往常一样活动身体，换好衣服然后出门。`,
  );
  era.drawLine();
  await era.printAndWait(`但是，怎么也治不好。`);
  await era.printAndWait(`漫步、奔跑、坐下休息。`);
  await era.printAndWait(`既不安又难过，可是无可救药。`);
  await era.printAndWait(`${chara_talk.name}抱着忐忑的心情坐在路边。`);
  await era.printAndWait(`偶然的，${CharaTalk.me.actual_name}路过了。`);
  await era.printAndWait(
    `${CharaTalk.me.actual_name}为难地牵起了${chara_talk.name}的手。`,
  );
  era.drawLine();
  await era.printAndWait(
    `到${me.sex_code - 1 ? '姐姐' : '哥哥'}大人房间的时候，${chara_talk.name}已经到极限了。`,
  );
  await era.printAndWait(`热情、悲伤、不安。`);
  await era.printAndWait(
    `但是，心里的某个地方，从被${me.sex_code - 1 ? '姐姐' : '哥哥'}大人牵着手开始，就酸酸甜甜的。`,
  );
  await era.printAndWait(
    `${chara_talk.name}把自己寄存在${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的怀抱里。`,
  );
  await era.printAndWait(`自然的，刚才的不安消失了。`);
  await chara_talk.say_and_wait(`嘶……`);
  await era.printAndWait(`每一次深呼吸，温暖的东西便会积攒起来。`);
  await chara_talk.say_and_wait(`呼……`);
  await era.printAndWait(
    `慢慢地吐气，积蓄的东西就好变成甜蜜的幸福，传遍全身。`,
  );
  await era.printAndWait(`仅仅是呼吸，就会越来越幸福。`);
  await chara_talk.say_and_wait(`嗯……啊！`);
  await era.printAndWait(`${chara_talk.name}因为这份快感要融化了。`);
  await era.printAndWait(`你的手触碰到了${chara_talk.name}的后背。`);
  await era.printAndWait(`宛如顽童，触摸、轻抚。`);
  await chara_talk.say_and_wait(`啊…嗯…`);
  await era.printAndWait(
    `融化在粘稠中的${chara_talk.name}，被你的手搅拌，卷起快乐的波浪。`,
  );
  await era.printAndWait(`然后，你就把手放在${chara_talk.name}尾巴的根部。`);
  await era.printAndWait(`有模有样地，不停地打转、触摸。`);
  await chara_talk.say_and_wait(`啊…嗯啊！`);
  await era.printAndWait(
    `${chara_talk.name}的身体颤抖着，软成一滩乱七八糟的烂泥。`,
  );
  await chara_talk.say_and_wait(
    `啊啊，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人…更多，再多一点！`,
  );
  await era.printAndWait(`这时，你的手突然停了下来。`);
  await era.printAndWait(`波涛汹涌的某物，也一下子变得风平浪静。`);
  await chara_talk.say_and_wait(`${me.sex_code - 1 ? '姐姐' : '哥哥'}…大人…`);
  await era.printAndWait(`然后，你就把${chara_talk.name}的尾巴从根部拽起。`);
  await era.printAndWait(`${chara_talk.name}的全身都被幸福的浪潮侵袭。`);
  await chara_talk.say_and_wait(
    `啊啊…啊，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人…`,
  );
  await chara_talk.say_and_wait(`${chara_talk.name}…好幸福！`);
  await era.printAndWait(
    `过了一会儿，${chara_talk.name}沉浸在幸福的泥淖里，就这样睡着了。`,
  );
  await era.printAndWait(
    `起来的时候，神清气爽的${chara_talk.name}对上了你恶作剧似的笑脸。`,
  );
  await era.printAndWait(
    `感觉害羞的脸都快起火了，${chara_talk.name}只好缩回被子里。`,
  );
  await chara_talk.say_and_wait(`但是，真幸福啊…`, true);
  await sys_love_uma_in_event(30);
  return true;
}
async function love_99_week_end(chara_talk) {
  const me = get_chara_talk(0);
  await print_event_name('依存', chara_talk);
  await chara_talk.say_and_wait(
    `为什么不看着${chara_talk.name}呢？因为${chara_talk.name}是个坏孩子所以讨厌${chara_talk.name}了吗？`,
  );
  await chara_talk.say_and_wait(
    `这样啊……那就必须刻上${chara_talk.name}是个坏孩子的证明吧。`,
  );
  await chara_talk.say_and_wait(
    `所以${me.sex_code - 1 ? '姐姐' : '哥哥'}大人必须惩罚${chara_talk.name}，因为${chara_talk.name}是个坏孩子，所以${me.sex_code - 1 ? '姐姐' : '哥哥'}大人才不给${chara_talk.name}爱。`,
  );
  await chara_talk.say_and_wait(
    `为什么？为了${me.sex_code - 1 ? '姐姐' : '哥哥'}大人${chara_talk.name}可以每天训练，每周参加比赛，不需要休息。`,
  );
  await chara_talk.say_and_wait(
    `只要${me.sex_code - 1 ? '姐姐' : '哥哥'}大人爱着${chara_talk.name}，就算${chara_talk.name}跑不动了也会继续跑下去。`,
  );
  await chara_talk.say_and_wait(
    `拜托了，${chara_talk.name}就只有${me.sex_code - 1 ? '姐姐' : '哥哥'}大人了……`,
  );
  await chara_talk.say_and_wait(
    `所以，请爱${chara_talk.name}，看着${chara_talk.name}。`,
  );
  await chara_talk.say_and_wait(
    `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，摸摸${chara_talk.name}好吗？`,
  );
  await chara_talk.say_and_wait(
    `欸欸？谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
  );
  await chara_talk.say_and_wait(`最喜欢你了！`);
  await sys_love_uma_in_event(30);
}
/**
 * ${chara_talk.name} - 爱慕
 *
 * @author 梦露
 */
module.exports = async (hook, _, event_object) => {
  const love = era.get('love:30'),
    chara_talk = get_chara_talk(30);
  if (hook === event_hooks.week_end) {
    if (love === 49) {
      (await love_49_week_end(chara_talk)) &&
        add_event(event_hooks.school_atrium, event_object);
    } else if (love === 74) {
      await love_74_week_end(chara_talk);
    } else if (love === 89) {
      await love_89_week_end(chara_talk);
    } else if (love === 99) {
      await love_99_week_end(chara_talk);
    }
  } else if (hook === event_hooks.school_atrium) {
    if (love === 49) {
      await love_49(chara_talk);
    }
  }
};
