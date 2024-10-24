/**
 * @file 绿帽癖速子 - Aromatic Hydrocarbon Poisoning（芳香烃中毒）
 *
 * @author 幽白書
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { init_ero, set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const item_desc = require('#/data/desc/shop-desc.json');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {TachyonLifeMarks} tachyon_marks */
async function tachyon_betrayed_2(tachyon_marks) {
  const tachyon = get_chara_talk(32),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0),
    c_call_m = sys_get_colored_callname(25, 0),
    c_call_t = sys_get_colored_callname(25, 32),
    t_call_c = sys_get_colored_callname(32, 25),
    t_call_m = sys_get_colored_callname(32, 0);

  tachyon_marks.ntr_mark = 4;
  await print_event_name(
    'Aromatic Hydrocarbon Poisoning（芳香烃中毒）',
    tachyon,
  );
  await tachyon.print_and_wait(['好舒服，好享受。']);
  await tachyon.print_and_wait([
    '今天的我，依旧在以 ',
    t_call_m,
    ' 和 ',
    t_call_c,
    ' 欢爱的声音为配菜。',
  ]);
  await tachyon.print_and_wait([
    '就这样，沉迷在情爱之中，或许也不是什么坏事……',
  ]);
  era.println();

  await tachyon.print_and_wait(['忽然，欢爱的声音停下了。']);
  await tachyon.print_and_wait(['仿佛在高潮前被寸止一般，我陷入焦急。']);
  await tachyon.print_and_wait(['为什么不继续。']);
  await tachyon.print_and_wait(['为什么停下来了。']);
  await tachyon.print_and_wait(['随着欢爱的声音停下，房间内瞬间安静了下来。']);
  era.println();

  await tachyon.print_and_wait(['哒。']);
  await tachyon.print_and_wait(['哒。']);
  await tachyon.print_and_wait(['哒。']);
  await tachyon.print_and_wait(['因此……门外传来的脚步声显得格外清晰。']);
  await tachyon.print_and_wait(['脚步声在门前停了下来。']);
  await tachyon.print_and_wait(['门外的人要做什么。']);
  await tachyon.print_and_wait(['要开门吗？']);
  await tachyon.print_and_wait([
    '要是开门的话，自己这副模样，这幅卑微的模样。',
  ]);
  await tachyon.print_and_wait(['要被……要被看见了。']);
  await tachyon.print_and_wait(['要躲起来，不能这样，必须要找个地方躲着。']);
  await tachyon.print_and_wait(['所以……所以为什么手又擅自的动起来了……']);
  era.println();

  await tachyon.print_and_wait(['咔啦。']);
  await tachyon.print_and_wait(['啊啊……打开了。']);
  await tachyon.print_and_wait(['看见门外出现的，黑发金瞳的身影时。']);
  await tachyon.print_and_wait([
    '绝顶达到了极致，迎来了至今为止最兴奋的一次高潮。',
  ]);
  era.println();

  await coffee.say_and_wait(['……真是可悲啊，', c_call_t, '。']);
  await tachyon.say_and_wait([t_call_c, '，为什么……']);
  await coffee.say_and_wait([
    '喊的那么大声……也就只有不是',
    tachyon.get_uma_sex_title(),
    '的 ',
    c_call_m,
    ' 会没发现吧。',
  ]);
  era.println();

  await tachyon.print_and_wait(['失算了。']);
  await tachyon.print_and_wait(['被发现了。']);
  await tachyon.print_and_wait(['怎么办，该怎么做才好。']);
  await tachyon.print_and_wait(['可悲的是，现在的自己心中想的最重要的。']);
  await tachyon.print_and_wait([
    '却是……该怎么恳求 ',
    t_call_c,
    '，允许自己听着',
    me.sex,
    '们做爱的声音来安慰自己。',
  ]);
  era.println();

  await tachyon.say_and_wait([t_call_m, ' ', me.sex, '……']);
  await coffee.say_and_wait([
    '不用担心……我和 ',
    c_call_m,
    ' 说了，我是出来拿东西的。',
  ]);
  await coffee.say_and_wait([c_call_t, '……腰上的药管……可以麻烦给我一支吗？']);
  await coffee.say_and_wait(['你应该知道……我想要的是哪一种吧。']);
  era.println();

  await tachyon.print_and_wait(['愣愣的望着对方。']);
  await tachyon.print_and_wait(['自己腰上的……', t_call_c, ' 会想要的……']);
  await tachyon.print_and_wait(['自己调配出来的，排卵促进剂吗？']);
  await tachyon.print_and_wait([
    '不由自主的，从腰间抽出了……原本应该是只为了自己和 ',
    t_call_m,
    ' 调配的药剂。',
  ]);
  era.println();

  await coffee.say_and_wait([c_call_t, '，可以，给我吗？']);
  era.println();

  await tachyon.print_and_wait(['她知道她在说什么吗？']);
  await tachyon.print_and_wait(['想要自己，将能够百分之百促进怀孕的药剂。']);
  await tachyon.print_and_wait(['亲手献上，亲手交给她。']);
  await tachyon.print_and_wait([
    '让她去和自己喜爱的人恩爱，让她怀上本应属于自己的孩子。',
  ]);
  await tachyon.print_and_wait([
    '可以说是相当于把自己踩在脚底下，极尽羞辱的事情了。',
  ]);
  await tachyon.print_and_wait(['但是为什么……手却伸了出去。']);
  await tachyon.print_and_wait(['为什么身体却如此灼热。']);
  era.println();

  await coffee.say_and_wait([c_call_t, '……你离那么远，我不是没法拿吗？']);
  await coffee.say_and_wait(['过来，递给我吧。']);
  era.println();

  await tachyon.print_and_wait(['不要。']);
  await tachyon.print_and_wait(['不要听她的。']);
  await tachyon.print_and_wait(['把药摔了。']);
  await tachyon.print_and_wait(['或者自己喝了也好。']);
  await tachyon.print_and_wait([
    '反正 ',
    t_call_m,
    ' 就在隔壁……喝下去之后，把该属于自己的讨回来。',
  ]);
  await tachyon.print_and_wait(['没错，就是这样。']);
  await tachyon.print_and_wait([
    '现在朝着门口走去，不是为了把药交给她，是为了……为了自己……',
  ]);
  await tachyon.print_and_wait(['欸……手，为什么……']);
  era.println();

  await coffee.say_and_wait(['……没想到你真的会做到这种地步啊。']);
  await coffee.say_and_wait(['真的，让人恶心。']);
  await coffee.say_and_wait(['不过我也不是那种狠心的人……']);
  await coffee.say_and_wait(['只能听，应该挺难受的吧？']);
  era.println();

  await tachyon.print_and_wait([
    '仿佛在交出药的瞬间，将自己的灵魂也一起交了出去一般。',
  ]);
  await tachyon.print_and_wait([
    '只能失魂落魄的跟着眼前的身影，走进原本应该有一半的归属权在自己手上的实验室。',
  ]);
  await tachyon.print_and_wait([
    '但……即便做出了这种事来，在看见 ',
    t_call_m,
    ' 的时候，还是不由自主的恢复了神智。',
  ]);
  era.println();

  await tachyon.say_and_wait([t_call_c, '……']);
  await coffee.say_and_wait([
    '放心吧……朋友已经帮忙盖住了 ',
    c_call_m,
    ' 的眼睛和耳朵……现在的',
    me.sex,
    '看不见，也听不见我们。',
  ]);
  await tachyon.say_and_wait(['你是说……']);
  await coffee.say_and_wait([
    '选择权就交给 ',
    c_call_t,
    ' 自己了……要加入，还是自己一个人看着？',
  ]);
  await tachyon.say_and_wait(['……']);
  era.println();

  await tachyon.print_and_wait(['最后一次机会。']);
  await tachyon.print_and_wait(['最后……如果现在答应的话，还能两人一起。']);
  await tachyon.print_and_wait(['如果不回答的话，那就再也不会有第二次了。']);
  await tachyon.print_and_wait(['自己有着这种预感。']);
  era.println();

  era.add('item:「嫁衣」', 1);
  init_ero(32);

  await tachyon.print_and_wait(['所以……']);
  era.printButton('开口答应', 1);
  era.printButton('沉默不语', 2);
  if ((await era.input()) === 1) {
    await tachyon.print_and_wait(['比自己更般配的应该是 ', t_call_c, '。']);
    await tachyon.print_and_wait([
      '比自己更适合',
      me.sex,
      '的也应该是 ',
      t_call_c,
      '。',
    ]);
    await tachyon.print_and_wait([
      '如果是为了',
      me.sex,
      '好，那么自己应该选择放弃才对……吗？',
    ]);
    era.println();

    await tachyon.print_and_wait(['不理解，不能明白。']);
    await tachyon.print_and_wait(['喜欢上一个人原来是这么难懂的事吗。']);
    await tachyon.print_and_wait([
      '如果出于合理，这里应该要心甘情愿的祝福',
      me.sex,
      '们。',
    ]);
    await tachyon.print_and_wait(['而不是，而不是……']);
    era.println();

    await tachyon.print_and_wait(['不知不觉。']);
    await tachyon.print_and_wait(['自己又将目光投向了床上的', me.sex, '。']);
    await tachyon.print_and_wait(['……总是包容着任性的自己的', me.sex, '。']);
    await tachyon.print_and_wait(['只有这次……请再一次原谅，自己的任性吧。']);
    era.println();

    await tachyon.print_and_wait(['朝着 ', t_call_c, ' 伸出手的瞬间。']);
    await tachyon.print_and_wait([
      '看见床上的',
      me.sex,
      '，忽然露出惊讶的表情的瞬间。',
    ]);
    await tachyon.print_and_wait([
      '再也按耐不住自己内心的情绪，朝着床上的爱人扑去。',
    ]);

    era.printButton(`「哇啊，${sys_get_callname(0, 32)}，什么时候！？」`, 1);
    await era.input();

    await tachyon.print_and_wait([
      me.sex,
      '的表情有惊讶，有错愕，甚至还有些心虚。',
    ]);
    await tachyon.print_and_wait(['但最重要的是……', me.sex, '的身体。']);
    await tachyon.print_and_wait(['好温暖，好令人安心。']);
    await tachyon.print_and_wait([
      '直到现在，才仿佛从一场做了好久，好久的恶梦中惊醒一般。',
    ]);
    await tachyon.print_and_wait(['刚才的自己到底在想什么。']);
    await tachyon.print_and_wait([
      '为什么会想主动放弃这种温暖，甚至还想看着别人去享受这种温暖。',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '后知后觉的恐怖和害怕此时才追上了 ',
      tachyon.get_colored_name(),
      ' 的心灵。',
    ]);
    await tachyon.print_and_wait([
      '要是刚刚自己真的什么也不说，要是自己真的放弃了 ',
      t_call_m,
      ' 的话……',
    ]);
    era.println();

    await tachyon.say_and_wait([t_call_m, '……对不起……对不起！']);
    await tachyon.say_and_wait(['我不要……不要再把你让给任何人了！']);
    await tachyon.say_and_wait([
      '讨厌……讨厌！是我的 ',
      t_call_m,
      '……一辈子都是我的……！',
    ]);
    era.println();

    await tachyon.print_and_wait(['像个孩子一样嚎啕大哭。']);
    await tachyon.print_and_wait(['好羞耻，但是……']);
    await tachyon.print_and_wait([
      '被虽然困惑，却还是温柔的安慰着自己的',
      me.sex,
      '抱住，真的……好舒服。',
    ]);

    era.drawLine();

    await era.printAndWait([
      '困惑地看着依旧抱着自己不断哭泣的 ',
      tachyon.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 感到有些困惑。']);
    await era.printAndWait([
      '从 ',
      tachyon.get_colored_name(),
      ' 不知道怎么忽然凭空出现在实验室中，到现在的放声大哭，一切的一切都令 ',
      me.get_colored_name(),
      ' 感到懵然。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 不由自主地看向感觉唯一知道发生了什么的 ',
      coffee.get_colored_name(),
      '，但……',
    ]);
    era.println();

    await coffee.say_and_wait([
      '今天……就先让给她吧……',
      c_call_m,
      '，请好好安慰她直到她满足吧。',
    ]);
    await coffee.say_and_wait([
      '相对的……今天拿到了很有用的药呢……',
      c_call_m,
      '，明天请要给予我，同等的爱哦。',
    ]);
    await era.printAndWait([
      '说完后，',
      coffee.get_colored_name(),
      ' 就推开门走了出去。',
    ]);
    await era.printAndWait(['……所以到底发生了什么。']);
    era.println();

    await tachyon.say_and_wait([t_call_m, '……', t_call_m, '……']);
    era.println();

    await era.printAndWait([
      '不知不觉间，刚刚还在哭泣的 ',
      tachyon.get_colored_name(),
      ' 用更紧的力道抱住了 ',
      me.get_colored_name(),
      '。',
    ]);
    era.println();

    await tachyon.say_and_wait(['对不起……但是……可以更深的……爱着我吗……']);
    await tachyon.say_and_wait([
      '我现在需要……更加温暖的，炙热的东西，来让身体从里到外的暖和起来。',
    ]);
    await tachyon.say_and_wait([t_call_m, '……求求你……可以，可以给我吗。']);
    era.println();

    await era.printAndWait(['看着她混杂着恳求、恐惧和情欲的眼神。']);
    await era.printAndWait([me.get_colored_name(), ' 翻过身，将她压在身下。']);
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(32, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(32, part_enum.virgin),
      false,
    );
    era.drawLine();
    await era.printAndWait([
      '获得了道具 ',
      {
        content: '[「嫁衣」]',
        color: buff_colors[2],
        title: item_desc['「嫁衣」'],
      },
      '……',
    ]);
  } else {
    await coffee.say_and_wait(['……如果这就是你的选择的话。']);
    await coffee.say_and_wait([
      '我没什么关系就是……毕竟我也不想，把 ',
      c_call_m,
      ' 让给其他人。',
    ]);
    await coffee.say_and_wait(['只是……真是，可悲。']);
    era.println();

    await tachyon.print_and_wait(['回不去了。']);
    await tachyon.print_and_wait(['再也，回不去了。']);
    await tachyon.print_and_wait(['一切都结束了……但为什么。']);
    await tachyon.print_and_wait(['现在的心情，却意外的……好轻松。']);
    await tachyon.print_and_wait(['确实，自己确实是个可悲的女人。']);
    await tachyon.print_and_wait([
      '因为……看着自己的爱人，与其',
      me.sex,
      '的女人缠绵的模样。',
    ]);
    await tachyon.print_and_wait(['自己竟然……露出了笑容。']);
    era.println();

    await coffee.say_and_wait(['抱歉……', c_call_m, '，让您久等了。']);
    await coffee.say_and_wait([
      '嗯？没什么……只是，想起之前委托 ',
      c_call_t,
      ' 做的药没拿……',
    ]);
    await coffee.say_and_wait([
      '……怎么提到 ',
      c_call_t,
      ' 就露出这种表情了呢？抱歉？但是……虽然这么说，下面不还是变得这么硬了吗？',
    ]);
    await coffee.say_and_wait([
      '咕啾……啾噜……噗哈……',
      c_call_m,
      '……请在……嘴里出来吧，这样正好能够……和药一起……',
    ]);
    await coffee.say_and_wait([
      '什么药？……是能够让我们的爱情化为结晶的药哦，请放心……',
      c_call_t,
      ' 已经同意了。',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '说到这，',
      t_call_c,
      ' 往蹲在床边的自己看了一眼。',
    ]);
    await tachyon.print_and_wait(['此时的自己，脸上是什么样的表情？']);
    await tachyon.print_and_wait(['悲伤？痛苦？仇视？心死？']);
    await tachyon.print_and_wait(['啊啊……']);
    await tachyon.print_and_wait(['从 ', t_call_c, ' 鄙视的眼神就能知道。']);
    await tachyon.print_and_wait(['绝对，不会是其中的任何一个吧。']);
    era.println();

    await coffee.say_and_wait([c_call_m, '……', c_call_m, '……。']);
    era.println();

    await tachyon.print_and_wait([t_call_c, ' 骑上了', me.sex, '的身体。']);
    await tachyon.print_and_wait([
      '随后，发出了最低贱的妓女都自愧不如的浪叫。',
    ]);
    await tachyon.print_and_wait(['……不，这只是自己的有色眼光而已。']);
    await tachyon.print_and_wait([
      '实际上，应该是很幸福，很喜悦的娇喘声才对吧。',
    ]);
    await tachyon.print_and_wait(['但，无妨。']);
    await tachyon.print_and_wait([
      '倒不如说，想像成前者那样，才会让自己更加兴奋。',
    ]);
    await tachyon.print_and_wait(['自己的爱人。']);
    await tachyon.print_and_wait(['自己的 ', t_call_m, '。']);
    await tachyon.print_and_wait(['被妓女都不如的存在按在身下骑的模样。']);
    era.println();

    await coffee.say_and_wait(['呐……', c_call_m, '……不，训练员君……。']);
    era.println();

    await tachyon.print_and_wait(['忽然，', t_call_c, ' 的声音变得无比妩媚。']);
    await tachyon.print_and_wait([
      '说话的方式也跟着改变，变成了……陌生，而又熟悉的语气。',
    ]);
    era.println();

    await coffee.say_and_wait([
      '哦呀，',
      c_call_m,
      '……怎么，忽然变得这么用力呢？',
    ]);
    await coffee.say_and_wait(['难道……是透过我，看见了什么人吗？']);
    era.println();

    await tachyon.print_and_wait(['不……']);
    await tachyon.print_and_wait(['不要。']);
    await tachyon.print_and_wait(['等等，', t_call_c, '，不要。']);
    await tachyon.print_and_wait(['忍不住了。']);
    await tachyon.print_and_wait(['还是开口，喊出声了。']);
    await tachyon.print_and_wait(['但是……']);
    era.println();

    await coffee.say_and_wait([me.sex, '是看不见，也听不见你的。'], true);
    era.println();

    await tachyon.print_and_wait(['仿佛有什么声音，在身后对自己诉说着。']);
    await tachyon.print_and_wait(['是……', t_call_c, ' 的『朋友』吗？']);
    await tachyon.print_and_wait(['不对，这种事不重要。']);
    await tachyon.print_and_wait([t_call_c, '，你——————。']);
    era.println();

    await coffee.say_and_wait(['很过分吧，', c_call_m, '。']);
    era.println();

    await tachyon.print_and_wait(['忽然，', t_call_c, ' 的声音恢复原状。']);
    era.println();

    await coffee.say_and_wait([
      '明明，您是爱着她的……但是，她却这样将您的心意踩在脚下，不是吗？',
    ]);
    era.println();

    await tachyon.print_and_wait(['什。']);
    await tachyon.print_and_wait([t_call_c, '……你在说什么。']);
    await tachyon.print_and_wait(['不对……你在……说谁……？']);
    era.println();

    await coffee.say_and_wait([
      '明明，',
      c_call_m,
      ' 对 ',
      c_call_t,
      ' 奉献了那么多。',
    ]);
    await coffee.say_and_wait([
      '明明，都已经完全超越了训练员和',
      tachyon.get_uma_sex_title(),
      '的界限。',
    ]);
    await coffee.say_and_wait([
      '但是……她还是在我提出，『这个药是要和 ',
      c_call_m,
      ' 一起用的』时……干脆地把药交出来了哦。',
    ]);
    era.println();

    await tachyon.print_and_wait([t_call_m, '……喜欢……的人……']);
    await tachyon.print_and_wait([
      '不对，',
      me.sex,
      '跟 ',
      t_call_c,
      '，才是更般配的，不是吗。',
    ]);
    await tachyon.print_and_wait(['我才是，第三者……']);
    era.println();

    await coffee.say_and_wait(['唔……忽然……忽然这么用力……❤️。']);
    await coffee.say_and_wait(['呐……', c_call_m, '……里面……在里面……。']);
    await coffee.say_and_wait([
      c_call_t,
      ' 不愿意的，我都会让您做……',
      c_call_t,
      ' 拒绝了您，但我，会比她更加倍的满足您。',
    ]);
    era.println();

    await tachyon.print_and_wait(['不是。']);
    await tachyon.print_and_wait(['我没有。']);
    await tachyon.print_and_wait(['我……']);
    era.println();

    await tachyon.print_and_wait(['啊。']);
    await tachyon.print_and_wait(['不对啊。']);
    await tachyon.print_and_wait(['我拒绝了啊。']);
    era.println();

    await tachyon.print_and_wait(['最后的一次机会。']);
    await tachyon.print_and_wait(['已经被自己抛弃了。']);
    await tachyon.print_and_wait(['这次，真的没有机会了。']);
    era.println();

    await tachyon.print_and_wait(['但是，为什么……']);
    await tachyon.print_and_wait(['为什么身体却不住颤抖……']);
    await tachyon.print_and_wait(['明明是自己的爱人。']);
    await tachyon.print_and_wait(['明明是爱着自己的人。']);
    await tachyon.print_and_wait(['明明，她才是第三者。']);
    era.println();

    await tachyon.print_and_wait([
      t_call_m,
      ' 和 ',
      t_call_c,
      ' 的立场忽然反转。',
    ]);
    await tachyon.print_and_wait([
      t_call_m,
      ' 将 ',
      t_call_c,
      ' 用后背位按在床上。',
    ]);
    await tachyon.print_and_wait([
      '不停的，仿佛要将一切全部发泄出来一般的活塞运动。',
    ]);
    await tachyon.print_and_wait([t_call_c, ' 都已经翻起白眼，甚至吐出舌头。']);
    await tachyon.print_and_wait(['然而……', me.sex, '的嘴型。']);
    await tachyon.print_and_wait([
      t_call_m,
      ' 的嘴型，一直在喃喃的念着某个词。',
    ]);
    await tachyon.print_and_wait(['那是……', sys_get_callname(0, 32), '。']);
    era.println();

    era.println();

    await tachyon.print_and_wait(['……如果，是现在的话。']);
    await tachyon.print_and_wait([t_call_c, ' 已经晕过去的现在。']);
    await tachyon.print_and_wait(['做什么，应该也不会被发现吧。']);
    await tachyon.print_and_wait([
      '如果真的按她所说的，『朋友』会掩盖掉一切痕迹。',
    ]);
    await tachyon.print_and_wait(['那么……就算我……']);
    era.println();

    await coffee.say_and_wait(['啾……啾……。']);
    era.println();

    await tachyon.print_and_wait(['不是肉杆。']);
    await tachyon.print_and_wait(['不是玉袋。']);
    await tachyon.print_and_wait([
      '抛弃了',
      me.sex,
      '的我，没有资格对',
      me.sex,
      '做出这种逾矩之事。',
    ]);
    await tachyon.print_and_wait(['只是，从两人的交合处，溢出的液体。']);
    await tachyon.print_and_wait(['将自己当成，清扫工具一样的物品。']);

    era.printButton('「！？」', 1);
    await era.input();

    await tachyon.print_and_wait(['明明只是，在舔舐着而已。']);
    await tachyon.print_and_wait([me.sex, '却忽然回过头来。']);
    await tachyon.print_and_wait(['等等。']);
    await tachyon.print_and_wait(['不要看。']);
    await tachyon.print_and_wait(['不要看我这么低贱的模样。']);
    await tachyon.print_and_wait(['求求你，求求……']);

    era.printButton('「你……是谁？」', 1);
    await era.input();

    await tachyon.print_and_wait(['……欸？']);
    await tachyon.print_and_wait([t_call_m, ' 露出了迷茫，羞耻，困惑的表情。']);
    await tachyon.print_and_wait([
      '无论是哪一个，都不应该是在看到「我」之后该露出的表情。',
    ]);
    era.println();

    await coffee.say_and_wait([
      '她是……一名同样，憧憬着 ',
      c_call_m,
      ' 的孩子。',
    ]);
    await coffee.say_and_wait([
      '只是……这孩子比较害羞，所以我请朋友帮忙，隐藏了她的面貌……',
    ]);
    await coffee.say_and_wait(['还是说……', c_call_m, ' 想看看她的模样吗？']);
    era.println();

    await tachyon.print_and_wait([
      '原本稍微放下的心，在 ',
      t_call_c,
      ' 说出最后一句话的瞬间又绷了起来。',
    ]);
    era.println();

    await me.say_and_wait('不……如果不想要被看到的话……还是不要勉强吧。');
    await coffee.say_and_wait([c_call_m, '……真温柔呢……']);
    era.println();

    await tachyon.print_and_wait(['是啊……']);
    await tachyon.print_and_wait(['真的，太过温柔了。']);
    await tachyon.print_and_wait(['不知为何，脑海里开始浮现。']);
    await tachyon.print_and_wait([
      '万一',
      me.sex,
      '知道了 ',
      tachyon.get_colored_name(),
      ' 是这样的',
      tachyon.get_uma_sex_title(),
      '。',
    ]);
    await tachyon.print_and_wait([
      '万一',
      me.sex,
      '看见了自己此时下贱的模样。',
    ]);
    await tachyon.print_and_wait([me.sex, '会用……如何鄙视的眼神看着自己呢？']);
    await tachyon.print_and_wait(['会用如何冷酷的话语来辱骂自己。']);
    await tachyon.print_and_wait(['或者……']);
    await tachyon.print_and_wait(['万一，', me.sex, '原谅了自己。']);
    await tachyon.print_and_wait(['原谅了已经如此无药可救的自己……']);
    await tachyon.print_and_wait([
      '那么，如果再一次被自己出卖给 ',
      t_call_c,
      '，到时候的',
      me.sex,
      '又会露出如何让人兴奋的表情呢。',
    ]);
    era.println();

    await coffee.say_and_wait(['不过……这孩子真的很喜欢 ', c_call_m, ' 呢。']);
    await coffee.say_and_wait([
      '所以，',
      c_call_m,
      ' 不介意的话……可以让这孩子，在旁边看着吗？',
    ]);
    await coffee.say_and_wait([
      '放心吧，只是看着……我保证，这孩子绝对不会再擅自行动了……对吧？',
    ]);
    era.println();

    await tachyon.print_and_wait([t_call_c, ' 坐在床边，用脚将我的下巴勾起。']);
    await tachyon.print_and_wait(['像在教育不听话的小狗一般。']);
    await tachyon.print_and_wait(['明明，是自己的情敌，明明，是自己的对手。']);
    await tachyon.print_and_wait(['但是……']);
    await tachyon.print_and_wait([
      '看着从 ',
      t_call_c,
      ' 的胯下缓缓流下，沿着小腿肚向下流泄。',
    ]);
    await tachyon.print_and_wait(['甚至，足背，足尖。']);
    await tachyon.print_and_wait(['那欢爱的痕迹，混合了两人爱液精液的白浆。']);
    await tachyon.print_and_wait(['我……']);
    await tachyon.print_and_wait([
      '鬼使神差下，我舔了舔 ',
      t_call_c,
      ' 的足。',
    ]);
    await tachyon.print_and_wait(['甜蜜的，苦涩的，羞辱的，兴奋的。']);
    await tachyon.print_and_wait(['各式各样的味道在口中爆发。']);
    await tachyon.print_and_wait(['不知不觉，整只脚都已经被舔吮干净。']);
    await tachyon.print_and_wait(['没有了……']);
    await tachyon.print_and_wait(['还想要更多，更多那样的味道……']);
    await tachyon.print_and_wait(['无论，付出什么代价……']);
    era.println();

    await tachyon.print_and_wait(['我躺在地上，露出了臣服的姿势。']);
    await tachyon.print_and_wait([
      '将 ',
      t_call_c,
      ' 的脚，小心翼翼的放在自己的腹部上。',
    ]);
    await tachyon.print_and_wait(['就算如何践踏自己的尊严也无所谓。']);
    await tachyon.print_and_wait(['只要能够再次，获得赏赐。']);
    era.println();

    await coffee.say_and_wait(['哎呀……真是好孩子。']);
    await coffee.say_and_wait(['真是……不错的表现啊。']);
    await coffee.say_and_wait([
      '要是能够继续做出这样的表演……偶尔，给你一些奖励，倒也不是不行……',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '忽然，',
      t_call_c,
      ' 将嘴凑近到耳旁，用只有',
      tachyon.get_uma_sex_title(),
      '才能听见的音量小声说道。',
    ]);
    era.println();

    await coffee.say_and_wait(['尽情的取悦我吧，', c_call_t, ' ❤️。']);
    era.println();

    await tachyon.print_and_wait(['于是，', t_call_c, ' 回到床上。']);
    await tachyon.print_and_wait(['接着，床上再度传来震动。']);
    await tachyon.print_and_wait([
      '床下的 ',
      tachyon.get_colored_name(),
      '，只能吐着舌头。',
    ]);
    await tachyon.print_and_wait([
      '在专属的特等席上，如青蛙一般悲惨的抖动身躯。',
    ]);
    await tachyon.print_and_wait(['拼命安慰自己的同时，也取悦床上的情敌。']);
    await tachyon.print_and_wait([
      '祈求，对方能够可怜卑微的自己，给予一点点的，一点点的赏赐。',
    ]);
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(25, part_enum.virgin);
    set_palam_to_max(32, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(25, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(25, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(25, part_enum.foot),
      false,
    );
    era.set('talent:32:绿帽癖', 1);
  }
}

module.exports = tachyon_betrayed_2;
