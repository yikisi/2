const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function betray_ending(tachyon, me) {
  await era.printAndWait([
    '在那天，莫名其妙的从 ',
    tachyon.get_colored_name(),
    ' 的实验室里昏过去后。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 作为训练员，理当寻找自己要负责的',
    tachyon.uma_sex_title,
    '。',
  ]);
  await era.printAndWait([
    '然而无论是谁，都无法满足 ',
    me.get_colored_name(),
    ' 内心的渴望。',
  ]);
  await era.printAndWait([
    '仿佛内心有个声音在说：不是',
    tachyon.sex,
    '，不是',
    tachyon.couple_title,
    '。',
  ]);
  await era.printAndWait([
    '没过多久，没有招募到任何',
    tachyon.uma_sex_title,
    '的 ',
    me.get_colored_name(),
    '，被开除出了特雷森学园。',
  ]);
  await era.printAndWait(['但是，这样也挺好。']);
  await era.printAndWait([me.get_colored_name(), ' 乐观地想着。']);
  await era.printAndWait([
    '与其被强迫着与不适合自己的',
    tachyon.uma_sex_title,
    '配合，不如干脆不干。',
  ]);

  era.drawLine();
  await era.printAndWait([
    '离开学园后，',
    me.get_colored_name(),
    ' 在距离特雷森不远的地方开了一间小餐馆。',
  ]);
  await era.printAndWait(['自己的厨艺不知为何，似乎还挺不错的。']);
  await era.printAndWait([
    '虽然不知道失忆前的自己究竟发生了什么，但想必自己一定有什么很重要的，想要做饭给对方吃的人在吧，否则是不可能做到这种程度的。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 运用着那莫名熟练的厨艺，很快的就将餐馆的名声打响，特雷森周遭，甚至特雷森学园的',
    tachyon.uma_sex_title,
    '都经常来光顾 ',
    me.get_colored_name(),
    ' 的店面。',
  ]);
  await era.printAndWait([
    '虽然不知道失忆前的自己究竟发生了什么，但想必自己一定有什么很重要的，想要做饭给对方吃的人在吧，否则是不可能做到这种程度的。',
  ]);
  await era.printAndWait([
    '所以，也一定是因为这个人不在吧，每一次的下厨，自己都感觉不到任何热情。',
  ]);
  era.println();

  await era.printAndWait(['就这样，日子一天一天的过去。']);
  await era.printAndWait([
    '要说多好，也不至于，可要说坏，自己也没那么的不知足。',
  ]);
  await era.printAndWait(['只是活着，仅此而已。']);
  era.println();

  await say_by_passer_by_and_wait('解说', [
    '是 ',
    tachyon.get_colored_name(),
    '！',
    tachyon.get_colored_name(),
    ' 的第一场复出战！就在有马纪念拿下了辉煌的胜利！',
  ]);

  era.drawLine();
  await era.printAndWait(['忽然。']);
  await era.printAndWait([
    '那名',
    tachyon.uma_sex_title,
    '，如闪电一般划过天际。',
  ]);
  await era.printAndWait([
    '也如闪电一般，击中了 ',
    me.get_colored_name(),
    ' 的内心。',
  ]);
  await era.printAndWait([
    tachyon.get_colored_name(),
    '，那个莫名其妙的',
    tachyon.uma_sex_title,
    '。',
  ]);
  await era.printAndWait([
    '自从那天在实验室里告别以来，就再未谋面的',
    tachyon.uma_sex_title,
    '。',
  ]);
  await era.printAndWait([
    '明明只是在店内的电视随手播放了作为年末热门话题的有马纪念。',
  ]);
  await era.printAndWait([
    '却没想到，对方一跑起来，自己不知为何，便移不开双眼。',
  ]);
  await era.printAndWait([
    '直到对方跨越终点线的瞬间，',
    me.get_colored_name(),
    ' 才意识到，自己不知何时已经流下泪来。',
  ]);
  era.println();

  await era.printAndWait([
    '赛后的采访，',
    tachyon.get_colored_name(),
    ' 说',
    tachyon.sex,
    '的复出，是为了寻找一个人，一个对',
    tachyon.sex,
    '而言，至关重要，不可或缺的人。',
  ]);
  await era.printAndWait(['是谁呢？众人们纷纷谈论着。']);
  await era.printAndWait([
    '是谁呢？有个声音在 ',
    me.get_colored_name(),
    ' 的脑海里提问。',
  ]);
  await era.printAndWait(['头痛，头痛，头痛欲裂。']);
  await era.printAndWait([
    '如果说在',
    tachyon.sex,
    '跑起来瞬间，自己是因感动而流下了泪水。',
  ]);
  await era.printAndWait([
    '那么在',
    tachyon.sex,
    '接受采访，听见',
    tachyon.sex,
    '说的话的瞬间，就纯粹是痛到流泪了。',
  ]);
  await era.printAndWait([tachyon.get_colored_name(), ' 在找的人，到底是谁？']);
  await era.printAndWait(['和自己到底，有什么关系？']);
  era.println();

  await era.printAndWait(['然而，超光速的粒子没有因任何人而停下。']);
  await era.printAndWait(['大阪杯。']);
  await era.printAndWait(['天皇赏春。']);
  await era.printAndWait(['安田纪念。']);
  await era.printAndWait(['宝冢纪念。']);
  await era.printAndWait(['天皇赏秋。']);
  await era.printAndWait(['日本杯。']);
  await era.printAndWait([
    '每一场比赛，',
    tachyon.get_colored_name(),
    ' 都以压倒性的大差，以魅惑众人的跑法彻底赢下。',
  ]);
  await era.printAndWait([
    '每一次的比赛结束，',
    tachyon.sex,
    '都会在采访前诉说。',
  ]);
  await era.printAndWait(['有时是与「那个人」相伴的日常。']);
  await era.printAndWait(['有时是对「那个人」的忏悔。']);
  await era.printAndWait(['有时是对「那个人」的责怪。']);
  await era.printAndWait(['有时，却只是说着说着，便在镜头前泣不成声。']);
  era.println();

  await era.printAndWait([
    '每一场比赛，',
    me.get_colored_name(),
    ' 都比谁都还要热忱的盯着。',
  ]);
  await era.printAndWait([
    '每一次的比赛结束，听见',
    tachyon.sex,
    '的采访，',
    me.get_colored_name(),
    ' 的头痛欲裂便会让 ',
    me.get_colored_name(),
    ' 再一次发誓，下次绝对不看，最起码要跳过采访环节。',
  ]);
  await era.printAndWait(['然而，每一次都没能成功。']);
  await era.printAndWait(['胀痛。'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
  });
  await era.printAndWait(['阵痛。'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
  });
  await era.printAndWait(['钝痛。'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
  });
  await era.printAndWait(['间痛。'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
  });
  await era.printAndWait(['刺痛。'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
  });
  await era.printAndWait(['剧痛。'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
  });
  await era.printAndWait([
    '每一次的疼痛，',
    me.get_colored_name(),
    ' 都有种感觉。',
  ]);
  await era.printAndWait(['快了，快要到了。']);
  await era.printAndWait(['仿佛每次的痛，都在一层一层将记忆的面纱摘除一般。']);

  era.drawLine();
  await era.printAndWait(['终于，最后的有马纪念。']);
  era.println();

  await say_by_passer_by_and_wait('解说', [
    tachyon.get_colored_name(),
    '！达成了有马纪念连霸及全年无败的成绩！是 ',
    tachyon.get_colored_name(),
    '！获得了最终的胜利！',
  ]);
  era.println();

  await era.printAndWait(['啊啊。']);
  await era.printAndWait(['在看见那跑法的瞬间。']);
  await era.printAndWait(['仿佛浑身的力气都被抽取出来一般。']);
  await era.printAndWait(['这就是，一直以来追求的。']);
  await era.printAndWait([
    '这就是，一直以来，与「',
    tachyon.sex,
    '」一起追求的。',
  ]);
  await era.printAndWait(['极限……不，超越极限的，完美的跑法。']);
  era.println();

  await era.printAndWait(['电视上，赛事结束后，开始播放起赛前采访的回播。']);
  era.println();

  await era.printAndWait('（记者A「在有马纪念结束后，您就要宣布退役了吗？」）');
  await tachyon.used_to_say_and_wait([
    '嗯……如果说，就连这样也找不到',
    me.sex,
    '的话……那我觉得，应该要换一种方式了。',
  ]);
  await tachyon.used_to_say_and_wait([
    '接下来，我将退役离开赛场，然后……呵呵，我也不知道……一年？十年？还是……一辈子？那都无所谓，直到找到',
    me.sex,
    '为止，我不会放弃。',
  ]);
  era.println();

  await era.printAndWait([tachyon.get_colored_name(), '，要退役了？']);
  await era.printAndWait(['离开赛场，为了寻找「那个人」………寻找「谁」？']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 的脚步开始移动，仿佛想要现在赶去特雷森学园，赶在',
    tachyon.sex,
    '还没离开前，去找',
    tachyon.sex,
    '，去见',
    tachyon.sex,
    '，去……',
  ]);
  await era.printAndWait(['不知不觉，头又开始发疼。']);
  era.println();

  await era.printAndWait('？？？「好痛……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
  });
  await era.printAndWait('？？？「好可怕……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
  });
  await era.printAndWait('？？？「救救我……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
  });
  await era.printAndWait('？？？「救救我，豚鼠君！」', {
    color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
  });
  await era.printAndWait('？？？「豚鼠君，你在哪里？」', {
    color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
  });
  await era.printAndWait('？？？「豚鼠君？不要抛弃我……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
  });
  await era.printAndWait('？？？「回来我身边……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
  });
  await era.printAndWait('？？？「求求你，回来吧……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
  });
  await era.printAndWait('？？？「我不能没有你！」', {
    color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
  });
  era.println();

  await era.printAndWait([
    { color: tachyon.color, content: '头痛' },
    '的真面目，被揭开了。',
  ]);
  await era.printAndWait(['无数的声音，在自己的耳旁，不停的哭喊，哀嚎。']);
  await era.printAndWait(['是谁？']);
  await era.printAndWait(['是谁在哭喊。']);
  await era.printAndWait(['是谁在哀嚎。']);
  await era.printAndWait(['「豚鼠君」…………是谁？']);
  await era.printAndWait(['脚步停了下来。']);
  await era.printAndWait(['双腿颤抖，全身发冷。']);
  await era.printAndWait(['自己在害怕……害怕什么？']);
  await era.printAndWait(['害怕面对 ', tachyon.get_colored_name(), '。']);
  await era.printAndWait(['害怕知道真相。']);
  await era.printAndWait(['害怕知道……自己是个怎么样的人。']);
  era.println();

  await era.printAndWait(['—————————']);
  await era.printAndWait(['——————']);
  await era.printAndWait(['—————']);
  era.println();

  await era.printAndWait(['最终，', me.get_colored_name(), ' 没有挪动步伐。']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 再也没见到过 ',
    tachyon.get_colored_name(),
    '。',
  ]);
  await era.printAndWait([me.get_colored_name(), ' 的头，也再没有痛过。']);
  await print_event_name(
    [{ color: buff_colors[3], content: `于是，${me.sex}再也没见过爱丽速子` }],
    tachyon,
  );
}

module.exports = betray_ending;
