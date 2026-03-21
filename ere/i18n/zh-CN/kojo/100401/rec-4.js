/**
 * @file 丸善斯基 - 招募
 * @author 黑奴一号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_start(maru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 试着和 ',
      maru.get_colored_name(),
      ' 搭话。',
    ]);
    era.println();
    you.say([
      maru.get_colored_name(),
      ' 你的话一定可以成为无败的三冠',
      maru.uma_sex_title,
      '的，请加入我的队伍吧。',
    ]);
    await maru.say_and_wait([
      '啊啦，虽然我也觉得能成为三冠',
      maru.uma_sex_title,
      '是件好事呢，不过呢，训练员君是不是太高估我了呢……虽然很对不起，不过我不能与你签约……不过这么自信的训练员君，一定能找到合适的担当呢。',
    ]);
    await you.say_and_wait(['被 ', maru.get_colored_name(), ' 拒绝了啊'], true);
  },
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   */
  async rec_leave_playground(maru, you) {
    await era.printAndWait(
      `${you.name} 想离开训练场时，${maru.name} 却向${you.name}搭话了。`,
    );
    era.println();
    maru.say(
      '请问这边的这位训练员君，能占用你一点时间吗？是不是也是来找合适的担当的呢。',
    );
    era.print(
      `${you.name} 为了物色合适的马娘来到了特雷森的赛场里观看选拔赛，名为${maru.name}的马娘，在这场选拔赛里一骑绝尘，远远的将其他马娘甩在了后面。比赛时她看上去像是一辆开足了马力的红色跑车。不过最吸引你的还是她在奔跑时所露出的满足神情。`,
    );
    maru.say(
      '嗯……所以训练员君也是来找能夺得三冠，甚至是以海外为舞台，夺得凯旋门赏的马娘吗？',
    );
    era.print(
      `${you.name} 摇了摇头，那道因享受着风与自由而露出满足神情的红色身影不知为何深深刻在了你的脑海里。`,
    );
    maru.say('啊啦，真是个奇怪的训练员呢……');
    era.print(`${maru.name}露出了烦恼的神情，不过很快恢复的之前的姿态`);
    maru.say('不好意思，请问训练员君在寻找什么样的马娘呢？');
    era.print(
      `${you.name} 坦率地向 ${maru.name} 说出了自己看着她奔跑时的满足姿态入迷的事情。`,
    );
    await maru.say_and_wait(
      '……这样吗，你的确是个奇怪的训练员呢。那么，之后也请多多看我奔跑时的姿态吧。',
    );
  },
  /**
   * @param {CharaTalk} maru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_rooftop(maru, you, callname) {
    await era.printAndWait(`${you.name} 前往天台时，又遇到了 ${maru.name}。`);
    await maru.say_and_wait([
      '……嗯嗯，后辈们都很可爱呢♪如果还有什么问题的话随时欢迎问',
      maru.elder_sibling_sex_title,
      '我呦♪',
    ]);
    era.print(
      `${maru.name} 放下手机，眺望着操场上练习的后辈马娘们，尾巴随着哼出的小曲有节奏的摆动着。`,
    );
    await maru.say_and_wait('果然还是在晴朗的天气里吃便当最愉快了♪');
    era.print(
      `${maru.name} 打开便当盒的同时视线无意识地向前方扫去，然后注意到了 ${you.name} 的存在`,
    );
    await maru.say_and_wait([
      '有什么问题……啊啦♪这不是上次在训练场遇到的 ',
      callname,
      ' 吗，你也打算在天台上吃便当吗？真是有品位呢♪',
    ]);
    era.print(
      `于是两个人坐在一起一边看着操场上努力的马娘们一边吃着便当，和煦的春风卷起了 ${maru.name} 的裙摆，她的耳朵伴随着音乐的节奏抖动着。`,
    );
    era.print(
      `两人默默无言。直到便当全部吃完后，丸善斯基放下手中的筷子，然后站起身看向了 ${maru.name}`,
    );
    await maru.say_and_wait(
      '那么，这位训练员，也是在寻找合适的担当吗，目标是什么？',
    );
    await maru.say_and_wait(
      '不败三冠，超越皇帝，还是说打算向着世界的大舞台与担当一起努力呢',
    );
    await maru.say_and_wait('不管是什么都可以和姐姐我商量哦♪');
    era.print(`${maru.name} 微笑着打量 ${you.name}`);
    era.print(
      `${you.name} 的脑海中回忆了自己看到的那一道红色的身影，以及在奔跑的时候所露出的满足笑容`,
    );
    era.printButton('想要看着担当在奔跑时能尽情享受跑步的快乐', 1);
    await era.input();
    await maru.say_and_wait('！');
    era.print(
      `${maru.name} 的耳朵明显地颤抖了一下，尾巴随着 ${maru.name} 打量着 ${you.name} 而有节奏地摆动着`,
    );
    await maru.say_and_wait('……这样吧，不如你来做我的训练员吧');

    era.print(
      `${you.name} 看着她认真的模样，虽然有些意外，不过最后还是向她伸出了手`,
    );
    await maru.say_and_wait(['那么，接下来请多指教了，', callname, '♪']);
  },
};
