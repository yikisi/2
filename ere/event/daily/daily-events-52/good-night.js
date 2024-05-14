const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { lust_border } = require('#/data/ero/orgasm-const');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const awake = 2 * sys_check_awake(52) + sys_check_awake(0),
    call_me = sys_get_callname(52, 0),
    urara = get_chara_talk(52),
    callname = urara.get_colored_name(),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    self_call = sys_get_callname(52, 52);
  if (awake === 3) {
    if (get_custom_check(52).is_want_make_love() > 0) {
      if (relation > 150) {
        if (love === 100) {
          urara.say(
            `咕啾～哈啊……${call_me}，这次也来做舒服的事情吧？可以做到尽兴起来为止哦？`,
          );
          era.print([
            '在失控般相拥湿吻之后，娇小的',
            urara.sex,
            '用天真的语调伏在 ',
            me.get_colored_name(),
            ' 的耳边轻吟着魔性的诱惑。',
          ]);
        } else if (love >= 90) {
          urara.say([
            '啾～就是说今天晚上 ',
            self_call,
            ' 没问题哦？所以……',
            call_me,
            ' 要和 ',
            self_call,
            ' 一起吗？',
          ]);
          era.print([
            '带着变得几分成熟的羞涩在恋人脸上落下一吻，',
            callname,
            ' 的笑容下是变得温润的脸颊。',
          ]);
        } else if (love >= 75) {
          urara.say([
            '回去的时候，',
            self_call,
            ' 可以去 ',
            call_me,
            ' 的房间看看吗？就、就只是看一看而已！',
          ]);
          era.print([
            '用',
            urara.get_teen_sex_title(),
            '渴求的眼神说着暧昧的借口，潮红爬上小脸的 ',
            callname,
            ' 一切尽在不言之中。',
          ]);
        } else {
          urara.say([
            call_me,
            '！今天的话，可、可以多陪陪 ',
            self_call,
            ' 吗？晚上，多待一会儿吧！',
          ]);
          era.print([
            '支支吾吾地轻蹭着 ',
            me.get_colored_name(),
            ' 的身体，',
            callname,
            ' 喘息急促地挽留着 ',
            me.get_colored_name(),
            '。',
          ]);
        }
      } else if (love === 100) {
        urara.say([
          '最近觉得累了吗？那么，啾……嘿嘿，今天 ',
          call_me,
          ' 可以对 ',
          self_call,
          ' 做更多厉害的事哦？',
        ]);
        era.print([
          '柔软的触感拂过 ',
          me.get_colored_name(),
          ' 的嘴角，踮起脚尖的 ',
          callname,
          ' 用轻吻向',
          urara.sex,
          '的 ',
          call_me,
          ' 发出了缠绵的请求。',
        ]);
      } else if (love >= 90) {
        urara.say([
          '虽然 ',
          self_call,
          ' 没觉得寂寞，但如果是 ',
          call_me,
          ' 想要……',
          self_call,
          ' 也没问题哦？',
        ]);
        era.print([
          '口是心非地发出着邀请，分别前的 ',
          callname,
          ' 突然眼神迷离的环住了 ',
          me.get_colored_name(),
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
          me.get_colored_name(),
          ' 回答第一题，步步紧逼的小',
          urara.get_uma_sex_title(),
          '便用欲求不满的神色向 ',
          me.get_colored_name(),
          ' 抛出了第二问。',
        ]);
      } else {
        urara.say([
          call_me,
          '，',
          self_call,
          ' 的身体，变得好奇怪……可以不要走吗？',
        ]);
        era.print([
          '尽管很不情愿，小',
          urara.get_uma_sex_title(),
          '还是满脸羞红地伸手拉住了 ',
          me.get_colored_name(),
          ' 的衣角。',
        ]);
      }
      era.printButton('接受', 1);
      era.printButton('拒绝', 2);
      hook.arg = Number((await era.input()) === 1);
    } else if (relation > 150) {
      const talk_arr = [
        [
          ['今天就到这里了吗？那么下次见啦 ', call_me, '！'],
          [
            '在向 ',
            me.get_colored_name(),
            ' 道别后，',
            callname,
            ' 开心跑开了。',
          ],
        ],
        [
          ['该回去了？我明白了！再见哦 ', call_me, '！'],
          [
            '在离开之前，',
            callname,
            ' 笑着向 ',
            me.get_colored_name(),
            ' 认真地说了再见。',
          ],
        ],
        [
          ['已经这个时间了！', call_me, ' 路上要注意安全哦！'],
          [
            '对 ',
            me.get_colored_name(),
            ' 做出了善意的叮嘱，小',
            urara.get_uma_sex_title(),
            '蹦蹦跳跳的跑向了宿舍。',
          ],
        ],
        [
          [call_me, ' 也累了吗？辛苦了呦！回去后要好好休息哦？'],
          [
            '在一天的结尾，',
            callname,
            ' 向 ',
            me.get_colored_name(),
            ' 招着手离开了。',
          ],
        ],
      ];
      if (love > 0) {
        talk_arr.push(
          [
            [
              '虽然没什么实感，可两人一起的话，时间果然会过得很快！难道 ',
              call_me,
              ' 会加速时间！诶？不会吗？',
            ],
            [
              '说着没头没脑的话，',
              callname,
              ' 与 ',
              me.get_colored_name(),
              ' 在道别后分开了。',
            ],
          ],
          [
            ['诶？是要送我回去吗？谢谢 ', call_me, '！'],
            [
              '听到 ',
              me.get_colored_name(),
              ' 的建议，',
              callname,
              ' 笑着与 ',
              me.get_colored_name(),
              ' 一同走上了最后一段路。',
            ],
          ],
        );
      }
      if (love >= 25) {
        talk_arr.push(
          [
            [
              '虽然还想再待一会，但是那样会让大家担心吧！那么下次再见了，',
              call_me,
              '！',
            ],
            [
              callname,
              ' 看起来有点不够尽兴，但还是听话地向 ',
              me.get_colored_name(),
              ' 道别了。',
            ],
          ],
          [
            [
              '有点舍不得在这里和 ',
              call_me,
              ' 再见呢！下次可以多陪陪 ',
              self_call,
              ' 吗？',
            ],
            [
              '虽然有些不舍的扯了扯 ',
              me.get_colored_name(),
              ' 的衣角，但 ',
              callname,
              ' 还是小声地做完道别就离开了。',
            ],
          ],
        );
      }
      if (love >= 50) {
        talk_arr.push(
          [
            ['哈啊……对不起 ', call_me, '，嗯～再稍等一下哦……'],
            [
              '脸上泛着奇怪的潮红，',
              callname,
              ' 临走前还像是发情的小动物般蹭着 ',
              me.get_colored_name(),
              ' 的身体。',
            ],
          ],
          [
            [
              call_me,
              '！临走之前，可以再用力抱抱 ',
              self_call,
              ' 吗？嗯……再用力一点也没关系哦？',
            ],
            [
              '提出着说再见前的小愿望，因 ',
              me.get_colored_name(),
              ' 的拥抱变得满脸红晕的 ',
              callname,
              ' 露出了恍惚的神情。',
            ],
          ],
        );
      }
      if (love >= 75) {
        talk_arr.push(
          [
            ['诶？这个时间……嘿嘿～今天真的很开心哦！下次我们也继续在一起吧！'],
            [
              '在给予 ',
              me.get_colored_name(),
              ' 一个恋人的拥抱后，',
              callname,
              ' 抖着耳朵满足地跑开了。',
            ],
          ],
          [
            [
              '诶……不能再待一会儿了吗？不过的确不能给 ',
              call_me,
              ' 添麻烦呢，下次再见了哦！',
            ],
            [
              '恋恋不舍地结束了分开前的亲热，',
              callname,
              ' 三步一回头地离开了。',
            ],
          ],
        );
      }
      if (love >= 90) {
        talk_arr.push(
          [
            ['要离开了吗？那么……啾！嘿嘿～这是告别的吻哦！'],
            [
              '摇着尾巴，',
              callname,
              ' 在离开前轻啄了一下 ',
              me.get_colored_name(),
              ' 的脸颊，随后像只小鸟般笑着跑走了。',
            ],
          ],
          [
            [
              '嘿嘿～',
              call_me,
              ' 要走了吗？路上注意安全哦？回去要好好休息不要半夜出门花心哦？',
            ],
            [
              '看着 ',
              callname,
              ' 离开前变得意味深长的笑容，',
              me.get_colored_name(),
              ' 总觉得有点脊背发凉。',
            ],
          ],
        );
      }
      if (love === 100) {
        talk_arr.push(
          [
            [
              '要是 ',
              call_me,
              ' 现在松手的话，',
              self_call,
              ' 会“嗖”的一下子跑丢也说不定哦……开玩笑啦！我已经不是小孩子了！不过下次一起的时候也要握紧 ',
              self_call,
              ' 的手哦！',
            ],
            [
              '反复着担当离开前的玩笑，不知为何 ',
              me.get_colored_name(),
              ' 的心情变得有些焦躁起来……',
            ],
          ],
          [
            [
              '啾嗯～哈啊……嗯！这次就先到这里，',
              call_me,
              ' 还想要的话下次再玩吧！不用担心，就算 ',
              call_me,
              ' 没来，',
              self_call,
              ' 会永远等着 ',
              call_me,
              ' 哦……',
            ],
            [
              '在爱人的脖子上吮下分开前的红印，小',
              urara.get_uma_sex_title(),
              '清澈的声音浑浊而魅惑的缠绕在 ',
              me.get_colored_name(),
              ' 的耳边。',
            ],
          ],
        );
      }
      const temp = get_random_entry(talk_arr);
      urara.say(temp[0]);
      era.print(temp[1]);
    } else {
      const talk_arr = [
        [
          ['该回去了？那……下次再见了 ', call_me, '！'],
          [
            '斟酌了一下该说些什么，',
            callname,
            ' 最后还是决定送 ',
            me.get_colored_name(),
            ' 一个微笑。',
          ],
        ],
        [
          ['已经到这个时间了，该回去了哦 ', call_me, '！'],
          [
            '在笑着对 ',
            me.get_colored_name(),
            ' 做出提醒后，小',
            urara.get_uma_sex_title(),
            '平平淡淡地走向了宿舍。',
          ],
        ],
        [
          ['送 ', self_call, ' 回去吗？但是我没关系的，谢谢 ', call_me, '！'],
          [
            '在摆摆手拒绝了 ',
            me.get_colored_name(),
            ' 后，',
            callname,
            ' 还是一个人离开了。',
          ],
        ],
      ];
      if (love > 0) {
        talk_arr.push(
          [
            [
              '今天过得也很快，',
              call_me,
              ' 也变温柔了一点呢……没什么哦！再见 ',
              call_me,
              '！',
            ],
            [
              '说着令人摸不着头脑的话，',
              callname,
              ' 在与 ',
              me.get_colored_name(),
              ' 道别后慢慢地离开了。',
            ],
          ],
          [
            ['虽然不太明白，感觉有点不舍得走了，但是那样也不好呢……'],
            [
              '在摇着耳朵自言自语一番后，',
              callname,
              ' 还是在好好地向 ',
              me.get_colored_name(),
              ' 道别后离开了。',
            ],
          ],
        );
      }
      if (love >= 25) {
        talk_arr.push(
          [
            [
              '让大家担心？但明明大家都让 ',
              call_me,
              ' 和 ',
              self_call,
              ' 一起，应该不会被担心吧！',
            ],
            [
              '即使看起来不够尽兴，小',
              urara.get_uma_sex_title(),
              '还是听话地离开了，不过 ',
              me.get_colored_name(),
              ' 好像是被担当抱怨了？',
            ],
          ],
          [
            [
              '没事的，',
              self_call,
              ' 不会乱跑的！不过 ',
              call_me,
              ' 坚持的话……那就一起走吧！',
            ],
            [
              '扭捏的小',
              urara.get_uma_sex_title(),
              '还是接受了 ',
              me.get_colored_name(),
              ' 的请求，并肩而行的氛围也开始变得有些微妙起来。',
            ],
          ],
        );
      }
      if (love >= 50) {
        talk_arr.push(
          [
            ['对不起……这个、再给 ', self_call, ' 一点时间……'],
            [
              '在分开前不断蹭着 ',
              me.get_colored_name(),
              ' 的身体，',
              callname,
              ' 努力抑制着因情欲而来颤抖。',
            ],
          ],
          [
            ['明明是那样的人，但是 ', call_me, ' 的气息……啊！对不起……'],
            [
              '终于从沉迷的恍惚中缓过神来，',
              callname,
              ' 连忙害羞地放开了 ',
              me.get_colored_name(),
              ' 的衣角。',
            ],
          ],
        );
      }
      if (love >= 75) {
        talk_arr.push(
          [
            [call_me, '！临走再前抱一下吧……可以吗？那……尽量温柔一点哦？'],
            [
              '从若即若离的接触到再次紧紧的相拥，道别环节似乎又被拉长了好一段时间。',
            ],
          ],
          [
            ['已经是这个时间了，而且今天也很开心，但是 ', call_me, '……'],
            [
              '在犹豫一番后给予了 ',
              me.get_colored_name(),
              ' 一个恋人的拥抱，',
              callname,
              ' 还是恋恋不舍地离开了。',
            ],
          ],
        );
      }
      if (love >= 90) {
        talk_arr.push(
          [
            [
              '……啾～这是特制的告别哦！所以 ',
              call_me,
              '，下次再见时要变得更好一点哦？',
            ],
            [
              '用樱唇轻触了恋人的脸颊，小',
              urara.get_uma_sex_title(),
              '一边害羞地抖着耳朵，一边小声地鼓励着恋人。',
            ],
          ],
          [
            [
              call_me,
              '，晚上去做大人的活动也要注意安全哦！不会去的？是真的也没关系啦……',
            ],
            [
              '在分开之前的闲聊中，',
              callname,
              ' 怀疑但又表示包容的眼神刺得 ',
              me.get_colored_name(),
              ' 有点不自在。',
            ],
          ],
        );
      }
      if (love === 100) {
        talk_arr.push(
          [
            [
              '要分开了吗？不过现在松手的话，',
              call_me,
              ' 说不定会去找别人亲热吧？开玩笑的！',
            ],
            [
              me.get_colored_name(),
              ' 在 ',
              callname,
              ' 的目送中离开了，而担当从身后投来的视线盯得 ',
              me.get_colored_name(),
              ' 有些心里发毛……',
            ],
          ],
          [
            [
              '啾～咕滋～哈啊……嘿嘿～喜欢吗？今天就到这里吧，下次方便的话，',
              self_call,
              ' 会和 ',
              call_me,
              ' 说的！',
            ],
            [
              '在分开前的爱人身上用力烙下自己的印记，小',
              urara.get_uma_sex_title(),
              '用清澈的声音诉说着浑浊的欲望。',
            ],
          ],
        );
      }
      const temp = get_random_entry(talk_arr);
      urara.say(temp[0]);
      era.print(temp[1]);
    }
  } else if (awake === 1) {
    const talk_arr = [];
    if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P') ||
      era.get('base:52:性欲') >= lust_border.absent_mind
    ) {
      talk_arr.push(
        [
          '呜……嗯……',
          [
            '就算在 ',
            me.get_colored_name(),
            ' 送',
            urara.sex,
            '回去的路上，睡梦中的 ',
            callname,
            ' 也一直不安分的呻吟着。',
          ],
        ],
        [
          '……',
          [
            '小小的身体燥热的缩在 ',
            me.get_colored_name(),
            ' 的怀里，即使在回去的路上，',
            callname,
            ' 依然沉浸在粉色的梦中。',
          ],
        ],
      );
    } else {
      talk_arr.push(
        [
          '呼诶……',
          [
            '随着呼吸声逐渐平稳，',
            callname,
            ' 靠在 ',
            me.get_colored_name(),
            ' 身边安睡着。',
          ],
        ],
        [
          '……',
          [
            '或许是因为太累了，在 ',
            me.get_colored_name(),
            ' 怀中的 ',
            callname,
            ' 安静的睡着了。',
          ],
        ],
        [
          '诶嘿嘿……',
          [
            '回去的路上一直说着梦话，在 ',
            me.get_colored_name(),
            ' 背上的 ',
            callname,
            ' 究竟梦到了什么呢？',
          ],
        ],
      );
    }
    const temp = get_random_entry(talk_arr);
    urara.say(temp[0]);
    era.print(temp[1]);
  } else {
    const talk_arr = [
      [
        [
          '在看到 ',
          me.get_colored_name(),
          ' 已经睡着后，',
          callname,
          ' 似乎用了某些办法悄悄地把 ',
          me.get_colored_name(),
          ' 搬回了住处。',
        ],
      ],
      [
        [
          '醒来的时候 ',
          me.get_colored_name(),
          ' 发现自己已经回到了住处，而耳边似乎还有着 ',
          callname,
          ' 的道别声。',
        ],
      ],
      [
        '睁开眼睛，是熟悉的天花板，果然回到了卧室。',
        `虽然确实给担当添麻烦了，但小小的${urara.sex}到底是怎么独自把别人送回来的呢……`,
      ],
    ];
    if (love >= 50) {
      talk_arr.push([
        [
          '在将 ',
          me.get_colored_name(),
          ' 送回住处后，',
          callname,
          ' 似乎还贴心的帮 ',
          me.get_colored_name(),
          ' 收拾了一下房间。',
        ],
        [
          '只是不知道为什么，',
          me.get_colored_name(),
          ' 总觉得洗衣篮中的衣服好像被人翻过……',
        ],
      ]);
    }
    if (love >= 75) {
      talk_arr.push([
        [
          '在朦胧之际，一枚恋恋不舍的吻落在了 ',
          me.get_colored_name(),
          ' 的侧脸上。',
        ],
        ['在醒来时 ', callname, ' 已不在身边，但脸上亲吻的触感依旧十分清晰。'],
      ]);
    }
    if (love === 100) {
      talk_arr.push([
        [
          '再次睁开眼睛时，',
          me.get_colored_name(),
          ' 发现自己已经回到了住处。',
        ],
        [
          '身边还残留着 ',
          callname,
          ' 的温度，似乎在这里',
          urara.sex,
          '也陪了 ',
          me.get_colored_name(),
          ' 好一会儿。',
        ],
      ]);
    }
    get_random_entry(talk_arr).forEach((e) => era.print(e));
  }
};
