/**
 * @file 爱丽数码 - 育成
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-19/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-19/week-end-1'),
  require('#/event/edu/edu-events-19/week-end-2'),
].forEach((f) => f(week_end_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceStartParams):Promise<boolean|void>>} */
const race_start_handlers = {};

race_start_handlers[race_enum.begin_race] = async (digital, me, callname) => {
  if (era.get('cflag:19:育成回合计时') >= 48) {
    return true;
  }
  await print_event_name('出道战开始！', digital);
  await digital.say_and_wait([
    '嗯哼，能听到吗？我是 ',
    digital.get_colored_name(),
    '，正值新叶萌发之时，各位大家过得好吗？我现在正站在出道战的亮相圈里，在周围的则是……',
  ]);
  await digital.say_and_wait([
    '数码……数码……在',
    digital.uma_sex_title,
    '酱的周边……倒不如说就在',
    digital.uma_sex_title,
    '酱里面！',
  ]);
  await digital.say_and_wait([
    '已经要……萌死了……',
    callname,
    '！能看到吗！这周边的',
    digital.uma_sex_title,
    '酱们！',
  ]);
  await era.printAndWait([
    '看得到，周围的',
    digital.uma_sex_title,
    '有些都紧张地发抖了，有些眼神在发光，但其中最特别的是……',
  ]);
  await era.printAndWait([
    '托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——',
    digital.get_colored_name(),
    '。',
  ]);
  await digital.say_and_wait([
    '吸溜溜，我想说的是',
    digital.sex,
    '们还能到什么地步啊！尊力检测仪都已经爆表了，而我，居然能够混入其中！',
  ]);
  await digital.say_and_wait('哈～要，尊死了……数码……就要变成灰了……');
  await me.say_and_wait('现在可是要比赛了哦！');
  await digital.say_and_wait('哇！对啊！现在不是升天的场合！');
  await digital.say_and_wait([
    '现在的我，也是和',
    digital.uma_sex_title,
    '酱们肩并肩的存在，绝不能让我的存在使',
    digital.sex,
    '们蒙上阴影！',
  ]);
  await digital.say_and_wait(
    '我会努力的！能量充足，检查完备！尊力机能100%运作！',
  );
  await digital.say_and_wait([
    '数码的眼睛就是底片，要把',
    digital.uma_sex_title,
    '酱们所有的笑容与泪水全都印在里面！',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    '，怀抱着觉悟，走向了赛场。',
  ]);
};

race_start_handlers[race_enum.hyac_sta] = async (digital, me, callname) => {
  await print_event_name(
    [race_infos[race_enum.hyac_sta].get_colored_name(), ' 开始！'],
    digital,
  );
  const dotou = get_chara_talk(58);
  await era.printAndWait([
    '在前一段时间里，',
    race_infos[race_enum.nikk_hai].get_colored_name(),
    ' 中，',
    dotou.get_colored_name(),
    ' 拿到了第二名。',
  ]);
  await era.printAndWait([
    '本来只是想要在地下通道祝贺 ',
    dotou.get_colored_name(),
    ' 的 ',
    digital.get_colored_name(),
    '，还为之前的逾越头疼的 ',
    digital.get_colored_name(),
    '，却意外地收获了 ',
    dotou.get_colored_name(),
    ' 的感谢。',
  ]);
  await era.printAndWait([
    '明明是违背了一般粉丝的决定，却逐渐开花结果了，这让 ',
    digital.get_colored_name(),
    ' 逐渐无法理解了。',
  ]);
  await era.printAndWait(
    '而解决问题的方式，就是比赛，今天的这场比赛，就是之前就已经预定的比赛。',
  );
  await era.printAndWait('作为一场OP赛，连G3都不是的小比赛。');
  await era.printAndWait([
    '在亮相圈里，',
    digital.get_colored_name(),
    ' 死死地盯着其他的',
    digital.uma_sex_title,
    '。',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    ' 的双手化作爪子在空中舞动，瞳孔里饱含着「美味」的含义……',
  ]);
  era.printButton('「数码你可不要扑上去了哦。」', 1);
  await era.input();
  await digital.say_and_wait('不，本来之前也没有扑过吧。');
  await digital.say_and_wait(['说到这里，', callname, '，总感觉好奇怪啊。']);
  await digital.say_and_wait(
    '感觉好像，气氛特别的严峻，但是其中所包含的尊味，又没有变化……',
  );
  await era.printAndWait([
    digital.get_colored_name(),
    ' 发现，每个',
    digital.uma_sex_title,
    '表情上都写满了严阵以待，这股情感让 ',
    digital.get_colored_name(),
    ' 欲罢不能，但气氛又不容 ',
    digital.get_colored_name(),
    ' 像以往那样说出口。',
  ]);
  await digital.say_and_wait([
    '在这里面，应该是有更为纯粹的事物，使得',
    digital.uma_sex_title,
    '为何为尊……',
  ]);
  await me.say_and_wait('你想，触碰它？');
  await digital.say_and_wait('诶！这样也太失敬了！');
  await digital.say_and_wait('不过，我想，尽量在比起以前更为接近的位置观察……');
  await era.printAndWait([
    digital.get_colored_name(),
    ' 依旧还是把自己当成观众，但是，',
    digital.sex,
    '的眼神却比以往发生了一丝变化。',
  ]);
};

race_start_handlers[race_enum.nhk_cup] = async (digital, me) => {
  await print_event_name(
    [race_infos[race_enum.nhk_cup].get_colored_name(), ' 开始！'],
    digital,
  );
  await digital.say_and_wait('噢噢噢噢噢噢噢！果然，很不一样啊！');
  await era.printAndWait('G1赛场，超过十万观众的比赛……');
  await era.printAndWait(
    '即使是经常观看，站在亮相圈所带来的感觉还是十分新鲜。',
  );
  await era.printAndWait(
    '十万观众所带来的气氛足够震撼，但真正的大头，是选手的……',
  );
  await digital.say_and_wait(
    '怎怎怎怎么回事！这股气息，这股如同领域般的压迫力！',
  );
  await digital.say_and_wait('糟糕！赛高！简直可以说是尊高！');
  await me.say_and_wait('很兴奋是吧！那就正是在状态上啊！');
  await digital.say_and_wait('已经，已经什么都想不了了，大脑，已经……');
  await digital.say_and_wait(
    '美丽，恐怖，感觉这分辨率都要达到4K了，现在连站在这里都有点难……',
  );
  await digital.say_and_wait([
    '不过，我要搞明白，',
    digital.uma_sex_title,
    '酱的尊的奥妙！',
  ]);
  await digital.say_and_wait('就算……我会尊得幻化成灰……哈？！');
  await era.printAndWait([
    '怎么了，',
    digital.get_colored_name(),
    ' 说着说着突然一个哆嗦。',
  ]);
  await era.printAndWait([digital.get_colored_name(), ' 环视了一下，然后……']);
  await digital.say_and_wait('感觉好像有人在盯着我？');
  await era.printAndWait([
    '选手的话，',
    me.get_colored_name(),
    ' 看得很清楚，并没有盯着 ',
    digital.get_colored_name(),
    ' 的人，那应该就是从观众席传过来的。',
  ]);
  await digital.say_and_wait('是吗，我居然，也在推中，做着被推的梦吗……');
  await digital.say_and_wait('不能在这样轻浮了！');
  await era.printAndWait([
    '如此重大的比赛，想必 ',
    digital.get_colored_name(),
    ' 也能激发',
    digital.sex,
    '的素质吧。',
  ]);
};

race_start_handlers[race_enum.japa_dir] = async (digital, me) => {
  await print_event_name(
    [race_infos[race_enum.japa_dir].get_colored_name(), ' 开始！'],
    digital,
  );
  await digital.say_and_wait(
    [
      '我还没注意到，',
      digital.uma_sex_title,
      '酱们的尊能源的根源，那一定是无比珍贵之物……',
    ],
    true,
  );
  await digital.say_and_wait(
    '大井……夜晚……泥地……在这少来的异乡赛道，在这特殊的赛场，也许，就存在着我想要找到的秘密……',
    true,
  );
  era.drawLine();
  await digital.say_and_wait([
    '『',
    race_infos[race_enum.japa_dir].get_colored_name(),
    '』，总感觉这场比赛的氛围很独特呢。',
  ]);
  await me.say_and_wait('JG1赛事……这种类型赛事总会带有很多的偏见。');
  await digital.say_and_wait(
    '即使如此，这场赛事带来的炙热气息，就像夏日的太阳……',
  );
  await digital.say_and_wait(
    '无论是赛道、景色、还是草地泥地都不一样，就算如此也好……',
  );
  await digital.say_and_wait([
    digital.uma_sex_title,
    '酱的心情，都是一样的吧？',
  ]);
  await era.printAndWait(
    '没错，无论是G1还是G3、重赏还是公开赛、草地还是泥地、中央还是地方……',
  );
  await me.say_and_wait('都一样的。');
  await me.say_and_wait(
    '这场比赛过后，你就经历了所有类型比赛了，肯定能明白为何一样吧。',
  );
  await era.printAndWait([
    digital.get_colored_name(),
    '，或许早就明白了，',
    digital.sex,
    '只是需要求证而已，就通过这场比赛。',
  ]);
  await digital.say_and_wait([
    '现在！就和大井的泥地',
    digital.uma_sex_title,
    '酱一起，找到答案！',
  ]);
};

race_start_handlers[race_enum.mile_cha] = async (digital) => {
  if (era.get('cflag:19:育成回合计时') >= 96) {
    return true;
  }
  await print_event_name(
    [race_infos[race_enum.mile_cha].get_colored_name(), ' 开始！'],
    digital,
  );
  const halo = get_chara_talk(61);
  await era.printAndWait([
    halo.get_colored_name(),
    '，',
    digital.get_colored_name(),
    ' 出道前就已经一直仰望的',
    digital.uma_sex_title,
    '，现在，',
    digital.get_colored_name(),
    ' 终于能够和',
    digital.sex,
    '站在了一起。',
  ]);
  await era.printAndWait([
    '亮相圈上的 ',
    halo.get_colored_name(),
    '，一扫之前的颓势，气场高涨，简直就像是回到了巅峰时期。',
  ]);
  await halo.say_and_wait([
    '怎么样？',
    sys_get_colored_callname(61, 19),
    '，今天的我，是不是耀眼得眼睛都要花了？',
  ]);
  await digital.say_and_wait(
    '是！无比耀眼！不过……脊梁还是没有今年春天的挺直……',
  );
  await halo.say_and_wait('啊哈……还真瞒不过你呢，没想到这你都能察觉出来。');
  await halo.say_and_wait([
    sys_get_colored_callname(61, 19),
    '，你喜欢我到什么程度？',
  ]);
  await digital.say_and_wait('在这推得要比马里亚纳海沟还要深！');
  await era.printAndWait([
    halo.get_colored_name(),
    ' 和 ',
    digital.get_colored_name(),
    ' 有说有笑，在这里，能看出',
    digital.sex,
    '们一定能给出一场无法述说的比赛。',
  ]);
  await digital.say_and_wait('你真正的想法，我想要在今天的比赛里，弄明白！');
  await halo.say_and_wait([
    '真正的一流，就用你的全身心来理解吧！',
    sys_get_colored_callname(61, 19),
    '！',
  ]);
};

race_start_handlers[race_enum.tenn_sho] = async (digital) => {
  if (era.get('cflag:19:育成回合计时') < 96) {
    return true;
  }
  await print_event_name(
    [race_infos[race_enum.tenn_sho].get_colored_name(), ' 开始！'],
    digital,
  );
  await era.printAndWait([
    '终于到了，',
    race_infos[race_enum.tenn_sho].get_colored_name(),
    ' 当天。',
  ]);
  await era.printAndWait([
    '在亮相圈中，',
    digital.get_colored_name(),
    ' 与熟悉的那两位碰面了。',
  ]);
  await digital.say_and_wait([
    '请多关照！',
    sys_get_colored_callname(19, 15),
    '，',
    sys_get_colored_callname(19, 58),
    '。',
  ]);
  const opera = get_chara_talk(15),
    dotou = get_chara_talk(58);
  await dotou.say_and_wait([
    '这边才是！请多关照了，',
    sys_get_colored_callname(58, 19),
    '！',
  ]);
  await era.printAndWait([
    '时隔三年，',
    digital.get_colored_name(),
    ' 也终于能够在自己的推面前正常地交流了。',
  ]);
  await opera.say_and_wait(
    '啊哈哈哈，你们这是在发名片吗？不过，身为霸王的我，其闪耀的自身，就已经表明了我的一切！不需要任何介绍！',
  );
  await opera.say_and_wait([
    sys_get_colored_callname(15, 19),
    '，欢迎来到我的加冕典礼！',
  ]);
  await opera.say_and_wait(
    '你的努力，我都看在眼里，我不得不承认你也到达了我们的身后。',
  );
  await opera.say_and_wait([
    '但身后终究是身后！',
    sys_get_colored_callname(15, 19),
    '，在这草地上，你还赢不了我，身为『世纪末霸王』，驱驰于中距离草场的我！',
  ]);
  await digital.say_and_wait('的确……如你所言，在硬实力上，我还比不过你……');
  await digital.say_and_wait('但是，我的技巧，在草地与泥地的技巧……');
  await era.printAndWait([
    '是的，在这场草地比赛中，双刀流的 ',
    digital.get_colored_name(),
    '，其优势在……只要在等一会，就会明了。',
  ]);
  await era.printAndWait('滴答……滴答……');
  await era.printAndWait('哗啦……哗啦……');
  await era.printAndWait('一开始仅是一点，紧接着便遍及全部！');
  await era.printAndWait([
    '是的，重马场，这次的 ',
    race_infos[race_enum.tenn_sho].get_colored_name(),
    '，是重马场啊！',
  ]);
  await digital.say_and_wait([
    '这是……',
    digital.uma_sex_title,
    '酱的泪雨吗……不，是我遇见的所有',
    digital.uma_sex_title,
    '酱的喜极而泣，是庆祝我的胜利的雨啊！',
  ]);
  await opera.say_and_wait(
    '……雨吗……先说明，我可是擅长重马场的喔，霸王无论场况如何，都能适应！',
  );
  await dotou.say_and_wait('啊哇哇哇……是雨啊啊啊……');
  await era.printAndWait([
    '好歌剧是擅长重马场，但是，',
    digital.get_colored_name(),
    '，',
    digital.sex,
    '可不仅是擅长啊！',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    ' 可是字面意思地在泥潭上跑过的，面对这种情况……',
  ]);
  await era.printAndWait('仅有赢的可能。');
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-19/race-end')(race_end_handlers);

module.exports = class extends CustomizedEdu {
  async out_church(digital, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 19) {
      add_event(event_hooks.out_church, event_object);
      return;
    }
    if (event_object.arg !== 95 + 1) {
      return;
    }
    const tachyon = get_chara_talk(32),
      falcon = get_chara_talk(46),
      palace = get_chara_talk(36);
    await print_event_name('初诣', digital);
    await digital.say_and_wait('神啊！今年就不用什么周边了，请给我劲敌就好！');
    await era.printAndWait([
      '天呐！居然让 ',
      digital.get_colored_name(),
      ' 说出这番话，',
      digital.sex,
      '受到了什么刺激？！',
    ]);
    await me.say_and_wait('数码？为什么突然说这个？');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 告诉 ',
      me.get_colored_name(),
      '，在之前一段时间，',
      get_chara_talk(15).get_colored_name(),
      ' 明白指出，',
      digital.get_colored_name(),
      '，缺少劲敌。',
    ]);
    await digital.say_and_wait([
      '唔，就如之前 ',
      sys_get_colored_callname(19, 15),
      ' 的说法，我目前还不够强大的原因是……',
    ]);
    await era.printAndWait('劲敌。');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 缺少劲敌，作为一名训练员，',
      me.get_colored_name(),
      ' 清楚竞争对手可以给',
      digital.uma_sex_title,
      '带来多少动力和鼓舞。',
    ]);
    await era.printAndWait([
      '但是 ',
      digital.get_colored_name(),
      ' 的情况又过于特殊，',
      digital.sex,
      '所具备的那种特性，那种对',
      digital.uma_sex_title,
      '纯粹的喜欢也能给',
      digital.sex,
      '带来与竞争对手相似的效果。',
    ]);
    await era.printAndWait([digital.get_colored_name(), ' 真的需要劲敌吗？']);
    await digital.say_and_wait(
      '唔唔唔，以前因为不想过分干涉，所以别说什么劲敌了，数码在赛场上跟对手都没怎么交流，现在后果来了吗……',
    );
    await era.printAndWait([
      '不过趁这次机会让 ',
      digital.get_colored_name(),
      ' 跟其他',
      digital.uma_sex_title,
      '交涉一下也挺好。',
    ]);
    await me.say_and_wait('那就去寻找劲敌吧！');
    await era.printAndWait('所以……');
    era.drawLine();
    await palace.say_and_wait('哈？劲敌？早点歇吧。');
    await digital.say_and_wait('等等的说！正好是同期，这不是恰好吗');
    await palace.say_and_wait([
      '那个啊，',
      sys_get_colored_callname(36, 19),
      '，其他的我不好说，我觉得至少我不合适，就这样。',
    ]);
    era.drawLine();
    await falcon.say_and_wait('诶？劲敌吗？感觉不太符合偶像的形象呢～');
    await digital.say_and_wait(
      '不不不，偶像里面，不都是有一个那种对手，然后在互相对决的过程中又互相帮助的感觉吗？',
    );
    await falcon.say_and_wait([
      '啊哈哈，飞鹰子好像只能做个',
      digital.uma_sex_title,
      '小偶像呢，不适合那种……不过，十分感谢 ',
      sys_get_colored_callname(46, 19),
      ' 的邀请！',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([
      '哼哼……劲敌吗……但 ',
      sys_get_colored_callname(32, 19),
      ' 你作为一个研究对象，不对吧，不符合我的理念！',
    ]);
    await digital.say_and_wait('……这样吗。');
    await era.printAndWait([
      '被各种原因拒绝了几次的 ',
      digital.get_colored_name(),
      '，即使是',
      digital.sex,
      '，耳朵都有点耷拉了。',
    ]);
    await tachyon.say_and_wait([
      '不要这么消沉嘛，',
      sys_get_colored_callname(32, 19),
      '，还有你，',
      sys_get_callname(32, 0),
      '，你应该清楚的吧？能成为 ',
      sys_get_colored_callname(32, 19),
      ' 劲敌的人选。',
    ]);
    await era.printAndWait([
      '用其独特的眼睛盯着 ',
      me.get_colored_name(),
      '，',
      tachyon.get_colored_name(),
      ' 抬了下下巴朝 ',
      me.get_colored_name(),
      ' 示意。',
    ]);
    await digital.say_and_wait([
      '诶诶诶！',
      callname,
      '，你知道吗？能成为我劲敌的人选？',
    ]);
    await me.say_and_wait('的确如此。');
    await digital.say_and_wait('那为什么不一开始就告诉我？');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 急的都快要往 ',
      me.get_colored_name(),
      ' 身上锤了。',
    ]);
    await tachyon.say_and_wait([
      '看起来，那人也有自己的打量，',
      sys_get_colored_callname(32, 19),
      '，接下来就是无趣的解答了，再见。',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 看了下场面，很识趣地离开了现场。',
    ]);
    await me.say_and_wait(
      '事实上，一方面是在你开始找才知道的，另一方面，我也有想要去了解的地方……',
    );
    await me.say_and_wait('所以，最终我得出的结论就是：你的劲敌，就是大家！');
    await digital.say_and_wait(
      '大家……！也就是说DD箱推都可以吗？！等等，也就是之前的……',
    );
    await era.printAndWait([
      '是的，是在看到今天 ',
      digital.get_colored_name(),
      ' 在找的人才想到的，',
      digital.get_colored_name(),
      ' 找的人既有擅长草地，也有擅长泥地的',
      digital.uma_sex_title,
      '，就如一开始的那般……',
    ]);
    await me.say_and_wait('只选一个什么的，是做不到的。');
    await me.say_and_wait(
      '无论选谁，都不会有像数码那般，可以在两种赛道上奔跑的选手，但是，如果是……',
    );
    await digital.say_and_wait('大家……');
    await me.say_and_wait('对的。');
    await digital.say_and_wait('哈哈哈哈，没想到，又是大家呢。');
    await digital.say_and_wait([
      sys_get_colored_callname(19, 61),
      ' 的话，『和更多',
      digital.uma_sex_title,
      '一起比赛』我一定能够达成！',
    ]);
    await digital.say_and_wait(
      '大家作为劲敌，这么一想，还挺贪心的……我可以从大家那里获得什么呢？',
    );
    era.print([me.get_colored_name(), ' 决定：']);
    era.printButton('养分（耐力+20）', 1);
    era.printButton('友情力量（全属性+5）', 2);
    era.printButton('多样性（技能点数+30）', 3);
    switch (await era.input()) {
      case 1:
        await me.say_and_wait('要说的话，那就是养分吧');
        await digital.say_and_wait([
          '对的！',
          digital.uma_sex_title,
          '酱们，各自的美味之处，每次都给予我元气！',
        ]);
        await digital.say_and_wait(
          '每天，都有新鲜的口粮！没有比这更好的燃料了！',
        );
        await era.printAndWait([
          '在之后',
          digital.uma_sex_title,
          '们一定会给 ',
          digital.get_colored_name(),
          ' 带来更多的活力吧。',
        ]);
        get_attr_and_print_in_event(19, [0, 20], 0) && (await era.waitAnyKey());
        break;
      case 2:
        await me.say_and_wait('没错，就是友情！POWER！');
        await digital.say_and_wait([
          '哦吼吼，只要每个',
          digital.uma_sex_title,
          '酱们给我一点力量，我就是无敌的！',
        ]);
        await digital.say_and_wait(
          '哼哼，唔哈哈哈，只是想想，就已经感到全身充满了力量了！',
        );
        await era.printAndWait([
          '与那个每人给一马币还是有点不一样的，',
          digital.get_colored_name(),
          ' 肯定能从',
          digital.uma_sex_title,
          '处得到力量，变得更强。',
        ]);
        get_attr_and_print_in_event(19, new Array(5).fill(5), 0) &&
          (await era.waitAnyKey());
        break;
      case 3:
        await me.say_and_wait('多样性，没错吧！');
        await digital.say_and_wait([
          '当然！',
          digital.uma_sex_title,
          '酱的奔跑，其多样性，不仅仅是平日所描定的跑法所能框定的！',
        ]);
        await digital.say_and_wait('就像收集UMAMO图鉴那样，全部都记录下来吧！');
        await era.printAndWait([
          '是全收集类玩家吗，',
          digital.get_colored_name(),
          ' 在这场游戏肯定能得到技能吧！',
        ]);
        get_attr_and_print_in_event(19, undefined, 30) &&
          (await era.waitAnyKey());
    }
    era.set('cflag:19:节日事件标记', 0);
    return true;
  }

  async race_end(digital, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        digital,
        me,
        callname,
        extra_flag,
      ))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('竞赛获胜', digital);
        await digital.say_and_wait(
          '咔哇哇哇哇！每个孩子都闪耀着最尊的光辉啊！',
        );
        await era.printAndWait([
          '赛后的 ',
          digital.get_colored_name(),
          ' 精神得完全不像经历了一场大赛，一如既往地展现了',
          digital.sex,
          '的热情。',
        ]);
        await digital.say_and_wait([
          '能和',
          digital.uma_sex_title,
          '酱一起比赛……真的是非常开心……！',
        ]);
        await digital.say_and_wait(
          '而且，还拿到了第一！真的要满含感激地收下！',
        );
        era.printButton('「你是最闪耀的哦！」', 1);
        era.printButton('「下次的比赛也要加油噢！」', 2);
        if ((await era.input()) === 1) {
          await digital.say_and_wait([
            '诶？这这这，怎可能？！这么多',
            digital.uma_sex_title,
            '，我就只是像空气一般的存在……居然看着我吗？',
          ]);
          await era.printAndWait('这份娇羞也是见多了。');
          await me.say_and_wait('这不当然，你可是我的爱马啊！');
          await digital.say_and_wait('呜呜呜……');
          await digital.say_and_wait('被夸奖真的是难以平静下来呢……');
          await era.printAndWait('也当然每一次看都不厌。');
        } else {
          await digital.say_and_wait(
            '好！为了下次比赛也要照这个劲头，我要变得更强！Power！',
          );
          await digital.say_and_wait([
            '变得更强大，然后在更激烈的比赛中看到更加闪耀的',
            digital.uma_sex_title,
            '酱！',
          ]);
          await era.printAndWait('就是这个势头！继续加油吧！');
          await digital.say_and_wait('诶！诶！姆！');
        }
      } else {
        await print_event_name('竞赛上榜', digital);
        await digital.say_and_wait(
          '唔姆唔姆，原来如此，你们的闪耀，还是有点难以接近……',
        );
        await era.printAndWait([
          '没能获胜的 ',
          digital.get_colored_name(),
          '，在赛后也没表现出太大的失落……',
        ]);
        await digital.say_and_wait(
          '呜……果然，我还是不该作为粉丝出现在这里的……',
        );
        await era.printAndWait('喂喂喂。');
        era.printButton(
          `「这次，有没有欣赏到${digital.uma_sex_title}啊？」`,
          1,
        );
        era.printButton(
          `「下次争取在最前方欣赏${digital.couple_title}吧！」`,
          2,
        );
        if ((await era.input()) === 1) {
          await digital.say_and_wait('诶！对诶！数码，可！');
          await era.printAndWait('这是什么意思？');
        } else {
          await digital.say_and_wait([
            '如果在更前方的话，那绝对可以……！欣赏到更为美丽的',
            digital.uma_sex_title,
            '酱们！',
          ]);
          await era.printAndWait([
            '总之，',
            digital.get_colored_name(),
            ' 打起了精神！',
          ]);
        }
      }
    }
  }

  async race_start(digital, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](digital, me, callname))
    ) {
      const buffer = [
        () =>
          digital.say_and_wait([
            '胜券在握的',
            digital.uma_sex_title,
            '酱，紧绷的',
            digital.uma_sex_title,
            '酱，还是看似不在乎实则认真的',
            digital.uma_sex_title,
            '酱……呼……嘿……',
          ]),
        () =>
          digital.say_and_wait([
            '不不不，再怎么想我这种',
            digital.uma_sex_title,
            '上赛场还是很奇怪吧？',
          ]),
      ];
      if (era.get('mark:19:淫纹')) {
        buffer.push(() =>
          digital.say_and_wait(
            '数码碳的决胜服好像是露肚子的来着？！遭了遭了，要藏吗？怎么藏？藏得了吗？',
          ),
        );
      }
      if (check_aim_race(RaceHistory.get(19).get(), race_enum.japa_dir, 1, 3)) {
        buffer.push(() =>
          digital.say_and_wait('我要，作为一名选手，跑出不负于对手的比赛。'),
        );
      }
      await get_random_entry(buffer)();
    }
  }

  async week_end(digital, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_end_handlers[event_object.arg](
          digital,
          me,
          callname,
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(digital, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg] !== undefined) {
      const flags = { wait_flag: false },
        ret = await week_start_handlers[event_object.arg].call(
          this,
          digital,
          me,
          callname,
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }
};
