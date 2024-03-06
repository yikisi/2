const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');

const chara_talk = new CharaTalk(19);

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const print_event_name = require('#/event/snippets/print-event-name');
const { location_enum } = require('#/data/locations');

module.exports = async function () {
  const me = get_chara_talk(0),
    chara61_talk = get_chara_talk(61),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name(`夏合宿结束`, chara_talk);
      await chara_talk.say_and_wait(`嘿嘿……呼……感谢赐予的对决……`);
      await era.printAndWait(`在夏合宿的最后，就是预定的数码和圣王的对决……`);
      await era.printAndWait(`不过，看起来有点……随意吗？`);
      await chara61_talk.say_and_wait(
        `哈……呼……数码，你的脚步，相当地踌躇呢，怎么了？`,
      );
      await chara_talk.say_and_wait(
        `呀，不……该说是一直都在吃着闪光弹吗，还是被空气中携带的尊窒息了吗……`,
      );
      await chara_talk.say_and_wait(
        `以前我都是作为观众那一方的……居然想要追上什么的，太得意忘形啦……`,
      );
      await chara_talk.say_and_wait(
        `我也是最近，才有那种『认真去跑』觉悟的普通底层人而已……`,
      );
      await chara61_talk.say_and_wait(
        `啊啦，看起来相当地没自信啊。不过，真仅此而已吗？训练员，数码的实力，你应该知道的吧？`,
      );
      await me.say_and_wait(`要是在现在的沙地的话，数码是不会输的。`);
      await era.printAndWait(`数码${chara_talk.sex}仍在在意现在的圣王。`);
      await chara_talk.say_and_wait(`圣王……现在……和原来相差甚远……是吧……`);
      await chara_talk.say_and_wait(
        `今年春天，在『高松宫纪念』上的胜利，然后就……流利的跑姿，身体的跃动感，该说都没这次比赛的实力了吗……`,
      );
      await chara_talk.say_and_wait(
        `我知道的，正因为每次都扶着栅栏探出身子去看的啊。`,
      );
      await chara_talk.say_and_wait(
        `现在的圣王桑有多么痛苦，因为我也出道了，所以我也能……知道了一些……`,
      );
      await era.printAndWait(
        `成为选手后的数码，比起以前，所能触碰到的都更多了，像这样的感情也是。`,
      );
      await chara61_talk.say_and_wait(`所以才没心情吗……这样啊，哼……数码你……`);
      await chara61_talk.say_and_wait(`是笨蛋啊。`);
      await chara_talk.say_and_wait(`诶？`);
      await era.printAndWait(`意外之外的话语让数码吃了一惊。`);
      await chara61_talk.say_and_wait(`笨蛋，还是大笨蛋。`);
      await chara61_talk.say_and_wait(`你看着很了解我，但还啥都不懂呢。`);
      await era.printAndWait(`严厉的话语，却带着温柔的声音。`);
      await chara61_talk.say_and_wait(
        `那个，数码，你对我这个${chara_talk.get_uma_sex_title()}，很感兴趣吧？`,
      );
      await chara_talk.say_and_wait(`！是的！`);
      await chara61_talk.say_and_wait(
        `这样吧，在合宿结束后，我赐予你和我一起训练的权利！`,
      );
      await chara61_talk.say_and_wait(
        `让你看看，圣王光环是怎样的${chara_talk.get_uma_sex_title()}！`,
      );
      await chara_talk.say_and_wait(`请务必！`);
      await chara_talk.say_and_wait(
        `在夏天的末尾，数码和憧憬的${chara_talk.get_uma_sex_title()}建立了联系。`,
      );

      await me.say_and_wait(`很兴奋是吧！那就正是在状态上啊！`);
    }
  }
  if (edu_weeks === 95 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name(`第三年夏合宿结束`, chara_talk);
      await era.printAndWait(
        `在这次的夏合宿，数码真的是特别努力了，你从来没见过如此认真的数码。`,
      );
      await era.printAndWait(
        `与前辈歌剧怒涛的约定，与后辈黑船的对决，两个因素使现在数码的状况前所未有地好！`,
      );
      await chara_talk.say_and_wait(
        `训练员，我感觉到了，这种感觉，就像是被所有人加持了的勇者！这样一来，就能和${chara_talk.sex}们对决了！`,
      );
      await me.say_and_wait(`能赢吗？`);
      await chara_talk.say_and_wait(
        `说实话，只有不安！那三位，无论是谁感觉我都没有获胜的把握……`,
      );
      await chara_talk.say_and_wait(
        `所以，我能做到的只有凭借一直以来的丰富多样的经验了！`,
      );
      await era.printAndWait(
        `无论立在前面的墙壁有多高，${chara_talk.name}都没有迷茫。`,
      );
      await era.printAndWait(`但是，在那天夜里……`);
      await era.printAndWait(`却传来了黑船无法参赛的消息。`);
      await era.printAndWait(
        `数码那天晚上，把你叫了出来，在深夜的海滩上，垂着头一言不语。`,
      );
      await era.printAndWait(`等过了很久，数码才开口——`);
      await chara_talk.say_and_wait(`训练员……你说，这种事情，是真实存在的吗？`);
      await era.printAndWait(
        `骨折、粉丝数、投票数、抽选、避战……各种原因所造成的不出赛，数码都见过。`,
      );
      await era.printAndWait(
        `但是，因为参赛名额意外不够用，这种情况，数码第一次遇见。`,
      );
      await chara_talk.say_and_wait(
        `因为是比赛，所以绝对会有胜利的笑容以及失败的泪水。`,
      );
      await chara_talk.say_and_wait(
        `但是，在泪水的前方，必定存在着感动，正因如此，${chara_talk.get_uma_sex_title()}们才能在又一个赛场上再次碰撞。`,
      );
      await chara_talk.say_and_wait(
        `……但是……如果，连跑都不能跑的话，那又怎么说……`,
      );
      await era.printAndWait(`明明准备好了所有，却不能参赛。`);
      await chara_talk.say_and_wait(
        `如果是因为我的出赛……${chara_talk.sex}的梦想就此被摘下的话……`,
      );
      await era.printAndWait(`数码十分沮丧，已经产生了退却心理。`);
      await me.say_and_wait(`你难道要说自己不参加天皇赏秋吗？！`);
      await chara_talk.say_and_wait(`那……没那回事。`);
      await chara_talk.say_and_wait(
        `就算是我，就算是我，也有着和歌剧和怒涛的约定啊……`,
      );
      await era.printAndWait(`数码明白，${chara_talk.sex}什么都不能改变。`);
      await era.printAndWait(
        `因为喜欢${chara_talk.get_uma_sex_title()}，所以那位${chara_talk.get_uma_sex_title()}的遭遇，才会像水草一样缠上${
          chara_talk.sex
        }的脚。`,
      );
      await era.printAndWait(`不过，如果就这样的话……`);
      await me.say_and_wait(`相信${chara_talk.sex}吧，于此同时，我也相信你。`);
      await chara_talk.say_and_wait(
        `这是……这是什么意思？相信${chara_talk.sex}……？`,
      );
      await me.say_and_wait(
        `黑船${chara_talk.sex}的脚步不会停下，${chara_talk.sex}，还有明年，今年的天皇赏秋，${chara_talk.sex}的确是不能参加了没错……`,
      );
      await me.say_and_wait(
        `但是你觉得${chara_talk.sex}会就此一蹶不振，然后就此退役吗？`,
      );
      await chara_talk.say_and_wait(`！那……那肯定不会。`);
      await era.printAndWait(
        `出色的${chara_talk.get_uma_sex_title()}，不会因为这些挫折所击倒。`,
      );
      await me.say_and_wait(`给出你最好的答卷，这就是对黑船最好的帮助。`);
      await chara_talk.say_and_wait(
        `……${chara_talk.get_uma_sex_title()}酱们，在痛苦中最后抓住的东西，在历经了那几位后，我知道了，那是无与伦比的事物。`,
      );
      await chara_talk.say_and_wait(
        `所有带来的悲伤，即使是那份悔恨，都会成为明天的力量！我明白了！毕竟正是亲自感受过了啊！`,
      );
      await chara_talk.say_and_wait(
        `所以我，我才能打心底里说出，${chara_talk.get_uma_sex_title()}太棒了啊！`,
      );
      await era.printAndWait(`数码站起身跑到海边——`);
      await chara_talk.say_and_wait(
        `${chara_talk.get_uma_sex_title()}，无论是怎样的苦难，都能用不屈的意志，全都，弹飞啊啊啊啊啊！！！！！`,
      );
      await chara_talk.say_and_wait(
        `无论是我，还是${chara_talk.sex}！都绝对能过跨越啊！！！！`,
      );
      await chara_talk.say_and_wait(`……啊啊啊……`);
      await era.printAndWait(`尽情呼喊后，数码回过神来。`);
      await me.say_and_wait(`看来，数码你，已经得到答案了。`);
      await chara_talk.say_and_wait(
        `……我，我也不能停在这里，一定，一定要把从圣王那里拿到的珍贵的东西，展示给${chara_talk.sex}！`,
      );
      await chara_talk.say_and_wait(
        `我，我一定要参加天皇赏秋，而且，而且！一定要拿到，压倒性胜利！`,
      );
      await chara_talk.say_and_wait(
        `让${chara_talk.sex}，为了明年这番比赛能够追上我，拼尽全力！`,
      );
      await chara_talk.say_and_wait(`绝对！绝对要！`);
      await chara_talk.say_and_wait(
        `而且，要把我至今为止所有邂逅的${chara_talk.get_uma_sex_title()}的感情，全部倾倒出去！`,
      );
      await chara_talk.say_and_wait(`这就是，我的责任！`);
      await era.printAndWait(`要获胜，而且是要大胜，才能断绝黑船最后的遗憾。`);
      await era.printAndWait(`这就是数码给予自己的责任。`);
    }
  }
};
