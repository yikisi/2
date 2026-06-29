/**
 * @file 东海帝王 - 招募
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {string} title
   */
  async rec(teio, you, title) {
    const ret = [];
    await era.printAndWait(
      '湛蓝的天空宛如一条轻柔的丝带，几抹卷曲的云纹点缀其间。橙红色的太阳居于其中，闪耀着，将温暖和光明洒遍四方。',
    );
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 沐浴在阳光之下，行走在绿茵之中，深深地吸了一口清新的空气，呼——舒爽。',
    ]);
    era.println();
    await era.printAndWait([you.get_colored_name(), ' 的心情就和天气一样好。']);
    era.println();
    await era.printAndWait([
      '身为',
      title,
      '训练员，',
      you.get_colored_name(),
      ' 今天依然奔走在去往特雷森学园，帮助',
      teio.uma_sex_title,
      '实现梦想的道路上。',
    ]);
    await era.printAndWait([
      '虽然工作绝对称不上轻松，但是不匪的物质收入（包揽食宿，以特殊的【马币】结算的高额工资）和精神财富（帮助',
      teio.uma_sex_title,
      '学生们成长，进步，看到',
      teio.couple_title,
      '拼搏实现梦想后发自内心的笑容）足以抵消负面情绪。',
    ]);
    await you.say_and_wait(
      '今天下午，似乎也有一次出道战来着，嗯，应该去看看，物色一下担当人选吧……',
      true,
    );
    era.println();
    await era.printAndWait([
      '就在 ',
      you.get_colored_name(),
      ' 沉浸在思绪中时，突然，仿佛整个世界也沉静了下来。',
    ]);
    await era.printAndWait([
      '树叶轻柔，缓慢地摆动，周围的空气粘稠凝固。发生了什么？',
      you.get_colored_name(),
      ' 疑惑地看向前方的一位行人，',
      teio.sex,
      '的嘴巴在逐渐张大……',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait('呀！');
    era.println();
    await era.printAndWait([
      '与呼声并行的，是一股劲风，向 ',
      you.get_colored_name(),
      ' 的背后袭来。',
    ]);
    await era.printAndWait([
      '但或许是训练员的第六感，',
      you.get_colored_name(),
      ' 的身体意识反应过来之前便先一步做出了行动，弯腰屈膝，压低中心，但是想象中的危机并没有前来，从下往上看，',
      you.get_colored_name(),
      ' 的眼睛捕捉到一道小巧，模糊的身影从轻快地从翻越过原先 ',
      you.get_colored_name(),
      ' 头顶所在位置，然后……飞入了上面的树枝中间。',
    ]);
    era.println();
    await era.printAndWait([
      '接着，随着树叶的沙沙声，一只洁白，细嫩的小手从绿叶中探了出来，捻着一个彩色的氢气球。',
      you.get_colored_name(),
      ' 刚刚站起身，便听到旁边穿来细碎的脚步声，一个小女孩走到了树下。',
    ]);
    await era.printAndWait([
      '小女孩「哇，谢谢',
      teio.elder_sibling_sex_title,
      '！刚刚那个跳跃，好帅气啊！」',
    ]);
    await teio.say_as_unknown_and_wait(
      '哼哼，请叫我【无敌的帝王大人】！这是你的东西，拿住了，小心别在让它跑了哦！',
    );
    await era.printAndWait([
      '充满朝气的',
      teio.teen_sex_title,
      '喉音从上方传来，',
      you.get_colored_name(),
      ' 抬眼，看见了一个娇小可爱的',
      teio.uma_sex_title,
      '，端坐在一跟较粗的枝干上，往下递出气球。不过，',
      teio.sex,
      '和小女孩的手，仍然差一点高度……',
    ]);
    era.printButton('出手帮忙', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      ' 不假思索的添了把手，接过了',
      teio.uma_sex_title,
      '手上的气球，递给了身旁的小女孩。小女孩道了一声谢。',
    ]);
    await era.printAndWait('小女孩「帝王大人！能不能再跳一次呢？」');
    await era.printAndWait([
      '显然，她是想看那位',
      teio.uma_sex_title,
      '翻身下树的潇洒模样。',
      you.get_colored_name(),
      ' 笑了笑，准备后退让下地方，或者今天能看到一个帅气的「super hero landing」也说不定。',
    ]);
    await era.printAndWait([
      '但奇怪的是，树上的',
      teio.uma_sex_title,
      '却并没有呼应自己的小粉丝',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      '嗯，这个，帝王舞步需要一段时间准备，暂时……啊，你的妈妈在喊你，快去吧，别让她担心了！',
    );
    era.println();
    await era.printAndWait([
      '小女孩看上去有些迷惑，这时，',
      you.get_colored_name(),
      ' 注意到了树叶层叠中露出的一些粉嫩肌肤，于是便明白了怎么回事。',
    ]);
    await era.printAndWait([you.get_colored_name(), ' 将身体微向后侧靠。']);
    era.println();
    era.printButton(
      `「小妹妹，听${teio.elder_sibling_sex_title}的话吧，你妈妈跟你分开久了会着急的。看，她就在那边向你挥手呢！」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '小女孩看上去有些糊涂，不过还是向着自己妈妈的方向离去了。一时间，此处只剩下 ',
      you.get_colored_name(),
      '，与树上的',
      teio.teen_sex_title,
      '。',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      `那个……您是特雷森的训练员${you.adult_sex_title}吧！请帮我一个忙好吗！`,
    );
    await era.printAndWait([
      '想必',
      teio.sex,
      '注意到了 ',
      you.get_colored_name(),
      ' 胸前佩戴的徽章',
    ]);
    era.println();
    era.printButton('「当然」', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      ' 应声点头。',
      teio.sex,
      '开心地笑了，挺了挺身……',
    ]);
    era.println();
    era.printButton('马上跑到树下伸出双手接应（爱慕+1）', 1);
    era.printButton(
      `拾起刚刚被自己挡在内侧的，${teio.uma_sex_title}蹬下的凉鞋，放在树下（好感+5）`,
      2,
    );
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 迅速跑到',
        teio.sex,
        '的脚下，伸出双手，',
        teio.sex,
        '仿佛吃了一惊，脸上泛起红晕，不过还是滑了下来，双手扶住 ',
        you.get_colored_name(),
        ' 的肩膀，一双白净的小脚稳而准地踏到了 ',
        you.get_colored_name(),
        ' 的掌心上。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 感觉到自己的手掌内测摩挲到了',
        teio.uma_sex_title,
        teio.teen_sex_title,
        '柔弹又光滑的脚底——这就是',
        teio.uma_sex_title,
        '的天赋吗，高强度的训练和运动带来足部的矫健同时还能保持娇嫩——肌肤收缩，',
        you.get_colored_name(),
        ' 查觉到了',
        teio.sex,
        '足弓略微的抬起，肉粉色的脚趾不安地抽动了几下，',
        you.get_colored_name(),
        ' 定了定神，将注意力从',
        teio.uma_sex_title,
        '可爱的双足上移开，缓慢而稳定地转身，将',
        teio.sex,
        '放在身旁的长椅上，然后背过身去，假装无视了',
        teio.teen_sex_title,
        '带点羞涩穿鞋的模样。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 拎起为了不让小女孩看出端倪而挡在身体内测的凉鞋，放在了树旁，用眼神看护着',
        teio.uma_sex_title,
        '跳下，随时准备伸出双臂帮扶，不过',
        teio.sex,
        '没有给 ',
        you.get_colored_name(),
        ' 这个机会。',
      ]);
      await era.printAndWait([
        teio.uma_sex_title,
        teio.teen_sex_title,
        '轻松一跃而下，踩到鞋上的动作又稳又准。',
        teio.sex,
        '抬头，冲 ',
        you.get_colored_name(),
        ' 微笑了一下，展露出比太阳还灿烂的面容。',
      ]);
      await era.printAndWait([
        '倒是和',
        teio.sex,
        '那身孩子气的童装相映成趣。',
      ]);
    }
    await era.printAndWait(['穿完鞋后，', teio.sex, '那动人的声音再次传来。']);
    era.println();
    await teio.say_as_unknown_and_wait(
      '谢谢啊！不好意思麻烦您了！刚刚我为了方便，在跳起来前把鞋蹬掉了，结果就把自己弄到这种情况……无敌的帝王大人也难免会犯失误呢！',
    );
    era.println();
    era.printButton('「帝王……？」', 1);
    await era.input();

    await teio.say_as_unknown_and_wait([
      '对啦！我的名字是东海帝王！是日后将成为传奇的赛',
      teio.uma_sex_title,
      '哦！正好今天下午我会跑一次比赛，训练员先生有空也请一定过来看看吧！我还赶时间，现在就先失陪了，下午学园见！',
    ]);
    era.println();
    await era.printAndWait([
      '说完，',
      teio.sex,
      '便一路小跑着离去了。',
      you.get_colored_name(),
      ' 望向',
      teio.sex,
      '的背影，笑着挥手告别。',
    ]);
    era.drawLine({
      content: '下午，特雷森学园 选拔赛 2000米',
      position: 'left',
    });
    await era.printAndWait([
      '学园的操场上已经围了不少的人。这次来的人意外地多啊，',
      you.get_colored_name(),
      ' 坐在一处相对僻静的地方，暗暗想到，他们是为了争夺某几位新人吗？',
    ]);
    era.println();
    await era.printAndWait([
      '脑中浮现出那名为 ',
      teio.get_colored_name(),
      ' 的',
      teio.uma_sex_title,
      teio.teen_sex_title,
      '身姿，轻快的步伐蕴藏着极强的爆发力；紧绷的腿部肌肉收缩再舒张，与常人不同的，独一无二的摆步架势将力运至双足底部，与大地接触后再弹起，借势向前飞跃，甩出他人望尘莫及的高速……',
    ]);
    era.println();
    await era.printAndWait([
      '脑中的幻象与眼前的现实重叠。',
      you.get_colored_name(),
      ' 看见一道蓝白色的流光在场上跃动，肆意闪耀着自己的色彩，将其他对手抛诸脑后。胜利必是',
      teio.sex,
      '的囊中之物——看到这番模样的所有人，应该都会如此确定吧。',
    ]);
    era.println();
    await era.printAndWait([
      teio.sex,
      '如此理所当然般宣告了自己的存在，赢取了胜利。',
      you.get_colored_name(),
      ' 看着屏幕上大大的「一着」，不由得微笑起来，起身向下走去。',
    ]);
    era.println();
    await teio.say_and_wait('唔……');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 在人群中努力向前挤，天才',
      teio.uma_sex_title,
      teio.teen_sex_title,
      '的初表现足以令任何人为之痴狂，所以这种情况是可以料想得到的。渴望着获取搭档的训练员们把这边团团围住。一身蓝天白云配色的帝王反倒像个小太阳，吸引着无数伸颈以待的向日葵。轻摇尾巴着的',
      teio.sex,
      '虽然看上去很兴奋，不过 ',
      you.get_colored_name(),
      ' 也捕捉到了',
      teio.sex,
      '眼底的一丝苦恼，然后，仿佛感应一般，',
      teio.sex,
      '转向这边，捕捉到了 ',
      you.get_colored_name(),
      ' 的视线。',
    ]);
    era.println();
    await era.printAndWait('要怎么办呢？');
    era.println();
    era.printButton('大声说出帝王的名字，要求成为担当（继续招募）', 1);
    era.printButton('还是算了吧……（放弃招募）', 2);
    ret.push(await era.input());
    if (ret[1] === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 听见自己大喊 ',
        teio.get_colored_name(),
        ' 的名字，',
        teio.sex,
        '的眼神跳动了一下，惊喜地回应了 ',
        you.get_colored_name(),
        '。人墙知趣地散开，没有犹豫，',
        you.get_colored_name(),
        ' 伸出惯用手，拿出契约证明，另一只手又不自觉地抚平掉',
        teio.teen_sex_title,
        '肩头被风吹和汗浸弄得有些皱的衣料。',
        teio.teen_sex_title,
        '运动后脸颊的红润尚未散去，',
        teio.sex,
        '开心笑着，签下自己的名字，承认了 ',
        you.get_colored_name(),
        ' 是',
        teio.sex,
        '的训练员。',
      ]);
      era.println();
      await era.printAndWait('你们的故事从此开始。');
    } else {
      await era.printAndWait(
        '这孩子……或许对自己不怎么适合，太有挑战性了也说不定。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 轻轻，但明确地摇了摇头，悄然退出了人群。',
      ]);
    }
    return ret;
  },
};
