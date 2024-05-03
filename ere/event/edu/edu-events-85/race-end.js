const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const ruby = new CharaTalk(85);
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { say_by_passer_by } = require('#/utils/chara-talk');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const me = get_chara_talk(0),
    edu_weeks = era.get('cflag:85:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・等待时机', ruby);
    await ruby.say_and_wait(`我回来了。`);
    era.printButton(`辛苦啦。`, 1);
    era.printButton(`呜哇，白丝弄得好脏。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await ruby.say_and_wait(`谢谢。`);
    } else {
      await ruby.say_and_wait(`盯——`, true);
    }
    era.println();
    await era.printAndWait(`总之，是一场不负华丽一族名号的精彩出道战。`);
    await ruby.say_and_wait(`一会儿有见面会，我换好衣服就去。`);
    era.printButton(`知道了。`, 1);
    era.printButton(`需要我搭把手吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 2) {
      sys_love_uma(85, 1);
      sys_like_chara(85, 0, -5) && (await era.waitAnyKey());
    }
    era.drawLine();
    await say_by_passer_by(
      `记者A`,
      `虽然有点早，但有人认为三重宝冠正是第一红宝石小姐的本命路线。`,
    );
    await say_by_passer_by(`记者B`, `看了今天的比赛，我也感受到了。`);
    await say_by_passer_by(`记者B`, `和您母亲一样，甚至在其之上的光辉。`);
    await say_by_passer_by(
      `记者C`,
      `是啊，在那之后，希望能参加‘宝塚纪念’和‘有马纪念’等比赛。`,
    );
    await era.printAndWait(`兴奋、期待……`);
    await ruby.say_and_wait(`谢谢大家。`);
    await ruby.say_and_wait(`我一定会让大家看到期待着的活跃表现。`);
    await era.printAndWait(`这时，${me.actual_name}灵光一闪！出道战开始前——`);
    await ruby.say_and_wait(`对于被期待的状况我很感激，但也感到负担。`, true);
    await era.printAndWait(`对第一红宝石来说，这是普通、是理所当然的。`);
    await era.printAndWait(`但是…`);
    era.printButton(`我可是第一红宝石的训练员啊。`, 1);
    await era.input();
    await era.printAndWait(
      `以第一红宝石足以在新秀级拿下G1胜利的素质来看，三重宝冠也不过是你们旅途的中转站吧。`,
    );
    await era.printAndWait(
      `不想扫记者们的兴致，${me.actual_name}决定闭口不谈此事。`,
    );
    await era.printAndWait(`\n记者招待会后。\n`);
    await ruby.say_and_wait(`年内，我想集中训练。`);
    await era.printAndWait(`正如成为第一红宝石的训练员后你所了解到的一样。`);
    await ruby.say_and_wait(`三重宝冠战线是【华丽一族】最看重的事情。`);
    await era.printAndWait(`为了能在那里达到顶峰，积累训练是有必要的。`);
    await era.printAndWait(
      `量变会产生质变，当然，也有参加比赛积累经验的选项。`,
    );
    era.printButton(`露比。`, 1);
    await era.input();
    await ruby.say_and_wait(`我理解你的意思。`);
    await ruby.say_and_wait(`当然，也会考虑参加比赛。`);
    await ruby.say_and_wait(`但现状是，不能认为身体的本格化已经完成了。`);
    await ruby.say_and_wait(`所以希望方针是以训练为中心的。`);
    await era.printAndWait(`看来，没有什么值得讨论的地方了。`);
    await era.printAndWait(
      `你本来也想让第一红宝石继续好好锻炼身体，本人也有同样的想法再好不过——`,
    );
    era.printButton(`我知道了。`, 1);
    await era.input();
    await ruby.say_and_wait(`非常感谢。`);
    await era.printAndWait(
      `作为训练成果的检验，${me.actual_name}和第一红宝石选择了【报知杯】——樱花赏的前哨站作为年后的第一场重赏比赛。`,
    );
  } else if (
    extra_flag.race === race_enum.hoch_rev &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('赛后・此刻正是华丽之时', ruby);
    await ruby.say_and_wait(`终于做到了…`);
    await ruby.say_and_wait(`……——`);
    era.drawLine({ content: '休息室内。' });
    await ruby.say_and_wait(`请您对今天的比赛做出评价。`);
    era.printButton(`首先，从出闸开始。`, 1);
    await era.input();
    await era.printAndWait(`反省会进行了一段时间……`);
    await ruby.say_and_wait(`训练员先生，到此为止可以吗。`);
    await ruby.say_and_wait(`那么，根据反省点来调整训练计划。`);
    await era.printAndWait(
      `目标是【樱花赏】，露比的母亲也赢下的三重宝冠第一战。`,
    );
  } else if (
    extra_flag.race === race_enum.oka_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('樱花赏后・期待、加深', ruby);
    await era.printAndWait(
      `比赛后，第一红宝石虽然取得了意义非凡的胜利，但脸上依旧保持着清爽。`,
    );
    era.printButton(`恭喜。`, 1);
    await era.input();
    await ruby.say_and_wait(`谢谢，但是还差得远呢。`);
    await era.printAndWait(
      `【橡树杯】，宝冠路线的第二战，露比的母亲也曾于此折戟。`,
    );
    await era.printAndWait(
      `在中距离以上的赛事中，第一红宝石的实力还有未知的部分。`,
    );
    await ruby.say_and_wait(`我的问题可能是…`);
    await ruby.say_and_wait(`不。就算有什么问题，只要迅速解决就行了。`);
    await ruby.say_and_wait(`还请，彻底地指导我。`);
    await era.printAndWait(
      `就这样，为了下一个目标比赛【橡树杯】，训练的日子再次开始。`,
    );
  } else if (
    extra_flag.race === race_enum.yush_him &&
    edu_weeks < 95 &&
    extra_flag.rank > 5
  ) {
    await print_event_name('橡树杯后・橡树的叶子很宽大', ruby);
    await ruby.say_and_wait(`是吗，果然，我…`, true);
    await ruby.say_and_wait(`非常抱歉，让您看到了我不成气候的样子。`);
    await ruby.say_and_wait(
      `训练员先生也，为了今天，提供了很多训练以外的帮助。`,
    );
    await ruby.say_and_wait(`没能回报您的努力，我感到非常惭愧。`);
    era.printButton(`我也对不起……`, 1);
    era.printButton(`其实有其他的回报方式。`, 2);
    const ret = await era.input();
    if (ret === 1) {
      sys_like_chara(85, 0, 3) && (await era.waitAnyKey());
      await ruby.say_and_wait(`……诶？`);
      await era.printAndWait(
        `第一红宝石这不把内心展露出来的表明上的平静，让${me.actual_name}觉得非常的懊悔。`,
      );
      era.printButton(`下次……会让你…`, 1);
      await era.input();
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(`……非常、感谢。`);
      await ruby.say_and_wait(`下一个目标是【秋华赏】，在那之前我有一个提案。`);
      await ruby.say_and_wait(`我想参加作为其前哨站的【京都锦标】。`);
      await ruby.say_and_wait(
        `夏天的集训也很辛苦，但为了本命的比赛必须保持在最佳状态。`,
      );
      await era.printAndWait(`确实，夹着一场比赛，状态会更适应大赛吧。`);
      era.printButton(`我知道了。`, 1);
      await era.input();
      await ruby.say_and_wait(`拜托您了。`);
      era.printButton(`那么，我在入口等你。`, 1);
      await era.input();
      await ruby.say_and_wait(`嗯。`);
    } else {
      sys_love_uma(85, -1);
      sys_like_chara(85, 0, -3) && (await era.waitAnyKey());
      await ruby.say_and_wait(`这种玩笑，我不希望听到第二次。`);
      era.printButton(`享受比赛了吗？`, 1);
      await era.input();
      sys_love_uma(85, 3);
      sys_like_chara(85, 0, 5) && (await era.waitAnyKey());
      await ruby.say_and_wait(`诶？`);
      era.printButton(`试试看享受比赛吧。`, 1);
      await era.input();
      era.printButton(`如何让你胜利，是该由我考虑的事情。`, 1);
      await era.input();
      await era.printAndWait(`第一红宝石低着头思索着什么，你先行离开了。`);
    }
  } else if (
    extra_flag.race === race_enum.rose_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('玫瑰锦标后・华丽的身份转变', ruby);
    await ruby.say_and_wait(`——嗯？`);
    await ruby.say_and_wait(`右脚…一瞬间有什么违和感……`, true);
    await ruby.say_and_wait(`稍微观察一下情况吧，如果还是在意的话就……`, true);
    await era.printAndWait(
      `——几天后，${me.actual_name}得到了第一红宝石“脚的周围稍微有些违和感”的报告……`,
    );
    await era.printAndWait(`你马上带第一红宝石去了经常就诊的医生那里。`);
    await say_by_passer_by(`医生`, `的右脚，是急性化脓性疾病。`);
    await say_by_passer_by(`医生`, `也就是所谓的【蜂窝织炎】。`);
    await say_by_passer_by(`医生`, ``);
    await ruby.say_and_wait(`！`, true);
    await say_by_passer_by(`医生`, `请放心，情况不严重。`);
    await say_by_passer_by(`医生`, `多亏你在违和感阶段，就即使来就诊了。`);
    await say_by_passer_by(
      `医生`,
      `在你们下次的目标【秋华赏】前，就可以痊愈。`,
    );
    await ruby.say_and_wait(`……`);
    await ruby.say_and_wait(`决定了，年内预定的目标比赛暂时撤回。`);
    await ruby.say_and_wait(`我的脚，天生就有问题，这也是没办法的事。`);
    await ruby.say_and_wait(`关于脚的问题，不管程度如何，都应该慎重面对。`);
    await ruby.say_and_wait(`……`);
    await ruby.say_and_wait(`训练员先生。`);
    await ruby.say_and_wait(`比赛的参加与否，全部的判断就交给你了。`);
    era.printButton(`嗯嗯。`, 1);
    era.printButton(`交给我好了。`, 2);
    const ret1 = await era.input();
    if (ret1 === 2) {
      sys_like_chara(85, 0, 3) && (await era.waitAnyKey());
    }
    await say_by_passer_by(`医生`, `但是，真的可以吗？`);
    await say_by_passer_by(
      `医生`,
      `【秋华赏】和【伊丽莎白女王杯】，是你的梦想吧。`,
    );
    await ruby.say_and_wait(`……梦想。`);
    await ruby.say_and_wait(`谢谢你的好意，但是…`);
    await ruby.say_and_wait(`但是，我已经有了新的使命。`);
    await say_by_passer_by(`管家`, `还在会谈中，打扰了。`);
    await say_by_passer_by(`管家`, `大小姐，马上为您安排会面吗？`);
    await ruby.say_and_wait(`嗯，就那么做。`);
    await ruby.say_and_wait(
      `虽然提前了…但是和目标比赛的变更一起，今天发表吧。`,
    );
    era.drawLine({ content: '记者招待会上' });
    await say_by_passer_by(`记者A`, `训练员先生，这些没错吧。`);
    era.printButton(`是的，没有问题。`, 1);
    await era.input();
    await ruby.say_and_wait(`还有一件事，向大家报告。关于下一场目标比赛。`);
    await ruby.say_and_wait(`春天的【高松宫纪念】，决定参加。`);
    await ruby.say_and_wait(`即日起，我第一红宝石，宣布将参加短距离战线。`);
    await me.say_and_wait(`诶诶诶诶诶？`, true);
    await era.printAndWait(`\n短暂的见面会顺利结束了——`);
    await ruby.say_and_wait(`今天您辛苦了。`);
    era.printButton(`今天是真的很辛苦啊。`, 1);
    era.printButton(`这么辛苦的我会有奖励吗？`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await ruby.say_and_wait(`不值得您操心，都在设想中。`);
      await ruby.say_and_wait(`来年，恐怕会是以不同的形式被要求努力的一年吧。`);
      await ruby.say_and_wait(`训练员先生，明年还请继续精进。`);
      await ruby.say_and_wait(`那么……`);
      await ruby.say_and_wait(`……`);
      era.printButton(`露比？`, 1);
      await era.input();
      await ruby.say_and_wait(`不止明年，以后都请多多指教。`);
    } else {
      sys_love_uma(85, 1);
      sys_like_chara(85, 0, -3) && (await era.waitAnyKey());
      await ruby.say_and_wait(`……`);
      await ruby.say_and_wait(`请闭上眼睛。`);
      await ruby.say_and_wait(`啾。`, true);
      await era.printAndWait(`其实你只是恰巧闭眼，想问问露比要做什么而已。`);
      await era.printAndWait(
        `脸颊边传来的水声，让你哑然了，一时甚至不敢睁开眼睛。`,
      );
      await era.printAndWait(
        `等到回味够了那香软湿糯的触感时，第一红宝石已经离开了。`,
      );
    }
  } else if (
    extra_flag.race === race_enum.takm_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('高松宫纪念后・三代制霸', ruby);
    //TODO【紧追不舍】lv+1
    await ruby.say_and_wait(`胜利了…`);
    await ruby.say_and_wait(`嘿嘿…`);
    await era.printAndWait(`第一红宝石轻轻甩了下脑袋。`);
    await ruby.say_and_wait(`大家的声援，非常感谢。我实现了一族的愿望。`);
    await ruby.say_and_wait(`下一次出走，我会把更棒的奔跑献上。`);
    await era.printAndWait(`\n地下通道内`);
    await ruby.say_and_wait(`以前，你做的事好像都是对的。`);
    await ruby.say_and_wait(`虽然是人类，但你在某方面是很强的生物。`);
    await ruby.say_and_wait(`今后，我可能还会碰壁。`);
    await ruby.say_and_wait(`还请，不要放开我的手。`);
    get_attr_and_print_in_event(85, [3, 3, 3, 3, 3], 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.yasu_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('安田纪念后・深红乃热情的颜色', ruby);
    //TODO 【差行直线】lv+1
    await era.printAndWait(`比赛结束后，第一红宝石的表情，是前所未有的开朗。`);
    await era.printAndWait(`像冰一样锐利的光辉，这是至今为止她给人的印象。`);
    await era.printAndWait(`但是现在，像是从血肉中发光一样，由内而外的闪耀。`);
    await ruby.say_and_wait(`训练员先生。`);
    await ruby.say_and_wait(`关于下一个目标，我有建议想要提出。`);
    await era.printAndWait(
      `那是，决定速度最快赛${ruby.get_uma_sex_title()}的——【短途锦标】。`,
    );
    await ruby.say_and_wait(`是的。`);
    await ruby.say_and_wait(`我认为在那里，我可以触摸到更高的顶峰。`);
    await ruby.say_and_wait(`优秀的参赛者和对手们，会盯上我们吧。`);
    await ruby.say_and_wait(`但我感受到了，不能置之不理的义务感。`);
    get_attr_and_print_in_event(85, [3, 3, 3, 3, 3], 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.sprt_sta &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    const miracle = get_chara_talk(93);
    await print_event_name('短距离锦标后・未来是…', ruby);
    await miracle.say_and_wait(`冲刺…比谁都快，比谁都更早地——冲线！`);
    await miracle.say_and_wait(`脚…好痛，蹬不动地…`);
    await miracle.say_and_wait(`不行！为了大家，我一定要把胜利……`);
    await ruby.say_and_wait(`不会让你去的，我会在你迎来那等待你的绝望之前…`);
    await ruby.say_and_wait(`开辟未来！`);
    await miracle.say_and_wait(`诶，露比？`);
    era.drawLine({ content: '比赛前' });
    await ruby.say_and_wait(`即使赌上一切，也要在现在报恩。那也是很好的选择。`);
    await ruby.say_and_wait(`但是，对你来说这样真的是最好的吗？`);
    await ruby.say_and_wait(`你献上一切后，那些人就能得到回报吗？`);
    await miracle.say_and_wait(`都现在这个时候了…`);
    await ruby.say_and_wait(`只是思考着即将到达极限的‘现在’，我不喜欢那样。`);
    await ruby.say_and_wait(`我……因为训练员先生。`);
    await ruby.say_and_wait(`找到了不同的道路，新的使命，和更进一步的未来。`);
    await ruby.say_and_wait(`完成那条道路，就是我对被给予东西的回报。`);
    await ruby.say_and_wait(`我的，情爱。`);
    era.drawLine({ content: '回到赛场' });
    await ruby.say_and_wait(`哈啊——！`);
    await miracle.say_and_wait(`！`);
    await miracle.say_and_wait(`怎么跑…`);
    await miracle.say_and_wait(`我也要，为了大家…`);
    await say_by_passer_by(`实况`, `凯斯奇迹，失速！现在冲在前面的是——`);
    await say_by_passer_by(`实况`, `第一红宝石！`);
    await say_by_passer_by(`实况`, `第一红宝石，何等绮丽而凄厉的末脚！`);
    era.printButton(`去吧，露比。`, 1);
    await era.input();
    await ruby.say_and_wait(`……——`);
    await say_by_passer_by(
      `实况`,
      `胜者是第一红宝石！展现压倒性的速度，华丽一族的，第一红宝石！`,
    );
    era.drawLine({ content: '选手通道内' });
    await miracle.say_and_wait(`……露比。`);
    await ruby.say_and_wait(`奇迹同学。`);
    await miracle.say_and_wait(`恭喜你。真的，非常帅气。`);
    await miracle.say_and_wait(`我啊，真的觉得哪怕今天日子走到头也无所谓了。`);
    await miracle.say_and_wait(
      `我想自己一定跑不了很长时间，如果只要现在的话……就全部堵上。`,
    );
    await ruby.say_and_wait(`……`);
    await miracle.say_and_wait(`可是。`);
    await miracle.say_and_wait(
      `你的奔跑，太耀眼了。我想我说不定还有更能做的事情。`,
    );
    await miracle.say_and_wait(`继续比赛，让大家看到未来。回应你的温柔。`);
    await ruby.say_and_wait(`……！`);
    await miracle.say_and_wait(`真不甘心啊。`);
    await miracle.say_and_wait(`但，意外的清爽。`);
    await miracle.say_and_wait(`我会变得更强的。`);
    await miracle.say_and_wait(`按照这个速度锻炼身体，从头再来。`);
    await miracle.say_and_wait(`不会再破坏自己的。`);
    await ruby.say_and_wait(`奇迹同学…`);
    await miracle.say_and_wait(`大概，会选【天鹅锦标】吧。`);
    await ruby.say_and_wait(`……我会和训练员先生进行讨论的。`);
    get_attr_and_print_in_event(85, [3, 3, 3, 3, 3], 45) &&
      (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.swan_sta &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('天鹅锦标后・点火', ruby);
    await ruby.say_and_wait(`果然，各位都很棘手，而且——`);
    await ruby.say_and_wait(`奇迹同学……确实比以前更强了。`);
    await ruby.say_and_wait(
      `要在英里冠军杯上取得压倒性的胜利的话，我也得变得比现在更强才行。`,
    );
    await ruby.say_and_wait(`……`);
    await ruby.say_and_wait(`哼~`);
    await era.printAndWait(
      `看着一旁拉住奇迹吵吵嚷嚷的太阳神，第一红宝石露出了会心的微笑。`,
    ); //TODO 【短距离直线】lv+5，【短距离弯道】lv+5；
    get_attr_and_print_in_event(
      85,
      [20, 20, 20, 20, 20],
      120,
      JSON.parse('{"体力":-350}'),
    ) && (await era.waitAnyKey());
  } else if (
    extra_flag.race === race_enum.mile_cha &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('英里冠军杯后・最耀眼的光辉', ruby);
    await era.printAndWait(
      `比赛场上没有往日的喧嚣，谁都带着敬意迎接今天的胜者。`,
    );
    await era.printAndWait(`（啪啪啪啪啪……！！）`);
    await era.printAndWait(`所有人都站起来，称赞她。`);
    await ruby.say_and_wait(`大家…`);
    await era.printAndWait(`（啪啪啪啪啪……！！）`);
    await era.printAndWait(`……`);
    await say_by_passer_by(`荻野贵女`, `——`);
    await ruby.say_and_wait(`……！母亲大人…`, true);
    await ruby.say_and_wait(`母亲大人也鼓掌……承认了我。`);
    await ruby.say_and_wait(`终于…`);
    era.printButton(`恭喜你，露比。`, 1);
    await era.input();
    await ruby.say_and_wait(`……`);
    await era.printAndWait(
      `一瞬，视线和第一红宝石交汇。她立刻转向满场的观众。`,
    );
    await ruby.say_and_wait(`大家，非常感谢。`);
    await ruby.say_and_wait(`我以刚才的表现宣言。`);
    await ruby.say_and_wait(`今后，会用这双腿来探索更大的光辉。`);
    await ruby.say_and_wait(`作为华丽一族的，新的象征…`);
    await ruby.say_and_wait(`和我的训练员一起。`);
    await era.printAndWait(`这天，后来人们如此描述：华丽一族新的象征诞生了。`);
    get_attr_and_print_in_event(85, [3, 3, 3, 3, 3], 45) &&
      (await era.waitAnyKey());
  }
};
