/**
 * @file 第一红宝石 - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  before_begin_race: (() => {
    const title = '出道战前';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      const ret = [];
      await ruby.say_and_wait('我们去整备室吧。');
      era.drawLine();
      await you.say_as_passer_by_and_wait('议员A', [
        '让我们为 ',
        ruby.get_colored_name(),
        ' 华丽的初次比赛，鼓掌！！',
      ]);
      await era.printAndWait('（啪啪啪……！）');
      era.printButton('（……诶，谁啊这是？）', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 在大脑中检索了片刻，突然造访的中年男子的面容，和一位最近突然起势的政治家对上了。',
      ]);
      await you.say_as_passer_by_and_wait(
        '议员A',
        '呀，我很荣幸。能见证那个『华丽一族』的出道。',
      );
      await ruby.say_and_wait('感谢您的祝贺。');
      await era.printAndWait([
        '虽然 ',
        ruby.get_colored_name(),
        ' 从容地应对着议员模样的人，但这是重要的出道战前，',
        you.get_colored_name(),
        ' 本想让对方马上离开……',
      ]);
      await you.say_as_passer_by_and_wait(
        '议员A',
        '我还带了祝贺的鲜花，你要是喜欢就好了。',
      );
      await ruby.say_and_wait('有心了，请慢走。');
      await you.say_as_passer_by_and_wait('议员A', '诶，等——');
      await ruby.say_and_wait('不好意思，时间到了。得到您的声援，我很感动。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 挥手致意时偷看了 ',
        you.get_colored_name(),
        ' 一眼。',
      ]);
      await ruby.say_and_wait('下次请事先通知，务必要从正门来。');
      await ruby.say_and_wait(
        '如果您和我的训练员一样，有足以被我们一族评价的自负。',
      );
      await you.say_as_passer_by_and_wait(
        '议员A',
        '原来如此。失礼了，对不起打扰了。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 目送着男人离开，同时将身体转向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await you.say_as_passer_by_and_wait('记者A', [
        '红宝石',
        ruby.adult_sex_title,
        '、训练员',
        you.adult_sex_title,
        '，非常抱歉。我有向工作人员传达拒绝那位的访问。',
      ]);
      era.printButton('「因为没能拒绝所以也没办法。」', 1);
      era.printButton('「和传闻一样是位有压迫感的人物。」', 2);
      ret.push(await era.input());
      await you.say_and_wait('露比认识那个人吗？');
      await ruby.say_and_wait('是的。');
      await ruby.say_and_wait('恐怕是想通过我来炫耀和一族的联系。');
      await you.say_and_wait('因为是最近才起势，所以迫切地想要后盾吧。', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' 把视线投向一旁的慰问品，除了刚才的议员，各方人士都送来了花束。',
      ]);
      await ruby.say_and_wait('入口处的立式花。');
      await ruby.say_and_wait(
        '那家企业现在，融资困难的样子。希望得到我们一族的帮助。',
      );
      await era.printAndWait([ruby.get_colored_name(), ' 又看向另一边。']);
      await ruby.say_and_wait(
        '以百合为中心的花，是现在处在政治中心的人物赠送的。',
      );
      await ruby.say_and_wait(
        '附上信件的份意图很明显。以我为目标，希望成为孩子将来势力的磐石。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的声色不见丝毫的感动，像讲着和自己毫无干系的事情一样，告知 ',
        you.get_colored_name(),
        ' 各个花束的来历。',
      ]);
      era.printButton('「我能拿点回去装饰训练员室吗？」', 1);
      era.printButton('「我是不是有点不解风情？」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('请自便，拿不下的话就和管家说一声。');
      } else {
        await ruby.say_and_wait('你的贺礼，我已经切实收到了。');
        await ruby.say_and_wait('这副由你培养的身体的初次亮相，还请尽收眼底。');
      }
      await era.printAndWait('时间到了，我去赛场。');
      await you.say_and_wait('果然这朵花才是最美的啊。', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 在地下通道时，也能感受到会场中热烈的气氛。',
      ]);
      await era.printAndWait(
        '观众的声音里，许多都是在期待「华丽一族」的登场。',
      );
      await era.printAndWait([
        '压力很大，但 ',
        ruby.get_colored_name(),
        ' 表现出的坦然，让 ',
        you.get_colored_name(),
        ' 反而产生了一丝不安。',
      ]);
      era.printButton(
        `「毕竟是 ${
          ruby.sex_code === 1 ? '少爷' : '大小姐'
        }，已经习惯这种场面了吧。」`,
        1,
      );
      era.printButton('「你不要紧吧？」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 2) {
        await ruby.say_and_wait('准备得很充分，不安的因素一点都没有。');
        era.printButton('「嗯嗯，一点都没有。」', 1);
        era.printButton('「那么，可以告诉我吗？」', 2);
        ret.push(await era.input());
        if (ret.at(-1) === 2) {
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('您真的是。');
          await ruby.say_and_wait('对于被期待的状况我很感激，但也感到负担。');
          await ruby.say_and_wait('不过即使这样，我也绝对不会被它们干扰。');
          await era.printAndWait([
            '如此断言的 ',
            ruby.get_colored_name(),
            '，',
            you.get_colored_name(),
            ' 确实没有从',
            ruby.sex,
            '的眼中看到动摇。',
          ]);
        }
      }
      await ruby.say_and_wait('那么，我出发了。');
      era.printButton('「一路顺风。」', 1);
      await era.input();
      await era.printAndWait([
        '面对孤身一人背负一切的',
        ruby.sex,
        '，此刻 ',
        you.get_colored_name(),
        ' 能说出的只有这句话。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '等待时机';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} hoch_rev 报知杯皇冠赛（上色版名字）
     * @param {CharaTalk} oka_sho 樱花赏（上色版名字）
     * @param {CharaTalk} takz_kin 宝冢纪念（上色版名字）
     * @param {CharaTalk} arim_kin 有马纪念（上色版名字）
     */
    const f = async (ruby, you, hoch_rev, oka_sho, takz_kin, arim_kin) => {
      const ret = [];
      await ruby.say_and_wait('我回来了。');
      era.printButton('「辛苦啦。」', 1);
      era.printButton('呜哇，白丝弄得好脏。', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await ruby.say_and_wait('谢谢。');
      } else {
        await ruby.say_and_wait('盯——', true);
      }
      era.println();
      await era.printAndWait('总之，是一场不负华丽一族名号的精彩出道战。');
      await ruby.say_and_wait('一会儿有见面会，我换好衣服就去。');
      era.printButton('「知道了。」', 1);
      era.printButton('「需要我搭把手吗？」', 2);
      ret.push(await era.input());
      era.drawLine();
      await you.say_as_passer_by_and_wait('记者A', [
        '虽然有点早，但有人认为三重宝冠正是 ',
        ruby.actual_name_with_title,
        ' 的本命路线。',
      ]);
      await you.say_as_passer_by_and_wait(
        '记者B',
        '看了今天的比赛，我也感受到了。',
      );
      await you.say_as_passer_by_and_wait(
        '记者B',
        '和您母亲一样，甚至在其之上的光辉。',
      );
      await you.say_as_passer_by_and_wait('记者C', [
        '是啊，在那之后，希望能参加 ',
        takz_kin,
        ' 和 ',
        arim_kin,
        ' 等比赛。',
      ]);
      await era.printAndWait('兴奋、期待……');
      await ruby.say_and_wait('谢谢大家。');
      await ruby.say_and_wait('我一定会让大家看到期待着的活跃表现。');
      await era.printAndWait([
        '这时，',
        you.get_colored_name(),
        ' 灵光一闪！出道战开始前——',
      ]);
      await ruby.used_to_say_and_wait(
        '对于被期待的状况我很感激，但也感到负担。',
      );
      await era.printAndWait([
        '对 ',
        ruby.get_colored_name(),
        ' 来说，这是普通、是理所当然的。',
      ]);
      await era.printAndWait('但是……');
      era.printButton(`「我可是露比的训练员啊。」`, 1);
      await era.input();
      await era.printAndWait([
        '以 ',
        ruby.get_colored_name(),
        ' 足以在新秀级拿下G1胜利的素质来看，三重宝冠也不过是你们旅途的中转站吧。',
      ]);
      await era.printAndWait([
        '不想扫记者们的兴致，',
        you.get_colored_name(),
        ' 决定闭口不谈此事。',
      ]);
      era.drawLine({ content: '记者招待会后' });
      await ruby.say_and_wait('年内，我想集中训练。');
      await era.printAndWait([
        '正如成为 ',
        ruby.get_colored_name(),
        ' 的训练员后 ',
        you.get_colored_name(),
        ' 所了解到的一样。',
      ]);
      await ruby.say_and_wait('三重宝冠战线是【华丽一族】最看重的事情。');
      await era.printAndWait('为了能在那里达到顶峰，积累训练是有必要的。');
      await era.printAndWait(
        '量变会产生质变，当然，也有参加比赛积累经验的选项。',
      );
      era.printButton(`「露比。」`, 1);
      await era.input();
      await ruby.say_and_wait('我理解你的意思。');
      await ruby.say_and_wait('当然，也会考虑参加比赛。');
      await ruby.say_and_wait('但现状是，不能认为身体的本格化已经完成了。');
      await ruby.say_and_wait('所以希望方针是以训练为中心的。');
      await era.printAndWait('看来，没有什么值得讨论的地方了。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 本来也想让 ',
        ruby.get_colored_name(),
        ' 继续好好锻炼身体，本人也有同样的想法再好不过——',
      ]);
      era.printButton('「我知道了。」', 1);
      await era.input();
      await ruby.say_and_wait('非常感谢。');
      await era.printAndWait([
        '作为训练成果的检验，',
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 选择了 ',
        hoch_rev,
        '——',
        oka_sho,
        ' 的前哨站作为年后的第一场重赏比赛。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = '华丽的最高杰作';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} mother 第一红宝石的母亲（剧情 NPC）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, mother, you, callname) => {
      await era.printAndWait([
        '在反复训练的某一天，拜读了【华丽一族】书信的 ',
        you.get_colored_name(),
        '，正准备和 ',
        ruby.get_colored_name(),
        ' 一起造访第一家的老宅。',
      ]);
      await era.printAndWait([
        '为了和',
        ruby.sex,
        '建立信赖关系，首先应该了解',
        ruby.sex,
        '所重视的东西。',
      ]);
      await era.printAndWait(['然而在你们动身前……']);
      await ruby.say_and_wait('不好意思，临时更改一下行程。');
      await era.printAndWait([
        '在没有被告知事态的情况下，',
        you.get_colored_name(),
        ' 被带到的是某酒店的房间。',
        you.get_colored_name(),
        ' 换上了房间里准备好的西装。',
      ]);
      await ruby.say_and_wait('可以准备再华丽一点的领带吗？');
      await you.say_as_passer_by_and_wait('管家', [
        '知道了，',
        ruby.sex_code === 1 ? '少爷' : '小姐',
        '。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 上下打量了 ',
        you.get_colored_name(),
        ' 一番，就闭着眼睛转过脸去。',
      ]);
      era.printButton(`「露比？」`, 1);
      await era.input();
      await ruby.say_and_wait('失礼，我说晚了。');
      await ruby.say_and_wait(
        '母亲大人，听说我的训练员要来老家，特意赶过来了。',
      );
      await you.say_and_wait('哈啊？', true);
      era.drawLine();
      await era.printAndWait([
        '在赛',
        ruby.uma_sex_title,
        '界无人不知，留下了一场场华丽之战的',
        ruby.uma_sex_title,
        '……',
      ]);
      await mother.say_and_wait([
        '初次见面，',
        callname,
        '。我是第一红宝石的',
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '。',
      ]);
      await era.printAndWait([
        '眼前的这个',
        ruby.uma_sex_title,
        '，无论是堪称恐怖的美丽感，还是',
        ruby.sex,
        '的容貌、气场，样子简直就像——',
      ]);
      era.printButton('（变大了的第一红宝石）', 1);
      await era.input();
      await mother.say_and_wait([
        '在机场听说 ',
        callname,
        ' 要来，突然之间很抱歉。',
      ]);

      era.printButton('「没有那种事」', 1);
      await era.input();
      await mother.say_and_wait([
        '这段时间，',
        ruby.sex_code === 1 ? '儿子' : '女儿',
        ' 都承蒙你的关照了。',
      ]);
      era.printButton(`「我才是，受了${ruby.sex}很多照顾。」`, 1);
      await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '大人，这之后也有安排吧？我和您一起。',
      ]);
      await mother.say_and_wait('嗯～有吗……');
      await you.say_and_wait('！', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' 被 ',
        ruby.get_colored_name(),
        ' 的母亲凝视着。那是其作为华丽一族的极致，想要看清 ',
        you.get_colored_name(),
        ' 这个人的眼神。',
      ]);
      await era.printAndWait('其中蕴含着足以穿透人心的魄力。');
      await era.printAndWait([
        '这时，',
        you.get_colored_name(),
        ' 的脑中想起了测试时的那一天。',
      ]);
      await ruby.used_to_say_and_wait(
        '没错。请不要忘记这份身姿。若您有盯上的目标存在，那就必须做出相称的行为举止。',
      );
      await ruby.say_and_wait(
        '唯有如此，有朝一日才能成为自己想成为的模样',
        true,
      );
      await era.printAndWait('还有，那一抹微笑。');
      await era.printAndWait([
        '既然是',
        ruby.sex,
        '的训练员，那么和',
        ruby.sex,
        '并肩而立时，当然要挺胸抬头。',
      ]);
      await mother.say_and_wait('————');
      await mother.say_and_wait('你知道我的跑步吧。');
      era.printButton('点头', 1);
      await era.input();
      await mother.say_and_wait('这样啊。');
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '大人，还有事……',
      ]);
      await mother.say_and_wait('不，已经结束了。');
      await mother.say_and_wait([callname, '，之后就任凭你判断了。']);
      await mother.say_and_wait(['请你不要忘记，', ruby.sex, '是怎样的孩子。']);
      await ruby.say_and_wait('————!', true);
      await mother.say_and_wait('万分抱歉，我要去车站了，还有下一个安排。');
      await mother.say_and_wait(
        '我们家的历史，请在那些书里……和露比的口中慢慢了解。',
      );
      await mother.say_and_wait([
        callname,
        '，我们家的小',
        ruby.sex_code === 1 ? '伙子' : '姑娘',
        '就烦请你费心了。',
      ]);
      await era.printAndWait([
        '送别 ',
        ruby.get_colored_name(),
        ' 的',
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '，',
        you.get_colored_name(),
        ' 看了很多藏书后回到了特雷森学院。',
      ]);
      era.printButton(
        `「你的${ruby.sex_code === 1 ? '父亲' : '母亲'}，很厉害呢。」`,
        1,
      );
      era.printButton(
        `「露比的${ruby.sex_code === 1 ? '爸爸' : '妈妈'}，比露比还要厉害呢。」`,
        2,
      );
      const ret = await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '大人是华丽一族的『结晶』，如今也是一族台面上的象征。',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '父亲' : '母亲',
        ruby.sex,
        '，对你……',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('不，没什么。');
      await ruby.say_and_wait([
        '你刚才问：『在你眼里',
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '是怎样一位',
        ruby.uma_sex_title,
        '』吧。',
      ]);
      await ruby.say_and_wait('答案是，最为华丽的。');
      await ruby.say_and_wait('看了现役时代的比赛录像的话，任谁都会这么想的。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的眼睛一瞬间放出了光芒。',
      ]);
      await era.printAndWait([
        '说起来，',
        ruby.sex,
        '一知道要和母亲见面，就马上安排 ',
        you.get_colored_name(),
        ' 换了服装。',
      ]);
      era.printButton(
        `「你很尊敬你${ruby.sex_code === 1 ? '父亲' : '母亲'}呢。」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait([
        '是的，作为我前进路上最专业、最辉煌的典范，我很尊敬',
        ruby.sex,
        '。',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '伟大的轨迹……是我为了今后一族的繁荣必须效法的。',
      ]);
      await era.printAndWait([
        '为什么要选择三重宝冠路线……',
        you.get_colored_name(),
        ' 感受到了 ',
        ruby.get_colored_name(),
        ' 超越家族历史的绝不单纯的意图。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '因此、不能松懈';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('训练场');
      await ruby.say_and_wait([callname, '，重新开始吧。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 从 ',
        ruby.get_colored_name(),
        ' 那里得知，',
        ruby.sex,
        '的脚天生有问题。',
      ]);
      await era.printAndWait(
        '正确地讲是【脚的形状有问题，暂时对比赛没有障碍。】',
      );
      await era.printAndWait([
        '因此，起初并没有特意向 ',
        you.get_colored_name(),
        ' 报告。',
      ]);
      await era.printAndWait([
        '但是，在被 ',
        you.get_colored_name(),
        ' 问到的时候也没有隐瞒。',
      ]);
      await era.printAndWait([
        '这是跑步时负荷很大的部分，',
        you.get_colored_name(),
        ' 觉得不是那么简单就能解决的问题。',
      ]);
      era.printButton('「真的，不要紧吗？」', 1);
      await era.input();
      await ruby.say_and_wait('当然没有问题，而且父母……');
      await ruby.say_and_wait('父母、还有周围的大家，都给予了很多的帮助。');
      await era.printAndWait([
        '一瞬间，',
        ruby.get_colored_name(),
        ' 的表情变得相当……劳苦。',
      ]);
      era.printButton('「是天生的？」', 1);
      await era.input();
      await ruby.say_and_wait('是的，出生的时候就被医生宣告可能没法跑了。');
      await ruby.say_and_wait('但是，父母为了我，用尽所有手段献身面对问题。');
      era.printButton('「所以你才有这样的热望啊。」', 1);
      await era.input();
      await ruby.say_and_wait('不这样做不行的吧？');
      await ruby.say_and_wait([
        '——因为是作为『华丽一族』的赛',
        ruby.uma_sex_title,
        '出生而享受生命的。',
      ]);
      await ruby.say_and_wait(
        '其结果是，学会了优化用脚方式的姿势跑步，现在也改变了。',
      );
      await ruby.say_and_wait('医生也说，现在的身体可以承受激烈的比赛。');
      await ruby.say_and_wait('如果，万分之一……');
      era.printButton('「现在先集中精神训练。」', 1);
      era.printButton('「可以给我看看你的脚吗？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('嗯。在自己确信没有问题前，先锻炼身体。');
        await ruby.say_and_wait('要完成的使命已经决定了。');
        await ruby.say_and_wait('话有点说得太多了，我去跑道。');
        await era.printAndWait('训练顺利结束了。');
      } else {
        await ruby.say_and_wait('动机不纯——看起来也不是。');
        await ruby.say_and_wait('你知道在公共场合做这种事意味着什么吗？');
        era.printButton('蹲下身子。', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('至少，去那边的椅子……');
        await era.printAndWait([
          you.get_colored_name(),
          ' 细细地检查了 ',
          ruby.get_colored_name(),
          ' 双脚的每一寸。',
        ]);
        await era.printAndWait([
          '鬼使神差的，',
          you.get_colored_name(),
          ' 拉起一处丝袜，「啪」的松手。',
        ]);
        await era.printAndWait([
          '又惊又羞的',
          ruby.sex_code === 1 ? '小少爷' : '大小姐',
          '咬着下唇瞪着 ',
          you.get_colored_name(),
          '，就在 ',
          you.get_colored_name(),
          ' 准备好挨骂的时候。',
        ]);
        await ruby.say_and_wait('帮我把鞋子穿好。');
        await era.printAndWait(['之后你们顺利地完成了训练。']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('祝您新年快乐。');
      era.printButton('「新年快乐。」', 1);
      await era.input();
      await ruby.say_and_wait('多亏了训练员你，我平安地迎来了新的一年。');
      await ruby.say_and_wait(
        '接下来，要在母亲大人胜利的和未能胜利的比赛上留下满意的结果……',
      );
      await you.say_and_wait('是要为母亲雪辱啊。', true);
      await ruby.say_and_wait('现在，可以断言脚的不安已经完全消除了。');
      await ruby.say_and_wait('我希望能参加一场樱花赏的前哨战，向您证明。');
      await era.printAndWait(
        '想做的事被提前说了……不过，能和担当目标相同是件好事。',
      );
      await ruby.say_and_wait('今年，也请多多指教。');
      era.printButton('「尽管交给我吧。」', 1);
      await era.input();
      await ruby.say_and_wait('嗯。');
      era.printButton(`「不过，露比之后应该还要去和其他人打招呼吧？」`, 1);
      await era.input();
      await era.printAndWait(
        '不难想象，作为财政界声名远播的一族的末裔，年初会很忙碌。',
      );
      await ruby.say_and_wait('不。');
      await ruby.say_and_wait('家族的各位已经打点完毕了。');
      await ruby.say_and_wait('如果真的有需要，会再联络我。');
      await era.printAndWait('也就是说，现在很有空。');
      await ruby.say_and_wait('那么，我准备进行自主练习。');
      await ruby.say_and_wait('已经打过招呼，我先走了。');
      await era.printAndWait('等等——');
      await era.printAndWait([
        '新年伊始果然还是希望担当能休息片刻，',
        you.get_colored_name(),
        ' 想到的是……',
      ]);
      era.printButton('「新春试笔。」（速度+20）', 1);
      era.printButton('「吃过年夜饭了吗？」（耐力+20）', 2);
      era.printButton('「让我们进入派对时间！」（技能点数+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '突然提起试笔，是因为 ',
            you.get_colored_name(),
            ' 挺喜欢某东方古国贴春联的习俗的。',
          ]);
          await ruby.say_and_wait('意外……');
          await era.printAndWait([
            ruby.get_colored_name(),
            ' 的字很清秀，可以说得上漂亮。',
          ]);
          await era.printAndWait([
            '但与 ',
            you.get_colored_name(),
            ' 师从某10亿人口国家的国家级书法家的字迹比，依旧有些相形见绌。',
          ]);
          await ruby.say_and_wait([callname, '，请指导我。']);
          await era.printAndWait([
            ruby.uma_sex_title,
            '天生的不服输精神真是哪里都看得到啊。',
          ]);
          await era.printAndWait([
            '如此感慨的 ',
            you.get_colored_name(),
            '，决定先从纠正握笔的姿势开始，从身后包住了 ',
            ruby.get_colored_name(),
            ' 的小手。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 和 ',
            ruby.get_colored_name(),
            ' 度过了饱含文化交流的愉悦午后。',
          ]);
          break;
        case 2:
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('晚上，家主会在第一家的宅邸设宴。');
          await ruby.say_and_wait('您能出席的话就再好不过了。');
          await ruby.say_and_wait('请安心，是华丽一族内部的晚宴。');
          await ruby.say_and_wait('去和母亲大人打个招呼吧？');
          await era.printAndWait([
            '跟 ',
            you.get_colored_name(),
            ' 预想的不同，享受了轻松的宴会时间。',
          ]);
          break;
        case 3:
          await ruby.say_and_wait('噗，呵呵。');
          await ruby.say_and_wait('只有我们两个人，也要开派对吗？');
          await era.printAndWait([
            '不知为何，',
            ruby.get_colored_name(),
            ' 笑的很开心。',
          ]);
          await ruby.say_and_wait(
            '好啊，遗憾的是和『太阳』不同，我在这方面没有涉猎。',
          );
          await ruby.say_and_wait('就有劳您让我享受一番了？');
          await era.printAndWait([
            you.get_colored_name(),
            ' 和 ',
            ruby.get_colored_name(),
            ' 度过了愉快的一天。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  hoch_rev_win: (() => {
    const title = '此刻正是华丽之时';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} oka_sho 樱花赏（上色版名字）
     */
    const f = async (ruby, callname, oka_sho) => {
      await ruby.say_and_wait('终于做到了……');
      await ruby.say_and_wait('……');
      era.drawLine({ content: '休息室内' });
      await ruby.say_and_wait('请您对今天的比赛做出评价。');
      era.printButton('「首先，从出闸开始。」', 1);
      await era.input();
      await era.printAndWait('反省会进行了一段时间……');
      await ruby.say_and_wait([callname, '，到此为止可以吗。']);
      await ruby.say_and_wait('那么，根据反省点来调整训练计划。');
      await era.printAndWait([
        '目标是 ',
        oka_sho,
        '，',
        ruby.get_colored_name(),
        ' 的',
        ruby.sex_code === 1 ? '父亲' : '母亲',
        '也赢下的三重宝冠第一战。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oka_sho_win: (() => {
    const title = '期待、加深';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {PrintedSpan} yush_him 日本橡树大赛（上色版名字）
     */
    const f = async (ruby, yush_him) => {
      await era.printAndWait([
        '比赛后，',
        ruby.get_colored_name(),
        ' 虽然取得了意义非凡的胜利，但脸上依旧保持着清爽。',
      ]);
      era.printButton('「恭喜。」', 1);
      await era.input();
      await ruby.say_and_wait('谢谢，但是还差得远呢。');
      await era.printAndWait([
        yush_him,
        '，宝冠路线的第二战，',
        ruby.get_colored_name(),
        ' 的母亲也曾于此折戟。',
      ]);
      await era.printAndWait([
        '在中距离以上的赛事中，',
        ruby.get_colored_name(),
        ' 的实力还有未知的部分。',
      ]);
      await ruby.say_and_wait('我的问题可能是……');
      await ruby.say_and_wait('不。就算有什么问题，只要迅速解决就行了。');
      await ruby.say_and_wait('还请，彻底地指导我。');
      await era.printAndWait([
        '就这样，为了下一个目标比赛 ',
        yush_him,
        '，训练的日子再次开始。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_19: (() => {
    const title = '只是凝视着前方';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} yush_him 日本橡树大赛（上色版名字）
     */
    const f = async (ruby, you, callname, yush_him) => {
      await era.printAndWait([
        '针对2400米的 ',
        yush_him,
        '，',
        ruby.get_colored_name(),
        ' 正在进行耐力训练。',
      ]);
      era.printButton('「感觉如何？」', 1);
      await era.input();
      await ruby.say_and_wait('没有问题。');
      era.printButton('「真的不要紧吗？」', 1);
      await era.input();
      await ruby.say_and_wait('嗯。');
      await ruby.say_and_wait('单纯的，体力不足。');
      await ruby.say_and_wait('希望您能多提出一些增强体力的训练方案。');
      await ruby.say_and_wait('那么，我再去跑一圈。');
      await you.say_and_wait('耐力不足吗……', true);
      await era.printAndWait('确实，也有那个原因。');
      await era.printAndWait([
        '但是，更像是有其他无可奈何的东西阻挡在',
        ruby.sex,
        '面前，那就是——',
      ]);
      era.printButton('跑法。', 1);
      era.printButton('适性。', 2);
      await era.input();
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 看来，「适性」本身没有好坏之分。',
      ]);
      await era.printAndWait('……只是，根据瞄准的方向不同，它会变成障壁。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的目标比赛有很多是中长距离，',
        ruby.sex,
        '踏上这条路，一定会面对很多阻碍。',
      ]);
      await era.printAndWait('这个阶段还说不准，只能先反复进行耐力训练。');
      await era.printAndWait('如果能做出成果，再以此为基础制定新的训练计划。');
      era.drawLine();
      await ruby.print_and_wait('转眼，时间来到了放学后。');
      await ruby.say_and_wait(
        '2400米，对我来说可能有点严酷。是在我适性外的。',
        true,
      );
      await ruby.say_and_wait(
        [callname, ' 应该是这样推测的，我也感觉到了。'],
        true,
      );
      await ruby.say_and_wait('不甘……');
      await ruby.say_and_wait(
        ['一定要挑战 ', yush_him, '，取得母亲未能达成的胜利。'],
        true,
      );
      await ruby.say_and_wait('一族的存在，就是这样一步步积累的。', true);
      await you.say_as_passer_by_and_wait('管家', [
        ruby.sex_code === 1 ? '少爷' : '小姐',
        '，我来接你了。',
      ]);
      await ruby.say_and_wait('对不起，预定我要变更。');
      await ruby.say_and_wait('因为要自主练习，之后的事情就交给你了。');
      await you.say_as_passer_by_and_wait(
        '管家',
        '我明白了。不用在意这边的事情，请集中精神训练。',
      );
      await ruby.say_and_wait('嗯。');
      await ruby.say_and_wait('必须前进。');
    };
    f.title = title;
    return f;
  })(),
  yush_him_win: (() => {
    const title = '鸽血红';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('不协调感。');
      await ruby.say_and_wait(
        '没有计策可言，也根本不需要看准时机，只靠身体能力居然就……',
      );
      await ruby.say_and_wait('我被自己以外的人，掌握了？');
      await ruby.say_and_wait([callname, '，你到底……']);
      era.printButton('（察觉到了啊）', 1);
      era.printButton('「还不赖吧？」', 2);
      const ret = await era.input();
      await ruby.say_and_wait('你对我的身体做了什么？');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('不，是我失言了。今后请你继续随心所欲。');
      await ruby.say_and_wait('为了一族，我随时可以向你献上自己的全部。');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  yush_him_lose: (() => {
    const title = '橡树的叶子很宽大';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} rose_sta 玫瑰锦标（上色版名字）
     * @param {PrintedSpan} shuk_sho 秋华赏（上色版名字）
     */
    const f = async (ruby, you, callname, rose_sta, shuk_sho) => {
      await ruby.say_and_wait('是吗，果然，我……', true);
      await ruby.say_and_wait('非常抱歉，让您看到了我不成气候的样子。');
      await ruby.say_and_wait([
        callname,
        ' 也，为了今天，提供了很多训练以外的帮助。',
      ]);
      await ruby.say_and_wait('没能回报您的努力，我感到非常惭愧。');
      era.printButton('「我也对不起……」', 1);
      era.printButton('「其实有其他的回报方式。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('……诶？');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 这不把内心展露出来的表明上的平静，让 ',
          you.get_colored_name(),
          ' 觉得非常的懊悔。',
        ]);
        era.printButton('「下次……会让你……」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('……非常、感谢。');
        await ruby.say_and_wait([
          '下一个目标是 ',
          shuk_sho,
          '，在那之前我有一个提案。',
        ]);
        await ruby.say_and_wait(['我想参加作为其前哨战的 ', rose_sta, '。']);
        await ruby.say_and_wait(
          '夏天的集训也很辛苦，但为了本命的比赛必须保持在最佳状态。',
        );
        await era.printAndWait('确实，夹着一场比赛，状态会更适应大赛吧。');
        era.printButton('「我知道了。」', 1);
        await era.input();
        await ruby.say_and_wait('拜托您了。');
        era.printButton('「那么，我在入口等你。」', 1);
        await era.input();
        await ruby.say_and_wait('嗯。');
      } else {
        await ruby.say_and_wait('这种玩笑，我不希望听到第二次。');
        era.printButton('「享受比赛了吗？」', 1);
        await era.input();
        await ruby.say_and_wait('诶？');
        era.printButton('「试试看享受比赛吧。」', 1);
        await era.input();
        era.printButton('「如何让你胜利，是该由我考虑的事情。」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 低着头思索着什么，',
          you.get_colored_name(),
          ' 先行离开了。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（经典年）';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} yush_him 日本橡树大赛（上色版名字）
     * @param {PrintedSpan} shuk_sho 秋华赏（上色版名字）
     */
    const f = async (ruby, you, yush_him, shuk_sho) => {
      await era.printAndWait([
        '在轻微的慢跑中，',
        ruby.get_colored_name(),
        ' 跌倒了。',
      ]);
      era.printButton('「没事吧！？」', 1);
      await era.input();
      await ruby.say_and_wait('只是被沙子绊倒了，没有问题。');
      era.printButton('「受伤了吗？」', 1);
      await era.input();
      await ruby.say_and_wait('没有的事。');
      await era.printAndWait('好像真的没有问题，但是……');
      await era.printAndWait([
        '从夏季集训开始起，',
        ruby.get_colored_name(),
        ' 每日每日紧逼着自己。',
      ]);
      await era.printAndWait(['只为了在之后的 ', shuk_sho, ' 上拿出成果。']);
      await era.printAndWait([
        '难得来了海边，于是 ',
        you.get_colored_name(),
        ' 想着……',
      ]);
      era.printButton('「抓凤蝶」（力量+10）', 1);
      era.printButton('「那么，锻炼耐久吧」（根性+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('理解不能。');
        era.printButton('「是这里特有的种类哦，华丽的，和你很般配。」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('破茧成蝶，或许我并配不上它。');
        await era.printAndWait([
          '在 ',
          ruby.get_colored_name(),
          ' 抓凤蝶期间，小洋伞由 ',
          you.get_colored_name(),
          ' 代劳打着。',
        ]);
        await era.printAndWait([
          '阴影下对着凤蝶露出笑颜的',
          ruby.teen_sex_title,
          '，终于有了点这个年纪',
          ruby.child_sex_title,
          '该有的样子。',
        ]);
      } else {
        await ruby.say_and_wait([
          '是因为 ',
          yush_him,
          ' 上，我那不成气候的奔跑吧。',
        ]);
        await era.printAndWait([
          '果然，',
          ruby.get_colored_name(),
          ' 对于中距离的适性，远不如短英。',
        ]);
        await era.printAndWait([
          '速度即是优势，也是',
          ruby.sex,
          '最大的弱点。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 继续以锻炼耐力为中心，让 ',
          ruby.get_colored_name(),
          ' 进行了艰苦的练习。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '得到的启示';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([callname, '。']);
      await ruby.say_and_wait('你，在我的速度中，发现了光辉？');
      era.printButton('「是啊。」', 1);
      await era.input();
      await ruby.say_and_wait('如果善用这个武器，我也能逼近……');
      await ruby.say_and_wait('如果用这双脚，能展现出最耀眼的光辉的话……');
      await ruby.say_and_wait('和选择的路线无冠，那血脉就流淌在这个身体里。');
      await ruby.say_and_wait('相信只有王道路线能绽放光辉，我也不过如此而已。');
      await ruby.say_and_wait('但是，你可以让我在那条道路外达成使命。');
      await ruby.say_and_wait('以最适合我的方式。');
      await ruby.say_and_wait('这个月辛苦您了。');
      await ruby.say_and_wait('我充分认识到，没有你我是无法前进的。');
      await ruby.say_and_wait('首先必须向家里传达决断。');
      await ruby.say_and_wait('之后，还请继续多多指教。');
    };
    f.title = title;
    return f;
  })(),
  rose_sta_win: (() => {
    const title = '华丽的身份转变';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} shuk_sho 秋华赏（上色版名字）
     * @param {PrintedSpan} takm_kin 高松宫纪念（上色版名字）
     * @param {PrintedSpan} eliz_cup 伊丽莎白二世女皇杯（上色版名字）
     */
    const f = async (ruby, you, callname, shuk_sho, takm_kin, eliz_cup) => {
      const ret = [];
      await ruby.say_and_wait('——嗯？');
      await ruby.say_and_wait('右脚……一瞬间有什么违和感……', true);
      await ruby.say_and_wait('稍微观察一下情况吧，如果还是在意的话就……', true);
      await era.printAndWait([
        '——几天后，',
        you.get_colored_name(),
        ' 得到了 ',
        ruby.get_colored_name(),
        '「脚的周围稍微有些违和感」的报告……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 马上带 ',
        ruby.get_colored_name(),
        ' 去了经常就诊的医生那里。',
      ]);
      await you.say_as_passer_by_and_wait('医生', [
        ruby.get_colored_name(),
        ' 的右脚，是急性化脓性疾病。',
      ]);
      await you.say_as_passer_by_and_wait('医生', '也就是所谓的【蜂窝织炎】。');
      await you.say_and_wait('！', true);
      await you.say_as_passer_by_and_wait('医生', '请放心，情况不严重。');
      await you.say_as_passer_by_and_wait(
        '医生',
        '多亏你在违和感阶段，就及时来就诊了。',
      );
      await you.say_as_passer_by_and_wait('医生', [
        '在你们下次的目标 ',
        shuk_sho,
        ' 前，就可以痊愈。',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('决定了，年内预定的目标比赛暂时撤回。');
      await ruby.say_and_wait('我的脚，天生就有问题，这也是没办法的事。');
      await ruby.say_and_wait('关于脚的问题，不管程度如何，都应该慎重面对。');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait([callname, '。']);
      await ruby.say_and_wait('比赛的参加与否，全部的判断就交给你了。');
      era.printButton('「嗯嗯。」', 1);
      era.printButton('「交给我好了。」', 2);
      ret.push(await era.input());
      await you.say_as_passer_by_and_wait('医生', '但是，真的可以吗？');
      await you.say_as_passer_by_and_wait('医生', [
        shuk_sho,
        ' 和 ',
        eliz_cup,
        '，是你的梦想吧。',
      ]);
      await ruby.say_and_wait('……梦想。');
      await ruby.say_and_wait('谢谢你的好意，但是……');
      await ruby.say_and_wait('但是，我已经有了新的使命。');
      await you.say_as_passer_by_and_wait('管家', '还在会谈中，打扰了。');
      await you.say_as_passer_by_and_wait('管家', [
        ruby.sex_code === 1 ? '少爷' : '小姐',
        '，马上为您安排会面吗？',
      ]);
      await ruby.say_and_wait('嗯，就那么做。');
      await ruby.say_and_wait(
        '虽然提前了……但是和目标比赛的变更一起，今天发表吧。',
      );
      era.drawLine({ content: '记者招待会上' });
      await you.say_as_passer_by_and_wait('记者A', [
        '训练员',
        you.adult_sex_title,
        '，这些没错吧。',
      ]);
      era.printButton('是的，没有问题。', 1);
      await era.input();
      await ruby.say_and_wait('还有一件事，向大家报告。关于下一场目标比赛。');
      await ruby.say_and_wait(['春天的 ', takm_kin, '，决定参加。']);
      await ruby.say_and_wait('即日起，我第一红宝石，宣布将参加短距离战线。');
      await you.say_and_wait('诶诶诶诶诶？', true);
      era.drawLine();
      await era.printAndWait('短暂的见面会顺利结束了——');
      await ruby.say_and_wait('今天您辛苦了。');
      era.printButton('「今天是真的很辛苦啊。」', 1);
      era.printButton('「这么辛苦的我会有奖励吗？」', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await ruby.say_and_wait('不值得您操心，都在设想中。');
        await ruby.say_and_wait(
          '来年，恐怕会是以不同的形式被要求努力的一年吧。',
        );
        await ruby.say_and_wait([callname, '，明年还请继续精进。']);
        await ruby.say_and_wait('那么……');
        await ruby.say_and_wait('……');
        era.printButton(`「露比？」`, 1);
        await era.input();
        await ruby.say_and_wait('不止明年，以后都请多多指教。');
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('请闭上眼睛。');
        await ruby.say_and_wait('啾。', true);
        await era.printAndWait([
          '其实 ',
          you.get_colored_name(),
          ' 只是恰巧闭眼，想问问 ',
          ruby.get_colored_name(),
          ' 要做什么而已。',
        ]);
        await era.printAndWait([
          '脸颊边传来的水声，让 ',
          you.get_colored_name(),
          ' 哑然了，一时甚至不敢睁开眼睛。',
        ]);
        await era.printAndWait([
          '等到回味够了那香软湿糯的触感时，',
          ruby.get_colored_name(),
          ' 已经离开了。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} helios 大拓太阳神
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, helios, you, callname) => {
      const ret = [];
      await ruby.say_and_wait('受到关注，并不会有问题。');
      await era.printAndWait([
        '新年年初，',
        ruby.get_colored_name(),
        ' 就来到 ',
        you.get_colored_name(),
        ' 的训练员室。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 本以为',
        ruby.sex,
        '会更忙一些的，但心里还是很高兴。',
      ]);
      await era.printAndWait([
        '打过招呼后，',
        ruby.sex,
        '说的话果然依旧凛然。',
      ]);
      await ruby.say_and_wait('在这段时间里，我们把该做的事做好就行了。');
      await ruby.say_and_wait([callname, '，是怎么想的？']);
      era.printButton('「要掌握速度……吧。」', 1);
      await era.input();
      await era.printAndWait(['对', ruby.sex, '来说，天生就受到速度的眷顾。']);
      await era.printAndWait([
        ruby.sex,
        '的脚经过磨砺后，定能绽放出光辉，成为一族最耀眼的存在。',
      ]);
      await ruby.say_and_wait('是的。我，不会再违背您的期待。');
      await era.printAndWait([
        '又是年初就神经紧绷，',
        you.get_colored_name(),
        ' 想做些什么让 ',
        ruby.get_colored_name(),
        ' 放松一下……',
      ]);
      era.printButton('「寻找新的正月料理」（耐力+20）', 1);
      era.printButton('「在附近的神社祈祷成长」（全属性+8）', 2);
      era.printButton('「让我们进入派对时间！Lv2！」（技能点数+35）', 3);
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await ruby.say_and_wait('哈啊……');
          await ruby.say_and_wait('虽然我有心里准备，还真是意义不明呢。');
          await era.printAndWait([
            you.get_colored_name(),
            ' 和 ',
            ruby.get_colored_name(),
            ' 在训练员室尝试了各种料理，度过了充实的一天。',
          ]);
          break;
        case 2:
          await ruby.say_and_wait([callname, '……']);
          era.printButton('「别误会，我就是喜欢小的。」', 1);
          era.printButton('「别误会，我是说身体能力的成长。」', 2);
          ret.push(await era.input());
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('之后在校门口集合吧，我去换身衣服。');
          await era.printAndWait('和服适合贫乳穿，好像是真的。');
          await era.printAndWait([
            '但 ',
            you.get_colored_name(),
            ' 确信，是 ',
            ruby.get_colored_name(),
            ' 驾驭了这身华丽的衣装。',
          ]);
          await era.printAndWait([
            '头上别的山茶花很漂亮，但也不如',
            ruby.teen_sex_title,
            '自身动人。',
          ]);
          await era.printAndWait('衣服上的是……牵牛花啊。');
          await you.say_and_wait('爱情、和你紧紧相依啊', true);
          break;
        case 3:
          await era.printAndWait('为什么是Lv2呢？');
          await era.printAndWait([
            '为了不让担当失望，',
            you.get_colored_name(),
            ' 特地向 ',
            helios.get_colored_name(),
            ' 请教了派对的技巧。',
          ]);
          await ruby.say_and_wait('吵闹过头了。');
          await era.printAndWait([
            '得到了',
            ruby.sex_code === 1 ? '少爷' : '大小姐',
            '笑着给出的不留情面的评价。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  takm_kin_win: (() => {
    const title = '三代制霸';
    /** @param {CharaTalk} ruby 第一红宝石 */
    const f = async (ruby) => {
      await ruby.say_and_wait('胜利了……');
      await ruby.say_and_wait('嘿嘿……');
      await era.printAndWait([ruby.get_colored_name(), ' 轻轻甩了下脑袋。']);
      await ruby.say_and_wait('大家的声援，非常感谢。我实现了一族的愿望。');
      await ruby.say_and_wait('下一次出走，我会把更棒的奔跑献上。');
      era.drawLine({ content: '地下通道内' });
      await ruby.say_and_wait('以前，你做的事好像都是对的。');
      await ruby.say_and_wait('虽然是人类，但你在某方面是很强的生物。');
      await ruby.say_and_wait('今后，我可能还会碰壁。');
      await ruby.say_and_wait('还请，不要放开我的手。');
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = '深红乃热情的颜色';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} sprt_sta 短途马锦标（上色版名字）
     */
    const f = async (ruby, you, callname, sprt_sta) => {
      await era.printAndWait([
        '比赛结束后，',
        ruby.get_colored_name(),
        ' 的表情，是前所未有的开朗。',
      ]);
      await era.printAndWait([
        '像冰一样锐利的光辉，这是至今为止',
        ruby.sex,
        '给人的印象。',
      ]);
      await era.printAndWait(
        '但是现在，像是从血肉中发光一样，由内而外的闪耀。',
      );
      await ruby.say_and_wait(callname);
      await ruby.say_and_wait('关于下一个目标，我有建议想要提出。');
      await era.printAndWait([
        '那是，决定速度最快赛',
        ruby.uma_sex_title,
        '的——',
        sprt_sta,
        '。',
      ]);
      await ruby.say_and_wait('是的。');
      await ruby.say_and_wait('我认为在那里，我可以触摸到更高的顶峰。');
      await ruby.say_and_wait('优秀的参赛者和对手们，会盯上我们吧。');
      await ruby.say_and_wait('但我感受到了，不能置之不理的义务感。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿（资深年）';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     * @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     */
    const f = async (ruby, miracle, you, callname, call_93, m_call_r) => {
      await era.printAndWait([
        '夏季集训开始了。对跑比赛的',
        ruby.uma_sex_title,
        '来说是个非常重要的季节。',
      ]);
      await era.printAndWait([
        '为了不浪费宝贵的时间，',
        you.get_colored_name(),
        ' 已然做好了完全准备。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 设计了内容十分紧凑且负荷高的训练菜单，并且配合其强度做好冷却和按摩的准备。',
      ]);
      await era.printAndWait([
        '已经事先告知 ',
        ruby.get_colored_name(),
        ' 该做些什么，因此训练过程显得寡淡无味，但是——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着十分显著的训练成果沾沾自喜。',
      ]);
      await era.printAndWait([
        '身为 ',
        ruby.get_colored_name(),
        ' 的训练员，能够把任务恰当地完成让 ',
        you.get_colored_name(),
        ' 倍感自豪。',
      ]);
      await ruby.say_and_wait(
        '今日也感谢您全程一直在旁辅佐。那么，为了更衣我先失陪了。',
      );
      await era.printAndWait([
        ruby.sex,
        '那未成熟又青涩的雪白身躯，像是倒映在水中的一轮明月，散发着青春无限的魅力光彩。那是一种能够让人抛开理智，坠入罪恶的危险诱惑。',
      ]);
      era.printButton('放开矜持，投入这片深渊。', 1, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      era.printButton('即便训练结束了，仍有一些我能做的事情。', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 双手环绕，从后面搂住 ',
          ruby.get_colored_name(),
          ' 的纤腰。',
          ruby.get_colored_name(),
          ' 惊呼一声后，整个头都羞的低了下去。',
        ]);
        await era.printAndWait([
          '这幅羞赧的模样真是太可爱了，',
          you.get_colored_name(),
          ' 将',
          ruby.sex,
          '的头转过来，将嘴唇贴在',
          ruby.sex,
          '的小嘴上。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 吓了一跳，妄图从 ',
          you.get_colored_name(),
          ' 身上跳起来，多亏 ',
          you.get_colored_name(),
          ' 抱得紧，没让小姑娘得逞。',
        ]);
        await era.printAndWait([
          '一道轻吻，霎时将 ',
          you.get_colored_name(),
          ' 数日隐忍的欲火给点燃了。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 的右手本扶在 ',
          ruby.get_colored_name(),
          ' 的腰上，这时已不由自主地伸入了',
          ruby.sex,
          '的泳衣，往',
          ruby.sex,
          '微隆的胸部前进。',
        ]);
        await era.printAndWait([
          '马上，',
          you.get_colored_name(),
          ' 就摸到那对秀气的乳房，用食指和中指轻轻夹着顶端的乳头搓揉。',
        ]);
        await ruby.say_and_wait(['呀！', callname, '……']);
        await era.printAndWait([
          '一阵深吻之后，',
          you.get_colored_name(),
          ' 的舌头慢慢离开了那张淡薄的樱唇。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 喘着呼吸红着俏脸仰视着 ',
          you.get_colored_name(),
          '，只有一条透明闪亮的银丝，作为 ',
          you.get_colored_name(),
          ' 与',
          ruby.sex,
          '之间的联系。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 的动作没有停止，在 ',
          ruby.get_colored_name(),
          ' 反应过来之前，左手又划入了泳装的下摆，在',
          ruby.sex,
          '的胯下游走。',
        ]);
        await ruby.say_and_wait(
          '现在不行！要是发出声音被谁看到，事情就大条了！',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 用手肘轻轻往 ',
          you.get_colored_name(),
          ' 小腹一推，',
          ruby.uma_sex_title,
          '的力道让 ',
          you.get_colored_name(),
          ' 呛得不停咳嗽。',
        ]);
        era.printButton('「啊啊啊啊！好痛啊，痛死了！」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' 假装无辜的受害者，故意趁机缩进身体把 ',
          ruby.get_colored_name(),
          ' 搂进怀里，当然手指也更加伸入。',
        ]);
        await era.printAndWait([
          '见 ',
          ruby.get_colored_name(),
          ' 抖着身子不再抵抗，',
          you.get_colored_name(),
          ' 微微一笑，把',
          ruby.sex,
          '拉到了旁边的小树林里。',
        ]);
        await era.printAndWait([
          '又是一阵拥吻后，就试着褪下',
          ruby.sex,
          '的泳衣。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 双眼明亮，不想错过一刻欣赏这幅迷人幼体的机会。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 将 ',
          ruby.get_colored_name(),
          ' 按倒，在',
          ruby.sex,
          '雪白的肌肤上裸泳，滑过一片又一片透着粉红的洁白凝脂。',
        ]);
        await ruby.say_and_wait('嗯……啊！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 平时凛然的表情，现在已经完全消失无踪，取而代之的则是灿若蔷薇的无限柔情。',
        ]);
        await era.printAndWait([
          '这幅惹人心动的模样让 ',
          you.get_colored_name(),
          ' 开始意乱神迷，',
          you.get_colored_name(),
          ' 吻着',
          ruby.sex,
          '胸前玲珑秀气的乳房，牙齿一口咬住前端突起的娇嫩果实。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 紧咬嘴唇，忍受着 ',
          you.get_colored_name(),
          ' 带来的刺激。',
        ]);
        await era.printAndWait([
          '就当 ',
          you.get_colored_name(),
          ' 吮着小巧乳头，想接着继续最终阶段时，一旁传来了 ',
          miracle.get_colored_name(),
          ' 的声音。',
        ]);
        await miracle.say_and_wait([m_call_r, '，你在训练吗？']);
        await era.printAndWait([
          '这时 ',
          you.get_colored_name(),
          ' 和 ',
          ruby.get_colored_name(),
          ' 魂都给吓飞了，',
          you.get_colored_name(),
          ' 让 ',
          ruby.get_colored_name(),
          ' 赶紧随便找个理由打发',
          ruby.sex,
          '走。',
        ]);
        await era.printAndWait([ruby.get_colored_name(), ' 不得已只好说。']);
        await ruby.say_and_wait([call_93, '，我在休息，有什么话明天在说吧。']);
        await era.printAndWait([
          '说完轻颦薄怒地瞪了 ',
          you.get_colored_name(),
          ' 一眼。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 杵在 ',
          ruby.get_colored_name(),
          ' 的身上哭笑不得，静静等到 ',
          miracle.get_colored_name(),
          ' 离去。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_30: (() => {
    const title = '夏季合宿（资深年）途中';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('集训已经过了一半，今天这附近会举行夏日祭典。');
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 想着 ',
        ruby.get_colored_name(),
        ' 多半会选择留在集训所的时候。',
      ]);
      await ruby.say_and_wait([callname, '？']);
      era.printButton('「我帮你做好念书的准备咯？」', 1);
      await era.input();
      await ruby.say_and_wait(
        '原来集训所也有这么安静的地方呢。而且连桌子和照明都准备好了。',
      );
      await ruby.say_and_wait('感谢您做了这么多考量。');
      await era.printAndWait(
        'Siuuuuu——咚！从远方传来了烟火的声音，祭典也差不多该要结束了。',
      );
      await era.printAndWait([
        '趁 ',
        ruby.get_colored_name(),
        ' 总算是告一段落的样子，',
        you.get_colored_name(),
        ' 讲了句早就准备好的话。',
      ]);
      era.printButton('要不要稍微去散步一下？', 1);
      await era.input();
      await ruby.say_and_wait('……知道了。');
      era.drawLine({ content: '海边' });
      await ruby.say_and_wait('静谧……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 在无人的沙滩上，肩并肩抬头看着满天繁星。沙沙作响的海风令人觉得十分悦耳。',
      ]);
      era.printButton('我听说这里的星星很漂亮才来的。', 1);
      await era.input();
      await ruby.say_and_wait(
        '确实，我也觉得景色十分秀丽。夏季的星座在夜空闪烁着。',
      );
      await era.printAndWait('散发着独特红光的即是天蝎的心脏——心宿二。');
      await ruby.say_and_wait('……啊啊，果然。');
      await ruby.say_and_wait('蝎火');
      await era.printAndWait([
        you.get_colored_name(),
        ' 感觉旁边好像传来了什么声音，可当 ',
        you.get_colored_name(),
        ' 正要确认的时候，',
        ruby.get_colored_name(),
        ' 又恢复了平常的神情。',
      ]);
      era.printButton('「要回去了哦？」', 1);
      era.printButton(`「白天的时候，奇迹……」`, 2, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('是。');
        await ruby.say_and_wait(
          '夜风已让我的头脑清醒许多。我打算回去之后，为明天的训练做些准备。',
        );
        await era.printAndWait([
          '说完后，',
          ruby.get_colored_name(),
          ' 掉头就走。说不定这场散步对',
          ruby.sex,
          '来说，根本就是非必要的事物。',
        ]);
        await era.printAndWait([
          '当 ',
          you.get_colored_name(),
          ' 为这多余的提案有没有给',
          ruby.sex,
          '添麻烦而兀自忧心时——',
        ]);
        await ruby.say_and_wait('我也，想成为那样的存在。');
        await era.printAndWait('从小小的背影中，传来了这句话。');
        await era.printAndWait([
          '彼此的心意稍微想通了，',
          you.get_colored_name(),
          ' 独自在这个夜晚细细品味着这份喜悦。',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 闻言弯下身子，手指伸进鞋跟将皮鞋脱下……然后一脚把 ',
          you.get_colored_name(),
          ' 踹倒在了地上。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 皱起眉头，心里不太高兴，但抬头一看。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 小小的足踝柔润滑腻，大小和 ',
          you.get_colored_name(),
          ' 的手掌差不多大。',
        ]);
        await era.printAndWait([
          '生气 ',
          you.get_colored_name(),
          ' 的 ',
          you.get_colored_name(),
          ' 选择……',
        ]);
        era.printButton('用牙齿轻轻啃。', 1);
        era.printButton('用嘴唇吻掌心。', 2);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 好像很怕痒，',
          you.get_colored_name(),
          ' 用舌头一直延伸到',
          ruby.sex,
          '轻盈的腿腰时，',
          ruby.sex,
          '差点忍不住大叫起来。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 坏心眼地用手指摆出『噤声』的手势提醒，',
          ruby.get_colored_name(),
          ' 立刻用双手按住嘴唇。',
        ]);
        await era.printAndWait(
          '夜晚的月光算不得明亮，但是要看清那块桃园禁地，也是绰绰有余。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' 撑开 ',
          ruby.get_colored_name(),
          ' 的双腿，挺进那道随着 ',
          ruby.get_colored_name(),
          ' 喘息一开一合的妖艳入口。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 的下腹随着 ',
          you.get_colored_name(),
          ' 一寸寸的前进剧烈抖动，等到深入，又化为扩散至全身的颤抖。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 温柔地抽插。']);
        await ruby.say_and_wait('呜呜——');
        await era.printAndWait([
          '突然间，',
          ruby.get_colored_name(),
          ' 捂着嘴巴发出惨叫般的声音，身体抬起如拱桥。',
        ]);
        await era.printAndWait([
          ruby.sex,
          '的阴道整个紧缩，一圈圈地紧箍在 ',
          you.get_colored_name(),
          ' 的肉杆上。',
        ]);
        era.printButton('射精。', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 这时已经全身发烫、汗水淋漓。',
        ]);
        await era.printAndWait([
          '伴随着 ',
          you.get_colored_name(),
          ' 的射精，',
          ruby.get_colored_name(),
          ' 的下体也射出一些透明的潮液。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 的身体真是被上天眷顾的优体，能够让',
          ruby.sex,
          '轻松享受性爱的愉悦。',
        ]);
        await era.printAndWait([
          '即使本人疲惫不堪，',
          ruby.sex,
          '的雌性通道却开始本能地痉挛蠕动。',
        ]);
        await era.printAndWait([
          '那种感觉像是无数细小的柔软触手，在同时抚弄 ',
          you.get_colored_name(),
          ' 的小训练员。',
        ]);
        await era.printAndWait([
          '一阵拨弄后，',
          you.get_colored_name(),
          ' 又重振雄风。',
        ]);
        era.drawLine();
        await era.printAndWait([
          '当最后一次性交快要结束时，',
          you.get_colored_name(),
          ' 已经不敢留在 ',
          ruby.get_colored_name(),
          ' 体内了。',
        ]);
        await era.printAndWait('这具娇躯简直要把人的魂都抽干才罢休。');
        await era.printAndWait([ruby.get_colored_name(), ' 的小腹微微隆起。']);
        era.printButton('用手压一下。', 1);
        await era.input();
        await era.printAndWait('肚子里满满的浓精，把沙滩玷污地遍地狼藉。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 用来捂住嘴巴的手，早已举在头上无力垂下。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 想把 ',
          ruby.get_colored_name(),
          ' 带回集训所，双腿却不断发抖。',
        ]);
        await era.printAndWait('最后两个人爬着回到了房间。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿结束（资深年）';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     */
    const f = async (ruby, you, call_93) => {
      await ruby.say_and_wait('为了使命，应有奉献自身的觉悟。');
      era.printButton('「奉献？」', 1);
      await era.input();
      await ruby.say_and_wait([call_93, ' 是对的，我……']);
      era.printButton('「真的是对的吗？」', 1);
      await era.input();
      await ruby.say_and_wait('诶？');
      era.printButton(`「露比，你觉得凯斯奇迹这样就好了吗？」`, 1);
      await era.input();
      await ruby.say_and_wait('！');
      await ruby.say_and_wait('……');
      await era.printAndWait([ruby.get_colored_name(), ' 陷入了沉思。']);
      era.drawLine();
      await era.printAndWait([
        '晚上，先室友一步回到寝室的 ',
        ruby.get_colored_name(),
        ' 正喃喃自语。',
      ]);
      await ruby.say_and_wait('我们，很像……');
      await ruby.say_and_wait(
        '血脉、『奇迹』，赋予了我们使命和有目共睹的才能。',
      );
      await ruby.say_and_wait('但有一定的不同，那是……');
      await ruby.say_and_wait([call_93, '，你的前路……']);
      await ruby.say_and_wait('以那种脚步前进，未来只会……');
      await ruby.say_and_wait([
        call_93,
        ' ',
        ruby.sex,
        '自己，觉得这样就好了吗？',
      ]);
      await you.used_to_say_and_wait('真的是对的吗？');
      await you.used_to_say_and_wait('你觉得凯斯奇迹这样就好了吗？');
      await ruby.say_and_wait('不可能好。');
      await ruby.say_and_wait('我，不能允许……');
      await era.printAndWait('夏天的集训，在不安中结束了。');
    };
    f.title = title;
    return f;
  })(),
  before_sprt_sta_s: (() => {
    const title = '所谓奇迹';
    /**
     @param {CharaTalk} ruby 第一红宝石
     @param {CharaTalk} miracle 凯斯奇迹
     @param {CharaTalk} you 玩家
     @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     */
    const f = async (ruby, miracle, you, call_93, m_call_r) => {
      await miracle.say_and_wait('……——');
      await ruby.say_and_wait([call_93, '。']);
      await miracle.say_and_wait('……');
      await ruby.say_and_wait([miracle.get_colored_name(), ' 同学。']);
      await miracle.say_and_wait('啊。');
      await miracle.say_and_wait([m_call_r, '？']);
      await ruby.say_and_wait('时间差不多了，我们该出发了。');
      await miracle.say_and_wait('啊，都这个点了。');
      await ruby.say_and_wait('……');
      await miracle.say_and_wait('不好意思，我没关系的。只是想了很多事情。');
      await miracle.say_and_wait('彼此都，来一场没有遗憾的较量吧。');
      await ruby.say_and_wait('……嗯。');
      era.drawLine({ content: '选手通道内' });
      await miracle.say_and_wait('……要赢。');
      await miracle.say_and_wait('比谁都要快……今天……把奔跑，献给大家……');
      await ruby.say_and_wait([call_93, '。']);
      await miracle.say_and_wait([m_call_r, '……']);
      await miracle.say_and_wait('今天请多指教，当然不需要任何顾虑。');
      await miracle.say_and_wait('彼此都，毫不相让地竞争……');
      await ruby.say_and_wait('我会让你的希望全部落空。');
      await miracle.say_and_wait('！');
      await ruby.say_and_wait('我不会让现在的你，获得最快的光辉。');
      await ruby.say_and_wait('你曾告诉我的那个，就由我来让你见证。');
      await miracle.say_and_wait([m_call_r, '？']);
      await ruby.say_and_wait('……——');
      await ruby.say_and_wait('作为领头者，就让我带你去更高的地方吧。');
      await ruby.say_and_wait('『华丽一族』新的象征，请务必看仔细了。');
      era.drawLine({ content: '准备室内' });
      await ruby.say_and_wait('今天的比赛，一定要取胜。');
      await era.printAndWait([
        '在比赛前，',
        ruby.get_colored_name(),
        ' 突然如此对 ',
        you.get_colored_name(),
        ' 宣言。',
      ]);
      await era.printAndWait('友情还真是耀眼啊。');
    };
    f.title = title;
    return f;
  })(),
  sprt_sta_win_s: (() => {
    const title = '未来是……';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     * @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     * @param {PrintedSpan} swan_sta 天鹅锦标（上色版名字）
     */
    const f = async (
      ruby,
      miracle,
      you,
      callname,
      call_93,
      m_call_r,
      swan_sta,
    ) => {
      await miracle.say_and_wait('冲刺……比谁都快，比谁都更早地——冲线！');
      await miracle.say_and_wait('脚……好痛，蹬不动地……');
      await miracle.say_and_wait('不行！为了大家，我一定要把胜利……');
      await ruby.say_and_wait('不会让你去的，我会在你迎来那等待你的绝望之前……');
      await ruby.say_and_wait('开辟未来！');
      await miracle.say_and_wait(['诶，', m_call_r, '？']);
      era.drawLine({ content: '比赛前' });
      await ruby.used_to_say_and_wait(
        '即使赌上一切，也要在现在报恩。那也是很好的选择。',
      );
      await ruby.used_to_say_and_wait('但是，对你来说这样真的是最好的吗？');
      await ruby.used_to_say_and_wait('你献上一切后，那些人就能得到回报吗？');
      await miracle.used_to_say_and_wait('都现在这个时候了……');
      await ruby.used_to_say_and_wait(
        '只是思考着即将到达极限的『现在』，我不喜欢那样。',
      );
      await ruby.used_to_say_and_wait(['我……因为 ', callname, '。']);
      await ruby.used_to_say_and_wait(
        '找到了不同的道路，新的使命，和更进一步的未来。',
      );
      await ruby.used_to_say_and_wait(
        '完成那条道路，就是我对被给予东西的回报。',
      );
      await ruby.used_to_say_and_wait('我的，情爱。');
      era.drawLine({ content: '回到赛场' });
      await ruby.say_and_wait('哈啊——！');
      await miracle.say_and_wait('！');
      await miracle.say_and_wait('怎么跑……');
      await miracle.say_and_wait('我也要，为了大家……');
      await you.say_as_passer_by_and_wait('实况', [
        miracle.get_colored_name(),
        '，失速！现在冲在前面的是——',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        ruby.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait('实况', [
        ruby.get_colored_name(),
        '，何等绮丽而凄厉的末脚！',
      ]);
      era.printButton(`「去吧，露比。」`, 1);
      await era.input();
      await ruby.say_and_wait('……——');
      await you.say_as_passer_by_and_wait('实况', [
        '胜者是 ',
        ruby.get_colored_name(),
        '！展现压倒性的速度，华丽一族的，',
        ruby.get_colored_name(),
        '！',
      ]);
      era.drawLine({ content: '选手通道内' });
      await miracle.say_and_wait(['……', m_call_r, '。']);
      await ruby.say_and_wait([call_93, '。']);
      await miracle.say_and_wait('恭喜你。真的，非常帅气。');
      await miracle.say_and_wait(
        '我啊，真的觉得哪怕今天日子走到头也无所谓了。',
      );
      await miracle.say_and_wait(
        '我想自己一定跑不了很长时间，如果只要现在的话……就全部赌上。',
      );
      await ruby.say_and_wait('……');
      await miracle.say_and_wait('可是。');
      await miracle.say_and_wait(
        '你的奔跑，太耀眼了。我想我说不定还有更能做的事情。',
      );
      await miracle.say_and_wait('继续比赛，让大家看到未来。回应你的温柔。');
      await ruby.say_and_wait('……！');
      await miracle.say_and_wait('真不甘心啊。');
      await miracle.say_and_wait('但，意外的清爽。');
      await miracle.say_and_wait('我会变得更强的。');
      await miracle.say_and_wait('按照这个速度锻炼身体，从头再来。');
      await miracle.say_and_wait('不会再破坏自己的。');
      await ruby.say_and_wait([call_93, '……']);
      await miracle.say_and_wait(['大概，会选 ', swan_sta, ' 吧。']);
      await ruby.say_and_wait(['……我会和 ', callname, ' 进行讨论的。']);
    };
    f.title = title;
    return f;
  })(),
  before_swan_sta_s: (() => {
    const title = '天鹅锦标前';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     * @param {PrintedSpan} swan_sta 天鹅锦标（上色版名字）
     */
    const f = async (ruby, miracle, m_call_r, swan_sta) => {
      await miracle.say_and_wait([m_call_r, '……你来了啊。']);
      await ruby.say_and_wait('因为您指名让我来，所以我考虑了一下。');
      await era.printAndWait([
        swan_sta,
        '……由于 ',
        miracle.get_colored_name(),
        ' 的邀请，',
        ruby.get_colored_name(),
        ' 决定参加这场比赛。',
      ]);
      await miracle.say_and_wait('谢谢你。没想到，这么快就能再和你一起跑。');
      await ruby.say_and_wait('……您的身体，应该无恙吧？');
      await miracle.say_and_wait('嗯，已经没事了。');
      await miracle.say_and_wait('之前想着只要快就可以了，不断地勉强自己……');
      await miracle.say_and_wait(
        '现在的我为了达到我目前可以达到的最好状态而改变了训练方针。',
      );
      await miracle.say_and_wait('——就算这样，我也有现在的我跑得更快的自信。');
      await miracle.say_and_wait('比你还要快。');
      await ruby.say_and_wait('！');
      await miracle.say_and_wait('我就像我宣言的那样变强了哦。——请和我比试。');
      await era.printAndWait([
        miracle.get_colored_name(),
        ' 露出了微笑。虽然微笑十分柔和，但是从',
        ruby.sex,
        '的气场和姿势确实可以感受到自信。',
      ]);
      await ruby.say_and_wait('状态特别好呢。', true);
      await miracle.say_and_wait('这里才是，请多多指教。');
    };
    f.title = title;
    return f;
  })(),
  swan_sta_win_s: (() => {
    const title = '点火';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (ruby, miracle, call_93, mile_cha) => {
      await ruby.say_and_wait('果然，各位都很棘手，而且——');
      await ruby.say_and_wait([call_93, '……确实比以前更强了。']);
      await ruby.say_and_wait([
        '要在 ',
        mile_cha,
        ' 上取得压倒性的胜利的话，我也得变得比现在更强才行。',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('哼～');
      await era.printAndWait([
        '看着一旁拉住 ',
        miracle.get_colored_name(),
        ' 吵吵嚷嚷的 ',
        miracle.get_colored_name(),
        '，',
        ruby.get_colored_name(),
        ' 露出了会心的微笑。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_43: (() => {
    const title = '「华丽一族」的训练员';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '在训练场旁，正在休息的 ',
        ruby.get_colored_name(),
        ' 突然向 ',
        you.get_colored_name(),
        ' 搭话。',
      ]);
      await ruby.say_and_wait('您的话到底为什么……作为『训练员』的本分是……');
      era.printButton('「不，这是『我』的使命。」', 1);
      await era.input();
      await era.printAndWait([
        '作为「华丽」一族，展示最耀眼的光辉，那就是 ',
        ruby.get_colored_name(),
        ' 的梦想。',
      ]);
      await era.printAndWait([
        '实现赛',
        ruby.uma_sex_title,
        '的梦想——训练员工作的本质可能就是这个。',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('这样啊，我明白了。');
      await era.printAndWait('担当露出的微笑，似乎有点……玩味。');
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_s: (() => {
    const title = '最耀眼的光辉';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} mother 第一红宝石的母亲（剧情 NPC）
     */
    const f = async (ruby, mother) => {
      await era.printAndWait(
        '比赛场上没有往日的喧嚣，谁都带着敬意迎接今天的胜者。',
      );
      await era.printAndWait('（啪啪啪啪啪……！！）');
      await era.printAndWait(['所有人都站起来，称赞', ruby.sex, '。']);
      await ruby.say_and_wait('大家……');
      await era.printAndWait('（啪啪啪啪啪……！！）');
      await era.printAndWait('……');
      await mother.say_and_wait('——');
      await ruby.say_and_wait('……！母亲大人……', true);
      await ruby.say_and_wait('母亲大人也鼓掌……承认了我。');
      await ruby.say_and_wait('终于……');
      era.printButton(`「恭喜你，露比。」`, 1);
      await era.input();
      await ruby.say_and_wait('……');
      await era.printAndWait([
        '一瞬，视线和 ',
        ruby.get_colored_name(),
        ' 交汇。',
        ruby.sex,
        '立刻转向满场的观众。',
      ]);
      await ruby.say_and_wait('大家，非常感谢。');
      await ruby.say_and_wait('我以刚才的表现宣言。');
      await ruby.say_and_wait('今后，会用这双腿来探索更大的光辉。');
      await ruby.say_and_wait('作为华丽一族的，新的象征……');
      await ruby.say_and_wait('和我的训练员一起。');
      await era.printAndWait(
        '这天，后来人们如此描述：华丽一族新的象征诞生了。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_rose_master: (() => {
    const title = '华丽的历史伟业';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('第一家宅邸');
      await era.printAndWait([
        '「华丽一族」，听到这个名字时，人们就会想起某位',
        ruby.uma_sex_title,
        '……',
      ]);
      await era.printAndWait([
        '在历史上刻下了辉煌功绩的稀世名',
        ruby.uma_sex_title,
        '们……',
      ]);
      await era.printAndWait([
        '继承了',
        ruby.couple_title,
        '的血脉，让其绽放出更大的花朵——',
      ]);
      await era.printAndWait([ruby.get_colored_name(), '。']);
      await era.printAndWait([
        ruby.sex,
        '，便是如今作为「华丽一族」象征的',
        ruby.uma_sex_title,
        '。',
      ]);
      await ruby.say_and_wait('让您久等了。');
      await ruby.say_and_wait('所有的报告都完成了。');
      era.printButton('「你家人们的意思是？」', 1);
      await era.input();
      await ruby.say_and_wait('『请用那双脚继续前进』……和那个人一起。');
      await era.printAndWait([ruby.get_colored_name(), ' 结束了三年的赛跑。']);
      await era.printAndWait([
        '为了报告之后的打算，',
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 来到了华丽一族老家。',
      ]);
      await era.printAndWait([
        '「用自己的脚绽放最耀眼的光辉」',
        ruby.sex,
        '的说法好像被接受了。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 歪着头。',
      ]);
      await ruby.say_and_wait('您在做什么呢？');
      era.printButton('「我在看肖像画。」（好感+5）', 1);
      era.printButton('「我在看你。」（爱慕+2）', 2, {
        disabled: era.get('love:85') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '最开始拜访宅邸的时候，重压几乎要让 ',
          you.get_colored_name(),
          ' 的膝盖弯曲。',
        ]);
        await era.printAndWait('如今已经可以如品茶般欣赏画作了。');
        await era.printAndWait([
          '毕竟 ',
          you.get_colored_name(),
          ' 也算是做出了不少的贡献。',
        ]);
        await ruby.say_and_wait([callname, '……']);
        await ruby.say_and_wait('请让我，重新申明一下。');
        await ruby.say_and_wait([
          '这三年间，',
          you.get_colored_name(),
          ' 很出色地承担了指导者的职责。',
        ]);
        await ruby.say_and_wait(
          '我想，成为我的训练员，一定会面对连绵不断的艰难辛苦。',
        );
        await ruby.say_and_wait('但是，你真的努力了，成长了。');
        await ruby.say_and_wait('做的很棒，我为你感到由衷的骄傲。');
        era.printButton('「我才是，非常感谢。」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          '今后，我作为『华丽一族』的象征，必须一直是闪耀的存在。',
        );
        await ruby.say_and_wait('那么，我们商量一下今后的打算吧？');
        era.printButton('「……」', 1);
        await era.input();
        await ruby.say_and_wait('您怎么了？');
        era.printButton('「我可以吗？」', 1);
        await era.input();
        await ruby.say_and_wait('！');
        await ruby.say_and_wait('难以理解。');
        await ruby.say_and_wait([
          '决定我的事情，不是 ',
          callname,
          ' 的职责吗？',
        ]);
        await ruby.say_and_wait('那么，请尽快。时间是有限的。');
        await ruby.say_and_wait('而且……');
        await ruby.say_and_wait('我的画像旁边没有你的话，我会很为难的……');
        await era.printAndWait('今后也有很多课题等着我们，请千万不要忘记。');
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('抱我。');
        await era.printAndWait([
          you.get_colored_name(),
          ' 听话地抱起 ',
          ruby.get_colored_name(),
          ' 小小的身体。',
        ]);
        await ruby.say_and_wait('……嗯。');
        await ruby.say_and_wait('到时候我们就这样拍照吧。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_rest_day: (() => {
    const title = '优雅氛围不会改变';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '即使不在赛场上，',
        ruby.get_colored_name(),
        ' 的优雅氛围也不会改变',
      ]);
      era.printButton(`「露比，今天没有家族的事吗？」`, 1);
      await era.input();
      await ruby.say_and_wait('是的，难得的休息日。');
      await ruby.say_and_wait('什么都不做浪费时间是愚蠢的，所以在努力学习。');
      await era.printAndWait([
        '不愧是',
        ruby.sex,
        '……但是，',
        you.get_colored_name(),
        ' 感到了一种不协调感。',
      ]);
      await era.printAndWait(
        '桌上堆叠的杂志一样的东西，很难认为是学习用的书籍。',
      );
      await ruby.say_and_wait('您很在意呢。');
      await era.printAndWait([
        '然后，',
        ruby.get_colored_name(),
        ' 把书合上，将封面展示给 ',
        you.get_colored_name(),
        ' 看。',
      ]);
      await era.printAndWait('《太太俱乐部》');
      await era.printAndWait(
        '上面大张旗鼓地写着：「开始准备生育时的必读刊物！」',
      );
      await ruby.say_and_wait(
        '除了这本，还有《母亲之友》，《妈咪宝贝》……所有的情报杂志都准备好了。',
      );
      await era.printAndWait([ruby.sex, '的表情略显得意。']);
      await era.printAndWait('而且，好几本书的页面上到处都是便签。');
      await ruby.say_and_wait('不久，你也会有需要这些知识的那一天吧。');
      await ruby.say_and_wait('那么，趁早掌握一点也不坏吧？');
      await ruby.say_and_wait('我挑选了自认为重要的部分，先从这些看起比较好。');
      era.printButton('……恭敬不如从命。', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  os_wait_station: (() => {
    const title = '赴约';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '车站前，',
        you.get_colored_name(),
        ' 朝着私服打扮的',
        ruby.teen_sex_title,
        '微笑地打招呼。',
      ]);
      await era.printAndWait([
        '离约好的时间还有十几分钟，看起来 ',
        ruby.get_colored_name(),
        ' 已经等了一段时间了。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 粗略地打量了一番。']);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 穿的圆领上衣，大方地露出精致的诱人锁骨。',
      ]);
      await era.printAndWait(
        '下半身是长裙，群腰在上衣里，整个人显得气质闲适。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 见 ',
        you.get_colored_name(),
        ' 打量自己，抬手捋了下耳边的头发。',
      ]);
      await ruby.say_and_wait('很奇怪吗？');
      era.printButton('「当然很可爱。」', 1);
      era.printButton('「有种清新俏丽的感觉。」', 2);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 引来了周围一些人的瞩目。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 有点受不了那种「如同看富佬包养未成年',
        ruby.teen_sex_title,
        '」的视线，好在 ',
        ruby.get_colored_name(),
        ' 拉着 ',
        you.get_colored_name(),
        ' 走进了车厢。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_station: (() => {
    const title = '小宝宝本铺';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('那么，这里是什么地方呢。');
      await ruby.say_and_wait('是的，是小宝宝本铺。');
      await era.printAndWait('周围有肚子略胀的女性，抱着小孩走路的夫妇等。');
      await era.printAndWait(['都是比你们更适合来这家店的客人。']);
      await era.printAndWait([
        '在这里，',
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 的存在明显是异质的。',
      ]);
      await ruby.say_and_wait('通过书本能获取的知识是有限的。');
      await ruby.say_and_wait('希望通过实地检查来加深知识。');
      await you.say_as_passer_by_and_wait('路人A', [
        '喂，那个难道不是 ',
        ruby.get_colored_name(),
        ' 吗？',
      ]);
      await you.say_as_passer_by_and_wait(
        '路人B',
        '真的假的……那个华丽一族为什么在这里？',
      );
      await you.say_as_passer_by_and_wait(
        '路人C',
        '旁边的是训练员吧，两个人去那家店的话，难道是这种关系？',
      );
      await era.printAndWait([
        '果然很显眼，不用说，',
        you.get_colored_name(),
        ' 和担当的身份已经暴露了。',
      ]);
      await ruby.say_and_wait('仅是普通地访问，果然不合时宜，请帮助我。');
      era.printButton('伸出手。', 1);
      await era.input();
      await era.printAndWait([
        '就这样，',
        ruby.get_colored_name(),
        ' 紧紧地抱住了那只手。',
      ]);
      await era.printAndWait('这样的话，待在这里也不会有不协调的感觉了。');
      await you.say_as_passer_by_and_wait(
        '路人A',
        '果然两个人已经是那种关系了……',
      );
      await you.say_as_passer_by_and_wait('路人B', [
        '真的吗？那么，难道 ',
        ruby.get_colored_name(),
        ' 的肚子已经！？',
      ]);
      await you.say_as_passer_by_and_wait('路人C', '那不是犯罪吗！');
      await era.printAndWait([
        '之后，',
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 在周围各种声音的环绕下，在母婴店逛了一段时间。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_shopping_together: (() => {
    const title = '一起去商店';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '商店的招牌都是放在屋顶上的，人们在其中进进出出，如同蜜蜂一般。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 牵着 ',
        ruby.get_colored_name(),
        ' 的手，走在喧嚣的街道上，思考着应该回学校还是去酒店。',
      ]);
      await era.printAndWait('自己得不出答案，那就看爱马的意思。');
      if (era.get('relation:85:0') > 150) {
        era.printButton('「要不要抱着或背着？」', 1);
        await era.input();
        await ruby.say_and_wait('……背我。');
        await era.printAndWait([you.get_colored_name(), ' 很乐意。']);
        await era.printAndWait([
          '尚未成年的，身材娇小的 ',
          ruby.get_colored_name(),
          '，很轻易就背起来了。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 趴在 ',
          you.get_colored_name(),
          ' 的背上，歪着脑袋看着 ',
          you.get_colored_name(),
          ' 的侧脸。',
        ]);
        await era.printAndWait('没有说话。');
        await era.printAndWait('甚至表情也没有变化。');
        await era.printAndWait('只是那双美丽的眼睛里，充满无限柔情。');
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 有点心动，但最后还是表示回学校。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  os_hot_spring_event: (() => {
    const title = '温泉旅行';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {boolean} has_ticket 是否抽到温泉旅行券
     * @param {number} ticket_date 抽到温泉旅行券的时间
     */
    const f = async (ruby, you, callname, has_ticket, ticket_date) => {
      await era.printAndWait([
        '这是 ',
        you.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 赢下来种种比赛的某一天——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 打开笔记本确认事项时，一张有点眼熟的东西飘到了地上。',
      ]);
      await era.printAndWait('捡起一看，是温泉旅行券。');
      if (has_ticket) {
        await ruby.say_and_wait([
          '是',
          ticket_date < 2
            ? '刚迈入资深年'
            : ticket_date < 5
              ? '去年春天'
              : ticket_date < 9
                ? '去年夏天'
                : ticket_date < 11
                  ? '去年秋天'
                  : '上个月',
          '，去商店街参加的那次抽奖抽到的吧。',
        ]);
        await era.printAndWait([
          '那时候，',
          you.get_colored_name(),
          ' 说「要等自己成为像 ',
          ruby.get_colored_name(),
          ' 一样出色的存在，再一起用这张券。」',
        ]);
        await ruby.say_and_wait(
          '现在，既然它再次出现在了我们面前，也就是说是时候了。',
        );
        await ruby.say_and_wait('正好最近没有什么大型比赛，不如我们去旅行吧？');
        era.printButton('「我还没完成约定哦。」', 1);
        await era.input();
      } else {
        await ruby.say_and_wait([callname, ' 还保存有温泉旅行券吗？']);
        await you.say_and_wait('嘛……机缘巧合。');
        await you.say_and_wait('正好最近没有什么大型比赛，不如我们去旅行吧？');
      }
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('失陪一下。');
      await era.printAndWait([ruby.get_colored_name(), ' 转身掏出手机。']);
      await ruby.say_and_wait('对，是我。请现在立刻派辆车到学校来。');
      era.printButton(`「露比？？？」`, 1);
      await era.input();
      await ruby.say_and_wait('那么——跟我来吧。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 带 ',
        you.get_colored_name(),
        ' 来到了能用得上那张温泉旅行券的旅馆。',
      ]);
      await ruby.say_and_wait('最近您一直在工作，没有休息。我全都看在眼里。');
      await ruby.say_and_wait('希望你能借此机会转换心情，养精蓄锐。');
      await ruby.say_and_wait('那么我就先失陪了。');
      era.printButton('对于一直在努力的你来说，休息是很有必要的。', 1);
      era.printButton('我觉得你更需要休息。', 2);
      await era.input();
      await ruby.say_and_wait('呼……');
      await ruby.say_and_wait('这次就听你的吧。');
      era.drawLine({ content: '泡完温泉' });
      era.printButton('话说你为什么同意留下来了呢？', 1);
      await era.input();
      await ruby.say_and_wait('一时兴起。');
      era.printButton('真的假的', 1);
      await era.input();
      await ruby.say_and_wait('我凭一时的兴致做出的决定，有这么不可思议吗？');
      era.printButton('是的。', 1);
      await era.input();
      await ruby.say_and_wait('我当时并没有想太多。但是，我听到您的话后……');
      await ruby.say_and_wait(
        '我觉得还是留下来陪您比较好，就答应了……仅此而已。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 没有说下去，也不打算说下去。',
      ]);
      await era.printAndWait([
        '这对 ',
        you.get_colored_name(),
        ' 来说已经很足够了。',
      ]);
      era.printButton(`「谢谢你，露比。」`, 1);
      await era.input();
      await ruby.say_and_wait('我觉得我并没有做什么值得您感谢的事情。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 决定在 ',
        you.get_colored_name(),
        ' 的房间感受和 ',
        ruby.get_colored_name(),
        ' 不可替代的羁绊……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ...require('#/i18n/zh-CN/kojo/108500-Daiichi-Ruby/edu-85-be-ntr'),
};
