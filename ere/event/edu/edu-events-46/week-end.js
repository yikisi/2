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
  if (event_marks.beginning === 1) {
    event_marks.beginning++;
    // 对于偶像活动相当热枕，但对于比赛有点强迫自己上去，可能是对失败未来的恐惧
    // 主体 ：奋力向前，逆流而上 飞鹰子与训练员旅游时闲聊得出的结论
    // 人是一种很容易寂寞的生物，在曲终人散之后，从亢奋的精神慢慢退回，然后只剩下疲惫
    // 一般人眼中的乐观，仅仅只是将四处收集而来的瓦片聚拢起来，然后拼凑起来的乐观，因此，面对较大的危险就会四分五裂
    // 因此，不过只是装作乐观的悲观者罢了
    // 然而，悲观往往是对自身所做成就的忽视，如果将看向未来的视野收回到自身不足5米的可操纵区域，反而会得到继续下去的动力
    await print_event_name(`喊声隆隆的沙地赛`, falcon);
    // 训练员遵守约定带醒目飞鹰看沙地赛
    await era.printAndWait(`地方沙地赛场\n`);
    await era.printAndWait(
      `在凌冽的寒风中，冰霜凝结在枝头，寒气透过衣衫直透骨髓。`,
    );
    await era.printAndWait(
      `然而就在这样的冰雪世界，中京竞马场的一月锦标就在这样的氛围之中举行。`,
    );
    await say_by_passer_by(
      `解说`,
      `比赛已经进入最终阶段！二号选手与四号选手从马群之中脱颖而出，开始了最后的角逐！`,
    );
    await say_by_passer_by(`观众`, `唔噢噢噢噢噢噢噢！`);
    await era.printAndWait(
      `尽管外套之中凝结了一层薄薄的霜，但被激情所点燃的观众们全神贯注的将注意力集中于角逐胜利的马娘之中。`,
    );
    await say_by_passer_by(`赛马娘们`, `哈啊啊啊啊！`);
    await era.printAndWait(`在沙地上追逐梦想的少女们。`);
    await say_by_passer_by(
      `解说`,
      `两人之间的距离在不断缩短！五马身！三马身！一马身！就差一点！`,
    );
    await era.printAndWait(
      `紧紧追赶的马娘近乎就要超越前方的马娘，而后者在最后关头踏出了那一步，也就决定了比赛的胜负。`,
    );
    await era.printAndWait(`胜负已定，观众席爆发出了雷鸣般的喝彩声。`);
    await era.printAndWait(
      `取得胜利的马娘，不顾浑身被沙土所覆盖，将混合着汗水与泪水的笑脸献给了观众们。\n\n`,
    );
    await falcon.say_and_wait(`没想到沙地赛……比想象之中还要热情呢。`);
    await falcon.say_and_wait(`沙地赛的观众们，对比赛的热情程度……`);
    await falcon.say_and_wait(`飞鹰子感动得都要哭出来了！`);
    await era.printAndWait(
      `在胜者舞台上的马娘们热烈地回应着在下面一直支持着她们的观众们。`,
    );
    await era.printAndWait(
      `从喉咙之中挤出的不甘呐喊、喉咙嘶哑也要触及到的那片心意。`,
    );
    await era.printAndWait(
      `看着在你的身边兴奋的诉说着沙地赛事盛况的醒目飞鹰。`,
    );
    await me.say_and_wait(`无论是草地还是沙地，为此付出的爱都是相同的。`, true);
    await era.printAndWait(
      `你默默的想着，然后和醒目飞鹰一起踏上了回特雷森的道路。`,
    );
    new FalconEduMarks().start++;
    add_event(event_hooks.week_start, new EventObject(46, cb_enum.edu));
    wait_flag = get_attr_and_print_in_event(46, undefined, 120) || wait_flag;
  } else if (event_marks.fight_idol === 1) {
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
    await falcon.say_and_wait(`……以顶级马娘偶像的身份⭐`);
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
  } else if (edu_weeks === 34) {
    await print_event_name(`向着闪耀大舞台不停歇的前进！`, falcon);
    await falcon.say_and_wait(`……呼⭐谢谢大家！`);
    await era.printAndWait(`即兴歌曲串烧结束后，稀稀拉拉的掌声响起。`);
    await era.printAndWait(
      `出道战结束后，主打泥地偶像人设的醒目飞鹰吸引了不少的关注。`,
    );
    await era.printAndWait(
      `胜者舞台之上娴熟的表演吸引了前来观看比赛游客的目光。`,
    );
    await era.printAndWait(
      `马推上‘泥地新人偶像？！醒目飞鹰大进击⭐’话题度也登上热搜。`,
    );
    await era.printAndWait(
      `在马推流量的加持吓，例行的街头演出也收获了大量游客的目光。`,
    );
    await me.say_and_wait(`接下来也算是迈出第一步了吧！`, true);
    await era.printAndWait(
      `被粉丝们团团围住，于纸盒组装起来的简易舞台之上，醒目飞鹰露出了高兴的表情。`,
    );
    await me.say_and_wait(`辛苦了！`);
    await era.printAndWait(`等到最后一名粉丝离开之后，你走向了醒目飞鹰。`);
    await era.printAndWait(
      `将准备好的毛巾递给她时，被汗水打湿的触感混杂着奇异的香味跳动着人的神经。`,
    );
    await falcon.say_and_wait(`非常感谢⭐`);
    await era.printAndWait(`你协助醒目飞鹰将搭建的舞台重新收起，在。`);
    await era.printAndWait(`。`);
    await falcon.say_and_wait(
      `其实也没有那么辛苦啦⭐，只是看到这么多支持着我的粉丝们，自己不知为何非常感动呢。`,
    );
    await falcon.say_and_wait(`……而且。`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(`轻轻拉着你衣袖的飞鹰子，。`);
    await me.say_and_wait(
      `飞鹰子的表演非常精彩，作为一直关注着飞鹰子的粉丝真的很感动！`,
    );
    await falcon.say_and_wait(`一直以来都非常感谢！`);
    await era.printAndWait(`${me.actual_name}紧紧握住了飞鹰子的手`);
    await falcon.say_and_wait(`那么，接下来去哪里走一下吧。`);
    await me.say_and_wait(`说起来的话，最近有家拉面店很火爆，去看看吧？`);
    era.drawLine({ content: '拉面店内' });
    await falcon.say_and_wait(`呼啊，真美味啊。`);
    await era.printAndWait(
      `${me.actual_name}目瞪口呆地看着${falcon.name}风卷残云般吃完了大份拉面。`,
    );
    await me.say_and_wait(`真是厉害啊。`);
    await era.printAndWait(
      `作为${falcon.get_uma_sex_title()}来说食量也比一般人要大得多吗？`,
    );
    await falcon.say_and_wait(
      `哎呀！不小心吃这么多，这周的减肥计划又要失败了。`,
    );
    await falcon.say_and_wait(`明明都已经坚持6天了，结果一高兴就。`);
    await me.say_and_wait(`没关系的！多余的卡路里就通过训练消耗掉吧！`);
    await falcon.say_and_wait(`嗯！飞鹰子在训练上也会努力的！`);
    await era.printAndWait(`谈笑之中飞鹰子又吃完了一份拉面。`);
    await me.say_and_wait(`没关系的！多余的卡路里就通过训练消耗掉吧！`);
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
    await falcon.say_and_wait(`好！接下来的话也请多多指教了！训练员君⭐`);
    await me.say_and_wait(`我也是，请多指教了，飞鹰子。`);
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
      `在沙地上奔走的马娘偶像——醒目飞鹰，在你的指导之下已经是沙地冉冉升起的一颗新星了。`,
    );
    await era.printAndWait(
      `但是，看着醒目飞鹰日益增大的粉丝群体，以及变得越来越慢的日程表。`,
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
      `为了重新振作起来，你离开座位，帮醒目飞鹰倒了一杯红茶。`,
    );
    await era.printAndWait(`然后看着眼前坐正的${falcon.name}。`);
    await era.printAndWait(
      `与平时的醒目飞鹰相比，怀中多了一份不知是谁赠送的种子。`,
    );
    await falcon.say_and_wait(`飞鹰子也不知道名字，不过很好闻哦。`);
    await era.printAndWait(
      `醒目飞鹰察觉到了你的视线偏移，将手中的透明购物袋挥了挥。`,
    );
    await era.printAndWait(
      `在你和醒目飞鹰一点一滴的努力下，马娘偶像的概念总算推了出去。`,
    );
    await era.printAndWait(
      `现如今，一提到马娘偶像，关注沙地的观众们都会想到醒目飞鹰。`,
    );
    await era.printAndWait(`拜此所赐，醒目飞鹰也聚集了数量不少的粉丝团体。`);
    await falcon.say_and_wait(`嗯，是附近花店的店员姐姐送给我的。`);
    await era.printAndWait(
      `不少粉丝都把醒目飞鹰当作了自己理想的投影，所以伸出援手与帮助也是正常的吧？`,
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
      `醒目飞鹰一边发出像是某种计划成功的笑声，一边盯着你看。`,
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
      `就这样活用在夏季合宿中学到的知识，就这样让醒目飞鹰被更多的粉丝们知道⭐`,
    );
    await era.printAndWait(
      `如果是人类的身体，在这种压力之下已经不堪重负，但马娘却只是稍作休息之后便回复了些许力气。`,
    );
    await falcon.say_and_wait(`......啊！对了！演唱会马上就要开始了！`);
    await era.printAndWait(
      `作为马娘偶像的醒目飞鹰，受邀在小镇的告别演唱会上献唱。`,
    );
    await me.say_and_wait(`那我来送飞鹰子过去吧！`);
    await era.printAndWait(
      `原本是想这么说的，但是看到醒目飞鹰被沙子与汗水沾湿的训练服。`,
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
      `谢谢大家的支持！不过现在已经很晚了，还有的粉丝是从很远的地方专门来看飞鹰子的演唱会的……作为马娘偶像，飞鹰子必须为每一位粉丝考虑。`,
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
      `从早上开始的高强度训练，之后又进行了二小时的演唱会，就算将在车上的休息时间算在内，醒目飞鹰休息时间也不超过1小时。`,
    );
    await era.printAndWait(
      `站在舞台之上蹦跳的双腿，在你轻轻抱起她的一瞬间便像破娃娃一样瘫软在了地上。`,
    );
    await era.printAndWait(
      `就算能用意志到达更远的地方，身体却已经连最后一丝力气都用在了蹦跳之上。`,
    );
    await era.printAndWait(`——然而，醒目飞鹰露出了满足的表情。`);
    await falcon.say_and_wait(`……真希望每天都能像现在这样。`);
    await era.printAndWait(`飞鹰子的${falcon.sex}眼里却依然闪闪发光。`);
    await falcon.say_and_wait(
      `按照这种情况下去的话，说不定飞鹰子也能突破那道障碍呢！`,
    );
    await era.printAndWait(
      `沙地因为醒目飞鹰的存在，原本只关心草地的观众们也慢慢将视线注视到了现在。`,
    );
    await me.say_and_wait(`一定会成功的！`);
    await era.printAndWait(
      `醒目飞鹰的存在本身就是给在泥地默默努力的赛马娘们最好的安慰。`,
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
      `以沙地为作战方向，在最先头一直闪耀的马娘偶像——醒目飞鹰，如今已经是热门话题。`,
    );
    await era.printAndWait(
      `不少人为了亲眼目睹醒目飞鹰活跃的表现而专门购票前来观看。`,
    );
    await era.printAndWait(`夸张的说，沙地===醒目飞鹰几乎都已经要实现了。`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `……正如多大的名声就会迎来多大的考验，虽说是醒目飞鹰自愿的缘故而奔波于各类广告之间，但繁忙时训练都被迫停止有点让你笑不出来。`,
    );
    await me.say_and_wait(`……等到现在的合同结束后，我必须和飞鹰子好好谈谈了。`);
    await era.printAndWait(
      `虽说是尊重醒目飞鹰意志的缘故，但真的能称得上是自由吗？`,
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
      `或许是因为醒目飞鹰决绝的态度，不知道应该从什么方面入手。`,
    );
    await era.printAndWait(
      `是不是被醒目飞鹰讨厌了？想要旁观醒目飞鹰的演唱会都被醒目飞鹰找了各种理由婉拒。`,
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
    falcon.print(`只要向训练员先生倾诉烦恼的话——`);
    falcon.print(`疲惫的身体传出了软弱的话语。`);
    await falcon.say_and_wait(
      `飞鹰子不能再让亲爱的训练员先生受到危险了。`,
      true,
    );
    falcon.print(`捂住受伤的部位，矗立在血泊之中的训练员先生。`);
    falcon.print(`不行，不能再继续想下去了。`);
    falcon.print(`醒目飞鹰作为马娘偶像已经失格。`);
    await era.printAndWait(`但是——`);
    falcon.print(`将心中的疑问强行压下，作为完美的马娘偶像不能有任何瑕疵。`);
    await falcon.say_and_wait(`飞鹰子加油！`);
    await era.printAndWait(
      `重新为自己打气，作为马娘偶像的醒目飞鹰从后台回到了舞台之上。`,
    );
  } else if (edu_weeks === 95 + 17) {
    await print_event_name('倘若泪水能回到眼眶', falcon);
    await era.printAndWait(`打定主意后，你便强行将醒目飞鹰拉了过去。`);
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
    await era.printAndWait(`你与醒目飞鹰来到了这片空旷的草坪上。`);
    await era.printAndWait(`令人难以忍受的尴尬氛围在你们之间扩散开来。`);
    await era.printAndWait(
      `不用一个人背负着这么沉重的压力，之前的事情仅仅只是一个意外，只需要将注意力。`,
    );
    await era.printAndWait(`如果你是醒目飞鹰。这种话能说服自己吗？`);
    await me.say_and_wait(`……请多信任我一点。`);
    await era.printAndWait(`飞鹰子已经不堪重负了。`);
    await falcon.say_and_wait(`……诶？`);
    await era.printAndWait(`醒目飞鹰的语气之中夹杂着困惑与不解。`);
    await falcon.say_and_wait(`我一直都相信训练员先生呦？`);
    await era.printAndWait(`不对，你摇了摇头。`);
    await me.say_and_wait(
      `不只是训练员与马娘之间，也不止粉丝与偶像之间的关系，我希望能被醒目飞鹰作为最信任的人对待。`,
    );
    await falcon.say_and_wait(`……哪怕是飞鹰子的缘故，训练员先生受到了伤害？`);
    era.printButton(`我对醒目飞鹰的爱不会因为这种程度受到动摇。`, 1);
    era.printButton(`我对飞鹰子的爱不会因为这种程度受到动摇。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await falcon.say_and_wait(`……诶？`);
      await era.printAndWait(
        `像是听到了不可思议的话语，醒目飞鹰的瞳孔也一瞬间放大了。`,
      );
      await falcon.say_and_wait(`……真讨厌……最喜欢了……训练员先生怎么可以这样……`);
      await falcon.say_and_wait(`这样下去的话，飞鹰子……还怎么……抱歉。`);
      await era.printAndWait(
        `像是错觉一样，随着下颚传来的剧痛，你陷入了黑暗之中。`,
      );
      await era.printAndWait(`就这样，沉沉的睡去。`);
    } else {
      await falcon.say_and_wait(`……飞鹰子吗？`);
      await era.printAndWait(`醒目飞鹰的表情变得僵硬。`);
      await falcon.say_and_wait(`飞鹰子……果然还是飞鹰子才对呢……训练员先生。`);
      await era.printAndWait(`像是相当怀念一样，眯起了眼睛。`);
      await falcon.say_and_wait(
        `呐……看着飞鹰子吧。如果是为了训练员先生的话，飞鹰子什么都……`,
      );
      await era.printAndWait(`黯淡火燃的眼神一瞬间陷入死寂之中。`);
      await falcon.say_and_wait(
        `不对！这样的飞鹰子才不是训练员先生喜欢的那个包容着所有粉丝们的马娘偶像！`,
      );
      await era.printAndWait(`罪恶感像针一样刺入了胸口。`);
      await falcon.say_and_wait(
        `舞台之上的飞鹰子是所有粉丝们的，像这样……这样的行为是不可能被允许的。`,
      );
      await falcon.say_and_wait(
        `飞鹰子因为抛弃了作为马娘偶像的原则，结果训练员先生像是破烂的布娃娃一样被随意丢弃在血泊之中`,
      );
      await falcon.say_and_wait(
        `可是，明明已经发誓绝对会将爱平等的分给所有的粉丝，可是……看到训练员先生的时候，飞鹰子还是忍不住像倾注更多的爱。`,
      );
      await falcon.say_and_wait(
        `飞鹰子不会将爱全部倾注在训练员先生身上，而将爱倾注在训练员先生身上的时候，飞鹰子也就不是飞鹰子了。`,
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
      `自己正站在舞台中央，不，确切的说是醒目飞鹰站在舞台中央。`,
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
    era.printButton(`追赶醒目飞鹰`, 1);
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
    await era.printAndWait(`而期待的少女——醒目飞鹰就在这片草地之上。\n`);
    await era.printAndWait(`只要向她道歉，然后好好交流，一切误会都会化解。`);
    await falcon.say_and_wait(`诶?训练员先生怎么这么快……`);
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
    await era.printAndWait(`醒目飞鹰拉住了你。`);
    await era.printAndWait(`比起双手所感知的寒冷，那明亮的双眼却吸引了你。`);
    await falcon.say_and_wait(`飞鹰子……没有责怪训练员先生的意思……只是。`);
    await falcon.say_and_wait(
      `比起飞鹰子的幸福……如果训练员先生能更加幸福的话……`,
    );
    await falcon.say_and_wait(
      `抱歉……连粉丝一号的幸福都无法保证，作为偶像真是失格了呢……`,
    );
    await era.printAndWait(
      `大概是终于承受不住压力，平日里绝不会表达出来的话语就这么宣泄而出。`,
    );
    await era.printAndWait(
      `虽然心中已有猜测，直到她亲口说出为止自己才能确认，醒目飞鹰心底真正希望的是什么。`,
    );
    await era.printAndWait(`对不起，发生了这种事情。`);
    await era.printAndWait(
      `将少女轻轻背起，确认着这份重量，那就是与她一同前行的重量。`,
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
    await falcon.say_and_wait(`训练员先生久等了♪`);
    await era.printAndWait(
      `换上了便装的${falcon.name}踩着小碎步出现在了${me.actual_name}的眼前。`,
    );
    await era.printAndWait(
      `将头发自然的放下，若不是以其独特的发声，恐怕与人群之中来来往往的小马娘没有区别。`,
    );
    await era.printAndWait(
      `虽说你打算将保管于你的缎带交还给醒目飞鹰，却以“还是放在训练员先生这边比较好哦，妈妈也同意了”的理由拒绝了。`,
    );
    await era.printAndWait(
      `……虽说自己不是那种会对小马娘感兴趣的类型，但看向对方的时候，内心之中却涌现了一种难以言喻的感情。`,
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
        `在口中释放出的寒冷与甜蜜气息，就像是和训练员先生第一次见面时的场景呢♪`,
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
        `虽说与醒目飞鹰之间的关系稍稍稍微有那么一点点接近，但自认为还是处于良好的发展态势。`,
      );
      await falcon.say_and_wait(`久等了⭐训练员先生……还有丸善斯基前辈。`);
      await era.printAndWait(
        `似乎察觉到了两人之间的微妙关系，从长长的队伍中奔跑过来的醒目飞鹰渐渐放慢了脚步。`,
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
          `面对这种突如其来的状况，醒目飞鹰依然踏入了这片场所。`,
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
          `丸善斯基向你眨了眨眼，便协助着醒目飞鹰准备起了临时舞台的搭建。`,
        );
        await era.printAndWait(`一场风波就这么消散了。`);
      }
    }
  } else if (edu_weeks === 95 + 32) {
    await print_event_name('夏季合宿结束', falcon);
    await era.printAndWait(`${falcon.name}的第三年夏季合宿结束了。`);
    await falcon.say_and_wait(`向着顶级偶像的道路♪`);
    await era.printAndWait(
      `与往年不同的是，合宿结束的时候，${falcon.name}决定与${me.actual_name}一起在沙滩上散步。`,
    );
    await me.say_and_wait(`飞鹰子不打算`);
    await falcon.say_and_wait(`偶像和粉丝之间任何越线都是不可以的哦？`);
    await falcon.say_and_wait(`不过只要不被发现就不算♪`);
    await me.say_and_wait(`……这就是飞鹰子的决定吗。`, true);
    await era.printAndWait(
      `醒目飞鹰的身体向前微倾，右手食指竖在嘴唇中心，眨了眨右眼。`,
    );
    await falcon.say_and_wait(
      `而且，作为${
        falcon.name
      }也想和最喜欢的训练员${me.get_adult_sex_title()}一起散步！`,
    );
    await me.say_and_wait(`既然是飞鹰子的决定`);
    await falcon.say_and_wait(`不对！是${falcon.name}哦♪`);
    await me.say_and_wait(
      `抱歉，这里更正，是${falcon.name}的要求，那么我就带着感谢的心态接受了。`,
    );
    await falcon.say_and_wait(
      `哎呀~训练员${me.get_adult_sex_title()}这么说真是让人家不好意思呢⭐`,
    );
    await me.say_and_wait(`不要这样说着奇怪的话啊。`);
    await era.printAndWait(`之后的二人就偶像相关活动随意聊着天。`);
    await me.say_and_wait(`飞鹰子，现在做偶像还会感到快乐吗？`);
    await era.printAndWait(
      `虽说有些突兀，不过你还是想要了解飞鹰子的真实想法。`,
    );
    await falcon.say_and_wait(`飞鹰子已经做好觉悟了⭐`);
    await era.printAndWait(`不带任何语气的平淡宣告。`);
    await falcon.say_and_wait(
      `不过，飞鹰子从头到尾都只是一个非常普通的${falcon.get_uma_sex_title()}哦。`,
    );
    await falcon.say_and_wait(
      `只是一个梦想着能登上世界最大的舞台的普通${falcon.get_uma_sex_title()}罢了。`,
    );
    await falcon.say_and_wait(
      `就算飞鹰子成为了顶级偶像，飞鹰子的本质也不会发生改变。`,
    );
    await falcon.say_and_wait(`到时候——`);
    await me.say_and_wait(`我也会陪着飞鹰子一起努力！`);
    await me.say_and_wait(
      `毕竟，训练员也好，赛${falcon.get_uma_sex_title()}也好，从一开始就是一体的！`,
    );
    await me.say_and_wait(`所以，飞鹰子缺少的勇气我来补足！`);
    await falcon.say_and_wait(`诶诶诶！训练员${me.get_adult_sex_title()}！`);
    await falcon.say_and_wait(
      `能被既是飞鹰子的训练员同样作为粉丝一号的同伴这么信赖着。`,
    );
    await falcon.say_and_wait(`飞鹰子是这个世界上最幸福的马娘了⭐`);
    await era.printAndWait(`紧紧抱住你的${falcon.name}露出了幸福的表情。`);
  } else if (edu_weeks === 95 + 37) {
    await print_event_name('顶级偶像之路', falcon);
    await era.printAndWait(`夏天的炎热尚未完全散去，转眼之间来到了秋天。`);
    await falcon.say_and_wait(`我决定了。`);
    await falcon.say_and_wait(`育马场经典赛、冠军杯，以及东京大赏典。`);
    await falcon.say_and_wait(`飞鹰子要站在这三场比赛的胜者舞台之上！`);
    await era.printAndWait(`距离泥地的顶级偶像只剩下这三场考验了。`);
    await falcon.say_and_wait(
      `飞鹰子希望能让更多的${falcon.get_uma_sex_title()}们看到飞鹰子闪耀的样子！`,
    );
    await me.say_and_wait(`那么，就朝着梦想开始训练吧！`);
    await falcon.say_and_wait(`好！`);
  } else if (edu_weeks === 95 + 40) {
    await print_event_name(`天空、大地以及生活在这里的我们`, falcon);
    await era.printAndWait(`公园`);
    await era.printAndWait(`在飞鹰子的提议下，你们来到了公园的一处草坪上。`);
    await era.printAndWait(
      `转眼之间秋天已经过去一半了，一路上的行人也纷纷穿起了外套。`,
    );
    await me.say_and_wait(`飞鹰子不觉得冷吗？`);
    await era.printAndWait(
      `看着蹦蹦跳跳地在前方带路的飞鹰子，你实在忍不住好奇的向她询问。`,
    );
    await falcon.say_and_wait(`飞鹰子不觉得冷哦？`);
    await era.printAndWait(`说起来也是，毕竟马娘比起人类体温更高一点。`);
    await me.say_and_wait(`真是有点羡慕飞鹰子呢。`);
    await falcon.say_and_wait(`训练员先生突然之间在说什么呢？`);
    await me.say_and_wait(
      `像飞鹰子这么开朗可爱的马娘偶像，作为训练员真是幸运。`,
    );
    await falcon.say_and_wait(
      `诶~~？真是的！训练员先生突然之间这么说，飞鹰子。`,
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
    await falcon.say_and_wait(`......训练员先生看好了！呀啊！`);
    await era.printAndWait(
      `趁着你还没反应过来，飞鹰子飞奔向了盖子所在的大树。`,
    );
    await falcon.say_and_wait(`情侣吗？我和训练员先生`, true);
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
    await era.printAndWait(`声音突然变大的飞鹰子让周围的人视线都看了过来。`);
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
    await falcon.say_and_wait(`......稍微有点在意训练员先生的评价呢。`);
    await era.printAndWait(`最后的声音慢慢变得听不清了。`);
    await me.say_and_wait(
      `与舞台之上的飞鹰子相比，果然这样的飞鹰子也很可爱呢。`,
    );
    await me.say_and_wait(`飞鹰子闪耀的样子也很可爱。`);
    await falcon.say_and_wait(`飞鹰子也没有想象之中那么闪耀呢。`);
    await falcon.say_and_wait(
      `遇到训练员先生之前，飞鹰子每天都在为偶像活动还有逼近死线的挂科奔波呢。`,
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
    await falcon.say_and_wait(`这就是飞鹰子为什么作为马娘偶像的原因！`);
    await falcon.say_and_wait(
      `正因为飞鹰子不太聪明，所以鼓起勇气帮助更多的人！`,
    );
    await falcon.say_and_wait(
      `看到那些被飞鹰子的舞蹈感染到的马娘们走上飞鹰子走过的道路后。`,
    );
    await falcon.say_and_wait(`飞鹰子才会由衷的感到开心。`);
    await falcon.say_and_wait(`就像是，被电视上的偶像所激励的我一样呢。`);
    await era.printAndWait(
      `聚精会神诉说着的飞鹰子，才意识到自己一直端着的茶水变凉了。`,
    );
    era.printButton(`飞鹰子很伟大呢。`, 1);
    await era.input();
    await falcon.say_and_wait(`才没有呢！飞鹰子也只是普通的马娘偶像罢了。`);
    await falcon.say_and_wait(
      `只是一个觉得这么做会很开心才去做的普通小马娘罢了。`,
    );
    await falcon.say_and_wait(`而且`);
    await falcon.say_and_wait(
      `不过只是一个连告白都不敢的最差劲的马娘偶像罢了。`,
      true,
    );
    era.printButton(`而且？`, 1);
    await era.input();
    await falcon.say_and_wait(`诶嘿嘿⭐`);
    await era.printAndWait(`之后的谈话便在湖泊染上第一缕金色的光辉后结束了。`);
  } else if (edu_weeks === 95 + 47) {
    await print_event_name(`迷茫少女`, falcon);
    await era.printAndWait(
      `下周就是预定好的东京大赏了，将整理好的文件放到原先的位置后。`,
    );
    await me.say_and_wait(`比想要之中还要疲惫啊。`);
    await era.printAndWait(`伴随着放学铃的响起，差不多也到下班的时候了。`);
    await me.say_and_wait(`就在这里稍微等一下${falcon.name}吧。`);
    await era.printAndWait(
      `一反常态的是，直到倒好的咖啡热气消散为止，${falcon.name}活泼的样子都没有出现。`,
    );
    await me.say_and_wait(`可能是被突然拉去参加什么活动一直抽不开身吧。`);
    await era.printAndWait(`虽然很稀少，但这种情况也是出现过的。`);
    await era.printAndWait(
      `一般来说，不久就会在手机上收到${falcon.sex}发来的抱歉信息。`,
    );
    await me.say_and_wait(`既然这样的话，现在就先回宿舍吧。`);
    await me.say_and_wait(
      `第二天早上的时候再去听${falcon.sex}分享那些有趣的经历吧。`,
    );
    await era.printAndWait(
      `不知不觉中，你与${falcon.name}已经产生了相当程度的羁绊。`,
    );
    await era.printAndWait(
      `以前从未有过整理习惯的你在遇到比你还要邋遢的${falcon.name}被迫养成了整理的习惯。`,
    );
    await era.printAndWait(
      `遇到学习就逃跑的${falcon.name}现在也能安安静静坐在你的身边跟数学战斗了。`,
    );
    await era.printAndWait(
      `训练员与${falcon.get_uma_sex_title()}之间相互之间影响，最终都深刻影响了彼此之间的命运。`,
    );
    await me.say_and_wait(`飞鹰子的话，现在怎么样了呢？`);
    await me.say_and_wait(`一定在拍摄的时候露出了可爱的笑脸吧。`);
    await me.say_and_wait(`一定是这样的。`, true);
    await era.printAndWait(`冬日的夜晚比想象中还要漫长。`);
    await era.printAndWait(`思绪在独处的时刻延伸到了世界的尽头。`);
    await era.printAndWait(`深不见底的情感也在延伸的过程中被无限的放大。`);
    await era.printAndWait(`像沉默的大海，又像深不见底的井一样。`);
    await era.printAndWait(`咚咚咚。`);
    await me.say_and_wait(`这么晚的话，会是谁呢？`);
    await era.printAndWait(
      `轻轻打开门锁，却看见了散着头发的栗色${falcon.get_uma_sex_title()}。`,
    );
    await falcon.say_and_wait(`......训练员${me.get_adult_sex_title()}。`);
    await me.say_and_wait(`为什么，飞鹰子——不，进来再说吧。`);
    await era.printAndWait(
      `比起传出奇奇怪怪的传言，${me.actual_name}更担心的是飞鹰子的情况。`,
    );
    await me.say_and_wait(
      `喜欢喝什么饮料？红茶？果汁？还是咖啡？不，咖啡还是算了吧。`,
    );
    await era.printAndWait(`但在此之前，招待客人是作为主人的义务。`);
    await falcon.say_and_wait(`......啊，飞鹰子的话都可以哦。`);
    await me.say_and_wait(`心不在焉的样子，是发生了什么吗？`, true);
    await me.say_and_wait(`这么冷的天气，还是喝杯红茶暖和一下吧。`);
    await era.printAndWait(`像这样给客人倒茶对你来说还是一种新奇的体验。`);
    await era.printAndWait(
      `尽可能的将水壶慢慢倾倒下来，不让一滴茶水逸到桌子上。`,
    );
    await me.say_and_wait(`刚烧开的水有点烫，小心一点。`);
    await falcon.say_and_wait(`好的！`);
    await era.printAndWait(
      `捧起杯子小心翼翼尝了一口之后，就这样抱着杯子盯着茶叶不知在想些什么的${falcon.name}。`,
    );
    await me.say_and_wait(`那么，现在可以跟我说一下怎么了吗？`);
    await era.printAndWait(
      `现在的话，就算走到地铁站门口也来不及赶不上最后一班了。`,
    );
    await era.printAndWait(`如果开车的话，说不定还来得及？`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，可以让我就这样呆一会吗？`,
    );
    await me.say_and_wait(`......个人的独处有时候也是必要的。`);
    await era.printAndWait(
      `与平静的外表相反，${me.actual_name}的内心开始了天人交战。`,
    );
    await era.printAndWait(
      `强行按下尚不成熟的理智越来越激烈的警告，${me.actual_name}走到了阳台。`,
    );
    await era.printAndWait(`如果开车的话，说不定还来得及？`);
    await me.say_and_wait(`没有一丝阴霾的天空，宁静的月神在空中的神殿端坐。`);
    await me.say_and_wait(`明天也会是一个好天气。`, true);
    await me.say_and_wait(`像这样在阳台之上来回踱步还蛮有意思的。`, true);
    await me.say_and_wait(`有空的时候也这样子做吧！`, true);
    await me.say_and_wait(`......`, true);
    await me.say_and_wait(`飞鹰子，你怎么了？`, true);
    await era.printAndWait(`刚升起的愉悦情感随即被更强烈的担忧冲击。`);
    await era.printAndWait(`天空中的大圆盘似乎也在嘲笑着愚蠢的凡人自作多情。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，可以进来了哦？`,
    );
    await era.printAndWait(
      `得到少女的许可，如蒙大赦的${me.actual_name}迅速推开了玻璃门。`,
    );
    await me.say_and_wait(`干脆在这里住一个晚上吧？`);
    await era.printAndWait(`说出口的一瞬间${me.actual_name}就后悔了。`);
    await era.printAndWait(`万千感情涌上心头，最后脱口而出的竟是这句。`);
    await falcon.say_and_wait(`......`);
    await me.say_and_wait(`这下要被讨厌了。`);
    await falcon.say_and_wait(`嗯。`);
    await me.say_and_wait(`果然......嗯？`);
    await era.printAndWait(`为什么？`);
    await me.say_and_wait(`外宿许可申请了吗？`);
    await era.printAndWait(`学生在校外过夜需要提前向寮长进行申请`);
    await falcon.say_and_wait(`......`);
    await me.say_and_wait(`......我知道了，今天晚上的话现在这边休息吧。`);
    await era.printAndWait(
      `不久之后先后接到了富士奇石与作为室友的荣进闪耀担心的电话。`,
    );
    await me.say_and_wait(`抱歉耽误的时间太久了，已经的话已经找到地方住了。`);
    await me.say_and_wait(`第二天我会让${falcon.name}重新提交申请的。`);
    await me.say_and_wait(`......嗯嗯，感谢理解。`);
    await era.printAndWait(
      `挂掉电话之后，看着${falcon.name}的样子，忍不住还是叹了口气。`,
    );
    await me.say_and_wait(`......今天就先睡在床上吧，我去打地铺。`);
    await era.printAndWait(`所幸上次野营时使用的垫板还没有处理掉。`);
    await era.printAndWait(
      `将垫板铺在腾出来的地上，往上面铺上一层床单，简单的床铺就完成了。`,
    );
    await me.say_and_wait(`晚安`, true);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}晚安。`);
    await era.printAndWait(`从语气听起来${falcon.name}似乎恢复了平静。`);
    await me.say_and_wait(`空调房里应该没有事情吧？`, true);
    await era.printAndWait(`将灯关上后盖上了夏季的被子。`);
    await me.say_and_wait(`为什么${falcon.name}会突然过来呢？`, true);
    await me.say_and_wait(`明明是这么乖的孩子。`, true);
    await era.printAndWait(`盯着陌生的天花板却迟迟睡不着。`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(`像是从遥远的地方一样传来的微弱声音。`);
    await falcon.say_and_wait(
      `如果最后失败的话，训练员${me.get_adult_sex_title()}会讨厌这样的我吗？`,
    );
    await era.printAndWait(`未曾听过的颤抖。`);
    await me.say_and_wait(`不，怎么会。`);
    await falcon.say_and_wait(`我很害怕，真的很害怕，害怕失败的自己会被抛弃。`);
    await falcon.say_and_wait(
      `明明已经练习过无数遍了，但是，一想到失败的可能性。`,
    );
    await falcon.say_and_wait(`无论怎么努力，也无法消除那微弱的可能性。`);
    await falcon.say_and_wait(`即使想要闭上眼睛，在脑海之中浮现的确是——`);
    await falcon.say_and_wait(`——独自一人，在空荡荡的舞台之上。`);
    await falcon.say_and_wait(`想要说些什么，但什么也说不出口。`);
    await falcon.say_and_wait(
      `想要哭泣却流不出眼泪，最后只是变成了一种扭曲的笑容。`,
    );
    await me.say_and_wait(`如果${falcon.name}需要勇气的话，我来给你勇气。`);
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
