const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[39] = async (daiya, me, flags) => {
    await print_event_name('现在还太遥远', daiya);
    const nice_nature = get_chara_talk(60);
    const dictus = get_chara_talk(63);
    const palmer = get_chara_talk(64);
    await era.printAndWait(
      `今天 ${me.name} 和里见光钻一起，来观战北部玄驹即将出赛的「菊花赏』。`,
    );
    await daiya.say_and_wait('啊，小北她们出来了！');
    await daiya.say_and_wait('咦……？小北好像没什么精神的样子……？');
    await daiya.say_and_wait('是因为紧张的关系吗……？');
    await nice_nature.print_and_wait(
      '？？？「……应该是因为那个人没有参赛的关系吧。」',
    );
    await era.printAndWait(
      `优秀素质突然从人群中出现。据说${daiya.sex}是里见光钻刚入学时，为${daiya.sex}举办迎新会的其中一个前辈。`,
    );
    await daiya.say_and_wait([
      '啊……！一定是的，跑赢了 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 的那个人……',
    ]);
    await nice_nature.say_and_wait(
      `没错，${nice_nature.sex}今天没有参赛。毕竟北部可是为了在『菊花赏』赢过她而特别努力至今的呢。`,
    );
    await nice_nature.say_and_wait(
      '这样一定会觉得很提不起劲……而且你看，会场中还弥漫着一股主角缺席的氛围。',
    );
    await daiya.say_and_wait('主角缺席什么的……');
    await daiya.say_and_wait('……唔！');
    await daiya.say_and_wait('小北──！！');
    await daiya.say_and_wait('啊……！');
    await daiya.say_and_wait(
      '小北现在看起来很专注呢……看来我们的担心是多余的喔！',
    );
    await daiya.say_and_wait(
      `${daiya.sex}一定会展现出让大家觉得她才是今天主角的表现！`,
    );
    await era.printAndWait(
      '实况「这是场祭典！淀的祭典！北部的祭典开始了！称霸『菊花赏』的是北部玄驹──！」',
    );
    await daiya.say_and_wait('好厉害……！真不愧是小北！！');
    await nice_nature.say_and_wait('……天啊，原来北部也是拥有主角光环的人啊……');
    await daiya.say_and_wait(
      '不过……小北在最后争抢跑道的时候，似乎有点陷入苦战的感觉呢……',
    );
    await daiya.say_and_wait(
      '……若换作是我，因为要用尾段加速拼胜负，为了避免被困在内侧，会在第四弯道的时候绕去外侧，然后……',
    );
    await nice_nature.say_and_wait(
      '…………不是吧？哇～这边这位也是耀眼得不得了啊～',
    );
    await era.printAndWait('然后，观战完『菊花赏』后的隔天──');
    era.printButton('「今天的训练项目到此结束！」', 1);
    await era.input();
    await daiya.say_and_wait(
      '训练员，我还可以继续！刚好我也想加强自己的持久力……就拜托你帮我增加额外训练了！！',
    );
    era.printButton('「现在还不是加强持久力的阶段」', 1);
    await era.input();
    await daiya.say_and_wait('那不然做坡道冲刺的训练怎么样呢！？');
    await era.printAndWait(
      `里见光钻相当积极地这么说道。然而，${me.name} 现在不打算让还在新马级的${daiya.sex}做负担较大的训练。`,
    );
    await era.printAndWait(
      `于是 ${me.name} 向${daiya.sex}说明，在身体成长完全前承受太大负担是可能受伤的。`,
    );
    await daiya.say_and_wait(
      '啊……这么说也是。抱歉……可能是因为看了小北在『菊花赏』的表现，就觉得自己也应该要更加努力了……',
    );
    await era.printAndWait(
      `看来${daiya.sex}似乎是受到了昨天比赛的刺激。现在充满了干劲。`,
    );
    await era.printAndWait(
      `既然如此，在不造成身体负担的状况下，让${daiya.sex}好好地释放能量的话──`,
    );
    era.printButton('「要不要做破除学园魔咒的训练呢？」', 1);
    await era.input();
    await daiya.say_and_wait('我要做！！');
    await daiya.say_and_wait('那我们立刻出发吧！你说的魔咒在哪里呢！？');
    await era.printAndWait(`${daiya.sex}对 ${me.name} 的提议非常感兴趣。`);
    await daiya.say_and_wait('开始吧，第一个魔咒是什么呢！？');
    era.drawLine();
    await era.printAndWait(
      `学园魔咒其一『在顶楼玩翁仔标，赢了的人会在下楼时滑倒』。在 ${me.name} 赶紧拿出翁仔标的同时──`,
    );
    await palmer.print_and_wait('？？？「咦？这不是里见和训练员嘛！」');
    await palmer.say_and_wait(
      '干嘛干嘛？要玩翁仔标的话也算上我吧！我刚好正觉得无聊呢──！',
    );
    await era.printAndWait(
      `向你们搭话的人是目白善信。生野狄杜斯和优秀素质也在一旁。`,
    );
    await daiya.say_and_wait(
      '你愿意一起玩的话，当然好呀！其实呢，我们现在正在做破除魔咒的训练喔。',
    );
    await nice_nature.say_and_wait('……啊？破除魔咒的训练？什么意思啊？');
    await palmer.say_and_wait('原来如此，是这么一回事啊。那我们也来帮忙吧！');
    await dictus.say_and_wait(
      '嗯，是啊。说到学园的魔咒，虽然不多，但我也知道大概十个左右的魔咒。',
    );
    await dictus.say_and_wait(
      '现在这里的魔咒是『在顶楼玩翁仔标，赢了的人会在下楼时滑倒』对吧。',
    );
    await dictus.say_and_wait(
      '只要里见玩赢了翁仔标，又在下楼的时候没有滑倒的话，就应该算是破除魔咒了。',
    );
    await palmer.say_and_wait('这么一说，素质你很会玩翁仔标对吧！');
    await nice_nature.say_and_wait(
      '也没有很会玩啦……只是比较常玩而已。那么，里见很会玩翁仔标吗？',
    );
    await daiya.say_and_wait('虽然我没什么经验，但我会努力的！');
    await palmer.say_and_wait('……这样看来，光是要玩赢素质可能就不是很容易了。');
    await daiya.say_and_wait('──到了！');
    await palmer.say_and_wait('喔喔～！下楼梯完全都没有滑倒呢！');
    await daiya.say_and_wait('嘿嘿！第一个魔咒被我破除了！');
    era.drawLine();
    await dictus.say_and_wait(
      '贩卖部的魔咒『买到最后一瓶果汁的人会倒楣一整天』。',
    );
    await daiya.say_and_wait('啊，这刚好是最后一瓶呢。');
    await dictus.say_and_wait('要判断运气好坏……就让我跟里见一起抽签看结果吧。');
    await nice_nature.say_and_wait(
      '──生野抽到四奖，里见抽到一等奖。哎呀──运气真是好耶。',
    );
    await daiya.say_and_wait('嘿嘿！第二个魔咒被我破除了！成功了～！！');
    era.drawLine();
    await daiya.say_and_wait(
      '──这样就是破除第十个魔咒了！成功连续破除十个魔咒了！！',
    );
    await palmer.say_and_wait(
      '竟然可以破除十个魔咒。里见真是太厉害了……令人佩服。',
    );
    await daiya.say_and_wait('呵呵，过奖了。');
    await palmer.say_and_wait(
      '才没有，不管是魔咒还是家族的梦想，从来都不逃避且认真面对的里见是真的很棒。',
    );
    await palmer.say_and_wait('就这一点来看的话，你跟麦昆有点像呢。');
    await daiya.say_and_wait('真的吗！？我好开心喔！');
    await daiya.say_and_wait('我……很崇拜麦昆。');
    await daiya.say_and_wait(
      '自律地朝着目标迈进，无论面对多庞大的压力也不被动摇，凛然且坚定的姿态是我的目标。',
    );
    await daiya.say_and_wait(
      '就像麦昆背负并完成目白家的使命那样，我也想要实现里见家的宿愿。',
    );
    await palmer.say_and_wait(
      '呵呵，麦昆对为了家族的梦想而努力的里见也总是很赞赏喔。',
    );
    await daiya.say_and_wait('我还差得远呢。到现在也还没创下特别厉害的成绩。');
    await nice_nature.say_and_wait(
      `……感觉……拥有主角光环的赛${daiya.uma_sex_title}其实好像也不是那么轻松的样子呢……`,
    );
    await palmer.say_and_wait(
      '我们也会帮你加油的。里见你要加油喔！千万不能认输！',
    );
    await daiya.say_and_wait('好的！谢谢！');
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[47 + 1] = async (daiya, me, flags) => {
    await print_event_name('新年抱负', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait('训练员！');
    await kita.say_and_wait('小钻的训练员！');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      '「新年参拜，到时还请多多指教！」',
    ]);
    await era.printAndWait(
      `这是来自于两人充满热情的，今年的第一个请求。为了许下新年愿望，你们三人一同前往神社。`,
    );
    await daiya.say_and_wait('嗯～～我要许什么愿望好呢。');
    era.printButton('「难道不是在经典三冠获得胜利吗？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '那是我自己要做到的事情。不应该来求神明帮我实现。',
    );
    era.printButton('「破除魔咒呢？」', 1);
    await era.input();
    await daiya.say_and_wait('我会凭自己的力量战胜魔咒的！');
    await daiya.say_and_wait(
      '……每次都是像这样，到了要跟神明许愿的时候都不知道该求什么，每年都会烦恼很久……',
    );
    await era.printAndWait(
      `于是 ${me.name} 向${daiya.sex}提议，向神明宣示『今年的抱负』。`,
    );
    await daiya.say_and_wait(
      '这是个好提议呢！既然都跟神明宣示了，就绝对没有不做到的道理了！',
    );
    await daiya.say_and_wait('也就是必胜祈愿，不对，是必胜使命！');
    await era.printAndWait(
      `……看来${daiya.sex}势必是要向神明立下一个非常沉重的誓言了吧。`,
    );
    await daiya.say_and_wait(
      '今年的抱负……只是跑赢经典三冠的话，这也太过理所当然了。',
    );
    await daiya.say_and_wait(
      `身为里见家的赛${daiya.uma_sex_title}，一个知名赛${daiya.uma_sex_title}应该要有怎样的表现……`,
    );
    await daiya.say_and_wait('我想要成为的模样──', true);
    await daiya.say_and_wait('我应该要特别注重的事情……', true);
    await daiya.say_and_wait('我要坚定自信地跑出能够自豪的表现。');
    await daiya.say_and_wait(
      '就像麦昆一样充满尊严与荣耀。我要展现里见家代表的气度，让所有人看见。',
    );
    era.printButton('「这很像你的作风，我觉得很好」', 1);
    await era.input();
    await era.printAndWait(
      `跑出如同钻石般尊贵气度的表现。正因为是从小就接受一流教育的${daiya.sex}才会有的抱负。`,
    );
    await daiya.say_and_wait(
      '小北，你看起来已经决定好了呢。那我们就一起跟神明许愿吧。',
    );
    await kita.say_and_wait('嗯……！');
    await kita.say_and_wait(
      '『春季资深三冠』……！我一定要好好表现，让更多的人为我加油！然后带给大家笑容！',
    );
    await daiya.say_and_wait(
      `我会跑赢『经典三冠』！身为里见家的赛${daiya.uma_sex_title}，我发誓会带给大家非常耀眼的表现！`,
    );
    await era.printAndWait(
      `虽然${daiya.couple_title}的目标赛事不同，但彼此眼神中的光芒却是一样的──`,
    );
    await era.printAndWait(
      `在走到分岔路前都要并肩前进的态度，让 ${me.name} 深刻感受到${daiya.couple_title}从小到大的好交情。`,
    );
    await kita.say_and_wait(
      '嘿嘿！我现在也慢慢地越来越受到瞩目了喔！所以我要为了得到更多人支持，更努力表现！',
    );
    await daiya.say_and_wait(
      '哎呀，我可是也要不负钻石之名，跑出让大家都为之倾倒的表现呢。',
    );
    await kita.say_and_wait(
      '唔……！我会比你先在『春季资深三冠』迷倒大家好不好！',
    );
    await daiya.say_and_wait(
      '唔……等到我的『经典三冠』的时候，大家的注意力就会转到我身上了！',
    );
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      '「唔唔～～～赢的人会是我！！唔唔～～～赢的人会是我啦！！」',
    ]);
    await kita.say_and_wait('那就用新年对战来一较高下吧！');
    era.printButton('「你们两个都冷静一点……！」', 1);
    await era.input();
    await daiya.say_and_wait('训练员不用担心。新年对战是我们每年的惯例。');
    await daiya.say_and_wait('用来一较高下是最适合不过的了！');
    await era.printAndWait(
      '两人都越来越激动，完全没有要停止对抗的意思。算了，既然是每年的惯例，应该不危险吧……',
    );
    await daiya.say_and_wait('对战的内容就由训练员来决定好了！');
    await kita.say_and_wait('麻烦了！请一定要想一个能让我们全力决胜负的事情！');
    await era.printAndWait(
      `能让${daiya.couple_title}两个都拿出全力又符合新年气氛的对决……`,
    );
    era.printButton('「当长距离接力赛的啦啦队」', 1);
    era.printButton('「在撒年糕仪式捡年糕」', 2);
    era.printButton('「放风筝」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await kita.say_and_wait(
        `说的是『新春赛${daiya.uma_sex_title}长距离接力赛』吧！现在这个时间的话……就快要经过这附近了！`,
      );
      await daiya.say_and_wait('比看谁更会加油是吧！那就交给训练员当裁判了！');
      era.printButton('「好！」', 1);
      await era.input();
      await daiya.say_and_wait('啊，看到领先集团了！');
      await kita.say_and_wait(
        '加油啊────！！后面的人要追上来了！现在是关键时刻啊！',
      );
      await daiya.say_and_wait(
        '可以的，一定可以追上的！！没错，就是这样！保持这个步调！',
      );
      await era.printAndWait(
        `领先集团的赛${daiya.uma_sex_title}们以飞快的速度跑过我们的面前。`,
      );
      await kita.say_and_wait('好，赶去下一个加油地点吧！');
      await daiya.say_and_wait('接下来是上山路！');
      era.printButton('「……什么！？」', 1);
      await era.input();
      await kita.say_and_wait(
        '上坡的时候大家都一样辛苦！一定要撑住！不要输啊！！',
      );
      await daiya.say_and_wait(
        '现在最重要的是忍耐！一定不可以逞强，要维持住自己的步调！！',
      );
      await daiya.say_and_wait('移动去下一个地点吧！');
      era.printButton('「等等！？是要跟到什么时候……！」', 1);
      await era.input();
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「最后一段路了────！！超前啊──────！！」',
      ]);
      await era.printAndWait(
        '活动实况「两队几乎同时冲过终点────！！直到最后一刻都互不相让！！」',
      );
      await kita.say_and_wait('啊──好过瘾喔！流了好多汗呢～！');
      await daiya.say_and_wait(
        '不小心跟着一起太兴奋了！──对了，啦啦队的胜负判决是……',
      );
      era.printButton('「…………唔！…………唔唔！！」', 1);
      await era.input();
      await era.printAndWait(
        `……看来不用担心${daiya.couple_title}会在新年期间变胖，真是太好了。`,
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    } else if (ret === 2) {
      await daiya.say_and_wait('撒年糕仪式……？');
      await kita.say_and_wait(
        '那是会朝参拜客丢年糕的活动！所以我们是要比谁捡的多对吧？',
      );
      await daiya.say_and_wait('原来如此，所以只要捡很多年糕就可以了吧！');
      await era.printAndWait('撒年糕的工作人员「我──────撒！」');
      await era.printAndWait('人群「呀────！哇啊啊啊啊啊！」');
      await kita.say_and_wait('感觉会掉很多在那边！冲啊────！！');
      await daiya.say_and_wait('咦？咦……呀！');
      await daiya.say_and_wait(
        `被……被人群给推出来了……赛${daiya.uma_sex_title}区跟一般大众区，两边都……挤满了人……`,
      );
      era.printButton('「你在后面的地上找找看」', 1);
      await era.input();
      await era.printAndWait(
        '大家的目光都集中在正要撒下的年糕上。落在比较远处跟接失败的年糕，意外地大家并没有特别注意到。',
      );
      await daiya.say_and_wait('啊，真的呢！后面的地上有好多喔！');
      await daiya.say_and_wait('好──我一定要捡很多回来！');
      await daiya.say_and_wait('嘿嘿嘿，捡到了好多呢！');
      await kita.say_and_wait(
        '大丰收大丰收～哈啊～啊啊♪回去做成红豆汤来吃好了！',
      );
      await daiya.say_and_wait('嗯！');
      await era.printAndWait(
        `你们在回程的路上买了红豆，回到学园后，三个人一起享用了很多红豆汤。`,
      );
      era.println();
      flags.wait =
        get_attr_and_print_in_event(67, undefined, 0, [200]) || flags.wait;
    } else {
      await daiya.say_and_wait(
        '放风『蒸』！听起来好像很好吃呢！所以是要比谁吃的多吗？',
      );
      await kita.say_and_wait('啊──小钻。不是用蒸的，是要把风筝放到天上飞啦。');
      await daiya.say_and_wait(
        '啊啊，原来是这样呀！那我有在电视上看过！比放风筝呀，感觉会很有趣呢！',
      );
      await kita.say_and_wait(
        '那我先过去那边放啰！我们两个谁放得比较好，就交给小钻的训练员来当裁判了！',
      );
      await era.printAndWait(
        `因为里见光钻似乎没有放风筝的经验，所以 ${me.name} 先示范给${daiya.sex}看。`,
      );
      await daiya.say_and_wait(
        '嗯嗯……线要像这样控制……助跑的时候还要注意风向……',
      );
      await kita.say_and_wait('喝啊啊────────！！');
      await kita.say_and_wait('喝啊──────！！…………奇怪～？');
      await kita.say_and_wait('奇怪了，怎么都放不起来啊。');
      await daiya.say_and_wait('呵呵，接下来就换我啰！');
      await era.printAndWait(
        `里见光钻轻轻地小跑步，风筝也跟着轻盈地飞上空中。${daiya.sex}配合风向调整助跑方向得到了好结果。`,
      );
      await kita.say_and_wait('哇啊，小钻好厉害喔！好──我也要！');
      await kita.say_and_wait('嘿呀──────！！……啊！飞起来了飞起来了！');
      await daiya.say_and_wait(
        '就等你放成功呢，小北！接下来才是要决胜负的时候！',
      );
      await era.printAndWait(
        '重视理论与技巧的里见光钻。凭着气势和韧性的北部玄驹。',
      );
      await era.printAndWait(
        '虽然双方因为个性不同而放法不同，但两人的风筝都恣意地在空中飘荡着。',
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, undefined, 30) || flags.wait;
    }
    era.set('cflag:67:节日事件标记', 0);
  };

  handlers[47 + 29] = async (daiya, _, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:67:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    const kita = get_chara_talk(68);
    await print_event_name('夏季集训（经典年）开始！', daiya);
    await era.printAndWait('今天开始，就是期待已久的『夏季集训』了！');
    await daiya.say_and_wait(
      '我会在这个夏季集训里，练就不被魔咒左右的强大实力！',
    );
    await era.printAndWait(
      '为了练就强大的实力，我们计划在夏季集训着重做基础训练。先把体能的基础给打好是很重要的。',
    );
    await era.printAndWait(
      '锻炼出足以跑完『菊花赏』3000米的持久力也是这次的课题。',
    );
    await kita.say_as_unknown_and_wait('小钻──！');
    await kita.say_and_wait('欸欸，我们快点去房间了啦！');
    await daiya.say_and_wait('真是的，小北怎么这么兴奋呀。');
    await kita.say_and_wait(
      '因为来到了海边啊！我真的觉得好期待喔！今年也一定要好好地锻炼～！',
    );
    await daiya.say_and_wait('喔──！');
    await kita.say_and_wait('啊哈哈，小钻自己还不是也很兴奋嘛！');
    await daiya.say_and_wait(
      '呵呵，我当然也是充满干劲的呀。因为『菊花赏』我一定要赢。',
    );
    await daiya.say_and_wait(
      '我要在小北跑赢过的『菊花赏』拿下胜利……破除里见家的魔咒……成为有资格当小北劲敌的自己！',
    );
    await kita.say_and_wait('小钻……！没错！为了将来我们能跑同一场比赛。');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      '「加油，喔──！」',
    ]);
    await era.printAndWait(
      '两人充满干劲的声音响彻了这个夏天的天空。──感觉会是一次非常热血的夏季集训。',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[47 + 31] = async (daiya, me, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:67:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    await print_event_name('夏季集训（经典年）途中', daiya);
    const kita = get_chara_talk(68);
    const nice_nature = get_chara_talk(60);
    const tannhauser = get_chara_talk(62);
    const dictus = get_chara_talk(63);
    const palmer = get_chara_talk(64);
    const helios = get_chara_talk(65);
    const turbo = get_chara_talk(66);
    await daiya.say_and_wait('呼、呼……配速跑……跑完了……');
    era.printButton('「辛苦了，休息吧」', 1);
    await era.input();
    await daiya.say_and_wait('是……');
    await era.printAndWait(
      '夏季集训已经过了一半的这天。里见光钻的动作明显地感觉比较迟钝。',
    );
    await era.printAndWait(
      `酷暑下做训练特别消耗体力。或许是连续这样锻炼让${daiya.sex}疲劳了吧。`,
    );
    await kita.say_as_unknown_and_wait('喝啊啊啊啊──！');
    await kita.say_and_wait('呼，跑完十趟了！感觉越来越轻松了呢～');
    await kita.say_and_wait('好──把负重加倍之后再练一组吧──！');
    await daiya.say_and_wait('……训练员，进入下一个训练项目吧！');
    era.printButton('「还是再多休息一下比较好……」', 1);
    await era.input();
    await daiya.say_and_wait('不，我没关系！那我就开始训练啰！');
    era.drawLine();
    await daiya.say_and_wait('呼、呼、呼……');
    era.printButton('「上午的训练就到此为止吧」', 1);
    await era.input();
    await daiya.say_and_wait('可、可是……原本订定的训练还没做完……');
    await era.printAndWait(
      `${me.name} 向${daiya.sex}说明，在疲惫的状态下继续训练也不会有什么效果。事实上现在的成绩就是下滑了非常多。`,
    );
    await daiya.say_and_wait(
      '要是因为身体达到极限就停止……是没办法抵达更远的目标的！要获得凌驾于魔咒之上的实力就要更拼命！！',
    );
    await daiya.say_and_wait('况且，小北都还在努力呢！我也不可以输给她！');
    await era.printAndWait(
      `${
        daiya.sex
      }的目光停留在离你们一段距离，流着满身大汗却仍旧一个接一个完成训练的北部玄驹身上。`,
    );
    await era.printAndWait(
      `但 ${me.name} 还是认为北部玄驹那种凭着气势和意志力，以超越极限为目标的训练方式并不适合里见光钻。`,
    );
    await daiya.say_and_wait('训练员，如果需要的话，这些可以让你参考。');
    await daiya.say_and_wait(
      '这是以前指导我的老师们所统整的我所受过的训练内容的资料。里面还包含了成绩数据跟比赛影片。',
    );
    await daiya.say_and_wait(
      '里见家的训练环境用的都是最新科技的机器，所以数据的准确性也是非常高的。',
    );
    await era.printAndWait(
      `一直以来${daiya.sex}都是在非常良好的环境下做训练。因为没什么在酷暑下训练的经验，不习惯的环境让${daiya.sex}消耗了更多的体力与精神。`,
    );
    era.printButton('「总之先吃午饭吧」', 1);
    await era.input();
    await daiya.say_and_wait('……是……');
    await turbo.say_as_unknown_and_wait('欸欸欸欸！里见！还有那位训练员！');
    await turbo.say_and_wait('涡轮来陪你一起做训练吧！');
    await daiya.say_and_wait('……咦？涡轮？');
    await turbo.say_and_wait('可以大家一起做的训练！我让里见你也一起加入吧！');
    await dictus.say_and_wait('涡轮，你不要这么急。还是由我来说明一下。');
    await era.printAndWait(
      `正当觉得一头雾水的时候，那些里见光钻提起过的『为${daiya.sex}办新生欢迎会的前辈们』一个接一个出现。`,
    );
    await era.printAndWait(
      '不只是生野狄杜斯，今天还有双涡轮、待兼诗歌剧，和大拓太阳神也在。',
    );
    await dictus.say_and_wait('里见，不介意的话，要不要和我们一起共同训练呢？');
    await dictus.say_and_wait(
      '可以跟多数人交流也算是夏季集训的一大优点。要不要趁这个机会试试看？',
    );
    await daiya.say_and_wait('原来如此……');
    await palmer.say_and_wait(
      '你也不用想得太复杂。其实在去年的时候，帝王她们也帮了北部，所以──',
    );
    await turbo.say_and_wait(
      '只有帝王可以帮忙，太不公平了！涡轮也想要当──前──辈──！',
    );
    await palmer.say_and_wait('就是这个状况啰，你愿意一起的话也算是帮大忙了。');
    await turbo.say_and_wait(
      '可以吧！好啦，里见！好啦──好啦──好啦──好啦──！！',
    );
    await nice_nature.say_and_wait(
      '如果你不嫌弃的话，能不能让我们跟你一起训练呢？',
    );
    await daiya.say_and_wait('这个嘛……该怎么办好呢？训练员。');
    era.printButton('「是打算要做什么样的训练呢？」', 1);
    await era.input();
    await dictus.say_and_wait('是有这两种选项──');
    await era.printAndWait(
      '从生野狄杜斯提出的方案来看──原来如此，都是能控制体力不要过度消耗，在不逞强的状态下进行的训练内容。',
    );
    await era.printAndWait(
      '更重要的是看起来就很有趣，说不定还能达到转换心情的效果。',
    );
    era.printButton('「那就麻烦让我们加入共同训练了」', 1);
    await era.input();
    await turbo.say_and_wait('太棒啦──！！里见，一切就都交给涡轮前辈吧────！');
    await daiya.say_and_wait('呵呵呵，那就要麻烦你啰！涡轮前辈♪');
    await tannhauser.say_and_wait(
      '既然决定好了，那就该吃午饭了～♪吃咖喱吗？还是吃炒面？不然就两种都吃～？',
    );
    await helios.say_and_wait(
      '欧耶☆要吃当然就要全吃啊！规定所有人都要吃完三道！',
    );
    await nice_nature.say_and_wait('你们怎么那么快啊！？');
    await dictus.say_and_wait('那就等吃完午饭之后再集合吧。');
    await dictus.say_and_wait(
      '那我们要做哪种训练比较好呢？训练员有比较想选哪一个吗？',
    );
    await era.printAndWait('以里见光钻目前的状态来说，最适合的训练是──');
    era.printButton('「用沙堆出一个隧道」', 1);
    era.printButton('「飘很久的纸排球赛」', 2);
    if ((await era.input()) === 1) {
      await dictus.say_and_wait(
        '要用沙堆隧道啊。我已经向海之家取得店附近沙滩的使用权了。出发吧。',
      );
      await daiya.say_and_wait(
        '那个～我有个问题。用沙堆隧道这件事真的能算是训练吗？',
      );
      await nice_nature.say_and_wait(
        '绝对算喔──因为我们要做的是我们能通过的隧道。',
      );
      await nice_nature.say_and_wait(
        '而且还要挖很多做隧道要用的沙。需要不停、不停、不停地挖。',
      );
      await daiya.say_and_wait('原来如此……这样听起来的确能锻炼到呢！');
      await daiya.say_and_wait('呼，这些应该就够了吧？');
      await tannhauser.say_and_wait(
        '嗯，感觉不错喔～要小心不要掉到自己挖出来的沙坑里喔！',
      );
      await dictus.say_and_wait('诗歌剧，你自己也要小心不要掉下去喔。');
      await tannhauser.say_and_wait('啊！对耶～！……我会『小熏』的……');
      await tannhauser.say_and_wait(
        '那么──接下来是要做地基吧。要在沙子里面加很～多的水，再踩踏定型。',
      );
      await tannhauser.say_and_wait(
        '把沙子堆到隧道需要的高度，然后踩踏、再堆、再踏……跟着我一起做──♪',
      );
      await era.printAndWait('众人「隧道完成了～！」');
      await daiya.say_and_wait('哇啊～！还真的可以通过呢！');
      await palmer.say_and_wait('以外行人的技术来说，算是完成度很高了！');
      await nice_nature.say_and_wait('呼～做完之后才瞬间觉得好累喔……');
      await daiya.say_and_wait(
        '我们一直反复地挖沙跟搬运海水，然后又一直踩踏沙堆……一直劳动到现在嘛。',
      );
      await daiya.say_and_wait('不过，我玩得很开心喔！');
      await era.printAndWait(
        '打造沙隧道不仅是一个锻炼力量的好训练，似乎也达到了转换心情的效果。',
      );
      await turbo.say_and_wait(
        '嘿嘿嘿──那就要进入最后环节啦！一起破坏它吧～～！！',
      );
      await daiya.say_and_wait('……什么！？');
      await nice_nature.say_and_wait(
        '我知道你想说什么，但我们总不能让沙滩留下这么多坑洞吧。',
      );
      await era.printAndWait(
        '沙隧道就这样瞬间崩塌，化为乌有。让这个共同训练成为了一个有点苦涩的回忆。',
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    } else {
      await dictus.say_and_wait(
        '是的，我们会用纸气球代替一般的排球。等实际试过一次你就会明白了。',
      );
      await dictus.say_and_wait('那么，第一战！由善信&太阳神与里见&涡轮对战！');
      era.printButton('「太阳」', 1);
      await era.input();
      await era.printAndWait([
        palmer.get_colored_name(),
        '&',
        helios.get_colored_name(),
        '「欧耶欧耶☆」',
      ]);
      await turbo.say_and_wait('里见，跟着涡轮就对了──！');
      await daiya.say_and_wait('是～～♪');
      await palmer.say_and_wait('我要发球啰～！嘿──！');
      await era.printAndWait(
        `纸气球被${daiya.sex}拍到了高空……却迟迟都不落下来。`,
      );
      await turbo.say_and_wait(
        '好──来吧来吧来吧来吧！来吧来吧…………还没要来吗────！？',
      );
      await daiya.say_and_wait(
        '降落位置应该是这附近……哎哟！风向变了……！一定要过网呀……！',
      );
      await daiya.say_and_wait('啊……没过网……');
      await turbo.say_and_wait('搞什么嘛──！这气球有够慢的！！');
      await daiya.say_and_wait(
        '飘很久……原来是这么一回事呀。因为纸气球比一般排球的重量轻很多，所以飘在空中的时间更长。',
      );
      await daiya.say_and_wait(
        '再加上需要控制力道去拍打，才能把球给打过网，所以，等同于需要静止不动地等待。',
      );
      await palmer.say_and_wait(
        '没错，一定要很有耐心地等到正确时机，再用适当的力道拍打，需要够冷静才能做到。',
      );
      await helios.say_and_wait(
        '有时候还会被风吹得很远！会被逼得要跑来跑去的，超爆笑☆',
      );
      await daiya.say_and_wait('等待正确的时机……这跟比赛时的进攻时机一样呢。');
      await daiya.say_and_wait(
        '不被周遭影响，耐心等到属于自己的最佳时机，这需要相当的忍耐力。感觉会是一个很好的训练呢！',
      );
      await era.printAndWait(
        '于是──里见光钻冷静地掌握了风向和纸气球的降落速度，成功赢得了比赛。',
      );
      await dictus.say_and_wait(
        '表现得很好，由其是里见。遇到任何状况都不受影响的精神力，真的让我感到很佩服。',
      );
      await daiya.say_and_wait(
        '嘿嘿，不小心投入在比赛里面了。我玩得很开心喔！',
      );
      await era.printAndWait(
        '里见光钻似乎在共同训练中锻炼到忍耐力，并且也成功转换了心情。',
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
    }
  };

  handlers[47 + 34] = async (daiya, me, flags) => {
    await print_event_name('困住我的东西', daiya);
    const mcqueen = get_chara_talk(13);
    await daiya.say_and_wait('喝啊啊啊啊啊啊──！');
    await daiya.say_and_wait('呼、呼……还不够，光这样是赢不了的……');
    await daiya.say_and_wait(
      '要在『菊花赏』赢得胜利，就一定要变强到无论遇到什么突发状况都不受影响的程度……！',
    );
    await era.printAndWait(
      `里见光钻为了『菊花赏』连续好多天都努力地投入训练。每一天都能感受到${daiya.sex}的成长。`,
    );
    await era.printAndWait(
      '身体状况调整得很好，但里见光钻的精神状态似乎陷入了非常紧绷的状况。',
    );
    await era.printAndWait(
      `尤其是${daiya.sex}现在经常把『要练就克制魔咒的实力』这句话挂在嘴边。`,
    );
    await daiya.say_and_wait('呼、呼……呼！');
    await daiya.say_and_wait(
      '训练员，坡道冲刺这个部分，我现在已经算是可以轻松地完成了。',
    );
    era.printButton('「还能再跑两趟吗？」', 1);
    await era.input();
    await daiya.say_and_wait('是，那我就先去多跑一趟看看吧！');
    await era.printAndWait(
      '会这么执着于魔咒，或许是因为背负着里见家的期望吧。既然如此──',
    );
    await era.printAndWait(`去找『${daiya.sex}』帮忙看看好了。`);
    await mcqueen.say_and_wait('今天请多指教了，里见。');
    await daiya.say_and_wait('麦、麦……麦昆！？麦昆愿意陪我一起做训练吗！？');
    era.printButton('「可以从她身上学到很多东西吧。」', 1);
    await era.input();
    await daiya.say_and_wait('是的！！麦昆，谢谢你愿意给我这么宝贵的机会！');
    await mcqueen.say_and_wait(
      '呵呵，不用这么拘束。我也能从你身上获得激励嘛。',
    );
    await mcqueen.say_and_wait(
      '好了，时间有限。我们就稍微跑个耐力跑来热身，之后再来并跑练习吧。',
    );
    await daiya.say_and_wait('麻烦你多多指教了！');
    await era.printAndWait('两人「喝啊啊啊啊啊！喝啊啊啊啊啊！」');
    await daiya.say_and_wait('呼、呼……就只差一点点而已了说……');
    await mcqueen.say_and_wait(
      '前期被拉开太多距离了呢。要针对能够依照领先对手的步调去调整进攻方式的模式多做训练比较好。',
    );
    await daiya.say_and_wait('的确……托你的福，让我知道自己不足的部分！');
    await mcqueen.say_and_wait(
      '呵呵，这样是再好不过的了。最后就用长跑训练作为缓和运动吧。',
    );
    await daiya.say_and_wait('是！');
    await era.printAndWait(
      '里见光钻的表情看起来非常开朗。已经完全看不到原本紧绷的神色。',
    );
    await era.printAndWait(
      `${me.name} 估算着际遇相近的目白麦昆，或许就能明白里见光钻的心情。看来找${daiya.sex}帮忙是找对了。`,
    );
    await daiya.say_and_wait('呼、呼…………啊！抱歉，麦昆！');
    await mcqueen.say_and_wait('怎么了吗？');
    await daiya.say_and_wait(
      '我看到了卖蜂蜜蜜饮的餐车！那个……我可以去买一下吗？',
    );
    await mcqueen.say_and_wait(
      '哎呀，真的呢。那我们就在这里暂时休息，补充水分吧。',
    );
    await daiya.say_and_wait('谢谢你！');
    await mcqueen.say_and_wait('……里见，你买了真大一杯啊……');
    await daiya.say_and_wait('嘿嘿嘿，其实这个摊贩有个很有名的魔咒喔。');
    await daiya.say_and_wait(
      '据说只要在比赛前喝一杯『LL杯的蜂蜜柠檬 · 蜂蜜偏软 · 特浓 · 特多』就会输掉比赛的魔咒！',
    );
    await daiya.say_and_wait(
      '所以我才想故意在『菊花赏』之前喝一杯，挑战破除这个魔咒！',
    );
    await mcqueen.say_and_wait('破除魔咒……？');
    await daiya.say_and_wait([
      '其实我一直被 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '、',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 和魔咒影响──',
    ]);
    await mcqueen.say_and_wait([
      '──原来如此，所以你才会对 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 抱有更想要破除魔咒的决心。',
    ]);
    await daiya.say_and_wait([
      '是的！我绝不会向魔咒低头的！我要在 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 的时候证明这件事！',
    ]);
    await mcqueen.say_and_wait(
      '你为了不输给魔咒而努力的心态，真的是非常了不起。',
    );
    await mcqueen.say_and_wait('可是──');
    await mcqueen.say_and_wait(
      '会不会你总是把运气不好当作是魔咒，所以才会失去平常心，容易受到影响呢？',
    );
    await daiya.say_and_wait('咦……？');
    await mcqueen.say_and_wait(
      '比赛的时候，尤其是跑长距离的时候，就更需要保持平常心来坚定自己的跑法。',
    );
    await mcqueen.say_and_wait(
      '一旦受到影响就会缺乏专注力，心理的负担也会造成体力的额外消耗。导致没有足够的从容去展现出自己的跑法。',
    );
    await mcqueen.say_and_wait(
      '我也有过类似这样的经验。在重要的比赛发生运气不好的事情。',
    );
    await daiya.say_and_wait('麦昆也有……啊……');
    await daiya.say_and_wait([
      '是指 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 的事情吗……？',
    ]);
    await mcqueen.say_and_wait(
      '是的……那场比赛，是关系到我能否达成连霸的重要比赛。',
    );
    await mcqueen.say_and_wait(
      '在进闸门之前，因为觉得右脚卡卡的，检查之后……发现是蹄铁脱落了。',
    );
    await daiya.say_and_wait(
      '我知道这件事。当时因为蹄铁的一半都歪掉了……你还是现场立刻重新调整的对吧。',
    );
    await mcqueen.say_and_wait(
      '没有错，但当时的我并没有把蹄铁脱落看作是运气不好。',
    );
    await mcqueen.say_and_wait(
      '就只是冷静地专注在重新装钉蹄铁上。等到比赛开始后──',
    );
    await mcqueen.say_and_wait(
      '我的注意力不在右脚的蹄铁上，也不在当时公认的劲敌──帝王身上。',
    );
    await mcqueen.say_and_wait('为了跑赢，我只专注在自己的跑步上。');
    await mcqueen.say_and_wait(
      '我专注在自己的跑步上，跑完了3200米。所以我才能赢得那场比赛。',
    );
    await daiya.say_and_wait('……只专注自己的跑步……');
    await daiya.say_and_wait([
      '我……在 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 的时候，因为鞋子坏了，所以是穿备用的鞋子去跑的。比赛的时候也一直在意鞋子的问题……',
    ]);
    await daiya.say_and_wait(
      '完全没办法专心比赛，没能完全发挥应有的实力让我很不甘心……',
    );
    await mcqueen.say_and_wait('哎呀，所以你其实早就明白这个道理了嘛。');
    await daiya.say_and_wait('……因为我过于执着魔咒，所以反被魔咒所困了……？');
    await daiya.say_and_wait('没有那么在意魔咒的话，就不会被魔咒绑手绑脚……');
    await mcqueen.say_and_wait('我是这么认为的。');
    await daiya.say_and_wait('……我从来没有想过是这样……但仔细一想，的确是……');
    await daiya.say_and_wait(
      '……麦昆总是能维持坚定不受影响的实力，背后的原因，我似乎能明白了……',
    );
    await daiya.say_and_wait(
      '因为你总是只专注在自己的跑步和目标上……所以才可以随时随地都凛然又坚定。',
    );
    await daiya.say_and_wait(
      '算是脚踏实地的一种吧。嘿嘿嘿，果然麦昆真的是很了不起的一个人呢！',
    );
    await mcqueen.say_and_wait('你这么说是我的荣幸。');
    await mcqueen.say_and_wait(
      '还有……所谓的魔咒，其实大多都是从结果论衍生出来的。',
    );
    await mcqueen.say_and_wait(
      '如果当时我在那场比赛中跑输了，或许就也会被说成是魔咒的关系了也不一定，但只要跑赢了，就没有被说是魔咒的空间了。',
    );
    await daiya.say_and_wait(
      '这么说起来还真是这样呢！那这个喝了蜂蜜柠檬就会跑输比赛的魔咒其实……',
    );
    await mcqueen.say_and_wait(
      '我想……会不会是因为喝这个变胖的关系呢？毕竟这么喝的确是摄取过多热量了，加上柠檬会盖掉大部分的甜味。',
    );
    await daiya.say_and_wait('…………');
    await daiya.say_and_wait('呃……我、我已经整杯都喝完了……');
    await daiya.say_and_wait(
      '训……训练员！！刚刚那杯蜂蜜柠檬的热量……麻烦你帮我追加额外训练让我消耗热量吧～！',
    );
    era.drawLine({ content: '隔天' });
    await daiya.say_and_wait([
      '我……在昨天晚上，把 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 之前该完成的课题列出来了。',
    ]);
    await daiya.say_and_wait(
      '3000米的步调分配、争抢跑道的研究、进攻状况的模拟……我还需要更强大的持久力。',
    );
    await daiya.say_and_wait(
      '需要完成的课题还有一大堆呢！已经没有多余的时间去在意魔咒的事情了！',
    );
    await daiya.say_and_wait(
      '我一定要完成里见光钻的跑法！然后，一定要在『菊花赏』赢得胜利！',
    );
    await era.printAndWait(
      '里见光钻用非常爽朗的表情，坚定且自信地立誓要取得胜利。',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };
};
