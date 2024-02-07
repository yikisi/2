const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_love_uma } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async function (hook, __, event_object) {
  const chara_talk = get_chara_talk(400),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:400:育成回合计时');
  let wait_flag = false;
  if (new SSEduMarks().beginning === 1) {
    add_event(event_hooks.week_start, event_object);
    await print_event_name(`周日宁静登场`, chara_talk);
    await chara_talk.say_and_wait(`呦，心情很不错啊，我的拖雷纳君。`);
    await chara_talk.say_and_wait(
      `那么，开始训练怎么样？毕竟你的目标也是一个又一个第一对吧？`,
    );
    await era.printAndWait(
      `美丽的黑发${chara_talk.get_uma_sex_title()}对你伸出了手，自信的面容就好像是绽放的花朵一般，`,
    );
    await era.printAndWait(
      `健康而丰满的肉体让你不得不感慨本格化的${chara_talk.get_uma_sex_title()}是如此的美好，`,
    );
    await era.printAndWait(
      `上午温暖的阳光透过玻璃窗打在${chara_talk.sex}与你的身上，这一切都是如此的自然但是又温馨。`,
    );
    await chara_talk.say_and_wait(
      `作为互相选择的搭档，我有必要让你了解我的全部情况，所以，我们去训练场怎么样？`,
    );
    await era.printAndWait(
      `${chara_talk.name}完全掌握了对话的主导权，你没有任何反对${chara_talk.sex}提议的想法，跟着${chara_talk.sex}一起去了训练场。`,
    );
    await era.printAndWait(
      `这一天，你替${chara_talk.sex}完成了一次完整的摸底排查，根据你的经验，开始进行训练计划的制定。`,
    );
    wait_flag = get_attr_and_print_in_event(400, undefined, 120) || wait_flag;
  } else if (edu_weeks === 47 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:400:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季合宿结束', chara_talk);
    await era.printAndWait(
      `夜晚，带着疲惫的${chara_talk.name}回到了${chara_talk.sex}的房间，正当你准备离开的时候，窗外下起了瓢泼大雨。`,
    );
    await chara_talk.say_and_wait(
      `真是不凑巧的雨啊，拖雷纳君要不稍微在这里坐一会.......`,
    );
    await era.printAndWait(
      `窗外雷声大作，狂风暴雨袭击着你们所居住的酒店，在一道震耳欲聋的雷声之后，整个酒店似乎都停电了。`,
    );
    await chara_talk.say_and_wait(
      `等等....等等等等等等，呼...呼...呼...拖雷纳君！！拖雷纳君你在哪里？！`,
    );
    await era.printAndWait(
      `昏暗之中，${chara_talk.sex}一时半会找不到你的身影，语气中的惊慌无措几乎要溢满而出。`,
    );
    await chara_talk.say_and_wait(
      `不要.....不要丢下我一个人......求求你，让我看到你好吗？`,
    );
    await era.printAndWait(
      `顺着有一道闪电划过带来的光芒，你看清楚了${chara_talk.sex}的脸颊，与过去的${chara_talk.name}截然不同，`,
    );
    await era.printAndWait(
      `那无助于悲伤几乎要将${chara_talk.sex}吞噬，眼眸之中的泪水是你从来没有在${chara_talk.sex}身上见到过的。`,
    );
    await era.printAndWait(
      `也就是顺着那道闪电，在黑暗的房间之中，${chara_talk.sex}看清楚了你所在的地方，几乎是飞扑一样的向你冲了过来。`,
    );
    await era.printAndWait(`咚！`);
    await era.printAndWait(
      `很显然，${chara_talk.sex}的眼睛还没有完全适应着漆黑的房间，似乎是被什么东西给绊倒了，重重的摔在地上，伴随着${chara_talk.sex}隐约的啜泣。`,
    );
    era.printButton(`别慌，我在这里，我现在在往你那边靠过去`, 1);
    await era.input();
    await era.printAndWait(
      `你马上赶了过去，循着声音你握住了${chara_talk.name}的手，`,
    );
    await era.printAndWait(
      `${chara_talk.sex}死死的抓紧你的手掌让你感觉自己的指骨似乎在悲鸣，但是${chara_talk.name}却对此似乎浑然不觉。`,
    );
    await chara_talk.say_and_wait(
      `没事...没事的，很快就过去了，这件事很快就过去.....我们可以一起出去的。`,
    );
    await era.printAndWait(
      `你感觉到${chara_talk.sex}的状态似乎不太对劲，于是你牵引着${chara_talk.sex}让${chara_talk.sex}坐在床上，`,
    );
    await era.printAndWait(
      `窗外的风雨呼呼的击打着窗户，你拿出手机，柔和的光芒照亮了${chara_talk.sex}惊惶的脸颊。`,
    );
    era.printButton(`我哪里都不去，我在这里陪着你`, 1);
    era.printButton(`我现在就去给你找条毛巾擦一下，等会就回来`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      // TODO 获得【病娇】
      await chara_talk.say_and_wait(`嗯.....不要松开我的手，求求你了.......`);
      await era.printAndWait(
        `${chara_talk.sex}看起来终于稳定了一点，一直紧绷的身子也终于慢慢的放松下来，然后${chara_talk.sex}拉着你一起坐在了自己的床边。`,
      );
      await chara_talk.say_and_wait(
        `拖雷纳君......我真的很害怕......我当时就是这样握紧${chara_talk.sex}的手的........`,
      );
      await chara_talk.say_and_wait(
        `..我不知道自己是怎么撑过来的，车翻了......`,
      );
      await chara_talk.say_and_wait(
        `我们出不去.....一开始${chara_talk.sex}们还会和我说话安慰我握着我的手......`,
      );
      await chara_talk.say_and_wait(
        `但是.....但是......好安静，我.....我好像喝了什么东西.....慢慢就睡过去了......明明说好不放手的`,
      );
      await chara_talk.say_and_wait(
        `是我......是我放手了.......如果我没有放手的话......${chara_talk.sex}们说不定....说不定就。`,
      );
      await era.printAndWait(
        `那是${chara_talk.name}埋藏在心里面最深处的伤疤，在荒郊野外遭遇车祸，作为大人的司机当场横死，`,
      );
      await era.printAndWait(
        `留下车上的几个小${chara_talk.get_uma_sex_title()}被困在车子里面等待救援，但是救援来到的时间实在是太晚了，`,
      );
      await era.printAndWait(
        `晚到只有${chara_talk.name}成功活了下来，${chara_talk.sex}从来没有对任何人说过这件事，除了你。`,
      );
      era.printButton(
        `没事，握紧我的手，我不会松开的，我相信你也不会松开的，我们会一起走下去的。`,
        1,
      );
      await era.input();
      await chara_talk.say_and_wait(
        `嗯.....好......一辈子都不松开，说好的......我会拿到三冠的......我......我会走下去的。`,
      );
      await era.printAndWait(
        `${chara_talk.sex}的疲惫涌了出来，眼皮子开始打架，`,
      );
      await era.printAndWait(
        `但是即使是这样，${chara_talk.sex}也依旧没有松开握住你的那只手，`,
      );
      await era.printAndWait(
        `你只能握紧${chara_talk.sex}的手看着${chara_talk.sex}一点点进入梦乡，伴随着困意的袭来，你就这样陪${chara_talk.sex}度过了一个夜晚。`,
      );
      await era.printAndWait(
        `第二天清晨，你靠着墙壁坐在床边，惊觉自己居然这样睡在了${chara_talk.name}的房间里面，你抬头看过去。`,
      );
      await era.printAndWait(
        `${chara_talk.sex}早就已经不在床上了，回过头去，穿好了运动服的${chara_talk.name}从厕所里面走出来。`,
      );
      await chara_talk.say_and_wait(
        `拖雷纳君醒了啊？要去休息一下吗？我今天的训练计划您昨天就规划好了，请放心我不会偷懒的。`,
      );
      await era.printAndWait(
        `${chara_talk.sex}有些关切的揉了揉你的太阳穴，看着你腰酸背痛的样子有些担心。`,
      );
      await era.printAndWait(
        `然后将你送回了房间，在关门之前，你听到了一句奇怪的话。`,
      );
      await chara_talk.say_and_wait(
        `拖雷纳君，说好的哦......你不会放开你的手的，所以.....如果可以完成那件事的话，我就可以.......一辈子握住你的手了吧。`,
      );
      wait_flag =
        (sys_love_uma(400, 50) && sys_change_motivation(400, 1)) || wait_flag;
    } else {
      await era.printAndWait(
        `${chara_talk.sex}有些惊慌的伸手，但是在黑夜之中你并没有注意到这件事情，`,
      );
      await era.printAndWait(
        `转身快速的跑去找到了一条毛巾处理了${chara_talk.sex}因为扭伤而行动不便的脚。`,
      );
      await era.printAndWait(`${chara_talk.name}看起来有些烦躁而畏惧。`);
      await chara_talk.say_and_wait(`谢谢您，大晚上的麻烦您了。`);
      await era.printAndWait(
        `${chara_talk.sex}的声音听起来无比沙哑，${chara_talk.sex}拉住了你的衣袖，似乎是不希望你离开，于是你唱起了自己儿时听过的摇篮曲，将${chara_talk.sex}哄睡。`,
      );
      era.drawLine({ content: '第二天早上' });
      await chara_talk.say_and_wait(`昨天晚上.......让您见笑了，真抱歉。`);
      await era.printAndWait(
        `${chara_talk.sex}看起来眼睛有些红肿，显然昨天晚上没有休息好，在你将${chara_talk.sex}哄睡之后便回了自己的房间，也没有办法知道后面到底发生了什么。`,
      );
      wait_flag =
        (sys_love_uma(400, 50) && sys_change_motivation(400, -1)) || wait_flag;
    }
  }
  wait_flag && (await era.waitAnyKey());
};
