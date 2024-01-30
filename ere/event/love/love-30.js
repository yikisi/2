const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { cb_enum, add_event } = require('#/event/queue');

/**
 * 米浴 - 爱慕
 *
 * @author 梦露
 */
module.exports = async (hook) => {
  const chara_talk = get_chara_talk(30),
    love = era.get('love:30'),
    me = get_chara_talk(0);
  if (hook === event_hooks.week_end) {
    if (love === 49) {
      await print_event_name('爱欲', chara_talk);
      await era.printAndWait(
        `首先，哥哥大人很帅气，温柔、可靠，即使米浴给哥哥大人添了很多麻烦，也还是会笑着给米浴打气。`,
      );
      await era.printAndWait(`……有时候还很可爱！总之米浴喜欢哥哥大人。`);
      await era.printAndWait(`好几次好几次好几次，米浴想把哥哥大人扑倒。`);
      await era.printAndWait(
        `可一想到会让哥哥大人伤心，米浴都努力忍耐下来了。`,
      );
      await era.printAndWait(
        `正准备回去时，你看到了一个站在走廊下的粉色身影。`,
      );
      era.printButton(`当然了，因为哥哥大人的心情才是最重要的。`, 1);
      era.printButton(
        `不管哥哥大人的回答是哪一种，米浴都不会再忍受下去了。`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        era.set('cflag:30:爱慕暂拒', 49);
      } else {
        await chara_talk.say_and_wait(
          `教会了米浴要相信自己的人正是哥哥大人，米浴这次一定会努力下去，绝不放弃。`,
        );
      }
      const love_obj = new EventObject(30, cb_enum.love);
      add_event(event_hooks.back_school, love_obj);
    } else if (love === 74) {
      await print_event_name(`热恋`, chara_talk);
      await era.printAndWait(
        `米浴结束了C位的LIVE后，${CharaTalk.me.actual_name}和她的心情都十分愉悦。`,
      );
      await era.printAndWait(
        `但是，现在的米浴，正带着妖艳的目光，迈出可爱又急促的小步伐向你奔来。`,
      );
      await me.say_and_wait(`嗯…`);
      await era.printAndWait(`身着胜负服的米浴兴奋地双手抱住你两侧的腹部。`);
      await era.printAndWait(
        `她带着不可思议的表情抬头仰望你，眼中的艳丽满溢而出。`,
      );
      await chara_talk.say_and_wait(`哥哥大人，米浴做了什么坏事吗？`);
      await chara_talk.say_and_wait(`为什么……不抱着米浴呢？`);
      await era.printAndWait(
        `敌不过米浴湿润起来的眼神，${CharaTalk.me.actual_name}紧紧抱住了少女娇小的身躯。`,
      );
      await era.printAndWait(
        `时间流逝，觉得差不多该换衣服解散的你，抓住了米浴的肩膀。`,
      );
      await era.printAndWait(
        `米浴恋恋不舍地摩挲了下你的手指，说了声回头见便走向更衣室。`,
      );
      await era.printAndWait(
        `以前无论做什么都小心翼翼，战战兢兢的米浴，现在却像小恶魔一样和你亲昵。`,
      );
      await era.printAndWait(`LIVE之后的一次训练后，米浴穿着体操服向你走来。`);
      await era.printAndWait(
        `米浴把体操服号码牌的部分压在你身上，享受着你的气味。`,
      );
      await era.printAndWait(
        `心想有女儿的父亲大概是这种心情吧？更用力地回抱住她。`,
      );
      await era.printAndWait(`很痒哦，米浴。`);
      await chara_talk.say_and_wait(`诶？`);
      await era.printAndWait(`你催促米浴去换衣服。`);
      await era.printAndWait(
        `目送她步履蹒跚的身影，你深切认识到你们之间的关系产生了某种变化。`,
      );
      await era.printAndWait(
        `最近，米浴对${CharaTalk.me.actual_name}的亲昵之举逐渐过激。`,
      );
      await era.printAndWait(
        `搂抱、亲吻、拉着你的手不小心摸了摸胸部，这些甚至不会让你觉得有问题了。`,
      );
      await sys_love_uma_in_event(30);
    } else if (love === 89) {
      await print_event_name(`佳偶`, chara_talk);
      era.drawLine({ content: '某个休息日的早上' });
      await era.printAndWait(
        `米浴，被包裹在灼热中、带有些许痛苦的、无法言说的不安弄醒了。`,
      );
      await era.printAndWait(`这种感觉，米浴并不是第一次经历。`);
      await era.printAndWait(
        `如果是以往，稍微再睡一下，之后活动活动身体，就可以痊愈了。`,
      );
      await era.printAndWait(
        `于是，米浴就像往常一样活动身体，换好衣服然后出门。`,
      );
      era.drawLine();
      await era.printAndWait(`但是，怎么也治不好。`);
      await era.printAndWait(`漫步、奔跑、坐下休息。`);
      await era.printAndWait(`既不安又难过，可是无可救药。`);
      await era.printAndWait(`米浴抱着忐忑的心情坐在路边。`);
      await era.printAndWait(`偶然的，${CharaTalk.me.actual_name}路过了。`);
      await era.printAndWait(
        `${CharaTalk.me.actual_name}为难地牵起了米浴的手。`,
      );
      era.drawLine();
      await era.printAndWait(`到哥哥大人房间的时候，米浴已经到极限了。`);
      await era.printAndWait(`热情、悲伤、不安。`);
      await era.printAndWait(
        `但是，心里的某个地方，从被哥哥大人牵着手开始，就酸酸甜甜的。`,
      );
      await era.printAndWait(`米浴把自己寄存在哥哥大人的怀抱里。`);
      await era.printAndWait(`自然的，刚才的不安消失了。`);
      await chara_talk.say_and_wait(`嘶……`);
      await era.printAndWait(`每一次深呼吸，温暖的东西便会积攒起来。`);
      await chara_talk.say_and_wait(`呼……`);
      await era.printAndWait(
        `慢慢地吐气，积蓄的东西就好变成甜蜜的幸福，传遍全身。`,
      );
      await era.printAndWait(`仅仅是呼吸，就会越来越幸福。`);
      await chara_talk.say_and_wait(`嗯……啊！`);
      await era.printAndWait(`米浴因为这份快感要融化了。`);
      await era.printAndWait(`你的手触碰到了米浴的后背。`);
      await era.printAndWait(`宛如顽童，触摸、轻抚。`);
      await chara_talk.say_and_wait(`啊…嗯…`);
      await era.printAndWait(
        `融化在粘稠中的米浴，被你的手搅拌，卷起快乐的波浪。`,
      );
      await era.printAndWait(`然后，你就把手放在米浴尾巴的根部。`);
      await era.printAndWait(`有模有样地，不停地打转、触摸。`);
      await chara_talk.say_and_wait(`啊…嗯啊！`);
      await era.printAndWait(`米浴的身体颤抖着，软成一滩乱七八糟的烂泥。`);
      await chara_talk.say_and_wait(`啊啊，哥哥大人…更多，再多一点！`);
      await era.printAndWait(`这时，你的手突然停了下来。`);
      await era.printAndWait(`波涛汹涌的某物，也一下子变得风平浪静。`);
      await chara_talk.say_and_wait(`哥哥…大人…`);
      await era.printAndWait(`然后，你就把米浴的尾巴从根部拽起。`);
      await era.printAndWait(`米浴的全身都被幸福的浪潮侵袭。`);
      await chara_talk.say_and_wait(`啊啊…啊，哥哥大人…`);
      await chara_talk.say_and_wait(`米浴…好幸福！`);
      await era.printAndWait(
        `过了一会儿，米浴沉浸在幸福的泥淖里，就这样睡着了。`,
      );
      await era.printAndWait(
        `起来的时候，神清气爽的米浴对上了你恶作剧似的笑脸。`,
      );
      await era.printAndWait(`感觉害羞的脸都快起火了，米浴只好缩回被子里。`);
      await chara_talk.say_and_wait(`（但是，真幸福啊…）`);
      await sys_love_uma_in_event(30);
    } else if (love === 99) {
      await print_event_name('依存', chara_talk);
      await chara_talk.say_and_wait(
        `为什么不看着米浴呢？因为米浴是个坏孩子所以讨厌米浴了吗？`,
      );
      await chara_talk.say_and_wait(
        `这样啊……那就必须刻上米浴是个坏孩子的证明吧。`,
      );
      await chara_talk.say_and_wait(
        `所以哥哥大人必须惩罚米浴，因为米浴是个坏孩子，所以哥哥大人才不给米浴爱。`,
      );
      await chara_talk.say_and_wait(
        `为什么？为了哥哥大人米浴可以每天训练，每周参加比赛，不需要休息。`,
      );
      await chara_talk.say_and_wait(
        `只要哥哥大人爱着米浴，就算米浴跑不动了也会继续跑下去。`,
      );
      await chara_talk.say_and_wait(`拜托了，米浴就只有哥哥大人了……`);
      await chara_talk.say_and_wait(`所以，请爱米浴，看着米浴。`);
      await chara_talk.say_and_wait(`哥哥大人，摸摸米浴好吗？`);
      await chara_talk.say_and_wait(`欸欸？谢谢，哥哥大人。`);
      await chara_talk.say_and_wait(`最喜欢你了！`);
      await sys_love_uma_in_event(30);
    }
  } else if (hook === event_hooks.back_school) {
    await print_event_name('告白', chara_talk);
    await era.printAndWait(`米浴最喜欢哥哥大人了。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `正因为最喜欢，所以这份爱，即使无法结出果实也没有关系。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`所以呢，这样就可以了。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`米浴，走到这里就好。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`米浴，本是如此祈愿的。`, {
      color: chara_talk.color,
    });
    era.println();
    await era.printAndWait(`米浴对哥哥大人说，无论如何都想要看某些店。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `于是他就带米浴来到了这里，是距离学院有些远的街区。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`一家是大大的书店，一家是精美的杂货屋。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`这里尚且是闪耀着彩灯，让恋人们欢度圣诞的街道。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`稍远处，便是闪烁着霓虹色灯光的大人的场所。`, {
      color: chara_talk.color,
    });
    await chara_talk.say_and_wait(`米浴，有想要送给哥哥大人的礼物。`);
    await chara_talk.say_and_wait(`米浴的一切，都是哥哥大人赋予的。`);
    await chara_talk.say_and_wait(
      `所以米浴想要对哥哥大人说一句，万分感谢您一直以来对米浴的照顾。`,
    );
    await chara_talk.say_and_wait(
      `哥哥大人，我一定会努力当一个好赛马娘的，所以请你不要放弃我。`,
    );

    await era.printAndWait(`米浴抬起头来，突然对你如此说道。`);
    await chara_talk.say_and_wait(
      `当我听到哥哥大人愿意当我训练员的时候，真的很高兴喔。`,
    );
    await chara_talk.say_and_wait(`我从小就一直努力想成为给人带来幸福的人。`);
    await chara_talk.say_and_wait(
      `但是，对爸爸妈妈来说，我想他们一定放心不下米浴吧。`,
    );
    await era.printAndWait(`米浴一字一句地从喉咙里吐出话来。`);
    await chara_talk.say_and_wait(
      `从小米浴就一直希望有个哥哥。如果真能有个哥哥的话，米浴就可以像他撒娇…`,
    );
    await era.printAndWait(`充满真挚纯粹的眼神。`);
    await era.printAndWait(`米浴美丽的双眸，现在正静静地凝视你。`);
    await chara_talk.say_and_wait(`哥哥大人，你会不会觉得这样的米浴很麻烦呢？`);
    era.printButton(`一点也不会觉得麻烦。`, 1);
    await era.input();
    era.printButton(`米浴任何时候都可以向我撒娇哦。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`真的吗？你愿意一直陪在米浴的身边吗？`);
    await era.printAndWait(`两人之间的距离瞬间拉近。`);
    era.printButton(`嗯，我会一直陪在你身边。`, 1);
    await chara_talk.say_and_wait(`一定哦？哥哥大人要一直陪在米浴身旁。`);
    await chara_talk.say_and_wait(`不可以不告而别，也不准突然撒手人寰地离开。`);
    era.printButton(`我会永远陪在米浴身边的。`, 1);
    await chara_talk.say_and_wait(`谢谢，我最喜欢哥哥大人了。`);
    await era.printAndWait(`米浴双手一把抱住了你。`);
    await sys_love_uma_in_event(30);
  }
};
