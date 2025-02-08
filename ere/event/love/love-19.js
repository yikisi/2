/**
 * @file 爱丽数码 - 爱慕
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const fuck_buddy = require('#/event/love/love-events-19/fuck-buddy');
const girl_friend = require('#/event/love/love-events-19/girl-friend');
const half_life = require('#/event/love/love-events-19/half-life');
const wife = require('#/event/love/love-events-19/wife');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedLove {
  async 49(digital, me, callname) {
    await fuck_buddy(digital, me, callname);
  }

  async 74(digital, me, callname) {
    await girl_friend(digital, me, callname);
  }

  async 89(digital, me, callname) {
    await wife(digital, me, callname);
  }

  async 99(digital, me, callname) {
    await half_life(digital, me, callname);
  }

  async oshi(digital, me, callname) {
    const teio = get_chara_talk(3),
      mcqueen = get_chara_talk(13),
      opera = get_chara_talk(15),
      dotou = get_chara_talk(58),
      palmer = get_chara_talk(64),
      helios = get_chara_talk(65);
    teio.name = '看起来比较孩子气的' + teio.get_uma_sex_title();
    opera.name = '看起来毫不在意的' + opera.get_uma_sex_title();
    dotou.name = '看起来很冒失的' + dotou.get_uma_sex_title();
    mcqueen.name = '某个浅紫色芦毛' + mcqueen.get_uma_sex_title();
    palmer.name = '某个栗毛' + palmer.get_uma_sex_title();
    helios.name = '看起来像是染了蓝毛的' + helios.get_uma_sex_title();
    await print_event_name('推', digital);
    if (era.get('cflag:0:位置') !== location_enum.beach) {
      await get_chara_talk(302).say_and_wait('合宿！对，就是，如此！');
      await era.printAndWait(
        '不得不说不愧是那个理事长吗，即使现在明明不是夏季合宿的时间段，却突然来这么一出。',
      );
    }
    await me.say_and_wait('合宿吗，倒也不错。');
    await era.printAndWait([
      '对于',
      digital.get_uma_sex_title(),
      '来说并不只是旅游，也有着训练这一重要环节的活动，简直跟暑假作业异曲同工。',
    ]);
    await era.printAndWait([
      '幸好，大部分的',
      digital.get_uma_sex_title(),
      '都是热爱训练的，',
      me.get_colored_name(),
      ' 的担当',
      digital.get_uma_sex_title(),
      ' ',
      digital.get_colored_name(),
      '，',
      digital.sex,
      '也不例外。',
    ]);
    await era.printAndWait([
      '话说回来，',
      digital.get_colored_name(),
      ' 好像更多的是享受与推们同做一件事的行为，那',
      digital.sex,
      '到底喜欢的是不是训练本身呢。',
    ]);
    await era.printAndWait([
      '在到达地点前就这样想着各种无关的东西，随着轮子的转动，金黄与碧蓝的颜色覆盖住了绿色，',
      me.get_colored_name(),
      ' 来到了合宿地点。',
    ]);
    await era.printAndWait('哇哦，真不愧是特雷森，给到的条件还蛮不错的。');
    await era.printAndWait([
      '顺便环绕了下四周，各处都是穿着泳衣的',
      digital.get_uma_sex_title(),
      '，',
      digital.get_colored_name(),
      ' 应该会尊得要死要活吧，先不说训练了，',
      digital.sex,
      '……能活下来吗？',
    ]);
    era.drawLine();
    await era.printAndWait([
      '登登登，',
      digital.get_colored_name(),
      ' 出现了，穿着学校泳衣，也就是俗称死库水的那种泳衣，紧绷适度，是最为方便训练的装备。',
    ]);
    await era.printAndWait([
      '只见',
      digital.sex,
      '一抬头远望，将一尽美景收入眼中，然后一个疯狂大吸气……',
    ]);
    await digital.say_and_wait('蓝天……白云……吹拂着青春之风……');
    await digital.say_and_wait([
      '在这里的一切',
      digital.get_uma_sex_title(),
      '酱！啊！感觉呼吸都是亵渎……',
    ]);
    await digital.say_and_wait('明明是如此不敬，却又无法忍受，吸……');
    await era.printAndWait([
      '看到了 ',
      me.get_colored_name(),
      '，吸到一半气咳了，是呛到了。',
    ]);
    await digital.say_and_wait(['咳咳咳，是 ', callname, ' 啊！']);
    await digital.say_and_wait('哇哇哇，开始训练吧！我早就准备好了！');
    await era.printAndWait([
      '大大地招手，看起来是一贯如此的 ',
      digital.get_colored_name(),
      '，不过好像不太对劲？',
    ]);
    await me.say_and_wait('难得来到这里，真不用先放松一下吗？');
    await era.printAndWait([
      '恰好，两个看起来关系很好的',
      digital.get_uma_sex_title(),
      '路过。',
    ]);
    await palmer.say_and_wait('你看看你，把雪糕都粘脸上了！这下怎么能啊？');
    await helios.say_and_wait('诶嘿，要不就你帮我擦掉吧！');
    await era.printAndWait([
      '可谓是经典剧情，',
      digital.get_colored_name(),
      ' 眼睛瞄瞄，漏出了幸福的笑容。',
    ]);
    await helios.say_and_wait('今天晚上听说有夏日祭啊，去看吧！');
    await palmer.say_and_wait('等等，怎么就这样决定了啊！');
    await era.printAndWait([
      '摸了摸肚子，说着多谢款待的 ',
      digital.get_colored_name(),
      '，突然像变脸了般。',
    ]);
    await digital.say_and_wait([
      '嘿嘿……看到好东西了，不不不！嗯！',
      callname,
      '！要去训练了噢！',
    ]);
    await era.printAndWait([
      '捶了捶胸口，使劲使自己看起来很认真，',
      digital.get_colored_name(),
      ' 怎么了？',
    ]);
    await era.printAndWait([
      '看着',
      digital.sex,
      '那认真的眼神，',
      me.get_colored_name(),
      ' 也不好说什么，开始训练吧。',
    ]);
    era.drawLine();
    await era.printAndWait(
      '按下秒表，毕竟是在沙地上奔跑，跟草地及泥地都有不同，速度有所下降也属正常。',
    );
    await me.say_and_wait('休息一下吧。');
    await era.printAndWait([
      '递给',
      digital.sex,
      '水和毛巾，虽然是在海边，水随处可见，但汗水还是要擦的。',
    ]);
    await era.printAndWait([
      '接过毛巾，',
      digital.get_colored_name(),
      ' 正在擦的时候，眼睛又瞄到那边的海之家了。',
    ]);
    await dotou.say_and_wait('对对对对不起！居然会把酱汁滴到你身上！');
    await opera.say_and_wait(
      '啊，我的光辉可不会因此般而暗淡，仅会因瑕疵而更耀眼！',
    );
    await era.printAndWait('嗯，很有特色的两人组，也挺大名鼎鼎的。');
    await digital.say_and_wait('咕溜咕溜……呜呜呜呜！');
    await era.printAndWait('发出了引擎发动的声音……？');
    await digital.say_and_wait([
      '啊！那么！',
      callname,
      '！我去训练啦，接着要去跑十个来回哟！',
    ]);
    await era.printAndWait('单手握拳高举，是不是太勉强了？');
    await era.printAndWait('要不这样吧。');
    await me.say_and_wait('我听说今晚附近有祭典，今晚一起去看下吗？');
    await digital.say_and_wait('哦……！不错呢，祭典，好好好！');
    await era.printAndWait(['希望能给', digital.sex, '放松一下。']);
    era.drawLine();
    await era.printAndWait(
      '悬挂于上方穿插而过的灯笼把地砖染上颜色，位于道路两边的铺位也呼应着点上了橘黄的灯光。',
    );
    await era.printAndWait([
      '虽说是来海边合宿的，但看起来也有不少的',
      digital.get_uma_sex_title(),
      '也带来了和服，尽情地享受这次难得的祭典。',
    ]);
    await digital.say_and_wait([
      '哦咦哦咦，那么 ',
      callname,
      '，要从哪里逛起呢？',
    ]);
    await era.printAndWait(
      '一扫而过，苹果糖、稠鱼烧、巧克力条等小食，还有一些绘马、面具等的纪念品，当然还有打气球等游戏摊位。',
    );
    await era.printAndWait([
      '看着，',
      digital.get_colored_name(),
      ' 标记了一处地点。',
    ]);
    await era.printAndWait([
      '正有两名',
      digital.get_uma_sex_title(),
      '穿着和服在捞金鱼。',
    ]);
    await era.printAndWait(
      '只见其中一位眼疾手快，把纸糊的勺子一扫而过，直接把一条金鱼捞了上来，不过，代价是……',
    );
    await teio.say_and_wait(
      '哈哈哈，捞金鱼可不是捞水啊，你看看，把衣服都弄湿了',
    );
    await mcqueen.say_and_wait('诶诶诶？！');
    await digital.say_and_wait('嘶……');
    await era.printAndWait([digital.get_colored_name(), ' 长呼一口气，然后……']);
    await digital.say_and_wait(
      '那么那么，要从哪家店开始逛呢？看着有好多不错的铺位啊！',
    );
    await era.printAndWait([
      '要是按照以前的话，',
      digital.sex,
      '绝对会眼睛发光地说个不停吧。',
    ]);
    await era.printAndWait('那，接下来应该……');
    await me.say_and_wait('我有一个想看的地方。');
    era.drawLine();
    await era.printAndWait('从热烈的祭典中脱身而出，来到了现在冷清的海边。');
    await era.printAndWait('后面是橘红，前面是蓝白。');
    await era.printAndWait('抹了抹并不存在的灰尘，直接在沙滩里坐了下来。');
    await era.printAndWait(
      '晚上的海滩说不上凉快，吹来的风又湿又潮，仅有屁股能感受到清凉。',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      ' 看着 ',
      me.get_colored_name(),
      '，也照样做了下来，就这样尴尬地看着月亮，看着海。',
    ]);
    await digital.say_and_wait([callname, ' 想做的事，就是坐在这里看海吗？']);
    await era.printAndWait('直接一点吧。');
    await me.say_and_wait([
      sys_get_colored_callname(0, 19),
      '，发生什么事了吗？',
    ]);
    await digital.say_and_wait('诶？并没有什么哦？');
    await era.printAndWait([
      '说这话时 ',
      digital.get_colored_name(),
      ' 都虚心地不自觉用手阻挡了心的交互。',
    ]);
    await me.say_and_wait('你在抑制自己想干的事情吗？');
    await era.printAndWait('不是这样的吧？');
    await digital.say_and_wait([
      '诶！没有哦，因为，我今天想做的事，就是和 ',
      callname,
      ' 一起做 ',
      callname,
      ' 想做的事啊！',
    ]);
    await me.say_and_wait('……为什么要这样？');
    await digital.say_and_wait([
      '因为……',
      callname,
      ' 都一直和我去参加应援活动了嘛……',
    ]);
    await era.printAndWait([
      '说着话的时候，',
      digital.get_colored_name(),
      ' 低着头，扭捏着。',
    ]);
    await digital.say_and_wait('还一直在听我的疯言乱语……');
    await era.printAndWait([
      '低着头，',
      digital.get_colored_name(),
      ' 眼睛瞄向了 ',
      me.get_colored_name(),
      '，脸也红红的。',
    ]);
    await digital.say_and_wait(
      '这样，应援活动也更有趣了，我也没想到每天能这么开心……',
    );
    await digital.say_and_wait([
      '已经回不到没有 ',
      callname,
      ' 独自推活的时候了哦！',
    ]);
    await era.printAndWait([
      '说着说着，',
      digital.get_colored_name(),
      ' 已经叉起了腰，似乎为有 ',
      me.get_colored_name(),
      ' 这样一名同志而感到自豪。',
    ]);
    await digital.say_and_wait(['也就是说，', callname, ' 也是重要的存在！']);
    await era.printAndWait([
      '把一切',
      digital.get_uma_sex_title(),
      '放在心口上，也把 ',
      me.get_colored_name(),
      ' 放在了心口上。',
    ]);
    await digital.say_and_wait([
      '这么多赛',
      digital.get_uma_sex_title(),
      '每天带着炙热的念想奔走着',
    ]);
    await digital.say_and_wait([
      '这个世界简直就是，大',
      digital.get_uma_sex_title(),
      '酱尊死时代！',
    ]);
    await era.printAndWait([
      '漂亮地挥出手指，指向了 ',
      me.get_colored_name(),
      '。',
    ]);
    await digital.say_and_wait([
      '无论是前后左右，都有闪闪发光的',
      digital.get_uma_sex_title(),
      '酱！',
    ]);
    await digital.say_and_wait('不知道什么时候就会尊死，就像在战场一样');
    await digital.say_and_wait(
      '在这个战场一起奔跑，有时受到感动暴击，有时分享喜悦',
    );
    await digital.say_and_wait('这就是，战友啊！');
    era.drawLine();
    await digital.say_and_wait('但是，是不是我一直被支持？');
    await digital.say_and_wait('甘心于此是不是有点拥抱黑暗了？');
    await digital.say_and_wait([
      '所以啊，我想，我也想为 ',
      callname,
      ' 做点什么，',
      callname,
      ' 想做的事情，就让我来实现！',
    ]);
    await digital.say_and_wait('来吧来吧！会尽全力的哦！');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 不是压抑自己喜欢的事这点令 ',
      me.get_colored_name(),
      ' 放松了，同时又为',
      digital.sex,
      '能替 ',
      me.get_colored_name(),
      ' 着想而感到高兴。',
    ]);
    await era.printAndWait([
      digital.sex,
      '一直带着对',
      digital.get_uma_sex_title(),
      '不求回报的爱奔跑着。',
    ]);
    await era.printAndWait([
      '然后，',
      me.get_colored_name(),
      ' 想做的事情是什么呢？',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 正是想要应援这个身影，才成为了',
      digital.sex,
      '的训练员，想要做的正是……',
    ]);
    await me.say_and_wait('想看到数码你朝气满满的样子。');
    await era.printAndWait([
      '想看着',
      digital.sex,
      '在应援时候全力以赴的样子，想看着',
      digital.sex,
      '在比赛时候无人可挡的样子，',
    ]);
    await era.printAndWait([
      '想看着',
      digital.sex,
      '在推',
      digital.get_uma_sex_title(),
      '时候尊死的样子，想看着',
      digital.sex,
      '和 ',
      me.get_colored_name(),
      ' 讨论',
      digital.get_uma_sex_title(),
      '时候滔滔不绝的样子。',
    ]);
    await era.printAndWait([
      '万言就归于一言，想看到',
      digital.sex,
      '开心的样子。',
    ]);
    await digital.say_and_wait('想看到我朝气……满满？');
    await digital.say_and_wait('和我对推的情感……是一样的？');
    await me.say_and_wait('对。');
    await era.printAndWait([
      '但是 ',
      digital.get_colored_name(),
      ' 啊，还是很不自信。',
    ]);
    await digital.say_and_wait('对我……吗，对给花当花盆，给主唱当伴舞的我？');
    await digital.say_and_wait('不，就是那个，为什么呢？虽然还是难以置信。');
    await digital.say_and_wait(
      '也……呜，有点开心，不如说，嗯，很光荣，或者说，有点难为情？',
    );
    await digital.say_and_wait('像是出了本的画师收到了感想的时候？');
    await era.printAndWait('可真是很恰当啊。');
    await digital.say_and_wait('也就是……是——');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 害羞得把脸都遮起来了，是——是什么啊，真有趣呐。',
    ]);
    await digital.say_and_wait('那个——');
    await digital.say_and_wait('继续推活！我可不会再有所顾虑了哦！');
    await era.printAndWait('终于啊——');
    await digital.say_and_wait('要全力地朝气满满了！');
    await era.printAndWait(['是认识的 ', digital.get_colored_name(), '。']);
    await digital.say_and_wait([
      '那那！就快去摄取',
      digital.get_uma_sex_title(),
      '酱能量吧！',
    ]);
    await digital.say_and_wait('GOGOGO！');
    await era.printAndWait('跑起来吧！');
    await era.printAndWait(
      '蓝色的海洋虽美，但果然还是橘黄的灯光更适合这个节日。',
    );
    await era.printAndWait([
      '不是到这边无人的沙滩，而是和 ',
      digital.get_colored_name(),
      ' 一起在祭典里面尽情蹦跳！',
    ]);
  }

  async shine(digital, me, callname) {
    await print_event_name('闪现，应援活动！', digital);
    await digital.say_and_wait('呜呼呼，诶嘿嘿！');
    await era.printAndWait([
      '在训练室的 ',
      digital.get_colored_name(),
      ' 眯着眼，应该是在想象着',
      digital.get_uma_sex_title(),
      '，发出来了可能会让人拿出手机报警的笑声，看起来十分高兴。',
    ]);
    await me.say_and_wait('怎么了？这么高兴？');
    await digital.say_and_wait('我在想接下来的应援活动怎么做啦！');
    await era.printAndWait([
      '然后 ',
      digital.get_colored_name(),
      ' 大肆地说了一堆推论，大体上就是应援可以为 ',
      digital.get_colored_name(),
      ' 带去力量，所以应援也算锻炼。',
    ]);
    await era.printAndWait('嗯？好像还挺有道理？');
    await me.say_and_wait('既然这么说的话，那我也一起去吧。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 决定也一起过去，也可以顺便了解一下 ',
      digital.get_colored_name(),
      '。',
    ]);
    await digital.say_and_wait(
      '诶？试试可以啦……不过，这是很发烧友向的哦？会很累的哦？',
    );
    era.drawLine();
    await era.printAndWait([digital.sex, '说的对。']);
    await digital.say_and_wait('来阪神赛马场真是太好了！！精彩的出道战！');
    await digital.say_and_wait([
      '第一名的',
      digital.get_uma_sex_title(),
      '酱，可是继承累去年隐退的',
      digital.sex_code - 1 ? '姐姐' : '哥哥',
      '的意志出道的呢！这种传承感，太燃啦哇！',
    ]);
    await era.printAndWait(['对于 ', me.get_colored_name(), ' 来说，']);
    await digital.say_and_wait(
      '互不相让的两人，中山赛马场的直线可是很短的哦！哇！',
    );
    await digital.say_and_wait(
      '呜呜……太精彩了，超越了适性和理论，源自内心的竞争，太棒了……',
    );
    await era.printAndWait('想要在一天之内，');
    await digital.say_and_wait(
      '大井赛马场的泥地赛道，相比起多为英里的其他赛道，是更容易看到精彩的差追的赛道……',
    );
    await digital.say_and_wait([
      '无视这个理论决定选择逃跑法的',
      digital.sex,
      '，虽然结果输了，但是开心地笑了',
    ]);
    await era.printAndWait('把日本的赛马场几乎逛个遍，');
    await digital.say_and_wait([
      '这次出场的那个芦毛',
      digital.get_uma_sex_title(),
      '，前几次成绩一直都不算好，但是',
      digital.sex,
      '还斗志昂扬地站在那里啊！',
    ]);
    await era.printAndWait('还是有一点点……困难的。');
    await digital.say_and_wait([
      '感受到了吗？！',
      digital.get_uma_sex_title(),
      '酱们的炙热！耀眼！震撼的连击！',
    ]);
    await era.printAndWait('感受到了，很浓，很劲啊！');
    await era.printAndWait(
      '跟着挥舞的双手，手臂不知何时失去知觉，鼓掌的双手，掌心也肿了起来，为赶线奔跑的双腿，也经历了一次磨难。',
    );
    await era.printAndWait([
      '再看旁边 ',
      digital.get_colored_name(),
      '，精气神十足，呼吸都不带喘的，',
      digital.sex,
      '……是不是天生就是干这个的？',
    ]);
    await digital.say_and_wait([
      '诶？',
      callname,
      ' 是比较累了吗？嗯呐，是我没注意分寸了，果然还是太过困难了吗……',
    ]);
    await era.printAndWait(
      '比赛结束后，观众也早已散去，找个位置坐着也是可以的。',
    );
    await digital.say_and_wait([
      '果然呐，',
      digital.get_uma_sex_title(),
      '酱们的那股精气神，就是想看到',
      digital.sex,
      '们朝气满满的样子啊。',
    ]);
    await era.printAndWait([
      '看着只剩下被',
      digital.get_uma_sex_title(),
      '摧残过后的马场，',
      digital.get_colored_name(),
      ' 吐出了早就表露于面的心中之言。',
    ]);
    await era.printAndWait([
      '能把整个赛场都炒热气氛，连天都可以掀翻，这就是',
      digital.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '双手挂满了各种应援场贩，',
      digital.get_colored_name(),
      ' 这一天可谓是收获满满。',
    ]);
    await digital.say_and_wait([
      '真的特别开心，没想到 ',
      callname,
      ' 居然能跟上我的步伐！你已经可以算进核心的粉丝了！不愧是同志啊！',
    ]);
    await era.printAndWait([
      '看着无比高兴的 ',
      digital.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 这一天的疲惫也随之而去。',
    ]);
    await era.printAndWait('只希望明天起来不会腰酸背痛。');
  }

  async univ(digital, me, callname) {
    await print_event_name('在宇宙中互相理解', digital);
    await digital.print_and_wait([
      digital.name,
      '，一个为了',
      digital.get_uma_sex_title(),
      '酱而存在于世上的',
      digital.get_uma_sex_title(),
      '，今天也在全力推活！',
    ]);
    await digital.print_and_wait([
      '诶呀诶呀，今天也要去圣地巡游，把之前',
      digital.get_uma_sex_title(),
      '酱们创造的圣迹全都再仔细地研磨一下啊！',
    ]);
    await digital.say_and_wait([
      '哦吼吼，圣地巡礼的时候给 ',
      callname,
      ' 带点伴手礼吧。',
    ]);
    await me.say_as_unknown_and_wait([
      '虽然不太懂，但看起来你和 ',
      callname,
      ' 关系不错呢，和他一起去如何？',
    ]);
    await digital.say_and_wait([
      '什么，你说和 ',
      callname,
      ' 一起去圣地巡游？哦哦……哦哦哦哦！',
    ]);
    await digital.print_and_wait([
      '从来没设想过的道路，跟 ',
      callname,
      ' 一起？圣地巡游！',
    ]);
    await digital.print_and_wait('这就像是组队荒野求生带上了贝尔格里尔斯啊！');
    await digital.say_and_wait('非常感谢！我这就去邀请！');
    era.drawLine();
    await era.printAndWait([
      '真的是完全没想到，',
      digital.get_colored_name(),
      ' 会过来邀请 ',
      me.get_colored_name(),
      ' 一起圣地巡游。',
    ]);
    await era.printAndWait([
      '为了担当',
      digital.get_uma_sex_title(),
      '，像上次一样，',
      me.get_colored_name(),
      ' 也做好了准备。',
    ]);
    await era.printAndWait([
      '按时间来到了约定的集合地点，从',
      digital.sex,
      '向 ',
      me.get_colored_name(),
      ' 挥手的情况下，看起来气志高涨。',
    ]);
    await era.printAndWait([
      '就跟平时一样，穿着一件粉色内衬配上灰色外套，按',
      digital.sex,
      '的性格感觉再印个「I Love UMA」都有可能。',
    ]);
    await digital.say_and_wait([
      '真没想到 ',
      callname,
      ' 你居然会来！我早就做好被拒绝的准备的……',
    ]);
    await me.say_and_wait('不不不，再怎么想也不会拒绝的吧。');
    await digital.say_and_wait('那，就开始吧！圣地巡礼！');
    await era.printAndWait('大手一挥，指向了通向电车的大路。');
    era.drawLine();
    await era.printAndWait(
      '来到了一个很普通的牧场，在栅栏内可以看到悠哉吃草的牛牛，这算圣地吗？',
    );
    await digital.say_and_wait([
      '不不不，',
      callname,
      '，可不仅要看它的表象啊！',
    ]);
    await era.printAndWait('颇有气势地指向了一片……草丛？');
    await era.printAndWait(
      '各种各样的杂草兴兴向荣，看起来牧场的主人没有怎么打理。',
    );
    await me.say_and_wait('镜花水月？什么时候！');
    await digital.say_and_wait('事实上我想指的是这个啦。');
    await era.printAndWait([
      '看到',
      digital.sex,
      '拿起的是——四叶草，还粘着露水。',
    ]);
    await digital.say_and_wait([
      '没错！有多少',
      digital.get_uma_sex_title(),
      '把代表幸运的四叶草，送给了同伴，竞争对手？互相拼搏却又互相祝福，呜呜呜——',
    ]);
    await me.say_and_wait(
      '不不不，说起四叶草想起的不应该是神社吗？果然应该还得是下着雨的，淋着鸟居的神社……',
    );
    await era.printAndWait('把好像不存在的记忆说出了口？');
    await digital.say_and_wait('！居然！');
    await digital.say_and_wait([
      callname,
      '！你很懂嘛！果然！这种圣地就是要互相交流！',
    ]);
    era.drawLine();
    await digital.say_and_wait(
      '那么下一站，就是这个，咋一看像平平无奇的公园，事实上——',
    );
    await digital.say_and_wait('是充满着力量的公园啊！');
    await era.printAndWait('力……力量？');
    await digital.say_and_wait([
      '对！无数的',
      digital.get_uma_sex_title(),
      '来此聚会，来此歇息，还有，那个沙坑！',
    ]);
    await me.say_and_wait('哦哦哦？想起来了，是Team Gold曾经训练的沙坑吧？');
    await digital.say_and_wait('没错！就是……诶？你说……');
    await era.printAndWait('等一下，Team Gold是哪个队伍来着？');
    await me.say_and_wait([
      '先不，不管吧，你看下那个摊位，',
      sys_get_colored_callname(19, 52),
      ' 不是摆过吗？',
    ]);
    await digital.say_and_wait('哦哦哦哦哦！');
    era.drawLine();
    await digital.say_and_wait('好味！好味！这就是王者拉面吗？！真够王者的！');
    await era.printAndWait(
      '来到了一家深藏巷中的拉面馆，不管是外饰还是里面的装修，都特别有那种「深藏不漏」的感觉？',
    );
    await digital.say_and_wait(
      '还有超级超越的分量！征服了这个的拉面的，果然是王者啊！',
    );
    await me.say_and_wait('相比起这个王者拉面，我其实更好奇所谓的秘密菜单……');
    await say_by_passer_by_and_wait('店长', [
      '噢？',
      me.sex_code - 1 ? '小妹' : '小哥',
      '不错嘛！居然知道本店还有秘密菜单！',
    ]);
    await era.printAndWait([
      '一旁拿着漏子制作料理的店长听到，诧异地跟 ',
      me.get_couple_title(),
      ' 说了一句。',
    ]);
    await digital.say_and_wait('秘密菜单？为何？为何我不知道的？');
    await era.printAndWait([
      '本来正为征服了王者拉面而兴奋的 ',
      digital.get_colored_name(),
      '，听到此话，惊讶得毛都炸了。',
    ]);
    era.drawLine();
    await digital.say_and_wait(
      '噫呀哈，加上刚才那个蜂蜜特饮店，全圣地巡礼，达成！',
    );
    await era.printAndWait(
      '从清晨接触第一缕阳光再到傍晚送走夕阳，真的是忙了一天啊。',
    );
    await me.say_and_wait('到处都转了一圈呢。');
    await digital.say_and_wait(
      '诶呀诶呀，这么长时间的应援活动真的是辛苦你了，如此勤勉，值得敬意！',
    );
    await era.printAndWait('诶呀诶呀，怎么还敬起礼来了。');
    await digital.say_and_wait('而且，诶嘿嘿，能圆满完成真的是太好了。');
    await digital.say_and_wait('实际上，最开始是想和以往一样一个人去的。');
    await digital.say_and_wait('但是……');
    await era.printAndWait([
      '然后就听到了',
      digital.sex,
      '的意外经历，在外面意外听到了路人',
      digital.get_uma_sex_title(),
      '的建议，邀请 ',
      callname,
      ' 一起……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 发自内心地感谢了这位不知名的',
      digital.get_uma_sex_title(),
      '，因此 ',
      me.get_colored_name(),
      ' 对 ',
      digital.get_colored_name(),
      ' 更加了解了。',
    ]);
    await digital.say_and_wait(
      '最幸运的是，实际实行起来，真的是非常！非常开心呢！',
    );
    await era.printAndWait('大展双手，真的是很开心啊。');
    await digital.say_and_wait(
      '太好了，明明是对你来说珍贵的假期，又没有提前和你计划，还以为你不会同意呢……',
    );
    await digital.say_and_wait('不过，这真的是一个重大发现！');
    await digital.say_and_wait([
      '我发现了，和 ',
      callname,
      ' 一起追推，一起推活的乐趣！',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 以前因特殊爱好所少表露的真正的情绪，正逐渐向 ',
      me.get_colored_name(),
      ' 袒露。',
    ]);
    await digital.say_and_wait(
      '本来就没想过，在这个宇宙中能有这样和我一起进行应援活动的人……',
    );
    await me.say_and_wait('居然是宇宙级的吗？！');
    await digital.say_and_wait(
      '啊哈哈，事实上你也看到了，之前都是我一个人在进行应援活动，能听我这些界限发言，还有共感，真的是让我……很开心',
    );
    await era.printAndWait([
      '感觉，',
      digital.get_colored_name(),
      ' 的双眼正在闪闪发亮。',
    ]);
    await digital.say_and_wait([
      '太感动了！现在有什么想说的，就想赶紧对 ',
      callname,
      ' 说！',
    ]);
    await me.say_and_wait('可以哦，想说什么都可以。');
    await digital.say_and_wait('诶！真的什么都可以吗！');
    await digital.say_and_wait('真的可以吗？真的可以吗！说好了哦!');
    await digital.say_and_wait([
      sys_get_callname(19, 19),
      ' 我要开始界限发言了哦！',
    ]);
    await digital.say_and_wait([
      '在第一眼在电视的大屏幕上看到',
      digital.get_uma_sex_title(),
      '酱的身姿时我就明白如此激励眩眼的激情四射的',
      digital.sex_code - 1 ? '女神' : '神明',
      '们是我的一生向往啊随后我就坠入了深渊哦不是升华到了天堂每天都供奉',
      digital.get_uma_sex_title(),
      '酱们为',
      digital.sex,
      '们应援为',
      digital.sex,
      '们喝彩为',
      digital.sex,
      '们制作同人本向大家宣传',
      digital.get_uma_sex_title(),
      '酱们的美好伟大然后得益于偶尔的赐福我终于处身于这万神殿可以和各位',
      digital.sex_code - 1 ? '女神' : '神明',
      '同处于一个世界哦不是我只是同呼吸一处空气的凡人而已但是',
      digital.sex,
      '们也都不嫌弃我还让我进入不可侵犯的赛场上进行劲的比赛简直是高贵的却又不嫌污秽的所有全肯定的伟大的',
      digital.sex_code - 1 ? '女神' : '神明',
      '们说了这么多数码碳我想说的仅是',
      digital.get_uma_sex_title(),
      '酱真的是太棒了！',
    ]);
    await era.printAndWait([
      '回旋，跳跃，低吟，高唱，',
      digital.get_colored_name(),
      ' 用了',
      digital.sex,
      '的毕生所能，将全部所想说的一切倾泻了出来。',
    ]);
    await era.printAndWait('如此纯度，值得敬佩。');
    await digital.say_and_wait(
      '咳咳咳，哈哈哈哈，说出来……真的……咳咳……是淋漓尽致啊……',
    );
    await era.printAndWait([
      '疯狂地呼吸，胸脯不断起伏，实在是太累了吧，',
      digital.get_colored_name(),
      ' 咳着咳着，一个踉跄，直接坐在了地面上。',
    ]);
    await digital.say_and_wait(['怎么样啊，', callname, '？嘿嘿……']);
    await era.printAndWait([
      '坐在地面上，还用手撑着，不过',
      digital.sex,
      '笑得很开心。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 也靠在',
      digital.sex,
      '身边坐了下来，为',
      digital.sex,
      '支撑一下',
      digital.sex,
      '的体重。',
    ]);
    await me.say_and_wait(
      '很不错哦，听到这么有活力的界限发言，就连三女神都为之震撼呢。',
    );
    await digital.say_and_wait('嘿嘿嘿，这样吗……');
    await digital.say_and_wait('真的，是宇宙级呢……');
  }
};
