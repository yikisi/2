/**
 * @file 周日宁静 - 招募
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} ss
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} call_coffee
   * @param {string} title
   */
  async rec(ss, coffee, you, call_coffee, title) {
    await era.printAndWait([
      '这是一个微凉的清晨，',
      you.get_colored_name(),
      ' 起床之后发现时间还早，在稍作洗漱之后就换上了日常工作穿的普通装束准备在学院内走一走。',
    ]);
    await era.printAndWait([
      '身为',
      title,
      '，',
      you.get_colored_name(),
      ' 目前在特雷森过的还算不错，但是 ',
      you.get_colored_name(),
      ' 仍然需要为了找到自己的担当而付出一定的努力。',
    ]);
    await era.printAndWait([
      '在走出了训练员宿舍之后，',
      you.get_colored_name(),
      ' 来到了附近的一片小树林里面，听说这里时不时会传出奇怪的声音被周边的小',
      ss.uma_sex_title,
      '们称为藏有怨灵的怪谈树林，但是 ',
      you.get_colored_name(),
      ' 知道这里面的真相其实比小',
      ss.uma_sex_title,
      '传言的要无趣的多。',
    ]);
    era.println();
    await era.printAndWait([
      '突然 ',
      you.get_colored_name(),
      ' 的耳边传来了树叶被拨动的声音，随后是运动鞋踩在地上的声音伴随着均匀的呼吸声越来越靠近，',
      you.get_colored_name(),
      ' 意识到有人似乎正在向这里跑过来。',
    ]);
    era.printButton('（这个时候……会是谁呢？）', 1);
    await era.input();
    await era.printAndWait([
      '拨开挡在面前的树枝，',
      you.get_colored_name(),
      ' 重新回到了林间小道上，看到了那黑色的身影。',
    ]);
    era.println();
    await era.printAndWait([
      '长而柔顺的黑发与被宽大运动服包裹的纤细身影映在了 ',
      you.get_colored_name(),
      ' 的脑海之中，',
      you.get_colored_name(),
      ' 不知道为什么这个时候会有',
      ss.uma_sex_title,
      '在这里晨练，毕竟要训练的话明显去训练场会舒服很多。',
    ]);
    era.println();
    await era.printAndWait([
      '沉默的黑发',
      ss.uma_sex_title,
      '明显也发现了 ',
      you.get_colored_name(),
      ' 的存在，',
      '但是',
      ss.sex,
      '赤红色的瞳孔仅仅是撇了 ',
      you.get_colored_name(),
      ' 一眼就继续调整自己的呼吸，仿佛 ',
      you.get_colored_name(),
      ' 只是一团有颜色的空气而已。',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 疯狂的在脑海中寻找着关于这个',
      ss.uma_sex_title,
      '的印象，就这样 ',
      you.get_colored_name(),
      ' 搜索着自己的记忆停在了路边。',
    ]);
    era.println();
    await ss.say_as_unknown_and_wait('你好……');
    await era.printAndWait([
      '安静的黑发',
      ss.uma_sex_title,
      '用不带感情的冰冷语句将 ',
      you.get_colored_name(),
      ' 从回忆中拽了回来。',
    ]);
    era.println();
    await you.say_and_wait([
      era.get('cflag:25:招募状态') === 1 ? '' : '你是？',
      call_coffee,
      '？',
    ]);
    era.println();
    await era.printAndWait([
      '听到这个名字的黑发',
      ss.uma_sex_title,
      '皱起了眉头，似乎对 ',
      you.get_colored_name(),
      ' 说的话有些不满。',
    ]);
    await era.printAndWait([
      '这时 ',
      you.get_colored_name(),
      ' 才发现在宽大运动服下的纤细身影其实相当的丰满，',
    ]);
    ss.sex_code !== 1 &&
      (await era.printAndWait(
        '柔软而丰满的胸部似乎被是因为被强行用胸衣固定住而略显不满的伴随着呼吸摇晃着，',
      ));
    await era.printAndWait([
      '肉感与力量感并存的一双美腿，在 ',
      you.get_colored_name(),
      ' 看来简直是最适合赛',
      ss.uma_sex_title,
      '偶像这个职业的双腿。',
    ]);
    era.println();
    await era.printAndWait([
      '很明显 ',
      you.get_colored_name(),
      ' 的第一句话就让',
      ss.sex,
      '有些不满，但是面前的',
      ss.uma_sex_title,
      '并没有发作，',
      ss.sex,
      '只是背着耳朵说道。',
    ]);
    await ss.say_and_wait(ss.name);
    await you.say_and_wait('啊？');
    await era.printAndWait([you.get_colored_name(), ' 有些疑惑不解。']);
    await ss.say_and_wait([
      '我叫 ',
      ss.actual_name,
      '，请记好，不然下次我不知道会不会把你送去医务室。',
    ]);
    era.println();
    await era.printAndWait([
      '面前的 ',
      ss.get_colored_name(),
      ' 面无表情的威胁让 ',
      you.get_colored_name(),
      ' 感觉有些可爱，但是 ',
      you.get_colored_name(),
      ' 是万万不敢在这个地方表现出来的。',
    ]);
    await era.printAndWait([
      '因为 ',
      you.get_colored_name(),
      ' 知道',
      ss.sex,
      '真的有可能把 ',
      you.get_colored_name(),
      ' 送进医务室接受治疗。',
    ]);
    era.printButton(
      `「好的，${ss.name}……很好听的名字，很适合你，我记住了。」`,
      1,
    );
    await era.input();
    await era.printAndWait([
      ss.get_colored_name(),
      ' 的心情似乎好了一点，但是当 ',
      you.get_colored_name(),
      ' 想要继续和',
      ss.sex,
      '搭话的时候，却发现',
      ss.sex,
      '又一言不发的离开了。',
    ]);
    await era.printAndWait([
      '后来 ',
      you.get_colored_name(),
      ' 才发现，',
      ss.get_colored_name(),
      ' 的瞳孔是赤红色的，而 ',
      coffee.get_colored_name(),
      ' 的眼睛是金黄色的，',
    ]);
    await era.printAndWait([
      '这让 ',
      you.get_colored_name(),
      ' 有些尴尬的挠了挠脑袋，毕竟两个',
      ss.uma_sex_title,
      '的长相几乎一模一样。',
    ]);
    era.drawLine({ content: '选拔赛结束后' });
    await era.printAndWait([
      ss.get_colored_name(),
      ' 以无可辩驳的实力拿下了第一名，周围的训练员们似乎都开始骚动起来，',
    ]);
    await era.printAndWait([
      '但是',
      ss.sex,
      '依旧保持着沉默的态度，似乎根本就没有想要与任何训练员接触的想法一样。',
    ]);
    era.println();
    await era.printAndWait('面对这个情况……');
    era.println();
    era.printButton(`尝试鼓起勇气和${ss.sex}搭话。`, 1);
    era.printButton(
      `（还是不要去打扰刚刚跑完比赛需要休息的${ss.uma_sex_title}比较好）`,
      2,
    );
    await era.input();
    await era.printAndWait([
      '当 ',
      you.get_colored_name(),
      ' 还在思考的时候，',
      ss.get_colored_name(),
      ' 似乎快 ',
      you.get_colored_name(),
      ' 一步做出了选择。',
    ]);
    await era.printAndWait([
      ss.sex,
      '像是没有声音的幽灵一样站在了 ',
      you.get_colored_name(),
      ' 的面前，美丽的脸庞上沁出的汗珠在阳光下格外明显，那头柔顺的黑发此刻就和最高级的丝绸一般在 ',
      you.get_colored_name(),
      ' 眼前展开，和 ',
      you.get_colored_name(),
      ' 对上视线的一瞬间赤红色的眼眸难得的出现了笑意。',
    ]);
    era.println();
    await ss.say_and_wait('怎么样？现在你记住我的名字了吗？');
    era.printButton(`「${ss.actual_name}，真的是很好听的名字」`, 1);
    era.printButton(
      `「你难道不是叫${coffee.actual_name}吗？」（不建议选择）`,
      2,
    );
    if ((await era.input()) === 1) {
      await ss.say_and_wait(
        '那么，你愿意成为我的训练员吗？让我的名字永远留在在你的脑海中。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 意识到 ',
        ss.get_colored_name(),
        ' 的笑容真的非常的美丽，于是 ',
        you.get_colored_name(),
        ' 接住了',
        ss.sex,
        '伸出来的手掌。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 细腻的手指在 ',
        you.get_colored_name(),
        ' 的掌心调皮的划了划，似乎对于 ',
        you.get_colored_name(),
        ' 的同意非常开心。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 感觉到一股巨力让 ',
        you.get_colored_name(),
        ' 的肠胃翻江倒海，在眼前的事物彻底变成纯黑一片之前，',
        you.get_colored_name(),
        ' 看到了 ',
        ss.get_colored_name(),
        ' 那愤怒的表情。',
      ]);
      era.drawLine({ content: '医务室内' });
      await era.printAndWait([
        you.get_colored_name(),
        ' 在医务室里面醒来，',
        ss.get_colored_name(),
        ' 面无表情的坐在旁边的椅子上看着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '看到 ',
        you.get_colored_name(),
        ' 终于揉着眼睛醒过来的样子，',
        you.get_colored_name(),
        ' 可以明显的感觉到',
        ss.sex,
        '似乎松了一口气。',
      ]);
      await ss.say_and_wait([
        '现在你记住我的名字了吗？我叫 ',
        ss.get_colored_name(),
        '，',
        coffee.get_colored_name(),
        ' 只是我的远房亲戚！',
      ]);
      await ss.say_and_wait(
        '以及……作为补偿，我会成为你的担当，请放心，我会取得一切你想要的成功。',
      );
    }
  },
};
