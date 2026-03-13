const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string):Promise<boolean|void>>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[race_enum.begin_race] = async (coffee, me, callname) => {
    if (era.get('cflag:25:育成回合计时') >= 48) {
      return true;
    }
    await print_event_name('迎向出道战', coffee);
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
    await coffee.say_and_wait('……找到了……！在终点板的更前方，就在那里等着我。');
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

  handlers[race_enum.hoch_sho] = async (coffee, me) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.hoch_sho].get_colored_name()],
      coffee,
    );
    await era.printAndWait([
      '今天是 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '，但在选手通道内的 ',
      coffee.get_colored_name(),
      ' 却显得有些憔悴。',
    ]);
    era.printButton('「很紧张吗？」', 1);
    await era.input();
    await era.printAndWait([
      '听到 ',
      me.get_colored_name(),
      ' 的询问，',
      coffee.get_colored_name(),
      ' 摇了摇头。',
    ]);
    if (sys_reg_race(32).curr.race === race_enum.hoch_sho) {
      await coffee.say_and_wait([
        '昨晚到现在……我一直，都在思考如何战胜 ',
        sys_get_colored_callname(25, 32),
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
      me.get_colored_name(),
      ' 现在能做的只有一件事。',
    ]);
    era.printButton('「加油。」', 1);
    await era.input();
    await era.printAndWait([
      '对 ',
      me.get_colored_name(),
      ' 的话语轻轻点头，',
      coffee.get_colored_name(),
      ' 走向了赛场。',
    ]);
  };

  handlers[race_enum.toky_yus] = async (coffee, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.toky_yus].get_colored_name()],
      coffee,
    );
    await era.printAndWait([
      race_infos[race_enum.toky_yus].get_colored_name(),
      '——为了这场一生一次的比赛，',
      coffee.get_colored_name(),
      ' 进行了许多严苛的训练。',
    ]);
    await era.printAndWait('而如今便到了收获的时刻。');
    await coffee.say_and_wait([callname, '……我上了。']);
    await era.printAndWait([
      '选手通道内，',
      me.get_colored_name(),
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

  handlers[race_enum.stli_kin] = async (coffee, me) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.stli_kin].get_colored_name()],
      coffee,
    );
    era.printButton('「茶座，感觉身体如何？」', 1);
    await era.input();
    await coffee.say_and_wait('感觉……身体的深处和之前不一样……');
    await coffee.say_and_wait(
      '没有奇妙的蠢蠢欲动……像是身体、确实属于我自己一样……',
    );
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
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
        race_infos[race_enum.kiku_sho].get_colored_name(),
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
        race_infos[race_enum.kiku_sho].get_colored_name(),
        ' 就会有胜算呢……？',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
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

  handlers[race_enum.kiku_sho] = async (coffee, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.kiku_sho].get_colored_name()],
      coffee,
    );
    await coffee.say_and_wait('…………');
    if (check_tachyon_plan_b()) {
      await get_chara_talk(32).say_and_wait('…………');
    }
    era.printButton('「…………」', 1);
    await era.input();
    await era.printAndWait(
      '选手通道内，在场的人都一言不发。因为彼此都清楚今天的比赛有多么重要。',
    );
    await era.printAndWait([
      '——',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '，一生一次的比赛，不同于之前任何比赛的3000米长距离赛道。',
    ]);
    await era.printAndWait([
      '最快的赛',
      coffee.uma_sex_title,
      '赢得 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '，最幸运的赛',
      coffee.uma_sex_title,
      '赢得 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '，而最强的赛',
      coffee.uma_sex_title,
      '将赢得 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
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

  handlers[race_enum.tenn_spr] = async (coffee, me) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.tenn_spr].get_colored_name()],
      coffee,
    );
    await era.printAndWait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 的比赛日。',
    ]);
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
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '哟，',
        sys_get_colored_callname(32, 25),
        ' 和 ',
        sys_get_callname(32, 0),
        '。表情真吓人啊。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 的另一个担当，同时也是这场比赛的参赛选手，从身后走出。',
      ]);
      await coffee.say_and_wait([
        sys_get_colored_callname(25, 32),
        '……就算你参加了也别想能阻挠我……',
      ]);
      await tachyon.say_and_wait([
        '哈哈，阻挠你吗？……别在比赛开始前就觉得自己赢定了啊，',
        coffee.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('针锋相对的两人，唯有在赛场上见真章了。');
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 默默看着 ',
        coffee.get_colored_name(),
        ' 那异常严峻的表情。',
      ]);
      await era.printAndWait([
        '如果可以的话……真想告诉',
        coffee.sex,
        '不要去追朋友了——这种话当然是说不出口的，毕竟这是 ',
        me.get_colored_name(),
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

  handlers[race_enum.takz_kin] = async (coffee, me) => {
    if (era.get('cflag:25:育成回合计时') < 96) {
      return true;
    }
    await print_event_name(
      ['迎向 ', race_infos[race_enum.takz_kin].get_colored_name()],
      coffee,
    );
    await era.printAndWait([
      '虽然在机场那天发生的事让 ',
      me.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 两人陷入了一段略微有点尴尬的冷战期，但由于互相坦白了内心真正的想法，在经过一定时间的沉淀后，',
      me.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 的关系和好如初，甚至愈发深刻。',
    ]);
    await era.printAndWait([
      coffee.sex,
      '逐渐从沮丧中振作，也比以前更常露出笑容，然后——',
    ]);
    await era.printAndWait([
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 前的选手通道内。',
    ]);
    await coffee.say_and_wait([
      race_infos[race_enum.takz_kin].get_colored_name(),
      '……这里……就是我的新起点……',
    ]);
    await coffee.say_and_wait('尽管朋友不在……我也一定会——');
    await coffee.say_and_wait('——！？');
    era.printButton('「怎么了？」', 1);
    await era.input();
    await coffee.say_and_wait('朋友！就在通道出口那里……没有离开，在等着我！');
    await era.printAndWait([
      '朋友……不是应该去了法国，在 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
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
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
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
        race_infos[race_enum.takz_kin].get_colored_name(),
        ' 上超越你……然后，在 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 上超越你的朋友。',
      ]);
      await coffee.say_and_wait('……能做到的话，就尽管试试吧……！');
      await era.printAndWait([
        '两人之间弥漫着火药味。而这针锋相对的两人，即将在 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        ' 迎来最后的对决。',
      ]);
    }
  };

  handlers[race_enum.japa_cup] = async (coffee, me, callname) => {
    if (era.get('cflag:25:育成回合计时') < 96) {
      return true;
    }
    await print_event_name(
      ['迎向 ', race_infos[race_enum.japa_cup].get_colored_name()],
      coffee,
    );
    await era.printAndWait([
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 当天，选手通道内。',
    ]);
    await era.printAndWait([
      '因意外而相遇的 ',
      me.get_couple_title(),
      ' 终于走到了这里。',
    ]);
    await coffee.say_and_wait('…………');
    await era.printAndWait([
      '和 ',
      me.get_colored_name(),
      ' 并肩走着的 ',
      coffee.get_colored_name(),
      ' 突然停下了脚步，与回头查看的 ',
      me.get_colored_name(),
      ' 四目相对。',
    ]);
    era.printButton('「紧张了吗？」', 1);
    await era.input();
    await coffee.say_and_wait('……并不是紧张，只是……');
    if (check_tachyon_plan_b()) {
      await coffee.say_and_wait([
        '在看到 ',
        sys_get_colored_callname(25, 32),
        ' 的 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
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
        me.get_colored_name(),
        ' 的嘴唇。',
      ]);
      await era.printAndWait([
        '仿佛在商店街小巷的那天一样，',
        coffee.get_colored_name(),
        ' 的双手不自觉地绕上了 ',
        me.get_colored_name(),
        ' 的颈后，在双唇的深处交换着各自的爱意。',
      ]);
      await era.printAndWait([
        '良久，两人终于分开，相视一笑，随即奔向 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        ' 的赛场。',
      ]);
    } else {
      await coffee.say_and_wait([callname, '……能给我一个拥抱吗？']);
      await era.printAndWait([
        '敞开双手，',
        coffee.get_colored_name(),
        ' 向前一步抱上了 ',
        me.get_colored_name(),
        '，两人都没有其他动作，只是静静地感受着对方的温度。',
      ]);
      await era.printAndWait([
        '良久，两人松开了手，随即奔向 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        ' 的赛场。',
      ]);
    }
  };

  handlers[race_enum.arim_kin] = async (coffee, me, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.arim_kin].get_colored_name()],
      coffee,
    );
    if (era.get('cflag:25:育成回合计时') < 96) {
      await era.printAndWait([
        race_infos[race_enum.arim_kin].get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '这是 ',
        coffee.get_colored_name(),
        ' 今年的最后一场比赛，同时也宣告了',
        coffee.sex,
        '经典级的结束。',
      ]);
      await era.printAndWait([
        '选手通道内，',
        me.get_colored_name(),
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
    } else {
      era.printButton('「……这就是最后了。」', 1);
      await era.input();
      await coffee.say_and_wait('……是啊，时间过得好快……');
      await era.printAndWait([
        '选手通道内，',
        me.get_colored_name(),
        ' 正与 ',
        coffee.get_colored_name(),
        ' 做着 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 前最后的交流。',
      ]);
      await coffee.say_and_wait([callname, '，麻烦一下……']);
      await era.printAndWait([
        '说罢，',
        coffee.get_colored_name(),
        ' 抓起了 ',
        me.get_colored_name(),
        ' 的手，按在了自己的胸口上。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 有力的心跳透过柔软抵达手心，这一刻 ',
        me.get_colored_name(),
        ' 充分感受到了，',
        coffee.get_colored_name(),
        ' 这一存在是如此的鲜活、如此的美妙。',
      ]);
      await coffee.say_and_wait('……好暖和……稍微感到安心了点……');
      await coffee.say_and_wait([
        '在这场 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 结束后……我们也要一直在一起，',
        callname,
        '……',
      ]);
      era.printButton('「不会分开的。」', 1);
      await era.input();
      await era.printAndWait([
        '得到 ',
        me.get_colored_name(),
        ' 肯定的回复后，',
        coffee.get_colored_name(),
        ' 松开了 ',
        me.get_colored_name(),
        ' 的手，微笑着离开了选手通道。',
      ]);
      await era.printAndWait([
        '怀抱着三年来与 ',
        me.get_colored_name(),
        ' 的点点回忆，',
        coffee.get_colored_name(),
        ' 走向了最后的闸门。',
      ]);
    }
  };
};
