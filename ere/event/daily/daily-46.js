const era = require('#/era-electron');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EduEventMarks = require('#/data/event/edu-event-marks');
const event_hooks = require('#/data/event/event-hooks');
const chara_talk = get_chara_talk(46);

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  let temp;
  const love = era.get('love:46'),
    buffer = [];
  if ((temp = new EduEventMarks(46)).get('after_recruit')) {
    chara_talk.say(`梦想着能成为顶级马娘偶像的醒目飞鹰`);
    chara_talk.say('如果可以的话希望能叫我飞鹰子⭐');
    chara_talk.say(
      `虽然飞鹰子不擅长做计划之类的事情，不过现在有训练员先生帮我制定目标真是太好了`,
    );
    chara_talk.say(`那么，再一次，《永远的马娘偶像》醒目飞鹰参上♪`);
    temp.sub('after_recruit');
  } else {
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      buffer.push([
        [
          '唔，飞鹰子有些疲惫呢',
          '不对，如果这是成为马娘偶像必须经历的事情的话',
          '飞鹰子，加油！',
        ],
        `对成为闪闪发光偶像的醒目飞鹰再一次迸发出了强烈的热情`,
      ]);
    } else {
      buffer.push(
        [
          [`训练员先生，今天的计划是什么？`, `飞鹰子一定会努力去做的`],
          `今天的飞鹰子一如既往的充满了热情`,
        ],
        [
          [
            `训练结束之后，可以和飞鹰子一起去街头live吗？`,
            `哎~训练员先生已经被手纲小姐批评三次了，所以不可以吗？`,
            `飞鹰子会努力训练的，所以训练员先生一定要去参加才行。`,
          ],
          `之后在学院张贴海报的时候又被绿色恶魔当场抓住严厉批评了`,
        ],
      );
      if (love === 100) {
        buffer.push([
          [
            `最喜欢的（玩家名），飞鹰子现在正在练习写作呢`,
            `虽然对于粉丝们来说充满活力的声音更能打动人们，不过只有训练员先生才被允许进入这片圣域`,
            `温柔又细腻的训练员先生，比起在外的熊熊烈火，只有从心底燃烧起来的永不熄灭的火焰才能温柔地将你包裹`,
          ],
          `与之前充满活力的醒目飞鹰截然不同，飞鹰子显得有些多愁善感`,
        ]);
      } else if (love > 90) {
        buffer.push([
          [
            `能够遇到训练员先生真是太好了！`,
            `虽然飞鹰子现在还是处于偶像的位置...不过既然是偶像的话给予粉丝一号稍微特殊福利也不错吧`,
            `在前往马娘偶像的道路之上，依然希望粉丝一号先生能和我一起努力呢`,
          ],
          `飞鹰子在你进入训练室的瞬间就紧紧抱住了你`,
        ]);
      } else if (love >= 75) {
        buffer.push([
          [
            `今天的live结束之后，训练员先生可以和我一起约会吗？`,
            `作为草根偶像的飞鹰子也想给为了飞鹰子一直努力着的粉丝一号一点福利呢`,
          ],
          `早早来到训练场的醒目飞鹰向你提出了小小的请求`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [
              `训练员先生！`,
              `飞鹰子一直在训练室等着训练员先生呢！`,
              `今天的训练也请多关照了！`,
            ],
            `醒目飞鹰特意提前坐在了训练室里等着你的到来`,
          ],
          [
            [
              `今天的汗水将化为明天最闪耀的星星`,
              `所以虽然训练很辛苦，不过飞鹰子会努力坚持下来的`,
            ],
            `飞鹰子今天也努力地想让自己闪耀起来`,
          ],
        );
      } else {
        buffer.push([
          [
            `等到训练结束的话做什么呢？`,
            `先去贴海报吧？还是先去练习一下昨天新学会的舞步吧？`,
            `粉丝一号先生也会和飞鹰子一起出发吧？`,
          ],
          `比起训练，飞鹰子似乎更关心作为马娘偶像相关的事情。`,
        ]);
      }
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => chara_talk.say(e));
    era.print(entry[1]);
  }
};

handlers[event_hooks.good_morning] = function () {
  const love = era.get('love:46'),
    buffer = [];
  if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
    if (love >= 75) {
      buffer.push([
        [
          `哈啊~早上真是困呢`,
          '昨天举办live不小心唱的太晚了',
          `今天的训练可以稍微推迟一会吗？`,
        ],
        `你让飞鹰子圆圆的脑袋靠着自己的大腿让她在沙发上稍微睡得舒服一点`,
      ]);
    } else {
      buffer.push([
        [`不过是这种程度而已，作为马娘偶像的飞鹰子没有问题哦⭐`],
        `虽然嘴巴上这么说，但摇摇欲坠的身体还是出卖了她，不得已你只好让她先在沙发上睡一会`,
      ]);
    }
  } else {
    buffer.push(
      [[`训练员先生,飞鹰子已经准备好了！`], `跃跃欲试的飞鹰子似乎状态非常好`],
      [
        [
          '在泥地上奔跑的厚重感稍微和可爱的飞鹰子有点不符呢....',
          '坚强的飞鹰子也很可爱吗？不愧是粉丝一号的训练员先生呢！即使是日常训练飞鹰子也会闪耀起来的！',
        ],
        `解决迷茫后露出可爱笑容的飞鹰子重新燃起了训练的热情`,
      ],
    );
    if (love === 100) {
      buffer.push([
        [
          `亲爱的早上好，今天打算做什么呢？`,
          `偶像也好作为普通的小马娘也好，能够遇到训练员先生，即使作为轻飘飘的世界也慢慢变得存在实感了`,
        ],
        `一大早醒目飞鹰就充满活力的向你问好了`,
      ]);
    } else if (love >= 75) {
      buffer.push([
        [
          `训练员先生早上好⭐`,
          `身为马娘偶像的飞鹰子今天也要努力闪耀哦！`,
          `所以作为粉丝一号的训练员先生今后也好好看着努力的飞鹰子！`,
        ],
        `飞鹰子围着你吵吵闹闹的样子吸引了周围人们的目光`,
      ]);
    } else if (love >= 50) {
      buffer.push(
        [
          [
            `闪耀同学像是行走的计划表一样呢`,
            `如果我也能像她这样有条不紊的处理事情就不会有这么多烦恼了`,
          ],
          `在训练室中，飞鹰子向你搭话道`,
        ],
        [
          [
            `偶像之路一直都是充满着艰辛和苦痛呢`,
            '飞鹰子有时候也不知道自己能不能继续坚持下去',
          ],
          `在训练室与飞鹰子闲聊的时候她对你诉说着苦恼`,
        ],
      );
    } else {
      buffer.push([
        [
          `训练员先生早上好！`,
          `昨天晚上睡得还好吗？今天看着闪耀的飞鹰子一定要露出笑容哦`,
        ],
        `在前往特雷森的路上偶然遇到了醒目飞鹰，于是就一起并排前行了。`,
      ]);
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => chara_talk.say(e));
    era.print(entry[1]);
  }
};

handlers[event_hooks.talk] = async function () {
  let talk_arr;
  switch (era.get('cflag:46:干劲')) {
    case -2:
      talk_arr = [
        `呜——头好晕啊，不对！必须振作起来，飞鹰子加油！`,
        `已经不想一个人就这样孤独下去了......没，什么都没有说哦？飞鹰子加油！`,
      ];
      break;
    case -1:
      talk_arr = [
        `飞鹰子脸上有什么东西吗？咦？飞鹰子脸色不太好吗？`,
        `今天的状态不太好啊，好像整个世界都在旋转一样，哎！训练员先生什么时候过来的？`,
      ];
      break;
    case 0:
      talk_arr = [
        [
          `训练员先生，今天的训练计划是什么呢？`,
          `比起泥地人们还是更关心草地的比赛呢...不过，不管怎样飞鹰子都会努力改变这一切的！`,
        ],
      ];
      break;
    case 1:
      talk_arr = [
        `总觉得今天的状态很好呢♪`,
        `既然决定成为顶级偶像，即使是泥地我也要努力向前迈进！，`,
        `作为偶像而言，在舞台上的表演比起比赛是过犹不及的事情呢，也许去问问黄金城同学....吗？`,
      ];
      break;
    case 2:
      talk_arr = [
        `最强的马娘偶像——醒目飞鹰，参上♪今天一定要把这份心意传达给训练员先生⭐`,
        `训练员先生不去追赶可爱的醒目飞鹰吗？不会逃跑的哦❤`,
        `在地平线的尽头会有什么呢~当然是飞鹰子的大舞台啦！不想一起去看看飞鹰子的舞台吗？`,
      ];
      break;
  }
  if (
    //春
    era.get('flag:当前月') === 3 ||
    era.get('flag:当前月') === 4 ||
    era.get('flag:当前月') === 5
  )
    talk_arr.push(
      `万物萌发之时正适合现在的飞鹰子呢！春天的飞鹰子也会茁壮成长吧！`,
      '看着努力破土而出的小草们，飞鹰子不知道为什么非常感动呢！',
    );
  if (
    //夏
    era.get('flag:当前月') === 6 ||
    era.get('flag:当前月') === 7 ||
    era.get('flag:当前月') === 8
  )
    talk_arr.push(
      `说起夏天的话就会让人想到海滩，和煦的海风吹走炎热的气息，浪涛带来的潮湿气息让人心情澎拜呢。真想赶快飞到沙滩呢！`,
      `夏天的话就让飞鹰子带给大家凉爽与快乐的演出吧！等到夏季合宿的时候在海滩边举行的演唱会一定会让大家更加关注我呢！`,
    );
  if (
    //秋
    era.get('flag:当前月') === 9 ||
    era.get('flag:当前月') === 10 ||
    era.get('flag:当前月') === 11
  )
    talk_arr.push(
      `艺术之秋，食欲之秋....还有马娘偶像之秋⭐在红杏之下举办一场演唱会吧！`,
      `训练员先生要一起去看赏叶吗？秋天一直被大家认为是多愁善感的季节呢...不过飞鹰子会让大家都露出笑容的！`,
    );
  if (
    //冬
    era.get('flag:当前月') === 12 ||
    era.get('flag:当前月') === 1 ||
    era.get('flag:当前月') === 2
  )
    talk_arr.push(
      `冬天让粉丝们的大家都瑟瑟发抖了呢.....所以作为马娘偶像的飞鹰子要将这份温暖从冬天手里交还到粉丝们的手中！现在就去开演唱会吧！`,
      `冬天适合坐在温暖的围炉之前，吃着橘子看着电视上的艺人们进行表演，就这样期待着春天的到来。`,
    );
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_gift] = async function () {
  const talk_arr = [
    `这个是给飞鹰子的吗？非常感谢！`,
    `既然收到了粉丝赠送的礼物的话，嗯——给，这可是飞鹰子亲手制作的握手券！`,
  ];
  if (era.get('love:46') === 100) {
    talk_arr.push(
      `比起（玩家名）赠送的礼物，更能感受到（玩家名）对飞鹰子的温柔呢。所以今后的日子里，也希望和训练员先生一起度过。`,
      `这份礼物让飞鹰子感受到了（玩家名）全身心的爱与灵魂的重量呢，既然这样的话，飞鹰子也会将作为醒目飞鹰与马娘偶像全身心的爱与灵魂送给粉丝一号先生，最喜欢你了！`,
    );
  } else if (era.get('love:46') >= 75) {
    talk_arr.push(
      `欸！居然是粉丝一号先生送的礼物！飞鹰子要好好想想该怎么回报才行了！`,
      `因为是最喜欢的粉丝一号送的礼物，所以飞鹰子要好好珍惜才行呢~嗯，咻❤，作为回礼的话这样可以吗？`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_cook] = async function () {
  const talk_arr = [
    '比起按照食谱上做饭的话，飞鹰子也想尝试其他的手法呢。虽然经常失败就是了......',
    `作为偶像亲自下厨给仰慕自己的粉丝一号先生做饭对飞鹰子来说也是很新鲜的体验呢`,
  ];
  if (era.get('love:46') === 100) {
    talk_arr.push(
      `对于飞鹰子来说，能够给一直在意自己的人烹饪饭菜，是世界上最幸福的事情了。`,
      `能够给能真正理解醒目飞鹰的最心爱的训练员先生做饭的话，无论是多少遍都会充满着爱意制作的！那么，训练员先生张开嘴，啊——`,
    );
  } else if (era.get('love:46') >= 75) {
    talk_arr.push(
      `从妈妈手里得到的厨房笔记，今天的话就让飞鹰子来做饭吧。一定会做出非常美味的蛋包饭给粉丝一号的❤`,
      `给——味道怎么样......真的吗！太好了！虽然飞鹰子一直笨手笨脚的，不过看到训练员先生能露出快乐的表情真是太好了！`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_study] = async function () {
  const talk_arr = [
    '呜呜,飞鹰子不太擅长看书，考试都是靠闪耀同学提供的重点笔记前一天突击低空飘过的',
    '如果赛马娘偶像史也能作为考试科目的话我一定能满分！不过为什么不考啊',
  ];
  if (era.get('love:46') === 100) {
    talk_arr.push(
      `能在训练员先生的陪伴下度过这么幸福的时间，即使是梦幻泡沫也显得过于奢侈了`,
      `欸！没....没什么啦⭐呀！不要啊......对不起下次不会在数学书里夹着漫画看了！`,
    );
  } else if (era.get('love:46') >= 75) {
    talk_arr.push(
      `在训练员先生的辅导下，即使是最困难的数学也能摆脱低分通过的现状了⭐`,
      `以前的话一直是在闪耀同学的辅导之下，不过现在她说着去问问自己的训练员吧，好奇怪啊`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_rest] = async function () {
  const talk_arr = [
    `作为偶像休息也是很重要的！所以训练员先生也要适当放松一会！`,
    `有的时候很憧憬黄金城同学呢，从偶像的层面来说`,
  ];
  if (era.get('love:46') === 100) {
    talk_arr.push(
      `对于一直搬家的飞鹰子来说，故乡也是非常陌生的概念呢。`,
      `小时候因为经常搬家的缘故，朋友也很少，所以有些内向呢...直到遇到了街头演出的偶像开始才慢慢开朗起来`,
      `在飞鹰子充满闪闪发光亮晶晶的世界里，训练员先生可是最闪耀最珍贵的宝石哦，所以训练员先生可以在人生的道路上一直陪我走下去吗？`,
    );
  } else if (era.get('love:46') >= 75) {
    talk_arr.push(
      `可以让我坐在训练员先生的腿上吗？训练员先生身上有很好闻的气味呢♪`,
      `飞鹰子总是会被闪耀同学说教呢~不过自从训练员先生辅导我的功课后，闪耀同学似乎有点欣慰的感觉？`,
      `飞鹰子晚上一般都会看些偶像相关的视频，然后根据热门偶像打扮自己。`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_prepare] = async function () {
  const talk_arr = [
    `发型OK，决胜服OK,马蹄铁的形状也没有问题！一切都准备好了！`,
    `接下来就让粉丝们看看什么是泥地的顶级偶像吧！`,
  ];
  if (era.get('love:46') === 100) {
    talk_arr.push(
      `一定，一定要在接下来让最喜欢最喜欢的训练员先生好好看着飞鹰子从起跑到获胜的每一秒！`,
      `经历了这么多迷茫与彷徨之时，能够在训练员先生的支持下站在最大的舞台上，不论是作为偶像还是马娘，醒目飞鹰都~这么（双手张开画出了一个大爱心）喜欢训练员先生哦！`,
    );
  } else if (era.get('love:46') >= 75) {
    talk_arr.push(
      `接下来要让最喜欢的训练员先生一直盯着醒目飞鹰看！`,
      `准备比赛的时候还是有些紧张呢，不过有训练员先生在身边真是太好了！`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_game] = async function () {
  const talk_arr = [
    `飞鹰子对游戏这部分不太熟悉呢...训练员先生有推荐的吗？`,
    `说起来最近直播打游戏的偶像也开始变得多起来了呢，飞鹰子？不不不，飞鹰子对游戏领域的话不熟悉呢。`,
  ];
  if (era.get('love:46') === 100) {
    talk_arr.push(
      `训练员先生靠的真近呢...身上的气味也很好闻⭐`,
      `恋人之间适合玩的游戏的话,嗯......要不要试试看OO厨房？`,
      `每天花15分钟直播一下和训练员先生一起玩游戏的景象似乎也不错呢，训练员先生怎么看的呢？`,
    );
  } else if (era.get('love:46') >= 75) {
    talk_arr.push(
      `飞鹰子很擅长随着动感节奏不断触及屏幕的游戏呢...欸，训练员先生你举起手机在拍视频吗？`,
      `说起来galgame也是一个人游玩的游戏呢，训练员先生也会对它感兴趣吗？`,
      `飞鹰子最近也在尝试直播游戏呢，虽然一直失误不过直播间的人数却变得多起来了！？`,
    );
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.school_atrium] = async function () {
  const temp = await select_action_in_atrium();
  if (!temp) {
    switch (get_random_value(0, 1)) {
      case 0:
        await chara_talk.say_and_wait(
          `为什么每天还要写作业啊，还有期末考试的时候好麻烦啊`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `为什么那个木头训练员还是没有看懂我的暗示啊！！！`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 1)) {
      case 0:
        await chara_talk.say_and_wait(
          `不能让粉丝一直等着偶像，这是醒目飞鹰流偶像的格言哦。那么，训练员先生接下来去那里玩呢？`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `味道怎么样，训练员先生？这可是为了今天的约会，参加了家政课努力练习的醒目飞鹰充满爱意的便当哦！感受到满满的爱意了吗？`,
        );
        break;
    }
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  const chara_talk = get_chara_talk(46);
  if (Math.random() < 0.5) {
    await chara_talk.say_and_wait(
      `在天台上感受到风的吹拂...不知不觉想要唱歌呢⭐`,
    );
  } else {
    await chara_talk.say_and_wait(
      `从天台上往下面看去，仿佛整个特雷森变成了我的舞台！终有一天训练员先生也会感受到的！`,
    );
  }
};

handlers[event_hooks.out_church] = async function () {
  const love = era.get('love:46'),
    me = get_chara_talk(0),
    chara340_talk = get_chara_talk(340),
    chara341_talk = get_chara_talk(341),
    chara342_talk = get_chara_talk(342);
  chara340_talk.name = '温柔的女神';
  chara341_talk.name = '睿智的女神';
  chara342_talk.name = '严肃的女神';
  await chara_talk.say_and_wait(`训练员先生，这边！`);
  await era.printAndWait(`今天是休息日，作为偶像的巡回演出也告一段落。`);
  await era.printAndWait(
    `无所事事的时候，醒目飞鹰突然提出到附近听说很灵的神社去祈福。`,
  );
  await era.printAndWait(
    `相传三女神下凡时啜饮过此处的清泉,于是这条山间的小溪便得到了她的祝福`,
  );
  await era.printAndWait(
    `古代的人们便围绕着这条小溪建起了神社,前来参拜的人们祈求着事业或者爱情的成功`,
  );
  await chara_talk.say_and_wait(
    `呜~听说小林同学说这个神社很灵的样子所以才过来的，没想到人居然这么多。`,
  );
  await era.printAndWait(
    `因为是突然提议的缘故，等（玩家名）和醒目飞鹰来到这里时，队伍已经排到了山脚`,
  );
  era.printButton(`虽然有点晚了，我们也赶快去排队吧`, 1);
  await era.input();
  await era.printAndWait(
    `出发之时长长的影子等到你们的时候已经蜷缩到你们脚底下了。`,
  );
  await era.printAndWait(
    `穿过鸟居,（玩家名）和醒目飞鹰走进了这座三女神的神社之中`,
  );
  await era.printAndWait(
    `学着前面的游客往赛钱箱里投入了几枚硬币,拍了拍手双手合十,闭上眼开始祈祷`,
  );
  await chara_talk.say_and_wait(`……⭐`);
  if (get_random_value(0, 1)) {
    await era.printAndWait(`等了一会似乎也没有听到铃铛的响声。`);
    await chara_talk.say_and_wait(`...这份烦恼就让飞鹰子的笑容来治愈吧⭐`);
    await era.printAndWait(`醒目飞鹰似乎许下了什么很重要的愿望。`);
    await era.printAndWait(`尽管如此优先想着的依然是安慰你。`);
    await era.printAndWait(`不由得紧紧握住了她的手。`);
    await chara_talk.say_and_wait(`......⭐，`);
    await era.printAndWait(
      `回到训练室后你在飞鹰子的鼓舞下研究起了接下来该去参加的比赛`,
    );
  } else {
    switch (get_random_value(0, 2)) {
      case 0:
        await chara340_talk.say_and_wait('......真是坚强的孩子啊');
        break;
      case 1:
        await chara341_talk.say_and_wait(
          '可爱的孩子，希望不要把事情全部揽到自己身上',
        );
        break;
      case 2:
        await chara342_talk.say_and_wait(
          '一切问题的尽头，就在伊甸之中，一刻不停的奔跑吧',
        );
    }
    await era.printAndWait(`叮铃铃铃`);
    await era.printAndWait(`似乎听到了三女神的低语。`);
    era.printButton(`三女神吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`说的是什么意思呢？`, true);
    await chara_talk.say_and_wait(`......飞鹰子一定会坚持下去的`);
    await era.printAndWait(`与预想之中不同，飞鹰子似乎露出了忧郁的表情。`);
    await chara_talk.say_and_wait(`......⭐训练员先生许下了什么愿望呢？`);
    await era.printAndWait(`忧郁很快被少女的笑容所掩盖。`);
    if (love >= 90) {
      await era.printAndWait(`直到离开神社后两个人都默默地走着`);
      await me.say_and_wait(`忧郁的日子已经过去了`);
      await era.printAndWait(`不知为何（玩家名）忽然安慰着醒目飞鹰。`);
      await chara_talk.say_and_wait(`不想走在你的前面，因为我不擅长引导`);
      await era.printAndWait(`两人之间的手紧紧地握在了一起`);
      await me.say_and_wait(`不想走在你的后面，因为害怕失去你的身影`);
      await era.printAndWait(`孤独的心找到了另一颗孤独的心`);
      await chara_talk.say_and_wait(`我只想成为你的朋友走在你的旁边。`);
      await era.printAndWait(`开口之前，圆圆的脑袋已经靠着你的肩膀了。`);
      await me.say_and_wait(`请允许我作为您的骑士守护你，我最爱的公主殿下。`); //性转为王子
      await chara_talk.say_and_wait(`最喜欢你了，（玩家名）。`);
    } else {
      await chara_talk.say_and_wait(
        `没想到神社真的有效呢，飞鹰子都变得亮晶晶了呢⭐`,
      );
      await era.printAndWait(`飞鹰子不知何时突然充满了活力。`);
      await era.printAndWait(
        `醒目飞鹰「...明明飞鹰子这么喜欢你，训练员先生可真是木头呢。」。`,
        { color: chara_talk.color, fontSize: '12px' },
      );
      await chara_talk.say_and_wait(`什么都没有哦⭐`);
      await era.printAndWait(`带着微妙的感觉两人离开了神社。`);
    }
  }
};

handlers[event_hooks.out_shopping] = async function (hook) {
  const love = era.get('love:46');
  const buffer = [];
  let temp;
  hook.arg = await select_action_in_shopping_street();
  switch (hook.arg) {
    case 0:
      switch (get_random_value(0, 2)) {
        case 0:
          await chara_talk.say_and_wait(`飞鹰子也没有玩过街机呢`);
          await chara_talk.say_and_wait(
            `不过如果是和训练员先生一起的话，飞鹰子会很高兴的哦♪`,
          );
          await era.printAndWait(
            `虽然都是第一次尝试跳舞机，不过作为偶像的身体协调性比你这个上次运动都不知道是什么时候的半吊子强了一条街`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(`呜——头好晕啊`);
          await era.printAndWait(
            `走进街机厅面对光污染和激烈的节奏，两人都有点晕乎乎的`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(`...!...!!...成功了!!!训练员先生！`);
          await era.printAndWait(
            `紧张地盯着夹娃娃机地醒目飞鹰大气不敢出，直到夹到玩偶为止才在欢呼声中放松下来`,
          );
          break;
      }
      break;
    case 1:
      await chara_talk.say_and_wait(
        `训练员先生！买东西出来的时候那边的店主给了我一张抽奖券！`,
      );
      era.printButton(`应该是附近的商店推出的促销活动吧`, 1);
      await era.input();
      await era.printAndWait(`你看向了商店街入口附近的抽奖机`);
      await chara_talk.say_and_wait(`那么，还是训练员先生来抽吧！`);
      await era.printAndWait(`飞鹰子将你推到了抽奖机边上`);
      era.printButton(`既然这样的话`, 1);
      await era.input();
      switch (get_random_value(0, 4)) {
        case 0:
          await chara_talk.say_and_wait(
            `......无论何时，作为偶像都要保持微笑哦！训练员先生看着飞鹰子的笑容然后振作起来吧！`,
          );
          await era.printAndWait(`飞鹰子安慰着抽到了纸巾的你。`);
          break;
        case 1:
          await chara_talk.say_and_wait(`嗯~胡萝卜看上去很适合作为麦克风呢`);
          await era.printAndWait(`醒目飞鹰将头上的丝带解下来装饰到了胡萝卜上`);
          await chara_talk.say_and_wait(`锵锵~醒目飞鹰胡萝卜诞生了！`);
          await era.printAndWait(
            `散发的飞鹰子与系着可爱蝴蝶结的胡萝卜组成了治愈的画面。`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(
            `哇！这么多胡萝卜的话，不如让胡萝卜先生们作为我的粉丝吧！`,
          );
          await chara_talk.say_and_wait(`胡萝卜偶像吗？呵呵⭐`);
          await era.printAndWait(
            `之后让胡萝卜们坐在了插上了荧光棒的椅子上为飞鹰子应援。`,
          );
          break;
        case 3:
          await chara_talk.say_and_wait(`是胡萝卜汉堡！看上去很好吃的样子！`);
          await chara_talk.say_and_wait(`运气真好呢！`);
          await era.printAndWait(
            `之后（玩家名）因为与飞鹰子一起吃汉堡的自拍照造成的风波，两人被迫乖乖听手纲小姐（绿色恶魔）说教`,
          );
          break;
        case 4:
          await era.printAndWait(`叮铃铃`);
          await chara_talk.say_and_wait(`诶!`);
          await era.printAndWait(`店主「恭喜」`);
          await era.printAndWait(
            `看着作为大奖的黄色小球出来的一瞬间，两人都宕机了。`,
          );
          await chara_talk.say_and_wait(
            `......训，训练员先生！我们好像中大奖了！`,
          );
          era.printButton(`是，是啊，中大奖了`, 1);
          await era.input();
          await era.printAndWait(
            `不顾形象的两人紧紧抱在了一起，突然意识到两人之间的距离过近后又满脸通红的分开了`,
          );
          break;
      }
      break;
    case 2:
      await chara_talk.say_and_wait(
        `训练员先生想听什么歌呢？这里的歌飞鹰子都会唱哦⭐`,
      );
      await era.printAndWait(`看着进入了状态的飞鹰子，你也默默举起了荧光棒。`);
      break;
    case 3:
      buffer.push(
        [
          [`《偶像的烦恼》训练员先生一起来看这部吧。`],
          `作为偶像的男艺人喜欢上了一个普通的马娘，但百般暗示后马娘还是无动于衷。在男演员准备放弃时，马娘却向他告白了。`,
        ],
        [
          `《热血！偶像的奋斗之路！》，听起来好像很有趣的样子！训练员先生要一起看看吗？`,
          `作为草根偶像孤独一人的男演员的因为遇到了温柔马娘的细心照料后重新燃起了勇气，在故事的最后向那位一直默默支持着自己的马娘告白了`,
        ],
        [
          [`《白玉之诗》......偶尔换换口味的话也不错呢⭐`],
          `在幸福中生活的马娘对落魄的孤独诗人一见钟情后猛烈追求，在飘忽不定的命运折磨下，两人度过了一段颠沛流离的生活，剧情高潮时，因失去了珍贵的手稿绝望之下点燃了居住之所的诗人被马娘救了出来` +
            `生与死之间终于产生勇气爱着生活的诗人与马娘紧紧抱在了一起。`,
        ],
      );
      if (love === 100) {
        buffer.push([
          [`《樱花易散，今宵待君》训练员先生要不要看看这部电影呢？`],
          `（玩家名）与醒目飞鹰气氛热烈的观讨论着电影，两人的手紧紧扣在了一起`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [`《桃华月谭》似乎很有名的样子，训练员先生要不要一起来看呢？`],
            `出乎意料的古风与男女主角之间的爱情故事让两人感动的用手帕擦着眼泪。`,
          ],
          [
            [`飞鹰子，其实什么电影都OK哦，只要是和训练员先生一起的话`],
            `醒目飞鹰看着荧幕上的推荐电影自言自语`,
          ],
        );
      }
      temp = get_random_entry(buffer);
      for (const e of temp[0]) {
        await chara_talk.say_and_wait(e);
      }
      await era.printAndWait(temp[1]);
      break;
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const me = get_chara_talk(0);
  hook.arg = await select_action_in_station(4);
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `附近有一家甜品店味道很好哦，训练员先生一起来尝尝看吧！`,
          );
          await era.printAndWait(
            `紧紧缠着你的手臂的醒目飞鹰兴奋地将你拉了过去`,
          );
          await chara_talk.say_and_wait(`给，训练员先生！`);
          await era.printAndWait(`两人坐在长椅上一起吃着冰淇淋。`);
          await era.printAndWait(`醒目飞鹰「稍微有点近呢」`, {
            color: chara_talk.color,
            fontSize: '12px',
          });
          await chara_talk.say_and_wait(`什么都没有哦⭐`);
          break;
        case 1:
          await chara_talk.say_and_wait(`作为偶像的话不好好保持身材可不行呢。`);
          await me.say_and_wait(
            `不过一直吃减肥餐的话在赛场上饿晕过去就麻烦了。`,
          );
          await era.printAndWait(`你们看向了广告牌上非常美味的披萨套餐`);
          await chara_talk.say_and_wait(
            `......听丸善学姐说女孩子都有两个胃，所以稍微多吃一点也没关系吧⭐`,
          );
          await chara_talk.say_and_wait(`之后就通过大量的训练消耗掉卡路里吧~`);
          await era.printAndWait(
            `回到特雷森称体重时一口气重了二公斤后差点晕过去的醒目飞鹰就是后话了`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `作为偶像来说和粉丝约会是会被炎上的吧？`,
          );
          await era.printAndWait(
            `不过作为草根偶像的飞鹰子显然没有这方面的问题`,
          );
          await chara_talk.say_and_wait(`心情真是微妙呢。`);
          break;
        case 1:
          await chara_talk.say_and_wait(
            `嗯...我们先从这条街进入，然后在右转....不对向前直走左转有一家饰品店，呃，出来之后直走右转前面有一家人气很好的甜品店.....`,
          );
          await era.printAndWait(
            `飞鹰子说话断断续续的眼神似乎一直瞄着你身后的样子`,
          );
          break;
      }
      break;
    case 2: //逛商场
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `说起来的话最近新开了一家炭烧牛肉的新店，等会一起去看看吧♪`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `像这样和训练员先生一起出来逛街，飞鹰子真的很高兴呦♪`,
          );
          await era.printAndWait(
            `你和飞鹰子像恋人一样牵着手在商场里享受着购物的乐趣。`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.out_river] = async function (hook) {
  const ret = await select_action_around_river();
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 1)) {
      case 0: //钓鱼
        await chara_talk.say_and_wait(
          `训练员先生好厉害，居然钓到了这么大的鱼！`,
        );
        await era.printAndWait(
          `望着桶子里不断挣扎的大鱼，飞鹰子露出了倾佩的神色。`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(`唔，为什么这么久还没有上钩啊。`);
        await era.printAndWait(
          `尾巴不断拍打着草地的飞鹰子拿着鱼竿焦躁的甩来甩去。`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 2)) {
      case 0: //散步
        await chara_talk.say_and_wait(
          `说起来的话，在河边的草地上临时举行演唱会也不错呢。`,
        );
        await chara_talk.say_and_wait(
          `不过现在的话，还是希望能和训练员先生多呆一会呢。`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `说起来逃马姐妹组合的其他成员现在在做些什么呢？`,
        );
        break;
      case 2:
        await chara_talk.say_and_wait(
          `丸善学姐虽然实力很强大，也很温柔的指导着我们，不过似乎有些微妙的感觉？`,
        );
        await chara_talk.say_and_wait(
          `......如果我也能有丸善学姐那样天赋的话，也有可能需要肩负更大的责任了吧？`,
        );
        break;
    }
  }
};

/**
 * 醒目飞鹰的日常事件,id=46
 *
 * @author 黑奴一号
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object) {
      throw new Error('unsupported hook!');
    }
    if (!handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[stage_id.hook](stage_id, extra_flag));
  },
};
