const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EduEventMarks = require('#/data/event/edu-event-marks');
const { location_enum } = require('#/data/locations');

const quick_into_sex = require('#/event/snippets/quick-into-sex');

/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async function (hook, __, event_object) {
  const chara_talk = get_chara_talk(400),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:400:育成回合计时'),
    event_marks = new EduEventMarks(400),
    edu_event_marks = new EduEventMarks(400),
    chara25_talk = get_chara_talk(25);
  let wait_flag = false;
  if (event_marks.get('beginning') === 1) {
    event_marks.add('beginning');
    await print_event_name(`初步磨合`, chara_talk);
    await chara_talk.say_and_wait(`是这样啊，我明白了。`);
    await chara_talk.say_and_wait(
      `我相信我的眼光，也相信你的才华，所以我希望我们能一起往前进步，`,
    );
    await chara_talk.say_and_wait(
      `但是我必须把丑话说在前头，我的目标只有胜利，如果我无法完成目标的话，`,
    );
    await chara_talk.say_and_wait(
      `不介意换一个训练员，所以我希望我们双方不会出现拖后腿的情况发生，`,
    );
    await chara_talk.say_and_wait(
      `当然如果你发现我跟不上你的步伐的话，把我踢掉也无所谓。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}似乎真的就是这样想的，毫不在意你的想法说出了这样赤裸裸的话语，`,
    );
    await era.printAndWait(
      `但是你注意到当${chara_talk.sex}提到你也可以踢掉${chara_talk.sex}的时候，`,
    );
    await era.printAndWait(`${chara_talk.name}的尾巴摇晃的似乎有些快。`);
    await chara_talk.say_and_wait(
      `开始是速度的训练还是耐力的训练呢？热身结束之后我需要一个切实答案哦。`,
    );
    await era.printAndWait(
      `${chara_talk.name}站在阳光之下开始活动起了身子，在阳光的照射下${chara_talk.sex}的脑门上很快泛起了细细的汗珠，脸上也出现了一丝红霞。`,
    );
    era.printButton(
      `对于你目前的情况来说，我要先增强你的力量与耐力，所以我会对于这一块特别进行训练。`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(
      `拖雷纳君现在的自信我很喜欢哦，那我就一切都听从你的安排了。`,
    );
    await era.printAndWait(
      `在号令枪的声响之中，${chara_talk.name}迈出了自己坚实的步伐，`,
    );
    await era.printAndWait(
      `跑鞋在草地上留下了一排浅浅的脚印，${chara_talk.name}看起来不慌不忙的完成着热身的两千米跑。`,
    );
    await era.printAndWait(
      `任谁都能看得出来，面前的少女身上有着寻常${chara_talk.get_uma_sex_title()}难以匹敌的天赋，`,
    );
    await era.printAndWait(
      `而${chara_talk.sex}靠着自己已经初步挖掘出了一部分天赋，就好像是矿脉表面裸露的黄金一般，只有真正开采你才能知道底下的黄金到底有多么恐怖的价值。`,
    );
    await era.printAndWait(
      `尽管如此，在中央这种高手如云的地方，只有天赋是决然不够的，`,
    );
    await era.printAndWait(
      `若是没有足够的训练和战术，所谓的天赋永远也不能转变为赢下比赛的能力。`,
    );
    await era.printAndWait(
      `所以这才是你和${chara_talk.sex}要做的事情，将${chara_talk.sex}打造成${
        chara_talk.sex
      }需要的，能够赢下比赛的赛${chara_talk.get_uma_sex_title()}。`,
    );
    wait_flag =
      get_attr_and_print_in_event(400, [0, 5, 0, 5, 0], 0) || wait_flag;
  } else if (edu_event_marks.get('sugar_or_milk') === 1) {
    edu_event_marks.add('sugar_or_milk');
    await print_event_name('咖啡的味道要怎么样比较好呢？', chara_talk);
    era.drawLine({ content: '休息室内' });
    await chara_talk.say_and_wait(`咖啡要加糖还是加奶？或者什么都不加？`);
    era.printButton(`什么？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `就是说你的咖啡要加糖还是奶啦？我和茶座${chara_talk.sex}学了一下怎么泡咖啡，现在让你试一下，要点什么？`,
    );
    era.printButton(`果然还是要多加点方糖吧。`, 1);
    era.printButton(`或许加点奶会很不错。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      wait_flag =
        get_attr_and_print_in_event(400, [0, 20, 0, 0, 0], 0) || wait_flag;
    } else {
      wait_flag =
        get_attr_and_print_in_event(400, [0, 0, 0, 0, 20], 0) || wait_flag;
    }
    await chara_talk.say_and_wait(`这样吗？那就来尝尝看吧？我泡的咖啡怎么样？`);
    await era.printAndWait(
      `咖啡的口感和甜度都非常棒，完全不像是新人第一次泡咖啡的成品，看到你的表情，${chara_talk.name}愉快的勾起了嘴角。`,
    );
    await chara_talk.say_and_wait(
      `好喝的话，下次我就继续端给你品鉴了，要是有哪里不太行的话，要记得及时说哦。`,
    );
    await era.printAndWait(
      `就这样${chara_talk.name}垄断了休息室里面的饮料供应。`,
    );
  } else if (edu_event_marks.get('play_dice') === 1) {
    edu_event_marks.add('play_dice');
    await print_event_name('要来试试运气吗？', chara_talk);
    era.drawLine({ content: '休息室内' });
    await era.printAndWait(
      `${chara_talk.name}拿出了一副扑克牌，对着你挥了挥手。`,
    );
    await chara_talk.say_and_wait(
      `拖雷纳君，来玩抽鬼牌怎么样？毕竟现在可是休息时间哦。`,
    );
    await era.printAndWait(
      `抽鬼牌的进度非常快，很快${chara_talk.name}的手中就只剩下两张牌了。`,
    );
    await chara_talk.say_and_wait(`哼哼哼，拖雷纳君可得好好的抉择一下呢。`);
    era.printButton(`抽左边的牌`, 1);
    era.printButton(`抽右边的牌`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(
        `看起来还是我比较好运呢，这下拖雷纳可是输给你的担当了呢，作为代价，给我带饭怎么样？`,
      );
      await era.printAndWait(
        `最后去食堂替${chara_talk.name}带了${chara_talk.sex}喜欢吃的饭菜和零食。`,
      );
    } else {
      await chara_talk.say_and_wait(
        `诶，居然是拖雷纳君比较厉害呢........这样的话，拖雷纳君中午想吃什么？我去给您带饭吧，顺带帮我计时怎么样？`,
      );
      await era.printAndWait(
        `你爽快的答应了${chara_talk.sex}，然后${chara_talk.sex}就遇上了排的长长的队伍，等了很久才满脸无奈的提着饭盒回来了。`,
      );
    }
  } else if (edu_weeks === 31) {
    await print_event_name(`积雨云`, chara_talk);
    await era.printAndWait(
      `所以这才是你和${chara_talk.sex}要做的事情，将${chara_talk.sex}打造成${
        chara_talk.sex
      }需要的，能够赢下比赛的赛${chara_talk.get_uma_sex_title()}。`,
    );
    era.printButton(`怎么了？是讨厌雨天吗？`, 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}果断的摇了摇头。`);
    await chara_talk.say_and_wait(
      `不是，只是有些讨厌这种大雨，因为没有办法去室外训练了，拖雷纳君喜欢大雨吗？`,
    );
    era.printButton(`喜欢`, 1);
    era.printButton(`不喜欢`, 2);
    await era.input();
    await chara_talk.say_and_wait(
      `这样啊，我并不喜欢大雨，仅此而已，不管是人还是${chara_talk.get_uma_sex_title()}偶尔都会有没由来的就不喜欢某种东西的情况吧。`,
    );
    await era.printAndWait(
      `${chara_talk.name}这样说着，似乎没有那么烦躁了，但是你察觉到了${chara_talk.sex}似乎故意避开了这个话题。`,
    );
    await chara_talk.say_and_wait(
      `但是即使是这样，我们也还有室内的训练呢，拖雷纳君，如果可以的话，请帮我稍微监督一下训练怎么样？`,
    );
    await era.printAndWait(
      `${chara_talk.name}拿起了放在休息室里面的哑铃开始热身，${chara_talk.sex}看起来确实不想浪费任何一点的时间。`,
    );
    wait_flag =
      get_attr_and_print_in_event(400, [0, 0, 0, 10, 0], 0) || wait_flag;
  } else if (edu_weeks === 39) {
    await print_event_name(`初始·承诺`, chara_talk);
    await chara_talk.say_and_wait(
      `今年似乎很快就要过去了，总感觉我对时间的感知都迟钝了呢。`,
    );
    await era.printAndWait(
      `${chara_talk.name}捧着咖啡缓缓开口，${chara_talk.sex}已经换上了冬季的制服，甚至用黑色的裤袜包裹住了丰满的大腿，`,
    );
    await era.printAndWait(
      `整个人靠在沙发上一双包裹着黑丝的小脚蜷缩在尾巴边，时不时夹住自己尾巴把玩的动作让你吞了吞口水。`,
    );
    await chara_talk.say_and_wait(
      `唔，拖雷纳君，我很满意哦，关于成为你的担当，这或许就是我最幸运的事情了。`,
    );
    await era.printAndWait(
      `${chara_talk.name}躺在沙发上一改过去斗志满满的模样显得有些懒散，接着${chara_talk.sex}用小声道你听不到的声音开口。`,
    );
    await chara_talk.say_and_wait(
      `这或许就是我完成那件事最后的机会了吧，一定要做到的事情......站在最高的舞台上。`,
    );
    await era.printAndWait(
      `不知为何，${chara_talk.sex}靠近了你一点，似乎想要依靠在你的怀中，`,
    );
    await era.printAndWait(
      `但是当你看向${chara_talk.name}的时候，${chara_talk.sex}却马上拉开距离连看都不敢看你一眼。`,
    );
    await chara_talk.say_and_wait(`我还真是一如既往的幸运呢......各位。`);
    wait_flag =
      get_attr_and_print_in_event(400, [0, 0, 0, 10, 0], 0) || wait_flag;
    //TODO【胜利的承诺】：每连胜一场比赛，周日宁静所有基础属性提升3%，好感度获取增加3%连胜结束时清零。
  } else if (edu_weeks === 47) {
    await print_event_name(`第一步`, chara_talk);
    await chara_talk.say_and_wait(`报名完成了吗？`);
    era.printButton(
      `是的，如果没有其他情况的话，我们已经可以向三冠进发了。`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(`好，对了，茶座那边买了新的咖啡豆，`);
    await chara_talk.say_and_wait(
      `我去蹭了一点，喝完和我一起去训练场吧，上次在泳池里面差点扭到脚，这次会好很多。`,
    );
    await era.printAndWait(`${chara_talk.sex}端上来一杯热气腾腾的咖啡。`);
    await chara_talk.say_and_wait(`拖雷纳君，觉得我怎么样？`);
    era.printButton(`很棒很努力的孩子`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `不是这个啦，我是问你，觉得我现在的状态怎么样，与到时候要同期竞争三冠的对手比起来。`,
    );
    await me.say_and_wait(`我觉得你比${chara_talk.sex}们强`);
    await me.say_and_wait(`我觉得你可以还需要继续训练`);
    await chara_talk.say_and_wait(`不管怎么样，拖雷纳君，我会一直相信你的。`);
    wait_flag =
      get_attr_and_print_in_event(400, [5, 0, 5, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:400:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('愉快而炎热的夏日之初', chara_talk);
    await era.printAndWait(
      `一望无际的海平面与蔚蓝的海水让你们感觉到心旷神怡。`,
    );
    await chara_talk.say_and_wait(
      `唔，我还没有在海滩上尝试过训练呢，拖雷纳君，这个真的有作用吗？`,
    );
    era.printButton(
      `就算你不愿意相信我，好歹也要相信特雷森学园吧，这可是前辈们流传下来的经验之谈`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(
      `说的也是呢，那么这两个月就请多多指教了，毕竟我对于海边的训练可是一点经验都没有，`,
    );
    await chara_talk.say_and_wait(
      `要是闹出什么笑话或者事故就不好了，这方面还请你等等帮我把控一下。`,
    );
    await era.printAndWait(
      `${
        chara_talk.sex
      }眯起了眼睛，剥去冰冷的外表之后，一个文静端庄但是又充满活力的${chara_talk.get_uma_sex_title()}出现在你面前。`,
    );
    await era.printAndWait(
      `虽然嘴上说着不能浪费一点的时间要加紧训练，但是${chara_talk.name}依旧还是开开心心的海滩边尝试了各种各样的活动，`,
    );
    await era.printAndWait(
      `打排球、冲浪板、堆沙子，在阳光的照射下，${chara_talk.sex}身上那身深黑色的比基尼将傲人的身材完美的承托了出来，`,
    );
    await era.printAndWait(
      `雪白的乳球在比基尼泳衣的束缚下一摇一晃，看起来绝对比${chara_talk.sex}的亲戚曼城茶座的发育要好得多。`,
    );
    await era.printAndWait(
      `然后那个下午你就看到了趴在沙滩椅上焉焉的${chara_talk.name}。`,
    );
    await chara_talk.say_and_wait(
      `呼，拖雷纳君，这天气真的好热，训练的话，能不能尽量安排在水里面或者阴凉的地方，抱歉啊。`,
    );
    await era.printAndWait(
      `看起来就算是强大的二冠王也难以和自然作斗争，你不禁如此想到。`,
    );
    wait_flag =
      get_attr_and_print_in_event(400, [3, 3, 3, 3, 3], 30) || wait_flag;
    await quick_into_sex(400);
  } else if (edu_weeks === 47 + 47) {
    await print_event_name('为了圣诞节所做的准备', chara_talk);
    era.drawLine({ content: '家政教室内' });
    await chara_talk.say_and_wait(
      `唔唔唔，原来圣诞节还要给拖雷纳桑准备礼物的吗？`,
    );
    await era.printAndWait(
      `${chara_talk.name}正在和曼城茶座窃窃私语，看起来简直就好像有一面镜子放在${chara_talk.sex}们中间，而其中一个人仿佛是倒影一般。`,
    );
    await chara_talk.say_and_wait(
      `好好好，我知道了，你说得对，我应该去思考一下该给拖雷纳君准备的礼物了。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}回头眯起眼睛看向你，似乎思考着，然后伸了个懒腰。`,
    );
    await chara_talk.say_and_wait(`算了，先请拖雷纳君吃顿饭作为感谢吧。`);
    await era.printAndWait(
      `于是${chara_talk.name}拉着你一起去食堂吃了一顿大餐，只不过${chara_talk.sex}点的东西里面，韭菜之类的东西似乎格外的多。`,
    );
    wait_flag =
      get_attr_and_print_in_event(
        400,
        [0, 10, 0, 0, 0],
        0,
        JSON.parse('{"体力":200}'),
      ) || wait_flag;
  } else if (edu_weeks === 95 + 13) {
    await print_event_name('暴雨将至', chara_talk);
    // TODO 天皇春赏天气锁定为雨天重场，增加特殊对手【曼城茶座】
    // TODO【曼城茶座】速度：1000 耐力：900 力量：800 根性：700 智力：900 持有金技能：【耐力吞噬者】【无我梦中】【善于换乘】【弯道回复】
    await chara_talk.say_and_wait(`又要下雨了啊......这天气真是讨厌。`);
    await era.printAndWait(
      `你轻轻的将毛巾搭在${chara_talk.name}的脑袋上，${chara_talk.sex}抬起头很享受你的擦脸服务，`,
    );
    await era.printAndWait(
      `这表情让你联想到出浴的小猫咪，但是这话你是万万不敢说出来的。`,
    );
    await era.printAndWait(
      `门被敲响，你随口答了一句请进之后，曼城茶座推开了大门。`,
    );
    await chara25_talk.say_and_wait(`好久不见，过的还好吗？`);
    await chara_talk.say_and_wait(`哦，相当不错哦，特别是和他在一起的时候。`);
    await era.printAndWait(`他指了指你。`);
    await chara25_talk.say_and_wait(
      `要来吗？还有半个月，虽然看起来雨季好像要到下个月才会结束。`,
    );
    await chara_talk.say_and_wait(
      `你知道吗？就算是狂风暴雨也好，只要有拖雷纳君在，我感觉完全没问题了呢。`,
    );
    await era.printAndWait(`曼城茶座看了你一眼，点点头然后离开了。`);
    await chara_talk.say_and_wait(
      `哎呀，这下可麻烦了，茶座${chara_talk.sex}可是个较真的性子呢，而且更麻烦的是，我也是哦。`,
    );
    await era.printAndWait(
      `${chara_talk.name}从背后抱住你，让你感觉更像是遇到一只猫咪了。`,
    );
    await chara_talk.say_and_wait(
      `拖雷纳君，你会帮我的对吧，毕竟茶座${
        chara_talk.sex
      }怎么说都是在长距离赛事方面难逢敌手的天才赛${chara_talk.get_uma_sex_title()}呢。`,
    );
    await era.printAndWait(
      `窗外再次开始下起了大雨，${chara_talk.name}的声音听起来无比平静，`,
    );
    await era.printAndWait(
      `${chara_talk.sex}就这样抱住了你，似乎时间在这一刻定格，让${chara_talk.sex}尽情的享受着这个时刻。`,
    );
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:400:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('打上花火', chara_talk);
    era.drawLine({ content: '祭典店铺旁' });
    await chara_talk.say_and_wait(
      `所以说......亲爱的拖雷纳君，我的和服看起来好看吗？`,
    );
    await era.printAndWait(
      `和年初时的和服截然不同，此刻的${chara_talk.name}穿着一身充满了夏日气息的和服，`,
    );
    await era.printAndWait(
      `将自己的长发梳起来之后，${chara_talk.name}显得文静而优雅。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}自然的牵着你的手，靠在你的怀里面，任由你牵着${chara_talk.sex}在夏日祭典举办的场所之中随处走动。`,
    );
    await era.printAndWait(
      `你们体验了几乎所有的小商家，从吃的到玩的一个都没有放过，`,
    );
    await era.printAndWait(
      `${chara_talk.name}似乎还特别幸运的抽到了一根发簪，在商家的注视下让你将发簪别到${chara_talk.sex}的头发里面。`,
    );
    await chara_talk.say_and_wait(
      `今天我玩的很愉快哦.......说实话如果没有遇到你的话，说不定我连烟花都不会想来看呢。`,
    );
    await era.printAndWait(
      `在盛大的烟火表演之下，你们坐在某个不容易被发现的角落之中，看起来就好像是一对甜蜜的小情侣一般。`,
    );
    era.printButton(`是吗？我有礼物要送给你，和我来吧。`, 1);
    await era.input();
    await era.printAndWait(
      `烟火结束之后，你拉起了${chara_talk.sex}的手，无视${chara_talk.name}疑惑的神情，将${chara_talk.sex}带到了一片空旷的沙滩处。`,
    );
    await chara_talk.say_and_wait(`诶，拖雷纳君的礼物......是.....是什么啊？`);
    await era.printAndWait(
      `${chara_talk.sex}看起来有些不安又有些兴奋的望向你，甚至已经将手伸向了自己和服的系带。`,
    );
    await era.printAndWait(`嘭！！！`);
    await era.printAndWait(
      `烟花升天之后爆炸开来的声音传到了${chara_talk.sex}的耳朵里面，${chara_talk.sex}惊讶的回头望去，`,
    );
    await era.printAndWait(
      `一颗又一颗烟花在远处炸开，爆出了一个又一个美轮美奂的图案。`,
    );
    await chara_talk.say_and_wait(`这......这是......？`);
    await era.printAndWait(
      `${chara_talk.sex}的眼睛似乎有些湿润，回头看到了拿出仙女棒的你。`,
    );
    await me.say_and_wait(
      `夏天啊，当然是要一起来玩烟火才开心啦，这是我送给你的烟火表演，看完之后就一起来玩怎么样？`,
    );
    await era.printAndWait(
      `随后你感觉到一阵劲风袭来，瞬间就被${chara_talk.name}扑到在了柔软的沙滩上，`,
    );
    await era.printAndWait(
      `听着${chara_talk.sex}的声音，轻轻的抚摸着${chara_talk.name}的脑袋，还时不时挠挠${chara_talk.sex}耳朵里面的绒毛。`,
    );
    await era.printAndWait(
      `柔情似水的${chara_talk.name}趴在你的身上，露出了绝美的笑容。`,
    );
    await chara_talk.say_and_wait(
      `拖雷纳君的礼物实在是太贵重了.......还请允许小女子用身体来偿还这份贵重的礼物吧。`,
    );
    await era.printAndWait(
      `最后你们还是因为在夜晚的沙滩上疯玩了大半个晚上，最后精疲力尽回到房间一碰床就睡着了为结束。`,
    );
  } else {
    throw new Error('unsupported!');
  }
  wait_flag && (await era.waitAnyKey());
};
