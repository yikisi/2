const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { race_enum } = require('#/data/race/race-const');

/** @type {Record<string,function(HookArg,*,EventObject):Promise>} */
const handlers = {};

/**
 * @param _
 * @param {{race:number,rank:number,relation_change:number,attr_change:number[],pt_change:number,love_change:number}} extra_flag
 */
handlers[event_hooks.race_start] = async (_, extra_flag) => {
  const edu_weeks =
      era.get('flag:当前回合数') - era.get('cflag:205:育成回合计时'),
    me = get_chara_talk(0),
    vp = get_chara_talk(205);
  let temp;
  if (extra_flag.race === race_enum.prix_lat && edu_weeks < 96) {
    await print_event_name('就连“暴君”都能粉碎的……', vp);
    await era.printAndWait(
      `${me.name} 清楚地记得接受 ${vp.name} 定下的胜负服样式时候的事情。`,
    );
    await era.printAndWait(
      `${vp.sex}参加G1比赛的时机比其他的${vp.get_uma_sex_title()}早，${
        vp.sex
      }的比赛服马上就要定做了，但只有一点是${vp.sex}绝对不会让步的。`,
    );
    era.printButton(`「这样真的可以吗？」`, 1);
    await era.input();
    await vp.say_and_wait(`这个好！`);
    await era.printAndWait(
      `然后在挺起胸膛的${vp.sex}面前，${me.name} 目不转睛地盯着文件。`,
    );
    await era.printAndWait(
      `${vp.sex}的话语有力地要求消除设计师提出的一些方案。`,
    );
    await era.printAndWait(`蓝色、白色、红色的三弦琴。`);
    await era.printAndWait(`这是众所周知的法国国旗的三种颜色。`);
    await era.printAndWait(`然后把它作为胜负服的底色。`);
    await era.printAndWait(`但是，同意那个提案的人正是……`);
    await era.printAndWait(`如果是${vp.sex}的话，无论什么东西都能背负吧。`);
    await era.printAndWait(
      `在休息室进行最后一次检查的 ${vp.name}，一边仔细确认没有一点破绽的胜负服，一边在镜子前认真地看着自己的身影。`,
    );
    await era.printAndWait(
      `今天的凯旋门赏不仅是英国和德国，连日本的${vp.get_uma_sex_title()}也参加了。`,
    );
    await era.printAndWait(
      `在这场备受国际瞩目的比赛中，${vp.sex}会穿上如国旗般色彩的决胜服，但${vp.sex}却丝毫不紧张。`,
    );
    await era.printAndWait(
      `对着坐在椅子上凝视着${vp.sex}准备模样的 ${me.name}，${vp.name} 转过身来。`,
    );
    await era.printAndWait(
      `对穿着和那天一样的大衣的 ${me.name} 来说，那时候是想象不到穿着胜负服的 ${vp.name} 的。`,
    );
    await vp.say_and_wait(`${sys_get_callname(205, 0)}。`);
    era.printButton(`「嗯。」`, 1);
    await era.input();
    await vp.say_and_wait(
      `谢谢你带领我走到这一步，让我参加了好几个G1，关心我，比任何人都认真。即便是面对凯旋门赏，面对着这么大的目标。`,
    );
    era.printButton(`「等结束了再说。」`, 1);
    await era.input();
    await era.printAndWait(`笑着说“是啊”的 ${vp.name} 没有任何窘迫的神色。`);
    await era.printAndWait(
      `在这个凯旋门赏的舞台前，${me.name} 才理解了${vp.sex}的特异才能。`,
    );
    await era.printAndWait(`那既不是身体的能力，也不是精神上的稳定性。`);
    await era.printAndWait(`与训练后可能掌握的那些不同，所谓天纵之才。`);
    await era.printAndWait(`对背负别人的期待没有任何压力。`);
    await era.printAndWait(
      `就像一个巨大的器皿，可以无限地将他人的信任和希望化为力量。`,
    );
    await era.printAndWait(
      `由于稀有的完成度和高度而产生的那个，切断了一切消极的可能性，使 ${vp.name} 前进。`,
    );
    await era.printAndWait(`${me.name} 不得不再一次问自己。`);
    await era.printAndWait(`为什么自己是${vp.sex}的训练员呢？`);
    await era.printAndWait(
      `把手放在门把手上的${vp.sex}，再回头看 ${me.name} 一次，然后说出那句话。`,
    );
    await era.printAndWait(`是愿望，还是诅咒呢。`);
    await era.printAndWait(`仿佛一切都在跃动。`);
    await vp.say_and_wait(`我会赢的，作为你的 ${vp.name}。`);
    era.printButton(`沉默不语`, 1);
    era.printButton(`「你会赢的。」（好感+15）`, 2);
    temp = await era.input();
    extra_flag.relation_change = temp === 1 ? 5 : 15;
  } else {
    await print_event_name('竞赛之前', vp);
    const arr = [
      '今日的胜利，将由我拿下，为了法国的大家',
      '荣光已在我手中。',
      '来一场激动人心的争斗吧！',
    ];
    if (era.get('love:205') >= 50) {
      arr.push(`今日的胜利，将由我拿下，为了 ${me.actual_name}`);
    }
    await vp.say_and_wait(get_random_entry(arr));
    extra_flag.relation_change = 10;
  }
};

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number}} extra_flag
 */
handlers[event_hooks.race_end] = async (_, extra_flag) => {
  const edu_weeks =
      era.get('flag:当前回合数') - era.get('cflag:205:育成回合计时'),
    me = get_chara_talk(0),
    montjeu = get_chara_talk(204),
    vp = get_chara_talk(205);
  if (
    extra_flag.race === race_enum.prix_lat &&
    edu_weeks < 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('最强。', vp);
    await era.printAndWait(
      `至今为止从未有过的充满自信的话，可 ${me.name} 怎么听都觉得空虚。`,
    );
    await era.printAndWait(
      `听到的欢呼声，就像远雷一样，即使距离遥远也震耳欲聋。`,
    );
    await era.printAndWait(
      `关于 ${vp.name} 的奔跑，需要 ${me.name} 修改的部分几乎不存在。`,
    );
    await era.printAndWait(`让这种罕见的才能开花的或许是 ${montjeu.name}。`);
    await era.printAndWait(
      `然后，就像让人追忆那个 ${montjeu.name} 的奔跑一样。`,
    );
    await era.printAndWait(
      `在先行对策的某一瞬间，跑在集团前方的 ${vp.name}，待到最后的直线的时候。`,
    );
    await era.printAndWait(`当隆尚观众的热情达到最高潮的时候。`);
    await era.printAndWait(
      `面对如此憧憬、日本曾数十年都没能获得的凯旋门赏，${me.name} 心中两种感情交织在一起。`,
    );
    await era.printAndWait(`一是对胜利的确信。`);
    await era.printAndWait(
      `${vp.name} 在之前的比赛中也以巧妙的位置感取得了胜利，${vp.sex}最擅长先行的策略，尤其是处在集团领先位置的时候。`,
    );
    await era.printAndWait(
      `如果有从那里开始的末脚，能追上不败${vp.get_teen_sex_title()}的${vp.get_uma_sex_title()}就不存在。`,
    );
    await era.printAndWait(
      `说白了，可以说到了这种环节，${vp.sex}的胜利是被确定的，就是有那么大的确信。`,
    );
    await era.printAndWait(`还有一个是败北的恐怖。`);
    await era.printAndWait(
      `但是，这并不意味着现在在眼前奔跑的 ${vp.name} 会输。`,
    );
    await era.printAndWait(
      `几年前，面对那位日本的怪鸟，那个 ${montjeu.name} 出现在好位置时，全身都冻住了的恐怖。`,
    );
    await era.printAndWait(
      `无法战胜${vp.sex}的绝望的闪回，与展现出完全相同姿态的 ${vp.name} 重叠在一起。`,
    );
    await era.printAndWait(`听到欢呼声，还很远。`);
    await era.printAndWait(
      `在最后一条直线上领先的 ${
        vp.name
      }，渐渐地拉开了后面的${vp.get_uma_sex_title()}。`,
    );
    await era.printAndWait(`就像被填满隆尚的声援所支持一样。`);
    await era.printAndWait(`到底，那个英姿有自己贡献的部分吗？`);
    await era.printAndWait(
      `${me.name} 抓住栅栏，稍微探出颤抖的身体，清楚地捕捉到${vp.sex}的侧脸。`,
    );
    await era.printAndWait(
      `一边滴着汗，一边跑过重马场最后100米的${vp.sex}，${me.name} 能做什么呢。`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(`发不出声音。`);
    await era.printAndWait(
      `${vp.sex}的胜利已经确定了，再也没有 ${me.name} 应该做的事了。`,
    );
    await era.printAndWait(
      `兴奋的欢呼声震耳欲聋，通过这种声响，${me.name} 清楚地理解了 ${vp.name} 踏上凯旋门赏终点线的瞬间。`,
    );

    await era.printAndWait(`\n ${me.name} 没能看到那个瞬间。`);

    await era.printAndWait(
      `\n被问到获得凯旋门赏的感想，手机通知画面上怒涛般涌来的短信，甚至都记不清对从赛场回来的 ${vp.name} 说了什么。`,
    );
    await era.printAndWait(
      `但是只有一件事，深深地刻在了 ${me.name} 的脑海里。`,
    );
    await era.printAndWait(
      `在凯旋门赏结束后的采访中，背对着葡萄酒红的背板的 ${vp.name} 抱着奖杯回答了别人的问题时说的话。`,
    );
    await era.printAndWait(
      `当被问到某件事的瞬间，恍惚的 ${me.name}，右手一下子被抓住了。`,
    );
    await vp.say_and_wait(`明年也和${me.sex}一起赢！`);
    await era.printAndWait(`为什么。`);
    await era.printAndWait(`为什么是自己。`);
    await era.printAndWait(`是什么，让空虚的自己，站在 ${vp.name} 的旁边。`);
    await era.printAndWait(
      `闪光灯的白色亮光很耀眼，可累积了疲劳的眼睛却什么都看不进。`,
    );
    extra_flag.relation_change = 30;
    extra_flag.love_change = 3;
  } else if (
    extra_flag.race === race_enum.prix_lat &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1 &&
    check_aim_race(era.get('cflag:205:育成成绩'), race_enum.prix_lat, 1, 1)
  ) {
    await print_event_name('迈向巅峰再制胜', vp);
    const montjeu = get_chara_talk(204);
    await era.printAndWait(`秋高气爽的天空在隆尚的正上方蔓延。`);
    await era.printAndWait(
      `可以说是与迎接来自全世界最高峰的${vp.get_uma_sex_title()}们的这场比赛相称的气候吧。`,
    );
    await era.printAndWait(`虽然穿着平时的大衣来了，但是有点热。`);
    await era.printAndWait(`在观众席的最前排握栅栏也是第二次。`);
    await era.printAndWait(
      `虽然感觉时间一眨眼就过去了，但是在再一次站在这里之前发生的事情，对 ${me.get_couple_title()} 来说都是必要的。`,
    );
    await era.printAndWait(`那些事情的分量是前所未有的。`);
    await era.printAndWait(
      `然后，成为 ${me.name} 应该在这里的理由，支撑着这一瞬间。`,
    );
    await montjeu.say_and_wait(`没想到这么快啊。`);
    await era.printAndWait(`站在马夫旁边的人物面向 ${me.name} 微笑。`);
    await era.printAndWait(
      `${me.name} 觉得终于可以向 ${montjeu.name} 展示当时的答案了。`,
    );
    await era.printAndWait(
      `${me.get_couple_title()} 一起盯着进入大门的 ${vp.name}。`,
    );
    await montjeu.say_and_wait(`战术呢？`);
    era.printButton(`「没有新奇的东西。」`, 1);
    await era.input();
    await montjeu.say_and_wait(
      `……你疯了吗？最清楚的人是你，你能理解${vp.sex}的特性，并不断突破妨碍，对吧？在此基础上，你必须采取任何该用的对策吧？`,
    );
    await era.printAndWait(
      `模仿 ${montjeu.name} 的${vp.sex}的跑法，很难改变。`,
    );
    await era.printAndWait(
      `已经察觉到，对 ${
        vp.name
      } 的适应是由全世界的${vp.get_uma_sex_title()}逐渐进行的。`,
    );
    await era.printAndWait(`即便如此，也没有什么能给予${vp.sex}的东西。`);
    era.printButton(`「尽管如此，我还是要让${vp.sex}赢。」`, 1);
    await era.input();
    await montjeu.say_and_wait(`……`);
    await era.printAndWait(
      `第二次凯旋门赏。复杂的坡度和深沉的草坪，2400米的舞台。`,
    );
    await era.printAndWait(
      `伴随着轰鸣声奔跑的${vp.sex}们和观众的热烈声援，其中也包含了不少对现在开始背负法国这个国家本身的 ${vp.name} 的期待。`,
    );
    await era.printAndWait(
      `今年以来没有赢过，也有很多人察觉到${vp.sex}的衰落。`,
    );
    await era.printAndWait(`但是，即使注意到这些，也为了祈愿的人们绝不停下。`);
    await era.printAndWait(`${vp.name} 踏上了这个世界上最长的两分半路程。`);
    await era.printAndWait(
      `看着穿过布洛涅森林的${vp.sex}们，抱起胳膊。${montjeu.name} 挺直腰板注视。`,
    );
    await montjeu.say_and_wait(
      `……我知道战略已经破裂了。即便如此，如果不采取先行对策，属于${vp.sex}的胜负就无法开始。`,
    );
    era.printButton(`「用力气挤开的话？」`, 1);
    await era.input();
    await montjeu.say_and_wait(
      `这是不可能的。本来就有很激烈的竞争，而且这次还背负着上一年度霸主的名号。现在的 ${vp.name}，恐怕完全被盯上了。`,
    );
    await era.printAndWait(
      `实际上，在混入领先集团的情况下，${vp.name} 虽然成功了，但能够往前走的路线被全部锁死。`,
    );
    await era.printAndWait(`确实被封锁了——在进入最终直线之前`);
    await era.printAndWait(`在拐角处拐弯，比赛来到了中盘。`);
    await era.printAndWait(
      `平时在先头集团前形成步调，但 ${vp.name} 以被挤到后方的形式追赶着集团。`,
    );
    era.printButton(`「${montjeu.name}。」`, 1);
    await era.input();
    await montjeu.say_and_wait(`怎么？`);
    era.printButton(`「你为什么擅长先行策略？」`, 1);
    await era.input();
    await era.printAndWait(
      `在视线转向的前方，${vp.sex}一边眺望着集体暂时凝固的状态下持续进行的比赛一边低声说。`,
    );
    await montjeu.say_and_wait(
      `虽然有符合我的体力分配和脚力的情况————是啊，我想最大的原因是站在了合适我的位置上。我不是很有耐心的类型，所以和必须等到最后一条直线的决胜很不投缘。`,
    );
    await era.printAndWait(`${montjeu.name} 坦然地凝视着前方。`);
    era.printButton(`说明`, 1);
    await era.input();
    await me.say_and_wait(
      `在赛场上心理压力是相当大的。${vp.name} 多少也有点心理上的强度，但很难说是有耐心的人。正因为如此，${vp.sex}一直在采取先行对策。`,
    );
    await montjeu.say_and_wait(`……一直，原来如此。`);
    await era.printAndWait(`${montjeu.name} 好像察觉到了什么。`);
    await era.printAndWait(
      `做那个的机会总是有的。但是，到最后为止，都找不到确切的理由下定决心。`,
    );
    await era.printAndWait(
      `正因为如此，即使是第一次的凯旋门赏也没有提案，今年以来的G1也没有采取那个战术。`,
    );
    await era.printAndWait(`但是，现在的话。现在正是该下定决心的时候。`);
    await era.printAndWait(`穿过伪终弯，走向最终直线。`);
    await era.printAndWait(
      `${vp.name} 变成了被针对的样子，至今还继续接受着包围网。`,
    );
    await era.printAndWait(`从栅栏探出身子。`);
    era.printButton(`「${vp.name}！！」`, 1);
    await era.input();
    await era.printAndWait(`${vp.name} 往 ${me.name} 这边稍微看了一下。`);
    await era.printAndWait(`在休息室的记忆，${me.name} 的作战计划已经传达了。`);
    await era.printAndWait(
      `但是为了不让${vp.sex}踌躇，从正面凝视${vp.sex}的眼睛传达。`,
    );
    await era.printAndWait(
      `在胜利和失败之前，${me.name} 希望一个叫 ${
        vp.name
      } 的${vp.get_uma_sex_title()}，实现自己的梦想。`,
    );
    era.printButton(`「让我看看。」`, 1);
    await era.input();
    await era.printAndWait(
      `用脚尖拍打地面的${vp.sex}，身穿三色决胜服的${vp.sex}，向 ${me.name} 伸出手指。`,
    );
    await vp.say_and_wait(`——为了，${sys_get_callname(205, 0)}。`);
    await era.printAndWait(
      `${vp.sex}背负着 ${me.name} 最后终于托付给${vp.sex}的期待，无论到哪里都会跑过去。`,
    );
    await era.printAndWait(
      `${me.name} 知道只要留下哪怕一个不安，${vp.sex}就会有压力。`,
    );
    await era.printAndWait(`正因为如此，才以完美的状态送出了${vp.sex}。`);
    await era.printAndWait(
      `虽然先行策略是 ${vp.name} 自己想要的，但在旁边的 ${me.name} 知道，${vp.sex}的脚本身是无论怎样的进攻都能发挥作用的强大。`,
    );
    await era.printAndWait(`正因为如此，${me.name} 才把这个托付给${vp.sex}。`);
    await era.printAndWait(
      `${
        vp.name
      } 包围网前方的${vp.get_uma_sex_title()}那里，仅在一瞬间放慢速度后退。在最终直线这一最后的进攻场所产生的意料之外的行动，让对手回头看向后方。`,
    );
    await era.printAndWait(
      `但是，${
        vp.name
      } 已经不在那里了。为了避开其他的${vp.get_uma_sex_title()}，跑到了最外面。`,
    );
    await era.printAndWait(`然后，被封锁行动而保存的体力在瞬间爆发。`);
    await era.printAndWait(
      `最后关头的集中力就像被磨砺的刀尖一样，抓住了领头者。`,
    );
    await era.printAndWait(`${vp.name} 从大外一口气冲上来。`);
    await era.printAndWait(
      `与到现在为止的跑法完全不同的战术，让观众的嘈杂变得巨大无比。`,
    );
    await montjeu.say_and_wait(`差……！？`);
    await era.printAndWait(`这是 ${vp.name} 凭借柔软性随时都能做到的战法。`);
    await era.printAndWait(
      `但是，如果考虑避开拦截网的话，只能采用暂时后退然后再启动的迂回方法。`,
    );
    await era.printAndWait(`利用对手在最终直线上，暴露出间隙的恐惧。`);
    await era.printAndWait(`${vp.name} 瞬间超越先行集团。`);
    await era.printAndWait(
      `而且完全无法预知的，除了${vp.sex}的先行策略以外的战术这一奇袭，引起了想要逃跑的对方的动摇。`,
    );
    await era.printAndWait(`应该完全封锁的对手，在最后的最后袭来。`);
    await era.printAndWait(
      `${vp.sex}甚至超越了 ${montjeu.name} 的影子，在赛道上跑向前方。`,
    );
    await era.printAndWait(
      `蓝色的斗篷飘扬，${me.name} 凝视着${vp.sex}的背影。`,
    );
    await era.printAndWait(`${vp.name} 将超过所有的预期，抛弃所有的过去。`);
    await era.printAndWait(
      `然后，背负着所有出生的希望，向人们无法企及的地方奔跑。`,
    );
    await era.printAndWait(`不管忘记了多少愿望，都一定会在某个地方记住的。`);
    await era.printAndWait(`一直在追求能改变这个世界的光辉的某人。`);
    await era.printAndWait(`然后最后，和${vp.sex}相遇了。`);
    await era.printAndWait(`能听到 ${vp.name} 的叫声。`);
    await era.printAndWait(
      `${
        vp.sex
      }用尽最后的力气，在剩下不到100米的最后一瞬间超过了领头的${vp.get_uma_sex_title()}，甚至感觉时间停止了。`,
    );
    await era.printAndWait(
      `${me.name} 觉得 ${me.get_couple_title()}  至今为止的一切都成熟了。`,
    );
    await era.printAndWait(
      `越过计分板的最后的脚步声，比什么都大，响彻这个舞台。`,
    );
    await era.printAndWait(
      `法国赛马史上时隔36年的伟业。实现凯旋门赏连霸的是一个无人捡到的${vp.get_uma_sex_title()}和一个无人捡到的异国训练员。`,
    );
    await era.printAndWait(
      `轻轻地吸气，呼出。满是草坪的味道，似乎滋润了人心。`,
    );
    await era.printAndWait(`如果不在这里的话，确实有看不到的东西。`);
    await era.printAndWait(
      `为此，${me.name} 甚至觉得一直从事着这个职业真的太好了。`,
    );
    await era.printAndWait(`在万雷的喝彩和祝福中。`);
    await montjeu.say_and_wait(`抬起头来。`);
    await era.printAndWait(
      `就如 ${montjeu.name} 说的那样，试着把视线往上看，和不知什么时候站在那里的 ${vp.name} 对视。`,
    );
    await era.printAndWait(
      `${vp.sex}一边喘着粗气，一边流汗————稍微调整了一下呼吸，接着，向 ${me.name} 伸出了右手。`,
    );
    await era.printAndWait(
      `就算 ${me.name} 一时不知道${vp.sex}的意图而感到困惑，${vp.name} 也无视这一点，从栅栏里探出。`,
    );
    await era.printAndWait(
      `在茫然的 ${me.name} 面前，${vp.name} 像个淘气的孩子一样微笑着，然后握住 ${me.name} 的手让 ${me.name} 越过栅栏。`,
    );
    await vp.say_and_wait(`好了，快点！`);
    era.printButton(`「稍微照顾一下老年人吧。」`, 1);
    await era.input();
    await vp.say_and_wait(`接下来是三连冠，没时间了！还有请和我交往！`);
    await era.printAndWait(
      `${me.name} 一边把散落的过去抛下，一边想起深深印在眼里的${vp.sex}的身影。`,
    );
    await era.printAndWait(`最后的直线，是像要将一切都甩开一样的光辉。`);
    await era.printAndWait(
      `而且总有一天，${vp.sex}会让人们看到连那个都重新粉刷过去的奔跑吧。`,
    );
    await era.printAndWait(`一定会带 ${me.name} 去往无法想象的地方。`);
    await era.printAndWait(
      `看着${vp.sex}浮现出的微笑，${me.name} 想这一定是自己现在的全部。`,
    );
    await era.printAndWait(`秋天的天空，无论在哪里都是清爽的。`);
    extra_flag.relation_change = 50;
    extra_flag.love_change = Math.max(50 - era.get('love:205'), 0);
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', vp);
    const arr = [
      '冲过终点！我赢啦～',
      'Merci beaucoup！（感谢大家）',
      '大家，感谢你们的祝福！',
      '这也是我为何能有此荣耀，请让我为你们献上最好的礼物。',
    ];
    await vp.say_and_wait(get_random_entry(arr));
    extra_flag.love_change = get_random_value(1, 3);
  } else {
    throw new Error();
  }
};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-205/week-start');

handlers[event_hooks.week_end] = require('#/event/edu/edu-events-205/week-end');

handlers[event_hooks.foreign_travel] = async (_, __, event_object) => {
  if (event_object?.arg === 47 + 35) {
    const me = get_chara_talk(0),
      montjeu = get_chara_talk(204),
      vp = get_chara_talk(205);
    await print_event_name('凡尔赛的玫瑰', vp);
    await era.printAndWait(
      `杜乐丽花园位于巴黎市中心。穿过香榭丽舍大道，在隔着协和广场和卢浮宫美术馆的巴黎市中心也是大型花园，作为观光名胜自不必说，作为市民休息的场所也受到了广泛的喜爱。`,
    );
    await era.printAndWait(
      `到了休息日的白天，带着家人的人也很多，到处都能看到孩子们跑来跑去的身影。`,
    );
    await era.printAndWait(`突然，${vp.name} 完全畏缩了。`);
    await era.printAndWait(
      `${
        me.name
      } 抬头看的时候，听到了向 ${me.get_couple_title()}  打招呼的声音。`,
    );
    await montjeu.say_and_wait('你过来了啊，不过我的话主要在他身上。');
    await era.printAndWait(
      `让人听出慎重和智慧的${montjeu.get_adult_sex_title()}的声音。`,
    );
    await era.printAndWait(
      `但是最初理解到的那个反射的记忆，是多次听到的${vp.sex}的胜者演唱会的声音。`,
    );
    await era.printAndWait(
      `回头一看，苗条的高个子${vp.get_uma_sex_title()}挽着胳膊，注视着 ${me.get_couple_title()}。`,
    );
    await era.printAndWait(`——传说。`);
    await vp.say_and_wait(`师傅！`);
    await era.printAndWait(`${vp.name} 眼睛闪闪发光地叫着目标人物。`);
    await era.printAndWait(`然后 ${me.name} 感到全身僵硬，一步也不能动。`);
    await era.printAndWait(`快速的心跳像警钟一样填满了脑海。`);
    await montjeu.say_and_wait(`那么。`);
    await era.printAndWait(`${montjeu.sex}看着 ${me.name} 左手拿着的纸袋。`);
    await era.printAndWait(
      `把 ${me.name} 邀请到树荫下的长椅上，苦笑着接受了特产。`,
    );
    await era.printAndWait(
      `${
        montjeu.name
      }。法国传奇般的${vp.get_uma_sex_title()}，凯旋门赏的冠军之一。`,
    );
    await montjeu.say_and_wait(
      `进入特雷森之后，我也在休息日对${vp.sex}进行了个人指导。我简单地告诉${vp.sex}，如果${vp.sex}的素养有技术的话，我就会教${vp.sex}。一眨眼就掌握了比赛的心得。`,
    );
    era.printButton(`「对我不满意吗？」`, 1);
    await era.input();
    await era.printAndWait(
      `${montjeu.name} 没有回答，而是目不转睛地盯着随风摇曳的树木。`,
    );
    await era.printAndWait(`在那对面可以看到被阳光照射的塞纳河的蓝色。`);
    await era.printAndWait(`到了了秋天，应该已经感受不到炎热。`);
    await era.printAndWait(
      `但从 ${me.name} 的太阳穴到脸颊，一滴汗慢慢地，像刻下它的存在一样流淌着。`,
    );
    await era.printAndWait(
      `彼此无言的时间，在 ${me.name} 注意到了凝视着自己侧脸的 ${montjeu.name} 时结束了。`,
    );
    await montjeu.say_and_wait(
      `我想亲自见面来决定是否不满。如果不实际看看对方，不可能明白。所以，现在才决定答案。`,
    );
    await era.printAndWait(
      `${montjeu.name} 将那锐利的双眸转向 ${me.name}，眉间皱着皱纹，用语言追击。`,
    );
    await montjeu.say_and_wait(`我不满意。`);
    era.printButton(`「……」`, 1);
    await era.input();
    await era.printAndWait(`${montjeu.name} 继续说了下去。`);
    await montjeu.say_and_wait(
      `之前你的实绩有一定的说服力。好的地方就那样，坏的地方也能改正。即使最大限度地发挥${vp.get_uma_sex_title()}素质的做法结果看起来是放任主义，我也能理解这是一种育成手段。如果是负责完成度高的 ${
        vp.name
      }，就会越来越有说服力。`,
    );
    await era.printAndWait(`看起来是这样的吧。`);
    await montjeu.say_and_wait(
      `但是，现在你的做法就只是放任不管。你只是放弃了自己能做的事，放弃了 ${vp.name} 的完全性的努力，你只是个局外人。`,
    );
    await era.printAndWait(`那么，怎么办呢。`);
    await era.printAndWait(
      `到现在为止，都相信自己的技术，信赖自己负责的${vp.get_uma_sex_title()}。那么，一位完美的${vp.get_uma_sex_title()}，残缺的自己该如何触碰？`,
    );
    await era.printAndWait(`${me.name} 该对${vp.sex}怎么想？`);
    await era.printAndWait(`${montjeu.name} 继续。`);
    await montjeu.say_and_wait(
      `凯旋门赏是一堵高墙，即使是法国的天才，也不是那么容易就能拿下的。`,
    );
    era.printButton(`「意思是说，照现在的状态是赢不了的？」`, 1);
    await era.input();
    await montjeu.say_and_wait(`是啊。`);
    await era.printAndWait(
      `远处的 ${vp.name} 在田野上奔跑。像跟在后面一样，不知什么时候增加了的少年少女也在跑。`,
    );
    await era.printAndWait(`${vp.sex}那样做，谁都会着迷吧。`);
    await era.printAndWait(
      `然后把那些毫无困难地变成力量，用天才的能力也能赢比赛吧。`,
    );
    await era.printAndWait(
      `就像是肯定心中嘟哝的那句话一样，曾经的传说开口了。`,
    );
    await montjeu.say_and_wait(
      `${vp.sex}会赢的。一定是没有你也能赢的强大嫩芽。`,
    );
    era.printButton(`「我知道。」`, 1);
    await era.input();
    await montjeu.say_and_wait(`正因为如此，我必须要问。`);
    await era.printAndWait(
      `${montjeu.name} 站起来，瞪着 ${me.name} 的眼睛虽然有点冷，但绝对不是在看不起人。`,
    );
    await era.printAndWait(
      `被直截了当地指出缺点的公平的舞台，似乎紧紧地握住了 ${me.name} 的心。`,
    );
    await era.printAndWait(`有种把至今为止避开的东西推到眼前的感觉。`);
    await montjeu.say_and_wait(`一个人也能赢的 ${vp.name} 旁边，有你的理由。`);
    await era.printAndWait(`${vp.name} 从远处挥手致意。`);
    await era.printAndWait(
      `${montjeu.name} 温柔地微笑着向${vp.sex}招手，而 ${me.name} 只能在长椅上垂下肩膀，目不转睛地盯着${vp.sex}。`,
    );
    await montjeu.say_and_wait(
      `你应该在凯旋门前给出答案，${me.name}，否则你会夺走${vp.sex}的将来。`,
    );
    await era.printAndWait(`很多孩子都在追着又跑出去的 ${vp.name} 的背影。`);
    await era.printAndWait(`它变得朦胧，消失在森林中。`);
    return true;
  }
  throw new Error();
};

handlers[event_hooks.out_start] = async (hook, __, event_object) => {
  if (event_object?.arg === 95 + 25) {
    if (era.get('flag:当前互动角色') !== 0) {
      add_event(hook.hook, event_object);
      return false;
    }
    const me = get_chara_talk(0),
      vp = get_chara_talk(205);
    await print_event_name('消耗殆尽', vp);
    await era.printAndWait(
      `想着清楚的过去和渗透的今后的事情，马上就到达了目的地。`,
    );
    await era.printAndWait(`走进那家茶店，店主看到 ${me.name} 时又抬起眉头。`);
    await say_by_passer_by_and_wait('茶叶店店主', '嗯？这次是一个人吗？');
    era.printButton(`「别在意。」`, 1);
    await era.input();
    await era.printAndWait(
      `瞥了一眼店内后，${me.name} 把脚转向${vp.sex}津津有味地盯着看过的花茶专柜。`,
    );
    await era.printAndWait(
      `和那天一样的阵容丰富，排列着苹果、杏子、红莓苔等华丽水果的插图。`,
    );
    await era.printAndWait(
      `按照那个顺序到达L（lemon）的时候，${me.name} 的手指指向了空架子。`,
    );
    await era.printAndWait(`从弯弯曲曲的货架中走出来，把目光转向店主。`);
    era.printButton(`「……没有柠檬香味的吗？」`, 1);
    await era.input();
    await say_by_passer_by_and_wait(
      '茶叶店店主',
      '啊，这个季节的生产数量不好啊。因为是法国的品牌，所以本来流通数量就很少。到有一些交了定金的。',
    );
    await era.printAndWait(
      `他说的对。这个东西除了这个男人的店以外没有找到过。`,
    );
    era.printButton(`「预计到货？」`, 1);
    await era.input();
    await say_by_passer_by_and_wait(
      '茶叶店店主',
      '暂时没有，批发商好像也没有库存。',
    );
    era.printButton(`「是吗——不，谢谢。」`, 1);
    await era.input();
    await era.printAndWait(`${me.name} 想就这样离开店里，但是被一句话留住了。`);
    await say_by_passer_by_and_wait('茶叶店店主', `${vp.sex}还好吗？`);
    await era.printAndWait(`既不能肯定也不能否定。`);
    await era.printAndWait(
      `${vp.name} 对于G1的惜败其实在想什么，${me.name} 似乎不太明白。`,
    );
    await me.say_and_wait('不能发挥作用的训练员。', true);
    await era.printAndWait(`男人在收银台上扭扭捏捏的。`);
    await say_by_passer_by_and_wait(
      '茶叶店店主',
      '你还好，对我来说，我更担心那个孩子的样子。我会问问同行有没有那种茶叶。',
    );
    era.printButton(`「还记得吗？」`, 1);
    await era.input();
    await era.printAndWait(
      `应该没有向媒体透露过那个茶叶是 ${vp.name} 的喜好，但是男人苦笑着说。`,
    );
    await say_by_passer_by_and_wait(
      '茶叶店店主',
      '你经常来我家，怎么可能忘记你带来的客户呢？',
    );
    era.printButton(`「真是的……」`, 1);
    await era.input();
    await say_by_passer_by_and_wait(
      '茶叶店店主',
      `嗯，也有因为我是${vp.sex}的粉丝……`,
    );
    await era.printAndWait(
      `男人一边敲着手机的画面，一边用一种奇怪的表情嘟囔着。`,
    );
    await era.printAndWait(
      `${vp.name} 背负着许多人的期望。也有为了做力所能及的事而劳苦的人。`,
    );
    await era.printAndWait(`再一次，${me.name} 不得不问。`);
    await era.printAndWait(`为什么自己是 ${vp.name} 的训练员呢？`);
    await era.printAndWait(`${me.name} 不清楚该怎么走下去。`);
    new TreveEduMarks().tea = 0;
    new EventMarks(0).sub(event_hooks.out_start);
    return true;
  }
};

handlers[event_hooks.crazy_fan_end] = async () => {
  const me = get_chara_talk(0),
    montjeu = get_chara_talk(204),
    vp = get_chara_talk(205);
  await era.printAndWait([
    '终于，以某一刻为分界线，',
    me.get_colored_name(),
    ' 与 ',
    vp.get_colored_name(),
    ' 的联系完全切断了。',
  ]);
  await era.printAndWait('担当不想见训练员，训练员不敢见担当。');
  await era.printAndWait([
    '然而，似乎是考虑到各方面的影响，',
    me.get_colored_name(),
    ' 与 ',
    vp.get_colored_name(),
    ' 的契约并没有谁来要求终止。',
  ]);
  await era.printAndWait([
    '似乎是 ',
    montjeu.get_colored_name(),
    ' 再一次扛起了照顾法国公主的重担。',
  ]);
  await era.printAndWait([
    { isBr: true },
    '因为公事偶然与 ',
    montjeu.get_colored_name(),
    ' 碰面的时候，',
    me.get_colored_name(),
    ' 受到的并非责难，而是',
  ]);
  await era.printAndWait('——同情的目光。');
  await era.printAndWait([
    me.get_colored_name(),
    ' 只得草草地打过招呼后离去。',
  ]);
  await era.printAndWait('是因为对这没有头绪的同情感到不安，还是在害怕……');
  await era.printAndWait('和某一对记者与公主的结局相似又截然不同。');
  await era.printAndWait([
    me.get_colored_name(),
    ' 与 ',
    vp.get_colored_name(),
    ' 再也没有见面。',
  ]);
  await print_event_name('从未熟悉的异国公主', vp);
};

/**
 * 金星公园的育成事件
 *
 * @author 梦露
 * @author 黑奴队长（改编）
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
