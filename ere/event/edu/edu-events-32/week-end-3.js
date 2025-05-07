const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 35] = async (tachyon, me, callname, flags) => {
    await print_event_name('因素 · 旁观者设置', tachyon);
    await tachyon.say_and_wait(
      '不过仔细想想……这大概是我第一次在观众席看比赛吧',
    );
    era.println();
    await era.printAndWait(['今天是神户新闻杯']);
    await era.printAndWait([
      '是 ',
      tachyon.get_colored_name(),
      ' 受后辈之邀来观赛的日子',
    ]);
    era.printButton('「毕竟主要都是自己上场跑呢」', 1);
    era.printButton('「毕竟主要都是看比赛录像呢」', 2);
    await era.input();
    await era.printAndWait([
      '对 ',
      tachyon.get_colored_name(),
      ' 而言，除了自己的比赛外，应该就没有需要到赛场的情况了',
    ]);
    await era.printAndWait(
      '比赛数据分析什么的，比起在观众席上看，看比赛结束后的录象能得到的数据还更多一些',
    );
    await era.printAndWait(
      '因此今天确实是第一次，或者说第一次以观众的身份而非研究角度来观看比赛',
    );
    era.println();
    await tachyon.say_and_wait('……实际在现场的感觉……果然很吵啊');
    era.println();
    await say_by_passer_by_and_wait('粉丝A', '加油！');
    await say_by_passer_by_and_wait('粉丝B', '一定要赢啊！');
    await say_by_passer_by_and_wait('粉丝C', [
      '神户新闻杯虽然说是菊花赏的先行赛，但实际上2400米和阪神赛场举办这两点对菊花赏而言都不算是对菊花赏检验的效果……',
    ]);
    await say_by_passer_by_and_wait('粉丝C', [
      '……因此其实很难说在神户新闻杯胜出的',
      tachyon.get_uma_sex_title(),
      '就一定能赢下菊花赏',
    ]);
    await say_by_passer_by_and_wait('粉丝D', '怎么忽然说这个');
    era.println();
    await tachyon.say_and_wait('这就是平常我比赛前观众席上的场景吗？');
    era.printButton('「差不多吧，甚至更热闹一点」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '……也是，毕竟是G1。嘛，虽然能理解他们的心情，不过这个时候加油也是没用的吧',
    );
    era.printButton('「有没有用……不是这样算的」', 1);
    era.printButton('「看下去就知道了」', 2);
    await era.input();
    await tachyon.say_and_wait('看下去什么的……哦？开始入闸了');
    era.drawLine();
    await tachyon.print_and_wait('那孩子进入闸门了');
    await tachyon.print_and_wait([
      '但说实话，这场比赛对 ',
      tachyon.get_colored_name(),
      ' 而言，其实需要关注的点不多',
    ]);
    await tachyon.print_and_wait('具有可能性的那孩子，必然是重中之重');
    await tachyon.print_and_wait(
      '……但除此之外，这场比赛不过是经典级限定的G2赛事',
    );
    era.println();
    await tachyon.say_and_wait('可以说，没有输掉的可能性吧');
    era.println();
    await tachyon.print_and_wait('赛前人气也是理所当然的第一人气');
    await tachyon.print_and_wait('天时地利人和，不可能输');
    await tachyon.print_and_wait('赛前分析胜率高达97.46%');
    era.println();
    await tachyon.print_and_wait('然而……');
    era.println();
    await say_by_passer_by_and_wait('观众A', '不要输！');
    await say_by_passer_by_and_wait('观众B', [
      '加油！还有机会！从外侧超',
      tachyon.sex,
      '啊！',
    ]);
    await say_by_passer_by_and_wait('观众C', '不要放弃！一定可以追上！');
    era.println();
    await tachyon.print_and_wait([
      '为什么还在为后面的',
      tachyon.get_uma_sex_title(),
      '加油',
    ]);
    await tachyon.print_and_wait('明显，已经追不上了不是吗');
    await tachyon.print_and_wait('……不明白');
    await tachyon.print_and_wait([
      '不，能够理解，虽然徒劳但还是想要为自己支持的',
      tachyon.get_uma_sex_title(),
      '发出喊声，这种事情自己还是能够理解的',
    ]);
    await tachyon.print_and_wait(
      '虽然说是疯狂科学家，但自己也不是什么不懂人性的机器人',
    );
    await tachyon.print_and_wait('但，为什么自己……');
    era.println();
    await say_by_passer_by_and_wait('解说', [
      '追上来了！现在后面的',
      tachyon.get_uma_sex_title(),
      '追上来了！',
    ]);
    era.println();
    await tachyon.say_and_wait('！');
    await tachyon.say_and_wait('……加油');
    await tachyon.say_and_wait('加油！不要输啊！');

    era.printButton('「！」', 1);
    await era.input();
    await say_by_passer_by_and_wait(
      '解说',
      '冲—————线！第一名的是一号一闸—————',
    );
    era.drawLine();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的应援声，被淹没在全场的喝采及加油声',
    ]);
    await era.printAndWait([
      '全场能够听见的恐怕只有在',
      tachyon.sex,
      '身边的 ',
      me.get_colored_name(),
      '，以及……',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '前辈！我听见你的加油声了！谢谢前辈的应援……那个时候，感觉全身忽然涌起了力量！',
    );
    era.println();
    await tachyon.say_and_wait('……呵呵，跑的很不错，未来还要继续努力下去');
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', '是！');
    era.println();
    await era.printAndWait([
      '神户新闻杯结束，',
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 离开了赛场',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……虽然理论上已经确定，但实际以场外人……或者，以当事人的身份来看，还是第一次',
    );
    await tachyon.say_and_wait(
      '无论是其他孩子，还是那孩子，最后都……真的超越极限了',
    );
    era.println();
    await era.printAndWait([
      '今天的比赛上，好几名',
      tachyon.get_uma_sex_title(),
      '都是',
    ]);
    await era.printAndWait('超越了极限');
    await era.printAndWait([
      '超越了在赛前测出的，',
      tachyon.sex,
      '们的理论最大速度',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '，你还记得之前粉丝感谢祭时的事吗？',
    ]);

    era.printButton('「速子是想着获得回报而为那孩子应援的吗？」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), ' 没有回答，只是反问了句']);
    era.println();
    await tachyon.say_and_wait('……呵呵');
    await tachyon.say_and_wait('不是因为想被人听见，想产生互动的行为……');
    await tachyon.say_and_wait(
      '而是纯粹，将自己的心情、情绪发泄出来而高喊出声',
    );
    await tachyon.say_and_wait('换句话说，就是『感动』');
    await tachyon.say_and_wait([
      '观众被',
      tachyon.get_uma_sex_title(),
      '感动而发出欢呼，',
      tachyon.get_uma_sex_title(),
      '也被观众感动而超越自己的极限……',
    ]);
    await tachyon.say_and_wait(
      '明明是好像左脚踩右脚，甚至永动机一样的不合理的概念，却实际的发生了',
    );
    await tachyon.say_and_wait(
      '真的，果然这些都是在实验室里完全体验不到的啊，哈哈哈哈！',
    );

    era.printButton('「这样，算是『喜欢』上比赛了吗」', 1);
    await era.input();
    await tachyon.say_and_wait('……嗯，我也不知道');
    era.println();
    await era.printAndWait('……也是');
    await era.printAndWait('毕竟说到底依然不是自己登上赛场去跑的');
    await era.printAndWait('要说喜欢与不喜欢，或许还是难以说明吧');
    await era.printAndWait([
      '但无论如何，随着神户新闻杯的结束，有马纪念也已经快要进入眼前了',
    ]);
    await era.printAndWait('研究的尽头（Deadline），就在眼前了');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
  };

  handlers[95 + 36] = async (tachyon, me, callname, flags) => {
    await print_event_name('决心', tachyon);
    era.println();
    await tachyon.say_and_wait('哈啊……哈啊……');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在法国的训练场上奔跑着',
    ]);
    await tachyon.print_and_wait(['这几天是', callname, '回日本的日子']);
    era.println();
    await tachyon.say_and_wait(['接着就是，世界的最高峰，凯旋门赏……']);
    era.println();
    await tachyon.print_and_wait(['现在', me.sex, '应该还在疑惑吧']);
    await tachyon.print_and_wait(['到底为什么要选择凯旋门赏']);
    await tachyon.print_and_wait([
      '抵达极限的彼方，这是 ',
      tachyon.get_colored_name(),
      ' 的梦想',
    ]);
    await tachyon.print_and_wait([
      tachyon.sex,
      '也一直以为，自己能够为了这个目标赌上一切，只要能够抵达，无论那个人是不是自己都无所谓',
    ]);
    await tachyon.print_and_wait([
      '……但是，',
      tachyon.sex,
      '其实并没有自己想的那么无所谓',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '本质上，',
      tachyon.sex,
      '还是想要奔跑的',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait([
      '但是，',
      tachyon.sex,
      '也不想放弃超越极限的梦想',
    ]);
    await tachyon.print_and_wait(
      '那么，该怎么办呢，该怎么做才有两全其美的办法',
    );
    await tachyon.print_and_wait([
      '很简单，只要，',
      tachyon.get_colored_name(),
      ' 成为「极限」就好',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '所以才选择 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
    ]);
    await tachyon.print_and_wait('选择世界的最高峰，最能代表极限的赛事');
    await tachyon.print_and_wait([
      '在这个舞台上，以自身来定义，',
      tachyon.get_uma_sex_title(),
      '的极限',
    ]);
    era.println();
    await tachyon.say_and_wait('……呵呵');
    era.println();
    await tachyon.print_and_wait('在想到超越众人，化身极限的时候');
    await tachyon.print_and_wait('身体忍不住的发热');
    era.println();
    await tachyon.say_and_wait('果然，还是渴望奔跑的啊……我');
    era.println();
    await tachyon.print_and_wait('决心已经燃起');
    await tachyon.print_and_wait('那么便抛开一切，专注于眼前的胜利吧');
    flags.wait_flag = get_attr_and_print_in_event(32, new Array(5).fill(5), 0);
  };

  handlers[95 + 43] = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    await print_event_name('完全燃起的胜负心', tachyon);
    era.println();
    await tachyon.say_and_wait('呼……呼……');
    era.println();
    await era.printAndWait([
      '从神户新闻杯结束后到今天，',
      tachyon.get_colored_name(),
      ' 的训练一直维持在良好的状态',
    ]);
    era.println();
    await tachyon.say_and_wait('……今天，也还是一样啊');
    era.println();
    await era.printAndWait('然而……维持，也就代表着没有进步');
    await era.printAndWait([
      '随着时间距离有马越来越近，',
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 的情绪也不免有些急躁起来',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '速子前辈！今天我也来了！',
    );
    era.println();
    await era.printAndWait([
      '这时出现治愈两人的，便是神户新闻杯时的后辈',
      tachyon.get_uma_sex_title(),
      '了',
    ]);
    await era.printAndWait([
      '那名后辈的',
      tachyon.get_uma_sex_title(),
      '，现在经常会跟着 ',
      tachyon.get_colored_name(),
      ' 一起锻炼',
    ]);
    await era.printAndWait([
      '而身为训练员的 ',
      me.get_colored_name(),
      ' 也不时会对',
      tachyon.sex,
      '做出指点',
    ]);
    await era.printAndWait([
      '正当 ',
      me.get_colored_name(),
      ' 无聊的盯着对方时，眼前忽然浮现了一张熟悉的脸庞',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '怎么？盯着人家看的那么起劲，不会是看上那孩子了吧？',
    );
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 慌忙摇头']);
    era.println();
    if (relation >= 0) {
      await tachyon.say_and_wait('呵呵……那孩子确实具有相当可观的可能性');
      await tachyon.say_and_wait([
        '……如果是以前的我的话，或许可能将',
        tachyon.sex,
        '当成Plan B的备选吧',
      ]);
      await tachyon.say_and_wait('但是整个Plan B，都是建立在PlanA不可行的备选');
      await tachyon.say_and_wait(['可别逐末忘本了，', callname]);
    } else {
      await tachyon.say_and_wait('别用那种眼神盯着我关注的后辈');
      await tachyon.say_and_wait('……像你这种人，就别去祸害别人了');
      await tachyon.say_and_wait('跟在我身边，算是给你的最大的怜悯了');
    }
    if (love >= 75) {
      era.println();
      await tachyon.say_and_wait('要是忘记的话，就让我重新让你的眼睛灼伤吧……');
      await tachyon.say_and_wait([
        '这次，会亮至炫目……直到你再也看不清其他',
        tachyon.get_uma_sex_title(),
        '的模样为止',
      ]);
    }
    era.println();
    await era.printAndWait([
      '这个，某种意义上来说是 ',
      tachyon.get_colored_name(),
      ' 的独占欲吗？',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 只能苦笑带过']);
    era.println();
    await era.printAndWait([
      '然而，今天的来客，却不只后辈的',
      tachyon.get_uma_sex_title(),
    ]);
    era.println();
    const coffee = get_chara_talk(25),
      c_call_m = sys_get_colored_callname(25, 0),
      c_call_t = sys_get_colored_callname(25, 32),
      t_call_c = sys_get_colored_callname(32, 25);
    await tachyon.say_and_wait('……哦呀');
    await coffee.say_and_wait([c_call_t, '……']);
    era.println();
    await era.printAndWait([
      coffee.get_colored_name(),
      '，',
      tachyon.get_colored_name(),
      ' Plan B的主选',
    ]);
    if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
      await era.printAndWait([
        '也是 ',
        me.get_colored_name(),
        ' 的负责',
        tachyon.get_uma_sex_title(),
      ]);
      await era.printAndWait([
        '与 ',
        me.get_colored_name(),
        ' 发誓，要一起追上朋友的重要的担当',
      ]);
    }
    era.println();
    await era.printAndWait(['不知为何忽然找上了 ', tachyon.get_colored_name()]);
    era.println();
    await tachyon.say_and_wait([
      t_call_c,
      '？是来接受我的实验的吗？要的话随时欢……',
    ]);
    await coffee.say_and_wait('不是……只是想，可以和我来场模拟赛吗？');
    await tachyon.say_and_wait('……模拟赛？');
    await coffee.say_and_wait('是的……无论如何，请务必');
    era.println();
    await era.printAndWait('……模拟赛的申请十分简单');
    if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
      await era.printAndWait([
        '更何况 ',
        me.get_colored_name(),
        ' 是',
        tachyon.sex,
        '们两人的训练员',
      ]);
    }
    await era.printAndWait('甚至不需要特殊安排，只需要租借场地就好');
    era.println();
    await era.printAndWait('申请的手续没过多久就放了下来');
    await era.printAndWait([
      '只有两人的赛道上，',
      me.get_colored_name(),
      ' 充当起跑的宣布者站在赛道旁',
    ]);
    await era.printAndWait('心中是不安与忐忑');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '，',
      tachyon.sex,
      '的目标是超越',
      tachyon.get_uma_sex_title(),
      '的极限',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '，',
      coffee.sex,
      '的目标是追上朋友的步伐',
    ]);
    era.println();
    await era.printAndWait('不知是命中注定的安排还是恶趣味的巧合，');
    await era.printAndWait(['这两人都将最终的目标选在有马纪念']);
    await era.printAndWait(
      '今天的模拟赛……虽然不知道原因为何，但大概可以视为那天的预演吧',
    );
    await era.printAndWait([
      '怀着各种复杂的心情，',
      me.get_colored_name(),
      ' 挥下了旗子',
    ]);
    era.drawLine();
    await tachyon.print_and_wait('第三弯道，然后……是最终直线');
    await tachyon.print_and_wait([t_call_c, ' 在左边？不，右边']);
    await tachyon.print_and_wait([t_call_c, ' 的跑法还是和以前一样……无法捉摸']);
    await tachyon.print_and_wait('但是，规律的话，还是能够抓到的');
    era.println();
    await tachyon.say_and_wait('就是这……什！？');
    era.println();
    await tachyon.print_and_wait('必须承认');
    await tachyon.print_and_wait('赛前的自己确实有些大意了');
    await tachyon.print_and_wait('作为Plan B的代替品');
    if (edu_marks.beat_c) {
      await tachyon.print_and_wait('除此之外还是曾经的手下败将');
    }
    await tachyon.print_and_wait('哪怕嘴上说的再好听');
    await tachyon.print_and_wait([
      '什么 ',
      coffee.get_colored_name(),
      ' 是独立的个体',
    ]);
    await tachyon.print_and_wait([
      '什么 ',
      coffee.get_colored_name(),
      ' 拥有不输给自己的才能',
    ]);
    await tachyon.print_and_wait('心中还是产生了几乎无法称之为傲慢的轻视');
    await tachyon.print_and_wait([
      '觉得伪物的',
      coffee.sex,
      '，怎么可能胜过状态绝佳的真物',
    ]);
    era.println();
    await tachyon.say_and_wait('跑法也好，速度也好……好陌生');
    era.println();
    await tachyon.print_and_wait('这也是当然');
    await tachyon.print_and_wait([
      '毕竟上一次，',
      tachyon.get_colored_name(),
      ' 仔细观察 ',
      coffee.get_colored_name(),
      ' 的跑法及速度，那已经是一年前的七月的事了',
    ]);
    era.println();
    await tachyon.print_and_wait(
      '天真的以为，在自己进步时对手会乖乖原地踏步的理论家必须付出小瞧对手的代价',
    );
    await tachyon.print_and_wait('……对手，吗？');
    era.println();
    await tachyon.print_and_wait('不是伪物');
    await tachyon.print_and_wait('不是替代品');
    await tachyon.print_and_wait('漆黑的猎犬，对傲慢研究者的脖子露出了尖牙');
    await tachyon.print_and_wait('以疼痛，以败北来证明自己的存在');
    await tachyon.print_and_wait([
      '证明自己，是足以与',
      tachyon.sex,
      '站在同个舞台上的「对手」',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……呵呵，想要胜过对手，想要赢过对方，想要超越某人……原来如此，原来是这样的感觉吗？',
    );
    era.println();
    await tachyon.print_and_wait('好吧，承认吧');
    await tachyon.print_and_wait([
      '这次是 ',
      tachyon.get_colored_name(),
      ' 败了',
    ]);
    await tachyon.print_and_wait('觉悟不足，研究不足，认真的程度不足');
    await tachyon.print_and_wait(
      '这种情况下要是还赢了，那才真是轻视了对方的努力',
    );
    await tachyon.print_and_wait(['不如说，还要感谢 ', t_call_c, ' 才对']);
    await tachyon.print_and_wait([
      '要是一直放着，直到有马纪念才发现这缺少的「最后一个要素」，那可没有再来一次的机会了',
    ]);
    await tachyon.print_and_wait('所以……');
    era.println();
    await tachyon.say_and_wait('啊啊……这次是我———');
    era.printButton('「速子不要输！」', 1);
    era.printButton('「茶座加油啊！」', 2, {
      disabled: era.get('cflag:25:招募状态') !== recruit_flags.yes,
    });
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('话到了嘴边，开不了口');
      await tachyon.print_and_wait([
        '如果是纯粹的 ',
        tachyon.get_colored_name(),
        ' 的话，那么承认眼前的败北应该也不是什么难事',
      ]);
      await tachyon.print_and_wait('比赛就和实验一样，没有一定成功的道理');
      await tachyon.print_and_wait(
        '但失败了也不要紧，吸取教训，重新来过，无非就是这样',
      );
      await tachyon.print_and_wait('更何况这只是一场模拟赛而已');
      era.println();
      await tachyon.print_and_wait('说服自己放弃的理由可以有很多');
      await tachyon.print_and_wait('说服自己坚持下去的理由只有一个');
      await tachyon.print_and_wait('但这一个理由，胜过其他全部');
      era.println();
      await tachyon.say_and_wait('我想要……想要赢下来！');
      era.println();
      await tachyon.print_and_wait('连自己都感到讶异的执着');
      await tachyon.print_and_wait([
        '如果是纯粹的 ',
        tachyon.get_colored_name(),
        '，此时一定能够干脆放弃',
      ]);
      await tachyon.print_and_wait(
        '但是，那个不受外界影响，纯粹冷酷的研究者已经不在了',
      );
      era.println();
      await tachyon.print_and_wait('在接纳他人的应援，受到他人的感染时');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 就已经不再纯粹了',
      ]);
      await tachyon.print_and_wait([
        '现在的 ',
        tachyon.get_colored_name(),
        '，是为了研究，为了超越极限',
      ]);
      await tachyon.print_and_wait('以及……');
      await tachyon.print_and_wait('那个无论哪一场比赛都跟在自己身旁的人');
      await tachyon.print_and_wait([
        '无论何时都能以 ',
        tachyon.get_colored_name(),
        ' 的要求为优先的人',
      ]);
      era.println();
      if (love >= 50) {
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' 是为了自己唯一的爱人而跑的',
        ]);
      } else if (relation > 225) {
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '，是为了与自己志同道合的同志而跑的',
        ]);
      } else {
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '，是为了自己唯一的实验动物而跑的',
        ]);
      }
      era.println();
      await tachyon.print_and_wait('反应是交互的，这是化学的基本定理');
      await tachyon.print_and_wait([
        '在名为 ',
        me.get_colored_actual_name(),
        ' 的豚鼠被 ',
        tachyon.get_colored_name(),
        ' 的跑法灼烧双眼的同时',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 也在接受',
        me.sex,
        '的声援同时，被',
        me.sex,
        '所改变',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '不想在',
        me.sex,
        '面前输掉……不想辜负',
        me.sex,
        '的信任……还有……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '不想，输给 ',
        coffee.get_colored_name(),
        '！',
      ]);
    } else {
      era.println();
      await tachyon.say_and_wait('————是我，输了');
      era.println();
      await tachyon.print_and_wait('但是，不是永远');
      await tachyon.print_and_wait('只有现在，只有这个瞬间承认');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 不如 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait('下一次，有马纪念');
      await tachyon.print_and_wait('自己会反过身来，以挑战者的身份');
      await tachyon.print_and_wait([
        '将 ',
        coffee.get_colored_name(),
        ' 的咽喉撕碎，嚼烂',
      ]);
      era.println();
      await tachyon.print_and_wait('啊啊……不停灼烧的热意');
      await tachyon.print_and_wait('怎么也消退不下去');
    }
    era.println();
    await tachyon.print_and_wait('身为研究者的傲气？');
    await tachyon.print_and_wait('对备用计划的轻视？');
    await tachyon.print_and_wait('不对，不是这样');
    await tachyon.print_and_wait('只是想要胜利，想要彻底的超越');
    await tachyon.print_and_wait(['不想输给 ', coffee.get_colored_name()]);
    await tachyon.print_and_wait(['想要赢过 ', coffee.get_colored_name()]);
    era.println();
    if (ret === 1) {
      await tachyon.say_and_wait('一定……要赢！');
      era.drawLine();
      await era.printAndWait([tachyon.get_colored_name(), ' 赢下了模拟赛']);
      await era.printAndWait('但是……只是极微小的差距');
      era.println();
      await tachyon.say_and_wait([
        '哈啊……哈啊……呼……呼哈哈哈！怎么样？',
        t_call_c,
        '，最后还是我赢了吧！',
      ]);
      await coffee.say_and_wait(
        '……请不要认为，现在就是我真正的实力了……这只是模拟赛而已',
      );
      await tachyon.say_and_wait(
        '哈哈哈！愉悦，愉悦，败犬不甘心的吠声真是不错……咕呜！',
      );
      await coffee.say_and_wait('…………给我记住');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 装模作样的高笑做到一半便在 ',
        coffee.get_colored_name(),
        ' 的瞪视下忽然噤了声，仿佛被无形的手捂住了口鼻一般',
      ]);
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await coffee.say_and_wait([
          c_call_m,
          '……等到……有马的时候，要是可以为我加油的话，我会很开心的',
        ]);
      }
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 头也不回的离开了训练场，留下 ',
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        '，以及虽然一直没有戏份但确实还在训练场上的',
        tachyon.get_uma_sex_title(),
        '后辈',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '速子前辈！真的太厉害了！',
      );
      await tachyon.say_and_wait([
        '……哼哼，这算不上什么，等到有马纪念再看吧，到时候会让你们都看见最极致的跑法！',
      ]);
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '速子前辈～～～～！',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 和后辈应付了几声后，后辈也离开了赛场',
      ]);
      await era.printAndWait('直到这时……');
      era.printButton(`「……可以了，${tachyon.sex}们都走了」`, 1);
      await era.input();
      await tachyon.say_and_wait('哈啊～～');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 忽然仿佛提着的一口气泻下来一般靠着 ',
        me.get_colored_name(),
        ' 瘫坐在地上',
      ]);
      await era.printAndWait([
        '一般这种情况 ',
        me.get_colored_name(),
        ' 会满脸担心的关心',
        tachyon.sex,
        '是不是有什么不舒服',
      ]);
      await era.printAndWait('但现在……');
      era.printButton('「辛苦了」', 1);
      era.printButton('「很累吧」', 2);
      await era.input();
      await era.printAndWait([
        '只有 ',
        me.get_colored_name(),
        ' 能够看出，在刚才的比赛中 ',
        tachyon.get_colored_name(),
        ' 真的拼尽了全力',
      ]);
      await era.printAndWait([
        '在 ',
        coffee.get_colored_name(),
        ' 的跑法及可能性的逼迫下，拼尽了全力，好不容易，才勉强，真的是勉强，',
      ]);
      await era.printAndWait('以几乎能称之为误差的差距胜出');
      era.println();
      await tachyon.say_and_wait([
        '嗯……',
        t_call_c,
        '……成长到，已经超乎我的想像了啊……',
      ]);
      await tachyon.say_and_wait([
        '我却还是……用原本的态度来对待',
        tachyon.sex,
        '……',
      ]);
    } else {
      await tachyon.print_and_wait('啊啊……这种感觉，就是……');
      era.drawLine();
      await era.printAndWait([tachyon.get_colored_name(), ' 输掉了模拟赛']);
      await era.printAndWait('但是，只是以极微小的差距败北');
      era.println();
      await coffee.say_and_wait('……如果只是这点程度的话，那，我很失望');
      await coffee.say_and_wait([
        '这样的 ',
        c_call_t,
        '，对我超越朋友的目标，没有任何助益……',
      ]);
      if (love >= 75) {
        await coffee.say_and_wait([
          '搞不懂……为什么 ',
          c_call_m,
          ' 会把时间浪费在你身上',
        ]);
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 贴在 ',
          me.get_colored_name(),
          ' 身旁，亲昵的动作和毫不留情的批评让 ',
          me.get_colored_name(),
          ' 产生了一些反差感',
        ]);
        await era.printAndWait([
          '刚跑完步身上淡淡的草香，以及微微的汗味搔痒着 ',
          me.get_colored_name(),
          ' 的嗅觉',
        ]);
        await era.printAndWait([
          '微微湿润的头发和喘完气有些红润的脸庞刺激着 ',
          me.get_colored_name(),
          ' 的视觉',
        ]);
        await era.printAndWait([
          '不由自主的，',
          me.get_colored_name(),
          ' 有些按耐不住自己的手',
        ]);
        era.println();
        await coffee.say_and_wait([
          c_call_m,
          '……要在这里吗？在 ',
          c_call_t,
          ' 面前……？',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 看着眼前趴在草地上还在喘气的 ',
          tachyon.get_colored_name(),
          '，回过神来',
        ]);
        await coffee.say_and_wait([
          c_call_m,
          '，刚刚的……如果可以的话，等一下请……',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 留下暧昧的话语之后便离开了',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 狠狠瞪了 ',
          me.get_colored_name(),
          ' 一眼',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 游移视线，有些不敢看',
          tachyon.sex,
        ]);
      }
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 离开后，',
        tachyon.get_colored_name(),
        ' 依然没从草地上起身',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 担忧的望着趴在草地上的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '……',
        t_call_c,
        ' 真的……成长到，已经超乎我的想像了啊……',
      ]);
      await tachyon.say_and_wait([
        '我却还是……用原本的态度来对待',
        tachyon.sex,
        '……',
      ]);
    }
    await tachyon.say_and_wait('……真是……羞愧啊……');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '喘着气说出的话，都是今天以前难以想像 ',
      tachyon.get_colored_name(),
      ' 会说出口的',
    ]);
    if (
      RaceHistory.get(32)
        .get_values()
        .findIndex((e) => e.rank !== 1) === -1
    ) {
      await era.printAndWait([
        '从未感受过败北的 ',
        tachyon.get_colored_name(),
        '，在那一刻真的体会到了败北的可能性',
      ]);
    } else {
      await era.printAndWait('哪怕是以前输过的比赛，都没有感受过如此的压迫感');
    }
    era.println();
    await tachyon.say_and_wait([
      '要是……要是刚才，我真的输给了 ',
      t_call_c,
      ' 的话',
    ]);
    await tachyon.say_and_wait(
      '一想到那种可能性，就感到全身颤抖……我在抗拒，抗拒那样的可能性',
    );
    await tachyon.say_and_wait([
      '不想输给 ',
      t_call_c,
      '……不甘心输给 ',
      t_call_c,
    ]);
    await tachyon.say_and_wait([
      '但是……心里却还在燃烧着，想要再次与 ',
      t_call_c,
      ' 分出胜负，想要从正面彻底击败',
      tachyon.sex,
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '抬头看向 ',
      me.get_colored_name(),
      ' 的眼睛',
    ]);
    await era.printAndWait([
      '比起以前令人沉迷发狂的光子般的目光，现在',
      tachyon.sex,
      '的双眸充斥着感情的波动',
    ]);
    await era.printAndWait([
      '仿佛燃烧的火炬，但这旺盛的火光，却比毫无波动的光子更加明亮夺目，也更加吸引 ',
      me.get_colored_name(),
      ' 的眼神',
    ]);
    era.println();
    await tachyon.say_and_wait('这就是……劲敌的感觉吗？');
    await tachyon.say_and_wait([
      '不是不甘心输掉……而是不甘心输给『',
      coffee.get_colored_name(),
      '』',
    ]);
    await tachyon.say_and_wait('一定是这样，不然怎么解释，这样的热度……');
    await tachyon.say_and_wait([
      '……现在马上回去吧！',
      callname,
      '！这就是了！就是这个！这就是最后缺少的东西了！',
    ]);
    era.println();
    await era.printAndWait(['年关将至，接下来，就是有马纪念了']);
    flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 5], 10);
  };
};
