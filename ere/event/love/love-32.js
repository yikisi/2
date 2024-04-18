const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { add_event, cb_enum } = require('#/event/queue');

/** @type {Record<string,function(CharaTalk,CharaTalk):Promise<*>>} */
const handlers = {};

handlers[25] = async (tachyon, me) => {
  const coffee = get_chara_talk(25);
  // todo 做便当次数>10 未招募茶座
  await era.printAndWait(
    `爱丽速子的实验室，这个总是闹得学园内鸡飞狗跳的地方，这几天却格外的安静`,
  );
  era.println();
  await tachyon.say_and_wait(
    `搞什么嘛，居然把爱马一个人丢在学园里自己跑去出差`,
  );
  await era.printAndWait(`爱丽速子在实验室里一边做着实验，一边喃喃抱怨着`);
  await era.printAndWait(
    `抱怨的对象？当然是某只被派去出差因此得有一周不在的豚鼠了`,
  );
  era.println();
  await tachyon.say_and_wait(`便当还要我自己微波……这种怠慢的行为太过分了`);
  era.println();
  await era.printAndWait(`速子不停，不停，不停的碎念着`);
  await era.printAndWait(`如果只是碎念的话，那说不定还能忍受……`);
  era.println();
  await tachyon.say_and_wait(`妳不觉得这已经算是虐待了吗？茶座君`);
  await coffee.say_and_wait(`…………别把我扯进你们秀恩爱的行为中`);
  era.println();
  await era.printAndWait(
    `在她丝毫没有任何想停下来的意思，甚至还打算把自己扯入话题时，`,
  );
  await era.printAndWait(`与她共享同间空教室的曼城茶座终于受不了了`);
  await coffee.say_and_wait(`速子同学……这些话妳已经重复过三次了`);
  await tachyon.say_and_wait(`才三次而已，也不是很多吧`);
  await coffee.say_and_wait(`豚鼠先生今天才出差第一天……`);
  await tachyon.say_and_wait(`…………就算这样，三次也不算……`);
  await coffee.say_and_wait(`他才离开学园不到半小时`);
  await tachyon.say_and_wait(`………………`);
  await era.printAndWait(`…………`);
  era.println();
  await era.printAndWait(`茶座叹了口气，眼前这名以往都是实验至上的同学，`);
  await era.printAndWait(`怎么在和训练员处好关系后就完全变了个样了，`);
  await era.printAndWait(
    `原本冷血无情、毫无伦理，草菅人命……好像说的有点过份了`,
  );
  await era.printAndWait(
    `看见她仍在喃喃抱怨着的模样，茶座心中忽然涌上了股烦躁感，不由得脱口而出`,
  );
  era.println();
  await coffee.say_and_wait(`再说……豚鼠先生又不是速子同学的专属`);
  era.println();
  await tachyon.say_and_wait(`…………妳这是什么意思？`);
  await coffee.say_and_wait(
    `我是什么意思，速子同学自己不是很清楚吗？豚鼠先生虽然说了出差，但有说是去哪里，做什么所以才要出差的吗？`,
  );
  await coffee.say_and_wait(`…………没有，从头到尾他只跟我说了自己要出差的事`);
  era.println();
  await era.printAndWait(
    `那当然，毕竟说是出差，其实是被紧急找去处理速子同学前些日子弄出的实验外泄意外，`,
  );
  await era.printAndWait(
    `这种事那个太过在乎马娘情感的豚鼠先生当然不会和她本人说了`,
  );
  await era.printAndWait(`茶座心中暗暗想到`);
  era.println();
  await coffee.say_and_wait(
    `那么……会不会也有一种可能，就是豚鼠先生其实不是去出差，而是……在与某人私会呢？`,
  );
  await tachyon.say_and_wait(`…………`);
  await coffee.say_and_wait(
    `毕竟……速子同学这么麻烦，如果我是豚鼠先生应该也早就受够了吧`,
  );
  await tachyon.say_and_wait(`……他说过，他是被我的跑法和可能性迷住的`);
  await coffee.say_and_wait(`呵呵……`);
  await tachyon.say_and_wait(`有什么好笑的`);
  era.println();
  await era.printAndWait(`曼城茶座喝了口咖啡，享受着此时速子的态度`);
  await era.printAndWait(
    `让最近总在不停和训练员喂狗粮的这个人露出这种不安的表情……糟糕，有点上瘾了`,
  );
  era.println();
  await coffee.say_and_wait(
    `换句话说，不就是爱丽速子这名马娘本身，对他而言完全没有任何的吸引力吗？`,
  );
  await tachyon.say_and_wait(`…………`);
  await coffee.say_and_wait(
    `跑法、可能性……他看着的，究竟是爱丽速子这名马娘，还是『拥有这些东西的某马娘A』呢？`,
  );
  await tachyon.say_and_wait(`……不……`);
  await coffee.say_and_wait(
    `反过来说，除了这些东西以外，爱丽速子这名马娘，对他到底有何吸引力？`,
  );
  await tachyon.say_and_wait(`…………`);
  era.println();
  await era.printAndWait(
    `原本的不爽感已经全数化为乌有，今天的愉悦度上升到Max值的茶座，`,
  );
  await era.printAndWait(
    `最后，如抛下原子弹一般，说出了最后一句话，然后便离开了教室`,
  );
  await coffee.say_and_wait(
    `对了，豚鼠先生的便当，味道确实很不错呢……有机会再请他帮我做吧`,
  );
  // todo 做便当次数>10 已招募茶座 茶座恋慕<50
  await era.printAndWait(
    `爱丽速子的实验室，这个总是闹得学园内鸡飞狗跳的地方，这几天却格外的安静`,
  );
  era.println();
  await tachyon.say_and_wait(
    `搞什么嘛，居然把爱马一个人丢在学园里自己跑去出差`,
  );
  await era.printAndWait(`爱丽速子在实验室里一边做着实验，一边喃喃抱怨着`);
  await era.printAndWait(
    `抱怨的对象？当然是某只被派去出差因此得有一周不在的豚鼠了`,
  );
  era.println();
  await tachyon.say_and_wait(`便当还要我自己微波……这种怠慢的行为太过分了`);
  era.println();
  await era.printAndWait(`速子不停，不停，不停的碎念着`);
  await era.printAndWait(`如果只是碎念的话，那说不定还能忍受……`);
  era.println();
  await tachyon.say_and_wait(`妳不觉得这已经算是虐待了吗？茶座君`);
  await coffee.say_and_wait(`…………别把我扯进你们秀恩爱的行为中`);
  era.println();
  await era.printAndWait(
    `在她丝毫没有任何想停下来的意思，甚至还打算把自己扯入话题时，`,
  );
  await era.printAndWait(`与她共享同间空教室的曼城茶座终于受不了了`);
  await coffee.say_and_wait(`速子同学……这些话妳已经重复过三次了`);
  await tachyon.say_and_wait(`才三次而已，也不是很多吧`);
  await coffee.say_and_wait(`豚鼠先生今天才出差第一天……`);
  await tachyon.say_and_wait(`…………就算这样，三次也不算……`);
  await coffee.say_and_wait(`他才离开学园不到半小时`);
  await tachyon.say_and_wait(`………………`);
  await era.printAndWait(`…………`);
  era.println();
  await era.printAndWait(
    `茶座叹了口气，眼前这名以往都是实验至上的同学，怎么在和训练员处好关系后就完全变了个样了，`,
  );
  await era.printAndWait(
    `原本冷血无情、毫无伦理，草菅人命……好像说的有点过份了`,
  );
  await era.printAndWait(
    `看见她仍在喃喃抱怨着的模样，茶座心中忽然涌上了股烦躁感，不由得脱口而出`,
  );
  era.println();
  await coffee.say_and_wait(`再说……训练员先生又不是速子同学的专属`);
  await tachyon.say_and_wait(`…………妳这是什么意思？`);
  await coffee.say_and_wait(
    `我是什么意思，速子同学自己不是很清楚吗？训练员先生虽然说了出差，但有说是去哪里，做什么所以才要出差的吗？`,
  );
  await tachyon.say_and_wait(`…………没有，从头到尾他只跟我说了自己要出差的事`);
  await era.printAndWait(
    `那当然，毕竟说是出差，其实是被紧急找去处理速子同学前些日子弄出的实验外泄意外，`,
  );
  await era.printAndWait(
    `这种事那个太过在乎马娘情感的训练员先生当然不会和她本人说了......让人都有些忌妒了`,
  );
  await era.printAndWait(`茶座心中暗暗想到`);
  era.println();
  await coffee.say_and_wait(
    `那么……会不会也有一种可能，就是训练员先生其实不是去出差，而是……在与某人私会呢？`,
  );
  await tachyon.say_and_wait(`…………`);
  await coffee.say_and_wait(
    `毕竟……速子同学这么麻烦，如果我是训练员先生应该也早就受够了吧`,
  );
  await tachyon.say_and_wait(`……他说过，他是被我的跑法和可能性迷住的`);
  await coffee.say_and_wait(`呵呵……`);
  await tachyon.say_and_wait(`有什么好笑的`);
  era.println();
  await era.printAndWait(`曼城茶座喝了口咖啡，享受着此时速子的态度`);
  await era.printAndWait(
    `让最近总在不停和训练员喂狗粮的这个人露出这种不安的表情……糟糕，有点上瘾了`,
  );
  era.println();
  await coffee.say_and_wait(
    `换句话说，不就是爱丽速子这名马娘本身，对他而言完全没有任何的吸引力吗？`,
  );
  await tachyon.say_and_wait(`…………`);
  await coffee.say_and_wait(
    `跑法、可能性……他看着的，究竟是爱丽速子这名马娘，还是『拥有这些东西的某马娘A』呢？`,
  );
  await tachyon.say_and_wait(`…………`);
  await coffee.say_and_wait(
    `跑法、可能性……他看着的，究竟是爱丽速子这名马娘，还是『拥有这些东西的某马娘A』呢？`,
  );
  await tachyon.say_and_wait(`……不……`);
  await coffee.say_and_wait(
    `反过来说，除了这些东西以外，爱丽速子这名马娘，对他到底有何吸引力？`,
  );
  await tachyon.say_and_wait(`…………`);
  era.println();
  await era.printAndWait(
    `原本的不爽感已经全数化为乌有，今天的愉悦度上升到Max值的茶座，`,
  );
  await era.printAndWait(
    `最后，如抛下原子弹一般，说出了最后一句话，然后便离开了教室`,
  );
  await era.printAndWait(`…………`);
  await coffee.say_and_wait(
    `对了，训练员先生的便当，味道确实很不错呢……有机会再请他帮我做吧`,
  );
  // todo 爱慕值25 做便当次数>10 已招募茶座 茶座恋慕>50
  await era.printAndWait(
    `爱丽速子的实验室，这个总是闹得学园内鸡飞狗跳的地方，这几天却格外的安静`,
  );
  era.println();
  await tachyon.say_and_wait(
    `搞什么嘛，居然把爱马一个人丢在学园里自己跑去出差`,
  );
  await era.printAndWait(`爱丽速子在实验室里一边做着实验，一边喃喃抱怨着`);
  await era.printAndWait(
    `抱怨的对象？当然是某只被派去出差因此得有一周不在的豚鼠了`,
  );
  era.println();
  await tachyon.say_and_wait(`便当还要我自己微波……这种怠慢的行为太过分了`);
  era.println();
  await era.printAndWait(`速子不停，不停，不停的碎念着`);
  await era.printAndWait(`如果只是碎念的话，那说不定还能忍受……`);
  era.println();
  await tachyon.say_and_wait(`妳不觉得这已经算是虐待了吗？茶座君`);
  await coffee.say_and_wait(`…………别把我扯进你们秀恩爱的行为中`);
  era.println();
  await era.printAndWait(
    `在她丝毫没有任何想停下来的意思，甚至还打算把自己扯入话题时，`,
  );
  await era.printAndWait(`与她共享同间空教室的曼城茶座终于受不了了`);
  await coffee.say_and_wait(`速子同学……这些话妳已经重复过三次了`);
  await tachyon.say_and_wait(`才三次而已，也不是很多吧`);
  await coffee.say_and_wait(`豚鼠先生今天才出差第一天……`);
  await tachyon.say_and_wait(`…………就算这样，三次也不算……`);
  await coffee.say_and_wait(`他才离开学园不到半小时`);
  await tachyon.say_and_wait(`………………`);
  await era.printAndWait(`…………`);
  era.println();
  await era.printAndWait(`茶座叹了口气，眼前这名以往都是实验至上的同学，`);
  await era.printAndWait(`怎么在和训练员处好关系后就完全变了个样了...`);
  await era.printAndWait(`虽然，也不是不能理解，毕竟是那个人啊`);
  await era.printAndWait(
    `看见她仍在喃喃抱怨着的模样，茶座心中忽然涌上了股烦躁感，不由得脱口而出`,
  );
  era.println();
  await coffee.say_and_wait(`再说……训练员先生又不是速子同学的专属`);
  await tachyon.say_and_wait(`…………妳这是什么意思？`);
  await coffee.say_and_wait(
    `我是什么意思，速子同学自己不是很清楚吗？训练员先生虽然说了出差，但有说是去哪里，做什么所以才要出差的吗？`,
  );
  await tachyon.say_and_wait(`…………没有，从头到尾他只跟我说了自己要出差的事`);
  era.println();
  await era.printAndWait(
    `那当然，毕竟说是出差，其实是被紧急找去处理速子同学前些日子弄出的实验外泄意外，`,
  );
  await era.printAndWait(
    `这种事那个太过在乎马娘情感的训练员先生当然不会和她本人说了......让人都有些忌妒了`,
  );
  await era.printAndWait(`茶座心中暗暗想到`);
  era.println();
  await coffee.say_and_wait(
    `那么……会不会也有一种可能，就是训练员先生其实不是去出差，而是……在与某人私会呢？`,
  );
  await coffee.say_and_wait(
    `毕竟……速子同学这么麻烦，如果我是训练员先生应该也早就受够了吧`,
  );
  await tachyon.say_and_wait(`呵呵……`);
  await coffee.say_and_wait(`有什么好笑的`);
  era.println();
  await era.printAndWait(`曼城茶座喝了口咖啡，享受着此时速子的态度`);
  await era.printAndWait(
    `让最近总在不停和“自己的”训练员先生打情骂俏的这个人露出这种不安的表情……糟糕，有点上瘾了`,
  );
  era.println();
  await coffee.say_and_wait(
    `换句话说，不就是爱丽速子这名马娘本身，对他而言完全没有任何的吸引力吗？`,
  );
  await tachyon.say_and_wait(`…………`);
  await coffee.say_and_wait(
    `跑法、可能性……他看着的，究竟是爱丽速子这名马娘，还是『拥有这些东西的某马娘A』呢？`,
  );
  await tachyon.say_and_wait(`……不……`);
  await coffee.say_and_wait(
    `反过来说，除了这些东西以外，爱丽速子这名马娘，对他到底有何吸引力？`,
  );
  await tachyon.say_and_wait(`…………`);
  era.println();
  await era.printAndWait(
    `原本的不爽感已经全数化为乌有，今天的愉悦度上升到Max值的茶座，`,
  );
  await era.printAndWait(
    `最后，如抛下原子弹一般，说出了最后一句话，然后便离开了教室`,
  );
  era.println();
  await coffee.say_and_wait(
    `对了，训练员先生的便当，味道确实很不错呢……以后也让训练员先生帮我做怎么样？`,
  );
  era.drawLine();
  await tachyon.say_and_wait(`…………`);
  await era.printAndWait(`茶座离开了，只留下速子一人在实验室中`);
  await era.printAndWait(
    `脑袋灵活的她早就知道，这些话不过是茶座想煽动她而故意说出的`,
  );
  await era.printAndWait(`甚至她也猜得到茶座这么做的原因`);
  era.println();
  await tachyon.say_and_wait(`秀恩爱……？`);
  era.println();
  await era.printAndWait(`按茶座所说，自己和豚鼠君在她眼中就是这样的吧`);
  await era.printAndWait(`可是，这样很奇怪吧`);
  await era.printAndWait(
    `秀恩爱，指的是情侣，或者有恋慕关系的两人，不顾他人眼光的表现两人的恩爱`,
  );
  await era.printAndWait(`可是，自己和豚鼠君又不是那种关系`);
  await era.printAndWait(`情侣，或者是恋慕关系……`);
  await era.printAndWait(`周围人眼中的自己和豚鼠君原来是这样的吗？`);
  await era.printAndWait(`豚鼠君和我……恋爱……`);
  era.println();
  await tachyon.say_and_wait(`………！？`);
  era.println();
  await era.printAndWait(
    `在这个念头浮上心间的瞬间，心脏彷佛被添加了强心剂一般，`,
  );
  await era.printAndWait(`开始不断跳动，由于过度的血液供应，脸颊也变得发烫`);
  await era.printAndWait(`这……这不好像在说……自己………`);
  era.println();
  await tachyon.say_and_wait(
    `怎怎怎怎么可能……不过是实验动物……对啊！说到底他不过就是区区豚鼠而已！`,
  );
  await tachyon.say_and_wait(
    `为什么我要在乎他喜欢的是我这个人还是我的跑法、可能性啊！`,
  );
  era.println();
  await era.printAndWait(`没错，既然是豚鼠，那只要拥有相同的目标就好了`);
  await era.printAndWait(
    `没有必要加入那些多余的感情，感情这种东西在实验中也只会误事`,
  );
  await era.printAndWait(`两人的关系就是研究者和豚鼠，训练员和马娘`);
  await era.printAndWait(`其余的关系都是不需要的`);
  era.printButton(`真的是这样吗`, 1);
  era.printButton(`没错，就是这样`, 2);
  const ret = await era.input();
  if (ret === 1) {
    await era.printAndWait(`是啊，明明是这样的`);
    await era.printAndWait(`那为什么`);
    await era.printAndWait(
      `对于被当成情侣的事，心中的雀跃和情绪高涨却怎么也压抑不住`,
    );
    await era.printAndWait(
      `对于他给茶座做了便当的事，心中的嫉妒和愤怒却怎么也平息不下`,
    );
    await era.printAndWait(
      `…………对于茶座所说的，对方并没有看见自己的事，心中的恐慌和畏惧却怎么也放不下来`,
    );
    era.println();
    await tachyon.say_and_wait(`…………我到底是怎么了`);
    await tachyon.say_and_wait(`这不就好像……好像`);
    era.println();
    await era.printAndWait(`好像，我喜欢豚鼠君一般吗`);
    era.println();
    await era.printAndWait(
      `连当事人都不明白的感情，在混杂着灼热的吐息中，飘上了天花板，消失在孤独的实验室中`,
    );
    era.println();
    await tachyon.say_and_wait(`快点回来吧，豚鼠君……`);
  } else {
    await era.printAndWait(`没错`);
    await era.printAndWait(`就是这样`);
    await era.printAndWait(`两人只要当纯粹的豚鼠和研究者就好`);
    await era.printAndWait(`只要继续过着这样的生活就好`);
    await era.printAndWait(`任性的天才科学家，以及任劳任怨的助手兼实验品`);
    await era.printAndWait(`两人的关系只要继续维持着这样就好`);
    await era.printAndWait(`维持到……什么时候呢`);
    await era.printAndWait(
      `一年？两年？到自己毕业？到进入大学？到出社会以前？`,
    );
    await era.printAndWait(`这样的关系，有办法维持到那个时候吗？`);
    era.println();
    await tachyon.say_and_wait(`唉……`);
    era.println();
    await era.printAndWait(
      `但无论如何，自己已经做出了选择，所以现在，这样就好`,
    );
    era.println();
    await tachyon.say_and_wait(`快点回来吧，豚鼠君……`);
  }
};

handlers[49] = async (tachyon, me) => {
  const event_marks = new TachyonEduMarks(),
    coffee = get_chara_talk(32);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(
    `栗东寮的某间寝室内，一名马娘正用枕头捂住自己的嘴，低声的吐出模糊的声音`,
  );
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(
    `一般情况，这间房间里发生这类的场景也不是什么特殊的事了，`,
  );
  await era.printAndWait(`一般都是某粉发马娘抱着枕头低诉对马娘酱的爱意`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(`但今天的主角却有些不同`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(
    `与粉发马娘同寝的栗发马娘，如今却做出了过去室友做过的，当时还使自己十分迷惑的行为`,
  );
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(`当时的她总想着，这样的行为实在是多此一举`);
  await era.printAndWait(`真的想说的话，那又为什么要感到害羞？`);
  await era.printAndWait(`感到害羞的话，那不说出口不就好了吗？`);
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(`现在她才终于明白了这种行为的原因`);
  await era.printAndWait(`感到害羞，是因为话语中所带的爱意`);
  await era.printAndWait(`必须说出，是因为不说出口，内心的火就无处发泄`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(
    `因此，现在的她也只能这样，对着枕头，以及因为室友远征CM不在而空荡荡的房间独自吐露内心`,
  );
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(
    `……虽然这么说，但其实这种感情的根源为何，她至今还是没搞清楚就是了`,
  );
  await era.printAndWait(`只能不断的喊着那名对自己唯命是从——`);
  await era.printAndWait(`却也是自己此刻心情烦躁根源的元凶——的他的名字`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(`初见时，纯粹出于对实验品的兴趣而取的称呼`);
  await era.printAndWait(`开始时兴趣中却带着评估及冷漠的称呼`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(
    `现在却化为了带有复杂感情，每次提起心头都会一颤的称呼`,
  );
  era.println();
  await tachyon.say_and_wait(`豚鼠君……`);
  era.println();
  await era.printAndWait(`这种感情，到底是什么`);
  await era.printAndWait(`既甜，又苦，温暖，却又令人恐惧`);
  await era.printAndWait(`这样冲突的属性却集中在一种感情里`);
  await era.printAndWait(`好奇怪，好热，好……害怕？`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君……`);
  era.println();
  await era.printAndWait(`自己对未知的态度，一直以来都是期待且喜悦的`);
  await era.printAndWait(`为何这种未知的感情，却让自己产生了害怕的情绪`);
  await era.printAndWait(`有什么好怕的，这种感情？还是豚鼠君？`);
  await era.printAndWait(`我会怕……豚鼠君？`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君……`);
  era.println();
  await era.printAndWait(`更加颤抖的内心揭晓了答案`);
  await era.printAndWait(`我在害怕豚鼠君？`);
  await era.printAndWait(`害怕他的什么？`);
  await era.printAndWait(`明明只是区区的豚鼠君`);
  await era.printAndWait(`但……又不是纯粹的害怕`);
  await era.printAndWait(`这种复杂的感情又是什么`);
  await era.printAndWait(`紧张躁动不安兴奋喜悦恐惧慌乱`);
  await era.printAndWait(`任何情绪彷佛都有沾边，却又不属于任何一种情绪`);
  await era.printAndWait(`明明只是区区的豚鼠君`);
  era.println();
  await tachyon.say_and_wait(`……豚鼠君`);
  era.println();
  await era.printAndWait(`……不，其实根本就没什么好推测的不是吗`);
  await era.printAndWait(`每次呼喊他的名字时，内心窜过的电流`);
  await era.printAndWait(`每次听见他的声音时，胸口急促的跳动`);
  await era.printAndWait(`每次看见他的笑容时，胡思乱想的大脑`);
  era.println();
  await tachyon.say_and_wait(`……………`);
  await tachyon.say_and_wait(`豚鼠君♡`);
  era.println();
  await era.printAndWait(`啊啊，果然`);
  await tachyon.say_and_wait(`豚鼠君♡`);
  era.println();
  await era.printAndWait(`不，甚至还在想象之上`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君♡`);
  await tachyon.say_and_wait(`豚鼠君♡`);
  await tachyon.say_and_wait(`豚鼠君♡`);
  era.println();
  await era.printAndWait(`没想到`);
  await era.printAndWait(`只不过是带着『爱意』喊出`);
  await era.printAndWait(`心情上就会有如此转变`);
  era.println();
  await era.printAndWait(`原本的焦急变成了享受`);
  await era.printAndWait(`原本的慌乱变成了安心`);
  await era.printAndWait(`原本的躁动变成了喜悦`);
  await era.printAndWait(`原本的恐惧……`);
  era.println();
  await tachyon.say_and_wait(`…………`);
  era.println();
  await era.printAndWait(`为什么，为什么恐惧还在`);
  await era.printAndWait(`明明，我已经承认了不是吗`);
  await era.printAndWait(`明明，我已经爱上豚鼠君了不是吗`);
  await era.printAndWait(`为什么还是害怕`);
  await era.printAndWait(`为什么还是恐惧`);
  era.println();
  await era.printAndWait(`啊啊……`);
  await era.printAndWait(`答案不是很明显吗`);
  await era.printAndWait(`既然这种喜悦是因爱而生`);
  await era.printAndWait(`那么，会感到害怕的原因`);
  await era.printAndWait(`那当然是因为害怕『不爱』了`);
  era.println();
  await era.printAndWait(`要是他不喜欢自己怎么办`);
  await era.printAndWait(`要是他讨厌自己的话怎么办`);
  await era.printAndWait(`要是他喜欢上别人怎么办`);
  await era.printAndWait(`要是……他喜欢的不是『自己』怎么办`);
  era.println();
  tachyon.print(
    `跑法、可能性……他看着的，究竟是爱丽速子这名马娘，还是『拥有这些东西的某马娘A』呢？`,
  );
  tachyon.print(
    `反过来说，除了这些东西以外，爱丽速子这名马娘，对他到底有何吸引力？`,
  );
  era.println();
  await era.printAndWait(`想起了他那疯狂的目光`);
  await era.printAndWait(`他迷上的不是爱丽速子，而是爱丽速子的跑法`);
  await era.printAndWait(`他想要帮助的不是爱丽速子，而是爱丽速子的梦想`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君…………`);
  era.println();
  await era.printAndWait(`爱丽速子……不过就只是个附加物而已`);
  await era.printAndWait(`要是自己要死了，他会为此感到焦急吗`);
  await era.printAndWait(`要是自己再也无法奔跑了，他会为此感到心碎吗`);
  await era.printAndWait(`要是自己放弃了梦想，他会为此感到遗憾吗`);
  era.println();
  await era.printAndWait(`……不，这些问题的答案肯定都是『是』吧`);
  await era.printAndWait(`但是，但是`);
  era.println();
  tachyon.print(`如果爱丽速子失去了双腿、梦想、可能性，他还会爱着爱丽速子吗？`);
  era.println();
  await tachyon.say_and_wait(`“豚鼠君？`);
  era.println();
  await era.printAndWait(`注定无法得到响应的疑问，消失在枕头的棉絮间`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君`);
  await tachyon.say_and_wait(`豚鼠君`);
  await tachyon.say_and_wait(`豚鼠君`);
  era.println();
  await era.printAndWait(`啊啊，不行`);
  await era.printAndWait(`每一次的开口，都还是能感受到如雷电一般的刺激`);
  await era.printAndWait(`每一次的呼喊，都还是能感受到大脑癫狂般的颤抖`);
  await era.printAndWait(`但是`);
  await era.printAndWait(`每一次的询问，心中的阴影便增添一尺`);
  await era.printAndWait(`每一次的怀疑，大脑的恐惧便增大一分`);
  era.println();
  await era.printAndWait(`好可怕`);
  await era.printAndWait(`好不安`);
  await era.printAndWait(`好痛苦`);
  era.println();
  await era.printAndWait(`这就是喜欢吗`);
  await era.printAndWait(`这就是迷恋吗`);
  await era.printAndWait(`这就是，恋爱吗？`);
  era.println();
  await era.printAndWait(`如果是的话……那`);
  era.printButton(`……必须做点什么了`, 1);
  era.printButton(`……不，还是不要吧`, 2);
  const ret1 = await era.input();
  if (ret1 === 1) {
    await era.printAndWait(`必须要做些什么`);
    await era.printAndWait(`像这样焦躁也改变不了任何事情`);
    await era.printAndWait(
      `说到底，爱丽速子也不是只会等待着王子大人出现的柔弱马娘`,
    );
    await era.printAndWait(`结合现有变量，透过实验证明`);
    await era.printAndWait(`这才是身为研究者，应该做的事情`);
    await era.printAndWait(`好好想想吧`);
    era.println();
    await era.printAndWait(`唯一的实验目的，证明爱丽速子在豚鼠君心中的地位`);
    await era.printAndWait(`实验方案……有，但危险度及风险……`);
    era.println();
    await tachyon.say_and_wait(`………………呵呵`);
    era.println();
    await era.printAndWait(`还有什么需要考虑的吗`);
    await era.printAndWait(`没有那个人陪在身旁的爱丽速子，还有存在的意义吗？`);
    await era.printAndWait(`都已经变成这样了，还想自欺欺人吗？`);
    era.println();
    await era.printAndWait(`啊啊`);
    await era.printAndWait(`都是你，让我从一名研究者变成了普通的少女`);
    await era.printAndWait(`所以啊，请负起责任吧，我亲爱的豚鼠君`);
    await era.printAndWait(`我的告白，我的『情书』`);
    await era.printAndWait(`就请你，好好的收下吧`);
  } else {
    await era.printAndWait(`不行……`);
    era.println();
    await era.printAndWait(`要是发生了改变`);
    await era.printAndWait(`要是以后再也无法和他见面`);
    await era.printAndWait(`要是再也吃不到他做的便当`);
    await era.printAndWait(`要是再也无法看见他那狂气的眼神`);
    era.println();
    await era.printAndWait(`爱丽速子，就无法再继续活下去了`);
    era.println();
    await era.printAndWait(`那种事绝对不要`);
    await era.printAndWait(`那种事绝对不行`);
    era.println();
    await era.printAndWait(`为了豚鼠君和爱丽速子的日常`);
    await era.printAndWait(`为了守护这段日子`);
    await era.printAndWait(`克制吧`);
    await era.printAndWait(`压抑吧`);
    await era.printAndWait(`忍耐吧`);
    era.println();
    await era.printAndWait(`克制内心的激动`);
    await era.printAndWait(`压抑内心的燥热`);
    await era.printAndWait(`忍耐内心的不安`);
    era.println();
    await era.printAndWait(`只是……`);
    await era.printAndWait(`再强力的弹簧，也会有被压力破坏的一天`);
    await era.printAndWait(`名为爱丽速子的这条弹簧，究竟能忍耐到哪一天为止呢`);
  }
  add_event(
    event_hooks.week_end,
    new EventObject(32, cb_enum.love).set_arg('witch'),
  );
};

handlers.witch = async (tachyon, me) => {
  const event_marks = new TachyonEduMarks();
  await print_event_name(`女巫的自白`, tachyon);
  era.println();
  await tachyon.say_and_wait(`豚鼠君，在喝今天的药之前，我要和你说个故事`);
  era.println();
  await era.printAndWait(
    `今天你一如既往来到了速子的实验室，她一如既往的接过便当然后递给你今天的药水，`,
  );
  await era.printAndWait(`彷佛一种以物易物的交易行动一般`);
  era.println();
  await era.printAndWait(`但在你正要喝下药物时，速子阻止了你的行动`);
  await era.printAndWait(`你疑惑的看着她，却看她十分认真的回望着妳`);
  era.println();
  await era.printAndWait(`…………那种眼神，彷佛带着赌上生命的觉悟一般`);
  era.println();
  await tachyon.say_and_wait(
    `豚鼠君，不知道你有没有听过一个叫做人鱼公主的童话故事`,
  );
  era.println();
  await era.printAndWait(
    `她没等你回答，彷佛一开始就不打算让你回答一般，接着说了下去`,
  );
  await era.printAndWait(
    `……然而，这却是有别于以往安徒生童话中人鱼公主的，另类的故事`,
  );
  era.println();
  await tachyon.say_and_wait(
    `从前从前，有位生活在海底的人鱼公主，她从小就渴望着拥有双腿，希望能够在地面上，尽情的奔跑`,
  );
  await tachyon.say_and_wait(
    `然而，生活在海里的她，只有腰部以下的那条鱼尾巴，别说跑步了，就连站立都没有办法`,
  );
  era.println();
  await era.printAndWait(`她自嘲般的看了看自己的双腿……`);
  await era.printAndWait(`如玻璃般脆弱的双腿，纵使能够站立，纵使能够奔跑，`);
  await era.printAndWait(`一跑就坏的双腿，比起鱼尾又好到哪里去了？`);
  era.println();
  await tachyon.say_and_wait(
    `公主没有遇见女巫，她也不想将自己的双腿交付在不可信任的女巫手上，`,
  );
  await tachyon.say_and_wait(
    `她想要的，是真正属于自己的双腿，所以她，自己开始学习巫术`,
  );
  era.println();
  await era.printAndWait(
    `速子的双手一摆，手上不知从哪里又变出了两个试管来，彷佛魔术，又彷佛……巫术一般`,
  );
  era.println();
  await tachyon.say_and_wait(
    `公主相信，只要一直努力，总有一天她也能获得属于自己的双腿，`,
  );
  await tachyon.say_and_wait(
    `到时候就能尽情奔跑了，再也不用惧怕任何的东西，直到有一天……`,
  );
  era.println();
  await era.printAndWait(`速子的口气忽然变得有些飘渺，彷佛陷于一场梦境之中`);
  era.println();
  await tachyon.say_and_wait(`她遇见了一个人`);
  await tachyon.say_and_wait(
    `那个人不是王子，只是名潜水员而已，他不是落入海里需要援救的王子，`,
  );
  await tachyon.say_and_wait(
    `而是在出海时偶然看见了到海面上收集数据的公主，而一不小心被塞壬迷住，`,
  );
  await tachyon.say_and_wait(
    `投入海中，自愿帮助实验的普通人类，让我们姑且称他为——豚鼠君吧`,
  );
  era.println();
  await era.printAndWait(
    `速子说到这里，忽然发出了咯咯的笑声，彷佛想到了什么笑话一般`,
  );
  era.println();
  await tachyon.say_and_wait(
    `公主一开始对豚鼠君，并没有任何的感情，只是觉得来了个有趣的实验对象，`,
  );
  await tachyon.say_and_wait(
    `用他进行了许多的实验，包括但不限于增值、发光、分身、变性………呵呵`,
  );
  await tachyon.say_and_wait(`然而，天真的公主以为，受到改变的只有豚鼠君，`);
  await tachyon.say_and_wait(
    `却忘记了一个最重要的基本定理————反应，是相互的，`,
  );
  await tachyon.say_and_wait(`无论是化学还是人际关系，都是如此`);
  era.println();
  await era.printAndWait(
    `速子叹了口气，眼神却带有无比的眷恋及怀念，彷佛仍沉溺于梦境一般`,
  );
  era.println();
  await tachyon.say_and_wait(
    `豚鼠君带着公主，以实验的名义看了许许多多的事物，`,
  );
  await tachyon.say_and_wait(
    `他们跟着一角鲸一起围猎感到了生物的弱肉强食，他们看着蓝鲸死亡坠落海底，体会了生老病死的意义，`,
  );
  await tachyon.say_and_wait(`他们看着海豚求偶交配的画面，两人都不禁面红耳赤`);
  await tachyon.say_and_wait(
    `渐渐的，公主理解了，实验以外的世界，原来是如此美丽`,
  );
  era.println();
  await era.printAndWait(`
她娓娓道来，叙述了一幅幅或美丽，或壮丽的画面，`);
  await era.printAndWait(
    `语气依旧轻柔，但此时却带上了细丝般的不舍———彷佛，美梦将醒`,
  );
  era.println();
  await tachyon.say_and_wait(`然后，终于，有一天`);
  await tachyon.say_and_wait(`公主发现，自己再也无法专注于实验了`);
  await tachyon.say_and_wait(`每次她想静下心来研究时，比起研究会获得的成果，`);
  await tachyon.say_and_wait(`她更期待的却是听见新研究时豚鼠君的表情。`);
  await tachyon.say_and_wait(
    `每次她想到海面收集数据时，比起海面上看见的那些人类，`,
  );
  await tachyon.say_and_wait(`她更想见的却是在海底等着她的豚鼠君。`);
  await tachyon.say_and_wait(`每次她想制作新药物的时候，比起药物带来的效果，`);
  await tachyon.say_and_wait(`她更期待的却是豚鼠君喝下药物的反应`);
  era.println();
  await era.printAndWait(
    `终于，速子的表情恢复了清醒，彷佛总算，从一场美梦中醒了过来一般`,
  );
  era.println();
  await tachyon.say_and_wait(
    `她开始感到害怕，害怕有一天，自己会完全沉溺于与豚鼠君共度的时光，`,
  );
  await tachyon.say_and_wait(
    `害怕有一天……获得双腿这个目标，都会变成区区一句空话而已`,
  );
  await tachyon.say_and_wait(
    `那样的话，那样的她，便只是一名普通的科学家，却再也做不了一名研究者了……`,
  );
  era.println();
  await tachyon.say_and_wait(`这个时候，女巫出现了`);
  era.println();
  await era.printAndWait(`速子从椅子上站起身，走向了你`);
  await era.printAndWait(
    `她的手，盖上了你的手……却并非紧握，她抚摸着的，是握在你手中的那管试管`,
  );
  era.println();
  await tachyon.say_and_wait(
    `原来，从头到尾，女巫就存在于公主的心中，女巫就是公主！`,
  );
  await tachyon.say_and_wait(
    `代表着内心理智面的女巫告诉公主，现在这一切的源头就是那只豚鼠，只要他不在，一切就能恢复原状了`,
  );
  await tachyon.say_and_wait(
    `如果那只豚鼠离开……不，离开还不够，不能留下悬念……`,
  );
  await tachyon.say_and_wait(
    `只要，让那只豚鼠『消失』，公主就能变回原状，变回原本那个专注于实验的公主`,
  );
  era.println();
  await tachyon.say_and_wait(
    `…………没错，只是『变回原状』，无论是谁也无法保证，`,
  );
  await tachyon.say_and_wait(
    `变回原状后公主究竟能否透过实验获得双腿，但唯一能够知道的就是『有这种可能性』`,
  );
  await tachyon.say_and_wait(
    `相反的，要是继续和豚鼠君在一起的话……这种可能性，`,
  );
  await tachyon.say_and_wait(
    `就再也不可能找回了，女巫说完了这些后，将一种药物，透过公主之手制作了出来`,
  );
  await tachyon.say_and_wait(`她告诉公主，只要和平常一样，让豚鼠喝下这种药，`);
  await tachyon.say_and_wait(`一切就能结束了，她们就能回到原来的生活了`);
  era.println();
  await era.printAndWait(`速子说到这，从你的手中再度将药剂抽出`);
  era.println();
  await tachyon.say_and_wait(`但是……`);
  era.println();
  await era.printAndWait(`那只握着药剂的手忽然有些颤抖`);
  era.println();
  await tachyon.say_and_wait(`胆怯的公主，将一切都告诉了豚鼠君`);
  await tachyon.say_and_wait(`……这不是因为爱情、不是因为怜悯、不是因为不忍`);
  await tachyon.say_and_wait(`而是，胆怯，怯弱，懦弱`);
  await tachyon.say_and_wait(
    `不要觉得，公主是什么善良之人，说到底，女巫只是她内心的一面，她的本质就是那个冷酷而无情的女巫`,
  );
  await tachyon.say_and_wait(
    `如此说出口的公主，她的目的…………只是，不想承担责任而已`,
  );
  era.println();
  await era.printAndWait(`然后，速子再一次将手上的药举起`);
  era.println();
  await tachyon.say_and_wait(`不想背负起杀掉自己所爱之人的罪刑`);
  await tachyon.say_and_wait(`不想担负起手刃自己眷恋之人的责任`);
  await tachyon.say_and_wait(
    `希望……那个即将被其抹消的豚鼠，能够为了公主自我牺牲的自私`,
  );
  era.println();
  await era.printAndWait(`药水再次递出`);
  await era.printAndWait(`你看不见低着头的速子，脸上现在究竟是何种表情`);
  await era.printAndWait(`是在哭泣吗？因为所爱之人的死？`);
  await era.printAndWait(`是在嘲笑吗？因为捆绑自己的锁链即将被拆除？`);
  await era.printAndWait(`你只是默默的，静待对方说完`);
  era.println();
  await tachyon.say_and_wait(
    `所以……豚鼠君，请为这名自私自利的研究者做出选择吧`,
  );
  era.println();
  await era.printAndWait(`此时她所说的，确实，是无比自私的话语`);
  await era.printAndWait(`希望对方能够为自己牺牲`);
  await era.printAndWait(`而且还是为了一个『可能性』，甚至并非是绝对`);
  await era.printAndWait(
    `换句话说，也就是『你必须为了我而死，但就算你死了我也不知道自己能不能成功』这样，真的，不负责任的话语`,
  );
  era.println();
  await era.printAndWait(`因此，你选择…………`);
  era.printButton(`不喝`, 1);
  era.printButton(`喝`, 2);
  // todo 选项3 红字 大写
  era.printButton(`让速子将药喝下去`, 3);
  const ret1 = await era.input();
  if (ret1 === 1) {
    await print_event_name(`超光速的公主`, tachyon);
    await era.printAndWait(`不喝`);
    await era.printAndWait(`你从速子手中接过药剂`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君……`);
    era.println();
    await tachyon.say_and_wait(`她抬起头来，眼中带着担心`);
    await tachyon.say_and_wait(
      `是担心自己把药喝下去吗，还是担心自己……不肯喝下去？`,
    );
    await tachyon.say_and_wait(
      `说实话，就连你自己都不敢肯定接下来的行为正确与否`,
    );
    await tachyon.say_and_wait(`但你可以保证，接下来的一切绝对都是出自本心`);
    era.println();
    await tachyon.say_and_wait(`你将手上的药剂……倒入了一旁的废弃药品处理桶`);
    era.println();
    await tachyon.say_and_wait(`………………啊`);
    era.println();
    await era.printAndWait(`在你倾倒试管的过程中，速子都没有发出任何声音，`);
    await era.printAndWait(
      `直到你全部倒完，彷佛一世纪一般长久的时间过去后，她才发出了小声的一声“啊”，`,
    );
    await era.printAndWait(`彷佛直到此时才想到，自己应该要做出反应一样`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君……你知道，这代表着什么吗？`);
    era.println();
    await era.printAndWait(`你将试管倒转，确认里面的药剂已经一滴不剩倒光`);
    await era.printAndWait(`此时，速子总算组织好了语言，将编织的话语倾泻`);
    era.println();
    await tachyon.say_and_wait(
      `我的梦想……我所追求的可能性，你的这个选择，意思就是在说，`,
    );
    await tachyon.say_and_wait(
      `要我，爱丽速子，将这一切完全放弃，彻彻底底的放弃，变成一名普通的，`,
    );
    await tachyon.say_and_wait(`和其他的青春期少女没有任何差别的……`);
    await tachyon.say_and_wait(
      `陷入爱河的普通女孩子，你的意思，是要我放弃其他的可能性，选择和你在一起的可能性……`,
    );
    era.println();
    await era.printAndWait(`她语速飞快，结结巴巴的说道`);
    await era.printAndWait(
      `彷佛是在劝说自己趁现在快点改变主意，想让自己知道这个决定是多么不明智的一个选择，`,
    );
    await era.printAndWait(
      `希望自己能够为了她而牺牲，但又不想当坏人，所以才如此自私自利无耻的劝告着自己`,
    );
    era.println();
    await era.printAndWait(
      `但是，与她相处甚久的你看得出来，她话语中隐藏的真实`,
    );
    await era.printAndWait(`结巴的原因是因为害怕，害怕一切都只是自己的误会`);
    await era.printAndWait(
      `语速飞快的原因是不想听见反悔，就彷佛小孩子故意把话讲的不清不楚来诱导人答应`,
    );
    await era.printAndWait(
      `如同一名在签下合同前，重复诉说契约内容以免当事人反悔的保险推销员一般`,
    );
    await era.printAndWait(
      `判断这一切的依据，是明明说着拒绝的话语，却仍在不停晃动的尾巴，`,
    );
    await era.printAndWait(
      `直直竖起的耳朵，还有或许自以为没人发现，却十分明显流露在脸上的——安心的神情`,
    );
    era.println();
    await tachyon.say_and_wait(
      `你明白吗，豚鼠君……你不是一直想见到可能性的彼方吗？要是这样的话就真的……`,
    );
    era.println();
    await era.printAndWait(`够了`);
    await era.printAndWait(
      `虽然说，继续看她还能虚张声势到什么时候也挺有意思的`,
    );
    await era.printAndWait(`但那样的话之后肯定会被恼羞成怒的她报复的吧`);
    await era.printAndWait(
      `因此，你思考着，用什么样的方法才能表现出你最深的觉悟`,
    );
    await era.printAndWait(`你决定……`);
    era.println();
    era.printButton(`抱住她`, 1);
    era.printButton(`亲吻她`, 2);
    era.printButton(`轻咬她的耳朵`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`她的喋喋不休嘎然而止`);
      await era.printAndWait(
        `人在遇见突发现象时，是无法维持住一心二用的，马娘也是如此`,
      );
      await era.printAndWait(
        `因此理所当然的，被你忽然的拥抱惊呆，沉浸于那熟悉的雄性气味，`,
      );
      await era.printAndWait(
        `尽情享受这份温存的速子，当然也无法开口继续她的长篇大论了`,
      );
    } else if (ret1 === 2) {
      await era.printAndWait(`她的喋喋不休嘎然而止`);
      await era.printAndWait(
        `自古以来流传下来的表达爱意的方法，或许才是既能堵住嘴又能表达感情的最强技能`,
      );
      await era.printAndWait(
        `她的唇就如她本人一般，看似强硬的防线，却在接触的瞬间崩溃，露出了柔软娇嫩的内里。`,
      );
      await era.printAndWait(
        `坚如壁石的牙城，在舌尖的试探下却是瞬间崩溃，只能任由敌军的长驱直入，`,
      );
      await era.printAndWait(
        `看似忠贞的舌头，也在触碰到自己粗长的舌头瞬间化为了小鸟依人，被动的被采撷着`,
      );
    } else {
      await era.printAndWait(`她的喋喋不休嘎然而止`);
      await era.printAndWait(`取而代之的是忍不住出口的一声娇吟`);
      await era.printAndWait(
        `众所周知，大多数马娘所特有，与人类不同的器官，都是她们最为敏感的部位`,
      );
      await era.printAndWait(`因此，谁能责怪速子发出的令人想入非非的娇声呢`);
      await era.printAndWait(
        `不如说，被你抱在怀里捏住耳朵，却还能维持站立，不瘫软在你怀中的速子，已经相当了不起了`,
      );
      era.println();
      await tachyon.say_and_wait(`豚……豚鼠君……不…等等…好痒…`);
      era.println();
      await era.printAndWait(
        `听见了速子那比起拒绝更像是欲迎还拒的声音，你变换了手法，`,
      );
      await era.printAndWait(
        `以更加粗暴的力道，或揉或搓马娘那弹性十足，敏感的耳尖`,
      );
      era.println();
      await tachyon.say_and_wait(`咿……等等……不可以……`);
      era.println();
      await era.printAndWait(
        `在坚持了足足半分钟后，速子终于败下阵来，瘫软在你的怀中`,
      );
    }
    await era.printAndWait(`直到她完全放弃挣扎，你才放开了她`);
    era.println();
    await tachyon.say_and_wait(`豚……豚鼠君……`);
    era.println();
    await era.printAndWait(`她似乎还沉浸于刚才的体验之中，无法回过神来`);
    await era.printAndWait(`而在这个瞬间，你开始了自己一生一次的真心话吐露`);
    era.printButton(`我爱妳，爱丽速子`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`！！！！？？？？`);
    era.println();
    await era.printAndWait(
      `在听见你说的话后，她的尾巴瞬间倒竖了起来，彷佛一只炸毛的猫`,
    );
    era.println();
    await tachyon.say_and_wait(`豚豚豚豚豚豚鼠君！？你在说什么！？`);
    era.println();
    await era.printAndWait(`哎呀，速子的耳朵原来不太好吗`);
    await era.printAndWait(`那么，就再多说几遍吧`);
    era.println();
    await era.printAndWait(`你回想起了第一次看见爱丽速子的时候`);
    await era.printAndWait(`她的跑法，她的虚幻`);
    await era.printAndWait(`无论何者都令你陷入疯狂，着迷于她`);
    await era.printAndWait(`没错，是“她”`);
    era.println();
    await era.printAndWait(`你回想起了她的出道赛`);
    await era.printAndWait(
      `如光一般，理所当然的参加比赛，理所当然的超越一切，理所当然的赢下比赛`,
    );
    await era.printAndWait(
      `说出“比赛不过是实验结果的验证”，表情冷峻，甚至以冷酷的态度面对比赛的她`,
    );
    await era.printAndWait(`没错，是“她”`);
    era.println();
    await era.printAndWait(`你回想起了你第一次给她做便当的时候`);
    await era.printAndWait(
      `想要见证自己的可能性，为此甚至愿意以自身作为实验品`,
    );
    await era.printAndWait(`期待着超越想象，突破极限的可能性，眼神疯狂的她`);
    era.println();
    await era.printAndWait(`没错，是“她”`);
    era.println();
    await era.printAndWait(`你回想起了彻夜未眠，通宵实验的她`);
    await era.printAndWait(`为了研究能够奉上身体，为了梦想能够抛弃健康`);
    await era.printAndWait(`肉体狼狈邋遢，眼神却闪烁着对梦想的向往的她`);
    await era.printAndWait(`没错，是“她”`);
    era.println();
    await era.printAndWait(`你回想起了第一次一起外出时的她`);
    await era.printAndWait(`变色高丽菜汁的风波和她的赌气`);
    await era.printAndWait(
      `为了那样的事情而任性，为了夹到的娃娃而感到欣喜，那样的，普通的她`,
    );
    await era.printAndWait(`没错，是“她”`);
    era.println();
    await era.printAndWait(`最后……是眼前，在你面前的她`);
    await era.printAndWait(`紧张的游移视线，等待着你的再次开口的她`);
    await era.printAndWait(`原本淡漠感情的双眼，现在已经充满了幸福及爱意的她`);
    await era.printAndWait(
      `羞红着脸颊，看上去……就是一名彻彻底底沉醉于爱情，只是名普通的少女的她`,
    );
    era.printButton(
      `我爱妳，爱丽速子，我爱的是“妳”，而不是妳的跑法，妳的梦想，妳的可能性`,
      1,
    );
    await era.input();
    era.println();
    await era.printAndWait(`没有错`);
    await era.printAndWait(`一切的主体都在于她`);
    await era.printAndWait(`一开始的自己，或许真的只是被她的跑法及疯狂所吸引`);
    await era.printAndWait(
      `但如今，爱丽速子这名马娘在你心目中的地位，已经胜过了那些`,
    );
    await era.printAndWait(`你的想法也早就已经改变`);
    await era.printAndWait(`不是“为了达成爱丽速子的梦想，因此任劳任怨”`);
    await era.printAndWait(`而是“为了爱丽速子，能够拼尽自己的一切”`);
    await era.printAndWait(`所以……`);
    era.printButton(
      `就算哪天，妳不再奔跑，不想再追求可能性了，我也会一如既往的爱着妳`,
      1,
    );
    await era.input();
    era.println();
    await era.printAndWait(`说到底，从头到尾就是这么简单的问题`);
    await era.printAndWait(
      `就好像“老妈和老婆掉进水里，你会先救哪一个”一样的问题，只是问题的主角换成了『爱丽速子』和『爱丽速子的才能』`,
    );
    await era.printAndWait(
      `…………能够把如此简单的问题变得这么复杂，这或许也是她的本事吧`,
    );
    await era.printAndWait(`你忍不住为她的麻烦而露出苦笑`);
    await era.printAndWait(`但是，这样就能安心了吧`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君……`);
    era.println();
    await era.printAndWait(
      `这么想着的你看见了她脸上喜极而泣的泪水，和绽放的笑颜`,
    );
    await era.printAndWait(`就彷佛大雨过后的大波斯菊一般娇艳`);
    era.drawLine();
    await tachyon.say_and_wait(`豚鼠君～～今天的药来了`);
    era.println();
    await era.printAndWait(
      `第二天，你看着明明前一天还说自己已经再也无法进行研究的某名马娘，`,
    );
    await era.printAndWait(
      `手上拿着比平时看起来还更不妙的荧光药剂一蹦一跳的进了训练员室`,
    );
    era.println();
    await tachyon.say_and_wait(
      `快点快点，今天的药可是至今为止发光类型的集大成，喝下去可以发出两万四千种rgb色哦～～`,
    );
    await tachyon.say_and_wait(
      `对了对了，周末要出门做实地实验，所以给我把原本的安排都推掉，听懂了吗？`,
    );
    await tachyon.say_and_wait(
      `另外今天的便当早半个小时给我送过来，有个重要的实验要做，`,
    );
    await tachyon.say_and_wait(
      `所以记得……啊尽量不要送流质的来，会影响实验情况的`,
    );
    era.println();
    await era.printAndWait(
      `一进来，兴奋的研究者就开始了关于实验和研究的喋喋不休`,
    );
    await era.printAndWait(`即便是你，看到这一幕也不禁愣神了半天`);
    await era.printAndWait(
      `当然，不是因为对方的无理要求，要说的话平常的要求比这更无理多了，而是……`,
    );
    era.printButton(`说好的无法再研究了呢？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `你还记得，昨天哭的泪眼汪汪，说自己再也无法进行研究，再也无法发现可能性的速子那可怜兮兮的模样`,
    );
    await era.printAndWait(`现在的她，完全看不出前一天的沮丧和崩溃`);
    era.println();
    await tachyon.say_and_wait(`……我说的是真的哦，豚鼠君`);
    await tachyon.say_and_wait(
      `我现在已经没有办法再专注于对自身可能性的研究了，`,
    );
    await tachyon.say_and_wait(`满脑子无时无刻想的都是你的事情……`);
    await tachyon.say_and_wait(
      `就连现在，心里都在想着你高兴的模样、生气的模样、害羞的模样、紧张的模样……`,
    );
    await tachyon.say_and_wait(`把我变成这样，你可必须负起责任才行啊`);
    era.printButton(`对……对不起？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`这，这算自己的错吗？`);
    await era.printAndWait(`话说被这样直球倾诉爱意，果然还是很羞耻啊……`);
    await era.printAndWait(`不对，这跟前面说的又有什么关系了`);
    await era.printAndWait(
      `还是没解释为什么现在还是一如往常的在做着研究不是吗？`,
    );
    era.println();
    await tachyon.say_and_wait(`所以啊……我已经无法再只想着自己了`);
    await tachyon.say_and_wait(
      `我现在能够想到的一切可能性……都必须要有你陪在身边，今后能思考的，或许也只有『和你』一起的可能性了吧`,
    );
    era.println();
    await era.printAndWait(`你忽然有些无法明白她的意思，只能直盯盯的看着速子`);
    await era.printAndWait(`速子在你的注视下，也开始感到有些不自在，`);
    await era.printAndWait(
      `然后，彷佛水坝溃堤一般，原本若无其事的表情在来自爱人注视的最后一根稻草后，`,
    );
    await era.printAndWait(`瞬间化为了满脸泛红的羞耻表情`);
    era.println();
    await tachyon.say_and_wait(`所以说……就是……周末的实验……可以空出时间来吧……`);
    await tachyon.say_and_wait(
      `是为了测试一般人说的，那个，就是，被称为约会的行为对两人的适用程度…………`,
    );
    await tachyon.say_and_wait(
      `总之！星期六早上九点，不准迟到！还有要带我的早餐来！就这样！`,
    );
    await tachyon.say_and_wait(
      `还有，今天中午的便当……可以的话……尽量弄成方便一口吃的……`,
    );
    await tachyon.say_and_wait(
      `那个……想做“啊——嗯”行为在恋人关系中的心跳指数测定……可以吧？`,
    );
    era.println();
    await era.printAndWait(`看见她撑着害羞把话说完的模样，你不禁失笑`);
    await era.printAndWait(`这种情况下，该怎么回答呢`);
    await era.printAndWait(`对这名刁蛮、任性妄为，最可爱的疯狂科学家`);
    await era.printAndWait(`对这名亲爱、惹人怜惜，最挚爱的恋爱少女`);
    era.println();
    await tachyon.say_and_wait(`是的……我的公主大人`);
    await sys_love_uma_in_event(32);
  } else if (ret1 === 2) {
    await print_event_name(`齿轮开始转动`, tachyon);
    era.println();
    await era.printAndWait(`你回忆起了第一次见到爱丽速子这名马娘时的画面`);
    await era.printAndWait(`她的跑法，她的虚幻，她的可能性`);
    await era.printAndWait(
      `被她灼伤了双眼的你，不是从当时就已经发誓要为她牺牲一切了吗`,
    );
    era.println();
    await era.printAndWait(`你没有多说什么，直接从她手上接过了试管`);
    await era.printAndWait(`记得她曾经说过，自己有双疯狂的眼睛`);
    await era.printAndWait(`那这疯狂的起源，想必都是反射自她的光辉`);
    await era.printAndWait(`她的疯狂是因她的梦想而起，你的疯狂则是因她而起`);
    await era.printAndWait(
      `既然如此，为了她的梦想，为了她能够继续绽放那样的光芒，牺牲自己又有何不可？`,
    );
    era.println();
    await era.printAndWait(`现在的你，如同一名虔诚的信徒，事实上也确实如此`);
    await era.printAndWait(`而你心中的神明，唯一的光芒，现在却因你而堕入黑暗`);
    await era.printAndWait(`这种事当然是绝对不允许的`);
    await era.printAndWait(`幸好，一切还有救`);
    era.println();
    await era.printAndWait(`只要自己消失，她就能继续绽放出你想看见的光芒了`);
    era.printButton(`谢谢妳……在可能性的彼方再见吧`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`你相信爱丽速子，甚至可以说是妄信、盲信`);
    await era.printAndWait(`但同时，你的内心也还是有着一丝惧怕`);
    await era.printAndWait(`万一自己死后，她没有自己想的如此坚强怎么办`);
    await era.printAndWait(`万一她并没有她自己想的那般坚强怎么办`);
    await era.printAndWait(`所以，这是你为了以防万一所设下的枷锁`);
    era.println();
    await era.printAndWait(
      `虽然不觉得自己对她真的会有那么重要，但万一，假如，她真的一蹶不振的话……那么这个枷锁，或者说，这个诅咒`,
    );
    await era.printAndWait(
      `这个来自于她曾经爱过的人的诅咒，会推动着她继续前进，直到达到她的理想为止`,
    );
    await era.printAndWait(
      `如果说一切都是自己的自作多情，自己在她心目中根本就没有占据那么大的份量，`,
    );
    await era.printAndWait(
      `那就更好了，她一定不会被区区的豚鼠所阻碍步伐，会坚持并坚定的继续前进`,
    );
    era.println();
    await era.printAndWait(`你如此盼望着，举起试管喝了下去，然后……`);
    await era.printAndWait(`你惊喜的看见，她抬起头来，脸上带着一如往常的笑容`);
    await era.printAndWait(
      `这样就没问题了，她一定，一定会继续坚持自己的道路…………`,
    );
    era.println();
    era.println();
    era.println();
    await era.printAndWait(`下个瞬间`);
    era.println();
    era.println();
    era.println();
    era.println();
    await era.printAndWait(`你感觉到，有什么东西触碰到了你的嘴唇`);
    await era.printAndWait(`柔软的、温热的、娇嫩的两瓣玫瑰`);
    await era.printAndWait(`爱丽速子，吻上了你的唇`);
    era.println();
    await era.printAndWait(`非但如此，她的舌头撬开了你的双唇`);
    await era.printAndWait(`她的舌头在你的口中不停搅拌，索取`);
    await era.printAndWait(
      `她的舌头留恋的舐过你的齿间、你的舌尖、你的龈内————然而，这些都不是她的目标`,
    );
    await era.printAndWait(
      `她的目标是————由于过于突然的发展，使你没能反应过来，甚至都没能咽下的，你口中的药剂`,
    );
    era.println();
    await era.printAndWait(`你这才反应了过来，并慌忙想要阻止`);
    await era.printAndWait(`但一切都已经来不及了`);
    await era.printAndWait(`在你口中的药剂，已经被她分走了大半`);
    era.println();
    await era.printAndWait(
      `你连询问她为什么都已经顾不上了，只能连忙要抽出舌头，阻止她的行为`,
    );
    await era.printAndWait(
      `但是，人类在力量上终究是敌不过马娘的，即便是受了如此多实验的你，也不例外`,
    );
    era.println();
    await era.printAndWait(`终于，这个彷佛有一世纪之久的吻结束了`);
    await era.printAndWait(
      `分开的你们不停的喘着气，你一边喘着一边想冲上前帮速子催吐……却不由得停下了脚步`,
    );
    era.println();
    await era.printAndWait(`速子她脸上现在的表情、情绪，是你所无法理解的`);
    await era.printAndWait(`如果是高兴，那为什么脸上不断有泪珠滑落`);
    await era.printAndWait(
      `如果是悲伤，为什么露出的又是你从未见她露出过的，堪称完美的笑容`,
    );
    //todo 如果此时已经经历过情人节事件，还未经历则跳过下面一段
    await era.printAndWait(
      `然后，在你口中残存的药剂在此时忽然改变了味道，原来喝下去无色无味的药，现在的味道……`,
    );
    // todo  如果爱丽速子此时未有过接吻经验
    era.println();
    await tachyon.say_and_wait(`没想到，初吻的味道竟然是猪肉盖饭的味道啊`);
    // todo   如果爱丽速子此时已经有过接吻经验
    era.println();
    await tachyon.say_and_wait(
      `没想到，最后一个吻的味道竟然是猪肉盖饭的味道啊`,
    );
    era.println();
    await era.printAndWait(`你想起了情人节时收到的巧克力`);
    await era.printAndWait(`天天被灌药的自己，及以自己的反应为乐的速子`);
    await era.printAndWait(`多希望那段美好的时光能够永远持续`);
    await era.printAndWait(`多希望那杯红茶的香气可以恒久不变`);
    await era.printAndWait(`明明应该已经坚定了决心才对`);
    await era.printAndWait(`为什么现在却开始怀念起那样的日子了`);

    era.println();
    await tachyon.say_and_wait(`豚鼠君，抱歉啊，我骗了你`);
    era.println();
    await era.printAndWait(
      `速子依旧维持着那副艳丽的笑容，脸上的眼泪也依然如珠般从脸上低落`,
    );
    era.println();
    await tachyon.say_and_wait(`爱丽速子啊，其实，根本就不是那么厉害的马娘`);
    await tachyon.say_and_wait(`不是什么为了可能性能够放弃一切的马娘`);
    await tachyon.say_and_wait(`不是什么能够为了梦想而让心爱之人去死的马娘`);
    era.println();
    await era.printAndWait(
      `速子一边摇头一边说道，你想说些什么，却不知为何开不了口`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……不，这么说或许也不对，应该说，她曾经是这样的马娘`,
    );
    await tachyon.say_and_wait(
      `但是，就如刚刚所说的一样，被豚鼠君改变了的公主，已经知道了爱为何物，所以……她再也做不到了`,
    );
    await tachyon.say_and_wait(`爱丽速子，说到底，也不过是个普通的女孩子罢了`);
    await tachyon.say_and_wait(
      `因此，她会陷入爱河，会担心受怕，害怕自己喜欢的人是不是也喜欢自己……`,
    );
    await tachyon.say_and_wait(
      `害怕自己喜欢的人，眼中看到的，会不会其实并不是自己`,
    );
    era.println();
    await era.printAndWait(
      `从头到尾，“豚鼠君”看见的，被迷上的，都是『爱丽速子的跑法』、『爱丽速子的梦想』`,
    );
    await era.printAndWait(`那……爱丽速子呢？`);
    await era.printAndWait(`不……爱丽速子……是谁？`);
    era.println();
    await tachyon.say_and_wait(`……啊，药效起效了啊…………原本还想再多说几句的`);
    era.println();
    await era.printAndWait(`眼前的少女脸上的泪珠已经不再滑落，笑容却依然灿烂`);
    era.println();
    await tachyon.say_and_wait(
      `…………不过吗，至少，没有被甩，换句话说最起码还没有被拒绝，`,
    );
    await tachyon.say_and_wait(`对吧？这样就够了……嗯，这样就够了，哈哈哈！`);
    era.println();
    await era.printAndWait(`哈哈哈哈哈`);
    await era.printAndWait(
      `少女开怀大笑，你看见她大笑的模样，脑海中想到了某个身影……`,
    );
    await era.printAndWait(
      `在自己喝下什么之后，“她”似乎也总会看着自己哈哈大笑，`,
    );
    await era.printAndWait(`“她”叫什么名字？“她”就是眼前的少女吗？`);
    era.println();
    await tachyon.say_and_wait(
      `对不起啦，豚鼠君，折腾了你这么久，最后一切却都化为了泡影…`,
    );
    await tachyon.say_and_wait(
      `但请当作爱丽速子最后的一次任性吧…下次，千万别再迷上这么麻烦的女人了`,
    );
    era.println();
    await era.printAndWait(`『爱丽速子』、『豚鼠君』`);
    await era.printAndWait(
      `你拼命的想把这些似曾相似，有印象的名词记在脑海中，`,
    );
    await era.printAndWait(
      `但大脑却彷佛被放进了滚筒洗衣机一般，记忆像污垢一样不断被洗刷干净`,
    );
    await era.printAndWait(
      `就连眼前少女的模样，也如消失在晨曦中的泡沫一样虚幻`,
    );
    era.println();
    era.println();
    era.println();
    era.println();
    era.println();
    await tachyon.say_and_wait(`晚安，豚鼠君`);
    era.println();
    era.println();
    era.println();
    era.println();
    await era.printAndWait(`听见这句话后，你的意识陷入深渊`);
    era.drawLine();
    await tachyon.say_and_wait(`……醒`);
    await tachyon.say_and_wait(`………醒醒`);
    era.println();
    await era.printAndWait(`你醒来了`);
    await era.printAndWait(
      `被某个声音所唤醒的你，发现自己睁开眼睛看见的是一个陌生的天花板`,
    );
    era.printButton(`这里是哪里？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……这里是我的实验室`);
    era.println();
    await era.printAndWait(`你看向声音传来的方向`);
    await era.printAndWait(
      `眼前是一名栗毛的马娘，利落的短发以及身上的白大褂说明了她研究者的身份，`,
    );
    await era.printAndWait(
      `她用一种审视的眼光看着你，不知为何，你感到一股毛骨悚然`,
    );
    era.println();
    await tachyon.say_and_wait(
      `这个问题应该是我问你才对……你是什么人？为什么你会躺在我的实验室里？`,
    );
    era.println();
    await era.printAndWait(`栗毛马娘说道`);
    await era.printAndWait(`这时你才发现自己还躺在地板上，连忙爬了起来`);
    era.printButton(`我是（玩家名），是一名训练员`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………哦？那么训练员君，你躺在这里又有何贵干`);
    era.println();
    await era.printAndWait(
      `你试着回想在躺在这里前你究竟在做什么，却怎么也想不出来`,
    );
    era.println();
    await tachyon.say_and_wait(
      `…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……`,
    );
    await tachyon.say_and_wait(
      `算了，不提这个，总之，我是爱丽速子，训练员君，请多指教`,
    );
    era.println();
    await era.printAndWait(`爱丽速子`);
    await era.printAndWait(`听见这个名字，你的内心彷佛漏了一拍一样`);
    await era.printAndWait(`明明应该没听过这个名字`);
    await era.printAndWait(`明明应该不认识这名马娘`);
    await era.printAndWait(`但不知为何，却有种熟悉感`);
    era.println();
    era.printButton(`我们……是不是在哪里见过？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `哦呀，这年头已经不流行这么老土的搭讪方式了哦，训练员君`,
    );
    await era.printAndWait(`她看着你露出了恶作剧的笑容，你连忙解释并非如此`);
    era.println();
    await tachyon.say_and_wait(`开玩笑的……不知道为什么，我也有这种感觉`);
    era.println();
    await era.printAndWait(
      `不知为何，身为训练员的直觉告诉你，这名马娘绝对能够跑出使你震撼的跑法来，`,
    );
    await era.printAndWait(
      `但同时，又有个画面在你的脑海中不断浮现，似乎是这名叫做爱丽速子的马娘……`,
    );
    await era.printAndWait(`在不停索要便当的模样？？？`);
    await era.printAndWait(`回过神时，你已经向她提出了签约`);
    era.println();
    await tachyon.say_and_wait(
      `…………我说啊，一般会这么突然的就提出契约吗？这可是关系到马娘一生的事情，你不觉得应该更认真点对待吗？`,
    );
    era.printButton(`我有种感觉，我们一定会很合拍的`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`当你说完后，觉得一切都完了`);
    await era.printAndWait(
      `自己到底在想什么，虽然觉得对方有些即视感，但一般是不会这么突然提出签约的吧！！`,
    );
    await era.printAndWait(
      `这下完蛋了，不但会被拒绝，说不定还会被狠狠嘲笑一番…………`,
    );
    era.println();
    await era.printAndWait(
      `果不其然，名为爱丽速子的马娘听完后愣了下，然后哈哈大笑，接着……`,
    );
    await tachyon.say_and_wait(`可以哦`);
    era.println();
    await era.printAndWait(`看吧，果然………………`);
    await era.printAndWait(`？？？？？`);
    await era.printAndWait(`你忍不住带着满脸的问号看着对方`);
    await era.printAndWait(`只看她擦了擦眼角笑出的泪水说道`);
    era.println();
    await tachyon.say_and_wait(
      `不知道为什么，我也有这种感觉……虽然这种感觉的源头究竟为何一定要查清，`,
    );
    await tachyon.say_and_wait(
      `但我认为，你不是故坏人，在此之上，绝对会是个很有趣的人……`,
    );
    await tachyon.say_and_wait(`呵呵，所以，请多指教吧，训练员…………不，豚鼠君`);
    era.println();
    await era.printAndWait(`『豚鼠君』`);
    await era.printAndWait(
      `她忽然改口的称呼，让人感到有些莫名其妙，甚至有些害怕……`,
    );
    await era.printAndWait(
      `毕竟豚鼠这个称呼，一般应该不算是什么好称呼吧，加上她这一幅研究狂人的模样…………`,
    );
    await era.printAndWait(`但除此之外，你还感受到了一丝的亲切感`);
    era.printButton(`请多指教，爱丽速…………速子`, 1);
    await era.input();
    await era.printAndWait(`（玩家名） 认识了 爱丽速子`);
    // todo 爱丽速子的好感度设定为225
    // 爱丽速子的爱慕值设定为25
    add_event(
      event_hooks.week_start,
      new EventObject(32, cb_enum.love).set_arg('again'),
    );
  } else {
    event_marks.witch++;
    era.set('flag:强制BE', 32);
  }
};

handlers.again = async (tachyon, me) => {
  const chara301_talk = get_chara_talk(301),
    chara302_talk = get_chara_talk(302);
  await print_event_name(`时光倒流`, tachyon);
  era.println();
  await era.printAndWait(`仿佛顺理成章一般`);
  await era.printAndWait(`你和莫名有着熟悉感的栗毛马娘———爱丽速子签订了契约`);
  era.println();
  await era.printAndWait(
    `你想着必须要去登记契约才行，于是前去找了手纲小姐与理事长`,
  );
  await era.printAndWait(`…………为什么她们会以一种悲伤的眼神看着自己`);
  await chara301_talk.say_and_wait(
    `我能理解，又是那孩子的药吧……”是什么意思，那孩子是谁？`,
  );
  await chara302_talk.say_and_wait(
    `节哀！相信(玩家名)训练员一定会很快恢复记忆的`,
  );
  await era.printAndWait(
    `又是什么意思……她们知道我失忆了？难道说我失忆或发生同等级的意外其实是很常见的事吗？`,
  );
  era.println();
  await era.printAndWait(`不明所以……就当成这样吧`);
  await era.printAndWait(`总之，你与爱丽速子的育成开始了！`);
  add_event(
    event_hooks.week_start,
    new EventObject(32, cb_enum.love).set_arg('train_again'),
  );
};

handlers.again = async (tachyon, me) => {
  await print_event_name(`停滞的时钟`, tachyon);
  era.println();
  await tachyon.say_and_wait(
    `那么……首先就先来实验搭档上的磨合吧，豚鼠君，要看好我的跑法啊，呵呵`,
  );
  era.println();
  await era.printAndWait(`果然……有什么不对劲`);
  await era.printAndWait(`爱丽速子的跑法，在看着她奔跑的模样时察觉到了`);
  await era.printAndWait(`明明跑的很快，明明是十分令人惊艳的跑法`);
  await era.printAndWait(`但你没有功夫去思考这些`);
  await era.printAndWait(`没错，很快，很耀眼，但好象又不只这些`);
  await era.printAndWait(`好像……曾经见识过类似的跑法`);
  await era.printAndWait(`仿佛水面的光源一般，在你的脑海深处不断撩拨着，`);
  await era.printAndWait(`却总在你努力游上水面的瞬间又消失的无影无蹤`);
  era.println();
  await me.say_and_wait(`好奇怪……`, true);
  era.println();
  await era.printAndWait(`正当你苦恼的抓着头的时候………`);
  era.printButton(`！？`, 1);
  await era.input();
  era.println();
  await era.printAndWait(`训练场上，忽然状况横生`);
  await era.printAndWait(
    `说着只是让自己见识见识跑法的速子，渐渐的，跑的越来越快`,
  );
  await era.printAndWait(`刚才那样……只是热身而已吗？`);
  await era.printAndWait(`穿着普通体育服的速子，在训练场上轻盈的奔跑着`);
  await era.printAndWait(`越跑越快，越跑越快`);
  await era.printAndWait(`不知为何，你的心中忽然感到一阵急迫`);
  await era.printAndWait(`一种焦急，以及一种迫切感`);
  era.println();
  await era.printAndWait(`跑的这么快，速子她的腿，不会有问题吗？`);
  await era.printAndWait(`……？为什么会有问题？`);
  await era.printAndWait(`因为，她的腿……`);
  await era.printAndWait(`她的腿明明……那么脆弱`);
  await era.printAndWait(`为什么自己会知道她的腿脆弱`);
  era.println();
  await era.printAndWait(`不明白，但是，想要明白`);
  await era.printAndWait(`想要搞清真相的迫切感驱使着你不停思考`);
  await era.printAndWait(`仿佛衬托着你思考的速度一般`);
  await era.printAndWait(`速子也继续加速`);
  await era.printAndWait(`直到……你的认知尽头`);
  await era.printAndWait(`藏在脑海深处，最重要的东西`);
  await era.printAndWait(`马娘的极限速度`);
  await era.printAndWait(`你所知的，马娘的极限`);
  await era.printAndWait(`————爱丽速子的极限速度`);
  era.println();
  await era.printAndWait(
    `眼前的爱丽速子，与脑海中那捉摸不定的光源渐渐结合在一起`,
  );
  await era.printAndWait(`于是，你最后一次尝试，朝着水面伸手`);
  await era.printAndWait(`————————碰到了`);
  await era.printAndWait(`————————想起来了`);
  era.println();
  await era.printAndWait(`爱丽速子，是（玩家名）的负责马娘`);
  await era.printAndWait(`回想起了相遇的事，比赛的事，还有……`);
  era.println();
  await era.printAndWait(`还有……？`);
  await era.printAndWait(`不知道`);
  await era.printAndWait(`忘记了`);
  era.println();
  await era.printAndWait(`爱丽速子，是自己的负责马娘`);
  await era.printAndWait(`（玩家名），是爱丽速子的豚鼠君`);
  await era.printAndWait(`目前为止没有错误`);
  era.println();
  await era.printAndWait(`爱丽速子在比赛中的点点滴滴`);
  await era.printAndWait(`她跑步的每个细节自己都记得一清二楚`);
  await era.printAndWait(`但是……`);
  era.println();
  await era.printAndWait(`爱丽速子喜欢什么`);
  await era.printAndWait(`爱丽速子的生活习惯`);
  await era.printAndWait(`爱丽速子的兴趣`);
  await era.printAndWait(`爱丽速子的生活打扮`);
  await era.printAndWait(
    `除了不知为何残留在脑海中，或许是与比赛管理相关而留下的饮食喜好相关，`,
  );
  await era.printAndWait(`其他的一切都仿佛从来没接触过一般`);
  era.println();
  await era.printAndWait(`不自然`);
  await era.printAndWait(`只能感到不自然`);
  await era.printAndWait(`认识了这么久，有过如此多的接触交流`);
  await era.printAndWait(`对她的比赛和跑法能够如此如数家珍`);
  await era.printAndWait(`却仍然好像对爱丽速子这名马娘没有任何了解一般`);
  era.println();
  await tachyon.say_and_wait(`呼……那么，豚鼠君，觉得如何？`);
  era.printButton(`跑的很好！`, 1);
  await era.input();
  era.println();
  await era.printAndWait(`你下意识的回答了记忆中多次回覆过的答案`);
  await era.printAndWait(`总觉得有些奇怪`);
  await era.printAndWait(`不理解到底发生了什么`);
  await era.printAndWait(`但是……`);
  era.println();
  await era.printAndWait(`在回忆起那些的瞬间`);
  await era.printAndWait(`心中很确信，一定听见了一句话`);
  era.println();
  era.printButton(`这一次，不要再辜负她的心意了`, 1);
  await era.input();
  era.println();
  await era.printAndWait(`究竟是什么意思呢……好好思考一下吧`);
};

handlers[74] = async (tachyon, me) => {
  const event_marks = new TachyonEduMarks(),
    coffee = get_chara_talk(32);
  era.println();
  await tachyon.say_and_wait(`豚鼠君～～`);
  await tachyon.say_and_wait(`豚鼠君～～～？`);
  await tachyon.say_and_wait(`豚鼠君！！`);
  await tachyon.say_and_wait(`豚…………啊，豚鼠君今天好像不在来着`);
  await tachyon.say_and_wait(
    `咕……但这药不趁新鲜试药效就没了啊，没办法了，茶座君～～`,
  );
  await tachyon.say_and_wait(`…………欸，茶座君也不在吗！？`);
  era.println();
  await era.printAndWait(`爱丽速子在实验室里装傻般说道`);
  await era.printAndWait(`只可惜，实验室里没有任何能够吐槽她的人在`);
  era.println();
  await tachyon.say_and_wait(
    `豚鼠君也就算了……茶座君怎么也不在啊……或者宝穴君……神宫君……`,
  );
  era.println();
  await era.printAndWait(`仔细想想，不仅仅是茶座`);
  await era.printAndWait(
    `宝穴、神宫、数码，甚至自己疼爱的后辈大和赤骥最近都很少见到了`,
  );
  await era.printAndWait(
    `其原因……聪明的爱丽速子，凭着她的惊世智慧，以及超我的客观判断力，自然能够轻松的猜出来`,
  );
  await era.printAndWait(`没错……`);
  era.println();
  await tachyon.say_and_wait(`……果然，是因为我一直在谈豚鼠君的事吧`);
  era.println();
  await era.printAndWait(`其实，也不只是谈自己那昵称为豚鼠的爱人的事，`);
  await era.printAndWait(
    `或者更准确来说，是与爱人之间的情事，直白一点来讲那便是，秀恩爱`,
  );
  //todo If 已经与玩家有性经验：
  await era.printAndWait(`如果说这样的话题只停留在情话及暧昧感情等级的话，`);
  await era.printAndWait(
    `，那么想必身边人，最起码大和及数码绝对会很乐意一听的吧，`,
  );
  await era.printAndWait(
    `但话题往往总是会进入到床事间的部分，这也怪不得一听见类似话题就满脸通红的她们了`,
  );

  era.println();
  await era.printAndWait(`连茶座都忍不住发问`);
  await era.printAndWait(`为什么要这样一刻不停的炫耀着感情`);
  era.println();
  await tachyon.say_and_wait(`……可是，就是忍不住嘛`);
  era.println();
  await era.printAndWait(`爱丽速子在无人的空间内喃喃说道`);
  era.println();
  await era.printAndWait(`与心爱之人接吻的喜悦`);
  await era.printAndWait(`与宿命之人相拥的热情`);
  await era.printAndWait(`与良缘之人缠绵的温存`);
  await era.printAndWait(`与相守之人眷恋的爱意`);
  era.println();
  await era.printAndWait(`这些感情，这些话语，要是不对人倾诉的话`);
  await era.printAndWait(`自己就要被这庞大的热量从内而外的烧尽了`);
  era.println();
  await era.printAndWait(`好喜欢`);
  await era.printAndWait(`好可爱`);
  await era.printAndWait(`好帅气`);
  await era.printAndWait(`好迷人`);
  await era.printAndWait(`好英俊`);
  await era.printAndWait(`好潇洒`);
  await era.printAndWait(`好色气`);
  await era.printAndWait(`好魔性`);
  era.println();
  await era.printAndWait(`任何的形容词套用在他身上都不为过`);
  await era.printAndWait(
    `对于理智的爱丽速子而言，痴迷于恋爱这无疑是件愚蠢的事`,
  );
  await era.printAndWait(
    `事实上，内心里也一直有个声音在耻笑着，耻笑露出如此蠢样的自己`,
  );
  await era.printAndWait(`但是……`);
  era.println();
  await era.printAndWait(`如果说理智就是要抛弃这样的感情`);
  await era.printAndWait(`如果说客观就是要降低对他的爱情`);
  era.println();
  await era.printAndWait(`那么，自己宁愿放弃理智`);
  await era.printAndWait(`化作在情欲的火焰中舞蹈的小丑`);
  era.println();
  await tachyon.say_and_wait(`啊啊……我，一定是疯了吧`);
  era.println();
  await era.printAndWait(`没有错`);
  await era.printAndWait(`这样的自己一定是疯了`);
  await era.printAndWait(
    `即便不提以前的自己，跟一般意义上社会的情侣相比，自己的爱也达到了一种疯癫的程度`,
  );
  await era.printAndWait(`但是，疯不疯的，不是早就有了定数了吗`);
  era.println();
  await era.printAndWait(`全世界都知道，爱丽速子是一名疯狂的马娘`);
  await era.printAndWait(`但是爱丽速子不在乎全世界`);
  await era.printAndWait(`他知道，爱丽速子是这样的马娘`);
  await era.printAndWait(`而爱丽速子只在乎他`);
  era.println();
  await era.printAndWait(`爱丽速子只害怕一件事，那就是自己会被他讨厌`);
  await era.printAndWait(`自己的行径与他般配吗？`);
  await era.printAndWait(`自己的爱意他会喜欢吗？`);
  await era.printAndWait(`爱丽速子，是能够与他共同扶持，一起走下去的人吗`);
  era.println();
  await era.printAndWait(`啊啊，说到底也就是这么回事而已`);
  era.println();
  await era.printAndWait(`燃烧的爱是耀眼的，也是稍纵即逝的`);
  await era.printAndWait(`那样的爱，是不持续的`);
  await era.printAndWait(`现在的自己，不过就是困于火光之中的飞蛾`);
  era.println();
  await era.printAndWait(`想要`);
  await era.printAndWait(`想要`);
  await era.printAndWait(`想要恒久的爱，想要永恒的爱`);
  await era.printAndWait(`想要钻石一般，永恒且闪耀的爱`);
  await era.printAndWait(`想要理所当然陪伴在他身旁的爱`);
  era.println();
  await era.printAndWait(`但是，这样的自己真的可以吗`);
  await era.printAndWait(`真的是能够托付一生的对象吗？`);
  await era.printAndWait(`他愿意承诺，永远爱着这样的自己吗`);
  await era.printAndWait(`自己有办法，永远爱着这样的他吗`);
  era.println();
  await tachyon.say_and_wait(`我……`);
  era.printButton(`选择永恒`, 1);
  era.printButton(`继续燃烧`, 2);
  const ret1 = await era.input();
  if (ret1 === 1) {
    await era.printAndWait(`与他并肩`);
    await era.printAndWait(`与他携手`);
    await era.printAndWait(`与他建立家庭`);
    await era.printAndWait(`与他产下生命`);
    era.println();
    await era.printAndWait(`想要……安定，且平稳的爱`);
    await era.printAndWait(`答案简单的自己都吓了一跳`);
    era.println();
    await era.printAndWait(`下班回家后，看见已经在家门口等待着自己的他`);
    await era.printAndWait(`如果是自己提早下班，就准备好料理等待他的归来`);
    await era.printAndWait(
      `虽然自己并不擅长料理，但为了他，爱丽速子愿意将曾经发誓奉献于研究的双手用于炒菜煮饭`,
    );
    await era.printAndWait(`假日两人一起出门，去哪里都可以`);
    await era.printAndWait(`公园、家具行，又或者实验用具店、化工药品店`);
    await era.printAndWait(`和他因为沙发的摆放位置这种芝麻蒜皮小事而吵架`);
    await era.printAndWait(
      `直到晚上都不肯承认错误的别扭的两人，最后因为不知谁主动的一个温暖的拥抱而重新言归于好`,
    );
    await era.printAndWait(
      `在新居落成的当天，一定会很累吧，哪怕是马娘的体力大概也会支撑不住`,
    );
    await era.printAndWait(
      `明明想要在好不容易落成的新家里好好温存，结果却直接倒在他怀中就这么睡着了`,
    );
    await era.printAndWait(`怀孕的那天，他绝对会很惊喜吧`);
    await era.printAndWait(
      `但是不能这么突然的告诉他，不然他到时候放出的强光会被邻居责怪扰民的`,
    );
    await era.printAndWait(`找个好时机，在白天吃早餐的时候`);
    await era.printAndWait(`用若无其事的口气说出“亲爱的，你要当爸爸了♡”`);
    await era.printAndWait(`到时候的他会是什么表情呢？`);
    await era.printAndWait(`想要在孩子出生后，带着孩子一起看我们的照片`);
    await era.printAndWait(`看当年的我是怎么被原实验体给迷住的`);

    await era.printAndWait(`大概，孩子一定会觉得爸爸很可怜吧，被妈妈这样欺负`);
    await era.printAndWait(`不过在床上被欺负的都是妈妈就是了♡`);
    await era.printAndWait(`想在孩子长大成家后，安慰在被窝里默默哭泣的他`);
    await era.printAndWait(
      `……或许是反过来也说不定呢，说不定，我其实会是个意外疼爱孩子的母亲`,
    );
    era.println();
    await era.printAndWait(`不是因为有趣所以才选择与他在一起`);
    await era.printAndWait(`而是与他在一起的每一天都如此有趣`);
    await era.printAndWait(`哪怕是这样无聊平淡的日常`);
    await era.printAndWait(
      `只要一想到陪在身边的人是他，就不禁感到无比的期待了`,
    );
    era.println();
    await me.say_and_wait(`速子！听说妳找我，有什么事吗？`);
    era.println();
    await era.printAndWait(`是哪个好心人通知的吗？还是心有灵犀？`);
    await era.printAndWait(`那都无所谓`);
    await era.printAndWait(`好好思考吧，该怎么说出口呢？`);
    await era.printAndWait(`嗯……就这样吧`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君，我在想，我们是不是……也该踏入下个阶段了？`,
    );
    await era.printAndWait(`说出口的瞬间仿佛听见了，教堂的钟声`);
  } else {
    era.println();
    await era.printAndWait(`永恒……吗？`);
    era.println();
    era.println();
    await era.printAndWait(`不知道`);
    await era.printAndWait(`不敢想`);
    era.println();
    await era.printAndWait(`自己有办法成为那样的陪伴者吗`);
    await era.printAndWait(`有办法陪伴着他度过一辈子的时光吗`);
    era.println();
    await era.printAndWait(
      `说到底，爱丽速子这名女性，真的有办法成为那样的陪伴者，那样的伴侣，那样的……`,
    );
    await era.printAndWait(`妻子吗？`);
    era.println();
    await era.printAndWait(`不会做饭的自己`);
    await era.printAndWait(`沉浸于自我的自己`);
    await era.printAndWait(`性格懒散的自己`);
    await era.printAndWait(`没有耐心的自己`);
    era.println();
    await era.printAndWait(`现在或许还能接受吧`);
    await era.printAndWait(`那未来呢`);
    await era.printAndWait(`十年后呢？`);
    await era.printAndWait(`二十年后呢？`);
    await era.printAndWait(`六十年、七十年后呢？`);
    era.println();
    await era.printAndWait(`这样的感情，真的有办法永恒下去吗？`);
    era.println();
    await era.printAndWait(`不知道`);
    await era.printAndWait(`不敢想`);
    era.println();
    await me.say_and_wait(`速子！听说妳找我，有什么事吗？`);
    era.println();
    await era.printAndWait(`是哪个多事的人通知的吗？还是不凑巧的心有灵犀`);
    await era.printAndWait(`……那都无所谓`);
    await era.printAndWait(`压抑吧，冷藏吧，封印吧`);
    await era.printAndWait(`将自己的可笑想法封印`);
    era.println();
    await tachyon.say_and_wait(`……没什么`);
    era.println();
    await era.printAndWait(
      `让这名为爱情的熊熊火焰，继续以自己的担忧及不安为燃料燃烧下去`,
    );
    await era.printAndWait(`这大概就是优柔寡断的自己必须承受的永恒责罚吧`);
    era.drawLine();
    await era.printAndWait(
      `你摇了摇头，将内心的奇怪想法飘散，毫无犹豫的踏出了门外`,
    );
    //todo 声望降低为0
  }
};
/**
 * 速子的爱慕事件，id=32
 *
 * @author 名贵易碎电子盆栽孕袋女士
 * @author 黑奴队长（修订） 黑奴一号
 *
 *
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  if (event_object && handlers[event_object.arg]) {
    await handlers[event_object.arg](tachyon, me);
  } else {
    const love = era.get('love:32');
    if (handlers[love]) {
      await handlers[love](tachyon, me);
    } else {
      throw new Error();
    }
  }
};
