const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const chara_talk = new CharaTalk(30);
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { gacha } = require('#/utils/list-utils');
const { attr_enum } = require('#/data/train-const');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const your_name = era.get('callname:0:-2');
/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const me = get_chara_talk(0),
    chara13_talk = get_chara_talk(13), // 目白麦昆
    chara47_talk = get_chara_talk(47), // 荒漠英雄
    chara26_talk = get_chara_talk(26), // 美浦波旁
    chara52_talk = get_chara_talk(52), // 春乌拉拉
    edu_weeks = era.get('cflag:30:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('迈出改变的第一步', chara_talk);
    await chara_talk.say_and_wait(
      `${chara_talk.name}……跑完了哦！赢下来出道战了哦！`,
    );
    era.printButton(`${chara_talk.name}很努力了呢。`, 1);
    era.printButton(`摸摸${chara_talk.name}的脑袋。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      sys_like_chara(30, 0, 5);
    } else {
      sys_love_uma(30, 1);
    }
    await chara_talk.say_and_wait(`哇……谢谢！哥、哥……`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}、大人……`,
    );
    await chara_talk.say_and_wait(
      `诶……嘿嘿。之后也，请、多多指教${chara_talk.name}！`,
    );
    await chara_talk.say_and_wait(
      `——就这样，${CharaTalk.me.actual_name}和${chara_talk.name}一起，迈出了最开始的一步！`,
    );
    era.drawLine({ content: '在那之后过了数天……' });
    await era.printAndWait(
      `这一天，${CharaTalk.me.actual_name}再次和${chara_talk.name}来到了赛场。`,
    );
    await chara_talk.say_and_wait(`哇……人好多啊。简直就像G1一样。`);
    await chara_talk.say_and_wait(
      `……咦？但是今天应该，既不是G2也不是G3才对啊……？`,
    );
    await era.printAndWait(
      `实况：登场了，美浦波旁！来到了【Make Debut】的赛场！！`,
    );
    await chara_talk.say_and_wait(`……波旁、同学。`);
    await era.printAndWait(`不断缩小差距，一口气冲到最前面！`);
    await era.printAndWait(`速度丝毫不减，继续向前冲刺！`);
    await era.printAndWait(`美浦波旁以这个势头保持着第一！冲过了——终点！`);
    await era.printAndWait(`啊~来年的经典赛，很期待哦。`);
    await era.printAndWait(`我，绝对会为波旁应援的！`);
    await era.printAndWait(
      `嗯嗯！未来的三冠赛${chara_talk.get_uma_sex_title()}！`,
    );
    await era.printAndWait(`波旁的比赛，肯定会去看的！`);
    await chara_talk.say_and_wait(`……看到波旁同学的奔跑，大家都露出了笑容吧。`);
    await chara_talk.say_and_wait(`${chara_talk.name}也，能做到这个样子吗？`);
    era.printButton(`能做到的！`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `欸？${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！？`,
    );
    era.printButton(`${chara_talk.name}肯定能做到的！`, 1);
    await era.input();
    await chara_talk.say_and_wait(`！`);
    await chara_talk.say_and_wait(
      `…欸嘿嘿。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人的声音简直像魔法一样。`,
    );
    await chara_talk.say_and_wait(
      `即使是绝对做不到的事情。这样想着，好像也能够办得到。`,
    );
    era.printButton(`${chara_talk.name}也去参加经典赛怎么样？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`……经典赛。`);
    await era.printAndWait(
      `——前去参加经典赛，就意味着要和同年出道的赛${chara_talk.get_uma_sex_title()}们竞争。`,
    );
    await era.printAndWait(`${chara_talk.name}和美浦波旁，在同一个舞台上——`);
    await chara_talk.say_and_wait(`！`);
    era.printButton(`是${chara_talk.name}的话，肯定能。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`……！`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人一直都是这么相信着${
        chara_talk.name
      }啊。……`,
    );
    await chara_talk.say_and_wait(`我知道了。就这么做吧。`);
    await chara_talk.say_and_wait(
      `虽然有点害怕，但已经不想再做一个无法改变的坏孩子了。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.name}……会努力的，会追上…追上波旁同学！`,
    );
    await era.printAndWait(
      `${your_name}和${chara_talk.name}约好了要去参加经典赛。`,
    );
    await era.printAndWait(`首先是【春季锦标】。`);
    await era.printAndWait(`作为三冠路线上的前哨站，决定朝向那个方向而努力。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 30) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('迈向未来不停下脚步(胜利)', chara_talk);
    await chara_talk.say_and_wait(`哈啊……哈啊……！`);
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(`但是，暴露出的问题也很多呢。`);
    await chara_talk.say_and_wait(`${chara_talk.name}，要更努力一点才行！`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 35) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('迈向未来不停下脚步(入着)', chara_talk);
    await chara_talk.say_and_wait(`哈啊……哈啊……！`);
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(`但是，暴露出的问题也很多呢。`);
    await chara_talk.say_and_wait(`${chara_talk.name}，要更努力一点才行！`);
    era.drawLine({ content: '此时在地下通道的另一处' });
    await era.printAndWait(`记者A：「波旁选手！波旁选手！！」`);
    await chara26_talk.say_and_wait(`……有什么事吗？`);
    await era.printAndWait(
      `记者A：「不愧是【栗毛的超特急】！这次的比赛也展示出那个称号的一角呢！」`,
    );
    await era.printAndWait(
      `记者A：「大家都在期待着呢！波旁选手达成三冠的那个辉煌瞬间！」`,
    );
    await chara26_talk.say_and_wait(`应援，十分感谢。那就告辞了。`);
    await era.printAndWait(`记者A：「啊，等等，等一下！至少再多一句！」`);
    await era.printAndWait(`记者A：「请允许我再问一个问题！」`);
    await era.printAndWait(
      `记者A：「就是说……这次的比赛里。波旁的劲敌会是哪一位呢？」`,
    );
    await chara26_talk.say_and_wait(`劲敌？`);
    await chara26_talk.say_and_wait(`判断并不需要那样的存在。`);
    await chara26_talk.say_and_wait(
      `要达成第一，对手肯定会在那里的。没有当成是劲敌的必要。`,
    );
    await chara_talk.say_and_wait(`……好厉害。`);
    await chara_talk.say_and_wait(`既自信还很有实力，在自己的道路上前进……`);
    era.printButton(`${chara_talk.name}也要加油啊。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await era.printAndWait(`嗯！`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 35) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('追上了', chara_talk);
    await chara_talk.say_and_wait(`哈啊…哈啊……！！`);
    era.printButton(`没事吧！？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`没问题，没问题的。`);
    await chara_talk.say_and_wait(
      `比起这个，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人，看到了吗？`,
    );
    await chara_talk.say_and_wait(`${chara_talk.name}，追上了哦！`);
    await chara_talk.say_and_wait(`欸嘿嘿，做、到了——……`);
    await era.printAndWait(`${chara_talk.name}倒下了。`);
    await chara_talk.say_and_wait(`呼……呼……`);
    await era.printAndWait(`看来是之前用尽全力，一直紧绷的弦突然放松了下来。`);
    await era.printAndWait(
      `……${your_name}稍微让${chara_talk.sex}靠着肩膀，让${chara_talk.name}好好休息。这么想着开始迈步的时候…`,
    );
    await chara26_talk.say_and_wait(`——${chara_talk.sex}的发言，无法理解。`);
    await chara26_talk.say_and_wait(`如果是这次的比赛内容的话。`);
    await chara26_talk.say_and_wait(
      `${chara_talk.sex}应该说「战胜了波旁」才对。`,
    );
    await chara26_talk.say_and_wait(`对于这孩子来说，这个更重要吧。`);
    era.printButton(`${chara_talk.name}也要加油啊。`, 1);
    await era.input();
    await chara26_talk.say_and_wait(`应援，十分感谢。那就告辞了。`);
    await chara_talk.say_and_wait(`……理解不能。`);
    era.drawLine();
    await chara_talk.say_and_wait(
      `对、对不起！${chara_talk.name}又，给${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人添麻烦了……！`,
    );
    era.printButton(`因为累了所以没办法吧。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`但是……`);
    era.printButton(`不如来考虑下一场比赛吧。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`欸？……下一场？`);
    era.printButton(`经典赛还没有结束哦。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `……说的是呢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(
      `只是侥幸赢下这次的比赛而已，这样就满足了的话，可不行呢。`,
    );
    await era.printAndWait(
      `三冠路线上最后的比赛，草地3000米长距离的【菊花赏】。`,
    );
    await era.printAndWait(
      `对于作为Stayer的${chara_talk.name}而言，这是迄今为止最关键的决胜所！`,
    );
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('遥远的背影', chara_talk);
    await chara_talk.say_and_wait(`${chara_talk.name}，还是太没用了…`);
    await chara_talk.say_and_wait(`要，更、努力…`);
    await era.printAndWait(`（啪嗒……）`);
    await era.printAndWait(
      `${your_name}撑着${chara_talk.name}，为了带${chara_talk.sex}回去稍作休息而踏出步伐。`,
    );
    await era.printAndWait(`（啪嗒……）`);
    await chara_talk.say_and_wait(`${chara_talk.name}真是太没用了…`);
    await chara_talk.say_and_wait(`下一次，一定会比现在更努力。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 2));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('平静的宣言', chara_talk);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。${chara_talk.name}、${
        chara_talk.name
      }……！`,
    );
    await me.say_and_wait(`${chara_talk.name}做到了。`);
    await chara_talk.say_and_wait(`呜……嗯……！`);
    await chara_talk.say_and_wait(
      `${chara_talk.name}、做到了……！${chara_talk.name}也能够做到呢……！`,
    );
    await chara26_talk.say_and_wait(`…${chara_talk.name}同学。`);
    await chara_talk.say_and_wait(`哇啊啊！波旁同学！？`);
    await chara_talk.say_and_wait(`啊、啊啊。这个、这次的比赛…`);
    await chara26_talk.say_and_wait(`——嗯、「追上了」呢。`);
    await chara_talk.say_and_wait(`……唔。`);
    await chara26_talk.say_and_wait(`其实，我无法理解。`);
    await chara26_talk.say_and_wait(
      `每次都在说「追上」的${chara_talk.name}同学。`,
    );
    await chara26_talk.say_and_wait(`比赛中存在的要么是胜利，要么是失败。`);
    await chara26_talk.say_and_wait(`不存在「追上」这种概念。但是——`);
    await chara26_talk.say_and_wait(
      `现在，我感到很不甘心。没有拿下这次的【菊花赏】之类的，没能赢之类的。`,
    );
    await chara26_talk.say_and_wait(`……被${your_name}给追上了呢。`);
    await chara26_talk.say_and_wait(`${chara_talk.name}同学，听见了吗？`);
    await chara_talk.say_and_wait(`……嗯。`);
    await era.printAndWait(`观众A：「真是精彩的比赛啊！${chara_talk.name}！」`);
    await era.printAndWait(
      `观众B：「${your_name}才是今年的主角！明年我也很期待！！」`,
    );
    await chara_talk.say_and_wait(`……不会吧……`);
    await chara_talk.say_and_wait(`在为${chara_talk.name}鼓掌、吗？`);
    await chara_talk.say_and_wait(`但是，${chara_talk.name}只是…`);
    await chara26_talk.say_and_wait(`不对。观众们是认可的。`);
    await chara26_talk.say_and_wait(
      `${chara_talk.name}是今年的经典赛中名副其实的胜利者。`,
    );
    await chara26_talk.say_and_wait(`我也认同他们的观点。`);
    await chara26_talk.say_and_wait(`下一次，我一定不会再输给${your_name}。`);
    await chara26_talk.say_and_wait(`——作为「对手」。`);
    await chara_talk.say_and_wait(`……对，手。`);
    await chara26_talk.say_and_wait(
      `${chara_talk.name}同学，${your_name}要接下我对${your_name}的挑战吗？`,
    );
    await chara_talk.say_and_wait(`……！${chara_talk.name}……！`);
    await chara_talk.say_and_wait(
      `${chara_talk.name}也不想输！下一次也要……战胜所有人！`,
    );
    await era.printAndWait(`——${chara_talk.name}的声音是能传递出去的。`);
    await era.printAndWait(`这是在隔壁、甚至在整个会场都能听见的。`);
    await era.printAndWait(`大声的、响亮的宣言。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('燃烧的心', chara_talk);
    await chara_talk.say_and_wait(`只差一点了呢。`);
    await chara_talk.say_and_wait(`只差一点就可以追上了，但还是不够！`);
    await chara_talk.say_and_wait(
      `${chara_talk.name}，不想输！下次一定会赢的。`,
    );
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 2));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.nikk_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('花瓣、纷飞', chara_talk);
    await chara_talk.say_and_wait(
      `欸嘿嘿……怎么样，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.name}的奔跑，有好好地在成长吗？`,
    );
    await me.say_and_wait(`嗯，跑得很棒哦！`);
    await chara_talk.say_and_wait(`嗯！那下次也……`);
    await chara47_talk.say_and_wait(`……辛、辛苦了！`);
    await chara_talk.say_and_wait(`！`);
    await chara47_talk.say_and_wait(
      `今、今天只有……我一个人，到这里给${chara_talk.name}应援来了。`,
    );
    await chara_talk.say_and_wait(`啊！谢谢！那个、今天……`);
    await chara47_talk.say_and_wait(`跑得太棒了！`);
    await chara47_talk.say_and_wait(
      `朝着一个目标不断迈进……那个姿态就像是引导民众的女主角一样！`,
    );
    await chara47_talk.say_and_wait(`总有一天会被后世写上书本来讲述的吧……！`);
    await chara_talk.say_and_wait(`呜啊啊啊……夸得太过分了啊……`);
    await chara47_talk.say_and_wait(`啊，对不起……不知不觉就……`);
    await chara_talk.say_and_wait(`没有哦，抱歉。但是，谢谢${your_name}。`);
    await chara_talk.say_and_wait(
      `虽然有点不好意思……${chara_talk.name}，很高兴哦。`,
    );
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 4).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(45, change_list, 30) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('沐浴在光芒中', chara_talk);
    await chara_talk.say_and_wait(`哈……啊、哈啊……！！`);
    await me.say_and_wait(`很努力了呢！`);
    await chara_talk.say_and_wait(`嗯！做到了哦！${chara_talk.name}——`);
    await chara52_talk.say_and_wait(`${chara_talk.name}——酱！好——厉害！！`);
    await chara_talk.say_and_wait(`乌拉拉酱！？`);
    await chara52_talk.say_and_wait(`欸嘿嘿~来咯~`);
    await chara47_talk.say_and_wait(`不对！快回来！这里才是哦！`);
    await chara47_talk.say_and_wait(`虽然作为冠军的关系者过来了……`);
    await chara26_talk.say_and_wait(
      `那我也没关系的吧？我们就是${chara_talk.name}的相关人员。`,
    );
    await chara26_talk.say_and_wait(
      `跑得很棒，${chara_talk.name}。首先恭喜${your_name}。`,
    );
    await chara26_talk.say_and_wait(
      `比赛中的${your_name}，和荒漠英雄起的二名称号「执念之鬼」很相称呢。`,
    );
    await chara_talk.say_and_wait(`……执念之鬼？`);
    await chara47_talk.say_and_wait(`哇、哇！波旁同学！！`);
    await chara47_talk.say_and_wait(`这个称号要保密才行的啊，我不是说过了吗！`);
    await chara_talk.say_and_wait(`…呼呼。`);
    await chara_talk.say_and_wait(
      `欸嘿嘿……${chara_talk.name}，好好地回应了大家呢，在比赛里。`,
    );
    await me.say_and_wait(`让大家都露出了笑容呢。`);
    await chara_talk.say_and_wait(`嗯！`);
    await chara52_talk.say_and_wait(
      `啊哈哈哈，${chara_talk.name}酱也笑眯眯的！`,
    );
    await chara52_talk.say_and_wait(`下一次的比赛也要有笑容哦！`);
    await chara52_talk.say_and_wait(
      `我们也会用力地挥手，来给${chara_talk.name}酱应援的！`,
    );
    await chara_talk.say_and_wait(`……是啊，乌拉拉酱。`);
    await chara_talk.say_and_wait(`我也会向着大家……挥手的哦。`);
    await chara_talk.say_and_wait(`大大的……让大家都能看到！`);
    era.drawLine({ content: '胜者舞台幕后' });
    await chara_talk.say_and_wait(`……话是这么说，果然，还是会紧张的啊…`);
    await chara_talk.say_and_wait(
      `在【天皇赏（春）】的胜者舞台上是中心什么的…`,
    );
    await me.say_and_wait(`挺起胸膛。`);
    await chara13_talk.say_and_wait(
      `说的没错。${chara_talk.name}可是战胜了我啊，所以要更自信一点。`,
    );
    await chara_talk.say_and_wait(`啊、麦昆同学！！`);
    await chara13_talk.say_and_wait(`的确这个舞台很特别。`);
    await chara13_talk.say_and_wait(`所以站在这个舞台上的我们就得专业才是。`);
    await chara13_talk.say_and_wait(
      `不该向那些期待现场演出的人们表达感激之情吗？`,
    );
    await chara_talk.say_and_wait(`没错。`);
    await chara13_talk.say_and_wait(`所以，不要害怕舞台。`);
    await chara13_talk.say_and_wait(`回应那些期待和想法，在舞台上闪耀。`);
    await chara13_talk.say_and_wait(`这是在赛场上奔跑的我们的义务啊。`);
    await era.printAndWait(`之后目白麦昆优雅而高贵地走向舞台。`);
    await me.say_and_wait(`学到了很多呢。`);
    await chara_talk.say_and_wait(`嗯，果然是位很棒的人呢。`);
    await chara_talk.say_and_wait(
      `${chara_talk.name}也必须回应那些期待和想法。`,
    );
    await chara_talk.say_and_wait(`怀着对大家的感谢之情。`);
    await chara_talk.say_and_wait(`……好！${chara_talk.name}，出发了！！`);
    await era.printAndWait(
      `${chara_talk.name}向着闪耀着光辉的舞台，迈出了${chara_talk.sex}前进的脚步。`,
    );
    era.drawLine({ content: '当天晚上' });
    await chara_talk.say_and_wait(`那个……一回来就这样说的话，虽然有点奇怪……`);
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！${
        chara_talk.name
      }还有下一个想做的事情。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.name}，想更好地回应期待着自己的人们。`,
    );
    await chara_talk.say_and_wait(`所以，下一次想要参加【宝塚纪念】。`);
    await chara_talk.say_and_wait(
      `如果，大家都说${chara_talk.name}可以去的话……！`,
    );
    await era.printAndWait(
      `——【宝塚纪念】，那是只有受到粉丝喜爱的赛${chara_talk.get_uma_sex_title()}才能登场的舞台。`,
    );
    await era.printAndWait(`……最开始在学校外面独自哭泣的${chara_talk.sex}。`);
    await era.printAndWait(`现在也拥有这个资格了呢。`);
    await me.say_and_wait(`下次就去参加【宝塚纪念】吧！`);
    await chara_talk.say_and_wait(`嗯！${chara_talk.name}会继续加油的。`);
    await chara_talk.say_and_wait(`然后告诉大家——`);
    await chara_talk.say_and_wait(`非常感谢。`);
    const change_list = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 3));
    get_attr_and_print_in_event(30, change_list, 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('盛开的、蓝', chara_talk);
    await chara_talk.say_and_wait(`嗯！${chara_talk.name}会继续加油的。`);
    await me.say_and_wait(`恭喜！`);
    await chara_talk.say_and_wait(
      `…欸嘿嘿。谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。`,
    );
    await chara_talk.say_and_wait(
      `那个，${chara_talk.name}，在跑的时候也听见了。`,
    );
    await chara_talk.say_and_wait(`大家的声音。`);
    await chara_talk.say_and_wait(
      `……嘿嘿，不行啊。${chara_talk.name}明明说好了要让大家露出笑容的。`,
    );
    await chara_talk.say_and_wait(`只有${chara_talk.name}感到高兴什么的。`);
    await chara_talk.say_and_wait(`真的觉得好幸福…`);
    await chara_talk.say_and_wait(`能够跑宝塚纪念真是太好了。`);
    await me.say_and_wait(`大家也是同样地想法。`);
    await chara_talk.say_and_wait(`大家？`);
    await era.printAndWait(`观众A：「${chara_talk.name}——！！谢谢——！！」`);
    await era.printAndWait(`观众A：今「年的宝塚纪念，简直是最棒的哦——！！」`);
    await chara_talk.say_and_wait(`好厉害……笑容，有好多。`);
    await me.say_and_wait(`是${your_name}守护了大家的笑容呢。`);
    await chara_talk.say_and_wait(`是${chara_talk.name}，吗？`);
    await chara_talk.say_and_wait(`是这样吗？${chara_talk.name}也……做到了。`);
    await chara_talk.say_and_wait(`带给大家幸福，做到了呢！！`);
    await me.say_and_wait(`谢谢${your_name}，${chara_talk.name}。`);
    await chara_talk.say_and_wait(`呜哇啊啊啊——`);
    await era.printAndWait(
      `一边颤抖着肩膀一边哭起来的${chara_talk.sex}，得到了观众们温暖的掌声。`,
    );
    era.drawLine({ content: '到了夜晚' });
    await chara_talk.say_and_wait(`嘶……哈……`);
    await me.say_and_wait(`已经不再哭了呢。`);
    await chara_talk.say_and_wait(`嘿嘿，不能一直哭啊。`);
    await chara_talk.say_and_wait(
      `因为要在这个舞台上，好好地将笑容传递给大家。`,
    );
    await chara_talk.say_and_wait(
      `那${chara_talk.name}要去登台了。到大家那里去。`,
    );
    await chara_talk.say_and_wait(`一路顺风。`);
    await chara_talk.say_and_wait(`嗯！`);
    await era.printAndWait(
      `这一天，${chara_talk.name}将最好的live献给了观众。`,
    );
    await era.printAndWait(`第二天，报纸的头条刊登了${chara_talk.sex}的特写。`);
    await era.printAndWait(
      `——在坡道的草地上绽放的主角，美丽的蔷薇：${chara_talk.name}。`,
    );
    era.drawLine({ content: '那之后' });
    await chara_talk.say_and_wait(
      `${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！${
        chara_talk.name
      }想去参加【有马纪念】！！`,
    );
    await me.say_and_wait(`已经定好了新的目标吗？`);
    await chara_talk.say_and_wait(`嗯！因为，那个！下一次的有马纪念。`);
    await chara_talk.say_and_wait(`波旁同学和麦昆同学都会参加哦！！`);
    await chara_talk.say_and_wait(`所以，${chara_talk.name}也要参赛！`);
    await chara_talk.say_and_wait(`想要进行「最棒的比赛」！！`);
    await me.say_and_wait(`我知道了。`);
    await chara_talk.say_and_wait(
      `哇！谢谢，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
    );
    await era.printAndWait(`有马纪念和宝塚纪念一样。`);
    await era.printAndWait(
      `都是在粉丝中获得人气的赛${chara_talk.get_uma_sex_title()}才能参加的比赛。`,
    );
    await era.printAndWait(
      `没有在意那参赛条件，${chara_talk.sex}就这么说出来「想要参赛」。`,
    );
    await era.printAndWait(`这也就是说——`);
    era.printButton(`长大了呢。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`欸？${chara_talk.name}的身高，没有长高啊？`);
    await me.say_and_wait(`并不是这个意思。`);
    await chara_talk.say_and_wait(`那是什么意思呢？`);
    await chara_talk.say_and_wait(
      `啊！告诉我嘛~${me.sex_code - 1 ? '姐姐' : '哥哥'}大人——！！`,
    );
    await era.printAndWait(
      `这一整天，${chara_talk.name}都缠在${your_name}的身边。`,
    ); //TODO【京都赛马场】lv+1
    get_attr_and_print_in_event(30, [2, 2, 2, 2, 2], 45);
    await era.waitAnyKey();
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank <= 5 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('小小的蓝蔷薇', chara_talk);
    await chara_talk.say_and_wait(`那个，${chara_talk.name}啊，在奔跑的时候。`);
    await chara_talk.say_and_wait(`也有听到哦，听到大家的声音。`);
    await chara_talk.say_and_wait(
      `听见大家喊着‘加油——’‘${chara_talk.name}~’，一直鼓励着${chara_talk.name}前进。`,
    );
    await chara_talk.say_and_wait(`嘿嘿，这样不行呢。`);
    await chara_talk.say_and_wait(`明明是${chara_talk.name}要带给大家欢笑的。`);
    await chara_talk.say_and_wait(
      `结果反而是大家让${chara_talk.name}变得开心。`,
    );
    await chara_talk.say_and_wait(`真的，好幸福。`);
    await era.printAndWait(
      `${chara_talk.name}颤抖着肩膀哭泣，观众们则为${chara_talk.sex}送上温暖的掌声。`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('每个人的心中都有那么一朵…', chara_talk);
    await chara_talk.say_and_wait(`好厉害，这声音。`);
    await chara_talk.say_and_wait(`大家，在看着这边。`);
    await chara_talk.say_and_wait(`大家开心的样子，我都能看到哦……！`);
    await me.say_and_wait(`真的很努力了呢。`);
    await chara_talk.say_and_wait(`唔……嗯。${chara_talk.name}，努力了哦……`);
    await chara_talk.say_and_wait(`因为有大家在，${chara_talk.name}努力过了。`);
    await chara_talk.say_and_wait(`真的、真的……非常感谢…大家……！`);
    await era.printAndWait(`这一天，${chara_talk.sex}作为「主角」，`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`给大家带来了，`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`绽放笑容的最棒的比赛。`, {
      color: chara_talk.color,
    });
    get_attr_and_print_in_event(30, [3, 3, 3, 3, 3], 45);
    await era.waitAnyKey();
    //TODO 隐藏事件（要求京都场地比赛3胜及以上）
    // 心中萌发的名为「你」的故事(无文本)效果：速度+10，耐力+10，根性+10；【京都赛马场】lv+2，【良马场】lv+2
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', chara_talk);
    await chara_talk.say_and_wait(
      `太棒、太棒了，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人。${
        chara_talk.name
      }赢了呢…`,
    );
    await me.say_and_wait(`再抬头挺胸一点吧。`);
    await chara_talk.say_and_wait(`抬头挺胸？那个……`);
    await chara_talk.say_and_wait(`而且，还拿到了第一！真的要满含感激地收下！`);
    await chara_talk.say_and_wait(
      `哼、哼哼！像这样吗？${chara_talk.name}有抬头挺胸了吗？`,
    );
    era.printButton(`我对${your_name}感到骄傲哦。`, 1);
    era.printButton(`下次也要赢哦。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `对${chara_talk.name}感到骄傲？总、总觉得有点难为情…`,
      );
      await chara_talk.say_and_wait(
        `不过，能够让${me.sex_code - 1 ? '姐姐' : '哥哥'}大人觉得骄傲，${
          chara_talk.name
        }也觉得很高兴…`,
      );
      await chara_talk.say_and_wait(`虽然很高兴，又觉得难为情…`);
      await chara_talk.say_and_wait(
        `唔唔，${chara_talk.name}有点，搞不清楚了~`,
      );
    } else {
      await chara_talk.say_and_wait(
        `嗯、嗯！下次的比赛也要赢，这样才能让大家感到高兴。`,
      );
      await chara_talk.say_and_wait(
        `所以，${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人。再麻烦${your_name}多指教${chara_talk.name}训练了！`,
      );
    }
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜', chara_talk);
    await chara_talk.say_and_wait(
      `呼…太好了。${chara_talk.name}，有好好努力了哦…`,
    );
    await chara_talk.say_and_wait(`下次，想拿到第一名呢…开、开玩笑的，呵呵。`);
    era.printButton(`${your_name}很努力呢。`, 1);
    era.printButton(`下次要拿第一名！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `嗯、嗯！谢谢${your_name}，${me.sex_code - 1 ? '姐姐' : '哥哥'}大人！`,
      );
      await chara_talk.say_and_wait(
        `不过${chara_talk.name}觉得，是因为和${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }在一起，才能这么努力。`,
      );
      await chara_talk.say_and_wait(
        '虽然${chara_talk.name}自己一个人很没用，但只要在一起就能更努力…',
      );
    } else {
      await chara_talk.say_and_wait('那、那个…嗯、嗯……下次会努力的！');
      await chara_talk.say_and_wait('果、果然，还是要以第一名为目标呢…');
      await chara_talk.say_and_wait('得要更加努力才行！');
    }
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛败北', chara_talk);
    await chara_talk.say_and_wait('呜呜…${chara_talk.name}输了…');
    await chara_talk.say_and_wait(
      `对不起，${chara_talk.name}让${
        me.sex_code - 1 ? '姐姐' : '哥哥'
      }大人失望了吧…`,
    );
    era.printButton(`${your_name}很努力呢。`, 1);
    era.printButton(`下次要拿第一名！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `那个……嗯。${me.sex_code - 1 ? '姐姐' : '哥哥'}大人说的没错。`,
      );
      await chara_talk.say_and_wait(
        `${chara_talk.name}下次一定会赢的。${
          me.sex_code - 1 ? '姐姐' : '哥哥'
        }大人，要好好看着${chara_talk.name}哦。`,
      );
    } else {
      await chara_talk.say_and_wait(
        '原因…也对，只是一股劲地努力，还是会再输掉。',
      );
      await chara_talk.say_and_wait('找出输掉的原因，活用在下一次的比赛。');
      await chara_talk.say_and_wait(
        '就算再怎么没用，一直沮丧下去的话，只会一直都这么没用。',
      );
      await chara_talk.say_and_wait(
        '${chara_talk.name}要找到这次输掉的原因。然后，下一次想要赢！',
      );
      await era.printAndWait(
        `后来${your_name}们重新检讨这次比赛落败的因素。。`,
      );
      await era.printAndWait(`${chara_talk.name}不可思议地情绪高涨。`);
    }
  } else {
    throw new Error();
  }
};
