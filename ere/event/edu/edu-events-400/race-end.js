const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(0);
    if (era.get('cflag:400:育成回合计时') === 23) {
      await print_event_name('完美的开始', ss);
      await era.printAndWait([
        ss.get_colored_name(),
        ' 毫无悬念的拿下了出道战的胜利，',
      ]);
      await era.printAndWait([
        '在',
        ss.sex,
        '冲过终点的那一刻，',
        me.get_colored_name(),
        ' 终于放下心来，但是随后胜利的',
        ss.sex,
        '径直来到了作为训练员的 ',
        me.get_colored_name(),
        ' 面前。',
      ]);
      await ss.say_and_wait(
        '我说过的，会将胜利带你的与你一起分享的，现在我们已经迈出了第一步了哦。',
      );
      await era.printAndWait([
        ss.sex,
        '握紧了 ',
        me.get_colored_name(),
        ' 的手，那张完美的脸颊上露出了柔软的笑意。',
      ]);
      await ss.say_and_wait([callname, '，一起向着我们的目标，迈出步伐吧……']);
      await era.printAndWait([
        '观众的欢呼与赞扬声成为 ',
        me.get_couple_title(),
        ' 之间的背影音，',
        ss.sex,
        '赛前略显不安的神色在此刻荡然无存，留下的只有开心。',
      ]);
      await era.printAndWait([
        '这时 ',
        me.get_colored_name(),
        ' 才注意到',
        ss.sex,
        '的身上已经满是汗液，甚至连运动服都被汗液打湿勾勒出了些许完美身材的轮廓。',
      ]);
      era.printButton(
        '「真是非常非常厉害啊……但是就算是这样，我还是要先让你把脑袋和身子擦一擦才行，不然的话对身体不太好」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '毛巾被盖到了',
        ss.sex,
        '的脑袋上，',
        ss.get_colored_name(),
        ' 并没有拒绝由 ',
        me.get_colored_name(),
        ' 来为',
        ss.sex,
        '擦干净脑门上的汗珠。',
      ]);
      await ss.say_and_wait(
        '这场比赛到这里就结束了，如果您有复盘的需要的话，可以找时间联系我，如果没有的话，我觉得我们可以投入关于下一场比赛的针对训练和日常的训练当中了。',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        ' 脸上的笑容并没有停留很久，',
        ss.sex,
        '认真的看向 ',
        me.get_colored_name(),
        '，眼神之中满是认真与好胜心。',
      ]);
      await era.printAndWait([
        '就这样，',
        ss.get_colored_name(),
        ' 完成了自己的出道赛。',
      ]);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 5),
      );
      extra_flag.pt_change = 30;
    } else {
      await print_event_name('好的开始', ss);
      await ss.say_and_wait(
        '果然啊，上次只是略有偏差而已，我们的组合并不是错误的选择。',
      );
      await ss.say_and_wait('一起前进吧，我们可是赢下来了哦。');
      gacha(Object.values(attr_enum), 2).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
    }
  };

  handlers[race_enum.kent_der] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 10),
    );
    const coffee = get_chara_talk(25);
    await print_event_name('胜利的大舞台', ss);
    await ss.say_and_wait(['我们赢了对吗？', callname, '！！！']);
    await era.printAndWait([
      ss.sex,
      '完全没有了以往的沉着，开心的像是一个小孩子一样，激动的抱住了 ',
      me.get_colored_name(),
      '。',
    ]);
    await ss.say_and_wait('三冠的第一冠……我们两个真的拿下来了对吧？！');
    era.printButton('点点头', 1);
    await era.input();
    await ss.say_and_wait([
      '太好了……太好了，果然训练员你就是最适合我的训练员',
      get_chara_talk(0).get_adult_sex_title(),
    ]);
    await ss.say_and_wait([
      '接下来……还有 ',
      race_infos[race_enum.prea_sta].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.belm_sta].get_colored_name(),
      '，请务必不要在乎我的身体如何，继续加大训练量，只有这样我们才能拿到更大的优势。',
    ]);
    await coffee.say_and_wait('祝贺你……赛场上的身姿，真的很厉害。');
    await ss.say_and_wait('嗯……');
    await era.printAndWait([
      '然后在 ',
      ss.get_colored_name(),
      ' 走出去之后，',
      coffee.get_colored_name(),
      ' 才继续说道。',
    ]);
    await coffee.say_and_wait([
      ss.sex,
      '就拜托您了，',
      ss.sex,
      '一直是一个柔软的人，请稍微照顾一下',
      ss.sex,
      '的心情吧。',
    ]);
    await era.printAndWait([
      '在后面的采访之中，',
      ss.sex,
      '也丝毫不吝啬对于 ',
      me.get_colored_name(),
      ' 的赞美之词，',
      me.get_colored_name(),
      ' 能看得出来，',
      ss.sex,
      '不仅仅是开心，更是松了口气。',
    ]);
  };

  handlers[race_enum.prea_sta] = async (ss, me, callname, extra_flag) => {
    if (
      !check_aim_race(new RaceHistory(400).get(), race_enum.kent_der, 1, 1) ||
      extra_flag.rank !== 1
    ) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 10),
    );
    extra_flag.relation_change = 30;
    await print_event_name('第二场大胜', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 穿着自己的决胜服，站在终点处呆呆的望向天空然后举起手的样子赢得了全场的欢呼。',
    ]);
    await era.printAndWait([
      '新的二冠王，几乎是不可阻挡的胜者，所有人都在为',
      ss.sex,
      '献上祝福，祝福着一位新的三冠王的诞生。',
    ]);
    await era.printAndWait([
      '见状 ',
      me.get_colored_name(),
      ' 先行一步退回了休息室内，为 ',
      ss.get_colored_name(),
      ' 准备接下来需要用上的东西，毛巾、热水、水果以及一些其他的杂物。',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 走进来的时候 ',
      me.get_colored_name(),
      ' 本来想要让',
      ss.sex,
      '先擦一擦汗，但是',
      ss.sex,
      '一句话也不说扑到 ',
      me.get_colored_name(),
      ' 的身上，抱住了 ',
      me.get_colored_name(),
      '。',
    ]);
    await ss.say_and_wait([
      callname,
      '……我没有再做梦吧？我们离最初的目标，就剩下一场比赛了对吗？',
    ]);
    await era.printAndWait([
      ss.sex,
      '的语气非常激动，',
      me.get_colored_name(),
      ' 拍了拍',
      ss.sex,
      '的后背，感受着',
      ss.sex,
      '的温度。',
    ]);
    era.printButton(
      `「是的，我们离最初的目标就差最后一步了，恭喜你，${ss.name}」`,
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '真的……真的非常感谢，作为拖雷纳一直在为我的训练和生活操心，这场胜利，是你和我一起拿下的，是我给你的答案！',
    );
    await era.printAndWait([
      ss.sex,
      '抬起头，金黄色的瞳孔之中那闪耀的自信让',
      ss.sex,
      '看起来就好像是天生的主角一样。',
    ]);
    await ss.say_and_wait([
      '所以啊，',
      callname,
      '，接下来就拜托你了哦，',
      race_infos[race_enum.belm_sta].get_colored_name(),
      '，三冠的最后一站。',
    ]);
    await era.printAndWait([
      '今天的庆功宴，',
      ss.get_colored_name(),
      ' 非常开心，说话的语气也比以往柔和了许多。',
    ]);
  };

  handlers[race_enum.belm_sta] = async (ss, me, callname, extra_flag) => {
    if (
      !check_aim_race(new RaceHistory(400).get(), race_enum.kent_der, 1, 1) ||
      !check_aim_race(new RaceHistory(400).get(), race_enum.prea_sta, 1, 1) ||
      extra_flag.rank !== 1
    ) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(10);
    extra_flag.motivation_change = 1;
    extra_flag.pt_change = 45;
    await print_event_name('夙愿完成！', ss);
    era.printButton(
      `「恭喜你，三冠王${ss.name}，成为最今年最强的赛${ss.get_uma_sex_title()}了呢。」`,
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '托您的福……我也终于可以松口气了，说实话……我已经不知道如何用言语表达我的感谢了。',
    );
    await ss.say_and_wait('是您带领我完成了我的愿望……站在了最高的舞台上。');
    await era.printAndWait([
      ss.sex,
      '向 ',
      me.get_colored_name(),
      ' 鞠了个躬，一直都不肯抬起头来。',
    ]);
    await ss.say_and_wait(
      '如果没有您的帮助的话，我是不可能走到这里的，我深知这点……我也终于可以安心了，从此以后。',
    );
    await era.printAndWait([
      ss.sex,
      '抬头抱住了 ',
      me.get_colored_name(),
      '，场外的气氛火热的就像是即将喷发的火山，但是赛场的走廊内，',
      ss.get_colored_name(),
      ' 比以往任何时候都要温柔，',
    ]);
    await era.printAndWait([
      ss.sex,
      '轻轻的抱住 ',
      me.get_colored_name(),
      ' 贴在 ',
      me.get_colored_name(),
      ' 的身上，',
      me.get_colored_name(),
      ' 甚至能够感觉到',
      ss.sex,
      '的吐息打在 ',
      me.get_colored_name(),
      ' 身上那种轻柔的感觉。',
    ]);
    await ss.say_and_wait(
      '请稍微，稍微让我依靠一下如何？就像您一直默默做的那样，这次就让我光明正大的依靠您一下吧。',
    );
  };

  handlers[race_enum.arim_kin] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    if (era.get('cflag:400:育成回合计时') < 96) {
      await print_event_name('属于自己的胜利', ss);
      await ss.say_and_wait('简直就好像是在做梦一样呢……');
      await era.printAndWait([
        ss.get_colored_name(),
        ' 抬起头望向 ',
        me.get_colored_name(),
        '，眼中的泪花闪烁，看起来就好像快要哭出来了一样。',
      ]);
      await ss.say_and_wait([
        '如果……如果没有 ',
        callname,
        ' 你的话，我应该不太可能取得今天这样的成就吧。这是独属于我的，为了献上的胜利……',
      ]);
      await era.printAndWait([
        '说着，似乎是注意到了此地此刻已经空无一人，',
        ss.get_colored_name(),
        ' 一把抓住 ',
        me.get_colored_name(),
        ' 的衣领和 ',
        me.get_colored_name(),
        ' 脸贴脸拥抱在一起，',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 能够感受到',
        ss.sex,
        '身上散发出来的热度，还有那炙热的感情。',
      ]);
      await ss.say_and_wait(
        '今后，也和『我』一起走下去好吗？就好像是那天我们确定好成为彼此的担当一样，一起走下去。',
      );
      era.printButton('「你可是我的担当啊，我怎么会丢下你呢？」', 1);
      await era.input();
      await era.printAndWait([
        ss.get_colored_name(),
        ' 看着 ',
        me.get_colored_name(),
        ' 无奈的皱起了好看的眉头，黑丝包裹的小腿擦着 ',
        me.get_colored_name(),
        ' 的腿磨蹭了两下，',
      ]);
      await ss.say_and_wait([
        '不管 ',
        callname,
        ' 有没有理解我的意思，我都会坚持我要做的事情哦。',
      ]);
      await era.printAndWait([
        '似乎是想到了什么有趣的事情，轻轻推开 ',
        me.get_colored_name(),
        '，转身然后回头。',
      ]);
      extra_flag.relation_change = 50;
    } else {
      await print_event_name('漆黑的君王', ss);
      await ss.say_and_wait(
        '漆黑的君王，这些评论员又在说些什么奇奇怪怪的东西？',
      );
      era.printButton(
        '似乎是他们给你起的外号，毕竟你的成就在系列竞赛的历史上也实属罕见。',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        '那还不如让他们多关注关注那些新人比较好呢，不过啊，',
        callname,
        '，和我一起去拿奖杯怎么样？',
      ]);
      await era.printAndWait([
        ss.sex,
        '突如其来的邀请让 ',
        me.get_colored_name(),
        ' 有些疑惑。',
      ]);
      await ss.say_and_wait(
        '字面意思啦，这可不是我一个人的胜利，这是你和我一起拼搏出来的，',
      );
      await ss.say_and_wait(
        '所以说啊，和我一起去迎接赞美吧，这是属于我们的胜利。',
      );
      await ss.say_and_wait('至于什么漆黑的君王的话，你不讨厌就随便他们说吧，');
      await ss.say_and_wait(
        '或者说你觉得我应该有什么更好的外号也可以告诉我哦，反正只要你听着顺耳就好了。',
      );
      await era.printAndWait([
        ss.sex,
        '笑眯眯的牵住了 ',
        me.get_colored_name(),
        ' 的手，将 ',
        me.get_colored_name(),
        ' 拉出了休息室，和',
        ss.sex,
        '一起走向属于 ',
        me.get_couple_title(),
        ' 的更远的未来。',
      ]);
      extra_flag.relation_change = 100;
    }
  };

  handlers[race_enum.tenn_spr] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    const coffee = get_chara_talk(25);
    await print_event_name('雨中胜者', ss);
    await era.printAndWait([
      '暴雨之中，浑身湿透的 ',
      ss.get_colored_name(),
      ' 神情淡墨，看起来不像是刚刚在天皇赏之上拿到一着的样子，',
    ]);
    await era.printAndWait([
      '但是',
      ss.sex,
      '的对面，排山倒海的欢呼与解说激情的夸赞如同潮水一般涌向',
      ss.sex,
      '。',
    ]);
    await ss.say_and_wait(['我成功了……', callname, '，我真的……做到了对吧？']);
    await era.printAndWait([
      '回过头去，',
      coffee.get_colored_name(),
      ' 正在鼓掌，',
      ss.sex,
      '看着自己的血亲，脸上露出了微笑,',
    ]);
    await era.printAndWait([
      '即使自己没有取得胜利也好，',
      coffee.get_colored_name(),
      ' 依旧大方的将祝福送给了 ',
      ss.get_colored_name(),
      '。',
    ]);
    await ss.say_and_wait('太好了……真的……真的。');
    await era.printAndWait([
      ss.sex,
      '在众人的目光中扑进了 ',
      me.get_colored_name(),
      ' 的怀抱，并不在意周围人诧异或者兴奋的目光。',
    ]);
    era.printButton(`「${sys_get_callname(0, 400)}……感觉好一点了吗？」`, 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 拍了拍',
      ss.sex,
      '的背后，',
      ss.sex,
      '身上的水渍和泥渍将 ',
      me.get_colored_name(),
      ' 的衣服一同沾湿，',
    ]);
    await era.printAndWait([
      '但是 ',
      ss.get_colored_name(),
      ' 没有回答 ',
      me.get_colored_name(),
      '，只是在 ',
      me.get_colored_name(),
      ' 的怀中发出粗重的呼吸声。',
    ]);
    await ss.say_and_wait('让我……让我稍微再冷静一下，就在你的怀里面就好了。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 没有在意旁人的目光，将 ',
      ss.get_colored_name(),
      ' 抱回了休息室里面。',
    ]);
    extra_flag.attr_change = [0, 20];
    extra_flag.pt_change = 1;
    extra_flag.relation_change = 50;
  };

  handlers[race_enum.tenn_sho] = async (ss, me, callname, extra_flag) => {
    if (
      era.get('cflag:400:育成回合计时') < 96 ||
      extra_flag.rank !== 1 ||
      !check_aim_race(new RaceHistory(400).get(), race_enum.tenn_spr, 2, 1)
    ) {
      return true;
    }
    await print_event_name('春秋的冠军', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 很平淡的擦了擦自己的脑门，看着休息室内大屏幕上重复播放的，最后的冲刺时刻。',
    ]);
    await ss.say_and_wait(
      '和您站在一起的时候，胜利就变得稀疏平常起来了呢……春秋天皇赏一着啊，听起来真是个伟大的成就啊。',
    );
    era.printButton(
      `「但是你做到了，这就是 ${ss.name} 的能力，绝对强大的赛${ss.get_uma_sex_title()}」`,
      1,
    );
    await era.input();
    await ss.say_and_wait([
      callname,
      ' 你说这话会让我害羞的哦，明明 ',
      callname,
      ' 才是这几年里面最努力的那个人吧，我可是记得一清二楚哦。',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 的黑丝小脚夹住了 ',
      me.get_colored_name(),
      ' 的腿，整个人挂在 ',
      me.get_colored_name(),
      ' 的身上，看起来比赛结束之后',
      ss.sex,
      '的兴奋似乎没有过去。',
    ]);
    era.printButton(
      '即使如此，我们还有最后的一场最大的比赛在等着我们哦，今年的最后一场比赛',
      1,
    );
    await ss.say_and_wait([
      '我们会拿下理所应当的胜利的，',
      callname,
      '，就好像是我最开始说的那样，我们会赢下来的，由我将胜利带给您。',
    ]);
    extra_flag.attr_change = new Array(5).fill(5);
  };
};
