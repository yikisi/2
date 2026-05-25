/**
 * @file 爱丽数码 - 日常
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        '嗨！',
        digital.name,
        ' 登场！为了去寻找宇宙最尊的',
        digital.uma_sex_title,
        '之力！',
      ]);
    } else {
      digital.say(['呜呼呼，', callname, '！今天也去积攒推活之力吧！']);
    }
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   * @param {PrintedSpan} call_13 爱丽数码对目白麦昆的称呼
   */
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () => digital.say(['对！无论发生什么也要全力去推哦！', callname, '！']),
      () => digital.say('呜呼呼，太尊了，要受不了了……'),
      () => digital.say('草地！泥地！都是我的赛场！'),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          '！能和你一起推',
          digital.uma_sex_title,
          '酱真的是太好了！',
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '啊哈哈哈……诶？问我的腿为什么发抖吗？没事没事！数码碳我正常得很呐！',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            '咕嘿嘿嘿，还在问为什么，',
            callname,
            ' 你应该最清楚吧……滋溜……',
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            '一心同体……',
            call_13,
            ' 所描述的美好未来，我感觉我逐渐懂了……',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('目白城，去吗？会去的吧！'));
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say(['诶，额，是 ', callname, ' 啊……今天有什么事情吗。']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('呜呜呜……噫！不不不，没事没事！'));
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say('那个啊，就算是数码我，这样也是会有点羞耻的哦。'),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('噫呀，总感觉这样也太糟糕了吧？！'));
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say(['嗯？', callname, ' 啊，诶，是要干什么吗？']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            '呃，',
            callname,
            ' 你，怎么最近有点，不太像同志的模样了？',
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '看到熟悉又微妙的东西出现在自己身上……可以当素材使用了……是吧？',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('该说是很酷炫吗……居然还真的会进化的吗？！'),
        );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `诶？你问我为什么对${digital.uma_sex_title}酱相关的知识这么熟悉？作为粉丝，这不是当然的吗！`,
        ),
      () =>
        digital.say_and_wait(
          '事实上，为了进入特雷森学园，我当时在很多方面都很努力，所以……的确在学习上没什么大问题，有点自吹自擂了。',
        ),
      () =>
        digital.say_and_wait(
          `我在想，有些${digital.uma_sex_title}酱不是因为学习不好被拉去补课吗？到底要怎么才能帮到${
            digital.couple_title
          }啊……`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(`哈……燃尽了，没力气……推了……`);
      } else {
        await digital.say_and_wait(
          `这种状态，无法对得起推的${digital.uma_sex_title}酱的啊`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait('呜哦哦，萌力不足，我必须立刻补充能量……'),
            () => digital.say_and_wait(`这个状态绝对不能被推们看到……`),
          );
          break;
        case -1:
          buffer.push(
            () => digital.say_and_wait('啊……总感觉使不上劲啊，是萌力不够了吗'),
            () =>
              digital.say_and_wait(
                `诶呀，刚才在想${digital.uma_sex_title}的事情……`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => digital.say_and_wait(`嘶……呼……再多一些，萌萌之力！`),
            () =>
              digital.say_and_wait(
                `还差一些，感觉还不够，我还得吸取更多的${digital.uma_sex_title}萌萌之力！`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `感觉状况正好！一起去汲取${digital.uma_sex_title}萌萌之力积德吧！`,
              ),
            () =>
              digital.say_and_wait(
                `爱，正是对${digital.uma_sex_title}酱的爱才让我有如此力量啊！`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `哇啊啊啊！这边也是，那边都是${digital.uma_sex_title}酱！感觉我现在什么都做得到！`,
              ),
            () => digital.say_and_wait(`哈呀！萌力已经突破天际了！`),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        '能选出这样的礼物，真不愧是 ',
        callname,
        '！',
      ]);
    } else {
      const items = [
        '堕伯老师的签名本',
        '卡莲酱写真集',
        '飞鹰子握手券',
        '麻酱玩偶',
        '目白家同款茶杯',
        '速子茶座印象马克杯',
        digital.uma_sex_title + '跑鞋模型',
        digital.uma_sex_title + '限定联动周边',
        digital.uma_sex_title + '用耳套丝袜的签名本',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        '哇，是 ',
        gift,
        '！我会好好汲取其中的',
        digital.uma_sex_title,
        '萌萌之力的！',
      ]);
    }
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `要怀着对担当${digital.uma_sex_title}的爱来制作吗……真想不到训练员居然也有这样的信条啊，我也要学习！`,
        ),
      () =>
        digital.say_and_wait(
          `因为平时总是和爸妈出去野炊嘛，别看我这样，我料理还是有点上手的噢`,
        ),
      () =>
        digital.say_and_wait(
          `${digital.uma_sex_title}酱们青涩的感情，因不敢直接表达，所以融汇在便当里送出去吗！这太尊了啊！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `呼……听着可爱${digital.uma_sex_title}酱的治愈系ASMR，感觉全身都要融化掉了……`,
        ),
      () =>
        digital.say_and_wait(
          `像这样，跟着你漫无目的聊起${digital.uma_sex_title}，真不错呢。`,
        ),
    ];
    if (era.get(`relation:${this.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `想要膝枕？不不不，我这贫瘠的双腿垫起来怎么也会觉得不舒……还是有点害羞……`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `要不要来玩一下这个《赛${digital.uma_sex_title}全明星大乱斗》呀，人物我就选随机，毕竟我可是DD啊！`,
      );
    } else {
      await digital.say_and_wait([
        '诶嘿！',
        callname,
        '，再怎么说，我对这款游戏还是有点自信的。',
      ]);
    }
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `一直都被${digital.uma_sex_title}倾述着比赛的冷酷，训练的艰苦，感情的纠纷的你！为什么我会对一个树洞产生嫉妒的心理！`,
        ),
      () =>
        digital.say_and_wait(
          `唔，你说，为什么赛场上会有胜者也有败者呢……${digital.uma_sex_title}酱们，如果全都是胜者，就好了……`,
        ),
      () =>
        digital.say_and_wait(
          `我的觉悟还不够啊，不仅是作为对手的，还是作为${digital.uma_sex_title}的觉悟……`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `……怎么好像有很多${digital.uma_sex_title}酱看着我们，好想找个地方躲起来……`,
        ),
      () =>
        digital.say_and_wait(
          `这个大蝴蝶结吗，总感觉是小时候就一直戴到现在呢……诶？你说很容易引人注目吗？咿呀，的确是个问题。`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          ' 啊，你会不会感觉我太麻烦了呢……一直跟着我折腾来折腾去应援活动……诶？没有吗？',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '诶？',
          callname,
          ' 居然是个隐形的强者吗？这外貌的还原度，连我都要不禁感叹！',
        ]),
      () =>
        digital.say_and_wait(
          `唔，可爱的${digital.uma_sex_title}酱，我怎么忍心下口……`,
        ),
      () =>
        digital.say_and_wait([
          '瞧吧！',
          callname,
          '，这设计可是我的心血之作！要不要申请个专利呢，唔嘿！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   * @param {PrintedSpan} call_20 爱丽数码对青云天空的称呼
   */
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '呜哇，是……是 ',
          call_20,
          '，我是不是不过去那边比较好……',
        ]),
      () =>
        digital.say_and_wait([
          '哦哦哦，钓上来了，钓上了，要是野炊的话就可以烤着来吃了呢，',
          callname,
          '！',
        ]),
      () =>
        digital.say_and_wait(
          `别介意！胜负乃兵家常事，大侠请重新来过吧……空军也像抽卡不出的概率一样啦！`,
        ),
    ];
    await get_random_entry(buffer);
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   * @param {PrintedSpan} call_8 爱丽数码对伏特加的称呼
   * @param {PrintedSpan} call_9 爱丽数码对大和赤骥的称呼
   * @param {PrintedSpan} call_46 爱丽数码对醒目飞鹰的称呼
   * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
   */
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          '，是 ',
          call_46,
          ' 啊！我务必要过去那边！',
        ]),
      () =>
        digital.say_and_wait([
          '发现了 ',
          call_9,
          ' 和 ',
          call_8,
          '！',
          digital.couple_title,
          '在那边是在干什么～呢！',
        ]),
      () =>
        digital.say_and_wait([
          '哇！',
          call_58,
          ' 摔倒了，要去拉一下……站起来了！呜哦，真是勤勉……',
        ]),
      async () => {
        await era.printAndWait([
          '在河边散步对于 ',
          digital.get_colored_name(),
          ' 来说是一种朝圣行为，',
        ]);
        await era.printAndWait(
          `因为各个角落，都能发现赛${digital.uma_sex_title}，`,
        );
        await era.printAndWait(
          `正在练习歌唱的小${digital.uma_sex_title}偶像，正在适应泥地的小努力家。`,
        );
        await era.printAndWait(
          `比较幸运的是这次${digital.sex}并没有尊得失魂。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} call_46 爱丽数码对醒目飞鹰的称呼
   */
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '呜哦哦哦，居然出了 ',
          call_46,
          ' 的新歌！幸好带了手套！',
        ]),
      () => digital.say_and_wait(`抓到了抓到了！就是那个决胜服限定款玩偶！`),
      () =>
        digital.say_and_wait(`凑够点数兑换奖品啦！可以换那个限定款手办耶！`),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} call_32 爱丽数码对爱丽速子的称呼
   */
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '抽到了胡萝卜！带回去给 ',
          call_32,
          ' 吧，希望',
          digital.sex,
          '能正常一下自己的饮食啊，这样会整坏身体的！不行不行！',
        ]),
      () => digital.say_and_wait(`库库库，呼呼呼，抽到了，就是那个！`),
      () => digital.say_and_wait(`纸巾啊……果然单抽还是不太可能出货吗。`),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async o_s_ktv(digital, callname) {
    const buffer = [
      () => digital.say_and_wait(`今天的胜利女神，仅亲吻我一个人……`),
      () =>
        digital.say_and_wait(
          `胜者舞台不仅是作为胜利${digital.uma_sex_title}酱的奖励，也是给我们这些粉丝的奖赏啊！`,
        ),
      () =>
        digital.say_and_wait([
          '嗯嗨诶嗨！噢——嗨——！',
          callname,
          '！你应援棒挥慢了！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `太尊了！导演是懂的！把${digital.uma_sex_title}酱的尊点都展现得淋漓尽致！`,
        ),
      () =>
        digital.say_and_wait(
          `呜哦哦哦哦，太感动了，这种不甘，这种拼搏，就像在现实中的${digital.uma_sex_title}酱一样啊！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  o_c_pray: (() => {
    const title = '积德积德……是集福吗？';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_98 爱丽数码对小林历奇的称呼
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        '在神社前拍手两次后，',
        you.get_colored_name(),
        ' 和 ',
        digital.get_colored_name(),
        ' 都合手祈祷',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 自然是祈求了担当',
        digital.uma_sex_title,
        '的健康，但 ',
        digital.get_colored_name(),
        ' 会祈求什么呢？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 喵了一眼 ',
        digital.get_colored_name(),
        '，发现',
        digital.sex,
        '还没张开眼，小手搓搓，马耳直立，口中念念有词，这是一般人会有的虔诚吗？',
      ]);
      await era.printAndWait(['不久后', digital.sex, '转过身来，正经地说道：']);
      await digital.say_and_wait([
        '为了让神明保佑所有的',
        digital.uma_sex_title,
        '，我理应尽我最大的虔诚去祈祷',
      ]);
      await digital.say_and_wait(
        '虽然这是虚实的事物，但是这能让我再次理性地看待自我，顺便可以积点德啦！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 在意外之余也觉得',
        digital.sex,
        '说得很有道理，因此 ',
        you.get_colored_name(),
        ' 也抛弃杂念，想要再次祈祷一次。',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '慢慢的，',
          you.get_colored_name(),
          ' 感到思维中有三股清泉流过，',
          you.get_colored_name(),
          ' 惊讶地睁开了眼睛，发现是清风吹过了树叶，吹过了神庙，并让 ',
          you.get_colored_name(),
          ' 的心平静了下来。',
        ]);
        await digital.say_and_wait([
          '因为是 ',
          call_98,
          ' 推荐的特别灵验的神社，所以刚刚一直都不太敢说话呢～',
        ]);
        await era.printAndWait('这是真实存在的吗？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 发现旁边的 ',
          digital.get_colored_name(),
          ' 也同时沉浸在此境中。',
        ]);
        await digital.say_and_wait('这是三女神的恩惠啊！');
        await era.printAndWait([
          '虽然 ',
          you.get_colored_name(),
          ' 很想吐槽，为什么在神庙里祈福，赐福的是三女神，不过既然真的有至少心理上的效果，也就算了。',
        ]);
      } else {
        await era.printAndWait([
          '将精神聚集在双目之间，想着该如何诚心地祈祷，但事实上这种方法本身就有问题，看起来 ',
          you.get_colored_name(),
          ' 现在还并不擅长祛除杂念。',
        ]);
        await digital.say_and_wait(
          '没关系，我可是练了不短时间才能达到这种效果，同志你还要多加练习啊！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' 不由得好奇这技能的实际用处，难道是比赛的时候可以很方便地凝聚注意力吗？',
        ]);
        await era.printAndWait([
          '不过 ',
          you.get_colored_name(),
          ' 也同时意识到有时的确需要练一下静心，看起来只能下次再尝试了。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} digital 爱丽数码 */
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `喜欢胡萝卜这种${digital.uma_sex_title}酱普遍喜爱的食物，是因为我喜欢${digital.uma_sex_title}酱，还是因为我是${digital.uma_sex_title}呢……`,
        ),
      () =>
        digital.say_and_wait(
          `芭菲♪芭菲♪蜜瓜芭菲♪蜂蜜♪蜂蜜♪特浓蜂蜜♪还有草莓大福♪模仿推们感觉可以带来好运！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '啊哈哈哈，',
          callname,
          '，一到一起逛，我反而不会选哪比较好了……',
        ]),
      () =>
        digital.say_and_wait(
          `诶？我选择地点吗？总感觉我总会选到那种${digital.uma_sex_title}相关的地方……`,
        ),
      () => digital.say_and_wait([callname, '！再去那边圣地巡礼一下吧！']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} call_25 爱丽数码对曼城茶座的称呼
   * @param {PrintedSpan} call_33 爱丽数码对爱慕织姬的称呼
   */
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '唔奴奴！这个 ',
          call_25,
          ' 同款咖啡杯，那个目白红茶杯，这要我怎么选择？！当然是全都要啦！',
        ]),
      () =>
        digital.say_and_wait([
          call_33,
          ' 代言的烘干机？这个……还是有点……不行，得买的啊！',
        ]),
      () =>
        digital.say_and_wait(
          `诶？你说为什么周边要买三份？当然是一份自用一份收藏一份传教啦！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  big_fish: (() => {
    const title = '钓上大鱼了，不过鱼看起来不太友善';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} spe 特别周
     * @param {CharaTalk} sky 青云天空
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_20 爱丽数码对青云天空的称呼
     * @param {PrintedSpan} callname_20 青云天空对玩家的称呼
     * @param {PrintedSpan} s_call_s 青云天空对特别周的称呼
     * @param {PrintedSpan} s_call_d 青云天空对爱丽数码的称呼
     */
    const f = async (
      digital,
      spe,
      sky,
      you,
      callname,
      call_20,
      callname_20,
      s_call_s,
      s_call_d,
    ) => {
      const ret = [];
      await era.printAndWait(
        `去河边钓鱼是不少${digital.uma_sex_title}在空闲时间的选择，`,
      );
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 的担当',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        ' 不太一样，相比起自己钓鱼，',
        digital.sex,
        '更喜欢看别人钓鱼，',
      ]);
      await era.printAndWait(`不……应该是更喜欢看着${digital.uma_sex_title}。`);
      await era.printAndWait(
        `所以，真让${digital.sex}坐在一个小板凳上，拿着钓竿，在河边静静等待上钩，就会比较难得了。`,
      );
      await digital.say_and_wait(
        `原来如此……原来钓鱼是这样的吗，这种本应是休闲活动，怎么会如此地耗精力……`,
      );
      await digital.say_and_wait(
        `在钓鱼时的其他${digital.uma_sex_title}到底是怎么想的呢……`,
      );
      await you.say_and_wait(
        `${digital.couple_title}更多的只是享受钓鱼这种活动吧，你看一下附近？`,
      );
      await digital.say_and_wait('诶？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 张望了一下四处，在对岸上正好也有一个',
        digital.uma_sex_title,
        '正在钓鱼。',
      ]);
      await era.printAndWait(`与其说是钓鱼，不如说是睡觉。`);
      await digital.say_and_wait(
        `的确，我能感受到，${digital.sex}目前正在处于极度的放松状态，`,
      );
      await digital.say_and_wait(
        `呜哇，在钓鱼的${digital.uma_sex_title}，躺在无限静谧中，即使是鱼上钩也不能惊动${
          digital.sex
        }分毫……`,
      );
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([
          '哦呀哦呀，没想到 ',
          callname_20,
          ' 今天有闲情跟 ',
          s_call_d,
          ' 出来钓鱼啊，哟吼吼，居然不是我一起哟……哭哭',
        ]);
        await era.printAndWait([
          '从背后传来了熟悉的声音，是 ',
          sky.get_colored_name(),
          ' 啊。',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' 拿起小手揉揉眼睛，流露出可怜的眼神。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 不得不承认 ',
          sky.get_colored_name(),
          ' 的这种演技特别厉害，如果不是 ',
          you.get_colored_name(),
          ' 早就熟悉',
          digital.sex,
          '的诡计多端，或许 ',
          you.get_colored_name(),
          ' 还真被骗了。',
        ]);
        await digital.say_and_wait('哇哇哇！我不是故意的，我这就离开！');
        await era.printAndWait([
          digital.get_colored_name(),
          ' 特别慌张，摇晃着手要站起来。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 不动声色地移到 ',
          sky.get_colored_name(),
          ' 旁边，暗中猛掐了一下 ',
          sky.get_colored_name(),
          ' 的后背，挺柔。',
        ]);
        await sky.say_and_wait('诶！我只是开个玩笑啦，开个玩笑～');
      } else {
        await sky.say_and_wait([
          '哦呀哦呀，是 ',
          s_call_d,
          ' 啊，居然不是在岸边看着其他',
          digital.uma_sex_title,
          '钓鱼吗？',
        ]);
        await sky.say_and_wait([
          '还有……',
          s_call_d,
          ' 的训练员',
          you.adult_sex_title,
          '，出名的家伙哟～',
        ]);
        await era.printAndWait([
          '从背后传来一个懒洋洋的声音，这个声音，',
          you.get_colored_name(),
          ' 有点熟悉。',
        ]);
        await digital.say_and_wait([call_20, '？！']);
        await era.printAndWait([
          '惊得把 ',
          digital.get_colored_name(),
          ' 拿在手里的鱼竿都掉了，砸出的水花都溅到了身上。',
        ]);
        await sky.say_and_wait('哦？居然把鱼竿都弄掉了，Sky我可是要生气了哦！');
        await digital.say_and_wait([
          '不不不，这是我的不好，我的不好！我不应该来到这边和',
          digital.uma_sex_title,
          '酱一起钓鱼的……',
        ]);
      }
      await sky.say_and_wait([
        '那么，',
        s_call_d,
        '，要不要来我亲手教一下你啊，诶嘿！',
      ]);
      await digital.say_and_wait('噫！');
      await era.printAndWait([
        '没几秒，',
        sky.get_colored_name(),
        ' 就迅速抓住了想要逃跑的 ',
        digital.get_colored_name(),
        '，',
        digital.get_colored_name(),
        ' 就像吃了石化术，被定住了身体。',
      ]);
      await sky.say_and_wait('咕嘿！');
      await era.printAndWait([
        '嘴角上扬一段弧度，',
        sky.get_colored_name(),
        ' 本来可以说是娇小的双手首先握住了更为小巧的 ',
        digital.get_colored_name(),
        ' 的左手。',
      ]);
      await digital.say_and_wait('啊吧啊吧……');
      await sky.say_and_wait('来吧来吧，坐到凳子上嘛～');
      await era.printAndWait([
        '一把把 ',
        digital.get_colored_name(),
        ' 拽到了凳子边，把手搭到',
        digital.sex,
        '的肩膀上……',
      ]);
      await era.printAndWait([
        '然后 ',
        digital.get_colored_name(),
        ' 就像被施展了软化术一般，像一条毛毯一般，瘫坐在了凳子上。',
      ]);
      await sky.say_and_wait('来，抓住这个鱼竿，把鱼漂移动到那边去……');
      await digital.say_and_wait('啊吧啊吧……');
      await era.printAndWait([
        '看起来，',
        digital.get_colored_name(),
        ' 的灵魂已经早就变成灰随风飘散了。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await digital.say_and_wait('……！');
      await digital.say_and_wait('呜诶……不行了，真不行了……');
      await era.printAndWait([
        '脱力躺在泥土上的 ',
        digital.get_colored_name(),
        '，看起来',
        digital.sex,
        '今天是真不行了。',
      ]);
      await sky.say_and_wait('啊哈，真是个有趣的人');
      await era.printAndWait([
        '与 ',
        digital.get_colored_name(),
        ' 正成对比，',
        sky.get_colored_name(),
        ' 则是精神焕发，这难道是什么新型吸精术吗。',
      ]);
      era.println();
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([callname_20, ' 哟！']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' 转向了 ',
          you.get_colored_name(),
          '，刚刚本是大笑着的表情立刻收敛，只是看着 ',
          you.get_colored_name(),
          '。',
        ]);
        await sky.say_and_wait([
          '感觉如何？无论是你还是',
          digital.sex,
          '，感觉都要把我抛下了呢～',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' ',
          digital.sex,
          '只是想套个话，是吗？',
        ]);
        await sky.say_and_wait([
          '哦呀哦呀，',
          callname_20,
          ' 居然还会吃醋的吗？该吃醋的是我吧？',
        ]);
        era.printButton('妥协（青云天空好感+40）', 1);
        era.printButton('该说正事了（爱丽数码好感+40）', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('好好好，既然如此，那么下次我就和你来钓鱼。');
          await era.printAndWait('姑且算先敷衍过去再说吧。');
          await sky.say_and_wait(
            '诶嘿，那再帮我更新下装备吧～训练员的工资可不少吧？',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' 把一只手摆到头顶，吐出粉嫩的舌头，让 ',
            you.get_colored_name(),
            ' 不禁想起某个表情包。',
          ]);
          await era.printAndWait(
            '伸展了一下腰骨，暗自回想了一下手机里马币的余额，更新装备应该没问题……吧？',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' 也不客气，直接拿起一张小板凳，坐在 ',
            you.get_colored_name(),
            ' 身边，靠在了 ',
            you.get_colored_name(),
            ' 肩膀上。',
          ]);
          await era.printAndWait(
            '侧眼，青色的毛丝因汗水略微浸湿，光滑的脖子上还带着些许露珠。',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' 拿起手机拨动，看着商品从 ',
            sky.get_colored_name(),
            ' 的手指处划过，瞄到里面的数字，',
            you.get_colored_name(),
            ' 突然感到大事不妙。',
          ]);
          await you.say_and_wait('别，先停下，停下，等下。');
          await sky.say_and_wait('欸？不明明是你说的吗～');
          await era.printAndWait(
            '看到价格，那些已经不止是高端产品了，差不多都是旗舰的价格了。',
          );
          await era.printAndWait(
            '虽然训练员的工资不低，但这种东西也不是随便能买的。',
          );
          await sky.say_and_wait('好了好了，既然玩笑开过了，那闲聊到此为止！');
          await era.printAndWait([
            '把手机收起来，',
            sky.get_colored_name(),
            ' 看起来要步入正题了。',
          ]);
          await sky.say_and_wait([
            '为 ',
            s_call_d,
            ' 找到奔跑的理由吧！哦哦哦！',
          ]);
          await era.printAndWait([
            '本来挺正经的，但在 ',
            sky.get_colored_name(),
            ' 口中，真的是毫无气势的大喊……',
          ]);
          await era.printAndWait([
            '瞄了眼 ',
            digital.get_colored_name(),
            '，',
            digital.sex,
            '看起来还没回过魂来。',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' 在用玩笑话传达目前 ',
            you.get_colored_name(),
            ' 迫切需要做的事情……钓竿也也许是。',
          ]);
          await era.printAndWait([
            '下次给',
            digital.sex,
            '买个礼物吧，这钓竿还是算了为好……',
          ]);
        } else {
          await you.say_and_wait('说正事吧，我了解你');
          await era.printAndWait([
            '毕竟 ',
            sky.get_colored_name(),
            ' 总是有',
            digital.sex,
            '的打算。',
          ]);
          await era.printAndWait([
            '一个转身，',
            sky.get_colored_name(),
            ' 正对夕阳，背对着你。',
          ]);
          await sky.say_and_wait(['还记得 ', s_call_s, ' 吧？']);
          await you.say_and_wait('这话说的，什么叫记不记得？');
          await era.printAndWait(
            '是那次吧？忘记自己该做什么，有什么目标，如何去做。',
          );
          await sky.say_and_wait([
            s_call_s,
            ' 找到了，属于',
            digital.sex,
            '的温暖乡。',
          ]);
          await era.printAndWait([
            '这件事还传得挺火的，是很好的教育素材，幸好的是 ',
            spe.get_colored_name(),
            ' 本人不在意。',
          ]);
          await era.printAndWait('憧憬本身，不能作为永远前行的目标。');
          await era.printAndWait([
            digital.get_colored_name(),
            ' ',
            digital.sex,
            '很快就会发现，',
            digital.sex,
            '会比其他人更强，',
            digital.sex,
            '会粉碎以前憧憬对象的梦想。',
          ]);
          await you.say_and_wait([
            '我会带',
            digital.sex,
            '找到的，独属于',
            digital.sex,
            '的万神殿。',
          ]);
          await sky.say_and_wait('果然还是我的训练员啊！');
          await you.say_and_wait('嗯。');
        }
      } else {
        await sky.say_and_wait([s_call_d, ' 的训练员——']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' 将头转向 ',
          you.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '诡计多端，这是世人……至少是',
          digital.sex,
          '的同学给予',
          digital.sex,
          '的评价。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 虽然没有过多认识 ',
          sky.get_colored_name(),
          '，但也听闻过',
          digital.sex,
          '的名气……为了比赛不择手段……吗？',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '，应该和',
          digital.sex,
          '的比赛是没有冲突的，那',
          digital.sex,
          '想在这里做什么？',
        ]);
        era.printButton('先聊一下吧（好感+40）', 1);
        era.printButton('尽量把数码早点带走（爱慕+5）', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('青云天空……我认识你。');
          await sky.say_and_wait('喵哈哈，看起来我的名气还挺大的呢～');
          await era.printAndWait([
            '把手背到脑袋后去，',
            sky.get_colored_name(),
            ' 看起来还对自身名气挺自豪的。',
          ]);
          await you.say_and_wait('坐下来聊一下吧，我想你应该对数码有想法。');
          await sky.say_and_wait(
            '诶呀诶呀，我可不是什么HOMO哟，倒不如说我是那种BG的类型啦～',
          );
          await era.printAndWait('把话题转移，一贯的计谋。');
          await you.say_and_wait('……');
          await sky.say_and_wait(
            '真想听我认真说？Sky我或许会出乎你意料的想法纯粹呢？',
          );
          await era.printAndWait([
            '看了一眼旁边的 ',
            digital.get_colored_name(),
            '，',
            digital.sex,
            '还躺在岸边呈现出幸福的尊死状态。',
          ]);
          await you.say_and_wait([
            '数码',
            digital.sex,
            '还是太过纯真，还未了解到赛场上锱铢必较的那种氛围。',
          ]);
          await sky.say_and_wait([
            '对的，就像 ',
            s_call_s,
            ' 在有一段时间一样，',
            s_call_d,
            ' ',
            digital.sex,
            '缺少上战场的理由。',
          ]);
          await era.printAndWait([
            '上战场……赛场的理由，',
            digital.get_colored_name(),
            ' 之前一直说是',
            digital.uma_sex_title,
            '，',
            digital.sex,
            '……只想近距离观察',
            digital.uma_sex_title,
            '的奔跑，至少目前为止是。',
          ]);
          await you.say_and_wait([
            digital.sex,
            '会找到的，我会和',
            digital.sex,
            '一起找到那个理由。',
          ]);
          await era.printAndWait([
            '在 ',
            you.get_colored_name(),
            ' 说出这句话之前，',
            sky.get_colored_name(),
            ' 一直用深邃的目光盯着 ',
            you.get_colored_name(),
            '，听到这句话后，',
            digital.sex,
            '笑了。',
          ]);
          await sky.say_and_wait('啊哈哈，听到了有趣的回答呢！');
          await era.printAndWait([
            '也许 ',
            you.get_colored_name(),
            ' 的回答让',
            digital.sex,
            '满意了，也许是',
            digital.sex,
            '觉得也没必要说下去了。',
          ]);
          await sky.say_and_wait('那我不打扰你们了？Sky我还得钓个鱼呢。');
          await era.printAndWait([
            '洒下太多热量的太阳已经由白转红，留下了 ',
            you.get_colored_name(),
            ' 和 ',
            digital.get_colored_name(),
            ' 在河边泥滩边。',
          ]);
          await era.printAndWait('带着数码回去吧……');
          await you.say_and_wait('怎么带呢……', true);
        } else {
          await you.say_and_wait('青云天空，虽然我还想和你再聊一下，但是……');
          await you.say_and_wait([
            '看起来数码一时半会儿还醒不来，也不早了，我得把',
            digital.sex,
            '带回去了。',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' 看着 ',
            you.get_colored_name(),
            '，然后打了个哈欠。',
          ]);
          await sky.say_and_wait('你说的也对，虽然没能钓成鱼有点可惜了。');
          await era.printAndWait([
            '向',
            digital.sex,
            '再见，但正准备背起 ',
            digital.get_colored_name(),
            ' 时候，',
            you.get_colored_name(),
            ' 感到耳边传来了气息……',
          ]);
          await sky.say_and_wait(['为', digital.sex, '找到比赛的理由吧……']);
          await era.printAndWait([
            you.get_colored_name(),
            ' 闭上眼，只能说声谢谢。',
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            ' 异常的娇小，但 ',
            you.get_colored_name(),
            ' 把',
            digital.sex,
            '背起来后才发现，',
            digital.sex,
            '的体重更显小了。',
          ]);
          await era.printAndWait([
            '柔软的身体，鼻息……原来会有吗？呼在 ',
            you.get_colored_name(),
            ' 脖子上，让 ',
            you.get_colored_name(),
            ' 有点痒痒的。',
          ]);
          await era.printAndWait([
            '回到之后 ',
            digital.get_colored_name(),
            ' 狠狠地向 ',
            you.get_colored_name(),
            ' 道歉了。',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
