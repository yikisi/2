const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const RaceHistory = require('#/data/race/model/race-history');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 14] = async (acute, me, callname, flags) => {
    era.set('cflag:100:节日事件标记', 0);
    const princess = get_chara_talk(39);
    const city = get_chara_talk(40);
    const sirius = get_chara_talk(70);
    const muteki = get_chara_talk(72);
    await print_event_name('粉丝感谢祭', acute);
    await era.printAndWait(
      '粉丝感谢祭，这是一个邀请粉丝们前往特雷森游玩的运动祭典。',
    );
    await era.printAndWait([
      '而 ',
      acute.get_colored_name(),
      ' 在这场活动中挑战的运动项目是——',
    ]);
    await acute.say_and_wait(
      '其实啊，我以前也有打过哦？嗯……我没记错的话，姿势应该是这样的——唔姆唔姆。',
    );
    await era.printAndWait([
      '——传统项目「高尔夫」，真没想到',
      acute.sex,
      '以前竟然还玩过。',
    ]);
    await acute.say_and_wait([
      '咕噜姆……话说啊，',
      callname,
      '。我要瞄准的球门——是在哪里呢？',
    ]);
    await era.printAndWait([
      '……',
      me.get_colored_name(),
      ' 赌十个胡萝卜宝石，',
      acute.get_colored_name(),
      ' 肯定是把高尔夫当足球玩了。',
    ]);
    await era.printAndWait([
      '也就是说，',
      acute.get_colored_name(),
      ' 果然不会打高尔夫。',
    ]);
    await era.printAndWait('于是，在这之后……');
    await era.printAndWait('————');
    await acute.say_and_wait('呼呼，果然还得是这个项目更适合我呢——拳击。');
    await acute.say_and_wait(
      '……咕噜姆？仔细一看的话，拳击两个字前面还写着其他的字呢——【花样拳击】？',
    );
    era.printButton('「啊，是拳击风格的体操赛吧。」', 1);
    await era.input();
    await era.printAndWait(
      '并不需要真的对打，而是只需要摆出足够唬人的拳击姿势，表现出【动作的美感】与【持久力】然后交给评委打分的比赛——',
    );
    await era.printAndWait([
      '……想想也是，都是打底有接近十万人左右粉丝的',
      acute.get_uma_sex_title(),
      '偶像。要是真在特雷森打起拳击的话，搞不好现场的粉丝能把特雷森直接变成全武行了吧。',
    ]);
    await acute.say_and_wait([
      '姆姆姆……真是可惜呢。明明 ',
      callname,
      ' 很喜欢看女人打拳击呢——',
    ]);
    await me.say_and_wait([
      '啊哈哈……',
      acute.get_colored_name(),
      '，这话千万别当着骏川',
      acute.get_adult_sex_title(),
      '的面说，我会死的。',
    ]);
    await era.printAndWait([
      '……纠正一下，',
      me.get_colored_name(),
      ' 可没有站在演讲台上用望远镜看一大群人在体育馆里打的血流满地的癖好。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 只是喜欢看',
      acute.get_uma_sex_title(),
      '们互相揪头发撕指甲的模样而已。',
    ]);
    await era.printAndWait('——仅此而已。');
    await era.printAndWait(
      '在为自己的怪癖开拓的同时，花样拳击的选手们已经开始了比赛——',
    );
    await era.printAndWait('…………');
    await sirius.say_and_wait('哈，花样拳击吗。直接来几招赛法斗就可以了吧。');
    await era.printAndWait([
      '一方，是精通法式防身术「赛法斗」的 ',
      sirius.get_colored_name(),
      '——',
    ]);
    await city.say_and_wait(
      '曾经，为了健身美体的我，曾经在遥远的东方学习过一段时间的拳术。',
    );
    await city.say_and_wait('1，2……直拳、直拳、摆拳！');
    await era.printAndWait([
      '另一方，是既是学生也是模特的超级 ',
      city.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('而裁判对这场大道之战给出的裁决是——');
    await say_by_passer_by_and_wait('裁判', '到此为止了！两位，可以退下了。');
    await acute.say_and_wait('都没能进决赛？这是为什么？');
    await say_by_passer_by_and_wait(
      '裁判',
      '在【花样拳击】的比赛过程中，天狼星同学加入了踢腿的动作差点踢掉了我的墨镜。',
    );
    await say_by_passer_by_and_wait(
      '裁判',
      '而黄金城同学则是在【花样拳击】的比赛过程中，时不时在动作的间隙下望向镜头摆POSS像是在用嘲讽技一样。',
    );
    await city.say_and_wait(
      '什！——一个不小心职业习惯就……看来这个运动项目也不简单啊。',
    );
    await era.printAndWait('……这是什么职业的职业习惯啊？');
    await era.printAndWait('而与此同时，旁边的比赛发出了巨大的声响——');
    await princess.say_and_wait('哈、哇、碴、阿——哒！');
    await era.printAndWait('——pi～ke～peng～～～！——');
    await say_by_passer_by_and_wait(
      '裁判',
      '川上公主失去资格！在比赛过程中飞起一脚直接把栏杆踹烂是不可以的违规行为啊！',
    );
    await era.printAndWait('…………');
    await say_by_passer_by_and_wait(
      '夹着头发的中年妇女粉丝',
      '孩子他爸，看见了吗？',
    );
    await say_by_passer_by_and_wait(
      '穿着病人服的中年男性粉丝',
      '看到了，正宗佛O无影脚，咸的不行。',
    );
    await say_by_passer_by_and_wait('隔壁小米粥友的年轻粉丝', '咸脚？有多咸？');
    await say_by_passer_by_and_wait('黑色高级刀疤脸刀疤脸粉丝', [
      '北部家的',
      acute.sex_code - 1 ? '女儿' : '儿子',
      '？……呵，好一套通背拳。拳风都刮到车上了。',
    ]);
    await say_by_passer_by_and_wait(
      '开车来的白衣看热闹粉丝',
      '车？我车呢！？我放这那么大的车呢！？我新提的车啊！怎么就剩个后视镜了！？',
    );
    await say_by_passer_by_and_wait(
      '叼着烟坐在新提的缺了后视镜车里的大头中年男粉丝',
      [
        '我算是看明白了，特雷森的',
        acute.get_uma_sex_title(),
        '，各个身怀绝技啊——',
      ],
    );
    await era.printAndWait('…………');
    await era.printAndWait(
      '在不得不感慨世界之大无奇不有的特雷森花样拳击比赛场地上，',
    );
    await era.printAndWait('一边欣赏着各种人类未解之谜的比赛过程的同时，');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 平稳得一路取胜，终于来到了决赛的现场——',
    ]);
    await era.printAndWait('…………');
    await muteki.say_and_wait([
      sys_get_colored_callname(72, 100),
      '，请多指教。',
    ]);
    await muteki.say_and_wait([
      '能与传说中的拳术大师的',
      acute.get_uma_sex_title(),
      '过招，这实在令我非常的振奋。',
    ]);
    await acute.say_and_wait([
      '哦哦哦～',
      sys_get_colored_callname(100, 72),
      '，请多指教了哦？你的站姿还是一如既往的耀眼呢～',
    ]);
    await era.printAndWait([
      '面对着恭敬行礼的 ',
      muteki.get_colored_name(),
      '，',
      acute.get_colored_name(),
      '一如往常得散漫得回应——',
    ]);
    await era.printAndWait('……等会儿，传说中的拳术大师？那是什么？');
    await muteki.say_and_wait('那么……八重古武术，烦请见教。');
    await era.printAndWait([
      '精通古武术的 ',
      muteki.get_colored_name(),
      '，又是一礼。',
    ]);
    await era.printAndWait(
      '出拳的动作堪称是完美，呼吸的节奏也毫无破绽可言，就连裸露的腋下也清晰可见，再各个方面都堪称完美。',
    );
    await era.printAndWait([
      '面对这样的敌人，',
      acute.get_colored_name(),
      ' 依旧是一副游刃有余的态度。',
    ]);
    await era.printAndWait('随着一声哨响，两人便开始了比赛——');
    await era.printAndWait('…………');
    await muteki.say_and_wait('嗯——哈！喝！');
    await era.printAndWait([
      '决赛的开场，是由 ',
      muteki.get_colored_name(),
      ' 的急迫突进。',
    ]);
    await era.printAndWait('激进的拳风、猛烈的突击，犹如暴风骤雨般的拳击。');
    await era.printAndWait(
      '每一拳都刚猛无敌，几乎舍弃了一切拳法的搏击套路，完全由力速兼具的正击来撕开对方的搏击方式。',
    );
    await say_by_passer_by_and_wait(
      '扎着辫子的黝黑大汉',
      '少O拳法！——毫无疑问的，这就是少O拳法！」',
    );
    era.printButton(
      '（旁边这个黑不溜秋长得像是棕色倭瓜的解说员到底是从哪来的？）',
      1,
    );
    await era.input();
    await muteki.say_and_wait(
      '啊！！一心不乱！只要能坚持到最后！只要在这赛场上站在最后，这场比赛就是我的胜利！！！',
    );
    await era.printAndWait([
      '一击、两击、三击……',
      muteki.get_colored_name(),
      ' 持续不断的攻击还在继续下去。',
    ]);
    await era.printAndWait(
      '从常理上来说的话，这样刚猛的攻击一定非常消耗精力的才对。',
    );
    await era.printAndWait([
      '换言之，只要 ',
      acute.get_colored_name(),
      ' 撑到对方精疲力竭的时候就——',
    ]);
    await say_by_passer_by_and_wait('黝黑大汉', '不，没用的。');
    era.printButton('「……唉？」', 1);
    await era.input();
    await era.printAndWait([
      '身边的黝黑大汉，就像是会读心一般，否定了 ',
      me.get_colored_name(),
      ' 心中所给出的观点。',
    ]);
    await say_by_passer_by_and_wait(
      '黝黑大汉',
      '仔细听，对方呼吸的节奏——没有一丝的紊乱！',
    );
    await me.say_and_wait('不，这谁听的出来啊！？', true);
    await say_by_passer_by_and_wait(
      '黝黑大汉',
      '没错，这股特殊的呼吸节奏……是西O僧侣所使用的的特殊呼吸法。',
    );
    await say_by_passer_by_and_wait(
      '黝黑大汉',
      '为了克服高原反应，而通过调节自己的呼吸频率来使得氧气对自己身体的每一寸肌肉都得以最大程度的利用。',
    );
    await say_by_passer_by_and_wait(
      '黝黑大汉',
      '传说呼吸法的最强者，不仅能够使得肉体的年龄返老还童。就连身处于数倍重力影响下的拔数千米高的高原，都可以随心所欲的挥出至高至强的一拳——',
    );
    await me.say_and_wait('………………………………');
    await me.say_and_wait('SO？');
    await say_by_passer_by_and_wait('黝黑大汉', '你还不明白吗？');
    await era.printAndWait([
      '黝黑大汉一脸不可置信的望着 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      '……到底是谁给了他普通人也能拥有各种武术各种专业名词作为常识的自信啊？',
    );
    await say_by_passer_by_and_wait('黝黑大汉', [
      '如果只是这·种·程·度的攻击频率，使用呼吸法的 ',
      muteki.get_colored_name(),
      '，就算再打上三天三夜也不会觉得累吧。',
    ]);
    era.printButton('「……嗯哼？」', 1);
    await era.input();
    await say_by_passer_by_and_wait('黝黑大汉', [
      '……不，三天三夜也只是人☆类这种生物的极限而已——如果是赛',
      acute.get_uma_sex_title(),
      '的话，能够坚持的时间只会更久了吧。',
    ]);
    await say_by_passer_by_and_wait('黝黑大汉', [
      '面对精通古武术的',
      acute.get_uma_sex_title(),
      ' ',
      muteki.get_colored_name(),
      '，传说中的拳术家的 ',
      acute.get_colored_name(),
      ' 到底该如何应对呢？',
      acute.get_colored_name(),
      ' 到底要用什么办法，才能突破 ',
      muteki.get_colored_name(),
      ' 的呼吸法连打呢？哈……如此精湛的场面，气功与拳功自O山大会的百年后最终决战……真是越来越令人期待了啊。',
    ]);
    await me.say_and_wait('…………');
    era.printButton('（现在回去做晚饭还来得及吗？）', 1);
    await era.input();
    await era.printAndWait('…………');
    await acute.say_and_wait('一…二…三…四！（*挥拳）');
    await acute.say_and_wait(
      [
        '真不愧是 ',
        sys_get_colored_callname(100, 72),
        ' 啊……如此熟练得使用着呼吸法，在挥舞出了这么多次拳头后，就连汗都没有流下一滴——',
      ],
      true,
    );
    await acute.say_and_wait(
      [
        '想要在这种攻势下一直坚持下去非常的艰难——但不管怎么说，我可是拳击手父亲的',
        acute.sex_code - 1 ? '女儿' : '儿子',
        '！',
      ],
      true,
    );
    await acute.say_and_wait('二…二…三…四！（*挥拳）');
    await era.printAndWait([
      '即便实在对方的呼吸连打之下，凭借坚强毅力的 ',
      acute.get_colored_name(),
      '，在防守过程中依旧不落下风！',
    ]);
    await era.printAndWait([
      '而面对无论如何进攻都看不见破绽的 ',
      acute.get_colored_name(),
      '，',
      muteki.get_colored_name(),
      ' 的攻势开始变得愈发的轻躁——',
    ]);
    await era.printAndWait([
      '……继续下去的话，或许能等到 ',
      muteki.get_colored_name(),
      ' 露出破绽，随后一击制敌？',
    ]);
    await acute.say_and_wait(
      '唔……可现在肉体已经到极限了——这样下去的话……',
      true,
    );
    era.printButton(
      `「加油啊！${acute.name}！肉已经炖在锅里了！等你赢了我们回去一起吃土豆炖肉！」`,
      1,
    );
    await era.input();
    await acute.say_and_wait(
      [callname, '……', callname, ' 正在为我加油——'],
      true,
    );
    await acute.say_and_wait(
      ['呼——可不能让 ', callname, ' 看到我丢人的一面啊。'],
      true,
    );
    await acute.say_and_wait(
      '既然已经无法继续坚持下去的话……那么就把一切都堵在这一击……！',
      true,
    );
    await acute.say_and_wait(
      '呜啊啊！！！燃烧热血，直到最后一刻。接下吧，我的最后一击！！！',
    );
    await era.printAndWait([
      '就在这一刻，',
      acute.get_colored_name(),
      ' 放弃了自己的守势。',
    ]);
    await era.printAndWait('脚后一撤，尾巴随之一抖——');
    await era.printAndWait('一切都灌注在这一击之中！');
    if (
      new RaceHistory(100).get_values().filter((e) => e.rank === 1).length >= 5
    ) {
      await era.printAndWait([
        acute.get_colored_name(),
        '，传说中的拳术师，拼上一切的冠绝天下的柔拳。',
      ]);
      await era.printAndWait([
        '就在那一瞬之间，绕过了 ',
        muteki.get_colored_name(),
        ' 刚绝天下的刚拳——直插入那满载肌肉的腹部！',
      ]);
      await era.printAndWait(['是的，', acute.sex, '远不如刚拳般刚烈。']);
      await era.printAndWait(['是的，', acute.sex, '远不似刚拳般勇猛。']);
      await era.printAndWait('是的，这柔软的一击并不能够取胜。');
      await era.printAndWait(
        '或许，宛如大树般坚韧，犹如柳叶般柔软的柔拳，注定了不似刚拳般耀眼。',
      );
      await era.printAndWait('但只有这一击，便足够了。');
      await era.printAndWait('想要击败金刚不坏的刚勇——');
      await era.printAndWait('只需这一击，便·足·够·了。');
      await muteki.say_and_wait('啊！库——');
      await muteki.say_and_wait('呼、呼吸的节奏！？', true);
      await say_by_passer_by_and_wait('裁判', '逼、逼、逼——');
      await say_by_passer_by_and_wait('黝黑大汉', '逼出来了！');
      await era.printAndWait('是的，人们已经看出来了。');
      await era.printAndWait([
        '就在 ',
        acute.get_colored_name(),
        ' 的柔拳，击中 ',
        muteki.get_colored_name(),
        ' 腹部的那一刻。',
      ]);
      await era.printAndWait([
        muteki.get_colored_name(),
        ' 那近乎完美的呼吸法——便已出现了破绽！',
      ]);
      await muteki.say_and_wait('咕……破坏我的呼吸，这才是你的目的吗？', true);
      await muteki.say_and_wait(
        '瞄准我进攻停歇的节奏，寻找我呼吸的间隔。在我唤气的那一瞬间，朝向我的腹部刺出打断我节奏的柔拳——何等恐怖如斯的观察力。',
        true,
      );
      await muteki.say_and_wait(
        '传说中的拳法家、奇迹时代中的传奇，即便年岁的侵蚀已使你的拳术不似当年般充满魄劲。岁月所给予你的智慧与身为不屈者的坚毅，反而使得你得以跃入新的境界之中了吗——',
        true,
      );
      await muteki.say_and_wait(
        ['——', sys_get_colored_callname(72, 100), '！'],
        true,
      );
      await acute.say_and_wait('哼……才不会给你喘息的机会呢！');
      await acute.say_and_wait([
        '看好了，',
        muteki.get_colored_name(),
        ' 同学——我的字典里，才没有『结束』这个词啦！！！',
      ]);
      await era.printAndWait('即便已经站不稳，');
      await era.printAndWait('即便眼睛已经什么都看不见了，');
      await era.printAndWait('即便腿犹如千斤般沉重的发颤。');
      await era.printAndWait(
        '但武术界传说的拳师——绝不会被区区这种程度的困难所阻！',
      );
      await era.printAndWait([
        '或许，只需要短暂得喘息，',
        muteki.get_colored_name(),
        ' 便可以重新找回呼吸的节奏。',
      ]);
      await era.printAndWait(
        '或许，只需要进攻的节奏稍缓，无敌的刚拳便可以重返无尽得攻势。',
      );
      await era.printAndWait([
        '或许，对于新时代的翘楚——',
        muteki.get_colored_name(),
        ' 可以犯无数次的错误。而旧时代的传说——',
        acute.get_colored_name(),
        '，只要犯下了一次错误就将败下阵来。',
      ]);
      await era.printAndWait('——但是，那又怎样呢？');
      await era.printAndWait('既然「犯了一次错误就将败下阵来」，那么——');
      await era.printAndWait('【只·要·一·次·错·都·不·犯·不·就·好·了·吗？】', {
        fontSize: '3rem',
      });
      await era.printAndWait(
        '暴雨梨花般的柔拳，永不停歇的柔拳，坚毅勇绝的柔拳——',
      );
      await acute.say_and_wait('我的柔拳，还远远没有结束呢！！！！');
      era.drawLine();
      await era.printAndWait('黄昏下的擂台之上，站立的胜者唯有一人。');
      await say_by_passer_by_and_wait('裁判', '到此为止、胜负已分！');
      await say_by_passer_by_and_wait(
        '裁判',
        '特雷森第83界天下第一花样拳击比赛，最终的胜者是——',
      );
      await say_by_passer_by_and_wait('裁判', [
        acute.get_colored_name(),
        ' 同学！',
      ]);
      await era.printAndWait([
        '决赛的擂台上，双眼模糊的 ',
        acute.get_colored_name(),
        '，高高的举起了自己的右拳。',
      ]);
      await era.printAndWait('擂台下，雷鸣般的掌声为胜者带来了荣耀与喝彩。');
      await say_by_passer_by_and_wait('黝黑大汉', '赢了、赢了！！！');
      await say_by_passer_by_and_wait(
        '黝黑大汉',
        '即便岁月飞逝，传说中的拳术家之拳，早已不负当年的魄力。',
      );
      await say_by_passer_by_and_wait('黝黑大汉', [
        '但是',
        acute.sex,
        '仍然战胜了自己、战胜了年岁的侵蚀，用至绝至速的柔拳，战胜了刚绝无敌的刚拳！',
      ]);
      await say_by_passer_by_and_wait('黝黑大汉', [
        acute.get_colored_name(),
        '！',
        acute.get_colored_name(),
        '！！！',
        acute.sex,
        '终于彻彻底底的站在了武术界的顶点！',
      ]);
      await say_by_passer_by_and_wait('黝黑大汉', [
        acute.sex,
        '战胜了时间！！！！！！',
      ]);
      await era.printAndWait('舞台下，兴奋的观众们激动的相拥。');
      await era.printAndWait(
        '泪水与感动盛满了整个会场。就连裁判也在偷偷得拭去感动的眼泪。',
      );
      await era.printAndWait('在这一刻——擂台之上的武者。');
      await era.printAndWait('那高高举起的拳头，已成为武术界真正的永恒传说。');
      era.drawLine();
      await era.printAndWait([
        '黄昏之际，人潮散去之时。背着已经没有力气的 ',
        acute.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 和 ',
        acute.get_colored_name(),
        ' 二人踏上了回家的道路。',
      ]);
      await acute.say_and_wait('欸嘿嘿……真没想到自己能赢呢。');
      await era.printAndWait([
        '倚在自己背上，即便浑身无力已经无法动弹了。',
        acute.get_colored_name(),
        ' 却仍旧温和而散漫地，汇报着今日的胜果。',
      ]);
      era.printButton(
        '「哈哈……是呢，真是惊险呢。我跟那个像是窝瓜一样的大汉，在擂台下可是实实在在的捏了把汗呢。」',
        1,
      );
      await era.input();
      await acute.say_and_wait('唉～～～是吗～？');
      await era.printAndWait([
        '兴许是格外开心的原因，',
        acute.get_colored_name(),
        ' 的里难得出现了轻佻的语气。',
      ]);
      await acute.say_and_wait([
        '可我记得——',
        callname,
        '，你应该对拳击没多大兴趣吧？',
      ]);
      era.printButton('「哈哈……那是另外一回事啦。」', 1);
      await era.input();
      await era.printAndWait([
        '略显尴尬的笑出了两声。',
        me.get_colored_name(),
        ' 特意的偏着头将视线望向远处黄昏的太阳，好不跟身后这总能看穿 ',
        me.get_colored_name(),
        ' 心事的',
        acute.get_uma_sex_title(),
        '对上眼。',
      ]);
      era.printButton('「老实说……一开始，我确实对拳击没什么兴趣啦。」', 1);
      await era.input();
      await acute.say_and_wait('嗯～——听你这样说的话，现在是改观了吗？');
      era.printButton('「是呢，改观了。」', 1);
      await era.input();
      await era.printAndWait('毫不犹豫的承认了这一点。');
      await era.printAndWait([
        '……',
        me.get_colored_name(),
        ' 得承认，最初的时候，确实是对拳击比赛有所偏见。',
      ]);
      await era.printAndWait(
        '毕竟印象里，这种互相攻击的比赛，总会跟【野蛮】这两个字挂上钩吧。',
      );
      await era.printAndWait(
        '但这内心深处所隐藏着的小小偏见，在这样一场感动的比赛之后，早已化作烟消云散。',
      );
      await era.printAndWait('擂台上那坚持不懈的身姿，还要那高高举起的右拳。');
      await era.printAndWait('对于懦弱的自己，恐怕是此生难忘吧。');
      await era.printAndWait('毕竟，那实在是太过【闪耀】了。');
      await acute.say_and_wait('嗯～哼～……');
      await era.printAndWait([
        '趴在肩上的 ',
        acute.get_colored_name(),
        '，也不知道在想些什么。忽地哼起了欢快的小曲。',
      ]);
      await acute.say_and_wait(['呐，', callname, '。']);
      await me.say_and_wait(['怎么啦，', acute.get_colored_name(), '？']);
      await acute.say_and_wait(
        '我是说啊——如果呢……如果，我要是输了的话呢。你要怎么办呢？',
      );
      era.printButton('「……输了吗？」', 1);
      await era.input();
      await era.printAndWait('皱起眉毛，这可真是一个刁钻古怪的问题。');
      await era.printAndWait([acute.get_colored_name(), ' 会输吗？']);
      await era.printAndWait('这个念头，对于自己而言确实一刻也没有出现过。');
      await era.printAndWait(
        '但既然这是一个问题的话——答案，总归是需要好好考虑一下的。',
      );
      era.printButton(
        `「……就算是输了的话，也是不要紧的。这种事情，是不会击垮 ${acute.name} 的。」`,
        1,
      );
      await era.input();
      await acute.say_and_wait('……唔姆？为什么呢？');
      await era.printAndWait([
        acute.get_colored_name(),
        ' 饶有兴致得问着——',
        acute.sex,
        '似乎对这个问题的答案格外有兴趣。',
      ]);
      era.printButton(
        '「因为啊——就算是失败了。只要之后爬起来，不就可以了吗？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '黄昏下，空无一人的中庭。背着 ',
        acute.get_colored_name(),
        ' 的 ',
        me.get_colored_name(),
        '，停在了枯树洞的旁边。',
      ]);
      await era.printAndWait('是啊，失败了。但那又怎么样呢？');
      await era.printAndWait('只不过是【这次】失败了而已。');
      await era.printAndWait('只要【下次】赢回来，就好了。');
      await era.printAndWait([
        '即便是【100】次的失败者，但只要能【赢回来】——',
        acute.sex,
        '就仍然会是最后的赢家。',
      ]);
      await era.printAndWait('这是一个非常浅显的道路。');
      await era.printAndWait([
        '——可与此同时，这也是 ',
        acute.get_colored_name(),
        ' 所教会 ',
        me.get_colored_name(),
        ' 的道理。',
      ]);
      await era.printAndWait([
        '黄昏下，如同做了错事害怕被惩罚的少年，',
        me.get_colored_name(),
        ' 悄悄地回过头，想要探查长辈的「面色」。',
      ]);
      await era.printAndWait([
        '可回过头去，却发现——原来 ',
        acute.get_colored_name(),
        ' 也在望着自己。',
      ]);
      await era.printAndWait(
        '深色的眼眸、夹杂着清晨的「露珠」，闪烁着生命的光泽——',
      );
      await era.printAndWait('恍惚间，心脏砰砰得跳动。');
      await acute.say_and_wait('……');
      await acute.say_and_wait(['…………啊，那个，', callname, '。']);
      await acute.say_and_wait('已经……可以放我下来咯？');
      era.printButton('「啊——马、马上，我马上就放你下来——」', 1);
      await era.input();
      await era.printAndWait('忽然间的手忙脚乱。');
      await era.printAndWait('犹如被长辈抓现行的调皮鬼一般。');
      await era.printAndWait([
        '蹲下身，',
        acute.get_colored_name(),
        ' 的脚尖轻轻得触碰到了地面。',
      ]);
      await era.printAndWait('咕噜噜——忽然间转了个圈。');
      await era.printAndWait([
        '回过身，却发现 ',
        acute.get_colored_name(),
        ' 背对着自己——看不见',
        acute.sex,
        '的脸。',
      ]);
      await acute.say_and_wait([
        '……抱歉啦，',
        callname,
        '，其实我跟你撒了个慌。',
      ]);
      await era.printAndWait('燥热的心，砰砰得跳动。');
      await acute.say_and_wait(
        '其实啊……比赛之后呢。我还是有那么一点点的精力得啦……走回休息室，其实是没问题的。',
      );
      await era.printAndWait(
        '明明是临近夜晚的黄昏，身体却如沸腾的岩浆般滚热。',
      );
      await acute.say_and_wait('所以说啊，那个……');
      await era.printAndWait([
        acute.sex,
        '回过身，秀丽的长发随之一转。那挑染的白丝，如月光般动人——',
      ]);
      await acute.say_and_wait([
        '虽然……你大概已经听我——或者是其他的',
        acute.get_uma_sex_title(),
        '，说过很多次了吧？',
      ]);
      await era.printAndWait('羞红的脸颊，散发着炽热的蒸汽。');
      await acute.say_and_wait('但是，我果然是喜欢你的——训练员君。');
      await era.printAndWait(
        '黄昏之下，骄傲的神情与傲气的话语，回荡在这空无一人的中庭之间。',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' 的脸早已羞红一片——可',
        acute.sex,
        '的眼神，却坚定得注视着自己。',
      ]);
      await era.printAndWait('……奇怪吗？');
      await era.printAndWait('一点都不。');
      await era.printAndWait('为什么呢？');
      await era.printAndWait([
        '因为这正是，那个自己所认识的 ',
        acute.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('那个温和、勇敢，却又坚毅不屈，');
      await era.printAndWait([
        '在平静的外表下，燃烧着炽热之心的 ',
        acute.get_colored_name(),
        '。',
      ]);
      await me.say_and_wait('……');
      await me.say_and_wait('…………');
      await me.say_and_wait('………………哈哈。');
      await era.printAndWait('没由头的笑出了声来。');
      await era.printAndWait('……奇怪吗？');
      await era.printAndWait('一点都不。');
      await era.printAndWait('为什么呢？');
      await era.printAndWait([
        '因为这正是，那个 ',
        acute.get_colored_name(),
        ' 所认识的训练员。',
      ]);
      era.drawLine();
      await era.printAndWait('黄昏下，二人无话。');
      await era.printAndWait('小步走回了家（训练员休息室）。');
      await era.printAndWait('炉灶前的土豆终于熟了。');
      await era.printAndWait([
        acute.get_colored_name(),
        ' 将它盛出来，',
        me.get_colored_name(),
        ' 负责去碗。',
      ]);
      await era.printAndWait('配上牛肉，一起拌饭。');
      await era.printAndWait('啊呜啊呜，吞进肚中。');
      new AcuteEduMarks().ending++;
    } else {
      await say_by_passer_by_and_wait('裁判', '到此为止了！');
      await say_by_passer_by_and_wait(
        '裁判',
        '特雷森第83界天下第一花样拳击比赛，最终的胜者是——',
      );
      await say_by_passer_by_and_wait('裁判', [
        muteki.get_colored_name(),
        ' 同学！',
      ]);
      await say_by_passer_by_and_wait('黝黑大汉', [
        acute.get_colored_name(),
        ' 同学的最后一击，直击腹部以打乱 ',
        sys_get_colored_callname(100, 72),
        ' 呼吸节奏的拳法可谓是奇迹之拳……',
      ]);
      await say_by_passer_by_and_wait(
        '黝黑大汉',
        '但真是可惜啊，最强的柔拳，仍然无法战争最强的刚拳——',
      );
      await say_by_passer_by_and_wait(
        '黝黑大汉',
        '如果早十年，那位传说中的拳师，身体的刚劲仍未散去之时。那冠绝的一击，应该就能终结这场比赛的吧。',
      );
      await say_by_passer_by_and_wait(
        '黝黑大汉',
        '唉……年岁。真是一切武术师的大敌啊。',
      );
      await era.printAndWait('擂台之下，负责解说的黝黑大汉，流下了他的泪水。');
      await era.printAndWait('而另一边，在擂台之上——');
      await acute.say_and_wait([
        callname.substring(0, 1),
        '……',
        callname,
        '……',
      ]);
      await era.printAndWait([
        '擂台之上，汗水化作蒸汽鹏飞之刻，',
        acute.get_colored_name(),
        ' 的眼中充盈起了泪水。',
      ]);
      await acute.say_and_wait(
        '呜～～～我已经……燃尽了呢。化作了……雪白色的灰——',
      );
      await era.printAndWait([
        '失去了力气的 ',
        acute.get_colored_name(),
        '，无力的瘫倒在了擂台之上。',
      ]);
      await era.printAndWait('——而与此同时的，是观众们雷鸣般的掌声——');
      await era.printAndWait([
        '就这样，',
        acute.get_colored_name(),
        ' 在掌声之中走下了帷幕。',
      ]);
      await era.printAndWait('旧时代的传奇，终究要为新时代的传说所让步——');
      era.drawLine();
      await era.printAndWait([
        '黄昏之际，人潮散去之时。背着已经没有力气的 ',
        acute.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 和 ',
        acute.get_colored_name(),
        ' 二人踏上了回家的道路。',
      ]);
      await acute.say_and_wait([
        '唔～～让 ',
        callname,
        ' 看到了失败的一面了啊——',
      ]);
      await era.printAndWait([
        '倚在自己背上，即便浑身无力已经无法动弹了。',
        acute.get_colored_name(),
        ' 仍旧嘟起小嘴，对今日的决赛念念不忘。',
      ]);
      era.printButton(
        '「嘛——最后的那一击我和在场的观众都看到了哦？大家都很为你感动呢。」',
        1,
      );
      await era.input();
      await acute.say_and_wait('可是啊……输了还是输了啊。');
      era.printButton('「哈哈……是啊，确实输了啊。」', 1);
      await era.input();
      await era.printAndWait('擂台上的胜负就是如此的无情。');
      await era.printAndWait(
        '有了赢家，就一定会有输家。胜者风光无限，而败者只能狼狈退场。',
      );
      await era.printAndWait(
        '身体也好、状态也好、运气也好。如果不能在比赛场上发挥百分百的全力赢得胜利，那么即便再好看的训练成绩也没有意义吧。',
      );
      await era.printAndWait(
        '这个世界本就是唯结果论的。擂台是这样，比赛也是这样。',
      );
      await era.printAndWait('……只不过——');
      era.printButton('「既然现在输了，那就在下一场上赢回来吧。」', 1);
      await era.input();
      await acute.say_and_wait(['……', callname, '？']);
      era.printButton(
        '「所以说啊——即便现在输了，只要在下一把上赢回来就好。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '即便这个世界是唯结果论的，但也不代表每个人只有【一次机会】。',
      );
      await era.printAndWait('是啊，失败了。但那又怎么样呢？');
      await era.printAndWait('只不过是【这次】失败了而已。');
      await era.printAndWait('只要【下次】赢回来，就好了。');
      await era.printAndWait([
        '即便是【100】次的失败者，但只要能【赢回来】——',
        acute.sex,
        '就仍然会是最后的赢家。',
      ]);
      await era.printAndWait([
        '掂了掂身后的 ',
        acute.get_colored_name(),
        '，离家（训练员休息室）只剩下几步路了。',
      ]);
      await era.printAndWait([
        '回过头望向 ',
        acute.get_colored_name(),
        '——却发现此刻 ',
        acute.get_colored_name(),
        ' 也在望着 ',
        me.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '只不过，这一次 ',
        acute.get_colored_name(),
        ' 的眼神似乎与以往不同。',
      ]);
      await era.printAndWait('——该要如何用语言去形容呢？');
      await era.printAndWait('不再散漫、不再温柔……');
      await era.printAndWait(
        '而是夹杂着惊奇的温和、相比于温柔却又更加的柔弱。',
      );
      await era.printAndWait(
        '深色的眼眸、夹杂着清晨的「露珠」，闪烁着生命的光泽——',
      );
      await era.printAndWait([
        '不知怎的，望着背上「初次所见」的「柔弱',
        acute.get_teen_sex_title(),
        '」，心脏便砰砰的跳动。',
      ]);
      await era.printAndWait(
        '跳动、跳动——以至于一口赤红色的勇气，涌上了咽喉。',
      );
      era.printButton('「……哈哈。」', 1);
      await era.input();
      await era.printAndWait('不由得笑出了声来。');
      await acute.say_and_wait('……你笑什么啦？');
      era.printButton('「我笑……我笑我锅里炖着的肉。」', 1);
      await era.input();
      await era.printAndWait([
        '说罢，',
        me.get_colored_name(),
        ' 回过头，眼前是黄昏下的走廊。',
      ]);
      await acute.say_and_wait('……这有什么好笑的啊。');
      await era.printAndWait([
        '嘟着嘴，宛若处子般的 ',
        acute.get_colored_name(),
        '，依靠在了肩上。',
      ]);
      era.drawLine();
      await acute.print_and_wait('……其实，体力已经恢复了。');
      await acute.print_and_wait([
        '至少这么几步路，依靠身为',
        acute.get_uma_sex_title(),
        '的毅力，还是可以轻松地走过去的。',
      ]);
      await acute.print_and_wait('……但是。');
      await acute.print_and_wait('但是……');
      await acute.print_and_wait('既然就剩了这么几步路的话。');
      await acute.print_and_wait([
        '让 ',
        callname,
        ' 背着自己走一程……也是可以的吧？',
      ]);
      await acute.say_and_wait('………………');
      await acute.say_and_wait('心中的，这种悸动……', true);
      await acute.say_and_wait(['果然，我对 ', callname, '……他——）'], true);
      era.drawLine();
      await acute.print_and_wait('就这样，夹杂着咸味的粉丝感谢祭。');
      await acute.print_and_wait('在晚上的一顿似乎有点太咸了的土豆炖肉之中，');
      await acute.print_and_wait('画上了帷幕——');
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        100,
        [],
        25,
        undefined,
        true,
      );
      flags.wait_flag =
        get_attr_and_print_in_event(0, [0, 0, 5, 10, 0], 0, undefined, true) ||
        flags.wait_flag;
    }
  };
};
