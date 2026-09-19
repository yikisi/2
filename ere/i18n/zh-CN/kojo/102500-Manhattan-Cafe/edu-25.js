/**
 * @file 曼城茶座 - 育成
 * @author Necroz
 * @author Mr.E.（事件「怕黑」）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  race_end_win: (() => {
    const title = '比赛获胜！';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……成功了……我拿到……第一名了。');
      await coffee.say_and_wait(
        '我成功地……靠近那个背影了……呵呵。我果然很喜欢……这种感觉……',
      );
      era.printButton('恭喜你，茶座！', 1);
      await era.input();
      await coffee.say_and_wait([
        '谢谢你，',
        callname,
        '……我，下次也会努力的……',
      ]);
      await coffee.say_and_wait('努力获胜……然后再次享受，这份心情……');
      era.printButton('但可不能松懈。', 1);
      await era.input();
      await coffee.say_and_wait('……！');
      await coffee.say_and_wait('……是的，说得没错。要保持警戒不要大意了才好……');
      await coffee.say_and_wait('因为我——不，我们……还没能超越那个背影……');
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '比赛入着！！';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……我入着了……');
      era.printButton('你很努力了，茶座。', 1);
      await era.input();
      await coffee.say_and_wait('……是的，我觉得有确实发挥了……自己的实力……');
      await coffee.say_and_wait('……但是，远远不够……');
      await coffee.say_and_wait('我们的目标……是在更遥远的前方……');
      era.printButton('接下来要更努力地训练。', 1);
      await era.input();
      await coffee.say_and_wait('……嗯，我可不能，就这样停下脚步……');
      await coffee.say_and_wait(['……', callname, '。今后……也要请多指教了……！']);
      era.println();
      await era.printAndWait('——咚。');
      await era.printAndWait([
        '不轻不重的敲击声在 ',
        coffee.get_colored_name(),
        ' 的脑门上响起。',
      ]);
      era.println();
      await coffee.say_and_wait('疼……没把你忘记掉……！');
      era.println();
      era.printButton('今后大家一起努力吧。', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '比赛失败……';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……我输了……是我实力不济……');
      await coffee.say_and_wait('在这里就失败……那我……离那个背影……');
      era.printButton('已经做得很好了！', 1);
      await era.input();
      await coffee.say_and_wait(
        '『已经做得很好了』、吗……这种精神上的鼓励……我实在不认为有意义……',
      );
      era.println();
      await era.printAndWait('——咚。');
      await era.printAndWait('稍微有点用力的敲击声在茶座的脑门上响起。');
      era.println();
      await coffee.say_and_wait('好疼……！朋友也这样……可是，以我现在的实力……');
      era.printButton('要就这样认输了吗？', 1);
      await era.input();
      await coffee.say_and_wait('……就这样认输……我……不要。');
      era.println();
      await era.printAndWait('——这样就对了。');
      await era.printAndWait([
        '耳边仿佛听到了这样的话语，周围的空气像是凝结了一瞬般、感觉温度变低了一些……',
      ]);
      era.println();
      await coffee.say_and_wait([callname, '……还有朋友……谢谢你们……']);
      await coffee.say_and_wait('我不会再输了。');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 重新充满了干劲，准备朝下一场比赛前进。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '漆黑的猎犬';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      callname_32,
      t_call_c,
    ) => {
      await era.printAndWait([
        '成功招募 ',
        coffee.get_colored_name(),
        ' 后，',
        you.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 相约来到训练场进行跑步测试。',
      ]);
      await era.printAndWait([
        '说起来，尽管当上了 ',
        coffee.get_colored_name(),
        ' 的训练员，但这还是第一次亲眼看见',
        coffee.sex,
        '的奔跑。虽说通过录像反复观看了几次',
        coffee.sex,
        '的选拔赛，始终还是差了点什么。',
      ]);
      await era.printAndWait(
        '连担当的选拔赛都没看过就进行招募的训练员，也算是特雷森第一人了吧……',
      );
      await era.printAndWait([
        '不远处，已经就位的 ',
        coffee.get_colored_name(),
        ' 朝 ',
        you.get_colored_name(),
        ' 挥了挥手，',
        you.get_colored_name(),
        ' 收起了思绪，专心观察起 ',
        coffee.get_colored_name(),
        ' 的动作。',
      ]);
      await era.printAndWait([
        '哨响过后，',
        coffee.get_colored_name(),
        ' 从起跑位冲出。',
      ]);
      era.printButton('「嗯……起步并不算很快，果然是适合追和差吗。」', 1);
      await era.input();
      await era.printAndWait([
        '给 ',
        coffee.get_colored_name(),
        ' 做出的要求是按照',
        coffee.sex,
        '自己的节奏来跑，并想象其他',
        coffee.uma_sex_title,
        '在场的情况。',
      ]);
      await era.printAndWait([
        '保持着自己的节奏，',
        coffee.get_colored_name(),
        ' 轻柔而缓和地迈开脚步，顺利度过了中盘，来到了最后的冲刺点。',
      ]);
      await era.printAndWait('——嘭。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的眼睛告诉了 ',
        you.get_colored_name(),
        ' 应该听到的声音。',
      ]);
      await era.printAndWait([
        '朝着终点，',
        coffee.get_colored_name(),
        ' 的身子向下一俯，随着脚下刹那飞溅出的泥土，如离弦的箭般直插前方。这非同一般的爆发力在瞬间便死死吸引住 ',
        you.get_colored_name(),
        ' 的目光。',
      ]);
      await era.printAndWait([
        '仿佛是逐兔的猎犬、又像是饥渴的苍鹫，',
        you.get_colored_name(),
        ' 无法将这样狂野的步伐与那个沉默清冷的',
        coffee.child_sex_title,
        '联系在一起。',
      ]);
      await era.printAndWait('但……');
      await era.printAndWait('太美了。');
      await era.printAndWait([
        '看着那如漆黑的猎犬般撕裂终点线的身姿，',
        you.get_colored_name(),
        ' 不由得这样想到。',
      ]);
      era.println();
      if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait(['哟，', callname_32, '。']);
        await era.printAndWait([
          '熟悉的声音传来，',
          you.get_colored_name(),
          ' 回头看去，',
          tachyon.get_colored_name(),
          ' 正站在身后。',
        ]);
        await tachyon.say_and_wait([
          '你的新担当就是 ',
          t_call_c,
          ' 吗？真是凑巧啊，哈哈哈。',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          ' 的目的是追上无人能看见的假想朋友。嗯，一般人确实难以理解。而我呢，追求的则是赛',
          coffee.uma_sex_title,
          '的极限……更要超越极限，不止步于单纯的胜利。',
        ]);
        await tachyon.say_and_wait(
          '作为我们这样的怪人组合的训练员，你也真是难办啊。',
        );
        await coffee.say_and_wait([call_32, '……你在做什么？']);
        await era.printAndWait([
          '测试结束的 ',
          coffee.get_colored_name(),
          ' 回到了 ',
          you.get_colored_name(),
          ' 身边，不太高兴地看着 ',
          you.get_colored_name(),
          ' 身旁的 ',
          tachyon.get_colored_name(),
          '。',
        ]);
        await tachyon.say_and_wait([
          '哎呀，你看起来好像不是很高兴呢 ',
          t_call_c,
          '……但我们之间的交集肯定是会越来越深的，毕竟我们是同一个训练员手下的担当',
          coffee.uma_sex_title,
          '嘛，你说是吧？训 · 练 · 员 · 君？',
        ]);
        await coffee.say_and_wait([
          '训练员君……',
          call_32,
          ' 也是你的担当吗？',
          callname,
          '……',
        ]);
        await era.printAndWait([
          '这下麻烦了，没想到',
          coffee.couple_title,
          '两人认识，而且貌似还不太对付的样子……',
        ]);
        await tachyon.say_and_wait([
          '拜拜啦，两位。今后我们可要多多彼此关照。而且我对你期望很高喔，',
          t_call_c,
          '。期待你——在与我不同的意义上。',
        ]);
        await era.printAndWait([
          '当 ',
          you.get_colored_name(),
          ' 还在想着怎么向 ',
          coffee.get_colored_name(),
          ' 说明时，',
          tachyon.get_colored_name(),
          ' 留下一句意义深长的话便离开了。',
        ]);
        era.printButton('「这家伙……真是……」', 1);
        await era.input();
        await coffee.say_and_wait([
          callname,
          '……暂时就别想 ',
          call_32,
          ' 的事了。现在的你，是我的训练员……对我们来说更重要的，是要追上朋友。就这么单纯……对吧？',
        ]);
        await era.printAndWait([
          '没错，',
          coffee.sex,
          '是 ',
          coffee.get_colored_name(),
          '，与其他赛',
          coffee.uma_sex_title,
          '无关。',
        ]);
      }
      await era.printAndWait(['整理好思绪，你们开始了今天的训练。']);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '迎向出道战';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait('不在……哪里都不在……到底去哪了……');
      await era.printAndWait([
        '今天是 ',
        coffee.get_colored_name(),
        ' 的出道战，多数赛',
        coffee.uma_sex_title,
        '都紧张得浑身发抖，但',
        coffee.sex,
        '的心思却不在此。',
      ]);
      await coffee.say_and_wait([
        callname,
        '，在比赛开始前……我想……去找一下……可以吗？',
      ]);
      era.printButton('「去吧，没问题的。」', 1);
      await era.input();
      await coffee.say_and_wait('不在这……');
      await coffee.say_and_wait('这里也没有……');
      await coffee.say_and_wait(
        '……找到了……！在终点板的更前方，就在那里等着我。',
      );
      await coffee.say_and_wait('看起来很开心的样子。我果然没有决定错……');
      era.printButton('「拼尽全力去追赶吧。」', 1);
      await era.input();
      await coffee.say_and_wait('……嗯。');
      await era.printAndWait([
        coffee.get_colored_name(),
        '，',
        coffee.sex,
        '那持续至今、不为人知的追逐战，终于要到赛场上正式展开了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '海市蜃楼';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}A`,
        '哈、呼……！大家都辛苦了！是场很精彩的比赛呢！',
      );
      await you.say_as_passer_by_and_wait(`赛${coffee.uma_sex_title}A`, [
        '那边那位……是叫做 ',
        coffee.get_colored_name(),
        ' 吧？你也辛苦了……',
      ]);
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}A`,
        '呃，咦……没在听吗？那个……',
      );
      await coffee.say_and_wait('…………');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 背对着其他赛',
        coffee.uma_sex_title,
        '，默默地望着远方。',
      ]);
      await era.printAndWait([
        '赶到选手通道的 ',
        you.get_colored_name(),
        ' 在找到 ',
        coffee.get_colored_name(),
        ' 后，走上前去。',
      ]);
      await coffee.say_and_wait(['啊，', callname, '……']);
      era.printButton('「比赛结果如何？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……我输了，朋友独自一个人跑在最前面，冲过了终点……跑得越来越远……',
      );
      await coffee.say_and_wait(
        '而且看起来很开心的样子，应该是因为能在宽广的地方奔跑吧。但同时……',
      );
      await coffee.say_and_wait(
        '差距……也是至今最大的一次……像是解开了什么束缚般，跑得非常快。',
      );
      await coffee.say_and_wait('……我想追上朋友。但……我该怎么做……');
      await era.printAndWait([
        '从 ',
        coffee.get_colored_name(),
        ' 的叙述来看，「朋友」和',
        coffee.sex,
        '之间速度的差距似乎相当的大……',
      ]);
      await era.printAndWait(
        '既然如此，就算仓促地拟定计划，大概也很难得到成效。这样的话——',
      );
      era.printButton('「暂且不定下赛程，一步步强化自己吧。」', 1);
      await era.input();
      await coffee.say_and_wait('一步步强化……意思是要花很长的时间吗……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的建议让 ',
        coffee.get_colored_name(),
        ' 感到迟疑，从',
        coffee.sex,
        '沉重的表情看来，脑海里正在进行着激烈的权衡吧。',
      ]);
      await coffee.say_and_wait(
        '……我明白了。既然不能立刻就追上的话，再加上我的体质称不上很健壮……或许这样比较适合。',
      );
      await era.printAndWait('这样就算是达成了共识。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 向',
        coffee.sex,
        '点了点头，并站到',
        coffee.sex,
        '身边，同时发誓要与',
        coffee.sex,
        '一起追逐相同目标。',
      ]);
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}A`,
        '我说，那两个人是不是怪怪的啊……？一直盯着什么都没有的远处诶。',
      );
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}B`,
        '可能他们两个……都是怪人吧。还是不要靠太近比较好……」',
      );
      await era.printAndWait([
        '偶然接触到另一个世界，并被 ',
        coffee.get_colored_name(),
        ' 拯救了的 ',
        you.get_colored_name(),
        '，此刻决定试着去了解只有',
        coffee.sex,
        '了解的世界……并且一步一步地，拿下好成绩。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_our_taste: (() => {
    const title = '只属于我们的口味';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '在和 ',
        coffee.get_colored_name(),
        ' 一起回去时——',
      ]);
      await coffee.say_and_wait(['……', callname, '。']);
      await coffee.say_and_wait('如果你愿意的话，等一下……要不要喝杯咖啡呢……');
      await coffee.say_and_wait([
        '我有些……想让 ',
        callname,
        ' 你尝尝看的豆子……',
      ]);
      era.printButton('「当然。」', 1);
      await era.input();
      await coffee.say_and_wait('……谢谢。');
      await coffee.say_and_wait('那么，请你专注地看着我……跟着我走……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 带 ',
        you.get_colored_name(),
        ' 来到',
        coffee.sex,
        '在学园里的一个私人空间。',
      ]);
      await coffee.say_and_wait('我刚才提到的豆子，就是这个……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 说道，并指着装在桌上玻璃罐里还没磨成粉的豆子。',
      ]);
      await coffee.say_and_wait(
        '这些……是从我的咖啡树采收的豆子……也是我自己烘炒的……',
      );
      era.printButton('「咖啡树……」', 1);
      await era.input();
      await coffee.say_and_wait(
        '一棵咖啡树……要长到能结出果实……最快……也需要、三年的时间。',
      );
      await coffee.say_and_wait('而且，收成的次数……一年只有一次……');
      await era.printAndWait([
        '所以，这是 ',
        coffee.get_colored_name(),
        ' 从自己栽种的咖啡树上采收，再由',
        coffee.sex,
        '亲手烘炒过的咖啡豆……',
      ]);
      await era.printAndWait('何等的珍贵……');
      era.printButton('「……这么珍贵的东西，真的要给我喝吗？」', 1);
      await era.input();
      await coffee.say_and_wait([
        '……正因为珍贵，所以才要给 ',
        callname,
        ' 品尝……',
      ]);
      await coffee.say_and_wait('那么…………你愿意，跟我一起喝吗？');
      era.printButton('「乐意至极！」', 1);
      await era.input();
      await coffee.say_and_wait('那我现在来煮……请稍等一下。');
      await era.printAndWait([
        '这个安静的空间里，只有 ',
        coffee.get_colored_name(),
        ' 冲煮咖啡的声音回响着……',
      ]);
      await coffee.say_and_wait('…………久等了。请用。');
      await era.printAndWait([
        '将',
        coffee.sex,
        '冲煮的咖啡含在口中。刹那间，咖啡的风味和温度，仿佛渗透了肉体与心灵。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 就这样面对面坐着，一起静静地享用咖啡。',
      ]);
      await era.printAndWait([
        '一杯咖啡下肚，当 ',
        you.get_colored_name(),
        ' 还沉浸在余韵中时，',
        coffee.get_colored_name(),
        ' 轻轻触碰了 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      await coffee.say_and_wait('…………味道，怎么样？');
      era.printButton('「……我第一次喝到这么好喝的咖啡。」', 1);
      era.printButton('「谢谢你让我度过一段美好的时光。」', 2);
      era.printButton('「有机会的话，我也想为你煮咖啡。」', 3);
      await era.input();
      await coffee.say_and_wait('……你说得太夸张了。');
      await coffee.say_and_wait('不过……我也有，同感。');
      await era.printAndWait([
        '受到 ',
        you.get_colored_name(),
        ' 的赞美影响，',
        coffee.get_colored_name(),
        ' 白皙的脸染上了羞红。',
      ]);
      await era.printAndWait([
        '但这并不是 ',
        you.get_colored_name(),
        ' 的阿谀奉承，这一杯咖啡投注的心血和时间抵过千言万语。也许 ',
        you.get_colored_name(),
        ' 这辈子都无法忘记在这里与',
        coffee.sex,
        '一同品尝到的味道了吧……',
      ]);
      await coffee.say_and_wait('……应该是我要道谢才对。');
      await coffee.say_and_wait('……谢谢你，愿意成为我的训练员……');
      await coffee.say_and_wait('等到明年收成的时候……我们也像今天这样……');
      await coffee.say_and_wait('一起喝咖啡，好吗？');
      era.printButton('「不管是明年还是后年，我们都要一起喝。」', 1);
      await era.input();
      await coffee.say_and_wait('——！');
      await coffee.say_and_wait('……好的。');
      await coffee.say_and_wait('明年……后年……都要一起……');
      await era.printAndWait([
        '明年和',
        coffee.sex,
        '一起喝的咖啡会是什么样的味道呢？这让 ',
        you.get_colored_name(),
        ' 对不久后与 ',
        coffee.get_colored_name(),
        ' 的将来充满了想像。',
      ]);
      await coffee.say_and_wait('……既然如此……');
      await coffee.say_and_wait('要不要一试试看……？……一起种咖啡树。');
      await coffee.say_and_wait('虽然要重新种一棵的话……至少得等三年才能收成。');
      era.printButton('「那我会为了那天好好努力的。」', 1);
      await era.input();
      await coffee.say_and_wait('……呵呵，不小心定下了一个有点遥远的约定呢。');
      await coffee.say_and_wait('不过……我也会期待的。');
      await era.printAndWait([
        '到时候与',
        coffee.sex,
        '一同完成的咖啡，一定会比现在喝到的还要美味吧。',
      ]);
      await era.printAndWait([
        '就这样，你们对那比夜晚更加香醇浓厚的未来充满了期待。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = '灵障';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([callname, '……我今天……感觉身体很沉重……']);
      await era.printAndWait([
        '正在训练的 ',
        coffee.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 身边停下了脚步，缓缓说道。',
      ]);
      await era.printAndWait([
        '「我的身体不太好」——以前',
        coffee.sex,
        '曾这么对 ',
        you.get_colored_name(),
        ' 说过，',
        you.get_colored_name(),
        ' 一开始也只是简单的当作身体原因看待。',
      ]);
      await era.printAndWait([
        '而在这之前也偶尔会发生这样的情况，',
        you.get_colored_name(),
        ' 没太在意，吩咐',
        coffee.sex,
        '去好好休息，别勉强自己后……',
      ]);
      await era.printAndWait('——沙、沙沙沙……');
      await era.printAndWait([
        '地面的沙子突然发生了异变。在 ',
        coffee.get_colored_name(),
        ' 所经之处，留下了像是拖着重物走过的痕迹。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 连忙喊住快要倒下的',
        coffee.sex,
        '，将',
        coffee.sex,
        '送去了医务室。',
      ]);
      era.drawLine();
      await coffee.say_and_wait(
        '我的体重……从来没见过这么大的数字……到底发生了什么……',
      );
      await era.printAndWait([
        '在医务室进行了简单的检查，却没有发现任何问题，直到 ',
        coffee.get_colored_name(),
        ' 尝试性地走上体重秤后，那触目惊心的数字着实把 ',
        you.get_colored_name(),
        ' 吓到了。',
      ]);
      await era.printAndWait([
        coffee.sex,
        '的体重大幅增加，远远超过了正常情况下的波动范围。',
      ]);
      await coffee.say_and_wait(
        '而且今天……觉得身体像纸一样……好像全身都干巴巴的……呃呜！？',
      );
      await era.printAndWait('——叽叽、啪嚓！');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 话音未落，伴随着微小的碎裂声，剧烈的痛苦爬上了 ',
        coffee.get_colored_name(),
        ' 略显苍白的面孔。',
      ]);
      era.printButton('「怎么了！？」', 1);
      await era.input();
      await era.printAndWait([
        '扶稳突然站不住的 ',
        coffee.get_colored_name(),
        '，却顿时感觉',
        coffee.sex,
        '的身体变轻了，但暂时管不了这点了。',
        you.get_colored_name(),
        ' 的视线向下看去，难道是',
        coffee.sex,
        '的脚出问题了！？',
      ]);
      await coffee.say_and_wait('我的……脚指甲……');
      await era.printAndWait([
        '急忙脱下',
        coffee.sex,
        '的鞋子，',
        coffee.sex,
        '干巴巴的趾甲上出现了裂痕，像是开了个小小的洞。',
      ]);
      await coffee.say_and_wait(
        '今天的体重，突然变得好重，现在又突然感觉好轻……难怪我一直感觉没有力气……脚趾甲会裂开，应该也是太干了的关系……',
      );
      era.printButton('「修剪趾甲并杀菌消毒吧。」', 1);
      await era.input();
      await coffee.say_and_wait('咦……还有……这种方法吗？');
      await era.printAndWait([
        '用专用的治疗药剂和补强剂将',
        coffee.sex,
        '的趾甲固定。虽然状况看起来还没糟到需要中止训练和比赛，但是长期这样下去的话……',
      ]);
      await coffee.say_and_wait([
        callname,
        '，你真的很厉害……我已经感觉好上一些了……',
      ]);
      await era.printAndWait([
        '话说回来，',
        coffee.sex,
        '这样激烈的体重变化，莫非是……',
      ]);
      era.printButton('「……平常的食欲怎么样？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '食欲……有时候的确会感觉特别旺盛。好像我的胃变成了无底洞一样……无论我怎么吃，吃再多都得不到饱足感……所以只能放空脑袋地一直吃……相对地，有时候也会有完全吃不下。就算我想要硬塞点东西到嘴里，手也完全不听使唤……',
      );
      await coffee.say_and_wait('但那些……并不是属于我自己的意志……');
      await era.printAndWait([
        '原来',
        coffee.sex,
        '一直都忍受着这样的异常吗？遭受着这番磨难，却仍愿意主动涉险帮助自己……',
      ]);
      era.printButton('「下次身体出现异状的时候，记得拍照给我。」', 1);
      await era.input();
      await coffee.say_and_wait('拍照，我明白了，我会记得拍照给你……可是……');
      era.drawLine();
      await era.printAndWait([
        '几天后，',
        coffee.get_colored_name(),
        ' 传来了照片。',
      ]);
      await era.printAndWait([
        '但……完全看不出',
        coffee.sex,
        '拍了什么，照片上只映照着一些奇怪的图案。',
      ]);
      await coffee.say_and_wait(
        '怎么拍都会变成那样，所以我也没办法拍受伤的部位给你看……从以前起，就是如此，大概注定无解了……我的身体恐怕……会一直这样……',
      );
      era.printButton('「你只要记得告诉我就好！」', 1);
      await era.input();
      await coffee.say_and_wait('告诉你……？每一次，都要吗？');
      era.printButton('「嗯，我来负责治疗！」', 1);
      await era.input();
      await coffee.say_and_wait([
        '谢谢你，',
        callname,
        '……有你在……感觉，稍微安心了。',
      ]);
      await era.printAndWait([
        '之后，',
        you.get_colored_name(),
        ' 活用毕生所学的知识，加上随时做好万全的准备，总算让 ',
        coffee.get_colored_name(),
        ' 可以过上普通的生活。但是……这根本超出了「身体不太好」的等级。',
      ]);
      await era.printAndWait('果然是灵异事件吗……');
      await era.printAndWait([
        '想到这里，',
        you.get_colored_name(),
        ' 不禁对未来感到一丝担忧。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '伴随着新年的到来，',
        coffee.get_colored_name(),
        ' 也晋升到了经典级。',
      ]);
      await era.printAndWait([
        '通常这种时候，一般的训练员都会和担当',
        coffee.uma_sex_title,
        '讨论彼此的远大抱负，但是……',
      ]);
      await coffee.say_and_wait(
        '现在……依我的身体状况，还没办法说出什么了不起的抱负……',
      );
      await coffee.say_and_wait('希望今年……至少可以成长得能紧跟在朋友的后面……');
      await era.printAndWait([
        coffee.sex,
        '天生体质虚弱这点依旧没能得到改善，离目标仍相当遥远。即使如此，',
        you.get_colored_name(),
        ' 还是希望让',
        coffee.sex,
        '在心情上积极乐观些。',
      ]);
      era.printButton('「要不要出门转换一下心情？」', 1);
      await era.input();
      await coffee.say_and_wait('出门……话虽如此，应该去哪呢……');
      era.printButton(`让${coffee.sex}体验如鱼得水的感受（耐力+20）`, 1);
      era.printButton(`让${coffee.sex}好好享受一杯咖啡（体力+400）`, 2);
      era.printButton('「去外面闲逛吧」（技能点数+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '如鱼得水……？虽然不太懂，但要是能把杂念像鱼吐泡泡一样吐出来的话……或许也不错吧……',
          );
          await era.printAndWait([
            '于是带着 ',
            coffee.get_colored_name(),
            '，你们来到了水族馆。',
            coffee.sex,
            '非常专注地盯着水槽里的鱼……',
          ]);
          await coffee.say_and_wait(
            '……这些鱼，面对无止尽的水压，却都只是静静地忍受呢……',
          );
          await coffee.say_and_wait('我也得像它们一样……变得更坚强才行……');
          await era.printAndWait([
            coffee.sex,
            '似乎跟鱼的感受产生共鸣，从而稍微学会了忍耐。',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            '咖啡……说得也是，咖啡的香气总是能让我忘记一切……',
          );
          await coffee.say_and_wait(
            '那我们就去那间咖啡厅吧……虽然我平时都是自己一个人去的……',
          );
          await era.printAndWait([
            '在 ',
            coffee.get_colored_name(),
            ' 的带领下，你们来到了一间小小的咖啡厅。',
            coffee.sex,
            '熟络地坐在了常坐的座位上……',
          ]);
          await coffee.say_and_wait([
            callname,
            '……你知道喝咖啡的步骤吗？在这间店里有它品尝咖啡的顺序……',
          ]);
          await coffee.say_and_wait(
            '首先，要享受空气中飘扬的香气……再点上一杯当季的咖啡……',
          );
          await era.printAndWait([
            coffee.sex,
            '一点一点地将咖啡含在口中再吞下，尽情享受了咖啡的美味。',
          ]);
          break;
        case 3:
          await coffee.say_and_wait(
            '……我不太喜欢到处闲逛……会让我有种像要被人潮吞没、消失的感觉……',
          );
          await coffee.say_and_wait([
            '不过……说得也是。如果 ',
            callname,
            '……也在的话……',
          ]);
          await era.printAndWait([
            '于是带着 ',
            coffee.get_colored_name(),
            '，你们来到了特雷森附近的街道。',
            coffee.sex,
            '好奇地四处张望路边的店铺的橱窗……',
          ]);
          await coffee.say_and_wait(
            '没想到……还挺有趣的呢……有好多没看过的家具和衣服……',
          );
          await coffee.say_and_wait('啊，是古老的赛风壶……还有古董咖啡杯……');
          await era.printAndWait([
            '平时不会逛街的 ',
            coffee.get_colored_name(),
            '，因为发现了一些没看过的东西，内心似乎也多了些启发。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '转变';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     */
    const f = async (coffee, tachyon, you, callname, call_32, hoch_sho) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 曾遭遇无数怪异现象侵扰，但经过努力不懈地照护后，总算让',
        coffee.sex,
        '的成绩达到了及格范围。',
      ]);
      await coffee.say_and_wait(
        '体重……还是会一下变重一下变轻……但成绩却逐渐稳定了。',
      );
      await coffee.say_and_wait([
        '这都要归功于 ',
        callname,
        '……虽然离目标还非常远。',
      ]);
      await coffee.say_and_wait('别说目标了……就连……');
      await era.printAndWait([
        '猜想着',
        coffee.sex,
        '原本想说的话，但 ',
        you.get_colored_name(),
        ' 实在是摸不透',
        coffee.sex,
        '的想法。',
      ]);
      era.printButton('「下一个目标想定在哪里？」', 1);
      await era.input();
      await era.printAndWait([
        '以',
        coffee.sex,
        '的状态来说，要在春季的经典级赛事里跑赢或许很困难，但也不希望',
        coffee.sex,
        '因此自我设限。',
      ]);
      await era.printAndWait([
        '要是能先询问出 ',
        coffee.get_colored_name(),
        ' 的意见，通过',
        coffee.sex,
        '的回答，应该能稍微明白',
        coffee.sex,
        '的想法才对。',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await coffee.say_and_wait([
          '……',
          call_32,
          ' 也会参加的，',
          hoch_sho,
          '。',
        ]);
        await era.printAndWait([
          hoch_sho,
          '……这是 ',
          tachyon.get_colored_name(),
          ' 通向经典三冠之路上，重要的一场比赛。',
        ]);
      } else {
        await coffee.say_and_wait(['……', hoch_sho, '。']);
      }
      era.printButton('「能问一下你的理由吗？」', 1);
      await era.input();
      await coffee.say_and_wait('其实……并不是我的意愿。但是朋友一直这么要求……');
      await coffee.say_and_wait('要我『去跑这一趟』，如果不去跑的话……');
      await era.printAndWait([
        '不去跑的话？',
        you.get_colored_name(),
        ' 挺直了背，等待着 ',
        coffee.get_colored_name(),
        ' 的下一句话。',
      ]);
      await coffee.say_and_wait(
        '会怎么样……我也不知道。朋友就只是这样告诉我……但或许会有可怕的事发生……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 叹了口气，靠回椅背上。',
      ]);
      await era.printAndWait([
        '看来',
        coffee.sex,
        '已经下定决心了——尽管这并不出于',
        coffee.sex,
        '自己的意愿，但单纯的以训练员的角度来看的话……',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        era.printButton('「去和爱丽速子一较高下吧！」', 1);
      } else {
        era.printButton('「尽管努力去跑吧！」', 1);
      }
      await era.input();
      await coffee.say_and_wait('……是！无论是谁……我都会将其超越……');
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = '迎向弥生赏';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} vs_tachyon 对手中有爱丽速子
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     */
    const f = async (coffee, you, call_32, vs_tachyon, hoch_sho) => {
      await era.printAndWait([
        '今天是 ',
        hoch_sho,
        '，但在选手通道内的 ',
        coffee.get_colored_name(),
        ' 却显得有些憔悴。',
      ]);
      era.printButton('「很紧张吗？」', 1);
      await era.input();
      await era.printAndWait([
        '听到 ',
        you.get_colored_name(),
        ' 的询问，',
        coffee.get_colored_name(),
        ' 摇了摇头。',
      ]);
      if (vs_tachyon) {
        await coffee.say_and_wait([
          '昨晚到现在……我一直，都在思考如何战胜 ',
          call_32,
          '……',
        ]);
      } else {
        await coffee.say_and_wait(
          '昨晚到现在……我一直，都在思考如何战胜其他对手……',
        );
      }
      await era.printAndWait([
        '也许 ',
        coffee.get_colored_name(),
        ' 的憔悴便是',
        coffee.sex,
        '十分看重这场比赛的表现吧。',
      ]);
      await era.printAndWait([
        '拍了拍',
        coffee.sex,
        '的肩膀，作为训练员的 ',
        you.get_colored_name(),
        ' 现在能做的只有一件事。',
      ]);
      era.printButton('「加油。」', 1);
      await era.input();
      await era.printAndWait([
        '对 ',
        you.get_colored_name(),
        ' 的话语轻轻点头，',
        coffee.get_colored_name(),
        ' 走向了赛场。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = '道标';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} vs_tachyon 对手中有爱丽速子
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} stli_kin 圣烈特纪念赛（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      vs_tachyon,
      hoch_sho,
      sats_sho,
      toky_yus,
      stli_kin,
      kiku_sho,
    ) => {
      await era.printAndWait([
        '比赛结束后，',
        you.get_colored_name(),
        ' 马上赶到了选手通道内。',
      ]);
      era.printButton('「茶座！」', 1);
      await era.input();
      await era.printAndWait([
        '听到 ',
        you.get_colored_name(),
        ' 的呼喊后，还在喘着气的 ',
        coffee.get_colored_name(),
        ' 望向了 ',
        you.get_colored_name(),
        ' 的方向，还没能从比赛的疲劳中恢复过来的',
        coffee.sex,
        '脸色比平常还要略显苍白，汗水不断从额上流下。',
      ]);
      await coffee.say_and_wait([
        '呼、呼……',
        callname,
        '、',
        you.adult_sex_title,
        '……咳咳、咳……',
      ]);
      era.printButton('「没事吧！？」', 1);
      await era.input();
      await coffee.say_and_wait('没事的……只是稍微，有点跑得过头了……');
      await era.printAndWait([
        '这次 ',
        hoch_sho,
        '，',
        coffee.get_colored_name(),
        ' 的对手每一个都实力强劲，全程都捏着一把汗的 ',
        you.get_colored_name(),
        ' 直到 ',
        coffee.get_colored_name(),
        ' 最终冲线时才松了一口气。',
      ]);
      await era.printAndWait(['但……单纯的胜利并不是你们的目标。']);
      era.printButton('「朋友怎么样？」', 1);
      await era.input();
      await coffee.say_and_wait('还是没能追上……但是，距离缩短了……！');
      await coffee.say_and_wait('只要继续这样参加比赛下去……总有一天会……');
      await era.printAndWait([
        '从 ',
        coffee.get_colored_name(),
        ' 一直以来的描述来看，朋友无疑是一个十分强的存在……追逐朋友这个目标，和让 ',
        coffee.get_colored_name(),
        ' 获得更好的成绩完美符合。',
      ]);
      await era.printAndWait([
        '从这点来看，让 ',
        coffee.get_colored_name(),
        ' 维持现状继续准备挑战经典三冠路线是最好的选择，但……',
      ]);
      if (vs_tachyon) {
        await tachyon.say_and_wait([
          '你们在这里啊，',
          callname_32,
          '，还有 ',
          t_call_c,
          '。',
        ]);
        await era.printAndWait([
          '虽然这次输给了 ',
          coffee.get_colored_name(),
          '，但是 ',
          tachyon.get_colored_name(),
          ' 此刻却比虚弱的 ',
          coffee.get_colored_name(),
          ' 显得更加游刃有余，带着标志性的笑容，',
          coffee.sex,
          '走向了你们两人。',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '，你这次——跑得很好，非常好！虽然不行，但很好！意料之外的成功和意料之内的失败是可以相抵的！',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 独自笑了一阵子后，又望向了天空，似乎低声说了些什么。',
        ]);
        await tachyon.say_and_wait(
          '速子——那是……移动得比光速还要快的假想粒子。',
        );
        await tachyon.say_and_wait(
          '但纵使是假想，我也该让大家见识一下，狂热所带来的余光。',
        );
        await tachyon.say_and_wait([
          '在 ',
          sats_sho,
          '，尽情燃烧后，一定能诞生出耀眼的残骸。',
        ]);
        await tachyon.say_and_wait([
          '那么，暂时就这样了。',
          t_call_c,
          '，期待你今后的表现。',
        ]);
        era.printButton('「…………」', 1);
        await era.input();
        await era.printAndWait([
          '和往常一样，',
          tachyon.get_colored_name(),
          ' 在突然出现后，说了些难懂的话，又自顾自地走了，留下看着',
          coffee.sex,
          '远去的身影、陷入沉默的 ',
          you.get_colored_name(),
          ' 和 ',
          coffee.get_colored_name(),
          '。',
        ]);
        await coffee.say_and_wait([callname, '……', sats_sho, '……我要参加吗？']);
        await era.printAndWait([
          '从 ',
          tachyon.get_colored_name(),
          ' 的话中想起了什么，',
          coffee.get_colored_name(),
          ' 转头向 ',
          you.get_colored_name(),
          ' 问到。',
        ]);
      }
      era.printButton('「今天的比赛，你应该很吃力吧？」', 1);
      await era.input();
      await coffee.say_and_wait('是的……有点，力不从心……');
      era.printButton('「那么，皋月赏……就暂时放弃吧。」', 1);
      await era.input();
      await era.printAndWait([
        '今天这场激烈的比赛，应该给',
        coffee.sex,
        '瘦弱的身体带来很大的负担。虽说已经看清今后该挑战的路线，但要这么快挑战G1赛事对',
        coffee.sex,
        '还是太勉强了。',
      ]);
      await coffee.say_and_wait('那么……德比……');
      await era.printAndWait([
        toky_yus,
        ' 的确是一场 ',
        you.get_colored_name(),
        ' 希望 ',
        coffee.get_colored_name(),
        ' 能拿下的比赛。但若真要以德比为下一个目标，那',
        coffee.sex,
        '是否撑得过，将会成为一场豪赌……',
      ]);
      await coffee.say_and_wait([
        '……抱歉，',
        callname,
        '……都是因为我……这么没用的关系……',
      ]);
      await coffee.say_and_wait(
        '我不想……利用你的温柔……而且……这么关键的一战……咳咳……',
      );
      await era.printAndWait([
        '轻拍 ',
        coffee.get_colored_name(),
        ' 的背部，让',
        coffee.sex,
        '稍微缓一缓。',
      ]);
      era.printButton('「挑战秋季的 圣烈特纪念赛 吧。」', 1);
      await era.input();
      await coffee.say_and_wait([
        stli_kin,
        '……',
        kiku_sho,
        ' 的前哨战吗……要隔那么久……',
      ]);
      await coffee.say_and_wait('可是……这样的话……至少德比还是……');
      era.printButton('「德比的话视情况再决定吧。」', 1);
      await era.input();
      await coffee.say_and_wait('视情况……好的，那就如果情况允许的话，再……');
      await era.printAndWait([
        '就这样，下一个目标定在了 ',
        stli_kin,
        '，',
        toky_yus,
        ' 则视情况允许再参加。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = '放弃与否';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        '对于 ',
        coffee.get_colored_name(),
        ' 来说，',
        toky_yus,
        ' 并不是实现',
        coffee.sex,
        '目标的必选项。',
      ]);
      await era.printAndWait([
        '——话虽如此，一生一次的德比，对',
        coffee.sex,
        '来说依旧是充满诱惑的。',
      ]);
      await era.printAndWait([
        '为了测试 ',
        coffee.get_colored_name(),
        ' 到底能否参加 ',
        toky_yus,
        '，你们来到了训练场上。',
      ]);
      await coffee.say_and_wait(['呼、呼……', callname, '，这个单圈时间的话……']);
      await coffee.say_and_wait(
        '德比……是不是就有胜算了？要是能赢的话……一定就能离朋友更近……',
      );
      era.printButton('「身体状况如何？」', 1);
      await era.input();
      await coffee.say_and_wait('……说不上很好……但我这样也不是一天两天的了……');
      await era.printAndWait([
        '该不该让 ',
        coffee.get_colored_name(),
        ' 参加德比……坦白说很难下定论。',
      ]);
      await era.printAndWait([
        '身为训练员的 ',
        you.get_colored_name(),
        '，必须要及时做出选择。',
      ]);
      era.printButton('「……为了身体着想，放弃吧。」', 1);
      era.printButton('「……机会只有一次。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await coffee.say_and_wait('要……放弃吗……我明白了……');
        await era.printAndWait([
          '不能参加一生一次的德比固然令人遗憾……希望这样的选择能在秋天给 ',
          coffee.get_colored_name(),
          ' 带来顺风的局势吧。',
        ]);
      } else {
        await coffee.say_and_wait(
          '我明白了……！我会加油的！一定，要把德比拿下……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 充满了斗志……但希望这样的选择不会给秋天的比赛留下隐患。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '迎向日本德比';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        toky_yus,
        '——为了这场一生一次的比赛，',
        coffee.get_colored_name(),
        ' 进行了许多严苛的训练。',
      ]);
      await era.printAndWait('而如今便到了收获的时刻。');
      await coffee.say_and_wait([callname, '……我上了。']);
      await era.printAndWait([
        '选手通道内，',
        you.get_colored_name(),
        ' 看着 ',
        coffee.get_colored_name(),
        ' 转头走向赛场的背影一言不发。',
      ]);
      await era.printAndWait(
        '没有什么想说的，也没有什么要说的，多余的话语早在训练的日日夜夜中倾诉殆尽。',
      );
      await era.printAndWait([
        '从现在开始就是',
        coffee.sex,
        '独自一人与其他参赛',
        coffee.uma_sex_title,
        '——以及朋友的对决。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '屹立';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (coffee, you, toky_yus) => {
      await you.say_as_passer_by_and_wait('解说员', [
        coffee.get_colored_name(),
        ' 称霸德比──！！不灭的摩天大楼，在此屹立！',
      ]);
      await you.say_as_passer_by_and_wait('解说员', [
        '然而',
        coffee.sex,
        '不要紧吗？看起来耗尽了体力，连脚步都无法走稳……但',
        coffee.sex,
        '仍然为对',
        coffee.sex,
        '怀抱梦想的人们实现了宿愿——！！',
      ]);
      await era.printAndWait([
        '选手通道内，',
        coffee.get_colored_name(),
        ' 踉踉跄跄地走向 ',
        you.get_colored_name(),
        '。',
      ]);
      await coffee.say_and_wait(['训练员……', you.adult_sex_title, '……']);
      era.printButton('「你做得很好，茶座……」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 倒在了 ',
        you.get_colored_name(),
        ' 的怀中，精疲力尽的模样让 ',
        you.get_colored_name(),
        ' 感到无比心疼，但',
        coffee.sex,
        '还是成功拿下了胜利。',
      ]);
      await coffee.say_and_wait('呼、哈……');
      era.printButton('「接下来就好好休息吧。」', 1);
      era.printButton('「训练强度也要适当降低。」', 2);
      await era.input();
      await coffee.say_and_wait('好的……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 取得了 ',
        toky_yus,
        ' 的优胜，长久以来的努力总算是得到了最好的结果。同时，在 ',
        you.get_colored_name(),
        ' 竭尽全力地照护下，',
        coffee.sex,
        '的身体恢复情况喜人，应该也有望在秋季取得好成绩……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（经典年）开始';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (coffee, tachyon, you, callname, callname_32, t_call_c) => {
      await era.printAndWait([
        '作为特雷森的惯例，',
        you.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 来到了夏季合宿。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 原本就不太好的身体在之前的训练和比赛中留下了许多疲劳，得想办法在这段期间内让',
        coffee.sex,
        '恢复才行。',
      ]);
      await era.printAndWait([
        '然而有别于 ',
        you.get_colored_name(),
        ' 的决心的是，该说',
        coffee.couple_title,
        '还只是一群学生吗，来到合宿地点的赛',
        coffee.uma_sex_title,
        '们都相当兴奋。',
      ]);
      await coffee.say_and_wait('呵呵呵……好期待，合宿……要去哪里好呢？');
      await coffee.say_and_wait(
        '咦？无人的断崖吗？我想想，深山里被人遗忘的洞窟或许也不错啊，呵呵呵呵……',
      );
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}A`,
        '你、你在跟谁说话啊？茶座～！？让人感觉心里毛毛的诶！',
      );
      await you.say_as_passer_by_and_wait(`赛${coffee.uma_sex_title}B`, [
        '哈哈哈……不知道为什么，但总觉得有',
        coffee.sex,
        '在就很灵异呢……',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await tachyon.say_and_wait([
          '嗯～比起灵异应该说是神秘才对。对吧？',
          callname_32,
          '。',
        ]);
        await era.printAndWait([
          '看着不远处对着空气喃喃自语的 ',
          coffee.get_colored_name(),
          '，站在 ',
          you.get_colored_name(),
          ' 身边的 ',
          tachyon.get_colored_name(),
          ' 擅自打开了话题。',
        ]);
        await tachyon.say_and_wait([
          '虽然我不太清楚你究竟和 ',
          t_call_c,
          ' 经历过些什么，但比起那些看得见的怪物，果然还是这些看不见的东西更难对付吧。所以我希望你最好能与它们保持距离。',
        ]);
        await tachyon.say_and_wait([
          '对于 ',
          t_call_c,
          '，我不在乎',
          coffee.sex,
          '那个朋友到底是什么、是不是真的存在，我更在意的',
          coffee.sex,
          '打算做什么。',
        ]);
      } else {
        await era.printAndWait([
          '看着不远处对着空气喃喃自语的 ',
          coffee.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 想到了一件事。',
        ]);
      }
      await era.printAndWait([
        '——朋友，这个帮助过 ',
        you.get_colored_name(),
        ' 数次，但 ',
        you.get_colored_name(),
        ' 却几乎一无所知的存在。',
      ]);
      await era.printAndWait([
        '作为 ',
        coffee.get_colored_name(),
        ' 目标的核心，朋友会是什么样的呢？',
      ]);
      await era.printAndWait(
        '虽然平时没有多余的时间跟精力可以深入了解，但如果是趁夏季合宿这一个机会的话……',
      );
      await coffee.say_and_wait(['…………？', callname, '，怎么了吗？']);
      era.printButton('「这个夏天……我们好好聊一聊吧。」', 1);
      await era.input();
      await coffee.say_and_wait('……我很乐意。');
      await era.printAndWait([
        '去深入了解朋友，肯定也是加深对 ',
        coffee.get_colored_name(),
        ' 了解的方法——',
        you.get_colored_name(),
        ' 如此想到。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'Plan B';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (coffee, tachyon, you, call_32, t_call_c) => {
      await era.printAndWait([
        '夏季合宿刚开始的一天，',
        you.get_colored_name(),
        ' 把 ',
        coffee.get_colored_name(),
        ' 叫到了合宿地的一个房间内。',
      ]);
      era.printButton('「有一件与你有关的事……先来看电视吧。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 茫然地点了点头，在 ',
        you.get_colored_name(),
        ' 的指示下打开了电视。',
      ]);
      await coffee.say_and_wait(['…………！？', call_32, '？']);
      await era.printAndWait([
        '电视上正在播出的，是 ',
        tachyon.get_colored_name(),
        ' 的新闻发表会。',
      ]);
      await tachyon.print_and_wait(
        '……正如我刚才所言，从今天起，我爱丽速子——将无限期停赛！',
      );
      await you.say_as_passer_by_and_wait('记者们', '————什么！？');
      await era.printAndWait([
        '作为经典三冠路线中最受瞩目的赛',
        coffee.uma_sex_title,
        '之一，突如其来的宣布……让现场一片哗然。',
      ]);
      await you.say_as_passer_by_and_wait('记者A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '……你明明在赛事上展露出了极大潜能，为何会做出这样的决定呢！？',
      ]);
      await tachyon.print_and_wait(
        '极大的潜能吗……那甚至都还不是我真正的实力呢。',
      );
      await you.say_as_passer_by_and_wait(
        '记者B',
        '许多人都认定你会稳稳拿下更多的胜利，究竟是为什么！？',
      );
      await tachyon.print_and_wait(
        '嘛，理由的话，只能说一言难尽。真相总是充满各种因素的，不是吗？',
      );
      await you.say_as_passer_by_and_wait(
        '记者C',
        '实质上的引退宣言……可以这么理解吗？',
      );
      await tachyon.print_and_wait(
        '这样问也没有意义，毕竟谁都无法确定未来会发生什么。',
      );
      await tachyon.print_and_wait('那么，我要宣布的事情就是这些。');
      await era.printAndWait([
        '随后，',
        tachyon.get_colored_name(),
        ' 便离开了现场，',
        you.get_colored_name(),
        ' 也把电视关上，看向还处在信息过载的 ',
        coffee.get_colored_name(),
        '。',
      ]);
      era.printButton('「简单来说……速子打算放弃比赛了。」', 1);
      await era.input();
      await coffee.say_and_wait('这究竟……到底是为什么……');
      era.printButton(
        `「这是……我和速子的决定，从今以后${tachyon.sex}将——」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('关于这点还是由我亲自来解释吧。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 推开了房间的门，迎上了 ',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 的视线。',
      ]);
      await tachyon.say_and_wait([
        '简单来说，便是我从 ',
        t_call_c,
        '——你的身上发现了新的可能性。',
      ]);
      await coffee.say_and_wait('新的……可能性？');
      await tachyon.say_and_wait([
        '没错，我的目标——抵达乃至于超越赛',
        coffee.uma_sex_title,
        '的极限……但说到底真的需要我本人亲自去实现吗？道路并非只有一条，即便需要验证的真理只有一个，但却存在数条通往终点的道路。',
      ]);
      await coffee.say_and_wait('这是……什么意思？');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 叹了口气，又浮夸地摆了摆手。',
      ]);
      await tachyon.say_and_wait([
        '我都说这么明白了还不懂吗……就是『顾问』啊，『顾问』！',
        t_call_c,
        '，我要成为你的顾问！',
      ]);
      await coffee.say_and_wait('诶……顾问！？');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 茫然下意识看向 ',
        you.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 点了点头。',
      ]);
      era.printButton('「没错，从今以后速子将担任你的顾问，但同时……」', 1);
      era.printButton(
        `「你也要承担帮助速子完成${coffee.sex}的目标的责任……」`,
        2,
      );
      era.printButton('「现在要征求的，就是茶座你的意见。」', 3);
      await era.input();
      await era.printAndWait([
        '说完，',
        you.get_colored_name(),
        ' 打算留点时间让 ',
        coffee.get_colored_name(),
        ' 思考，但 ',
        tachyon.get_colored_name(),
        ' 并不这么想。',
      ]);
      await tachyon.say_and_wait('在我的帮助下，你就能更快追上你的朋友了哦？');
      await era.printAndWait([
        '追上朋友——这是 ',
        coffee.get_colored_name(),
        ' 最大的愿望，',
        tachyon.get_colored_name(),
        ' 的实力与科学能力是即使对',
        coffee.sex,
        '颇具怨言的 ',
        coffee.get_colored_name(),
        ' 也认可的。',
      ]);
      await era.printAndWait('如果说能更快地追上朋友的话……');
      await coffee.say_and_wait('我还是没办法理解你……但，既然能帮到我的话……');
      await tachyon.say_and_wait(
        '呵呵呵呵……很好，这就对了。那就这么决定了，Plan B，就此开始！',
      );
      await era.printAndWait([
        '获得了 ',
        tachyon.get_colored_name(),
        ' 的助阵后，',
        coffee.get_colored_name(),
        ' 的经典赛事挑战之路会朝着怎样的方向前进呢……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_31: (() => {
    const title = '朋友';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([callname, '……是关于朋友的事……对吗？']);
      era.printButton('「嗯，我想要详细地了解。」', 1);
      await era.input();
      await era.printAndWait([
        '夏季合宿的某个晚上，',
        you.get_colored_name(),
        ' 向 ',
        coffee.get_colored_name(),
        ' 询问了关于在',
        coffee.sex,
        '心中特殊的存在——朋友的事情。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 记得之前曾在偶然的情况下听',
        coffee.sex,
        '说过，朋友似乎是从',
        coffee.sex,
        '小时候开始就伴',
        coffee.sex,
        '左右，一直跑在',
        coffee.sex,
        '的前方引导着',
        coffee.sex,
        '的存在。',
      ]);
      await era.printAndWait('但所谓的引导，到底指的是什么呢？');
      await coffee.say_and_wait('你想要……知道什么呢？');
      era.printButton('「你说朋友会引导你，是什么意思呢？」', 1);
      await era.input();
      await coffee.say_and_wait('引导就是……一直『跑在我前面』的意思。');
      await coffee.say_and_wait('不，这么说不太对，并非只有这样而已……');
      await coffee.say_and_wait('『朋友』会将我……带去幸福的地方……');
      await coffee.say_as_unknown_and_wait('呵呵呵、呵呵呵呵呵……♪');
      await era.printAndWait('四周传来了似有若无的嬉笑声。');
      await coffee.say_and_wait('像是偷偷带我去一些没有人知道的、安静的场所……');
      await coffee.say_as_unknown_and_wait('呵呵呵、呵呵呵呵呵……♪');
      await era.printAndWait([
        '仿佛就是从 ',
        you.get_colored_name(),
        ' 耳边发出般，戏弄着 ',
        you.get_colored_name(),
        ' 的感官。',
      ]);
      await coffee.say_and_wait(
        '去游乐园的时候……朋友就坐在摩天轮的最上面。当时我为了追上朋友而坐进了摩天轮的车厢……就看见了一片很美的景色……',
      );
      await coffee.say_and_wait('只要追着朋友，总是会发生快乐的事……');
      await coffee.say_and_wait('若我希望，朋友也总是会告诉我该往哪里去……');
      await coffee.say_and_wait(
        '其他人……从来……没给过我什么……但只有朋友不一样。',
      );
      await coffee.say_and_wait('是唯一……会带给我快乐时光……独一无二的存在……');
      era.printButton('「……就算现在也是如此吗？」', 1);
      await era.input();
      await coffee.say_and_wait(['……', callname, '，感觉也跟朋友有点相似。']);
      await coffee.say_and_wait([
        '但我们之所以能相遇，也是因为朋友把我引导到遇到危险的 ',
        callname,
        ' 面前的关系……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 有点明白了，对于 ',
        coffee.get_colored_name(),
        ' 来说，朋友不仅仅是比赛时跑在前方的存在……',
      ]);
      await era.printAndWait([
        '对 ',
        coffee.get_colored_name(),
        ' 来说，或许更像是将',
        coffee.sex,
        '带往幸福的领航员。',
      ]);
      await coffee.say_and_wait(
        '现在也是，只要我希望，朋友就会带我到任何地方。譬如说……',
      );
      await coffee.say_and_wait([
        callname,
        '，你可以帮我想一个『现在这种地方绝对不可能有的东西』吗？',
      ]);
      await era.printAndWait([
        '这里不可能有的东西……在 ',
        you.get_colored_name(),
        ' 脑海里，浮现的是——',
      ]);
      era.printButton('「……薰衣草。」（力量+20）', 1);
      era.printButton('「……球藻。」（根性+20）', 2);
      era.printButton('「四条腿的……马。」', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '薰衣草……是吗。唇形科薰衣草属……是不会生长在这里的花……',
          );
          await coffee.say_and_wait('但是，只要我由衷地希望……');
          await era.printAndWait('——碰！');
          await era.printAndWait([
            you.get_colored_name(),
            ' 的背……突然被某种强大的力量推了一下。',
          ]);
          await era.printAndWait([
            '是朋友吗！？在 ',
            you.get_colored_name(),
            ' 出现这样的念头时，身体已经像是被人催促似地朝被推的方向前进了。',
          ]);
          await era.printAndWait('而最后抵达的是……');
          await coffee.say_and_wait('这是……岩石呢。一起把它给移开吧。');
          await coffee.say_and_wait('一～二……嘿咻……');
          await era.printAndWait([
            coffee.get_colored_name(),
            ' 以',
            coffee.sex,
            '那纤细的手臂使劲将岩石移开，而岩石底下的是……一大堆海草一样的东西。',
          ]);
          await coffee.say_and_wait(
            '每一根的前端都有像花苞的东西……是用这个，来代替薰衣草的意思吗……',
          );
          break;
        case 2:
          await coffee.say_and_wait(
            '球藻……是吗。生长在北海道阿寒湖等处的，球状藻类……',
          );
          await coffee.say_and_wait(
            '虽然这附近应该不可能找得到，但是，只要我由衷地希望……',
          );
          await era.printAndWait('——碰！');
          await era.printAndWait([
            you.get_colored_name(),
            ' 的背……突然被某种强大的力量推了一下。',
          ]);
          await era.printAndWait([
            '是朋友吗！？在 ',
            you.get_colored_name(),
            ' 出现这样的念头时，身体已经像是被人催促似地朝被推的方向前进了。',
          ]);
          await era.printAndWait('而最后抵达的是……');
          await coffee.say_and_wait('哈啊、哈啊，我们……走了很远呢。');
          await coffee.say_and_wait([
            '啊，',
            callname,
            '……那个被浪打到沙滩上的东西是……',
          ]);
          await coffee.say_and_wait('藻类的块状物，吗。');
          await era.printAndWait(
            '那里的，是吸收了大量海里的污水后，打结成一块的植物残骸……',
          );
          await coffee.say_and_wait(
            '虽然外观不是很讨喜……但这是用来……代替球藻的意思吗？',
          );
          break;
        case 3:
          await coffee.say_and_wait([
            '马……是指',
            coffee.uma_sex_title,
            '吗？……但四条腿是指……',
          ]);
      }
      if (ret < 3) {
        await era.printAndWait(
          '或许这就是朋友能做到的极限了吧，看来也并非是万能的。',
        );
        await era.printAndWait('也许是类似于会尽力帮忙的守护灵吧。');
        await coffee.say_and_wait('朋友总是会像这样，引导我笔直地走向幸福。');
        await coffee.say_and_wait(
          '一直在我身边，帮助着我……是非常重要的……『朋友』……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 能有今天，或许都是这位守护灵的功劳也不一定。',
        ]);
        await coffee.say_and_wait([
          '……啊，',
          callname,
          ' 你看。海上有一座小岛……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 望向远处的海上……的确有一座小岛。但既没有通往岛上的桥和船，也不是游泳能到达的距离。',
        ]);
        await coffee.say_and_wait(
          '我有点想要去看看呢……想必…会是个安静又美丽的地方吧。',
        );
        await era.printAndWait('但要是真想去到那座岛上的话……');
        await era.printAndWait('——碰、碰、碰！');
        await era.printAndWait([
          '没来由地，',
          you.get_colored_name(),
          ' 的背上被连续戳了几下……！像是在告诉说「不要犹豫，去吧」。',
        ]);
        await coffee.say_and_wait(
          '啊，『朋友』……在跟我招手……在海的另一边招手说『来这里』……',
        );
        await era.printAndWait([
          '朋友，对 ',
          coffee.get_colored_name(),
          ' 来说像是守护灵般的存在。',
        ]);
        await era.printAndWait([
          '但却让人搞不清楚究竟有没有心要守护',
          coffee.sex,
          '。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿（经典年）结束';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      m_horse,
      t_plan_b,
    ) => {
      await era.printAndWait('夏季合宿的全部日程结束了。');
      await coffee.say_and_wait([
        callname,
        '……多亏了你，我的身体才能恢复得这么好……',
      ]);
      if (t_plan_b) {
        await era.printAndWait([
          '一整个夏天的拼命护理得到了成功，',
          coffee.get_colored_name(),
          ' 的身体状况得到了显著改善。',
        ]);
        await tachyon.say_and_wait([
          '呀，',
          callname_32,
          '。这个夏天和 ',
          t_call_c,
          ' 的进展如何？',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 的顾问，',
          tachyon.get_colored_name(),
          ' 也凑了过来。',
        ]);
        era.printButton('「……也算是了解到了一些。」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' 与 ',
          tachyon.get_colored_name(),
          ' 共享了在合宿中了解到的情报，以及有关朋友的事。',
        ]);
        await tachyon.say_and_wait([
          '原来如此。虽说做了些意义不明的事情，但总体上还是挺有趣……不，对 ',
          t_call_c,
          ' 有利的嘛。',
        ]);
        await tachyon.say_and_wait(
          '也就是说——不不不，等一下，外压性，或者是自伤冲动。从各种各样的方向考虑的话……',
        );
        await era.printAndWait([
          '在那之后，',
          tachyon.get_colored_name(),
          ' 就沉浸在了思考的海洋中。',
        ]);
      }
      await era.printAndWait([
        '夏天已经过去，而在即将到来的秋天，想必 ',
        coffee.get_colored_name(),
        ' 也一定能开花结果。',
      ]);
      if (m_horse) {
        await era.printAndWait([
          '……只是，那个漆黑的奇异兽类，却始终在 ',
          you.get_colored_name(),
          ' 脑海中挥之不去。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_stli_kin: (() => {
    const title = '迎向圣烈特纪念赛';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (coffee, tachyon, you, t_call_c, t_plan_b, kiku_sho) => {
      era.printButton('「茶座，感觉身体如何？」', 1);
      await era.input();
      await coffee.say_and_wait('感觉……身体的深处和之前不一样……');
      await coffee.say_and_wait(
        '没有奇妙的蠢蠢欲动……像是身体、确实属于我自己一样……',
      );
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '在我的营养指导下这是自然的，而且……跟春天的时候比起来体重增加了不少哦，',
          t_call_c,
          '……',
        ]);
        await tachyon.say_and_wait(
          '但这个状况……呵呵呵，和怪异无关呢。若单纯只是物理上累积所致……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 仔细地观察着 ',
          coffee.get_colored_name(),
          ' 身体的上上下下，想上手摸摸时被 ',
          coffee.get_colored_name(),
          ' 灵巧地躲开了。',
        ]);
        await era.printAndWait('看来终于算是克服了那段最莫名其妙的时期……');
        await coffee.say_and_wait([
          '如果照这个感觉跟状态去跑……如果可以稳稳拿下这场比赛的话……是不是 ',
          kiku_sho,
          ' 就会有胜算呢……？',
        ]);
        await tachyon.say_and_wait([
          '呵呵，在实验开始前就讨论实验结果可是很没意义的啊，',
          t_call_c,
          '。',
        ]);
        await tachyon.say_and_wait([
          '直接在赛场上见真章吧，看看 ',
          coffee.get_colored_name(),
          '——你这张试纸究竟会出现什么样的颜色。',
        ]);
        await era.printAndWait(
          '希望那会是一个明亮的颜色……无论如何，今天都要必须要取得胜利。',
        );
      } else {
        await era.printAndWait('看来终于算是克服了那段最莫名其妙的时期……');
        await coffee.say_and_wait([
          '如果照这个感觉跟状态去跑……如果可以稳稳拿下这场比赛的话……是不是 ',
          kiku_sho,
          ' 就会有胜算呢……？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 没能做出回答。毕竟 ',
          coffee.get_colored_name(),
          ' 的身体状况还有太多未知的因素。',
        ]);
        era.printButton('「总之，先夺得这场比赛的胜利吧。」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 点点头，然后转身向赛场走去。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = '过渡';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (coffee, you, callname, kiku_sho) => {
      era.printButton('「辛苦了，茶座！」', 1);
      await era.input();
      await era.printAndWait([
        '和往常一样，',
        you.get_colored_name(),
        ' 早早地来到了选手通道内来等候 ',
        coffee.get_colored_name(),
        '。',
      ]);
      await coffee.say_and_wait(['哈、呼、哈……', callname, '。我成功了……']);
      await coffee.say_and_wait('虽然过程并不轻松……但我的脚……还留有余力。');
      await era.printAndWait([
        '跑出优秀表现后的',
        coffee.sex,
        '仍带有一丝虚弱。但身体方面，在经过夏天的锻炼后，似乎变得比之前健壮得多。',
      ]);
      await era.printAndWait([
        '但绝不能就此而放松，因为一个月后，便是至关重要的——',
        kiku_sho,
        '。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '迎向菊花赏';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_plan_b,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await coffee.say_and_wait('…………');
      if (t_plan_b) {
        await tachyon.say_and_wait('…………');
      }
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        '选手通道内，在场的人都一言不发。因为彼此都清楚今天的比赛有多么重要。',
      );
      await era.printAndWait([
        '——',
        kiku_sho,
        '，一生一次的比赛，不同于之前任何比赛的3000米长距离赛道。',
      ]);
      await era.printAndWait([
        '最快的赛',
        coffee.uma_sex_title,
        '赢得 ',
        sats_sho,
        '，最幸运的赛',
        coffee.uma_sex_title,
        '赢得 ',
        toky_yus,
        '，而最强的赛',
        coffee.uma_sex_title,
        '将赢得 ',
        kiku_sho,
        '。',
      ]);
      await era.printAndWait([
        '今天，',
        coffee.get_colored_name(),
        ' 真正的实力即将面临考验。',
      ]);
      await coffee.say_and_wait([callname, '，这还是第一次。']);
      await era.printAndWait([
        '久久的沉默之后，',
        coffee.get_colored_name(),
        ' 说道。',
      ]);
      await coffee.say_and_wait('第一次在比赛前……有种或许能追上朋友的预感……');
      era.printButton('「去超越吧！」', 1);
      await era.input();
      await coffee.say_and_wait('……是！');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 难得露出了开朗的笑容。这场比赛无论结果如何都将成为 ',
        coffee.get_colored_name(),
        ' 赛场人生的转折……现在能做的，也就只有在一旁为',
        coffee.sex,
        '祈祷了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '收获';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      kiku_sho,
      japa_cup,
      arim_kin,
    ) => {
      await you.say_as_passer_by_and_wait('解说员', [
        coffee.get_colored_name(),
        '！',
        coffee.sex,
        '势如破竹地超越众人，率先冲过了终点！',
      ]);
      await you.say_as_passer_by_and_wait(
        '观众们',
        '喔哦哦哦哦哦哦哦！！！！！」',
      );
      await you.say_as_passer_by_and_wait('解说员', [
        coffee.sex,
        '那飞快的步伐……不，是惊异的步伐！令现场所有人都看得目瞪口呆……！',
      ]);
      await era.printAndWait([
        kiku_sho,
        ' 上，',
        coffee.get_colored_name(),
        ' 用前所未有的稳健步伐，抵达了终点。',
      ]);
      await era.printAndWait(
        '春天、夏天……这段时间日积月累的努力，终于在此刻开花结果了。',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 露出了难得的兴奋表情，穿过选手通道，来到 ',
        you.get_colored_name(),
        ' 身边。',
      ]);
      await coffee.say_and_wait(
        '训练员……！朋友……！刚才……就在我的眼前……！我从来没在比赛中距离那么近过……！',
      );
      era.printButton('「恭喜，那有看清楚脸吗？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '还没有……但今天跑完了全程，却一点都不觉得辛苦……',
      );
      await coffee.say_and_wait('这就是我……这就是现在的我吗……');
      await era.printAndWait([
        coffee.sex,
        '的语气里充满了难以置信。而 ',
        you.get_colored_name(),
        ' 也能从',
        coffee.sex,
        '的话中看出，一直以来对 ',
        coffee.get_colored_name(),
        ' 的身体造成不良影响的怪异，应该是消失了。',
      ]);
      await coffee.say_and_wait([callname, '……接下来的目标是？']);
      await era.printAndWait(
        '从兴奋中平复了过来，也是时候决定接下来的目标了。',
      );
      era.printButton('「……有马纪念吧。」', 1);
      await era.input();
      await coffee.say_and_wait([
        arim_kin,
        '……那 ',
        japa_cup,
        '，要放弃掉吗？',
      ]);
      await era.printAndWait([
        '选择 ',
        arim_kin,
        '，主要的原因是想让 ',
        coffee.get_colored_name(),
        ' 好好休息。',
      ]);
      await era.printAndWait([
        '尽管',
        coffee.sex,
        '现在的身体状况已经有了明显的改善，但高强度的比赛还是存在很大隐患。',
      ]);
      await era.printAndWait([
        '除此之外，看过今天的比赛后，',
        you.get_colored_name(),
        ' 可以看出 ',
        coffee.get_colored_name(),
        ' 应该更适合长距离的赛事。虽然 ',
        japa_cup,
        ' 和 ',
        arim_kin,
        ' 只相差了100米……但有时却正是这看似很多的100米决定了胜负。',
      ]);
      await era.printAndWait([
        '在向 ',
        coffee.get_colored_name(),
        ' 作出解释后，',
        coffee.sex,
        '没有反驳，而是向前一步，握住了 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      await coffee.say_and_wait([
        '我……相信 ',
        callname,
        '。因为有 ',
        callname,
        ' 在……我才能有现在的成绩，能这么靠近朋友……',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '呵呵呵、哈哈哈！很好很好，太好了。',
          t_call_c,
          '，你跑得太棒了！',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 此时才慢悠悠地从观众席赶到。',
        ]);
        await tachyon.say_and_wait([
          '完全和我预想的一样！不愧是我选中的Plan B！没有错吧，',
          t_call_c,
          '！？',
        ]);
        await coffee.say_and_wait([
          call_32,
          '……我还是不能完全信任你……但还是感谢你对我的帮助。',
        ]);
        await era.printAndWait([
          '说完，',
          coffee.get_colored_name(),
          ' 拉着 ',
          you.get_colored_name(),
          ' 的手扭头打算离开。在离开之际 ',
          you.get_colored_name(),
          ' 回头看了 ',
          you.get_colored_name(),
          ' 的另一个担当',
          coffee.uma_sex_title,
          '——',
          tachyon.get_colored_name(),
          '，',
          coffee.sex,
          '仍像往常一样，脸上挂着富有余裕的笑容。',
        ]);
        await era.printAndWait([
          '只是，在 ',
          you.get_colored_name(),
          ' 和 ',
          coffee.get_colored_name(),
          ' 都没有注意到的地方，',
          tachyon.get_colored_name(),
          ' 露出了转瞬即逝的失落。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '迎向有马纪念';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      await era.printAndWait([arim_kin, '。']);
      await era.printAndWait([
        '这是 ',
        coffee.get_colored_name(),
        ' 今年的最后一场比赛，同时也宣告了',
        coffee.sex,
        '经典级的结束。',
      ]);
      await era.printAndWait([
        '选手通道内，',
        you.get_colored_name(),
        ' 扶着 ',
        coffee.get_colored_name(),
        ' 的双肩，正在对',
        coffee.sex,
        '做着最后的嘱咐。',
      ]);
      era.printButton('「一定要集中精神……让肾上腺素尽情分泌……」', 1);
      await era.input();
      await coffee.say_and_wait('……嗯。');
      await era.printAndWait([
        '闭着眼睛，',
        coffee.get_colored_name(),
        ' 小声地回复道。',
      ]);
      await era.printAndWait('待其重新睁开双眼后，已是无比的坚定。');
      await coffee.say_and_wait([callname, '，我会赢的。']);
      await era.printAndWait([coffee.sex, '的背影逐渐没入光芒。']);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '妖异';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (coffee, you, callname, kiku_sho, arim_kin, tenn_spr) => {
      await you.say_as_passer_by_and_wait('解说员', [
        '夺下今年 ',
        arim_kin,
        ' 的是——',
        coffee.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait('观众们', '喔哦哦哦哦哦！！！！！」');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 即使面对资深级的对手，依旧展现出高水准的表现，拿下了 ',
        arim_kin,
        '。然而……',
      ]);
      await coffee.say_and_wait('怎么会……距离，被拉开了……');
      await coffee.say_and_wait([
        '比 ',
        kiku_sho,
        ' 的时候……距离更远……怎么会……',
      ]);
      await era.printAndWait([
        '选手通道内，明明胜利了的 ',
        coffee.get_colored_name(),
        ' 却失落的靠在墙边——不，不能说是胜利了，因为',
        coffee.sex,
        '再一次的输给了',
        coffee.sex,
        '的朋友。',
      ]);
      era.printButton('「茶座……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 想安慰',
        coffee.sex,
        '，却又不知该从何下手。',
      ]);
      await coffee.say_and_wait([
        callname,
        '……朋友变得……更快了。比之前，还要快上许多……',
      ]);
      await coffee.say_and_wait(
        '就像是……为了回应我变得更快，所以才认真了起来一样……',
      );
      await coffee.say_and_wait('怎么会……怎么会……');
      await coffee.say_and_wait('怎么会、怎么会、怎么……！！');
      await era.printAndWait('——啪嚓！');
      await coffee.say_and_wait('唔……！');
      await era.printAndWait([
        '难道说又！？',
        you.get_colored_name(),
        ' 立刻上前扶住了 ',
        coffee.get_colored_name(),
        '，痛苦与泪水在同一时刻涌上了',
        coffee.sex,
        '的面孔，就像是易碎的玻璃一样，令人心疼。',
      ]);
      await era.printAndWait([
        '脱下',
        coffee.sex,
        '的鞋袜，熟悉的趾甲开裂情况再次出现了。虽然',
        coffee.sex,
        '的体重确实不再急遽增减，没想到却还是……',
      ]);
      await era.printAndWait([
        '笼罩 ',
        coffee.get_colored_name(),
        ' 的阴影尚未消失。这到底是诅咒……亦或是某种存在……',
      ]);
      await coffee.say_and_wait('我一定，会拼命追上朋友！');
      await coffee.say_and_wait(
        '明年我一定会……我已经不再是过去那个软弱的自己了……',
      );
      await coffee.say_and_wait(['……', callname, '，下一个目标是……？']);
      await era.printAndWait(['还是先让', coffee.sex, '冷静——唔！']);
      await era.printAndWait([
        '没能把话说出口，',
        you.get_colored_name(),
        ' 突然感到一股……上腹部被人重殴般的冲击感。像是某种……非常强烈的意志……',
      ]);
      era.printButton('「…………春季天皇赏。」', 1);
      await era.input();
      await coffee.say_and_wait([tenn_spr, '……吗。3200米的长距离比赛……']);
      await coffee.say_and_wait('意思是……距离这么长的话就能追上朋友，吗？');
      era.printButton('「…………嗯。」', 1);
      await era.input();
      await era.printAndWait([
        '方针上没有问题。既然要决定下一个目标，就该瞄准春季的大型G1。而 ',
        tenn_spr,
        ' 便是春季的首要赛事，同时也符合 ',
        coffee.get_colored_name(),
        ' 的长距离适性。',
      ]);
      await era.printAndWait([
        '……但刚才那些话，真的是出自 ',
        you.get_colored_name(),
        ' 自己的意志吗？',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_plan_b,
      kiku_sho,
      arim_kin,
      tenn_spr,
    ) => {
      await era.printAndWait('资深级，年初。');
      await era.printAndWait([
        '为了祈求 ',
        coffee.get_colored_name(),
        ' 今年能够得到成功，你们来到神社进行新年参拜。',
      ]);
      if (t_plan_b) {
        await coffee.say_and_wait([
          '那个……',
          call_32,
          ' 最近怎么样……？',
          coffee.sex,
          '之前说要恢复比赛了……',
        ]);
        await era.printAndWait([
          '从 ',
          kiku_sho,
          ' 之后，',
          tachyon.get_colored_name(),
          ' 就恢复了训练。在 ',
          arim_kin,
          ' 结束后，',
          coffee.sex,
          '更是公开宣布了自己将要回归比赛的计划，而',
          coffee.sex,
          '要参加的第一个比赛，正是 ',
          coffee.get_colored_name(),
          ' 会参加的 ',
          tenn_spr,
          '。',
        ]);
        era.printButton(`「${tachyon.sex}……最近比较忙。」`, 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 点了点头，随后便不再提起有关 ',
          tachyon.get_colored_name(),
          ' 的事。',
        ]);
      }
      await coffee.say_and_wait(
        '今天只有我们……两个呢……朋友不知道为什么不见了……',
      );
      await era.printAndWait([
        '自从 ',
        arim_kin,
        ' 后，',
        coffee.get_colored_name(),
        ' 的样子就变得有点怪……但也不会总是那副模样。',
      ]);
      await era.printAndWait(['尽管平常的', coffee.sex, '十分文静——']);
      await era.printAndWait(
        '工作人员「现场的各位，来做新春的祈福吧！无论是什么心愿，神明大人一定都会帮忙实现的哦！」',
      );
      await coffee.say_and_wait('……………………');
      await coffee.say_and_wait('这是骗人的。');
      await coffee.say_and_wait(
        '愿望根本不会被实现。这个地方，根本没有神明存在。',
      );
      await era.printAndWait([
        '——但……偶尔却会变成这样。是不是有什么触发开关导致了',
        coffee.sex,
        '的转变呢？',
      ]);
      await coffee.say_and_wait([
        callname,
        '，往这边来……让我们去一个能实现所有愿望的城镇……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '随后，',
        coffee.get_colored_name(),
        ' 带 ',
        you.get_colored_name(),
        ' 去了一个完全没有新年气氛的诡异城镇……',
      ]);
      await coffee.say_and_wait('这里……才是真正能实现愿望的地方……');
      await coffee.say_and_wait([
        '为了能够追上朋友……',
        callname,
        ' 会为我许下什么愿望呢？',
      ]);
      await coffee.say_and_wait('从这里面……选一个吧。');
      await era.printAndWait('地面的砂土开始慢慢移动，脚边浮现出一些文字。');
      await era.printAndWait([
        '尽管已经经历过不止一次的灵异事件，但这仍让 ',
        you.get_colored_name(),
        ' 感到发抖。',
      ]);
      await era.printAndWait([
        '从中，',
        you.get_colored_name(),
        ' 所选择的是——',
      ]);
      era.printButton('「星光的治疗」（体力+500）', 1);
      era.printButton('「全身的鳞片」（全属性+10）', 2);
      era.printButton('「过往者的睿智」（技能点数+35）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait('治疗……的确……星星……一直在天上注视着我们……');
          await coffee.say_and_wait('若以不受限制的星光垄罩全身……');
          await coffee.say_and_wait([
            '谢谢你，',
            callname,
            '。我感觉比较有活力了……',
          ]);
          await coffee.say_and_wait(
            '我想，我能继续努力训练了。不再低着头……往前迈进……',
          );
          await era.printAndWait([
            '刚才那座城镇是幻觉吗……？一转眼，你们就又回到了普通的街道上。',
          ]);
          await era.printAndWait([
            '无论如何，',
            coffee.get_colored_name(),
            ' 的脸上又再次散发着活力了。',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            '全身的鳞片……宛如把头发……视网膜……和灵魂……全以鳞甲包覆一般……',
          );
          await coffee.say_and_wait('若能将我的存在加以增强。啊啊……');
          await era.printAndWait('——噗通。');
          await era.printAndWait(
            '耳边传来了幻听一般的水声，仿佛是沉入了漆黑的海洋，无边无际。',
          );
          await era.printAndWait([
            '水压温柔地包裹着 ',
            you.get_colored_name(),
            ' 全身，',
            you.get_colored_name(),
            ' 感觉似乎有什么生物在 ',
            you.get_colored_name(),
            ' 身旁游动——它那冰冷、细腻的鳞片伴随着水流划过 ',
            you.get_colored_name(),
            ' 耳畔，它那分叉的细舌试探性地吐出，撩动 ',
            you.get_colored_name(),
            ' 的发丝……',
          ]);
          await era.printAndWait('…………');
          await era.printAndWait([
            '当 ',
            you.get_colored_name(),
            ' 从恍惚中醒来时，你们就又回到了普通的街道上。',
          ]);
          await era.printAndWait('刚才的是梦吗，或者有是一次灵异事件？');
          await era.printAndWait([
            '看向身边精神饱满，似乎仍意犹未尽的 ',
            coffee.get_colored_name(),
            '，或许许愿确实发挥了效果……',
          ]);
          break;
        case 3:
          await coffee.say_and_wait('过往者的睿智……先人们的记忆……');
          await coffee.say_and_wait('若能从中窥探……纵使仅有一二……');
          await era.printAndWait([
            '——陌生的记忆流淌进 ',
            coffee.get_colored_name(),
            ' 的脑中。',
          ]);
          await era.printAndWait(
            '连是否曾经存在都未知的景色，以及当中的古老智慧也一并涌现，却马上又如同蜻蜓点水般转瞬即逝，最终所能记住的，也不过是皮毛。',
          );
          await era.printAndWait('但就算只是皮毛……');
          await coffee.say_and_wait([
            callname,
            '，我似乎明白世上存在着的许多不同跑法了。我想更加地……',
          ]);
          await coffee.say_and_wait(
            '将这些灵感……在之后的比赛中，逐一尝试看看……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' 并不清楚到底发生了什么，而 ',
            you.get_colored_name(),
            ' 在一旁所见的，只不过是 ',
            coffee.get_colored_name(),
            ' 闭上眼又睁开眼的一瞬后，你们就又回到了普通的街道上。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '迎向春季天皇赏';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      call_32,
      callname_32,
      t_call_c,
      t_plan_b,
      tenn_spr,
    ) => {
      await era.printAndWait([tenn_spr, ' 的比赛日。']);
      await coffee.say_and_wait('我要赢……我要赢……我一定会赢……');
      await coffee.say_and_wait(
        '不管是谁……只要挡在我面前，挡在我追上朋友的路上，我都会……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 仿佛燃起了漆黑的火焰，',
        coffee.sex,
        '对胜利的渴望已经是前所未有的了。',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '哟，',
          t_call_c,
          ' 和 ',
          callname_32,
          '。表情真吓人啊。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 的另一个担当，同时也是这场比赛的参赛选手，从身后走出。',
        ]);
        await coffee.say_and_wait([call_32, '……就算你参加了也别想能阻挠我……']);
        await tachyon.say_and_wait([
          '哈哈，阻挠你吗？……别在比赛开始前就觉得自己赢定了啊，',
          coffee.get_colored_name(),
          '。',
        ]);
        await era.printAndWait('针锋相对的两人，唯有在赛场上见真章了。');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 默默看着 ',
          coffee.get_colored_name(),
          ' 那异常严峻的表情。',
        ]);
        await era.printAndWait([
          '如果可以的话……真想告诉',
          coffee.sex,
          '不要去追朋友了——这种话当然是说不出口的，毕竟这是 ',
          you.get_colored_name(),
          ' 和 ',
          coffee.get_colored_name(),
          ' 缔结契约时，与',
          coffee.sex,
          '最初立下的约定。',
        ]);
        await era.printAndWait([
          '所以今天……只能祈祷',
          coffee.sex,
          '平安无事了。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '彼岸';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      m_horse,
      t_plan_b,
      tenn_spr,
      takz_kin,
    ) => {
      if (t_plan_b) {
        await era.printAndWait('惊心动魄的一战。');
        await era.printAndWait([
          '这场全长3200米的 ',
          tenn_spr,
          ' 最后以 ',
          coffee.get_colored_name(),
          ' 与 ',
          tachyon.get_colored_name(),
          ' 在最终直线上的厮杀告终。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 那仿佛超越光速的身姿、',
          coffee.get_colored_name(),
          ' 那仿佛追猎般的狂野脚步，深深地震撼了在场所有人。',
        ]);
        await era.printAndWait([
          '——但最后，还是 ',
          coffee.get_colored_name(),
          ' 更胜一筹。',
        ]);
        await era.printAndWait([
          '在',
          coffee.sex,
          '冲线的一刻，京都竞马场的欢呼声响彻云霄。',
        ]);
        await era.printAndWait('选手通道内。');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 在比赛结束后就不知所踪，而 ',
          coffee.get_colored_name(),
          ' 仍同往常一般在等待 ',
          you.get_colored_name(),
          ' 的到来。',
        ]);
        await coffee.say_and_wait([
          '呼、呼、呼……是我赢了，',
          callname,
          '……在最后的直线那，拼尽全力，超越了 ',
          call_32,
          '。',
        ]);
      } else {
        await era.printAndWait('惊心动魄的一战。');
        await era.printAndWait([
          '这场全长3200米的 ',
          tenn_spr,
          ' 最后以 ',
          coffee.get_colored_name(),
          ' 在最终直线上仿佛要猎杀前列',
          coffee.uma_sex_title,
          '般的惊人末脚结束。在',
          coffee.sex,
          '冲线的一刻，京都竞马场的欢呼声响彻云霄。',
        ]);
        await era.printAndWait('选手通道内。');
        await coffee.say_and_wait(['呼、呼、呼……我赢了，', callname]);
      }
      await coffee.say_and_wait(
        '而且……我和朋友间的距离……又拉近一些了……虽然还是没能追上。',
      );
      await era.printAndWait([
        '比赛过后，在比赛中全力释放的 ',
        coffee.get_colored_name(),
        ' 变回了往常的样子。',
      ]);
      era.printButton('「很完美的奔跑，恭喜你。」', 1);
      await era.input();
      await coffee.say_and_wait(
        '谢谢，但在能追上朋友之前，还远远不能说是完美……',
      );
      await coffee.say_and_wait([
        callname,
        ' 现在，该选定之后的比赛了对吧。关于下一个目标——',
      ]);
      await era.printAndWait([
        '接下来的目标……就一般而言，大多会选择春季的 ',
        takz_kin,
        '，但让 ',
        coffee.get_colored_name(),
        ' 暂时休息也是一个不错的……',
      ]);
      await coffee.say_and_wait('——我想去远征法国。');
      await era.printAndWait('！？');
      await era.printAndWait([
        '一瞬间，',
        you.get_colored_name(),
        ' 怀疑自己的耳朵听错了，',
        coffee.get_colored_name(),
        ' 的爆炸性发言直接把 ',
        you.get_colored_name(),
        ' 的思维击碎。',
      ]);
      era.printButton('「法国！？凯旋门吗，你要去跑凯旋门！？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……要更快、更强，只有去另一边……海洋另一边的法国。',
      );
      era.printButton('「………理由呢？又是因为朋友？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '嗯……朋友，快要离开了……一个人去了法国……所以我绝对……',
      );
      if (m_horse) {
        era.println();
        await era.printAndWait('——不对。');
        await era.printAndWait([
          '突然，',
          you.get_colored_name(),
          ' 的脑海中仿佛凭空出现了一股意念。',
        ]);
        await era.printAndWait([
          '不对？什么不对，是 ',
          coffee.get_colored_name(),
          ' 前往法国的计划不对……亦或是引导',
          coffee.sex,
          '去法国的根本不是朋友？',
        ]);
      }
      era.println();
      await coffee.say_and_wait([callname, '……这个愿望，你会答应吧？']);
      await coffee.say_and_wait('因为朋友也要我过去。所以……');
      if (m_horse) {
        era.println();
        await era.printAndWait('——不对。');
        await era.printAndWait([
          '又来了，那股意念再一次出现在了 ',
          you.get_colored_name(),
          ' 的脑海。',
        ]);
        await era.printAndWait('到底什么不对，倒是说清楚啊！');
      }
      era.println();
      await coffee.say_and_wait('追上朋友——这是我们之间重要的约定。');
      await coffee.say_and_wait(
        '我是不会放弃的……因为我们是为此，才签订的契约……',
      );
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait([
        '无法反驳，这确实是 ',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 之间契约关系的基石。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 无法说服 ',
        coffee.get_colored_name(),
        ' 放弃远征。最后，你们决定先保留国内目标 ',
        takz_kin,
        '，至于是否前往法国远征，则等到下个月中旬再做出决定。',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          '只是，你又想起了那仿佛直接出现在脑海中的意念。',
        ]);
        await era.printAndWait([
          '……引导 ',
          coffee.get_colored_name(),
          ' 前往法国的，到底是什么？',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_19: (() => {
    const title = '别离';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_call_c,
      m_horse,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        '在与 ',
        coffee.get_colored_name(),
        ' 进行讨论过后，你们正式决定前往国外远征——参加法国G1赛事 ',
        prix_lat,
        '。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 今天将从这个机场出发，而 ',
        you.get_colored_name(),
        ' 也将陪同，两个人一起面对这个挑战。',
      ]);
      await coffee.say_and_wait([
        '走吧，',
        callname,
        '。为了到天空的另一端追上朋友……',
      ]);
      era.printButton('「……先等一下。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 歪了歪脑袋看向 ',
        you.get_colored_name(),
        '，不太清楚 ',
        you.get_colored_name(),
        ' 在临行前想做什么。',
      ]);
      await you.say_and_wait(
        '前往法国远征非同小可，在出发前有必要再次理清状况……',
      );
      await you.say_and_wait(
        '国外场地和国内完全不同，再加上环境变化和长时间旅途，有必要确定你的身体状况……',
      );
      await coffee.say_and_wait('事到如今，再考虑这些的话……我也……');
      era.printButton('阻止', 1);
      await era.input();
      await you.say_and_wait('最后，暂时抛弃我作为训练员的身份……我不想你去。');
      await coffee.say_and_wait(
        '……为什么？我们……明明约定好了，不是吗？……要一同为了追上朋友而走下去？',
      );
      await you.say_and_wait('茶座……你的事项永远都是我的优先项……');
      await you.say_and_wait(
        '为了实现茶座你的梦想，即使会随着这个梦想一同殒落我也心甘情愿……',
      );
      await you.say_and_wait(
        '但……这是一场无法回头的赌局。要是一旦失败，你的竞赛生涯也就……结束了。',
      );
      await era.printAndWait(
        '如果两人一路以来累积的努力，最终全都是为了换来「结束」的话……',
      );
      await era.printAndWait([
        '如果为了追梦，',
        coffee.get_colored_name(),
        ' 必须失去其他的一切的话……',
      ]);
      await era.printAndWait([
        '那么 ',
        coffee.get_colored_name(),
        ' 的成功和将来，比所谓的梦想更为重要。',
      ]);
      era.printButton('「所以，国外远征……还是取消吧。」', 1);
      await era.input();
      await coffee.say_and_wait('…………');
      await coffee.say_and_wait('这样啊……那么……');
      if (era.get('love:25') > 75) {
        await coffee.say_and_wait('该说再见了……我的爱人……');
      } else {
        await coffee.say_and_wait(['该说再见了……', callname, '……']);
      }
      era.println();
      await coffee.say_and_wait(
        '我本以为……只有你会不一样……只有你正视了我的梦想……只有你走进了我的世界……',
      );
      await coffee.say_and_wait('可到头来……只是我的一厢情愿吗……');
      era.println();
      await coffee.say_and_wait('没事的……没关系。接下来……我一个人也可以……');
      await coffee.say_and_wait('没事的……没关系。只是回到原本的状态而已……');
      await coffee.say_and_wait('我一定会追上朋友的。所以——');
      era.println();
      await coffee.say_and_wait('……再见。');
      era.println();
      await era.printAndWait([
        '毫不留情地作出告别，留下背影转身而去。',
        coffee.get_colored_name(),
        ' 用含血的话语打算切断你们之间的关系——不，不只是话语含血。',
      ]);
      await era.printAndWait([
        '不知何时起，',
        coffee.get_colored_name(),
        ' 的脚趾渗出了血，',
        coffee.sex,
        '伸出手的手指也渗着血。',
      ]);
      era.println();
      await coffee.say_and_wait('为什么动不了……我……的脚……');
      await coffee.say_and_wait('……为什么？明明我……非去不可的……');
      await coffee.say_and_wait('不去的话，朋友会……');
      await coffee.say_and_wait('朋友会……消失的……');
      await coffee.say_and_wait('就算动不了，我也……！！');
      if (m_horse) {
        era.println();
        await era.printAndWait(['——阻止', coffee.sex, '。']);
        await era.printAndWait([
          '莫名的意念再一次出现在 ',
          you.get_colored_name(),
          ' 的脑海——但不用说 ',
          you.get_colored_name(),
          ' 也是会这么做的……！',
        ]);
      }
      era.println();
      if (t_plan_b) {
        await era.printAndWait([
          '没等 ',
          you.get_colored_name(),
          ' 冲上前去，一个意料之外的人出现在了 ',
          coffee.get_colored_name(),
          ' 身边，抓住了',
          coffee.sex,
          '颤抖着的肩膀。',
        ]);
        await tachyon.say_and_wait([
          '真是难看啊，',
          t_call_c,
          '。你就这么想参加 ',
          prix_lat,
          ' 吗？',
        ]);
        await coffee.say_and_wait('……！？');
        era.printButton('「速子！？你怎么会在这？」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 不知为何偷偷跟随来到了机场，在旁观你们的对话后，选择了加入现场。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 冲上前去，阻止了 ',
          coffee.get_colored_name(),
          ' 的强行移动，一只手穿过腋下，另一只手搂起双腿，将',
          coffee.sex,
          '公主抱了起来。',
        ]);
        await tachyon.say_and_wait(
          '什么叫『我怎么会在这』啊，关心自己的实验对象的动向，这不是理所当然的吗？',
        );
        await coffee.say_and_wait('……你明明什么都不懂……却一直非要横插一脚……');
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 在 ',
          you.get_colored_name(),
          ' 怀中稍作挣扎后便放弃，然后对着 ',
          tachyon.get_colored_name(),
          ' 挤出一句话来。',
        ]);
        await tachyon.say_and_wait(
          '都这副模样了还要强行参赛吗，所以才说你难看啊……',
        );
        await tachyon.say_and_wait([
          '既然你无论如何都要参加 ',
          prix_lat,
          '——那么我来替你参加如何？',
        ]);
        await coffee.say_and_wait('……你说，什么？');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的发言把 ',
          you.get_colored_name(),
          ' 怀中的 ',
          coffee.get_colored_name(),
          ' 震惊到了，',
          coffee.sex,
          '可从来没听说过这件事。',
        ]);
        await tachyon.say_and_wait([
          '科学家可从来不会做无谓的事情，参加 ',
          prix_lat,
          ' 自有我的安排……哦，但是 ',
          takz_kin,
          ' 我也是会参加的。',
        ]);
        await tachyon.say_and_wait(
          '而且，我对你口中的朋友也一直很感兴趣。就由我来替你追上朋友，如何？',
        );
        await coffee.say_and_wait('为什么……朋友竟然，同意了……');
        await coffee.say_and_wait('而且身体的异样……也渐渐恢复了……');
        await coffee.say_and_wait('但是……但是我……今后、该怎么办……');
        await coffee.say_and_wait('呜、呜呜呜……呜呜呜……');
        await era.printAndWait([
          '抱着哭泣的 ',
          coffee.get_colored_name(),
          '，你们三人一同踏上了返回特雷森的路途。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 的国外远征在出发前一刻取消，下一个目标将改回国内的 ',
          takz_kin,
          '。',
        ]);
        await era.printAndWait([
          '而 ',
          tachyon.get_colored_name(),
          '，将在 ',
          takz_kin,
          ' 结束后，前往法国参加 ',
          prix_lat,
          '。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 冲上前去，阻止了 ',
          coffee.get_colored_name(),
          ' 的强行移动，一只手穿过腋下，另一只手搂起双腿，将',
          coffee.sex,
          '公主抱了起来。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 没有在 ',
          you.get_colored_name(),
          ' 怀中挣扎，仿佛灵魂抽离了身体一般……过了许久，',
          coffee.sex,
          '才重新有了反应。',
        ]);
        await coffee.say_and_wait('看来……没有办法了……');
        await coffee.say_and_wait(['只能依 ', callname, ' 所言……取消远征了……']);
        await coffee.say_and_wait('但是……但是我……今后、该怎么办……');
        await coffee.say_and_wait('呜、呜呜呜……呜呜呜……');
        await era.printAndWait([
          '抱着哭泣起来的 ',
          coffee.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 踏上了返回特雷森的路途。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 的国外远征在出发前一刻取消，下一个目标将改回国内的 ',
          takz_kin,
          '。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '迎向宝冢纪念';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        '虽然在机场那天发生的事让 ',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 两人陷入了一段略微有点尴尬的冷战期，但由于互相坦白了内心真正的想法，在经过一定时间的沉淀后，',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 的关系和好如初，甚至愈发深刻。',
      ]);
      await era.printAndWait([
        coffee.sex,
        '逐渐从沮丧中振作，也比以前更常露出笑容，然后——',
      ]);
      await era.printAndWait([takz_kin, ' 前的选手通道内。']);
      await coffee.say_and_wait([takz_kin, '……这里……就是我的新起点……']);
      await coffee.say_and_wait('尽管朋友不在……我也一定会——');
      await coffee.say_and_wait('——！？');
      era.printButton('「怎么了？」', 1);
      await era.input();
      await coffee.say_and_wait('朋友！就在通道出口那里……没有离开，在等着我！');
      await era.printAndWait([
        '朋友……不是应该去了法国，在 ',
        prix_lat,
        ' 上等待 ',
        coffee.get_colored_name(),
        ' 的挑战吗？',
      ]);
      await era.printAndWait([
        '不管怎么说，在看到重新出现的朋友后 ',
        coffee.get_colored_name(),
        ' 精神一振，或许在比赛中就能拿出更好的状态。',
      ]);
      await coffee.say_and_wait('我一定要赢……');
      if (t_plan_b) {
        await tachyon.say_and_wait(['话可别说这么满啊，', t_call_c, '。']);
        await era.printAndWait([
          '整备结束的 ',
          tachyon.get_colored_name(),
          ' 身着',
          coffee.sex,
          '标志性的白色决胜服，来到了选手通道。',
        ]);
        await tachyon.say_and_wait([
          '我会在 ',
          takz_kin,
          ' 上超越你……然后，在 ',
          prix_lat,
          ' 上超越你的朋友。',
        ]);
        await coffee.say_and_wait('……能做到的话，就尽管试试吧……！');
        await era.printAndWait([
          '两人之间弥漫着火药味。而这针锋相对的两人，即将在 ',
          takz_kin,
          ' 迎来最后的对决。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '代替之物';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
      japa_cup,
    ) => {
      if (t_plan_b) {
        await coffee.say_and_wait([
          '呼、呼、呼……',
          call_32,
          '……好强……就差一点……',
        ]);
        await coffee.say_and_wait(
          '甚至……感觉已经能碰到朋友的肩膀……但最后，还是我赢了。',
        );
      } else {
        await coffee.say_and_wait(
          '呼、呼、呼……更接近了……我离朋友……前所未有的近……',
        );
        await coffee.say_and_wait('甚至……感觉已经能碰到朋友的肩膀……');
      }
      await era.printAndWait([
        '今年上半年的最后盛事——',
        takz_kin,
        '，以 ',
        coffee.get_colored_name(),
        ' 的胜利告终。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的身体相较过去已经改善了许多。在完成这样一场激烈的比赛后，只耗费了不久的时间便从全力冲线的虚脱中恢复过来。',
      ]);
      era.printButton('「你变强了，茶座。」', 1);
      await era.input();
      await era.printAndWait([coffee.get_colored_name(), ' 确实变强了很多。']);
      await era.printAndWait([
        '还记得两年半之前 ',
        you.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 意外的相遇，那时的',
        coffee.sex,
        '还是一个只会在夜晚的训练场独自追逐无形之物的孤僻',
        coffee.uma_sex_title,
        '。',
      ]);
      await era.printAndWait('现在回头一看，已是走过了这么长的道路。');
      await era.printAndWait([
        '虽然没能前往国外远征，但还是希望能让 ',
        coffee.get_colored_name(),
        ' 的梦想延续的。',
      ]);
      await era.printAndWait('国外远征……');
      await coffee.say_and_wait([callname, '，那我们的下个目标是……']);
      era.printButton('「日本杯，如何？」', 1);
      await era.input();
      await coffee.say_and_wait([
        japa_cup,
        '……与 ',
        prix_lat,
        ' 相同的2400米中距离比赛……',
      ]);
      await coffee.say_and_wait([
        '谢谢你，',
        callname,
        '。那里……就相当于我们的法国了对吧……',
      ]);
      await era.printAndWait([
        '作为无法实现的梦想的延续，11月的东京便是你们的巴黎。',
      ]);
      if (t_plan_b) {
        await era.printAndWait('那真正的巴黎呢？');
        await tachyon.say_and_wait(['是我输了啊，', t_call_c, '。']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 走入了选手通道，坦然地承认了自己的失败。',
        ]);
        await tachyon.say_and_wait(
          '你身上所存在的可能性，比我想象的还要庞大。',
        );
        await tachyon.say_and_wait('到现在为止……Plan B 也算是有成果了吧。');
        await coffee.say_and_wait([call_32, '……谢谢你……']);
        await tachyon.say_and_wait([
          '那么，也该就此别过了，',
          prix_lat,
          '……或许是我参加的最后一场比赛了。和你的比赛一直都很有趣，',
          t_call_c,
          '。',
        ]);
        await coffee.say_and_wait('……我也会去看你的比赛的。');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 只是摆了摆手，没有对 ',
          coffee.get_colored_name(),
          ' 的话做出正面回应。',
        ]);
        await era.printAndWait([
          '于是，',
          coffee.get_colored_name(),
          ' 的下一场目标比赛就决定是 ',
          japa_cup,
          ' 了。',
        ]);
        await era.printAndWait([
          '而 ',
          tachyon.get_colored_name(),
          '，也将在 ',
          prix_lat,
          ' 迸发自己的光辉。',
        ]);
      } else {
        await era.printAndWait([
          '于是，下一场目标竞赛就决定是 ',
          japa_cup,
          ' 了。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿（资深年）开始';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, japa_cup, arim_kin) => {
      await era.printAndWait('前往夏季合宿的大巴上。');
      await era.printAndWait([
        '在经过这次夏季合宿后等待 ',
        coffee.get_colored_name(),
        ' 的便是 ',
        japa_cup,
        '，尽管现在距离11月看似还很遥远，但若是掉以轻心就要处于劣势了，更别说还有未确定是否参加的 ',
        arim_kin,
        '。',
      ]);
      await era.printAndWait('所以，这次夏季合宿的主要目标就是好好休养——');
      era.printButton('「——明白了吗，茶座？……茶座？」', 1);
      await era.input();
      await era.printAndWait([
        '坐在 ',
        you.get_colored_name(),
        ' 身边的 ',
        coffee.get_colored_name(),
        ' 不知何时把头靠在了 ',
        you.get_colored_name(),
        ' 的肩膀上，静静地睡着了，身体随着车辆的行驶微微晃动。',
      ]);
      await era.printAndWait([
        '轻轻调整坐姿，让',
        coffee.sex,
        '睡得更舒服一些。',
      ]);
      await coffee.say_and_wait('………………呜嗯……');
      await era.printAndWait('真是可爱的睡相。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 也萌生起了睡意，与 ',
        coffee.get_colored_name(),
        ' 相依睡去……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿（资深年）结束';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     */
    const f = async (coffee, you, m_horse, japa_cup) => {
      await era.printAndWait('为期两个月的夏季合宿结束了。');
      await era.printAndWait([
        '在这一整个夏天中并没有发生什么特别的事，',
        you.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 每天一起在沙滩上训练，',
        coffee.get_colored_name(),
        ' 的身体状况得到了充分的调整。',
      ]);
      await coffee.say_and_wait('平平淡淡的夏季合宿……这样也不错呢……');
      await era.printAndWait([
        '在回特雷森的大巴上，',
        coffee.get_colored_name(),
        ' 看着窗外流逝的景色，发出了这样的感叹。',
      ]);
      era.printButton('「平淡的生活也不错啊……」', 1);
      await era.input();
      await era.printAndWait([
        '但赛',
        coffee.uma_sex_title,
        '的生涯是不可能一直平淡下去的。在回到特雷森后，你们便要开始紧张的 ',
        japa_cup,
        ' 备战工作了。',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          '沉重的氛围围绕着 ',
          you.get_colored_name(),
          ' 与 ',
          coffee.get_colored_name(),
          ' 二人，异界的赛马之魂、神秘的朋友，种种因素交织在 ',
          coffee.get_colored_name(),
          ' 身上，使',
          coffee.sex,
          '一时间变得迷茫。',
        ]);
        await era.printAndWait([
          '而 ',
          coffee.get_colored_name(),
          ' 的目标——追上朋友，究竟是否为',
          coffee.sex,
          '自己的愿望？',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = '迎向日本杯';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     */
    const f = async (
      coffee,
      you,
      callname,
      call_32,
      t_plan_b,
      prix_lat,
      japa_cup,
    ) => {
      await era.printAndWait([japa_cup, ' 当天，选手通道内。']);
      await era.printAndWait(['因意外而相遇的你们终于走到了这里。']);
      await coffee.say_and_wait('…………');
      await era.printAndWait([
        '和 ',
        you.get_colored_name(),
        ' 并肩走着的 ',
        coffee.get_colored_name(),
        ' 突然停下了脚步，与回头查看的 ',
        you.get_colored_name(),
        ' 四目相对。',
      ]);
      era.printButton('「紧张了吗？」', 1);
      await era.input();
      await coffee.say_and_wait('……并不是紧张，只是……');
      if (t_plan_b) {
        await coffee.say_and_wait([
          '在看到 ',
          call_32,
          ' 的 ',
          prix_lat,
          ' 后，我在想……我今天能跑出像',
          coffee.sex,
          '那样精彩的比赛吗？',
        ]);
      } else {
        await coffee.say_and_wait('我今天……能跑出一场精彩的比赛吗？');
      }
      await era.printAndWait([
        '从前一心只想着超越朋友、不顾外界一切的 ',
        coffee.get_colored_name(),
        '，在经历种种事件后已经得到了改变。',
      ]);
      era.printButton(
        '「去吧，拿出你最引以为豪的末脚，将你的身姿展示给全世界。」',
        1,
      );
      await era.input();
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait([callname, '……可以接一个吻吗？']);
        await era.printAndWait([
          '轻轻拨开 ',
          coffee.get_colored_name(),
          ' 额前的长发、微微低头，',
          coffee.get_colored_name(),
          ' 配合的踮起脚尖，吻上了 ',
          you.get_colored_name(),
          ' 的嘴唇。',
        ]);
        await era.printAndWait([
          '仿佛在商店街小巷的那天一样，',
          coffee.get_colored_name(),
          ' 的双手不自觉地绕上了 ',
          you.get_colored_name(),
          ' 的颈后，在双唇的深处交换着各自的爱意。',
        ]);
        await era.printAndWait([
          '良久，两人终于分开，相视一笑，随即奔向 ',
          japa_cup,
          ' 的赛场。',
        ]);
      } else {
        await coffee.say_and_wait([callname, '……能给我一个拥抱吗？']);
        await era.printAndWait([
          '敞开双手，',
          coffee.get_colored_name(),
          ' 向前一步抱上了 ',
          you.get_colored_name(),
          '，两人都没有其他动作，只是静静地感受着对方的温度。',
        ]);
        await era.printAndWait([
          '良久，两人松开了手，随即奔向 ',
          japa_cup,
          ' 的赛场。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '胜负';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, callname, japa_cup, arim_kin) => {
      await era.printAndWait([
        '全世界关注 ',
        japa_cup,
        ' 的观众应该都会记住这一天。',
      ]);
      await era.printAndWait([
        '最终直线上，那道漆黑的影子从队伍的后段奔袭向前，仿佛撕咬着背影般、以无法抵挡的力量与爆发力猎杀了前方每一个「猎物」，被',
        coffee.sex,
        '超越的',
        coffee.uma_sex_title,
        '甚至因为惊吓而短暂失速。',
      ]);
      await era.printAndWait([
        coffee.sex,
        '冲线时高速摄像机所捕捉到的模糊身影，使其后来获得了「漆黑的魅影」这样的称号。',
      ]);
      await era.printAndWait('但这些都是后话。');
      await era.printAndWait([
        '此时，选手休息室内，',
        japa_cup,
        ' 的获胜者 ',
        coffee.get_colored_name(),
        ' 正在被 ',
        you.get_colored_name(),
        ' 按着进行按摩。',
      ]);
      era.printButton('「今天太乱来了，要是受伤了该怎么办？」', 1);
      await era.input();
      await era.printAndWait([
        '尽管还是没能追上朋友，但 ',
        coffee.get_colored_name(),
        ' 在世界面前跑出了足以自豪的精彩比赛，代价则是在场下见到 ',
        you.get_colored_name(),
        ' 后立刻就坚持不住，倒在了 ',
        you.get_colored_name(),
        ' 怀里。',
      ]);
      await era.printAndWait([
        '万幸的是并没有受伤，只是耗尽体力后的肌肉虚脱。',
        you.get_colored_name(),
        ' 在选手休息室内就地为',
        coffee.sex,
        '做起了肌肉按摩。',
      ]);
      await coffee.say_and_wait(['啊，好痛！……', callname, '，请轻一点……']);
      await coffee.say_and_wait(
        '我只是……感受到观众席上的欢呼声……没能忍住脚步……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 倒没有真的责怪',
        coffee.sex,
        '的意思，在一边按摩一边进行说教后，也就原谅了 ',
        coffee.get_colored_name(),
        ' 的今天的行为。',
      ]);
      await coffee.say_and_wait([
        callname,
        '……下一个目标，就是 ',
        arim_kin,
        ' 了吧。',
      ]);
      await era.printAndWait([
        '按摩结束了，',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 正在收拾东西准备回特雷森时，',
        coffee.sex,
        '提到了一个月后的年末盛事——',
        arim_kin,
        '。',
      ]);
      await era.printAndWait([
        '现在想来，与 ',
        coffee.get_colored_name(),
        ' 相伴的日子也快三年了，与',
        coffee.sex,
        '曾经有过欢乐也有过争吵，有时也会灵异事件而陷入危险，但 ',
        you.get_colored_name(),
        ' 从未后悔当初与',
        coffee.sex,
        '签下契约。',
      ]);
      await era.printAndWait([
        '就用这最后的 ',
        arim_kin,
        '，检验你们这三年来的成就吧。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '迎向有马纪念';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      era.printButton('「……这就是最后了。」', 1);
      await era.input();
      await coffee.say_and_wait('……是啊，时间过得好快……');
      await era.printAndWait([
        '选手通道内，',
        you.get_colored_name(),
        ' 正与 ',
        coffee.get_colored_name(),
        ' 做着 ',
        arim_kin,
        ' 前最后的交流。',
      ]);
      await coffee.say_and_wait([callname, '，麻烦一下……']);
      await era.printAndWait([
        '说罢，',
        coffee.get_colored_name(),
        ' 抓起了 ',
        you.get_colored_name(),
        ' 的手，按在了自己的胸口上。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 有力的心跳透过柔软抵达手心，这一刻 ',
        you.get_colored_name(),
        ' 充分感受到了，',
        coffee.get_colored_name(),
        ' 这一存在是如此的鲜活、如此的美妙。',
      ]);
      await coffee.say_and_wait('……好暖和……稍微感到安心了点……');
      await coffee.say_and_wait([
        '在这场 ',
        arim_kin,
        ' 结束后……我们也要一直在一起，',
        callname,
        '……',
      ]);
      era.printButton('「不会分开的。」', 1);
      await era.input();
      await era.printAndWait([
        '得到 ',
        you.get_colored_name(),
        ' 肯定的回复后，',
        coffee.get_colored_name(),
        ' 松开了 ',
        you.get_colored_name(),
        ' 的手，微笑着离开了选手通道。',
      ]);
      await era.printAndWait([
        '怀抱着三年来与 ',
        you.get_colored_name(),
        ' 的点点回忆，',
        coffee.get_colored_name(),
        ' 走向了最后的闸门。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '摩天楼';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait('解说员', [
        coffee.get_colored_name(),
        '！是 ',
        coffee.get_colored_name(),
        '——！冲过终点后的',
        coffee.sex,
        '，依旧注视着地平线的远方！！',
      ]);
      await you.say_as_passer_by_and_wait('解说员', [
        '究竟',
        coffee.sex,
        '的最终目的地会是哪里呢！？又会成长到什么样的境界呢！？',
      ]);
      await era.printAndWait([
        '比赛结束后 ',
        coffee.get_colored_name(),
        ' 没有马上离去，只是站在原地，看向赛道远方。',
      ]);
      await era.printAndWait([
        '担心是不是出现了什么问题，',
        you.get_colored_name(),
        ' 走上前去。',
      ]);
      era.printButton('「那个……茶座？」', 1);
      await era.input();
      await coffee.say_and_wait(['…………', callname, '，我明白了……']);
      await coffee.say_and_wait('是因为你的缘故……所以朋友、走了……');
      await era.printAndWait('啊……？');
      await era.printAndWait([
        '难道是 ',
        you.get_colored_name(),
        ' 的缘故所以让朋友跑走了吗？',
      ]);
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 想就此道歉时——',
      ]);
      await coffee.say_and_wait('我不是……这个意思。');
      await coffee.say_and_wait(
        '我是要说……因为你的关系……让朋友的速度变得快到我无法追上了。',
      );
      await coffee.say_and_wait('没错……朋友在不断进化……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 看着 ',
        you.get_colored_name(),
        ' 的脸，用严肃的表情说道。',
      ]);
      await coffee.say_and_wait('朋友会随着我的理想提升，速度也会变得更快……');
      await coffee.say_and_wait(
        '当我不断变强后……朋友就会到更远的地方招手，并对我说『你还能更快吧』。',
      );
      await coffee.say_and_wait(
        '如果只有我一个人，也许早就能追上朋友了。追上之后……梦想也将在那里止步吧。但是……',
      );
      await coffee.say_and_wait(
        '我现在却仍然……在抬头仰望。仰望着那座看不见顶端的摩天楼……',
      );
      await coffee.say_and_wait('是你……激励了朋友。是你……激励了我。');
      await coffee.say_and_wait('让我到达了，一个人绝对无法触及的……高度……');
      await era.printAndWait([
        '朋友究竟是什么，你们似乎终于看到了答案的曙光。',
      ]);
      await era.printAndWait('朋友既不是善、也不是恶，因为——');
      await coffee.say_and_wait('我想还会变得更快吧……朋友……');
      await coffee.say_and_wait('然后，我们也还能继续追着朋友前进对吧……');
      await coffee.say_and_wait(
        '朋友不再是我一个人的朋友了……已经成为了我们二人意志的承载……就像赛前我们的约定那样，我想跟你一起追逐，直到天涯海角。',
      );
      era.printButton('「嗯……直到天涯海角。」', 1);
      await era.input();
      await era.printAndWait([
        '从今以后，',
        you.get_colored_name(),
        ' 也会像往常一样同 ',
        coffee.get_colored_name(),
        ' 一起追逐着朋友的背影，不断前行吧。',
      ]);
      await era.printAndWait([
        '你们并肩仰望着天空，细细体会着，两人的这个目标是多么珍贵且无边无际……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = '静谧的继承者';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 在闪耀系列赛中最初的三年里获得了极大的成功。',
      ]);
      await era.printAndWait([
        '眼前林立的奖杯宛如高楼耸立的街道。然而',
        coffee.sex,
        '的活跃表现并未止步于此——',
      ]);
      await coffee.say_and_wait('今天……也有好多客人……那么……你想商量的事是……？');
      await era.printAndWait([
        '在不知不觉间，因为在赛场上的身姿……',
        coffee.get_colored_name(),
        ' 受到了许多赛',
        coffee.uma_sex_title,
        '的仰慕。',
      ]);
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}A`,
        '那个～茶座同学……我想请教该如何才能在泥地跑好，我总是跑不好……',
      );
      await coffee.say_and_wait('泥地……这样啊……');
      await coffee.say_and_wait('我觉得……不要用力过度会比较好。');
      await coffee.say_and_wait('就像在沙子里……摆动钟摆那样……');
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}B`,
        '再来到我！下次我打算挑战逃马的跑法，请问有没有什么诀窍呢！？',
      );
      await coffee.say_and_wait('逃马……虽然我不太擅长……');
      await coffee.say_and_wait(
        '但最重要的……是心态……看你将重心放在哪里……跑法，不过是心态的展现……',
      );
      await coffee.say_and_wait('这样……有稍微给你们一些灵感了吗？');
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}们`,
        '有！非常感谢！！',
      );
      await coffee.say_and_wait('那你们……要喝杯咖啡再走吗？');
      await you.say_as_passer_by_and_wait(
        `赛${coffee.uma_sex_title}们`,
        '……要！',
      );
      await era.printAndWait([
        '面对着众多',
        coffee.uma_sex_title,
        '的提问，',
        coffee.get_colored_name(),
        ' 却能给所有人都提出充满灵性的建议，并且确实帮到',
        coffee.couple_title,
        '。',
      ]);
      await era.printAndWait([
        '这点连身为训练员的 ',
        you.get_colored_name(),
        ' 都自愧不如。',
      ]);
      era.drawLine();
      await coffee.say_and_wait([
        '哈啊、哈啊……',
        callname,
        '……可以麻烦你再监督我跑一次吗？',
      ]);
      await coffee.say_and_wait(
        '我今天想要尝试新的跑法。希望可以……提供给别人当参考……',
      );
      era.printButton('「是为了后辈们吗？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '是的……我最近总会想，虽然追上在前方的朋友的确很重要……',
      );
      await coffee.say_and_wait([
        '可是同时……对在后方追着自己的赛',
        coffee.uma_sex_title,
        '们给予支持也很重要。',
      ]);
      await coffee.say_and_wait(
        '我……并不像朋友那么快……但即使如此，还是希望能默默地给予帮助……',
      );
      await coffee.say_and_wait([
        '静静地张开双手……到了未来的某天，让自己变得能够帮助所有的赛',
        coffee.uma_sex_title,
        '……',
      ]);
      await era.printAndWait('——咻。');
      await era.printAndWait([
        '突然，',
        you.get_colored_name(),
        ' 眼前似乎有什么东西飞快的经过，虽然从未见过，但 ',
        you.get_colored_name(),
        ' 脑海中……却浮现出「朋友」二字。',
      ]);
      era.printButton('「……茶座，朋友现在在哪？」', 1);
      await era.input();
      await coffee.say_and_wait('朋友的话，不就在……诶？不见了……');
      await era.printAndWait('——咻。');
      era.printButton(`「茶座，你……就是赛${coffee.uma_sex_title}的……」`, 1);
      await era.input();
      await era.printAndWait([
        '仿佛听见了……「种子」的声音。名为赛',
        coffee.uma_sex_title,
        '种子的声音不断在耳边回绕……',
      ]);
      await era.printAndWait([
        '没错，',
        coffee.sex,
        '——',
        coffee.get_colored_name(),
        ' 就是——',
      ]);
      era.drawLine();
      await era.printAndWait([
        '有一个关于某位赛',
        coffee.uma_sex_title,
        '的寓言故事。',
      ]);
      await era.printAndWait([
        '据说那名赛',
        coffee.uma_sex_title,
        '拥有近乎究极的速度，并且和 ',
        coffee.get_colored_name(),
        ' 长得十分相似。',
      ]);
      await era.printAndWait([
        '或许 ',
        coffee.get_colored_name(),
        ' ',
        coffee.sex,
        '……一直都在一场梦里。',
      ]);
      await era.printAndWait([
        '一场那位究极的赛',
        coffee.uma_sex_title,
        '出现在眼前，并期待着 ',
        coffee.get_colored_name(),
        '「成为',
        coffee.sex,
        '，然后超越',
        coffee.sex,
        '」的梦……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  scared: (() => {
    const title = '怕黑';
    /**
     * @author Mr.E.
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '深夜，一片漆黑，校园里似乎有哭声，好像是个孩子？',
      ]);
      era.println();
      era.printButton('还是赶紧回宿舍吧……', 1);
      era.printButton('得赶紧过去，希望没出什么大问题……', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        for (let i = 0; i < 5; ++i) {
          await era.delay(500);
          era.replaceText('…'.repeat(i + 1));
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' 再次寻找着离开这里的路，但四处伸手不见五指，怎么也无法走出去。',
        ]);
        era.println();
        const random_colors = Object.values(chara_colors).map((e) =>
          Array.isArray(e) ? e[0] : e,
        );
        const buffer = [];
        buffer.push({ content: '？？？', fontWeight: 'bold' }, '「');
        const content = '我讨厌讨厌';
        for (let i = 0; i < content.length; ++i) {
          buffer.push({
            content: content[i],
            color: get_random_entry(random_colors),
          });
        }
        buffer.push('你！」');
        await era.printAndWait(buffer);
        era.println();
        await you.say_and_wait(['啊！']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 猛地坐起来，看了看四周。',
        ]);
        era.println();
        await you.say_and_wait(['原来是……梦？']);
        era.println();
        await era.printAndWait([
          '枕在 ',
          coffee.get_colored_name(),
          ' 的腿上，',
          coffee.get_colored_name(),
          ' 正在给 ',
          you.get_colored_name(),
          ' 按摩。',
        ]);
        era.println();
        await coffee.say_and_wait([
          '没关系，',
          callname,
          '，已经结束了，那孩子只是比较孤单而已。',
        ]);
        era.println();
        await era.printAndWait([
          '为了怕吵到 ',
          you.get_colored_name(),
          '，',
          coffee.get_colored_name(),
          ' 的声音更加柔和，低沉',
        ]);
        era.println();
        await coffee.say_and_wait([
          '以后不用害怕这种事了，我会一直陪在您身边的',
        ]);
      } else {
        await era.printAndWait([
          '不知道为什么，在 ',
          you.get_colored_name(),
          ' 提起精神寻找孩子的时候， ',
          you.get_colored_name(),
          ' 的速度越来越快，越来越快，带着亮光的宿舍门离 ',
          you.get_colored_name(),
          ' 也越来越近，脑海中的哭声反而越来越小',
        ]);
        era.println();
        await you.say_and_wait(['真是累了一天啊，赶紧休息吧。']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 一边这样想，一边打开了宿舍的门。',
        ]);
        era.println();
        await you.say_and_wait(['我是不是忘了点什么？']);
        era.println();
        await era.printAndWait([
          '带着疑惑，',
          you.get_colored_name(),
          ' 沉沉睡去。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  palace: (() => {
    const title = '乐园';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.print_and_wait([
        '如同万花筒一般、散发着绚烂光芒的天空与大地，如同梦幻一般、洋溢着金色光泽的巨大齿轮……',
      ]);
      await coffee.print_and_wait('这里……是梦的世界吗？');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' 环顾四周，眼前的景色却不会让',
        coffee.sex,
        '感到陌生。',
      ]);
      era.println();
      await coffee.print_and_wait([
        '在无数个夜晚，',
        coffee.sex,
        '曾在这梦幻的世界中探索：',
        coffee.sex,
        '见到过飞身扑向彩虹的飞行鲸鱼，见到过有着宝石般绚丽翅膀的巨龙，也见到过那个日夜追逐、被',
        coffee.sex,
        '称呼为「朋友」的存在。',
      ]);
      await coffee.print_and_wait([
        '那么今天，',
        coffee.sex,
        '又将见到什么呢？',
      ]);
      era.println();
      await coffee.print_and_wait(
        '一道身影如同波浪般在眼前浮现，黑色的长发、白色翘起的流星、熟悉的决胜服……',
      );
      era.println();
      await coffee.say_and_wait(['你是……']);
      era.println();
      await coffee.print_and_wait([
        '听到了询问声，来客转过头来，',
        coffee.get_colored_name(),
        ' 看到的是一个仿佛照镜子般、与自己一模一样的',
        coffee.uma_sex_title,
        '。',
      ]);
      era.println();
      await coffee.print_and_wait('——朋友。');
      await coffee.print_and_wait([
        '第一时间出现在 ',
        coffee.get_colored_name(),
        ' 脑海中的，便是这个词。',
      ]);
      era.println();
      await coffee.print_and_wait(['——但', coffee.sex, '不是朋友。']);
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' 可以肯定，对方不是朋友也不是怪异，而是一个和自己一样活生生的存在、一个出现在自己梦中的人。',
      ]);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「……看到了和自己一样的存在，你不感到惊讶吗？」',
      );
      era.println();
      await coffee.print_and_wait(['——连嗓音也与自己一模一样。']);
      era.println();
      await coffee.say_and_wait(['……我在这里见到过和自己类似的人，你呢？']);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「或许是职业的原因，让我习惯了照镜子吧……这里就只有你一个人吗？」',
      );
      era.println();
      await coffee.say_and_wait([
        '……除了我，偶尔还会有朋友，但看到别的人还是第一次……稍微聊聊怎么样，能够相遇也是一种缘分……',
      ]);
      era.println();
      await coffee.print_and_wait([
        '另一个茶座「缘分吗……真是适合我们',
        coffee.uma_sex_title,
        '的词汇，我们',
        coffee.uma_sex_title,
        '不就是被命运所引导的存在吗？」',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——该怎么说呢……虽然和自己长得一模一样，但性格上微妙的有些不同。',
      ]);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「……命运，真是麻烦啊……擅自就把我们束缚起来。」',
      );
      era.println();
      await coffee.say_and_wait(
        '……是啊。回想起来，我可能也一直被束缚着吧……追上朋友、超越朋友，或许也正是因为命运的引导。',
      );
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「你的目标，便是超越追不上的朋友吗？',
      );
      era.println();
      await coffee.say_and_wait(['……很奇怪吧……']);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「不，我们很相似呢……我想要寻找『乐园』，前往不可抵达的乐土……但太过遥远了，就算知道方向，却连目光都不可能触及……」',
      );
      era.println();
      await coffee.say_and_wait(
        '嗯，我也是……朋友，是会引领我去往幸福的人，过去的我为此而渴望追上朋友……可我越是追赶，朋友就跑得越快……',
      );
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「过去的你……意思是现在的你已经追上朋友了吗？」',
      );
      era.println();
      await coffee.say_and_wait('不……我已经不需要引领了……');
      era.println();
      await coffee.print_and_wait([
        '梦的世界中，光芒逐渐暗淡下来，是梦就要醒来了吗？',
      ]);
      era.println();
      await coffee.print_and_wait([
        '另一个茶座「……看来就要在此别过了。再见，这边 ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '。」',
      ]);
      era.println();
      await coffee.say_and_wait([
        '你也是，请保重，那边 ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '……',
      ]);
      era.drawLine();
      era.printButton('醒了吗，茶座，你好像做了个梦？', 1);
      await era.input();
      era.println();
      await coffee.print_and_wait([
        '再次睁开双眼，出现 ',
        coffee.get_colored_name(),
        ' 眼前的便是最熟悉的面孔……一副时刻陪伴在自己左右、代表着幸福的面孔。',
      ]);
      await coffee.print_and_wait([
        '——记得……自己是因为陪 ',
        callname,
        ' 熬夜太累，所以睡着了？',
      ]);
      era.println();
      await coffee.say_and_wait([
        '是的……一个，很有意思的梦……有时间的话，就跟 ',
        callname,
        ' 讲讲吧……',
      ]);
      era.println();
      await coffee.print_and_wait(
        '——我不会去寻找什么乐园，因为……我已经在最幸福的地方了。',
      );
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '雨与咖啡';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     */
    const f = async (coffee, you) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的趾甲始终无法根治，在一次训练中的意外后，校方以 ',
        coffee.get_colored_name(),
        ' 的健康为由决定让其退役……但某些人并不这么认为。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 手上提着要送给 ',
        coffee.get_colored_name(),
        ' 的咖啡豆独自走在大雨的路上，只听身后传来一阵急促的脚步声，然后便是后腰钻心的痛楚。',
        you.get_colored_name(),
        ' 被推倒在地，身后来人不断刺向 ',
        you.get_colored_name(),
        ' 的背部，直到 ',
        you.get_colored_name(),
        ' 一动也不动。',
      ]);
      await era.printAndWait([
        '纸袋中的咖啡豆散落一地，',
        you.get_colored_name(),
        ' 闻到了不应存在的咖啡香味……',
      ]);
      await era.printAndWait([
        '死掉之后，还能再见到 ',
        coffee.get_colored_name(),
        ' 吗？如果是',
        coffee.sex,
        '的话，或许……',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 的意识陷入了黑暗。']);
    };
    f.title = title;
    return f;
  })(),
};
