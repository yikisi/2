const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers = {}) => {
  handlers[95 + 40] = async (falcon, me) => {
    await print_event_name(`天空、大地以及生活在这里的我们`, falcon);
    await era.printAndWait(`公园\n`);
    await era.printAndWait(`在飞鹰子的提议下，你们来到了公园的一处草坪上。`);
    await era.printAndWait(
      `转眼之间秋天已经过去一半了，一路上的行人也纷纷穿起了外套。`,
    );
    await me.say_and_wait(`飞鹰子不觉得冷吗？`);
    await era.printAndWait(`看着比的飞鹰子，你实在忍不住好奇的向她询问。`);
    await falcon.say_and_wait(`飞鹰子不觉得冷哦？`);
    await era.printAndWait(
      `说起来也是，毕竟${falcon.get_uma_sex_title()}比起人类体温更高一点。`,
    );
    await me.say_and_wait(`真是有点羡慕飞鹰子呢。`);
    await falcon.say_and_wait(
      `训练员${falcon.get_uma_sex_title()}突然之间在说什么呢？`,
    );
    await me.say_and_wait(
      `像飞鹰子这么开朗可爱的${falcon.get_uma_sex_title()}偶像，作为训练员真是幸运。`,
    );
    await falcon.say_and_wait(
      `诶~~？真是的！训练员${falcon.get_uma_sex_title()}突然之间这么说，飞鹰子。`,
    );
    await me.say_and_wait(`啊，到了。`);
    await era.printAndWait(
      `公园一处靠近湖边的草坪之上，随处可见的旅人与正在嬉戏的孩童。`,
    );
    await me.say_and_wait(`来湖边的游客比想象之中还多啊。`);
    await era.printAndWait(
      `你一边从带来的背包之中取出亲手制作的便当，一遍随口问道。`,
    );
    await falcon.say_and_wait(`来湖边的游客很大一部分都是情侣呢。`);
    await era.printAndWait(`飞鹰子乖巧的坐在了铺好的毯子上看着你。`);
    await me.say_and_wait(`也许在马推上作为著名的情侣打卡圣地而出名了吧。给。`);
    await falcon.say_and_wait(`毕竟情侣们只有休息日才会有时间出来玩呢——`);
    await era.printAndWait(`飞鹰子接过了准备好的胡萝卜蜂蜜特饮。`);
    await falcon.say_and_wait(`......情侣吗？`, true);
    await me.say_and_wait(`飞鹰子怎么想的呢？`);
    await falcon.say_and_wait(`诶？`);
    await era.printAndWait(
      `被你看穿了的飞鹰子不小心用力过猛，盖子划过一条优美的弧线牢牢的嵌在了不远处的树干。`,
    );
    await falcon.say_and_wait(
      `......训练员${falcon.get_uma_sex_title()}看好了！呀啊！`,
    );
    await era.printAndWait(
      `趁着你还没反应过来，飞鹰子飞奔向了盖子所在的大树。`,
    );
    await falcon.say_and_wait(
      `情侣吗？我和训练员${falcon.get_uma_sex_title()}`,
      true,
    );
    await era.printAndWait(
      `还没反应过来的时候，飞鹰子飞奔向了盖子所在的大树\n\n。`,
    );
    await era.printAndWait(`小小的插曲结束后，两人重新坐了下来。`);
    await era.printAndWait(
      `你享用着飞鹰子亲手制作的便当，然后接过一旁递过来的饮料。`,
    );
    await era.printAndWait(
      `顺着冰凉的水流划过喉咙，像是满足了一样打了一个饱嗝。`,
    );
    await me.say_and_wait(`嗯——稍微有点甜呢。`);
    await falcon.say_and_wait(`毕竟是用草莓汁浇在了便当之上呢。`);
    await falcon.say_and_wait(
      `说起来，闪耀同学试吃的时候也给出了差不多的评价呢。`,
    );
    await era.printAndWait(
      `如果是荣进闪耀在旁边指导的话，偏甜也是可以理解吧。`,
    );
    await me.say_and_wait(`原来是这样啊，毕竟是蛋糕——`);
    await falcon.say_and_wait(`不对！这是飞鹰子自己想出来的！`);
    await era.printAndWait(`飞鹰子突然变大的声音引得路人纷纷侧目。`);
    await falcon.say_and_wait(`啊，对不起。突然之间激动起来了。`);
    await falcon.say_and_wait(`这样子可不像飞鹰子呢⭐哈哈哈。`);
    await era.printAndWait(`意识到了什么，飞鹰子低着头脸红得几乎滴出水来。`);
    era.printButton(`谢谢你，飞鹰子`, 1);
    await era.input();
    await era.printAndWait(`你轻轻抚摸着飞鹰子的小脑袋。`);
    await falcon.say_and_wait(`飞鹰子已经不是小孩子了。`);
    await era.printAndWait(
      `虽然嘴巴上这么抗议着，但却没有激烈的反抗，就这样任凭你抚摸着。`,
    );
    await me.say_and_wait(`飞鹰子不太适应这样的场合吗？`);
    await falcon.say_and_wait(
      `虽然也没有那么在意别人的目光呢，不过还是多少有一点。`,
    );
    await falcon.say_and_wait(
      `......稍微有点在意训练员${falcon.get_uma_sex_title()}的评价呢。`,
    );
    await era.printAndWait(`最后的声音慢慢变得听不清了。`);
    await me.say_and_wait(
      `与舞台之上的飞鹰子相比，果然这样的飞鹰子也很可爱呢。`,
    );
    await me.say_and_wait(`飞鹰子闪耀的样子也很可爱。`);
    await falcon.say_and_wait(`飞鹰子也没有想象之中那么闪耀呢。`);
    await falcon.say_and_wait(
      `遇到训练员${falcon.get_uma_sex_title()}之前，飞鹰子每天都在为偶像活动还有逼近死线的挂科奔波呢。`,
    );
    await falcon.say_and_wait(
      `有的时候，在终于能闲下来休息时，总会忍不住想着。`,
    );
    await falcon.say_and_wait(`说不定飞鹰子走的路是错的呢。`);
    await era.printAndWait(`凝视着手中茶杯的飞鹰子。你正打算开口安慰`);
    await falcon.say_and_wait(`不过经过这段时间后，我也释然了呢。`);
    await falcon.say_and_wait(
      `像这样一直错误的道路上一路奔跑过来的，才是飞鹰子嘛！`,
    );
    await falcon.say_and_wait(`说起来，偶像就是这样才对吧？`);
    era.printButton(`为其他人带来希望，引导更多的人？`, 1);
    await era.input();
    await falcon.say_and_wait(
      `不对！是鼓励更多内心渴望走上这条道路的人，给予的勇气！`,
    );
    await falcon.say_and_wait(
      `走上这条道路的人们，一定比飞鹰子更加聪明，更加努力，所以会更加的闪耀！`,
    );
    era.printButton(`只是缺少了这份勇气？`, 1);
    await era.input();
    await falcon.say_and_wait(
      `这就是飞鹰子为什么作为${falcon.get_uma_sex_title()}偶像的原因！`,
    );
    await falcon.say_and_wait(
      `正因为飞鹰子不太聪明，所以鼓起勇气帮助更多的人！`,
    );
    await falcon.say_and_wait(
      `看到那些被飞鹰子的舞蹈感染到的${falcon.get_uma_sex_title()}们走上飞鹰子走过的道路后。`,
    );
    await falcon.say_and_wait(`飞鹰子才会由衷的感到开心。`);
    await falcon.say_and_wait(`就像是，被电视上的偶像所激励的我一样呢。`);
    await era.printAndWait(
      `聚精会神诉说着的飞鹰子，才意识到自己一直端着的茶水变凉了。`,
    );
    era.printButton(`飞鹰子很伟大呢。`, 1);
    await era.input();
    await falcon.say_and_wait(
      `才没有呢！飞鹰子也只是普通的${falcon.get_uma_sex_title()}偶像罢了。`,
    );
    await falcon.say_and_wait(
      `只是一个觉得这么做会很开心才去做的普通小${falcon.get_uma_sex_title()}罢了。`,
    );
    await falcon.say_and_wait(`而且`);
    await falcon.say_and_wait(
      `不过只是一个连告白都不敢的最差劲的${falcon.get_uma_sex_title()}偶像罢了。`,
      true,
    );
    era.printButton(`而且？`, 1);
    await era.input();
    await falcon.say_and_wait(`诶嘿嘿⭐`);
    await era.printAndWait(`之后的谈话便在湖泊染上第一缕金色的光辉后结束了。`);
  };
  handlers[95 + 45] = async (falcon) => {
    await print_event_name(`莫桑石`, falcon);
    // 纵使失约，纵使内心陷入疯狂，
    // 既然作为偶像就要认真回应粉丝的期待
    await era.printAndWait(
      `送走训练员${falcon.get_uma_sex_title()}后，${falcon.name}独自坐在训练室的沙发上。`,
    );
    await era.printAndWait(`将天真无邪的面具摘下，享受着宁静的瞬间。`);
    await falcon.say_and_wait(`……`);
    await era.printAndWait(`特雷森的夜晚比想象中还要安静。`);
    await falcon.say_and_wait(`说起来`);
    falcon.print(
      `等到东京大赏结束之后，与训练员${falcon.get_uma_sex_title()}之间的契约就结束了。`,
    );
    falcon.print(
      `虽然根据情形可以向理事长申请续约，但不知为什么，总是提不起干劲。`,
    );
    falcon.print(`缺了什么，有什么地方自己还没有察觉到的。`);
    falcon.print(`从胸口传来的刺痛感迫使着我寻找这一答案。`);
    await falcon.say_and_wait(`今天的月亮，比想象中还要美呢。`);
    falcon.print(`从训练室窗户透过的仿佛轻轻触碰就会撕碎的朦胧月光。`);
    falcon.print(
      `视野顺着白色丝绸的延展的方向落下，幻想的尽头是冰冷的黑色固体。`,
    );
    falcon.print(
      `……因为使用过于频繁而提前完成了使命的麦克风${falcon.get_uma_sex_title()}吗。`,
    );
    await falcon.say_and_wait(`你也完成了自己的使命呢。`);
    falcon.print(`黑色固体默不作声的看着自己。`);
    await falcon.say_and_wait(`啊啊，真是的。`);
    falcon.print(`为什么要用这么悲伤的眼神看着我。`);
    await falcon.say_and_wait(`……是啊，飞鹰子已经什么都没有了。`);
    await falcon.say_and_wait(`想要握住两件互不相容的事物，最后却全部失去了。`);
    await falcon.say_and_wait(
      `为了调整与粉丝之间的关系，将对训练员${falcon.get_uma_sex_title()}的恋心深深埋在心底。`,
    );
    await falcon.say_and_wait(
      `尽管如此，对一直支持飞鹰子的粉丝大家们，存在裂纹的钻石无论如何都无法比拟之前的光彩。`,
    );
    falcon.print(`我认真的回答着麦克风${falcon.get_uma_sex_title()}的问题。`);
    falcon.print(
      `纵使期望最后以无法承受的代价实现，我也想站在舞台之上，亲眼见证那个瞬间的诞生。`,
    );
    await falcon.say_and_wait(
      `飞鹰子从始至终都是为了追求闪耀的瞬间才踏上的偶像之路。`,
    );
    falcon.print(`尽管这份最初的渴望已经大半。`);
    falcon.print(`并非为了什么人，仅仅只是为了实现自己的心愿。`);
    falcon.print(
      `作为${falcon.get_uma_sex_title()}偶像的自己，要向一路支持自己的粉丝们献上最满意的画卷。`,
    );
    falcon.print(`所以，就这么出发吧！`);
    falcon.print(`纵使泥地大赛只有草地十分之一的支持度。`);
    falcon.print(`飞鹰子也会让它比钻石更加闪耀，火彩更加惊艳！`);
    falcon.print(`堵上飞鹰子身为${falcon.get_uma_sex_title()}偶像的觉悟！`);
    falcon.print(`就这么一口气闪耀到终点！`);
  };
  handlers[95 + 47] = async (falcon, me) => {
    await print_event_name(`${falcon.name}的决定`, falcon);
    await era.printAndWait(
      `你与${falcon.name}紧张的准备着下周将要准备的东京大赏。`,
    );
    await era.printAndWait(`与${falcon.name}之间签订的契约，已经快满三年了。`);
    await me.say_and_wait(`接下来就是毕业典礼了吗？`);
    await era.printAndWait(
      `从特雷森学院毕业，然后向着更高的地方深造，亦或者正式踏上偶像的道路。`,
    );
    await era.printAndWait(`作为${falcon.name}来说，也就这两种可能了吧。`);
    await era.printAndWait(
      `作为向着未来同行的乘客，与${falcon.name}一同经历的经验，恐怕会在某个夜深人静的夜晚，像是发生在昨天一样的历历在目。`,
    );
    await era.printAndWait(`叮铃铃。`);
    await era.printAndWait(
      `烦人的噪音打断了你的思绪，差不多也到放学的时候了。`,
    );
    await era.printAndWait(
      `往常你都会在整理好文件后前往河边的草地等待着${falcon.name}的到来。`,
    );
    await me.say_and_wait(`就在这里稍微等一下${falcon.name}吧。`);
    await era.printAndWait(
      `如果实在抽不开身时，${falcon.name}便会自行前来等待着你。`,
    );
    await era.printAndWait(
      `虽然没有特意约定过，但两人之间已经达成了这种默契。`,
    );
    await era.printAndWait(
      `——但是，直到倒好的咖啡热气消散为止，熟悉的敲门声却没有想起。`,
    );
    await me.say_and_wait(`可能是被突然拉去参加什么活动一直抽不开身吧。`);
    await era.printAndWait(
      `对如今的${falcon.get_uma_sex_title()}偶像来说，突发的工作也愈发频繁。`,
    );
    await era.printAndWait(
      `似乎是一直以来的心结就此了结的缘故，${falcon.name}的行动比往日更加积极。`,
    );
    await me.say_and_wait(`既然这样就在手机上等待着马推发来的新消息吧。`, true);
    await me.say_and_wait(
      `第二天早上的时候再去听${falcon.sex}分享那些有趣的经历吧。`,
    );
    await era.printAndWait(
      `将处理文件时不小心碰倒的相框扶起，重新放回到最显眼的位置。`,
    );
    era.drawLine();
    await era.printAndWait(`冬日的夜晚比想象中还要漫长。`);
    await era.printAndWait(`思绪在独处的时刻延伸到了世界的尽头。`);
    await era.printAndWait(`深不见底的情感也在延伸的过程中被无限的放大。`);
    await era.printAndWait(`像沉默的大海，又像深不见底的井一样。`);
    await era.printAndWait(`咚咚咚。`);
    await era.printAndWait(
      `轻轻打开门锁，却看见了散着头发的栗色${falcon.get_uma_sex_title()}。`,
    );
    await falcon.say_and_wait(`......训练员${me.get_adult_sex_title()}。`);
    await me.say_and_wait(`先进来。`);
    await era.printAndWait(
      `你从挂钩上取下毛巾递给了${falcon.name}，然后关上了门。`,
    );
    await era.printAndWait(
      `比起传出奇奇怪怪的传言，${me.actual_name}更担心的是飞鹰子的情况。`,
    );
    await falcon.say_and_wait(`打扰了。`);
    await me.say_and_wait(
      `喜欢喝什么饮料？红茶？果汁？还是咖啡？不，咖啡还是算了吧。`,
    );
    await era.printAndWait(
      `进来后端坐在客厅的沙发上，双眼正四处打量着周围环境。`,
    );
    await era.printAndWait(
      `说起来这还是${falcon.name}第一次知道你居住的地方。`,
    );
    await era.printAndWait(`……她是怎么知道的？`);
    await falcon.say_and_wait(
      `训练员${falcon.get_uma_sex_title()}有些心不在焉的样子呢？`,
    );
    await era.printAndWait(`思考的时间太长，${falcon.name}的好奇心被引起了。`);
    await me.say_and_wait(`不，只是在思考应该拿什么饮料招待比较好。`);
    await falcon.say_and_wait(`飞鹰子想尝尝看啤酒！`);
    await me.say_and_wait(`决定了，还是红茶吧。`);
    await era.printAndWait(`脑海之中做出决定后，行动便具有了目的。`);
    await era.printAndWait(
      `尽可能的将水壶慢慢倾倒下来，不让一滴茶水逸到桌子上。`,
    );
    await me.say_and_wait(`刚烧开的水有点烫，小心一点。`);
    await falcon.say_and_wait(`好的！`);
    await era.printAndWait(
      `说起来${falcon.name}在今年的合宿派对上不小心喝到了训练员那边的饮料之后，一直对它念念不忘。`,
    );
    await era.printAndWait(
      `就她本人所说的那种轻飘飘像是踩到云朵般的感受，总觉得是……不，只是风味饮料喝多罢了。`,
    );
    await era.printAndWait(
      `不过将${falcon.name}送回宿舍以及思考如何应付手纲小姐实在是一件苦差事。`,
    );
    await era.printAndWait(
      `说起来，现在的话，就算走到地铁站门口也来不及赶不上最后一班了。`,
    );
    await era.printAndWait(
      `而就这样抱着杯子盯着茶叶不知在想些什么的${falcon.name}。`,
    );
    await era.printAndWait(`噗呲。`);
    await me.say_and_wait(`可以跟我说一下怎么了吗？`);
    await era.printAndWait(
      `稍微思考了一下，将易拉罐打开，从罐口涌出的棕黄色气泡总会让人联想到汹涌的洪水。`,
    );
    await era.printAndWait(
      `外宿许可，明天再补也行吧？诸如此类的想法也伴随着酒精融入血液之中从潜意识中升起。`,
    );
    await me.say_and_wait(`没有一丝阴霾的天空。`);
    await me.say_and_wait(`明天也会是一个好天气。`, true);
    await falcon.say_and_wait(`……`);
    await falcon.say_and_wait(``);
    await me.say_and_wait(`干脆在这里住一个晚上吧？`);
    await me.say_and_wait(`……毕竟是飞鹰子。`);
    await me.say_and_wait(`祝你幸福`);
    await era.printAndWait(`说出口的一瞬间${me.actual_name}就后悔了。`);
    await era.printAndWait(`万千感情涌上心头，最后脱口而出的竟是这句。`);
    // 根据上文恋心与责任之间做出的决定 此处的对话将会改变 但仅仅只是侧重的方向发生改变，${falcon.name}对训练员的恋心无论如何压制都不会消灭，就像暗火一样
    // 恋心大于责任
    await me.say_and_wait(`这下要被讨厌了。`, true);
    await falcon.say_and_wait(
      `训练员${falcon.get_uma_sex_title()}，我喜欢你。`,
    );
    await me.say_and_wait(`果然......嗯？`);
    await era.printAndWait(
      `比想象之中更加凌然的表情，是你从未见过的，作为${falcon.name}的少女所露出的不为人知的一面。`,
    );
    await falcon.say_and_wait(
      `比起粉丝，比起粉丝们还要喜欢训练员${falcon.get_uma_sex_title()}！`,
    );
    await era.printAndWait(`你被突如其来的告白攻势打得不知所措。`);
    await me.say_and_wait(`欸？飞鹰子，为什么？`);
    await falcon.say_and_wait(
      `说起来一直都有点羡慕真机伶同学呢……比起清纯系偶像，还是主动出击将训练员的好感牢牢抓再手心才是正确的事……吧。`,
    );
    await falcon.say_and_wait(
      `啊，说起来飞鹰子在憧憬成为${falcon.get_uma_sex_title()}偶像的时候，可没有想到会有一天为了喜欢的人而放弃深耕到此的粉丝们呢。`,
    );
    await falcon.say_and_wait(
      `不过，飞鹰子不后悔，从与训练员${falcon.get_uma_sex_title()}相遇的那个草地开始，飞鹰子一直都在压抑着自己的情感。`,
    );
    await falcon.say_and_wait(
      `所以，飞鹰子其实是个坏孩子，虽然说着为了粉丝们，实际上也只是为了满足自己，然而正是因为如此，飞鹰子才做出了自己的决定——不是作为偶像，而是作为${falcon.name}来爱着训练员${falcon.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `与其说是${falcon.name}的告白，不如说是作为${falcon.name}的少女向你所展示的深藏于心的一面。`,
    );
    await me.say_and_wait(`啊……这样吗……`);
    await era.printAndWait(`或许早有预感，因为未知引起的不安也得到了诠释。`);
    await me.say_and_wait(`接下来的道路请多指教。`);
    await era.printAndWait(`你轻轻拉起了${falcon.name}的手。`);
    await falcon.say_and_wait(`欸？`);
    await me.say_and_wait(`这一次是我赢了。`);
    await era.printAndWait(
      `被汗水浸湿的右手略微颤抖着，但始终稳稳的握在手心之中。`,
    );
    await falcon.say_and_wait(
      `……是啊，是训练员${falcon.get_uma_sex_title()}赢了！接下来请多指教！`,
    );
    await me.say_and_wait(`接下来的偶像道路要多几分波折了，真是有些伤脑筋呢。`);
    await falcon.say_and_wait(`是呢……接下来的粉丝骚动，恐怕要辛苦一段时间呢。`);
    await era.printAndWait(`你们对视了一眼，然后大声的笑了起来。`);
    await era.printAndWait(
      `一直笑到混杂着喜悦与释然的泪水迸出，并且将会一直带着笑容下去。`,
    );
    await falcon.say_and_wait(`果然飞鹰子还是喜欢直接扑到训练员的怀里呢⭐`);
    await falcon.say_and_wait(`呐……训练员${falcon.get_uma_sex_title()}。`);
    await era.printAndWait(`此情此景已经无需思考。`);
    await era.printAndWait(`你轻轻吻上了${falcon.name}的嘴唇。`);
    await me.say_and_wait(`好咸。`, true);
    await era.printAndWait(`比想象之中更甜一点。`);
    // 就让我们一起努力吧 ${falcon.name}与玩家拉起对方的手 就算建起的沙堡轰然倒塌，但只要我们握在一起的手未曾分开，一切都会重新建起
    // 责任超过恋心
    await falcon.say_and_wait(`唔。`);
    await era.printAndWait(`嘴唇突然被踮起脚尖的少女被覆盖。`);
    await era.printAndWait(
      `微微的刺痛感，伴随着苦涩的咸味……这就是${falcon.name}的吻吗，原来如此。`,
    );
    await falcon.say_and_wait(`我喜欢你。`);
    await era.printAndWait(
      `突然其来的告白，却让你有股一只脚踏在悬崖边的错觉。于是你等待着对方接下来的话语`,
    );
    await falcon.say_and_wait(
      `——但是，飞鹰子必须要为一直支持着飞鹰子的粉丝们负责。`,
    );
    await me.say_and_wait(`果然如此。`);
    await falcon.say_and_wait(`飞鹰子迷茫过，彷徨过，逃避过。`);
    await falcon.say_and_wait(`被负罪感随笼罩的那段日子，比死亡更加痛苦。`);
    await falcon.say_and_wait(
      `——就像全身上下挂满了伤口，无论如何都称不上是闪耀的样子，令人憎恶。`,
    );
    await falcon.say_and_wait(`但是，飞鹰子依然要为了自己而行动。`);
    await falcon.say_and_wait(`如果没有粉丝们的支持，飞鹰子也就不是飞鹰子了。`);
    await era.printAndWait(
      `与其说她的模样像是在笑着一样，不如更像是因为极度的痛苦而大幅扭曲的面部肌肉。`,
    );
    await falcon.say_and_wait(
      `……但是……但是飞鹰子的内心空落落的，就像是有一处无论如何都无法缝合的伤口。`,
    );
    await era.printAndWait(
      `你将从刚才一直开始就一直在震动的手机狠狠的摔到了墙壁之上。`,
    );
    await era.printAndWait(`如果能更早一点接触到${falcon.name}的内心的话。`);
    await falcon.say_and_wait(`所以，`);
    await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请。`);
    await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请。`);
    await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请。`);
    await era.printAndWait(
      `啊啊，就像是从遥远的彼岸传来的话语，后半句完全完全被强迫的思绪覆盖。`,
    );
    await era.printAndWait(`明明已经做好了准备，为什么会这么悲伤？`);
    await falcon.say_and_wait(
      `……就是这样，纵使失约，纵使内心陷入疯狂，既然作为偶像就要认真回应粉丝的期待`,
    );
    await me.say_and_wait(`我明白了……无论如何我都会支持飞鹰子做出的决定。`);
    await era.printAndWait(
      `你的视野似乎能突破自己的范围，从眼前的少女转到了俯瞰着整个画面，像是机械一样按照制定好的规则熟练的进行着对话。`,
    );
    await era.printAndWait(`尽管如此，你依然尊重她的决定。`);
    await me.say_and_wait(`晚安`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}晚安。`);
    await era.printAndWait(`等到中断的思绪再次恢复时，忽然发现自己已经在。`);
    await era.printAndWait(`像是从遥远的地方一样传来的微弱声音。`);
    await me.say_and_wait(`不，怎么会。`);
    await me.say_and_wait(
      `不论飞鹰子成功也好，失败也好，我都会陪着你一起见证最终的结局。`,
    );
    await me.say_and_wait(`那个时候，我们一定会笑着谈论今晚的对话的。`);
    await me.say_and_wait(`所以，飞鹰子不用害怕。`);
    era.printButton(`抉择之时，我会推你一把`, 1);
    await era.input();
    await falcon.say_and_wait(`......训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(`${me.actual_name}紧紧握住了${falcon.name}伸出的手`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}一定要记住今天说的话呦？`,
    );
    await me.say_and_wait(`嗯，已经记住了。`);
    await era.printAndWait(
      `第二天早上，起来的时候发现睡在旁边的${falcon.name}就是后话了。`,
    );
  };
};
