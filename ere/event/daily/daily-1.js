const era = require('#/era-electron');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(HookArg,*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  if (era.get('love:1') >= 50) {
    get_chara_talk(1).say(
      Math.random() < 0.5
        ? '训练员，我们开始今天的安排吧！我已经等不及了！'
        : '每次见到训练员，都会觉得很安心呢～诶嘿嘿……',
    );
  } else {
    get_chara_talk(1).say(
      Math.random() < 0.5
        ? '训练员，我已经做好准备了！'
        : '为了成为日本第一的赛马娘，我会努力的！',
    );
  }
};
handlers[event_hooks.good_morning] = async function () {
  const chara_talk = get_chara_talk(1);
  let talk_arr;
  if (era.get('love:1') >= 50) {
    talk_arr = [
      '妈妈从老家寄来了好多胡萝卜，我分你一些吧！',
      [
        '每次看到这身决胜服，我都会想起和训练员一起相处的时光……',
        { content: '总感觉有些奇妙的感觉呢。', fontSize: '12px' },
      ],
      '训练员今天也帮我带了便当吗？……诶嘿嘿，不好意思，一想到训练员做的料理，哪怕还是早上也会想吃呢。',
      '昨天跟铃鹿同学聊到很晚，很开心呢……聊的什么？是要对训练员保密的东西哦。',
    ];
  } else if (!get_random_value(0, 3)) {
    await chara_talk.print_and_wait(
      `${chara_talk.name}「胡萝卜汉堡肉盖饭……胡萝卜汉堡肉盖饭……」（碎碎念）`,
    );
  } else {
    talk_arr = [
      '特雷森学园真的好大，感觉一不留神就会迷路！',
      '和丸善斯基前辈说上话了，她真的好有气质！',
      '每次看到这身决胜服，我都会想起要成为日本第一马娘的梦想！为此我会更加努力的！',
    ];
  }
  talk_arr && (await chara_talk.say_and_wait(get_random_entry(talk_arr)));
};

handlers[event_hooks.talk] = async function () {
  const chara_talk = get_chara_talk(1);
  let talk_arr;
  if (era.get('base:1:体力') < 0.45 * era.get('maxbase:1:体力')) {
    await chara_talk.say_and_wait(
      Math.random() < 0.5
        ? '呼……身体有点沉重……'
        : '训练员……对不起，我能不能休息一会儿？',
    );
  } else {
    switch (era.get('cflag:1:干劲')) {
      case 2:
        talk_arr = [
          '今天要做什么？无论要做什么我都会全力以赴的！',
          '感觉今天状态很好哦！',
        ];
        break;
      case 1:
        talk_arr = [`好想让妈妈快点看到变强的我！`, `训练员，请指示！`];
        break;
      case 0:
        talk_arr = [`今天的训练内容是什么呢？`, '训练员，接下来我们做什么呢？'];
        break;
      case -1:
        talk_arr = ['唉……啊对不起，我好像有点没精神……', '唔，有点使不上劲……'];
        break;
      case -2:
        talk_arr = ['唔……身体使不上力气……', '总是忍不住在想一些不好的事情……'];
    }
    await chara_talk.say_and_wait(get_random_entry(talk_arr));
  }
};

handlers[event_hooks.office_gift] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `这是……不二家的限定胡萝卜慕斯蛋糕！谢谢你训练员！我开动了～`
      : `多谢训练员的礼物，我很高兴哦！诶嘿嘿～`,
  );
};

handlers[event_hooks.office_study] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `好像懂了，又好像没懂……可以再来一遍吗，训练员？`
      : `呼啊……呼啊……诶……对对对对不起训练员！我真的没睡着！我只是……有点困了……`,
  );
};

handlers[event_hooks.office_cook] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `训练员，让我也露一手吧！今天要做的是北海道名物鸡腿——夜干！`
      : `我把胡萝卜都洗干净切好了！后面的事就有劳训练员了！`,
  );
};

handlers[event_hooks.office_rest] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `青酱跟我说午睡之后一下午都会很有干劲，好像确实如此哦。`
      : `呜喵……训练员，我睡了多久？`,
  );
};

handlers[event_hooks.office_game] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `哼哼哼～训练员，又是我赢了！在打赌这方面，我的运气可是不输给任何人的哦！`
      : `手柄确实用不习惯呢……毕竟我是来到中央特雷森之后才开始接触游戏机之类的东西的……`,
  );
};

handlers[event_hooks.office_prepare] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `我理解了，训练员！请看我在比赛中的发挥吧！`
      : `嗯嗯，还有点时间，我想去操场上试一下刚才讲的跑法！`,
  );
};

handlers[event_hooks.school_atrium] = async function () {
  const chara_talk = get_chara_talk(1);
  const temp = await select_action_in_atrium();
  switch (temp) {
    case 0:
      await chara_talk.say_and_wait(
        Math.random() < 0.5
          ? `想要变强想要变强想要变强！……呼，感觉好多了，我们继续吧！`
          : `训练员你知道吗？大家输掉比赛之后都喜欢来这里散散心，把郁闷的情绪对着枯树洞大声喊出来，心情就会变好哦。`,
      );
      break;
    case 100:
      await chara_talk.say_and_wait(`哇，好多人在看着呢……有点害羞呢>///<`);
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  await get_chara_talk(1).say_and_wait(
    Math.random() < 0.5
      ? `诶嘿嘿，训练员尝尝我做的便当吧！风有点大，要趁凉掉之前吃掉哦！`
      : `我开动了！`,
  );
};

handlers[event_hooks.out_river] = async function (stage_id) {
  const chara_talk = get_chara_talk(1);
  let talk_arr;
  stage_id.arg = !!(await select_action_around_river());
  if (stage_id.arg) {
    await era.printAndWait([
      '与 ',
      chara_talk.get_colored_name(),
      ' 一同去散步了……',
    ]);
    talk_arr = [
      '天气真好呢，空气也很新鲜。',
      '我感到疲惫的时候也会来这里一边跑步一边放松，偶尔还会遇到其他同学……',
    ];
  } else {
    await era.printAndWait([
      '与 ',
      chara_talk.get_colored_name(),
      ' 一同去钓鱼了……',
    ]);
    talk_arr = [
      '好大的鱼！跟青酱学的钓鱼技术派上用场了，训练员快夸我快夸我！',
      '呼啊……等的快睡着了……阿欠……',
    ];
  }
  await chara_talk.say_and_wait([get_random_entry(talk_arr)]);
};

handlers[event_hooks.out_shopping] = async function (stage_id) {
  const chara_talk = get_chara_talk(1);
  const temp = await select_action_in_shopping_street();
  let talk_arr;
  stage_id.arg = temp <= 1;
  switch (temp) {
    case 0:
      await era.printAndWait([
        '与 ',
        chara_talk.get_colored_name(),
        ' 一同去了街机厅……',
      ]);
      talk_arr = [
        '训练员帮帮我！我要把娃娃机里这个超大号的我的玩偶抓回来！',
        '五颜六色，如此炫目……乡下好像没见过这样的地方呢',
      ];
      break;
    case 1:
      await era.printAndWait([
        '与 ',
        chara_talk.get_colored_name(),
        ' 一同去抽奖了……',
      ]);
      talk_arr = [
        '训练员再让我试一次吧！一次就行！这次一定会中的！',
        '等待抽奖结果揭晓的时候总是会紧张得要命呢……',
      ];
      break;
    case 2:
      await era.printAndWait([
        '与 ',
        chara_talk.get_colored_name(),
        ' 一同去了卡拉OK……',
      ]);
      talk_arr = [
        '恋はダービー～～胸がドキドキ～～' +
          '嗯嗯，是跟帝王学的，我唱的怎么样，训练员？',
      ];
      break;
    case 3:
      await era.printAndWait([
        '与 ',
        chara_talk.get_colored_name(),
        ' 一同去看电影了……',
      ]);
      if (!get_random_value(0, 1)) {
        await chara_talk.print_and_wait(
          `${chara_talk.name}「呜呜呜」（抹眼泪）`,
        );
        await chara_talk.say_and_wait(
          '深爱彼此的训练员和马娘真的不能在一起吗……',
        );
      } else {
        talk_arr = ['训，训练员，我，我今晚恐怕要睡不着了……'];
      }
  }
  talk_arr && (await chara_talk.say_and_wait(get_random_entry(talk_arr)));
};

handlers[event_hooks.out_church] = async () => {
  const chara_talk = get_chara_talk(1);
  await chara_talk.say_and_wait(`训练员，来看这边，我们来抽签吧！`);
  switch (get_random_value(0, 4)) {
    case 0:
      await chara_talk.say_and_wait(`是大吉哎，训练员！`);
      await chara_talk.say_and_wait(
        `也许是神明听到了我的祈祷，给我降下了好运呢！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(`是中吉呢，要是是大吉就好了～`);
      await chara_talk.say_and_wait(
        `不过，中吉也是很好的结果呢！接下来一定会有好事情发生的，训练员请看吧！`,
      );
      break;
    case 2:
      await chara_talk.say_and_wait(`唔——结果是小吉。`);
      await chara_talk.say_and_wait(
        `抽签的时候想着一定要抽到大吉，不过现在这样也还不错呢。`,
      );
      break;
    case 3:
      await chara_talk.say_and_wait(`末吉。稍微有点不满足呢。`);
      break;
    case 4:
      await chara_talk.say_and_wait(`呜呜呜……是凶啊……`);
      await chara_talk.say_and_wait(
        `怎么会这样……最近总是会遇上各种各样的怪事，为什么呢……`,
      );
  }
};

handlers[event_hooks.out_station] = async function () {
  const chara_talk = get_chara_talk(1),
    temp = await select_action_in_station(1);
  let talk_arr;
  switch (temp) {
    case 0:
      await era.printAndWait([
        '与 ',
        chara_talk.get_colored_name(),
        ' 一同去吃饭了……',
      ]);
      talk_arr = [
        '训练员，我想要这个胡萝卜汉堡肉盖饭！啊，这边的章鱼烧也想要！还有这里的奶油水果蛋糕！',
        '唔……这么多好吃的，从哪个开始吃好呢？算了，只要都吃掉的话就没问题了！',
      ];
      break;
    case 1:
      await era.printAndWait([
        '与 ',
        chara_talk.get_colored_name(),
        ' 一同去约会了……',
      ]);
      talk_arr = [
        '训练员的手好暖和……',
        '训练员，之后我们也可以一直这样出来逛街吗？',
      ];
      break;
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.load_talk] = async () => {
  const chara_talk = get_chara_talk(1);
  if (Math.random() < 0.1) {
    await chara_talk.say_and_wait('训练员，你在找这个闹钟吗？');
    await chara_talk.say_and_wait(
      '虽然不知道训练员需要用这个做什么，但我相信一定不会是做什么坏事的！我就在这里等着你哦！',
    );
  }
};

/**
 * 特别周的日常事件，角色id=1
 *
 * @author wwm
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[stage_id.hook](stage_id, extra_flag));
  },
};
