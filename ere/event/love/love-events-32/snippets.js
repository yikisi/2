const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async stopped_clock(tachyon, me, callname) {
    era.drawLine();
    await print_event_name('停滞的时钟', tachyon);
    await tachyon.say_and_wait([
      '那么……首先就先来实验搭档上的磨合吧，',
      callname,
      '，要看好我的跑法啊，呵呵',
    ]);
    era.println();
    await era.printAndWait('果然……有什么不对劲');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的跑法，在看着',
      tachyon.sex,
      '奔跑的模样时察觉到了',
    ]);
    await era.printAndWait('明明跑的很快，明明是十分令人惊艳的跑法');
    await era.printAndWait([
      '但 ',
      me.get_colored_name(),
      ' 没有功夫去思考这些',
    ]);
    await era.printAndWait('没错，很快，很耀眼，但好象又不只这些');
    await era.printAndWait('好像……曾经见识过类似的跑法');
    await era.printAndWait([
      '仿佛水面的光源一般，在 ',
      me.get_colored_name(),
      ' 的脑海深处不断撩拨着，',
    ]);
    await era.printAndWait([
      '却总在 ',
      me.get_colored_name(),
      ' 努力游上水面的瞬间又消失的无影无蹤',
    ]);
    era.println();
    await me.say_and_wait('好奇怪……', true);
    era.println();
    await era.printAndWait([
      '正当 ',
      me.get_colored_name(),
      ' 苦恼的抓着头的时候………',
    ]);
    era.printButton('「！？」', 1);
    await era.input();
    await era.printAndWait('训练场上，忽然状况横生');
    await era.printAndWait([
      '说着只是让自己见识见识跑法的 ',
      tachyon.get_colored_name(),
      '，渐渐的，跑的越来越快',
    ]);
    await era.printAndWait('刚才那样……只是热身而已吗？');
    await era.printAndWait([
      '穿着普通体育服的 ',
      tachyon.get_colored_name(),
      '，在训练场上轻盈的奔跑着',
    ]);
    await era.printAndWait('越跑越快，越跑越快');
    await era.printAndWait([
      '不知为何，',
      me.get_colored_name(),
      ' 的心中忽然感到一阵急迫',
    ]);
    await era.printAndWait('一种焦急，以及一种迫切感');
    era.println();
    await era.printAndWait([
      '跑的这么快，',
      tachyon.get_colored_name(),
      ' ',
      tachyon.sex,
      '的腿，不会有问题吗？',
    ]);
    await era.printAndWait('……？为什么会有问题？');
    await era.printAndWait(['因为，', tachyon.sex, '的腿……']);
    await era.printAndWait([tachyon.sex, '的腿明明……那么脆弱']);
    await era.printAndWait(['为什么自己会知道', tachyon.sex, '的腿脆弱']);
    era.println();
    await era.printAndWait('不明白，但是，想要明白');
    await era.printAndWait([
      '想要搞清真相的迫切感驱使着 ',
      me.get_colored_name(),
      ' 不停思考',
    ]);
    await era.printAndWait([
      '仿佛衬托着 ',
      me.get_colored_name(),
      ' 思考的速度一般',
    ]);
    await era.printAndWait([tachyon.get_colored_name(), ' 也继续加速']);
    await era.printAndWait(['直到……', me.get_colored_name(), ' 的认知尽头']);
    await era.printAndWait('藏在脑海深处，最重要的东西');
    await era.printAndWait([tachyon.get_uma_sex_title(), '的极限速度']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 所知的，',
      tachyon.get_uma_sex_title(),
      '的极限',
    ]);
    await era.printAndWait(['————', tachyon.get_colored_name(), ' 的极限速度']);
    era.println();
    await era.printAndWait([
      '眼前的 ',
      tachyon.get_colored_name(),
      '，与脑海中那捉摸不定的光源渐渐结合在一起',
    ]);
    await era.printAndWait([
      '于是，',
      me.get_colored_name(),
      ' 最后一次尝试，朝着水面伸手',
    ]);
    await era.printAndWait('————————碰到了');
    await era.printAndWait('————————想起来了');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '，是 ',
      me.get_colored_actual_name(),
      ' 的负责',
      tachyon.get_uma_sex_title(),
    ]);
    await era.printAndWait('回想起了相遇的事，比赛的事，还有……');
    era.println();
    await era.printAndWait('还有……？');
    await era.printAndWait('不知道');
    await era.printAndWait('忘记了');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '，是自己的负责',
      tachyon.get_uma_sex_title(),
    ]);
    await era.printAndWait([
      me.get_colored_actual_name(),
      '，是 ',
      tachyon.get_colored_name(),
      ' 的豚鼠君',
    ]);
    await era.printAndWait('目前为止没有错误');
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), ' 在比赛中的点点滴滴']);
    await era.printAndWait([tachyon.sex, '跑步的每个细节自己都记得一清二楚']);
    await era.printAndWait('但是……');
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), ' 喜欢什么']);
    await era.printAndWait([tachyon.get_colored_name(), ' 的生活习惯']);
    await era.printAndWait([tachyon.get_colored_name(), ' 的兴趣']);
    await era.printAndWait([tachyon.get_colored_name(), ' 的生活打扮']);
    await era.printAndWait(
      '除了不知为何残留在脑海中，或许是与比赛管理相关而留下的饮食喜好相关，',
    );
    await era.printAndWait('其他的一切都仿佛从来没接触过一般');
    era.println();
    await era.printAndWait('不自然');
    await era.printAndWait('只能感到不自然');
    await era.printAndWait('认识了这么久，有过如此多的接触交流');
    await era.printAndWait(['对', tachyon.sex, '的比赛和跑法能够如此如数家珍']);
    await era.printAndWait([
      '却仍然好像对 ',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.get_uma_sex_title(),
      '没有任何了解一般',
    ]);
    era.println();
    await tachyon.say_and_wait(['呼……那么，豚鼠君，觉得如何？']);
    era.printButton('「跑的很好！」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 下意识的回答了记忆中多次回覆过的答案',
    ]);
    await era.printAndWait('总觉得有些奇怪');
    await era.printAndWait('不理解到底发生了什么');
    await era.printAndWait('但是……');
    era.println();
    await era.printAndWait('在回忆起那些的瞬间');
    await era.printAndWait('心中很确信，一定听见了一句话');
    era.println();
    era.printButton(`「这一次，不要再辜负${tachyon.sex}的心意了」`, 1);
    await era.input();
    await era.printAndWait('究竟是什么意思呢……好好思考一下吧');
  },
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   */
  async time_return(tachyon, me) {
    const secretary = get_chara_talk(301),
      chairman = get_chara_talk(302);
    era.drawLine();
    await print_event_name('时光倒流', tachyon);
    await era.printAndWait('仿佛顺理成章一般');
    await era.printAndWait([
      me.get_colored_name(),
      ' 和莫名有着熟悉感的栗毛',
      tachyon.get_uma_sex_title(),
      '———',
      tachyon.get_colored_name(),
      ' 签订了契约',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 想着必须要去登记契约才行，于是前去找了 ',
      secretary.get_colored_name(),
      ' 与 ',
      chairman.get_colored_name(),
    ]);
    await era.printAndWait([
      '…………为什么',
      secretary.sex,
      '们会以一种悲伤的眼神看着自己',
    ]);
    await secretary.say_and_wait('我能理解，又是那孩子的药吧……');
    await era.printAndWait('什么意思，那孩子是谁？');
    await chairman.say_and_wait([
      '节哀！相信 ',
      me.actual_name,
      ' 训练员一定会很快恢复记忆的',
    ]);
    await era.printAndWait([
      '这又是什么意思……',
      secretary.sex,
      '们知道 ',
      me.get_colored_name(),
      ' 失忆了？难道说 ',
      me.get_colored_name(),
      ' 失忆或发生同等级的意外其实是很常见的事吗？',
    ]);
    era.println();
    await era.printAndWait('不明所以……就当成这样吧');
    await era.printAndWait([
      '总之，',
      me.get_colored_name(),
      ' 与 ',
      tachyon.get_colored_name(),
      ' 的育成开始了！',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   */
  async be_common(tachyon, me) {
    await tachyon.say_as_unknown_and_wait('……醒');
    await tachyon.say_as_unknown_and_wait('………醒醒');
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 醒来了']);
    await era.printAndWait([
      '被某个声音所唤醒的 ',
      me.get_colored_name(),
      '，发现自己睁开眼睛看见的是一个陌生的天花板',
    ]);
    era.printButton('「这里是哪里？」', 1);
    await era.input();
    await tachyon.say_as_unknown_and_wait('……这里是我的实验室');
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 看向声音传来的方向']);
    await era.printAndWait([
      '眼前是一名栗毛的',
      tachyon.get_uma_sex_title(),
      '，利落的短发以及身上的白大褂说明了',
      tachyon.sex,
      '研究者的身份，',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '用一种审视的眼光看着 ',
      me.get_colored_name(),
      '，不知为何，',
      me.get_colored_name(),
      ' 感到一股毛骨悚然',
    ]);
    era.printButton('「你是谁？」', 1);
    await era.input();
    await tachyon.say_as_unknown_and_wait(
      '这个问题应该是我问你才对……你是什么人？为什么你会躺在我的实验室里？',
    );
    await era.printAndWait(['栗毛', tachyon.get_uma_sex_title(), '说道']);
    await era.printAndWait([
      '这时 ',
      me.get_colored_name(),
      ' 才发现自己还躺在地板上，连忙爬了起来',
    ]);
    era.printButton(`「我是 ${me.actual_name}，是一名训练员」`, 1);
    await era.input();
    await tachyon.say_as_unknown_and_wait(
      '…………哦？那么训练员君，你躺在这里又有何贵干',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 试着回想在躺在这里前 ',
      me.get_colored_name(),
      ' 究竟在做什么，却怎么也想不出来',
    ]);
    era.println();
    await tachyon.say_as_unknown_and_wait(
      '…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……',
    );
    await tachyon.say_as_unknown_and_wait([
      '算了，不提这个，总之，我是 ',
      tachyon.get_colored_name(),
      '，训练员君，请多指教',
    ]);
    era.println();
    await era.printAndWait([tachyon.get_colored_name()]);
  },
};
