const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {CharaTalk} in_urara
 * @param {string} callname
 */
module.exports = async (urara, me, in_urara, callname) => {
  await print_event_name('「虚无」的渴望', urara);
  await urara.say_and_wait([
    callname,
    ' 觉得，乌拉拉的愿望，配得上大家的奔跑吗？',
  ]);
  await urara.say_and_wait([
    callname,
    ' 觉得，乌拉拉的愿望，配得上大家的帮助吗？',
  ]);
  await urara.say_and_wait([
    callname,
    ' 的手比乌拉拉大好多呢，只用一只就能环住乌拉拉的脖子。',
  ]);
  await urara.say_and_wait([
    callname,
    '，将两只手握放在乌拉拉的脖子上，再用力压下去吧？',
  ]);
  await urara.say_and_wait([
    callname,
    '，让羞于面对大家而逃跑的乌拉拉，变成任你摆布的娃娃吧——',
  ]);
  era.drawLine();
  await era.printAndWait([
    '不知第几次从噩梦中惊醒，',
    me.get_colored_name(),
    ' 在三女神像前的长椅上扶住自己隐隐作痛的额头。',
  ]);
  await era.printAndWait(
    '今天依旧是这样不明不白的在离奇的地方醒过来，周围也依旧安静的可怕。',
  );
  await era.printAndWait(
    '倒不是说其他人消失了，而是周围的空间仿佛静止一般，失去了一切环境的杂音。',
  );
  await era.printAndWait(
    '而这还不是最让人难受的，在进入这周之后，时间也字面意思上的停摆了。',
  );
  await era.printAndWait(
    '不只是路边的时钟，手表、手机、电脑，所有目所能及的时间标识都停在了同一时刻。',
  );
  await era.printAndWait(
    '但也多亏了从他人嘴里问时间这招还奏效，所以暂时还能维持正常的生活状态。',
  );
  await era.printAndWait(
    '当然也正是这样，在失去正常的时间与空间感后还能正常生活的其他人此刻才显得格外异常。',
  );
  await era.printAndWait([
    '从常识人的角度，这种情况是自己疯了，但对于现在的 ',
    me.get_colored_name(),
    ' 来说，大概是世界和自己一起疯了。',
  ]);
  await era.printAndWait([
    '和 ',
    urara.get_colored_name(),
    ' 有关的噩梦也是，周围诡异的改变也是，哪里都不对劲，但是到底忘记为什么变成这样……',
  ]);
  await era.printAndWait([
    '可正当 ',
    me.get_colored_name(),
    ' 纠结的抬起昏沉沉的头时，心中微弱的违和感在突然间被急剧放大了——',
  ]);
  await era.printAndWait([
    '与违和感一同到来的，还有既视感，因为站在 ',
    me.get_colored_name(),
    ' 面前的，是不知等待了多久却依旧面带笑容的 ',
    urara.get_colored_name(),
    '。',
  ]);
  await urara.say_and_wait([
    callname,
    '！今天不是说好了要一起出去玩的吗？怎么又在这里睡着了，是累了——',
  ]);

  era.printButton('「乌拉拉，现在过去多久了？」', 1);
  await era.input();

  await era.printAndWait([
    '突然抬起头打断了 ',
    urara.get_colored_name(),
    ' 的寒暄，终于意识到发生了什么的 ',
    me.get_colored_name(),
    ' 严肃地看向了 ',
    urara.get_colored_name(),
    '。',
  ]);
  await urara.say_and_wait([
    '啊，',
    callname,
    ' 最近总是在问时间呢，不过也没睡过多久哦？让我想想……',
  ]);

  era.printButton(
    `「不是今天的时间，乌拉拉，你的 ${callname} 问的是，『从时间停止后过了多久了』。」`,
    1,
  );
  await era.input();

  await urara.say_and_wait('——');
  await era.printAndWait([
    '仿佛是经历了一场平静的暴雨，在漫长的沉默后，',
    urara.get_colored_name(),
    ' 安静的坐到了长椅的另一边。',
  ]);
  await era.printAndWait([
    '只是这一次，',
    urara.sex,
    '的小脸上没再出现平常的笑容，而是像做错事的孩子般的愧疚。',
  ]);
  await urara.say_and_wait('对不起，其实乌拉拉也不知道，这究竟是第几周了……');
  await urara.say_and_wait([
    '因为『',
    urara.sex,
    '』说，这里能待多久都可以，但是……果然 ',
    callname,
    ' 还是会想起来……',
  ]);
  await urara.say_and_wait(
    '乌拉拉明知道这是不对的，但是却依旧沉迷在虚假的日子里……',
  );
  await era.printAndWait([
    '看来',
    urara.sex,
    '这次真的做错了什么吧，虽然 ',
    me.get_colored_name(),
    ' 并不是因为想起了什么才询问',
    urara.sex,
    '的。',
  ]);

  era.printButton(
    '「其实现在还是什么都没想起来，只是突然意识到哪里不对劲而已，最近又发生了什么吗？」',
    1,
  );

  await urara.say_and_wait([
    '没有哦？只是每次 ',
    callname,
    ' 想起什么后，『',
    urara.sex,
    '』就会出现把 ',
    callname,
    ' 的记忆拿走，所以……',
  ]);
  await era.printAndWait(
    '想想也是，那个溺爱家长不可能放任不稳定因素乱来，现在也只能算是百密一疏吧。',
  );
  await era.printAndWait([
    '而且 ',
    me.get_colored_name(),
    ' 也绝对不会放过这次机会，至少现在的 ',
    urara.get_colored_name(),
    ' 比「上个月」时正常太多了，如果是现在的话……',
  ]);
  await era.printAndWait([
    '但还没等 ',
    me.get_colored_name(),
    ' 开口，',
    urara.get_colored_name(),
    ' 却先一步用乞求的眼神看向了身边最亲密的大人。',
  ]);
  await urara.say_and_wait([
    '请不要逃避，',
    callname,
    ' 一定会这样说呢，但是……乌拉拉还想在这里多待一会儿……',
  ]);

  era.printButton(
    `「哪怕知道现在的一切只是乌拉拉的朋友为${urara.sex}创造的纸质箱庭也想？」`,
    1,
  );
  await era.input();

  await urara.say_and_wait([
    '可是这里真的很安心，',
    callname,
    ' 也能感受的到对吧？哪怕是……',
  ]);
  await era.printAndWait([
    '顺着 ',
    urara.get_colored_name(),
    ' 戛然而止后的沉默，',
    me.get_colored_name(),
    ' 在叹了口气后继续接了下去。',
  ]);

  era.printButton(
    '「乌拉拉，我总会做的那种怪梦……就不说内容了，都是真实发生过的对吧？」',
    1,
  );
  await era.input();

  await urara.say_and_wait('嗯……');
  await era.printAndWait([
    '虽然猜对了，但是等 ',
    urara.get_colored_name(),
    ' 承认时却又不想面对了。',
    urara.get_colored_name(),
    ' 原来是……「爱好」如此倒错的孩子吗？',
  ]);

  era.printButton(
    `「哪怕是最后每次都被自己的${callname}伤害也无所谓吗？别这样虐待自己啊。」`,
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '因为乌拉拉很害怕啊，如果有一天乌拉拉失败了的话，如果有一天再也站不起来的话……',
  );
  await urara.say_and_wait([
    '所以如果有一天，不管是大家还是 ',
    callname,
    ' 都不在乌拉拉身边的话……',
  ]);
  await urara.say_and_wait(
    '……不对，乌拉拉知道这样的事不会发生的，但还是害怕的逃走了……',
  );
  await urara.say_and_wait('那是……');

  era.printButton(
    '「那是因为乌拉拉从来都不是无所谓对吧？但乌拉拉把一切看的太重了，该适当一点了。」',
    1,
  );
  await era.input();

  await urara.say_and_wait([
    '但是，',
    callname,
    ' 不想和乌拉拉一直在一起吗？就算只能满足 ',
    callname,
    ' 一个人也……',
  ]);

  era.printButton(
    '「可这样做的话，乌拉拉和你那消极的朋友想要做的事有什么区别？」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '直视着 ',
    urara.get_colored_name(),
    ' 马上就要哭出来的眼睛，',
    me.get_colored_name(),
    ' 抑制住让自己心软的念头，再次开口了。',
  ]);
  await era.printAndWait([
    '至少这次和以前不同，而且，',
    urara.get_colored_name(),
    ' 的 ',
    callname,
    ' 可不想再看见 ',
    urara.get_colored_name(),
    ' 露出和「',
    urara.sex,
    '」一样悲观的表情啊。',
  ]);

  era.printButton(
    `「现在的乌拉拉或许只想${callname}承载的希望，但我的希望，是能够看到乌拉拉的明天啊。」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    '这次同样是站在阳光下，却是坚定的 ',
    me.get_colored_name(),
    ' 向眼神逐渐亮起的 ',
    urara.get_colored_name(),
    ' 伸出了手。一直以来，不都是这样吗？',
  ]);
  await era.printAndWait(
    '不管有多迷茫，未来都可以一起克服，哪怕临近终局。比起没有结果的沉默，至少再互相信任一次吧。',
  );

  era.printButton(
    '「结果如何都是后话，我会一直站在乌拉拉身后，所以也让大家看看，乌拉拉在有马纪念上奔跑的样子吧。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '看向自己的训练员，',
    urara.get_colored_name(),
    ' 似乎逐渐恢复了从长椅上起身的勇气，将手指轻轻搭在了 ',
    me.get_colored_name(),
    ' 的手上。',
  ]);
  await urara.say_and_wait([
    '那……',
    callname,
    ' 可以陪我一起去和『',
    urara.sex,
    '』道歉吗？',
  ]);

  era.printButton(
    `「当然没问题啊，而且我也有不少事想${in_urara.sex}抱怨一下啊。」`,
    1,
  );
  await era.input();

  await urara.say_and_wait('嗯！那么就这样……');
  await era.printAndWait([
    '随后在视野变为灰白的重压中强行替代了 ',
    me.get_colored_name(),
    ' 面前的小',
    urara.get_uma_sex_title(),
    '，「',
    urara.sex,
    '」愤怒地拍开了 ',
    me.get_colored_name(),
    ' 伸向 ',
    urara.get_colored_name(),
    ' 的手。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '您还真是一不注意就会冒出来，逼迫乌拉拉有什么意义吗？好好遵守',
    urara.sex,
    '的愿望不好吗？',
  ]);

  era.printButton(
    '「别把我说得和蘑菇一样，还有不是说好了一起去找你道歉吗？你是有多小心眼啊。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '面对虎视眈眈的「',
    urara.sex,
    '」，',
    me.get_colored_name(),
    ' 无奈被迫与眼前这只全身毛都炸起来的粉色小猫拉开距离。',
  ]);

  era.printButton(
    '「而且仔细想想看，现在最对现状感到不安的也不是乌拉拉，而是……」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '是啊！所以我才讨厌你们啊！你和乌拉拉和',
    urara.sex,
    '周围的人都一样！',
  ]);
  await era.printAndWait([
    '在忍无可忍后的爆发，上前一步用力抓住 ',
    me.get_colored_name(),
    ' 的衣服的',
    urara.get_teen_sex_title(),
    '在哭泣中宣泄着自己压在心底的厌世情结。',
  ]);
  await era.printAndWait(
    '不知何时起周围传出无数玻璃被砸破的脆响，随着泪水的落地，周围布景般的世界也逐渐支离破碎。',
  );
  await era.printAndWait([
    '但就算站在异常的中心，现在想要停下也为时过晚。任由「',
    urara.sex,
    '」的拉扯，',
    me.get_colored_name(),
    ' 冷静地延续着交流。',
  ]);

  era.printButton('「……明明是出于厌恶，但你也一直在帮助乌拉拉不是吗？」', 1);
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '是啊，为什么呢？明明只要看着',
    urara.sex,
    '输掉再让',
    urara.sex,
    '抛弃自己的愿望就好了！',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '那样',
    urara.sex,
    '就可以回到家里去过平常的生活……不，干脆从一开始就拒绝',
    urara.sex,
    '的搭话不就好了！',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '要是从一开始，就能够对',
    urara.sex,
    '的笑容不为所动就好了，但这是，我自己的选择啊……',
  ]);
  await era.printAndWait([
    '现在的',
    urara.sex,
    '该怎样形容呢？在拒绝一切的悲伤与愤怒之后，还有……不知指向嫉妒与无奈？',
  ]);
  await era.printAndWait([
    '无法坦率的',
    urara.sex,
    '，一边怀着对周围的厌恶，又因为什么都做不到而对世间抱有',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '是啊，我以后绝对不会再帮你们了，明明一个两个都是些笨蛋什么的……',
  );
  await in_urara.say_as_unknown_and_wait(
    '为了名为『希望与闪光』的虚无赌上一切，那么拼命的争抢，如果失败了不就全完了？！',
  );

  era.printButton(
    '「因为人生只有一次，不去明天也无法定格在过去，就像你现在做的一样啊——」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '哈！您也是还不满足吗？乌拉拉已经为您拿下好几个、好几个我从未敢梦到的一着了！',
  );
  await in_urara.say_as_unknown_and_wait(
    '都到了现在了！如果为了无私的愿望前进会继续伤害别人，那自私一点又能怎么样啊！',
  );
  await era.printAndWait([
    '暴躁地打断了 ',
    me.get_colored_name(),
    ' 的话，',
    urara.get_teen_sex_title(),
    '在泪水中强挤出的笑容宛如一只破损的洋娃娃般令人心痛。',
  ]);
  await era.printAndWait([
    '但即使已经被',
    urara.sex,
    '勒得喘不过气来，',
    me.get_colored_name(),
    ' 也不打算再次顺从',
    urara.sex,
    '放弃一切的意愿。',
  ]);

  era.printButton(
    `「乌拉拉奔跑从来都不是为了我，现在利用这点自私的话，${urara.sex}的一切努力就都前功尽弃了。」`,
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '别糊弄人了！你说的前功尽弃的到底是乌拉拉还是你的事业啊？',
  );
  await in_urara.say_as_unknown_and_wait(
    '亏我还……从最初就爱着您的……说到底您和别人都一样……',
  );
  await in_urara.say_as_unknown_and_wait(
    '与其让乌拉拉继续努力，再伤害到别人和自己，不如现在就、现在就……',
  );
  await era.printAndWait([
    '被自己的泪水所噎住了话语，无力地放开了 ',
    me.get_colored_name(),
    ' 的衣服，',
    urara.get_teen_sex_title(),
    '自暴自弃的重新跌坐回了身后的长椅上。',
  ]);
  await era.printAndWait([
    '别说是吓退 ',
    me.get_colored_name(),
    ' 了，现在的小',
    urara.get_uma_sex_title(),
    '就像快要倒下的 ',
    urara.get_colored_name(),
    ' 那样，马上就要被自己的扭曲所压倒了。',
  ]);

  era.printButton('「果然，最害怕的人，是你啊……」', 1);
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '……对不起……一直说着过分的话……但是我真的很害怕啊……',
  );
  await in_urara.say_as_unknown_and_wait(
    '您总是会正直地说着正确的全解，但令人厌烦的我却绝对没办法变成您心仪的样子……',
  );
  await era.printAndWait(
    '明明什么都不相信，却唯独别扭地相信着爱，真是个不得了的世界级难题。',
  );
  await era.printAndWait([
    '该作何反应呢？被这样一位悲伤又厌世的人爱着的自己，到底该许下什么能够让',
    urara.sex,
    '接受的承诺？',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '果然是什么都不说……我还以为……您最后能稍微回应我的任性，哪怕骗我愿意留下呢……',
  );
  await urara.say_and_wait([
    '不是这样哦？只是你的感情太热烈了，让原本『清爽』的 ',
    callname,
    ' 变『婆妈』了而已！',
  ]);
  await era.printAndWait([
    '破碎的响动似乎模糊了静止与流动的边界，而现在与 ',
    me.get_colored_name(),
    ' 并肩而站的，是一抹不知何时到来的樱粉色。',
  ]);
  await era.printAndWait([
    '是英雄登场了吗？至少这一次，',
    urara.get_colored_name(),
    ' 终于与 ',
    me.get_colored_name(),
    ' 一同站在了「',
    urara.sex,
    '」的面前。',
  ]);
  await era.printAndWait(
    '美中不足的是，为什么有的英雄在赶来后一上来就说自己的训练员「变婆妈了」啊？',
  );
  await era.printAndWait([
    '而看到 ',
    urara.get_colored_name(),
    ' 后，虽然已经哭肿了眼睛，但「',
    urara.sex,
    '」依旧像在妹妹面前逞强的姐姐般抹干了眼泪。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '哈啊……结果乌拉拉也还想做大家的英雄啊……我说你啊……跑在最前面就那么美丽吗？',
  );
  await in_urara.say_as_unknown_and_wait(
    '像大家一开始说的那样开心做自己不就好了吗？你是觉得自己真能拯救他们吗？',
  );
  await era.printAndWait([
    '但面对另一个自己的咄咄逼人，',
    urara.get_colored_name(),
    ' 反而比最初与 ',
    me.get_colored_name(),
    ' 对话时变得更加坚定了。',
  ]);
  await urara.say_and_wait(
    '乌拉拉没有想过那样的事，因为大家都很坚强，乌拉拉是想要回报大家，而且……',
  );
  await urara.say_and_wait(
    '刚刚乌拉拉听到了，你一直以来也很委屈，但这样我就更不能逃避了。',
  );
  await urara.say_and_wait(
    '对不起，虽然乌拉拉还是第一次听到你的感受，但既然如此乌拉拉就更应该继续跑下去了！',
  );
  await era.printAndWait([
    '小小的',
    urara.get_uma_sex_title(),
    '攥紧了手心，摇曳的樱瞳中倒映着另一个如同',
    urara.sex_code - 1 ? '姐姐' : '哥哥',
    '般的自己。',
  ]);
  await urara.say_and_wait(
    '因为，这里有更需要乌拉拉的人在呢，所以，再相信乌拉拉一次吧……？',
  );
  await in_urara.say_as_unknown_and_wait('哈……因为乌拉拉也想要同情我吗……');
  await urara.say_and_wait(
    '是因为虽然别人看不见，但陪乌拉拉长大、一直保护着乌拉拉的你也是我的英雄啊！',
  );
  await urara.say_and_wait([
    '所以不管是乌拉拉还是 ',
    callname,
    ' 还是大家怎么样都好，和我们一起来吧……！',
  ]);
  await era.printAndWait([
    '站在 ',
    me.get_colored_name(),
    ' 的身前直面着隐藏在心中的另一个 ',
    urara.get_colored_name(),
    '，樱粉色的',
    urara.sex,
    '仿佛在一瞬间褪去了曾经懵懂的一切。',
  ]);
  await era.printAndWait([
    '目睹着 ',
    urara.get_colored_name(),
    ' 的变化，不只是一直为之努力的 ',
    me.get_colored_name(),
    '，就连「',
    urara.sex,
    '」也瞪大红肿的眼睛，露出了一瞬的喜悦。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '哈哈……原来是这样吗？结果乌拉拉变得强韧的最后一块零件，是我啊……',
  );
  await era.printAndWait([
    '但即使如此，倔强的',
    urara.sex,
    '依旧没有在虚无开裂的世界中接过 ',
    urara.get_colored_name(),
    ' 的邀请。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '你们都是不讲道理的人啊，但是我，是不会让你们简单的结束的……',
  );
  await era.printAndWait([
    '话音落下，长椅上的「',
    urara.sex,
    '」在留下一句任性的宣告便消失了，周围持续不断的碎裂声也同时停止了。',
  ]);
  await era.printAndWait([
    '时间开始重新转动，鸟鸣与风声也重新回到了两人身边，但从',
    urara.sex,
    '的发言来看，循环恐怕还在持续。',
  ]);
  await era.printAndWait(
    '虽然问题还没能解决，但至少现在，被留下的两人逐渐平复心情，也终于能够互相关心一下对方了。',
  );
  await era.printAndWait([
    '结果刚将视线转向身旁，',
    me.get_colored_name(),
    ' 就看到了 ',
    urara.get_colored_name(),
    ' 正伸出双手，表情迷茫得不断接着从脸颊滴下的泪水。',
  ]);
  await urara.say_and_wait([
    '诶？',
    callname,
    '，乌拉拉脸上的是……乌拉拉在哭吗？是因为突然觉得很伤心吗？',
  ]);
  await urara.say_and_wait([
    '这是，',
    urara.sex,
    '的心情吗？如果乌拉拉能更早的意识到……',
  ]);

  era.printButton(
    `「没关系的，至少现在这周应该可以顺利结束了，在那之后，我们就去找${in_urara.sex}吧……」`,
    1,
  );
  await era.input();

  await urara.say_and_wait([
    '……嗯！但是乌拉拉感受不到',
    urara.sex,
    '了，',
    urara.sex,
    '到底去了什么地方呢？',
  ]);

  era.printButton(
    '「要不问问亲爱的女神大人们？因为我记得学校的女神像前，好像没有长椅来着。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '随后，',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 同时望向了一旁仿佛目睹着一切、一直在静静地垂帘微笑的三女神像——',
  ]);
};
