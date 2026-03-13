const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  say_by_passer_by,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = async (falcon, me, _, flags, edu_marks, ebj) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get('cflag:46:位置')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
    await print_event_name(`合宿开始！`, falcon);
    await era.printAndWait(
      `夏季合宿开始后，${me.actual_name}和飞鹰子为了进行夏季特训来到了理事长的私人沙滩。`,
    );
    era.printButton(`好大的沙滩！`, 1);
    await era.input();
    await era.printAndWait(`一路的颠簸总算有了回报。`);
    await falcon.say_and_wait(`而且比想象中还要漂亮呢！`);
    await falcon.say_and_wait(`……嗯，这个时候先拍一张照片给粉丝们——`);
    await era.printAndWait(`一下车便迫不及待的咔嚓咔嚓拍个不停。`);
    era.printButton(`训练的话也不要忘记了！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `是！训练员${me.get_adult_sex_title()}就看着飞鹰子活跃的表现吧！`,
    );
    await falcon.say_and_wait(
      `不管是作为偶像的飞鹰子还是作为${falcon.uma_sex_title}的${
        falcon.name
      }都要全部完成！`,
    );
    era.printButton(`就是这种气势！`, 1);
    await era.input();
    era.println();
    await falcon.say_and_wait(
      `——综上所述，飞鹰子的第一个目标是！让附近小镇的居民认识到飞鹰子！`,
    );
    era.printButton(`飞鹰子加油！`, 1);
    await era.input();
    await falcon.say_and_wait(`马娘偶像清凉夏日演出作战，就从这个沙滩开始！`);
    await era.printAndWait(
      `${me.actual_name}与${falcon.name}在确定了演出场地后，夏季合宿便在歌声中开始了。`,
    );
  };
  handlers[47 + 30] = async (falcon, me, callname) => {
    era.set('cflag:46:节日事件标记', 0);
    await print_event_name(`庙会`, falcon);
    await falcon.say_and_wait(`飞鹰子要好好准备一下！`);
    await era.printAndWait(`${falcon.name}这么说着便匆忙跑进了宿舍之中。`);
    await era.printAndWait(
      `在夏季演出结束之后，因为气氛绝佳而额外进行的安可曲将结束时间向后推迟了一小时。`,
    );
    await era.printAndWait(`计划之中一起看烟火大会的时间表一下子紧张了起来。`);
    await era.printAndWait(
      `从宿舍中传出的喧嚣声渐渐消失。距离烟火大会开始还有不足一个小时。`,
    );
    await era.printAndWait(
      `今年的烟火大会在小镇中心举行。附近的最佳观赏点是在小镇不远处的山上。`,
    );
    await era.printAndWait(
      `以平时的脚力大概需要半个小时才能到山脚，距离上山还要额外的十五分钟，想到这一点不禁有些焦躁起来。`,
    );
    await falcon.say_and_wait(`不好意思久等了！`);
    await era.printAndWait(`终于来了。`);
    await era.printAndWait(
      `原本是想这么说的，但换上了浴衣的${falcon.name}比平时更加可爱。`,
    );
    await era.printAndWait(
      `嘴唇变得焦躁，心跳猛地开始加剧，头上也冒起了水珠。`,
    );
    await falcon.say_and_wait(`难道这身不好看吗？`);
    await era.printAndWait(
      `换上粉色浴衣的${falcon.name}将窈窕的身材展现的淋漓尽致，远远看去就像一朵鲜花一样惹人怜爱。`,
    );
    await me.say_and_wait(
      `如果飞鹰子不是最闪耀的马娘，恐怕世界上就没有人能承担这个称号了。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}这么说飞鹰子都有些不好意思了呢。`,
    );
    await era.printAndWait(`${falcon.name}害羞的低下了头。`);
    await me.say_and_wait(
      `虽然不能赶上第一波表演，但第二场的时间也已经足够了。`,
      true,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，可以牵起飞鹰子的手吗？`,
    );
    era.printButton(`牵起飞鹰子的手`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}将小手纳入掌心之中，比起平时在粉丝面前闪耀的模样，额外多了一份抚魅。`,
    );
    await falcon.say_and_wait(`抓好飞鹰子呦？`);
    await era.printAndWait(`嗯？`);
    await falcon.say_and_wait(`没什么⭐`);
    await era.printAndWait(
      `${falcon.name}偷偷捂着嘴笑了起来，随后便跟上了${callname}的脚步。`,
    );
    era.drawLine();
    await era.printAndWait(
      `举行庆典的数个场所之中，视野最好的是远离小镇的神社。`,
    );
    await era.printAndWait(
      `通向神社的道路需要走上一段漫长的阶梯，也因此人群相比其他地点要稍微稀疏一点。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}再不快一点就要开始了！`,
    );
    await era.printAndWait(
      `站在比${callname}稍高一级的阶梯上，${falcon.name}望向了不远处的山腰。`,
    );
    await me.say_and_wait(`飞鹰子等一下，太快了让我缓一下。`);
    await era.printAndWait(
      `${falcon.name}似乎有用不尽的活力一样，一开始是${callname}牵着${falcon.sex}的手，走了一段道路后，很快变成了${falcon.sex}拉着${callname}在阶梯上不断前进。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}的体力比想象中还要差呢！`,
    );
    await era.printAndWait(`该说马娘不愧是三女神的宠儿吗？`);
    await era.printAndWait(
      `相比人类来说几乎要耗尽所有体力的路程对马娘来说恐怕连热身都算不上。`,
    );
    await era.printAndWait(
      `在喘息时向左右望去，前往神社的道路几乎不见人影，祭礼音乐也渐渐到了尾声，烟火大会马上就要开始了。`,
    );
    await me.say_and_wait(`不能和飞鹰子一起看烟火大会的开幕式有些可惜呢。`);
    await era.printAndWait(
      `${callname}带着略微遗憾的语气向${falcon.name}说着。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}这么想和飞鹰子一起看烟火大会吗？`,
    );
    await era.printAndWait(`${falcon.name}的语气中带着一丝难以形容的奇怪感。`);
    era.printButton(`想和飞鹰子一起记录那个瞬间`, 1);
    await era.input();
    await era.printAndWait(`${callname}在思索过后坦率的告诉了${falcon.sex}。`);
    await falcon.say_and_wait(`那么抓紧飞鹰子！`);
    await era.printAndWait(
      `纤细的${falcon.teen_sex_title}将${callname}拉了过来。`,
    );
    await falcon.say_and_wait(`就这么一口气从阶梯上跨过去！ \n\n`);
    await era.printAndWait(
      `很难形容那种感觉，就像是在小镇里贩卖的胡辣汤全部洒在脸上一样，被风切割传来的剧痛感以及心脏受到的巨大压迫几乎使${callname}陷入恐惧之中。`,
    );
    await era.printAndWait(
      `然而这段地狱般的恐怖经历比想象中退去的迅速，直到${falcon.name}轻轻摇晃着${callname}的肩膀时，${callname}才意识到已经到山腰了。`,
    );
    await era.printAndWait(
      `忽然意识到了为什么路上没看到有人将马娘作为交通工具载着自己上下班。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，烟火大会开始了！`,
    );
    await era.printAndWait(
      `砰、砰、随着火红的鲜花照亮夜空，烟火大会的气氛正式进入高潮。`,
    );
    await era.printAndWait(
      `同时，在天空之中绽放的烟火也可以算是祭典这场演出的安可吧。`,
    );
    await era.printAndWait(
      `忽然间，让${callname}想起了正在泥地奔跑的${falcon.name}。`,
    );
    await era.printAndWait(`或许就像烟火一样，稍纵即逝。`);
    await era.printAndWait(`这么想的话多少会有些伤感。`);
    await falcon.say_and_wait(
      `真漂亮啊，如果飞鹰子登上顶级偶像的那一瞬间，恐怕没有比这更适合的吧！`,
    );
    await era.printAndWait(
      `在${callname}旁边的${falcon.name}被烟火染上了如火焰般橙黄的神情。`,
    );
    era.printButton(`明年也一起来看烟火大会吧`, 1);
    await era.input();
    await era.printAndWait(`天空中的花朵一排排的绽放，烟火大会也接近了尾声。`);
    await me.say_and_wait(`那时候一定比现在还要闪耀夺目！`);
    await era.printAndWait(`${falcon.name}望向了${callname}。`);
    await falcon.say_and_wait(`是！到时候请多指教！`);
    await era.printAndWait(`最美丽的烟火在${callname}眼前绽放。`);
  };
  handlers[95 + 6] = async (falcon, me) => {
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
    await era.printAndWait(`${falcon.name}背后堆积的巧克力山也分完了。`);
    await falcon.say_and_wait(`啊，等等，还有一份！`);
    await era.printAndWait(
      `${falcon.sex}从角落里取出一个包装精美的礼物盒，恐怕是布置场所时就已经准备好的吧。`,
    );
    await falcon.say_and_wait(
      `这是作为赛马娘的${falcon.name}平日里对训练员${me.get_adult_sex_title()}的感谢。`,
    );
    await era.printAndWait(
      `${falcon.name}的语气比想象之中更加平淡，看不出有什么变化。`,
    );
    await era.printAndWait(`大概是反应过度了吧，最近还是好好休息才行。`);
  };
  handlers[95 + 9] = async (falcon, me, callname) => {
    await print_event_name('${falcon.name}', falcon);
    await era.printAndWait(`火红色的天空被深蓝所劈开，随后散为漫天星尘。`);
    await era.printAndWait(`与平时并无不同的演唱会。`);
    await era.printAndWait(
      `尽管进入第三年后关注度略微下滑，但泥地粉丝们的热情却依然不减。`,
    );
    await era.printAndWait(
      `或许是个性如此鲜明的泥地偶像实在过于稀有的缘故吧。`,
    );
    await era.printAndWait(
      `被粉丝们所簇拥的${falcon.name}，具有着水晶胡萝卜一般的吸引力。`,
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
    await say_by_passer_by_and_wait(
      `忠实粉丝D`,
      `应该与接下来的比赛有关吧，毕竟在粉丝发布会上宣布第三年的泥地赛要全部胜利。`,
    );
    await say_by_passer_by_and_wait(
      `忠实粉丝D`,
      `不过就算这么苛刻的难度，飞鹰子却依然能绽放出笑容。`,
    );
    await say_by_passer_by_and_wait(
      `忠实粉丝D`,
      `『或许这才是马娘偶像吧』我总是这么想。`,
    );
    await say_by_passer_by_and_wait(`新粉丝E`, `说起来去年不是有个粉丝袭——`);
    await say_by_passer_by_and_wait(
      `忠实粉丝B`,
      `Stop！这种事是不能讨论的禁忌!`,
    );
    await era.printAndWait(
      `原本讨论正热烈的粉丝群体被这一盆冷水所打岔，众人纷纷没了继续讨论下去的欲望。\n\n\n`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}。`);
    await era.printAndWait(
      `最后一位来到现场的粉丝离开后，${callname}才从不远处迎接${falcon.name}。`,
    );
    await era.printAndWait(
      `面带笑容的${falcon.teen_sex_title}与${callname}分析着今天的演唱会成功与不足之处，每当得到肯定或更好的结论，回到特雷森的小径上便传来的欢快的笑声。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}。`);
    await me.say_and_wait(`诶？`);
    await falcon.say_and_wait(`虽然很遗憾。`);
    await era.printAndWait(`${falcon.name}的声音充满了平静。`);
    await falcon.say_and_wait(
      `不，没什么。像这样保持着距离，对于飞鹰子，还有训练员${me.get_adult_sex_title()}才是最好的。`,
    );
    await era.printAndWait(
      `与平时鲁莽的模样不同，${falcon.name}向${callname}露出了笑容。`,
    );
    await falcon.say_and_wait(
      `飞鹰子也反思过，或许与训练员${me.get_adult_sex_title()}之间的关系确实太亲密了呢。`,
    );
    await era.printAndWait(`一种难以言喻的隔阂在${callname}们之间展开。`);
    await falcon.say_and_wait(
      `作为马娘偶像，不平等的爱着所有的粉丝们可不行呢。`,
    );
    await me.say_and_wait(`不，倒也不至于。`);
    await era.printAndWait(`正当${callname}开始烦恼接下来该说些什么的时候。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，这个就暂时放在${callname}这里了。`,
    );
    await era.printAndWait(`${falcon.name}小心翼翼的将额头上的发饰取下。`);
    await me.say_and_wait(`……为什么？`);
    await era.printAndWait(
      `因为过于震惊而思考停止，下意识的将心底的疑惑吐露出来。`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}笑着将被水粘湿的缎带递给了${callname}。`,
    );
    await me.say_and_wait(`这不是对飞鹰子来说很珍贵的东西吗？`);
    await falcon.say_and_wait(`是的，对于飞鹰子来说是无可比拟的宝物。`);
    await falcon.say_and_wait(
      `不过飞鹰子觉得比起放在自己这边，暂时借给训练员${me.get_adult_sex_title()}才最能发挥用处。`,
    );
    await me.say_and_wait(`不，不对，一定是哪里出错了。`);
    await era.printAndWait(`如同眼睁睁的看着过山车即将通过缺口的道路一样。`);
    await era.printAndWait(`紧紧握住的右拳却被如同老虎钳的纤细手掌强行掰开。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}真是木头脑袋呢`,
    );
    await era.printAndWait(`带着略有遗憾的宛若死水的平静回复。`);
    await falcon.say_and_wait(`接下来飞鹰子要以马娘偶像的身份了。所以——`);
    await era.printAndWait(`直至深渊。`);
    await falcon.say_and_wait(`接下来请多指教了，（玩家名）训练员。`);
    await era.printAndWait(`原来如此，作为与过去的自己诀别之物吗。`);
    await era.printAndWait(`真好猜啊哈哈哈，答案肯定不是这个对吧。`);
    await me.say_and_wait(`哈哈，对吧，不对，不，也许。`);
    await me.say_and_wait(`${falcon.name}。`);
    await era.printAndWait(
      `像是被悬挂在教室上的白炽灯脱落时不幸在胸口处破裂时发出的悲鸣。`,
    );
    await falcon.say_and_wait(
      `所以，训练员${me.get_adult_sex_title()}，这样就可以了。`,
    );
    await era.printAndWait(`${falcon.name}不动声色的后退了一步。`);
    await me.say_and_wait(`开什么玩笑！`);
    await era.printAndWait(`与${falcon.name}一起经历的时间就这么否定了吗？`);
    await era.printAndWait(`为什么努力到最后是这个结果？`);
    await era.printAndWait(
      `因为愤怒而狂乱的身体想要宣泄心中的不甘与憎恨，最终却只能空虚的吐露支离破碎的话语。`,
    );
    await era.printAndWait(
      `眼前的视野化为一片模糊，口中重复着自己也不明白的对话，下意识的抗拒眼前的事实。`,
    );
    await era.printAndWait(
      `等到${callname}从目眩感中恢复时，身旁的${falcon.teen_sex_title}已经无影无踪。`,
    );
  };
  handlers[95 + 14] = async (falcon, me, callname) => {
    // 在第三年 ${falcon.name}作为泥地的马娘偶像成功提高了泥地赛道的人气
    // 马娘A、B选择了泥地赛道 A外向 B内向
    await print_event_name('粉丝感谢祭♪', falcon);
    await era.printAndWait(`为了感谢粉丝平时关照而举行的感谢活动再次开始。`);
    await era.printAndWait(`然而与以往不同的是。`);
    await say_by_passer_by(`马娘A`, `${falcon.name}前辈可以和我合影吗？`);
    await say_by_passer_by(`马娘B`, `我也想和飞鹰子合影！`);
    await era.printAndWait(`被刚刚入学的小马娘们团团围住的${falcon.name}。`);
    await falcon.say_and_wait(`没想到飞鹰子现在这么受欢迎呢……`);
    await say_by_passer_by(`马娘A`, `飞鹰子前辈现在可是泥地赛道的热门明星！`);
    await say_by_passer_by(
      `马娘A`,
      `大家现在一提到泥地赛事就会想到${falcon.name}呢！`,
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
    await falcon.say_and_wait(`～～～♪谢谢大家！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await falcon.say_and_wait(
      `接下来的比赛大家也要紧盯着闪耀的飞鹰子哟？那么，一二`,
    );
    await falcon.say_and_wait(`如果飞鹰子逃跑了？`);
    await say_by_passer_by(`粉丝们`, `那就只能追上去了！`);
    await falcon.say_and_wait(`要追到地平线的尽头吗～？`);
    await say_by_passer_by(`粉丝们`, `那里就是飞鹰子的大舞台！`);
    await falcon.say_and_wait(`没有路就让飞鹰子来找! 发现目标就快快去抓到!`);
    await say_by_passer_by(`粉丝们`, `——去抓住大大的爱吧！`);
    await falcon.say_and_wait(
      `最强的${falcon.uma_sex_title}偶像，${falcon.name}♪今天也送到了呢⭐`,
    );
    await say_by_passer_by(`粉丝们`, `噢噢噢噢噢噢噢噢！飞鹰子！飞鹰子！`);
    await era.printAndWait(`飞鹰子的演出大获成功。`);
    era.drawLine();
    await me.say_and_wait(`稍微在附近转转吧`, true);
    await era.printAndWait(`原本人烟稀少的小径，也因为访客的到来而变得拥挤。`);
    await era.printAndWait(
      `虽然对想要从捷径处离开的${callname}造成了些许困扰，但密密麻麻的人群却有一种虚幻的安全感。`,
    );
    await era.printAndWait(
      `记得有位学者曾说过，一个人能维持稳定社交的人数是150人，而进一步交流的人数只有20人左右，最终能发展成为密友的人数却只剩下可怜的5～7人左右。`,
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
    await me.say_and_wait(`……${falcon.name}`, true);
    await era.printAndWait(
      `以顶级马娘偶像为目标一直闪耀到尽头为止的，不服输的${falcon.teen_sex_title}。`,
    );
    await era.printAndWait(
      `总觉得${falcon.name}这么急躁的拉开两者之间的界限，并没有之前自己想象中那么简单。`,
    );
    await me.say_and_wait(`${falcon.name}也有自己的苦衷。`);
    await era.printAndWait(`光是意识到这一点，就已经是一种深层的安慰了。`);
    await era.printAndWait(
      `——哪怕这安全感并不真实，但不真实的安全感也是安全感。`,
    );
    await era.printAndWait(`强迫自己认识到这一点。`);
    await me.say_and_wait(`接下来找机会好好和${falcon.name}聊聊吧。`, true);
    await era.printAndWait(`${callname}将注意力重新集中在训练计划上。`);
  };
  handlers[95 + 18] = async (falcon, me, callname) => {
    // 脑海之中闪现与训练员之间的过往
    await print_event_name(`日常`, falcon);
    await era.printAndWait(`被大幅的震动所惊醒。`);
    await era.printAndWait(`尚且模糊的视线之中，隐隐约约有橙色的色块移动。`);
    await era.printAndWait(`揉了揉发胀的双眼，想要将自身的注意力集中。`);
    await era.printAndWait(`却与同样迷茫的${falcon.teen_sex_title}对视。`);
    await falcon.say_and_wait(`啊……`);
    await era.printAndWait(
      `${falcon.teen_sex_title}似乎也是刚刚醒来，疑惑于陌生的天花板。`,
    );
    await me.say_and_wait(`下午好，${falcon.name}。`);
    await era.printAndWait(
      `似乎意识到了什么，瞬间放大的瞳孔以及刷的一下竖立起来的耳朵。`,
    );
    await falcon.say_and_wait(
      `——诶？诶！为什么我会在训练员${me.get_adult_sex_title()}的房间里？`,
    );
    await era.printAndWait(
      `得益于两人之间的深厚羁绊，${falcon.name}在疑惑之后没有向${callname}发起攻击而是大声询问。`,
    );
    await me.say_and_wait(
      `抱歉，虽然是我自作主张，已经将外宿许可证交给寮长确认过了。`,
    );
    await falcon.say_and_wait(
      `这样……训练员${me.get_adult_sex_title()}对飞鹰子……`,
    );
    await me.say_and_wait(`不对！我也开始跟不上飞鹰子跳脱的思路了。`);
    await me.say_and_wait(
      `因为我突然意识到未经许可就擅自离开特雷森去医院而被小报记者拍到的话，我会直接上花边新闻的头条。`,
    );
    await me.say_and_wait(`不论是我还是飞鹰子的名誉，恐怕都会受到严重的挫伤。`);
    await me.say_and_wait(
      `所以我在得到医生没有大碍需要好好休息的回复后，便以${falcon.name}在巡回过程中因为过度劳累昏倒作为理由向理事长申请了外宿许可。`,
    );
    await me.say_and_wait(
      `虽然是深夜，但手纲小姐能这么迅速的回复，实在是帮了大忙。`,
    );
    await me.say_and_wait(`说起来，飞鹰子现在觉得怎么样?`);
    await era.printAndWait(
      `就这么默默听着${callname}讲述的${falcon.name}从床上站了起来。`,
    );
    await falcon.say_and_wait(
      `抱歉，给训练员${me.get_adult_sex_title()}添了这么大的麻烦。`,
    );
    await era.printAndWait(`然后转向${callname}深深的鞠躬。`);
    await me.say_and_wait(
      `抱歉，如果我能多对${falcon.name}信赖一点的话，飞鹰子也不会陷入这种境地。`,
    );
    await era.printAndWait(`脑海中闪过了${falcon.name}悲伤的笑容。`);
    await me.say_and_wait(
      `如果我能抑制住心中焦虑的话，飞鹰子就不会受到这种折磨。`,
    );
    await era.printAndWait(`于是${callname}也深深的低下了头。`);
    await falcon.say_and_wait(
      `诶！明明是飞鹰子犯下的错误，训练员${me.get_adult_sex_title()}没必要这样。`,
    );
    await era.printAndWait(
      `想要抬起头阻止${callname}的${falcon.name}与${callname}的脑袋发生了碰撞。`,
    );
    await era.printAndWait(
      `${callname}的鼻子似乎因为受到了重击而传来了酥麻感。`,
    );
    await falcon.say_and_wait(`啊，训练员${me.get_adult_sex_title()}。`);
    await me.say_and_wait(`嗯？怎么了？`);
    await era.printAndWait(
      `${callname}下意识的摸了摸鼻子，鲜红色的液体顺着鼻腔流入了嘴巴。`,
    );
    await era.printAndWait(
      `……不知为何，苦涩的铁锈味却给予了${callname}一种安心的感觉。`,
    );
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}请坐下来！`);
    await era.printAndWait(
      `${falcon.name}不容分说便让${callname}坐在了床上，${callname}将餐巾纸撕成两半后折叠堵住了正在流血的鼻孔。`,
    );
    await me.say_and_wait(`……哈哈哈。`);
    await era.printAndWait(
      `看着病人与看护者立场反转的一幕，实在忍不住笑了出来。`,
    );
    await era.printAndWait(
      `尚未扎稳的餐巾纸因为震动而在空中划过了一道红色的丝线，下一刻，沾湿了${callname}的训练员外套。`,
    );
    await falcon.say_and_wait(`诶诶诶！`);
    await era.printAndWait(`如往日一般，手忙脚乱的日常再次启动。`);
  };

  handlers[95 + 29] = async (falcon, me, callname, flags, edu_marks, ebj) => {
    // 节拍 场景 序列 幕 故事
    // CFLAGNAME:45 = 位置
    if (
      era.get('cflag:46:45') !== location_enum.beach ||
      era.get('cflag:46:45') !== era.get('cflag:0:45')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
    await print_event_name(`合宿开始！`, falcon);
    await me.say_and_wait(`终于到了。`);
    await era.printAndWait(
      `因为${falcon.name}在马推上发布的演唱会通知而一口气涌入的粉丝们。`,
    );
    await era.printAndWait(`点赞，耐心回答问题，对不友好的评论进行删除。`);
    await era.printAndWait(
      `在颠簸的大巴车上一直看手机的结果就是离目的地还有1/4路程时一股反胃感袭来。`,
    );
    await era.printAndWait(`好不容易到达目的地后立刻吐到了昏天黑地。`);
    await era.printAndWait(`虽然借由此切身体会到了自己活着的鲜明存在感。`);
    await era.printAndWait(
      `不过对于${falcon.name}来说，这也是一个难得的从不停的奔波之中得以休息的日子。`,
    );
    await me.say_and_wait(`简直就跟度假一样。`, true);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}！`);
    await era.printAndWait(`${falcon.name}正四处寻找着${callname}。`);
    await me.say_and_wait(`我在这里！`);
    await era.printAndWait(`尽可能大声地回应着对方。`);
    await era.printAndWait(
      `在得到了回应的${falcon.name}啪塔啪塔地踩着沙子向${callname}的方向跑了过来。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}⭐接下来的训练也请多——`,
    );
    await falcon.say_and_wait(
      `哎哎？训练员${me.get_adult_sex_title()}没事吧？`,
    );
    await era.printAndWait(`看着${callname}因为难受而苍白的脸色。`);
    await me.say_and_wait(`只是处理粉丝回复太久有点晕车了，不是什么大事。`);
    await falcon.say_and_wait(`不对!`);
    await era.printAndWait(`不像是马娘偶像风格的${falcon.name}大声的反驳着。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}是飞鹰子在马娘偶像道路上一起前行的同伴!如果训练员${me.get_adult_sex_title()}因为状态不好倒下了，那么飞鹰子的训练也会大打折扣的。`,
    );
    await era.printAndWait(`从两人身边路过的马娘与训练员纷纷侧目。`);
    await me.say_and_wait(`抱歉，下次不会这么做了。`);
    await era.printAndWait(
      `或许是周围汇聚的目光越来越多，亦或是${callname}道歉的缘故，${falcon.name}的态度缓和了。`,
    );
    await falcon.say_and_wait(`飞鹰子这么说也有点过分了呢，抱歉。`);
    await falcon.say_and_wait(
      `——如果训练员${me.get_adult_sex_title()}跑到了飞鹰子看不到的地方的话`,
    );
    await era.printAndWait(`${falcon.name}低下了头不知在想着什么。`);
    await me.say_and_wait(`飞鹰子？`);
    await falcon.say_and_wait(
      `没什么啦⭐飞鹰子在夏季合宿的计划是——让沙滩在内的所有游客全部成为飞鹰子的粉丝！`,
    );
    await falcon.say_and_wait(
      `为此，接下来的庙会上，飞鹰子要俘获前来观看演出的游客的心！`,
    );
    await me.say_and_wait(`不要忘记训练！`);
    await era.printAndWait(
      `似乎是从这份目标之中得到了活力的缘故，${falcon.name}变得闪闪发光。`,
    );
    await falcon.say_and_wait(`真是的～这个也不会落下的啦⭐`);
    await era.printAndWait(
      `看着眼前的${falcon.name}又恢复到了原来的状态，${callname}也放下了心。`,
    );
    era.printButton(`嗯——接下来先绕着沙滩跑十圈热下身吧！`, 1);
    await era.input();
    await falcon.say_and_wait(`好♪`);
    await era.printAndWait(`${callname}与飞鹰子之间第三年的夏季合宿开始了。`);
  };
  handlers[95 + 30] = async (falcon, me, callname, flags, edu_marks, ebj) => {
    if (
      era.get('cflag:46:45') !== location_enum.beach ||
      era.get('cflag:46:45') !== era.get('cflag:0:45')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
    await print_event_name(`庙会`, falcon);
    await era.printAndWait(`离沙滩不远的小镇上\n`);
    await era.printAndWait(`因为靠近沙滩而利用地势举行着一年一度的夏日庆典。`);
    await era.printAndWait(
      `而作为最近冉冉升起的沙地之星而受到邀请的${falcon.name}正站在舞台的中央。`,
    );
    await falcon.say_and_wait(`～～～♪呼——谢谢大家⭐`);
    await era.printAndWait(
      `舞台之下的观众们向舞台之上的偶像献上了掌声与喝彩。`,
    );
    await me.say_and_wait(`果然还是在观众席上才是最棒的选择。`, true);
    await era.printAndWait(
      `听到了${callname}想要在观众席上观看${falcon.name}表演的意愿时，${falcon.name}似乎有什么想说的话，但当${callname}想要询问时却被敷衍过去了。`,
    );
    await era.printAndWait(
      `尽管如此，每当歌曲结束后，在与粉丝互动的视线交互中，一股若有若无的视线一直紧紧看着${callname}。`,
    );
    await me.say_and_wait(`……`, true);
    await era.printAndWait(`总觉得有些寂寞。`);
    await era.printAndWait(
      `倒不是说${falcon.name}的表演一般，青涩的原石在经历的雕琢下已经露出了璀璨的钻石。`,
    );
    await era.printAndWait(
      `仅仅只是有些，有一点怀念遇到${falcon.name}时纯粹的模样。`,
    );
    await era.printAndWait(`现在的${falcon.sex}已经出色的成为了一名偶像。`);
    await era.printAndWait(`已经足够了。`);
    await me.say_and_wait(`……`, true);
    await era.printAndWait(`心中的不安却并没有因此消散。`);
    await era.printAndWait(`就像是忽略了什么。`);
    await era.printAndWait(`那双悲伤的眼睛。`);
    await say_by_passer_by(`游客A`, `呜啊！`);
    await era.printAndWait(
      `随着一声惨叫，暗红色的液体泼溅到了${callname}的身上。`,
    );
    await me.say_and_wait(`唔啊啊啊啊`);
    await era.printAndWait(
      `不幸之中的万幸，暗红色的液体经过时间的流逝热度已经消退大半，体感只是微热。`,
    );
    await era.printAndWait(`剩下的烦恼沾染了大半汤汁的衬衫如何清洗,以及`);
    await me.say_and_wait(`唔啊啊啊！`, true);
    await era.printAndWait(`就像是无数蚂蚁沿着眼睑在角膜周围四处乱爬。`);
    await me.say_and_wait(`餐巾纸，水，或者什么能够帮到我的——`);
    await era.printAndWait(`向着四周胡乱挣扎的双手总算握住了湿润的毛巾。`);
    await me.say_and_wait(`非常抱歉，接下来我会补偿${callname}的！`);
    await era.printAndWait(
      `说着连自己都觉得过分的话语，不管三七二十一就往脸上招呼。`,
    );
    await era.printAndWait(`周围似乎起了很大的骚动。`);
    await me.say_and_wait(
      `……不会是把那位女士的衣服作为毛巾撕扯下来了吧？`,
      true,
    );
    await era.printAndWait(`刺痛的触觉结束之后，猛地睁开眼。`);
    await me.say_and_wait(`抱歉，我会设法补偿${callname}的……${falcon.name}。`);
    await era.printAndWait(`映入眼帘的是缺失了右腕布料的偶像服。`);
    await era.printAndWait(
      `于是舞台之上的${falcon.teen_sex_title}来到了舞台之下。`,
    );
    era.drawLine();
    await era.printAndWait(
      `想办法安抚好了骚动的人群后，${callname}与${falcon.name}走在了回宿舍的道路上。`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(`不知该如何开口。`);
    await era.printAndWait(
      `第一次见到这么慌张的${falcon.name}，就像是得知自己要与${falcon.name}永远分别一样。`,
    );
    await falcon.say_and_wait(`……`);
    await falcon.say_and_wait(`飞鹰子是不是搞砸了……`);
    await falcon.say_and_wait(
      `明明大家都是千里迢迢从很远的地方专门支持飞鹰子的。`,
    );
    await era.printAndWait(`在冲动过后，开始懊悔的${falcon.name}。`);
    await me.say_and_wait(
      `并不会，粉丝们的大家看到这么焦急的飞鹰子，心里也一定跟着焦急起来。`,
    );
    await me.say_and_wait(
      `当他们看到飞鹰子安心的表情之后，一定也会安心下来的。`,
    );
    await era.printAndWait(
      `${falcon.name}似乎有什么话想说出口，但最终还是保持沉默。`,
    );
    await era.printAndWait(
      `${callname}们与沉浸在欢乐氛围之中的人群背道而行，直到走到一个人烟稀少的地段，${falcon.name}终于开口了。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，飞鹰子是不是很自私呢？`,
    );
    await falcon.say_and_wait(
      `明明说着要平等的爱着每一个粉丝，不过天平却总会向一方倾倒。`,
    );
    await falcon.say_and_wait(
      `飞鹰子最终还是违约了呢……即使是对自己应负责之事(偶像之责)还是继续违约了。`,
    );
    await era.printAndWait(
      `思索再三后，${falcon.name}还是将心中的话语说出了口。`,
    );
    await era.printAndWait(
      `${callname}心中明白，这是${falcon.sex}为之痛苦的迷茫。`,
    );
    await me.say_and_wait(`飞鹰子，${callname}知道训练员这个职业吗？`);
    await era.printAndWait(`片刻的思考过后，${callname}努力保持着平静开口。`);
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
      `成功的时候或许因为胜利的事实而不违背自己的承诺，而失败的时候，我们又该如何面对向${falcon.sex}们夸下海口的自己呢？`,
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
    await me.say_and_wait(
      `所以，在明白${callname}的责任后，按照${callname}的想法去实现吧。`,
    );
    await era.printAndWait(
      `接下来的这段道路之中，${falcon.name}的步伐轻快了许多。`,
    );
    era.set('cflag:46:节日事件标记', 0);
  };
  handlers[95 + 48] = async (falcon, me, callname) => {
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
    await era.printAndWait(`粉丝B「今后也会一直支持着${callname}的！」`);
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
    await era.printAndWait(
      `低头向${callname}鞠躬的飞鹰子让${callname}有点意外。`,
    );
    era.printButton(
      `不，再怎么说也是飞鹰子的功劳，我只是做了分内的事情罢了`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(
      `怎么会！如果没有训练员${me.get_adult_sex_title()}的话，飞鹰子连出场的机会都不存在！`,
    );
    await falcon.say_and_wait(
      `而且，我对训练员${me.get_adult_sex_title()}……啊，抱歉。`,
    );
    await falcon.say_and_wait(`接下来一起去哪里逛逛吧？`);
    await falcon.say_and_wait(`外宿许可也已经申请了哦！`);
    await era.printAndWait(
      `轻轻牵起${callname}的手的${falcon.name}拉着${callname}前进。`,
    );
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
      `也有这一部分的缘故，不过更多的还是像普通${falcon.uma_sex_title}一样享受着节日的气息。`,
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
      `咕～这种气氛下训练员${me.get_adult_sex_title()}真是木头呢。`,
    );
    await era.printAndWait(
      `咕噜咕噜搅拌着还剩下一半果汁发出了不满声音的飞鹰子看着${callname}。`,
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
    await me.say_and_wait(`……`);
    await falcon.say_and_wait(`那么！一、二、三！`);
    await era.printAndWait(`在手机上拍下了接吻瞬间的${falcon.name}。`);
    await era.printAndWait(`作为偶像来说绝对NG的吧？`);
    await falcon.say_and_wait(
      `作为偶像的飞鹰子必须把平等的爱给每一位粉丝，不过现在的我只是随处可见的普通${falcon.uma_sex_title}哦！`,
    );
    era.set('cflag:46:节日事件标记', 0);
  };
};
