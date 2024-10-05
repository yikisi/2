/**
 * @file 爱丽数码 - 日常
 *
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(HookArg,*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = () => {
  if (!sys_check_awake(19)) {
    throw new Error();
  }
  const callname = sys_get_callname(19, 0),
    digital = get_chara_talk(19);
  const buffer = [
    ['对！无论发生什么也要全力去推哦！', callname, '！'],
    '呜呼呼，太尊了，要受不了了……',
    '草地！泥地！都是我的赛场！',
  ];
  if (era.get('relation:19:0') > 375) {
    buffer.push([
      callname,
      '！能和你一起推',
      digital.get_uma_sex_title(),
      '酱真的是太好了！',
    ]);
  }
  switch (era.get('mark:19:欢愉')) {
    case 1:
      buffer.push(
        '啊哈哈哈……诶？问我的腿为什么发抖吗？没事没事！数码碳我正常得很呐！',
      );
      break;
    case 2:
    case 3:
      buffer.push([
        '咕嘿嘿嘿，还在问为什么，',
        callname,
        ' 你应该最清楚吧……滋溜……',
      ]);
  }
  switch (era.get('mark:19:同心')) {
    case 1:
      buffer.push([
        '一心同体……',
        sys_get_colored_callname(19, 13),
        ' 所描述的美好未来，我感觉我逐渐懂了……',
      ]);
      break;
    case 2:
    case 3:
      buffer.push('目白城，去吗？会去的吧！');
  }
  switch (era.get('mark:19:苦痛')) {
    case 1:
      buffer.push(['诶，额，是 ', callname, ' 啊……今天有什么事情吗。']);
      break;
    case 2:
    case 3:
      buffer.push('呜呜呜……噫！不不不，没事没事！');
  }
  switch (era.get('mark:19:羞耻')) {
    case 1:
      buffer.push('那个啊，就算是数码我，这样也是会有点羞耻的哦。');
      break;
    case 2:
    case 3:
      buffer.push('噫呀，总感觉这样也太糟糕了吧？！');
  }
  switch (era.get('mark:19:反抗')) {
    case 1:
      buffer.push(['嗯？', callname, ' 啊，诶，是要干什么吗？']);
      break;
    case 2:
    case 3:
      buffer.push([
        '呃，',
        callname,
        ' 你，怎么最近有点，不太像同志的模样了？',
      ]);
  }
  switch (era.get('mark:19:淫纹')) {
    case 1:
      buffer.push(
        '看到熟悉又微妙的东西出现在自己身上……可以当素材使用了……是吧？',
      );
      break;
    case 2:
    case 3:
      buffer.push('该说是很酷炫吗……居然还真的会进化的吗？！');
  }
  digital.say(get_random_entry(buffer));
};

handlers[event_hooks.good_morning] = () => {
  const digital = get_chara_talk(19),
    talk_arr = [
      `嗨！${
        digital.name
      } 登场！为了去寻找宇宙最尊的${digital.get_uma_sex_title()}之力！`,
      `呜呼呼，${sys_get_callname(19, 0)}！今天也去积攒推活之力吧！`,
    ];
  digital.say(get_random_entry(talk_arr));
};

handlers[event_hooks.talk] = async () => {
  if (!sys_check_awake(19)) {
    throw new Error();
  }
  const digital = get_chara_talk(19);
  let talk_arr;
  if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
    talk_arr = [
      `哈……燃尽了，没力气……推了……`,
      `这种状态，无法对得起推的${digital.get_uma_sex_title()}酱的啊`,
    ];
  } else {
    switch (era.get('cflag:19:干劲')) {
      case -2:
        talk_arr = [
          '呜哦哦，萌力不足，我必须立刻补充能量……',
          `这个状态绝对不能被推们看到……`,
        ];
        break;
      case -1:
        talk_arr = [
          '啊……总感觉使不上劲啊，是萌力不够了吗',
          `诶呀，刚才在想${digital.get_uma_sex_title()}的事情……`,
        ];
        break;
      case 0:
        talk_arr = [
          `嘶……呼……再多一些，萌萌之力！`,
          `还差一些，感觉还不够，我还得吸取更多的${digital.get_uma_sex_title()}萌萌之力！`,
        ];
        break;
      case 1:
        talk_arr = [
          `感觉状况正好！一起去汲取${digital.get_uma_sex_title()}萌萌之力积德吧！`,
          `爱，正是对${digital.get_uma_sex_title()}酱的爱才让我有如此力量啊！`,
        ];
        break;
      case 2:
        talk_arr = [
          `哇啊啊啊！这边也是，那边都是${digital.get_uma_sex_title()}酱！感觉我现在什么都做得到！`,
          `哈呀！萌力已经突破天际了！`,
        ];
        break;
    }
  }
  await digital.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_gift] = async () => {
  const digital = get_chara_talk(19);
  if (Math.random() < 0.5) {
    await digital.say_and_wait([
      '能选出这样的礼物，真不愧是 ',
      sys_get_callname(19, 0),
      '！',
    ]);
  } else {
    await digital.say_and_wait([
      '哇，是 ',
      get_random_entry([
        '堕伯老师的签名本',
        '卡莲酱写真集',
        '飞鹰子握手券',
        '麻酱玩偶',
        '目白家同款茶杯',
        '速子茶座印象马克杯',
        digital.get_uma_sex_title() + '跑鞋模型',
        digital.get_uma_sex_title() + '限定联动周边',
        digital.get_uma_sex_title() + '用耳套丝袜的签名本',
      ]),
      '！我会好好汲取其中的',
      digital.get_uma_sex_title(),
      '萌萌之力的！',
    ]);
  }
};

handlers[event_hooks.office_cook] = async () => {
  const digital = get_chara_talk(19);
  switch (get_random_value(0, 2)) {
    case 0:
      await digital.say_and_wait(
        `要怀着对担当${digital.get_uma_sex_title()}的爱来制作吗……真想不到训练员居然也有这样的信条啊，我也要学习！`,
      );
      break;
    case 1:
      await digital.say_and_wait(
        `因为平时总是和爸妈出去野炊嘛，别看我这样，我料理还是有点上手的噢`,
      );
      break;
    case 2:
      await digital.say_and_wait(
        `${digital.get_uma_sex_title()}酱们青涩的感情，因不敢直接表达，所以融汇在便当里送出去吗！这太尊了啊！`,
      );
  }
};

handlers[event_hooks.office_study] = async () => {
  const digital = get_chara_talk(19);
  const buffer = [
    `诶？你问我为什么对${digital.get_uma_sex_title()}酱相关的知识这么熟悉？作为粉丝，这不是当然的吗！`,
    `事实上，为了进入特雷森学园，我当时在很多方面都很努力，所以……的确在学习上没什么大问题，有点自吹自擂了。`,
    `我在想，有些${digital.get_uma_sex_title()}酱不是因为学习不好被拉去补课吗？到底要怎么才能帮到${
      digital.sex
    }们啊……`,
  ];
  await digital.say_and_wait(get_random_entry(buffer));
};

handlers[event_hooks.office_rest] = async () => {
  const digital = get_chara_talk(19);
  switch (get_random_value(0, 1 + (era.get('relation:19:0') > 375))) {
    case 0:
      await digital.say_and_wait(
        `呼……听着可爱${digital.get_uma_sex_title()}酱的治愈系ASMR，感觉全身都要融化掉了……`,
      );
      break;
    case 1:
      await digital.say_and_wait(
        `像这样，跟着你漫无目的聊起${digital.get_uma_sex_title()}，真不错呢。`,
      );
      break;
    case 2:
      await digital.say_and_wait(
        `想要膝枕？不不不，我这贫瘠的双腿垫起来怎么也会觉得不舒……还是有点害羞……`,
      );
  }
};

handlers[event_hooks.office_game] = async () => {
  const digital = get_chara_talk(19);
  if (Math.random() < 0.5) {
    await digital.say_and_wait(
      `要不要来玩一下这个《赛${digital.get_uma_sex_title()}全明星大乱斗》呀，人物我就选随机，毕竟我可是DD啊！`,
    );
  } else {
    await digital.say_and_wait(
      `诶嘿！${sys_get_callname(19, 0)}，再怎么说，我对这款游戏还是有点自信的。`,
    );
  }
};

handlers[event_hooks.school_atrium] = async (hook) => {
  const digital = get_chara_talk(19);
  const ret = await select_action_in_atrium();
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 2)) {
      case 0:
        await digital.say_and_wait(
          `一直都被${digital.get_uma_sex_title()}倾述着比赛的冷酷，训练的艰苦，感情的纠纷的你！为什么我会对一个树洞产生嫉妒的心理！`,
        );
        break;
      case 1:
        await digital.say_and_wait(
          `唔，你说，为什么战场上会有胜者也有败者呢……${digital.get_uma_sex_title()}酱们，如果全都是胜者，就好了……`,
        );
        break;
      case 2:
        await digital.say_and_wait(
          `我的觉悟还不够啊，不仅是作为对手的，还是作为${digital.get_uma_sex_title()}的觉悟……`,
        );
    }
  } else {
    switch (get_random_value(0, 2)) {
      case 0:
        await digital.say_and_wait(
          `……怎么好像有很多${digital.get_uma_sex_title()}酱看着我们，好想找个地方躲起来……`,
        );
        break;
      case 1:
        await digital.say_and_wait(
          `这个大蝴蝶结吗，总感觉是小时候就一直戴到现在呢……诶？你说很容易引人注目吗？咿呀，的确是个问题。`,
        );
        break;
      case 2:
        await digital.say_and_wait(
          `${sys_get_callname(19, 0)} 啊，你会不会感觉我太麻烦了呢……一直跟着我折腾来折腾去应援活动……诶？没有吗？`,
        );
    }
  }
};

handlers[event_hooks.school_rooftop] = async () => {
  const digital = get_chara_talk(19);
  switch (get_random_value(0, 2)) {
    case 0:
      await digital.say_and_wait(
        `诶？${sys_get_callname(19, 0)} 居然是个隐形的强者吗？这外貌的还原度，连我都要不禁感叹！`,
      );
      break;
    case 1:
      await digital.say_and_wait(
        `唔，可爱的${digital.get_uma_sex_title()}酱，我怎么忍心下口……`,
      );
      break;
    case 2:
      await digital.say_and_wait(
        `瞧吧！${sys_get_callname(19, 0)}，这设计可是我的心血之作！要不要申请个专利呢，唔嘿！`,
      );
  }
};

handlers[
  event_hooks.out_river
] = require('#/event/daily/daily-events-19/out-river');

handlers[event_hooks.out_shopping] = async (hook) => {
  const digital = get_chara_talk(19);
  const temp = await select_action_in_shopping_street();
  hook.arg = temp <= 1;
  switch (temp) {
    case 0:
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait([
            '呜哦哦哦，居然出了 ',
            sys_get_colored_callname(19, 46),
            ' 的新歌！幸好带了手套！',
          ]);
          break;
        case 1:
          await digital.say_and_wait(
            `抓到了抓到了！就是那个决胜服限定款玩偶！`,
          );
          break;
        case 2:
          await digital.say_and_wait(
            `凑够点数兑换奖品啦！可以换那个限定款手办耶！`,
          );
      }
      break;
    case 1:
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait([
            '抽到了胡萝卜！带回去给 ',
            sys_get_colored_callname(19, 32),
            ' 吧，希望 ',
            digital.sex,
            ' 能正常一下自己的饮食啊，这样会整坏身体的！不行不行！',
          ]);
          break;
        case 1:
          await digital.say_and_wait(`库库库，呼呼呼，抽到了，就是那个！`);
          break;
        case 2:
          await digital.say_and_wait(`纸巾啊……果然单抽还是不太可能出货吗。`);
      }
      break;
    case 2:
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait(`今天的胜利女神，仅亲吻我一个人……`);
          break;
        case 1:
          await digital.say_and_wait(
            `胜者舞台不仅是作为胜利${digital.get_uma_sex_title()}酱的奖励，也是给我们这些粉丝的奖赏啊！`,
          );
          break;
        case 2:
          await digital.say_and_wait([
            '嗯嗨诶嗨！噢——嗨——！',
            sys_get_callname(19, 0),
            '！你应援棒挥慢了！',
          ]);
          break;
      }
      break;
    case 3:
      switch (get_random_value(0, 1)) {
        case 0:
          await digital.say_and_wait(
            `太尊了！导演是懂的！把${digital.get_uma_sex_title()}酱的尊点都展现得淋漓尽致！`,
          );
          break;
        case 1:
          await digital.say_and_wait(
            `呜哦哦哦哦，太感动了，这种不甘，这种拼搏，就像在现实中的${digital.get_uma_sex_title()}酱一样啊！`,
          );
      }
  }
};

handlers[event_hooks.out_church] = async () => {
  const digital = get_chara_talk(19),
    me = get_chara_talk(0);
  await print_event_name('积德积德……是集福吗？', digital);
  await era.printAndWait([
    '在神社前拍手两次后，',
    me.get_colored_name(),
    ' 和 ',
    digital.get_colored_name(),
    ' 都合手祈祷',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 自然是祈求了担当',
    digital.get_uma_sex_title(),
    '的健康，但 ',
    digital.get_colored_name(),
    ' 会祈求什么呢？',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 喵了一眼 ',
    digital.get_colored_name(),
    '，发现',
    digital.sex,
    '还没张开眼，小手搓搓，马耳直立，口中念念有词，这是一般人会有的虔诚吗？',
  ]);
  await era.printAndWait(['不久后', digital.sex, '转过身来，正经地说道：']);
  await digital.say_and_wait([
    '为了让神明保佑所有的',
    digital.get_uma_sex_title(),
    '，我理应尽我最大的虔诚去祈祷',
  ]);
  await digital.say_and_wait(
    '虽然这是虚实的事物，但是这能让我再次理性地看待自我，顺便可以积点德啦！',
  );
  await era.printAndWait([
    me.get_colored_name(),
    ' 在意外之余也觉得',
    digital.sex,
    '说得很有道理，因此 ',
    me.get_colored_name(),
    ' 也抛弃杂念，想要再次祈祷一次。',
  ]);
  if (Math.random() < 0.5) {
    await era.printAndWait([
      '慢慢的，',
      me.get_colored_name(),
      ' 感到思维中有三股清泉流过，',
      me.get_colored_name(),
      ' 惊讶地睁开了眼睛，发现是清风吹过了树叶，吹过了神庙，并让 ',
      me.get_colored_name(),
      ' 的心平静了下来。',
    ]);
    await digital.say_and_wait([
      '因为是 ',
      sys_get_colored_callname(19, 98),
      ' 推荐的特别灵验的神社，所以刚刚一直都不太敢说话呢～',
    ]);
    await era.printAndWait('这是真实存在的吗？');
    await era.printAndWait([
      me.get_colored_name(),
      ' 发现旁边的 ',
      digital.get_colored_name(),
      ' 也同时沉浸在此境中。',
    ]);
    await digital.say_and_wait('这是三女神的恩惠啊！');
    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 很想吐槽，为什么在神庙里祈福，赐福的是三女神，不过既然真的有至少心理上的效果，也就算了。',
    ]);
  } else {
    await era.printAndWait([
      '将精神聚集在双目之间，想着该如何诚心地祈祷，但事实上这种方法本身就有问题，看起来 ',
      me.get_colored_name(),
      ' 现在还并不擅长祛除杂念。',
    ]);
    await digital.say_and_wait(
      '没关系，我可是练了不短时间才能达到这种效果，同志你还要多加练习啊！',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 不由得好奇这技能的实际用处，难道是比赛的时候可以很方便地凝聚注意力吗？',
    ]);
    await era.printAndWait([
      '不过 ',
      me.get_colored_name(),
      ' 也同时意识到有时的确需要练一下静心，看起来只能下次再尝试了。',
    ]);
  }
};

handlers[event_hooks.out_station] = async (hook) => {
  const digital = get_chara_talk(19);
  const relation = era.get(`relation:19:0`);
  hook.arg = await select_action_in_station(19);
  switch (hook.arg) {
    case 0:
      if (Math.random() < 0.5) {
        await digital.say_and_wait(
          `喜欢胡萝卜这种${digital.get_uma_sex_title()}酱普遍喜爱的食物，是因为我喜欢${digital.get_uma_sex_title()}酱，还是因为我是${digital.get_uma_sex_title()}呢……`,
        );
      } else {
        await digital.say_and_wait(
          `芭菲♪芭菲♪蜜瓜芭菲♪蜂蜜♪蜂蜜♪特浓蜂蜜♪还有草莓大福♪模仿推们感觉可以带来好运！`,
        );
      }
      break;
    case 1:
      switch (get_random_value(0, 1 + (relation > 375))) {
        case 0:
          await digital.say_and_wait(
            `啊哈哈哈，${sys_get_callname(19, 0)}，一到一起逛，我反而不会选哪比较好了……`,
          );
          break;
        case 1:
          await digital.say_and_wait(
            `诶？我选择地点吗？总感觉我总会选到那种${digital.get_uma_sex_title()}相关的地方……`,
          );
          break;
        case 2:
          await digital.say_and_wait(
            `${sys_get_callname(19, 0)}！再去那边圣地巡礼一下吧！`,
          );
      }
      break;
    case 2:
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait(
            `唔奴奴！这个茶座同款咖啡杯，那个目白红茶杯，这要我怎么选择？！当然是全都要啦！`,
          );
          break;
        case 1:
          await digital.say_and_wait([
            get_chara_talk(33).get_colored_name(),
            ' 代言的烘干机？这个……还是有点……不行，得买的啊！',
          ]);
          break;
        case 2:
          await digital.say_and_wait(
            `诶？你说为什么周边要买三份？当然是一份自用一份收藏一份传教啦！`,
          );
      }
  }
};

module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error();
    }
    return !!(await handlers[stage_id.hook](stage_id, extra_flag));
  },
};
