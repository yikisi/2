const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedLove {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 25(tachyon, me, callname) {
    await print_event_name(
      `「爱丽速子」？「${tachyon.get_uma_sex_title()}A」？`,
      tachyon,
    );
    const c_call_m = sys_get_callname(25, 0),
      c_call_t = sys_get_colored_callname(25, 32),
      coffee = get_chara_talk(25),
      coffee_check = era.get('cflag:25:招募状态') === recruit_flags.yes,
      love_25 = era.get('love:25'),
      t_call_c = sys_get_colored_callname(32, 25);
    await coffee.print_and_wait([
      tachyon.get_colored_name(),
      ' 的实验室，这个总是闹得学园内鸡飞狗跳的地方，这几天却格外的安静',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '搞什么嘛，居然把爱马一个人丢在学园里自己跑去出差',
    );
    await coffee.print_and_wait([
      tachyon.get_colored_name(),
      ' 在实验室里一边做着实验，一边喃喃抱怨着',
    ]);
    await coffee.print_and_wait(
      '抱怨的对象？当然是某只被派去出差因此得有一周不在的豚鼠了',
    );
    era.println();
    await tachyon.say_and_wait('便当还要我自己微波……这种怠慢的行为太过分了');
    era.println();
    await coffee.print_and_wait([
      tachyon.get_colored_name(),
      ' 不停，不停，不停地碎念着',
    ]);
    await coffee.print_and_wait('如果只是碎念的话，那说不定还能忍受……');
    era.println();
    await tachyon.say_and_wait(['你不觉得这已经算是虐待了吗？', t_call_c]);
    await coffee.say_and_wait('…………别把我扯进你们秀恩爱的行为中');
    era.println();
    await coffee.print_and_wait([
      '在',
      tachyon.sex,
      '丝毫没有任何想停下来的意思，甚至还打算把自己扯入话题时，与',
      tachyon.sex,
      '共享同间空教室的 ',
      coffee.get_colored_name(),
      ' 终于受不了了',
    ]);
    await coffee.say_and_wait([c_call_t, '……这些话你已经重复过三次了']);
    await tachyon.say_and_wait('才三次而已，也不是很多吧');
    await coffee.say_and_wait([c_call_m, ' 今天才出差第一天……']);
    await tachyon.say_and_wait('…………就算这样，三次也不算……');
    await coffee.say_and_wait([me.sex, '才离开学园不到半小时']);
    await tachyon.say_and_wait('………………');
    era.println();
    await coffee.print_and_wait([
      coffee.get_colored_name(),
      ' 叹了口气，眼前这名以往都是实验至上的同学，怎么在和训练员处好关系后就完全变了个样了',
      love_25 >= 50 ? '……虽然，也不是不能理解，毕竟是那个人啊' : '',
    ]);
    love_25 < 50 &&
      (await coffee.print_and_wait(
        '原本冷血无情、毫无伦理，草菅人命……好像说的有点过份了',
      ));
    await coffee.print_and_wait([
      '看见',
      tachyon.sex,
      '仍在喃喃抱怨着的模样，',
      coffee.get_colored_name(),
      ' 心中忽然涌上了股烦躁感，不由得脱口而出',
    ]);
    era.println();
    await coffee.say_and_wait([
      '再说……',
      c_call_m,
      ' 又不是 ',
      c_call_t,
      ' 的专属',
    ]);
    await tachyon.say_and_wait('…………你这是什么意思？');
    await coffee.say_and_wait([
      '我是什么意思，',
      c_call_t,
      ' 自己不是很清楚吗？',
      c_call_m,
      ' 虽然说了出差，但有说是去哪里，做什么所以才要出差的吗？',
    ]);
    await coffee.say_and_wait([
      '…………没有，从头到尾',
      me.sex,
      '只跟我说了自己要出差的事',
    ]);
    era.println();
    await coffee.print_and_wait([
      '那当然，毕竟说是出差，其实是被紧急找去处理 ',
      c_call_t,
      ' 前些日子弄出的实验外泄意外，这种事那个太过在乎',
      tachyon.get_uma_sex_title(),
      '情感的 ',
      callname,
      ' 当然不会和',
      tachyon.sex,
      '本人说了',
      coffee_check ? '……让人都有些妒忌了' : '',
    ]);
    await coffee.print_and_wait([coffee.get_colored_name(), ' 心中暗暗想到']);
    era.println();
    await coffee.say_and_wait([
      '那么……会不会也有一种可能，就是 ',
      c_call_m,
      ' 其实不是去出差，而是……在与某人私会呢？',
    ]);
    await tachyon.say_and_wait('…………');
    await coffee.say_and_wait([
      '毕竟……',
      c_call_t,
      ' 这么麻烦，如果我是 ',
      c_call_m,
      ' 应该也早就受够了吧',
    ]);
    await tachyon.say_and_wait([
      '……',
      me.sex,
      '说过，',
      me.sex,
      '是被我的跑法和可能性迷住的',
    ]);
    await coffee.say_and_wait('呵呵……');
    await tachyon.say_and_wait('有什么好笑的');
    era.println();
    await coffee.print_and_wait([
      coffee.get_colored_name(),
      ' 喝了口咖啡，享受着此时 ',
      tachyon.get_colored_name(),
      ' 的态度',
    ]);
    await coffee.print_and_wait([
      '让最近总在不停和',
      love_25 >= 50 ? `「自己的」${c_call_m} ` : '训练员',
      '喂狗粮的这个人露出这种不安的表情……糟糕，有点上瘾了',
    ]);
    era.println();
    await coffee.say_and_wait([
      '换句话说，不就是 ',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.get_uma_sex_title(),
      '本身，对',
      me.sex,
      '而言完全没有任何的吸引力吗？',
    ]);
    await tachyon.say_and_wait('…………');
    await coffee.say_and_wait([
      '跑法、可能性……',
      me.sex,
      '看着的，究竟是 ',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.get_uma_sex_title(),
      '，还是『拥有这些东西的某',
      tachyon.get_uma_sex_title(),
      'A』呢？',
    ]);
    await tachyon.say_and_wait('……不……');
    await coffee.say_and_wait([
      '反过来说，除了这些东西以外，',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.get_uma_sex_title(),
      '，对',
      me.sex,
      '到底有何吸引力？',
    ]);
    await tachyon.say_and_wait('…………');
    era.println();
    await coffee.print_and_wait([
      '原本的不爽感已经全数化为乌有，今天的愉悦度上升到Max值的 ',
      coffee.get_colored_name(),
      '，最后，如抛下原子弹一般，说出了最后一句话，然后便离开了教室',
    ]);
    await coffee.say_and_wait([
      '对了，',
      c_call_m,
      ' 的便当，味道确实很不错呢……',
      love_25 >= 50
        ? `以后也让 ${c_call_m} 帮我做怎么样？`
        : `有机会再请${me.sex}帮我做吧`,
    ]);
    era.drawLine();
    await tachyon.say_and_wait('…………');
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      ' 离开了，只留下 ',
      tachyon.get_colored_name(),
      ' 一人在实验室中',
    ]);
    await tachyon.print_and_wait([
      '脑袋灵活的',
      tachyon.sex,
      '早就知道，这些话不过是 ',
      coffee.get_colored_name(),
      ' 想煽动',
      tachyon.sex,
      '而故意说出的',
    ]);
    await tachyon.print_and_wait([
      '甚至',
      tachyon.sex,
      '也猜得到 ',
      coffee.get_colored_name(),
      ' 这么做的原因',
    ]);
    era.println();
    await tachyon.say_and_wait('秀恩爱……？');
    era.println();
    await tachyon.print_and_wait([
      '按 ',
      coffee.get_colored_name(),
      ' 所说，自己和 ',
      callname,
      ' 在',
      tachyon.sex,
      '眼中就是这样的吧',
    ]);
    await tachyon.print_and_wait('可是，这样很奇怪吧');
    await tachyon.print_and_wait(
      '秀恩爱，指的是情侣，或者有恋慕关系的两人，不顾他人眼光的表现两人的恩爱',
    );
    await tachyon.print_and_wait([
      '可是，自己和 ',
      callname,
      ' 又不是那种关系',
    ]);
    await tachyon.print_and_wait('情侣，或者是恋慕关系……');
    await tachyon.print_and_wait([
      '周围人眼中的自己和 ',
      callname,
      ' 原来是这样的吗？',
    ]);
    await tachyon.print_and_wait([callname, ' 和我……恋爱……']);
    era.println();
    await tachyon.say_and_wait('………！？');
    era.println();
    await tachyon.print_and_wait(
      '在这个念头浮上心间的瞬间，心脏彷佛被添加了强心剂一般，开始不断跳动，由于过度的血液供应，脸颊也变得发烫',
    );
    await tachyon.print_and_wait('这……这不好像在说……自己………');
    era.println();
    await tachyon.say_and_wait([
      '怎怎怎怎么可能……不过是实验动物……对啊！说到底',
      me.sex,
      '不过就是区区豚鼠而已！',
    ]);
    await tachyon.say_and_wait([
      '为什么我要在乎',
      me.sex,
      '喜欢的是我这个人还是我的跑法、可能性啊！',
    ]);
    era.println();
    await tachyon.print_and_wait(
      '没错，既然是豚鼠，那只要拥有相同的目标就好了',
    );
    await tachyon.print_and_wait([
      '没有必要加入那些多余的感情，感情这种东西在实验中也只会误事',
    ]);
    await tachyon.print_and_wait([
      '两人的关系就是研究者和豚鼠，训练员和',
      tachyon.get_uma_sex_title(),
    ]);
    tachyon.print('其余的关系都是不需要的');
    era.printButton('真的是这样吗？', 1);
    era.printButton('没错，就是这样', 2);
    if ((await era.input()) === 1) {
      await tachyon.print_and_wait('是啊，明明是这样的');
      await tachyon.print_and_wait('那为什么');
      await tachyon.print_and_wait(
        '对于被当成情侣的事，心中的雀跃和情绪高涨却怎么也压抑不住',
      );
      await tachyon.print_and_wait([
        '对于',
        me.sex,
        '给 ',
        coffee.get_colored_name(),
        ' 做了便当的事，心中的嫉妒和愤怒却怎么也平息不下',
      ]);
      await tachyon.print_and_wait([
        '…………对于 ',
        coffee.get_colored_name(),
        ' 所说的，对方并没有看见自己的事，心中的恐慌和畏惧却怎么也放不下来',
      ]);
      era.println();
      await tachyon.say_and_wait('…………我到底是怎么了');
      await tachyon.say_and_wait('这不就好像……好像');
      era.println();
      await tachyon.print_and_wait(['好像，我喜欢 ', callname, ' 一般吗']);
      era.println();
      await tachyon.print_and_wait(
        '连当事人都不明白的感情，在混杂着灼热的吐息中，飘上了天花板，消失在孤独的实验室中',
      );
    } else {
      await tachyon.print_and_wait('没错');
      await tachyon.print_and_wait('就是这样');
      await tachyon.print_and_wait('两人只要当纯粹的豚鼠和研究者就好');
      await tachyon.print_and_wait('只要继续过着这样的生活就好');
      await tachyon.print_and_wait(
        '任性的天才科学家，以及任劳任怨的助手兼实验品',
      );
      await tachyon.print_and_wait('两人的关系只要继续维持着这样就好');
      await tachyon.print_and_wait('维持到……什么时候呢');
      await tachyon.print_and_wait(
        '一年？两年？到自己毕业？到进入大学？到出社会以前？',
      );
      await tachyon.print_and_wait('这样的关系，有办法维持到那个时候吗？');
      era.println();
      await tachyon.say_and_wait('唉……');
      era.println();
      await tachyon.print_and_wait(
        '但无论如何，自己已经做出了选择，所以现在，这样就好',
      );
    }
    era.println();
    await tachyon.say_and_wait(['快点回来吧，', callname, '……']);
  }

  async 49(tachyon, me, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '栗东寮的某间寝室内，一名',
      tachyon.get_uma_sex_title(),
      '正用枕头捂住自己的嘴，低声的吐出模糊的声音',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '一般情况，这间房间里发生这类的场景也不是什么特殊的事了，',
    );
    await tachyon.print_and_wait([
      '一般都是某粉发',
      tachyon.get_uma_sex_title(),
      '抱着枕头低诉对',
      tachyon.get_uma_sex_title(),
      '的爱意',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('但今天的主角却有些不同');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '与粉发',
      tachyon.get_uma_sex_title(),
      '同寝的栗发',
      tachyon.get_uma_sex_title(),
      '，如今却做出了过去室友做过的，当时还使自己十分迷惑的行为',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '当时的',
      tachyon.sex,
      '总想着，这样的行为实在是多此一举',
    ]);
    await tachyon.print_and_wait('真的想说的话，那又为什么要感到害羞？');
    await tachyon.print_and_wait('感到害羞的话，那不说出口不就好了吗？');
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '现在',
      tachyon.sex,
      '才终于明白了这种行为的原因',
    ]);
    await tachyon.print_and_wait('感到害羞，是因为话语中所带的爱意');
    await tachyon.print_and_wait(
      '必须说出，是因为不说出口，内心的火就无处发泄',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '因此，现在的',
      tachyon.sex,
      '也只能这样，对着枕头，以及因为室友远征CM不在而空荡荡的房间独自吐露内心',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '……虽然这么说，但其实这种感情的根源为何，',
      tachyon.sex,
      '至今还是没搞清楚就是了',
    ]);
    await tachyon.print_and_wait('只能不断的喊着那名对自己唯命是从——');
    await tachyon.print_and_wait([
      '却也是自己此刻心情烦躁根源的元凶——的',
      me.sex,
      '的名字',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('初见时，纯粹出于对实验品的兴趣而取的称呼');
    await tachyon.print_and_wait('开始时兴趣中却带着评估及冷漠的称呼');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '现在却化为了带有复杂感情，每次提起心头都会一颤的称呼',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('这种感情，到底是什么');
    await tachyon.print_and_wait('既甜，又苦，温暖，却又令人恐惧');
    await tachyon.print_and_wait('这样冲突的属性却集中在一种感情里');
    await tachyon.print_and_wait('好奇怪，好热，好……害怕？');
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('自己对未知的态度，一直以来都是期待且喜悦的');
    await tachyon.print_and_wait(
      '为何这种未知的感情，却让自己产生了害怕的情绪',
    );
    await tachyon.print_and_wait([
      '有什么好怕的，这种感情？还是 ',
      callname,
      '？',
    ]);
    await tachyon.print_and_wait(['我会怕……', callname, '？']);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('更加颤抖的内心揭晓了答案');
    await tachyon.print_and_wait(['我在害怕 ', callname, '？']);
    await tachyon.print_and_wait(['害怕', me.sex, '的什么？']);
    await tachyon.print_and_wait(['明明只是区区的 ', callname, ' ']);
    await tachyon.print_and_wait('但……又不是纯粹的害怕');
    await tachyon.print_and_wait('这种复杂的感情又是什么');
    await tachyon.print_and_wait('紧张躁动不安兴奋喜悦恐惧慌乱');
    await tachyon.print_and_wait(
      '任何情绪彷佛都有沾边，却又不属于任何一种情绪',
    );
    await tachyon.print_and_wait(['明明只是区区的 ', callname, ' ']);
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait('……不，其实根本就没什么好推测的不是吗');
    await tachyon.print_and_wait([
      '每次呼喊',
      me.sex,
      '的名字时，内心窜过的电流',
    ]);
    await tachyon.print_and_wait([
      '每次听见',
      me.sex,
      '的声音时，胸口急促的跳动',
    ]);
    await tachyon.print_and_wait([
      '每次看见',
      me.sex,
      '的笑容时，胡思乱想的大脑',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('啊啊，果然');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('不，甚至还在想象之上');
    era.println();
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('没想到');
    await tachyon.print_and_wait('只不过是带着「爱意」喊出');
    await tachyon.print_and_wait('心情上就会有如此转变');
    era.println();
    await tachyon.print_and_wait('原本的焦急变成了享受');
    await tachyon.print_and_wait('原本的慌乱变成了安心');
    await tachyon.print_and_wait('原本的躁动变成了喜悦');
    await tachyon.print_and_wait('原本的恐惧……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('为什么，为什么恐惧还在');
    await tachyon.print_and_wait('明明，我已经承认了不是吗');
    await tachyon.print_and_wait(['明明，我已经爱上 ', callname, ' 了不是吗']);
    await tachyon.print_and_wait('为什么还是害怕');
    await tachyon.print_and_wait('为什么还是恐惧');
    era.println();
    await tachyon.print_and_wait('啊啊……');
    await tachyon.print_and_wait('答案不是很明显吗');
    await tachyon.print_and_wait('既然这种喜悦是因爱而生');
    await tachyon.print_and_wait('那么，会感到害怕的原因');
    await tachyon.print_and_wait('那当然是因为害怕「不爱」了');
    era.println();
    await tachyon.print_and_wait(['要是', me.sex, '不喜欢自己怎么办']);
    await tachyon.print_and_wait(['要是', me.sex, '讨厌自己的话怎么办']);
    await tachyon.print_and_wait(['要是', me.sex, '喜欢上别人怎么办']);
    await tachyon.print_and_wait([
      '要是……',
      me.sex,
      '喜欢的不是「自己」怎么办',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '跑法、可能性……',
      me.sex,
      '看着的，究竟是 ',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.get_uma_sex_title(),
      '，还是「拥有这些东西的某',
      tachyon.get_uma_sex_title(),
      'A」呢？',
    ]);
    await tachyon.print_and_wait([
      '反过来说，除了这些东西以外，',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.get_uma_sex_title(),
      '，对',
      me.sex,
      '到底有何吸引力？',
    ]);
    era.println();
    await tachyon.print_and_wait(['想起了', me.sex, '那疯狂的目光']);
    await tachyon.print_and_wait([
      me.sex,
      '迷上的不是 ',
      tachyon.get_colored_name(),
      '，而是 ',
      tachyon.get_colored_name(),
      ' 的跑法',
    ]);
    await tachyon.print_and_wait([
      me.sex,
      '想要帮助的不是 ',
      tachyon.get_colored_name(),
      '，而是 ',
      tachyon.get_colored_name(),
      ' 的梦想',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '…………']);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '……不过就只是个附加物而已',
    ]);
    await tachyon.print_and_wait([
      '要是自己要死了，',
      me.sex,
      '会为此感到焦急吗',
    ]);
    await tachyon.print_and_wait([
      '要是自己再也无法奔跑了，',
      me.sex,
      '会为此感到心碎吗',
    ]);
    await tachyon.print_and_wait([
      '要是自己放弃了梦想，',
      me.sex,
      '会为此感到遗憾吗',
    ]);
    era.println();
    await tachyon.print_and_wait('……不，这些问题的答案肯定都是「是」吧');
    await tachyon.print_and_wait('但是，但是');
    era.println();
    await tachyon.print_and_wait([
      '如果 ',
      tachyon.get_colored_name(),
      ' 失去了双腿、梦想、可能性，',
      me.sex,
      '还会爱着 ',
      tachyon.get_colored_name(),
      ' 吗？',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('注定无法得到响应的疑问，消失在枕头的棉絮间');
    era.println();
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('啊啊，不行');
    await tachyon.print_and_wait(
      '每一次的开口，都还是能感受到如雷电一般的刺激',
    );
    await tachyon.print_and_wait(
      '每一次的呼喊，都还是能感受到大脑癫狂般的颤抖',
    );
    await tachyon.print_and_wait('但是');
    await tachyon.print_and_wait('每一次的询问，心中的阴影便增添一尺');
    await tachyon.print_and_wait('每一次的怀疑，大脑的恐惧便增大一分');
    era.println();
    await tachyon.print_and_wait('好可怕');
    await tachyon.print_and_wait('好不安');
    await tachyon.print_and_wait('好痛苦');
    era.println();
    await tachyon.print_and_wait('这就是喜欢吗');
    await tachyon.print_and_wait('这就是迷恋吗');
    await tachyon.print_and_wait('这就是，恋爱吗？');
    era.println();
    tachyon.print('如果是的话……那');
    era.printButton('……必须做点什么了（升级关系）', 1);
    era.printButton('……不，还是不要吧（暂不升级）', 2);
    if ((await era.input()) === 1) {
      await tachyon.print_and_wait('必须要做些什么');
      await tachyon.print_and_wait('像这样焦躁也改变不了任何事情');
      await tachyon.print_and_wait([
        '说到底，',
        tachyon.get_colored_name(),
        ' 也不是只会等待着王子大人出现的柔弱',
        tachyon.get_uma_sex_title(),
      ]);
      await tachyon.print_and_wait('结合现有变量，透过实验证明');
      await tachyon.print_and_wait('这才是身为研究者，应该做的事情');
      await tachyon.print_and_wait('好好想想吧');
      era.println();
      await tachyon.print_and_wait([
        '唯一的实验目的，证明 ',
        tachyon.get_colored_name(),
        ' 在 ',
        callname,
        ' 心中的地位',
      ]);
      await tachyon.print_and_wait('实验方案……有，但危险度及风险……');
      era.println();
      await tachyon.say_and_wait('………………呵呵');
      era.println();
      await tachyon.print_and_wait('还有什么需要考虑的吗');
      await tachyon.print_and_wait([
        '没有那个人陪在身旁的 ',
        tachyon.get_colored_name(),
        '，还有存在的意义吗？',
      ]);
      await tachyon.print_and_wait('都已经变成这样了，还想自欺欺人吗？');
      era.println();
      await tachyon.print_and_wait('啊啊');
      await tachyon.print_and_wait([
        '都是你，让我从一名研究者变成了普通的',
        tachyon.get_teen_sex_title(),
      ]);
      await tachyon.print_and_wait([
        '所以啊，请负起责任吧，我亲爱的 ',
        callname,
      ]);
      await tachyon.print_and_wait('我的告白，我的「情书」');
      await tachyon.print_and_wait('就请你，好好的收下吧');
      await sys_love_uma_in_event(32);
    } else {
      await tachyon.print_and_wait('不行……');
      era.println();
      await tachyon.print_and_wait('要是发生了改变');
      await tachyon.print_and_wait(['要是以后再也无法和', me.sex, '见面']);
      await tachyon.print_and_wait(['要是再也吃不到', me.sex, '做的便当']);
      await tachyon.print_and_wait(['要是再也无法看见他那狂气的眼神']);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，就无法再继续活下去了',
      ]);
      era.println();
      await tachyon.print_and_wait('那种事绝对不要');
      await tachyon.print_and_wait('那种事绝对不行');
      era.println();
      await tachyon.print_and_wait([
        '为了 ',
        callname,
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的日常',
      ]);
      await tachyon.print_and_wait('为了守护这段日子');
      await tachyon.print_and_wait('克制吧');
      await tachyon.print_and_wait('压抑吧');
      await tachyon.print_and_wait('忍耐吧');
      era.println();
      await tachyon.print_and_wait('克制内心的激动');
      await tachyon.print_and_wait('压抑内心的燥热');
      await tachyon.print_and_wait('忍耐内心的不安');
      era.println();
      await tachyon.print_and_wait('只是……');
      await tachyon.print_and_wait('再强力的弹簧，也会有被压力破坏的一天');
      await tachyon.print_and_wait([
        '名为 ',
        tachyon.get_colored_name(),
        ' 的这条弹簧，究竟能忍耐到哪一天为止呢',
      ]);
      era.set('cflag:32:爱慕暂拒', 49);
    }
  }
};
