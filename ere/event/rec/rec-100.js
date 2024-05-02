const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { yes } = require('#/data/event/recruit-flags');

/**
 * 奇锐骏的招募事件，id=100
 *
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
module.exports = {
  async run() {
    const chara_talk = get_chara_talk(100);
    await era.printAndWait(
      `……${sys_get_callname(0, 0)}这一生，尽是些可耻之事。`,
    );
    await era.printAndWait(
      '抱歉，之所以引用这句名言，并非是想恬不知耻的将自己比作那位知名的文学家。',
    );
    await era.printAndWait(
      `而只是想说——${sys_get_callname(0, 0)}实在是一个羞耻的人。`,
    );
    await era.printAndWait(
      `在这所人才辈出的特雷森学院中，${sys_get_callname(
        0,
        0,
      )}是那仅存的“没有才能”的训练员。`,
    );
    await era.printAndWait(
      `赛马娘们总是以${sys_get_callname(
        0,
        0,
      )}没有才能为由，拒绝${sys_get_callname(
        0,
        0,
      )}来担当训练员的申请——这已经是第十一次了。`,
    );
    await era.printAndWait('--------');
    if (era.get('cflag:60:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '好啦好啦，因为是普通人，被拒绝是很正常的啦。',
      );
    }
    if (era.get('cflag:62:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '没事的啦，训练员桑~总有预感，下次会很顺利的啦~',
      );
    }
    if (era.get('cflag:13:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '嘛……总之，要一起来喝下午茶吗，训练员桑？',
      );
    }
    if (era.get('cflag:7:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait('哦，aibo~拉面一狗贼？');
    }
    if (era.get('cflag:71:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '没事的，训练员桑！只要凭借目白家的财力的话——',
      );
    }
    if (era.get('cflag:61:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '哦——吼吼！不用在意凡人的眼光。你的才能，由我帝王光辉所认可了哦！',
      );
    }
    if (era.get('cflag:6:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait('……训练员桑，肚子饿了。');
    }
    if (era.get('cflag:21:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '诺，训练员桑。这是大阪烧哇，我给你和小栗仔都做了一份，吃了这个就打起精神来吧。',
      );
    }
    if (era.get('cflag:11:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait('呼呼~真是可爱呢，训练员桑~');
    }
    if (era.get('cflag:32:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '放心吧，豚鼠君！变得受欢迎的药很快就能研究出来了！',
      );
    }
    if (era.get('cflag:25:招募状态') === 1) {
      await get_chara_talk(60).say_and_wait(
        '……再继续下去的话，训练员……你会被杀掉的哦？',
      );
    }
    await era.printAndWait('------');
    await era.printAndWait('虽然得到过理事长与担当马娘们的安慰……');
    await era.printAndWait(
      `但被拒绝十一次的经历，实在犹如一枚失败的印记，刻印在${sys_get_callname(
        0,
        0,
      )}的身上。`,
    );
    await era.printAndWait(
      '——更别提因为某场比赛的事故，而欠下的一百二十一亿的债务了。',
    );
    await era.printAndWait(
      `虽然想方设法暂时填上了这个窟窿……但${sys_get_callname(
        0,
        0,
      )}曾经的热情也因那向天际的一指而失去了。`,
    );
    await era.printAndWait(
      `自以为能成为优秀的训练员，而来到特雷森学院的${sys_get_callname(0, 0)}。`,
    );
    await era.printAndWait('终于，连那份支撑自己的感情，也消失了吗？');
    era.printButton('「……叹气」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '哎呀呀……总是叹气的话，福气可是会跑出去的哦？',
    );
    await era.printAndWait(
      `而就在此时，在${sys_get_callname(
        0,
        0,
      )}面前出现的，是一位与夕阳同辉的${chara_talk.get_teen_sex_title()}。`,
    );
    await era.printAndWait(
      `那是在特雷森学院的天台上，落日的余晖之中。${sys_get_callname(
        0,
        0,
      )}循声暗自回过头，一位始终温和微笑的${chara_talk.get_teen_sex_title()}，浮现在了${sys_get_callname(
        0,
        0,
      )}的眼前。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}的身上没有只会出现在漫画上的那独特而耀阳的光辉，但${chara_talk.sex}的身姿却如此的让人难忘。`,
    );
    await era.printAndWait(`因为${chara_talk.sex}——实在太适应这落日的夕阳了。`);
    await chara_talk.say_and_wait('哎呀哎呀……不要露出这种委屈的表情啦。');
    await chara_talk.say_and_wait(
      '我的名字是奇锐骏……嗯——我们应该是第一次见面吧？',
    );
    await chara_talk.say_and_wait(
      '抱歉呢，突然跟你搭话是不是吓到你了呢？看到你一副像是要哭出来的表情，不由得有些担心了呢。',
    );
    await chara_talk.say_and_wait(
      '是被学校里的坏孩子欺负了吗？还是说是职场霸凌？又或者说，只是单纯的肚子饿了呢？',
    );
    await chara_talk.say_and_wait(
      '如果是肚子饿了的话……来，这儿是嘎吱嘎吱干哦~不用客气，直接用手来抓一点吧~',
    );
    await era.printAndWait(
      `始终微笑得和蔼着、与夕阳的同尘的${chara_talk.sex}，从身后取出了一个装满萝卜干的玻璃皿。`,
    );
    await era.printAndWait('不是殷勤，不是示好、当然也不是日常的粉丝公关——');
    await era.printAndWait(
      `而是恰到好处、不近不远的距离。${
        chara_talk.sex
      }伸出了载着玻璃皿的手，将萝卜干捧在了${sys_get_callname(0, 0)}的面前。`,
    );
    await era.printAndWait(
      `而鬼使神差般的，${sys_get_callname(0, 0)}也伸出了自己的右手。`,
    );
    await era.printAndWait('嘎吱、嘎吱、嘎吱、嘎吱——');
    await era.printAndWait('那是有点苦，却又意外有些清脆爽口的味道。');
    await era.printAndWait('明明肚子并不算饿……可却不知为何——');
    await era.printAndWait('有一种，不愿意停下来的感觉。');
    await era.printAndWait(
      '最初，只是用指尖，捏住最上层的、最干涩的一片萝卜干得边缘，轻轻放入口边，用牙齿咀嚼。',
    );
    await era.printAndWait(
      '然后，是用指尖夹住一片萝卜干的正中间，直接塞入嘴中咀嚼。',
    );
    await era.printAndWait('最后，一口气捏住好几片萝卜干，直接送入嘴中。');
    await era.printAndWait('越是食用，便越是饥渴。');
    await era.printAndWait('越是饥渴，却越是不知为何而清凉。');
    await era.printAndWait(
      `玻璃皿中的萝卜干，在转瞬之间，便被${sys_get_callname(
        0,
        0,
      )}全部吞咽进了肚子之中。`,
    );
    await chara_talk.say_and_wait('哎呀哎呀……真是豪爽的吃法呢~');
    await era.printAndWait('始终温和而平静的面容上，多了一份笑意。');
    await chara_talk.say_and_wait('怎么样，好吃吗？');
    era.printButton('「……啊，嗯。」', 1);
    await era.input();
    await era.printAndWait(
      `${sys_get_callname(
        0,
        0,
      )}沉默的点了点头，把因为吃掉了一整盒萝卜干而想要道歉的想法咽在了自己的心中。`,
    );
    await chara_talk.say_and_wait('好吃的话就好呢~那么，来坐下来吧。');
    await era.printAndWait(
      `名为奇锐骏的${chara_talk.get_teen_sex_title()}，依靠着天台的墙壁，迎着夕阳坐了下来。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}一面坐着，一面轻轻地拍着身旁的空地。`,
    );
    await chara_talk.say_and_wait('有困难的时候，一个人呆着可不好呢~');
    await chara_talk.say_and_wait(
      '时间还有很多的哦？有什么事情，可以慢慢说呢~',
    );
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');
    await era.printAndWait('那一天，在落日之前。');
    await era.printAndWait(
      `${sys_get_callname(
        0,
        0,
      )}与与夕阳同辉的${chara_talk.get_teen_sex_title()}，同时也是日后成为了${sys_get_callname(
        0,
        0,
      )}的训练马娘的${chara_talk.get_teen_sex_title()}，奇瑞骏。`,
    );
    await era.printAndWait('聊了许多、许多的话——');
    era.set(`cflag:100:招募状态`, yes);
    await era.printAndWait('成为了奇锐骏的训练员了！');
    return false;
  },
};
