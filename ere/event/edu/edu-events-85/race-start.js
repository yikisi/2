const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,RaceStartParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:育成回合计时') >= 48) {
      return true;
    }
    extra_flag.relation_change = 0;
    extra_flag.love_change = 0;
    await print_event_name('出道战前', ruby);
    await ruby.say_and_wait('我们去整备室吧。');
    era.drawLine();
    await say_by_passer_by('议员A', [
      '让我们为 ',
      ruby.get_colored_name(),
      ' 华丽的初次比赛，鼓掌！！',
    ]);
    await era.printAndWait('（啪啪啪……！）');
    era.printButton('（……诶，谁啊这是？）', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 在大脑中检索了片刻，突然造访的中年男子的面容，和一位最近突然起势的政治家对上了。',
    ]);
    await say_by_passer_by(
      '议员A',
      '呀，我很荣幸。能见证那个『华丽一族』的出道。',
    );
    await ruby.say_and_wait('感谢您的祝贺。');
    await era.printAndWait([
      '虽然 ',
      ruby.get_colored_name(),
      ' 从容地应对着议员模样的人，但这是重要的出道战前，',
      me.get_colored_name(),
      ' 本想让对方马上离开……',
    ]);
    await say_by_passer_by('议员A', '我还带了祝贺的鲜花，你要是喜欢就好了。');
    await ruby.say_and_wait('有心了，请慢走。');
    await say_by_passer_by('议员A', '诶，等——');
    await ruby.say_and_wait('不好意思，时间到了。得到您的声援，我很感动。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 挥手致意时偷看了 ',
      me.get_colored_name(),
      ' 一眼。',
    ]);
    await ruby.say_and_wait('下次请事先通知，务必要从正门来。');
    await ruby.say_and_wait(
      '如果您和我的训练员一样，有足以被我们一族评价的自负。',
    );
    await say_by_passer_by('议员A', '原来如此。失礼了，对不起打扰了。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 目送着男人离开，同时将身体转向了 ',
      me.get_colored_name(),
      '。',
    ]);
    await say_by_passer_by('记者A', [
      '红宝石',
      ruby.get_adult_sex_title(),
      '、训练员',
      me.get_adult_sex_title(),
      '，非常抱歉。我有向工作人员传达拒绝那位的访问。',
    ]);
    era.printButton('「因为没能拒绝所以也没办法。」', 1);
    era.printButton('「和传闻一样是位有压迫感的人物。」', 2);
    if ((await era.input()) === 2) {
      extra_flag.relation_change += 3;
    }
    await me.say_and_wait([m_call_r, ' 认识那个人吗？']);
    await ruby.say_and_wait('是的。');
    await ruby.say_and_wait('恐怕是想通过我来炫耀和一族的联系。');
    await me.say_and_wait('因为是最近才起势，所以迫切地想要后盾吧。', true);
    await era.printAndWait([
      me.get_colored_name(),
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
      me.get_colored_name(),
      ' 各个花束的来历。',
    ]);
    era.printButton('「我能拿点回去装饰训练员室吗？」', 1);
    era.printButton('「我是不是有点不解风情？」', 2);
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('请自便，拿不下的话就和管家说一声。');
    } else {
      await ruby.say_and_wait('你的贺礼，我已经切实收到了。');
      await ruby.say_and_wait('这副由你培养的身体的初次亮相，还请尽收眼底。');
      extra_flag.love_change++;
    }
    await era.printAndWait('时间到了，我去赛场。');
    await me.say_and_wait('果然这朵花才是最美的啊。', true);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 在地下通道时，也能感受到会场中热烈的气氛。',
    ]);
    await era.printAndWait('观众的声音里，许多都是在期待「华丽一族」的登场。');
    await era.printAndWait([
      '压力很大，但 ',
      ruby.get_colored_name(),
      ' 表现出的坦然，让 ',
      me.get_colored_name(),
      ' 反而产生了一丝不安。',
    ]);
    era.printButton(
      `「毕竟是 ${
        ruby.sex_code === 1 ? '少爷' : '大小姐'
      }，已经习惯这种场面了吧。」`,
      1,
    );
    era.printButton('「你不要紧吧？」', 2);
    if ((await era.input()) === 2) {
      extra_flag.relation_change += 3;
      extra_flag.love_change++;
      await ruby.say_and_wait('准备得很充分，不安的因素一点都没有。');
      era.printButton('「嗯嗯，一点都没有。」', 1);
      era.printButton('「那么，可以告诉我吗？」', 2);
      if ((await era.input()) === 2) {
        extra_flag.relation_change += 3;
        extra_flag.love_change++;
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('您真的是。');
        await ruby.say_and_wait('对于被期待的状况我很感激，但也感到负担。');
        await ruby.say_and_wait('不过即使这样，我也绝对不会被它们干扰。');
        await era.printAndWait([
          '如此断言的 ',
          ruby.get_colored_name(),
          '，',
          me.get_colored_name(),
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
      me.get_colored_name(),
      ' 能说出的只有这句话。',
    ]);
  };

  handlers[race_enum.sprt_sta] = async (ruby, me) => {
    if (era.get('cflag:85:育成回合计时') < 96) {
      return true;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('所谓奇迹', ruby);
    await miracle.say_and_wait('……——');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '。']);
    await miracle.say_and_wait('……');
    await ruby.say_and_wait([miracle.get_colored_name(), ' 同学。']);
    await miracle.say_and_wait('啊。');
    await miracle.say_and_wait([sys_get_colored_callname(93, 85), '？']);
    await ruby.say_and_wait('时间差不多了，我们该出发了。');
    await miracle.say_and_wait('啊，都这个点了。');
    await ruby.say_and_wait('……');
    await miracle.say_and_wait('不好意思，我没关系的。只是想了很多事情。');
    await miracle.say_and_wait('彼此都，来一场没有遗憾的较量吧。');
    await ruby.say_and_wait('……嗯。');
    era.drawLine({ content: '选手通道内' });
    await miracle.say_and_wait('……要赢。');
    await miracle.say_and_wait('比谁都要快……今天……把奔跑，献给大家……');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '。']);
    await miracle.say_and_wait([sys_get_colored_callname(93, 85), '……']);
    await miracle.say_and_wait('今天请多指教，当然不需要任何顾虑。');
    await miracle.say_and_wait('彼此都，毫不相让地竞争……');
    await ruby.say_and_wait('我会让你的希望全部落空。');
    await miracle.say_and_wait('！');
    await ruby.say_and_wait('我不会让现在的你，获得最快的光辉。');
    await ruby.say_and_wait('你曾告诉我的那个，就由我来让你见证。');
    await miracle.say_and_wait([sys_get_colored_callname(93, 85), '？']);
    await ruby.say_and_wait('……——');
    await ruby.say_and_wait('作为领头者，就让我带你去更高的地方吧。');
    await ruby.say_and_wait('『华丽一族』新的象征，请务必看仔细了。');
    era.drawLine({ content: '准备室内' });
    await ruby.say_and_wait('今天的比赛，一定要取胜。');
    await era.printAndWait([
      '在比赛前，',
      ruby.get_colored_name(),
      ' 突然如此对 ',
      me.get_colored_name(),
      ' 宣言。',
    ]);
    await era.printAndWait('友情还真是耀眼啊。');
  };

  handlers[race_enum.swan_sta] = async (ruby) => {
    if (era.get('cflag:85:育成回合计时') < 96) {
      return true;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('天鹅锦标前', ruby);
    await miracle.say_and_wait([
      sys_get_colored_callname(93, 85),
      '……你来了啊。',
    ]);
    await ruby.say_and_wait('因为您指名让我来，所以我考虑了一下。');
    await era.printAndWait([
      race_infos[race_enum.swan_sta].get_colored_name(),
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
};
