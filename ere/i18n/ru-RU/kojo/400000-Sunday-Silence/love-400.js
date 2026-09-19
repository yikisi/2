/**
 * @file 周日宁静 - 爱慕
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '爱欲';
    /**
     * @param {CharaTalk} silence 周日宁静
     * @param {CharaTalk} you 玩家
     * @param {string} callname 周日宁静对玩家的称呼
     */
    const f = async (silence, you, callname) => {
      await silence.print_and_wait([
        silence.get_colored_name(),
        ' 躺在属于',
        silence.sex,
        '的床上，摸着自己的胸口，呼吸逐渐粗重起来。',
      ]);
      await silence.say_and_wait([
        '为什么呢？',
        callname,
        '，为什么我会在这个时候想起你呢？',
      ]);
      await silence.print_and_wait([
        '明明此刻早就应该入睡，保证明天有充足的精力去进行训练，但是 ',
        silence.get_colored_name(),
        ' 的脸上出现了一丝连',
        silence.sex,
        '自己都弄不明白的神色。',
      ]);
      await silence.say_and_wait('我居然也会……这样想念一个人吗？');
      await silence.print_and_wait(
        '心脏在剧烈地跳动，看向窗外皎洁的月亮，露出了一丝苦笑。',
      );
      await silence.say_and_wait(
        '已经开始对夜晚感到焦躁了，但是为什么呢……是因为感觉和您在一起很美好……不想离开您吗？',
      );
      await silence.print_and_wait([
        silence.sex,
        '的手不自觉的伸向了更加隐私的部位，',
        silence.get_colored_name(),
        ' 曾经感受过来自 ',
        you.get_colored_actual_name(),
        ' 的怀抱，而这一刻，连',
        silence.sex,
        '自己都没有意识到的种子正在缓缓的生根发芽。',
      ]);
      await silence.say_and_wait([
        '呼……哈……明明明天还要训练……',
        silence.name,
        '，你可真是个无药可救的白痴啊。',
      ]);
      if (silence.sex_code !== 1) {
        await silence.print_and_wait([
          '解开上衣的口子，捏住鲜红如蓓蕾的乳头，另一只手轻轻在已经开始湿润的穴口摩擦着，',
          silence.get_colored_name(),
          ' 将自己的身体交给了快感。',
        ]);
      }
      await silence.print_and_wait([
        '在 ',
        silence.get_colored_name(),
        ' 低沉的喘息声逐渐减弱之后。',
      ]);
      await silence.say_and_wait([
        '被单都有点湿了，但是……好像……好点了，明明在成为三冠',
        silence.uma_sex_title,
        '之前，都不应该有这种念头才对的。但是……忘不了',
        you.sex,
        '啊。',
      ]);
      await silence.say_and_wait(
        '不行……这个时候，已经到了这种时候，为了我们的愿望，我绝对不能有任何的分心……',
      );
      await silence.print_and_wait([
        '这样说着，',
        silence.get_colored_name(),
        ' 捏了一把自己的脸颊，清理完床铺之后闭上眼睛。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-title': (silence) => [silence.name, ' 的爱'],
  /**
   * @param {CharaTalk} silence 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async '74-3crown-a'(silence, you, callname) {
    await silence.say_and_wait([callname, '……我有件事想要和你说。']);
    await era.printAndWait([
      silence.get_colored_name(),
      ' 二话不说拉着 ',
      you.get_colored_name(),
      ' 的手走进了你们初遇的那片小树林里面，',
    ]);
    await era.printAndWait([
      '自从',
      silence.sex,
      '成为三冠赛',
      silence.uma_sex_title,
      '之后，',
      you.get_colored_name(),
      ' 隐约能够察觉到',
      silence.sex,
      '的心态发生了些许的变化。',
    ]);
    await silence.say_and_wait('我……有一件事想要告知于您。');
    await era.printAndWait([
      silence.get_colored_name(),
      ' 看起来似乎有些难以开口，',
    ]);
    await era.printAndWait([
      '那娇艳欲滴的红唇张了又闭，以至于 ',
      you.get_colored_name(),
      ' 开始往最坏的方向去猜想。',
    ]);
    era.printButton('「你……该不会是打算退役了吧？」', 1);
    await era.input();
    await silence.say_and_wait(
      '怎么可能！！！我们才刚刚开始我们的竞赛之路不是吗？',
    );
    await era.printAndWait([
      silence.get_colored_name(),
      ' 无奈的反驳道，不过',
      silence.sex,
      '看起来似乎没有那么紧张了，深呼吸之后',
      silence.sex,
      '重新张嘴。',
    ]);
    await silence.say_and_wait([callname, '，请和我谈恋爱吧！！']);
    era.printButton('「什……什么」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 开始怀疑自己的耳朵出现了问题，那个除了训练和比赛之外几乎什么都不管的 ',
      silence.get_colored_name(),
      ' 居然提出了谈恋爱的要求。',
    ]);
    era.printButton('接受（升级关系）', 1);
    era.printButton('暂拒（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await you.say_and_wait('我明白了，那么……请多指教……我的恋人。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 说这话的时候感觉自己有些不太适应这个称呼，',
      ]);
      await era.printAndWait([
        '但是',
        silence.sex,
        '看起来似乎比 ',
        you.get_colored_name(),
        ' 更加羞涩，那张平日里古井无波的脸庞此刻已经被红霞所占据，',
      ]);
      await era.printAndWait([
        '游离的眼神和不安晃动的尾巴说明',
        silence.sex,
        '绝对没有看起来那么平静。',
      ]);
      await silence.say_and_wait([
        '请……请多多指教，我会承担起作为一个合格女友的责任，',
        callname,
        '……我或许，已经无法离开你的身边了。',
      ]);
      await era.printAndWait([
        silence.sex,
        '抱住了 ',
        you.get_colored_name(),
        ' 的身子，捧住 ',
        you.get_colored_name(),
        ' 的脸将 ',
        you.get_colored_name(),
        ' 的吻夺走，',
        silence.sex,
        '的吻技非常的生涩，一上来就咬破了 ',
        you.get_colored_name(),
        ' 的嘴唇。',
      ]);
      await era.printAndWait([
        '但是你们什么都没有说，两个人在小树林里面拥抱着，直到似乎有人靠近这里才像是偷到了鸡的黄鼠狼逃跑一样匆匆离开。',
      ]);
    } else {
      await you.say_and_wait('那个……很抱歉，我想我们都需要再思考一下这件事。');
      await era.printAndWait([
        silence.get_colored_name(),
        ' 听到了这句话之后委屈的仿佛要哭出来了一样，',
        silence.sex,
        '强行眯起眼睛，低着脑袋不让 ',
        you.get_colored_name(),
        ' 看到',
        silence.sex,
        '的脸，闷闷的点了点头。',
      ]);
      await silence.say_and_wait([
        '我知道了……',
        callname,
        ' 说得对，是我太草率了，对不起……但是……如果可以的话，请务必给我一个正式的答复吧。',
      ]);
      await era.printAndWait([
        '说完',
        silence.sex,
        '就逃跑一样的离开了这片小树林，跑到了 ',
        you.get_colored_name(),
        ' 找不到的地方。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} silence 周日宁静
   * @param {CharaTalk} you 玩家
   * @param {string} callname 周日宁静对玩家的称呼
   */
  async 74(silence, you, callname) {
    await silence.say_and_wait([
      '结果……结果我依旧是一个可悲的失败者……连',
      silence.couple_title,
      '的愿望都没有办法完成，对不起对不起对不起对不起……',
    ]);
    await silence.say_and_wait('………');
    await era.printAndWait([
      silence.get_colored_name(),
      ' 靠在墙角留着眼泪，这里是特雷森这个巨大的学校里面的一处不起眼的角落，',
      silence.get_colored_name(),
      ' 以前没事的时候就喜欢跑到这里开看着天空发呆。',
    ]);
    era.printButton('「原来你在这里啊……我有事情要和你说。」', 1);
    await era.input();
    await silence.say_and_wait([
      '我明白了……',
      callname,
      '……不，',
      you.actual_name,
      '君，就像我以前说的那样，这次是我的问题，',
    ]);
    await silence.say_and_wait(
      '是我没能完成属于我们的目标，你已经尽了所有的能力完成了你的责任，',
    );
    await silence.say_and_wait(
      '如果你想要的话，我随时可以与你解约，非常抱歉，因为我的问题浪费了你那么多时间。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' 将手贴在了',
      silence.sex,
      '的脑门上，本来应该很快就被甩掉的手，此刻却稳稳的贴在 ',
      silence.get_colored_name(),
      ' 的脸颊上，',
    ]);
    await era.printAndWait([
      '这是',
      silence.sex,
      '从来没有露出过的神情，疲惫、失望而茫然，就好像是一直以来支撑着',
      silence.sex,
      '走下去的支柱突然就碎裂了一般。',
    ]);
    await you.say_and_wait(
      '宁静，人从来都不是为了他人而活着的，我记得你和我说过的那些事情，那个雨夜所发生的事情，我都记得一清二楚。',
    );
    await era.printAndWait([
      silence.get_colored_name(),
      ' 抬起头，在等待着 ',
      you.get_colored_name(),
      ' 的下文。',
    ]);
    await you.say_and_wait([
      '或许你失败了，或许你没有完成',
      silence.couple_title,
      '最后的愿望……但是，如果是你最好的朋友们的话，',
      silence.couple_title,
      '是不会希望你像现在这样的……不是吗？',
    ]);
    await era.printAndWait([
      silence.get_colored_name(),
      ' 摸着自己的脸颊，',
      silence.sex,
      '轻轻的起身，然后瘫在 ',
      you.get_colored_name(),
      ' 的怀里面。',
    ]);
    await silence.say_and_wait([
      '我不知道……',
      silence.couple_title,
      '和我谈起赛',
      silence.uma_sex_title,
      '的时候，那种就好像是发光一样的眼神，',
    ]);
    await silence.say_and_wait('说到三冠赛事的时候的兴奋……但是我却失败了。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 没有继续说话，默默的抱着 ',
      silence.get_colored_name(),
      '，让',
      silence.sex,
      '在 ',
      you.get_colored_name(),
      ' 的怀中默默的流泪。',
    ]);
    await silence.say_and_wait([
      '抱歉……',
      callname,
      '，我好像做了很丢人的事情。',
    ]);
    await era.printAndWait([
      silence.get_colored_name(),
      ' 没有抬头，声音微弱，但是 ',
      you.get_colored_name(),
      ' 能听得出来，',
      silence.sex,
      '的心情已经平稳了下来。',
    ]);
    era.printButton(
      '「并没有，能够勇敢的面对自己的挫折和失败，是非常厉害的事情。所以说，有马纪念，你要参加吗？」',
      1,
    );
    await era.input();
    await silence.say_and_wait(
      '当然了，虽然没有能把三冠献给您，但是我依旧希望您能和我一起在这条路上走下去，',
    );
    await silence.say_and_wait([
      '不仅仅只是作为我的训练员……感谢您一直陪伴在我的身边……',
      callname,
      '，这是一个小',
      silence.uma_sex_title,
      '微不足道但是真挚的心意，我喜欢你，',
    ]);
    await silence.say_and_wait(
      '我希望成为你的恋人，我希望能够和你一起走进婚姻的殿堂，我希望我们能够一辈子一起走下去，不知道您……有什么想法呢？',
    );
    era.printButton('接受（升级关系）', 1);
    era.printButton('暂拒（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await you.say_and_wait('我明白了，那么……请多指教……我的恋人。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 说这话的时候感觉自己有些不太适应这个称呼，但是',
        silence.sex,
        '看起来似乎比 ',
        you.get_colored_name(),
        ' 更加羞涩，',
      ]);
      await era.printAndWait([
        '那张平日里古井无波的脸庞此刻已经被红霞所占据，游离的眼神和不安晃动的尾巴说明',
        silence.sex,
        '绝对没有看起来那么平静。',
      ]);
      await silence.say_and_wait([
        '请……请多多指教，我会承担起作为一个合格女友的责任，',
        callname,
        '……我或许，已经无法离开你的身边了。',
      ]);
      await era.printAndWait([
        silence.sex,
        '抱住了 ',
        you.get_colored_name(),
        ' 的身子，捧住 ',
        you.get_colored_name(),
        ' 的脸将 ',
        you.get_colored_name(),
        ' 的吻夺走，',
        silence.sex,
        '的吻技非常的生涩，一上来就咬破了 ',
        you.get_colored_name(),
        ' 的嘴唇。',
      ]);
      await era.printAndWait([
        '但是你们什么都没有说，两个人拥吻在一起，许久之后才松开嘴唇，',
        silence.get_colored_name(),
        ' 舔着口腔中的血腥味，露出了愉快的笑容。',
      ]);
      await silence.say_and_wait([
        callname,
        '，我以后再也不会放开 ',
        you.get_colored_name(),
        ' 的手了……绝对不会。',
      ]);
    } else {
      era.printButton('那个……很抱歉，我想我们都需要再思考一下这件事。', 1);
      await era.input();
      await era.printAndWait([
        silence.get_colored_name(),
        ' 听到了这句话之后委屈的仿佛要哭出来了一样，',
        silence.sex,
        '强行眯起眼睛，低着脑袋不让 ',
        you.get_colored_name(),
        ' 看到',
        silence.sex,
        '的脸，闷闷的点了点头。',
      ]);
      await silence.say_and_wait([
        '我知道了……',
        callname,
        ' 说得对，是我太草率了，对不起……但是……如果可以的话，请务必给我一个正式的答复吧。',
      ]);
      await era.printAndWait([
        silence.get_colored_name(),
        ' 头也不回的离开了你们所在的地方，似乎是怕 ',
        you.get_colored_name(),
        ' 看到',
        silence.sex,
        '的表情，',
        silence.get_colored_name(),
        ' 跑的非常快。',
      ]);
    }
    return ret;
  },
};
