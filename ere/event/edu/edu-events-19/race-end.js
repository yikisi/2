const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  dia_color,
  get_dia_name,
  say_by_diamond_lord,
} = require('#/event/edu/edu-events-19/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    digital,
    me,
    callname,
    extra_flag,
  ) => {
    if (era.get('cflag:19:育成回合计时') >= 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('出道战胜利', digital);
    await era.printAndWait([
      '出道战，',
      digital.get_colored_name(),
      ' 在这场比赛中出色地拿到了第一名，然后……',
    ]);
    await era.printAndWait([
      '本来以为会看到会尊成灰的 ',
      digital.get_colored_name(),
      '，像平时一样释放',
      digital.sex,
      '的爱意，没想到看起来',
      digital.sex,
      '居然安静下来了，',
      digital.sex,
      '也有这种时候啊……',
    ]);
    await digital.say_and_wait('……是原点，也是顶点……');
    await digital.say_and_wait(
      '初次的出闸，无法把控的时间节点，相互纠缠的玉足……',
    );
    await digital.say_and_wait(
      '汗水四溅，因为焦急而一片空白的大脑，但是伴随着观众的欢呼声消失，留下来的只有揭示板上的结果……',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '，居然能这样描绘出确切的情感啊。',
    ]);
    await digital.say_and_wait(
      '太！太感动了！无论什么都令人不禁落泪，对吧！对吧！',
    );
    era.printButton('「对呢，初次的比赛，出道赛，恭喜了。」', 1);
    await era.input();
    await digital.say_and_wait([
      '啊啊啊，奔跑的时候，数码被其他',
      digital.uma_sex_title,
      '酱的情感冲击得乱七八糟，数码我……',
    ]);
    await digital.say_and_wait(
      '我真的是，小看了出道战！出道战，谁都是赢家呢！谁都是！',
    );
    await digital.say_and_wait(
      '被夹杂着如此丰富的情感，无论是谁，都会收获满满吧？',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '，真的很开心，无论是在比赛中的步伐，还是比赛后的感想，都传达出',
      digital.sex,
      '对比赛的喜爱。',
    ]);
    await digital.say_and_wait([
      callname,
      '，今天的比赛只是入门吧！接下来还有很多比赛吧！还会遇到更多的',
      digital.uma_sex_title,
      '酱吧！',
    ]);
    await me.say_and_wait([
      '对，前面，还有很多',
      digital.uma_sex_title,
      '在等着你。',
    ]);
    await digital.say_and_wait(
      '太棒了！我跨过了乐园的门槛，真的不小心就跨过去了！一直以为那是我不应涉及的领域！',
    );
    await digital.say_and_wait([
      '下一次，我想要再看到这样的',
      digital.uma_sex_title,
      '酱们！',
    ]);
    await me.say_and_wait('那么，下一次跑草地比赛怎么样呢？');
    await digital.say_and_wait(
      '嗯？诶，这次是泥地，下次就草地吗……对不起，是我有些得意忘形了，因为太开心，脑海里的都跑到九霄云外了。',
    );
    await digital.say_and_wait('我还想再跑一次泥地比赛，再感受一次这种气氛！');
    await era.printAndWait([
      '商量过后，你们决定下一次比赛是：新年的 ',
      race_infos[race_enum.hyac_sta].get_colored_name(),
    ]);
  };

  handlers[race_enum.hyac_sta] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('风信子胜利', digital);
    await digital.print_and_wait([
      digital.get_colored_name(),
      ' 果然还是漂亮地到达了终点，该说是毫无悬念吗……',
    ]);
    await digital.say_and_wait('呼……哈……数码我，做到了……');
    await digital.say_and_wait([
      '冲过了终点，然后，见证到了，',
      digital.uma_sex_title,
      '酱们的光辉！',
    ]);
    await digital.say_and_wait([
      '该说是果然还是有点意外呢！我本以为是',
      digital.uma_sex_title,
      '酱们这种奔跑的觉悟很尊……',
    ]);
    await digital.say_and_wait([
      '但恐怕',
      digital.uma_sex_title,
      '酱们对比赛所寄托的愿望更深……只要我再继续比赛，那一定能知道',
      digital.sex,
      '们耀眼的原因！',
    ]);
    await digital.say_and_wait('再接着以这种不干扰的主义推下去吧！');
    await say_by_passer_by_and_wait('？？？', '呜呜呜……呜……');
    await say_by_passer_by_and_wait('？？？', '唔啊啊啊啊啊！');
    await digital.print_and_wait([
      '从不远处传来了某个',
      digital.uma_sex_title,
      '的痛哭。',
    ]);
    await digital.say_and_wait([
      '那个',
      digital.uma_sex_title,
      '，我记得是刚才……',
    ]);
    await digital.print_and_wait([
      '如果没记错的话，',
      digital.sex,
      '刚好是第六名，恰好在揭示板外。',
    ]);
    await say_by_passer_by_and_wait(
      '？？？',
      '揭示板……连揭示板都没能……重赏又怎么有可能……！',
    );
    await digital.print_and_wait([
      '一直以来都看着',
      digital.uma_sex_title,
      '的 ',
      digital.get_colored_name(),
      '，现在却完全不敢再继续注视了，扭开视角转过身来。',
    ]);
    await digital.print_and_wait([
      '在穿过地下通道时，',
      digital.get_colored_name(),
      ' 一直都回避着其他',
      digital.uma_sex_title,
      '，不是以往的保持距离，而是刻意避开不看。',
    ]);
    await digital.say_and_wait('……');
    await digital.print_and_wait([
      '即使如此，前面还是看到了两个',
      digital.uma_sex_title,
      '，是刚才第二第三的',
      digital.uma_sex_title,
      '啊。',
    ]);
    await digital.print_and_wait([
      digital.get_colored_name(),
      ' 正准备避开，然后……',
    ]);
    await era.printAndWait([digital.uma_sex_title, 'A「呜呜呜……」'], {
      color: dia_color,
    });
    await say_by_passer_by_and_wait(
      `${digital.uma_sex_title}B`,
      '不是不是，第二名了哦？你哭什么啊？',
    );
    await era.printAndWait(
      [
        digital.uma_sex_title,
        'A「明明，明明，是与前辈你的对决的……一直以来都想着，能与你比胜负，然后，超越你……」',
      ],
      { color: dia_color },
    );
    await say_by_passer_by_and_wait(
      `${digital.uma_sex_title}B`,
      '那不是达到了吗？你啊，真的很强啊，我也差不多要成老骨头了噢～',
    );
    await era.printAndWait(
      [
        digital.uma_sex_title,
        'A「……我一直都以为……我只要胜过前辈……我就能……但是，',
        digital.sex,
        '真的，很强……伸出手都无法……」',
      ],
      { color: dia_color },
    );
    await say_by_passer_by_and_wait(`${digital.uma_sex_title}B`, [
      get_dia_name(),
      '！你努力了吧！全力以赴了吧！',
    ]);
    await say_by_diamond_lord('但是……');
    await say_by_passer_by_and_wait(
      `${digital.uma_sex_title}B`,
      '不管你我的成绩如何，闪耀系列赛还是会一直持续下去，它可不会等我们！',
    );
    await say_by_passer_by_and_wait(`${digital.uma_sex_title}B`, [
      '你比我强，而且，你还有潜力，你以后，一定会挑战重赏吧！一定会挑战G1吧！',
      '让',
      digital.sex,
      '们刮目相看吧！',
    ]);
    await say_by_passer_by_and_wait(
      `${digital.uma_sex_title}B`,
      '胜者舞台，能一起去吧？',
    );
    await digital.print_and_wait([
      digital.uma_sex_title,
      'B抬起了手，擦了',
      digital.sex,
      '同伴的眼泪。',
    ]);
    await say_by_diamond_lord('！');
    await digital.print_and_wait([
      digital.sex,
      '使劲地吸了下流下的鼻涕，狠狠地点了头。',
    ]);
    await digital.print_and_wait([
      '看着',
      digital.sex,
      '们拉着手远去，',
      digital.get_colored_name(),
      ' 这次，再也无法说出任何「磕到了」的话。',
    ]);
    era.drawLine();
    await digital.say_and_wait('……');
    await me.say_and_wait('数码，还好吗？');
    await digital.say_and_wait('骗人的……不干涉什么的……');
    await digital.say_and_wait('这种事情，根本不可能。');
    await digital.say_and_wait(
      '只要参赛，那就一定会有胜者，一定会有败者……就算输了也很尊，全部都是胜者什么的，真亏我说得出这种话啊……',
    );
    era.printButton(
      '「正是登上赛场，所建立的联系，才会让你们如此之尊，这不是你一直以来就知道的吗？」',
      1,
    );
    await era.input();
    await era.printAndWait([
      digital.get_colored_name(),
      ' 在此次比赛，似乎是能窥探到了一些',
      digital.uma_sex_title,
      '为何尊，为何伟大的奥秘了。',
    ]);
    await era.printAndWait([
      '但是',
      digital.sex,
      '又突然认识到了',
      digital.sex,
      '作为一个对手，却把自己当成一个观众，还无情地夺走了冠军。',
    ]);
    await era.printAndWait('这是十分失敬的。');
    await era.printAndWait([
      '所以 ',
      digital.get_colored_name(),
      '，在胜者舞台后，回到训练室时……',
    ]);
    await digital.say_and_wait([
      callname,
      '，我想要聊一下关于之后的事情，我要说一些不像我自己的话了，可以吗？？',
    ]);
    await me.say_and_wait('当然。');
    await digital.say_and_wait('我觉得，不论如何，我都要参加……G1赛事。');
    await digital.say_and_wait(
      '感觉，对在场的所有你们，都是犯下了需要在炙热铁板上土下座的失礼',
    );
    await digital.say_and_wait(
      '既然如此，那就不得不去做了，参赛，战胜G1，然后让其他人觉得，数码很强。',
    );
    await era.printAndWait([
      '想要证明，证明',
      digital.sex,
      '真的是足够强大的，为了给所有输给',
      digital.sex,
      '的',
      digital.uma_sex_title,
      '一个交代。',
    ]);
    await digital.say_and_wait([
      '还有，想要确定一下，',
      digital.uma_sex_title,
      '酱们到底是如何面对G1比赛的！',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
      '，将下一次比赛，定在了五月前半的 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      '。',
    ]);
    await digital.say_and_wait([
      '我要，出赛，然后——带着',
      digital.sex,
      '们的份一起！',
    ]);
    await era.printAndWait([
      '偶然的事件，但并不是偶然的结果，胜利与失败，其所蕴含的悲哀——推动了 ',
      digital.get_colored_name(),
      ' 的未来。',
    ]);
  };

  handlers[race_enum.nhk_cup] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.nhk_cup].get_colored_name(), ' 胜利'],
      digital,
    );
    await say_by_passer_by_and_wait('解说', [
      '是 ',
      digital.get_colored_name(),
      '！',
      digital.get_colored_name(),
      '！',
      digital.sex,
      '给我们展示了无论是草地还是泥地，都不在',
      digital.sex,
      '的话下！',
    ]);
    await era.printAndWait([
      '冲过终点的 ',
      digital.get_colored_name(),
      '，连脚步都有点踉踉跄跄了。',
    ]);
    await digital.say_and_wait(
      '哈……呼……好……没有一点残余能量了……连推的余力都没了……用了，全力……！',
    );
    await digital.say_and_wait('啊啊啊，阳光……好耀眼……天空……好……遥远……');
    await digital.say_and_wait('啊……这就是……');
    await era.printAndWait('（咚！）');
    await era.printAndWait([digital.get_colored_name(), ' 倒下了！']);
    era.drawLine();
    await era.printAndWait([
      '幸好，经过了赶来医生的判断，',
      digital.get_colored_name(),
      ' 只是运动过度了，休息一下就好。',
    ]);
    await era.printAndWait([
      '在这一次，',
      digital.get_colored_name(),
      ' 真正地用出了全力，跟以往不同，这次的 ',
      digital.get_colored_name(),
      '，背负了作为选手的信念。',
    ]);
    await era.printAndWait([
      '所以，在用尽全力后，',
      digital.get_colored_name(),
      ' 激动地倒下了。',
    ]);
    const opera = get_chara_talk(15),
      dotou = get_chara_talk(58),
      d_call_o = sys_get_colored_callname(19, 15),
      d_call_do = sys_get_colored_callname(19, 58);
    await era.printAndWait([
      me.get_colored_name(),
      ' 背着 ',
      digital.get_colored_name(),
      '，回到了休息室，然后……发现了两个熟悉的身影，是 ',
      opera.get_colored_name(),
      ' 还有 ',
      dotou.get_colored_name(),
      '。',
    ]);
    await opera.say_and_wait([
      sys_get_colored_callname(15, 19),
      '？振作一点！',
    ]);
    await me.say_and_wait(['没事，', digital.sex, '休息一下就好。']);
    await era.printAndWait([
      '在说着的过程中，把 ',
      digital.get_colored_name(),
      ' 躺着放在了休息室的沙发上。',
    ]);
    await era.printAndWait([
      '没过多久，',
      digital.get_colored_name(),
      ' 就睁开了双眼。',
    ]);
    await digital.say_and_wait('嗯……嗯……诶？！');
    await digital.say_and_wait([d_call_o, ' 和 ', d_call_do, '？！你们怎么？']);
    await me.say_and_wait([
      digital.sex,
      '们非常担心你，所以也来到了休息室来看望你……倒不如说是一开始就在休息室里面了。',
    ]);
    await digital.say_and_wait('怎么这么突然？');
    await opera.say_and_wait([
      '不是突然！是 ',
      sys_get_colored_callname(15, 58),
      '，说有一位能在各种舞台回旋的舞者，为了欣赏新的演员的诞生，所以，我来了。',
    ]);
    await dotou.say_and_wait([
      '唔唔唔，我非常感谢 ',
      sys_get_colored_callname(58, 19),
      ' 你的开导！因此，在这场比赛我也来给你加油了！',
    ]);
    await opera.say_and_wait(
      '我们在比赛前就一直隐藏我霸王的气息，装作一般路过的观众来研究你！',
    );
    await dotou.say_and_wait('因为怕我这种人在亮相圈搭话会影响到你……所以……');
    await digital.say_and_wait(
      '不不不！怎么会影响呢，倒不如说是我的荣幸……原来一开始的异样感是这样啊。',
    );
    await digital.say_and_wait([
      '还有，我逐渐明白了，',
      d_call_o,
      ' 和 ',
      d_call_do,
      ' 啊，为什么这么耀眼华丽……',
    ]);
    await digital.say_and_wait('终于……稍微……能接近了一些……');
    await opera.say_and_wait(
      '哈哈哈！是吗？不过，果然还是因为我的华丽可是天生的啊！',
    );
    await era.printAndWait([
      opera.get_colored_name(),
      ' 相当欣赏 ',
      digital.get_colored_name(),
      '，而 ',
      dotou.get_colored_name(),
      ' 则是感谢 ',
      digital.get_colored_name(),
      ' 对',
      digital.sex,
      '的鼓舞。',
    ]);
    await me.say_and_wait('你们应该来到这里，应该还有其他想说的吧？');
    await era.printAndWait(['接着，', digital.sex, '们宣布了……']);
    await opera.say_and_wait([
      '我和 ',
      sys_get_colored_callname(15, 58),
      '，在接下来的 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 要进行初次的共演！',
    ]);
    await dotou.say_and_wait(
      '我，我终于也能出战G1了，虽然，只是在一个无人在意的角落……',
    );
    await digital.say_and_wait('！初次的revue，我明白了！这下不得不去看了！');
    await opera.say_and_wait(
      '不过，你也应该有对应的节目吧？向我们展示你的全能才能！',
    );
    await opera.say_and_wait(
      '你还未在泥地G1胜利过，没有这个的话，还不完整，是吧？',
    );
    await me.say_and_wait([
      '接下来比较合适的泥地G1，是夏合宿期间的 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '。',
    ]);
    await opera.say_and_wait([
      '不愧是 ',
      sys_get_colored_callname(15, 0),
      '！那么，',
      digital.get_colored_name(),
      '，你要接受我们的邀请吗？',
    ]);
    await digital.say_and_wait('我接受了！');
    await era.printAndWait([
      '所以',
      digital.sex,
      '们做出约定，',
      opera.get_colored_name(),
      ' 和 ',
      dotou.get_colored_name(),
      ' 在 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 中给予最盛大的比赛，而 ',
      digital.get_colored_name(),
      ' 要在 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      ' 中也要展示',
      digital.sex,
      '身为全能选手的本领。',
    ]);
  };

  handlers[race_enum.japa_dir] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.japa_dir].get_colored_name(), ' 胜利'],
      digital,
    );
    await digital.say_and_wait(
      '在这场比赛，与先前的草地比赛不同却又相同。',
      true,
    );
    await digital.say_and_wait('唔噢噢噢噢噢噢噢！！！！', true);
    await digital.say_and_wait(
      '扬起的沙尘……看不清……但是感觉光辉……透过来了……',
      true,
    );
    await digital.say_and_wait(
      ['即使是完全不同的赛道……', digital.sex, '们都始终拥有着不渝的光辉……'],
      true,
    );
    await digital.say_and_wait(
      ['不能在这里，辜负', digital.sex, '们的心啊！！！！'],
      true,
    );
    await digital.say_and_wait('哈啊啊啊啊啊啊啊！', true);
    era.drawLine();
    await era.printAndWait([
      '完赛了，',
      digital.get_colored_name(),
      ' 真的很出色，在这场环境完全不同的赛道，也能取得这样优秀的成绩。',
    ]);
    await me.say_and_wait('感觉怎么样？');
    await era.printAndWait([
      digital.get_colored_name(),
      '，带着与以前完全不同的，认真的表情。',
    ]);
    await digital.say_and_wait([
      '数码，',
      digital.get_colored_name(),
      '，我懂了。',
    ]);
    await me.say_and_wait('嗯。');
    await digital.say_and_wait([
      '从儿时开始，就一直让我入迷的',
      digital.uma_sex_title,
      '酱的尊……',
    ]);
    await digital.say_and_wait([
      '我知道了，在今天跑完『',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '』后，明白了。',
    ]);
    await digital.say_and_wait([digital.uma_sex_title, '酱，可爱。']);
    await digital.say_and_wait([digital.uma_sex_title, '酱，很尊。']);
    await digital.say_and_wait([
      '那么，',
      digital.sex,
      '们为何而可爱？',
      digital.sex,
      '们的哪里让我觉得伟大、无可救药地吸引着我？',
    ]);
    await digital.say_and_wait([
      '今天终于明白了，我喜欢的是',
      digital.sex,
      '们『奋不顾身地为自己的梦想而拼搏』的样子啊！',
    ]);
    await era.printAndWait([
      '咚咚咚地跺着脚，表达出 ',
      digital.get_colored_name(),
      ' ',
      digital.sex,
      '终于明白的喜悦。',
    ]);
    await digital.say_and_wait(
      '明白了后，真想穿越回去暴揍过去以为『只有中央的草地G1才是特别的』我！',
    );
    await me.say_and_wait('哈哈，简直就是定番的感想啊。');
    await digital.say_and_wait([
      '喂喂喂，你早就知道的吧，',
      digital.uma_sex_title,
      '酱们一直都是一样的。',
    ]);
    await digital.say_and_wait([
      digital.sex,
      '们真的有想要的东西，想要成为的人，以那为目标，在拼命的努力着。',
    ]);
    await era.printAndWait(
      '这种人，无论放在哪里，都是耀眼的，何况放在一起比赛呢？',
    );
    await digital.say_and_wait([
      digital.sex,
      '们全力互相联系，互相帮助……时而为同一个胜利斗争，但又不惧怕斗争，一直都在看着前方。',
    ]);
    await digital.say_and_wait('在一切都尘埃落定后，一起贴贴！');
    await me.say_and_wait('嘛，又是定番剧情呢。');
    await digital.say_and_wait('正是这种定番剧情，我的灵魂才会如此震撼啊！');
    await digital.say_and_wait('虽然在出道之前一直都自以为是……但结果今天才……');
    await digital.say_and_wait('啊哇哇哇，真是……');
    await digital.say_and_wait([
      sys_get_colored_callname(19, 15),
      ' 和 ',
      sys_get_colored_callname(19, 58),
      ' 的那次比赛，现在回过头来，也总算懂了。',
    ]);
    await era.printAndWait([
      get_chara_talk(15).get_colored_name(),
      ' 和 ',
      get_chara_talk(58).get_colored_name(),
      ' 的对决在宝冢上的光辉，让 ',
      digital.get_colored_name(),
      ' 无比羡慕。',
    ]);
    await era.printAndWait([
      '而现在，',
      digital.get_colored_name(),
      ' 终于也能够触碰到这束光芒。',
    ]);
    await digital.say_and_wait(
      '如果在这样下去的话……不行！数码啊！要开始动起来！',
    );
    await digital.say_and_wait(
      '即使是我的话，我能做好觉悟，怀着纯粹的心情站在闸门前的话！',
    );
    await digital.say_and_wait([
      callname,
      '……我……即使是我……也能成为，这样的存在吗？！',
    ]);
    era.printButton('「当然能！」', 1);
    await era.input();
    await era.printAndWait([
      digital.get_colored_name(),
      ' 终于，在此刻，成为一名真正的选手。',
    ]);
  };

  handlers[race_enum.mile_cha] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1 || era.get('cflag:19:育成回合计时') >= 96) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.mile_cha].get_colored_name(), ' 胜利'],
      digital,
    );
    const halo = get_chara_talk(61);
    await digital.print_and_wait([
      '从最底层爬上来的 ',
      halo.get_colored_name(),
      '，',
      digital.get_colored_name(),
      ' 将',
      digital.sex,
      '的生存战略从头到尾都看到了最后。',
    ]);
    await halo.say_and_wait([
      '怎么样，',
      sys_get_colored_callname(61, 19),
      '？和我一起跑了这场重要比赛，理解了吧？',
    ]);
    await halo.say_and_wait([
      halo.get_colored_name(),
      ' 是一个怎么样的',
      digital.uma_sex_title,
      '。',
    ]);
    await digital.say_and_wait('是……是的……');
    await digital.print_and_wait([
      '被 ',
      halo.get_colored_name(),
      ' 教导了「',
      digital.uma_sex_title,
      '为何物」的 ',
      digital.get_colored_name(),
      '，在夺下 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      ' 的胜利后泣不成声。',
    ]);
    await digital.print_and_wait([
      halo.get_colored_name(),
      ' 的存在就是如此让',
      digital.sex,
      '深受感动。',
    ]);
    await halo.say_and_wait('怎么了？一直在哭，可是说不出来的哦。');
    await digital.say_and_wait('全身……都沐浴到了光辉……');
    await digital.say_and_wait([
      '然后，我明白了，作为',
      digital.uma_sex_title,
      '而活，意味着什么。',
    ]);
    await digital.say_and_wait(
      '不屈的奔跑中寄宿着灵魂！本能！无论准备是否完全，始终贯彻一流的气概！',
    );
    await digital.say_and_wait(
      '之前的我一直都无法理解，不过现在我明白了，只要奔跑就行！就连丧气话，也要边跑边说！',
    );
    await digital.say_and_wait([
      '我现在，更喜欢',
      digital.uma_sex_title,
      '了！',
    ]);
    await halo.say_and_wait([
      '呵呵，你真是喜欢',
      digital.uma_sex_title,
      '呢。',
    ]);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      '，和更多',
      digital.uma_sex_title,
      '比赛吧！吸收一切，然后……',
    ]);
    await halo.say_and_wait([
      '成为真正的全能选手吧！毕竟，你就是你最喜欢的',
      digital.uma_sex_title,
      '的一员啊！',
    ]);
    await digital.print_and_wait([
      halo.get_colored_name(),
      ' 在最后，给予了 ',
      digital.get_colored_name(),
      ' 祝福，愿 ',
      digital.get_colored_name(),
      ' 在今后与更多',
      digital.uma_sex_title,
      '对决，成为真正的「全能跑者」',
    ]);
    era.drawLine({ content: '地下通道' });
    await digital.say_and_wait([
      callname,
      '，我的同志啊，我从 ',
      sys_get_colored_callname(19, 61),
      ' 那里获得了无比珍贵的事物。',
    ]);
    await digital.say_and_wait([
      '需要和更多',
      digital.uma_sex_title,
      '比赛，我需要做什么呢……',
    ]);
    await era.printAndWait('既然如此，不妨就……');
    await era.printAndWait([
      '和 ',
      digital.get_colored_name(),
      ' 决定了，接下来参加更多的G1赛事。',
    ]);
    await digital.say_and_wait([
      '对的对的，还有，然后在之后，我要向 ',
      sys_get_colored_callname(19, 15),
      ' 和 ',
      sys_get_colored_callname(19, 58),
      ' 发起挑战！',
    ]);
    await era.printAndWait([
      '一直以来仅是仰慕的 ',
      digital.get_colored_name(),
      '，现在终于也能鼓起勇气，向以前的偶像发起挑战。',
    ]);
  };

  handlers[race_enum.tenn_sho] = async (digital, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1 || era.get('cflag:19:育成回合计时') < 96) {
      return true;
    }
    await print_event_name(
      [race_infos[race_enum.tenn_sho].get_colored_name(), ' 胜利'],
      digital,
    );
    await era.printAndWait('咚咚咚咚——');
    await era.printAndWait([
      '在低沉的脚步声，',
      digital.uma_sex_title,
      '们逐渐逼近观众席，此时，意外地跑在外道的是——',
    ]);
    await say_by_passer_by_and_wait('解说', [
      digital.get_colored_name(),
      '！是 ',
      digital.get_colored_name(),
      '！在雨中，在一片狼籍的草地上，从马群中钻了出来，选择了最好的道路！然后——！',
    ]);
    await say_by_passer_by_and_wait('解说', [
      '冲线！用不可思议的跑法征服了 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 的是——',
      digital.get_colored_name(),
      '！',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 一直以来所积累的知识、技能以及情感，给予了 ',
      digital.get_colored_name(),
      ' 这次最好的条件。',
    ]);
    await era.printAndWait([
      digital.sex,
      '在泥泞的草地上，简直像是回到了老家一样，无论是道路选择还是最终加速，作为训练员的 ',
      me.get_colored_name(),
      ' 也完全找不出任何不足之处。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 不可动摇地拿下了胜利。',
    ]);
    era.println();
    await digital.say_and_wait('嘿嘿……咳咳咳……啊哈哈哈……');
    await digital.say_and_wait('是，我的胜利吧。');
    await me.say_and_wait('是的，是你的胜利，数码。');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 转过身来，面向观众席。',
    ]);
    await digital.say_and_wait('唔噢噢噢噢噢噢噢噢噢噢噢噢噢！');
    await say_by_passer_by_and_wait('观众席', '唔噢噢噢噢噢噢噢噢噢噢噢噢噢！');
    await digital.say_and_wait('嘿哇啊啊啊啊啊啊啊啊啊啊！');
    await say_by_passer_by_and_wait('观众席', '嘿哇啊啊啊啊啊啊啊啊啊啊！');
    await digital.say_and_wait('噫！嘿！哦！噢噢噢噢噢噢！');
    await say_by_passer_by_and_wait('观众席', '噫！嘿！哦！噢噢噢噢噢噢！');
    await era.printAndWait('哈哈哈哈，喊得喉咙都有点哑了。');
    await era.printAndWait([
      '而且跟一般的喊名字不同，该说真有 ',
      digital.get_colored_name(),
      ' 的特色吗。',
    ]);
    await era.printAndWait([
      '大张着手跑到 ',
      me.get_colored_name(),
      ' 跟前，隔着栏杆将 ',
      me.get_colored_name(),
      ' 抱了起来。',
    ]);
    await digital.say_and_wait([callname, '！未知的，是未知的景色啊！']);
    await digital.say_and_wait(
      '在台上感受Call的力量！这感觉真的是绝无伦比啊！',
    );
    await me.say_and_wait('是啊！这是独属于数码你的Call，独一无二的Call！');
    await digital.say_and_wait('黑船……我把胜利，从那两人夺过来了哦……');
    await era.printAndWait([
      '无论',
      digital.sex,
      '是怀着悔恨还是悲伤，看到这场比赛，',
      digital.sex,
      '，想必也会感到解脱了吧。',
    ]);
    await digital.say_and_wait(
      '仅凭我自己，是无法做到的——我一直以来，都这么认为。所以我向推寄托了愿望……',
    );
    await digital.say_and_wait('但是……');
    era.printButton('「我的第一位推，就是你噢！」', 1);
    await era.input();
    await digital.say_and_wait([
      '啊哈哈哈，诶嘿嘿嘿……',
      callname,
      '，居然现在说这话，可真是……我要，我要……',
    ]);
    await digital.say_and_wait([
      '给给给！给你杀必死！对对对，就是粉丝服务！',
      callname,
      '，想要我尾巴上的毛吗！',
    ]);
    await era.printAndWait([
      '看起来 ',
      digital.get_colored_name(),
      ' 已经高兴得已经在开始说有点意味不明的话了。',
    ]);
    era.printButton('「到领奖台吧，大家在等着呢。」', 1);
    await era.input();
    await digital.say_and_wait('哦哦哦，如此傲慢无礼，我差点忘了！');
    await era.printAndWait([
      '一把把 ',
      me.get_colored_name(),
      ' 从栅栏一边搬运过来，',
      digital.get_colored_name(),
      ' 跟 ',
      me.get_colored_name(),
      ' 来到了领奖台。',
    ]);
    era.println();
    await digital.say_and_wait([
      '多多多多，多谢！我是 ',
      digital.get_colored_name(),
      '！说到底我只不过是一个喜欢',
      digital.uma_sex_title,
      '酱的……',
    ]);
    await digital.say_and_wait([
      '我只不过是追着',
      digital.uma_sex_title,
      '酱的屁股……哦不，是尾巴，才来到这里的……',
    ]);
    await digital.say_and_wait([
      '能懂吗！这份感动！？我最一开始，甚至不能说是普通的',
      digital.uma_sex_title,
      '酱，只是一个粉丝而已诶！',
    ]);
    await digital.say_and_wait(
      '但是，我能混杂在这份闪耀中，在这个尊景中，能在最前方冲线，真的是……感激不尽……',
    );
    await digital.say_and_wait(
      '之所以能够获胜，一定不是我自己的成果了，是与所有邂逅的人的结晶，',
    );
    await digital.say_and_wait([
      '一路以来的',
      digital.uma_sex_title,
      '酱，最一开始认为自己不该会有的粉丝，还有 ',
      callname,
      '！',
    ]);
    await digital.say_and_wait('今天，是大家让我拿下了胜利。');
    await digital.say_and_wait('感激……真的是，非常，感激……');
    await digital.say_and_wait([
      digital.uma_sex_title,
      '酱们，比起身为在粉丝的时候所想的',
      digital.uma_sex_title,
      '酱……要耀眼百倍，千倍……',
    ]);
    await era.printAndWait([
      '说着说着，',
      digital.get_colored_name(),
      ' 已经开始介绍起了比赛的选手了。',
    ]);
    await digital.say_and_wait(
      '看到了吗！英姿飒爽的短发，在猛然冲刺时的摇曳……',
    );
    await digital.say_and_wait('那伴随着脚步晃动的包……');
    await digital.say_and_wait(
      '有，今天不能在场的黑船，如果能的话，总有一天，一定要一起跑在泥地上……',
    );
    era.println();
    await era.printAndWait([
      '打开了话匣子，',
      digital.get_colored_name(),
      ' 还在聊的时候……',
    ]);
    await say_by_passer_by_and_wait('工作人员', [
      digital.get_colored_name(),
      ' 的训练员，很抱歉在这兴头上打断……胜者舞台……',
    ]);
    await era.printAndWait([
      '啊啊啊啊，低头对着 ',
      digital.get_colored_name(),
      ' 说几声，',
      digital.sex,
      '好像完全没注意到。',
    ]);
    await era.printAndWait('看来只能强行拉走了。');
    await digital.say_and_wait(['喂喂喂，', callname, '？']);
    await digital.say_and_wait('等等，至少请让我再说一句，我再说一句吧——');
    await digital.say_and_wait([
      digital.uma_sex_title,
      '真是——太——棒——啦——！！！！',
    ]);
  };
};
