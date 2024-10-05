const era = require('#/era-electron');

const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');
const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 31] = async (maya, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:24:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    await print_event_name('祭典', maya);
    const sunday = get_chara_talk(55);
    const nice_nature = get_chara_talk(60);
    await era.printAndWait('这是发生在夏季合宿的事──');
    await maya.say_and_wait(['啊，', callname, '！你今天晚上有空吗？']);
    await maya.say_and_wait('其实……');
    await sunday.say_and_wait([
      '啊，是 ',
      sys_get_colored_callname(55, 24),
      '☆',
    ]);
    await maya.say_and_wait([
      '哇，是 ',
      sys_get_colored_callname(24, 55),
      '！哈喽哈喽☆',
    ]);
    await sunday.say_and_wait([
      '哈喽哈喽＆Marvelous☆啊哈哈，',
      sys_get_colored_callname(55, 24),
      '★',
    ]);
    await era.printAndWait([maya.sex, '是 ', sunday.get_colored_name(), '。']);
    await sunday.say_and_wait([
      '今晚一起去逛祭典吧☆我也有邀 ',
      sys_get_colored_callname(55, 60),
      '，',
      maya.sex,
      '也会来★',
    ]);
    await nice_nature.say_and_wait([
      '暂停一下。那边的失控',
      maya.get_child_sex_title(),
      '给我等等。我还只是『受到邀约』而已吧？',
    ]);
    await sunday.say_and_wait([
      '别在意这种小事～☆所以说 ',
      sys_get_colored_callname(55, 24),
      '，我们约几点集合？',
    ]);
    await maya.say_and_wait('啊，对耶！关于这件事……');
    await maya.say_and_wait([
      '我这次先不参加！我今晚想和 ',
      callname,
      ' 来场秘密特训！',
    ]);
    await sunday.say_and_wait('咦咦────！？');
    await nice_nature.say_and_wait('哦……？');
    era.printButton('「我们有约好那种事吗？」', 1);
    await era.input();
    await maya.say_and_wait('嗯，我正准备跟你说！');
    await maya.say_and_wait([
      '事情就是这样，',
      sys_get_colored_callname(24, 55),
      ' 和 ',
      sys_get_colored_callname(24, 60),
      ' 就去祭典开心玩吧！',
    ]);
    await maya.say_and_wait(['那么，', callname, '。我们走吧♪']);
    await nice_nature.say_and_wait([
      '哦……？闪耀',
      maya.get_child_sex_title(),
      '真的很迷恋 ',
      callname,
      ' 呢～',
    ]);
    await sunday.say_and_wait('…………');
    await nice_nature.say_and_wait([
      '我说，喂～？',
      sys_get_colored_callname(60, 55),
      ' 有在听吗？',
    ]);
    await sunday.say_and_wait([sys_get_colored_callname(60, 55), '────！']);
    await nice_nature.say_and_wait('呀！？');
    await sunday.say_and_wait([
      sys_get_colored_callname(55, 24),
      ' 真是太美丽了☆让我认识了我所没有的美丽★',
    ]);
    await nice_nature.say_and_wait('什、什么……？');
    await sunday.say_and_wait([
      sys_get_colored_callname(55, 60),
      '！我们也必须跟上！进行不输给 ',
      sys_get_colored_callname(55, 24),
      ' 的特训！',
    ]);
    await sunday.say_and_wait('打铁就要趁热才Marvelous☆好，走吧！！');
    await nice_nature.say_and_wait('什、什么～～！？等等，别拉我啊──！！');
    era.drawLine();
    await maya.say_and_wait('哈……呼……');
    await maya.say_and_wait([
      '好，做完三组了！',
      callname,
      '，接下来要训练什么？',
    ]);
    await era.printAndWait('（咻……）');
    await maya.say_and_wait('嗯？刚才的是──');
    await era.printAndWait('（咚……啪啦啪啦……）');
    await maya.say_and_wait(['哇！是烟火！', callname, '，是烟火耶！！']);
    await maya.say_and_wait('啊哈哈，好大。没想到连这边都看得到。');
    await maya.say_and_wait('嘿嘿。在会场看的话，不知道会有多美呢？');
    era.printButton('「你果然想参加祭典吗？」', 1);
    await era.input();
    await maya.say_and_wait('……嗯～没关系！');
    await maya.say_and_wait('毕竟祭典以后再参加就好了。');
    await maya.say_and_wait([
      '等我在『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』取得胜利，牢牢抓住 ',
      callname,
      ' 的心之后再去！',
    ]);
    era.printButton('「你已经抓住我的心了」（力量+20）', 1);
    era.printButton('「那你可得好好加油了呢」（根性+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('咦，真的吗？可是……');
      await maya.say_and_wait('一定还抓得不够紧！人家是这么想的！');
      await maya.say_and_wait([
        '人家要让 ',
        callname,
        ' 彻底迷上我，变得没有我就不行！',
      ]);
      await maya.say_and_wait(['嘻嘻，', callname, '，你要做好心理准备哦♪']);
      await era.printAndWait([
        '──说完之后，',
        maya.get_colored_name(),
        ' 继续在海滩上跑了起来。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
    } else {
      await maya.say_and_wait('呵呵。对我来说根本不算什么♪');
      await maya.say_and_wait('因为我可是还在成长期！一下子就能办到了！');
      await maya.say_and_wait([
        '我要拿下『',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '』和其他比赛的胜利，让 ',
        callname,
        ' 迷上我！',
      ]);
      await maya.say_and_wait([
        '等我和 ',
        callname,
        ' 再次迎接夏天的时候，一定要在海边给我大人的奖励……',
      ]);
      await era.printAndWait('（咻……咚────！！）');
      await maya.say_and_wait('咦，咦咦～！？怎么挑在这时候发射～！？');
      await maya.say_and_wait('烟火你这大大大笨蛋──！给我看气氛啦！');
      await era.printAndWait('（咚────！！）');
      await maya.say_and_wait('唔～刚才气氛很好的说～！真是的～！！');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 不断地跳上跳下，对着烟火发脾气……',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers[95 + 4] = async (maya, me, callname) => {
    await print_event_name('青春的闪耀', maya);
    const teio = get_chara_talk(3);
    const amazon = get_chara_talk(12);
    const nice_nature = get_chara_talk(60);
    await era.printAndWait([
      '资深级的春天到来了。最近 ',
      maya.get_colored_name(),
      ' 的训练是──',
    ]);
    await maya.say_and_wait([callname, '！跑三圈赛道太没意思了！']);
    await maya.say_and_wait('人家现在要跑三十圈才行！');
    era.printButton('「这对脚的负担太大了哦」', 1);
    await era.input();
    await maya.say_and_wait('咦──！？那么那么，赶快想接下来要做什么训练。');
    await maya.say_and_wait([
      '人家可是知道，',
      callname,
      ' 一定会让我很开心！',
    ]);
    await maya.say_and_wait(
      '啊。昨天给我的课题列表，我已经全部种类都做得到了！所以最好是上面没有的☆',
    );
    await era.printAndWait([
      '……就这样，',
      me.get_colored_name(),
      ' 每天都被要求提供新的训练。',
    ]);
    await era.printAndWait([
      '不过，',
      maya.get_colored_name(),
      ' 已经订下了目标，想要努力去达成。帮助',
      maya.sex,
      '实现目标是训练员的职责──',
    ]);
    await maya.say_and_wait(['早安！', callname, '！今天也加油吧！']);
    await maya.say_and_wait(['咦，', callname, '。你的脸色好像很苍白……']);
    await maya.say_and_wait(['啊，', callname, '！？']);
    await era.printAndWait('（……咚）');
    await amazon.say_and_wait('……哎呀，好险啊。');
    await amazon.say_and_wait('你差点就要倒下去了。');
    era.printButton('「是你扶住我的吗……？」', 1);
    await era.input();
    await amazon.say_and_wait('哈哈，不用向我道谢。没什么大不了的。');
    await amazon.say_and_wait('不过，你黑眼圈好重……看起来没什么睡啊。');
    await amazon.say_and_wait([
      '我说啊，',
      sys_get_colored_callname(12, 24),
      '！',
    ]);
    await maya.say_and_wait('啊、啊哇哇……');
    await amazon.say_and_wait([
      sys_get_colored_callname(12, 24),
      '！别在那边害怕，快回话！',
    ]);
    await maya.say_and_wait('是、是的！！');
    await amazon.say_and_wait([
      '……嗯，行了。那么，',
      sys_get_callname(12, 0),
      '，你就在这休息吧。',
    ]);
    await amazon.say_and_wait('这家伙就由我来照顾。');
    era.printButton('「咦！？」', 1);
    await era.input();
    await amazon.say_and_wait([
      '哈哈，别这么慌张啦。我又不会把',
      maya.sex,
      '吃了。',
    ]);
    if (new RaceHistory(24).get_result(95)?.race === race_enum.arim_kin) {
      await amazon.say_and_wait([
        '之前在『',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '』上的开战宣言……老实说，让我印象深刻。',
      ]);
    }
    await amazon.say_and_wait('所以也让我帮你们一把吧。');
    await amazon.say_and_wait('我也不想让人独占这么前途无量的孩子。');
    await maya.say_and_wait([
      '咦──！？',
      sys_get_colored_callname(24, 12),
      '……！？',
    ]);
    await maya.say_and_wait([
      '啊哇哇哇……！？对、对不起。我心中只有 ',
      callname,
      '……！',
    ]);
    await amazon.say_and_wait(
      '……我说，你可以冷静一点吗？这只是一个提案罢了。重点是你『想不想变强』。',
    );
    await amazon.say_and_wait([
      '如何，',
      sys_get_callname(12, 0),
      '。要把',
      maya.sex,
      '暂时交给我吗？',
    ]);
    await era.printAndWait([
      '──「女杰」',
      amazon.get_colored_name(),
      '。',
      maya.sex,
      '在去年和今年的「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」上，都可算是 ',
      get_chara_talk(16).get_colored_name(),
      ' 的劲敌。',
    ]);
    await era.printAndWait([
      '如果为 ',
      maya.get_colored_name(),
      ' 着想的话，',
      me.get_colored_name(),
      ' 不应该坚持自己的策略，也应该要借助',
      maya.sex,
      '的意见……！',
    ]);
    era.printButton('「那就拜托你了！」', 1);
    await era.input();
    await amazon.say_and_wait('好，这才像话嘛！菱亚流的训练要开始了！');
    era.drawLine();
    await amazon.say_and_wait([
      '所以说，',
      sys_get_colored_callname(12, 24),
      '。你要不停跑来跑去，不要让我抓到尾巴。',
    ]);
    await maya.say_and_wait(
      '咦，这不就是『抓尾巴游戏』？人家在幼稚园的时候是有玩过……',
    );
    await maya.say_and_wait('这真的算是训练吗？……感觉只是在玩吧？');
    await amazon.say_and_wait('哦，还真从容啊。那就开始吧。');
    await maya.say_and_wait('唔、唔唔……');
    await amazon.say_and_wait('喂喂，怎么啦？已经被抓超过十次咯！');
    await maya.say_and_wait([
      '还不是 ',
      sys_get_colored_callname(24, 12),
      ' 太奸诈了！突然增加鬼的数量！',
    ]);
    await teio.say_and_wait([
      '呵呵！接着换我抓 ',
      sys_get_colored_callname(3, 24),
      ' 哦！',
    ]);
    await nice_nature.say_and_wait('哦哦，好像玩得很开心……');
    await nice_nature.say_and_wait([
      '我说，',
      sys_get_colored_callname(60, 12),
      ' 啊。像现在这样子帮忙就行了吗？',
    ]);
    await amazon.say_and_wait([
      '嗯，这样很好！谢啦！……那么，',
      sys_get_colored_callname(12, 24),
      '。',
    ]);
    await amazon.say_and_wait('简单来说，你的弱点就是察觉力不足。');
    await maya.say_and_wait('……察觉力？');
    await maya.say_and_wait(
      '察觉不就是指知道事情吗？那我已经知道了哦，不管是规则或逃跑方式。',
    );
    await maya.say_and_wait([
      '但是，',
      sys_get_colored_callname(24, 12),
      ' 立刻就改变鬼的数量和规则！太卑鄙了──',
    ]);
    await amazon.say_and_wait(
      '真是的，就说了你的察觉力……不对，应该说你都不打算去察觉。',
    );
    await maya.say_and_wait('……咦？');
    await amazon.say_and_wait('就我的观察，你好像有很优秀的才能跟训练员。');
    await amazon.say_and_wait(
      '你应该是真的什么都办得到吧。所以你身边的大人也都为你付出很多。',
    );
    await amazon.say_and_wait('只是啊，你太过依赖他人了。');
    await amazon.say_and_wait(
      '现在也是，你一旦懂了……不对，是认为自己懂了之后……',
    );
    await amazon.say_and_wait(
      '『就不打算理解自己不懂的事』……是你自己养成了这种习惯。',
    );
    await amazon.say_and_wait('我并不是在玩『抓尾巴游戏』。这是比赛的训练。');
    await amazon.say_and_wait(
      '再动点脑筋去想。在真正的赛场上，你会被好几个选手盯上。途中战略也会改变。',
    );
    await amazon.say_and_wait(
      '到时候你该怎么办？应该会根据当下情况灵活的逃跑……我没说错吧？',
    );
    await maya.say_and_wait('……唔。');
    await amazon.say_and_wait('……我就顺便提一下，今天早上也是。');
    await amazon.say_and_wait([
      '你之前有注意到，',
      sys_get_callname(12, 0),
      ' 为了你逞强过头了吗？',
    ]);
    await maya.say_and_wait('……！');
    await amazon.say_and_wait('你难得有这么优秀的才能，就该把它发挥到极致。');
    await amazon.say_and_wait([
      '还是说你要当个会哭着说『我不跑了！』，让 ',
      sys_get_callname(12, 0),
      ' 一个头两个大的小孩子吗？',
    ]);
    await maya.say_and_wait('唔～～！人家才不会这样！！');
    await maya.say_and_wait('人家要成为成熟的女人！才不会哭！');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 12),
      '！再来一次！！这次我一定不会被抓到！',
    ]);
    await amazon.say_and_wait('哈哈，不错。那就开始吧！！');
    await maya.say_and_wait('哼──！再一次！我可是已经『懂了』呢！！');
    await amazon.say_and_wait('哦！很好，就是这种！要让身体记住，而不是脑袋！');
    await era.printAndWait([
      '──在灿烂的夕阳余晖照耀下，一群 ',
      maya.get_teen_sex_title(),
      ' 流着汗，不断在赛道上奔跑。',
    ]);
  };

  handlers[95 + 6] = async (maya, me, callname) => {
    era.set('cflag:24:节日事件标记', 0);
    await print_event_name('情人节', maya);
    const snow = get_chara_talk(29);
    era.println();
    await era.printAndWait([
      '午休时间，当 ',
      me.get_colored_name(),
      ' 正走在校内时──',
    ]);
    await maya.say_and_wait([
      '嗯～♪',
      sys_get_colored_callname(24, 29),
      ' 的巧克力好好吃～♪',
    ]);
    await snow.say_and_wait([
      '嘿嘿。',
      sys_get_colored_callname(29, 24),
      ' 送我的巧克力也超好吃的～',
    ]);
    await snow.say_and_wait('而且包装也很华丽，亮晶晶的！你是在哪买到的？');
    await maya.say_and_wait([
      '哼哼哼……因为我是成熟的',
      maya.get_phy_sex_title(),
      '！一下子就能找到正流行的店了☆',
    ]);
    await snow.say_and_wait([
      '哇……！是『城市',
      maya.get_child_sex_title(),
      '』耶！',
    ]);
    await maya.say_and_wait('嗯哼！逛街感到犹豫的时候，就交给人家吧！');
    await maya.say_and_wait(['……啊！是 ', callname, '！哈喽☆']);
    await maya.say_and_wait(
      '嘻嘻，是不是等不及收到人家的巧克力了？受不了，真拿你没办法♪',
    );
    await maya.say_and_wait([
      sys_get_colored_callname(24, 29),
      '，那我先走咯──！接下来是大、人、的、时、间☆',
    ]);
    await snow.say_and_wait(
      '大、大人……大人的时间！？你、你你、你们要做什么～！？',
    );
    await era.printAndWait([
      '应该没有要做什么才对……不过，',
      me.get_colored_name(),
      ' 还来不及解开 ',
      snow.get_colored_name(),
      ' 的误会，立刻就被 ',
      maya.get_colored_name(),
      ' 拉着走……',
    ]);
    await maya.say_and_wait('来，给你！这是人家要送你的巧克力哦。');
    await maya.say_and_wait('嘿嘿，快打开，快打开☆');
    await era.printAndWait([
      '在',
      maya.sex,
      '期待的眼神下，',
      me.get_colored_name(),
      ' 打开了',
      maya.sex,
      '给 ',
      me.get_colored_name(),
      ' 的小盒子。里面装的是──',
    ]);
    await era.printAndWait(
      '……量多到让人怀疑到底是要装多满，塞满整个盒子的巧克力。',
    );
    await maya.say_and_wait(
      '上头有星星的是在百货公司买的。爱心的则是在车站里的专卖店买的！',
    );
    era.printButton('「你买了好多呢」', 1);
    await era.input();
    await maya.say_and_wait('嘿嘿，我为了今天，一个人跑了许多家店哦！');
    await maya.say_and_wait('所、以、说……');
    await maya.say_and_wait('我送了这么多巧克力，你要好好跟我约会，当作回礼♪');
    era.drawLine();
    await era.printAndWait([
      '接着，这天在 ',
      maya.get_colored_name(),
      ' 的希望下，',
      me.get_couple_title(),
      ' 出门去了巧克力专卖店。',
    ]);
    await era.printAndWait('……看起来有种手工制朴素感的巧克力杯子蛋糕。');
    await era.printAndWait(
      '虽然也有几个巧克力溢出到小纸杯外的成品，不过每一个都做得很仔细──',
    );
    era.printButton('「看起来很好吃呢」', 1);
    await era.input();
    await maya.say_and_wait('哇…………！');
    await maya.say_and_wait(['嘿嘿……', callname, '。等你吃完也要这么说哦☆']);
    await maya.say_and_wait([
      '嘻嘻，因为这是特别的 ',
      maya.name,
      ' 蛋糕，在外面是买不到的！',
    ]);
    await maya.say_and_wait('……真的很特别哦。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 吃着有点甜的巧克力杯子蛋糕，度过了这一天。',
    ]);
  };

  handlers[95 + 14] = async (maya, me, callname) => {
    era.set('cflag:24:节日事件标记', 0);
    await print_event_name('粉丝感谢祭', maya);
    const amazon = get_chara_talk(12);
    await era.printAndWait([
      '粉丝感谢祭。这是会招待平时支持赛',
      maya.get_uma_sex_title(),
      '的粉丝前来参加的祭典。',
    ]);
    await era.printAndWait('春季感谢祭的重头戏是运动对抗赛等活动──');
    await maya.say_and_wait(
      '哈哈，气氛好热烈～☆欸欸，下个项目是沙土2000米耶～！',
    );
    await amazon.say_and_wait('……呃，你不是有参加吗！快点过去吧！');
    await maya.say_and_wait([
      '咦～！？不要不要！我正在和 ',
      callname,
      ' 约会耶～！',
    ]);
    era.printButton('「慢走！」', 1);
    await era.input();
    await maya.say_and_wait(['咦，怎么连 ', callname, ' 也这样！？']);
    era.drawLine();
    await maya.say_and_wait([
      '真是的……',
      sys_get_colored_callname(24, 12),
      ' 好过分哦～我难得的约会……',
    ]);
    await amazon.say_and_wait(
      '……受不了。虽说今天确实是祭典没错，但你可别玩太疯了。',
    );
    await amazon.say_and_wait('你难道忘了吗？仔细看向你的四周。');
    await amazon.say_and_wait('然后用心注意。');
    await maya.say_and_wait('……四周……？');
    await get_chara_talk(40).say_and_wait('……呵。让你们见识我的力量。');
    await get_chara_talk(6).say_and_wait('嗯……还不错。');
    await get_chara_talk(46).say_and_wait(
      '嗯～大家都在看飞鹰子☆呀～干脆就这样独占大家的目光吧♪',
    );
    await amazon.say_and_wait('……怎么样？');
    await maya.say_and_wait('……我好像很少跟那些人比赛。');
    await amazon.say_and_wait('没错。许多你很少对上的对手正集聚一堂。');
    await amazon.say_and_wait('这次的比赛的确不是正式比赛。但正因为这样──');
    await amazon.say_and_wait('才有办法跟平常遇不到的对手来场正面对决。');
    await amazon.say_and_wait(
      '不管是怎样的比赛，能跟那些人同场较量的机会一生只有一次。',
    );
    await amazon.say_and_wait('所以每场比赛都要不顾一切地……去好好享受。');
    await maya.say_and_wait('……不顾一切地，去享受。');
    await amazon.say_and_wait('对。所以你在这场比赛中，也会更加成长吧！然后──');
    await maya.say_and_wait('……成长！？大人！？');
    await maya.say_and_wait([
      '收到☆我今天要把 ',
      sys_get_colored_callname(24, 12),
      ' 甩在后头抵达终点！',
    ]);
    await amazon.say_and_wait('喂！？你那样也有点太得意忘形了吧！？');
    await era.printAndWait('接着，沙土2000米开赛了──');
    era.drawLine();
    const chara = sys_get_chara_pseudo(24);
    await simulation_game_in_event(
      chara,
      undefined,
      race_enum.siri_sta,
      '粉丝感谢祭',
    );
    if (chara.rank.curr === 1) {
      await maya.say_and_wait([callname, '────！我拿到了第一名哦──☆']);
      era.printButton('「真是厉害！」', 1);
      await era.input();
      await maya.say_and_wait('嘿嘿……再多多夸奖我一点☆');
      await amazon.say_and_wait([
        '……真是前途无量的',
        maya.get_child_sex_title(),
        '。没想到不只是赢过了我，还赢过了那些人……',
      ]);
      await maya.say_and_wait([
        '嘻嘻。',
        sys_get_callname(24, 12),
        '，谢谢你让我认真参加这场比赛！',
      ]);
      await maya.say_and_wait('我跑得非常开心哦！非常地……兴奋。');
      await maya.say_and_wait(
        '我想了只有在这场比赛才办得到的事情，并思考了很多作战。',
      );
      await maya.say_and_wait(
        '──我已经在这场比赛里，把最精彩的跑法全都展现出来了。',
      );
      await amazon.say_and_wait('唔……！全都是你临场想出来的吗？');
      await amazon.say_and_wait([
        '这',
        maya.get_child_sex_title(),
        '，真的是前途无量呢……！',
      ]);
      await era.printAndWait([
        '摩耶重炮正一步一步脚踏实地在变强，',
        me.get_colored_name(),
        ' 度过了让 ',
        me.get_colored_name(),
        ' 确实体会到这点的一天。',
      ]);
    } else {
      await maya.say_and_wait(['唔唔……', callname, '……']);
      await amazon.say_and_wait([
        '哈哈哈！',
        sys_get_colored_callname(12, 24),
        '！你输得还真惨啊。',
      ]);
      await amazon.say_and_wait(
        '不过，这也是个好机会。你就仔细看好赢家的脸，把这份不甘化作动力吧。',
      );
      await amazon.say_and_wait('我也是这么变强的……嘿嘿。');
      await maya.say_and_wait('唔唔唔……为了变强……为了成长……！');
      await get_chara_talk(46).say_and_wait('大家～～！谢谢你们～～☆');
      await say_by_passer_by_and_wait('观众', '唔哦哦哦哦哦！！飞鹰子──！！');
      await maya.say_and_wait('哇～～讨厌讨厌讨厌！不甘心不甘心好不甘心～！！');
      await maya.say_and_wait([
        '人家也想站在那边，接受 ',
        callname,
        ' 的欢呼～！',
      ]);
      await amazon.say_and_wait([
        '唉……你真的满脑子都是 ',
        sys_get_callname(12, 0),
        ' 的事情呢。',
      ]);
      await maya.say_and_wait([
        '呜……因为人家想让 ',
        callname,
        ' 看见变成熟的我嘛。',
      ]);
      era.printButton('「我已经充分感受到你的成长咯」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await maya.say_and_wait('唔……我还要再比一次～！下次一定会赢！');
      await amazon.say_and_wait('就说了只有一次机会啦！……真受不了！');
      await era.printAndWait([
        '之后 ',
        me.get_colored_name(),
        ' 和 ',
        amazon.get_colored_name(),
        ' 合力制服了大吵大闹的 ',
        maya.get_colored_name(),
        '。',
      ]);
    }
  };

  handlers[95 + 20] = async (maya, me, callname) => {
    await print_event_name('迈向夕阳', maya);
    const teio = get_chara_talk(3);
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await brian.print_and_wait([
      '一开始只是和',
      maya.sex_code === 1 ? '哥哥' : '姐姐',
      '比谁跑得快。',
    ]);
    await brian.print_and_wait([
      '很一般的',
      maya.sex_code === 1 ? '兄弟' : '姐妹',
      '间的赛跑……真的是非常一般。',
    ]);
    await brian.print_and_wait([
      '但是我拼命地追逐着',
      maya.sex_code === 1 ? '哥哥' : '姐姐',
      '的背影，就像欣喜雀跃的野兽。',
    ]);
    await brian.print_and_wait(
      '让脚动起来，将空气吸入肺里。接着再让脚动起来──',
    );
    await brian.print_and_wait('这正是我的呼吸。');
    await brian.print_and_wait('──不久之后，我该追逐的背影消失了。');
    await brian.print_and_wait('我变成了一个人。');
    await brian.print_and_wait('就算变得孤单一人，我依然记得我的呼吸。');
    await brian.print_and_wait(
      '而且也理解到一件事情。就是我的呼吸让我感到饥渴。',
    );
    await brian.print_and_wait(
      '理解到我越是全力呼吸，喉咙就越来越渴，不会感到满足。',
    );
    await brian.print_and_wait('可是并不能停止呼吸。');
    await brian.print_and_wait('就算呼吸开始带来痛苦，这也是为了要生存。');
    await brian.print_and_wait('不过，如果……如果这副身体──');
    await brian.print_and_wait('将来有一天拒绝我的呼吸的话──');
    await brian.print_and_wait('……应该会是在那个时候吧。');
    await brian.print_and_wait('呼……呼……！');
    await brian.print_and_wait('哼……我是……不会输的！');
    era.drawLine();
    await amazon.say_and_wait('那家伙……还跑得下去啊。');
    await amazon.say_and_wait([
      '哼……',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 可不是只有 ',
      sys_get_colored_callname(12, 24),
      ' 哦。我也一定会追上你的……！',
    ]);
    await teio.say_and_wait([
      '好了好了，',
      sys_get_colored_callname(3, 12),
      ' 就先不提，',
      sys_get_colored_callname(3, 24),
      ' 的下场比赛是『',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '』吧？那就好好休息吧。',
    ]);
    await teio.say_and_wait([
      '咦，',
      sys_get_colored_callname(3, 24),
      '？有听到吗？',
    ]);
    await maya.say_and_wait('……我知道了。');
    await amazon.say_and_wait(['……', sys_get_colored_callname(12, 24), '？']);
    await maya.say_and_wait('可是，这不是真的吧……怎么有这种事……');
    await maya.say_and_wait('因为，怎么可能会……！');
    await amazon.say_and_wait([sys_get_colored_callname(12, 24), '！？']);
    await maya.say_and_wait('呼啊……呼啊……呼啊……');
    era.printButton(`「……${sys_get_callname(0, 24)}」`, 1);
    await era.input();
    await maya.say_and_wait([callname, '。']);
    era.printButton('「你知道什么了吗？」', 1);
    await era.input();
    await maya.say_and_wait('……');
    await maya.say_and_wait('我发现到了一件事。');
    await maya.say_and_wait('那个太阳虽然很耀眼，却是个夕阳。');
    await maya.say_and_wait(
      '要是不快点，就会下沉了。下沉到没有人到得了的地方。',
    );
    await maya.say_and_wait(['我明明都还没跟', maya.sex, '并肩过……！']);
    era.printButton(`「你是指 ${sys_get_callname(0, 16)} 吗？」`, 1);
    await era.input();
    await maya.say_and_wait(['………………', callname, ' 也发现了吧。']);
    await maya.say_and_wait('我回想起了过去的那些事情。');
    await maya.say_and_wait('──那个人也想要感到雀跃。');
    await maya.say_and_wait([
      maya.sex,
      '只是想要全力奔跑，然后讲出『好开心』这句话。',
    ]);
    await maya.say_and_wait([
      '所以',
      maya.sex,
      '才一直不断挣扎。',
      maya.sex,
      '相信总有一天能说出那句话。',
    ]);
    await maya.say_and_wait(
      '──就算身体已经无法回应想要闪闪发亮的心情，也硬是撑着。',
    );
    await maya.say_and_wait(['……', callname, '！我不想就这么放弃。']);
    await maya.say_and_wait([
      '假如那个人真的把『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』当作最终战！',
    ]);
    await maya.say_and_wait([
      '我就在那一天以『摩耶重炮』的身份参赛，胜过',
      maya.sex,
      '，然后向',
      maya.sex,
      '炫耀！',
    ]);
    await maya.say_and_wait([
      '跟',
      maya.sex,
      '说『人家的全力比你的全力还要强吧』。',
    ]);
    await maya.say_and_wait('『人家让你感到兴奋了吧』！');
    era.printButton('「就是这股气势！」', 1);
    await era.input();
    await maya.say_and_wait('嗯！我一定会做到的！');
    await maya.say_and_wait([
      '我要在『',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '』变得更强，在『',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '』变得更快。',
    ]);
    await maya.say_and_wait([
      '然后在『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』上──',
    ]);
    await maya.say_and_wait(['──如果能超越', maya.sex, '的话……']);
    await maya.say_and_wait([
      '到时 ',
      callname,
      ' 你要只看着我，然后像『你比谁都还要耀眼』这样，称赞我哦。',
    ]);
  };

  handlers[95 + 29] = async (maya, me, callname, _, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:24:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return;
    }
    await print_event_name('夏季合宿（资深年）', maya);
    await era.printAndWait('从今天起，「夏季合宿」又要开始了！');
    await maya.say_and_wait([callname, '，欢迎回来♪来到和人家的度假会场～☆']);
    await maya.say_and_wait('今年也两个人一起度过火热的夏天吧☆');
    era.printButton('「是和大家一起度过炎热的夏天」', 1);
    await era.input();
    await maya.say_and_wait('哼──！又说这种话～！');
    await maya.say_and_wait('不过今年好像──');
    await maya.say_and_wait('真的会是目前为止最热的夏天呢。嘻嘻☆');
  };

  handlers[95 + 48] = async (maya, me, callname) => {
    era.set('cflag:24:节日事件标记', 0);
    await print_event_name('圣诞节', maya);
    await era.printAndWait([
      '在接近「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」前的某一天，',
      maya.get_colored_name(),
      ' 把 ',
      me.get_colored_name(),
      ' 找了出来。',
    ]);
    await maya.say_and_wait([callname, '，快点快点☆']);
    await maya.say_and_wait('你看你看☆这边有雪人，那边还有圣诞树哦♪');
    era.printButton('「你感觉很开心呢」', 1);
    await era.input();
    await maya.say_and_wait('嗯♪因为今天是特别约会的日子嘛！');
    await maya.say_and_wait('今天是……恋人们的平安夜☆');
    era.printButton('「还没到晚上哦」', 1);
    await era.input();
    await era.printAndWait('而且今天──');
    await maya.say_and_wait('嘻嘻，我知道啦～');
    await maya.say_and_wait('今天既不是『圣诞节当天』，也还没到晚上……不过啊。');
    await maya.say_and_wait('所以我才想说要『预约』！');
    era.printButton('「预约？」', 1);
    await era.input();
    await maya.say_and_wait(
      '没错！我其实是想在平安夜约会……不过那天已经有重要的行程了吧？',
    );
    await maya.say_and_wait(['所以说……', callname, '！']);
    await maya.say_and_wait(['帮人家拍照☆用 ', callname, ' 的手机拍！']);
    era.printButton('「用我的？」', 1);
    await era.input();
    await maya.say_and_wait('嗯！准备好了吗？可别放过快门时机哦！');
    await maya.say_and_wait('三、二、一……');
    await era.printAndWait('（喀嚓）');
    await maya.say_and_wait('啊哈哈，有把我拍得可爱吗～？要珍惜这张照片哦。');
    await maya.say_and_wait('在平安夜当晚，我会摆出那个姿势当你的礼物！');
    await era.printAndWait([
      '听到',
      maya.sex,
      '这么说，',
      me.get_colored_name(),
      ' 确认了一下照片──',
    ]);
    await era.printAndWait([
      '照片上的 ',
      maya.get_colored_name(),
      ' 一边笑着，一边大力地挥着手。',
    ]);
    await maya.say_and_wait([
      '嘿嘿☆我在 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 只会拿下第一名！',
    ]);
    await maya.say_and_wait([
      '今年的『圣诞节』，我会把最闪耀的我送给 ',
      callname,
      '！',
    ]);
    await maya.say_and_wait(['所以，', callname, ' 要把平安夜那天留给我！']);
    await maya.say_and_wait([
      '──留给我的『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』！！',
    ]);
    await era.printAndWait([
      '──看见',
      maya.sex,
      '这么宣示，让 ',
      me.get_colored_name(),
      ' 更加期待今年的「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』了。',
    ]);
    await era.printAndWait([
      '……照片上的 ',
      maya.get_colored_name(),
      ' 朝着镜头抛出了飞吻。',
    ]);
    await maya.say_and_wait([
      '嘻嘻，今年的平安夜……你要好好期待『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』赛后的演唱会哦。',
    ]);
    await maya.say_and_wait('我一定会担任主唱，只对你送上『啾』的☆');
    era.printButton('「咦！？」', 1);
    await era.input();
    await maya.say_and_wait('嘿嘿，放心放心～☆我不会让其他人发现的！');
    await maya.say_and_wait('嘻嘻……很有大人的感觉吧？');
    era.printButton('「喂！」', 1);
    await era.input();
    await maya.say_and_wait(
      '咦～有什么关系嘛☆我会趁舞台暗下来的时候偷偷来的！',
    );
    await maya.say_and_wait([
      '所、以、说～☆在『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』的演唱会上，千万不行把视线从我这个主唱身上移开♪',
    ]);
    await maya.say_and_wait([
      '还是说……',
      callname,
      ' 希望等我下舞台之后，才给你个『啾』～？',
    ]);
    await maya.say_and_wait('……这样我也可以哦。嘿嘿☆');
    await era.printAndWait([
      '……对于说出这些话的 ',
      maya.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 决定要严正叮咛',
      maya.sex,
      '，不要擅自更改舞蹈动作。',
    ]);
    await era.printAndWait([
      '不过今年的「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」──',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      ' 一定会拿下第一……担任主唱的。',
    ]);
  };
};
