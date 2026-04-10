const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[42] = async (digital, me, callname) => {
    const halo = get_chara_talk(61);
    await print_event_name(
      ['观看 ', race_infos[race_enum.mile_cha].get_colored_name()],
      digital,
    );
    await era.printAndWait([
      '虽然 ',
      digital.get_colored_name(),
      ' 目前还只是出道第一年，即使想要参加比赛，选择的空间也不多，但是对于其他',
      digital.uma_sex_title,
      '而言，最近是最为忙碌的一段时间。',
    ]);
    await era.printAndWait([
      '这次 ',
      me.get_colored_name(),
      ' 和 ',
      digital.get_colored_name(),
      ' 来观看的比赛是 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '在这场比赛里，',
      digital.get_colored_name(),
      ' 的激推',
      digital.uma_sex_title,
      '之一——',
      halo.get_colored_name(),
      ' 也会出赛。',
    ]);
    await digital.say_and_wait([callname, '！这边这边！']);
    await era.printAndWait([
      '抢到好位置的 ',
      digital.get_colored_name(),
      ' 向 ',
      me.get_colored_name(),
      ' 招手，',
      me.get_colored_name(),
      ' 尽量挤了进去。',
    ]);
    await digital.say_and_wait([
      '快要开始了哦！是 ',
      sys_get_colored_callname(19, 61),
      ' 哦！',
    ]);
    await era.printAndWait('然后……');
    await say_by_passer_by_and_wait('解说', [
      '接着之后的是 ',
      halo.get_colored_name(),
      '！从外道赶上，',
      halo.get_colored_name(),
      ' 是第二名！',
    ]);
    await say_by_passer_by_and_wait('解说', [
      '接着之后的是 ',
      halo.get_colored_name(),
      '！从外道赶上，',
      halo.get_colored_name(),
      ' 是第二名！',
    ]);
    await era.printAndWait([
      '第二名啊，对于 ',
      halo.get_colored_name(),
      ' 最近的战绩来说很不错了。',
    ]);
    await halo.say_and_wait(
      '全国各地的我的粉丝啊，虽然没能获胜我很遗憾，但是……',
    );
    await halo.say_and_wait(
      '我必将突破束缚，接下来也将继续走在短距离、英里赛道路上，这就是King我新的路线哟！哦！吼吼吼！',
    );
    await digital.say_and_wait(
      '唔噢噢噢哦哦……真是，万分的感动！敢于选择新路线，这是需要多大的勇气，多大的觉悟！',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      ' 感动得痛哭流涕，跟 ',
      me.get_colored_name(),
      ' 说起 ',
      halo.get_colored_name(),
      ' 的经历。',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      ' 原本是想要证明自己的才能，所以一直专注于经典赛事的',
      digital.uma_sex_title,
      '，但是今年',
      digital.sex,
      '改变了路线，重新定下了目标。',
    ]);
    await digital.say_and_wait(
      '无论是哪一种路线，都是可以证明自己的强大的啊！',
    );
    await era.printAndWait([
      '在 ',
      digital.get_colored_name(),
      ' 出道后，',
      digital.get_colored_name(),
      ' 的想法跟之前也有了很大的区别，更能从一个选手的角度去体会赛场上赛场后的种种了。',
    ]);
    await era.printAndWait([
      '正因为期待着 ',
      halo.get_colored_name(),
      ' 的努力能得到回报，',
      digital.get_colored_name(),
      ' 才会来看现场比赛，在 ',
      halo.get_colored_name(),
      ' 终于苦尽甘来的时候，',
      digital.sex,
      '哭得比在场的每个人都响。',
    ]);
    era.drawLine({ content: '回去的路上' });
    await era.printAndWait([
      '学校旁边的小河边，发现了一个低头奔跑在河边泥地的',
      digital.uma_sex_title,
      '。',
    ]);
    const dotou = get_chara_talk(58);
    await digital.say_and_wait([
      '哦哦哦！是 ',
      sys_get_colored_callname(19, 58),
      ' 啊……',
    ]);
    await era.printAndWait([
      dotou.get_colored_name(),
      ' 看起来有点失落，训练还在这里训练……',
    ]);
    await era.printAndWait([
      '嗯……',
      dotou.get_colored_name(),
      ' 是不是一直都是这样来着？',
    ]);
    await era.printAndWait([
      dotou.get_colored_name(),
      ' 最近成绩不佳，作为训练员的 ',
      me.get_colored_name(),
      ' 很清楚，',
      dotou.sex,
      '还未到本格化时期，但是',
      dotou.sex,
      '本身好像并没有察觉到。',
    ]);
    await digital.say_and_wait(
      '本格化……如果自己不知道的话，果然还是比较痛苦……',
    );
    await digital.say_and_wait([
      '以前我大概只能看到 ',
      sys_get_colored_callname(19, 58),
      ' 的努力吧，但是现在我……',
    ]);
    await digital.say_and_wait('至少，知道这件事能安心很多啊……');
    await me.say_and_wait(['怎么了，不打算上去对', dotou.sex, '说一下吗？']);
    await digital.say_and_wait(
      '诶？喂喂喂……我可是一介粉丝啊？粉丝也不能向偶像提意见的啊！会被经纪人请出去的！',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      ' 很想要帮忙，却又觉得自己是不是太过逾越了。',
    ]);
    await digital.say_and_wait(
      '用一个现实点的例子就是，就好像你看到一间经营不善的面馆，然后安慰店主只是时机未到吗？！',
    );
    await me.say_and_wait(
      '不不不，这个的确是有根据的……再说了，数码，你还只是把自己当作粉丝吗？',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 提醒 ',
      digital.get_colored_name(),
      '，',
      digital.get_colored_name(),
      ' 已经不再是粉丝，也是作为一名选手站在了赛场上。',
    ]);
    await digital.say_and_wait([
      '啊，嗯，倒也……虽然我的确出了道，但是 ',
      sys_get_colored_callname(19, 58),
      ' 和我之间的横沟可是跨越不了的啊……',
    ]);
    await me.say_and_wait([
      '你与',
      digital.sex,
      '，与',
      digital.couple_title,
      '的差距，比你想象中的小哦！',
    ]);
    await me.say_and_wait([
      '正是你每日的观察，才能看到 ',
      sys_get_colored_callname(0, 58),
      ' 所面临的问题，但也就是因此，你把自己置身事外了，觉得自己并不是其中的一员。',
    ]);
    await era.printAndWait([digital.get_colored_name(), ' 低下了头。']);
    await digital.say_and_wait(
      '唔唔……虽然是这样，但是你现在要我上去跟偶像交流，我还是有点……',
    );
    await digital.say_and_wait('总感觉，自己有了不得了的想法……');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 最终还是决定了，想要帮助 ',
      dotou.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      digital.sex,
      '跃下岸堤的栅栏，一个滑坡，直接出现在了怒涛面前，这种登场方式，真的是厉害啊。',
    ]);
    await digital.say_and_wait([
      '那那那那那个！',
      sys_get_colored_callname(19, 58),
      '！稍微说一下可以吗？',
    ]);
    await dotou.say_and_wait('诶诶诶诶，什什什么？');
    await digital.say_and_wait('本格化，知道吗！');
    await dotou.say_and_wait('诶诶诶？那是什么？');
    await digital.say_and_wait('所谓本格化，就是……');
    await era.printAndWait('就在岸边看着，应该问题不大吧？');
    await digital.say_and_wait('还有就是本格化的时间，大概都在……');
    await era.printAndWait('嗯，讲得还挺详细的嘛。');
    await digital.say_and_wait(
      '对了对了，要是想要趁这本格化时间要锻炼的话，要注意脚步的……',
    );
    await era.printAndWait('哦哦，是连训练员资格考试都没过多涉及的内容。');
    await digital.say_and_wait(
      '……在本格化时期前的一段时间内，并不是说锻炼是白费的，',
    );
    await digital.say_and_wait(
      '如果此时能加紧锻炼大腿肌的话，能在本格化期间瞬间哗地一下成长噢！',
    );
    await era.printAndWait([
      '不对，这已经都涉及到最近的研究了吧，',
      me.get_colored_name(),
      ' 记得这个内容还是前不久刊登在《训练员月刊》里面的研究……',
    ]);
    era.drawLine({ content: '回到训练室时' });
    await digital.say_and_wait([
      '哇哇哇哇！搞砸了啊！是现实中，在眼睛里成像的 ',
      sys_get_colored_callname(19, 58),
      '……一不小心就……',
    ]);
    await era.printAndWait([
      '事实上 ',
      dotou.get_colored_name(),
      ' 虽然后面听得云里雾里的，但是在岸边都能看得到，',
      digital.sex,
      '已经恢复了元气。',
    ]);
    await era.printAndWait([digital.get_colored_name(), ' 肯定也是知道的。']);
    await me.say_and_wait([
      '但是，怒涛',
      digital.sex,
      '不是觉得收获挺大的吗？',
    ]);
    await era.printAndWait([
      '……',
      digital.get_colored_name(),
      ' 只是捂着胸口。',
    ]);
    await era.printAndWait([
      '第一次与推的偶像这样对话，想必 ',
      digital.get_colored_name(),
      ' 压力很大。',
    ]);
    await era.printAndWait([
      '……不过 ',
      digital.get_colored_name(),
      ' 那连环机关枪的语速，',
      digital.sex,
      '该不会事实上是挺不妙的人吧？',
    ]);
  };

  handlers[47 + 24] = async (digital, me) => {
    await print_event_name(
      [race_infos[race_enum.takz_kin].get_colored_name()],
      digital,
    );
    const dotou = get_chara_talk(58),
      opera = get_chara_talk(15);
    await era.printAndWait([
      '这天，就是 ',
      opera.get_colored_name(),
      ' 和 ',
      dotou.get_colored_name(),
      ' 的初次对决。',
    ]);
    await digital.say_and_wait(
      '啊啊，无法避免的一天，果然还是来了！大脑，已经停不下来了！',
    );
    await digital.say_and_wait(
      '在梦里都能见到的比赛！不对，梦里的终究无法比及现实的比赛！',
    );
    await digital.say_and_wait('怎么，要全身插满应援棒去应援吗？！');
    era.printButton('「不不，这样会被保安请出去的吧。」', 1);
    await era.input();
    await era.printAndWait([
      '就这样来到了阪神赛场，',
      opera.get_colored_name(),
      ' 和 ',
      dotou.get_colored_name(),
      ' 的激斗啊……',
    ]);
    await era.printAndWait('就这样来到了阪神赛场，好歌剧和名将怒涛的激斗啊…');
    await era.printAndWait([
      opera.get_colored_name(),
      ' 的实力 ',
      me.get_colored_name(),
      ' 比较清楚，但 ',
      dotou.get_colored_name(),
      ' 居然也能到这种地步……',
    ]);
    await era.printAndWait([
      '最后甚至还是并列冲线，',
      opera.get_colored_name(),
      ' 仅仅略胜 ',
      dotou.get_colored_name(),
      ' 一筹。',
    ]);
    await era.printAndWait(
      '是什么原因，仅仅的本格化也暂且带不来这心境的转化……',
    );
    await era.printAndWait([
      '是 ',
      digital.get_colored_name(),
      ' 让',
      digital.sex,
      '变成这样的吗……',
    ]);
    await era.printAndWait([
      '该说 ',
      digital.get_colored_name(),
      ' 真是厉害吗……瞄了一眼 ',
      digital.get_colored_name(),
      '，诶，',
      digital.sex,
      '果然还是着迷地摇头晃脑。',
    ]);
    await digital.say_and_wait('诶哇哇哇哇……', true);
    await digital.say_and_wait('唔姆……', true);
    await digital.say_and_wait('刚才，那是什么……那个光辉？', true);
    await digital.say_and_wait('我甚至已经……在刚才都脱离了尊这一念头……', true);
    await digital.say_and_wait(
      [
        '是因为是 ',
        sys_get_colored_callname(19, 15),
        ' 和 ',
        sys_get_colored_callname(19, 58),
        ' 吗……是因为',
        digital.couple_title,
        '是特别的吗？',
      ],
      true,
    );
    await era.printAndWait([
      '就这样，即使 ',
      digital.get_colored_name(),
      ' 仍未能明白其中本意，接力棒还是递给了 ',
      digital.get_colored_name(),
      '，接下来就是 ',
      digital.get_colored_name(),
      ' 在 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      ' 的舞台了。',
    ]);
  };

  handlers[47 + 29] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get('cflag:19:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('夏季合宿（经典年）途中', digital);
    await era.printAndWait([
      '在夏合宿开始的第一周，',
      digital.get_colored_name(),
      ' 虽然训练是没落下，但……总觉得 ',
      digital.get_colored_name(),
      ' 有点心不在焉。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 也大概知道了，',
      digital.get_colored_name(),
      ' 似乎也在准备点其他的东西，但那也是 ',
      digital.get_colored_name(),
      ' 的爱好，你也不太好说什么。',
    ]);
    era.printButton('「该怎么办才好呢……」', 1);
    await era.input();
    const halo = get_chara_talk(61);
    await era.printAndWait([
      '看着 ',
      digital.get_colored_name(),
      ' 在做着力量训练的同时，',
      me.get_colored_name(),
      ' 无意间看到了 ',
      halo.get_colored_name(),
      ' 在沙滩那边站着看着海。',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      '，',
      digital.get_colored_name(),
      ' 在以前就十分推的',
      digital.uma_sex_title,
      '，当时的 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      ' ',
      digital.get_colored_name(),
      ' 和 ',
      me.get_colored_name(),
      ' 还一起去看了来着。',
    ]);
    await era.printAndWait(['最近', digital.sex, '的战绩，也逐渐有点……微妙。']);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 也注意到了 ',
      halo.get_colored_name(),
      '，身为粉丝，',
      digital.sex,
      '的情绪也有点低落。',
    ]);
    await me.say_and_wait([
      '要不，帮 ',
      sys_get_colored_callname(19, 61),
      ' 打一下气如何？',
    ]);
    await digital.say_and_wait(
      '嗯……身为粉丝，帮助偶像打气也是一个道理……好！决定了，先把手头的原稿放下！',
    );
    await me.say_and_wait('原稿？什么原稿？');
    await digital.say_and_wait('本子的原稿。');
    await me.say_and_wait('什么的本子？');
    await digital.say_and_wait('就是普通同人志的本子啊。');
    await era.printAndWait('听不懂了……');
    await digital.say_and_wait([
      '我本来是准备想要在最近的漫展上销售 ',
      sys_get_colored_callname(19, 61),
      ' 的同人志，向大家宣传 ',
      sys_get_colored_callname(19, 61),
      ' 的好的……',
    ]);
    await halo.say_as_unknown_and_wait(
      '圣王的同人志吗，这种事情本人都没听说过啊。',
    );
    await digital.say_and_wait([
      '啊，这种让本人知道可是禁忌哦，当然不能让 ',
      sys_get_colored_callname(19, 61),
      '……咻哇！',
      sys_get_colored_callname(19, 61),
      '？！',
    ]);
    await era.printAndWait('主人公从同人志里跑出来了。');
    await digital.say_and_wait('刚刚都是开玩笑的！都是我无聊的妄想罢了！');
    await halo.say_and_wait(
      '不过，谢谢了，也多亏了你，啊哈哈哈哈！King的魅力也是一流啊！',
    );
    await halo.say_and_wait([
      '事实上，我想问的是，',
      sys_get_colored_callname(61, 19),
      '，你是要出赛今年的『',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '』吧？',
    ]);
    await digital.say_and_wait([
      '诶？是的！因为被您在去年的比赛所感动，所以我也想要尽可能接近您……但是……为什么 ',
      sys_get_colored_callname(19, 61),
      ' 你……',
    ]);
    await halo.say_and_wait('因为我也会出赛。');
    await era.printAndWait([
      halo.get_colored_name(),
      ' 在 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      ' 也会出场，并且还会和 ',
      digital.get_colored_name(),
      ' 同台竞技。',
    ]);
    await digital.say_and_wait('！');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 的脸上突然蒙上了一层阴影。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 明白，在长时间的职业生涯里，',
      halo.get_colored_name(),
      ' 已经从巅峰期逐渐下滑到了低谷。',
    ]);
    await digital.say_and_wait([
      '那个，',
      sys_get_colored_callname(19, 61),
      '……虽然我说这话有点厚颜无耻……我，会为你应援的。',
    ]);
    await digital.say_and_wait('那个……就算是对手，想推的心情也是一样强烈的……');
    await era.printAndWait([
      '面对此种情况，',
      digital.get_colored_name(),
      ' 心情复杂，跟偶像同台竞技，本来就是梦寐以求的，但是，如果面对的偶像早已开始衰退呢？',
    ]);
    await me.say_and_wait('数码！');
    await digital.say_and_wait('！');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 略有无辜地看向了 ',
      me.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait([
      '数码，你应该明白的才对，在赛场上的',
      digital.uma_sex_title,
      '——',
    ]);
    await halo.say_and_wait([
      sys_get_callname(61, 0),
      '，很抱歉打断你，',
      sys_get_colored_callname(61, 19),
      '，我有一个提案。',
    ]);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      '，在这个合宿结束的时候，我们一起来一场比赛吧。',
    ]);
    await digital.say_and_wait('哈？！唔噢？跟偶像一起什么的，做不到的……');
    await me.say_and_wait([sys_get_colored_callname(0, 61), '……十分感谢你。']);
    await halo.say_and_wait([
      '没问题，作为一流的',
      digital.uma_sex_title,
      '自然要回馈一流的粉丝——啊哈哈哈哈！',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      ' 看出了 ',
      digital.get_colored_name(),
      ' 的困惑，',
      digital.sex,
      '邀请 ',
      digital.get_colored_name(),
      ' 一起跑步。',
    ]);
    await era.printAndWait([
      '于是，在接下来仅剩的夏合宿中，',
      digital.get_colored_name(),
      ' 将要在最后和 ',
      halo.get_colored_name(),
      ' 一同进行一场模拟比赛。',
    ]);
  };

  handlers[47 + 32] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach &&
      era.get('cflag:0:位置') !== era.get('cflag:19:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('夏合宿（经典年）结束', digital);
    await digital.say_and_wait('嘿嘿……呼……感谢赐予的对决……');
    const halo = get_chara_talk(61);
    await era.printAndWait([
      '在夏合宿的最后，就是预定的 ',
      digital.get_colored_name(),
      ' 和 ',
      halo.get_colored_name(),
      ' 的对决……',
    ]);
    await era.printAndWait('不过，看起来有点……随意吗？');
    await halo.say_and_wait([
      '哈……呼……',
      sys_get_colored_callname(61, 19),
      '，你的脚步，相当地踌躇呢，怎么了？',
    ]);
    await digital.say_and_wait(
      '呀，不……该说是一直都在吃着闪光弹吗，还是被空气中携带的尊窒息了吗……',
    );
    await digital.say_and_wait(
      '以前我都是作为观众那一方的……居然想要追上什么的，太得意忘形啦……',
    );
    await digital.say_and_wait(
      '我也是最近，才有那种『认真去跑』觉悟的普通底层人而已……',
    );
    await halo.say_and_wait([
      '啊啦，看起来相当地没自信啊。不过，真仅此而已吗？',
      sys_get_callname(61, 0),
      '，',
      sys_get_colored_callname(61, 19),
      ' 的实力，你应该知道的吧？',
    ]);
    await me.say_and_wait('要是在现在的沙地的话，数码是不会输的。');
    await era.printAndWait([
      digital.get_colored_name(),
      ' ',
      digital.sex,
      '仍在在意现在的 ',
      halo.get_colored_name(),
      '。',
    ]);
    await digital.say_and_wait([
      sys_get_colored_callname(19, 61),
      '……现在……和原来相差甚远……是吧……',
    ]);
    await digital.say_and_wait([
      '今年春天，在『',
      race_infos[race_enum.takm_kin].get_colored_name(),
      '』上的胜利，然后就……流利的跑姿，身体的跃动感，该说都没这次比赛的实力了吗……',
    ]);
    await digital.say_and_wait(
      '我知道的，正因为每次都扶着栅栏探出身子去看的啊。',
    );
    await digital.say_and_wait([
      '现在的 ',
      sys_get_colored_callname(19, 61),
      ' 有多么痛苦，因为我也出道了，所以我也能……知道了一些……',
    ]);
    await era.printAndWait([
      '成为选手后的 ',
      digital.get_colored_name(),
      '，比起以前，所能触碰到的都更多了，像这样的感情也是。',
    ]);
    await halo.say_and_wait([
      '所以才没心情吗……这样啊，哼……',
      sys_get_colored_callname(61, 19),
      ' 你……',
    ]);
    await halo.say_and_wait('是笨蛋啊。');
    await digital.say_and_wait('诶？');
    await era.printAndWait([
      '意外之外的话语让 ',
      digital.get_colored_name(),
      ' 吃了一惊。',
    ]);
    await halo.say_and_wait('笨蛋，还是大笨蛋。');
    await halo.say_and_wait('你看着很了解我，但还啥都不懂呢。');
    await era.printAndWait('严厉的话语，却带着温柔的声音。');
    await halo.say_and_wait([
      '那个，',
      sys_get_colored_callname(61, 19),
      '，你对我这个',
      digital.uma_sex_title,
      '，很感兴趣吧？',
    ]);
    await digital.say_and_wait('！是的！');
    await halo.say_and_wait(
      '这样吧，在合宿结束后，我赐予你和我一起训练的权利！',
    );
    await halo.say_and_wait([
      '让你看看，',
      halo.get_colored_name(),
      ' 是怎样的',
      digital.uma_sex_title,
      '！',
    ]);
    await digital.say_and_wait('请务必！');
    await digital.say_and_wait([
      '太过于光荣连尾巴都弹跳起来了！数码居然要和那个',
      digital.sex_code - 1 ? '女神' : '神明',
      '一起！',
    ]);
    await era.printAndWait([
      '在夏天的末尾，',
      digital.get_colored_name(),
      ' 和憧憬的',
      digital.uma_sex_title,
      '建立了联系。',
    ]);
  };

  handlers[47 + 37] = async (digital) => {
    await print_event_name('一流的条件', digital);
    const halo = get_chara_talk(61);
    await digital.print_and_wait([
      '在 ',
      digital.get_colored_name(),
      ' 向着 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      ' 前进的同时，',
      halo.get_colored_name(),
      ' 也在同时做出努力。',
    ]);
    await digital.print_and_wait([
      race_infos[race_enum.sprt_sta].get_colored_name(),
      '，短距离G1比赛，理论上应该是 ',
      halo.get_colored_name(),
      ' 的优势……',
    ]);
    await digital.print_and_wait('——第七名');
    await digital.print_and_wait('连入着都没有。');
    await digital.print_and_wait([
      '赛后不久，',
      digital.get_colored_name(),
      ' 就来到 ',
      halo.get_colored_name(),
      ' 面前。',
    ]);
    await halo.say_and_wait([
      '你来看了呢，',
      sys_get_colored_callname(61, 19),
      '，不要管我——本来是想这样说的，但既然是你，就给你和我待在一起的权利吧。',
    ]);
    await digital.say_and_wait([
      '那个……虽然最终没能到达，但 ',
      sys_get_colored_callname(19, 61),
      ' 的美妙，再次让我钦佩不已。',
    ]);
    await digital.say_and_wait('锐利的眼神，散发的品格，华丽的过弯！');
    await halo.say_and_wait('……仅此而已吗？');
    await digital.say_and_wait('诶？');
    await halo.say_and_wait('觉得我是一流的理由，仅此而已吗？');
    await digital.print_and_wait([
      digital.get_colored_name(),
      ' 接着再说了很多，但是……',
    ]);
    await halo.say_and_wait('……为了成为一流，有一件比什么都重要的东西……');
    await digital.print_and_wait('赛后的赛场，人都差不多走光了。');
    await digital.print_and_wait([
      halo.get_colored_name(),
      '，走到了赛道的起跑线，做出了起跑姿势。',
    ]);
    await halo.say_and_wait('机会难得，接下来要和我一起跑吗？');
    era.drawLine();
    await digital.print_and_wait([
      '毕竟是刚刚才比赛后，能显然看出 ',
      halo.get_colored_name(),
      ' 的乏力。',
    ]);
    await halo.say_and_wait('哈……哈……咳……呵呵呵……真是，难看啊。');
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      '，现在的我怎么样，无论是锐利的眼神，品格还是华丽，全都没有了。',
    ]);
    await halo.say_and_wait('没有留下任何一流证据的我，还是一流吗？');
    await digital.say_and_wait('这……那是……');
    await halo.say_and_wait('不过，即使是这样的我——');
    await digital.print_and_wait([
      '在比赛中看到的锐利的眼神，再一次出现在了现在的 ',
      halo.get_colored_name(),
      ' 身上。',
    ]);
    await halo.say_and_wait('再比一场的话，会怎么样？');
    await halo.say_and_wait('如果不行，明天再比一场，会怎么样？');
    await halo.say_and_wait('就算明天失败了，后天再来一次，又会怎样？');
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      '！你看看，现在的我，真的什么都不剩了？',
    ]);
    await digital.say_and_wait('！');
    await digital.say_and_wait(
      '还有留下来的！就像开拓的罗盘，万年的寒冰，不会改变！',
    );
    await halo.say_and_wait('——不屈的执念。就算被打垮也不会屈服的心。');
    await halo.say_and_wait('只有这一份，谁都无法从我这里拿走。');
    await halo.say_and_wait('这正是，我这个King，身为永远的一流的原因哟！');
    await digital.print_and_wait([
      '即便实力衰退，但是，',
      halo.get_colored_name(),
      ' 那「一流」的精神，不屈的意志，从来没有衰减。',
    ]);
    await digital.say_and_wait([
      '哦哦哦……',
      sys_get_colored_callname(19, 61),
      '……！',
    ]);
    await digital.print_and_wait([
      '即便遍体鳞伤，',
      halo.get_colored_name(),
      ' 的姿态还是如此美丽。',
    ]);
    await halo.say_and_wait([
      '我向你做出约定，我在『',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '』会回到之前的状态！',
    ]);
    await halo.say_and_wait('如果要同情我，不使出全力的话，也太过于失礼了。');
    await digital.say_and_wait('是，我明白了。一流的碎片……我收下了。');
    await digital.say_and_wait('不过，在这个时候，请允许我说一句话……');
    await digital.say_and_wait([
      '您果然是……',
      halo.sex_code - 1 ? '女神' : '神明',
      '……',
    ]);
  };

  handlers[95 + 17] = async (digital) => {
    await print_event_name(
      ['观战 ', race_infos[race_enum.nhk_cup].get_colored_name()],
      digital,
    );
    await era.printAndWait([
      '与 ',
      digital.get_colored_name(),
      ' 一同来观看去年 ',
      digital.get_colored_name(),
      ' 奋斗过的 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '最近来 ',
      digital.get_colored_name(),
      ' 也关注起了后辈，其中最引起',
      digital.sex,
      '注意的——',
    ]);
    await era.printAndWait([
      '也是今年 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      ' 取得胜利的是，最近很火的新人——黑船。',
    ]);
    await digital.say_and_wait(
      '唔噢噢噢，大幅的步伐，修长的玉腿！我，我已经！',
    );
    await digital.say_and_wait([
      '黑船，',
      digital.sex,
      '，',
      digital.sex,
      '跑过在我奔跑过的草地啊！',
    ]);
    await digital.say_and_wait('感觉，内心中的感觉要迸发出来了！');
    await era.printAndWait([
      '接着 ',
      digital.get_colored_name(),
      ' 立刻跑到了栅栏边……',
    ]);
    await digital.say_and_wait(
      '黑船桑！加油啊！无论之后会遇到什么，前辈们都会帮助你的！',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '，从去年的 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      ' 以来经历了很多，',
    ]);
    await era.printAndWait([
      '过去一年，再次看到有新世代出现，这蹄迹的延续，想必让 ',
      digital.get_colored_name(),
      ' 感慨万千吧。',
    ]);
    await era.printAndWait([
      '回到这里的 ',
      digital.get_colored_name(),
      '，开始再次介绍起来了黑船……',
    ]);
    era.println();
    await era.printAndWait([
      '因为在对多种场地的适应性上，黑船都与 ',
      digital.get_colored_name(),
      ' 很像，这也让 ',
      digital.get_colored_name(),
      ' 带有一种亲切感。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 已经从单纯地仰慕偶像的人，变到可以成为前辈关怀后辈的人了。',
    ]);
  };

  handlers[95 + 23] = async (digital, me) => {
    const opera = get_chara_talk(15),
      dotou = get_chara_talk(58),
      d_call_o = sys_get_colored_callname(19, 15),
      d_call_do = sys_get_colored_callname(19, 58);
    await print_event_name('勇者挑战', digital);
    await era.printAndWait([
      '终于，',
      digital.get_colored_name(),
      ' 赶在夏合宿前参加了诸多大型比赛，想必也终于积累了足够的经验。',
    ]);
    await era.printAndWait([
      '跟着 ',
      digital.get_colored_name(),
      ' 回忆了一下之前的比赛，又是许多的相遇啊。',
    ]);
    await digital.say_and_wait([
      '好！这下是时候了！虎牢关之战！该向 ',
      d_call_o,
      ' 和 ',
      d_call_do,
      ' 发出挑战书了！',
    ]);
    await digital.say_and_wait('嗯……稍等，该选哪项比赛比较好？');
    await era.printAndWait([
      '这么说确实，',
      opera.get_colored_name(),
      ' 和 ',
      dotou.get_colored_name(),
      ' 赛场适性的话，泥地适性都比较差，距离适性的话，则是英里适性比较差。',
    ]);
    await era.printAndWait([
      '而 ',
      digital.get_colored_name(),
      ' 在长距离适性也不佳……',
    ]);
    await me.say_and_wait(
      '要真是说要挑战的话，果然还是黄金的草地中距离比赛啊。',
    );
    await era.printAndWait('不过，这……');
    await digital.say_and_wait([
      '的确……我也不想将',
      digital.couple_title,
      '拉到我身边的泥塘……果然还得是堂堂正正地比一场。',
    ]);
    await era.printAndWait([
      '和现在已经不仅仅是自称霸王的 ',
      opera.get_colored_name(),
      ' 还有紧随其后的 ',
      dotou.get_colored_name(),
      '，在黄金距离竞赛……',
    ]);
    await me.say_and_wait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '，这是最合适的比赛了。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 会在这场比赛上吃不到一点优势的。',
    ]);
    await digital.say_and_wait(
      '对！就是这个！东京2000米草地赛道，没有比这更合适的了！',
    );
    await me.say_and_wait('真的可以吗？');
    await digital.say_and_wait('吼诶？什么意思？');
    await me.say_and_wait('会相当吃力的哦？');
    await era.printAndWait([
      '即使是 ',
      digital.get_colored_name(),
      '，面对这种情况，也有点哑口无言。',
    ]);
    await digital.say_and_wait(
      '……啊，天性如此啊，就好像玩游戏不愿意开最低难度，不愿意穿赠送的DLC强力装备差不多……',
    );
    await digital.say_and_wait('还有，我，想要看到最棒的奔跑！');
    await digital.say_and_wait('所以，你一定能奉陪我吧！');
    await me.say_and_wait('当然！');
    await era.printAndWait([digital.get_colored_name(), ' 本是如此啊。']);
  };
};
