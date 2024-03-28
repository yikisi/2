const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { attr_enum } = require('#/data/train-const');

module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  await era.printAndWait([
    '为了兴致正旺的 ',
    urara.get_colored_name(),
    '，也为了在下次比赛前讨个彩头，',
    me.get_colored_name(),
    ' 决定带',
    urara.get_uma_sex_title(),
    '一起去神社看看。',
  ]);
  await era.printAndWait('毕竟也没有要紧的事，再者来都来了。');
  await era.printAndWait([
    '只是在踏上阶梯时，',
    me.get_colored_name(),
    ' 感受到这里的氛围与平常来时稍显不同。',
  ]);
  await era.printAndWait([
    '一般来说这座小神社总是热闹的，除了周围的居民与会在这里玩耍小孩子，还会有借着长阶梯进行训练的',
    urara.get_uma_sex_title(),
    '们。',
  ]);
  await era.printAndWait(
    '但是今天的阶梯却格外的安静，除了两侧林地的摇动与鸟鸣外，剩下的就只有两人的脚步声了。',
  );
  era.println();
  if (era.get('relation:52:0') > 150 && edu_marks.loop < 2) {
    await era.printAndWait([
      '只有两人的攀登确实缺少了一丝生气，但好好牵着 ',
      me.get_colored_name(),
      ' 的手的 ',
      urara.get_colored_name(),
      ' 其实也一直以笑脸伴在 ',
      me.get_colored_name(),
      ' 的身边。',
    ]);
    await urara.say_and_wait('总感觉今天的这里说不上来的干净！');
    await era.printAndWait([
      '虽然没弄懂指的是哪方面，但 ',
      me.get_colored_name(),
      ' 点头认同了 ',
      urara.get_colored_name(),
      ' 的看法，心情也在同',
      urara.get_uma_sex_title(),
      '相伴中逐渐明快起来。',
    ]);
  } else {
    await era.printAndWait([
      '在犹豫了片刻后，',
      urara.get_colored_name(),
      ' 还是上前一步牵住 ',
      me.get_colored_name(),
      ' 的手，并突然站到了 ',
      me.get_colored_name(),
      ' 的身前。',
    ]);
    await urara.say_and_wait([callname, '！耐力训练，要跟上哦？']);
    await era.printAndWait([
      '在还没反应过来前，',
      me.get_colored_name(),
      ' 就被突然恶作剧般笑着跑起来的担当拉上了下一节台阶——',
    ]);
  }
  era.println();

  await era.printAndWait([
    '随着被跑在前面的 ',
    urara.get_colored_name(),
    ' 牵着踏上最后一节台阶，熟悉的小神社出现在阶梯顶端的鸟居之后。',
  ]);
  await era.printAndWait(
    '不管氛围如何变化，今天的它依旧在此安静地等候着参拜者。',
  );
  await era.printAndWait([
    '与 ',
    urara.get_colored_name(),
    ' 一同站到了神社的钱箱前，',
    me.get_colored_name(),
    ' 取出两枚硬币，将其中一枚送到了 ',
    urara.get_colored_name(),
    ' 手中。',
  ]);
  await era.printAndWait([
    '对着硬币眨了眨眼睛后，',
    urara.get_colored_name(),
    ' 竖起耳朵，心领神会的攥紧了它……',
  ]);
  await era.printAndWait([
    '在简单地做完不那么标准的仪式后，',
    me.get_colored_name(),
    ' 帮 ',
    urara.get_colored_name(),
    ' 取下叠好的签子，准备与 ',
    urara.get_colored_name(),
    ' 一同展开手中的纸条——',
  ]);

  if ((hook.arg = Math.random() < 0.5)) {
    await urara.say_and_wait('啊！这次的运气不错呢！');
    await era.printAndWait([
      urara.get_colored_name(),
      ' 高兴的向 ',
      me.get_colored_name(),
      ' 展示着手中展开的的纸条，上面印着的结果也确实不错。',
    ]);

    era.printButton('「恭喜，我的结果也不错。」', 1);
    await era.input();

    await urara.say_and_wait([
      '抽签能抽到好结果总是很开心！',
      callname,
      ' 也开心起来了吧！',
    ]);
    await era.printAndWait([
      '不过开心的原因比起抽到好签，更多是因为 ',
      urara.get_colored_name(),
      ' 才对。看着小小担当的笑脸，',
      me.get_colored_name(),
      ' 也在不知不觉中浅浅勾起了嘴角。',
    ]);
    await era.printAndWait([
      '看着在神社的院子中像只开心的小鸟般打着转的 ',
      urara.get_colored_name(),
      '，熟悉的温暖感又充满了 ',
      me.get_colored_name(),
      ' 的身体。',
    ]);
    await era.printAndWait([
      '心情变得轻松了不少，这样最近也能好好努力了吧？回想着两人的初次相遇，',
      me.get_colored_name(),
      ' 深吸了一口气。',
    ]);
    await urara.say_and_wait([callname, '，要走了哦——']);
    await era.printAndWait([
      '停在红色的鸟居前，粉色小鸟正招手呼唤着 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '在离开之前，越过林地的枝叶望向天空，',
      me.get_colored_name(),
      ' 向不知道在哪里注视着的某人发出了感谢。',
    ]);
    await era.printAndWait('今天是个好日子啊。');
  } else if (edu_marks.church === 1) {
    edu_marks.church++;
    const in_urara = get_chara_talk(52, chara_colors[52][1]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '从前有个被称为塞翁的人，遇上了一位',
      urara.get_uma_sex_title(),
      '——',
    ]);
    await in_urara.say_as_unknown_and_wait('咳，不对，错了——');
    era.drawLine();

    await era.printAndWait([
      '不过这一次，在将签子递给担当之前，',
      me.get_colored_name(),
      ' 无意识地将纸条提前翻开了。',
    ]);

    era.printButton('「……」', 1);
    await era.input();

    await era.printAndWait([
      '于是，看着眼前满脸写着期待的 ',
      urara.get_colored_name(),
      '，手中拿着两张别无二致的「大凶」的 ',
      me.get_colored_name(),
      ' 陷入了复杂的沉默。',
    ]);

    await in_urara.say_as_unknown([
      '这时，训练员',
      me.get_adult_sex_title(),
      '（您）的选择是……',
    ]);
    era.printButton('「是、是大凶哦……」（耐力+10）', 1);
    era.printButton('「是、是小吉……？」（速度+10）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 还是颤抖着对 ',
        urara.get_colored_name(),
        ' 说了实话。',
      ]);
      await era.printAndWait([
        '在听到 ',
        me.get_colored_name(),
        ' 的回答后，虽然表情有点失落，但只持续了几秒便又换上了无畏的笑颜。',
      ]);
      await urara.say_and_wait([
        '没关系的，大凶的话只要回去的时候看好脚下就没问题！',
        sys_get_colored_callname(52, 56),
        ' 也是这么说的！而且乌拉拉很擅长过红绿灯的哦？',
      ]);
      await era.printAndWait([
        '听见 ',
        urara.get_colored_name(),
        ' 包含了几分可靠的可爱回答后，',
        me.get_colored_name(),
        ' 也安心的点了点头，心里的负担也逐渐放下来。',
      ]);
      await era.printAndWait([
        '但就在负担刚放下没两秒，更新的压力又将 ',
        me.get_colored_name(),
        ' 的心跳提到了嗓子眼上。',
      ]);
      await era.printAndWait([
        '已经率先踏上归路的 ',
        urara.get_colored_name(),
        ' 依旧在回头对 ',
        me.get_colored_name(),
        ' 说着什么，但却也因此忘记了还要「注意脚下」。',
      ]);
      await era.printAndWait([
        '此刻的',
        urara.get_uma_sex_title(),
        '已经来到了阶梯的顶层前，而阶梯中的某块石板正反射着镜面般的光。',
      ]);
      await era.printAndWait([
        '随后，小',
        urara.get_uma_sex_title(),
        '便在有些茫然的表情中脚下一滑……',
      ]);

      era.printButton('「小心脚下！」', 1);
      await era.input();

      await era.printAndWait([
        '虽然 ',
        me.get_colored_name(),
        ' 及时将 ',
        urara.get_colored_name(),
        ' 拽住了，但随着脚下腾空，',
        me.get_colored_name(),
        ' 还是在垫在 ',
        urara.get_colored_name(),
        ' 身下后，像玩公园的滑梯般滑下了那超长的阶梯。',
      ]);
      await era.printAndWait(
        '只是尽管在跌倒前就已经做好了心理准备，这个滑梯的弧度还是过于颠簸了。',
      );
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 有点心虚地将两张纸条藏到身后。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 毫不怀疑的相信了 ',
        me.get_colored_name(),
        ' 的回答，还似乎因为抽到了吉而很开心的样子。',
      ]);
      await era.printAndWait([
        '虽然刚才还在犹豫，但现在看来还是 ',
        urara.get_colored_name(),
        ' 的笑脸更重要一些。',
      ]);
      await era.printAndWait([
        '这样想着，',
        me.get_colored_name(),
        ' 悄悄松了口气。在偷偷装起两张签子后，',
        me.get_colored_name(),
        ' 思考着接下来要和 ',
        urara.get_colored_name(),
        ' 去哪里转转。',
      ]);
      await era.printAndWait([
        '就像要发泄被小瞧了的怨气，才刚过了院子，被 ',
        me.get_colored_name(),
        ' 没收掉的两张「大凶」便迫不及待的将效力拍在了 ',
        me.get_colored_name(),
        ' 的头上。',
      ]);
      await urara.say_and_wait([callname, '！注意脚下！']);
      await era.printAndWait([
        '虽然在 ',
        me.get_colored_name(),
        ' 身后的 ',
        urara.get_colored_name(),
        ' 以最快速度跑了起来，但体型太小的',
        urara.get_uma_sex_title(),
        '还是没能及时拽住 ',
        me.get_colored_name(),
        ' 偏移的身体。',
      ]);
      await era.printAndWait([
        '就像赶着应验一般，因思考而分神的 ',
        me.get_colored_name(),
        '，不知不觉间踩在了阶梯顶层的石板那最光滑的一节上。',
      ]);
      await era.printAndWait([
        '于是随着脚底一空，',
        me.get_colored_name(),
        ' 就像训练失败的',
        urara.get_uma_sex_title(),
        '那般，在 ',
        urara.get_colored_name(),
        ' 惊慌失措的呼声中噼里啪啦的滑下了神社那超长的阶梯……',
      ]);
    }

    await era.printAndWait([
      { isBr: true },
      '一段时间后，',
      me.get_colored_name(),
      ' 工整的仰面躺在阶梯的底部，跌得七荤八素的脑袋里正努力收拾着收拾着撒了一地的各种念头。',
    ]);
    await era.printAndWait([
      '幸好这样滑下来的不是 ',
      urara.get_colored_name(),
      '。望着上方的蓝天与 ',
      urara.get_colored_name(),
      ' 露出担忧神情的小脸，',
      me.get_colored_name(),
      ' 只有这条想法是清晰的。',
    ]);
    await era.printAndWait([
      '万幸的是在检查过一遍身体后，',
      urara.get_colored_name(),
      ' 和 ',
      me.get_colored_name(),
      ' 都因为 ',
      me.get_colored_name(),
      ' 的身体没出什么问题松了口气。',
    ]);
    await era.printAndWait([
      '就是天上那两张正在从 ',
      me.get_colored_name(),
      ' 眼前乘风飞过的「大凶」签子，总感觉像是某个人在看不见的地方无声的嘲笑着 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('哎呦，背真的很疼啊……');
    await era.printAndWait([
      '不过在回去之后，',
      urara.get_colored_name(),
      ' 似乎为了 ',
      me.get_colored_name(),
      ' 更努力地',
      ret === 1 ? '陪在身边' : '训练',
      '了，虽然 ',
      me.get_colored_name(),
      ' 实际并没有受伤……',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '嗯？看什么？不是我干的哦？真的不是哦？',
    );
    await print_event_name('塞翁失马？', urara);
    const attr_change = new Array(5).fill(0);
    attr_change[ret === 1 ? attr_enum.endurance : attr_enum.speed] = 10;
    get_attr_and_print_in_event(52, attr_change, 0);
  } else {
    await urara.say_and_wait([
      '诶？',
      callname,
      '，这次的结果好像有些糟糕，',
      callname,
      ' 的也是吗？',
    ]);
    await era.printAndWait([
      '展示着手中内容并不是很好的纸条，',
      urara.get_colored_name(),
      ' 看起来有点失落，但随后就像并没在意般笑着转向了 ',
      me.get_colored_name(),
      '。',
    ]);

    era.printButton('「嗯，不过我觉得不要紧。」', 1);
    await era.input();

    await urara.say_and_wait(
      '嗯！运气不好是常有的事嘛，以前的乌拉拉也总是输个不停呢！一起放心的回去吧！',
    );
    await era.printAndWait([
      '听到 ',
      me.get_colored_name(),
      ' 的回答，',
      urara.get_colored_name(),
      ' 安心地笑起来，上前拉住了 ',
      me.get_colored_name(),
      ' 的手。',
    ]);
    await era.printAndWait(
      '随后，准备回家的二人便在迈步有些滑稽的一同向前扑了出去，不知何时，两人的鞋带无声无息地散掉了。',
    );
    await era.printAndWait(
      '不过看着坐在地上的彼此那茫然的脸，同时被鞋带绊倒的二人还是莫名地笑出了声。',
    );
    await era.printAndWait([
      '抽到不好的纸条，结果也不一定是坏事呢！互相拍着对方的尘土，',
      urara.get_colored_name(),
      ' 乐观的想着。',
    ]);
    await era.printAndWait([
      '不过这不会是真的灵验了吧？想起刚刚不同寻常的氛围，带着 ',
      urara.get_colored_name(),
      ' 踏上归路的 ',
      me.get_colored_name(),
      ' 若有所思。',
    ]);
    edu_marks.church += !edu_marks.church;
  }
};
