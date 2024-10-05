/**
 * @file 特别周 - 招募
 *
 * @author wwm
 */
const era = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  // eslint-disable-next-line no-unused-vars
  async recruit(stage, event_object) {
    const me = get_chara_talk(0),
      spe = get_chara_talk(1);
    let temp;

    if (await this.check_before_rec()) {
      return;
    }
    await era.printAndWait(`今天是特雷森学园例行的新人选拔赛的日子。`);
    await era.printAndWait(
      `来到这里的是，希望寻找到专属训练员的新人马娘们，以及希望发掘出下一位天才马娘，并将其招募到自己麾下的训练员们。`,
    );
    await era.printAndWait(
      `选拔赛一场场地进行着，每场比赛结束后，表现优异的马娘刚刚退场就会被感兴趣的训练员们层层包围起来。`,
    );
    await era.printAndWait(
      `${me.name}也尝试着去跟看好的马娘们搭话，但每次都被人墙结结实实地堵在外面，等到好不容易挤进去的时候，对方早就答应了捷足先登的其他训练员了。`,
    );
    await me.say_and_wait(`让我看看赛程表……只剩下最后一场比赛了？`);
    await era.printAndWait(
      `选拔日马上就要过去了，为了不空手而归，${me.name}决定提前占据场地外的有利位置。`,
    );
    await era.printAndWait(
      `\n「选手们通过了第四弯道！接下来的直道将决定整场比赛的胜负！」`,
    );
    await era.printAndWait(`「现在冲出来的是特别周！特别周领先！」`);
    await era.printAndWait(
      `${me.name}将目光投向领头的马娘，她为了冲刺几乎把整个人都抛了出去，看起来摇摇欲坠，深枣色的短发在风中飘扬。`,
    );
    await me.say_and_wait(
      `是叫${spe.name}吗？名字有点奇怪……不过跑起来真的很漂亮啊`,
    );
    await era.printAndWait(`\n「剩余100米，距离还在拉大！特别周，头名冲线！」`);
    await era.printAndWait(
      `名叫${spe.name}的马娘第一个冲过终点，她并没有像其他马娘一样在赛场上再停留一会，而是径直向场外跑去。`,
    );
    await era.printAndWait(
      `场外的训练员们也开始移动，很快将她包围起来。这次很幸运，我挤进了人群内圈的位置。`,
    );
    await era.printAndWait(`刚想向她提出邀请的时候……`);
    await spe.say_and_wait(`诶……啊！`);
    await era.printAndWait(`${spe.name}的脸上露出了慌张的表情。`);
    await spe.say_and_wait(
      `对……对不起！我晚上还要去趟商店，要来不及了，各位，请让一让，非常不好意思！`,
    );
    await era.printAndWait(
      `话音未落，她就这么冲出人群向远处奔了出去，让所有人都措手不及。`,
    );
    await era.printAndWait(`（那个方向，应该是校门的反方向吧……）`);
    await era.printAndWait(
      `然后${me.name}就看到已经跑出一段距离的小马娘又180度冲了回来，一边喊着“不好意思”，一边从人群的另一边挤了出去，很快就跑得不见人影了。`,
    );
    await era.printAndWait(
      `${me.name}环顾四周，其他有潜力的马娘也已经被感兴趣的训练员们搭讪了，结果今天真的一无所获了。`,
    );
    await me.say_and_wait(`刚才她是说要去商店吗？不如去看看好了。`);
    await era.printAndWait(
      `\n来到学园旁边的商店，我看见${spe.name}正在把一个个大箱子从货车上搬到店里。`,
    );
    await spe.say_and_wait(`这样就是最后一箱了，老奶奶！`);
    await era.printAndWait(
      `「真的太感谢你了，小姑娘，每次货物多的时候都要麻烦你，真不好意思。」`,
    );
    await spe.say_and_wait(
      `没关系的！我在家的时候也经常帮妈妈干农活，这些事情小菜一碟！我要回学园了，多多保重！`,
    );
    await era.printAndWait(
      `${spe.name}脸上洋溢着笑容一溜烟跑远了，而${me.name}则看着她的背影陷入了沉思。`,
    );
    await era.printAndWait(`（这个方向，也不是回学园的方向吧？）`);
    await era.printAndWait(
      `\n${me.name}沿着那个方向追去，最后在天色全黑之时，在公园里找到了${spe.name}。`,
    );
    await era.printAndWait(
      `她并没有发现${me.name}的到来，正背对着${me.name}念叨着什么。`,
    );
    await spe.say_and_wait(`呜哇……这回好像真的迷路了，怎怎怎怎怎怎么办……`);
    await era.printAndWait(`${me.name}决定——`);
    era.printButton(`上前跟她搭话`, 1);
    era.printButton(`康康她腿部发育怎么样啊`, 2);
    temp = await era.input();

    if (temp === 1) {
      await era.printAndWait(`\n${me.name}觉得现在是个招募她的好时机。`);
      await me.say_and_wait(`你要回特雷森学园吗？`);
      await spe.say_and_wait(`诶？你是……`);
      await me.say_and_wait(
        `我是特雷森学园的训练员，如果你迷路了的话，我可以带你一起回去。`,
      );
      await spe.say_and_wait(`啊，非常感谢！我叫……`);
      await me.say_and_wait(`${spe.name},对吧？`);
      await spe.say_and_wait(`诶？你是怎么知道的？`);
      await me.say_and_wait(
        `我看了你今天的选拔赛，你的跑法给我留下了深刻的印象，只可惜还没来得及问你愿不愿意加入我的队伍，你就跑掉了。`,
      );
      await spe.say_and_wait(
        `不好意思……约好了定期去给店主奶奶帮忙搬东西的，当时看时间要来不及了就……`,
      );
      await era.printAndWait(`${spe.name}嘿嘿笑着挠了挠头。`);
      await me.say_and_wait(
        `没什么，既然如此我就再问一次，你愿意加入我的队伍吗？`,
      );
      await spe.say_and_wait(`嗯！请多多指教！`);
    }

    if (temp === 2) {
      await era.printAndWait(
        `\n${spe.name}还在为找不到回去的路而烦恼，没有注意到身后的${me.name}。`,
      );
      await era.printAndWait(
        `趁此机会，${me.name}在${spe.name}的背后蹲下，然后——。`,
      );
      await era.printAndWait(`——双手握住她的大腿，轻轻地揉捏起来。`);
      await me.say_and_wait(
        `既有紧实的肌肉又充满弹性……真不错啊，将来一定是中长距离的好苗子……`,
      );
      await spe.say_and_wait(`呜诶诶诶诶诶！！！`);
      await era.printAndWait(
        `少女的悲鸣响彻夜空，紧接着${me.name}被一股突如其来的大力击中，重重地向后飞去——${me.name}意识到自己是被踹飞了。`,
      );
      await era.printAndWait(
        `\n在说明了自己的来意，出示训练员证，并且尝试安抚${spe.name}的情绪之后，她总算是没有直接跑掉或者报警。`,
      );
      await era.printAndWait(
        `尽管如此，从她气鼓鼓的表情中可以看出，${me.name}刚才的举动还是让她很不开心。`,
      );
      await spe.say_and_wait(`特雷森学园的训练员都是痴汉吗！真是的！`);
      await me.say_and_wait(`抱歉抱歉，只是为了更好地确认下你的身体……`);
      await spe.say_and_wait(`这也是性骚扰吧？！我要打报警电话了哦？`);
      await me.say_and_wait(
        `你看，在公开选拔赛上看到了潜力极高的好苗子，想要仔细确认一下肌肉状态不是理所当然的吗？`,
      );
      await spe.say_and_wait(
        `唔，是这样吗……那就姑且原谅你了！宿舍门禁的时间要到了，我也要准备回去了。`,
      );
      await me.say_and_wait(`我们一起走吧，应该还来得及，这回别走错方向了。`);
    }

    await era.printAndWait(
      `\n在回校园的路上，${me.name}和${spe.name}聊起了未来的梦想。`,
    );
    await spe.say_and_wait(`我的梦想？嗯，我想想……`);
    await spe.say_and_wait(
      `首先以闪耀系列赛为目标，赢下很多很多的比赛，变得更强，`,
    );
    await spe.say_and_wait(
      `总有一天我要成为日本第一的赛马娘，让妈妈们能在电视上看到我的身姿，为我骄傲！`,
    );
    await spe.say_and_wait(
      `啊，一不小心就说了奇怪的话呢……诶，「想要跟我一起追寻这个梦想」？`,
    );
    await spe.say_and_wait(`谢谢你，训练员！我会努力的！`);
    era.set(`cflag:1:招募状态`, recruit_flags.yes);
    await this.recruit_end();
    return true;
  }
};
