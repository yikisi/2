const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { typing } = require('#/event/edu/edu-events-56/snippets');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

module.exports = async () => {
  let temp = 0;
  const callname = sys_get_callname(56, 0),
    me = get_chara_talk(0),
    kitaru = get_chara_talk(58),
    edu_weeks = era.get('cflag:56:育成回合计时'),
    edu_marks = new FukuEventMarks();
  let ret = 0;
  if (edu_weeks === 47 + 1) {
    // 第一年 新年
    await print_event_name('选召之人', kitaru);
    await era.printAndWait('又到了初诣的时候');
    if (era.get('flag:当前声望') >= 500) {
      await era.printAndWait([
        '依据习惯，特雷森学院的训练员往往会和自己负责的赛',
        kitaru.get_uma_sex_title(),
        '一同进行这个仪式。',
      ]);
    } else {
      await era.printAndWait([
        '来自特雷森内部的手册上，清楚无疑的写着，请尽量与自己负责的担当赛',
        kitaru.get_uma_sex_title(),
        '一同进行。',
      ]);
    }
    await era.printAndWait([
      '在事先同 ',
      kitaru.get_colored_name(),
      ' 约定好了行程之后，',
      kitaru.sex,
      '没有向往常那样与 ',
      me.get_colored_name(),
      ' 一同在校园大门前见面之后再前往目的地。',
    ]);
    await era.printAndWait([
      '和先前',
      kitaru.sex,
      '说的一样，原本寂静冷清的神社此刻终于算是有了些人气，三三两两的参拜客们并在一起，谈笑声不断响起。',
    ]);
    await era.printAndWait('此间神社巫女为众人祈福的舞蹈开始了。');
    await era.printAndWait('「咚！」');
    await era.printAndWait([
      me.get_colored_name(),
      '听见鼓声响起，而后是三味线的加入。',
    ]);
    await era.printAndWait([
      '表演开始了，',
      kitaru.get_colored_name(),
      ' 仍不知所踪。',
    ]);
    await era.printAndWait('「哗啦！」');
    await era.printAndWait(
      '然后神乐铃的声音响起，代表着属于此间神社的巫女登场。',
    );
    await era.printAndWait([
      '舞台上的',
      kitaru.get_uma_sex_title(),
      '正随着富有韵律感的音乐翩翩起舞。',
    ]);
    await era.printAndWait(
      '即使是如此寒冷的天气，周围人们的欢呼声也是丝毫不减。',
    );
    await era.printAndWait([
      '一年以来人们积攒的疲惫与劳累，正随着舞台上那橘发金眼的',
      kitaru.get_uma_sex_title(),
      '悄然曼妙的请神舞蹈下悄然脱落，无声无息。',
    ]);
    await era.printAndWait([
      '是啊，所谓',
      kitaru.get_uma_sex_title(),
      '，不正是活着的，现人神之类的生灵吗？',
    ]);
    await era.printAndWait([
      '只不过，',
      me.get_colored_name(),
      ' 是知道那位正翩翩起舞的现人神的身份的。',
    ]);
    await era.printAndWait([
      '那正是迟迟不露面的 ',
      kitaru.get_colored_name(),
      '，随着',
      kitaru.sex,
      '手中神乐铃的摇动，清澈的铃声洁净着周围的环境和祈祷者的心灵。',
    ]);
    await era.printAndWait([
      '平日里一向脱线的',
      kitaru.sex,
      '，居然能露出如此圣严的神态，倒是颇让 ',
      me.get_colored_name(),
      ' 意外的。',
    ]);
    era.drawLine({ content: '待兼福来家的神社 神乐结束后' });
    await era.printAndWait([
      '几乎已是凌晨时分，为了自家神社忙前忙后的 ',
      kitaru.get_colored_name(),
      ' 总算得以有片刻休息。',
    ]);
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '那家伙几乎是一刻不停的跑到了 ',
      me.get_colored_name(),
      ' 的面前，带动着巫女服的振袖一摆一摆的',
    ]);
    await kitaru.say_and_wait([
      '非常非常抱歉！毕竟是难得的，神社里有点人的时候！忘了应该要提前和 ',
      callname,
      ' 说一下的！',
    ]);
    await kitaru.say_and_wait(
      '父亲毕竟是这里的宫司呢，为此我也得好好努力才行！',
    );
    await kitaru.say_and_wait('不过，作为回报……');
    await kitaru.say_and_wait('现在是巫女的单独服务时间哦！');
    era.printButton('「阿福这么说，其他参拜客们不会嫉妒吗？」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '诶诶！',
      callname,
      ' 可是受到了白兴大人选召的人啊！',
    ]);
    await era.printAndWait(
      '两人安静而单调的脚步声，就在神社中响起，最后二人来到了神社的塞钱箱前。',
    );
    await kitaru.say_and_wait(['那么！', callname, ' 的愿望是什么呢！']);
    await kitaru.say_and_wait(
      '现在的我可是灵力的最顶点呢！无论是什么愿望都会实现的！',
    );
    await kitaru.say_and_wait('甚至能听到白兴大人的声音呢！');
    await era.printAndWait([
      '穿着兰花般素白巫女服的 ',
      kitaru.get_colored_name(),
      '，握住了 ',
      me.get_colored_name(),
      ' 的手。',
    ]);
    era.printButton('「那自然是希望阿福能赢下接下来的青叶赏了」', 1);
    await era.input();
    await kitaru.say_and_wait('诶……');
    await kitaru.say_and_wait([callname, ' 的愿望是这个吗？']);
    await kitaru.say_and_wait('我明白了！我会努力的！');
    await kitaru.say_and_wait([
      '那么！',
      callname,
      ' 再见！可以的话！明天也要来哦！',
    ]);
    await era.printAndWait([
      '目送 ',
      me.get_colored_name(),
      ' 离开之后，',
      kitaru.get_colored_name(),
      ' 回去了',
      kitaru.sex,
      '位于神社的居所。',
    ]);
    await era.printAndWait([
      '不过，当 ',
      me.get_colored_name(),
      ' 迈出神社的朱红鸟居之时，心底莫名响起了一道声音。',
    ]);
    await era.printAndWait('而后，周围的世界几乎被纯白所吞没。');
    era.drawLine({ content: '？？？' });
    await typing('选召之人/受选者，你/我们的愿望/旨意是什么？');

    era.println();
    era.printButton('激振的气氛', 1);
    era.printButton('战栗的气息', 2);
    era.printButton('轻微的破绽', 3);
    ret = await era.input();
    era.println();
    if (ret === 1) {
      await kitaru.print_and_wait('五感变得敏锐……');

      get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
    } else if (ret === 2) {
      await kitaru.print_and_wait('轻点脚尖，轻快而又舒适……');

      get_attr_and_print_in_event(56, [30, 0, 0, 0, 0], 0);
    } else {
      await kitaru.print_and_wait('系带解开——窗户外敞——锁像上过油一样转动……');
      get_attr_and_print_in_event(56, undefined, 40);
    }

    era.set('cflag:56:节日事件标记', 0);
    era.println();
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
      ' 回过神来的时候，已经坐上了返回特雷森的末班车。',
    ]);
    //sys_love_uma(56, 3);
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 95 + 1) {
    // 第二年 新年

    await print_event_name('神乐', kitaru);
    await era.printAndWait([
      '和去年不同，今年的 ',
      me.get_colored_name(),
      ' 提前收到了 ',
      kitaru.get_colored_name(),
      ' 的邀请，前往了',
      kitaru.sex,
      '们家的神社。',
    ]);
    await era.printAndWait([
      '此时神社的人数还不算多，',
      me.get_colored_name(),
      ' 踏着石阶，再次跨过了那朱红的鸟居。',
    ]);
    await era.printAndWait([
      '而后与上次一样，由远极近，',
      me.get_colored_name(),
      ' 的世界被纯白所笼罩。',
    ]);
    era.drawLine({ content: '？？？' });
    era.printButton('睁开眼睛', 1);
    let temp;
    await era.input();
    await era.printAndWait([
      '周围空无一切，柔和的白色光束从不同的角度如审视般地照在 ',
      me.get_colored_name(),
      ' 的身上。',
    ]);
    era.printButton('抬起头', 1);
    temp = await era.input();
    await era.printAndWait('纯黑色的倒金字塔，突兀悬于空中。');
    era.println();
    if (check_aim_race(new RaceHistory(56).get(), race_enum.kiku_sho, 1, 1)) {
      await typing(
        '非常好/保持预期，有资格/能力成为' + kitaru.sex + '的协助者/伴侣',
      );
      era.println();
      await typing('你的旨意/愿望是什么？');
    } else {
      await typing('低于预期/响应未达标，协助者/伴侣意料之外');
      era.println();
      await typing('参数/可选项还需要优化/替换');
    }
    era.println();
    era.printButton('昂扬的气氛', 1);
    era.printButton('脉动的气息', 2);
    era.printButton('轻微的裂缝', 3);
    ret = await era.input();
    era.println();
    if (ret === 1) {
      await kitaru.print_and_wait('群情激昂……');

      get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
    } else if (ret === 2) {
      await kitaru.print_and_wait('力量上涌，精神鼓舞……');
      get_attr_and_print_in_event(56, [0, 0, 30, 0, 0], 0);
    } else {
      await kitaru.print_and_wait('云朵分离——墙壁碾动——旧伤作痛……');
      get_attr_and_print_in_event(56, undefined, 30);
    }
    await era.waitAnyKey();
    era.println();
    if (era.get('love:56') < 49) {
      era.set('cflag:56:节日事件标记', 0);
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 回过神来的时候，',
        me.get_colored_name(),
        ' 已经坐上了返回特雷森的末班车。',
      ]);
      return true;
    }
    await kitaru.say_and_wait('喂……');
    await kitaru.say_and_wait('喂……');
    await kitaru.say_and_wait([callname, '！']);
    era.printButton('睁开眼睛', 1);
    await era.input();
    await kitaru.say_and_wait('怎么靠着鸟居睡着了？');
    await kitaru.say_and_wait('小心着凉啊！');
    era.printButton('抬起头', 1);
    await era.input();
    await era.printAndWait([
      '穿着巫女服的 ',
      kitaru.get_colored_name(),
      ' 拉住了 ',
      me.get_colored_name(),
      ' 的手，笑意盈盈，黄昏的阳光在其亮橙色的碎发间起舞',
    ]);
    await era.printAndWait([
      '今年算是暖冬吧，加上赛',
      kitaru.get_uma_sex_title(),
      '本就略高的体温，这巫女服对',
      kitaru.sex,
      '而言可能还偏厚了。',
    ]);
    await era.printAndWait([
      '巫女的洁白上衣配着下身鲜红的百褶裙，白色的长筒袜勾勒出了',
      kitaru.sex,
      '柔美的双腿。',
    ]);
    await era.printAndWait(
      '分离式的宽大振袖在风的吹拂下偶尔摆动，让露出的腋下与雪白的侧乳若隐若现。',
    );
    await era.printAndWait([
      '那将衣物撑起明显小丘的胸部在',
      kitaru.sex,
      '拉扯 ',
      me.get_colored_name(),
      ' 手臂的同时肆意摇晃着。',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '自身的活力与传统服饰带来的庄重，在这名叫 ',
      kitaru.get_colored_name(),
      ' 的',
      kitaru.get_uma_sex_title(),
      '身上完美的交融在一起。',
    ]);
    era.printButton('「好美……」', 1);
    temp = await era.input();
    await kitaru.say_and_wait('欸！');
    await kitaru.say_and_wait(['唔呼呼！', callname, ' 迷上了吗？']);
    await kitaru.say_and_wait('这可是特地为我的命定之人挑选的哦！');
    await kitaru.say_and_wait('那么，请期待着我今晚的神乐吧！');
    era.drawLine({ content: '待兼福来家的神社 大殿前' });
    await era.printAndWait([
      '新年的神社，由于 ',
      kitaru.get_colored_name(),
      ' 这一年来的精彩表现，神社的参拜客数量也不断增多。',
    ]);
    await era.printAndWait(
      '这座因为十几年前的事故而快被众人遗忘的神社，如今又重新焕发出了生机。',
    );
    await era.printAndWait(
      '众人们的喧哗声先是达到了最高潮，随后便如退潮般，慢慢散去。',
    );
    await era.printAndWait(
      '在万籁俱寂的时候，仿佛看准时机一般，远处的太鼓被奏响，神乐正式开始。',
    );
    await era.printAndWait('乐器的合奏恰到好处。');
    await era.printAndWait('太鼓如关西大汉的吼声令人心情澎湃。');
    await era.printAndWait(
      '三味线如月出于东山之上，徘徊于斗牛之间，轻快回旋。',
    );
    await era.printAndWait(
      '巫女摇响的神乐铃声则点缀于其间，澄澈，悠远而空灵。',
    );
    await era.printAndWait([
      '那声音当中，神殿的正中央，正是 ',
      kitaru.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 的担当 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '伴随着旋律，',
      kitaru.sex,
      '于庄严而冷肃的空间中飘飞，月光自天井射下，照在 ',
      kitaru.get_colored_name(),
      ' 饰以清丽淡雅妆容的脸上。',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '挥舞着那把神乐铃，邀请神明与',
      kitaru.sex,
      '共舞。',
    ]);
    await era.printAndWait(
      '一曲毕，台上的现人神立于正中央，向四周的民众们行礼。',
    );
    era.drawLine({ content: '一段时间后' });
    await kitaru.say_and_wait('呼……总算结束了啊！');
    await kitaru.say_and_wait(['多谢 ', callname, ' 今天来帮忙啦！']);
    await era.printAndWait([
      '和上次差不多，',
      me.get_colored_name(),
      ' 们一直忙到了凌晨时分，直到神社再次回到原来寂寥无人的常态。',
    ]);
    await era.printAndWait([
      '不过却也和上次不同……有些疲惫的 ',
      kitaru.get_colored_name(),
      ' 正靠在 ',
      me.get_colored_name(),
      ' 的肩膀上。',
    ]);
    await era.printAndWait([
      '或许是的布料还是有点厚重了，',
      kitaru.get_colored_name(),
      ' 裸露在外的白嫩肌肤上香汗淋漓，微张的唇瓣也吐出热气。',
    ]);
    await era.printAndWait([
      '巫女服勾勒出',
      kitaru.sex,
      '较好的身体曲线，露出的侧乳因为先前的忙碌染上了绯红，随着呼吸起伏着，似乎在诱惑着 ',
      me.get_colored_name(),
      ' 伸手试试触感。',
    ]);
    era.printButton('忍耐', 1);
    era.printButton('搂住待兼福来的腰', 2, {
      disabled: era.get('love:56') < 75,
    });
    /*
      if(era.get('love:56') >= 75){
        era.printButton('（忍不住了）', 2);
      }*/
    temp = await era.input();
    if (temp === 1) {
      era.set('cflag:56:节日事件标记', 0);
      await era.printAndWait([
        '强压下自己的欲望，向 ',
        kitaru.get_colored_name(),
        ' 道别之后，',
        me.get_colored_name(),
        ' 坐上了返回特雷森的车。',
      ]);
      sys_like_chara(56, 0, 5);
      sys_love_uma(56, 3);

      return true;
    } else if (temp === 2) {
      begin_and_init_ero(0, 56);
      await kitaru.say_and_wait(['诶！诶！', callname, '……唔……']);
      await era.printAndWait([
        '俯下身，低头夺走了',
        kitaru.sex,
        '的嘴唇，听着 ',
        kitaru.get_colored_name(),
        ' 从喉咙中挤出的微弱的呻吟。',
      ]);
      await kitaru.say_and_wait('咕……咕……');
      await kitaru.say_and_wait('呼哈……');
      await era.printAndWait([
        '唇舌相互纠缠，被 ',
        me.get_colored_name(),
        ' 抱在怀中的 ',
        kitaru.get_colored_name(),
        ' 难耐似的扭动着身体，些许唾液自',
        kitaru.sex,
        '的嘴角流下，落在神社的石板路上。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '贪婪地将舌头探入',
        kitaru.sex,
        '先前还在为众人献上祷词的口中，迎接 ',
        me.get_colored_name(),
        ' 的是',
        kitaru.sex,
        '并不熟练的回应',
      ]);
      await kitaru.say_and_wait('咿呀……');
      await era.printAndWait('抱在怀里的担当，发出了下流的声音。');
      await era.printAndWait([
        '左手探入了',
        kitaru.sex,
        '的巫女服，轻轻掐着',
        kitaru.sex,
        '乳房的边缘玩弄着。',
      ]);
      await era.printAndWait([
        '接着又整个搭上，感受着小巧的乳肉在 ',
        me.get_colored_name(),
        ' 的揉捏下变成各种形状。',
      ]);
      await kitaru.say_and_wait('哈……哈啊！');
      await era.printAndWait([
        '指尖在柔嫩的乳晕上绕着圈，偶尔用指尖轻点，',
        kitaru.get_colored_name(),
        ' 便会配合发出可爱的叫声。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.breast),
        false,
      );
      await kitaru.say_and_wait('呀啊！');
      await era.printAndWait([
        '舌吻继续，一边将右手抚上了',
        kitaru.sex,
        '的大腿，指肚摩檫起了丝袜的布料，发出低微的嘶嘶声。',
      ]);
      await era.printAndWait([
        '一步一步的，划过',
        kitaru.sex,
        '的大腿，手探入了温暖的裙摆下。',
      ]);
      await era.printAndWait([
        '湿透了，',
        me.get_colored_name(),
        ' 可以感觉得到。',
      ]);
      await era.printAndWait([
        '一划过被濡湿内裤勾勒出的阴阜，',
        kitaru.get_colored_name(),
        ' 便发出了更加淫荡的声音。',
      ]);
      await era.printAndWait([
        '就站在神社石板路的正中间做这种事情，背德感的刺激让 ',
        me.get_colored_name(),
        ' 的欲望进一步高涨。',
      ]);
      await kitaru.say_and_wait('呀，不要……不要在这里……');
      await era.printAndWait([
        '只是',
        kitaru.get_teen_sex_title(),
        '的欲拒还迎罢了，',
        kitaru.get_colored_name(),
        ' 虽是说着不情愿，但是并拢的双腿却微微分开，得以让 ',
        me.get_colored_name(),
        ' 的手进一步探入。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait(
        '手指插入，穴肉自觉的吸附上来，指节在穴腔内活动时发出粘腻的声响。',
      );
      await kitaru.say_and_wait('唔！ ');
      await era.printAndWait([
        '强烈的刺激让 ',
        kitaru.get_colored_name(),
        ' 急促的喘息着，双腿夹紧 ',
        me.get_colored_name(),
        ' 的手臂，如触电般的颤抖着。',
      ]);
      await kitaru.say_and_wait(['呀呜，', callname, '！']);
      era.printButton('「这么舒服吗？」', 1);
      await era.input();
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await kitaru.say_and_wait('不，不知道啊……嗯呀，哈啊……');
      await era.printAndWait(
        '淫液流出，顺着大腿根部一路往下，在白色的长筒袜上勾勒出淫靡的花纹。',
      );
      await kitaru.say_and_wait(['啊，嗯嗯，呀嗯，', callname, '！']);
      await kitaru.say_and_wait('要来了！');
      await kitaru.say_and_wait([
        '去了！',
        me.get_colored_actual_name(),
        '！ ',
      ]);
      await era.printAndWait(
        '在一阵抽搐般的痉挛后，些许爱液还是突破内裤的阻拦涌了出来，神社的石板路上出现了一片明显的水渍。',
      );
      era.printButton('「继续吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('诶……嗯！');
      await era.printAndWait('是时候进行下一步了。');
      await era.printAndWait([
        me.get_colored_name(),
        '将',
        kitaru.sex,
        '抵在了道路旁挂着粗壮注连绳的大树上，这过程中也没有停止玩弄',
        kitaru.sex,
        '，水渍一路从石板路的中央断断续续的来到这树前。',
      ]);
      await era.printAndWait([
        '像是要对折般抬起 ',
        kitaru.get_colored_name(),
        ' 匀称的大腿，将阴茎贴在已经湿透的缝隙处，一口气插了进去。',
      ]);
      era.set('status:56:短效避孕药', 1);
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await kitaru.say_and_wait('哈啊！');
      await era.printAndWait('巫女发出的呻吟声清晰可辨，回荡在无人的神社中。');
      await era.printAndWait([
        '每次抽插，',
        kitaru.get_colored_name(),
        ' 的身体上下移动着。手臂带着宽大的振袖上下翻飞着，如同方才神乐般的舞姿。',
      ]);
      await era.printAndWait([
        '而后又因对快感的祈求而抱紧了 ',
        me.get_colored_name(),
        '，让肉棒得以抽送到更为深处的软肉。',
      ]);
      await kitaru.say_and_wait(['哈……', me.get_colored_actual_name(), '！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 全身无力地勉强抱着渴求着自己的训练员。',
      ]);
      await era.printAndWait('啪！啪！啪！');
      await era.printAndWait('庄严圣洁的神社内，响起淫荡的啪嗒水声。');
      await era.printAndWait(
        '每一次撞击都会带出体内的爱液，浇灌着巫女背靠着的古树。',
      );
      await era.printAndWait([
        '本来还对这场淫祀有所拘谨的 ',
        kitaru.get_colored_name(),
        '，也在 ',
        me.get_colored_name(),
        ' 的逐步进攻下开始纵情的扭动着腰。',
      ]);
      await kitaru.say_and_wait('感觉好舒服！嗯嗯唔……！');
      await era.printAndWait([
        '露天之下的神社内，',
        me.get_colored_name(),
        ' 与 ',
        kitaru.get_colored_name(),
        ' 如野兽般索求着快感。',
      ]);
      await era.printAndWait('神圣的神社当中，却上演着这么秽亵的一幕。');
      await era.printAndWait([
        '或许正是因为这背德的行为，',
        kitaru.get_colored_name(),
        ' 的腔壁是难以想象的紧致。',
      ]);
      await kitaru.say_and_wait('哦哦……！好……舒服……！');
      await era.printAndWait([
        '每一次摩擦着内侧的腔壁，',
        me.get_colored_name(),
        ' 的阴茎都受到极为强烈的刺激。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 似乎也是如此感觉，每一次要抽出腰，腔内的软肉死死的缠着 ',
        me.get_colored_name(),
        ' 的肉棒。',
      ]);
      await kitaru.say_and_wait('嗯啊……要，要去了……！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的背向后弓了过去，蜜穴猛然的紧缩，给 ',
        me.get_colored_name(),
        ' 带来巨量的快感。',
      ]);
      await era.printAndWait('咕哧——咕哧——');
      await era.printAndWait([
        me.get_colored_name(),
        '的肉棒抵着',
        kitaru.sex,
        '的子宫口倾吐起精液，让本就高潮的 ',
        kitaru.get_colored_name(),
        ' 不断地颤抖着。',
      ]);
      era.add('exp:56:阴道高潮次数', 1);
      era.add('exp:0:阴茎高潮次数', 1);
      era.add('exp:0:射精量', 20);
      await kitaru.say_and_wait('唔呃呃呃呃！！！');
      await era.printAndWait(
        '没有抑制自己的呻吟，淫荡的巫女直截了当的叫出声来。',
      );
      await era.printAndWait(
        '爱液自交合处不断溢出，在神圣的古树下积起了一滩充满背德欲望的水洼。',
      );
      await era.printAndWait(
        '失焦的星星瞳向上翻起，香舌吐出，向此间神社的神灵宣告着这场祭祀的结束。',
      );

      end_ero_and_train();
      era.set('cflag:56:节日事件标记', 0);
      await era.waitAnyKey();
      return true;
    }
  } else if (edu_weeks === 144) {
    // 第三年 新年

    await print_event_name('Farewell Matikane……', kitaru);
    await era.printAndWait([
      '也许是最后一次，以 ',
      kitaru.get_colored_name(),
      ' 的训练员这一身份陪',
      kitaru.sex,
      '完成这一次的初诣了。',
    ]);
    await era.printAndWait([
      '怀着这样的心情，',
      me.get_colored_name(),
      ' 再次来到这座偏远神社的鸟居前。',
    ]);
    era.printButton('迈入鸟居', 1);

    await era.input();
    await era.printAndWait(
      '奇怪，并没有以前那种宛如跌落进另一个世界中的错位感。',
    );
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '不过，没等 ',
      me.get_colored_name(),
      ' 细想多久，早早等在参拜道上的 ',
      kitaru.get_colored_name(),
      ' 便把 ',
      me.get_colored_name(),
      ' 拉进了正在准备迎接新年参拜客的神社内。',
    ]);
    era.drawLine();
    await kitaru.say_and_wait('对！对！再往左边挂一点。');
    await kitaru.say_and_wait('啊，哦，欸欸欸！！！');
    await kitaru.say_and_wait([
      '啊！小心啊，',
      sys_get_colored_callname(56, 58),
      ' 同学！',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 正有条不紊的指挥着包括',
      kitaru.get_colored_name(),
      '在内几位邀请来帮忙的同学装点着新年的神社。',
    ]);
    await era.printAndWait(
      '一旁而事先折好的工艺品和等待挂起的灯笼如小山般强调着接下来的工作量会有多大。',
    );
    era.printButton('「能独当一面了呢！」', 1);
    await era.input();
    await era.printAndWait([
      '出言夸赞了一下自己的担当，让站在一旁调度众人的',
      kitaru.get_teen_sex_title(),
      '双耳微不可察的摆动了一下。',
    ]);
    await kitaru.say_and_wait('……嗯。');
    await era.printAndWait([
      '比划了一下高度，',
      kitaru.get_colored_name(),
      ' 示意负责纸灯笼的茶色',
      kitaru.get_uma_sex_title(),
      '继续把挂绳拉高一些。',
    ]);
    await kitaru.say_and_wait(
      '记得小时候和姐姐的初诣的时候，那才是人山人海呢！',
    );
    await kitaru.say_and_wait('为此也一直有在准备就是了，这回应该能够用上吧？');
    await era.printAndWait([
      '在看着茶色头发的',
      kitaru.get_uma_sex_title(),
      '成功把悬于道路上的纸灯笼串起之后，有着温暖发色的',
      kitaru.get_uma_sex_title(),
      '转头等待起 ',
      me.get_colored_name(),
      ' 的答复。',
    ]);
    era.printButton('点头', 1);
    era.printButton('「我相信会的。」', 2);
    await era.input();
    await era.printAndWait([
      '的确如此，在有马纪念上 ',
      kitaru.get_colored_name(),
      ' 的漂亮表现与发言惊艳了全国的观众。',
    ]);
    await era.printAndWait([
      '社交媒体上早就有不少人的发言想要借着新年的参拜来让这位才在有马纪念中取得优胜的',
      kitaru.get_teen_sex_title(),
      '为自己带来好运。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 背后的故事也被一些好事的媒体挖了出来，除了对如此乐天的',
      kitaru.get_teen_sex_title(),
      '居然有着如此沉重过往而感到的反差，更多则是因此而生的感动。',
    ]);
    await me.say_and_wait(['背负命运奔跑的赛', kitaru.get_uma_sex_title()]);
    await era.printAndWait([
      '想到这里，下意识的念出了最近几张赛',
      kitaru.get_uma_sex_title(),
      '期刊上为福来冠上的名号。',
    ]);
    await kitaru.say_and_wait('欸！！！');
    await kitaru.say_and_wait('有些夸张了！');
    await kitaru.say_and_wait([
      '还有什么',
      kitaru.get_teen_sex_title(),
      '和',
      kitaru.sex,
      '的命定之人之类的花边新闻……',
    ]);
    await era.printAndWait([
      '不知是因为 ',
      me.get_colored_name(),
      ' 提及的那个过于浮夸的称号，还是后面随之想到的一些半真半假的绯闻，原本气定神闲指挥着众人的 ',
      kitaru.get_colored_name(),
      ' 脸上多了几分绯红。',
    ]);
    await kitaru.say_and_wait('不过，命运啊……我真是被困扰了好久呢！');
    await kitaru.say_and_wait('而且我想……我也已经准备好了……');
    era.printButton('「准备好什么了？」', 1);

    await era.input();
    await kitaru.say_and_wait([
      '那个，',
      callname,
      '，明天陪我再去一躺市郊的墓地吧。',
    ]);
    await era.printAndWait([
      '暂时按下了自己好奇的心情，',
      me.get_colored_name(),
      ' 开始在福来的指挥下加入了为新年的神社做起准备的队伍中。',
    ]);
    era.drawLine({ content: '次日 市郊墓园' });
    await era.printAndWait([
      '同样的柏树下，墓碑旁，名叫',
      me.get_colored_actual_name(),
      '的训练员身旁站着一位橙色',
      kitaru.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '前一天晚上的祓禊仪式，果然如 ',
      me.get_colored_name(),
      ' 预料般的那样，前来的参拜客举袖为云。',
    ]);
    await era.printAndWait([
      '光是焚烧那些客人们带来的御守，熊手等开运道具，便让 ',
      kitaru.get_colored_name(),
      '，还有',
      kitaru.sex,
      '请来的临时巫女忙到了半夜。',
    ]);
    await era.printAndWait([
      '记得自己的承诺，',
      kitaru.get_colored_name(),
      ' 还是起了一个大早，稀疏纤细的尘埃在冬日的阳光中漂浮游动，大理石制的墓碑如玻璃般闪耀。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '注意到',
      kitaru.get_teen_sex_title(),
      '只是呆立在墓碑前，一言不发。',
    ]);
    await me.say_and_wait('需要留你一个人静静吗？');
    await era.printAndWait([
      me.get_colored_name(),
      '再次问出了这个问题，一如第一次被 ',
      kitaru.get_colored_name(),
      ' 带到此处一样。',
    ]);
    await kitaru.say_and_wait([
      '不，不用了，',
      me.actual_name[0],
      '……',
      me.get_colored_full_name(),
      '，陪我一会儿吧……',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 发出了哽咽，并非平常那种若无其事的淡然。',
    ]);
    await kitaru.say_and_wait('……还记得我昨天说的准备好了吗。');
    await kitaru.say_and_wait(
      '笑容，奔跑的执念，最开始的跑步技巧，运营神社的知识，姐姐教给我了许多。',
    );
    await kitaru.say_and_wait(
      '倘若灵魂存在的话，把我自己的躯壳献给姐姐也不是什么不可以的事情！',
    );
    await era.printAndWait([
      '几乎是低吼着说出这番话的 ',
      kitaru.get_colored_name(),
      '，望着姐姐的黑白照片，三年来变得成熟了许多的侧脸几乎和照片中的',
      kitaru.get_uma_sex_title(),
      '无异。',
    ]);
    await kitaru.say_and_wait([
      '但是，姐姐肯定不会愿意，以及……',
      callname,
      ' 也不会愿意的吧。',
    ]);
    await kitaru.say_and_wait('……准备好，让姐姐离开了！');
    await kitaru.say_and_wait(
      '但这并不是遗忘，而是告别……我，我准备好跑出属于自己的命运了！',
    );
    await kitaru.say_and_wait([
      '我站在这里，',
      callname,
      ' 站在身旁看着我，就像是阳光洒在我的脸上……',
    ]);
    await kitaru.say_and_wait('姐姐，我现在很幸福呢……');
    await era.printAndWait(
      '阵风拂来，树叶的沙沙响声悠扬空灵，如同福来昨晚奏响的神乐……',
    );
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 101) {
    // 第二年 情人节
    await print_event_name('圣瓦伦汀的局外人', kitaru);
    await era.printAndWait(
      '圣瓦伦汀之日的特雷森学院，一如既往的被微妙的桃色氛围所笼罩。',
    );
    await era.printAndWait([
      '空气如饱含汁水般甜蜜，充斥巧克力的甜腻味道与赛',
      kitaru.get_uma_sex_title(),
      '们不自觉散发出的荷尔蒙味道。',
    ]);
    await era.printAndWait(
      '而情人节的主角自然是各位训练员了，这似乎成为了校内，乃至社会上的约定俗成。',
    );
    era.printButton('「真是奇怪。」', 1);
    temp = await era.input();
    if (sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 2) {
      await era.printAndWait([
        '今天一天品尝了不少担当送 ',
        me.get_colored_name(),
        ' 的巧克力，也有可能是担当本身。',
      ]);
      await era.printAndWait([
        '然而 ',
        kitaru.get_colored_name(),
        ' 还是没有出现。',
      ]);
    } else {
      await era.printAndWait([
        '不过，',
        me.get_colored_name(),
        ' 似乎是那个例外。',
      ]);
      await era.printAndWait([
        '今天一天没见到 ',
        kitaru.get_colored_name(),
        '。',
      ]);
    }

    if (era.get('love:56') >= 75) {
      await era.printAndWait([
        '一直等到了晚上，也没有收到任何来自 ',
        kitaru.get_colored_name(),
        ' 的消息。',
      ]);
      await era.printAndWait([
        '短信……没有消息，电话……也没有接通，',
        me.get_colored_name(),
        ' 甚至询问了',
        kitaru.sex,
        '的舍友，',
        kitaru.sex,
        '并没有向舍友透露自己今天的行程。',
      ]);
      await era.printAndWait('有些失落的回到了家中。');
      era.set('flag:当前位置', location_enum.home);
      era.drawLine({ content: me.name + '的自宅' });
      await era.printAndWait(
        '靠在沙发上，静看电子钟的数位屏显示的时间愈发逼近0点。',
      );
      await era.printAndWait([
        '有些失望……当 ',
        me.get_colored_name(),
        ' 无意间扫过几件 ',
        kitaru.get_colored_name(),
        ' 送给 ',
        me.get_colored_name(),
        ' 的开运物品时，',
        me.get_colored_name(),
        ' 如此想着。',
      ]);
      era.printButton('聆听检定', 1);
      await era.input();
      era.println();
      let result = get_random_value(65, 90);
      if (result > 60) {
        await era.printAndWait([
          '出目:' + result + '/？？' + '\n ',
          me.get_colored_name(),
          ' 的聆听检定: 失败',
        ]);
        await era.printAndWait('没听见什么，天气倒是让人昏昏欲睡。');
      }
      await era.printAndWait([
        '就当 ',
        me.get_colored_name(),
        ' 要在沙发上沉沉睡去时，窗户那边似乎有插销声响起，而后……',
      ]);
      await kitaru.say_and_wait('呼啊！');
      await era.printAndWait('眼前出现了一抹熟悉的栗色身影。');
      await era.printAndWait([
        '不知何时，',
        kitaru.get_colored_name(),
        ' 出现在了 ',
        me.get_colored_name(),
        ' 的面前，而更令 ',
        me.get_colored_name(),
        ' 感到躁动的则是',
        kitaru.sex,
        '糟糕的姿势。',
      ]);
      await era.printAndWait([
        '橘色头发的',
        kitaru.get_teen_sex_title(),
        '正骑在 ',
        me.get_colored_name(),
        ' 的腰间，',
        me.get_colored_name(),
        ' 能察觉到',
        kitaru.sex,
        '被裙子遮住的臀部摩擦 ',
        me.get_colored_name(),
        ' 裤子布料的声音。',
      ]);
      await era.printAndWait([
        '应该只是 ',
        kitaru.get_colored_name(),
        ' 一贯的无距离感行为吧？',
      ]);
      await kitaru.say_and_wait([callname, '，情人节快乐！']);
      await era.printAndWait(
        '声音带着剧烈运动之后特有的一丝疲倦，刚刚说出那番话的时也是气喘吁吁的，看来是一路跑过来的。',
      );
      await era.printAndWait([
        '而校服上，甚至于是',
        kitaru.sex,
        '橘黄色的头发上也沾了不少的棕色污渍，从',
        kitaru.sex,
        '身上那股浓郁的香气来看，应该在制作过程中不小心撒上去的巧克力。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        '从背后拿出了一个带着折皱的礼盒，放在了 ',
        me.get_colored_name(),
        ' 的胸口上。',
      ]);
      await kitaru.say_and_wait('请看！');
      await kitaru.say_and_wait('这是我花了一天时间为你摘下来的星星哦！');
      await era.printAndWait(
        '打开了礼盒，里面是整整十二个象征着星座的巧克力，份量对于一个人来说无论如何都有些过多了。',
      );
      era.printButton('「要我一个人吃完吗？」', 1);
      temp = await era.input();
      await kitaru.say_and_wait(
        '不行啦～这种东西就是要只吃自己的星座才会有趣啊！',
      );
      await kitaru.say_and_wait('你看，我是双子座的。');
      await kitaru.say_and_wait('北河二和北河三加起来刚好是其他的两倍大呢！');
      await kitaru.say_and_wait('唔……果然，第一次做，份量把握的不太好……');
      await kitaru.say_and_wait('好在及时赶上了，差点就错过了今天的情人节呢！');
      era.printButton('「辛苦了！」', 1);
      temp = await era.input();
      await kitaru.say_and_wait('就是说啊……所以呢！');
      await kitaru.say_and_wait('那个～我想拜托你一件事情！');
      await kitaru.say_and_wait('如果你不介意的话，可以两个人一起吃它吗？');
      await kitaru.say_and_wait('就是……感情很好的各吃一半这样。');
      await era.printAndWait([
        '随着话语愈发向着不符合师生关系的情况发展，',
        kitaru.get_colored_name(),
        ' 的面色也愈发的绯红起来。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '看着那盒摊开放在 ',
        me.get_colored_name(),
        ' 胸口的巧克力，一丝欲望自心底升起。',
      ]);
      era.printButton('「想要奖励吗？」', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('只是吃下巧克力', 2);
      temp = await era.input();
      if (temp === 1) {
        await kitaru.say_and_wait('欸！？');
        await era.printAndWait([
          '这么询问着，右手则捏住了',
          kitaru.sex,
          '腰侧的软肉。',
        ]);
        await era.printAndWait([
          '后知后觉的意识到了自己此时的姿势和所谓的骑乘位没什么两样，',
          kitaru.get_teen_sex_title(),
          '的面色更加的红润，尾巴有意无意地拍了几下 ',
          me.get_colored_name(),
          ' 的腿。',
        ]);
        await era.printAndWait('随后是细若蚊鸣的回应传来。');
        await kitaru.say_and_wait('……想');
        era.printButton('「大点声哦！？」', 1);
        await era.input();
        await kitaru.say_and_wait('唔……巧克力还没吃呢……');
        await era.printAndWait([
          '听到回答，',
          me.get_colored_name(),
          ' 松开右手。',
        ]);
        await era.printAndWait('啪！');
        await kitaru.say_and_wait('咿呀！');
        await era.printAndWait([
          me.get_colored_name(),
          '的手指拢齐，并作成手掌，以不轻不重的力道，极快地在',
          kitaru.get_teen_sex_title(),
          '挺翘的臀部上打了一下。',
        ]);
        await era.printAndWait('随着洁白臀肉的抖动，酥麻的快感传递开来。');
        await era.printAndWait([
          '接下来，趁着',
          kitaru.get_teen_sex_title(),
          '分神的瞬间，',
          me.get_colored_name(),
          ' 伸出双手，和骑在自己身上的',
          kitaru.get_teen_sex_title(),
          '的双手相扣。',
        ]);
        era.printButton('「那你喂我。」', 1);
        await era.input();
        await kitaru.say_and_wait('欸！可是……');
        await era.printAndWait([
          kitaru.get_teen_sex_title(),
          '柔若无骨的双手被 ',
          me.get_colored_name(),
          ' 握着，自然是没有办法用手喂 ',
          me.get_colored_name(),
          ' 的。',
        ]);
        await kitaru.say_and_wait('我明白了……');
        await era.printAndWait('毕竟是占卜师，悟性自然是不差的。');
        await era.printAndWait([
          kitaru.sex,
          '像一只可爱的小狗狗一样，缓缓的俯下身子。',
        ]);
        await era.printAndWait([
          '衔起了一块巧克力，抿紧嘴唇轻轻的送到了 ',
          me.get_colored_name(),
          ' 的嘴边。',
        ]);
        await era.printAndWait('咔嚓。');
        await era.printAndWait(
          '巧克力被从中间分开，如先前所说的一样二人各吃一块。',
        );
        await era.printAndWait([
          '碎屑落在了 ',
          me.get_colored_name(),
          ' 的身上，又被',
          kitaru.get_teen_sex_title(),
          '小心地用舌尖拭去。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的脸上布满了娇艳欲滴的绯红，有不少顺着纤细的脖颈蔓延，将挺拔的锁骨都涂满了颜色。',
        ]);
        await era.printAndWait([
          '本来处于半躺状态的 ',
          me.get_colored_name(),
          ' 趁着',
          kitaru.get_teen_sex_title(),
          '对付巧克力的分神，坐了起来。',
        ]);
        await kitaru.say_and_wait('咕！');
        await era.printAndWait([
          '撬开了 ',
          kitaru.get_colored_name(),
          ' 的口腔，半融化的巧克力液随着舌头一起挺入',
          kitaru.sex,
          '的口腔。',
        ]);
        await kitaru.say_and_wait('唔哈……');
        await era.printAndWait([
          '舌头在',
          kitaru.sex,
          '的口腔中游走，将巧克力的味道和',
          kitaru.get_teen_sex_title(),
          '的唾液混合在一起，在搅动间发出浓稠的淫靡声响。',
        ]);
        await kitaru.say_and_wait('咕……');
        await era.printAndWait([
          '先是北河二，再是北河三，象征着 ',
          kitaru.get_colored_name(),
          ' 的两块巧克力就这样化作混着双方唾液的液体进入二人腹中。',
        ]);
        await era.printAndWait([
          '而身前已经在方才可可味的激吻中被 ',
          me.get_colored_name(),
          ' 弄到有些失神的 ',
          kitaru.get_colored_name(),
          '，正满足地喘息着。',
        ]);
        await era.printAndWait(
          '时不时吐出来的小舌头上还粘着些许融化的巧克力，黑色与粉色互相交叠。',
        );
        await kitaru.say_and_wait([callname, '……想要！']);
        await quick_into_sex(56);
      } else if (temp === 2) {
        await era.printAndWait([
          '不能辜负 ',
          kitaru.get_colored_name(),
          ' 的好心。',
        ]);
        await era.printAndWait([me.get_colored_name(), '认真的吃起了巧克力。']);
        sys_change_attr_and_print(0, '体力', 300);
        sys_change_attr_and_print(56, '体力', 300);
      }
    } else if (era.get('love:56') < 75) {
      await era.printAndWait([
        '直到晚上，接到了来自 ',
        kitaru.get_colored_name(),
        ' 的电话。',
      ]);
      await kitaru.say_and_wait('那个，能在学校附近的公园见一面吗？');
      era.drawLine({ content: '公园' });
      await era.printAndWait([
        '等了好一会儿，才看到从入口处匆忙跑过来的 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait(['啊！', callname, '，不好了！不好了！']);
      await era.printAndWait([
        me.get_colored_name(),
        '见着橘色头发的',
        kitaru.get_teen_sex_title(),
        '焦急的向 ',
        me.get_colored_name(),
        ' 跑过来。',
      ]);
      await era.printAndWait([
        '校服上沾了不少的棕色污渍，细闻可以感受到',
        kitaru.sex,
        '身上沾染着的浓郁巧克力香气。',
      ]);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await kitaru.say_and_wait('因为星星实在太多，星座们全都掉出来了呢！');
      await kitaru.say_and_wait('你看！');
      await era.printAndWait([
        kitaru.sex,
        '把藏在背后的礼盒向 ',
        me.get_colored_name(),
        ' 递上。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '配合的露出了惊喜的表情。',
      ]);
      era.printButton('接过礼盒', 1);
      await era.input();
      await kitaru.say_and_wait('开玩笑的啦！');
      await kitaru.say_and_wait('这是我费劲心思制作的十二星座巧克力。');
      await kitaru.say_and_wait('今天可是情人节啊！');
      await kitaru.say_and_wait('身为喜欢占卜的人，自然要认真的过节才行！');
      await era.printAndWait([
        '在',
        kitaru.sex,
        '热切的目光下，',
        me.get_colored_name(),
        ' 打开了礼盒。',
      ]);
      await era.printAndWait([
        '整整十二个象征着星座的巧克力，尽管做工有些粗糙，但',
        kitaru.get_teen_sex_title(),
        '的心意确实的蕴含在其中，除了份量对于一个人来说无论如何都有些过多了。',
      ]);
      era.printButton('「要我一个人吃完吗？」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '不行啦～这种东西就是要只吃自己的星座才会有趣啊！',
      );
      await kitaru.say_and_wait('你看，我是双子座的。');
      await kitaru.say_and_wait('北河二和北河三加起来刚好是其他的两倍大呢！');
      await kitaru.say_and_wait('唔……果然，第一次做，份量把握的不太好……');
      await kitaru.say_and_wait('好在及时赶上了，差点就错过了今天的情人节呢！');
      era.printButton('「辛苦了！」', 1);
      await era.input();
      await kitaru.say_and_wait('就是说啊……所以呢！');
      await kitaru.say_and_wait('那个～我想拜托你一件事情！');
      await kitaru.say_and_wait('如果你不介意的话，可以两个人一起吃它吗？');
      await era.printAndWait([
        '指了指盒中看起来有些粗糙的手工巧克力，',
        kitaru.get_teen_sex_title(),
        '的脸颊有些若有若无的绯红。',
      ]);
      await kitaru.say_and_wait('就是……感情很好的各吃一半这样。');
      await era.printAndWait([
        '似乎是无自觉的说出了似乎有些不符合师生关系的发言，',
        kitaru.get_colored_name(),
        ' 双手合十的看着 ',
        me.get_colored_name(),
        '。',
      ]);
      era.printButton('点头', 1);
      await era.input();
      await era.printAndWait([
        '之后和 ',
        kitaru.get_colored_name(),
        ' 一起食用了巧克力，',
      ]);
      sys_change_attr_and_print(0, '体力', 300);
      sys_change_attr_and_print(56, '体力', 300);
      await kitaru.say_and_wait('呼啊！比想象中还要甜呢！');
      await kitaru.say_and_wait([callname, '，祝你情人节快乐！']);
    }

    era.set('cflag:56:节日事件标记', 0);
    await era.waitAnyKey();

    return true;
  } else if (edu_weeks === 109) {
    //粉丝感谢祭

    await print_event_name(
      ['背负众人愿望的', kitaru.get_teen_sex_title()],
      kitaru,
    );
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 在先前采访上的糟糕表现，引来了不少媒体的抨击。',
    ]);
    await kitaru.say_and_wait(['唔啊！', callname, '。真的没有问题吗？']);
    await kitaru.say_and_wait('那个，我记得那些报纸上都说我……');
    await me.say_and_wait([
      '……',
      kitaru.get_colored_name(),
      ' 的表现实在让人看不下去……',
    ]);
    await me.say_and_wait(['……缺乏运动员的骄傲与回应粉丝的精神……']);
    await me.say_and_wait(['……并不热爱比赛……']);
    await kitaru.say_and_wait('啊！没必要说出来吧！');
    await kitaru.say_and_wait('不过……算了，毕竟我就是那样没错。');
    await kitaru.say_and_wait('真的，很刺耳……刺耳到感觉耳朵快掉下来了。');
    await kitaru.say_and_wait('怕是我一上场，就会吃到鸡蛋雨吧……');
    era.printButton('「好了，该上场了！」', 1);
    await era.input();
    era.printButton('「相信我，不会有问题的！」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '在先前的调查中发现，社交媒体上，',
      kitaru.get_colored_name(),
      ' 的粉丝们并没有因为',
      kitaru.sex,
      '在采访上的表现而放弃',
      kitaru.sex,
      '。',
    ]);
    await era.printAndWait([
      '反而是在',
      kitaru.sex,
      '的粉丝群中，有一些人在 ',
      me.get_colored_name(),
      ' 的引导下，开始为',
      kitaru.sex,
      '的参赛资格投票。',
    ]);
    await kitaru.say_and_wait(['唔！如果 ', callname, ' 你这么说的话……']);
    await kitaru.say_and_wait(
      '总之！如果我在粉丝的骂声中去往了天国，我的水晶球就交给你了！',
    );
    await era.printAndWait([
      '带着几分踏上刑场的悲壮，',
      kitaru.get_colored_name(),
      ' 向前走去。',
    ]);
    era.drawLine({ content: '一段时间后' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 正站在饰以URA徽记的采访背景墙前。',
    ]);
    await say_by_passer_by_and_wait('女主持人', [
      kitaru.get_colored_name(),
      ' ',
      kitaru.get_adult_sex_title(),
      '，你愿意告诉我们你春季的目标吗？',
    ]);
    await kitaru.say_and_wait('咕啊！上来就问这种问题吗？');
    await era.printAndWait([
      '虽然早就预料到了 ',
      kitaru.get_colored_name(),
      ' 会有这样的反应，',
      me.get_colored_name(),
      ' 还是无奈地扶了扶额。',
    ]);
    await era.printAndWait([
      '从先前自己私下调查的情况来看，',
      kitaru.get_colored_name(),
      ' 的粉丝并没有因为',
      kitaru.sex,
      '在采访上的表现而放弃',
      kitaru.sex,
      '。',
    ]);
    era.printButton('「你就说给他们听吧。」', 1);
    await era.input();
    await era.printAndWait([
      '将手放在',
      kitaru.get_teen_sex_title(),
      '的肩膀上，稍稍用力将还在不断抗拒的',
      kitaru.sex,
      '推到了主持人的话筒前。',
    ]);
    await kitaru.say_and_wait('唔！确定嘛……好吧。');
    await kitaru.say_and_wait('各位，本人在这个春季的目标！');
    await kitaru.say_and_wait('与其说是目标，不如说是梦想吧——！');
    await kitaru.say_and_wait('是参加宝冢纪念！');
    await era.printAndWait([
      '似乎是自己都没察觉到会这么顺利的说出来，',
      kitaru.get_colored_name(),
      ' 的脸上先是惊讶，而后如等待审判般的低了下头。',
    ]);
    await kitaru.say_and_wait('咦？');
    era.printButton('鼓掌', 1);
    await era.input();
    await era.printAndWait('台下响起了一阵掌声。');
    await kitaru.say_and_wait('鼓掌？为什么呢？');
    await era.printAndWait('粉丝A:「加油啊！待兼福来！」');
    await era.printAndWait('粉丝B:「我会去帮你投票的！一定要出赛啊！」');
    await kitaru.say_and_wait('大家是怎么了？明明那次的采访那么糟糕……');
    await era.printAndWait(
      '粉丝A「啊！实在是太惨了呢，不过这就是待兼福来呀。」',
    );
    await era.printAndWait(
      '粉丝B「人偶尔也是会迷惘的嘛，该说会有种亲切感吗？」',
    );
    await kitaru.say_and_wait('亲切感……所以大家还没有放弃我吗？');
    await era.printAndWait(
      '粉丝C:「才不会放弃你呢！在菊花赏上的表现那么拼命，真是令人难忘！」',
    );
    await era.printAndWait('粉丝D「是啊！宝冢纪念一定要加油啊！」');
    await kitaru.say_and_wait('是的……是的……！');
    await kitaru.say_and_wait('我会再挑战一次看看的！');
    await era.printAndWait([
      '就算遭到了神明的舍弃，也会被粉丝们捡回来，在投票结果公布后，',
      kitaru.get_colored_name(),
      ' 勉强获得了宝冢纪念的参赛资格。',
    ]);
    era.set('cflag:56:节日事件标记', 0);
    edu_marks.fans_thank++;
    await era.printAndWait([kitaru.get_colored_name(), ' 失去了运势依赖。']);

    era.set('status:56:运势依赖', 0);
    era.set('status:56:大吉', 0);
    era.set('status:56:中吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:凶', 0);
    return true;
  } else if (edu_weeks === 143) {
    //圣诞节 差分，分为有马纪念胜利与未胜利。
    if (edu_marks.begin_race_end < 10) {
      await print_event_name('摘下胜利之星', kitaru);
      era.drawLine({ content: me.name + ' 的办公室' });
      await era.printAndWait(
        '距离有马纪念只剩下几天，不过在那之前，率先到来的是同样是一年一度的圣诞节。',
      );
      await era.printAndWait(
        '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
      );
      await era.printAndWait([
        '还在研究着有马纪念战术的 ',
        me.get_colored_name(),
        ' 听见窗户传来声响。',
      ]);
      await kitaru.say_and_wait('嘿！');
      await era.printAndWait([
        '循着声音的方向看了过去。',
        me.get_colored_name(),
        ' 那令人不省心的担当正背着一个大布袋，正尝试通过窗户挤进屋内。',
      ]);
      await era.printAndWait([
        '那包不知道是什么的东西突然被狭窄的窗户卡住，直到在',
        kitaru.get_uma_sex_title(),
        '的怪力下逐渐变形。',
      ]);
      await kitaru.say_and_wait('哎呀！');
      await era.printAndWait(
        '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
      );
      await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
      await kitaru.say_and_wait('当当！待兼圣诞来！');
      await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
      era.printButton('「没事吧？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！没事的！');
      await kitaru.say_and_wait([
        '哦，对了对了，有个东西要给 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '在洒在地上的物品中一阵翻找后，',
        kitaru.get_colored_name(),
        ' 拿起了一个包装意外精美的盒子。',
      ]);
      await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
      await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
      await era.printAndWait(
        '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
      );
      await kitaru.say_and_wait('欸！怎么会！');
      await kitaru.say_and_wait([
        '呼……如果这样的话，就只能麻烦 ',
        callname,
        ' 陪我出门一趟了。',
      ]);
      era.drawLine({ content: '特雷森校园 天台' });
      await era.printAndWait([
        '来到了和 ',
        kitaru.get_colored_name(),
        ' 常去的天台，冬季的寒风吹着 ',
        me.get_colored_name(),
        ' 有些发抖，不过',
        kitaru.sex,
        '却是一点都不在意。',
      ]);
      await kitaru.say_and_wait([
        '好了！',
        callname,
        '，请把手中的圣诞树对着天空举起来吧！',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
      ]);
      await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
      await kitaru.say_and_wait('好浪漫喔！');
      era.printButton('「比较想要实体的星星。」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！天上的星星也不行吗？');
      await era.printAndWait([
        '在听到这句话的同时，橘发的',
        kitaru.get_teen_sex_title(),
        '顿时低下了头。',
      ]);
      era.printButton('「用有马纪念的胜利之星来装饰吧！」', 1);
      await era.input();
      await kitaru.say_and_wait('喔！有马纪念！');
      await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
      era.printButton('「那就这么说定了？」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！……是，是的……我什么都答应。！');
      await kitaru.say_and_wait([
        '那个，今天的 ',
        callname,
        ' 真的好有魄力啊！',
      ]);
      await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
      ]);
      await era.printAndWait([
        '不过眼看着有马纪念就要到了，',
        me.get_colored_name(),
        ' 还是压下了自己逐渐膨胀的欲望。',
      ]);
      await era.printAndWait([
        '还没有星星可以装在圣诞树的顶端，和 ',
        kitaru.get_colored_name(),
        ' 一起去拿下最后的星星吧。',
      ]);
      await era.printAndWait('要是有马纪念之后再来庆祝圣诞节或许会比较好吧。');
      //  era.set('cflag:56:节日事件标记', 0);
      //
    } else if (
      edu_marks.begin_race_end === 10 &&
      check_aim_race(new RaceHistory(56).get(), race_enum.arim_kin, 2, 1)
    ) {
      // 差分，分为有马纪念未进行
      await print_event_name('名叫待兼福来的星星', kitaru);
      era.drawLine({ content: me.name + ' 的办公室' });
      await era.printAndWait([
        '有马纪念结束了，不过在和 ',
        kitaru.get_colored_name(),
        ' 的契约结束之前，率先到来的是同样是一年一度的圣诞节。',
      ]);
      await era.printAndWait(
        '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
      );
      await era.printAndWait([
        '还在办公室忙碌着年终报告的 ',
        me.get_colored_name(),
        ' 听见窗户传来声响。',
      ]);
      await kitaru.say_and_wait('嘿！');
      await era.printAndWait([
        '循着声音的方向看了过去，',
        kitaru.get_colored_name(),
        ' 正背着一个大布袋，正尝试通过窗户挤进屋内。',
      ]);
      await era.printAndWait([
        '那包不知道是什么的东西被狭窄的窗户卡住，直到在',
        kitaru.get_uma_sex_title(),
        '的怪力下逐渐变形。',
      ]);
      await kitaru.say_and_wait('哎呀！');
      await era.printAndWait(
        '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
      );
      await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
      await kitaru.say_and_wait('当当！待兼圣诞来！');
      await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
      era.printButton('「没事吧？」', 1);
      temp = await era.input();
      await kitaru.say_and_wait('欸！没事的！');
      await kitaru.say_and_wait([
        '哦，对了对了，有个东西要给 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '在洒在地上的物品中一阵翻找后，',
        kitaru.get_colored_name(),
        ' 拿起了一个包装意外精美的盒子。',
      ]);
      await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
      await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
      await era.printAndWait(
        '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
      );
      await kitaru.say_and_wait('欸！怎么会！');
      await kitaru.say_and_wait([
        '呼……如果这样的话，就只能麻烦 ',
        callname,
        ' 陪我出门一趟了。',
      ]);
      era.drawLine({ content: '特雷森校园 天台' });
      await era.printAndWait([
        '来到了和 ',
        kitaru.get_colored_name(),
        ' 常去的天台，冬季的寒风吹着 ',
        me.get_colored_name(),
        ' 有些发抖，不过 ',
        kitaru.get_colored_name(),
        ' 却是一点都不在意。',
      ]);
      await kitaru.say_and_wait([
        '好了！',
        callname,
        '，请把手中的圣诞树对着天空举起来吧！',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
      ]);
      await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
      await kitaru.say_and_wait('好浪漫喔！');
      if (era.get('love:56') < 75) {
        await era.printAndWait([
          '庆祝一阵后，和 ',
          kitaru.get_colored_name(),
          ' 回去了。',
        ]);
        era.set('cflag:56:节日事件标记', 0);
        return true;
      }

      era.printButton('「比较想要实体的星星。」', 1);
      temp = await era.input();
      await kitaru.say_and_wait('欸！天上的星星也不行吗？');
      await era.printAndWait([
        '在听到这句话的同时，橘发的',
        kitaru.get_teen_sex_title(),
        '顿时低下了头。',
      ]);
      era.printButton('「比如……名叫待兼福来的星星就不错呢！」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！我吗？');
      await era.printAndWait([
        '被叫到名字',
        kitaru.get_teen_sex_title(),
        '转过头来看着 ',
        me.get_colored_name(),
        '，十字星状的瞳孔中闪烁着北极星般的明亮光芒。',
      ]);
      await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
      await kitaru.say_and_wait([
        '那个，今天的 ',
        callname,
        ' 真的好有魄力啊！',
      ]);
      await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
      ]);
      await era.printAndWait([
        '下意识的伸出手，只是搭在 ',
        kitaru.get_colored_name(),
        ' 的身上，对',
        kitaru.sex,
        '的身体早就知根知底的 ',
        me.get_colored_name(),
        ' 便发现了',
        kitaru.sex,
        '即使是对',
        kitaru.get_uma_sex_title(),
        '而言也有些略高的体温。',
      ]);
      await era.printAndWait('先是隔着校服抚摸着肩膀。');
      await kitaru.say_and_wait('……欸。');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '顺势滑下后轻捏两下乳房，',
        kitaru.get_colored_name(),
        ' 便配合的发出了一声轻微的呻吟。',
      ]);
      await kitaru.say_and_wait('呜……');
      await kitaru.say_and_wait('那里很敏感的……', true);
      await era.printAndWait([
        '继续往下，指腹划过腰间，明明隔着冬季的厚重校服，',
        kitaru.get_colored_name(),
        ' 却像是被电到了般颤抖起来。',
      ]);
      await kitaru.say_and_wait('……哈。');
      await kitaru.say_and_wait('好久没有被命定之人这样触摸了啊……', true);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的吐息变得更加湿润而荡漾。',
      ]);
      await era.printAndWait([
        '眼前，清秀的面颊完全被赤色红潮浸染，双眼眸光流转、泪水盈盈的福来对 ',
        me.get_colored_name(),
        ' 投来了期待的目光。',
      ]);
      await kitaru.say_and_wait('好想要……', true);
      era.printButton('一言不发的回去', 1);
      era.printButton('抱起待兼福来', 2);
      temp = await era.input();

      if (temp === 1) {
        await era.printAndWait([
          '没有理会不知道在期待着什么的 ',
          kitaru.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 转身离开了天台。',
        ]);
        era.set('cflag:56:节日事件标记', 0);
        return true;
      }

      begin_and_init_ero(0, 56);
      era.set('status:56:短效避孕药', 1);
      await era.printAndWait([
        '为了应对有马纪念，',
        kitaru.get_colored_name(),
        ' 与 ',
        me.get_colored_name(),
        ' 早就禁欲了许久。',
      ]);
      await era.printAndWait(
        '而如果用一场酣畅淋漓的性爱来作为奖励的话，或许是个不错的选择。',
      );
      await kitaru.say_and_wait('欸啊！');
      await era.printAndWait([
        '用公主抱的姿势把双腿发软的 ',
        kitaru.get_colored_name(),
        ' 抱在怀中，福来纤细的藕臂搂住了 ',
        me.get_colored_name(),
        ' 的脖子。',
      ]);
      await kitaru.say_and_wait([callname, ' 的气味……'], true);
      await kitaru.say_and_wait('好热……', true);
      await era.printAndWait([
        '不过只是走到天台入口的路程，',
        kitaru.get_colored_name(),
        ' 便按捺不住的把脸埋在 ',
        me.get_colored_name(),
        ' 的胸口，交叠在一起的双腿越来越过分的摩擦着，直到裙下的糟糕气味传入 ',
        me.get_colored_name(),
        ' 的鼻腔。',
      ]);
      era.printButton('抱起待兼福来', 1);
      await era.input();
      await kitaru.say_and_wait('嗯……', true);
      await era.printAndWait([
        '明明没有开口，不过 ',
        me.get_colored_name(),
        ' 还是看出了怀中担当的意愿。',
      ]);
      await era.printAndWait('关上了通向天台的大门，将寒风阻拦在外。');
      await era.printAndWait('楼梯口的空间并不算大。');
      await era.printAndWait([
        '让怀中的 ',
        kitaru.get_colored_name(),
        ' 背对着 ',
        me.get_colored_name(),
        ' 扶着内侧的水泥墙壁，把',
        kitaru.sex,
        '的校服裙子拉起，露出内裤。',
      ]);
      await kitaru.say_and_wait(
        ['唔，这个姿势，完全看不见 ', callname, '……'],
        true,
      );
      await era.printAndWait(
        '那片布料湿的仿佛能滴下水来，已经快在在双腿不断的交替摩擦间拧成了一股线。',
      );
      era.printButton('分开双腿', 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 听话的执行了的命令，双腿大大的分开，在伸手拉下内裤的时候，小穴与分离的布料拉起粘稠的丝线。',
      ]);
      await era.printAndWait(
        '而后手指伸入，柔软的嫩肉无法对其形成一分一毫的抵抗。',
      );
      await kitaru.say_and_wait('哈……哈啊');
      await era.printAndWait([
        '开始还小心翼翼的，直到在 ',
        kitaru.get_colored_name(),
        ' 愈发过分的呻吟声下，让剩下的半根手指毫不怜惜的一起进入。',
      ]);
      await kitaru.say_and_wait('唔呜？！');
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '剥开包皮，玩弄起肿胀的阴蒂，莫大的快感从 ',
        kitaru.get_colored_name(),
        ' 的尾椎末侧升起，电流沿着脊背流向全身',
      ]);
      await kitaru.say_and_wait('咦呀呀呀呀呀呀！');
      await era.printAndWait(
        '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
      );
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait([
        '被掀起的冬季校服短裙半掩着的雪臀，在 ',
        kitaru.get_colored_name(),
        ' 的痉挛下不断的颤动着。',
      ]);
      era.printButton('伸手', 1);
      await era.input();
      await kitaru.say_and_wait('咿呀！');
      await era.printAndWait([
        '首先是揉搓，而后，在 ',
        kitaru.get_colored_name(),
        ' 愈发可爱的呻吟声下，变成了对待无机物般下手不知轻重的揉捏，肆意地变幻出淫荡的形状。',
      ]);
      await era.printAndWait(
        '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
      );
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 的催促下，是时候进入正戏了。',
      ]);
      await era.printAndWait('脱下裤子，露出了已经勃起的阴茎。');
      await kitaru.say_and_wait('嗯……');
      await era.printAndWait([
        '似乎是察觉到了逐渐逼近的火热，饥渴的小穴一开一合的对 ',
        me.get_colored_name(),
        ' 的阴茎发出了邀请。',
      ]);
      await era.printAndWait('然后，粗大的肉棒长驱直入。');
      await era.printAndWait('小穴内的爱液和穴内的空气一起被无情的挤出。');
      await era.printAndWait([
        '属于成年男性级别的肉棒霸占了穴内所有的空间，在',
        kitaru.get_teen_sex_title(),
        '的私密地带横行霸道。',
      ]);
      await kitaru.say_and_wait(
        ['小穴一缩一缩的，包裹着 ', callname, ' 的肉棒。'],
        true,
      );
      await era.printAndWait('砰！');
      await era.printAndWait([
        '沉闷的撞击声从 ',
        kitaru.get_colored_name(),
        ' 的小穴深部传来',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 本想大声的叫出来，却又在 ',
        me.get_colored_name(),
        ' 的示意下，把声音压了下去。',
      ]);
      await kitaru.say_and_wait(
        '连自己小穴『啧啧』的淫靡吮吸声都能听见。',
        true,
      );
      await era.printAndWait([
        '尽管这么想着，',
        kitaru.get_colored_name(),
        ' 双腿还是愈发的分开，让站立后入的体位更加的标准。',
      ]);
      await era.printAndWait(
        '环状的粉红穴肉在肉棒的冲击下，如同被采蜜的花朵般随风抽搐荡漾着。',
      );
      await kitaru.say_and_wait('这么激烈的话，要，要去了啊～～～', true);
      await kitaru.say_and_wait('去了去了啊！！！');
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '将脱力的爱人翻了一个面，水泥墙壁的冰凉刺激让 ',
        kitaru.get_colored_name(),
        ' 失神的星星瞳重新对焦。',
      ]);
      await era.printAndWait([
        '这次是对面立位，',
        me.get_colored_name(),
        ' 得以欣赏着平日里元气的',
        kitaru.get_uma_sex_title(),
        '在性爱中的表情。',
      ]);
      await kitaru.say_and_wait('砰～砰～');
      await era.printAndWait('淫靡的交合声回响在天台楼梯口的狭小空间内。');
      await kitaru.say_and_wait('太激烈！太激烈了！', true);
      await kitaru.say_and_wait('要，要去了啊～');
      await era.printAndWait('压抑着的娇媚声音终于泄了出来。');
      await era.printAndWait([
        '话是这么说，可橙色的尾巴却如同有自我意识般缠在了 ',
        me.get_colored_name(),
        ' 的腿，配合着纠缠地越发紧密的小穴，背叛般的告诉了主人此刻接近高潮的状态。',
      ]);
      await kitaru.say_and_wait('要去了啊！！！)');
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await era.printAndWait('稍稍前倾，龟头径直抵着子宫口倾吐起精液。');
      await era.printAndWait('从小穴和肉棒交合处漏出了点点白浊。');
      era.add('exp:56:阴道高潮次数', 3);
      era.add('exp:0:阴茎高潮次数', 3);
      era.add('exp:0:射精量', 60);
      await kitaru.print_and_wait('之后又持续了多久呢？');
      await kitaru.print_and_wait([
        '不过我第二天醒来的时候，发现自己睡在了 ',
        callname,
        ' 家里的床上。',
      ]);
      end_ero_and_train();
      era.set('cflag:56:节日事件标记', 0);
    }

    return true;
  }
};
