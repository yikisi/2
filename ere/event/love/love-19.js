const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const AgLifeMarks = require('#/data/event/life-event-marks/life-event-marks-19');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,EventObject):Promise<boolean|void>>} */
const handlers = {};

[
  require('#/event/love/love-events-19/relation-registry'),
  require('#/event/love/love-events-19/registry'),
].forEach((f) => f(handlers));

handlers[89] = async (digital, me, callname) => {
  const life_marks = new AgLifeMarks();
  const child = digital.sex_code - 1 ? '女儿' : '儿子';
  const parent = digital.sex_code === 1 ? '母亲' : '父亲';
  if (life_marks.again_89) {
    await print_event_name('终究是，梦幻的泡影', digital);
    await me.say_and_wait(['周末了，要不在忙碌的过程中看一下', child, '吧？']);
    await me.say_and_wait([
      '正来到了学生宿舍门口，想着打个电话给',
      child,
      '的，然后……',
    ]);
    await digital.say_and_wait(['诶？', callname, ' 你在这里干什么？']);
    era.printButton(`说什么呢，我在等${child}啊。`, 1);
    await era.input();
    await era.printAndWait([
      '听到这番话的 ',
      digital.get_colored_name(),
      '，不知为何，却低下了头。',
    ]);
    await digital.say_and_wait(
      ['……是，是时候了吗……要，再次告诉 ', callname, ' 真相吗……'],
      true,
    );
    await digital.print_and_wait('我该怎么办……');
    era.printButton('告诉', 1);
    era.printButton('不告诉', 2);
    const ret = await era.input();
    if (ret === 1) {
      await digital.say_and_wait(
        '我……我本以为，再次的告知仅会带来……泪水——',
        true,
      );
      await digital.say_and_wait(
        ['不过，这种感觉……被 ', callname, ' 拥抱求婚的感觉……真的是太好了……'],
        true,
      );
      await sys_love_uma_in_event(19);
    } else {
      await digital.say_and_wait([
        '算了，就这样吧，和 ',
        callname,
        ' 与',
        child,
        '的每一天，都十分快乐',
      ]);
      await digital.say_and_wait(
        '我希望，这样的每一天，都持续下去，请原谅我。',
        true,
      );
      era.set('cflag:19:爱慕暂拒', 89);
      await punish_rejecting_love(19);
    }
  } else {
    life_marks.again_89 = 1;
    const m_call_d = sys_get_colored_callname(0, 19);
    await print_event_name('同居！果然还是会这样的吧？', digital);
    await era.printAndWait(
      '如果说，每天结束繁忙的工作，回到家里，闻到了从厨房传来的香味，还能听到有人在哼歌，那一定是偶然被大卡车送走又被消除记忆了。',
    );
    await era.printAndWait([
      '所以说，到底是什么时候开始，',
      m_call_d,
      ' 拿到了钥匙，来到了 ',
      me.get_colored_name(),
      ' 的家呢？',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 还很清晰地记得，是在一个夜晚，在一个海滩上，',
      m_call_d,
      ' 向 ',
      me.get_colored_name(),
      ' 表白，然后就是，顺理成章地，',
      m_call_d,
      ' 成为了 ',
      me.get_colored_name(),
      ' 的女朋友。',
    ]);
    await era.printAndWait('事实上……交往上，和平日上的行为也没啥区别……');
    await era.printAndWait('还是一样地，一起推活，一起圣地巡礼。');
    await era.printAndWait('接着呢？');
    await digital.say_and_wait('不行，这样不就没有区别了吗？！');
    await digital.say_and_wait('是我之前的猜想是正确的吗……不对！');
    await era.printAndWait([
      '嗯……然后为了做出改变，听说 ',
      m_call_d,
      ' 是参照了某些同人志，然后从 ',
      me.get_colored_name(),
      ' 的手上借来了钥匙。',
    ]);
    await era.printAndWait(
      '虽然是借走了，但在最开始几天还没有任何事情发生，想着，也许只是一时来兴吧，也把这件事放到了一边。',
    );
    await era.printAndWait([
      '所以当某天，',
      me.get_colored_name(),
      ' 拖着疲倦的身体，好不容易拿出钥匙插进锁孔，意识游荡时听到了除金属摩擦的声音时，还是有点被意外的。',
    ]);
    await era.printAndWait([
      '后来啊，',
      m_call_d,
      ' 来 ',
      me.get_colored_name(),
      ' 家也越来越频繁了。',
    ]);
    await era.printAndWait('原本家里单调的气息也逐渐混杂了另样的色彩。');
    await era.printAndWait([
      '不过，最令 ',
      me.get_colored_name(),
      ' 感到有些许奇怪并想笑的是，最开始占领 ',
      me.get_colored_name(),
      ' 房间的是……',
    ]);
    await era.printAndWait(['各种', digital.get_uma_sex_title(), '周边。']);
    await era.printAndWait([
      '比如说 ',
      get_chara_talk(32).get_colored_name(),
      ' 红茶杯、',
      get_chara_talk(25).get_colored_name(),
      ' 咖啡杯、',
      get_chara_talk(13).get_colored_name(),
      ' 鼠标垫、',
      get_chara_talk(87).get_colored_name(),
      ' 玩偶……',
    ]);
    await era.printAndWait([
      '其中最让 ',
      me.get_colored_name(),
      ' 觉得神奇的是，甚至还有tomachop的玩偶，就是 ',
      get_chara_talk(99).get_colored_name(),
      ' 所在的苫小牧的那个吉祥物！',
    ]);
    await era.printAndWait([
      '还有一天正当在家里看到 ',
      m_call_d,
      ' 搬着一个烘干机想要放到房间时，',
      me.get_colored_name(),
      ' 觉得这样下去可不行了！得出重拳！',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 虽然有着很多世上认为最为珍贵的 ',
      m_call_d,
      ' 周边，比如一些胜利的旗帜，原型的玩偶等……但是基本不是在训练室就是在被官方保管。',
    ]);
    await era.printAndWait([
      '走走走！去超市，把 ',
      m_call_d,
      ' 的所有周边都买几份！',
    ]);
    await era.printAndWait('叫店员直接运到家门口！');
    await era.printAndWait([
      '满意地重新鉴赏一下 ',
      m_call_d,
      ' 在各项赛事的英姿。再把玩偶沙发放个，床上放个，电脑上放个，电视上放个……',
    ]);
    await era.printAndWait([
      '然后重新把自己之前一直珍藏的 ',
      m_call_d,
      ' 作品从隐秘的小角落摆到沙发旁……',
    ]);
    await era.printAndWait([
      '哈哈哈哈，完成了！现在就想看到 ',
      m_call_d,
      ' 的表情吖！',
    ]);
    await era.printAndWait('然而结果是——');
    await era.printAndWait([
      '这对 ',
      m_call_d,
      ' 的冲击力太大，',
      me.get_colored_name(),
      ' 只能眼睁睁地看着',
      digital.sex,
      '双脸越来越红最后沉闷一声倒在地上。',
    ]);
    await era.printAndWait(
      '除了这些相对有趣的故事外，平日的生活事实上更加平淡。',
    );
    await era.printAndWait(
      '平淡无奇，就像打开电饭煲后，看到的升腾起白雾的米饭。',
    );
    await era.printAndWait([
      '所以当 ',
      me.get_colored_name(),
      ' 和 ',
      m_call_d,
      ' 的孩子出生时，除了喜悦外，也会猛然发觉，原来已经这么久了啊。',
    ]);
    await era.printAndWait([
      '发现 ',
      digital.sex_code === 1 ? '自己' : m_call_d,
      ' 怀孕的记忆，也只是模糊而不可察，带着一丝暖流。',
    ]);
    await era.printAndWait([
      '最一开始',
      child,
      '就很让人省心，看到 ',
      m_call_d,
      '，看到各种',
      digital.get_uma_sex_title(),
      '周边就会安定，只是偶尔会模仿 ',
      m_call_d,
      ' 发出奇怪的声音。',
    ]);
    await era.printAndWait([
      child,
      '很像 ',
      m_call_d,
      '，',
      digital.sex,
      '从小就很喜欢',
      digital.get_uma_sex_title(),
      '，特别是喜欢坐在电视前看 ',
      m_call_d,
      ' 的Live。',
    ]);
    await era.printAndWait([
      '倒不如说是 ',
      me.get_colored_name(),
      ' 作为',
      parent,
      '所以经常播放 ',
      m_call_d,
      ' 的录像？',
    ]);
    await era.printAndWait([
      '而每次看到 ',
      me.get_colored_name(),
      ' 和',
      child,
      '在看录像时，',
      m_call_d,
      ' 最开始总是化身蒸汽机躲进房间里加湿，但到后来也会靠着 ',
      me.get_colored_name(),
      ' 抱着',
      child,
      '一起看了。',
    ]);
    await era.printAndWait([
      '不管怎样，',
      child,
      '在悉心照料下，健康地成长了。',
    ]);
    await era.printAndWait([
      digital.get_uma_sex_title(),
      '是成长得很快的，转眼间，',
      digital.sex,
      '就已经要进特雷森校园了。',
    ]);
    await era.printAndWait([
      '跟 ',
      m_call_d,
      ' 商量，',
      m_call_d,
      ' 觉得照',
      child,
      '那个喜欢',
      digital.get_uma_sex_title(),
      '的样，让',
      digital.sex,
      '自己去参加开幕式感觉会大事不妙。',
    ]);
    await era.printAndWait([
      '不过还是决定，这件事还是',
      digital.sex,
      '自己去体会比较好。',
    ]);
    await era.printAndWait([
      '但是啊，送别前一晚，',
      m_call_d,
      ' 再次整理行李，企图再塞进更多的物资。',
    ]);
    await era.printAndWait([
      '明明家里离特雷森这么近，明明 ',
      me.get_colored_name(),
      ' 还是特雷森的训练员，明明',
      child,
      '随时都可以见到 ',
      me.get_couple_title(),
      '，但 ',
      me.get_colored_name(),
      ' 也在苦恼着是不是还缺必备物品。',
    ]);
    await era.printAndWait([m_call_d, ' 也笑了，说着这难道还是永别不成。']);
    await era.printAndWait([
      child,
      '倒是哭得很大声，让 ',
      me.get_couple_title(),
      ' 安慰了很久。',
    ]);
    await era.printAndWait([
      '不过，明天终会成为今天，现在是',
      digital.sex,
      '要上学的时候了。',
    ]);
    await era.printAndWait(
      '夜晚的雾气还未散去，远边的天际也只是微红，甚至连路灯都还亮着。',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 跟 ',
      m_call_d,
      ' 拿着行李，跟',
      child,
      '来到楼下。',
    ]);
    await era.printAndWait([
      '虽然',
      child,
      '坚决要自己拿下去，但 ',
      me.get_colored_name(),
      ' 和 ',
      m_call_d,
      ' 却不肯松手。',
    ]);
    await era.printAndWait([
      '纠缠不过 ',
      me.get_couple_title(),
      '，',
      child,
      '也只能作罢。',
    ]);
    await era.printAndWait([
      '面前就是',
      digital.get_uma_sex_title(),
      '专用道了，沿着这条路就可以很快到达特雷森，身为',
      digital.get_uma_sex_title(),
      '，甚至不用叫出租车。',
    ]);
    await era.printAndWait([
      '把行李放下，虽然没多少，但对于 ',
      me.get_colored_name(),
      ' 来说还是挺累的，相比 ',
      m_call_d,
      '，就拿得多得多。',
    ]);
    await era.printAndWait([
      '诶呀，昨晚没睡好，还一大早起来搬东西，',
      me.get_colored_name(),
      ' 有点迷糊。',
    ]);
    await era.printAndWait([
      m_call_d,
      ' 关心地用身体支撑了一下 ',
      me.get_colored_name(),
      '，不过，看着',
      digital.sex,
      '的眼睛，',
      me.get_colored_name(),
      ' 知道',
      digital.sex,
      '也没睡好。',
    ]);
    await era.printAndWait([
      '怎么了？',
      me.get_colored_name(),
      ' 环视了一下，',
      child,
      '呢？',
    ]);
    await era.printAndWait(['哦哦哦！就在 ', m_call_d, ' 旁边呢。']);
    await era.printAndWait([
      child,
      '紧紧拥抱了 ',
      m_call_d,
      '，然后也紧紧拥抱了 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '很轻柔，得紧紧拥抱才能感受到',
      digital.sex,
      '的存在，还在成长期的',
      digital.sex,
      '也没多高，就像和 ',
      m_call_d,
      ' 一样。',
    ]);
    await say_by_passer_by_and_wait(child, '那么，我要走啦！再见！');
    await era.printAndWait(['挥着手，', child, '跑起来了。']);
    await era.printAndWait('诶！等等，行李还没拿呢！');
    await era.printAndWait([
      '焦急地想要 ',
      m_call_d,
      ' 追上去，结果却发现 ',
      m_call_d,
      ' 只是看着',
      child,
      '远处的方向。',
    ]);
    await era.printAndWait('等一下啊！怎么了？');
    await digital.say_and_wait([
      callname,
      ' 啊，既然',
      child,
      '就在特雷森，那直接给',
      digital.sex,
      '送过去不也挺方便吗？',
    ]);
    await me.say_and_wait([
      '不是，',
      m_call_d,
      '，',
      child,
      digital.sex,
      '！',
      digital.sex,
      '……',
    ]);
    await era.printAndWait(
      '就像是经常路过的路口，经常光顾的店铺，经常玩的游戏，突然说要封路了，要倒闭了，要关服了……',
    );
    await era.printAndWait([
      '明明以为会万年不变的，却突然消失的那种荒诞感，此刻却突然充满了 ',
      me.get_colored_name(),
      ' 的内心。',
    ]);
    await era.printAndWait(['再定睛一看，', child, '早已没了身影。']);
    await me.say_and_wait([m_call_d, '！这，这是怎么回事！这……这为什么……']);
    await digital.say_and_wait(
      '听说，是一个幻想，是一个疾病，或者是一个灵异现象……',
    );
    await digital.say_and_wait([
      '大众普遍认为，这是一个精神疾病……传播方式不明，范围仅在',
      digital.get_uma_sex_title(),
      '及所接触人群……',
    ]);
    await era.printAndWait('那……那是为什么……创造出来只是为了分离吗？');
    await era.printAndWait([
      '正当恍惚间，',
      me.get_colored_name(),
      ' 发现，',
      m_call_d,
      ' 此刻却看着特雷森的方向，再也不说一句话。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 猛然意识到，',
      m_call_d,
      ' 和 ',
      me.get_colored_name(),
      ' 的感受是一样的。',
    ]);
    await era.printAndWait([
      '平日作为训练员，一直在支撑着 ',
      m_call_d,
      ' 的 ',
      me.get_colored_name(),
      '，在这一次，',
      digital.sex,
      '在支撑着 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      digital.sex,
      '尽量以一种平和的语气，来冲淡 ',
      me.get_colored_name(),
      ' 的伤感。从背后抱着 ',
      m_call_d,
      '，才发现，',
      m_call_d,
      ' 在发抖。',
    ]);
    await era.printAndWait('本来就娇小的身体，显得更脆弱了。');
    await era.printAndWait('石头扔进了平静的湖面，掀起了巨浪。');
    await digital.say_and_wait('……呜呜呜……');
    await digital.say_and_wait('我……我早该知道的……');
    await digital.say_and_wait('事实上……我……数码碳……早就知道……');
    await digital.say_and_wait('当……意识到一段时间的记忆是那么模糊不清……');
    await digital.say_and_wait('当……注意到家里的育儿物资从没变少……');
    await digital.say_and_wait('当……翻到以前绘制的同人志……');
    await digital.say_and_wait('我那时候啊……就已经明白……');
    await digital.say_and_wait([
      '是我爱 ',
      callname,
      ' 太深……却又不敢……再继续深入……',
    ]);
    await digital.say_and_wait(['并且……', callname, ' 你也受到了影响……']);
    await digital.say_and_wait(['所以啊……', child, '诞生了……']);
    await digital.say_and_wait(['这就是', digital.sex, '的全部……']);
    await era.printAndWait([
      '在 ',
      m_call_d,
      ' 带着哽咽的话中，',
      me.get_colored_name(),
      ' 终于明白了，',
      child,
      '就是 ',
      m_call_d,
      ' 愿望的产物。',
    ]);
    await digital.say_and_wait([
      '只要……只要我们把刚才的事情忘记……那么，我们还能再见到',
      child,
      '……',
    ]);
    await digital.say_and_wait([
      '如果……我们记住，那么',
      child,
      '……就会……真的消失不见……',
    ]);
    await digital.say_and_wait(
      '呵呵呵……事实上，这不就是选择要不要面对现实吗……这根本不就是所谓的精神疾病吗……',
    );
    era.printButton('记住', 1);
    era.printButton('遗忘', 2);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait('不对！');
      await me.say_and_wait([
        child,
        digital.sex,
        '并不是你的想象！',
        digital.sex,
        '是我们爱情的象征啊！',
      ]);
      await era.printAndWait([
        '正是在两人止步不前时，是',
        child,
        '拉起了 ',
        m_call_d,
        ' 和 ',
        me.get_colored_name(),
        ' 的手。',
      ]);
      await me.say_and_wait([
        child,
        digital.sex,
        '提醒了我，是时候了，我们该更近一步了！',
      ]);
      await era.printAndWait([
        '转过 ',
        m_call_d,
        ' 的身子，',
        m_call_d,
        ' 本来已经逐渐停止流泪的眼睛再次湿润。',
      ]);
      await digital.say_and_wait('你的意思是说？');
      await me.say_and_wait([m_call_d, '，我们结婚吧。']);
      await digital.say_and_wait('哈哈哈……这样看来，担心这个的我是真的傻呢……');
      await era.printAndWait([
        m_call_d,
        ' 笑了，眼里的泪珠化作珍珠，是 ',
        me.get_colored_name(),
        ' 最为珍惜的事物。',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 吻了上去。']);
      await era.printAndWait('咸的。');
      await era.printAndWait('想必是带有兴奋的泪水');
      await era.printAndWait('苦的。');
      await era.printAndWait('想必是带有委屈的泪水。');
      await era.printAndWait('……甜的。');
      await era.printAndWait('想必是……不再是泪水。');
      await era.printAndWait('舌头交融，身体相贴，双手交织。');
      await era.printAndWait(['再也没人能分开 ', me.get_couple_title(), '。']);
      await sys_love_uma_in_event(19);
    } else {
      await era.printAndWait(
        '一切的事情就像是一场噩梦，但事实上什么都没有发生。',
      );
      await era.printAndWait([
        me.get_couple_title(),
        ' 的',
        child,
        '一切正常地入学了特雷森，',
        me.get_colored_name(),
        ' 作为',
        parent,
        '自然也成为了',
        child,
        '的训练员。',
      ]);
      await era.printAndWait([
        m_call_d,
        ' 作为',
        digital.sex_code === 1 ? '父亲' : '母亲',
        '，也经常和',
        child,
        '一并训练。',
      ]);
      await era.printAndWait(
        '一大一小（虽然大的也挺小）一并训练，真是一个珍奇的画面啊。',
      );
      await era.printAndWait([
        '为了',
        child,
        '的成长着想，',
        me.get_colored_name(),
        ' 是想让',
        digital.sex,
        '在特雷森留宿的。',
      ]);
      await era.printAndWait([
        '但是',
        digital.sex,
        '似乎还是比较挂念父母，纠缠不过，还是暂时让',
        digital.sex,
        '回家住好了。',
      ]);
      await era.printAndWait([
        '一切都很正常，除了',
        child,
        '好像也有点像初期的 ',
        m_call_d,
        ' 那样经常尊死，嗯……虽然 ',
        m_call_d,
        ' 现在也差不多。',
      ]);
      await punish_rejecting_love(19);
      era.set('cflag:19:爱慕暂拒', 89);
    }
  }
};

handlers[99] = async (digital, me, callname) => {
  await print_event_name('信', digital);
  const child = digital.sex_code - 1 ? '女儿' : '儿子',
    m_call_d = sys_get_colored_callname(0, 19);
  await me.say_as_unknown_and_wait('听说数码老师的新刊要发售了噢');
  await me.say_as_unknown_and_wait(
    '诶？真的吗？隔了这么久，终于能看到新刊了吗？',
  );
  await me.say_as_unknown_and_wait('就在这下个月在东京的展子呢！');
  era.println();
  await era.printAndWait('所以说……到底是谁开始造的谣！');
  await era.printAndWait([
    '没过几天就在网上发酵，现在所有数码老师的粉丝都以为 ',
    m_call_d,
    ' 下个月会出新刊。',
  ]);
  await era.printAndWait([
    '而 ',
    m_call_d,
    ' 看到这些推文的时候，第一反应是……愧疚。',
  ]);
  await digital.say_and_wait(
    '仔细一想……我好像很久没出过新刊了……啊啊啊，真的是万分抱歉。',
  );
  await era.printAndWait('对着屏幕低下了头，为在屏幕外的粉丝道歉。');
  await era.printAndWait([
    '接着，',
    m_call_d,
    ' 转过身来，拉着 ',
    me.get_colored_name(),
    ' 的手，眼里冒着泪光，做出一副要哭出来的表情。',
  ]);
  await era.printAndWait(['诶，又是这样，', me.get_colored_name(), ' 心想。']);
  await era.printAndWait([
    '这代表着',
    digital.sex,
    '要开始闭关了，接下来的家务活什么的都由 ',
    me.get_colored_name(),
    ' 完成，做饭也是。',
  ]);
  await era.printAndWait('倒也不是很累，就是，在这些日子里，会缺乏一些……');
  await era.printAndWait([
    '来自 ',
    m_call_d,
    ' 的能量，不能吸食 ',
    m_call_d,
    ' 了，不能摸头发了，不能搓耳朵了，不能啃尾巴了……',
  ]);
  await digital.say_and_wait('拜托了！');
  await me.say_and_wait('我也不是不认识你。');
  await era.printAndWait('结果，还是答应了，这么说来，有过没答应过的吗？');
  era.drawLine();
  await era.printAndWait([
    '在打扫过程中，肩膀与背部的酸爽提醒 ',
    me.get_colored_name(),
    '，该锻炼了。',
  ]);
  await era.printAndWait(
    '扫地，拖地，本来想着能买一个洗地机器人，但是又意识到，展柜可清理不到。',
  );
  await era.printAndWait([
    '是的，',
    me.get_colored_name(),
    ' 家最难清理的地方，是展柜，很多的展柜，很多的周边。',
  ]);
  await era.printAndWait('诶，拿下鸡毛掸子简单清理下就好。');
  await era.printAndWait([
    '突然，白色的相片吸引了 ',
    me.get_colored_name(),
    '。',
  ]);
  await era.printAndWait([
    '让 ',
    me.get_colored_name(),
    ' 泛起温情的相片是 ',
    me.get_colored_name(),
    ' 与 ',
    m_call_d,
    ' 的结婚照。',
  ]);
  await era.printAndWait([
    '纯白的',
    digital.sex_code - 1 ? '婚纱' : '西装',
    '装饰起粉色的',
    digital.get_uma_sex_title(),
    '，头顶上的红色蝴蝶结依然展示它的存在感，精致的颈部，让人引起呵护之心的手，还有，那含泪的灰蓝色双眼。',
  ]);
  await era.printAndWait([
    '明明感觉并没有过去多久，回想起来穿着',
    digital.sex_code - 1 ? '婚纱' : '西装',
    '的 ',
    m_call_d,
    ' 还在眼前，却又感觉度过了几年。',
  ]);
  await era.printAndWait([
    '不管怎样，看着这幅结婚照，让 ',
    me.get_colored_name(),
    ' 得到了不少能量补充。',
  ]);
  await era.printAndWait('要不就打扫一些携带着重要回忆的东西就好了。');
  await era.printAndWait([
    '推门走进收藏室，里面摆着几个巨大的全方位透明柜子，摆满了各种',
    digital.get_uma_sex_title(),
    '的各种周边。',
  ]);
  await era.printAndWait([
    '这间房间本来是客房的，后面因为 ',
    m_call_d,
    ' 收集的东西多了起来，单独客厅里的展柜已经没位置了，还是单独将一个房间空出来放这些周边了。',
  ]);
  await era.printAndWait([
    '顺带一提，',
    me.get_colored_name(),
    ' 之前所收集的 ',
    m_call_d,
    ' 周边，在最里面的柜子里。',
  ]);
  await era.printAndWait([
    '诶，之前跟',
    digital.sex,
    '较劲不过来，说着「啊哇哇哇！不行不行，果然还是太羞耻了！」，还是放到了这里。',
  ]);
  await era.printAndWait([
    '来到摆着 ',
    m_call_d,
    ' 周边的柜子前，各种形态的 ',
    m_call_d,
    '，看着都能让 ',
    me.get_colored_name(),
    ' 会想到以前的场景。',
  ]);
  await era.printAndWait([
    '高举着应援棒流着口水的 ',
    m_call_d,
    '，想必也没其他',
    digital.get_uma_sex_title(),
    '能有这种周边吧。',
  ]);
  await era.printAndWait([
    '看着看着，逐渐走到了柜子的尽头，然后，',
    me.get_colored_name(),
    ' 看到了——一堆行李。',
  ]);
  await era.printAndWait('这是……');
  await era.printAndWait([
    '想起来了，是',
    child,
    '的行李，',
    digital.sex,
    '的行李。',
  ]);
  era.drawLine();
  await digital.print_and_wait(
    '诶呀诶呀，终于，完成得差不多了，接下来就只剩下……哦哦哦……到吃饭的时候了啊。',
  );
  await digital.print_and_wait('今天的饭是什么呢～');
  await digital.print_and_wait('打开门看到的居然是摆满了一桌的菜？！');
  await digital.print_and_wait('今天是什么特别日子吗？数码我忙忘了吗？！');
  await digital.print_and_wait('不妙不妙，数码啊数码，你怎么能把……诶？');
  await me.say_and_wait([m_call_d, '，看这表情，是以为错过了什么吗？']);
  await digital.say_and_wait(
    '诶诶诶？是我的，我的错，忙着忙着忙忘掉了啊！数码我就应该升天去见到……',
  );
  await me.say_and_wait('停停停停，稍等，是因为我找到了充满了各种回忆的这个——');
  await digital.print_and_wait(['看到 ', callname, ' 拿起了一个……信封？']);
  await digital.say_and_wait(
    '在这年代，还能看到信真的是很稀奇啊，难道说是那种什么写给未来的信，还或者是什么幽灵的信……',
  );
  await me.say_and_wait('猜到了呢，不过或许不是你想的那样。');
  await digital.print_and_wait([
    '接过 ',
    callname,
    ' 递过来的信，还盖着印泥呢，上面的纹路正是我之前买的特雷森周边，看看落款是……',
  ]);
  await digital.print_and_wait([
    '哦哦哦哦！这还真是吓人啊，没想到，居然是',
    child,
    '的信啊。',
  ]);
  await digital.say_and_wait(
    '难道这是什么从那一边寄过来的信吗？！居然是真实存在的吗？！',
  );
  await digital.say_and_wait(
    '打开了会不会像什么那种恐怖游戏什么的，恶灵附体什么的！',
  );
  await me.say_and_wait('诶，这么说来，要不就打开试试？');
  await digital.say_and_wait(
    '不不不，总感觉要先开个光，把之前万圣节决胜服的那个符咒拿出来先……',
  );
  await digital.print_and_wait(
    '事实上，拿着信封，一直在说什么车轱辘话，手却像是脱力了般，连一封轻飘飘的信都拿不稳。',
  );
  await me.say_and_wait('……');
  await digital.print_and_wait([
    '看着 ',
    callname,
    '，',
    me.sex,
    '……',
    me.sex,
    '应该也是这样吧。',
  ]);
  await digital.print_and_wait([
    '靠着 ',
    callname,
    ' 坐下了，一个椅子挤一下。',
  ]);
  await digital.print_and_wait([
    me.sex,
    '伸过了手，抱紧了我……都能感受到',
    me.sex,
    '手掌心的冷汗。',
  ]);
  await digital.print_and_wait('打开吧。');
  await digital.print_and_wait('沙沙……是里面的纸摩擦的声音。');
  await digital.print_and_wait('揭开印泥，翻开信封，抽出里面折叠的信纸……');
  await digital.print_and_wait('翻开吧。');
  await digital.print_and_wait('翻开信纸，里面写着——');
  era.println();
  era.setAlign('center');
  await era.printAndWait('爸爸妈妈：');
  era.setAlign('center');
  await era.printAndWait('谢谢你们。');
  era.setAlign('right');
  await era.printAndWait(['——你们的', child]);
  era.setAlign('left');
  era.println();
  await digital.say_and_wait('唔哈，什么嘛，果然啊，当然是写着这些的啊！');
  await me.say_and_wait('这不当然嘛！');
  await digital.say_and_wait(
    '唔噢噢噢，来来来，吃饭吧吃饭吧，好好地休息一下！',
  );
  await digital.print_and_wait([
    '热腾腾的美味佳肴，升起的薄雾，温暖的 ',
    callname,
    '，递到嘴里的嫩滑的汉堡肉。',
  ]);
  await digital.print_and_wait([
    '看着 ',
    callname,
    ' 夹着菜递过来时的笑容，当然是要好好享用。',
  ]);
  await digital.print_and_wait([
    '拍拍 ',
    callname,
    ' 的大腿，嗯，最近有在做家务活健身啊……',
  ]);
  await me.say_and_wait([m_call_d, '？现在？在这里？不打算吃完饭吗？']);
  await digital.say_and_wait(
    '无论是吃完前还是吃完后的结果都一样吧？不一样都是吃吗？咕嘿嘿……吸溜——',
  );
  await digital.print_and_wait('哇，感觉自己发出了很不妙的声音。');
  await digital.say_and_wait(
    '唔噢噢噢哦，对对对，就是现在，都一周了，我都忍到现在了！呜呜呜，你知道这一周我是怎么过来的吗！',
  );
  await digital.say_and_wait(
    '明明，明明数码我都画了一周同人志了，按照惯例，画完后都不是要庆祝一下吗？！',
  );
  await me.say_and_wait([
    '不不不，这是你的问题吧！还有，',
    m_call_d,
    ' 你画完了？',
  ]);
  await digital.say_and_wait(
    '……还，还有一些，但真就还有一些了！而且这重要吗？不应该是我更重要吗？',
  );
  await me.say_and_wait(
    '啊啊啊，你这一周不也把我冷落了！现在还想开吃是吧！待会还是我整理！',
  );
  await digital.print_and_wait('总……总感觉有些抱歉……不过……');
  await digital.say_and_wait('非常抱歉！麻烦你待会整理了！');
  await sys_love_uma_in_event(19);
  await quick_into_sex(19);
};

/**
 * 爱丽数码 - 爱慕
 *
 * @author 片手虾好评发售中！
 */
module.exports = async (hook, _, event_object) => {
  if (handlers[event_object.arg]) {
    return await handlers[event_object.arg](
      get_chara_talk(19),
      get_chara_talk(0),
      sys_get_callname(19, 0),
      event_object,
    );
  }
};
