const era = require('#/era-electron');

const {
  sys_love_uma_in_event,
  sys_get_callname,
} = require('#/system/sys-calc-chara-others');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');

const { add_event } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

/** @param {CharaTalk} chara_talk */

async function love_74_week_start(chara_talk) {
  const callname = sys_get_callname(37, 0);
  const your_name = sys_get_callname(0, -2);
  await era.printAndWait(
    `在${your_name}和荣进闪耀的共同努力下，于秋季天皇赏上，${chara_talk.sex}如愿以偿地实现了自己的梦想。`,
  );
  await era.printAndWait('得益于此，本来紧密的赛程安排也变得宽松许多。');
  await chara_talk.say_and_wait(`${callname}，这个星期日，请问您有安排吗？`);
  await era.printAndWait(
    `而也正是在这段休息的间隔中，荣进闪耀突然向${your_name}发出邀请。`,
  );
  await chara_talk.say_and_wait(
    '之前外出购物时收到了工作人员派发的活动入场券。因为数量是两张，所以我希望能和您一起去享受这份乐趣。',
  );
  era.printButton('「当然可以。”」', 1);
  era.printButton('「很抱歉，那天我有别的事情需要去处理。”」', 2);
  let ret = await era.input();
  era.println();
  if (ret === 1) {
    await era.printAndWait(
      `${your_name}从荣进闪耀的话中听出了隐隐的期待之意。`,
    );
    await era.printAndWait('既然这样，那就没有不答应的理由。');
    await era.printAndWait(`因此，${your_name}欣然应允。`);
    await chara_talk.say_and_wait('好的！');
    await era.printAndWait(
      `听到${your_name}的回应，${chara_talk.sex}的脸上露出灿烂的微笑。`,
    );
    await chara_talk.say_and_wait('那么，我很期待周日的时光呢，呵呵～');
    await era.printAndWait(
      `不过，也不知道是不是${your_name}的错觉。${your_name}总觉得，此时的荣进闪耀，相较于平常，情绪的波动有些过于明显。`,
    );
    return true;
  } else {
    await era.printAndWait(
      `虽然${your_name}从荣进闪耀的话语中听出了隐隐的期待之意。`,
    );
    await era.printAndWait(
      `但遗憾的是，相比于和${chara_talk.sex}的出行，那天的${your_name}有更重要的事情需要去处理。`,
    );
    await era.printAndWait(`因此，${your_name}回绝道。`);
    await chara_talk.say_and_wait('………');
    await era.printAndWait(
      `也许是没有意料到这一发展，在听到${your_name}的话后，荣进闪耀愣了一瞬。`,
    );
    await chara_talk.say_and_wait('……我知道了。');
    await era.printAndWait(
      `回过神的${chara_talk.sex}摇了摇头，对${your_name}露出微笑。`,
    );
    await chara_talk.say_and_wait('那么就等待下次的机会吧。');
    await era.printAndWait(
      `话虽如此，但${your_name}总觉得，${your_name}从${chara_talk.sex}此时的表情里，看出了一丝落寂……（事件中断，下次触发表白事件，需要3个月的间隔）`,
    );
    era.set('cflag:37:爱慕暂拒', 74);
  }
}

/** @param {CharaTalk} chara_talk */
async function love_74_out_station(chara_talk) {
  const your_name = sys_get_callname(0, -2);
  const callname = sys_get_callname(37, 0);
  await era.printAndWait(
    `时间来到星期日，${your_name}前往与荣进闪耀约定好的碰面地。`,
  );
  await chara_talk.say_and_wait(`下午好，${callname}。`);
  era.printButton('「下午好，闪耀。”」', 1);
  await era.printAndWait(`早已等候于此的荣进闪耀微笑着向${your_name}问好。`);
  era.printButton('「看来是精心打扮过了呢。”」', 1);
  await era.printAndWait(
    `而${your_name}则敏锐地察觉到今天的${chara_talk.sex}与往日的不同。`,
  );
  await era.printAndWait('嘴唇涂染口红，眼眉点画淡妆。');
  await era.printAndWait(
    `即便不是${your_name}所习惯的素颜，但这样的装扮既没有带来明显做作感的同时，又在其本就姣好的容貌上再度平添些许魅力。`,
  );
  await era.printAndWait('所谓锦上添花大抵就是如此吧。');
  era.printButton('「很漂亮。”」', 1);
  await era.printAndWait(`因此${your_name}毫不吝啬地夸赞道。`);
  await chara_talk.say_and_wait('谢谢夸奖。');
  await era.printAndWait(
    `见${your_name}发现了自己的小心思，荣进闪耀捂嘴轻笑。`,
  );
  await chara_talk.say_and_wait('快到预定的时间了呢，事不宜迟，我们出发吧。');
  await era.printAndWait(
    `不过${chara_talk.sex}并未多解释为何要特意这样做的用义，只是深深看了${your_name}一眼，随后拉起${your_name}的手，示意${your_name}和${chara_talk.sex}一起前往游乐园。`,
  );
  await era.printAndWait('…………………………');
  await era.printAndWait('……………………');
  await era.printAndWait(
    `很显然，荣进闪耀为了今天和${your_name}的出行，准备了极为详细，精准，完美的计划。`,
  );
  await era.printAndWait(
    '从基于人流量的多少计算可能的排队时间进而决定出各个项目之间的游玩顺序，到应对各种概率出现的突发情况而规划出的备用方案。',
  );
  await era.printAndWait(
    `${chara_talk.sex}几乎事无巨细地考虑到了一切，而最终的成果便是带给${your_name}一段快乐的时光。`,
  );
  await era.printAndWait(
    `旋转木马，过山车，跳楼机……和${chara_talk.sex}一起游玩的每一个项目都令${your_name}印象深刻。`,
  );
  await chara_talk.say_and_wait('最后一个项目，乘坐摩天轮。');
  await era.printAndWait('不知不觉，时间已至黄昏。');
  await era.printAndWait(
    '夕阳西下，天空的霞光在逐渐淡去，落日的橙黄开始转为一种黯然的浅红。',
  );
  await era.printAndWait(
    `${your_name}和荣进闪耀来到整座游乐园最高的标志建筑——转悠悠摩天轮的跟前。`,
  );
  era.printButton('「壮观。”」', 1);
  await era.printAndWait(
    `面对这台由冰冷钢铁构筑而成的庞然大物，${your_name}评价道。`,
  );
  await chara_talk.say_and_wait(
    '是呢，想必坐在座舱里，待到最高处时向下俯视，会是种非常难忘的体验吧。',
  );
  await era.printAndWait(`说完，荣进闪耀深深看了${your_name}一眼。`);
  era.printButton('「？」', 1);
  await era.printAndWait(`见此，${your_name}产生了些许疑惑。`);
  await era.printAndWait(
    `因为直觉告诉${your_name}，这绝对不是${chara_talk.sex}今天第一次或者第二次这么做了。`,
  );
  era.printButton('「闪耀？”」', 1);
  await era.printAndWait(
    `更重要的是，${your_name}知道这道目光中蕴涵着情感，但${your_name}却无法更进一步的理解这份情感具体是什么。`,
  );
  await era.printAndWait(
    `于是，${your_name}想要询问${chara_talk.sex}，知晓${chara_talk.sex}这么做的理由。`,
  );
  await chara_talk.say_and_wait(`好像下一组就轮到我们了呢，${callname}。`);
  await era.printAndWait(
    `但是${chara_talk.sex}什么都没说，只是摇了摇头，对${your_name}露出无言的微笑。`,
  );
  await chara_talk.say_and_wait('该准备起来了。');
  era.printButton('「……嗯。”」', 1);
  await era.printAndWait('……………………');
  await era.printAndWait('…………………');
  await era.printAndWait('摩天轮上的景色很美。');
  await era.printAndWait('正值天朗，视野开阔。');
  await era.printAndWait(
    `${your_name}坐在座舱内，透过玻璃向下望去，看着地面喧闹的人群随着距离的爬升而逐渐缩小。`,
  );
  await era.printAndWait('恍然之间，竟有一种俯视众生的感觉。');
  await chara_talk.say_and_wait(
    '……传说，摩天轮每转过一圈，世界上就会有一对接吻的恋人。',
  );
  await era.printAndWait(
    '慢慢的，直至座舱的位置即将抵达摩天轮顶点的那一刻，从登机开始就不知为何一直沉默不语的荣进闪耀突然开口。',
  );
  era.printButton('「什么？”」', 1);
  await era.printAndWait(
    `老实说在这种场合下突然谈论这类话题是否有些太敏感了，于是${your_name}带着疑惑地将视线从窗外收回，看向面前人。`,
  );
  era.printButton('「！」', 1);
  await era.printAndWait(
    `然后，${your_name}就惊讶地发现，此时的荣进闪耀，正以一种热情的眼神看着${your_name}。`,
  );
  await era.printAndWait(
    `其中所蕴含的感情大体与之前${your_name}察觉到的目光相等，不过浓度，却又是提升了无数倍。`,
  );
  await era.printAndWait(
    `也正因如此，${your_name}才终于能读懂此时${chara_talk.sex}瞳孔中所不断闪动着的那道光芒的具体含义。`,
  );
  await era.printAndWait('那是……爱。');
  era.printButton('「闪耀……”」', 1);
  await era.printAndWait(
    `自然而然的，${your_name}也看穿了${chara_talk.sex}在今天邀请${your_name}出来游玩的真正目的。`,
  );
  await chara_talk.say_and_wait('嘘。');
  await era.printAndWait(
    `大概这就是心有灵犀吧，就在${your_name}恍然大悟的同一瞬间。荣进闪耀伸出一根手指，放在唇边，将${your_name}想要说出口的话强行压了回去。`,
  );
  await chara_talk.say_and_wait(
    '……其实，自从资深级的那一场秋季天皇赏结束之后，我就一直在思索应该怎样去定义和您之间的关系。',
  );
  await era.printAndWait(
    `而${chara_talk.sex}本人则沉默了一会，待酝酿完情绪之后，接着说道。`,
  );
  await chara_talk.say_and_wait(
    '一方面，就像您说的那样，我最开始寻找您的目的只是希望您能够帮助我达成梦想。您做到了，所以我们理应可以就此别过。',
  );
  await chara_talk.say_and_wait(
    '但另一方面，当我真的意识到将要与您分别这一个事实的时候。我却又突然产生了犹豫，或者说……',
  );
  await era.printAndWait(
    `荣进闪耀将手搭在胸口，面露温柔微笑地看着${your_name}。`,
  );
  await chara_talk.say_and_wait('不舍之情。');
  era.printButton('「不舍……吗？”」', 1);
  era.printButton('「………”」', 1);
  await era.printAndWait(`面前人这幅真情流露的话语令${your_name}微微一愣。`);
  await era.printAndWait(`（[“我想，看着${your_name}一直奔跑下去。”]）`);
  await era.printAndWait(
    `${your_name}突然想起之前于秋季天皇赏赛后说出的那段话。`,
  );
  await era.printAndWait(
    `也许，在对待互相的情感上，${your_name}和${chara_talk.sex}是相同的。`,
  );
  await chara_talk.say_and_wait(
    '最开始，我并不理解这种不舍之情的来源，因为我和您追根究底，只是学生与老师的关系。',
  );
  await era.printAndWait(`说着，${chara_talk.sex}摇了摇头，随后轻吐一口气。`);
  await chara_talk.say_and_wait(
    '直到我开始回忆起自相遇以来，我们之间发生的点点滴滴，我才理解，自己的心中为什么会升起这样的情感。',
  );
  await chara_talk.say_and_wait(`因为‘爱’，${callname}。`);
  era.printButton('「！！！」', 1);
  await era.printAndWait('简单直白的话语，却能如此深入人心。');
  await chara_talk.say_and_wait(
    '我爱您，正因如此，我才不愿意与您分别，我才想要一直陪伴在您的身边。',
  );
  era.printButton('「……这就是，你想对我说的吗。”」', 1);
  await era.printAndWait(
    `${your_name}深吸一口气，强行将因为${chara_talk.sex}的表白而产生剧烈波动的内心安抚下来。`,
  );
  await era.printAndWait(`片刻之后，${your_name}才轻声道。`);
  await chara_talk.say_and_wait('是的。');
  await era.printAndWait(`${chara_talk.sex}点头，坦然承认这一点。`);
  await chara_talk.say_and_wait(
    '您还记得吗，在经典级夏季合宿开始的那一天，您曾经对我说过，无论我做出什么选择，您都将和我一起承担。',
  );
  await era.printAndWait(
    `紧接着，${your_name}看见${chara_talk.sex}向着前方，也就是对着${your_name}慢慢伸出左手。`,
  );
  await chara_talk.say_and_wait('那么，我也一样。');
  await era.printAndWait(`${chara_talk.sex}一字一顿道。`);
  await chara_talk.say_and_wait(
    '我想，在未来的每一年每一天，每一分每一秒都陪伴在您的身边。',
  );
  await chara_talk.say_and_wait('我想，与您一起承担这份未来。');
  await era.printAndWait(
    `荣进闪耀注视着${your_name}，${chara_talk.sex}的眼神无比坚定，可能比过去的任何时候都要坚定。`,
  );
  era.printButton('「………」', 1);
  await era.printAndWait(
    `而${your_name}，也彻底理解了${chara_talk.sex}对${your_name}所持有的深沉情感。`,
  );
  await era.printAndWait(
    `${your_name}知道，无论成与否，${your_name}都必须要给${chara_talk.sex}一个准确的答复。`,
  );
  await era.printAndWait('一个……必须要经过慎重决定后才能给出的答复。');
  era.printButton(`「握紧${chara_talk.sex}的手。」`, 1);
  era.printButton(`「回避${chara_talk.sex}的眼神。」`, 2);
  let ret = await era.input();
  era.println();
  if (ret === 1) {
    await era.printAndWait(`${your_name}爱${chara_talk.sex}吗？`);
    await era.printAndWait('这是一个很有意思的问题。');
    await era.printAndWait(
      `也许在最开始，就像荣进闪耀说的那样，${your_name}对于和${chara_talk.sex}之间关系的定义就只是学生和老师。`,
    );
    await era.printAndWait(
      '但事到如今，经过成百上千日的相处，好感就如同幼苗一般，从最开始的扎根，到成长为一颗参天大树，最终突破桎梏。',
    );
    await era.printAndWait(
      `${your_name}开始觉得，${your_name}需要和${chara_talk.sex}拥有一个更加平等的关系。`,
    );
    await era.printAndWait(`是的，${your_name}爱${chara_talk.sex}，毫无疑问。`);
    await chara_talk.say_and_wait('！！');
    await era.printAndWait(
      `冰冷的座舱内，初恋的${chara_talk.get_teen_sex_title()}瞪大双眼。`,
    );
    await era.printAndWait(
      '温暖的触感从前方传来，悬浮于空中的手有了安稳的依靠。',
    );
    await chara_talk.say_and_wait('是这样啊。');
    await era.printAndWait(
      '暧昧的氛围开始慢慢在房间内扩散，荣进闪耀的脸上露出醒目的绯红。',
    );
    await chara_talk.say_and_wait('这就是……您的答复吗？');
    era.printButton('「我爱你，荣进闪耀。”」', 1);
    await era.printAndWait(
      `${your_name}注视着${chara_talk.sex}，语气深沉，如同想直接将情感灌输到${chara_talk.sex}的内心。`,
    );
    await chara_talk.say_and_wait('嗯！！');
    await era.printAndWait(
      `而${chara_talk.sex}，则在得到${your_name}的准确答复之后用力点头，脸上露出迄今为止最为甜蜜的笑容。`,
    );
    await chara_talk.say_and_wait('那么，我是荣进闪耀，以后……');
    await era.printAndWait(
      '说着，荣进闪耀的话语微微一顿，如同在许下一个永恒誓言。',
    );
    await chara_talk.say_and_wait('还请多多指教。');
    await sys_love_uma_in_event(37);
  } else {
    await era.printAndWait(`${your_name}爱${chara_talk.sex}吗？`);
    await era.printAndWait('这是一个很有意思的问题。');
    await era.printAndWait(
      `仔细想来，从最开始到现在，${your_name}对于和${chara_talk.sex}之间关系的定义一直都是学生与老师。`,
    );
    await era.printAndWait(
      `诚然，${your_name}对${chara_talk.sex}抱有好感，并且这份好感在成百上千日的相处中还不断增长。`,
    );
    await era.printAndWait(
      `但是，这不代表${your_name}爱${chara_talk.sex}，或者说，是‘恋爱’${chara_talk.sex}。`,
    );
    await era.printAndWait('毕竟爱的形式不只局限于一种，不是吗？');
    await era.printAndWait('友情是爱，亲情是爱，师生之情也是爱。');
    await era.printAndWait(
      `${your_name}认为自己对于荣进闪耀的情感也许能在这三者中都找到踪迹。`,
    );
    await era.printAndWait('但唯独，不能是更加平等的恋爱。');
    await chara_talk.say_and_wait('………');
    await era.printAndWait(
      `冰冷的座舱内，初恋的${chara_talk.get_teen_sex_title()}缓缓垂下眼眉。`,
    );
    await era.printAndWait(
      '本应相交的视线在这一刻互相错开，如同两条永远无法汇聚的平行线。',
    );
    await chara_talk.say_and_wait('是这样啊……');
    await era.printAndWait(
      `${chara_talk.sex}缓缓收回悬浮于空中的手，随后无力地垂落在膝盖上。`,
    );
    await chara_talk.say_and_wait('这就是……您的答复吗？');
    era.printButton('「……抱歉。”」', 1);
    await era.printAndWait(`${your_name}张了张嘴，想要说些什么。`);
    await era.printAndWait(
      `但最终也只是轻叹一口气，为${chara_talk.sex}的真情没有得到回报这一点而道歉。`,
    );
    await chara_talk.say_and_wait('不，您不需要道歉。');
    await era.printAndWait(
      `荣进闪耀摇了摇头，即便肉眼可见的落寂浮现于${chara_talk.sex}的脸庞之上，${chara_talk.sex}也仍然扯起嘴角，对${your_name}露出柔和微笑。`,
    );
    await chara_talk.say_and_wait(
      '……您没有错，反而是我这边没有正确认清双方之间的关系，就唐突采取了行动，给您带来麻烦。',
    );
    await era.printAndWait(
      `话虽如此，但${your_name}也能听出，说这句话时的荣进闪耀，语气中带着明显的颤抖。`,
    );
    era.printButton('「闪耀……”」', 1);
    await era.printAndWait(
      `见此，${your_name}伸出手，想要去安抚${chara_talk.sex}。`,
    );
    await chara_talk.say_and_wait('………');
    await era.printAndWait(
      `可后者却是将${your_name}的手轻轻按下，随后扭头，看向窗外。`,
    );
    era.printButton('「………”」', 1);
    await era.printAndWait(
      '尴尬的气氛慢慢在房间内扩散，场景开始陷入一种令人有些窒息的沉默。',
    );
    await era.printAndWait(
      `就这样，在整段摩天轮之行的后半程，除了机械运转时带起的轰隆作响，${your_name}没有听到其他的任何声音。`,
    );
    await chara_talk.say_and_wait('……嘛，总而言之。');
    era.printButton('「！」', 1);
    await era.printAndWait('直到临近终点，这种压抑的情况才得以改善。');
    await chara_talk.say_and_wait(
      '我并不后悔与您的相遇，即便现在只能以学生或友人的身份陪伴在您的身边，我也依旧感到满足。',
    );
    await era.printAndWait(
      `似乎是在这短暂的平静中调整好了心态，荣进闪耀回头看向${your_name}，脸上再次浮现往日的平和。`,
    );
    era.printButton('「我也很开心能认识你。”」', 1);
    await era.printAndWait(`见此，${your_name}点头回应。`);
    await era.printAndWait('“滴。”');
    await era.printAndWait(
      `紧接着，座舱落地的提示音传入${your_name}的耳中，下一秒，锁死的大门自动开启。`,
    );
    await chara_talk.say_and_wait('呵呵。');
    await era.printAndWait('荣进闪耀起身，露出甜蜜的微笑。');
    await chara_talk.say_and_wait(`那么，我们回去吧，${callname}。`);
    era.set('cflag:37:爱慕暂拒', 74);
  }
}

/**
 * 荣进闪耀 - 爱慕
 *
 * @author 爱放箭的袁本初
 */
module.exports = async (hook, _, event_object) => {
  const love = era.get('love:37'),
    edu_event_marks = new EduEventMarks(25),
    chara_talk = get_chara_talk(37);
  if (hook === event_hooks.week_end) {
    if (love === 74) {
      if (
        era.get(`relation:37:0`) > 375 &&
        edu_event_marks.get('tenn_sho') === 1
      )
        (await love_74_week_start(chara_talk)) &&
          add_event(event_hooks.out_station, event_object);
    } else throw new Error('unsupported!');
  } else if (hook === event_hooks.out_station) {
    await love_74_out_station(chara_talk);
  }
};
