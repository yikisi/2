const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const EduEventMarks = require('#/data/event/edu-event-marks');
const event_hooks = require('#/data/event/event-hooks');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-400/week-start');

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-400/week-end');

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-400/race-end');

/**
 * @param {HookArg} _
 * @param __
 * @param {EventObject} event_object
 */

handlers[event_hooks.out_church] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 400) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const chara_talk = get_chara_talk(400),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:400:育成回合计时');
  if (edu_weeks === 47 + 1) {
    await print_event_name('新年的抱负', chara_talk);
    await era.printAndWait(
      `在神社偶遇了${chara_talk.name}，这是很奇妙的缘分，特别是当你看到几乎与她长得一模一样的马娘和她一起有说有笑的时候。`,
    );
    await era.printAndWait(
      `两个几乎是一个模子里面刻出来的马娘就这样站在了你的面前，`,
    );
    await era.printAndWait(
      `你知道自己绝不能再认错${chara_talk.name}了，不然的话大年初一进医务室也太不吉利了。`,
    );
    await era.printAndWait(
      `所幸的是，${chara_talk.name}很明显一如既往会露出略显烦躁的表情，`,
    );
    await era.printAndWait(`似乎是不太喜欢人多的地方，这给了最好的提示。`);
    await chara_talk.say_and_wait(
      `新的一年也请多多指教了......拖雷纳君，今年可是我踏入经典年的时候，还请务必不要放松训练上的指导呢......`,
    );
    await era.printAndWait(
      `将你拉到了一旁，${chara_talk.name}略显亲昵的牵着你的手，但是她有些紧张的神情似乎又不希望曼城茶座发现她的动作。`,
    );
    era.printButton(`那么，新的一年，请多多指教。`, 1);
    await era.input();
    await era.printAndWait(
      `听你说完这句话，${chara_talk.name}开心的摸了摸她的和服，然后突然脸上露出了些许红霞。`,
    );
    await chara_talk.say_and_wait(
      `那个，和服的系带松了.......能不能麻烦你.......`,
    );
    await era.printAndWait(
      `越说${chara_talk.name}的声音就越微弱，脑袋也慢慢的低了下去。`,
    );
    await era.printAndWait(
      `但是你显然没有这个顾虑，三下五除二就帮她将和服重新穿好，然后深藏功与名的捋了捋头发。`,
    );
    await era.printAndWait(
      `之后${chara_talk.name}就拉着你一起去吃了你绝对吃不起的豪华大餐，但是她似乎只是想看着你吃。`,
    );
    get_attr_and_print_in_event(
      400,
      [0, 0, 0, 15, 0],
      0,
      JSON.parse('{"体力":300}'),
    );
    sys_like_chara(400, 0, 40) && (await era.waitAnyKey());
  } else if (edu_weeks === 95 + 1) {
    await print_event_name('与${chara_talk.name}一起前往神社', chara_talk);
    await era.printAndWait(`${chara_talk.name}温柔的拉着你的手`);
    await era.printAndWait(
      `她身上华丽的黑色和服让她看起来就好像是一位出尘绝艳的美丽女子一般，`,
    );
    await era.printAndWait(
      `在这个不算特别寒冷的清晨，她亲自敲响了你的家门，然后将你拉了出来。`,
    );
    await chara_talk.say_and_wait(`拖雷纳君，如果要是冷的话可以把手伸进来哦。`);
    await era.printAndWait(
      `她指了指自己的修身的和服，脸上带着些许的红霞，似乎是在期待着你的动作。`,
    );
    await era.printAndWait(
      `不过或许是她有些心慌意乱，很明显她的诱惑战术时间并不恰当，还没一分钟的时间你们就站在了神社的门口。`,
    );
    await chara_talk.say_and_wait(
      `唉，算了算了，拖雷纳君这样的木头人还是太不解风情了。`,
    );
    await era.printAndWait(
      `紧接着你们进入了神社，一如既往的按照参拜的过程，将硬币投入纳奉箱之中之后拍手许愿。`,
    );
    await chara_talk.say_and_wait(`拖雷纳君你许了什么愿望呢？`);
    era.printButton(`希望我们两个人都身体健康，过上安心幸福的日子。`, 1);
    await era.input();
    await era.printAndWait(
      `说完你将拉住了她的小手，带着黑色蕾丝手套的手摸起来有种奇妙的感觉，`,
    );
    await era.printAndWait(
      `${chara_talk.name}似乎隔着手套感受着你的温度，然后将你的手放入了她的和服之中。`,
    );
    await chara_talk.say_and_wait(
      `唔，我的愿望就是秘密了，除非拖雷纳君要用大棒撬开我的嘴，不然我是不会说的哦。`,
    );
    await era.printAndWait(
      `说完她就在脸颊的脸颊上留下一个吻，然后像是逃跑一样离开了神社。`,
    );
    get_attr_and_print_in_event(
      400,
      [5, 5, 5, 5, 5],
      0,
      JSON.parse('{"体力":300}'),
    );
    sys_like_chara(400, 0, 20) && (await era.waitAnyKey());
  }
};

handlers[event_hooks.school_atrium] = async (_, __, event_object) => {
  const cur_chara_id = era.get('flag:当前互动角色');
  if (cur_chara_id && cur_chara_id !== 400) {
    add_event(event_hooks.school_atrium, event_object);
    return;
  }
  const chara_talk = get_chara_talk(400),
    me = get_chara_talk(0);
  const edu_event_marks = new EduEventMarks(400);
  if (edu_event_marks.get('enjoy_cat') === 1) {
    edu_event_marks.add('enjoy_cat');
    await print_event_name('尝试和猫咪相处', chara_talk);
    await era.printAndWait(
      `${chara_talk.name}等在树丛的旁边，似乎在苦恼着什么事情。`,
    );
    await chara_talk.say_and_wait(
      `拖雷纳君！！刚刚好，过来帮我一下吧？这里有只小猫躲在里面，我怕等会下雨的话把它淋湿生病就不好了！`,
    );
    await era.printAndWait(`你思考了一下，说道。`);
    era.printButton(`果然还是要先用食物引诱吧。`, 1);
    era.printButton(`先下手为强，把猫咪抓住。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `${chara_talk.name}听完之后点点头，然后在你无奈的眼神之下试图用面包将小猫咪引诱出来，`,
      );
      await era.printAndWait(`但是很明显她的做法几乎没有效果。`);
      await me.say_and_wait(`让我试试吧，我刚刚好带了点食材。`);
      await era.printAndWait(
        `一根火腿肠被放到了树丛的前方，小猫咪警觉的探出了脑袋，`,
      );
      await era.printAndWait(
        `看到两个人类就瞬间缩了回去，但是似乎是饥饿战胜了理智，`,
      );
      await era.printAndWait(
        `它还是忍不住跑出来咬住了火腿肠，然后落到了${chara_talk.name}的手中。`,
      );
    } else {
      await chara_talk.say_and_wait(`说的也对，这个时候就应该发挥我的长处了。`);
      await era.printAndWait(
        `${chara_talk.name}伸了个懒腰，眼神锐利了起来，慢慢的拨开树丛，`,
      );
      await era.printAndWait(`看到了那只非常警惕，似乎已经有些炸毛的小猫咪。`);
      await chara_talk.say_and_wait(`看起来很警觉呢......不过只要这样的话。`);
      await era.printAndWait(`她飞快的伸手捏住了小猫的后颈，`);
      await era.printAndWait(
        `一瞬间刚刚还在试图威胁${chara_talk.name}的小猫瞬间安分了下来，`,
      );
      await era.printAndWait(`乖乖的被提起来落到了${chara_talk.name}的手中。`);
    }
    await era.printAndWait(
      `在抓住了小猫咪之后，${chara_talk.name}将它带到了休息室附近，然后看着窗外的大雨露出了笑容。`,
    );
    await chara_talk.say_and_wait(
      `要是被大雨淋湿透的话，你可就糟糕了呢，小家伙。`,
    );
    await era.printAndWait(
      `小猫埋头在猫粮之中，无暇估计${chara_talk.name}的话语。`,
    );
    await chara_talk.say_and_wait(`等会就把你送去宠物医院看看......`);
    await era.printAndWait(
      `然后这只小猫就顺手被做了驱虫和绝育，回到特雷森的时候已经是一脸的生无可恋`,
    );
  }
  return true;
};

/**
 * 周日宁静的育成事件
 *
 * @author 黑衣剑士-星爆气流斩准备就绪
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
