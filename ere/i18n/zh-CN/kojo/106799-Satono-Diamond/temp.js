const era = require('#/era-electron');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

module.exports = {
  ws_39: (() => {
    const title = '现在还太遥远';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} dictus 生野狄杜斯
     * @param {CharaTalk} pama 目白善信
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} sats_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (daiya, nature, dictus, pama, you, sats_sho, toky_yus) => {
      await era.printAndWait(
        `今天 ${you.name} 和里见光钻一起，来观战北部玄驹即将出赛的「菊花赏』。`,
      );
      await daiya.say_and_wait('啊，小北她们出来了！');
      await daiya.say_and_wait('咦……？小北好像没什么精神的样子……？');
      await daiya.say_and_wait('是因为紧张的关系吗……？');
      await nature.print_and_wait(
        '？？？「……应该是因为那个人没有参赛的关系吧。」',
      );
      await era.printAndWait(
        `优秀素质突然从人群中出现。据说${daiya.sex}是里见光钻刚入学时，为${daiya.sex}举办迎新会的其中一个前辈。`,
      );
      await daiya.say_and_wait([
        '啊……！一定是的，跑赢了 ',
        sats_sho,
        ' 和 ',
        toky_yus,
        ' 的那个人……',
      ]);
      await nature.say_and_wait(
        `没错，${nature.sex}今天没有参赛。毕竟北部可是为了在『菊花赏』赢过她而特别努力至今的呢。`,
      );
      await nature.say_and_wait(
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
      await nature.say_and_wait('……天啊，原来北部也是拥有主角光环的人啊……');
      await daiya.say_and_wait(
        '不过……小北在最后争抢跑道的时候，似乎有点陷入苦战的感觉呢……',
      );
      await daiya.say_and_wait(
        '……若换作是我，因为要用尾段加速拼胜负，为了避免被困在内侧，会在第四弯道的时候绕去外侧，然后……',
      );
      await nature.say_and_wait('…………不是吧？哇～这边这位也是耀眼得不得了啊～');
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
        `里见光钻相当积极地这么说道。然而，${you.name} 现在不打算让还在新马级的${daiya.sex}做负担较大的训练。`,
      );
      await era.printAndWait(
        `于是 ${you.name} 向${daiya.sex}说明，在身体成长完全前承受太大负担是可能受伤的。`,
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
      await era.printAndWait(`${daiya.sex}对 ${you.name} 的提议非常感兴趣。`);
      await daiya.say_and_wait('开始吧，第一个魔咒是什么呢！？');
      era.drawLine();
      await era.printAndWait(
        `学园魔咒其一『在顶楼玩翁仔标，赢了的人会在下楼时滑倒』。在 ${you.name} 赶紧拿出翁仔标的同时──`,
      );
      await pama.print_and_wait('？？？「咦？这不是里见和训练员嘛！」');
      await pama.say_and_wait(
        '干嘛干嘛？要玩翁仔标的话也算上我吧！我刚好正觉得无聊呢──！',
      );
      await era.printAndWait(
        `向你们搭话的人是目白善信。生野狄杜斯和优秀素质也在一旁。`,
      );
      await daiya.say_and_wait(
        '你愿意一起玩的话，当然好呀！其实呢，我们现在正在做破除魔咒的训练喔。',
      );
      await nature.say_and_wait('……啊？破除魔咒的训练？什么意思啊？');
      await pama.say_and_wait('原来如此，是这么一回事啊。那我们也来帮忙吧！');
      await dictus.say_and_wait(
        '嗯，是啊。说到学园的魔咒，虽然不多，但我也知道大概十个左右的魔咒。',
      );
      await dictus.say_and_wait(
        '现在这里的魔咒是『在顶楼玩翁仔标，赢了的人会在下楼时滑倒』对吧。',
      );
      await dictus.say_and_wait(
        '只要里见玩赢了翁仔标，又在下楼的时候没有滑倒的话，就应该算是破除魔咒了。',
      );
      await pama.say_and_wait('这么一说，素质你很会玩翁仔标对吧！');
      await nature.say_and_wait(
        '也没有很会玩啦……只是比较常玩而已。那么，里见很会玩翁仔标吗？',
      );
      await daiya.say_and_wait('虽然我没什么经验，但我会努力的！');
      await pama.say_and_wait('……这样看来，光是要玩赢素质可能就不是很容易了。');
      await daiya.say_and_wait('──到了！');
      await pama.say_and_wait('喔喔～！下楼梯完全都没有滑倒呢！');
      await daiya.say_and_wait('嘿嘿！第一个魔咒被我破除了！');
      era.drawLine();
      await dictus.say_and_wait(
        '贩卖部的魔咒『买到最后一瓶果汁的人会倒楣一整天』。',
      );
      await daiya.say_and_wait('啊，这刚好是最后一瓶呢。');
      await dictus.say_and_wait(
        '要判断运气好坏……就让我跟里见一起抽签看结果吧。',
      );
      await nature.say_and_wait(
        '──生野抽到四奖，里见抽到一等奖。哎呀──运气真是好耶。',
      );
      await daiya.say_and_wait('嘿嘿！第二个魔咒被我破除了！成功了～！！');
      era.drawLine();
      await daiya.say_and_wait(
        '──这样就是破除第十个魔咒了！成功连续破除十个魔咒了！！',
      );
      await pama.say_and_wait(
        '竟然可以破除十个魔咒。里见真是太厉害了……令人佩服。',
      );
      await daiya.say_and_wait('呵呵，过奖了。');
      await pama.say_and_wait(
        '才没有，不管是魔咒还是家族的梦想，从来都不逃避且认真面对的里见是真的很棒。',
      );
      await pama.say_and_wait('就这一点来看的话，你跟麦昆有点像呢。');
      await daiya.say_and_wait('真的吗！？我好开心喔！');
      await daiya.say_and_wait('我……很崇拜麦昆。');
      await daiya.say_and_wait(
        '自律地朝着目标迈进，无论面对多庞大的压力也不被动摇，凛然且坚定的姿态是我的目标。',
      );
      await daiya.say_and_wait(
        '就像麦昆背负并完成目白家的使命那样，我也想要实现里见家的宿愿。',
      );
      await pama.say_and_wait(
        '呵呵，麦昆对为了家族的梦想而努力的里见也总是很赞赏喔。',
      );
      await daiya.say_and_wait(
        '我还差得远呢。到现在也还没创下特别厉害的成绩。',
      );
      await nature.say_and_wait(
        `……感觉……拥有主角光环的赛${daiya.uma_sex_title}其实好像也不是那么轻松的样子呢……`,
      );
      await pama.say_and_wait(
        '我们也会帮你加油的。里见你要加油喔！千万不能认输！',
      );
      await daiya.say_and_wait('好的！谢谢！');
    };
    f.title = title;
    return f;
  })(),
  t: (() => {
    const title = '';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 里见光钻对玩家的称呼
     */
    const f = async (daiya, me, callname) => {};
    f.title = title;
    return f;
  })(),
  t: (() => {
    const title = '';
    /**
     * @param {CharaTalk} daiya 里见光钻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 里见光钻对玩家的称呼
     */
    const f = async (daiya, me, callname) => {};
    f.title = title;
    return f;
  })(),
};
