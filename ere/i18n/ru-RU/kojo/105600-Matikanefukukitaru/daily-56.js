/**
 * @file 待兼福来 - 日常
 * @author ALEX
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} call_58 待兼福来对名将怒涛的称呼
   * @param {PrintedSpan} call_98 待兼福来对小林历奇的称呼
   */
  good_morning(kitaru, you, callname, call_58, call_98) {
    const buffer = [];
    if (era.get('base:56:体力') <= era.get('maxbase:56:体力') / 3) {
      buffer.push(
        () => {
          kitaru.say('今日的运势……好累啊');
          era.print([
            you.get_colored_name(),
            '来到训练场的时候，看见 ',
            kitaru.get_colored_name(),
            ' 已经躺在了草地上。',
          ]);
        },
        () => {
          kitaru.say('无所谓了……只要是命定之人的要求，我会尽力去做的。');
          era.print([
            kitaru.get_colored_name(),
            ' 笑着对 ',
            you.get_colored_name(),
            ' 挥了挥手，但是尾巴却明显的垂在了双腿间。',
          ]);
        },
      );
    } else if (era.get('cflag:56:干劲') < 0) {
      buffer.push(
        () => {
          kitaru.say('唔……');
          era.print([
            '趴在栏杆上的 ',
            kitaru.get_colored_name(),
            ' 在看到 ',
            you.get_colored_name(),
            ' 的时候象征性摆了摆耳朵。',
          ]);
        },
        () => {
          kitaru.say(['早……', callname, '。']);
          era.print([
            kitaru.get_colored_name(),
            ' 的心情看起来不是很好的样子。',
          ]);
        },
      );
    } else {
      if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 1) {
        buffer.push(() => {
          kitaru.say(['唔！早晨的 ', callname, ' 也很精神呢！']);
          kitaru.say(['只是被 ', callname, ' 这么盯着就有些兴奋起来了呢……']);
        });
      } else if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 2) {
        buffer.push(() => {
          kitaru.say('哈……哈啊！');
          kitaru.say(['双腿有些发软……只是被 ', callname, ' 盯着就这样了……']);
        });
      } else if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 3) {
        buffer.push(() => {
          kitaru.say(['想要……', callname, '……']);
          era.print([
            '这样说着，带着晨跑完略高体温的',
            kitaru.teen_sex_title,
            '抱住了 ',
            you.get_colored_name(),
            '。',
          ]);
        });
      }
      if (era.get('love:56') > 75 && era.get('relation:56:0') > 400) {
        buffer.push(
          () => {
            kitaru.say('哈啊……起的稍稍有点早呢！');
            era.print([
              '在 ',
              you.get_colored_name(),
              ' 面前伸了一个懒腰，',
              kitaru.sex,
              '运动外套下的胸部像是被重点突出一般强调着自己的存在。',
            ]);
          },
          () => {
            kitaru.say('果然！每天只有看见命定之人才能安心呢');
            kitaru.say([callname, ' 也是这么想的吗？']);
            era.print([
              '挽住了 ',
              you.get_colored_name(),
              ' 的手臂，',
              kitaru.sex,
              '栗色的细长马耳敲打着 ',
              you.get_colored_name(),
              ' 的肩膀。',
            ]);
          },
          () => {
            kitaru.say(['占卜出来 ', callname, ' 今天会有桃花运呢！']);
            kitaru.say('你看，我不是出现在你身边了吗？');
            era.print([
              '踮起脚尖，',
              kitaru.sex,
              '呼出的气流拍打在 ',
              you.get_colored_name(),
              ' 的脖颈上。',
            ]);
          },
          () => {
            kitaru.say(['今天 ', callname, ' 不能离开我身边哦！']);
            kitaru.say('因为！占卜出来今天的开运道具就是小福我哦！');
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              ' 靠在栏杆上背对着 ',
              you.get_colored_name(),
              '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
            ]);
            kitaru.say(['欸嘿，被 ', callname, ' 看见了吗？']);
            era.print([
              '露出如狐狸般魅惑的笑容，',
              kitaru.teen_sex_title,
              '不慌不忙的整理起自己的裙摆，被白色内裤包裹的臀部清晰可见。',
            ]);
          },
        );

        if (era.get('love:56') > 89 && era.get('relation:56:0') > 400) {
          buffer.push(
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' 靠在栏杆上背对着 ',
                you.get_colored_name(),
                '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
              ]);
              kitaru.say(['那个……', callname, ' 喜欢吗？']);
              era.print([
                '伴随着如妖狐般的魅惑笑容，',
                kitaru.teen_sex_title,
                '甚至稍稍提起了裙摆，半包着福来安产形臀部白色蕾丝内裤透出其下的肉色。',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' 靠在栏杆上背对着 ',
                you.get_colored_name(),
                '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
              ]);
              kitaru.say(['那个……', callname, ' 喜欢吗？']);
              era.print([
                '伴随着如妖狐般的魅惑笑容，',
                kitaru.teen_sex_title,
                '甚至稍稍提起了裙摆，明显略紧的黑色内裤在福来的安产臀部上勒出诱惑的沟壑。',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' 靠在栏杆上背对着 ',
                you.get_colored_name(),
                '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
              ]);
              kitaru.say(['那个……', callname, ' 喜欢吗？']);
              era.print([
                '伴随着如妖狐般的魅惑笑容，',
                kitaru.teen_sex_title,
                '甚至稍稍提起了裙摆，由几根修长布料组成的情趣内裤近乎完全露出了 ',
                kitaru.get_colored_name(),
                ' 的臀肉。',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                ' 靠在栏杆上背对着 ',
                you.get_colored_name(),
                '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
              ]);
              kitaru.say('咿呀！！！');
              era.print([
                '趁着 ',
                kitaru.get_colored_name(),
                ' 还没发现 ',
                you.get_colored_name(),
                ' 使坏般的拍了一下，让',
                kitaru.teen_sex_title,
                '抑制不住地发出了可爱的叫声。',
              ]);
            },
          );
        }
      }

      if (era.get('love:56') >= 50 && era.get('relation:56:0') >= 226) {
        buffer.push(
          () => {
            kitaru.say('我的命定之人！今天的训练计划是什么呢？');
            era.print([
              '这样说着，',
              kitaru.sex,
              '的尾巴缠在了 ',
              you.get_colored_name(),
              ' 的腿上。',
            ]);
          },
          () => {
            kitaru.say('话说！训练结束之后可以和我一起去摆摊吗？');
            kitaru.say(['恰好 ', call_58, ' 今天没空呢！']);
          },
          () => {
            kitaru.say([
              callname,
              ' 如果需要改运的话，我应该还是比 ',
              call_98,
              ' 擅长一点的！',
            ]);
            era.print([
              kitaru.get_colored_name(),
              ' 有些气鼓鼓的对最近的流言做出了回应。',
            ]);
          },
          () => {
            kitaru.say(['今天试着给 ', callname, ' 做了早餐哦！']);
            kitaru.say('虽然味道可能没那么好就是啦。');
            era.print([
              kitaru.get_colored_name(),
              ' 冲 ',
              you.get_colored_name(),
              ' 举起了手中提着的餐盒。',
            ]);
          },
          () => {
            kitaru.say(['那个，', callname, '！']);
            kitaru.say('结束后一起去商店街吃晚饭怎么样？');
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              ' 靠在栏杆上背对着 ',
              you.get_colored_name(),
              '……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。',
            ]);
            kitaru.say(['欸！色狼 ', callname, '！']);
            era.print([
              '在出言提醒之前，',
              you.get_colored_name(),
              ' 还是由于脚步声被发现了，脸上泛着红晕的',
              kitaru.teen_sex_title,
              '，意外冷静的整理起自己的裙摆。',
            ]);
          },
        );
      } else if (era.get('love:56') < 50 || era.get('relation:56:0') < 226) {
        buffer.push(
          () => kitaru.say('唔……需要我来占卜一下去哪里训练比较好吗？'),
          () =>
            kitaru.say(['早上好！', callname, '，今天的训练计划是什么呢？']),
          () => kitaru.say([callname, '！今天的运势需要我占卜一下吗？']),
        );
      }
      if (era.get('relation:56:0') >= 226) {
        buffer.push(
          () => {
            kitaru.say('今天运势很不错呢！那么……');
            kitaru.say(['……烦请 ', callname, ' 尽情使驭我吧！']);
            era.print([
              '模仿着电视里学到的样子，',
              kitaru.sex,
              '向 ',
              you.get_colored_name(),
              ' 行了一个不算太标准的鞠躬礼。',
            ]);
          },
          () => {
            kitaru.say('达摩摩在振动，看来我今天的灵力很充裕呢！');
            era.print([
              kitaru.sex,
              '冲 ',
              you.get_colored_name(),
              ' 指了指自己左耳挂着的红色达摩。',
            ]);
          },
          () => {
            kitaru.say('我已经事先占卜过了！');
            kitaru.say([callname, ' 今天的运势是大吉哦！']);
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async select(kitaru, you, callname) {
    const buffer = [];
    if (era.get('relation:56:0') > 375) {
      buffer.push(
        () =>
          kitaru.say([
            '果然，',
            callname,
            ' 就是我命中注定的人呢！占卜和我的心都是这么说的！',
          ]),
        () => kitaru.say(['我完全信任 ', callname, '！毕竟是命中注定的人嘛！']),
      );
    } else {
      buffer.push(
        () => kitaru.say(['只要相信占卜和 ', callname, '！一定会没问题的！']),
        () => kitaru.say([callname, ' 今天的旨意是什么呢？！']),
      );
    }
    switch (era.get('mark:56:淫纹')) {
      case 1:
        buffer.push(() => kitaru.say('淫纹……像是故事里那些恶堕情节一样呢……'));
        break;
      case 2:
        buffer.push(() =>
          kitaru.say('又发光了，是不是该多穿一件比较……哈……好热……'),
        );
        break;
      case 3:
        buffer.push(() =>
          kitaru.say('为参拜客们祈福的时候，淫纹偶尔会不合时宜的发热……'),
        );
    }

    switch (era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) {
      case 1:
        buffer.push(() => kitaru.say([callname, '！那个……今天晚上怎么样？']));
        break;
      case 2:
        buffer.push(() =>
          kitaru.say(['该说看到 ', callname, '，身体就会起反应吗？']),
        );
        break;
      case 3:
        buffer.push(() => {
          kitaru.say('该换条内裤了……');
          kitaru.say(['唔……', callname, ' 又在明知故问了。']);
        });
    }

    switch (era.get('mark:56:同心')) {
      case 1:
        buffer.push(() =>
          kitaru.say([
            '每天睁开眼睛就能见到 ',
            callname,
            '，该说这就是大吉吗！',
          ]),
        );
        break;
      case 2:
        buffer.push(() =>
          kitaru.say([callname, '！要来一个小福的开运拥抱吗？']),
        );
        break;
      case 3:
        buffer.push(() =>
          kitaru.say([
            '看见我和 ',
            callname,
            ' 这样黏在一起，白兴大人一定会很开心的！',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} sp 特别周
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async office_study(kitaru, sp, you, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('上次，差点就要补考了！多亏白兴大人的保佑！');
        await era.printAndWait([
          '在没收了 ',
          kitaru.get_colored_name(),
          ' 的占卜用铅笔后，',
          you.get_colored_name(),
          ' 开始帮',
          kitaru.sex,
          '规划出下次考试的重点。',
        ]);
        await era.printAndWait([
          '不过话说回来，为什么同样使用了占卜用铅笔，',
          sp.get_colored_name(),
          '就需要补考呢？',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('欸！我可是有书道段位的！');
        await kitaru.say_and_wait('所以这方面我还是很擅长的！');
      },
      async () => {
        await kitaru.say_and_wait([callname, '！这幅怎么样？']);
        await era.printAndWait([
          '这样说着，',
          kitaru.teen_sex_title,
          '冲 ',
          you.get_colored_name(),
          ' 举起了那幅蕴含着神意般的线条艺术。',
        ]);
      },
      () =>
        kitaru.say_and_wait([
          '唔！在赛跑之外的地方，',
          callname,
          ' 也懂不少呢！',
        ]),
      async () => {
        await kitaru.say_and_wait(['哦！这一本啊！']);
        await kitaru.say_and_wait(['以前躲在阁楼上的时候读到过！']);
      },
      async () => {
        await kitaru.say_and_wait(['这本杂志，', callname, ' 有兴趣吗？']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 指着面前那本《The Rhode Island Journal of Astronomy》的占卜专栏。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait(['蓝型，绿型？……没听过的概念呢？']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 指着那本封面上有着浅蓝色五角星标志的书本询问 ',
          you.get_colored_name(),
          '。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async office_prepare(kitaru, callname) {
    const buffer = [
      () =>
        kitaru.say_and_wait([
          '多谢 ',
          callname,
          '！开运仪式现在就差一个助手！',
        ]),
      () =>
        kitaru.say_and_wait([
          '完成这个仪式需要……啊，',
          callname,
          '，能来帮忙太好了！',
        ]),
      () =>
        kitaru.say_and_wait([
          callname,
          '！这个请神术的加上你的POW值一定没问题的！',
        ]),
      () => kitaru.say_and_wait('置闰仪式？感觉做起来会亮堂堂的……'),
      () =>
        kitaru.say_and_wait('联络术，请神术，驱逐术，这个仪式该归到哪一类呢？'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {number} luck_train 开运训练的类型，1 - 5 分别是速度 - 智力
   */
  async talk(kitaru, you, callname, luck_train) {
    const buffer = [];
    if (era.get('mark:56:淫纹') === 1) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.sex,
          '对 ',
          you.get_colored_name(),
          ' 指了指自己被画上了淫纹的小腹。',
        ]);
        await kitaru.say_and_wait('那个，训练的时候总是害怕被别人看见呢……');
      });
    } else if (era.get('mark:56:淫纹') >= 2) {
      buffer.push(async () => {
        await era.printAndWait([
          '环顾四周后，',
          kitaru.get_colored_name(),
          ' 冲 ',
          you.get_colored_name(),
          ' 拉起了衣服的下摆，露出了自己的小腹。',
        ]);
        await era.printAndWait([
          '冒着粉光的纹路，忠实的履行着自己在',
          kitaru.teen_sex_title,
          '身上的职责。',
        ]);
      });
    }

    if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 1) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '那个，',
          callname,
          ' 在训练结束之后有时间吗？',
        ]);
      });
    } else if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 2) {
      buffer.push(async () => {
        await era.printAndWait([
          '明显的绯红挂在 ',
          kitaru.get_colored_name(),
          ' 脸上，用双手隔着运动外套按压起自己的小腹。',
        ]);
        await kitaru.say_and_wait(['唔，都是 ', callname, ' 的错啦！']);
      });
    } else if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 3) {
      buffer.push(async () => {
        await era.printAndWait([
          '在 ',
          kitaru.get_colored_name(),
          ' 愈发过分的要求下给了',
          kitaru.sex,
          '一个吻。',
        ]);
        await kitaru.say_and_wait('咕……');
        await era.printAndWait([
          kitaru.sex,
          '的指尖若有若无地在 ',
          you.get_colored_name(),
          ' 的胯部附近游动。',
        ]);
      });
    }

    if (era.get('mark:56:同心') === 1) {
      buffer.push(async () => {
        await era.printAndWait([
          '嚷嚷着开运之类的话语，',
          kitaru.get_colored_name(),
          ' 扑到了 ',
          you.get_colored_name(),
          ' 的身上。',
        ]);
      });
    } else if (era.get('mark:56:同心') >= 2) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '一心同体！',
          callname,
          '，我会永远在你身边的！',
        ]);
      });
    }

    if (era.get('base:56:体力') < era.get('maxbase:56:体力') * 0.45) {
      buffer.push(
        () => kitaru.say_and_wait('今日，休息为吉……'),
        async () => {
          await era.printAndWait('星星瞳变得暗淡了');
          await era.printAndWait(['是时候让', kitaru.sex, '歇一歇了']);
        },
      );
    }
    switch (era.get('cflag:56:干劲')) {
      case -2:
        buffer.push(async () => {
          await kitaru.say_and_wait(
            '占卜运势倒数第一……抽签又抽到大凶……还遇到黑猫横跨面前，我，我不行了！',
          );
        });
        break;
      case -1:
        buffer.push(async () => {
          await kitaru.say_and_wait('我抽签抽到凶了……会有噩运发生吗？');
        });
        break;
      case 0:
        buffer.push(async () => {
          await kitaru.say_and_wait('今天的运势也是不好不坏呢……');
          await kitaru.say_and_wait('普普通通的也不错？');
        });
        break;
      case 1:
        buffer.push(async () => {
          await kitaru.say_and_wait('准备工作和占卜都完成了，让我们开始吧……');
        });
        break;
      case 2:
        buffer.push(async () => {
          await kitaru.say_and_wait([
            callname,
            ' 听我说！我现在的运势是超越了大吉的超吉呢！',
          ]);
          await kitaru.say_and_wait('呵呵呵，现在的我是超无敌的！');
        });
    }
    await get_random_entry(buffer)();
    if (luck_train > 0) {
      era.drawLine();
      await era.printAndWait([
        '看见了 ',
        kitaru.get_colored_name(),
        ' 留在桌面上的纸条。',
      ]);
      switch (luck_train - 1) {
        case attr_enum.speed:
          await kitaru.used_to_say_and_wait('对了，今天似乎速度训练是吉哦！');
          break;
        case attr_enum.endurance:
          await kitaru.used_to_say_and_wait('今天的吉项是耐力训练哦！');
          break;
        case attr_enum.strength:
          await kitaru.used_to_say_and_wait('力量训练看起来不错的样子！');
          break;
        case attr_enum.toughness:
          await kitaru.used_to_say_and_wait('根性训练会不会适合一点！');
          break;
        case attr_enum.intelligence:
          await kitaru.used_to_say_and_wait('智力训练乃是大吉！');
      }
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async office_gift(kitaru, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('喔————！');
        await kitaru.say_and_wait('我会把它摆在床头的！');
      },
      async () => {
        await kitaru.say_and_wait('非常感谢！');
        await kitaru.say_and_wait([
          '回礼的话，',
          callname,
          ' 有什么想要的吗？',
        ]);
      },
      async () => {
        await kitaru.say_and_wait(['占卜不出来 ', callname, ' 送了什么呢！']);
        await kitaru.say_and_wait('得等到回去才能打开呀……');
      },
    ];
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await kitaru.say_and_wait(['如果 ', callname, ' 想的话！']);
        await kitaru.say_and_wait('回礼是小福本人也可以喔！');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async office_cook(kitaru, you, callname) {
    const buffer = [];
    if (era.get('love:56') > 84) {
      buffer.push(() =>
        kitaru
          .say_and_wait(['要试试小福做的味增汤吗！'])
          .then(() =>
            kitaru.say_and_wait([
              '喜欢的话！每天都可以做给 ',
              callname,
              ' 哦！',
            ]),
          ),
      );
    } else if (era.get('love:56') > 75) {
      buffer.push(() =>
        kitaru
          .say_and_wait('让我来帮忙吧！这回绝对没问题的！')
          .then(() =>
            era.printAndWait([
              '看来 ',
              kitaru.get_colored_name(),
              ' 这段时间学了许多。',
            ]),
          ),
      );
    } else if (era.get('love:56') > 49) {
      buffer.push(() =>
        kitaru
          .say_and_wait('呃，这次我在一旁学着就好！')
          .then(() => kitaru.say_and_wait('只是想将来可能会有要用的时候！'))
          .then(() =>
            era.printAndWait([
              '望着 ',
              you.get_colored_name(),
              ' 的脸，',
              kitaru.get_colored_name(),
              ' 说出了这番话。',
            ]),
          ),
      );
    } else {
      buffer.push(() =>
        kitaru
          .say_and_wait([callname, ' 需要的话！我也可以来帮忙！'])
          .then(() =>
            era.printAndWait([
              '在 ',
              kitaru.get_colored_name(),
              ' 的各种奇思妙想下，做饭的速度反而慢上了许多。',
            ]),
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async office_rest(kitaru, you, callname) {
    if (era.get('love:56') > 49) {
      await you.say_and_wait('好了吗？阿福');
      await kitaru.say_and_wait('嗯——嗯～');
      await era.printAndWait([
        '名叫 ',
        kitaru.get_colored_name(),
        ' 的，栗毛的团子，正趴在 ',
        you.get_colored_name(),
        ' 的身上',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '正依着',
        kitaru.sex,
        '的请求，顺起自己担当',
        kitaru.uma_sex_title,
        '毛茸茸的头发。',
      ]);
      await era.printAndWait([
        '偶尔指尖掠过 ',
        kitaru.get_colored_name(),
        ' 敏感的耳朵根部时，',
        kitaru.sex,
        '的身体就会微微颤抖。',
      ]);
      await kitaru.say_and_wait(['呼呼……', callname, '……']);
      await era.printAndWait(['看来距离', kitaru.sex, '休息够还有好久']);
    } else {
      await kitaru.say_and_wait('呼……呼……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 难得的安静了下来，如寺庙中的佛像般陷入了入定的状态。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 则开始准备起先前二人一起买回来的苹果。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {number} game_times 和福来一起玩游戏的次数
   */
  async office_game(kitaru, you, callname, game_times) {
    const buffer = [
      () => kitaru.say_and_wait('通过写作来心想事成吗？真是有意思的设定！'),
      () =>
        kitaru.say_and_wait('亮银色的大气……我的梦里好像也会有类似的情景呢！'),
      () => kitaru.say_and_wait('要是我的灵力也能做到念动移物就好了！'),
      () => kitaru.say_and_wait('……意志正在受到考验……唔，正是靠运气的时刻呢！'),
      () =>
        kitaru.say_and_wait(
          '白蛇神社啊……位置比我们家的神社还偏僻呢，怎么会有参拜客呢！',
        ),
      () => kitaru.say_and_wait('命运COOP，看来是同行呢！'),
    ];
    if (game_times >= 5) {
      buffer.push(() =>
        kitaru.say_and_wait('呼呼……用占卜来读指令什么的，果然特别好用呢！'),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} kitaru 待兼福来 */
  async s_a_tree_hollow(kitaru) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait(
        '希望白兴大人能听到我的祈祷，让我今天的运势变得更好吧！',
      );
      if (era.get('cflag:56:育成回合计时') > 120) {
        await kitaru.say_and_wait(
          '唔！当然要是没有的话，我也是会努力的就是啦！',
        );
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 对着深不见底的枯树洞喊道。',
      ]);
    });
    if (era.get('cflag:56:育成回合计时') > 42) {
      //判断 所谓白兴大人
      buffer.push(async () => {
        await kitaru.say_and_wait([
          kitaru.elder_sibling_sex_title,
          '！我一定会成为一名优秀的赛',
          kitaru.uma_sex_title,
          '的！',
        ]);
        await kitaru.say_and_wait('请你……呜……你一定要好好看着啊！');
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait('还有……我也找到了能陪我一起走下去的人！');
          await kitaru.say_and_wait('不用再担心我了！');
        }
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   */
  async s_a_dating(kitaru, you) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait('要和我拜访学校内的能量之地吗？');
      await era.printAndWait([
        '循着 ',
        kitaru.get_colored_name(),
        ' 的指引，',
        you.get_colored_name(),
        ' 和',
        kitaru.sex,
        '一起在学校内走了遍。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的目的有没有达成不知道，但是遭到了自家担当尾抱的 ',
        you.get_colored_name(),
        ' 成了今天特雷森论坛的热门话题。',
      ]);
    });
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 挽起了 ',
          you.get_colored_name(),
          ' 的手臂，经过一位又一位学生。',
        ]);
        await kitaru.say_and_wait('被许多人看着呢……');
        await era.printAndWait([
          '话是这么说，不过 ',
          you.get_colored_name(),
          ' 发现 ',
          kitaru.get_colored_name(),
          ' 的行为更为大胆了。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async s_r_lunch(kitaru, you, callname) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait('喔喔喔喔喔！！！');
      await kitaru.say_and_wait([callname, ' 的便当看起来很不错啊！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 最终还是没有抵挡住 ',
        kitaru.get_colored_name(),
        ' 的热切目光，将饭盒推到了',
        kitaru.sex,
        '面前。',
      ]);
    });
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '那个，',
          callname,
          ' 的筷子请借我用一下！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '的一次性筷子在，',
          kitaru.get_colored_name(),
          ' 的手中发出了清脆的响声分开了。',
        ]);
        await kitaru.say_and_wait([
          '喔喔！依据这个占卜的话，',
          callname,
          ' 今日的运势看起来很不错呢！',
        ]);
      });
    }
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await kitaru.say_and_wait('训——练——员！想要！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 柔软的身体贴在 ',
          you.get_colored_name(),
          ' 的身上，仿佛能滴出水的眼神看着',
          you.get_colored_name(),
        ]);
        await era.printAndWait(['夹起一块肉堵住了', kitaru.sex, '的嘴。']);
        await kitaru.say_and_wait('唔……这个也不错就是啦！');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   */
  async o_r_fishing(kitaru, you) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('……');
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着正聚集会神地盯着水面的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '难得安静下来的 ',
          kitaru.get_colored_name(),
          ' 展现出了与平时截然不同的一面。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 甚至可以在',
          kitaru.sex,
          '庄严肃穆外表上捕捉到一丝神性',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('钓鱼算是七分运气的事情呢！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 一边说着一边将鱼饵放入水中。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('会不会钓上来什么有意思的东西呢！');
        await kitaru.say_and_wait('就像是神话故事里那样！');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_r_walking(kitaru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await kitaru.say_and_wait('据说，流动的水能够阻拦灵体的活动！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 一边在前面走着，一边同 ',
          you.get_colored_name(),
          ' 科普一些不知从哪里听来的知识。',
        ]);
        await kitaru.say_and_wait([callname, ' 有在听吗？']);
      },
      async () => {
        await kitaru.say_and_wait(
          '据说，白兴大人曾经掌管着一天里的一个时辰呢！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 一边在前面走着，一边同 ',
          you.get_colored_name(),
          ' 科普一些不知从哪里听来的知识。',
        ]);
        await kitaru.say_and_wait([callname, ' 有在听吗？']);
      },
      async () => {
        await kitaru.say_and_wait(
          '据说，能量之地的形成和持续不断的集体信念有关系呢！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 一边在前面走着，一边同 ',
          you.get_colored_name(),
          ' 科普一些不知从哪里听来的知识。',
        ]);
        await kitaru.say_and_wait([callname, ' 有在听吗？']);
      },
    );
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await kitaru.say_and_wait('唔！有点凉呢！');
        await era.printAndWait([
          '褪下鞋袜的 ',
          kitaru.get_colored_name(),
          ' 将裸足伸入水中，自然地浸出细腻诱人的光泽',
        ]);
        await kitaru.say_and_wait([callname, ' 也要来试试吗！']);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_s_arcade(kitaru, you, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait(
          '喔喔喔！果然是大吉呢！一个玩偶上居然挂了这么多！',
        );
        await era.printAndWait([
          '就在得意忘形的 ',
          kitaru.get_colored_name(),
          ' 要撞到夹娃娃机的时候，',
          you.get_colored_name(),
          ' 眼疾手快地拉住了',
          kitaru.sex,
          '。',
        ]);
        await kitaru.say_and_wait('欸嘿～抱歉！');
        await era.printAndWait([
          '看着 ',
          kitaru.get_colored_name(),
          ' 的样子，',
          you.get_colored_name(),
          ' 不禁笑了出来。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          '唔！新出的格斗游戏吗？要试试双人对战吗，',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '在连着输了几个回合后，',
          kitaru.get_colored_name(),
          ' 如同未卜先知般的操作让 ',
          you.get_colored_name(),
          ' 不得不投降。',
        ]);
        await kitaru.say_and_wait('啊啦，多亏白兴大人的保佑呢！');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_s_drawing(kitaru, you, callname) {
    await kitaru.say_and_wait([callname, '，那边有抽奖欸！']);
    if (era.get('love:56') > 49 && kitaru.sex_code !== 1) {
      await era.printAndWait([
        '无需多言，',
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        ' 一起走到了抽奖摊位前。',
      ]);
      await kitaru.say_and_wait(['让 ', callname, ' 分我一点好运吧！']);
      await era.printAndWait([
        '而后温暖的感觉与弹性的触感一同传来，',
        kitaru.get_colored_name(),
        ' 抱住了 ',
        you.get_colored_name(),
        ' 的胳膊，一副不肯放开的样子。',
      ]);
      await kitaru.say_and_wait('欸嘿～！');
      await era.printAndWait([
        '仿佛没有察觉到自己的双乳已经和 ',
        you.get_colored_name(),
        ' 的手臂发生了挤压，',
        kitaru.get_colored_name(),
        ' 将手伸入了箱子中。',
      ]);
    } else {
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 的强烈要求下，',
        you.get_colored_name(),
        ' 不得不和',
        kitaru.sex,
        '来到了摊位前。',
      ]);
      await kitaru.say_and_wait('啊啊啊！白兴大人保佑！');
      await kitaru.say_and_wait('哈！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 将手伸入了箱子中。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_s_ktv(kitaru, you, callname) {
    const buffer = [];
    if (era.get('love:56') > 49 && kitaru.sex_code !== 1) {
      buffer.push(
        async () => {
          await kitaru.say_and_wait('呼……哈！我唱的如何！');
          await era.printAndWait([
            '在接连几首歌下来之后的 ',
            kitaru.get_colored_name(),
            ' 气喘吁吁的看着 ',
            you.get_colored_name(),
            '，期冀着评价。',
          ]);
          await era.printAndWait(
            '被汗浸透的洁白衬衣，其下的丰满乳肉若隐若现。',
          );
        },
        async () => {
          await kitaru.say_and_wait('哈……哈！我唱的如何！');
          await era.printAndWait([
            '在接连几首歌下来之后的 ',
            kitaru.get_colored_name(),
            ' 气喘吁吁的看着 ',
            you.get_colored_name(),
            '，期冀着评价。',
          ]);
          await era.printAndWait(
            '裙摆到白色长筒袜之间的绝对领域，泛着被汗水浸湿的油光。',
          );
        },
      );
    } else {
      buffer.push(async () => {
        await era.printAndWait([
          '对于 ',
          kitaru.get_colored_name(),
          ' 而言，卡拉OK的难度远不及神社里那些需要又唱又跳的祭祀舞蹈。',
        ]);
        await kitaru.say_and_wait([callname, '，你也来一首吧！']);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_s_movie(kitaru, you, callname) {
    await era.printAndWait([
      '在一阵毫无复现可能的占卜动作之后，',
      kitaru.get_colored_name(),
      ' 指向了其中的一张宣传海报。',
    ]);
    const buffer = [
      async () => {
        await era.printAndWait('主打不可名状恐怖的民俗恐怖片。');
        await era.printAndWait([
          '结束后，双腿发软的 ',
          kitaru.get_colored_name(),
          ' 煞有介事的告诉 ',
          you.get_colored_name(),
          ' 驱除怨灵的技巧',
        ]);
      },
      async () => {
        await era.printAndWait('背景发生在异星的科幻片。');
        await kitaru.say_and_wait('唔！该说男主的预言能力很让人羡慕吗？');
      },
      async () => {
        await era.printAndWait('烧脑向的推理片。');
        await kitaru.say_and_wait('……和占卜的结果一样呢？');
      },
    ];
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await era.printAndWait('甜腻的爱情喜剧');
        await kitaru.say_and_wait([
          '哈哈哈！这种事情我好像也对 ',
          callname,
          ' 做过呢！',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {0|1|2|3} luck 运势数值
   */
  async out_church(kitaru, you, callname, luck) {
    await era.printAndWait([
      '和担当一起来到了',
      kitaru.couple_title,
      '家的神社。',
    ]);
    await kitaru.say_and_wait('那么，是求签的时候了！');
    await kitaru.say_and_wait('我看看！今天的运势是！');
    await kitaru.say_and_wait('白兴大人～白兴大人～');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 以其独创的手法摇着签筒，伴随着吟唱的祷词，一条纸签从签筒中滑落。',
    ]);
    await kitaru.say_and_wait('嘿！');
    switch (luck) {
      case 0:
        await era.printAndWait('（小吉！）');
        await kitaru.say_and_wait('还不错！');
        break;
      case 1:
        await era.printAndWait('（中吉！）');
        await kitaru.say_and_wait('哦！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 对 ',
          you.get_colored_name(),
          ' 露出了笑容。',
        ]);
        break;
      case 2:
        if (era.get('love:56') >= 50) {
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 将纸签交给了 ',
            you.get_colored_name(),
            ' 并示意念出上面的字。在听到大吉之后，',
            kitaru.sex,
            '露出惊喜的神情扑到 ',
            you.get_colored_name(),
            ' 的身上。',
          ]);
          await kitaru.say_and_wait(['把好运也分给我一点吧！', callname, '！']);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 紧紧抱住了 ',
            you.get_colored_name(),
            ' 的腰，让 ',
            you.get_colored_name(),
            ' 得以感受到',
            kitaru.sex,
            '的体温和心跳。',
          ]);
        } else {
          await kitaru.say_and_wait('哇！大吉！');
          await kitaru.say_and_wait([callname, '！你看到了吗？']);
          await era.printAndWait(
            '倒不如说，对于此间神社的巫女而言，抽不出大吉才是一件奇怪的事。',
          );
        }
        break;
      case 3:
        await era.printAndWait('（凶）');
        await kitaru.say_and_wait('唔……');
        await era.printAndWait([
          '就在 ',
          you.get_colored_name(),
          ' 思考该如何安慰',
          kitaru.sex,
          '的时候，一阵疾风吹来，将 ',
          kitaru.get_colored_name(),
          ' 手中的纸签卷走。',
        ]);
        await kitaru.say_and_wait('白兴大人保佑……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 盯着飞走的纸签喃喃自语，',
          you.get_colored_name(),
          ' 不知道该说些什么。',
        ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_s_restaurant(kitaru, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait([
          callname,
          '，那家店的苹果派看起来很不错的样子！',
        ]);
        await kitaru.say_and_wait('要试试吗？');
      },
      async () => {
        await kitaru.say_and_wait('现在是吃饭的吉时呢！');
        await kitaru.say_and_wait('要一起去吃吗？');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async o_s_dating(kitaru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await kitaru.say_and_wait('唔！感觉过于庄重的服饰不是很适合我呢！');
        await kitaru.say_and_wait('当然！巫女服除外啦！');
        await kitaru.say_and_wait('这件怎么样？');

        const buffer2 = [];
        buffer2.push(
          async () => {
            await era.printAndWait([
              '穿着带着可爱花纹的连衣裙，从更衣室出来后的 ',
              kitaru.get_colored_name(),
              ' 如此询问 ',
              you.get_colored_name(),
              '。',
            ]);
            await era.printAndWait([
              '有些清凉的着装露出了',
              kitaru.sex,
              '诱人的白皙双肩。',
            ]);
          },
          async () => {
            await era.printAndWait([
              '如上班族一般的衬衫配着领带，从更衣室出来后的 ',
              kitaru.get_colored_name(),
              ' 如此询问 ',
              you.get_colored_name(),
              '。',
            ]);
            await era.printAndWait(
              '双腿换上了符合职场风格的黑色丝袜，恰到好处的丹数使其微微透着肉色。',
            );
          },
          async () => {
            await era.printAndWait([
              '用于正式场合的礼服，从更衣室出来后的 ',
              kitaru.get_colored_name(),
              ' 如此询问',
              you.get_colored_name(),
            ]);
            await era.printAndWait([
              '礼服的裙摆在',
              kitaru.sex,
              '的转身中扬起，露出的腿环在肉感的大腿上勒出了明显的痕迹。',
            ]);
          },
        );
        if (kitaru.sex_code !== 1) {
          buffer2.push(async () => {
            await era.printAndWait([
              '不知道从哪里翻出来的旗袍，从更衣室出来后的 ',
              kitaru.get_colored_name(),
              ' 如此询问',
              you.get_colored_name(),
            ]);
            await era.printAndWait([
              '颇为修身的旗袍，隐约可以听到胸部布料的哀嚎悲鸣。',
            ]);
          });
        }
        await get_random_entry(buffer2)();

        await kitaru.say_and_wait(['喂！', callname, ' 在看哪里呢？']);
      },
      async () => {
        await kitaru.say_and_wait('嘿！');
        await kitaru.say_and_wait('握手术！');
        await kitaru.say_and_wait('据说能把运气传递给别人呢！');
        await era.printAndWait('之后在其他人的注视下像情侣一样越靠越紧。');
      },
    );
    if (era.get('love:56') >= 50 && era.get('exp:56:接吻次数') > 0) {
      buffer.push(async () => {
        await kitaru.say_and_wait(['那个……', callname, '！']);
        await kitaru.say_and_wait('啾！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 亲了 ',
          you.get_colored_name(),
          ' 一下。',
        ]);
        await era.printAndWait(
          '与其说是接吻、不如说是把嘴唇和嘴唇撞在了一起。',
        );
      });
    }
    await get_random_entry(buffer)();
  },
  haircut: (() => {
    const title = '福来的发型';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 待兼福来对玩家的称呼
     * @param {PrintedSpan} call_2 待兼福来对无声铃鹿的称呼
     * @param {PrintedSpan} call_62 待兼福来对待兼诗歌剧的称呼
     * @param {PrintedSpan} call_58 待兼福来对名将怒涛的称呼
     * @param {PrintedSpan} call_74 待兼福来对目白光明的称呼
     */
    const f = async (
      kitaru,
      you,
      callname,
      call_2,
      call_58,
      call_62,
      call_74,
    ) => {
      await era.printAndWait([
        '再一次和 ',
        kitaru.get_colored_name(),
        ' 路过了商店街的发廊。',
      ]);
      await era.printAndWait(
        '路过店门时，目光不由自主的在那些海报停留了几眼。',
      );
      await kitaru.say_and_wait(['欸！', callname, ' 在看什么呢？']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 顺着 ',
        you.get_colored_name(),
        ' 的目光看去，在见到海报上那些有着精心保养发型的',
        kitaru.uma_sex_title,
        '模特后，',
        kitaru.sex,
        '下意识的摸了摸自己日常乱糟糟的发型。',
      ]);
      await kitaru.say_and_wait('啊啦！我平时倒是没有特别关注过自己的发型……');
      await kitaru.say_and_wait([
        call_62,
        '，',
        call_74,
        '，',
        call_2,
        ' 的发型……',
      ]);
      await kitaru.say_and_wait([call_58, ' 倒是和我差不多']);
      await era.printAndWait([
        '的确，',
        you.get_colored_name(),
        ' 的担当 ',
        kitaru.get_colored_name(),
        ' 似乎本身就属于那种不怎么注意头发打理的，全凭',
        kitaru.uma_sex_title,
        '自身发质特有的韧性维持了一个大概的稳定的状态而已。',
      ]);
      await kitaru.say_and_wait([
        '话说，',
        callname,
        ' 想看我留长发的样子吗？',
      ]);
      await kitaru.say_and_wait([
        '小学的时候倒是试着留过长发，但照镜子的时候，总是会想到照片里的',
        kitaru.elder_sibling_sex_title,
      ]);
      await kitaru.say_and_wait(['不过，如果 ', callname, ' 喜欢的话！']);
      await era.printAndWait([
        '看来 ',
        kitaru.get_colored_name(),
        ' 似乎被 ',
        you.get_colored_name(),
        ' 无心的行为勾起了莫名的危机感。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} kitaru 待兼福来 */
  get_haircut_confirm: (kitaru) => [
    '要带 ',
    kitaru.get_colored_name(),
    ' 去发廊吗？',
  ],
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async haircut_intro(kitaru, you, callname) {
    await kitaru.say_and_wait([callname, '，又想我换发型了吗？']);
    switch (era.get('cstr:56:后发')) {
      // 长直发
      case 'long_straight':
        await era.printAndWait([
          '留着如瀑布般顺直的橙色长发的 ',
          kitaru.get_colored_name(),
          ' 回过头来看着 ',
          you.get_colored_name(),
          '。',
        ]);
        break;
      // 短发/齐肩直发
      case 'shor_hair':
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 回过头来看着 ',
          you.get_colored_name(),
          '，优雅的橙色发丝垂在肩头。',
        ]);
        break;
      // 外翼式
      case 'wing_style':
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 回过头来看着 ',
          you.get_colored_name(),
          '，粉颊边被香汗黏住了些发丝。',
        ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   */
  async haircut_select(kitaru, you) {
    await era.printAndWait([
      '那么，',
      you.get_colored_name(),
      ' 有什么想要让',
      kitaru.sex,
      '尝试的发型呢？',
    ]);
    era.printButton('齐肩直发', 1);
    era.printButton('垂到腰的长直发', 2);
    era.printButton('「现在的发型就很适合福来」', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的建议下，',
          kitaru.get_colored_name(),
          ' 换成了齐肩的直发。',
        ]);
        await kitaru.say_and_wait('怎么样？');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 侧过头来看着 ',
          you.get_colored_name(),
          '，柔顺的齐肩长发泛着蜂蜜般的橙黄色光芒。',
        ]);
        break;
      case 2:
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的建议下，',
          kitaru.get_colored_name(),
          ' 换成了垂到腰部的长直发。',
        ]);
        await kitaru.say_and_wait('长发……果然还是有些不习惯呢！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 不经意地用手指拢住垂到腰侧的发丝。',
        ]);
        await era.printAndWait('这样看来的确变得稳重了许多。');
        break;
      case 3:
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 的建议下，',
          kitaru.get_colored_name(),
          ' 没有改变自己的发型。',
        ]);
        await kitaru.say_and_wait('嗯！果然还是这样比较好！');
        await era.printAndWait([
          '看着 ',
          kitaru.get_colored_name(),
          ' 的样子，',
          you.get_colored_name(),
          ' 不禁伸手试了试',
          kitaru.sex,
          '蓬松橙发的柔软触感。',
        ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   */
  async o_s_shopping(kitaru, you) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('喔！是新的占卜道具哦！');
        await era.printAndWait([
          you.get_colored_name(),
          '看着 ',
          kitaru.get_colored_name(),
          ' 指着那个以历代名',
          kitaru.uma_sex_title,
          '为题材的塔罗牌。',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('想要看我留长发的样子吗？');
        await kitaru.say_and_wait('……抱歉');
        await era.printAndWait([
          '在路过发廊的时候，',
          kitaru.get_colored_name(),
          ' 支支吾吾的绕过了这个被 ',
          you.get_colored_name(),
          ' 提起的话题',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  good_night_normal(kitaru, you, callname) {
    era.print([
      '繁忙的一天结束了，把 ',
      kitaru.get_colored_name(),
      ' 送到了学生宿舍门口。',
    ]);
    const buffer = [];
    if (era.get('love:56') >= 75) {
      buffer.push(
        () => {
          era.print([
            '趁 ',
            you.get_colored_name(),
            ' 不注意，',
            kitaru.get_colored_name(),
            ' 突然抱住了 ',
            you.get_colored_name(),
            '。',
          ]);
          kitaru.say('啾……');
          kitaru.say('得逞了呢！');
          era.print([
            '在 ',
            you.get_colored_name(),
            ' 反应过来之前，',
            kitaru.get_colored_name(),
            ' 已经跑进了宿舍。',
          ]);
          era.print(['唇上还留着', kitaru.sex, '的香甜气味']);
        },
        () => {
          kitaru.say(['和 ', callname, ' 在一起的时间，总是过的这么快呢！']);
          era.print([
            '对上了满脸笑容的 ',
            kitaru.get_colored_name(),
            '，突然地向 ',
            you.get_colored_name(),
            ' 吻去',
          ]);
          era.print(['吸引了不少其他', kitaru.uma_sex_title, '的指指点点。']);
        },
      );
    } else if (era.get('love:56') >= 50) {
      buffer.push(() => {
        kitaru.say('明天见！');
        era.print([
          '在冲上来给了 ',
          you.get_colored_name(),
          ' 一个引人注目的拥抱之后，',
          kitaru.get_colored_name(),
          ' 跑进了宿舍。',
        ]);
      });
    } else {
      buffer.push(() => {
        kitaru.say('今天也辛苦了！');
        era.print([
          kitaru.sex,
          '向 ',
          you.get_colored_name(),
          ' 挥了挥手，小跑进了宿舍。',
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {1|2} check 求爱判定，2=大成功，拒绝会被强奸
   */
  async good_night_sex(kitaru, you, callname, check) {
    era.print([
      '繁忙的一天结束了，把 ',
      kitaru.get_colored_name(),
      ' 送到了学生宿舍门口。',
    ]);
    const buffer = [];
    buffer.push(async () => {
      era.print([
        '刚想像往常一样告别，却看见 ',
        kitaru.get_colored_name(),
        ' 一反常态的握住了 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      kitaru.say('那个！因为占卜到了今天为吉，所以外宿申请什么的已经做好了……');
      era.print([
        '面色红润的 ',
        kitaru.get_colored_name(),
        ' 磨蹭着膝盖，用指尖捏着 ',
        you.get_colored_name(),
        ' 的衣服。',
      ]);
    });
    if (kitaru.sex_code !== 1) {
      buffer.push(async () => {
        era.print([
          '刚想像往常一样告别，却看见 ',
          kitaru.get_colored_name(),
          ' 一反常态的握住了 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
        kitaru.say('那个……');
        era.print([
          '面色红润的 ',
          kitaru.get_colored_name(),
          ' 拉开了运动外套的拉链，跃入眼中的两颗丰润乳球，随着',
          kitaru.sex,
          '愈发不稳的站姿害羞地摇动着。',
        ]);
        kitaru.say([callname, ' 明白的吧……？']);
      });
    }
    await get_random_entry(buffer)();
    era.print([
      '已经变成了爱心的星星瞳热切地看着 ',
      you.get_colored_name(),
      '。',
    ]);
    era.printButton('接受', 1);
    era.printButton('拒绝', 2);
    const ret = await era.input();
    if (ret === 2) {
      if (check === 2) {
        await kitaru.say_and_wait(
          '……真的，真的不可以吗，明明正是大吉的时候呢？',
        );
        await era.printAndWait([
          '正打算施以铁爪的右手被踮起脚尖的 ',
          kitaru.get_colored_name(),
          ' 握住了手腕，似有骨骼声响起，仍旧满脸堆笑的橙色',
          kitaru.uma_sex_title,
          '强行拖着 ',
          you.get_colored_name(),
          ' 离开了学生宿舍。',
        ]);
      } else {
        await kitaru.say_and_wait('下次……还是先占卜一下？');
        await kitaru.say_and_wait('或者，我也学着强硬一点？');
        await era.printAndWait([
          '目送着 ',
          kitaru.get_colored_name(),
          ' 走回学生宿舍，',
          you.get_colored_name(),
          ' 听见',
          kitaru.sex,
          '如此喃喃自语着。',
        ]);
      }
    }
    return ret;
  },
  punishment_1: (() => {
    const title = '惩戒之后';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([
        '呜啊！命定之人变成',
        kitaru.uma_sex_title,
        '了吗！',
      ]);
      await kitaru.say_and_wait(['不用担心！', callname, '，我会帮你适应的！']);
      await kitaru.say_and_wait('话说……还该叫训练员吗？');
      await kitaru.say_and_wait('姐姐怎么样？');
    };
    f.title = title;
    return f;
  })(),
  punishment_2: (() => {
    const title = '惩戒之后';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     */
    const f = async (kitaru, you) => {
      await kitaru.say_and_wait('唔！姐姐想干什么？');
      await era.printAndWait([
        you.get_colored_name(),
        '想要反抗而使出来的铁爪，却被轻而易举的擒住了。',
      ]);
      await era.printAndWait([
        '之后在 ',
        kitaru.get_colored_name(),
        ' 半强迫的要求下换上了和',
        kitaru.sex,
        '如出一辙的服饰。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  punishment_3: (() => {
    const title = '惩戒之后';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('没有关系……');
      await kitaru.say_and_wait([
        '即使是这样，我也不会抛下 ',
        callname,
        ' 的……',
      ]);
      await kitaru.say_and_wait('毕竟是约好的事情嘛……');
      await kitaru.say_and_wait('呼……');
      await era.printAndWait([
        '伸手将 ',
        you.get_colored_name(),
        ' 刚洗完澡，湿漉漉的耳朵捋直，擦干，橙色的赛',
        kitaru.uma_sex_title,
        '将耳饰戴在了 ',
        you.get_colored_name(),
        ' 的耳朵上。',
      ]);
      await era.printAndWait([
        '耳朵似乎是过于敏感了，',
        you.get_colored_name(),
        ' 的视野中逐渐蒙上了一层水汽。',
      ]);
      await era.printAndWait([
        '尾巴认主般的缠在了 ',
        kitaru.get_colored_name(),
        ' 的腰上……',
      ]);
      await era.printAndWait([
        '难以想象，这种事情会发生在以前那个只手就能制服 ',
        kitaru.get_colored_name(),
        ' 的 ',
        you.get_colored_name(),
        ' 身上。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async load_talk(kitaru, you, callname) {
    if (era.get('cflag:56:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
      await kitaru.print_and_wait([
        '自 ',
        you.get_colored_name(),
        ' 离开后，',
        kitaru.get_colored_name(),
        ' 一直把自己封在家里的藏书室。',
      ]);
      await kitaru.say_and_wait('是的！是的！找到了！');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: '「找到了找到了找到了找到了找到了找到了找到了！！！！！」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
      await kitaru.say_and_wait([
        '献祭需要孩子的血，这样就能追踪到 ',
        callname,
        '！',
      ]);
      await kitaru.print_and_wait([
        '摸着自己微微隆起的肚子，披头散发的 ',
        kitaru.get_colored_name(),
        ' 脸上挂着足以称之为扭曲的微笑。',
      ]);
    } else if (era.get('love:56') < 49) {
      await kitaru.say_and_wait(['这个闹钟是 ', callname, ' 的开运道具吗？']);
      await kitaru.say_and_wait('唔！');
      await kitaru.say_and_wait('我现在就还给你！');
    } else if (era.get('love:56') > 89) {
      await kitaru.say_and_wait('离开了……');
      await kitaru.say_and_wait('命定之人……离开了……');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: '「不……不要不要不要不要不要不不不不要啊！」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
    }
  },
  cl_temple_fair: (() => {
    const title = '庙会';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '今天和 ',
        kitaru.get_colored_name(),
        ' 参加了夏季合宿时的庙会。',
      ]);
      await era.printAndWait([
        '身着淡绿色浴衣的 ',
        kitaru.get_colored_name(),
        ' 正走在 ',
        you.get_colored_name(),
        ' 的前面，宽大但并不算厚重的浴衣给元气的',
        kitaru.sex,
        '添了不少优雅的气息。',
      ]);
      await era.printAndWait([
        '露着洁白脚背的木屐，随着 ',
        kitaru.get_colored_name(),
        ' 的轻块步伐发出清脆的声音。',
      ]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        '带着妩媚的微笑看着 ',
        you.get_colored_name(),
        '，侧着身子，本就优美的臀股曲线更加的突出。',
      ]);
      await kitaru.say_and_wait(['怎么样！', callname, '！']);
      era.printButton('搂住待兼福来的腰', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('「喜欢」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '伸手搭在了 ',
          kitaru.get_colored_name(),
          ' 的腰上，',
          kitaru.teen_sex_title,
          '的身体些微颤抖。',
        ]);
        await era.printAndWait([
          '橙色的马尾反倒是自觉的竖起，像是拥抱恋人般系在 ',
          you.get_colored_name(),
          ' 的手臂上。',
        ]);
        await kitaru.say_and_wait('欸！');
        await era.printAndWait([
          '而后，抬手在',
          kitaru.sex,
          '结实又圆润的臀部上轻拍了一下，',
          kitaru.teen_sex_title,
          '配合的发出了可爱的叫声。',
        ]);
        await kitaru.say_and_wait('咿！');
        await era.printAndWait([
          '顺着臀沟向里慢慢移动，探入',
          kitaru.sex,
          '的双腿之间，隔着内裤挑逗般地反复触碰着',
          kitaru.sex,
          '的敏感部位。',
        ]);
        await kitaru.say_and_wait('周围……周围有人……咿呀！');
        await era.printAndWait('想要出声制止，却又因为下身的刺激说不出话。');
        await era.printAndWait([
          '只得更加的依靠在 ',
          you.get_colored_name(),
          ' 的怀里，寄希望于周围的人以为',
          kitaru.sex,
          '和训练员只是有些过于紧密的情侣罢了。',
        ]);
        await kitaru.say_and_wait('唔！');
        await era.printAndWait([
          '伴随着故意压低的轻呼，湿热黏腻的感觉自 ',
          you.get_colored_name(),
          ' 的指尖的布料处传来。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 已经完全瘫在了 ',
          you.get_colored_name(),
          ' 的怀里，双腿微微颤抖着，那瞳孔里的星星也覆上一层水雾。',
        ]);
        await kitaru.say_and_wait([callname, '……可以的……']);
        await era.printAndWait([
          '抱着 ',
          kitaru.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 踏入了一旁无人的树林。',
        ]);
      } else {
        await era.printAndWait([
          '得到 ',
          you.get_colored_name(),
          ' 夸奖之后的',
          kitaru.teen_sex_title,
          '，连着转了好几个圈，惹得不少人向你们投来目光。',
        ]);
        await era.printAndWait([
          '就算穿着如此精致典雅的衣服，',
          kitaru.sex,
          '还是那个会一惊一乍的 ',
          kitaru.get_colored_name(),
          ' 没错。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = '万圣节';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '万圣节的夜晚，特雷森学院连同周围的商店街一起被装饰成了万圣节应有的样子。',
      );
      await era.printAndWait([
        '在巨大蝙蝠挂饰和南瓜头的阴影下，各位赛',
        kitaru.uma_sex_title,
        '们也像是粉丝感谢祭那样摆起了摊。',
      ]);
      await kitaru.say_and_wait(['啊！是 ', callname, '！']);
      await kitaru.say_and_wait('HAPPY HALLOWEEN！');
      await era.printAndWait([
        '处于 ',
        you.get_colored_name(),
        ' 担当的占卜小屋内，看着坐在占卜桌后面的 ',
        kitaru.get_colored_name(),
        ' 穿着一身为万圣节特意准备的装束。',
      ]);
      await era.printAndWait(
        '以纯黑为主色调的修女服，用白色作为点缀，朴素又透着十足的纯洁感。',
      );
      await era.printAndWait(
        '而鲜明的橘发与星星瞳则恰到好处的抵消了庄重服饰带来的压抑，反倒是若有若无的透露出一丝狐狸般魅惑的气调。',
      );
      await kitaru.say_and_wait('啊啦啦啦！');
      await kitaru.say_and_wait('很少见吧！');
      await kitaru.say_and_wait(
        '本来还想把这里的装扮也弄的和告解室一样的，可惜没有时间了！',
      );
      era.printButton('「这身装扮很适合你呢。」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！应该都是神职人员的缘故吧！');
      await kitaru.say_and_wait([
        '那么！',
        callname,
        '，有什么想对小福忏悔的吗？',
      ]);
      await era.printAndWait([
        '做了一个双手相握的动作，修女十字架般的双瞳盯着 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton('发糖', 1);
      era.printButton('亲吻待兼福来', 2, {
        disabled: era.get('love:56') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '把事先准备好的糖果递给了 ',
          kitaru.get_colored_name(),
          ' 之后，在修女的祈祷声中回去了。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '的身体稍稍前倾，心领神会的 ',
          kitaru.get_colored_name(),
          ' 也随之把椅子往前搬了一点。',
        ]);
        await kitaru.say_and_wait('嗯，咕呜！');
        await era.printAndWait([
          '两人的舌头交缠在一起，担当的舌尖在 ',
          you.get_colored_name(),
          ' 口中游走，带着万圣节不同糖果的味道。',
        ]);
        await kitaru.say_and_wait('哈！');
        await era.printAndWait('唾液拉成的丝线落在修女服上。');
        await kitaru.say_and_wait(['……', callname, '。']);
        await kitaru.say_and_wait('呜……有些太大胆了呢。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
