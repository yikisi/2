/**
 * @file 春乌拉拉 - 日常
 * @author 99
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { lust_border } = require('#/data/ero/orgasm-const');

module.exports = {
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {string} self_call 春乌拉拉的自称
   * @param {PrintedSpan} call_1 春乌拉拉对特别周的称呼
   * @param {PrintedSpan} call_11 春乌拉拉对草上飞的称呼
   * @param {PrintedSpan} call_14 春乌拉拉对神鹰的称呼
   * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
   * @param {PrintedSpan} call_19 春乌拉拉对爱丽数码的称呼
   * @param {PrintedSpan} call_20 春乌拉拉对青云天空的称呼
   * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
   * @param {PrintedSpan} call_33 春乌拉拉对爱慕织姬的称呼
   * @param {PrintedSpan} call_47 春乌拉拉对荒漠英雄的称呼
   * @param {PrintedSpan} call_58 春乌拉拉对名将怒涛的称呼
   * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
   * @param {PrintedSpan} call_77 春乌拉拉对成田路的称呼
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   */
  good_morning(
    urara,
    you,
    callname,
    self_call,
    call_1,
    call_11,
    call_14,
    call_15,
    call_19,
    call_20,
    call_30,
    call_33,
    call_47,
    call_58,
    call_61,
    call_77,
    high_relation,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    if (high_relation) {
      buffer.push(
        () => {
          urara.say(`${callname}！今天要来做什么呢？`);
          era.print([
            urara.get_colored_name(),
            ' 充满活力地向 ',
            you.get_colored_name(),
            ' 问着今天的计划。',
          ]);
        },
        () => {
          urara.say(
            `务农的爷爷又送了萝卜给我了，一会儿和我一起分给大家吧！这是 ${callname} 的份！`,
          );
          era.print([
            '抱着许多东西的 ',
            urara.get_colored_name(),
            ' 开心地将一纸袋胡萝卜塞到了 ',
            you.get_colored_name(),
            ' 的怀中。',
          ]);
        },
        () => {
          urara.say(
            `和 ${callname} 的约定我一定会遵守的！我们一起去拿好多好多第一吧！`,
          );
          era.print([
            '一如既往地，',
            urara.get_colored_name(),
            ' 向 ',
            you.get_colored_name(),
            ' 兴奋地说着。',
          ]);
        },
        () => {
          urara.say(
            `${callname}，${callname}！看杂志了吗？大家说我是『能带来勇气的${urara.uma_sex_title}』来着！诶嘿嘿～`,
          );
          era.print([
            '不知 ',
            urara.get_colored_name(),
            ' 是否理解其中的含义，但',
            urara.sex,
            '的笑颜中似乎有些害羞。',
          ]);
        },
        () => {
          urara.say([
            '昨天我和 ',
            call_1,
            ' 与 ',
            call_20,
            ' ',
            urara.couple_title,
            '一起去吃拉面了，但是我有好好注意食量哦？虽然还是吃多了！',
          ]);
          era.print([
            urara.get_colored_name(),
            ' 笑着来到 ',
            you.get_colored_name(),
            ' 的面前，至少从',
            urara.sex,
            '微微发胖的小肚子来讲',
            urara.sex,
            '确实很开心。',
          ]);
        },
        () => {
          urara.say([
            '啊，',
            call_14,
            ' 又在被 ',
            call_11,
            ' 拿着刀追着砍了！大家今天也很有精神呢！',
          ]);
          era.print([
            '虽然说着听起来很危险的话，但既然 ',
            urara.get_colored_name(),
            ' 没有紧张起来那应该没问题吧？',
          ]);
        },
        () => {
          urara.say([
            '今天的 ',
            call_15,
            ' 也在天台上练习着什么，好像很有趣的样子！虽然',
            urara.sex,
            '好像一直都是那个样子！',
          ]);
          era.print([
            urara.get_colored_name(),
            ' 一边说着一边向 ',
            you.get_colored_name(),
            ' 模仿着好歌剧的样子，虽然并不太像但意外的可爱。',
          ]);
        },
        () => {
          urara.say([
            '昨天 ',
            call_58,
            ' 回到宿舍后在床上发现了一只狸猫先生哦！狸猫先生确实很可爱呢！',
          ]);
          era.print([
            '狸猫？学生宿舍里有狸猫？因为知道 ',
            urara.get_colored_name(),
            ' 不会说谎，所以 ',
            you.get_colored_name(),
            ' 显得更加疑惑了。',
          ]);
        },
        () => {
          urara.say([
            call_77,
            ' 和 ',
            call_33,
            ' 好像在讨论毛茸茸的事情！只是 ',
            call_33,
            ' 中途又开始推销起被褥烘干机的事情了！为什么呢？',
          ]);
          era.print([
            '说到最后，就连 ',
            urara.get_colored_name(),
            ' 也少见地疑惑了。是啊，为什么呢？',
          ]);
        },
      );
      if (love > 0) {
        buffer.push(
          () => {
            urara.say(
              `最近有了好吃的第一个分享的总是 ${callname} 呢！嗯！是因为 ${callname} 跟我的关系很好吧！`,
            );
            era.print([
              urara.get_colored_name(),
              ' 一边与 ',
              you.get_colored_name(),
              ' 分享着手中的零食，一边开心地向 ',
              you.get_colored_name(),
              ' 笑着。',
            ]);
          },
          () => {
            urara.say(
              `感觉只要有 ${callname} 在的话，我就可以跑得更快！跑步也比以前更开心了！`,
            );
            era.print([
              '不知不觉间，蹦蹦跳跳的 ',
              urara.get_colored_name(),
              ' 与 ',
              you.get_colored_name(),
              ' 靠得更近了。',
            ]);
          },
          () => {
            urara.say([
              call_61,
              ' 今天也说了要听 ',
              callname,
              ' 的话，就像妈妈一样！可 ',
              self_call,
              ' 已经不是小孩子了！明明 ',
              call_61,
              ' 也总是笨手笨脚的……啊，不要告诉 ',
              call_61,
              ' 哦 ',
              callname,
              '！',
            ]);
            era.print([
              urara.get_colored_name(),
              ' 今天与',
              urara.sex,
              '的舍友似乎也十分要好，但是不可以为了回击就说朋友的坏话啊。',
            ]);
          },
          () => {
            urara.say(
              `大家都说我的奔跑能够带来希望呢！${self_call} 有好好让 ${callname} 开心起来吗？`,
            );
            era.print([
              '露出了比以往稍微成熟一些的笑容，',
              urara.get_colored_name(),
              ' 似乎在好好的成长着。',
            ]);
          },
        );
      }
      if (love >= 25) {
        buffer.push(
          () => {
            urara.say(
              `妈妈说过，只有互相信任的人才愿意让对方打理形象呢！${self_call} 的发型乱了？那 ${callname} 要帮我梳理头发吗？`,
            );
            era.print([
              '没等 ',
              you.get_colored_name(),
              ' 回应，',
              urara.get_colored_name(),
              ' 便已经笑着解开缎带，在 ',
              you.get_colored_name(),
              ' 面前散开了粉色的马尾',
            ]);
          },
          () => {
            urara.say([
              call_30,
              ' 借给我的绘本上说，恋爱是件很美好的事，就像水果一样又酸又甜呢！',
              self_call,
              ' 也很多很多想法呦！但是……现在还不能告诉 ',
              callname,
              ' 更多呢！',
            ]);
            era.print([
              '不知不觉中，仿佛不会长大的小小的',
              urara.uma_sex_title,
              '似乎有了怀春少女才会有的姿态。',
            ]);
          },
          () => {
            urara.say(
              `${callname}，再靠近一些也可以哦？呀！嘿嘿，又坐到 ${callname} 的腿上了！${callname} 的身体依旧很温暖呢！`,
            );
            era.print([
              urara.get_colored_name(),
              ' 高兴地说道，似乎有一瞬间露出了温润的神色。',
            ]);
          },
          () => {
            urara.say(
              `大家总说要成为大人，${self_call} 也不想只被当成小孩子呢！诶？成为大人的理由……啊，那边有胡萝卜诶！`,
            );
            era.print([
              '像是想要掩饰什么，面对 ',
              you.get_colored_name(),
              ' 的提问的 ',
              urara.get_colored_name(),
              ' 突然红着脸慌慌张张地找借口跑开了。',
            ]);
          },
        );
      }
      if (love >= 50) {
        buffer.push(
          () => {
            urara.say(
              `${callname} 的气味好好闻！哈啊……啊！对不起！让 ${callname} 感到困扰可不行啊，但是，嗯……`,
            );
            era.print([
              '虽然想要放开，但 ',
              urara.get_colored_name(),
              ' 还是不受控制的红着脸自顾自闻着 ',
              you.get_colored_name(),
              ' 身上的味道。',
            ]);
          },
          () => {
            urara.say([
              `『杂鱼～杂鱼～』，这是从 `,
              call_19,
              ` 的小本本上学来的，说是能让 ${callname} 变得开心！诶？不要说了？那 ${self_call} 不说了！不过 ${callname}……继续看着 ${self_call} 吧？`,
            ]);
            era.print([
              '观察着 ',
              you.get_colored_name(),
              ' 的不知所措，',
              urara.get_colored_name(),
              ' 清澈的笑容中不知何时掺入了窃笑般的愉悦感。',
            ]);
          },
          () => {
            urara.say([
              `昨晚 `,
              call_61,
              ` 总在床上发出奇怪的声音！但听到那个声音，${self_call} 却满脑子都是 ${callname}……为什么？${self_call} 不太明白，但是后来……？后来……${self_call} 睡着啦！`,
            ]);
            era.print([
              '没能将最近的经历讲到最后，',
              urara.get_colored_name(),
              ' 小脸通红的别开了视线。',
            ]);
          },
          () => {
            urara.say(
              `啊哈～${callname} 的『双腿之间』是 ${self_call} 的『专座』，不是约好的事情吗？不要说让人误会的话？才没有误会！还是说……${callname} 又在想什么呢？`,
            );
            era.print([
              '以纯洁的语气对 ',
              you.get_colored_name(),
              ' 吐出诱惑的低语，',
              urara.get_colored_name(),
              ' 可爱的小脸似乎也变得『魅惑』了起来……',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `这杯新口味的蜂蜜特饮很好喝哦？${callname} 也来尝尝吧！间接kiss……？但 ${self_call} 觉得没关系哟？难道……${callname} 害羞了？`,
            );
            era.print([
              '小小的',
              urara.uma_sex_title,
              '对 ',
              you.get_colored_name(),
              ' 笑着眯起眼睛，而手中甜得发腻的饮料，似乎也有了更多的含义。',
            ]);
          },
          () => {
            urara.say(
              `最近我又学着做饭了哟！为了以后能填满 ${callname} 的身体，${self_call} 会继续努力的！别说这样的话？是说 ${callname} 也想要填满 ${self_call} 的身体吗？别调戏大人？我知道啦……`,
            );
            era.print([
              '听到 ',
              you.get_colored_name(),
              ' 的提醒，',
              urara.get_colored_name(),
              ' 终于移开了在说出来前就已红透了的脸。',
            ]);
          },
          () => {
            urara.say(
              `商店街的大家又说 ${self_call} 更漂亮了呢！是因为 ${self_call} 跑得更快了吗？嗯？不全是？其实我知道哦！包括 ${callname} 看 ${self_call} 的身体时更加入迷的眼神哦……开玩笑的！`,
            );
            era.print([
              '悄悄撩起衣角露出娇嫩的身体，',
              urara.get_colored_name(),
              ' 纯粹的笑容让 ',
              you.get_colored_name(),
              ' 焦躁得有些头晕目眩。',
            ]);
          },
          () => {
            urara.say(
              `最近 ${self_call} 想了很多哦？嗯！${self_call} 还想要更多的赢给大家看！不要勉强？我知道的哦！所以还有一些『一着』，只会给 ${callname} 看呢……嘿嘿～`,
            );
            era.print([
              urara.get_colored_name(),
              ' 的笑容看上去依旧天真烂漫，但是只给 ',
              callname,
              ' 看的一着又是……？',
            ]);
          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `今天也好好看着我吧，我会继续将勇气带给 ${callname} 的！……还有之后在两人独处的时候，${callname} 也要好好加油哦？`,
            );
            era.print([
              '踮起脚尖，',
              urara.get_colored_name(),
              ' 温柔地抚摸着 ',
              you.get_colored_name(),
              ' 的脸颊，也留下了令 ',
              you.get_colored_name(),
              ' 感到不安的说辞。',
            ]);
          },
          () => {
            urara.say(
              `以后的话 ${callname} 想要多少个孩子呢？虽然不管想要多少个 ${self_call} 都能接受的！`,
            );
            era.print([
              '说着听起来前言不搭后语的话，',
              urara.get_colored_name(),
              ' 灼热的目光看得 ',
              you.get_colored_name(),
              ' 有些不自在。',
            ]);
          },
          () => {
            urara.say(
              `一边说着占有并不是爱的全部，大家却又一边紧盯着彼此呢……${callname} 怎么想呢？${self_call} 也觉得占有并不好，但是 ${self_call} 也会感到不安哟？`,
            );
            era.print([
              '紧紧拉着 ',
              you.get_colored_name(),
              ' 的袖口，小',
              urara.uma_sex_title,
              '的笑容有些寂寞，似乎希望 ',
              you.get_colored_name(),
              ' 能更近一些。',
            ]);
          },
          () => {
            urara.say(
              `嗳嗳，${callname}！很舒服很开心的事，今天也要一起来做吗？声音太大了？可我说的是一起训练哦？难道说是 ${callname} 想对 ${self_call}……？`,
            );
            era.print([
              '观察着 ',
              you.get_colored_name(),
              ' 的反应，',
              urara.get_colored_name(),
              ' 还稚嫩的笑脸上多了几分娇羞的红晕。',
            ]);
          },
        );
      }
      if (love >= 100) {
        buffer.push(
          () => {
            urara.say(
              `想要去跑步，也想要外出，但最想的果然是 ${callname} 陪着我！不会让 ${callname} 随便离开的，谁来也不行哦！谁来也不行呢……`,
            );
            era.print([
              '兴致高涨的 ',
              urara.get_colored_name(),
              ' 不寻常地主动向 ',
              you.get_colored_name(),
              ' 撒起了娇，不过总觉得气氛变得有些危险了……？',
            ]);
          },
          () => {
            urara.say(
              `如果和 ${callname} 分开了，只要能够重逢，就算前面是地狱我也会追过去哦……啊哈～这是 ${self_call} 从电视上学来的！${self_call} 的演技怎么样？有吓到吗 ${callname}？`,
            );
            era.print([
              '虽然自称是演技，但 ',
              urara.get_colored_name(),
              ' 的眼神却又认真无比。',
            ]);
          },
          () => {
            urara.say(
              `${callname} 想 ${self_call} 了吗？是白天更想一点？还是晚上更想一点？哼哼～就算 ${callname} 生气我也不会停下来，现在我是坏 ${self_call} 哦！`,
            );
            era.print([
              '从背后环住 ',
              you.get_colored_name(),
              ' 的腰际，',
              urara.get_colored_name(),
              ' 用香甜的声音挑逗着 ',
              you.get_colored_name(),
              ' 的神经……',
            ]);
          },
          () => {
            urara.say(
              `${self_call} 是天使……？虽然还是不太明白，但我也想一直做 ${callname} 的天使呢！所以 ${callname} 又累了的话，不论何时都可以来依靠 ${self_call} 哦？`,
            );
            era.print([
              '听到了 ',
              you.get_colored_name(),
              ' 不经意间流露出的感慨，娇小的担当既像妻子，又像母亲般牵起了 ',
              you.get_colored_name(),
              ' 的手。',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        () => {
          urara.say(`……${callname}！今天的训练……也加油来做吧！`);
          era.print([
            '明明只是日常打招呼，',
            urara.get_colored_name(),
            ' 却每次笑起来都像鼓足了勇气。',
          ]);
        },
        () => {
          urara.say(
            `今天也没关系！${self_call} 会努力遵守和 ${callname} 的约定的！`,
          );
          era.print([
            '强打起精神，',
            urara.get_colored_name(),
            ' 认真地抬起头直视着 ',
            you.get_colored_name(),
            ' 的眼睛。',
          ]);
        },
        () => {
          urara.say(`${callname}，那个、胡萝卜！这是你的那份！`);
          era.print([
            '虽然有些怯生生的，但 ',
            urara.get_colored_name(),
            ' 还是笑着将手中的萝卜塞给了 ',
            you.get_colored_name(),
            '。',
          ]);
        },
        () => {
          urara.say(
            `勇气……是呢！${self_call} 要拿出更多的勇气来！但是，真的很难啊……`,
          );
          era.print([
            '阅览着今天的杂志，',
            urara.get_colored_name(),
            ' 的笑脸不知为何有些落寞。',
          ]);
        },
        () => {
          urara.say(
            `最近和大家一起外出，结果又吃多了……对不起，${self_call} 下次一定会注意的！`,
          );
          era.print([
            '露出勉强的笑容，面对 ',
            you.get_colored_name(),
            ' 的 ',
            urara.get_colored_name(),
            ' 有些底气不足。',
          ]);
        },
        () => {
          urara.say(
            `补习的时候又被大家帮助了，是呢！要是 ${self_call} 能和大家一样聪明的话……`,
          );
          era.print([
            '站在 ',
            you.get_colored_name(),
            ' 旁边，',
            urara.get_colored_name(),
            ' 似乎因为想起了什么而有些缺乏活力。',
          ]);
        },
      );
      if (love > 0) {
        buffer.push(
          () => {
            urara.say(`${callname}，这个很好吃哦！虽然只剩最后一点点了……`);
            era.print([
              '将最后一点零食全部分给 ',
              you.get_colored_name(),
              '，',
              urara.get_colored_name(),
              ' 因差点忘了训练员而有些羞愧。',
            ]);
          },
          () => {
            urara.say(
              `和 ${callname} 一起，${self_call} 确实更快了！可是为什么没有变得多开心呢……`,
            );
            era.print([
              '虽因自身的成长而高兴着，但 ',
              urara.get_colored_name(),
              ' 的笑容却有些勉强。',
            ]);
          },
          () => {
            urara.say(
              `${callname} 不用看着，${self_call} 自己来也可以——这样的话 ${self_call} 不会说的！${self_call} 说好了要带给 ${callname} 勇气，相对的 ${callname} 也不可以逃跑哦？`,
            );
            era.print([
              '用樱瞳认真地直视着大人的眼睛，',
              urara.get_colored_name(),
              ' 向 ',
              you.get_colored_name(),
              ' 提出了不容拒绝的愿望。',
            ]);
          },
        );
      }
      if (love >= 25) {
        buffer.push(
          () => {
            urara.say(
              `头发很乱？糟了……诶？要帮忙？那……${callname} 稍微温柔一点哦？`,
            );
            era.print([
              '面对 ',
              you.get_colored_name(),
              ' 的提议，',
              urara.get_colored_name(),
              ' 小心地解开缎带与发带，虽然有点紧张但也顺从的背过身去。',
            ]);
          },
          () => {
            urara.say(
              `虽然 ${self_call} 不想一直当小孩子，但身为大人的 ${callname} 又是这个样子的。成为大人，就像奔跑和比赛一样难懂呢……`,
            );
            era.print([
              urara.get_colored_name(),
              ' 似乎在小声说着什么，但在 ',
              you.get_colored_name(),
              ' 看向',
              urara.sex,
              '时却又别开了视线。',
            ]);
          },
          () => {
            urara.say([
              call_47,
              ` 的书里讲过，恋爱往往会伴随着苦恼的事，总是会让人很难受……最近 ${self_call} 也很苦恼呢，${self_call} 不太明白自己是不是真的在意……`,
            ]);
            era.print([
              '曾经仿佛不会长大的小 ',
              urara.get_colored_name(),
              '，现在正像位为感情所苦恼的少女般自言自语着。',
            ]);
          },
        );
      }
      if (love >= 50) {
        buffer.push(
          () => {
            urara.say(
              `${callname} 今天的味道……嗯？${self_call} 不是故意的哦？`,
            );
            era.print([
              '心不在焉地磨蹭着 ',
              you.get_colored_name(),
              ' 的衣物，小担当有点敷衍地向 ',
              you.get_colored_name(),
              ' 道着歉。',
            ]);
          },
          () => {
            urara.say(
              `最近看到 ${callname} 身体总会热热的，晚上想到 ${callname} 的话，下面总会……对不起，${self_call} 不说了，但是……果然没什么吧……？`,
            );
            era.print([
              '在扭捏了一会儿之后，变得满脸通红 ',
              urara.get_colored_name(),
              ' 还是没能坚持着说到最后。',
            ]);
          },
          () => {
            urara.say(
              `『没出息的杂鱼大人，哄骗学生的假好心老师，讨厌、最差劲了……』不要说了？但是 ${callname} 也很兴奋吧？『连 ${self_call} 都骗不过的变态训练员』……`,
            );
            era.print([
              '贴在 ',
              you.get_colored_name(),
              ' 的耳边尽情地做着『恶作剧』，',
              urara.get_colored_name(),
              ' 兴奋的神情带着掩饰不住的轻蔑与情欲。',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `${self_call} 一直在学做饭哦？但是 ${callname} 平时……应该不缺喜欢的人送来便当吧。说的对呢，${self_call} 在想的更未来的事情，所以饿了的话试着拜托 ${self_call} 也可以哦？`,
            );
            era.print([
              '对 ',
              you.get_colored_name(),
              ' 说着自己的事情，',
              urara.get_colored_name(),
              ' 的笑容似乎有些无奈又有些释然。',
            ]);
          },
          () => {
            urara.say(
              `大家又说 ${self_call} 更漂亮了啊，${self_call} 真的变漂亮了吗？不过我知道哦，${callname} 把 ${self_call} 变得乱七八糟……并不是在开玩笑哦？`,
            );
            era.print([
              '毫不掩饰的在独处时向 ',
              you.get_colored_name(),
              ' 贴近展示着身体，',
              urara.get_colored_name(),
              ' 纯粹的笑容逐渐变得有些浑浊。',
            ]);
          },
          () => {
            urara.say(
              `很舒服的事情，${self_call} 确实想和 ${callname} 做，但是日常训练也很重要哦？而且下次拿到一着的话，${callname} 也会更开心对吧，那个时候……`,
            );
            era.print([
              '虽然嘴上不情愿，但小',
              urara.uma_sex_title,
              '的脸颊还是挂起了红晕，不过那个时候又是要说什么呢？',
            ]);
          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `${self_call} 可以坐在这里吗？谢谢！那样的话……现在的 ${callname} 又在想些什么呢？`,
            );
            era.print([
              '温顺坐在 ',
              you.get_colored_name(),
              ' 的大腿上，',
              urara.get_colored_name(),
              ' 意外亲昵又安心的与 ',
              you.get_colored_name(),
              ' 的身体紧贴在一起。',
            ]);
          },
          () => {
            urara.say(
              `大家说 ${self_call} 的奔跑能够带来笑容，现在的 ${callname} 有好好找到相遇时的希望吗？`,
            );
            era.print([
              '带着相较以往成熟过头的微笑，',
              urara.get_colored_name(),
              ' 以的期望的神情靠在 ',
              you.get_colored_name(),
              ' 的身边。',
            ]);
          },
          () => {
            urara.say(
              `未来的家庭，还有孩子们……${self_call} 是不是不应该期待这些？毕竟 ${callname} 也……`,
            );
            era.print([
              '说着听起来前言不搭后语的话，小',
              urara.uma_sex_title,
              '的表情似乎变得有些忧愁？',
            ]);
          },
        );
      }
      if (love >= 100) {
        buffer.push(
          () => {
            urara.say(
              `就算不相遇去负责也没关系，我愿意信任这样你，我们之间依旧可以……虽然只是电视上的台词，但是 ${self_call} 并没有在表演哦，${callname} 又是怎么想的呢？`,
            );
            era.print([
              '既不是在演戏，也没有在说谎，',
              urara.get_colored_name(),
              ' 的笑容中只有对一人的爱意。',
            ]);
          },
          () => {
            urara.say(
              `明明最初是想让大家都开心而奔跑的，但现在却觉得只为了一个人也不坏……不过 ${callname} 如果又累了的话，${self_call} 也可以做 ${callname} 一个人的天使哦？`,
            );
            era.print([
              '像妻子般挽着 ',
              you.get_colored_name(),
              ' 的手臂，娇小的担当又在不经意间流露出了独属于一人的感慨。',
            ]);
          },
          () => {
            urara.say(
              `${self_call} 想要独占 ${callname} 哦？哪怕 ${self_call} 知道 ${callname} 的心不会独属于 ${self_call} 也一样。今天也一样，所以就算 ${callname} 拒绝接受，${self_call} 也不会放弃哦？`,
            );
            era.print([
              '以灿烂的笑容表达着令人错乱的独占欲，',
              urara.get_colored_name(),
              ' 的樱瞳里没有一点笑意。',
            ]);
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {string} self_call 春乌拉拉的自称
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   * @param {boolean} awake 乌拉拉是否醒着
   */
  select(urara, you, callname, self_call, high_relation, awake) {
    const buffer = [];
    const love = era.get('love:52');
    if (awake) {
      if (era.get('base:52:体力') < 0.4 * era.get('maxbase:52:体力')) {
        buffer.push(() => {
          urara.say(`呜啊……${callname}，${self_call}……动不了了……`);
          era.print([
            '躺在地上，',
            urara.get_colored_name(),
            ' 几乎没办法动弹了。',
          ]);
        });
        if (love > 0) {
          buffer.push(() => {
            urara.say('体力、体力已经飞走了……不行了……');
            era.print([
              '趴在地上的 ',
              urara.get_colored_name(),
              ' 晕晕乎乎地大喘着气。',
            ]);
          });
        }
        if (love >= 25) {
          buffer.push(() => {
            urara.say('不能输……不能输……');
            era.print([
              urara.get_colored_name(),
              ' 几次想要撑起自己的身体，但还是失败了。',
            ]);
          });
        }
        if (love >= 50) {
          buffer.push(() => {
            urara.say(`训、训练员……再拉我一把……`);
            era.print([
              '瘫坐在地上的 ',
              urara.get_colored_name(),
              ' 面色微红的向 ',
              you.get_colored_name(),
              ' 伸出手求助着。',
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(`让我再歇一会……一会就好了哦！哈啊……`);
            era.print([
              '即使累到撑坐在地上，',
              urara.get_colored_name(),
              ' 依旧尝试着再站起来。',
            ]);
          });
        }
        if (love >= 90) {
          buffer.push(() => {
            urara.say(`我、我觉得我还可以哦……`);
            era.print([
              '用力背起耳朵，用 ',
              you.get_colored_name(),
              ' 的身体作着支撑，',
              urara.get_colored_name(),
              ' 在努力地让自己不躺倒在地。',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(`呼……呼……没问题的！只要 ${callname} 在，就能继续加油……`);
            era.print([
              '即使站都站不稳，',
              urara.get_colored_name(),
              ' 依旧努力地撑起了身体。',
            ]);
          });
        }
      } else if (high_relation) {
        buffer.push(
          () => {
            urara.say(
              '明明是我先出门的，为什么大家却都比我先到了呢？真神奇啊！',
            );
            era.print([
              '虽然迟到了，但 ',
              urara.get_colored_name(),
              ' 依旧很开心的样子。',
            ]);
          },
          () => {
            urara.say(
              `${callname}！我今天刚好没迟到哟！我说不定比上次跑得更快了！`,
            );
            era.print([
              '只是刚好赶到，',
              urara.get_colored_name(),
              ' 却很满足的样子。',
            ]);
          },
          () => {
            urara.say(
              `在这边哦 ${callname}！快点过来吧！今天我也有好多好事能和 ${callname} 分享呢！`,
            );
            era.print([
              '与 ',
              you.name,
              ' 一同赶到的 ',
              urara.get_colored_name(),
              ' 笑着向 ',
              you.name,
              ' 招着手。',
            ]);
          },
        );
        if (love >= 50) {
          buffer.push(() => {
            urara.say(
              `${callname}……呜……诶？${callname}？！今、今天也来一起加油吧！`,
            );
            era.print([
              urara.get_colored_name(),
              ' 似乎在悄悄地做些什么，直到 ',
              you.get_colored_name(),
              ` 来到${urara.sex}身后才面色羞红的反应过来。`,
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(
              `能看到 ${callname} 真好呢！要是这样能一直持续下去的话……啊！${callname}！今天要来做什么呢？`,
            );
            era.print([
              '来得意外早的 ',
              urara.get_colored_name(),
              ' 开心地来到 ',
              you.get_colored_name(),
              ' 的身边。',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `为了能够早点见到 ${callname}，今天我也起得很早呦！看到 ${self_call}，${callname} 会觉得幸福吗？`,
            );
            era.print([
              '等待许久的 ',
              urara.get_colored_name(),
              ' 摇着尾巴，脸上洋溢着幸福的笑容。',
            ]);
          });
        }
      } else {
        buffer.push(
          () => {
            urara.say(`对不起哦 ${callname}，今天 ${self_call} 又迟到了……`);
            era.print([
              '明明没打算为迟到生气，但 ',
              urara.get_colored_name(),
              ' 面对 ',
              you.get_colored_name(),
              ' 时却缩了缩耳朵。',
            ]);
          },
          () => {
            urara.say(`赶上了哦！啊，${callname} 早上好……`);
            era.print([
              '气喘吁吁赶来的 ',
              urara.get_colored_name(),
              '，在看到 ',
              you.get_colored_name(),
              ' 后不知为何又后退了一点。',
            ]);
          },
        );
        if (love >= 50) {
          buffer.push(() => {
            urara.say(
              `${callname}！${self_call} 可以……不行，不能给 ${callname} 添麻烦！诶……真的什么都没有哦？`,
            );
            era.print([
              '在背对 ',
              you.get_colored_name(),
              ' 的时候 ',
              urara.get_colored_name(),
              ` 似乎在做什么，但${urara.sex}却一直是不愿承认的表情。`,
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(
              `${self_call} 到底为什么……啊，${callname} 就快到了，要赶紧做好准备才行……！`,
            );
            era.print([
              '来得很早的 ',
              urara.get_colored_name(),
              ' 在看到 ',
              you.get_colored_name(),
              ' 后赶紧站起来，打起精神向 ',
              you.get_colored_name(),
              ' 露出了笑容。',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `${callname}！今天、那个……可以对 ${self_call} 更温柔一点吗？只要一点点就好了！`,
            );
            era.print([
              '尽管还是有些畏缩的样子，但跟在 ',
              you.get_colored_name(),
              ' 身后的 ',
              urara.get_colored_name(),
              ' 还是笑着抓紧了 ',
              you.get_colored_name(),
              ' 的衣角。',
            ]);
          });
        }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P') ||
      era.get('base:52:性欲') >= lust_border.absent_mind
    ) {
      buffer.push(() => {
        urara.say('……呜嗯、啊……');
        era.print([
          '身体焦躁却无法醒来，',
          urara.get_colored_name(),
          ' 在睡梦中面色潮红的娇喘。',
        ]);
      });
    } else {
      buffer.push(
        () => {
          urara.say('嘿嘿……胡萝卜……');
          era.print([
            '小声说着梦话，',
            urara.get_colored_name(),
            ' 浅浅地翻了个身。',
          ]);
        },
        () => {
          urara.say('……');
          era.print([
            '仅仅发出着小小的呼吸声，今天熟睡的 ',
            urara.get_colored_name(),
            ' 意外的安静。',
          ]);
        },
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
   */
  async office_study(urara, you, callname, call_61) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '呜……这个数学题还是搞不懂！',
          callname,
          ' 能再帮我讲一次吗？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 愁眉苦脸地抱着头趴在桌子上，几乎失去了学习的动力。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '其实我有些科目还不错呦！就连 ',
          call_61,
          ' 也说如果其他科目也能像这样就好了呢！',
        ]);
        await era.printAndWait([
          '虽然 ',
          urara.get_colored_name(),
          ' 很自豪的样子，但这显然不是在夸',
          urara.sex,
          '吧。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '英语……虽然单词都记住了，但语法好难懂……',
          callname,
          ' 再帮我一下吧——',
        ]);
        await era.printAndWait([
          '面对向英语作业投降的 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 也只能再带',
          urara.sex,
          '复习起了课本。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '好近……',
          callname,
          ' 就在旁边……啊！对不起！得集中精力才行……呜……',
        ]);
        await era.printAndWait([
          '强占了 ',
          you.get_colored_name(),
          ' 双腿之间的 ',
          urara.get_colored_name(),
          ' 还在躁动着，今天的补习也开始向着奇怪的方向发展了……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '我知道学习很重要，可果然还是跑步更有趣！不过只要 ',
          callname,
          ' 陪着，难题就都能看得进去呢！',
        ]);
        await era.printAndWait([
          '靠在 ',
          you.get_colored_name(),
          ' 身边的 ',
          urara.get_colored_name(),
          '，似乎比往常更加有学习的动力了。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '！如果下次我考了个好成绩的话！可以……要点特殊的奖励吗？',
        ]);
        await era.printAndWait([
          '本来答应也无妨，但 ',
          urara.get_colored_name(),
          ' 那面色潮红、眼神飘忽的神情，',
          you.get_colored_name(),
          ' 开始犹豫要不要接下这颗炸弹。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async office_prepare(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '嗯嗯！到时候只要和往常一样『乌拉拉～』的冲出去就好了吧！',
        );
        await era.printAndWait(
          '歪着头看着白板上的注意事项，小担当的理解力还是那么「笔直」。',
        );
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！我也来帮你一起钉蹄铁吧！嗯！不会敲到手的！',
        ]);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 忧心忡忡的注视下，',
          urara.get_colored_name(),
          ' 有惊无险地完成了自己钉蹄铁的工作。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '诶？这次要这样跑……只要这样跑就能拿到一着对吧！明白了！',
        );
        await era.printAndWait([
          '虽然 ',
          urara.get_colored_name(),
          ' ',
          urara.sex,
          '的战术执行一直有些缺陷，但 ',
          you.get_colored_name(),
          ' 觉得这次的',
          urara.sex,
          '或许没问题。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '这样啊……那下次又赢了的话，',
          callname,
          ' 可以和乌拉拉做些……什、什么都没有！',
        ]);
        await era.printAndWait([
          '似乎是才察觉到自己差点就泄露出激进的欲望，',
          urara.get_colored_name(),
          ' 紧慌张地移开了视线。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '才不是『输了也无所谓的乌拉拉』！比赛可能会很难，但是为了 ',
          callname,
          '，乌拉拉不想再输了！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 一边认真地做着准备，一边流露出了少见的斗志。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '我明白的！不管是什么样的比赛，我都会让 ',
          callname,
          ' 的视线只停在乌拉拉身上的！',
        ]);
        await urara.say_and_wait([
          '所以，可以更多迷上乌拉拉吗，',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '散发着与粉色小马不符的惊人气势，与 ',
          you.get_colored_name(),
          ' 贴在一起的 ',
          urara.get_colored_name(),
          ' 樱瞳仿佛变得鲜红起来。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {boolean} awake 乌拉拉是否醒着
   */
  async talk(urara, you, callname, awake) {
    const buffer = [];
    const love = era.get('love:52');
    if (awake) {
      switch (era.get('cflag:52:干劲')) {
        case 2:
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '！今天的乌拉拉会非常厉害哦！我感觉到了哦！',
              ]),
            () =>
              urara.say_and_wait(
                '现在的乌拉拉是超级乌拉拉哦！因为状态超好的嘛！',
              ),
            () =>
              urara.say_and_wait(
                '每天都能这么开心的话，比赛一定可以拿到一着呢！',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '诶嘿嘿～只要有 ',
                callname,
                ' 在的话，就感觉自己什么都能做到！',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                '看好了哦 ',
                callname,
                '！现在就算是跑一整天乌拉拉也不会输呢！',
              ]),
            );
          }
          break;
        case 1:
          buffer.push(
            () =>
              urara.say_and_wait([
                '要『乌拉拉～』的上了哦！',
                callname,
                ' 也一起加油吧！',
              ]),
            () =>
              urara.say_and_wait(
                '好！今天的计划也要好好的完成！要开始热身了哟！',
              ),
            () =>
              urara.say_and_wait(
                '感觉身体就像鸟儿一样轻呢！现在就来做些什么吧！',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '只要和 ',
                callname,
                ' 一起的话，乌拉拉就可以状态绝佳哦！',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                '今天如果能提早结束的话，',
                callname,
                ' 可以和我一起玩吗？',
              ]),
            );
          }
          break;
        case 0:
          buffer.push(
            () =>
              urara.say_and_wait(
                '只要努力的话一定可以的！为了下次能拿到一着！',
              ),
            () =>
              urara.say_and_wait([
                '希望能做有趣的练习啊，',
                callname,
                '，有这种的吗──？',
              ]),
            () =>
              urara.say_and_wait([callname, '！今天的安排，现在就告诉我吧！']),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait('等结束之后，一起去吃些好吃的东西吧！'),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait('今天也会看着我吗？嗯！我知道的哦！'),
            );
          }
          break;
        case -1:
          buffer.push(
            () =>
              urara.say_and_wait(
                '啊呜……不过训练是很重要的，没问题，我会努力的！',
              ),
            () =>
              urara.say_and_wait(
                '嗯……稍微有些开心不起来，多想些开心的事情好了……！',
              ),
            () =>
              urara.say_and_wait(
                '诶？我其实很有精神哦！虽然耳朵和尾巴都耷拉着……！',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '只要 ',
                callname,
                ' 还在看着，就没问题吧……！',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait('虽然提不起精神，但是不能任性……！'),
            );
          }
          break;
        case -2:
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '……今天……今天可以把休息当做训练吗？',
              ]),
            () => urara.say_and_wait('应该是很开心的才对，但是开心不起来……'),
            () => urara.say_and_wait('身体好重啊，都没有力气了……'),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                callname,
                '，你带点心了吗？稍微想补充点糖分……',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                callname,
                '，我的干劲好像又找不到了，能帮我找找吗……',
              ]),
            );
          }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P')
    ) {
      buffer.push(
        () =>
          era.printAndWait([
            '在药效的影响下，',
            urara.get_colored_name(),
            ' 沉睡中的喘息声逐渐变得娇嫩而诱人。',
          ]),
        () =>
          era.printAndWait([
            '屈服于卑鄙的药物，失去意识的 ',
            urara.teen_sex_title,
            ' 此刻只是等待使用的肉人偶。',
          ]),
        () =>
          era.printAndWait([
            '肢体还在梦中抗拒地扭动着，小',
            urara.uma_sex_title,
            '的股间却已顺从的湿得一塌糊涂。',
          ]),
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            '随着小小的呼气声，小',
            urara.uma_sex_title,
            '在睡梦中翻了个身。',
          ]),
        () =>
          era.printAndWait([
            '平静的靠在 ',
            you.get_colored_name(),
            ' 身边，',
            urara.get_colored_name(),
            ' 安稳的沉睡着。',
          ]),
        () =>
          era.printAndWait([
            '睡着的 ',
            urara.get_colored_name(),
            ' 露出了开心的表情，是梦到什么好事了吗？',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_47 春乌拉拉对荒漠英雄的称呼
   */
  async office_gift(urara, you, callname, call_47) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(['嗯？', callname, ' 要送我礼物吗？谢谢！']);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 摇着尾巴，开心地收下了 ',
          you.get_colored_name(),
          ' 的礼物。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          ' 送我礼物，正好我也有好吃的要和 ',
          callname,
          ' 分享哦！嘿嘿～',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 笑着用萝卜与 ',
          you.get_colored_name(),
          ' 手中的礼物进行了交换。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '好！为了感谢 ',
          callname,
          ' 的礼物，今天的乌拉拉也会更努力的！',
        ]);
        await era.printAndWait([
          '收到 ',
          you.get_colored_name(),
          ' 的礼物后，',
          urara.get_colored_name(),
          ' 显得更有精神了。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '谢谢 ',
          callname,
          ' 的礼物！看来乌拉拉也要准备回礼了！诶？不用了？',
        ]);
        await era.printAndWait([
          '其实 ',
          urara.get_colored_name(),
          ' 几乎记不住回礼，但能看到',
          urara.sex,
          '的笑脸，回礼也不重要了。',
        ]);
      },
    );
    if (love > 0) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            call_47,
            ' 说不同的礼物会有，那 ',
            callname,
            ' 的礼物……果然是希望乌拉拉跑得更快吧！',
          ]);
          await era.printAndWait([
            '依旧是很有 ',
            urara.get_colored_name(),
            ' 风格的回答，但总感觉',
            urara.sex,
            '最后想到了别的什么。',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '并不是什么贵重的东西？不管贵不贵重乌拉拉都会珍惜的！这是 ',
            callname,
            ' 的礼物嘛！',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' 温和地笑着接过礼物，总感觉',
            urara.sex,
            '比以前要更成熟了。',
          ]);
        },
      );
    }
    if (love >= 50) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            '虽然不太明白，但收到 ',
            callname,
            ' 的礼物身体就变会得暖呼呼的！这是怎么回事呢……',
          ]);
          await era.printAndWait([
            '虽然说的是礼物的事情，但红着脸的 ',
            urara.get_colored_name(),
            ' 却始终热情地注视着 ',
            you.get_colored_name(),
            ' 的眼睛。',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '谢谢 ',
            callname,
            '！不过这样的话……这个也会有 ',
            callname,
            ' 的味道吗……？',
          ]);
          await era.printAndWait([
            '盯着手中的礼物，从 ',
            urara.get_colored_name(),
            ' 身上散发出的氛围变得有些奇怪起来。',
          ]);
        },
      );
    }
    if (love >= 75) {
      buffer.push(
        async () => {
          await urara.say_and_wait(
            '今天是特别的日子吗？要是每天都是特别的日子就好了呢！',
          );
          await urara.say_and_wait([
            '不过不是也没关系！对乌拉拉来说只要和 ',
            callname,
            ' 每天都很特别哦！',
          ]);
          await era.printAndWait([
            '抱着礼物紧紧贴在 ',
            you.get_colored_name(),
            ' 身边，将尾巴悄悄缠在 ',
            you.get_colored_name(),
            ' 的腿上，小小的担当开心的说道。',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '礼物……',
            callname,
            ' 不想收回礼的话，那就……先收下乌拉拉的『这个』吧！',
          ]);
          await era.printAndWait([
            '竖起耳朵，',
            urara.get_colored_name(),
            ' 掂起脚，趁 ',
            you.get_colored_name(),
            ' 不注意时「啾」地偷袭了 ',
            you.get_colored_name(),
            ' 的脸颊后，害羞地退开了。',
          ]);
        },
      );
    }
    if (love >= 100) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            '谢谢 ',
            callname,
            '！',
            callname,
            ' 是想要下次的一着呢？还是想要抱抱现在的乌拉拉呢？',
          ]);
          await urara.say_and_wait([
            '不过乌拉拉的话，推荐 ',
            callname,
            ' 都要哦？',
          ]);
          await era.printAndWait([
            '以纯真的语气说着的触动神经的话语，',
            urara.get_colored_name(),
            ' 渴求的樱瞳里摇曳着 ',
            you.get_colored_name(),
            ' 的倒影……',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '……',
            callname,
            '，不只是现在，乌拉拉未来的回礼，也可以好好期待吗？',
          ]);
          await era.printAndWait([
            '收下礼物的 ',
            urara.get_colored_name(),
            ' 静静地将手盖在小腹上，面带潮红的向 ',
            you.get_colored_name(),
            ' 问着模棱两可的问题。',
          ]);
          await era.printAndWait([
            '明白小',
            urara.uma_sex_title,
            '并没有期待回答，',
            you.get_colored_name(),
            ' 也只能无奈地做好迎接可能的未来的心理准备。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async office_cook(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '食材都下锅了，乌拉拉去看看米饭有没有热好吧！',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' 说着跑向了电饭煲的方向。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！我也来帮忙切菜吧！诶？不用了？',
        ]);
        await era.printAndWait([
          '想起 ',
          urara.get_colored_name(),
          ' 那不靠谱的用刀方法，',
          you.get_colored_name(),
          ' 毫不犹豫的拒绝了小',
          urara.uma_sex_title,
          '的帮忙请求。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '想吃什么？不用担心！虽然有些东西很难吃，但乌拉拉不会挑食的！',
        );
        await era.printAndWait([
          '听到 ',
          you.get_colored_name(),
          ' 的询问，',
          urara.get_colored_name(),
          ' 的回答一如既往的令人安心。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait('诶嘿嘿～不小心洒出来了……啊呜～');
        await era.printAndWait([
          '毫不在意地伸出小小的舌头，',
          urara.get_colored_name(),
          ' 像只小猫般舔着沾上酱料的手指，舌与指间不断拉出着细细的银丝……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '以后长大了，乌拉拉和 ',
          callname,
          ' 并排站在一起，那时我们一定会像夫妇一样吧！',
        ]);
        await era.printAndWait([
          '与 ',
          you.get_colored_name(),
          ' 一同将手中的肉饼逐渐拍实，',
          urara.get_colored_name(),
          ' 幻想着可能也不那么遥远的事情。',
        ]);
      });
    }
    if (love === 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '听说这样做能让 ',
          callname,
          ' 染上乌拉拉的味道，但 ',
          callname,
          ' 知道后会原谅乌拉拉吗……？',
        ]);
        await era.printAndWait([
          '带着无法抑制的火热思绪，小',
          urara.uma_sex_title,
          '颤抖着吐出舌头，将自己唾液悄悄混进了 ',
          you.get_colored_name(),
          ' 的饮料中……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async office_rest(urara, you, callname) {
    const love = era.get('love:52');
    const buffer = [
      async () => {
        await urara.say_and_wait([
          callname,
          '！帮我拿一下柜子上的点心可以吗？嗯！谢谢 ',
          callname,
          '！我会节制的！',
        ]);
        await era.printAndWait([
          '在接受了 ',
          you.get_colored_name(),
          '「要节制」的提醒后，',
          urara.get_colored_name(),
          ' 也高兴地从 ',
          you.get_colored_name(),
          ' 手中接过了点心盒。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '呼诶～好累啊……啊！谢谢 ',
          callname,
          '！嘿嘿～是冰镇的啊！',
        ]);
        await era.printAndWait([
          '将毛巾搭在头顶，刚结束锻炼的 ',
          urara.get_colored_name(),
          ' 接过了 ',
          you.get_colored_name(),
          ' 递来的运动饮料。',
        ]);
      },
      async () => {
        await urara.say_and_wait('今天的心情～也是『乌拉拉』～');
        await era.printAndWait([
          '哼着原创的歌，',
          urara.get_colored_name(),
          ' 开心地在室内的白板上用油性笔涂抹着什么。',
        ]);
      },
    ];
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait('嗯啊～对不起……呜……乌拉拉、会小声一点的……');
        await era.printAndWait([
          '明明只是在做按摩腿脚，',
          urara.get_colored_name(),
          ' 却在不停地发出令人脸红心跳的声音……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '是想要看大家的比赛录像吗？嗯！那我也和 ',
          callname,
          ' 一起看吧！',
        ]);
        await era.printAndWait([
          '坐进 ',
          you.get_colored_name(),
          ' 的怀中，',
          urara.get_colored_name(),
          ' 乖巧地替 ',
          you.get_colored_name(),
          ' 打开了训练员室的电视。',
        ]);
      });
    }
    if (love === 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '嘿嘿……',
          callname,
          '，要一直、一直记得彼此哦……',
        ]);
        await era.printAndWait([
          '因喘不过气而醒来，',
          you.get_colored_name(),
          ' 发现 ',
          urara.get_colored_name(),
          ' 正紧压在 ',
          you.get_colored_name(),
          ' 的身上低声耳语着什么……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async office_game(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '呜呜……为什么超不过去呢……再来一次！这次我一定可以做到的！',
        );
        await era.printAndWait([
          '在赛车游戏中连败了好几次后，',
          urara.get_colored_name(),
          ' 再次不愿放弃地握住了手柄。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '哼哼！',
          callname,
          '，这次我找到了击败你的方法了！看乌拉拉使出必杀技——',
        ]);
        await era.printAndWait([
          '在格斗游戏上被 ',
          you.get_colored_name(),
          ' 打得一败涂地前，',
          urara.get_colored_name(),
          ' 是这样自信地笑着说的。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '今、今天我们继续玩这个吧！诶？我、乌拉拉不害怕哦！',
        );
        await era.printAndWait([
          '尽管声音都在抖，但 ',
          urara.get_colored_name(),
          ' 还是勇敢地拿出了以前没能玩完的恐怖游戏。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '乌、乌拉拉不知道哦？这个游戏……是小数码借给我的哦？',
        ]);
        await era.printAndWait([
          '尽量让自己不被自动播放的羞耻画面所以吸引，',
          urara.get_colored_name(),
          ' 红着脸支支吾吾地向沉默的 ',
          you.get_colored_name(),
          ' 辩解着。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(() =>
        urara
          .say_and_wait([
            '打游戏要集中注意力哦……嘿！哈哈～',
            callname,
            '、',
            callname,
            '～好痒！乌拉拉知道错了～',
          ])
          .then(() =>
            era.printAndWait([
              '面对一直用挠痒痒等盘外招进行骚扰的 ',
              urara.get_colored_name(),
              '，',
              you.get_colored_name(),
              ' 最终选择放下手柄和担当笑着滚成了一团。',
            ]),
          ),
      );
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          ' 想要玩什么呢？乌拉拉玩什么都可以！只要和 ',
          callname,
          ' 一起玩的话……',
        ]);
        await era.printAndWait([
          '带着纯真笑容的 ',
          urara.get_colored_name(),
          ' 贴到了 ',
          you.get_colored_name(),
          ' 的怀里，俯在在耳边轻声吐息着。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async s_a_tree_hollow(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          callname,
          '，今天的树洞里面好像也有新的变化哟！',
        ]);
        await era.printAndWait([
          '听着 ',
          urara.get_colored_name(),
          ' 的提示，',
          you.get_colored_name(),
          ' 也观察起了树洞的里面。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '大家都让树洞先生带走坏心情，但向它分享些好事的话，也许会有好事发生也说不定呢！',
        );
        await era.printAndWait([
          '虽然就像孩子的异想天开，但这也正是 ',
          urara.get_colored_name(),
          ' 独有的祝福吧。',
        ]);
      },
    );
    if (love >= 25) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '！一起来向树洞先生分享些开心的事情吧！树洞先生也会很高兴的！',
        ]);
        await era.printAndWait([
          '早早地跑到了中庭，坐在树洞边等待着 ',
          you.get_colored_name(),
          ' 的 ',
          urara.get_colored_name(),
          ' 向 ',
          you.get_colored_name(),
          ' 笑着挥手说道。',
        ]);
      });
    }
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '传闻里树洞先生也能带走一些积攒过多的欲望，但是总觉得被这样做树洞先生也很可怜……',
        );
        await era.printAndWait([
          '尽管嘴上是这样想的，',
          urara.get_colored_name(),
          ' 还是将目光不停地移向可怜的枯树洞。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '树洞先生！可以告诉我怎么让 ',
          callname,
          ' 更喜欢我吗？嘿嘿～果然树洞先生也不知道！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 并不疑惑地向树洞抛出了这样的问题，或许这位小',
          urara.uma_sex_title,
          '早就有了自己的答案。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '有人说只要向树洞先生献上贡品，树洞先生就会让你渴望的人永远只看着你……',
        );
        await urara.say_and_wait(
          '虽然有考虑过……但那样不行！那样做就算树洞先生也不会开心的！',
        );
        await era.printAndWait([
          '即使已经有点吓人了，但想到 ',
          urara.get_colored_name(),
          ' 并不会在这里撒谎，明确不会这样做的',
          urara.sex,
          '还是那样令人安心。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_20 春乌拉拉对青云天空的称呼
   * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
   * @param {PrintedSpan} call_56 春乌拉拉对待兼福来的称呼
   */
  async s_a_dating(urara, you, callname, call_20, call_30, call_56) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '其实 ',
          call_20,
          ' 经常会在这里的树下睡午觉！嗯——今天好像不在的样子！',
        ]);
        await era.printAndWait([
          '如 ',
          urara.get_colored_name(),
          ' 所言，聚集在树下的晒太阳的猫猫中，确实没出现那位熟悉的卢毛',
          urara.uma_sex_title,
          '。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          call_56,
          ' 一般会在那里支一个无偿占卜摊，不过一旦做的太过就会被老师们赶走呢！',
        ]);
        await era.printAndWait([
          '现在小',
          urara.uma_sex_title,
          '所指的中庭一角空荡荡的，看来福来',
          urara.sex,
          '最近又被赶走了吧。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          ' 喜欢看绘本吗？我从 ',
          call_30,
          ' 那里拿到了新的绘本呢！',
        ]);
        await era.printAndWait([
          '坐在中庭的长椅上，',
          urara.get_colored_name(),
          ' 在两人中间笑着摊开了事先拿来的绘本。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '在太阳晒过之后，',
          callname,
          ' 的身上会有一股很好闻的味道……是真的哦！',
        ]);
        await urara.say_and_wait([
          '不过、乌拉拉的身上也有很好闻的味道哦！',
          callname,
          ' 也来闻闻吧……！',
        ]);
        await era.printAndWait([
          '在满载红晕的笑容中，',
          urara.get_colored_name(),
          ' 用',
          urara.uma_sex_title,
          '的力气将 ',
          you.get_colored_name(),
          ' 拉入了充斥着',
          urara.teen_sex_title,
          '体香的怀中……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '嘿嘿～和 ',
          callname,
          ' 在中庭里散步，感觉就像是约会一样！',
        ]);
        await urara.say_and_wait([
          '诶？就是在约会吗？那……乌拉拉好像每天都在和 ',
          callname,
          ' 约会的样子？',
        ]);
        await era.printAndWait([
          '约会应该不是这样算的吧？虽然与 ',
          urara.get_colored_name(),
          ' 一起的时间也总是很开心没错。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '一起躺在草坪上，总会感觉很安心！感觉在太阳下面要睡着了！',
        );
        await urara.say_and_wait([
          callname,
          '！要抱抱我吗？乌拉拉这里——还空着哦？',
        ]);
        await era.printAndWait([
          '躺在 ',
          you.get_colored_name(),
          ' 的身边，',
          urara.get_colored_name(),
          ' 温柔地张开柔软的怀抱，微笑着对 ',
          you.get_colored_name(),
          ' 发出了邀请。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
   * @param {PrintedSpan} call_32 春乌拉拉对爱丽速子的称呼
   * @param {PrintedSpan} call_47 春乌拉拉对荒漠英雄的称呼
   * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
   */
  async school_rooftop(
    urara,
    you,
    callname,
    call_15,
    call_32,
    call_47,
    call_61,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          callname,
          ' 你看，今天的便当里加了很好吃的蔬菜！嗯！是 ',
          call_61,
          ' 给我做的！',
        ]);
        await era.printAndWait([
          '看着外表有些焦但意外还不错的饭菜，',
          you.get_colored_name(),
          ' 在心里向担当那妈妈般的舍友表达着感谢。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          call_15,
          ' 经常会在这里练歌，但',
          urara.sex,
          '会怕打扰到别人，所以用餐时间不会来哦！',
        ]);
        await era.printAndWait([
          '正如 ',
          urara.get_colored_name(),
          ' 所说，大家也都是好孩子啊。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '便当很好吃！空气也很清新！但是……为什么要在天台吃便当来着？',
        );
        await era.printAndWait('对啊，说起来为什么要在天台上吃便当来着？');
        await era.printAndWait([
          '在突然获得了相同的疑问后，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 一同陷入了某些奇妙的思考。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '听说 ',
          call_32,
          ' ',
          urara.sex,
          '会卖一些特别的调味剂……那到底会是什么味道的？',
        ]);
        await era.printAndWait([
          '小声说着特别的话题的 ',
          urara.get_colored_name(),
          '，不知为何面色也变得像是在遐想什么般恍惚起来。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '嘿嘿～今天的便当是我亲手做的哦！一起来吃吧 ',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '幸福地笑着，',
          urara.get_colored_name(),
          ' 摆开双人份便当盒，将青涩但满含爱意的菜品铺在 ',
          you.get_colored_name(),
          ' 的面前。',
        ]);
        await era.printAndWait(
          '咽下由担当包着创可贴的手指夹来的饭菜，与担当笑容相仿的幸福感也涌上心头。',
        );
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '听 ',
          call_47,
          ' 说，世界上有一种叫爱情灵药的药剂，说是能让两人永远相爱！',
        ]);
        await urara.say_and_wait([
          '那样的药……加在便当里会影响饭菜的味道吗？',
          callname,
          ' 愿意吃下去吗？',
        ]);
        await era.printAndWait([
          '明明在思考很危险的事情，小',
          urara.uma_sex_title,
          '却依旧顾及着别人的意愿。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   * @param {number} jpy 渔获的卖出收入
   */
  async o_r_fishing(urara, you, callname, high_relation, jpy) {
    await era.printAndWait([
      '为了今天的户外活动，',
      you.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 带好钓鱼用具，一同来到了平常散步时会去的河边。',
    ]);
    await era.printAndWait([
      '虽然是跟 ',
      urara.get_colored_name(),
      ' 约好了今天要外出游玩，但其实 ',
      you.get_colored_name(),
      ' 也没想到会和 ',
      urara.get_colored_name(),
      ' 出来钓鱼。',
    ]);
    await era.printAndWait([
      '观察着旁边兴致勃勃的哼着Live歌曲的 ',
      urara.get_colored_name(),
      '，',
      you.get_colored_name(),
      ' 在心里默念着今天的 ',
      urara.get_colored_name(),
      ' 不要「五分钟热度」。',
    ]);
    await era.printAndWait([
      '只是话说回来，钓鱼能用作 ',
      urara.get_colored_name(),
      ' 的耐性训练吗？',
    ]);
    era.println();
    if (high_relation) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 本能的思考着，但一如既往的在得出答案前就被 ',
        urara.get_colored_name(),
        ' 的声音打断了。',
      ]);
      await urara.say_and_wait([
        '啊！',
        callname,
        ' 你看！水里的小鱼好像伸出手就能捉到呢！',
      ]);
      await era.printAndWait([
        '还没放下工具就蹲在了河边，',
        urara.get_colored_name(),
        ' 向 ',
        you.get_colored_name(),
        ' 兴奋地比划着手指。',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 旁边尽量保持着安静的样子，但在接近水边后',
        urara.sex,
        '的步伐也肉眼可见的越来越轻快起来。',
      ]);
      await urara.say_and_wait([callname, '！这里、这里就能看见哦！']);
      await era.printAndWait([
        '按捺不住自己的兴奋，小',
        urara.uma_sex_title,
        '刚到水边就笑着用手指接近了水面的鱼影。',
      ]);
    }
    era.println();

    era.printButton('「不可以直接跳下河抓鱼哦？」', 1);
    await era.input();

    await urara.say_and_wait('嗯！今天的乌拉拉会用钓竿好好的钓鱼！');
    await era.printAndWait([
      '至少准确的保证一下不会跳下去啊。面对担当仅是「忍住不去」的回答，',
      you.get_colored_name(),
      ' 也只得苦笑着摇了摇头。',
    ]);
    await era.printAndWait([
      '准备万全后，',
      you.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 一同抛出钓竿，鱼钩划出一道弧线，浮标在水面上成为一个不起眼的小点。',
    ]);
    await era.printAndWait([
      '只是话说回来，钓鱼能用作 ',
      urara.get_colored_name(),
      ' 的耐性训练吗？手中握着吊杆，',
      you.get_colored_name(),
      ' 又开始本能的思考起来。',
    ]);
    era.println();
    if (jpy > 0) {
      await urara.say_and_wait([callname, '！乌拉拉这次又抓到了！']);
      await era.printAndWait([
        '水桶随着时间的推移被逐渐装满，',
        urara.get_colored_name(),
        ' 也正将最后一条「战利品」从水中拖出来。',
      ]);
      await era.printAndWait([
        '如果 ',
        urara.get_colored_name(),
        ' 能真的在这里听话，没有亲自下水去把鱼从河里摸出来就更好了。',
      ]);
      await era.printAndWait([
        '哭笑不得的看着 ',
        urara.get_colored_name(),
        ' 沾湿大半的衣物和',
        urara.sex,
        '怀中的大鱼，',
        you.get_colored_name(),
        ' 还是一如既往的没能说出什么责备的话。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 确实很厉害啊，不过随便下水的话就算是',
        urara.uma_sex_title,
        '也是很容易着凉的。',
      ]);
      await era.printAndWait([
        '收起钓竿，',
        you.get_colored_name(),
        ' 伸手擦了擦小',
        urara.uma_sex_title,
        '还沾着水珠的头发，而 ',
        urara.get_colored_name(),
        ' 也在要回应时轻声打了个可爱的喷嚏。',
      ]);
      await era.printAndWait([
        '结果还是会变成这样啊。笑着将外套搭在有点愧疚的 ',
        urara.get_colored_name(),
        ' 身上，',
        you.get_colored_name(),
        ' 与担当拎着满满两桶收获踏上归路。',
      ]);
      await era.printAndWait([
        '这次就给险些着凉的小',
        urara.uma_sex_title,
        '炖个鱼汤吧。',
      ]);
    } else {
      await urara.say_and_wait('嘿嘿……到底……有没有上钩呢……');
      await era.printAndWait([
        '收拾好放钓具的箱子与两只空桶，',
        you.get_colored_name(),
        ' 背起了断断续续说着梦话的担当。',
      ]);
      await era.printAndWait([
        '即使本来没什么耐性的 ',
        urara.get_colored_name(),
        ' 为了能有收获愿意等到睡着，今天的成果也是一看就知道是毫无疑问的零。',
      ]);
      await era.printAndWait([
        '难得 ',
        urara.get_colored_name(),
        ' 认真起来，一无所获确实有些可惜，但一想钓鱼本来就是这样的事，心情上就只剩下一点无奈了。',
      ]);
      await era.printAndWait([
        '不过虽然体检表上体重写的是稍微变重，但 ',
        urara.get_colored_name(),
        ' 真是意外的轻啊。',
      ]);
      await era.printAndWait([
        '想着对',
        urara.teen_sex_title,
        '来说可能有些失礼的内容，',
        you.get_colored_name(),
        ' 背着熟睡的悠悠地小 ',
        urara.get_colored_name(),
        ' 走在来时的路上。',
      ]);
      await era.printAndWait([
        '只是不知道，',
        urara.get_colored_name(),
        ' 在梦里究竟能钓到多少条鱼啊……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
   */
  async o_r_walking(urara, you, callname, call_30) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '今天这里的空气也很新鲜，感觉身体更轻盈了！',
          callname,
          '！我现在可以跑一跑吗？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 同意了担当的请求，但是考虑到 ',
          urara.get_colored_name(),
          ' 摔倒的可能性，',
          you.get_colored_name(),
          ' 跟着 ',
          urara.get_colored_name(),
          ' 一起小跑起来。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '这附近有很多很多漂亮的小虫子呦！看我抓一些来给 ',
          callname,
          '……诶？不行？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 很感谢担当想要分享的心意，但散步时抓虫子还是太有 ',
          urara.get_colored_name(),
          ' 的风格了……',
        ]);
        await era.printAndWait([
          '这样想着，',
          you.get_colored_name(),
          ' 往被及时叫停的担当身上喷着驱虫水。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '其实大家们偶尔也会来这里哦！果然和别人一起来这里才会更有趣！',
        );
        await urara.say_and_wait(
          '不要兴奋地和大家一起跳进河里……？我、我知道啦……',
        );
        await era.printAndWait([
          '虽然还是很脱线，不过 ',
          urara.get_colored_name(),
          ' 有朋友陪着的话，应该不要紧的吧。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '这里很少有人来吧！和 ',
          callname,
          ' 一起玩的话也不会被打扰！真是个好地方呢！',
        ]);
        await urara.say_and_wait([
          '诶嘿嘿～虽然那样做不好，但这里只有乌拉拉和 ',
          callname,
          ' 两人哦……',
        ]);
        await era.printAndWait([
          '在树林的阴影映照下，',
          urara.get_colored_name(),
          ' 微红的脸颊似乎变得有些可怕起来……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '！再靠近一点吧……诶嘿嘿～总觉得像是在河边约会呢！',
          callname,
          ' 是怎么想的？',
        ]);
        await era.printAndWait([
          '似乎是期待着 ',
          you.get_colored_name(),
          ' 的回答，',
          urara.get_colored_name(),
          ' 纯洁的笑容染上了一抹害羞的红晕。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          call_30,
          ' 的书上有很多主角在河边幽会的故事呢！在牵手之后，接下来会发生的是……',
        ]);
        await urara.say_and_wait([
          '嘿嘿～其实都是些不好懂的事呢！但是就算不那样做，我和 ',
          callname,
          ' 也会在一起哦！',
        ]);
        await era.printAndWait([
          '紧紧地牵着 ',
          you.get_colored_name(),
          ' 的手，',
          urara.get_colored_name(),
          ' 对 ',
          you.get_colored_name(),
          ' 如大人般温柔的笑着。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_3 春乌拉拉对东海帝王的称呼
   * @param {PrintedSpan} call_24 春乌拉拉对摩耶重炮的称呼
   */
  async o_s_arcade(urara, teio, maya, you, callname, call_3, call_24) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait('眼睛好花啊……为什么穿不过去啊，呜呃……');
        await era.printAndWait([
          '趴在Game Over的机台前，',
          urara.get_colored_name(),
          ' 的眼中的樱花此刻被转成了圈圈。',
        ]);
        await era.printAndWait([
          '经过几次勇敢的尝试后，不服输的 ',
          urara.get_colored_name(),
          ' 最终还是被高难STG眼花缭乱的弹幕击坠了。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '格斗游戏的机台总有很多人！不过我可以理解哦！因为大家的必杀技真的非常帅气！',
        );
        await era.printAndWait([
          '一边以可爱的样子模仿着格斗人物的动作，',
          urara.get_colored_name(),
          ' 一边带着 ',
          you.get_colored_name(),
          ' 坐到了游戏机台前。',
        ]);
        await era.printAndWait([
          '不过 ',
          urara.get_colored_name(),
          ' 似乎还是不擅长格斗游戏，得想想这次该怎么放点水了……',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！这里也在卖游戏光盘呢！啊！这是 ',
          call_3,
          ' 和 ',
          call_24,
          ' 都最近喜欢的游戏！',
        ]);
        await era.printAndWait([
          '拿起一份最近很火热的游戏，',
          urara.get_colored_name(),
          ' 的笑容与恐怖的封面形成了鲜明的反差。',
        ]);
        await era.printAndWait([
          '不过 ',
          you.get_colored_name(),
          ' 也不觉得 ',
          teio.get_colored_name(),
          ' 和 ',
          maya.get_colored_name(),
          ' 会喜欢恐怖游戏，恐怕',
          urara.couple_title,
          '又是人云亦云的顺便入手了吧。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '那个样子确实很难移开视线啊……大家都喜欢那样的事吗？',
        );
        await urara.say_and_wait([
          callname,
          ' 会想看 ',
          urara.get_colored_name(),
          ' 穿成大人的样子、跳大人的舞吗？如果 ',
          callname,
          ' 想的话……',
        ]);
        await era.printAndWait([
          '目光被跳舞机待机画面上不断闪过的大尺度舞蹈动画所吸引，',
          urara.get_colored_name(),
          ' 拽着 ',
          you.get_colored_name(),
          ' 衣角的手力度又加重了几分。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '不管玩什么游戏，果然跟 ',
          callname,
          ' 一起玩才会更开心啊！',
        ]);
        await era.printAndWait([
          '看着路过的学生与机台的彩灯，',
          urara.get_colored_name(),
          ' 与 ',
          you.get_colored_name(),
          ' 十指相合，幸福的靠在 ',
          you.get_colored_name(),
          ' 的身旁。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait('今天普通的夹娃娃吧！普通的夹娃娃就好了！');
        await era.printAndWait([
          urara.get_colored_name(),
          ' 脸颊微红的宣言道，在 ',
          you.get_colored_name(),
          ' 认真的夹娃娃时突然钻到了胸前，用小嘴轻轻偷袭了 ',
          you.get_colored_name(),
          ' 的颈根。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {boolean} has_ticket 是否抽到温泉旅行券
   */
  async o_s_drawing(urara, you, callname, has_ticket) {
    await era.printAndWait([
      '为了补充训练员室冰箱内缺少的食材，',
      you.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 一同来到商店街进行采购。',
    ]);
    await era.printAndWait([
      '本来只是来采购食品的，但不知为何准备回去时却被聚集的人们吸住了视线。',
    ]);
    await era.printAndWait(
      '或许也被气氛所感染了，逐渐变得相似的担当与训练员也默契的钻进了人群。',
    );
    await era.printAndWait(
      '跟随着摇杆转动的多边形盒子在清脆的响声中停止，又有位伤心人多了包纸巾……',
    );
    await you.say_and_wait(
      '但是商店街抽奖，记得没错的话是需要抽奖券的吧，那么我们还是……？',
    );
    await era.printAndWait([
      '结果刚回过头，',
      you.get_colored_name(),
      ' 就看到了 ',
      urara.get_colored_name(),
      ' 在口袋中找寻一番后，变魔术般地摸出了一张抽奖券。',
    ]);
    await era.printAndWait([
      '……嗯，如果是商店街的小偶像 ',
      urara.get_colored_name(),
      ' 的话，倒也是件非常合理的事。',
    ]);
    await era.printAndWait([
      '看着眼神闪闪发光跃跃欲试的 ',
      urara.get_colored_name(),
      '，',
      you.get_colored_name(),
      ' 也不动声色地对',
      urara.sex,
      '比了个大拇指。',
    ]);
    await urara.say_and_wait([callname, '！要一起转了哦！一二——！']);
    await era.printAndWait([
      '在兴高采烈的 ',
      urara.get_colored_name(),
      ' 的邀请下，',
      you.get_colored_name(),
      ' 上前与担当一同摇下摇杆。',
    ]);
    await era.printAndWait([
      '在小',
      urara.uma_sex_title,
      '充满期待的注视中，盒子在旋转中不断发出着不同的脆响，随后——',
    ]);
    if (has_ticket) {
      await you.say_as_passer_by_and_wait(
        '工作人员A',
        '恭喜啊小乌拉拉！抽到特等奖『温泉旅游券』了！！',
      );
      await era.printAndWait([
        '在主持抽奖的工作人员的祝贺声中，一张温泉旅馆的旅行券被递到了 ',
        urara.get_colored_name(),
        ' 手中。',
      ]);
      await era.printAndWait([
        '不过券上的温泉旅馆倒也眼熟，似乎是一直与中央特雷森有着合作的店家。',
      ]);
      await urara.say_and_wait('温泉？是说我能去泡温泉了吗？太好了！');
      await urara.say_and_wait([
        callname,
        '！我们要哪天去？明天？后天？还是大后天？还是说……',
      ]);

      era.printButton('「先留着当作比赛后的奖励怎么样？」', 1);
      await era.input();

      await era.printAndWait([
        '考虑到现在时机太早，又考虑到要让 ',
        urara.get_colored_name(),
        ' 有继续努力的兴致，',
        you.get_colored_name(),
        ' 如此建议道。',
      ]);
      await urara.say_and_wait([
        '嗯！就这样决定好了！那券就由 ',
        callname,
        ' 收着吧！',
      ]);
      await urara.say_and_wait([
        '我也会努力拿到奖励的！到时候要一起开心地去温泉吧！',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 点点头，将温泉券笑着交到了 ',
        you.get_colored_name(),
        ' 的手中。',
      ]);
      await urara.say_and_wait('哼哼～真期待哦，以后收到奖励的那天！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着 ',
        urara.get_colored_name(),
        ' 对未来充满期待的开心笑颜，手中券的分量仿佛也变重了。',
      ]);
      await era.printAndWait([
        '为了能够那合适的时机能够早日到来，要和 ',
        urara.get_colored_name(),
        ' 一起加油了。',
      ]);
    } else {
      const buffer = [
        async () => {
          await you.say_as_passer_by_and_wait(
            '工作人员A',
            '恭喜抽到一等奖！奖品是『上等胡萝卜汉堡排』！',
          );
          await era.printAndWait(
            '随后，一盘还冒着热气的胡萝卜汉堡排便端到了两人面前。',
          );
          await urara.say_and_wait([
            '哦！',
            callname,
            '，这个看着就很好吃呢！我可以现在就尝尝它吗？',
          ]);
          await era.printAndWait(
            '嗯？的确看上去就很上等，甚至在视觉上闪着光啊，不过……',
          );

          era.printButton('「这里不太方便，总之还是带回学园里吃吧！」', 1);
          await era.input();

          await urara.say_and_wait([
            '说的也是哦！那一起回去吧 ',
            callname,
            '！',
          ]);
          await era.printAndWait([
            '在回到学园后，',
            urara.get_colored_name(),
            ' 与 ',
            you.get_colored_name(),
            ' 一同分享了这份看上去就很厉害的汉堡排。',
          ]);
          await era.printAndWait(
            '不过不管几次都觉得很神奇啊，明明是早就准备好的成品，竟然还能有这种味道。',
          );
          await era.printAndWait(
            '如果在训练员室里就能直接做出相同的味道的话就好了……有那种办法吗？',
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            '工作人员A',
            '恭喜！二等奖，奖品是『一筐胡萝卜』！',
          );
          await era.printAndWait([
            '虽然是二等奖，但对 ',
            urara.get_colored_name(),
            ' 来说这个才是最值得开心的吧。',
          ]);
          await era.printAndWait([
            '正如 ',
            you.get_colored_name(),
            ' 所想的那样，',
            urara.get_colored_name(),
            ' 一边感谢一边接过了萝卜，随后高兴地转向了 ',
            you.get_colored_name(),
            '。',
          ]);
          await urara.say_and_wait([
            callname,
            '！回去之后我们一起把胡萝卜分给大家吧！',
          ]);
          await urara.say_and_wait(
            '要分的人很多呢！不过首先要一起把这些胡萝卜抱回去才行呢！',
          );

          era.printButton('「嗯，这些都让我来拿吧！」', 1);
          await era.input();

          await era.printAndWait([
            '从 ',
            urara.get_colored_name(),
            ' 那里接过了那一大筐胡萝卜后，',
            you.get_colored_name(),
            ' 与 ',
            urara.get_colored_name(),
            ' 一起踏上了回去的路。',
          ]);
          await era.printAndWait([
            '但在回去的路上，你们又受到了商店街的大叔和阿姨们热烈的祝福与关照。',
          ]);
          await era.printAndWait([
            '不过现在这个分量，就算发也很难发完吧？',
            urara.get_colored_name(),
            ' 还真是受欢迎的好孩子啊……',
          ]);
          await era.printAndWait([
            '抱着不知不觉中变多了不少的胡萝卜，',
            you.get_colored_name(),
            ' 冒出了点『幸福的烦恼』。',
          ]);
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            '工作人员A',
            '三等奖！奖品是『一根胡萝卜』！」',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            ' 一边向工作人员道谢，一边高兴地接过了胡萝卜。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 知道一根胡萝卜 ',
            urara.get_colored_name(),
            ' 也会开心，可总觉得如果不做点什么的话，心就静不下来。',
          ]);
          await era.printAndWait([
            '但就在 ',
            you.get_colored_name(),
            ' 还犹豫着该说些什么时，',
            urara.get_colored_name(),
            ' 却率先行动起来。',
          ]);
          await era.printAndWait([
            '『啪』的一声脆响，',
            urara.get_colored_name(),
            ' 将胡萝卜从中间掰成两半，开心的把更粗的那半递向了 ',
            you.get_colored_name(),
            '。',
          ]);
          await urara.say_and_wait([
            '没关系的，就算只有一根胡萝卜也是胡萝卜！',
            callname,
            '！这块更大的给你吃哦！',
          ]);

          era.printButton('「……谢谢。」', 1);
          await era.input();

          await era.printAndWait([
            '又一次被 ',
            urara.get_colored_name(),
            ' 触动的 ',
            you.get_colored_name(),
            ' 原本想好了很多话，可当下能说出的却只剩一句简单的感谢。',
          ]);
          await urara.say_and_wait(['嘿嘿～不客气哦 ', callname, '！']);
          await era.printAndWait([
            '但 ',
            urara.get_colored_name(),
            ' 并不介意，带着一如既往的笑容，小',
            urara.uma_sex_title,
            '将对半分的萝卜塞到了 ',
            you.get_colored_name(),
            ' 的手中。',
          ]);
          await era.printAndWait([
            '在周围人同样带有善意与被治愈的目光中，',
            you.get_colored_name(),
            ' 与 ',
            urara.get_colored_name(),
            ' 分享了那根似乎有了特别意义的胡萝卜。',
          ]);
          await era.printAndWait([
            '不管以后外表变成什么样，',
            urara.get_colored_name(),
            ' 也一直会是善良的好孩子吧。',
          ]);
          await era.printAndWait([
            '望着回去时的天空，',
            you.get_colored_name(),
            ' 如此相信着。',
          ]);
        },
        async () => {
          await urara.say_and_wait('哎呀，是纸巾啊……！');
          await era.printAndWait([
            '在接过纸巾后，看起来有点失落的 ',
            urara.get_colored_name(),
            ' 却反过来开始安慰起 ',
            you.get_colored_name(),
            ' 来。',
          ]);
          await urara.say_and_wait([
            callname,
            '！不要失落哦，抽奖很意思，纸巾也很不错哦！',
          ]);
          await era.printAndWait([
            '虽然 ',
            urara.get_colored_name(),
            ' 在很用力地安慰',
            urara.sex,
            '的训练员，但那副样子还是更像在安慰自己。',
          ]);

          era.printButton(`「嗯，没关系的，${callname} 不会伤心的。」`, 1);
          await era.input();

          await era.printAndWait([
            '听到 ',
            you.get_colored_name(),
            ' 的回应，',
            urara.get_colored_name(),
            ' 开心地笑了起来，但在维持了一会儿后还是变得勉强起来。',
          ]);
          await urara.say_and_wait('不过，果然还是想吃胡萝卜啊……');
          await era.printAndWait([
            '虽然在努力隐藏着失落，',
            urara.get_colored_name(),
            ' 的耳朵还是垂了下来。',
          ]);
          await era.printAndWait([
            '结果还是变得有点没精神了啊。在回去的路上，',
            you.get_colored_name(),
            ' 安慰地摸着 ',
            urara.get_colored_name(),
            ' 的头。',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} opera 好歌剧
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_15 春乌拉拉对好歌剧的称呼
   */
  async o_s_ktv(urara, opera, you, callname, call_15) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '需要练习唱歌的时候我经常和大家一起来这里的！',
          callname,
          ' 想听什么我都能唱哦！',
        ]);
        await era.printAndWait([
          '率先拿起话筒，',
          urara.get_colored_name(),
          ' 想要向 ',
          you.get_colored_name(),
          ' 展示练习成果般笑着向 ',
          you.get_colored_name(),
          ' 问道。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '把灯光打开后就像要上Live了一样呢！',
          callname,
          ' 也一起来唱吧！',
        ]);
        await era.printAndWait([
          '带着玩心打开了天花板的灯球，',
          urara.get_colored_name(),
          ' 开心地拉着 ',
          you.get_colored_name(),
          ' 一起拿起了话筒。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '今天要唱什么呢？嘿嘿～其实我在 ',
          call_15,
          ' 那里学到了新歌哦！',
        ]);
        await era.printAndWait([
          '尽管从 ',
          opera.get_colored_name(),
          ' 的那学来的新歌听上去有些不妙，',
          you.get_colored_name(),
          ' 还是期待着 ',
          urara.get_colored_name(),
          ' 开始唱的那一刻。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '……诶、诶？',
          callname,
          '，隔壁究竟是在……？',
        ]);
        await era.printAndWait([
          '听着隔壁包间不断传出的水声与呻吟声，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 一时间不知道该做什么比较好……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '怎么样呢 ',
          callname,
          '？有被乌拉拉击、击中了心的感觉吗？',
        ]);
        await era.printAndWait([
          '以稚嫩的声音生疏地唱完一首情歌类偶像曲，',
          urara.get_colored_name(),
          ' 害羞地向 ',
          you.get_colored_name(),
          ' 摆了一个爱心pose。',
        ]);
        await era.printAndWait([
          '总觉得',
          urara.sex,
          '有点勉强自己了，但果然好可爱……',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '，是香草芭菲哦！把嘴张开！啊——！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 本能地咽下了 ',
          urara.get_colored_name(),
          ' 舀起的冰激凌，并疑惑地思考起为什么要在卡拉OK里这样做。',
        ]);
        await era.printAndWait([
          '但背过身的 ',
          you.get_colored_name(),
          '，也错过了担当悄悄红着脸伸出舌头，细细地舔着 ',
          you.get_colored_name(),
          ' 含过的勺子的眼神迷离的样子……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async o_s_movie(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '爆米花很好吃、饮料也很好喝！但是果然还是电影更重要！',
        );
        await urara.say_and_wait('这次的话，我想要集中精力看电影！');
        await era.printAndWait([
          '不过虽然 ',
          urara.get_colored_name(),
          ' 这么说，察觉到',
          urara.sex,
          '还是想吃的 ',
          you.get_colored_name(),
          ' 依旧买了爆米花和饮料。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '没关系的 ',
          callname,
          '！只要够有趣的话乌拉拉就不会睡着……大概吧！',
        ]);
        await era.printAndWait([
          '在选择了意外的严肃题材的电影后，',
          urara.get_colored_name(),
          ' 对 ',
          you.get_colored_name(),
          ' 自信地宣言道。',
        ]);
        await era.printAndWait([
          '不过，真的没关系吗？看着 ',
          urara.get_colored_name(),
          ' 的笑脸，',
          you.get_colored_name(),
          ' 还是有些担忧。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '《幻之马》又复映了！每次看都感觉主角的样子很亲切！但是，为什么呢？',
        ]);
        await era.printAndWait([
          '在路过其中一个放映厅时，看着墙上的信息，',
          urara.get_colored_name(),
          ' 对 ',
          you.get_colored_name(),
          ' 这样说道。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 一直是很敏锐的，或许',
          urara.sex,
          '真的在这部经典电影里发现了重要的事也说不定。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '听说这个电影里有吓人的桥段，但是乌拉拉很勇敢哦！',
        );
        await urara.say_and_wait([
          '所以如果 ',
          callname,
          ' 被吓到的话，乌拉拉可以安慰 ',
          callname,
          ' 哟？',
        ]);
        await era.printAndWait([
          '在黑暗中悄悄拉起扶手，',
          urara.get_colored_name(),
          ' 透过肌肤接触，将加速心跳与上升的体温传递给 ',
          you.get_colored_name(),
          '。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '嘿嘿～虽然还是有些不懂的地方，但男主和女主的关系真好啊！',
        );
        await urara.say_and_wait([
          '不过 ',
          callname,
          ' 和乌拉拉也是这么好的对吧？这点乌拉拉很清楚哟！',
        ]);
        await era.printAndWait([
          '在影院座椅的扶手上，',
          urara.get_colored_name(),
          ' 带着稍显成熟的微笑紧紧握住了 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '如果有一天乌拉拉的故事也能变成电影的话……乌拉拉希望主角一定要以 ',
          callname,
          ' 为原型！',
        ]);
        await urara.say_and_wait(
          '因为，我希望『乌拉拉』，永远都是只属于『训练员』的担当！',
        );
        await era.printAndWait([
          '安心地靠在 ',
          you.get_colored_name(),
          ' 的肩头，',
          urara.teen_sex_title,
          '樱瞳里的光随着荧屏的变化柔和地闪烁着。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(urara, you, callname, high_relation, dice) {
    await era.printAndWait([
      '为了兴致正旺的 ',
      urara.get_colored_name(),
      '，也为了在下次比赛前讨个彩头，',
      you.get_colored_name(),
      ' 决定带',
      urara.uma_sex_title,
      '一起去神社看看。',
    ]);
    await era.printAndWait('毕竟也没有要紧的事，再者来都来了。');
    await era.printAndWait([
      '只是在踏上阶梯时，',
      you.get_colored_name(),
      ' 感受到这里的氛围与平常来时稍显不同。',
    ]);
    await era.printAndWait([
      '一般来说这座小神社总是热闹的，除了周围的居民与会在这里玩耍小孩子，还会有借着长阶梯进行训练的',
      urara.uma_sex_title,
      '们。',
    ]);
    await era.printAndWait(
      '但是今天的阶梯却格外的安静，除了两侧林地的摇动与鸟鸣外，剩下的就只有两人的脚步声了。',
    );
    era.println();
    if (high_relation) {
      await era.printAndWait([
        '只有两人的攀登确实缺少了一丝生气，但好好牵着 ',
        you.get_colored_name(),
        ' 的手的 ',
        urara.get_colored_name(),
        ' 其实也一直以笑脸伴在 ',
        you.get_colored_name(),
        ' 的身边。',
      ]);
      await urara.say_and_wait('总感觉今天的这里说不上来的干净！');
      await era.printAndWait([
        '虽然没弄懂指的是哪方面，但 ',
        you.get_colored_name(),
        ' 点头认同了 ',
        urara.get_colored_name(),
        ' 的看法，心情也在同',
        urara.uma_sex_title,
        '相伴中逐渐明快起来。',
      ]);
    } else {
      await era.printAndWait([
        '在犹豫了片刻后，',
        urara.get_colored_name(),
        ' 还是上前一步牵住 ',
        you.get_colored_name(),
        ' 的手，并突然站到了 ',
        you.get_colored_name(),
        ' 的身前。',
      ]);
      await urara.say_and_wait([callname, '！耐力训练，要跟上哦？']);
      await era.printAndWait([
        '在还没反应过来前，',
        you.get_colored_name(),
        ' 就被突然恶作剧般笑着跑起来的担当拉上了下一节台阶——',
      ]);
    }
    era.println();

    await era.printAndWait([
      '随着被跑在前面的 ',
      urara.get_colored_name(),
      ' 牵着踏上最后一节台阶，熟悉的小神社出现在阶梯顶端的鸟居之后。',
    ]);
    await era.printAndWait(
      '不管氛围如何变化，今天的它依旧在此安静地等候着参拜者。',
    );
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 一同站到了神社的钱箱前，',
      you.get_colored_name(),
      ' 取出两枚硬币，将其中一枚送到了 ',
      urara.get_colored_name(),
      ' 手中。',
    ]);
    await era.printAndWait([
      '对着硬币眨了眨眼睛后，',
      urara.get_colored_name(),
      ' 竖起耳朵，心领神会的攥紧了它……',
    ]);
    await era.printAndWait([
      '在简单地做完不那么标准的仪式后，',
      you.get_colored_name(),
      ' 帮 ',
      urara.get_colored_name(),
      ' 取下叠好的签子，准备与 ',
      urara.get_colored_name(),
      ' 一同展开手中的纸条——',
    ]);
    if (dice < 0.5) {
      await urara.say_and_wait('啊！这次的运气不错呢！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' 高兴的向 ',
        you.get_colored_name(),
        ' 展示着手中展开的的纸条，上面印着的结果也确实不错。',
      ]);

      era.printButton('「恭喜，我的结果也不错。」', 1);
      await era.input();

      await urara.say_and_wait([
        '抽签能抽到好结果总是很开心！',
        callname,
        ' 也开心起来了吧！',
      ]);
      await era.printAndWait([
        '不过开心的原因比起抽到好签，更多是因为 ',
        urara.get_colored_name(),
        ' 才对。看着小小担当的笑脸，',
        you.get_colored_name(),
        ' 也在不知不觉中浅浅勾起了嘴角。',
      ]);
      await era.printAndWait([
        '看着在神社的院子中像只开心的小鸟般打着转的 ',
        urara.get_colored_name(),
        '，熟悉的温暖感又充满了 ',
        you.get_colored_name(),
        ' 的身体。',
      ]);
      await era.printAndWait([
        '心情变得轻松了不少，这样最近也能好好努力了吧？回想着两人的初次相遇，',
        you.get_colored_name(),
        ' 深吸了一口气。',
      ]);
      await urara.say_and_wait([callname, '，要走了哦——']);
      await era.printAndWait([
        '停在红色的鸟居前，粉色小鸟正招手呼唤着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '在离开之前，越过林地的枝叶望向天空，',
        you.get_colored_name(),
        ' 向不知道在哪里注视着的某人发出了感谢。',
      ]);
      await era.printAndWait('今天是个好日子啊。');
    } else {
      await urara.say_and_wait([
        '诶？',
        callname,
        '，这次的结果好像有些糟糕，',
        callname,
        ' 的也是吗？',
      ]);
      await era.printAndWait([
        '展示着手中内容并不是很好的纸条，',
        urara.get_colored_name(),
        ' 看起来有点失落，但随后就像并没在意般笑着转向了 ',
        you.get_colored_name(),
        '。',
      ]);

      era.printButton('「嗯，不过我觉得不要紧。」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！运气不好是常有的事嘛，以前的乌拉拉也总是输个不停呢！一起放心的回去吧！',
      );
      await era.printAndWait([
        '听到 ',
        you.get_colored_name(),
        ' 的回答，',
        urara.get_colored_name(),
        ' 安心地笑起来，上前拉住了 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      await era.printAndWait(
        '随后，准备回家的二人便在迈步有些滑稽的一同向前扑了出去，不知何时，两人的鞋带无声无息地散掉了。',
      );
      await era.printAndWait(
        '不过看着坐在地上的彼此那茫然的脸，同时被鞋带绊倒的二人还是莫名地笑出了声。',
      );
      await era.printAndWait([
        '抽到不好的纸条，结果也不一定是坏事呢！互相拍着对方的尘土，',
        urara.get_colored_name(),
        ' 乐观的想着。',
      ]);
      await era.printAndWait([
        '不过这不会是真的灵验了吧？想起刚刚不同寻常的氛围，带着 ',
        urara.get_colored_name(),
        ' 踏上归路的 ',
        you.get_colored_name(),
        ' 若有所思。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_30 春乌拉拉对米浴的称呼
   * @param {PrintedSpan} call_33 春乌拉拉对爱慕织姬的称呼
   */
  async o_s_restaurant(urara, you, callname, call_30, call_33) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          call_30,
          ' 和 ',
          call_33,
          ' 共同推荐的面包餐厅果然很棒呢！下次也一起来吧！',
        ]);
        await era.printAndWait([
          '咬着手中的甜甜圈，',
          urara.get_colored_name(),
          ' 开心地擦着嘴角的糖霜。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          `那里是上次和大家一起吃过的拉面！听说还有隐藏菜单呢！${callname} 也试试看吧！`,
        );
        await era.printAndWait([
          '看了看偏僻巷子里这意外还算干净的店面，',
          you.get_colored_name(),
          ' 还是与 ',
          urara.get_colored_name(),
          ' 一同踏入店门。',
        ]);
        await era.printAndWait(
          '至于担当的饮食控制……外出的时候就别这么扫兴了吧。',
        );
      },
      async () => {
        await urara.say_and_wait('诶？今天吃快餐吗？那我要尝尝这个新套餐！');
        await urara.say_and_wait([
          '很多？那 ',
          callname,
          ' 也来一起吃吧！『乌拉拉～』的上了哦！',
        ]);
        await era.printAndWait([
          '一起分享了大份套餐后，',
          you.get_colored_name(),
          ' 觉得现在要控制体重的可能不只是 ',
          urara.get_colored_name(),
          ' 了。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '啊嗯～咕啾——吃东西时不要发出奇怪的声音？我知道了……？',
        );
        await era.printAndWait([
          '虽然被看到了用奇怪的方式吮吸食物的样子，但满脸无辜的小',
          urara.uma_sex_title,
          '好像自己也不知道在做什么。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `嘿嘿～被 ${callname} 喂了！但乌拉拉不是小孩子了！所以接下来轮到我了哦？${callname}，啊——`,
        );
        await era.printAndWait([
          '带着幸福的笑容，',
          urara.get_colored_name(),
          ' 夺过勺子，也学着样子舀起一勺炒饭送到了 ',
          you.get_colored_name(),
          ' 的嘴边。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '听我说！我在杂志上见到了一种很厉害的、嘴对嘴喂饭的游戏哦！',
        );
        await urara.say_and_wait(
          `不过在外面要学会克制啊……那以后独处的时候，${callname} 要和我玩那种游戏吗？`,
        );
        await era.printAndWait([
          '就算说不要也没什么用吧。撇着小',
          urara.uma_sex_title,
          '期待到有点狂热的眼神，',
          you.get_colored_name(),
          ' 默默地干起了饭。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {string} callname 春乌拉拉对玩家的称呼
   * @param {PrintedSpan} call_47 春乌拉拉对荒漠英雄的称呼
   * @param {PrintedSpan} call_56 春乌拉拉对待兼福来的称呼
   * @param {PrintedSpan} call_58 春乌拉拉对名将怒涛的称呼
   * @param {PrintedSpan} call_77 春乌拉拉对成田路的称呼
   */
  async o_s_dating(urara, you, callname, call_47, call_56, call_58, call_77) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          call_77,
          ' 推荐的那家杂货店今天好像有进了些有意思的东西！一起进去看看吧！',
        ]);
        await era.printAndWait([
          '一路小跑过去的 ',
          urara.get_colored_name(),
          '，现在已经站到了那家精致的杂货店旁边。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '那边的纪念品店，是 ',
          call_58,
          ' 和 ',
          call_56,
          ' 偶尔会去的地方！现在要一起去看看吗？',
        ]);
        await era.printAndWait([
          '不论去几次，那家店都不像正经的纪念品店，不过只要 ',
          urara.get_colored_name(),
          ' 开心就好了吧。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '啊！那家 ',
          call_47,
          ' 推荐的旧书店！听说里面有出现了好多很稀有的书呢！',
        ]);
        await era.printAndWait([
          '拉着 ',
          you.get_colored_name(),
          ' 来到书店门口，',
          urara.get_colored_name(),
          ' 好奇地透过橱窗向内看去。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `哈啊……啊，要好好走路才行！但是 ${callname} 身上的味道……哈啊……`,
        );
        await era.printAndWait([
          '一路拽着 ',
          you.get_colored_name(),
          ' 的衣服，',
          urara.get_colored_name(),
          ' 完全沉浸在了自己 ',
          callname,
          ' 的气味之中。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `又想起入学第一天妈妈送我来特雷森的时候了……但现在也有 ${callname} 在我身边！`,
        );
        await era.printAndWait([
          '挽起 ',
          you.get_colored_name(),
          ' 的手，',
          urara.get_colored_name(),
          ' 笑着与 ',
          you.get_colored_name(),
          ' 一起穿过熙熙攘攘的人流。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '，现在不要松手哦？要是在人群中走散了乌拉拉也会害怕的！',
        ]);
        await era.printAndWait([
          '紧紧抱着 ',
          you.get_colored_name(),
          ' 的手臂，虽然看不到表情，但 ',
          urara.get_colored_name(),
          ' 应该是在笑着吧？',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async o_s_shopping(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '那边有参赛的大家的广告牌，今天出现在上面的会是——？',
        );
        await era.printAndWait([
          '在商场大厅内，',
          urara.get_colored_name(),
          ' 与 ',
          you.get_colored_name(),
          ' 一同望向了上方的',
          urara.uma_sex_title,
          '宣传广告牌。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！这次的鞋和蹄铁买和上次一样的就好了吧！诶？是那一双吗？',
        ]);
        await era.printAndWait([
          '疑惑的拿着两种不一样的跑鞋，',
          urara.get_colored_name(),
          ' 对比赛和训练的理解似乎还是有些生疏。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '又路过展示决胜服的地方了！而且这次里面又有好看的新衣服了！',
        );
        await era.printAndWait([
          '有新决胜服展出意味着新的',
          urara.uma_sex_title,
          '会参与到重赏之中，未来的压力可能就会更多一分。',
        ]);
        await era.printAndWait([
          '不过，',
          urara.get_colored_name(),
          ' 的笑容也只是因为大家能离未来更进一步感到开心而已。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '，最近衣服下面……磨得有些疼了，可以和乌拉拉一起去看看新的……？',
        ]);
        await urara.say_and_wait([
          '找其他同学一起？可是',
          urara.couple_title,
          '最近都没空哦？',
          callname,
          '，再帮我一下……',
        ]);
        await era.printAndWait([
          '虽然 ',
          urara.get_colored_name(),
          ' 的眼神很可怜，但为了避免进局子，',
          you.get_colored_name(),
          ' 还是拼命拒绝了 ',
          urara.get_colored_name(),
          ' 的请求。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '啊！这件衣服……不用哦 ',
          callname,
          '！我会攒好零花钱自己来买的！',
        ]);
        await era.printAndWait([
          '虽然有些恋恋不舍，但听到 ',
          you.get_colored_name(),
          ' 来买下的提议后，',
          urara.get_colored_name(),
          ' 却坚定地将洋裙挂回了衣架。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '乌拉拉～嘿嘿，吓到了吗 ',
          callname,
          '？所以说不要离乌拉拉太远哦？要好好把手牵起来！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 想将担当放在休息区短暂离开一下，',
          urara.sex,
          '却在 ',
          you.get_colored_name(),
          ' 转身的瞬间从后面了扑上来。',
        ]);
        await era.printAndWait([
          '虽然还想让',
          urara.sex,
          '回去坐一会儿，但 ',
          urara.get_colored_name(),
          ' 似乎既不想退让也没有笑意……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {string} self_call 春乌拉拉的自称
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   * @param {boolean} u_awake 春乌拉拉是否醒着
   * @param {boolean} y_awake 玩家是否醒着
   */
  good_night_normal(
    urara,
    you,
    callname,
    self_call,
    high_relation,
    u_awake,
    y_awake,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    if (u_awake && y_awake) {
      if (high_relation) {
        buffer.push(
          () => {
            urara.say(['今天就到这里了吗？那么下次见啦 ', callname, '！']);
            era.print([
              '在向 ',
              you.get_colored_name(),
              ' 道别后，',
              urara.get_colored_name(),
              ' 开心跑开了。',
            ]);
          },
          () => {
            urara.say(['该回去了？我明白了！再见哦 ', callname, '！']);
            era.print([
              '在离开之前，',
              urara.get_colored_name(),
              ' 笑着向 ',
              you.get_colored_name(),
              ' 认真地说了再见。',
            ]);
          },
          () => {
            urara.say(['已经这个时间了！', callname, ' 路上要注意安全哦！']);
            era.print([
              '对 ',
              you.get_colored_name(),
              ' 做出了善意的叮嘱，小',
              urara.uma_sex_title,
              '蹦蹦跳跳的跑向了宿舍。',
            ]);
          },
          () => {
            urara.say([callname, ' 也累了吗？辛苦了呦！回去后要好好休息哦？']);
            era.print([
              '在一天的结尾，',
              urara.get_colored_name(),
              ' 向 ',
              you.get_colored_name(),
              ' 招着手离开了。',
            ]);
          },
        );
        if (love > 0) {
          buffer.push(
            () => {
              urara.say([
                '虽然没什么实感，可两人一起的话，时间果然会过得很快！难道 ',
                callname,
                ' 会加速时间！诶？不会吗？',
              ]);
              era.print([
                '说着没头没脑的话，',
                urara.get_colored_name(),
                ' 与 ',
                you.get_colored_name(),
                ' 在道别后分开了。',
              ]);
            },
            () => {
              urara.say(['诶？是要送我回去吗？谢谢 ', callname, '！']);
              era.print([
                '听到 ',
                you.get_colored_name(),
                ' 的建议，',
                urara.get_colored_name(),
                ' 笑着与 ',
                you.get_colored_name(),
                ' 一同走上了最后一段路。',
              ]);
            },
          );
        }
        if (love >= 25) {
          buffer.push(
            () => {
              urara.say([
                '虽然还想再待一会，但是那样会让大家担心吧！那么下次再见了，',
                callname,
                '！',
              ]);
              era.print([
                urara.get_colored_name(),
                ' 看起来有点不够尽兴，但还是听话地向 ',
                you.get_colored_name(),
                ' 道别了。',
              ]);
            },
            () => {
              urara.say([
                '有点舍不得在这里和 ',
                callname,
                ' 再见呢！下次可以多陪陪 ',
                self_call,
                ' 吗？',
              ]);
              era.print([
                '虽然有些不舍的扯了扯 ',
                you.get_colored_name(),
                ' 的衣角，但 ',
                urara.get_colored_name(),
                ' 还是小声地做完道别就离开了。',
              ]);
            },
          );
        }
        if (love >= 50) {
          buffer.push(
            () => {
              urara.say(['哈啊……对不起 ', callname, '，嗯～再稍等一下哦……']);
              era.print([
                '脸上泛着奇怪的潮红，',
                urara.get_colored_name(),
                ' 临走前还像是发情的小动物般蹭着 ',
                you.get_colored_name(),
                ' 的身体。',
              ]);
            },
            () => {
              urara.say([
                callname,
                '！临走之前，可以再用力抱抱 ',
                self_call,
                ' 吗？嗯……再用力一点也没关系哦？',
              ]);
              era.print([
                '提出着说再见前的小愿望，因 ',
                you.get_colored_name(),
                ' 的拥抱变得满脸红晕的 ',
                urara.get_colored_name(),
                ' 露出了恍惚的神情。',
              ]);
            },
          );
        }
        if (love >= 75) {
          buffer.push(
            () => {
              urara.say([
                '诶？这个时间……嘿嘿～今天真的很开心哦！下次我们也继续在一起吧！',
              ]);
              era.print([
                '在给予 ',
                you.get_colored_name(),
                ' 一个恋人的拥抱后，',
                urara.get_colored_name(),
                ' 抖着耳朵满足地跑开了。',
              ]);
            },
            () => {
              urara.say([
                '诶……不能再待一会儿了吗？不过的确不能给 ',
                callname,
                ' 添麻烦呢，下次再见了哦！',
              ]);
              era.print([
                '恋恋不舍地结束了分开前的亲热，',
                urara.get_colored_name(),
                ' 三步一回头地离开了。',
              ]);
            },
          );
        }
        if (love >= 90) {
          buffer.push(
            () => {
              urara.say(['要离开了吗？那么……啾！嘿嘿～这是告别的吻哦！']);
              era.print([
                '摇着尾巴，',
                urara.get_colored_name(),
                ' 在离开前轻啄了一下 ',
                you.get_colored_name(),
                ' 的脸颊，随后像只小鸟般笑着跑走了。',
              ]);
            },
            () => {
              urara.say([
                '嘿嘿～',
                callname,
                ' 要走了吗？路上注意安全哦？回去要好好休息不要半夜出门花心哦？',
              ]);
              era.print([
                '看着 ',
                urara.get_colored_name(),
                ' 离开前变得意味深长的笑容，',
                you.get_colored_name(),
                ' 总觉得有点脊背发凉。',
              ]);
            },
          );
        }
        if (love >= 100) {
          buffer.push(
            () => {
              urara.say([
                '要是 ',
                callname,
                ' 现在松手的话，',
                self_call,
                ' 会『嗖』的一下子跑丢也说不定哦……开玩笑啦！我已经不是小孩子了！不过下次一起的时候也要握紧 ',
                self_call,
                ' 的手哦！',
              ]);
              era.print([
                '反复着担当离开前的玩笑，不知为何 ',
                you.get_colored_name(),
                ' 的心情变得有些焦躁起来……',
              ]);
            },
            () => {
              urara.say([
                '啾嗯～哈啊……嗯！这次就先到这里，',
                callname,
                ' 还想要的话下次再玩吧！不用担心，就算 ',
                callname,
                ' 没来，',
                self_call,
                ' 会永远等着 ',
                callname,
                ' 哦……',
              ]);
              era.print([
                '在爱人的脖子上吮下分开前的红印，小',
                urara.uma_sex_title,
                '清澈的声音浑浊而魅惑的缠绕在 ',
                you.get_colored_name(),
                ' 的耳边。',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () => {
            urara.say(['该回去了？那……下次再见了 ', callname, '！']);
            era.print([
              '斟酌了一下该说些什么，',
              urara.get_colored_name(),
              ' 最后还是决定送 ',
              you.get_colored_name(),
              ' 一个微笑。',
            ]);
          },
          () => {
            urara.say(['已经到这个时间了，该回去了哦 ', callname, '！']);
            era.print([
              '在笑着对 ',
              you.get_colored_name(),
              ' 做出提醒后，小',
              urara.uma_sex_title,
              '平平淡淡地走向了宿舍。',
            ]);
          },
          () => {
            urara.say([
              '送 ',
              self_call,
              ' 回去吗？但是我没关系的，谢谢 ',
              callname,
              '！',
            ]);
            era.print([
              '在摆摆手拒绝了 ',
              you.get_colored_name(),
              ' 后，',
              urara.get_colored_name(),
              ' 还是一个人离开了。',
            ]);
          },
        );
        if (love > 0) {
          buffer.push(
            () => {
              urara.say([
                '今天过得也很快，',
                callname,
                ' 也变温柔了一点呢……没什么哦！再见 ',
                callname,
                '！',
              ]);
              era.print([
                '说着令人摸不着头脑的话，',
                urara.get_colored_name(),
                ' 在与 ',
                you.get_colored_name(),
                ' 道别后慢慢地离开了。',
              ]);
            },
            () => {
              urara.say([
                '虽然不太明白，感觉有点不舍得走了，但是那样也不好呢……',
              ]);
              era.print([
                '在摇着耳朵自言自语一番后，',
                urara.get_colored_name(),
                ' 还是在好好地向 ',
                you.get_colored_name(),
                ' 道别后离开了。',
              ]);
            },
          );
        }
        if (love >= 25) {
          buffer.push(
            () => {
              urara.say([
                '让大家担心？但明明大家都让 ',
                callname,
                ' 和 ',
                self_call,
                ' 一起，应该不会被担心吧！',
              ]);
              era.print([
                '即使看起来不够尽兴，小',
                urara.uma_sex_title,
                '还是听话地离开了，不过 ',
                you.get_colored_name(),
                ' 好像是被担当抱怨了？',
              ]);
            },
            () => {
              urara.say([
                '没事的，',
                self_call,
                ' 不会乱跑的！不过 ',
                callname,
                ' 坚持的话……那就一起走吧！',
              ]);
              era.print([
                '扭捏的小',
                urara.uma_sex_title,
                '还是接受了 ',
                you.get_colored_name(),
                ' 的请求，并肩而行的氛围也开始变得有些微妙起来。',
              ]);
            },
          );
        }
        if (love >= 50) {
          buffer.push(
            () => {
              urara.say(['对不起……这个、再给 ', self_call, ' 一点时间……']);
              era.print([
                '在分开前不断蹭着 ',
                you.get_colored_name(),
                ' 的身体，',
                urara.get_colored_name(),
                ' 努力抑制着因情欲而来颤抖。',
              ]);
            },
            () => {
              urara.say([
                '明明是那样的人，但是 ',
                callname,
                ' 的气息……啊！对不起……',
              ]);
              era.print([
                '终于从沉迷的恍惚中缓过神来，',
                urara.get_colored_name(),
                ' 连忙害羞地放开了 ',
                you.get_colored_name(),
                ' 的衣角。',
              ]);
            },
          );
        }
        if (love >= 75) {
          buffer.push(
            () => {
              urara.say([
                callname,
                '！临走再前抱一下吧……可以吗？那……尽量温柔一点哦？',
              ]);
              era.print(
                '从若即若离的接触到再次紧紧的相拥，道别环节似乎又被拉长了好一段时间。',
              );
            },
            () => {
              urara.say([
                '已经是这个时间了，而且今天也很开心，但是 ',
                callname,
                '……',
              ]);
              era.print([
                '在犹豫一番后给予了 ',
                you.get_colored_name(),
                ' 一个恋人的拥抱，',
                urara.get_colored_name(),
                ' 还是恋恋不舍地离开了。',
              ]);
            },
          );
        }
        if (love >= 90) {
          buffer.push(
            () => {
              urara.say([
                '……啾～这是特制的告别哦！所以 ',
                callname,
                '，下次再见时要变得更好一点哦？',
              ]);
              era.print([
                '用樱唇轻触了恋人的脸颊，小',
                urara.uma_sex_title,
                '一边害羞地抖着耳朵，一边小声地鼓励着恋人。',
              ]);
            },
            () => {
              urara.say([
                callname,
                '，晚上去做大人的活动也要注意安全哦！不会去的？是真的也没关系啦……',
              ]);
              era.print([
                '在分开之前的闲聊中，',
                urara.get_colored_name(),
                ' 怀疑但又表示包容的眼神刺得 ',
                you.get_colored_name(),
                ' 有点不自在。',
              ]);
            },
          );
        }
        if (love >= 100) {
          buffer.push(
            () => {
              urara.say([
                '要分开了吗？不过现在松手的话，',
                callname,
                ' 说不定会去找别人亲热吧？开玩笑的！',
              ]);
              era.print([
                you.get_colored_name(),
                ' 在 ',
                urara.get_colored_name(),
                ' 的目送中离开了，而担当从身后投来的视线盯得 ',
                you.get_colored_name(),
                ' 有些心里发毛……',
              ]);
            },
            () => {
              urara.say([
                '啾～咕滋～哈啊……嘿嘿～喜欢吗？今天就到这里吧，下次方便的话，',
                self_call,
                ' 会和 ',
                callname,
                ' 说的！',
              ]);
              era.print([
                '在分开前的爱人身上用力烙下自己的印记，小',
                urara.uma_sex_title,
                '用清澈的声音诉说着浑浊的欲望。',
              ]);
            },
          );
        }
      }
    } else if (y_awake) {
      if (
        era.get('status:52:马跳S') ||
        era.get('status:52:马跳Z') ||
        era.get('status:52:超马跳Z') ||
        era.get('status:52:弗隆K') ||
        era.get('status:52:弗隆P') ||
        era.get('base:52:性欲') >= lust_border.absent_mind
      ) {
        buffer.push(
          () => {
            urara.say('呜……嗯……');
            era.print([
              '就算在 ',
              you.get_colored_name(),
              ' 送',
              urara.sex,
              '回去的路上，睡梦中的 ',
              urara.get_colored_name(),
              ' 也一直不安分的呻吟着。',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '小小的身体燥热的缩在 ',
              you.get_colored_name(),
              ' 的怀里，即使在回去的路上，',
              urara.get_colored_name(),
              ' 依然沉浸在粉色的梦中。',
            ]);
          },
        );
      } else {
        buffer.push(
          () => {
            urara.say('呼诶……');
            era.print([
              '随着呼吸声逐渐平稳，',
              urara.get_colored_name(),
              ' 靠在 ',
              you.get_colored_name(),
              ' 身边安睡着。',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '或许是因为太累了，在 ',
              you.get_colored_name(),
              ' 怀中的 ',
              urara.get_colored_name(),
              ' 安静的睡着了。',
            ]);
          },
          () => {
            urara.say('诶嘿嘿……');
            era.print([
              '回去的路上一直说着梦话，在 ',
              you.get_colored_name(),
              ' 背上的 ',
              urara.get_colored_name(),
              ' 究竟梦到了什么呢？',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        () =>
          era.print([
            '在看到 ',
            you.get_colored_name(),
            ' 已经睡着后，',
            urara.get_colored_name(),
            ' 似乎用了某些办法悄悄地把 ',
            you.get_colored_name(),
            ' 搬回了住处。',
          ]),
        () =>
          era.print([
            '醒来的时候 ',
            you.get_colored_name(),
            ' 发现自己已经回到了住处，而耳边似乎还有着 ',
            urara.get_colored_name(),
            ' 的道别声。',
          ]),
        () => {
          era.print('睁开眼睛，是熟悉的天花板，果然回到了卧室。');
          era.print(
            `虽然确实给担当添麻烦了，但小小的${urara.sex}到底是怎么独自把别人送回来的呢……`,
          );
        },
      );
      if (love >= 50) {
        buffer.push(() => {
          era.print([
            '在将 ',
            you.get_colored_name(),
            ' 送回住处后，',
            urara.get_colored_name(),
            ' 似乎还贴心的帮 ',
            you.get_colored_name(),
            ' 收拾了一下房间。',
          ]);
          era.print([
            '只是不知道为什么，',
            you.get_colored_name(),
            ' 总觉得洗衣篮中的衣服好像被人翻过……',
          ]);
        });
      }
      if (love >= 75) {
        buffer.push(() => {
          era.print([
            '在朦胧之际，一枚恋恋不舍的吻落在了 ',
            you.get_colored_name(),
            ' 的侧脸上。',
          ]);
          era.print([
            '在醒来时 ',
            urara.get_colored_name(),
            ' 已不在身边，但脸上亲吻的触感依旧十分清晰。',
          ]);
        });
      }
      if (love >= 100) {
        buffer.push(() => {
          era.print([
            '再次睁开眼睛时，',
            you.get_colored_name(),
            ' 发现自己已经回到了住处。',
          ]);
          era.print([
            '身边还残留着 ',
            urara.get_colored_name(),
            ' 的温度，似乎在这里',
            urara.sex,
            '也陪了 ',
            you.get_colored_name(),
            ' 好一会儿。',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {string} self_call 春乌拉拉的自称
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   * @param {number} check 求爱检定值，如果是大成功则默认同意
   */
  async good_night_sex(urara, you, callname, self_call, high_relation, check) {
    const love = era.get('love:52');
    if (high_relation) {
      if (love === 100) {
        urara.say([
          '咕啾～哈啊……',
          callname,
          '，这次也来做舒服的事情吧？可以做到尽兴起来为止哦？',
        ]);
        era.print([
          '在失控般相拥湿吻之后，娇小的',
          urara.sex,
          '用天真的语调伏在 ',
          you.get_colored_name(),
          ' 的耳边轻吟着魔性的诱惑。',
        ]);
      } else if (love >= 90) {
        urara.say([
          '啾～就是说今天晚上 ',
          self_call,
          ' 没问题哦？所以……',
          callname,
          ' 要和 ',
          self_call,
          ' 一起吗？',
        ]);
        era.print([
          '带着变得几分成熟的羞涩在恋人脸上落下一吻，',
          urara.get_colored_name(),
          ' 的笑容下是变得温润的脸颊。',
        ]);
      } else if (love >= 75) {
        urara.say([
          '回去的时候，',
          self_call,
          ' 可以去 ',
          callname,
          ' 的房间看看吗？就、就只是看一看而已！',
        ]);
        era.print([
          '用',
          urara.teen_sex_title,
          '渴求的眼神说着暧昧的借口，潮红爬上小脸的 ',
          urara.get_colored_name(),
          ' 一切尽在不言之中。',
        ]);
      } else {
        urara.say([
          callname,
          '！今天的话，可、可以多陪陪 ',
          self_call,
          ' 吗？晚上，多待一会儿吧！',
        ]);
        era.print([
          '支支吾吾地轻蹭着 ',
          you.get_colored_name(),
          ' 的身体，',
          urara.get_colored_name(),
          ' 喘息急促地挽留着 ',
          you.get_colored_name(),
          '。',
        ]);
      }
    } else if (love === 100) {
      urara.say([
        '最近觉得累了吗？那么，啾……嘿嘿，今天 ',
        callname,
        ' 可以对 ',
        self_call,
        ' 做更多厉害的事哦？',
      ]);
      era.print([
        '柔软的触感拂过 ',
        you.get_colored_name(),
        ' 的嘴角，踮起脚尖的 ',
        urara.get_colored_name(),
        ' 用轻吻向',
        urara.sex,
        '的 ',
        callname,
        ' 发出了缠绵的请求。',
      ]);
    } else if (love >= 90) {
      urara.say([
        '虽然 ',
        self_call,
        ' 没觉得寂寞，但如果是 ',
        callname,
        ' 想要……',
        self_call,
        ' 也没问题哦？',
      ]);
      era.print([
        '口是心非地发出着邀请，分别前的 ',
        urara.get_colored_name(),
        ' 突然眼神迷离的环住了 ',
        you.get_colored_name(),
        ' 的腰身。',
      ]);
    } else if (love >= 75) {
      urara.say([
        '想把 ',
        self_call,
        ' 带回去吗？只要不影响明天的话，应该不要紧吧……？',
      ]);
      era.print([
        '不等 ',
        you.get_colored_name(),
        ' 回答第一题，步步紧逼的小',
        urara.uma_sex_title,
        '便用欲求不满的神色向 ',
        you.get_colored_name(),
        ' 抛出了第二问。',
      ]);
    } else {
      urara.say([
        callname,
        '，',
        self_call,
        ' 的身体，变得好奇怪……可以不要走吗？',
      ]);
      era.print([
        '尽管很不情愿，小',
        urara.uma_sex_title,
        '还是满脸羞红地伸手拉住了 ',
        you.get_colored_name(),
        ' 的衣角。',
      ]);
    }
    era.printButton('接受', 1);
    era.printButton('拒绝', 2, { disabled: check === 2 });
    return await era.input();
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   */
  async after_punish(urara, you, callname, high_relation) {
    await era.printAndWait([
      '仿佛不知羞耻地上下摆弄着自己变得陌生敏感的肉体，今天的 ',
      you.get_colored_name(),
      ' 缩在训练员室的一角轻声娇吟着。',
    ]);
    await era.printAndWait([
      '镜中的身材与面容都变得精美到不像自己，但 ',
      you.get_colored_name(),
      ' 却选择浸在醒不来的噩梦中无法自拔。',
    ]);
    await era.printAndWait([
      '只要轻轻触碰，这幅身体就会瘙痒难忍……这也是因为改造吗？还是说，难道这就是马娘的身体……？',
    ]);
    await era.printAndWait([
      '但就在 ',
      you.get_colored_name(),
      ' 想要继续将衣物褪下时，身后没有上锁的门却传来了轻巧而礼貌的敲击声。',
    ]);
    await era.printAndWait([
      '在门被推开的前一秒，清醒了大半的 ',
      you.get_colored_name(),
      ' 惊恐地压住怦怦直跳的胸口，并在慌忙中遮住了自己的身体。',
    ]);
    await era.printAndWait([
      '而看着面前衣衫凌乱的「马娘姐姐」，推门而入的 ',
      urara.get_colored_name(),
      ' 则天真又疑惑地歪歪脑袋。',
    ]);
    await urara.say_and_wait([
      '诶？原来是 ',
      callname,
      ' 啊，虽然乌拉拉也觉得会有这么一天，但是不是太快了？',
    ]);
    await era.printAndWait([
      '在惊讶之后还是挂起了熟悉的笑脸，很快便将 ',
      callname,
      ' 认出的小',
      urara.uma_sex_title,
      '带着一如既往的乖巧坐到 ',
      you.get_colored_name(),
      ' 的身边。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～',
      callname,
      ' 还是 ',
      callname,
      ' 呢！我还以为要重新和 ',
      callname,
      ' 认识，那样就太可惜了！',
    ]);

    era.printButton('「……乌拉拉，原来你也知道吗？」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯！乌拉拉以前也从大家那里听说过，只是像 ',
      callname,
      ' 这样乌拉拉还是第一次见！',
    ]);
    await urara.say_and_wait([
      '不过 ',
      callname,
      ' 的变化真的很大呢，好在身上的气味一点没变，所以乌拉拉立刻认出来了！',
    ]);
    await era.printAndWait([
      '悄悄地伸出双手，',
      urara.get_colored_name(),
      ' 安慰般地抚摸着 ',
      you.get_colored_name(),
      ' 的脸颊，并在微微犹豫后选择了一路向上。',
    ]);
    await era.printAndWait([
      '担当调皮的小手拂过了 ',
      you.get_colored_name(),
      ' 变得更加柔顺的发丝，最后捉住了头顶那对还不太听话的毛茸茸的马耳朵。',
    ]);
    if (high_relation) {
      await urara.say_and_wait([
        callname,
        ' 现在还很不方便吧？但是没关系，乌拉拉也可以教 ',
        callname,
        ' 怎么应付生活哦！',
      ]);
      await urara.say_and_wait([
        '乌拉拉好像还听大家说，如果 ',
        callname,
        ' 再改变下去，好像还会发生更可怕的事……',
      ]);
      await era.printAndWait([
        '仿佛想起了什么可怕的事情，',
        urara.get_colored_name(),
        ' 先是在颤抖中顿了顿，但又安慰般地笑着抱住了身边的 ',
        you.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        '没关系的！如果真的变成那样还有我来照顾 ',
        callname,
        '！虽然 ',
        callname,
        ' 不变成那样才是最好的！',
      ]);
    } else {
      await urara.say_and_wait([
        '如果变成这样的 ',
        callname,
        ' 在之后能对乌拉拉更温柔些就好了，不过真的会变成那样吗？',
      ]);
      await urara.say_and_wait([
        '而且乌拉拉还听说，如果还像以前一样，',
        callname,
        ' 就会变成很奇怪的样子……',
      ]);
      await era.printAndWait([
        '像是突然想到了什么伤心事般，紧紧抱住 ',
        you.get_colored_name(),
        ' 的身体，小',
        urara.uma_sex_title,
        '看向 ',
        you.get_colored_name(),
        ' 的眼神也变得有些复杂。',
      ]);
      await urara.say_and_wait([
        '如果真变成那样的话……就算 ',
        callname,
        ' 不喜欢，乌拉拉也只能来照顾 ',
        callname,
        ' 了哦？',
      ]);
    }

    await era.printAndWait([
      '也许小 ',
      urara.get_colored_name(),
      ' 知道的事情，要比 ',
      you.get_colored_name(),
      ' 想象中的……不对，或许就是 ',
      you.get_colored_name(),
      ' 比知道的还要多也说不定。',
    ]);
    await era.printAndWait([
      '只是……不管以前相处得是否愉快，眼前这双清澈的樱瞳也一直都心系着',
      urara.sex,
      '的 ',
      callname,
      '。',
    ]);
    await era.printAndWait([
      '或许哪怕已经回不去了，现在也为时不晚？或许就算是为了 ',
      urara.get_colored_name(),
      '，现在尝试着改变也还有机会？',
    ]);
    await era.printAndWait([
      '……至少，先把迟来的那句话告诉',
      urara.sex,
      '吧。抱紧怀中小',
      urara.uma_sex_title,
      '，',
      you.get_colored_name(),
      ' 回想起了医务室中的第一次相拥……',
    ]);

    era.printButton('「谢谢你……」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯？',
      callname,
      ' 为什么要道谢呢？乌拉拉明明还什么都没做哦？',
    ]);
    await urara.say_and_wait([
      '不过……为了不让 ',
      callname,
      ' 变成那样，乌拉拉和 ',
      callname,
      ' 不能只是嘴上说说就结束了哦？',
    ]);
    await era.printAndWait([
      '仿佛是在安抚走失的小女孩般轻柔地拍着 ',
      you.get_colored_name(),
      ' 的后背，',
      urara.get_colored_name(),
      ' 在 ',
      you.get_colored_name(),
      ' 的怀中依旧温柔的笑着。',
    ]);
    await era.printAndWait([
      '或许此时此刻，看似幼稚的',
      urara.sex,
      '才是真正值得依靠的「大人」吧……',
    ]);
    await urara.say_and_wait([
      '所以乌拉拉决定了，从今天开始一起并跑吧？只要认真起来，以后一定可以好起来吧？',
    ]);

    era.printButton('「诶？但是这个身体我还……」', 1);
    await era.input();

    await urara.say_and_wait([
      '不用担心哦？我可以保证哦？',
      callname,
      ' 以后一定会跑得比乌拉拉还快的！',
    ]);
    await urara.say_and_wait([
      '所以……输掉的人就给摸摸尾巴好了！嘿嘿～反正 ',
      callname,
      ' 的尾巴肯定和刚睡醒时一样乱吧？',
    ]);
    await era.printAndWait([
      '还不等 ',
      you.get_colored_name(),
      ' 反应过来，',
      urara.get_colored_name(),
      ' 便拉着 ',
      you.get_colored_name(),
      ' 冲出训练员室，一路奔向了训练场的方向。',
    ]);
    await era.printAndWait([
      '虽然 ',
      you.get_colored_name(),
      ' 还什么都没做，但与小担当的间距却在不知不觉间又拉近了不少。',
    ]);
    await era.printAndWait(['或许被变成马娘这件事……似乎也不完全是坏事？']);
  },
  lets_slp: (() => {
    const title = '来睡觉吧！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '刚进到训练员室内，',
        you.get_colored_name(),
        ' 就看见了睡姿有点过于舒适了的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '是因为训练员室里太舒服了，或者说小担当已经把这里当成「家」一样的地方了？',
      );
      await era.printAndWait([
        '将脱下的衣服随意在旁边搭成一堆，此时的',
        urara.sex,
        '全身上下只穿着紧致的粉色运动内衣。',
      ]);
      await era.printAndWait([
        '樱色的发丝与尾巴自然的散开在身下，小巧可爱的耳朵也放松地摆动着。',
      ]);
      await era.printAndWait([
        '可爱的娃娃脸上带着安心的神情，在沉睡中自然伸展身体的小',
        urara.uma_sex_title,
        '，肌肤在灯光反射着健康的光泽。',
      ]);
      await era.printAndWait([
        '紧身的内衣微微勒进',
        urara.teen_sex_title,
        '柔软的身体中，娇嫩的肉感与成长的曲线也在这幅似乎含苞待放的身体上达成了微妙平衡。',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '因为某些原因过度丰满的乳房更是将上身仅剩的布料塞得满满当当，在小',
          urara.uma_sex_title,
          '身上自由的挺起着。',
        ]);
      }
      await era.printAndWait([
        '躺在训练员室的沙发床上，',
        urara.get_colored_name(),
        ' 就这样毫无防备的展示着自己可人的身体。',
      ]);
      await era.printAndWait([
        '面对如此没有戒心的可爱生物，与小',
        urara.uma_sex_title,
        '初次相遇并同床共枕时类似的想法浮现在了 ',
        you.get_colored_name(),
        ' 的脑中。',
      ]);
      await era.printAndWait([
        '这样柔软的小动物，如果不是会打扰到',
        urara.sex,
        '，真想过去摸摸看，而且担当这个样子，的确也让别人感觉到睡意了。',
      ]);
      await era.printAndWait([
        '如果不是还有工作的话，陪 ',
        urara.get_colored_name(),
        ' 躺一会儿或许也不错吧？',
      ]);
      await era.printAndWait([
        '虽然 ',
        you.get_colored_name(),
        ' 早已经是大人了，就算 ',
        urara.get_colored_name(),
        ' ',
        urara.sex,
        '真的允许，大概也不能去做这般任性的事……',
      ]);
      await era.printAndWait(
        '不过这无遮无拦的睡姿，万一凉着肚子的话就不好了。',
      );
      await era.printAndWait([
        '这么想着，',
        you.get_colored_name(),
        ' 拿起了一旁的毯子，为了不吵到 ',
        urara.get_colored_name(),
        ' 打算悄悄地靠了过去。',
      ]);
      await urara.say_and_wait(['嗯？', callname, '……？']);
      await era.printAndWait([
        '摇晃着敏感的小耳朵，捕捉到声音的无防备',
        urara.teen_sex_title,
        '浅浅的睁开眼睛，用朦胧的目光辨认着准备帮',
        urara.sex,
        '盖毯子的 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '睡得迷迷糊糊的小手在摸索一番后攀上了 ',
        you.get_colored_name(),
        ' 的手腕。',
      ]);
      await era.printAndWait([
        '在小',
        urara.uma_sex_title,
        '不收力量的拉扯下，',
        you.get_colored_name(),
        ' 连带着毯子一起被担当拉倒在了床上。',
      ]);
      await era.printAndWait([
        '腰部在躺下的瞬间就被紧紧地环住，此时的 ',
        urara.get_colored_name(),
        ' 将自己的 ',
        callname,
        ' 当成了安眠的抱枕。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(['诶嘿嘿～是 ', callname, ' 的感觉……']);
        await era.printAndWait([
          '完全是在睡梦之中的反应，',
          urara.get_colored_name(),
          ' 满足地蹭着 ',
          you.get_colored_name(),
          ' 的身体。',
        ]);
        await era.printAndWait([
          '随着微弱的呼吸的趋于平缓，紧紧抱住 ',
          you.get_colored_name(),
          ' 的',
          urara.teen_sex_title,
          '安心地陷入了深层睡眠。',
        ]);
      } else {
        await urara.say_and_wait('唔……？好像不够软诶……');
        await era.printAndWait([
          '似乎是因为抱枕不够柔软，',
          urara.get_colored_name(),
          ' 在睡梦中有点不满地撅起了小嘴。',
        ]);
        await era.printAndWait([
          '只是明明在对 ',
          you.get_colored_name(),
          ' 的不够体贴小声抱怨着，',
          urara.get_colored_name(),
          ' 却并没有放手的意思。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '埋在脖颈之间的发丝散发着清香，小',
        urara.uma_sex_title,
        '仿佛拥有宁神功能的芬芳顺着肌肤相亲调皮地钻进了 ',
        you.get_colored_name(),
        ' 的鼻腔。',
      ]);
      await era.printAndWait(
        '视线随着精神的放松逐渐变得模糊，双手甚至连还没来得盖上的毯子都要抓不住了。',
      );
      await era.printAndWait([
        '别说还有工作要做，一躺下睡意便完全抵挡不住了。不过和 ',
        urara.get_colored_name(),
        ' 一起睡也不算什么坏事，就这样先睡一觉也不迟。',
      ]);
      await era.printAndWait(
        '再次醒来时工作一定会堆得和山一样高吧，不过磨刀也不费砍柴功吧……',
      );
      await era.printAndWait([
        '努力说服着自己，',
        you.get_colored_name(),
        ' 在睡着前拉起毯子盖在两人身上，随后便陪 ',
        urara.get_colored_name(),
        ' 一起跳进了难得的休息时光。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '真是不知羞耻得让人嫉妒……没有，真的没有想加入……',
      );
    };
    f.title = title;
    return f;
  })(),
  time_cap: (() => {
    const title = '是时光胶囊哦？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait(
        '今日的中庭四下无人，那座枯树洞也依旧在草坪正中安静地守望着周围的一切。',
      );
      await era.printAndWait([
        '坐在熟悉的树桩边缘，注视着身边已有了特别意义的 ',
        you.get_colored_name(),
        '，今天的 ',
        urara.get_colored_name(),
        ' 向 ',
        you.get_colored_name(),
        ' 抛出了不同以往的话题。',
      ]);
      await urara.say_and_wait([
        callname,
        '，前几天呢，我和大家一起做了时间胶囊哦！',
      ]);

      era.printButton('「听上去很有趣啊！」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！虽然大家手忙脚乱，写下的话也横七竖八，但真的非常有趣！',
      );
      await urara.say_and_wait(
        '还有哦，在写完后要埋下的时候，虽然大家讨论过很多地方，但果然还是放到习惯的地方了！',
      );
      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 的目光，',
        you.get_colored_name(),
        ' 也看向了那座沉默的树洞，在树洞脚下的一部分草皮上，的确有着翻开过的痕迹。',
      ]);
      await era.printAndWait([
        '在其他人看来或许是意料之外，但对于特雷森的',
        urara.uma_sex_title,
        '们来说，又是情理之中的选择。',
      ]);

      era.printButton('「可是，为什么要特意来告诉我呢？」', 1);
      await era.input();

      await urara.say_and_wait([
        '咦……诶，可能是因为 ',
        callname,
        ' 和树洞先生一样，很擅长保守秘密吧！',
      ]);
      await era.printAndWait([
        '表情片刻停滞后，小小的',
        urara.uma_sex_title,
        '将眼神又投向了谁也不在的中庭。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 依然灿烂的笑着，但',
        urara.sex,
        '难得的在酝酿着什么，似乎又有点苦恼，现在的',
        urara.sex,
        '好像在思索着与以往不同的东西。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 察觉到那开朗中有一丝忧郁，还有仿佛忽然发现的一点向往与犹豫，只是',
        urara.sex,
        '表现的仍然不太明显。',
      ]);
      await era.printAndWait([
        '或许就连 ',
        urara.get_colored_name(),
        ' 自己都还不明白，只是身为训练员的 ',
        you.get_colored_name(),
        '，以旁听者的视角恰巧在此时发现了这点。',
      ]);
      await urara.say_and_wait(
        '虽然志愿全都不一样，但大家合影上的笑脸都在一起呢！所以我觉得就这样分开，大家应该也会很开心——',
      );
      await urara.say_and_wait(
        '可是，尽管大家都很开心，因为大家的志愿都不一样，分开的一天也总会到来吧……',
      );
      await era.printAndWait([
        '用「开心」的语气向 ',
        you.get_colored_name(),
        ' 叙述着埋下时间胶囊时的经历，',
        urara.get_colored_name(),
        ' 的尾巴与右脚像是在配合',
        urara.sex,
        '的思考般，不由自主地打着转。',
      ]);
      await era.printAndWait([
        '随后，似乎是想通了一些的 ',
        urara.get_colored_name(),
        '，用「充分理解后」的笑容望向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！分开的那天，',
        callname,
        ' 会舍不得乌拉拉吗……我肯定会舍不得 ',
        callname,
        ' 的，到时候一定会哭出来！',
      ]);
      await era.printAndWait([
        '依然笑脸相迎的 ',
        urara.get_colored_name(),
        '，开朗地承认着大人不敢、也不会坦言的事情。',
      ]);
      await era.printAndWait([
        '不知何时长大了的 ',
        urara.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 微笑着，即使有些停顿，语气也没有一丝动摇。',
      ]);
      await urara.say_and_wait([
        '但是，那样 ',
        callname,
        ' 也会伤心吧？所以就算那一刻真来了，我也会忍住不哭的！',
      ]);
      await era.printAndWait([
        '不知何时已紧靠在 ',
        you.get_colored_name(),
        ' 的身边，粉色的身影隐隐有些颤抖，这绝不是 ',
        you.get_colored_name(),
        ' 的错觉，但 ',
        urara.get_colored_name(),
        ' 依然笑着，勾起了 ',
        you.get_colored_name(),
        ' 的手指。',
      ]);
      await urara.say_and_wait([
        '所以那个时候 ',
        callname,
        ' 也不要哭！约好了哦！因为 ',
        callname,
        ' 和乌拉拉绝对会再见的！',
      ]);
      await era.printAndWait([
        '樱瞳在薄薄的泪水中绽放着，此刻努力地想要支起耳朵的',
        urara.sex,
        '，正怀着不输给任何人的沉重且真挚的感情。',
      ]);
      await urara.say_and_wait([
        '不管关系变成什么样、以后会去哪里，乌拉拉都会记得 ',
        callname,
        '！所以、所以……',
      ]);

      era.printButton(
        '「所以已经约好了哦？就算未来会分开，我们也一定会再见。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '赶在担当真的落下泪水之前，',
        you.get_colored_name(),
        ' 率先做出了起誓，给予了',
        urara.sex,
        '一个来自大人的拥抱。',
      ]);
      await era.printAndWait(
        '不要冲动，不要轻易发誓，不要轻视与任何人许下的约定，许诺前要思考能不能做到——',
      );
      await era.printAndWait([
        '这些 ',
        you.get_colored_name(),
        ' 全都知道，但此刻被不知不觉间成长的 ',
        urara.get_colored_name(),
        ' 所吸引的 ',
        you.get_colored_name(),
        '，遵循着内心做出了唯一解。',
      ]);
      await era.printAndWait([
        '感受着与结成契约时似是而非的鼓动，',
        you.get_colored_name(),
        ' 抚摸着 ',
        urara.get_colored_name(),
        ' 柔顺的发丝，为',
        urara.sex,
        '抹掉眼角的泪水。',
      ]);

      era.printButton('「一起回去吧！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！');
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '是这样吗？那愿未来的乌拉拉，能够在那时得偿所愿……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '也愿未来的你，就算改变，也仍能守住这份与',
        urara.teen_sex_title,
        '相约的诺言……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  rof_time: (() => {
    const title = '朦胧的天台时间';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '哪怕有所成长，现在的 ',
        urara.get_colored_name(),
        ' 还是没有完全改掉小孩子的生活习惯。',
      ]);
      await era.printAndWait([
        '是之前太累了？明明只是用餐时间稍微晚了一点，',
        urara.get_colored_name(),
        ' 就已经准备进入犯困模式了。',
      ]);
      await era.printAndWait([
        '望着担当在餐前变得昏昏欲睡的小脸，',
        you.get_colored_name(),
        ' 拿出两人的便当盒，并在天台的长椅上腾出一段空间。',
      ]);
      await era.printAndWait([
        '虽然小',
        urara.uma_sex_title,
        '主观上想要快点成为大人，但距离真的长大还是需要一点时间。',
      ]);
      await era.printAndWait([
        '不过再怎么说饭还是要按时吃的，看着 ',
        urara.get_colored_name(),
        ' 困倦的小脸，',
        you.get_colored_name(),
        ' 简单思考了一下。',
      ]);
      await era.printAndWait('倒也不是没有办法，只是……');

      era.printButton('「乌拉拉，实在困了的话就放松一下，我来喂你吧。」', 1);
      await era.input();

      await era.printAndWait([
        '在听到 ',
        you.get_colored_name(),
        ' 的提案后，晕沉沉的 ',
        urara.get_colored_name(),
        ' 先是愣了一下，揉着眼睛对 ',
        you.get_colored_name(),
        ' 勉强露出了一个睡意朦胧的笑容。',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '在长椅上乖巧地坐好，',
          urara.get_colored_name(),
          ' 就像等待喂食的雏鸟般羞涩地闭上眼睛，张开了小嘴。',
        ]);
        await era.printAndWait([
          '拿出筷子，轻轻夹起一块蛋卷，充当鸟妈妈的 ',
          you.get_colored_name(),
          ' 小心翼翼地将食物送到了小鸟嘴中。',
        ]);
        await era.printAndWait([
          '轻轻咬下一半，',
          urara.get_colored_name(),
          ' 闭着眼睛细细地品尝起 ',
          callname,
          ' 喂来的饭菜。',
        ]);
        await era.printAndWait([
          '而在安心地将饭菜咽下后，小',
          urara.uma_sex_title,
          '心满意足的将筷子上的另一半也吃了下去。',
        ]);
      } else {
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          '看上去有点不太情愿，但疲惫占了上风的',
          urara.sex,
          '还是离 ',
          you.get_colored_name(),
          ' 更近了一点。',
        ]);
        await era.printAndWait([
          '还是不确定 ',
          urara.get_colored_name(),
          ' 会不会吃，',
          you.get_colored_name(),
          ' 试探地用筷子夹起一块炸肉，也向担当那边靠了过去。',
        ]);
        await era.printAndWait([
          '即使有点犹豫，但在闻到炸物香味之后，',
          urara.get_colored_name(),
          ' 还是乖乖地张开小嘴咬住了肉块。',
        ]);
        await era.printAndWait([
          '随着小小的咀嚼与吞咽声，小',
          urara.uma_sex_title,
          '还是在 ',
          you.get_colored_name(),
          ' 的投喂下逐渐地放下心来。',
        ]);
      }
      era.println();
      await era.printAndWait('这次的味道还不错真是太好了。');
      await era.printAndWait([
        '等待着担当的细嚼慢咽，',
        you.get_colored_name(),
        ' 用筷子夹起了另一道菜。',
      ]);
      await era.printAndWait([
        '不断细心地喂着 ',
        urara.get_colored_name(),
        '，一边拿出纸巾帮',
        urara.sex,
        '擦着嘴角，一种微妙的感觉逐渐包围着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '本来就比同龄人更显年幼，现在又因失去活力而变得软软糯糯后，小',
        urara.uma_sex_title,
        '就更像个真正的小孩子了。',
      ]);
      await era.printAndWait([
        '但还真可爱啊，要是 ',
        urara.get_colored_name(),
        ' 能一直维持像只离不开人的小宠物的样子，或许也不错？',
      ]);
      await era.printAndWait([
        '在胡思乱想的时间里，手中的便当盒也在 ',
        you.get_colored_name(),
        ' 对小动物的喂食中里逐渐清空了。',
      ]);
      await era.printAndWait(
        '只是，在这朦胧的用餐时间后……该说果然还是小孩子吗？',
      );
      await era.printAndWait([
        '在被满足地喂饱之后，本来就摇摇晃晃的 ',
        urara.get_colored_name(),
        ' 好像因为食困更加支撑不住了。',
      ]);
      await era.printAndWait(
        '虽然会变成这样，大概依旧在担当训练员的意料之中。',
      );

      era.printButton(
        '「现在先闭一会儿眼睛吧，有事的话我会提前叫乌拉拉的。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对即将倒下的担当，',
        you.get_colored_name(),
        ' 带着三分无奈地拍了拍大腿。',
      ]);
      await era.printAndWait([
        '已经顾不上想法和态度什么的了，在得到 ',
        you.get_colored_name(),
        ' 的休息建议后，小',
        urara.uma_sex_title,
        '立刻放松了强撑的身体。',
      ]);
      await era.printAndWait([
        '在迫不及待地伸了个懒腰后向 ',
        you.get_colored_name(),
        ' 倒去，枕着 ',
        you.get_colored_name(),
        ' 的大腿，蜷缩在天台长椅上，',
        urara.get_colored_name(),
        ' 很快就睡熟了。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 果然还是个孩子吧？不过也正因',
        urara.sex,
        '是这样的好孩子，今天的小',
        urara.uma_sex_title,
        '治愈力也是一等一的。',
      ]);
      await era.printAndWait([
        '抚摸着在 ',
        you.get_colored_name(),
        ' 的膝盖上平稳地呼吸着的粉色小动物，',
        you.get_colored_name(),
        ' 也舒服地拿起了自己那份便当。',
      ]);
      await era.printAndWait('今天的天气真不错啊。');
      await era.printAndWait([
        '虽然 ',
        urara.get_colored_name(),
        ' 可能会拒绝，但两人的便当盒，今天都由',
        urara.sex,
        '的 ',
        callname,
        ' 来清理吧。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('唉，真好啊……不，才没有羡慕……');
    };
    f.title = title;
    return f;
  })(),
  spe_mach: (() => {
    const title = '角落中的奇怪机器';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_19 春乌拉拉对爱丽数码的称呼
     * @param {PrintedSpan} call_30 春乌拉拉对的称呼
     */
    const f = async (urara, inner_urara, you, callname, call_19, call_30) => {
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await urara.print_and_wait([
        '在某次的外出时，',
        callname,
        ' 因一点肠胃问题短暂离开了，而独自留下的 ',
        urara.get_colored_name(),
        ' 则开始在好奇心的驱使下四处探索起来。',
      ]);
      await urara.print_and_wait([
        '当在奖品各异的娃娃机中穿梭时，',
        urara.get_colored_name(),
        ' 很快便被一台从未注意过的机台吸引了。',
      ]);
      await urara.print_and_wait(
        '那台不起眼的机器正如狩猎的蜘蛛般静坐在阴暗的角落里，朴素的外壳与暗粉色灯光也遮掩着其中神秘的奖品。',
      );
      await urara.print_and_wait(
        '机器的一角所标记的「目白城制造」证实着它不应出现于此，但就算能够发现这隐蔽的角落也已经太迟了。',
      );
      await urara.print_and_wait([
        '小',
        urara.uma_sex_title,
        '瞬间就被这台迷幻的机器勾住了灵魂，即使捂住差点因惊吓发声的小嘴，也早已被内含的「惊喜」夺取了视线。',
      ]);
      await urara.print_and_wait([
        '暗淡的粉光下，狰狞器具们极富冲击力的堆叠在 ',
        urara.get_colored_name(),
        ' 面前，隔着薄薄的玻璃向',
        urara.sex,
        '勾着诱惑的指尖。',
      ]);
      await urara.print_and_wait(
        '可明明知道要快点离开，平日里最听话的双腿此时却违背了主人的意愿，一点点向桃色陷阱的方向挪了过去。',
      );
      await urara.print_and_wait([
        '就像跃入洞前短暂犹豫的爱丽丝，',
        urara.teen_sex_title,
        '在未知的躁动中折起耳朵，颤颤巍巍地将手伸向了投币口。',
      ]);
      await urara.print_and_wait(
        '与其他缓慢松散的娃娃机不同的，这台诡异的机器一启动便开始直愣愣地执行起摇杆的命令。',
      );
      await urara.print_and_wait(
        '在有力的抓取与平稳的搬运后，大得过分的爪子轻易地将被捏得有点变形的礼品盒扔了出来。',
      );
      await urara.print_and_wait([
        '心惊胆战地摸出随便抓到的东西，',
        urara.get_colored_name(),
        ' 带着一点侥幸心理翻开了这正好能藏进书包里的小盒。',
      ]);
      await urara.print_and_wait([
        '隔着透明开窗，尽管比橱窗里更加的狰狞器具小了很多，',
        urara.get_colored_name(),
        ' 还是被眼前的「实物」震慑到了。',
      ]);
      await urara.print_and_wait([
        '这是',
        urara.sex,
        '在 ',
        call_30,
        ' 与 ',
        call_19,
        ' 偷藏的奇怪漫画里所见过的「玩具」，但又是不同的款式。',
      ]);
      await urara.print_and_wait([
        '带有尖头与椭圆身体的金属塞子在',
        urara.child_sex_title,
        '手中散发着寒气，由金属短杆连接的软质底座则下面又有着黑色的强力吸盘。',
      ]);
      await urara.print_and_wait([
        '在拿到手中后，小',
        urara.uma_sex_title,
        '才意识到它足有一颗瘦长的梨子那么大，这绝对不是「新手」使用的东西。',
      ]);
      await urara.print_and_wait([
        '像是迷失了心智，',
        urara.teen_sex_title,
        '的樱瞳被灯光映照成了魅惑的深粉色，',
        urara.sex,
        '就这样失神地在角落中撩起了自己裙摆与上衣……',
      ]);
      await urara.say_and_wait('没、没问题的……只是、只是尝试一下而已……');
      await urara.print_and_wait([
        '一边小声地说服自己，',
        urara.get_colored_name(),
        ' 按照包装上的指示，将吸盘固定在地板上。',
      ]);
      await urara.print_and_wait([
        urara.teen_sex_title,
        '在阴影中用一只手解开裙子、褪下安全裤与内裤扔到一边，另一只手则简单撩了下尾巴。',
      ]);
      await urara.print_and_wait([
        '学着漫画里受虐的女主的样子，下着赤裸的小',
        urara.uma_sex_title,
        '以四肢着地的姿势缓缓地俯下身子。',
      ]);
      await urara.print_and_wait([
        '暴露在冰冷空气中的后穴同小穴一样紧张地收放着，颤抖着对准了肛塞的金属尖端。',
      ]);
      era.println();
      if (era.get('exp:52:肛交次数') >= 10) {
        await urara.print_and_wait([
          '随着尖端冰凉的触感没入，',
          urara.teen_sex_title,
          '压抑着身体，想要耐心地吞下这枚稍显过分的长塞。',
        ]);
        await urara.print_and_wait([
          '但',
          urara.sex,
          '高估了自己的经验与性爱的耐性，也低估了这小小的',
          urara.sex_slave_title,
          '身体实际有多么的淫乱。',
        ]);
        await urara.print_and_wait(
          '随着双腿的脱力，菊穴在向下的重力中毫无准备地吞掉了整块的硕大金属……',
        );
      } else {
        await urara.print_and_wait([
          '尖端冰凉的触感令',
          urara.teen_sex_title,
          '刚要放松的菊穴一紧，也让',
          urara.sex,
          '找回了一丝理性的退意。',
        ]);
        await urara.print_and_wait(
          '但久经锻炼的双腿，却又敏感到在接触到身体的催情信号时就失去了力气。',
        );
        await urara.print_and_wait([
          urara.teen_sex_title,
          '以滑跪的姿势扑坐在地板上，硕大的肛塞在瞬间被整只吞入了后部……',
        ]);
      }
      era.println();
      await urara.print_and_wait([
        '连发出悲鸣的余地都没有的，小',
        urara.uma_sex_title,
        '便在突如其来的刺激中下身紧绷着向前摔去。',
      ]);
      await urara.print_and_wait([
        '底部吸盘在「噗」的一声中摆脱了地板的拉扯，',
        urara.get_colored_name(),
        ' 小小的身体重重地扑在了冰凉的地板上。',
      ]);
      await urara.print_and_wait([
        '天生淫乱的身体因异常性器的突入被连绵地推至顶点，大脑瞬间沦陷的小',
        urara.uma_sex_title,
        '喉咙中胡乱地挤着不成声的音节。',
      ]);
      await urara.print_and_wait(
        '以准备受孕的姿态无助的趴在地板上，大喘气的淫乱粉色着仿佛在低声的求饶，又像是淫荡的哀叫。',
      );
      await urara.print_and_wait(
        '就连支撑起身体的力量都消失了，手臂随着身体的摇摆无力地拖在地上；',
      );
      await urara.print_and_wait(
        '稚嫩的小脸就像是在经受凌辱般，被自己的身体按在地板上来回摩擦着；',
      );
      await urara.print_and_wait(
        '臀部与尾巴也如发情期中向肉棒俯首屈服的雌性般，在快感中不自觉地高高翘起着；',
      );
      await urara.print_and_wait(
        '天生淫乱的后穴此时更是像吮吸甜美的糖果般，贪婪地将硕大的球体不断向内吸紧。',
      );
      await urara.print_and_wait([
        '小',
        urara.sex_code - 1 ? '母马' : '公马',
        '发育过度的蜜臀虽没大到夸张，但厚实肥嫩的臀肉也在夹紧后将底座挤压变形，使其不留痕迹地包裹在了其中。',
      ]);
      await urara.print_and_wait(
        '混合着恐惧与快感的泪水、涎水与汗水，同双腿间无法抑制的爱液一同打湿了身下光滑的地砖。',
      );
      era.println();
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait(
          '两团大白兔随着身体粗暴地颤抖着，发情的乳头如坏掉的水龙头般不受控制的挤出着白色的汁液。',
        );
        await urara.print_and_wait(
          '强烈的高潮接踵而至，白嫩的媚肉也榨出了多到令主人惊慌失措的奶水，就像是谁将半盒牛奶玩闹般地洒在了地上。',
        );
        await urara.print_and_wait(
          '如果没有提前撩起衣服、解开束胸的话，恐怕这对喷个不停地淫乳会从内部将布料浸透到不能见人的样子吧。',
        );
        era.println();
      }
      await urara.print_and_wait(
        '各种液体激烈且不间断地喷溅在墙角的瓷砖与地板上，最后在街机厅无人的角落里洇湿成一片。',
      );
      await urara.print_and_wait([
        '在几轮水声暂停后，拿回了一点力气和理智的小',
        urara.uma_sex_title,
        '终于想起了什么，开始努力地拖着淫秽的身体狼狈的爬行着……',
      ]);
      await urara.print_and_wait([
        '在一排排机器做支撑的搀扶行走下，',
        urara.get_colored_name(),
        ' 总算勉强适应了能在小腹按到硬物的身体。',
      ]);
      await urara.print_and_wait([
        '带着半遮半掩的淫荡模样，小',
        urara.uma_sex_title,
        '还是赶在 ',
        callname,
        ' 之前半爬着返回了约定等待的地方。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '姗姗来迟的 ',
        you.get_colored_name(),
        ' 看着面色潮红还大喘着气的 ',
        urara.get_colored_name(),
        '，也惊讶地挑起了眉毛。',
      ]);

      era.printButton(
        '「怎么了？是有身体有些不舒服吗？难受的话就再休息一会吧……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 当然已经多少猜出了什么，但为了 ',
        urara.get_colored_name(),
        ' 着想，现在也可能唯有装傻一途。',
      ]);
      await era.printAndWait([
        '面对装作毫不知情的 ',
        you.get_colored_name(),
        ' 的关心，已经无力思考的 ',
        urara.get_colored_name(),
        ' 也只是本能地按着颤抖地双腿。',
      ]);
      await era.printAndWait([
        '但挂起勉强笑容的',
        urara.sex,
        '，这次却意外坚决地说出了「没关系！」之类的话，并坚持要自己走回去。',
      ]);
      await era.printAndWait([
        '不过在一番拉扯后，实在没有自信经受住敏感的身体的小',
        urara.uma_sex_title,
        '还是勉强同意了 ',
        you.get_colored_name(),
        ' 的搀扶。',
      ]);
      await era.printAndWait([
        '本身就是装傻的 ',
        you.get_colored_name(),
        '，也在紧张地贴身帮扶担当时，尽量无视了',
        urara.sex,
        '所造成的其他异常：',
      ]);
      await era.printAndWait([
        '比如 ',
        urara.get_colored_name(),
        ' 起身的转椅上，留下了一滩圆形吸盘状的按压水渍；',
      ]);
      await era.printAndWait([
        '比如回家的路上，小',
        urara.uma_sex_title,
        '也总会因不自然的抽搐而慢下脚步；',
      ]);
      await era.printAndWait(
        '比如忘记拉上拉链的书包里，有着压痕的粉色盒子正随着颠簸一路若隐若现……',
      );

      await era.printAndWait([
        '直到 ',
        you.get_colored_name(),
        ' 带着跌跌撞撞的 ',
        urara.get_colored_name(),
        ' 回到宿舍时，还在颤抖的',
        urara.sex,
        '都没能对 ',
        you.get_colored_name(),
        ' 说出一句完整的话。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也因为事情过于特殊，在发情的担当旁没有产生任何生理反应，虽然 ',
        you.get_colored_name(),
        ' 也庆幸外面时没做出节外生枝的举动。',
      ]);
      await era.printAndWait([
        '但是一低头，又看到了担当脚下还在不断拉出着银丝的 ',
        you.get_colored_name(),
        '，最终还是憋不住了……',
      ]);
      await era.printAndWait([
        '而看着 ',
        you.get_colored_name(),
        ' 落荒而逃的背影，还在滴答着淫水的 ',
        urara.get_colored_name(),
        ' 的脸上，却闪过了一丝……意犹未尽？',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '或许淫乱的小',
        urara.uma_sex_title,
        '，在某天会再次将手伸向角落里那台魔性的机器，也说不定……',
      ]);
      await inner_urara.say_as_unknown_and_wait('呜……我不行了……');
    };
    f.title = title;
    return f;
  })(),
  spe_item: (() => {
    const title = '特殊奖品';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_1 春乌拉拉对特别周的称呼
     * @param {PrintedSpan} call_14 春乌拉拉对神鹰的称呼
     * @param {PrintedSpan} call_61 春乌拉拉对圣王光环的称呼
     */
    const f = async (
      urara,
      inner_urara,
      halo,
      you,
      callname,
      call_1,
      call_14,
      call_61,
    ) => {
      await era.printAndWait([
        '为了补充训练员室冰箱内缺少的食材，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 一同来到商店街进行采购。',
      ]);
      await era.printAndWait([
        '本来只是来采购食品的，但不知为何准备回去时却被聚集的人们吸住了视线。',
      ]);
      await era.printAndWait(
        '或许也被气氛所感染了，逐渐变得相似的担当与训练员也默契的钻进了人群。',
      );
      await era.printAndWait(
        '跟随着摇杆转动的多边形盒子在清脆的响声中停止，又有位伤心人多了包纸巾……',
      );
      await you.say_and_wait(
        '但是商店街抽奖，记得没错的话是需要抽奖券的吧，那么我们还是……？',
      );
      await era.printAndWait([
        '结果刚回过头，',
        you.get_colored_name(),
        ' 就看到了 ',
        urara.get_colored_name(),
        ' 在口袋中找寻一番后，变魔术般地摸出了一张抽奖券。',
      ]);
      await era.printAndWait([
        '……嗯，如果是商店街的小偶像 ',
        urara.get_colored_name(),
        ' 的话，倒也是件非常合理的事。',
      ]);
      await era.printAndWait([
        '看着眼神闪闪发光跃跃欲试的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 也不动声色地对',
        urara.sex,
        '比了个大拇指。',
      ]);
      await urara.say_and_wait([callname, '！要一起转了哦！一二——！']);
      await era.printAndWait([
        '在兴高采烈的 ',
        urara.get_colored_name(),
        ' 的邀请下，',
        you.get_colored_name(),
        ' 上前与担当一同摇下摇杆。',
      ]);
      await era.printAndWait([
        '在小',
        urara.uma_sex_title,
        '充满期待的注视中，盒子在旋转中不断发出着不同的脆响，随后——',
      ]);

      await you.say_as_passer_by_and_wait(
        '工作人员A',
        '哦！是特殊奖啊，稍等一下啊！',
      );
      await era.printAndWait(
        '主持抽奖的工作人员转身在桌子下面翻找一番后，拿出了一支盒装的圆头电动按摩棒。',
      );
      await era.printAndWait([
        '而 ',
        urara.get_colored_name(),
        ' 在接过盒子端详了一会儿后，像是突然想起了什么般抬起头。',
      ]);
      await urara.say_and_wait([
        '啊，我知道这个哦！',
        call_61,
        ' 也有一个！大家还会互相借着用——',
      ]);
      await era.printAndWait(
        '按摩棒竟然还会互相借着用，关系真好啊，不过为什么不自己买一个呢？',
      );
      await era.printAndWait([
        '不过就算 ',
        you.get_colored_name(),
        ' 的问题没说出口，',
        urara.get_colored_name(),
        ' 也紧接着在',
        urara.sex,
        '的下半句给出了答案。',
      ]);
      await urara.say_and_wait([
        '嗯！大家晚上的时候会用它来顶在腿之间呢！那个时候大家还会发出那种、那种……',
      ]);
      await era.printAndWait([
        '随着小',
        urara.uma_sex_title,
        '想起了什么的停顿，一抹羞红也顺着脸颊悄悄爬上了 ',
        urara.get_colored_name(),
        ' 的头顶。',
      ]);
      await urara.say_and_wait([
        '大家都不怎么穿衣服，还会发出很、很像大人的声音，那种……',
      ]);

      era.printButton('「……？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' 继续支支吾吾地说完后，',
        you.get_colored_name(),
        ' 与工作人员甚至周围的人的动作全都停住了动作。',
      ]);
      await era.printAndWait([
        '而怀疑着自己是不是说错了什么，',
        urara.get_colored_name(),
        ' 也在一愣之后，紧张地环顾起突然安静得可怕的人群。',
      ]);
      await urara.say_and_wait([
        '诶？不是这样的吗？可 ',
        call_61,
        ' 确实会那样用这个，',
        call_1,
        ' 和 ',
        call_14,
        ' 也……',
      ]);
      await urara.say_and_wait([
        '不、不过用完大家都会露出很舒服的表情哦！还会出很多汗！那、那个……',
      ]);
      await era.printAndWait([
        '伴随着周围逐渐密集的窃窃私语，',
        urara.get_colored_name(),
        ' 还在表情无辜又羞涩的说着什么。',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await era.printAndWait('不行，再这样下去就要出现范围性社会死亡了！');
      await era.printAndWait([
        '意识到情况不妙，',
        you.get_colored_name(),
        ' 马上与也反应过来的工作人员交换了一个眼神。',
      ]);
      await era.printAndWait([
        '随后在工作人员用来转移注意力的吆喝声中，',
        you.get_colored_name(),
        ' 拉起还想说什么的担当逃离了现场。',
      ]);
      await era.printAndWait([
        '在一路快跑回到特雷森，并将 ',
        urara.get_colored_name(),
        ' 放到宿舍门口后，',
        you.get_colored_name(),
        ' 终于松了口气。',
      ]);
      await era.printAndWait([
        '不过在离开前，',
        urara.get_colored_name(),
        ' 突然开始支支吾吾但又异常坚决地向 ',
        you.get_colored_name(),
        ' 索要起那根按摩棒。',
      ]);
      await era.printAndWait([
        '而被小',
        urara.uma_sex_title,
        '扯住衣服，走不了也拗不过的 ',
        you.get_colored_name(),
        '，还是无奈地将按摩棒交给了 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '虽然在担当撒手的瞬间 ',
        you.get_colored_name(),
        ' 就后悔了，可现在去追跳进宿舍的',
        urara.sex,
        '也已是不可能的事了。',
      ]);
      await era.printAndWait(
        '正处于好奇心的年龄什么都想尝试倒也无可厚非，但果然这个还是……',
      );
      await era.printAndWait([
        '之后的话，还是找个机会和 ',
        halo.get_colored_name(),
        ' 说点什么吧。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……不过，应该不用担心，这或许都是年轻时犯下的错误吧？',
      );
    };
    f.title = title;
    return f;
  })(),
  cor_game: (() => {
    const title = '角落中的游戏？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, gs, you, callname) => {
      await era.printAndWait('果然这部电影，对人类来说还是为时尚早了。');
      await era.printAndWait([
        '抱着在怀中安然熟睡的 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 对危急时刻竟还讲着车轱辘话的演员们叹了口气。',
      ]);
      await era.printAndWait([
        '说是刺激的恐怖电影，但在放映开始时就躲进 ',
        you.get_colored_name(),
        ' 怀中的 ',
        urara.get_colored_name(),
        '，很快便因不知所谓的剧情睡了过去。',
      ]);
      await era.printAndWait([
        '现在屏幕上那个戴着面具的类',
        urara.uma_sex_title,
        '搞怪生物，又怎么看怎么像 ',
        gs.get_colored_name(),
        '……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 似乎又被咿咿呀呀的怪叫声扰到了睡眠，折起耳朵，蹭着 ',
        you.get_colored_name(),
        ' 的身体换了个更方便安眠的姿势。',
      ]);
      await era.printAndWait([
        '似乎又梦到了好吃的东西，睡不安稳的小',
        urara.uma_sex_title,
        '又像亲吻般在 ',
        you.get_colored_name(),
        ' 的脖子内侧又吮又咬个不停。',
      ]);
      await era.printAndWait([
        '在别人看来这或许是被幼女渴求的禁断场景，但 ',
        you.get_colored_name(),
        ' 知道，',
        urara.get_colored_name(),
        ' 恐怕是梦到了与萝卜有关的事情。',
      ]);
      await era.printAndWait([
        '但话又说回来，',
        you.get_colored_name(),
        ' 的意志力也的确正经受着莫大的考验。',
      ]);
      await era.printAndWait([
        '将尾巴慢慢缠上 ',
        you.get_colored_name(),
        ' 的大腿，',
        urara.teen_sex_title,
        '健康肉感的身体依旧来回地蹭着 ',
        you.get_colored_name(),
        ' 敏感的角落。',
      ]);
      await era.printAndWait([
        '吻痕般的印记随着',
        urara.teen_sex_title,
        '粘稠的吮吸声还在不断增多，但那团魅惑的樱粉色似乎没有要停下的意思。',
      ]);
      await era.printAndWait([
        '如果相遇时的同床共枕，还算精神失常的 ',
        you.get_colored_name(),
        ' 有错在先，',
        urara.get_colored_name(),
        ' 只是无辜的小',
        urara.uma_sex_title,
        '……',
      ]);
      await era.printAndWait(
        '这次就是无辜魅魔般的担当，在睡梦中对抱有好感的训练员进行着无意识的勾引了。',
      );
      await era.printAndWait([
        '至少现在的 ',
        you.get_colored_name(),
        ' 是这样为自己缓缓抬起的手找合适的借口的。',
      ]);

      await inner_urara.say_as_unknown_and_wait('我、我说，现在收手还来得及——');
      era.printButton('报复一下这只色情小马……', 1);
      era.printButton('算了，忍住！', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '趁着 ',
          urara.get_colored_name(),
          ' 在睡梦中翻身，',
          you.get_colored_name(),
          ' 在昏暗的影院中将手伸进了担当的衣下。',
        ]);
        await era.printAndWait(
          '先不说这场电影根本没什么人看，空无一人的最后一排本来就是最好的掩护。',
        );
        await era.printAndWait([
          '一只手试探地隔着衣服，挑弄起',
          urara.teen_sex_title,
          '青涩的山峰，另一只手伸入',
          urara.teen_sex_title,
          '的裙下，抚摸着',
          urara.uma_sex_title,
          '敏感的大腿内侧。',
        ]);
        await era.printAndWait([
          '变得有些急促的喘息让 ',
          you.get_colored_name(),
          ' 的手指略微停滞，但即使察觉了什么，小',
          urara.uma_sex_title,
          '依旧没有醒来。',
        ]);
        await era.printAndWait([
          '指尖继续深入着，',
          you.get_colored_name(),
          ' 翻开了 ',
          urara.get_colored_name(),
          ' 的安全裤，隔着最后一层布料抚摸着',
          urara.teen_sex_title,
          '的秘密。',
        ]);
        await era.printAndWait([
          '荧幕上的吵闹盖过了',
          urara.teen_sex_title,
          '梦中的娇吟，',
          you.get_colored_name(),
          ' 在天然的掩护中继续恰到好处的欺负着',
          urara.sex,
          '娇嫩敏感的三点。',
        ]);
        await era.printAndWait([
          '于此同时，想着贪嘴的担当在 ',
          you.get_colored_name(),
          ' 身上留下的痕迹，报复心高涨的 ',
          you.get_colored_name(),
          ' 也瞄准小',
          urara.uma_sex_title,
          '脖子上细嫩的皮肤用力吻了下去。',
        ]);
        await era.printAndWait([
          '随着',
          urara.teen_sex_title,
          '身体突然的抖动，',
          you.get_colored_name(),
          ' 伸入安全裤的手逐渐有了一丝潮湿的触感。难道',
          urara.sex,
          '……？',
        ]);
        await era.printAndWait([
          '被下了一跳的 ',
          you.get_colored_name(),
          ' 猛地收回了手，而 ',
          urara.get_colored_name(),
          ' 也终于在身体的催促中朦胧地睁开了眼睛。',
        ]);
        await urara.say_and_wait([callname, '～电影……呜嗯嗯嗯嗯——？！']);
        await era.printAndWait([
          '在刚睡醒的迷茫中，',
          urara.get_colored_name(),
          ' 幼小的身体在因 ',
          you.get_colored_name(),
          ' 所积压的刺激中颤抖着决堤了——',
        ]);
        await era.printAndWait([
          '在 ',
          urara.get_colored_name(),
          ' 股间传来的淅淅沥沥的水声中，',
          you.get_colored_name(),
          ' 这才想起，因为电影实在无聊，',
          urara.sex,
          '在睡前就迅速喝完了一大杯饮料……',
        ]);
        await era.printAndWait([
          '带着歉意，',
          you.get_colored_name(),
          ' 一边安慰因「不小心」失禁而哭哭啼啼的 ',
          urara.get_colored_name(),
          '，一边将',
          urara.sex,
          '送去了厕所。',
        ]);
        await era.printAndWait([
          '而在提前带小',
          urara.uma_sex_title,
          '回去的路上，',
          you.get_colored_name(),
          ' 又总觉得碰过 ',
          urara.get_colored_name(),
          ' 私处的手，还是有着湿润又粘稠的触感……',
        ]);
      } else {
        await era.printAndWait([
          '但在 ',
          you.get_colored_name(),
          ' 打算叫醒 ',
          urara.get_colored_name(),
          ' 时，小',
          urara.uma_sex_title,
          '却在再次翻身后，正好咬住了 ',
          you.get_colored_name(),
          ' 停在身前的手指。',
        ]);
        await era.printAndWait([
          '温热细嫩的舌头勾住 ',
          you.get_colored_name(),
          ' 的指尖，将 ',
          you.get_colored_name(),
          ' 的手指一点点地卷入口中。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          '努力的张开小嘴，手指随着舌尖的环绕爱抚开始脱离 ',
          you.get_colored_name(),
          ' 的控制，主动探入了温热绵软的深处。',
        ]);
        await era.printAndWait([
          '看着不断发出着迷幻的吮吸声的小小担当，',
          you.get_colored_name(),
          ' 感到有些窒息，却又不敢移开视线。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          ' 是个纯洁又很淫乱的孩子」。',
        ]);
        await era.printAndWait([
          '从第一次见到',
          urara.sex,
          '时 ',
          you.get_colored_name(),
          ' 就产生了这样下流的预感，但等 ',
          urara.get_colored_name(),
          ' 真的将本性暴露出来时，',
          you.get_colored_name(),
          ' 却慌了。',
        ]);
        await era.printAndWait([
          '在品尝的最后，伴随着液体的滴落与手指的解放，小',
          urara.uma_sex_title,
          '在 ',
          you.get_colored_name(),
          ' 的指节上轻轻印下了一个小小的牙印。',
        ]);
        await era.printAndWait([
          '像是在回味般咂了咂嘴，',
          urara.get_colored_name(),
          ' 带着还在梦中的笑容换了个姿势，又继续咬起了 ',
          you.get_colored_name(),
          ' 的衣领。',
        ]);
        await era.printAndWait([
          '受到冲击的 ',
          you.get_colored_name(),
          ' 就这样呆呆地坐在座位上，任由 ',
          urara.get_colored_name(),
          ' 将',
          urara.sex,
          '的味道继续在梦中涂抹着。',
        ]);
        await era.printAndWait([
          '直到电影快放完的时候，',
          you.get_colored_name(),
          ' 才因为怀中传来的一句微弱呼唤回过神来。',
        ]);
        await urara.say_and_wait([callname, '……我想上厕所……']);
        await era.printAndWait([
          '回过神来，',
          you.get_colored_name(),
          ' 也想起了 ',
          urara.get_colored_name(),
          ' 在睡着前好像喝过一大杯饮料的事。',
        ]);
        await era.printAndWait([
          '于是就像逃跑似的，你带着还揉着眼睛的 ',
          urara.get_colored_name(),
          ' 匆匆忙忙地逃向了厕所……',
        ]);
      }
      await era.printAndWait([
        '理所当然的，因为忘记遮掩 ',
        urara.get_colored_name(),
        ' 留下的咬痕而被人发现的 ',
        you.get_colored_name(),
        '，被骏川小姐狠狠地谈话了一番。',
      ]);
      await era.printAndWait('当然这些跟观影时的经过相比，也没那么重要了。');
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '果然有些作品，对人类来说还是为时尚早了。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  church: (() => {
    const title = '塞翁失马？';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} call_56 春乌拉拉对待兼福来的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_56,
      high_relation,
    ) => {
      await era.printAndWait([
        '为了兴致正旺的 ',
        urara.get_colored_name(),
        '，也为了在下次比赛前讨个彩头，',
        you.get_colored_name(),
        ' 决定带',
        urara.uma_sex_title,
        '一起去神社看看。',
      ]);
      await era.printAndWait('毕竟也没有要紧的事，再者来都来了。');
      await era.printAndWait([
        '只是在踏上阶梯时，',
        you.get_colored_name(),
        ' 感受到这里的氛围与平常来时稍显不同。',
      ]);
      await era.printAndWait([
        '一般来说这座小神社总是热闹的，除了周围的居民与会在这里玩耍小孩子，还会有借着长阶梯进行训练的',
        urara.uma_sex_title,
        '们。',
      ]);
      await era.printAndWait(
        '但是今天的阶梯却格外的安静，除了两侧林地的摇动与鸟鸣外，剩下的就只有两人的脚步声了。',
      );
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '只有两人的攀登确实缺少了一丝生气，但好好牵着 ',
          you.get_colored_name(),
          ' 的手的 ',
          urara.get_colored_name(),
          ' 其实也一直以笑脸伴在 ',
          you.get_colored_name(),
          ' 的身边。',
        ]);
        await urara.say_and_wait('总感觉今天的这里说不上来的干净！');
        await era.printAndWait([
          '虽然没弄懂指的是哪方面，但 ',
          you.get_colored_name(),
          ' 点头认同了 ',
          urara.get_colored_name(),
          ' 的看法，心情也在同',
          urara.uma_sex_title,
          '相伴中逐渐明快起来。',
        ]);
      } else {
        await era.printAndWait([
          '在犹豫了片刻后，',
          urara.get_colored_name(),
          ' 还是上前一步牵住 ',
          you.get_colored_name(),
          ' 的手，并突然站到了 ',
          you.get_colored_name(),
          ' 的身前。',
        ]);
        await urara.say_and_wait([callname, '！耐力训练，要跟上哦？']);
        await era.printAndWait([
          '在还没反应过来前，',
          you.get_colored_name(),
          ' 就被突然恶作剧般笑着跑起来的担当拉上了下一节台阶——',
        ]);
      }
      era.println();

      await era.printAndWait([
        '随着被跑在前面的 ',
        urara.get_colored_name(),
        ' 牵着踏上最后一节台阶，熟悉的小神社出现在阶梯顶端的鸟居之后。',
      ]);
      await era.printAndWait(
        '不管氛围如何变化，今天的它依旧在此安静地等候着参拜者。',
      );
      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一同站到了神社的钱箱前，',
        you.get_colored_name(),
        ' 取出两枚硬币，将其中一枚送到了 ',
        urara.get_colored_name(),
        ' 手中。',
      ]);
      await era.printAndWait([
        '对着硬币眨了眨眼睛后，',
        urara.get_colored_name(),
        ' 竖起耳朵，心领神会的攥紧了它……',
      ]);
      await era.printAndWait([
        '在简单地做完不那么标准的仪式后，',
        you.get_colored_name(),
        ' 帮 ',
        urara.get_colored_name(),
        ' 取下叠好的签子，准备与 ',
        urara.get_colored_name(),
        ' 一同展开手中的纸条——',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '从前有个被称为塞翁的人，遇上了一位',
        urara.uma_sex_title,
        '——',
      ]);
      await inner_urara.say_as_unknown_and_wait('咳，不对，错了——');
      era.drawLine();

      await era.printAndWait([
        '不过这一次，在将签子递给担当之前，',
        you.get_colored_name(),
        ' 无意识地将纸条提前翻开了。',
      ]);

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait([
        '于是，看着眼前满脸写着期待的 ',
        urara.get_colored_name(),
        '，手中拿着两张别无二致的「大凶」的 ',
        you.get_colored_name(),
        ' 陷入了复杂的沉默。',
      ]);

      inner_urara.say_as_unknown([
        '这时，训练员',
        you.adult_sex_title,
        '（您）的选择是……',
      ]);
      era.printButton('「是、是大凶哦……」（耐力+10）', 1);
      era.printButton('「是、是小吉……？」（速度+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 还是颤抖着对 ',
          urara.get_colored_name(),
          ' 说了实话。',
        ]);
        await era.printAndWait([
          '在听到 ',
          you.get_colored_name(),
          ' 的回答后，虽然表情有点失落，但只持续了几秒便又换上了无畏的笑颜。',
        ]);
        await urara.say_and_wait([
          '没关系的，大凶的话只要回去的时候看好脚下就没问题！',
          call_56,
          ' 也是这么说的！而且乌拉拉很擅长过红绿灯的哦？',
        ]);
        await era.printAndWait([
          '听见 ',
          urara.get_colored_name(),
          ' 包含了几分可靠的可爱回答后，',
          you.get_colored_name(),
          ' 也安心的点了点头，心里的负担也逐渐放下来。',
        ]);
        await era.printAndWait([
          '但就在负担刚放下没两秒，更新的压力又将 ',
          you.get_colored_name(),
          ' 的心跳提到了嗓子眼上。',
        ]);
        await era.printAndWait([
          '已经率先踏上归路的 ',
          urara.get_colored_name(),
          ' 依旧在回头对 ',
          you.get_colored_name(),
          ' 说着什么，但却也因此忘记了还要「注意脚下」。',
        ]);
        await era.printAndWait([
          '此刻的',
          urara.uma_sex_title,
          '已经来到了阶梯的顶层前，而阶梯中的某块石板正反射着镜面般的光。',
        ]);
        await era.printAndWait([
          '随后，小',
          urara.uma_sex_title,
          '便在有些茫然的表情中脚下一滑……',
        ]);

        era.printButton('「小心脚下！」', 1);
        await era.input();

        await era.printAndWait([
          '虽然 ',
          you.get_colored_name(),
          ' 及时将 ',
          urara.get_colored_name(),
          ' 拽住了，但随着脚下腾空，',
          you.get_colored_name(),
          ' 还是在垫在 ',
          urara.get_colored_name(),
          ' 身下后，像玩公园的滑梯般滑下了那超长的阶梯。',
        ]);
        await era.printAndWait(
          '只是尽管在跌倒前就已经做好了心理准备，这个滑梯的弧度还是过于颠簸了。',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 有点心虚地将两张纸条藏到身后。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 毫不怀疑的相信了 ',
          you.get_colored_name(),
          ' 的回答，还似乎因为抽到了吉而很开心的样子。',
        ]);
        await era.printAndWait([
          '虽然刚才还在犹豫，但现在看来还是 ',
          urara.get_colored_name(),
          ' 的笑脸更重要一些。',
        ]);
        await era.printAndWait([
          '这样想着，',
          you.get_colored_name(),
          ' 悄悄松了口气。在偷偷装起两张签子后，',
          you.get_colored_name(),
          ' 思考着接下来要和 ',
          urara.get_colored_name(),
          ' 去哪里转转。',
        ]);
        await era.printAndWait([
          '就像要发泄被小瞧了的怨气，才刚过了院子，被 ',
          you.get_colored_name(),
          ' 没收掉的两张「大凶」便迫不及待的将效力拍在了 ',
          you.get_colored_name(),
          ' 的头上。',
        ]);
        await urara.say_and_wait([callname, '！注意脚下！']);
        await era.printAndWait([
          '虽然在 ',
          you.get_colored_name(),
          ' 身后的 ',
          urara.get_colored_name(),
          ' 以最快速度跑了起来，但体型太小的',
          urara.uma_sex_title,
          '还是没能及时拽住 ',
          you.get_colored_name(),
          ' 偏移的身体。',
        ]);
        await era.printAndWait([
          '就像赶着应验一般，因思考而分神的 ',
          you.get_colored_name(),
          '，不知不觉间踩在了阶梯顶层的石板那最光滑的一节上。',
        ]);
        await era.printAndWait([
          '于是随着脚底一空，',
          you.get_colored_name(),
          ' 就像训练失败的',
          urara.uma_sex_title,
          '那般，在 ',
          urara.get_colored_name(),
          ' 惊慌失措的呼声中噼里啪啦的滑下了神社那超长的阶梯……',
        ]);
      }

      era.println();
      await era.printAndWait([
        '一段时间后，',
        you.get_colored_name(),
        ' 工整的仰面躺在阶梯的底部，跌得七荤八素的脑袋里正努力收拾着收拾着撒了一地的各种念头。',
      ]);
      await era.printAndWait([
        '幸好这样滑下来的不是 ',
        urara.get_colored_name(),
        '。望着上方的蓝天与 ',
        urara.get_colored_name(),
        ' 露出担忧神情的小脸，',
        you.get_colored_name(),
        ' 只有这条想法是清晰的。',
      ]);
      await era.printAndWait([
        '万幸的是在检查过一遍身体后，',
        urara.get_colored_name(),
        ' 和 ',
        you.get_colored_name(),
        ' 都因为 ',
        you.get_colored_name(),
        ' 的身体没出什么问题松了口气。',
      ]);
      await era.printAndWait([
        '就是天上那两张正在从 ',
        you.get_colored_name(),
        ' 眼前乘风飞过的「大凶」签子，总感觉像是某个人在看不见的地方无声的嘲笑着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('哎呦，背真的很疼啊……');
      await era.printAndWait([
        '不过在回去之后，',
        urara.get_colored_name(),
        ' 似乎为了 ',
        you.get_colored_name(),
        ' 更努力地',
        ret === 1 ? '陪在身边' : '训练',
        '了，虽然 ',
        you.get_colored_name(),
        ' 实际并没有受伤……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '嗯？看什么？不是我干的哦？真的不是哦？',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  hid_menu: (() => {
    const title = '隐藏菜单真美味呢！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '在一日的外出用餐结束后，准备买单时的 ',
        you.get_colored_name(),
        ' 愣愣地听着店员提出的特殊要求。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店员A',
        '好！所以品尝完本店的隐藏情侣菜品后需要做的是什么呢？',
      );
      era.printButton('「接、接吻……？」', 1);
      await era.input();
      await era.printAndWait([
        '复述着面带可疑笑容的服务员提出的可疑条件，再抬头撇了眼一脸无辜的担当，',
        you.get_colored_name(),
        ' 陷入一些思考。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 真的是因为好友的推荐，没有别的什么目的来到这家店的吗？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 真的是因为「不小心」才向这家店问的「隐藏菜单」？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 真的是因为看不出店面外的诡异装潢才拉着别人进到屋内的吗？',
      ]);
      await you.say_and_wait(
        '可是我为什么会怀疑乌拉拉？难道这一切是我的问题？',
        true,
      );
      await era.printAndWait([
        '没能看到的 ',
        urara.get_colored_name(),
        ' 无辜中漏出了一点恶作剧得逞时的坏笑，',
        you.get_colored_name(),
        ' 因大脑失灵不断地怀疑着自己。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([callname, '，在愣什么呢？来Kiss吧！']);
        await urara.say_and_wait(
          `来嘛来嘛！嘿嘿～要在外面和 ${callname} 亲亲了！`,
        );
        await era.printAndWait([
          '但看到 ',
          you.get_colored_name(),
          ' 的动摇，',
          urara.get_colored_name(),
          ' 却开心的和周围人一同起哄着。',
        ]);
        await era.printAndWait([
          '面对一脸认真地凑过来的担当，',
          you.get_colored_name(),
          ' 慌张得像撞鬼了一样使劲摇起头来。',
        ]);
        await you.say_and_wait(
          '一定会有别的选择的乌拉拉，你这样做大家都会受打击的，这样是不会得到别人的祝福的……',
        );
      } else {
        await urara.say_and_wait([callname, ' 不想Kiss吗？虽然我是知道的……']);
        await urara.say_and_wait(
          `但是 ${callname}！大人的话，也不是所有事情都可以选择哦？`,
        );
        await era.printAndWait([
          '看着逐渐陷入慌张的 ',
          you.get_colored_name(),
          '，',
          urara.get_colored_name(),
          ' 却露出了有点嫌弃但莫名开心的表情。',
        ]);
        await era.printAndWait([
          '可面对表面冷淡但态度坚决的担当，',
          you.get_colored_name(),
          ' 却将平时该怎么做忘得一干二净。',
        ]);
        await you.say_and_wait(
          '不行的乌拉拉，当着大家的面这样做我会进局子的，商店街的大家也会骂我的，你的朋友也……',
        );
      }
      era.println();
      await urara.say_and_wait(`${callname}！不要东张西望，这样会亲不到的哦！`);
      await era.printAndWait([
        '随着 ',
        urara.get_colored_name(),
        ' 话音刚落，试图拒绝的 ',
        you.get_colored_name(),
        ' 马上就被兴致高涨的担当用',
        urara.uma_sex_title,
        '的力量挤住了脸。',
      ]);
      await era.printAndWait('这下，可真是要在社会层面完蛋了……');
      await era.printAndWait([
        '因为被暴走的担当拉抓住而动弹不得的 ',
        you.get_colored_name(),
        '，只能在众人的注视下绝望地看着 ',
        urara.get_colored_name(),
        ' 那目的性强烈的可爱小脸……',
      ]);
      await era.printAndWait([
        '接下来，无法逃跑的 ',
        you.get_colored_name(),
        ' 便彻底感受到了 ',
        urara.get_colored_name(),
        '「窒息般的爱欲」。',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') >= 10) {
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          '纯真中带着七分魅惑神情毫不紧张地靠近了 ',
          you.get_colored_name(),
          '，俏皮地咬住了 ',
          you.get_colored_name(),
          ' 的嘴唇。',
        ]);
        await era.printAndWait([
          '而在之后漫长的被小',
          urara.uma_sex_title,
          '索取的过程中，',
          you.get_colored_name(),
          ' 总觉得自己要失去意识了。',
        ]);
        await era.printAndWait([
          '一开始 ',
          you.get_colored_name(),
          ' 还能隐约听到旁观者一下炸开的窃窃私语，但马上就在 ',
          urara.get_colored_name(),
          ' 灌注的爱意中变得模糊了。',
        ]);
        await era.printAndWait([
          '在周围的声音差不多都安静下来的时候，',
          urara.get_colored_name(),
          ' 终于恋恋不舍的放开了快要倒下的 ',
          you.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '但在这之后，',
          urara.get_colored_name(),
          ' 还带着纯真又无辜的表情伸出舌尖抹了抹 ',
          you.get_colored_name(),
          ' 的嘴唇。',
        ]);
      } else {
        await era.printAndWait([
          '或许是出于害羞，又或是缺乏经验而紧张，操之过急的小',
          urara.uma_sex_title,
          '与 ',
          you.get_colored_name(),
          ' 的正脸撞了个正着。',
        ]);
        await urara.say_and_wait('呜哇、好疼！好像磕到嘴唇和牙了……');
        await era.printAndWait([
          '但失败的第一步并没能使 ',
          urara.get_colored_name(),
          ' 停下，焦躁的拽着 ',
          you.get_colored_name(),
          ' 的衣领，',
          urara.get_colored_name(),
          ' 继续粗暴地品尝着 ',
          you.get_colored_name(),
          ' 的口气。',
        ]);
        await era.printAndWait([
          '尽量无视着周围的窃窃私语声，被小',
          urara.uma_sex_title,
          '侵略性拉扯着颈部的 ',
          you.get_colored_name(),
          ' 总觉得自己随时都会晕过去……',
        ]);
        await era.printAndWait([
          '不过在 ',
          you.get_colored_name(),
          ' 临近力竭倒下的时候，',
          urara.get_colored_name(),
          ' 终于带着一点小遗憾放开了自己的 ',
          callname,
          '。',
        ]);
      }
      era.println();
      await you.say_and_wait(
        '虽然这么想很失礼，但乌拉拉不会是欲求不满了……？',
        true,
      );
      await era.printAndWait([
        '瘫坐在椅子上，',
        you.get_colored_name(),
        ' 用余光扫过了捂住脸的服务员与不敢抬头的其他客人，有气无力的喘了口气。',
      ]);
      await era.printAndWait([
        '小小的担当此时此刻还在用爱魅的目光看着 ',
        you.get_colored_name(),
        '，似乎在跟 ',
        you.get_colored_name(),
        ' 说要不要继续。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 承认纯真的 ',
        urara.get_colored_name(),
        ' 的觉醒和自己脱不了干系，可一口气变成这样沉迷色欲的粉红小',
        urara.sex_code - 1 ? '母马' : '公马',
        '，是否太超过了？',
      ]);
      await era.printAndWait([
        '深刻反省着自己的同时，',
        you.get_colored_name(),
        ' 看到 ',
        urara.get_colored_name(),
        ' 好像又面带红晕靠了过来。',
      ]);
      await urara.say_and_wait(
        `要证明是情侣的话，${callname} 觉得这样是不够的吧？没关系，我也是这样想的哦！`,
      );
      await urara.say_and_wait(['所以 ', callname, '……再来一次吧？']);
      await you.say_and_wait(
        `不要这样啊乌拉拉，${callname} 真的已经不行了！至少、至少在社会性死亡后留一条生命上的退路吧！`,
        true,
      );
      await era.printAndWait([
        '注视着悄悄舔着嘴唇的樱粉色，',
        you.get_colored_name(),
        ' 不堪重负的闭上了眼睛……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '嗯、嘛、啊……学会享受吧，不也挺好吗？',
      );
    };
    f.title = title;
    return f;
  })(),
  try_dress: (() => {
    const title = '要试穿舞台装了哦！';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '为了在下次比赛前做好充分的准备，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 来到商场，准备购买之后的训练中需要的运动用品。',
      ]);
      await era.printAndWait([
        '但在路过那家专门定制决胜服的店面时，',
        urara.get_colored_name(),
        ' 却收到了「试穿舞台装」的邀请。',
      ]);
      await era.printAndWait([
        '而在与',
        urara.uma_sex_title,
        '店员的一番短暂交流后，你们了解到了事情的原委：',
      ]);
      await era.printAndWait(
        '最近他们是收到了来自其他特雷森的委托，需要定制一套新款舞台装。',
      );
      await era.printAndWait(
        '本来是想从过去没用上的样款中进行改进，但又不知道该挑哪款比较好。',
      );
      await era.printAndWait(
        '不过既然不好选择的话，那直接请特雷森的学生们来试穿不就好了？',
      );
      await urara.say_and_wait([
        '所以在这个时候，我和 ',
        callname,
        ' 就正好路过了吗？真的很巧呢！',
      ]);
      await urara.say_and_wait([
        '试穿新衣服的话乌拉拉确实很有兴趣！但是今天还有其他的事要做，所以——',
      ]);
      await era.printAndWait([
        '在短暂的犹豫后，',
        urara.get_colored_name(),
        ' 果断地选择先征求 ',
        you.get_colored_name(),
        ' 的意见。',
      ]);

      era.printButton('「没关系哦，想试试的话就去做。」', 1);
      await era.input();

      await urara.say_and_wait('太好了——！');
      await era.printAndWait([
        '得到了肯定的答复，在短暂等待之后，小',
        urara.uma_sex_title,
        '便兴奋的在店员的指导下跳进了已经挂好试穿衣物的换衣间。',
      ]);
      await era.printAndWait([
        '不过 ',
        urara.get_colored_name(),
        ' 没问题吗？',
        urara.sex,
        '应该能一个人好好穿衣服吧？',
      ]);
      await era.printAndWait([
        '虽然一开始还有这样的担心，但随着 ',
        urara.get_colored_name(),
        ' 衣着整齐的笑着出现在面前时，',
        you.get_colored_name(),
        ' 也随之打消了顾虑。',
      ]);
      await era.printAndWait([
        '不过注视着用Live时的舞步给店员们找拍照角度的担当，',
        you.get_colored_name(),
        ' 还是稍微有些感慨。',
      ]);
      await era.printAndWait([
        '就算平常的表现还很稚嫩，',
        urara.sex,
        '也一直都在成长，就算没能找到训练员，',
        urara.sex,
        '也能够好好长大吧。',
      ]);
      await era.printAndWait([
        '每当有这样的想法，',
        you.get_colored_name(),
        ' 也会为第一次相遇的时，没有与 ',
        urara.get_colored_name(),
        ' 擦肩而过感到庆幸。',
      ]);
      await era.printAndWait([
        '或许没有遇上 ',
        urara.get_colored_name(),
        ' 的 ',
        you.get_colored_name(),
        ' 也可以走出困境，或许没有 ',
        you.get_colored_name(),
        ' 的 ',
        urara.get_colored_name(),
        ' 也能拿到第一名……',
      ]);
      await era.printAndWait([
        '但如今明知道不能做，身为训练员的 ',
        you.get_colored_name(),
        ' 却总会产生想要将 ',
        urara.get_colored_name(),
        ' 独占的念头。',
      ]);
      await era.printAndWait([
        '身为训练员，这还真差劲。摇头否定了作为大人不合格的思绪，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 偶然间对上了视线。',
      ]);
      await era.printAndWait([
        '仿佛进行着个人Live的小小偶像，带着樱粉色的明媚笑容向 ',
        you.get_colored_name(),
        ' 无声地比出了「马儿跳传说」的飞吻。',
      ]);
      await era.printAndWait([
        '尽管没有歌声与音乐的衬托，自己也早已在其他地方看过很多次，小',
        urara.uma_sex_title,
        '红晕的脸颊与娇羞的飞吻还是击中了 ',
        you.get_colored_name(),
        ' 的心。',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 稳住砰砰直跳的心脏前，',
        urara.get_colored_name(),
        ' 就在店员们「OK」的手势中重新跳进了后台的换衣间中。',
      ]);
      await you.say_and_wait('……刚刚那个，是乌拉拉？', true);
      await era.printAndWait([
        '按住躁动不安的胸口，冷静下来的 ',
        you.get_colored_name(),
        ' 才反应过来，那位掷出了恋爱飞吻的',
        urara.teen_sex_title,
        '，正是表面还显稚嫩的小担当……',
      ]);
      era.drawLine();

      await urara.print_and_wait([
        '在更衣间中，刚刚突袭了 ',
        callname,
        ' 的 ',
        urara.get_colored_name(),
        ' 扶住穿衣镜的边沿，努力抑制着蹦个不停的心跳声。',
      ]);
      await urara.say_and_wait(
        '那个、快停下来啊！现在并没有在训练，也没有在比赛哦？呜……脑袋晕晕的……',
        true,
      );
      await urara.say_and_wait(
        [
          '明明只是想突然吓吓 ',
          callname,
          ' 的，但是为什么做起来后会变得好害羞……',
        ],
        true,
      );
      await urara.print_and_wait([
        '稍微冷静一点后，',
        urara.get_colored_name(),
        ' 带着不明不白的感情慢慢撑起了身子。',
      ]);
      await urara.print_and_wait([
        '随着',
        urara.teen_sex_title,
        '视线上移，从余光的一角到逐渐直视，',
        urara.get_colored_name(),
        ' 从镜中看到了「另一位',
        urara.uma_sex_title,
        '」。',
      ]);
      await urara.print_and_wait([
        '镜中的',
        urara.uma_sex_title,
        '，是谁？虽然和 ',
        urara.get_colored_name(),
        ' 长得很像，穿着 ',
        urara.get_colored_name(),
        ' 一样的衣服，但一看就是讨人喜欢的样子。',
      ]);
      await urara.print_and_wait([
        '就如同书里的',
        urara.sex_code - 1 ? '公主' : '王子',
        '那般，红透的脸颊，含羞的双眼……这大概是「初恋的',
        urara.teen_sex_title,
        '」的样子？',
      ]);
      await urara.print_and_wait([
        '虽然不是很懂，但就像大家说的那样，和幼稚的 ',
        urara.get_colored_name(),
        ' 一点也不一样，没人会不喜欢这样的',
        urara.child_sex_title,
        '……',
      ]);
      await urara.say_and_wait(
        ['那……', callname, ' 也会喜欢这样的', urara.child_sex_title, '子吗？'],
        true,
      );
      await urara.print_and_wait([
        '伸手轻轻抚摸着镜中的「',
        urara.get_colored_name(),
        '」，感受着再次加速的心跳，',
        urara.teen_sex_title,
        '没来由的想到。',
      ]);
      await urara.say_and_wait(
        ['但是为什么这时又想到了 ', callname, ' 呢？'],
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          [
            '虽然还是不知道怎么办才好，但是乌拉拉果然是喜欢看到 ',
            callname,
            ' 开心的样子……',
          ],
          true,
        );
        await urara.print_and_wait([
          '小',
          urara.uma_sex_title,
          '看向了更衣室一角中，那件没有被挂起来的衣服。',
        ]);
        await urara.say_and_wait(
          [
            '乌拉拉也知道那件衣服为什么没有提前拿出来，但是那件衣服的话，',
            callname,
            ' 应该会……',
          ],
          true,
        );
        await urara.print_and_wait([
          '努力的支起耳朵，逐渐失去理智的初恋的',
          urara.teen_sex_title,
          '决定做出一个激进的尝试。',
        ]);
      } else {
        await urara.say_and_wait(
          [
            '为什么乌拉拉会感到开心呢？是因为看到了 ',
            callname,
            ' 很开心的样子吗？',
          ],
          true,
        );
        await urara.say_and_wait(
          ['但如果 ', callname, ' 更喜欢乌拉拉的话，会为了乌拉拉变得更好吗？'],
          true,
        );
        await urara.say_and_wait(
          ['那让 ', callname, ' 被乌拉拉迷住的话，或许……？'],
          true,
        );
        await urara.print_and_wait([
          '掀开箱子，拿出那件衣服，初恋的',
          urara.teen_sex_title,
          '在犹豫了片刻后用笨拙的理由说服了自己。',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait('这件衣服也换好了哦！');
      await era.printAndWait([
        '随着 ',
        urara.get_colored_name(),
        ' 带着半分羞涩的元气宣言，更衣间过长的帘子被拉开了。',
      ]);
      await era.printAndWait(
        '紧接着，原本好不容易热闹起来的空气也瞬间凝固了。',
      );
      await era.printAndWait([
        '在场除了面色羞红的 ',
        urara.get_colored_name(),
        ' 之外，所有人都像看到了什么震撼的东西般停下了动作。',
      ]);

      era.printButton('「……？！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 不知道怎样描述现在的 ',
        urara.get_colored_name(),
        ' 比较准确，别说形容，现在的 ',
        you.get_colored_name(),
        ' 几乎失去了继续直视担当的毅力。',
      ]);
      await era.printAndWait([
        '不过，那的确是作为训练员时从未见过的 ',
        urara.get_colored_name(),
        '——',
      ]);
      await era.printAndWait([
        '被束紧的胸衣突出的弧度下方融为一体的，是被裹住的纤细腰肢与勒进',
        urara.teen_sex_title,
        '肉体曲线的紧致高叉；',
      ]);
      await era.printAndWait([
        '从后腰与尾根延伸出的蕾丝下摆诱惑地摇曳着，故意空出的肚脐与小腹又仿佛只有情趣意味；',
      ]);
      await era.printAndWait([
        '转到一侧的樱色马尾辫旁是心形的金属耳饰与漆黑的耳套，与皮质手套与长靴一同反射着爱欲的光。',
      ]);
      await era.printAndWait([
        '被这身纯黑色的装束包裹的着，本应「稚嫩」的 ',
        urara.get_colored_name(),
        ' 此刻娇艳而魅惑。',
      ]);
      await era.printAndWait(
        '这到底是哪里的偶像？这魅魔般的装束又是要用在哪里的舞台服？',
      );
      await era.printAndWait([
        '为什么在樱瞳中失去光彩的 ',
        urara.get_colored_name(),
        ' 身上，这件过激的舞台服会如此合适？',
      ]);
      await era.printAndWait([
        '眯起眼睛的 ',
        urara.get_colored_name(),
        '，像是锁定了猎物般向',
        urara.sex,
        '的 ',
        callname,
        ' 投来的兴奋的笑容又是？',
      ]);
      await era.printAndWait([
        '被 ',
        urara.get_colored_name(),
        ' 的视线弄得脊背发毛的 ',
        you.get_colored_name(),
        ' 咽了口口水，不知不觉中，',
        you.get_colored_name(),
        ' 仿佛也在逐渐落入不断蒸发理智的陷阱……',
      ]);
      await era.printAndWait([
        '但就在大人们陷入沉默的同时，小',
        urara.uma_sex_title,
        '却率先一步捂住了逐渐红透的脸。',
      ]);
      await urara.say_and_wait('对、对不起，乌拉拉做过头了，大概……');
      await era.printAndWait([
        '小小的魅魔仅维持了几秒，便马上变回了躲进一旁的换衣间帘子后，因过于害羞变得眼泪汪汪的 ',
        urara.get_colored_name(),
        '。',
      ]);
      era.println();

      await you.say_and_wait('与目白城合作，兼职制作特殊用途的衣服？');
      await era.printAndWait([
        '在大家整理好现状之后，被震撼的 ',
        you.get_colored_name(),
        ' 难以置信地复述着还在不停地道歉着店员的话，一时不知该说什么好。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店员A',
        '真的很对不起，那件衣服原本是准备处理掉的，但是最后却忘在试衣间里了……',
      );
      await you.say_and_wait('这个理由姑且还算那么回事……');
      await you.say_and_wait(
        '等下，其他衣服就算了，为什么这件衣服乌拉拉穿上也正好合适？定制这件衣服的原主又是……？',
        true,
      );
      await you.say_and_wait('……果然还是算了吧。', true);
      await era.printAndWait([
        '走在拎着大包小包的运动用品走在回去的路上，',
        you.get_colored_name(),
        ' 选择不再去思考这个可疑的问题。',
      ]);
      await era.printAndWait([
        '但在 ',
        you.get_colored_name(),
        ' 沉思的片刻，走在身旁的 ',
        urara.get_colored_name(),
        ' 却发问了。',
      ]);
      await urara.say_and_wait([
        '如果乌拉拉以后继续穿给 ',
        callname,
        ' 看的话，',
        callname,
        ' 会心动吗？',
      ]);
      inner_urara.say_as_unknown([
        '面对 ',
        urara.get_colored_name(),
        ' 的问题，训练员',
        you.adult_sex_title,
        '（您）回答道。',
      ]);
      era.printButton('「说什么呢，那样也太过激了……」（好感+10）', 1);
      era.printButton('「如果不管其他的话……应该会吧？」（爱慕+5）', 2);
      const ret = await era.input();
      await era.printAndWait([
        '听到 ',
        you.get_colored_name(),
        ' 的回答，',
        urara.get_colored_name(),
        ' 只露出了一个不像平常般难以琢磨笑容。',
      ]);
      await era.printAndWait([urara.sex, '到底在想什么呢……']);
      era.drawLine();
      await urara.say_and_wait([
        '虽然看上去很不情愿，可 ',
        callname,
        ' 没有否认会心动呢！虽然这次没撑太久。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～这也是为了以后也让 ',
        callname,
        ' 心动嘛！当然，是要看着乌拉拉呢……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '这样真的好吗？信任这样一份冲动……人类可是非常靠不住的哦？',
      );
      await urara.say_and_wait(['没关系的！因为我相信着 ', callname, ' 哦！']);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '决心前进之夜';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {number} arim_kin_rank 有马纪念的名次，为0表示没有参加
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      arim_kin_rank,
    ) => {
      inner_urara.name = '「春乌拉拉」';
      await era.printAndWait(
        '虽然圣诞节直到昨天的平安夜后才完全降临，但外面却从几天前就洋溢着充满甜味的节日气息。',
      );
      await era.printAndWait([
        '只是对于 ',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 来说，同是一年一度，昨天的有马纪念却比今日圣诞节要重要太多。',
      ]);
      await era.printAndWait([
        '倒不是说不期待节日，只要是能够传播快乐的节日，',
        urara.get_colored_name(),
        ' 自然是全部欢迎，而 ',
        you.get_colored_name(),
        ' 也会提前准备。',
      ]);
      if (arim_kin_rank > 0) {
        await era.printAndWait(
          '但似乎是在有马上燃烧得过于厉害了，现在这只小马除了必要的活动外一直是懒洋洋的模式。',
        );
        await era.printAndWait([
          '在训练室里揉着躺在沙发上变得软绵绵的 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 在键盘上敲下了工作尾声的最后一个字符。',
        ]);
        if (arim_kin_rank === 1) {
          await era.printAndWait([
            '回忆着在错愕的相遇后一头钻出入场通道时看到的场景，当时的 ',
            you.get_colored_name(),
            ' 甚至一度以为自己在白日做梦。',
          ]);
          await era.printAndWait([
            '直到在惊诧中被大家围着问东问西，又稀里糊涂看到 ',
            urara.get_colored_name(),
            ' 站上Live的C位后，才终于确信一切都是事实。',
          ]);
          await era.printAndWait([
            '而在那之后，',
            urara.get_colored_name(),
            ' 被朋友们保护的很好，但 ',
            you.get_colored_name(),
            ' 现在只要独自一人就会各种麻烦事飞个不停。',
          ]);
          await era.printAndWait([
            '不过即使如今「在照顾 ',
            urara.get_colored_name(),
            '」已经变得像个逃难借口似的，在那之上的压力可不能给到 ',
            urara.get_colored_name(),
            ' 啊。',
          ]);
          await era.printAndWait([
            '大人的麻烦事，好歹由大人自己烦恼吧。关上电脑，',
            you.get_colored_name(),
            ' 轻声叹了口气。',
          ]);
          await era.printAndWait([
            '察觉到 ',
            callname,
            ' 的动作而准备起身的小',
            urara.uma_sex_title,
            '，',
            you.get_colored_name(),
            ' 也适时的收回了还带有柔软触感的手指。',
          ]);
        } else {
          await era.printAndWait([
            '其实关于参加有马这点 ',
            you.get_colored_name(),
            ' 的想法和大家都差不多，只要 ',
            urara.get_colored_name(),
            ' 现在能站上赛道就已经是胜利了。',
          ]);
          await era.printAndWait([
            '这原本是值得高兴的事，但那位突然与 ',
            you.get_colored_name(),
            ' 相见的',
            inner_urara.get_colored_name(),
            '所说的，到底又是……',
          ]);
          await era.printAndWait([
            '因察觉到 ',
            callname,
            ' 的动作而准备起身的小',
            urara.uma_sex_title,
            '，',
            you.get_colored_name(),
            ' 也适时的收回了还带有柔软触感的手指。',
          ]);
        }
      } else {
        await era.printAndWait([
          '今天的 ',
          urara.get_colored_name(),
          ' 正安静地坐在工作的 ',
          callname,
          ' 身旁，但耐不住性子摇摆的小耳朵还是会悄悄搭上 ',
          you.get_colored_name(),
          ' 的肩膀。',
        ]);
        await era.printAndWait([
          '而为了能够及时回应小',
          urara.uma_sex_title,
          '的等待中的期待，',
          you.get_colored_name(),
          ' 也适当的加快了手指敲击键盘的节奏……',
        ]);
      }
      await era.printAndWait(
        '话又说回来，这边本来也不会认真过圣诞，但能挑个特别的日子互相献上祝福，不论何时都是值得的。',
      );
      await era.printAndWait([
        '所以，就算是为了感谢小',
        urara.uma_sex_title,
        '一直以来的努力，今天的',
        urara.sex,
        '也值得 ',
        you.get_colored_name(),
        ' 为其准备一些特别的回忆。',
      ]);
      await era.printAndWait([
        '合上电脑，',
        you.get_colored_name(),
        ' 从桌下的拿出了事先为 ',
        urara.get_colored_name(),
        ' 准备好的圣诞礼物。今天的',
        urara.sex,
        '，应该正期待着这一刻吧。',
      ]);
      if (high_relation) {
        await era.printAndWait([
          '看到 ',
          you.get_colored_name(),
          ' 突然递来的礼物盒，',
          urara.get_colored_name(),
          ' 先是有些吃惊的一愣，但随后可爱的笑容便带着惊喜爬上脸颊。',
        ]);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的肯定下兴高采烈的翻开礼盒，小',
          urara.uma_sex_title,
          '惊喜地从盒中收到了一副崭新的粉色耳套。',
        ]);
      } else {
        await era.printAndWait([
          '大概是没想到自己会收到礼物，',
          urara.get_colored_name(),
          ' 先是一愣，但在得到 ',
          you.get_colored_name(),
          ' 的肯定后还是接过了盒子。',
        ]);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的示意下有些犹豫的打开礼物包装，随后 ',
          urara.get_colored_name(),
          ' 的樱瞳便在拿起盒中崭新的耳套后逐渐明亮起来。',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait(
          '「恋人赠予的耳套与尾饰是爱的证明」，古事记上完全没记载这回事，但在目前的学生间非常流行。',
        );
        await era.printAndWait([
          '虽然借着圣诞节送并不贵重的小饰品是有些卑鄙，但伴随小',
          urara.uma_sex_title,
          '奔跑已久的旧耳套确实已经洗褪色了。',
        ]);
      } else {
        await era.printAndWait([
          '虽然向关系没那么好的',
          urara.uma_sex_title,
          '赠予耳套或尾饰可能会被视为失礼之举，但 ',
          urara.get_colored_name(),
          ' 应该不会太在乎这点。',
        ]);
        await era.printAndWait([
          '当然 ',
          you.get_colored_name(),
          ' 也并非出于非礼的考量，仅仅是因为 ',
          urara.get_colored_name(),
          ' 那双不知用了多久的耳套实在太旧了而已。',
        ]);
      }
      await urara.say_and_wait([
        '诶？这是 ',
        callname,
        ' 准备的吗？好棒哦——！而且和乌拉拉现在的是同款呢！',
      ]);

      era.printButton('「是圣诞老人请我转交礼物给你的哦。」', 1);
      await era.input();

      await urara.say_and_wait([
        '真的吗！？原来今年的圣诞老人是 ',
        callname,
        ' 呢！嘿嘿～谢谢 ',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '嗯？原来 ',
        urara.get_colored_name(),
        ' 是不信圣诞老人的类型……不对，难道是看透了圣诞老人本质的类型？',
      ]);
      await era.printAndWait([
        '看着担当开心却又另有所指的笑颜，',
        you.get_colored_name(),
        ' 忽然意识到 ',
        urara.get_colored_name(),
        ' 令人意外的情报似乎又增加了……',
      ]);
      await urara.say_and_wait(
        '不过呢，圣诞节是大家都会很开心的节日哦！不只小孩子，连大人也是！',
      );
      await urara.say_and_wait([
        '所以，乌拉拉在这时也会当圣诞老人，将专属的礼物送给 ',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '挂起笑容靠过来，',
        urara.get_colored_name(),
        ' 将从口袋中掏出的某样东西塞进了 ',
        you.get_colored_name(),
        ' 的手中。',
      ]);
      await era.printAndWait([
        '打开手心，小',
        urara.uma_sex_title,
        '交到 ',
        you.get_colored_name(),
        ' 手中的是一张被涂抹过的彩色纸片，纸片的中间还写着「什么都帮券」。',
      ]);
      await urara.say_and_wait(
        '不管是帮忙大扫除、帮忙煮饭还是陪你聊天，都尽管吩咐！',
      );
      await urara.say_and_wait([
        '乌拉拉以后也会更努力的，所以 ',
        callname,
        ' 需要帮忙时就尽管叫我吧！',
      ]);

      era.printButton('「嗯！谢谢你！」', 1);
      await era.input();

      await urara.say_and_wait([
        '嘿嘿～',
        callname,
        ' 现在很开心对吧？我小的时候，也送过这样的券给爸爸，爸爸也非常开心呢！',
      ]);
      await urara.say_and_wait([
        '我也想让 ',
        callname,
        ' 跟爸爸一样开心！虽然爸爸却把券珍藏起来，到现在一张都还没过……',
      ]);
      await urara.say_and_wait([
        '所以！乌拉拉希望 ',
        callname,
        ' 不要把券收藏起来，最好现在就对乌拉拉好好使用哦！',
      ]);
      await era.printAndWait([
        '带着',
        urara.teen_sex_title,
        '的俏皮笑容扑进 ',
        you.get_colored_name(),
        ' 的怀中，不知何时突然又长大了一点的小',
        urara.uma_sex_title,
        '有点任性的压在住了 ',
        you.get_colored_name(),
        '。',
      ]);

      await urara.say_and_wait([
        '所以 ',
        callname,
        '，你想用这张券来做些什么呢？',
      ]);
      era.printButton(
        '「现在的话，就许愿乌拉拉今后跑得更快一点吧？」（速度&耐力&智力+10）',
        1,
      );
      era.printButton(
        '「那下次去商店街特训的时候，要更努力的帮大家哦？」（力量&根性+10）',
        2,
      );
      era.printButton(
        '「……这张券，可以兑换乌拉拉的身体做礼物吗？」（全属性+5）',
        3,
        { disabled: era.get('love:52') < 50 },
      );
      const ret = await era.input();
      if (ret < 3) {
        await urara.say_and_wait([
          '诶？竟然是这么普通的愿望吗？我还以为 ',
          callname,
          ' 作为大人会想要些乌拉拉不知道的东西！',
        ]);

        era.printButton(
          `「先不说这是在期待什么，乌拉拉觉得作为大人的${callname}会要什么不知道的东西？」`,
          1,
        );
        await era.input();

        await urara.say_and_wait([
          '嗯……到底是什么呢？比如说 ',
          callname,
          ' 想要乌拉拉什么的？',
        ]);
        await era.printAndWait('啊？');
        await urara.say_and_wait([
          '比如说 ',
          callname,
          ' 要乌拉拉一直陪在身边什么的……不过这些好像日常就在做？',
        ]);
        await era.printAndWait('——呼！');
        await era.printAndWait([
          '面对小',
          urara.uma_sex_title,
          '依旧无暇的小脸，',
          you.get_colored_name(),
          ' 在心中长舒一口气。好险，还以为 ',
          urara.get_colored_name(),
          ' 又被谁灌输了奇怪知识……',
        ]);
        await urara.say_and_wait([
          '但是如果乌拉拉想要把自己的全部送给 ',
          callname,
          '，',
          callname,
          ' 会不会收下呢？',
        ]);
        await era.printAndWait(
          '……结果还是不能掉以轻心，这到底是谁教的啊？不过此时此刻，这个问题的确值得回答——',
        );

        era.printButton(
          '「我不是早就收到礼物了吗？『乌拉拉赠予的全部日常』。」',
          1,
        );
        await era.input();

        await era.printAndWait([
          '不论回报的',
          urara.teen_sex_title,
          '早已将最适合的礼物送入 ',
          you.get_colored_name(),
          ' 的手中，那在圣夜降临之时，或许也无需其他？',
        ]);
        await era.printAndWait([
          '端详着',
          urara.teen_sex_title,
          '混入稍许疑惑的笑脸，',
          you.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 又一同渡过了如同礼物般的一日。',
        ]);
      } else {
        await urara.say_and_wait([
          '嗯！可以哦？因为就算 ',
          callname,
          ' 不说，乌拉拉也打算这样做的……',
        ]);
        await era.printAndWait([
          '没有丝毫犹豫的回应了 ',
          you.get_colored_name(),
          ' 充满欲望的试探，一双小手害羞的爬上了 ',
          you.get_colored_name(),
          ' 的敏感处。',
        ]);
        await urara.say_and_wait([
          '……而且 ',
          callname,
          ' 的这里，也变得很有感觉了对吧？',
        ]);
        await era.printAndWait([
          '隔着布料用手指轻抚着 ',
          you.get_colored_name(),
          ' 的敏感之处，小',
          urara.uma_sex_title,
          '稚嫩的脸颊逐渐染上绯色的潮红。',
        ]);
        await era.printAndWait([
          '迫不及待的水声早已浸透了',
          urara.teen_sex_title,
          '包裹紧致的下着，将发情的潮水失控的涂抹在 ',
          you.get_colored_name(),
          ' 的腿上。',
        ]);
        if (era.get('exp:52:性爱次数') >= 10) {
          await urara.say_and_wait(
            '嘿嘿～其实从坐上来的时候，乌拉拉就已经变得湿乎乎的了……',
          );
          await urara.say_and_wait([
            '已经、难以忍受了……乌拉拉、变成坏孩子，怎么想都是 ',
            callname,
            ' 的错……啾～',
          ]);
          await era.printAndWait([
            '自然地抱紧爱人，被 ',
            you.get_colored_name(),
            ' 夜以继日调教的娇小身体，如今也熟练的准备着接纳主人欲望的前戏。',
          ]);
          await era.printAndWait([
            '在湿漉漉的深吻中与 ',
            you.get_colored_name(),
            ' 缠绵地交换着粘稠的体液，进入状态的小',
            urara.sex_slave_title,
            '熟练的褪下自己的衣物。',
          ]);
        } else {
          await urara.say_and_wait([
            '哈啊……对不起，弄脏了 ',
            callname,
            ' 的衣服……但是乌拉拉已经、忍不住了……',
          ]);
          await urara.say_and_wait([
            '乌拉拉、会满足 ',
            callname,
            ' 的愿望的，所以乌拉拉会努力的……哈嗯～',
          ]);
          await era.printAndWait([
            '受本能的驱使与恋人相拥，在爱人的命令下，小',
            urara.sex_slave_title,
            '开始生疏但认真的进行着服侍主人的前戏。',
          ]);
          await era.printAndWait([
            '在朦胧失神的间隙被侵犯着口腔，任 ',
            you.get_colored_name(),
            ' 肆意摆布身体的小',
            urara.uma_sex_title,
            '很快便被扯下了身上的衣物。',
          ]);
        }
        await urara.say_and_wait([
          '……',
          callname,
          '，今天、请尽情享受……作为圣诞礼物的乌拉拉吧～？',
        ]);
        await era.printAndWait([
          '被 ',
          you.get_colored_name(),
          ' 按倒在身下的最后，因爱意而恍惚的 ',
          urara.get_colored_name(),
          ' 轻声舔舐着 ',
          you.get_colored_name(),
          ' 的耳垂，宣布了只属于两人的淫乱晚宴的开端……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {number} pregnant 春乌拉拉作为母亲的孩子数量（生下+怀孕）
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   */
  async load_talk(urara, inner_urara, callname, pregnant, high_relation) {
    const buffer = [];
    if (pregnant) {
      if (high_relation) {
        if (era.get('love:52') >= 75) {
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '，下次再见时，请多抱抱',
                pregnant > 1 ? '孩子们' : '这个孩子',
                '吧！',
              ]),
            () =>
              urara.say_and_wait(
                '没关系的，乌拉拉会安慰好大家的，如果下次能再见的话，再一起——',
              ),
          );
        } else {
          buffer.push(
            () =>
              urara.say_and_wait([
                '看来 ',
                callname,
                ' 和乌拉拉，都没能做好准备呢……对不起……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                '，乌拉拉想留下',
                pregnant > 1 ? '孩子们' : '这个孩子',
                '，或者下次还能再见的话——',
              ]),
          );
        }
      } else if (era.get('love:52') >= 75) {
        buffer.push(
          () =>
            urara.say_and_wait([
              '我们还能见面对吧？',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '也能……对不起，但是我们还能——',
            ]),
          () =>
            urara.say_and_wait([
              '不要抛弃',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '！求你了，',
              callname,
              '！答应乌拉拉，至少让我们下次——',
            ]),
        );
      } else {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 对',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '是什么样的感觉呢？乌拉拉还不想……',
            ]),
          () =>
            urara.say_and_wait([
              '只是被抛弃的话乌拉拉一个人也可以，但是',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '也再也不见的话——',
            ]),
        );
      }
      await get_random_entry(buffer)();
      await inner_urara.say_as_unknown_and_wait(
        '……哈，一句安慰您的话都想不出来呢……',
      );
    } else {
      if (high_relation) {
        if (era.get('love:52') >= 75) {
          buffer.push(
            () =>
              urara.say_and_wait([
                '乌拉拉还不想离开呢，所以 ',
                callname,
                '，下次也可以和乌拉拉在一起吗……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                '，还能相遇的话，不管发生什么，一定可以再次喜欢上彼此吧——',
              ]),
          );
        } else {
          buffer.push(
            () =>
              urara.say_and_wait([
                '不用担心我哦？乌拉拉愿意相信 ',
                callname,
                ' 的选择！所以——',
              ]),
            () =>
              urara.say_and_wait([
                '下次还能在一起的话，也能和 ',
                callname,
                ' 做上舒服的事就好了——',
              ]),
          );
        }
      } else if (era.get('love:52') >= 75) {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 不是在抛弃乌拉拉对吧……对不起，不管发生什么，乌拉拉都不怪 ',
              callname,
              '……',
            ]),
          () =>
            urara.say_and_wait(
              '还是厌倦了，或者乌拉拉又做错了什么？对不起，乌拉拉还是……对不起……',
            ),
        );
      } else {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 再见到上一个乌拉拉的时候，可以……对她好一点吗？',
            ]),
          () =>
            urara.say_and_wait([
              callname,
              '，下次的话，还能和 ',
              callname,
              ' 一起……对不起，没什么……',
            ]),
        );
      }
      await get_random_entry(buffer)();
      await inner_urara.say_as_unknown_and_wait(
        '……姑且还没关系，下次别做过头了哦？',
      );
    }
  },
  basement_end: (() => {
    const title = '无期的自由';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait(['……']);
      await era.printAndWait([
        '现在是什么时间？距离上次问时间又过多久了？在不分昼夜的密室中，',
        you.get_colored_name(),
        ' 失去了时间概念。',
      ]);
      await era.printAndWait(['只是，现在时间还重要吗？']);
      await era.printAndWait([
        '原本阴暗的室内被温柔的暖光填满，充满生活感的家装摆满了房间，一侧的墙上还挂起了亮着自然光的假窗。',
      ]);
      await era.printAndWait([
        '床边的书桌上放着电脑与文件，房间中央的矮桌上摆着零食与果盘，甚至在另一面墙边还隔出了独立的卫浴……',
      ]);
      await era.printAndWait([
        '环顾着周围布置得如正常起居室般温馨明亮的环境，',
        you.get_colored_name(),
        ' 只觉得有些恍惚。',
      ]);
      await urara.say_and_wait(['嘿嘿～这里就像两人的小家一样呢！']);
      await era.printAndWait(['最初就像玩笑般的话语，如今却逐渐变成了现实。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 不知道 ',
        urara.get_colored_name(),
        ' 是如何向别人解释',
        urara.sex,
        '的训练员去了哪里，也不知道 ',
        urara.get_colored_name(),
        ' 从哪搬来的家具，甚至是接来了水电。',
      ]);
      await era.printAndWait([
        '原本应是很重要的问题，但现在只要伸手就能抚摸到小',
        urara.uma_sex_title,
        '柔顺的粉色长发，这些似乎也都无所谓了。',
      ]);
      await era.printAndWait([
        '靠在 ',
        you.get_colored_name(),
        ' 的身边安然睡去的 ',
        urara.get_colored_name(),
        '，在梦中不知不觉间挂起了幸福的笑容。',
      ]);
      await era.printAndWait([
        '总想离开最后却选择放弃的训练员，与选择监禁又逐渐变得温柔的',
        urara.uma_sex_title,
        '，到底是谁驯化了谁呢？',
      ]);
      await era.printAndWait(['这个答案，或许也只有在此处的二人自己知道了。']);
      await urara.say_and_wait([callname, '、', callname, '，今天是……']);
      await era.printAndWait([
        '不知何时，从小憩中醒来的 ',
        urara.get_colored_name(),
        ' 正仰头看着自己依靠的人，重新变得清澈明亮的双瞳正绽开着樱色。',
      ]);

      era.printButton('「是……该出门的日子吗？」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯，今天是要带 ',
        callname,
        ' 出去散心晒太阳的日子哦？',
      ]);
      await era.printAndWait([
        '不怕「爱人」逃跑吗？这样的问题已经不会再有了。如果真的想要离开，',
        you.get_colored_name(),
        ' 早就走掉无数次了。',
      ]);
      await era.printAndWait([
        '再次久违的站在人来人往的街道上，两人间仅仅只是十指相扣，就仿佛比手铐或锁链更加牢固。',
      ]);
      await era.printAndWait([
        '看着 ',
        urara.get_colored_name(),
        ' 如春花盛开般的笑颜在蓝天下恢复如初，不知道第多少次的恍惚感再次冲上了 ',
        you.get_colored_name(),
        ' 的额头。',
      ]);
      await era.printAndWait(['其实，有些事一直都是明白的吧？']);
      await era.printAndWait([
        '温柔的',
        urara.sex,
        '选择「监禁」是为了什么，以背德的身体与 ',
        you.get_colored_name(),
        ' 相融的无数个浑浊的夜又是为了什么。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 不只是想要独占，',
        urara.sex,
        '依旧想要纠正、甚至是保护自己的训练员。',
      ]);
      await era.printAndWait([
        urara.sex,
        '只是真心的希望 ',
        you.get_colored_name(),
        ' 能因',
        urara.sex,
        '而幸福，被名为 ',
        urara.get_colored_actual_name(),
        ' 的小',
        urara.uma_sex_title,
        '爱着自己的训练员而幸福；',
      ]);
      await era.printAndWait([
        '所以',
        urara.sex,
        '也希望训练员能真心地看向自己，所以名为 ',
        urara.get_colored_actual_name(),
        ' 的小',
        urara.uma_sex_title,
        '不愿再将 ',
        you.get_colored_name(),
        ' 交给任何人。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 早就不想再责怪',
        urara.sex,
        '的训练员了，',
        urara.sex,
        '从来不想的伤害过 ',
        you.get_colored_name(),
        '，',
        urara.sex,
        '只是希望 ',
        you.get_colored_name(),
        ' 能一直留在',
        urara.sex,
        '身边。',
      ]);
      await era.printAndWait(['或许，这样也不错……']);
      await era.printAndWait([
        '即使故事的走向称不上美好，但依旧能为互相束缚两人留下幸福的结局。',
      ]);

      era.printButton('「或许，我一直都爱着乌拉拉吧。」', 1);
      await era.input();

      await era.printAndWait([
        '这并非理所当然的宣言，爱上谁从来都不是理所当然，只是如今的 ',
        you.get_colored_name(),
        ' 更加确信了一件曾经总是遗忘的事。',
      ]);
      await era.printAndWait([
        '或许曾经名为 ',
        you.actual_name,
        ' 的',
        you.sex,
        '，喜欢过很多人、很多个',
        urara.uma_sex_title,
        '，但如今，选择已经没有了意义。',
      ]);
      await era.printAndWait([
        '因为站在 ',
        you.get_colored_name(),
        ' 身边的这名小小的',
        urara.uma_sex_title,
        '，愿意不留余地的成为 ',
        you.get_colored_name(),
        ' 的全部。',
      ]);
      await era.printAndWait([
        '正因如此，今天将会是个特别的日子，而小',
        urara.uma_sex_title,
        '也已经像曾经决定变成坏孩子那般下定了决心。',
      ]);
      await urara.say_and_wait([callname, '，我，想好了哦——']);
      await era.printAndWait([
        '不知是不是听到了 ',
        you.get_colored_name(),
        ' 的轻声呢喃，小小的',
        urara.uma_sex_title,
        '发出了这样的宣言。',
      ]);
      await urara.say_and_wait([
        '虽然总觉得有些舍不得，但是我们一起从那里搬出来，去可以好好晒太阳的地方住吧！',
      ]);

      era.printButton('「但是……」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        ' 和乌拉拉，早就不需要那样的关系了对吧？',
      ]);
      await urara.say_and_wait([
        '乌拉拉，早就不是小孩子了哦？所以 ',
        callname,
        ' 也赶上来吧？这里的阳光很舒服哦！',
      ]);
      await era.printAndWait([
        '耀眼的阳光洒在 ',
        you.get_colored_name(),
        ' 的脸上，从身侧抱住 ',
        you.get_colored_name(),
        '，',
        urara.get_colored_name(),
        ' 的笑容同阳光一样明媚。',
      ]);
      await era.printAndWait(['果然，已经没什么好但是的了……']);
      await era.printAndWait([
        '「罪无可赦的犯人」被监禁在了最自由的，名为「',
        urara.get_colored_actual_name(),
        ' 的爱」的「监狱」之中——',
      ]);
      await era.printAndWait([
        '这会是世界上最幸福的「无期徒刑」吗？现在的 ',
        you.get_colored_name(),
        ' 还不知道答案。',
      ]);
      await era.printAndWait([
        '接下来，站在阳光下的 ',
        you.get_colored_name(),
        ' 会用余生与最爱 ',
        you.get_colored_name(),
        ' 的「小小狱警」一起，写下这本会永远继续下去的「狱中回忆」。',
      ]);

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '……唉，如果',
        urara.sex,
        '希望如此，那这就是最好的结局吧，只是总觉得有些便宜您了。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '不过我也并非心胸狭隘的人，只是有些许不痛快。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '您还记得最初与乌拉拉立下的约定都有哪些吗？您是否省略了太多事情呢？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '我不打算跟您闹别扭，但以这样虚幻的结尾做结是否有些草率了？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '如果还有机会下次再见的话，请您给我打起十二分的精神。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
