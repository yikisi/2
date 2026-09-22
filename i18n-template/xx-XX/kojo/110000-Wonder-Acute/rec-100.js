/**
 * @file 奇锐骏 - 招募
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} acute
   * @param {CharaTalk} you
   * @param {{ct:CharaTalk,cl:PrintedSpan}} nn
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tannhauser
   * @param {{ct:CharaTalk,cl:PrintedSpan}} mcqueen
   * @param {{ct:CharaTalk,cl:PrintedSpan}} gs
   * @param {{ct:CharaTalk,cl:PrintedSpan}} ardan
   * @param {{ct:CharaTalk,cl:PrintedSpan}} halo
   * @param {{ct:CharaTalk,cl:PrintedSpan}} oguri
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tama
   * @param {{ct:CharaTalk,cl:PrintedSpan}} grass
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tachyon
   * @param {{ct:CharaTalk,cl:PrintedSpan}} coffee
   */
  async rec_start(
    acute,
    you,
    {
      nn,
      tannhauser,
      mcqueen,
      gs,
      ardan,
      halo,
      oguri,
      tama,
      grass,
      tachyon,
      coffee,
    },
  ) {
    await you.say_and_wait(
      '……我家门前有两棵树，一颗是枣树、另一颗也是枣树。',
      true,
    );
    await you.say_and_wait(
      '抱歉，之所以引用这句名言，并非是想借文学家的名言附庸风雅。',
      true,
    );
    await you.say_and_wait('而只是想说些什么……又或者是实在无话可说。', true);
    await you.say_and_wait(
      '是工作上带来的疲劳压垮了自己作为训练员的自信吗？',
      true,
    );
    await you.say_and_wait(
      '是最近几场连轴转的比赛给自己带来了过大的压力吗？',
      true,
    );
    await you.say_and_wait(
      [
        '还是对于付出了真情的赛',
        acute.uma_sex_title,
        '，一直犹豫不决不知道作为训练员究竟该与其保持怎样的距离；结果让双方一同受伤了呢？',
      ],
      true,
    );
    await you.say_and_wait('可能都有……也可能都没有。', true);
    era.drawLine();
    if (nn) {
      await nn.ct.used_to_say_and_wait(
        '好啦好啦，因为是普通人，感到疲惫是很正常的啦。',
      );
    }
    if (tannhauser) {
      await tannhauser.ct.used_to_say_and_wait([
        '没事的啦，',
        tannhauser.cl,
        '～提起精神啦～',
      ]);
    }
    if (mcqueen) {
      await mcqueen.ct.used_to_say_and_wait([
        '嘛……总之，要一起来喝下午茶吗，',
        mcqueen.cl,
        '？',
      ]);
    }
    if (gs) {
      await gs.ct.used_to_say_and_wait(['哦，', gs.cl, '～拉面一狗贼？']);
    }
    if (ardan) {
      await ardan.ct.used_to_say_and_wait([
        '没事的，',
        ardan.cl,
        '！只要凭借目白家的财力的话——',
      ]);
    }
    if (halo) {
      await halo.ct.used_to_say_and_wait([
        '哦——吼吼！不用在意凡人的眼光。无论何时，你的才能与身姿都将由我 ',
        halo.ct.name,
        ' 认可了哦！',
      ]);
    }
    if (oguri) {
      await oguri.ct.used_to_say_and_wait(['……', oguri.cl, '，肚子饿了。']);
    }
    if (tama) {
      await tama.ct.used_to_say_and_wait([
        '诺，',
        tama.cl,
        '。这是大阪烧哇，我给你和 ',
        tama.cl,
        ' 都做了一份，吃了这个就打起精神来吧。',
      ]);
    }
    if (grass) {
      await grass.ct.used_to_say_and_wait([
        '呼呼～真是可爱呢，',
        grass.cl,
        '～',
      ]);
    }
    if (tachyon) {
      await tachyon.ct.used_to_say_and_wait([
        '哦呀，',
        tachyon.cl,
        '！既然你那么在意的话，那要来尝尝这个能忘记一切的药吗？不收你钱的哦～',
      ]);
    }
    if (coffee) {
      await coffee.ct.used_to_say_and_wait([
        '……再继续下去的话，',
        coffee.cl,
        '……你会被杀掉的哦？',
      ]);
    }
    era.drawLine();
    await era.printAndWait('去天台抽根烟吧……');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {CharaTalk} you 玩家
   */
  async rec_rooftop(acute, taste, minoru, you) {
    await era.printAndWait(
      '黄昏的天台上，下意识地想要点上一根能让自己暂时忘记一切的香烟。',
    );
    await era.printAndWait('于是伸出手，摸了摸自己的口袋。');
    await era.printAndWait('——可口袋里什么都没有。');
    era.drawLine();
    await era.printAndWait(
      '黄昏的夕阳下，一架飞机在天边航行，留下一条橘黄色的直线。',
    );
    await era.printAndWait(
      '依在栏杆上望向天空，从未感受过如此的自由、也从未感受过如此的压抑。',
    );
    await era.printAndWait([
      '当初，自己欠下一百二十一亿天价债务时，是 ',
      taste.get_colored_name(),
      ' 收留了 ',
      you.get_colored_name(),
      '，让 ',
      you.get_colored_name(),
      ' 作为训练员想方设法度过了还款地狱、补上了这天价的窟窿。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 想，时至今日，或许 ',
      taste.get_colored_name(),
      ' 仍旧很信任 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '除却 ',
      taste.get_colored_name(),
      ' 外，还有 ',
      minoru.get_colored_name(),
      '、乃至于其他的担当',
      acute.uma_sex_title,
      '……',
      you.get_colored_name(),
      ' 想，',
      acute.couple_title,
      '仍对 ',
      you.get_colored_name(),
      ' 有期望。',
    ]);
    await era.printAndWait('可这份期望，又何尝不是一种重担呢？');
    await era.printAndWait([
      '归根结底，',
      you.get_colored_name(),
      ' 也只是一个【凡人】而已吧。',
    ]);
    await era.printAndWait(
      '一个做不到任何事情都面面俱到、本不该承受如此的厚望、只是一个在世间拼命挣扎，如果可以的话也想要后退逃跑的，最为普通的【凡人】吧？',
    );
    await you.say_and_wait('……………………');
    await you.say_and_wait('…………');
    await you.say_and_wait('……');
    await you.say_and_wait('好想……逃跑啊。', true);
    era.printButton('「唉……（叹气）」', 1);
    await era.input();
    await acute.say_as_unknown_and_wait(
      '哎呀呀……总是叹气的话，福气可是会跑出去的哦？',
    );
    await era.printAndWait([
      '而就在此时，在',
      you.get_colored_name(),
      '面前出现的，是一位与夕阳同辉的',
      acute.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '那是在特雷森学园的天台上，落日的余晖之中。',
      you.get_colored_name(),
      ' 循声暗自回过头，一位始终温和微笑的',
      acute.uma_sex_title,
      '，浮现在了 ',
      you.get_colored_name(),
      ' 的眼前。',
    ]);
    await era.printAndWait(
      `${acute.sex}的身上没有只会出现在漫画上的那独特而耀阳的光辉，但${acute.sex}的身姿却如此的让人难忘。`,
    );
    await era.printAndWait(`因为${acute.sex}——实在太适应这落日的夕阳了。`);
    await acute.say_as_unknown_and_wait('哎呀哎呀……不要露出这种委屈的表情啦。');
    await acute.say_as_unknown_and_wait(
      '我的名字是奇锐骏……嗯——我们应该是第一次见面吧？',
    );
    await acute.say_and_wait(
      '抱歉呢，突然跟你搭话是不是吓到你了呢？看到你一副像是要哭出来的表情，不由得有些担心了呢。',
    );
    await acute.say_and_wait(
      '是被学校里的坏孩子欺负了吗？还是说是职场霸凌？又或者说，只是单纯的肚子饿了呢？',
    );
    await acute.say_and_wait(
      '如果是肚子饿了的话……来，这儿是嘎吱嘎吱干哦～不用客气，直接用手来抓一点吧～',
    );
    await era.printAndWait(
      `始终微笑得和蔼着、与夕阳的同尘的${acute.sex}，从身后取出了一个装满萝卜干的玻璃皿。`,
    );
    await era.printAndWait('不是殷勤，不是示好、当然也不是日常的粉丝公关——');
    await era.printAndWait([
      '而是恰到好处、不近不远的距离。',
      acute.sex,
      '伸出了载着玻璃皿的手，将萝卜干捧在了 ',
      you.get_colored_name(),
      ' 的面前。',
    ]);
    await era.printAndWait(`而鬼使神差般的，${you.name} 也伸出了自己的右手。`);
    await era.printAndWait('嘎吱、嘎吱、嘎吱、嘎吱——');
    await era.printAndWait('那是有点苦，却又意外有些清脆爽口的味道。');
    await era.printAndWait('明明肚子并不算饿……可却不知为何——');
    await era.printAndWait('有一种，不愿意停下来的感觉。');
    await era.printAndWait(
      '最初，只是用指尖，捏住最上层的、最干涩的一片萝卜干得边缘，轻轻放入口边，用牙齿咀嚼。',
    );
    await era.printAndWait(
      '然后，是用指尖夹住一片萝卜干的正中间，直接塞入嘴中咀嚼。',
    );
    await era.printAndWait('最后，一口气捏住好几片萝卜干，直接送入嘴中。');
    await era.printAndWait('越是食用，便越是饥渴。');
    await era.printAndWait('越是饥渴，却越是不知为何而清凉。');
    await era.printAndWait([
      '玻璃皿中的萝卜干，在转瞬之间，便被 ',
      you.get_colored_name(),
      ' 全部吞咽进了肚子之中。',
    ]);
    await acute.say_and_wait('哎呀哎呀……真是豪爽的吃法呢～');
    await era.printAndWait('始终温和而平静的面容上，多了一份笑意。');
    await acute.say_and_wait('怎么样，好吃吗？');
    era.printButton('「……啊，嗯。」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 沉默的点了点头，把因为吃掉了一整盒萝卜干而想要道歉的想法咽在了自己的心中。',
    ]);
    await acute.say_and_wait('好吃的话就好呢～那么，来坐下来吧。');
    await era.printAndWait([
      '名为 ',
      acute.get_colored_name(),
      ' 的',
      acute.teen_sex_title,
      '，依靠着天台的墙壁，迎着夕阳坐了下来。',
    ]);
    await era.printAndWait(`${acute.sex}一面坐着，一面轻轻地拍着身旁的空地。`);
    await acute.say_and_wait('有困难的时候，一个人呆着可不好呢～');
    await acute.say_and_wait('时间还有很多的哦？有什么事情，可以慢慢说呢～');
    era.drawLine();
    await era.printAndWait('那一天，在落日之前。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 与与夕阳同辉的',
      acute.teen_sex_title,
      '，同时也是日后成为了 ',
      you.get_colored_name(),
      ' 担当的',
      acute.teen_sex_title,
      '，',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('聊了许多、许多的话——');
    era.println();
    await era.printAndWait([
      '成为 ',
      acute.get_colored_name(),
      ' 的训练员了！',
    ]);
  },
};
