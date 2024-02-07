const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async () => {
  if (!era.get('status:3:腿伤')) {
    throw new Error();
  }
  const me = get_chara_talk(0),
    teio = get_chara_talk(3);

  if (era.get('cflag:3:招募状态') === recruit_flags.yes) {
    await era.printAndWait(
      '🎶You made one mistake, you got burned at the stake🎶',
      { align: 'center', isParagraph: true },
    );
    await era.printAndWait(
      `${teio.name} 收起雨伞，用伞钩扣住了挂架，顺便取下帽子，${teio.sex}从衣柜下层拖出一个行李箱，拉到床边，坐在上面翘起了腿。`,
    );
    await era.printAndWait(
      '把帽子斜戴在头上，遮住马耳，蓝色的眼眸前飘过阵阵烟尘，窗外的阳光穿透进来，给它们镀上了一层金粉。',
    );
    await era.printAndWait(
      `托着下巴，${teio.sex}盯着 ${me.name} 的睡脸，阳光流过 ${me.name} 睫毛的间隙。目光扫过有规律起伏的鼻翼，稍稍发白的双唇，扣好的衣领。`,
    );

    await era.printAndWait("🎶You're finished, you're foolish, you failed🎶", {
      align: 'center',
      isParagraph: true,
    });

    era.printButton(`「早上好啊。」`, 1);
    await era.input();

    await era.printAndWait(
      `${teio.name} 俯冲向前一把扼住了 ${me.name} 的喉咙，左膝盖压住了 ${me.name} 的右臂肘关节，右腿顶着胸口，最后拧紧了左手大拇指。`,
    );
    await era.printAndWait(
      `微弯下腰，${teio.sex}瞪着眼看向 ${me.name} 的一脸笑意。`,
    );
    await me.say_and_wait('唔，我亲爱的担当想要早安吻吗——咳啊！');
    era.println();

    await era.printAndWait(
      `${teio.name} 双手发力，${me.name} 的五官同时抖了起来。`,
    );

    await era.printAndWait("🎵There's always a hope on this slippery slope🎵", {
      align: 'center',
      isParagraph: true,
    });

    await me.say_and_wait('你，还没，额呜，吃早餐吧。');
    era.println();

    await era.printAndWait('扬起的嘴角不停抽搐，流下带着酒气的口水。');
    await era.printAndWait(
      `${teio.name} 眯起眼睛，右膝向下压去。${me.name} 的双手猛地一震，左手连续拍打了${teio.sex}的手背好几下。`,
    );
    await era.printAndWait(
      `拍了好一会，嘴角的高度开始降下，血丝包围了 ${me.name} 的眼珠。`,
    );
    await era.printAndWait(
      `${me.name} 闭上双眼，呜咽一声，颤抖的食指在 ${teio.name} 的手背上慢慢地写了一个S。`,
    );
    await era.printAndWait(
      `${teio.name} 歪歪头，等O在手背写了一半，她松开了喉咙上的手。${me.name} 咳嗽着，两手都瘫软下来。`,
    );
    await me.say_and_wait('咳，咳咳呜，我的天啊，早餐可不能，额咳，晚吃。');
    await era.printAndWait(`${me.name} 每咳一声，胸前就传来酸痛感。`);

    await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
      align: 'center',
      isParagraph: true,
    });

    await teio.say_and_wait('嗯哼，可是你好像快十一点了才醒欸。');
    era.println();
    await me.say_and_wait(
      '对不起！我真心对不起，我不该在你不在的时候偷偷抽烟喝酒的。',
    );
    era.println();
    await era.printAndWait(
      `${me.name} 一说完，又感到一双小手贴上了自己的脖子肉。${me.name} 双腿一震，瞪大了眼睛。`,
    );
    era.println();
    await me.say_and_wait(
      '好好好我呸别别别！别再来了！真的别再来了！呼，我懂了。',
    );
    era.println();
    await era.printAndWait(
      `${me.name} 深吸了口气，正视着 ${teio.name} 的蓝色瞳孔说`,
    );
    era.println();

    era.printButton('「我知错了，我后悔了！」', 1);
    await era.input();

    await era.printAndWait(
      '🎵To get back in that game and burn off your shame🎵',
      {
        align: 'center',
        isParagraph: true,
      },
    );

    await era.printAndWait(
      `${teio.name} 盯住身下 ${me.name} 的脸，慢慢收回了手，双膝离开了 ${me.name} 的身体。看到自己的拇指还被拧着，${me.name} 挑起眉，说`,
    );
    era.println();
    await me.say_and_wait('你总不能让我一边被你牵着一边单手给你作早餐吧？');
    era.println();
    await era.printAndWait(
      `${teio.name} 松开手，扶着脑袋上的帽子，轻轻后跳下了床。`,
    );
    era.println();
    await teio.say_and_wait('我不饿。');
    era.println();
    await era.printAndWait(
      `${teio.sex}走到窗边，歪着头倚在深色的窗帘上。${me.name} 揉了揉肘关节坐起来，抿着嘴说`,
    );
    era.println();
    await me.say_and_wait('不饿身上带这个干什么？');
    era.println();
    await era.printAndWait(
      `${teio.name} 一回头，只见 ${me.name} 右手掌里放着一块包装好的小面包。${teio.sex}收紧嘴角，向前走了一步，${me.name} 赶紧摆摆手。`,
    );
    era.println();
    await me.say_and_wait(
      '放轻松我的好担当。记得下次拿了东西要趁热吃。还有，如果只是想和我一起共进饭食的话……早上你知道怎么弄醒我。',
    );
    era.println();
    await era.printAndWait(
      `${teio.name} 一摸口袋，涨红了脸，轻踢了 ${me.name} 的屁股一脚。`,
    );
    await era.printAndWait(
      `${me.name} 摸了摸屁股打开衣柜，解开睡衣扣子，取出一件不起眼的格子衬衫换上。`,
    );
    await era.printAndWait(
      `她盯着 ${me.name} 换完了衣服，和 ${me.name} 一同离开了房间。`,
    );

    await era.printAndWait('🎶And dance with the big boys again🎶', {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait(
      `${me.name} 一手铺好桌布，另一只手放下端着的一盘炒蛋和香肠，摆好自己的餐具，把餐巾平放在大腿上。`,
    );
    await era.printAndWait(
      `${me.name} 喝了口新打的橙汁，在 ${teio.name} 的咀嚼声中进食。然后 ${me.name} 切开鸡蛋，叉起来送到 ${teio.name} 嘴边。`,
    );
    era.println();
    await me.say_and_wait('尝尝味道够不够。');
    era.println();
    await era.printAndWait(
      `${teio.name} 一口吞下，一边嚼着一边切下一块肉，叉到 ${me.name} 面前。${me.name} 俯身咬住了叉子，把肉卷进嘴里。`,
    );
    era.println();

    era.printButton(`「嗯唔，你多吃点，对健康和发育有好处。」`, 1);
    await era.input();

    await era.printAndWait(`${me.name} 桌下的脚尖被马娘轻踩了一下。`);

    await era.printAndWait("🎶It's a strange, strange game🎶", {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait(
      `距离 ${me.name}们 相知相识，相伴，再到如今，过去多久了呢？或许已经有了三五年吧，不过 ${me.name}们 两个似乎也没谁关心这些事情。`,
    );
    era.println();
    await era.printAndWait(
      `毕竟，对于 ${me.name}们 而言，有关特雷森，有关比赛，过去所有一切都已经结束了。`,
    );
    era.println();
    await era.printAndWait(
      `二人生活之中，也会刻意回避这些话题——不过虽然她对 ${me.name} 的称呼早已改成 ${me.actual_name}，但是 ${me.name} 还是会下意识地称呼${teio.sex}为自己的担当，似乎${teio.sex}对此倒也没什么意见。`,
    );
    era.println();
    await era.printAndWait(
      `在${teio.sex}腿伤之后，${me.name}们 尽管做出了一些努力，但仍然未能挽救回${teio.sex}的马娘生涯，就这样在复出后连续失利中草草退役了。`,
    );
    await era.printAndWait('没有鲜花和掌声，用最低调的方式退出了整个系统。');
    await era.printAndWait(
      `为了照顾${teio.sex}（或者只是舍不得${teio.sex}），${me.name} 也申请了离职，在特雷森的帮助下和${teio.sex}一起在一处僻静的村庄里安置了两个人的新家。`,
    );

    await era.printAndWait('🎶Such a shame, shame, shame🎶', {
      align: 'center',
      isParagraph: true,
    });

    await teio.say_and_wait('唔……刚刚好像有个东西忘了买。');
    era.println();
    await era.printAndWait(
      `早午饭用毕，${me.name} 和她一起在厨房里清洗用具。${teio.sex}收拾东西，踮起脚尖打开冰箱时，突然来了这样一句话。`,
    );
    era.println();
    await me.say_and_wait('啊？那么我们一会一起再去一趟？');
    era.println();
    await teio.say_and_wait('唔——');
    era.println();
    await era.printAndWait(
      `突然间，一阵声响从屋里其他房间传来。${me.name}们 对视一眼，然后${teio.sex}便消失于门外。不到一分钟的时间，又重新回到 ${me.name} 的面前。`,
    );
    era.println();
    await teio.say_and_wait('贮藏间的天花板好像漏水了，塌了一块下来。');
    era.println();

    era.printButton(`「那一会我去修吧，正好你去买东西。」`, 1);
    await era.input();

    await era.printAndWait(`${teio.sex}迟疑了一下，看了看 ${me.name}。`);
    era.println();

    era.printButton(
      `「不会有问题的，我办事，你放心。你个子不够高这上面帮不了什么忙，我自己一人也足够应付了，分工干活正好完事。」`,
      1,
    );
    await era.input();

    await era.printAndWait(
      `${me.name} 的前担当沉吟良久，最后还是点头同意了 ${me.name} 的想法。`,
    );
    await era.printAndWait(
      `${teio.sex}站在家门前，${me.name} 最后一次帮她整理服饰，隐藏好尾巴和耳朵，满意地拍了拍手，随后浅浅一吻，道别，开门。`,
    );
    await era.printAndWait(`${teio.sex}走向外面的世界。`);
    await era.printAndWait(
      `${me.name} 关上房门，通过窗户目送${teio.sex}的身影远去，舒了一口气，又拉上窗帘，转头去干活了。`,
    );

    await era.printAndWait('🎶You got to carry the blame🎶', {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait(
      `一刻钟左右，一阵门铃声打断了 ${me.name} 集中在锤子钉子木板上的注意力。`,
    );
    await era.printAndWait(
      `一开始 ${me.name} 懒得理，不过门外的人显然很有毅力，接连不断地响声堪比对 ${me.name} 的耐力训练，最后 ${me.name} 还是支撑不住决定去门前看看，通过猫眼，${me.name} 看到了——`,
    );
    await era.printAndWait('一双马耳。');
    await era.printAndWait('一双褐色的，小三角形的马耳。');

    await era.printAndWait('🎶In this strange game🎶', {
      align: 'center',
      isParagraph: true,
    });

    await me.say_and_wait(`伪装暴露了？${teio.sex}急着跑回家来？`, true);
    await era.printAndWait(
      `着急的 ${me.name} 直接拉开了房门，随后而来的是——胸口处的剧痛。`,
    );
    await era.printAndWait(
      `${me.name} 低下头，才发现一柄利刃巧妙地穿过肋骨缝隙，扎进了自己的心口。`,
    );
    era.println();

    await me.say_and_wait('呃……');

    await era.printAndWait(
      "🎶You're out on a limb and you're trying to gеt in🎶",
      {
        align: 'center',
        isParagraph: true,
      },
    );

    await era.printAndWait(
      `鲜红色的血液喷涌而出，带着 ${me.name} 的生命力一同流出体外。${
        me.name
      } 呆笨地眨眨眼，将凶手——一位似乎有点印象的${teio.get_uma_sex_title()}——映入瞳中。`,
    );
    era.println();
    await era.printAndWait('？？马娘「就是你……毁了帝王前辈的人生。」');
    await era.printAndWait(
      `？？马娘「因为一己私欲对${teio.sex}的双腿情况视而不见，又乘虚而入装作${teio.sex}唯一的心灵支柱什么的……这就是你该有的下场！」`,
    );
    await era.printAndWait(
      '？？马娘「不过帝王前辈……已经被你蒙蔽太深，不可能做什么了。只有让我这个粉丝来帮偶像解脱了！我终于等到这个机会了！」',
    );

    await era.printAndWait("🎶It's a strange game🎶", {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait(`啊啊，${teio.sex}好像在义愤填膺地说着什么。`);
    await era.printAndWait(`不过 ${me.name} 已经没有办法处理这些信息了。`);
    await me.say_and_wait('真可惜……没机会戒酒戒烟，让帝王高兴高兴了。', true);
    await era.printAndWait(
      `带着最后的意识，${me.name} 堕入一片深沉的黑暗，永远闭上了眼。`,
    );
    era.println();

    await print_event_name(
      [{ content: 'DEAD ENDING', color: buff_colors[3] }],
      teio,
    );

    await era.printAndWait('Do you want to play this a strange game again ?', {
      align: 'center',
      isParagraph: true,
    });
  } else {
    await era.printAndWait(
      `与 ${teio.name} 解除契约后，为了避风头远离舆论，为了寻求平静，${me.name} 离开特雷森换了一个地方重新做起训练员的工作。然而，不知是什么原因，${me.name} 指导的马娘再也没有出过优异的成绩，${me.name} 的状态和能力也再没能回到和 ${teio.name} 搭档时的水准……${me.name} 的路，就这么简单地到头了，${me.name} 和 ${teio.name} 曾经的梦想，最终也没能实现。`,
    );
    await era.printAndWait(
      `内心仿佛缺少了什么的 ${me.name} 重复着一成不变的生活，工作逐渐变成负担，${me.name} 开始把烟酒当作提神和安慰的良药，不知不觉地，${me.name} 已经淡忘了自己当初的理想，失去了干劲，碌碌无为地走完了 ${me.name} 的后半段职业生涯……`,
    );
    await print_event_name(
      [{ content: '无为而终', color: buff_colors[3] }],
      teio,
    );
  }
};
