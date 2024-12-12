const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async function () {
  const falcon = get_chara_talk(46),
    me = get_chara_talk(0),
    chara4_talk = get_chara_talk(4),
    event_marks = new FalconEduMarks(),
    edu_weeks = era.get('cflag:46:育成回合计时');
  let wait_flag = false;
  if (event_marks.fight_idol === 1) {
    event_marks.fight_idol++;
    await print_event_name(`偶像的奋斗！`, falcon);
    await era.printAndWait(
      `出道战之后，因为${falcon.name}奋战的结果，飞鹰子作为泥地冉冉升起的新星吸引了许多粉丝。`,
    );
    await falcon.say_and_wait(
      `哇啊……飞鹰子在马推上的粉丝数一口气突破到四位数了呢⭐`,
    );
    era.printButton(`飞鹰子已经是展露头角的偶像了！`, 1);
    await era.input();
    await falcon.say_and_wait(`飞鹰子并没有这么厉害啦……`);
    await falcon.say_and_wait(
      `飞鹰子只是希望能站在更大的舞台之上，面对为了飞鹰子前来的粉丝们献上歌曲！`,
    );
    await falcon.say_and_wait(
      `……以顶级${falcon.get_uma_sex_title()}偶像的身份⭐`,
    );
    era.printButton(`接下来向着顶级偶像的道路一口气前进吧！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `......训练员${me.get_adult_sex_title()}也帮助了我很多呢，把刚才飞鹰子说的话忘了吧⭐`,
    );
    await era.printAndWait(`不知想到了什么，偷偷捂着嘴笑着的飞鹰子。`);
    await me.say_and_wait(`那么，接下来的计划是？`);
    await falcon.say_and_wait(`嗯——首先在全国各地进行巡演提高泥地的人气！`);
    await me.say_and_wait(`辗转于各个地方赛场吗？`);
    await me.say_and_wait(`接下来就以地方赛的优胜为目标积累粉丝吧！`);
    await falcon.say_and_wait(`是！`);
    await falcon.say_and_wait(`飞鹰子已经迫不及待出发……`);
    await me.say_and_wait(`等一下！`);
    await falcon.say_and_wait(`知道了！`);
  } else if (event_marks.beginning === 1) {
    event_marks.beginning++;
    // 对于偶像活动相当热枕，但对于比赛有点强迫自己上去，可能是对失败未来的恐惧
    // 主体 ：奋力向前，逆流而上 飞鹰子与训练员旅游时闲聊得出的结论
    // 人是一种很容易寂寞的生物，在曲终人散之后，从亢奋的精神慢慢退回，然后只剩下疲惫
    // 一般人眼中的乐观，仅仅只是将四处收集而来的瓦片聚拢起来，然后拼凑起来的乐观，因此，面对较大的危险就会四分五裂
    // 因此，不过只是装作乐观的悲观者罢了
    // 然而，悲观往往是对自身所做成就的忽视，如果将看向未来的视野收回到自身不足5米的可操纵区域，反而会得到继续下去的动力
    // 过大的期待会造成止步不前，最终会被借口所埋没，良心也因此蒙尘，最后欠下一个又一个谎言的债务
    await print_event_name(`喊声隆隆的沙地赛`, falcon);
    // 训练员遵守约定带${falcon.name}看沙地赛
    await era.printAndWait(`某处的沙地赛\n`);
    await say_by_passer_by(
      `解说`,
      `比赛已经进入最终阶段！二号选手与四号选手从马群之中脱颖而出，开始了最后的角逐！`,
    );
    await say_by_passer_by(`观众`, `唔噢噢噢噢噢噢噢！`);
    await era.printAndWait(
      `雪花从天空悄然落到肩头，然后化为了潮湿的水汽，看台上的观众们裹着厚厚的围巾与大衣，手中挥舞着旗帜和彩带，此起彼伏的加油助威声打破了冬日的宁静。`,
    );
    await say_by_passer_by(`赛${falcon.get_uma_sex_title()}`, `哈啊啊啊啊！`);
    await era.printAndWait(
      `两名马娘在前半段的比赛中一直位于先头阵营，但并未真正与马群拉开差距。直到最后的冲刺阶段才骤然加速，将马群逐渐甩在后面。`,
    );
    await era.printAndWait(
      `观众席上的尽然有序的加油助威声被戏剧性的场面划破而杂乱无章。`,
    );
    await say_by_passer_by(
      `解说`,
      `两人之间毫不相让，距离终点还有200米！100米！50米！最后的胜利者是——`,
    );
    await era.printAndWait(`时间在此凝固。`);
    await era.printAndWait(
      `追赶的${falcon.get_uma_sex_title()}与前方的${falcon.get_uma_sex_title()}并肩做好了超越的架势，而后——`,
    );
    await falcon.say_and_wait(`这就是训练员先生想让我看到的画面吗？`);
    await era.printAndWait(`凝固的时间再次移动。`);
    await era.printAndWait(
      `取得胜利的${falcon.get_uma_sex_title()}，不顾浑身被沙土所覆盖，将混合着汗水与泪水的笑脸献给了观众们。\n\n`,
    );
    await era.printAndWait(
      `场地的聚光灯集中照射在胜者的那位身上，其他马娘宛如众星拱月，将胜利的果实衬托得如此甜美诱人。`,
    );
    await era.printAndWait(
      `激动的喜悦也好，失败的不甘也罢，从喉咙之中挤出的不甘呐喊、喉咙嘶哑也要触及到的那片天空。`,
    );
    await era.printAndWait(
      `即使是寒冷的夜晚，这份炽热的情感也切实传到了在场的每一位观众心中。`,
    );
    await falcon.say_and_wait(`哇啊啊——沙地赛，比我想象之中还要热闹呢。`);
    await falcon.say_and_wait(
      `在舞台最中央的${falcon.get_uma_sex_title()}，观众们的注意力全部集中在这里……`,
      true,
    );
    await falcon.say_and_wait(`如果飞鹰子也能站在这里的话。`, true);
    await falcon.say_and_wait(`飞鹰子……飞鹰子感动得都要哭出来了！`);
    await era.printAndWait(`从出口处离开的${falcon.name}诉说着心中的感受。`);
    await falcon.say_and_wait(
      `没想到沙地赛比想象中还要精彩，观众们的热情，还有马娘们为此付出的爱，与选择草地的马娘们都是一样的！`,
    );
    await falcon.say_and_wait(`飞鹰子决定了！`);
    await era.printAndWait(`被热情点燃的少女认真的看向你。`);
    await falcon.say_and_wait(
      `飞鹰子要以沙地赛为起点，顺着这条赛道一气不停的直直冲向顶级马娘偶像的终点！`,
    );
    await era.printAndWait(
      `吵闹声引得周围的游客纷纷侧目，而醒目飞鹰的泥地偶像之路才刚刚开始。`,
    );
    new FalconEduMarks().start++;
    add_event(event_hooks.week_start, new EventObject(46, cb_enum.edu));
    wait_flag = get_attr_and_print_in_event(46, undefined, 120) || wait_flag;
  } else if (edu_weeks === 34) {
    await print_event_name(`向着闪耀大舞台不停歇的前进！`, falcon);
    await falcon.say_and_wait(`……呼⭐谢谢大家！`);
    await era.printAndWait(`即兴歌曲串烧结束后，稀稀拉拉的掌声汇聚成了声流。`);
    await era.printAndWait(
      `出道战结束后，在赛场以及舞台上闪闪发光的飞鹰子受到了大量的关注。`,
    );
    await era.printAndWait(
      `马推上‘${falcon.get_uma_sex_title()}偶像？！${falcon.name}⭐’受到大量讨论。`,
    );
    await era.printAndWait(`随之而来的突击演出活动也一口气收获了大量粉丝。`);
    await me.say_and_wait(`第一步比想象中还好！`, true);
    await era.printAndWait(
      `被好奇的观众们团团围住，于河边草地的简易舞台上即兴表演的${falcon.name}难掩心中的喜悦。`,
    );
    await me.say_and_wait(`辛苦了！`);
    await era.printAndWait(
      `等到最后一名粉丝满意离开后，你走向了${falcon.name}。`,
    );
    await era.printAndWait(
      `将准备好的毛巾递给她时，被汗水打湿的触感混杂着奇异的香味跳动着人的神经。`,
    );
    await falcon.say_and_wait(`非常感谢⭐`);
    await era.printAndWait(`你协助${falcon.name}将搭建的舞台重新收起。`);
    await falcon.say_and_wait(`~~~♪`);
    await era.printAndWait(`心情不错的${falcon.name}哼唱着小曲。`);
    await me.say_and_wait(`辛苦了！接下来我来善后吧。`);
    await era.printAndWait(`正准备揽下所有收尾工作的你被握住了手腕。`);
    await falcon.say_and_wait(
      `其实也没有那么辛苦啦⭐，只是看到这么多支持着我的粉丝们，自己不知为何非常感动呢。`,
    );
    await falcon.say_and_wait(`所以飞鹰子也借着收拾的时间回味着刚才的盛况呢。`);
    await falcon.say_and_wait(`……而且。`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(
      `从手腕转而轻轻拉扯着衣袖的${falcon.name}正看着你。`,
    );
    await me.say_and_wait(
      `飞鹰子的表演非常精彩，作为一直关注着飞鹰子的粉丝真的很感动！`,
    );
    await falcon.say_and_wait(`真的吗！`);
    await era.printAndWait(`${me.actual_name}紧紧握住了飞鹰子的手。`);
    await falcon.say_and_wait(`那么，接下来去哪里走一下吧。`);
    await me.say_and_wait(`说起来的话，最近有家拉面店很火爆，去看看吧？`);
    era.drawLine({ content: '拉面店内' });
    await falcon.say_and_wait(`三、二、一，胡萝卜！`);
    await era.printAndWait(`${falcon.name}拉着你与精心摆放的两碗拉面的合照。`);
    await me.say_and_wait(`真是厉害啊。`);
    await era.printAndWait(
      `不管是从摆放角度还是时机的捕捉，都是无可挑剔的程度。`,
    );
    await me.say_and_wait(`飞鹰子说不定有作为摄像师的才能？`);
    await era.printAndWait(
      `看着飞快打字的${falcon.name}，你默默尝了一口拉面。`,
    );
    await falcon.say_and_wait(`是${falcon.get_uma_sex_title()}偶像！`);
    await era.printAndWait(`${falcon.get_uma_sex_title()}偶像究竟是什么？`);
  } else if (event_marks.target_finish === 1) {
    event_marks.target_finish++;
    await print_event_name(`目标达成`, falcon);
    await falcon.say_and_wait(`干杯⭐`);
    era.printButton(`干杯！`, 1);
    await era.input();
    await era.printAndWait(
      `成功达成目标之后，${me.actual_name}和${falcon.name}在训练室里开了小小的庆祝会。`,
    );
    await falcon.say_and_wait(
      `就这样一步一步成为${falcon.get_uma_sex_title()}偶像吧♪`,
    );
    await era.printAndWait(`飞鹰子看上去非常高兴的样子。`);
    await era.printAndWait(`趁着这股气势，`);
    await me.say_and_wait(`飞鹰子为什么打算成为偶像呢？`);
    await era.printAndWait(`向飞鹰子询问心中一直以来的疑惑。`);
    await falcon.say_and_wait(
      `飞鹰子的话，希望能像小时候在遇到的偶像那样，坚强的闪耀下去。`,
    );
    await era.printAndWait(`飞鹰子紧紧盯着你的双眼。`);
    await falcon.say_and_wait(
      `飞鹰子小时候因为经常搬家的缘故，所以朋友一直都很少。`,
    );
    await falcon.say_and_wait(
      `即使想要努力加深羁绊，但都会因为位置的变化而渐渐疏远。`,
    );
    await falcon.say_and_wait(`所以，飞鹰子的话，其实没有故乡这个概念呦。`);
    await era.printAndWait(`面带微笑的飞鹰子搅动着果汁不知道在想什么`);
    await falcon.say_and_wait(
      `想着不知道接下来该做些什么的时候，来到了经常路过的空地旁。`,
    );
    await era.printAndWait(
      `咕噜咕噜搅拌着的果汁像${falcon.name}的内心一样旋转着。`,
    );
    await falcon.say_and_wait(`然后遇到了闪闪发光的偶像和粉丝们。`);
    await era.printAndWait(`这么说着的飞鹰子露出了那种复杂的神情。`);
    await falcon.say_and_wait(
      `酥酥麻麻的电流感从头顶一直触及到脚尖，呼吸也不知何时变得急促起来。`,
    );
    await falcon.say_and_wait(
      `......就像是敲击一连串的水晶发出的叮叮当当的感觉⭐`,
    );
    await era.printAndWait(`${falcon.name}有节奏的敲击着玻璃杯的不同位置。`);
    era.printButton(`所以飞鹰子也想成为偶像吗？`, 1);
    await era.input();
    await falcon.say_and_wait(`嗯！目标是C位！这个是绝对不会让给其他人的！`);
    await me.say_and_wait(`一起努力吧！`);
    await falcon.say_and_wait(
      `好！接下来的话也请多多指教了！训练员${falcon.get_uma_sex_title()}⭐`,
    );
    await me.say_and_wait(`我也是，请多指教了，飞鹰子。`);
  } else if (edu_weeks === 47 + 12) {
    // 默认皋月赏结束
    // 演出结束之后，回到学校时发现缎带掉了一根，急忙寻找，离宵禁很近，抉择
    // 到失去地点，没找到，绝望时，被匆匆赶来的小${falcon.get_uma_sex_title()}捡到，被询问与训练员之间的感情
    // ${falcon.name}突然意识到了自己对训练员的感情可能导致偶像事业的重创
    // 陷入不安之中
    await print_event_name(`早已察觉的恋心`, falcon);
    await era.printAndWait(`宿舍\n`);
    await falcon.say_and_wait(
      `训练员${falcon.get_uma_sex_title()}，谢谢你送飞鹰子回宿舍！`,
    );
    await era.printAndWait(
      `目送着离去的身影渐渐消失在视野尽头，${falcon.name}也准备回到宿舍中。`,
    );
    await era.printAndWait(
      `因为参加比赛的缘故，同时也要满足一直支持${falcon.name}的愿望，为了在这两者之间保持平衡，你努力说服了${falcon.name}在参加比赛这个星期减少突击演出的时间。`,
    );
    await era.printAndWait(
      `为了珍惜宝贵的演出时间，${falcon.name}比以往更加努力的闪耀着。`,
    );
    await falcon.say_and_wait(`……训练员${falcon.get_uma_sex_title()}。`);
    falcon.print(
      `目送训练员${falcon.get_uma_sex_title()}离去的身影，不知不觉已经成为了每天的日课。`,
    );
    falcon.print(
      `为了站在最大舞台的愿望，同时也要为了一直支持飞鹰子的粉丝，飞鹰子每天都得很充实。`,
    );
    falcon.print(
      `啊，虽然有时候演出结束时，两腿瘫软到几乎不想动的情况也越来越多了。`,
    );
    falcon.print(
      `是偶像修行的程度还太浅的缘故吧，看来飞鹰子离顶级偶像还有很长的路要走呢。`,
    );
    falcon.print(`不能让粉丝们看到飞鹰子消极的一面，既然这样的话。`);
    falcon.print(`嗯——下一次要不要穿决胜服进行演出呢。`);
    falcon.print(
      `支持飞鹰子的大家们有很多想要亲眼看飞鹰子穿决胜服的演出的样子，呢。`,
    );
    falcon.print(
      `因为比赛开始时恰好是工作日的缘故所以没能亲自观看吗……大家都过着很辛苦的生活呢。`,
    );
    falcon.print(`决定了！飞鹰子才要以最闪耀的姿态带给大家幸福！`);
    falcon.print(`令人安心的手势！夺去目光的舞步！以及钻石般亮晶晶的决胜服！`);
    falcon.print(`啊——说起来发型可能也要调整。`);
    era.printButton(`欸？`, 1);
    await era.input();
    await era.printAndWait(
      `用发髻固定的头发像是终于解放了一样，固定住马尾的皮筋绷断了。`,
    );
    falcon.print(`终于到极限了吗？`);
    await era.printAndWait(
      `像是自言自语一样的${falcon.name}下意识的抚摸着刘海处的缎带。`,
    );
    falcon.print(`一二……三呢？`);
    falcon.print(`心中泛起一丝不安，我将缎带取下一遍又一遍徒劳的数着。`);
    await falcon.say_and_wait(`得赶快顺着回来的道路去找。`, true);
    falcon.print(`那是对我最重要的，温柔的母亲亲手制作的决胜服。`);
    await falcon.say_and_wait(`可是时间。`, true);
    falcon.print(`时针与分针的夹角看上去连水果巴菲上的草莓都塞不下。`);
    falcon.print(`如果是打破宵禁的话，之后会被手纲小姐说教的吧。`);
    falcon.print(`如果事先和奇石同学说一声的话，应该可以通融一下吧？`);
    await falcon.say_and_wait(`飞鹰子！加油！`);
    await era.printAndWait(`然而身体已经先大脑一步迈出去了。`);
    falcon.print(`啊啊，总是这样。`);
    falcon.print(
      `扑哧扑哧闪着光环的天使飞鹰子叹息着，一旁的恶魔飞鹰子兴高采烈的加油喝彩。`,
    );
    await falcon.say_and_wait(
      `全力以赴的面对现在的困境，后果什么的就交给明天的飞鹰子处理！`,
    );
    await era.printAndWait(
      `确定了前进的方向后，${falcon.name}不错过任何一处角落的全速前进。`,
    );
    era.drawLine();
    falcon.print(
      `特雷森门口，沿着商业街的小道，直到目的地河边草地，一路上都没有缎带的样子。`,
    );
    falcon.print(`就像是缎带长出了翅膀扑哧扑哧飞走了一样。`);
    falcon.print(`啊啊，亲爱的缎带小姐，希望你在伊甸园的生活一直顺利。`);
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
      `难道这就是训练员说过的专门吃不听话${falcon.get_uma_sex_title()}的${falcon.get_uma_sex_title()}杀手吗？`,
      true,
    );
    await falcon.say_and_wait(`飞鹰子，飞鹰子不好吃啊啊啊！`);
    await say_by_passer_by(`小${falcon.get_uma_sex_title()}`, `欸？`);
    await era.printAndWait(`澎！`);
    await era.printAndWait(`黑影旁的绿化树轰然倒下。`);
    await say_by_passer_by(
      `小${falcon.get_uma_sex_title()}`,
      `果然是飞鹰子姐姐！`,
    );
    await era.printAndWait(
      `丝毫没被吓到的小${falcon.get_uma_sex_title()}兴奋的凑上前来。`,
    );
    era.drawLine();
    falcon.print(
      `小心翼翼将缎带收进口袋之中，看着眼前为了归还缎带而偷偷离开的少女。`,
    );
    falcon.print(`失而复得的安慰感转瞬又被自责所覆盖。`);
    falcon.print(`如果没有为了缎带逃了宵禁的话，飞鹰子恐怕会。`);
    falcon.print(
      `看着眼前期待着表扬的少女，至少飞鹰子会负起责任好好把你送回去的。`,
    );
    await era.printAndWait(
      `${falcon.name}蹲下身体，努力保证自己的视线与少女平行。`,
    );
    await falcon.say_and_wait(
      `谢谢你，飞鹰子一定会为了大家努力成为${falcon.get_uma_sex_title()}偶像的。`,
    );
    falcon.print(
      `学着训练员${falcon.get_uma_sex_title()}抚摸的手法，尽可能温柔的笑着。`,
    );
    await falcon.say_and_wait(`抱歉，飞鹰子还是太不成熟了。`, true);
    falcon.print(
      `看着眼前期待着表扬的少女，至少飞鹰子会负起责任好好把你送回去的。`,
    );
    await falcon.say_and_wait(`接下来让飞鹰子带你回去吧。`);
    await say_by_passer_by(
      `小${falcon.get_uma_sex_title()}`,
      `欸？真的吗！飞鹰子姐姐要送我回去了！`,
    );
    await falcon.say_and_wait(
      `眼前的少女为了自己冒险得到的超乎想象的报酬而雀跃着。`,
    );
    await falcon.say_and_wait(`一起前往最闪耀的舞台吧！`);
    falcon.print(`将破损的缎带小心收起，轻轻牵起少女的小手。`);
    era.drawLine();
    await say_by_passer_by(
      `小${falcon.get_uma_sex_title()}`,
      `谢谢你送我回家！`,
    );
    await era.printAndWait(
      `在住宅的大门前，小${falcon.get_uma_sex_title()}向${falcon.name}道谢。`,
    );
    await falcon.say_and_wait(`不，我这边才是。`);
    falcon.print(`苦笑着做出了回礼。`);
    await falcon.say_and_wait(
      `就像在路上说好的一样，不要像今晚一样偷偷出来了！这是和飞鹰子之间的约定呦？`,
    );
    await say_by_passer_by(`小${falcon.get_uma_sex_title()}`, `知道了！`);
    await era.printAndWait(
      `正准备从虚掩的大门进入的${falcon.get_uma_sex_title()}像是想到了什么一样，回过头看向了${falcon.name}。`,
    );
    await say_by_passer_by(
      `小${falcon.get_uma_sex_title()}`,
      `说起来，飞鹰子姐姐旁边的大哥哥是谁？`,
    );
    await say_by_passer_by(
      `小${falcon.get_uma_sex_title()}`,
      `是飞鹰子的男朋友吗？`,
    );
    falcon.print(`不，不是这种关系。`);
    falcon.print(`正打算这么反驳时，却怎么也说不出口。`);
    falcon.print(`像是不小心把鸡蛋整个吞下一样，话语卡在了喉咙之中。`);
    await say_by_passer_by(
      `小${falcon.get_uma_sex_title()}`,
      `明天我也会看飞鹰子姐姐的表演的！`,
    );
    falcon.print(`大门在眼前缓缓关上了。`);
    falcon.print(`啊啊，其实我一直都知道。`);
    falcon.print(`只是自己不知道该怎么办才好。`);
    falcon.print(`今晚比想象中还要难熬啊。`);
    await era.printAndWait(
      `第二天，小${falcon.get_uma_sex_title()}一家向特雷森表达了对${falcon.name}送偷跑出门的小${falcon.get_uma_sex_title()}回家的感谢，为此训练员被手纲小姐狠狠的批评了。`,
    );
  } else if (edu_weeks === 47 + 21) {
    await print_event_name(`训练室的花`, falcon);
    era.printButton(`终于结束了。`, 1);
    await era.input();
    await era.printAndWait(
      `整理完最后一份文件，${me.actual_name}如释重负般的叹了一口气。`,
    );
    await me.say_and_wait(`作为训练员真是辛苦啊`, true);
    await era.printAndWait(
      `不知何时训练室被金黄色的夕阳悄悄拜访，窗外热火朝天的训练声音让${me.actual_name}回忆起了作为助理训练员的生活。`,
    );
    await era.printAndWait(
      `在沙地上奔走的${falcon.get_uma_sex_title()}偶像——${falcon.name}，在你的指导之下已经是沙地冉冉升起的一颗新星了。`,
    );
    await era.printAndWait(
      `但是，看着${falcon.name}日益增大的粉丝群体，以及变得越来越慢的日程表。`,
    );
    await era.printAndWait(`不知为何，心里的角落变得空落落的。`);
    await me.say_and_wait(`......我有好好完成作为训练员的职责吗？`, true);
    await era.printAndWait(
      `不知道是那个地方还有隐忧没有处理完毕，你只能将注意力放在察觉到的范围内。`,
    );
    await era.printAndWait(
      `呆在空旷的训练室里，不知不觉间消极的想法就从记忆的角落里溢出。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}我回来了⭐`);
    await era.printAndWait(
      `不合适宜的推门声响起，圆圆的小脑袋从推门的间隙中窜了出来。`,
    );
    await me.say_and_wait(`辛苦了。在今天的训练开始之前，先休息一会吧。`);
    await era.printAndWait(
      `为了重新振作起来，你离开座位，帮${falcon.name}倒了一杯红茶。`,
    );
    await era.printAndWait(`然后看着眼前坐正的${falcon.name}。`);
    await era.printAndWait(
      `与平时的${falcon.name}相比，怀中多了一份不知是谁赠送的种子。`,
    );
    await falcon.say_and_wait(`飞鹰子也不知道名字，不过很好闻哦。`);
    await era.printAndWait(
      `${falcon.name}察觉到了你的视线偏移，将手中的透明购物袋挥了挥。`,
    );
    await era.printAndWait(
      `在你和${falcon.name}一点一滴的努力下，${falcon.get_uma_sex_title()}偶像的概念总算推了出去。`,
    );
    await era.printAndWait(
      `现如今，一提到${falcon.get_uma_sex_title()}偶像，关注沙地的观众们都会想到${falcon.name}。`,
    );
    await era.printAndWait(
      `拜此所赐，${falcon.name}也聚集了数量不少的粉丝团体。`,
    );
    await falcon.say_and_wait(`嗯，是附近花店的店员姐姐送给我的。`);
    await era.printAndWait(
      `不少粉丝都把${falcon.name}当作了自己理想的投影，所以伸出援手与帮助也是正常的吧？`,
    );
    await me.say_and_wait(`......这样啊。`);
    await era.printAndWait(
      `如果是信件，则会由身为训练员的你筛选之后再给${falcon.name}看，如果是包装的礼物也是同理。`,
    );
    await era.printAndWait(
      `${falcon.name}意外的在这方面表现的很顺从，同时也有粉丝们之间的自律缘故，所以现在${falcon.sex}的小脑袋还没被丧气话所淹没。`,
    );
    await me.say_and_wait(`居然收到了这么珍贵的礼物，那么就好好养起来吧。`);
    await me.say_and_wait(
      `我想想，适合植物生长的地方……先放在靠近窗户的阴影处吧。`,
    );
    await falcon.say_and_wait(`唉，不应该放在阳光下吗？`);
    await me.say_and_wait(
      `刚上盆的幼苗不可以直接照射在阳光之下，所以先浇水后放在阴凉处。`,
    );
    await era.printAndWait(
      `看着${falcon.name}将花盆放下后，啪嗒啪嗒地坐在了你的旁边。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}`);
    await me.say_and_wait(`嗯？飞鹰子怎么了？`);
    await falcon.say_and_wait(`没什么哦⭐`);
    await era.printAndWait(
      `${falcon.name}一边发出像是某种计划成功的笑声，一边盯着你看。`,
    );
    await era.printAndWait(`时间便在闲聊与训练之中度过。`);
  } else if (edu_weeks === 47 + 32) {
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
      `就这样活用在夏季合宿中学到的知识，就这样让${falcon.name}被更多的粉丝们知道⭐`,
    );
    await era.printAndWait(
      `如果是人类的身体，在这种压力之下已经不堪重负，但${falcon.get_uma_sex_title()}却只是稍作休息之后便回复了些许力气。`,
    );
    await falcon.say_and_wait(`......啊！对了！演唱会马上就要开始了！`);
    await era.printAndWait(
      `作为${falcon.get_uma_sex_title()}偶像的${falcon.name}，受邀在小镇的告别演唱会上献唱。`,
    );
    await me.say_and_wait(`那我来送飞鹰子过去吧！`);
    await era.printAndWait(
      `原本是想这么说的，但是看到${falcon.name}被沙子与汗水沾湿的训练服。`,
    );
    await falcon.say_and_wait(`......飞鹰子就这么过去的话也不太好。`);
    await era.printAndWait(`就这么穿着泳装过去的话确实不行。`);
    await falcon.say_and_wait(
      `所以飞鹰子要去更衣室换衣服了！训练员${me.get_adult_sex_title()}不要偷看哦⭐`,
    );
    era.drawLine({ content: '演唱会结束后' });
    await falcon.say_and_wait(`~~~~♪ 谢谢大家！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `在附近小镇里举行的演唱会意外的很有人气，甚至有因为听到飞鹰子要开演唱会而专门开了3个小时车过来赶过来的粉丝。`,
    );
    await falcon.say_and_wait(
      `嗯嗯！大家的声音传到了飞鹰子的耳朵里了！飞鹰子很高兴哦！`,
    );
    await say_by_passer_by(`粉丝们`, `再来一首！再来一首！`);
    await falcon.say_and_wait(
      `谢谢大家的支持！不过现在已经很晚了，还有的粉丝是从很远的地方专门来看飞鹰子的演唱会的……作为${falcon.get_uma_sex_title()}偶像，飞鹰子必须为每一位粉丝考虑。`,
    );
    await falcon.say_and_wait(
      `但是！作为告诉大家一个好消息！这次演唱会已经拜托飞鹰子的训练员上传到了马推和视频网站上！`,
    );
    await falcon.say_and_wait(`接下来大家回去的时候可以听着飞鹰子的歌曲哦！`);
    await falcon.say_and_wait(`那么！让我们喊出我们的口号！`);
    await falcon.say_and_wait(`如果飞鹰子逃跑的话？`);
    await say_by_passer_by(`粉丝们`, `就这能追上去了！`);
    await falcon.say_and_wait(`要一直追下去吗？`);
    await say_by_passer_by(`粉丝们`, `一直追到地平线的大舞台！`);
    await falcon.say_and_wait(`谢谢大家⭐`);
    await era.printAndWait(
      `等到现场的粉丝们渐渐散去，后台里只剩下了${me.actual_name}和飞鹰子。`,
    );
    await me.say_and_wait(`飞鹰子现在还好吗？`);
    await era.printAndWait(
      `从早上开始的高强度训练，之后又进行了二小时的演唱会，就算将在车上的休息时间算在内，${falcon.name}休息时间也不超过1小时。`,
    );
    await era.printAndWait(
      `站在舞台之上蹦跳的双腿，在你轻轻抱起她的一瞬间便像破娃娃一样瘫软在了地上。`,
    );
    await era.printAndWait(
      `就算能用意志到达更远的地方，身体却已经连最后一丝力气都用在了蹦跳之上。`,
    );
    await era.printAndWait(`——然而，${falcon.name}露出了满足的表情。`);
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
      `${falcon.name}的存在本身就是给在泥地默默努力的赛${falcon.get_uma_sex_title()}们最好的安慰。`,
    );
    await era.printAndWait(
      `——是那种，如果我再更加努力一点的话，就能达到她的水平。`,
    );
    await era.printAndWait(`在欢声雷动的舞台下，是疲惫的人们所奉献的成果。`);
  } else if (edu_weeks === 47 + 39) {
    // 萱草 忘忧草，寓意忘记烦恼。
    // 过量摄入可能会中毒
    await print_event_name('萱草', falcon);
    await era.printAndWait(`在商业街举行的突击演唱会\n`);
    await falcon.say_and_wait(`~~~♪大家辛苦了！`);
    await era.printAndWait(
      `以沙地为作战方向，在最先头一直闪耀的${falcon.get_uma_sex_title()}偶像——${falcon.name}，如今已经是热门话题。`,
    );
    await era.printAndWait(
      `不少人为了亲眼目睹${falcon.name}活跃的表现而专门购票前来观看。`,
    );
    await era.printAndWait(
      `夸张的说，沙地===${falcon.name}几乎都已经要实现了。`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `……正如多大的名声就会迎来多大的考验，虽说是${falcon.name}自愿的缘故而奔波于各类广告之间，但繁忙时训练都被迫停止有点让你笑不出来。`,
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
      `开什么玩笑！我可是从飞鹰子还未出道的时候就已经开始支持飞鹰子的资深粉丝！虽然现在经济有点拮据……不过对飞鹰子的爱比你们更强！`,
    );
    await era.printAndWait(
      `被粉丝们称作“偶像制作人”的你，本职却几乎被人所遗忘，你看着越来越狂热的粉丝群体，心中的担忧越来越深。`,
    );
    await me.say_and_wait(
      `……也许是现在的人内心越来越渴求寻找一个精神寄托的存在吧。`,
    );
    await era.printAndWait(`暂且用这个理由安慰自己。`);
    await era.printAndWait(
      `看着不远处在舞台之上与粉丝互动的少女，精神恐怕也已经到极限了吧。`,
    );
  } else if (edu_weeks === 95 + 10) {
    await print_event_name('目眩感', falcon);
    await era.printAndWait(`训练室\n`);
    await era.printAndWait(`提不起劲。`);
    await era.printAndWait(
      `或许是因为${falcon.name}决绝的态度，不知道应该从什么方面入手。`,
    );
    await era.printAndWait(
      `是不是被${falcon.name}讨厌了？想要旁观${falcon.name}的演唱会都被${falcon.name}找了各种理由婉拒。`,
    );
    await era.printAndWait(`但是——`);
    await era.printAndWait(`因为被拒绝而更加恐慌。`);
    await me.say_and_wait(`可恶！`);
    await era.printAndWait(`借着用力捶打桌面发泄心中的情绪。`);
    await era.printAndWait(
      `想要告诉她，告诉她作为偶像追求自己的幸福这件事是没有任何问题的。`,
    );
    era.drawLine();
    falcon.print(`谢谢大家！`);
    falcon.print(`例行的2小时演唱会结束后，又一口气连唱了三首。`);
    falcon.print(`只要稍作休息，就能接着一口气连唱3小时。`);
    falcon.print(`但是，怎么也提不起干劲。`);
    falcon.print(`如果被粉丝们看到这副提不起干劲的状态。`);
    falcon.print(`恐怕连自己也无法原谅自己吧。`);
    falcon.print(`只要向训练员${falcon.get_uma_sex_title()}倾诉烦恼的话——`);
    falcon.print(`疲惫的身体传出了软弱的话语。`);
    await falcon.say_and_wait(
      `飞鹰子不能再让亲爱的训练员${falcon.get_uma_sex_title()}受到危险了。`,
      true,
    );
    falcon.print(
      `捂住受伤的部位，矗立在血泊之中的训练员${falcon.get_uma_sex_title()}。`,
    );
    falcon.print(`不行，不能再继续想下去了。`);
    falcon.print(
      `${falcon.name}作为${falcon.get_uma_sex_title()}偶像已经失格。`,
    );
    await era.printAndWait(`但是——`);
    falcon.print(
      `将心中的疑问强行压下，作为完美的${falcon.get_uma_sex_title()}偶像不能有任何瑕疵。`,
    );
    await falcon.say_and_wait(`飞鹰子加油！`);
    await era.printAndWait(
      `重新为自己打气，作为${falcon.get_uma_sex_title()}偶像的${falcon.name}从后台回到了舞台之上。`,
    );
  } else if (edu_weeks === 95 + 17) {
    await print_event_name('倘若泪水能回到眼眶', falcon);
    await era.printAndWait(`打定主意后，你便强行将${falcon.name}拉了过去。`);
    await me.say_and_wait(
      `抱歉，虽然这样非常失礼，不过有什么能改变的话，恐怕也只有这么做了。`,
    );
    await era.printAndWait(
      `不容分说强行拉过她的手腕，带着她向着目标地点前进。`,
    );
    await era.printAndWait(
      `虽然一开始受到惊吓而猛然加大力度，但骤然之间力度突然就变小了。`,
    );
    await era.printAndWait(`你的内心已经被即将实现的美好憧憬填满。`);
    await era.printAndWait(
      `想要告诉她，告诉她，作为偶像追求自己的幸福这件事是没有任何问题的。`,
    );
    await era.printAndWait(`你与${falcon.name}来到了这片空旷的草坪上。`);
    await era.printAndWait(`令人难以忍受的尴尬氛围在你们之间扩散开来。`);
    await era.printAndWait(
      `不用一个人背负着这么沉重的压力，之前的事情仅仅只是一个意外，只需要将注意力。`,
    );
    await era.printAndWait(`如果你是${falcon.name}。这种话能说服自己吗？`);
    await me.say_and_wait(`……请多信任我一点。`);
    await era.printAndWait(`飞鹰子已经不堪重负了。`);
    await falcon.say_and_wait(`……诶？`);
    await era.printAndWait(`${falcon.name}的语气之中夹杂着困惑与不解。`);
    await falcon.say_and_wait(
      `我一直都相信训练员${falcon.get_uma_sex_title()}呦？`,
    );
    await era.printAndWait(`不对，你摇了摇头。`);
    await me.say_and_wait(
      `不只是训练员与${falcon.get_uma_sex_title()}之间，也不止粉丝与偶像之间的关系，我希望能被${falcon.name}作为最信任的人对待。`,
    );
    await falcon.say_and_wait(
      `……哪怕是飞鹰子的缘故，训练员${falcon.get_uma_sex_title()}受到了伤害？`,
    );
    era.printButton(`我对${falcon.name}的爱不会因为这种程度受到动摇。`, 1);
    era.printButton(`我对飞鹰子的爱不会因为这种程度受到动摇。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`……诶？`);
      await era.printAndWait(
        `像是听到了不可思议的话语，${falcon.name}的瞳孔也一瞬间放大了。`,
      );
      await falcon.say_and_wait(
        `……真讨厌……最喜欢了……训练员${falcon.get_uma_sex_title()}怎么可以这样……`,
      );
      await falcon.say_and_wait(`这样下去的话，飞鹰子……还怎么……抱歉。`);
      await era.printAndWait(
        `像是错觉一样，随着下颚传来的剧痛，你陷入了黑暗之中。`,
      );
      await era.printAndWait(`就这样，沉沉的睡去。`);
    } else {
      await falcon.say_and_wait(`……飞鹰子吗？`);
      await era.printAndWait(`${falcon.name}的表情变得僵硬。`);
      await falcon.say_and_wait(
        `飞鹰子……果然还是飞鹰子才对呢……训练员${falcon.get_uma_sex_title()}。`,
      );
      await era.printAndWait(`像是相当怀念一样，眯起了眼睛。`);
      await falcon.say_and_wait(
        `呐……看着飞鹰子吧。如果是为了训练员${falcon.get_uma_sex_title()}的话，飞鹰子什么都……`,
      );
      await era.printAndWait(`黯淡火燃的眼神一瞬间陷入死寂之中。`);
      await falcon.say_and_wait(
        `不对！这样的飞鹰子才不是训练员${falcon.get_uma_sex_title()}喜欢的那个包容着所有粉丝们的${falcon.get_uma_sex_title()}偶像！`,
      );
      await era.printAndWait(`罪恶感像针一样刺入了胸口。`);
      await falcon.say_and_wait(
        `舞台之上的飞鹰子是所有粉丝们的，像这样……这样的行为是不可能被允许的。`,
      );
      await falcon.say_and_wait(
        `飞鹰子因为抛弃了作为${falcon.get_uma_sex_title()}偶像的原则，结果训练员${falcon.get_uma_sex_title()}像是破烂的布娃娃一样被随意丢弃在血泊之中`,
      );
      await falcon.say_and_wait(
        `可是，明明已经发誓绝对会将爱平等的分给所有的粉丝，可是……看到训练员${falcon.get_uma_sex_title()}的时候，飞鹰子还是忍不住像倾注更多的爱。`,
      );
      await falcon.say_and_wait(
        `飞鹰子不会将爱全部倾注在训练员${falcon.get_uma_sex_title()}身上，而将爱倾注在训练员${falcon.get_uma_sex_title()}身上的时候，飞鹰子也就不是飞鹰子了。`,
      );
      await era.printAndWait(
        `比起单纯的失败，在最大的努力下遇到的两难抉择，更令人感到悲哀。`,
      );
      await falcon.say_and_wait(`……如果是这样的话。`);
      await era.printAndWait(
        `像是错觉一样，随着下颚传来的剧痛，你陷入了黑暗之中。`,
      );
      await era.printAndWait(`就这样，沉沉的睡去。`);
    }
    era.drawLine();
    await era.printAndWait(`你又一次站在了这片草地上。`);
    await era.printAndWait(
      `废墟夹缝间的草地，从远处天空飘来的积雨云，那段令人怀念的美好时光。`,
    );
    await era.printAndWait(`以及旁边的少女。`);
    await era.printAndWait(`是啊，就是这种地方，才适合好好交流。`);
    await me.say_and_wait(`飞鹰子——`);
    await era.printAndWait(`飞鹰子没有任何回应。`);
    await me.say_and_wait(`飞鹰子？`);
    await era.printAndWait(`你试探性的触碰着身旁的少女。`);
    await era.printAndWait(`体温正常，从手指传来的肌肤触感也没有区别。`);
    await me.say_and_wait(`仔细观察的话，好像有一条细细的银线在控制着她一样。`);
    await era.printAndWait(`就像是人偶一样。`);
    await me.say_and_wait(`如果顺着银线寻找的话，说不定就能找到操纵者。`);
    await era.printAndWait(`拇指与食指握住这条细线，顺着这条细线的来源——`);
    await era.printAndWait(`一阵剧烈的强光晃得你睁不开眼。`);
    await era.printAndWait(`眼前的草地变成了舞台现场。`);
    await era.printAndWait(
      `自己正站在舞台中央，不，确切的说是${falcon.name}站在舞台中央。`,
    );
    await era.printAndWait(`密密麻麻的观众跟随着你所熟悉的歌曲按节拍摇摆着。`);
    await me.say_and_wait(`演唱会吗？但为什么违和感这么重。`);
    await era.printAndWait(`从刚才开始，空气之中就有一缕若有若无的腥味。`);
    await era.printAndWait(`察觉到这究竟代表着什么的时候毛孔瞬间竖立。`);
    await me.say_and_wait(`飞鹰子？`);
    await era.printAndWait(`被称为飞鹰子的人偶转向了你，然后——`);
    await era.printAndWait(`左眼右眼左耳右耳左鼻右鼻口腔之中暗红色的液体`);
    await era.printAndWait(`视觉触觉嗅觉味觉听觉理性感性混杂黏糊糊的一团\n\n`);
    await me.say_and_wait(`哈啊哈啊哈啊。`);
    await era.printAndWait(
      `猛地从噩梦之中惊醒，额头上的汗珠，被汗水打湿的衬衫，无不再提醒刚才的一切不过是场噩梦。`,
    );
    await me.say_and_wait(`刚才的是？`);
    await era.printAndWait(`用力将液体咳出，嘴巴传来了一阵苦涩的腥味。`);
    await era.printAndWait(
      `虽然很想回忆起之前发生了什么，但稍微思考就头疼欲裂。`,
    );
    await era.printAndWait(`只能暂且作罢，转而观察起周围的环境。`);
    await era.printAndWait(
      `承载着自己的沙发，沙发右侧的办公桌，办公桌后方的墙壁上用相框装潢的合照。`,
    );
    await me.say_and_wait(`好像回到了训练室？`);
    await era.printAndWait(
      `记忆消失的前一刻，自己在干什么，晕倒过后又是谁把自己送回来的。`,
    );
    await era.printAndWait(`下意识将手伸进裤子口袋之中确认着手机。`);
    await era.printAndWait(`却碰到了更加软绵绵的东西。`);
    await me.say_and_wait(`这是？`);
    await era.printAndWait(`像是用来固定头发的，经过精心保养的缎带。`);
    await era.printAndWait(`如果飞鹰子逃走了？`);
    await me.say_and_wait(`……原来如此。`);
    await era.printAndWait(`答案已经不言而喻。`);
    await era.printAndWait(`将小心保存的缎带系在手腕上。`);
    await era.printAndWait(`你决定\n`);
    era.printButton(`追赶${falcon.name}`, 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(`不知已经过去了多久，商业街、百货商场、河边草地。`);
    await era.printAndWait(
      `即使是向亲近的粉丝与好友询问，得到的答案都是否定。`,
    );
    await me.say_and_wait(`哈啊……哈啊……哈啊……`);
    await era.printAndWait(
      `就这么放弃的话，从飞鹰子身边逃走的话，果然还是不甘心。`,
    );
    await era.printAndWait(`常言道，君子不立于危墙之下。`);
    await era.printAndWait(
      `即使是在东京这样的大都市，在深夜徘徊也是一种极其危险的行为。`,
    );
    await era.printAndWait(`之所以会发生这种事情，自己恐怕也脱不了干系。`);
    await era.printAndWait(
      `但是，这不是责怪自己的理由，因为自己没有自己想象中那么睿智，自己也没想象中的自己那般充满勇气。`,
    );
    await era.printAndWait(
      `自己只有这点智慧，自己只有这种程度的勇气，这已经被不理想的现实所证明。`,
    );
    await era.printAndWait(
      `如果明白这点的话，后悔恐怕是在后悔自己明明充满智慧与勇气却失败了。`,
    );
    await era.printAndWait(`有很大可能走向认知失调的风险。\n`);
    await era.printAndWait(`不知不觉回到了熟悉的草地上。`);
    await era.printAndWait(`正值春夏交替之时，深夜的草地比想象之中更加寒冷。`);
    await era.printAndWait(`你不禁打了一个寒颤。`);
    await era.printAndWait(`正值春夏交替之时，深夜的草地比想象之中更加寒冷。`);
    await era.printAndWait(
      `潮湿的空气混杂着泥土的芳香，月光照耀下的废墟将这片草地团团包围。`,
    );
    await era.printAndWait(`就像是拉起了帷幕一样。`);
    await era.printAndWait(`而期待的少女——${falcon.name}就在这片草地之上。\n`);
    await era.printAndWait(`只要向她道歉，然后好好交流，一切误会都会化解。`);
    await falcon.say_and_wait(
      `诶?训练员${falcon.get_uma_sex_title()}怎么这么快……`,
    );
    await era.printAndWait(`舞台的主角带着惊讶的表情看着你。`);
    await era.printAndWait(
      `是因为从昨天下午开始就没有吃饭的缘故吗?此刻摇摇欲坠的她就像是苍白的人偶一样脆弱。`,
    );
    await falcon.say_and_wait(
      `……不，没关系的呦？飞鹰子只是稍微有些烦恼罢了，等到明天，飞鹰子还会回到原来的——`,
    );
    await era.printAndWait(`就这么双腿并拢跌坐在了地上，痛苦的咳嗽着。`);
    era.printButton(`飞鹰子！`, 1);
    await era.input();
    await era.printAndWait(`想好的话语全部抛到了脑后，你奔向了少女。`);
    await me.say_and_wait(`忍耐一下，这一切马上就会结束。`);
    await era.printAndWait(`${falcon.name}拉住了你。`);
    await era.printAndWait(`比起双手所感知的寒冷，那明亮的双眼却吸引了你。`);
    await falcon.say_and_wait(
      `飞鹰子……没有责怪训练员${falcon.get_uma_sex_title()}的意思……只是。`,
    );
    await falcon.say_and_wait(
      `比起飞鹰子的幸福……如果训练员${falcon.get_uma_sex_title()}能更加幸福的话……`,
    );
    await falcon.say_and_wait(
      `抱歉……连粉丝一号的幸福都无法保证，作为偶像真是失格了呢……`,
    );
    await falcon.say_and_wait(`……对不起。`);
    await era.printAndWait(
      `在奋力吐出积压于心头的痛苦后，${falcon.name}直挺挺的倒在了地上。`,
    );
    await era.printAndWait(
      `虽然心中已有猜测，直到她亲口说出为止自己才能确认，${falcon.name}心底真正希望的是什么。`,
    );
    await era.printAndWait(`对不起，发生了这种事情。`);
    era.printButton(`轻轻背起${falcon.name}`, 1);
    await era.input();
    await era.printAndWait(`你将少女轻轻背起，确认着与她一同前行的重量。`);
    await era.printAndWait(`来时的道路比想象中还要漫长。`);
    await era.printAndWait(
      `——但对${falcon.name}来说，或许是人生中最重要的成年礼。`,
    );
  } else if (edu_weeks === 95 + 23) {
    const love = era.get('love:46');
    await print_event_name('闲暇日', falcon);
    await era.printAndWait(
      `正处于春与夏交织的季节，从天空照射下来的光线也多了一份炎热。`,
    );
    await era.printAndWait(`但对此刻的你来说，却正好处于不冷不热的舒适区间。`);
    await era.printAndWait(
      `……从事件的波浪之中奋力挣扎，才在告一段落后勉强幸存。`,
    );
    await era.printAndWait(
      `看着在商业街来来往往的行人们，总有一种不切实际的感觉。`,
    );
    await era.printAndWait(
      `他们是不是也是和你一样在磨难之中挣扎后，同样勉力幸存下来的同道呢？`,
    );
    await era.printAndWait(
      `虽然从上次的磨难中存活了下来，要是下一次却失败了呢？`,
    );
    await era.printAndWait(
      `一旦失败的话，一切就全部归零了，没有一丝一毫是能留到那个地方（伊甸）的。`,
    );
    await era.printAndWait(`人们为什么不会害怕呢？`);
    await era.printAndWait(
      `不，因为在死的面前，人们才会意识到生的幸福实际是被赋予的一种特权。`,
    );
    await era.printAndWait(
      `因为我们总有一天会无牵无挂的离开世界，所以才要加倍的珍惜活下来的每一天。`,
    );
    await falcon.say_and_wait(`训练员${falcon.get_uma_sex_title()}久等了♪`);
    await era.printAndWait(
      `换上了便装的${falcon.name}踩着小碎步出现在了${me.actual_name}的眼前。`,
    );
    await era.printAndWait(
      `将头发自然的放下，若不是以其独特的发声，恐怕与人群之中来来往往的小${falcon.get_uma_sex_title()}没有区别。`,
    );
    await era.printAndWait(
      `虽说你打算将保管于你的缎带交还给${falcon.name}，却以“还是放在训练员${falcon.get_uma_sex_title()}这边比较好哦，妈妈也同意了”的理由拒绝了。`,
    );
    await era.printAndWait(
      `……虽说自己不是那种会对小${falcon.get_uma_sex_title()}感兴趣的类型，但看向对方的时候，内心之中却涌现了一种难以言喻的感情。`,
    );
    await falcon.say_and_wait(`⭐`);
    await era.printAndWait(
      `对方丝毫没有意识到你对她的复杂感情，依然带着那份灿烂的笑容看着你。`,
    );
    await era.printAndWait(
      `因为是节假日的缘故，站在十字路口的你们不时被奇怪的目光所打量着。`,
    );
    await me.say_and_wait(`先去附近的百货大楼逛逛吧！`);
    await era.printAndWait(
      `一直犹豫下去会把宝贵的休息时间全部浪费掉，你便伸手指向了有着巨大广告牌的大厦。`,
    );
    await falcon.say_and_wait(`诶！我记得那边新开了一家很有名气的甜品店！`);
    await falcon.say_and_wait(`事不宜迟，现在就出发吧！`);
    await era.printAndWait(`${falcon.name}拉着你的手走向了甜品店。`);
    era.drawLine();
    await era.printAndWait(
      `从服务员处得到了菜单，看着琳琅满页的甜品照片，你有些犹豫。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}喜欢什么呢？`);
    era.printButton(`水果巴菲感觉就不错！`, 1);
    era.printButton(`有点想尝尝看巧克力口味的新品！`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`飞鹰子也很喜欢那种酸甜口感的巴菲呢。`);
      await falcon.say_and_wait(
        `在口中释放出的寒冷与甜蜜气息，就像是和训练员${falcon.get_uma_sex_title()}第一次见面时的场景呢♪`,
      );
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`飞鹰子也想尝尝看这种口味的巧克力呢♪。`);
      await falcon.say_and_wait(`……⭐`);
      await era.printAndWait(`……不知道为什么她偷偷捂着嘴笑了起来。`);
      await era.printAndWait(`是思维跳跃到我不知道的维度了吗。`);
    }
    await chara4_talk.say_and_wait(`嗨！下午好！没想到能在这里遇见飞鹰子。`);
    await falcon.say_and_wait(`下午好⭐丸善前辈！`);
    await era.printAndWait(`不远处独自一人品尝甜品的丸善斯基向你们搭话。`);
    await chara4_talk.say_and_wait(
      `因为最近美眉我得知了最近泥地比赛很流行的样子。`,
    );
    await chara4_talk.say_and_wait(
      `所以为了追逐着潮流，美眉我便观看了正在泥地赛道上大放异彩的飞鹰子的比赛。`,
    );
    await chara4_talk.say_and_wait(
      `因为之前选择了泥地的后辈们向美眉我请教过跑法的缘故而专门去看过比赛。`,
    );
    await chara4_talk.say_and_wait(
      `不过像飞鹰子这样奋力闪耀的偶像，美眉我总有一种后辈不知什么时候就超过了前辈的复杂情感呢。`,
    );
    await me.say_and_wait(
      `毕竟是飞鹰子，她在的话就一定会让泥地赛道变得更加受欢迎。`,
    );
    await falcon.say_and_wait(`……！`);
    await chara4_talk.say_and_wait(
      `说起来接下来是打算参战帝王赏吧？美眉我也会到现场去加油的！`,
    );
    await falcon.say_and_wait(`到时候一定会让丸善前辈看到后辈精彩的表现！`);
    await era.printAndWait(`露出笑容的丸善斯基将视线转向了你。`);
    if (
      era.get('cflag:4:招募状态') === recruit_flags.yes &&
      era.get('love:4') > 90
    ) {
      await me.say_and_wait(`这么巧啊，丸善斯基。`);
      await era.printAndWait(`丸善斯基只是面带微笑的搅拌着手中的咖啡。`);
      await me.say_and_wait(`……啊。`);
      await chara4_talk.say_and_wait(
        `啊拉，训练员君？今天把训练场地改到甜品店了是打算进行智力训练吗？`,
      );
      await chara4_talk.say_and_wait(
        `呵呵~姐姐我也想一边吃着水果巴菲迅速提高智力呢。`,
      );
      await era.printAndWait(`转弯抹角的暗示这不是训练员应该做的事情吗。`);
      await era.printAndWait(
        `虽说与${falcon.name}之间的关系稍稍稍微有那么一点点接近，但自认为还是处于良好的发展态势。`,
      );
      await falcon.say_and_wait(
        `久等了⭐训练员${falcon.get_uma_sex_title()}……还有丸善斯基前辈。`,
      );
      await era.printAndWait(
        `似乎察觉到了两人之间的微妙关系，从长长的队伍中奔跑过来的${falcon.name}渐渐放慢了脚步。`,
      );
      await chara4_talk.say_and_wait(`小飞鹰中午好♪`);
      await era.printAndWait(
        `虽然打算迅速从修罗场脱离的你，却被丸善斯基用气势死死的钉在了原地。`,
      );
      if (love > 90) {
        await falcon.say_and_wait(
          `就算是丸善前辈的话？这个巧克力也不能让给你的呦♪`,
        );
        await chara4_talk.say_and_wait(`现在的后辈比想象之中还要可爱呢♪`);
        await chara4_talk.say_and_wait(
          `如果不是擅长的赛道不同，真想和小飞鹰比一场呢♪`,
        );
        await falcon.say_and_wait(`即使是丸善前辈的话，飞鹰子也不会认输的哦♪`);
        await chara4_talk.say_and_wait(`不觉得稍微有些失礼了吗？`);
        await falcon.say_and_wait(`没有哦？飞鹰子可没有任何恶意哦？`);
        await falcon.say_and_wait(
          `只是觉得丸善前辈差不多也要到了该去结婚的年纪了，为什么还在这里呢？`,
        );
        await chara4_talk.say_and_wait(
          `说起来飞鹰子不是作为偶像的吗？就这样和训练员${me.get_adult_sex_title()}坐在一起不怕有绯闻出现吗？`,
        );
        await chara4_talk.say_and_wait(`训练员君，你怎么想的呢？`);
        await falcon.say_and_wait(
          `不会的哦？如果出现了，干脆直接宣布和训练员${me.get_adult_sex_title()}结婚就好了♪对吧，训练员${me.get_adult_sex_title()}？`,
        );
        await era.printAndWait(
          `游仞有余的丸善斯基看着露出了认真态势的${falcon.name}，无形的气浪让周围的人纷纷开始远离。`,
        );
        era.printButton(`什么也不想看`, 1);
        await era.input();
        await era.printAndWait(
          `在化为战场的正中央，带着呆滞的表情看着两人发力的你活像鸵鸟把头埋进了沙子里。`,
        );
      } else {
        await falcon.say_and_wait(
          `既然丸善斯基前辈也在场，不如就在这里举行一场突击演唱会吧⭐`,
        );
        await era.printAndWait(
          `面对这种突如其来的状况，${falcon.name}依然踏入了这片场所。`,
        );
        await chara4_talk.say_and_wait(
          `最近流行的是万物都可作为舞台的潮流吗？`,
        );
        await falcon.say_and_wait(`是飞鹰子流哦⭐`);
        await falcon.say_and_wait(
          `虽然小铃鹿、小波旁还有风神不在现场稍微有些可惜……不过就当做逃马sister成员之间的一次活动吧！`,
        );
        await chara4_talk.say_and_wait(
          `不管是比赛还是演唱会，姐姐我都要马力全开了！`,
        );
        await era.printAndWait(
          `丸善斯基向你眨了眨眼，便协助着${falcon.name}准备起了临时舞台的搭建。`,
        );
        await era.printAndWait(`一场风波就这么消散了。`);
      }
    }
  } else if (edu_weeks === 95 + 32) {
    await print_event_name('夏季合宿结束', falcon);
    await era.printAndWait(`${falcon.name}的第三年夏季合宿结束了。`);
    await falcon.say_and_wait(`向着顶级偶像的道路一刻不停的前进♪`);
    await era.printAndWait(
      `从庆祝夏季合宿结束的宴会上借口喝多离开的你遇到了同样从宴会上离开的少女。`,
    );
    await me.say_and_wait(`作为知名偶像的飞鹰子像这样离开宴会还真是少见呢。`);
    await falcon.say_and_wait(
      `毕竟一号粉丝不在的话，偶像活动也会突然黯淡许多呢。`,
    );
    await era.printAndWait(`原来如此。`);
    await me.say_and_wait(`飞鹰子已经不害怕孤独了吗？`);
    await falcon.say_and_wait(`……说实话还是很害怕，但已经没有以前那么害怕了。`);
    await falcon.say_and_wait(
      `毕竟训练员${falcon.get_uma_sex_title()}一直在我身边呢。`,
    );
    await me.say_and_wait(`……这就是飞鹰子的决定吗。`, true);
    await era.printAndWait(
      `${falcon.name}的身体向前微倾，右手食指竖在嘴唇中心，眨了眨右眼。`,
    );
    await falcon.say_and_wait(
      `而且，${falcon.name}想和最喜欢的训练员${me.get_adult_sex_title()}一起登上世界上最大的舞台！`,
    );
    await falcon.say_and_wait(
      `等到那个时候……飞鹰子……不对，${falcon.name}什么都没说哦⭐`,
    );
    await era.printAndWait(`从她掩饰不住的笑容来看，是想到了幸福的事情吧。`);
    await era.printAndWait(
      `为此努力的每一天，都是为了将这个梦想实现而度过的。`,
    );
    await falcon.say_and_wait(`踏上的道路，周围渐渐能看到一望无际的草原了。`);
    await me.say_and_wait(`为了成为顶级偶像，接下来的比赛也不能松懈！`);
    await falcon.say_and_wait(`不对！`);
    await era.printAndWait(`${falcon.name}说出了令你吃惊的话。`);
    await me.say_and_wait(`飞鹰子的意思是？`);
    await falcon.say_and_wait(
      `就跟训练员${falcon.get_uma_sex_title()}之前说过的一样，每个人都要为自己的选择负起责任。`,
    );
    await falcon.say_and_wait(
      `尽管飞鹰子将心中的天平偏向了训练员${falcon.get_uma_sex_title()}，但飞鹰子作为${falcon.get_uma_sex_title()}偶像的责任一直没变。`,
    );
    await falcon.say_and_wait(
      `不论过去多久，听到过承诺的人们是否已经忘记，它依然没有改变。`,
    );
    await falcon.say_and_wait(
      `所以，直到飞鹰子因为过度劳累而倒下之前，飞鹰子都要肩负起作为${falcon.get_uma_sex_title()}偶像的责任，直到退役为止。`,
    );
    await falcon.say_and_wait(`这就是飞鹰子想出的答案。`);
    await era.printAndWait(`身旁的少女露出了释然的表情，她已经觉悟了。`);
    era.printButton(`请让我作为你身边最近的人见证这一切。`, 1);
    await era.input();
    await falcon.say_and_wait(`呵呵呵。`);
    await era.printAndWait(
      `${falcon.name}突然笑了起来，一直笑到眼泪都流了出来。`,
    );
    era.printButton(`飞鹰子？`, 1);
    await era.input();
    await era.printAndWait(`然后紧紧的抱住了你。`);
    await falcon.say_and_wait(`谢谢你，训练员${falcon.get_uma_sex_title()}。`);
    await era.printAndWait(`${falcon.name}不再孤单了。`);
  } else if (edu_weeks === 95 + 37) {
    await print_event_name('前辈与后辈', falcon);
    await era.printAndWait(
      `在仔细考虑过后，你将育马场经典赛、冠军杯以及东京大赏典这三场比赛列入了第三年下半的计划之中。`,
    );
    await era.printAndWait(`要在下半年的三场之中全部获胜，压力可想而知。`);
    await era.printAndWait(
      `所谓的顶级偶像，就是要在这种艰难的场合给予众人希望。`,
    );
    await era.printAndWait(`咚咚咚。`);
    await me.say_and_wait(`我不记得有邀请过谁前来。`);
    await era.printAndWait(
      `${falcon.name}会直接推门进来，手纲小姐会事先在手机上发送消息，其他${falcon.get_uma_sex_title()}的话，一般都是自己主动联系。`,
    );
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `好久不见，训练员${falcon.get_uma_sex_title()}！`,
    );
    await era.printAndWait(
      `栗色的${falcon.get_uma_sex_title()}推门进来，甚至因为过于激动不小心把门把手卸了下来。`,
    );
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `啊，抱歉！我实在太激动了！`,
    );
    await era.printAndWait(`总觉得似曾相识的样子。`);
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `训练员${falcon.get_uma_sex_title()}还认识我吗？`,
    );
    await era.printAndWait(`脑海之中重复着将浮现的名字再次划去的工作，`);
    await era.printAndWait(`如果是${falcon.name}在这里的话，应该能一眼看出。`);
    await era.printAndWait(`毕竟她记得每一名观看过演唱会的粉丝长相。`);
    await me.say_and_wait(
      `演唱会？${falcon.get_uma_sex_title()}，河边的草地。`,
      true,
    );
    await me.say_and_wait(
      `说起来，确实遇到过一名${falcon.get_uma_sex_title()}。`,
      true,
    );
    await me.say_and_wait(
      `你是去年立志成为偶像的那名${falcon.get_uma_sex_title()}吧。`,
    );
    await era.printAndWait(
      `虽然体格与身高的变得几乎看不出来，过往的神态却依稀可见。`,
    );
    await me.say_and_wait(`你也迎来本格化了呢。`);
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `不愧是训练员${falcon.get_uma_sex_title()}！一开始还有点担心训练员${falcon.get_uma_sex_title()}认不出来呢，看来是我想多了。`,
    );
    await era.printAndWait(
      `看来自己的猜测是正确的，得到想要回答的${falcon.get_uma_sex_title()}得意的竖起了耳朵。`,
    );
    await me.say_and_wait(
      `挫折，疑惑，不解，汗水与泪水只能算是基本，有时，信念比生命还要重要。`,
    );
    await me.say_and_wait(`虽然我对偶像之道的了解也不多，希望能帮助到你。`);
    await say_by_passer_by(
      `${falcon.get_uma_sex_title()}`,
      `训、训练员${falcon.get_uma_sex_title()}，你到底经历了什么？`,
    );
    await era.printAndWait(
      `被你的平凡的经历吓得躲在沙发角落瑟瑟发抖的${falcon.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `真是失礼，明明只是把自己的经历没有修饰的说了出来而已。`,
    );
    await falcon.say_and_wait(`训练员${falcon.get_uma_sex_title()}！`);
    await say_by_passer_by(`${falcon.get_uma_sex_title()}`, `是飞鹰子前辈！`);
    await era.printAndWait(`在解释了之前的那一幕后。`);
    await falcon.say_and_wait(`不过是偶像的日常罢了。`);
    await era.printAndWait(`面带笑容的${falcon.name}语气没有任何变化。`);
  } else if (edu_weeks === 95 + 38) {
    await print_event_name(`铭记的镜子`, falcon);
    era.drawLine();
    await me.say_and_wait(`${falcon.get_uma_sex_title()}偶像？`);
    await me.say_and_wait(
      `${falcon.get_uma_sex_title()}偶像的概念似乎有些笼统啊。`,
    );
    await me.say_and_wait(
      `如果是积极参与比赛，并且闪闪发光的话，所有在赛场上奔驰的${falcon.get_uma_sex_title()}都是一样的。`,
    );
    await me.say_and_wait(
      `作为${falcon.get_uma_sex_title()}偶像的特殊之处又在哪里呢？`,
    );
    era.drawLine();
    falcon.print(
      `第一次训练的时候，训练员${falcon.get_uma_sex_title()}向我提出了这个问题。`,
    );
    falcon.print(`……当时是怎么回答的？`);
    falcon.print(`只是随口敷衍过去了吧。`);
    await falcon.say_and_wait(`……`);
    falcon.print(`即使是现在，我也给不出正确的答案。`);
    falcon.print(
      `想要，想要借着青春期特有的敏感与细腻交织而成的可爱作为卖点。`,
    );
    falcon.print(
      `就这样与粉丝一同成长，最后作为见证者与被见证者敲开顶级偶像的殿堂大门。`,
    );
    falcon.print(`不管在河岸下作为志愿者清理垃圾，还是辛苦的突击演出。`);
    falcon.print(`通过贯彻贴近生活的偶像这一概念，向粉丝们传递出自己的成长。`);
    falcon.print(`将痛苦与失意悄然藏起，带上作为万众期待的偶像这一面具。`);
    falcon.print(`……过程也没有想象中那么辛苦。`);
    falcon.print(`在草地之上的表演，同样也是一种训练。`);
    falcon.print(`回忆着电视上、舞蹈老师、访谈杂志上学到的经验。`);
    falcon.print(`节拍接着节拍，动作接着动作,一刻接着一刻。`);
    falcon.print(`直到将表演锻炼成像是与生俱来的天赋为止。`);
    falcon.print(`一舞已毕。`);
    falcon.print(`睁开双眼然后迎接无人的草地。`);
    falcon.print(`睁开双眼然后迎接一人的草地。`);
    falcon.print(`睁开双眼然后迎接数人的草地。`);
    falcon.print(`睁开双眼然后迎接盛大的舞台。\n`);
    falcon.print(`曾经作为知识的东西融化成了本能，本能又凝结出了新的知识。`);
    falcon.print(
      `不断进行着融化与凝结的这条直到生命尽头的河流，在外者看来，就像是璀璨的钻石一样。`,
    );
    era.drawLine();
    await falcon.say_and_wait(`育马场经典赛马上就要开始了。`);
    await falcon.say_and_wait(`……训练员${falcon.get_uma_sex_title()}。`);
    await falcon.say_and_wait(
      `如果能再给飞鹰子一点时间的话，飞鹰子一定可以早点察觉到。`,
    );
    await falcon.say_and_wait(
      `不对！训练员${falcon.get_uma_sex_title()}一定不会喜欢现在的飞鹰子！`,
    );
    await falcon.say_and_wait(
      `训练员${falcon.get_uma_sex_title()}期待的飞鹰子一定是那个永远充满活力，一直向前的完美偶像！`,
    );
    await falcon.say_and_wait(
      `所以无论赛场还是舞台之上，飞鹰子都要一直闪耀下去，直到夺去所有人的目光为止！`,
    );
    era.drawLine();
    falcon.print(`纵使已经被名为负罪感的高墙所隔阂。`);
    falcon.print(`粉丝袭击的源头是天平的失衡，是无视了粉丝愿望的偶像末路。`);
    falcon.print(`是会随着偶像的不断成长，不断施加压力的恶意。`);
    falcon.print(
      `再继续下去，迟早有一天会因为承受不住这份巨大的压力而像被高温加热后的岩石一样，遇到微小的契机，便会轰然炸开。`,
    );
    falcon.print(`或许不断选择错误的我明白的唯一正确的事情。`);
    falcon.print(`——啊啊，如果时间再多一点就好了。`);
    falcon.print(`如果能给我更多的时间的话，我就能处理好这一团乱麻。`);
    falcon.print(`然而这是不可能的事。`);
    falcon.print(`只要还在逃避必需完成的义务，未来就不会到来。`);
    falcon.print(
      `既然选择了偶像的道路，无论如何都要回应来自粉丝的依赖与祈祷。`,
    );
    falcon.print(`作为偶像尽忠职守到最后一刻。`);
    falcon.print(`所以，不能再逃避下去了。`);
    falcon.print(`第一次看沙地比赛时，我记得`);
    era.printButton(
      `追赶的${falcon.get_uma_sex_title()}超越了领头的${falcon.get_uma_sex_title()}`,
      1,
    ); //恋心超越责任
    era.printButton(`领头的${falcon.get_uma_sex_title()}踏出了关键的一步`, 2); //责任压倒恋心
    // te为2选项 ge为1选项
    const ret1 = await era.input();
    if (ret1 === 1) {
      falcon.print(
        `——没错，追赶的${falcon.get_uma_sex_title()}超越了领头的${falcon.get_uma_sex_title()}。`,
      );
      falcon.print(
        `沙地的${falcon.get_uma_sex_title()}们所要面对的环境更加恶劣。`,
      );
      falcon.print(`拼尽全力，放空一切，为了超越前方的目标。`);
      falcon.print(`尽管如此，这还不够。`);
      falcon.print(`若不在一开始就抢到优势位置，败者将承受沙土的考验。`);
      falcon.print(
        `决胜服被沙地弄脏，姣好的面容被沙土覆盖。不管从什么角度来看，都称不上是闪耀的姿态。`,
      );
      falcon.print(`眼睛被浸入的沙子深深刺痛，急促的呼吸被沙土打乱节奏。`);
      falcon.print(`没有思考的充裕，连自身的存在都忘记，就这么超越对方。`);
      falcon.print(`这就是竞争的意义。`);
    } else {
      falcon.print(`领头的${falcon.get_uma_sex_title()}踏出了关键的一步。`);
      falcon.print(
        `好像是去年，小铃鹿教导草地赛的时候，不会交给其他人的风景……好像是这个来着？`,
      );
      falcon.print(`领先的风景吗……有些怀念呢。`);
      falcon.print(
        `在全国巡演时，与地方${falcon.get_uma_sex_title()}之间的比赛。`,
      );
      falcon.print(`比起草地赛事，还是沙地赛的印象更加深刻。`);
      falcon.print(`……`);
      falcon.print(`除了皋月赏。`);
      falcon.print(
        `随着歌曲节奏变换的光线，台下的荧光棒随着节奏变换的光线组成的海洋，远远望去就像是层次分明的潮汐。`,
      );
    }
    falcon.print(
      `……啊啊……脑海之中又浮现出了训练员${falcon.get_uma_sex_title()}的模样。`,
    );
    falcon.print(`明明不能逃避。`);
    falcon.print(`纵使泪流满面。`);
  } else if (edu_weeks === 95 + 40) {
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
  } else if (edu_weeks === 95 + 45) {
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
  } else if (edu_weeks === 95 + 47) {
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
    // todo 根据上文恋心与责任之间做出的决定 此处的对话将会改变 但仅仅只是侧重的方向发生改变，${falcon.name}对训练员的恋心无论如何压制都不会消灭，就像暗火一样
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
  }
  wait_flag && (await era.waitAnyKey());
};
