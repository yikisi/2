/**
 * @file 待兼福来 - 招募
 * @author ALEX
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async rec(kitaru, you) {
    await era.printAndWait([
      '选拔赛，那是一个赛',
      kitaru.uma_sex_title,
      '与训练员相遇的地方。',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '担任训练员也有一段时间了，',
        you.get_colored_name(),
        ' 在这行还算是有点心得体会的。',
      ]);
      await era.printAndWait([
        '其中之一便是，赛',
        kitaru.uma_sex_title,
        '和训练员确定担当关系之后，这长达三年的契约，毫无疑问的，会使双方的命运在名为人生的漫长旅途中短暂的交织在一起。',
      ]);
      await era.printAndWait(
        '乃至从此以后一起面对人生道路上的风风雨雨也不一定。',
      );
    } else {
      await era.printAndWait([
        '训练员前辈流传下来的经验有很多，而其中之一便是——',
      ]);
      await era.printAndWait([
        '赛',
        kitaru.uma_sex_title,
        '和训练员确定担当关系之后那长达三年的契约，毫无疑问的，会使双方的命运在名为人生的漫长旅途中短暂的交织在一起。',
      ]);
      await era.printAndWait(
        '乃至从此以后一起面对人生道路上的风风雨雨也不一定。',
      );
    }
    await era.printAndWait([
      you.get_colored_name(),
      ' 双手摸索着口袋，走在神社内的石板路上。',
    ]);
    await era.printAndWait([
      '特雷森学生们常去的那座神社在此时往往会被选拔赛前来求神拜佛的训练员与',
      kitaru.uma_sex_title,
      '们堆满。',
    ]);
    await era.printAndWait([
      '因此 ',
      you.get_colored_name(),
      ' 并没有去那座久负盛名的神社，而是任凭灵感，在前往特雷森的路上挑了一座顺路的神社。',
    ]);
    await era.printAndWait([
      '这座偏远的，不知供奉着哪位神明的神社依然如工作日般冷清。',
    ]);
    await era.printAndWait([
      '跨过朱红色的鸟居之后，',
      you.get_colored_name(),
      ' 进入了神的领地，周遭随处可见挂着粗壮注连绳的大树与立起的石灯笼。',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '神社里神圣肃穆的氛围甚至让期待自己下一位担当的 ',
        you.get_colored_name(),
        ' 也暂时的有了片刻的宁静。',
      ]);
    } else {
      await era.printAndWait([
        '神社里神圣肃穆的氛围甚至让还在对未来感到迷惘的 ',
        you.get_colored_name(),
        ' 也暂时的有了片刻的宁静。',
      ]);
    }
    era.printButton('祈愿', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 闭上眼睛，深吸了一口气……',
    ]);
    await kitaru.say_as_unknown_and_wait('喔喔喔喔喔——————！！！！');
    await era.printAndWait([
      you.get_colored_name(),
      ' 参拜的下一步还没开始，便被身后的惊呼声打断。',
    ]);
    era.printButton('回头', 1);
    await era.input();
    await era.printAndWait([
      '可惜，和习俗中说的不同，随着钟声而出现的不是什么神明，而是一位',
      kitaru.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '有着偏凌乱的橙色短发，领结因为那对挺拔而被明显的撑起，而宛如稻荷神的狐使般细长的耳朵，正一摆一摆的体现出了',
      kitaru.uma_sex_title,
      '的兴奋。',
    ]);
    await era.printAndWait([
      '不过与',
      kitaru.sex,
      '几乎要溢出来的元气外表不符，这位距离 ',
      you.get_colored_name(),
      ' 仅有咫尺之遥的',
      kitaru.uma_sex_title,
      '，身上散发着是如此间神社般清冷宁静的体香，配以其左耳悬挂着的肃穆达摩，与点缀在右耳处的黄色雏菊。',
    ]);
    await era.printAndWait([
      '两种截然不同的元素，就这么堆彻 在',
      you.get_colored_name(),
      ' 眼前的这位',
      kitaru.uma_sex_title,
      '身上。',
    ]);
    await era.printAndWait([
      '以及，在',
      kitaru.sex,
      '抬起头望向 ',
      you.get_colored_name(),
      ' 时，那对星星状的瞳孔，即使是在',
      kitaru.uma_sex_title,
      '中，也算的上是独特的类型，正因撞见了 ',
      you.get_colored_name(),
      ' 而闪着欢喜的光芒。',
    ]);
    era.printButton('仔细打量', 1);
    await era.input();
    await era.printAndWait([
      '这个咋咋呼呼的栗毛的确是特雷森的学生，这点 ',
      you.get_colored_name(),
      ' 可以从',
      kitaru.sex,
      '穿着的校服确认。',
    ]);
    await era.printAndWait('不过？现在不应该是选拔赛的时候吗？');
    await era.printAndWait([
      '也许是看出了 ',
      you.get_colored_name(),
      ' 目光中的疑惑不解，这位',
      kitaru.get_colored_name(),
      '立马做出了回应。',
    ]);
    await kitaru.say_as_unknown_and_wait('对哦！忘了自我介绍了！');
    await kitaru.say_as_unknown_and_wait([
      '我的名字是【',
      kitaru.get_colored_name(),
      '】受到白兴大人的指引而来到此地！',
    ]);
    await kitaru.say_and_wait([
      '等待着自己命中注定的人的到来！也就说，是训练员',
      you.adult_sex_title,
      '你了！',
    ]);
    await era.printAndWait([
      '说罢，',
      kitaru.sex,
      '向 ',
      you.get_colored_name(),
      ' 摊开了手臂',
    ]);
    await kitaru.say_and_wait('请务必！务必成为我的训练员！');
    await era.printAndWait([
      '是这座神社过于灵验吗？又或者是三女神，甚至是别的什么神明的视线碰巧投向了 ',
      you.get_colored_name(),
      '？',
    ]);
    await era.printAndWait('比如，那位白兴大人？');
    era.printButton('回想一下曾经学过的民俗知识', 1);
    era.printButton('回想一下有无听过类似的神话', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 可以确定，在自己所学过的知识中，从未听说过此位神明。',
      ]);
    } else {
      await era.printAndWait([
        '没有，',
        you.get_colored_name(),
        ' 确信从未听说过这位神明。',
      ]);
      await era.printAndWait([
        '说不定只是眼前这位',
        kitaru.uma_sex_title,
        '的癔想而已。',
      ]);
    }
    await kitaru.say_and_wait(
      '来吧！训练员！一起和我在闪光系列赛中抓住幸运吧！',
    );
    era.printButton('拒绝', 1);
    era.printButton('接受', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '的确，毫不了解的成为一位赛',
        kitaru.uma_sex_title,
        '的训练员，是对双方都不负责的行为。',
      ]);
      await kitaru.say_and_wait('呜……');
      await era.printAndWait([
        '被 ',
        you.get_colored_name(),
        ' 拒绝后的',
        kitaru.teen_sex_title,
        '迅速低沉了下去，先前跃动的双耳，也随着马尾一同垂下。',
      ]);
      await era.printAndWait([
        '尽管有些于心不忍，但 ',
        you.get_colored_name(),
        ' 清楚的知道，仅凭这位 ',
        kitaru.get_colored_name(),
        ' 的三言两语就成为',
        kitaru.sex,
        '的训练员是对双方都不负责任的行为。',
      ]);
      await era.printAndWait('只不过……');
      await era.printAndWait([
        you.get_colored_name(),
        '发现被拒绝后才不到几秒钟，',
        kitaru.get_colored_name(),
        ' 的脸上又露出了笑容。',
      ]);
      await era.printAndWait(
        '与其说是笑容，倒不如说像是长久以来的习惯导致的刻板印象。',
      );
      await you.say_and_wait('……唉');
      await era.printAndWait([
        '训练员的责任感，让 ',
        you.get_colored_name(),
        ' 不能就这样坐视不管。',
      ]);
    } else {
      await era.printAndWait([
        '尽管 ',
        you.get_colored_name(),
        ' 并不了解',
        kitaru.sex,
        '，',
        you.get_colored_name(),
        ' 还是决定将自己的命运交给刚祈祷完没多久的神明。',
      ]);
      await era.printAndWait([
        '不过，就这样成为一位赛',
        kitaru.uma_sex_title,
        '的训练员，是对双方都不负责的行为。',
      ]);
    }
    era.printButton('「我会去看你的选拔赛，在那之后再做决定怎么样？」', 1);
    await era.input();
    await kitaru.say_and_wait('喔——！');
    await kitaru.say_and_wait('对的对的！正是如此！');
    await kitaru.say_and_wait('让我在即将到来的选拔赛上！展现自己的实力吧！');
    await kitaru.say_and_wait([
      '那么，来拉个勾吧！呃……',
      you.actual_name,
      ' 训练员！',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 有些生涩地念出了 ',
      you.get_colored_name(),
      ' 胸口训练员名牌上的名字，并向 ',
      you.get_colored_name(),
      ' 伸出了手。',
    ]);
    await kitaru.say_and_wait('嗯？');
    await era.printAndWait([
      '见 ',
      you.get_colored_name(),
      ' 似乎有些诧异，',
      kitaru.get_colored_name(),
      ' 解释道',
    ]);
    await kitaru.say_and_wait('这是我姐姐教给我的仪式哦！');
    await kitaru.say_and_wait('拉勾仪式！');
    await kitaru.say_and_wait('约定后，就是命中注定的事了！');
    era.printButton('伸手', 1);
    await era.input();
    await kitaru.say_and_wait('好！那么，就这么定了！');
    await kitaru.say_and_wait('我一定会让训练员！和我签约的！请务必～要来看！');
    era.drawLine({ content: '第二天' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的选拔赛，终于开始了。',
    ]);
    await era.printAndWait([
      '或许是由于今日运势不佳，堵车使 ',
      you.get_colored_name(),
      ' 晚上了些许，最后 ',
      you.get_colored_name(),
      ' 费了好大的力气，才挤进围观的人群中。',
    ]);
    await era.printAndWait([
      '毕竟，这场选拔赛中，无论是那位早在新生中以大逃而闻名的',
      kitaru.uma_sex_title,
      '，还是目白家的新秀，又或是有夺得三冠可能的鹿毛',
      kitaru.uma_sex_title,
      '，单拎出来哪一位都会是那些训练员趋之若鹜的对象。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 只是作为陪衬的一位，从周围人们的议论声看来，并没有多少人关注',
      kitaru.sex,
      '。',
    ]);
    await era.printAndWait([
      '尽管如此，被人群堵在观众席角落的 ',
      you.get_colored_name(),
      '，还是捕捉到了正在进入马闸的 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '身着的体操服，展示出了',
      kitaru.sex,
      '凹凸有致的身体曲线，而穿着白色丝袜的双腿白皙而修长。',
    ]);
    await era.printAndWait([
      '单论外表而言，',
      kitaru.sex,
      '确实是一位可爱的赛',
      kitaru.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '只不过，',
      kitaru.sex,
      '的表情，看起来却有些苦恼，暗淡无光的星星瞳似乎正在搜寻着观众席上可能出现的某人，看来',
      kitaru.sex,
      '并没有发现被人群堵在角落的 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '最后，',
      kitaru.get_colored_name(),
      ' 还是在工作人员的催促下入了闸。',
    ]);
    era.drawLine({ content: '选拔赛结束后' });
    await era.printAndWait('惨败……');
    await era.printAndWait([
      '可以说是一场惨败，或许唯一值的称赞的地方，也就是那',
      kitaru.sex,
      '勉强能称的上是高于平均水平的末脚了',
    ]);
    await era.printAndWait([
      '就连',
      kitaru.sex,
      '的赛跑时的姿势看起来也颇为别扭，配上',
      kitaru.sex,
      '对于冲刺时机的错误选择，最后只取得了一个末着的成绩',
    ]);
    await era.printAndWait([
      '真的要选择',
      kitaru.sex,
      '作为担当吗？',
      you.get_colored_name(),
      ' 不由得开始犹豫起来。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 可以看见，',
      kitaru.get_colored_name(),
      ' 拒绝了寥寥无几的几位想要招揽',
      kitaru.sex,
      '入队的训练员',
    ]);
    await era.printAndWait([
      '名叫 ',
      kitaru.get_colored_name(),
      ' 的赛',
      kitaru.uma_sex_title,
      '似乎是意外的，认定了约定之后就咬死不放的类型。',
    ]);
    await kitaru.say_and_wait('非常抱歉！但是我已经有了命中注定的人了！');
    await era.printAndWait([
      you.get_colored_name(),
      ' 听见',
      kitaru.sex,
      '大声地对周围几位想要凑过去的训练员如此说到。',
    ]);
    await era.printAndWait([
      '似乎',
      kitaru.sex,
      '还是尝试着想要挤出微笑，可骰子投出的结果只有失败，栗色的马尾无精打采地垂于双腿之间。',
    ]);
    era.printButton(`（我要成为 ${kitaru.name} 的担当）（尝试招募）`, 1);
    era.printButton('（还是算了吧……）（放弃招募）', 2);
    const ret = await era.input();
    if (ret === 1) {
      era.printButton(`「${kitaru.name}！」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 大声的喊出了',
        kitaru.sex,
        '的名字，又生怕那家伙没有听见，以更大的声音重复了好几遍。',
      ]);
      era.printButton(`「${kitaru.name}！！！」`, 1);
      await era.input();
      await era.printAndWait([
        '先是垂下的耳朵突然弹起，那对重新打着了火的星星瞳则看向了',
        you.get_colored_name(),
        '的方向。',
      ]);
      await era.printAndWait([
        '而后，那可以说是 ',
        you.get_colored_name(),
        ' 平生见过最快的末脚，那抹亮橙色的闪电直冲 ',
        you.get_colored_name(),
        ' 而来。',
      ]);
      await era.printAndWait([
        '就在毫无边界感的 ',
        kitaru.get_colored_name(),
        ' 因为没有刹住车而要跌入 ',
        you.get_colored_name(),
        ' 怀里的同时，',
        you.get_colored_name(),
        ' 眼疾手快地按住了',
        kitaru.sex,
        '的头，阻止了',
        kitaru.sex,
        '想要撞上来的进一步动作。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        '的力量理论上是人类的几倍，',
        you.get_colored_name(),
        '不可能挡住',
        kitaru.sex,
        '。',
      ]);
      await era.printAndWait([
        '不过在 ',
        you.get_colored_name(),
        ' 的手掌下，',
        kitaru.sex,
        '却如同一只无力的兔子般，摇摇晃晃的。',
      ]);
      await kitaru.say_and_wait('我就知道！训练员先生会过来看的！');
      await kitaru.say_and_wait('今天果然是——');
      await kitaru.say_and_wait('大吉！');
      await era.printAndWait([
        kitaru.sex,
        '做了一个双手托举向天空的奇怪姿势，然后看向了',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '知道',
        kitaru.sex,
        '的意思是什么',
      ]);
      await era.printAndWait([
        '最后，',
        you.get_colored_name(),
        ' 还是在',
        kitaru.sex,
        '如找到了救命稻草般的目光中掏出了契约。',
      ]);
      await era.printAndWait([
        '和 ',
        kitaru.get_colored_name(),
        '，完成了【命中注定？】的相遇。',
      ]);

      await era.printAndWait([
        '成功与 ',
        kitaru.get_colored_name(),
        ' 签约了。',
      ]);
    } else {
      await era.printAndWait([
        '这孩子的精神状况似乎不是很适合成为担当，还是不插手为好，',
        you.get_colored_name(),
        '悄悄的离开了现场',
      ]);
    }
    return ret;
  },
};
