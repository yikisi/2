const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} maru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async function (maru, me, callname, hook, event_object) {
  const digital = get_chara_talk(19),
    falcon = get_chara_talk(46),
    event_marks = new MaEduMarks(),
    edu_weeks = era.get('cflag:4:育成回合计时');
  let wait_flag = false;
  if (event_marks.memory === 1) {
    event_marks.memory++;
    await print_event_name(`早上好，${maru.name}`, maru);
    maru.print(`被直射的阳光照在脸上，不情愿地醒来了。`);
    maru.print(`昨天晚上玩过头歇菜了吗？`);
    await maru.say_and_wait(`呜——`);
    await era.printAndWait(`${maru.name}从床上睁开了眼睛。`);
    await maru.say_and_wait(`呼啊——`);
    await maru.say_and_wait(`不愿意从床上做起来，就这样伸出一只手摸索着闹钟。`);
    maru.print(
      `意外的是，平时不小心睡过头被${
        callname
      }用直直的眼神瞪着一样的可怕闹钟，现在却像理事长在学院里种的胡萝卜一样安静。`,
    );
    maru.print(`……不对，怎么想的话都有点奇怪吧？`);
    maru.print(`果然是昨天用力过猛，不小心弄坏了吗？`);
    maru.print(`还是说——`);
    await maru.say_and_wait(`今天是休息日吗？`, true);
    maru.print(`在得到这个好消息后，心满意足的就这么睡过去了——不对！`);
    maru.print(`要是是闹钟坏了呢？今天是星期……星期几来着？`);
    maru.print(`要是迟到的话，被${callname}发现的话……`);
    await maru.say_and_wait(`真是压力山大！`, true);
    maru.print(
      `就这么坐了起来，因为困倦还未完全消除的身体传来了阵阵的麻痹感。`,
    );
    await maru.say_and_wait(`哈——啊。`);
    maru.print(`身体自动做出了反应。`);
    await era.printAndWait(
      `${maru.name}披着乱糟糟的头发摸索着不知丢在何处的拖鞋，视野模糊着走下了床。`,
    );
    era.drawLine();
    maru.print(
      `半梦半醒的自己总算被冰凉的水流从三女神的伊甸园里活生生拽了出来。`,
    );
    maru.print(
      `简单的用电吹风吹了一下头发后，用毛巾包裹住尚在滴水的头发走出了卫生间。`,
    );
    maru.print(`咕咚咕咚，哈啊～`);
    maru.print(`将一整瓶咖啡牛奶一饮而尽后，心情也变得雀跃起来了♪`);
    await maru.say_and_wait(`接下来做些什么呢？`);
    maru.print(`休息日的今天，后辈们应该也去放松了。`);
    maru.print(`休息日的特雷森，稍微有些冷清呢。`);
    await maru.say_and_wait(`${callname}——`);
    maru.print(`胸中悄然涌出一份感觉。`);
    maru.print(`陌生又莫名熟悉的甜蜜感袭上了心头。`);
    maru.print(
      `就算${callname}从这个世界上消失的话，我恐怕也不会忘记这份怮动吧。`,
    );
    await maru.say_and_wait(`这样的话，今天就去训练室吧。`);
    await era.printAndWait(`如果是自卑又比谁都要好胜${callname}的话。`);
    await era.printAndWait(
      `此刻的现在，恐怕正在训练室，一边苦恼着接下来的比赛，一边喝着浓浓的苦咖啡吧。`,
    );
    await maru.say_and_wait(
      `这样的话，不去把囧囧的${
        maru.sex
      }从这份令人难受的苦恼之中拽出来可不行呢。`,
    );
    await era.printAndWait(`${maru.name}来到了训练室门口。`);
    await era.printAndWait(
      `带着最近新了解的「突然推开门吓人一跳」的潮流，推开门大声地宣布着自己的到来。`,
    );
    await era.printAndWait(
      `看着${
        callname
      }带着慌乱的表情手忙脚乱的寻找着被刚才的惊吓不小心飞到沙发下的遥控器。`,
    );
    await era.printAndWait(
      `${maru.name}想起了小包中那张与${
        callname
      }一起在卡拉OK拍下的合照，喝过头的${
        callname
      }带着的可爱酒窝，在床上不知道翻来覆去看了多少遍。`,
    );
    await era.printAndWait(`也许是晴天的关系吧。`);
    await era.printAndWait(
      `${maru.name}看上去就像刚喝饱水分的亮晶晶的胡萝卜一样。`,
    );
    await era.printAndWait(
      `明天的${maru.sex}也会一如既往的，带着这份独特的感觉鼓励着大家吧。`,
    );
    await era.printAndWait(
      `带着这份对未来的憧憬，${maru.name}迎来了新的一天。`,
    );
  } else if (event_marks.teacher_sister === 1) {
    // 训练员面对想要学习的东西提不起兴趣，丸善斯基对其进行指导
    await print_event_name(`请指导我，丸善斯基老师！`, maru);
    await era.printAndWait(`某个休息日的早上。`);
    await era.printAndWait(`${me.name}爬在办公桌上什么都不想干。`);
    await era.printAndWait(
      `自从成功进入特雷森之后，不知为何学生时代的动力一下子全部消失了。`,
    );
    await era.printAndWait(
      `虽然在与 ${maru.name}的交流之中慢慢找回之前的感觉，但这种勉强感还是有些烦恼。`,
    );
    await me.say_and_wait(`平时都这么辛苦了，今天就好好休息一下吧。`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，我进来了哦♪`,
    );
    await era.printAndWait(
      `正准备带着这种借口摸鱼的时候， ${maru.name}推门而入。`,
    );
    await era.printAndWait(
      `该说是不是巧合呢， ${maru.name}看上去心情正好的样子。`,
    );
    await maru.say_and_wait(
      `这样的话，不得不和 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}好好讲解一下了。`,
    );
    await me.say_and_wait(
      `或许和 ${maru.name}商量一下的话，说不定会有新的看法。`,
      true,
    );
    await era.printAndWait(
      `带着这种试试看的想法，${me.name}向 ${maru.name}倾诉了心中的困扰。`,
    );
    await maru.say_and_wait(`唔——原来是这样啊。`);
    await era.printAndWait(
      ` ${maru.name}一边轻轻的笑着，一边将放在角落里的小黑板拉了出来。`,
    );
    await maru.say_and_wait(`这样的话，就让姐姐我来分享一下我的看法吧。`);
    await era.printAndWait(` ${maru.name}在黑板左侧上画下了Q版的自己。`);
    await maru.say_and_wait(
      `有的时候面对一些不去做就会后悔的事物时，是不是总会有种怎么也提不起干劲的状态呢？`,
    );
    await era.printAndWait(
      `在黑板的右侧将作为烦恼的功课、名次，以及舞蹈圈了起来。`,
    );
    await maru.say_and_wait(
      `虽然知道它很重要，不去做的话与亲近的人就会有一种焦虑惶恐的感觉。`,
    );
    await era.printAndWait(
      `${maru.sex_code - 1 ? '她' : '他'}一边解释着，一边贴心的为小人补上乌云。`,
    );
    await maru.say_and_wait(
      `在后悔与焦躁之中度过，但是好像这样也能维持下来的样子？！`,
    );
    await era.printAndWait(`在两者的下方，Q版小人开始向训练员道歉。`);
    await maru.say_and_wait(
      `于是下一次这种事情发生的时候，只要表现出后悔的样子，周围的人也不会说些什么，最后大家都维持在了一个合适的状态上。`,
    );
    await era.printAndWait(`将三幅图依次用箭头联系在一起，一个循环便诞生了。`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}觉得如何呢?`,
    );
    era.printButton(`事态也没有得到解决吧？`, 1);
    await era.input();
    await me.say_and_wait(
      `从事情开始恶化，到周围的人对${me.name}施加压力，自己做出后悔的样子，周围的人无可奈何的放弃 这个循环之中，只有事物没有被解决吧？`,
    );
    await me.say_and_wait(
      `本应作为激发动力的燃料被做出后悔姿态的自己消除了，最后事态却向着更糟糕的方向发展了。`,
    );
    await me.say_and_wait(
      `于是在事态越来越严重时，这套懊悔循环不仅能够自我维持，甚至得到了强化。`,
    );
    await era.printAndWait(`在思考了8分钟左右，${me.name}犹豫的给出了答案。`);
    await maru.say_and_wait(
      `没错，这种循环本身不解决问题，只解决问题感。对于当事人来说，就像明明知道下周就要考试了，但还是打算趁着时间还有多，跑去街机厅的学生一样。`,
    );
    await maru.say_and_wait(`本质上只是因为害怕疼痛而吃止痛药麻痹自己。`);
    await maru.say_and_wait(`所以，我们要找到行动的动机。`);
    await era.printAndWait(
      `似乎是正确的答案，像是花朵一样的笑容在${maru.sex_code - 1 ? '她' : '他'}的脸上绽放。`,
    );
    await maru.say_and_wait(
      `为了将圆周率精确到第七位小数，人类文明普遍花了至少两千年。`,
    );
    await maru.say_and_wait(`认识到无理数，用了一千年。`);
    await maru.say_and_wait(
      `二元方程、三角函数、对数、阶乘，都是人类长达数千年的集体探索才逐步达成的学术成就。`,
    );
    await era.printAndWait(
      `白板擦将之前的画面擦干净之后，画下了一个巨大的水晶萝卜。`,
    );
    await maru.say_and_wait(
      `能够通过仅仅八年的学习，就将这些成就运用自如，是一件堪称华丽的成就。`,
    );
    await maru.say_and_wait(
      `有些人非常聪明而且有足够的运气，借助名次以及周围人的称赞化为燃料，帮${maru.sex_code - 1 ? '她' : '他'}更快的掌握了这些东西。`,
    );
    await era.printAndWait(`Q版小人通过钻头很快就找到了水晶萝卜。`);
    await me.say_and_wait(`如果我花了很久也没弄懂，怎么办呢？`);
    await maru.say_and_wait(`那又怎么样呢？`);
    await era.printAndWait(` ${maru.name}眨了眨眼。`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的目标就是为了十足的领取这份文明的遗产，无论花多久，只要最终学到了就是大赚。`,
    );
    await me.say_and_wait(`可是我遇到看不懂的公式又该怎么处理呢？`);
    await maru.say_and_wait(
      `最好的办法是去阅读与它相关的背景知识，以及相关的历史，去回溯这个思想成就当年是怎么从历史中淘洗出来的。`,
    );
    await era.printAndWait(
      `白板上的Q版小人查阅着矿物知识，向经验丰富的前辈请教。`,
    );
    await maru.say_and_wait(
      `这样不仅能降低认知门槛，更重要的是正确的历史感能帮${me.name}洗脱${me.name}对社会的扭曲想象带来的虚假价值评估。`,
    );
    await maru.say_and_wait(`因为没有动力的根本原因总是估错了价格。`);
    await era.printAndWait(`水晶胡萝卜变得闪闪发亮。`);
    await maru.say_and_wait(
      `历史上重要珍贵的东西，自然也围绕其滋生了庞大的产业与生态。`,
    );
    await era.printAndWait(`Q版小人们围绕着女神祭坛将水晶胡萝卜放了上去。`);
    await maru.say_and_wait(
      `而这份庞大的产业与生态，自然为了这份这些知识的价格做了担保，为了熟知它们的人提供了机会与丰厚的报酬。`,
    );
    await era.printAndWait(`故事的最后，三女神们为Q版小人送上了胡萝卜山。`);
    await maru.say_and_wait(`所以学习是一个利润极高的收益机会。`);
    await me.say_and_wait(`原来如此，谢谢 ${maru.name}老师！`);
    await maru.say_and_wait(
      `哎呀～ ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}真是太客气了。如果能帮助到 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，姐姐我才是最高兴的一边。`,
    );
    await era.printAndWait(
      `因为帮助到了${me.name}而由衷高兴的 ${maru.name}周围似乎有彩虹浮现。`,
    );
    await era.printAndWait(`${me.name}们度过了有意义的一天。`);
  } else if (edu_weeks === 5) {
    await print_event_name(
      `来自${maru.get_bigger_sibling_sex_title()}的礼物`,
      maru,
    );
    // ${chara_talk.name}邀请玩家开车兜风
    await era.printAndWait(`训练室\n\n`);
    await era.printAndWait(`咚咚咚`);
    await maru.say_and_wait(`哈喽${callname}！`);
    await era.printAndWait(
      `抱着巧克力小山的${maru.name}走进了${me.actual_name}的训练室。`,
    );
    era.printButton(`「需要帮忙吗？」`, 1);
    await era.input();
    await era.printAndWait(
      `让${me.actual_name}怀疑自己是不是看错了一样，${maru.name}抱着巧克力小山来到了训练室。`,
    );
    await maru.say_and_wait(`后辈们比想象之中还要热情还真是受不鸟呢。`);
    await maru.say_and_wait(
      `说着感谢丸善前辈在平日里的帮助什么的，将这些巧克力硬塞过来了——啊，放在这里可以吗？`,
    );
    era.printButton(`「后辈们很喜欢${me.name}呢」`, 1);
    await era.input();
    await era.printAndWait(
      `将放在小桌上的各种零食与漫画放在地板上，从${maru.name}的手中接过一部分巧克力。`,
    );
    await maru.say_and_wait(`跪了——后辈们的期待可真是沉重呢。`);
    await era.printAndWait(
      `从摇摇欲坠的巧克力塔中解脱出来的${maru.name}带着略显困扰的微笑坐在了沙发上。`,
    );
    await maru.say_and_wait(`${callname}，3q♪`);
    await me.say_and_wait(`作为报酬能和我多说一点可爱后辈们的事情吗？`);
    await era.printAndWait(
      `${me.actual_name}就这样也顺势坐在了沙发上，正视着${maru.name}的双眼。`,
    );
    await maru.say_and_wait(
      `嗯——既然是${callname}的要求的话。啊，说起来上次有一个看起来很消沉的孩子呢。`,
    );
    await maru.say_and_wait(
      `——虽然只是在选拔赛上失利了，哭啼啼的来找我倾诉。在认真听完${
        maru.sex
      }的讲诉后，虽然只是分享了一些我自己跑步时的心得，不过${
        maru.sex
      }听得很认真的样子。`,
    );
    await maru.say_and_wait(
      `对于某些微妙的地方也是提出了自己的想法，笔记都记了满满一页，拜此所赐，我也收获了不少呢。`,
    );
    await maru.say_and_wait(
      `在离开之前郑重的向我道谢，听说之后也是顺利与训练员签约了♪`,
    );
    await maru.say_and_wait(`每次回想起来，我都很稀饭这种感觉呢⭐`);
    await me.say_and_wait(`真是不错的经历啊。`);
    await maru.say_and_wait(`^_^我也是这么觉得的`);
    await maru.say_and_wait(`说起来，${callname}有收到巧克力吗？`);
    await era.printAndWait(
      `${maru.name}将目光投向了${me.actual_name}的办公桌。`,
    );
    await me.say_and_wait(
      `很遗憾，虽然以前在团队的时候还会有${maru.get_uma_sex_title()}送给我巧克力，不过自从离开团队作为独立训练员努力后，义理巧克力也看不到了。`,
    );
    await maru.say_and_wait(`酱紫可真是遗憾啊。`);
    await maru.say_and_wait(`……嗯`);
    await maru.say_and_wait(`既然这样的话，那我们一起去挑巧克力吧♪`);
    await era.printAndWait(
      `看上去突然想到了一个好方法的${maru.name}的耳朵刷地一下竖了起来，两眼发亮的看向了${me.actual_name}。`,
    );
    await maru.say_and_wait(`就打个酱油的功夫，现在就出发吧！`);
    await me.say_and_wait(`还是算了吧。`, true);
    await era.printAndWait(
      `虽然想这么说出口，不过看着${maru.name}认真考虑店铺的样子。${me.actual_name}想了想最后还是闭上了嘴。`,
    );
    await me.say_and_wait(`如果只是这样出去的话，应该也没关系吧。`, true);
    era.drawLine();
    await maru.say_and_wait(`今天看上去也很精神呢。小塔！`);
    era.printButton(`「小塔吗？很高兴认识${me.name}！」`, 1);
    await era.input();
    await maru.say_and_wait(`那么${callname}坐在副驾驶上吧。`);
    await maru.say_and_wait(
      `小塔的话也会因为能遇到${callname}这样的新朋友感到高兴的。`,
    );
    await me.say_and_wait(`有点兴奋啊。`, true);
    await maru.say_and_wait(`呼呼，小塔似乎也感到很高兴的样子呢♪`);
    await maru.say_and_wait("准备好了吗？Let's go！");
    await me.say_and_wait(`哎？原来这就是跑车车车车吗啊啊啊啊啊。`);
    era.drawLine();
    await maru.say_and_wait(
      `呼——久违的大闹了一场之后，真是有点受不鸟了呢！${callname}也感受到了吗……${
        callname
      }？`,
    );
    era.printButton(
      `「原来这里不是伊甸园吗？三女神大人很高兴认识${me.name}」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `连回应的勇气都已经丧失的一干二净，夹着尾巴逃跑的${me.actual_name}像极了被${maru.get_uma_sex_title()}追赶着的胡萝卜。`,
    );
    await maru.say_and_wait(
      `唔，是不是刺激感太强了呢，${callname}一副生无可恋的样子。`,
    );
    await era.printAndWait(`被留在原地的${maru.name}一个人在自言自语。`);
    new EduEventMarks(4).add('wind');
    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
  } else if (edu_weeks === 24) {
    await print_event_name('训练结束的普通一天', maru);
    await me.say_and_wait(`今天的训练就到这里为止了,辛苦了。`);
    await maru.say_and_wait(`${callname}也辛苦了。`);
    await era.printAndWait(
      `${maru.name}接过从${me.actual_name}手中的毛巾，将额头之上的汗水略微擦拭便交换给了${me.name}。`,
    );
    await me.say_and_wait(
      `按照这样的节奏继续前进的话，之后的朝日杯也有优胜的希望了。`,
    );
    await maru.say_and_wait(
      `不知道在G1级的比赛中又会有什么样的盛况出现呢？真期待呢～`,
    );
    await me.say_and_wait(`${maru.name}觉得奔跑快乐吗？`);
    await era.printAndWait(
      `将毛巾重新拧干之后，从旁边的背包之中取出备用的毛巾，仔细的擦拭着${maru.get_uma_sex_title()}奔跑时凌乱的长发。`,
    );
    await maru.say_and_wait(
      `如果不拿发卡固定住散乱的头发的话在奔跑的时候打到眼睛也是很痛的事情。不小心玩脱了呢。`,
    );
    await maru.say_and_wait(
      `果然还是换个发型转换一下心情比较好吧，${callname}觉得呢？`,
    );
    await me.say_and_wait(`我也这么觉得。`);
    await me.say_and_wait(
      `如果把头发扎起来作成长马尾牢牢固定住的话，也不会影响到奔跑吧。`,
    );
    await me.say_and_wait(
      `而且这样的话，能让大家看到${maru.name}不同的一面，也是不错的选择呢。`,
    );
    await maru.say_and_wait(
      `嗯——到底应该怎么样才好呢？虽然${callname}的建议也不错，不过`,
    );
    await maru.say_and_wait(`啊，好痛。`);
    await me.say_and_wait(`抱歉，这部分的头发缠在一起了。`);
    await maru.say_and_wait(`3q。`);
    await maru.say_and_wait(`今天就和小塔一起享受海风转换一下心情吧♪`);
    await maru.say_and_wait(`${callname}，可以送我到门口吗？`);
    era.printButton(`「一起走吧」`, 1);
    await era.input();
    await era.printAndWait(`\n${me.name}与${maru.name}一同走在黄昏的小径上。`);
    await me.say_and_wait(
      `说起来${maru.name}，一个人住在公寓里上学会不会不太方便。`,
    );
    await era.printAndWait(
      `与其他住在寮中的${maru.get_uma_sex_title()}不同，${maru.name}一直住在学院外的公寓之中。`,
    );
    await era.printAndWait(
      `出于对这份特殊的好奇，${me.name}向${maru.name}寻求着答案。`,
    );
    await maru.say_and_wait(
      `比起学院内的宵禁，住在校外的我说不定更加的自由呢。`,
    );
    await maru.say_and_wait(
      `不过每天需要比其他学生更早起床也算是自由的一部分代价。`,
    );
    await me.say_and_wait(
      `有机会真想在${maru.name}的公寓里住一段时间呢，不知道${maru.name}意下如何？`,
    );
    await maru.say_and_wait(
      `虾米？如果是${callname}的话，说不定会很有趣的样子呢。`,
    );
    await maru.say_and_wait(
      `${callname}不要忘了自己说过的话哦？反悔的话，出来混迟早是要还的。`,
    );
    era.printButton(`「那当然。」`, 1);
    await era.input();
    await maru.say_and_wait(`呵呵～我也很期待呢。`);
    await era.printAndWait(`在闲聊中不知不觉已经到了学院门口。`);
    await maru.say_and_wait(`和${callname}在一起的时间总是这么短暂呢。`);
    await me.say_and_wait(
      `正是因为短暂所以才会加倍珍惜这段幸福的时间呢，对${maru.name}来说这也是不错的回忆吧？`,
    );
    await maru.say_and_wait(`是段愉快的回忆呢，明天见，3166～`);
    await era.printAndWait(
      `伴随着引擎的发动声响起,${maru.name}的背影消失在了视野的角落之中。`,
    );
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 30) {
    digital.name = '皇帝';
    await print_event_name('三女神的孩子们', maru);
    await era.printAndWait(`中庭 三女神像前`);
    await era.printAndWait(
      `远离终日吵吵闹闹的草场与教学楼，此处是${maru.get_uma_sex_title()}们心灵寄托的圣地。`,
    );
    await era.printAndWait(
      `此处供奉着三女神的神像，其名分别为达利阿拉伯，高多芬阿拉伯以及拜耶尔阿拉伯。`,
    );
    await era.printAndWait(`清澈的水流顺着女神们托着的水瓶汇入池中。`);
    await era.printAndWait(`而此处，又迎来了新的客人。`);
    await digital.say_and_wait(`……`);
    await era.printAndWait(`皇帝凝视着三女神像。`);
    await digital.say_and_wait(`还没来吗？`, true);
    await era.printAndWait(
      `虽然以私人的名义邀请了最近看好的${maru.get_uma_sex_title()}前来，不过对方态度却依然暧昧。`,
    );
    await era.printAndWait(
      `是出于对皇帝的威压而恐惧吗，也罢，这样懦弱的${maru.get_uma_sex_title()}不值得托付背后。`,
    );
    await era.printAndWait(`在我等所创造的伊甸园里自由的活下去吧。`);
    await digital.say_and_wait(`那么，也差不多该回去了`);
    await era.printAndWait(`皇帝的话语被朝着中庭前来的脚步声所打断。`);
    era.drawLine();
    era.printButton(`「呃，我是不是来错地方了。」`, 1);
    await era.input();
    await era.printAndWait(
      `不知如何继续话题而陷入混乱，耳朵传来的只有从女神像所托举的瓶中之水顺流而下与水池碰撞飞溅之声。`,
    );
    await era.printAndWait(
      `所幸皇帝并非在意${me.name}的到来，而是将目光看向了女神像。`,
    );
    era.printButton(`「还好还好」`, 1);
    await era.input();
    await me.say_and_wait(`说起来`);
    await era.printAndWait(
      `很久以前，自己还是孩子的时候，独自一人来到神社时，好像也经历过这样的事情。`,
    );
    await era.printAndWait(
      `凝视着三女神的雕像，忽略掉周围的声音，让自己沉浸在回忆之中。`,
    );
    await era.printAndWait(
      `与朋友玩捉迷藏，为了躲开抓捕者，特意躲在了偏僻的角落里。`,
    );
    await era.printAndWait(`然后在等待的过程之中，不小心就这样睡着了。`);
    await era.printAndWait(`于是就这样遇到了三女神大人。`);
    await era.printAndWait(
      `美丽的红色长发让人想起燃烧的火焰，温柔的${
        maru.sex
      }尝试安抚惊慌失措的${me.actual_name}`,
    );
    await era.printAndWait(
      `虽然已经不记得当时安慰的话语了，但那份温柔的感触像是写在了永不褪色的相簿之中的文字一样，被${me.actual_name}铭记着。`,
    );
    await digital.say_and_wait(
      `——所以吾不需要认可，也无需赞同，所谓王者既是身先士卒。`,
    );
    await era.printAndWait(
      `嘈杂的声音打断了${me.name}的思绪，双腿传来的酥麻感拖着${me.name}的意识回到了现实之中。`,
    );
    await me.say_and_wait(`哈～啊。`);
    await era.printAndWait(
      `忍不住打了一个呵欠，回味着这份温暖的余韵，将视线从女神像移向了中庭的另一边。`,
    );
    await era.printAndWait(`似乎是刻意远离了${me.actual_name}谈论着什么。`);
    await me.say_and_wait(`还是回去吧。`, true);
    await maru.say_and_wait(`${callname}？后辈们送了一些胡萝卜过来，今天的话。
    `);
    await era.printAndWait(`${maru.name}堵住了离开中庭最近的道路，而且。`);
    await digital.say_and_wait(`${maru.name}，别来无恙。`);
    await maru.say_and_wait(`小鲁铎今天看上去也很精神的样子呢。`);
    await maru.say_and_wait(`后辈们送了我一点胡萝卜，${me.name}也来尝尝看吧。`);
    await digital.say_and_wait(`不用了。`);
    await maru.say_and_wait(`是吗？真是可惜呢。`);
    await digital.say_and_wait(`之后可以拜托${me.name}送一点过来吗？`);
    await maru.say_and_wait(`当然可以！`);
    await maru.say_and_wait(
      `为了${maru.get_uma_sex_title()}们的幸福拼命努力着的小鲁铎，我觉得很厉害哦。`,
    );
    await maru.say_and_wait(
      `作为挑战者一路努力过来，在赛场上留下了皇帝的威名。`,
    );
    await maru.say_and_wait(
      `像这样不断将没有${maru.get_uma_sex_title()}能做到的预言打破，作为人生来说也是一种幸福吧。`,
    );
    await digital.say_and_wait(`那么${maru.name}觉得幸福吗？`);
    await maru.say_and_wait(
      `如果说幸福的话，像这样在赛场上为可爱的后辈们留下追逐的希望，不也是很幸福的事情吗？`,
    );
    await maru.say_and_wait(
      `在草场之上自由的奔跑，听着后辈们的苦恼并提供建议，我觉得是不粗的选择哦？`,
    );
    await digital.say_and_wait(
      `${maru.get_uma_sex_title()}们的期待可是比想象之中还要沉重的东西呢。`,
    );
    await digital.say_and_wait(
      `若是中途便将粉色的泡泡戳破的话还好，如果一直做着粉红色的梦的话。`,
    );
    await digital.say_and_wait(`总有一天，会遇到自己无法处理的事情。`);
    await digital.say_and_wait(
      `到那时的话，${maru.name}，我期待着${me.name}采取什么方式，怎么跨越这道障碍。`,
    );
    await era.printAndWait(
      `随着铃声的响起，意味着马上就要开始下午的训练。${maru.name}想了想还是沉默了。`,
    );
    await digital.say_and_wait(
      `虽然还想多聊几句，不过办公室还有积攒的工作尚未结束，失礼了。`,
    );
    await era.printAndWait(`说罢，皇帝离开了中庭。`);
    await maru.say_and_wait(`……尽管如此，我也知道的。`);
    await maru.say_and_wait(`……抱歉，${callname}，我想起一点事情。`);
    await era.printAndWait(`${maru.name}露出了忧郁的表情离开了中庭。`);
    await me.say_and_wait(`于是谁也不在了吗？`);
    await me.say_and_wait(`${maru.name}，似乎有什么心事的样子，找机会聊天吧。`);
    await era.printAndWait(`${me.actual_name}离开了中庭。`);
    await era.printAndWait(`于是旅人们怀着不同的心思为了不同的目的前进。`);
    await era.printAndWait(`三女神默默包容了一切。`);
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], undefined) || wait_flag;
  } else if (edu_weeks === 34) {
    await print_event_name('礼物', maru);
    await era.printAndWait(`某天,当${me.name}正在办公室整理文件的时候。`);
    await era.printAndWait(`咚咚咚`);
    era.printButton(`「请进」`, 1);
    await era.input();
    await say_by_passer_by_and_wait(`${maru.get_uma_sex_title()}`, `打扰了。`);
    await era.printAndWait(
      `随着门把手的扭转，看上去像是高中部的${maru.get_uma_sex_title()}走了进来。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `下午好，训练员${me.get_adult_sex_title()}。`,
    );
    era.printButton(`「下午好」`, 1);
    await era.input();
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `我是特雷森学院随处可见的普通${maru.get_uma_sex_title()}之中的一员`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `希望能像丸善前辈一样在赛场上一路胜利，请多指教。`,
    );
    era.printButton(`「请多指教」`, 1);
    await era.input();
    await era.printAndWait(`两人的手握在了一起。\n`);
    era.printButton(`这边有咖啡……不，还是算了。红茶和椰子汁喜欢喝哪种？`, 1);
    await era.input();
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `非常感谢，不过我只是为了送礼物过来的。`,
    );
    await era.printAndWait(`${maru.sex}从口袋中掏出了一个小盒子`);
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `像我们这样的普通${maru.get_uma_sex_title()}，能够被训练员看重，在职业生涯中能够G3胜利已经是非常厉害的事情了。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `大家都只是朝着入着为目标拼命努力。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `尽管如此，能够入着的${maru.get_uma_sex_title()}也是屈指可数，大部分赛${maru.get_uma_sex_title()}都只是在出道战胜利后，就这样一场未胜结束了三年的生涯。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `有的甚至在毕业时，也没遇到能签订专属契约的训练员`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `丸善前辈不关心这些，只是一直鼓励着我们的前进。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `在我们遇到问题的时候，在旁边指点着我们。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `所以，我们一直都很感激丸善前辈。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `所以说，我和朋友们一起制作了这份礼物，想要送给丸善前辈。`,
    );
    era.printButton(
      `「我觉得${maru.name}一定会很高兴的，谢谢${me.name}们」`,
      1,
    );
    await era.input();
    await me.say_and_wait(`从舞台的手上将带有蝴蝶结装饰的小盒子收了下来。`);
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `谢谢${me.name}，训练员${me.get_adult_sex_title()}。`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `在之后的选拔赛中，一定要让所有人都大吃一惊才行！`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `再见了，${maru.name}的训练员${me.get_adult_sex_title()}！`,
    );
    await era.printAndWait(
      `鞠躬之后,${maru.sex}快步走向了门口探头探脑的同伴身旁`,
    );
    await me.say_and_wait(`希望${maru.sex}之后也能够遇到合适的训练员`, true);
    await era.printAndWait(`轻轻关上大门后,${me.name}打开了小盒子。`);
    await era.printAndWait(`里面放着的是由水晶制作的手链。`);
    await me.say_and_wait(`等${maru.name}回来后亲手交给${maru.sex}吧`, true);
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], 0) || wait_flag;
  } else if (edu_weeks === 47) {
    await print_event_name('圣诞节与心跳的回忆', maru);
    await maru.say_and_wait(`Merry Christmas！`);
    await era.printAndWait(`穿着厚厚衣服的${maru.name}出现在了训练室中。`);
    era.printButton(`「圣诞节快乐!要取暖的话，这里放了围炉和橘子。」`, 1);
    await era.input();
    await era.printAndWait(
      `揉了揉疲惫的眼睛，借着和${maru.name}对话的机会稍微放空大脑。`,
    );
    await maru.say_and_wait(`外面比想象中还要寒冷真是受不鸟了。`);
    await era.printAndWait(
      `将身体交给了柔软的沙发，${maru.name}小心的拨开了橘子皮将果肉放入了口中。`,
    );
    await me.say_and_wait(
      `今天的气温已经到零下1°了，天气预报说今天晚上还会下雪。`,
    );
    await era.printAndWait(
      `'下雪吗'这么嘟哝着的${maru.name}又拨开了一个橘子。`,
    );
    await era.printAndWait(
      `一时之间训练室似乎恢复了寂静，只有沙沙的翻阅纸张声音回荡在训练室之中。`,
    );
    await era.printAndWait(
      `将身体深深埋入沙发的怀抱之中，重新翻开了本周时尚杂志的${maru.name}在被发出橙色光的暖炉围绕之下露出了愉悦的表情。`,
    );
    era.drawLine();
    await me.say_and_wait(`这就是最后一份了。`, true);
    await era.printAndWait(`将文件整理到文件夹之中，活动着酸麻的双腿。`);
    await maru.say_and_wait(`${callname}辛苦了，日程表的下一项是什么？`);
    await era.printAndWait(
      `将放松下来的肌肉一瞬间绷紧，重新恢复到平时状态的${maru.name}看着站起来的${me.actual_name}。`,
    );
    await me.say_and_wait(`计划吗？`);
    await era.printAndWait(
      `以前圣诞的时候都是一个人在训练室整理心得笔记的${me.actual_name}。`,
    );
    await me.say_and_wait(`嗯——说的对，`);
    await maru.say_and_wait(`一起出去庆祝吧？`);
    await me.say_and_wait(`在训练室里休息`, true);
    await era.printAndWait(
      `看着露出了期待表情的${maru.name}，${me.actual_name}后半部分硬生生咽了回去。`,
    );
    await maru.say_and_wait(`现在就出发！`);
    await era.printAndWait(`在${maru.name}的热情邀请之下，两人达成了一致。`);
    era.drawLine();
    await era.printAndWait(`在震动的马达声之中，小塔发动了。`);
    await era.printAndWait(
      `黑沉沉的天空，不时吹来的阵阵寒风无情的收割着来往的生灵。`,
    );
    await me.say_and_wait(`阿嚏！`);
    await era.printAndWait(`劲风顺着衣服与肌肤的缝隙之中钻了进去，。`);
    await me.say_and_wait(`好冷啊，但是不久之后还会下雪。`);
    await era.printAndWait(`不禁对之后的行程感到绝望。`);
    await maru.say_and_wait(
      `——说起来，小特${
        maru.sex
      }们成长的比预想之中还要迅速呢，看到后辈们这么努力的样子，连${maru.get_bigger_sibling_sex_title()}我也有些兴奋起来了呢。`,
    );
    await era.printAndWait(
      `想着一定要找个借口抱着${maru.get_uma_sex_title()}取暖，缩着身体忍受着寒冷。`,
    );
    await me.say_and_wait(`出门应该带条围巾的。`, true);
    await maru.say_and_wait(
      `……百货大厦那边推出了圣诞主题的烛光晚餐，一起去尝尝看吧？`,
    );
    await era.printAndWait(`呼啸的寒风声中，${maru.name}的话语似乎远在天边。`);
    await me.say_and_wait(`好冷啊。`, true);
    await maru.say_and_wait(`……比起这个的话，我还是认为，啊，到了！`);
    await era.printAndWait(`不远处就是百货大厦了。`);
    era.drawLine();
    await era.printAndWait([
      maru.get_colored_name(),
      '/',
      me.get_colored_name(),
      '「',
      { content: '干', color: maru.color },
      '杯！」',
    ]);
    await era.printAndWait(
      `在${maru.name}口中的特价餐厅之中，两人举杯庆祝着节日的到来。`,
    );
    await maru.say_and_wait(`虽然现在还不能喝酒……不过，果汁的味道也不错哦♪`);
    era.printButton(`「过不了多久，${maru.name}也能喝酒了。」`, 1);
    await era.input();
    await maru.say_and_wait(
      `到那一天时，${callname}要陪我一起喝到通宵才行呢。`,
    );
    await era.printAndWait(
      `一朵雪花从窗外的天空中落下，然后无数的雪花跟随着它的脚步落到了地面之上。`,
    );
    await me.say_and_wait(`为了那一天的到来，接下来的训练也要努力才行！`);
    await era.printAndWait(
      `冰凉而又美丽的它们像是自然界的精灵一样，随性地从空中落入凡间游玩。`,
    );
    await maru.say_and_wait(`下雪了，真可爱呢。`);
    await era.printAndWait(
      `似乎回忆起了什么，${maru.name}盯着外面的雪花若有所思。`,
    );
    await me.say_and_wait(`${maru.name}喜欢雪吗？`);
    await era.printAndWait(
      `摇晃着早已喝尽的玻璃杯，${maru.get_teen_sex_title()}的思绪似乎回到了遥远的过去。`,
    );
    await maru.say_and_wait(`……啊！抱歉，不小心走神了呢。`);
    await era.printAndWait(
      `似乎才注意到${me.name}的存在一样，慌慌张张回应着${me.name}的${maru.name}露出了可爱的破绽。`,
    );
    era.printButton(`「不，没什么」`, 1);
    era.printButton(`「${maru.name}喜欢雪吗？」`, 2, { disabled: true });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `再问同样的问题，对${maru.name}来说也会很尴尬吧。`,
      );
      await era.printAndWait(`${me.name}决定用其他的话题应付过去。`);
      await era.printAndWait(`晚餐就在这样的良好气氛之中结束了。`);
    } else {
      await maru.say_and_wait(`嗯？雪花吗？`);
      await era.printAndWait(`似乎苦恼了一会，不过${maru.name}还是说了出来。`);
      await maru.say_and_wait(`其实很虾米哦？`);
      await maru.say_and_wait(
        `不如说希望能在早起的时候拉开窗帘就看到雪花落在窗户上的景象呢！`,
      );
      await me.say_and_wait(`为什么露出这么惆怅的神情呢？`);
      await maru.say_and_wait(`${callname}不也是这样的吗？`);
      await era.printAndWait(`没有接过问题，反而抛出了另一个问句。`);
      await maru.say_and_wait(
        `露出了一副苦恼的样子，像是苦苦寻求答案的探索者一样。`,
      );
      await era.printAndWait(`重新把握了节奏的${maru.name}露出了玩味的笑容。`);
      await maru.say_and_wait(`不过，答案其实很简单哦？`);
      await me.say_and_wait(`那么答案是？`);
      await maru.say_and_wait(`不·告·诉·${me.name}⭐`);
      await me.say_and_wait(
        `不对，说话太急切反而让${maru.sex}警戒起来了吗。`,
        true,
      );
      await me.say_and_wait(`只能下次再找机会了。`, true);
      await era.printAndWait(
        `之后又聊了一些有关训练的事情后，愉快的晚餐就这样告一段落了。`,
      );
    }
    era.drawLine({ content: '训练员宿舍门口' });
    await maru.say_and_wait(`886(拜拜喽)！`);
    await maru.say_and_wait(`汗，差点忘了！${callname}，这个送给${me.name}。`);
    await era.printAndWait(
      `从放的满满当当的后座位拿出了一个精美丝带包装的礼物盒。`,
    );
    await me.say_and_wait(`${maru.name}这个是？`);
    await maru.say_and_wait(`这下真的明天见！`);
    await era.printAndWait(
      `${me.actual_name}的话语被引擎的轰鸣声所盖过，只能抱着盒子看着小塔变成越来越小的一个点。`,
    );
    await me.say_and_wait(`总之，先回去吧。`);
    await era.printAndWait(
      `小心捧着作为${maru.name}心意的礼物盒，慢慢回到了房间之中。`,
    );
    await era.printAndWait(
      `扯下金黄色的丝带，轻轻打开礼物盒的顶端，仿佛之中回到了幼年时收到长辈送的礼物一样。`,
    );
    await era.printAndWait(`一条做工精美的围巾以及`);
    await maru.say_and_wait(
      `抱歉呢，虽然也想给${callname}准备更好的，不过现在只有这种牌子了，希望${
        callname
      }不要介意，圣诞节快乐！`,
    );
    await era.printAndWait(`细腻优美的字迹仿佛是在与本人进行对话。`);
    await me.say_and_wait(`3q，${maru.name}。`);
    await era.printAndWait(`不知何时${me.name}也被同化了。`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], 120) || wait_flag;
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('新年的思绪', maru);
    await era.printAndWait(`时间过得飞快，转眼之间又到了新的一年。`);
    await era.printAndWait(
      `与${maru.name}一起经历的酸甜苦辣，如今都化为了美好的回忆。`,
    );
    await era.printAndWait(
      `虽说今天是法定的节假日，不过在训练员宿舍就这么懒散的度过也过于烦闷了。`,
    );
    await era.printAndWait(
      `想着「随便逛逛吧」，脚步迈向的方向却不知不觉又回到了特雷森。`,
    );
    await me.say_and_wait(`既然来都来了，不如去训练室看看吧`);
    await era.printAndWait(`打定主意后，${me.actual_name}走向了训练室。`);
    era.drawLine({ content: '训练室' });
    await era.printAndWait(
      `如果是平时的训练室，总有种「又要上班啊」的烦躁感挥之不去。`,
    );
    await era.printAndWait(
      `但如果是休息日带着「随便看看吧」的心态重新回到了训练室时。`,
    );
    await era.printAndWait(
      `与${maru.name}讨论接下来的训练方针，一起品尝着美味的蛋糕，挤在沙发上全神贯注地看着重赏大赛的录像带。`,
    );
    await era.printAndWait(`一切的一切，都像是发生在昨天的事情一样。`);
    await me.say_and_wait(`时间过得可真快啊。`);
    await era.printAndWait(`望着以往的训练室，却有种格格不入的错觉。`);
    await me.say_and_wait(`太累了吗？`);
    await me.say_and_wait(`好！接下来去天台上吹下风清醒一下吧`, true);
    await me.say_and_wait(
      `……不知道${maru.name}现在在哪里,也许现在正在那里吵吵闹闹的度过吧。`,
    );
    await era.printAndWait(`轻轻关上训练室的大门，为了转换心情走向了天台。`);
    era.drawLine({ content: '天台' });
    await era.printAndWait(
      `很多${maru.get_uma_sex_title()}决定在新年时和同伴或者自己的训练员一起度过,而且利用假期这段时间将去年的烦恼一甩而空`,
    );
    await era.printAndWait(`往日吵吵闹闹的学院现在露出了宁静的一面。`);
    await era.printAndWait(`从天台向下俯瞰,整个特雷森学院都在视线之下`);
    await me.say_and_wait(
      `这个时候大喊一声我是要成为三冠王${maru.get_uma_sex_title()}的男人才符合气氛吧`,
      true,
    );
    await me.say_and_wait(`虽然没有人在这里不过还是太羞耻了`, true);
    await me.say_and_wait(`……`);
    await era.printAndWait(
      `「我要成为配得上${maru.name}的${me.get_phy_sex_title()}！！！」`,
      {
        align: 'center',
        color: me.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    );
    await era.printAndWait(
      `将训练员的身份啊，大人的矜持啊通通抛在了脑后，凭着气势喊出了连自己都被吓了一跳的声音。`,
    );
    await era.printAndWait(
      `打破了禁忌带来的兴奋感让${me.actual_name}满脸通红。`,
    );
    await me.say_and_wait(`真是畅快啊。`);
    await me.say_and_wait(`趁着现在还没人注意到天台，还是快离开吧。\n`);
    await maru.say_and_wait(`哎呀？${callname}？`);
    await era.printAndWait(`野生的${maru.name}出现了！`);
    await me.say_and_wait(`咦咦咦？${maru.name}怎么会在这里？`, true);
    await me.say_and_wait(`哈哈,人生完蛋了`, true);
    await me.say_and_wait(`找个没人的荒岛就这样度过余生吧。`, true);
    era.printButton(`「抱歉，${me.name}认错人了。」`, 1);
    await era.input();
    era.printButton(`「现在的我只是一个非常普通的训练员罢了。」`, 1);
    await era.input();
    await maru.say_and_wait(
      `……啊啦，这位嗯……非常普通的训练员${me.get_adult_sex_title()}。`,
    );
    await maru.say_and_wait(
      `刚才喊的可真有气势，我在楼梯上都听到了那充满热情的声音。`,
    );
    await maru.say_and_wait(`青春真是美好呢。`);
    await maru.say_and_wait(
      `不过，这种话语果然还是要当着当事人的面好好说出来才可以吧？`,
    );
    await maru.say_and_wait(
      `如果是我家的训练员的话，说不定会带着满腔的感情好好阐述出来吧。`,
    );
    await era.printAndWait(
      `因为强烈的羞耻感而感到浑身发热的${me.actual_name}膝下一软，几乎要摔倒。`,
    );
    await me.say_and_wait(`非常抱歉。`, true);

    await era.printAndWait(`${maru.name}只是静静的仰望着天空。`);
    era.printButton(`……不去找小特${maru.sex}们一起去玩吗?`, 1);
    era.printButton(`「可以告诉我${me.name}的想法吗？」`, 1, {
      disabled: true,
    });
    await era.input();
    await era.printAndWait(`${maru.name}心情不错的哼着怀旧的曲子。`);
    await me.say_and_wait(`是感觉到寂寞了吗？`, true);
    era.printButton(`「这么冷的天气为什么特意来天台呢？」`, 1);
    era.printButton(`「${me.name}到底在想什么？」`, 1, { disabled: true });
    await era.input();
    await era.printAndWait(
      `为了得知真实想法的${me.actual_name}顺势就和一起靠在栏杆上聊起来了`,
    );
    await maru.say_and_wait(
      `去年还和小特${
        maru.sex
      }们一起开新年派对的,不过今年说着什么快去陪自己的训练员然后就把我推出来了`,
    );
    era.printButton(`小特${maru.sex}们其实很关心${me.name}呢`, 1);
    await era.input();
    await era.printAndWait(`从${maru.name}身上飘来了芬芳馥郁的气味，`);
    await me.say_and_wait(`是洗发水的味道吗？为什么今天这么香呢`, true);
    await maru.say_and_wait(
      `${callname}也是这么想的吗?${maru.sex}们可是充满着希望的幼苗呢`,
    );
    await maru.say_and_wait(`总有一天会冲破风与雨的束缚,成为参天大树`);
    await era.printAndWait(
      `与${maru.name}充满期盼的话语相比,${maru.sex}看着天空的样子充满了思绪。`,
    );
    era.printButton(`「${maru.name}不想变成参天大树吗？」`, 1);
    await era.input();
    await maru.say_and_wait(`比起大树的话,我更想化为一阵温柔的风呢。`);
    era.printButton(`「风？」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}没有注意到天空中自由自在的风吗`);
    await maru.say_and_wait(
      `如果能化为天空中吹拂的风,我也许能在后辈们苦恼的时候`,
    );
    await maru.say_and_wait(
      `就差一点就能成功的时候，在叹息的时候给予${maru.sex}们鼓励了`,
    );
    await me.say_and_wait(`${maru.name}现在已经做的很好了。`);
    await me.say_and_wait(`现在就尽情享受新年的快乐吧`);
    await maru.say_and_wait(`囧，这样下去真不像我了。`);
    await maru.say_and_wait(`${callname}有什么计划吗？`);
    era.printButton('「今天的话就在草地上练习吧」', 1);
    era.printButton('「一起出去逛街然后把不愉快都一扫而空吧」', 2);
    era.printButton('「今天就在训练室好好休息吧」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait('嗯嗯,在草地上飞驰就会神马都是浮云了！');
      await maru.say_and_wait(`不愧是${callname},真懂我的心呢。`);
      await era.printAndWait(`${maru.name}似乎重新打起了精神`);
      await maru.say_and_wait('OK!那么现在就出发吧');
      await era.printAndWait(
        `${me.get_couple_title()}在草地上训练了一整天然后聚在训练室小小庆祝了一下`,
      );
      wait_flag =
        get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], 0) || wait_flag;
    } else if (ret === 2) {
      await maru.say_and_wait(
        `虾米？${callname}是想和${maru.get_bigger_sibling_sex_title()}我约会吗?`,
      );
      await maru.say_and_wait('真心急呢，不好好计划一下约会的路线可不行呢');
      await maru.say_and_wait('那么就开着小塔');
      era.printButton(`「既然是约会的话不如一起走过去吧」`, 1);
      await era.input();
      await maru.say_and_wait(`嗯——`);
      era.printButton(`「既然是情侣的话一起走过去更加有氛围吧」`, 1);
      await era.input();
      await maru.say_and_wait(`既然${callname}都这么要求了`);
      await maru.say_and_wait(`偶尔散步的话也能体会到不一样的感觉吧⭐`);
      await era.printAndWait(`那么现在就出发`);
      await era.printAndWait(`等回到训练室的时候两人都筋疲力竭的靠在了沙发上`);
      era.println();
      wait_flag =
        get_attr_and_print_in_event(
          4,
          [0, 0, 0, 0, 0],
          0,
          JSON.parse('{"体力":200}'),
        ) || wait_flag;
    } else {
      await maru.say_and_wait(
        `说的也是,这么冷的天还是呆在温暖的训练室里才对吧`,
      );
      era.printButton(`「我把放在训练室里的小零食还有橘子都拿出来吧」`, 1);
      await era.input();
      await maru.say_and_wait(`呵呵,那我来剥橘子。`);
      await era.printAndWait(`于是这天靠着围炉两人气氛不错的度过了。`);
      era.println();
      wait_flag =
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 100) || wait_flag;
    }
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 5) {
    await print_event_name('春冬之交', maru);
    await era.printAndWait(`训练场`);
    await era.printAndWait(
      `赛${maru.get_uma_sex_title()}在这里挥洒着汗水，朝着希望的未来前进。`,
    );
    await era.printAndWait(
      `经历了朝日杯的洗礼后，${me.name}们将目光放在了皋月赏的前哨战——春季锦标上。`,
    );
    await maru.say_and_wait(
      `按照预定计划，转过第三个弯道后，现在是冲刺的时候了！`,
    );
    await maru.say_and_wait(`就这么一口气将油门踩到底!`);
    await era.printAndWait(
      `对于采取逃马策略的赛${maru.get_uma_sex_title()},相比于其他跑法的${maru.get_uma_sex_title()}来说，将大部分的注意力都放在了序盘与中盘之上。`,
    );
    await era.printAndWait(
      `大概是考虑到将序盘与中盘确立起来的优势牢牢固定下来，就这样取得优势。`,
    );
    await era.printAndWait(
      `比赛中，多名采取相同策略的逃马，往往会在序盘与中盘之间发生殊死的较量。`,
    );
    await era.printAndWait(
      `就这样将比赛带到了快节奏模式，打乱采取穿插与追比策略${maru.get_uma_sex_title()}的节奏吧。`,
    );
    await era.printAndWait(
      `然而，就上面尚未提到的先马，则会因为逃马之间的战斗无力在终盘保持原有的速度，就这么将温存的体力一口气爆发出来，取得优势。`,
    );
    await era.printAndWait(`螳螂捕蝉黄雀在后吗？`);
    await era.printAndWait(
      `但是，${maru.name}不是因为选择了逃马策略，而是因为`,
    );
    await me.say_and_wait(
      `不愧是被称为怪物一样的${maru.get_uma_sex_title()}`,
      true,
    );
    await era.printAndWait(
      `因为享受奔跑，而不知不觉之间获得了常人难以企及的速度。`,
    );
    era.printButton(`「辛苦了,稍微休息一下吧。」`, 1);
    await era.input();
    await maru.say_and_wait(`哈……哈啊……呼～`);
    await era.printAndWait(`周围的草地像是台风过境一样被弄得乱七八糟的。`);
    await maru.say_and_wait(`非常感谢♪`);
    await era.printAndWait(
      `接过了${me.name}递过来的毛巾之后，${maru.name}擦拭着额头上的汗水，从湿透的长发传来的香草味钻进了${me.actual_name}的鼻腔之中。`,
    );
    await era.printAndWait(
      `说不定，像这样在奔跑后露出由衷的满足感才是${maru.name}真正的模样。`,
    );
    era.printButton(`「好怀念的香味啊。」`, 1);
    await era.input();
    await era.printAndWait(
      `一边帮助${maru.name}将湿透的头发用毛巾擦干，一边寻找着话题。`,
    );
    await maru.say_and_wait(`${callname}对香味很感兴趣吗？`);
    await me.say_and_wait(`嗯，很好闻的体香味。`);
    await maru.say_and_wait(`呵呵～虽然和体香味很像，不过这其实是香水的味道。`);
    await maru.say_and_wait(`虽然是为了心情变换才选择了这款。`);
    await maru.say_and_wait(`不过从${callname}的反应看来。`);
    await maru.say_and_wait(`似乎很受欢迎的样子。`);
    await maru.say_and_wait(
      `嗯，看上去${maru.get_bigger_sibling_sex_title()}我也一直站在潮流的第一线呢。`,
    );
    await era.printAndWait(`${maru.sex}的心情似乎变得更好了。`);
    await me.say_and_wait(
      `唔，虽然我对潮流的东西也了解不多，不过${maru.name}一直都是相当迷人的角色呢。`,
    );
    await maru.say_and_wait(`就算${callname}这么说，也不会有什么奖励的哦？`);
    era.printButton(`「真的不需要」`, 1);
    era.printButton(`「已经收到了非常美好的回忆了」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`诶——`);
      await maru.say_and_wait(`${callname}用这种语气说的话，稍微有点可爱呢～`);
      await era.printAndWait(`${maru.name}轻轻抚摸着${me.name}的脑袋。`);
      await maru.say_and_wait(`哼哼哼～果然还是这样的${callname}最可爱了♪`);
      event_marks.wind--;
    } else {
      await maru.say_and_wait(`欸——`);
      await era.printAndWait(`${maru.name}带着不可思议的表情看着${me.name}。`);
      await maru.say_and_wait(`训练员……${callname}说这种话可真是太狡猾了。`);
      await maru.say_and_wait(`……${callname}是不是对其他孩子也是这副说辞？`);
      await era.printAndWait(
        `像是遇到了什么头疼的事情，${maru.name}直直的盯着${me.name}看。`,
      );
      await maru.say_and_wait(
        `如果${callname}变成这样放荡的人，${maru.get_bigger_sibling_sex_title()}我也是会伤心的哦？`,
      );
      await me.say_and_wait(`非常抱歉，绝对没有下次了。`);
      await maru.say_and_wait(
        `哈啊，不管怎么样，一定不要对其他的孩子这么说哦，这次的对象是我还好。不，即使是我的话也不要。`,
      );
      event_marks.wind++;
    }
    await me.say_and_wait(`说起来，${maru.name}。`);
    await me.say_and_wait(`虽然有些突兀，不过有个问题困扰了我很久。`);
    await maru.say_and_wait(
      `哎呀，${callname}也有向${maru.get_bigger_sibling_sex_title()}我请教的时刻吗？`,
    );
    await maru.say_and_wait(
      `放心吧，我会好好把我知道的部分都告诉${me.name}的。`,
    );
    await era.printAndWait(
      `${me.name}将擦过汗水的毛巾挤干水分后叠起来放回了包中。`,
    );
    await me.say_and_wait(`${maru.name}一直都很受后辈们的欢迎呢，所以我在想。`);
    await me.say_and_wait(`也许，我说的是也许，${maru.name}，${me.name}`);
    await me.say_and_wait(`${maru.name}的愿望是什么呢？`);
    await maru.say_and_wait(
      `嗯——就像花园里的园丁一样，在布满杂草的土壤之上埋下种子。`,
    );
    await maru.say_and_wait(
      `浇水、松土、然后施肥，不论外界的变化如何，就这么期待着。`,
    );
    await maru.say_and_wait(
      `虽然有时会遇到狂风骤雨、在松土时也会遇到意外难缠的杂草，但是，看着依靠自己顽强毅力破土而出的花朵们。`,
    );
    await maru.say_and_wait(
      `看着美丽的花朵终于绽放的一瞬间，在百感交集之下留下的喜悦泪水，我想，这才是我存在的意义。`,
    );
    await me.say_and_wait(`所以，${maru.name}一直都在默默努力着啊。`);
    await maru.say_and_wait(
      `当然，像这样带着稚嫩的后辈们慢慢前进，等待${
        maru.sex
      }们开花结果的时刻到来。`,
    );
    await maru.say_and_wait(`一切的辛苦都将会得到应分的回报。`);
    await era.printAndWait(
      `没有激动的情感，${maru.name}平静地说出了自己的梦想。`,
    );
    await me.say_and_wait(`……真美啊，${maru.name}。`);
    await me.say_and_wait(`非常感谢，接下来也请多多指教了。`);
    await maru.say_and_wait(`我这边也是，请多多指教了。`);
    await era.printAndWait(
      `虽然冬日的寒冷尚未撤去，但${maru.name}的笑容却令${me.name}感到了温暖。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('情人节', maru);
    await era.printAndWait(
      `从居住的训练员公寓来到特雷森时，发现今天的空气比以往更加甜蜜。`,
    );
    await era.printAndWait(
      `看着特雷森的学生们一大早不像以往一副死气沉沉的样子，两两结队兴奋的讨论着被送礼物之人的表情时。`,
    );
    await era.printAndWait(`才意识到情人节又到了。`);
    await era.printAndWait(
      `虽然思考着如果有${maru.get_uma_sex_title()}送巧克力过来应该怎么应对，不过走到训练室门口却没有任何前来打招呼的人。`,
    );
    await me.say_and_wait(
      `现充啊全部爆炸吧，让FFF团的圣火把${me.name}们都烧尽。`,
      true,
    );
    await era.printAndWait(
      `一边咒骂着，一边却像是逃避着空气中拉丝的甜味一样漫无目的的奔跑着。`,
    );
    await era.printAndWait(`然后，结结实实的撞到了某人的身上。`);
    era.printButton(`「抱歉」`, 1);
    await era.input();
    await era.printAndWait(`虽然只是轻微的碰撞，不过这股气味意外的很熟悉。`);
    await maru.say_and_wait(`哈喽，${callname}？`);
    await me.say_and_wait(`${maru.name}？`);
    await era.printAndWait(
      `看着眼前的${maru.get_teen_sex_title()}与一大袋的巧克力，${me.name}不禁陷入了沉思。`,
    );
    await me.say_and_wait(`今年也是这么多吗？`);
    await maru.say_and_wait(
      `去年新入校的后辈们还有刚刚从特雷森毕业的${maru.get_uma_sex_title()}们，不知不觉就积攒成这样了。`,
    );
    await era.printAndWait(
      `这样下去可不是办法啊，就算两个人把巧克力当成主食来吃……不，一个人吃的话根本吃不完。`,
    );
    await me.say_and_wait(`收也不是不收也不是，这下进退两难了啊。`);
    await era.printAndWait(`有什么办法可以处理掉这些巧克力吗？`);
    await me.say_and_wait(`嘛，将巧克力作为礼物送给一直以来支持着的粉丝们吧。`);
    await me.say_and_wait(`如果是这个数目的话，作为粉丝福利绰绰有余了！`);
    await maru.say_and_wait(`不过场地选在哪里好呢？`);
    await era.printAndWait(`我觉得`);
    era.printButton(`「租一间演出室临时作为场地吧！」`, 1);
    era.printButton(`「干脆直接在商店街来一场街头演出吧！」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`听上去不错的样子，那就这么办吧。`);
      await era.printAndWait(
        `${me.name}向之前联络的有名导演询问了有无推荐的房间，很快便得到了对方的回复。`,
      );
      await era.printAndWait(
        `在马推上宣布了傍晚举办粉丝感谢会的消息后，迅速得到了大量转发。`,
      );
      await era.printAndWait(
        `粉丝感谢会的完美结束暂且不提，很多粉丝们即使没有巧克力也在争着和${maru.name}握手。`,
      );
      await era.printAndWait(
        `看着${maru.name}保持着微笑的姿势站立了3个小时，让${me.name}对偶像一词有了深刻的敬畏。`,
      );
      await era.printAndWait(
        `第二天的时尚杂志上，刊登了名为${maru.name}潮流的头条。`,
      );
    } else {
      await maru.say_and_wait(`街头演出吗？听上去像是飞鹰同学会干的事情呢。`);
      await maru.say_and_wait(`说不定意外的会很有趣呢！`);
      await era.printAndWait(
        `向${falcon.name}请教了如何突击演出，以及如何在手纲${
          me.sex_code === 1 ? '先生' : '小姐'
        }的追捕下迅速逃脱的技巧。`,
      );
      await era.printAndWait(
        `在马推上宣布了傍晚在商业街突击演出的消息后，迅速得到了大量转发。`,
      );
      await era.printAndWait(
        `粉丝感谢会的完美结束暂且不提，很多粉丝们即使没有巧克力也在争着和${maru.name}握手。`,
      );
      await era.printAndWait(
        `看着${maru.name}保持着微笑的姿势站立了3个小时，让${me.name}对偶像一词有了深刻的敬畏。`,
      );
      await era.printAndWait(`之后被热情的店家们免费赠送了许多日用品。`);
    }
    await me.say_and_wait(`终于结束了。`);
    await era.printAndWait(
      `将热情的粉丝们一一回应后，一片狼藉的现场只剩下了${me.name}们两人。`,
    );
    await me.say_and_wait(`辛苦了。真的辛苦了。`);
    await era.printAndWait(`${me.name}带着绝对的敬意看向了${maru.name}。`);
    await era.printAndWait(`在夕阳的照耀下简直像是神祇一样不容侵犯。`);
    await maru.say_and_wait(
      `非常感谢您支持着偶像活动的${maru.name}，今后也请多多支持——啊，是${
        callname
      }。`,
    );
    await era.printAndWait(`一时之间不知该如何回复。`);
    await maru.say_and_wait(`说起来，还有这个♪`);
    await era.printAndWait(`${maru.name}从后台之中拿出了包装精美的巧克力盒。`);
    await maru.say_and_wait(`情人节快乐，${callname}♪`);
    await era.printAndWait(`${me.name}接过了从${maru.name}那里得到的巧克力。`);
    await maru.say_and_wait(`今后也请和${maru.name}一同前行吧，${callname}♪`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) || wait_flag;
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 7) {
    await print_event_name('偶像', maru);
    await era.printAndWait(`训练室`);
    await era.printAndWait(`距离春季锦标还有两个星期。`);
    await era.printAndWait(
      `处理完最后一份文件后，${me.actual_name}放下了手中的笔，长长的呼出了一口气。`,
    );
    await me.say_and_wait(`终于处理完了。`);
    await me.say_and_wait(`但是。`);
    await era.printAndWait(`一直以来都有的一个疑问。`);
    await era.printAndWait(`被死死压制住，不，干脆是不愿意去回忆。`);
    await me.say_and_wait(`${maru.name}。`);
    await era.printAndWait(`园丁。`);
    await me.say_and_wait(`一直习惯于以强者的姿态面临问题。`);
    await era.printAndWait(
      `希望能以教育者的姿态，通过自己的经验尽可能帮助那些可爱的小${maru.get_uma_sex_title()}。`,
    );
    await me.say_and_wait(`但是，作为园丁的道路，不是那么理想的世界。`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `打扰了。`);
    await era.printAndWait(`一位瘦小的${maru.get_uma_sex_title()}走了进来。`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `那个，请问丸善前辈在这里吗？`,
    );
    await me.say_and_wait(
      `${maru.name}有事暂时离开了，${me.name}先在这里坐着稍微休息一下吧。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `这样吗……啊，非常感谢！`,
    );
    await era.printAndWait(`${me.name}将一罐胡萝卜汁放在了沙发桌上。`);
    await era.printAndWait(
      `${me.name}打开了之前看到一半的，${maru.name}参加朝日杯的录像。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `诶，这个是丸善前辈的！`,
    );
    await me.say_and_wait(`${me.name}也喜欢看录像吗？`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `嗯！丸善前辈冲线部分的特写，我反复看了五六遍呢！`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `不如说，通过模仿丸善前辈的摆动方式，说不定我也能顺利在G3上获胜！`,
    );
    await me.say_and_wait(`……原来是这样吗？`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `诶……嗯。因为本格化的时间比较早，所以初中的时候就作为赛${maru.get_uma_sex_title()}参赛了。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `不过，虽然三年过去了，但除了出道战胜利以外，最好的成绩也只有G3的五着。`,
    );
    await era.printAndWait(
      `${maru.get_uma_sex_title()}捧着手中的胡萝卜汁，凝视着里面的橘黄色液体。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `虽然也为此付出了大量的努力，不过几乎没有什么成长。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `只是重复着，重复着同样的行动，就这样浑浑噩噩的度过。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `我也想过，说不定是我的方法出现了问题。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `不过，仅仅只是在脑海里稍微想了一下就这么搁置了。`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `也许，我并不适合作为赛${maru.get_uma_sex_title()}，是时候去找其他方向的出路了。`,
    );
    await era.printAndWait(
      `说完，${maru.get_uma_sex_title()}沉默注视着${me.name}和${maru.name}取得的奖杯。`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(
      `赛${maru.get_uma_sex_title()}界不是那个付出就能得到回报的温柔的世界。`,
    );
    await era.printAndWait(`尽管如此。`);
    era.printButton(`「付出终会有回报的一天」`, 1);
    era.printButton(`「或许尽早退出也是一件好事」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait(`付出终会有回报的一天。`);
      event_marks.wind++;
    } else {
      await me.say_and_wait(`或许尽早退出也是一件好事。`);
      event_marks.wind--;
    }
    await era.printAndWait(
      `心乱如麻，恐怕这个${maru.get_uma_sex_title()}也是这么想的吧。`,
    );
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `……谢谢。`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `啊，抱歉，呆的太久了，既然丸善前辈还没过来的话，那我先告辞了。`,
    );
    await era.printAndWait(
      `将喝完的罐头扔进垃圾桶后，${maru.get_uma_sex_title()}向${me.name}道别。`,
    );
    await me.say_and_wait(`祝${me.name}武运昌隆。`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `嗯，再见。`);
    await era.printAndWait(
      `带着苦涩笑容的${maru.get_uma_sex_title()}轻轻关上了训练室的门。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 9) {
    await print_event_name('殿堂周（因子继承）', maru);
    era.set('cflag:4:节日事件标记', 0);
    await era.printAndWait(`礼堂\n`);
    await era.printAndWait(`殿堂周是特雷森最重要的几个节日之一。`);
    await era.printAndWait(
      `这一天，很多殿堂${maru.get_uma_sex_title()}会来特雷森演讲。`,
    );
    await era.printAndWait(
      `而这些前辈们的经验，对于刚出道/没出道多久的${maru.get_uma_sex_title()}们来说是珍贵的经验。`,
    );
    await era.printAndWait(
      `因其重要性，${me.name}与${maru.name}早早来到了礼堂等待着演讲的开始。`,
    );
    await maru.say_and_wait(
      `如果能在赛场上与前辈们较量，说不定会意外的有趣呢♪`,
    );
    await era.printAndWait(
      `看着演讲台上的殿堂${maru.get_uma_sex_title()}们，${maru.name}露出了期待的表情。`,
    );
    await era.printAndWait(
      `而${me.name}则在一旁快速捕捉着关键词，记录在电脑上。`,
    );
    await say_by_passer_by(
      `殿堂${maru.get_uma_sex_title()}A`,
      `……大家都知道这个世界是由三女神大人所创造的……`,
    );
    await era.printAndWait(
      `台上演讲的殿堂${maru.get_uma_sex_title()}突然提到了三女神大人。`,
    );
    await maru.say_and_wait(`说起来，${callname}知道吗？`);
    await era.printAndWait(`坐在一旁的${maru.name}将视线看向了${me.name}。`);
    await maru.say_and_wait(
      `听说对着中庭的三女神像祈祷，能获得来自其他世界的祝福。`,
    );
    await maru.say_and_wait(`甚至由不可思议的力量发生呢。`);
    await era.printAndWait(
      `四周雷鸣般的掌声响起，演讲的${maru.get_uma_sex_title()}从台上退下，活动进入了下一个阶段。`,
    );
    await era.printAndWait(`趁着这个空挡，${me.name}扭头看向了${maru.name}。`);
    await era.printAndWait(
      `换上了周年纪念衣服的${maru.sex}正等待着${me.name}的回复。`,
    );
    era.printButton(`「我期待着${maru.name}站在讲台上那一刻。」`, 1);
    await era.input();
    await maru.say_and_wait(`虾米？${callname}对我的评价这么高吗？`);
    era.printButton(
      `像这样温柔又成熟的大${maru.get_bigger_sibling_sex_title()}可是相当少见呢。`,
      1,
    );
    await era.input();
    await maru.say_and_wait(`接下来不努力训练可不行呢！`);
    await me.say_and_wait(`一起加油吧！`);
    await era.printAndWait(
      `回到训练室后，${me.name}们坐在一起看录像带直到深夜。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 12) {
    await print_event_name('粉丝感谢祭', maru);
    await era.printAndWait(
      `粉丝感谢祭是为了感谢一直支持赛场上的${maru.get_uma_sex_title()}们的粉丝们而召开的节日。`,
    );
    await era.printAndWait(
      `这一天，特雷森会开放大门，在特雷森就读的学生们会在学生会安排下的主舞台以及几个副舞台进行表演。`,
    );
    await era.printAndWait(
      `作为在赛${maru.get_uma_sex_title()}道路上前进的${maru.get_uma_sex_title()}们，往往会得到更多的关注。`,
    );
    await era.printAndWait(`舞蹈室\n`);
    await maru.say_and_wait('一、二、三、四，游刃有余♪');
    await maru.say_and_wait('五、六、七、八，完全没问题♪');
    await era.printAndWait(`${me.name}看着${maru.name}进行最后一遍排练。`);
    await maru.say_and_wait(`${callname}${me.name}觉得怎么样？`);
    era.printButton(`「好怀念的歌曲」`, 1);
    await era.input();
    await era.printAndWait(
      `世纪初的非主流歌曲在耳边响起，激烈的鼓点与明快的节奏以及伴随着节拍摆动着步伐的${maru.name}。`,
    );
    await era.printAndWait(
      `恍惚之间似乎回到了学生时代，那个下课后便三三两两聚在一起讨论着最新的CD集。`,
    );
    await maru.say_and_wait(
      `${callname}这可是现在最新潮的流行歌曲哦？这样下去的话会跟不上时代的。`,
    );
    await maru.say_and_wait(`差不多该我出场了。`);
    await maru.say_and_wait(`${callname}就在台下好好欣赏吧。`);
    await era.printAndWait(`一部分游客很喜欢这种复古音乐。`);
    await era.printAndWait(
      `${maru.name}带领着这部分游客回到了过去的幻影之中。`,
    );
  } else if (edu_weeks === 47 + 17) {
    await print_event_name('憧憬', maru);
    await era.printAndWait(`训练室\n`);
    await era.printAndWait(
      `厚厚的黑眼圈伴随着挥之不去的咖啡，${me.name}将手中的文件看了一遍又一遍。`,
    );
    await me.say_and_wait(`以现在的姿态去挑战德比的话`);
    await era.printAndWait(`接下来重点加强哪方面的属性？`);
    era.printButton(`「耐力与根性！」`, 1);
    era.printButton(`「速度与力量！」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await me.say_and_wait(`夏季合宿正好把之前一直疏忽的耐力拉起来。`);
    } else {
      await me.say_and_wait(`果然还是速度与力量更好一点吧。`);
    }
    await me.say_and_wait(`啊嚏！`);
    await era.printAndWait(
      `集中的注意力被喷嚏所打断，${me.name}抽了张放在右手边的餐巾纸，然后扔进了满满的垃圾桶中。`,
    );
    await me.say_and_wait(`等处理完这份文件。`, true);
    await era.printAndWait(
      `身体好冷，像是全身埋进了冰块之中，视野也变得模糊了起来。`,
    );
    await era.printAndWait(
      `原以为自己年轻力壮稍微熬了一个星期的夜没关系，却没想到身体先撑不住垮掉了。`,
    );
    await me.say_and_wait(`这该死的身体，感冒药，感冒药在哪里？`);
    await era.printAndWait(
      `打开抽屉，抽出写着退烧药的纸盒子，却发现里面的药早就吃光了。`,
    );
    await me.say_and_wait(`……这样吗？至少趁脑子还能运转的时候。`);
    await era.printAndWait(
      `已经没有什么比这更加糟糕的情况了，心情却变得轻松了起来。`,
    );
    await era.printAndWait(
      `从饮水机倒了一杯温水后，一饮而尽的${me.name}重新坐回了座位。`,
    );
    await me.say_and_wait(`得加快速度了。`);
    await era.printAndWait(
      `牙齿因感受到寒冷而不自觉的上下打架，发出了一连串的「哒哒哒」声，喉咙也变得吞咽困难。`,
    );
    await era.printAndWait(
      `只是为了满足「快点完成这份工作」，「还不能在这里倒下」的这份心情，${me.name}咬牙坚持着。`,
    );
    await me.say_and_wait(`结束了！`);
    await era.printAndWait(
      `敲下最后一个字母后，因为完成带来的满足而放松的精神终于坚持不住。视野开始天旋地转了，大概，自己已经到极限了吧。`,
    );
    await era.printAndWait(`于是${me.name}，满足的倒下了。`);
    await maru.say_and_wait(`${callname}我来打酱油了♪${callname}？`);
    await era.printAndWait(
      `在意识消失之前，${me.name}听到了${maru.name}的声音。`,
    );
    era.drawLine();
    await era.printAndWait(
      `就好好看着我吧，作为在赛${maru.get_uma_sex_title()}生涯上的前辈。`,
    );
    await era.printAndWait(`请好好注视着我吧，就这样被我永远的甩在后面。`);
    await era.printAndWait(
      `请好好祝福着我吧，现在，轮到${me.name}为我喝彩了。`,
    );
    await me.say_and_wait(`这样啊。`);
    await era.printAndWait(
      `大概是某个不知名的${maru.get_uma_sex_title()}心底的声音不小心漏了出来吧。`,
    );
    await maru.say_and_wait(`${callname}？`);
    await era.printAndWait(`似乎有人在呼唤着${me.name}。`);
    await maru.say_and_wait(`${callname}！`);
    await era.printAndWait(`被越来越大的声音呼唤着。`);
    await era.printAndWait(`该醒了。安慰着不愿意醒来的自己。`);
    await era.printAndWait(`于是${me.name}不情不愿的睁开了眼睛。`);
    await maru.say_and_wait(`终于醒了吗？${callname}。`);
    await me.say_and_wait(`这里是？`);
    await era.printAndWait(`环绕四周，似乎是${me.name}生活的地方。`);
    await maru.say_and_wait(`稍微等一下。`);
    await era.printAndWait(`${maru.name}走进了厨房，然后端出了一碗粥。`);
    await maru.say_and_wait(
      `已经煮好一段时间了，如果还是有点烫的话，要和我说哦。`,
    );
    await era.printAndWait(
      `温热的流体送进了${me.name}的口中，昏昏沉沉的大脑只能凭借本能认定这是对自己有利的东西。`,
    );
    era.printButton(`「谢谢。」`, 1);
    era.printButton(`「不用了，我自己来。」`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await era.printAndWait(
        `眼前的身影似乎披上了一层模糊的雾，${me.name}有些看不清${maru.sex}的动作。`,
      );
      await era.printAndWait(`既然这样，还是干脆闭上眼睛吧。`);
      await era.printAndWait(
        `打定主意后，${me.name}闭上眼睛，配合着对方的动作。`,
      );
      await era.printAndWait(
        `每一次调羹与瓷碗之间的碰撞，都会有一股温热的流体进入口腔之中。`,
      );
      await era.printAndWait(
        `温暖的感触，以及熟练且精准的动作。而最重要的则是，那怀念的感觉。不知不觉间，似乎与母亲的面貌慢慢重合在了一起。`,
      );
      event_marks.wind++;
    } else {
      await me.say_and_wait(`不用了，我自己来。`);
      await era.printAndWait(
        `刚想要就这么坐起来，却被更加强而有力的双手制止住了。`,
      );
      await maru.say_and_wait(
        `现在不是逞强的时候，病人应该乖乖躺在床上然后好好休息。`,
      );
      await me.say_and_wait(`${maru.name}……`);
      await era.printAndWait(
        `终于耗尽了最后一丝力气，不得不躺在床上。努力将送入口中的食物吞咽下去。`,
      );
      event_marks.wind--;
    }
    await me.say_and_wait(`……好温暖。`);
    await era.printAndWait(
      `怀念的气息让${me.name}闭上了眼睛，陷入了沉沉的睡眠之中。`,
    );
    await era.printAndWait(`因为恐惧而不断奔波的身体，终于得到了安心。`);
    era.drawLine();
    await me.say_and_wait(`……什么时候？`);
    await era.printAndWait(
      `睁开眼睛，正打算爬起来的时候，看见了在椅子上休息的${maru.get_teen_sex_title()}趴在床上睡着了。`,
    );
    await era.printAndWait(
      `尽力以不会产生颤抖的动作掀开窗帘一角，一丝光芒照在了${me.name}的脸上，天亮了。`,
    );
    await maru.say_and_wait(`唔嗯。原来现在的潮流是这样子吗？`);
    await era.printAndWait(
      `所幸，直立起身体的微微颤动仅仅只是让${
        maru.sex
      }无意识的换了一个姿势，均匀的呼吸声没有被打断。`,
    );
    await me.say_and_wait(`就这样一直等到${maru.sex}醒来吧。`, true);
    await era.printAndWait(`这么想着，${me.name}闭上了眼等待着天亮的时候。`);

    if (ret1 === 1) {
      wait_flag =
        get_attr_and_print_in_event(4, [0, 20, 0, 20, 0], 0) || wait_flag;
    } else {
      wait_flag =
        get_attr_and_print_in_event(4, [20, 0, 20, 0, 0], 0) || wait_flag;
    }
  } else if (edu_weeks === 47 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:4:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('夏季合宿', maru);
    await era.printAndWait(`沙滩`);
    await era.printAndWait(`虽说是理事长的私人沙滩。`);
    await era.printAndWait(`空气却带着一股感到清凉感。`);
    await era.printAndWait(`也许是因为靠近大海的缘故吧，`);
    await era.printAndWait(`海风带着远远的一进一退的波浪声传来了潮湿的气息。`);
    await era.printAndWait(
      `从小塔之上下来，${maru.name}带着满足的感觉微眯着双眼享受着度假的气息——`,
    );
    await me.say_and_wait(`话说，为什么不去乘校车啊。`);
    await era.printAndWait(
      `在${maru.name}强烈要求之下，${me.name}们在小塔的帮助下来到了理事长的私人沙滩。`,
    );
    await maru.say_and_wait(
      `难得来到这片风景优美的沙滩，就酱紫和后辈们一起做公交的话，有些可惜嘛。`,
    );
    await me.say_and_wait(
      `哈？${maru.name}，${me.name}也知道夏季合宿是快速提高能力的捷径吧？`,
    );
    await me.say_and_wait(`所以比平常要更加认真一点吧。`);
    await maru.say_and_wait(
      `我倒。既然${callname}都这么说了，那么${maru.get_bigger_sibling_sex_title()}我不认真一点也不行呢⭐`,
    );
    era.printButton(`「这不是当然的吗？」`, 1);
    await era.input();
    await era.printAndWait(
      `虽然${me.name}也期待着海水与日光浴，还有随处可见的泳装。`,
    );
    await me.say_and_wait(`这样的话，接下来就好好享受青春吧。`);
    await era.printAndWait(`有些人按照身体感觉来走才是更加正确的道路。`);
    await era.printAndWait(`所以最好还是不要干涉吧。`);
    await maru.say_and_wait(
      `像这样感受着海风带来的吹拂，心情也像是冲了云霄一样呢思密达。`,
    );
    await me.say_and_wait(
      `连这种古早流行语都回来了，看来${maru.name}心情真的不错。`,
      true,
    );
    await maru.say_and_wait(`呵呵～${callname}真可爱呢♪`);
    await era.printAndWait(
      `不知何处凑过来的${maru.name}一直盯着${me.name}看。`,
    );
    await maru.say_and_wait(`再怎么夸奖都不会有福利的呦～`);
    await era.printAndWait(
      `预测到了${me.name}接下来打算说的话，${maru.name}狡黠的笑了起来。`,
    );
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 30) {
    await print_event_name('庙会', maru);
    await me.say_and_wait(`真是热闹啊。`);
    await era.printAndWait(
      `与${maru.name}约定好了一起来参加据说非常盛大的庙会，但${me.name}在入口处等了很久也没看见${
        maru.sex
      }的身影。`,
    );
    await era.printAndWait(
      `「是人流太大迷路了吧」正当${me.name}放空大脑看着人群不断汇入灯笼装饰着的庙会，眯着眼着打了一个哈欠时。`,
    );
    await me.say_and_wait(`真是热闹啊。`);
    await era.printAndWait(
      `跟预想之中只是寥寥几个摊位的情况完全不同，从四面八方汇聚的游客与摊位从街道的这头一直蔓延到了街道的另一头。`,
    );
    await say_by_passer_by(`摊主`, `在这里发呆的少年，不来尝尝新鲜的水果吗？`);
    await me.say_and_wait(`诶？`);
    await era.printAndWait(`被流动的人群推赶着，不知不觉站在了水果摊面前。`);
    await say_by_passer_by(`摊主`, `看这样子是第一次来参加庙会的吧？`);
    await era.printAndWait(
      `似乎是因为收益不错心情也变好的缘故，大叔开始涛涛不绝的说了下去。`,
    );
    await say_by_passer_by(
      `摊主`,
      `想想看也是，毕竟这里可是被评为旅游时必逛的庙会之一。`,
    );
    await say_by_passer_by(
      `摊主`,
      `毕竟整个小镇因为靠近这片美丽的沙滩可是吸引了不少的游客前来度假呢。`,
    );
    await say_by_passer_by(
      `摊主`,
      `虽然以前这里不过只是一个交通不便的平平无奇的乡村罢了，不过自从这边的沙滩出名之后，前来参观的游客也变得多了起来。`,
    );
    await say_by_passer_by(
      `摊主`,
      `后来伴随着铁路的开通，人们都哗的一下往这边跑了，最后变成了现在的小镇。`,
    );
    await me.say_and_wait(`那个？请问`);
    await say_by_passer_by(
      `摊主`,
      `哦。看我这记性，说起来${me.name}是因为迷路才站在这里的吧？`,
    );
    await say_by_passer_by(
      `摊主`,
      `也是，因为这个庙会有四个一摸一样的入口嘛，虽然我不懂什么艺术之类的东西，不过每年都能看到与其他人约定在入口处集合而找不到人的乐子。`,
    );
    await era.printAndWait(
      `似乎正讲到兴头之上，看上去因为是小镇的本地居民而自豪的大叔带着洪亮的嗓门介绍着。`,
    );
    await say_by_passer_by(
      `摊主`,
      `顺带一提，如果想走完整个庙会的话，从这里出发一路直走能看到这边的特色演出。`,
    );
    await say_by_passer_by(
      `摊主`,
      `今晚说不定能在观看庆典的人群那里大赚一笔呢，哈哈哈。`,
    );
    await era.printAndWait(`说完最后一句话后，唾沫横飞的大叔终于停下了对话。`);
    await say_by_passer_by(`手机`, `嗡嗡嗡`);
    await era.printAndWait(
      `口袋中的手机发出了震动的声音。在人们大多为了演出而出发的现在，现在会打电话的不言而喻了。`,
    );
    await maru.say_and_wait(`${callname}${me.name}在哪里？`);
    await era.printAndWait(
      `口袋中的手机发出了震动的声音。在人们大多为了演出而出发的现在，现在会打电话的不言而喻了。`,
    );
    await maru.say_and_wait(
      `汗，明明是精心准备了一番，看着手机上拍下的照片赶到入口处的时候，却怎么也没看到${
        callname
      }的样子。`,
    );
    await maru.say_and_wait(
      `虽然自认不会错过${callname}的身影，不过左看右看都找不到${
        callname
      }的身影，${maru.get_bigger_sibling_sex_title()}我还真是有点生无可恋呢><。`,
    );
    await era.printAndWait(
      `是搞错了入口吧，不，说不定大概${me.name}也搞错了？`,
    );
    era.printButton(`「不好意思打扰了。」`, 1);
    await era.input();
    await say_by_passer_by(`摊主`, `嗯？是想问怎么分辨入口吧？`);
    await say_by_passer_by(`摊主`, `也是，毕竟每年都有人问这个问题。`);
    await say_by_passer_by(
      `摊主`,
      `平时的时候很容易分辨的地方，人一多起来看什么就都是一样的了。`,
    );
    await say_by_passer_by(
      `摊主`,
      `${me.name}叫那位朋友从入口处走到第五个摊位，那边有专门负责引导的志愿者。`,
    );
    await era.printAndWait(
      `大叔一边说着一边自然拿出了一份地图指给了${me.name}看。`,
    );
    await say_by_passer_by(
      `摊主`,
      `如果要赶演出的话，走这条路，现在赶过去还来得及。`,
    );
    await era.printAndWait(`虽然因为过于热情而有点奇怪但是很好心的大叔。`);
    await era.printAndWait(
      `向他道谢之后，${me.name}将原话告诉了${maru.name}便匆忙赶了过去。`,
    );
    era.drawLine();
    await era.printAndWait(`快来吧，快来吧，不远处就是盛大的舞台。`);
    await era.printAndWait(`忘却这份烦恼吧，在这份热情的舞动之中翩翩起舞吧。`);
    await era.printAndWait(
      `融化在这份盛大的庆典之中吧，就这样和我一起祈祷${maru.sex}永不落幕吧。`,
    );
    await era.printAndWait(
      `带着泪水与汗水交织而成的喜悦，带着迷茫与痛苦最终释然吧。`,
    );
    await era.printAndWait(
      `就像沙滩之上亮晶晶的沙子一样，${me.name}们的喜悦与解脱最终将被历史所铭记。\n`,
    );
    await me.say_and_wait(`总算到目的地了。`);
    await era.printAndWait(
      `前来观看表演的人群络绎不绝，人们或站或坐，举着饮料或者相机观看着舞台之上的精彩表演。`,
    );
    await era.printAndWait(
      `人们呼出的气息仿佛织成了一张薄薄的网，小孩子们尖叫着在人群之中兴奋的跑来跑去。`,
    );
    await me.say_and_wait(`人可真多啊。`);
    await era.printAndWait(
      `尽管已经相当注意自己的脚下，但还是好几次被疯跑着的孩童差点撞得失去平衡。`,
    );
    await me.say_and_wait(`好热，不过当务之急还是要先找到${maru.name}——`);
    await era.printAndWait(
      `虽然想将自己的定位发给${
        maru.sex
      }，但在这么多的人群中，就连手机的信号也变得断断续续的。`,
    );
    await maru.say_and_wait(`${callname}！`);
    await era.printAndWait(
      `夜幕低垂，舞台的灯光逐一亮起，在场的游客将自身的注意力集中于舞台之上——`,
    );
    await era.printAndWait(
      `除了看着${maru.name}的${me.name}与注视到${me.name}的目光挥着手小跑过来的${maru.name}。`,
    );
    era.printButton(`「能看到${maru.name}真是太好了」`, 1);
    await era.input();
    await era.printAndWait(
      `像是心中的一块大石终于落到了地上，${me.name}长长的呼出了一口气。`,
    );
    await maru.say_and_wait(
      `总算找到${me.name}了，${maru.get_bigger_sibling_sex_title()}我也是松了一口气呢。`,
    );
    await me.say_and_wait(`抱歉，虽然我也想尽快和${maru.name}汇合，不过——`);
    await maru.say_and_wait(
      `嗯～比起道歉的话，接下来${
        callname
      }和我一起看表演才是最能用行动作为补偿吧。`,
    );
    await me.say_and_wait(
      `……直到舞台结束为止，我都不会离开${maru.name}身边的。`,
    );
    await me.say_and_wait(
      `所以，请让我和${me.name}一起创造这份美好的回忆吧。拜托了！`,
    );
    await maru.say_and_wait(`哎呀，这是什么新型告白方式吗？`);
    await maru.say_and_wait(
      `${maru.get_bigger_sibling_sex_title()}我也是稍～微有点心动了呢。`,
    );
    await maru.say_and_wait(`既然这样的话，${callname}就不要离开我了哦？`);
    await era.printAndWait(
      `受邀参加演出的${maru.get_uma_sex_title()}穿着流光溢彩的服饰轻盈的跃上了舞台，灯光一下子全部集中在了${
        maru.sex
      }的身上，此刻的${maru.sex}仿佛变成了这份沙滩之中最为耀眼的存在。`,
    );
    await me.say_and_wait(`${maru.name}？`);
    await era.printAndWait(
      `${
        maru.sex
      }的动作流畅而美丽，让人不禁想起了不远处仍在汹涌奔流着的海浪，随着节奏而悄然出现的民族风伴奏将这位身着深蓝色的服饰的${maru.get_uma_sex_title()}烘托成了于海洋深处悄然来到陆地之上翩翩起舞的精灵。`,
    );
    await me.say_and_wait(`${maru.name}！`);
    await maru.say_and_wait(`嗯？${callname}怎么了？`);
    await era.printAndWait(
      `被稍稍提高了声音的${me.name}而吓到了的${maru.get_teen_sex_title()}看着询问的目光看着${me.name}。`,
    );
    await era.printAndWait(`${me.name}的决定是`);
    era.printButton(`「${maru.name}，请告诉我${me.name}的痛苦与悲伤吧。」`, 1);
    await era.input();
    await maru.say_and_wait(`……`);
    await era.printAndWait(
      `舞台之上的${maru.get_teen_sex_title()}拼尽自己的全力，洒下的汗水汇聚成了一阵又一阵的浪潮起伏。`,
    );
    await era.printAndWait(
      `观众们带着期待的目光，聚精会神的看着在舞台之上闪耀的那个偶像。`,
    );
    await era.printAndWait(
      `而从始至终，${maru.name}都保持着那份令人不安的沉默。`,
    );
    await me.say_and_wait(`恐怕现在就是关键时刻了。`, true);
    await me.say_and_wait(`无论如何都要保持着耐心。`, true);
    await era.printAndWait(
      `台上的${maru.get_teen_sex_title()}，每一次旋转，每一个跳跃，都牢牢的将观众们的内心紧紧抓住。`,
    );
    await era.printAndWait(`观众们屏息等待着那个时刻的到来。`);
    await maru.say_and_wait(`果然，还是瞒不过${callname}吗？`);
    await era.printAndWait(
      `突然，像是平地一声雷响起，观众们爆发出了热烈的掌声与欢呼声。`,
    );
    await era.printAndWait(
      `将带着的微笑面具摘下，${maru.name}露出了悲伤与成功解脱的释然表情看着${me.name}。`,
    );
    await era.printAndWait(
      `就连这份疼痛都已经消失，带着这份几乎要瘫在地上的麻木感，${maru.get_teen_sex_title()}品尝到了不知道是汗水还是泪水的咸味。`,
    );
    await maru.say_and_wait(`……接下来，换个地方说吧？${me.actual_name}？`);
    await era.printAndWait(
      `被散发出的迷人诱香的果实所吸引的无数游客们汇入了这份盛况之中，今夜，才刚刚进入高潮。`,
    );
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], undefined) || wait_flag;
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 31) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:4:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('抉择', maru);
    await era.printAndWait(`训练结束后，${me.name}收到了${maru.name}的纸条。`);
    await maru.say_and_wait(
      `${callname}，来附近的神社一趟，我有话想对${me.name}说。`,
    );
    await era.printAndWait(
      `难道是经典的告白场景吗？收拾到东西后${me.name}迅速出发了。`,
    );
    await era.printAndWait(
      `逆着期待欢愉与忘却的人流，${me.name}们像是散步一样来到了附近的一处神社。`,
    );
    await era.printAndWait(
      `欢乐的余韵尚未散尽，游客们的目光纷纷聚焦在了小镇中心的舞台上，`,
    );
    await era.printAndWait(`要是说偏僻的话，亦是存在比此处更为偏僻的地方，`);
    await era.printAndWait(
      `然而，此处既不因过于幽静而显得恐惧，也不因过于喧嚣而使人感到不安。`,
    );
    await maru.say_and_wait(`三女神大人，请听我诉说。`);
    await era.printAndWait(
      `与投入赛钱箱中的马币之间碰撞的清脆声音同时发生的来自${maru.name}的祈祷。`,
    );
    era.printButton(`「投入马币」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}效仿着${maru.name}的动作，闭上眼睛向着三女神祈祷。`,
    );
    era.printButton(`「三女神大人，请指引痛苦之人吧」`, 1);
    era.printButton(`「三女神大人，请指引迷茫之人吧」`, 2);
    await era.input();
    await era.printAndWait(
      `许下了愿望之后，${me.name}看向了一旁的${maru.get_teen_sex_title()}。`,
    );
    await era.printAndWait(
      `${maru.sex}死死的注视着赛钱箱——不，${
        maru.sex
      }看向了那未知的，遥远的地方。`,
    );
    await me.say_and_wait(`${maru.name}在哭泣吗？`, true);
    await say_by_passer_by(`巫女`, `实在抱歉，今天的姻缘符已经送完了。`);
    await era.printAndWait(
      `少顷，揉着双眼打着哈欠的巫女才从观看表演的人群中姗姗来迟。`,
    );
    await say_by_passer_by(`巫女`, `……如果可以的话，请两位客人收下这个吧。`);
    await era.printAndWait(
      `似乎意识到了什么，巫女从长袖中缝合的小口袋里拿出了护身符。`,
    );
    await me.say_and_wait(`非常感谢。`);
    await say_by_passer_by(`巫女`, `感谢的话语，献给美丽的女神。`);
    await say_by_passer_by(`巫女`, `祝福的话语，献给仁慈的女神。`);
    await say_by_passer_by(`巫女`, `解脱的话语，献给慈爱的女神。`);
    await me.say_and_wait(`解脱吗？`, true);
    await maru.say_and_wait(`祝福吗……三女神大人，谢谢。`, true);
    await say_by_passer_by(`巫女`, `三女神们，请带给这个世界美好与希望吧。`);
    await say_by_passer_by(`巫女`, `可爱的人们，愿三女神与${me.name}们同在。`);
    await era.printAndWait(
      `巫女一边说着祝福的话语一边将护身符递给了${me.name}们。`,
    );
    await era.printAndWait(
      `与迅速从巫女手中接过护符并回礼的${me.name}不同，${maru.name}接过护符之后，放进了随身携带的小包之中。`,
    );
    await era.printAndWait(`随后——`);
    await maru.say_and_wait(`还是瞒不过${callname}呢。`);
    await era.printAndWait(
      `似乎察觉到了气氛的改变，巫女伸出右手指向了一条僻静的小道，随后离开了此处。`,
    );
    await era.printAndWait(
      `木屐与地面碰撞发出哒哒的清脆声音慢慢变得越来越小，渐渐，这里只剩下了远处传来的鼓声与观众欢呼喝彩之声。`,
    );
    await me.say_and_wait(
      `这里只剩下我们两个人了，接下来的话语除了三女神大人，谁也不会听见。`,
    );
    await era.printAndWait(
      `${me.name}看向了${maru.name}的脸庞，而后者因为终于从困扰之中解脱出来而身体微微颤抖。`,
    );
    await maru.say_and_wait(`从哪里说起来比较好呢。实际上，那个晚上我也在场。`);
    await me.say_and_wait(`什么？！`);
    await era.printAndWait(
      `${me.name}的背后涌起了一股寒意，双腿发抖，甚至想要就这么转身逃跑，但是仅存的理性还是告诉了自己，人是不可能跑得过${maru.get_uma_sex_title()}的。`,
    );
    await era.printAndWait(
      `更何况，是作为${maru.get_uma_sex_title()}中的佼佼者，${maru.name}。`,
    );
    await maru.say_and_wait(
      `正如${me.name}所想的那样，那天的${
        callname
      }神色有些古怪，而且视线总是无意识地看向手表。`,
    );
    await maru.say_and_wait(`这个时候，令人讨厌的直觉就这么发动了。`);
    await era.printAndWait(
      `${maru.name}带起了那副${me.name}从未见过的假面，就这么面无表情地诉说着。`,
    );
    await maru.say_and_wait(
      `晚饭后，虽然说回到公寓了，但事实上只是将小塔临时停在了附近的停车场，然后借助脚力回到了特雷森。`,
    );
    await era.printAndWait(
      `背叛者，畜生，罪人，脑海之中不禁浮现出了与${maru.name}定下的约定。`,
    );
    await me.say_and_wait(`我有什么脸面去见${maru.sex}？`, true);
    await era.printAndWait(
      `一想到这个，大脑就一片空白，嘴唇下意识的咬紧，胃里翻江倒海般的——一股恶心感传了出来。`,
    );
    await maru.say_and_wait(
      `虽然${
        callname
      }反侦察意识很强呢，不过再怎么说，警惕起来的${maru.get_uma_sex_title()}可是连最微小的声音都不会放过的。`,
    );
    await maru.say_and_wait(
      `在远远处看到了${
        callname
      }神色慌张的走进了教学楼后，在一楼耐心等到说话声响起便可迅速定位。`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(`${me.name}张了张嘴，什么也说不出来。`);
    await era.printAndWait(
      `度日如年的感觉，想要就此逃跑，却被灌了铅一样的双腿牢牢钉死在了原地。`,
    );
    await maru.say_and_wait(
      `明明，如果${
        callname
      }没同意和我一起去庙会的话，我打算就这样装傻到一切结束呢。`,
    );
    await era.printAndWait(
      `虽然说出的话带着一股轻快感，但一丝笑容都没有出现的${maru.name}紧紧地盯着${me.name}。`,
    );
    await maru.say_and_wait(
      `不过，既然${callname}已经下定决心的话，我也应该回以应有的尊重。`,
    );
    await maru.say_and_wait(`那么，${callname}，现在轮到${me.name}了。`);
    await era.printAndWait(
      `人类远古时期流传下来的恐惧让${me.name}的大脑全速运转，${me.name}的决定是。`,
    );
    era.printButton(`「我不会让步的」`, 1);
    era.printButton(`「对不起」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`……`);
      await era.printAndWait(`${me.name}毫不犹豫的迎上了${maru.name}的双眼。`);
      await maru.say_and_wait(
        `${me.actual_name}，${me.name}最好给我一个满意的答复。`,
      );
      await era.printAndWait(
        `${maru.name}的马耳慢慢向后背去，语气之中也变得急躁起来。`,
      );
      await me.say_and_wait(`踏错一步可能就是万丈深渊了。`);
      await era.printAndWait(
        `强行安下跳得越来越厉害的心脏，冷静得仿佛不是自己一样。`,
      );
      await era.printAndWait(
        `虽然连自己也不太清楚，为什么自己下意识的拒绝了。`,
      );
      await era.printAndWait(
        `但是，${me.name}知道，这个时候绝对不能妥协，${me.name}不是为了来陪${maru.name}过家家，${me.name}必须展现出那份意志。`,
      );
      await era.printAndWait(
        `回到正题，${maru.name}在意的地方是什么？令${
          maru.sex
        }痛苦的除了背叛誓言还有什么？`,
      );
      await me.say_and_wait(
        `我是来把${me.name}从偶像的神座上拽下来的，${maru.name}。`,
      );
      await era.printAndWait(
        `${maru.name}有意无意释放了一点自己的领域，${me.name}体会到了在赛场上的${maru.get_uma_sex_title()}们所感受到了恐惧。`,
      );
      await me.say_and_wait(
        `偶像是什么？被人崇拜，被人寄托了命运，虽然说着为了让其他人看着自己的背影前进，但实际上，${me.name}是如此的傲慢。`,
      );
      await me.say_and_wait(
        `${me.name}真的承受得了那份被无数人寄托了希望的千斤顶吗？`,
      );
      await me.say_and_wait(`尽管是我，我也知道，世界上没有完美无缺的人。`);
      await me.say_and_wait(`只要是人，就一定会犯错，一定会做出错误。`);
      await me.say_and_wait(
        `错误是不可避免的，悲伤、痛苦之后，才更加懂得珍惜。`,
      );
      await me.say_and_wait(`但是${me.name}`);
      await me.say_and_wait(
        `虽然也是作为知心大${maru.get_bigger_sibling_sex_title()}帮助困扰的${maru.get_uma_sex_title()}们。`,
      );
      await me.say_and_wait(
        `但是没有做好善后工作，完全没有意识到${maru.get_uma_sex_title()}们把${me.name}当成了逃避一切问题用的避风港。`,
      );
      await me.say_and_wait(
        `就这样，被${maru.get_uma_sex_title()}擅自寄托了希望，又就这样擅自被认为背叛了的${maru.get_uma_sex_title()}憎恨。`,
      );
      await me.say_and_wait(
        `虽然那些${maru.get_uma_sex_title()}们口口声声说把${me.name}的背影作为偶像看待，在实际行动里却把${me.name}当成神一样崇拜。`,
      );
      await me.say_and_wait(
        `虽然${me.name}不是有意这么做，也从未有这种想法，但是，悲剧就是这么诞生了。`,
      );
      await me.say_and_wait(
        `所以，请从这个神座上下来吧，我不是为了自己而请求，而是因为看到了通向地狱的单程车而拉住${me.name}。`,
      );
      await era.printAndWait(
        `完全不顾${maru.name}的想法，就这样一口气将自己内心挤压下来的想法说了出来。\n`,
      );
      await maru.say_and_wait(
        `那${me.name}的解决方法又在哪里？世界上从来不缺发现问题的人，缺的从来都是能更进一步解决问题的人。`,
      );
      await maru.say_and_wait(`而且，说到底都是${me.name}的一面之辞吧？`);
      await maru.say_and_wait(
        `谁知道这不是${me.name}因为恐惧而胡扯出来的东西？`,
      );
      era.printButton(
        `就像我为了冒被${maru.name}讨厌的风险一样，${me.name}也应该知道自己为什么，是为了何人而冒的风险吧！`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `正打算继续说下去的${maru.name}，被${me.name}的话语所打断。`,
      );
      await me.say_and_wait(
        `我虽然没有这种被后辈们寄托了大量希望与期待的经历，但我也知道，${maru.name}是出于爱而帮助的${
          maru.sex
        }们。`,
      );
      await me.say_and_wait(
        `就是这个宁可粉身碎骨、万劫不复也要帮助${
          maru.sex
        }们的这个名叫爱的东西！`,
      );
      await me.say_and_wait(`所以，我不会阻止${maru.name}践行自己的道路。`);
      await era.printAndWait(
        `这是${me.name}第一次直面领域，但心中有种难以形容的温暖与激情让${me.name}凝视着${
          maru.sex
        }的双眼。`,
      );
      await me.say_and_wait(`内心的悲伤、对于未来的迷茫，可以让我分担一点吗？`);
      await me.say_and_wait(
        `一个人在伸手不见五指的黑暗之中前进，如果有一盏明灯照亮前方的道路就好了。`,
      );
      await me.say_and_wait(
        `请交给我吧，虽然作为训练员只是马马虎虎，但是作为一盏灯我有信心做好。`,
      );
      await me.say_and_wait(`我会一步步，一点点，为他人而死。`);
      await era.printAndWait(
        `然后，${me.name}看着${maru.sex}的气势慢慢的消散，越来越小。`,
      );
      await era.printAndWait(`最后，${maru.name}像是自责一般，叹了口气。`);
      event_marks.wind++;
      wait_flag =
        get_attr_and_print_in_event(4, [20, 20, 20, 20, 20], undefined) ||
        wait_flag;
    } else {
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `像是度过了一年一样漫长，${me.name}被${maru.name}用审视犯人的目光紧紧盯着看。最后，${
          maru.sex
        }收回了目光。`,
      );
      await maru.say_and_wait(`那么，接下来的日子，也请多多指教了♪`);
      await era.printAndWait(
        `像是什么也没发生一样，${maru.sex}带着笑容向${me.name}伸出了手。`,
      );
      await me.say_and_wait(`请多多指教`);
      await era.printAndWait(
        `尽管${maru.sex}依然是那副柔和的语气，但${me.name}知道——`,
      );
      await era.printAndWait(
        `有什么暖洋洋的东西，向着黑暗之中，连同自己的灵魂一起\n`,
      );
      await era.printAndWait(`然后，终于 结束了。`);
      await era.printAndWait(`留下的只有寂静。`);
      event_marks.broken_tears++;
      era.set('flag:强制BE', 4);
    }
  } else if (edu_weeks === 47 + 40) {
    era.set('cflag:4:节日事件标记', 0);
    await print_event_name(`万圣节`, maru);
    await era.printAndWait(`在深海之中苏醒的我，眼前除了黑暗什么也看不见。`);
    await era.printAndWait(
      `意外的是，依然能够自由的呼吸，依然能感受到自己的心跳。`,
    );
    await era.printAndWait(`出口在哪里？我该怎么办？我是不是要死了？`);
    await era.printAndWait(
      `诸如此类的问题徘徊在脑海里，几乎把自己的意识吞没。`,
    );
    await era.printAndWait(`然而，袖口传来了冰凉的摩擦感。`);
    await era.printAndWait(
      `像是强迫我前进一样，我被风带离了深海之中，飞向了天空。`,
    );
    era.printButton(`「唔，又做噩梦了。」`, 1);
    await era.input();
    await era.printAndWait(`从噩梦之中惊醒，才发觉背后已经湿透了。`);
    await me.say_and_wait(`为什么？`, true);
    await era.printAndWait(
      `清晨的阳光透过窗帘洒在了枕头上，在光线的作用下，就连平时忽略不见的灰尘都变得闪耀起来。`,
    );
    await me.say_and_wait(`黑色的海洋，不知何时吹拂的风，某个人的存在。`, true);
    await era.printAndWait(
      `努力回忆着之前支离破碎的片段，心里不知何时觉得这件事很重要，莫名的不安从心底升起。`,
    );
    await me.say_and_wait(`下次还是不看那种B级片了。`, true);
    await era.printAndWait(
      `突然觉得对这种奇怪的事情莫名认真的自己很好笑，摇了摇头后准备穿起衣服。`,
    );
    await maru.say_and_wait(`咚咚咚。`);
    await era.printAndWait(`门口传来了敲门声。`);
    if (era.get('love:4') >= 75) {
      await maru.say_and_wait(`哈喽～${callname}，起来了吗？`);
      await me.say_and_wait(`马上过来。`);
      await me.say_and_wait(`已经习惯在${maru.name}家住下了吗。`, true);
      await era.printAndWait(`叠好被子，穿起衣服就开始准备工作。`);
    } else {
      await maru.say_and_wait(`哈喽～${callname}早上好？`);
      await era.printAndWait(`${maru.name}如往常一样来到了训练室。`);
    }
    await era.printAndWait(`新的一天开始了。`);
    era.drawLine();
    await era.printAndWait(
      `将最后一份文件收进了文件夹之中，今天的日程算是告一段落了。`,
    );
    await maru.say_and_wait(`辛苦了。`);
    await era.printAndWait(`坐在旁边的${maru.name}将咖啡递到了桌上。`);
    await me.say_and_wait(`非常感谢。`);
    await era.printAndWait(
      `不是什么名贵的品牌，只是店铺里常卖的那种速溶咖啡。`,
    );
    await era.printAndWait(
      `虽然之前也品尝过品质更好的咖啡甚至是红茶，不过总是喝不习惯。`,
    );
    await era.printAndWait(
      `最后只能用便利店的咖啡是三女神赋予人类的宝物来安慰自己。`,
    );
    await maru.say_and_wait(`${callname}今晚有什么计划吗？`);
    await era.printAndWait(`伸着懒腰的${maru.name}从沙发上站了起来。`);
    await me.say_and_wait(`计划？`);
    await era.printAndWait(`脑海中快速回忆了一遍，似乎没有疏漏的事情。`);
    await me.say_and_wait(`接下来的话，准备提高耐力的训练吧？`);
    await era.printAndWait(`参加长距离比赛耐力也是很重要的事情。`);
    await maru.say_and_wait(
      `受不鸟了。耐力训练确实也很重要，不过${callname}是不是忘记了什么呢？`,
    );
    await me.say_and_wait(`……？`);
    await maru.say_and_wait(
      `去年约定好了一起去参加万圣游行的事情，${callname}应该还记得吧？`,
    );
    await era.printAndWait(
      `看着一脸疑惑的${me.actual_name}，${maru.name}最终还是说了回来。`,
    );
    await me.say_and_wait(`好像确实说过这件事。`, true);
    await era.printAndWait(
      `翻开手机备忘录，向下滑动了一会才发现，在去年万圣节当晚记录下来了这件事。`,
    );
    await me.say_and_wait(`我还真是健忘啊。`);
    await era.printAndWait(
      `因为遇到了更加重要的事情，所以优先度不高的事情暂时放到了一边吗。`,
    );
    await maru.say_and_wait(`${callname}？`);
    await me.say_and_wait(`一起出发吧。`);
    await era.printAndWait(
      `${me.name}轻轻牵起了${maru.name}的右手，带头离开了训练室。`,
    );
    await maru.say_and_wait(`就酱紫在万圣集会上打个酱油吧♪`);
    await era.printAndWait(
      `${maru.name}清脆的笑声顺着被风吹拂着的发丝，将愉悦的情绪传达到了训练室中。`,
    );
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 48) {
    await print_event_name('圣诞节', maru);
    await era.printAndWait(
      `已经到12月了吗,${me.name}停下手中的笔，看向窗外的雪花.`,
    );
    await era.printAndWait(`特雷森每年这个时期都额外的寒冷啊.`);
    await era.printAndWait(
      `${me.name}摇了摇头,正准备将注意力重新集中在手中的文件时.`,
    );
    await maru.say_and_wait(`哼哼哼♪`);
    await maru.say_and_wait(`哈喽————${callname}。`);
    await era.printAndWait(
      `随着门把手的转动,那位令${me.name}心醉的${maru.get_teen_sex_title()}打开了门.`,
    );
    await maru.say_and_wait(
      `${callname}节日也不松懈呢，${
        era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'
      }偶稀饭这样努力的人哦♪`,
    );
    await era.printAndWait(
      `被突然闯进来的 ${maru.name}吓得笔都掉到地上了，慌慌张张捡起来的${me.name}没好气的回呛着。`,
    );
    era.printButton(`「${maru.name}是打算和我约会吗?」`, 1);
    await era.input();
    await era.printAndWait(`不料，${maru.name}看起来更开心了。`);
    await maru.say_and_wait(
      `呵呵～原来${callname}这么希望和我约会吗?啊啦♪${
        era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'
      }我的魅力真是惊人呢⭐`,
    );
    await maru.say_and_wait(`既然${callname}都邀请我了,那么现在就出发吧！`);
    era.drawLine();
    await maru.say_and_wait(`我倒，和${callname}像这样走在步行道上也不错呢。`);
    era.printButton(`「啊啊……好耀眼」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}与换上了冬装的${maru.name}走在大街上,本就美丽的${
        maru.sex
      }在换上了精心挑选的衣服之后独特的气质深深抓住了${me.name}的心.`,
    );
    await era.printAndWait(
      `游客A:这位是${maru.name}吧?我在电视上看过${maru.sex}的跑步.`,
    );
    await era.printAndWait(
      `游客B:是${maru.name}!我是${me.name}的粉丝!请务必给我签名!`,
    );
    await maru.say_and_wait(`哎呀,原来我已经这么出名了吗?`);
    await era.printAndWait(`不妙,好像越来越多的人注意到${maru.sex}的到来了`);
    await era.printAndWait(`${maru.name}的魅力似乎也将无关人员也牵扯进来了,`);
    era.printButton(
      `(才不能让${me.get_couple_title()}打扰和${maru.name}共处的时光呢)`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `${me.name}握紧${maru.name}逐渐温暖起来的小手，加快步伐试图甩开那些追星的粉丝们`,
    );
    await maru.say_and_wait(`……呵呵♪`);
    await era.printAndWait(
      `${me.get_couple_title()}好不容易才甩开了紧紧追在后面的粉丝群后,才发觉自己来到了市中心公园`,
    );
    await era.printAndWait(
      `比起上气不接下气的${me.name},身为赛${maru.get_uma_sex_title()}的${
        maru.sex
      }似乎连呼吸都没有打乱节奏.`,
    );
    await era.printAndWait(`————比起平时的训练,这连开胃小菜都算不上.`);
    await me.say_and_wait(`呼……呼……呼啊,总算甩开他们了吧`, true);
    await maru.say_and_wait(`${callname},这里好像很安静呢.`);
    await era.printAndWait(
      `相互交织的led灯缠绕在道路两旁的树木上,从${me.get_couple_title()}的身后向前方无限延伸.`,
    );
    await era.printAndWait(
      `彩灯照亮了圣诞之夜,也为12月的寒风带来了一丝温暖和光明.`,
    );
    era.printButton(`「是啊,这里真是一个约会的好地方啊」`, 1);
    await era.input();
    await maru.say_and_wait(
      `平安夜的话,训练员${me.get_adult_sex_title()}♪ …… 不想和最喜欢的人一起分享慢慢流逝的时光吗?`,
    );
    await me.say_and_wait(`都说到这份上了，再不向前踏出这一步那就太失礼了！`);
    await maru.say_and_wait(`哼哼～所以${callname}的回答是?`);
    era.printButton(`${maru.name}${me.get_adult_sex_title()},请和我约会!`, 1);
    await era.input();

    await maru.say_and_wait(
      `啊啦～${callname}可真有勇气呢,虽然我也想就这么顺着气势答应下来,不过————`,
    );
    await era.printAndWait(`在刚刚的奔跑中${me.name}的头发变得乱糟糟的`);
    await maru.say_and_wait(
      `${callname}的样子可真可爱呢,与其约会不如先把头发梳理一下吧`,
    );
    era.printButton(`「「啊hao」」`, 1);
    await era.input();

    await era.printAndWait(
      `还没有等${me.name}回复${maru.name}就从自己的挎包中取出了梳子`,
    );
    await maru.say_and_wait(`${callname}把头低下来`);
    await era.printAndWait(`${me.name}乖乖顺从${maru.name}的意图将头低了下来.`);
    await maru.say_and_wait(
      `嗯……${me.name}的头发有些干燥呢,${callname}真是辛苦了.`,
    );
    await era.printAndWait(
      `${maru.sex}尽可能控制住力度温柔的梳理着${
        me.name
      }的头发,那温暖而感怀的气息让${
        me.name
      }回忆起了小时候在草地上晒太阳的气息.`,
    );
    await maru.say_and_wait(
      `……这样的话就差不多了♪那么,${callname},今天的约会就还请多多指教了.`,
    );
    era.printButton(`「「我这边也是请多多指教了」」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}紧紧地握住了${maru.name}的左手,慢慢地享受着着片刻的甜蜜时光.`,
    );
    await maru.say_and_wait(`话说回来,这里似乎是本周最受欢迎的情侣打卡圣地呢.`);
    era.printButton(`「「难怪一路上都是成双成对的情侣呢」」`, 1);
    await era.input();

    await maru.say_and_wait(`呵呵♪下次圣诞的话我们也来这里看风景吧.`);
    await maru.say_and_wait(`${callname},那个时候，风景一定会比现在还要美丽。`);
    await era.printAndWait(
      `12月的寒风仿佛见证了${me.name}和${maru.name}之间的亲密关系.`,
    );

    if (
      event_marks.wind === 15 &&
      event_marks.sister_annoyance === 2 &&
      event_marks.girls_blue === 3
    ) {
      new EduEventMarks(4).add('good_end');
    } else if (
      event_marks.wind >= 10 &&
      event_marks.wind < 15 &&
      event_marks.sister_annoyance === 2 &&
      event_marks.girls_blue === 3
    ) {
      new EduEventMarks(4).add('true_end');
    }
    era.set('cflag:4:节日事件标记', 0);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], undefined) || wait_flag;
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('情人节', maru);
    await maru.say_and_wait(`给，这是${callname}的那份。`);
    await era.printAndWait(
      `在${me.name}的建议下，今年的情人节${me.name}们决定在训练室里独自两人举办派对。`,
    );
    era.printButton(`「谢谢」`, 1);
    await era.input();
    await era.printAndWait(
      `轻轻解开作为装饰的丝带，将手提包型的巧克力盒打开。`,
    );
    await era.printAndWait(
      `装满了液体巧克力的郁金香杯，以奶油为夹层，上层则是一层厚厚的草莓汁，以及作为点缀的樱桃、薄荷叶与桑葚。`,
    );
    await era.printAndWait(
      `系在杯肚上的黑色蝴蝶结散发着若有若无的粉红色背景。`,
    );
    await maru.say_and_wait(
      `之前一直探索着为了什么而奔跑，而现在奔跑的意义又多了一个。`,
    );
    await maru.say_and_wait(`接下来也要一直支持我哦？${callname}`);
    era.printButton(`「那我就心怀感激的收下了,谢谢${me.name}${maru.name}」`, 1);
    await era.input();
    await maru.say_and_wait(
      `啊，对了!我听小特${maru.sex}们说百货大楼有家店铺情人节的时候如果双方是情侣的话拍照打卡可以打六折呢.`,
    );
    await era.printAndWait(`${callname}有兴趣吗?`);
    era.printButton(`「没问题」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}和${maru.name}来到了百货大楼,在搜素了一点时间后看到了那家店铺.`,
    );
    await era.printAndWait(
      `可能是什么本周的打卡圣地吧,门口排起了长队,看这样子似乎都是情侣.`,
    );
    await maru.say_and_wait(
      `好多人啊,小特${maru.sex}们果然没有说错呢,应该就是这家了`,
    );
    await era.printAndWait(`那么我们也去排队吧.`);
    await era.printAndWait(
      `${maru.name}挽住${me.name}的胳膊，混入了情侣之中。`,
    );
    await era.printAndWait(`服务员:两位客人是打算购买情侣特惠套餐吗?`);
    await era.printAndWait(
      `服务员:不过因为听说这里有优惠的原因,有很多贪小便宜的顾客过来,导致真正想要买这份套餐的情侣反而买不到呢`,
    );
    await era.printAndWait(
      `服务员:我们也很头疼呢,不过最后店主想到了一个好主意.`,
    );
    await era.printAndWait(`服务员:请二位来一个浪漫的kiss吧.`);
    era.printButton(`「k..kiss?!」`, 1);
    await era.input();

    await era.printAndWait(
      `服务员:接吻不是很浪漫的事情吗?不仅可以表达您对伴侣的爱意,那些贪图小便宜的人听到要接吻也纷纷逃跑了呢.`,
    );
    await era.printAndWait(`服务员:如果是情侣的话没有什么好害羞的吧.`);
    await era.printAndWait(
      `服务员锐利的视线让${me.name}压力越来越大,${me.name}看向${
        maru.name
      }，虽然${maru.sex}强装着镇定,不过剧烈摆动的尾巴还是出卖了${maru.sex}.`,
    );
    era.printButton(`「只有这么办了」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}？`);
    await era.printAndWait(
      `${me.name}搂住了${maru.name}的腰,轻抚${
        maru.sex
      }的脸庞,然后心一横亲了过去.`,
    );
    await era.printAndWait(
      `先是试探性的轻吻,随着气氛的不断高涨${me.name}也加快了速度,炽热的爱意最后化为了重重地深吻.`,
    );
    await era.printAndWait(
      `${maru.sex}的嘴唇仿佛散发着苹果的芳香,吸引着采撷者的前来.${
        me.name
      }让自己的舌头探进了${maru.sex}的口腔,仔细地探求着每一寸的空间`,
    );
    await era.printAndWait(
      `每当${me.name}想碰碰${maru.sex}的舌头时,${
        maru.sex
      }不好意思退回去的样子却更加刺激了${me.name}的情欲.`,
    );
    await era.printAndWait(`不可以再继续下去了,但${me.name}的动作却无法停下.`);
    await era.printAndWait(
      `在大脑因剧烈的刺激而一片空白时,${me.name}只想将这一刻化为永恒,${me.name}感到了幸福.`,
    );
    await maru.say_and_wait(`……${callname}`);
    await era.printAndWait(
      `服务员:呜啊,还真是炽热的吻,那么快请进,后面的顾客等不及了.`,
    );
    await era.printAndWait(
      `无暇顾及后面的顾客,${me.name}轻捧着${
        maru.sex
      }的脸颊,仿佛是世间唯一的至宝.`,
    );
    await era.printAndWait(
      `${maru.sex}的脸颊彻底变得通红,剧烈的心跳通过二人的近距离接触而传到了${
        me.name
      }的身上.`,
    );
    await era.printAndWait(
      `${me.name}握住了${maru.sex}的手,走向了空出来的座位.`,
    );
    await maru.say_and_wait(`……`);
    await era.printAndWait(
      `二人沉默着品尝同一份巴菲,颤抖的手臂暗示了主人的不平静`,
    );
    await era.printAndWait(
      `接下来该怎么道歉?${
        maru.sex
      }会不会就此与我断绝关系?恐惧与喜悦在${me.name}的脑海交锋,最后留下的却是`,
    );
    era.printButton(
      `「${maru.name}是否喜欢我,这没关系，但我喜欢${maru.sex}」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `在经过漫长的折磨后,这份巴菲终于见底了.${me.get_couple_title()}沉默着离开了店铺,走在大街上，掠过河提，最后回到了训练室.`,
    );
    await maru.say_and_wait(`呐,${callname}。`);
    await era.printAndWait(`突然停下脚步的${maru.name}，抱住了${me.name}。`);
    await era.printAndWait(`嘴唇传来的湿润感觉，像是波纹一样扩散开来。`);
    await maru.say_and_wait(`接下来也请多指教❤`);
    await era.printAndWait(
      `从最初的错愕之中恢复过来的${me.name}，看着努力维持着大人充裕的${maru.name}。`,
    );
    await era.printAndWait(
      `对这副模样的${maru.name}感到好笑，却又觉得这样的${maru.sex_code - 1 ? '她' : '他'}实在可爱，像是丝线交织而成的丝绸轻轻铺在了心上。`,
    );
    era.printButton(`「心情真是复杂呢。」`, 1);
    await era.input();
    await era.printAndWait(`在星空与霓虹灯的照耀下，两人的手紧紧握在了一起。`);
    era.set('cflag:4:节日事件标记', 0);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], undefined) || wait_flag;
  } else if (edu_weeks === 95 + 14) {
    // 粉丝感谢祭是四月第二周，不是二月第二周
    await print_event_name('粉丝感谢祭', maru);
    await era.printAndWait(
      `今天是粉丝感谢祭,是${maru.get_uma_sex_title()}们为感谢粉丝们的支持进行表演的日子.`,
    );
    await era.printAndWait(
      `特雷森学院的各个地方都举行着由${maru.get_uma_sex_title()}准备的活动.`,
    );
    await era.printAndWait(
      `难得空闲下来的${me.name}也趁着这个机会到处走动,充分放松自己积累下来的压力.`,
    );
    await era.printAndWait(
      `${maru.name},作为${
        me.name
      }的担当${maru.get_uma_sex_title()},现在正观看着后辈们的表演.`,
    );
    await era.printAndWait(
      `听到来者的脚步声,下意识扭头望去,向${me.name}露出了温柔的微笑.`,
    );
    await maru.say_and_wait(
      `${callname}也是来看${maru.get_uma_sex_title()}们的表演吗?`,
    );
    era.printButton(`「点头」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}在${
        maru.name
      }身边站定,看着眼前舞台上的${maru.get_uma_sex_title()}们努力着展现着自己最美好的一面.`,
    );
    await maru.say_and_wait(
      `后辈们看上去都活力四射的样子呢,${callname}也是这么想的吗?`,
    );
    era.printButton(
      `「${maru.sex}们都是因为憧憬着${maru.name},希望能超越${
        maru.sex
      }的背影所以才拼命努力的」`,
      1,
    );
    await era.input();
    await maru.say_and_wait(`哎呀♪${callname}每次都能带给我意外的惊喜呢.`);
    await maru.say_and_wait(`那么,${callname},想看我上台表演吗?`);
    await era.printAndWait(
      `${maru.name}的尾巴不知不觉间缠绕住了${me.name}的大腿,所幸周围的观众被舞台之上的气氛所点燃没有注意到这边的小小动作.`,
    );
    await era.printAndWait(
      `${maru.name}似乎是察觉到了${me.name}的软肋,更加肆无忌惮的将整个身体贴在了${me.name}的手臂上.`,
    );
    era.printButton(`「${maru.name}」`, 1);
    await era.input();
    await era.printAndWait(
      `因为害怕两人之间传出不好的传闻而影响到${
        maru.sex
      }的前途还有${me.name}被解雇的未来,${me.name}的身体瞬间僵直了.`,
    );
    await maru.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训·练·员·酱' : '训·练·员·君'}♪`,
    );
    await era.printAndWait(
      `${me.name}似乎觉得周围的目光都在看着${me.name},${me.name}开始觉得口干舌燥.`,
    );
    await maru.say_and_wait(
      `${
        callname
      }的这种反应看起来也很可爱呢.虽然很可惜,不过差不多轮到我上台演出了,请不要将视线从我这里移开哦.`,
    );
    await era.printAndWait(`再回神时${maru.sex}已经站在舞台之上了.`);
    await era.printAndWait(
      `${me.name}连忙向周围的游客借了一份荧光棒,跟随着粉丝的浪潮开始舞动起来.`,
    );
    await maru.say_and_wait(
      `享受着风,追逐着风的赛${maru.get_uma_sex_title()},${
        maru.name
      },现在将向粉丝还有后辈们献上我的歌曲.`,
    );
    await era.printAndWait(`唱着古早乐曲的今日之星，`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], undefined) || wait_flag;
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:4:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季合宿开始', maru);
    await era.printAndWait(
      `第三年的夏季合宿现在正式开始，带着与去年截然不同的心态，${me.name}和${maru.name}一起走向了沙滩.`,
    );
    await maru.say_and_wait(`呵呵♪今年也是把其他人都甩在身后了呢,${callname}.`);
    await era.printAndWait(
      `身边的爱马依然喜欢抢在其他${maru.get_uma_sex_title()}的前头到达沙滩。`,
    );
    await me.say_and_wait(`${maru.name}看上去心情不错啊`);
    await maru.say_and_wait(
      `啊啦,这不是当然的嘛，必须要把去年没有好好享受的青春今年全部弥补回来嘛.`,
    );
    await era.printAndWait(
      `${maru.name}似乎准备了黑色的泳装,配合${
        maru.sex
      }的身材似乎显得额外充满了魅力.`,
    );
    await me.say_and_wait(
      `平时的${maru.name}一直喜欢睡懒觉，今天反而是${maru.sex}来叫我起床的.`,
    );
    await maru.say_and_wait(
      `总之现在是好好享受集训时光的时间了!不过还是先把防晒霜涂好比较重要吧?`,
    );
    await maru.say_and_wait(
      `${callname}可以麻烦${
        me.name
      }帮我涂下防晒霜吗?今年的夏天比预想之中还要炎热呢。`,
    );
    era.printButton(`「我马上就过来」`, 1);
    await era.input();
    await era.printAndWait(`夏季集训就在这种轻松的气氛中开始了。`);
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], undefined) || wait_flag;
  } else if (edu_weeks === 95 + 30) {
    // 第三年庙会 应该以更轻松的感觉，漫步在小镇之中
    await print_event_name('庙会', maru);
    // 故地重游，心绪万千
    era.set('cflag:4:节日事件标记', 0);
    await era.printAndWait(
      `去年这个时候，第一次领略了小镇的热情。同样也在这里，命运的轨迹就此改变。`,
    );
    await era.printAndWait(
      `青涩的自我，与手缝之中悄然流逝的时间化为了一路前行留下的痕迹。`,
    );
    await era.printAndWait(
      `看着再次拜访的小镇，心中涌动的情感比初次来访时更加复杂。`,
    );
    await era.printAndWait(
      `因为搞错了入口不得不重新确定方位，好心的店主送来的地图，盛大的节日演出。`,
    );
    await era.printAndWait(
      `跟随着人流向着记忆中的地方前进，往昔的记忆便如涓涓细流缓缓涌现。`,
    );
    await maru.say_and_wait(`${callname}。`);
    await era.printAndWait(`熟悉的身影于门口伫立。`);
    era.printButton(`「抱歉让${me.name}久等了。」`, 1);
    await era.input();
    await maru.say_and_wait(`我也是刚刚才到。`);
    await maru.say_and_wait(
      `捞金鱼、金苹糖、姻缘护身符，最后还有舞台之上的表演，这次要尽情的享受才不复此行！`,
    );
    era.printButton(`「一起出发吧」`, 1);
    await era.input();
    await era.printAndWait(`两人的手紧紧牵在了一起。`);
    await maru.say_and_wait(`今后也要像这样一直在我身边哦？`);
    await era.printAndWait(` ${maru.name}望了${me.name}一眼。`);
    await era.printAndWait(
      `${me.name}从牵着手的姿势转到了略微强硬的拉着对方前进。`,
    );
    await era.printAndWait(
      `没有预想之中的抱怨，${me.name}只是感到从手掌传来的力度越来越大，就像是被老虎钳狠狠夹住一样。`,
    );
    await era.printAndWait(
      `感到吃痛的${me.name}下意识望向了造成痛苦的根源，而 ${maru.name}露出了狡黠的笑容。`,
    );
    await era.printAndWait(`将作为大人的矜持彻底抛开，像小孩子一样胡闹玩耍。`);
    await era.printAndWait(`意识到这样下去一定会输的${me.name}，加快了脚步。`);
    await era.printAndWait(
      ` ${maru.name}的眼神之中吐露出的「想要跟现役的赛${maru.get_uma_sex_title()}比赛跑步，${me.name}还要差了一百年呢」，以及因此故作充裕的将${me.name}的手放开，准备以优雅的脚步将${me.name}超越。`,
    );
    await era.printAndWait(
      `——但${me.name}轻轻环住了${maru.sex_code - 1 ? '她' : '他'}的腰肢，带着充满爱意的眼神直直的盯着对方看去。`,
    );
    await maru.say_and_wait(
      `诶？训练员…… ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，旁边还有人。`,
    );
    await era.printAndWait(
      `周围的人虽然注意到了${me.name}们的亲密举动，但只当是热恋中的情侣所做的调情，偶尔也有认出了双方的游客，在注意到了什么之后便加快了脚步离开。`,
    );
    await era.printAndWait(`一时之间，周围只剩下了${me.name}们两人。`);
    await maru.say_and_wait(
      `哎呀哎呀，就像是少女漫画之中的跑出来的故事呢， ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}已经不是那种16-17岁正处于青春期的小朋友了哦？`,
    );
    await era.printAndWait(
      `在这种暧昧的气氛中处于劣势的 ${maru.name}正试图重新占据主动权。`,
    );
    era.printButton(`「小孩又如何呢？」`, 1);
    await era.input();
    await era.printAndWait(
      `于是${me.name}轻轻在${maru.sex_code - 1 ? '她' : '他'}的额头上轻啄一下，带着一种无法形容的畅快感看着对方，活像是抢到了玩具那副洋洋自得的神情。`,
    );
    await maru.say_and_wait(
      `——是啊，既然 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}说出这种话来，想必已经做好了觉悟吧。`,
    );
    await era.printAndWait(
      `占了便宜正准备就此抽身的${me.name}突然重心不稳，坏绕着 ${maru.name}的手也随之一松。`,
    );
    await era.printAndWait(
      `随后便感觉到左耳所传来的甘甜的吐息声以及随之而来传导到全身的电流感。`,
    );
    await maru.say_and_wait(`——`);
    await era.printAndWait(
      `虽然还是平时的那种熟悉感，但在${me.name}听来却带着一缕恼怒与得意感。`,
    );
    await era.printAndWait(
      ` ${maru.name}的手指在${me.name}的胸口轻轻划过，修长的指甲恰到好处的既没有划破肌肤，${me.name}的身体因为恐惧与兴奋而微微颤抖。`,
    );
    era.printButton(`「接下来还有烟火晚会吧？如果不赶快过去的话，」`, 1);
    await era.input();
    await era.printAndWait(`「还不够」， ${maru.name}的手指依然没有停止动作。`);
    era.printButton(
      `「我想为了弥补去年的遗憾与 ${maru.name}一同拥有这段美好的回忆！」`,
      1,
    );
    await era.input();
    await era.printAndWait(` ${maru.name}终于停止了再进一步的动作。`);
    await maru.say_and_wait(`——抱歉了，姐姐我也是失态了呢。`);
    await era.printAndWait(
      `语气中没有一丝忏悔感，脸上却露出了只有充分享受了比赛后才会有的满足感。`,
    );
    await maru.say_and_wait(
      `一想到接下来要和 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}所共同创造出的回忆以及在此之上所获得的更加强烈的满足感，姐姐我是不是有些贪得无厌了呢？`,
    );
    await maru.say_and_wait(
      `嗯——消极的情绪可是NG的！接下来的每分每秒留下令人深刻的回忆，对生命都是一种可耻的浪费！`,
    );
    await era.printAndWait(
      `祭典上传来的祭典音乐顺着风的载体传达到了${me.name}们耳边。`,
    );
    await era.printAndWait(`在天空中绽放的艳红色花朵预示着祭典最后的开始。`);
    await era.printAndWait(`然后 ${maru.name}挽住了${me.name}的胳膊。`);
    await era.printAndWait(`随后两人加快了脚步。`);
    await era.printAndWait(
      `最后${me.name}与 ${maru.name}享受着这份恋人之间独有的，无法衡量的氛围。`,
    );
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
  } else if (edu_weeks === 95 + 40) {
    await print_event_name('不给糖就捣蛋！', maru);
    await maru.say_and_wait(`${callname}，起床了！`);
    await era.printAndWait(`耳边似乎传来了熟悉的声音.`);
    era.printButton(`「唔，再睡一会」`, 1);
    await era.input();
    await maru.say_and_wait(`马上就要九点了呢！`);
    era.printButton(`「什么九？嗯！」`, 1);
    await era.input();
    await era.printAndWait(
      `突然意识到即将发生什么的${me.actual_name}从床上瞬间弹起，紧紧忙忙的穿起衣服。`,
    );
    await me.say_and_wait(`这下要被手纲${me.get_adult_sex_title()}说教了。`);
    await maru.say_and_wait(`呵呵～`);
    await era.printAndWait(
      `看着${me.name}慌慌张张起床的样子，${maru.name}轻轻的笑了。`,
    );
    await me.say_and_wait(`闹钟怎么没响？欸？`);
    await era.printAndWait(`手机上显示的时间为7点，距离上班还有1个小时。`);
    await me.say_and_wait(`${maru.name}！`);
    await maru.say_and_wait(`不给糖就捣蛋！`);
    await me.say_and_wait(`唔——万圣节不是愚人节啊！`);
    await maru.say_and_wait(`我就想要${callname}给我糖嘛～`);
    await me.say_and_wait(`之后一起去糖果店看吧。`);
    await era.printAndWait(`不知何时两人的嘴唇再次贴在了一起。`);
    await maru.say_and_wait(`嗯——那就用这个稍微忍耐一下吧♪`);
    await era.printAndWait(
      `将两人的早餐端上餐桌的${maru.name}露出了可爱的笑容。`,
    );
    era.drawLine({ content: '训练室' });
    await me.say_and_wait(`这就是最后一份了。`);
    await maru.say_and_wait(`辛苦了！`);
    await era.printAndWait(
      `在一旁等待着的${maru.name}熟练的将文件收回文件夹之中。`,
    );
    await me.say_and_wait(`接下来的话。`);
    await maru.say_and_wait(`接下来的话？`);
    await me.say_and_wait(`好像……有什么重要的事情要做？`);
    await maru.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训·练·员·酱' : '训·练·员·君'}？`,
    );
    await era.printAndWait(
      `注意到耳朵向后背过去的${maru.name}，${me.actual_name}不由得心里发毛。`,
    );
    await me.say_and_wait(`快想想，忘了什么？啊，对了！`, true);
    await maru.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训·练·员·酱' : '训·练·员·君'}?`,
    );
    await era.printAndWait(
      `${maru.name}的语气逐渐加重，脸上的表情却没有丝毫的变化。`,
    );
    await me.say_and_wait(`一起去糖果店吧？`);
    await era.printAndWait(`平静的语气连自己都感到了害怕。`);
    await maru.say_and_wait(
      `是呢。哎呀～${maru.get_bigger_sibling_sex_title()}都差点忘了呢，真实多亏${callname}了♪`,
    );
    await era.printAndWait(
      `刚才的压迫感就像什么也没发生一样消失了，话说${
        maru.sex
      }什么时候可以将领域收发自如了？`,
    );
    await maru.say_and_wait(`一起出发吧？`);
    await me.say_and_wait(`不过出发之前还有一件事。`);
    await maru.say_and_wait(`嗯？`);
    await era.printAndWait(`嘴唇重合在了一起。`);
    await maru.say_and_wait(`唔——哈，哎哎哎？`);
    await era.printAndWait(`长达十五秒的深吻。`);
    await me.say_and_wait(`万圣节快乐！不给糖就捣蛋！`);
    await maru.say_and_wait(`欸？${callname}，我·改·变·想·法·了！`);
    await era.printAndWait(
      `比起柔软的感触${me.actual_name}更加在意${maru.name}即将说出口的话语。`,
    );
    await maru.say_and_wait(`今天晚上不会让${me.name}睡哦❤`);
    await era.printAndWait(
      `全身的力气似乎一瞬间全部消失了一样，浑身瘫软在了${maru.name}的怀抱中。`,
    );
    await maru.say_and_wait(`呵呵呵——现在还不是腿软的时候哦，${callname}。`);
    await era.printAndWait(`不知何时润湿的眼角，被${maru.name}轻轻擦去了。`);
    await maru.say_and_wait(`晚上也请多指教了，${callname}♪`);
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 95 + 48) {
    await print_event_name('圣诞节', maru);
    await era.printAndWait(
      `为了履行与${maru.name}之间的约定,${me.name}将最后一份工作完成后便匆匆前往约定的场所。`,
    );
    await era.printAndWait(
      `到达约定的榉树林荫道附近,${me.name}看了眼手机,比约定的时间还要早30分钟。`,
    );
    era.printButton(`「时间看来还很充足」`, 1);
    await era.input();
    await era.printAndWait(`心中大定的${me.name}放慢了匆忙的脚步。`);
    await era.printAndWait(
      `去年和${maru.name}为了躲避粉丝们的合围慌不择路恰巧发现了这条小径.`,
    );
    await era.printAndWait(
      `当时的${
        maru.sex
      }似乎很开心的样子……不对,与以往在赛场之上不同,那是另一种的快乐.`,
    );
    await era.printAndWait(
      `似乎为了和我一起享受奔跑的快乐故意放慢了脚步,当时的我大脑一片空白.`,
    );
    await era.printAndWait(`还有情人节那次的接吻,粉丝感谢祭时的亲密接触……`);
    await era.printAndWait(`过去的回忆却如冒烟的炉火一般慢慢升起`);
    await era.printAndWait(`实际上……`);
    await maru.say_and_wait(`吓!`);
    await era.printAndWait(
      `似乎为了吓${me.name}一跳,${maru.name}从${me.name}左手边的一棵榉树后突然冒了出来,那抹红色的身影在白雪的衬托下显得格外的耀眼.`,
    );
    era.printButton(`「唔啊啊啊啊」`, 1);
    await era.input();
    await era.printAndWait(
      `面对突然从视野中窜出来的${maru.get_teen_sex_title()}(?),${me.name}成功地被吓了一跳.`,
    );
    await maru.say_and_wait(`哈喽♪${callname}`);
    era.printButton(`「${maru.name}这样突然蹿出来太吓人了」`, 1);
    await era.input();
    await era.printAndWait(
      `去年与${maru.name}约定在这条榉树林荫道上见面,但没想到${
        maru.sex
      }这么活泼.`,
    );
    await era.printAndWait(
      `虽然一直以成熟的${maru.get_bigger_sibling_sex_title()}自居,不过在${me.name}面前也开始展现出了${maru.sex}的另一面.`,
    );
    await maru.say_and_wait(
      `虽说也有我按捺不住兴奋的心情提前了一个小时到这里太无聊心血来潮的缘故.`,
    );
    await maru.say_and_wait(`不过${callname}被吓成这样真可爱呢♪`);
    era.printButton(`「${maru.name}!!!」`, 1);
    await era.input();
    await maru.say_and_wait(`呵呵♪${callname}来抓我啊.`);
    era.printButton(`「别跑！」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.get_couple_title()}像小孩子一样追逐嬉戏,恍惚间回到了童年时期无忧无虑.`,
    );
    era.printButton(`「真快乐啊」`, 1);
    await era.input();
    await era.printAndWait(
      `所幸这条小道上来往的人数不多而且都是像${me.get_couple_title()}这样的情侣`,
    );
    await era.printAndWait(
      `${maru.name}姑且不论,但${
        me.name
      }现在也没有小孩子那种活力了,只能喘着粗气扶着树干看着${maru.sex}.`,
    );
    await maru.say_and_wait(`哼哼♪这场游戏是我赢了.`);
    await maru.say_and_wait(`作为胜利者,不知${callname}要接受我一个条件.`);
    era.printButton(`「等下有这回事吗」`, 1);
    await era.input();

    await maru.say_and_wait(`今天晚上和我约会吧.`);
    await maru.say_and_wait(
      `和我这样潮流的美${maru.get_teen_sex_title()}约会的话可是千载难逢的机会哦.`,
    );
    await maru.say_and_wait(`不知${callname}意下如何呢?`);
    era.printButton(`「……」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}正打算回答的时候,肚子却不争气的叫了起来.`,
    );
    await maru.say_and_wait(
      `呵呵,${callname}看来是饿了呢,那么我们就先去吃一点东西再出发吧.`,
    );
    await era.printAndWait(
      `${me.name}再次坐在了副驾驶上,熟悉的感觉令${me.name}无比安心.`,
    );
    await era.printAndWait(
      `${maru.sex}插上钥匙后发动引擎,重低音的引擎轰鸣声响彻了寂静的公园.`,
    );
    await era.printAndWait(
      `${me.get_couple_title()}在萨莉亚一起吃了稍微丰盛一点的晚餐.`,
    );
    await era.printAndWait(
      `相较于独自一人的默默咀嚼,有${maru.name}的陪伴下食物看起来更加美味了.`,
    );
    await maru.say_and_wait(`OK,我在小塔上等${me.name}.`);
    await era.printAndWait(
      `${me.name}让${maru.name}先回到小塔上等候,自己先去前台付账.`,
    );
    await era.printAndWait(
      `伴随着引擎的再度轰鸣,${me.get_couple_title()}出发前往今天最后一个目的地.`,
    );
    await era.printAndWait(
      `${me.name}熟练地触碰着安装在车内面板的播放音乐,然后靠在座椅上享受着音乐.`,
    );
    await era.printAndWait(`等红绿灯转过后,小塔爬上了斜坡.`);
    await era.printAndWait(
      `上了高速公路后跑车开始一路加速,两旁飞速倒退的路灯使${me.name}仿佛置身于时光隧道之中.`,
    );
    await era.printAndWait(
      `在经历最初的不适后,${me.name}慢慢适应了${maru.name}的速度.`,
    );
    await era.printAndWait(
      `音乐引诱${me.name}逃离时间，呼吸促使${me.name}释放时间.`,
    );
    await era.printAndWait(
      `${me.name}转过头看着${maru.name},恰巧窥见${maru.sex}将视线收回的一瞬间.`,
    );
    await era.printAndWait(`之后除了音响中放出的柔和音乐外,沉默降临了此处.`);
    await maru.say_and_wait(`${callname},已经到山顶了呦.`);
    await era.printAndWait(
      `这是这座城市附近最高的山峰,从山顶向下望去,可以将整座城市收入眼底.`,
    );
    await era.printAndWait(
      `寒冷的空气带走了肺中残存的温暖,刺激着心脏的激烈跳动.`,
    );
    await era.printAndWait(
      `${me.name}看向了身旁的${
        maru.sex
      },那双轻松的,明亮的眸子,带着闪闪发光的样子看着沉浸于节日庆典的城市.`,
    );
    era.printButton(`「${me.name}的眼睛真美丽呢」`, 1);
    await era.input();
    await maru.say_and_wait(`呵呵♪${callname}是想和我调情吗?`);
    await maru.say_and_wait(
      `哎呀我都一把年纪了居然还会有年轻人调戏我，看来我魅力依旧不减当年呢。`,
    );
    await era.printAndWait(
      `${maru.name}将视线收回,然后再度将视线望向了${me.name}.`,
    );
    await maru.say_and_wait(
      `人们常说眼睛是心灵的窗户,那么在${callname}看来,我又是什么样的呢?`,
    );
    await me.say_and_wait(`些许感伤的温柔又美丽的眼睛`);
    await maru.say_and_wait(`${callname}又是想到了什么发出这份感慨呢?`);
    await me.say_and_wait(`那双温柔的眼睛一直在注视着后辈们`);
    await me.say_and_wait(`虽然会因为快乐的时间不会一直持续下去而感伤」`);
    await me.say_and_wait(`但因为坚信着后辈们会带来更加耀眼的光芒而感到快乐`);
    await me.say_and_wait(`像是夏天万里无云的晴空一样`);
    await maru.say_and_wait(
      `${callname}是不是对我评价过高了呢?而且现在是冬季呢.`,
    );
    await me.say_and_wait(
      `没有人会小看那份温柔的力量,因为那归根结底可以算作爱.`,
    );
    await me.say_and_wait(`只有温柔的爱才能治愈人们心中的创伤.`);
    await me.say_and_wait(
      `为回应那份爱而努力追逐着背影的孩子们所散发出的火焰,即使是冬天也能感受到和夏天一样的温暖`,
    );
    await maru.say_and_wait(
      `如果注视着孩子们的背影的话,明天也会是一个温暖的晴天吧.`,
    );
    await maru.say_and_wait(`我能遇见${callname}真是太好了♪`);
    await maru.say_and_wait(`……${callname},可以让我任性一回吗?`);
    era.printButton(`「如果是${me.name}的愿望的话,请说吧」`, 1);
    await era.input();
    await maru.say_and_wait(`可以吻我吗?`);
    await era.printAndWait(
      `${me.name}搂住了${maru.name}的腰肢,轻轻拨弄着发梢.`,
    );
    await era.printAndWait(`长达10秒钟的接吻,却是一生之中难忘的一段回忆.`);
    await era.printAndWait(`随后两者分开,${maru.name}的眼泪慢慢滑落脸颊.`);
    await maru.say_and_wait(`${callname},我爱${me.name}.`);
    era.printButton(`「我也爱${me.name}」`, 1);
    await era.input();
    await era.printAndWait(
      `随着时钟指向12点,二人在烟花的烘托下紧紧抱在了一起.`,
    );

    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], 120) || wait_flag;
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 143 + 5 && event_marks.girls_dream === 1) {
    event_marks.girls_dream++;
    await print_event_name(`梦的未来`, maru);
    await era.printAndWait(
      `三年以来，${me.name}与${maru.name}向着同一目标奔跑着，在之后的ura比赛取得了优胜。`,
    );
    await era.printAndWait(`在这之后————`);
    await say_by_passer_by(
      `路人${maru.get_uma_sex_title()}A`,
      `${maru.name}${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }，这次的GIII我按照${me.name}教的方法真的胜利了！`,
    );
    await say_by_passer_by(
      `路人${maru.get_uma_sex_title()}B`,
      `原来还有这种解决方法吗？不愧是丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }`,
    );
    await say_by_passer_by(
      `路人${maru.get_uma_sex_title()}C`,
      `多亏了丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }的技巧，现在和训练员${me.get_adult_sex_title()}也相处的很好了。`,
    );
    await maru.say_and_wait(`能够帮上后辈们的忙真是太好了！`);
    await era.printAndWait(`今天的${maru.name}也在给予后辈们建议。`);
    await say_by_passer_by(
      `路人${maru.get_uma_sex_title()}A`,
      `${maru.name}${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }的训练员${me.get_adult_sex_title()}来了！`,
    );
    await era.printAndWait(
      `被${maru.get_uma_sex_title()}们围在中间的${
        maru.name
      }注意到了${me.name}的存在。`,
    );
    await maru.say_and_wait(`${callname}！`);
    await era.printAndWait(
      `${maru.name}将饱满的胸部整个压在了${me.name}的肩膀上。`,
    );
    await say_by_passer_by(
      `路人${maru.get_uma_sex_title()}B`,
      `呜哇，这个是？`,
    );
    await say_by_passer_by(
      `路人${maru.get_uma_sex_title()}C`,
      `丸善${era.get('cflag:4:性别') - 1 ? '学姐' : '学长'}和${
        maru.sex
      }的训练员今天也是非常恩爱呢。`,
    );
    era.printButton(`「抱歉来晚了」`, 1);
    await era.input();
    await maru.say_and_wait(
      `嗯嗯，已经有两个小时没看到${
        callname
      }了，${maru.get_bigger_sibling_sex_title()}我真的好寂寞呢～`,
    );
    await maru.say_and_wait(`作为补偿的话，今天下午和我一起约会吧♪`);
    era.printButton(`「其实我也因为好～久没看到${maru.name}所以不安了」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}果然一直想着我呢，那么惯例的——`);
    await era.printAndWait(`二人在训练场上紧紧地抱在了一起。`);
    await maru.say_and_wait(`果然还是最喜欢${callname}了呢⭐`);
    await era.printAndWait(`NORMAL END 平静的生活\n\n`);
    await era.printAndWait(`是否查阅提示？`);
    era.printButton(`「是」`, 1);
    era.printButton(`「否」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`想要达成GOOD END 生涯比赛需要全部获胜。`);
      await era.printAndWait(`节日相关剧情选项不影响结局。`);
      await era.printAndWait(
        `剧情相关注意第二年选项，存档可以考虑从二年1月第三周开始，事件名：春冬之交。`,
      );
      await era.printAndWait(
        `若满足TE/GE条件，圣诞节事件后选择清空队伍列表，重新选择${maru.name}触发对话，会出现特殊台词。`,
      );
      await era.printAndWait(
        `另外,第三年第一周,先选择新年参拜再出发去神社综合收益更高.`,
      );
      await era.printAndWait(`最后，祝${me.name}早日达成GE。`);
    } else {
      await maru.say_and_wait(
        `想要自己探索吗？看来是有攻略之神的潜质呢。${callname}加油！`,
      );
    }
  } else if (edu_weeks === 143 + 5 && event_marks.gentle_wind === 1) {
    event_marks.gentle_wind++;
    await print_event_name(`温柔之风吹拂在整个世界`, maru);
    await era.printAndWait(
      `在与${maru.name}经历了难以忘怀的三年之后，夺得了URA奖杯`,
    );
    await era.printAndWait(`接下来要挑战的就是全新的闪耀系列赛了`);
    await era.printAndWait(`不过在此之前。`);
    await me.say_and_wait(`接下来就是去见${maru.name}了吗？`);
    await me.say_and_wait(`有点紧张啊。`);
    era.drawLine({ content: '天台' });
    await era.printAndWait(`拉开天台的大门。`);
    await me.say_and_wait(`好像${maru.name}不在啊？`);
    await era.printAndWait(`除了一阵微风吹过，天台之上再无人影。`);
    await maru.say_and_wait(`猜猜我是谁？`);
    await era.printAndWait(
      `${me.name}的视线被一双手所覆盖，熟悉的味道立刻让${me.name}意识到了来者的身份。`,
    );
    await me.say_and_wait(`${maru.name}`);
    await era.printAndWait(
      `原以为自己会激动的大喊出来，但此刻的声音平稳的自己都有些怀疑。`,
    );
    await maru.say_and_wait(`不愧是${callname}呢，一下子就猜出了我是谁。`);
    await maru.say_and_wait(
      `${maru.get_bigger_sibling_sex_title()}我从没有这么喜欢过一个人呢♪`,
    );
    await maru.say_and_wait(`这就是所谓的爱吗♪`);
    era.printButton(`「${maru.name}我有话想对${me.name}说，所以」`, 1);
    await era.input();
    await maru.say_and_wait(
      `哼哼～${callname}想对${maru.get_bigger_sibling_sex_title()}撒娇吗？`,
    );
    await maru.say_and_wait(`不管是什么恶……`);
    era.printButton(`「请跟我永远生活在一起」`, 1);
    await era.input();
    await era.printAndWait(
      `在${maru.name}一脸难以置信的神情之中，${
        me.name
      }将象征着誓约的戒指递给了${maru.sex}。`,
    );
    era.printButton(`「比起理想，比起赛跑，我更在乎的其实是${me.name}」`, 1);
    await era.input();
    era.printButton(`「所以请接受我的爱意吧」`, 1);
    await era.input();
    await maru.say_and_wait(
      `这下的话，不对这份爱意抱以同样的回应的话，我可是没脸去见三女神呢。`,
    );
    await maru.say_and_wait(
      `${callname}，不止在赛跑上，今后的生活也请多多指教了。`,
    );
    era.printButton(`「我也是，今后也请多多指教了」`, 1);
    await era.input();

    await era.printAndWait(
      `誓约之吻是什么味道的？咸的？还是带有一丝甜味？此刻都没眼前心醉的${maru.get_teen_sex_title()}更加重要。`,
    );
    await era.printAndWait(
      `${me.name}与${maru.name}之间的命运在经历错综复杂的结果之后终于得到了馈赠。`,
    );
    await era.printAndWait(
      `${maru.name}的奔跑带给了赛${maru.get_uma_sex_title()}们勇气与希望。`,
    );
    await era.printAndWait(
      `赛${maru.get_uma_sex_title()}们今后也会一直追逐着${
        maru.name
      }的背影然后超越${maru.sex}吧。`,
    );
    await maru.say_and_wait(
      `比起获胜的话，能让更多的${maru.get_uma_sex_title()}们感受到希望的存在才是我的理想♪`,
    );
    await maru.say_and_wait(
      `接下来的日子里，在草场的一端默默地注视着赛${maru.get_uma_sex_title()}们，然后引导${
        maru.sex
      }们前往伊甸园便是我新的使命了。`,
    );
    await maru.say_and_wait(
      `不过此刻的话，能和${
        callname
      }甜甜蜜蜜的生活在一起才是最幸福的TRUE END呢♪`,
    );
    await era.printAndWait(
      `引导着处于迷茫时期${maru.name}的${
        me.name
      }与引导着迷茫${maru.get_uma_sex_title()}的${
        maru.name
      }最终将化为温柔之风吹拂于赛${maru.get_uma_sex_title()}的世界之中。`,
    );
    await era.printAndWait(
      `就这样，二人的故事暂且迎来的结局，可喜可贺可喜可贺。`,
    );
    await era.printAndWait(`TRUE END 温柔之风吹拂在整个世界\n\n`);
    await era.printAndWait(`是否查阅提示？`);
    era.printButton(`「是」`, 1);
    era.printButton(`「否」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`想要达成GOOD END 生涯比赛需要全部获胜。`);
      await era.printAndWait(`节日相关剧情选项不影响结局。`);
      await era.printAndWait(
        `剧情相关注意第二年选项，存档可以考虑从第二年1月第三周开始，事件名：春冬之交。`,
      );
      await era.printAndWait(
        `若满足GE条件，圣诞节事件后选择清空队伍列表，重新选择${maru.name}触发对话，会出现特殊台词。`,
      );
      await era.printAndWait(
        `另外,第三年第一周,先选择新年参拜再出发去神社触发口上综合收益更高.`,
      );
      await era.printAndWait(`最后，祝${me.name}早日达成GE。`);
    } else {
      await maru.say_and_wait(
        `想要自己探索吗？看来是有攻略之神的潜质呢。${callname}加油！`,
      );
    }
  } else if (edu_weeks === 143 + 5 && event_marks.fall_heaven === 1) {
    const chara302_talk = get_chara_talk(302),
      chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342);
    chara340_talk.name = '温柔的女神';
    chara341_talk.name = '睿智的女神';
    chara342_talk.name = '严肃的女神';
    await era.printAndWait(`平平无奇的休息日。`);
    await era.printAndWait(`击溃了皇帝，漂亮的取得了二连胜。`);
    await era.printAndWait(
      `与${maru.name}一同度过的这三年，恐怕是一段永远无法忘怀的日子。`,
    );
    await era.printAndWait(`与${maru.name}暂且分别。`);
    await chara302_talk.say_and_wait(`祝！贺！URA夺冠！`);
    await era.printAndWait(
      `小巧的理事长搬着差不多有${maru.sex}一半高的奖杯送到了${maru.name}手上。`,
    );
    await maru.say_and_wait(`非常感谢！`);
    await era.printAndWait(
      `${maru.name}接过奖杯，面对着摄像机和在旁等待已久的记者们的采访。`,
    );
    await say_by_passer_by(
      `记者A`,
      `${maru.name}${me.get_adult_sex_title()}，请问${me.name}拿到奖杯的感受是什么？`,
    );
    await maru.say_and_wait(`一般来说应该会非常激动吧？毕竟是这么盛大的赛事。`);
    await maru.say_and_wait(`不过真当自己拿到奖杯的那一刻，心底却非常平静。`);
    await say_by_passer_by(`记者A`, `可以和屏幕前的观众们详细说一下吗？`);
    await maru.say_and_wait(
      `是！${maru.get_uma_sex_title()}们为了争夺第一在不为人知的地方挥洒汗水，在赛场之上奋力拼搏的朝气让我有了一种『啊，我就是为了这个才参加比赛的』。呵呵～`,
    );
    await say_by_passer_by(
      `记者A`,
      `${maru.name}${maru.get_adult_sex_title()}对${maru.get_uma_sex_title()}们了解的很深呢。`,
    );
    await maru.say_and_wait(
      `是的！比赛之前我都会和参赛的${maru.get_uma_sex_title()}们聊天。然后听到了很多有趣的事情呢～`,
    );
    await say_by_passer_by(`记者A`, `可以和屏幕前的观众们说一下吗？`);
    await maru.say_and_wait(
      `呣，就拿最近的一场来说吧，有个${maru.get_uma_sex_title()}——`,
    );
    await maru.say_and_wait(
      `——最后${maru.sex}一直在抱怨自己的训练员是个木头脑袋呢。`,
    );
    await say_by_passer_by(`记者A`, `真是有意思，非常感谢。`);
    await era.printAndWait(
      `采访的记者还没来得及一旁离开，另一名记者就迫不及待的冲到了前面。`,
    );
    await say_by_passer_by(
      `记者B`,
      `不好意思，请问${maru.name}${me.get_adult_sex_title()}接下来的目标是什么？`,
    );
    await maru.say_and_wait(`唔，真是一个比较困难的问题呢——`);
    await maru.say_and_wait(`与训练员商讨的结果是休战一段时间。`);
    await say_by_passer_by(
      `记者B`,
      `多半是想要和自己的训练员一起度蜜月吧。这种事情我见多了。`,
      true,
    );
    await say_by_passer_by(`记者B`, `是得了屈腱炎吗？`);
    await maru.say_and_wait(
      `是的，决赛前去看了一次医生，虽说只是轻症，但继续参加还是有一定的风险。`,
    );
    await maru.say_and_wait(
      `虽然训练员${me.get_adult_sex_title()}坚持让我休息，不过我还是想坚持到底……所幸最后有惊无险的胜利了，真是多亏${callname}呢⭐`,
    );
    await say_by_passer_by(
      `记者B`,
      `${callname}？果然胜利的${maru.get_uma_sex_title()}最后都是同一个结局。`,
      true,
    );
    await say_by_passer_by(
      `记者B`,
      `作为${me.name}的训练员一定在背后非常努力吧。可以和我们一起讲讲有关训练员的事情吗？`,
    );
    await maru.say_and_wait(`这么好机会，不如让训练员自己来说吧！`);
    await era.printAndWait(`在一旁观看的${me.name}被${maru.name}拉了过来。`);
    era.printButton(`「诶？我吗？」`, 1);
    await era.input();
    await era.printAndWait(
      `面对着一大堆的突然兴奋记者与各式专业摄影设备，毫无准备的${me.name}留下了一滴冷汗。`,
    );
    await maru.say_and_wait(
      `训练员${me.sex_code === 1 ? '先生' : '小姐'}不要害羞也来说一下感想吧！`,
    );
    era.printButton(
      `总总总之非常感谢特雷森对我的信任，担当${maru.get_uma_sex_title()}努力的配合……`,
      1,
    );
    await era.input();
    await say_by_passer_by(`摄影师`, `看这边！`);
    await era.printAndWait(`手捧着三年的欢笑与泪水落下帷幕。`);
    era.drawLine();
    await era.printAndWait(`与${maru.name}暂且分别，${me.name}坐在训练室。`);
    await era.printAndWait(
      `收藏室中摆放的奖杯作为锚点，记录了这三年度过的时光绝非梦幻。`,
    );
    await era.printAndWait(`只是，突然之间没有了目标，似乎一下子安下心来了。`);
    await era.printAndWait(`头昏昏沉沉的，眼皮也在打架。`);
    await me.say_and_wait(`${maru.name}回来之前，就这样稍微睡一会吧。`);
    await era.printAndWait(
      `似乎找到了合适的理由，心安理得闭上了双眼的${me.name}就这样陷入了沉睡。`,
    );
    await era.printAndWait(`再次醒来时，${me.name}来到了一片广阔无垠的草原。`);
    await era.printAndWait(
      `与${maru.name}谈笑时，${maru.sex}半开玩笑的说着「我去过伊甸哦」。`,
    );
    await era.printAndWait(
      `从这片人间绝对不存在的美景看来，${maru.sex}说的恐怕是真的。`,
    );
    await me.say_and_wait(`接下来该往那方向走？`);
    await era.printAndWait(
      `然后有一个迫切需要解决的问题，${me.name}不是${maru.get_uma_sex_title()}。`,
    );
    await era.printAndWait(`${maru.name}的办法微乎甚微。`);
    await era.printAndWait(`${maru.name}快回来了，剩下的抉择时间不多了。`);
    await me.say_and_wait(`只能出发了。`);
    await era.printAndWait(
      `越是犹豫情况只会愈加糟糕，做出选择也比不做选择要好。`,
    );
    await era.printAndWait(
      `回忆着${maru.name}所说的模糊方向，${me.name}向着那边出发了。\n\n\n`,
    );
    await era.printAndWait(
      `不知走了多久，时间在这段旅程之中也变得模糊。所幸此处不觉饥饿干渴，让${me.name}的内心稍感慰藉。`,
    );
    await era.printAndWait(`一成不变的草原，似乎永远也无法到达的彼方。`);
    await era.printAndWait(`${maru.name}所说的那片金黄色的草原……`);
    await me.say_and_wait(`真的存在吗？`);
    await era.printAndWait(`那片美丽世界。`);
    await maru.say_and_wait(`${maru.sex}就在那里哦？`);
    await me.say_and_wait(`${maru.name}！？`);
    await era.printAndWait(`不远处的那位，分明是${maru.name}！`);
    await me.say_and_wait(`原来${me.name}在这里！！`);
    await era.printAndWait(`欣喜之间，${me.name}向那道幻影扑去。`);
    await me.say_and_wait(`诶？`);
    await era.printAndWait(`拥抱的双臂却穿了${maru.sex}的身体。`);
    await maru.say_and_wait(`……`);
    await era.printAndWait(`幻影一言不发，向着某处走去，。`);
    await me.say_and_wait(`？`);
    await era.printAndWait(
      `一开始只是慢慢的走着，然后速度越来越快，最后干脆奔跑了起来。`,
    );
    await me.say_and_wait(`等一下！`);
    await era.printAndWait(
      `似乎诞生的目的就是为了引导${me.name}，跑不动坐下来喘气时，在不远处一动不动。`,
    );
    await era.printAndWait(`全力奔跑时，却永远都差那么一点触及到${maru.sex}。`);
    await era.printAndWait(`该怎么办？怎么才能再次触碰${maru.sex}？`);
    await era.printAndWait(`不甘心，想要追上${maru.sex}。`);
    await era.printAndWait(
      `想要超过${maru.sex}，想看到${maru.sex}所知的世界。`,
    );
    await me.say_and_wait(`一定很漂亮吧！不然不会这么执著的前进。`);
    await me.say_and_wait(`想要拥有，想要占据，想要看到那片美丽的世界。`);
    await era.printAndWait(`隐隐约约，好像触及到了一直制约着自己的那层桎梏。`);
    await era.printAndWait(`如果继续跑下去的话，可能会被活活累死。`);
    await me.say_and_wait(
      `我想了很久，从契约的那天开始，一直想到了URA结束的那一刻。`,
    );
    await me.say_and_wait(`我真正想要的，其实是美的一瞬间。`);
    await me.say_and_wait(
      `一瞬间，感受达到最高潮的那一刻，我就是为了一刻活到现在的。`,
    );
    await me.say_and_wait(`此时此刻，不就是三女神给我的唯一的机会吗？`);
    await me.say_and_wait(`那么，答案从一开始就确定了。`);
    await era.printAndWait(`不顾身体传出的阵阵哀鸣，${me.name}再次向前加速。`);
    await era.printAndWait(`……与前方那抹曙光，保持了遥不可及的梦幻距离。`);
    await era.printAndWait(
      `人类与${maru.get_uma_sex_title()}之间，那条难以逾越的天堑。`,
    );
    await me.say_and_wait(`呜啊啊啊啊啊！`, true);
    await era.printAndWait(`挤出全身最后一丝力气，奋力一跃。`);
    await era.printAndWait(`即使是幻影似乎也没料到这最后一搏，也来不及反应。`);
    await era.printAndWait(`最终，${me.actual_name}触碰到了那个身影。`);
    await me.say_and_wait(`我做到了！`, true);
    await era.printAndWait(`然后，若有若无的触感稍纵即逝。`);
    await era.printAndWait(
      `耗尽最后一丝力气的${me.actual_name}，只能看着不远处站定的幻影。`,
    );
    await me.say_and_wait(
      `${maru.name}，我终于体会到${me.name}的感受了！`,
      true,
    );
    await era.printAndWait(`极限运动之下，突然摔倒，恐怕已经骨折了吧。`);
    await era.printAndWait(`剧烈的呼吸之下，肺部像是小刀一点点割肉般疼痛。`);
    await era.printAndWait(`巨大的代价之下，${me.name}又得到了什么？`);
    await era.printAndWait(
      `${me.name}的内心已经被那片美所占据，泪水不受控制的流淌下来。`,
    );
    await me.say_and_wait(`我要死了吗？`, true);
    await era.printAndWait(
      `幻影不再与之前一样向着目标走去，却反而向${me.name}走了过来。`,
    );
    await era.printAndWait(
      `就像是给予凋零之人临终关怀一样，轻轻将${me.name}置于膝间。`,
    );
    await me.say_and_wait(`${maru.name}。`, true);
    await era.printAndWait(
      `落木归根，所见之人却非所思之人，心湖却被初春随风飞舞的第一片花瓣所覆盖，一切喧嚣归于沉寂。`,
    );
    await me.say_and_wait(`这是为了见到${me.name}所献上的礼物。`, true);
    await me.say_and_wait(`我……我不会再逃避了。`, true);
    await era.printAndWait(`不断涌出的泪水模糊了视野。`);
    await me.say_and_wait(`${me.name}……${me.name}永远不会孤独了。`, true);
    await era.printAndWait(`最后的画面，定格在与${maru.name}所见的那片大海。`);
    await era.printAndWait(`如镜面般平静的大海，映照着过往云烟。`);
    era.drawLine();
    await me.say_and_wait(`这里是？`);
    await era.printAndWait(`再次苏醒时，眼前是一片金色的草原。`);
    await era.printAndWait(`正如${maru.name}口中所说，那片所有人类的摇篮。`);
    await chara341_talk.say_and_wait(`已经不需要再哭泣了。`);
    await chara341_talk.say_and_wait(`这片乐园之中不会再有悲伤存在。`);
    await era.printAndWait(
      `象征包容的女神高多芬阿拉伯带着慈爱的神情看着${me.name}。`,
    );
    await chara340_talk.say_and_wait(`${me.name}已向我们证明了自己的勇气。`);
    await chara340_talk.say_and_wait(
      `直到再次见面为止，请顺着自己的想法走完这条道路吧。`,
    );
    await era.printAndWait(
      `象征勇气的女神达利阿拉伯带着期许的目光鼓励${me.name}。`,
    );
    await chara342_talk.say_and_wait(
      `以人类之身，拼尽全力才得以触碰到${maru.get_uma_sex_title()}的边缘。`,
    );
    await chara342_talk.say_and_wait(
      `强大一词，与${me.name}无缘。一直以来，不过像胆小鬼一样，钻进谎言编织的纸城堡中，妄想着城堡牢不可破。`,
    );
    await chara342_talk.say_and_wait(
      `……然而，${me.name}在最后的关头，向我们深深的忏悔了。不再逃避，拼尽全力的最后一搏，就是忏悔的证明。`,
    );
    await era.printAndWait(
      `象征力量与强大的女神拜耶尔土耳其带着叹息的神情看着${me.name}。`,
    );
    era.printButton(`「三女神大人！？」`, 1);
    await era.input();
    await chara341_talk.say_and_wait(
      `如${me.name}所见，我们便是创造并守护这片伊甸的女神。`,
    );
    await chara341_talk.say_and_wait(
      `临终之时前来的普通人数不胜数，并非${maru.get_uma_sex_title()}以活人之躯前来的人，恐怕只有${me.name}一人了。`,
    );
    await chara340_talk.say_and_wait(`${me.name}有什么愿望的吗？`);
    await chara340_talk.say_and_wait(
      `只要不是影响到人类社会的运作，我们都可以满足${me.name}。`,
    );
    await era.printAndWait(`愿望吗？`);
    await era.printAndWait(`细细品味一路走来的艰辛，最后得出的答案是`);
    era.printButton(`「请让我回到现实世界，回到${maru.name}的身边」`, 1);
    await era.input();
    await chara342_talk.say_and_wait(
      `愿望许下的那一刻${me.name}就会回到人类社会，还是说，${me.name}的愿望就是这个？`,
    );
    era.printButton(`「尊敬的女神大人，如您所见，这就是我的愿望。」`, 1);
    await era.input();
    await me.say_and_wait(
      `我所追求的美，是在这种普通人的标准下不好不坏的运气，在付出极大的代价之后才会昙花一现。`,
    );
    await me.say_and_wait(`比喻的话，就像用汗水与时间换了一张美术展的抽奖券。`);
    await me.say_and_wait(`想要进入这场美术展，就必须抽到这张美术展的票证。`);
    await me.say_and_wait(
      `然而任何愿望，哪怕是许愿自己的运气变好，都会让我所追求的美大打折扣。`,
    );
    await me.say_and_wait(
      `许愿的结果，反而让自己离自己的目标越来越远，不过是空虚的产物罢了。`,
    );
    await chara340_talk.say_and_wait(
      `……既然${me.name}心意已决，请让我们送${me.name}一程。`,
    );
    await chara341_talk.say_and_wait(
      `可爱的孩子，希望${me.name}在经历完一生之后，再次来到这里时，能够享有安息。`,
    );
    await chara342_talk.say_and_wait(
      `……老鼠虽弱，脆弱的不过是身躯，弱小的身躯之中所蕴含的勇气，不由身体所限，值得动容。`,
    );
    await chara342_talk.say_and_wait(`或许是我小看了${me.name}。`);
    await era.printAndWait(
      `${me.name}的身体渐渐离开了地面，在三女神的目送之下，越来越高，越来越快，直到意识中断的那一刻，那片金黄色的草原。`,
    );
    await era.printAndWait(
      `……以及，作为幻影的${maru.sex}向${me.name}挥手道别。`,
    );
    era.drawLine();
    await maru.say_and_wait(`${callname}？`);
    await era.printAndWait(`似乎过了很久，又像是并没有经过太久。`);
    await era.printAndWait(
      `似乎在${maru.name}的眼中，自己就像是疲惫过头陷入沉睡一样。`,
    );
    era.printButton(`「我回来了，${maru.name}。」`, 1);
    await era.input();
    await era.printAndWait(`就像是梦中的幻影一样，${maru.name}露出了笑容。`);
    await maru.say_and_wait(`欢迎回来。`);
    await print_event_name(`GOOD END 伊甸之梦`, maru);
    await era.printAndWait(`Thank you for your playing!`);
  }
  wait_flag && (await era.waitAnyKey());
};
