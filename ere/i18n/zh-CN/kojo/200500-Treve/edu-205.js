/**
 * @file 卓芙 - 育成
 * @author 梦露
 * @author 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  race_start: (() => {
    const title = '竞赛之前';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, you) => {
      const buffer = [
        () => treve.say_and_wait('今日的胜利，将由我拿下，为了法国的大家'),
        () => treve.say_and_wait('荣光已在我手中。'),
        () => treve.say_and_wait('来一场激动人心的争斗吧！'),
      ];
      if (era.get('love:205') >= 50) {
        buffer.push(() =>
          treve.say_and_wait(
            `今日的胜利，将由我拿下，为了 ${you.actual_name}！`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_win: (() => {
    const title = '竞赛获胜';
    /** @param {CharaTalk} treve 卓芙 */
    const f = async (treve) => {
      const buffer = [
        () => treve.say_and_wait('冲过终点！我赢啦～'),
        () => treve.say_and_wait('Merci beaucoup！（感谢大家）'),
        () => treve.say_and_wait('大家，感谢你们的祝福！'),
        () =>
          treve.say_and_wait(
            '这也是我为何能有此荣耀，请让我为你们献上最好的礼物。',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  ws_47_24: (() => {
    const title = '翱翔于蓝天之上';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} prix_prb 蓝鹦鹉赏（上色版名字）
     * @param {PrintedSpan} prix_dia 戴安娜锦标（上色版名字）
     */
    const f = async (treve, you, prix_prb, prix_dia) => {
      await era.printAndWait([
        treve.name,
        ' 在过年后，于春天稍过的五月，和出道赛相同，大胜 1600 米的 ',
        prix_prb,
        '。',
      ]);
      await era.printAndWait([
        '在本人强烈希望的支持下，',
        treve.sex,
        '也参加了距离延长了 500 米左右的 ',
        prix_dia,
        '。',
      ]);
      await era.printAndWait(
        `出乎包括 ${you.name} 在内的众多观众的意料，在三冠级别的赛事上获得了压倒性的胜利。`,
      );
      await era.printAndWait(`${treve.name} 稳步地提高了自己的实力。`);
      await era.printAndWait(
        `而且在那个过程中，${you.name} 能教的东西减少了。`,
      );
      await era.printAndWait(
        `听一而知十的 ${treve.name}，有时即使不教也能自然地得出正确的答案。`,
      );
      await era.printAndWait(
        '即使是资深训练员也不会注意到的事情自己就能改善。',
      );
      await era.printAndWait(
        `虽然也有被其他训练员指责为放任主义的时候，但 ${you.name} 认为对${treve.sex}来说这是正确的。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_33: (() => {
    const title = '家贫？走他乡';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `然后夏天也快结束了，从海边的集训回来的 ${you.name} 又在写G1的参赛登记书。`,
      );
      await era.printAndWait(`称霸法国橡树明明还没多久，回过神来又是G1。`);
      await era.printAndWait(`接下来要参加的是${treve.sex}期待的凯旋门赏。`);
      await era.printAndWait(
        `如果只看已经展现出的如此强大的实力，${treve.name} 获得这一荣誉也是不足为奇的。`,
      );
      await era.printAndWait(
        `${you.name} 在参赛登记上写上签名，交给在训练员室的沙发上躺着的 ${treve.name}。`,
      );
      era.printButton(`「这是参赛登记表，请签名。」`, 1);
      await era.input();
      await treve.say_and_wait(`嗯。`);
      await era.printAndWait(
        `不知什么时候，${treve.sex}把自身带进了训练员室，就好像这里是${treve.sex}的私人房间。`,
      );
      await era.printAndWait(`但既然和${treve.sex}签了契约，所以也不能抱怨。`);
      await era.printAndWait(
        `比起那些，或许 ${you.name} 更希望${treve.sex}能想办法解决私生活的邋遢。`,
      );
      await era.printAndWait(
        `${treve.name} 从沙发上摔了下来，站起身，一边敲着递过来的圆珠笔，一边朝 ${you.name} 看了一眼。`,
      );
      await treve.say_and_wait(`这么说来，这个星期天有空吗？`);
      era.printButton(`「白天很闲。」（爱慕+1）`, 1);
      era.printButton(`「要追加练习吗？」（好感+5）`, 2);
      const ret = await era.input();
      await era.printAndWait(`${treve.name} 一边签字一边沉思。`);
      await treve.say_and_wait(
        `我师傅说想见我。${treve.sex}说夏天集训结束后就可以，差不多回去一趟。`,
      );
      era.printButton(`「师傅？」`, 1);
      await era.input();
      await treve.say_and_wait(`是的，是教我跑步的人。`);
      await era.printAndWait(`培养${treve.sex}跑步的人物。`);
      await era.printAndWait(
        `如果能遇到从另一个角度看待完成度高的 ${treve.name} 的人物，也会成为很好地了解${treve.sex}的机会吧。`,
      );
      await era.printAndWait(
        `${you.name} 一边糊起装有参赛登记书的信封，一边答应了${treve.sex}的邀请。`,
      );
      await era.printAndWait(
        `既然如此，那还得准备伴手礼。${you.name} 把目光转向摆放着茶叶罐的架子。`,
      );
      await era.printAndWait(`秋天的收获期还很远，哪里都没有秋高气爽的茶叶。`);
      await era.printAndWait(`如果是这样的话，选有长收获期的阿萨姆比较好。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = '奔向远方';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `哼着歌，在秋天的阳光留下淡淡的温暖的日子里，来到了热闹的茶叶店。`,
      );
      await era.printAndWait(
        `毕竟，对方是 ${treve.name} 的师傅，也不好意思空手拜访。`,
      );
      await era.printAndWait(`篮子里放着打算给自己买的茶叶罐。`);
      await era.printAndWait(
        `从那稍微抬起视线，穿着超大尺寸外套的 ${treve.name} 仔细地眺望着商品。`,
      );
      await era.printAndWait(
        `对确认几种茶叶香味的${treve.sex}，${you.name} 稍微靠近。`,
      );
      era.printButton(`「……放在训练员室的花茶茶叶很少，请你帮我补一下。」`, 1);
      await era.input();
      await era.printAndWait(
        `${treve.name} 竖起耳朵，高兴地摇着尾巴开始品评。`,
      );
      await era.printAndWait(
        `想着刺激小的茶叶比较好，把门口的罐子放入篮子里的时候，里面已经有柠檬香味的了。`,
      );
      await era.printAndWait(
        `${treve.name} 好像特别在意，笑嘻嘻地看着 ${you.name}。`,
      );
      era.printButton(`「柠檬吗？」`, 1);
      await era.input();
      await era.printAndWait(
        `虽然没打算发泄不满，但 ${treve.name} 突然鼓起脸颊抗议。`,
      );
      await treve.say_and_wait(`${callname} 有什么不满吗。`);
      era.printButton(`「不是不满意……以前买过。是喜欢的味道。」`, 1);
      await era.input();
      await era.printAndWait(
        `当 ${you.name} 把装有三个茶叶罐的篮子放在收银台上时，熟识的店主一脸惊讶。`,
      );
      await era.printAndWait(`他一边用手指敲打收银机器一边扬起眉毛。`);
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        `好久不见，那个${treve.child_sex_title}是新的担当吗？`,
      );
      await era.printAndWait(`店主隔着 ${you.name} 的肩膀向后看。`);
      await era.printAndWait(
        `现在也在欣赏红茶的 ${treve.name} 依旧是不败金身，加上赢得了橡树杯，粉丝也相应增加了。`,
      );
      await era.printAndWait(
        `但如果说是聚集了大众视线的人气选手，也不是那么回事。`,
      );
      await era.printAndWait(`知道的人知道，这种程度的感觉。`);
      await era.printAndWait(`给红茶包装时，店主好像注意到了什么似的抬起头。`);
      era.printButton(`「怎么了？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        `${treve.sex}不是很受欢迎吗？`,
      );
      await era.printAndWait(
        `${you.name} 回头一看，两个年轻的女性正在和 ${treve.name} 握手。`,
      );
      await era.printAndWait(
        `两人似乎都是${
          treve.sex
        }的粉丝，看起来是被开朗应对的憧憬的${treve.uma_sex_title}深深迷住了。`,
      );
      await era.printAndWait(
        `虽然在战胜G1之前就有所察觉，但 ${treve.name} 有着独特的魅力。`,
      );
      await era.printAndWait(
        `被散发着透明可爱感的${treve.sex}所吸引的人，在特雷森中也不在少数。`,
      );
      await era.printAndWait(
        `在粉丝还很少时也有不少人狂热地支持${treve.sex}。`,
      );
      await era.printAndWait(`在这样想着的过程中，两个纸袋排列在收银台上。`);
      await era.printAndWait(
        `从钱包里拿出两三张纸币交给男人的时候，${treve.name} 回到了 ${you.name} 身边。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        '找您零钱，今后也请多多关照。',
      );
      await era.printAndWait(
        `${you.name} 一边把装着私人用茶叶的袋子交给${treve.sex}一边走出店里。`,
      );
      await era.printAndWait(
        `虽然均等排列的行道树开始一点点地散落叶子，但似乎还能欣赏到金黄色的秋景。`,
      );
      await era.printAndWait(
        `走在大街上，发现旁边的${treve.teen_sex_title}回头看了看。`,
      );
      await era.printAndWait(
        `在那对面，${you.name} 看到了刚才两位女性的背影。`,
      );
      era.printButton(`「是刚才的粉丝吗？」`, 1);
      await era.input();
      await treve.say_and_wait(
        `是的……听说${treve.couple_title}一直在看我的比赛。`,
      );
      await treve.say_and_wait(`好开心。`);
      await era.printAndWait(`${treve.name} 害羞地说。`);
      await era.printAndWait(
        `尽管如此，${treve.sex}还是用认真的眼神，对期待自己表现的两位粉丝感叹着。`,
      );
      await treve.say_and_wait(
        `来这里之前，我得到了很多人的帮助。师傅也是其中之一，想为了家人和朋友努力的心，至今也没有改变。`,
      );
      await treve.say_and_wait(
        `一想到期待我跑步的人越来越多，我就忍不住想跑得更多，想赢得更多。`,
      );
      await era.printAndWait(
        `很多${treve.uma_sex_title}对暴露在众目睽睽之下感到压力。`,
      );
      await era.printAndWait(
        `在 ${
          you.name
        } 的负责人中，也有${treve.uma_sex_title}烦恼着在G1这样引人注目的舞台上不能很好地发挥实力。`,
      );
      await era.printAndWait(
        `但是 ${treve.name} 对受到越活跃越会增加的期待毫不犹豫。`,
      );
      await era.printAndWait(`把这一切变成力量，为了梦想前进。`);
      await era.printAndWait(
        `而这样${treve.sex}现在的目标，正是那香榭丽舍大街终点的巨大建筑物所代表的比赛。`,
      );
      await era.printAndWait(`拿破仑建造的凯旋门，乃高耸着的胜利象征。`);
      await era.printAndWait(
        `${treve.sex}一定在会出现在那对面，然后在那被冠以其名的世界最高峰的比赛舞台大放异彩。`,
      );
      era.printButton(`「……你一定会赢的。」（好感+5）`, 1);
      await era.input();
      await era.printAndWait(`${treve.name} 突然回头。`);
      await era.printAndWait(
        `和${treve.sex}平时那样绽放着稚嫩的笑容的样子不同，${treve.sex}温柔地——但是，像诉说着什么一样，露出平静的大海般的微笑，小声地说道。`,
      );
      await treve.say_and_wait(`一定。`);
      await era.printAndWait(`${you.name} 想，那可能不是只对自己说的话。`);
    };
    f.title = title;
    return f;
  })(),
  foreign_travel: (() => {
    const title = '凡尔赛的玫瑰';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `杜乐丽花园位于巴黎市中心。穿过香榭丽舍大道，在隔着协和广场和卢浮宫美术馆的巴黎市中心也是大型花园，作为观光名胜自不必说，作为市民休息的场所也受到了广泛的喜爱。`,
      );
      await era.printAndWait(
        `到了休息日的白天，带着家人的人也很多，到处都能看到孩子们跑来跑去的身影。`,
      );
      await era.printAndWait(`突然，${treve.name} 完全畏缩了。`);
      await era.printAndWait(
        `${you.name} 抬头看的时候，听到了向你们打招呼的声音。`,
      );
      await montjeu.say_and_wait('你过来了啊，不过我的话主要在他身上。');
      await era.printAndWait(
        `让人听出慎重和智慧的${montjeu.adult_sex_title}的声音。`,
      );
      await era.printAndWait(
        `但是最初理解到的那个反射的记忆，是多次听到的${treve.sex}的胜者演唱会的声音。`,
      );
      await era.printAndWait(
        `回头一看，苗条的高个子${treve.uma_sex_title}挽着胳膊，注视着你们。`,
      );
      await era.printAndWait(`——传说。`);
      await treve.say_and_wait(`师傅！`);
      await era.printAndWait(`${treve.name} 眼睛闪闪发光地叫着目标人物。`);
      await era.printAndWait(`然后 ${you.name} 感到全身僵硬，一步也不能动。`);
      await era.printAndWait(`快速的心跳像警钟一样填满了脑海。`);
      await montjeu.say_and_wait(`那么。`);
      await era.printAndWait(`${montjeu.sex}看着 ${you.name} 左手拿着的纸袋。`);
      await era.printAndWait(
        `把 ${you.name} 邀请到树荫下的长椅上，苦笑着接受了特产。`,
      );
      await era.printAndWait(
        `${
          montjeu.name
        }。法国传奇般的${treve.uma_sex_title}，凯旋门赏的冠军之一。`,
      );
      await montjeu.say_and_wait(
        `进入特雷森之后，我也在休息日对${treve.sex}进行了个人指导。我简单地告诉${treve.sex}，如果${treve.sex}的素养有技术的话，我就会教${treve.sex}。一眨眼就掌握了比赛的心得。`,
      );
      era.printButton(`「对我不满意吗？」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name} 没有回答，而是目不转睛地盯着随风摇曳的树木。`,
      );
      await era.printAndWait(`在那对面可以看到被阳光照射的塞纳河的蓝色。`);
      await era.printAndWait(`到了了秋天，应该已经感受不到炎热。`);
      await era.printAndWait(
        `但从 ${you.name} 的太阳穴到脸颊，一滴汗慢慢地，像刻下它的存在一样流淌着。`,
      );
      await era.printAndWait(
        `彼此无言的时间，在 ${you.name} 注意到了凝视着自己侧脸的 ${montjeu.name} 时结束了。`,
      );
      await montjeu.say_and_wait(
        `我想亲自见面来决定是否不满。如果不实际看看对方，不可能明白。所以，现在才决定答案。`,
      );
      await era.printAndWait(
        `${montjeu.name} 将那锐利的双眸转向 ${you.name}，眉间皱着皱纹，用语言追击。`,
      );
      await montjeu.say_and_wait(`我不满意。`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name} 继续说了下去。`);
      await montjeu.say_and_wait(
        `之前你的实绩有一定的说服力。好的地方就那样，坏的地方也能改正。即使最大限度地发挥${treve.uma_sex_title}素质的做法结果看起来是放任主义，我也能理解这是一种育成手段。如果是负责完成度高的 ${
          treve.name
        }，就会越来越有说服力。`,
      );
      await era.printAndWait(`看起来是这样的吧。`);
      await montjeu.say_and_wait(
        `但是，现在你的做法就只是放任不管。你只是放弃了自己能做的事，放弃了 ${treve.name} 的完全性的努力，你只是个局外人。`,
      );
      await era.printAndWait(`那么，怎么办呢。`);
      await era.printAndWait(
        `到现在为止，都相信自己的技术，信赖自己负责的${treve.uma_sex_title}。那么，一位完美的${treve.uma_sex_title}，残缺的自己该如何触碰？`,
      );
      await era.printAndWait(`${you.name} 该对${treve.sex}怎么想？`);
      await era.printAndWait(`${montjeu.name} 继续。`);
      await montjeu.say_and_wait(
        `凯旋门赏是一堵高墙，即使是法国的天才，也不是那么容易就能拿下的。`,
      );
      era.printButton(`「意思是说，照现在的状态是赢不了的？」`, 1);
      await era.input();
      await montjeu.say_and_wait(`是啊。`);
      await era.printAndWait(
        `远处的 ${treve.name} 在田野上奔跑。像跟在后面一样，不知什么时候增加了的少年少女也在跑。`,
      );
      await era.printAndWait(`${treve.sex}那样做，谁都会着迷吧。`);
      await era.printAndWait(
        `然后把那些毫无困难地变成力量，用天才的能力也能赢比赛吧。`,
      );
      await era.printAndWait(
        `就像是肯定心中嘟哝的那句话一样，曾经的传说开口了。`,
      );
      await montjeu.say_and_wait(
        `${treve.sex}会赢的。一定是没有你也能赢的强大嫩芽。`,
      );
      era.printButton(`「我知道。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`正因为如此，我必须要问。`);
      await era.printAndWait(
        `${montjeu.name} 站起来，瞪着 ${you.name} 的眼睛虽然有点冷，但绝对不是在看不起人。`,
      );
      await era.printAndWait(
        `被直截了当地指出缺点的公平的舞台，似乎紧紧地握住了 ${you.name} 的心。`,
      );
      await era.printAndWait(`有种把至今为止避开的东西推到眼前的感觉。`);
      await montjeu.say_and_wait(
        `一个人也能赢的 ${treve.name} 旁边，有你的理由。`,
      );
      await era.printAndWait(`${treve.name} 从远处挥手致意。`);
      await era.printAndWait(
        `${montjeu.name} 温柔地微笑着向${treve.sex}招手，而 ${you.name} 只能在长椅上垂下肩膀，目不转睛地盯着${treve.sex}。`,
      );
      await montjeu.say_and_wait(
        `你应该在凯旋门前给出答案，${you.actual_name}，否则你会夺走${treve.sex}的将来。`,
      );
      await era.printAndWait(
        `很多孩子都在追着又跑出去的 ${treve.name} 的背影。`,
      );
      await era.printAndWait(`它变得朦胧，消失在森林中。`);
    };
    f.title = title;
    return f;
  })(),
  before_prix_lat_classical: (() => {
    const title = '就连「暴君」都能粉碎的……';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `${you.name} 清楚地记得接受 ${treve.name} 定下的胜负服样式时候的事情。`,
      );
      await era.printAndWait(
        `${treve.sex}参加G1比赛的时机比其他的${treve.uma_sex_title}早，${
          treve.sex
        }的比赛服马上就要定做了，但只有一点是${treve.sex}绝对不会让步的。`,
      );
      era.printButton(`「这样真的可以吗？」`, 1);
      await era.input();
      await treve.say_and_wait(`这个好！`);
      await era.printAndWait(
        `然后在挺起胸膛的${treve.sex}面前，${you.name} 目不转睛地盯着文件。`,
      );
      await era.printAndWait(
        `${treve.sex}的话语有力地要求消除设计师提出的一些方案。`,
      );
      await era.printAndWait(`蓝色、白色、红色的三弦琴。`);
      await era.printAndWait(`这是众所周知的法国国旗的三种颜色。`);
      await era.printAndWait(`然后把它作为胜负服的底色。`);
      await era.printAndWait(`但是，同意那个提案的人正是……`);
      await era.printAndWait(
        `如果是${treve.sex}的话，无论什么东西都能背负吧。`,
      );
      await era.printAndWait(
        `在休息室进行最后一次检查的 ${treve.name}，一边仔细确认没有一点破绽的胜负服，一边在镜子前认真地看着自己的身影。`,
      );
      await era.printAndWait(
        `今天的凯旋门赏不仅是英国和德国，连日本的${treve.uma_sex_title}也参加了。`,
      );
      await era.printAndWait(
        `在这场备受国际瞩目的比赛中，${treve.sex}会穿上如国旗般色彩的决胜服，但${treve.sex}却丝毫不紧张。`,
      );
      await era.printAndWait(
        `对着坐在椅子上凝视着${treve.sex}准备模样的 ${you.name}，${treve.name} 转过身来。`,
      );
      await era.printAndWait(
        `对穿着和那天一样的大衣的 ${you.name} 来说，那时候是想象不到穿着胜负服的 ${treve.name} 的。`,
      );
      await treve.say_and_wait(`${callname}。`);
      era.printButton(`「嗯。」`, 1);
      await era.input();
      await treve.say_and_wait(
        `谢谢你带领我走到这一步，让我参加了好几个G1，关心我，比任何人都认真。即便是面对凯旋门赏，面对着这么大的目标。`,
      );
      era.printButton(`「等结束了再说。」`, 1);
      await era.input();
      await era.printAndWait(
        `笑着说「是啊」的 ${treve.name} 没有任何窘迫的神色。`,
      );
      await era.printAndWait(
        `在这个凯旋门赏的舞台前，${you.name} 才理解了${treve.sex}的特异才能。`,
      );
      await era.printAndWait(`那既不是身体的能力，也不是精神上的稳定性。`);
      await era.printAndWait(`与训练后可能掌握的那些不同，所谓天纵之才。`);
      await era.printAndWait(`对背负别人的期待没有任何压力。`);
      await era.printAndWait(
        `就像一个巨大的器皿，可以无限地将他人的信任和希望化为力量。`,
      );
      await era.printAndWait(
        `由于稀有的完成度和高度而产生的那个，切断了一切消极的可能性，使 ${treve.name} 前进。`,
      );
      await era.printAndWait(`${you.name} 不得不再一次问自己。`);
      await era.printAndWait(`为什么自己是${treve.sex}的训练员呢？`);
      await era.printAndWait(
        `把手放在门把手上的${treve.sex}，再回头看 ${you.name} 一次，然后说出那句话。`,
      );
      await era.printAndWait(`是愿望，还是诅咒呢。`);
      await era.printAndWait(`仿佛一切都在跃动。`);
      await treve.say_and_wait(`我会赢的，作为你的 ${treve.name}。`);
      era.printButton(`沉默不语（好感+5）`, 1);
      era.printButton(`「你会赢的。」（好感+15）`, 2);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_classical: (() => {
    const title = '最强';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `至今为止从未有过的充满自信的话，可 ${you.name} 怎么听都觉得空虚。`,
      );
      await era.printAndWait(
        `听到的欢呼声，就像远雷一样，即使距离遥远也震耳欲聋。`,
      );
      await era.printAndWait(
        `关于 ${treve.name} 的奔跑，需要 ${you.name} 修改的部分几乎不存在。`,
      );
      await era.printAndWait(`让这种罕见的才能开花的或许是 ${montjeu.name}。`);
      await era.printAndWait(
        `然后，就像让人追忆那个 ${montjeu.name} 的奔跑一样。`,
      );
      await era.printAndWait(
        `在先行对策的某一瞬间，跑在集团前方的 ${treve.name}，待到最后的直线的时候。`,
      );
      await era.printAndWait(`当隆尚观众的热情达到最高潮的时候。`);
      await era.printAndWait(
        `面对如此憧憬、日本曾数十年都没能获得的凯旋门赏，${you.name} 心中两种感情交织在一起。`,
      );
      await era.printAndWait(`一是对胜利的确信。`);
      await era.printAndWait(
        `${treve.name} 在之前的比赛中也以巧妙的位置感取得了胜利，${treve.sex}最擅长先行的策略，尤其是处在集团领先位置的时候。`,
      );
      await era.printAndWait(
        `如果有从那里开始的末脚，能追上不败${treve.teen_sex_title}的${treve.uma_sex_title}就不存在。`,
      );
      await era.printAndWait(
        `说白了，可以说到了这种环节，${treve.sex}的胜利是被确定的，就是有那么大的确信。`,
      );
      await era.printAndWait(`还有一个是败北的恐怖。`);
      await era.printAndWait(
        `但是，这并不意味着现在在眼前奔跑的 ${treve.name} 会输。`,
      );
      await era.printAndWait(
        `几年前，面对那位日本的怪鸟，那个 ${montjeu.name} 出现在好位置时，全身都冻住了的恐怖。`,
      );
      await era.printAndWait(
        `无法战胜${treve.sex}的绝望的闪回，与展现出完全相同姿态的 ${treve.name} 重叠在一起。`,
      );
      await era.printAndWait(`听到欢呼声，还很远。`);
      await era.printAndWait(
        `在最后一条直线上领先的 ${
          treve.name
        }，渐渐地拉开了后面的${treve.uma_sex_title}。`,
      );
      await era.printAndWait(`就像被填满隆尚的声援所支持一样。`);
      await era.printAndWait(`到底，那个英姿有自己贡献的部分吗？`);
      await era.printAndWait(
        `${you.name} 抓住栅栏，稍微探出颤抖的身体，清楚地捕捉到${treve.sex}的侧脸。`,
      );
      await era.printAndWait(
        `一边滴着汗，一边跑过重马场最后100米的${treve.sex}，${you.name} 能做什么呢。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`发不出声音。`);
      await era.printAndWait(
        `${treve.sex}的胜利已经确定了，再也没有 ${you.name} 应该做的事了。`,
      );
      await era.printAndWait(
        `兴奋的欢呼声震耳欲聋，通过这种声响，${you.name} 清楚地理解了 ${treve.name} 踏上凯旋门赏终点线的瞬间。`,
      );
      era.println();
      await era.printAndWait(`${you.name} 没能看到那个瞬间。`);
      era.println();
      await era.printAndWait(
        `被问到获得凯旋门赏的感想，手机通知画面上怒涛般涌来的短信，甚至都记不清对从赛场回来的 ${treve.name} 说了什么。`,
      );
      await era.printAndWait(
        `但是只有一件事，深深地刻在了 ${you.name} 的脑海里。`,
      );
      await era.printAndWait(
        `在凯旋门赏结束后的采访中，背对着葡萄酒红的背板的 ${treve.name} 抱着奖杯回答了别人的问题时说的话。`,
      );
      await era.printAndWait(
        `当被问到某件事的瞬间，恍惚的 ${you.name}，右手一下子被抓住了。`,
      );
      await treve.say_and_wait(`明年也和${you.sex}一起赢！`);
      await era.printAndWait(`为什么。`);
      await era.printAndWait(`为什么是自己。`);
      await era.printAndWait(
        `是什么，让空虚的自己，站在 ${treve.name} 的旁边。`,
      );
      await era.printAndWait(
        `闪光灯的白色亮光很耀眼，可累积了疲劳的眼睛却什么都看不进。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_25: (() => {
    const title = '陌路。';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, you) => {
      await era.printAndWait(`从凯旋门赏之后过了半年多。`);
      await era.printAndWait(
        `${treve.name} 的态度至今没有改变，对 ${you.name} 的指导坦率地接受。`,
      );
      await era.printAndWait(
        `虽然有很多方面的成长，但是对练习的动力也没有下降。`,
      );
      await era.printAndWait(
        `${treve.sex}的可爱被更多的人所认知，随着比赛的不断增加，${treve.sex}的粉丝也越来越多。`,
      );
      await era.printAndWait(
        `包括凯旋门赏上的战果在内，现在的${
          treve.sex
        }作为一个背负着法国的${treve.teen_sex_title}而驰名。`,
      );
      await era.printAndWait(`但是，比赛的结果不会因此改变。`);
      await era.printAndWait(
        `${treve.name} 的私人物品比去年增加了很多的训练员室，在被暑气侵蚀的炎热中。`,
      );
      await era.printAndWait(
        `让人 ${you.name} 认为即使该让疲劳的身体休息也必须在这里的理由只有一个。`,
      );
      await era.printAndWait(`关于今年以来 ${treve.name} 的战绩。`);
      await era.printAndWait(
        `在眼前的电脑中，春天和初夏跑过的两场G1的影像不断循环。`,
      );
      await era.printAndWait(`距离也和去年一样，马场的情况也不是特别差。`);
      await era.printAndWait(`尽管如此，前者是第二名，后者是第三名。`);
      await era.printAndWait(
        `虽然 ${treve.name} 一直在练习，但在没有明确的解决方法的情况下，赌上连霸的下一个红宝锦标也留下了不安。`,
      );
      await era.printAndWait(
        `看着反复出现的影像和${treve.sex}的状况，已经过了几个小时了呢。`,
      );
      await era.printAndWait(
        `乌鸦的叫声使 ${you.name} 猛然惊醒。回头一看，窗外被晚霞染成了橙色。`,
      );
      await you.say_and_wait(`……糟了。`, true);
      await era.printAndWait(`今天应该有训练的计划。`);
      await era.printAndWait(
        `只顾自己而忘记${treve.sex}，慌忙拿出手机，收到了一个短信的通知。`,
      );
      await era.printAndWait(
        `在省略的通知中也清楚地知道了大约一个小时前来的那个是来自 ${treve.name} 的。`,
      );
      await treve.say_and_wait(`对不起，今天身体不舒服，请让我休息。`);
      await era.printAndWait(`训练的计划应该在那之前就有了。`);
      await era.printAndWait(`也就是说，经过一定的时间之后才发送了那个信息。`);
      await era.printAndWait(
        `${you.name} 一边抱着头，一边想给${treve.sex}回信`,
      );
      await era.printAndWait(
        `但是，无论什么借口在这里都是徒劳的，还是只发送简洁的信息比较好。`,
      );
      era.printButton(`「明白了。」`, 1);
      await era.input();
      await era.printAndWait(
        `对于最近没有取得成果的 ${treve.name}，${you.name} 自己也充分理解不得不面对${treve.sex}了。`,
      );
      await era.printAndWait(
        `不知道原因的训练员，到底能胜任${treve.sex}的什么呢。`,
      );
      await era.printAndWait(`${you.name} 站起来才感觉到肚子饿了。`);
      await era.printAndWait(`（……红茶可以吗？）`);
      await era.printAndWait(`茶叶罐架子，轻飘飘的清爽香味刺激着大脑的深处。`);
      await era.printAndWait(
        `有一种大脑放空的顺畅，${you.name} 拿起了一个罐子。`,
      );
      await era.printAndWait(
        `但是里面几乎没有什么东西，只剩下残留的茶叶和留在罐子里残香，是柠檬香味的。`,
      );
      await era.printAndWait(`从那天以来，${treve.name} 就喜欢喝这个。`);
      await era.printAndWait(`偶尔来训练员室的话，泡这种茶的情况也很多。`);
      await era.printAndWait(`到了秋天，寒冷的日子也会增加。`);
      await era.printAndWait(`${you.name} 默默地合上罐子。`);
      await you.say_and_wait('独自去买点吧……', true);
    };
    f.title = title;
    return f;
  })(),
  o_s_95_25: (() => {
    const title = '消耗殆尽';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `想着清楚的过去和渗透的今后的事情，马上就到达了目的地。`,
      );
      await era.printAndWait(
        `走进那家茶店，店主看到 ${you.name} 时又抬起眉头。`,
      );
      await you.say_as_passer_by_and_wait('茶叶店店主', '嗯？这次是一个人吗？');
      era.printButton(`「别在意。」`, 1);
      await era.input();
      await era.printAndWait(
        `瞥了一眼店内后，${you.name} 把脚转向${treve.sex}津津有味地盯着看过的花茶专柜。`,
      );
      await era.printAndWait(
        `和那天一样的阵容丰富，排列着苹果、杏子、红莓苔等华丽水果的插图。`,
      );
      await era.printAndWait(
        `按照那个顺序到达L（lemon）的时候，${you.name} 的手指指向了空架子。`,
      );
      await era.printAndWait(`从弯弯曲曲的货架中走出来，把目光转向店主。`);
      era.printButton(`「……没有柠檬香味的吗？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        '啊，这个季节的生产数量不好啊。因为是法国的品牌，所以本来流通数量就很少。到有一些交了定金的。',
      );
      await era.printAndWait(
        `他说的对。这个东西除了这个男人的店以外没有找到过。`,
      );
      era.printButton(`「预计到货？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        '暂时没有，批发商好像也没有库存。',
      );
      era.printButton(`「是吗——不，谢谢。」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 想就这样离开店里，但是被一句话留住了。`,
      );
      await you.say_as_passer_by_and_wait('茶叶店店主', `${treve.sex}还好吗？`);
      await era.printAndWait(`既不能肯定也不能否定。`);
      await era.printAndWait(
        `${treve.name} 对于G1的惜败其实在想什么，${you.name} 似乎不太明白。`,
      );
      await you.say_and_wait('不能发挥作用的训练员。', true);
      await era.printAndWait(`男人在收银台上扭扭捏捏的。`);
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        '你还好，对我来说，我更担心那个孩子的样子。我会问问同行有没有那种茶叶。',
      );
      era.printButton(`「还记得吗？」`, 1);
      await era.input();
      await era.printAndWait(
        `应该没有向媒体透露过那个茶叶是 ${treve.name} 的喜好，但是男人苦笑着说。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        '你经常来我家，怎么可能忘记你带来的客户呢？',
      );
      era.printButton(`「真是的……」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶叶店店主',
        `嗯，也有因为我是${treve.sex}的粉丝……`,
      );
      await era.printAndWait(
        `男人一边敲着手机的画面，一边用一种奇怪的表情嘟囔着。`,
      );
      await era.printAndWait(
        `${treve.name} 背负着许多人的期望。也有为了做力所能及的事而劳苦的人。`,
      );
      await era.printAndWait(`再一次，${you.name} 不得不问。`);
      await era.printAndWait(`为什么自己是 ${treve.name} 的训练员呢？`);
      await era.printAndWait(`${you.name} 不清楚该怎么走下去。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_28: (() => {
    const title = '巅峰之下';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `回过神来，${you.name} 已经走在了香榭丽舍大道上。`,
      );
      await era.printAndWait(
        `月亮升到东方的天空，在黑暗增加的街道上点亮了路灯。`,
      );
      await montjeu.say_and_wait('找到答案了吗？');
      await era.printAndWait(
        `摇头。但是，${montjeu.name} 似乎预感到了这一点，并没有指责，只是继续说。`,
      );
      await montjeu.say_and_wait('那么——');
      era.printButton(`「只是。」`, 1);
      await era.input();
      await era.printAndWait(`${you.name} 注视着${montjeu.sex}的眼睛。`);
      await era.printAndWait(
        `无论是几年前还是半年前，都无法正面相对的${montjeu.sex}的眼睛。`,
      );
      await era.printAndWait(`${you.name} 知道这不是自己一个人能解决的问题。`);
      await era.printAndWait(
        `${you.name} 渐渐感受到了一直害怕面对谁，暴露自己的极限。`,
      );
      era.printButton(`「希望你能听我说过去的故事。」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name} 盯着 ${you.name} 的脸看了一会儿。`,
      );
      await era.printAndWait(
        `面对快要把身体切开的视线甚至想逃跑，但是如果不能站在这里，什么都不会开始。`,
      );
      await era.printAndWait(
        `于是${montjeu.sex}走了两三步，一边邀请 ${you.name} 一边坐在长椅上。`,
      );
      await era.printAndWait(`坐在旁边，${montjeu.name} 开场白说。`);
      await montjeu.say_and_wait('你在我这里话说的再漂亮也……');
      era.printButton(
        `「如果有那么一天，我也会和 ${treve.name} 说同样的话。」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……我明白了。');
      await era.printAndWait(`${you.name} 这样做，是要面对自己。`);
      await era.printAndWait(`那就像是解剖每个人都无可奈何的那份不成熟一样。`);
      era.printButton(`回忆痛苦的过去`, 1);
      await era.input();
      await you.say_and_wait(
        `我在最前列看到了几年前你的凯旋门赏，你和怪鸟来到这里，在竭尽全力的战斗之时，怪鸟被超越的样子的时候，我被无能为力的无力感袭击了。`,
      );
      await era.printAndWait(
        `直截了当地说，${montjeu.sex}对日本的很多训练员来说是一种创伤。`,
      );
      await era.printAndWait(`高不可攀的墙，绝对的传说。`);
      await era.printAndWait(`${montjeu.name} 什么都不问。`);
      await montjeu.say_and_wait(`但是————你有 ${treve.name}。`);
      await era.printAndWait(`${montjeu.name} 暂时把目光转向了夜晚的塞纳河。`);
      await era.printAndWait(
        `黑色摇曳的水面上没有星星，只是静静地回响着捕捉不到的风吹出的波浪声。`,
      );
      await era.printAndWait(
        `可 ${treve.name} 是个坚强的${treve.uma_sex_title}，${treve.sex}一个人也能赢。`,
      );
      await montjeu.say_and_wait(
        `……你还记得${treve.sex}说过${treve.sex}是一个能背负人们期待的容器吗？`,
      );
      era.printButton(`「嗯。」`, 1);
      await era.input();
      await era.printAndWait(`无限的强度，非人的才能。`);
      await era.printAndWait(`正因为有了那个，现在的 ${treve.name} 才很强。`);
      await montjeu.say_and_wait(
        `${treve.sex}面对压力的强度是相当大的。对于今后也会无限地背负人们的期待，${treve.sex}毫不犹豫。`,
      );
      await montjeu.say_and_wait(
        `只是，如果那个天生的性质创造了${treve.sex}的价值观的话，你会怎么想呢？`,
      );
      await era.printAndWait(`${montjeu.name} 把视线转向 ${you.name}。`);
      await era.printAndWait(
        `期待基本上是稀有的。只有不断的努力和拿出出色成果才能从别人那里得到，本来就不是理所当然的。`,
      );
      await era.printAndWait(`但是对于 ${treve.name} 来说，这是理所当然的。`);
      await era.printAndWait(
        `${
          treve.sex
        }自己理所当然地做的事，在无限期待的过程中，${treve.teen_sex_title}在这个世界上发现了什么。`,
      );
      await era.printAndWait(`可能性和现状在脑海中相连。`);
      era.printButton(`「……对不被期待的事情的恐惧？」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement。');
      await era.printAndWait(
        `曾经成为传说，一个受到所有人期待的${treve.uma_sex_title}继续道。`,
      );
      await montjeu.say_and_wait(
        `有必要回应期待。越是回应，新的期待就越会增加。如果${treve.sex}处在在这样的循环中，就有可能被误解为期待自己的价值。如果这是构成${treve.sex}根本的想法，就应该避免轻易否定。`,
      );
      era.printButton(`「只能对${treve.sex}抱有期待。」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name} 首肯了。`);
      await montjeu.say_and_wait(
        `要做到这一点，我必须对你这个人物有所期待，因为如果没有价值，我也不能把${treve.sex}托付给别人。`,
      );
      await era.printAndWait(`${you.name} 知道。`);
      await era.printAndWait(`但是，怎么办才好呢？`);
      await era.printAndWait(
        `${montjeu.name} 站起来，摇了摇长发，然后俯视 ${you.name}。`,
      );
      await era.printAndWait(
        `与审判罪人的神一样的眼睛不同，那里混入了某种程度的同情。`,
      );
      await era.printAndWait(`那是对今后也要不断被『痛苦』欺凌的人的怜悯吗。`);
      await montjeu.say_and_wait('我的职责到此为止。');
      era.printButton(`「……对不起。」`, 1);
      await era.input();
      await era.printAndWait(
        `只说了句祝 ${you.name} 有一个美好的夜晚，${montjeu.name} 离开了。`,
      );
      await era.printAndWait(
        `仰望天空。满月在俯视 ${you.name}，静静地飘在那里。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Fly Away';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `${you.name} 在训练员室等着约好见面的 ${treve.name}。`,
      );
      await era.printAndWait(
        `在${treve.sex}来之前的这段时间里，重新审视之前比赛的影像。`,
      );
      await era.printAndWait(
        `一个一个地按顺序排出 ${treve.name} 不顺利的理由。但是，还有其他问题。`,
      );
      await era.printAndWait(`${you.name} 重新审视了最近比赛的最终直线。`);
      await era.printAndWait(
        `${treve.name} 和以前一样，为了从第一集团脱出到前方而跃跃欲试。`,
      );
      await era.printAndWait(
        `但在这场比赛中没能摆脱包围网，得意的末脚毫无建树就结束了。`,
      );
      await era.printAndWait(
        `原来 ${treve.name} 就是个算不得高大的${treve.uma_sex_title}。`,
      );
      await era.printAndWait(
        `而且，如果战略也被知晓的话，出现互相勾结不让${treve.sex}向前的集团也不奇怪。`,
      );
      await era.printAndWait(
        `最重要的是，${treve.sex}的做法很容易预料——${treve.name} 的跑动很像 ${montjeu.name}。`,
      );
      await era.printAndWait(
        `那个时候，训练员们致力于制定应对 ${montjeu.name} 的战略，在 ${treve.name} 身上就这样通用了。`,
      );
      await era.printAndWait(
        `${you.name} 需要让传奇的接班人赢下去，能给予什么？`,
      );
      await era.printAndWait(
        `在这样烦恼的过程中，约定的时间已经过了一个小时左右。但是 ${treve.name} 没有来的样子。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_33: (() => {
    const title = '仅此、唯一';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, montjeu, you, callname) => {
      await era.printAndWait(
        `从那天之后，${treve.name} 不来 ${you.name} 身边的日子越来越多了。`,
      );
      await era.printAndWait(`联络也逐渐中断，最近甚至没有收到信件的通知。`);
      await era.printAndWait(`对于这样的情况，${you.name}……`);
      era.printButton(`一定没有强烈责备${treve.sex}的资格吧。`, 1);
      era.printButton(`没有理由置之不理。`, 2);
      const ret = await era.input();
      if (ret === 2) {
        await era.printAndWait(
          `不知怎的，${you.name} 想起了和 ${treve.name} 相遇时的场景。`,
        );
        await era.printAndWait(`该动身了。`);
        await era.printAndWait(
          `……傍晚，游览船慢慢地通过 ${you.name} 正下方的塞纳河，对岸看到了丢勒里花园。`,
        );
        await era.printAndWait(`初秋的风吹拂着大衣的下摆。`);
        await era.printAndWait(
          `用手触摸那个部分，${you.name} 思考了应该想起的过去。`,
        );
        await era.printAndWait(`成为训练员的理由。`);
        await era.printAndWait(
          `胜利也好，失败也好，一定是后来才来的，敲开特雷森大门时脑海中的东西，应该是更简单的希望。`,
        );
        await era.printAndWait(`那个是……`);
        await treve.say_and_wait(`……${callname}？`);
        await era.printAndWait(`多次听到的声音。`);
        await era.printAndWait(
          `回头一看，和那时一样穿着大衣的 ${treve.name} 站在那里。`,
        );
        await treve.say_and_wait(`为什么会在这里？`);
        era.printButton(`「那是——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.sex}马上就把目光从 ${you.name} 身上移开了。`,
        );
        await era.printAndWait(`如山般巍然不动的断绝。`);
        await era.printAndWait(
          `没能面对${treve.sex}，让${treve.sex}一个人，这就是 ${you.name} 必须面对的过去。`,
        );
        await era.printAndWait(`哪里都没有夹着让 ${you.name} 后悔的余地。`);
        await treve.say_and_wait(`……对不起。`);
        await era.printAndWait(
          `${you.name} 出声挽留着擦肩而过想要跑出去的${treve.sex}。`,
        );
        era.printButton(`「${treve.name}。」`, 1);
        await era.input();
        await era.printAndWait(
          `在 ${you.name} 的前面，${treve.name} 停了下来。`,
        );
        await era.printAndWait(
          `但是，${treve.sex}并没有把头转向 ${you.name}，而是一直背朝 ${you.name}。`,
        );
        await era.printAndWait(`在沉默的喧嚣中，${you.name} 慢慢地开口。`);
        await era.printAndWait(`疼痛还在游走。`);
        era.printButton(`「还记得你选我的时候说的话吗？」`, 1);
        await era.input();
        await treve.say_and_wait(`……我好像说过很多话。`);
        await you.say_and_wait(
          `你说『如果负责能连霸凯旋门赏的${treve.uma_sex_title}的话，作为社会人的评价也会提高吧。』`,
        );
        await treve.say_and_wait(
          `那个……太不好意思了，如果可以的话，我希望你当没发生过，${you.actual_name}。`,
        );
        await era.printAndWait(`${treve.sex}微微低下头。`);
        era.printButton(`「我一直不知道。」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} 很强。对于至今为止的 ${you.name} 来说，${treve.sex}是个优秀过头的担当。`,
        );
        await era.printAndWait(
          `在内心的某个地方，这种不平衡引起了意识的背离。`,
        );
        await era.printAndWait(
          `不管${treve.sex}取得了多少优秀的战绩，也不能为${treve.sex}高兴。`,
        );
        era.printButton(`「你一直把我当作唯一的训练员来看吧。」`, 1);
        await era.input();
        await era.printAndWait(`那技术可能是 ${montjeu.name} 给予的。`);
        await era.printAndWait(
          `尽管如此，现在在${treve.sex}旁边的是 ${you.name}。`,
        );
        await era.printAndWait(
          `确认${treve.sex}的脚质，理解${treve.sex}的特性，继续看${treve.sex}的比赛的是 ${you.name}。`,
        );
        await era.printAndWait(`这个立场才是有意义的。`);
        await era.printAndWait(
          `作为这个世界上唯一的 ${treve.name} 训练员，${you.name} 有应该托付给${treve.sex}的东西。`,
        );
        await era.printAndWait(`从进入这个世界的那天开始。`);
        await era.printAndWait(
          `从凯旋门赏这个拥有世界最高峰之称的比赛诞生之日开始。`,
        );
        await era.printAndWait(
          `从接触到带着『我们』没有的可能性出生的『${treve.couple_title}』的那天开始。`,
        );
        await era.printAndWait(`作为一个人，${you.name} 是愿意的。`);
        era.printButton(`「${treve.name}，把我的灵魂烧焦吧。」（爱慕+5）`, 1);
        await era.input();
        await era.printAndWait(`总有一天，人会遇到一个能改变自己全部的存在。`);
        await era.printAndWait(
          `${you.name} 想一定是为了实现这个愿望，所有的偶然都在这里结合起来了。`,
        );
        await era.printAndWait(`现在明白了，自己是${treve.sex}的专属训练员。`);
        await era.printAndWait(`把期待寄托在${treve.sex}身上。`);
        await era.printAndWait(`${treve.name} 微微地抖了抖肩膀。`);
        await era.printAndWait(
          `回头的${treve.sex}浅浅地笑着，但那双眼睛里有一丝闪耀的某物。`,
        );
        await era.printAndWait(
          `${treve.sex}似乎很高兴，但又为难地动了动，把手放在胸前。`,
        );
        await era.printAndWait(
          `在塞纳河上吹起的风拂起${treve.sex}红色的丝带。`,
        );
        await treve.say_and_wait(`你对我有期待吗？`);
        await era.printAndWait(
          `在那简短的话语中，${treve.sex}封闭的不安微微颤抖着出现了。`,
        );
        await era.printAndWait(
          `忘记对${treve.sex}下注的自己，为了确实接受那个真意，强烈地点头。`,
        );
        await era.printAndWait(
          `${treve.name} 对 ${you.name} 的动作眯缝着眼睛。`,
        );
        await treve.say_and_wait("D'accord!");
        await era.printAndWait(`最后留下的一滴眼泪，在晚霞的光中反射着光彩。`);
        await era.printAndWait(`此时此地，你们之间终于仅有一个愿望。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_senior: (() => {
    const title = '迈向巅峰再制胜';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(`秋高气爽的天空在隆尚的正上方蔓延。`);
      await era.printAndWait(
        `可以说是与迎接来自全世界最高峰的${treve.uma_sex_title}们的这场比赛相称的气候吧。`,
      );
      await era.printAndWait(`虽然穿着平时的大衣来了，但是有点热。`);
      await era.printAndWait(`在观众席的最前排握栅栏也是第二次。`);
      await era.printAndWait(
        `虽然感觉时间一眨眼就过去了，但是在再一次站在这里之前发生的事情，对你们来说都是必要的。`,
      );
      await era.printAndWait(`那些事情的分量是前所未有的。`);
      await era.printAndWait(
        `然后，成为 ${you.name} 应该在这里的理由，支撑着这一瞬间。`,
      );
      await montjeu.say_and_wait(`没想到这么快啊。`);
      await era.printAndWait(`站在马夫旁边的人物面向 ${you.name} 微笑。`);
      await era.printAndWait(
        `${you.name} 觉得终于可以向 ${montjeu.name} 展示当时的答案了。`,
      );
      await era.printAndWait(`你们一起盯着进入大门的 ${treve.name}。`);
      await montjeu.say_and_wait(`战术呢？`);
      era.printButton(`「没有新奇的东西。」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `……你疯了吗？最清楚的人是你，你能理解${treve.sex}的特性，并不断突破妨碍，对吧？在此基础上，你必须采取任何该用的对策吧？`,
      );
      await era.printAndWait(
        `模仿 ${montjeu.name} 的${treve.sex}的跑法，很难改变。`,
      );
      await era.printAndWait(
        `已经察觉到，对 ${
          treve.name
        } 的适应是由全世界的${treve.uma_sex_title}逐渐进行的。`,
      );
      await era.printAndWait(`即便如此，也没有什么能给予${treve.sex}的东西。`);
      era.printButton(`「尽管如此，我还是要让${treve.sex}赢。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`……`);
      await era.printAndWait(
        `第二次凯旋门赏。复杂的坡度和深沉的草坪，2400 米的舞台。`,
      );
      await era.printAndWait(
        `伴随着轰鸣声奔跑的${treve.couple_title}和观众的热烈声援，其中也包含了不少对现在开始背负法国这个国家本身的 ${treve.name} 的期待。`,
      );
      await era.printAndWait(
        `今年以来没有赢过，也有很多人察觉到${treve.sex}的衰落。`,
      );
      await era.printAndWait(
        `但是，即使注意到这些，也为了祈愿的人们绝不停下。`,
      );
      await era.printAndWait(
        `${treve.name} 踏上了这个世界上最长的两分半路程。`,
      );
      await era.printAndWait(
        `看着穿过布洛涅森林的${treve.couple_title}，抱起胳膊。${montjeu.name} 挺直腰板注视。`,
      );
      await montjeu.say_and_wait(
        `……我知道战略已经破裂了。即便如此，如果不采取先行对策，属于${treve.sex}的胜负就无法开始。`,
      );
      era.printButton(`「用力气挤开的话？」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `这是不可能的。本来就有很激烈的竞争，而且这次还背负着上一年度霸主的名号。现在的 ${treve.name}，恐怕完全被盯上了。`,
      );
      await era.printAndWait(
        `实际上，在混入领先集团的情况下，${treve.name} 虽然成功了，但能够往前走的路线被全部锁死。`,
      );
      await era.printAndWait(`确实被封锁了——在进入最终直线之前`);
      await era.printAndWait(`在拐角处拐弯，比赛来到了中盘。`);
      await era.printAndWait(
        `平时在先头集团前形成步调，但 ${treve.name} 以被挤到后方的形式追赶着集团。`,
      );
      era.printButton(`「${montjeu.name}。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`怎么？`);
      era.printButton(`「你为什么擅长先行策略？」`, 1);
      await era.input();
      await era.printAndWait(
        `在视线转向的前方，${treve.sex}一边眺望着集体暂时凝固的状态下持续进行的比赛一边低声说。`,
      );
      await montjeu.say_and_wait(
        `虽然有符合我的体力分配和脚力的情况————是啊，我想最大的原因是站在了合适我的位置上。我不是很有耐心的类型，所以和必须等到最后一条直线的决胜很不投缘。`,
      );
      await era.printAndWait(`${montjeu.name} 坦然地凝视着前方。`);
      era.printButton(`说明`, 1);
      await era.input();
      await you.say_and_wait(
        `在赛场上心理压力是相当大的。${treve.name} 多少也有点心理上的强度，但很难说是有耐心的人。正因为如此，${treve.sex}一直在采取先行对策。`,
      );
      await montjeu.say_and_wait(`……一直，原来如此。`);
      await era.printAndWait(`${montjeu.name} 好像察觉到了什么。`);
      await era.printAndWait(
        `做那个的机会总是有的。但是，到最后为止，都找不到确切的理由下定决心。`,
      );
      await era.printAndWait(
        `正因为如此，即使是第一次的凯旋门赏也没有提案，今年以来的 G1 也没有采取那个战术。`,
      );
      await era.printAndWait(`但是，现在的话。现在正是该下定决心的时候。`);
      await era.printAndWait(`穿过伪终弯，走向最终直线。`);
      await era.printAndWait(
        `${treve.name} 变成了被针对的样子，至今还继续接受着包围网。`,
      );
      await era.printAndWait(`从栅栏探出身子。`);
      era.printButton(`「${treve.name}！！」`, 1);
      await era.input();
      await era.printAndWait(`${treve.name} 往 ${you.name} 这边稍微看了一下。`);
      await era.printAndWait(
        `在休息室的记忆，${you.name} 的作战计划已经传达了。`,
      );
      await era.printAndWait(
        `但是为了不让${treve.sex}踌躇，从正面凝视${treve.sex}的眼睛传达。`,
      );
      await era.printAndWait(
        `在胜利和失败之前，${you.name} 希望一个叫 ${
          treve.name
        } 的${treve.uma_sex_title}，实现自己的梦想。`,
      );
      era.printButton(`「让我看看。」`, 1);
      await era.input();
      await era.printAndWait(
        `用脚尖拍打地面的${treve.sex}，身穿三色决胜服的${treve.sex}，向 ${you.name} 伸出手指。`,
      );
      await treve.say_and_wait(`——为了，${you.actual_name}。`);
      await era.printAndWait(
        `${treve.sex}背负着 ${you.name} 最后终于托付给${treve.sex}的期待，无论到哪里都会跑过去。`,
      );
      await era.printAndWait(
        `${you.name} 知道只要留下哪怕一个不安，${treve.sex}就会有压力。`,
      );
      await era.printAndWait(`正因为如此，才以完美的状态送出了${treve.sex}。`);
      await era.printAndWait(
        `虽然先行策略是 ${treve.name} 自己想要的，但在旁边的 ${you.name} 知道，${treve.sex}的脚本身是无论怎样的进攻都能发挥作用的强大。`,
      );
      await era.printAndWait(
        `正因为如此，${you.name} 才把这个托付给${treve.sex}。`,
      );
      await era.printAndWait(
        `${
          treve.name
        } 包围网前方的${treve.uma_sex_title}那里，仅在一瞬间放慢速度后退。在最终直线这一最后的进攻场所产生的意料之外的行动，让对手回头看向后方。`,
      );
      await era.printAndWait(
        `但是，${
          treve.name
        } 已经不在那里了。为了避开其他的${treve.uma_sex_title}，跑到了最外面。`,
      );
      await era.printAndWait(`然后，被封锁行动而保存的体力在瞬间爆发。`);
      await era.printAndWait(
        `最后关头的集中力就像被磨砺的刀尖一样，抓住了领头者。`,
      );
      await era.printAndWait(`${treve.name} 从大外一口气冲上来。`);
      await era.printAndWait(
        `与到现在为止的跑法完全不同的战术，让观众的嘈杂变得巨大无比。`,
      );
      await montjeu.say_and_wait(`差……！？`);
      await era.printAndWait(
        `这是 ${treve.name} 凭借柔软性随时都能做到的战法。`,
      );
      await era.printAndWait(
        `但是，如果考虑避开拦截网的话，只能采用暂时后退然后再启动的迂回方法。`,
      );
      await era.printAndWait(`利用对手在最终直线上，暴露出间隙的恐惧。`);
      await era.printAndWait(`${treve.name} 瞬间超越先行集团。`);
      await era.printAndWait(
        `而且完全无法预知的，除了${treve.sex}的先行策略以外的战术这一奇袭，引起了想要逃跑的对方的动摇。`,
      );
      await era.printAndWait(`应该完全封锁的对手，在最后的最后袭来。`);
      await era.printAndWait(
        `${treve.sex}甚至超越了 ${montjeu.name} 的影子，在赛道上跑向前方。`,
      );
      await era.printAndWait(
        `蓝色的斗篷飘扬，${you.name} 凝视着${treve.sex}的背影。`,
      );
      await era.printAndWait(
        `${treve.name} 将超过所有的预期，抛弃所有的过去。`,
      );
      await era.printAndWait(
        `然后，背负着所有出生的希望，向人们无法企及的地方奔跑。`,
      );
      await era.printAndWait(`不管忘记了多少愿望，都一定会在某个地方记住的。`);
      await era.printAndWait(`一直在追求能改变这个世界的光辉的某人。`);
      await era.printAndWait(`然后最后，和${treve.sex}相遇了。`);
      await era.printAndWait(`能听到 ${treve.name} 的叫声。`);
      await era.printAndWait(
        `${
          treve.sex
        }用尽最后的力气，在剩下不到 100 米的最后一瞬间超过了领头的${treve.uma_sex_title}，甚至感觉时间停止了。`,
      );
      await era.printAndWait(`${you.name} 觉得你们至今为止的一切都成熟了。`);
      await era.printAndWait(
        `越过计分板的最后的脚步声，比什么都大，响彻这个舞台。`,
      );
      await era.printAndWait(
        `法国赛马史上时隔36年的伟业。实现凯旋门赏连霸的是一个无人捡到的${treve.uma_sex_title}和一个无人捡到的异国训练员。`,
      );
      await era.printAndWait(
        `轻轻地吸气，呼出。满是草坪的味道，似乎滋润了人心。`,
      );
      await era.printAndWait(`如果不在这里的话，确实有看不到的东西。`);
      await era.printAndWait(
        `为此，${you.name} 甚至觉得一直从事着这个职业真的太好了。`,
      );
      await era.printAndWait(`在万雷的喝彩和祝福中。`);
      await montjeu.say_and_wait(`抬起头来。`);
      await era.printAndWait(
        `就如 ${montjeu.name} 说的那样，试着把视线往上看，和不知什么时候站在那里的 ${treve.name} 对视。`,
      );
      await era.printAndWait(
        `${treve.sex}一边喘着粗气，一边流汗————稍微调整了一下呼吸，接着，向 ${you.name} 伸出了右手。`,
      );
      await era.printAndWait(
        `就算 ${you.name} 一时不知道${treve.sex}的意图而感到困惑，${treve.name} 也无视这一点，从栅栏里探出。`,
      );
      await era.printAndWait(
        `在茫然的 ${you.name} 面前，${treve.name} 像个淘气的孩子一样微笑着，然后握住 ${you.name} 的手让 ${you.name} 越过栅栏。`,
      );
      await treve.say_and_wait(`好了，快点！`);
      era.printButton(`「稍微照顾一下老年人吧。」`, 1);
      await era.input();
      await treve.say_and_wait(`接下来是三连冠，没时间了！还有请和我交往！`);
      await era.printAndWait(
        `${you.name} 一边把散落的过去抛下，一边想起深深印在眼里的${treve.sex}的身影。`,
      );
      await era.printAndWait(`最后的直线，是像要将一切都甩开一样的光辉。`);
      await era.printAndWait(
        `而且总有一天，${treve.sex}会让人们看到连那个都重新粉刷过去的奔跑吧。`,
      );
      await era.printAndWait(`一定会带 ${you.name} 去往无法想象的地方。`);
      await era.printAndWait(
        `看着${treve.sex}浮现出的微笑，${you.name} 想这一定是自己现在的全部。`,
      );
      await era.printAndWait(`秋天的天空，无论在哪里都是清爽的。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_42: (() => {
    const title = '永远属于你';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `那是一个假日的早晨，突然内线电话响了，${you.name} 走向门口。`,
      );
      await treve.say_and_wait(`Salut！训练员，我来了！`);
      era.print(`${you.name} 决定：`);
      era.printButton(`关上门`, 1);
      era.printButton(`……看错了吗？（好感-10，爱慕+1）`, 2);
      ret.push(await era.input());
      await treve.say_and_wait(`喂喂，是我啊！`);
      era.printButton(`是来诈骗的吗？`, 1);
      era.printButton(`「请回吧，我没有钱！」（好感-10，爱慕+1）`, 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name} 想要关门，很遗憾人类不可能用腕力战胜${treve.uma_sex_title}。`,
      );
      await era.printAndWait(`门被撬开了。`);
      await era.printAndWait(
        `${treve.child_sex_title}一不小心在门口摔了个屁股蹲儿。`,
      );
      await era.printAndWait(
        `法国的公主、天才${treve.teen_sex_title}，不过在 ${
          you.name
        } 眼前整理头发的样子让人忍俊不禁。`,
      );
      await era.printAndWait(
        `虽然服装依旧是短裤配T恤，但是个子比相遇时大了不少。`,
      );
      await era.printAndWait(
        `欧美人特有的皮肤似乎晶莹剔透，脸上留着些许稚气。`,
      );
      await era.printAndWait(
        `你们在凯旋门赏上取得了胜利。从那以后，在电视和杂志上频繁登场，与品牌公司合作，一跃成为了红极一时的人。`,
      );
      await treve.say_and_wait(`我在哪里由我决定，训练员。`);
      await era.printAndWait(
        `视线和视线互相碰撞。关于主张，${treve.sex}有一定的道理。${treve.name} 脸上露出了自豪的表情。`,
      );
      await era.printAndWait(
        `${treve.name} 是世界最强的${treve.uma_sex_title}，${
          you.name
        } 不会忘记那时的情景。`,
      );
      await era.printAndWait(`身穿蓝色调的胜负服冲过终点线的瞬间。`);
      await era.printAndWait(
        `那是一种兼具与中学生相称的坦率和正直，有着与年龄相称的不服输，充满活力的${treve.uma_sex_title}的感觉。`,
      );
      await era.printAndWait(
        `那时的孩子长大了。个子变高，渐渐成了苗条的模特体型。`,
      );
      await era.printAndWait(
        `头发连发梢都打理的井井有条，简直像人偶一样齐整。`,
      );
      await era.printAndWait(`货真价实的美人。`);
      await treve.say_and_wait(`${callname}。`);
      await treve.say_and_wait(`我不想回去。`);
      await treve.say_and_wait(`但只要你不愿意，我立刻就走。`);
      await era.printAndWait(
        `${treve.sex}的眼睛映出了 ${you.name} 糟糕的脸，不过本来就是刚起床。`,
      );
      era.print(`${you.name} 的答复是……`);
      era.printButton(`「……该干嘛干嘛去。」`, 1);
      era.printButton(`「出去走走吧。」（好感+15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      ret.push(await era.input());
      if (ret[2] === 1) {
        await treve.say_and_wait(`……明白了。`);
        await era.printAndWait(`这可能是标准答案，但或许不是最佳答案。`);
        await era.printAndWait(
          `${treve.name} 直截了当地应答，回到了自己走过来的路上。`,
        );
        await era.printAndWait(
          `按照 ${you.name} 说的回去，${treve.sex}的背影渐行渐远。`,
        );
        await era.printAndWait(
          `那个样子明明是 ${you.name} 想要的，但不知为什么却没能看下去。`,
        );
        await era.printAndWait(`为什么？不，理由很明显。`);
        await era.printAndWait(`——穿透身心的虚脱感慢慢地灼烧着内心。`);
        await era.printAndWait(`不用伸出手吗？不知从哪里传来了那样的话。`);
        await era.printAndWait(
          `想要伸出手，连那个 ${you.name} 都犹豫了。结果 ${you.name} 什么都没做。`,
        );
        await era.printAndWait(`然后 ${you.name} 像想要转移思绪一样回到家里。`);
      } else {
        era.drawLine();
        await era.printAndWait(
          `${treve.name} 依旧穿着短裤和黑色T恤，戴着墨镜。`,
        );
        await era.printAndWait(
          `也许是因为不想被粉丝发现，特征性的栗毛被整理得太整齐，反倒吸引了周围的目光。`,
        );
        await era.printAndWait(
          `据说，${treve.uma_sex_title}的美貌大部分由毛色决定。`,
        );
        await era.printAndWait(
          `当然，长相等也要考虑，但总的来说，毛发的比重更重。`,
        );
        await era.printAndWait(
          `${treve.name} 的头发和尾巴，和这一带的${treve.uma_sex_title}完全不同。`,
        );
        await era.printAndWait(`变装，没有意义啊……`);
        await era.printAndWait(`${treve.name} 从车窗眺望外面的景色。`);
        await era.printAndWait(
          `摇摇晃晃地坐了一会儿，因换乘而下车，为了不在拥挤的人群中走散，${you.name} 牵着 ${treve.name} 的手带路。`,
        );
        await era.printAndWait(
          `突然回头一看，在人群中混迹的${treve.sex}，脸上浮现出像在泥中盛开的花朵一样美丽的笑容。`,
        );
        await era.printAndWait(`因为是休息日，所以行人很多。带家人的也很多。`);
        await era.printAndWait(
          `被妈妈牵着手的孩子东张西望地环视着周围。${treve.name} 对那个孩子有点目不转睛。`,
        );
        await era.printAndWait(
          `${treve.sex}用湿润的眼睛，认真地说出了好似恳求的话语。`,
        );
        await treve.say_and_wait(`再多一点，再多一点就好了。`);
        await era.printAndWait(
          `结果，你们要去的地方只有赛马场，来看了大井赛马场的比赛。`,
        );
        await treve.say_and_wait(`果然是比赛啊！`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(`${treve.name} 有兴致地看着比赛。`);
        await era.printAndWait(`很有趣，现在进行的是G3。`);
        era.printButton(`「有点意外。」`, 1);
        await era.input();
        await treve.say_and_wait(`什么？`);
        era.printButton(`「凯旋门${treve.uma_sex_title}对G3比赛感兴趣。」`, 1);
        await era.input();
        await treve.say_and_wait(`……也许是这样啊。`);
        await treve.say_and_wait(
          `如果你也是训练员的话应该知道，在${treve.couple_title}看来，这也像凯旋门一样。`,
        );
        era.printButton(`「那不是说得太过分了吗？」`, 1);
        await era.input();
        await treve.say_and_wait(`……`);
        await era.printAndWait(`${treve.name} 的话，不知什么时候分量增加了。`);
        await era.printAndWait(`几年前的 ${you.name} 没有资格说${treve.sex}。`);
        await treve.say_and_wait(
          `对${treve.couple_title}来说是大舞台，为此而调整，来到这里。赌上自己的灵魂。所以——`,
        );
        await you.say_and_wait('冲线了。', true);
        era.printButton(`「……是吗？」`, 1);
        await era.input();
        await era.printAndWait(
          `对 ${you.name} 来说，这是一场没有任何区别的G3比赛。`,
        );
        await era.printAndWait(
          `做了普通的准备，普通的努力，有一点闪光的地方。那样的比赛。`,
        );
        await era.printAndWait(
          `也许是因为 ${you.name} 站在训练员的立场上看了很多比赛，所以看漏了重要的东西。`,
        );
        await treve.say_and_wait(`……哈哈。`);
        await era.printAndWait(`干笑盈盈。`);
        await treve.say_and_wait(`……`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `赛马场很冷清。比赛已经结束了。但是，${you.name} 一点也起不来，弯着像灌了铅一样沉重的膝盖，坐在比赛场的观众席上。`,
        );
        await era.printAndWait(`风很冷。`);
        era.drawLine();
        await era.printAndWait(
          `到了深夜，${you.name} 和 ${treve.name} 走在东京的街道上。`,
        );
        await treve.say_and_wait(`……我想参加日本杯。`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name} 接下来似乎要讲一个重要的故事，这点 ${you.name} 心知肚明。`,
        );
        await treve.say_and_wait(`我忘不了你了，训练员。`);
        await treve.say_and_wait(
          `国家、人种什么的，我不知道。但如果是训练员你的话，我觉得会很开心。`,
        );
        await era.printAndWait(`这是 ${you.name} 的罪状。`);
        await era.printAndWait(`感到胸口隐隐作痛，${you.name} 假装没事。`);
        await treve.say_and_wait(`我爱你。`);
        await treve.say_and_wait(`我一直爱你。`);
        await era.printAndWait(`话语很流畅。`);
        await era.printAndWait(
          `一定是反复练习了好几次。为了 ${you.name} 特地练习。`,
        );
        await era.printAndWait(`头脑一片空白。心悸，呼吸好像变粗了？`);
        await era.printAndWait(
          `每次被${treve.sex}展露心意的时候，${you.name} 的心也会被暴露出来。`,
        );
        await era.printAndWait(
          `就像抽丝剥茧一样，${treve.name} 的话就像一张一张地扯掉面纱，让 ${you.name} 的心也赤裸。`,
        );
        await era.printAndWait(`而 ${you.name} 感到了无可奈何的遗憾。`);
        await era.printAndWait(`${treve.name} 反复说了很多话。`);
        await treve.say_and_wait(
          `……呐，${
            you.actual_name
          }。如果我们不是训练员和${treve.uma_sex_title}的话，我们能相遇吗？`,
        );
        era.printButton(`「……不会。」`, 1);
        await era.input();
        await treve.say_and_wait(`也是啊。`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `从你们站的这个地方抬头，天上只有几颗一等星闪闪发光。`,
        );
        await era.printAndWait(`这是从市中心看到的廉价星空。`);
        await era.printAndWait(
          `出生在这低沉的星空下，恐怕也会在这里死去的 ${you.name} 和抱着满分星空般未来的${treve.sex}。`,
        );
        await era.printAndWait(`不平衡什么的很明显。`);
        await era.printAndWait(
          `${you.name} 告诉了眼看就要哭出来的 ${treve.name}。`,
        );
        await era.printAndWait(`夜风吹来，快日落了。`);
        await era.printAndWait(
          `${treve.name} 的眼睛和相遇的时候比没有什么变化。`,
        );
        await era.printAndWait(
          `和至今为止回想过好几次的记忆中的${treve.sex}一样。`,
        );
        await era.printAndWait(
          `但是，也有改变的事情。${treve.sex}萌生了对比赛以外的兴趣。`,
        );
        await era.printAndWait(`时间会改变一切。`);
        await era.printAndWait(
          `${you.name} 和${treve.sex}不一样，只会拖${treve.sex}的后腿。`,
        );
        await era.printAndWait(
          `${you.name} 不想拖${treve.uma_sex_title}的后腿。`,
        );
        await era.printAndWait(`所以——`);
        era.printButton(`「分手了。」`, 1);
        await era.input();
        await treve.say_and_wait(`嗯……！`);
        await you.say_and_wait(
          `不要再出现在我面前。如果不是工作的话，也不要来日本。消失吧。`,
        );
        await treve.say_and_wait(`为什么，为什么这么说！`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(`记忆中的训练员很温柔，我一直在想——`);
        await you.say_and_wait(`那就错了。`);
        await treve.say_and_wait(`嗯……！`);
        await you.say_and_wait(
          `……马上就要到晚上了，睡了就要到早上了。这样的话就是明天了，再见——`,
        );
        await treve.say_and_wait(`等一下！`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(`至少，至少心情…至少训练员的心情——`);
        era.printButton(`「不知道。」`, 1);
        await era.input();
        await treve.say_and_wait(`啊……！`);
        await era.printAndWait(`${you.name} 说出了适合最低等人生的话。`);
        await treve.say_and_wait(`骗子！`);
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name} 听到了 ${treve.name} 从背后离去的脚步声。`,
        );
        await era.printAndWait(`${you.name} 晃晃悠悠地来到了东京赛马场。`);
        await era.printAndWait(
          `赛马场很冷，${you.name} 感到周围的喧嚣在复苏，是行驶在道路上的车的声音和树叶摇曳的声音。`,
        );
        await era.printAndWait(`十一月了，日本杯临近。`);
        await era.printAndWait(
          `${you.name} 暂时站在那里，在秋天的赛马场一个人站着。`,
        );
        await era.printAndWait(`${you.name} 的旁边没有别人。`);
        await era.printAndWait(`这样就好了，所以——`);
        era.printButton(`「忘了吧……」`, 1);
        await era.input();
        await era.printAndWait(`——过了几分钟呢。`);
        await era.printAndWait(`天已经黑了，夜幕降临到东京赛马场。`);
        await era.printAndWait(`听广播好像马上就要到关门的时间了。`);
        await era.printAndWait(`心里似乎有一个洞。`);
        await era.printAndWait(
          `当 ${you.name} 将要离开时……出入口站着 ${treve.name}。`,
        );
        era.printButton(`「为什么你会在这里……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} 用惊人的脚力向 ${you.name} 冲刺。${treve.sex}的头像枪一样扎进 ${you.name} 的腹部，肺彷佛被压碎了。`,
        );
        await era.printAndWait(`痛、相当痛。`);
        await era.printAndWait(`刺骨的痛感刺激着神经。`);
        await era.printAndWait(
          `${treve.name} 抱在 ${you.name} 的肚子上，${treve.sex}——`,
        );
        await era.printAndWait(`哭了。`);
        await era.printAndWait(
          `那蓝宝石般美丽的眼睛扭曲着，像要裂开一样皱眉。`,
        );
        await treve.say_and_wait(
          `训练员笨蛋！Stupide idiot.Pourquoi dis-tu des choses aussi horribles！（大笨蛋！为什么这么过分！）`,
        );
        era.printButton(`「等一下！我不知道你在说什么！——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} 就这样在 ${you.name} 的臂弯里哭。`,
        );
        await era.printAndWait(
          `擅自扑上来，受到伤害的是 ${you.name}，${treve.sex}却在哭。`,
        );
        await era.printAndWait(`当然了，是 ${you.name} 伤了${treve.sex}的心。`);
        await era.printAndWait(
          `准备清场的工作人员来了。惊讶地盯着你们看了一眼。`,
        );
        await era.printAndWait(`大概是被当成疯丫头和坏男人，情侣吵架吧。`);
        await era.printAndWait(`那个人马上转移视线，回到了自己的工作中。`);
        await era.printAndWait(`灯饰点缀着赛马场，在那样的地方你们蹲在地上。`);
        await treve.say_and_wait(
          `你以为我是抱着怎样的想法站在这里的！要来接我的话就赶紧来！`,
        );
        era.printButton(`「诶！？不是你埋伏我——」`, 1);
        await era.input();
        await treve.say_and_wait(
          `吵死了，吵死了！我不想听你狡辩，你这个笨蛋！`,
        );
        era.printButton(`「诶欸欸？」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' 感觉真的快要被',
          treve.uma_sex_title,
          '特有的怪力抱碎了，于是在 ',
          treve.get_colored_name(),
          ' 的背上轻拍。',
        ]);
        await era.printAndWait(
          `明明说了『abandonne』（放弃），${treve.name} 却一点也不想离开。痛哭的${treve.sex}，反倒增强了力量。`,
        );
        await era.printAndWait(`也许这就是自作自受吧…………但是肋骨真的要断了。`);
        await treve.say_and_wait(`怎么样？`);
        era.printButton(`「？」`, 1);
        await era.input();
        await treve.say_and_wait(`你爱我吗！？不爱我吗！？`);
        era.printButton(`「不是这样说的问题——」`, 1);
        await era.input();
        await treve.say_and_wait(`就是这样的问题！`);
        era.printButton(`「如果不爱你，我就不会这么困扰了。」`, 1);
        era.printButton(`「因为喜欢你，所以才困扰啊！」`, 2);
        await era.input();
        await era.printAndWait(`${treve.name} 就像一条得水的游鱼。`);
        await treve.say_and_wait(
          `那就快点举行婚礼吧！订婚，还要买戒指……『师傅』一定也会祝福我们的！`,
        );
        await treve.say_and_wait(
          `在法国做的话是教会吧？在日本也可以，穿着雪白的衣服在寺庙前对爱发誓！`,
        );
        era.printButton(`「不是寺庙人家叫神社。」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name} 为了阻止自嗨的 ${treve.name} 而抓住了${treve.sex}的肩膀。`,
        );
        await treve.say_and_wait(`好大胆……`);
        await treve.say_and_wait(`在外面什么的……但如果是你的话——`);
        era.printButton(`「别说奇怪的话了！我并没有说什么结婚的事！」`, 1);
        await era.input();
        await treve.say_and_wait(`也就是先成为情侣的意思吧，我很感动！`);
        await treve.say_and_wait(
          `周围的人也一定会理解并接受的！否则，孩子真的会很痛苦！`,
        );
        era.printButton(`「我又不是欧洲人。」`, 1);
        await era.input();
        await treve.say_and_wait(`人种那么重要！？`);
        era.printButton(`「很重要吧！？」`, 1);
        await era.input();
        await treve.say_and_wait(
          `我不是看了你的人种和容貌才爱上你的，而是爱上了你的心！`,
        );
        await treve.say_and_wait(
          `亚洲人？所以呢，怎么了？我会对吵吵嚷嚷的人大声喊『吵死了』！谁都不会妨碍我们！`,
        );
        await treve.say_and_wait(`不要随便决定我的价值！`);
        await treve.say_and_wait(
          `我的价值是由我决定的，将来都是！请不要自恋！即使和你结婚，我也不会改变什么！如果有人说烦人的话，我就把他头拧下来！`,
        );
        era.printButton(`「这有点……」`, 1);
        era.printButton(`「不至于……」`, 2);
        await era.input();
        await era.printAndWait(
          `于是，虽然哭肿了的脸，尽管如此 ${treve.name} 也高贵地站了起来。`,
        );
        await era.printAndWait(
          `即使脱了妆，${treve.sex}还是很美。像是用神圣照亮夜晚的月亮。`,
        );
        await treve.say_and_wait(
          `我是天才${treve.uma_sex_title}！大部分的事情都可以说是fermez-la！`,
        );
        era.printButton(`「我不想让你烦心。」（好感+10，爱慕+1）`, 1);
        era.printButton(`「你要明白……」`, 2);
        ret.push(await era.input());
        await treve.say_and_wait(
          `不明白，完全不明白！如果你喜欢我的话，就让我开心吧！我说了要和你在一起！我说只有你才能让我幸福！`,
        );
        era.printButton(`「『能让我幸福的只有你』……这才是求婚吧！」`, 1);
        await era.input();
        await treve.say_and_wait(`之前不是！现在的才是求婚！`);
        era.printButton(`「莫名其妙！」`, 1);
        await era.input();
        await treve.say_and_wait(`我喜欢你到莫名其妙的程度！`);
        await era.printAndWait(
          `彼此的吼声在东京夜晚的一角回响。彼此都气喘吁吁，但没有移开视线。`,
        );
        await treve.say_and_wait(
          `我一直在心中的某个地方追着你！我试过不去想你，但还是做不到！和训练员聊天的日子，那些记忆就像是被录下了一样循环播放着！`,
        );
        era.print(`${you.name} 也是……`);
        era.printButton(`「一直想着你。」`, 1);
        era.printButton(`「一直忘不了……」`, 2);
        await era.input();
        await treve.say_and_wait(`那么！`);
        await era.printAndWait(
          `${treve.name} 从膝盖上靠近 ${you.name}，抓住 ${you.name} 的胸口。`,
        );
        await era.printAndWait(`被美女吓到的话会害怕，这好像是真的。`);
        await era.printAndWait(
          `${treve.sex}的法裔端正容貌逼近到了近距离。${treve.name} 对 ${you.name} 开口。${treve.sex}的怒吼在大井赛马场前响起。`,
        );
        await treve.say_and_wait(`你这个笨蛋。`);
        era.printButton(`「我不是笨蛋」`, 1);
        await era.input();
        await treve.say_and_wait(
          `不，笨蛋！就算弱小也没关系……如果没出息的话就携手支持就好了。你没有放弃责任，我更不能放弃。`,
        );
        await treve.say_and_wait(
          `训练员和${treve.uma_sex_title}的关系是对等的。我们会全力奔跑，训练员则会引导。就像是缺一不可的夫妇一样。`,
        );
        await treve.say_and_wait(`所以……咕、嘶，我们才会互相吸引，不是吗？`);
        await era.printAndWait(
          `${you.name} 把比自己小十岁的${treve.child_sex_title}子弄哭了。`,
        );
        await era.printAndWait(`夜晚有点冷。因为白天很热，所以你们穿得很少。`);
        await era.printAndWait(
          `尽管如此，两个人聚在一起，像虫子一样用体温温暖彼此的话，就不会冷了。`,
        );
        await era.printAndWait(
          `${treve.name} 依然露出忧心忡忡的表情，${you.name} 抚摸着${treve.sex}的脑袋。`,
        );
        era.printButton(`「有点冷？」`, 1);
        await era.input();
        await treve.say_and_wait(`……嗯。`);
        era.printButton(`「先去你住过的酒店吧。这样下去会感冒的。」`, 1);
        await era.input();
        await treve.say_and_wait(`好的。`);
        await era.printAndWait(`${treve.sex}按照 ${you.name} 说的一起走了。`);
        await era.printAndWait(`灯饰的光辉照耀着你们的背影。`);
        era.drawLine();
        era.printButton(`「${treve.name}，这是怎么回事……！？」`, 1);
        await era.input();
        await treve.say_and_wait(
          `带${treve.child_sex_title}子进房间，不觉得只有一件事要做吗？`,
        );
        await era.printAndWait(
          `勉强遮住皮肤的布被解开，${treve.name} 那双海蓝的眼睛发出奇怪的光。`,
        );
        await treve.say_and_wait(
          `Bonne soirée（祝你有个美好的夜晚），ma cheri（我心爱的人）。`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {CharaTalk} you 玩家
   */
  async we_95_42_end(treve, you) {
    await era.printAndWait(
      `本来只是打算在房间里冷静一下，等着的时候，出现了穿着浴巾的 ${treve.name}。`,
    );
    await era.printAndWait(`未成年淫行上演。`);
    await era.printAndWait(
      `总之，完全失去了法律这一后盾的 ${you.name} 不可能阻止世界最强的${treve.sex}，就这样完全上垒了。`,
    );
    await era.printAndWait(`${you.name} 和担当在夜晚玩得很开心。`);
    await treve.say_and_wait(`早上好，亲爱的`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `旁边是一个裸体的 ${treve.name}，${you.name} 对这种状况感到安心。`,
    );
    era.printButton(`「……早上好，我的公主。」`, 1);
    await era.input();
    await treve.say_and_wait(`咦，你承认了吗？`);
    await treve.say_and_wait(`……这样啊，果然从一开始就这样做就好了。`);
    era.printButton(`「不要说可怕的话。」`, 1);
    await era.input();
    await era.printAndWait(
      `从窗户射入的朝阳照射下的 ${treve.name} 像画上的圣母一样美丽。`,
    );
    await era.printAndWait(
      `被纯白的面纱包着，一边趴着一边看着 ${you.name} 的${treve.sex}，只隐藏着突出的部分，让背鲁莽地露出。`,
    );
    await era.printAndWait(
      `${you.name} 冲动地抚摸着像艺术品一样的 ${treve.name} 的脑袋。${treve.sex}那流丽的发丝穿过手指。`,
    );
    await treve.say_and_wait(`……♪`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(`看着${treve.sex}微笑的脸，${you.name} 下定决心。`);
    await treve.say_and_wait(
      `我最喜欢你了。到现在为止，我一直在想你。我梦想着这样说话。`,
    );
    era.printButton(`「我也是，${treve.name}」`, 1);
    await era.input();
    await era.printAndWait(`微笑着的${treve.sex}，果然很漂亮。`);
    await treve.say_and_wait(`我爱你，训练员。`);
    era.printButton(`「啊，我爱你，只属于我的 ${treve.name}。」`, 1);
    await era.input();
    await era.printAndWait(
      `${treve.sex}那可爱地握着 ${you.name} 的手的样子，在任何人看来都是圣女。`,
    );
    await era.printAndWait(`${you.name} 眼前的爱马美颜生彩，笑靥生辉。`);
  },
  palace: (() => {
    const title = (treve) => `${treve.sex}即是成真的美梦`;
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(`${you.name} 听到了什么声音。`);
      await era.printAndWait(
        `从黑暗中睁开眼睛，眼前是陌生（完全不）的天花板。`,
      );
      await era.printAndWait(`脑子里软绵绵的，无法理解状况。`);
      await era.printAndWait(`总觉得好像身处和往常完全不同的地方。`);
      await era.printAndWait(
        `用模糊的头呆呆地凝视着虚空，轻飘飘的香味扑鼻而来。`,
      );
      await era.printAndWait(
        `紧接着，一个${treve.teen_sex_title}突然映入眼帘。`,
      );
      await era.printAndWait(`柔软的栗色头发，清澈的苍蓝双眸。`);
      await era.printAndWait(
        `然后，${treve.sex}的脸上浮现出宛如注视婴儿般慈爱的笑容。`,
      );
      await treve.say_and_wait(`Bonjour，睡得舒服吗？`);
      await era.printAndWait(`像抚摸一样温柔的声色会引起微微的睡意。`);
      await era.printAndWait(
        `看着对方的脸，${you.name} 终于理解了状况，于是想要让意识苏醒。`,
      );
      await era.printAndWait(`但是，眼睛被温暖的手掌轻轻地盖住了。`);
      await treve.say_and_wait(`再稍微睡一会儿？现在还早呢。`);
      era.printButton(`「……不，该起床了。」`, 1);
      era.printButton(`「我也想享受和你一起的早晨。」（爱慕+1）`, 2);
      const ret = await era.input();
      await treve.say_and_wait(`呵呵，这样啊，我很高兴。`);
      await era.printAndWait(`手掌做成的眼罩被取下，光线射入视野。`);
      await era.printAndWait(
        `站起身来，${treve.name} 坐在 ${you.name} 的寝床上微笑着。`,
      );
      await era.printAndWait(
        `虽然稍微考虑了一下感觉有什么遗憾、但或许这就足够了，首先要做的是必须做的事情。`,
      );
      era.printButton(`「早上好，${treve.name}。」`, 1);
      await era.input();
      await treve.say_and_wait(`是的，${you.actual_name}！`);
      await era.printAndWait(`${treve.name} 像唱歌一样回话。`);
      era.drawLine();
      await era.printAndWait(`自凯旋门赏以来，你们一直以海外比赛为主。`);
      await era.printAndWait(
        `准确地说，因为表现出了比平时更好的实力，结果决定以海外的比赛为主战场进行比赛。`,
      );
      await era.printAndWait(
        `想办法赶走粘着的 ${treve.name}，换完衣服，去客厅。`,
      );
      await era.printAndWait(
        `桌上摆满了佳肴，${treve.name} 在等着 ${you.name}。`,
      );
      await era.printAndWait(`说实话很吃惊，${treve.name} 的料理也很拿手。`);
      await era.printAndWait(`坐在座位上眺望各种料理。`);
      await era.printAndWait(`用金枪鱼、凤尾鱼、橄榄等制作的分量十足的沙拉。`);
      await era.printAndWait(`看起来很暖人的浓汤散发着美妙的香气。`);
      await era.printAndWait(
        `每一个都是令人眼花缭乱的菜品，但只有一个特别引人注目。`,
      );
      await era.printAndWait(`加入了厚厚的火腿和大量奶酪的热三明治。`);
      await era.printAndWait(
        `告诉 ${treve.name}「我开动了」以后，大口大口地吃了起来。`,
      );
      await era.printAndWait(
        `浓厚的奶酪酱汁加上火腿的风味，就和高档餐厅里吃的味道一样。`,
      );
      await era.printAndWait(`——味道完全一样，现在想起来了。`);
      era.printButton(`「……这个，你买来的吗？」`, 1);
      await era.input();
      await treve.say_and_wait(`是我做的哦？`);
      await treve.say_and_wait(`因为你看起来很爱吃，所以我研究了一下！`);
      await era.printAndWait(`……差点忘了这孩子是个天才。`);
      await era.printAndWait(
        `但是，能复制到这种程度，还是得夸句不愧是${treve.sex}。`,
      );
      await treve.say_and_wait(`……${callname} 该给我奖励吧？`);
      await era.printAndWait(
        `一瞬间，带着微笑的 ${treve.name} 在下一刻向我开口了。`,
      );
      await era.printAndWait(
        `${you.name} 看到闪闪发光的鲜红的口内和舌头，不知为什么心脏骤停。`,
      );
      await era.printAndWait(`总觉得好像在看不该看的东西，有一种背德感。`);
      await treve.say_and_wait(`啊……♪`);
      await era.printAndWait(
        `就这样，${treve.name} 一边转动着耳朵和尾巴，一边期待着看 ${you.name}。`,
      );
      await era.printAndWait(`……就是说要做啊，那个。`);
      await era.printAndWait(
        `虽然犹豫了一下，但不确信如果不做的话${treve.sex}就会一直张开嘴。`,
      );
      await era.printAndWait(
        `总之，把三明治撕成小碎块，慢慢地放入${treve.sex}的嘴里。`,
      );
      await treve.say_and_wait(`嗯……`);
      await era.printAndWait(
        `${treve.name} 闭上嘴唇，把 ${you.name} 的指尖微微卷入。`,
      );
      await era.printAndWait(`栩栩如生的触感和温暖从指尖传到大脑。`);
      await era.printAndWait(
        `然后${treve.sex}一边想着什么，一边扭动着嘴，一口一口地咽下去。`,
      );
      await treve.say_and_wait(`……嗯。`);
      await era.printAndWait(`闭上眼睛，再张开嘴。`);
      await era.printAndWait(`没想到要求再来一次。`);
      await era.printAndWait(
        `背德感、保护欲和内心深处的刺激，${you.name} 再次撕下三明治。`,
      );
      await era.printAndWait(
        `两次、三次、四次，放进${treve.sex}的嘴里，指尖渐渐湿润。`,
      );
      await era.printAndWait(`不久，盘子上的法式三明治消失了，立刻宣告结束。`);
      await treve.say_and_wait(`啊，连你的份儿都吃了。`);
      era.printButton(`「没关系，没关系的，对吧！？」`, 1);
      await era.input();
      await treve.say_and_wait(`是的♪谢谢♪`);
      await era.printAndWait(
        `${treve.name} 用笑容满面的表情道谢，然后用舌头舔了一圈嘴唇。`,
      );
      await era.printAndWait(`这让 ${you.name} 不得不意识到湿润的手指。`);
      await era.printAndWait(`${treve.name} 一边看着那个，一边小声嘟囔着。`);
      await treve.say_and_wait(`……好像会上瘾。`);
      await era.printAndWait(`假装没听到吧。`);
      era.drawLine();
      await treve.say_and_wait(`……又工作到晚上。`);
      await era.printAndWait(`两肩上放着温暖的手，从上面传来了声音。`);
      await era.printAndWait(
        `抬头一看，洗完澡后残留着热气的 ${treve.name}，用严肃的目光俯视着 ${you.name}。`,
      );
      await era.printAndWait(`那么，时间已经到了，回房间吧。`);
      era.printButton('「今天就睡觉了，晚安卓芙。」', 1);
      await era.input();
      await treve.say_and_wait(`啊……`);
      await era.printAndWait(`衣服被拉了一下。`);
      await era.printAndWait(
        `回头一看，${treve.name} 好像很寂寞，抓住 ${you.name} 衣服的下摆。`,
      );
      await era.printAndWait(`因为那个样子让 ${you.name} 想起了某些小动物。`);
      era.printButton(`「果然不能马上就睡着，要不要吹个晚风？」`, 1);
      await era.input();
      await treve.say_and_wait(`……好！`);
      await era.printAndWait(`${treve.name} 眼睛闪闪发光，摇起尾巴来。`);
      await era.printAndWait(
        `这个反应也见怪不怪了啊，${you.name} 一边这样想着一边牵着${treve.sex}的手。`,
      );
      await era.printAndWait(
        `跑得很漂亮，很美，对任何人来说是都是理想的奔跑。`,
      );
      await era.printAndWait(`拥有圣女般纯洁的${treve.sex}。`);
      await era.printAndWait(`有着女神般高贵的${treve.sex}。`);
      await era.printAndWait(`略有些懒散，意外地容易亲近的${treve.sex}。`);
      await era.printAndWait(`而且，比起别人，容易寂寞的${treve.sex}。`);
      era.printButton(`「只要你在我身边——」`, 1);
      await era.input();
      await era.printAndWait(`简洁地，好好地传达。`);
      await era.printAndWait(`用与 ${treve.name} 相称的话语。`);
      era.printButton(`「无论多少次，我都会将爱传递给你。」`, 1);
      await era.input();
      await era.printAndWait(`好像说了什么荒唐的话。`);
      await era.printAndWait(
        `虽然 ${you.name} 注意到冷汗一股一股地流，但语言已经出发了。`,
      );
      await era.printAndWait(
        `${treve.name} 把耳朵和尾巴立到极限，眼睛睁得满满的，满脸通红。`,
      );
      await era.printAndWait(
        `不久，像是惊呆了一样，像是放弃了一样，发出巨大的叹息。`,
      );
      await treve.say_and_wait(`……你也意外的贪得无厌啊，说了很随便的话。`);
      era.printButton(`「不知道吗，训练员都是这样的。」`, 1);
      await era.input();
      await era.printAndWait(
        `每个人都想把负责的${treve.uma_sex_title}变成英雄。`,
      );
      await era.printAndWait(`拿到桂冠的第二天，就已经在寻觅新的奖杯了。`);
      await era.printAndWait(
        `训练员这种生物实际上是比${treve.uma_sex_title}更贪婪的生物。`,
      );
      await era.printAndWait(
        `听到这句话，${treve.name} 发出比刚才更大的叹气，伸出双手。`,
      );
      await era.printAndWait(
        `轻轻地把手放在 ${you.name} 的两颊上，目不转睛地盯着 ${you.name}。`,
      );
      await treve.say_and_wait(`没办法，我知道了，我会站在你身边的。`);
      await era.printAndWait(`这样说的话，${treve.name} 会更加靠近脸。`);
      await era.printAndWait(
        `眼前是${treve.sex}端正的容貌，甜甜的香味在能让肌肤感受到热气的距离。`,
      );
      await era.printAndWait(`然后就这样，${treve.sex}的目光骤然锐利。`);
      await treve.say_and_wait(`但是请不要误会，我不会满足你的理想。`);
      await era.printAndWait(
        `这是对 ${you.name} 的宣战，就这样，苍白的眼神射穿了 ${you.name}。`,
      );
      await treve.say_and_wait(
        `谁也不让，我会一直站在你面前，总有一天会让你只看着我的。`,
      );
      await era.printAndWait(`说完之后，${treve.name} 莞尔一笑。`);
      await era.printAndWait(
        `那是${treve.sex}本来就有的天真烂漫的，能让周围也变得快乐的笑容。`,
      );
      await era.printAndWait(
        `${treve.sex}脸上重新展露笑颜后，像发出『啪』的一声眨了眨眼。`,
      );
      await treve.say_and_wait(`——我的甜心。`);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = '从未熟悉的异国公主';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} montjeu 望族
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait([
        '终于，以某一刻为分界线，',
        you.get_colored_name(),
        ' 与 ',
        treve.get_colored_name(),
        ' 的联系完全切断了。',
      ]);
      await era.printAndWait('担当不想见训练员，训练员不敢见担当。');
      await era.printAndWait([
        '然而，似乎是考虑到各方面的影响，',
        you.get_colored_name(),
        ' 与 ',
        treve.get_colored_name(),
        ' 的契约并没有谁来要求终止。',
      ]);
      await era.printAndWait([
        '似乎是 ',
        montjeu.get_colored_name(),
        ' 再一次扛起了照顾法国公主的重担。',
      ]);
      era.println();
      await era.printAndWait([
        '因为公事偶然与 ',
        montjeu.get_colored_name(),
        ' 碰面的时候，',
        you.get_colored_name(),
        ' 受到的并非责难，而是',
      ]);
      await era.printAndWait('——同情的目光。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 只得草草地打过招呼后离去。',
      ]);
      await era.printAndWait('是因为对这没有头绪的同情感到不安，还是在害怕……');
      await era.printAndWait('和某一对记者与公主的结局相似又截然不同。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 与 ',
        treve.get_colored_name(),
        ' 再也没有见面。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
