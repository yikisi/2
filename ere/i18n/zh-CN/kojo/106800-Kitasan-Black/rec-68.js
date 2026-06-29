/**
 * @file 北部玄驹 - 招募
 * @author 小黑
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} kita
   * @param {CharaTalk} you
   */
  async rec(kita, you) {
    await era.printAndWait(
      '清晨的特雷森一如既往地冷清，仅有少数几个孩子奔跑着在砖道上前进。',
    );
    await era.printAndWait(
      `抱着一箱箱沉重的比赛道具的 ${you.name} 望着清澈的天空，一步一步地走向了选拔赛的场地。`,
    );
    await era.printAndWait(
      '马蹄铁叮叮当当的碰撞，名号标签和发令枪子弹在箱子里堆积如山。',
    );
    await era.printAndWait(
      '就算中央是全国最高等设备最优良的地区，在能省的时候还是会省呢……',
    );
    await era.printAndWait(`${you.name} 一边感叹着，一边前进着。`);
    await era.printAndWait(
      `作为特雷森学园里为数众多的新人训练员之一，为仍然没有担当的赛${kita.uma_sex_title}们进行照顾，几乎是学园里代代相承的传统。`,
    );
    await era.printAndWait(
      '但实际上做起来，就是压迫新人训练员劳动力的苦力活。',
    );
    await era.printAndWait(
      '尽管工作不多也不少，但大清早起来就是会让人觉得有些烦躁。',
    );
    await era.printAndWait(
      `而一个人要负责搬运一个场地几十个${kita.uma_sex_title}的道具，则让新人们愤怒的吐槽这根本就是压榨。`,
    );
    await era.printAndWait(
      `虽然事实上几乎全体训练员都会轮一遍去当这个苦力，即使是成名已久的训练员也是如此。`,
    );
    await era.printAndWait(
      `但毕竟选拔赛使用的场所是很多的，不可能让全体新人几天不停地劳动，没有正常工作的时间。`,
    );
    await era.printAndWait(
      `于是几个人轻松完成的工作量，就成了一天一两个人的苦累史。`,
    );
    await era.printAndWait(
      `而工作分摊到个人身上的时候，就会变成谁运气更差谁在天气不好的时候去，这样谁都不幸福的苦难循环。`,
    );
    await you.say_and_wait(`好可恶啊……`, true);
    await era.printAndWait(
      `正当 ${you.name} 这么在心底里抱怨的时候，双臂中沉重的箱子忽地一轻，让 ${you.name} 不由得吓了一跳。`,
    );
    await kita.say_and_wait(
      '这位训练员，是要把这些都搬到选拔赛的场地去么？请交给我吧。',
    );
    await era.printAndWait(
      `${you.name} 转过身，如同祭典般烂漫的${kita.teen_sex_title}体香扑面而来`,
    );
    await era.printAndWait(
      `仿佛夏夜悠闲的小摊，赛${kita.uma_sex_title}的身上带着淡淡的烟火气，甚至可以闻到那蹲坐在小摊旁${kita.teen_sex_title}白嫩皮肤上的些许汗液。`,
    );
    await era.printAndWait(
      `那微微带着汗味的体味让人安心，但身为教师的责任让 ${you.name} 旋即清醒了过来。`,
    );
    await era.printAndWait([
      '在 ',
      you.get_colored_name(),
      ' 身后，留着黑色短发的',
      kita.child_sex_title,
      '对 ',
      you.get_colored_name(),
      ' 露出笑容，将 ',
      you.get_colored_name(),
      ' 心里残存不多的怨念驱散的无影无踪。',
    ]);
    await kita.say_and_wait(
      '这位训练员，没事吧？需要小北我带你去保健室休息一下么？',
    );
    await era.printAndWait(
      `赛${kita.uma_sex_title}一只手抱起箱子，用另一只手摸了摸 ${
        you.name
      } 的脑门，一脸关切地询问道。`,
    );
    era.printButton('「啊啊……没关系的，谢谢你的关心了」', 1);
    era.printButton(`「谢谢了，说起来你的名字是？」`, 2);
    await era.input();
    await era.printAndWait(
      `对于这位自来熟地来助人为乐，但却连名字都不知道的${kita.uma_sex_title}，${
        you.name
      } 没来由的觉察到有些过意不去。`,
    );
    await kita.say_and_wait(
      `我的名字叫 ${kita.name}，是今年初等部新入学的学生。`,
    );
    await kita.say_and_wait(`请问这些是要搬去哪里的？我来帮你搬过去吧。`);
    await era.printAndWait(
      `黑发的孩子笑着冲 ${you.name} 点了点头，在问清要去的地点后，便带着 ${you.name} 向选拔赛的场地走去。`,
    );
    await era.printAndWait(
      `趁着同${kita.teen_sex_title}同行的时候，${
        you.name
      } 侧过头，偷偷打量起走在 ${you.name} 右前方的赛${kita.uma_sex_title}。`,
    );
    await era.printAndWait(
      `${kita.child_sex_title}没有注意到 ${
        you.name
      } 的目光，只是哼着小调自顾自地沿着小道走着，所以 ${
        you.name
      } 可以毫不顾忌地注视着${kita.sex}好看的侧脸。`,
    );
    await era.printAndWait(
      `这孩子有着一张白净的脸蛋，清澈的琥珀色瞳孔散发着自信而没有烦恼的光。`,
    );
    await era.printAndWait(
      `${kita.sex}正认真的盯着脚下的道路，时不时还会用膝盖顶起箱子，让自己抱的更紧一些。`,
    );
    if (kita.sex_code !== 1) {
      await era.printAndWait(
        `但那被汗浸湿贴在身上的运动服，却不由自主地勾勒出挺翘而柔软的形状。`,
      );
      await era.printAndWait([
        '鲜红的布料将',
        kita.child_sex_title,
        '肉感的大腿和臀部紧紧裹住，挺翘的安产宽臀在',
        kita.child_sex_title,
        '大腿的动作下不断相互挤压摩擦，如同雪白的臀饼般令人浮想联翩。',
      ]);
    }
    await era.printAndWait([
      kita.child_sex_title,
      '的每一寸肌肤都在挥发着下流的汗香，而那双清澈的眼眸却对自己身体的淫靡浑然不觉。',
    ]);
    await kita.say_and_wait(
      '训练员你是新入职的对吧？大清早就来搬运训练道具真是辛苦你了呢。',
    );
    await kita.say_and_wait(
      '我在老家的时候，父亲也经常让手下的弟子到处搬东西，所以我很懂这种被指使搬东西的感觉哦。',
    );
    await era.printAndWait([
      kita.child_sex_title,
      '带着朴实的笑容开口对 ',
      you.get_colored_name(),
      ' 说道，仿佛荡漾着温暖的阳光。',
    ]);
    await era.printAndWait(
      `阳光透过林间的树荫切成细细的小块，照射在这位活泼又温柔的${kita.uma_sex_title}身上。`,
    );
    await era.printAndWait(
      `这份毫无隔阂的感觉，让对这孩子产生欲望的 ${you.name} 不由得觉得有些害臊。`,
    );
    era.println();
    era.printButton('「果然还是谢谢你了，帮了我这么大的忙。」', 1);
    await era.input();
    await kita.say_and_wait(
      '没事没事，我其实也要在这个操场跑选拔赛，搬点东西不过是举手之劳嘛。',
    );
    await era.printAndWait(
      `${kita.name} 拍了拍胸脯，闲来无聊的${kita.sex}和 ${you.name} 讲述其有关${kita.sex}和另一个孩子的故事。`,
    );
    await era.printAndWait(
      `${
        kita.sex
      }的故事真可谓是滔滔不绝，自幼便崇拜着赛${kita.uma_sex_title}前辈的两人，在约定后共同走进了特雷森学园的赛场。`,
    );
    await era.printAndWait(
      `${you.name} 觉得这真是个美妙的清晨，阳光透过林间的树荫切成细细的小块，麻雀在这爽朗的春日高声歌唱。`,
    );
    await era.printAndWait(
      `只是这短暂的时光并不能持续太久，走入操场的 ${kita.name} 将箱子放到赛道上，由此，这段并肩行走的时光结束了。`,
    );
    await kita.say_and_wait(
      '那么训练员，我就先去热身了，有时间的话可以来看我的比赛哦。',
    );
    await era.printAndWait(
      `黑发的赛${kita.uma_sex_title}小跑着跳去赛道，和${
        kita.sex
      }熟悉的孩子相互聊起了天。`,
    );
    await era.printAndWait(
      `或许 ${you.name} 应该去看一看，${you.name} 如此想着，开始向比赛的选手们分发起了标签名牌。`,
    );
    era.drawLine();
    await era.printAndWait(
      `在忙碌了一整个上午之后，终于抽出身的 ${you.name} 现在观众席中，开始了对选拔赛的观测。`,
    );
    await era.printAndWait(
      `此时一场比赛已经随着号令枪的响声开始，闸门打开，一抹活泼的黑色如同飓风般闪过。`,
    );
    await era.printAndWait(
      `训练员A「那孩子就是 ${kita.name} 么？实力真强啊。」`,
    );
    await era.printAndWait(
      `训练员B「状态很好，看来这场比赛的胜利是${kita.sex}的了。」`,
    );
    await era.printAndWait(
      `训练员C「记录上的性格也很合适，作为担当恐怕是非常好的选择吧。」"`,
    );
    await era.printAndWait(
      `在训练员们的低呼声中，${kita.name} 一马当先冲在最前`,
    );
    await era.printAndWait(
      `蕴含力量的双腿在草地上留下深可见泥的脚印，那天生的素质吸引了在场每个训练员的目光。`,
    );
    await era.printAndWait([
      '随着 ',
      kita.get_colored_name(),
      ' 的步伐，以大逃为战术的赛',
      kita.uma_sex_title,
      '冲过终点，迎来了',
      kita.sex,
      '的胜利。',
    ]);
    await era.printAndWait(`现在的 ${you.name}……？`);
    era.printButton(`（我想要……做${kita.sex}的训练员啊！）`, 1);
    era.print('（继续招募）', { offset: 1, width: 12 });
    era.printButton(`（或许，我应该让${kita.sex}得到更好的训练员……）`, 2);
    era.print('（放弃招募）', { offset: 1, width: 12 });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `像是被吞噬了一样，像是无法逃离了一样，感情在 ${you.name} 心中燃烧，令 ${you.name} 不可缄口不言。`,
      );
      await era.printAndWait(
        `比赛的结束令赛${kita.uma_sex_title}们四散离场，训练员们仿佛追逐着鱼饵的鱼般追随着离开。`,
      );
      await kita.say_and_wait(
        `呜哇啊啊啊啊！${you.name} 是……之前的那个训练员先生！`,
      );
      await era.printAndWait(
        `在赛场的角落里，${you.name} 找到了正在擦拭汗水的 ${kita.name}。`,
      );
      await kita.say_and_wait(
        '那个，我……我正在擦汗哦，训练员先生如果想要招募的话可以等一等么…？',
      );
      await kita.say_and_wait('最好的话是可以多等等啦……');
      await era.printAndWait(
        `这个${kita.child_sex_title}正握着拧开瓶盖的矿泉水，尴尬地望向 ${
          you.name
        }，${kita.sex}的脸蛋因为奔跑热的通红，尾巴则因为混乱的情感摇来摇去。`,
      );
      await era.printAndWait(
        `但是 ${you.name} 无法忍耐，不能忍耐，在看了那样的奔跑之后怎么能忍耐！`,
      );
      await you.say_and_wait(
        `${kita.name}，你的表情和眼神真是太棒了，请让我成为你的训练员吧！`,
      );
      await era.printAndWait(
        `听到 ${you.name} 的邀请，原本就混乱的 ${kita.name} 更加混乱了。`,
      );
      await kita.say_and_wait(
        '等等等这是搭讪么！？太快了太快了！这种热烈的羡慕我还不知道该怎么开始啊！',
      );
      await kita.say_and_wait(
        '怎么办小钻我还没有做好心理准备，而且不要仅凭外表就招募我啊训练员先生！我能力也很强的！',
      );
      await era.printAndWait(`${kita.name} 摇晃着尾巴露出手足无措的表情。`);
      await era.printAndWait(
        `被今天早上才认识的训练员先生搭讪，让身为赛${kita.uma_sex_title}的${kita.teen_sex_title}头脑过载，失去了思考能力。`,
      );
      await era.printAndWait(
        `于是，面对一步步进逼过来的训练员，${kita.name} 用近乎脊髓般的反应，反射性的抬起脚……`,
      );
      await you.say_and_wait('所以，请让我成为你的噗哇！？');
      await era.printAndWait(`重重的踢在了 ${you.name} 的脸上。`);
      await era.printAndWait(
        `在过了足足半个小时之后，终于解释清楚来意的 ${you.name} 成功拿到了 ${kita.name} 的联络方式。`,
      );
      await era.printAndWait(
        `${you.name} 看着正午的阳光和 ${kita.name} 带着歉意的表情，因为同这样一个孩子签订了契约而感到安心。`,
      );
    } else {
      await era.printAndWait(`${you.name} 驱散心中的悸动，转身离开了训练场。`);
    }
    return ret;
  },
};
