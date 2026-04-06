/**
 * @file 摩耶重炮 - 招募
 * @author 黑奴二号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_start(maya, you) {
    const ret = [];
    await era.printAndWait(
      `今天是为了看清并发掘未来有望的实力赛马娘们的选拔比赛的日子，会遇见怎样的赛马娘呢？${you.name} 一边兴奋着一边来到了比赛现场——`,
    );
    await maya.say_and_wait(
      '亚达亚达亚达————！Maya也想出场比賽！让我出场嘛！！',
    );
    await era.printAndWait(
      `选拔赛工作人员A「所以说，${maya.name} 同学！请不要擅自闯入比赛！唔，这身手也太灵活了吧……！」`,
    );
    await maya.say_and_wait(
      '亚达亚达亚达～！Maya也想拥有心脏砰砰跳的感觉嘛～！！',
    );
    await era.printAndWait(
      `在较远的地方，名为 ${maya.name} 的赛马娘正在和工作人员纠缠不休……啊嘞，${maya.sex}怎么好像往这个方向跑了？`,
    );
    await maya.say_and_wait('哼哼，才不会让你抓到～！……哇啊！？');
    await era.printAndWait(
      `${you.name} 撞上了想要乱窜的 ${maya.name}，慌慌张张地接住了${maya.sex}。与少女柔软的身躯亲密接触带给了 ${you.name} 前所未有的强烈冲击————虽然可能是物理上的。`,
    );
    await maya.say_and_wait('啊哇哇哇，对不起——！没事吧！？」');
    era.printButton('「我可是特雷森的训练员，这点小伤算什么！」', 1); //无意义的玩梗选项
    era.printButton('「我没事，你也没受伤吧？」', 2);
    ret.push(await era.input());
    if (ret.at(-1) === 1) {
      await era.printAndWait(
        `实战空手道之父，大山倍达曾经主张，破坏力=速度x握力x体重。`,
      );
      await era.printAndWait(
        `赛马娘，尤其是中等部马娘的体重，有多少呢？30kg？35kg？无论怎么想，也不会超过40kg吧。`,
      );
      await era.printAndWait(
        `但如果加上${maya.couple_title}所背负的愿望，祝福和意志，其Uma-Soul的重量，便不下400kg！`,
      );
      await era.printAndWait(
        `三倍于人类的速度，三倍于人类的握力，三倍于人类的体重，加起来便远远超过人类的10倍甚至9倍！`,
      );
      await era.printAndWait(
        `如此强劲，如此霸道的冲击，${you.name} 又如何抵挡了？又怎么可能抵挡了！`,
      );
      if (
        (ret['down'] =
          era.get(`base:0:耐力`) <= Math.random() * era.get(`base:24:力量`))
      ) {
        era.printButton('「所以说，不要停下来啊……」', 1); //bgm小苍兰
        await era.input();
        await era.printAndWait(
          `${maya.sex}的速度还真是快啊……这是 ${you.name} 最后的想法`,
        );
        await era.printAndWait(`${you.name} 的眼前一黑，便失去了意识……`);
      } else {
        //进行一个玩家耐力对重炮力量的检定，过了有额外属性奖励，不影响剧情
        await era.printAndWait(
          `但 ${you.name} 就是可以抵挡！因为 ${you.name} TMD就是这么强！`,
        );
        await era.printAndWait(
          `如此一个小小的马娘，又怎么能伤到 ${you.name} 分毫了？`,
        );
        era.printButton('「因为保护马娘是我的使命！」', 1);
        await era.input();
      }
    }
    await maya.say_and_wait('嗯，Maya没事！因为被你接住了……');
    await maya.say_and_wait(
      `哎嘿嘿。你真温柔！难道是新人训练员？Maya呢，名字叫作 ${maya.name}（Mayano Top Gun)`,
    );
    await era.printAndWait(
      `选拔赛工作人员A「啊，正好正好！训练员！能不能帮我看着${maya.sex}，让${maya.sex}不要擅自参加比赛！？拜托你了！」`,
    );
    era.printButton('「亚达亚达亚达！」', 1); //师雌小鬼之长技以制雌小鬼
    era.printButton('「好，知道了。」', 2);
    ret.push(await era.input());
    if (ret.at(-1) === 1) {
      await era.printAndWait(`成年人的崩溃，往往只是在一瞬间……`);
      await era.printAndWait(
        `一成不变的枯燥生活，高强度的工作，初来乍到的不安，早就把 ${you.name} 的精神状态逼到了边缘。`,
      );
      await era.printAndWait(
        `而现在工作人员的职场霸凌就是这骆驼上的最后一根稻草，一想到将来自己会像这样每天都被人呼来喝去干各种杂活，沦为清洁工都不如的小角色，最后被一脚踢开，绝望瞬间充满了${you.name}的内心。`,
      );
      await era.printAndWait(
        `${you.name} 蜷曲在地上，哭的活像个几十岁的孩子。`,
      );
      await maya.say_and_wait('诶……？');
      await era.printAndWait(`工作人员和 ${maya.name} 都被震惊到说不出话来。`);
      await era.printAndWait(
        `但作为特雷森的工作人员，终归是经验丰富，对于各种奇怪的事情都见怪不怪了。`,
      );
      await era.printAndWait(
        `选拔赛工作人员A「对了！${maya.name} 同学，能拜托你照顾一下这位训练员吗？」`,
      );
      await maya.say_and_wait('？');
      await era.printAndWait(
        `选拔赛工作人员A「会照顾人的话，就会给人一种成熟的感觉哦？这可是展现 ${maya.name} 同学魅力的大好机会啊！」`,
      );
      await maya.say_and_wait('哦哦！I copy！');
      await era.printAndWait(
        `无论过程如何，工作人员支开 ${maya.name} 的目的总归是达成了，所以赶紧离开了这里。`,
      );
      await maya.say_and_wait('好啦，好啦，不要再哭啦……');
      await era.printAndWait(
        `少女稍显笨拙的将 ${you.name} 抱进怀中，即使是尚未发育完全的胸部，也足够温暖和柔软。`,
      );
      await era.printAndWait(
        `在马娘身上所散发出的淡淡香气包围下，${you.name} 感到异常的安心。`,
      );
      era.printButton('「妈妈……」', 1);
      await era.input();
      await maya.say_and_wait(
        '妈妈在这里哦～好孩子～好孩子……嘿嘿，总感觉这样有种变成大人的感觉呢～',
      );
      await era.printAndWait(
        `在 ${maya.name} 的安慰下，${you.name} 的精神终于得到了放松，意识也渐渐涣散……`,
      );
    } else {
      await maya.say_and_wait('哎哎哎一！？等下一！为什么你答应她了啊！？');
      await maya.say_and_wait('真是的，还以为你是个温柔的训练员呢！');
      await era.printAndWait(
        `虽然这么闹了一场，但最终 ${maya.name} 还是没能参加比赛，选拔比赛在排除了 ${maya.name} 之后开始了……`,
      );
      await maya.say_and_wait('啊，真好啊，比赛真好啊Maya也想参加啊～没劲。');
      await maya.say_and_wait(
        '喂喂一至少和Maya聊聊天嘛！有没有什么有趣的话题？',
      );
      await era.printAndWait(
        `正当 ${you.name} 苦恼的时候，${maya.name} 突然看向了比赛场的方向，轻轻地开口了。`,
      );
      await maya.say_and_wait('嗯？现在第二位的那个人——');
      await era.printAndWait(
        `听了 ${maya.name} 的话，下意识地看向第二名的赛马娘。`,
      );
      await era.printAndWait(
        `如果是那个位置的话，根据时机的不同，可能能够阻止第一名往前冲。`,
      );
      await era.printAndWait(
        `而且————如果顺利的话，自己身前就会一片宽敞，甚至能保持着这样的优势进入最后的直线。`,
      );
      await maya.say_and_wait(
        '只要在感觉刚好的时候『biu』一下用力踏出去，再接着就『叭biu』一下跑起来应该就行了。',
      );
      await maya.say_and_wait('感觉刚好的时候……啊，现在！！');
      await era.printAndWait(`？？？「呜……牡蛎……！！」`);
      await maya.say_and_wait('啊————好可惜～');
      await era.printAndWait(
        `……虽然那个赛马娘失败了，但是 ${maya.name} 说的时机非常完美。`,
      );
      await maya.say_and_wait('啊————啊，真好啊真好啊！Maya也想参加比赛啊');
      era.printButton('（你究竟是……？）', 1);
      await era.input();
      await maya.say_and_wait('哎？……一直盯着Maya，想干什么？');
      await maya.say_and_wait(
        '难道……这就是传说中的一见钟情！？呀一☆Maya真是受欢迎呢',
      );
      await era.printAndWait(
        `虽然还不能将其完美地转化成言语，但是已经完全解读了比赛的展开的 ${maya.name}。`,
      );
      await era.printAndWait(
        `${maya.sex}展现给${you.name}的才能的一角，深深留在了${you.name}的心里……`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_after(maya, you) {
    await era.printAndWait(
      `${maya.name} 给 ${you.name} 留下了深刻的印象。为了能再一次见到${maya.sex}，${you.name} 在校内到处寻找着……`,
    );
    await maya.say_and_wait('诶，奇怪？你，难道说是――');
    await maya.say_and_wait(
      '果然！是选拔赛时遇到的那个人！哇————又见面了呢～！你在这里做什么呢？',
    );
    era.printButton('「我是来找你的哦。」', 1);
    await era.input();
    await maya.say_and_wait(
      '诶，找Maya吗？哇啊……这样有点————有点大人的感觉～！！呀～～～♪',
    );
    await maya.say_and_wait(
      `但是但是，Maya现在有急事呢。${you.name} 是想跟你聊聊天，嗯……`,
    );
    await maya.say_and_wait('啊，对了！你也一起来就好了！');
    await maya.say_and_wait('决定了————！那样的话就，Take Off……————！！');
    await era.printAndWait(
      `于是 ${you.name} 就这样被${maya.sex}莫名其妙的拉到了赛场上……`,
    );
    await maya.say_and_wait(
      '这样啊，在那里也可以咻地——冲出去。Maya，都还不知道……！',
    );
    await maya.say_and_wait('果然，成熟马娘们的比赛，真令人兴奋不已啊～！！');
    await era.printAndWait(
      `${maya.name}，始终两眼放光地盯着一流马娘们激烈角逐的比赛……`,
    );
    await maya.say_and_wait(
      '呜呜～，能参加令人兴奋不已的比赛的姐姐们，都闪闪发光的～！！真好啊，Maya也想闪闪发光的……！',
    );
    era.printButton('「兴奋不已？闪闪发光？」', 1);
    await era.input();
    await maya.say_and_wait(
      '嗯！这样的大比赛里啊，会发生很多Maya也不知道的事情，真的令人兴奋不已！',
    );
    await maya.say_and_wait(
      '知道Maya所不知道的事情，这样的成熟马娘们，看起来真的闪闪发光的～！',
    );
    await maya.say_and_wait(
      '所以说啊，Maya也想变成那样！想参加令人兴奋不已的比赛，然后变得闪闪发光！',
    );
    await maya.say_and_wait(
      '哈～，真好啊。闪耀系列赛……Maya也想快点在那里跑啊～！',
    );
    await era.printAndWait(
      `教官A「啊！${maya.name} 同学！你怎么又翘掉了训练！」`,
    );
    await maya.say_and_wait('诶——，训练……？不行！Maya绝对不要。太没趣了。');
    await maya.say_and_wait('我要到赛场上探险咯————。拜拜————！！');
    await era.printAndWait(`教官A「等一下！啊，又被${maya.sex}跑掉了……」`);
    era.printButton('「那孩子，不擅长做训练吗？」', 1);
    await era.input();
    await era.printAndWait(
      `教官A「嗯……非要说${maya.sex}不擅长做的事，大概是没有吧。${maya.sex}是个不管做什么都马上能学会的，很强的孩子。」`,
    );
    await era.printAndWait(
      `教官A「第一次跑沙土的时候就马上抓住了要领，在胜者舞台的舞蹈课上，也没见到过${maya.sex}会吃力。」`,
    );
    await era.printAndWait(
      `看来 ${maya.name}，天生具有『理解』的能力――也就是说，${maya.sex}天生拥有着能够找到『正解』的惊人的直觉……！`,
    );
    await era.printAndWait(
      `教官A「学习也很厉害……但是，不知为何，${maya.sex}总觉得训练之类的很无趣……第一次训练之后，${maya.sex}就一次训练都没有参加过啊。」`,
    );
    era.printButton('「只参加过一次吗！？」', 1);
    await era.input();
    await era.printAndWait(
      `教官A「就是说啊……就因为这样，所以包括模拟赛在内的所有比赛${maya.sex}都被禁止参加了。」`,
    );
    await era.printAndWait(
      `毕竟比赛是用来发挥训练成果的地方，这点也不是不能理解……`,
    );
    await era.printAndWait(
      `但 ${you.name} 的脑海中浮现出 ${maya.name} 渴望着想参加比赛的样子……能不能为${maya.sex}做点什么……？`,
    );
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_3(maya, you) {
    await maya.say_and_wait('呀吼——♪最近经常遇到你啊。');
    await maya.say_and_wait(
      '现在啊，我正在看下面赛场上的模拟赛。毕竟 Maya 又参不了赛——。',
    );
    await maya.say_and_wait('真好啊～，Maya 也想参加比赛啊。但是――');
    era.printButton('「无论如何都不想做训练吗？」', 1);
    await era.input();
    await maya.say_and_wait('……不想。');
    await maya.say_and_wait('因为说不做不行，所以我第一次有好好地参加哦？');
    await maya.say_and_wait(
      '但是，它那些事情只做一次就能完全搞懂了。要是已经搞懂了就很没趣的。',
    );
    await maya.say_and_wait('一直做那些没趣的事，意义何在？');
    await era.printAndWait(
      `${maya.name} 无论做什么都能马上知道『正解』，并且还能够做得很好。`,
    );
    await era.printAndWait(
      `或许，${maya.sex}从未有过在不断努力的基础上才取得什么成就的经历。`,
    );
    await era.printAndWait(
      `所以说，${maya.sex}没法理解努力的意义，只会觉得训练是很无聊，很痛苦的吧……`,
    );
    await maya.say_and_wait(
      '……自己得跟好好做训练的大家一样才行，Maya也这么想过哦？',
    );
    await maya.say_and_wait(
      '但是，我不管怎么做都感到很无聊嘛。我老是觉得这样做没有意义。',
    );
    await maya.say_and_wait(
      '……因为跟大家不一样，所以不行吗。Maya的话，不能够成为闪闪发光的马娘吗……？',
    );
    era.printButton('「有一说一，确实」', 1); //梗选项，不影响剧情（或许可以影响初始好感？）
    era.printButton('「没那回事！！」', 2);
    if ((await era.input()) === 1) {
      //天 皇 玉 音 放 送
      await era.printAndWait(
        `说到底还是条懒狗，你不懒的话那你训练你练啊。为了比赛啊，为了比赛你就冲啊你训练啊，你不要上学嘛？你要比赛，你不是要冲吗？`,
      );
      await era.printAndWait(
        `你觉得你自己是不是懒狗，睡觉睡到训练都不去练，一下午就在那，下午就在那打游戏，晚上就在那看电视剧。一天三顿都在学校里面，还是叫同一个寝室的室友给你带哈基米的，你不是懒狗吗？`,
      );
      await era.printAndWait(
        `你自己想想你的技能学好了么。你的同学可能别人在半夜跑步，在那转圈，对不对。或者台灯小台灯充电台灯USB接口台灯，在那里弄起在那儿读。`,
      );
      await era.printAndWait(
        `那你呢？就在床上，跟旁边室友熬夜打游戏。你不是懒狗啊。要比赛的时候「噢，明天让我超一下，我没技能。」这不会那不会，说到底还不是一条懒狗。训练不进去，就想玩。`,
      );
      await era.printAndWait(
        `你打游戏，在那登dua郎的时候你把这时间拿去训练嘛。你把你用在装大人上的精力拿个搞训练，你看你搞得上去不吗？说不定你都赢G1了。`,
      );
      await era.printAndWait(
        `我是说所有人都是懒狗，但是有的懒狗就认清了这一点。`,
      );
      await era.printAndWait(
        `话虽这么说，作为一个训练员，${you.name} 还是不能放着${maya.sex}不管。`,
      );
    } else {
      await maya.say_and_wait('哇！吓……吓我一跳。');
      await maya.say_and_wait(
        '你，竟然能发出那么大的声音啊。明明给人一种很温柔的感觉……',
      );
    }
    await maya.say_and_wait('……呐呐。你，也想让Maya去做训练吗？');
    era.printButton('「想哦」', 1); //你没得选
    era.printButton('「很想哦」', 2);
    await era.input();
    await maya.say_and_wait('嗯————……这样啊。');
    await maya.say_and_wait('……可以哦？如果你能听Maya的话，我就去做训练！');
    era.printButton('「听话？」', 1);
    await era.input();
    await maya.say_and_wait('嗯♪那个啊～');
    await maya.say_and_wait('和Maya，去车站约会吧！！');
    era.printButton('「好啊」', 1);
    era.printButton('「我还有事，先鸽了」', 2);
    const ret = await era.input();
    if (ret === 2) {
      await maya.say_and_wait(
        '诶……好吧……不过等你有空的时候一定要和Maya去约会哦！You copy？',
      );
    }
    return ret;
  },
  /** @param {CharaTalk} maya */
  async rec_try_skip_station(maya) {
    await maya.say_and_wait(
      '啊！是你！明明和Maya约好了去车站的…………Maya可是等了很久了哦？',
    );
    await maya.say_and_wait('Maya是成熟的大人了，所以不会多说什么啦…………');
    await maya.say_and_wait('不过约好了，千万不要忘记哦？');
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_station(maya, you) {
    await era.printAndWait(`${you.name} 想起了还有和 ${maya.name} 的约定。`); // 每次前往车站都会触发，除非你选3，真不想招的话为什么要点呢.jpg
    await era.printAndWait(`要去赴约吗？`);
    era.printButton('去吧', 1);
    era.printButton('先鸽了', 2);
    era.printButton(`太麻烦了，再也不想看到${maya.sex}了`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`在车站前――`);
      await maya.say_and_wait('Landing！！久等了♪');
      await maya.say_and_wait(
        '诶嘿嘿，今天谢谢你陪我来哦！像成熟马娘那样做的约会，我好想尝试一次啊——♪',
      );
      await era.printAndWait(
        ` ${maya.name} 的耳朵兴奋地抖动着，身体也轻轻摇晃，看来${maya.sex}对此真的很兴奋。`,
      );
      await maya.say_and_wait(
        '那那，去哪好呢！？去时尚的店铺里购物，去闪闪发光的甜品店巡礼都不可或缺吧！',
      );
      await maya.say_and_wait(
        '还有，该去看点浪漫的电影吧——？还想去有成熟氛围的咖啡馆里喝茶……呜呜呜，已经高兴起来了～～！！',
      );
      await maya.say_and_wait(
        '快快，不赶快点的话一天就要结束了！那我们走咯，Take Off——————！',
      );
      await era.printAndWait(
        `然后，${you.name}被 ${maya.name} 以惊人的气势带着在街上到处逛……`,
      );
      await maya.say_and_wait(
        '快看快看，那件T恤超级可爱～！啊，那个是果汁摊吗！？有没有卖胡萝卜汁呢——！？',
      );
      await maya.say_and_wait(
        '嗯？嗅嗅……感觉好香啊——！是从这边传来的！去看看吧去看看吧～！',
      );
      await maya.say_and_wait('快点快点，不可以发呆哦！要好好跟上Maya哦♪');
      await maya.say_and_wait(
        '要看哪个呢——！？嗯——，全都很有趣的样子～呃，啊呀！？',
      );
      await maya.say_and_wait(
        '啊哇哇哇，预、预告片的屏幕上，出现了接吻镜头……！看到了啊～！！呜呜，脸好烫……！',
      );
      await era.printAndWait(
        `仅仅是看到了接吻的画面就会满脸通红的 ${maya.name}，果然还是有着孩子气的一面呢。`,
      );
      await maya.say_and_wait(
        '冰淇淋，要点几球比较好呢？1球？2球？3球！？就点3球吧！呐，决定了！！',
      );
      await maya.say_and_wait(
        '点哪个好呢～。草莓的看起来挺好吃……还有香草的～，巧克力曲奇的和～',
      );
      await maya.say_and_wait(
        '诶，芝士蛋糕味的是期间限定！？……呐呐，果然还是点4球吧～！！',
      );
      await era.printAndWait(`${you.name}一整天都这样被 ${maya.name} 拉着逛……`);
      await maya.say_and_wait('啊啊～，好高兴啊——！！');
      await maya.say_and_wait(
        '不得不说，你真厉害啊——！能跟着Maya全力玩到最后的人，你可能是除Mabe亲外的第一个！',
      );
      era.printButton('「还以为自己会中途倒下的……」', 1);
      await era.input();
      await maya.say_and_wait(
        '啊哈哈，那样吗！？那，说明你有在非常努力了——！谢谢呢。',
      );
      await maya.say_and_wait(
        '……呐呐。你，为什么那么温柔呢？为什么愿意和Maya约会呢？',
      );
      await maya.say_and_wait(
        '果然还是因为，Maya答应过只要你听了话就会去做训练吗？',
      );
      era.printButton('「不太对呢。」', 1);
      await era.input();
      await maya.say_and_wait(
        '不太对？怎么回事？你不是因为想让Maya做训练，才去跟我约会的吗？',
      );
      await maya.say_and_wait('如果不是那样的话，你为什么会来呢？');
      era.printButton('「因为我希望你不要放弃梦想！」', 1);
      await era.input();
      await maya.say_and_wait('梦想……？');
      await maya.say_and_wait('我的，梦想……');
      await era.printAndWait(
        ` ${maya.name} 闭上了嘴，似乎是陷入了沉思。然后――`,
      );
      await maya.say_and_wait('……这样啊。');
      await maya.say_and_wait('嗯……今天，真的很谢谢你——！');
      await maya.say_and_wait('明天，我们一起做训练吧！');
    }
    return ret;
  },
};
