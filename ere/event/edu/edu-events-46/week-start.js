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
    falcon = get_chara_talk(46),
    event_marks = new FalconEduMarks(),
    edu_weeks = era.get('cflag:46:育成回合计时');
  let wait_flag = false;
  if (event_marks.start === 1) {
    event_marks.start++;
    // 颤抖的双手 意象 梦中的故事 人物 交涉 细微的动作 脸庞 天空的变化 色彩 草原
    await print_event_name(`First！偶像的第一步`, falcon);
    era.printButton(`最后一圈！`, 1);
    await era.input();
    await falcon.say_and_wait(`……哈啊啊啊！`);
    await era.printAndWait(
      `在经历一周的训练后，你与醒目飞鹰之间的磨合也踏上了正轨。`,
    );
    await me.say_and_wait(`辛苦了！`);
    await era.printAndWait(
      `将准备好的毛巾递给${falcon.name}，后者仔细将额头上的汗水擦去。`,
    );
    await era.printAndWait(`沙粒黏在了被汗水所浸透的体操服上。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}⭐，飞鹰子表现得怎么样？`,
    );
    await era.printAndWait(
      `在剧烈运动过后，为了避免突然坐下而对身体造成较大的危害，你与醒目飞鹰绕着训练场不紧不慢的散步。`,
    );
    await me.say_and_wait(`在奔跑时闪耀的姿态真是让人着迷。`);
    await me.say_and_wait(`我想，马娘偶像说不定就是这样。`);
    await era.printAndWait(
      `身体稍微冷却下来后，你将矿泉水递给了${falcon.sex}。`,
    );
    await me.say_and_wait(
      `而且，与草地赛道不同，泥地赛道中被前方${falcon.get_uma_sex_title()}扬起的尘土刺激道眼睛的话，身体也有可能受到影响。`,
      true,
    );
    await era.printAndWait(`相比之下，采取领放与先行会是最好的选择。`);
    await falcon.say_and_wait(`我想让观众席上的大家一直看到飞鹰子闪耀的样子！`);
    await era.printAndWait(`如果是飞鹰子的话，一定会这么说吧。`);
    await me.say_and_wait(`所有跑法之中，最适合的恐怕还是逃马。`, true);
    await me.say_and_wait(`不过这样确实有飞鹰子的风格呢。`);
    await era.printAndWait(`寄托着粉丝们希望的偶像，从开始一直闪耀到冲线。`);
    await falcon.say_and_wait(`毕竟飞鹰子是闪闪发光的偶像⭐`);
    await falcon.say_and_wait(
      `如果不能让粉丝们看到飞鹰子一直闪耀着的话，作为偶像也失格了呢。`,
    );
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
    await era.printAndWait(
      `随着发令枪的响起，充满尘土与沙砾的偶像之路开始了。`,
    );
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
      `为了这个月已经翻了几个跟头的电费账单，虽然是休息日，但你还是早早的来到了训练室。`,
    );
    await era.printAndWait(`心中确信透过云层的第一缕阳光将驱散眼前的黑暗。`);
    await era.printAndWait(`于是在黑暗之中的漫步显得无比轻松。`);
    await era.printAndWait(`正当空调数字指向30度时——`);
    await era.printAndWait(`咚咚咚咚咚。`);
    await era.printAndWait(`急促的敲门声传来了。`);
    await falcon.say_and_wait(`训练员先生我进来了⭐`);
    await era.printAndWait(
      `还没确认训练室内是否有人，醒目飞鹰的小脑袋便钻了进来。`,
    );
    era.printButton(`飞鹰子早上好！`, 1);
    await era.input();
    await era.printAndWait(`口中呼出的白雾很快消散在了冰冷的空气之中。`);
    await falcon.say_and_wait(`训练员先生早上好！`);
    await era.printAndWait(`随后便收到了醒目飞鹰元气满满的回应。`);
    await falcon.say_and_wait(`因为平时受到很多关照的缘故，`);
    await falcon.say_and_wait(`所以飞鹰子今天打算做义工！`);
    await me.say_and_wait(`具体来说是指？`);
    await falcon.say_and_wait(
      `趁着大家还没起来之前，将高架桥下飘到草地上的垃圾分类捡起来。`,
    );
    await era.printAndWait(`与传统的偶像相比更加亲近人的那一类偶像吗？`);
    await falcon.say_and_wait(`训练员先生打算一起来吗？`);
    era.printButton(`我也想出一份力`, 1);
    era.printButton(`虽然很想去，但是这边还有工作要做`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await falcon.say_and_wait(`那真是太好了！`);
      await falcon.say_and_wait(`——事不宜迟现在就出发。`);
      await me.say_and_wait(`等一下我还没——`);
      era.drawLine({ content: '飞鹰子努力中' });
      await falcon.say_and_wait(`——最后一处！`);
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
        `如果没有训练员先生的话，要在粉丝们到来之前处理完对飞鹰子还是有些困难呢……`,
      );
      await falcon.say_and_wait(`既然这样的话……`);
      era.printButton(`可以让我坐在最中间欣赏飞鹰子演出吗？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `诶？既然是粉丝提出的请求……作为马娘偶像的飞鹰子一定会回应粉丝的期待！`,
      );
      await falcon.say_and_wait(
        `接下来是飞鹰子刚刚想出来的歌曲♪粉丝一号先生可不要中途离场哦？`,
      );
      await era.printAndWait(
        `寒冷的空气，闪烁着光芒的星星，以及尚未熄灭的路灯所组成的舞台才刚刚开始。`,
      );
    } else {
      await falcon.say_and_wait(`训练员先生果然很辛苦呢。`);
      await era.printAndWait(
        `醒目飞鹰露出了略微遗憾的表情，但很快恢复了往日的神情。`,
      );
      await falcon.say_and_wait(`那么飞鹰子会连训练员先生的那一份一起努力的！`);
      await era.printAndWait(
        `在飞鹰子的努力之下，在河边漂浮的废弃物全部都消失了。`,
      );
    }
  } else if (edu_weeks === 18) {
    // 5月第2周
    await print_event_name(`飞鹰子大危机！？`, falcon);
    await era.printAndWait(`接近中旬的某一天。`);
    await falcon.say_and_wait(`训练员先生——飞鹰子遇到困难了！`);
    await era.printAndWait(
      `正坐在训练室的椅子上消磨时间的你，突然被闯入训练室的身影吓了一跳。`,
    );
    await me.say_and_wait(`又是考试不及格要留下来补习吗？`);
    await era.printAndWait(
      `在看清了来者是自己熟悉的少女后，你开始头疼接下来要面对的事情。`,
    );
    await falcon.say_and_wait(`虽然这件事也很重要，但是飞鹰子遇到的不是这个！`);
    await era.printAndWait(
      `少女呼出的气息变成白雾，额头之上似乎隐隐有汗珠闪烁。`,
    );
    await falcon.say_and_wait(
      `……嗯，飞鹰子为了向特雷森周围的大家推广马娘偶像的概念，除了派发自己精心准备的海报之外，还额外附赠了一些小礼品。`,
    );
    await falcon.say_and_wait(
      `但是一直以来以非常便宜的价格卖给飞鹰子的那家杂货店突然搬走了，而新找的其他店铺的价格却非常高昂。`,
    );
    await falcon.say_and_wait(
      `如果只是这样的话飞鹰子还能咬咬牙坚持下去。不过最近去的那家杂货店因为原材料价格上涨，所以价格也要抬高了。`,
    );
    await falcon.say_and_wait(`再这样下去，飞鹰子不知该怎么办了。`);
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
      await falcon.say_and_wait(`训练员先生，谢谢你！`);
      await era.printAndWait(
        `与往常如向日葵般的笑容不同，少女对你露出了略显害羞的笑容。\n`,
      );
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
      await falcon.say_and_wait(
        `诶？训练员的意思是飞鹰子太过使用宣传手段而忽视了作为马娘偶像的核心吗？`,
      );
      await me.say_and_wait(`没错！让大家看看作为马娘偶像而活跃的醒目飞鹰吧！`);
      await falcon.say_and_wait(`我知道了！飞鹰子会朝着马娘偶像的方向努力的！`);
      await era.printAndWait(
        `在习得了马娘偶像之心后的醒目飞鹰，凭借其特有的敏感且细腻，吸引了大量的粉丝。`,
      );
    }
    await era.printAndWait(`危机总算化解了。`);
  } else if (edu_weeks === 24) {
    await print_event_name(`薰衣草`, falcon);
    await era.printAndWait(`出道战前夕\n`);
    await era.printAndWait(
      `按照计划踏踏实实进行训练的${falcon.name}，在出道战上具有很大的优势。`,
    );
    await falcon.say_and_wait(`那个，训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(
      `正当你像往常一样陪伴着醒目飞鹰走在回到特雷森的道路时。`,
    );
    await era.printAndWait(`突然开口的醒目飞鹰叫住了你。`);
    await era.printAndWait(`临近比赛，会有所忧虑也是在所难免的吧。`);
    await falcon.say_and_wait(`说起来，这是飞鹰子第一次亮相呢。`);
    await falcon.say_and_wait(
      `虽然在报名时飞鹰子兴奋得一晚没睡，但随着撕下来的日历一天天的过去，飞鹰子直到现在才算有实感。`,
    );
    await falcon.say_and_wait(`……心情稍微有些复杂呢。`);
    era.printButton(`……这样吗。`, 1);
    await era.input();
    await era.printAndWait(
      `你对突如其来的展开感到有些不知所措，以至于一时半会不知道该说些什么。`,
    );
    await era.printAndWait(`在沉默的步伐之中，片刻才缓缓开口。`);
    await me.say_and_wait(
      `虽然比赛的时候什么都可能会发生，不过我们已经尽了最大的努力，不是吗？`,
    );
    await me.say_and_wait(`与飞鹰子一起在训练场挥洒的汗水，不会作假。`);
    await me.say_and_wait(
      `虽然这个世界因为过于复杂隐晦而难以预料，但归根结底来说会奇妙的有利于真诚付出的人们。`,
    );
    await me.say_and_wait(`所以即使中途略有曲折，最后也一定会往好的方向发展。`);
    await falcon.say_and_wait(
      `唔——飞鹰子有些听不懂呢，不过还是谢谢你，训练员先生⭐`,
    );
    await era.printAndWait(
      `因为压力而脚步有些沉重的醒目飞鹰，在得到你的安慰后，此刻的步伐比平时更加轻快。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}对其他${falcon.get_uma_sex_title()}也会这么说吗？`,
    );
    await era.printAndWait(`你假装没听到醒目飞鹰的自言自语。`);
    await me.say_and_wait(`接下来也要认真准备比赛的事情了！`);
    await era.printAndWait(`重新振作起来后，你们加快了脚步。`);
    wait_flag =
      get_attr_and_print_in_event(46, [0, 0, 10, 0, 0], 0) || wait_flag;
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
      await era.printAndWait(`……你一时间不知道该如何是好。`);
      era.printButton(`请告诉我发生了什么。`, 1);
      era.printButton(`就这么关机吧`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await me.say_and_wait(
          `如果飞鹰子有什么困难的话，无论何时何地都可以和我商量。`,
        );
        await era.printAndWait(
          `这一次等待的时间无比漫长，恐怕醒目飞鹰也在犹豫要不要说出来吧。`,
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
          `虽然飞鹰子也不是那么在意这种事情啦⭐，不过飞鹰子的内心总觉得空落落的呢。`,
        );
        await era.printAndWait(
          `像是将心中积压已久的问题一口气爆发出来，手机的震动声就没听过。`,
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
    await era.printAndWait(`时间流逝，新的一年到来了。`);
    await era.printAndWait(`训练室\n`);
    await falcon.say_and_wait(`新年快乐，训练员先生！`);
    await era.printAndWait(
      `醒目飞鹰用力推开训练室的大门，对着正在座位上发呆的你献上了祝福。`,
    );
    era.printButton(`飞鹰子新年快乐！`, 1);
    await era.input();
    await era.printAndWait(`对真诚的祝福同样回以祝福的你。`);
    await era.printAndWait(
      `虽然一开始的时候被这种大胆的举动吓了一跳，不过现在也慢慢习惯了。`,
    );
    await falcon.say_and_wait(
      `这是对过去的一年里照顾醒目飞鹰的训练员先生一点微不足道的感谢！`,
    );
    await era.printAndWait(`飞鹰子将亲手制作的贺卡递给了${me.actual_name}`);
    await me.say_and_wait(`不，能遇到像醒目飞鹰这样可爱的马娘，我也很开心。`);
    await falcon.say_and_wait(
      `诶？——嗯，没错！今年飞鹰子也要把可爱的模样带给训练员先生。`,
    );
    await era.printAndWait(
      `一瞬间的愕然后，${falcon.name}用钻石般的笑容回复着。`,
    );
    await falcon.say_and_wait(
      `好！说到新年的话，接下来是去现场观看偶像的演出吧！`,
    );
    await me.say_and_wait(`平时这么辛苦的飞鹰子现在的话多休息一会也好哦。`);
    await era.printAndWait(
      `不知不觉抚摸着${falcon.name}圆圆的脑袋，${falcon.sex}似乎也没有反对的样子？`,
    );
    await falcon.say_and_wait(`唔——飞鹰子已经不是小孩子了。`);
    await era.printAndWait(
      `虽然嘴巴上在抱怨，但耳朵却非常配合的任凭你的抚摸。`,
    );
    await me.say_and_wait(`既然这样的话。`);
    era.printButton(`还是想看到飞鹰子在舞台上闪闪发光的样子`, 1);
    era.printButton(`今天就好好休息吧`, 2);
    era.printButton(`考虑一下新的舞蹈吧`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`既然这样的话，一起去训练场好好训练吧！`);
      await falcon.say_and_wait(
        `任何闪耀的时刻都是由平时一点一滴的汗水积累起来的呦♪`,
      );
      await me.say_and_wait(
        `既然飞鹰子都这么说了，那么今天就在训练场将青春燃烧吧！`,
      );
      await falcon.say_and_wait(`飞鹰子一定会努力的！`);
      await era.printAndWait(`之后你们在训练场训练到了门禁时刻。`);
    } else if (ret1 === 2) {
      await falcon.say_and_wait(
        `嗯，训练员${me.get_adult_sex_title()}都这么说的话，飞鹰子今天就稍微休息一会吧！`,
      );
      await era.printAndWait(`坐在电视前一起吃着堆成小山的零食讨论着。`);
      await era.printAndWait(
        `与平时努力闪耀的飞鹰子相比，安静下来的飞鹰子似乎也有一种独特的魅力。`,
      );
      await me.say_and_wait(`不自觉露出笑容的飞鹰子比平时更加可爱哦。`);
      await falcon.say_and_wait(`哎！飞鹰子居然忘了表情管理了！`);
      await falcon.say_and_wait(`果然飞鹰子还是太懒散了吗？`);
      await era.printAndWait(
        `慌慌张张的控制住自己表情的飞鹰子显得更加可爱了。`,
      );
      await falcon.say_and_wait(
        `作为偶像给粉丝一号的特殊福利，不要告诉其他人哦？`,
      );
      await me.say_and_wait(`是，飞鹰子大人最棒了！`);
    } else {
      await falcon.say_and_wait(`嗯！飞鹰子一直都想尝试新的舞蹈呢！`);
      await me.say_and_wait(`那就认真看着电视上艺人们的舞台进行改进吧。`);
      await falcon.say_and_wait(`好！即使是看着表演也要全力以赴！`);
      await falcon.say_and_wait(`飞鹰子，加油！`);
      await era.printAndWait(
        `${me.actual_name}与飞鹰子一边看着电视上的表演，一边讨论着合适的方案。`,
      );
    }
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('恋心！飞鹰子的礼物！', falcon);
    await falcon.say_and_wait(`大家！感谢大家一直支持着飞鹰子！`);
    await era.printAndWait(
      `${falcon.name}在情人节当天向支持${falcon.sex}的粉丝们送巧克力。`,
    );
    await falcon.say_and_wait(
      `这个是飞鹰子亲手制作的义理巧克力！希望大家之后也能一直支持飞鹰子！`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await falcon.say_and_wait(
      `飞鹰子感受到大家的热情了呢！接下来这首献给粉丝们的大家~接下来也要多多支持飞鹰子哦♪`,
    );
    await say_by_passer_by(`粉丝们`, `噢噢噢噢！！！`);
    await era.printAndWait(
      `在粉丝们的欢呼声中${falcon.name}的情人节攻势才刚刚拉开序幕。`,
    );
    await falcon.say_and_wait(
      `辛苦了！这是作为马娘偶像飞鹰子一点微不足道的心意，接下来也要一直关照飞鹰子哦？`,
    );
    await era.printAndWait(
      `直到欢送走最后一名粉丝之后，在不远处观看的你才走上前去与醒目飞鹰打起招呼。`,
    );
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await falcon.say_and_wait(`——说起来，训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(
      `闲聊了几句后，${falcon.name}从不起眼的角落放置的纸箱里取出了一个包装精美的礼物盒。`,
    );
    await falcon.say_and_wait(
      `虽然作为飞鹰子给予粉丝们的心意必须是公平的，不过作为${falcon.name}来说，这个是${falcon.name}亲手制作的巧克力哦。`,
    );
    await era.printAndWait(
      `打开礼物盒后，看见了爱心形状的巧克力以及旁边的贺卡。`,
    );
    await falcon.say_and_wait(`情人节快乐！`);
    await era.printAndWait(`${falcon.name}露出了甜美的笑容。`);
    era.printButton(`接下来的话一起回去吧。`, 1);
    await era.input();
    await era.printAndWait(`${me.actual_name}牵起了${falcon.sex}的手。`);
    await falcon.say_and_wait(`接下来的话，也请多指教了！`);
    await falcon.say_and_wait(
      `稍微有些大胆了呢，如果被粉丝们看到的话，怎么办？`,
      true,
    );
    await falcon.say_and_wait(
      `到时候就用训练员与马娘之间深厚的情谊作为托辞吧`,
      true,
    );
    await era.printAndWait(`醒目飞鹰一边想着，一边享受这段幸福的时间。`);
  } else if (edu_weeks === 47 + 9) {
    await print_event_name('目标是皋月赏！', falcon);
    await era.printAndWait(
      `虽说手机屏幕上已经转为了春天，但留恋时间的冬却依然没有远去。`,
    );
    await era.printAndWait(`在温暖的训练室思考着接下来的赛事时。`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}！`);
    await era.printAndWait(`${falcon.name}来到了训练室中。`);
    await me.say_and_wait(`今天的飞鹰子依然活力四射呢。`);
    await falcon.say_and_wait(`嗯！毕竟活力与可爱正是马娘偶像的不同之处呢。`);
    await era.printAndWait(`在训练室里转了一圈之后一头扎进了沙发里。`);
    await falcon.say_and_wait(`在沙发上躺着真是舒服啊。`);
    await me.say_and_wait(`今天没有偶像活动吗？`);
    await era.printAndWait(
      `一般这个时候飞鹰子会缠着你允许${falcon.sex}进行街头演出。`,
    );
    await falcon.say_and_wait(`今天是马娘偶像的休息日。`);
    await falcon.say_and_wait(`嗯——飞鹰子希望能参加皋月赏`);
    await me.say_and_wait(`什么？`);
    await era.printAndWait(`${me.actual_name}有点怀疑自己是不是出现了幻听。`);
    await falcon.say_and_wait(`飞鹰子希望能去参加皋月赏！`);
    await era.printAndWait(`以相当具有气势的声音说出来了。`);
    await me.say_and_wait(`......?`);
    await me.say_and_wait(`可以让我听一听你的想法吗？`);
    await era.printAndWait(`醒目飞鹰看向你的视线左右略微游移着回答道。`);
    await falcon.say_and_wait(
      `因为飞鹰子已经成为了泥地冉冉升起的新星，不过草地上的大家还不怎么了解飞鹰子，所以飞鹰子想让草地上的大家也能看着飞鹰子⭐`,
    );
    era.printButton(`让草地的观众们也来目睹飞鹰子的可爱吧！`, 1);
    await era.input();
    await era.printAndWait(`这种时候还是采取肯定的方式更好。`);
    await falcon.say_and_wait(
      `谢谢你，训练员${me.get_adult_sex_title()}`,
      true,
    );
    await era.printAndWait(`得到了肯定的醒目飞鹰整个人闪闪发光。`);
  } else if (edu_weeks === 47 + 12) {
    await print_event_name(`目标！皋月赏！`, falcon);
    await era.printAndWait(
      `${me.actual_name}和${falcon.name}以皋月赏为目标进行努力。`,
    );
    await falcon.say_and_wait(`哈啊，哈啊......`);
    await me.say_and_wait(`差不多了，今天就训练到这里吧。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，我现在有进步吗？`,
    );
    await me.say_and_wait(`......距离获胜还有一段距离。`);
    await era.printAndWait(`看着计时器，${me.actual_name}陷入了沉思之中。`);
    await falcon.say_and_wait(`......训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(
      `不知何时凑过来的圆圆小脑袋想要弄清楚到底发生了什么。`,
    );
    await me.say_and_wait(`啊不，没什么。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}这样子看起来很可疑呢?`,
    );
    await falcon.say_and_wait(`难道是已经有喜欢的对象了吗?`);
    await era.printAndWait(
      `虽然不知道飞鹰子为什么得出了这个结论，不过这反而让${me.actual_name}松了一口气。`,
    );
    await me.say_and_wait(`现在的话还没有哦。`);
    await falcon.say_and_wait(`那为什么还是露出了一副忧伤的神情呢？`);
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
    await me.say_and_wait(`不，比起这个，现在更重要的还是接下来的演出。`);
    await era.printAndWait(
      `将记录在纸张上的数据收紧文件夹后，你向着训练室快步走去。`,
    );
    era.drawLine({ content: '演出结束后' });
    await falcon.say_and_wait(
      `今天的演出也顺利结束了，多亏大家的支持，飞鹰子最近新想出的歌曲也大受欢迎⭐`,
    );
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
    await falcon.say_and_wait(`谢谢大家！接下来也要一直支持着飞鹰子呦♪`);
    await era.printAndWait(`今天的演出也是大获成功。`);
    await era.printAndWait(
      `等到站在原地围观的人们散开之后，从远处观看着的你走向了${falcon.name}。`,
    );
    await me.say_and_wait(`辛苦了，今天的演出也非常受欢迎。`);
    await falcon.say_and_wait(
      `没有训练员${me.get_adult_sex_title()}的话，飞鹰子现在也在为演出而烦恼呢。`,
    );
    await me.say_and_wait(`接下来的话，就为皋月赏好好准备吧！`);
    await falcon.say_and_wait(`......啊，嗯！飞鹰子一定会胜利的！`);
    await era.printAndWait(
      `接过${falcon.name}手中的纸袋后，你们在回特雷森的路上沉默的前行。`,
    );
    await era.printAndWait(`手中的纸袋为何如此沉重呢？`);
    await era.printAndWait(`不断旋转的黑色物体咕噜咕噜在纸杯中旋转着。`);
    await falcon.say_and_wait(`......训练员${me.get_adult_sex_title()}？`);
    await era.printAndWait(`${falcon.name}似乎叫住了你？`);
    await falcon.say_and_wait(`飞鹰子的话，没关系的哦？`);
    await falcon.say_and_wait(
      `不如说，训练员${me.get_adult_sex_title()}陪着我这样任性下去，飞鹰子真的非常感谢！`,
    );
    await era.printAndWait(
      `似乎鼓足勇气才说出口的话语，脸庞微微泛红的${falcon.name}注意到${me.actual_name}的目光后便将头转了过去。`,
    );
    await era.printAndWait(`你们就这样沉默的回到了特雷森。`);
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
    era.printButton(`训练的话也不要忘记了！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `ok！训练员${me.get_adult_sex_title()}就看着飞鹰子活跃的表现吧！`,
    );
    await falcon.say_and_wait(
      `不管是作为偶像的飞鹰子还是作为${falcon.get_uma_sex_title()}的${
        falcon.name
      }都要全部完成！`,
    );
    era.printButton(`就是这种气势！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `说起来，附近的小镇里说不定也会有飞鹰子的潜在粉丝呢！`,
    );
    await falcon.say_and_wait(`接下来飞鹰子也要加油了！`);
    await era.printAndWait(
      `${me.actual_name}与${falcon.name}之间的夏季合宿开始了。`,
    );
  } else if (edu_weeks === 47 + 40) {
    await print_event_name(`飞鹰子`, falcon);
    await era.printAndWait(`商业街广场\n`);
    await falcon.say_and_wait(`非常感谢大家一直以来默默支持着飞鹰子⭐`);
    await falcon.say_and_wait(
      `这是飞鹰子昨天忙了一个晚上才制作好的小礼物，希望大家接受飞鹰子的小小心意❤`,
    );
    await era.printAndWait(
      `因为前来草地观看演唱会的粉丝们一度造成了交通拥堵，在理事长和手纲小姐的请求之下，你们将场地转向了特雷森附近的商业街。`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `虽然人气距离草地的明星偶像还有一段距离，但沙地的粉丝们愿意前来参观演出的热情却远远胜过草地粉丝。`,
    );
    await era.printAndWait(
      `毕竟关注草地的粉丝同时期有不少的名赛马娘可以选择，但专精于沙地的马娘偶像，人气与实力共存的，却只有醒目飞鹰一人而已。`,
    );
    await era.printAndWait(`海绵再大却也是柔软的，铁块越细却是致命的。`);
    await era.printAndWait(`就像是在显微镜下聚焦的太阳光一样。`);
    await me.say_and_wait(
      `醒目飞鹰这样下去会被粉丝们作为神供奉吧，那到时候我的立场恐怕就危险了。`,
    );
    await era.printAndWait(
      `你深吸一口气，将脑子里阴暗的想法抛到九霄云外，然后观看着醒目飞鹰的表演。`,
    );
    await falcon.say_and_wait(`……除此之外！飞鹰子还有一个好消息要告诉大家！`);
    await falcon.say_and_wait(
      `飞鹰子决定参加接下来的JBC经典赛还有东京大赏赛！`,
    );
    await say_by_passer_by(
      `粉丝们`,
      `接下来也能看到飞鹰子活跃的表现了！真是太棒了！`,
    );
    await falcon.say_and_wait(
      `接下来的比赛上，粉丝们的大家要好好在座位上为飞鹰子应援哦？`,
    );
    await say_by_passer_by(`粉丝们`, `一定会参加的！`);
    await falcon.say_and_wait(`那么！非常感谢！`);
    await era.printAndWait(`演唱会结束之后，飞鹰子回到了后台。`);
    era.printButton(`飞鹰子辛苦了。`, 1);
    await era.input();
    await era.printAndWait(
      `虽说只是宣布了即将参加的比赛，但狂热的粉丝们像潮水一样汹涌澎湃的喊着醒目飞鹰的艺名。`,
    );
    await falcon.say_and_wait(`虽然距离成为顶级马娘偶像还有些距离呢……`);
    await me.say_and_wait(`再这样下去，飞鹰子的身体……`);
    await falcon.say_and_wait(
      `……只要再坚持一下就可以了，所以训练员先生放心吧！`,
    );
    await era.printAndWait(`醒目飞鹰像上次那样全身瘫软的次数越来越多了。`);
    await falcon.say_and_wait(
      `不如说从参加泥地赛开始，飞鹰子就已经没有退路了哦？`,
    );
    await era.printAndWait(`只要再坚持一下，就可以了。`);
    await me.say_and_wait(`可是……不，没什么。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，接下来也请多指教了⭐`,
    );
    await era.printAndWait(`你将醒目飞鹰轻轻放在了休息室的沙发上。`);
    await me.say_and_wait(`……请多指教。`);
  } else if (edu_weeks === 47 + 41) {
    // 训练员被粉丝袭击，此刻的醒目飞鹰被
    await print_event_name(`醒目飞鹰`, falcon);
    await era.printAndWait(`与11月的气候变换成反比的，是醒目飞鹰热烈的演出。`);
    await era.printAndWait(
      `突然，毫无征兆的，眼前的粉丝将藏于贴身的小刀抽出。`,
    );
    await era.printAndWait(`大脑还在处理发生于眼前的，超出现实的事件。`);
    await era.printAndWait(`于是你只能站在原地呆呆地看着小刀刺中你的腹部。`);
    await era.printAndWait(`就这样无奈的迎来自己的末路。`);
    await me.say_and_wait(`唔！`);
    await era.printAndWait(`——如果你没有下意识将公文包作为缓冲的话。`);
    await say_by_passer_by(`狂热粉丝`, `该死。`);
    await era.printAndWait(
      `尽管如此，突然之间受到的冲击还是让你下意识的扬起了头，险些一屁股坐到地上。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `飞鹰子明明这么完美，为什么会喜欢上你？`,
    );
    await era.printAndWait(`意识到触感不对的暴徒被眼前的失败所激怒。`);
    await say_by_passer_by(`狂热粉丝`, `唔哦哦哦哦哦!`);
    await era.printAndWait(
      `不抽出小刀，反而接着这股冲劲意图将你逼迫到墙壁之上。`,
    );
    await me.say_and_wait(`该死，防狼喷雾就在不远处的准备桌上。`);
    await era.printAndWait(
      `不抽出小刀，趁你失去着力点就这么将你逼迫到墙壁之上。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `那个青涩、敏感细腻的飞鹰子，怎么会干这种——`,
    );
    await era.printAndWait(
      `不知是理智被愤怒所冲散的缘故，越说越激动的粉丝用力将小刀向前深入。`,
    );
    await say_by_passer_by(`狂热粉丝`, `——原来如此，我明白了。。`);
    await era.printAndWait(`一瞬间露出了迷惑表情的狂热者恍然大悟。`);
    await say_by_passer_by(
      `狂热粉丝`,
      `都是因为你的存在，可爱的飞鹰子才会变成这样。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `如果你消失的话，飞鹰子就会回到从前的样子吧？`,
    );
    await era.printAndWait(`肾上腺素飙升的你看着眼前绝望的一幕。`);
    await era.printAndWait(`像是冰块粗暴地插入小腹，鲜血染红了文件夹的纸张。`);
    await say_by_passer_by(`狂热粉丝`, `哈哈哈哈哈哈，就这么下地狱去吧！`);
    await era.printAndWait(
      `看着自己亲手创造的“杰作”，恶魔歇斯底里的笑了起来。`,
    );
    await me.say_and_wait(`不要害怕！这种时候反而要冷静观察。`, true);
    await era.printAndWait(`遇到这种绝望的场面，你反而冷静了下来。`);
    await era.printAndWait(
      `激烈的心脏跳动，身体感知到自己所遭受的苦难，在大量的肾上激素下，你以前所未有的集中力思考着突破的方式。`,
    );
    await me.say_and_wait(
      `如果能制造出一点巨大的噪声，说不定能把他吓跑。`,
      true,
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
    await era.printAndWait(
      `猛地一下将对方推倒在地，将准备室中备用的扩音器音量调到最大，然后对着扩音器使出全身力气。`,
    );
    await me.say_and_wait(`救命啊！`);
    await era.printAndWait(`巨大的噪音带着求生的希望传遍了整栋大厦。`);
    await say_by_passer_by(
      `狂热粉丝`,
      `该死该死该死该死，明明就差最后一步了！`,
    );
    await era.printAndWait(`晃晃悠悠站起来的恶魔进行着最后一搏。`);
    await me.say_and_wait(`一切就这么结束了吗？`, true);
    await era.printAndWait(
      `恐怕还没等到保安赶到，自己就已经变成一具冰冷的尸体了。`,
    );
    await me.say_and_wait(`现在得争取时间。`);
    await era.printAndWait(
      `肾上腺素带来的麻痹感即将过去，伤口处已经开始疼起来了。`,
    );
    era.printButton(`为什么要袭击我？`, 1);
    await era.input();
    await say_by_passer_by(`狂热粉丝`, `为什么，为什么你问我为什么！`);
    await say_by_passer_by(
      `狂热粉丝`,
      `连我生命之中唯一的光都要玷污的你也配来问我为什么？`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `我的爱，我的救赎，被我视作女神一样的存在，在我最黑暗的时刻伸出的那一双手。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `像太阳一样平等的温暖着所有为此付出的我们。`,
    );
    await say_by_passer_by(`狂热粉丝`, `这样完美无缺的存在，居然会恋爱？`);
    await say_by_passer_by(`狂热粉丝`, `开什么玩笑！开什么玩笑！`);
    await era.printAndWait(`因为出离愤怒而胡乱破坏着周围的粉丝拿刀指向了你。`);
    await say_by_passer_by(
      `狂热粉丝`,
      `开什么玩笑！那我来告诉你！偶像就是默默无闻的我们的希望！`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `在痛苦、迷茫之中徘徊着的我们的唯一救赎！`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `可笑吧！一直梦想着成为电视之中保护世界的英雄，却沦为现在这副连自己都憎恶的模样。`,
    );
    era.printButton(`你的所作所为和英雄有什么关系！`, 1);
    await era.input();
    await era.printAndWait(
      `楼下传来的急促脚步声越来越近，因为疼痛而流下的汗水将背部打湿。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `为什么，我来告诉你！当你看到自己在一次次的竞争之中失败，在剧烈的痛苦之下才恍然意识到`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `这个世界跟你又有什么关系！你根本不是什么英雄，不过是每集开头被批量打死的喽啰罢了。`,
    );
    await say_by_passer_by(`狂热粉丝`, `所以，我追求闪耀的偶像又有什么错？`);
    await say_by_passer_by(
      `狂热粉丝`,
      `幻想着她会作为自己的伴侣所快乐的每一天，不去给任何人添麻烦，就这么默默无闻的度过，我都觉得这样就好了的时候。`,
    );
    await say_by_passer_by(`狂热粉丝`, `然后你就出现了。`);
    await say_by_passer_by(
      `狂热粉丝`,
      `你就没想过打破别人的梦是多么残忍的事情吗？`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `对醒目飞鹰做出那种事情的你，连我最后的幻想都要嘲笑吗?`,
    );
    await era.printAndWait(
      `珊珊来迟的保安将狂热粉丝拘束在地板之上，你的视线渐渐变得模糊。`,
    );
    await era.printAndWait(`即将远去的意识在最后一刻看到的——`);
    await era.printAndWait(`是那个标志性的麦克风。`);
  } else if (edu_weeks === 47 + 42) {
    // 我越喜欢，我对“我受不了的方式”的定义就越严苛。我去做点什么的动能就越强。
    // 什么也不做，对我就是痛苦的，内心深处就有双重辜负感——第一感觉自己辜负了自己所喜欢的对象，第二感觉辜负了自己的喜欢本身。
    await print_event_name(`水仙`, falcon);
    await era.printAndWait(`粉丝袭击事件已经过去了一周。`);
    await era.printAndWait(
      `身处于事件的风暴中心，出于对你与醒目飞鹰的人生安全考虑。`,
    );
    await era.printAndWait(`学院决定暂时限制你们的外出。`);
    await era.printAndWait(`……某种意义上来说也是一种反省。`);
    await era.printAndWait(
      `看着醒目飞鹰轻轻推开训练室的大门，向你勉强露出微笑时。`,
    );
    await era.printAndWait(
      `你将看向醒目飞鹰的视线向下挪开，看着训练计划发呆。`,
    );
    era.printButton(`但是，飞鹰子是马娘偶像。`, 1);
    await era.input();
    await me.say_and_wait(`那就要自己承担起，自己所作事情的责任。`);
    await falcon.say_and_wait(`…...`);
    await era.printAndWait(
      `醒目飞鹰的视线上下浮动着，似乎不太擅长这样的对话。`,
    );
    await era.printAndWait(`你深吸一口气，准备继续说下去时——`);
    await falcon.say_and_wait(`飞鹰子知道的。`);
    await era.printAndWait(`不是敷衍、也不是推脱，醒目飞鹰平静的开口。`);
    await falcon.say_and_wait(`飞鹰子想要。`);
  } else if (edu_weeks === 47 + 48) {
    await print_event_name(`圣诞祈愿`, falcon);
    await era.printAndWait(`中山竞马场·有马纪念`);
    await era.printAndWait(
      `今年的有马纪念依然是盛况空前，观众席上坐满了来自不同地方的游客。`,
    );
    await era.printAndWait(`空气中隐隐有层白色的面纱聚集在观众席上。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，原来你在这里啊。`,
    );
    await era.printAndWait(`之前进来的时候不小心被拥挤的人群从中间分开了。`);
    await falcon.say_and_wait(
      `真是的，差点就找不到训练员${me.get_adult_sex_title()}了。`,
    );
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
    await falcon.say_and_wait(`不，不会吧？`);
    await era.printAndWait(
      `看着你绝望的脸色，${falcon.name}的脸色也变得难看起来了。`,
    );
    await falcon.say_and_wait(`接下来的话怎么办？`);
    await me.say_and_wait(`先在附近找找看吧？`);
    await era.printAndWait(`所幸在附近酒店打听时正巧碰到了一个退房的客人`);
    await falcon.say_and_wait(`要，要一起睡吗？`);
    await era.printAndWait(
      `只剩下这一套房间了，如果不预定的话就只能在公园里搭帐篷了。`,
    );
    await me.say_and_wait(`如果${falcon.name}不愿意的话，我睡在长椅上也可以。`);
    await me.say_and_wait(`在长椅上度过一个晚上也不是不行。`, true);
    await falcon.say_and_wait(`怎么可以这样！还是两个人一起。`);
    await era.printAndWait(`犹豫着的飞鹰子最终还是下定决心了。`);
    await me.say_and_wait(`......谢谢你，${falcon.name}。`);
    await era.printAndWait(`你们挤在一张床上睡着了。`);
  } else if (edu_weeks === 95 + 1) {
    await print_event_name('日出', falcon);
    era.printButton(`就在这里扎营吧。`, 1);
    await era.input();
    await falcon.say_and_wait(`好！`);
    await era.printAndWait(
      `在${falcon.name}的建议下，${me.actual_name}与${falcon.name}来到了附近的山上准备迎接新年第一天的日出。`,
    );
    await era.printAndWait(
      `为了应对夜间山上寒冷的天气，除了野营必须的帐篷和睡袋，准备了足够三天所需的食物与水。`,
    );
    await era.printAndWait(
      `慎重选择的同时还带上了手电筒、驱蛇粉以及常用药品防备意外情况。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，让我也来搭把手吧！`,
    );
    await era.printAndWait(
      `打开充气垫的阀门使其逐渐膨胀，直至其中充满空气为止。`,
    );
    await era.printAndWait(
      `为了防止夜间温度过低导致热量流失，防潮垫是必须考虑到的部分。`,
    );
    await falcon.say_and_wait(`接下来的话，只要把露营灯挂在帐篷中间就结束了！`);
    await era.printAndWait(`在${falcon.name}的协助之下，帐篷很快就搭起来了。`);
    era.printButton(`辛苦了，飞鹰子。`, 1);
    await era.input();
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}，你的手！`);
    await era.printAndWait(
      `相比于${falcon.get_uma_sex_title()}，人类的身体更加脆弱。`,
    );
    await era.printAndWait(
      `尽管准备了厚厚的羽绒服，但露出在外的手指还是被冻得颤抖不止。`,
    );
    await me.say_and_wait(
      `唔，有的时候真是羡慕${falcon.get_uma_sex_title()}的身体构造啊。`,
    );
    await falcon.say_and_wait(`啊，好冷。`);
    await era.printAndWait(
      `然后${falcon.sex}却坚定的握住了${me.actual_name}的手。`,
    );
    await falcon.say_and_wait(`这样的话，两个人都会暖和起来的。`);
    await era.printAndWait(`看着错愕的你，${falcon.name}露出了微笑。`);
    await falcon.say_and_wait(`那么，一起进去吧♪`);
    await era.printAndWait(`虽然外面的温度降到了零下5度，但睡袋之中却很暖和。`);
    await falcon.say_and_wait(
      `zzz......训练员${me.get_adult_sex_title()}，我也最喜欢你了♪`,
    );
    await era.printAndWait(`一夜无话`);
    era.drawLine();
    await era.printAndWait(`闹钟「叮铃铃铃！」`);
    await me.say_and_wait(`唔，哪里来的闹钟？`);
    await era.printAndWait(`突然喧嚣起来的闹钟将你从睡梦之中拖了出来。`);
    await me.say_and_wait(`好冷！`);
    await era.printAndWait(`从睡袋之中伸出的手一瞬间被寒冷刺激着清醒了。`);
    await me.say_and_wait(`好像有什么事情？对了！`);
    await era.printAndWait(`突然惊醒的${me.actual_name}从睡袋之中爬了起来。`);
    await me.say_and_wait(`飞鹰子！该起来了！`);
    await falcon.say_and_wait(`唔，训练员${me.get_adult_sex_title()}，诶！`);
    await era.printAndWait(`被惊醒的${falcon.name}似乎也意识到了什么。`);
    await falcon.say_and_wait(
      `那个，训练员${me.get_adult_sex_title()}！可以转过去吗？`,
    );
    await era.printAndWait(`悉悉索索的声音从后背那边传了过来。`);
    await falcon.say_and_wait(`已经可以了哦？`);
    await era.printAndWait(
      `重新穿上羽绒服的${falcon.name}身体稍稍前倾，对着你露出了笑脸。`,
    );
    await me.say_and_wait(`那么，一起出发吧！`);
    await falcon.say_and_wait(`好！`);
    await era.printAndWait(
      `暂时将帐篷留在原地，你和${falcon.name}来到了山顶之上。`,
    );
    await falcon.say_and_wait(`看来还是有点早呢。`);
    await me.say_and_wait(`是啊。`);
    await falcon.say_and_wait(
      `不过就这样和训练员${me.get_adult_sex_title()}一起迎来新年的第一缕阳光。`,
    );
    await falcon.say_and_wait(`飞鹰子其实很开心哦♪`);
    await era.printAndWait(
      `天上的繁星尚未从星空舞台上退下，台下的观众则期待着之后的主角上场。`,
    );
    await falcon.say_and_wait(`而且`);
    await falcon.say_and_wait(`接下来的话，只要耐心等待太阳的升起就好了♪`);
    await era.printAndWait(
      `站在${me.actual_name}身旁的${falcon.name}虽然看不见此刻的表情，但一定是笑着说出来的吧。`,
    );
    await me.say_and_wait(`能够和${falcon.name}一起看日出，我也很幸福。`);
    await falcon.say_and_wait(
      `能够听到训练员${me.get_adult_sex_title()}坦率的声音，`,
    );
    await falcon.say_and_wait(`飞鹰子内心的世界里又多了一颗闪亮的宝石呢♪`);
    await era.printAndWait(`不知不觉间，似乎能看到${falcon.name}露出的笑容。`);
    await falcon.say_and_wait(`啊，终于等到了呢♪`);
    await falcon.say_and_wait(
      `和训练员${me.get_adult_sex_title()}，训练员${me.get_adult_sex_title()}一起见过的朝阳，欸嘿嘿♪`,
    );
    await era.printAndWait(
      `从这里俯瞰着山下的特雷森学院，从黑蒙蒙的一片中一点一点变得出现了色彩。`,
    );
    await era.printAndWait(`带着不容质疑的意志一点，一点的前进着。`);
    await falcon.say_and_wait(
      `${
        falcon.name
      }也好，泥地的大家也好，总有一天不会输给草地比赛的${falcon.get_uma_sex_title()}们♪`,
    );
    await me.say_and_wait(`${falcon.name}的愿望，一定会传达到的！`);
    await era.printAndWait(
      `轻轻擦去${falcon.sex}眼角的泪水，然后摸了摸${falcon.sex}的头。`,
    );
    await falcon.say_and_wait(`嗯！`);
    await era.printAndWait(`在寒风之中传来了湿润的感觉。`);
    await falcon.say_and_wait(`新年快乐，训练员${me.get_adult_sex_title()}♪`);
    await era.printAndWait(`踮起脚的${falcon.name}额外可爱。`);
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('飞鹰子与情人节♪', falcon);
    await falcon.say_and_wait(`大家！欢迎参加飞鹰子的感谢庆典♪`);
    await falcon.say_and_wait(
      `为了感谢大家平时一直默默支持作为偶像的飞鹰子，嗯~飞鹰子也要回报作为粉丝的大家！`,
    );
    await era.printAndWait(`飞鹰子拿出了一个包装好的巧克力盒。`);
    await falcon.say_and_wait(
      `感谢各位一直以来支持着飞鹰子，这里面装的可是飞鹰子的爱哦！`,
    );
    await era.printAndWait(`粉丝们「噢噢噢噢！」`);
    await falcon.say_and_wait(`那么大家过来这边！`);
    era.drawLine();
    await falcon.say_and_wait(`谢谢你一直以来支持着飞鹰子！`);
    await era.printAndWait(
      `直到最后一位粉丝离开后，现在只剩下${me.actual_name}和${falcon.name}了。`,
    );
    await falcon.say_and_wait(`给，训练员${me.get_adult_sex_title()}！`);
    await era.printAndWait(`将最后一份巧克力递给了你。`);
    await falcon.say_and_wait(`啊，等等，还有一份！`);
    await era.printAndWait(
      `${falcon.name}从自己随身的口袋之中再次拿出了一个包装精美的巧克力。`,
    );
    await falcon.say_and_wait(
      `虽然作为飞鹰子的偶像必须要把平等的爱给每一位粉丝，不过这是作为${
        falcon.name
      }的爱送给训练员${me.get_adult_sex_title()}！`,
    );
    await era.printAndWait(
      `看着手中的两份巧克力，${me.actual_name}陷入了沉思。`,
    );
    await falcon.say_and_wait(`接下来的时间里一起去约会吧♪`);
    era.printButton(`要是被发现的话怎么办？`, 1);
    await era.input();
    await era.printAndWait(`将双马尾放下之后，戴上了特制的平面眼镜。`);
    await era.printAndWait(`与平常完全不同的${falcon.name}就此诞生了。`);
    await falcon.say_and_wait(`锵锵♪崭新的${falcon.name}诞生了！`);
    await era.printAndWait(
      `小心地取下了象征着飞鹰子的头饰之后，${
        falcon.name
      }变成了特雷森随处可见的${falcon.get_uma_sex_title()}。`,
    );
    await falcon.say_and_wait(
      `${falcon.name}的训练员${me.get_adult_sex_title()}⭐`,
    );
    await era.printAndWait(
      `接下来你们到了附近的游乐园体验了各种没玩过的娱乐项目。`,
    );
  } else if (edu_weeks === 95 + 14) {
    await print_event_name('偶像感谢祭♪', falcon);
    await era.printAndWait(
      `作为特雷森一年一度的粉丝感谢祭，为了感谢粉丝们平时对赛${falcon.get_uma_sex_title()}的支持。`,
    );
    await era.printAndWait(`特雷森将开放校门欢迎各位粉丝前来支持各自的粉丝。`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}A「那边的这位是飞鹰子！」`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}B「我听说${
        falcon.sex
      }甚至提高了泥地比赛的知名度！」`,
    );
    await falcon.say_and_wait(`各位，欢迎来到特雷森⭐`);
    await falcon.say_and_wait(`感谢各位平时一直以来都支持飞鹰子⭐`);
    await falcon.say_and_wait(`接下来的话，飞鹰子也会把最好的舞蹈献给大家⭐`);
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
    era.drawLine();
    await falcon.say_and_wait(`~~~♪谢谢大家！`);
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！」`);
    await falcon.say_and_wait(
      `大家之后也要一直支持着飞鹰子哦！那么，最后，一二`,
    );
    await falcon.say_and_wait(`如果飞鹰子逃跑了？`);
    await era.printAndWait(`粉丝们「那就只能追上去了！」`);
    await falcon.say_and_wait(`要追到地平线的尽头吗~？`);
    await era.printAndWait(`粉丝们「那里就是飞鹰子的大舞台！」`);
    await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
    await era.printAndWait(`粉丝们「——去抓住大大的爱吧！」`);
    await falcon.say_and_wait(
      `最强的${falcon.get_uma_sex_title()}偶像，${
        falcon.name
      }♪今天也送到了呢⭐`,
    );
    await era.printAndWait(`粉丝们「噢噢噢噢噢噢噢噢！飞鹰子！飞鹰子！」`);
    await era.printAndWait(
      `带着几乎将特雷森掀开的气势，飞鹰子的演出大获成功。`,
    );
    await falcon.say_and_wait(`明明还想再来一首的说。`);
    await era.printAndWait(
      `从感谢祭舞台上下来的${falcon.name}看上去有些遗憾。`,
    );
    await me.say_and_wait(`毕竟按照节目表最多也就一个半小时了。`);
    await era.printAndWait(`平时的演唱会一般要持续三个小时。`);
    await me.say_and_wait(`既然暂时已经结束了，接下来就到处去逛逛吧。`);
    await falcon.say_and_wait(
      `这样的话，飞鹰子先去更衣室了，训练员${me.get_adult_sex_title()}不要偷看哦！`,
    );
    await me.say_and_wait(`快去吧。`);
    await me.say_and_wait(`稍微在附近转转吧`, true);
    await era.printAndWait(
      `看着平时的校园突然涌入了大量的人与${falcon.get_uma_sex_title()}，作为训练员的${
        me.actual_name
      }有种莫名想要远离的感觉。`,
    );
    await me.say_and_wait(`去人流少一点的地方吧`, true);
    await era.printAndWait(`记者「请问你是${falcon.name}的训练员吗？」`);
    await era.printAndWait(`正打算离开的时候却被记者缠住了。`);
    await era.printAndWait(
      `听到${falcon.name}的名字，附近的人群朝着这边看了过来。`,
    );
    await me.say_and_wait(`不好，这么下去的话和飞鹰子之间的约会`, true);
    await me.say_and_wait(`是的，请问有什么想问的吗？`);
    await era.printAndWait(
      `记者「我也观看了飞鹰子的表演呢！真的是非常精彩！」`,
    );
    await me.say_and_wait(`我想飞鹰子听到的话一定也会很高兴的。`);
    await era.printAndWait(
      `记者「话说回来，作为泥地偶像的飞鹰子和训练员${me.get_adult_sex_title()}的关系真的很好呢~」`,
    );
    await era.printAndWait(`记者「请问你们之间的关系进展如何了？」`);
    await me.say_and_wait(`......其实我也觉得飞鹰子很好，就合适的搭档而言。`);
    await me.say_and_wait(
      `作为训练员来说，能遇到这样脚踏实地又有天赋的${falcon.get_uma_sex_title()}实在是非常荣幸。`,
    );
    await me.say_and_wait(
      `与其说是我成就了${falcon.name}，不如说我本人也受到了${falcon.sex}很大的影响。`,
    );
    await era.printAndWait(`记者「嗯嗯，受到了很宝贵的材料呢，非常感谢！」`);
    era.drawLine();
    await falcon.say_and_wait(`久等了，一起出发吧？`);
    await era.printAndWait(
      `所幸之后没有预见其他记者，围观的人群也被主舞台声势浩大的演出很快吸引了过去。`,
    );
    await era.printAndWait(
      `稍微绕了几个弯确定了没有狗仔队在后头跟着后，才与飞鹰子会合了。`,
    );
    await me.say_and_wait(`不如说，这边也是。`);
    await era.printAndWait(`今天也要玩个尽兴才行。`);
  } else if (edu_weeks === 95 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:46:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`合宿开始！`, falcon);
    await falcon.say_and_wait(`好久没有来到这里了，真是怀念啊。`);
    await era.printAndWait(
      `朝着以顶级偶像为目标的${falcon.name}，现在正朝着育马场经典赛努力。`,
    );
    await falcon.say_and_wait(`现在的话就全力准备夏季合宿吧。`);
    await falcon.say_and_wait(
      `对于一直支持着自己的大家，飞鹰子一定要在之后的比赛之中取胜！`,
    );
    await me.say_and_wait(`不如说，这边也是。`);
    await me.say_and_wait(`我在背后一直支持着飞鹰子的。`);
    await falcon.say_and_wait(
      `听到训练员${me.get_adult_sex_title()}这么说的话，安全感一下子就上来了呢。`,
    );
    await era.printAndWait(`飞鹰子的笑容比起${falcon.sex}背后的沙滩还要美丽。`);
    await me.say_and_wait(`那么，现在开始准备训练吧！`);
    await falcon.say_and_wait(`嗯！飞鹰子会将最努力的一面展示给大家看的！`);
    await era.printAndWait(`你与飞鹰子之间第三年的夏季合宿开始了。`);
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
    await falcon.say_and_wait(`接下来的日子，也请多指教了♪`);
    await era.printAndWait(`good end·kiss on my deity`);
    era.drawLine({ content: 'THE END' });
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
