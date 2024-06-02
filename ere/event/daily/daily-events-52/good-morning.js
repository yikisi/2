const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

module.exports = () => {
  const call_me = sys_get_callname(52, 0),
    urara = get_chara_talk(52),
    callname = urara.get_colored_name(),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    self_call = sys_get_callname(52, 52),
    talk_arr = [];
  if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
    talk_arr.push(
      [
        `${call_me}！今天要来做什么呢？`,
        [
          callname,
          ' 充满活力地向 ',
          me.get_colored_name(),
          ' 问着今天的计划。',
        ],
      ],
      [
        `务农的爷爷又送了萝卜给我了，一会儿和我一起分给大家吧！这是 ${call_me} 的份！`,
        [
          '抱着许多东西的 ',
          callname,
          ' 开心地将一纸袋胡萝卜塞到了 ',
          me.get_colored_name(),
          ' 的怀中。',
        ],
      ],
      [
        `和 ${call_me} 的约定我一定会遵守的！我们一起去拿好多好多第一吧！`,
        [
          '一如既往地，',
          callname,
          ' 向 ',
          me.get_colored_name(),
          ' 兴奋地说着。',
        ],
      ],
      [
        `${call_me}，${call_me}！看杂志了吗？大家说我是『能带来勇气的${urara.get_uma_sex_title()}』来着！诶嘿嘿～`,
        [
          '不知 ',
          callname,
          ' 是否理解其中的含义，但',
          urara.sex,
          '的笑颜中似乎有些害羞。',
        ],
      ],
      [
        [
          '昨天我和 ',
          sys_get_colored_callname(52, 1),
          ' 与 ',
          sys_get_colored_callname(52, 20),
          ' ',
          urara.sex,
          '们一起去吃拉面了，但是我有好好注意食量哦？虽然还是吃多了！',
        ],
        [
          callname,
          ' 笑着来到 ',
          me.get_colored_name(),
          ' 的面前，至少从',
          urara.sex,
          '微微发胖的小肚子来讲',
          urara.sex,
          '确实很开心。',
        ],
      ],
      [
        [
          '啊，',
          sys_get_colored_callname(52, 14),
          ' 又在被 ',
          sys_get_colored_callname(52, 11),
          ' 拿着刀追着砍了！大家今天也很有精神呢！',
        ],
        [
          '虽然说着听起来很危险的话，但既然 ',
          callname,
          ' 没有紧张起来那应该没问题吧？',
        ],
      ],
      [
        [
          '今天的 ',
          sys_get_colored_callname(52, 15),
          ' 也在天台上练习着什么，好像很有趣的样子！虽然',
          urara.sex,
          '好像一直都是那个样子！',
        ],
        [
          callname,
          ' 一边说着一边向 ',
          me.get_colored_name(),
          ' 模仿着好歌剧的样子，虽然并不太像但意外的可爱。',
        ],
      ],
      [
        [
          '昨天 ',
          sys_get_colored_callname(52, 58),
          ' 回到宿舍后在床上发现了一只狸猫先生哦！狸猫先生确实很可爱呢！',
        ],
        [
          '狸猫？学生宿舍里有狸猫？因为知道 ',
          callname,
          ' 不会说谎，所以 ',
          me.get_colored_name(),
          ' 显得更加疑惑了。',
        ],
      ],
      [
        [
          sys_get_colored_callname(52, 77),
          ' 和 ',
          sys_get_colored_callname(52, 33),
          ' 好像在讨论毛茸茸的事情！只是 ',
          sys_get_colored_callname(52, 33),
          ' 中途又开始推销起被褥烘干机的事情了！为什么呢？',
        ],
        ['说到最后，就连 ', callname, ' 也少见地疑惑了。是啊，为什么呢？'],
      ],
    );
    if (love > 0) {
      talk_arr.push(
        [
          `最近有了好吃的第一个分享的总是 ${call_me} 呢！嗯！是因为 ${call_me} 跟我的关系很好吧！`,
          [
            callname,
            ' 一边与 ',
            me.get_colored_name(),
            ' 分享着手中的零食，一边开心地向 ',
            me.get_colored_name(),
            ' 笑着。',
          ],
        ],
        [
          `感觉只要有 ${call_me} 在的话，我就可以跑得更快！跑步也比以前更开心了！`,
          [
            '不知不觉间，蹦蹦跳跳的 ',
            callname,
            ' 与 ',
            me.get_colored_name(),
            ' 靠得更近了。',
          ],
        ],
        [
          [
            sys_get_colored_callname(52, 61),
            ' 今天也说了要听 ',
            call_me,
            ' 的话，就像妈妈一样！可 ',
            self_call,
            ' 已经不是小孩子了！明明 ',
            sys_get_colored_callname(52, 61),
            ' 也总是笨手笨脚的……啊，不要告诉 ',
            sys_get_colored_callname(52, 61),
            ' 哦 ',
            call_me,
            '！',
          ],
          [
            callname,
            ' 今天与',
            urara.sex,
            '的舍友似乎也十分要好，但是不可以为了回击就说朋友的坏话啊。',
          ],
        ],
        [
          `大家都说我的奔跑能够带来希望呢！${self_call} 有好好让 ${call_me} 开心起来吗？`,
          [
            '露出了比以往稍微成熟一些的笑容，',
            callname,
            ' 似乎在好好的成长着。',
          ],
        ],
      );
    }
    if (love >= 25) {
      talk_arr.push(
        [
          `妈妈说过，只有互相信任的人才愿意让对方打理形象呢！${self_call} 的发型乱了？那 ${call_me} 要帮我梳理头发吗？`,
          [
            '没等 ',
            me.get_colored_name(),
            ' 回应，',
            callname,
            ' 便已经笑着解开缎带，在 ',
            me.get_colored_name(),
            ' 面前散开了粉色的马尾',
          ],
        ],
        [
          [
            sys_get_colored_callname(52, 30),
            ' 借给我的绘本上说，恋爱是件很美好的事，就像水果一样又酸又甜呢！',
            self_call,
            ' 也很多很多想法呦！但是……现在还不能告诉 ',
            call_me,
            ' 更多呢！',
          ],
          [
            '不知不觉中，仿佛不会长大的小小的',
            urara.get_uma_sex_title(),
            '似乎有了怀春少女才会有的姿态。',
          ],
        ],
        [
          `${call_me}，再靠近一些也可以哦？呀！嘿嘿，又坐到 ${call_me} 的腿上了！${call_me} 的身体依旧很温暖呢！`,
          [callname, ' 高兴地说道，似乎有一瞬间露出了温润的神色。'],
        ],
        [
          `大家总说要成为大人，${self_call} 也不想只被当成小孩子呢！诶？成为大人的理由……啊，那边有胡萝卜诶！`,
          [
            '像是想要掩饰什么，面对 ',
            me.get_colored_name(),
            ' 的提问的 ',
            callname,
            ' 突然红着脸慌慌张张地找借口跑开了。',
          ],
        ],
      );
    }
    if (love >= 50) {
      talk_arr.push(
        [
          `${call_me} 的气味好好闻！哈啊……啊！对不起！让 ${call_me} 感到困扰可不行啊，但是，嗯……`,
          [
            '虽然想要放开，但 ',
            callname,
            ' 还是不受控制的红着脸自顾自闻着 ',
            me.get_colored_name(),
            ' 身上的味道。',
          ],
        ],
        [
          [
            `『杂鱼～杂鱼～』，这是从`,
            sys_get_colored_callname(52, 19),
            `的小本本上学来的，说是能让 ${call_me} 变得开心！诶？不要说了？那 ${self_call} 不说了！不过 ${call_me}……继续看着 ${self_call} 吧？`,
          ],
          [
            '观察着 ',
            me.get_colored_name(),
            ' 的不知所措，',
            callname,
            ' 清澈的笑容中不知何时掺入了窃笑般的愉悦感。',
          ],
        ],
        [
          [
            `昨晚 `,
            sys_get_colored_callname(52, 61),
            ` 总在床上发出奇怪的声音！但听到那个声音，${self_call} 却满脑子都是 ${call_me}……为什么？${self_call} 不太明白，但是后来……？后来……${self_call} 睡着啦！`,
          ],
          ['没能将最近的经历讲到最后，', callname, ' 小脸通红的别开了视线。'],
        ],
        [
          `啊哈～${call_me} 的『双腿之间』是 ${self_call} 的『专座』，不是约好的事情吗？不要说让人误会的话？才没有误会！还是说……${call_me} 又在想什么呢？`,
          [
            '以纯洁的语气对 ',
            me.get_colored_name(),
            ' 吐出诱惑的低语，',
            callname,
            ' 可爱的小脸似乎也变得『魅惑』了起来……',
          ],
        ],
      );
    }
    if (love >= 75) {
      talk_arr.push(
        [
          `这杯新口味的蜂蜜特饮很好喝哦？${call_me} 也来尝尝吧！间接kiss……？但 ${self_call} 觉得没关系哟？难道……${call_me} 害羞了？`,
          [
            '小小的',
            urara.get_uma_sex_title(),
            '对 ',
            me.get_colored_name(),
            ' 笑着眯起眼睛，而手中甜得发腻的饮料，似乎也有了更多的含义。',
          ],
        ],
        [
          `最近我又学着做饭了哟！为了以后能填满 ${call_me} 的身体，${self_call} 会继续努力的！别说这样的话？是说 ${call_me} 也想要填满 ${self_call} 的身体吗？别调戏大人？我知道啦……`,
          [
            '听到 ',
            me.get_colored_name(),
            ' 的提醒，',
            callname,
            ' 终于移开了在说出来前就已红透了的脸。',
          ],
        ],
        [
          `商店街的大家又说 ${self_call} 更漂亮了呢！是因为 ${self_call} 跑得更快了吗？嗯？不全是？其实我知道哦！包括 ${call_me} 看 ${self_call} 的身体时更加入迷的眼神哦……开玩笑的！`,
          [
            '悄悄撩起衣角露出娇嫩的身体，',
            callname,
            ' 纯粹的笑容让 ',
            me.get_colored_name(),
            ' 焦躁得有些头晕目眩。',
          ],
        ],
        [
          `最近 ${self_call} 想了很多哦？嗯！${self_call} 还想要更多的赢给大家看！不要勉强？我知道的哦！所以还有一些『一着』，只会给 ${call_me} 看呢……嘿嘿～`,
          [
            callname,
            ' 的笑容看上去依旧天真烂漫，但是只给 ',
            call_me,
            ' 看的一着又是……？',
          ],
        ],
      );
    }
    if (love >= 90) {
      talk_arr.push(
        [
          `今天也好好看着我吧，我会继续将勇气带给 ${call_me} 的！……还有之后在两人独处的时候，${call_me} 也要好好加油哦？`,
          [
            '踮起脚尖，',
            callname,
            ' 温柔地抚摸着 ',
            me.get_colored_name(),
            ' 的脸颊，也留下了令 ',
            me.get_colored_name(),
            ' 感到不安的说辞。',
          ],
        ],
        [
          `以后的话 ${call_me} 想要多少个孩子呢？虽然不管想要多少个 ${self_call} 都能接受的！`,
          [
            '说着听起来前言不搭后语的话，',
            callname,
            ' 灼热的目光看得 ',
            me.get_colored_name(),
            ' 有些不自在。',
          ],
        ],
        [
          `一边说着占有并不是爱的全部，大家却又一边紧盯着彼此呢……${call_me} 怎么想呢？${self_call} 也觉得占有并不好，但是 ${self_call} 也会感到不安哟？`,
          [
            '紧紧拉着 ',
            me.get_colored_name(),
            ' 的袖口，小',
            urara.get_uma_sex_title(),
            '的笑容有些寂寞，似乎希望 ',
            me.get_colored_name(),
            ' 能更近一些。',
          ],
        ],
        [
          `嗳嗳，${call_me}！很舒服很开心的事，今天也要一起来做吗？声音太大了？可我说的是一起训练哦？难道说是 ${call_me} 想对 ${self_call}……？`,
          [
            '观察着 ',
            me.get_colored_name(),
            ' 的反应，',
            callname,
            ' 还稚嫩的笑脸上多了几分娇羞的红晕。',
          ],
        ],
      );
    }
    if (love === 100) {
      talk_arr.push(
        [
          `想要去跑步，也想要外出，但最想的果然是 ${call_me} 陪着我！不会让 ${call_me} 随便离开的，谁来也不行哦！谁来也不行呢……`,
          [
            '兴致高涨的 ',
            callname,
            ' 不寻常地主动向 ',
            me.get_colored_name(),
            ' 撒起了娇，不过总觉得气氛变得有些危险了……？',
          ],
        ],
        [
          `如果和 ${call_me} 分开了，只要能够重逢，就算前面是地狱我也会追过去哦……啊哈～这是 ${self_call} 从电视上学来的！${self_call} 的演技怎么样？有吓到吗 ${call_me}？`,
          ['虽然自称是演技，但 ', callname, ' 的眼神却又认真无比。'],
        ],
        [
          `${call_me} 想 ${self_call} 了吗？是白天更想一点？还是晚上更想一点？哼哼～就算 ${call_me} 生气我也不会停下来，现在我是坏 ${self_call} 哦！`,
          [
            '从背后环住 ',
            me.get_colored_name(),
            ' 的腰际，',
            callname,
            ' 用香甜的声音挑逗着 ',
            me.get_colored_name(),
            ' 的神经……',
          ],
        ],
        [
          `${self_call} 是天使……？虽然还是不太明白，但我也想一直做 ${call_me} 的天使呢！所以 ${call_me} 又累了的话，不论何时都可以来依靠 ${self_call} 哦？`,
          [
            '听到了 ',
            me.get_colored_name(),
            ' 不经意间流露出的感慨，娇小的担当既像妻子，又像母亲般牵起了 ',
            me.get_colored_name(),
            ' 的手。',
          ],
        ],
      );
    }
  } else {
    talk_arr.push(
      [
        `……${call_me}！今天的训练……也加油来做吧！`,
        ['明明只是日常打招呼，', callname, ' 却每次笑起来都像鼓足了勇气。'],
      ],
      [
        `今天也没关系！${self_call} 会努力遵守和 ${call_me} 的约定的！`,
        [
          '强打起精神，',
          callname,
          ' 认真地抬起头直视着 ',
          me.get_colored_name(),
          ' 的眼睛。',
        ],
      ],
      [
        `${call_me}，那个、胡萝卜！这是你的那份！`,
        [
          '虽然有些怯生生的，但 ',
          callname,
          ' 还是笑着将手中的萝卜塞给了 ',
          me.get_colored_name(),
          '。',
        ],
      ],
      [
        `勇气……是呢！${self_call} 要拿出更多的勇气来！但是，真的很难啊……`,
        ['阅览着今天的杂志，', callname, ' 的笑脸不知为何有些落寞。'],
      ],
      [
        `最近和大家一起外出，结果又吃多了……对不起，${self_call} 下次一定会注意的！`,
        [
          '露出勉强的笑容，面对 ',
          me.get_colored_name(),
          ' 的 ',
          callname,
          ' 有些底气不足。',
        ],
      ],
      [
        `补习的时候又被大家帮助了，是呢！要是 ${self_call} 能和大家一样聪明的话……`,
        [
          '站在 ',
          me.get_colored_name(),
          ' 旁边，',
          callname,
          ' 似乎因为想起了什么而有些缺乏活力。',
        ],
      ],
    );
    if (love > 0) {
      talk_arr.push(
        [
          `${call_me}，这个很好吃哦！虽然只剩最后一点点了……`,
          [
            '将最后一点零食全部分给 ',
            me.get_colored_name(),
            '，',
            callname,
            ' 因差点忘了训练员而有些羞愧。',
          ],
        ],
        [
          `和 ${call_me} 一起，${self_call} 确实更快了！可是为什么没有变得多开心呢……`,
          ['虽因自身的成长而高兴着，但 ', callname, ' 的笑容却有些勉强。'],
        ],
        [
          `${call_me} 不用看着，${self_call} 自己来也可以——这样的话 ${self_call} 不会说的！${self_call} 说好了要带给 ${call_me} 勇气，相对的 ${call_me} 也不可以逃跑哦？`,
          [
            '用樱瞳认真地直视着大人的眼睛，',
            callname,
            ' 向 ',
            me.get_colored_name(),
            ' 提出了不容拒绝的愿望。',
          ],
        ],
      );
    }
    if (love >= 25) {
      talk_arr.push(
        [
          `头发很乱？糟了……诶？要帮忙？那……${call_me} 稍微温柔一点哦？`,
          [
            '面对 ',
            me.get_colored_name(),
            ' 的提议，',
            callname,
            ' 小心地解开缎带与发带，虽然有点紧张但也顺从的背过身去。',
          ],
        ],
        [
          `虽然 ${self_call} 不想一直当小孩子，但身为大人的 ${call_me} 又是这个样子的。成为大人，就像奔跑和比赛一样难懂呢……`,
          [
            callname,
            ' 似乎在小声说着什么，但在 ',
            me.get_colored_name(),
            ' 看向',
            urara.sex,
            '时却又别开了视线。',
          ],
        ],
        [
          [
            sys_get_colored_callname(52, 47),
            ` 的书里讲过，恋爱往往会伴随着苦恼的事，总是会让人很难受……最近 ${self_call} 也很苦恼呢，${self_call} 不太明白自己是不是真的在意……`,
          ],
          [
            '曾经仿佛不会长大的小 ',
            callname,
            '，现在正像位为感情所苦恼的少女般自言自语着。',
          ],
        ],
      );
    }
    if (love >= 50) {
      talk_arr.push(
        [
          `${call_me} 今天的味道……嗯？${self_call} 不是故意的哦？`,
          [
            '心不在焉地磨蹭着 ',
            me.get_colored_name(),
            ' 的衣物，小担当有点敷衍地向 ',
            me.get_colored_name(),
            ' 道着歉。',
          ],
        ],
        [
          `最近看到 ${call_me} 身体总会热热的，晚上想到 ${call_me} 的话，下面总会……对不起，${self_call} 不说了，但是……果然没什么吧……？`,
          [
            '在扭捏了一会儿之后，变得满脸通红 ',
            callname,
            ' 还是没能坚持着说到最后。',
          ],
        ],
        [
          `『没出息的杂鱼大人，哄骗学生的假好心老师，讨厌、最差劲了……』不要说了？但是 ${call_me} 也很兴奋吧？『连 ${self_call} 都骗不过的变态训练员』……`,
          [
            '贴在 ',
            me.get_colored_name(),
            ' 的耳边尽情地做着『恶作剧』，',
            callname,
            ' 兴奋的神情带着掩饰不住的轻蔑与情欲。',
          ],
        ],
      );
      if (love >= 75) {
        talk_arr.push(
          [
            `${self_call} 一直在学做饭哦？但是 ${call_me} 平时……应该不缺喜欢的人送来便当吧。说的对呢，${self_call} 在想的更未来的事情，所以饿了的话试着拜托 ${self_call} 也可以哦？`,
            [
              '对 ',
              me.get_colored_name(),
              ' 说着自己的事情，',
              callname,
              ' 的笑容似乎有些无奈又有些释然。',
            ],
          ],
          [
            `大家又说 ${self_call} 更漂亮了啊，${self_call} 真的变漂亮了吗？不过我知道哦，${call_me} 把 ${self_call} 变得乱七八糟……并不是在开玩笑哦？`,
            [
              '毫不掩饰的在独处时向 ',
              me.get_colored_name(),
              ' 贴近展示着身体，',
              callname,
              ' 纯粹的笑容逐渐变得有些浑浊。',
            ],
          ],
          [
            `很舒服的事情，${self_call} 确实想和 ${call_me} 做，但是日常训练也很重要哦？而且下次拿到一着的话，${call_me} 也会更开心对吧，那个时候……`,
            [
              '虽然嘴上不情愿，但小',
              urara.get_uma_sex_title(),
              '的脸颊还是挂起了红晕，不过那个时候又是要说什么呢？',
            ],
          ],
        );
      }
      if (love >= 90) {
        talk_arr.push(
          [
            `${self_call} 可以坐在这里吗？谢谢！那样的话……现在的 ${call_me} 又在想些什么呢？`,
            [
              '温顺坐在 ',
              me.get_colored_name(),
              ' 的大腿上，',
              callname,
              ' 意外亲昵又安心的与 ',
              me.get_colored_name(),
              ' 的身体紧贴在一起。',
            ],
          ],
          [
            `大家说 ${self_call} 的奔跑能够带来笑容，现在的 ${call_me} 有好好找到相遇时的希望吗？`,
            [
              '带着相较以往成熟过头的微笑，',
              callname,
              ' 以的期望的神情靠在 ',
              me.get_colored_name(),
              ' 的身边。',
            ],
          ],
          [
            `未来的家庭，还有孩子们……${self_call} 是不是不应该期待这些？毕竟 ${call_me} 也……`,
            [
              '说着听起来前言不搭后语的话，小',
              urara.get_uma_sex_title(),
              '的表情似乎变得有些忧愁？',
            ],
          ],
        );
      }
      if (love === 100) {
        talk_arr.push(
          [
            `就算不相遇去负责也没关系，我愿意信任这样你，我们之间依旧可以……虽然只是电视上的台词，但是 ${self_call} 并没有在表演哦，${call_me} 又是怎么想的呢？`,
            [
              '既不是在演戏，也没有在说谎，',
              callname,
              ' 的笑容中只有对一人的爱意。',
            ],
          ],
          [
            `明明最初是想让大家都开心而奔跑的，但现在却觉得只为了一个人也不坏……不过 ${call_me} 如果又累了的话，${self_call} 也可以做 ${call_me} 一个人的天使哦？`,
            [
              '像妻子般挽着 ',
              me.get_colored_name(),
              ' 的手臂，娇小的担当又在不经意间流露出了独属于一人的感慨。',
            ],
          ],
          [
            `${self_call} 想要独占 ${call_me} 哦？哪怕 ${self_call} 知道 ${call_me} 的心不会独属于 ${self_call} 也一样。今天也一样，所以就算 ${call_me} 拒绝接受，${self_call} 也不会放弃哦？`,
            [
              '以灿烂的笑容表达着令人错乱的独占欲，',
              callname,
              ' 的樱瞳里没有一点笑意。',
            ],
          ],
        );
      }
    }
  }
  const temp = get_random_entry(talk_arr);
  urara.say(temp[0]);
  era.print(temp[1]);
};
