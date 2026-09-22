/**
 * @file 爱丽速子 - 爱慕
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = (tachyon) => [
      '「',
      tachyon.name,
      '」？「',
      tachyon.uma_sex_title,
      'A」？',
    ];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      callname_25,
      t_call_c,
      c_call_t,
    ) => {
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
      await coffee.say_and_wait([callname_25, ' 今天才出差第一天……']);
      await tachyon.say_and_wait('…………就算这样，三次也不算……');
      await coffee.say_and_wait([you.sex, '才离开学园不到半小时']);
      await tachyon.say_and_wait('………………');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' 叹了口气，眼前这名以往都是实验至上的同学，怎么在和训练员处好关系后就完全变了个样了',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait('……虽然，也不是不能理解，毕竟是那个人啊');
      } else {
        await coffee.print_and_wait(
          '原本冷血无情、毫无伦理，草菅人命……好像说的有点过份了',
        );
      }
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
        callname_25,
        ' 又不是 ',
        c_call_t,
        ' 的专属',
      ]);
      await tachyon.say_and_wait('…………你这是什么意思？');
      await coffee.say_and_wait([
        '我是什么意思，',
        c_call_t,
        ' 自己不是很清楚吗？',
        callname_25,
        ' 虽然说了出差，但有说是去哪里，做什么所以才要出差的吗？',
      ]);
      await coffee.say_and_wait([
        '…………没有，从头到尾',
        you.sex,
        '只跟我说了自己要出差的事',
      ]);
      era.println();
      await coffee.print_and_wait([
        '那当然，毕竟说是出差，其实是被紧急找去处理 ',
        c_call_t,
        ' 前些日子弄出的实验外泄意外，这种事那个太过在乎',
        tachyon.uma_sex_title,
        '情感的 ',
        callname,
        ' 当然不会和',
        tachyon.sex,
        '本人说了',
      ]);
      if (era.get('cflag:25:招募状态') === 1) {
        await coffee.print_and_wait('……让人都有些妒忌了');
      }
      await coffee.print_and_wait([coffee.get_colored_name(), ' 心中暗暗想到']);
      era.println();
      await coffee.say_and_wait([
        '那么……会不会也有一种可能，就是 ',
        callname_25,
        ' 其实不是去出差，而是……在与某人私会呢？',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '毕竟……',
        c_call_t,
        ' 这么麻烦，如果我是 ',
        callname_25,
        ' 应该也早就受够了吧',
      ]);
      await tachyon.say_and_wait([
        '……',
        you.sex,
        '说过，',
        you.sex,
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
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          '让最近总在不停和「自己的」训练员喂狗粮的这个人露出这种不安的表情……糟糕，有点上瘾了',
        );
      } else {
        await coffee.print_and_wait(
          '让最近总在不停和训练员喂狗粮的这个人露出这种不安的表情……糟糕，有点上瘾了',
        );
      }
      era.println();
      await coffee.say_and_wait([
        '换句话说，不就是 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '本身，对',
        you.sex,
        '而言完全没有任何的吸引力吗？',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '跑法、可能性……',
        you.sex,
        '看着的，究竟是 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '，还是『拥有这些东西的某',
        tachyon.uma_sex_title,
        'A』呢？',
      ]);
      await tachyon.say_and_wait('……不……');
      await coffee.say_and_wait([
        '反过来说，除了这些东西以外，',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '，对',
        you.sex,
        '到底有何吸引力？',
      ]);
      await tachyon.say_and_wait('…………');
      era.println();
      await coffee.print_and_wait([
        '原本的不爽感已经全数化为乌有，今天的愉悦度上升到Max值的 ',
        coffee.get_colored_name(),
        '，最后，如抛下原子弹一般，说出了最后一句话，然后便离开了教室',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.say_and_wait([
          '对了，',
          callname_25,
          ' 的便当，味道确实很不错呢……以后也让 ',
          callname_25,
          ' 帮我做怎么样？',
        ]);
      } else {
        await coffee.say_and_wait([
          '对了，',
          callname_25,
          ' 的便当，味道确实很不错呢……有机会再请',
          you.sex,
          '帮我做吧',
        ]);
      }
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
        you.sex,
        '不过就是区区豚鼠而已！',
      ]);
      await tachyon.say_and_wait([
        '为什么我要在乎',
        you.sex,
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
        tachyon.uma_sex_title,
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
          you.sex,
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
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {string} callname 爱丽速子对玩家的称呼
   */
  async 49(tachyon, you, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '栗东寮的某间寝室内，一名',
      tachyon.uma_sex_title,
      '正用枕头捂住自己的嘴，低声的吐出模糊的声音',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '一般情况，这间房间里发生这类的场景也不是什么特殊的事了，',
    );
    await tachyon.print_and_wait([
      '一般都是某粉发',
      tachyon.uma_sex_title,
      '抱着枕头低诉对',
      tachyon.uma_sex_title,
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
      tachyon.uma_sex_title,
      '同寝的栗发',
      tachyon.uma_sex_title,
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
      you.sex,
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
    await tachyon.print_and_wait(['害怕', you.sex, '的什么？']);
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
      you.sex,
      '的名字时，内心窜过的电流',
    ]);
    await tachyon.print_and_wait([
      '每次听见',
      you.sex,
      '的声音时，胸口急促的跳动',
    ]);
    await tachyon.print_and_wait([
      '每次看见',
      you.sex,
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
    await tachyon.print_and_wait(['要是', you.sex, '不喜欢自己怎么办']);
    await tachyon.print_and_wait(['要是', you.sex, '讨厌自己的话怎么办']);
    await tachyon.print_and_wait(['要是', you.sex, '喜欢上别人怎么办']);
    await tachyon.print_and_wait([
      '要是……',
      you.sex,
      '喜欢的不是「自己」怎么办',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '跑法、可能性……',
      you.sex,
      '看着的，究竟是 ',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.uma_sex_title,
      '，还是「拥有这些东西的某',
      tachyon.uma_sex_title,
      'A」呢？',
    ]);
    await tachyon.print_and_wait([
      '反过来说，除了这些东西以外，',
      tachyon.get_colored_name(),
      ' 这名',
      tachyon.uma_sex_title,
      '，对',
      you.sex,
      '到底有何吸引力？',
    ]);
    era.println();
    await tachyon.print_and_wait(['想起了', you.sex, '那疯狂的目光']);
    await tachyon.print_and_wait([
      you.sex,
      '迷上的不是 ',
      tachyon.get_colored_name(),
      '，而是 ',
      tachyon.get_colored_name(),
      ' 的跑法',
    ]);
    await tachyon.print_and_wait([
      you.sex,
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
      you.sex,
      '会为此感到焦急吗',
    ]);
    await tachyon.print_and_wait([
      '要是自己再也无法奔跑了，',
      you.sex,
      '会为此感到心碎吗',
    ]);
    await tachyon.print_and_wait([
      '要是自己放弃了梦想，',
      you.sex,
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
      you.sex,
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
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('必须要做些什么');
      await tachyon.print_and_wait('像这样焦躁也改变不了任何事情');
      await tachyon.print_and_wait([
        '说到底，',
        tachyon.get_colored_name(),
        ' 也不是只会等待着王子大人出现的柔弱',
        tachyon.uma_sex_title,
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
        tachyon.teen_sex_title,
      ]);
      await tachyon.print_and_wait([
        '所以啊，请负起责任吧，我亲爱的 ',
        callname,
      ]);
      await tachyon.print_and_wait('我的告白，我的「情书」');
      await tachyon.print_and_wait('就请你，好好的收下吧');
    } else {
      await tachyon.print_and_wait('不行……');
      era.println();
      await tachyon.print_and_wait('要是发生了改变');
      await tachyon.print_and_wait(['要是以后再也无法和', you.sex, '见面']);
      await tachyon.print_and_wait(['要是再也吃不到', you.sex, '做的便当']);
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
    }
    return ret;
  },
  74: (() => {
    const title = '女巫的自白';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '，在喝今天的药之前，我要和你说个故事',
      ]);
      era.println();
      await era.printAndWait([
        '今天 ',
        you.get_colored_name(),
        ' 一如既往来到了 ',
        tachyon.get_colored_name(),
        ' 的实验室，',
        tachyon.sex,
        '一如既往的接过便当然后递给 ',
        you.get_colored_name(),
        ' 今天的药水，',
      ]);
      await era.printAndWait('彷佛一种以物易物的交易行动一般');
      era.println();
      await era.printAndWait([
        '但在 ',
        you.get_colored_name(),
        ' 正要喝下药物时，',
        tachyon.get_colored_name(),
        ' 阻止了 ',
        you.get_colored_name(),
        ' 的行动',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 疑惑的看着',
        tachyon.sex,
        '，却看',
        tachyon.sex,
        '十分认真的回望着 ',
        you.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait('…………那种眼神，彷佛带着赌上生命的觉悟一般');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，不知道你有没有听过一个叫做人鱼公主的童话故事',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '没等 ',
        you.get_colored_name(),
        ' 回答，彷佛一开始就不打算让 ',
        you.get_colored_name(),
        ' 回答一般，接着说了下去',
      ]);
      await era.printAndWait(
        '……然而，这却是有别于以往安徒生童话中人鱼公主的，另类的故事',
      );
      era.println();
      await tachyon.say_and_wait(
        '从前从前，有位生活在海底的人鱼公主，她从小就渴望着拥有双腿，希望能够在地面上，尽情的奔跑',
      );
      await tachyon.say_and_wait(
        '然而，生活在海里的她，只有腰部以下的那条鱼尾巴，别说跑步了，就连站立都没有办法',
      );
      era.println();
      await era.printAndWait('她自嘲般的看了看自己的双腿……');
      await era.printAndWait(
        '如玻璃般脆弱的双腿，纵使能够站立，纵使能够奔跑，',
      );
      await era.printAndWait('一跑就坏的双腿，比起鱼尾又好到哪里去了？');
      era.println();
      await tachyon.say_and_wait(
        '公主没有遇见女巫，她也不想将自己的双腿交付在不可信任的女巫手上，',
      );
      await tachyon.say_and_wait(
        '她想要的，是真正属于自己的双腿，所以她，自己开始学习巫术',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的双手一摆，手上不知从哪里又变出了两个试管来，彷佛魔术，又彷佛……巫术一般',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '公主相信，只要一直努力，总有一天她也能获得属于自己的双腿，',
      );
      await tachyon.say_and_wait(
        '到时候就能尽情奔跑了，再也不用惧怕任何的东西，直到有一天……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的口气忽然变得有些飘渺，彷佛陷于一场梦境之中',
      ]);
      era.println();
      await tachyon.say_and_wait('她遇见了一个人');
      await tachyon.say_and_wait(
        '那个人不是王子，只是名潜水员而已，他不是落入海里需要援救的王子',
      );
      await tachyon.say_and_wait(
        '而是在出海时偶然看见了到海面上收集数据的公主，而一不小心被塞壬迷住',
      );
      await tachyon.say_and_wait(
        '投入海中，自愿帮助实验的普通人类，让我们姑且称他为——豚鼠君吧',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 说到这里，忽然发出了咯咯的笑声，彷佛想到了什么笑话一般',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '公主一开始对豚鼠君，并没有任何的感情，只是觉得来了个有趣的实验对象，',
      );
      await tachyon.say_and_wait(
        '用他进行了许多的实验，包括但不限于增值、发光、分身、变性………呵呵',
      );
      await tachyon.say_and_wait(
        '然而，天真的公主以为，受到改变的只有豚鼠君，',
      );
      await tachyon.say_and_wait(
        '却忘记了一个最重要的基本定理————反应，是相互的，',
      );
      await tachyon.say_and_wait('无论是化学还是人际关系，都是如此');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 叹了口气，眼神却带有无比的眷恋及怀念，彷佛仍沉溺于梦境一般',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '豚鼠君带着公主，以实验的名义看了许许多多的事物，',
      );
      await tachyon.say_and_wait(
        '他们跟着一角鲸一起围猎感到了生物的弱肉强食，他们看着蓝鲸死亡坠落海底，体会了生老病死的意义，',
      );
      await tachyon.say_and_wait(
        '他们看着海豚求偶交配的画面，两人都不禁面红耳赤',
      );
      await tachyon.say_and_wait(
        '渐渐的，公主理解了，实验以外的世界，原来是如此美丽',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '娓娓道来，叙述了一幅幅或美丽，或壮丽的画面，',
      ]);
      await era.printAndWait(
        '语气依旧轻柔，但此时却带上了细丝般的不舍———彷佛，美梦将醒',
      );
      era.println();
      await tachyon.say_and_wait('然后，终于，有一天');
      await tachyon.say_and_wait('公主发现，自己再也无法专注于实验了');
      await tachyon.say_and_wait(
        '每次她想静下心来研究时，比起研究会获得的成果，',
      );
      await tachyon.say_and_wait('她更期待的却是听见新研究时豚鼠君的表情。');
      await tachyon.say_and_wait(
        '每次她想到海面收集数据时，比起海面上看见的那些人类，',
      );
      await tachyon.say_and_wait('她更想见的却是在海底等着她的豚鼠君。');
      await tachyon.say_and_wait(
        '每次她想制作新药物的时候，比起药物带来的效果，',
      );
      await tachyon.say_and_wait('她更期待的却是豚鼠君喝下药物的反应');
      era.println();
      await era.printAndWait([
        '终于，',
        tachyon.get_colored_name(),
        ' 的表情恢复了清醒，彷佛总算，从一场美梦中醒了过来一般',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '她开始感到害怕，害怕有一天，自己会完全沉溺于与豚鼠君共度的时光，',
      );
      await tachyon.say_and_wait(
        '害怕有一天……获得双腿这个目标，都会变成区区一句空话而已',
      );
      await tachyon.say_and_wait(
        '那样的话，那样的她，便只是一名普通的科学家，却再也做不了一名研究者了……',
      );
      era.println();
      await tachyon.say_and_wait('这个时候，女巫出现了');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 从椅子上站起身，走向了 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的手，盖上了 ',
        you.get_colored_name(),
        ' 的手……却并非紧握，',
        tachyon.sex,
        '抚摸着的，是握在 ',
        you.get_colored_name(),
        ' 手中的那管试管',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '原来，从头到尾，女巫就存在于公主的心中，女巫就是公主！',
      );
      await tachyon.say_and_wait(
        '代表着内心理智面的女巫告诉公主，现在这一切的源头就是那只豚鼠，只要他不在，一切就能恢复原状了',
      );
      await tachyon.say_and_wait(
        '如果那只豚鼠离开……不，离开还不够，不能留下悬念……',
      );
      await tachyon.say_and_wait(
        '只要，让那只豚鼠『消失』，公主就能变回原状，变回原本那个专注于实验的公主',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………没错，只是『变回原状』，无论是谁也无法保证，',
      );
      await tachyon.say_and_wait(
        '变回原状后公主究竟能否透过实验获得双腿，但唯一能够知道的就是『有这种可能性』',
      );
      await tachyon.say_and_wait(
        '相反的，要是继续和豚鼠君在一起的话……这种可能性，',
      );
      await tachyon.say_and_wait(
        '就再也不可能找回了，女巫说完了这些后，将一种药物，透过公主之手制作了出来',
      );
      await tachyon.say_and_wait(
        '她告诉公主，只要和平常一样，让豚鼠喝下这种药，',
      );
      await tachyon.say_and_wait('一切就能结束了，她们就能回到原来的生活了');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 说到这，从 ',
        you.get_colored_name(),
        ' 的手中再度将药剂抽出',
      ]);
      era.println();
      await tachyon.say_and_wait('但是……');
      era.println();
      await era.printAndWait('那只握着药剂的手忽然有些颤抖');
      era.println();
      await tachyon.say_and_wait('胆怯的公主，将一切都告诉了豚鼠君');
      await tachyon.say_and_wait(
        '……这不是因为爱情、不是因为怜悯、不是因为不忍',
      );
      await tachyon.say_and_wait('而是，胆怯，怯弱，懦弱');
      await tachyon.say_and_wait(
        '不要觉得，公主是什么善良之人，说到底，女巫只是她内心的一面，她的本质就是那个冷酷而无情的女巫',
      );
      await tachyon.say_and_wait(
        '如此说出口的公主，她的目的…………只是，不想承担责任而已',
      );
      era.println();
      await era.printAndWait([
        '然后，',
        tachyon.get_colored_name(),
        ' 再一次将手上的药举起',
      ]);
      era.println();
      await tachyon.say_and_wait('不想背负起杀掉自己所爱之人的罪刑');
      await tachyon.say_and_wait('不想担负起手刃自己眷恋之人的责任');
      await tachyon.say_and_wait(
        '希望……那个即将被其抹消的豚鼠，能够为了公主自我牺牲的自私',
      );
      era.println();
      await era.printAndWait('药水再次递出');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看不见低着头的 ',
        tachyon.get_colored_name(),
        '，脸上现在究竟是何种表情',
      ]);
      await era.printAndWait('是在哭泣吗？因为所爱之人的死？');
      await era.printAndWait('是在嘲笑吗？因为捆绑自己的锁链即将被拆除？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 只是默默的，静待对方说完',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '所以……',
        callname,
        '，请为这名自私自利的研究者做出选择吧',
      ]);
      era.println();
      await era.printAndWait([
        '此时',
        tachyon.sex,
        '所说的，确实，是无比自私的话语',
      ]);
      await era.printAndWait('希望对方能够为自己牺牲');
      await era.printAndWait('而且还是为了一个「可能性」，甚至并非是绝对');
      await era.printAndWait(
        '换句话说，也就是「你必须为了我而死，但就算你死了我也不知道自己能不能成功」这样，真的，不负责任的话语',
      );
      era.println();
      era.print(['因此，', you.get_colored_name(), ' 选择…………']);
      era.printButton('不喝（升级关系）', 1);
      era.printButton('喝（暂不升级）', 2);
      era.printButton('让速子将药喝下去【！】', 3);
      era.print(
        [
          '【警告，若选择此选项，与 ',
          tachyon.get_colored_name(),
          ' 的关系将无法挽回！特雷森学园不会原谅抛弃担当的行为！】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  '74-accept': (() => {
    const title = '超光速的公主';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 从 ',
        tachyon.get_colored_name(),
        ' 手中接过药剂',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([tachyon.sex, '抬起头来，眼中带着担心']);
      await era.printAndWait([
        '是担心自己把药喝下去吗，还是担心自己……不肯喝下去？',
      ]);
      await era.printAndWait([
        '说实话，就连 ',
        you.get_colored_name(),
        ' 自己都不敢肯定接下来的行为正确与否',
      ]);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 可以保证，接下来的一切绝对都是出自本心',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 将手上的药剂……倒入了一旁的废弃药品处理桶',
      ]);
      era.println();
      await tachyon.say_and_wait('………………啊');
      era.println();
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 倾倒试管的过程中，',
        tachyon.get_colored_name(),
        ' 都没有发出任何声音，',
      ]);
      await era.printAndWait([
        '直到 ',
        you.get_colored_name(),
        ' 全部倒完，彷佛一世纪一般长久的时间过去后，',
        tachyon.sex,
        '才发出了小声的一声「啊」，彷佛直到此时才想到，自己应该要做出反应一样',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……你知道，这代表着什么吗？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 将试管倒转，确认里面的药剂已经一滴不剩倒光',
      ]);
      await era.printAndWait([
        '此时，',
        tachyon.get_colored_name(),
        ' 总算组织好了语言，将编织的话语倾泻',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '我的梦想……我所追求的可能性，你的这个选择，意思就是在说，',
      );
      await tachyon.say_and_wait([
        '要我，',
        tachyon.get_colored_name(),
        '，将这一切完全放弃，彻彻底底的放弃，变成一名普通的，和其他的青春期',
        tachyon.teen_sex_title,
        '没有任何差别的……',
      ]);
      await tachyon.say_and_wait([
        '陷入爱河的普通',
        tachyon.child_sex_title,
        '子，你的意思，是要我放弃其他的可能性，选择和你在一起的可能性……',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '语速飞快，结结巴巴的说道']);
      await era.printAndWait(
        '彷佛是在劝说自己趁现在快点改变主意，想让自己知道这个决定是多么不明智的一个选择，',
      );
      await era.printAndWait([
        '希望自己能够为了',
        tachyon.sex,
        '而牺牲，但又不想当坏人，所以才如此自私自利无耻的劝告着自己',
      ]);
      era.println();
      await era.printAndWait([
        '但是，与',
        tachyon.sex,
        '相处甚久的 ',
        you.get_colored_name(),
        ' 看得出来，',
        tachyon.sex,
        '话语中隐藏的真实',
      ]);
      await era.printAndWait('结巴的原因是因为害怕，害怕一切都只是自己的误会');
      await era.printAndWait(
        '语速飞快的原因是不想听见反悔，就彷佛小孩子故意把话讲的不清不楚来诱导人答应',
      );
      await era.printAndWait(
        '如同一名在签下合同前，重复诉说契约内容以免当事人反悔的保险推销员一般',
      );
      await era.printAndWait(
        '判断这一切的依据，是明明说着拒绝的话语，却仍在不停晃动的尾巴，',
      );
      await era.printAndWait(
        '直直竖起的耳朵，还有或许自以为没人发现，却十分明显流露在脸上的——安心的神情',
      );
      era.println();
      await tachyon.say_and_wait([
        '你明白吗，',
        callname,
        '……你不是一直想见到可能性的彼方吗？要是这样的话就真的……',
      ]);
      era.println();
      await era.printAndWait('够了');
      await era.printAndWait([
        '虽然说，继续看',
        tachyon.sex,
        '还能虚张声势到什么时候也挺有意思的',
      ]);
      await era.printAndWait([
        '但那样的话之后肯定会被恼羞成怒的',
        tachyon.sex,
        '报复的吧',
      ]);
      await era.printAndWait([
        '因此，',
        you.get_colored_name(),
        ' 思考着，用什么样的方法才能表现出 ',
        you.get_colored_name(),
        ' 最深的觉悟',
      ]);
      era.print([you.get_colored_name(), ' 决定……']);
      era.printButton(`抱住${tachyon.sex}`, 1);
      era.printButton(`亲吻${tachyon.sex}`, 2);
      era.printButton(`轻咬${tachyon.sex}的耳朵`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '人在遇见突发现象时，是无法维持住一心二用的，',
            tachyon.uma_sex_title,
            '也是如此',
          ]);
          await era.printAndWait([
            '因此理所当然的，被 ',
            you.get_colored_name(),
            ' 忽然的拥抱惊呆，沉浸于那熟悉的雄性气味，',
          ]);
          await era.printAndWait([
            '尽情享受这份温存的 ',
            tachyon.get_colored_name(),
            '，当然也无法开口继续',
            tachyon.sex,
            '的长篇大论了',
          ]);
          break;
        case 2:
          await era.printAndWait(
            '自古以来流传下来的表达爱意的方法，或许才是既能堵住嘴又能表达感情的最强技能',
          );
          await era.printAndWait([
            tachyon.sex,
            '的唇就如',
            tachyon.sex,
            '本人一般，看似强硬的防线，却在接触的瞬间崩溃，露出了柔软娇嫩的内里。',
          ]);
          await era.printAndWait(
            '坚如壁石的牙城，在舌尖的试探下却是瞬间崩溃，只能任由敌军的长驱直入，',
          );
          await era.printAndWait(
            '看似忠贞的舌头，也在触碰到自己粗长的舌头瞬间化为了小鸟依人，被动的被采撷着',
          );
          break;
        case 3:
          await era.printAndWait('取而代之的是忍不住出口的一声娇吟');
          await era.printAndWait([
            '众所周知，大多数',
            tachyon.uma_sex_title,
            '所特有，与人类不同的器官，都是',
            tachyon.couple_title,
            '最为敏感的部位',
          ]);
          await era.printAndWait([
            '因此，谁能责怪 ',
            tachyon.get_colored_name(),
            ' 发出的令人想入非非的娇声呢',
          ]);
          await era.printAndWait([
            '不如说，被 ',
            you.get_colored_name(),
            ' 抱在怀里捏住耳朵，却还能维持站立，不瘫软在 ',
            you.get_colored_name(),
            ' 怀中的 ',
            tachyon.get_colored_name(),
            '，已经相当了不起了',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……不……等等……好痒……']);
          era.println();
          await era.printAndWait([
            '听见了 ',
            tachyon.get_colored_name(),
            ' 那比起拒绝更像是欲迎还拒的声音，',
            you.get_colored_name(),
            ' 变换了手法，以更加粗暴的力道，或揉或搓',
            tachyon.uma_sex_title,
            '那弹性十足，敏感的耳尖',
          ]);
          era.println();
          await tachyon.say_and_wait('咿……等等……不可以……');
          era.println();
          await era.printAndWait([
            '在坚持了足足半分钟后，',
            tachyon.get_colored_name(),
            ' 终于败下阵来，瘫软在 ',
            you.get_colored_name(),
            ' 的怀中',
          ]);
      }
      await era.printAndWait([
        '直到',
        tachyon.sex,
        '完全放弃挣扎，',
        you.get_colored_name(),
        ' 才放开了',
        tachyon.sex,
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '似乎还沉浸于刚才的体验之中，无法回过神来',
      ]);
      await era.printAndWait([
        '而在这个瞬间，',
        you.get_colored_name(),
        ' 开始了自己一生一次的真心话吐露',
      ]);
      era.printButton('「我爱你，爱丽速子」', 1);
      await era.input();
      await tachyon.say_and_wait('！！！！？？？？');
      era.println();
      await era.printAndWait([
        '在听见 ',
        you.get_colored_name(),
        ' 说的话后，',
        tachyon.sex,
        '的尾巴瞬间倒竖了起来，彷佛一只炸毛的猫',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname.substring(0, 1).repeat(5),
        callname,
        '！？你在说什么！？',
      ]);
      era.println();
      await era.printAndWait([
        '哎呀，',
        tachyon.get_colored_name(),
        ' 的耳朵原来不太好吗',
      ]);
      await era.printAndWait('那么，就再多说几遍吧');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 回想起了第一次看见 ',
        tachyon.get_colored_name(),
        ' 的时候',
      ]);
      await era.printAndWait([tachyon.sex, '的跑法，', tachyon.sex, '的虚幻']);
      await era.printAndWait([
        '无论何者都令 ',
        you.get_colored_name(),
        ' 陷入疯狂，着迷于',
        tachyon.sex,
      ]);
      await era.printAndWait(['没错，是「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 回想起了',
        tachyon.sex,
        '的出道赛',
      ]);
      await era.printAndWait(
        '如光一般，理所当然的参加比赛，理所当然的超越一切，理所当然的赢下比赛',
      );
      await era.printAndWait([
        '说出「比赛不过是实验结果的验证」，表情冷峻，甚至以冷酷的态度面对比赛的',
        tachyon.sex,
      ]);
      await era.printAndWait(['没错，是「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 回想起了 ',
        you.get_colored_name(),
        ' 第一次给',
        tachyon.sex,
        '做便当的时候',
      ]);
      await era.printAndWait(
        '想要见证自己的可能性，为此甚至愿意以自身作为实验品',
      );
      await era.printAndWait([
        '期待着超越想象，突破极限的可能性，眼神疯狂的',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait(['没错，是「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 回想起了彻夜未眠，通宵实验的',
        tachyon.sex,
      ]);
      await era.printAndWait('为了研究能够奉上身体，为了梦想能够抛弃健康');
      await era.printAndWait([
        '肉体狼狈邋遢，眼神却闪烁着对梦想的向往的',
        tachyon.sex,
      ]);
      await era.printAndWait(['没错，是「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 回想起了第一次一起外出时的',
        tachyon.sex,
      ]);
      await era.printAndWait(['变色高丽菜汁的风波和', tachyon.sex, '的赌气']);
      await era.printAndWait([
        '为了那样的事情而任性，为了夹到的娃娃而感到欣喜，那样的，普通的',
        tachyon.sex,
      ]);
      await era.printAndWait(['没错，是「', tachyon.sex, '」']);
      era.println();
      await era.printAndWait([
        '最后……是眼前，在 ',
        you.get_colored_name(),
        ' 面前的',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '紧张的游移视线，等待着 ',
        you.get_colored_name(),
        ' 的再次开口的',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '原本淡漠感情的双眼，现在已经充满了幸福及爱意的',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '羞红着脸颊，看上去……就是一名彻彻底底沉醉于爱情，只是名普通的',
        tachyon.teen_sex_title,
        '的',
        tachyon.sex,
      ]);
      era.printButton(
        '「我爱你，爱丽速子，我爱的是『你』，而不是你的跑法，你的梦想，你的可能性」',
        1,
      );
      await era.input();
      await era.printAndWait('没有错');
      await era.printAndWait(['一切的主体都在于', tachyon.sex, '']);
      await era.printAndWait([
        '一开始的自己，或许真的只是被',
        tachyon.sex,
        '的跑法及疯狂所吸引',
      ]);
      await era.printAndWait([
        '但如今，',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '在 ',
        you.get_colored_name(),
        ' 心目中的地位，已经胜过了那些',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 的想法也早就已经改变']);
      await era.printAndWait([
        '不是「为了达成 ',
        tachyon.get_colored_name(),
        ' 的梦想，因此任劳任怨」',
      ]);
      await era.printAndWait([
        '而是「为了 ',
        tachyon.get_colored_name(),
        '，能够拼尽自己的一切」',
      ]);
      await era.printAndWait('所以……');
      era.printButton(
        '「就算哪天，你不再奔跑，不想再追求可能性了，我也会一如既往的爱着你」',
        1,
      );
      await era.input();
      await era.printAndWait('说到底，从头到尾就是这么简单的问题');
      await era.printAndWait([
        '就好像「老妈和老婆掉进水里，你会先救哪一个」一样的问题，只是问题的主角换成了「',
        tachyon.get_colored_name(),
        '」和「',
        tachyon.get_colored_name(),
        ' 的才能」',
      ]);
      await era.printAndWait([
        '…………能够把如此简单的问题变得这么复杂，这或许也是',
        tachyon.sex,
        '的本事吧',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 忍不住为',
        tachyon.sex,
        '的麻烦而露出苦笑',
      ]);
      await era.printAndWait('但是，这样就能安心了吧');
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        '这么想着的 ',
        you.get_colored_name(),
        ' 看见了',
        tachyon.sex,
        '脸上喜极而泣的泪水，和绽放的笑颜',
      ]);
      await era.printAndWait(['就彷佛大雨过后的大波斯菊一般娇艳']);
      era.drawLine();
      await tachyon.say_and_wait([callname, '～～今天的药来了']);
      era.println();
      await era.printAndWait([
        '第二天，',
        you.get_colored_name(),
        ' 看着明明前一天还说自己已经再也无法进行研究的某名',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait(
        '手上拿着比平时看起来还更不妙的荧光药剂一蹦一跳的进了训练员室',
      );
      era.println();
      await tachyon.say_and_wait(
        '快点快点，今天的药可是至今为止发光类型的集大成，喝下去可以发出两万四千种RGB色哦～～',
      );
      await tachyon.say_and_wait(
        '对了对了，周末要出门做实地实验，所以给我把原本的安排都推掉，听懂了吗？',
      );
      await tachyon.say_and_wait(
        '另外今天的便当早半个小时给我送过来，有个重要的实验要做',
      );
      await tachyon.say_and_wait(
        '所以记得……啊尽量不要送流质的来，会影响实验情况的',
      );
      era.println();
      await era.printAndWait(
        '一进来，兴奋的研究者就开始了关于实验和研究的喋喋不休',
      );
      await era.printAndWait([
        '即便是 ',
        you.get_colored_name(),
        '，看到这一幕也不禁愣神了半天',
      ]);
      await era.printAndWait(
        '当然，不是因为对方的无理要求，要说的话平常的要求比这更无理多了，而是……',
      );
      era.printButton('「说好的无法再研究了呢？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 还记得，昨天哭的泪眼汪汪，说自己再也无法进行研究，再也无法发现可能性的 ',
        tachyon.get_colored_name(),
        ' 那可怜兮兮的模样',
      ]);
      await era.printAndWait([
        '现在的',
        tachyon.sex,
        '，完全看不出前一天的沮丧和崩溃',
      ]);
      era.println();
      await tachyon.say_and_wait(['……我说的是真的哦，', callname, ' ']);
      await tachyon.say_and_wait(
        '我现在已经没有办法再专注于对自身可能性的研究了，',
      );
      await tachyon.say_and_wait('满脑子无时无刻想的都是你的事情……');
      await tachyon.say_and_wait(
        '就连现在，心里都在想着你高兴的模样、生气的模样、害羞的模样、紧张的模样……',
      );
      await tachyon.say_and_wait('把我变成这样，你可必须负起责任才行啊');
      era.printButton('「对……对不起？」', 1);
      await era.input();
      await era.printAndWait('这，这算自己的错吗？');
      await era.printAndWait('话说被这样直球倾诉爱意，果然还是很羞耻啊……');
      await era.printAndWait('不对，这跟前面说的又有什么关系了');
      await era.printAndWait(
        '还是没解释为什么现在还是一如往常的在做着研究不是吗？',
      );
      era.println();
      await tachyon.say_and_wait('所以啊……我已经无法再只想着自己了');
      await tachyon.say_and_wait(
        '我现在能够想到的一切可能性……都必须要有你陪在身边，今后能思考的，或许也只有『和你』一起的可能性了吧',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 忽然有些无法明白',
        tachyon.sex,
        '的意思，只能直盯盯的看着 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 的注视下，也开始感到有些不自在',
      ]);
      await era.printAndWait(
        '然后，彷佛水坝溃堤一般，原本若无其事的表情在来自爱人注视的最后一根稻草后',
      );
      await era.printAndWait('瞬间化为了满脸泛红的羞耻表情');
      era.println();
      await tachyon.say_and_wait(
        '所以说……就是……周末的实验……可以空出时间来吧……',
      );
      await tachyon.say_and_wait(
        '是为了测试一般人说的，那个，就是，被称为约会的行为对两人的适用程度…………',
      );
      await tachyon.say_and_wait(
        '总之！星期六早上九点，不准迟到！还有要带我的早餐来！就这样！',
      );
      await tachyon.say_and_wait(
        '还有，今天中午的便当……可以的话……尽量弄成方便一口吃的……',
      );
      await tachyon.say_and_wait(
        '那个……想做『啊——嗯』行为在恋人关系中的心跳指数测定……可以吧？',
      );
      era.println();
      await era.printAndWait([
        '看见',
        tachyon.sex,
        '撑着害羞把话说完的模样，',
        you.get_colored_name(),
        ' 不禁失笑',
      ]);
      await era.printAndWait('这种情况下，该怎么回答呢');
      await era.printAndWait('对这名刁蛮、任性妄为，最可爱的疯狂科学家');
      await era.printAndWait([
        '对这名亲爱、惹人怜惜，最挚爱的恋爱',
        tachyon.teen_sex_title,
      ]);
      era.println();
      await you.say_and_wait([
        '是的……我的',
        tachyon.sex_code - 1 ? '公主' : '王子',
        '大人',
      ]);
      return [];
    };
    f.title = title;
    return f;
  })(),
  '74-reject-1': (() => {
    const title = '齿轮开始转动';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 回忆起了第一次见到 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '时的画面',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的跑法，',
        tachyon.sex,
        '的虚幻，',
        tachyon.sex,
        '的可能性',
      ]);
      await era.printAndWait([
        '被',
        tachyon.sex,
        '灼伤了双眼的 ',
        you.get_colored_name(),
        '，不是从当时就已经发誓要为',
        tachyon.sex,
        '牺牲一切了吗',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有多说什么，直接从',
        tachyon.sex,
        '手上接过了试管',
      ]);
      await era.printAndWait([
        '记得',
        tachyon.sex,
        '曾经说过，自己有双疯狂的眼睛',
      ]);
      await era.printAndWait([
        '那这疯狂的起源，想必都是反射自',
        tachyon.sex,
        '的光辉',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的疯狂是因',
        tachyon.sex,
        '的梦想而起，',
        you.get_colored_name(),
        ' 的疯狂则是因',
        tachyon.sex,
        '而起',
      ]);
      await era.printAndWait([
        '既然如此，为了',
        tachyon.sex,
        '的梦想，为了',
        tachyon.sex,
        '能够继续绽放那样的光芒，牺牲自己又有何不可？',
      ]);
      era.println();
      await era.printAndWait([
        '现在的 ',
        you.get_colored_name(),
        '，如同一名虔诚的信徒，事实上也确实如此',
      ]);
      await era.printAndWait([
        '而 ',
        you.get_colored_name(),
        ' 心中的神明，唯一的光芒，现在却因 ',
        you.get_colored_name(),
        ' 而堕入黑暗',
      ]);
      await era.printAndWait('这种事当然是绝对不允许的');
      await era.printAndWait('幸好，一切还有救');
      era.println();
      await era.printAndWait([
        '只要自己消失，',
        tachyon.sex,
        '就能继续绽放出 ',
        you.get_colored_name(),
        ' 想看见的光芒了',
      ]);
      era.printButton('「谢谢你……在可能性的彼方再见吧」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 相信 ',
        tachyon.get_colored_name(),
        '，甚至可以说是妄信、盲信',
      ]);
      await era.printAndWait([
        '但同时，',
        you.get_colored_name(),
        ' 的内心也还是有着一丝惧怕',
      ]);
      await era.printAndWait([
        '万一自己死后，',
        tachyon.sex,
        '没有自己想的如此坚强怎么办',
      ]);
      await era.printAndWait([
        '万一',
        tachyon.sex,
        '并没有',
        tachyon.sex,
        '自己想的那般坚强怎么办',
      ]);
      await era.printAndWait([
        '所以，这是 ',
        you.get_colored_name(),
        ' 为了以防万一所设下的枷锁',
      ]);
      era.println();
      await era.printAndWait([
        '虽然不觉得自己对',
        tachyon.sex,
        '真的会有那么重要，但万一，假如，',
        tachyon.sex,
        '真的一蹶不振的话……那么这个枷锁，或者说，这个诅咒',
      ]);
      await era.printAndWait([
        '这个来自于',
        tachyon.sex,
        '曾经爱过的人的诅咒，会推动着',
        tachyon.sex,
        '继续前进，直到达到',
        tachyon.sex,
        '的理想为止',
      ]);
      await era.printAndWait([
        '如果说一切都是自己的自作多情，自己在',
        tachyon.sex,
        '心目中根本就没有占据那么大的份量，',
      ]);
      await era.printAndWait([
        '那就更好了，',
        tachyon.sex,
        '一定不会被区区的豚鼠所阻碍步伐，会坚持并坚定的继续前进',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 如此盼望着，举起试管喝了下去，然后……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 惊喜的看见，',
        tachyon.sex,
        '抬起头来，脸上带着一如往常的笑容',
      ]);
      await era.printAndWait([
        '这样就没问题了，',
        tachyon.sex,
        '一定，一定会继续坚持自己的道路…………',
      ]);
      era.setToBottom();
      await era.printAndWait('下个瞬间');
      era.setToBottom();
      await era.printAndWait([
        you.get_colored_name(),
        ' 感觉到，有什么东西触碰到了 ',
        you.get_colored_name(),
        ' 的嘴唇',
      ]);
      await era.printAndWait('柔软的、温热的、娇嫩的两瓣玫瑰');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，吻上了 ',
        you.get_colored_name(),
        ' 的唇',
      ]);
      era.println();
      await era.printAndWait([
        '非但如此，',
        tachyon.sex,
        '的舌头撬开了 ',
        you.get_colored_name(),
        ' 的双唇',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的舌头在 ',
        you.get_colored_name(),
        ' 的口中不停搅拌，索取',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的舌头留恋的舐过 ',
        you.get_colored_name(),
        ' 的齿间、',
        you.get_colored_name(),
        ' 的舌尖、',
        you.get_colored_name(),
        ' 的龈内————然而，这些都不是',
        tachyon.sex,
        '的目标',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的目标是————由于过于突然的发展，使 ',
        you.get_colored_name(),
        ' 没能反应过来，甚至都没能咽下的，',
        you.get_colored_name(),
        ' 口中的药剂',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 这才反应了过来，并慌忙想要阻止',
      ]);
      await era.printAndWait('但一切都已经来不及了');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 口中的药剂，已经被',
        tachyon.sex,
        '分走了大半',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 连询问',
        tachyon.sex,
        '为什么都已经顾不上了，只能连忙要抽出舌头，阻止',
        tachyon.sex,
        '的行为',
      ]);
      await era.printAndWait([
        '但是，人类在力量上终究是敌不过',
        tachyon.uma_sex_title,
        '的，即便是受了如此多实验的 ',
        you.get_colored_name(),
        '，也不例外',
      ]);
      era.println();
      await era.printAndWait('终于，这个彷佛有一世纪之久的吻结束了');
      await era.printAndWait([
        '分开的你们不停地喘着气，',
        you.get_colored_name(),
        ' 一边喘着一边想冲上前帮 ',
        tachyon.get_colored_name(),
        ' 催吐……却不由得停下了脚步',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        '脸上现在的表情、情绪，是 ',
        you.get_colored_name(),
        ' 所无法理解的',
      ]);
      await era.printAndWait('如果是高兴，那为什么脸上不断有泪珠滑落');
      await era.printAndWait([
        '如果是悲伤，为什么露出的又是 ',
        you.get_colored_name(),
        ' 从未见',
        tachyon.sex,
        '露出过的，堪称完美的笑容',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          '然后，在 ',
          you.get_colored_name(),
          ' 口中残存的药剂在此时忽然改变了味道，原来喝下去无色无味的药，现在的味道……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '没想到，最后一个吻的味道竟然是猪肉盖饭的味道啊',
          );
        } else {
          await tachyon.say_and_wait(
            '没想到，初吻的味道竟然是猪肉盖饭的味道啊',
          );
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 想起了情人节时收到的巧克力',
        ]);
        await era.printAndWait([
          '天天被灌药的自己，及以自己的反应为乐的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('多希望那段美好的时光能够永远持续');
        await era.printAndWait('多希望那杯红茶的香气可以恒久不变');
        await era.printAndWait('明明应该已经坚定了决心才对');
        await era.printAndWait('为什么现在却开始怀念起那样的日子了');
        era.println();
        await tachyon.say_and_wait([callname, '，抱歉啊，我骗了你']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 依旧维持着那副艳丽的笑容，脸上的眼泪也依然如珠般从脸上低落',
        ]);
        era.println();
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' 啊，其实，根本就不是那么厉害的',
          tachyon.uma_sex_title,
        ]);
        await tachyon.say_and_wait([
          '不是什么为了可能性能够放弃一切的',
          tachyon.uma_sex_title,
        ]);
        await tachyon.say_and_wait([
          '不是什么能够为了梦想而让心爱之人去死的',
          tachyon.uma_sex_title,
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 一边摇头一边说道，',
          you.get_colored_name(),
          ' 想说些什么，却不知为何开不了口',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……不，这么说或许也不对，应该说，',
          tachyon.sex,
          '曾经是这样的',
          tachyon.uma_sex_title,
        ]);
        await tachyon.say_and_wait([
          '但是，就如刚刚所说的一样，被豚鼠君改变了的公主，已经知道了爱为何物，所以……',
          tachyon.sex,
          '再也做不到了',
        ]);
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          '，说到底，也不过是个普通的',
          tachyon.child_sex_title,
          '子罢了',
        ]);
        await tachyon.say_and_wait([
          '因此，',
          tachyon.sex,
          '会陷入爱河，会担心受怕，害怕自己喜欢的人是不是也喜欢自己……',
        ]);
        await tachyon.say_and_wait(
          '害怕自己喜欢的人，眼中看到的，会不会其实并不是自己',
        );
        era.println();
        await era.printAndWait([
          '从头到尾，「',
          callname,
          '」看见的，被迷上的，都是「',
          tachyon.get_colored_name(),
          ' 的跑法」、「',
          tachyon.get_colored_name(),
          ' 的梦想」',
        ]);
        await era.printAndWait(['那……', tachyon.get_colored_name(), ' 呢？']);
        await era.printAndWait([
          '不……',
          tachyon.get_colored_name(),
          '……是谁？',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……啊，药效起效了啊…………原本还想再多说几句的',
        );
        era.println();
        await era.printAndWait([
          '眼前的',
          tachyon.teen_sex_title,
          '脸上的泪珠已经不再滑落，笑容却依然灿烂',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…………不过吗，至少，没有被甩，换句话说最起码还没有被拒绝，',
        );
        await tachyon.say_and_wait(
          '对吧？这样就够了……嗯，这样就够了，哈哈哈！',
        );
        era.println();
        await era.printAndWait('哈哈哈哈哈');
        await era.printAndWait([
          tachyon.teen_sex_title,
          '开怀大笑，',
          you.get_colored_name(),
          ' 看见',
          tachyon.sex,
          '大笑的模样，脑海中想到了某个身影……',
        ]);
        await era.printAndWait([
          '在自己喝下什么之后，「',
          tachyon.sex,
          '」似乎也总会看着自己哈哈大笑，',
        ]);
        await era.printAndWait([
          '「',
          tachyon.sex,
          '」叫什么名字？「',
          tachyon.sex,
          '」就是眼前的',
          tachyon.teen_sex_title,
          '吗？',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '对不起啦，',
          callname,
          '，折腾了你这么久，最后一切却都化为了泡影…',
        ]);
        await tachyon.say_and_wait([
          '但请当作 ',
          tachyon.get_colored_name(),
          ' 最后的一次任性吧……下次，千万别再迷上这么麻烦的',
          tachyon.phy_sex_title,
          '了',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          tachyon.get_colored_name(),
          '」、「',
          callname,
          '」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 拼命的想把这些似曾相似，有印象的名词记在脑海中，',
        ]);
        await era.printAndWait(
          '但大脑却彷佛被放进了滚筒洗衣机一般，记忆像污垢一样不断被洗刷干净',
        );
        await era.printAndWait([
          '就连眼前',
          tachyon.teen_sex_title,
          '的模样，也如消失在晨曦中的泡沫一样虚幻',
        ]);
        era.setToBottom();
        await tachyon.say_and_wait(['晚安，', callname, ' ']);
        era.setToBottom();
        await era.printAndWait([
          '听见这句话后，',
          you.get_colored_name(),
          ' 的意识陷入深渊',
        ]);
        era.setToBottom();
        era.drawLine();
        await tachyon.say_as_unknown_and_wait('……醒');
        await tachyon.say_as_unknown_and_wait('………醒醒');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' 醒来了']);
        await era.printAndWait([
          '被某个声音所唤醒的 ',
          you.get_colored_name(),
          '，发现自己睁开眼睛看见的是一个陌生的天花板',
        ]);
        era.printButton('「这里是哪里？」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait('……这里是我的实验室');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' 看向声音传来的方向']);
        await era.printAndWait([
          '眼前是一名栗毛的',
          tachyon.uma_sex_title,
          '，利落的短发以及身上的白大褂说明了',
          tachyon.sex,
          '研究者的身份，',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '用一种审视的眼光看着 ',
          you.get_colored_name(),
          '，不知为何，',
          you.get_colored_name(),
          ' 感到一股毛骨悚然',
        ]);
        era.printButton('「你是谁？」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '这个问题应该是我问你才对……你是什么人？为什么你会躺在我的实验室里？',
        );
        await era.printAndWait(['栗毛', tachyon.uma_sex_title, '说道']);
        await era.printAndWait([
          '这时 ',
          you.get_colored_name(),
          ' 才发现自己还躺在地板上，连忙爬了起来',
        ]);
        era.printButton(`「我是 ${you.actual_name}，是一名训练员」`, 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '…………哦？那么训练员君，你躺在这里又有何贵干',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 试着回想在躺在这里前 ',
          you.get_colored_name(),
          ' 究竟在做什么，却怎么也想不出来',
        ]);
        era.println();
        await tachyon.say_as_unknown_and_wait(
          '…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……',
        );
        await tachyon.say_as_unknown_and_wait([
          '算了，不提这个，总之，我是 ',
          tachyon.get_colored_name(),
          '，训练员君，请多指教',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name()]);
        await era.printAndWait([
          '听见这个名字，',
          you.get_colored_name(),
          ' 的内心彷佛漏了一拍一样',
        ]);
        await era.printAndWait('明明应该没听过这个名字');
        await era.printAndWait(['明明应该不认识这名', tachyon.uma_sex_title]);
        await era.printAndWait('但不知为何，却有种熟悉感');
        era.println();
        era.printButton('「我们……是不是在哪里见过？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '哦呀，这年头已经不流行这么老土的搭讪方式了哦，训练员君',
        );
        await era.printAndWait([
          tachyon.sex,
          '看着 ',
          you.get_colored_name(),
          ' 露出了恶作剧的笑容，',
          you.get_colored_name(),
          ' 连忙解释并非如此',
        ]);
        era.println();
        await tachyon.say_and_wait('开玩笑的……不知道为什么，我也有这种感觉');
        era.println();
        await era.printAndWait([
          '不知为何，身为训练员的直觉告诉 ',
          you.get_colored_name(),
          '，这名',
          tachyon.uma_sex_title,
          '绝对能够跑出使 ',
          you.get_colored_name(),
          ' 震撼的跑法来，',
        ]);
        await era.printAndWait([
          '但同时，又有个画面在 ',
          you.get_colored_name(),
          ' 的脑海中不断浮现，似乎是这名叫做 ',
          tachyon.get_colored_name(),
          ' 的',
          tachyon.uma_sex_title,
          '……',
        ]);
        await era.printAndWait('在不停索要便当的模样？？？');
        await era.printAndWait([
          '回过神时，',
          you.get_colored_name(),
          ' 已经向',
          tachyon.sex,
          '提出了签约',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…………我说啊，一般会这么突然的就提出契约吗？这可是关系到',
          tachyon.uma_sex_title,
          '一生的事情，你不觉得应该更认真点对待吗？',
        ]);
        era.printButton('「我有种感觉，我们一定会很合拍的」', 1);
        await era.input();
        await era.printAndWait([
          '当 ',
          you.get_colored_name(),
          ' 说完后，觉得一切都完了',
        ]);
        await era.printAndWait(
          '到底在想什么，虽然觉得对方有些即视感，但一般是不会这么突然提出签约的吧！！',
        );
        await era.printAndWait(
          '这下完蛋了，不但会被拒绝，说不定还会被狠狠嘲笑一番…………',
        );
        era.println();
        await era.printAndWait([
          '果不其然，名为 ',
          tachyon.get_colored_name(),
          ' 的',
          tachyon.uma_sex_title,
          '听完后愣了下，然后哈哈大笑，接着……',
        ]);
        await tachyon.say_and_wait('可以哦');
        era.println();
        await era.printAndWait('看吧，果然………………');
        await era.printAndWait('？？？？？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 忍不住带着满脸的问号看着对方',
        ]);
        await era.printAndWait([
          '只看',
          tachyon.sex,
          '擦了擦眼角笑出的泪水说道',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '不知道为什么，我也有这种感觉……虽然这种感觉的源头究竟为何一定要查清，',
        );
        await tachyon.say_and_wait(
          '但我认为，你不是个坏人，在此之上，绝对会是个很有趣的人……',
        );
        await tachyon.say_and_wait(
          '呵呵，所以，请多指教吧，训练员…………不，豚鼠君',
        );
        era.println();
        await era.printAndWait('「豚鼠君」');
        await era.printAndWait([
          tachyon.sex,
          '忽然改口的称呼，让人感到有些莫名其妙，甚至有些害怕……',
        ]);
        await era.printAndWait([
          '毕竟豚鼠这个称呼，一般应该不算是什么好称呼吧，加上',
          tachyon.sex,
          '这一幅研究狂人的模样…………',
        ]);
        await era.printAndWait([
          '但除此之外，',
          you.get_colored_name(),
          ' 还感受到了一丝的亲切感',
        ]);
        era.printButton('「请多指教，爱丽速…………速子」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_actual_name(),
          ' 认识了 ',
          tachyon.get_colored_name(),
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '74-reject-2': (() => {
    const title = '时光倒流';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, taste, minoru, you) => {
      await era.printAndWait('仿佛顺理成章一般');
      await era.printAndWait([
        you.get_colored_name(),
        ' 和莫名有着熟悉感的栗毛',
        tachyon.uma_sex_title,
        '———',
        tachyon.get_colored_name(),
        ' 签订了契约',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 想着必须要去登记契约才行，于是前去找了 ',
        minoru.get_colored_name(),
        ' 与 ',
        taste.get_colored_name(),
      ]);
      await era.printAndWait([
        '…………为什么',
        minoru.couple_title,
        '会以一种悲伤的眼神看着自己',
      ]);
      await minoru.say_and_wait('我能理解，又是那孩子的药吧……');
      await era.printAndWait('什么意思，那孩子是谁？');
      await taste.say_and_wait([
        '节哀！相信 ',
        you.actual_name,
        ' 训练员一定会很快恢复记忆的',
      ]);
      await era.printAndWait([
        '这又是什么意思……',
        minoru.couple_title,
        '知道 ',
        you.get_colored_name(),
        ' 失忆了？难道说 ',
        you.get_colored_name(),
        ' 失忆或发生同等级的意外其实是很常见的事吗？',
      ]);
      era.println();
      await era.printAndWait('不明所以……就当成这样吧');
      await era.printAndWait([
        '总之，',
        you.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 的育成开始了！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-reject-3': (() => {
    const title = '停滞的时钟';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        '那么……首先就先来实验搭档上的磨合吧，',
        callname,
        '，要看好我的跑法啊，呵呵',
      ]);
      era.println();
      await era.printAndWait('果然……有什么不对劲');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的跑法，在看着',
        tachyon.sex,
        '奔跑的模样时察觉到了',
      ]);
      await era.printAndWait('明明跑的很快，明明是十分令人惊艳的跑法');
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 没有功夫去思考这些',
      ]);
      await era.printAndWait('没错，很快，很耀眼，但好象又不只这些');
      await era.printAndWait('好像……曾经见识过类似的跑法');
      await era.printAndWait([
        '仿佛水面的光源一般，在 ',
        you.get_colored_name(),
        ' 的脑海深处不断撩拨着，',
      ]);
      await era.printAndWait([
        '却总在 ',
        you.get_colored_name(),
        ' 努力游上水面的瞬间又消失的无影无蹤',
      ]);
      era.println();
      await you.say_and_wait('好奇怪……', true);
      era.println();
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 苦恼的抓着头的时候………',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('训练场上，忽然状况横生');
      await era.printAndWait([
        '说着只是让自己见识见识跑法的 ',
        tachyon.get_colored_name(),
        '，渐渐的，跑的越来越快',
      ]);
      await era.printAndWait('刚才那样……只是热身而已吗？');
      await era.printAndWait([
        '穿着普通体育服的 ',
        tachyon.get_colored_name(),
        '，在训练场上轻盈的奔跑着',
      ]);
      await era.printAndWait('越跑越快，越跑越快');
      await era.printAndWait([
        '不知为何，',
        you.get_colored_name(),
        ' 的心中忽然感到一阵急迫',
      ]);
      await era.printAndWait('一种焦急，以及一种迫切感');
      era.println();
      await era.printAndWait([
        '跑的这么快，',
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        '的腿，不会有问题吗？',
      ]);
      await era.printAndWait('……？为什么会有问题？');
      await era.printAndWait(['因为，', tachyon.sex, '的腿……']);
      await era.printAndWait([tachyon.sex, '的腿明明……那么脆弱']);
      await era.printAndWait(['为什么自己会知道', tachyon.sex, '的腿脆弱']);
      era.println();
      await era.printAndWait('不明白，但是，想要明白');
      await era.printAndWait([
        '想要搞清真相的迫切感驱使着 ',
        you.get_colored_name(),
        ' 不停思考',
      ]);
      await era.printAndWait([
        '仿佛衬托着 ',
        you.get_colored_name(),
        ' 思考的速度一般',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), ' 也继续加速']);
      await era.printAndWait(['直到……', you.get_colored_name(), ' 的认知尽头']);
      await era.printAndWait('藏在脑海深处，最重要的东西');
      await era.printAndWait([tachyon.uma_sex_title, '的极限速度']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 所知的，',
        tachyon.uma_sex_title,
        '的极限',
      ]);
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        ' 的极限速度',
      ]);
      era.println();
      await era.printAndWait([
        '眼前的 ',
        tachyon.get_colored_name(),
        '，与脑海中那捉摸不定的光源渐渐结合在一起',
      ]);
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 最后一次尝试，朝着水面伸手',
      ]);
      await era.printAndWait('————————碰到了');
      await era.printAndWait('————————想起来了');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，是 ',
        you.get_colored_actual_name(),
        ' 的负责',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('回想起了相遇的事，比赛的事，还有……');
      era.println();
      await era.printAndWait('还有……？');
      await era.printAndWait('不知道');
      await era.printAndWait('忘记了');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，是自己的负责',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        you.get_colored_actual_name(),
        '，是 ',
        tachyon.get_colored_name(),
        ' 的豚鼠君',
      ]);
      await era.printAndWait('目前为止没有错误');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在比赛中的点点滴滴',
      ]);
      await era.printAndWait([tachyon.sex, '跑步的每个细节自己都记得一清二楚']);
      await era.printAndWait('但是……');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 喜欢什么']);
      await era.printAndWait([tachyon.get_colored_name(), ' 的生活习惯']);
      await era.printAndWait([tachyon.get_colored_name(), ' 的兴趣']);
      await era.printAndWait([tachyon.get_colored_name(), ' 的生活打扮']);
      await era.printAndWait(
        '除了不知为何残留在脑海中，或许是与比赛管理相关而留下的饮食喜好相关，',
      );
      await era.printAndWait('其他的一切都仿佛从来没接触过一般');
      era.println();
      await era.printAndWait('不自然');
      await era.printAndWait('只能感到不自然');
      await era.printAndWait('认识了这么久，有过如此多的接触交流');
      await era.printAndWait([
        '对',
        tachyon.sex,
        '的比赛和跑法能够如此如数家珍',
      ]);
      await era.printAndWait([
        '却仍然好像对 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '没有任何了解一般',
      ]);
      era.println();
      await tachyon.say_and_wait(['呼……那么，豚鼠君，觉得如何？']);
      era.printButton('「跑的很好！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 下意识的回答了记忆中多次回覆过的答案',
      ]);
      await era.printAndWait('总觉得有些奇怪');
      await era.printAndWait('不理解到底发生了什么');
      await era.printAndWait('但是……');
      era.println();
      await era.printAndWait('在回忆起那些的瞬间');
      await era.printAndWait('心中很确信，一定听见了一句话');
      era.println();
      era.printButton(`「这一次，不要再辜负${tachyon.sex}的心意了」`, 1);
      await era.input();
      await era.printAndWait('究竟是什么意思呢……好好思考一下吧');
    };
    f.title = title;
    return f;
  })(),
  '74-betray': (() => {
    const title = [{ color: buff_colors[3], content: '魔女之药' }];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([you.get_colored_name(), ' 忽然觉得累了']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 把药剂塞回 ',
        tachyon.get_colored_name(),
        ' 的手上',
      ]);
      era.println();
      await tachyon.say_and_wait(['…………', callname, '？']);
      era.printButton('「我累了，要喝你自己喝吧」', 1);
      await era.input();
      await era.printAndWait('是从什么时候开始的？原因是什么？');
      await era.printAndWait([
        '或许是 ',
        you.get_colored_name(),
        ' 再也受不了 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '的任性了',
      ]);
      await era.printAndWait([
        '或许是 ',
        you.get_colored_name(),
        ' 已经对 ',
        tachyon.get_colored_name(),
        ' 失去耐心了',
      ]);
      await era.printAndWait([
        '又或许 ',
        you.get_colored_name(),
        ' 觉得这只是',
        tachyon.sex,
        '又一次的玩笑而已',
      ]);
      await era.printAndWait([
        '说到底，因为',
        tachyon.sex,
        '的原因就想让自己去死，这个家伙在开什么玩笑啊',
      ]);
      era.println();
      await era.printAndWait([
        '总之，',
        you.get_colored_name(),
        ' 把药推还给了',
        tachyon.sex,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 不在乎这种药是不是真的能致人于死地',
      ]);
      await era.printAndWait('不，要是真的制人于死地那或许也不错吧');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的内心甚至产生了如此阴暗的想法',
      ]);
      era.println();
      await tachyon.say_and_wait('…………啊，这样啊……我明白了');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 没有做出什么过于激烈的反应',
      ]);
      await era.printAndWait([
        '比起往常的',
        tachyon.sex,
        '，可说是异常的举止反而让 ',
        you.get_colored_name(),
        ' 提起了点兴致',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见终于抬起了头的',
        tachyon.sex,
        '，露出了一张释怀、解脱般的笑容',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……说的也是，解决这个问题的答案，一直都不只两个啊',
      );
      await tachyon.say_and_wait(
        '在生与死之外，还存在着第三个选项，也就是让出题者去死，对吧？',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 忍不住皱起了眉头']);
      await era.printAndWait('废话好多，到底喝不喝');
      await era.printAndWait([
        '……不，说到底这个一向习惯灌别人药的',
        tachyon.phy_sex_title.substring(0, 1),
        '人',
      ]);
      await era.printAndWait('根本就没想过自己喝下药剂吧');
      await era.printAndWait([
        you.get_colored_name(),
        ' 叹了口气，感叹这又一场的闹剧，准备离开实验室',
      ]);
      era.drawLine();
      await era.printAndWait([
        '然后，在 ',
        you.get_colored_name(),
        ' 准备转身离开的瞬间',
      ]);
      era.println();
      await tachyon.say_and_wait('咕呜………！');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 被强吻了']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 想要挣扎，但人类终究还是敌不过',
        tachyon.uma_sex_title,
        '的力量，即便是被药物改造过多次的 ',
        you.get_colored_name(),
        ' 也一样',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的舌头撬开了 ',
        you.get_colored_name(),
        ' 的唇，在 ',
        you.get_colored_name(),
        ' 的口中不停搅拌，引导',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的舌头留恋的舐过 ',
        you.get_colored_name(),
        ' 的齿间、',
        you.get_colored_name(),
        ' 的舌尖、',
        you.get_colored_name(),
        ' 的龈内————然而，这些都不是',
        tachyon.sex,
        '的目标',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的目标是————将口中尚未咽下的，那足以使人「消失」的药物，引导至 ',
        you.get_colored_name(),
        ' 的口中',
      ]);
      era.println();
      await you.say_and_wait('咕呜……！呜呜呜………！！！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 拼命挣扎，扭动身躯，却无法阻止对方的行为',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 徒劳无功的挣扎下，药剂还是被 ',
        you.get_colored_name(),
        ' 们两人平分干净了',
      ]);
      era.println();
      await you.say_and_wait('该死……！');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 忍不住大骂出声']);
      await era.printAndWait([
        '这个',
        tachyon.phy_sex_title.substring(0, 1),
        '在想什么，要死还要拖一个垫背的吗',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 恶狠狠的瞪着',
        tachyon.sex,
        '，马上就要破口大骂……却在话语要吐出的瞬间停住了',
      ]);
      era.println();
      era.println();
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 哭了']);
      await era.printAndWait([
        '不……准确来讲，',
        tachyon.sex,
        '正流着泪水，也很努力的想要挤出笑容，但最终脸上露出的，却是张比哭还要难看的笑容',
      ]);
      await era.printAndWait([
        '这是 ',
        you.get_colored_name(),
        ' 认识',
        tachyon.sex,
        '以来，第一次看到',
        tachyon.sex,
        '如此狼狈的模样',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '哈……哈哈哈，',
        callname,
        '，抱歉，我骗了你',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '试图装出若无其事的口气来，但哽咽的声音却使得这一行为变得无比困难',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '这个啊，才不是什么毒药…………相反的，这是个『重新开始』的药哦',
      );
      era.println();
      await era.printAndWait([
        '虽然',
        tachyon.sex,
        '这么说，但',
        tachyon.sex,
        '依然举着试管的那只手，现在却在不住的颤抖着，使得 ',
        you.get_colored_name(),
        ' 无法信任',
        tachyon.sex,
        '的话语',
      ]);
      era.println();
      await era.printAndWait('…………不相信对吧？没关系，等到药效发作就知道了');
      era.println();
      await era.printAndWait('开什么玩笑……！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 想这么喊出声，却发现自己的身体已经变得动弹不得',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          '然后，在 ',
          you.get_colored_name(),
          ' 口中残存的药剂在此时忽然改变了味道，原来喝下去无色无味的药，现在的味道……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '没想到，最后一个吻的味道竟然是猪肉盖饭的味道啊',
          );
        } else {
          await tachyon.say_and_wait(
            '没想到，初吻的味道竟然是猪肉盖饭的味道啊',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' 想起了情人节时收到的巧克力',
        ]);
        await era.printAndWait([
          '从那时开始，这名',
          tachyon.uma_sex_title,
          '就不断的在用这些奇怪的药物折磨着自己',
        ]);
        await era.printAndWait('每次都看着自己喝下药物的反应哈哈大笑来取乐');
        await era.printAndWait(
          '事到如今，不想再忍耐这一切的自己又有什么错了？',
        );
      }
      await era.printAndWait([
        '确实，在一开始 ',
        you.get_colored_name(),
        ' 确实对 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '的跑法，及',
        tachyon.sex,
        '的梦想感到有趣',
      ]);
      await era.printAndWait([
        '确实，',
        you.get_colored_name(),
        ' 曾经真心希望能够帮助',
        tachyon.sex,
        '，守护',
        tachyon.sex,
        '，直到',
        tachyon.sex,
        '完成梦想为止',
      ]);
      await era.printAndWait(['但是，', you.get_colored_name(), ' 已经受够了']);
      await era.printAndWait([
        '对',
        tachyon.sex,
        '的愤怒、不满、沮丧、厌恶堆积起来的重量，已经超越了天平另一端对',
        tachyon.sex,
        '的期望、喜爱、憧憬',
      ]);
      era.println();
      await era.printAndWait([
        '现在的 ',
        you.get_colored_name(),
        ' 只是希望能够尽快摆脱这名',
        tachyon.uma_sex_title,
        '，结果还得被灌这样的毒药，',
      ]);
      await you.say_and_wait(
        '我可没功夫跟你这种家伙玩罗密欧与朱丽叶的游戏啊！',
        true,
      );
      await era.printAndWait([
        '但说不出话的 ',
        you.get_colored_name(),
        ' 只能默默的听着 ',
        tachyon.get_colored_name(),
        ' 说完，最起码，用恶毒的视线盯着 ',
        tachyon.get_colored_name(),
        '，作为发泄不满的管道',
      ]);
      era.println();
      await tachyon.say_and_wait('说实话，我真的很害怕');
      await tachyon.say_and_wait(
        '喜欢一个人，却不知道对方是不是喜欢自己的感觉真的，好可怕',
      );
      await tachyon.say_and_wait(
        '比任何的实验结果都还要让人心潮澎湃，比任何的比赛结果都还要使人心跳加速',
      );
      await tachyon.say_and_wait('说实话，我真的很害怕');
      await tachyon.say_and_wait(
        '要是对方喜欢的不是自己，而只是自己所有的『某些东西』，',
      );
      await tachyon.say_and_wait(
        '那该怎么办。要是对方眼中看到的，只是自己的『梦想』，而非自己这个人怎么办',
      );
      await tachyon.say_and_wait(
        '我啊，一直都在担心着这些……却忘记了，最重要的事情，最恐怖的可能性',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 露出了嗤笑，嘲笑着太过天真、乐观的自己',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '对方，根本就不喜欢自己，不喜欢自己的一切，包括但不限于梦想的可能性',
      );
      era.println();
      await era.printAndWait([
        '终于，',
        tachyon.get_colored_name(),
        ' 脸上的笑容——如果那能够称为笑容的话——崩溃了',
      ]);
      await era.printAndWait('化为了彻底的哭脸');
      era.println();
      await tachyon.say_and_wait(
        '原来……这就是失恋的感觉啊……呜……好难受……好可怕……心好像要碎了一样……',
      );
      await tachyon.say_and_wait(
        '原来是这样啊……我被甩了啊……好痛……我的心好痛……',
      );
      await tachyon.say_and_wait(
        '为什么……为什么明明只是不被一个人喜欢……为什么心会这么难受……呜呜呜……我不要……',
      );
      await tachyon.say_and_wait(
        '不要啊……早知道会这么痛的话我就不要恋爱了啊……下一次，下一次……不要了……再也不要了……好痛……',
      );
      await tachyon.say_and_wait([
        callname,
        '……',
        callname,
        '……你在哪里……为什么我找不到你……你去哪里了……',
      ]);
      await tachyon.say_and_wait([
        '为什么我这么痛苦的时候你却不在我身边……',
        callname,
        '……我再也不拿你做实验了……都是我不好……所以……所以回来好不好……',
      ]);
      await tachyon.say_and_wait(
        '这里好可怕……带我回去，回去我们的实验室……我再也不会任性了……',
      );
      await tachyon.say_and_wait([
        '衣服会自己洗……便当盒吃完不会再到处乱丢了……',
        callname,
        '……',
        callname,
        '…………',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着 ',
        tachyon.get_colored_name(),
        '，从中途开始就彷佛忘掉了自己是谁一般',
      ]);
      await era.printAndWait([
        '明明眼中在看着自己，却还在一直喊着 ',
        callname,
        '，彷佛在寻找不属于此处的某人一样',
      ]);
      await era.printAndWait(['不……', callname, '……？']);
      await era.printAndWait([
        '这是谁？',
        you.get_colored_name(),
        ' 明明从来没听过这个名字不是吗？',
      ]);
      await era.printAndWait([
        '眼前的这名',
        tachyon.uma_sex_title,
        '又是谁，自己认识',
        tachyon.sex,
        '吗',
      ]);
      era.println();
      await era.printAndWait('头痛，头痛，头痛欲裂');
      await era.printAndWait('越是思考，忘掉的就越多');
      era.println();
      await era.printAndWait([
        '终于，在一声声呼喊着 ',
        callname,
        ' 的悲鸣声中，',
        you.get_colored_name(),
        ' 的意识陷入了深渊',
      ]);
      era.setToBottom();

      await tachyon.say_as_unknown_and_wait('……醒');
      await tachyon.say_as_unknown_and_wait('………醒醒');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 醒来了']);
      await era.printAndWait([
        '被某个声音所唤醒的 ',
        you.get_colored_name(),
        '，发现自己睁开眼睛看见的是一个陌生的天花板',
      ]);
      era.printButton('「这里是哪里？」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait('……这里是我的实验室');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 看向声音传来的方向']);
      await era.printAndWait([
        '眼前是一名栗毛的',
        tachyon.uma_sex_title,
        '，利落的短发以及身上的白大褂说明了',
        tachyon.sex,
        '研究者的身份，',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '用一种审视的眼光看着 ',
        you.get_colored_name(),
        '，不知为何，',
        you.get_colored_name(),
        ' 感到一股毛骨悚然',
      ]);
      era.printButton('「你是谁？」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '这个问题应该是我问你才对……你是什么人？为什么你会躺在我的实验室里？',
      );
      await era.printAndWait(['栗毛', tachyon.uma_sex_title, '说道']);
      await era.printAndWait([
        '这时 ',
        you.get_colored_name(),
        ' 才发现自己还躺在地板上，连忙爬了起来',
      ]);
      era.printButton(`「我是 ${you.actual_name}，是一名训练员」`, 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '…………哦？那么训练员君，你躺在这里又有何贵干',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 试着回想在躺在这里前 ',
        you.get_colored_name(),
        ' 究竟在做什么，却怎么也想不出来',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait(
        '…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……',
      );
      await tachyon.say_as_unknown_and_wait([
        '算了，不提这个，总之，我是 ',
        tachyon.get_colored_name(),
        '，训练员君，请多指教',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name()]);
      await era.printAndWait([
        '听起来真是个奇怪的名字……嘛，毕竟',
        tachyon.uma_sex_title,
        '的名字大多都是这样的，歧视他人的姓名也不好',
      ]);
      await era.printAndWait([
        '但不知为何，有种直觉在告诉 ',
        you.get_colored_name(),
        '，和眼前的这名',
        tachyon.uma_sex_title,
        '要保持距离',
      ]);
      era.println();
      era.printButton(
        `「那么，今天就先到这里吧，非常抱歉闯进了你的实验室，日后我会再来致上歉意，${tachyon.name} 同学」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…………不，不必了，说到底两人同时失忆这种事情……',
      );
      await tachyon.say_and_wait(
        '算了，就这样吧，后面也不用特别过来了，训练员君',
      );
      era.println();
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 离开了 ',
        tachyon.get_colored_name(),
        ' 的实验室',
      ]);
      await era.printAndWait([
        '在离开门之前，',
        you.get_colored_name(),
        ' 忽然回过了头',
      ]);
      era.println();
      await tachyon.say_and_wait('嗯？训练员君，还有什么事吗？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 有种预感，要是自己踏出了这扇门，大概，就再也不会与这名',
        tachyon.uma_sex_title,
        '有所交集了吧',
      ]);
      era.println();
      await you.say_and_wait('没什么，是我多心了吧');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 走出了实验室的门，这次没有丝毫犹豫',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Now or Forever';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} scarlet 大和赤骥
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} shakur 空中神宫
     * @param {CharaTalk} pocket 森林宝穴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} t_call_s 爱丽速子对空中神宫的称呼
     * @param {PrintedSpan} t_call_p 爱丽速子对森林宝穴的称呼
     */
    const f = async (
      tachyon,
      scarlet,
      digital,
      coffee,
      shakur,
      pocket,
      you,
      callname,
      t_call_c,
      t_call_s,
      t_call_p,
    ) => {
      await tachyon.say_and_wait([callname, '～～']);
      await tachyon.say_and_wait([callname, '～～～？']);
      await tachyon.say_and_wait([callname, '！！']);
      await tachyon.say_and_wait([
        callname,
        '…………啊，',
        callname,
        ' 今天好像不在来着',
      ]);
      await tachyon.say_and_wait([
        '咕……但这药不趁新鲜试药效就没了啊，没办法了，',
        t_call_c,
        '～～',
      ]);
      await tachyon.say_and_wait(['…………欸，', t_call_c, '也不在吗！？']);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 在实验室里装傻般说道',
      ]);
      await tachyon.print_and_wait([
        '只可惜，实验室里没有任何能够吐槽',
        tachyon.sex,
        '的人在',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ' 也就算了……',
        t_call_c,
        ' 怎么也不在啊……或者 ',
        t_call_p,
        '……',
        t_call_s,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '仔细想想，不仅仅是 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        pocket.get_colored_name(),
        '、',
        shakur.get_colored_name(),
        '、',
        digital.get_colored_name(),
        '，甚至自己疼爱的后辈 ',
        scarlet.get_colored_name(),
        ' 最近都很少见到了',
      ]);
      await tachyon.print_and_wait([
        '其原因……聪明的 ',
        tachyon.get_colored_name(),
        '，凭着',
        tachyon.sex,
        '的惊世智慧，以及超我的客观判断力，自然能够轻松的猜出来',
      ]);
      await tachyon.print_and_wait('没错……');
      era.println();
      await tachyon.say_and_wait([
        '……果然，是因为我一直在谈 ',
        callname,
        ' 的事吧',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '其实，也不只是谈自己那昵称为豚鼠的爱人的事，或者更准确来说，是与爱人之间的情事，直白一点来讲那便是，秀恩爱',
      );
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.print_and_wait([
          '如果说这样的话题只停留在情话及暧昧感情等级的话，那么想必身边人，最起码 ',
          scarlet.get_colored_name(),
          ' 及 ',
          digital.get_colored_name(),
          ' 绝对会很乐意一听的吧，',
        ]);
        await tachyon.print_and_wait([
          '但话题往往总是会进入到床事间的部分，这也怪不得一听见类似话题就满脸通红的',
          tachyon.couple_title,
          '了',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        '连 ',
        coffee.get_colored_name(),
        ' 都忍不住发问',
      ]);
      await tachyon.print_and_wait('为什么要这样一刻不停的炫耀着感情');
      era.println();
      await tachyon.say_and_wait('……可是，就是忍不住嘛');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 在无人的空间内喃喃说道',
      ]);
      era.println();
      await tachyon.print_and_wait('与心爱之人接吻的喜悦');
      await tachyon.print_and_wait('与宿命之人相拥的热情');
      await tachyon.print_and_wait('与良缘之人缠绵的温存');
      await tachyon.print_and_wait('与相守之人眷恋的爱意');
      era.println();
      await tachyon.print_and_wait('这些感情，这些话语，要是不对人倾诉的话');
      await tachyon.print_and_wait('自己就要被这庞大的热量从内而外的烧尽了');
      era.println();
      await tachyon.print_and_wait('好喜欢');
      await tachyon.print_and_wait('好可爱');
      await tachyon.print_and_wait('好帅气');
      await tachyon.print_and_wait('好迷人');
      await tachyon.print_and_wait('好英俊');
      await tachyon.print_and_wait('好潇洒');
      await tachyon.print_and_wait('好色气');
      await tachyon.print_and_wait('好魔性');
      era.println();
      await tachyon.print_and_wait([
        '任何的形容词套用在',
        you.sex,
        '身上都不为过',
      ]);
      await tachyon.print_and_wait([
        '对于理智的 ',
        tachyon.get_colored_name(),
        ' 而言，痴迷于恋爱这无疑是件愚蠢的事',
      ]);
      await tachyon.print_and_wait(
        '事实上，内心里也一直有个声音在耻笑着，耻笑露出如此蠢样的自己',
      );
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.print_and_wait('如果说理智就是要抛弃这样的感情');
      await tachyon.print_and_wait([
        '如果说客观就是要降低对',
        you.sex,
        '的爱情',
      ]);
      era.println();
      await tachyon.print_and_wait('那么，自己宁愿放弃理智');
      await tachyon.print_and_wait('化作在情欲的火焰中舞蹈的小丑');
      era.println();
      await tachyon.say_and_wait('啊啊……我，一定是疯了吧');
      era.println();
      await tachyon.print_and_wait('没有错');
      await tachyon.print_and_wait('这样的自己一定是疯了');
      await tachyon.print_and_wait(
        '即便不提以前的自己，跟一般意义上社会的情侣相比，自己的爱也达到了一种疯癫的程度',
      );
      await tachyon.print_and_wait('但是，疯不疯的，不是早就有了定数了吗');
      era.println();
      await tachyon.print_and_wait([
        '全世界都知道，',
        tachyon.get_colored_name(),
        ' 是一名疯狂的',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait([
        '但是 ',
        tachyon.get_colored_name(),
        ' 不在乎全世界',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        '知道，',
        tachyon.get_colored_name(),
        ' 是这样的',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait([
        '而 ',
        tachyon.get_colored_name(),
        ' 只在乎',
        you.sex,
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 只害怕一件事，那就是自己会被',
        you.sex,
        '讨厌',
      ]);
      await tachyon.print_and_wait(['自己的行径与', you.sex, '般配吗？']);
      await tachyon.print_and_wait(['自己的爱意', you.sex, '会喜欢吗？']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，是能够与',
        you.sex,
        '共同扶持，一起走下去的人吗',
      ]);
      era.println();
      await tachyon.print_and_wait('啊啊，说到底也就是这么回事而已');
      era.println();
      await tachyon.print_and_wait('燃烧的爱是耀眼的，也是稍纵即逝的');
      await tachyon.print_and_wait('那样的爱，是不持续的');
      await tachyon.print_and_wait('现在的自己，不过就是困于火光之中的飞蛾');
      era.println();
      await tachyon.print_and_wait('想要');
      await tachyon.print_and_wait('想要');
      await tachyon.print_and_wait('想要恒久的爱，想要永恒的爱');
      await tachyon.print_and_wait('想要钻石一般，永恒且闪耀的爱');
      await tachyon.print_and_wait(['想要理所当然陪伴在', you.sex, '身旁的爱']);
      era.println();
      await tachyon.print_and_wait('但是，这样的自己真的可以吗');
      await tachyon.print_and_wait('真的是能够托付一生的对象吗？');
      await tachyon.print_and_wait([you.sex, '愿意承诺，永远爱着这样的自己吗']);
      await tachyon.print_and_wait([
        '自己有办法，永远爱着这样的',
        you.sex,
        '吗',
      ]);
      era.println();
      tachyon.say('我……');
      era.printButton('选择永恒（升级关系）', 1, {
        buttonType: '',
        color: tachyon.color,
      });
      era.printButton('继续燃烧（暂不升级）', 2, {
        buttonType: '',
        color: tachyon.color,
      });
      const ret = await era.input();
      if (ret === 1) {
        await tachyon.print_and_wait(['与', you.sex, '并肩']);
        await tachyon.print_and_wait(['与', you.sex, '携手']);
        await tachyon.print_and_wait(['与', you.sex, '建立家庭']);
        await tachyon.print_and_wait(['与', you.sex, '产下生命']);
        era.println();
        await tachyon.print_and_wait('想要……安定，且平稳的爱');
        await tachyon.print_and_wait('答案简单的自己都吓了一跳');
        era.println();
        await tachyon.print_and_wait([
          '下班回家后，看见已经在家门口等待着自己的',
          you.sex,
        ]);
        await tachyon.print_and_wait([
          '如果是自己提早下班，就准备好料理等待',
          you.sex,
          '的归来',
        ]);
        await tachyon.print_and_wait([
          '虽然自己并不擅长料理，但为了',
          you.sex,
          '，',
          tachyon.get_colored_name(),
          ' 愿意将曾经发誓奉献于研究的双手用于炒菜煮饭',
        ]);
        await tachyon.print_and_wait('假日两人一起出门，去哪里都可以');
        await tachyon.print_and_wait(
          '公园、家具行，又或者实验用具店、化工药品店',
        );
        await tachyon.print_and_wait([
          '和',
          you.sex,
          '因为沙发的摆放位置这种芝麻蒜皮小事而吵架',
        ]);
        await tachyon.print_and_wait(
          '直到晚上都不肯承认错误的别扭的两人，最后因为不知谁主动的一个温暖的拥抱而重新言归于好',
        );
        await tachyon.print_and_wait([
          '在新居落成的当天，一定会很累吧，哪怕是',
          tachyon.uma_sex_title,
          '的体力大概也会支撑不住',
        ]);
        await tachyon.print_and_wait([
          '明明想要在好不容易落成的新家里好好温存，结果却直接倒在',
          you.sex,
          '怀中就这么睡着了',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await tachyon.print_and_wait('怀孕的那天，他绝对会很惊喜吧');
          await tachyon.print_and_wait(
            '但是不能这么突然的告诉他，不然他到时候放出的强光会被邻居责怪扰民的',
          );
          await tachyon.print_and_wait('找个好时机，在白天吃早餐的时候');
          await tachyon.print_and_wait(
            '用若无其事的口气说出「亲爱的，你要当爸爸了♡」',
          );
          await tachyon.print_and_wait('到时候的他会是什么表情呢？');
          await tachyon.print_and_wait(
            '想要在孩子出生后，带着孩子一起看我们的照片',
          );
          await tachyon.print_and_wait('看当年的我是怎么被原实验体给迷住的');

          await tachyon.print_and_wait(
            '大概，孩子一定会觉得爸爸很可怜吧，被妈妈这样欺负',
          );
          await tachyon.print_and_wait('不过在床上被欺负的都是妈妈就是了♡');
          await tachyon.print_and_wait(
            '想在孩子长大成家后，安慰在被窝里默默哭泣的他',
          );
          await tachyon.print_and_wait(
            '……或许是反过来也说不定呢，说不定，我其实会是个意外疼爱孩子的母亲',
          );
          era.println();
        }
        await tachyon.print_and_wait([
          '不是因为有趣所以才选择与',
          you.sex,
          '在一起',
        ]);
        await tachyon.print_and_wait([
          '而是与',
          you.sex,
          '在一起的每一天都如此有趣',
        ]);
        await tachyon.print_and_wait('哪怕是这样无聊平淡的日常');
        await tachyon.print_and_wait([
          '只要一想到陪在身边的人是',
          you.sex,
          '，就不禁感到无比的期待了',
        ]);
        era.println();
        await you.say_and_wait('速子！听说你找我，有什么事吗？');
        era.println();
        await tachyon.print_and_wait('是哪个好心人通知的吗？还是心有灵犀？');
        await tachyon.print_and_wait('那都无所谓');
        await tachyon.print_and_wait('好好思考吧，该怎么说出口呢？');
        await tachyon.print_and_wait('嗯……就这样吧');
        era.println();
        await tachyon.say_and_wait([
          callname,
          '，我在想，我们是不是……也该踏入下个阶段了？',
        ]);
        await tachyon.print_and_wait('说出口的瞬间仿佛听见了，教堂的钟声');
      } else {
        await tachyon.print_and_wait('永恒……吗？');
        era.println();
        await tachyon.print_and_wait('不知道');
        await tachyon.print_and_wait('不敢想');
        era.println();
        await tachyon.print_and_wait('自己有办法成为那样的陪伴者吗');
        await tachyon.print_and_wait([
          '有办法陪伴着',
          you.sex,
          '度过一辈子的时光吗',
        ]);
        era.println();
        await tachyon.print_and_wait([
          '说到底，',
          tachyon.get_colored_name(),
          ' 这名',
          tachyon.phy_sex_title,
          '，真的有办法成为那样的陪伴者，那样的伴侣，那样的……',
        ]);
        await tachyon.print_and_wait('爱人吗？');
        era.println();
        await tachyon.print_and_wait('不会做饭的自己');
        await tachyon.print_and_wait('沉浸于自我的自己');
        await tachyon.print_and_wait('性格懒散的自己');
        await tachyon.print_and_wait('没有耐心的自己');
        era.println();
        await tachyon.print_and_wait('现在或许还能接受吧');
        await tachyon.print_and_wait('那未来呢');
        await tachyon.print_and_wait('十年后呢？');
        await tachyon.print_and_wait('二十年后呢？');
        await tachyon.print_and_wait('六十年、七十年后呢？');
        era.println();
        await tachyon.print_and_wait('这样的感情，真的有办法永恒下去吗？');
        era.println();
        await tachyon.print_and_wait('不知道');
        await tachyon.print_and_wait('不敢想');
        era.println();
        await you.say_and_wait('速子！听说你找我，有什么事吗？');
        era.println();
        await tachyon.print_and_wait(
          '是哪个多事的人通知的吗？还是不凑巧的心有灵犀',
        );
        await tachyon.print_and_wait('……那都无所谓');
        await tachyon.print_and_wait('压抑吧，冷藏吧，封印吧');
        await tachyon.print_and_wait('将自己的可笑想法封印');
        era.println();
        await tachyon.say_and_wait('……没什么');
        era.println();
        await tachyon.print_and_wait(
          '让这名为爱情的熊熊火焰，继续以自己的担忧及不安为燃料燃烧下去',
        );
        await tachyon.print_and_wait(
          '这大概就是优柔寡断的自己必须承受的永恒责罚吧',
        );
        era.drawLine();
        await tachyon.print_and_wait([
          you.get_colored_name(),
          ' 摇了摇头，将内心的奇怪想法飘散，毫无犹豫的踏出了门外',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'Tachyon';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '，可以喊一下我的名字吗？']);
      era.println();

      await era.printAndWait(['名字？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 好奇地望着 ',
        tachyon.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '今天一进训练员室，就被 ',
        tachyon.get_colored_name(),
        ' 強迫压在沙发上。',
      ]);
      await era.printAndWait([
        '接着',
        tachyon.sex,
        '拉出了用来写训练计画的小白板，一副老师要开始讲课的模样，这……不知道又是玩哪一出。',
      ]);
      era.println();

      await tachyon.say_and_wait(['好啦，快点快点，喊一下。']);

      era.printButton('「爱丽速子」', 1);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '，自己独一无二的爱马的名字。',
      ]);
      await era.printAndWait([
        '听见后，',
        tachyon.get_colored_name(),
        ' 眯起了眼睛，仿佛十分受用的样子',
      ]);
      era.println();

      await tachyon.say_and_wait(['嗯……不错']);
      await tachyon.say_and_wait(['那么……你知道速子（tachyon）是什么意思吗？']);
      era.println();

      await era.printAndWait(['速子？']);

      era.printButton('「不知道……」', 1);
      era.printButton('「是……超光速的粒子吧？」', 2);

      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '唔……身为我的豚鼠最起码这种事情要掌握在心里才行哦。',
        );
      } else {
        await tachyon.say_and_wait('没错，算你及格吧。');
      }

      await tachyon.say_and_wait([
        '速子，是一种以超越光速的速度，在虚数时间内航行的粒子。',
      ]);
      await tachyon.say_and_wait([
        '在狭义相对论中，速子具有类空的四维动量和虚数的相对时间，是一种与一般物质交互作用不明显而目前无法被侦测的假想粒子，假设根据电磁辐射机制来看的话……',
      ]);

      era.printButton('「等、等等！」', 1);
      await era.input();

      await tachyon.say_and_wait(['肃静，', callname, '，让我说完。']);
      era.println();

      await era.printAndWait([
        '看着 ',
        tachyon.get_colored_name(),
        ' 在白板上写下的各种公式导致有些头昏脑胀的 ',
        you.get_colored_name(),
        ' 连忙想要暂停消化一下。',
      ]);
      await era.printAndWait([
        '但 ',
        tachyon.get_colored_name(),
        ' 拍了拍白板，依旧故我的继续说了下去。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '然后……因为类时与类空的区别，因此速子的存在有两个无法跨越的障碍。',
      ]);
      era.println();

      await era.printAndWait([
        '说到这，',
        tachyon.get_colored_name(),
        ' 顿了顿。',
      ]);
      await era.printAndWait([
        '身为好学生，老师明显在卖关子的时候就该适时的提问吧。',
      ]);
      await era.printAndWait([
        '不知不觉，',
        you.get_colored_name(),
        ' 也有些进入角色了。',
      ]);

      era.printButton('「障碍？」', 1);
      await era.input();

      await tachyon.say_and_wait([
        '没错……假设速子真的存在的话，会碰到的限制。',
      ]);
      await tachyon.say_and_wait([
        '简单来讲，就是……『无法与光速下的物质进行接触』，以及『无法降低到光速之下』，首先先从第一个开始说起，无法接触的原因是对因果律的违背……',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), ' 继续开始了说明']);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 的脑袋已经没有停留在',
        tachyon.sex,
        '那些令人感受到大脑被知识强奸的难懂解析。',
      ]);
      era.println();

      await era.printAndWait([
        '由于 ',
        tachyon.get_colored_name(),
        ' 的关系，就算知道速子指的是超光速粒子的tachyon，却还是会忍不住想到在身旁的 ',
        tachyon.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '渐渐的，',
        you.get_colored_name(),
        ' 的脑海中忽然浮现出一幅画面。',
      ]);
      era.println();

      await era.printAndWait([
        '在某个光速之上的世界，光速以下的物质无法抵达的空间中。',
      ]);
      await era.printAndWait([
        '在这连时间都会被嫌弃太过缓慢的世界中，唯一存在的',
        { color: tachyon.color, content: '速子' },
        '。',
      ]);
      await era.printAndWait([
        '无法与光速之下的世界进行交互，只能以超光速的形式存在的',
        { color: tachyon.color, content: '速子' },
        '。',
      ]);
      await era.printAndWait(['绝对的速度，绝对的孤独。']);
      era.println();

      await tachyon.say_and_wait(['…………']);
      era.println();

      await era.printAndWait([
        '不知不觉，',
        you.get_colored_name(),
        ' 发现作为背景音存在的讲解分析声不知何时已经停下。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 回过神来，才发现 ',
        tachyon.get_colored_name(),
        ' 正盯着自己，不知道已经这么看了多久。',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '？在想什么呢？']);

      era.printButton('「没什么……」', 1);
      era.printButton('「只是觉得这样的话，速子好孤独啊……」', 2);
      await era.input();

      await era.printAndWait([
        '在 ',
        tachyon.get_colored_name(),
        ' 的提问下，',
        you.get_colored_name(),
        ' 吐出了自己的想法。',
      ]);
      await era.printAndWait([
        '某种意义上，以前的 ',
        tachyon.get_colored_name(),
        ' 也有点像这样。',
      ]);
      await era.printAndWait([
        '由于过度的才智，导致身边的人无法看见与',
        tachyon.sex,
        '相同的世界。',
      ]);
      await era.printAndWait([
        '孤立于世界，眼中只有自己目标的',
        { color: tachyon.color, content: 'Tachyon' },
        '。',
      ]);
      await era.printAndWait([
        '然而……哪怕是这样的 ',
        tachyon.get_colored_name(),
        ' 都还是能够与人接触，被人影响。',
      ]);
      await era.printAndWait([
        '要是连物理上的空间都被隔绝，那么',
        { color: tachyon.color, content: '速子' },
        '……',
      ]);
      await era.printAndWait([
        '不，明明在讨论的是超光速粒子而不是 ',
        tachyon.get_colored_name(),
        ' 不是吗？',
      ]);
      await era.printAndWait([
        '这样离题，',
        tachyon.get_colored_name(),
        ' 会生气的吧？',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' 已经做好了在 ',
        tachyon.get_colored_name(),
        ' 故作生气的微斥后被其纠正想法的准备。',
      ]);
      await era.printAndWait(['但……']);
      era.println();

      await tachyon.say_and_wait(['哦？', callname, '，你是这样想的吗？']);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 平静地说着，将白板推开，朝着坐在沙发上的 ',
        you.get_colored_name(),
        ' 靠近。',
      ]);
      await era.printAndWait([
        '黯沉的红色眼眸望着 ',
        you.get_colored_name(),
        '，一如既往的，读不懂',
        tachyon.sex,
        '究竟在想些什么。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '可是，如果说那就是跨越极限的代价呢？如果说，假设而已……失去现有的一切，变成绝对的孤独，就是超越极限需要付出的东西……你能够接受吗，',
        callname,
        '？',
      ]);
      era.println();

      await era.printAndWait(['奇怪。']);
      await era.printAndWait(['好奇怪。']);
      await era.printAndWait([
        '明明和 ',
        tachyon.get_colored_name(),
        ' 之间的距离没有变近，也没有变远。',
      ]);
      await era.printAndWait([
        '但眼前的 ',
        tachyon.get_colored_name(),
        ' 忽然给了人一种错觉。',
      ]);
      await era.printAndWait(['似近似远。']);
      await era.printAndWait(['近的伸手就能触摸。']);
      await era.printAndWait(['远的下一秒就会遁离尘世。']);
      await era.printAndWait([
        '不过比起这些，现在更重要的应该是做出回答才对吧？',
      ]);
      await era.printAndWait(['仔细想想……']);
      era.println();

      await era.printAndWait([you.get_colored_name(), ' 认为……']);

      era.printButton('「可以」（升级关系）', 1);
      era.printButton('「不行」（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(['如果说，超越极限的代价便是如此……']);
        await era.printAndWait([
          '那么，身为支持其实验的人，应该要做的就是肯定',
          tachyon.sex,
          '的决定，并且目送',
          tachyon.sex,
          '通往自己的目标。',
        ]);
        await era.printAndWait(['这是自己作为「豚鼠」的责任。']);
        await era.printAndWait([
          '所以，',
          you.get_colored_name(),
          ' 会选择尊重 ',
          tachyon.get_colored_name(),
          ' 的做法。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 这样和 ',
          tachyon.get_colored_name(),
          ' 说明了。',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………是这样吗？这就是你的选择吗？']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 依旧没有表露出',
          tachyon.sex,
          '的想法，语气还是一样平淡。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 不由得有些担心，自己是不是说错了什么。',
        ]);
        await era.printAndWait(['但是，选择已经做出了。']);
        era.println();

        era.printButton('「身为速子的豚鼠，应该如此……」', 1);
        era.printButton('「……但是，我会努力去追上速子的！」', 2);
        await era.input();

        await era.printAndWait([
          '自己不应该去阻止 ',
          tachyon.get_colored_name(),
          ' 的成长。',
        ]);
        await era.printAndWait([
          '不如说，正好相反，自己应该努力去追上 ',
          tachyon.get_colored_name(),
          ' 才对。',
        ]);
        await era.printAndWait(['如果说，超越光速代表的是永恒的孤独。']);
        await era.printAndWait([
          '那么自己要做的，就是让',
          tachyon.sex,
          '不再孤独。',
        ]);
        await era.printAndWait([
          '哪怕只有自己一人，也要尽力陪伴在',
          tachyon.sex,
          '身边。',
        ]);
        await era.printAndWait([
          '这是自己身为 ',
          tachyon.get_colored_name(),
          ' 的「豚鼠」，以及……身为 ',
          tachyon.get_colored_name(),
          ' 的恋人，内心的愿望。',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['这么说来，我似乎还没说过呢。']);
        await tachyon.say_and_wait(['我的选择———']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的表情平静得令人感到害怕。',
        ]);
        await era.printAndWait(['仿佛暴风雨前的海面一般平静。']);
        era.println();

        await tachyon.say_and_wait([
          '我会选择跨越那条线，超越光速，超越极限———',
        ]);
        era.println();

        await era.printAndWait(['啊啊，果然如此。']);
        await era.printAndWait([
          '这就是 ',
          you.get_colored_name(),
          ' 所憧憬的',
          tachyon.uma_sex_title,
          '该做出的回答。',
        ]);
        await era.printAndWait(['不能说意外，只能说理所当然。']);
        await era.printAndWait(['但是……心中那股淡淡的失落，又是从何而来？']);
        await era.printAndWait([
          '只是，',
          tachyon.get_colored_name(),
          ' 的话还没说完',
        ]);
        era.println();

        await tachyon.say_and_wait(['————和你，一起。']);
        era.println();

        await era.printAndWait(['忽然。']);
        await era.printAndWait(['那种暴风雨前的宁静反转。']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 发觉了自己先前的比喻有些失当。',
        ]);
        await era.printAndWait(['不是暴风雨前的宁静，而是——深海。']);
        await era.printAndWait(['不是风雨欲来，而是自身已经深陷其中。']);
        era.println();

        await tachyon.say_and_wait([
          '两人一起跨越极限———成为速子（Tachyon）。',
        ]);
        era.println();

        await era.printAndWait([
          '不由得的，',
          you.get_colored_name(),
          ' 点头答应。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 望着',
          tachyon.sex,
          '的双眼，如光闪烁。',
        ]);
        await era.printAndWait([
          '仿佛误入深海的小鱼，在被深海鱼吞噬前最后看见的诱饵光芒。',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['我盯着', you.sex, '的双眼。']);
        await tachyon.print_and_wait(['里面是一知半解的迷茫。']);
        await tachyon.print_and_wait(['心中半是恼怒，半是庆幸。']);
        await tachyon.print_and_wait(['为什么', you.sex, '就是不能明白？']);
        await tachyon.print_and_wait(['也还好，', you.sex, '依旧没有明白。']);
        era.println();

        await tachyon.print_and_wait(['不是只有', you.sex, '也好。']);
        await tachyon.print_and_wait(['而是只要', you.sex, '就好。']);
        await tachyon.print_and_wait(['自己不害怕孤独。']);
        await tachyon.print_and_wait([
          '自己只害怕，身边不再有',
          you.sex,
          '的身影。',
        ]);
        await tachyon.print_and_wait(['所以……']);
        era.println();

        await tachyon.print_and_wait(['极限的彼方。']);
        await tachyon.print_and_wait([
          '没有其他人能够到达的，超越光速的尽头。',
        ]);
        await tachyon.print_and_wait(['还有……']);
        await tachyon.print_and_wait([
          '除了自己二人以外，再不会有任何人打扰的世界。',
        ]);
        era.println();

        await tachyon.say_and_wait(
          ['哪怕是超光速的彼方，哪怕肉体和精神都燃烧殆尽……'],
          true,
        );
        await tachyon.say_and_wait('也要永远，永远的陪在我身边哦？', true);
        await tachyon.say_and_wait(['我亲爱的 ', callname, '❤️'], true);
      } else {
        await era.printAndWait([
          '如果说，要放 ',
          tachyon.get_colored_name(),
          ' 一个人度过孤独的永恒，那么自己绝对不会允许。',
        ]);
        await era.printAndWait([
          '但是……如果在天秤的另一端放上的，却是 ',
          tachyon.get_colored_name(),
          ' 的梦想呢？',
        ]);
        await era.printAndWait([
          '或者说，这种永恒，难道不正是 ',
          tachyon.get_colored_name(),
          ' 在追求的一切吗？',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '一定是知道这些，并且在了解的基础上，才会提出追逐极限的目标的吧',
        ]);
        await era.printAndWait([
          '那么身为',
          tachyon.sex,
          '的 ',
          callname,
          '，身为',
          tachyon.sex,
          '的爱人……',
        ]);
        await era.printAndWait([
          '难道不应该支持自',
          tachyon.sex,
          '去追逐梦想吗？',
        ]);
        era.println();

        await era.printAndWait(['所以……']);

        era.printButton('「我拒绝」', 1);
        await era.input();

        await era.printAndWait([
          '豚鼠的责任，或许已经尽到了，那么，身为 ',
          tachyon.get_colored_name(),
          ' 的爱人，应该尽的责任呢？',
        ]);
        await era.printAndWait([
          '身为与',
          tachyon.sex,
          '两人三脚，共同前进，在经历了种种后，才好不容易获得了开花结果的恋情的自己……',
        ]);
        await era.printAndWait([
          '能够允许这样的结局吗？能够允许与 ',
          tachyon.get_colored_name(),
          ' 的天人永隔吗？',
        ]);
        await era.printAndWait(['答案当然是……否。']);

        era.printButton('「哪怕自私也好。」', 1);
        era.printButton('「我也想让速子永远待在我身边。」', 2);
        await era.input();

        await era.printAndWait(['害怕对方离去。']);
        await era.printAndWait(['仅仅是如此自私的理由。']);
        await era.printAndWait(['现在的自己已经无法适应了。']);
        await era.printAndWait(['晚上睡前没有要为了谁而准备的便当。']);
        await era.printAndWait([
          '早上到实验室时无法看见那个忙碌于实验的背影。',
        ]);
        await era.printAndWait(['中午无法看见某人可爱可怜的讨饭模样。']);
        await era.printAndWait(['下午训练时无法看见那绚烂的跑姿。']);
        await era.printAndWait([
          '现在的自己，已经再也无法回到以前那样无趣的日子了。',
        ]);
        await era.printAndWait(['所以，所以。']);

        era.printButton(
          '「如果可以……我希望可以和速子一起抵达超光速的彼方。」',
          1,
        );
        era.printButton('「但是……如果没有办法的话……」', 2);
        await era.input();

        await era.printAndWait(['因为害怕自己无法跨越那条线。']);
        await era.printAndWait(['所以希望抓住', tachyon.sex, '的手。']);
        await era.printAndWait(['让', tachyon.sex, '停留在光速以下的世界。']);
        await era.printAndWait(['为了自己而留下。']);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['…………呵呵。']);
        era.println();

        await era.printAndWait(['平静的笑容。']);
        await era.printAndWait(['不解其意的笑。']);
        await era.printAndWait(['令人不由得心生畏惧。']);
        await era.printAndWait([tachyon.sex, '的回答，究竟……']);
        era.println();

        await tachyon.say_and_wait(['这就是……你的答案吗？']);
        await tachyon.say_and_wait(['……你果然，总是能打破我的预期啊……']);
        era.println();

        await era.printAndWait([tachyon.sex, '究竟在想些什么呢？']);
        await era.printAndWait([
          '现在这个瞬间，',
          tachyon.sex,
          '的笑到底是嘲笑，还是耻笑，又或者只是因为自己打破了期待而露出了欣喜的笑容呢？',
        ]);
        era.println();

        await tachyon.say_and_wait(['那么……为了我亲爱的 ', callname, '。']);
        await tachyon.say_and_wait(['我会，永远，永远，留在这里陪伴你的。']);

        era.drawLine();

        await tachyon.print_and_wait(['心里的感情，难以形容。']);
        await tachyon.print_and_wait([
          '但整体来讲，应该是名为欢喜的情绪更占上风吧。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '总是能超出自己预想的人，这一次再度的，在好的方向达成了自己的期望。',
        ]);
        await tachyon.print_and_wait([
          '原本以为如果是',
          you.sex,
          '的话，一定会说出什么为了速子的梦想，自己愿意放弃之类的蠢话。',
        ]);
        await tachyon.print_and_wait(['真是……']);
        await tachyon.print_and_wait([
          '一想到这种可能，',
          tachyon.get_colored_name(),
          ' 就忍不住泄气。',
        ]);
        await tachyon.print_and_wait(['为什么，', you.sex, '总是不能明白呢？']);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          '，是个欲望很强的',
          tachyon.uma_sex_title,
          '。',
        ]);
        await tachyon.print_and_wait([
          '二择一？不，',
          tachyon.sex,
          '两个都要。',
        ]);
        await tachyon.print_and_wait(['如果', you.sex, '真的说出那种话的话。']);
        await tachyon.print_and_wait([
          '那么哪怕行为强硬，哪怕要从某人的身边将',
          you.sex,
          '夺走。',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '也会任性妄为的，将',
          you.sex,
          '掠夺到那光速以上，只有二人能够一起度过的世界。',
        ]);
        await tachyon.print_and_wait(['但是……']);
        era.println();

        await tachyon.print_and_wait(['如果说，这个人。']);
        await tachyon.print_and_wait([
          '这个纯真到可爱的 ',
          callname,
          ' 竟然……',
        ]);
        await tachyon.print_and_wait([
          '稀有的表现出了自己的贪欲，自己的欲望。',
        ]);
        await tachyon.print_and_wait([
          '想要让 ',
          tachyon.get_colored_name(),
          ' 留在身边的欲望。',
        ]);
        await tachyon.print_and_wait([
          '想要强迫 ',
          tachyon.get_colored_name(),
          ' 放弃梦想的欲望。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '已经离不开',
          you.sex,
          '的自己，也只能，心甘情愿的任其摆布了。',
        ]);
        await tachyon.print_and_wait([
          '隶属与被隶属的关系，到底是何时发生反转的呢？',
        ]);
        await tachyon.print_and_wait(['不，不是反转……']);
        await tachyon.print_and_wait(['在束缚的同时，却也被其束缚。']);
        await tachyon.print_and_wait(['啊啊，这一定，就是名为爱的感情吧。']);
        await tachyon.print_and_wait([
          callname,
          ' 爱着 ',
          tachyon.get_colored_name(),
          '，',
          tachyon.get_colored_name(),
          ' 也爱着 ',
          callname,
          '。',
        ]);
        await tachyon.print_and_wait([
          '没有什么超光速以上的世界，极限之外更是什么也没有……',
        ]);
        await tachyon.print_and_wait([
          '只有，彼此相爱着的普通人及普通',
          tachyon.uma_sex_title,
          '，仅此而已。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
