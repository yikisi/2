/**
 * @file 高尚骏逸 - 地下室
 *
 * @author 無奈
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

module.exports = class extends CustomizedBase {
  // eslint-disable-next-line no-unused-vars
  async flatter(supporter) {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      relation = era.get('relation:89:0'),
      life_marks = new GrandLifeMarks();
    if (relation < -100 && !life_marks.b_find_escape) {
      await era.printAndWait([
        '对于 ',
        me.get_colored_name(),
        ' 强打精神的讨好，',
        grand.get_colored_name(),
        ' 似乎很是受用，小',
        grand.get_uma_sex_title(),
        '乖巧的坐在床边，像往常一样腼腆的笑着。',
      ]);
      era.println();

      await grand.say_and_wait([
        '只有我们两个人的房间……不知道为什么，总觉得……好怀念啊。',
      ]);
      era.println();

      await era.printAndWait([
        '仿佛穿透了时间的语调，其中蕴含的是不容忽视的寂寞。',
      ]);
      era.println();

      await grand.say_and_wait([
        '以前我一直以为，我们两人之间的日常会一直持续下去。',
      ]);
      await grand.say_and_wait([
        '是从什么时候开始呢……',
        sys_get_colored_callname(89, 0),
        ' 的身边出现了我以外的人。',
      ]);
      await grand.say_and_wait([
        '因为嫉妒，我对你做出了无法原谅的事情……我们的关系，无论如何都已经回不到过去了吧……',
      ]);
    } else if (relation < 0 && !life_marks.b_find_escape) {
      await grand.say_and_wait([
        '其实……我也后悔过，想过如果不把 ',
        sys_get_colored_callname(89, 0),
        ' 监禁起来就好了。',
      ]);
      await grand.say_and_wait(['……但是，无论如何，我都不想离开你。']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 默默低下头，帽檐挡住了表情，但无法掩盖颤抖的指尖。',
      ]);
      era.println();

      await grand.say_and_wait([
        '剥夺你的自由，把你关在这里。我知道你肯定会讨厌这样的我……',
      ]);
      await grand.say_and_wait([
        '但是，我也知道……如果什么都不做，你可能永远都不会回来看我了……！',
      ]);
      await grand.say_and_wait([
        '求你了……',
        sys_get_colored_callname(89, 0),
        '……为了让我能安心一点……',
      ]);
    } else if (relation > 100 && !life_marks.b_find_escape) {
      life_marks.b_flatter_4 = 1;
      await grand.say_and_wait([
        '呐、',
        sys_get_colored_callname(89, 0),
        '……笑一笑啊……',
      ]);
      await grand.say_and_wait(['像这样看着你一天比一天憔悴……我会受不了的……']);
      await grand.say_and_wait([
        '再像以前那样摸摸我的头……告诉我你有多么喜欢我的优点啊……',
      ]);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        ' 强行挤出一个笑容，然而 ',
        grand.get_colored_name(),
        ' 看到后却露出了崩溃的表情。',
      ]);
      era.println();

      await grand.say_and_wait([
        '不是的……不是这样的……我想要的……不是这样的你啊……',
      ]);
      await grand.say_and_wait([
        '如果……早知道……事情会变成这样……呜……呜呜……呜呜……',
      ]);
    } else {
      await grand.say_and_wait([
        '……',
        sys_get_colored_callname(89, 0),
        '，真的很想离开这里呢。',
      ]);
      await grand.say_and_wait([
        '如果你能明白我的心意……是不是就会想要留下了呢？',
      ]);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 一面自顾自说着，一面将你推倒在床上。',
      ]);
      await era.printAndWait([
        '曾经努力维系的大人的尊严，与衣物一同被撕得粉碎。',
      ]);
      era.println();

      await grand.say_and_wait(['这一次，我绝对不会再轻易放弃了。']);
      await grand.say_and_wait(['……如果能被你喜欢的话……就算只有身体也好。']);
      await grand.say_and_wait([
        sys_get_colored_callname(89, 0),
        '……从今往后，我会好好珍惜你的❤️',
      ]);
    }
  }

  async battle_fail() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      ' 用铁丝划开了自己的袖口，从里面取出了一小包药粉。',
    ]);
    await era.printAndWait([
      '在训练员会议上发放的『对',
      grand.get_uma_sex_title(),
      '用安眠药』样品，没想到真的有用到的一天。',
    ]);
    await era.printAndWait([
      '确认过 ',
      grand.get_colored_name(),
      ' 寻找餐具的背影，',
      me.get_colored_name(),
      ' 偷偷将药粉混入料理之中。',
    ]);
    era.println();

    await grand.say_and_wait([
      '那个……我、我来喂 ',
      sys_get_colored_callname(89, 0),
      ' 吧。',
    ]);
    await grand.say_and_wait(['啊——啊～']);
    era.println();

    await era.printAndWait([
      '满脸通红的 ',
      grand.get_colored_name(),
      '，虽然是意料之外的事态，但无伤大雅。',
    ]);
    await era.printAndWait([
      '一想到这是『对',
      grand.get_uma_sex_title(),
      '用』的特效药，',
      me.get_colored_name(),
      ' 没有拒绝，而是顺从地张开了嘴巴。',
    ]);
    era.println();

    await me.say_and_wait(['……？']);
    await grand.say_and_wait([sys_get_colored_callname(89, 0), '……？']);
    era.println();

    await era.printAndWait([
      '几乎是立刻，被吸入般的睡意席卷而来，思绪一步坠入深海。',
    ]);
    await era.printAndWait([
      '难道『对',
      grand.get_uma_sex_title(),
      '用』指的是『药效强到对',
      grand.get_uma_sex_title(),
      '也能生效』吗……？',
    ]);
    await era.printAndWait([
      '在内心问候发明这种药品的人，',
      me.get_colored_name(),
      ' 瘫软的倒在 ',
      grand.get_colored_name(),
      ' 的怀中，无法抵抗地沉入了梦乡。',
    ]);
  }

  async battle_escape() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      '抱起',
      grand.get_child_sex_title(),
      '的身体放在床上，',
      me.get_colored_name(),
      ' 看着 ',
      grand.get_colored_name(),
      ' 天使般的睡脸，叹了口气。',
    ]);
    await era.printAndWait([
      '曾经的',
      grand.sex,
      '总是带着天使般的笑容，而改变这一切的人正是 ',
      me.get_colored_name(),
      ' 自己。',
    ]);
    await era.printAndWait([
      '厚重的铁门已经被推开，少女的一切努力即将付之一炬。',
    ]);
    era.println();

    await me.say_and_wait(['抱歉，', sys_get_colored_callname(0, 89), '。']);
    era.println();

    await era.printAndWait([
      '向 ',
      grand.get_colored_name(),
      ' 道歉后，',
      me.get_colored_name(),
      ' 转身准备离开，却被扯住了袖口。',
    ]);
    await era.printAndWait([
      '从被抓住的袖子那里，能感受到',
      grand.get_child_sex_title(),
      '的小手正不安地颤抖着。',
    ]);
    era.println();

    await grand.say_and_wait([
      '不要走……',
      sys_get_colored_callname(89, 0),
      '……',
    ]);
    era.println();

    await era.printAndWait([
      '本应熟睡的小',
      grand.get_uma_sex_title(),
      '在梦中喊出了 ',
      me.get_colored_name(),
      ' 的名字。',
    ]);
    await era.printAndWait([grand.sex, '在做一个什么样的梦呢？']);
    await era.printAndWait([
      '梦里的 ',
      me.get_colored_name(),
      '，同样也会选择弃',
      grand.sex,
      '而去吗？',
    ]);
    era.println();

    await me.say_and_wait(['……']);
    era.println();

    await era.printAndWait(['没有时间在此停留了。']);
    await era.printAndWait([
      '如果再被 ',
      grand.get_colored_name(),
      ' 哭着挽留，',
      me.get_colored_name(),
      ' 不知道自己会做出什么样的决定。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 轻轻为熟睡的 ',
      grand.get_colored_name(),
      ' 盖好被子，转身离开了地下室。',
    ]);
  }

  async battle_prison() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      '看着在床上安睡的 ',
      grand.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 暗自庆幸准备了对',
      grand.get_uma_sex_title(),
      '用的安眠药。',
    ]);
    await era.printAndWait([
      '尽管称之为安眠药，但持续时间其实很短，效果在五分钟左右就会消失。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 连忙凑近锁孔，然而直到手中的铁丝弯曲到极限，铁门依旧不为所动。',
    ]);
    era.println();

    await me.say_and_wait(['啧，这该怎——']);
    era.println();

    await era.printAndWait(['无端地，颈部传来巨大的冲击。']);
    await era.printAndWait([
      '整个人直直摔向地面，却像是趴上羽绒被一般，意识朦胧的远去。',
    ]);
    era.println();

    await grand.say_and_wait([
      '……',
      sys_get_colored_callname(89, 0),
      '，对不起……',
    ]);
    await grand.say_and_wait([
      '我也不喜欢这样，我也想做个好孩子，让喜欢上我。',
    ]);
    await grand.say_and_wait([
      '看到你痛苦的表情……我也会很难过，就像现在这样。',
    ]);
    era.println();

    await era.printAndWait([
      '一片模糊中，',
      me.get_colored_name(),
      ' 对上了帽沿下那双满是罪恶感的眼睛。',
    ]);
    era.println();

    await grand.say_and_wait([
      '我知道，',
      sys_get_colored_callname(89, 0),
      ' 一定有很多事情需要负起责任，所以才想离开这里……',
    ]);
    await grand.say_and_wait([
      '所以说，让我来帮你暂时忘掉那些让你痛苦的事情吧——',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 的意识不断下沉，而 ',
      grand.get_colored_name(),
      ' 的声音越来越远……越来越近。',
    ]);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0);
    if (!is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    new GrandLifeMarks().b_find_escape = 1;
    if (out_of_prison) {
      era.print(['在一次不经意的尝试中，铁丝似乎触动了锁内的某个部分。']);
      era.print([
        me.get_colored_name(),
        ' 握紧铁丝，用力一转，只感觉锁体内部传来了一阵顺畅的转动感。',
      ]);
      era.print([
        me.get_colored_name(),
        ' 在心中欢呼着推开铁门，来到了一条狭窄的通道，只要穿过这——',
      ]);
      era.println();

      grand.say(['……', me.get_colored_name(), ' 要去哪里？']);
      era.println();

      era.print(['肌肤发泡般的恶寒传遍全身，从脖子到后背都被冷汗打湿。']);
      era.print([
        '从通道另一端传来的声音微弱的几乎听不到，但其中的意思却强烈地传递过来。',
      ]);
      era.print([
        '步步逼近的',
        grand.get_uma_sex_title(),
        '并非在问 ',
        me.get_colored_name(),
        '，只是在了解一切的基础上进行『确认』而已。',
      ]);
      era.println();

      grand.say([
        '我……虽然不怎么擅长说话，但我最喜欢的就是这个和 ',
        sys_get_colored_callname(89, 0),
        ' 独处的空间。',
      ]);
      grand.say(['你在安静的房间中回响的气息，还有你温柔的视线。']);
      grand.say(['狭窄的房间里只有你的温暖……我、真的很喜欢这一切。']);
      grand.say(['……但是，都到此为止了。']);
      era.println();

      era.print([
        '被逼退回门内的 ',
        me.get_colored_name(),
        '，近在咫尺的爱马，一股不好的预感在心中弥漫开来。',
      ]);
      era.println();

      grand.say(['会变成这样……全都是我的错。']);
      grand.say([
        '一直以来，是我太依赖 ',
        sys_get_colored_callname(89, 0),
        ' 了……总是忍不住向你撒娇。',
      ]);
      grand.say([
        '因为不忍心看到最喜欢的 ',
        sys_get_colored_callname(89, 0),
        ' 伤心的模样，所以一直在逃避。',
      ]);
      era.println();

      era.print(['咔哒——锁芯转动的冰冷声音在寂静的房间里回荡。']);
      era.println();

      grand.say(['但是从现在开始……无论内心有多么痛苦，我都要努力，都要加油。']);
      grand.say(['不再依赖别人，不再哭泣，不再逃避。']);
      era.println();

      era.print([
        '在这个不会再与外界产生任何接触的地方，',
        grand.get_colored_name(),
        ' 伸出手抱住了你。',
      ]);
      era.println();

      grand.say(['你的身体，气味，还有你的体温，我也一样喜欢。']);
      grand.say([sys_get_colored_callname(89, 0), '，我爱你。']);
    } else {
      era.print(['咔嚓，咔嚓——']);
      era.println();

      me.say(['啧……']);
      era.println();

      era.print(['好不容易找到的一根铁丝断在了锁芯里。']);
      era.print([
        '无次数尝试中 ',
        me.get_colored_name(),
        ' 早已尝惯失败，但留下的碎片毫无疑问将成为试图逃离的证据。',
      ]);
      era.println();

      me.say(['这个……拔不出来啊……！']);
      era.println();

      era.print(['是什么时候开始出错了呢？']);
      era.print(['到底为什么会走到这一步呢？']);
      era.print([
        '脑海中，小',
        grand.get_uma_sex_title(),
        '那天使般的笑容如幻影般浮现。',
      ]);
      era.print(['如果可以的话，真想回到刚刚相遇的那一天……']);
      era.println();

      grand.say(['……', sys_get_colored_callname(89, 0), '？']);
      era.println();

      era.print([
        '微弱又毫无起伏的声音定住了 ',
        me.get_colored_name(),
        ' 的动作，宣告一时兴起的越狱游戏到此结束。',
      ]);
      era.println();

      grand.say(['没关系的，', sys_get_colored_callname(89, 0), '……']);
      era.println();

      era.print([
        me.get_colored_name(),
        ' 甚至不敢回头确认',
        grand.get_child_sex_title(),
        '的神情，只是任凭自己被拖回床笫之上。',
      ]);
      era.println();

      grand.say([
        '都是我的错……一定是因为我的爱还不够，才会让你产生离开的想法。',
      ]);
      grand.say([
        '所以说，必须让 ',
        sys_get_colored_callname(89, 0),
        ' 更多的感受到我的心意才可以……',
      ]);
    }
  }

  async ask_release_agree() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await grand.say_and_wait(['……嗯。']);

    await era.printAndWait([
      '在听到 ',
      me.get_colored_name(),
      ' 离开这里的请求后，',
      grand.get_colored_name(),
      ' 迟疑了很久，最后缓缓点了点头。',
    ]);
    era.println();

    await grand.say_and_wait([
      '最近……',
      sys_get_colored_callname(89, 90),
      '和',
      sys_get_colored_callname(89, 91),
      '似乎察觉到了什么，一直在劝我放弃。',
    ]);
    await grand.say_and_wait([
      '我知道',
      grand.sex,
      '们是为了我好，但这也说明这里已经不安全了……',
    ]);
    await grand.say_and_wait(['想必再过不久，救援队就会发现这里吧。']);
    era.println();

    await era.printAndWait([grand.get_colored_name(), ' 苦笑着。']);
    await era.printAndWait(['印象中，自从来到这地下室后，少女总是在苦笑着。']);
    era.println();

    await grand.say_and_wait([
      '但是，我并不是因为这个才放 ',
      sys_get_colored_callname(89, 0),
      ' 离开的。',
    ]);
    await grand.say_and_wait([
      '我本来打算……就算只能得到一点点的爱也好，哪怕要抛弃一切……我都不打算再放开你的手。',
    ]);
    await grand.say_and_wait([
      '就算可能要亲手弄坏 ',
      sys_get_colored_callname(89, 0),
      '，我也不想离开你的身边。',
    ]);
    era.println();

    await era.printAndWait([
      '说到这里，',
      grand.get_colored_name(),
      ' 不自觉的握紧了小小的拳头。',
    ]);
    await era.printAndWait([
      '但是与 ',
      me.get_colored_name(),
      ' 目光接触后，',
      grand.get_child_sex_title(),
      '渐渐松开了手。',
    ]);
    era.println();

    await grand.say_and_wait([
      '但是……这段时间，我总是回忆起和 ',
      sys_get_colored_callname(89, 0),
      ' 一起经历过的……各种各样的事情。',
    ]);
    await grand.say_and_wait([
      '现在我明白了……比起把 ',
      sys_get_colored_callname(89, 0),
      ' 强行绑在我的视线之内——',
    ]);
    await grand.say_and_wait([
      '我最喜欢的，是 ',
      sys_get_colored_callname(89, 0),
      ' 的笑容。',
    ]);
    era.println();

    await era.printAndWait([
      '说着，',
      grand.get_colored_name(),
      ' 从口袋中拿出了一串钥匙，那是见证 ',
      me.get_couple_title(),
      ' 相遇的信物。',
    ]);
    await era.printAndWait([grand.sex, '用颤抖的小手挑出其中一把，插入锁中。']);
    await era.printAndWait([
      '随着『咔哒』一声，那道沉重、压抑的锁，终于被解开了。',
    ]);
    era.println();

    await grand.say_and_wait([
      '如果这样做，还给你自由……你还有可能重新喜欢上我吗……？',
    ]);
    await grand.say_and_wait([
      '……什么的，我明明知道，这种事情是不可能的，但还是忍不住抱有期待……',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 注意到，',
      grand.get_colored_name(),
      ' 的双手正紧紧地抓着自己的裙摆。',
    ]);
    era.println();

    await grand.say_and_wait(['我知道自己做出的事情……并不是道歉能够解决的。']);
    await grand.say_and_wait([
      '但是……对不起，',
      sys_get_colored_callname(89, 0),
      '。',
    ]);
    await grand.say_and_wait([
      '然后，再见了……',
      sys_get_colored_callname(89, 0),
      '。',
    ]);
    era.println();

    await era.printAndWait([
      '即便如此，',
      grand.get_colored_name(),
      ' 依然挤出了一个笑容，目送 ',
      me.get_colored_name(),
      ' 离开。',
    ]);

    era.printButton('独自离开', 1);
    era.printButton(`邀请${grand.sex}一起离开`, 2, {
      disabled:
        era.get('relation:89:0') < 200 || !new GrandLifeMarks().b_flatter_4,
    });

    if ((await era.input()) === 1) {
      await me.say_and_wait([sys_get_callname(0, 89)[0], '……']);
      era.println();

      await era.printAndWait([
        '想要说些什么，但干渴的喉咙只允许嘴巴一张一合。',
      ]);
      await era.printAndWait([
        '即便再放心不下面前的 ',
        grand.get_colored_name(),
        '，身体和精神却已经到了崩溃的边缘。',
      ]);
      await era.printAndWait([
        '或许这次的行为只是一时冲动……但看到少女就下意识感到恐惧的内心，毫无疑问是破镜难圆的证明。',
      ]);
      await era.printAndWait([
        '或许重见天日后帮',
        grand.get_child_sex_title(),
        '瞒下这次暴行，就是 ',
        me.get_colored_name(),
        ' 唯一能为',
        grand.sex,
        '做的事情了。',
      ]);
      era.println();

      await me.say_and_wait(['该死……'], true);
      era.println();

      await era.printAndWait([
        '咒骂着不争气的自己，',
        me.get_colored_name(),
        ' 扶着墙壁，艰难地走出了地下室。',
      ]);
    } else {
      await era.printAndWait([
        '视线在铁门与少女直接来回移动，',
        me.get_colored_name(),
        ' 在心中默默有了决定。',
      ]);
      era.println();

      await me.say_and_wait([
        sys_get_colored_callname(0, 89),
        '……还记得你的梦想吗？',
      ]);
      era.println();

      await era.printAndWait([
        '从 ',
        grand.get_colored_name(),
        ' 的态度看来，这次的过激行为只是一时冲动所致。',
      ]);
      await era.printAndWait([
        '犯错是人之常情，身为大人，需要给',
        grand.sex,
        '一个重新来过的机会。',
      ]);
      era.println();

      await grand.say_and_wait(['诶……？']);
      await grand.say_and_wait(['我、我的梦想……']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 吞吞吐吐地迟迟说不出口，和刚与',
        grand.sex,
        '相遇时如出一辙。',
      ]);
      await era.printAndWait([
        '当时实现',
        grand.get_child_sex_title(),
        '梦想的约定，可不能仅是这样就轻易放弃。',
      ]);
      era.println();

      await me.say_and_wait(['让我们继续实现那个梦想吧。']);
      await grand.say_and_wait(['……诶？']);
      await grand.say_and_wait([
        '那是说……我、我还可以继续留在 ',
        sys_get_colored_callname(89, 0),
        ' 身边吗？',
      ]);
      await me.say_and_wait([
        '当然了，',
        sys_get_colored_callname(0, 89),
        ' 是我的爱马。',
      ]);
      era.println();

      await era.printAndWait([
        '听到这番话，',
        grand.get_colored_name(),
        ' 先是震惊，转而露出了一副耿耿于怀的表情。',
      ]);
      era.println();

      await grand.say_and_wait([
        '但是……但是我、我可是做了伤害 ',
        sys_get_colored_callname(89, 0),
        ' 的事情啊！',
      ]);
      await grand.say_and_wait([
        '而且 ',
        sys_get_colored_callname(89, 0),
        ' 无缘无故消失了这么久……大家一定已经——',
      ]);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 的话说到一半就被吸气声吞掉了。',
      ]);
      await era.printAndWait([
        '因为 ',
        me.get_colored_name(),
        ' 从正面握住了',
        grand.get_child_sex_title(),
        '的双手，举在胸口。',
      ]);
      era.println();

      await me.say_and_wait(['你什么都没做，我来做证。']);
      await grand.say_and_wait(['……！']);
      await me.say_and_wait(['既然是本人说的，没有什么比这更有说服力的了吧？']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        ' 像之前做过的那样，将 ',
        grand.get_colored_name(),
        ' 的脸埋在自己的胸口，避免',
        grand.sex,
        '思考那些不愉快的事情。',
      ]);
      era.println();

      await me.say_and_wait([
        '谁都做过噩梦，只是 ',
        sys_get_colored_callname(0, 89),
        ' 的睡相有点差。',
      ]);
      await me.say_and_wait(['梦醒之后，一切都结束了，就这样而已。']);
      await me.say_and_wait([
        '说到底，逼迫 ',
        sys_get_colored_callname(0, 89),
        ' 做出这种事情的我才是罪魁祸首……你愿意原谅我吗？',
      ]);
      await grand.say_and_wait([
        sys_get_colored_callname(89, 0),
        '……',
        sys_get_colored_callname(89, 0),
        '……！',
      ]);
      await grand.say_and_wait(['呜呜呜……呜呜呜啊啊啊……']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 在 ',
        me.get_colored_name(),
        ' 的怀中，不断地重复着『我愿意』，哭了很长一段时间。',
      ]);
      await era.printAndWait([
        '冷静下来后，',
        me.get_colored_name(),
        ' 牵起',
        grand.get_child_sex_title(),
        '的手，走出了地下室。',
      ]);
    }
  }

  async ask_release_reject() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await grand.say_and_wait(['不行——']);
    era.println();

    await era.printAndWait(['离开的请求换来的是斩钉截铁的拒绝。']);
    await era.printAndWait([
      '但拒绝过后，',
      grand.get_teen_sex_title(),
      '立刻露出了满是罪恶感的表情。',
    ]);
    era.println();

    await grand.say_and_wait(['我知道，都是我的错……']);
    await grand.say_and_wait([
      '但是，如果放你离开的话，我可能就再也见不到 ',
      sys_get_colored_callname(89, 0),
      ' 了！',
    ]);
    era.println();

    await era.printAndWait([
      grand.get_colored_name(),
      ' 说着抱住了 ',
      me.get_colored_name(),
      '，将脸埋在 ',
      me.get_colored_name(),
      ' 的胸口。',
    ]);
    await era.printAndWait(['比起撒娇，力量更多传达着束缚的意味。']);
    era.println();

    await grand.say_and_wait([
      '那样不行……如果连远远看着你都不被允许的话，我不知道自己会变成什么样子……',
    ]);
    await grand.say_and_wait([
      '所以说……求你了，',
      sys_get_colored_callname(89, 0),
      '……',
    ]);
    era.println();

    await era.printAndWait([
      '被 ',
      grand.get_colored_name(),
      ' 哭着挽留，但 ',
      me.get_colored_name(),
      ' 知道事情从来就没有过商量的余地。',
    ]);
    await era.printAndWait([
      '于是 ',
      me.get_colored_name(),
      ' 也回抱着',
      grand.sex,
      '，直到',
      grand.sex,
      '恢复冷静。',
    ]);
  }

  handle_escape() {
    const life_marks = new GrandLifeMarks();
    life_marks.b_find_escape = life_marks.b_flatter_4 = 0;
  }
};
