const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} nature
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (nature, me, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 60) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg;
  if (event_arg === 47 + 33) {
    await print_event_name('下定决心努力前行！', nature);

    await era.printAndWait(
      `听说有人在河岸边看到优秀素质，于是 ${me.name} 过去找${nature.sex}──`,
    );
    await nature.say_and_wait('呼、呼……呼……');
    await nature.say_and_wait('不行，奔跑的时候……要多动动脑袋……');
    await nature.say_and_wait('还有士气。内恰，你变消沉了。别沮丧，振作一点～');
    await nature.say_and_wait('想起来、快想起来。我是怎么奔跑的？');
    await nature.say_and_wait(
      '只要保持自己的作风，一步一步……慢慢前进就好了，对吧。',
    );
    await nature.say_and_wait('就算不知道有没有到达的一天……');
    await nature.say_and_wait('……我也要竭尽所能，勇敢面对。');
    await nature.say_and_wait('虽然还不算是能抬头挺胸，有自信地面对比赛……');
    await nature.say_and_wait('但我没得逃避。所以，我一定要跟帝王──');
    era.printButton('「内恰你一定办得到」', 1);
    await era.input();
    await nature.say_and_wait(
      `啊……${era.get('callname:60:0')} 真是的，动不动就这么宠我～`,
    );
    await nature.say_and_wait('这可不行喔～这样会被我这样的人缠住不放的……');
    era.printButton('「自主练习辛苦了！」', 1);
    await era.input();
    await nature.say_and_wait('唔哇！你、你什么时候来的！？');
    await nature.say_and_wait(
      '啊……算了，不必说出来。知道的话，大概会胸口堵堵的。',
    );
    era.printButton('「刚才做的是什么训练？」', 1);
    await era.input();
    await nature.say_and_wait('……要说是训练的话，也算是吧。');
    await nature.say_and_wait(
      '我想要稍微磨练赢得胜利的力量，找出适合自己的武器。',
    );
    await nature.say_and_wait('关键还是在于终点前。必须好好把握最后的直线。');
    await nature.say_and_wait(
      '以这个为前提的3000米……哈哈。这么一想，真的很长呢。',
    );
    await era.printAndWait(
      '3000米……若不抓准进攻时机，要在直线决定胜负恐怕也很难。',
    );
    await era.printAndWait(
      `${me.name} 希望优秀素质可以惬意地奔跑。能在比赛结束后，露出一如往常的开朗笑容。`,
    );
    await nature.say_and_wait(`${era.get('callname:60:0')}？`);
    era.printButton('「加油吧！」', 1);
    await era.input();
    await nature.say_and_wait('什么？');
    await nature.say_and_wait('加油……好随便的建议……');
    era.printButton('「不，刚才那是……」', 1);
    await era.input();
    await era.printAndWait(`${me.name}本来是要鼓励自己的，却不小心脱口而出。`);
    await nature.say_and_wait(
      '噗，呵呵呵……啊哈哈哈！讨厌啦！别一副『完蛋了』的表情嘛。',
    );
    await nature.say_and_wait('呼……嗯，你说得对，加油吧。');
    await nature.say_and_wait('既然没办法逃避，就只能勇往直前。');
    await nature.say_and_wait(
      `${era.get('callname:60:0')}，现在可以陪我一下吗？`,
    );
    await nature.say_and_wait(
      `${sys_get_callname(
        60,
        60,
      )} 会加油的。若你能在一旁关注着我，我会很开心的。`,
    );
    era.printButton('「我才要请你多多指教」', 1);
    await era.input();
    await nature.say_and_wait('哈哈，你真的很上道。');
    await nature.say_and_wait('好，那就来吧！');
    await nature.say_and_wait('越是努力，越有望拿下训练员奖杯喔？');
    era.printButton('「……我会精进自己的」', 1);
    await era.input();
    await nature.say_and_wait('啊哈哈哈哈！');
    era.println();
    get_skills_and_print_in_event(60, [200512]);
    get_attr_and_print_in_event(60, [20, 20, 0, 0, 0], 0);
    await era.waitAnyKey();
  } else if (event_arg === 47 + 42) {
    await print_event_name('王座的背后', nature);

    const teio_talk = get_chara_talk(3);
    const maya_talk = get_chara_talk(24);
    const luna_talk = get_chara_talk(17);
    await era.printAndWait(
      `在 ${me.name} 和优秀素质为了准备下个目标「有马纪念」，持续进行训练的某一天……`,
    );
    await nature.say_and_wait(
      `仰卧推举结束～${era.get('callname:60:0')}，我可以稍微休息一下吗？`,
    );
    era.printButton('「好啊」', 1);
    await era.input();
    await nature.say_and_wait('那我小歇个10分钟。');
    await teio_talk.say_and_wait('呼……呼……！还剩三组……！');
    await nature.say_and_wait('嗯？那是……');
    await era.printAndWait(
      `${me.name} 顺着优秀素质的视线看去，东海帝王正在努力投入训练。${teio_talk.sex}似乎正在使用能辅助身体的特殊机器……`,
    );
    await maya_talk.say_and_wait('啊，是内恰酱～♪一起休息吧──！');
    await nature.say_and_wait(
      '哦──重炮，你来得正好。你看那边，帝王在做什么啊？',
    );
    await maya_talk.say_and_wait(
      `${teio_talk.sex}是在复健哦──！${teio_talk.sex}的伤有点严重呢。`,
    );
    await nature.say_and_wait('咦……');
    await maya_talk.say_and_wait('毕竟小帝王之前在床上躺了满久的嘛──');
    await nature.say_and_wait('这样啊……');
    await teio_talk.say_and_wait(
      '……好痛，脚好沉重～～！是不是有点努力过头了啊──？',
    );
    await luna_talk.say_and_wait('帝王，看来你正在奋发向上呢。');
    await teio_talk.say_and_wait(
      '哇啊，是会长！当然了，我状态绝佳地在努力哦！……虽然我是很想这样说啦，但其实我离状态绝佳应该还很远。',
    );
    await teio_talk.say_and_wait(
      '不过，我已经可以看到完全复活之路了！应该能变得比以前更强哦♪',
    );
    await luna_talk.say_and_wait('唔……我还以为你会劈头就要我称赞你的努力呢……');
    await teio_talk.say_and_wait(
      '咦──我才不会要求那个！我比较想在跑赢时被称赞！',
    );
    await teio_talk.say_and_wait(
      '因为努力是理所当然的嘛！我也不能一直被困在这里。',
    );
    await teio_talk.say_and_wait(
      '不快点治好的话就不能奔跑。不奔跑的话……就追不上会长了。不是吗？',
    );
    await luna_talk.say_and_wait(
      '……原来如此。是我失礼了。看来我之前小看了你的精神力。',
    );
    await luna_talk.say_and_wait(
      '现在是实力稳定，身心都很充实的时期。在此时受伤，就连我都会感到痛苦。',
    );
    await teio_talk.say_and_wait(
      '……所以你跑来鼓励我吗？嘿嘿。会长真是的，你以为我是谁啊？',
    );
    await teio_talk.say_and_wait(
      '无论比赛还是演唱会都大活跃！比谁都快、都强、都帅气。',
    );
    await teio_talk.say_and_wait(
      '我……吾可是无敌的帝王大人哦！无论发生什么事都能轻松克服！',
    );
    await luna_talk.say_and_wait('呵……说得也是呢。我很期待哦，东海帝王！');
    await teio_talk.say_and_wait('嗯！');
    await nature.say_and_wait(`……${teio_talk.sex}是不是比之前更闪亮了啊？`);
    await nature.say_and_wait(
      `该说是这次的碰壁让${teio_talk.sex}变得更强了吗……`,
    );
    await nature.say_and_wait('我这种小路人……就算碰壁也只会胡思乱想而已。');
    await nature.say_and_wait(
      `……但${teio_talk.sex}却能轻易地重新振作。不愧是主角，格局就是不一样。`,
    );
    await maya_talk.say_and_wait(
      `嗯──算轻易吗？小帝王${teio_talk.sex}当时哭得很惨哦。`,
    );
    await nature.say_and_wait('咦……？');
    await maya_talk.say_and_wait(
      `毕竟那时${teio_talk.sex}无法参加重要的竞赛嘛。当时${teio_talk.sex}看起来真的很痛苦呢。`,
    );
    await nature.say_and_wait('……这……这样啊。那个帝王竟然……');
    await era.printAndWait('之后的训练中，优秀素质看起来若有所思。');
    await era.printAndWait(
      `──而在训练结束后，${teio_talk.sex}缓缓地对 ${me.name} 说出了自己的心情。`,
    );
    await nature.say_and_wait(
      '……我一直以来都误解了。不对，我可能是……故意这么误解的。',
    );
    await nature.say_and_wait(
      `因为帝王是主角，所以才会那么强。因为${teio_talk.sex}天生就很有才华。因为${teio_talk.sex}从一开始就备受眷顾。`,
    );
    await nature.say_and_wait(
      `${teio_talk.sex}当然会跟我这种路人不一样。我一直用这种想法保护弱小的自己。`,
    );
    await nature.say_and_wait('不过……其实我错了。帝王跟我都是一样的。');
    await nature.say_and_wait(
      `${teio_talk.sex}也可能再怎么努力都跑不赢、也会受伤……而且${teio_talk.sex}也知道其中的痛苦之处。`,
    );
    await nature.say_and_wait(
      `${teio_talk.sex}跟我不一样的是……遇到打击之后的反应。能靠着自己重新站起来，就是${teio_talk.sex}的坚强之处。`,
    );
    await nature.say_and_wait(
      '……真是的，事到如今我还是觉得可怕。我之前竟然认为自己能赢过那么强的孩子。',
    );
    await nature.say_and_wait(
      '我这种人，既没毅力也没勇气，却只会看着前面的人，嘴里说着不公平。',
    );
    await nature.say_and_wait(
      '──我以为自己无法站上那个舞台，但明明是我自己走下台的。',
    );
    await nature.say_and_wait('我不知好歹、贪得无厌、只会撒娇。但是、但是……');
    era.printButton('「即使如此还是想跑赢」', 1);
    await era.input();
    await nature.say_and_wait('……嗯。');
    await nature.say_and_wait('既然我跟那孩子还有那么一点共同点，那我也……');
    await nature.say_and_wait('那我也……！');
    await era.printAndWait(
      `虽然${teio_talk.sex}没再继续说下去，但那充满决心的双眼已经说明了一切。`,
    );
    era.printButton('「要赢哦！」', 1);
    await era.input();
    await nature.say_and_wait('──嗯！');
    era.println();
    get_attr_and_print_in_event(60, [0, 0, 0, 0, 5], 0);
    await era.waitAnyKey();
  } else if (event_arg === 95 + 42) {
    await print_event_name('闪闪发光', nature);

    await era.printAndWait(
      `那一天，都到训练时间了，优秀素质却没有出现。平常${nature.sex}都会提早来的……`,
    );
    await era.printAndWait(
      `${me.name} 很担心${nature.sex}，于是到学园内寻找──`,
    );
    await era.printAndWait(
      `──结果在枯树洞前发现了${
        nature.sex
      }。赛${nature.get_uma_sex_title()}们都知道，想大叫发泄内心的情绪时都会来这里。`,
    );
    await nature.say_and_wait('……应该没有人在吧。');
    await nature.say_and_wait('好……！');
    await nature.say_and_wait('为──什么……要说那种话啊？我这个笨蛋──！！');
    await nature.say_and_wait('我竟然对那个正统主角宣战了……！');
    await era.printAndWait(
      `话要说回天皇赏（秋）结束后，${me.name} 和优秀素质在回程的路途上碰到了东海帝王，`,
    );
    await era.printAndWait(
      `并得知了${nature.sex}也要出战今年的有马纪念。不过在氛围的推动下，优秀素质做出了「我一定会在有马纪念上战胜你」的宣言——`,
    );
    await nature.say_and_wait(
      '我这路人也太得意忘形了吧！！真是受不了……笨蛋────！！',
    );
    await nature.say_and_wait(
      '明明我根本还没闪闪发光……笨蛋笨蛋笨蛋笨蛋！笨蛋──！！',
    );
    await nature.say_and_wait('呼……呼……');
    await nature.say_and_wait('不行，完全没有舒畅的感觉……');
    era.printButton('「内恰！」', 1);
    await era.input();
    await nature.say_and_wait(
      `唔啊！？训训训训、${era.get('callname:60:0')}！？`,
    );
    await nature.say_and_wait('你怎么会在这……呃，啊！');
    await nature.say_and_wait('该不会早就到了训练时间……？');
    era.printButton('「是啊」', 1);
    await era.input();
    await nature.say_and_wait(
      '啊啊啊啊啊啊啊啊啊啊……啊──！？之前是不是也发生过一样的事！？',
    );
    await nature.say_and_wait(
      '啊呜呜……为什么总是让训练员看到我这么丢脸的一面呢……',
    );
    era.printButton('「没关系的」', 1);
    await era.input();
    await nature.say_and_wait('咦……');
    era.printButton('「在我面前你可以尽量露出丢脸的一面」', 1);
    await era.input();
    await nature.say_and_wait('……唔！！');
    await nature.say_and_wait('呜呜呜……呜呜呜呜呜～～！！');
    await nature.say_and_wait(`${era.get('callname:60:0')}，我……`);
    await nature.say_and_wait('我不想跑！我好害怕……！');
    await nature.say_and_wait('呜哇啊啊啊……！');
    await era.printAndWait(
      '后来优秀素质像个孩子一样毫无掩饰地不断哭泣。接着──',
    );
    await era.printAndWait(
      `冷静下来后，${nature.sex}对 ${me.name} 说出自己的心情……`,
    );
    await nature.say_and_wait(
      '……现在我的状态调整得很完美对吧？我想……现在应该是有史以来最好的状态。',
    );
    await nature.say_and_wait(
      '我的实力增加了，也对自己有信心。也下定决心要认真应战了。',
    );
    await nature.say_and_wait('但是……万一这样还是输了呢？');
    await nature.say_and_wait(
      '要是连现在这个最强状态的我，都还是离闪闪发光非常遥远……？',
    );
    await nature.say_and_wait('……我好害怕。');
    await nature.say_and_wait(
      '要是在这里输了，感觉就连过去的我都会一起被否定。',
    );
    await nature.say_and_wait(
      '『我还没认真起来』、『我还有成长空间』、『这不是我的所有实力』……',
    );
    await nature.say_and_wait(
      '我之前一直像这样拼命保护着自己。但是那种借口……现在已经不管用了啊。',
    );
    era.printButton('「你是认真的呢」', 1);
    await era.input();
    await nature.say_and_wait('……！是啊，我很认真！');
    await nature.say_and_wait(
      '我都这么认真了，要是输了……又会变回『表现很好，但不是最棒』的自己。',
    );
    await nature.say_and_wait('我好害怕。真的好害怕……');
    era.printButton('「别担心，你不会输的」', 1);
    await era.input();
    await nature.say_and_wait('……抱歉，这次我比以前更没办法坦率地接受这句话。');
    await nature.say_and_wait(
      '因为我一定无法用结果回应这句话。我觉得自己已经一步都踏不出去了……',
    );
    era.printButton('「即使这样我还是想相信你，不行吗？」', 1);
    await era.input();
    await nature.say_and_wait('……唔。你相信的根据是什么？');
    era.printButton('「这里就有很多根据」', 1);
    await era.input();
    await nature.say_and_wait('──这是……');
    await nature.say_and_wait('……用纸折成的奖杯……吗？看起来歪歪扭扭的。');
    await nature.say_and_wait('……你真的做了啊？嘿嘿，还是做得歪歪扭扭的。');
    await nature.say_and_wait('你今天也有为我准备……歪歪扭扭的奖杯吗？');
    await nature.say_and_wait('训练员做的奖杯……');
    await era.printAndWait(
      `${me.name} 让优秀素质看了目前为止 ${me.name} 送给${nature.sex}的那些手工制奖杯的试做样品。`,
    );
    const temp = Object.values(era.get('cflag:60:育成成绩'))
      .filter((e) => e.race !== race_enum.begin_race)
      .map((e) => e.race);
    await nature.say_and_wait(
      `${temp
        .slice(0, 4)
        .map((e) => `『${race_infos[e].name_zh}』`)
        .join('、')}……除此之外还有好多……`,
    );
    await era.printAndWait('……你为我做了这么多啊……');
    era.printButton('「这也是我持续相信你所累积下来的成果」', 1);
    await era.input();
    await nature.say_and_wait('──我到目前为止所累积下来的东西……');
    await nature.say_and_wait(
      '……你明明也可以中途放弃我啊。为什么训练员愿意相信我呢？',
    );
    era.printButton('「因为我很喜欢你啊」', 1);
    await era.input();
    await nature.say_and_wait('……什么！？为什么要在这种时候……');
    await era.printAndWait(
      `${me.name}告诉优秀素质，身为一个训练员，${me.name} 是真心地支持着从不放弃获胜、一路拼命努力至今的${nature.sex}……`,
    );
    await nature.say_and_wait('……嗯，我明白你的意思了。虽然我早就想到了……');
    await nature.say_and_wait('唉……嗯，抱歉啊。我可能有点太慌张了。');
    await nature.say_and_wait('大声宣布『我会赢』，真的是件很可怕的事呢。');
    await nature.say_and_wait(
      `……原来帝王${nature.sex}一直都在对抗这种压力啊。`,
    );
    await nature.say_and_wait('好厉害……不过，我也不会再害怕了。');
    await nature.say_and_wait('毕竟有喜欢我的人跟在我身边嘛？');
    await nature.say_and_wait('我要赢，因为我还有一个很重要……非常重要的理由。');
    await nature.say_and_wait(
      '……话说回来，训练员也真辛苦呢。竟然还得帮我心理辅导。',
    );
    await nature.say_and_wait('虽然这应该也是工作之一啦。');
    era.printButton('「因为我的工作是让你闪闪发光」', 1);
    await era.input();
    await nature.say_and_wait('……只是因为工作？');
    await nature.say_and_wait('……开、玩、笑、的、啦──！刚才的就当作没听到吧！');
    await nature.say_and_wait('该训练了对吧！我、我要用跑的去换衣服了！');
    await era.printAndWait(
      `……看来${nature.sex}重新调整好心情了。既然如此，接下来就朝着前方一同前进吧！`,
    );
    era.println();
    get_attr_and_print_in_event(60, [0, 0, 0, 5, 0], 0);
    await era.waitAnyKey();
  } else {
    return false;
  }
  return true;
};
