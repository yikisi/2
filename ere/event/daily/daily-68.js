/**
 * @file 北部玄驹 - 日常
 * @author 小黑（原作）
 * @author 黑奴一号 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise>} */
const celebration_handlers = {};

require('#/event/daily/daily-events-68/celebration')(celebration_handlers);

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(68)) {
      return super.select();
    }
    const love = era.get('love:68'),
      kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [];
    if (era.get('base:68:体力') < era.get('maxbase:68:体力') / 3) {
      buffer.push([
        ['啊嘞……我的体力应该还能继续才对啊？'],
        `${kita.name} 大口大口地喘着粗气，似乎已经没有力气训练了。`,
      ]);
    } else {
      buffer.push(
        [
          ['唔唔唔……对不起训练员！因为扭到脚的相扑力士需要帮忙所以迟到了！'],
          [
            kita.get_colored_name(),
            ' 双手合十，但似乎对帮上忙的自己相当自豪的样子。',
          ],
        ],
        [
          [
            [
              '今天总算是没有迟到了呢，',
              sys_get_callname(68, 0),
              '～那么事不宜迟，让我们开始训练吧',
            ],
          ],
          [
            '已经累出一身汗的 ',
            kita.get_colored_name(),
            '，笑眯眯地对 ',
            me.get_colored_name(),
            ' 说。',
          ],
        ],
      );
      if (love >= 75) {
        buffer.push([
          [
            '最近，总感觉被训练员命令后的身体热乎乎的……',
            '训练员，可以多要求我一点么？',
          ],
          `${kita.name} 的脸蛋微微泛红，直到 ${me.name} 指出才慌慌张张地捂着脸跑走了。`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            ['嘿咻嘿咻，嘿嘿～今天训练员的训练也很厉害呢，但我是不会认输的！'],
            `${kita.name} 最近似乎对训练十分认真的样子，在得到指令后不久就想要下一次指令了。`,
          ],
          [
            [
              '最近，总感觉对训练员一见钟情了……',
              '训练员对小北我，也会是这样的情感么？',
            ],
            `在 ${me.name} 身边小声嘀咕着什么的 ${kita.name}，在 ${me.name} 凑近后便摇着头笑着跑开了。`,
          ],
        );
      } else {
        buffer.push([
          [
            '想要让训练员夸奖，想要让训练员在胜利之后对我露出微笑。',
            `所以说${sys_get_callname(68, 0)}，今天的训练也请您不要留情哦！`,
          ],
          [
            '露出笑容的 ',
            kita.get_colored_name(),
            '，似乎如同往日一样没什么改变。',
          ],
        ]);
      }
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => kita.say(e));
    era.print(entry[1]);
  }

  good_morning() {
    const love = era.get('love:68'),
      kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [
        [[`今天的身体也没有异常，训练员${me.adult_sex_title}，开始训练吧！`]],
        [
          [
            [
              '虽然不像 ',
              sys_get_colored_callname(this.id, 3),
              ' 那么强，不过我会努力变强证明自己的！',
            ],
          ],
        ],
        [
          [
            [
              '为了迎接比赛这样的大日子，',
              sys_get_colored_callname(this.id, 0),
              '，请尽情地训练我，让我得到独属于我的武器吧。',
            ],
          ],
        ],
        [
          [
            [
              '最近，',
              sys_get_colored_callname(this.id, 67),
              ' ',
              kita.sex,
              '总是拉着我去吃各种奇妙的料理呢，比如菠菜咖喱啊，巧克力火锅啊……',
            ],
            [
              '……虽然都是很有趣的料理，不过 ',
              sys_get_colored_callname(this.id, 67),
              ' 带我去的店是不是有点奇怪过头了？',
            ],
          ],
          [kita.get_colored_name(), ' 捂着微微发胖的肚子，露出了疑惑的表情。'],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 44),
              ' 最近似乎学会了炼金术的样子，真是厉害啊～',
            ],
          ],
          [
            kita.get_colored_name(),
            ' 笑眯眯地和 ',
            me.get_colored_name(),
            ' 说着身边发生的趣事。',
          ],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 0),
              ' 最近似乎运气不太好的样子？这种时候，就要找可靠的 ',
              sys_get_colored_callname(this.id, 98),
              ' 改运了哦！',
            ],
          ],
          ['一边自说自话着，', kita.get_colored_name(), ' 咻嗒嗒地跑走了。'],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 3),
              ' 似乎在看着我的训练呢，好，那么我也要努力不能输！',
            ],
          ],
          [
            '燃起信念的 ',
            kita.get_colored_name(),
            '，开始认真的准备起今天的训练了。',
          ],
        ],
        [
          [
            [
              '最近，',
              sys_get_colored_callname(this.id, 301),
              ' 似乎在买新的护发剂的样子呢，',
              sys_get_colored_callname(this.id, 0),
              ' 有好好护理头发么？',
            ],
          ],
          [
            '一边揉搓着 ',
            me.get_colored_name(),
            ' 的头发，',
            kita.get_colored_name(),
            ' 露出了太阳般炽热的笑容。',
          ],
        ],
      ];
    if (love >= 90) {
      buffer.push(
        [
          [
            `最近，总感觉训练员${me.adult_sex_title}指导我的声音变得离不开了呢。`,
            '下达指令的时候心脏就会砰砰直跳，完成命令的时候就会想要被夸奖，简直就像祭典一样的兴奋了呢。',
          ],
          `${kita.name} 戳着手指，脸蛋微微泛起了红晕。`,
        ],
        [
          [
            `最近我在挑战用尾巴能不能举重，训练员${me.adult_sex_title}可以陪我一起尝试么？`,
          ],
          `用尾巴缠住 ${me.name} 小腿的 ${kita.name}，用开玩笑般的语气对 ${me.name} 说道。`,
        ],
        [
          [
            '呀～热身了一下后全身都是臭烘烘的汗呢～',
            '今天晚上也要唰地跳进澡堂的热水里，里里外外洗个干净呢！',
          ],
          `${kita.name} 抬起手臂闻着腋下的味道，那湿漉漉的光滑腋窝在 ${me.name} 面前一览无余`,
        ],
        [
          [
            `训练员${me.adult_sex_title}，这周末我们一起去雪山训练吧！`,
            '没关系，时间上来不及的话就让我抱着训练员跑回来吧！一定不会迟到的！',
          ],
          `跃跃欲试的 ${kita.name}，对 ${me.name} 动手动脚了起来。`,
        ],
      );
    } else if (love >= 75) {
      buffer.push(
        [
          [
            `深空之中的黑色烟火！魔法${kita.teen_sex_title}玄色！这样的口号，能让变革同学喜欢的吧？`,
          ],
          `${
            kita.name
          } 转了个圈，摆出了今年光之美${kita.teen_sex_title}的变身pose。`,
        ],
        [
          ['为了下一次的比赛，一定要加倍努力，锻炼出独属于我的武器！'],
          `斗志昂扬的 ${kita.name}，准备好今天的训练了。`,
        ],
        [
          [
            '最近，桐生院训练员似乎在苦恼钢之意志没有人愿意学这件事呢。',
            '而且不知为何小钻也一脸认真地赞同了，这是为什么啊？',
          ],
        ],
        [
          [
            `训练员${me.adult_sex_title}就是我的助人大将呢，所以一直以来谢谢训练员${me.adult_sex_title}了哦！诶嘿嘿！`,
          ],
          `${kita.name} 笑着贴了过来，黑色的马耳扑扇扑扇地敲着 ${me.name} 的脖颈。`,
        ],
      );
    } else if (love >= 50) {
      buffer.push(
        [
          [
            `只是闻到训练员${me.adult_sex_title}的味道，胸口就小鹿乱撞似的停不下来了呢。`,
            '这种心情，到底是怎么回事呢？',
          ],
          `${kita.name} 用尾巴敲打着 ${me.name} 的小腿，露出了难以言说的表情。`,
        ],
        [
          [
            '最近，小钻似乎每天晚上都会蒙着被子在床上发出奇怪的声音',
            '而且胸部也变大了不少呢，是因为在学校太寂寞了么？',
          ],
          `露出单纯表情的 ${kita.name}，在光钻到来前咻嗒嗒地跑走了。`,
        ],
        [
          [
            `唔，昨天和黄金船前辈并跑后，脚总是有点疼……训练员${me.adult_sex_title}可以帮我看看么？`,
          ],
          `脱下靴子的 ${kita.name}，把那双肥嫩白皙的小脚抬到 ${me.name} 面前。`,
        ],
        [
          [
            `在特雷森学园的时候，训练员${me.adult_sex_title}一直都对我非常照顾呢！`,
            '但是，毕业后这段照顾的时间就要结束了吧，所以在毕业之前，我要好好的回报训练员才是！',
          ],
          `在不经意间流露出感慨表情的 ${kita.name}，为了 ${me.name} 变得更加努力了。`,
        ],
      );
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => kita.say(e));
    entry[1] && era.print(entry[1]);
  }

  async office_cook() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [
        [
          `训练员${me.adult_sex_title}，不好好吃饭用泡面对付可不行啊，就算要吃也要吃点菜叶子啊。`,
          `像${kita.sex_code - 1 ? '妈妈' : '爸爸'}一样的 ${kita.name}，在经 ${
            me.name
          } 同意后把菠菜和白菜放进了小锅里。`,
        ],
        [
          `诶诶？要在训练员室吃火锅么？不愧是大人，真是大胆啊。`,
          `用敬畏的眼神盯着自热火锅的 ${kita.name}，就像只看到新奇事物的小黑猫一样。`,
        ],
        [
          `商店街的大家送了我一些快过赏味期的面包和牛奶，要不要一起做三明治吃呢？`,
          `一边说着，${kita.name} 搬出一箱快过期的面包。`,
        ],
      ];
    const entry = get_random_entry(buffer);
    await kita.say_and_wait(entry[0]);
    await era.printAndWait(entry[1]);
  }

  async office_study() {
    await get_chara_talk(68).say_and_wait(
      get_random_value(0, 1)
        ? '要指导我的文学吗？好，我一定会加倍努力的！'
        : '唔唔唔……就算努力不会数学也还是不会啊……',
    );
  }

  async office_rest() {
    const me = get_chara_talk(0),
      kita = get_chara_talk(68),
      buffer = [
        [
          [
            `要休息么？没事啦没事，小北我的身体可是结实的很哦。`,
            `比起这个训练员${me.adult_sex_title}，还是接着训练吧！`,
          ],
          `这样敲打着胸脯露出笑容的 ${kita.name}，在 ${me.name} 的命令下还是乖乖的休息了。`,
        ],
        [
          [
            `训练员${me.adult_sex_title}，我真的不累啦……所以不午睡也是可以的哦……`,
          ],
          `轻轻嘟囔着的 ${kita.name}，在躺下之后不久后就睡了过去。`,
        ],
        [
          [`恰啦啦～今天也要好好训练～`, `不能因为休息太久散漫下来～恰啦啦～`],
          `躺在沙发上握着油性笔当麦克风，${kita.name} 轻声唱起了歌。`,
        ],
      ];
    const entry = get_random_entry(buffer);
    for (const e of entry[0]) {
      await kita.say_and_wait(e);
    }
    await era.printAndWait(entry[1]);
  }

  async office_prepare() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [
        [
          `把蜂蜜倒入一小勺，而后木瓜切片倒入……好！比赛前的准备之一做好了！`,
          `这样笑着对 ${me.name} 说的${
            kita.name
          }，在之后为了不浪费粮食把蜂蜜水全部给帝王${kita.adult_sex_title}喝掉了。`,
        ],
        [
          `训练员${me.adult_sex_title}在帮我钉蹄铁么？诶嘿嘿～这种小事让我自己来就好啦～`,
          `这么说着的 ${kita.name}，用手指把蹄铁上的钉子一个一个摁了进去。`,
        ],
        [
          `在加速的时候要控制好重心，原来如此，能够做到的话下次就能胜利了呢。`,
          `认真的看着白板上的计划书，${kita.name} 按照 ${me.name} 的方案立刻出去跑了一圈。`,
        ],
      ];
    const entry = get_random_entry(buffer);
    await kita.say_and_wait(entry[0]);
    await era.printAndWait(entry[1]);
  }

  async office_game() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    switch (get_random_value(0, 2)) {
      case 0:
        await kita.say_and_wait(`唔唔……是要玩小钻家的游戏啊……`);
        await era.printAndWait(
          `兴致勃勃的 ${kita.name}，在看到是Ｓ〇ＧＡ游戏机之后立刻垂下了耳朵。`,
        );
        break;
      case 1:
        await kita.say_and_wait(
          `唔噢噢噢～我通常召唤洗衣龙女！随机堆墓三张牌！`,
        );
        await era.printAndWait(
          `一边说着，${kita.name} 将洗衣龙女盖在场上，把光之创造神堆进了墓地。`,
        );
        break;
      case 2:
        await kita.say_and_wait(
          `训练员${me.adult_sex_title}训练员${me.adult_sex_title}！我们来玩骰子吧！很有意思的哦！`,
        );
        await kita.say_and_wait(
          `在老家的时候我经常和东城会的大哥哥玩这个呢，诶嘿嘿～`,
        );
        await era.printAndWait(
          `用手指抓起骰子，${kita.name} 在 ${me.name} 面前玩起了 ${me.name} 从没见过的「捞」骰子游戏。`,
        );
    }
  }

  async out_shopping(hook) {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      love = era.get('love:68'),
      buffer = [],
      edu_marks = new KitaEduMarks();
    let temp;
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await kita.say_and_wait(
              `训练员${me.adult_sex_title}，我要上了哦！花鸟风月哦哦哦哦！`,
            );
            await era.printAndWait(
              `轻快地敲击着按键，${kita.name} 操控的花之妖怪一跃而起，将黑曜石武术家的肋骨打断了。`,
            );
            break;
          case 1:
            await kita.say_and_wait(`唔唔唔，这个夹娃娃机的松紧度是……`);
            await era.printAndWait(
              `把脸蛋贴在夹娃娃机上好几分钟的 ${kita.name}，终于掏出硬币投了进去。`,
            );
            break;
          case 2:
            await era.printAndWait(`和 ${kita.name} 一起去了街机厅……`);
            await kita.say_and_wait(
              `帝王${kita.adult_sex_title}和麦昆${kita.adult_sex_title}的玩偶！特雷森附近的抓娃娃机终于也有供货了！`,
            );
            await era.printAndWait(
              `虽然是这么说，但是目标并不是街机厅，而是街机厅里的抓娃娃机呢。`,
            );
            await era.printAndWait(
              `在熬过了长龙般的人海之后，依旧兴致勃勃的 ${kita.name} 掏出几枚硬币塞进了投币口里。`,
            );
            await era.printAndWait(
              `但是那略显粗糙的技术却让 ${me.name} 不由得有些担心起来，小北似乎只是抓娃娃机的新手，真的能够抓到心爱的娃娃么…？`,
            );
            await kita.say_and_wait(
              `今天的小北我可是抱着就算钱包掏空也要抓到娃娃的气势来的！不抓回娃娃可不行哦！`,
            );
            await era.printAndWait(
              `看着 ${kita.name} 气势汹汹的样子，${
                me.name
              }忍不住叹了口气，走到${kita.teen_sex_title}身旁替${
                kita.sex
              }握住了操作杆。`,
            );
        }
        break;
      case 1:
        await era.printAndWait(
          `与 ${kita.name} 一同参加了商店街组织的抽奖活动……`,
        );
        switch (
          get_random_value(
            0,
            3 + !edu_marks.hot_spring && era.get('cflag:68:育成回合计时') < 144,
          )
        ) {
          case 0:
            await kita.say_and_wait(
              `路过的花山组的大哥送我的抽奖券……能抽到什么呢？`,
            );
            await era.printAndWait(`咕噜咕噜咕噜咕噜……`);
            await era.printAndWait(`biu～`);
            await era.printAndWait(`获得了商店街的奖品：【普通的纸巾】！`);
            await kita.say_and_wait(
              `啊呜，是纸巾啊，作为奖品也是不错的选择呢……`,
            );
            await kita.say_and_wait(
              `果然还是要以弄坏转盘，甚至转怪桌子的气势转么……`,
            );
            await era.printAndWait(`${kita.name} 接过了纸巾，失落的垂头丧气。`);
            break;
          case 1:
            await kita.say_and_wait([
              sys_get_colored_callname(68, 67),
              ' 在商店街购物后送给我的抽奖券，让我试试看吧！',
            ]);
            await era.printAndWait(`咕噜咕噜咕噜咕噜……`);
            await era.printAndWait(`biu～`);
            await era.printAndWait(`获得了商店街的奖品：【胡萝卜】！`);
            await kita.say_and_wait(
              `呜……只有一根胡萝卜么？太便宜以至于有点不甘心呢……`,
            );
            await kita.say_and_wait(
              `啊！但是也可以用胡萝卜做演唱会的麦克风啊！诶嘿嘿～`,
            );
            await era.printAndWait(
              `握着胡萝卜走在街上开心地唱着歌的 ${kita.name}，在这之后嘎嘣嘎嘣地把萝卜吃掉了。`,
            );
            break;
          case 2:
            await kita.say_and_wait(
              `哇啊，抽奖诶～正好有居委会的阿姨送的抽奖券，训练员我们试试吧！`,
            );
            await era.printAndWait(`咕噜咕噜咕噜咕噜……`);
            await era.printAndWait(`biu～`);
            await era.printAndWait(`获得了商店街的奖品：【一筐胡萝卜】！`);
            await kita.say_and_wait(`好，好多！分量都够一两顿饭了诶！`);
            await era.printAndWait(
              `看着绕起胡萝卜山转着圈，决定把胡萝卜分给大家的${kita.name}，${
                me.name
              }偷偷抽了一根出来，以免${kita.teen_sex_title}忘记了自己的那份。`,
            );
            break;
          case 3:
            await kita.say_and_wait([
              '诶嘿嘿，是 ',
              sys_get_colored_callname(68, 44),
              ' 买了餐巾纸后送我的抽奖券，会抽到什么东西呢？',
            ]);
            await era.printAndWait(`咕噜咕噜咕噜咕噜……`);
            await era.printAndWait(`biu～`);
            await era.printAndWait(
              `获得了商店街的奖品：【特等胡萝卜汉堡排】！`,
            );
            await kita.say_and_wait(
              `好豪迈的料理啊！而且分量也好大！快有一口大锅那么大了啊！`,
            );
            await era.printAndWait(
              `到底是哪来的这么大块肉排啊！${me.name} 一边吐槽着，一边在 ${kita.name} 的鼓动下，拿出手机去邀请其他的孩子一起消灭肉排了。`,
            );
            break;
          case 4:
            await kita.say_and_wait(
              `唔唔，因为平时帮助商店街的大家行善所以免费得到的抽奖机会……不会辜负！`,
            );
            await era.printAndWait(`咕噜咕噜咕噜咕噜……`);
            await era.printAndWait(`biu～`);
            await era.printAndWait(`获得了商店街的奖品：【温泉旅行券】！`);
            await kita.say_and_wait(
              `好耶！特等奖！是特等奖哦训练员！哈哈哈哈！`,
            );
            await kita.say_and_wait(
              `啊，但是这个是商店街的大家友情赠送的啊……抽到这么好的东西真的好么？`,
            );
            await era.printAndWait(
              `在商店街的大家微笑着的宽慰中，${kita.name} 有些不好意思地把温泉旅行券收下了。`,
            );
            edu_marks.hot_spring = 1;
        }
        break;
      case 2:
        buffer.push(
          [
            [
              `啊啊啊～嗯！发声练习正常！训练员${me.adult_sex_title}，我这就开始训练唱歌了哦！`,
            ],
            `握紧了麦克风，${kita.name} 像往常那样唱起了老家的演歌。`,
          ],
          [
            [
              `今天不仅要训练唱歌也要训练舞步哦，训练员${me.adult_sex_title}要看好了！沙吧嗒吧嗒～`,
            ],
            `踮着脚转起了圈，${kita.name} 蹦跳着模仿起了帝王的舞步。`,
          ],
          [
            [
              `被变革${kita.adult_sex_title}推荐了黑金属音乐呢，虽然还没听过不过今天就来试试唱吧……`,
              `诶，不行？为什么啊训练员${me.adult_sex_title}？`,
            ],
            `想要尝试不同音乐类型的 ${kita.name} 气呼呼的说。`,
          ],
        );
        if (love >= 75) {
          buffer.push([
            [
              `呜哇啊啊啊……这……这首曲子好过分！训练员${me.adult_sex_title}不许听！`,
            ],
            `听了带着黄色风格的歌词之后，${me.name} 和 ${kita.name} 立刻慌慌张张地换了首曲子。`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `怎么样训练员${me.adult_sex_title}，有没有被小北我的歌喉震撼到呢？`,
                `为什么要露出这样的表情？我有什么地方做错了么？`,
              ],
              `在不知多少次听到 ${kita.name} 对 ${me.name} 唱出情歌又毫无自觉之后，${me.name} 露出了近乎觉悟的表情。`,
            ],
            [
              [`训练员${me.adult_sex_title}，我唱的怎么样呢，诶嘿嘿……`],
              `在得到 ${me.name} 发自真心的赞叹之后，用尾巴拍打着 ${me.name} 的 ${kita.name} 合拢双腿，轻轻磨蹭了起来。`,
            ],
          );
        }
        temp = get_random_entry(buffer);
        for (const e of temp[0]) {
          await kita.say_and_wait(e);
        }
        await era.printAndWait(temp[1]);
        break;
      case 3:
        await era.printAndWait([
          me.get_colored_name(),
          ' 与 ',
          kita.get_colored_name(),
          ' 一起来到商店街看电影，最近有什么好电影吗？',
        ]);
    }
    hook.arg = hook.arg <= 1;
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(68);
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      love = era.get('love:68'),
      buffer = [];
    let temp;
    switch (hook.arg) {
      case 0:
        buffer.push(
          [
            ['呼啊啊～小钻推荐的拉面店果然分量十足呢，我开动了哦！'],
            `大口大口地吃着牛肉拉面，${kita.name} 露出了幸福的表情。`,
          ],
          [
            [
              `那就是历奇前辈推荐的中华料理店呢，训练员${me.adult_sex_title}，今天就在这里吃炒饭吧！`,
            ],
            `被强拉着走进看起来相当老旧的料理店后，${me.name} 和 ${kita.name} 扶着墙走出来了。`,
          ],
          [
            ['诶嘿嘿，最近在商店街帮忙拿到了烤肉店的优惠券呢，要一起去吃么？'],
            `一起享用了大份油滋滋的滚烫烤肉拌饭之后，${kita.name} 肉眼可见的心情愉快了起来。`,
          ],
          [
            [
              `训练员${me.adult_sex_title}！上周隔壁街开了一家新的炸猪排店呢。`,
              `听说那家店不仅分量十足，就连花山组的大哥也会拍手称赞呢，我们去试试吧！`,
            ],
            `担当推荐的确是一间分量十足的好店，但是这份好心情在看到 ${kita.name} 鼓起的肚子后消失的无影无踪了。`,
          ],
        );
        if (love >= 90) {
          buffer.push([
            [
              `今天，要吃鳗鱼饭呢……嘿嘿，训练员${me.adult_sex_title}要干劲十足哦～\n`,
            ],
            `坐在身旁的 ${kita.name} 依偎在 ${me.name} 的肩头，在 ${me.name} 看不见的地方露出了害羞的表情。`,
          ]);
        }
        break;
      case 1:
        buffer.push(
          [
            [
              `呜哇～商店街今天有攀岩比赛呢～训练员${me.adult_sex_title}想尝试一下么？`,
            ],
            `${me.name} 目视着远处正在热身的大相扑力士，总算是拦住了准备去报名的 ${kita.name}。`,
          ],
          [
            ['那家就是小钻常来的美容店呢，嘿嘿～稍微有些感兴趣了……'],
            '站在门口偷偷观察着内饰的小北，最后还是没有下定决心走进美容店',
          ],
          [
            [
              `好漂亮的纪念品店呢，会不会有帝王${kita.adult_sex_title}和麦昆${kita.adult_sex_title}的纪念品呢？`,
            ],
            `虽然这家店铺看起来有些老旧，但既然 ${kita.name} 很有兴趣，那就一起去逛一逛吧。`,
          ],
        );
        if (love >= 90) {
          buffer.push([
            [
              `只是和训练员${me.adult_sex_title}一起走在街上，就感觉好放松啊～哼哼哼～`,
              '训练员，可以多陪我走一走么？',
            ],
            `轻轻挽住 ${me.name} 的胳膊，${kita.name} 愉快靠在 ${me.name} 肩膀上。`,
          ]);
        } else if (love > 75) {
          buffer.push([
            [
              `这个时间点商店街的人流量很大呢，训练员${me.adult_sex_title}可要小心注意不要走丢了哦。`,
            ],
            `悄悄握紧 ${me.name} 的手，${kita.name} 摇晃着耳朵，如同一只黑色的导盲犬般走在 ${me.name} 前面。`,
          ]);
        } else if (love > 50) {
          buffer.push([
            ['没想到特雷森附近居然有牧场呢，下次一起来看看吧～'],
            `踮起脚尖望着围栏里的样子，${kita.name} 兴奋的哼起了歌。`,
          ]);
        }
        break;
      case 2:
        await era.printAndWait([
          me.get_colored_name(),
          ' 与 ',
          kita.get_colored_name(),
          ' 一起来到车站附近逛商场，买一点小心意吧。',
        ]);
    }
    temp = get_random_entry(buffer);
    if (temp) {
      for (const e of temp[0]) {
        await kita.say_and_wait(e);
      }
      await era.printAndWait(temp[1]);
    }
  }

  async out_river(hook) {
    const me = get_chara_talk(0),
      kita = get_chara_talk(68);

    if ((hook.arg = (await select_action_around_river()) > 0)) {
      switch (get_random_value(0, 2)) {
        case 0:
          await kita.say_and_wait(
            `河边的空气好清新啊，而且凉嗖嗖的，这样的天气最适合跑步了～`,
          );
          break;
        case 1:
          await kita.say_and_wait(
            `河边长出了一丛芦苇荡呢！简直就像回到了老家一样呢。`,
          );
          break;
        case 2:
          await kita.say_and_wait(
            `没想到在河边散步也会碰到摔伤的格斗家呢，搬运的工作就交给我吧！`,
          );
          await kita.say_and_wait(
            `诶？不是摔伤更像是被打伤的？训练员${me.adult_sex_title}真会开玩笑呢～这只是寻常的扭伤哦～`,
          );
          await era.printAndWait(
            `打着哈哈的 ${kita.name}，背着受伤的格斗家轻轻一跃跳过了数米长的河流。`,
          );
      }
    } else {
      await era.printAndWait(`和 ${kita.name} 相约去钓鱼……`);
      switch (get_random_value(0, 2)) {
        case 0:
          await kita.say_and_wait(`索兰索兰索兰！呦～！`);
          await era.printAndWait(
            `但不知道为什么从钓鱼变成在金枪鱼船上钓金枪鱼了！？`,
          );
          await era.printAndWait(
            `在风口浪尖平均可达到六米高度差距的捕鱼船上，${kita.name} 用超乎寻常的力量收着捕鱼网。`,
          );
          await era.printAndWait(
            `那堪称绝景的身影和几个月的工作，永远地烙印在了训练员脑海中。`,
          );
          break;
        case 1:
          await kita.say_and_wait(
            `又钓上来了一条！训练员${me.adult_sex_title}看到了么？`,
          );
          await era.printAndWait(
            `不愧是黑${
              kita.sex_code - 1 ? '姐姐' : '哥哥'
            }，真是太厉害了！稚嫩的赞美声不绝于耳。`,
          );
          await era.printAndWait(
            `${kita.name} 开心的摇着尾巴，甩着粉红色的儿童鱼竿将鱼标扔进水里。`,
          );
          await kita.say_and_wait(`诶嘿咯～诶呦嘿～索兰索兰！`);
          await era.printAndWait(
            `唱着捕鱼的号子，${kita.name} 那炽热耀眼的姿态深深烙印在了 ${me.name} 眼中。`,
          );
          break;
        case 2:
          await kita.say_and_wait(`哼哼哼～哼哼哼哼哼～`);
          await era.printAndWait(
            `${kita.name} 轻声哼着歌，安静的等待着鱼儿上钩的时候`,
          );
      }
    }
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(68)) {
      return await super.good_night(hook);
    }
    const check = get_custom_check(68).is_want_make_love(),
      me = get_chara_talk(0),
      kita = get_chara_talk(68);
    era.print(`繁忙的一天结束，${me.name} 将 ${kita.name} 送到学生宿舍门口……`);
    if (check > 0) {
      era.print(
        `${me.name} 刚想和往常一样告别，但小北却一反常态地不让 ${me.name} 离开`,
      );
      era.printButton('接收暗示', 1);
      era.printButton('装傻', 2);
      hook.arg = (await era.input()) === 1;
      if (check === 2) {
        hook.arg = 2;
      }
    } else if (era.get('love:68') >= 50) {
      kita.say(`诶嘿嘿，训练员${me.adult_sex_title}明天见哦！`);
      era.print(
        `一边说着，${kita.name} 狠狠地在 ${me.name} 身上蹭了蹭，而后哒哒哒地跑走了。`,
      );
    } else {
      kita.say(
        `训练员${me.adult_sex_title}，今天真是辛苦您了，明天我也会继续努力的。`,
      );
      era.print([
        kita.get_colored_name(),
        ' 深深地向 ',
        me.get_colored_name(),
        ' 鞠了一躬，',
        me.get_colored_name(),
        ' 摸了摸 ',
        kita.get_colored_name(),
        ' 的脑袋，在看到',
        kita.sex,
        '走进宿舍后才转身离开。',
      ]);
    }
  }

  async talk() {
    if (!sys_check_awake(68)) {
      return await super.talk();
    }
    const me = get_chara_talk(0);
    let talk_arr;
    switch (era.get('cflag:68:干劲')) {
      case -2:
        talk_arr = [
          '啊嘞？明明我的长处就是韧性十足……来着吧？',
          `对不起训练员${me.adult_sex_title}，平时训练的力气……好像消失不见了……`,
        ];
        break;
      case -1:
        talk_arr = ['嗯嗯……用不上力气，好奇怪啊……', '那个……总感觉晕乎乎的？'];
        break;
      case 0:
        talk_arr = [
          `不管是什么样的训练，都咚咚咚的解决吧`,
          `训练员${me.adult_sex_title}，让训练开始吧！我已经准备好了哦！`,
        ];
        break;
      case 1:
        talk_arr = [
          '即使是比平常还要厉害的训练，也不在话下',
          `我可是韧性十足的哦，训练员${me.adult_sex_title}，请把我努力训练成兵器一样的存在吧！`,
        ];
        break;
      case 2:
        talk_arr = [
          '呼呼，顺着这个气势的话，什么都能做到！',
          `感觉脚好轻，思路好快，今天的小北我很厉害哦！`,
        ];
        break;
    }
    await get_chara_talk(68).say_and_wait(get_random_entry(talk_arr));
  }

  async out_church() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    await era.printAndWait(
      `今天，${me.name} 同 ${kita.name} 一同前往神社。尽管今天是休息的日子，${
        me.name
      } 还是陪伴着赛${kita.uma_sex_title}一起来到了神社前`,
    );
    await era.printAndWait(
      `毕竟是为了兴致勃勃的担当，也是为了下次比赛的祈福，多劳累一点也是好的。`,
    );
    await era.printAndWait(
      `${me.name} 这么想着，穿过鸟居走进 ${kita.name} 带 ${me.name} 来的这件神社。`,
    );
    era.println();
    era.printButton('「没什么人呢。」', 1);
    await era.input();
    await era.printAndWait(`这件看起来相当古旧的神社此时相当冷清。`);
    await era.printAndWait(
      `不仅来人只有 ${me.name} 和 ${kita.name} 两个，就连神社的神官和巫女也看不到影子。`,
    );
    await era.printAndWait(`这里真的靠谱么……？这样的疑问不禁浮上心头。`);
    await era.printAndWait(
      `${me.name} 看着沉默不言的担当掏出几枚硬币，向赛钱箱里投下后拍了拍手双手合十，小声地祈祷着什么。`,
    );
    if (get_random_value(0, 1)) {
      await kita.say_and_wait(`呼哇，太好了～`);
      await era.printAndWait(
        `黑发的赛${kita.uma_sex_title}长吁了一口气，开心的拍了拍胸脯，露出了阳光般灿烂的笑容。`,
      );
      await kita.say_and_wait(
        `因为是历奇前辈推荐的特别灵验的神社，所以刚刚一直都不太敢说话呢～`,
      );
      await era.printAndWait(`原来是因为这个才一直不说话么……`);
      await era.printAndWait(`${me.name} 叹了口气，轻轻敲了敲身边担当的脑袋。`);
      await era.printAndWait(
        `不知是不是心理作用，${me.name} 确实感觉到身体轻快了不少。`,
      );
      await era.printAndWait(`下次也来继续参拜吧，${me.name} 不由得如此想到。`);
    } else {
      await kita.say_and_wait(
        `抽到了不太好的签子呢……但是没关系，去找历奇前辈尝试转运的仪式吧！`,
      );
      await era.printAndWait(
        `看到小北一如既往活泼的样子，${me.name} 不由得感觉到一阵阵的欣慰。`,
      );
      await era.printAndWait(`……但是，还是有点烦躁啊。`);
    }
  }

  async week_start() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      punish_level = era.get('flag:惩戒力度');
    await print_event_name('惩戒之后', kita);
    if (punish_level === 1) {
      await kita.say_and_wait(`呜哇啊～训练员变成了马娘了！好可爱～`);
      if (kita.sex_code !== 1) {
        await kita.say_and_wait(
          '诶嘿嘿～同样是马娘总感觉没有以前那么害羞了呢～',
        );
      }
      await era.printAndWait([
        '抱住 ',
        me.get_colored_name(),
        ' 亲昵的蹦来蹦去，偷偷露出兴奋表情的 ',
        kita.get_colored_name(),
        ' 笑了起来。',
      ]);
    } else if (punish_level === 3) {
      await kita.say_and_wait(
        `明明小北才是那个有被欺负癖好的孩子，哼哼～但是没想到训练员远比我想被欺负呢。`,
      );
      await era.printAndWait(
        `在训练员耳边轻声细语着说，黑色的${kita.uma_sex_title}露出了注视猎物般的眼神。`,
      );
    }
  }

  async slave_end() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    await print_event_name('地狱般的演歌祭典', kita);

    await era.printAndWait(`哒，哒，哒。`);
    await era.printAndWait(
      `${
        kita.name
      } 的脚步声一如既往地准时在门外响起，伴随着一同响起的是${kita.uma_sex_title}欢快的歌声。`,
    );
    await kita.say_and_wait(
      `训练员${me.adult_sex_title}，中午好哦，有没有好好吃饭啊？`,
    );
    await era.printAndWait(
      `向两侧拉开拉门，映入眼帘的是小北那有如阳光般温暖的表情。`,
    );
    await era.printAndWait(
      `但同时，那也是 ${me.name} 最大的债主那无比愉快的，令 ${me.name} 倍感压力的笑容。`,
    );
    await kita.say_and_wait(
      `唔嘿嘿～再过几个月大概就可以恢复正常生活，回到特雷森学园了。`,
    );
    await kita.say_and_wait(
      `只是借债了这么点钱真是太好了呢，还在小北我稍微能处理的范畴内。`,
    );
    await kita.say_and_wait(
      `但是以后要借债的话，只要找小北我借债就好了哦，毕竟其他的借债都很不正经啊。`,
    );
    await era.printAndWait(
      `微笑着慢慢握住 ${me.name} 的手，『不求回报的』${kita.name}露出的表情，绝不是 ${me.name} 不付出任何代价就能迎来的Happy ending。`,
    );
  }

  async celebration(hook) {
    const date = (era.get('flag:当前回合数') - 1) % 48;
    if (!celebration_handlers[date]) {
      return await super.celebration(hook);
    }
    await celebration_handlers[date](
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }
};
