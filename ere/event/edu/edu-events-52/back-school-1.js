const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { common_out_check } = require('#/event/edu/edu-events-52/snippets');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},{loc:number},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.teach = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (
      era.get('flag:当前互动角色') !== 52 ||
      extra_flag.loc !== location_enum.shopping
    ) {
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(52).sub(event_hooks.out_shopping);
    await print_event_name('名指导', urara);
    await era.printAndWait([
      '在从商店街采购结束的回程路上，身边帮 ',
      me.get_colored_name(),
      ' 拎着东西的 ',
      urara.get_colored_name(),
      ' 正开心地哼唱着什么。',
    ]);

    era.printButton('「心情变得很好啊，刚刚发生了什么好事吗？」', 1);
    await era.input();

    await urara.say_and_wait(
      '嘿嘿～没错哦！商店街的大家对我说『你很努力哦』，还送我礼物呢！很棒吧！',
    );
    await urara.say_and_wait(
      '以前大家对我说的都是『不要勉强哦』，而现在说『你很努力哦』的人也变多了！',
    );
    await era.printAndWait([
      '蹦蹦跳跳的将手中的袋子们摇得沙沙作响，小',
      urara.uma_sex_title,
      '对 ',
      me.get_colored_name(),
      ' 露出了感谢的笑容。',
    ]);
    await urara.say_and_wait(
      '我想一定是因为我跑得比以前更快了，所以认可乌拉拉的人也变多了！',
    );
    await urara.say_and_wait([
      '但是如果没有 ',
      callname,
      '，乌拉拉也没办法走到这一步呢！所以，谢谢你，',
      callname,
      '！',
    ]);

    era.printButton('「既然这样的话，那么接下来的比赛也要——」', 1);
    await era.input();

    await urara.say_and_wait('没错！接下来的比赛乌拉拉也会继续加油的！');
    await era.printAndWait([
      '在 ',
      urara.get_colored_name(),
      ' 迎着阳光的笑脸中，',
      me.get_colored_name(),
      ' 与',
      urara.sex,
      '一同鼓起了面向下一次的干劲。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, [0, 0, 0, 10, 0], 0);
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.dance = async (urara, me, callname, flags, ___, event_object) => {
    if (era.get('flag:当前互动角色')) {
      await era.printAndWait([
        '据说 ',
        urara.get_colored_name(),
        ' 会在放学后独自进行舞蹈练习……下次独自出行的时候注意去看看吧',
      ]);
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.back_school);
    await print_event_name('舞蹈练习', urara);
    await era.printAndWait([
      me.get_colored_name(),
      ' 为了拿忘记的东西前往舞蹈室时，发现 ',
      urara.get_colored_name(),
      ' 今天也在下课后继续独自进行着舞蹈练习。',
    ]);
    await urara.say_and_wait([
      '——好，结束了！呼～好怀念啊……啊！',
      callname,
      ' 你来了！',
    ]);
    await era.printAndWait([
      '在音乐结束后擦着脸上的汗水，看到训练员走来的 ',
      urara.get_colored_name(),
      ' 也笑着迎向了 ',
      me.get_colored_name(),
      '。',
    ]);

    era.printButton('「嗯！乌拉拉也辛苦了！不过，怀念的事情是指？」', 1);
    await era.input();

    await urara.say_and_wait(
      '啊，那是我小时候常常在家里的工作用小屋跳舞，老家的朋友们还用木头帮我做了麦克风！',
    );
    await urara.say_and_wait(
      '在来特雷森的时候，大家还跟乌拉拉约好了，说以后大家会一起来看我的演唱会呢！',
    );
    await urara.say_and_wait(
      '所以我也得好好练习演唱会的表演才行，可不能让他们失望呢！',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      ' 的老家，是说在高知的朋友们吗？所以',
      urara.sex,
      '才会这么努力的为赛后Live做准备啊。',
    ]);

    era.printButton('「嗯……可以让我看看乌拉拉的成果吗？」', 1);
    await era.input();

    await urara.say_and_wait([
      '当然没问题！那么 ',
      callname,
      '，帮乌拉拉按一下录音机可以吗？',
    ]);
    await era.printAndWait([
      '随着熟悉的音乐，',
      urara.get_colored_name(),
      ' 开始在 ',
      me.get_colored_name(),
      ' 的注视下大方的展示着自己一直以来的努力。',
    ]);
    await era.printAndWait([
      '虽然有时会唱错歌词，但',
      urara.sex,
      '的肢体语言却能够充分的表达出自己的情感，可以算是十分出色的表演。',
    ]);

    await urara.say_and_wait([
      callname,
      '，乌拉拉怎么样呢？大家看了会开心吗？',
    ]);
    era.printButton('「嗯，大家一定会很开心的。」（速度+10）', 1);
    era.printButton('「把歌词记熟的话或许会更好。」（智力+10）', 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      attr_change[attr_enum.speed] = 10;
      await urara.say_and_wait(
        '果然会吧！乌拉拉也觉得一定会的！所以正式上场时，我一定会更努力表演的！',
      );
      await urara.say_and_wait(
        '不管是现在还是过去，我会让支持我的大家都看到乌拉拉的成长哦！',
      );
      await era.printAndWait([
        '干劲十足的 ',
        urara.get_colored_name(),
        ' 又开始了自主练习，不管怎样，这样努力的',
        urara.sex,
        '在上台时一定不会失败吧。',
      ]);
    } else {
      attr_change[attr_enum.intelligence] = 10;
      await urara.say_and_wait(
        '说的也是，我好像经常搞错歌词！但只要能好好记住歌词，演唱会一定会变得更棒吧？',
      );
      await urara.say_and_wait('好！那么乌拉拉接下来要努力背歌词了！');
      await era.printAndWait([
        '熟记歌词后，',
        urara.sex,
        '的歌声更能精准地传达感情，想来在台上的时候也能更加引人注目吧。',
      ]);
    }
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.stair = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (extra_flag.loc !== location_enum.chairman) {
      await era.printAndWait(
        '据说学生中有关于阶梯数的怪谈……下次独自前往理事长办公室的时候注意一下吧',
      );
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.school_chairman);
    await print_event_name('阶梯训练与学生传言', urara);
    await era.printAndWait([
      '在从理事长办公室回去的路上，',
      me.get_colored_name(),
      ' 在教学楼的某个楼梯口附近撞见了不知为何在跑上跑下的 ',
      urara.get_colored_name(),
      '。',
    ]);
    await urara.say_and_wait('呼……呼……结果又是只有……十二阶……');

    era.printButton(
      '「乌拉拉，这是在做什么呢？自主训练的话去训练场比较好哦？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '啊，',
      callname,
      '！我听大家说这里的楼梯，每到傍晚就会增加一阶哦！就像魔法一样！',
    ]);
    await urara.say_and_wait(
      '我觉得很有趣所以就跑来数了，结果直到现在都已经来回数了一个多小时了……',
    );
    await era.printAndWait([
      '原来是校园怪谈啊。特雷森的',
      urara.uma_sex_title,
      '们毕竟也是青春期的',
      urara.teen_sex_title,
      '们啊，感兴趣也是理所当然的。',
    ]);
    await era.printAndWait([
      '而且对身为训练员的 ',
      me.get_colored_name(),
      ' 来说，比起不确定的灵异传言，还是至今仍围绕着诸多谜团的',
      urara.uma_sex_title,
      '们更加有趣。',
    ]);

    era.printButton('「不过，数了一个多小时也太长了吧？」', 1);
    await era.input();

    await urara.say_and_wait('嗯！因为不管我数了几次……台阶却一直都是十二节……');
    await urara.say_and_wait(
      '所以现在乌拉拉还不想放弃，因为大家都说是真的，所以我想要再多数几次……',
    );
    await era.printAndWait(
      '不，这样不行的吧？先不说这个传言的结局是会有霉运缠身，灵异事件怎么说也不能靠赶巧遇见吧？',
    );
    await era.printAndWait([
      '看吧，五、十、十一、十二、十三……等下？！突然察觉到有哪里不对，',
      me.get_colored_name(),
      ' 捂住了阵阵发凉的后颈……',
    ]);
    await urara.say_and_wait(['……诶？', callname, ' 是要做什么呢……呜哇——']);
    await era.printAndWait([
      '察觉到大事不妙的 ',
      me.get_colored_name(),
      ' 立即将小',
      urara.uma_sex_title,
      '夹在腋下，随后以人类最快的速度逃离了那个是非之地。',
    ]);
    await era.printAndWait([
      '结果，虽然避开了异常，事后 ',
      urara.get_colored_name(),
      ' 却因过度运动的疲劳丢失了活力，可能……这也是霉运的一种吧？',
    ]);
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      [0, 0, 0, 0, 20],
      0,
      [-100],
      true,
    );
    flags.wait_flag = sys_change_motivation(52, -1) || flags.wait_flag;
  };

  handlers.mother = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (extra_flag.loc !== location_enum.chairman) {
      await era.printAndWait(
        '据说理事长办公室附近最近有陌生人出没……下次独自前往理事长办公室的时候接触一下吧',
      );
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.school_chairman);
    const in_urara = get_chara_talk(52, chara_colors[1]);
    await print_event_name('「那个人」的偶遇', urara);
    await in_urara.say_as_unknown_and_wait([
      '啊～是那个人。训练员',
      me.adult_sex_title,
      '（您），虽然只是偶然的邂逅，但还请做好准备哦？',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '不对，或许对那个人来说，这并非是偶然事件吧？',
    );
    era.drawLine();
    await era.printAndWait([
      '站在理事长办公室的门口，在 ',
      me.get_colored_name(),
      ' 观察着眼前黑衣马娘的同时，她也在平静的打量着路过的 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      '是从来没见过的生面孔。是以前的毕业生？是来特雷森参观的学生家长？是理事长的熟人？还是……',
    );
    await era.printAndWait([
      '面对不知如何开口的 ',
      me.get_colored_name(),
      '，这位容貌端庄的成熟马娘放下了正要敲门的手，并转身露出了友善的微笑。',
    ]);
    await era.printAndWait(
      '成熟的马娘「很抱歉，是我失礼了。您是这里的训练员对吧？请问，您能带我去训练场看看吗？」',
    );

    era.printButton('「诶？啊，请问您是……？」', 1);
    await era.input();

    await era.printAndWait([
      '成熟的马娘「姑且算是学生的家长吧，我的',
      urara.sex_code - 1 ? '女儿' : '儿子',
      '也在这里上学，现在已经出道了。」',
    ]);
    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 与她之前从未见过，但这位气质严肃的女士的笑容，却让 ',
      me.get_colored_name(),
      ' 产生了相识已久的亲切感。',
    ]);

    era.printButton('「……训练场的话是向那边走，跟我来吧……」', 1);
    await era.input();

    await era.printAndWait([
      '不明不白的相遇后是接下不明不白的请求，',
      me.get_colored_name(),
      ' 与这位突然出现的神秘女士一同走向了前往训练场的路。',
    ]);
    await era.printAndWait([
      '只是比起僵硬到只会简单应答的 ',
      me.get_colored_name(),
      '，一旁的她倒是对第一天认识的 ',
      me.get_colored_name(),
      ' 莫名地充满兴趣。',
    ]);
    if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
      await era.printAndWait([
        '而在向 ',
        me.get_colored_name(),
        ' 咨询过许多与',
        urara.uma_sex_title,
        '与特雷森相关的问题后，她亲切的微笑中似乎又多了几分谢意。',
      ]);
      await era.printAndWait(
        '成熟的马娘「看来您也很辛苦啊，毕竟无时无刻都要为担当着是很难做到的。」',
      );
      await era.printAndWait([
        '成熟的马娘「其实我的',
        urara.sex_code - 1 ? '女儿' : '儿子',
        '也很幸运，虽然',
        urara.sex,
        '并不强大，但也找到了和您一样优秀的训练员。」',
      ]);
      await era.printAndWait([
        '在同行的终点与 ',
        me.get_colored_name(),
        ' 一同站上训练场的观望平台，仿佛熟知一切的她向奔跑的',
        urara.teen_sex_title,
        '们投去了欣慰的笑容。',
      ]);
    } else {
      await era.printAndWait([
        '而在仿佛是对坏学生的摸底考试般问了一大圈有的没的后，她将变得锐利的目光再次投向了 ',
        me.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '成熟的马娘「不过，您的确有与中央相符的专业水平，但似乎对担当的心灵缺乏养护啊……」',
      );
      await era.printAndWait([
        '成熟的马娘「只是就算这么想也已经太迟了，走上赛场的',
        urara.uma_sex_title,
        '一旦跑起来就不会轻易放弃。」',
      ]);
      await era.printAndWait([
        '在同行的终点与 ',
        me.get_colored_name(),
        ' 一同站上训练场的观望平台，仿佛熟知一切的她的脸上又多了几分忧愁。',
      ]);
    }
    if (era.get('love:52') >= 50) {
      await era.printAndWait([
        '成熟的马娘「说起来，仰慕着您的马娘有多少……就算我突然这么问，您也只会莫名其妙吧。」',
      ]);
      await era.printAndWait(
        '成熟的马娘「但在将梦想寄于奔跑的时代中，爱上自己背后那位仿佛永远支持自己大人……」',
      );
      await era.printAndWait([
        '成熟的马娘「这不会是正确的，但青春正盛的',
        urara.sex,
        '们又有几个能免俗呢？就连当时的我也不例外……」',
      ]);
    }
    era.printButton('「那个……很抱歉打断您，但是您到底……？」', 1);
    await era.input();

    await era.printAndWait(
      '成熟的马娘「只是一位普通的来看孩子的家长而已哦？」',
    );
    await era.printAndWait([
      '没有直接回答 ',
      me.get_colored_name(),
      ' 的问题，望着从训练场的另一头奔跑而来的樱色，神秘的女性对 ',
      me.get_colored_name(),
      ' 留下了最后一抹微笑。',
    ]);
    await era.printAndWait([
      '成熟的马娘「那是你的担当对吧？真是可爱又帅气的孩子啊，不去接接',
      urara.sex,
      '吗？」',
    ]);

    era.printButton('「啊，好……诶？」', 1);
    await era.input();

    await era.printAndWait(
      '仅是眨眼的瞬间，那名身着黑衣的神秘马娘便只剩下了十几米开外的遥远背影。',
    );
    await era.printAndWait([
      '而另一边，冲上观景台的 ',
      urara.get_colored_name(),
      ' 则兴奋地扑进了 ',
      me.get_colored_name(),
      ' 的怀中，将 ',
      me.get_colored_name(),
      ' 刚要想起什么的思绪再次搅成一团。',
    ]);
    await urara.say_and_wait([
      callname,
      '！今天乌拉拉的状态超级好哦！甚至模拟赛都跑赢了呢！怎么样？很厉害吧！',
    ]);
    await era.printAndWait([
      '但在抬起头看向 ',
      me.get_colored_name(),
      ' 还有些懵懵的正脸时，虽然依旧笑容满面，小',
      urara.uma_sex_title,
      '脸上的表情却逐渐掺入了疑惑。',
    ]);
    await urara.say_and_wait([
      '……咦？好奇怪啊，为什么我能在 ',
      callname,
      ' 身上，闻到妈妈的味道呢——',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '怎么样？很奇怪的一次偶遇对吧？不过这真的是偶遇吗？还是说，一切都是必然的？',
    );
    await in_urara.say_as_unknown_and_wait(
      '只是对您与乌拉拉，甚至是也对那个人和我来说，在进入特雷森时，骰子便早已掷下了。',
    );
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      new Array(5).fill(5),
      100,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.challenge = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (era.get('flag:当前互动角色') > 0) {
      await era.printAndWait(
        '据说最近学生们在进行特别的挑战，下次独自行动的时候注意一下吧……',
      );
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    EventMarks.get(0).sub(event_hooks.back_school);
    await print_event_name('「传奇」的挑战', urara);
    const grass = get_chara_talk(11);
    await era.printAndWait([
      '在某天下午，正当 ',
      me.get_colored_name(),
      ' 前往训练员室的时候，突然看到了在走廊上在和谁议论着什么的 ',
      urara.get_colored_name(),
      '。',
    ]);
    await urara.say_and_wait([
      sys_get_colored_callname(52, 11),
      '！趁着这个机会我们一起打倒 ',
      sys_get_colored_callname(52, 1),
      ' 哦！',
    ]);
    await grass.say_and_wait(
      '虽然心意我明白……但是，那个……该说这场战役的等级完全不同吗……',
    );
    await grass.say_and_wait([
      '啊，',
      era.get('cflag:11:招募状态') === recruit_flags.yes
        ? sys_get_colored_callname(11, 0)
        : '乌拉拉的' + sys_get_callname(11, 0),
      '，正好，您也来劝劝 ',
      sys_get_colored_callname(11, 52),
      ' 吧。',
    ]);

    era.printButton(
      `「怎么了吗？是要和 ${sys_get_callname(0, 1)} 跑比赛吗？」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '是这样的！商店街这次要举办很厉害的比赛哦！名字就叫——',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      ' 展开手中的海报，其上正以淳朴的排版，呈现着 ',
      get_chara_talk(1).get_colored_name(),
      ' 挑战特大份拉面时的「壮举」。',
    ]);
    await era.printAndWait([
      '瞅着夸张的海报，再与微笑中又有几分犹豫的 ',
      grass.get_colored_name(),
      ' 四目相对，',
      me.get_colored_name(),
      ' 大概猜到了接下来的展开。',
    ]);
    await urara.say_and_wait(
      '『向传奇☆特别周发起挑战！吃光超特大碗拉面吧！』怎么样？很帅吧！',
    );
    await urara.say_and_wait(
      '我还特地去问了拉面店那边，他们还刚好在征求两名参赛的选手哦！',
    );
    await urara.say_and_wait([
      '所以啦，',
      sys_get_colored_callname(52, 11),
      '～一起去挑战嘛！我们一定可以赢过 ',
      sys_get_colored_callname(52, 1),
      ' 的哦～',
    ]);
    await era.printAndWait([
      '但即使面对 ',
      urara.get_colored_name(),
      ' 的撒娇攻势，铜墙铁壁的大和抚子看上去也完全不为所动。',
    ]);
    await grass.say_and_wait([
      '但是，',
      sys_get_colored_callname(11, 52),
      '……你吃得完吗？我记得你每次午餐都吃得比我还少……',
    ]);
    if (era.get('cflag:11:招募状态') === recruit_flags.yes) {
      await me.say_and_wait(
        [
          '不过，',
          grass.get_colored_name(),
          ' 你饭量其实算是很大的那类吧？虽然一次拿的不多，但好像会偷偷跑好几趟……',
        ],
        true,
      );
      await me.say_and_wait(
        [
          '还有 ',
          grass.get_colored_name(),
          ' 你其实很想去吃对吧？虽然',
          grass.teen_sex_title,
          '的矜持和体重控制限制了行动，但你在悄悄咽口水哦？',
        ],
        true,
      );
      await era.printAndWait([
        '只是……以上这般话语也仅是想想罢了。看着 ',
        grass.get_colored_name(),
        ' 尚且和善的笑脸，',
        me.get_colored_name(),
        ' 把可能致死的情报吞了回去。',
      ]);
    }
    await urara.say_and_wait(
      '没问题的！比赛前只要把前几顿都空出来就没问题了！这就是大胃王比赛的诀窍哦！',
    );
    await grass.say_and_wait([
      '唔……真的没问题吗？我实在不觉得光靠这样就能赢过 ',
      sys_get_colored_callname(11, 1),
      ' 哦……？',
    ]);
    await urara.say_and_wait([
      '也对啊，毕竟 ',
      sys_get_colored_callname(52, 1),
      ' 是传奇人物嘛，但是……现在放弃的这个机会，是不是太可惜了？',
    ]);
    await grass.say_and_wait([sys_get_colored_callname(11, 52), '……']);
    era.print([
      '从刚才就一直接收着 ',
      grass.get_colored_name(),
      ' 的眼神暗示，现在的 ',
      me.get_colored_name(),
      ' 终于找准时机插进了话题。',
    ]);

    era.printButton(
      `「还是在比赛中赢过${urara.sex}吧。」（体力+100 技能点数+5）`,
      1,
    );
    era.printButton(
      '「要不……我们挑战看看？」（体力+300 技能点数+10 体重增加）',
      2,
    );
    if ((await era.input()) === 1) {
      await grass.say_and_wait([
        sys_get_colored_callname(11, 0),
        ' 说的没错，与其比食量大，在赛场上一定会更有趣的。',
      ]);
      await urara.say_and_wait(
        '既然都这么说的话……嗯！乌拉拉明白了！我会在以后得比赛中成为更厉害的传奇的！',
      );
      await era.printAndWait([
        '于是在 ',
        me.get_colored_name(),
        ' 与 ',
        grass.get_colored_name(),
        ' 的帮助下，今天 ',
        urara.get_colored_name(),
        ' 成功躲过了体重增加的危机。',
      ]);
      await era.printAndWait(
        '不过「在赛场上成为传奇」吗？这个听上去真不错啊……',
      );
      flags.wait_flag = get_attr_and_print_in_event(52, undefined, 5, [100]);
    } else {
      await era.printAndWait([
        '虽然大概率赢不了，但是如果能够让 ',
        urara.get_colored_name(),
        ' 在其中学到什么的话或许也未尝不可，所以……',
      ]);
      await urara.say_and_wait([
        '嗯！既然 ',
        callname,
        ' 这么说了，那乌拉拉就一定要去了——',
      ]);
      await grass.say_and_wait(
        '呵呵，这份坚强意志真是了不起，那么两位还请多多加油哦？',
      );

      era.printButton(
        '「嗯？等下，是不是有哪里不对，『两位』是怎么回事？」',
        1,
      );
      await era.input();

      await grass.say_and_wait(
        '因为你刚刚说了『我们一定要挑战看看』嘛，所以我会非常努力为你们加油的。',
      );
      await era.printAndWait([
        '不愧是强大的',
        urara.uma_sex_title,
        '，竟然能面不改色的瞬间脱离包围圈……啊不对！',
        urara.sex,
        '好像是把其他的谁换进去了！',
      ]);
      await urara.say_and_wait([
        '诶？',
        callname,
        ' 竟然要参加',
        urara.uma_sex_title,
        '级的比赛吗？真厉害啊！那么一起加油吧，',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '面对两眼放光的小',
        urara.uma_sex_title,
        '，以及用某种「温柔的眼神」注视着自己的 ',
        grass.get_colored_name(),
        '……',
      ]);
      await era.printAndWait([
        '冷汗直流的 ',
        me.get_colored_name(),
        ' 还是选项放下了妄图狡辩的手，并尽量让自己的表情看起来没那么「不堪重负」。',
      ]);
      await era.printAndWait([
        '而在几天后……怎么说呢，传奇人物认真起来实在惊人，而 ',
        me.get_colored_name(),
        ' 也觉得自己暂时不想再见到任何拉面了……',
      ]);
      sys_change_weight(0, 100);
      sys_change_weight(52, 100);
      flags.wait_flag = get_attr_and_print_in_event(52, undefined, 10, [300]);
      flags.wait_flag = sys_like_chara(11, 52, 100) || flags.wait_flag;
      flags.wait_flag = sys_like_chara(52, 11, 50) || flags.wait_flag;
    }
  };

  handlers.farthest = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (await common_out_check(urara, me, extra_flag.loc, event_object)) {
      return true;
    }
    await print_event_name('绕个远路吧？', urara);
    await era.printAndWait([
      '外出回程的路上，可能因为是玩得太开心了，',
      urara.get_colored_name(),
      ' 看起来有点累，于是你们便决定就近休息。',
    ]);
    await era.printAndWait([
      '坐在附近公园的长椅上，先是花了点时间计划之后要玩什么，随后 ',
      me.get_colored_name(),
      ' 便去附近的自动贩卖机弄了两罐饮料。',
    ]);
    await era.printAndWait([
      '可当 ',
      me.get_colored_name(),
      ' 带着热饮料回到公园时，却发刚才还略有精神的 ',
      urara.get_colored_name(),
      '，现在已经靠在长椅上睡着了。',
    ]);
    await era.printAndWait([
      '抱住 ',
      me.get_colored_name(),
      ' 伸来的手臂，在长椅上缩成一团的小',
      urara.uma_sex_title,
      '一边在梦中轻声细语，一边逐渐侵占着 ',
      me.get_colored_name(),
      ' 的怀抱。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～',
      callname,
      '……一起尝尝吧……这是乌拉拉最喜欢的点心哦……',
    ]);

    era.print([
      urara.get_colored_name(),
      ' 是在作一场美妙的好梦吗？',
      me.get_colored_name(),
      ' 有点犹豫是否该直接叫醒',
      urara.sex,
      '……',
    ]);
    era.printButton('「那……我把乌拉拉的那份也吃掉了哦？」（技能点数+30）', 1);
    era.printButton(
      `不去打扰乌拉拉，直接将睡着的${urara.sex}背回去。（耐力+10）`,
      2,
    );
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '悄悄附在 ',
        urara.get_colored_name(),
        ' 耳边，',
        me.get_colored_name(),
        ' 揉着小',
        urara.uma_sex_title,
        '耳边的绒毛，小声摇晃着',
        urara.sex,
        '的梦乡。',
      ]);
      await urara.say_and_wait(['诶？不可以！不可以独占哦 ', callname, '！']);
      await era.printAndWait([
        '随后因为被 ',
        me.get_colored_name(),
        ' 占有了点心而从梦中惊醒的 ',
        urara.get_colored_name(),
        ' 连尾巴都炸了起来，甚至直接从长椅上飞了下去。',
      ]);
      await era.printAndWait([
        '但在小',
        urara.uma_sex_title,
        '从朦胧中恢复清醒后，一片茫然的樱瞳中却又只有也被吓了一跳的训练员四目相对。',
      ]);
      await urara.say_and_wait('咦？点、点心……啊，难道是……？');

      era.printButton('「没错，乌拉拉就算在梦中的气势也很足哦？」', 1);
      await era.input();

      await urara.say_and_wait([
        '也对哦，',
        callname,
        ' 不会抢乌拉拉的点心呢……不过反正是场好梦，所以没关系啦！',
      ]);
      await urara.say_and_wait([
        '不过，',
        callname,
        '，下次再有机会一起的话，可以和乌拉拉一起吃点心吗？',
      ]);

      era.printButton('「当然没问题啊。」', 1);
      await era.input();

      await era.printAndWait([
        '将手中余温尚存的饮料递给 ',
        urara.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 与说着「约好了哦！」的 ',
        urara.get_colored_name(),
        ' 立下了又一个约定。',
      ]);
      await era.printAndWait([
        '之后在将喝完的饮料罐丢进合适的垃圾桶后，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 便迎着晚霞继续踏上了归途。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, undefined, 30);
    } else {
      await era.printAndWait([
        '慢慢把 ',
        urara.get_colored_name(),
        ' 从自己的怀中挪到背上，',
        me.get_colored_name(),
        ' 尽量以不惊动 ',
        urara.get_colored_name(),
        ' 的动作，小心翼翼地站了起来。',
      ]);
      await urara.say_and_wait(['嗯嗯……？', callname, '……乌拉拉刚才怎么了？']);

      era.printButton('「你醒了？要早点回去休息了，没问题吧？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' 似乎被行走时的颠簸意外惊醒了，但现在的 ',
        me.get_colored_name(),
        ' 当然也不打算把',
        urara.sex,
        '就地放下来。',
      ]);
      await urara.say_and_wait('诶……？原来乌拉拉睡着了……呼……');
      await era.printAndWait([
        '于是在背着小',
        urara.uma_sex_title,
        '继续走出了一段距离后，',
        urara.sex,
        '立刻又回到了刚刚的美梦中。',
      ]);
      await urara.say_and_wait([
        '嘿嘿……很好吃吧……这里还有很多哦……',
        callname,
        ' 是大人哦……不要再害羞了……',
      ]);
      await era.printAndWait(
        '虽然说不好奇是不可能的，这到底是在做什么内容的梦啊……',
      );
      await era.printAndWait([
        '为了不要吵醒',
        urara.sex,
        '，',
        me.get_colored_name(),
        ' 慢慢地走回了宿舍。结果直到抵达宿舍将',
        urara.sex,
        '交给值班同学时，',
        urara.get_colored_name(),
        ' 都没有醒来。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, [0, 10, 0, 0, 0], 0);
    }
  };
};
