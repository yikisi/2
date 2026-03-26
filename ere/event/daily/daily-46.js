/**
 * @file 醒目飞鹰 - 日常
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');

module.exports = class extends CustomizedDaily {
  select() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    let temp;
    const love = era.get('love:46'),
      me = get_chara_talk(0),
      buffer = [];
    if ((temp = new FalconEduMarks()).after_recruit) {
      falcon.say(
        `一、二、目·标·是！TOP UMAIDOL（顶级${falcon.uma_sex_title}偶像）⭐`,
      );
      falcon.say(`向着最大最闪耀的舞台中央一口气冲刺♪`);
      falcon.say(`飞鹰子就是这样的${falcon.uma_sex_title}！`);
      falcon.say(
        `虽然现在还只是随处可见的草根偶像。但·是，只要飞鹰子能站在舞台的中央，飞鹰子就能吸引所有观众的注意力！`,
      );
      falcon.say(`然后飞鹰子的粉丝们也会哗～地一口气增多吧。`);
      falcon.say(
        `随着粉丝数的不断增加，飞鹰子成为顶级${falcon.uma_sex_title}偶像的目标也会一口气实现！。`,
      );
      falcon.say(`粉丝一号${me.adult_sex_title}，接下来也请多多指教了⭐`);
      temp.after_recruit--;
    } else {
      if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
        buffer.push([
          [
            '唔，稍微有些疲惫呢。',
            '打起精神来！飞鹰子必须回应粉丝们的期待才行！',
            '飞鹰子，加油！',
          ],
          `勉强打起精神的${falcon.name}，带着略微疲惫的神态看着${callname}。`,
        ]);
      } else {
        buffer.push(
          [
            [
              `不回应粉丝们的期待可不是合格的${falcon.uma_sex_title}偶像！`,
              `训练员${me.adult_sex_title}，今天的训练计划是什么？`,
            ],
            `早早来到训练室的${falcon.name}等待着${callname}的指令。`,
          ],
          [
            [
              `……呼。体力也回复了，接下来就该去舞台上给期待着飞鹰子表演的粉丝们表演了。`,
              `……哎？因为偶像活动拖到太晚差点赶不上宵禁，这个月训练员${me.adult_sex_title}已经被手纲小姐批评三次了。`,
              `唔——这样啊。那今天的演唱会一定要注意时间才行！`,
            ],
            `之后在河边举办的临时演唱会又不小心拖到了宵禁之前。`,
          ],
        );
        // 好感100暗示剧情
        if (love === 100) {
          buffer.push([
            [
              `能够遇到训练员${me.adult_sex_title}真是太好了！`,
              `虽然飞鹰子现在还是处于偶像的位置……不过既然是偶像的话给予粉丝一号稍微特殊福利也不错吧`,
              `在前往${falcon.uma_sex_title}偶像的道路之上，依然希望粉丝一号${me.adult_sex_title}能和我一起努力呢`,
            ],
            `飞鹰子在${callname}进入训练室的瞬间就紧紧抱住了${callname}`,
          ]);
        } else if (love > 90) {
          buffer.push([
            [
              `诶？训练员${me.adult_sex_title}是怎么知道这里的。`,
              `……好像也没有问的必要呢，如果是训练员${me.adult_sex_title}，一定会来的。`,
              `……明明已经接触到梦想之中的大舞台了，为什么飞鹰子一点也快乐不起来呢？`,
            ],
            `与之前充满活力的${falcon.name}截然不同，飞鹰子陷入了迷茫之中。`,
          ]);
        } else if (love >= 75) {
          buffer.push([
            [
              `最近在街头演出的时候遇到粉丝们逐渐增多了，看上去飞鹰子离顶级偶像的道路也不远了呢。`,
              `……不过，如果是训练员${me.adult_sex_title}，说些丧气话也没关系吧？`,
              `……动作出错的话，粉丝们会对飞鹰子失望吗？`,
            ],
            `迷茫与痛苦。`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `训练员${me.adult_sex_title}！`,
                `飞鹰子一直在训练室等着训练员${me.adult_sex_title}呢！`,
                `今天的训练也要努力！`,
              ],
              `想到什么就立刻会去实践的${falcon.name}今天也等待着${callname}的到来。`,
            ],
            [
              [
                `今天的汗水将化为明天最闪耀的星星。`,
                `要作为能站在舞台中央的顶级偶像，飞鹰子还要更努力一点才行！`,
                `好！现在开始训练！`,
              ],
              `${falcon.name}在训练场等待着${callname}的指令。`,
            ],
          );
        } else {
          buffer.push([
            [
              `训练之后的休息时间做什么好呢？`,
              `去学习偶像方面的技巧还是先去练习一下昨天新学会的舞步呢？`,
              `究竟哪个更好呢。呜～要是飞鹰子能分成两个就好了呢。`,
            ],
            `在训练时三心二意可无法成为顶级${falcon.uma_sex_title}偶像。`,
          ]);
        }
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => falcon.say(e));
      era.print(entry[1]);
    }
  }

  good_morning() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const love = era.get('love:46'),
      me = get_chara_talk(0),
      buffer = [];
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      if (love >= 75) {
        buffer.push([
          [
            `哈啊～早上真是困呢`,
            '昨天举办live不小心唱的太晚了',
            `今天的训练可以稍微推迟一会吗？`,
          ],
          `${callname}让飞鹰子圆圆的脑袋靠着自己的大腿让${falcon.sex}在沙发上稍微睡得舒服一点`,
        ]);
      } else {
        buffer.push([
          [
            `不过是这种程度而已，作为${falcon.uma_sex_title}偶像的飞鹰子没有问题哦⭐`,
          ],
          `虽然嘴巴上这么说，但摇摇欲坠的身体还是出卖了${falcon.sex}，不得已${callname}只好让${falcon.sex}先在沙发上睡一会`,
        ]);
      }
    } else {
      buffer.push(
        [
          [`训练员${me.adult_sex_title},飞鹰子已经准备好了！`],
          `跃跃欲试的飞鹰子似乎状态非常好`,
        ],
        [
          [
            '在沙地上奔跑的厚重感稍微和可爱的飞鹰子有点不符呢……',
            `坚强的飞鹰子也很可爱吗？不愧是粉丝一号的训练员${me.adult_sex_title}呢！即使是日常训练飞鹰子也会闪耀起来的！`,
          ],
          `解决迷茫后露出可爱笑容的飞鹰子重新燃起了训练的热情`,
        ],
      );
      // 好感100暗示剧情
      if (love === 100) {
        buffer.push([
          [
            `亲爱的早上好，今天打算做什么呢？`,
            `偶像也好作为普通的小${falcon.uma_sex_title}也好，能够遇到训练员${me.adult_sex_title}，即使作为轻飘飘的世界也慢慢变得存在实感了`,
          ],
          `一大早${falcon.name}就充满活力的向${callname}问好了`,
        ]);
      } else if (love >= 75) {
        buffer.push([
          [
            `训练员${me.adult_sex_title}早上好⭐`,
            `身为${falcon.uma_sex_title}偶像的飞鹰子今天也要努力闪耀哦！`,
            `所以作为粉丝一号的训练员${me.adult_sex_title}今后也好好看着努力的飞鹰子！`,
          ],
          `飞鹰子围着${callname}吵吵闹闹的样子吸引了周围人们的目光`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [
              `闪耀同学像是行走的计划表一样呢`,
              `如果我也能像${falcon.sex}这样有条不紊的处理事情就不会有这么多烦恼了`,
            ],
            `在训练室中，飞鹰子向${callname}搭话道`,
          ],
          [
            [
              `偶像之路一直都是充满着艰辛和苦痛呢`,
              '飞鹰子有时候也不知道自己能不能继续坚持下去',
            ],
            `在训练室与飞鹰子闲聊的时候${falcon.sex}对${callname}诉说着苦恼`,
          ],
        );
      } else {
        buffer.push([
          [
            `训练员${me.adult_sex_title}早上好！`,
            `昨天晚上睡得还好吗？今天看着闪耀的飞鹰子一定要露出笑容哦`,
          ],
          `在前往特雷森的路上偶然遇到了${falcon.name}，于是就一起并排前行了。`,
        ]);
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => falcon.say(e));
      era.print(entry[1]);
    }
  }

  async talk() {
    const falcon = get_chara_talk(46);
    let talk_arr;
    const me = get_chara_talk(0);
    switch (era.get('cflag:46:干劲')) {
      case -2:
        talk_arr = [
          `呜——头好晕啊，不对！必须振作起来，飞鹰子加油！`,
          `已经不想一个人就这样孤独下去了……没，什么都没有说哦？飞鹰子加油！`,
        ];
        break;
      case -1:
        talk_arr = [
          `飞鹰子脸上有什么东西吗？咦？飞鹰子脸色不太好吗？`,
          `今天的状态不太好啊，好像整个世界都在旋转一样，哎！训练员${me.adult_sex_title}什么时候过来的？`,
        ];
        break;
      case 0:
        talk_arr = [
          [`训练员${me.adult_sex_title}对飞鹰子的发饰很好奇吗？`, ``],
        ];
        break;
      case 1:
        talk_arr = [
          `总觉得今天的状态很好呢♪`,
          `既然决定成为顶级偶像，即使是沙地我也要努力向前迈进！，`,
          `作为偶像而言，在舞台上的表演比起比赛是过犹不及的事情呢，也许去问问黄金城同学……吗？`,
        ];
        break;
      case 2:
        talk_arr = [
          `最强的${falcon.uma_sex_title}偶像——${falcon.name}，参上♪今天一定要把这份心意传达给训练员${me.adult_sex_title}⭐`,
          `训练员${me.adult_sex_title}不去追赶可爱的${falcon.name}吗？不会逃跑的哦❤`,
          `在地平线的尽头会有什么呢～当然是飞鹰子的大舞台啦！不想一起去看看飞鹰子的舞台吗？`,
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
        `艺术之秋，食欲之秋……还有${falcon.uma_sex_title}偶像之秋⭐在红杏之下举办一场演唱会吧！`,
        `训练员${me.adult_sex_title}要一起去看赏叶吗？秋天一直被大家认为是多愁善感的季节呢……不过飞鹰子会让大家都露出笑容的！`,
      );
    if (
      //冬
      era.get('flag:当前月') === 12 ||
      era.get('flag:当前月') === 1 ||
      era.get('flag:当前月') === 2
    )
      talk_arr.push(
        `冬天让粉丝们的大家都瑟瑟发抖了呢…….所以作为${falcon.uma_sex_title}偶像的飞鹰子要将这份温暖从冬天手里交还到粉丝们的手中！现在就去开演唱会吧！`,
        `冬天适合坐在温暖的围炉之前，吃着橘子看着电视上的艺人们进行表演，就这样期待着春天的到来。`,
      );
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `这个是给飞鹰子的吗？非常感谢！`,
        `既然收到了粉丝赠送的礼物的话，嗯——给，这可是飞鹰子亲手制作的握手券！`,
      ];
    // 好感100暗示剧情
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `比起${me.actual_name}赠送的礼物，更能感受到${me.actual_name}对飞鹰子的温柔呢。所以今后的日子里，也希望和训练员${me.adult_sex_title}一起度过。`,
        `这份礼物让飞鹰子感受到了${me.actual_name}全身心的爱与灵魂的重量呢，既然这样的话，飞鹰子也会将作为${falcon.name}与${falcon.uma_sex_title}偶像全身心的爱与灵魂送给粉丝一号${me.adult_sex_title}，最喜欢${callname}了！`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `欸！居然是粉丝一号${me.adult_sex_title}送的礼物！飞鹰子要好好想想该怎么回报才行了！`,
        `因为是最喜欢的粉丝一号送的礼物，所以飞鹰子要好好珍惜才行呢～嗯，咻❤，作为回礼的话这样可以吗？`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_cook() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        '比起按照食谱上做饭的话，飞鹰子也想尝试其他的手法呢。虽然经常失败就是了……',
        `作为偶像亲自下厨给仰慕自己的粉丝一号${me.adult_sex_title}做饭对飞鹰子来说也是很新鲜的体验呢`,
      ];
    // 好感100暗示剧情
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `对于飞鹰子来说，能够给一直在意自己的人烹饪饭菜，是世界上最幸福的事情了。`,
        `能够给能真正理解${falcon.name}的最心爱的训练员${me.adult_sex_title}做饭的话，无论是多少遍都会充满着爱意制作的！那么，训练员${me.adult_sex_title}张开嘴，啊——`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `从妈妈手里得到的厨房笔记，今天的话就让飞鹰子来做饭吧。一定会做出非常美味的蛋包饭给粉丝一号的❤`,
        `给——味道怎么样……真的吗！太好了！虽然飞鹰子一直笨手笨脚的，不过看到训练员${me.adult_sex_title}能露出快乐的表情真是太好了！`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_study() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        '呜呜,飞鹰子不太擅长看书，考试都是靠闪耀同学提供的重点笔记前一天突击低空飘过的',
        `如果赛${falcon.uma_sex_title}偶像史也能作为考试科目的话我一定能满分！不过为什么不考啊`,
      ];
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `能在训练员${me.adult_sex_title}的陪伴下度过这么幸福的时间，即使是梦幻泡沫也显得过于奢侈了`,
        `欸！没……没什么啦⭐呀！不要啊……对不起下次不会在数学书里夹着漫画看了！`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `在训练员${me.adult_sex_title}的辅导下，即使是最困难的数学也能摆脱低分通过的现状了⭐`,
        `以前的话一直是在闪耀同学的辅导之下，不过现在${falcon.sex}说着去问问自己的训练员吧，好奇怪啊`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_rest() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `作为偶像休息也是很重要的！所以训练员${me.adult_sex_title}也要适当放松一会！`,
        `有的时候很憧憬黄金城同学呢，从偶像的层面来说`,
      ];
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `对于一直搬家的飞鹰子来说，故乡也是非常陌生的概念呢。`,
        `小时候因为经常搬家的缘故，朋友也很少，所以有些内向呢...直到遇到了街头演出的偶像开始才慢慢开朗起来`,
        `在飞鹰子充满闪闪发光亮晶晶的世界里，训练员${me.adult_sex_title}可是最闪耀最珍贵的宝石哦，所以训练员${me.adult_sex_title}可以在人生的道路上一直陪我走下去吗？`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `可以让我坐在训练员${me.adult_sex_title}的腿上吗？训练员${me.adult_sex_title}身上有很好闻的气味呢♪`,
        `飞鹰子总是会被闪耀同学说教呢～不过自从训练员${me.adult_sex_title}辅导我的功课后，闪耀同学似乎有点欣慰的感觉？`,
        `飞鹰子晚上一般都会看些偶像相关的视频，然后根据热门偶像打扮自己。`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_prepare() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `发型OK，决胜服OK,马蹄铁的形状也没有问题！一切都准备好了！`,
        `接下来就让粉丝们看看什么是沙地的顶级偶像吧！`,
      ];
    // 好感100暗示剧情
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `一定，一定要在接下来让最喜欢最喜欢的训练员${me.adult_sex_title}好好看着飞鹰子从起跑到获胜的每一秒！`,
        `经历了这么多迷茫与彷徨之时，能够在训练员${me.adult_sex_title}的支持下站在最大的舞台上，不论是作为偶像还是${falcon.uma_sex_title}，${falcon.name}都～这么（双手张开画出了一个大爱心）喜欢训练员${me.adult_sex_title}哦！`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `接下来是飞鹰子最得意的舞蹈，训练员${me.adult_sex_title}好好看着飞鹰子的表演吧！`,
        `准备比赛的时候还是有些紧张呢，不过有训练员${me.adult_sex_title}在身边真是太好了！`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_game() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `飞鹰子不太擅长游戏呢……不过，音游类例外⭐`,
        `说起来最近主播变得很受欢迎了呢……诶？训练员${me.adult_sex_title}想让飞鹰子也去直播吗？`,
        `这样的话，不去追逐潮流可不行呢！`,
      ];
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `欸嘿嘿⭐……训练员${me.adult_sex_title}身上的气味真好闻♪`,
        `恋人之间适合玩的游戏的话,嗯……要不要试试看OO厨房？`,
        `每天花15分钟直播一下和训练员${me.adult_sex_title}一起玩游戏的景象似乎也不错呢，就这么办吧！`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `飞鹰子很擅长随着动感节奏不断触及屏幕的游戏呢……欸，训练员${me.adult_sex_title}正在举起手机在拍视频吗？`,
        `说起来galgame作为文字冒险游戏也有相当悠久的历史了呢，训练员${me.adult_sex_title}也会对它感兴趣吗？`,
        `托街头演出积累起来的经验，直播间的人数也在不断上升中！`,
        `不管是线上还是线下的粉丝，作为顶级偶像的飞鹰子都会平等对待的！`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async school_atrium(hook) {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0);
    hook.arg = (await select_action_in_atrium()) === 0;
    if (hook.arg) {
      switch (get_random_value(0, 1)) {
        case 0:
          await falcon.say_and_wait(`数学好困难！下次又要补习了！`);
          break;
        case 1:
          await falcon.say_and_wait(
            `为什么那个木头训练员还是没有看懂我的暗示啊！！！`,
          );
          break;
        case 2:
          await falcon.say_and_wait(
            `……虽然认识了很多朋友，还有了属于自己的训练员`,
          );
          await falcon.say_and_wait(`不过为什么，偶尔还是感到害怕呢？`);
          break;
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0:
          await falcon.say_and_wait(
            `${falcon.name}流第一条 让粉丝等待的偶像是失格的！接下来出发的目的地是？`,
          );
          break;
        case 1:
          await falcon.say_and_wait(
            `味道怎么样，训练员${me.adult_sex_title}？这可是为了今天的约会，参加了家政课努力练习的${falcon.name}充满爱意的便当哦！感受到满满的爱意了吗？`,
          );
          break;
      }
    }
  }

  async school_rooftop() {
    const falcon = get_chara_talk(46);
    if (Math.random() < 0.5) {
      await falcon.say_and_wait(`在天台上感受到风的吹拂……突然想要唱歌了呢⭐`);
      await falcon.say_and_wait(`接下来把这段发到马推上吧♪`);
    } else {
      await era.printAndWait(
        [
          falcon.get_colored_name(),
          '「如果有一天要在粉丝与',
          sys_get_callname(this.id, 0),
          '之间做出选择的话……」',
        ],
        { color: falcon.color, fontSize: '0.75rem' },
      );
      await falcon.say_and_wait(`……飞鹰子刚刚什么都没说哦⭐`);
    }
  }

  async out_church() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const love = era.get('love:46'),
      me = get_chara_talk(0),
      chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342),
      event_marks = new FalconEduMarks(),
      edu_weeks = era.get('cflag:46:育成回合计时');
    chara340_talk.name = '温柔的女神';
    chara341_talk.name = '睿智的女神';
    chara342_talk.name = '严肃的女神';
    // 相传三女神下凡时啜饮过此处的清泉,于是这条山间的小溪便得到了${falcon.sex}的祝福
    // 古代的人们便围绕着这条小溪建起了神社,前来参拜的人们祈求着事业或者爱情的成功
    if (edu_weeks < 47 + 15) {
      // 如果要宣传的话，为什么飞鹰子不去当志愿者或者做兼职巫女呢？
      // 如果是在这种地方活跃的话，对${falcon.name}印象深刻的人应该会有很多
      await era.printAndWait(`休息日的一天上午。`);
      await era.printAndWait(
        `主动向神社申请作为志愿者的${falcon.name}拉着${callname}来到了神社。`,
      );
      await falcon.say_and_wait(`早安⭐`);
      await falcon.say_and_wait(
        `——即使在领放时依然闪闪发光的可爱${falcon.uma_sex_title}飞鹰子♪，应神社的邀请作为志愿者非常荣幸向大家介绍身后的景点。`,
      );
      await era.printAndWait(
        `身穿巫女服作为一日志愿者的${falcon.name}摇动着手中的御币。`,
      );
      await falcon.say_and_wait(
        `还有！飞鹰子每天早上都会在河岸边的草地上开演唱会，希望大家多多支持♪`,
      );
      await era.printAndWait(
        `说到这里，${falcon.name}大幅度的晃动着手臂，手中的御币在空中划过一条银色之线。`,
      );
      await say_by_passer_by(
        `游客A`,
        `志愿者小姐，我第一次来，可以给我讲一下这个神社的背景吗？`,
      );
      await falcon.say_and_wait(
        `——就是这样！作为偶像不好好回应粉丝的期待可不行！`,
      );
      await falcon.say_and_wait(`飞鹰子会全力以赴回答${callname}！`);
      await era.printAndWait(
        `突然元气十足的声音似乎吓到了第一次前来的游客，但更多的游客却因为好奇而向这边靠近。`,
      );
      await falcon.say_and_wait(`很久很久以前，这条小溪比现在大的多得多。`);
      await falcon.say_and_wait(
        `有一天，为了在世界各地创造${falcon.uma_sex_title}而不停奔走的三女神来到了这里，${falcon.sex}们因为口渴而来到了这条小溪边。`,
      );
      await falcon.say_and_wait(
        `源自这条小溪而诞生的神明隆重的迎接了${falcon.sex}们。`,
      );
      await falcon.say_and_wait(
        `在盛情款待之下，心满意足的三女神向小溪的神明提出了建议。`,
      );
      await say_by_passer_by(
        `三女神`,
        `我们受到了${callname}热情的款待，请允许我们给${callname}祝福。`,
      );
      await falcon.say_and_wait(`神明则拒绝了${falcon.sex}们的好意。`);
      await say_by_passer_by(
        `小溪的神明`,
        `能得到女神的祝福不胜惶恐，但是请把这份祝福赋予围绕这条小溪生存的生灵吧。`,
      );
      await say_by_passer_by(`小溪的神明`, `他们比我重要得多。`);
      await falcon.say_and_wait(
        `被神明无私所感动的三女神们允许了他的请求，将祝福转受给了这条小溪。`,
      );
      await falcon.say_and_wait(
        `在那之后，饮用这条小溪的生灵们受到了三女神的祝福。`,
      );
      await falcon.say_and_wait(
        `为了纪念这位无私奉献的神明，古代的人们便围绕着这条小溪建起了神社,虽然随着环境的变迁，溪流缩小成了一个池塘。`,
      );
      await falcon.say_and_wait(`但为了祈求事业和幸福的人们却依然络绎不绝。`);
      await falcon.say_and_wait(`综上，这就是这个神社的由来。`);
      await say_by_passer_by(`游客A`, `好，再来一个！`);
      await say_by_passer_by(`游客B`, `果然？`);
      await say_by_passer_by(`游客C`, `那还用说！`);
      await era.printAndWait(
        `被故事吸引的游客们不知不觉间把飞鹰子紧紧围住了。`,
      );
      await falcon.say_and_wait(
        `大家……没想到大家这么热情！飞鹰子也感受到了大家的火焰！`,
      );
      await falcon.say_and_wait(`既然这样！${falcon.name}的临时演唱会——`);
      era.printButton(`咳咳。`, 1);
      await era.input();
      await falcon.say_and_wait(`哎？训练员${me.adult_sex_title}？`);
      await era.printAndWait(
        `被突然打断的${falcon.name}惊讶的看着${callname}。`,
      );
      era.printButton(`别忘了来这里的目的！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `——对了！飞鹰子每天早上都会在河岸边举办临时演唱会，希望大家多多支持♪`,
      );
      era.printButton(`飞鹰子！`, 1);
      await era.input();
      await falcon.say_and_wait(`诶——`);
      await me.say_and_wait(
        `打扰了，神社就在眼前这位可爱的${falcon.uma_sex_title}背后，如果再不出发前面的队伍会变得很长。`,
      );
      await say_by_passer_by(
        `游客D`,
        `说的也是！不赶快排队的话要等的时间就更多了！`,
      );
      await falcon.say_and_wait(`请跟随飞鹰子的指引——`);
      await era.printAndWait(
        `聚拢而来的游客在${callname}和${falcon.name}的引导之下排成了一条长队。`,
      );
      await era.printAndWait(`一段时间过后\n\n`);
      await say_by_passer_by(`神主`, `${falcon.name}还有这位训练员辛苦了。`);
      await falcon.say_and_wait(`飞鹰子过得很开心呢⭐`);
      await say_by_passer_by(`神主`, `作为志愿者的报酬，我想想——`);
      await era.printAndWait(`准备片刻后，他开始向三女神神像祈祷。`);
      await say_by_passer_by(
        `神主`,
        `美丽又仁慈的三女神大人，请听作为侍从的在下所言。`,
      );
      await era.printAndWait(
        `在神主向三女神祈求之时，${callname}们站在一旁默默的等待者回应。`,
      );
      if (love > 75) {
        await say_by_passer_by(`神主`, `……我知道了。`);
        await era.printAndWait(`仪式结束，神主看向${callname}们。`);
        await say_by_passer_by(`神主`, `三女神大人对${callname}们有些话想说。`);
        await falcon.say_and_wait(`欸？`);
        await era.printAndWait(
          `在神主向三女神祈求之时，${callname}们站在一旁默默的等待者回应。`,
        );
        await say_by_passer_by(`神主`, `请不要紧张，三女神大人只是有些好奇。`);
        await say_by_passer_by(`神主`, `那么，请跟随我的指引……`);
        await era.printAndWait(
          `在专业人士的指导之下，${callname}们闭上了眼睛。`,
        );
        switch (get_random_value(0, 2)) {
          case 0:
            await chara340_talk.say_and_wait('……真是坚强的孩子啊');
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
        await falcon.say_and_wait(`……飞鹰子已经很幸福了。`);
        await era.printAndWait(`与预想之中不同，飞鹰子似乎露出了忧郁的表情。`);
        await falcon.say_and_wait(
          `训练员${me.adult_sex_title}许下了什么愿望呢⭐`,
        );
        await era.printAndWait(
          `忧郁很快被${falcon.teen_sex_title}的笑容所掩盖。`,
        );
        event_marks.idol++;
      } else {
        await say_by_passer_by(`神主`, `……我知道了。`);
        await era.printAndWait(`仪式结束，神主从怀中取出了一张符卡。`);
        await say_by_passer_by(`神主`, `小小礼物不成敬意。`);
        await era.printAndWait([
          falcon.get_colored_name(),
          '/',
          me.get_colored_name(),
          '「',
          { content: '非常', color: falcon.color },
          '感谢！」',
        ]);
        await say_by_passer_by(
          `神主`,
          `等二位关系更好一点的时候，希望还能来这里一趟，衷心祝愿二位能实现自己的目标。`,
        );
        await era.printAndWait(
          `回到训练室后，${callname}觉得和${falcon.name}之间的关系变好了一点。`,
        );
      }
    }
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      love = era.get('love:46');
    const buffer = [];
    let temp;
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await falcon.say_and_wait(
              `训练员${me.adult_sex_title}就好好看着飞鹰子的表现吧！`,
            );
            await falcon.say_and_wait(
              `就算是新的事物也要全力以赴，飞鹰子，加油♪`,
            );
            await era.printAndWait(
              `看着全perfect达成的${falcon.name}，以及勉强完赛的${callname}，${callname}陷入了沉默。`,
            );
            break;
          case 1:
            await falcon.say_and_wait(
              `如果能打破这个记录的话，说不定会有更多的人认识飞鹰子！`,
            );
            await era.printAndWait(
              `在面对新记录时，${falcon.name}在奇怪的地方燃起了胜负欲。`,
            );
            break;
          case 2:
            await falcon.say_and_wait(`……成功了!训练员${me.adult_sex_title}！`);
            await era.printAndWait(
              `紧张地盯着夹娃娃机地${falcon.name}大气不敢出，直到夹到玩偶为止才在欢呼声中放松下来`,
            );
            break;
        }
        break;
      case 1:
        // 商业街开展活动 ${falcon.name}拿到了一张抽奖券
        // 玩家决定是自己抽还是让${falcon.name}抽
        await say_by_passer_by(
          `杂货店店主`,
          `我看看……海报还有传单，嗯……这次还额外购买了空白明信片。`,
        );
        await say_by_passer_by(`杂货店店主`, `东西都齐了，路上小心。`);
        await falcon.say_and_wait(`好的⭐`);
        await say_by_passer_by(`杂货店店主`, `哦，对了，这是附赠的抽奖券。`);
        await era.printAndWait(`店主笑呵呵的递给了${falcon.name}一张抽奖券。`);
        await say_by_passer_by(
          `杂货店店主`,
          `从进来的入口处那边找那个小老头，然后把这张票交给他就行了。`,
        );
        await falcon.say_and_wait(`非常感谢。说不定今天是飞鹰子的幸运日呢⭐`);
        await say_by_passer_by(
          `杂货店店主`,
          `幸运星小姐下次也要元气满满的哦，路上小心。`,
        );
        await falcon.say_and_wait(`下次的印刷还有小礼品也拜托了⭐`);
        await era.printAndWait(
          `带着满满一袋的小礼物，${falcon.name}啪塔啪塔的来到了${callname}的身边。`,
        );
        await falcon.say_and_wait(
          `训练员${me.adult_sex_title}接下来还有什么想买的东西吗？`,
        );
        await era.printAndWait(
          `${callname}摇了摇头，然后看向了${falcon.name}紧紧握着的那张抽奖券。`,
        );
        await falcon.say_and_wait(
          `……那么，还是让训练员${me.adult_sex_title}来抽吧！`,
        );
        await era.printAndWait(`飞鹰子将${callname}推到了抽奖机边上`);
        era.printButton(`既然这样的话`, 1);
        await era.input();
        switch (get_random_value(0, 4)) {
          case 0:
            await say_by_passer_by(`店主`, `四等奖 纸巾！`);
            await era.printAndWait(
              `看着从抽奖机里掉落的白色小球，店主摇动手中的铃铛。`,
            );
            await falcon.say_and_wait(
              `……纸巾吗。没关系！看着飞鹰子的笑容然后振作起来吧！`,
            );
            await era.printAndWait(
              `虽然飞鹰子竭力调整现场的气氛，但抽到纸巾还是让${callname}们感到沮丧。`,
            );
            break;
          case 1:
            await say_by_passer_by(`店主`, `三等奖 一根胡萝卜！`);
            await era.printAndWait(
              `看着从抽奖机里掉落的黄色小球，店主瞥了一眼，然后摇动手中的铃铛。`,
            );
            await falcon.say_and_wait(
              `嗯……这根胡萝卜看上去很适合作为麦克风呢。`,
            );
            await era.printAndWait(
              `${falcon.name}从购物袋中取出了一张贴纸贴在了胡萝卜上。`,
            );
            await falcon.say_and_wait(
              `明天的演出请多指教了～胡萝卜${me.adult_sex_title}！`,
            );
            era.printButton(`不要玩弄食物啊！`, 1);
            await era.input();
            await falcon.say_and_wait(`唔——明明飞鹰子觉得很可爱的说。`);
            await era.printAndWait(
              `在胡萝卜变成今晚的配菜前，都好好用细绳系在了${falcon.name}的腰间。`,
            );
            break;
          case 2:
            await say_by_passer_by(`店主`, `二等奖 一堆胡萝卜！`);
            await era.printAndWait(
              `看着从抽奖机里掉落的胡萝卜色小球，店主瞥了一眼，然后摇动手中的铃铛。`,
            );
            await era.printAndWait(
              `${callname}从店主手中接过满满一箱胡萝卜，刚苦恼如何带回去时。`,
            );
            await era.printAndWait(`一双小手轻轻将困难提了起来。`);
            await falcon.say_and_wait(
              `哇……比想象之中还要多的胡萝卜，恐怕够吃半个月了。`,
            );
            await falcon.say_and_wait(
              `就作为下次演出时给前来观看的粉丝们的纪念品吧！`,
            );
            era.printButton(`将胡萝卜竖起来作为假想观众进行偶像练习吧！`, 1);
            await era.input();
            await falcon.say_and_wait(
              `诶？假想练习吗？不愧是训练员${me.adult_sex_title}，那就这么办吧。`,
            );
            await era.printAndWait(`当晚\n`);
            await falcon.say_and_wait(
              `即使是领放也在不停闪耀，${falcon.uma_sex_title}偶像——${falcon.name}参上♪`,
            );
            await say_by_passer_by(
              `${callname}与竖着排成一排的胡萝卜们`,
              `噢噢噢噢！`,
            );
            await falcon.say_and_wait(
              `嗯嗯！飞鹰子感受到大家的热情了呢！那么Let's go!`,
            );
            await say_by_passer_by(
              `${callname}与竖着排成一排的胡萝卜们`,
              `(疯狂摇动着应援棒)`,
            );
            await falcon.say_and_wait(
              `……没想到大家居然这么热情，飞鹰子感动的都要落泪了……好！为了粉丝们的期待，就让大家看看飞鹰子的浑身解数吧！`,
            );
            await era.printAndWait(
              `不久之后，半夜时分的训练室会有胡萝卜化身${falcon.uma_sex_title}开演唱会的怪谈在校园传开了。`,
            );
            break;
          case 3:
            await say_by_passer_by(`店主`, `一等奖 胡萝卜汉堡！`);
            await era.printAndWait(
              `看着从抽奖机里掉落的红色小球，店主轻轻将它拾起，然后摇动着手中的铃铛。`,
            );
            await falcon.say_and_wait(
              `诶？是胡萝卜汉堡吗……看上去很好吃的样子！`,
            );
            await falcon.say_and_wait(`运气真好呢！`);
            await falcon.say_and_wait(`先在马推上发一条消息吧！`);
            await era.printAndWait(
              `#商业街一等奖奖品竟然是胡萝卜汉堡？！#与训练员之间发生的故事 很快占据了热搜。`,
            );
            await era.printAndWait(
              `不久之后，因为把训练员一起拍了进去而造成了巨大的舆论被手纲小姐叫了过去一通说教。`,
            );
            break;
          case 4:
            await say_by_passer_by(`店主`, `特等奖 温泉旅行券！恭喜！`);
            await era.printAndWait(
              `看着从抽奖机里掉落的粉色小球，店主将它拾起看了又看，然后大声的宣布结果。`,
            );
            await era.printAndWait(`叮铃铃`);
            await falcon.say_and_wait(`诶……`);
            await falcon.say_and_wait(`果然今天是飞鹰子的幸运日呢！`);
            era.printButton(`诶？真的中了？`, 1);
            await era.input();
            await say_by_passer_by(
              `店主`,
              `这张温泉旅行券没有使用时间，所以请好好珍惜。`,
            );
            await era.printAndWait(
              `店主满脸笑容的将这张旅行券递给了${callname}们。`,
            );
            await falcon.say_and_wait(`这样的话，什么时候用才好呢？`);
            era.printButton(`等到第三年结束之后再用吧！`, 1);
            await era.input();
            await falcon.say_and_wait(
              `既然训练员${me.adult_sex_title}都这么说了，那就交给训练员${me.adult_sex_title}了哦？`,
            );
            await falcon.say_and_wait(`一定要好好爱惜才行！`);
            await era.printAndWait(
              `回到训练室，在${falcon.name}的注视之下，${callname}将这张温泉券放在了抽屉深处。`,
            );
            break;
        }
        break;
      case 2:
        await falcon.say_and_wait(
          `训练员${me.adult_sex_title}想听什么歌呢？这里的歌飞鹰子都会唱哦⭐`,
        );
        await era.printAndWait(
          `看着进入了状态的飞鹰子，${callname}也默默举起了荧光棒。`,
        );
        break;
      case 3:
        buffer.push(
          [
            [`《偶像的烦恼》训练员${me.adult_sex_title}一起来看这部吧。`],
            `作为偶像的男艺人喜欢上了一个普通的${falcon.uma_sex_title}，但百般暗示后${falcon.uma_sex_title}还是无动于衷。在男演员准备放弃时，${falcon.uma_sex_title}却向他告白了。`,
          ],
          [
            `《热血！偶像的奋斗之路！》，听起来好像很有趣的样子！训练员${me.adult_sex_title}要一起看看吗？`,
            `作为草根偶像孤独一人的男演员的因为遇到了温柔${falcon.uma_sex_title}的细心照料后重新燃起了勇气，在故事的最后向那位一直默默支持着自己的${falcon.uma_sex_title}告白了`,
          ],
          [
            [`《白玉之诗》……偶尔换换口味的话也不错呢⭐`],
            `在幸福中生活的${falcon.uma_sex_title}对落魄的孤独诗人一见钟情后猛烈追求，在飘忽不定的命运折磨下，两人度过了一段颠沛流离的生活，剧情高潮时，因失去了珍贵的手稿绝望之下点燃了居住之所的诗人被${falcon.uma_sex_title}救了出来` +
              `生与死之间终于产生勇气爱着生活的诗人与${falcon.uma_sex_title}紧紧抱在了一起。`,
          ],
        );
        if (love === 100) {
          buffer.push([
            [
              `《樱花易散，今宵待君》训练员${me.adult_sex_title}要不要看看这部电影呢？`,
            ],
            `${me.actual_name}与${falcon.name}气氛热烈的观讨论着电影，两人的手紧紧扣在了一起`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `《桃华月谭》似乎很有名的样子，训练员${me.adult_sex_title}要不要一起来看呢？`,
              ],
              `出乎意料的古风与男女主角之间的爱情故事让两人感动的用手帕擦着眼泪。`,
            ],
            [
              [
                `飞鹰子，其实什么电影都OK哦，只要是和训练员${me.adult_sex_title}一起的话`,
              ],
              `${falcon.name}兴致勃勃的看着${callname}`,
            ],
          );
        }
        temp = get_random_entry(buffer);
        for (const e of temp[0]) {
          await falcon.say_and_wait(e);
        }
        await era.printAndWait(temp[1]);
        break;
    }
  }

  async out_station(hook) {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const me = get_chara_talk(0);
    hook.arg = await select_action_in_station(4);
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        switch (get_random_value(0, 1)) {
          // 吃饭
          case 0:
            await say_by_passer_by(`服务员`, `久等了，两份水果巴菲。`);
            await falcon.say_and_wait(`比想象之中还要美味呢。`);
            await era.printAndWait(``);
            break;
          case 1:
            await falcon.say_and_wait(`飞鹰子只要这点就满足了！`);
            await era.printAndWait(
              `摆在${falcon.name}面前的只是少量的胡萝卜与蔬菜。`,
            );
            await me.say_and_wait(`……这样吃的会不会太少了？`);
            await falcon.say_and_wait(`最近花的不小心超出预算了……`);
            await era.printAndWait(`${callname}们看向了菜单上的披萨套餐。`);
            await me.say_and_wait(`要来一份吗？我请客。`);
            await falcon.say_and_wait(`非常感谢⭐`);
            await era.printAndWait(
              `第二天称体重时发现超重2公斤时慌作一团的${falcon.name}意外的可爱。`,
            );
            break;
        }
        break;
      case 1:
        // 约会
        switch (get_random_value(0, 1)) {
          case 0:
            await era.printAndWait(`偶像和粉丝约会会被愤怒的粉丝炎上吧？`);
            await falcon.say_and_wait(
              `是训练员与担当${falcon.uma_sex_title}之间非常健全的关系！`,
            );
            await era.printAndWait(`心情真是微妙呢。`);
            break;
          case 1:
            await era.printAndWait(
              `${falcon.name}作为现役偶像，像这样和其他人约会的话。`,
            );
            await falcon.say_and_wait(`看起来并没有被认出来呢。`);
            await era.printAndWait(
              `毕竟比起在草地奔跑的赛${falcon.uma_sex_title}，沙地偶像离观众的视线更远吧。`,
            );
            break;
        }
        break;
      case 2: //逛商场
        switch (get_random_value(0, 1)) {
          case 0:
            await era.printAndWait(
              `在商场里随意闲逛时路过了贩卖赛${falcon.uma_sex_title}周边的店铺。`,
            );
            await falcon.say_and_wait(`飞鹰子的周边比上周多了一点呢♪`);
            await era.printAndWait(
              `在沙地主题的货架上，整整一排都是${falcon.name}的玩偶。`,
            );
            break;
          case 1:
            await falcon.say_and_wait(`三、二、一，好♪`);
            await falcon.say_and_wait(
              `和训练员一起的逛商场♪唔——这张照片还是不要发出去吧。`,
            );
            await era.printAndWait(`避免了一场（自认为）炎上，真是可喜可贺。`);
            break;
        }
        break;
    }
  }

  async out_river(hook) {
    const falcon = get_chara_talk(46);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      switch (get_random_value(0, 2)) {
        case 0: //散步
          await falcon.say_and_wait(`为了感谢能在河边草地举办演唱会的这里。`);
          await falcon.say_and_wait(`飞鹰子在休息时偶尔会在高架桥下做义工。`);
          break;
        case 1:
          await falcon.say_and_wait(`说起来逃马姐妹的大家现在都在做些什么呢？`);
          await falcon.say_and_wait(`飞鹰子很在意！`);
          break;
        case 2:
          await falcon.say_and_wait(
            `丸善前辈虽然实力很强大，也很温柔的指导着我们，不过总有些微妙的不协调感？`,
          );
          await falcon.say_and_wait(
            `如果飞鹰子也处在丸善前辈的位置上……唔，飞鹰子的小脑袋恐怕受不了这么大的压力。`,
          );
          break;
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0: //钓鱼
          await falcon.say_and_wait(`……！好厉害——居然能钓到这么大的鱼。`);
          await era.printAndWait(
            `看着鱼桶中啪嗒啪嗒挣扎的鲫鱼，坐在一旁的飞鹰子目睹了全过程。`,
          );
          break;
        case 1:
          await falcon.say_and_wait(
            `就像在序盘争夺先头位置一样，冷静的等待闸门开启的那一刻。`,
          );
          await falcon.say_and_wait(`然后——就像这样！`);
          await era.printAndWait(
            `被鱼钩钩住的贪食鱼儿被一股巨力拽出了水面，稳稳的落入了鱼桶之中。`,
          );
          await falcon.say_and_wait(`这就是飞鹰子流的钓鱼法！`);
          break;
      }
    }
  }
};
