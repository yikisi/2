/**
 * @file 荣进闪耀 - 日常
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  good_morning(flash, callname) {
    const buffer = [
      () =>
        flash.say(
          `早上好，${callname}。新的一天，新的旅程，新的希望，一起用积极的态度去面对吧。`,
        ),
      () => flash.say(`Guten Tag，${callname}。在此祝您度过美好的一天。`),
      () =>
        flash.say(
          `Guten Morgen，${callname}。又是新的一天，您是否有为今天的计划做好准备呢？`,
        ),
      () =>
        flash.say(
          `上午好，${callname}。祝您即使在忙碌之中，也能抽出时间欣赏身边的美好。`,
        ),
    ];
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  select(flash, callname) {
    const buffer = [];
    const relation = era.get(`relation:37:0`);
    if (relation < 0) {
      buffer.push(() => flash.say(`……唉。请问有什么事情吗，${callname}？`));
    } else {
      buffer.push(() => flash.say(`我在这里，${callname}，请问有什么事情吗？`));
      if (relation > 75)
        buffer.push(() =>
          flash.say(`呼……稍微有些迫不及待了呢，让我们开始吧，${callname}。`),
        );
      if (relation > 225)
        buffer.push(() =>
          flash.say(
            '时间，无误。地点，正确。还有……呵呵。计划核对完毕，荣进闪耀，随时听候您的命令。',
          ),
        );
      if (era.get('love:37') > 76) {
        buffer.push(
          () => flash.say(`嗯，不必多说，早就已经准备好了呢，${callname}。`),
          () => flash.say(`呵呵～我在这里，${callname}，请问有什么事情吗？`),
          () =>
            flash.say(`呼……感觉迫不及待了呢，让我们现在开始吧，${callname}。`),
        );
      }
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} flash 荣进闪耀 */
  async office_study(flash) {
    const buffer = [
      () =>
        flash.say_and_wait(
          '您知道吗？在德国，其实是没有下午好的说法的，我们会说Guten Tag，是白天好的意思。',
        ),
      () =>
        flash.say_and_wait(
          '您知道吗？在德国文化中，猪被视为一种吉祥物，我们认为它可以带来幸运与财富。因此在新年来临之际，往往也会送给身边重要的人以小猪为形象的礼物，表达祝福之意。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async office_prepare(flash, you, callname) {
    era.print(`${you.name} 和荣进闪耀在训练室里做赛前准备。`);
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '现时气候，符合预报。场地情况，在预期之中。自身状态……完美。',
        );
        await flash.say_and_wait(
          `呼……看来一切都跟计划描写的一样呢。那么，我准备出发了，${callname}。`,
        );
      },
      () =>
        flash.say_and_wait(
          `toi、toi、toi……呼……好！${callname}，我准备出发了。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async talk(flash, callname) {
    const buffer = [];
    const relation = era.get(`relation:37:0`);
    if (era.get('cflag:37:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:37:干劲')) {
        case -2:
          buffer.push(
            () =>
              flash.say_and_wait(
                '状态……很糟糕，已经到了必须要去调整接下来的计划的地步了吗？',
              ),
            () =>
              flash.say_and_wait(
                '虽然很不想承认，但我的状态已经到了足以影响计划正常执行的程度了……也许真的要去尝试改变了吧。',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              flash.say_and_wait(
                '状态……稍微有些糟糕呢，但是已经预定好的计划不能被这种情况干扰，对吧？',
              ),
            () => flash.say_and_wait('呼……坚持下去！'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              flash.say_and_wait(
                '嗯，按照现在的状态，执行目前的计划没有任何问题。',
              ),
            () =>
              flash.say_and_wait(
                '再普通的一天也有属于它的计划要去执行。所谓成功，就是通过这种日积月累的不懈而达成的，不是吗？',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              flash.say_and_wait(
                '心情很愉快呢，在这种状态下执行计划，应该能够轻而易举地取得预期的结果。',
              ),
            () =>
              flash.say_and_wait(
                `身体在因为即将迎来充实的一天而感到兴奋。让我们赶紧开始今天的计划吧，${callname}！`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              flash.say_and_wait(
                '感觉现在的身体非常轻盈，真是难得的体验呢，让我们开始执行接下来的计划吧！',
              ),
            () =>
              flash.say_and_wait(
                `相信在这种状态下，无论做什么事情都会事半功倍的吧。所以，让我们开始为了目标努力吧，${callname}！`,
              ),
          );
      }
    }
    if (relation > 525)
      buffer.push(() =>
        flash.say_and_wait(
          '其实我并不相信永恒，即便是象征天长地久的钻石也会有氧化的一天。但是，与您的相遇却让我改变了这个想法。',
        ),
      );
    if (era.get('love:37') >= 75) {
      buffer.push(
        () =>
          flash.say_and_wait(
            '『To love and to be loved is the greatest happiness of existence.』您理解这句话的意思吗？我现在，算是深刻体验到其中的含义了呢。',
          ),
        () =>
          flash.say_and_wait(
            '呵呵～每次见到您的时候，我的内心都会产生一种甜蜜的情感，可能这就是『心』的味道吗？',
          ),
      );
    }
    if (relation > 225)
      buffer.push(() =>
        flash.say_and_wait(
          '每次和您相处时我的内心都会产生一种特殊的情感，用故乡的语言来形容的话，大概就是『Schmetterlinge im Bauch haben』吧。',
        ),
      );
    if (relation > 375)
      buffer.push(() =>
        flash.say_and_wait(
          '虽然说食谱即为律法，但这并不代表着制作甜品本身是种僵硬的行为。比如说，您可以尝试在此过程中添加一份对于某人的浓烈情感，借此来让成品变得更为美味。呵呵～是一种奇妙但又确实有用的方法呢。',
        ),
      );
    buffer.push(() =>
      flash.say_and_wait(
        '请问您对于抽奖的看法是什么呢？啊，我没有别的意思，只是之前趁着休息的时间在商场购买完清单上预定的商品后，因为有赠送免费的抽奖券，所以就去顺路尝试了一下。结果没有想到居然中了一等奖……不过话虽如此，但是当时的我比起喜悦，还是忐忑的心情更多，因为客观来讲，我只是付出了一张毫无成本的纸张，就得到了价值不菲的礼物，在我看来，这是完全不公平的回报。',
      ),
    );
    if (relation > 375)
      buffer.push(() =>
        flash.say_and_wait(
          '虽然说食谱即为律法，但这并不代表着制作甜品本身是种僵硬的行为。比如说，您可以尝试在此过程中添加一份对于某人的浓烈情感，借此来让成品变得更为美味。呵呵～是一种奇妙但又确实有用的方法呢。',
        ),
      );
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5)
      buffer.push(
        () =>
          flash.say_and_wait(
            '『Der Frühling ist die Zeit der Pläne, der Vorsätze.』春天对我而言，是很重要的季节，因为要在这段时间里仔细思考和制定今年之内的计划呢。',
          ),
        () =>
          flash.say_and_wait(
            '春天啊……又到了万物复苏的季节呢。您知道吗？其实我一直对于能够在这个时间点准时绽开的植物抱有特别的情感，因为要做到这一点，就意味着它们必须忍受冬天的冷酷……真是件非常不易的事情，无论经历怎样的打击都能在最后准确地达成自己的使命，实在是令人敬佩。',
          ),
      );
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8)
      buffer.push(
        () =>
          flash.say_and_wait(
            '夏天随时都会有中暑的风险，所以一定要记得及时补充水分。为了身体的健康着想，这点可是很重要的哦。',
          ),
        () =>
          flash.say_and_wait(
            '夏天到了啊……让我想起小时候，每逢这种度假旺季，父母都会带我前往某处湖边的小屋避暑。呵呵～真是令人难忘的愉快回忆呢。',
          ),
      );
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11)
      buffer.push(
        () =>
          flash.say_and_wait(
            '秋天啊，总会让我想起德国的慕尼黑啤酒节呢，那是个将旅游游乐场和无拘无束的饮酒体验结合在一起的老少皆宜的大众节日，非常的精彩呢。希望有一天，能够和您一起去参与。',
          ),
        () =>
          flash.say_and_wait(
            `果然秋天是很适合运动的季节呢。${callname}，有兴趣和我一起踢足球吗？`,
          ),
      );
    if (era.get('flag:当前月') === 12 || era.get('flag:当前月') <= 2)
      buffer.push(
        () =>
          flash.say_and_wait(
            '相比与往日，冬天待在室内的时间会肉眼可见的延长呢。不过这也并不都是坏事，比如对于研究新的食谱而言，这就是非常好的机会。',
          ),
        () =>
          flash.say_and_wait(
            '每当到下雪的季节，我就会想起故乡的德式圣诞蛋糕。那是一种在面团中混入大量的水果干和坚果的圣诞节甜品，我非常喜欢它的味道。每年的圣诞节，我也会帮助家里人一起制作。所以，如果您对此感兴趣的话，等合适的机会到来，说不定就可以大饱口福了呢，呵呵',
          ),
      );
    if (era.get('cflag:49:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `虽然中山同学对待胜负的态度与我截然不同，但也正是因为如此，我才能从${flash.sex}的身上学习到新的观念……这是件非常好的事情。`,
        ),
      );
    if (era.get('cflag:7:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `说起来，上个星期日明明是和黄金船同学约定好去蛋糕店试吃新品的，结果在不知不觉间却变成了老式零食的品尝大会……不过客观来讲，${flash.sex}推荐的点心，味道都很不错呢，呵呵～`,
        ),
      );
    if (era.get('cflag:48:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '能够以自己的方式轻松维持住与众多人的友谊，佐敦同学在这方面的本领真的令人钦佩呢。',
        ),
      );
    if (era.get('cflag:38:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `玩偶？啊，这是真机伶同学赠送给我的礼物。呵呵～非常精巧不是吗？${flash.sex}的品味就和${flash.sex}本人一样可爱呢。`,
        ),
      );
    if (era.get('cflag:105:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '新宇宙同学好像非常喜欢我制作的巧克力饼干。呵呵～这对于糕点师而言真的是莫大的鼓励呢。所以，要再接再厉开发更多美味的甜品才行！',
        ),
      );
    if (era.get('cflag:46:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '飞鹰同学能够通过我身上的气味来判断出今天我做了哪个种类的甜品。老实说虽然是很厉害的能力，但总让人感受有些羞耻呢……',
        ),
      );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} flash 荣进闪耀 */
  async talk_about_gacha(flash) {
    await flash.say_and_wait(
      '请问您对于抽奖的看法是什么呢？啊，我没有别的意思，只是之前趁着休息的时间在商场购买完清单上预定的商品后，因为有赠送免费的抽奖券，所以就去顺路尝试了一下。结果没有想到居然中了一等奖……不过话虽如此，但是当时的我比起喜悦，还是忐忑的心情更多，因为客观来讲，我只是付出了一张毫无成本的纸张，就得到了价值不菲的礼物，在我看来，这是完全不公平的回报。',
    );
  },
  /** @param {CharaTalk} flash 荣进闪耀 */
  async talk_about_falcon_and_gacha(flash) {
    await flash.say_and_wait(
      `飞鹰同学说我对于抽奖的态度太过于奇特，${flash.sex}认为这并非是不劳而获，而是我应得的奖励，让我放宽心尽情接受就好了……唉，也许${flash.sex}的道理是对的，我是应该要去尝试转变自己的观念。`,
    );
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async office_gift(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          '诶，礼物？是赠送给我的吗？……呵呵，我知道了，有劳您费心了。我会报答您的这份好意的，我保证。',
        ),
      () =>
        flash.say_and_wait(
          `『besten Dank！』，${callname}，我不会辜负您的心意的。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async office_cook(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          `蛋清100克，蛋黄60g，再加上……啊！${callname}，您多放了2克的白砂糖哦。`,
        ),
      async () => {
        await flash.say_and_wait(
          '少许……适量……差不多……唔，虽然不知道这是您从哪里寻找的食谱，但是总觉得制作起来稍微有些为难人呢……',
        );
        await flash.say_and_wait(
          `不过话虽如此，可困难不是放弃的理由。所以现在，让我们一起来寻找出制作完美成品所需要的各个食材的准确含量吧，${callname}。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async office_rest(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          `辛苦了，${callname}。利用好短暂的休息时间可以让您以充沛的精力处理接下来的事务。`,
        ),
      () =>
        flash.say_and_wait(
          `辛苦了，${callname}。如果感到劳累的话，还请好好休息一下，因为『All work and no play makes Jack a dull boy』，不是吗？`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async office_game(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀在训练室里一起打游戏机。`);
    flash.say(
      '诶，想要和我一起玩游戏？当然可以，我很高兴您能够邀请我。那么您有想好准备游玩的游戏类型吗？',
    );
    era.printButton('「当然是双人合作游戏」', 1);
    era.printButton('「双人对决游戏怎么样？」', 2);
    if ((await era.input()) === 1) {
      await flash.say_and_wait('双人合作游戏啊，是个很好的选择呢');
      await flash.say_and_wait(
        `那事不宜迟，我们开始吧。我很期待能够和 ${callname} 您一起携手前行共渡难关呢，呵呵～`,
      );
    } else {
      await flash.say_and_wait('双人对决游戏啊，是个很好的选择呢。');
      await flash.say_and_wait('嗯……不过在游玩之前，先加一个条件怎么样？');
      await flash.say_and_wait('比如说输家要答应赢家一个要求之类的。');
      await flash.say_and_wait(
        '呵呵～因为在约定好赌注的情况下游玩的体验才会更加精彩嘛，这可是中山同学教给我的道理哦。',
      );
    }
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   */
  async s_a_tree_hollow(flash, you) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到中庭枯树洞。`);
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '枯树洞啊……对于遭受挫折的人来说，适当的发泄手段是必要的呢。',
        );
        await flash.say_and_wait(
          '不过我个人而言，也许还是更偏向于会去和身边重要的人进行交流。',
        );
        await flash.say_and_wait(
          '毕竟倾诉只是一种手段，找到从挫折之中走出来的办法才是目的，不是吗？',
        );
      },
      async () => {
        await flash.say_and_wait(
          '枯树洞啊……说起来，这一个小小的木桩中，承载了很多人的情感呢。',
        );
        await flash.say_and_wait(
          '悲伤时来此倾诉，高兴时来此分享。对于会这么做的人来说，枯树洞已经是他们不可替代的好伙伴了。',
        );
        await flash.say_and_wait(
          '……是的，这其中自然也包括了我在内。不过，现在的话，倒也不一样了。',
        );
        await flash.say_and_wait(
          '毕竟现在的我，遇到了更值得去托付的人了呢，呵呵～',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async s_a_dating(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到中庭约会。`);
    const buffer = [
      async () => {
        await flash.say_and_wait(
          `一起坐在长椅上享受温暖的阳光，真是件非常美好的……啊！${callname}，您的背后有一只瓢虫哦。`,
        );
        await flash.say_and_wait(
          '嘘，请不要粗暴地赶走它……因为瓢虫是很可爱的生物，不是吗？',
        );
      },
      async () => {
        await flash.say_and_wait(
          `这是今日份的便当，请尽情享……啊啦，${callname}，您的头顶有一片落叶哦。`,
        );
        await flash.say_and_wait(
          '呵呵～虽然说『大树底下好乘凉』，但偶尔也会出现这种可爱的意外呢。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async s_r_lunch(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起在天台上吃便当。`);
    const buffer = [
      async () => {
        await flash.say_and_wait('薄荷蛋糕啊……这就是您准备的甜点吗。');
        await flash.say_and_wait(
          '……不，没什么，我并不讨厌薄荷。要说的话，只是有点不适应这股味道而已。',
        );
        await flash.say_and_wait(
          '不过这是您的心意，所以我会全盘接受的。而且客观来讲，奶油蛋糕，是很美味的食物，不是吗？',
        );
      },
      async () => {
        await flash.say_and_wait('很精美的摆盘？呵呵～谢谢夸奖。');
        await flash.say_and_wait(
          '不过评价食物可不能只看表象哦，内在的味道在我看来更为重要。',
        );
        await flash.say_and_wait(
          `所以请享用吧，${callname}。我很期待您在用餐后的评价呢。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_r_fishing(flash, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      flash.get_colored_name(),
      ' 一起来到河边钓鱼。',
    ]);
    const buffer = [
      async () => {
        await flash.say_and_wait('能够随心所欲的钓鱼，是种很美妙的体验呢。');
        await flash.say_and_wait('诶，为什么突然这么说？');
        await flash.say_and_wait('因为在德国，钓鱼是需要持有专门的证件的。');
        await flash.say_and_wait(
          '虽然说考取执照要求更多的是理论知识，但提前先在日本锻炼好自己的实战技术也是个不错的选择。',
        );
        await flash.say_and_wait('所以……');
        await flash.say_and_wait(`届时可能还要麻烦您的帮助了呢，${callname}。`);
      },
      async () => {
        await flash.say_and_wait(
          '钓鱼啊，让我想起小时候每逢度假旺季时，父母都会带我前往某处没有名字的湖边小屋度假。',
        );
        await flash.say_and_wait(
          '然后在那里，我就能看到我的父亲坐在湖边专心挥舞鱼竿的模样。',
        );
        await flash.say_and_wait(
          '虽然我没有从他那里学会太多的技巧，不过用来和您一起享受这份乐趣的话，应该是可以做到的。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_r_walking(flash, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      flash.get_colored_name(),
      ' 一起来到河边散步。',
    ]);
    const buffer = [
      async () => {
        await flash.say_and_wait('bildschön！真是令人印象深刻的景色啊。');
        await flash.say_and_wait(
          `嗯……合影留念似乎是个不错的办法。您认为如何呢？${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait('请问您对于今天的出行感到满意吗？');
        await flash.say_and_wait(
          '呵呵～因为是经过认真思索后规划出来的，认为可以让您乐在其中的计划。您能觉得开心，那真是太好了。',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_c_pray(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到神社祈福。`);
    const buffer = [
      async () => {
        await flash.say_and_wait(
          `二鞠躬、二拍手、一鞠躬……呼，虽然对于详细的细节仍旧有些琢磨不清，但整体的流程上应该没有出现失误吧？${callname}`,
        );
        await era.printAndWait(
          `回来的路上，荣进闪耀对 ${you.name} 俏皮地笑了一下，看样子${flash.sex}很享受这一次的参拜之旅。`,
        );
      },
      async () => {
        await flash.say_and_wait(
          '清新的空气，还有神圣的氛围。我很喜欢神社的环境呢，待在那里，就连躁动的心都会平静下来。',
        );
        await era.printAndWait(
          `回来的路上，荣进闪耀微笑着与 ${you.name} 分享了自己的感受，看样子${flash.sex}对于这趟旅程很是满意。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   */
  async o_s_arcade(flash, you) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到商店街的街机厅。`);
    const buffer = [
      () =>
        flash.say_and_wait(
          '唔，按理来说只要计算好机械手臂与玩偶之间的距离和角度，就可以轻松把它放入出货口才对，可为什么还是会在中途掉落呢……',
        ),
      () =>
        flash.say_and_wait(
          '诶，为什么游戏里会突然出现僵尸？！唔，事到如今只能鼓起勇气应对了吗。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_s_drawing(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到商店街抽奖`);
    await flash.say_and_wait(
      '抽奖啊……唔，其实我一直觉得这种讲究随机性的事物对我而言没有什么吸引力呢。',
    );
    await flash.say_and_wait('诶，具体的缘由？');
    await flash.say_and_wait(
      '倒也没有复杂的理由啦，只是相比于不可控的概率，我更喜欢多少付出就有多少回报这种公平的规则而已。',
    );
    await flash.say_and_wait(
      '……嘛，不过话虽如此，但既然已经来到这里了，如果什么都不做就离开的话，或多或少会有些扫兴了呢。',
    );
    await flash.say_and_wait('所以让我们来测试一下今天的运势如何吧？');
    await era.printAndWait(
      '荣进闪耀摇动转盘，在一阵会令人不禁对接下来发生的事情产生期待的奏乐中，上方的屏幕里慢慢显现出了此次的结果。',
    );
    const buffer = [
      async () => {
        await flash.say_and_wait('特等奖？');
        await era.printAndWait('震人心弦的旋律从喇叭里传出。');
        await era.printAndWait(
          '与此同时，显示屏上的鲜艳大字让荣进闪耀愣了几秒。',
        );
        await flash.say_and_wait('……真是……出乎意料呢。');
        await era.printAndWait(
          `随后，灿烂的笑容浮现于${flash.sex}的脸庞之上。`,
        );
        await flash.say_and_wait(
          '本来对于结果没有抱有期望才对……应该说这就是运气的魅力吗。',
        );
        await flash.say_and_wait(
          `呵呵～看来今天的运势很不错呢。那么作为庆祝，我们一起去吃点美味的蛋糕怎么样？${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('一等奖？');
        await era.printAndWait('动听悦耳的旋律从喇叭里传出。');
        await era.printAndWait(
          '与此同时，显示屏上的鲜艳大字让荣进闪耀愣了几秒。',
        );
        await flash.say_and_wait('……真是……令人惊喜呢。');
        await era.printAndWait(
          `随后，愉快的笑容浮现于${flash.sex}的脸庞之上。`,
        );
        await flash.say_and_wait(
          '本来对于结果没有抱有期望才对……应该说这就是运气的魅力吗。',
        );
        await flash.say_and_wait(
          `呵呵～看来今天的运势不错呢。那么作为庆祝，我们一起去吃点美味的蛋糕怎么样？${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait('二等奖？');
        await era.printAndWait('波澜起伏的旋律从喇叭中传出。');
        await era.printAndWait(
          '与此同时，显示屏上的鲜艳大字让荣进闪耀犹豫了一瞬。',
        );
        await flash.say_and_wait('……真是……超出预期啊。');
        await era.printAndWait(
          `随后，开心的微笑浮现于${flash.sex}的脸庞之上。`,
        );
        await flash.say_and_wait(
          '本来对于结果没有抱有期望才对……应该说这就是运气的魅力吗。',
        );
        await flash.say_and_wait(
          `呵呵～看来今天的运势比较不错呢。那么作为庆祝，我们一起去吃点美味的蛋糕怎么样？${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('三等奖？');
        await era.printAndWait('看着显示屏上的鲜艳大字，荣进闪耀眨了眨眼睛。');
        await flash.say_and_wait('嘛，也算是预期中的结果呢。');
        await era.printAndWait(
          `下一秒，平和的微笑浮现于${flash.sex}的脸庞之上。`,
        );
        await flash.say_and_wait(
          '付出与回报相符，果然还是这种公平的结果比较好啊。毕竟要是双方不相等的话，我可能还会因此感到忐忑呢。',
        );
        await flash.say_and_wait(
          `呵呵～那么作为圆满结束的庆祝，我们一起去吃点美味的蛋糕怎么样？${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('再接再厉？');
        await era.printAndWait('低沉的旋律从喇叭中传出。');
        await era.printAndWait(
          '与此同时，显示屏上的鲜艳大字让荣进闪耀沉默了几秒。',
        );
        await flash.say_and_wait('……嘛，也算是可以接受的结果呢。');
        await era.printAndWait(
          `随后，豁达的微笑浮现于${flash.sex}的脸庞之上。`,
        );
        await flash.say_and_wait(
          '概率性事情是会这样呢，比起符合预期，还是让期望落空的可能性更大。',
        );
        await flash.say_and_wait(
          `那么作为对于抽奖的弥补，我们一起去吃点美味的蛋糕怎么样？${callname}`,
        );
      },
    ];
    await get_random_entry(buffer)();
    await era.printAndWait(
      `虽然嘴上说毫无吸引力，但果然，面对这种不确定性所产生的未知，${flash.sex}多多少少也会在意最终的结果。`,
    );
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   */
  async o_s_ktv(flash, you) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到商店街卡拉ok。`);
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        '说起来，上个星期日，佐敦同学教会了我关于这个月新推出的三首J-POP歌曲的歌唱技巧，您有兴趣来聆听吗？',
      );
    } else {
      await flash.say_and_wait(
        '诶？想听我擅长的歌曲……唔，但是我最常唱的歌是德国的童谣哦？您不会介意吗。',
      );
      await flash.say_and_wait('……我知道了，那么，容我献丑了。');
    }
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_s_movie(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到商店街看电影`);
    if (era.get('love:37') >= 75 && Math.random() < 0.34) {
      await flash.say_and_wait('《初恋胡萝卜蛋糕 恋爱比胡萝卜更甜蜜2》？');
      await era.printAndWait(
        '环顾电影院内林立的各种近期正在播出的电影的海报，荣进闪耀的视线在某处告示栏中停了下来。',
      );
      await flash.say_and_wait(
        '呵呵～我有听说过，这就是那部鲁道夫会长看完后都给予好评的青春爱情电影的新作吗。',
      );
      await flash.say_and_wait(
        `${callname}，有兴趣和我一起去观看吗？正好可以为下一次的约会活动寻找灵感呢。`,
      );
    } else if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `《赛${flash.uma_sex_title}的破晓 身处巅峰之时》？`,
      );
      await era.printAndWait(
        '环顾电影院内林立的各种近期正在播出的电影的海报，荣进闪耀的视线在某处告示栏中停了下来。',
      );
      await flash.say_and_wait(
        '呵呵～我有听说过，这就是那部受到鲁道夫会长好评推荐的传记类系列电影的新作吗。',
      );
      await flash.say_and_wait(
        `${callname}，有兴趣和我一起去观看吗？我对里面涉及到的关于赛马娘在参赛时的心境描写很感兴趣。`,
      );
    } else {
      await flash.say_and_wait('《五小时地狱》？');
      await era.printAndWait(
        '环顾电影院内林立的各种近期正在播出的电影的海报，荣进闪耀的视线在某处告示栏中停了下来。',
      );
      await flash.say_and_wait(
        '呵呵～我有听说过，这就是目白麦昆同学提起的那部以长度闻名，主打挑战观众耐性的电影吗？',
      );
      await flash.say_and_wait(
        `${callname}，有兴趣和我一起去观看吗？感觉在有您陪同的情况下，即便是三百分钟的长度也不是问题呢。`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   */
  async o_s_restaurant(flash, you) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到车站附近吃饭。`);
    if (Math.random() < 0.5) {
      await flash.say_and_wait('诶，让我来决定这次的用餐安排？');
      await flash.say_and_wait(
        '唔……既然这样的话，那请问我可以使用由自己平日里比较偏好的那些食物所组成的菜单吗？',
      );
      await flash.say_and_wait(
        '话虽如此，但也是围绕着兼顾营养与美味这一主题来搭配的，所以有信心不会令您感到失望。',
      );
      await flash.say_and_wait('嗯，我知道了。那么尽请期待吧。');
      await flash.say_and_wait('呵呵～很开心能够与您一同分享自己的爱好呢。');
    } else {
      await flash.say_and_wait('请问您喜欢吃纳豆吗？');
      await flash.say_and_wait(
        '啊，没有别的意思，只是看到菜单上有纳豆所以有感而发。',
      );
      await flash.say_and_wait(
        '其实我很喜欢吃纳豆，因为这是对身体有益的健康食品。',
      );
      await flash.say_and_wait(
        '虽然初次尝试时的味道可能会令人不适，但习惯之后反而有种不同寻常的吸引力呢。',
      );
      await flash.say_and_wait(
        '因此如果可以的话我想推荐您也尝试一下，就比如说……现在？呵呵呵～',
      );
    }
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_s_dating(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到车站附近约会。`);
    if (Math.random() < 0.5) {
      await flash.say_and_wait(`请抓紧我的手，${callname}。`);
      await flash.say_and_wait(
        '还有可以的话能再往我这边靠近5厘米吗？嗯，就是这样。',
      );
      await flash.say_and_wait(
        '诶，不……我没有别的想法。只是因为这里的人流量太过于拥挤，担心您的安全……是的，仅此而已。',
      );
    } else {
      await flash.say_and_wait('今天的衣服很漂亮？呵呵～谢谢夸奖。');
      await flash.say_and_wait(
        '因为是和您的约定，所以必须得像这样重视起来才行。',
      );
      await flash.say_and_wait(
        `不过话虽如此，氪约会也不仅仅只是看双方的穿着打扮吧？所以有计划好要和我一起做些什么事情了吗，${callname}。`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} you 玩家
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  async o_s_shopping(flash, you, callname) {
    await era.printAndWait(`${you.name} 和荣进闪耀一起来到车站附近逛商场。`);
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `准备购买的商品已经提前规划好了吗？${callname}。`,
      );
      await flash.say_and_wait('诶，为什么要提前规划？');
      await flash.say_and_wait(
        '因为在我看来，购物本身就和执行计划一样，都是需要去精准对待的行为。',
      );
      await flash.say_and_wait(
        '我推荐您也这么尝试一下哦？坚定地只购买自己经过深思熟虑后才决定的物品，最大程度避免额外消费。长久以来，能够节省下不少的开销呢。',
      );
      await flash.say_and_wait(
        '嗯……要是感兴趣的话，干脆就从今天开始吧？我们一起来规划这次的购物清单怎么样？',
      );
    } else {
      await flash.say_and_wait('泰迪熊玩偶啊。');
      await era.printAndWait(
        `途中，${you.name} 发现${flash.sex}正对着某家玩具店的展示柜陷入思考。`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await flash.say_and_wait(
        '……不，没什么。只是我突然想起了小时候父母送给我的那只泰迪熊玩偶。因为它们的外观比较相似，所以稍微有些触景生情。',
      );
      await flash.say_and_wait(`诶？等等！${callname}，这不代表我感兴………`);
      await flash.say_and_wait('…………');
      await flash.say_and_wait(
        '……唉，您啊。明明这只玩偶并不在这次的购物清单之内。',
      );
      await flash.say_and_wait(
        '不过……呵呵～很感谢您的好意呢，我会认真铭记于心的。',
      );
    }
  },
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {string} callname 荣进闪耀对玩家的称呼
   */
  good_night_normal(flash, callname) {
    const buffer = [
      () =>
        flash.say(
          `今天辛苦了，${callname}。一天的劳累之后，还请注意让自己的身体放松一下哦。`,
        ),
      () =>
        flash.say(
          `今天非常感谢您，${callname}。祝您能够在夜晚得到一场甜美的梦。`,
        ),
    ];
    if (era.get('base:37:体力') < era.get('maxbase:37:体力') * 0.5) {
      buffer.push(
        () => flash.say('呼……『Aus nichts wird nichts』。'),
        () =>
          flash.say(
            '感觉身体……稍微有些沉重呢。但如果因此而松懈的话，是不是就无法取得理想的结果了？',
          ),
      );
    }
    if (era.get('base:37:体力') < era.get('maxbase:37:体力') * 0.25) {
      buffer.push(
        () =>
          flash.say(
            '呼……身体开始乏力了。果然还是稍微更改一下后面的计划比较好吗？',
          ),
        () =>
          flash.say(
            '劳逸结合，是一门高深的学问呢。看来我距离理解这句话，还有很长一段路要走。',
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * 读档对话 - 怀孕/已生育
   * @param {CharaTalk} flash 荣进闪耀
   */
  async load_talk_pregnant(flash) {
    await flash.say_and_wait('是吗……你最终还是做出了这样的选择啊。');
    await era.printAndWait([
      flash.get_colored_name(),
      ' 轻叹一声，言语中尽是失落。',
    ]);
    await flash.say_and_wait(
      '……呵，看来是我的双眼被之前那份虚假的美好所蒙蔽了呢。',
    );
    await era.printAndWait(
      `下一秒，明白一切都已无法逆转的${flash.sex}轻笑着摇了摇头。`,
    );
    await flash.say_and_wait('那么，请容我问出最后一个问题。');
    await era.printAndWait(
      `${flash.teen_sex_title}抹去眼中的泪花，悲伤逐渐转变为一种清澈的质问。`,
    );
    await flash.say_and_wait(
      '抛妻弃子，背信弃义。对你而言，所谓的誓言，都是些一文不值的事物吗？',
    );
  },
};
