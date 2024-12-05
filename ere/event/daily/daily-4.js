/**
 * @file 丸善斯基 - 日常
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const zensky = get_chara_talk(4);

module.exports = class extends CustomizedDaily {
  select() {
    let temp;
    const love = era.get('love:4'),
      buffer = [];
    if ((temp = new EduEventMarks(4)).get('after_recruit')) {
      zensky.say(
        `嗨~${
          era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'
        }我是${zensky.name}哦。`,
      );
      zensky.say(
        `希望能在赛场上让憧憬着我的后辈们看到${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我帅气的背影呢。`,
      );
      zensky.say(
        `话说回来,${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }看起来真口耐呢,就像夏天带给人的感觉一样。`,
      );
      temp.sub('after_recruit');
    } else if (new EduEventMarks(4).get('sister_annoyance') === 1) {
      zensky.say('在更加盛大的舞台之上比赛，心情都变得亮闪闪的呢♪');
      zensky.say(
        `有什么事一定要和${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我商量哦？`,
      );
      zensky.say('……如果我们之间没有秘密的话就好了呢。');
      temp.sub('sister_annoyance');
    } else if (new EduEventMarks(4).get('girls_blue') === 1) {
      zensky.say('膝盖比以前还要疼的厉害。');
      zensky.say('接下来还能撑多久呢？');
      zensky.say(
        `至少，不能让${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}看出来。`,
      );
      temp.sub('girls_blue');
    } else if (new EduEventMarks(4).get('true_end')) {
      zensky.say('为了不让遗憾再次发生。');
      zensky.say('至少，为苦苦探索的后辈们提供一个可以参考的方法。');
      zensky.say('接下来也要努力才行！');
      zensky.say('就这样咔咔地back stepo吧！');
      temp.sub('true_end');
    } else if (new EduEventMarks(4).get('good_end')) {
      zensky.say(
        `苦闷也好，孤独也好，与${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}在一起，似乎都不算什么了呢。`,
      );
      zensky.say(
        `能在赛${zensky.get_uma_sex_title()}之道上遇到${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，说不定是我一生的幸运呢。`,
      );
      zensky.say('一直以来非常感谢你的帮助。');
      zensky.say('接下来也要一起努力才行哦？');
      zensky.say(
        `唔，会不会让${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}压力山大了呢？`,
      );
      temp.sub('good_end');
    } else if (new EduEventMarks(4).get('wind') === 1) {
      zensky.say(
        `接下来也请多多指教了。${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}♪`,
      );
    } else if (new EduEventMarks(4).get('wind') === 5) {
      zensky.say(
        `这是给${era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'}我的吗？`,
      );
      zensky.say(
        `那就谢谢${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}了♪`,
      );
      zensky.say('呵呵~看起来真漂亮呢。');
    } else if (new EduEventMarks(4).get('wind') === 10) {
      zensky.say(
        '不管在草场之上奔跑多少回，似乎都找不到当初的感觉了,真是有点生无可恋呢。',
      );
      zensky.say('……');
      zensky.say('风停了。');
    } else if (new EduEventMarks(4).get('wind') === 15) {
      zensky.say(
        `在特雷森的那个夜晚，在草场上奔跑的${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}们。`,
      );
      zensky.say(
        `支持着我的后辈们，还有身边的${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}。`,
      );
      zensky.say('我由衷的感到了幸福。');
    } else if (new EduEventMarks(4).get('wind') === 20) {
      zensky.say('天空、草地，与徘徊的我们。');
      zensky.say('令人怀念的潮湿夏天与干燥的秋天。');
      zensky.say(
        `接下来我们也要一路走下去哦？${era.get('cflag:0:性别') - 1 ? '训·练·员·酱' : '训·练·员·君'}♪`,
      );
    } else if (new EduEventMarks(4).get('Self_contempt')) {
      zensky.say(`为什么看起来有些消沉呢？`);
      zensky.say('快点打起精神来吧！');
      zensky.say(
        `我可是一直在等着${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}呢！`,
      );
    } else if (new EduEventMarks(4).get('happiness_day')) {
      zensky.say(`湛蓝的天空，清新的草地，总会让人有一种怀念的感觉呢。`);
      zensky.say(
        `哎呀，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}什么时候过来的。`,
      );
      zensky.say('那么一起享受美好的每一天吧。');
    } else {
      if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
        buffer.push([
          [
            '这种程度还不够,你能做得更好',
            `囧。如果是${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的要求,`,
          ],
          `${zensky.name}带着复杂的情绪看着你`,
        ]);
      } else {
        buffer.push(
          [
            [
              '享受着奔跑时迎面所吹的风。',
              `如果${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}有什么烦恼的话可以跟${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
              }我说哦`,
            ],
            `${zensky.name}带着充裕的笑容看着你`,
          ],
          [
            [
              `今天的训练计划是什么？不管是什么${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
              }我都能从容应对`,
            ],
            `不知何时周围的${zensky.get_uma_sex_title()}们都围了过来,这就是${
              zensky.name
            }的魅力.`,
          ],
        );
        if (love >= 75) {
          //
          buffer.push([
            [
              `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},训练之后一起坐小塔兜风吧？`,
              `在夜晚的寒风吹拂下不管是${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}还是人都会情绪高涨起来的`,
            ],
            `${zensky.name}将身体整个压在了你的手臂上,尾巴不知何时也缠上了你的大腿`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                '唔嗯~说起来四季之风各有不同,若是让我来选择的话我还是喜欢春风。',
                `不知${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}喜欢哪一个季节的风呢?`,
              ],
              `${zensky.name}含笑看着你`,
            ],
            [
              [
                '"春天有一种魔力。一种让人想‘成为更好的自己’的魔力。"',
                `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}又是怎么想的呢?`,
              ],
              `在拉伸运动开始前,与${zensky.name}闲聊时${
                zensky.sex_code - 1 ? '她' : '他'
              }向你提出了这个问题`,
            ],
          );
        } else {
          buffer.push([
            [
              `将风的魅力带给憧憬着我的后辈们。希望之风的化身,${zensky.name}哦~`,
              `呵呵,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}觉得这个台词怎么样？`,
            ],
            `露出笑容的${zensky.name},心情不错的摇晃着尾巴。`,
          ]);
        }
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => zensky.say(e));
      era.print(entry[1]);
    }
  }

  good_morning() {
    const love = era.get('love:4'),
      buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      if (love >= 75) {
        buffer.push([
          ['唔嗯~让我再睡一会嘛', '昨天不小心看漫画看太晚了'],
          `你无可奈何地摇醒${zensky.name}然后对着全身镜帮${
            zensky.sex_code - 1 ? '她' : '他'
          }梳理头发`,
        ]);
      } else {
        buffer.push([
          ['我晕.....这副样子可不能让后辈们看到呢'],
          `${zensky.name}看上去似乎很困的样子`,
        ]);
      }
    } else {
      buffer.push(
        [
          [
            '今天的训练计划是什么呢？',
            `${era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'}我已经准备好了哦`,
          ],
          `${zensky.name}一副跃跃欲试的样子`,
        ],
        [
          [
            '在草地上奔驰的感觉真舒服呢',
            `哎呀，原来是${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}。`,
          ],
          `在你按时到达赛道的时候,${zensky.name}已经跑了好几圈了`,
        ],
      );
      if (love >= 75) {
        buffer.push([
          [
            `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}早上好⭐`,
            '…….为什么跑到隔壁房间叫你起床?',
            `不觉得有个会叫你起床的温柔大${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }是很幸福的事情吗`,
          ],
          `${zensky.name}把你的被子掀开然后催促你赶快洗漱`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [
              `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}身上似乎有未激发的潜能呢`,
              '虽然感觉还很微弱不过应该很快就会出现了吧',
            ],
            `${zensky.name}若有所思的打量着你`,
          ],
          [
            [
              `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}如果有困惑的话可以跟${
                era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
              }我说出来哦`,
              '一直憋在心里的话,即使是万能钥匙也会插不进生锈的锁孔的',
            ],
            `${zensky.name}似乎很担心的看着你`,
          ],
        );
      } else {
        buffer.push([
          [
            '全力奔跑的时候会有一种若有若无的感觉,这就是所谓的领域吗?',
            `……啊,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}早上好`,
          ],
          `在草地上奔跑的${zensky.name}似乎触及到领域的边界了`,
        ]);
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => zensky.say(e));
      era.print(entry[1]);
    }
  }

  async talk() {
    let talk_arr;
    switch (era.get('cflag:4:干劲')) {
      case -2:
        talk_arr = [
          '手上为什么贴了创口贴?囧。今天早上想要自己做一顿早饭的时候听着音乐不小心切到了手指……汗，真的没事的。',
          `为什么今天这么晚才来,而且头发也乱糟糟的……?今天起床的时候不小心碰倒了纸箱子把里面的东西全部打翻了收拾了好久才放回原位急匆匆赶过来了,不过没关系的啦,今天的训练任务是什么?`,
        ];
        break;
      case -1:
        talk_arr = [
          `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}可以帮我看一下这个手机怎么打开吗?诶?原来这么简单吗?`,
          `昨天看漫画不小心看入迷了,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}抱歉呢.`,
        ];
        break;
      case 0:
        talk_arr = [
          [
            `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}今天的安排是什么呢。`,
            `如果${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}有什么问题的话可以来找我倾诉哦,不如说${
              era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'
            }我非常欢迎呢♪`,
          ],
        ];
        break;
      case 1:
        talk_arr = [
          `今天的状态不错呢,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}觉得怎么样呢?`,
          `希望那些努力的孩子们看到我的背影之后也能追逐着我的身影享受到这份被风吹拂的快乐`,
          `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}训练结束之后一起去喝果汁吧?`,
        ];
        break;
      case 2:
        talk_arr = [
          `哈喽！我感受到了${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}身上的热情了呢♪`,
          `状态绝佳！${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}就在这里看着我打破上一次的记录吧♪`,
          `就让我来点燃${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}内心潜藏的热情吧,Let's go!`,
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
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}感受到了春风的气息了吗,破开了大地的束缚自由自在在天空之中嬉戏的春风。`,
        `可爱的后辈们如同春天开放的花朵一样弥散着香气呢,我希望${
          zensky.sex_code - 1 ? '她' : '他'
        }们的香气能够弥漫到这个世界的每一处角落。`,
      );
    if (
      //夏
      era.get('flag:当前月') === 6 ||
      era.get('flag:当前月') === 7 ||
      era.get('flag:当前月') === 8
    )
      talk_arr.push(
        '四个季节之中我最容易被吸引的就是夏天呢,在夜晚温度适宜的时候与小塔一起自由自在的奔驰,我也仿佛与夏风合为一体了呢。',
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}晚上有空吗?等训练结束之后我们一起去海边吧?潮湿的海风会吹散那份令人烦躁的干燥,在月亮的照耀之下,整个人都被洗涤了呢`,
      );
    if (
      //秋
      era.get('flag:当前月') === 9 ||
      era.get('flag:当前月') === 10 ||
      era.get('flag:当前月') === 11
    )
      talk_arr.push(
        '唔嗯~秋天到了啊,秋天总有一种让人想要就这么睡过去才行的气息呢,训练结束后可以让我在训练室稍微休息一下吗' +
          `食欲之秋,文学之秋,秋天总有一种多愁善感的气氛呢,夏季的潮湿与热情也在秋天到来之时逐渐褪去了`,
      );
    if (
      //冬
      era.get('flag:当前月') === 12 ||
      era.get('flag:当前月') === 1 ||
      era.get('flag:当前月') === 2
    )
      talk_arr.push(
        '在这万物安息的冬日,唯有风之精灵在这片白茫茫的大地上舞蹈.后辈们似乎也期待着能在草地上尽情的驰骋呢',
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},你身上似乎很暖和呢,待会训练完之后一起去商店街喝一点热饮吧?`,
      );
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const talk_arr = [
      `这个玩偶是送给我的吗?${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}谢谢你.`,
      `是我最喜欢的椰汁饮料呢,谢谢你${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `这下不得不考虑回礼了呢，受不鸟了。晚上回去的时候就让你尝尝${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }我的手艺吧`,
        `虾米？！用香槟杯装饰的水果巧克力看上去怎么样？${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}总有一些奇妙的想法呢……找时间试试看吧？`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_cook() {
    const talk_arr = [
      '好怀念的味道,那我就不客气咯?',
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}就乖乖坐在这里看着我做饭吧……欸?希望能和我一起做饭吗?`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}尝尝这个蛋包饭怎么样吧?怎么样,很好吃吧.看到${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}露出了幸福的笑容我好像也吃饱了呢`,
        `希望能为${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }我做一份饭……我晕，这就是幸福的味道吗,我的心现在正dokidoki的跳个不停呢♪`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_study() {
    const talk_arr = [
      '如果要参加各种竞赛的话,掌握各种跑法也是很重要的呢……干脆试下甩尾跑法吧？',
      '比起受人引导的位置,像这样一口气冲线的感觉让人欲罢不能呢♪',
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        '通过观看历届的重赏视频分析逃马跑法的各个要领,然后提高自己吧',
        `在${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的指导之下,${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }我也有了很大的进步呢,跪了！`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_rest() {
    const talk_arr = [
      `既然是难得的放松时间, ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}要不要一起看看最新的潮流期刊呢`,
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}辛苦了呢,诶,不好意思下意识的就摸了摸你的头`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}可以让我再抱着你一会吗?你身上总有一种温暖的气息呢`,
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}每天都这么辛苦,有什么能让我帮助你的吗?还是说上次那将头埋进我的胸口吗?`,
        '好孩子好孩子,每天都这么疲惫,就在我的怀抱里稍微休息一下吧。',
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_prepare() {
    const talk_arr = [
      '不让后辈们看到我精彩的表现的话可不行呢',
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}就在副驾驶位好好感受风的舞蹈吧`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `就让后辈们看看从${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}身上传递到的火焰吧`,
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}可以让我再抱紧一会吗?诶,不可以?真小气。`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_game() {
    const talk_arr = [
      `${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我对游戏这方面很不擅长呢,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}有什么推荐的游戏吗?`,
      `比起在训练室就这样坐着,不如出去训练……希望能看到我穿泳装的样子吗?${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}真H呢。到时候好好期待着吧♪`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}听说过秋之回忆吗?虽然我也没有玩过，不过趁这个机会一起来试试吧！`,
        '真希望能再次感受到那份夏季的吹拂呢,那个小镇少年与少女初次见面的时候',
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async out_church() {
    const love = era.get('love:4'),
      chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342);
    chara340_talk.name = '温柔的女神';
    chara341_talk.name = '睿智的女神';
    chara342_talk.name = '严肃的女神';
    await zensky.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}目的地到了呦。`,
    );
    await era.printAndWait(`在某个休息日你们决定到神社祈福`);
    await era.printAndWait(
      `传说三女神下凡时啜饮过此处的清泉,于是这条山间的小溪便得到了${
        zensky.sex_code - 1 ? '她' : '他'
      }的祝福`,
    );
    await era.printAndWait(
      `古代的人们便围绕着这条小溪建起了神社,前来参拜的人们祈求着事业或者爱情的成功`,
    );
    await zensky.say_and_wait(
      `听说当神社内挂着的铃铛会响起的时候,虔诚祈祷的人们会得到三女神的祝福，${
        zensky.sex_code - 1 ? '美眉' : '帅锅'
      }我也想试试看呢。`,
    );
    await era.printAndWait(
      `虽然你们早早的就来到了这里,看了看前方稀疏的人头还有宿营用的帐篷。`,
    );
    await era.printAndWait(`大概很多人昨晚开始就在这里等待了吧。`);
    era.printButton(`那么我们也赶快去排队吧`, 1);
    await era.input();
    await era.printAndWait(
      `也许是前来祈福的人群不愿意因为插队造成的混乱而冒犯到三女神,队伍井然有序的排列着。`,
    );
    await era.printAndWait(`穿过鸟居,走进了这座三女神的神社之中`);
    await era.printAndWait(
      `你学着前面的游客往赛钱箱里投入了几枚硬币,拍了拍手双手合十,闭上眼开始祈祷`,
    );
    await zensky.say_and_wait(`……`);
    await era.printAndWait(
      `你悄悄看了一眼丸善斯基,只见${zensky.sex_code - 1 ? '她' : '他'}的嘴唇微张，似乎在小声念叨着什么。`,
    );
    if (get_random_value(0, 1)) {
      await era.printAndWait(`你们等了一会似乎也没有听到铃铛的响声。`);
      await zensky.say_and_wait(`真遗憾呢。`);
      await era.printAndWait(
        `${zensky.name}似乎许下了什么很重要的愿望，耷拉着耳朵，一副很可惜的样子。`,
      );
      era.printButton(`握住${zensky.sex_code - 1 ? '她' : '他'}的手`, 1);
      await era.input();
      await era.printAndWait(
        `你握住了${zensky.sex_code - 1 ? '她' : '他'}的手`,
      );
      await zensky.say_and_wait(
        `……${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}谢谢你，`,
      );
      await zensky.say_and_wait(`那么和小塔一起兜风来发泄这份情绪吧`);
      await era.printAndWait(`之后你在意识模糊之中似乎看到了三女神的笑容`);
    } else {
      switch (get_random_value(0, 2)) {
        case 0:
          await chara340_talk.say_and_wait('加油吧孩子们');
          break;
        case 1:
          await chara341_talk.say_and_wait('我可爱的孩子们,希望你们能幸福');
          break;
        case 2:
          await chara342_talk.say_and_wait('去奔跑吧,希望在驰骋的尽头');
      }
      await era.printAndWait(`叮铃铃`);
      await era.printAndWait(`你似乎听到了三女神的低语。`);
      await era.printAndWait(`你偷偷睁开眼睛往${zensky.name}的方向瞟了一眼。`);
      await zensky.say_and_wait(`……三女神大人谢谢你，`);
      await era.printAndWait(
        `似乎祈愿之事得到了肯定，${zensky.name}露出了如释重负的笑容。`,
      );
      await zensky.say_and_wait(
        `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}`,
      );
      await era.printAndWait(`${zensky.name}身后在离开鸟居后停下了脚步`);
      if (love >= 90) {
        await era.printAndWait(
          `干燥的嘴唇被另一片嘴唇所浸润,你不禁抱住了${
            zensky.sex_code - 1 ? '她' : '他'
          }纤细的身体`,
        );
        await era.printAndWait(`此刻两颗跳动的心脏终于心意相同`);
        await era.printAndWait(
          `时间,名誉还有除佳人以外一切的一切你都已经不在乎了`,
        );
        await era.printAndWait(`此刻的你只想沉浸在这份温柔乡之中`);
        await era.printAndWait(
          `直到呼吸困难为止,随风舞蹈的二人才依依不舍地分开`,
        );
        await zensky.say_and_wait(
          `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},也许你就是,不对，你就是我一直追寻的那份火焰.`,
        );
        await era.printAndWait(
          `${zensky.name}紧紧地握住了你的手,你默默地忍受着这份痛苦`,
        );
        await era.printAndWait(`然后二人再次唇齿交融。`);
        await era.printAndWait(`火焰最终还是战胜了那份干燥`);
      } else {
        await era.printAndWait(
          `你感受到了一阵湿润的气息,${zensky.name}转过身去努力平静着心中的激动`,
        );
        await era.printAndWait(`带着微妙的情绪你们回到了学院`);
      }
    }
  }

  async out_shopping(hook) {
    const love = era.get('love:4');
    const buffer = [];
    let temp;
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await zensky.say_and_wait(
              `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}也一起来跳舞吧?`,
            );
            await era.printAndWait(
              `虽然丸善斯基只是初次尝试跳舞机,但柔韧的身体以及与生俱来的节奏感让${zensky.sex_code - 1 ? '她' : '他'}迅速熟悉了这个游戏的规律。`,
            );
            break;
          case 1:
            await zensky.say_and_wait(`接下来试试看那边的娱乐项目吧`);
            await era.printAndWait(
              `${zensky.name}似乎像遇到新事物的孩子一样,两眼放光`,
            );
            break;
          case 2:
            await zensky.say_and_wait(`这么努力的训练员真口耐呢`, true);
            await era.printAndWait(
              `${zensky.name}带着笑容盯着你操作抓娃娃机时紧张的样子`,
            );
            break;
        }
        break;
      case 1:
        await zensky.say_and_wait(
          `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}也来试试看手气吧?`,
        );
        await era.printAndWait(`${zensky.name}指着商店街附近的抽奖机`);
        switch (get_random_value(0, 4)) {
          case 0:
            await zensky.say_and_wait(`没关系的,下次还有机会`);
            await era.printAndWait(`${zensky.name}安慰着抽到纸巾时的你`);
            break;
          case 1:
            await zensky.say_and_wait(`晚上就吃胡萝卜吧`);
            await era.printAndWait(`${zensky.name}看着抽到的胡萝卜说着`);
            break;
          case 2:
            await zensky.say_and_wait(
              `嗯,有这么多胡萝卜的话,不如在训练室开派对吧`,
            );
            await era.printAndWait(
              `之后${zensky.name}邀请了小特${
                zensky.sex_code - 1 ? '她' : '他'
              }们一起来训练室品尝了胡萝卜盛宴`,
            );
            break;
          case 3:
            await zensky.say_and_wait(`跪了！是胡萝卜汉堡！`);
            await era.printAndWait(
              `晚上你和${zensky.name}一起享受了这份幸运的馈赠`,
            );
            break;
          case 4:
            await era.printAndWait(`叮铃铃`);
            await zensky.say_and_wait(`!`, true);
            await era.printAndWait(`抽奖箱旁的服务人员「恭喜恭喜」`);
            await era.printAndWait(`${zensky.name}看着抽出了温泉旅行券的你`);
            await zensky.say_and_wait(
              `运气真好呢,等有时间的时候一起去泡温泉吧`,
            );
            await era.printAndWait(`${zensky.name}看着抽出了温泉旅行券的你`);
            await era.printAndWait(`之后你们心情不错的回到了训练室之中`);
            break;
        }
        break;
      case 2:
        await zensky.say_and_wait(
          `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}来听听看这首最新的潮流歌曲吧`,
        );
        await era.printAndWait(
          `${zensky.name}似乎点了一首非常怀旧的歌曲,你陷入了怀念之中`,
        );
        break;
      case 3:
        buffer.push(
          [
            [
              `听说最近上映的恋爱喜剧很有名呢,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}要不要一起去看看?`,
            ],
            `${zensky.name}指着电影推荐上的10大经典电影回放。`,
          ],
          [
            `想去看那种刺激的特技电影吗?那种碰碰啪啪的感觉`,
            `你们讨论着最新上映的电影`,
          ],
          [
            [
              `训,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}我不行了,两条腿现在还在发抖`,
            ],
            `新血来潮想要尝试恐怖电影的两人,互相支撑着走出了观影厅`,
          ],
        );
        if (love >= 75) {
          buffer.push([
            [`嗯...今天还是看恋爱喜剧吧`],
            `笨蛋情侣在电影达到高潮时也与主角一样互相接吻`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}最终是温暖还是干燥呢?`,
              ],
              `在看一场昏昏欲睡的电影中途,${zensky.name}突然开始自言自语`,
            ],
            [
              [`比起银杏叶开始飘落的秋天,我还是更喜欢潮湿的夏日呢`],
              `${zensky.name}看着电影推荐自言自语着`,
            ],
          );
        }
        temp = get_random_entry(buffer);
        for (const e of temp[0]) {
          await zensky.say_and_wait(e);
        }
        await era.printAndWait(temp[1]);
        break;
    }
  }

  async out_station(hook) {
    const me = get_chara_talk(0);
    hook.arg = await select_action_in_station(4);
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 1)) {
          case 0:
            await zensky.say_and_wait(
              `听说这附近有一家风评很好的甜品店,接下来一起去吃吧`,
            );
            break;
          case 1:
            await zensky.say_and_wait(`再来一份水果巴菲♪`);
            await me.say_and_wait(`吃了这么多没关系吗?`);
            await era.printAndWait(`你有点担心${zensky.name}的胃会不会受不了`);
            await zensky.say_and_wait(
              `不用担心,女孩子吃甜食的时候有一个专门装甜食的胃的啦⭐`,
            );
            await zensky.say_and_wait(
              `${zensky.name}一大口一大口的吃着水果巴菲`,
            );
            break;
        }
        break;
      case 1:
        switch (get_random_value(0, 1)) {
          case 0:
            await zensky.say_and_wait(
              `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的手很温暖呢`,
            );
            await era.printAndWait(`对你来说${zensky.name}又是什么呢?`);
            break;
          case 1:
            await zensky.say_and_wait(
              `虽然很想让${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}一直依赖着我`,
            );
            break;
        }
        break;
      case 2: //逛商场
        switch (get_random_value(0, 1)) {
          case 0:
            await zensky.say_and_wait(
              `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}有什么想要去买的吗?`,
            );
            break;
          case 1:
            await zensky.say_and_wait(
              `听说这附近新开了一家甜品店,之后来这边尝尝看吧`,
            );
            break;
        }
        break;
    }
  }

  async out_river(hook) {
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      switch (get_random_value(0, 1)) {
        case 0: //散步
          await zensky.say_and_wait(
            `岸边的空气真新鲜,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}是不是也觉得心情变好了呢?`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `看着后辈在岸边练习歌曲的热情时自己的心情也变得非常愉悦呢`,
          );
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0: //钓鱼
          await zensky.say_and_wait(
            `唔,${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我不太擅长钓鱼呢,那就拜托${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}了哦`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `呵呵,看着${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}认真的样子我也很高兴呢`,
          );
      }
    }
  }

  async school_atrium(hook) {
    hook.arg = (await select_action_in_atrium()) === 0;
    if (hook.arg) {
      switch (get_random_value(0, 1)) {
        case 0:
          await zensky.say_and_wait(
            `烦心的事情吗?呵呵,${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我暂时还没有呢`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `我的跑步究竟带给${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}们希望还是更深的绝望呢.....不不,没什么啦⭐`,
          );
          break;
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0:
          await zensky.say_and_wait(
            `我也是刚刚才到,没等多久就碰到${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}了呢.`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `我准备了亲手制作的便当哦,野餐的时候尝尝看吧♪`,
          );
          break;
      }
    }
  }

  async school_rooftop() {
    const chara_talk = get_chara_talk(4);
    if (Math.random() < 0.5) {
      await chara_talk.say_and_wait(`在天台吃便当的话心也变得像风一样自由了`);
    } else {
      await chara_talk.say_and_wait(
        `就这样放空大脑想象着自己化为了和煦的春风在柔和的阳光之下翩翩起舞,心情也变得雀跃起来了呢`,
      );
    }
  }
};
