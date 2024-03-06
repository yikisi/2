const era = require('#/era-electron');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');

const chara_talk = new CharaTalk(30);

let talk_arr;

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  if (era.get('status:30:沉睡') || era.get('status:30:马跳S')) {
    era.print(`${chara_talk.name} 带着比绘本还要精致的笑颜熟睡着。`);
  } else {
    if (Math.random() < 0.5) {
      era.print(
        Math.random() < 0.5
          ? `${chara_talk.name}被静电吓了一跳，抚弄了下耳朵后静等你的指令。`
          : `${chara_talk.name}把刘海捋到一旁，让神采奕奕的双眸对上你的视线。`,
      );
    }
  }
};

handlers[event_hooks.good_morning] = function () {
  if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
    talk_arr = [
      `呼……好像，有点累…的感觉…`,
      `${chara_talk.name}没关系的！没有、感觉到累……真的，真的没问题哦？`,
    ];
  } else {
    talk_arr = [
      `请一定……要好好看着${chara_talk.name}。`,
      `${chara_talk.name}……也一定可以很耀眼的……`,
    ];
  }
  chara_talk.say(get_random_entry(talk_arr));
};

handlers[event_hooks.talk] = async function () {
  const callname = era.get('callname:30:0'),
    motivation = era.get('cflag:30:干劲'),
    self_name = era.get('callname:30:30');
  let talk_arr;
  // 早安问候
  if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
    //体力不足1/3情况下
    talk_arr = [
      '呼……好像，有点累…的感觉…',
      `${self_name} 没关系的！没有、感觉到累……`,
    ];
  } else if (era.get('cflag:30:育成回合计时') < 3 * 48) {
    switch (motivation) {
      case -2: //干劲极差
        talk_arr = [
          `啊呜！明明不想给 ${callname} 添麻烦的……对不起。`,
          `${self_name}……又要变回没用的孩子了吗…`,
        ].map((e) => [e]);
        break;
      case -1: //干劲较差
        talk_arr = [
          `唔唔……加油 ${self_name}……加油…`,
          `有没有什么是 ${self_name} 能帮上忙的呢……`,
        ].map((e) => [e]);
        break;
      case 0: //干劲普通
        talk_arr = [
          `${self_name} 会努力不让人失望的。`,
          '要加油——喔！今天也请麻烦您多多指教了。',
        ].map((e) => [e]);
        break;
      case 1: //干劲良好
        talk_arr = [
          `${callname}，我们开始训练吧？现在的 ${self_name} 感觉可以完成很多项目哦。`,
          `${self_name}……又要变回没用的孩子了吗…`,
        ].map((e) => [e]);
        break;
      case 2: //干劲极佳
        talk_arr = [
          [
            `${self_name} 现在觉得可以非常、非常地努力哦！`,
            `相信 ${self_name} 吧，${callname}。`,
          ],
          [
            `那个，${self_name} 已经做好热身运动了。`,
            `所以现在开始做什么都没问题哦。`,
          ],
        ];
        break;
    }
  } else {
    talk_arr = [
      '每天，虽然只是一点点、但好像离理想中的自己越来越近了……的样子？',
      `${callname}……那个，跟你说哦……${self_name} 每天都会努力的……你要相信 ${self_name} 一定可以改变的。`,
      `现在呀……${self_name} 也已经不会，那么讨厌自己了哦。`,
      `……呃，${callname}……今天也愿意继续照、照顾 ${self_name} 吗……？`,
      `其……其实 ${self_name} 做了巧克力……${self_name} 做的巧克力你愿意吃吗……？你愿意收下的话，${self_name} 会很高兴的。`,
      `星星可以实现大家的愿望，让大家都变得幸福，真的好厉害。${self_name}……也要努力才行。`,
      `自从遇到 ${callname} 之后，每天时间都过得好快……${self_name} 会努力的！`,
      `${self_name} 穿制服好看吗？`,
      '一直被盯着看的话……感觉有点害羞。',
    ].map((e) => [e]);
  }
  for (const e of get_random_entry(talk_arr)) {
    await chara_talk.say_and_wait(e);
  }
};

handlers[event_hooks.out_river] = async function (hook) {
  const callname = era.get('callname:30:0'),
    ret = await select_action_around_river(19);
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 1)) {
      case 0:
        await chara_talk.say_and_wait(
          `呜啊啊啊！禁渔区钓上来这么多鱼，真的对不起！`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(`${callname} ，现在是禁渔期哦？`);
        await chara_talk.say_and_wait(
          `欸…一人一杆一线一钩？改善生态环境？欸欸欸？`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 1)) {
      case 0:
        await chara_talk.say_and_wait(
          `以前一个人锻炼，可能会感到孤独。但是和${callname} 一起，就感觉像是心灵得到了慰藉一样！`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `${chara_talk.name}最享受的，或者说最接近自己的时光，就是和${callname} 悠哉悠哉地走在一起的这段路程哦。`,
        );
        break;
    }
  }
};
handlers[event_hooks.out_shopping] = async function (stage_id) {
  const callname = era.get('callname:30:0'),
    temp = await select_action_in_shopping_street();
  stage_id.arg = temp <= 1;
  switch (temp) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `为什么街机厅要用代币不直接用硬币呢？工作人员不会麻烦吗…`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `${callname} ，这台机器可能有故障哦。因为，这么慢的弹幕，${callname} 怎么可能躲不过去啊？`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `${chara_talk.name}，一直只能抽到纸巾呢……享受过程？那，${chara_talk.name}再去试试看。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `那个，钱请让${chara_talk.name}来出，${callname} 就请贡献自己的好运吧！`,
          );
          break;
      }
      break;
    case 2:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `献给${callname} 的歌曲，要${chara_talk.name}唱多少都行。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `${chara_talk.name}小小的祈愿，有传达给${callname} 吗？`,
          );
          break;
      }
      break;
    case 3:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `${callname} 。为什么爱一个人，却会不喜欢对方呢？`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `《火O忍者剧场版》，有很像${chara_talk.name}的帅气角色？好期待！`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const callname = era.get('callname:30:0');
  hook.arg = await select_action_in_station(30);
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `要要要、要吃${chara_talk.name}什么的…啊，${callname} 是米饭派啊。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `果然还是aa吧？${chara_talk.name}也知道自己的食量比较大。`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `嘿嘿，${chara_talk.name}感觉自己就像绘本里的女主角一样。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(`${callname} ，喜欢那种类型的雌性啊…`);
          break;
      }
      break;
    case 2:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(`绘本区，一起逛逛吧？`);
          break;
        case 1:
          await chara_talk.say_and_wait(
            `情侣限定……可是，${callname} 就是${callname} 啊。`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  await chara_talk.say_and_wait(
    `${chara_talk.name}虽然是早餐面包派，但对便当，还是有点自信的！`,
  );
};

handlers[event_hooks.office_cook] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(`诶嘿嘿，简直就像新婚夫妇呢。`);
      break;
    case 1:
      await chara_talk.say_and_wait(
        `意外，吗？${chara_talk.name}因为胃口不小，所以有请母亲 指导过。`,
      );
      break;
  }
};

handlers[event_hooks.office_study] = async function () {
  const callname = era.get('callname:30:0');
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `这是${chara_talk.name}精挑细选的绘本，还请${callname} 垂阅。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(`${callname} ，和比赛有关的事情都好擅长…`);
      break;
  }
};
handlers[event_hooks.office_rest] = async function () {
  const callname = era.get('callname:30:0');
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `${callname} ，那个……膝枕……哇啊啊，是${chara_talk.name}想给${callname} 做啦…`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `真的不需要把外套给${chara_talk.name}当毯子的……好好闻…`,
      );
      break;
  }
};
handlers[event_hooks.office_game] = async function () {
  const callname = era.get('callname:30:0');
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `《马娘小顽皮爱洗澡》，嘻嘻，${chara_talk.name}也很喜欢哦。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `${callname} ，明明一副好学生的样子，游戏水平也好厉害！`,
      );
      break;
  }
};
handlers[event_hooks.office_study] = async function () {
  const callname = era.get('callname:30:0');
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `这是${chara_talk.name}精挑细选的绘本，还请${callname} 垂阅。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(`${callname} ，和比赛有关的事情都好擅长…`);
      break;
  }
};

handlers[event_hooks.office_study] = async function () {
  const callname = era.get('callname:30:0');
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `这是${chara_talk.name}精挑细选的绘本，还请${callname} 垂阅。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(`${callname} ，和比赛有关的事情都好擅长…`);
      break;
  }
};
handlers[event_hooks.school_atrium] = async function (hook) {
  const callname = era.get('callname:30:0');
  hook.arg = await select_action_in_atrium(30);
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `不能……哭，和${callname} 约好了，${chara_talk.name}要成为坚强的孩子。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `三女神 ，${chara_talk.name}，打算开始相信自己了。`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(`椅子上的大家，好大胆…有点羡慕。`);
          break;
        case 1:
          await chara_talk.say_and_wait(
            `明明是特雷森，却有这么适合约会的地方呢。`,
          );
          break;
      }
      break;
  }
};
/**
 * 米浴的日常事件，id=30
 *
 * @author 梦露
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param {any} extra_flag
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
