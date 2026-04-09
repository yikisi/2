const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers = {}) => {
  handlers.beginning = async (falcon, me, callname) => {
    const flash = get_chara_talk(37);
    await print_event_name(`喊声隆隆的沙地赛`, falcon);
    // 对于偶像活动相当热枕，但对于比赛有点强迫自己上去，可能是对失败未来的恐惧
    // 主体 ：奋力向前，逆流而上 飞鹰子与训练员旅游时闲聊得出的结论
    // 人是一种很容易寂寞的生物，在曲终人散之后，从亢奋的精神慢慢退回，然后只剩下疲惫
    // 一般人眼中的乐观，仅仅只是将四处收集而来的瓦片聚拢起来，然后拼凑起来的乐观，因此，面对较大的危险就会四分五裂
    // 因此，不过只是装作乐观的悲观者罢了
    // 然而，悲观往往是对自身所做成就的忽视，如果将看向未来的视野收回到自身不足5米的可操纵区域，反而会得到继续下去的动力
    // 过大的期待会造成止步不前，最终会被借口所埋没，良心也因此蒙尘，最后欠下一个又一个谎言的债务
    // 训练员遵守约定带飞鹰子看沙地赛
    await era.printAndWait(`某处的沙地赛\n`);
    await say_by_passer_by_and_wait(
      `解说`,
      `比赛已经进入最终阶段！二号选手与四号选手从马群之中脱颖而出，开始了最后的角逐！`,
    );
    await say_by_passer_by(`观众`, `唔噢噢噢噢噢噢噢！`);
    await era.printAndWait(
      `雪花从天空悄然落到肩头，然后化为了潮湿的水汽，看台上的观众们裹着厚厚的围巾与大衣，手中挥舞着旗帜和彩带，此起彼伏的加油助威声打破了冬日的宁静。`,
    );
    await say_by_passer_by_and_wait(
      `赛${falcon.uma_sex_title}`,
      `哈啊啊啊啊！`,
    );
    await era.printAndWait(
      `两名${falcon.uma_sex_title}在前半段的比赛中一直位于先头阵营，但并未真正与马群拉开差距。直到最后的冲刺阶段才骤然加速，将马群逐渐甩在后面。`,
    );
    await era.printAndWait(
      `观众席上的尽然有序的加油助威声被戏剧性的场面划破而杂乱无章。`,
    );
    await say_by_passer_by_and_wait(
      `解说`,
      `两人之间毫不相让，距离终点还有200米！100米！50米！最后的胜利者是——`,
    );
    await era.printAndWait(`时间在此凝固。`);
    await era.printAndWait(
      `追赶的${falcon.uma_sex_title}与前方的${falcon.uma_sex_title}并肩做好了超越的架势，而后——`,
    );
    await falcon.say_and_wait(
      `这就是训练员${me.adult_sex_title}想让我看到的画面吗？`,
    );
    await era.printAndWait(`凝固的时间再次移动。`);
    await era.printAndWait(
      `取得胜利的${falcon.uma_sex_title}，不顾浑身被沙土所覆盖，将混合着汗水与泪水的笑脸献给了观众们。\n\n`,
    );
    await era.printAndWait(
      `场地的聚光灯集中照射在胜者的那位身上，其他${falcon.uma_sex_title}宛如众星拱月，将胜利的果实衬托得如此甜美诱人。`,
    );
    await era.printAndWait(
      `激动的喜悦也好，失败的不甘也罢，从喉咙之中挤出的不甘呐喊、喉咙嘶哑也要触及到的那片天空。`,
    );
    await era.printAndWait(
      `即使是寒冷的夜晚，这份炽热的情感也切实传到了在场的每一位观众心中。`,
    );
    await falcon.say_and_wait(`哇啊啊——沙地赛，比我想象之中还要热闹呢。`);
    await falcon.say_and_wait(
      `在舞台最中央的${falcon.uma_sex_title}，观众们的注意力全部集中在这里……`,
      true,
    );
    await falcon.say_and_wait(`如果飞鹰子也能站在这里的话。`, true);
    await falcon.say_and_wait(`飞鹰子……飞鹰子感动得都要哭出来了！`);
    await era.printAndWait(`从出口处离开的${falcon.name}诉说着心中的感受。`);
    await falcon.say_and_wait(
      `没想到沙地赛比想象中还要精彩，观众们的热情，还有${falcon.uma_sex_title}们为此付出的爱，与选择草地的${falcon.uma_sex_title}们都是一样的！`,
    );
    await falcon.say_and_wait(`飞鹰子决定了！`);
    await era.printAndWait(
      `被热情点燃的${falcon.teen_sex_title}认真的看向${callname}。`,
    );
    await falcon.say_and_wait(
      `飞鹰子要以沙地赛为起点，顺着这条赛道一气不停的直直冲向顶级${falcon.uma_sex_title}偶像的终点！`,
    );
    await era.printAndWait(
      `吵闹声引得周围的游客纷纷侧目，而${falcon.name}的泥地偶像之路才刚刚开始。`,
    );
    era.drawLine();
    await falcon.say_and_wait(`快到门禁时间了！那么明天见⭐`);
    await era.printAndWait(
      `在目送载着${falcon.name}的电车离开之后，偶然间看到了一个熟悉的身影。`,
    );
    await me.say_and_wait(
      `荣进闪耀，是荣进闪耀小姐没错吧。今晚真是个风和日丽的好日子。`,
    );
    await era.printAndWait(
      `由学生来打招呼有点让${me.name}不太舒服，同时抱着了解对方的目的，${me.name}主动向对方打起了招呼。`,
    );
    await flash.say_and_wait(`是呢，晚上好哦，${callname}。`);
    await me.say_and_wait(
      `是在等待${falcon.actual_name_with_title}回来吗？请放心，${falcon.actual_name_with_title}已经平安回到宿舍中了。`,
    );
    await me.say_and_wait(
      `在路上听飞鹰小姐说过自己有个能严格按照计划表进行的室友。虽然在路上就有所期待了，不过现在看来本人比飞鹰小姐说的更加可靠。`,
    );
    await era.printAndWait(
      `在路上听到${falcon.name}提到过自己有个守时的室友，与对方打好关系比较重要。`,
    );
    await flash.say_and_wait(
      `呵呵，您过奖了。只是为了能顺利执行预定的事项而应该做的事情而已，没有什么了不起的。`,
    );
    await flash.say_and_wait(
      `不过既然提到飞鹰同学的话，说来也是巧合，我也在这段时间内不止一次听到${falcon.sex}谈论起您来了呢。`,
    );
    await era.printAndWait(
      `荣进闪耀轻笑了几声，随后便将话题指向了${callname}。`,
    );
    await me.say_and_wait(`飞鹰小姐对我如此看重实在令我感到荣幸。`);
    await me.say_and_wait(`既然这样，我也对接下来的三年时光开始期待了呢。`);
    await flash.say_and_wait(`三年时光啊……`);
    await era.printAndWait(`听到${me.name}提起这个词汇，荣进闪耀沉默片刻。`);
    await flash.say_and_wait(
      `${sys_get_callname(37, 0)}，虽然在现在这个时间点提起这个问题可能会有一些冒犯与唐突，不过还是请容我询问一句。`,
    );
    await flash.say_and_wait(
      `身为担当训练员，您已经对此做出相应的觉悟了吗？与飞鹰同学${falcon.sex}一心同体，肩负起责任的觉悟。`,
    );
    await era.printAndWait(`来了，就是这句！`);
    await era.printAndWait(`和想象中一样，闪耀一定是看重这份友谊。`);
    await era.printAndWait(
      `如果要通过${falcon.sex}的考验，这边夜的拿出同样的诚意才行。`,
    );
    era.printButton(
      '「我会像醉心于园艺的园丁一样精心呵护埋下去的种子，带着祝福与希望祈祷${falcon.sex}能顺利绽放。」',
      1,
    );
    await era.input();
    await flash.say_and_wait(`真是相当感性的回答呢，既然如此，那我也放心了。`);
    await era.printAndWait(`荣进闪耀朝${callname}微微鞠躬，似乎是在表达谢意。`);
    await flash.say_and_wait(
      `飞鹰同学${falcon.sex}以后就拜托给您了，作为${falcon.sex}的朋友，如果您有任何需要的话，我也会竭力提供帮助的。`,
    );
    await flash.say_and_wait(`。`);
    await era.printAndWait(`既然如此。`);
    add_event(
      event_hooks.week_start,
      new EventObject(46, cb_enum.edu).set_arg('next_beginning'),
    );
  };

  handlers[34] = async (falcon, me, callname) => {
    await print_event_name(`向着闪耀大舞台不停歇的前进！`, falcon);
    await falcon.say_and_wait(`……呼⭐谢谢大家！`);
    await era.printAndWait(
      `即兴歌曲串烧结束后，此起彼伏的掌声汇聚成了对${falcon.name}的认可。`,
    );
    await era.printAndWait(
      `出道战结束后，在赛场以及舞台上闪闪发光的飞鹰子受到了大量的关注。`,
    );
    await era.printAndWait(
      `马推上「${falcon.uma_sex_title}偶像？！${falcon.name}⭐」受到大量讨论。`,
    );
    await era.printAndWait(`随之而来的河边演出视频也在马推上收获了大量粉丝。`);
    await me.say_and_wait(`就这样继续前进！`, true);
    await era.printAndWait(
      `被闻讯而来的观众们团团围住，于河边草地认真演出的${falcon.name}一口气唱到了深夜。`,
    );
    await me.say_and_wait(`辛苦了！`);
    await era.printAndWait(
      `等到最后一名粉丝满意离开后，${callname}走向了${falcon.name}。`,
    );
    await era.printAndWait(
      `因为预料到了这种情况，所以提前向宿舍长申请了外宿许可。`,
    );
    await era.printAndWait(
      `${callname}将准备好的毛巾递给${falcon.sex}时，被汗水打湿的触感混杂着奇异的香味跳动着人的神经。`,
    );
    await falcon.say_and_wait(`非常感谢⭐`);
    await era.printAndWait(
      `${callname}一边协助${falcon.name}将搭建的舞台重新收起，一边观察着${falcon.name}的神情。`,
    );
    await falcon.say_and_wait(`～～～♪`);
    await era.printAndWait(`心情不错的${falcon.name}还沉浸在演出之中。`);
    await me.say_and_wait(`辛苦了！接下来我来善后吧。`);
    await era.printAndWait(
      `正准备揽下所有收尾工作的${callname}被尾巴扑打到了好几下。`,
    );
    await falcon.say_and_wait(
      `看到这么多支持着我的粉丝们，自己好像充满了动力一样，能一口气唱到第二天早上！`,
    );
    await falcon.say_and_wait(`即使是收拾的时候心脏也在扑通扑通的乱跳呢。`);
    await falcon.say_and_wait(`……而且。`);
    await era.printAndWait(
      `似乎沉浸在演出之中无法自拔的${falcon.name}，轻轻拉扯着衣袖的${falcon.name}期待着${callname}的答复。`,
    );
    await me.say_and_wait(
      `飞鹰子的表演非常精彩，作为一直关注着飞鹰子的粉丝真的很感动！`,
    );
    await falcon.say_and_wait(`……真的吗！`);
    await era.printAndWait(`${falcon.name}紧紧握住了${callname}的手。`);
    await falcon.say_and_wait(`太好了！`);
    await era.printAndWait(`如果不是突然其来的咕噜声，一切都显得这么美好。`);
    await falcon.say_and_wait(`……啊哈哈，还好粉丝们不在呢。`);
    await era.printAndWait(`略显尴尬的${falcon.name}不好意思的低下了头。`);
    await me.say_and_wait(`说起来的话，最近有家拉面店很火爆，去看看吧？`);
    await era.printAndWait(`${callname}看了眼时间，现在快步走过去还来得及。`);
    await falcon.say_and_wait(`——好⭐那现在就赶过去吧！`);
    await era.printAndWait(
      `${falcon.name}拉住了${callname}的手，${callname}突然有种不祥的预感。`,
    );
    await falcon.say_and_wait(`——3，1！出发！`);
    era.drawLine({ content: '拉面店内' });
    await falcon.say_and_wait(
      `哇——啊啊！比想象中还美味呢，飞鹰子现在充满能量了⭐`,
    );
    await era.printAndWait(
      `${callname}看着${falcon.name}在马推上发出的拉着${callname}与精心摆放的两碗拉面的合照。`,
    );
    await me.say_and_wait(`真是厉害啊。`);
    await era.printAndWait(
      `不管是从摆放角度还是时机的捕捉，都是无可挑剔的程度。`,
    );
    await me.say_and_wait(`飞鹰子说不定有作为摄像师的才能？`);
    await era.printAndWait(
      `看着手指在手机触屏上飞快游走的${falcon.name}不时露出了笑容，突然觉得不应就此打扰对方。`,
    );
    await era.printAndWait(
      `${falcon.uma_sex_title}偶像究竟是什么？恐怕现在还没定论。`,
    );
  };
  handlers[47 + 12] = async (falcon, me, callname) => {
    // 默认皋月赏结束
    // 演出结束之后，回到学校时发现缎带掉了一根，急忙寻找，离宵禁很近，抉择
    // 到失去地点，没找到，绝望时，被匆匆赶来的小${falcon.uma_sex_title}捡到，被询问与训练员之间的感情
    // ${falcon.name}突然意识到了自己对训练员的感情可能导致偶像事业的重创
    // 陷入不安之中
    await print_event_name(`早已察觉的恋心`, falcon);
    await era.printAndWait(`宿舍\n`);
    await falcon.say_and_wait(
      `训练员${falcon.uma_sex_title}，谢谢${callname}送飞鹰子回宿舍！`,
    );
    await era.printAndWait(
      `目送着${callname}渐渐消失在转角处，带着微笑的${falcon.name}也转身离开。`,
    );
    await era.printAndWait(
      `因为参加比赛的缘故，同时也要满足一直支持${falcon.name}的愿望，为了在这两者之间保持平衡，${callname}努力说服了${falcon.name}在参加比赛这个星期减少突击演出的时间。`,
    );
    await era.printAndWait(
      `为了珍惜宝贵的演出时间，${falcon.name}比以往更加努力的闪耀着。`,
    );
    await falcon.say_and_wait(`……训练员${falcon.uma_sex_title}。`);
    falcon.print(`起床——上课——训练——演出——回宿舍，如流水一样平静的日常。`);
    falcon.print(
      `目送训练员${me.adult_sex_title}消失在道路的转角处，已经是我日常的一部分了。`,
    );
    falcon.print(
      `为了让更多的人露出笑容，坚持着偶像活动直到精疲力竭为止，每天也因此过得很充实。`,
    );
    falcon.print(
      `啊，虽然有时候演出结束时，两腿瘫软到几乎不想动的情况也越来越多了。`,
    );
    falcon.print(`是偶像修行的程度还太浅的缘故吧，这么试着向自己问道。`);
    falcon.print(
      `另一个自己却摇摇头，「不能让粉丝们看到飞鹰子消极的一面」，所以抛弃了消极的想法。`,
    );
    falcon.print(`上一次已经试过了女仆装，这次要不要试试决胜服进行演出呢？`);
    falcon.print(`毕竟飞鹰子的粉丝们也总因为这样那样的理由没机会进入赛场呢。`);
    falcon.print(
      `因为比赛开始时恰好是工作日的缘故所以没能亲自观看吗……虽然这么想，但还是草地一边的比赛更吸引人吧。`,
    );
    falcon.print(
      `皋月赏的舞台更大，参与的${falcon.uma_sex_title}更强，坐在远比飞鹰参与的泥地赛更大的观众席上观看比赛的粉丝也更多。`,
    );
    falcon.print(`说起来，还是有些不甘心呢——`);
    falcon.print(`决定了！飞鹰子要以最闪耀的姿态带给大家幸福！`);
    falcon.print(`令人安心的手势！夺去目光的舞步！以及钻石般亮晶晶的决胜服！`);
    falcon.print(`啊——说起来发型可能也要调整。`);
    era.printButton(`欸？`, 1);
    await era.input();
    await era.printAndWait(
      `用发髻固定的头发像是终于解放了一样，固定住马尾的皮筋绷断了。`,
    );
    await falcon.say_and_wait(`终于到极限了呢。`);
    await era.printAndWait(
      `像是自言自语一样的${falcon.name}下意识的抚摸着刘海处的缎带。`,
    );
    await era.printAndWait(
      `为了节约经费在二手市场上购买的橡皮筋支撑不住这么剧烈的运动。`,
    );
    falcon.print(`一二……三呢？`);
    falcon.print(`心中泛起一丝不安，我将缎带取下一遍又一遍徒劳的数着。`);
    await falcon.say_and_wait(`得赶快顺着回来的道路去找。`, true);
    falcon.print(`那是对我最重要的，温柔的母亲亲手制作的第一件决胜服。`);
    await falcon.say_and_wait(`可是时间。`, true);
    falcon.print(`时针与分针的夹角看上去连水果巴菲上的草莓都塞不下。`);
    falcon.print(`如果是打破宵禁的话，之后会被手纲小姐说教的吧。`);
    falcon.print(`如果事先和奇石同学说一声的话，应该可以通融一下吧？`);
    await falcon.say_and_wait(`飞鹰子！加油！`);
    await era.printAndWait(`意识到的时候，自己已经在飞驰的路上了。`);
    falcon.print(`啊啊，总是这样。`);
    falcon.print(
      `扑哧扑哧闪着光环的天使飞鹰子叹息着，一旁的恶魔飞鹰子兴高采烈的加油喝彩。`,
    );
    await falcon.say_and_wait(
      `全力以赴的面对现在的困境，后果什么的就交给明天的飞鹰子处理！这就是飞鹰子的偶像道！`,
    );
    await era.printAndWait(
      `确定了前进的方向后，${falcon.name}不错过任何一处角落的全速前进。`,
    );
    era.drawLine();
    falcon.print(
      `特雷森门口，沿着商业街的小道，直到目的地河边草地，一路上都没有缎带的样子。`,
    );
    falcon.print(`就像是缎带长出了翅膀扑哧扑哧飞走了一样。`);
    falcon.print(
      `啊啊，亲爱的缎带小姐，希望${callname}在伊甸园的生活一直顺利。`,
    );
    falcon.print(`将胡乱的思绪甩开，飞鹰子重新意识到了一件事。`);
    await falcon.say_and_wait(`离宵禁已经过去半个小时了吧！怎么办！`);
    falcon.print(`恐怕得知情况的特雷森现在正焦急地寻找着飞鹰子吧。`);
    falcon.print(`不甘心，就这么两手空空的回去，实在是不甘心。`);
    await falcon.say_and_wait(
      `不对，如果从积极的方面考虑的话，直到第二天早晨为止，飞鹰子有充足的时间寻找缎带了！`,
      true,
    );
    falcon.print(`焦躁的内心也追歼平复下来了，就这样回忆有可能落下的地方。`);
    falcon.print(`演出开始前，缎带完好无缺的呆在额头上。`);
    falcon.print(
      `安可时为了兼顾最左和最右侧的观众，想起了之前看过的热门偶像帅气的旋转后实现了视线的翻转。`,
    );
    falcon.print(`或许就是那个时候不小心掉下来的吧。`);
    falcon.print(`如果是被哪位观众捡起来的话，那飞鹰子找到的希望就比较小了。`);
    falcon.print(`唔——如果平时没有在数学课打瞌睡的话。`);
    await say_by_passer_by(`？？？`, `那边的是飞鹰子姐姐吗？`);
    await falcon.say_and_wait(`咦咦咦咦？`);
    await era.printAndWait(
      `${falcon.name}被突如其来的声音吓到心脏停了一拍，尾巴上的毛发也变得僵硬。`,
    );
    await era.printAndWait(
      `深夜时分从小径传来的稚嫩童声，以及朝着河边缓缓逼近的黑影。`,
    );
    await falcon.say_and_wait(
      `难道这就是训练员说过的专门吃不听话${falcon.uma_sex_title}的${falcon.uma_sex_title}杀手吗？`,
      true,
    );
    await falcon.say_and_wait(`飞——飞鹰子，飞鹰子不好吃啊啊啊！`);
    await say_by_passer_by(`小${falcon.uma_sex_title}`, `欸？`);
    await era.printAndWait(`澎！`);
    await era.printAndWait(`黑影旁的绿化树轰然倒下。`);
    await say_by_passer_by(`小${falcon.uma_sex_title}`, `果然是飞鹰子姐姐！`);
    await era.printAndWait(
      `丝毫没被吓到的小${falcon.uma_sex_title}兴奋的凑上前来。`,
    );
    era.drawLine();
    falcon.print(
      `小心翼翼将缎带收进口袋之中，看着眼前为了归还缎带而偷偷离开的${falcon.teen_sex_title}。`,
    );
    falcon.print(`失而复得的安慰感转瞬又被自责所覆盖。`);
    falcon.print(`如果没有为了缎带逃了宵禁的话，飞鹰子恐怕会陷入自责之中。`);
    falcon.print(
      `看着眼前期待着表扬的${falcon.teen_sex_title}，至少飞鹰子会负起责任好好把${callname}送回去的。`,
    );
    await era.printAndWait(
      `${falcon.name}蹲下身体，努力保证自己的视线与${falcon.teen_sex_title}平行。`,
    );
    await falcon.say_and_wait(
      `谢谢${callname}，飞鹰子一定会为了大家努力成为${falcon.uma_sex_title}偶像的。`,
    );
    falcon.print(
      `学着训练员${falcon.uma_sex_title}抚摸的手法，尽可能温柔的笑着。`,
    );
    await falcon.say_and_wait(`抱歉，飞鹰子还是太不成熟了。`, true);
    falcon.print(
      `向着心中的训练员${me.adult_sex_title}道歉，后者只是苦笑的摇摇头。`,
    );
    await falcon.say_and_wait(`让飞鹰子姐姐送${callname}回去吧。`);
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `欸？真的吗！飞鹰子姐姐要送我回去了！`,
    );
    falcon.print(
      `眼前的${falcon.teen_sex_title}为了自己帮助到了他人而雀跃着，就像是飞鹰子所做的一样。`,
    );
    falcon.print(
      `突然意识到自己给训练员${me.adult_sex_title}添了多少麻烦的时候，背后传来一阵灼烧感。`,
    );
    await falcon.say_and_wait(`一起前往最闪耀的舞台吧！`);
    falcon.print(
      `将破损的缎带小心收起，轻轻牵起${falcon.teen_sex_title}的小手。`,
    );
    era.drawLine();
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `谢谢${callname}送我回家！`,
    );
    await era.printAndWait(
      `在居民楼的门口，小${falcon.uma_sex_title}向${falcon.name}道谢。`,
    );
    await falcon.say_and_wait(`不，我这边才是。`);
    falcon.print(`苦笑着做出了回礼。`);
    falcon.print(
      `小${falcon.uma_sex_title}的父母经常出差，每天${falcon.sex}都是独自一人上下学。`,
    );
    falcon.print(
      `虽然试着问了要不要每天接${falcon.sex}，却被对方以不能麻烦他人而拒绝了。`,
    );
    falcon.print(`这份执拗感有点像小时候的飞鹰子呢。`);
    await falcon.say_and_wait(
      `就像在路上说好的一样，不要再做这么危险的事情了！这是和飞鹰子之间的约定呦？`,
    );
    await say_by_passer_by(`小${falcon.uma_sex_title}`, `知道了！`);
    await era.printAndWait(
      `正准备从大门进入的${falcon.uma_sex_title}像是想到了什么一样，回过头看向了${falcon.name}。`,
    );
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `说起来，飞鹰子姐姐为什么脸通红着？`,
    );
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `是想到训练员${me.adult_sex_title}了吗？`,
    );
    falcon.print(`不，不是这种关系。`);
    falcon.print(`正打算这么反驳时，却怎么也说不出口。`);
    falcon.print(`像是不小心把鸡蛋整个吞下一样，话语卡在了喉咙之中。`);
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `明天我也会看飞鹰子姐姐的表演的！`,
    );
    falcon.print(`大门在眼前缓缓关上了。`);
    falcon.print(`连小${falcon.uma_sex_title}都已经看出来了吗？`);
    falcon.print(
      `在没有实现${falcon.uma_sex_title}偶像的理想前，还是在众人面前稍微保持一点距离吧。`,
    );
    falcon.print(`不过\n`);
    await falcon.say_and_wait(
      `飞鹰子原来给训练员${me.adult_sex_title}添了这么大麻烦吗？`,
    );
    await era.printAndWait(
      `第二天，小${falcon.uma_sex_title}一家向特雷森表达了对${falcon.name}送小${falcon.uma_sex_title}回家的感谢，为此${callname}被手纲小姐狠狠的批评了。`,
    );
  };
  handlers[47 + 21] = async (falcon, me, callname) => {
    await print_event_name(`训练室的花`, falcon);
    era.printButton(`终于结束了。`, 1);
    await era.input();
    await era.printAndWait(
      `整理完最后一份文件，${me.actual_name}如释重负般的松了一口气。`,
    );
    await me.say_and_wait(`作为训练员真是辛苦啊`, true);
    await era.printAndWait(
      `不知何时训练室被金黄色的夕阳悄悄拜访，窗外热火朝天的训练声音让${me.actual_name}回忆起了在训练员学院的生活。`,
    );
    await era.printAndWait(
      `在沙地上飞驰的${falcon.uma_sex_title}偶像——${falcon.name}，虽然没有什么实感，但已经是现在泥地的一颗新星了。`,
    );
    await era.printAndWait(
      `但是，看着${falcon.name}日益增大的粉丝群体，以及变得越来越慢的日程表。`,
    );
    await era.printAndWait(`不知为何，心里的角落变得空落落的。`);
    await me.say_and_wait(`……我有好好完成作为训练员的职责吗？`, true);
    await era.printAndWait(
      `每天的注意力资源非常有限，所以只能将注意力放在自己能察觉到的范围内。`,
    );
    await era.printAndWait(
      `而且面面俱到几乎是不可能的，为了防止意外投入更多注意力反而会造成更大的不确定。`,
    );
    await era.printAndWait(
      `呆在空旷的训练室里，不知不觉间消极的想法就从记忆的角落里溢出。`,
    );
    await falcon.say_and_wait(`训练员${me.adult_sex_title}我回来了⭐`);
    await era.printAndWait(
      `${falcon.name}圆圆的小脑袋从推门的间隙中窜了出来。`,
    );
    await me.say_and_wait(`辛苦了。在今天的训练开始之前，先休息一会吧。`);
    await era.printAndWait(
      `为了重新振作起来，${callname}离开座位，帮${falcon.name}倒了一杯红茶。`,
    );
    await era.printAndWait(`然后看着眼前坐正的${falcon.name}。`);
    await era.printAndWait(
      `与平时的${falcon.name}相比，手中多了一份不知是谁赠送的种子。`,
    );
    await era.printAndWait(
      `${falcon.name}察觉到了${callname}的视线，耳朵动了动，然后将手中的小袋子挥了挥。`,
    );
    await era.printAndWait(
      `在${callname}和${falcon.name}的努力之下，${falcon.uma_sex_title}偶像的概念总算推了出去。`,
    );
    await era.printAndWait(
      `现如今，一提到${falcon.uma_sex_title}偶像，关注沙地的观众们都会想到${falcon.name}。`,
    );
    await era.printAndWait(
      `拜此所赐，${falcon.name}也聚集了数量不少的粉丝团体。`,
    );
    await falcon.say_and_wait(`嗯，是商业街的店员姐姐送给我的。`);
    await era.printAndWait(
      `不少粉丝都把${falcon.name}当作了自己理想的投影，所以帮助自己也是理所应当的吧？`,
    );
    await era.printAndWait(
      `如果是信件，则会由身为训练员的${callname}筛选之后再给${falcon.name}看，如果是包装的礼物也是同理。`,
    );
    await era.printAndWait(
      `${falcon.name}意外的在这方面表现的很顺从，同时也有粉丝们之间的自律缘故，所以现在${falcon.sex}的小脑袋还没被丧气话所淹没。`,
    );
    era.printButton(`好好养起来吧。`, 1);
    await era.input();
    await era.printAndWait(
      `先将种子种在靠近窗户的阴影处，等发芽时再放在阳光之下吧。`,
    );
    await era.printAndWait(
      `看着${falcon.name}将花盆放下后，啪嗒啪嗒地坐在了${callname}的旁边。`,
    );
    await falcon.say_and_wait(`啊，训练员${me.adult_sex_title}`);
    await me.say_and_wait(`嗯？飞鹰子怎么了？`);
    await falcon.say_and_wait(`……不，没什么⭐`);
    await era.printAndWait(
      `${falcon.name}的耳朵扑哧扑哧的扇打着，尾巴也不停拍打着沙发。`,
    );
    await falcon.say_and_wait(`说起来，接下来的训练方针是——`);
    await era.printAndWait(`时间便在闲聊与训练之中度过。`);
  };
  handlers[47 + 32] = async (
    falcon,
    me,
    _,
    flags,
    edu_marks,
    relation,
    love,
    ebj,
  ) => {
    const callname = sys_get_callname(46, 0);
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get('cflag:46:位置')
    ) {
      add_event(event_hooks.week_end, ebj);
      return;
    }
    await print_event_name(`夏季合宿结束·为了更大的舞台`, falcon);
    await falcon.say_and_wait(`哈啊！哈啊！哈啊！`);
    await me.say_and_wait(`飞鹰子加油！`);
    await falcon.say_and_wait(`哈啊啊啊啊啊！`);
    await era.printAndWait(
      `驱使着疲惫不堪的身体冲向终点的飞鹰，终于慢慢停了下来。`,
    );
    await me.say_and_wait(`辛苦了。`);
    await era.printAndWait(
      `将准备好的毛巾递给飞鹰子，在纸张上记下最后一行数据。`,
    );
    await falcon.say_and_wait(
      `就这样活用在夏季合宿中学到的技巧，在赛场上让更多的粉丝们看到飞鹰子闪耀的一面⭐`,
    );
    await era.printAndWait(
      `即使是${falcon.uma_sex_title}，兼顾训练以及小镇演出恐怕早已力不从心，但${falcon.uma_sex_title}却只是稍作休息之后便着手做起了演出的准备。`,
    );
    era.printButton(`这样会不会太辛苦了？`, 1);
    await era.input();
    await falcon.say_and_wait(
      `比起其他${falcon.uma_sex_title}来说，或许飞鹰子的特点就是活力的模样呢。`,
    );
    await era.printAndWait(
      `作为${falcon.uma_sex_title}偶像的${falcon.name}，受邀在小镇的告别演唱会上献唱。`,
    );
    await era.printAndWait(
      `也是为了在这个小镇上新结识的粉丝与朋友们，即使疲惫不堪也必须全力以赴。`,
    );
    await me.say_and_wait(`今晚的演唱会对于粉丝们来说，一定是一生一次的演出！`);
    await era.printAndWait(`至少做好身为训练员的职责。`);
    await falcon.say_and_wait(
      `对于训练员${me.adult_sex_title}也是这样吗……飞鹰子现在充满了活力！`,
    );
    era.drawLine({ content: '演唱会结束后' });
    await falcon.say_and_wait(`～～～～♪ 谢谢大家！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `在附近小镇里举行的演唱会意外的很有人气，甚至有因为听到飞鹰子要开演唱会而专门开了3个小时车过来赶过来的粉丝。`,
    );
    await era.printAndWait(
      `对于很多人来说比起演出，能亲眼见证作为泥地偶像的${falcon.name}才是真正的目的吧。`,
    );
    await falcon.say_and_wait(
      `嗯嗯！大家的呼唤传达到了飞鹰子的耳朵里了！飞鹰子很高兴哦！`,
    );
    await say_by_passer_by(`粉丝们`, `再来一首！飞鹰子！再来一首！`);
    await falcon.say_and_wait(`那么就再来一首……`);
    await era.printAndWait(`${falcon.name}注意到了${callname}的视线。`);
    await falcon.say_and_wait(
      `啊哈哈……现在已经很晚了，还有的粉丝是从很远的地方专门来看飞鹰子的演唱会的……作为${falcon.uma_sex_title}偶像，飞鹰子必须为每一位粉丝考虑，所以非常抱歉！`,
    );
    await falcon.say_and_wait(
      `不过，告诉大家一个好消息！这次演唱会已经拜托飞鹰子的训练员上传到了马推和视频网站上！`,
    );
    await falcon.say_and_wait(`大家可以将飞鹰子闪耀的模样随时重播哦❤`);
    await falcon.say_and_wait(`那么！让我们喊出我们的口号！`);
    await falcon.say_and_wait(`如果飞鹰子逃跑的话？`);
    await say_by_passer_by(`粉丝们`, `就只能追上去了！`);
    await falcon.say_and_wait(`要一直追下去吗？`);
    await say_by_passer_by(`粉丝们`, `一直追到地平线的大舞台！`);
    await falcon.say_and_wait(`谢谢大家⭐`);
    await era.printAndWait(
      `等到现场的粉丝们渐渐散去，整个舞台只剩下了${me.actual_name}和${falcon.name}。`,
    );
    era.printButton(`太精彩了。`, 1);
    await era.input();
    await era.printAndWait(`${falcon.name}露出了满足的表情。`);
    await era.printAndWait(
      `站在舞台之上蹦跳的双腿，在${callname}轻轻抱起${falcon.sex}的一瞬间便像破娃娃一样瘫软在了地上。`,
    );
    await falcon.say_and_wait(`……真希望每天都能像现在这样。`);
    await era.printAndWait(`飞鹰子的${falcon.sex}眼里却依然闪闪发光。`);
    await falcon.say_and_wait(
      `按照这种情况下去的话，说不定飞鹰子也能突破那道障碍呢！`,
    );
    await era.printAndWait(
      `沙地因为${falcon.name}的存在，原本只关心草地的观众们也慢慢将视线注视到了现在。`,
    );
    await me.say_and_wait(`一定会成功的！`);
    await era.printAndWait(
      `听到${callname}的话语后，${falcon.name}看向了观众席。`,
    );
    await falcon.say_and_wait(`就这样一步步的迈向最高的舞台。`);
  };
  handlers[47 + 39] = async (falcon, me, callname) => {
    // 萱草 忘忧草，寓意忘记烦恼。// 过量摄入可能会中毒
    await print_event_name('萱草', falcon);
    await era.printAndWait(`在商业街举行的突击演唱会\n`);
    await falcon.say_and_wait(`～～～♪大家辛苦了！`);
    await era.printAndWait(
      `以沙地为作战方向，在最先头一直闪耀的${falcon.uma_sex_title}偶像——${falcon.name}，如今已经是热门话题。`,
    );
    await era.printAndWait(
      `不少人为了亲眼目睹${falcon.name}活跃的表现而专门购票前来观看。`,
    );
    await era.printAndWait(
      `夸张的说，沙地===${falcon.name}几乎都已经要实现了。`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `……正如多大的名声就会迎来多大的考验，虽说是${falcon.name}自愿的缘故而奔波于各类广告之间，但繁忙时训练都被迫停止有点让${callname}笑不出来。`,
    );
    await me.say_and_wait(`……等到现在的合同结束后，我必须和飞鹰子好好谈谈了。`);
    await era.printAndWait(
      `虽说是尊重${falcon.name}意志的缘故，但真的能称得上是自由吗？`,
    );
    await say_by_passer_by(
      `狂热粉丝A`,
      `虽然每天上班很累！但一看到飞鹰子的表演，身上的疲惫似乎都已经消失了！`,
    );
    await say_by_passer_by(
      `狂热粉丝B`,
      `我可是飞鹰子代言过的每一个周边全部都收集了！如果要说用实际行动来支持飞鹰子，那绝对是我对飞鹰子的爱最深！`,
    );
    await say_by_passer_by(
      `狂热粉丝C`,
      `开什么玩笑！我可是从飞鹰子还未出道的时候就已经开始支持飞鹰子的资深粉丝！虽然现在经济有点拮据……不过对飞鹰子的爱比${callname}们更强！`,
    );
    await era.printAndWait(
      `被粉丝们称作「偶像制作人」的你，本职却几乎被人所遗忘，你看着越来越狂热的粉丝群体，心中的担忧越来越深。`,
    );
    await me.say_and_wait(
      `……也许是现在的人内心越来越渴求寻找一个精神寄托的存在吧。`,
    );
    await era.printAndWait(`暂且用这个理由安慰自己。`);
    await era.printAndWait(
      `看着不远处在舞台之上与粉丝互动的${falcon.teen_sex_title}，精神恐怕也已经到极限了吧。`,
    );
  };
};
