const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1 || era.get('cflag:30:育成回合计时') >= 48) {
      return true;
    }
    await print_event_name('迈出改变的第一步', rice);
    await rice.say_and_wait([self_name, '……跑完了哦！赢下来出道战了哦！']);
    era.printButton(`「${sys_get_callname(0, 30)}很努力了呢。」（好感+5）`, 1);
    era.printButton(`摸摸 ${rice.name} 的脑袋。（爱慕+1）`, 2);
    if ((await era.input()) === 1) {
      extra_flag.relation_change = 5;
    } else {
      extra_flag.love_change = 1;
    }
    await rice.say_and_wait(['哇……谢谢！', callname, '……']);
    await rice.say_and_wait([
      '诶……嘿嘿。之后也，请、多多指教 ',
      self_name,
      '！',
    ]);
    await rice.say_and_wait([
      '——就这样，',
      me.get_colored_name(),
      ' 和 ',
      self_name,
      ' 一起，迈出了最开始的一步！',
    ]);
    era.drawLine({ content: '数天后' });
    await era.printAndWait([
      '这一天，',
      me.get_colored_name(),
      ' 再次和 ',
      rice.get_colored_name(),
      ' 来到了赛场。',
    ]);
    await rice.say_and_wait('哇……人好多啊。简直就像G1一样。');
    await rice.say_and_wait('……咦？但是今天应该，既不是G2也不是G3才对啊……？');
    await say_by_passer_by(
      '实况',
      '登场了，美浦波旁！来到了【Make Debut】的赛场！！',
    );
    await rice.say_and_wait(['……', sys_get_colored_callname(30, 26), '。']);
    await say_by_passer_by('实况', '不断缩小差距，一口气冲到最前面！');
    await say_by_passer_by('实况', '速度丝毫不减，继续向前冲刺！');
    await say_by_passer_by('实况', [
      get_chara_talk(26).get_colored_name(),
      ' 以这个势头保持着第一！冲过了——终点！',
    ]);
    await say_by_passer_by('观众A', '啊～来年的经典赛，很期待哦。');
    await say_by_passer_by('观众A', '我，绝对会为波旁应援的！');
    await say_by_passer_by('观众B', [
      '嗯嗯！未来的三冠赛',
      rice.get_uma_sex_title(),
      '！',
    ]);
    await say_by_passer_by('观众A', '波旁的比赛，肯定会去看的！');
    await rice.say_and_wait([
      '……看到 ',
      sys_get_colored_callname(30, 26),
      ' 的奔跑，大家都露出了笑容吧。',
    ]);
    await rice.say_and_wait([self_name, ' 也，能做到这个样子吗？']);
    era.printButton('「能做到的！」', 1);
    await era.input();
    await rice.say_and_wait(['欸？', callname, '！？']);
    await me.say_and_wait([sys_get_colored_callname(0, 30), ' 肯定能做到的！']);
    await rice.say_and_wait('！');
    await rice.say_and_wait([
      '……欸嘿嘿。',
      callname,
      ' 的声音简直像魔法一样。',
    ]);
    await rice.say_and_wait(
      '即使是绝对做不到的事情。这样想着，好像也能够办得到。',
    );
    await me.say_and_wait([
      sys_get_colored_callname(0, 30),
      ' 也去参加经典赛怎么样？',
    ]);
    await rice.say_and_wait('……经典赛。');
    await era.printAndWait([
      '——前去参加经典赛，就意味着要和同年出道的赛',
      rice.get_uma_sex_title(),
      '们竞争。',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 和 ',
      get_chara_talk(26).get_colored_name(),
      '，在同一个舞台上——',
    ]);
    await rice.say_and_wait('！');
    era.printButton(`「是 ${sys_get_callname(0, 30)} 的话，肯定能。」`, 1);
    await era.input();
    await rice.say_and_wait('……！');
    await rice.say_and_wait([
      callname,
      ' 一直都是这么相信着 ',
      self_name,
      ' 啊。……',
    ]);
    await rice.say_and_wait('我知道了。就这么做吧。');
    await rice.say_and_wait(
      '虽然有点害怕，但已经不想再做一个无法改变的坏孩子了。',
    );
    await rice.say_and_wait([
      self_name,
      '……会努力的，会追上……追上 ',
      sys_get_colored_callname(30, 26),
      '！',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 约好了要去参加经典赛。',
    ]);
    await era.printAndWait([
      '首先是 ',
      race_infos[race_enum.sprg_sta].get_colored_name(),
      '。',
    ]);
    await era.printAndWait('作为三冠路线上的前哨站，决定朝向那个方向而努力。');
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 3),
    );
    extra_flag.pt_change = 30;
  };

  handlers[race_enum.sprg_sta] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    await print_event_name('迈向未来不停下脚步', rice);
    await rice.say_and_wait('哈啊……哈啊……！');
    era.printButton('「辛苦了。」', 1);
    await era.input();
    await rice.say_and_wait(['谢谢，', callname, '。']);
    await rice.say_and_wait('但是，暴露出的问题也很多呢。');
    await rice.say_and_wait([self_name, '，要更努力一点才行！']);
    if (extra_flag.rank !== 1) {
      era.drawLine({ content: '地下通道的另一处' });
      const bourbon = get_chara_talk(26);
      await say_by_passer_by('记者A', '波旁选手！波旁选手！！');
      await bourbon.say_and_wait('……有什么事吗？');
      await say_by_passer_by(
        '记者A',
        '不愧是【栗毛的超特急】！这次的比赛也展示出那个称号的一角呢！',
      );
      await say_by_passer_by(
        '记者A',
        '大家都在期待着呢！波旁选手达成三冠的那个辉煌瞬间！',
      );
      await bourbon.say_and_wait('应援，十分感谢。那就告辞了。');
      await say_by_passer_by('记者A', '啊，等等，等一下！至少再多一句！」');
      await say_by_passer_by('记者A', '请允许我再问一个问题！」');
      await say_by_passer_by(
        '记者A',
        '就是说……这次的比赛里。波旁的劲敌会是哪一位呢？',
      );
      await bourbon.say_and_wait('劲敌？');
      await bourbon.say_and_wait('判断并不需要那样的存在。');
      await bourbon.say_and_wait(
        '要达成第一，对手肯定会在那里的。没有当成是劲敌的必要。',
      );
      await rice.say_and_wait('……好厉害。');
      await rice.say_and_wait('既自信还很有实力，在自己的道路上前进……');
      era.printButton(`「${sys_get_callname(0, 30)} 也要加油啊。」`, 1);
      await era.input();
      await era.printAndWait('嗯！');
    }
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 35;
  };

  handlers[race_enum.toky_yus] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    extra_flag.attr_change = new Array(5);
    if (extra_flag.rank === 1) {
      await print_event_name('追上了', rice);
      await rice.say_and_wait('哈啊……哈啊……！！');
      era.printButton('「没事吧！？」', 1);
      await era.input();
      await rice.say_and_wait('没问题，没问题的。');
      await rice.say_and_wait(['比起这个，', callname, '，看到了吗？']);
      await rice.say_and_wait([self_name, '，追上了哦！']);
      await rice.say_and_wait(['欸嘿嘿，做、到了——……']);
      await era.printAndWait([rice.get_colored_name(), ' 倒下了。']);
      await rice.say_and_wait('呼……呼……');
      await era.printAndWait(
        '看来是之前用尽全力，一直紧绷的弦突然放松了下来。',
      );
      await era.printAndWait([
        '……',
        me.get_colored_name(),
        ' 稍微让',
        rice.sex,
        '靠着肩膀，让 ',
        rice.get_colored_name(),
        ' 好好休息。这么想着开始迈步的时候……',
      ]);
      const bourbon = get_chara_talk(26);
      await bourbon.say_and_wait(['——', rice.sex, '的发言，无法理解。']);
      await bourbon.say_and_wait('如果是这次的比赛内容的话。');
      await bourbon.say_and_wait([rice.sex, '应该说『战胜了波旁』才对。']);
      era.printButton('对于这孩子来说，这个更重要吧。', 1);
      await era.input();
      await bourbon.say_and_wait('……理解不能。');
      era.drawLine();
      await rice.say_and_wait([
        '对、对不起！',
        self_name,
        ' 又，给 ',
        callname,
        ' 添麻烦了……！',
      ]);
      era.printButton('「因为累了所以没办法吧。」', 1);
      await era.input();
      await rice.say_and_wait('但是……');
      era.printButton('「不如来考虑下一场比赛吧。」', 1);
      await era.input();
      await rice.say_and_wait('欸？……下一场？');
      era.printButton('「经典赛还没有结束哦。」', 1);
      await era.input();
      await rice.say_and_wait(['……说的是呢，', callname, '。']);
      await rice.say_and_wait(
        '只是侥幸赢下这次的比赛而已，这样就满足了的话，可不行呢。',
      );
      await era.printAndWait([
        '三冠路线上最后的比赛，草地3000米长距离的 ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '对于作为Stayer的 ',
        rice.get_colored_name(),
        ' 而言，这是迄今为止最关键的决胜所！',
      ]);
      extra_flag.attr_change.fill(3);
    } else {
      await print_event_name('遥远的背影', rice);
      await rice.say_and_wait([self_name, '，还是太没用了……']);
      await rice.say_and_wait('要，更、努力……');
      await era.printAndWait('（啪嗒……）');
      await era.printAndWait([
        '看来 ',
        rice.get_colored_name(),
        ' 已经使尽全力，如今紧张的情绪整个松懈下来了。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 撑着 ',
        rice.get_colored_name(),
        '，为了带',
        rice.sex,
        '回去稍作休息而踏出步伐。',
      ]);
      await era.printAndWait('（啪嗒……）');
      await rice.say_and_wait([self_name, ' 真是太没用了……']);
      await rice.say_and_wait('下一次，一定会比现在更努力。');
      extra_flag.attr_change.fill(2);
    }
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.kiku_sho] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    extra_flag.attr_change = new Array(5);
    if (extra_flag.rank === 1) {
      await print_event_name('平静的宣言', rice);
      await rice.say_and_wait([
        callname,
        '。',
        self_name,
        '、',
        self_name,
        '……！',
      ]);
      await me.say_and_wait([sys_get_colored_callname(0, 30), ' 做到了。']);
      await rice.say_and_wait('呜……嗯……！');
      await rice.say_and_wait([
        self_name,
        '、做到了……！',
        self_name,
        ' 也能够做到呢……！',
      ]);
      const bourbon = get_chara_talk(26);
      await bourbon.say_and_wait([
        '……',
        sys_get_colored_callname(26, 30),
        '。',
      ]);
      await rice.say_and_wait([
        '哇啊啊！',
        sys_get_colored_callname(30, 26),
        '！？',
      ]);
      await rice.say_and_wait('啊、啊啊。这个、这次的比赛……');
      await bourbon.say_and_wait('——嗯、『追上了』呢。');
      await rice.say_and_wait('……唔。');
      await bourbon.say_and_wait('其实，我无法理解。');
      await bourbon.say_and_wait([
        '每次都在说『追上』的 ',
        sys_get_colored_callname(26, 30),
        '。',
      ]);
      await bourbon.say_and_wait('比赛中存在的要么是胜利，要么是失败。');
      await bourbon.say_and_wait('不存在『追上』这种概念。但是——');
      await bourbon.say_and_wait([
        '现在，我感到很不甘心。没有拿下这次的 ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        ' 之类的，没能赢之类的。',
      ]);
      await bourbon.say_and_wait('……被你给追上了呢。');
      await bourbon.say_and_wait([
        sys_get_colored_callname(26, 30),
        '，听见了吗？',
      ]);
      await rice.say_and_wait('……嗯。');
      await era.printAndWait('（欢呼声——！！！）');
      await say_by_passer_by_and_wait('观众A', '真是精彩的比赛啊！米浴！');
      await say_by_passer_by_and_wait(
        '观众B',
        '你才是今年的主角！明年我也很期待！！',
      );
      await rice.say_and_wait('……不会吧……');
      await rice.say_and_wait(['在为 ', self_name, ' 鼓掌、吗？']);
      await rice.say_and_wait(['但是，', self_name, ' 只是……']);
      await bourbon.say_and_wait('不对。观众们是认可的。');
      await bourbon.say_and_wait([
        sys_get_colored_callname(26, 30),
        ' 是今年的经典赛中名副其实的胜利者。',
      ]);
      await bourbon.say_and_wait('我也认同他们的观点。');
      await bourbon.say_and_wait([
        '下一次，我一定不会再输给 ',
        me.get_colored_name(),
        '。',
      ]);
      await bourbon.say_and_wait('——作为『对手』。');
      await rice.say_and_wait('……对，手。');
      await bourbon.say_and_wait([
        sys_get_colored_callname(26, 30),
        ' 同学，',
        me.get_colored_name(),
        ' 要接下我对 ',
        me.get_colored_name(),
        ' 的挑战吗？',
      ]);
      await rice.say_and_wait(['……！', self_name, '……！']);
      await rice.say_and_wait([
        self_name,
        ' 也不想输！下一次也要……战胜所有人！',
      ]);
      await era.printAndWait([
        '——',
        rice.get_colored_name(),
        ' 的声音是能传递出去的。',
      ]);
      await era.printAndWait('这是在隔壁、甚至在整个会场都能听见的。');
      await era.printAndWait('大声的、响亮的宣言。');
      extra_flag.attr_change.fill(3);
    } else {
      await print_event_name('燃烧的心', rice);
      await rice.say_and_wait('只差一点了呢。');
      await rice.say_and_wait('只差一点就可以追上了，但还是不够！');
      await rice.say_and_wait([self_name, '，不想输！下次一定会赢的。']);
      extra_flag.attr_change.fill(2);
    }
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.nikk_sho] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank > 5) {
      return true;
    }
    await print_event_name('花瓣、纷飞', rice);
    await rice.say_and_wait(['欸嘿嘿……怎么样，', callname, '。']);
    await rice.say_and_wait([self_name, ' 的奔跑，有好好地在成长吗？']);
    await me.say_and_wait('嗯，跑得很棒哦！');
    await rice.say_and_wait('嗯！那下次也……');
    const zob_zoy = get_chara_talk(47);
    await zob_zoy.say_and_wait('……辛、辛苦了！');
    await rice.say_and_wait('！');
    await zob_zoy.say_and_wait([
      '今、今天只有……我一个人，到这里给 ',
      sys_get_colored_callname(47, 30),
      ' 应援来了。',
    ]);
    await rice.say_and_wait('啊！谢谢！那个、今天……');
    await zob_zoy.say_and_wait('跑得太棒了！');
    await zob_zoy.say_and_wait(
      '朝着一个目标不断迈进……那个姿态就像是引导民众的主角一样！',
    );
    await zob_zoy.say_and_wait('总有一天会被后世写上书本来讲述的吧……！');
    await rice.say_and_wait('呜啊啊啊……夸得太过分了啊……');
    await zob_zoy.say_and_wait('啊，对不起……不知不觉就……');
    await rice.say_and_wait('没有哦，抱歉。但是，谢谢你。');
    await rice.say_and_wait(['虽然有点不好意思……', self_name, '，很高兴哦。']);
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 4).forEach(
      (e) => (extra_flag.attr_change[e] = 3),
    );
    extra_flag.pt_change = 30;
  };

  handlers[race_enum.tenn_spr] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    const bourbon = get_chara_talk(26),
      urara = get_chara_talk(52),
      zob_zoy = get_chara_talk(47),
      mcqueen = get_chara_talk(13);
    await print_event_name('沐浴在光芒中', rice);
    await rice.say_and_wait('哈……啊、哈啊……！！');
    await me.say_and_wait('很努力了呢！');
    await rice.say_and_wait(['嗯！做到了哦！', self_name, '——']);
    await urara.say_and_wait([
      sys_get_colored_callname(52, 30),
      '！好——厉害！！',
    ]);
    await rice.say_and_wait([sys_get_colored_callname(30, 52), '！？']);
    await urara.say_and_wait('欸嘿嘿～来咯～');
    await zob_zoy.say_and_wait('不对！快回来！这里才是哦！');
    await zob_zoy.say_and_wait('虽然作为冠军的关系者过来了……');
    await bourbon.say_and_wait([
      '那我也没关系的吧？我们就是 ',
      sys_get_colored_callname(26, 30),
      ' 的相关人员。',
    ]);
    await bourbon.say_and_wait([
      '跑得很棒，',
      sys_get_colored_callname(26, 30),
      '。首先恭喜你。',
    ]);
    await bourbon.say_and_wait([
      '比赛中的你，和 ',
      sys_get_colored_callname(26, 47),
      ' 起的二名称号『执念之鬼』很相称呢。',
    ]);
    await rice.say_and_wait('……执念之鬼？');
    await zob_zoy.say_and_wait([
      '哇、哇！',
      sys_get_colored_callname(47, 26),
      '！！',
    ]);
    await zob_zoy.say_and_wait('这个称号要保密才行的啊，我不是说过了吗！');
    await rice.say_and_wait('……呼呼。');
    await rice.say_and_wait([
      '欸嘿嘿……',
      self_name,
      '，好好地回应了大家呢，在比赛里。',
    ]);
    await me.say_and_wait('让大家都露出了笑容呢。');
    await rice.say_and_wait('嗯！');
    await urara.say_and_wait([
      '啊哈哈哈，',
      sys_get_colored_callname(52, 30),
      ' 也笑眯眯的！',
    ]);
    await urara.say_and_wait('下一次的比赛也要有笑容哦！');
    await urara.say_and_wait([
      '我们也会用力地挥手，来给 ',
      sys_get_colored_callname(52, 30),
      ' 应援的！',
    ]);
    await rice.say_and_wait([
      '……是啊，',
      sys_get_colored_callname(30, 52),
      '。',
    ]);
    await rice.say_and_wait('我也会向着大家……挥手的哦。');
    await rice.say_and_wait('大大的……让大家都能看到！');
    era.drawLine({ content: '幕后' });
    await rice.say_and_wait('……话是这么说，果然，还是会紧张的啊……');
    await rice.say_and_wait([
      '在 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 的胜者舞台上是中心什么的……',
    ]);
    await me.say_and_wait('挺起胸膛。');
    await mcqueen.say_and_wait([
      '说的没错。',
      sys_get_colored_callname(13, 30),
      ' 可是战胜了我啊，所以要更自信一点。',
    ]);
    await rice.say_and_wait(['啊、', sys_get_colored_callname(30, 13), '！！']);
    await mcqueen.say_and_wait('的确这个舞台很特别。');
    await mcqueen.say_and_wait('所以站在这个舞台上的我们就得专业才是。');
    await mcqueen.say_and_wait('不该向那些期待现场演出的人们表达感激之情吗？');
    await rice.say_and_wait('没错。');
    await mcqueen.say_and_wait('所以，不要害怕舞台。');
    await mcqueen.say_and_wait('回应那些期待和想法，在舞台上闪耀。');
    await mcqueen.say_and_wait('这是在赛场上奔跑的我们的义务啊。');
    await era.printAndWait([
      '之后 ',
      mcqueen.get_colored_name(),
      ' 优雅而高贵地走向舞台。',
    ]);
    await me.say_and_wait('学到了很多呢。');
    await rice.say_and_wait('嗯，果然是位很棒的人呢。');
    await rice.say_and_wait([self_name, ' 也必须回应那些期待和想法。']);
    await rice.say_and_wait('怀着对大家的感谢之情。');
    await rice.say_and_wait(['……好！', self_name, '，出发了！！']);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 向着闪耀着光辉的舞台，迈出了',
      rice.sex,
      '前进的脚步。',
    ]);
    era.drawLine({ content: '当天晚上' });
    await rice.say_and_wait('那个……一回来就这样说的话，虽然有点奇怪……');
    await rice.say_and_wait([
      callname,
      '！',
      self_name,
      ' 还有下一个想做的事情。',
    ]);
    await rice.say_and_wait([self_name, '，想更好地回应期待着自己的人们。']);
    await rice.say_and_wait([
      '所以，下一次想要参加 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '。',
    ]);
    await rice.say_and_wait(['如果，大家都说 ', self_name, ' 可以去的话……！']);
    await era.printAndWait([
      '——',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，那是只有受到粉丝喜爱的赛',
      rice.get_uma_sex_title(),
      '才能登场的舞台。',
    ]);
    await era.printAndWait(['……最开始在学校外面独自哭泣的', rice.sex, '。']);
    await era.printAndWait('现在也拥有这个资格了呢。');
    await me.say_and_wait([
      '下次就去参加 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 吧！',
    ]);
    await rice.say_and_wait(['嗯！', self_name, ' 会继续加油的。']);
    await rice.say_and_wait('然后告诉大家——');
    await rice.say_and_wait('非常感谢。');
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.takz_kin] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (era.get('cflag:30:育成回合计时') < 96) {
      return true;
    }
    extra_flag.attr_change = new Array(5);
    if (extra_flag.rank === 1) {
      await print_event_name('盛开的、蓝', rice);
      await rice.say_and_wait('哈……啊、哈啊……！！');
      await me.say_and_wait('恭喜！');
      await rice.say_and_wait(['……欸嘿嘿。谢谢，', callname, '。']);
      await rice.say_and_wait(['那个，', self_name, '，在跑的时候也听见了。']);
      await rice.say_and_wait('大家的声音。');
      await rice.say_and_wait([
        '……嘿嘿，不行啊。',
        self_name,
        ' 明明说好了要让大家露出笑容的。',
      ]);
      await rice.say_and_wait(['只有 ', self_name, ' 感到高兴什么的。']);
      await rice.say_and_wait('真的觉得好幸福……');
      await rice.say_and_wait([
        '能够跑 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        ' 真是太好了。',
      ]);
      await me.say_and_wait('大家也是同样的想法。');
      await rice.say_and_wait('大家？');
      await era.printAndWait([
        '观众A「',
        rice.get_colored_name(),
        '——！！谢谢——！！」',
      ]);
      await era.printAndWait([
        '观众A「今年的 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '，简直是最棒的哦——！！」',
      ]);
      await rice.say_and_wait('好厉害……笑容，有好多。');
      await me.say_and_wait('是你守护了大家的笑容呢。');
      await rice.say_and_wait(['是 ', self_name, '，吗？']);
      await rice.say_and_wait(['是这样吗？', self_name, ' 也……做到了。']);
      await rice.say_and_wait('带给大家幸福，做到了呢！！');
      await me.say_and_wait([
        '谢谢你，',
        sys_get_colored_callname(0, 30),
        '。',
      ]);
      await rice.say_and_wait('呜哇啊啊啊——');
      await era.printAndWait([
        '一边颤抖着肩膀一边哭起来的',
        rice.sex,
        '，得到了观众们温暖的掌声。',
      ]);
      era.drawLine({ content: '胜者舞台' });
      await rice.say_and_wait('嘶……哈……');
      await me.say_and_wait('已经不再哭了呢。');
      await rice.say_and_wait('嘿嘿，不能一直哭啊。');
      await rice.say_and_wait('因为要在这个舞台上，好好地将笑容传递给大家。');
      await rice.say_and_wait([
        '那 ',
        self_name,
        ' 要去登台了。到大家那里去。',
      ]);
      await rice.say_and_wait('一路顺风。');
      await rice.say_and_wait('嗯！');
      await era.printAndWait([
        '这一天，',
        rice.get_colored_name(),
        ' 将最好的Live献给了观众。',
      ]);
      await era.printAndWait([
        '第二天，报纸的头条刊登了',
        rice.sex,
        '的特写。',
      ]);
      await era.printAndWait([
        '——在坡道的草地上绽放的主角，美丽的蔷薇：',
        rice.get_colored_name(),
        '。',
      ]);
      era.drawLine({ content: '那之后' });
      await rice.say_and_wait([
        callname,
        '！',
        self_name,
        ' 想去参加 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '！！',
      ]);
      await me.say_and_wait('已经定好了新的目标吗？');
      await rice.say_and_wait([
        '嗯！因为，那个！下一次的 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '。',
      ]);
      await rice.say_and_wait([
        sys_get_colored_callname(30, 26),
        ' 和 ',
        sys_get_colored_callname(30, 13),
        ' 都会参加哦！！',
      ]);
      await rice.say_and_wait(['所以，', self_name, ' 也要参赛！']);
      await rice.say_and_wait('想要进行『最棒的比赛』！！');
      await me.say_and_wait('我知道了。');
      await rice.say_and_wait(['哇！谢谢，', callname, '！']);
      await era.printAndWait([
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 和 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        ' 一样。',
      ]);
      await era.printAndWait([
        '都是在粉丝中获得人气的赛',
        rice.get_uma_sex_title(),
        '才能参加的比赛。',
      ]);
      await era.printAndWait([
        '没有在意那参赛条件，',
        rice.sex,
        '就这么说出来「想要参赛」。',
      ]);
      await era.printAndWait('这也就是说——');
      era.printButton('「长大了呢。」', 1);
      await era.input();
      await rice.say_and_wait(['欸？', self_name, ' 的身高，没有长高啊？']);
      await me.say_and_wait('并不是这个意思。');
      await rice.say_and_wait('那是什么意思呢？');
      await rice.say_and_wait(['啊！告诉我嘛～', callname, '——！！']);
      await era.printAndWait([
        '这一整天，',
        rice.get_colored_name(),
        ' 都缠在 ',
        me.get_colored_name(),
        ' 的身边。',
      ]);
      extra_flag.attr_change.fill(3);
    } else {
      await print_event_name('小小的蓝蔷薇', rice);
      await rice.say_and_wait(['那个，', self_name, ' 啊，在奔跑的时候。']);
      await rice.say_and_wait('也有听到哦，听到大家的声音。');
      await rice.say_and_wait([
        '听见大家喊着『加油——』『',
        rice.get_colored_name(),
        '～』，一直鼓励着 ',
        self_name,
        ' 前进。',
      ]);
      await rice.say_and_wait('嘿嘿，这样不行呢。');
      await rice.say_and_wait(['明明是 ', self_name, ' 要带给大家欢笑的。']);
      await rice.say_and_wait(['结果反而是大家让 ', self_name, ' 变得开心。']);
      await rice.say_and_wait('真的，好幸福。');
      await era.printAndWait([
        rice.get_colored_name(),
        ' 颤抖着肩膀哭泣，观众们则为',
        rice.sex,
        '送上温暖的掌声。',
      ]);
      extra_flag.attr_change.fill(2);
    }
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.arim_kin] = async (
    rice,
    me,
    callname,
    self_name,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1 || era.get('cflag:30:育成回合计时') < 96) {
      return true;
    }
    await print_event_name('每个人的心中都有那么一朵……', rice);
    await rice.say_and_wait('好厉害，这声音。');
    await rice.say_and_wait('大家，在看着这边。');
    await rice.say_and_wait('大家开心的样子，我都能看到哦……！');
    await me.say_and_wait('真的很努力了呢。');
    await rice.say_and_wait(['唔……嗯。', self_name, '，努力了哦……']);
    await rice.say_and_wait(['因为有大家在，', self_name, ' 努力过了。']);
    await rice.say_and_wait('真的、真的……非常感谢……大家……！');
    await rice.print_and_wait(['这一天，', rice.sex, '作为「主角」，']);
    await rice.print_and_wait('给大家带来了，');
    await rice.print_and_wait('绽放笑容的最棒的比赛。');
  };
};
