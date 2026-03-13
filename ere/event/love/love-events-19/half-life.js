const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

/**
 * @param {CharaTalk} digital
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (digital, me, callname) => {
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
    digital.uma_sex_title,
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
    digital.uma_sex_title,
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
    digital.uma_sex_title,
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
  era.printMultiColumns([{ type: 'divider' }], { offset: 8, width: 8 });
  await era.waitAnyKey();
  era.printMultiColumns([{ content: '爸爸妈妈：', type: 'text' }], {
    offset: 8,
    width: 8,
  });
  await era.waitAnyKey();
  era.printMultiColumns(
    [
      {
        config: { align: 'center', isParagraph: true },
        content: '谢谢你们。',
        type: 'text',
      },
    ],
    {
      offset: 8,
      width: 8,
    },
  );
  await era.waitAnyKey();
  era.printMultiColumns(
    [
      {
        config: { align: 'right' },
        content: ['——你们的', child],
        type: 'text',
      },
    ],
    {
      offset: 8,
      width: 8,
    },
  );
  await era.waitAnyKey();
  era.printMultiColumns([{ type: 'divider' }], { offset: 8, width: 8 });
  await era.waitAnyKey();
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
