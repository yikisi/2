const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const {
  common_talk_with_in_urara,
  common_talk_with_in_urara_end,
  common_talk_with_urara_48,
} = require('#/event/edu/edu-events-52/snippets');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} urara
 * @param {string|({content:string,[color]:string}|string)[]} content
 */
function urara_say_in_lines(urara, content) {
  return era.printAndWait(
    [
      '「',
      ...(Array.isArray(content) ? content : [content]),
      '」',
      urara.get_colored_name(),
    ],
    { align: 'right', color: urara.color },
  );
}

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 48] = async (urara, me, in_urara, callname, edu_marks) => {
    era.set('cflag:52:节日事件标记', 0);
    if (RaceHistory.get(52).get_result(47 + 48)) {
      await in_urara.say_as_unknown_and_wait([
        '请记住我最后的，训练员',
        me.get_adult_sex_title(),
        '（您）',
      ]);
      return;
    }
    await print_event_name(
      [
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '的话语、',
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '的名字',
      ],
      urara,
    );
    await in_urara.say_as_unknown_and_wait([
      '主动追寻的未来，该是什么颜色的梦想呢？训练员',
      me.get_adult_sex_title(),
      '（您）会知道答案吗？',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '……哈，我明明说过要保护好',
      urara.sex,
      '的……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '不知不觉中，',
      urara.get_colored_name(),
      ' 挑战经典级的日子也快结束了啊，相遇的两年，真是发生了不少事……',
    ]);
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 牵着手一同漫步在街头，望着晴朗的天空，冬日的气氛似乎也没那么寒冷了。',
    ]);
    await era.printAndWait([
      '伴随着 ',
      me.get_colored_name(),
      ' 心中的感慨，一旁好奇地东张西望的 ',
      urara.get_colored_name(),
      ' 也说出了自己对冷清街头的新鲜感想。',
    ]);
    await urara.say_and_wait(
      '感觉今天很安静啊，街上的行人也少了不少，总觉得和想象中的不太一样呢。',
    );

    era.printButton(
      '「是因为有马纪念刚刚结束吧？比起面对寒冷，大家更喜欢在家里讨论比赛也说不定。」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '嘿嘿～',
      callname,
      '！等今年结束之后，我也能参加更重要的比赛了对吧？',
    ]);

    era.printButton('「乌拉拉今天很高兴啊。」', 1);
    await era.input();

    await urara.say_and_wait([
      '那是当然的嘛！大家都支持着我们，',
      callname,
      ' 一直都那么努力，我明年也一定会跑得更快呢！',
    ]);
    await era.printAndWait([
      '没错啊，与 ',
      urara.get_colored_name(),
      ' 一起，至今为止所做的一切没有一件是徒劳的。今后只要我们不停下来——',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '慢着，这不祥的预感是怎么回事？喂，您没在想什么奇怪的东西吧？',
    );
    await era.printAndWait([
      '伴随着背后不知从何而来的一阵凉意，同样莫名察觉到一种大事不妙感的 ',
      me.get_colored_name(),
      ' 也赶紧岔开了话题。',
    ]);

    era.printButton('「说起来，乌拉拉为什么会对有马纪念所吸引呢？」', 1);
    await era.input();

    await era.printAndWait([
      '与担当一同望向巨大的街头宣传屏中的赛事回放，',
      me.get_colored_name(),
      ' 向目光再次被其所吸引的 ',
      urara.get_colored_name(),
      ' 小声问道。',
    ]);
    await era.printAndWait([
      '毫无疑问，其上播放的正是昨天的「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」。',
    ]);
    await era.printAndWait([
      '是 ',
      urara.get_colored_name(),
      ' 主动请求与 ',
      me.get_colored_name(),
      ' 一同前往现场观看，也是让 ',
      urara.get_colored_name(),
      ' 在大家面前留下了「参赛宣言」的比赛。',
    ]);
    await era.printAndWait([
      '只是面对 ',
      me.get_colored_name(),
      ' 的问题，',
      urara.get_colored_name(),
      ' 没有将视线移开，反而「答非所问」的开口了。',
    ]);
    await urara.say_and_wait([
      '嗯——',
      callname,
      ' 从一开始与乌拉拉相遇时就很总是容易积攒压力呢！',
    ]);
    await urara.say_and_wait([
      '但是有些事情也只有 ',
      callname,
      ' 能完成哦？我与大家都需要着 ',
      callname,
      '，这一点是不会改变的！',
    ]);
    await urara.say_and_wait([
      '我现在已经做出选择了，所以 ',
      callname,
      ' 也要打起精神来哦？',
    ]);

    era.printButton('「因为决定了吗，乌拉拉要参与有马？」', 1);
    await era.input();

    await urara.say_and_wait([
      '已经决定了哦，我要参加 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '！',
    ]);
    await urara.say_and_wait(
      '因为特雷森的大家跟我说可以用投票制，所以只要努力地话，我也可以做到！',
    );
    await urara.say_and_wait([
      '而且我也想知道，商店街的大家，支持乌拉拉的人们，还有 ',
      callname,
      '……',
    ]);
    await urara.say_and_wait('为了回报大家的希望，我想自己能飞多高——');
    await era.printAndWait([
      '从 ',
      urara.get_colored_name(),
      ' 目不转睛的侧脸中，',
      me.get_colored_name(),
      ' 在',
      urara.sex,
      '稚嫩的脸庞上看到了一种前所未有的锐利感。',
    ]);
    await era.printAndWait([
      '那是站上赛场准备冲出闸门时，与「历战的赛',
      urara.get_uma_sex_title(),
      '」所相符的神态。',
    ]);
    await era.printAndWait([
      '或许现在会有很多人在质疑 ',
      urara.get_colored_name(),
      ' 是否是心血来潮，但此刻的 ',
      me.get_colored_name(),
      ' 已经确认了',
      urara.sex,
      '绝无一时兴起的可能。',
    ]);
    await era.printAndWait([
      '看来已经无需多言了。',
      me.get_colored_name(),
      ' 将目光再次投向了屏幕上在疾驰中闪耀的众人。',
    ]);

    era.printButton(
      '「这条路走起来会很辛苦，可能也不会有多开心，做好准备了吗？」',
      1,
    );
    await era.input();

    await urara.say_and_wait('嗯！现在的我，也许是世界上最大胆的人呢！');
    await era.printAndWait([
      '就算没有四目相对，担当的决心也毫无保留的传递到了 ',
      me.get_colored_name(),
      ' 的心中。',
    ]);
    await era.printAndWait([
      '或许现在的 ',
      urara.get_colored_name(),
      ' 距离闪闪发光的众人的距离，也薄薄的一面屏幕吧。',
    ]);
    await era.printAndWait(
      '站在训练员的立场，能决定目标竞赛是值得开心的好事啊，即使是难以达成的目标。',
    );
    await era.printAndWait([
      '而且 ',
      urara.get_colored_name(),
      ' 也终于有了主动想要挑战的目标，既然是',
      urara.sex,
      '的决定，那就必须要认真地支持',
      urara.sex,
      '了啊。',
    ]);
    await era.printAndWait([
      '相信认真以赴的 ',
      urara.get_colored_name(),
      ' 能带来奇迹？也很好啊，毕竟在最初的相遇时，',
      urara.sex,
      '就已经……',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '是啊，毕竟不管发生什么事，您会都一直相信着乌拉拉不是吗？',
    );
    await in_urara.say_as_unknown_and_wait([
      '哪怕',
      urara.sex,
      '没有你想象中的那么坚强也是一样。',
    ]);
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 似像非像的声音响起的一瞬，周围的一切都像按下了暂停键般陷入了定格。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 本以为自己会被吓到，但不论是身体还是精神都像已经熟悉了一切般平静如常。',
    ]);
    await era.printAndWait([
      '就如同在朦胧之中经历了无数遍的梦境般，',
      me.get_colored_name(),
      ' 缓缓转动脖颈，与身旁的「',
      in_urara.get_colored_actual_name(),
      '」对上了视线。',
    ]);
    await era.printAndWait(
      '周围稀散的行人与空气一同凝固了动作，但屏幕上略微失真的飞驰之影却还在继续着结局已知的竞赛。',
    );
    await in_urara.say_as_unknown_and_wait(
      '就像命中注定一样，对吧？就比如您与我也不是第一次相遇，只是您不记得罢了。',
    );
    await era.printAndWait([
      '相同的脸上流露出与 ',
      urara.get_colored_name(),
      ' 气质相仿却成熟又生分的微笑，',
      urara.sex,
      '维持着相同的位置与 ',
      me.get_colored_name(),
      ' 继续交流着。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '既然您与',
      urara.sex,
      '期望如此，那我会继续记录下去。那么在那之前，请让我和您聊聊吧？',
    ]);
    await era.printAndWait([
      '没等 ',
      me.get_colored_name(),
      ' 的回答，或者又像 ',
      urara.get_colored_name(),
      ' 一般看出了 ',
      me.get_colored_name(),
      ' 的默许，',
      urara.sex,
      '如叙述的第三者般讲起了一段「故事」。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '您，喜欢听故事吗？那是一位渺小到不能再渺小的……',
      urara.get_uma_sex_title(),
      '的故事——',
    ]);
    era.drawLine();
    await common_talk_with_in_urara(urara, me, in_urara);
    await in_urara.say_as_unknown_and_wait(
      '那么在最后稍微再稍微聊两句和乌拉拉的现状有关的事吧。',
    );
    if (edu_marks.fans < 25000) {
      await in_urara.say_as_unknown_and_wait([
        '对现在的乌拉拉来说，如果想参加 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 就必须先累积重赏比赛的支持度成绩。',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '您当然有陪伴乌拉拉取胜的觉悟，但乌拉拉有没有在走上赛场前顶住压力的觉悟呢？',
      );
    } else {
      await in_urara.say_as_unknown_and_wait(
        '那时的您听到了我的恳求呢，您是一位很可靠的人啊，所以乌拉拉才会一直依赖您。',
      );
      await in_urara.say_as_unknown_and_wait([
        '所以',
        urara.sex,
        '想参加有马纪念的这回事，我从一开始就不应该指望您来阻止',
        urara.sex,
        '。',
      ]);
    }
    await common_talk_with_in_urara_end(urara, me, in_urara, callname);
    await era.printAndWait([
      '而留在 ',
      me.get_colored_name(),
      ' 身边的，依旧是还在跟自己的训练员兴奋地聊着未来的「',
      urara.get_colored_actual_name(),
      '」。',
    ]);
    await era.printAndWait('真是大白天撞鬼了，三女神啊——');
    await era.printAndWait([
      '不过或许就像',
      urara.sex,
      '说的那样，现在的 ',
      urara.get_colored_name(),
      ' 或许还欠缺一些对未来的准备，但这不正是自己存在的理由吗？',
    ]);
    await era.printAndWait([
      '攥了攥被风吹得有些僵硬的手指，',
      me.get_colored_name(),
      ' 再次将注意力放回了身旁 ',
      urara.get_colored_name(),
      ' 的笑脸上。',
    ]);
    await urara.say_and_wait(
      '……而且呢，其实在一开始看到这样的比赛时，我的胸口好像就会跳得特别厉害！',
    );
    await urara.say_and_wait([
      '嘿嘿～不过这句话被 ',
      sys_get_colored_callname(52, 30),
      ' 以『说得像初恋一样会被人误会』而禁止外传了呢。',
    ]);
    await urara.say_and_wait([
      '不过我觉得就算如此，我也有必要和 ',
      callname,
      ' 说！毕竟乌拉拉第一次看到训练时，胸口也跳得很厉害……',
    ]);
    await era.printAndWait(
      '……总觉得听到了不太对劲的内容，不过这个不是重点就算了。',
    );
    await common_talk_with_urara_48(urara, me, in_urara, callname);
  };

  handlers[95 + 19] = async (urara, me, in_urara, callname) => {
    await print_event_name('「深夜的聊天室记录」', urara);
    const rice = get_chara_talk(30);
    era.drawLine({ content: '【5月XX日「乌拉拉」与「米浴」10：32】' });
    await rice.say_and_wait([
      sys_get_colored_callname(30, 52),
      ' 那边好像还显示着在线呢，是还醒着吗？',
    ]);
    era.println();
    await urara_say_in_lines(
      urara,
      '嗯！最近有点睡不着，结果每次回过神来的时候就到这个时间了！',
    );
    await urara_say_in_lines(urara, [
      '不过已经是这个时间了，',
      sys_get_colored_callname(52, 30),
      ' 那边有什么事吗？',
    ]);
    era.println();
    await rice.say_and_wait([
      '上次的事情，',
      sys_get_colored_callname(30, 52),
      ' 还是觉得很难受吗？',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '咦？诶？乌拉拉并没有没有哦？',
      sys_get_colored_callname(52, 30),
      ' 为什么这么说？',
    ]);
    era.println();
    await rice.say_and_wait([
      '因为 ',
      sys_get_colored_callname(30, 52),
      ' 不擅长伪装自己呢，最近总是没什么精神，就连 ',
      sys_get_callname(30, 30),
      ' 每天都跟在身后都没发现哦？',
    ]);
    era.println();
    await urara_say_in_lines(urara, '诶、跟在身后？是这样吗？我完全没发现！');
    era.println();
    await rice.say_and_wait([
      '对不起！那个、因为 ',
      sys_get_colored_callname(30, 52),
      ' 最近好像没什么精神，但是总找不到搭话的机会……',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '没关系的！而且 ',
      sys_get_colored_callname(52, 30),
      ' 又没错哦？但我自己也搞不太清楚，所以不知道要怎么做才好。',
    ]);
    await urara_say_in_lines(
      urara,
      '我也觉得再这样下去是不行的，可是我只要一想起那天的事情，眼泪就又要掉下来了……',
    );
    era.println();
    await rice.say_and_wait([
      '对不起！',
      sys_get_colored_callname(30, 52),
      ' 如果实在难受的话，就先冷静一下吧！',
    ]);
    await rice.say_and_wait([
      '还有这样的话，虽然 ',
      sys_get_callname(30, 30),
      ' 也不太可靠，但如果 ',
      sys_get_colored_callname(30, 52),
      ' 愿意的话，可以听 ',
      sys_get_callname(30, 30),
      ' 说说吗？',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      sys_get_colored_callname(52, 30),
      ' 真冷静啊，难道 ',
      sys_get_colored_callname(52, 30),
      ' 经常会遇见这样的事吗？',
    ]);
    era.println();
    await rice.say_and_wait([
      '经、经常也不至于啦……虽然状况可能不太一样，但米浴也被这样说过很过分的话。',
    ]);
    if (era.get('cflag:30:殿堂')) {
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        ' 一定也听说过吧，以前的 ',
        sys_get_callname(30, 30),
        ' 不小心赢了对某人来说非常重要的比赛。',
      ]);
      await rice.say_and_wait(
        '结果呢，那时周围全都是失望的叹息声，还有很多人因此生气了，很没道理吧？',
      );
      era.println();
      await urara_say_in_lines(urara, [
        '嗯，那时 ',
        sys_get_colored_callname(52, 30),
        ' 一定受了很多委屈吧……',
      ]);
      era.println();
      await rice.say_and_wait([
        '曾经的 ',
        sys_get_callname(30, 30),
        ' 的确很迷茫，但即使那样，',
        sys_get_callname(30, 30),
        ' 也不觉得自己是错的。',
      ]);
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        ' 一定很惊讶吧，但是 ',
        sys_get_callname(30, 30),
        ' 的看法从来没改变过哦？',
      ]);
      await rice.say_and_wait(
        '虽然叹息声很可怕，但是只要坚持下去，大家也都会在有一天正视你的一切。',
      );
      await rice.say_and_wait([
        '所以 ',
        sys_get_callname(30, 30),
        ' 从来没有因胜利道歉过，如果轻易向责难低头，就是辜负大家一直以来的祝福。',
      ]);
    } else {
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        ' 一定也听说过吧，',
        sys_get_callname(30, 30),
        ' 不小心抢走了对某人来说非常重要的胜利。',
      ]);
      await rice.say_and_wait(
        '结果呢，周围全都是失望的叹息声，还有很多人因此生气了，很没道理吧……',
      );
      era.println();
      await urara_say_in_lines(urara, [
        '嗯，那时 ',
        sys_get_colored_callname(52, 30),
        ' 受了很多委屈呢……',
      ]);
      era.println();
      await rice.say_and_wait([
        '但是，',
        sys_get_callname(30, 30),
        ' 现在果然还是胜利者吧……',
      ]);
      await rice.say_and_wait([
        sys_get_colored_callname(30, 52),
        ' 是不是觉得听起来有些奇怪，但是 ',
        sys_get_callname(30, 30),
        ' 真的是这样想的哦？',
      ]);
      await rice.say_and_wait(
        '虽然差一点就被叹息声击倒，但继续奔跑下去，不知不觉间大家的祝福也多起来了。',
      );
      await rice.say_and_wait([
        '所以为了祝福 ',
        sys_get_callname(30, 30),
        ' 的大家，现在的 ',
        sys_get_callname(30, 30),
        ' 也会继续赢下去哦？',
      ]);
    }
    await rice.say_and_wait([
      '就是这样，',
      sys_get_colored_callname(30, 52),
      ' 不用太担心哦？所以接下来，只要和以前一样继续跑下去就好——',
    ]);

    era.drawLine({ content: '【5月XX日「乌拉拉」与「小圣王」11:01】' });
    const halo = get_chara_talk(61);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 52),
      '，这么晚了还没睡吗？明天起晚了的话 ',
      sys_get_colored_callname(61, 0),
      ' 也会为难的吧？',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '但是，',
      sys_get_colored_callname(52, 61),
      ' 不是也没睡吗？',
    ]);
    era.println();
    if (era.get('cflag:61:殿堂')) {
      await halo.say_and_wait(
        '我已经没有那么重的比赛需求了哦？现在其实和暂住在宿舍里也差不多。',
      );
      await halo.say_and_wait([
        '倒是你啊 ',
        sys_get_colored_callname(61, 52),
        '。对面的床上，手机的光从被子下漏出来了。',
      ]);
      era.println();
      await urara_say_in_lines(urara, [
        sys_get_colored_callname(52, 61),
        ' 是生气了吗……',
      ]);
      era.println();
      await halo.say_and_wait([
        '才没有啊，只是最近看 ',
        sys_get_colored_callname(61, 52),
        ' 一直心不在焉，是还在为那些天的事难过吗？',
      ]);
    } else {
      await halo.say_and_wait(
        '其实本来是睡得好好的，但是漏出来了哦？被子下面的手机的光。',
      );
      await halo.say_and_wait(
        '我说有过吧，就算要在夜里看手机也不要把亮度调那么高。',
      );
      era.println();
      await urara_say_in_lines(urara, '对不起哦……');
      era.println();
      await halo.say_and_wait([
        '不是要你道歉啦，只是最近 ',
        sys_get_colored_callname(61, 52),
        ' 连身体都不好好保护了，应该还是很难受吧？',
      ]);
    }
    era.println();
    await urara_say_in_lines(urara, '嗯，其实——');
    await urara_say_in_lines(urara, '——');

    era.drawLine({ content: '【5月XX日「乌拉拉」与「小圣王」11:13】' });
    await urara_say_in_lines(urara, [
      '就是这样，',
      sys_get_colored_callname(52, 30),
      ' 是这么说的……',
    ]);
    await urara_say_in_lines(urara, [
      '小圣王，你说我只要更加努力，大家就不会难过了吗？',
    ]);
    await urara_say_in_lines(
      urara,
      '只要我坚持下去，就不会有人再觉得『乌拉拉不该去比赛』了吗？',
    );
    era.println();
    await halo.say_and_wait([
      '……抱歉，',
      sys_get_colored_callname(61, 52),
      '，我应该更早和你说的，而且米浴的方法，也不完全适合你的情况。',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      '诶？',
      sys_get_colored_callname(52, 61),
      '，这是什么意思？',
    ]);
    era.println();
    await halo.say_and_wait([
      '唉……虽然我接下来要说的事可能会让 ',
      sys_get_colored_callname(61, 52),
      ' 变得更难受，但是请你一定要听到最后。',
    ]);
    await halo.say_and_wait(
      '——大家不可能不难过哦？不是所有人都输掉了还能安然的对赢家说出『恭喜』的。',
    );
    await halo.say_and_wait([
      '现在的 ',
      sys_get_colored_callname(61, 52),
      ' 已经知道了，对于绝大多数',
      urara.get_uma_sex_title(),
      '来说，某些比赛一生都只有一次机会。',
    ]);
    await halo.say_and_wait(
      '倒在追求愿望的路上、或者连目标都没看到就迷失了方向，这些事情数不胜数。',
    );
    await halo.say_and_wait(
      '虽然听上去可能很过分，但只要选择去争夺胜利，就不可能让所有人都幸福。',
    );
    era.println();
    await urara_say_in_lines(urara, ['怎么会这样……那小圣王也？']);
    era.println();
    await halo.say_and_wait(
      '所以我会接受那些来自他人的诅咒，并堂堂正正的跑下去，就算这并不公正也好。',
    );
    await halo.say_and_wait([
      '因为对于一流的',
      urara.get_uma_sex_title(),
      '来说，虽然很恼人，但其实别人的非议与怨念都不重要。',
    ]);
    await halo.say_and_wait([
      '重要的是，',
      urara.sex,
      '要怎样看待自己的胜利，而且作答的也只能是',
      urara.sex,
      '自己。',
    ]);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 52),
      '，你之前说过想赢对吧。',
    ]);
    era.println();
    await urara_say_in_lines(
      urara,
      '嗯，不只是为了大家，现在的乌拉拉也想要赢下去，但是却发生了那样的事。',
    );
    era.println();
    await halo.say_and_wait(
      '既然这样那就暂时保持原样好了，只要继续昂首挺胸的赢下去，就一定能找到答案。',
    );
    await halo.say_and_wait([
      '所以，',
      sys_get_colored_callname(61, 52),
      ' 也不必一直为此伤心。',
    ]);
    era.println();
    await urara_say_in_lines(urara, [
      sys_get_colored_callname(52, 61),
      ' 的话总是很难懂啊，不过既然 ',
      sys_get_colored_callname(52, 61),
      ' 已经说了，那乌拉拉也会试试看！',
    ]);
    era.println();
    await halo.say_and_wait([
      '嗯，谢谢……',
      sys_get_colored_callname(61, 52),
      ' 你一定没问题的。',
    ]);
    await halo.say_and_wait(['因为现在的你，也是『一流的乌拉拉』啊——']);

    era.drawLine({ content: '【5月XX日「乌拉拉」与「乌拉拉？」??:??】' });
    await in_urara.say_as_unknown_and_wait(
      '又是这样呢，所谓的朋友依旧净说些只为了关心的话。',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '不可以这么说哦？而且你也是乌拉拉的朋友嘛。',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait([
      '我知道哦，但乌拉拉也明白不是吗？',
      urara.sex,
      '们其实没法真正的帮到你。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '虽然可以借鉴，但是抄不来别人的答案，一路走过来的也是乌拉拉和训练员不是吗？',
    );
    await in_urara.say_as_unknown_and_wait(
      '不过觉得痛苦的话，来倚靠我也没关系，我这里刚好有一剂『解药』哦？',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '……嘿嘿～又来了呢，真狡猾啊，总是对着朋友说这样过分的真心话。',
    );
    await urara_say_in_lines(
      urara,
      '而且如果我答应了你的请求，你就可以露出真正开心的笑容了吗？',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait(
      '那是当然的，我不是说过很多次了吗？乌拉拉的幸福也是我的幸福……',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '可是如果要乌拉拉来作答的话，我不会觉得你的方法是正确的哦？',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait('啊哈，真遗憾，又被乌拉拉拒绝了。');
    await in_urara.say_as_unknown_and_wait(
      '但是我真的从来没想过要伤害乌拉拉，至少这一点，请乌拉拉相信我。',
    );
    era.println();
    await urara_say_in_lines(
      urara,
      '嗯，我们一直相信着彼此，所以乌拉拉无论何时都不能答应你的请求哦？',
    );
    era.println();
    await in_urara.say_as_unknown_and_wait('果然又是，什么都没做到吗——');

    era.drawLine();
    await urara.print_and_wait([
      '随着一声奇妙的电流声，「',
      urara.sex,
      '」也离开了，黑暗再次钻进了小小的被窝，又冷又不安。',
    ]);
    await urara.print_and_wait(
      '总觉得就像被抓住了尾巴一样，如果乌拉拉现在就睡下的话，一定会做噩梦的。',
    );
    await urara.print_and_wait([
      '但是不赶快睡的话，一定会让人担心的，现在的我已经不可以再让 ',
      callname,
      ' 担心了！',
    ]);
    await urara.say_and_wait([callname, '、', callname, '……'], true);
    await urara.print_and_wait(
      '抹掉正悄悄准备从眼角跳下的水滴，裹紧的被子下，刚刚放下的手机还带着余温。',
    );
    await urara.print_and_wait(
      '这样做可能会被说教，或许明天还会变得睡眠不足而跑不动，但是……',
    );
    await urara.print_and_wait(
      '抱着自己在今晚最后一点任性，我折起耳朵，在黑暗中再次点亮了手掌大的方屏。',
    );
    await urara.print_and_wait([
      '不是聊天室，也不是其他的什么……这么晚打电话一定会打扰到 ',
      callname,
      ' 的，或许还会惹小圣王生气。',
    ]);
    await urara.print_and_wait([
      '但是拜托了，哪怕被说教也好——我想现在就见 ',
      callname,
      '，乌拉拉，想现在就听到 ',
      callname,
      ' 的声音!',
    ]);
    await urara.print_and_wait(['所以，', callname, '，请接起来——']);
    era.drawLine({ content: `【5月XX日「乌拉拉」与「${callname}」11:50】` });
    await urara_say_in_lines(urara, '——');
    await urara_say_in_lines(urara, [callname, '，还在吗？']);
    let wait_flag = get_attr_and_print_in_event(52, [0, 0, 0, 5, 5], 0);
    wait_flag = sys_like_chara(30, 52, 100) || wait_flag;
    wait_flag = sys_like_chara(61, 52, 100) || wait_flag;
    wait_flag = sys_like_chara(52, 30, 50) || wait_flag;
    wait_flag = sys_like_chara(52, 61, 50) || wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
