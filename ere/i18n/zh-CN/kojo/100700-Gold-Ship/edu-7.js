/**
 * @file 黄金船 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  crazy_fan_end: (() => {
    const title = '粉丝袭击';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait('滂沱大雨、警笛长鸣。');
      await era.printAndWait([
        '看似无尽的长街满是好奇的行人，',
        you.get_colored_name(),
        ' 被按在担架上，睁圆了写满绝望的双眼目送',
        gs.sex,
        '步上警车。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 强忍着被刺剧痛，声嘶力竭地嘶吼着「这不是',
        gs.sex,
        '的错！」之类的句子。',
      ]);
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        ' 被鲜血染红全身的身影，就像是穿着那件让',
        gs.sex,
        '自豪的决胜服。',
      ]);
      era.println();
      await era.printAndWait('不应该是这样的。');
      await era.printAndWait([
        '训练员的失败不应该由',
        gs.uma_sex_title,
        '承受。',
      ]);
      await era.printAndWait([
        gs.uma_sex_title,
        '超乎常人的肉体不应该用在这种地方上，',
        gs.couple_title,
        '应该在赛场上快乐地互相竞技就好了。',
      ]);
      await era.printAndWait([
        '就像 ',
        gs.get_colored_name(),
        ' 不应该为 ',
        you.get_colored_name(),
        ' 失控，把刺杀 ',
        you.get_colored_name(),
        ' 的疯子殴打成道路上一条绝美的红地毡一样。',
      ]);
      era.println();
      await era.printAndWait('到底……是哪里出错了呢……');
      era.println();
      await era.printAndWait([
        '被愤怒的粉丝报复，',
        you.get_colored_name(),
        ' 迎来了结局……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoverboard: (() => {
    const title = '小金船号，爆诞！';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        '「嗡嗡嗡——嗡嗡嗡——」的噪声越来越接近，这并不是蚊子扑翼的声音。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着一辆平衡车从面前飙过，上面站着熟悉的身影。',
      ]);
      era.println();
      await gs.say_and_wait(
        '最高速度 25 公里每小时，输出功率 250 瓦！这就是小金船号啊！',
      );
      era.println();
      await era.printAndWait('只见平衡车一个甩尾停稳，车上倩影一跃而下。');
      await era.printAndWait([
        gs.get_colored_name(),
        ' 一副神气的模样对着 ',
        you.get_colored_name(),
        ' 竖起大拇指。',
      ]);
      era.println();
      era.printButton('「小、小金船号？」', 1);
      await era.input();
      await gs.say_and_wait('正是小金船号是也！');
      await era.printAndWait([
        gs.sex,
        ' 轻力拍拍小金船号的把手，一脸自豪地向 ',
        you.get_colored_name(),
        ' 展示了自己爱车的全貌。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 凑上去端详发现倒是有模有样，上银下黑，两个轮辐都比普通的平衡车要大一圈。',
      ]);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 并不了解平衡车，也不好说是否特别订制的款式。',
      ]);
      await era.printAndWait([
        '只是这平衡车就如',
        gs.sex,
        '本人一样，没看见多少金色的部份。',
      ]);
      era.println();
      era.printButton('「所以说这到底哪里金了？」', 1);
      await era.input();
      await gs.say_and_wait('价钱。');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 一听见钱这个字，眉头就直起来了。',
      ]);
      era.println();
      era.printButton('「该不会很贵吧？」', 1);
      await era.input();

      await era.printAndWait('常听说职业运动员花钱大手大脚，');
      await era.printAndWait(
        '很多年轻运动员刚得到收入就忍不住把自己打扮得时尚又潮流，富贵又豪华，',
      );
      await era.printAndWait('结果低潮到来时连一点保障的资金都不剩下。');
      await era.printAndWait('身为训练员，必须好好监督才行。');
      era.println();
      await era.printAndWait('不过，看来这个忧虑是多余的：');
      era.println();
      await gs.say_and_wait(
        '由小金船亲手改装的小金船号可是无价之宝，当然很贵！',
      );
      era.println();
      await gs.say_and_wait(
        '毕竟可是我花了很大的功夫从里到外都修整了一遍的爱车啊！',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 稍吃了一惊，黄金船的脑回路跳跃得就是惊人。',
      ]);
      era.println();
      era.printButton('「……要是被我开坏掉了怎么办？」', 1);
      await era.input();
      await gs.say_and_wait(
        '放心吧！小金船号的一个特点就是身强体壮！怎么撞都不会坏！',
      );
      era.println();
      await era.printAndWait([
        '看来，这个知识是通过无数次的实践得知的，也解释了为什么小金船号从里到外都被',
        gs.sex,
        '翻修了一遍。',
      ]);
      await era.printAndWait([
        '之后必须好好教育',
        gs.sex,
        '远离危险的重要性，然而……',
      ]);
      await era.printAndWait([
        '看见 ',
        gs.get_colored_name(),
        ' 盛意拳拳就差把 ',
        you.get_colored_name(),
        ' 直接绑到小金船号上头开走的模样，',
        you.get_colored_name(),
        ' 只好笑纳',
        gs.sex,
        '的好意了。',
      ]);
      era.println();
      await era.printAndWait('得到了【小金船号】的借用凭证！');
    };
    f.title = title;
    return f;
  })(),
};
