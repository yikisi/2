const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (digital, me, callname, flags) => {
    era.set('cflag:19:节日事件标记', 0);
    await print_event_name('新年的抱负', digital);
    await era.printAndWait([
      '新的一年，',
      digital.get_colored_name(),
      ' 迎来了对于',
      digital.get_uma_sex_title(),
      '来说至关重要的经典年。',
    ]);
    await era.printAndWait([
      '虽然',
      digital.sex,
      '好像还停留在对于可以切身接近经典年',
      digital.get_uma_sex_title(),
      '而激动。',
    ]);
    await digital.say_and_wait(['新年快乐！', callname, '！']);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 简单地对 ',
      me.get_colored_name(),
      ' 道了新年。',
    ]);
    await era.printAndWait('一大早就来到了训练室，真是勤勉啊。');
    await digital.say_and_wait('年底过得怎么样呢？有在CM上买到几本好书吗？');
    await me.say_and_wait('诶？CM？书？');
    await digital.say_and_wait(
      '啊……嗯，如果没有的话就忘记我说的话吧，只是数码的一些胡言乱语罢了。',
    );
    await digital.say_and_wait(
      '不过！今年的比赛！可就有得聊了！经典年的比赛可是多如繁星啊！',
    );
    await era.printAndWait([
      '的确，',
      digital.get_colored_name(),
      ' 可以参加经典级比赛了，选择相比去年就多得多了，大多数的G1比赛，都是要到经典年才能参加。',
    ]);
    await digital.say_and_wait([
      '啊，突然想起了去年，我还是太过得意忘形了，似乎都忘记了自己的初心，说好的要当合格的',
      digital.get_uma_sex_title(),
      '粉丝呢？！',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 似乎是对上次',
      digital.sex,
      '与 ',
      get_chara_talk(58).get_colored_name(),
      ' 的谈话仍有郁结……',
    ]);
    era.println();
    await digital.say_and_wait(
      '所以说！今年，我要再次回归起点！再次成为粉丝！以其为原则！',
    );
    await era.printAndWait([
      '不过目前来看，也还没有办法，',
      digital.get_colored_name(),
      ' 想要认识到的话，还得……',
    ]);
    await digital.say_and_wait([
      callname,
      '！你可以给我一些建议吗！应该如何应援？',
    ]);
    era.print([me.get_colored_name(), ' 的选择是：']);
    era.printButton(`侍奉${digital.get_uma_sex_title()}酱（速度+10）`, 1);
    era.printButton('读书（耐力+10）', 2);
    era.printButton('从模仿中学习（技能点数+20）', 3);
    switch (await era.input()) {
      case 1:
        await me.say_and_wait([
          '像平时那样，侍奉',
          digital.get_uma_sex_title(),
          '酱不挺不错吗？',
        ]);
        await digital.say_and_wait([
          '哦哦哦！很好的建议呢，说到这个，感觉最近无论是比赛什么的还是交流什么的一直都有在冒犯',
          digital.get_uma_sex_title(),
          '酱呢……',
        ]);
        await digital.say_and_wait(
          '所以！的确是个回归起点的时候！是时候把圣地净化一遍了！',
        );
        await era.printAndWait('净化？！');
        await era.printAndWait('原来只是将赛场打理一遍，还好还好。');
        await era.printAndWait([
          '打理后恰好是 ',
          get_chara_talk(9).get_colored_name(),
          ' 第一个到达草地，看着 ',
          get_chara_talk(9).get_colored_name(),
          ' 在草地上爽快地奔跑，',
          digital.get_colored_name(),
          ' 觉得自己也充满了干劲。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(19, [10], 0);
        break;
      case 2:
        await me.say_and_wait('既然这样的话，读一下你说的买到的书如何？');
        await digital.say_and_wait(
          '诶！这个确实……虽然都挺短的，再次回顾一下也无妨！',
        );
        await digital.say_and_wait([
          '摄入各种各样',
          digital.get_uma_sex_title(),
          '酱的能量，这样在新的一年才有能量持续冲刺啊！',
        ]);
        await era.printAndWait([
          '就这样，',
          digital.get_colored_name(),
          ' 今天回到了宿舍看书，等再次看到 ',
          digital.get_colored_name(),
          ' 带着满脸沉浸的表情，',
          me.get_colored_name(),
          ' 知道',
          digital.sex,
          '休息得很不错。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(19, [0, 10], 0);
        break;
      case 3:
        await me.say_and_wait([
          '模仿一下其他',
          digital.get_uma_sex_title(),
          '，从中学得技能如何？',
        ]);
        await digital.say_and_wait(
          '的确！模仿推们学习技能！这正是吾辈的任务所在！',
        );
        await digital.say_and_wait('哦哦哦！哦？');
        await era.printAndWait([
          '来到训练场上的看台，回忆之前在台上观察着',
          digital.get_uma_sex_title(),
          '的技能……',
        ]);
        await digital.say_and_wait('接下来请看！帝王舞步！');
        await era.printAndWait(
          '哦哦哦，是著名的那个帝王舞步！通过高幅度高抬腿的动作来达到增长步幅的技能！',
        );
        await era.printAndWait('哦哦哦，本尊貌似也到了。');
        await era.printAndWait([
          get_chara_talk(3).get_colored_name(),
          '？何时到的？',
        ]);
        await digital.say_and_wait('呜哇哇哇！我不是故意要冒犯的！');
        await era.printAndWait([digital.get_colored_name(), '！凋零！']);
        await era.printAndWait([
          '不过之后 ',
          digital.get_colored_name(),
          ' 倒是从 ',
          get_chara_talk(3).get_colored_name(),
          ' 那里真的学到了技巧。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(19, undefined, 20);
    }
  };

  handlers[47 + 29] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get('cflag:19:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('夏季合宿（经典年）开始', digital);
    await era.printAndWait([
      '夏合宿！是一年中最重要的活动！这一段时间是',
      digital.get_uma_sex_title(),
      '们进步的大好时机！作为训练员的 ',
      me.get_colored_name(),
      '，自然也特别重视这次活动。',
    ]);
    await era.printAndWait([
      '特别是要接着上次 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      ' 的势头，接着去冲击下一场比赛。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 已经能想象得到 ',
      digital.get_colored_name(),
      ' 的光明道路了，只是……',
    ]);
    await digital.say_and_wait(
      '库哇……果然还是被胜利冲晕了头脑，我居然，我居然想要成为这神圣的存在……',
    );
    await era.printAndWait('……啊，开局不利啊。');
    await digital.say_and_wait(
      '一旦余韵过去之后，进入那种所谓的贤者模式，就会懊恼自己是那么的……',
    );
    era.printButton('「等等，数码，你在后悔吗？在后悔自己做的决定吗？」', 1);
    await era.input();
    await era.printAndWait([
      '像是被戳到痛点一样，',
      digital.get_colored_name(),
      ' 整个身子都立了起来。',
    ]);
    await digital.say_and_wait([
      '只是，也有时候觉得自己挺麻烦的……明明自己还预定了 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '……',
    ]);
    await digital.say_and_wait(
      '喏喏喏喏喏！麻烦的事情就先不想了！接下来应该先想一下Comic的事情！',
    );
    era.printButton('「Comic？那是什么？」', 1);
    await era.input();
    await digital.say_and_wait('诶！');
    await era.printAndWait([
      '突然被 ',
      me.get_colored_name(),
      ' 打断的 ',
      digital.get_colored_name(),
      ' 变得支支吾吾了起来。',
    ]);
    await digital.say_and_wait(
      '总之！刚比赛结束，也先让我放松一下吧，啊哈哈哈!',
    );
    await era.printAndWait('这次的夏合宿，有点让人担忧啊……');
  };

  handlers[95 + 6] = async (digital, me, callname) => {
    await print_event_name('情人节', digital);
    await era.printAndWait([
      '一大早到达训练室的 ',
      digital.get_colored_name(),
      '，其所带的是——一叠巧克力。',
    ]);
    await era.printAndWait('为什么要用叠作为量词？！');
    await digital.say_and_wait([
      '这是我的心血之作！我将我所能想到的各位',
      digital.get_uma_sex_title(),
      '的特征，都融入了这份巧克力！',
    ]);
    await era.printAndWait(
      '看着这一盒盒巧克力叠成的高塔，难道，里面的每颗巧克力，都是不同的吗？！',
    );
    await digital.say_and_wait('那么，来祭祀吧！');
    await era.printAndWait('什么，哪里来的神龛？！');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 把巧克力全摆在神龛前，先是念念有词，接着还带着一些奇怪的搓手动作。',
    ]);
    await digital.say_and_wait('好了，可以了！三女神应该收到了我的请求。');
    await era.printAndWait('既然是拜的三女神，为什么不去庭院呢？！');
    await digital.say_and_wait([
      callname,
      '，接下来就一起吃吧，可不能浪费哦。',
    ]);
    era.printButton('「居然是能吃的吗？！」', 1);
    await era.input();
    await digital.say_and_wait(
      '当然啦，只要有这份心意就可以了，而且浪费食物也是一种亵渎啊！',
    );
    await digital.say_and_wait('接下来就一边吃着一边谈吧！');
    await digital.say_and_wait([
      '呜呜呜，我真是幸运啊，居然能遇到能一起讨论',
      digital.get_uma_sex_title(),
      '的同志……',
    ]);
    await digital.say_and_wait([
      '来来来，',
      callname,
      '，聊一下最近最推的',
      digital.get_uma_sex_title(),
      '……是谁呀？',
    ]);
    await era.printAndWait('那还用问？');
    era.printButton('「好，给你巧克力。」', 1);
    await era.input();
    await era.printAndWait('从冰箱里，拿出巧克力……');
    await digital.say_and_wait('哦哦哦，是我啊。');
    await digital.say_and_wait('噫诶诶诶诶？不是，居然是巧克力？');
    await digital.say_and_wait([
      '这，这是何等的博爱？！居然，有人会想要推如此小众的',
      digital.get_uma_sex_title(),
      '？',
    ]);
    await me.say_and_wait([
      '说什么呢，我可是你的 ',
      callname,
      '……还有，你居然觉得你很小众……吗？马推的粉丝数，不低的来吧？',
    ]);
    await era.printAndWait([
      '被这么一说的 ',
      digital.get_colored_name(),
      '，却突然变得支支吾吾了起来。',
    ]);
    await digital.say_and_wait(
      '那是……事实上我的马推，在出道前，粉丝就不少来着，因为之前一直都有在做……同人志……',
    );
    await era.printAndWait([
      '诶？好像的确是听说过，',
      digital.get_colored_name(),
      ' 在出道前就在某些方面挺出名来着……',
    ]);
    await digital.say_and_wait([
      '不过！',
      callname,
      ' 的这种精神，这，才是宅中之鉴！如果是和你的话，哪怕十年，还是多久，感觉都可以一起过情人节！',
    ]);
    await era.printAndWait([
      '和 ',
      digital.get_colored_name(),
      ' 边说边聊，度过了一个吵闹的情人节。',
    ]);
    era.add('item:情人节巧克力', 1);
    era.set('cflag:19:节日事件标记', 0);
  };

  handlers[95 + 14] = async (digital, me, callname) => {
    await print_event_name('粉丝感谢祭', digital);
    await digital.say_and_wait([
      '数码，属于 ',
      digital.get_colored_name(),
      ' 的节日，终于来了！哇哇哇，看看这周围的景色，简直就是粉丝的天堂……',
    ]);
    await era.printAndWait([
      '粉丝感谢祭呢……顾名思义，就是作为具有偶像属性的赛',
      digital.get_uma_sex_title(),
      '回馈应援粉丝的活动。',
    ]);
    await era.printAndWait('说是这么说，事实上感觉也有点像校园祭。');
    await era.printAndWait([
      '不过，',
      digital.get_colored_name(),
      '，今年所担当的角色，可不仅是粉丝啊！',
    ]);
    await me.say_and_wait('事实上，数码，你在今天，可是被应援的一方哦！');
    await digital.say_and_wait('库呀！');
    await digital.say_and_wait('不不不，就我这种人……');
    await era.printAndWait([
      '摆出一脸「不可能」表情的 ',
      digital.get_colored_name(),
      '，要说是以前的话那的确如此……',
    ]);
    await me.say_and_wait(
      '在那么多场比赛中取得出色成绩的你，倒也要有点自觉了吧，虽然你说你的马推粉丝有之前的因素……但是新粉丝，可不少啊。',
    );
    await era.printAndWait([
      '像是被戳到痛点的 ',
      digital.get_colored_name(),
      ' 双手投降，看来应该有所准备了。',
    ]);
    await era.printAndWait([
      '接着便是来到了签名会的 ',
      digital.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '一开始 ',
      digital.get_colored_name(),
      ' 还有点不适应，不过之后的',
      digital.sex,
      '……',
    ]);
    await digital.say_and_wait('好好，有在色纸上好好地签上名字了哦！');
    await era.printAndWait('甚至都做到了让每一个粉丝都笑着排队？！');
    await digital.say_and_wait(
      '因为之前一直都是作为推的那一方的人嘛……所以当然能猜出来粉丝们的心情。',
    );
    await digital.say_and_wait([
      '还有，',
      callname,
      '，待会能让我优化一下这个会场吗，只要拿到许可的话，就能让你看看数码的主办方之魂哦！',
    ]);
    await era.printAndWait([
      '向工作人员拿到许可后，',
      digital.get_colored_name(),
      ' 立刻在各个会场都扫荡了一遍，还把各种各样的活动都优化得很好？！',
    ]);
    await era.printAndWait([
      '之后因为传到了 ',
      get_chara_talk(17).get_colored_name(),
      ' 的耳里，由',
      digital.sex,
      '亲自带领很多',
      digital.get_uma_sex_title(),
      '过来感谢时……',
    ]);
    await digital.say_and_wait('怎么回事，我成为被推的一天了？！');
    await era.printAndWait([
      '激动晕倒的 ',
      digital.get_colored_name(),
      ' 终于结束了今天的奋斗。',
    ]);
    era.set('cflag:19:节日事件标记', 0);
  };

  handlers[95 + 29] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get('cflag:19:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('夏季合宿（资深年）开始', digital);
    await digital.say_and_wait(
      '唔咕咕，今年，就今年这一次……没时间了啊！得停下来了！',
    );
    await era.printAndWait([
      '夏合宿一开始就看到了抱头痛鸣的 ',
      digital.get_colored_name(),
      '，该怎么说呢，看得多 ',
      digital.get_colored_name(),
      ' 的 ',
      me.get_colored_name(),
      ' 也逐渐明白，',
      digital.get_colored_name(),
      ' ',
      digital.sex,
      '也有制作同人志的兴趣。',
    ]);
    await era.printAndWait([
      digital.sex,
      '会将',
      digital.sex,
      '制作的同人志放到漫展上向别人传教，真是相当地热爱呢。',
    ]);
    await era.printAndWait('而且，最近的一次大型漫展，就在夏合宿期间。');
    await digital.say_and_wait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '！这个夏天，就不出 ',
      sys_get_colored_callname(19, 61),
      ' 新刊了，要为比赛倾尽全力！',
    ]);
    await era.printAndWait([
      '看起来 ',
      digital.get_colored_name(),
      ' 也相当地看重这次与好歌剧还有名将怒涛的对决，那么这次夏合宿，也一定不会让人担心了。',
    ]);
    const halo = get_chara_talk(61);
    await halo.say_and_wait('啊啦，那我就暂时看不到了呢');
    await digital.say_and_wait([
      '咻诶！',
      sys_get_colored_callname(19, 61),
      '！',
    ]);
    await halo.say_and_wait([
      '比起那个，',
      sys_get_colored_callname(61, 19),
      '，你今年要参加 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 吧。',
    ]);
    await digital.say_and_wait([
      '是，是的……毕竟已经被 ',
      sys_get_colored_callname(19, 61),
      ' 锻炼过了，无论是身体还是意志……终于，到了可以和 ',
      sys_get_colored_callname(19, 15),
      ' ',
      sys_get_colored_callname(19, 58),
      ' 决战的时候了！',
    ]);
    await halo.say_and_wait([
      '那么，',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '，就是三个——不，四个人的对决了呢。',
    ]);
    await digital.say_and_wait([
      '诶？还有其他，被评为有实力的',
      digital.get_uma_sex_title(),
      '酱吗？',
    ]);
    await halo.say_and_wait([
      '今年的 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      '，你应该去看了吧？',
    ]);
    await digital.say_and_wait([
      '那当然，因为我可是 ',
      digital.get_colored_name(),
      '！啊哈哈哈……难道说……',
    ]);
    await era.printAndWait([
      '事实上，',
      me.get_colored_name(),
      ' 前几天也听到有传言了，那就是……',
    ]);
    await halo.say_and_wait([
      '黑船，',
      digital.sex,
      '要参加今年的 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '黑船……就是拿下今年NHK的那位',
      digital.get_uma_sex_title(),
      '，具有着可怕的脚步。',
    ]);
    await era.printAndWait([digital.sex, '也要参加这场比赛啊。']);
  };

  handlers[95 + 48] = async (digital, me, callname) => {
    era.set('cflag:19:节日事件标记', 0);
    const emperor = get_chara_talk(17);
    await print_event_name('圣诞节', digital);
    await era.printAndWait([
      '特雷森对于圣诞节的自由活动通常都是比较支持的，毕竟这对于',
      digital.get_uma_sex_title(),
      '来说也是一个特殊日子。',
    ]);
    await era.printAndWait([
      '在校外之余，为了给一些特立独行的',
      digital.get_uma_sex_title(),
      '一些光照，学校内部也举办了大型活动。',
    ]);
    await era.printAndWait([
      '和 ',
      digital.get_colored_name(),
      ' 穿梭在各个活动现场蹭吃蹭喝，一起游玩各种游戏，还有就是和 ',
      digital.get_colored_name(),
      ' 一起激烈讨论。',
    ]);
    await era.printAndWait([
      '突然，',
      emperor.get_colored_name(),
      ' 以及一行人出现在了 ',
      me.get_colored_name(),
      ' 的面前。',
    ]);
    await digital.say_and_wait('呜哇哇，是太吵闹了吗？');
    await emperor.say_and_wait('不用太过担心，倒不如说是奖励。');
    await era.printAndWait([
      '接着，',
      digital.sex,
      '从背后拿出一个大型礼盒，递给了 ',
      digital.get_colored_name(),
      '……',
    ]);
    await digital.say_and_wait('这是……');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 打开了礼盒，然后里面装的是——',
    ]);
    await era.printAndWait('一叠色纸……里面密密麻麻地写满了各种各样的……名字？');
    await digital.say_and_wait('不，这个，这个是……！签名啊！');
    await era.printAndWait([
      '签名！定睛一看，这里面，包含了很多熟悉的',
      digital.get_uma_sex_title(),
      '的亲笔签名？！',
    ]);
    await digital.say_and_wait(
      '啊啊啊啊……这就算是单买，都要多少马币呢……我的存款，还有多少来着……',
    );
    await emperor.say_and_wait([
      '这是这段时间以来，接受过 ',
      sys_get_colored_callname(17, 19),
      ' 帮助或者鼓舞的各位',
      digital.get_uma_sex_title(),
      '的谢意，而且，作为学生会长，我也非常感谢你对学校的宣传……',
    ]);
    await emperor.say_and_wait([
      '而且，',
      sys_get_colored_callname(17, 19),
      ' 你的爱好……也有点独特，所以我募集了所有喜欢 ',
      sys_get_colored_callname(17, 19),
      ' 你的',
      digital.get_uma_sex_title(),
      '，为你准备了这份礼物。',
    ]);
    await era.printAndWait([
      '收到这份大礼，',
      digital.get_colored_name(),
      ' ',
      digital.sex,
      '……',
    ]);
    await digital.say_and_wait('啊哇啊哇……难道这就是……推人着恒被推吗……');
    await say_by_passer_by_and_wait('众人', [
      '节日快乐！',
      digital.get_colored_name(),
    ]);
    await digital.say_and_wait([callname, '！', callname, '！这……']);
    await era.printAndWait([
      '立刻尊晕地靠在了 ',
      me.get_colored_name(),
      ' 身上。',
    ]);
    await era.printAndWait([
      '意外地互换了位置的 ',
      digital.get_colored_name(),
      '，在今天也享受到了被推的快乐。',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (digital, me) {
    await this.common_palace(digital, me);
    const races = new RaceHistory(19).get();
    if (
      check_aim_race(races, race_enum.hyac_sta, 1, 1) &&
      check_aim_race(races, race_enum.nhk_cup, 1, 1) &&
      check_aim_race(races, race_enum.japa_dir, 1, 1) &&
      check_aim_race(races, race_enum.mile_cha, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1)
    ) {
      era.drawLine();
      era.set('flag:当前位置', location_enum.gate);
      await print_event_name('世界的旅人', digital);
      era.set('flag:当前位置', location_enum.office);
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' 仍在继续挑战，为之后去海外远征而努力。',
      ]);
      await digital.print_and_wait([
        '不仅是为了胜利，也是为了和同志一起，去遇见更多的',
        digital.get_uma_sex_title(),
        '。',
      ]);
      await digital.print_and_wait('在为了先行考察，并没有太多人知道的航班……');
      await digital.print_and_wait('准备启程前……');
      await digital.print_and_wait('诶呀呀，来了不少熟人啊。');
      await digital.print_and_wait([
        get_chara_talk(61).get_colored_name(),
        '、',
        get_chara_talk(15).get_colored_name(),
        '、',
        get_chara_talk(58).get_colored_name(),
        '、',
        get_chara_talk(32).get_colored_name(),
        '……还有黑船？',
      ]);
      await digital.print_and_wait(
        '本来就是暂时离开，适应一下海外环境，倒不如说是旅游？',
      );
      await digital.print_and_wait('结果还来了这么多人告别吗？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        '，真的了不起啊。',
      ]);
      await digital.say_and_wait([
        '不过，我等不了了！异域的邂逅，我要和同志一起，想要和世界各地的',
        digital.get_uma_sex_title(),
        '们相遇啊！',
      ]);
      await digital.print_and_wait([
        '世界的旅人，',
        digital.get_colored_name(),
        '，现在仍在奔跑中。',
      ]);
    } else {
      await this.common_palace_relation(digital, me);
    }
  };
};
