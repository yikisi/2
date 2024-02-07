const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const me = get_chara_talk(0),
    montjeu = get_chara_talk(204),
    vp = get_chara_talk(205);
  switch (event_object?.arg) {
    case 47 + 33:
      await print_event_name('奔向远方', vp);
      await era.printAndWait(
        `哼着歌，在秋天的阳光留下淡淡的温暖的日子里，来到了热闹的茶叶店。`,
      );
      await era.printAndWait(
        `毕竟，对方是 ${vp.name} 的师傅，也不好意思空手拜访。`,
      );
      await era.printAndWait(`篮子里放着打算给自己买的茶叶罐。`);
      await era.printAndWait(
        `从那稍微抬起视线，穿着超大尺寸外套的 ${vp.name} 仔细地眺望着商品。`,
      );
      await era.printAndWait(
        `对确认几种茶叶香味的${vp.sex}，${me.name} 稍微靠近。`,
      );
      era.printButton(`「……放在训练员室的花茶茶叶很少，请你帮我补一下。」`, 1);
      await era.input();
      await era.printAndWait(`${vp.name} 竖起耳朵，高兴地摇着尾巴开始品评。`);
      await era.printAndWait(
        `想着刺激小的茶叶比较好，把门口的罐子放入篮子里的时候，里面已经有柠檬香味的了。`,
      );
      await era.printAndWait(
        `${vp.name} 好像特别在意，笑嘻嘻地看着 ${me.name}。`,
      );
      era.printButton(`「柠檬吗？」`, 1);
      await era.input();
      await era.printAndWait(
        `虽然没打算发泄不满，但 ${vp.name} 突然鼓起脸颊抗议。`,
      );
      await vp.say_and_wait(`${sys_get_callname(205, 0)} 有什么不满吗。`);
      era.printButton(`「不是不满意……以前买过。是喜欢的味道。」`, 1);
      await era.input();
      await era.printAndWait(
        `当 ${me.name} 把装有三个茶叶罐的篮子放在收银台上时，熟识的店主一脸惊讶。`,
      );
      await era.printAndWait(`他一边用手指敲打收银机器一边扬起眉毛。`);
      await say_by_passer_by_and_wait(
        '茶叶店店主',
        `好久不见，那个${vp.get_child_sex_title()}是新的担当吗？`,
      );
      await era.printAndWait(`店主隔着 ${me.name} 的肩膀向后看。`);
      await era.printAndWait(
        `现在也在欣赏红茶的 ${vp.name} 依旧是不败金身，加上赢得了橡树杯，粉丝也相应增加了。`,
      );
      await era.printAndWait(
        `但如果说是聚集了大众视线的人气选手，也不是那么回事。`,
      );
      await era.printAndWait(`知道的人知道，这种程度的感觉。`);
      await era.printAndWait(`给红茶包装时，店主好像注意到了什么似的抬起头。`);
      era.printButton(`「怎么了？」`, 1);
      await era.input();
      await say_by_passer_by_and_wait(
        '茶叶店店主',
        `${vp.sex}不是很受欢迎吗？`,
      );
      await era.printAndWait(
        `${me.name} 回头一看，两个年轻的女性正在和 ${vp.name} 握手。`,
      );
      await era.printAndWait(
        `两人似乎都是${
          vp.sex
        }的粉丝，看起来是被开朗应对的憧憬的${vp.get_uma_sex_title()}深深迷住了。`,
      );
      await era.printAndWait(
        `虽然在战胜G1之前就有所察觉，但 ${vp.name} 有着独特的魅力。`,
      );
      await era.printAndWait(
        `被散发着透明可爱感的${vp.sex}所吸引的人，在特雷森中也不在少数。`,
      );
      await era.printAndWait(`在粉丝还很少时也有不少人狂热地支持${vp.sex}。`);
      await era.printAndWait(`在这样想着的过程中，两个纸袋排列在收银台上。`);
      await era.printAndWait(
        `从钱包里拿出两三张纸币交给男人的时候，${vp.name} 回到了 ${me.name} 身边。`,
      );
      await say_by_passer_by_and_wait(
        '茶叶店店主',
        '找您零钱，今后也请多多关照。',
      );
      await era.printAndWait(
        `${me.name} 一边把装着私人用茶叶的袋子交给${vp.sex}一边走出店里。`,
      );
      await era.printAndWait(
        `虽然均等排列的行道树开始一点点地散落叶子，但似乎还能欣赏到金黄色的秋景。`,
      );
      await era.printAndWait(
        `走在大街上，发现旁边的${vp.get_teen_sex_title()}回头看了看。`,
      );
      await era.printAndWait(`在那对面，${me.name} 看到了刚才两位女性的背影。`);
      era.printButton(`「是刚才的粉丝吗？」`, 1);
      await era.input();
      await vp.say_and_wait(`是的……听说${vp.sex}们一直在看我的比赛。`);
      await vp.say_and_wait(`好开心。`);
      await era.printAndWait(`${vp.name} 害羞地说。`);
      await era.printAndWait(
        `尽管如此，${vp.sex}还是用认真的眼神，对期待自己表现的两位粉丝感叹着。`,
      );
      await vp.say_and_wait(
        `来这里之前，我得到了很多人的帮助。师傅也是其中之一，想为了家人和朋友努力的心，至今也没有改变。`,
      );
      await vp.say_and_wait(
        `一想到期待我跑步的人越来越多，我就忍不住想跑得更多，想赢得更多。`,
      );
      await era.printAndWait(
        `很多${vp.get_uma_sex_title()}对暴露在众目睽睽之下感到压力。`,
      );
      await era.printAndWait(
        `在 ${
          me.name
        } 的负责人中，也有${vp.get_uma_sex_title()}烦恼着在G1这样引人注目的舞台上不能很好地发挥实力。`,
      );
      await era.printAndWait(
        `但是 ${vp.name} 对受到越活跃越会增加的期待毫不犹豫。`,
      );
      await era.printAndWait(`把这一切变成力量，为了梦想前进。`);
      await era.printAndWait(
        `而这样${vp.sex}现在的目标，正是那香榭丽舍大街终点的巨大建筑物所代表的比赛。`,
      );
      await era.printAndWait(`拿破仑建造的凯旋门，乃高耸着的胜利象征。`);
      await era.printAndWait(
        `${vp.sex}一定在会出现在那对面，然后在那被冠以其名的世界最高峰的比赛舞台大放异彩。`,
      );
      era.printButton(`「……你一定会赢的。」（好感+5）`, 1);
      await era.input();
      await era.printAndWait(`${vp.name} 突然回头。`);
      await era.printAndWait(
        `和${vp.sex}平时那样绽放着稚嫩的笑容的样子不同，${vp.sex}温柔地——但是，像诉说着什么一样，露出平静的大海般的微笑，小声地说道。`,
      );
      await vp.say_and_wait(`一定。`);
      await era.printAndWait(`${me.name} 想，那可能不是只对自己说的话。`);
      era.println();
      sys_like_chara(205, 0, 5) && (await era.waitAnyKey());
      break;
    case 95 + 28:
      await print_event_name('巅峰之下', vp);
      await era.printAndWait(`回过神来，${me.name} 已经走在了香榭丽舍大道上。`);
      await era.printAndWait(
        `月亮升到东方的天空，在黑暗增加的街道上点亮了路灯。`,
      );
      await montjeu.say_and_wait('找到答案了吗？');
      await era.printAndWait(
        `摇头。但是，${montjeu.name} 似乎预感到了这一点，并没有指责，只是继续说。`,
      );
      await montjeu.say_and_wait('那么——');
      era.printButton(`「只是。」`, 1);
      await era.input();
      await era.printAndWait(`${me.name} 注视着${montjeu.sex}的眼睛。`);
      await era.printAndWait(
        `无论是几年前还是半年前，都无法正面相对的${montjeu.sex}的眼睛。`,
      );
      await era.printAndWait(`${me.name} 知道这不是自己一个人能解决的问题。`);
      await era.printAndWait(
        `${me.name} 渐渐感受到了一直害怕面对谁，暴露自己的极限。`,
      );
      era.printButton(`「希望你能听我说过去的故事。」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name} 盯着 ${me.name} 的脸看了一会儿。`,
      );
      await era.printAndWait(
        `面对快要把身体切开的视线甚至想逃跑，但是如果不能站在这里，什么都不会开始。`,
      );
      await era.printAndWait(
        `于是${montjeu.sex}走了两三步，一边邀请 ${me.name} 一边坐在长椅上。`,
      );
      await era.printAndWait(`坐在旁边，${montjeu.name} 开场白说。`);
      await montjeu.say_and_wait('你在我这里话说的再漂亮也……');
      era.printButton(
        `「如果有那么一天，我也会和 ${vp.name} 说同样的话。」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……我明白了。');
      await era.printAndWait(`${me.name} 这样做，是要面对自己。`);
      await era.printAndWait(`那就像是解剖每个人都无可奈何的那份不成熟一样。`);
      era.printButton(`「我在最前列看到了几年前你的凯旋门赏，」`, 1);
      await era.input();
      await me.say_and_wait(
        `你和怪鸟来到这里，在竭尽全力的战斗之时，怪鸟被超越的样子的时候，我被无能为力的无力感袭击了。`,
      );
      await era.printAndWait(
        `直截了当地说，${montjeu.sex}对日本的很多训练员来说是一种创伤。`,
      );
      await era.printAndWait(`高不可攀的墙，绝对的传说。`);
      await era.printAndWait(`${montjeu.name} 什么都不问。`);
      await montjeu.say_and_wait(`但是————你有 ${vp.name}。`);
      await era.printAndWait(`${montjeu.name} 暂时把目光转向了夜晚的塞纳河。`);
      await era.printAndWait(
        `黑色摇曳的水面上没有星星，只是静静地回响着捕捉不到的风吹出的波浪声。`,
      );
      await era.printAndWait(
        `可 ${vp.name} 是个坚强的${vp.get_uma_sex_title()}，${
          vp.sex
        }一个人也能赢。`,
      );
      await montjeu.say_and_wait(
        `……你还记得${vp.sex}说过${vp.sex}是一个能背负人们期待的容器吗？`,
      );
      era.printButton(`「嗯。」`, 1);
      await era.input();
      await era.printAndWait(`无限的强度，非人的才能。`);
      await era.printAndWait(`正因为有了那个，现在的 ${vp.name} 才很强。`);
      await montjeu.say_and_wait(
        `${vp.sex}面对压力的强度是相当大的。对于今后也会无限地背负人们的期待，${vp.sex}毫不犹豫。`,
      );
      await montjeu.say_and_wait(
        `只是，如果那个天生的性质创造了${vp.sex}的价值观的话，你会怎么想呢？`,
      );
      await era.printAndWait(`${montjeu.name} 把视线转向 ${me.name}。`);
      await era.printAndWait(
        `期待基本上是稀有的。只有不断的努力和拿出出色成果才能从别人那里得到，本来就不是理所当然的。`,
      );
      await era.printAndWait(`但是对于 ${vp.name} 来说，这是理所当然的。`);
      await era.printAndWait(
        `${
          vp.sex
        }自己理所当然地做的事，在无限期待的过程中，${vp.get_teen_sex_title()}在这个世界上发现了什么。`,
      );
      await era.printAndWait(`可能性和现状在脑海中相连。`);
      era.printButton(`「……对不被期待的事情的恐惧？」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement。');
      await era.printAndWait(
        `曾经成为传说，一个受到所有人期待的${vp.get_uma_sex_title()}继续道。`,
      );
      await montjeu.say_and_wait(
        `有必要回应期待。越是回应，新的期待就越会增加。如果${vp.sex}处在在这样的循环中，就有可能被误解为期待自己的价值。如果这是构成${vp.sex}根本的想法，就应该避免轻易否定。`,
      );
      era.printButton(`「只能对${vp.sex}抱有期待。」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name} 首肯了。`);
      await montjeu.say_and_wait(
        `要做到这一点，我必须对你这个人物有所期待，因为如果没有价值，我也不能把${vp.sex}托付给别人。`,
      );
      await era.printAndWait(`${me.name} 知道。`);
      await era.printAndWait(`但是，怎么办才好呢？`);
      await era.printAndWait(
        `${montjeu.name} 站起来，摇了摇长发，然后俯视 ${me.name}。`,
      );
      await era.printAndWait(
        `与审判罪人的神一样的眼睛不同，那里混入了某种程度的同情。`,
      );
      await era.printAndWait(`那是对今后也要不断被“痛苦”欺凌的人的怜悯吗。`);
      await montjeu.say_and_wait('我的职责到此为止。');
      era.printButton(`「……对不起。」`, 1);
      await era.input();
      await era.printAndWait(
        `只说了句祝 ${me.name} 有一个美好的夜晚，${montjeu.name} 离开了。`,
      );
      await era.printAndWait(
        `仰望天空。满月在俯视 ${me.name}，静静地飘在那里。`,
      );
      era.set('cflag:205:招募状态', -2);
      break;
    case 95 + 33:
      await print_event_name('仅此、唯一', vp);
      await era.printAndWait(
        `从那天之后，${vp.name} 不来 ${me.name} 身边的日子越来越多了。`,
      );
      await era.printAndWait(`联络也逐渐中断，最近甚至没有收到信件的通知。`);
      await era.printAndWait(`对于这样的情况，${me.name}……`);
      era.printButton(`一定没有强烈责备${vp.sex}的资格吧。`, 1);
      era.printButton(`没有理由置之不理。`, 2);
      if ((await era.input()) === 1) {
        era.set('flag:强制BE', 205);
        return;
      }
      await era.printAndWait(
        `不知怎的，${me.name} 想起了和 ${vp.name} 相遇时的场景。`,
      );
      await era.printAndWait(`该动身了。`);
      await era.printAndWait(
        `……傍晚，游览船慢慢地通过 ${me.name} 正下方的塞纳河，对岸看到了丢勒里花园。`,
      );
      await era.printAndWait(`初秋的风吹拂着大衣的下摆。`);
      await era.printAndWait(
        `用手触摸那个部分，${me.name} 思考了应该想起的过去。`,
      );
      await era.printAndWait(`成为训练员的理由。`);
      await era.printAndWait(
        `胜利也好，失败也好，一定是后来才来的，敲开特雷森大门时脑海中的东西，应该是更简单的希望。`,
      );
      await era.printAndWait(`那个是……`);
      await vp.say_and_wait(`……${sys_get_callname(205, 0)}？`);
      await era.printAndWait(`多次听到的声音。`);
      await era.printAndWait(
        `回头一看，和那时一样穿着大衣的 ${vp.name} 站在那里。`,
      );
      await vp.say_and_wait(`为什么会在这里？`);
      era.printButton(`「那是——」`, 1);
      await era.input();
      await era.printAndWait(`${vp.sex}马上就把目光从 ${me.name} 身上移开了。`);
      await era.printAndWait(`如山般巍然不动的断绝。`);
      await era.printAndWait(
        `没能面对${vp.sex}，让${vp.sex}一个人，这就是 ${me.name} 必须面对的过去。`,
      );
      await era.printAndWait(`哪里都没有夹着让 ${me.name} 后悔的余地。`);
      await vp.say_and_wait(`……对不起。`);
      await era.printAndWait(
        `${me.name} 出声挽留着擦肩而过想要跑出去的${vp.sex}。`,
      );
      era.printButton(`「${vp.name}。」`, 1);
      await era.input();
      await era.printAndWait(`在 ${me.name} 的前面，${vp.name} 停了下来。`);
      await era.printAndWait(
        `但是，${vp.sex}并没有把头转向 ${me.name}，而是一直背朝 ${me.name}。`,
      );
      await era.printAndWait(`在沉默的喧嚣中，${me.name} 慢慢地开口。`);
      await era.printAndWait(`疼痛还在游走。`);
      era.printButton(`「还记得你选我的时候说的话吗？」`, 1);
      await era.input();
      await vp.say_and_wait(`……我好像说过很多话。`);
      era.printButton(
        `「你说『如果负责能连霸凯旋门赏的${vp.get_uma_sex_title()}的话，作为社会人的评价也会提高吧。』」`,
        1,
      );
      await era.input();
      await vp.say_and_wait(
        `那个……太不好意思了，如果可以的话，我希望你当没发生过，${me.actual_name}。`,
      );
      await era.printAndWait(`${vp.sex}微微低下头。`);
      era.printButton(`「我一直不知道。」`, 1);
      await era.input();
      await era.printAndWait(
        `${vp.name} 很强。对于至今为止的 ${me.name} 来说，${vp.sex}是个优秀过头的担当。`,
      );
      await era.printAndWait(`在内心的某个地方，这种不平衡引起了意识的背离。`);
      await era.printAndWait(
        `不管${vp.sex}取得了多少优秀的战绩，也不能为${vp.sex}高兴。`,
      );
      era.printButton(`「你一直把我当作唯一的训练员来看吧。」`, 1);
      await era.input();
      await era.printAndWait(`那技术可能是 ${montjeu.name} 给予的。`);
      await era.printAndWait(`尽管如此，现在在${vp.sex}旁边的是 ${me.name}。`);
      await era.printAndWait(
        `确认${vp.sex}的脚质，理解${vp.sex}的特性，继续看${vp.sex}的比赛的是 ${me.name}。`,
      );
      await era.printAndWait(`这个立场才是有意义的。`);
      await era.printAndWait(
        `作为这个世界上唯一的 ${vp.name} 训练员，${me.name} 有应该托付给${vp.sex}的东西。`,
      );
      await era.printAndWait(`从进入这个世界的那天开始。`);
      await era.printAndWait(
        `从凯旋门赏这个拥有世界最高峰之称的比赛诞生之日开始。`,
      );
      await era.printAndWait(
        `从接触到带着“我们”没有的可能性出生的“${vp.sex}们”的那天开始。`,
      );
      await era.printAndWait(`作为一个人，${me.name} 是愿意的。`);
      era.printButton(`「${vp.name}，把我的灵魂烧焦吧。」（爱慕+5）`, 1);
      await era.input();
      await era.printAndWait(`总有一天，人会遇到一个能改变自己全部的存在。`);
      await era.printAndWait(
        `${me.name} 想一定是为了实现这个愿望，所有的偶然都在这里结合起来了。`,
      );
      await era.printAndWait(`现在明白了，自己是${vp.sex}的专属训练员。`);
      await era.printAndWait(`把期待寄托在${vp.sex}身上。`);
      await era.printAndWait(`${vp.name} 微微地抖了抖肩膀。`);
      await era.printAndWait(
        `回头的${vp.sex}浅浅地笑着，但那双眼睛里有一丝闪耀的某物。`,
      );
      await era.printAndWait(
        `${vp.sex}似乎很高兴，但又为难地动了动，把手放在胸前。`,
      );
      await era.printAndWait(`在塞纳河上吹起的风拂起${vp.sex}红色的丝带。`);
      await vp.say_and_wait(`你对我有期待吗？`);
      await era.printAndWait(
        `在那简短的话语中，${vp.sex}封闭的不安微微颤抖着出现了。`,
      );
      await era.printAndWait(
        `忘记对${vp.sex}下注的自己，为了确实接受那个真意，强烈地点头。`,
      );
      await era.printAndWait(`${vp.name} 对 ${me.name} 的动作眯缝着眼睛。`);
      await vp.say_and_wait(`D\`accord！`);
      await era.printAndWait(`最后留下的一滴眼泪，在晚霞的光中反射着光彩。`);
      await era.printAndWait(`此时此地，${me.name}们 之间终于仅有一个愿望。`);
      era.println();
      sys_love_uma(205, 5) && (await era.waitAnyKey());
      era.set('cflag:205:招募状态', recruit_flags.yes);
  }
};
