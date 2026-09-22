/**
 * @file 黄金船 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '额外的自主训练';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait([
        '今天，与 ',
        gs.get_colored_name(),
        ' 的训练总算结束了。',
      ]);
      era.println();

      await gs.say_and_wait('辛苦了——！拜拜，拜拜！');
      era.println();

      await era.printAndWait([
        gs.get_colored_name(),
        ' 伸了个懒腰便小跑着离开——然后又跑了回来。',
      ]);
      era.println();

      await gs.say_and_wait('好嘞，来追加训练！我现在嗨得不行啊！');
      await gs.say_and_wait([
        callname,
        ' 你该不会不知道什么叫追加训练吧？大雄消息真不灵通啊——',
      ]);
      await gs.say_and_wait(
        '追加训练就是追加训练的简称啦——是遍布全宇宙一千万人的阿船圈中特别流行的玩意！',
      );
      await gs.say_and_wait('身为我的训练员，你应该更深入研究一下这个的说。');

      era.printButton('「那我们可不能跟不上潮流呢。」', 1);
      era.printButton('「不对，现在的流行是CD（Cool Down）！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait([
          '好！很有精神！',
          you.actual_name,
          ' 队员，随我来——！',
        ]);
        era.println();
        await era.printAndWait('你们在夕阳下也一直奔跑着。');
      } else {
        await gs.say_and_wait('CD……？那啥玩意，很火的？在训练员圈里很火……？');
        await gs.say_and_wait('CD就是冷却的意思吗……嘿！那不简单吗！');
        await gs.say_and_wait('边吃着刨冰边CD就好了！简称『Cool Down CD』！');
        era.println();
        await era.printAndWait('于是你们好好地休息了一番。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛获胜！';
    /** @param {CharaTalk} gs 黄金船 */
    const f = async (gs) => {
      await gs.say_and_wait('怎么样啊！训练员有把我的热烈奔跑记在脑海里吗？！');
      era.printButton('「太棒了！」', 1);
      era.printButton('「往更高的目标迈进吧！」', 2);
      if ((await era.input()) === 1) {
        await gs.say_and_wait('果然？那还用说？');
      } else {
        await gs.say_and_wait('好啊——！我要成为地核的中心！！');
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '迷走';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `与比赛前带给 ${you.name} 的不安相反，${gs.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await era.printAndWait(
        '接下来的比赛想必也值得期待，现在正是专心致志定下前进目标的时机。',
      );
      era.println();

      era.printButton('「辛苦你了！」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.name} 旋即高举双臂，说出了意味不明的大豆咒语，并且表示自己能有今天都是多亏了大豆中的蛋白质。`,
      );
      era.println();
      await gs.say_and_wait('今天也要认真地磨豆浆去了！豆啊豆啊豆啊豆——！');
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = '通往伊甸园之路';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      const ret = [];
      await era.printAndWait('平安无事地完赛了！');
      era.println();
      await era.printAndWait(
        '按这个样子，看来明年的经典赛上也能看到黄金船活跃的身影呢。',
      );
      era.println();

      era.printButton('「辛苦啦！」', 1);
      await era.input();

      await gs.say_and_wait('这下子连烤鳐鱼翅都会嫉妒我的香味呀——过来闻闻？');
      era.println();
      await era.printAndWait(
        `只见大汗淋漓的 ${gs.name} 靠近，让 ${you.name} 去闻自己身上的汗香……`,
      );
      era.println();
      await gs.say_and_wait('怎么样？继称霸陆地之后我连海洋都纳入囊中了呢～');
      era.printButton('「确实，真香啊……」（爱慕+2）', 1);
      era.printButton('「但这还是陆上的比赛啊……」（好感+10）', 2);
      ret.push(await era.input());
      await era.printAndWait([
        gs.get_colored_name(),
        ' 把 ',
        you.get_colored_name(),
        ' 推到选手通道的墙壁，又背靠在 ',
        you.get_colored_name(),
        ' 身上。',
        gs.sex,
        '放松身体的力气，就像随时都会倒下一样，',
        you.get_colored_name(),
        ' 只好……',
      ]);
      era.println();
      era.printButton('（环抱黄金船的腰支撑）（爱慕+2）', 1);
      era.printButton('（把肩膀借给黄金船支撑）（好感+10）', 2);
      ret.push(await era.input());
      await gs.say_and_wait(
        `说起来，闪耀系列赛这样就全部播映完毕了吧。本${
          gs.sex_code === 1 ? '大爷' : '小姐'
        }炽热的好胜心也无用武之地了啊……`,
      );
      era.println();

      era.printButton(
        '「不不不，你说啥呢。接下来才是重头戏的经典赛啊喂！」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `如此这般，${you.name} 与 ${gs.name} 慢慢地回到休息室——`,
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `新的一年，新的开始，希望 ${gs.name} 的活跃能更上一层楼。${you.name} 是如此想的。`,
      );
      await era.printAndWait(
        `而 ${you.name} 心中所想的对象则向 ${you.name} 双手合十，只听两掌相击后啪的一响。`,
      );
      await gs.say_and_wait(
        '新年谢谢你了嘞——新的一年……去年的我也变成今年的我了。',
      );
      await era.printAndWait(
        `${you.name} 点点头，对${gs.sex}技术上正确的言论表示同意。`,
      );
      await gs.say_and_wait('不过话说回来啊，我寻思这个可是个大奇迹哦。');
      await gs.say_and_wait('假如没有地球、没有宇宙的话……我就不会存在了。');
      await era.printAndWait(
        `${gs.sex} 又一次朝 ${you.name} 合掌，${you.name} 希望 ${gs.sex} 不要再来一次凑个事不过三。`,
      );
      await gs.say_and_wait('所以我打算今年一整年都用来对各种各样的东西感恩。');
      await gs.say_and_wait('感谢地球，感谢宇宙，感谢我眼前的你。');
      await gs.say_and_wait(
        '接下来请听我一曲『恭祝新年～跨越寒冬，向春而行～』',
      );
      await era.printAndWait(
        `${gs.name} 开始演唱起了演歌风的神秘曲目，${gs.sex} 悠扬悦耳的歌声在训练员室内不住回荡。`,
      );
      await era.printAndWait(
        `哪怕是不加上配乐的清唱，也足以让 ${you.name} 感受到歌中盈满的真情实意。`,
      );
      await era.printAndWait(`一曲唱毕，${you.name} 忍不住鼓起掌。`);
      await gs.say_and_wait('谢谢，谢谢，山顶的朋友你们好！');
      await era.printAndWait('偶像歌手一脸高兴，朝不存在的观众挥手致意。');
      era.println();

      era.printButton('「说起来……」', 1);
      await era.input();

      await gs.say_and_wait('嗯？怎么啦？你也要对我表达点什么吗？');
      await era.printAndWait(
        `${gs.name} 摆出了期待的神情，腰上的尾巴也像扫帚一样用力地来回挥舞。`,
      );
      era.println();

      era.printButton('「今年的经典级比赛，你可要好好拿出成绩哦。」', 1);
      await era.input();

      await gs.say_and_wait(
        '什么嘛？经典？我今年倒是想秀一把激烈无比的吉他solo技术啦，不过逆个潮流拉小提琴好像也可以有哦。',
      );
      era.println();

      era.print('「说什么呢，我的意思是……」');
      era.printButton('「努力锻炼长距离能力吧！」（耐力+40）', 1);
      era.printButton('「现在就来想想吧！」（智力+40）', 2);
      era.printButton('「搞一波巨蛋巡回演唱会吧！」（技能点数+50）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await gs.say_and_wait('原来如此，是要锻炼耐力来应付长时间演奏！');
          await era.printAndWait(
            `不是这样的。${you.name} 摇头，但她已经沉浸进自己的世界里了。`,
          );
          await gs.say_and_wait(
            '我day到了！确实，经典音乐的话，时长长的曲目甚至能达到10小时呢！',
          );
          await gs.say_and_wait(
            '好嘞！不论是10小时还是20小时都给我放马娘过来吧！',
          );
          await era.printAndWait(
            `不是这样的。${you.name} 还没能来得及解释经典赛与经典音乐的区别，${gs.sex} 就一溜烟地准备乐器去了。`,
          );
          await era.printAndWait('唉，事到如今只好随机应变了。');
          break;
        case 2:
          await gs.say_and_wait(
            '原来如此，是要尊重乐队成员的意见吗！这个可以有。',
          );
          await gs.say_and_wait(
            '毕竟很多时候导致乐队解散的原因正是音乐路线上的分歧啊。',
          );
          await gs.say_and_wait('好吧，我就陪你聊爆……！来！我们对拳！');
          await era.printAndWait(
            '之后你们物理上打成了一片，然后在训练员室大被同眠了。',
          );
          await era.printAndWait('睡得还挺香的。');
          break;
        case 3:
          await gs.say_and_wait('喂喂……巨蛋巡回！？');
          await gs.say_and_wait('你这梦想真是远大无比啊！！我……燃起来了！！');
          await gs.say_and_wait(
            '好！！我们现在就开演吧！！既然要办演唱会，那就要以第一名为目标啊！！！',
          );
          await era.printAndWait('在那之后，你们艰苦练习了一阵子。');
          await era.printAndWait(
            '两人在学校举办的小型露天演唱会竟然获得了不错的评价。',
          );
          await era.printAndWait('所以赛跑呢？');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_47_3: (() => {
    const title = '母亲比神还要强编';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} gs2 黄金船（使用第二配色，搞怪状态）
     * @param {CharaTalk} creek 超级小海湾
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, gs2, creek, you) => {
      await gs2.say_as_unknown_and_wait('沉睡于海底的黄金之船……');
      await gs2.say_as_unknown_and_wait('如今正是觉醒的时候……');
      await gs2.say_as_unknown_and_wait('发挥你的力量到达前无古人的境界吧……');
      era.println();

      await gs.say_and_wait('……嗯？刚才那是什么声音……？');
      era.println();

      era.printButton('「终于开始幻听了？」', 1);
      await era.input();

      await gs.say_and_wait(
        '我听到了自称神的声音，还是说那是小金船我体内的第二人格？',
      );
      era.println();
      era.printButton('「我给你预约一下心理专家好了……」', 1);
      await era.input();

      await gs.say_and_wait('不是啦，那家伙要我去什么『伊甸园』来着……');
      era.println();

      await era.printAndWait(
        `经典三冠首战的皋月赏就快到了，还是不要想布丁吧……但 ${gs.name} 还是自顾自地一溜烟冲出去寻找那个所谓的「伊甸园」了。`,
      );
      era.println();

      await gs.say_and_wait('I AM GODSHIP（我是神金船）——！');
      era.println();

      await era.printAndWait(
        `${you.name} 只能发挥自己在室内变向过弯的速度勉强跟在 ${
          gs.name
        } 身后一段距离——然后${
          gs.sex
        }一头撞到了另一位${gs.uma_sex_title}身上，又被跟随在后的 ${
          you.name
        } 夹到了中间。`,
      );
      era.println();

      await gs.say_and_wait('我……我看到……金星……金星上有公园……');
      await gs.say_and_wait('不对，你是谁！竟然能承受我神金船的冲击……！');
      await creek.say_and_wait(
        `哎呀哎啊，你好，${gs.name} 同学。今天也很精神呢。！`,
      );
      era.println();

      await era.printAndWait(
        `竟然能承受如此巨大的冲击力，实在是奶……不对，实在是耐性超群的${creek.uma_sex_title}！`,
      );
      era.println();

      era.printButton('「看来，哪怕是神也敌不过妈妈啊……」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 在向 ${creek.name} 致歉后，把昏头转向的 ${gs.name} 拖回了训练室。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '四月之仇';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('刹吔——！我为五月报仇了！');
      era.println();
      await era.printAndWait(
        `虽然不知道为什么，但${gs.sex}对明明是在四月开办却叫皋月赏的皋月赏很有意见，如是者便和皋月赏扛起来了。`,
      );
      era.println();
      await gs.say_and_wait('明年也要回来皋月赏这里为五月再报一次仇！');
      era.println();

      era.printButton('「皋月赏是经典赛，一人一生只能跑一次的啊！」', 1);
      await era.input();

      await era.printAndWait(
        `但在 ${you.name} 的话传出去前，${gs.name} 已经跑远了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `夏季合宿，对赛${gs.uma_sex_title}而言是一段寓教于乐的时光。每逢暑假，绝大部份的特雷森学生都会来到海边享受阳光、海滩，以及可能的一点点地狱式锻炼。`,
      );
      await era.printAndWait(
        `而理所当然的，每到了这种时候，${you.name} 那位特立独行的爱马 ${gs.name} 都会特别来劲。`,
      );
      era.println();

      await gs.say_and_wait(
        '哦哦哦哦哦！说到夏天就是大海啊！让我们一起朝海边出发啦！！！',
      );
      await gs.say_and_wait('Zzzzzzz……');
      era.println();

      await era.printAndWait(
        `${you.name} 看着在大巴上睡得像头死猪一样的 ${gs.name}，心想这家伙的干劲真是和 ${gs.sex} 本人一样来无影去无踪。`,
      );
      era.println();

      era.printButton('「起床啦！！！太阳晒屁股了！！！」', 1);
      await era.input();

      await gs.say_and_wait(
        '呜哇～吓死我了！我刚才梦到了自己在大巴上等着去海滩合宿呢！你要怎么赔啊！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} 没好气地用拇指指向窗外示意你们已经到了，注意到这点的 ${gs.name} 马上兴高采烈地一绷一跳地下了车。`,
      );
      era.println();

      await era.printAndWait(
        `你们渡过了几天不错的假期，训练也十分充实。但今天已经到了训练的时间，${gs.name} 还是没有出现。为了寻找 ${gs.sex} 的踪影，你来到了海边。`,
      );
      era.println();

      await era.printAndWait('然后——');
      era.println();

      await gs.say_and_wait('哎走过路过不要错过哟～好吃的炒面大平卖哟～！！');
      await gs.say_and_wait('有甜酸苦辣～就跟人生一样哟～！！');
      era.println();

      era.printButton('「为什么跑这里卖炒面来了啊……！！」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 气匆匆地走到摊子前面想要质问这个摸鱼的家伙。`,
      );
      era.println();

      await gs.say_and_wait('啊～这不训练员吗～你要特辣的对吧？');
      era.println();

      era.printButton('「我是来叫你去训练的啊。」', 1);
      await era.input();

      await gs.say_and_wait(
        '哎呀～我这不是在给店主大叔代班吗～人家腰酸背疼的，你忍心让大叔在大太阳下烤一天吗？',
      );
      await gs.say_and_wait(
        '所以今天我一定要把这些面都卖完！不然的话大叔的腰就治不好了！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} 知道以 ${gs.sex} 说一不二的性格是劝不动的，于是只好无奈地点了一盘甜酸味的炒面，坐到旁边的太阳椅上边吃边监视 ${gs.name} 以防 ${gs.sex} 又一次失踪。`,
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '前往伊甸园的提示';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `与比赛前带给 ${you.name} 的不安相反，${gs.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await era.printAndWait('以后的比赛也更让人期待了！');
      era.println();
      await gs.say_and_wait('啊～跑完了跑完了～');
      era.println();
      await era.printAndWait(`${gs.name} 摆出了脱力的姿态，长叹一口气。`);
      era.println();
      await gs.say_and_wait(
        '好，难得放松下来了，我们以后就去胜者舞台种菜吧。有我的天才之力一定能把胜者舞台变得无比有机的。',
      );
      era.println();

      era.printButton('「你给我等下。」', 1);
      await era.input();

      await era.printAndWait(
        `但是 ${gs.name} 以一往无前的气势对 ${you.name} 充耳不闻，越走越远——`,
      );
      era.println();
      await flash.say_and_wait(`——那真是十分遗憾呢，${gs.name} 同学。`);
      era.println();
      await era.printAndWait(
        `${gs.name} 的耳朵一颤动，回头看向这边。那位认真又一丝不苟的赛马娘「${flash.name}」就挨在选手通道的墙壁上，脸上的表情似笑非笑。`,
      );
      era.println();
      await flash.say_and_wait('看来你的船锚已经变得迟钝了。');
      era.println();

      if (era.get('cflag:37:招募状态') === recruit_flags.yes) {
        era.printButton(`「是闪耀啊」`, 1);
      } else {
        era.printButton(`「啊，是 ${flash.name} 同学？」`, 1);
      }
      await era.input();

      await flash.say_and_wait('我是受『那位大人』所托，向你传达口谕的。');
      await flash.say_and_wait(
        '但既然你要急流勇退的话，那么看来也没有必要了呢。',
      );
      era.println();

      era.printButton('「请问是什么口谕？」', 1);
      await era.input();

      await flash.say_and_wait('是通向你们正在追寻的『伊甸园』的提示。');
      await gs.say_and_wait('你说什么——！竟然是伊甸园！');
      await gs.say_and_wait('话说回来伊甸园是什么？');
      era.println();

      era.printButton('「反正不是碧桂园吧。」', 1);
      await era.input();

      await flash.say_and_wait('……伊甸园就是所谓，赛马娘的理想乡。');
      era.println();

      await era.printAndWait(
        `${you.name} 听见 ${flash.name} 还小声地嘟哝了一句「啥玩意儿」，但还是当没听见吧。`,
      );
      era.println();

      await gs.say_and_wait('哦哦！就是那个在我梦里出现的东西嘛！');
      await gs.say_and_wait('闪耀，快告诉我吧！');
      era.println();

      await era.printAndWait(`只见 ${flash.name} 轻轻一笑，摇摇头道。`);
      era.println();

      await flash.say_and_wait('看来你愿意从退休种田生活中复出了呢。');
      await flash.say_and_wait('不过这种重要的情报可没有那么容易就能得到。');
      await flash.say_and_wait(
        '要是想知道这个情报的话，『有马纪念』的舞台上与我一战吧？',
      );
      era.println();

      era.printButton('「只要在有马纪念上与你比赛就可以了吗？」', 1);
      await era.input();

      await flash.say_and_wait('没错，君无戏言！');
      era.println();

      await era.printAndWait(
        `虽然还是没能知道『那位大人」到底是谁——但至少阿船对比赛的原动力又回来了！谢谢你，闪耀！`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '目标巴黎时装周编';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, opera, you) => {
      await era.printAndWait('黄金船要在有马纪念上与荣进闪耀交锋——');
      era.println();

      await era.printAndWait(
        '诚然，荣进闪耀本身就是一位强敌……但在有马纪念的舞台上，所有选手都是实力雄厚的强者！',
      );
      era.println();

      era.printButton('（得把阿船抓起来好好训练才行……）', 1);
      await era.input();

      await era.printAndWait(
        `没错，就在这个节骨眼上，${
          you.name
        } 可爱又迷人的负责赛${gs.uma_sex_title}黄金船又不知道跑哪去了。那家伙一边意气风发地从 ${
          you.name
        } 的跟前大步走过，一边在嘴里说着什么「哦嗬嗬嗬嗬！为了站到赛马娘的顶点所须的是压倒性的『美』……！！」，然后一溜烟地跑掉了。`,
      );
      era.println();

      await era.printAndWait(
        `${
          you.name
        } 连忙跟上，却偶尔撞见了一位以自身的美学为傲的${opera.uma_sex_title}……`,
      );
      era.println();

      await gs.say_and_wait('你是……！');
      await opera.say_and_wait(
        '没错！我就是美的化身！被神明宠爱着的光之子！好——',
      );
      await gs.say_and_wait(
        '好歌剧——！！哼，我黄金船大人可是能轻松登上巴黎时装周的存在！',
      );
      await opera.say_and_wait(
        '咕，竟然抢我台词……！不愧是黄金船，连一刻都不能轻敌！那么关于我们哪个到底更美，就在这里决一高下吧！',
      );
      era.println();
      await era.printAndWait(
        `然后，两位赛${opera.uma_sex_title}就在 ${
          you.name
        } 的注视下进行了整整四小时的走秀对决……！二人乐在其中倒也罢了，为什么要把 ${
          you.name
        } 拉进来，这是何等的无慈悲！`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '收集关键词吧';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `与比赛前带给 ${you.name} 的不安相反，${gs.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gs.say_and_wait('好！丰收时刻啦！');
      era.println();

      era.printButton('「跑得好啊！」', 1);
      await era.input();

      await era.printAndWait(
        `${flash.name} 从旁走来，为 ${gs.name} 鼓了鼓掌。`,
      );
      era.println();
      await flash.say_and_wait(`不愧是 ${gs.name} 同学。`);
      await gs.say_and_wait('哦！闪耀！');
      await flash.say_and_wait('你还记得我们有一个约定吧。');
      era.println();

      era.printButton('「是碧桂园的事吗？」', 1);
      await era.input();

      await flash.say_and_wait('……是伊甸园。');
      await flash.say_and_wait('这就是那位大人为你准备的线索。');
      era.println();
      await era.printAndWait(
        `${flash.name} 从口袋里掏出还有余温的信件，交给 ${
          gs.name
        } 后便离开了，留下你们独处。`,
      );
      era.println();
      await gs.say_and_wait('我来看看啊！');
      era.println();
      await gs.say_and_wait('『伊甸园就在最深的海底……』');
      await gs.say_and_wait('『要寻获伊甸园就必须要有四条线索……』');
      await gs.say_and_wait(
        '『与众多强敌对战，从她们身上获得线索吧by秘传之书。』',
      );
      era.println();

      era.printButton('「只要不用坐用游戏摇杆操控的迷你潜艇下海就行……」', 1);
      await era.input();

      await gs.say_and_wait('哼哼，真是让人越来越热血沸腾了啊！');
      await gs.say_and_wait('不过闪耀一直在说的『那位大人』到底是什么人呢……？');
      era.println();

      await era.printAndWait(
        `不管怎么说，${gs.name} 对比赛的热情更高涨了，这也未尝不是好事一桩！`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('阿训——！我又来啦！');
      await gs.say_and_wait('怎么样？！怎么样怎么样怎么样？！');
      era.println();

      await era.printAndWait(
        `出乎意料地，${gs.name} 并没有穿着普通的学校制服，而是一袭黑色的时尚衣裳。`,
      );
      era.println();

      await gs.say_and_wait('这是本船我亲自设计、亲自缝制的登台服装哦！');
      await gs.say_and_wait('目标可是在巴黎时装周上走秀呢！');
      era.println();

      era.printButton('「要说美不美，确实美……」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.sex}嘿嘿笑着，挽住了 ${you.name} 的手臂，丰满的乳房随之压在 ${you.name} 上。`,
      );
      era.println();

      await gs.say_and_wait('那～明天我们就穿着盛装华服去神社过年吧！');
      era.println();

      era.printButton('「……咦？我也要穿吗？」', 1);
      await era.input();

      await era.printAndWait(
        `隔天，${you.name} 被强行套上了豪华的武士铠甲，与穿着西洋贵妇风的黄金船在当地的神社一起被好奇的群众团团围住了。`,
      );
      era.println();

      await era.printAndWait(
        `与 ${gs.name} 一起度过的第二个新年也让人完全不省心。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_3: (() => {
    const title = '目标社会人编';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} ticket 胜利奖券
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, ticket, you) => {
      await era.printAndWait('年复年始，资深级的比赛已经开始了。');
      await era.printAndWait(`很快，天皇赏与宝塚记念等重大赛事也会迫近你们。`);
      era.println();

      await era.printAndWait('然而，黄金船还没有来到训练员室。');
      era.println();

      await era.printAndWait(`${you.name} 按下怒气在学园内四处搜索——`);
      era.println();

      await gs.say_and_wait(
        `奖券藏，我跟你讲啊，后生${gs.child_sex_title.substring(
          0,
          1,
        )}最重要的就系所谓的社会人力啊。`,
      );
      await ticket.say_and_wait('人力公司？');
      await ticket.say_and_wait(
        '不不，我的意思是能顺利融入社会、按规定迅速行动、不给周遭的人带来麻烦的《社会人・力》！',
      );
      await ticket.say_and_wait('《社会人点力》！听起来很厉害的样子啊……！！');
      era.println();

      era.printButton(
        '（那你的《社会人点力》可是完全不及格啊黄金船——！！）',
        1,
      );
      await era.input();

      await gs.say_and_wait(
        '虽然不知道为什么要把《社会人・力》读成《社会人点力》，但就让我们来测试一下我们的《社会人点力》吧！',
      );
      await gs.say_and_wait('那边的偷窥狂魔训练员，你也跟我们来！');
      era.println();

      await era.printAndWait(
        `说罢，黄金船和胜利奖券就风风火火地冲出了校园，${you.name} 只能气喘吁吁地连忙跟上。`,
      );
      era.println();

      await era.printAndWait(
        '在那之后，黄金船二人在电车上保持安静以彰显自己的《社会人点力》的尝试在开始15秒后以失败告终了。',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '关键词';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `与比赛前带给 ${you.name} 的不安相反，${gs.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gs.say_and_wait('嗬！嗬！嗬！嗬！今天我是否也跑得很好呢？');
      await gs.say_and_wait(
        `本 ${
          era.get('cflag:7:性别') !== 1 ? '小姐' : '大爷'
        } 的美，就如徒手掰开海胆一样鲜美，嗬！嗬！嗬！嗬！`,
      );
      era.println();
      await era.printAndWait(
        `今天的 ${gs.name} 转换风格，恰似一副ACGN大小姐的刻板印象合订本。`,
      );
      era.println();

      era.printButton('「完全不想闻到那种腥味。」', 1);
      await era.input();

      await flash.say_and_wait(`做得很好呢，${gs.name} 同学。`);
      await flash.say_and_wait('那么，这就是约好的第一条线索，给。');
      await gs.say_and_wait('这么快就跑掉了，跟上次完全不一样。');
      era.println();

      era.printButton('「大概已经腻了吧？看看写了什么。」', 1);
      await era.input();

      await gs.say_and_wait('但上面只有一个字啊，『Shu』。');
      era.println();
      await era.printAndWait(
        `之前 ${
          flash.name
        } 给你们的信上写着要收集前往伊甸园的四条线索，这个Shu字应该就是第一条了。`,
      );
      era.println();
      await gs.say_and_wait('好啊！有趣！那么我们就索性把四条线索全收集完吧！');
      era.println();
      await era.printAndWait('黄金船对比赛的热情越来越高涨了！');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '关键词';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} jordan 东瀛佐敦
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     * @param {boolean} win_takz_kin_c 黄金船是否赢取经典年宝冢纪念
     * @param {boolean} bad_result 是否是坏结果（习得「出闸困难」）
     */
    const f = async (
      gs,
      flash,
      jordan,
      you,
      callname,
      win_takz_kin_c,
      bad_result,
    ) => {
      await era.printAndWait(
        `与比赛前带给 ${you.name} 的不安相反，${gs.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gs.say_and_wait(`哈哈哈！${jordan.name}！我赢了，第三部完！`);
      era.println();
      await era.printAndWait(
        `比赛结束后，${gs.name} 一派得意的模样向亦敌亦友的辣妹．${jordan.name} 炫耀着胜利。`,
      );
      era.println();
      await jordan.say_and_wait('咕——你给我记住！');
      await jordan.say_and_wait('还有，给我记住这个！');
      era.println();
      await era.printAndWait(
        `${jordan.name} 把一张纸条强行塞进 ${gs.name} 手里后，便气鼓鼓地离开了。`,
      );
      era.println();

      era.printButton('「啊，又是伊甸园的线索？」', 1);
      await era.input();

      await gs.say_and_wait('嗯……这次写的是an字。');
      await gs.say_and_wait('完全搞不懂啊——！');
      era.println();
      await era.printAndWait(
        `不只 ${flash.name}，连 ${jordan.name} 都参与其中……在背后牵线的人物到底是何许人也？`,
      );
      if (win_takz_kin_c) {
        await era.printAndWait(
          `就在你们想离开的时候，一旁的观众向 ${gs.name} 挥手叫嚷。`,
        );
        era.println();
        await era.printAndWait('观众A「黄金船太厉害了！」');
        await era.printAndWait('观众B「恭喜二连霸！」');
        era.println();
        await era.printAndWait(`出于礼貌，你们也向观众回敬。`);
        era.println();
        await gs.say_and_wait('谢谢你们嘞！');
        era.println();

        era.printButton('「谢谢支持～」', 1);
        await era.input();

        await era.printAndWait(`只见 ${gs.name} 回头看向 ${you.name} 问道。`);
        era.println();
        await gs.say_and_wait(`${callname}，二连霸是什么意思？`);
        era.println();

        era.printButton('「……你去年就赢过这个比赛了。」', 1);
        await era.input();

        await gs.say_and_wait('尊嘟假嘟？那我岂不是超厉害的？');
        era.println();

        era.printButton('「确实超厉害的。」', 1);
        era.print('（力量+18、其他属性+3）', { offset: 1, width: 23 });
        era.printButton('「厉害到可以名留青史！」', 2);
        era.print(
          [
            '（全属性+3、习得「出闸困难」、技能点数+45 or 全属性+8、技能点数+75）',
          ],
          { offset: 1, width: 23 },
        );
        const ret = await era.input();
        if (ret === 2 && !bad_result) {
          await gs.say_and_wait(
            '啊～哈哈～果然本船我就是那种被称赞了就能好好发挥的孩子～',
          );
          await gs.say_and_wait('以后也要记得多宠宠我哦～');
        }
        return [ret];
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gs, you, callname) => {
      await gs.say_and_wait('夏天啦！到海边啦！穿泳装啦！');
      era.println();

      await era.printAndWait('二人一起在海滩上漫步着……');
      await era.printAndWait(
        `${gs.name} 在炎炎夏日下精神爽利，而 ${you.name} 只觉得汗流浃背。`,
      );
      era.println();

      era.printButton('「今年的夏天总觉得比往年的还热啊……！」', 1);
      await era.input();

      await gs.say_and_wait('觉得热不会脱衣服吗？');
      era.println();

      await era.printAndWait(
        `${you.name} 闻言，双眼登时瞪得比铜铃还大，猛地指向了全身上下除了泳装不着片缕的自己。${you.name} 又突出双指，先指向自己的双眼然后又指向 ${gs.name} 的。`,
      );
      era.println();

      await era.printAndWait('「好啦好啦，开个玩笑——」');
      await era.printAndWait('「我们去吃冰吧，吃冰！把体温降下来！」');

      era.printButton('「行，我去买吧。」（马币-5，好感+10，爱慕+2）', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 让 ${gs.name} 独自留在海滩上，自己快步前往小吃摊买刨冰去了，然后回程的时候——`,
      );

      era.drawLine();
      await era.printAndWait(
        `路人A「哎呀？这位${gs.sex_code !== 1 ? '小姐' : '小哥'}自己一个人吗？」`,
      );
      await era.printAndWait(
        `路人B「要不要跟${gs.sex_code !== 1 ? '哥哥' : '姐姐'}我玩玩呀？」`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name} 仍然站在原地，但显然美貌如花的人总是能惹来狂蜂浪蝶。只见数个不怀好意的家伙把${gs.sex}团团围住，不住骚扰着。哪怕面对这种场合，${gs.name} 仍然在努力尝试敷衍打发对方，丝毫不见平常威风八面的面貌……`,
      );
      era.println();

      await gs.print_and_wait(
        `这样啊……那家伙是成名${gs.uma_sex_title}，这种场合不好发作……`,
      );
      era.println();

      await gs.print_and_wait(
        `虽然 ${gs.name} 表面上十分自我任性，但实际上比谁都要明白「社会性」这种东西。`,
      );
      era.println();

      era.printButton(
        `「喂，在对别人的${gs.sex_code - 1 ? '女人' : '男人'}干什么呢？」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        `${you.actual_name} 语毕，在场的数人都惊异地看向了${you.sex}。`,
      );
      era.println();

      await gs.say_and_wait('达令～你来啦～');
      era.println();

      if (era.get('love:7') >= 75) {
        await gs.print_and_wait(
          `${gs.name} 见机便旋即挤开混混们，挥舞双手向 ${you.actual_name} 跑去一把抱住，献上了热情的深吻。包括 ${you.actual_name} 在内的众人都被吓了一跳，但 ${you.actual_name} 旋即给出了回应——双方的舌头在嘴中互相搅动探索，分享对对方的渴求与激情……至于那些小混混眼见搭讪不成，只好骂骂咧咧地离开了。`,
        );
      } else {
        await gs.print_and_wait(
          `${gs.name} 见机便旋即挤开混混们，挥舞双手向 ${you.actual_name} 跑去一把抱住，然后轻吻了 ${you.actual_name} 的脸颊——这一吻的在脸上留下了润唇膏的冰冷，但在 ${you.actual_name} 狂跳的心里刻下了激情的印记。`,
        );
      }

      era.drawLine();
      await era.printAndWait(
        `事件告一段落，${you.name} 与黄金船一起坐在阳伞下享受刨冰带来的清凉。`,
      );
      era.println();

      await gs.say_and_wait('呼，真是好险啊～阿船我差点就要被拐走咯～');
      await gs.say_and_wait(`谢谢你，${callname}❤️`);
      await gs.say_and_wait(
        `话说……原来我算是『${gs.sex_code - 1 ? '女人' : '男人'}』吗？`,
      );

      await era.printAndWait(
        `${gs.name} 露出狡黠的神情靠到 ${you.name} 的肩上，不论 ${you.name} 怎么解释都置若罔闻……这件事，恐怕会被${gs.sex}吹上十年吧……`,
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '关键词？';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} jordan 东瀛佐敦
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, jordan, you) => {
      await era.printAndWait(
        `与比赛前带给 ${you.name} 的不安相反，${gs.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gs.say_and_wait('时而欢笑、时而流泪……峰回路转的旅程……');
      await gs.say_and_wait(
        '这段旅程的一切都没有白费！因为我的手里已经掌握了胜利！',
      );
      await jordan.say_and_wait('可恶啊，又是输给你这家伙……！！咕……！！');
      await jordan.say_and_wait('今天只是马有失蹄，下次一定是我赢回来的！');
      await gs.say_and_wait('好啊！我在终点吃着马卡龙等你！');
      await jordan.say_and_wait('哼！');
      era.println();
      await era.printAndWait(
        `就这样，${jordan.name} 又一次气鼓鼓地离开了，不过……`,
      );
      era.println();
      await gs.say_and_wait('哦？她丢下来了什么东西的样子。');
      era.println();
      await era.printAndWait('是一张和之前一样的纸条，看来又是一条新的线索。');
      era.println();

      era.printButton('「真是不坦率的家伙啊。」', 1);
      await era.input();

      await gs.say_and_wait('这次是……『izu』。');
      await gs.say_and_wait('『Shu』、『an』、『izu』……');
      await gs.say_and_wait('我还是没看懂啊——！');
      era.println();
      await era.printAndWait(
        '那位大人这次还是好好地留下了新的线索，能使唤学生做出这种事情，难不成是什么位高权重的人物？',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_95_41: (() => {
    const title = '认真对决编';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, festa, you) => {
      await era.printAndWait(`引导 ${you.name} 与黄金船前往伊甸园的神秘人物……`);
      era.println();

      await era.printAndWait(
        '那个人应该是为了让黄金船鼓起出赛干劲才如此大费周章吧。不管怎么样，只要能转换成黄金船的原动力……那就是三赢的局面呢。',
      );
      era.println();

      era.printButton('（所以这些家伙又在干什么啊……）', 1);
      await era.input();

      await era.printAndWait(
        `${
          you.name
        } 的眼前站着两个栩栩如生的${gs.uma_sex_title}雕像……但与其说是栩栩如生，不如说就是本人。`,
      );
      era.println();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……');
      era.println();

      await era.printAndWait(
        '二人伫立在人来人往的中庭，虽然一动不动，不过反而甚是显眼。',
      );
      era.println();

      await festa.say_and_wait('……');
      await gs.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `也许是又在进行什么莫名其妙的对决了吧，什么不能动挑战之类的。这时候，${you.name} 想到了有趣的事情。`,
      );
      era.println();

      era.printButton('「呜哇，老大不小了还在玩木头人啊。」', 1);
      await era.input();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……！');
      era.println();

      era.printButton('「对了，要不要趁这个机会做点恶作剧呢～？」', 1);
      await era.input();

      await festa.say_and_wait('……呣！');
      await gs.say_and_wait('……');
      era.println();

      era.printButton('「哎唷，那不是旅程同学吗！」', 1);
      era.printButton('爱抚二人腰间敏感的地方。', 2, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await festa.say_and_wait('妈的，被看到了吗？！……你骗我！');
        await gs.say_and_wait('好，是我赢了！！');
        await festa.say_and_wait(
          '靠！可恶的黄金船！你行！下次就在我擅长的领域堂堂正正地打倒你！',
        );
        await gs.say_and_wait('哈！那我就在终点旁边等着你了！');
      } else {
        await festa.say_and_wait('……你❤️！');
        await gs.say_and_wait('……❤️');
        era.println();

        await era.printAndWait(
          `${you.name} 刻意的抚摸弄得二人心里焦躁万分，渐趋激烈的呼吸以及香唇里吐出的些许娇声，随着 ${you.name} 的双手逐渐往禁区推进而变得更加急促，胜负的结果已经不再重要了……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '最后的关键词';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} jordan 东瀛佐敦
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gs, flash, jordan, you, callname) => {
      await flash.say_and_wait('实在是……十分遗憾。');
      await jordan.say_and_wait('可恶，还以为今天一定能赢的……！');
      await gs.say_and_wait(
        '谢谢你们，让我的火山爆发之心也达到了最炙热的温度！',
      );
      await flash.say_and_wait(`恭喜你，${gs.name} 同学。`);
      await flash.say_and_wait('这次也是最后一次与你对决了呢。');
      await flash.say_and_wait('请收下这个吧。');
      era.println();
      await era.printAndWait(
        `${flash.name} 拿出来一张纸条，这就是通向伊甸园的最后一个线索了！`,
      );
      era.println();
      await gs.say_and_wait('这是……！！');
      await flash.say_and_wait(
        '这个就是你所追寻的伊甸园……吗？虽然不是很明白，但请务必加油。',
      );
      await gs.say_and_wait('谢谢你！');
      era.println();
      await era.printAndWait(
        `${flash.name}、${jordan.name}，这两位阿船生涯中的宿敌的身影在人群中渐渐远去……`,
      );
      era.println();
      await gs.say_and_wait(`${callname}，这就是……！`);
      era.println();

      era.printButton('「这就是最后了！」', 1);
      await era.input();

      await era.printAndWait('来揭晓这个最后的线索吧！');
    };
    f.title = title;
    return f;
  })(),
  ws_eden: (() => {
    const title = '通往伊甸园之路';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gs, taste, you, callname) => {
      await era.printAndWait(
        `晩冬寒风冻彻骨，午时真相显径路……${you.name} 与黄金船携带着四条线索纸条前往最终的目的地。`,
      );
      era.println();
      await gs.say_and_wait(
        '在命运的邂逅前，我的右手也被漆黑的暗影诅咒刺激得生痛……',
      );
      era.println();

      era.printButton('「但这是你不能回避的命运，勇敢前进吧！」', 1);
      await era.input();

      await gs.say_and_wait('那当然了，哪怕是神明也无法阻止我前往那个地方了！');
      await gs.say_and_wait(`准备好了吗，${callname}？那就是我们的终点！`);
      era.println();

      era.printButton('「哼，不用你操心！我们走！」', 1);
      await era.input();

      await era.printAndWait(`幽暗，这是你们对这个地方的第一印象。`);
      await era.printAndWait(`寒冷，则是这个地方对你们发起的第一波攻击。`);
      era.println();
      await era.printAndWait(
        `在几乎伸手不见五指的洞窟中，唯有一点光线似在引导着你们不断前进。`,
      );
      era.println();
      await era.printAndWait(
        '一旁的众多奇异生物并不理会你们，十分自在地悠哉游哉着。',
      );
      era.println();
      await gs.say_and_wait('这里就是……纸条说的地方。');
      await gs.say_and_wait('『Shu』、『an』、『izu』。');
      era.println();

      era.printButton('「最后一个是『gu』！」', 1);
      await era.input();

      await gs.say_and_wait(
        '所以答案已经显而易见了……是『Shuizuguan』，就是水族馆啊！',
      );
      await gs.say_and_wait('没想到，伊甸园竟然就在这种地方……');
      era.println();
      await era.printAndWait(
        '就在这个时候，一个身影从旁出现！那个小小的身影一边鼓掌，一边发出高昂的笑声。',
      );
      era.println();
      await taste.say_and_wait('很好！竟然能通过『伊甸计划』来到这里！');
      await taste.say_and_wait('感动！训练员你的支持也是决不可少！');
      await gs.say_and_wait('你是特雷森的教父？！为什么会在这里！');
      await gs.say_and_wait(`${callname}！你难道已经知道了？！`);
      era.println();

      era.printButton(
        '「从第三条线索的时候就猜到了，包括地点和幕后的藏镜人。」',
        1,
      );
      await era.input();

      await gs.say_and_wait('什么？！那你倒是跟我说啊！');
      await taste.say_and_wait('好玩！那样就不有趣了！');
      await taste.say_and_wait('说明！所谓的『伊甸计划』就是……！');
      era.println();
      await era.printAndWait(
        `原来，「伊甸计划」是为了让热情奔放但时常把心思放到其他地方的 ${gs.name} 能专心地挑战闪耀系列赛而制定的计划。`,
      );
      era.println();
      await era.printAndWait(
        '通过「伊甸计划」，以各种线索和秘传之书来挑起黄金船的好奇心，从而达到计划目标。',
      );
      era.println();
      await era.printAndWait(
        `对 ${taste.name} 而言，所谓的「伊甸园」就是赛马娘生涯中最重要的闪耀系列赛。`,
      );
      era.println();
      await taste.say_and_wait('就是这样！');
      await gs.say_and_wait(
        '原来如此！那在我梦里出现的声音也是你们干的好事吗？',
      );
      await taste.say_and_wait('咦？');
      await gs.say_and_wait('咦？');
      era.println();

      era.printButton('「咦？」', 1);
      await era.input();

      await taste.say_and_wait(
        '惊愕！我们除了找同学为你准备纸条和秘传之书外，应该没有动用到隐藏的黑科技啊！',
      );
      await taste.say_and_wait('啊这个不能说，你们忘掉。');
      await gs.say_and_wait('难不成，真的是小金船体内的第二人格诞生？！');
      era.println();

      era.printButton('「那种东西有一个就够了！」', 1);
      await era.input();

      await era.printAndWait(
        `就这样，你们的三年旅途在欢笑嬉闹与莫名其妙中告一段落了。`,
      );

      era.drawLine();
      await era.printAndWait(
        `晚上，${you.name} 与 ${gs.name} 来到海边躺在沙滩上，享受着咸咸的海风吹在脸上的感觉。`,
      );
      era.println();

      era.printButton('「……谢谢你，黄金船。」', 1);
      await era.input();

      await gs.say_and_wait('嗯？怎么这么唐突……啊，已经睡着了？');
      await gs.say_and_wait('真是的，真是既可靠又不可靠的家伙。');
      await gs.say_and_wait(
        '在这三年间被我折腾得够辛苦的你竟然还没有提出辞呈。',
      );
      await gs.say_and_wait(
        '时而严肃，时而愿意与我一起胡闹。有时候我都会觉得自己是不是做得过分了，结果你都没有特地摆出大人的模样阻止我。',
      );
      await gs.say_and_wait('你知道吗？理事长说『伊甸园』是闪耀系列赛。');
      await gs.say_and_wait(
        '但我的『伊甸园』不是什么特雷森，也不是什么闪耀系列赛啊……',
      );
      await gs.say_and_wait('……');
      await gs.say_and_wait('啾♡');
      era.println();

      if (era.get('love:7') >= 50) {
        era.printButton('「睁开双眼。」', 1);
      }
      era.printButton('「假装睡着。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('呜哦，竟然醒过来了？！');
        await gs.say_and_wait('不，从一开始就没睡吗！夏亚，你算计我！');
      } else {
        await gs.say_and_wait('以后也不会让你离开的哦❤️');
        era.println();
        await era.printAndWait(
          `看来，${you.name} 被小金船使来唤去的生活还要持续很久很久……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async ws_eden_sex_end(gs, you) {
    await gs.say_and_wait('哈啊……哈啊……好骗……');
    await gs.say_and_wait('……你这……混蛋……');
    era.println();

    era.printButton('「哼哼，被欺负的感觉怎么样？」', 1);
    await era.input();

    await gs.say_and_wait('你……少算了一件事……');
    await gs.say_and_wait('训练员是、敌不过马娘的！');
    era.println();

    era.printButton('「什么！」', 1);
    await era.input();

    await gs.say_and_wait('以后也不会让你离开的哦♡');
    era.println();
    await era.printAndWait(
      `看来，${you.name} 被小金船骑在脸上的生活还要持续很久很久……`,
    );
  },
  hoverboard: (() => {
    const title = '小金船号，爆诞！';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        '「嗡嗡嗡——嗡嗡嗡——」的噪声越来越接近，这并不是蚊子扑翼的声音。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着一辆平衡车从面前飙过，上面站着熟悉的身影。',
      ]);
      era.println();
      await gs.say_and_wait(
        '最高速度 25 公里每小时，输出功率 250 瓦！这就是小金船号啊！',
      );
      era.println();
      await era.printAndWait('只见平衡车一个甩尾停稳，车上倩影一跃而下。');
      await era.printAndWait([
        gs.get_colored_name(),
        ' 一副神气的模样对着 ',
        you.get_colored_name(),
        ' 竖起大拇指。',
      ]);
      era.println();
      era.printButton('「小、小金船号？」', 1);
      await era.input();
      await gs.say_and_wait('正是小金船号是也！');
      await era.printAndWait([
        gs.sex,
        ' 轻力拍拍小金船号的把手，一脸自豪地向 ',
        you.get_colored_name(),
        ' 展示了自己爱车的全貌。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 凑上去端详发现倒是有模有样，上银下黑，两个轮辐都比普通的平衡车要大一圈。',
      ]);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 并不了解平衡车，也不好说是否特别订制的款式。',
      ]);
      await era.printAndWait([
        '只是这平衡车就如',
        gs.sex,
        '本人一样，没看见多少金色的部份。',
      ]);
      era.println();
      era.printButton('「所以说这到底哪里金了？」', 1);
      await era.input();
      await gs.say_and_wait('价钱。');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 一听见钱这个字，眉头就直起来了。',
      ]);
      era.println();
      era.printButton('「该不会很贵吧？」', 1);
      await era.input();

      await era.printAndWait('常听说职业运动员花钱大手大脚，');
      await era.printAndWait(
        '很多年轻运动员刚得到收入就忍不住把自己打扮得时尚又潮流，富贵又豪华，',
      );
      await era.printAndWait('结果低潮到来时连一点保障的资金都不剩下。');
      await era.printAndWait('身为训练员，必须好好监督才行。');
      era.println();
      await era.printAndWait('不过，看来这个忧虑是多余的：');
      era.println();
      await gs.say_and_wait(
        '由小金船亲手改装的小金船号可是无价之宝，当然很贵！',
      );
      era.println();
      await gs.say_and_wait(
        '毕竟可是我花了很大的功夫从里到外都修整了一遍的爱车啊！',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 稍吃了一惊，黄金船的脑回路跳跃得就是惊人。',
      ]);
      era.println();
      era.printButton('「……要是被我开坏掉了怎么办？」', 1);
      await era.input();
      await gs.say_and_wait(
        '放心吧！小金船号的一个特点就是身强体壮！怎么撞都不会坏！',
      );
      era.println();
      await era.printAndWait([
        '看来，这个知识是通过无数次的实践得知的，也解释了为什么小金船号从里到外都被',
        gs.sex,
        '翻修了一遍。',
      ]);
      await era.printAndWait([
        '之后必须好好教育',
        gs.sex,
        '远离危险的重要性，然而……',
      ]);
      await era.printAndWait([
        '看见 ',
        gs.get_colored_name(),
        ' 盛意拳拳就差把 ',
        you.get_colored_name(),
        ' 直接绑到小金船号上头开走的模样，',
        you.get_colored_name(),
        ' 只好笑纳',
        gs.sex,
        '的好意了。',
      ]);
      era.println();
      await era.printAndWait('得到了【小金船号】的借用凭证！');
    };
    f.title = title;
    return f;
  })(),
  sa_heroine_red: (() => {
    const title = '主角的红色！';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(`某天，${you.name} 走在中庭，看到——`);
      await era.printAndWait(`身穿决胜服的 ${gs.name}。`);
      era.println();

      await gs.say_and_wait(
        `啊，你不是 ${you.actual_name} 吗。今天也要精神地用鳃呼吸哦。`,
      );
      era.printButton('「……比起那个，你为啥穿着决胜服？」', 1);
      await era.input();
      await gs.say_and_wait('这个是为了获得红色的主角之力。');
      await gs.say_and_wait(
        '你那什么表情啊？仔细想想吧，小时候看的战队英雄、热血漫画的主角都是一身红色的对吧？',
      );
      await gs.say_and_wait('穿红色的家伙就是主角，而且一定会获得最后的胜利！');
      era.println();

      await era.printAndWait(
        `虽然有所偏差，但 ${gs.name} 说得倒没错……但要不要借这个机会教育教育一下呢？`,
      );
      era.printButton('「世界上也有很多种红色。」（智力+20）', 1);
      era.printButton('「要贯彻自己的信念！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('你说世上也有香艳的红色和反派的红色？！');
        await gs.say_and_wait('这样啊，原来是我小瞧了红色的力量……');
        await gs.say_and_wait(
          '我从一开始，就已经获得了能担当主角，也能担当反派的力量了！',
        );
        await gs.say_and_wait('而且……还附带香艳属性魅力没法挡哦❤️');
        era.println();

        await era.printAndWait(`${gs.name} 留下魅惑的眼神，兴奋地离开了。`);
      } else {
        await gs.say_and_wait(
          `说得对啊！老${gs.sex_code !== 1 ? '娘' : '子'}，参上！`,
        );
        era.println();

        await era.printAndWait(`${gs.name} 活力四射地离开了。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_golden_ship_date: (() => {
    const title = '阿船流约会';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait(
        `某天，${you.name} 与 ${gs.name} 偶然在校门附近碰个正着——`,
      );
      era.println();

      await gs.say_and_wait('嘎！气死我嘞！');
      await gs.say_and_wait(
        `${callname}，佐敦那家伙竟然说我不懂怎么约会啊啊啊！`,
      );
      await gs.say_and_wait(
        `你反正也闲着没事吧？！现在跟老${
          gs.sex_code - 1 ? '娘' : '子'
        }去约会啦！`,
      );
      era.println();

      await era.printAndWait(`结果被${gs.sex}强行拉到大街上约会去了……`);
      await era.printAndWait(
        '经过一天的胡闹后，你们二人来到归程的公园里稍事休息。',
      );
      era.println();

      await gs.say_and_wait('呼～我也有点累了。之后要干嘛好？');
      era.printButton('「我去买饮料吧。」（耐力+20）', 1);
      era.printButton('「延长赛！比到我赢为止！。」（力量+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} 为 ${gs.sex} 买了饮料，然后两人一起慢慢地走回宿舍去了。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} 与 ${gs.name} 的奇妙游戏还在继续……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sudden_look_back: (() => {
    const title = '阿船的突然追忆过去篇！';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `饿了。想来食堂里的拉面似乎备受好评的样子，${you.name} 便决定前往特雷森食堂治一治腹中饥饿。`,
      );
      era.println();

      await era.printAndWait(
        `在途中，${you.name} 远远看去便认出了在中庭坐着的黄金船。阳光自摇曳的枝叶间洒落到沉默的美人身上，熠熠生辉。`,
      );
      era.println();

      await gs.say_and_wait(`啊，是 ${you.actual_name}。`);
      era.println();

      era.printButton('你在这干嘛啊？不吃饭吗？', 1);
      await era.input();

      await gs.say_and_wait('怎么说呢，我在回忆往事。');
      await gs.say_and_wait(
        '很久以前的一个风雪夜，幼小的我为了给家中的螺丝工厂补贴生意，于是独自在街上卖金属球棒……',
      );
      era.println();

      era.printButton('倒是打螺丝啊。', 1);
      await era.input();

      await gs.say_and_wait(
        '不过，在中途我就被彻骨的冷风冻得不成人形，都已经冷得哭出来了。',
      );
      await gs.say_and_wait(
        `然后……一位改变我命运的${gs.uma_sex_title}出现了。`,
      );
      await gs.say_and_wait(
        `${gs.sex}来到我的面前，向我递出了一碗温暖的拉面汤底泡饭。`,
      );
      era.println();

      era.printButton('你要不要听听看你现在到底在讲什么？', 1);
      await era.input();

      await gs.say_and_wait(
        `${
          gs.sex
        }是这么对我说的：『我虽然也是${gs.uma_sex_title}，但不擅长跑步，于是现在开了一家拉面店，你也要记得自由地选择人生的目标哦。』`,
      );
      await gs.say_and_wait(
        `那个${gs.uma_sex_title}对我说的话让我意识到了，原来我是可以不继承老家的螺丝工厂的！`,
      );
      era.println();

      await era.printAndWait(
        '不为他人所左右，坚决走出自己的道路……这一点确实十分的黄金船啊。',
      );
      era.println();

      era.printButton('「试着重现当时的汤头吧？」（耐力 & 智力+10）', 1);
      era.printButton('「到当时的地方再看看吧？」（速度+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('重现汤底……我做得到吗？');
        await gs.say_and_wait(
          '……哼，历经锻炼后的我怎么会做不到呢？我还记得那个放了一堆大蒜的味道！',
        );
        await gs.say_and_wait(`随我来！`);
        era.println();

        await era.printAndWait(
          `${you.name} 被黄金船带到了食堂厨房，二人在众目睽睽下抢占一角研究起来拉面汤底。`,
        );
        era.println();

        await gs.say_and_wait('好！完成了！全是大蒜的拉面！我们一起试味吧！');
        era.println();

        era.printButton('「辣死人啦————！！大蒜放太多了根本不能吃！」', 1);
        await era.input();

        await era.printAndWait(
          `${you.name} 与黄金船事后检讨，认为当天之所以能顺利咽下那么重口味的汤泡饭是因为天气寒冷的极端案例。`,
        );
      } else {
        await gs.say_and_wait('当时的地方……没错了！我记得是在河堤边！');
        await gs.say_and_wait('假如一切如常的话，那个拉面摊子应该还在！');
        era.println();

        await era.printAndWait(
          `${you.name} 被黄金船带到河堤寻找神秘的拉面摊子，一直到了晚上都颗粒无收……`,
        );
      }
      era.println();

      await era.printAndWait(
        `之后的某天，${you.name} 在训练员室一直待到了晚上。身为黄金船的训练员，为${gs.sex}管理粉丝信件也是自己的要务。${you.name} 机械式地翻开了其中一张信件，上头写着一些意味深长的话……`,
      );
      era.println();

      await era.printAndWait(
        '？？？「看来你确实有自由自在地选择自己的道路嘛，我也会一直守望着你的哦。」',
      );
      era.println();

      era.printButton('这封信，就给阿船看看吧……', 1);
      await era.input();

      await era.printAndWait(
        `信件上只有这些句子，上款下款从缺。但 ${you.name} 不禁想到了黄金船关于那个充满了大蒜味的，寒冬故事。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_shoubu: (() => {
    const title = '来认真一决胜负！';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_49 黄金船对中山庆典的称呼
     * @param {boolean} success 对决是否成功
     */
    const f = async (gs, festa, you, call_49, success) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} 与 ${gs.name} 一起在天台享受着小休……这段时间本来应该就这样毫无波澜地度过的——但 ${you.name} 看到了 ${festa.name}。`,
      );
      era.println();

      await festa.say_and_wait('……哟，你们今天心情也挺好的嘛。');
      await gs.say_and_wait([call_49, '……！！']);
      era.println();

      await era.printAndWait(
        `刹那间！你们的血液冻结了！是 ${festa.name} 身上那股赌徒的气势，让那 ${gs.name} 都被压倒了吔……！！`,
      );
      era.println();

      await festa.say_and_wait(
        '哼哼……不要露出这种表情嘛，你们这样会让我很想马上来对决一把的。',
      );
      await gs.say_and_wait('对决……？！');

      era.printButton('「庆典，你在说什么……！」', 1);
      await era.input();

      await festa.say_and_wait('当然是……');
      era.println();
      era.printButton(`${festa.name}「限定猜拳……！」`, 1);
      era.printButton(`${festa.name}「皇帝牌……！」`, 2);
      era.printButton(`${festa.name}「……性爱❤️」`, 3, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      ret.push(await era.input());
      if (ret[0] === 3) {
        await era.printAndWait(
          `${you.name} 与黄金船被突如其来的做爱邀请惊呆在原地，但中山庆典眼中的欲火说明她已经迫不及待了……`,
        );
        era.println();
        await festa.say_and_wait(
          '我说，光是想像就已经让我下面都濡湿了……快来跟我决胜负吧❤️❤️❤️',
        );
      } else {
        if (ret[0] === 1) {
          await era.printAndWait(
            '限定猜拳……！！使用卡牌以猜拳的方式夺取对手生命的可怕游戏……稍有不慎就会落入深渊！！',
          );
        } else {
          await era.printAndWait(
            '皇帝牌……！！使用卡牌以比大小的方式来决定生死的可怕游戏……稍有不慎就会落入深渊！！',
          );
        }
        era.println();
        await era.printAndWait(
          `糟糕……以${
            gs.couple_title
          }的性格，等搞定之后午饭都要凉透了！怎么办，该阻止吗……？！`,
        );
        era.printButton('「不，就由我来顶上吧！」（体力+100）', 1);
        era.printButton(
          '「加油啊……！」（习得【非根干距离○】、技能点数+60 or 技能点数+15）',
          2,
        );
        ret.push(await era.input());
        if (ret[1] === 1) {
          await festa.say_and_wait('什么？没想到你竟然还挺勇的嘛……有趣！');
          await festa.say_and_wait('好！今天我就陪你玩玩！');
          await gs.say_and_wait('喂喂不是吧？！就我一个被排挤了？！');
          era.println();

          await era.printAndWait(`${you.name} 使出了浑身解数，总算绝处逢生……`);
          await era.printAndWait('但午休还是在不知不觉间过去了！');
        } else if (success) {
          await era.printAndWait(`${gs.name} 使出了浑身解数，总算绝处逢生……`);
          await era.printAndWait('但午休还是在不知不觉间过去了！');
        } else {
          await era.printAndWait(
            `${gs.name} 使出了浑身解数，但还是没赢过 ${festa.name}……`,
          );
          await era.printAndWait('而且午休还是在不知不觉间过去了！');
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = '粉丝袭击';
    /**
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     */
    const f = async (gs, you) => {
      await era.printAndWait('滂沱大雨、警笛长鸣。');
      await era.printAndWait([
        '看似无尽的长街满是好奇的行人，',
        you.get_colored_name(),
        ' 被按在担架上，睁圆了写满绝望的双眼目送',
        gs.sex,
        '步上警车。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 强忍着被刺剧痛，声嘶力竭地嘶吼着「这不是',
        gs.sex,
        '的错！」之类的句子。',
      ]);
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        ' 被鲜血染红全身的身影，就像是穿着那件让',
        gs.sex,
        '自豪的决胜服。',
      ]);
      era.println();
      await era.printAndWait('不应该是这样的。');
      await era.printAndWait([
        '训练员的失败不应该由',
        gs.uma_sex_title,
        '承受。',
      ]);
      await era.printAndWait([
        gs.uma_sex_title,
        '超乎常人的肉体不应该用在这种地方上，',
        gs.couple_title,
        '应该在赛场上快乐地互相竞技就好了。',
      ]);
      await era.printAndWait([
        '就像 ',
        gs.get_colored_name(),
        ' 不应该为 ',
        you.get_colored_name(),
        ' 失控，把刺杀 ',
        you.get_colored_name(),
        ' 的疯子殴打成道路上一条绝美的红地毡一样。',
      ]);
      era.println();
      await era.printAndWait('到底……是哪里出错了呢……');
      era.println();
      await era.printAndWait([
        '被愤怒的粉丝报复，',
        you.get_colored_name(),
        ' 迎来了结局……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
