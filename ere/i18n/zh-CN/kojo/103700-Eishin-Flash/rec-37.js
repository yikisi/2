/**
 * @file 荣进闪耀 - 招募
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_start(flash, you) {
    await era.printAndWait(
      `在训练场时，${you.name} 眼角的余光突然瞥到了某个令 ${you.name} 感到有些熟悉的背影。`,
    );
    era.printButton('「？」', 1);
    await era.input();
    await era.printAndWait(`${you.name} 连忙转头，却发现身后空无一人。`);
    era.printButton('「……是错觉吗？」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name} 不甘心地又在四周寻找了一会，那道熟悉的身影却如同凭空溶解一般，再也没有出现 ${you.name} 的视线中。`,
    );
    era.printButton('「应该是错觉吧。」', 1);
    await era.input();
    await era.printAndWait(
      `见此情景，${you.name} 只能摇了摇头，将这件事情先抛到脑后不去在意。`,
    );
  },
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_rest(flash, you) {
    await era.printAndWait(
      `过了几天，当 ${you.name} 在清扫房间时，${you.name} 突然发现办公桌抽屉的角落里，有一枚银黑色的勋章安然地摆放在那里。`,
    );
    era.printButton('「这个是？」', 1);
    await era.input();
    await era.printAndWait(
      `好奇心的驱使下，${you.name} 拿起这枚勋章，细心观摩。`,
    );
    await flash.say_as_unknown_and_wait(
      '非常感谢您的帮助，请您务必收下这个作为我对您的回报。',
    );
    era.printButton('「啊，想起来了！」', 1);
    await era.input();
    await era.printAndWait(
      `回忆突然涌入脑海，${you.name} 记起来，这是之前 ${
        you.name
      } 因为有事外出而在学园附近的地铁站候车时，遇到一位迷路的${flash.uma_sex_title}，在帮助了${
        flash.sex
      }之后，得到的作为感谢的礼物。`,
    );
    await era.printAndWait(
      `话虽如此，但那位${flash.uma_sex_title}的模样已经在 ${
        you.name
      } 的记忆中模糊不清，${you.name} 只能依稀回想起${
        flash.sex
      }有一头黝黑的柔顺短发，还有一双异国人专属的湛蓝色瞳孔这种明显的外貌特点。`,
    );
    await era.printAndWait('嘟——');
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `就在 ${you.name} 冥思苦想企图记起更多细节时，一道响亮的手机来电提示音打断了 ${you.name} 的思绪。`,
    );
    era.printButton('「接起电话」', 1);
    era.printButton('「挂断」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `虽然思绪被打断使得 ${you.name} 有些不快，但 ${you.name} 还是拿出手机，礼貌地按下接听键。`,
      );
      await you.say_as_passer_by_and_wait(
        '工作人员',
        `训练员${you.adult_sex_title}，选拔赛快要开始了，您怎么还没有到场。`,
      );
      await era.printAndWait('电话那头传来了焦急的声音。');
      era.printButton('「选拔赛？」', 1);
      await era.input();
      await era.printAndWait(
        `听到这句话的 ${you.name} 微微一愣，随后才想起今天学校的操场处确实是要举办一场重要的节目。`,
      );
      era.printButton('「我马上过来！」', 1);
      await era.input();
      await era.printAndWait(`意识到这点之后 ${you.name} 立刻推门而出。`);
    } else {
      await era.printAndWait(
        `因为思绪被打断导致的不快感让 ${you.name} 有些烦躁地拿出手机，按下挂断键。`,
      );
      await era.printAndWait('嘟。');
      await era.printAndWait('来电提示音戛然而止。');
      await era.printAndWait(
        `${you.name} 刚准备放下手机，屏幕上显示的日期却让 ${you.name} 的视线停留了片刻。`,
      );
      era.printButton('「说起来……」', 1);
      await era.input();
      await era.printAndWait(
        `下一秒，${you.name} 猛然想起今天学校的操场处好像要举办一场重要的节目。`,
      );
      era.printButton('「选拔赛要开始了！」', 1);
      await era.input();
      await era.printAndWait(`意识到这点之后 ${you.name} 立刻推门而出。`);
    }
  },
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_final(flash, you) {
    let ret;
    await era.printAndWait(
      `${
        you.name
      } 匆匆地跑到了操场，此时的这里已经被其他训练员和赛${flash.uma_sex_title}们堵的水泄不通。`,
    );
    era.printButton('「呼……赶上了？」', 1);
    await era.input();
    await era.printAndWait(
      `不过好在，虽然因为迟到导致错失了先机，但选拔赛还没有正式开始，因此 ${
        you.name
      } 还有机会去物色那些 ${you.name} 感兴趣的赛${flash.uma_sex_title}。`,
    );
    await era.printAndWait(
      `于是 ${you.name} 开始在拥挤的人流中左顾右盼，看看能否得到一些发现。`,
    );
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `突然，${you.name} 视线的余光瞥到了一位好像令 ${you.name} 有些眼熟的人。${you.name} 连忙转头，却发现那个人已经不见踪影。`,
    );
    era.printButton('「很奇怪的情况，去找找看吧。」', 1);
    era.printButton('「应该是错觉，不用管它。」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(`那个人是谁？我认识${flash.sex}吗？`);
      await era.printAndWait(
        `好奇心驱使着 ${you.name} 向那个人消失的地方走去。`,
      );
      await era.printAndWait(
        `只见 ${you.name} 在拥挤的人群中费力地分出一条路来，然后不断前进。`,
      );
      await era.printAndWait(`最终，${you.name} 居然来到了操场的角落。`);
    } else {
      await you.say_and_wait(
        '应该是错觉吧，我不觉得这么巧合就能看到自己认识的人。',
        true,
      );
      await era.printAndWait(
        `这么想着的 ${you.name} 摇了摇头，打消内心的疑惑。`,
      );
      await era.printAndWait(
        `然后，${you.name} 接着进行寻找，可却迟迟找不到能令自己满意的目标。`,
      );
      await era.printAndWait(
        `渐渐的，${you.name} 越行越远，最终居然来到了操场的角落。`,
      );
    }
    era.printButton('「这里是？」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name} 好奇地观察着周围的情况时，与别的地方的热闹相比，已经远离操场中心的此处显得格外落寂。`,
    );
    await flash.say_and_wait(`${you.adult_sex_title}您好，请问有什么事情吗？`);
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `突然，一道带着疑惑的声音从 ${you.name} 的身后传来。`,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' 转身，看到一位身穿学校运动服的赛',
      flash.uma_sex_title,
      '，正面露疑惑地看着 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      `仔细观察，${flash.sex}有着一头接近齐肩的黑色短发，白色的雕花环状饰品套在右耳之上，外面还系着一根小小的蝴蝶结。`,
    );
    await era.printAndWait(
      `目光往下，蕴含着与无风的湖面一般平和的湛蓝色瞳孔仿若拥有摄人心魄的魔力，差点使 ${you.name} 的眼睛深陷其中，而忽略了那如凝脂似的白皙皮肤。`,
    );
    if (flash.sex_code !== 1) {
      await era.printAndWait(
        '身材方面，即便是宽大的运动服也无法掩盖的饱满胸脯因为自然的呼吸而上下起伏，和盈盈一握的纤细腰间一起组成一道让人浮想联翩的美妙曲线。',
      );
    }
    await era.printAndWait(
      `至于作为赛${flash.uma_sex_title}重要的双腿部分，则同样继承了上半身给人带来的这份美好，并没有因为高强度的运动而损失半点温润细长。`,
    );
    await era.printAndWait('真是个毫无疑问的美人啊。');
    await era.printAndWait(`大饱眼福的 ${you.name} 在心中默默发出感叹。`);
    await flash.say_and_wait('请问……您为什么要一直盯着我看呢？');
    await era.printAndWait(
      `而面前的${flash.teen_sex_title}也对 ${
        you.name
      } 这半天不说话，只是自顾自地盯着${flash.sex}看的行为发出理所应当地疑问。`,
    );
    era.printButton('「同学我是不是在以前见过你？」', 1);
    await era.input();
    await flash.say_and_wait('诶？');
    await era.printAndWait(
      `听到 ${you.name} 的话，${flash.sex}愣了一下，随后用审视的目光观察了 ${you.name} 几秒。`,
    );
    await flash.say_and_wait('原来如此。');
    await era.printAndWait(
      `紧接着，${you.name} 看到${flash.sex}的脸上露出一丝喜悦的笑容。`,
    );
    await flash.say_and_wait('是您啊，真是好久不见了呢。');
    await era.printAndWait(
      `${flash.sex}认出了 ${you.name}，就像 ${you.name} 在刚才观察${flash.sex}时，也认出了${flash.sex}一样。`,
    );
    era.printButton('「好久不见了。」', 1);
    era.printButton('「谢谢你当时的礼物。」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `${you.name} 对于${flash.sex}居然是这所学校的学生这件事情表示意外。`,
      );
      await flash.say_and_wait(
        '是的，我也没想到您居然也在这里担任训练员，看来之前没有遇到是运气原因呢。',
      );
      await era.printAndWait(`${flash.teen_sex_title}笑着摇了摇头。`);
      await flash.say_and_wait('啊。');
      await era.printAndWait(
        `随后像是想起什么一样，${flash.sex}的脸上突然露出歉意的表情。`,
      );
      await flash.say_and_wait(
        '很抱歉之前接受您帮助的时候，因为疏忽导致忘记告诉了您我的姓名。',
      );
    } else {
      await era.printAndWait(
        `${you.name} 感谢了${flash.sex}当时赠送给 ${you.name} 的礼物。`,
      );
      await flash.say_and_wait('没有什么，您帮助了我，这是您应得的回报。');
      await era.printAndWait(`${flash.sex}轻轻笑了一下，显得很开心。`);
      await flash.say_and_wait('不过非常高兴您能够喜欢这份礼物。');
      await flash.say_and_wait('啊。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `说着，像是突然想起什么一样，${you.name} 看到${flash.sex}的脸上突然露出歉意的表情。`,
      );
      await flash.say_and_wait(
        '说起来，之前接受您帮助的时候，因为疏忽导致忘记告诉了您我的姓名。',
      );
    }
    era.printButton('「诶。」', 1);
    await era.input();
    await flash.say_and_wait(
      '真是件非常失礼的事情，所以请容我现在重新向您做自我介绍。',
    );
    await era.printAndWait(`${flash.sex}将手搭在胸口，神情变得端庄。`);
    await flash.say_and_wait(
      `我叫荣进闪耀，如您所见，是一位赛${flash.uma_sex_title}。`,
    );
    era.printButton('「所以现在在这里是因为……」', 1);
    await era.input();
    await flash.say_and_wait('是的。');
    await era.printAndWait(`${flash.sex}点头，肯定了 ${you.name} 的猜想。`);
    await flash.say_and_wait('目前在此的目的是为了给接下来的选拔赛做准备。');
    era.drawLine();
    await era.printAndWait(
      `选拔赛结束了，但让 ${you.name} 意外的是，赛前将自己的状态调整至最好的荣进闪耀，却以一种非常糟糕的成绩冲过终点。`,
    );
    await flash.say_and_wait('…………');
    await era.printAndWait(`看着神色低落的${flash.sex}，`);
    era.printButton('「立刻上前安慰。」（继续招募）', 1);
    era.printButton(
      `「重要的是寻找担当赛${flash.uma_sex_title}，安慰${
        flash.sex
      }的事情之后再说。」（放弃招募）`,
      2,
    );
    ret = (await era.input()) === 1;
    if (ret) {
      await era.printAndWait(
        `虽然知道现在去做这种事情，那些成绩好的赛${flash.uma_sex_title}们可能就会被别的训练员抢先下手，但 ${
          you.name
        } 同样无法对悲伤的荣进闪耀坐视不管。`,
      );
      await era.printAndWait(`于是 ${you.name} 快步向${flash.sex}走去。`);
      await flash.say_and_wait('……让您见笑了呢，我的这份成绩。');
      await era.printAndWait(
        `而在看见 ${you.name} 之后，荣进闪耀轻吸一口气，随后对 ${you.name} 露出有些勉强的笑容。`,
      );
      era.printButton('「你的表现已经很好了。」', 1);
      era.printButton('「胜败乃兵家常事，大侠请重新来过。」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `${you.name} 向${flash.sex}阐述了自己对这场比赛的看法。`,
        );
        await era.printAndWait(
          `在 ${you.name} 看来，荣进闪耀的表现简直无懈可击，根本找不出一丝破绽。`,
        );
        await flash.say_and_wait('也就是说，是单纯的技不如人吗。');
        await flash.say_and_wait('………');
        await era.printAndWait(`听到 ${you.name} 的话后，荣进闪耀沉默了一会。`);
      } else {
        await flash.say_and_wait('大侠吗……呵呵。');
        await era.printAndWait(
          `荣进闪耀在听到 ${you.name} 的话后，发出一声轻笑。`,
        );
        await flash.say_and_wait('您可真会开玩笑，我可不是什么大侠哦。');
        await era.printAndWait(
          `${flash.sex}摇了摇头，神色相比刚才有了些许缓和。`,
        );
        await flash.say_and_wait('不过……');
        await era.printAndWait(
          `紧接着，${you.name} 听到${flash.sex}若有所思地呢喃一句。`,
        );
        await flash.say_and_wait('胜败乃兵家常事啊……');
        await flash.say_and_wait('………');
        await era.printAndWait(`说完这句话之后，${flash.sex}就陷入了沉默。`);
      }
      era.printButton('「那个……」', 1);
      await era.input();
      await era.printAndWait(
        `见此，${you.name} 刚想要说些什么，却发现${flash.sex}突然抬起头，目光盯着 ${you.name} 佩戴在胸口的训练员徽章。`,
      );
      await flash.say_and_wait(
        `${you.adult_sex_title}，请问我能问一个比较失礼的问题吗？`,
      );
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `荣进闪耀突如其来的询问让 ${you.name} 有些疑惑，不过 ${you.name} 还是点了点头。`,
      );
      await flash.say_and_wait('您从事训练员这一行业，已经多久了呢？');
      await era.printAndWait(
        `见 ${you.name} 同意，${flash.sex}在犹豫了一会，便问道。`,
      );
      era.printButton('「刚刚不久」', 1);
      if (era.get('flag:当前声望') > 500) {
        era.printButton('「有些时候了」', 2);
      }
      if (era.get('flag:当前声望') > 1000) {
        era.printButton('「很长时间了」', 3);
      }
      switch (await era.input()) {
        case 1:
          await era.printAndWait(
            `${you.name} 跟${flash.sex}说自己正式踏入训练员这一行业其实也并没有多久，是一位缺乏实践经验的新人。不过话虽如此，但从各种理论成绩上来看，${you.name} 觉得自己的能力也不会逊色于那些老牌训练员太多。`,
          );
          await flash.say_and_wait(
            '原来如此，所以您认为自己只是缺少一个能够证明实力的机会吗？',
          );
          await era.printAndWait(
            `听到 ${you.name} 的回答，荣进闪耀若有所思地点了点头。`,
          );
          await flash.say_and_wait('不过……证明实力啊。');
          await era.printAndWait(
            `下一秒，像是想到了什么一样，${flash.sex}突然长叹一口气。`,
          );
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `见此，${you.name} 刚想开口询问${flash.sex}是否是身体感到不适。`,
          );
          await flash.say_and_wait(
            `……您认为，假如我现在想要成为担当赛${flash.uma_sex_title}的话，会有几位训练员同意呢？`,
          );
          era.printButton('「诶？」', 1);
          await era.input();
          await era.printAndWait(
            `然后，意料之外的话语就传入 ${you.name} 的耳中。`,
          );
          era.printButton('「………」', 1);
          await era.input();
          await era.printAndWait(
            `虽然 ${you.name} 不知道${flash.sex}问出这个问题的原因，但是看着面前的荣进闪耀不像是在开玩笑的眼神，${you.name} 沉默了几秒。`,
          );
          era.printButton('「坦白来讲，很少。」', 1);
          era.printButton('「不要担心，总是会有的。」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `脑海中浮现出刚刚比赛的画面，在犹豫了一会之后，${you.name} 选择了实话实说。`,
            );
            await flash.say_and_wait('很少啊……');
            await flash.say_and_wait(
              '也是呢，毕竟我的成绩，确实可以用糟糕透顶来形容。',
            );
            await era.printAndWait(
              '说到这里，荣进闪耀转头，看向操场上记录着刚刚结束的那场比赛的名次的告示板。',
            );
            await era.printAndWait(`显然，上面并没有${flash.sex}的名字。`);
          } else {
            await era.printAndWait(
              `脑海中浮现出刚刚比赛的画面，在犹豫了一会之后，${you.name} 选择了圆滑一点的说辞。`,
            );
            await flash.say_and_wait(
              '总是会有的……也就是说，实际的情况，很不容乐观吗。',
            );
            await era.printAndWait(
              `不过荣进闪耀很轻易地理解了 ${you.name} 的言外之意。`,
            );
            await flash.say_and_wait(
              '也是呢，毕竟我的成绩，确实可以用糟糕透顶来形容。',
            );
            await era.printAndWait(
              `${flash.sex}转头，看向操场上记录着刚刚结束的那场比赛的名次的告示板。`,
            );
            await era.printAndWait(`显然，上面并没有${flash.sex}的名字。`);
          }
          era.printButton(
            '「……嘛，如果去找像我这样的新人训练员的话，应该是会同意你的请求的吧？」',
            1,
          );
          await era.input();
          await era.printAndWait(
            `见荣进闪耀的脸色有些黯然，${you.name} 安慰道。`,
          );
          await flash.say_and_wait('………');
          era.printButton(
            '「或者，重新回去准备，等下次选拔赛的时候，取得更好的成绩。」',
            1,
          );
          await era.input();
          await era.printAndWait(`${you.name} 尝试为${flash.sex}出谋划策。`);
          await flash.say_and_wait(
            '这次失败的原因是技不如人。那下一次的选拔赛，我的提升，会有多少呢？',
          );
          await era.printAndWait(
            '闻言，荣进闪耀轻声说道。语气也不知道是在询问，还是单纯的自言自语。',
          );
          era.printButton('「……这取决于你自己。」', 1);
          era.printButton('「只要一直努力下去的话，肯定是会有的！」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              '想要提升自己的能力所需要的条件说简单也简单，说复杂也复杂。但无论如何，一旦抱有消极的态度，在原地犹豫的话，是肯定无法再向前方迈出一步的。',
            );
            await era.printAndWait(
              `${you.name} 尝试将这种道理告知给${flash.sex}。`,
            );
            await flash.say_and_wait('取决于我自己的想法……吗。');
            await era.printAndWait(
              `而在听到 ${you.name} 的话后，就像是决定了某种想法一样，${flash.sex}深吸了一口气。`,
            );
          } else {
            await era.printAndWait(
              `想要提升自己的能力所需要的条件说简单也简单，说复杂也复杂。但无论如何，唯有抱有积极的态度，才有可能向前方迈进的，于是，${you.name} 鼓励${flash.sex}。`,
            );
            await flash.say_and_wait(
              '只要一直努力下去，就肯定会得到提升……吗？',
            );
            await era.printAndWait(
              `而在听到 ${you.name} 的话后，就像是决定了某种想法一样，${flash.sex}深吸了一口气。`,
            );
          }
          await flash.say_and_wait(
            `${you.actual_name_with_title}，我有个不情之请想要拜托于您。`,
          );
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `紧接着，${you.name} 发现，原本眼神因为比赛的失利而变得低落的荣进闪耀竟在一瞬之间重新变得坚毅起来。`,
          );
          await era.printAndWait(`${you.name} 还没来得及惊讶于这种转变。`);
          await flash.say_and_wait('我希望，您能够成为我的担当训练员。');
          era.printButton('「诶？！」', 1);
          await era.input();
          await era.printAndWait(
            `下一秒，让 ${you.name} 的情绪波动更上一层楼的话就从${flash.sex}的嘴里传出。`,
          );
          await era.printAndWait(`而面对这种突发情况，${you.name} 的选择是：`);
          era.printButton('「为什么要选择我呢？」', 1);
          era.printButton(
            '「虽然不知道为什么，但既然这样的话，那以后我们就互为担当了。」',
            2,
          );
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `虽然荣进闪耀突如其来的邀请让 ${you.name} 有些措手不及，但令 ${you.name} 更好奇的是${flash.sex}为何会向 ${you.name} 发出邀请。`,
            );
            await flash.say_and_wait('理由吗？也是呢，果然还是需要理由的吧。');
            await era.printAndWait(
              `听到 ${you.name} 的疑惑，荣进闪耀思索了几秒。`,
            );
          } else {
            await era.printAndWait(
              `虽然荣进闪耀的邀请让 ${you.name} 有些措手不及，但正好 ${
                you.name
              } 今天来观看选拔赛的目的就是为了找到一位新的担当赛${flash.uma_sex_title}，于是面对荣进闪耀的邀请，${
                you.name
              } 果断地选择了答应。`,
            );
            await flash.say_and_wait(
              '……还真是干脆呢，您难道都不好奇我为何会突然对您发出邀请吗？',
            );
            era.printButton('「是很好奇，但总之先同意了再说。」', 1);
            await era.input();
            await flash.say_and_wait('呵呵。');
            await era.printAndWait(
              `听到 ${you.name} 的回答，荣进闪耀轻笑了一下。`,
            );
            await flash.say_and_wait(
              '是对我很有利的理由啊，但是这种想法也未免太过不妥了。',
            );
            await era.printAndWait(`说完，${flash.sex}摇了摇头。`);
            await flash.say_and_wait('还是请您先听完我的理由再做判断吧。');
          }
          await era.printAndWait(
            `紧接着，${flash.sex}对 ${you.name} 示意了一下自己那双在见面之初就差点让 ${you.name} 深陷其中的湛蓝色瞳孔。`,
          );
          await flash.say_and_wait('其实您应该注意到了，我不是日本人。');
          era.printButton('「可以猜到。」', 1);
          await era.input();
          await era.printAndWait(`${you.name} 顺着${flash.sex}的话意点头。`);
          await flash.say_and_wait(
            '实际上，我来自于与日本有九千公里之遥的德国。',
          );
          await flash.say_and_wait('换句话说，我是一名留学生。');
          await era.printAndWait('荣进闪耀伸出一根手指。');
          await flash.say_and_wait(
            `至于来到日本的目的，因为我想要成为一位可以在赛场上所向披靡的赛${flash.uma_sex_title}，进而……`,
          );
          era.printButton('「进而？」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait('荣进闪耀沉默了一会，随后轻叹一口气。');
          await flash.say_and_wait(
            '好吧，我知道刚刚在您面前经历了惨败的我这么说可能有些滑稽。',
          );
          await flash.say_and_wait('但是。');
          await era.printAndWait(
            `说到这里，${you.name} 看到${flash.sex}的脸上露出郑重的表情`,
          );
          await flash.say_and_wait(
            '我想通过不断取得荣誉的行为，进而让我的父母……以我为荣。',
          );
          await era.printAndWait(
            `荣进闪耀认真地看着 ${you.name}，似乎是想要将这份信念借此灌输进 ${you.name} 的脑海。`,
          );
          era.printButton('「这就是你的想法吗？」', 1);
          await era.input();
          await era.printAndWait(`${you.name} 点了点头。`);
          await flash.say_and_wait(
            '无论是否参加下一场选拔赛，如果没有专业人士进行指导的话，那再怎么去努力，也只是原地踏步而已。',
          );
          await era.printAndWait(
            `见 ${you.name} 接收到了自己的想法，荣进闪耀便接着开口说道。`,
          );
          await flash.say_and_wait(
            '所以我希望您能够对我进行指导，我认为自己还有进步的空间。',
          );
          await era.printAndWait(
            `说完，${flash.sex}向 ${you.name} 鞠躬，作为礼貌地请求。`,
          );
          await flash.say_and_wait('嘛，当然。');
          await era.printAndWait(
            `而在重新起身的那一刻，${flash.sex}突然又不好意思地笑了一下。`,
          );
          await flash.say_and_wait('要是您好奇的是我为什么对您发出邀请的话。');
          await flash.say_and_wait(
            '那坦白来讲，也是有着因为您认识我所以更容易同意我的请求这种自私的考量在内。',
          );
          era.printButton('「是这样吗。」', 1);
          await era.input();
          await era.printAndWait(`闻言，${you.name} 微微点头。面对这种情况`);
          break;
        case 2:
          await era.printAndWait(
            `${you.name} 跟${flash.sex}说自己在训练员这一行业已经有一段时间，虽然论成绩还比不上那些声名显赫的前辈，但 ${you.name} 认为 ${you.name} 和他们之间的差距也就只是资历而已。`,
          );
          await flash.say_and_wait(
            '原来如此，您的这份自信的想法，还真是令人敬佩呢。',
          );
          await era.printAndWait(`听到 ${you.name} 的话，荣进闪耀笑着称赞道。`);
          await flash.say_and_wait('不过……资历啊。');
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(`下一秒，${flash.sex}轻叹一口气。`);
          await era.printAndWait(
            `${you.name} 感觉${flash.sex}的身躯似乎也在那一瞬间佝偻了一点。`,
          );
          era.printButton('「你没有事情吧？」', 1);
          await era.input();
          await era.printAndWait(`见此，${you.name} 关切地问道。`);
          await flash.say_and_wait('……谢谢您的关心，我没有问题。');
          await era.printAndWait(
            `荣进闪耀摇了摇头，紧接着，${flash.sex}突然用一种毅然的眼神看着 ${you.name}。`,
          );
          await flash.say_and_wait('但是我确实有个不情之请想要拜托于您。');
          era.printButton('「诶？」', 1);
          await era.input();
          await flash.say_and_wait('我希望，您能够成为我的担当训练员。');
          await era.printAndWait(
            `说完，${flash.sex}向 ${you.name} 鞠躬，作为礼貌地请求。`,
          );
          await era.printAndWait(`而面对这种突发情况，${you.name} 的选择是：`);

          era.printButton('「为什么要选择我呢？」', 1);
          era.printButton('「好的，那以后我们就互为担当了。」', 2);
          ret = (await era.input()) === 1;
          if (ret) {
            await era.printAndWait(
              `虽然荣进闪耀突如其来的邀请让 ${you.name} 有些措手不及，但令 ${you.name} 更好奇的是${flash.sex}为何会向 ${you.name} 发出邀请。`,
            );
            await flash.say_and_wait('理由吗？也是呢，果然还是需要理由的吧。');
            await era.printAndWait(
              `听到 ${you.name} 的疑惑，荣进闪耀思索了几秒。`,
            );
          } else {
            await era.printAndWait(
              `正好 ${
                you.name
              } 今天来观看选拔赛的目的就是为了找到一位新的担当赛${flash.uma_sex_title}，于是面对荣进闪耀的邀请，${
                you.name
              } 果断地选择了答应。`,
            );
            await flash.say_and_wait(
              '……还真是干脆呢，您难道都不好奇我为何会突然对您发出邀请吗？',
            );
            era.printButton('「是很好奇，但总之先同意了再说。」', 1);
            await era.input();
            await flash.say_and_wait('呵呵。');
            await era.printAndWait(
              `听到 ${you.name} 的回答，荣进闪耀轻笑了一下。`,
            );
            await flash.say_and_wait(
              '是对我很有利的理由啊，但是这种想法也未免太过不妥了。',
            );
            await era.printAndWait(`说完，${flash.sex}摇了摇头。`);
            await flash.say_and_wait('还是请您先听完我的理由再做判断吧。');
          }
          await era.printAndWait(
            `紧接着，${flash.sex}对 ${you.name} 示意了一下自己那双在见面之初就差点让 ${you.name} 深陷其中的湛蓝色瞳孔。`,
          );
          await flash.say_and_wait('其实您应该注意到了，我不是日本人。');
          era.printButton('「可以猜到。」', 1);
          await era.input();
          await era.printAndWait(`${you.name} 顺着${flash.sex}的话意点头。`);
          await flash.say_and_wait(
            '实际上，我来自于与日本有九千公里之遥的德国。',
          );
          await flash.say_and_wait('换句话说，我是一名留学生。');
          await era.printAndWait('荣进闪耀伸出一根手指。');
          await flash.say_and_wait(
            `至于来到日本的目的，因为我想要成为一位可以在赛场上所向披靡的赛${flash.uma_sex_title}，进而……`,
          );
          era.printButton('「进而？」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait('荣进闪耀沉默了一会，随后轻叹一口气。');
          await flash.say_and_wait(
            '好吧，我知道刚刚在您面前经历了惨败的我这么说可能有些滑稽。',
          );
          await flash.say_and_wait('但是。');
          await era.printAndWait(
            `说到这里，${you.name} 看到${flash.sex}的脸上露出郑重的表情`,
          );
          await flash.say_and_wait(
            '我想通过不断取得荣誉的行为，进而让我的父母……以我为荣。',
          );
          await era.printAndWait(
            `荣进闪耀认真地看着 ${you.name}，似乎是想要将这份信念借此灌输进 ${you.name} 的脑海。`,
          );
          era.printButton('「这就是你的想法吗？」', 1);
          await era.input();
          await era.printAndWait(`${you.name} 点了点头。`);
          await flash.say_and_wait(
            '虽然这场比赛失败了，但是我认为我还有进步的空间。',
          );
          await era.printAndWait(
            `见 ${you.name} 接收到了自己的想法，荣进闪耀便接着开口说道。`,
          );
          await flash.say_and_wait(
            '所以我希望已经在训练员这一领域有一定经验的您，能够对我进行指导。',
          );
          if (ret) {
            era.printButton('「………」', 1);
            await era.input();
            await era.printAndWait(
              `${you.name} 看得出来，说这句话时的${flash.sex}，态度很是诚恳。但与此同时，另一份疑惑也在 ${you.name} 的心间升起。`,
            );
            era.printButton(
              '「既然这样的话，为什么不去选择能力更强的训练员呢。」',
              1,
            );
            await era.input();
            await flash.say_and_wait('诶。');
            await era.printAndWait(
              `${you.name} 的问题让荣进闪耀明显愣了一下。`,
            );
            await flash.say_and_wait('………');
            await era.printAndWait(
              `为难的情绪肉眼可见的浮现在${flash.sex}的脸上。`,
            );
            await flash.say_and_wait('……唉。');
            await era.printAndWait(
              `几秒之后，${you.name} 看到${flash.sex}无奈地轻叹一口气。`,
            );
            await flash.say_and_wait(
              '您还真是……问了一个让我难以启齿的问题呢。',
            );
            await era.printAndWait('荣进闪耀苦笑地说道。');
            era.printButton('「抱歉。」', 1);
            await era.input();
            await flash.say_and_wait(
              '不，您不用道歉，准确来说都是我自己的想法所导致的。',
            );
            await era.printAndWait(
              `${flash.sex}摇了摇头，说话的声音却是变得有些颓然。`,
            );
            await flash.say_and_wait(
              '诚然，正如同您说的那样，能力越强的训练员对我的帮助越大。',
            );
            await flash.say_and_wait(
              '从功利的角度来考虑，我应该去选择那些已经从业多年的老练训练员。',
            );
            era.printButton('「但是？」', 1);
            await era.input();
            await flash.say_and_wait(
              '但是……您也知道，选择这件事情，向来是双向的，对吗？',
            );
            await era.printAndWait(
              '说着，荣进闪耀转头，看向操场上记录着刚刚结束的那场比赛的名次的告示板。',
            );
            await era.printAndWait(`显然，上面并没有${flash.sex}的名字。`);
            era.printButton('「即便你想去，他们也不会同意你的入队申请。」', 1);
            era.printButton('「所以我是你退而求其次的选择吗？」', 2);
            if ((await era.input()) === 1) {
              await era.printAndWait(
                `而 ${you.name}，也顿时理解了${flash.sex}的想法。`,
              );
              await flash.say_and_wait('是的。');
              await era.printAndWait('荣进闪耀点了点头。');
              await flash.say_and_wait('资历越深的训练员，眼界往往便会越高。');
              await flash.say_and_wait(
                '我想以我在选拔赛上所展现出来的成绩并不足以成为让他们选择我的理由。',
              );
              era.printButton('「那你是怎么看待我的呢？」', 1);
              await era.input();
              await flash.say_and_wait('诶。');
              await era.printAndWait(
                `听到 ${you.name} 的话，荣进闪耀眨了眨眼睛，${flash.sex}当然知道 ${you.name} 所指的看待是什么意思。`,
              );
              await flash.say_and_wait('……也许您已经想到了。');
              await era.printAndWait(`在思索了几秒后，${flash.sex}坦白道。`);
              await flash.say_and_wait(
                '我向您发出邀请确实有因为您认识我所以更容易同意我的请求这种自私的考量在内。',
              );
              era.printButton('「很自然的想法。」', 1);
              await era.input();
              await flash.say_and_wait(
                '可是这并不代表着我存在任何的侥幸心理，那是种无论是对您还是对我，都不公平的想法。',
              );
              await era.printAndWait('说完，荣进闪耀深吸了一口气。');
              await era.printAndWait(
                `${flash.sex}用极为认真的眼神看着 ${you.name}，试图让 ${you.name} 体会到${flash.sex}的所言和所为均不存在任何的作假嫌疑。`,
              );
              await flash.say_and_wait(
                '我希望我能够成为您，向资深训练员迈进的过程中所需要的资历的一部分。',
              );
            } else {
              await flash.say_and_wait('………');
              await era.printAndWait(
                `听到 ${you.name} 这带着些许刺意的话，荣进闪耀沉默了几秒。`,
              );
              await flash.say_and_wait(
                '如果真的去承认这种过分的事情的话，那恐怕连我自己都无法原谅我自己吧。',
              );
              await era.printAndWait(
                `如同触碰到了某条底线一般，重新开口的${flash.sex}，脸色变得极为严肃`,
              );
              await flash.say_and_wait(
                '也许您已经想到了，我向您发出邀请确实有因为您认识我所以更容易同意我的请求这种自私的考量在内。',
              );
              await flash.say_and_wait('但是。');
              await era.printAndWait(
                `说到这里，${you.name} 看见${flash.sex}的瞳孔中闪过一道锐利的光芒。`,
              );
              await flash.say_and_wait(
                '如果真的去承认退而求其次这种过分的事情的话，那恐怕连我自己都无法原谅我自己吧。',
              );
              era.printButton('「……」', 1);
              await era.input();
              await era.printAndWait(
                `面对态度如此坚决的荣进闪耀，${you.name} 必须得承认。`,
              );
              era.printButton('「是我失礼了。」', 1);
              await era.input();
              await flash.say_and_wait(
                '……总而言之，我的心中并不存在任何的侥幸心理。因为那是种无论是对您还是对我，都不公平的想法。',
              );
              await era.printAndWait(
                `听到 ${you.name} 的话，荣进闪耀的脸色也缓和了下来。`,
              );
              await era.printAndWait(
                `下一秒，${flash.sex}对 ${you.name} 伸出手。`,
              );
              await flash.say_and_wait(
                '所以，我希望我能够成为您，向资深训练员迈进的过程中所需要的资历的一部分。',
              );
              await era.printAndWait(
                `边说，${flash.sex}边用极为认真的眼神看着 ${you.name}，试图让 ${you.name} 体会到${flash.sex}的所言和所为均不存在任何的作假嫌疑。`,
              );
            }
            await flash.say_and_wait(
              `我希望我能够成为您的担当赛${flash.uma_sex_title}。`,
            );
            era.printButton('「这是条件的交换吗？」', 1);
            await era.input();
            await era.printAndWait(`${you.name} 问${flash.sex}。`);
            await flash.say_and_wait('不，单纯是我的个人请求。');
            era.printButton('「这样啊。」', 1);
            await era.input();
            await era.printAndWait(
              `至此，${you.name} 已经理解了荣进闪耀的话语中所蕴含的觉悟，那么面对这种情况，${you.name} 的选择是：`,
            );
          } else {
            await era.printAndWait(
              `${you.name} 看得出来，说这句话时的${flash.sex}，态度很是诚恳。于是，`,
            );
          }
          break;
        case 3:
          await era.printAndWait(
            `${you.name} 跟${
              flash.sex
            }说自己在训练员这一行业已经干了很多年了，积攒不少经验，甚至在之前还培育出几位成绩不错的赛${flash.uma_sex_title}。`,
          );
          await flash.say_and_wait(
            '也就是说，您是一位从业多年的资深训练员吗？',
          );
          await era.printAndWait(
            `听到 ${you.name} 的回答，荣进闪耀轻吐一口气。`,
          );
          await flash.say_and_wait('这样的话，应该就没有问题了。');
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} 听到${flash.sex}的低语，${you.name} 刚想问是什么没有问题。`,
          );
          await flash.say_and_wait('能请您，成为我的训练员吗？');
          era.printButton('「诶？」', 1);
          await era.input();
          await era.printAndWait(
            `下一秒，${you.name} 就因为${flash.sex}的话而感到震惊。`,
          );
          await flash.say_and_wait(
            '这个请求可能会给您带来困扰吧，我也知道太过于突然。',
          );
          await era.printAndWait(
            `见 ${you.name} 的这幅神情，${flash.sex}的语气也有些歉意。`,
          );
          era.printButton('「为什么要选择我呢？」', 1);
          era.printButton('「好的，那以后我们就互为担当了。」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `虽然荣进闪耀突如其来的邀请让 ${you.name} 有些措手不及，但令 ${you.name} 更好奇的是${flash.sex}为何会向 ${you.name} 发出邀请。`,
            );
            await flash.say_and_wait('理由吗？也是呢，果然还是需要理由的吧。');
            await era.printAndWait(
              `听到 ${you.name} 的疑惑，荣进闪耀思索了几秒。`,
            );
          } else {
            await era.printAndWait([
              '正好 ',
              you.get_colored_name(),
              ' 今天来观看选拔赛的目的就是为了找到一位新的担当赛',
              flash.uma_sex_title,
              '，于是面对荣进闪耀的邀请，',
              you.get_colored_name(),
              ' 果断地选择了答应。',
            ]);
            await flash.say_and_wait(
              '……还真是干脆呢，您难道都不好奇我为何会突然对您发出邀请吗？',
            );
            era.printButton('「是很好奇，但总之先同意了再说。」', 1);
            await era.input();
            await flash.say_and_wait('呵呵。');
            await era.printAndWait(
              `听到 ${you.name} 的回答，荣进闪耀轻笑了一下。`,
            );
            await flash.say_and_wait(
              '是对我很有利的理由啊，但是这种想法也未免太过不妥了。',
            );
            await era.printAndWait(`说完，${flash.sex}摇了摇头。`);
            await flash.say_and_wait('还是请您先听完我的理由再做判断吧。');
          }
          await era.printAndWait(
            `紧接着，${flash.sex}对 ${you.name} 示意了一下自己那双在见面之初就差点让 ${you.name} 深陷其中的湛蓝色瞳孔。`,
          );
          await flash.say_and_wait('其实您应该注意到了，我不是日本人。');
          era.printButton('「可以猜到。」', 1);
          await era.input();
          await era.printAndWait(`${you.name} 顺着${flash.sex}的话意点头。`);
          await flash.say_and_wait(
            '实际上，我来自于与日本有九千公里之遥的德国。',
          );
          await flash.say_and_wait('换句话说，我是一名留学生。');
          await era.printAndWait('荣进闪耀伸出一根手指。');
          await flash.say_and_wait(
            `至于来到日本的目的，因为我想要成为一位可以在赛场上所向披靡的赛${flash.uma_sex_title}，进而……`,
          );
          era.printButton('「进而？」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait('荣进闪耀沉默了一会，随后轻叹一口气。');
          await flash.say_and_wait(
            '好吧，我知道刚刚在您面前经历了惨败的我这么说可能有些滑稽。',
          );
          await flash.say_and_wait('但是。');
          await era.printAndWait(
            `说到这里，${you.name} 看到${flash.sex}的脸上露出郑重的表情`,
          );
          await flash.say_and_wait(
            '我想通过不断取得荣誉的行为，进而让我的父母……以我为荣。',
          );
          await era.printAndWait(
            `荣进闪耀认真地看着 ${you.name}，似乎是想要将这份信念借此灌输进 ${you.name} 的脑海。`,
          );
          era.printButton('「这就是你的想法吗？」', 1);
          await era.input();
          await era.printAndWait(`${you.name} 点了点头。`);
          await flash.say_and_wait(
            '虽然这场比赛失败了，但是我认为我还有进步的空间。',
          );
          await era.printAndWait(
            `见 ${you.name} 接收到了自己的想法，荣进闪耀便接着开口说道。`,
          );
          await flash.say_and_wait(
            '所以我希望已经在训练员的行业从事多年的您，能够对我进行指导。',
          );
          await era.printAndWait(
            `说完，${flash.sex}向 ${you.name} 鞠躬，作为礼貌地请求。`,
          );
          await era.printAndWait(`而面对这种情况，${you.name} 的行为是——`);
      }
      era.printButton('「我知道了，那我们就一起努力吧。」（招募成功）', 1);
      era.printButton(
        '「很抱歉，我的能力可能没有你想得那么厉害，还请另寻高见吧。」（放弃招募）',
        2,
      );
      ret = (await era.input()) === 1;
    }
    return ret;
  },
};
