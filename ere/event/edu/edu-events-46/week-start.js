const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

module.exports = async function (event_object) {
  const me = get_chara_talk(0),
    chara2_talk = get_chara_talk(2),
    falcon = get_chara_talk(46),
    event_marks = new FalconEduMarks(),
    edu_weeks = era.get('cflag:46:育成回合计时');
  let wait_flag = false;
  if (event_marks.start === 1) {
    event_marks.start++;
    // 颤抖的双手 意象 梦中的故事 人物 交涉 细微的动作 脸庞 天空的变化 色彩 草原
    await print_event_name(`First！偶像的第一步`, falcon);
    await era.printAndWait(`训练场\n`);
    era.printButton(`坚持住！最后一圈！`, 1);
    await era.input();
    await falcon.say_and_wait(`……哈啊啊啊！`);
    await era.printAndWait(
      `在最后的转弯处以恐怖的气势溅起一地沙尘的醒目飞鹰冲过了终点线。`,
    );
    await me.say_and_wait(`辛苦了！`);
    await era.printAndWait(
      `你将准备好的毛巾递给${falcon.name}，后者仔细将额头上的汗水擦去。`,
    );
    await era.printAndWait(`混杂着沙砾与汗水混合物紧紧吸附在了她的体操服上。`);
    await era.printAndWait(
      `在剧烈运动过后，为了避免突然坐下而对身体造成较大的危害，你与醒目飞鹰绕着训练场不紧不慢的闲聊着。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}⭐，这次比上次进步了吗？`,
    );
    await era.printAndWait(
      `你掏出计时器，确认着上面的时间，然后轻轻的点了头。得到肯定回答的少女如释重负，步伐也变得轻快了许多。`,
    );
    await falcon.say_and_wait(`太好了⭐，这样就可以朝着马娘偶像的道路前行了！`);
    await me.say_and_wait(`马娘偶像？`);
    await era.printAndWait(
      `醒目飞鹰之前确实提到过马娘偶像的这个概念，不过，自己不太确定马娘偶像究竟是什么。`,
    );
    await falcon.say_and_wait(
      `马娘偶像是飞鹰子创建的概念，是积极参与比赛，在比赛与之后的舞台上闪闪发光的存在！`,
    );
    await me.say_and_wait(`有点像是突出个人魅力的偶像艺人？`);
    await me.say_and_wait(`马娘偶像的概念似乎有些笼统啊。`);
    await me.say_and_wait(
      `如果是积极参与比赛，并且闪闪发光的话，所有在赛场上奔驰的马娘都是一样的。`,
    );
    await me.say_and_wait(`作为马娘偶像的特殊之处又在哪里呢？`);
    await era.printAndWait(
      `身体稍微冷却下来后，你将矿泉水递给了${falcon.sex}。`,
    );
    await me.say_and_wait(`先把这份概念记在记事本上吧。`, true);
    await falcon.say_and_wait(`我想让观众席上的大家一直看到飞鹰子闪耀的样子！`);
    await era.printAndWait(`以领放为策略的跑法正符合醒目飞鹰的要求。`);
    await me.say_and_wait(`所有跑法之中，最适合的恐怕还是领放。`, true);
    await me.say_and_wait(`不过这样确实有飞鹰子的风格呢。`);
    await era.printAndWait(
      `不论是赛场还是舞台，比谁都要闪耀的存在，她选择了这个方向啊。`,
    );
    await falcon.say_and_wait(`毕竟飞鹰子是闪闪发光的偶像⭐`);
    await falcon.say_and_wait(
      `从过去到现在，直到之后的未来，都会一直闪耀下去!`,
    );
    await me.say_and_wait(`正是期待这条道路的终点会是什么样的存在了呢。`, true);
    await era.printAndWait(
      `如果没足够熟练的园丁给充满杂草的花园修建的话，即使是充满潜力的种子也不能期待它成长的时刻。`,
    );
    await me.say_and_wait(`那么，这次针对速度进行训练吧！`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}！飞鹰子已经准备好了！`,
    );
    await era.printAndWait(
      `周围的环境像是被黑暗的薄雾所吞噬，你的眼中只剩下了醒目飞鹰一人。`,
    );
    await me.say_and_wait(`预备！`);
    await era.printAndWait(
      `${falcon.name}的身体绷紧，眼神紧紧盯着前方的赛道。`,
    );
    await era.printAndWait(`随着发令枪的响起，充满尘土与沙砾的偶像渐渐成型。`);
    wait_flag =
      get_attr_and_print_in_event(46, [0, 0, 0, 0, 0], 30) || wait_flag;
  } else if (event_marks.lucky_girl === 1) {
    event_marks.lucky_girl++;
    await print_event_name(`四叶幸运草`, falcon);
    await me.say_and_wait(`辛苦了，${falcon.name}。`);
    await era.printAndWait(
      `从居住的房间醒来时，${me.actual_name}看到的是作为妻子的${falcon.name}的笑脸。`,
    );
    await era.printAndWait(
      `洗漱完毕之后，迎接的是热气腾腾的饭菜以及整理好的资料。`,
    );
    await era.printAndWait(
      `吃饭时，话题常从作为偶像必须要知道的技能讨论到闪闪发光的可爱饰品。`,
    );
    await era.printAndWait(
      `从前一直喜欢坐在旁边盯着你傻笑的${falcon.name}，现在常常因为忙的不可开交的日程表靠着你的肩膀小憩。`,
    );
    await me.say_and_wait(`接下来的话我来开车吧。`);
    await era.printAndWait(
      `从演唱会的场地回到特雷森之中，差不多有3到4个小时的路程。`,
    );
    await falcon.say_and_wait(`${me.actual_name}，飞鹰子的表演怎么样！`);
    await me.say_and_wait(`不得不说已经有顶级偶像的水平了！`);
    await falcon.say_and_wait(`飞鹰子还要再努力才行呢！`);
    await era.printAndWait(`一起回到居住的公寓，在浴缸中慢慢放松之后。`);
    await era.printAndWait(
      `为了不将多余的疲劳带到第二天，两人就早早的上床睡觉了。`,
    );
    await falcon.say_and_wait(`晚安，${me.actual_name}。`);
    await me.say_and_wait(`晚安，${falcon.name}。`);
    await era.printAndWait(
      `照例的睡前接吻后，闭上了眼睛等待着舒缓的音乐响起。`,
    );
    era.drawLine();
    await falcon.say_and_wait(`唔，这里是哪里？`, true);
    await era.printAndWait(`似乎来到了一处陌生的土地。`, {
      color: falcon.color,
    });
    await era.printAndWait(`庞大的建筑群像是沉默的石像缄默地等待着。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(
      `不管怎么样先联系${me.actual_name}${me.get_adult_sex_title()}吧。`,
    );
    await era.printAndWait(`${falcon.name}从裙子口袋中伸出手寻找电话时`, {
      color: falcon.color,
    });
    await era.printAndWait(`空荡荡的口袋里一无所有。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`是不小心掉到哪里去了吗？`);
    await era.printAndWait(
      `从额头上开始滴落冷汗的${falcon.name}最终得出了一个结论`,
      {
        color: falcon.color,
      },
    );
    await falcon.say_and_wait(`先找周围的人去问问看吧？`);
    await era.printAndWait(
      `虽然在昏黄的光线照耀下看不清路人的脸，但直到现在为止都属于现实的范围内。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`走到手牵着手的恋人身边。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`打扰一下，请问？`);
    await era.printAndWait(
      `有说有笑的穿过了${falcon.name}的恋人们无视了带着笑脸的${falcon.name}。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`好像没什么用呢。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`该怎么办？`);
    await falcon.say_and_wait(`如果${me.actual_name}在我身边就好了。`);
    await era.printAndWait(`突然消沉下去的${falcon.name}似乎找到了灵感。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(
      `！我记得听训练员${me.get_adult_sex_title()}说过，关键线索说不定就在最显眼的地方。`,
    );
    await era.printAndWait(`${falcon.name}将视线望向了那座巨大的建筑物中。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`先进去看看吧。`);
    await era.printAndWait(
      `走进建筑物之中，令人安心的柔和光线照在了${falcon.name}的身上。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`越往建筑物中间走去，里面的人越多，`, {
      color: falcon.color,
    });
    await era.printAndWait(
      `像是男粉丝的影子A「听说了吗？有个可爱的偶像将在这里开演唱会！」`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(
      `像是女游客的影子B「好像是一个参与泥地比赛胜利的小${falcon.get_uma_sex_title()}第一次登场！」`,
      {
        color: falcon.color,
      },
    );
    await falcon.say_and_wait(
      `泥地${falcon.get_uma_sex_title()}吗？听起来是个很可爱的后辈呢`,
      true,
    );
    await era.printAndWait(
      `向着高大建筑的二楼走去，从自动扶梯上往下看人头攒动的样子。`,
      {
        color: falcon.color,
      },
    );
    await falcon.say_and_wait(`黑压压的一片似乎都是人呢。`, true);
    await era.printAndWait(
      `二楼似乎比一楼更加宽敞的样子，粉丝们的身影似乎也变得更多了起来。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(
      `像是学生${falcon.get_uma_sex_title()}的影子A「听说了吗！引导着人们关注泥地的可爱偶像XXXX似乎就要开始表演了！」`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(
      `像是小${falcon.get_uma_sex_title()}的影子B「欸？XXXX是谁啊？今天是我第一次看到赛${falcon.get_uma_sex_title()}的身影呢！」`,
      {
        color: falcon.color,
      },
    );
    await falcon.say_and_wait(`......`);
    await era.printAndWait(`继续向深处前进，似乎来到了一片完全黑暗的地方。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(
      `稍微有点害怕呢......不！${me.actual_name}一定在某处保护我的！`,
    );
    await falcon.say_and_wait(`飞鹰子！加油！`);
    await era.printAndWait(`鼓足干劲之后向前奔跑着。`, {
      color: falcon.color,
    });
    await era.printAndWait(
      `周围似乎也出现了${falcon.get_uma_sex_title()}幻影一样的存在。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`眼前的场景再次变换，似乎变成了一处赛场。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`是比赛吗？飞鹰子可不会害怕的！`);
    await era.printAndWait(
      `来到了自己熟悉的地方之后，飞鹰子恢复了平时的状态。`,
      {
        color: falcon.color,
      },
    );
    await falcon.say_and_wait(`就让飞鹰子给这里的粉丝们也带来闪耀的一面吧⭐`);
    await era.printAndWait(
      `似乎完全没有体力消耗的样子，比平时的速度更快，就像飞起来了一样，将后面的幻影远远的甩在了后面。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`直到冲线为止，赛场的幻影再次发生了变换。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`好像是出道战时的舞台，不过大得多的多。`);
    await era.printAndWait(
      `突然之间，所有的灯光都照到了${falcon.name}的身上。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`周围的舞台似乎坐满了前来围观的粉丝们。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`大家！这里是飞鹰子哦！`);
    await era.printAndWait(`排练过无数次的本能反应，下意识说出口了。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`只能继续下去了！`, true);
    await falcon.say_and_wait(`感谢大家一直支持着飞鹰子！`);
    await falcon.say_and_wait(`那么，大家一起来！`);
    await falcon.say_and_wait(`如果飞鹰子逃跑了~？`);
    await era.printAndWait(`粉丝们「就只能追上去了！」`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`要追到地平线的尽头吗~？`);
    await era.printAndWait(`粉丝们「那里就是飞鹰子的大舞台！」`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
    await era.printAndWait(`粉丝们「——去抓住大大的爱吧！」`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(
      `最强的${falcon.get_uma_sex_title()}偶像，${
        falcon.name
      }♪今天也送到了呢⭐`,
    );
    await era.printAndWait(`粉丝们「——哦哦哦哦哦！」`, {
      color: falcon.color,
    });
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！飞鹰子！」`, {
      color: falcon.color,
    });
    await era.printAndWait(
      `让身体随着肌肉记忆自己动了起来，台下的粉丝们挥舞着荧光棒在向${falcon.name}喝彩。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(
      `一切的悲伤都被${falcon.name}的笑容所感染，一切的痛苦都得到了治愈。`,
      {
        color: falcon.color,
      },
    );
    await era.printAndWait(`然后————。`, {
      color: falcon.color,
    });
    era.drawLine();
    era.printButton(`飞鹰子！飞鹰子！马上就要上课了！`, 1);
    await era.input();
    await era.printAndWait(`似乎一觉睡到早上了。`, {
      color: falcon.color,
    });
    await falcon.say_and_wait(`......`);
    await falcon.say_and_wait(`......唔，这里是？`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(`从床上苏醒的${falcon.name}似乎觉得非常的轻松。`);
    era.printButton(`怎么了吗？`, 1);
    await era.input();
    await falcon.say_and_wait(`......飞鹰子做了很幸福的梦哦⭐`);
    await era.printAndWait(`飞鹰子露出了最灿烂的笑容。`);
    wait_flag =
      get_attr_and_print_in_event(46, [20, 20, 20, 20, 20], 60) || wait_flag;
  } else if (edu_weeks === 9) {
    await print_event_name(`接下来也请多多指教⭐`, falcon);
    await era.printAndWait(`2月初的特雷森正是一年之中最寒冷的日子。`);
    await era.printAndWait(
      `为了这个月翻了几个跟头的电费账单，虽然是休息日，但你还是早早的来到了训练室。`,
    );
    await era.printAndWait(`心中确信透过云层的第一缕阳光将驱散眼前的黑暗。`);
    await era.printAndWait(`于是在黑暗之中的漫步显得无比轻松。`);
    await era.printAndWait(`正当空调数字指向30度时——`);
    await era.printAndWait(`咚咚咚咚咚。`);
    await era.printAndWait(`急促的敲门声传来了。`);
    await falcon.say_and_wait(`打扰了⭐`);
    await era.printAndWait(`醒目飞鹰轻轻推开了训练室的大门。`);
    era.printButton(`飞鹰子早上好！`, 1);
    await era.input();
    await era.printAndWait(`口中呼出的白雾很快消散在了冰冷的空气之中。`);
    await falcon.say_and_wait(`训练员先生早上好！今天看起来也很精神呢！`);
    await era.printAndWait(`随后便收到了醒目飞鹰元气满满的回应。`);
    await era.printAndWait(
      `顺着醒目飞鹰的笑容向下看去，你的视线集中在了她提着的小桶与扫把上。`,
    );
    await falcon.say_and_wait(
      `因为平时受到很多关照的缘故，所以飞鹰子今天打算做义工！`,
    );
    await era.printAndWait(`察觉到了你的疑惑，醒目飞鹰挥舞起了手中的扫把。`);
    await me.say_and_wait(`具体来说是指？`);
    await falcon.say_and_wait(
      `趁着大家还没起来之前，将高架桥下飘到草地上的垃圾分类好捡起来。`,
    );
    await era.printAndWait(`马娘偶像与传统的偶像相比更加接地气啊。`);
    await falcon.say_and_wait(`训练员先生打算一起来吗？`);
    era.printButton(`我也想出一份力`, 1);
    era.printButton(`虽然很想去，但是这边还有工作要做`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await falcon.say_and_wait(`那真是太好了！`);
      await falcon.say_and_wait(`——事不宜迟现在就出发。`);
      await me.say_and_wait(`等一下我还没——`);
      era.drawLine({ content: '飞鹰子努力中' });
      await falcon.say_and_wait(`——接下来只要把这些垃圾！`);
      await era.printAndWait(
        `将随意乱丢的矿泉水瓶放进准备好的塑料袋中，这份工作总算告一段落了。`,
      );
      await falcon.say_and_wait(`训练员先生辛苦了！`);
      await era.printAndWait(
        `看着原本被垃圾所占据的草地，一点点恢复美丽的景色后，一股油然而生的成就感让你不禁挺直了腰。`,
      );
      await era.printAndWait(
        `对于飞鹰子来说，是常年累月的照顾而做的微不足道的感谢吧。`,
      );
      await falcon.say_and_wait(
        `如果没有训练员先生的话，要在上课之前处理完对飞鹰子还是有些困难呢……`,
      );
      await falcon.say_and_wait(`飞鹰子不知该如何感谢训练员先生。`);
      await era.printAndWait(`该怎么办呢？`);
      era.printButton(`可以让我坐在最中间欣赏飞鹰子演出吗？`, 1);
      era.printButton(`接下来的期中考试全部及格！`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await falcon.say_and_wait(
          `欸？这样就好了吗？嗯——既然是训练员先生的要求的话。`,
        );
        await me.say_and_wait(`是飞鹰子的粉丝一号的要求！`);
        await era.printAndWait(
          `似乎是因为粉丝一号这个称呼，醒目飞鹰的尾巴摇晃的比之前更加剧烈。`,
        );
        await falcon.say_and_wait(
          `啊——想到了！接下来是飞鹰子刚刚想出来的歌曲♪粉丝一号先生可不要中途离场哦？`,
        );
        await era.printAndWait(
          `寒冷的空气，闪烁着光芒的星星，以及尚未熄灭的路灯所组成的舞台才刚刚开始。`,
        );
      } else if (ret1 === 2) {
        await falcon.say_and_wait(`咦咦咦？居然是这个要求。`);
        await me.say_and_wait(
          `有什么不会的地方我也会辅导你的，所以飞鹰子不要想着逃跑这种事情了。`,
        );
        await falcon.say_and_wait(`呜——训练员先生真是欺负人。`);
        await era.printAndWait(
          `在回到特雷森的道路上，醒目飞鹰的心情似乎比之前更好。`,
        );
      }
    } else {
      await falcon.say_and_wait(`训练员先生果然很辛苦呢。`);
      await era.printAndWait(
        `醒目飞鹰露出了略微遗憾的表情，但很快恢复了往日的神情。`,
      );
      await falcon.say_and_wait(
        `毕竟是飞鹰子自作主张的要求，训练员先生没关系的！`,
      );
      await me.say_and_wait(`路上小心！`);
      await falcon.say_and_wait(`嗯！飞鹰子会连着训练员先生的那份一起加油的！`);
      await era.printAndWait(
        `在飞鹰子的努力之下，在河边漂浮的废弃物全部都消失了。`,
      );
    }
  } else if (edu_weeks === 18) {
    // 5月第2周
    await print_event_name(`飞鹰子大危机！？`, falcon);
    await era.printAndWait(`5月上旬的某一天。`);
    await era.printAndWait(
      `训练计划稳步推进，醒目飞鹰的偶像事业也起了一个好头。`,
    );
    await era.printAndWait(`总算可以长舒一口气了。`);
    await era.printAndWait(`季节变换的间隔期，明显比昨天更热了。`);
    await era.printAndWait(`距离出道战也不远了，接下来要开始辛苦了。`);
    await falcon.say_and_wait(`训练员先生！`);
    await era.printAndWait(`这么想着的你，突然被闯入训练室的身影吓了一跳。`);
    await me.say_and_wait(`又是不及格的原因吗？`);
    await era.printAndWait(`因为计划之外的事件而让你开始头疼起来。`);
    await falcon.say_and_wait(`虽然这件事也很重要，但是飞鹰子遇到的不是这个！`);
    await era.printAndWait(`少女呼出的气息变成白雾，汗珠从额头流向脖颈。`);
    await me.say_and_wait(`深呼吸，先冷静下来把事情说清楚。`);
    await era.printAndWait(`你起身为醒目飞鹰倒了一杯开水。`);
    await falcon.say_and_wait(
      `……嗯，飞鹰子为了向特雷森周围的大家推广马娘偶像的概念，除了派发自己精心准备的海报之外，还额外附赠了一些小礼品。`,
    );
    await falcon.say_and_wait(
      `但是一直以来以非常便宜的价格卖给飞鹰子的那家杂货店突然搬走了，而新找的其他店铺的价格却非常高昂。`,
    );
    await falcon.say_and_wait(
      `如果只是这样的话飞鹰子还能坚持下去。不过最近去的那家杂货店因为原材料价格上涨，所以价格也要抬高了。`,
    );
    await falcon.say_and_wait(`再这样下去，飞鹰子要陷入大危机了！`);
    await era.printAndWait(
      `大概明白了，因为稳定的供货渠道突然消失，而陷入了慌乱之中。`,
    );
    await era.printAndWait(`短暂思考过后，你决定\n`);
    era.printButton(`换一种方式吧！`, 1);
    era.printButton(`最重要是飞鹰子作为偶像的心！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait(`作为马娘偶像与商业街的店铺合作怎么样？`);
      await me.say_and_wait(
        `飞鹰子不是很擅长带动观众情绪吗？就这样一边以合作的方式为店铺吸引顾客，一边脚踏实地积累人气。`,
      );
      await me.say_and_wait(`利用从店铺积累下来的资金，撑过这段时间吧！`);
      await falcon.say_and_wait(`但是应该找谁呢？`);
      await me.say_and_wait(`我也会在旁边协助飞鹰子的。`);
      await falcon.say_and_wait(`呼~得救了……太好了。`);
      await era.printAndWait(
        `压在胸口的大石终于落到了地上，醒目飞鹰情不自禁地握住了你的手。`,
      );
      await era.printAndWait(`说起来——`);
      await era.printAndWait(
        `对粉丝一视同仁的飞鹰子与作为担当马娘的醒目飞鹰。`,
      );
      await era.printAndWait(`对醒目飞鹰来说，那个更加重要呢？`);
      await me.say_and_wait(`虽然有些不甘心，不过对于飞鹰子来说，恐怕`, true);
      await era.printAndWait(
        `你用力掐了一下自己的手心，强迫将自己从妄想之中离开。`,
      );
      await me.say_and_wait(`……先处理眼前的事情吧。`, true);
      await era.printAndWait(
        `之后你从在不同店家打工的马娘那里得知了正在苦恼缺少宣传的店主。`,
      );
      await era.printAndWait(
        `最终以联动的方式成功吸引了一大批参观的游客，除去应得的酬劳与奖金外，醒目飞鹰还在马推上收获了新的粉丝。`,
      );
    } else {
      await me.say_and_wait(`最重要的是飞鹰子作为偶像的那颗心！`);
      await falcon.say_and_wait(`诶？`);
      await me.say_and_wait(
        `与重视外表与排场的模特相比，青涩而又可爱，比模特更加亲近粉丝才是马娘偶像的卖点！`,
      );
      await era.printAndWait(
        `越说越激动的你干脆站在了桌子上向醒目飞鹰展示心中的理想偶像。`,
      );
      await falcon.say_and_wait(
        `诶？训练员的意思是飞鹰子太过使用宣传手段而忽视了作为马娘偶像的核心吗？`,
      );
      await me.say_and_wait(`没错！让大家看看作为马娘偶像而活跃的醒目飞鹰吧！`);
      await falcon.say_and_wait(`我知道了！飞鹰子会朝着马娘偶像的方向努力的！`);
      await era.printAndWait(`说起来——`);
      await era.printAndWait(
        `对粉丝一视同仁的飞鹰子与作为担当马娘的醒目飞鹰。`,
      );
      await era.printAndWait(`对醒目飞鹰来说，那个更加重要呢？`);
      await me.say_and_wait(`虽然有些不甘心，不过对于飞鹰子来说，恐怕`, true);
      await era.printAndWait(
        `你用力掐了一下自己的手心，强迫将自己从恐怖的结论之中离开。\n`,
      );
      await me.say_and_wait(`……先处理眼前的事情吧。`, true);
      await era.printAndWait(
        `在习得了马娘偶像之心后的醒目飞鹰，凭借其特有的敏感且细腻，吸引了大量的粉丝。`,
      );
    }
  } else if (edu_weeks === 24) {
    await print_event_name(`薰衣草`, falcon);
    await era.printAndWait(`出道战前夕\n`);
    await era.printAndWait(
      `按照计划踏踏实实进行训练的${falcon.name}现在已经颇具成效。`,
    );
    await era.printAndWait(`月初便是出道战了\n`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(
      `正当你像往常一样陪伴着醒目飞鹰走在回到特雷森的道路时。`,
    );
    await era.printAndWait(`突然开口的醒目飞鹰叫住了你。`);
    await era.printAndWait(`临近比赛，会有所忧虑也是在所难免的吧。`);
    await falcon.say_and_wait(`说起来，这是飞鹰子第一次亮相呢。`);
    await era.printAndWait(`说起来醒目飞鹰正是以马娘偶像为目标不断前进。`);
    await falcon.say_and_wait(
      `虽然在踏上马娘偶像这条道路时兴奋得一晚没睡，但随着撕下来的日历一天天的过去，飞鹰子直到现在才算有实感。`,
    );
    await falcon.say_and_wait(`……心情稍微有些复杂呢。`);
    era.printButton(`……这样吗。`, 1);
    await era.input();
    await era.printAndWait(`接下来的道路漫长也艰辛，所幸时间站在我们这边。`);
    await era.printAndWait(`有些东西还是要她自己想明白才行。`);
    await era.printAndWait(`思索片刻后，你告诉她。`);
    await me.say_and_wait(`与飞鹰子一起在训练场挥洒的汗水，不会作假。`);
    await me.say_and_wait(`接下来就是我们闪耀的时刻了！`);
    await me.say_and_wait(
      `就算前进的过程可能稍许曲折，最后也一定会往好的方向发展，就像偶像那样参加第一次试镜一样对待吧！`,
    );
    await falcon.say_and_wait(
      `！没错！这就是飞鹰子的首次试镜，不把自己最完美的一面给大家看才是偶像失格！`,
    );
    await era.printAndWait(
      `因为压力而脚步有些沉重的醒目飞鹰，在得到你的安慰后，此刻的步伐比平时更加轻快。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}对其他${falcon.get_uma_sex_title()}也会这么说吗？`,
    );
    await era.printAndWait(`你假装没听到醒目飞鹰的自言自语。`);
    wait_flag =
      get_attr_and_print_in_event(46, [0, 0, 10, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 30) {
    await print_event_name('希望永远持续下去的日常', falcon);
    await falcon.say_and_wait(
      `训练员先生，飞鹰子最近找到了一个适合演出的场所，可以和飞鹰子一起去看看吗？`,
    );
    await era.printAndWait(`你从文件夹中抬起头，与醒目飞鹰对上了视线。`);
    await me.say_and_wait(`呜啊。`);
    await era.printAndWait(
      `半蹲着与你对上视线的醒目飞鹰露出了恶作剧成功的笑容。`,
    );
    await era.printAndWait(
      `仔细想想的话，她也正处于多愁善感的时间段，会做出这种事也很正常。`,
    );
    await me.say_and_wait(
      `虽然也不是否定飞鹰子的努力，不过最近偶像活动会不会有些太频繁了？`,
    );
    await me.say_and_wait(
      `如果因为为了偶像活动而荒废学业的话，期末挂科就要花时间在补习之上了。`,
    );
    await falcon.say_and_wait(
      `啊，这个……飞鹰子已经在反省中了，所以偶像活动也有好好考虑过时间和地点啦。`,
    );
    await me.say_and_wait(`说谎的人眼睛不敢对视他人。`);
    await era.printAndWait(
      `听完之后慌忙正视你的双眼的醒目飞鹰使你确信了一件事。`,
    );
    await me.say_and_wait(
      `我就知道……如果飞鹰子答应我在接下来的期中好好复习的话，我也答应你的请求。`,
    );
    await falcon.say_and_wait(`诶诶诶？训练员先生是怎么知道的。`);
    await era.printAndWait(
      `听完之后慌忙正视你的双眼的醒目飞鹰使你确信了一件事。`,
    );
    await era.printAndWait(`刚刚还略显慌乱的游移眼神一下子闪亮起来。`);
    await falcon.say_and_wait(
      `飞鹰子会好好复习的！作为交换，训练员先生也要满足飞鹰子的请求！`,
    );
    await era.printAndWait(
      `姑且得到了承诺，以飞鹰子对偶像活动的重视来看，至少不用担心接下来和班主任玩猫捉老鼠的游戏了。\n\n`,
    );
    await era.printAndWait(`被形目飞鹰牵着的你，来到了一处空旷的草地。`);
    await era.printAndWait(
      `或许是周围没有高大建筑物的原因，总觉得天空比以往离得更近。`,
    );
    await era.printAndWait(`穿透云层的阳光在草地上形成了薄薄的一层气雾。`);
    await falcon.say_and_wait(`训练员先生觉得这里怎么样？`);
    await era.printAndWait(
      `醒目飞鹰摇晃着你的手腕，用压抑不住的兴奋感询问着你的意见。`,
    );
    await era.printAndWait(
      `能在繁华的都市圈找到这样一处草地，恐怕醒目飞鹰也是花了很多时间吧。`,
    );
    await era.printAndWait(
      `不，仔细想想的话，也许是因为这块地皮原本计划着作为大型商场来使用，但因为种种原因搁置了。随后便成了植物们的乐园。`,
    );
    await falcon.say_and_wait(
      `嗯——作为排练的一环，训练员先生可以作为飞鹰子的助手吗？`,
    );
    await me.say_and_wait(`嗯？`);
    await era.printAndWait(
      `醒目飞鹰的表情因为背对着太阳而看不清楚，但可以从不断抖动的耳朵判断，恐怕她是下了很大的勇气才做出的决定。`,
    );
    era.printButton(`接下来可以拜托你吗？飞鹰子？`, 1);
    await era.input();
    await falcon.say_and_wait(`如果训练员先生不愿意的话也没办法……诶？`);
    await era.printAndWait(
      `似乎是没想到你会这么爽快同意的缘故，醒目飞鹰先是愣了一下，然后露出了略显害羞的笑容。`,
    );
    await falcon.say_and_wait(`非常荣幸⭐`);
    await era.printAndWait(`她以一种轻松愉悦的轻快声音回复着你。`);
    await era.printAndWait(
      `天空比任何时候都要接近地面，融化在青草与泥土混合吐息之中，虽说一开始还在努力跟上醒目飞鹰的节奏，但伴随着一次剧烈的碰撞，终于还是坚持不住的你一屁股坐在了草地之上。`,
    );
    await falcon.say_and_wait(`训练员先生！`);
    await era.printAndWait(
      `虽然从眩晕感中尚未恢复，但也着实感受到了醒目飞鹰的兴奋与喜悦。`,
    );
    await falcon.say_and_wait(`抱歉，飞鹰子太兴奋了。`);
    await era.printAndWait(`被纤细的手臂小心翼翼的拉了起来。`);
    era.printButton(`原来偶像也不是这么遥不可及的存在嘛。`, 1);
    await era.input();
    await era.printAndWait(`噗通。`);
    await era.printAndWait(
      `带着自言自语的满足，如少年时在草坪上全力奔跑后顺势躺在了草坪之上。`,
    );
    await era.printAndWait(`恍惚间又回到了无忧无虑的童年。`);
    await era.printAndWait(`剧烈搏动的心跳声有力地证明自己的存在。`);
    await era.printAndWait(`是啊，就这样保存着这份幸福感直到永远——`);
    await falcon.say_and_wait(`诶！训练员先生剧烈运动后不能躺在草坪上！`);
    await era.printAndWait(`被纤细手臂传来的巨力拉了起来。`);
    await era.printAndWait(`唔，总觉得有些怀念呢。`);
    await era.printAndWait(`悲伤、怀念以及释然混杂的复杂情感涌上心头。`);
    await me.say_and_wait(`但是，现在的我也没什么不幸福的地方。`, true);
    await era.printAndWait(`如果这样的日常能永远持续下去的话。`);
    await era.printAndWait(
      `下意识的抬头看去，湛蓝的天空之中几朵积雨云无拘无束的飘动着。`,
    );
  } else if (edu_weeks === 40) {
    // 夜间停止光合作用排出废气 为了摆脱某种“我已经过时、即将被埋葬”的恐惧。大量追赶新潮头试图击退自己的生存恐惧。
    await print_event_name('夜来香', falcon);
    await era.printAndWait(
      `为了在沙地赛上打响醒目飞鹰的名气，你们开始计划接下来要参加的比赛。`,
    );
    await era.printAndWait(`深夜 训练员宿舍\n`);
    await era.printAndWait(
      `将在出道战收集的数据重新整理一遍后，将第二天的计划记录在备忘录。`,
    );
    await era.printAndWait(`正准备就这么休息时——`);
    await era.printAndWait(`——嗡嗡嗡`);
    await era.printAndWait(`手机传来了震动声`);
    await era.printAndWait(`已经是深夜了，这种时候要接电话吗？`);
    era.printButton(`接`, 1);
    era.printButton(`不接`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`既然是深夜发来的短信，没有不接的道理吧？`);
      await era.printAndWait(`这么想着你打开了手机。`);
      await falcon.say_and_wait(
        `训练员先生~飞鹰子怎么也睡不着，所以看到这条消息的话请回复！`,
      );
      await era.printAndWait(
        `一般而言像是某人在向某人撒娇的行为，不过对方是脑袋容易脱线的醒目飞鹰。`,
      );
      await era.printAndWait(
        `——同样也是你深受信赖的同伴，于是你出于关心向对方询问发生了什么。`,
      );
      await era.printAndWait(`不一会，手机再次传来了震动声。`);
      await falcon.say_and_wait(`其实也不算是什么大事啦。`);
      await era.printAndWait(`……一时间不知道该如何是好。`);
      era.printButton(`请告诉我发生了什么。`, 1);
      era.printButton(`就这么关机吧`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await me.say_and_wait(
          `如果飞鹰子有什么困难的话，无论何时何地都可以和我商量。`,
        );
        await era.printAndWait(
          `等待回复的时间比想象之中还要漫长，直到你准备放弃的前一刻，一口气接受的消息瞬间多了10+条。`,
        );
        await falcon.say_and_wait(
          `……如果是训练员先生，偶尔说些丧气话也没关系吧？`,
        );
        await falcon.say_and_wait(
          `出道战结束后，飞鹰子作为新泥地偶像收获了不少的粉丝。`,
        );
        await falcon.say_and_wait(
          `拜此所赐每天早上的演唱会前来观看的人也满满聚集起来了。`,
        );
        await falcon.say_and_wait(
          `不过昨天的演唱会上，有几个熟悉的面孔不见了。`,
        );
        await falcon.say_and_wait(
          `在与粉丝之间的安可之上，也收到了“现实偶像不如虚拟偶像”的评价。`,
        );
        await falcon.say_and_wait(
          `虽然飞鹰子也不是那么在意这种事情啦⭐，不过飞鹰子还是觉得空落落的呢。`,
        );
        await era.printAndWait(
          `像是将心中积压已久的问题一口气爆发出来，手机的震动声就没停过。`,
        );
        await era.printAndWait(
          `一边感慨着，现在的学生手机打字的速度比当年的我还要快，一边仔细的斟酌话语。`,
        );
        await me.say_and_wait(
          `随着科技的发展，确实时不时有虚拟偶像即将完全代替真人偶像的传言。`,
        );
        await me.say_and_wait(
          `但是，人永远渴望着与他人互动，渴望被他人所认可，将自身的投影寄托在他人的身上。`,
        );
        await me.say_and_wait(
          `这一点，不论是虚拟偶像还是在现实中活动的偶像，都是一样的。`,
        );
        await me.say_and_wait(
          `有些人喜欢追逐新的概念，享受着新的生活方式，没有任何问题。`,
        );
        await me.say_and_wait(
          `而飞鹰子作为马娘偶像，直到现在为止，已经聚拢了一批支持着飞鹰子的粉丝。`,
        );
        await me.say_and_wait(
          `就算未来到了虚拟偶像的时代，但是，作为没有使用虚拟形象的飞鹰子，已经聚拢了一批支持着飞鹰子的粉丝。`,
        );
        await me.say_and_wait(
          `而顶级偶像的道路，就在被飞鹰子吸引，所聚拢的粉丝身上。`,
        );
        await me.say_and_wait(
          `所以，继续前进吧，总有一天，我会见证作为顶级马娘偶像成长的飞鹰子。`,
        );
        await falcon.say_and_wait(
          `虽然飞鹰子还是没怎么听懂，不过似乎活力再次涌上来了，谢谢你！训练员先生！`,
        );
        await era.printAndWait(
          `第二天，活力满满的醒目飞鹰为支持着她的粉丝们献上了最美妙的演出。`,
        );
      } else {
        await era.printAndWait(`你索性将手机关机，打算第二天直接去问对方。`);
        await era.printAndWait(`然而，第二天对方却否认了这个话题。`);
      }
    } else {
      await era.printAndWait(`都已经这么晚了，有什么事情明天再说吧。`);
      await era.printAndWait(`将手机调成免打扰后，你继续陷入了睡眠之中。`);
    }
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('新年的感觉！', falcon);
    await era.printAndWait(`新的一年到了。`);
    await era.printAndWait(`训练室\n`);
    await falcon.say_and_wait(`新年快乐！`);
    await era.printAndWait(`你推开训练室的大门，看见坐在围炉旁的醒目飞鹰。`);
    era.printButton(`飞鹰子新年快乐！`, 1);
    await era.input();
    await era.printAndWait(`回以问候后你也钻进了温暖的围炉之中。`);
    await me.say_and_wait(`跨年的新年演出怎么样？`);
    await era.printAndWait(`冰冷的双手接触到温暖的物体才慢慢恢复了热的触觉。`);
    await falcon.say_and_wait(
      `昨晚的表演比想象之中还要精彩，飞鹰子也学到了很多演唱和舞蹈方面的知识！`,
    );
    await falcon.say_and_wait(`差点忘了！`);
    await era.printAndWait(`醒目飞鹰在校服口袋中悉悉索索翻找着什么。`);
    await falcon.say_and_wait(
      `虽然在挑选礼物的时候苦恼着到底送什么才好，不过飞鹰子突然想到要送给在意的人自己亲手制作的礼物才是正解。`,
    );
    await falcon.say_and_wait(
      `这是对过去的一年里照顾飞鹰子的训练员先生奉上的一点微不足道的感谢！`,
    );
    await era.printAndWait(`飞鹰子将亲手制作的贺卡递给了${me.actual_name}`);
    await me.say_and_wait(`那我就心怀感激的收下了。`);
    await era.printAndWait(
      `从围炉之中伸手接过带着围炉余温的贺卡，被醒目飞鹰捏住的一角有小小的松软感。`,
    );
    await me.say_and_wait(`今天的计划是？`);
    await falcon.say_and_wait(`今年飞鹰子也要把可爱的模样带给粉丝们的大家！`);
    await era.printAndWait(
      `连一丝停顿也没有，${falcon.name}语速极快的回答着你的问题。`,
    );
    await me.say_and_wait(`精神会不会有些太紧张了？`);
    await me.say_and_wait(`平时这么辛苦的飞鹰子现在的话多休息一会也好哦。`);
    await era.printAndWait(
      `不知不觉抚摸着${falcon.name}圆圆的脑袋，${falcon.sex}似乎也没有反对的样子？`,
    );
    await falcon.say_and_wait(`欸？唔——飞鹰子已经不是小孩子了。`);
    await era.printAndWait(`虽然言语上小小的抗议着，但还是没有做出什么反应。`);
    await me.say_and_wait(`既然飞鹰子有些疲惫的话\n`);
    era.printButton(`偶像之道在于持之以恒的练习`, 1);
    era.printButton(`去哪里玩一下吧？`, 2);
    era.printButton(`一起去看场电影？`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await me.say_and_wait(`还是保持状态比较重要。`);
      await era.printAndWait(`持之以恒的训练是迈向卓越的关键。`);
      await me.say_and_wait(`今天练习一下速度吧。`);
      await falcon.say_and_wait(`飞鹰子一定会努力的！`);
      await era.printAndWait(`新年的沙地场上掀起了第一阵沙尘。`);
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`嗯，去哪里比较好呢？`);
      await era.printAndWait(`从口袋中拿出手机苦恼着的醒目飞鹰。`);
      await era.printAndWait(
        `与闪耀的飞鹰子相比，苦恼的飞鹰子似乎也有一种独特的魅力。`,
      );
      await falcon.say_and_wait(`中午就去这家吧！`);
      await era.printAndWait(
        `醒目飞鹰将手机屏幕旋转过来后递给你，上面显示的是附近作为话题的人气奶茶店。`,
      );
      await me.say_and_wait(`不自觉露出笑容的飞鹰子比平时更加可爱哦。`);
      await era.printAndWait(`不知不觉间露出笑容的醒目飞鹰。`);
      await falcon.say_and_wait(`啊……`);
      await era.printAndWait(`突然脸红的醒目飞鹰有些手足无措的样子。`);
      await falcon.say_and_wait(`咦咦咦？飞鹰子没有露出什么失格的表情吧？`);
      await era.printAndWait(
        `慌慌张张的控制住自己表情的飞鹰子像是容易受惊的小动物。`,
      );
      await falcon.say_and_wait(`训练员先生！`);
      await era.printAndWait(`不久后两人在沏茶店度过了愉快的节日。`);
    } else {
      await falcon.say_and_wait(`适合马娘与训练员一起看的电影是——`);
      await era.printAndWait(`你与醒目飞鹰度过了快乐的时光。`);
    }
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('恋心！飞鹰子的礼物！', falcon);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await falcon.say_and_wait(`这是飞鹰子为了感谢大家制作的巧克力！`);
    await falcon.say_and_wait(`感谢大家一直支持着飞鹰子！`);
    await say_by_passer_by(`粉丝A`, `这是飞鹰子的本命巧克力吗？`);
    await falcon.say_and_wait(
      `不对！因为飞鹰子要平等的爱着每一位粉丝，所以是从巧克力店里批量采购的巧克力。`,
    );
    await falcon.say_and_wait(
      `除了飞鹰子精心准备的巧克力外，盒子里还有飞鹰子精心准备的明信片与签名！`,
    );
    await say_by_passer_by(`粉丝B`, `能够参加飞鹰子的情人节纪念真是太好了！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(`现场的气氛更加热烈了。`);
    await falcon.say_and_wait(`接下来也要多多支持飞鹰子哦♪`);
    await say_by_passer_by(`粉丝们`, `噢噢噢噢！！！`);
    await era.printAndWait(
      `在粉丝们的欢呼声中${falcon.name}的情人节纪念演唱会才刚刚拉开序幕。`,
    );
    await falcon.say_and_wait(
      `辛苦了！这是作为马娘偶像的飞鹰子准备的礼物，接下来也要一直支持飞鹰子哦？`,
    );
    await era.printAndWait(
      `直到送走最后一名粉丝之后，在不远处观看的你才走上前去与醒目飞鹰打起招呼。`,
    );
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await falcon.say_and_wait(`啊，是训练员先生！`);
    await era.printAndWait(
      `${falcon.name}从不起眼的角落放置的纸箱里取出了一个包装精美的礼物盒。`,
    );
    await falcon.say_and_wait(
      `这是醒目飞鹰作为担当马娘送给训练员先生的本命……义理巧克力哦？`,
    );
    await era.printAndWait(
      `打开礼物盒后，看见了爱心形状的巧克力以及旁边的贺卡。`,
    );
    await falcon.say_and_wait(`今后也要一直支持飞鹰子哦！`);
    await era.printAndWait(`${falcon.name}露出了甜美的笑容。`);
    era.printButton(`在附近吃完回去吧。`, 1);
    await era.input();
    await falcon.say_and_wait(
      `我听说附近有家对训练员与马娘的组合有优惠的店铺，一起去看看吧！`,
    );
    await era.printAndWait(`醒目飞鹰拉着你的手询问着你的意见。`);
    era.printButton(`那真是太好了。`, 1);
    await era.input();
    await era.printAndWait(`两人在附近的人气餐厅度过了情人节。`);
  } else if (edu_weeks === 47 + 9) {
    await print_event_name('目标是皋月赏！', falcon);
    await era.printAndWait(
      `覆盖在枝条上的厚厚积雪终于化开，静谧的特雷森再次被啼鸣声造访。`,
    );
    await era.printAndWait(`正当你在温暖的训练室思考着接下来的赛事时。`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}我回来了！`);
    await chara2_talk.say_and_wait(`打扰了。`);
    await era.printAndWait(`训练室迎来了两位访客。`);
    await me.say_and_wait(`今天的飞鹰子依然活力四射呢。`);
    await falcon.say_and_wait(`嗯！毕竟活力与可爱正是马娘偶像的不同之处呢。`);
    await era.printAndWait(
      `醒目飞鹰在训练室转了一圈后一头扎进了沙发里，无声铃鹿安静的坐在沙发边上，双眼不断的打量着训练室。`,
    );
    await falcon.say_and_wait(`在沙发上躺着真是舒服啊。`);
    await me.say_and_wait(`今天的偶像活动是？`);
    await era.printAndWait(`你取出两个塑料杯，泡上了便利店中购买的红茶。`);
    await falcon.say_and_wait(`嗯——飞鹰子希望能参加皋月赏。`);
    await me.say_and_wait(`什么？`);
    await chara2_talk.say_and_wait(`欸？`);
    await era.printAndWait(
      `不只是你表达了惊讶的情感，一旁的无声铃鹿似乎也被有些吃惊。`,
    );
    await falcon.say_and_wait(`飞鹰子希望能参加皋月赏！`);
    await era.printAndWait(
      `醒目飞鹰以相当具有气势的声音向训练室里的人们宣布。`,
    );
    await me.say_and_wait(`......?`);
    await me.say_and_wait(`所以把铃鹿小姐请过来是为了？`);
    await chara2_talk.say_and_wait(
      `我记得飞鹰同学在泥地赛道活跃，为什么想要参加草地呢？`,
    );
    await era.printAndWait(`无声铃鹿先你一步向醒目飞鹰提出问题。`);
    await falcon.say_and_wait(
      `因为飞鹰子一直都活跃在沙地赛上，所以沙地赛的粉丝们都认识飞鹰子了⭐`,
    );
    await falcon.say_and_wait(
      `不过草地那边的观众好像都不认识飞鹰子，所以飞鹰子希望借着参加草地的机会，让关注草地赛事的粉丝们也开始支持飞鹰子！`,
    );
    era.printButton(`既然这样的话，我也支持。`, 1);
    await era.input();
    await era.printAndWait(
      `如果是为了醒目飞鹰的顶级偶像之路，接下来的训练可能要修改一下了。`,
    );
    await chara2_talk.say_and_wait(
      `原来如此，所以希望我能传授一些在草地方面的技巧吗？`,
    );
    await falcon.say_and_wait(`飞鹰子决定在皋月赏期间作为沙地的无声铃鹿活跃`);
    await chara2_talk.say_and_wait(`……欸？`);
    await era.printAndWait(`不只是无声铃鹿，你也对醒目飞鹰的脱线有些头疼。`);
    await chara2_talk.say_and_wait(
      `飞鹰同学，请不要顶着别人的称号做奇怪的事情！`,
    );
    await era.printAndWait(`无声铃鹿有些生气了\n`);
    era.printButton(`抱歉，之后我会对飞鹰子好好说教的。`, 1);
    era.printButton(`可以传授一些有关草地的技巧吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara2_talk.say_and_wait(`不，不是什么很严重的事情。`);
      await chara2_talk.say_and_wait(
        `作为逃马姐妹的成员，跟上飞鹰同学的思路很困难，不过飞鹰同学不是会拿别人的声誉作为坏事的人。`,
      );
      await chara2_talk.say_and_wait(`训练员先生不用这么在意。`);
      await era.printAndWait(`无声铃鹿似乎以为你要严厉批评醒目飞鹰。`);
      await me.say_and_wait(`失礼了。`);
      await era.printAndWait(`你又重新坐在座位上。`);
      await chara2_talk.say_and_wait(
        `虽然不能借给飞鹰同学我的称号，不过草地方面的技巧我会好好告诉你的。`,
      );
      await era.printAndWait(
        `之后的三小时里，你们通过无声铃鹿了解到了有关草地的知识。`,
      );
    } else {
      await chara2_talk.say_and_wait(`如果是这样的话，当然可以。`);
      await era.printAndWait(`无声铃鹿似乎不在生气了？`);
      await chara2_talk.say_and_wait(
        `不过前方的风景我是不会让给其他人的！这点还请飞鹰同学记在心底。`,
      );
      await falcon.say_and_wait(`咦咦？小铃鹿生气起来好可怕！`);
      await era.printAndWait(`……似乎还是在生气的样子？`);
      await me.say_and_wait(`接下来醒目飞鹰似乎要很辛苦了。`, true);
      await era.printAndWait(`醒目飞鹰带着求助的目光看向了你。`);
      await me.say_and_wait(`（移开视线）`, true);
      await era.printAndWait(`之后的草地特训一直持续到了宵禁才结束。`);
    }
  } else if (edu_weeks === 47 + 12) {
    await print_event_name(`目标！皋月赏！`, falcon);
    await era.printAndWait(
      `${me.actual_name}和${falcon.name}以皋月赏为目标进行努力。`,
    );
    await falcon.say_and_wait(`哈啊，哈啊......`);
    await me.say_and_wait(`辛苦了。`);
    await falcon.say_and_wait(`训练员先生，飞鹰子比上次练习的速度更快了吗？`);
    await era.printAndWait(`你看了一眼秒表。`);
    await me.say_and_wait(`......距离获胜还有一段距离。`);
    await era.printAndWait(
      `虽然有无声铃鹿所教导的跑法技巧，但是醒目飞鹰对于草地还是有严重的不适感。`,
    );
    await falcon.say_and_wait(`......训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(`似乎从你的表情之中看出了什么。`);
    await me.say_and_wait(`虽然有些困难，不过多练习一下的话。`);
    await era.printAndWait(`至少不能让她`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}这样子看起来很可疑呢?`,
    );
    await falcon.say_and_wait(`难道是已经有喜欢的对象了吗?`);
    await era.printAndWait(
      `虽然不知道飞鹰子为什么得出了这个结论，不过这反而让${me.actual_name}松了一口气。`,
    );
    await me.say_and_wait(`我只是有些疲惫了，稍微休息一下就好。`);
    await falcon.say_and_wait(`……真的是这样吗？`);
    await era.printAndWait(`看着越来越疑惑的醒目飞鹰，你寻找着新的话题。`);
    await me.say_and_wait(
      `比起这个的话，飞鹰子不是还要将制作新曲的决定告诉一直支持着自己的大家吗？`,
    );
    await me.say_and_wait(`再不快点的话，大家都要等急了。`);
    await falcon.say_and_wait(`欸?这样的话得抓紧时间了！`);
    await era.printAndWait(
      `看着慌慌张张向着更衣室跑去的飞鹰子，${me.actual_name}刚舒展的眉头再次锁紧。`,
    );
    await me.say_and_wait(
      `虽然是飞鹰子的希望，不过世界上还是有无法逾越的壕沟吗？`,
      true,
    );
    await me.say_and_wait(
      `不，比起这个，只要尽到自己最大的努力，或许奇迹就会到来。`,
      true,
    );
    await me.say_and_wait(`只要一刻不停的坚持下去的话。`, true);
    await era.printAndWait(
      `将记录在纸张上的数据收紧文件夹后，你向着训练室快步走去。`,
    );
    era.drawLine({ content: '演出结束后' });
    await falcon.say_and_wait(
      `今天的演出也顺利结束了，多亏大家的支持，飞鹰子最近新想出的歌曲也大受欢迎⭐`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(`喝彩声响彻云霄。`);
    await falcon.say_and_wait(`谢谢大家！接下来也要一直支持着飞鹰子呦♪`);
    await era.printAndWait(`今天的演出也是大获成功。`);
    await era.printAndWait(
      `等到围观的人群慢慢散开后，从远处观看着的你走向了${falcon.name}。`,
    );
    await me.say_and_wait(`辛苦了，今天的演出也非常受欢迎。`);
    await era.printAndWait(`无论何时都牵挂着舞台的少女。`);
    await falcon.say_and_wait(
      `没有训练员${me.get_adult_sex_title()}的话，飞鹰子现在也在为演出而烦恼呢。`,
    );
    await era.printAndWait(
      `自己只是做了应尽的义务……虽然想这么说，但还是闭上了嘴。`,
    );
    await me.say_and_wait(`接下来的话，就为皋月赏好好准备吧！`);
    await falcon.say_and_wait(`......啊，嗯！飞鹰子一定会胜利的！`);
    await era.printAndWait(
      `接过${falcon.name}手中的纸袋后，你们在回特雷森的路上沉默的前行。`,
    );
    await era.printAndWait(`手中的纸袋为何如此沉重呢？`);
    await era.printAndWait(
      `眩晕的大脑就像不断旋转的黑色物体咕噜咕噜在纸杯中旋转着。`,
    );
    await say_by_passer_by(`稚嫩的声音`, `打扰了！`);
    await era.printAndWait(`声音从背后传来，你与醒目飞鹰对视一眼后一起看去。`);
    await say_by_passer_by(
      `稚嫩的声音`,
      `醒目飞鹰姐姐的表演真的很棒，我也想成为飞鹰姐姐那样的偶像！`,
    );
    await era.printAndWait(
      `看上去是像是初中部的小马娘，似乎是醒目飞鹰的粉丝。`,
    );
    await falcon.say_and_wait(`谢谢你！`);
    await era.printAndWait(`重新回到了偶像状态的醒目飞鹰高兴的挥舞着双手。`);
    await say_by_passer_by(
      `稚嫩的声音`,
      `请问怎么样才能成为飞鹰子姐姐那样的大偶像呢？`,
    );
    await era.printAndWait(`少女想要了解更多有关你们的事情。`);
    await falcon.say_and_wait(
      `飞鹰子并没有想象中那么厉害，一开始只是希望能站在最大的舞台之上而努力，后来慢慢收获了粉丝之后，现在是为了支持着我的粉丝们而努力！`,
    );
    await say_by_passer_by(`小马娘`, `那你身边的大哥哥是谁呢？`);
    await falcon.say_and_wait(`是飞鹰子非常重要的人哦？`);
    await era.printAndWait(`醒目飞鹰带着些许自豪感介绍着。`);
    await say_by_passer_by(`小马娘`, `比粉丝们还要重要吗？`);
    await falcon.say_and_wait(`诶？这个的话。`);
    await era.printAndWait(`醒目飞鹰似乎陷入到了混乱中。`);
    await falcon.say_and_wait(`训练员先生帮帮我。`, true);
    await era.printAndWait(`醒目飞鹰向你抛出了求救的眼神\n`);
    era.printButton(`是比粉丝还要重要的人哦`, 1);
    era.printButton(`是与粉丝不同意义上一样重要的人`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await say_by_passer_by(`小马娘`, `比粉丝还重要是说？`);
      await era.printAndWait(`是在训练上和日常生活中作为指导的人。`);
    } else {
      await say_by_passer_by(`小马娘`, `不同意义是说？`);
      await era.printAndWait(`是在训练上和日常生活中作为指导的人。`);
    }
    await say_by_passer_by(`小马娘`, `大哥哥原来是训练员！`);
    await era.printAndWait(`高兴的围着你旋转的小马娘突然拉住了你。`);
    await say_by_passer_by(
      `小马娘`,
      `等我入学之后，大哥哥可以做我的专属训练员吗？`,
    );
    await era.printAndWait(
      `想要培养马娘需要向理事长提出申请，同时还要负责接下来整整三年的训练。`,
    );
    await era.printAndWait(`实话说是件相当艰难的事情。`);
    await me.say_and_wait(`如果进入特雷森的话，你会遇到比我更优秀的训练员。`);
    await era.printAndWait(`说起来后面的眼神越来越刺痛了。`);
    await say_by_passer_by(`小马娘`, `我知道了！`);
    await era.printAndWait(`在表达感谢之后，小马娘便飞快的离开了。`);
    await me.say_and_wait(`来自身后的视线更加刺痛了。`);
    await me.say_and_wait(`飞鹰子——`);
    await falcon.say_and_wait(`飞鹰子一点也不羡慕。`);
    await era.printAndWait(`像是从地底发出的寒气。`);
    await me.say_and_wait(`这下麻烦了`, true);
    await era.printAndWait(
      `之后为了补偿，答应醒目飞鹰下次节假日会和她一起出行。`,
    );
  } else if (edu_weeks === 47 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:46:位置') === era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`合宿开始！`, falcon);
    await era.printAndWait(
      `夏季合宿开始后，${me.actual_name}和飞鹰子为了进行夏季特训来到了理事长的私人沙滩。`,
    );
    era.printButton(`好大的沙滩！`, 1);
    await era.input();
    await era.printAndWait(`乘坐着学院的大巴来到了这里。`);
    await falcon.say_and_wait(`而且比想象中还要漂亮呢！`);
    await falcon.say_and_wait(`……嗯，这个时候先拍一张照到马推之上⭐`);
    await era.printAndWait(`一下车便迫不及待的咔嚓咔嚓拍个不停。`);
    era.printButton(`训练的话也不要忘记了！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `是！训练员${me.get_adult_sex_title()}就看着飞鹰子活跃的表现吧！`,
    );
    await falcon.say_and_wait(
      `不管是作为偶像的飞鹰子还是作为${falcon.get_uma_sex_title()}的${
        falcon.name
      }都要全部完成！`,
    );
    era.printButton(`就是这种气势！`, 1);
    await era.input();
    await falcon.say_and_wait(`第一个目标是！让附近小镇的居民认识到飞鹰子！`);
    await falcon.say_and_wait(`飞鹰子加油！`);
    await era.printAndWait(
      `${me.actual_name}与${falcon.name}之间的夏季合宿开始了。`,
    );
  } else if (edu_weeks === 47 + 30) {
    await print_event_name(`庙会`, falcon);
    await era.printAndWait(
      `熬过白天的闷热难耐，直到昏沉的夕阳带走最后一丝烦闷，夏季特有的生物发出微弱的光芒。`,
    );
    await era.printAndWait(`你向醒目飞鹰发出了庙会的邀请。`);
    await falcon.say_and_wait(`飞鹰子要好好准备一下！`);
    await era.printAndWait(`这么说着让你在宿舍门口等待着的醒目飞鹰。`);
    await era.printAndWait(`看着三三两两结伴参加庙会的马娘与训练员们。`);
    await era.printAndWait(
      `从宿舍中出来的马娘渐渐变少，大概都是去参加祭典的吧。距离烟火表演还有不足一个小时。`,
    );
    await era.printAndWait(`你在宿舍前的空地上焦躁的来回踱着步。`);
    await falcon.say_and_wait(`不好意思久等了！`);
    await me.say_and_wait(`来的可真慢。`);
    await era.printAndWait(
      `原本是想这么说的，但换上了浴衣的醒目飞鹰比平时更加可爱。`,
    );
    await era.printAndWait(`嘴唇变得焦躁，心跳猛地开始加剧。`);
    await falcon.say_and_wait(`难道这身不好看吗？`);
    await me.say_and_wait(
      `如果飞鹰子不是最闪耀的马娘，恐怕世界上就没有人能承担这个称号了。`,
    );
    await falcon.say_and_wait(`原来是这样！`);
    await era.printAndWait(`醒目飞鹰由衷的露出了笑容。`);
    await me.say_and_wait(`走吧，还有半个小时烟火晚会就要开始了。`);
    await era.printAndWait(`你牵起了醒目飞鹰的手。`);
    era.drawLine();
    await era.printAndWait(
      `举行庆典的数个场所之中，视野最好的是远离小镇的神社。`,
    );
    await era.printAndWait(
      `通向神社的道路需要走上一段漫长的阶梯，也因此人群相比其他地点要稍微稀疏一点。`,
    );
    await falcon.say_and_wait(`训练员先生再不快一点就要开始了！`);
    await era.printAndWait(
      `站在比你稍高一级的阶梯上，醒目飞鹰俯视的目光看向你。`,
    );
    await me.say_and_wait(`飞鹰子等一下，走得太快了。`);
    await era.printAndWait(
      `醒目飞鹰似乎有用不尽的活力一样，一开始是你牵着她的手，走了一段道路后，很快变成了她拉着你在阶梯上不断前进。`,
    );
    await falcon.say_and_wait(`训练员先生的体力比想象中还要差呢！`);
    await era.printAndWait(`毕竟马娘的体力是人类的三倍。`);
    await era.printAndWait(
      `相比人类来说几乎要耗尽所有体力的路程对马娘来说恐怕连热身都算不上。`,
    );
    await era.printAndWait(
      `之所以醒目飞鹰没把你远远甩开，恐怕是为了享受与你一起的氛围吧。`,
    );
    await era.printAndWait(
      `在喘息时向左右望去，前往神社的道路几乎不见人影，祭礼音乐也渐渐到了尾声，烟火大会马上就要开始了。`,
    );
    await me.say_and_wait(`不能和飞鹰子一起看烟火大会的开幕式有些可惜呢。`);
    await era.printAndWait(`你带着略微遗憾的语气向醒目飞鹰说着。`);
    await falcon.say_and_wait(`训练员先生这么想和飞鹰子一起看烟火大会吗？`);
    await era.printAndWait(`带着疑问语气的醒目飞鹰看向了你。`);
    era.printButton(`想和飞鹰子一起记录那个瞬间`, 1);
    await era.input();
    await falcon.say_and_wait(`那么抓紧了！`);
    await era.printAndWait(`纤细的少女将你拉了过来。`);
    await falcon.say_and_wait(`飞鹰子冲刺！`);
    await era.printAndWait(
      `像是被巨力推举着冲上了天空一般，因为无法控制事态的恐惧让你浑身瘫软。`,
    );
    await era.printAndWait(`大脑尚未来得及反应，山顶的神社就到了。`);
    await era.printAndWait(
      `以前的人类是怎么和马娘共存的呢？心底无端升起了疑问。`,
    );
    await falcon.say_and_wait(`训练员先生，烟火大会开始了！`);
    await era.printAndWait(
      `砰、砰、随着火红的鲜花照亮夜空，烟火大会的气氛正式进入高潮。`,
    );
    await era.printAndWait(`同时，在天空之中绽放的烟火也是祭典的结束。`);
    await era.printAndWait(
      `就如稍纵即逝的青春一样，划破漆黑的天空，展示着自己最美好的一面。`,
    );
    await era.printAndWait(`这么想的话多少会有些伤感。`);
    await falcon.say_and_wait(
      `真漂亮啊，如果飞鹰子登上顶级偶像的那一瞬间，恐怕没有比这更适合的吧！`,
    );
    await era.printAndWait(`被各色烟火照耀的脸庞露出了希翼的神情。`);
    await me.say_and_wait(`明年也一起来看烟火大会吧。`);
    await era.printAndWait(`天空中的花朵一排排的绽放，烟火大会也接近了尾声。`);
    await me.say_and_wait(`那时候一定比现在还要闪耀夺目！`);
    await era.printAndWait(`醒目飞鹰望向了你。`);
    await falcon.say_and_wait(`是！`);
    await era.printAndWait(`最美丽的烟火在你眼前绽放。`);
  } else if (edu_weeks === 47 + 40) {
    await print_event_name(`飞鹰子的决定`, falcon);
    await era.printAndWait(`商业街广场\n`);
    await falcon.say_and_wait(`非常感谢大家一直以来默默支持着飞鹰子⭐`);
    await falcon.say_and_wait(
      `这是飞鹰子昨天忙了一个晚上才制作好的小礼物，希望大家接受飞鹰子的小小心意❤`,
    );
    await era.printAndWait(
      `在你和醒目飞鹰的不懈宣传之下，越来越多的人们慕名而来，小小的草坪如今被大量的人群所包围。`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `而被人群团团围住的，便是在马娘偶像之道上努力的醒目飞鹰。`,
    );
    await era.printAndWait(
      `虽然人气距离草地的明星偶像还有一段距离，但沙地的粉丝们愿意前来参观演出的热情却远远胜过草地粉丝。`,
    );
    await era.printAndWait(
      `究其原因的话，毕竟关注草地的粉丝同时期有不少的名赛马娘可以选择，但专精于沙地的马娘偶像，人气与实力共存的醒目飞鹰只有她一人罢了。`,
    );
    await era.printAndWait(`可想而知醒目飞鹰的压力有多大。`);
    await era.printAndWait(`就像是在显微镜下聚焦的太阳光一样。`);
    await me.say_and_wait(`醒目飞鹰最近的睡眠时间越来越少了，真的没问题吗？`);
    await era.printAndWait(
      `最近训练室已经成了醒目飞鹰补觉的场所，这还是在你的强迫之下。`,
    );
    await era.printAndWait(
      `训练、偶像活动，回复粉丝之间的来信（经过你审核之后），为了下一次的突击演出所做的准备。`,
    );
    await era.printAndWait(`繁琐的活动占据了她大量的心力。`);
    await falcon.say_and_wait(`……除此之外！飞鹰子还有一个好消息要告诉大家！`);
    await falcon.say_and_wait(
      `飞鹰子决定参加接下来的JBC经典赛还有东京大赏赛！`,
    );
    await say_by_passer_by(
      `粉丝们`,
      `接下来也能看到飞鹰子活跃的表现了！真是太棒了！`,
    );
    await falcon.say_and_wait(
      `接下来的比赛，飞鹰子也会一直闪耀下去的！大家一定要到现场去参观哦！`,
    );
    await say_by_passer_by(`粉丝们`, `一定会参加的！`);
    await falcon.say_and_wait(`非常感谢⭐`);
    await era.printAndWait(
      `直到最后一名粉丝离开之后，你才从稍远的位置走向醒目飞鹰。`,
    );
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await era.printAndWait(
      `所谓的收尾，就是将围观人群留下的垃圾全部清扫干净。`,
    );
    await era.printAndWait(
      `一开始醒目飞鹰还想坚持自己打扫，但被你以自己也差不多到极限了吧为由强行制止。`,
    );
    await falcon.say_and_wait(`……训练员先生？`);
    await era.printAndWait(
      `与平时在树下打盹的疲惫不堪的醒目飞鹰不同，她那充满了渴求的眼睛直勾勾的盯着你。`,
    );
    await falcon.say_and_wait(`飞鹰子是个合格的马娘偶像了吗？`);
    await me.say_and_wait(`就马娘偶像而言，是世界上独一无二的存在了。`);
    await falcon.say_and_wait(
      `……只要再坚持一下就可以了，所以训练员先生放心吧！`,
    );
    await era.printAndWait(
      `……她的眼睛并没有看向你，而是看向你身后的某个物体。`,
    );
    await falcon.say_and_wait(
      `飞鹰子其实很讨厌孤独的哦？所以无论如何都希望能在最大的舞台之上闪耀。`,
    );
    await falcon.say_and_wait(`……就像烟火一样，划破令人讨厌的黑夜。`);
    await falcon.say_and_wait(`为更多像飞鹰子这样的人带来答案。`);
    await era.printAndWait(`说着说着她突然流下了泪水。`);
    await falcon.say_and_wait(`尽管飞鹰子能够为之努力的方向，只有沙地了。`);
    await falcon.say_and_wait(`……好想再踏上一次，像皋月赏那样的大舞台。`);
    await era.printAndWait(`随后疲惫不堪的少女合上了双眼。`);
    await era.printAndWait(
      `作为训练员的自己，让担当马娘陷入这种境地，已经算是失职了。`,
    );
    await era.printAndWait(
      `即使是打着尊重担当的意见，也不过是自我逃避的产物。`,
    );
    await era.printAndWait(`比以往还要痛恨自己的软弱。`);
    await me.say_and_wait(`……不能这么下去了。`);
    await era.printAndWait(
      `轻轻抱起心爱的少女，怀中的重量便是作为训练员职责的重量。`,
    );
    await me.say_and_wait(`……至少完成作为训练员的责任。`);
    await era.printAndWait(
      `做好觉悟之后，虽然手臂的肌肉传来阵阵疼痛，但内心却感到了解脱。`,
    );
  } else if (edu_weeks === 47 + 41) {
    await print_event_name(`决定的代价`, falcon);
    await era.printAndWait(
      `与11月的气候变换成反比的，有关醒目飞鹰暂停偶像活动的相关报道。`,
    );
    await era.printAndWait(
      `以无论赛场还是舞台都在一刻不停闪耀而闻名的醒目飞鹰，终于到达了极限。`,
    );
    await era.printAndWait(`至少对外是如此宣传的。`);
    await era.printAndWait(
      `因为事发突然而当事人又都三缄其口，使得这场事务变得愈发魔幻起来。`,
    );
    await era.printAndWait(`排除掉过于离谱的猜测，目前主流的有两种。`);
    await era.printAndWait(`醒目飞鹰有了男朋友，不久之后便会退役。`);
    await era.printAndWait(
      `醒目飞鹰腿部受了相当严重的伤，目前正在医院修养，痊愈的概率不高，将来可能会隐退。`,
    );
    await era.printAndWait(`无论那种对于偶像活动都是毁灭性的打击。`);
    await me.say_and_wait(`既然已经做出了决定，就没有回头路可走了。`);
    await era.printAndWait(
      `在宣布暂时停止一段时间的偶像活动后，预想之中的争吵并没有发生，她只是平静的接受了这个事实`,
    );
    await era.printAndWait(
      `……话虽如此，因为自己的擅自行为，说不定使她失去了成长的机会。`,
    );
    await era.printAndWait(
      `如果因为自己的主张，结果造成了这么严重的后果。回过头来看这样的决定是对是错？`,
    );
    await me.say_and_wait(
      `……最后是对是错我不知道，我只是做了我认为正确的事情。`,
    );
    await era.printAndWait(`就算因此要付出代价。`);
    await say_by_passer_by(
      `醒目飞鹰的粉丝`,
      `啊，您好，请问是醒目飞鹰的训练员先生吗？`,
    );
    await era.printAndWait(
      `不知何时出现在走廊上的男人像是终于找到了目标后眼睛发亮的向你快步走来。奇怪，这次的行程应该没有通知任何人吧。`,
    );
    await me.say_and_wait(
      `没错，请问您有什么事？如果是打算要飞鹰子的签名，抱歉她刚刚下去了。`,
    );
    await era.printAndWait(
      `……说起来，这个包厢是在最里侧的一间，如果是找醒目飞鹰的话，应该在路上就碰到才对。`,
    );
    await say_by_passer_by(
      `醒目飞鹰的粉丝`,
      `啊……不好意思，仅仅是我个人的好奇罢了。`,
    );
    await say_by_passer_by(
      `醒目飞鹰的粉丝`,
      `比起飞鹰子，我对她的训练员更感兴趣呢。`,
    );
    await era.printAndWait(`像是为了掩饰着什么一样，连口罩手套都戴上了。？`);
    await me.say_and_wait(`……不，不对，哪里不对劲。`);
    await say_by_passer_by(`醒目飞鹰的粉丝`, `就这么下地狱去吧！`);
    await era.printAndWait(`一道白光毫无征兆的闪过。`);
    await me.say_and_wait(`唔。`);
    await era.printAndWait(
      `虽然也有考虑后会被粉丝的报复，但没想到会有如此的激进事情发生。`,
    );
    await era.printAndWait(`大脑还在处理发生于眼前的，超出现实的事件。`);
    await era.printAndWait(`于是你只能站在原地呆呆地看着小刀刺中你的腹部。`);
    await era.printAndWait(`就这样无奈的迎来自己的末路。`);
    await me.say_and_wait(`唔！`);
    await era.printAndWait(`——如果你没有下意识将公文包作为缓冲的话。`);
    await era.printAndWait(`小刀在皮质的公文包上留下了一道深深的划痕。`);
    await say_by_passer_by(`狂热粉丝`, `该死。`);
    await era.printAndWait(
      `尽管如此，突然之间受到的冲击还是让你下意识的扬起了头，险些一屁股坐到地上。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `飞鹰子明明这么完美，为什么会喜欢上你？`,
    );
    await era.printAndWait(`意识到触感不对的暴徒被眼前的失败所激怒。`);
    await say_by_passer_by(`狂热粉丝`, `给我就这么带着哭喊着下地狱去吧!`);
    await era.printAndWait(
      `不抽出小刀，反而接着这股冲劲意图将你逼迫到墙壁之上。`,
    );
    await me.say_and_wait(`该死，没有退路了。`);
    await era.printAndWait(
      `不抽出小刀，趁你失去着力点就这么将你逼迫到墙壁之上。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `那个青涩、敏感细腻的飞鹰子，怎么会突然宣布停止活动了——`,
    );
    await era.printAndWait(
      `不知是理智被愤怒所冲散的缘故，越说越激动的粉丝用力将小刀向前深入。`,
    );
    await say_by_passer_by(`狂热粉丝`, `——原来如此，我明白了。。`);
    await era.printAndWait(`一瞬间露出了迷惑表情的狂热者恍然大悟。`);
    await say_by_passer_by(
      `狂热粉丝`,
      `都是因为你的存在，我们的飞鹰子才会变成这样。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `如果你消失的话，飞鹰子就会回到之前的样子吧？`,
    );
    await era.printAndWait(`肾上腺素飙升的你看着眼前绝望的一幕。`);
    await era.printAndWait(
      `小腹传来微麻的触感，就像是有人将冰块塞进了你的腹部，从作为盾牌的文件夹下滑落的小刀切实的命中了目标。`,
    );
    await say_by_passer_by(`狂热粉丝`, `切。`);
    await era.printAndWait(
      `原本是瞄准心脏的一击，被公文包挡了下来，只能退而求其次瞄准腹部。`,
    );
    await me.say_and_wait(`请告诉我，为什么醒目飞鹰迟迟没有回来。`);
    await era.printAndWait(`局面压倒性的不利，你反而冷静了下来。`);
    await era.printAndWait(
      `激烈的心脏跳动，体力像是积雪一般消散，近乎麻痹的身体，你以前所未有的集中力思考着突破的方式。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `……对你这种罪无可恕之人没有解释的必要。`,
    );
    await me.say_and_wait(`好机会！`, true);
    await era.printAndWait(
      `之前的对话不过是为了麻痹对方，让对方下意识的思考如何对话而疏忽对身体的防守。`,
    );
    await era.printAndWait(
      `虽然也有反过来彻底激怒对方的可能，但这种时候只考虑赌对的可能性。`,
    );
    await era.printAndWait(
      `你趁着对方一时偷袭得手后暂时放松的警惕狠狠的一脚踢到对方下体。`,
    );
    await say_by_passer_by(`狂热粉丝`, `啊啊啊啊啊啊！`);
    await era.printAndWait(
      `似乎疼痛感超过了快感所带来的麻痹，对方的手一下子松开了。`,
    );
    await me.say_and_wait(`好机会！`, true);
    await era.printAndWait(`乘着对方痛苦弯曲时，你将公文包狠狠的砸向对方。`);
    await say_by_passer_by(`狂热粉丝`, `唔——`);
    await era.printAndWait(
      `从手上传来的麻痹感来说，这一击绝对造成了严重的伤害。`,
    );
    await say_by_passer_by(`狂热粉丝`, `……明明就差最后一步了！`);
    await era.printAndWait(
      `因为无路可退而勉强站起来的恶魔看上去随时会倒在地上。`,
    );
    await era.printAndWait(`然而你的状态更糟。`);
    await me.say_and_wait(`一切就这么结束了吗？`, true);
    await era.printAndWait(`眩晕如雪花般袭来。`);
    await era.printAndWait(
      `咬破舌尖，让剧痛暂时驱散晕厥感，使出全力将公文包投掷过去。`,
    );
    await era.printAndWait(
      `第一击被对方侧头躲了过去，紧接着便是你以身体为武器直接撞向对方。`,
    );
    await era.printAndWait(
      `对方后脑勺重重撞在了玻璃桌上，然后彻底的晕了过去。`,
    );
    await me.say_and_wait(`得打电话给救护车`, true);
    await era.printAndWait(`直到拼尽全力打出电话之后，你也昏了过去。`);
    await era.printAndWait(`你的视线渐渐变得模糊。`);
    await era.printAndWait(`即将远去的意识在最后一刻看到的——`);
    await era.printAndWait(`是赶不上新时代船只的乘客。`);
  } else if (edu_weeks === 47 + 42) {
    // 我越喜欢，我对“我受不了的方式”的定义就越严苛。我去做点什么的动能就越强。
    // 什么也不做，对我就是痛苦的，内心深处就有双重辜负感——第一感觉自己辜负了自己所喜欢的对象，第二感觉辜负了自己的喜欢本身。
    await print_event_name(`水仙`, falcon);
    await era.printAndWait(`粉丝袭击事件已经过去了一周。`);
    await era.printAndWait(
      `身处于事件的风暴中心，出于对你与醒目飞鹰的人生安全考虑。`,
    );
    await era.printAndWait(`学院决定暂时限制你们的外出。`);
    await era.printAndWait(`……某种意义上也是一种解脱。`);
    await era.printAndWait(
      `虽然心里一直再说忘记这件事，但自己总会不由自主的想起那副空虚的模样`,
    );
    await me.say_and_wait(`存在感焦虑吗？`, true);
    await era.printAndWait(
      `因为在任何角度之上都是零，任何机会都因为技能和资历的空白从一开始就没有入场的资格。`,
    );
    await era.printAndWait(
      `一开始或许还可以借着说不定自己不适合这行转向其他方面。`,
    );
    await era.printAndWait(`直到在新的行业再次面对一摸一样的窘境。`);
    await era.printAndWait(`回过头来只是白白虚度了几年的岁月。`);
    await era.printAndWait(
      `或许曾经一腔热血想要做出什么，但在现实面前被迫承认自己什么都做不好。`,
    );
    await era.printAndWait(
      `对于不甘心现状的人来说，证明自己存在确实比生命更加重要。`,
    );
    await era.printAndWait(
      `因为没有存在，生命也只是没有显示和输出、途耗能量的过程罢了。`,
    );
    await era.printAndWait(`如果在这个时候有个机会能站在聚光灯下呢？`);
    await era.printAndWait(`就算这件事会给你们造成巨大的伤害。`);
    await era.printAndWait(`我很抱歉，但我必须存在。`);
    await era.printAndWait(
      `因为迷茫而寻求证明自身存在的事物，主动将自己染上色彩，加入和自己色彩相同的人群之中，假装自己不是迷茫的存在。`,
    );
    await era.printAndWait(
      `虽然知道自己得出的结论可能是错的，但现在只能暂时接受这一观点说服自己。`,
    );
    await era.printAndWait(
      `如果从这个角度考虑，上周的袭击事件只是为了证明存在感的绝望之人找到了最能引起热议的话题。`,
    );
    await era.printAndWait(`只是对方恰好是醒目飞鹰的粉丝罢了。`);
    await era.printAndWait(
      `看着醒目飞鹰轻轻推开训练室的大门，向你勉强露出微笑时。`,
    );
    await era.printAndWait(
      `你将看向醒目飞鹰的视线向下挪开，看着训练计划发呆。`,
    );
    await era.printAndWait(
      `上周的袭击虽然惊险无比，但真正造成的伤害也仅仅只是在你小腹之上划了一道口子。`,
    );
    await era.printAndWait(
      `多亏特雷森考虑到训练员在与所属马娘起冲突时可能会发生的暴力事件，因此采用了凯夫拉纤维作为训练员制服的一部分。`,
    );
    await era.printAndWait(
      `虽说是为了防止被愤怒的马娘直接踢中导致重伤，但意外的在防刺方面也有出色的性能。`,
    );
    await era.printAndWait(`怎么说呢？因祸得福？`);
    await me.say_and_wait(`飞鹰子……不，醒目飞鹰。`);
    await era.printAndWait(
      `将发散的思绪重新集中到眼前的少女身上。你犹豫着要不要使用这个艺名称呼她。`,
    );
    await falcon.say_and_wait(`训练员先生，飞鹰子没关系的。`);
    await era.printAndWait(
      `比想象之中还要坚强的少女即令你高兴又感到了一丝悲哀。`,
    );
    await era.printAndWait(`被阴影所覆盖的少女低下了头。`);
    await falcon.say_and_wait(
      `飞鹰子作为马娘偶像，心中隐隐约约就有这种不安，不如说这种事情一定会到来。`,
    );
    await falcon.say_and_wait(
      `所以，与其是训练员先生道歉，倒不如说我才是应该道歉的那一边。`,
    );
    await era.printAndWait(
      `醒目飞鹰的视线上下浮动着，似乎不太擅长这样的对话。`,
    );
    await era.printAndWait(`你深吸一口气，准备继续说下去时——`);
    await falcon.say_and_wait(`飞鹰子知道的。`);
    await era.printAndWait(
      `比镜面的湖泊还要平静的醒目飞鹰抬起头直视你的双眼。`,
    );
    await falcon.say_and_wait(
      `飞鹰子的粉丝们将希望寄托在了飞鹰子的身上，所以，飞鹰子不能有任何的污点存在。`,
    );
    await falcon.say_and_wait(
      `但是，飞鹰子不这么想，只要有为了成为偶像付出的汗水，然后再加上一点点的运气。`,
    );
    await falcon.say_and_wait(
      `像飞鹰子这样的马娘就能在舞台中心闪耀了……但是……做出这种事来不是很奇怪吗。`,
    );
    await era.printAndWait(`你想要逃避这双悲哀的眼睛，但无法将视线从中移开。`);
    era.printButton(`飞鹰子为什么想成为偶像？`, 1);
    await era.input();
    await era.printAndWait(`逃避会有比不逃避更惨重的事情发生，。`);
    await falcon.say_and_wait(
      `……为了让像飞鹰子这样寂寞的人也能暂时忘掉孤独的痛苦。`,
    );
    await era.printAndWait(`是了，就是为了这个。`);
    await era.printAndWait(`不管如何哀叹自身的不幸，责任都是一样的。`);
    await era.printAndWait(
      `作为马娘偶像一帆风顺的走到了现在，已经是难以想象的奇迹般的幸运了。`,
    );
    await me.say_and_wait(
      `我知道的，就像心脏被掏空，那片黑洞洞的伤口，无论何时都在向外流血。`,
    );
    await me.say_and_wait(
      `就算有无数的鲜花与掌声否定这判断，也会在演出结束之后，从舞台之上走下时，从伤口之中流出的鲜血质问着自己。`,
    );
    era.printButton(`比起为了减轻罪恶感的流泪，作为偶像有更重要的事情去做`, 1);
    await era.input();
    await me.say_and_wait(
      `飞鹰子要考虑的是如何赢得接下来的比赛，以及第三年的泥地赛事。`,
    );
    await me.say_and_wait(
      `除了回应粉丝们的期待，更重要的，为了也有以泥地马娘偶像为目标的后辈们。`,
    );
    await me.say_and_wait(
      `就算看不到方向又如何，就算错了又怎么样！就这么带着这个伤口一直向前！就这样在赛场之上舞台中心一直闪耀下去！。`,
    );
    await me.say_and_wait(
      `让她们看看作为初代马娘偶像的醒目飞鹰，到底能做到什么地步！`,
    );
    await era.printAndWait(
      `世界上不存在同时满足正确的方向与正确的目标而造成的成功。`,
    );
    await era.printAndWait(
      `严肃考虑的话，正确的方向与正确的目标都是不存在的。`,
    );
    await era.printAndWait(
      `然而，就算方向与目标都是错的，我们也依然做成了无数的成功，不是吗？`,
    );
    await era.printAndWait(
      `前半段旅程取得的成功都是这么过来的，又有什么理由不能证明后面的成功不也是顺着错误的方向与错误的目标而成就的呢？`,
    );
  } else if (edu_weeks === 47 + 48) {
    await print_event_name(`圣诞祈愿`, falcon);
    await era.printAndWait(`中山竞马场·有马纪念`);
    await era.printAndWait(
      `坐在观众席上的观众们所呼出的气体化作淡淡的白雾弥漫在冬日的竞马场。`,
    );
    await era.printAndWait(`今年的有马纪念比依然火热。`);
    await era.printAndWait(
      `你与醒目飞鹰一起坐在观众席上，听着解说介绍接下来参与有马纪念的明星赛马娘们。`,
    );
    await me.say_and_wait(`今年有马纪念最受瞩目的参赛马娘是大和赤骥。`);
    await falcon.say_and_wait(`大和同学吗？`);
    await era.printAndWait(
      `在嘈杂的声音下，${falcon.get_uma_sex_title()}引以为傲的听力反而成为了一种枷锁。`,
    );
    await me.say_and_wait(`有好好保护好耳朵吗？`);
    await falcon.say_and_wait(`飞鹰子好好戴上耳套了！`);
    await era.printAndWait(
      `打上了蝴蝶结的可爱耳套避免了飞鹰子因为过于激烈的呼喊声暂时性失聪的可能性。`,
    );
    await me.say_and_wait(`那么，现在一起去找座位吧。`);
    await falcon.say_and_wait(
      `好！那个......训练员${me.get_adult_sex_title()}`,
    );
    await falcon.say_and_wait(`就今天的话，可以直接叫我的名字吗？`);
    await era.printAndWait(`意外的${falcon.name}不再执着于偶像的包袱了。`);
    await me.say_and_wait(`${falcon.name}，我们一起走吧。`);
    await falcon.say_and_wait(`嗯！`);
    await era.printAndWait(`观众们差不多都坐定了之后，你们才找到自己的座位。`);
    await me.say_and_wait(`今年的有马纪念也依然盛况空前。`);
    await falcon.say_and_wait(`听说赤骥同学也出场了呢！`);
    await era.printAndWait(
      `身穿蓝白色决胜服的赛${falcon.get_uma_sex_title()}走进了赛场。`,
    );
    await era.printAndWait(`最引人注目的还是${falcon.sex}那长长的棕色双马尾。`);
    await falcon.say_and_wait(`赤骥同学的决胜服比在电视上看到的还要漂亮！`);
    await me.say_and_wait(`不知道这次${falcon.sex}会采取什么跑法呢？`);
    era.drawLine({ content: '胜利舞台后' });
    await era.printAndWait(`大和赤骥漂亮的取得了第一的成绩。`);
    await era.printAndWait(`舞台上的表演也让人感到振奋。`);
    await era.printAndWait(`直到结束之后，`);
    await falcon.say_and_wait(`有马纪念的舞台真大呢。`);
    await falcon.say_and_wait(`要是飞鹰子也能登上这样的舞台就好了。`);
    await era.printAndWait(
      `从手机上看到的消息是今年的观看人数超过了十一万人。`,
    );
    await era.printAndWait(`相比之下，东京大赏人数仅有两三万。`);
    await falcon.say_and_wait(
      `不过就算是这样，飞鹰子也要作为顶级偶像让泥地赛道也变得受欢迎才行！`,
    );
    await era.printAndWait(`所谓的正统偶像吗？`);
    await me.say_and_wait(`那么先从东京大赏开始，朝着这个目标一点一点前进吧！`);
    await falcon.say_and_wait(`好！`);
    await era.printAndWait(`掏出手机扫了一眼，已经快到宵禁时间了。`);
    await me.say_and_wait(
      `现在的话回去也有些来不及了，干脆就在附近休息一个晚上吧。`,
    );
    await falcon.say_and_wait(
      `嗯——训练员${me.get_adult_sex_title()}一定已经订好房间了吧？`,
    );
    await me.say_and_wait(`订房间？`);
    await era.printAndWait(`慌忙拿出手机开始查看，才发现附近的酒店早已爆满。`);
    await era.printAndWait(
      `而且在耽搁的这段时间，就算从现在跑到车站都已经赶不上最后一班回特雷森的列车了。`,
    );
    await falcon.say_and_wait(`……没，没关系的训练员先生。`);
    await era.printAndWait(
      `看着你无力垂下的肩膀，${falcon.name}顿了顿从贴身小包中取出了一张卡片递给了你。`,
    );
    await falcon.say_and_wait(`差点忘了！这是给训练员先生的。`);
    await era.printAndWait(`你接过印有醒目飞鹰圣诞服的小卡片。`);
    await falcon.say_and_wait(`差点忘了！这是给训练员先生的。`);
    await falcon.say_and_wait(
      `不是训练员先生突然提醒我的话，飞鹰子差点就忘了呢……啊哈哈。`,
    );
    await era.printAndWait(
      `你看着飞鹰子腼腆的笑容，然后顺着她期待的视线注意到了反面还有字。`,
    );
    era.printButton(`谢谢。`, 1);
    await era.input();
    await era.printAndWait(
      `略微潦草的艺术签名，以及写着“今天也要加油”的飞鹰子Q版头像。`,
    );
    await falcon.say_and_wait(`如果心情低落的话，看到飞鹰子就会高兴起来的！`);
    await era.printAndWait(`真是感激不尽。那么——`);
    await me.say_and_wait(`先去附近的旅馆询问一下有没有剩余的房间吧。`);
    await era.printAndWait(
      `虽然附近的酒店都被人提前预约好了，但也有因为各种原因而无法前来的客人，如果能抓住这个机会的话。`,
    );
    await era.printAndWait(
      `在意识到这点后，你们加快了前去探访的脚步。在询问了三家旅店的前台后打听到了一个因为临时有事取消预约而空余的房间。`,
    );
    await falcon.say_and_wait(`这样真的可以吗？`);
    await era.printAndWait(`取下发饰后将头发散开的醒目飞鹰喃喃自语。`);
    await era.printAndWait(`毕竟是无可奈何的事情，你揉了揉醒目飞鹰的小脑袋。`);
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `果然还在因为没赶上电车而有些沮丧吧？之后想办法补偿她吧。`,
    );
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('飞鹰子与情人节♪', falcon);
    await era.printAndWait(`今年的情人节是在专门的会场举行的。`);
    await era.printAndWait(
      `虽说飞鹰子一度坚持在平时活动的场所举行，但考虑到会前来参加的粉丝以及因为好奇而前来的游客。`,
    );
    await era.printAndWait(`……又或许是为了安全考虑。`);
    await falcon.say_and_wait(`非常感谢大家参加飞鹰子的感谢庆典♪`);
    await falcon.say_and_wait(
      `为了感谢大家平时一直默默支持作为偶像的飞鹰子，这是飞鹰子昨天花了一天制作的礼物！`,
    );
    await era.printAndWait(`飞鹰子向现场的粉丝们展示了包装好的巧克力盒。`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await falcon.say_and_wait(`嗯嗯！飞鹰子感受到大家的热情了！`);
    await falcon.say_and_wait(
      `接下来也要以这样的气势好好品尝充满飞鹰子心意的巧克力呦！`,
    );
    await say_by_passer_by(`粉丝们`, `噢噢噢噢！飞鹰子！飞鹰子！`);
    era.drawLine();
    await falcon.say_and_wait(`接下来也要一直支持着飞鹰子哦！`);
    await era.printAndWait(
      `直到最后一位粉丝带着巧克力满足的离开后，现场只剩下${me.actual_name}和${falcon.name}了。`,
    );
    await era.printAndWait(`醒目飞鹰背后堆积的巧克力山也分完了。`);
    await falcon.say_and_wait(`啊，等等，还有一份！`);
    await era.printAndWait(
      `她从角落里取出一个包装精美的礼物盒，恐怕是布置场所时就已经准备好的吧。`,
    );
    await falcon.say_and_wait(
      `这是作为赛马娘的醒目飞鹰平日里对训练员先生的感谢。`,
    );
    await era.printAndWait(
      `醒目飞鹰的语气比想象之中更加平淡，看不出有什么变化。`,
    );
    await era.printAndWait(`大概是反应过度了吧，最近还是好好休息才行。`);
  } else if (edu_weeks === 95 + 9) {
    await print_event_name('醒目飞鹰', falcon);
    await era.printAndWait(`火红色的天空被深蓝所劈开，随后散为漫天星尘。`);
    await era.printAndWait(`与平时并无不同的演唱会。`);
    await era.printAndWait(
      `尽管进入第三年后关注度略微下滑，但泥地粉丝们的热情却依然不减。`,
    );
    await era.printAndWait(
      `或许是个性如此鲜明的泥地偶像实在过于稀有的缘故吧。`,
    );
    await era.printAndWait(
      `被粉丝们所簇拥的醒目飞鹰，具有着水晶胡萝卜一般的吸引力。`,
    );
    await falcon.say_and_wait(`呼——大家！非常感谢！`);
    await era.printAndWait(
      `不远处的歌曲串烧进入尾声，粉丝们将喜悦的情绪传递给了站在舞台上的偶像。`,
    );
    await say_by_passer_by(
      `新粉丝A`,
      `虽然只是在CD中听过，不过还是现场给人感觉更愉悦啊。`,
    );
    await say_by_passer_by(
      `忠实粉丝B`,
      `因为飞鹰子将作为马娘偶像的爱平均分给了大家，所以才会有这么大的吸引力。`,
    );
    await say_by_passer_by(
      `忠实粉丝C`,
      `虽然这么说有点看不懂气氛，不过飞鹰子是不是有点反常的样子？`,
    );
    await say_by_passer_by(
      `忠实粉丝C`,
      `之前的飞鹰子一直有种跃动的活力感，不过现在却有种奇怪的感觉？`,
    );
    await say_by_passer_by(
      `忠实粉丝D`,
      `应该与接下来的比赛有关吧，毕竟在粉丝发布会上宣布第三年的泥地赛要全部胜利。`,
    );
    await say_by_passer_by(
      `忠实粉丝D`,
      `不过就算这么苛刻的难度，飞鹰子却依然能绽放出笑容。`,
    );
    await say_by_passer_by(`忠实粉丝D`, `‘或许这才是马娘偶像吧’我总是这么想。`);
    await say_by_passer_by(`新粉丝E`, `说起来去年不是有个粉丝袭——`);
    await say_by_passer_by(`忠实粉丝B`, `Stop！这种事是不能讨论的禁忌!`);
    await era.printAndWait(
      `原本讨论正热烈的粉丝群体被这一盆冷水所打岔，众人纷纷没了继续讨论下去的欲望。\n\n\n`,
    );
    await falcon.say_and_wait(`训练员先生。`);
    await era.printAndWait(
      `最后一位来到现场的粉丝离开后，你才从不远处迎接醒目飞鹰。`,
    );
    await era.printAndWait(
      `面带笑容的少女与你分析着今天的演唱会成功与不足之处，每当得到肯定或更好的结论，回到特雷森的小径上便传来的欢快的笑声。`,
    );
    await falcon.say_and_wait(`训练员先生。`);
    await me.say_and_wait(`诶？`);
    await falcon.say_and_wait(`虽然很遗憾。`);
    await era.printAndWait(`醒目飞鹰的声音充满了平静。`);
    await falcon.say_and_wait(
      `不，没什么。像这样保持着距离，对于飞鹰子，还有训练员先生才是最好的。`,
    );
    await era.printAndWait(`与平时鲁莽的模样不同，醒目飞鹰向你露出了笑容。`);
    await falcon.say_and_wait(
      `飞鹰子也反思过，或许与训练员先生之间的关系确实太亲密了呢。`,
    );
    await era.printAndWait(`一种难以言喻的隔阂在你们之间展开。`);
    await falcon.say_and_wait(
      `作为马娘偶像，不平等的爱着所有的粉丝们可不行呢。`,
    );
    await me.say_and_wait(`不，倒也不至于。`);
    await era.printAndWait(`正当你开始烦恼接下来该说些什么的时候。`);
    await falcon.say_and_wait(`训练员先生，这个就暂时放在你这里了。`);
    await era.printAndWait(`醒目飞鹰小心翼翼的将额头上的发饰取下。`);
    await me.say_and_wait(`……为什么？`);
    await era.printAndWait(
      `因为过于震惊而思考停止，下意识的将心底的疑惑吐露出来。`,
    );
    await era.printAndWait(`少女笑着将被水粘湿的缎带递给了你。`);
    await me.say_and_wait(`这不是对飞鹰子来说很珍贵的东西吗？`);
    await falcon.say_and_wait(`是的，对于飞鹰子来说是无可比拟的宝物。`);
    await falcon.say_and_wait(
      `不过飞鹰子觉得比起放在自己这边，暂时借给训练员先生才最能发挥用处。`,
    );
    await me.say_and_wait(`不，不对，一定是哪里出错了。`);
    await era.printAndWait(`如同眼睁睁的看着过山车即将通过缺口的道路一样。`);
    await era.printAndWait(`紧紧握住的右拳却被如同老虎钳的纤细手掌强行掰开。`);
    await falcon.say_and_wait(`训练员先生真是木头脑袋呢`);
    await era.printAndWait(`带着略有遗憾的宛若死水的平静回复。`);
    await falcon.say_and_wait(`接下来飞鹰子要以马娘偶像的身份了。所以——`);
    await era.printAndWait(`直至深渊。`);
    await falcon.say_and_wait(`接下来请多指教了，（玩家名）训练员。`);
    await era.printAndWait(`原来如此，作为与过去的自己诀别之物吗。`);
    await era.printAndWait(`真好猜啊哈哈哈，答案肯定不是这个对吧。`);
    await me.say_and_wait(`哈哈，对吧，不对，不，也许。`);
    await me.say_and_wait(`醒目飞鹰。`);
    await era.printAndWait(
      `像是被悬挂在教室上的白炽灯脱落时不幸在胸口处破裂时发出的悲鸣。`,
    );
    await falcon.say_and_wait(`所以，训练员先生，这样就可以了。`);
    await era.printAndWait(`醒目飞鹰不动声色的后退了一步。`);
    await me.say_and_wait(`开什么玩笑！`);
    await era.printAndWait(`与醒目飞鹰一起经历的时间就这么否定了吗？`);
    await era.printAndWait(`为什么努力到最后是这个结果？`);
    await era.printAndWait(
      `因为愤怒而狂乱的身体想要宣泄心中的不甘与憎恨，最终却只能空虚的吐露支离破碎的话语。`,
    );
    await era.printAndWait(
      `眼前的视野化为一片模糊，口中重复着自己也不明白的对话，下意识的抗拒眼前的事实。`,
    );
    await era.printAndWait(`等到你从目眩感中恢复时，身旁的少女已经无影无踪。`);
  } else if (edu_weeks === 95 + 14) {
    // 在第三年 醒目飞鹰作为泥地的马娘偶像成功提高了泥地赛道的人气
    // 马娘A、B选择了泥地赛道 A外向 B内向
    await print_event_name('粉丝感谢祭♪', falcon);
    await era.printAndWait(`为了感谢粉丝平时关照而举行的感谢活动再次开始。`);
    await era.printAndWait(`然而与以往不同的是。`);
    await say_by_passer_by(`马娘A`, `醒目飞鹰前辈可以和我合影吗？`);
    await say_by_passer_by(`马娘B`, `我也想和飞鹰子合影！`);
    await era.printAndWait(`被刚刚入学的小马娘们团团围住的醒目飞鹰。`);
    await falcon.say_and_wait(`没想到飞鹰子现在这么受欢迎呢……`);
    await say_by_passer_by(`马娘A`, `飞鹰子前辈现在可是泥地赛道的热门明星！`);
    await say_by_passer_by(
      `马娘A`,
      `大家现在一提到泥地赛事就会想到醒目飞鹰呢！`,
    );
    await falcon.say_and_wait(`哇——这样离飞鹰子的顶级偶像道路更近了一步呢！`);
    await say_by_passer_by(
      `马娘A`,
      `还有还有，因为飞鹰子在泥地上的活跃表现收到了大量关注的泥地赛事，原本默默无闻的泥地马娘们也终于变得瞩目起来了呢！`,
    );
    await falcon.say_and_wait(
      `这也不全部都是飞鹰子的功劳，还有一直支持着飞鹰子的——大家。`,
    );
    await falcon.say_and_wait(
      `说到这里，为了向一直支持着飞鹰子的大家表达感激之情，接下来10点开始，在第二舞台的飞鹰子会举行回馈粉丝们的表演。`,
    );
    await falcon.say_and_wait(`大家一定要来参加哦？`);
    await say_by_passer_by(`马娘A`, `飞鹰子！飞鹰子！`);
    era.drawLine();
    await falcon.say_and_wait(`~~~♪谢谢大家！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await falcon.say_and_wait(
      `接下来的比赛大家也要紧盯着闪耀的飞鹰子哟？那么，一二`,
    );
    await falcon.say_and_wait(`如果飞鹰子逃跑了？`);
    await say_by_passer_by(`粉丝们`, `那就只能追上去了！`);
    await falcon.say_and_wait(`要追到地平线的尽头吗~？`);
    await say_by_passer_by(`粉丝们`, `那里就是飞鹰子的大舞台！`);
    await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
    await say_by_passer_by(`粉丝们`, `——去抓住大大的爱吧！`);
    await falcon.say_and_wait(
      `最强的${falcon.get_uma_sex_title()}偶像，${
        falcon.name
      }♪今天也送到了呢⭐`,
    );
    await say_by_passer_by(`粉丝们`, `噢噢噢噢噢噢噢噢！飞鹰子！飞鹰子！`);
    await era.printAndWait(`飞鹰子的演出大获成功。`);
    era.drawLine();
    await me.say_and_wait(`稍微在附近转转吧`, true);
    await era.printAndWait(`原本人烟稀少的小径，也因为访客的到来而变得拥挤。`);
    await era.printAndWait(
      `虽然对想要从捷径处离开的你造成了些许困扰，但密密麻麻的人群却有一种虚幻的安全感。`,
    );
    await era.printAndWait(
      `记得有位学者曾说过，一个人能维持稳定社交的人数是150人，而进一步交流的人数只有20人左右，最终能发展成为密友的人数却只剩下可怜的5~7人左右。`,
    );
    await era.printAndWait(
      `对于他们来说，我也只是他们世界之中一个微不足道的配角，或者只是作为70亿人之一的背景板存在吧。`,
    );
    await era.printAndWait(
      `这么考虑的话，就算在大街上突然变成马娘，对大多数人也就是一个记忆不到一个月的新闻罢了。`,
    );
    await era.printAndWait(
      `像跟随着洋流游动的鱼群一样，不知不觉就来到了副舞台这边。`,
    );
    await era.printAndWait(`看着作为一日明星的马娘们闪耀的瞬间。`);
    await me.say_and_wait(`……醒目飞鹰`, true);
    await era.printAndWait(
      `以顶级马娘偶像为目标一直闪耀到尽头为止的，不服输的少女。`,
    );
    await era.printAndWait(
      `总觉得醒目飞鹰这么急躁的拉开两者之间的界限，并没有之前自己想象中那么简单。`,
    );
    await me.say_and_wait(`醒目飞鹰也有自己的苦衷。`);
    await era.printAndWait(`光是意识到这一点，就已经是一种深层的安慰了。`);
    await era.printAndWait(
      `——哪怕这安全感并不真实，但不真实的安全感也是安全感。`,
    );
    await era.printAndWait(`强迫自己认识到这一点。`);
    await me.say_and_wait(`接下来找机会好好和醒目飞鹰聊聊吧。`, true);
    await era.printAndWait(`你将注意力重新集中在训练计划上。`);
  } else if (edu_weeks === 95 + 18) {
    // 脑海之中闪现与训练员之间的过往
    await print_event_name(`日常`, falcon);
    await era.printAndWait(`被大幅的震动所惊醒。`);
    await era.printAndWait(`尚且模糊的视线之中，隐隐约约有橙色的色块移动。`);
    await era.printAndWait(`揉了揉发胀的双眼，想要将自身的注意力集中。`);
    await era.printAndWait(`却与同样迷茫的少女对视。`);
    await falcon.say_and_wait(`啊……`);
    await era.printAndWait(`少女似乎也是刚刚醒来，疑惑于陌生的天花板。`);
    await me.say_and_wait(`下午好，醒目飞鹰。`);
    await era.printAndWait(
      `似乎意识到了什么，瞬间放大的瞳孔以及刷的一下竖立起来的耳朵。`,
    );
    await falcon.say_and_wait(`——诶？诶！为什么我会在训练员先生的房间里？`);
    await era.printAndWait(
      `得益于两人之间的深厚羁绊，醒目飞鹰在疑惑之后没有向你发起攻击而是大声询问。`,
    );
    await me.say_and_wait(
      `抱歉，虽然是我自作主张，已经将外宿许可证交给寮长确认过了。`,
    );
    await falcon.say_and_wait(`这样……训练员先生对飞鹰子……`);
    await me.say_and_wait(`不对！我也开始跟不上飞鹰子跳脱的思路了。`);
    await me.say_and_wait(
      `因为我突然意识到未经许可就擅自离开特雷森去医院而被小报记者拍到的话，我会直接上花边新闻的头条。`,
    );
    await me.say_and_wait(`不论是我还是飞鹰子的名誉，恐怕都会受到严重的挫伤。`);
    await me.say_and_wait(
      `所以我在得到医生没有大碍需要好好休息的回复后，便以醒目飞鹰在巡回过程中因为过度劳累昏倒作为理由向理事长申请了外宿许可。`,
    );
    await me.say_and_wait(
      `虽然是深夜，但手纲小姐能这么迅速的回复，实在是帮了大忙。`,
    );
    await me.say_and_wait(`说起来，飞鹰子现在觉得怎么样?`);
    await era.printAndWait(`就这么默默听着你讲述的醒目飞鹰从床上站了起来。`);
    await falcon.say_and_wait(`抱歉，给训练员先生添了这么大的麻烦。`);
    await era.printAndWait(`然后转向你深深的鞠躬。`);
    await me.say_and_wait(
      `抱歉，如果我能多对醒目飞鹰信赖一点的话，飞鹰子也不会陷入这种境地。`,
    );
    await era.printAndWait(`脑海中闪过了醒目飞鹰悲伤的笑容。`);
    await me.say_and_wait(
      `如果我能抑制住心中焦虑的话，飞鹰子就不会受到这种折磨。`,
    );
    await era.printAndWait(`于是你也深深的低下了头。`);
    await falcon.say_and_wait(
      `诶！明明是飞鹰子犯下的错误，训练员先生没必要这样。`,
    );
    await era.printAndWait(`想要抬起头阻止你的醒目飞鹰与你的脑袋发生了碰撞。`);
    await era.printAndWait(`你的鼻子似乎因为受到了重击而传来了酥麻感。`);
    await falcon.say_and_wait(`啊，训练员先生。`);
    await me.say_and_wait(`嗯？怎么了？`);
    await era.printAndWait(
      `你下意识的摸了摸鼻子，鲜红色的液体顺着鼻腔流入了嘴巴。`,
    );
    await era.printAndWait(
      `……不知为何，苦涩的铁锈味却给予了你一种安心的感觉。`,
    );
    await falcon.say_and_wait(`训练员先生请坐下来！`);
    await era.printAndWait(
      `醒目飞鹰不容分说便让你坐在了床上，你将餐巾纸撕成两半后折叠堵住了正在流血的鼻孔。`,
    );
    await me.say_and_wait(`……哈哈哈。`);
    await era.printAndWait(
      `看着病人与看护者立场反转的一幕，实在忍不住笑了出来。`,
    );
    await era.printAndWait(
      `尚未扎稳的餐巾纸因为震动而在空中划过了一道红色的丝线，下一刻，沾湿了你的训练员外套。`,
    );
    await falcon.say_and_wait(`诶诶诶！`);
    await era.printAndWait(`如往日一般，手忙脚乱的日常再次启动。`);
  } else if (edu_weeks === 95 + 29) {
    // 节拍 场景 序列 幕 故事
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:46:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`合宿开始！`, falcon);
    await me.say_and_wait(`终于到了。`);
    await era.printAndWait(
      `因为醒目飞鹰在马推上发布的演唱会通知而一口气涌入的粉丝们。`,
    );
    await era.printAndWait(`点赞，耐心回答问题，对不友好的评论进行删除。`);
    await era.printAndWait(
      `在颠簸的大巴车上一直看手机的结果就是离目的地还有1/4路程时一股反胃感袭来。`,
    );
    await era.printAndWait(`好不容易到达目的地后立刻吐到了昏天黑地。`);
    await era.printAndWait(`虽然借由此切身体会到了自己活着的鲜明存在感。`);
    await era.printAndWait(
      `不过对于醒目飞鹰来说，这也是一个难得的从不停的奔波之中得以休息的日子。`,
    );
    await me.say_and_wait(`简直就跟度假一样。`, true);
    await falcon.say_and_wait(`训练员先生！`);
    await era.printAndWait(`醒目飞鹰正四处寻找着你。`);
    await me.say_and_wait(`我在这里！`);
    await era.printAndWait(`尽可能大声地回应着对方。`);
    await era.printAndWait(
      `在得到了回应的醒目飞鹰啪塔啪塔地踩着沙子向你的方向跑了过来。`,
    );
    await falcon.say_and_wait(`训练员先生⭐接下来的训练也请多——`);
    await falcon.say_and_wait(`哎哎？训练员先生没事吧？`);
    await era.printAndWait(`看着你因为难受而苍白的脸色。`);
    await me.say_and_wait(`只是处理粉丝回复太久有点晕车了，不是什么大事。`);
    await falcon.say_and_wait(`不对!`);
    await era.printAndWait(`不像是马娘偶像风格的醒目飞鹰大声的反驳着。`);
    await falcon.say_and_wait(
      `训练员先生是飞鹰子在马娘偶像道路上一起前行的同伴!如果训练员先生因为状态不好倒下了，那么飞鹰子的训练也会大打折扣的。`,
    );
    await era.printAndWait(`从两人身边路过的马娘与训练员纷纷侧目。`);
    await me.say_and_wait(`抱歉，下次不会这么做了。`);
    await era.printAndWait(
      `或许是周围汇聚的目光越来越多，亦或是你道歉的缘故，醒目飞鹰的态度缓和了。`,
    );
    await falcon.say_and_wait(`飞鹰子这么说也有点过分了呢，抱歉。`);
    await falcon.say_and_wait(`——如果训练员先生跑到了飞鹰子看不到的地方的话`);
    await era.printAndWait(`醒目飞鹰低下了头不知在想着什么。`);
    await me.say_and_wait(`飞鹰子？`);
    await falcon.say_and_wait(
      `没什么啦⭐飞鹰子在夏季合宿的计划是——让沙滩在内的所有游客全部成为飞鹰子的粉丝！`,
    );
    await falcon.say_and_wait(
      `为此，接下来的庙会上，飞鹰子要俘获前来观看演出的游客的心！`,
    );
    await me.say_and_wait(`不要忘记训练！`);
    await era.printAndWait(
      `似乎是从这份目标之中得到了活力的缘故，醒目飞鹰变得闪闪发光。`,
    );
    await falcon.say_and_wait(`真是的~这个也不会落下的啦⭐`);
    await era.printAndWait(
      `看着眼前的醒目飞鹰又恢复到了原来的状态，你也放下了心。`,
    );
    era.printButton(`嗯——接下来先绕着沙滩跑十圈热下身吧！`, 1);
    await era.input();
    await falcon.say_and_wait(`好♪`);
    await era.printAndWait(`你与飞鹰子之间第三年的夏季合宿开始了。`);
  } else if (edu_weeks === 95 + 30) {
    await print_event_name(`庙会`, falcon);
    await era.printAndWait(`离沙滩不远的小镇上\n`);
    await era.printAndWait(`因为靠近沙滩而利用地势举行着一年一度的夏日庆典。`);
    await era.printAndWait(
      `而作为最近冉冉升起的沙地之星而受到邀请的醒目飞鹰正站在舞台的中央。`,
    );
    await falcon.say_and_wait(`~~~♪呼——谢谢大家⭐`);
    await era.printAndWait(
      `舞台之下的观众们向舞台之上的偶像献上了掌声与喝彩。`,
    );
    await me.say_and_wait(`果然还是在观众席上才是最棒的选择。`, true);
    await era.printAndWait(
      `听到了你想要在观众席上观看醒目飞鹰表演的意愿时，醒目飞鹰似乎有什么想说的话，但当你想要询问时却被敷衍过去了。`,
    );
    await era.printAndWait(
      `尽管如此，每当歌曲结束后，在与粉丝互动的视线交互中，一股若有若无的视线一直紧紧看着你。`,
    );
    await me.say_and_wait(`……`, true);
    await era.printAndWait(`总觉得有些寂寞。`);
    await era.printAndWait(
      `倒不是说醒目飞鹰的表演一般，青涩的原石在经历的雕琢下已经露出了璀璨的钻石。`,
    );
    await era.printAndWait(
      `仅仅只是有些，有一点怀念遇到醒目飞鹰时纯粹的模样。`,
    );
    await era.printAndWait(`现在的她已经出色的成为了一名偶像。`);
    await era.printAndWait(`已经足够了。`);
    await me.say_and_wait(`……`, true);
    await era.printAndWait(`心中的不安却并没有因此消散。`);
    await era.printAndWait(`就像是忽略了什么。`);
    await era.printAndWait(`那双悲伤的眼睛。`);
    await say_by_passer_by(`游客A`, `呜啊！`);
    await era.printAndWait(`随着一声惨叫，暗红色的液体泼溅到了你的身上。`);
    await me.say_and_wait(`唔啊啊啊啊`);
    await era.printAndWait(
      `不幸之中的万幸，暗红色的液体经过时间的流逝热度已经消退大半，体感只是微热。`,
    );
    await era.printAndWait(`剩下的烦恼沾染了大半汤汁的衬衫如何清洗,以及`);
    await me.say_and_wait(`唔啊啊啊！`, true);
    await era.printAndWait(`就像是无数蚂蚁沿着眼睑在角膜周围四处乱爬。`);
    await me.say_and_wait(`餐巾纸，水，或者什么能够帮到我的——`);
    await era.printAndWait(`向着四周胡乱挣扎的双手总算握住了湿润的毛巾。`);
    await me.say_and_wait(`非常抱歉，接下来我会补偿你的！`);
    await era.printAndWait(
      `说着连自己都觉得过分的话语，不管三七二十一就往脸上招呼。`,
    );
    await era.printAndWait(`周围似乎起了很大的骚动。`);
    await me.say_and_wait(
      `……不会是把那位女士的衣服作为毛巾撕扯下来了吧？`,
      true,
    );
    await era.printAndWait(`刺痛的触觉结束之后，猛地睁开眼。`);
    await me.say_and_wait(`抱歉，我会设法补偿你的……醒目飞鹰。`);
    await era.printAndWait(`映入眼帘的是缺失了右腕布料的偶像服。`);
    await era.printAndWait(`于是舞台之上的少女来到了舞台之下。`);
    era.drawLine();
    await era.printAndWait(
      `想办法安抚好了骚动的人群后，你与醒目飞鹰走在了回宿舍的道路上。`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(`不知该如何开口。`);
    await era.printAndWait(
      `第一次见到这么慌张的醒目飞鹰，就像是得知自己要与醒目飞鹰永远分别一样。`,
    );
    await falcon.say_and_wait(`……`);
    await falcon.say_and_wait(`飞鹰子是不是搞砸了……`);
    await falcon.say_and_wait(
      `明明大家都是千里迢迢从很远的地方专门支持飞鹰子的。`,
    );
    await era.printAndWait(`在冲动过后，开始懊悔的醒目飞鹰。`);
    await me.say_and_wait(
      `并不会，粉丝们的大家看到这么焦急的飞鹰子，心里也一定跟着焦急起来。`,
    );
    await me.say_and_wait(
      `当他们看到飞鹰子安心的表情之后，一定也会安心下来的。`,
    );
    await era.printAndWait(
      `醒目飞鹰似乎有什么话想说出口，但最终还是保持沉默。`,
    );
    await era.printAndWait(
      `你们与沉浸在欢乐氛围之中的人群背道而行，直到走到一个人烟稀少的地段，醒目飞鹰终于开口了。`,
    );
    await falcon.say_and_wait(`训练员先生，飞鹰子是不是很自私呢？`);
    await falcon.say_and_wait(
      `明明说着要平等的爱着每一个粉丝，不过天平却总会向一方倾倒。`,
    );
    await falcon.say_and_wait(
      `飞鹰子最终还是违约了呢……即使是对自己应负责之事(偶像之责)还是继续违约了。`,
    );
    await era.printAndWait(`思索再三后，醒目飞鹰还是将心中的话语说出了口。`);
    await era.printAndWait(`你心中明白，这是她为之痛苦的迷茫。`);
    await me.say_and_wait(`飞鹰子，你知道训练员这个职业吗？`);
    await era.printAndWait(`片刻的思考过后，你努力保持着平静开口。`);
    await falcon.say_and_wait(
      `——训练员需要充分发掘负责马娘的潜力，对赛马娘的身体以及心理健康进行看护。最重要的是，尽可能的帮助马娘们在赛马娘的道路上走得更远。`,
    );
    await me.say_and_wait(
      `是的，能做到飞鹰子说的这些，已经算是合格的训练员了。`,
    );
    await me.say_and_wait(`……不过，距离更闪耀的训练员还有一段距离。`);
    await falcon.say_and_wait(`……就像飞鹰子追求的偶像一样吧。`);
    await me.say_and_wait(`除了意识到上述所说的职责，我们更关心失败了怎么办。`);
    await me.say_and_wait(
      `除了水平与天赋同样高到让人仰望的传奇训练员，或者运气好到能让其他人嫉妒的天选之子，剩余的凡人都会面对这个严肃的课题。`,
    );
    await me.say_and_wait(
      `成功的时候或许因为胜利的事实而不违背自己的承诺，而失败的时候，我们又该如何面对向她们夸下海口的自己呢？`,
    );
    await me.say_and_wait(`尽管我们已经尽了最大的努力，仅仅只是运气不好罢了。`);
    await falcon.say_and_wait(`这样吗……`);
    await me.say_and_wait(`虽然很遗憾，不过我们必须承担失败带来的后果。`);
    await me.say_and_wait(
      `最轻的可能只是预期收益降低，自身受到外界质疑，更严重的可能会被迫辞职，甚至有生命风险。`,
    );
    await me.say_and_wait(
      `面对这一课题，优秀的训练员会给出不同的答案。在我这里，我的答案是`,
    );
    await me.say_and_wait(
      `任何不容我自身选择的意外，背后最终包含的是对我的好意。出了意外，哪怕直接的当下我失败了，这份失败会在最后好过成功。`,
    );
    await me.say_and_wait(`所以我才甘愿承受这份责任。`);
    await me.say_and_wait(
      `我们都要为自己的选择负责，偶像其实与训练员殊途同归。`,
    );
    await me.say_and_wait(`所以，在明白你的责任后，按照你的想法去实现吧。`);
    await era.printAndWait(`接下来的这段道路之中，醒目飞鹰的步伐轻快了许多。`);
    wait_flag =
      get_attr_and_print_in_event(46, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
    era.set('cflag:46:节日事件标记', 0);
  } else if (edu_weeks === 95 + 48) {
    await print_event_name(`圣诞节♪`, falcon);
    await era.printAndWait(
      `${me.actual_name}与${falcon.name}度过的第三个圣诞。`,
    );
    await falcon.say_and_wait(`谢谢大家！`);
    await era.printAndWait(`在圣诞当天依然举办着演唱会感谢着作为粉丝的大家。`);
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
    await falcon.say_and_wait(
      `为了感谢大家一直以来支持着飞鹰子，飞鹰子将自己的心意装在里面了哦！`,
    );
    await era.printAndWait(`粉丝A「非常感谢！」`);
    await era.printAndWait(`粉丝B「今后也会一直支持着你的！」`);
    await era.printAndWait(`粉丝C「每场比赛我都会去看的！」`);
    await era.printAndWait(
      `等到礼物分光之后，还有一些粉丝们因为拿不到礼物而灰心丧气。`,
    );
    await falcon.say_and_wait(
      `参加飞鹰子感谢祭的粉丝们，接下来就用飞鹰子的笑容来温暖大家吧！`,
    );
    await era.printAndWait(`剩余的粉丝们收到了握手与一份笑容的礼物。`);
    await era.printAndWait(
      `粉丝D「虽然来晚了，没得到礼物，不过之后我也会一直支持飞鹰子的！」`,
    );
    await era.printAndWait(
      `等到粉丝们纷纷散去之后，现场只剩下了${me.actual_name}和飞鹰子两人。`,
    );
    await falcon.say_and_wait(`终于结束了！`);
    era.printButton(`收到礼物的粉丝们一定会很开心的`, 1);
    await era.input();
    await falcon.say_and_wait(`嗯！`);
    await falcon.say_and_wait(
      `从一开始一个粉丝也没有一直到成为闪耀的偶像，没有训练员${me.get_adult_sex_title()}的帮助，飞鹰子是不可能做到这一步的！`,
    );
    await era.printAndWait(`低头向你鞠躬的飞鹰子让你有点意外。`);
    era.printButton(
      `不，再怎么说也是飞鹰子的功劳，我只是做了分内的事情罢了`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(
      `怎么会！如果没有训练员${me.get_adult_sex_title()}的话，飞鹰子连出场的机会都不存在！`,
    );
    await falcon.say_and_wait(
      `而且，我对训练员${me.get_adult_sex_title()}......啊，抱歉。`,
    );
    await falcon.say_and_wait(`接下来一起去哪里逛逛吧？`);
    await falcon.say_and_wait(`外宿许可也已经申请了哦！`);
    await era.printAndWait(`轻轻牵起你的手的${falcon.name}拉着你前进。`);
    await me.say_and_wait(`这边的摆放的道具呢？`);
    await falcon.say_and_wait(`没关系的！`);
    await era.printAndWait(
      `从充满暖气的房间里走出来后，立刻感受到了寒冷的气息。`,
    );
    await falcon.say_and_wait(`外面比想象中还要冷呢。`);
    await era.printAndWait(
      `尽管戴上了保暖的手套，还是有冷气从摩擦的细缝之中溜了进来。`,
    );
    await me.say_and_wait(`一起去萨莉亚吃一顿大餐吧？`);
    await era.printAndWait(
      `经济实惠的萨莉亚对饥肠辘辘的两人来说具有非常大的吸引力。`,
    );
    await falcon.say_and_wait(
      `${
        falcon.name
      }也这么想的呢，而且和训练员${me.get_adult_sex_title()}一起吃饭的话，兴致突然就高涨起来了⭐`,
    );
    await me.say_and_wait(`那么我们加快脚步吧！`);
    era.drawLine();
    await era.printAndWait([
      falcon.get_colored_name(),
      '/',
      me.get_colored_name(),
      '「',
      { content: '干', color: falcon.color },
      '杯！」',
    ]);
    await era.printAndWait(
      `在暖色调的灯光下，餐厅嘈杂的人声伴随着叮叮铛铛的道具碰撞声形成了独特的声音。`,
    );
    await falcon.say_and_wait(`萨莉亚的食物比想象中还要美味呢`);
    await me.say_and_wait(`是因为节日的缘故吧？这里的人都洋溢着快乐的气息。`);
    await falcon.say_and_wait(
      `也有这一部分的缘故，不过更多的还是像普通${falcon.get_uma_sex_title()}一样享受着节日的气息。`,
    );
    await me.say_and_wait(`飞鹰子对偶像感到疲惫了吗？`);
    await falcon.say_and_wait(`不会哦？不如说飞鹰子很享受呢！`);
    await era.printAndWait(`睁大了眼睛的飞鹰子露出了疑惑的神情。`);
    await me.say_and_wait(`接下来的路飞鹰子也要努力才行。`);
    await falcon.say_and_wait(`梦之杯吗？`);
    await me.say_and_wait(
      `除了比赛之外，还要注意自己的日程表不要过度劳累才行！`,
    );
    await era.printAndWait(`不知不觉恢复了平时说教的状态。`);
    await falcon.say_and_wait(
      `咕~这种气氛下训练员${me.get_adult_sex_title()}真是木头呢。`,
    );
    await era.printAndWait(
      `咕噜咕噜搅拌着还剩下一半果汁发出了不满声音的飞鹰子看着你。`,
    );
    await falcon.say_and_wait(
      `不过，也许就是这样的训练员${me.get_adult_sex_title()}，${
        falcon.name
      }才最喜欢了呢！`,
    );
    await era.printAndWait(`突然之间笑出来的飞鹰子看起来额外可爱。`);
    await falcon.say_and_wait(`嗯——可以靠过来一点吗？`);
    await era.printAndWait(
      `说着将自己的身体靠近了${me.actual_name}坐着的位子。`,
    );
    await me.say_and_wait(`......`);
    await falcon.say_and_wait(`那么！一、二、三！`);
    await era.printAndWait(`在手机上拍下了接吻瞬间的${falcon.name}。`);
    await era.printAndWait(`作为偶像来说绝对NG的吧？`);
    await falcon.say_and_wait(
      `作为偶像的飞鹰子必须把平等的爱给每一位粉丝，不过现在的我是${
        falcon.name
      }！是随处可见的普通${falcon.get_uma_sex_title()}哦！`,
    );
  } else if (edu_weeks === 143 + 1 && new FalconEduMarks().sweet_dream === 1) {
    event_marks.sweet_dream++;
    await print_event_name(`飞鹰子大冒险`, falcon);
    await falcon.say_and_wait(`唔，这里是哪里？`);
    await era.printAndWait(
      `粉色的世界，童话风格的城堡，脚下的土地竟然是用饼干做成的？！`,
    );
    await falcon.say_and_wait(`为，为什么还穿着决胜服啊？`);
    await era.printAndWait(
      `可爱风格的决胜服，以及挂在腰间的麦克风......似乎准备齐全的样子？！`,
    );
    await falcon.say_and_wait(`说起来的话之前也遇到过这种情况。`);
    await falcon.say_and_wait(`这样的话想办法让自己醒来就可以了！`);
    await falcon.say_and_wait(`飞鹰子头槌！`);
    await era.printAndWait(`bang！！！`);
    await falcon.say_and_wait(`呜——头好痛啊！`);
    await era.printAndWait(`抱着头一屁股坐在了地上，努力克制着眩晕感。`);
    await falcon.say_and_wait(`这个梦也太真实了吧？`);
    await era.printAndWait(
      `收拾好情绪之后，${falcon.name}将目光看向了远处高耸的城堡。`,
    );
    await falcon.say_and_wait(`接下来的话，朝着这个方向努力就可以了吧？`);
    await falcon.say_and_wait(`那么，飞鹰子全速前进！！`);
    await era.printAndWait(
      `朝着目标的方向全速前进的${falcon.name}圈起了一大片的饼干碎屑。`,
    );
    era.drawLine();
    era.printButton(`这是哪里？`, 1);
    await era.input();
    await era.printAndWait(
      `${me.actual_name}醒来的时候发现自己处在一处城堡之中。`,
    );
    await me.say_and_wait(`卧槽这是哪里？`);
    await era.printAndWait(`看向了周围，似乎倒在一条走廊之中。`);
    await me.say_and_wait(`......我一定在做梦。`);
    await era.printAndWait(`轻轻拍了自己一下，似乎没有醒过来的迹象。`);
    await me.say_and_wait(`......总之先找个窗户看一下吧。`);
    await era.printAndWait(
      `一边欣赏着由糖果和亮闪闪的宝石组成的走廊一边打开了走廊尽头的大门。`,
    );
    await era.printAndWait(`拧开门把手之后，来到了一间巧克力组成的房间。`);
    await era.printAndWait(
      `将巧克力棒制成的窗户打开之后，窗外的景色是你从未见过的童话风格。`,
    );
    await era.printAndWait(`由糖果与饼干组成的房子、街道以及脚下所处的城堡。`);
    await era.printAndWait(`更远处似乎有什么骚动的样子。`);
    await me.say_and_wait(`啊，我知道了，只要从楼上跳下去梦就醒了。`);
    await era.printAndWait(
      `半只脚踩在了虚空之中的${me.actual_name}，感受到了狂风的吹拂。`,
    );
    await me.say_and_wait(`......真的不会死吗？`);
    await era.printAndWait(`心虚的收回了脚。`);
    await me.say_and_wait(`还是找找其他办法吧？`);
    await era.printAndWait(`暂且从房间退出，回到了走廊之中。`);
    era.printButton(`找找其他的出路会比较好吧？`, 1);
    await era.input();
    era.printButton(`也许飞鹰子会很喜欢这里的样子？`, 1);
    await era.input();
    await era.printAndWait(`不知为何的确信这一点？`);
    await me.say_and_wait(`不过为什么是我做了这个梦呢。`);
    await me.say_and_wait(`如果是飞鹰子的话，应该......好痛！`);
    await era.printAndWait(
      `一边思考着离开的方法没有注意前方的${me.actual_name}狠狠撞到了什么东西上面。`,
    );
    await era.printAndWait(`巧克力士兵「什么人！」`);
    await era.printAndWait(
      `穿着亮闪闪宝石盔甲的巧克力士兵将手中的长矛对准了你。`,
    );
    await me.say_and_wait(`抱歉，我也不知道。`);
    await era.printAndWait(
      `巧克力士兵「既然说不出自己的身份，那就是敌人！敌袭！」`,
    );
    await era.printAndWait(
      `只有${me.actual_name}一半大小的巧克力一边说着一边将手中的巧克力长矛对准了${me.actual_name}。`,
    );
    era.printButton(`区区一个巧克力能干什么，看我把你给吃了！`, 1);
    await era.input();
    await era.printAndWait(
      `怀着轻敌想法的${me.actual_name}傲慢的做好了战斗准备（？），然后被摔了一个四脚朝天。`,
    );
    await me.say_and_wait(`区区巧克力还敢嚣张！`);
    await era.printAndWait(
      `收起轻敌想法的${me.actual_name}认真对待着比自己小了一半的巧克力士兵。`,
    );
    await me.say_and_wait(`看招！`);
    await era.printAndWait(`趁其不备一把抓住了巧克力士兵的长矛。`);
    await me.say_and_wait(`怎么样，你还有什么办法！`);
    await era.printAndWait(`用力将长矛掰做两半然后从开着的窗户扔了出去。`);
    await era.printAndWait(`巧克力士兵「敌袭！敌袭！」`);
    await era.printAndWait(`远处似乎有更多巧克力士兵组成的小队正在赶来。`);
    await me.say_and_wait(`趁它们还没发现我的位置还是赶快逃跑吧！`);
    await era.printAndWait(
      `发现危机迫近的${me.actual_name}用蛮力撞飞了眼前的巧克力士兵。`,
    );
    await era.printAndWait(`巧克力士兵们「敌人就在那里！！！」`);
    await era.printAndWait(`然后开始了漫无目的的逃亡。`);
    era.drawLine();
    await falcon.say_and_wait(`终于到了。`);
    await era.printAndWait(
      `望着高耸的内墙以及由巧克力士兵把守的城门，${falcon.name}的决定是`,
    );
    await falcon.say_and_wait(
      `不管是什么阻拦在飞鹰子前方，飞鹰子都会就这样一口气冲过去⭐`,
    );
    await era.printAndWait(
      `巧克力士兵「没有女王的许可，谁也不可以，呜啊啊啊啊啊。」`,
    );
    await era.printAndWait(
      `轻松冲烂巧克力组成的防线，向着城堡一路前进的${falcon.name}的兴致更加高涨。`,
    );
    await falcon.say_and_wait(`城堡里会有什么在等着我呢？`, true);
    era.drawLine();
    await me.say_and_wait(`城堡里还会有什么在等着我呢？`, true);
    await era.printAndWait(
      `光是听着后面越来越嘈杂的声音，${me.actual_name}就失去了回头看的勇气。`,
    );
    await era.printAndWait(`直到来到了一间装饰得十分华丽的大门之前。`);
    await era.printAndWait(`巧克力士兵「有刺客！有刺客！」`);
    await era.printAndWait(`巧克力士兵「保护女王殿下！」`);
    await me.say_and_wait(`没办法了。`, true);
    await era.printAndWait(`用力推开沉重的大门，映在眼前的是。`);
    era.printButton(`${falcon.name}？`, 1);
    await era.input();
    await era.printAndWait(`穿着复杂考究的礼服，少女的眼睛看向了你。`);
    await falcon.print_and_wait([
      falcon.get_colored_name(),
      '（？）「你是谁？」',
    ]);
    await me.say_and_wait(
      `不，${falcon.sex}绝不可能是我认识的${falcon.name}。`,
      true,
    );
    await era.printAndWait(
      `那双飘忽不定的眼睛好奇的打量者${me.actual_name}，之后便收回了目光。`,
    );
    era.printButton(`尊敬的女王殿下，我是作为训练员的${me.actual_name}。`, 1);
    await era.input();
    await era.printAndWait(
      `索性破罐子破摔，就这样低下头向着熟悉的陌生人鞠躬。`,
    );
    await era.printAndWait(`巧克力士兵「女王大人没事吧！」`);
    await era.printAndWait(`后面追来的士兵将你团团包围。`);
    await falcon.print_and_wait([
      falcon.get_colored_name(),
      `（？）「不，放开${me.sex}。」`,
    ]);
    await era.printAndWait(`巧克力士兵「可是......」`);
    await falcon.print_and_wait([
      falcon.get_colored_name(),
      '（？）「你想反抗我的命令吗！退下！」',
    ]);
    await era.printAndWait(`士兵们不情愿的将${me.actual_name}的包围圈撤开了。`);
    await falcon.print_and_wait([
      falcon.get_colored_name(),
      `（？）「那么，这位训练员${me.get_adult_sex_title()}，请抬起你的头，我赋予你与我对话的权力。」`,
    ]);
    await me.say_and_wait(`至少没有一见面就打起来。`, true);
    await era.printAndWait(`得到女王许可的${me.actual_name}总算抬起了头。`);
    await era.printAndWait(
      `看着与${falcon.name}几乎相同的容貌，不禁有点错愕。`,
    );
    await me.say_and_wait(`与飞鹰子看起来真的很像`, true);
    await era.printAndWait(
      `${falcon.name}（?）「我的名字是黑之女王。是这片黑巧克力王国的主人。」`,
      {
        color: falcon.color,
      },
    );
    await falcon.print_and_wait([
      falcon.get_colored_name(),
      '（？）「我的名字是黑之女王。是这片黑巧克力王国的主人。」',
    ]);
    await era.printAndWait(`拿着黑之锡杖的女王向误入王国的访客点了点头。`);
    await era.printAndWait(`黑女王「请问您为什么侵入我的宫殿？」`, {
      color: falcon.color,
    });
    await me.say_and_wait(`不，没有这个意思`);
    await me.say_and_wait(`我只是`);
    await falcon.say_and_wait(`飞鹰子冲撞！`);
    await era.printAndWait(`破墙而入的${falcon.name}打断了你们之间的对话。`);
    await falcon.say_and_wait(`${me.actual_name}没事吧！`);
    await era.printAndWait(`紧紧抱着你的${falcon.name}一脸担心的样子。`);
    await era.printAndWait(`巧克力士兵「两个女王？怎么办？」`);
    await era.printAndWait(`骚动起来的士兵们开始窃窃私语。`);
    await falcon.print_and_wait([
      { content: '黑女王', fontWeight: 'bold' },
      '「肃静！」',
    ]);
    await era.printAndWait(
      `在女王威严的喝止声中，巧克力们窃窃私语的声音慢慢停下来了。`,
    );
    await falcon.print_and_wait([
      { content: '黑女王', fontWeight: 'bold' },
      '「与妾身长相相似的少女啊，该如何称呼是好？」',
    ]);
    await falcon.say_and_wait(`${falcon.name}！请叫我飞鹰子⭐`);
    await era.printAndWait(`露出了幸福笑容的${falcon.name}回复着女王。`);
    await falcon.print_and_wait([
      { content: '黑女王', fontWeight: 'bold' },
      '「……原来是这样吗。」',
    ]);
    await falcon.print_and_wait([
      { content: '黑女王', fontWeight: 'bold' },
      '「那么，就让我来送你们回去吧。可爱的孩子们。」',
    ]);
    await era.printAndWait(
      `随着锡杖顶端发出光芒，两位游客的身影慢慢开始消散。`,
    );
    await falcon.print_and_wait([
      { content: '黑女王', fontWeight: 'bold' },
      `「如果我也能遇到${me.actual_name}的话，说不定也会很幸福。」`,
    ]);
    await falcon.print_and_wait([
      { content: '黑女王', fontWeight: 'bold' },
      '「……失礼了，那么再见。」',
    ]);
    era.drawLine();
    await falcon.say_and_wait(`唔，这里是哪？`);
    await era.printAndWait(`${falcon.name}在熟悉的大床上醒了过来。`);
    await era.printAndWait(
      `面对着同样苏醒过来的${me.actual_name}，${falcon.name}露出了幸福的笑容。`,
    );
    await falcon.say_and_wait(
      `飞鹰子，现在也是训练员${me.get_adult_sex_title()}的女王殿下哦♪`,
    );
    await era.printAndWait(
      `趁着${me.actual_name}意识尚未清醒之前，紧紧抱着${me.actual_name}的${falcon.name}露出了安心的笑容。`,
    );
    await falcon.say_and_wait(`……太好了，再也不会孤独了。`);
    await era.printAndWait(`紧紧拥抱的肩膀传来湿润的触感。`);
    await era.printAndWait(`与醒目飞鹰的一同前进的道路还很漫长，但很幸福。`);
    await me.say_and_wait(`这样就可以了。`);
    await era.printAndWait(`good end·kiss on my deity`);
    era.drawLine({ content: 'THE END' });
  }
  //TODO TE与GE结局事件处理
  else if (edu_weeks === 143 + 1 && new FalconEduMarks().top_idol === 1) {
    event_marks.top_idol++;
    await print_event_name(`顶级马娘偶像`, falcon);
    await era.printAndWait(`某人犯下了无法原谅的过错。`);
    await era.printAndWait(`应当完成的约定最后超时。`);
    await era.printAndWait(
      `在撕毁约定前，它尽力挣扎过，悲叹，痛苦，想要就此了断，却因为还有未尽之事而停止。`,
    );
    await era.printAndWait(
      `于是心中的怨恨无处发泄，来自良心的诘问仿佛随时在耳旁低语的炸弹发出的滴答声。`,
    );
    await era.printAndWait(`于是选择了逃避。`);
    await era.printAndWait(`为了逃避痛苦，将自己沉溺于酒精之中。`);
    await era.printAndWait(`渴望酒精能浸润这份从内心发出的谴责。`);
    await era.printAndWait(`然而，内心的另一个声音告诉它，已经结束了。`);
    await era.printAndWait(
      `只购买了单程票的乘客无法回到上一站，无论如何都无法实现这份约定。`,
    );
    await era.printAndWait(
      `因为自己的傲慢，对自己预估的过于乐观，它陷入了惨痛的代价。`,
    );
    await era.printAndWait(`连自己都有些好奇，为什么最后还要完成这份约定。`);
    await era.printAndWait(`比起空虚，拥有一份痛苦反而是一件奢侈的享受了。`);
    await era.printAndWait(`所以`);
    era.drawLine();
    await era.printAndWait(
      `与醒目飞鹰在文件上的契约就此结束，而你与醒目飞鹰三年来同甘共苦留下的羁绊却仿佛触手可及的水中之月。`,
    );
    await era.printAndWait(`如今的醒目飞鹰已经是货真价实的顶级偶像。`);
    await era.printAndWait(
      `暂且不论关注沙地的观众，即使是在那些只关注草地的观众之中，醒目飞鹰已经与飞驰于草地的传奇们共同在这个时代留下了深刻的一笔。`,
    );
    await era.printAndWait(`然而，仅仅是全国的顶级偶像，醒目飞鹰依然不满足。`);
    await era.printAndWait(
      `渴望成为全世界，甚至是全宇宙的马娘偶像，醒目飞鹰如今依然还在奔跑着。`,
    );
    await era.printAndWait(`候机厅\n`);
    await falcon.say_and_wait(`接下来的海外远征也请多多支持飞鹰子！`);
    await say_by_passer_by(`粉丝们`, `噢噢噢噢！飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `为了在世界范围内打响作为顶级马娘偶像的醒目飞鹰，向着迪拜世界杯笔直的前进。`,
    );
    await falcon.say_and_wait(`训练员先生比想象中还要慢呢。`);
    await era.printAndWait(`醒目飞鹰带着一丝撒娇的语气向你轻声抱怨着。`);
    await era.printAndWait(
      `在醒目飞鹰的强烈推荐下，作为原醒目飞鹰训练员的你依然将作为醒目飞鹰的专属训练员而行动。`,
    );
    era.printButton(`因为一些事情耽搁了，抱歉。`, 1);
    await era.input();
    await era.printAndWait(
      `很多人好奇作为教导了开创泥地新时代马娘的你究竟做了什么。`,
    );
    await era.printAndWait(`自己的意愿？马娘的要求？还是高超的能力？`);
    await era.printAndWait(
      `作为上述问题的回复，你将这三年教导醒目飞鹰的训练笔记复印后交到了理事长办公室,这份经由你整理的心血将在重新排版后将作为目光转向沙地的马娘们的发行。`,
    );
    await era.printAndWait(
      `你从口袋中掏出手机扫了一眼，距离起飞时间还有30分钟。`,
    );
    await falcon.say_and_wait(
      `不知道国外的赛马场是什么样的呢？飞鹰子的心跳的一直平静不下来！`,
    );
    era.printButton(`是比国内更加闪耀的大舞台。`, 1);
    await era.input();
    await era.printAndWait(`与国内相反，海外在沙地赛事上的关注度更高。`);
    await era.printAndWait(
      `这也就意味着醒目飞鹰将要作为挑战者与那些更有潜力，更加年轻，更加专注于沙地赛事的马娘们竞争。`,
    );
    await falcon.say_and_wait(`飞鹰子要用自己的双脚亲身体会胜者舞台的重量！`);
    await era.printAndWait(
      `——就像是第一次报名参加G1赛事后，与醒目飞鹰兴奋的讨论着胜者舞台时。`,
    );
    era.printButton(
      `迪拜世界杯的胜者舞台一定会是迄今为止最庞大、最闪耀的地方！`,
      1,
    );
    await era.input();
    await era.printAndWait(`这一切才刚刚开始。`);
    await era.printAndWait(
      `仅仅因为对受欢迎的偶像这一憧憬踏入偶像之路，自己所选的道路反过来塑造了自己。`,
    );
    await era.printAndWait(
      `被重塑过的自己，回顾自己最初的理想，会发现虽然自己看上去是在实践这条道路，但实际上重塑过的理想却与最初的理想并不一样。`,
    );
    await era.printAndWait(`——尽管写下来是同样的字，但那不是一回事。`);
    await era.printAndWait(
      `人因为个人私欲而选择道路，而道路反过来最后塑造了自己。`,
    );
    await era.printAndWait(
      `衷心希望各位玩家能在这个世界以自己的决定选择道路，然后幸福的活下去。`,
    );
    era.println();
    await era.printAndWait(`TRUE END  Top Uma idol 。`);
    era.println();
    await era.printAndWait(`THANK FOR YOUR WATCHING!`);
  } else if (edu_weeks === 143 + 1 && new FalconEduMarks().encore === 1) {
    event_marks.encore++;
    await print_event_name(`压抑不住的恋心`, falcon);

    await era.printAndWait(`天空，大地，晴朗的天空。`);
    await era.printAndWait(
      `与训练员先生一起观看的沙地比赛,为了答谢提供场地的恩惠打扫的草地。`,
    );
    await era.printAndWait(
      `因为心中不安的情感而在深夜所播出的电话,也就是那时候才意识到的自己的恋心。`,
    );
    await era.printAndWait(`乌云，小雨，逐渐昏暗的天空。`);
    await era.printAndWait(
      `对职责的不安，与训练员先生一起观看的烟火大会，为了偶像事业而奋斗的疲惫日子。`,
    );
    await era.printAndWait(`大雨，狂风，迷乱的内心。`);
    await era.printAndWait(
      `与训练员先生之间的争吵，沉默逐渐增多的时刻，向着粉丝诉说爱意的偶像无法面对所爱之人。`,
    );
    await era.printAndWait(
      `粉丝袭击，倒在血泊之中的训练员先生，充满遗憾的东京大赏。`,
    );
    await era.printAndWait(`分开的岔道，落下的沙漏，抉择之时。`);
    await era.printAndWait(
      `再一次的烟火大会，向着顶级偶像道路前进的日夜，被后辈憧憬时卡顿的自己。`,
    );
    await era.printAndWait(
      `与训练员先生的公园野餐，热情逐渐消减，超越的马娘。`,
    );
    await era.printAndWait(
      `就算回到过去，告诉那个尚未遇到训练员先生的自己，恐怕也不会相信吧。`,
    );
    await era.printAndWait(
      `渐离渐远的岔道，如果当时的自己选择了那条道路又会怎么样呢？`,
    );
    await era.printAndWait(`真在意真在意。`);
    await era.printAndWait(`心情也忽上忽下左转右转头晕目眩。`);
    await era.printAndWait(`心跳也突然加速。`);
    await era.printAndWait(`不可以不可以，飞鹰子可是完美偶像。`);
    await era.printAndWait(`像这样拐弯抹角不是飞鹰子的风格。`);
    await era.printAndWait(`令人无法忘怀的，在黄昏时举行的沙地大赛。`);
    await era.printAndWait(`无法形容的，那甜到拉丝的美好回忆。`);
    await era.printAndWait(`露出的笑容，肯定的申请，没有错，。`);
    era.println();
    // 在特雷森学院的最后一个夜晚
    await falcon.say_and_wait(`感谢大家一直支持着飞鹰子！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `与昨天近乎相同的场景，要说实在不同的地方，就只剩下了似乎要将全身解数绽放的少女。`,
    );
    await era.printAndWait(
      `这次的演出比之前要长的很多。从傍晚开始的演出一直跳到了第二天5点。`,
    );
    await falcon.say_and_wait(`接下来也请多多支持飞鹰子！`);
    await era.printAndWait(
      `送别最后一位还在场地坚持的粉丝后，现场只剩下了你和醒目飞鹰两人。`,
    );
    await falcon.say_and_wait(`这样就没有遗憾了。`);
    await era.printAndWait(
      `目送着最后一名粉丝的背景渐渐消失在地平线之后，醒目飞鹰吐出了满足的叹息。`,
    );
    await era.printAndWait(
      `在泥地取得极其优秀成果的醒目飞鹰，将目标放在了海外远征上。`,
    );
    await era.printAndWait(`——准备冲击迪拜世界杯。`);
    await era.printAndWait(
      `行李已经先一步寄到了接下来所居住的地方，如果不是醒目飞鹰坚持的话，不——如果是醒目飞鹰的话确实会这么做。`,
    );
    await era.printAndWait(`现在距离登机只有不到3小时。`);
    era.printButton(`飞鹰子——`, 1);
    await era.input();
    await era.printAndWait(`少女带着满足的表情睡着了。`);
    await era.printAndWait(
      `能够坚持下来，恐怕是为了与过去做出诀别而拼命做出的举动。`,
    );
    await era.printAndWait(
      `对于神经紧绷的她来说，就这样陷入梦境之海，也是幸福的事情吧。`,
    );
    await era.printAndWait(
      `将她调整到更加舒适的姿势后，你向着机场的方向出发。`,
    );
    await era.printAndWait(`东边的天空渐渐泛起了淡淡的橙色。`);
    await era.printAndWait(`这片草地在不久之后的未来，又会有新的马娘出没吧。`);
    await falcon.say_and_wait(`这样就好了。`);
    await era.printAndWait(`醒目飞鹰半梦半醒的咕噜噜附和着。`);
    await era.printAndWait(
      `天空渐渐泛白，与醒目飞鹰初次相遇时的天空一摸一样。`,
    );
    await era.printAndWait(
      `或许是因为过于困倦的原因，眼前平坦的道路却像是训练场中的沙地一样。`,
    );
    await era.printAndWait(
      `既然是沙子，就应该睁大眼睛仔细看清前方的道路才对。`,
    );
    await era.printAndWait(`冲线，然后面对着观众席挥手。`);
    await era.printAndWait(`——然后两人的视线碰撞。`);
    await falcon.say_and_wait(`训练员先生，我喜欢你。`);
    await era.printAndWait(`在湛蓝的天空之下，两人的道路才刚刚开始。`);
    era.println();
    await era.printAndWait(`GOOD END 安可曲。`);
    era.println();
    await era.printAndWait(`THANK FOR YOUR WATCHING!`);
  } else if (edu_weeks === 143 + 1 && new FalconEduMarks().idol_road === 1) {
    event_marks.idol_road++;
    await print_event_name(`依然闪耀的偶像`, falcon);
    await era.printAndWait(
      `在结束了三年的比赛之后，${falcon.name}将目光瞄准了接下来的梦之杯。`,
    );
    await falcon.say_and_wait(`感谢大家一直支持着飞鹰子！`);
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
    await falcon.say_and_wait(`接下来的梦之杯也要多多支持飞鹰子哦！`);
    await era.printAndWait(
      `因为飞鹰子的活跃表现，泥地赛道也慢慢进入了普通观众的关注列表。`,
    );
    await era.printAndWait(
      `想必之后的话也会有更多的泥地${falcon.get_uma_sex_title()}活跃在泥地赛道之中吧。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}！`);
    await falcon.say_and_wait(`接下来的话也请多多支持飞鹰子哦！`);
    await era.printAndWait(`带着笑容的${falcon.name}看上去一如既往的闪耀。`);
    await era.printAndWait(
      `接下来的日子里，你们也会像这三年一样，经历许多的挫折与闪耀的时刻吧。`,
    );
    await me.say_and_wait(`不过......`);
    await era.printAndWait(
      `可能的话，如果是可能的话，如果最后的偶像之路全部胜利，如果能与飞鹰子的关系更加亲密一点的话。`,
    );
    await me.say_and_wait(`现在这样就好了。`);
    await me.say_and_wait(`我很幸福。`);
    await era.printAndWait(
      `看着在舞台之上闪耀着的飞鹰子，${me.actual_name}也开始挥舞起手中的应援棒了。`,
    );
    await era.printAndWait(`normal end·shine idol `);
    era.drawLine({ content: 'THE END' });
  }
  wait_flag && (await era.waitAnyKey());
};
