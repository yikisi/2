const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} vp
 * @param {CharaTalk} me
 * @param {EventObject} event_object
 */
module.exports = async (vp, me, event_object) => {
  const montjeu = get_chara_talk(204);
  let temp;
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
        `好久不见，那个${vp.child_sex_title}是新的担当吗？`,
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
        }的粉丝，看起来是被开朗应对的憧憬的${vp.uma_sex_title}深深迷住了。`,
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
        `走在大街上，发现旁边的${vp.teen_sex_title}回头看了看。`,
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
        `很多${vp.uma_sex_title}对暴露在众目睽睽之下感到压力。`,
      );
      await era.printAndWait(
        `在 ${
          me.name
        } 的负责人中，也有${vp.uma_sex_title}烦恼着在G1这样引人注目的舞台上不能很好地发挥实力。`,
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
      era.printButton(`回忆痛苦的过去`, 1);
      await era.input();
      await me.say_and_wait(
        `我在最前列看到了几年前你的凯旋门赏，你和怪鸟来到这里，在竭尽全力的战斗之时，怪鸟被超越的样子的时候，我被无能为力的无力感袭击了。`,
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
        `可 ${vp.name} 是个坚强的${vp.uma_sex_title}，${vp.sex}一个人也能赢。`,
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
        }自己理所当然地做的事，在无限期待的过程中，${vp.teen_sex_title}在这个世界上发现了什么。`,
      );
      await era.printAndWait(`可能性和现状在脑海中相连。`);
      era.printButton(`「……对不被期待的事情的恐惧？」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement。');
      await era.printAndWait(
        `曾经成为传说，一个受到所有人期待的${vp.uma_sex_title}继续道。`,
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
      await era.printAndWait(`那是对今后也要不断被『痛苦』欺凌的人的怜悯吗。`);
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
      await me.say_and_wait(
        `你说『如果负责能连霸凯旋门赏的${vp.uma_sex_title}的话，作为社会人的评价也会提高吧。』`,
      );
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
        `从接触到带着『我们』没有的可能性出生的『${vp.sex}们』的那天开始。`,
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
      await era.printAndWait(`此时此地，你们之间终于仅有一个愿望。`);
      era.println();
      era.set('cflag:205:招募状态', recruit_flags.yes);
      sys_love_uma(205, 5) && (await era.waitAnyKey());
      if (sys_check_race_ready(205)) {
        sys_reg_race(205).curr = {
          race: race_enum.prix_lat,
          week:
            era.get('flag:当前回合数') +
            race_infos[race_enum.prix_lat].date -
            33,
        };
      }
      break;
    case 95 + 42:
      temp = [0, 0];
      await print_event_name('永远属于你', vp);
      await era.printAndWait(
        `那是一个假日的早晨，突然内线电话响了，${me.name} 走向门口。`,
      );
      await vp.say_and_wait(`Salut！训练员，我来了！`);
      era.print(`${me.name} 决定：`);
      era.printButton(`关上门`, 1);
      era.printButton(`……看错了吗？（好感-10，爱慕+1）`, 2);
      if ((await era.input()) === 2) {
        temp = [-10, 1];
      }
      await vp.say_and_wait(`喂喂，是我啊！`);
      era.printButton(`是来诈骗的吗？`, 1);
      era.printButton(`「请回吧，我没有钱！」（好感-10，爱慕+1）`, 2);
      if ((await era.input()) === 2) {
        temp[0] -= 10;
        temp[1]++;
      }
      await era.printAndWait(
        `${me.name} 想要关门，很遗憾人类不可能用腕力战胜${vp.uma_sex_title}。`,
      );
      await era.printAndWait(`门被撬开了。`);
      await era.printAndWait(
        `${vp.child_sex_title}一不小心在门口摔了个屁股蹲儿。`,
      );
      await era.printAndWait(
        `法国的公主、天才${vp.teen_sex_title}，不过在 ${
          me.name
        } 眼前整理头发的样子让人忍俊不禁。`,
      );
      await era.printAndWait(
        `虽然服装依旧是短裤配T恤，但是个子比相遇时大了不少。`,
      );
      await era.printAndWait(
        `欧美人特有的皮肤似乎晶莹剔透，脸上留着些许稚气。`,
      );
      await era.printAndWait(
        `你们在凯旋门赏上取得了胜利。从那以后，在电视和杂志上频繁登场，与品牌公司合作，一跃成为了红极一时的人。`,
      );
      await vp.say_and_wait(`我在哪里由我决定，训练员。`);
      await era.printAndWait(
        `视线和视线互相碰撞。关于主张，${vp.sex}有一定的道理。${vp.name} 脸上露出了自豪的表情。`,
      );
      await era.printAndWait(
        `${vp.name} 是世界最强的${vp.uma_sex_title}，${
          me.name
        } 不会忘记那时的情景。`,
      );
      await era.printAndWait(`身穿蓝色调的胜负服冲过终点线的瞬间。`);
      await era.printAndWait(
        `那是一种兼具与中学生相称的坦率和正直，有着与年龄相称的不服输，充满活力的${vp.uma_sex_title}的感觉。`,
      );
      await era.printAndWait(
        `那时的孩子长大了。个子变高，渐渐成了苗条的模特体型。`,
      );
      await era.printAndWait(
        `头发连发梢都打理的井井有条，简直像人偶一样齐整。`,
      );
      await era.printAndWait(`货真价实的美人。`);
      await vp.say_and_wait(`${sys_get_callname(205, 0)}。`);
      await vp.say_and_wait(`我不想回去。`);
      await vp.say_and_wait(`但只要你不愿意，我立刻就走。`);
      await era.printAndWait(
        `${vp.sex}的眼睛映出了 ${me.name} 糟糕的脸，不过本来就是刚起床。`,
      );
      era.print(`${me.name} 的答复是……`);
      era.printButton(`「……该干嘛干嘛去。」`, 1);
      era.printButton(`「出去走走吧。」（好感+15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      if ((await era.input()) === 1) {
        await vp.say_and_wait(`……明白了。`);
        await era.printAndWait(`这可能是标准答案，但或许不是最佳答案。`);
        await era.printAndWait(
          `${vp.name} 直截了当地应答，回到了自己走过来的路上。`,
        );
        await era.printAndWait(
          `按照 ${me.name} 说的回去，${vp.sex}的背影渐行渐远。`,
        );
        await era.printAndWait(
          `那个样子明明是 ${me.name} 想要的，但不知为什么却没能看下去。`,
        );
        await era.printAndWait(`为什么？不，理由很明显。`);
        await era.printAndWait(`——穿透身心的虚脱感慢慢地灼烧着内心。`);
        await era.printAndWait(`不用伸出手吗？不知从哪里传来了那样的话。`);
        await era.printAndWait(
          `想要伸出手，连那个 ${me.name} 都犹豫了。结果 ${me.name} 什么都没做。`,
        );
        await era.printAndWait(`然后 ${me.name} 像想要转移思绪一样回到家里。`);
        era.println();
        sys_like_chara(205, 0, temp[0] - 600, true, temp[1]) &&
          (await era.waitAnyKey());
      } else {
        era.drawLine();
        await era.printAndWait(`${vp.name} 依旧穿着短裤和黑色T恤，戴着墨镜。`);
        await era.printAndWait(
          `也许是因为不想被粉丝发现，特征性的栗毛被整理得太整齐，反倒吸引了周围的目光。`,
        );
        await era.printAndWait(
          `据说，${vp.uma_sex_title}的美貌大部分由毛色决定。`,
        );
        await era.printAndWait(
          `当然，长相等也要考虑，但总的来说，毛发的比重更重。`,
        );
        await era.printAndWait(
          `${vp.name} 的头发和尾巴，和这一带的${vp.uma_sex_title}完全不同。`,
        );
        await era.printAndWait(`变装，没有意义啊……`);
        await era.printAndWait(`${vp.name} 从车窗眺望外面的景色。`);
        await era.printAndWait(
          `摇摇晃晃地坐了一会儿，因换乘而下车，为了不在拥挤的人群中走散，${me.name} 牵着 ${vp.name} 的手带路。`,
        );
        await era.printAndWait(
          `突然回头一看，在人群中混迹的${vp.sex}，脸上浮现出像在泥中盛开的花朵一样美丽的笑容。`,
        );
        await era.printAndWait(`因为是休息日，所以行人很多。带家人的也很多。`);
        await era.printAndWait(
          `被妈妈牵着手的孩子东张西望地环视着周围。${vp.name} 对那个孩子有点目不转睛。`,
        );
        await era.printAndWait(
          `${vp.sex}用湿润的眼睛，认真地说出了好似恳求的话语。`,
        );
        await vp.say_and_wait(`再多一点，再多一点就好了。`);
        await era.printAndWait(
          `结果，你们要去的地方只有赛马场，来看了大井赛马场的比赛。`,
        );
        await vp.say_and_wait(`果然是比赛啊！`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(`${vp.name} 有兴致地看着比赛。`);
        await era.printAndWait(`很有趣，现在进行的是G3。`);
        era.printButton(`「有点意外。」`, 1);
        await era.input();
        await vp.say_and_wait(`什么？`);
        era.printButton(`「凯旋门${vp.uma_sex_title}对G3比赛感兴趣。」`, 1);
        await era.input();
        await vp.say_and_wait(`……也许是这样啊。`);
        await vp.say_and_wait(
          `如果你也是训练员的话应该知道，在${vp.sex}们看来，这也像凯旋门一样。`,
        );
        era.printButton(`「那不是说得太过分了吗？」`, 1);
        await era.input();
        await vp.say_and_wait(`……`);
        await era.printAndWait(`${vp.name} 的话，不知什么时候分量增加了。`);
        await era.printAndWait(`几年前的 ${me.name} 没有资格说${vp.sex}。`);
        await vp.say_and_wait(
          `对${vp.sex}们来说是大舞台，为此而调整，来到这里。赌上自己的灵魂。所以——`,
        );
        await me.say_and_wait('冲线了。', true);
        era.printButton(`「……是吗？」`, 1);
        await era.input();
        await era.printAndWait(
          `对 ${me.name} 来说，这是一场没有任何区别的G3比赛。`,
        );
        await era.printAndWait(
          `做了普通的准备，普通的努力，有一点闪光的地方。那样的比赛。`,
        );
        await era.printAndWait(
          `也许是因为 ${me.name} 站在训练员的立场上看了很多比赛，所以看漏了重要的东西。`,
        );
        await vp.say_and_wait(`……哈哈。`);
        await era.printAndWait(`干笑盈盈。`);
        await vp.say_and_wait(`……`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `赛马场很冷清。比赛已经结束了。但是，${me.name} 一点也起不来，弯着像灌了铅一样沉重的膝盖，坐在比赛场的观众席上。`,
        );
        await era.printAndWait(`风很冷。`);
        era.drawLine();
        await era.printAndWait(
          `到了深夜，${me.name} 和 ${vp.name} 走在东京的街道上。`,
        );
        await vp.say_and_wait(`……我想参加日本杯。`);
        await vp.say_and_wait(`……`);
        new TreveEduMarks().japa_cup = 4;
        await era.printAndWait(
          `${vp.name} 接下来似乎要讲一个重要的故事，这点 ${me.name} 心知肚明。`,
        );
        await vp.say_and_wait(`我忘不了你了，训练员。`);
        await vp.say_and_wait(
          `国家、人种什么的，我不知道。但如果是训练员你的话，我觉得会很开心。`,
        );
        await era.printAndWait(`这是 ${me.name} 的罪状。`);
        await era.printAndWait(`感到胸口隐隐作痛，${me.name} 假装没事。`);
        await vp.say_and_wait(`我爱你。`);
        await vp.say_and_wait(`我一直爱你。`);
        await era.printAndWait(`话语很流畅。`);
        await era.printAndWait(
          `一定是反复练习了好几次。为了 ${me.name} 特地练习。`,
        );
        await era.printAndWait(`头脑一片空白。心悸，呼吸好像变粗了？`);
        await era.printAndWait(
          `每次被${vp.sex}展露心意的时候，${me.name} 的心也会被暴露出来。`,
        );
        await era.printAndWait(
          `就像抽丝剥茧一样，${vp.name} 的话就像一张一张地扯掉面纱，让 ${me.name} 的心也赤裸。`,
        );
        await era.printAndWait(`而 ${me.name} 感到了无可奈何的遗憾。`);
        await era.printAndWait(`${vp.name} 反复说了很多话。`);
        await vp.say_and_wait(
          `……呐，${
            me.actual_name
          }。如果我们不是训练员和${vp.uma_sex_title}的话，我们能相遇吗？`,
        );
        era.printButton(`「……不会。」`, 1);
        await era.input();
        await vp.say_and_wait(`也是啊。`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `从你们站的这个地方抬头，天上只有几颗一等星闪闪发光。`,
        );
        await era.printAndWait(`这是从市中心看到的廉价星空。`);
        await era.printAndWait(
          `出生在这低沉的星空下，恐怕也会在这里死去的 ${me.name} 和抱着满分星空般未来的${vp.sex}。`,
        );
        await era.printAndWait(`不平衡什么的很明显。`);
        await era.printAndWait(
          `${me.name} 告诉了眼看就要哭出来的 ${vp.name}。`,
        );
        await era.printAndWait(`夜风吹来，快日落了。`);
        await era.printAndWait(`${vp.name} 的眼睛和相遇的时候比没有什么变化。`);
        await era.printAndWait(
          `和至今为止回想过好几次的记忆中的${vp.sex}一样。`,
        );
        await era.printAndWait(
          `但是，也有改变的事情。${vp.sex}萌生了对比赛以外的兴趣。`,
        );
        await era.printAndWait(`时间会改变一切。`);
        await era.printAndWait(
          `${me.name} 和${vp.sex}不一样，只会拖${vp.sex}的后腿。`,
        );
        await era.printAndWait(`${me.name} 不想拖${vp.uma_sex_title}的后腿。`);
        await era.printAndWait(`所以——`);
        era.printButton(`「分手了。」`, 1);
        await era.input();
        await vp.say_and_wait(`嗯……！`);
        await me.say_and_wait(
          `不要再出现在我面前。如果不是工作的话，也不要来日本。消失吧。`,
        );
        await vp.say_and_wait(`为什么，为什么这么说！`);
        await me.say_and_wait(`……`);
        await vp.say_and_wait(`记忆中的训练员很温柔，我一直在想——`);
        await me.say_and_wait(`那就错了。`);
        await vp.say_and_wait(`嗯……！`);
        await me.say_and_wait(
          `……马上就要到晚上了，睡了就要到早上了。这样的话就是明天了，再见——`,
        );
        await vp.say_and_wait(`等一下！`);
        await me.say_and_wait(`……`);
        await vp.say_and_wait(`至少，至少心情…至少训练员的心情——`);
        era.printButton(`「不知道。」`, 1);
        await era.input();
        await vp.say_and_wait(`啊……！`);
        await era.printAndWait(`${me.name} 说出了适合最低等人生的话。`);
        await vp.say_and_wait(`骗子！`);
        await me.say_and_wait(`……`);
        await era.printAndWait(
          `${me.name} 听到了 ${vp.name} 从背后离去的脚步声。`,
        );
        await era.printAndWait(`${me.name} 晃晃悠悠地来到了东京赛马场。`);
        await era.printAndWait(
          `赛马场很冷，${me.name} 感到周围的喧嚣在复苏，是行驶在道路上的车的声音和树叶摇曳的声音。`,
        );
        await era.printAndWait(`十一月了，日本杯临近。`);
        await era.printAndWait(
          `${me.name} 暂时站在那里，在秋天的赛马场一个人站着。`,
        );
        await era.printAndWait(`${me.name} 的旁边没有别人。`);
        await era.printAndWait(`这样就好了，所以——`);
        era.printButton(`「忘了吧……」`, 1);
        await era.input();
        await era.printAndWait(`——过了几分钟呢。`);
        await era.printAndWait(`天已经黑了，夜幕降临到东京赛马场。`);
        await era.printAndWait(`听广播好像马上就要到关门的时间了。`);
        await era.printAndWait(`心里似乎有一个洞。`);
        await era.printAndWait(
          `当 ${me.name} 将要离开时……出入口站着 ${vp.name}。`,
        );
        era.printButton(`「为什么你会在这里……」`, 1);
        await era.input();
        await era.printAndWait(
          `${vp.name} 用惊人的脚力向 ${me.name} 冲刺。${vp.sex}的头像枪一样扎进 ${me.name} 的腹部，肺彷佛被压碎了。`,
        );
        await era.printAndWait(`痛、相当痛。`);
        await era.printAndWait(`刺骨的痛感刺激着神经。`);
        await era.printAndWait(
          `${vp.name} 抱在 ${me.name} 的肚子上，${vp.sex}——`,
        );
        await era.printAndWait(`哭了。`);
        await era.printAndWait(
          `那蓝宝石般美丽的眼睛扭曲着，像要裂开一样皱眉。`,
        );
        await vp.say_and_wait(
          `训练员笨蛋！Stupide idiot.Pourquoi dis-tu des choses aussi horribles！（大笨蛋！为什么这么过分！）`,
        );
        era.printButton(`「等一下！我不知道你在说什么！——」`, 1);
        await era.input();
        await era.printAndWait(`${vp.name} 就这样在 ${me.name} 的臂弯里哭。`);
        await era.printAndWait(
          `擅自扑上来，受到伤害的是 ${me.name}，${vp.sex}却在哭。`,
        );
        await era.printAndWait(`当然了，是 ${me.name} 伤了${vp.sex}的心。`);
        await era.printAndWait(
          `准备清场的工作人员来了。惊讶地盯着你们看了一眼。`,
        );
        await era.printAndWait(`大概是被当成疯丫头和坏男人，情侣吵架吧。`);
        await era.printAndWait(`那个人马上转移视线，回到了自己的工作中。`);
        await era.printAndWait(`灯饰点缀着赛马场，在那样的地方你们蹲在地上。`);
        await vp.say_and_wait(
          `你以为我是抱着怎样的想法站在这里的！要来接我的话就赶紧来！`,
        );
        era.printButton(`「诶！？不是你埋伏我——」`, 1);
        await era.input();
        await vp.say_and_wait(`吵死了，吵死了！我不想听你狡辩，你这个笨蛋！`);
        era.printButton(`「诶欸欸？」`, 1);
        await era.input();
        await era.printAndWait(
          `${
            me.name
          } 感觉真的快要被${vp.uma_sex_title}特有的怪力抱碎了，于是在 ${
            vp.name
          } 的背上轻拍。`,
        );
        await era.printAndWait(
          `明明说了『abandonne放弃』，${vp.name} 却一点也不想离开。痛哭的${vp.sex}，反倒增强了力量。`,
        );
        await era.printAndWait(`也许这就是自作自受吧…………但是肋骨真的要断了。`);
        await vp.say_and_wait(`怎么样？`);
        era.printButton(`「？」`, 1);
        await era.input();
        await vp.say_and_wait(`你爱我吗！？不爱我吗！？`);
        era.printButton(`「不是这样说的问题——」`, 1);
        await era.input();
        await vp.say_and_wait(`就是这样的问题！`);
        era.printButton(`「如果不爱你，我就不会这么困扰了。」`, 1);
        era.printButton(`「因为喜欢你，所以才困扰啊！」`, 2);
        await era.input();
        await era.printAndWait(`${vp.name} 就像一条得水的游鱼。`);
        await vp.say_and_wait(
          `那就快点举行婚礼吧！订婚，还要买戒指……『师傅』一定也会祝福我们的！`,
        );
        await vp.say_and_wait(
          `在法国做的话是教会吧？在日本也可以，穿着雪白的衣服在寺庙前对爱发誓！`,
        );
        era.printButton(`「不是寺庙人家叫神社。」`, 1);
        await era.input();
        await era.printAndWait(
          `${me.name} 为了阻止自嗨的 ${vp.name} 而抓住了${vp.sex}的肩膀。`,
        );
        await vp.say_and_wait(`好大胆…`);
        await vp.say_and_wait(`在外面什么的……但如果是你的话——`);
        era.printButton(`「别说奇怪的话了！我并没有说什么结婚的事！」`, 1);
        await era.input();
        await vp.say_and_wait(`也就是先成为情侣的意思吧，我很感动！`);
        await vp.say_and_wait(
          `周围的人也一定会理解并接受的！否则，孩子真的会很痛苦！`,
        );
        era.printButton(`「我又不是欧洲人。」`, 1);
        await era.input();
        await vp.say_and_wait(`人种那么重要！？`);
        era.printButton(`「很重要吧！？」`, 1);
        await era.input();
        await vp.say_and_wait(
          `我不是看了你的人种和容貌才爱上你的，而是爱上了你的心！`,
        );
        await vp.say_and_wait(
          `亚洲人？所以呢，怎么了？我会对吵吵嚷嚷的人大声喊『吵死了』！谁都不会妨碍我们！`,
        );
        await vp.say_and_wait(`不要随便决定我的价值！`);
        await vp.say_and_wait(
          `我的价值是由我决定的，将来都是！请不要自恋！即使和你结婚，我也不会改变什么！如果有人说烦人的话，我就把他头拧下来！`,
        );
        era.printButton(`「这有点……」`, 1);
        era.printButton(`「不至于……」`, 2);
        await era.input();
        await era.printAndWait(
          `于是，虽然哭肿了的脸，尽管如此 ${vp.name} 也高贵地站了起来。`,
        );
        await era.printAndWait(
          `即使脱了妆，${vp.sex}还是很美。像是用神圣照亮夜晚的月亮。`,
        );
        await vp.say_and_wait(
          `我是天才${vp.uma_sex_title}！大部分的事情都可以说是fermez-la！`,
        );
        era.printButton(`「我不想让你烦心。」（好感+10，爱慕+1）`, 1);
        era.printButton(`「你要明白……」`, 2);
        if ((await era.input()) === 1) {
          temp[0] += 10;
          temp[1]++;
        }
        await vp.say_and_wait(
          `不明白，完全不明白！如果你喜欢我的话，就让我开心吧！我说了要和你在一起！我说只有你才能让我幸福！`,
        );
        era.printButton(`「『能让我幸福的只有你』……这才是求婚吧！」`, 1);
        await era.input();
        await vp.say_and_wait(`之前不是！现在的才是求婚！`);
        era.printButton(`「莫名其妙！」`, 1);
        await era.input();
        await vp.say_and_wait(`我喜欢你到莫名其妙的程度！`);
        await era.printAndWait(
          `彼此的吼声在东京夜晚的一角回响。彼此都气喘吁吁，但没有移开视线。`,
        );
        await vp.say_and_wait(
          `我一直在心中的某个地方追着你！我试过不去想你，但还是做不到！和训练员聊天的日子，那些记忆就像是被录下了一样循环播放着！`,
        );
        era.print(`${me.name} 也是……`);
        era.printButton(`「一直想着你。」`, 1);
        era.printButton(`「一直忘不了……」`, 2);
        await era.input();
        await vp.say_and_wait(`那么！`);
        await era.printAndWait(
          `${vp.name} 从膝盖上靠近 ${me.name}，抓住 ${me.name} 的胸口。`,
        );
        await era.printAndWait(`被美女吓到的话会害怕，这好像是真的。`);
        await era.printAndWait(
          `${vp.sex}的法裔端正容貌逼近到了近距离。${vp.name} 对 ${me.name} 开口。${vp.sex}的怒吼在大井赛马场前响起。`,
        );
        await vp.say_and_wait(`你这个笨蛋。`);
        era.printButton(`「我不是笨蛋」`, 1);
        await era.input();
        await vp.say_and_wait(
          `不，笨蛋！就算弱小也没关系……如果没出息的话就携手支持就好了。你没有放弃责任，我更不能放弃。`,
        );
        await vp.say_and_wait(
          `训练员和${vp.uma_sex_title}的关系是对等的。我们会全力奔跑，训练员则会引导。就像是缺一不可的夫妇一样。`,
        );
        await vp.say_and_wait(`所以……咕、嘶，我们才会互相吸引，不是吗？`);
        await era.printAndWait(
          `${me.name} 把比自己小十岁的${vp.child_sex_title}子弄哭了。`,
        );
        await era.printAndWait(`夜晚有点冷。因为白天很热，所以你们穿得很少。`);
        await era.printAndWait(
          `尽管如此，两个人聚在一起，像虫子一样用体温温暖彼此的话，就不会冷了。`,
        );
        await era.printAndWait(
          `${vp.name} 依然露出忧心忡忡的表情，${me.name} 抚摸着${vp.sex}的脑袋。`,
        );
        era.printButton(`「有点冷？」`, 1);
        await era.input();
        await vp.say_and_wait(`……嗯。`);
        era.printButton(`「先去你住过的酒店吧。这样下去会感冒的。」`, 1);
        await era.input();
        await vp.say_and_wait(`好的。`);
        await era.printAndWait(`${vp.sex}按照 ${me.name} 说的一起走了。`);
        await era.printAndWait(`灯饰的光辉照耀着你们的背影。`);
        era.drawLine();
        era.printButton(`「${vp.name}，这是怎么回事……！？」`, 1);
        await era.input();
        await vp.say_and_wait(
          `带${vp.child_sex_title}子进房间，不觉得只有一件事要做吗？`,
        );
        await era.printAndWait(
          `勉强遮住皮肤的布被解开，${vp.name} 那双海蓝的眼睛发出奇怪的光。`,
        );
        await vp.say_and_wait(
          `rb:Bonne soirée（祝你有个美好的夜晚），rb:ma cheri（我心爱的人）。`,
        );
        await quick_into_sex(205);
        await era.printAndWait(
          `本来只是打算在房间里冷静一下，等着的时候，出现了穿着浴巾的 ${vp.name}。`,
        );
        await era.printAndWait(`未成年淫行上演。`);
        await era.printAndWait(
          `总之，完全失去了法律这一后盾的 ${me.name} 不可能阻止世界最强的${vp.sex}，就这样完全上垒了。`,
        );
        await era.printAndWait(`${me.name} 和担当在夜晚玩得很开心。`);
        await vp.say_and_wait(`早上好，亲爱的`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(
          `旁边是一个裸体的 ${vp.name}，${me.name} 对这种状况感到安心。`,
        );
        era.printButton(`「……早上好，我的公主。」`, 1);
        await era.input();
        await vp.say_and_wait(`咦，你承认了吗？`);
        await vp.say_and_wait(`……这样啊，果然从一开始就这样做就好了。`);
        era.printButton(`「不要说可怕的话。」`, 1);
        await era.input();
        await era.printAndWait(
          `从窗户射入的朝阳照射下的 ${vp.name} 像画上的圣母一样美丽。`,
        );
        await era.printAndWait(
          `被纯白的面纱包着，一边趴着一边看着 ${me.name} 的${vp.sex}，只隐藏着突出的部分，让背鲁莽地露出。`,
        );
        await era.printAndWait(
          `${me.name} 冲动地抚摸着像艺术品一样的 ${vp.name} 的脑袋。${vp.sex}那流丽的发丝穿过手指。`,
        );
        await vp.say_and_wait(`……♪`);
        await vp.say_and_wait(`……`);
        await era.printAndWait(`看着${vp.sex}微笑的脸，${me.name} 下定决心。`);
        await vp.say_and_wait(
          `我最喜欢你了。到现在为止，我一直在想你。我梦想着这样说话。`,
        );
        era.printButton(`「我也是，${vp.name}」`, 1);
        await era.input();
        await era.printAndWait(`微笑着的${vp.sex}，果然很漂亮。`);
        await vp.say_and_wait(`我爱你，训练员。`);
        era.printButton(`「啊，我爱你，只属于我的 ${vp.name}。」`, 1);
        await era.input();
        await era.printAndWait(
          `${vp.sex}那可爱地握着 ${me.name} 的手的样子，在任何人看来都是圣女。`,
        );
        await era.printAndWait(`${me.name} 眼前的爱马美颜生彩，笑靥生辉。`);
        era.println();
        sys_like_chara(205, 0, temp[0] + 15, true, temp[1]) &&
          (await era.waitAnyKey());
      }
  }
};
