const era = require('#/era-electron');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');

const chara_talk = new CharaTalk(19);

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};
let talk_arr;

handlers[event_hooks.select] = function () {
  const sex_mark = era.get('mark:19:淫纹'),
    sex_happy = era.get(`mark:19:欢愉`),
    sex_fight = era.get(`mark:19:反抗`),
    sex_shame = era.get(`mark:19:羞耻`),
    sex_suffering = era.get(`mark:19:痛苦`),
    sex_love = era.get(`mark:19:同心`),
    relation = era.get(`relation:19:0`);
  if (sex_mark >= 2) {
    chara_talk.say(`该说是很酷炫吗……居然还真的会进化的吗？！`);
  } else if (sex_mark === 1) {
    chara_talk.say(
      `看到熟悉又微妙的东西出现在自己身上……可以当素材使用了……是吧？`,
    );
  } else if (sex_fight >= 2) {
    chara_talk.say(`呃，训练员你，怎么最近有点，不太像同志的模样了？`);
  } else if (sex_fight === 1) {
    chara_talk.say(`嗯？训练员啊，诶，是要干什么吗？`);
  } else if (sex_shame >= 2) {
    chara_talk.say(`噫呀，总感觉这样也太糟糕了吧？！`);
  } else if (sex_shame === 1) {
    chara_talk.say(`那个啊，就算是数码我，这样也是会有点羞耻的哦。`);
  } else if (sex_suffering >= 2) {
    chara_talk.say(`呜呜呜……噫！不不不，没事没事！`);
  } else if (sex_suffering === 1) {
    chara_talk.say(`诶，额，是训练员啊……今天有什么事情吗。`);
  } else if (sex_love >= 2) {
    chara_talk.say(`目白城，去吗？会去的吧！`);
  } else if (sex_love === 1) {
    chara_talk.say(`一心同体……麦昆所描述的美好未来，我感觉我逐渐懂了……`);
  } else if (sex_happy >= 2) {
    chara_talk.say(`咕嘿嘿嘿，还在问为什么，训练员你应该最清楚吧……滋溜……`);
  } else if (sex_happy === 1) {
    chara_talk.say(
      `啊哈哈哈……诶？问我的腿为什么发抖吗？没事没事！数码碳我正常得很呐！`,
    );
  } else if (relation > 376 && Math.random() < 0.5) {
    chara_talk.say(
      `同志！能和你一起推${chara_talk.get_uma_sex_title()}酱真的是太好了！`,
    );
  } else {
    if (Math.random() < 0.5) {
      chara_talk.say(
        Math.random() < 0.5
          ? `草地！泥地！都是我的赛场！`
          : `呜呼呼，太尊了，要受不了了……`,
      );
    } else {
      chara_talk.say(`对！无论发生什么也要全力去推哦！训练员！`);
    }
  }
};

handlers[event_hooks.good_morning] = function () {
  if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
    talk_arr = [
      `哈……燃尽了，没力气……推了……`,
      `这种状态，无法对得起推的${chara_talk.get_uma_sex_title()}酱的啊`,
    ];
  } else {
    talk_arr = [
      `嗨！${
        chara_talk.name
      }登场！为了去寻找宇宙最尊的${chara_talk.get_uma_sex_title()}之力！`,
      `呜呼呼，训练员！今天也去积攒推活之力吧！`,
    ];
  }
  chara_talk.say(get_random_entry(talk_arr));
};

handlers[event_hooks.office_gift] = async function () {
  switch (Math.floor(Math.random() * 10)) {
    case 0:
      await chara_talk.say_and_wait(
        `哇，是堕伯老师的签名本！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `哇，是卡莲酱写真集！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 2:
      await chara_talk.say_and_wait(
        `哇，是飞鹰子握手券！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 3:
      await chara_talk.say_and_wait(
        `哇，是${chara_talk.get_uma_sex_title()}跑鞋模型！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 4:
      await chara_talk.say_and_wait(
        `哇，是${chara_talk.get_uma_sex_title()}限定联动周边！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 5:
      await chara_talk.say_and_wait(
        `哇，是${chara_talk.get_uma_sex_title()}用耳套丝袜的签名本！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 6:
      await chara_talk.say_and_wait(
        `哇，是麻酱玩偶！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 7:
      await chara_talk.say_and_wait(
        `哇，是目白家同款茶杯！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 8:
      await chara_talk.say_and_wait(
        `哇，是速子茶座印象马克杯！我会好好汲取其中的${chara_talk.get_uma_sex_title()}萌萌之力的！`,
      );
      break;
    case 9:
      await chara_talk.say_and_wait(`能选出这样的礼物，真不愧是同志！`);
      break;
  }
};

handlers[event_hooks.school_atrium] = async function (hook) {
  const ret = await select_action_in_atrium();
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 2)) {
      case 0:
        await chara_talk.say_and_wait(
          `一直都被${chara_talk.get_uma_sex_title()}倾述着比赛的冷酷，训练的艰苦，感情的纠纷的你！为什么我会对一个树洞产生嫉妒的心理！`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `唔，你说，为什么战场上会有胜者也有败者呢……${chara_talk.get_uma_sex_title()}酱们，如果全都是胜者，就好了……`,
        );
        break;
      case 2:
        await chara_talk.say_and_wait(
          `我的觉悟还不够啊，不仅是作为对手的，还是作为${chara_talk.get_uma_sex_title()}的觉悟……`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 2)) {
      case 0:
        await chara_talk.say_and_wait(
          `……怎么好像有很多${chara_talk.get_uma_sex_title()}酱看着我们，好想找个地方躲起来……`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `这个大蝴蝶结吗，总感觉是小时候就一直戴到现在呢……诶？你说很容易引人注目吗？咿呀，的确是个问题。`,
        );
        break;
      case 2:
        await chara_talk.say_and_wait(
          `训练员啊，你会不会感觉我太麻烦了呢……一直跟着我折腾来折腾去应援活动……诶？没有吗？`,
        );
        break;
    }
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      await chara_talk.say_and_wait(
        `诶？训练员居然是个隐形的强者吗？这外貌的还原度，连我都要不禁感叹！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `唔，可爱的${chara_talk.get_uma_sex_title()}酱，我怎么忍心下口……`,
      );
      break;
    case 2:
      await chara_talk.say_and_wait(
        `瞧吧！训练员，这设计可是我的心血之作！要不要申请个专利呢，唔嘿！`,
      );
      break;
  }
};

handlers[event_hooks.office_cook] = async function () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      await chara_talk.say_and_wait(
        `要怀着对担当${chara_talk.get_uma_sex_title()}的爱来制作吗……真想不到训练员居然也有这样的信条啊，我也要学习！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `因为平时总是和爸妈出去野炊嘛，别看我这样，我料理还是有点上手的噢`,
      );
      break;
    case 2:
      await chara_talk.say_and_wait(
        `${chara_talk.get_uma_sex_title()}酱们青涩的感情，因不敢直接表达，所以融汇在便当里送出去吗！这太尊了啊！`,
      );
      break;
  }
};

handlers[event_hooks.office_study] = async function () {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      await chara_talk.say_and_wait(
        `诶？你问我为什么对${chara_talk.get_uma_sex_title()}酱相关的知识这么熟悉？作为粉丝，这不是当然的吗！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `事实上，为了进入特雷森学院，我当时在很多方面都很努力，所以……的确在学习上没什么大问题，有点自吹自擂了。`,
      );
      break;
    case 2:
      await chara_talk.say_and_wait(
        `我在想，有些${chara_talk.get_uma_sex_title()}酱不是因为学习不好被拉去补课吗？到底要怎么才能帮到${
          chara_talk.sex
        }们啊……`,
      );
      break;
  }
};

handlers[event_hooks.office_rest] = async function () {
  const relation = era.get('relation:19:0');
  if (relation > 376) {
    await chara_talk.say_and_wait(
      `想要膝枕？不不不，我这贫瘠的双腿垫起来怎么也会觉得不舒……还是有点害羞……`,
    );
  } else {
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        await chara_talk.say_and_wait(
          `呼……听着可爱${chara_talk.get_uma_sex_title()}酱的治愈系asmr，感觉全身都要融化掉了……`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `像这样，跟着你漫无目的聊起${chara_talk.get_uma_sex_title()}，真不错呢。`,
        );
        break;
    }
  }
};

handlers[event_hooks.office_game] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `要不要来玩一下这个《赛${chara_talk.get_uma_sex_title()}全明星大乱斗》呀，人物我就选随机，毕竟我可是DD啊！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `诶嘿！训练员，再怎么说，我对这款游戏还是有点自信的。`,
      );
      break;
  }
};

handlers[event_hooks.out_shopping] = async function (stage_id) {
  const temp = await select_action_in_shopping_street();
  stage_id.arg = temp <= 1;
  switch (temp) {
    case 0:
      switch (get_random_value(0, 2)) {
        case 0:
          await chara_talk.say_and_wait(
            `呜哦哦哦，居然出了飞鹰子的新歌！幸好带了手套！`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `抓到了抓到了！就是那个决胜服限定款玩偶！`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(
            `凑够点数兑换奖品啦！可以换那个限定款手办耶！`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 2)) {
        case 0:
          await chara_talk.say_and_wait(
            `抽到了胡萝卜！带回去给速子吧，希望${chara_talk.sex}能正常一下自己的饮食啊，这样会整坏身体的！不行不行！`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(`库库库，呼呼呼，抽到了，就是那个！`);
          break;
        case 2:
          await chara_talk.say_and_wait(`纸巾啊……果然单抽还是不太可能出货吗。`);
          break;
      }
      break;
    case 2:
      switch (get_random_value(0, 2)) {
        case 0:
          await chara_talk.say_and_wait(`今天的胜利女神，仅亲吻我一个人……`);
          break;
        case 1:
          await chara_talk.say_and_wait(
            `胜者舞台不仅是作为胜利${chara_talk.get_uma_sex_title()}酱的奖励，也是给我们这些粉丝的奖赏啊！`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(
            `嗯嗨诶嗨！噢——嗨——！训练员！你应援棒挥慢了！`,
          );
          break;
      }
      break;
    case 3:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `太尊了！导演是懂的！把${chara_talk.get_uma_sex_title()}酱的尊点都展现得淋漓尽致！`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `呜哦哦哦哦，太感动了，这种不甘，这种拼搏，就像在现实中的${chara_talk.get_uma_sex_title()}酱一样啊！`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const relation = era.get(`relation:19:0`);
  hook.arg = await select_action_in_station(19);
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `喜欢胡萝卜这种${chara_talk.get_uma_sex_title()}酱普遍喜爱的食物，是因为我喜欢${chara_talk.get_uma_sex_title()}酱，还是因为我是${chara_talk.get_uma_sex_title()}呢……`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `芭菲♪芭菲♪蜜瓜芭菲♪蜂蜜♪蜂蜜♪特浓蜂蜜♪还有草莓大福♪模仿推们感觉可以带来好运！`,
          );
          break;
      }
      break;
    case 1:
      if (relation > 376) {
        await chara_talk.say_and_wait(`同志！再去那边圣地巡礼一下吧！`);
      } else {
        switch (get_random_value(0, 1)) {
          case 0:
            await chara_talk.say_and_wait(
              `啊哈哈哈，训练员，一到一起逛，我反而不会选哪比较好了……`,
            );
            break;
          case 1:
            await chara_talk.say_and_wait(
              `诶？我选择地点吗？总感觉我总会选到那种${chara_talk.get_uma_sex_title()}相关的地方……`,
            );
            break;
        }
      }
      break;
    case 2:
      switch (get_random_value(0, 2)) {
        case 0:
          await chara_talk.say_and_wait(
            `唔奴奴！这个茶座同款咖啡杯，那个目白红茶杯，这要我怎么选择？！当然是全都要啦！`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `爱慕织姬代言的烘干机？这个……还是有点……不行，得买的啊！`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(
            `诶？你说为什么周边要买三份？当然是一份自用一份收藏一份传教啦！`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.out_river] = async function (hook) {
  const ret = await select_action_around_river(19);
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 2)) {
      case 0:
        await chara_talk.say_and_wait(
          `呜哇，是……是青云天空，我是不是不过去那边比较好……`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `哦哦哦，钓上来了，钓上了，要是野炊的话就可以烤着来吃了呢，训练员！`,
        );
        break;
      case 2:
        await chara_talk.say_and_wait(
          `别介意！胜负乃兵家常事，大侠请重新来过吧……空军也像抽卡不出的概率一样啦！`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 3)) {
      case 0:
        await chara_talk.say_and_wait(`飞鹰子，是飞鹰子啊！我务必要过去那边！`);
        break;
      case 1:
        await chara_talk.say_and_wait(
          `发现了大和赤骥和伏特加！${chara_talk.sex}们在那边是在干什么～呢！`,
        );
        break;
      case 2:
        await chara_talk.say_and_wait(
          `哇！怒涛摔倒了，要去拉一下……站起来了！呜哦，真是勤勉……`,
        );
        break;
      case 3:
        await era.printAndWait(
          `在河边散步对于${chara_talk.name}来说是一种朝圣行为，`,
        );
        await era.printAndWait(
          `因为各个角落，都能发现赛${chara_talk.get_uma_sex_title()}，`,
        );
        await era.printAndWait(
          `正在练习歌唱的小${chara_talk.get_uma_sex_title()}偶像，正在适应泥地的小努力家。`,
        );
        await era.printAndWait(
          `比较幸运的是这次${chara_talk.sex}并没有尊得失魂。`,
        );
        break;
    }
  }
};

handlers[event_hooks.talk] = async function () {
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
        `诶呀，刚才在想${chara_talk.get_uma_sex_title()}的事情……`,
      ];
      break;
    case 0:
      talk_arr = [
        `嘶……呼……再多一些，萌萌之力！`,
        `还差一些，感觉还不够，我还得吸取更多的${chara_talk.get_uma_sex_title()}萌萌之力！`,
      ];
      break;
    case 1:
      talk_arr = [
        `感觉状况正好！一起去汲取${chara_talk.get_uma_sex_title()}萌萌之力积德吧！`,
        `爱，正是对${chara_talk.get_uma_sex_title()}酱的爱才让我有如此力量啊！`,
      ];
      break;
    case 2:
      talk_arr = [
        `哇啊啊啊！这边也是，那边都是${chara_talk.get_uma_sex_title()}酱！感觉我现在什么都做得到！`,
        `哈呀！萌力已经突破天际了！`,
      ];
      break;
  }
  await chara_talk.say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.out_church] = async function () {
  await chara_talk.say_and_wait(`积德积德……是集福吗？`);
  await era.printAndWait(
    `在神社前拍手两次后，你和${chara_talk.name}都合手祈祷，`,
  );
  await era.printAndWait(
    `你自然是祈求了担当${chara_talk.get_uma_sex_title()}的健康，但${
      chara_talk.name
    }会祈求什么呢？`,
  );
  await era.printAndWait(
    `你喵了一眼数码，发现${chara_talk.sex}还没张开眼，小手搓搓，马耳直立，口中念念有词，这是一般人会有的虔诚吗？`,
  );
  await era.printAndWait(`不久后${chara_talk.sex}转过身来，正经地说道：`);
  await chara_talk.say_and_wait(`为了让神明保佑所有的${chara_talk.get_uma_sex_title()}，我理应尽我最大的虔诚去祈祷，
  `);
  await chara_talk.say_and_wait(
    `虽然这是虚实的事物，但是这能让我再次理性地看待自我，顺便可以积点德啦！`,
  );
  await era.printAndWait(
    `你在意外之余也觉得${chara_talk.sex}说得很有道理，因此你也抛弃杂念，想要再次祈祷一次。`,
  );
  switch (get_random_value(0, 1)) {
    case 0:
      await era.printAndWait(
        `慢慢的，你感到思维中有三股清泉流过，你惊讶地睁开了眼睛，发现是清风吹过了树叶，吹过了神庙，并让你的心平静了下来。`,
      );
      await chara_talk.say_and_wait(
        `因为是历奇前辈推荐的特别灵验的神社，所以刚刚一直都不太敢说话呢～`,
      );
      await era.printAndWait(`这是真实存在的吗？`);
      await era.printAndWait(`你发现旁边的数码也同时沉浸在此境中。`);
      await chara_talk.say_and_wait(`这是三女神的恩惠啊！`);
      await era.printAndWait(
        `虽然你很想吐槽，为什么在神庙里祈福，赐福的是三女神，不过既然真的有至少心理上的效果，也就算了。`,
      );
      break;
    case 1:
      await era.printAndWait(
        `将精神聚集在双目之间，想着该如何诚心地祈祷，但事实上这种方法本身就有问题，看起来你现在还并不擅长祛除杂念。`,
      );
      await chara_talk.say_and_wait(
        `没关系，我可是练了不短时间才能达到这种效果，同志你还要多加练习啊！`,
      );
      await era.printAndWait(
        `你不由得好奇这技能的实际用处，难道是比赛的时候可以很方便地凝聚注意力吗？`,
      );
      await era.printAndWait(
        `不过你也同时意识到有时的确需要练一下静心，看起来只能下次再尝试了。`,
      );
      break;
  }
};

/**
 * 数码碳的日常事件，id=19
 *
 * @author 片手虾好评发售中！
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
