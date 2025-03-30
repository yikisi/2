const era = require('#/era-electron');
const print_event_name = require('#/event/snippets/print-event-name');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const falcon = get_chara_talk(46),
    me = get_chara_talk(0);
  if (new MaEduMarks().crazy_fan) {
    await era.printAndWait(`一个平平无奇的早上`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}今天也要加油哦⭐`,
    );
    await era.printAndWait(
      `虽然因为接连的失败而受到许多粉丝们的质疑，不过在飞鹰子的鼓励之下，（玩家名）还是坚持着自己的训练计划。`,
    );
    await me.say_and_wait(`今日份的飞鹰子，拜托了呦？`);
    await falcon.say_and_wait(
      `——！既然是训练员${me.get_adult_sex_title()}的要求，飞鹰子也会继续努力的⭐`,
    );
    await era.printAndWait(
      `在众多的竞争者之间脱颖而出，每日挥洒的汗水总算得到了回报。`,
    );
    await era.printAndWait(
      `如果能借助这份工作将飞鹰子的名气打响的话，那么对之后的泥地赛也`,
    );
    await falcon.say_and_wait(`如果飞鹰子逃跑的话？`);
    await era.printAndWait(
      `似乎在期待着什么的${falcon.name}带着焦急的眼神看着（玩家名）。`,
    );
    era.printButton(`就就只能追上去了！`, 1);
    await era.input();
    await falcon.say_and_wait(`要追到地平线的尽头吗？`);
    await era.printAndWait(`刺眼的光线照射在舞台上。`);
    await me.say_and_wait(`那里就是飞鹰子的大舞台！`);
    await era.printAndWait(
      `演员们小声默念着属于自己的台词，摄制组最后确认了一遍摄像机的运转正常。`,
    );
    await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
    await era.printAndWait(`导演在第一排坐定。`);
    await me.say_and_wait(`——去抓住大大的爱吧！`);
    await era.printAndWait(`各就各位！所有人都在等待着主角的登场。`);
    await falcon.say_and_wait(
      `最强的马娘偶像，${falcon.name}♪今天也送到了呢⭐`,
    );
    await era.printAndWait(`穿着可爱服装的飞鹰子登场了。`);
    era.printButton(`稍微在附近转转吧`, 1);
    era.printButton(`还是找个座位看飞鹰子表演吧`, 2, { disabled: true });
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`回到了空无一人的后台准备室中。`);
      await era.printAndWait(`不知为何情绪也变得高涨起来了。`);
      await me.say_and_wait(
        `虽然空气有些浑浊，不过在这里也能听到${falcon.name}美丽的歌声。`,
      );
      await era.printAndWait(`马娘「您好，请问是${falcon.name}的训练员吗？」`);
      await era.printAndWait(`不知何时出现在准备室的马娘。`);
      await me.say_and_wait(`是的，我是——`);
      await era.printAndWait(`尚未来得及反应，一阵剧痛便从胸口传来。`);
      await era.printAndWait(
        `马娘「初次见面，训练员${me.get_adult_sex_title()}。然后，永别了。」`,
      );
      await era.printAndWait(
        `正准备刺出第二刀的马娘被你顺手扔出的化妆品砸了正着。`,
      );
      await era.printAndWait(`马娘「唔——不要太嚣张了！呜啊！！！」`);
      await era.printAndWait(
        `从随身的挎包中掏出了防马娘喷雾的（玩家名）颤颤巍巍的站了起来。`,
      );
      await era.printAndWait(
        `无视发出凄惨叫声的马娘，一口气将喷雾中的气体摁到底。`,
      );
      await me.say_and_wait(`必须将这情况告诉飞鹰子。`);
      await era.printAndWait(
        `下意识举起了挎包的（玩家名），总算避免了即死这一最糟的结局。`,
      );
      await era.printAndWait(
        `然而，在肾上腺素的刺激之下，止不住的鲜血正在往外流淌。`,
      );
      await me.say_and_wait(`这里太危险不能在这里包扎。`);
      await era.printAndWait(`必须离开这里。`);
      await era.printAndWait(
        `这么想着的（玩家名）正准备离开，却被马娘胡乱伸出的双手抓住了挎包。`,
      );
      await me.say_and_wait(`不好。`, true);
      await era.printAndWait(
        `一阵巨力传来，原本是救命的挎包现在反而成了索命的死神。`,
      );
      await era.printAndWait(
        `被拉住脖子的（玩家名）只能胡乱地空中挥舞着双手。`,
      );
      await era.printAndWait(
        `马娘「你这家伙，就在地狱里忏悔你的罪行吧！哈哈哈哈哈哈！！！」`,
      );
      await falcon.say_and_wait(
        `训练员${me.get_adult_sex_title()}，飞鹰子进来了呦？`,
      );
      await era.printAndWait(`意识逐渐模糊的（玩家名）似乎产生了幻听。`);
      await me.say_and_wait(`就这样，能够听到飞鹰子的声音`, true);
      await me.say_and_wait(`我`, true);
      await era.printAndWait(
        `无力的倒在地板上的（玩家名），连痛苦都感受不到了。`,
      );
    }
    era.drawLine();
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(`温柔的呼唤声传来，似乎是很熟悉的声音。`);
    await me.say_and_wait(`到了天国吗？让我再睡一会吧。`, true);
    await era.printAndWait(`不知何时就这样心安理得沉沉睡了过去。`);
    era.drawLine();
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(`温柔又坚定的声音从遥远的地方传来。`);
    await era.printAndWait(`好熟悉的声音啊。`);
    await era.printAndWait(`好像在哪里听过的样子？教室吗？天台吗？那位少女——`);
    await me.say_and_wait(`我是谁？我在哪里？`, true);
    await era.printAndWait(`扫视着这片漆黑的世界，再次沉沉睡了过去。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，我又来看望你了。`,
    );
    await falcon.say_and_wait(`飞鹰子，在业界也稍微站住脚跟了呢。`);
    await falcon.say_and_wait(
      `虽然之前和训练员${me.get_adult_sex_title()}说过这件事。不过训练员${me.get_adult_sex_title()}也不记得了呢。`,
    );
    await era.printAndWait(`欢快的声音逐渐低沉了下来。`);
    await falcon.say_and_wait(
      `不过，不过飞鹰子一定会带着训练员${me.get_adult_sex_title()}的期待一直努力下去的！训练员${me.get_adult_sex_title()}，下次见！`,
    );
    await me.say_and_wait(`飞鹰子`);
    await era.printAndWait(
      `想要坐起来却因为麻木感而失败，身体重重地躺在了病床之上。`,
    );
    await falcon.say_and_wait(`哎？！`);
    await era.printAndWait(
      `——打算最后看一眼的${falcon.name}却目睹了整个过程。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}......欢迎回来！`,
    );
    await me.say_and_wait(`已经过去多久了？`);
    await era.printAndWait(
      `一定已经过去很久了，（玩家名）已经做好了最糟的打算。`,
    );
    await falcon.say_and_wait(`嗯——从那件事件后已经过去三年了。`);
    await me.say_and_wait(`......这样啊。`);
    await era.printAndWait(`已经过去这么久了啊。`);
    await me.say_and_wait(`你看起来比之前更加闪耀了。`);
    await era.printAndWait(`难以想象孤独的少女是如何踏上这条偶像之路的。`);
    await falcon.say_and_wait(
      `嗯！训练员${me.get_adult_sex_title()}出院后也能看到闪耀的飞鹰子了！`,
    );
    await me.say_and_wait(`......对不起。`);
    await era.printAndWait(`明明作为训练员的我应该站在你的身边的。`);
    await falcon.say_and_wait(
      `不会的，飞鹰子能看到训练员${me.get_adult_sex_title()}清醒的样子，飞鹰子就已经很幸福了。`,
    );
    await falcon.say_and_wait(`再奢求更多的话，飞鹰子也太贪心了。`);
    await era.printAndWait(`冰凉的小手与粗糙的大手重合在了一起。`);
    await falcon.say_and_wait(
      `所以训练员${me.get_adult_sex_title()}，快点好起来吧。`,
    );
    await era.printAndWait(
      `轻轻将大手放在了自己的脸颊，${falcon.name}闭上了双眼感受着久违的温暖。`,
    );
    await me.say_and_wait(
      `......嗯，一定会的，飞鹰子的演唱会，与飞鹰子接下来的一切，全都会。`,
    );
    await era.printAndWait(
      `湿润的感觉从嘴唇之中传来，将接下来的话语生生遏止住了。`,
    );
    await me.say_and_wait(`不，已经足够了`, true);
    await era.printAndWait(`接吻的感觉，是咸咸的呢。`);
    await print_event_name(`Freesia`, falcon);
  }
};
