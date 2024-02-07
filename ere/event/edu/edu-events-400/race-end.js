const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');

const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,motivation_change:number,relation_change:number,attr_change:number[],pt_change:number,base_change:Record<string,number>}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const coffee = get_chara_talk(25),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:400:育成回合计时'),
    event_marks = new SSEduMarks(),
    ss = get_chara_talk(400);
  extra_flag.attr_change = new Array(5).fill(0);
  if (extra_flag.race === race_enum.begin_race && extra_flag.rank === 1) {
    await print_event_name('出道战之后·完美的开始', ss);
    await era.printAndWait(`${ss.name}毫无悬念的拿下了出道战的胜利，`);
    await era.printAndWait(
      `在${ss.sex}冲过终点的那一刻，你终于放下心来，但是随后胜利的${ss.sex}径直来到了作为训练员的你面前。`,
    );
    await ss.say_and_wait(
      `我说过的，会将胜利带你的与你一起分享的，现在我们已经迈出了第一步了哦。`,
    );
    await era.printAndWait(
      `${ss.sex}握紧了你的手，那张完美的脸颊上露出了柔软的笑意。`,
    );
    await ss.say_and_wait(`拖雷纳君，一起向着我们的目标，迈出步伐吧......`);
    await era.printAndWait(
      `观众的欢呼与赞扬声成为你们之间的背影音，${ss.sex}赛前略显不安的神色在此刻荡然无存，留下的只有开心。`,
    );
    await era.printAndWait(
      `这时你才注意到${ss.sex}的身上已经满是汗液，甚至连运动服都被汗液打湿勾勒出了些许完美身材的轮廓。`,
    );
    era.printButton(
      `真是非常非常厉害啊......但是就算是这样，我还是要先让你把脑袋和身子擦一擦才行，不然的话对身体不太好`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `毛巾被盖到了${ss.sex}的脑袋上，${ss.name}并没有拒绝由你来为${ss.sex}擦干净脑门上的汗珠。`,
    );
    await ss.say_and_wait(
      `这场比赛到这里就结束了，如果您有复盘的需要的话，可以找时间联系我，如果没有的话，我觉得我们可以投入关于下一场比赛的针对训练和日常的训练当中了。`,
    );
    await era.printAndWait(
      `${ss.name}脸上的笑容并没有停留很久，${ss.sex}认真的看向你，眼神之中满是认真与好胜心。`,
    );
    await era.printAndWait(`就这样，${ss.name}完成了自己的出道赛。`);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 3),
    );
  } else if (extra_flag.race === race_enum.sats_sho && extra_flag.rank === 1) {
    await print_event_name('胜利的大舞台', ss);
    await ss.say_and_wait(`我们赢了对吗？拖雷纳君！！！`);
    await era.printAndWait(
      `${ss.sex}完全没有了以往的沉着，开心的像是一个小孩子一样，激动的抱住了你。`,
    );
    await ss.say_and_wait(`三冠的第一冠.......我们两个真的拿下来了对吧？！`);
    era.printButton(`点点头`, 1);
    await era.input();
    await ss.say_and_wait(
      `太好了......太好了，果然训练员你就是最适合我的训练员${get_chara_talk(
        0,
      ).get_adult_sex_title()}！`,
    );
    await ss.say_and_wait(
      `接下来......还有日本德比和菊花赏，请务必不要在乎我的身体如何，继续加大训练量，只有这样我们才能拿到更大的优势。`,
    );
    await coffee.say_and_wait(`祝贺你......赛场上的身姿，真的很厉害。`);
    await era.printAndWait(`嗯......`);
    await era.printAndWait(`然后在${ss.name}走出去之后，曼城茶座回头。`);
    await ss.say_and_wait(
      `${ss.sex}就拜托您了，${ss.sex}一直是一个柔软的人，请稍微照顾一下${ss.sex}的心情吧。`,
    );
    await era.printAndWait(
      `在后面的采访之中，${ss.sex}也丝毫不吝啬对于你的赞美之词，你能看得出来，${ss.sex}不仅仅是开心，更是松了口气。`,
    );
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 10),
    );
  } else if (extra_flag.race === race_enum.toky_yus && extra_flag.rank === 1) {
    const races = era.get('cflag:400:育成成绩');
    if (check_aim_race(races, race_enum.sats_sho, 1, 1)) {
      await print_event_name('第二场大胜', ss);
      await era.printAndWait(`休息室内`);
      await era.printAndWait(
        `${ss.name}穿着自己的决胜服，站在终点处呆呆的望向天空然后举起手的样子赢得了全场的欢呼，`,
      );
      await era.printAndWait(
        `新的二冠王，几乎是不可阻挡的胜者，所有人都在为${ss.sex}献上祝福，祝福着一位新的三冠王的诞生。`,
      );
      await era.printAndWait(
        `见状你先行一步退回了休息室内，为${ss.name}准备接下来需要用上的东西，毛巾、热水、水果以及一些其他的杂物。`,
      );
      await era.printAndWait(
        `${ss.name}走进来的时候你本来想要让${ss.sex}先擦一擦汗，但是${ss.sex}一句话也不说扑到你的身上，抱住了你。`,
      );
      await ss.say_and_wait(
        `拖雷纳君.......我没有再做梦吧？我们离最初的目标，就剩下一场比赛了对吗？`,
      );
      await era.printAndWait(
        `${ss.sex}的语气非常激动，你拍了拍${ss.sex}的后背，感受着${ss.sex}的温度。`,
      );
      era.printButton(
        `是的，我们离最初的目标就差最后一步了，恭喜你，${ss.name}`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        `真的.......真的非常感谢，作为拖雷纳一直在为我的训练和生活操心，这场胜利，是你和我一起拿下的，是我给你的答案！`,
      );
      await era.printAndWait(
        `${ss.sex}抬起头，金黄色的瞳孔之中那闪耀的自信让${ss.sex}看起来就好像是天生的主角一样。`,
      );
      await ss.say_and_wait(
        `所以啊，拖雷纳君，接下来就拜托你了哦，菊花赏，三冠的最后一站。`,
      );
      await era.printAndWait(
        `今天的庆功宴，${ss.name}非常开心，说话的语气也比以往柔和了许多。`,
      );
      sys_like_chara(400, 0, 30);
      gacha(Object.values(attr_enum), 4).forEach(
        (e) => (extra_flag.attr_change[e] = 10),
      );
    }
  } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank === 1) {
    const races = era.get('cflag:400:育成成绩');
    if (
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1)
    ) {
      await print_event_name('夙愿完成！', ss);
      era.printButton(
        `恭喜你，三冠王${
          ss.name
        }，成为最今年最强的赛${ss.get_uma_sex_title()}了呢。`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        `托您的福......我也终于可以松口气了，说实话......我已经不知道如何用言语表达我的感谢了。`,
      );
      await ss.say_and_wait(
        `是您带领我完成了我的愿望.......站在了最高的舞台上。`,
      );
      await era.printAndWait(`${ss.sex}向你鞠了个躬，一直都不肯抬起头来。`);
      await ss.say_and_wait(
        `如果没有您的帮助的话，我是不可能走到这里的，我深知这点.......我也终于可以安心了，从此以后。`,
      );
      await era.printAndWait(
        `${ss.sex}抬头抱住了你，场外的气氛火热的就像是即将喷发的火山，但是赛场的走廊内，${ss.name}比以往任何时候都要温柔，`,
      );
      await era.printAndWait(
        `${ss.sex}轻轻的抱住你贴在你的身上，你甚至能够感觉到${ss.sex}的吐息打在你身上那种轻柔的感觉。`,
      );
      await ss.say_and_wait(
        `请稍微，稍微让我依靠一下如何？就像您一直默默做的那样，这次就让我光明正大的依靠您一下吧。`,
      );
      extra_flag.motivation_change = 1;
      extra_flag.attr_change.fill(10);
      extra_flag.pt_change = 45;
      event_marks.love++;
      add_event(event_hooks.week_end, new EventObject(400, cb_enum.edu));
    } else {
      event_marks.broken_love++;
      add_event(event_hooks.week_end, new EventObject(400, cb_enum.edu));
    }
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    extra_flag.rank > 1 &&
    edu_weeks < 96
  ) {
    event_marks.broken_love++;
    add_event(event_hooks.week_end, new EventObject(400, cb_enum.edu));
    throw new Error('unsupported stage!');
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    extra_flag.rank === 1 &&
    edu_weeks < 96
  ) {
    await print_event_name('属于自己的胜利', ss);
    await ss.say_and_wait(`简直就好像是在做梦一样呢.......`);
    await era.printAndWait(
      `${ss.name}抬起头望向你，眼中的泪花闪烁，看起来就好像快要哭出来了一样。`,
    );
    await ss.say_and_wait(
      `如果......如果没有拖雷纳君你的话，我应该不太可能取得今天这样的成就吧。这是独属于我的，为了献上的胜利......`,
    );
    await era.printAndWait(
      `说着，似乎是注意到了此地此刻已经空无一人，${ss.name}一把抓住你的衣领和你脸贴脸拥抱在一起，`,
    );
    await era.printAndWait(
      `你能够感受到${ss.sex}身上散发出来的热度，还有那炙热的感情。`,
    );
    await ss.say_and_wait(
      `今后，也和‘我’一起走下去好吗？就好像是那天我们确定好成为彼此的担当一样，一起走下去。`,
    );
    era.printButton(`你可是我的担当啊，我怎么会丢下你呢？`, 1);
    await era.input();
    await era.printAndWait(
      `${ss.name}看着你无奈的皱起了好看的眉头，黑丝包裹的小腿擦着你的腿磨蹭了两下，`,
    );
    await ss.say_and_wait(
      `不管拖雷纳君有没有理解我的意思，我都会坚持我要做的事情哦。`,
    );
    await era.printAndWait(
      `似乎是想到了什么有趣的事情，轻轻推开你，转身然后回头。`,
    );
    sys_like_chara(400, 0, 50);
  } else if (extra_flag.race === race_enum.tenn_spr && extra_flag.rank === 1) {
    await print_event_name('雨中胜者', ss);
    await era.printAndWait(
      `暴雨之中，浑身湿透的${ss.name}神情淡墨，看起来不像是刚刚在天皇赏之上拿到一着的样子，`,
    );
    await era.printAndWait(
      `但是${ss.sex}的对面，排山倒海的欢呼与解说激情的夸赞如同潮水一般涌向${ss.sex}。`,
    );
    await ss.say_and_wait(
      `我成功了........拖雷纳君，我真的.......做到了对吧？`,
    );
    await era.printAndWait(
      `回过头去，曼城茶座正在鼓掌，${ss.sex}看着自己的血亲，脸上露出了微笑,`,
    );
    await era.printAndWait(
      `及时自己没有取得胜利也好，曼城茶座依旧大方的将祝福送给了${ss.name}。`,
    );
    await ss.say_and_wait(`太好了.......真的.....真的。`);
    await era.printAndWait(
      `${ss.sex}在众人的目光中扑进了你的怀抱，并不在意周围人诧异或者兴奋的目光。`,
    );
    era.printButton(`宁静.......感觉好一点了吗？`, 1);
    await era.input();
    await era.printAndWait(
      `你拍了拍${ss.sex}的背后，${ss.sex}身上的水渍和泥渍将你的衣服一同沾湿，`,
    );
    await era.printAndWait(
      `但是${ss.name}没有回答你，只是在你的怀中发出粗重的呼吸声。`,
    );
    await ss.say_and_wait(
      `让我......让我稍微再冷静一下，就在你的怀里面就好了。`,
    );
    await era.printAndWait(
      `你没有在意旁人的目光，将${ss.name}抱回了休息室里面。`,
    );
    extra_flag.motivation_change = 1;
    sys_like_chara(400, 0, 50);
    extra_flag.attr_change[get_random_entry(Object.values(attr_enum))] = 20;
  } else if (extra_flag.race === race_enum.tenn_sho && extra_flag.rank === 1) {
    const races = era.get('cflag:400:育成成绩');
    if (check_aim_race(races, race_enum.tenn_spr, 1, 1)) {
      await print_event_name('春秋的冠军', ss);
      era.drawLine({ content: '休息室内' });
      await era.printAndWait(
        `${ss.name}很平淡的擦了擦自己的脑门，看着休息室内大屏幕上重复播放的，最后的冲刺时刻。`,
      );
      await ss.say_and_wait(
        `和您站在一起的时候，胜利就变得稀疏平常起来了呢.......春秋天皇赏一着啊，听起来真是个伟大的成就啊。`,
      );
      era.printButton(
        `但是你做到了，这就是${
          ss.name
        }的能力，绝对强大的赛${ss.get_uma_sex_title()}`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        `拖雷纳君你说这话会让我害羞的哦，明明拖雷纳君才是这几年里面最努力的那个人吧，我可是记得一清二楚哦。`,
      );
      await era.printAndWait(
        `${ss.name}的黑丝小脚夹住了你的腿，整个人挂在你的身上，看起来比赛结束之后${ss.sex}的兴奋似乎没有过去。`,
      );
      era.printButton(
        `即使如此，我们还有最后的一场最大的比赛在等着我们哦，今年的最后一场比赛`,
        1,
      );
      await ss.say_and_wait(
        `我们会拿下理所应当的胜利的，拖雷纳君，就好像是我最开始说的那样，我们会赢下来的，由我将胜利带给您。`,
      );
      await era.input();
      extra_flag.attr_change.fill(5);
    }
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    extra_flag.rank === 1 &&
    edu_weeks >= 96
  ) {
    await print_event_name('漆黑的君王', ss);
    era.drawLine({ content: '休息室内' });
    await ss.say_and_wait(`漆黑的君王，这些评论员又在说些什么奇奇怪怪的东西？`);
    era.printButton(
      `似乎是他们给你起的外号，毕竟你的成就在系列竞赛的历史上也实属罕见。`,
      1,
    );
    await era.input();
    await ss.say_and_wait(
      `那还不如让他们多关注关注那些新人比较好呢，不过啊，拖雷纳君，和我一起去拿奖杯怎么样？`,
    );
    await era.printAndWait(`${ss.sex}突如其来的邀请让你有些疑惑。`);
    await ss.say_and_wait(
      `字面意思啦，这可不是我一个人的胜利，这是你和我一起拼搏出来的，`,
    );
    await ss.say_and_wait(
      `所以说啊，和我一起去迎接赞美吧，这是属于我们的胜利。`,
    );
    await ss.say_and_wait(`至于什么漆黑的君王的话，你不讨厌就随便他们说吧，`);
    await ss.say_and_wait(
      `或者说你举得我应该有什么更好的外号也可以告诉我哦，反正只要你听着顺耳就好了。`,
    );
    await era.printAndWait(
      `${ss.sex}笑眯眯的牵住了你的手，将你拉出了休息室，和${ss.sex}一起走向属于你们的更远的未来。`,
    );
    extra_flag.attr_change.fill(10);
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜！', ss);
    await ss.say_and_wait(`唔，我赢了哦，看着赛场上我的表现感觉怎么样？`);
    era.printButton(`轻轻松松，我们回去准备下一场比赛吧`, 1);
    era.printButton(`感觉并没有什么难度，不过接下来的训练还请不要掉以轻心`, 2);
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜!', ss);
    await ss.say_and_wait(
      `说实话有些遗憾呢，是哪里出了问题呢？等会一起回去复盘吧。`,
    );
    era.printButton(`虽然没有达到预期，但是已经做的非常好了`, 1);
    era.printButton(`不想输的话下次就要做到更好才行`, 2);
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛失败！', ss);
    await ss.say_and_wait(
      `拖雷纳君，我们该转换思路了哦，不然的话要是继续输下去的话，可就麻烦了呢。`,
    );
    era.printButton(`你说得对，或许我们都应该转换一下思路，下次会更好的`, 1);
    era.printButton(
      `虽然表现不尽如人意，但是在这里给自己施加压力可不是什么好办法`,
      2,
    );
  }
};
