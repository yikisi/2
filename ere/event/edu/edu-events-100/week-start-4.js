const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const palace = require('#/event/snippets/palace');
const palace_relation = require('#/event/snippets/palace-relation');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers.palace = async (acute, me, callname) => {
    await palace(acute, me);
    if (era.get('cflag:100:殿堂') === 2) {
      era.drawLine();
      const { ending } = new AcuteEduMarks();
      era.set('flag:当前位置', location_enum.gate);
      if (ending > 9) {
        await print_event_name('誓言', acute);
      } else {
        await print_event_name('起点', acute);
      }
      era.set('flag:当前位置', location_enum.office);
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 相识的第四年，三月，',
      ]);
      await era.printAndWait('气温虽然有所回升，但地面仍然湿冷。');
      if (new AcuteEduMarks().ending > 9) {
        await era.printAndWait([
          '这是 ',
          acute.get_colored_name(),
          ' 步入殿堂后的第三天。',
        ]);
        await era.printAndWait([
          '也是 ',
          me.get_colored_name(),
          ' 和 ',
          acute.get_colored_name(),
          ' 来到北海道度假的第一天。',
        ]);
        era.drawLine({ content: '北海道 民俗旅馆' });
        await acute.say_and_wait('呜啊～我还是第一次看到活着的帝王蟹啊——');
        await era.printAndWait([
          '面对着桌前的盛宴，',
          acute.get_colored_name(),
          ' 由衷得发出着盛叹。',
        ]);
        await era.printAndWait([
          '呵，得亏 ',
          me.get_colored_name(),
          ' 早有准备。',
        ]);
        await era.printAndWait([
          '没错，早在度假度假开始之前。名为 ',
          me.get_colored_actual_name(),
          ' 的训练员，就已经熬夜彻读民俗旅馆的宣传手册，通篇背诵下了三千字的《北海道生存美食指南》——',
        ]);
        await me.say_and_wait([
          '哼哼～',
          acute.get_colored_name(),
          '，你知道吗？其实帝王蟹，并不是一种螃蟹，而是一种寄居蟹——」',
        ]);
        await acute.say_and_wait('唔姆唔姆～');
        await me.say_and_wait(
          '而餐桌上人们常吃的帝王蟹啊，主要分为四种。而我们吃的，就是当地的特产花咲蟹——',
        );
        await acute.say_and_wait('咕噜咕噜～');
        await me.say_and_wait(
          '而要说花咲蟹的话，就不得不说她的三吃和六种说法——',
        );
        await acute.say_and_wait('哎嘿——啊哈哈～');
        era.printButton(`……我说，${acute.name}。你有在听我说话吗？`, 1);
        await era.input();
        await acute.say_and_wait('有哦～');
        await era.printAndWait([acute.sex, '一面说着，一面忙碌着手中的工作——']);
        await acute.say_and_wait('你刚刚是在说，帝王蟹的四种写法对吧～');
        await me.say_and_wait('完·全·不·是！');
        await era.printAndWait(
          '别把美食介绍说成像是某个哀怨可怜人的名言成吗？',
        );
        await acute.say_and_wait(
          '啊哈哈～我是觉得手头上的活，还是挺有趣的啦。',
        );
        await era.printAndWait([
          '循声望去，却见 ',
          acute.get_colored_name(),
          ' 的手中，持着一把金色的蟹剪。',
        ]);
        await era.printAndWait(
          '沿着边缘剪开蟹腿的壳，然后在关节处环绕上一圈。这样就能够一面持着蟹爪，一面最大程度品味着蟹肉。',
        );
        await era.printAndWait(
          '预订的这家民俗旅店里招待的帝王蟹，通常情况下都是处理好才端上来的。像这样让客人自行处理的蟹腿，还真是挺少见的。',
        );
        await me.say_and_wait('……不会是店大欺客吧？');
        await acute.say_and_wait('是我自己要求的啦。');
        await acute.say_and_wait(
          '像是这样用小剪子一点点箭蟹壳的，让我有点怀念在老家学的手工课呢……',
        );
        await era.printAndWait(
          '清澈的眼眸缓缓睁大、手持蟹剪的小手微微摆动。嘎吱嘎吱的声响，蟹壳的碎片残落在桌面之上。',
        );
        await era.printAndWait([
          '未过多时，一根晶莹剔透的蟹肉棒，出现在了 ',
          acute.get_colored_name(),
          ' 的手中。',
        ]);
        await acute.say_and_wait(['呐，', callname, '。']);
        await me.say_and_wait('嗯？');
        await acute.say_and_wait('来，啊～');
        await era.printAndWait([
          '在如同母亲般的温柔声下，一根蟹肉棒已近在 ',
          me.get_colored_name(),
          ' 的脸前。',
        ]);
        await me.say_and_wait(['我说啊，', acute.get_colored_name(), '……']);
        await acute.say_and_wait('啊～');
        await me.say_and_wait('这里毕竟是公众场合……');
        await acute.say_and_wait('啊～');
        await me.say_and_wait('那什么，自己动手丰衣足食……');
        await acute.say_and_wait('啊～');
        await me.say_and_wait('……');
        await era.printAndWait(
          '——在不张口的话，这根蟹肉棒恐怕就要抵在我的鼻子上了！',
        );
        await era.printAndWait(
          '张开口，朝向那硕大笔挺、散发着硕红光泽蟹肉棒，轻轻地咬下一口。',
        );
        await era.printAndWait(
          '紧实的口感，滚热的汁液，还有独属于海洋生物所有的咸味，还有该说是真不愧是高级食材吗的高级感——',
        );
        await me.say_and_wait('唔……这个，真好吃哦。');
        await me.say_and_wait([
          '呐，',
          acute.get_colored_name(),
          '，你也来尝一口——',
        ]);
        await acute.say_and_wait('啊，等一会儿哦～');
        await era.printAndWait(
          '品味了不错的美食，正想要将手中的美食进行分享。',
        );
        await era.printAndWait([
          '却发现一旁的 ',
          acute.get_colored_name(),
          '，却饶有兴趣的使用着蟹剪，摆弄着下一个蟹腿。',
        ]);
        era.printButton('「…………」', 1);
        await era.input();
        await era.printAndWait('看了看刚被塞进嘴里的蟹肉棒。');
        await acute.say_and_wait('嗯哼哼～哼哼哼～');
        await era.printAndWait([
          '又看了看在吃饭时间却还在摆弄着手艺活的 ',
          acute.get_colored_name(),
          '。',
        ]);
        await era.printAndWait(
          '一只手取下蟹肉棒，这使我一时充满了未知的决心。',
        );
        await me.say_and_wait(['呐，', acute.get_colored_name(), '。']);
        await acute.say_and_wait(['怎么啦，', callname, '？']);
        await me.say_and_wait('现在是吃饭时间对吧？');
        await acute.say_and_wait('是啊。～');
        await me.say_and_wait('所以说啊……');
        await era.printAndWait([
          '随后，一只手探在了',
          acute.sex,
          '的身前，阻断了 ',
          acute.get_colored_name(),
          ' 的手艺。',
        ]);
        await era.printAndWait([
          '深色的眼眸一时间的闪烁，这只突然探入其胸前的世界的右手，显然吸引了',
          acute.sex,
          '的注意。',
        ]);
        await era.printAndWait([
          '而随后，这只闯入的手，一如伊甸园中那蛇，勾住了 ',
          acute.get_colored_name(),
          ' 的下颚。',
        ]);
        await era.printAndWait('为之偏转，随后两眸相见。');
        await era.printAndWait([
          '或是被这突然的遭遇所吓住了，',
          acute.get_colored_name(),
          ' 也不反抗，只是呆愣在原地。洁白的脸颊，渐染上粉红的踪迹，真分不清是喜悦，还是烦情。',
        ]);
        await acute.say_and_wait(['那、那个……', callname, '……？']);
        await era.printAndWait(
          '这声音好似迟疑、好似惊异，七分的不解下，夹杂着三分的欣奇。',
        );
        await era.printAndWait(
          '已然迈出的手指，不会撤离，微妙的眼神之中，燃烧着前进的雄心。',
        );
        await era.printAndWait('前哨的任务早已完成，接下来的内容，才是正戏。');
        await me.say_and_wait(['呐，', acute.get_colored_name(), '～。']);
        await acute.say_and_wait('嗯❤️……');
        await me.say_and_wait('现在是吃饭的时间，对吧？');
        await acute.say_and_wait('……嗯？');
        await me.say_and_wait('所以说啊……');
        await era.printAndWait('微笑的表情，反衬着大（蟹）肉棒的倒影。');
        await era.printAndWait(
          '掌握之间，是温和的面容，分寸之地，是凶恶的巨兽——',
        );
        await era.printAndWait('就是现在，孤独的勇士！');
        await me.say_and_wait('给我好好吃吃蟹肉棒啊！！！！');
        await era.printAndWait([
          '硕大的长矛，在这一瞬之间，冲进了 ',
          acute.get_colored_name(),
          ' 的口中。',
        ]);
        await acute.say_and_wait('咕！？');
        await acute.say_and_wait('唔、姆、噜……');
        await acute.say_and_wait('…………');
        await acute.say_and_wait('……❤️');
        await era.printAndWait('——————');
        await era.printAndWait('——不得不说，');
        await era.printAndWait('这真是一场极好的宴会。');
        era.drawLine();
        await era.printAndWait([
          '这是与 ',
          acute.get_colored_name(),
          ' 相识的第四年的第三月，',
        ]);
        await era.printAndWait([
          '这是 ',
          acute.get_colored_name(),
          ' 步入殿堂后的第三天。',
        ]);
        await era.printAndWait([
          '在理事长的慷慨解囊下，',
          me.get_couple_title(),
          ' 来到了北海道的一家民俗旅店度假。',
        ]);
        await era.printAndWait([
          '……嘛，虽然在 ',
          me.get_colored_name(),
          ' 看来的话，这样的旅馆对于自己来说，实在有些太过奢侈了。',
        ]);
        await era.printAndWait('——夜已深了。');
        await era.printAndWait('本想着泡个温泉后，早早的在被窝中进入梦乡。');
        await era.printAndWait('可辗转反侧，却难以入眠。');
        await era.printAndWait([
          '掀开被子，望向窗外的明月，莫名的惆怅涌上了 ',
          me.get_colored_name(),
          ' 的心头。',
        ]);
        await era.printAndWait([
          '回过头，望见着的是 ',
          acute.get_colored_name(),
          ' 安详的睡脸。',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('趁着夜色，踮起脚尖，');
        await era.printAndWait('轻轻地、轻轻地，拉开房门。');
        await era.printAndWait('步入那无边的深夜。');
        await era.printAndWait('………………');
        await era.printAndWait('夜晚，总是漆黑。');
        await era.printAndWait('漆黑的好似能吞没人的一切。');
        await era.printAndWait('可淡淡的星与月，尚能留下萤火般的微光。');
        await era.printAndWait(
          '予以人暂得以偷生的方向，与足以继续向前的希望。',
        );
        await era.printAndWait('一月北海道的夜晚，四面依旧冷清。');
        await era.printAndWait('但恰是这冷清，能激得人清醒。');
        await era.printAndWait('宴会不错、床铺很软、暖气充足，');
        await era.printAndWait('可这一切总像是浮华的虚影，梦幻泡影。');
        await era.printAndWait('——是啊，自己还是太过软弱。');
        await era.printAndWait('想要向前，那唯有更进一步「精进」——');
        await acute.say_as_unknown_and_wait(['你还没睡啊，', callname, '。']);
        await era.printAndWait('身后传来了早已熟悉的声音。');
        await era.printAndWait('身体因冰冷而抖擞，可精神却因凄寒而彻清。');
        era.printButton(`「我还以为你睡着了呢，${acute.name}。」`, 1);
        await era.input();
        await acute.say_and_wait('在你入睡之前，我一直都醒着哦。');
        await era.printAndWait(
          '身后略过一个身影，那是一颗留着深灰色长发的跳动之心。',
        );
        await era.printAndWait([
          acute.sex,
          '的步伐总比 ',
          me.get_colored_name(),
          ' 更快，于是更近于池塘、更近于明月。',
        ]);
        await acute.say_and_wait('我还以为，你会在今天的宴会上告诉我呢。');
        await me.say_and_wait('……');
        await me.say_and_wait('你是说……什么呢？');
        await acute.say_and_wait('是去法国的事情哦，训练员桑。');
        await acute.say_and_wait([
          '你已经接受了法国赛',
          acute.get_uma_sex_title(),
          '届的邀请、去巴黎深造。然后三天之后，就会一个人坐上去巴黎的飞机，对吧？',
        ]);
        await me.say_and_wait('……');
        await era.printAndWait([
          acute.sex,
          '说的，毫无疑问，是不加遮掩的事实。',
        ]);
        await acute.say_and_wait('……为什么，不肯告诉我呢？');
        await era.printAndWait('深灰色的背影，述说着冷淡的词句。');
        await me.say_and_wait([
          '……我并不是想要瞒你，',
          sys_get_colored_callname(0, 100),
          '。」',
        ]);
        await me.say_and_wait('只是，不知道该如何告诉你而已。');
        await me.say_and_wait([
          '如果，要在赛',
          acute.get_uma_sex_title(),
          '届更进一步的话。现在的我，恐怕并没有真正的资格，站在你的身边吧。',
        ]);
        await me.say_and_wait('可我……想要真正有资格的，站在你的身边。');
        await acute.say_and_wait('所以……你打算去巴黎，进修三年？');
        await me.say_and_wait('……没错。');
        await acute.say_and_wait('所以……你打算去巴黎，进修三年？');
        await era.printAndWait('寒风之中，沉默的应语。');
        await era.printAndWait('无可奈何的冷漠，独自坚持的无情。');
        await era.printAndWait('明月之下，寒风微拂、林声依旧。');
        await era.printAndWait('深灰色的背影，悄悄地昂头。');
        await acute.say_and_wait(['……你知道『凯旋门赏』吗，', callname, '？']);
        await me.say_and_wait('你说，法国赛马届的最高奖赛？');
        await acute.say_and_wait([
          '是呢，就是那个每年我们这边都会选出『最强',
          acute.get_uma_sex_title(),
          '』孤身过海、前往巴黎所参加的比赛呢。',
        ]);
        await acute.say_and_wait('虽然今年，可能没有这个机会了。');
        await acute.say_and_wait('但是啊，如果是明年的话——');
        await me.say_and_wait('……你是说？');
        await acute.say_and_wait('我是说……');
        await era.printAndWait('月光之下，深灰的身影回转，');
        await era.printAndWait('凛然的身姿之下，燃烧着的是前进的雄心。');
        await era.printAndWait(
          '这是三分的迟疑、七分的惊奇，好似是一场遗憾，好似无上欣喜。',
        );
        await era.printAndWait(
          '那是苏格拉底的麦穗，震耳欲隆，却又几近高尚者的温柔。',
        );
        await era.printAndWait([
          '月光之下，星光璀璨，灰色的',
          acute.get_teen_sex_title(),
          '，许下了',
          acute.sex,
          '的诺言。',
        ]);
        await acute.say_and_wait('既然你要去巴黎的话，那么我也会跟过去。');
        await acute.say_and_wait('再给我一年时间吧，训练员。');
        await acute.say_and_wait('我一定会，把你追回来。');
        await acute.say_and_wait([callname, '——']);
        era.drawLine();
        await era.printAndWait('北海道的故事，暂时告一段落。');
        await era.printAndWait('而未来的故事，还有很长、很长——');
      } else {
        const tokino = get_chara_talk(301),
          chairman = get_chara_talk(302);
        await era.printAndWait([
          '这是 ',
          acute.get_colored_name(),
          ' 步入殿堂后的第六天。',
        ]);
        await era.printAndWait([
          '也是曾一度相濡以沫的 ',
          me.get_colored_name(),
          ' 和 ',
          acute.get_colored_name(),
          '，即将分离的第一年。',
        ]);
        era.drawLine({ content: '东京 国际机场' });
        era.printButton('「送到这里就行了。」', 1);
        await era.input();
        await me.say_and_wait([
          '谢谢你们一路陪我到这，',
          sys_get_colored_callname(0, 302),
          '，',
          sys_get_colored_callname(0, 301),
          '。',
        ]);
        await tokino.say_and_wait('啊哈哈——这么多年的，这么客气做什么。');
        await chairman.say_and_wait([
          '同 意！',
          sys_get_colored_callname(302, 0),
          '，早就是我们特雷森学院的家人了。',
        ]);

        await era.printAndWait([
          '机场的登机口前，',
          me.get_colored_name(),
          ' 与 ',
          tokino.get_colored_name(),
          '、',
          chairman.get_colored_name(),
          '，做着最后的寒暄。',
        ]);
        await tokino.say_and_wait(
          '不过啊……真没想到，你竟然真的接受了法国那边的邀请啊。',
        );
        await chairman.say_and_wait(
          '惊讶！听到这个消息的时候，我震惊的萝卜都掉在地上了。',
        );
        await me.say_and_wait('哈哈……可能这样做确实不太像我的风格吧。');
        await era.printAndWait([
          '一手揉着后脑勺，面对着 ',
          tokino.get_colored_name(),
          ' 与 ',
          chairman.get_colored_name(),
          '，自己不由得尴尬的笑出了声。',
        ]);
        await me.say_and_wait('其实……我也是最近才下的决心。');
        await me.say_and_wait([
          '在成为 ',
          acute.get_colored_name(),
          ' 训练员的这三年里，我意识到了自己离真正优秀的训练员，还差的太远了。',
        ]);
        await me.say_and_wait(
          '能够处变不惊的心理素质也好、能够准确把握宽严程度来设计的训练计划也好',
        );
        await me.say_and_wait(
          '现在的我，离一位『优秀的训练员』，恐怕还差得很远吧。',
        );
        await tokino.say_and_wait(
          '所以，你决定接受法国赛马届的邀约，去巴黎深研一段时间？',
        );
        await me.say_and_wait(
          '是啊——不过就像你们知道的那个我一样。如果只靠我自己的话，是不可能有背井离乡胆量的。',
        );
        await me.say_and_wait([
          '事实上……是 ',
          acute.get_colored_name(),
          '，帮助我下定的决心。',
        ]);
        await me.say_and_wait([
          '即便我是如此无能且失格的训练员，',
          acute.get_colored_name(),
          ' 也依旧坚强着，凭借着自己的努力以及小小的运气，成功的步入殿堂之中了，不是吗？',
        ]);
        await me.say_and_wait('所以啊，我想——自己或许也应该努努力。');
        await me.say_and_wait([
          '我想……让自己真正有资格，作为一名训练员、站在 ',
          acute.get_colored_name(),
          ' 的身边。',
        ]);
        await tokino.say_and_wait('这样吗……');
        await chairman.say_and_wait(
          '无 悔！既然这是你做出的决定，那么我们当然会无条件支持你的。',
        );
        await tokino.say_and_wait([
          '不过……',
          acute.get_colored_name(),
          ' ',
          acute.sex,
          '今天为什么没有来送行呢？',
        ]);
        await me.say_and_wait([
          '这个吗……其实，去法国的事，其实我到现在还瞒着',
          acute.sex,
          '。',
        ]);
        await chairman.say_and_wait([
          '惊 讶！？你现在还瞒着 ',
          acute.get_colored_name(),
          '！？',
        ]);
        await me.say_and_wait(['哈哈……其实，我有给', acute.sex, '留信。']);
        await me.say_and_wait(['其实，我也不知道这样做是对还是错。']);
        await me.say_and_wait([
          '只不过如果真的要跟',
          acute.sex,
          '离开的话……果然，还是一个人偷偷地、像丧家犬一样溜走……要更好呢。',
        ]);
        await era.printAndWait('【嘣、嘣、嘣、嘣～】');
        await era.printAndWait('【请前往巴黎的旅客请注意～】');
        await era.printAndWait('【您乘坐的QR5201次航班现在开始登机～】');
        await me.say_and_wait([
          '看来时间已经到了——',
          sys_get_colored_callname(0, 302),
          '、',
          sys_get_colored_callname(0, 301),
          '。',
        ]);
        await tokino.say_and_wait(['一路顺风，', me.actual_name, '。']);
        await chairman.say_and_wait('宏 图！学成后，记得早日归来！');
        await me.say_and_wait('谢谢。那么——');
        await me.say_and_wait('我们三年后见。');
        await era.printAndWait('………………');
        await era.printAndWait('平淡无奇的排队，了无生趣的检票。');
        await era.printAndWait('从二楼登下电梯，走入大厅，');
        await era.printAndWait('这一切说不上有趣，更不值一提。');
        await era.printAndWait(
          '恍惚间，有些口渴。习惯性的探出手，试图从挎包中取出解渴的萝卜干。',
        );
        await era.printAndWait([
          '可翻找了一遍，这才想起来，其实，',
          me.get_colored_name(),
          ' 出门从没有备食物的习惯。',
        ]);
        await me.say_and_wait('……');
        await me.say_and_wait('……哈哈——');
        era.printButton(
          '「我啊，到底是有多长的时间，没有一个人出远门了呢？」',
          1,
        );
        await era.input();
        await era.printAndWait('川急的人流中间，没有回应。');
        await era.printAndWait('不由自主的抬起了头。回望向登机口。');
        await era.printAndWait('那儿盆景依旧，来回着数个人影。');
        await me.say_and_wait(
          ['……要是 ', acute.get_colored_name(), ' 在那的话，该有多好啊？'],
          true,
        );
        await era.printAndWait('脑海中不由得想到，');
        await era.printAndWait('而随之，便是自己温和得自嘲。');
        era.printButton('（事到如今……这是在想什么呢。）', 1);
        await era.input();
        era.printButton(
          `（${me.actual_name} 啊，${me.actual_name}，你怎能如此的懦弱）`,
          1,
        );
        await era.input();
        await era.printAndWait('自嘲的苦笑，飘散于天际，随人海所吞没。');
        await era.printAndWait('坚定好精神。');
        await era.printAndWait([
          me.get_colored_name(),
          ' 踏出了「最初」的一步——',
        ]);
        era.drawLine();
        await acute.print_and_wait('盆景之下，玻璃之旁。');
        await acute.print_and_wait([
          '一个',
          acute.get_child_sex_title(),
          '，静静地坐在这里。',
        ]);
        await acute.print_and_wait([
          '人们常说',
          acute.get_child_sex_title(),
          '平静、温和，以至于有些老态龙钟。',
        ]);
        await acute.print_and_wait([
          '其实，',
          acute.get_child_sex_title(),
          '并不像人们口中所说的那样，总是平静与温和。',
        ]);
        await acute.print_and_wait([
          acute.sex,
          '也如常人一般，会感到压力，感到难受，感到无处诉说的悲凉，感到撕心裂肺的痛苦。',
        ]);
        await acute.print_and_wait([
          '只不过——',
          acute.sex,
          '并不喜欢将这些私密与人述说。',
        ]);
        await acute.print_and_wait([acute.sex, '更喜欢，一个人偷偷地藏起来。']);
        await acute.print_and_wait('藏在一个「没有人发现」的地方。');
        await acute.print_and_wait('在那里，轻轻地坐下来。');
        await acute.print_and_wait('就像「一开始」那样——');
        tokino.name = `头戴绿色帽子的${tokino.get_phy_sex_title()}`;
        acute.name = acute.get_child_sex_title();
        await tokino.say_and_wait(['——不去跟', me.sex, '告别吗？']);
        await acute.print_and_wait([
          '身旁，好心的',
          acute.get_phy_sex_title(),
          '，直立在',
          acute.sex,
          '的侧方。',
        ]);
        await acute.say_and_wait('不，不用……这样就好。');
        await tokino.say_and_wait('是吗……');
        await acute.print_and_wait([
          '眺望向台下的人流，凝练出',
          me.get_child_sex_title(),
          '的背影。',
        ]);
        await acute.print_and_wait([
          '不知怎得，',
          acute.get_phy_sex_title(),
          '不由自主的叹了声气。',
        ]);
        await tokino.say_and_wait('这家伙，真是个蠢蛋呢——');
        await acute.say_and_wait(['你是说，', callname, ' 吗？」']);
        await tokino.say_and_wait(['除了', me.sex, '以外，还能有谁呢？']);
        await acute.print_and_wait([
          '说罢，',
          acute.get_phy_sex_title(),
          '的帽子为之一抖，隐藏着的秘密呼之欲出。',
        ]);
        await acute.say_and_wait('难道，我就不是了吗？', true);
        await acute.print_and_wait([
          acute.get_child_sex_title(),
          '将心中涌出的这句话，咽回到自己的口中。',
        ]);
        await acute.print_and_wait([
          '毕竟，',
          me.get_child_sex_title(),
          '总是不擅长隐瞒。',
        ]);
        await acute.print_and_wait('不习于网络的空间，却又没有现实的余地。');
        await acute.print_and_wait([
          '来往的邮寄、NOK的劝诱，总是在送达特雷森后，经由',
          acute.get_child_sex_title(),
          '所转递。',
        ]);
        await acute.print_and_wait('——从一开始，二人之间就不存在任何的秘密。');
        await tokino.say_and_wait('……现在还来得及哦？');
        await acute.print_and_wait([
          acute.get_phy_sex_title(),
          '似乎有些担心。',
        ]);
        await tokino.say_and_wait('如果要见最后一面的话——');
        await acute.say_and_wait('不用了。');
        await acute.print_and_wait([
          acute.get_child_sex_title(),
          '坐在原地，斩钉截铁。',
        ]);
        await acute.print_and_wait([
          '躁动的内心，总于使',
          acute.sex,
          '鼓足了勇气。',
        ]);
        await acute.print_and_wait([
          '面向',
          tokino.get_phy_sex_title(),
          '，一向懦弱的',
          acute.get_child_sex_title(),
          '，终于吐露出了自己的心声——',
        ]);
        await acute.say_and_wait('笨蛋的话——这里，还有一个。');
        await acute.print_and_wait([
          '这一刻，步向殿堂的',
          acute.get_child_sex_title(),
        ]);
        await acute.print_and_wait('第一次，拥有了「勇气」。');
        era.drawLine();
        acute.name = era.get('callname:100:-2');
        await acute.print_and_wait('飞行的铁鸟，轰鸣得奏响。');
        await acute.print_and_wait('而在铁穹中的人们，不曾听到它的离音。');
        await acute.print_and_wait([
          '望向天空的浮云，',
          acute.get_colored_name(),
          ' 拆封手中的信函。',
        ]);
        await acute.print_and_wait('里面，是粉色有些稍硬的卡纸。');
        await acute.print_and_wait('上面写满了潦草的字迹。');
        await me.say_and_wait([acute.get_colored_name(), '，敬启。']);
        await me.say_and_wait(
          '在你看到这封信的时候，我应该已经坐上了前往巴黎的飞机。',
        );
        await me.say_and_wait(
          '请原谅我的不辞而别。因为我实在不知该以什么样的表情，去向你告知我的离开。',
        );
        await me.say_and_wait(
          '作为你的训练员，我们一同经过了漫长而有趣的三年。',
        );
        await me.say_and_wait('这三年里，我们共同创造了许许多多的回忆。');
        await me.say_and_wait('懦弱的我也在这段时间里，一度接受着你的帮助。');
        await me.say_and_wait(
          '许是出于幸运，又必然出于你无时无刻的努力，这三年的历练，终于使我们步入了殿堂。',
        );
        await me.say_and_wait('但也正因此，让我意识到——我还有太多需要学习。');
        await me.say_and_wait(
          '于是，我决定接受法国方面的邀请。到国外更为进步的赛马届进修学习。',
        );
        await me.say_and_wait(
          '很遗憾，在进修的这三年里，我不再能担任你的训练员了。',
        );
        await me.say_and_wait(
          '但如果可以——三年之后，若你仍在赛马届活动。请将那时你的担当训练员的职位，空余给在下。',
        );
        await me.say_and_wait(
          '请原谅我的私心——但也因这份私心，这三年里，我将刻苦的努力。',
        );
        await me.say_and_wait('无论如何，我都将以你为目标。');
        await me.say_and_wait('以作为真正能站在你身边的训练员，而为之努力。');
        await me.say_and_wait('以上，即颂坤安。');
        await me.say_and_wait(['——', me.get_colored_actual_name()]);
        era.drawLine();
        await acute.say_and_wait('……');
        await acute.say_and_wait('我们啊——');
        await acute.say_and_wait('——都是，不折不扣的，大蠢蛋呢。');
        await acute.print_and_wait('浩瀚的天穹之下，唯剩下，两者的凛然。');
      }
    } else {
      await palace_relation(acute, me);
    }
  };

  handlers.leg = async (acute, me, callname, flags) => {
    await print_event_name(`在 ${acute.name} 的膝枕上`, acute);
    await era.printAndWait('兴许是未能好好休息的缘故，今早总觉得睡眼惺忪。');
    await era.printAndWait('真糟糕，马上就是训练的时间了；');
    await era.printAndWait([
      '作为一名成熟的训练员，可不能让 ',
      me.get_colored_name(),
      ' 看到懒散的这一面——',
    ]);
    await acute.say_and_wait([callname, '？']);
    await era.printAndWait('——！？');
    await acute.say_and_wait('待喘息之际，已然出现身后。');
    era.printButton(`「奇、${acute.name}！？何时来的？」`, 1);
    await era.waitAnyKey();
    await acute.say_and_wait([
      '很早就来了哦？只是 ',
      callname,
      ' 看起来很累，所以一直没打扰哦～',
    ]);
    await era.printAndWait([
      '温和的话语下隐藏着无声的气息，身着红色运动服的',
      acute.get_teen_sex_title(),
      '随即坐在白百合花旁的阶梯。',
    ]);
    await acute.say_and_wait([
      '离训练开始还有一段时间……来休息一下吧，',
      callname,
    ]);
    await era.printAndWait([
      acute.sex,
      '一面拍着膝上的天府之地，一面招舞着右手诱 ',
      me.get_colored_name(),
      ' 堕入幸福之所。',
    ]);
    await era.printAndWait([
      '……一开始，',
      me.get_colored_name(),
      ' 是拒绝的。',
    ]);
    await era.printAndWait('但那里真的很幸福……还散发着薄荷味的清香。');
    await era.printAndWait([
      me.get_colored_name(),
      '或许有意得在避开',
      acute.sex,
      '的视线，',
    ]);
    await era.printAndWait([
      '但温暖的手掌已经附上了 ',
      me.get_colored_name(),
      ' 的发梢。',
    ]);
    await era.printAndWait([
      '随后，轻吟的歌儿在 ',
      me.get_colored_name(),
      ' 耳边回荡——',
    ]);
    switch (get_random_value(0, 3)) {
      case 0:
        await acute.say_and_wait('风来啦～雨来啦～雷公背着鼓来了～');
        await acute.say_and_wait('你敲敲～我敲敲～敲得雷公弯了腰～');
        await acute.say_and_wait('你砸砸～我砸砸～砸得雷公龇了牙～');
        break;
      case 1:
        await acute.say_and_wait('大大大～小小小～');
        await acute.say_and_wait('一二三四五六七～');
        await acute.say_and_wait('大大大～小小小～');
        await acute.say_and_wait('哆唻咪发嗦啦西～');
        break;
      case 2:
        await acute.say_and_wait('想快点告诉你多想天天在一起～');
        await acute.say_and_wait('研究十万个为什么的问题～');
        await acute.say_and_wait('快点告诉你明白一些大道理～');
        await acute.say_and_wait('朋友之间最看重是情谊～');
        await acute.say_and_wait('我的心放在你那里～');
        break;
      case 3:
        await acute.say_and_wait('月亮～在白莲花般的云朵里～穿行～');
        await acute.say_and_wait('晚风吹来一阵阵快乐的歌声～');
    }
    await era.printAndWait('……………………');
    await era.printAndWait('那并非是多么好听的歌谣，');
    await era.printAndWait('硬要说的话，可能歌唱者还多少有些不着调。');
    await era.printAndWait('但是……躺在膝枕之上，听着这样的歌谣，');
    await era.printAndWait('总会感到由衷的安心——');
    flags.wait_flag = get_attr_and_print_in_event(100, [0, 0, 0, 10, 0], 0);
  };
};
