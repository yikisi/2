/**
 * @file 周日宁静 - 育成
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const yandere_list = require('#/data/event/yandere-list');
const { location_enum } = require('#/data/locations');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},cb:function)>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-400/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} */
const week_end_handlers = {};

week_end_handlers.beginning = async (ss, me, callname, flags, event_object) => {
  add_event(event_hooks.week_start, event_object);
  await print_event_name('周日宁静登场', ss);
  await ss.say_and_wait(['呦，心情很不错啊，', callname, '。']);
  await ss.say_and_wait(
    '那么，开始训练怎么样？毕竟你的目标也是一个又一个第一对吧？',
  );
  await era.printAndWait([
    '美丽的黑发',
    ss.uma_sex_title,
    '对 ',
    me.get_colored_name(),
    ' 伸出了手，自信的面容就好像是绽放的花朵一般，',
  ]);
  await era.printAndWait([
    '健康而丰满的肉体让 ',
    me.get_colored_name(),
    ' 不得不感慨本格化的',
    ss.uma_sex_title,
    '是如此的美好，',
  ]);
  await era.printAndWait([
    '上午温暖的阳光透过玻璃窗打在',
    ss.sex,
    '与 ',
    me.get_colored_name(),
    ' 的身上，这一切都是如此的自然但是又温馨。',
  ]);
  await ss.say_and_wait(
    '作为互相选择的搭档，我有必要让你了解我的全部情况，所以，我们去训练场怎么样？',
  );
  await era.printAndWait([
    ss.get_colored_name(),
    ' 完全掌握了对话的主导权，',
    me.get_colored_name(),
    ' 没有任何反对',
    ss.sex,
    '提议的想法，跟着',
    ss.sex,
    '一起去了训练场。',
  ]);
  await era.printAndWait([
    '这一天，',
    me.get_colored_name(),
    ' 替',
    ss.sex,
    '完成了一次完整的摸底排查，根据 ',
    me.get_colored_name(),
    ' 的经验，开始进行训练计划的制定。',
  ]);
};

week_end_handlers[47 + 24] = async (ss, me, callname, flags, event_object) => {
  if (
    era.get('cflag:0:位置') !== location_enum.new_york ||
    era.get('cflag:400:位置') !== era.get('cflag:0:位置')
  ) {
    add_event(event_hooks.week_end, event_object);
    return false;
  }
  await print_event_name('深夜的暴风雨', ss);
  await era.printAndWait([
    '夜晚，带着疲惫的 ',
    ss.get_colored_name(),
    ' 回到了',
    ss.sex,
    '的房间，正当 ',
    me.get_colored_name(),
    ' 准备离开的时候，窗外下起了瓢泼大雨。',
  ]);
  await ss.say_and_wait([
    '真是不凑巧的雨啊，',
    callname,
    ' 要不稍微在这里坐一会……',
  ]);
  await era.printAndWait([
    '窗外雷声大作，狂风暴雨袭击着你们所居住的酒店，在一道震耳欲聋的雷声之后，整个酒店似乎都停电了。',
  ]);
  await ss.say_and_wait([
    '等等……等等等等等等，呼……呼……呼……',
    callname,
    '！！',
    callname,
    ' 你在哪里？！',
  ]);
  await era.printAndWait([
    '昏暗之中，',
    ss.sex,
    '一时半会找不到 ',
    me.get_colored_name(),
    ' 的身影，语气中的惊慌无措几乎要溢满而出。',
  ]);
  await ss.say_and_wait('不要……不要丢下我一个人……求求你，让我看到你好吗？');
  await era.printAndWait([
    '顺着有一道闪电划过带来的光芒，',
    me.get_colored_name(),
    ' 看清楚了',
    ss.sex,
    '的脸颊，与过去的 ',
    ss.get_colored_name(),
    ' 截然不同，',
  ]);
  await era.printAndWait([
    '那无助于悲伤几乎要将',
    ss.sex,
    '吞噬，眼眸之中的泪水是 ',
    me.get_colored_name(),
    ' 从来没有在',
    ss.sex,
    '身上见到过的。',
  ]);
  await era.printAndWait([
    '也就是顺着那道闪电，在黑暗的房间之中，',
    ss.sex,
    '看清楚了 ',
    me.get_colored_name(),
    ' 所在的地方，几乎是飞扑一样的向 ',
    me.get_colored_name(),
    ' 冲了过来。',
  ]);
  await era.printAndWait('咚！');
  await era.printAndWait([
    '很显然，',
    ss.sex,
    '的眼睛还没有完全适应着漆黑的房间，似乎是被什么东西给绊倒了，重重的摔在地上，伴随着',
    ss.sex,
    '隐约的啜泣。',
  ]);
  era.printButton('「别慌，我在这里，我现在在往你那边靠过去」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    ' 马上赶了过去，循着声音 ',
    me.get_colored_name(),
    ' 握住了 ',
    ss.get_colored_name(),
    ' 的手，',
  ]);
  await era.printAndWait([
    ss.sex,
    '死死的抓紧 ',
    me.get_colored_name(),
    ' 的手掌让 ',
    me.get_colored_name(),
    ' 感觉自己的指骨似乎在悲鸣，但是 ',
    ss.get_colored_name(),
    ' 却对此似乎浑然不觉。',
  ]);
  await ss.say_and_wait(
    '没事……没事的，很快就过去了，这件事很快就过去……我们可以一起出去的。',
  );
  await era.printAndWait([
    me.get_colored_name(),
    ' 感觉到',
    ss.sex,
    '的状态似乎不太对劲，于是 ',
    me.get_colored_name(),
    ' 牵引着',
    ss.sex,
    '让',
    ss.sex,
    '坐在床上，',
  ]);
  await era.printAndWait([
    '窗外的风雨呼呼的击打着窗户，',
    me.get_colored_name(),
    ' 拿出手机，柔和的光芒照亮了',
    ss.sex,
    '惊惶的脸颊。',
  ]);
  era.printButton('「我哪里都不去，我在这里陪着你」（好感+50，干劲+1……）', 1);
  era.printButton(
    '「我现在就去给你找条毛巾擦一下，等会就回来」（好感+20，干劲-1）',
    2,
  );
  if ((await era.input()) === 1) {
    yandere_list.push(400);
    await ss.say_and_wait('嗯……不要松开我的手，求求你了……');
    await era.printAndWait([
      ss.sex,
      '看起来终于稳定了一点，一直紧绷的身子也终于慢慢的放松下来，然后',
      ss.sex,
      '拉着 ',
      me.get_colored_name(),
      ' 一起坐在了自己的床边。',
    ]);
    await ss.say_and_wait([
      callname,
      '……我真的很害怕……我当时就是这样握紧',
      ss.sex,
      '的手的……',
    ]);
    await ss.say_and_wait('……我不知道自己是怎么撑过来的，车翻了……');
    await ss.say_and_wait([
      '我们出不去……一开始',
      ss.couple_title,
      '还会和我说话安慰我握着我的手……',
    ]);
    await ss.say_and_wait(
      '但是……但是……好安静，我……我好像喝了什么东西……慢慢就睡过去了……明明说好不放手的',
    );
    await ss.say_and_wait([
      '是我……是我放手了……如果我没有放手的话……',
      ss.couple_title,
      '说不定……说不定就。',
    ]);
    await era.printAndWait([
      '那是 ',
      ss.get_colored_name(),
      ' 埋藏在心里面最深处的伤疤，在荒郊野外遭遇车祸，作为大人的司机当场横死，',
    ]);
    await era.printAndWait([
      '留下车上的几个小',
      ss.uma_sex_title,
      '被困在车子里面等待救援，但是救援来到的时间实在是太晚了，',
    ]);
    await era.printAndWait([
      '晚到只有 ',
      ss.get_colored_name(),
      ' 成功活了下来，',
      ss.sex,
      '从来没有对任何人说过这件事，除了 ',
      me.get_colored_name(),
      '。',
    ]);
    era.printButton(
      '「没事，握紧我的手，我不会松开的，我相信你也不会松开的，我们会一起走下去的。」',
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '嗯……好……一辈子都不松开，说好的……我会拿到三冠的……我……我会走下去的。',
    );
    await era.printAndWait([ss.sex, '的疲惫涌了出来，眼皮子开始打架，']);
    await era.printAndWait([
      '但是即使是这样，',
      ss.sex,
      '也依旧没有松开握住 ',
      me.get_colored_name(),
      ' 的那只手，',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 只能握紧',
      ss.sex,
      '的手看着',
      ss.sex,
      '一点点进入梦乡，伴随着困意的袭来，',
      me.get_colored_name(),
      ' 就这样陪',
      ss.sex,
      '度过了一个夜晚。',
    ]);
    await era.printAndWait([
      '第二天清晨，',
      me.get_colored_name(),
      ' 靠着墙壁坐在床边，惊觉自己居然这样睡在了 ',
      ss.get_colored_name(),
      ' 的房间里面，',
      me.get_colored_name(),
      ' 抬头看过去。',
    ]);
    await era.printAndWait([
      ss.sex,
      '早就已经不在床上了，回过头去，穿好了运动服的 ',
      ss.get_colored_name(),
      ' 从厕所里面走出来。',
    ]);
    await ss.say_and_wait([
      callname,
      ' 醒了啊？要去休息一下吗？我今天的训练计划您昨天就规划好了，请放心我不会偷懒的。',
    ]);
    await era.printAndWait([
      ss.sex,
      '有些关切的揉了揉 ',
      me.get_colored_name(),
      ' 的太阳穴，看着 ',
      me.get_colored_name(),
      ' 腰酸背痛的样子有些担心。',
    ]);
    await era.printAndWait([
      '然后将 ',
      me.get_colored_name(),
      ' 送回了房间，在关门之前，',
      me.get_colored_name(),
      ' 听到了一句奇怪的话。',
    ]);
    await ss.say_and_wait([
      callname,
      '，说好的哦……你不会放开你的手的，所以……如果可以完成那件事的话，我就可以……一辈子握住你的手了吧。',
    ]);
    era.println();
    flags.wait_flag = sys_change_motivation(400, 1) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(400, 0, 50);
  } else {
    await era.printAndWait([
      ss.sex,
      '有些惊慌的伸手，但是在黑夜之中 ',
      me.get_colored_name(),
      ' 并没有注意到这件事情，',
    ]);
    await era.printAndWait([
      '转身快速的跑去找到了一条毛巾处理了',
      ss.sex,
      '因为扭伤而行动不便的脚。',
    ]);
    await era.printAndWait([ss.get_colored_name(), ' 看起来有些烦躁而畏惧。']);
    await ss.say_and_wait('谢谢您，大晚上的麻烦您了。');
    await era.printAndWait([
      ss.sex,
      '的声音听起来无比沙哑，',
      ss.sex,
      '拉住了 ',
      me.get_colored_name(),
      ' 的衣袖，似乎是不希望 ',
      me.get_colored_name(),
      ' 离开，于是 ',
      me.get_colored_name(),
      ' 唱起了自己儿时听过的摇篮曲，将',
      ss.sex,
      '哄睡。',
    ]);
    era.drawLine({ content: '第二天早上' });
    await ss.say_and_wait('昨天晚上……让您见笑了，真抱歉。');
    await era.printAndWait([
      ss.sex,
      '看起来眼睛有些红肿，显然昨天晚上没有休息好，在 ',
      me.get_colored_name(),
      ' 将',
      ss.sex,
      '哄睡之后便回了自己的房间，也没有办法知道后面到底发生了什么。',
    ]);
    era.println();
    flags.wait_flag = sys_change_motivation(400, -1) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(400, 0, 20);
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean})>} */
const out_church_handlers = {};

out_church_handlers[47 + 1] = async (ss, me, callname, flags) => {
  era.set('cflag:400:节日事件标记', 0);
  await print_event_name('新年的抱负', ss);
  await era.printAndWait([
    '在神社偶遇了 ',
    ss.get_colored_name(),
    '，这是很奇妙的缘分，特别是当 ',
    me.get_colored_name(),
    ' 看到几乎与',
    ss.sex,
    '长得一模一样的',
    ss.uma_sex_title,
    '和',
    ss.sex,
    '一起有说有笑的时候。',
  ]);
  await era.printAndWait([
    '两个几乎是一个模子里面刻出来的',
    ss.uma_sex_title,
    '就这样站在了 ',
    me.get_colored_name(),
    ' 的面前，',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 知道自己绝不能再认错 ',
    ss.get_colored_name(),
    ' 了，不然的话大年初一进医务室也太不吉利了。',
  ]);
  await era.printAndWait([
    '所幸的是，',
    ss.get_colored_name(),
    ' 很明显一如既往会露出略显烦躁的表情，',
  ]);
  await era.printAndWait('似乎是不太喜欢人多的地方，这给了最好的提示。');
  await ss.say_and_wait([
    '新的一年也请多多指教了……',
    callname,
    '，今年可是我踏入经典年的时候，还请务必不要放松训练上的指导呢……',
  ]);
  await era.printAndWait([
    '将 ',
    me.get_colored_name(),
    ' 拉到了一旁，',
    ss.get_colored_name(),
    ' 略显亲昵的牵着 ',
    me.get_colored_name(),
    ' 的手，但是',
    ss.sex,
    '有些紧张的神情似乎又不希望 ',
    get_chara_talk(25).get_colored_name(),
    ' 发现',
    ss.sex,
    '的动作。',
  ]);
  era.printButton('「那么，新的一年，请多多指教。」', 1);
  await era.input();
  await era.printAndWait([
    '听 ',
    me.get_colored_name(),
    ' 说完这句话，',
    ss.get_colored_name(),
    ' 开心的摸了摸',
    ss.sex,
    '的和服，然后突然脸上露出了些许红霞。',
  ]);
  await ss.say_and_wait('那个，和服的系带松了……能不能麻烦你……');
  await era.printAndWait([
    '越说 ',
    ss.get_colored_name(),
    ' 的声音就越微弱，脑袋也慢慢的低了下去。',
  ]);
  await era.printAndWait([
    '但是 ',
    me.get_colored_name(),
    ' 显然没有这个顾虑，三下五除二就帮',
    ss.sex,
    '将和服重新穿好，然后深藏功与名的捋了捋头发。',
  ]);
  await era.printAndWait([
    '之后 ',
    ss.get_colored_name(),
    ' 就拉着 ',
    me.get_colored_name(),
    ' 一起去吃了 ',
    me.get_colored_name(),
    ' 绝对吃不起的豪华大餐，但是',
    ss.sex,
    '似乎只是想看着 ',
    me.get_colored_name(),
    ' 吃。',
  ]);
  flags.wait_flag = get_attr_and_print_in_event(
    400,
    [0, 0, 0, 15, 0],
    0,
    [300],
  );
  flags.wait_flag = sys_like_chara(400, 0, 40) || flags.wait_flag;
};

out_church_handlers[95 + 1] = async (ss, me, callname, flags) => {
  era.set('cflag:400:节日事件标记', 0);
  await print_event_name(['与', ss.name, '一起前往神社'], ss);
  await era.printAndWait([
    ss.get_colored_name(),
    ' 温柔的拉着 ',
    me.get_colored_name(),
    ' 的手',
  ]);
  await era.printAndWait([
    ss.sex,
    '身上华丽的黑色和服让',
    ss.sex,
    '看起来就好像是一位出尘绝艳的美丽女子一般，',
  ]);
  await era.printAndWait([
    '在这个不算特别寒冷的清晨，',
    ss.sex,
    '亲自敲响了 ',
    me.get_colored_name(),
    ' 的家门，然后将 ',
    me.get_colored_name(),
    ' 拉了出来。',
  ]);
  await ss.say_and_wait([callname, '，如果要是冷的话可以把手伸进来哦。']);
  await era.printAndWait([
    ss.sex,
    '指了指自己的修身的和服，脸上带着些许的红霞，似乎是在期待着 ',
    me.get_colored_name(),
    ' 的动作。',
  ]);
  await era.printAndWait([
    '不过或许是',
    ss.sex,
    '有些心慌意乱，很明显',
    ss.sex,
    '的诱惑战术时间并不恰当，还没一分钟的时间你们就站在了神社的门口。',
  ]);
  await ss.say_and_wait([
    '唉，算了算了，',
    callname,
    ' 这样的木头人还是太不解风情了。',
  ]);
  await era.printAndWait([
    '紧接着你们进入了神社，一如既往的按照参拜的过程，将硬币投入纳奉箱之中之后拍手许愿。',
  ]);
  await ss.say_and_wait([callname, ' 你许了什么愿望呢？']);
  era.printButton('「希望我们两个人都身体健康，过上安心幸福的日子。」', 1);
  await era.input();
  await era.printAndWait([
    '说完 ',
    me.get_colored_name(),
    ' 将拉住了',
    ss.sex,
    '的小手，带着黑色蕾丝手套的手摸起来有种奇妙的感觉，',
  ]);
  await era.printAndWait([
    ss.get_colored_name(),
    ' 似乎隔着手套感受着 ',
    me.get_colored_name(),
    ' 的温度，然后将 ',
    me.get_colored_name(),
    ' 的手放入了',
    ss.sex,
    '的和服之中。',
  ]);
  await ss.say_and_wait([
    '唔，我的愿望就是秘密了，除非 ',
    callname,
    ' 要用大棒撬开我的嘴，不然我是不会说的哦。',
  ]);
  await era.printAndWait([
    '说完',
    ss.sex,
    '就在脸颊的脸颊上留下一个吻，然后像是逃跑一样离开了神社。',
  ]);
  flags.wait_flag = get_attr_and_print_in_event(400, [5, 5, 5, 5, 5], 0, [300]);
  flags.wait_flag = sys_like_chara(400, 0, 20) || flags.wait_flag;
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams)>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-400/race-end')(race_end_handlers);

module.exports = class extends CustomizedEdu {
  async office_cook(ss, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 400) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'sugar_or_milk') {
      return;
    }
    await print_event_name('咖啡的味道要怎么样比较好呢？', ss);
    await ss.say_and_wait('咖啡要加糖还是加奶？或者什么都不加？');
    era.printButton('「什么？」', 1);
    await era.input();
    await ss.say_and_wait([
      '就是说你的咖啡要加糖还是奶啦？我和 ',
      sys_get_colored_callname(400, 25),
      ' ',
      ss.sex,
      '学了一下怎么泡咖啡，现在让你试一下，要点什么？',
    ]);
    era.printButton('「果然还是要多加点方糖吧。」（耐力+20）', 1);
    era.printButton('「或许加点奶会很不错。」（智力+20）', 2);
    const ret = await era.input();
    await ss.say_and_wait('这样吗？那就来尝尝看吧？我泡的咖啡怎么样？');
    await era.printAndWait([
      '咖啡的口感和甜度都非常棒，完全不像是新人第一次泡咖啡的成品，看到 ',
      me.get_colored_name(),
      ' 的表情，',
      ss.get_colored_name(),
      ' 愉快的勾起了嘴角。',
    ]);
    await ss.say_and_wait(
      '好喝的话，下次我就继续端给你品鉴了，要是有哪里不太行的话，要记得及时说哦。',
    );
    await era.printAndWait([
      '就这样 ',
      ss.get_colored_name(),
      ' 垄断了休息室里面的饮料供应。',
    ]);
    get_attr_and_print_in_event(400, ret === 1 ? [0, 20] : [0, 0, 0, 0, 20]) &&
      (await era.waitAnyKey());
    return true;
  }

  async office_game(ss, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 400) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'play_dice') {
      return;
    }
    let wait_flag;
    await print_event_name('要来试试运气吗？', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 拿出了一副扑克牌，对着 ',
      me.get_colored_name(),
      ' 挥了挥手。',
    ]);
    await ss.say_and_wait([
      callname,
      '，来玩抽鬼牌怎么样？毕竟现在可是休息时间哦。',
    ]);
    await era.printAndWait([
      '抽鬼牌的进度非常快，很快 ',
      ss.get_colored_name(),
      ' 的手中就只剩下两张牌了。',
    ]);
    await ss.say_and_wait(['哼哼哼，', callname, ' 可得好好的抉择一下呢。']);
    era.printButton('抽左边的牌（耐力&智力+10）', 1);
    era.printButton('抽右边的牌（速度+10，技能点数+20）', 2);
    if ((await era.input()) === 1) {
      await ss.say_and_wait(
        '看起来还是我比较好运呢，这下拖雷纳可是输给你的担当了呢，作为代价，给我带饭怎么样？',
      );
      await era.printAndWait([
        '最后去食堂替 ',
        ss.get_colored_name(),
        ' 带了',
        ss.sex,
        '喜欢吃的饭菜和零食。',
      ]);
      wait_flag = get_attr_and_print_in_event(400, [0, 10, 0, 0, 10], 0);
    } else {
      await ss.say_and_wait([
        '诶，居然是 ',
        callname,
        ' 比较厉害呢……这样的话，',
        callname,
        ' 中午想吃什么？我去给您带饭吧，顺带帮我计时怎么样？',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 爽快的答应了',
        ss.sex,
        '，然后',
        ss.sex,
        '就遇上了排的长长的队伍，等了很久才满脸无奈的提着饭盒回来了。',
      ]);
      wait_flag = get_attr_and_print_in_event(400, [10], 20);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_church(ss, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 400) {
      add_event(hook.hook, event_object);
      return;
    }
    if (out_church_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await out_church_handlers[event_object.arg](ss, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async race_end(ss, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](ss, me, callname, extra_flag))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('竞赛获胜！', ss);
        await ss.say_and_wait('唔，我赢了哦，看着赛场上我的表现感觉怎么样？');
        await me.say_and_wait(
          Math.random() < 0.5
            ? '轻轻松松，我们回去准备下一场比赛吧'
            : '感觉并没有什么难度，不过接下来的训练还请不要掉以轻心',
        );
      } else if (extra_flag.rank <= 5) {
        await print_event_name('竞赛上榜!', ss);
        await ss.say_and_wait(
          '说实话有些遗憾呢，是哪里出了问题呢？等会一起回去复盘吧。',
        );
        await me.say_and_wait(
          Math.random() < 0.5
            ? '虽然没有达到预期，但是已经做的非常好了'
            : '不想输的话下次就要做到更好才行',
        );
      } else if (extra_flag.rank <= 10) {
        await print_event_name('竞赛失败！', ss);
        await ss.say_and_wait([
          callname,
          '，我们该转换思路了哦，不然的话要是继续输下去的话，可就麻烦了呢。',
        ]);
        await me.say_and_wait(
          Math.random() < 0.5
            ? '你说得对，或许我们都应该转换一下思路，下次会更好的'
            : '虽然表现不尽如人意，但是在这里给自己施加压力可不是什么好办法',
        );
      } else {
        return await super.race_end(ss, me, callname, hook, extra_flag);
      }
    }
  }

  async school_atrium(ss, me, callname, hook, extra_flag, event_object) {
    const cur_chara = era.get('flag:当前互动角色');
    if (cur_chara > 0 && cur_chara !== 400) {
      add_event(event_hooks.school_atrium, event_object);
      return;
    }
    if (event_object?.arg !== 'enjoy_cat') {
      return;
    }
    await print_event_name('尝试和猫咪相处', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      ' 等在树丛的旁边，似乎在苦恼着什么事情。',
    ]);
    await ss.say_and_wait([
      callname,
      '！！刚刚好，过来帮我一下吧？这里有只小猫躲在里面，我怕等会下雨的话把它淋湿生病就不好了！',
    ]);
    era.printButton('「果然还是要先用食物引诱吧。」（根性&智力+10）', 1);
    era.printButton('「先下手为强，把猫咪抓住。」（耐力&力量+10）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        ss.get_colored_name(),
        ' 听完之后点点头，然后在 ',
        me.get_colored_name(),
        ' 无奈的眼神之下试图用面包将小猫咪引诱出来，',
      ]);
      await era.printAndWait(['但是很明显', ss.sex, '的做法几乎没有效果。']);
      await me.say_and_wait('让我试试吧，我刚刚好带了点食材。');
      await era.printAndWait([
        '一根火腿肠被放到了树丛的前方，小猫咪警觉的探出了脑袋，看到两个人类就瞬间缩了回去，但是似乎是饥饿战胜了理智，它还是忍不住跑出来咬住了火腿肠，然后落到了 ',
        ss.get_colored_name(),
        ' 的手中。',
      ]);
    } else {
      await ss.say_and_wait('说的也对，这个时候就应该发挥我的长处了。');
      await era.printAndWait([
        ss.get_colored_name(),
        ' 伸了个懒腰，眼神锐利了起来，慢慢的拨开树丛，看到了那只非常警惕，似乎已经有些炸毛的小猫咪。',
      ]);
      await ss.say_and_wait('看起来很警觉呢……不过只要这样的话。');
      await era.printAndWait([
        ss.sex,
        '飞快的伸手捏住了小猫的后颈，一瞬间刚刚还在试图威胁 ',
        ss.get_colored_name(),
        ' 的小猫瞬间安分了下来，',
      ]);
      await era.printAndWait([
        '乖乖的被提起来落到了 ',
        ss.get_colored_name(),
        ' 的手中。',
      ]);
    }
    await era.printAndWait([
      '在抓住了小猫咪之后，',
      ss.get_colored_name(),
      ' 将它带到了休息室附近，然后看着窗外的大雨露出了笑容。',
    ]);
    await ss.say_and_wait('要是被大雨淋湿透的话，你可就糟糕了呢，小家伙。');
    await era.printAndWait([
      '小猫埋头在猫粮之中，无暇顾及 ',
      ss.get_colored_name(),
      ' 的话语。',
    ]);
    await ss.say_and_wait('等会就把你送去宠物医院看看……');
    await era.printAndWait(
      '然后这只小猫就顺手被做了驱虫和绝育，回到特雷森的时候已经是一脸的生无可恋',
    );
    get_attr_and_print_in_event(
      400,
      ret === 1 ? [0, 0, 0, 10, 10] : [0, 10, 10],
    ) && (await era.waitAnyKey());
    return true;
  }

  async week_end(ss, me, callname, hook, extra_flag, event_object) {
    if (!week_end_handlers[event_object?.arg]) {
      return await super.week_end(
        ss,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_end_handlers[event_object.arg](
        ss,
        me,
        callname,
        flags,
        event_object,
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }

  async week_start(ss, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return await super.week_start(
        ss,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_start_handlers[event_object.arg](
        ss,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};
