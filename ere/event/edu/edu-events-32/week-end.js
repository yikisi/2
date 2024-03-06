const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const { say_by_passer_by } = require('#/utils/chara-talk');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SuEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { buff_colors } = require('#/data/color-const');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async function (hook, _, event_object) {
  const me = get_chara_talk(0),
    love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32),
    event_marks = new SuEduMarks(),
    edu_weeks = era.get('cflag:32:育成回合计时');
  if (event_marks.beginning === 1) {
    await print_event_name(`实验的开始`, tachyon);
    await era.printAndWait(`这里是府中特雷森学园，今天你我的梦想也在这里成长茁壮着
`);
    await tachyon.say_and_wait(`训练员君，张口`);
    era.println();
    await era.printAndWait(`成长茁壮着`);
    era.println();
    await tachyon.say_and_wait(`训练员君，去跑一圈试试速度`);
    era.println();
    await era.printAndWait(`成长茁壮`);
    era.println();
    await tachyon.say_and_wait(`训练员君，把药片含着，我说吞下去才能吞`);
    era.println();
    await era.printAndWait(`成长……？`);
    era.println();
    await era.printAndWait(
      `在从一大早就被叫到实验室做了一早上实验后，你内心的疑惑已然达到了巅峰`,
    );
    era.println();
    await era.printAndWait(
      `现在这个时间应该是上课时间，${tachyon.sex}不用去上学吗？`,
    );
    await era.printAndWait(`我，这个时候不是应该去做文书业务吗？`);
    await era.printAndWait(
      `为什么自己会在这里吃下一堆奇奇怪怪的药做各式各样的实验？`,
    );
    era.println();
    await tachyon.say_and_wait(`训练员君？你在发什么呆？`);
    era.println();
    await era.printAndWait(`${tachyon.name}疑惑的看着你，脸上满是不耐`);
    await era.printAndWait(
      `${tachyon.sex}是你前几天在训练场上看见的${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(
      `当时的你，被${tachyon.sex}那如光一般的速度和跑法所吸引，在冲动下就与${tachyon.sex}签订了契约`,
    );
    await era.printAndWait(`然后，冲动下签下了许多奇奇怪怪的契约`);
    await era.printAndWait(`貌似，其中是包括了试药什么的`);
    await era.printAndWait(
      `这么说来，当时的自己竟然就这样毫无怀疑的签下了吗？`,
    );
    await era.printAndWait(`你忍不住开始怀疑自己当时的心智状态`);
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`你忽然回过神来`);
    await era.printAndWait(
      `刚才回忆花了太多的时间，速子刚刚似乎叫了自己结果自己没有响应`,
    );
    await era.printAndWait(`完蛋了，不会被骂吧`);
    await era.printAndWait(
      `你毫无大人样的，战战兢兢抬头看向负责${tachyon.get_uma_sex_title()}，正好对上了${
        tachyon.sex
      }盯着你的双眼`,
    );
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`那暗红色的双眼，如百叶窗一般将你的目光吸入`);
    await era.printAndWait(`—————不，准确而言，不是吸入`);
    await era.printAndWait(
      `那目光只是静静的存在于哪里，但其本身，就如同一面窗户一般`,
    );
    await era.printAndWait(`使人不由自主想要去探清窗户后的一切`);
    await era.printAndWait(
      `将人吸入的，不是${tachyon.sex}的目光，而是自己的好奇心`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}的极限在哪里？`);
    await era.printAndWait(`${tachyon.sex}的脑中到底在想些什么？`);
    await era.printAndWait(`${tachyon.sex}的未来究竟能够如何璀璨？`);
    await era.printAndWait(`${tachyon.sex}喜欢的类型是？`);
    await era.printAndWait(`${tachyon.sex}穿的内裤是什么颜色的？`);
    await era.printAndWait(`是戴套派还是吃药派的？`);
    await era.printAndWait(`敏感带是耳朵还是胸部？`);
    await era.printAndWait(`在床上喜欢什么体位？`);
    era.println();
    await era.printAndWait(`一切，一切`);
    await era.printAndWait(`${tachyon.sex}的一切你都想要了解`);
    era.println();
    await era.printAndWait(`${tachyon.sex}看着你的眼睛，忽然笑了`);
    era.println();
    await tachyon.say_and_wait(`这种渴求的目光……就像小动物一样啊`);
    era.println();
    await era.printAndWait(`小动物？自己？`);
    await era.printAndWait(`你不由得感到有些羞耻`);
    await era.printAndWait(`明明是大人的自己却被当成小动物来看待`);
    era.println();
    await tachyon.say_and_wait(`是啊……小动物，就像……实验动物一样`);
    era.println();
    await era.printAndWait(`${tachyon.sex}忽然陷入了沉思，不知道在思考些什么`);
    await era.printAndWait(`然后，忽然点了点头`);
    era.println();
    await tachyon.say_and_wait(`……嗯，有了`);
    era.println();
    await era.printAndWait(`${tachyon.sex}自信满满的说道`);
    era.println();
    await tachyon.say_and_wait(`以后，就叫你豚鼠君吧！`);
    era.printButton(`豚，豚鼠？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`呵呵，不是挺合适的吗？豚鼠君……豚鼠君……`);
    era.println();
    await era.printAndWait(`你张口想说些什么，但又闭上了嘴，`);
    await era.printAndWait(`算了，称呼这种事爱怎么称呼就怎么称呼吧`);
    await era.printAndWait(`看在那双使人发狂的双眸的份上`);
    era.println();
    await era.printAndWait(`于是，你和${tachyon.name}的三年开始了`);
  } else if (edu_weeks === 47 + 25) {
    await print_event_name(`A & B`, tachyon);
    await tachyon.say_and_wait(`那么……我要开始说了`);
    era.println();
    await era.printAndWait(`实验室内你正襟危坐，等待着速子的讲述`);
    era.println();
    await tachyon.say_and_wait(`我的腿……很可能，再也跑不动了`);
    era.println();
    await era.printAndWait(`如天崩一般的内容，却被轻描淡写的说出`);
    await era.printAndWait(
      `${tachyon.sex}为了给你接受的时间，稍停一会后，才接着说道`,
    );
    era.println();
    await tachyon.say_and_wait(
      `我自己早就已经有心理准备了……我的腿，本来就比一般${tachyon.get_uma_sex_title()}要脆弱，所以，没什么不能接受的`,
    );
    await tachyon.say_and_wait(`但是，这不代表我会放弃我的梦想`);
    era.println();
    await era.printAndWait(
      `${
        tachyon.name
      }的梦想……超越${tachyon.get_uma_sex_title()}的极限，看见${tachyon.get_uma_sex_title()}的可能性`,
    );
    era.println();
    await tachyon.say_and_wait(
      `就算不是我也没关系，就算只能看着也没关系……就算，只能做为垫脚石存在，也没关系`,
    );
    await tachyon.say_and_wait(
      `无论是谁……只要能够证明这并不是${tachyon.get_uma_sex_title()}的极限，只要能够证明，这只不过是${
        tachyon.name
      }的极限……我就心满意足了`,
    );
    await tachyon.say_and_wait(
      `我真的是发自内心这么想的，这次的月桂杯也是……为了让谁，不是我的某个人能够成功……`,
    );
    await tachyon.say_and_wait(
      `收集最多的数据，构筑出最完美的计画……哪怕拼尽全力也要……`,
    );
    await tachyon.say_and_wait(`但是……让这样的我动摇了决心的……是你`);
    era.println();
    await era.printAndWait(`速子用一种复杂的眼神看着你`);
    await era.printAndWait(`悲伤？`);
    await era.printAndWait(`痛苦？`);
    await era.printAndWait(`希望？`);
    await era.printAndWait(`绝望？`);
    await era.printAndWait(`仿佛参杂了许多种感情的视线望着你`);
    era.println();
    await tachyon.say_and_wait(`在我想放弃的时候，总用那种眼神看着我的你……`);
    await tachyon.say_and_wait(
      `真的，说坦白话，对想要放弃的人而言，那副眼神到底有多令人厌恶你知道吗？`,
    );
    await tachyon.say_and_wait(`那种纯粹的，只有信赖的眼神……`);
    era.println();
    await era.printAndWait(
      `明明说着讨厌，但速子那五味杂陈的眼神中却唯独看不出厌恶的感情`,
    );
    era.println();
    await tachyon.say_and_wait(
      `因此，豚鼠君，这样的你应当负起将一切搅乱的责任……选择道路的责任`,
    );
    await tachyon.say_and_wait(`……还记得我曾经问过吗？你对茶座君是怎么看的`);
    era.println();
    await era.printAndWait(
      `你点了点头，速子对茶座的关注可以说是大于其他${tachyon.get_uma_sex_title()}许多的……大和赤骥除外`,
    );
    await era.printAndWait(`总之那种关心，绝对不只是对实验品的关注`);
    await era.printAndWait(`关于原因，自己也曾经思考过许多，但都百思不得其解`);
    era.println();
    await tachyon.say_and_wait(
      `倘若我无法继续跑下去的Plan B……我打算将一切托付在茶座君的身上，让茶座君代替我，去看见可能性的世界`,
    );
    await tachyon.say_and_wait(
      `在那之后，我会拒绝参加一切比赛……直到茶座成长起来，直到${tachyon.sex}能够突破极限，我会用尽剩下能够用尽全力的机会，成为${tachyon.sex}的垫脚石`,
    );
    await tachyon.say_and_wait(
      `牺牲一切来成就最有可能获得成功的选项，这就是研究者，即便必须被牺牲的是自己也一样`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.sex}轻描淡写的说出将自身感情排除于思考之外的选项`,
    );
    await era.printAndWait(
      `仿佛已经经过无数次的排练……或许，${tachyon.sex}早就已经做好觉悟，总有一天要将这些话对自己说出了吧`,
    );
    await era.printAndWait(`接着，${tachyon.sex}的声音稍稍颤抖了一下`);
    era.println();
    await tachyon.say_and_wait(`然后……是第二个选项，我一开始已经放弃的Plan A`);
    await tachyon.say_and_wait(
      `继续下去，我会朝着豚鼠君你说的目标三冠前进，朝着我的目标跨越极限前进…`,
    );
    await tachyon.say_and_wait(
      `…如童话一般美好，也一样虚幻的选择，而你必须陪伴我，直到梦想实现，或是……一切凋零`,
    );
    era.println();
    await tachyon.say_and_wait(
      `做出选择吧……我不否认，这是责任的转嫁，将一切的责任都推到你身上，但是……`,
    );
    await tachyon.say_and_wait(
      `是你把希望带给我的，所以这也是你应该要负起的责任吧`,
    );
    await tachyon.say_and_wait(`来吧，豚鼠君，轮到你了，做出选择吧`);
    era.println();
    await era.printAndWait(`你决定……`);
    era.print(`【警告，该选择会影响到后续的赛程及训练锁定情况】`, {
      color: buff_colors[32],
    });
    era.printButton(`选择Plan A`, 1);
    // todo 负责${tachyon.get_uma_sex_title()}里有茶座才可选择
    if (love === 100) {
      era.printButton(`选择Plan B`, 2);
    } else {
      era.printButton(`选择Plan B`, 2, { disabled: true });
    }
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `如果说，真的如速子所说，为${tachyon.sex}带来希望的人是自己的话`,
      );
      await era.printAndWait(
        `那么，陪伴${tachyon.sex}走在这条梦想的道路上，这也是自己的责任及义务吧`,
      );
      await era.printAndWait(
        `如果按${tachyon.sex}所说，这个故事是由自己所开启的，那么无论以什么形式结束，自己都理应站在台上直到一切的谢幕`,
      );
      era.println();
      await era.printAndWait(`所以……`);
      era.printButton(`……不行`, 1);
      era.printButton(`不是这样的`, 2);
      await era.input();
      await tachyon.say_and_wait(`……豚鼠君？`);
      era.println();
      await era.printAndWait(`不是陪伴${tachyon.sex}吧`);
      await era.printAndWait(`不是待在舞台上而已吧`);
      era.println();
      await era.printAndWait(`我是，${tachyon.name}的训练员`);
      await era.printAndWait(`是与${tachyon.sex}两人三脚一同前行的训练员`);
      await era.printAndWait(`是与${tachyon.sex}并肩，而非跟在身后的人`);
      era.println();
      era.printButton(`……我选Plan A`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `……是吗？那么，就为了我鞠躬尽瘁，好好看着我吧……无论燃烧，还是凋零`,
      );
      era.println();
      await era.printAndWait(`不对，不是的`);
      await era.printAndWait(`你摇了摇头，阻止了速子的话`);
      era.println();
      await me.say_and_wait(`不是看着`);
      era.println();
      await tachyon.say_and_wait(`……？`);
      era.printButton(`我会与妳『一起』，实现『我们』的梦想`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`…………`);
      era.println();
      await era.printAndWait(`速子陷入了沉默`);
      await era.printAndWait(
        `${tachyon.sex}的表情仿佛愤怒，又仿佛带有一丝喜悦`,
      );
      await era.printAndWait(`随后……`);
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait(`……身为豚鼠，却想获得与人类相等的地位吗？`);
        era.println();
        await era.printAndWait(`一如既往的傲慢话语，将你打落谷底`);
        await era.printAndWait(`想要并肩而行的前提是对方愿意与自己同行`);
        await era.printAndWait(
          `若是两人三脚的过程中，只有一方想要维持住中间的联系，那无论如何都是绝不可能向前行动的`,
        );
        await era.printAndWait(`这样的口气，想必…`);
        era.println();
        await tachyon.say_and_wait(
          `那么，努力追上我的步伐吧，展露出我都无法无视的光彩……证明你的可能性吧！`,
        );
        era.println();
      } else if (relation >= 76 && love < 75) {
        await tachyon.say_and_wait(`……呵呵，哈哈哈哈！`);
        era.println();
        await era.printAndWait(`突然，速子露出了满意的笑容`);
        era.println();
        await tachyon.say_and_wait(
          `是吗，是吗，并肩同行的伙伴，共同作战的战友……呵呵，这不是很有意思吗！`,
        );
        era.println();
        await era.printAndWait(`${tachyon.sex}张开双臂，歪头看向身后的你`);
        era.println();
        await tachyon.say_and_wait(
          `那么就跟上来吧，豚鼠君！不在我之上，也不在我之下的同伴，若是你有把握能做到的话，那就来吧`,
        );
      } else if (relation >= 76 && love > 75) {
        await tachyon.say_and_wait(`也就是说……豚鼠君，你是认真的吗？`);
        era.println();
        await era.printAndWait(`认真……？`);
        await era.printAndWait(
          `自己确实是认真想要与速子同行的，是这个意思吗？`,
        );
        await era.printAndWait(`你点了点头表示自己的决心`);
        era.println();
        await tachyon.say_and_wait(`……然后同行，也就是，同居……唔……`);
        era.println();
        await era.printAndWait(`速子用力摇了摇头`);
        await era.printAndWait(`虽然不知道发生了什么，但似乎有什么不对劲……？`);
        era.println();
        await tachyon.say_and_wait(
          `……咳咳，我明白了，那么，一起朝着我们的目标努力吧`,
        );
        era.println();
        await era.printAndWait(`速子似乎稍微冷静了一些说道`);
        await era.printAndWait(
          `虽然不知道发生了什么，但总之这应该是得到认可的证明了`,
        );
        await era.printAndWait(`今后也要继续努力才行！`);
      }
      await era.printAndWait(
        `${tachyon.name}放弃参加月桂杯的事情，传遍了整个学园`,
      );
      await era.printAndWait(`身为训练员，你也不免被人抨击`);
      await era.printAndWait(
        `不过……这也是与${tachyon.sex}同行必须付出的代价吧`,
      );
      // todo 声望-20 状态：${tachyon.get_uma_sex_title()}的极限消除
    } else {
      await print_event_name(`Betray`, tachyon);
      await era.printAndWait(`将梦想托付他人……虽然说是残酷的道路，但是`);
      await era.printAndWait(`以理智来看，这才是最有可能达成的希望吧`);
      await era.printAndWait(
        `姑且不论${tachyon.sex}所说的命运，${tachyon.sex}的双腿……无论身为训练员，还是对${tachyon.name}抱有憧憬的一名粉丝`,
      );
      await era.printAndWait(
        `你都无法做到无视这过程中${tachyon.sex}可能受到的伤痛`,
      );
      await era.printAndWait(`可能性太低`);
      await era.printAndWait(`眼前的道路也满是荆棘`);
      await era.printAndWait(`你做不到，被当成懦夫也无所谓`);
      await era.printAndWait(`只要速子能够健康就好`);
      await era.printAndWait(`除此之外……`);
      era.println();
      await era.printAndWait(`曼城茶座`);
      await era.printAndWait(
        `你想起了你的另一名负责${tachyon.get_uma_sex_title()}`,
      );
      await era.printAndWait(`想起了${tachyon.sex}同样使你着迷的跑法及身姿`);
      await era.printAndWait(`取代，是个傲慢且自私的话语`);
      await era.printAndWait(
        `没有任何人能够取代其他人，也没有任何人是为了取代而生的`,
      );
      // todo 速子好感度≥茶座
      if (love === 100) {
        await era.printAndWait(
          `但是，如果有谁能够“继承”${tachyon.name}的梦想，那……`,
        );
        era.println();
        await era.printAndWait(`必然是曼城茶座莫属`);
        era.println();
        await era.printAndWait(`看见一言不发的你，速子也猜到了你心中的决断`);
        await era.printAndWait(`只是等待着你主动开口而已`);
      } else {
        await era.printAndWait(`尤其是曼城茶座`);
        era.printButton(`……茶座${tachyon.sex}不是任何人的替代品`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`呵呵，这么维护${tachyon.sex}啊……`);
        await tachyon.say_and_wait(`放心，我没有说${tachyon.sex}是谁的替代……`);
        await tachyon.say_and_wait(
          `没错，就只是一名路过的好心${tachyon.get_uma_sex_title()}，对茶座与其训练员提出的帮助，仅此而已`,
        );
        era.println();
        await era.printAndWait(
          `『茶座与茶座的训练员』，说出这句话时，速子脸上的表情展露出了绝对不会被人看漏的失落`,
        );
        await era.printAndWait(
          `……是啊，做出这个选择后，自己就真的彻底，是曼城茶座的训练员了……但是，这个选择，一定也是对速子而言最好的选择吧`,
        );
        era.printButton(`……我选PlanB`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`……这样啊`);
        era.println();
        await era.printAndWait(
          `速子听见你的选择后，没有多说什么，只是点了点头`,
        );
        await era.printAndWait(
          `室内陷入了将人逼至窒息的沉默，正当你受不了这沉默，想说些什么的时候`,
        );
        era.println();
        await tachyon.say_and_wait(`……哈哈哈哈！`);
        era.println();
        await era.printAndWait(`速子忽然发出笑声，把你吓了一跳`);
        era.println();
        await tachyon.say_and_wait(`很好很好！这不是能够做出正确的选择来吗！`);
        era.println();
        await era.printAndWait(`正确的选择……吗？`);
        era.println();
        await tachyon.say_and_wait(
          `说实话，我还真有点怕你会选PlanA呢，果然对我这种人来说，比起训练比赛什么的，还是在幕后做研究更适合我啊，哈哈哈！`,
        );
        era.println();
        await era.printAndWait(
          `……既然${tachyon.sex}都这么说了，那这应该就是正确的，不是吗？`,
        );
        await era.printAndWait(
          `这才是最适合${tachyon.sex}的，最理智的选择，不是吗？`,
        );
        await era.printAndWait(`一定是的吧`);
        await era.printAndWait(`绝对是的吧`);
        await era.printAndWait(
          `不然的话……不就说明，自己放弃了，背叛了自己的负责${tachyon.get_uma_sex_title()}，自己的光(tachyon)了吗`,
        );
        era.println();
        await tachyon.say_and_wait(`对了，豚鼠君，明天记得要来试药哦`);
        await era.printAndWait(`…………欸？这样还要试药吗？`);
        await era.printAndWait(`或许是因为你那呆愣的表情，速子笑出了声`);
        era.println();
        await tachyon.say_and_wait(
          `呵呵……当然了，不过明天开始试的药都是要用在茶座身上的……`,
        );
        await tachyon.say_and_wait(
          `所以做好觉悟吧，明天开始，要试的药会更多哦？`,
        );
        await tachyon.say_and_wait(
          `为了让茶座补足达到极限的基础，要做的事比以前可是多多了啊`,
        );
        era.println();
        await era.printAndWait(
          `速子哈哈一笑走出休息室，看来自己的选择似乎并没有对${tachyon.sex}造成影响……吗？`,
        );
        await era.printAndWait(
          `心中虽然还是有些担心，但你很快便将这些担心甩出了心，不只是为了茶座，也是为了速子，自己必须更加努力了`,
        );
        era.println();
        await era.printAndWait(`速子参加了月桂杯`);
        await era.printAndWait(
          `无论是本格化已经完成的古典级对手，同期的强者，甚至梦之杯的前辈，都被${tachyon.sex}平等的超越`,
        );
        await era.printAndWait(`依然是那种令人眩目的跑法`);
        await era.printAndWait(`依然是，如光一般的跑法`);
        await era.printAndWait(`如光一般，瞬间消逝的跑法`);
        era.println();
        await era.printAndWait(
          `第二天，${tachyon.name}宣布，半永久暂停闪耀系列赛的参与`,
        );
        await era.printAndWait(`此一发表，掀起了媒体的轩然大波`);
        await era.printAndWait(
          `但这一切，都不会影响到你与${tachyon.sex}的同行`,
        );
        event_marks.PlanB++;
        // todo 声望-20 状态：${tachyon.get_uma_sex_title()}的极限消除 选择PlanB后，${tachyon.name}训练及比赛选项不可选择
      }
    }
  } // todo 三冠取得
  else if (edu_weeks === 47 + 41) {
    await print_event_name(`三冠之梦`, tachyon);
    await tachyon.say_and_wait(`……这里是`);
    era.println();
    await era.printAndWait(`${tachyon.name}忽然一阵恍惚`);
    await era.printAndWait(`眼前出现的，是绿草如茵，空无一人的赛场`);
    era.println();
    await tachyon.say_and_wait(`……是梦吗？`);
    era.println();
    await era.printAndWait(
      `还记得，现在应该是菊花赏结束，刚刚和豚鼠君分别后，自己累到直接倒上了床`,
    );
    await era.printAndWait(`菊花赏，确实是目前的自己挑战过最艰难的一次战斗`);
    await era.printAndWait(`但是，还是赢下来了`);
    await era.printAndWait(
      `然而眼前的，却不是给自己留下如此深刻印象的赛场，而是……`,
    );
    era.println();
    await era.printAndWait(`中山赛场？`);
    await era.printAndWait(`如果是中山的话，那么……`);
    era.println();
    await era.printAndWait(
      `不出所料，回头看向身后的屏幕，屏幕中播放着皋月赏的图样`,
    );
    await era.printAndWait(
      `然而，揭示版上的成绩却昭示着比赛已经结束的事实，第一名，是${tachyon.name}，理所当然`,
    );
    era.println();
    await tachyon.say_and_wait(`……回到皋月赏的时候了吗？`);
    era.println();
    await era.printAndWait(`空无一人的赛场，明明没有选手却已经完赛的皋月赏`);
    await era.printAndWait(`哪怕是不讲逻辑的梦境，这一切也还是太违背常理了`);
    era.println();
    await era.printAndWait(`于是……`);
    await era.printAndWait(`${tachyon.name}瞪着眼前，不知何时出现的光球`);
    era.println();
    await tachyon.say_and_wait(`你……是谁？是你把我拉进这个梦里的？`);
    era.println();
    await era.printAndWait(
      `所谓的拉入梦里，或许不是那么符合科学的说法，但要是……根据茶座的说法来想的话……`,
    );
    await say_by_passer_by(`？？？`, `…………`);
    era.println();
    await era.printAndWait(`光球没有说话，只是在原地漂浮着`);
    era.println();
    await tachyon.say_and_wait(`……不想说吗？`);
    await tachyon.say_and_wait(`那么，我就说出自己的猜测了……`);
    await tachyon.say_and_wait(`你……就是『${tachyon.name}』吧`);
    era.println();
    await era.printAndWait(`要猜出这点，其实没什么困难的`);
    await era.printAndWait(`只要能够结合茶座说的『另一个自己』就好`);
    await era.printAndWait(
      `传说……${tachyon.get_uma_sex_title()}是身上宿有异世界的灵魂的存在`,
    );
    await era.printAndWait(
      `……虽然说，比起这种说法${tachyon.name}更宁愿相信是生物自然进化的结果就是了`,
    );
    await era.printAndWait(`但假如，这个说法是真的的话……`);
    era.println();
    await era.printAndWait(`『另一个自己』，说的，想必就是这个吧`);
    await era.printAndWait(`来自异世界的灵魂，或者被称为『Uma Soul』的存在`);
    era.println();
    await say_by_passer_by(`？？？`, `………⬛⬛………⬛⬛⬛………`);
    await tachyon.say_and_wait(`什么？`);
    era.println();
    await era.printAndWait(
      `忽然，光球身上仿佛荡起了涟漪，仿佛拼尽了全力，才发出了这么几个音一般`,
    );
    await era.printAndWait(
      `不自觉的，${tachyon.name}越靠越近，想听清它在说什么……`,
    );
    era.println();
    await tachyon.say_and_wait(`………！`);
    era.println();
    await era.printAndWait(`碰到了`);
    await era.printAndWait(`${tachyon.name}的脑中，瞬间出现了不存在的记忆`);
    era.println();
    await era.printAndWait(`是那个世界，名为${tachyon.name}的生物的记忆`);
    await era.printAndWait(
      `如自己最开始所预料的一般，『${tachyon.name}』的双腿，在皋月赏后便不堪负荷，被迫引退`,
    );
    await era.printAndWait(
      `在那个世界，${tachyon.name}被认为是可能性的代表，被称为『如果⬛』、“幻之三冠⬛』`,
    );
    await era.printAndWait(`没有人怀疑，如果让他获得机会，他绝对能够赢下三冠`);
    await era.printAndWait(`如果他没有腿伤，绝对会是历史留名的名⬛`);
    await era.printAndWait(`如果没有退役，其他同世代的⬛与其相比都会黯淡许多`);
    era.println();
    await era.printAndWait(`${tachyon.name}，是最接近三冠的存在`);
    await era.printAndWait(`但是如果……终究只是如果`);
    await era.printAndWait(`无法兑现的如果，那就是一纸废文`);
    await era.printAndWait(`随着同期们在不同领域的闪耀`);
    await era.printAndWait(`这样的确信也变成了疑问`);
    await era.printAndWait(`在东京2400米，真的有办法胜过那个森林宝穴吗？`);
    await era.printAndWait(`在京都3000米，真的有办法胜过那个曼城茶座吗`);
    era.println();
    await era.printAndWait(`${tachyon.name}，是三冠……？`);
    era.println();
    await era.printAndWait(`到此，${tachyon.name}恢复了神智`);
    await era.printAndWait(`忽然，${tachyon.sex}发现自己能够听懂光球的话了`);
    await say_by_passer_by(`？？？`, `……谢谢……谢谢妳……`);
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`将如果兑现`);
    await era.printAndWait(`将虚无的可能性变成实在的现实`);
    era.println();
    await era.printAndWait(`虽然异界的『${tachyon.name}』没能成功`);
    await era.printAndWait(`但${tachyon.name}做到了`);
    await era.printAndWait(`证明了自己的可能性`);
    era.println();
    await era.printAndWait(`${tachyon.name}，是三冠⬛`);
    await era.printAndWait(`${tachyon.name}，是三冠⬛？`);
    await era.printAndWait(
      `${tachyon.name}，是三冠${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await tachyon.say_and_wait(`……这样啊`);
    era.println();
    await era.printAndWait(`超越了过去的自己`);
    await era.printAndWait(`超越了另一个世界的自己`);
    era.println();
    await era.printAndWait(`${tachyon.name}，踏出了全新的一步`);
    era.println();
    await tachyon.say_and_wait(`那么，我该走了`);
    await say_by_passer_by(`？？？`, `…………？`);
    era.println();
    await era.printAndWait(
      `虽然没有说话，但不知为何，${tachyon.name}能够感受到光球的疑惑`,
    );
    await era.printAndWait(`去哪里？`);
    await era.printAndWait(`梦想已经完成了，不是吗？`);
    await era.printAndWait(`目标已经达到了，不是吗？`);
    await era.printAndWait(`接下来还要做什么？`);
    era.println();
    await tachyon.say_and_wait(
      `哼，『${tachyon.name}』的可能性，只能想到经典年的结束吗？`,
    );
    await tachyon.say_and_wait(`……不，这样讲总觉得好像在骂自己啊……咳咳，重来`);
    await tachyon.say_and_wait(
      `${tachyon.name}』的可能性，或许只能到经典年结束……`,
    );
    await tachyon.say_and_wait(
      `不，顶多，也就只到皋月赏为止吧。${tachyon.name}的可能性……`,
    );
    await tachyon.say_and_wait(`或许也是如此`);
    era.println();
    await era.printAndWait(`然而`);
    await era.printAndWait(
      `速子想到了，那个愿意为自己燃尽一切，眼中闪烁着狂气的人`,
    );
    era.println();
    if (relation < 0) {
      await tachyon.say_and_wait(
        `虽然……是个非常差劲，就人格而言把他毁灭了或许对世界的贡献还比较大的人`,
      );
    } else if (relation < 225 && relation > 0) {
      if (love < 75) {
        await tachyon.say_and_wait(`与我同行的，志同道合的伙伴`);
      } else {
        await tachyon.say_and_wait(`我最爱的，最爱我的，我的恋人`);
      }
    } else if (relation > 225) {
      if (love < 75) {
        await tachyon.say_and_wait(
          `理解我的一切，甚至交托性命也不会有丝毫犹豫的那个人`,
        );
      } else {
        await tachyon.say_and_wait(`我最爱的，最爱我的，我的恋人`);
      }
    }
    era.println();
    await era.printAndWait(`如果……没有那个人在的话`);
    await era.printAndWait(`${tachyon.name}在皋月赏后说不定就完全燃尽了`);
    era.println();
    await era.printAndWait(`如果……没有那个人在的话`);
    await era.printAndWait(
      `${tachyon.name}在德比后说不定就察觉到自己的极限而主动退让了`,
    );
    era.println();
    await era.printAndWait(`如果……没有那个人在的话`);
    await era.printAndWait(`${tachyon.name}绝对，连未来都不敢遐想`);
    era.println();
    await era.printAndWait(`但是……如果没有意义`);
    await era.printAndWait(`并且这个如果，永远不会兑现`);
    await era.printAndWait(`所以……`);
    era.println();
    await tachyon.say_and_wait(
      `看着吧，『${tachyon.name}』，『我们』已经跨越了过去，立足于现在，接下来，是开创未来的时刻了！`,
    );
    era.println();
    await era.printAndWait(`${tachyon.name}，走向了赛场的出口`);
    await era.printAndWait(`走出门前，${tachyon.sex}回头看了一眼`);
    era.println();
    await era.printAndWait(`赛场内的屏幕，皋月赏的图样已经消失`);
    await era.printAndWait(`屏幕内的画面一片空白`);
    await era.printAndWait(`上一场比赛已经结束`);
    await era.printAndWait(`下一场会在这个赛场上上映的，又是怎样的比赛？`);
    era.println();
    await era.printAndWait(`不知道，但是，已经说好了，一同前行`);
    await era.printAndWait(`所以`);
    era.println();
    await tachyon.say_and_wait(`继续实验吧……为了，看见可能性能够抵达的彼方`);
    // todo 根+20
  } else if (edu_weeks === 95 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name(`夏季集训结束·换位实验`, tachyon);
    if (event_marks.PlanB === 0) {
      await era.printAndWait(`于是，愉快的夏日集训时间也过去了`);
      await era.printAndWait(`你们准备跟着学园的巴士回到学校`);
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `速……速子前辈！请，请等一下！`,
      );
      era.println();
      await era.printAndWait(`嗯？`);
      await era.printAndWait(
        `你和速子同时疑惑的回头，看向了髮间有着巨大流星的小${tachyon.get_uma_sex_title()}`,
      );
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `今年秋天……我会出赛神户新闻杯……速子前辈……到时候可以来为我加油吗！`,
      );
      await say_by_passer_by(`${tachyon.get_uma_sex_title()}A`, `加油……吗？`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `是的！希望速子前辈能看看我的跑步的模样！`,
      );
      era.println();
      await era.printAndWait(
        `神户新闻杯……是九月下旬的比赛，如果只是观赛的话，也不至于影响到什么重要的事`,
      );
      await era.printAndWait(`所以一切的问题就是，速子愿意与否了`);
      era.println();
      await tachyon.say_and_wait(`嗯……可以啊，那个时候，目前还没有其他安排`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `真的吗！太好了！我会努力赢下来的！`,
      );
      era.println();
      await era.printAndWait(
        `小${tachyon.get_uma_sex_title()}兴奋的站起身来，完全看不出像是刚被强行灌完药的模样一溜烟的跑走了`,
      );
      era.println();
      await tachyon.say_and_wait(`……真是耀眼啊，这些孩子们的可能性`);
      era.printButton(`怎么一副好像老人家的口吻`, 1);
      era.printButton(`但是在我眼中，速子才是最闪耀的！`, 2);
      await era.input();
      if (love > 75) {
        await tachyon.say_and_wait(
          `是吗？那么……你要一直看着我才行啊，因为我的可能性，已经离不开你了♡`,
        );
        await era.printAndWait(
          `夏季集训结束，接下来是有马纪念！……不过在这之前，是神户新闻杯的观战！`,
        );
      } else if (love > 50 && love < 75) {
        await tachyon.say_and_wait(
          `那么……就好好看着吧，我的可能性能抵达的地方`,
        );
      } else if (relation < 0) {
        await tachyon.say_and_wait(`被你这种人期待……真是令人讨厌啊`);
      } else if (relation < 225 && relation > 0) {
        await tachyon.say_and_wait(`我说你……不说这种肉麻的话是会死吗？`);
      } else {
        await tachyon.say_and_wait(
          `呵呵，这是当然，那些孩子要超越我还早的很呢！`,
        );
      }
    } else if (event_marks.PlanB === 1) {
      await print_event_name(`法国(？)`, tachyon);
      await tachyon.say_and_wait(`这里……就是法国吗`);
      era.println();
      await era.printAndWait(`${tachyon.name}望着窗外，天连一色的夜景`);
      await era.printAndWait(`这里，就是法国啊……`);
      await era.printAndWait(`曼城茶座魂牵梦萦的地方`);
      await era.printAndWait(
        `无数日本${tachyon.get_uma_sex_title()}沉戟的地方`,
      );
      await era.printAndWait(`${tachyon.name}，在最后将要踏上顶点的地方`);
      era.println();
      await era.printAndWait(`然而……`);
      await era.printAndWait(`仰望星空之人，总会忘记脚前的洼地`);
      await era.printAndWait(`好高骛远，更是凝聚了前人智慧的话语`);
      era.printButton(`……不，这里是迪拜`, 1);
      await era.input();
      await tachyon.say_and_wait(`…………欸？`);
      await era.printAndWait(`很明显，脑袋里已经被凯旋门赏占据的速子`);
      await era.printAndWait(
        `并没有听见你在一周前就说过的中途要在迪拜转机一事`,
      );
      era.printButton(`不过迪拜的比赛也是世界知名的，要是有机会……`, 1);
      await era.input();
      await era.printAndWait(`说到这，你忽然安静了下来`);
      await era.printAndWait(`迪拜的比赛确实是世界知名`);
      await era.printAndWait(
        `知名的原因，主要是他的奖金，是世界含『金』量最高的比赛无误`,
      );
      await era.printAndWait(`但是……`);
      await era.printAndWait(`${tachyon.name}，已经没有『机会』了`);
      era.println();
      await tachyon.say_and_wait(
        `唔，有机会的话，可以看看迪拜的比赛吧，加入……之后茶座的训练计画试试？`,
      );
      era.println();
      await era.printAndWait(`然而，${tachyon.sex}却好像完全没有注意到一般`);
      await era.printAndWait(`轻描淡写的便主动提起了被躲开的话题`);
      era.println();
      era.printButton(
        `……等回去之后，速子还会继续帮茶座制定训练相关的计画吗？`,
        1,
      );
      await era.input();
      era.println();
      await tachyon.say_and_wait(`那还用说……`);
      await tachyon.say_and_wait(
        `这场凯旋门赏，只是我个人的一次任性而已，真正的可能性，真正的希望还是放在茶座身上的`,
      );
      await tachyon.say_and_wait(`对了，这么说起来，茶座怎么办？`);
      era.printButton(
        `不用担心，我和茶座会透过平板联络，而且每个月都会飞回日本去处理日本的事情`,
        1,
      );
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……每个月？`);
      era.println();
      await era.printAndWait(`速子有些吃惊的看着你`);
      await era.printAndWait(`你点了点头作为回应`);
      await era.printAndWait(`啊，难道说是担心钱的问题吗？`);
      era.printButton(`毕竟这算出差，机票钱什么的学院会出，这方面不用担心`, 1);
      await era.input();
      await tachyon.say_and_wait(`……抱歉`);
      era.printButton(`没什么`, 1);
      era.printButton(`是我自己希望这么做的`, 2);
      await era.input();
      era.println();
      await era.printAndWait(`这是实话，也是谎话`);
      await era.printAndWait(`……其实，无论海外还是海内，都是可以选择的`);
      await era.printAndWait(
        `可以选择专心跟着速子远征，也可以选择留在日本陪着茶座`,
      );
      await era.printAndWait(
        `特雷森学园再缺人也没有缺到需要让训练员这样分身乏术的地步`,
      );
      await era.printAndWait(`但是……`);
      era.printButton(`因为我放心不下`, 1);
      era.printButton(`无论是速子还是茶座都一样`, 2);
      await era.input();
      await era.printAndWait(
        `不忍心看那名追逐朋友背影的${tachyon.get_teen_sex_title}孤单`,
      );
      await era.printAndWait(
        `不忍心看独在异乡奔向绝路的${tachyon.get_teen_sex_title}寂寞`,
      );
      await era.printAndWait(`所以，只能做出这种委屈自己的，优柔寡断的选择`);
      era.println();
      await tachyon.say_and_wait(`……真是个烂好人啊`);
      era.printButton(`但也不是没有好处`, 1);
      era.printButton(`这样就能同时看着妳和茶座的跑法了`, 2);
      await era.input();
      await tachyon.say_and_wait(
        `为了这种事坐十几个小时的飞机还是来回，疯了吧`,
      );
      era.println();
      await era.printAndWait(`谢谢夸奖`);
      await era.printAndWait(`你笑着回应了速子的感叹`);
      await era.printAndWait(`就当作是先前不小心破坏气氛的补偿了`);
      era.println();
      await tachyon.say_and_wait(`……那么，就看着我的跑法，直到最后吧`);
      era.println();
      await era.printAndWait(`在名为世界的舞台上`);
      await era.printAndWait(`${tachyon.sex}向你伸出手`);
      await era.printAndWait(`邀请你一同出演，${tachyon.name}的最后一出舞`);
      // todo 好感度+100
      // 爱慕值+10
    }
  } else if (edu_weeks === 144) {
    if (event_marks.PlanB === 0) {
      await print_event_name(`极限的彼方`, tachyon);
      era.println();
      await era.printAndWait(`与${tachyon.name}的三年结束了`);
      era.println();
      await era.printAndWait(
        `在毕业典礼后，你也曾问过${tachyon.sex}未来的打算`,
      );
      await tachyon.say_and_wait(`身为学生，最重要的本份不就是学习吗？`);
      await era.printAndWait(
        `${tachyon.sex}只笑着说了这么一句与${tachyon.sex}的风格完全不符的话语`,
      );
      era.println();
      await era.printAndWait(`然而，这次似乎是真的`);
      await era.printAndWait(
        `你在当年的大学统一考试考生名单里看见了${tachyon.sex}的名字`,
      );
      await era.printAndWait(
        `虽然令人难以置信，但${tachyon.sex}似乎选择了继续升学`,
      );
      era.println();
      await era.printAndWait(`今天，是各大学的开学典礼`);
      await era.printAndWait(`你回想起几个月前，发榜的那天`);
      await era.printAndWait(
        `听说${tachyon.sex}上榜的你，内心的心情不知该如何表达`,
      );
      await era.printAndWait(
        `充满了可能性的${tachyon.sex}，最终也还是要走上平凡人的道路`,
      );
      await era.printAndWait(
        `如普通人一般升学，如普通人一般毕业，如普通人一般的就业`,
      );
      await era.printAndWait(
        `然后，迟早有一天，${tachyon.sex}……也会变成像自己一样无聊的大人吗？`,
      );
      await era.printAndWait(
        `在那场只有两人的庆祝会上，你对${tachyon.sex}说了什么，${tachyon.sex}对你说了什么都已经忘得一干二净了`,
      );
      era.println();
      await era.printAndWait(
        `与${
          tachyon.sex
        }告别了的自己，也要回到原来的生活，迎来下一名负责${tachyon.get_uma_sex_title()}，支持${
          tachyon.sex
        }的梦想`,
      );
      await era.printAndWait(
        `但像${
          tachyon.sex
        }那样，能够将你的目光灼烧的，如光一般的${tachyon.get_uma_sex_title()}……恐怕也再见不到了吧`,
      );
      await era.printAndWait(
        `不知不觉，你竟下意识的走到了曾是旧理科准备室，后来变成实验室，如今想当然又要变回理科准备室的空教室`,
      );
      era.println();
      await me.say_and_wait(`来都来了，顺便整理一下吧`);
      await era.printAndWait(
        `你将门打开，看见的是一如既往做着实验的${tachyon.name}和在自己的角落喝着咖啡的曼城茶座……这种妄想，当然是不存在的`,
      );
      await era.printAndWait(
        `在毕业典礼结束后就没有人进入过的这间教室，还维持着你们最后一次使用时的样貌`,
      );
      await era.printAndWait(
        `放置在实验桌上的空试管、里面液体已经干枯的烧瓶，以及桌上的红茶污渍，岁月的痕迹勾起了你三年里的种种回忆`,
      );
      era.println();
      await tachyon.say_and_wait(`……啊，豚鼠君`);
      era.println();
      await era.printAndWait(`身后传来了熟悉的呼喊声，你转过头来`);
      await era.printAndWait(`是你朝朝暮暮心心念念的${tachyon.sex}`);
      era.println();
      await tachyon.say_and_wait(`既然来了，就快来帮我搬东西吧`);
      era.println();
      await era.printAndWait(
        `速子……不，${tachyon.name}在看见你的刹那，露出了一如往常的笑容，笑容明媚到你产生了一种错觉，仿佛你们之间什么也没改变`,
      );
      await era.printAndWait(
        `也是啊，既然已经毕业，那么这里的实验器具等，当然也必须搬走了`,
      );
      await era.printAndWait(`你不发一语，默默的跟在${tachyon.name}的身后`);
      await era.printAndWait(
        `你原本以为，${tachyon.sex}大概是想把东西搬到自己家，或者现在的学校，又或者……回收处理？`,
      );
      await era.printAndWait(
        `却没想到，${tachyon.sex}将所有的器具都搬到了隔壁的理科准备室`,
      );
      era.println();
      await tachyon.say_and_wait(`好了，这样就完成了……`);
      era.println();
      await era.printAndWait(
        `最后的${tachyon.sex}，站在恐怕再也不会回来的教室门前，露出了寂寞的笑容`,
      );
      await era.printAndWait(`随后，回头看向了你`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君，让我们开始今天的实验吧！`);
      era.println();
      await era.printAndWait(`${tachyon.sex}的眼中，依然闪耀着疯狂的光芒`);
      await era.printAndWait(
        `如三年间的每一天，${tachyon.sex}每次见面时的招呼语一般`,
      );
      await era.printAndWait(
        `不知不觉间，你也露出了笑容来，越笑越开心，越笑越大声，甚至笑出了眼泪来`,
      );
      await era.printAndWait(`或许这三年间，真的有些东西是永远不会改变的吧`);
      await era.printAndWait(
        `比如你和${tachyon.name}的关系，比如${tachyon.sex}的求知欲，比如你对${tachyon.sex}及${tachyon.sex}对你的感情`,
      );
      await era.printAndWait(`风沙沙吹过走廊，仿佛在附和着你的话语`);
      await era.printAndWait(`窗外落叶飘落，秋日已至`);
      era.drawLine({ content: '三天后' });
      era.printButton(`……等一下！？那天原来不是来道别的吗！？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `…………豚鼠君？我说这都过去三天了你才反应过来，是不是有点慢了`,
      );
      era.println();
      await era.printAndWait(`${tachyon.name}的实验室……隔壁的新实验室`);
      await era.printAndWait(
        `你在『就陪着${tachyon.sex}最后闹一次吧』的想法下配合了${tachyon.sex}的『最后一场』实验`,
      );
      await era.printAndWait(`却没想到这最后一场一做就是三天`);
      era.println();
      era.printButton(`不是说要上大学吗！？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`是啊，我上的是特雷森大学部啊`);
      era.println();
      await era.printAndWait(`特雷森哪来的大学部！？我怎么没听说过！？`);
      era.println();
      await tachyon.say_and_wait(
        `虽然剧情里没有提过，但官方设定里特雷森学园确实是有大学部的哦`,
      );
      era.printButton(`官方设定是什么鬼啊！？`, 1);
      era.printButton(`退一万步，就算真的有好了，妳都不用去上课的吗！？`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `……豚鼠君，我都开始怀疑你有没有上过大学了，大学哪有人乖乖去上课的啊`,
      );
      era.println();
      await era.printAndWait(
        `虽然很想反驳，但想到面前是连高中课业都爱去不去几乎全部翘掉的人，忽然就没什么反驳的余力了`,
      );
      era.printButton(`那为什么要忽然换教室啊！？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `不……这个让我说也有点那个，但那间教室因为我们这几年的使用……`,
      );
      await tachyon.say_and_wait(`稍微出现了一些安全上的问题……`);
      await tachyon.say_and_wait(
        `因此需要检查跟维修管理……大概一周的时间就能换回去了`,
      );
      era.printButton(`只是一周的时间就别搞的好像多感伤的样子啊！？`, 1);
      await era.input();
      await tachyon.say_and_wait(
        `啊，豚鼠君你好过分，那间教室好歹也是承载了我们三年的虐……使用，感谢一下也不过分吧？`,
      );
      era.println();
      await era.printAndWait(`无话可说`);
      await era.printAndWait(`现在看来仿佛一切确实都如${tachyon.sex}说的那样`);
      await era.printAndWait(`搞了半天，原来只有自己在自顾自的感伤吗？`);
      era.println();
      await tachyon.say_and_wait(
        `明明发榜那天就跟你说过入学的学校跟之后实验要继续拜托你的事了……`,
      );
      await tachyon.say_and_wait(
        `结果却全都被忘光了……果然，那天在饮料里下的药有点太重了吗？`,
      );
      era.println();
      await era.printAndWait(
        `原来不记得那天的事情不是艺术美化而是真的喝到断片了吗！？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `好了好了，不说这些闲话了，豚鼠君，快点走吧，今天的药如果没有意外的话…`,
      );
      await tachyon.say_and_wait(
        `…或许能够颠覆整个${tachyon.get_uma_sex_title()}世界也说不定啊`,
      );
      era.println();
      await era.printAndWait(`颠覆……世界……？`);
      era.drawLine();
      await era.printAndWait(
        `在左思右想，想出了第一百二十四种${tachyon.name}的发明造成世界毁灭的可能性后，你跟着${tachyon.sex}来到了操场`,
      );
      await era.printAndWait(
        `${tachyon.sex}拿出了一瓶一如往常却又从未见过的药水`,
      );
      await era.printAndWait(`一如往常，是一如往常的发光药水`);
      await era.printAndWait(
        `从未见过，却是药水的光芒，并非平常常见的任何颜色`,
      );
      await era.printAndWait(
        `硬要说的话……是蓝白相间的光芒，却又并非是纯粹的蓝白光混合`,
      );
      await era.printAndWait(`或许，这瓶药真的有办法颠覆整个世界`);
      await era.printAndWait(`不知为何，你忽然产生了这种想法`);
      await era.printAndWait(`但是，这种颠覆到底是好是坏，你还无法辨明`);
      era.println();
      await tachyon.say_and_wait(`那么，我要喝了`);
      era.println();
      await era.printAndWait(
        `没来得及说出什么，${tachyon.name}便飞快的打开了药水瓶，灌了下去`,
      );
      era.println();
      await tachyon.say_and_wait(`然后……`);
      era.println();
      await era.printAndWait(
        `${tachyon.sex}忽然开始跑了起来，一切发生的太过突然，导致你完全无法做出任何举动`,
      );
      era.println();
      await era.printAndWait(
        `${tachyon.sex}跑完了正常的训练量后，脸不红气不喘的回到了你的身旁`,
      );
      await era.printAndWait(
        `这种程度的锻炼，对现在的${tachyon.sex}而言早就不算什么了，`,
      );
      await era.printAndWait(
        `或者说，以你们当初的测量，现在的${
          tachyon.sex
        }应该早就已经抵达${tachyon.get_uma_sex_title()}的极限了才对……`,
      );
      era.println();
      await era.printAndWait(`想到这，你忽然有了个想法`);
      await era.printAndWait(
        `虽然疯狂，但如果是这样的话……那么${tachyon.sex}的举动，这一切都有办法解释了`,
      );
      era.println();
      await era.printAndWait(
        `你用颤抖的手翻找着口袋，寻找曾经，${tachyon.sex}给你的那副眼镜`,
      );
      era.println();
      await tachyon.say_and_wait(
        `怎么样，豚鼠君？你现在看到的我，『是多少』？`,
      );
      era.println();
      await era.printAndWait(
        `你眼中的${tachyon.sex}，头上的数字和符号，并非是代表极限的『SS+ 1200』，而是……`,
      );
      await era.printAndWait(`『UG 1205』`);
      era.println();
      await era.printAndWait(
        `看到${me.actual_name}的表情，${tachyon.name}笑了`,
      );
      await era.printAndWait(
        `${tachyon.sex}不需要器具的观测也能知道自己的变化，毕竟有谁能够比${tachyon.sex}更了解自己的身体呢？`,
      );
      await era.printAndWait(
        `${tachyon.sex}想要的，其实就是眼前${me.actual_name}的这副表情`,
      );
      era.println();
      await era.printAndWait(`与他一同走过的三年`);
      await era.printAndWait(`为了梦想拼尽全力的那些时光`);
      await era.printAndWait(`两人的努力，流尽了汗水泪水才突破的`);
      era.println();
      await era.printAndWait(`名为极限的障壁`);
      era.println();
      await era.printAndWait(`惊讶吧？喜悦吧？震惊吧？`);
      await era.printAndWait(`渐渐的，${tachyon.name}控制不住自己脸上的表情了`);
      await era.printAndWait(`啊啊，明明这句话是想更云淡风轻一些说出的`);
      await era.printAndWait(`但是嘴角，忍耐不住的上扬`);
      await era.printAndWait(`但是眼角，无法控制的流泪`);
      await era.printAndWait(`这就是喜极而泣吗？`);
      await era.printAndWait(`不行，忍耐不住了`);
      era.println();
      await tachyon.say_and_wait(
        `来吧，豚鼠君，让我们一同探索，极限之后的世界吧！`,
      );
      era.println();
      await era.printAndWait(`不行，现在的自己脸上的表情一定很蠢吧`);
      await era.printAndWait(`真是的，露出这种表情去谈判，怎么能让人信赖呢`);
      await era.printAndWait(`要是有谁会信任露出这种愚蠢表情的人的话……`);
      era.println();
      await me.say_and_wait(`呵呵，那必然是，疯子或者狂人吧`);
      await era.printAndWait(
        `比如，眼前露出了同样愚蠢的表情，眼睛中依然闪烁着令人疯狂的光芒的${me.actual_name}一样`,
      );
      era.println();
      await era.printAndWait(
        `疯狂的科学家，与狂信的豚鼠，迎来了最适合两人的结局`,
      );
    } else if (event_marks.PlanB === 1 && event_marks.hot_spring_event === 1) {
      await print_event_name(`PlanB的未来`, tachyon);
      await era.printAndWait(`与${tachyon.name}的三年结束了`);
      era.println();
      await era.printAndWait(
        `在毕业典礼后，你也曾问过${tachyon.sex}未来的打算`,
      );
      await era.printAndWait(
        `『会再见的，豚鼠君』${tachyon.sex}只说了这么一句`,
      );
      era.println();
      await era.printAndWait(`然后，${tachyon.name}离开了`);
      await era.printAndWait(`离开特雷森学园，离开这个国家`);
      await era.printAndWait(`仿佛，消失在人间一般`);
      await era.printAndWait(`现在的${tachyon.sex}究竟在哪里呢？`);
      await era.printAndWait(`你也曾经有过这样的疑问`);
      await era.printAndWait(`有没有好好吃饭`);
      await era.printAndWait(`有没有好好睡觉`);
      await era.printAndWait(
        `独自一人的${tachyon.sex}，真的有办法照顾好自己吗`,
      );
      era.println();
      await era.printAndWait(`明明对方已经成年，还是忍不住如此担心`);
      await era.printAndWait(`但是……其实自己心里也知道`);
      await era.printAndWait(`这种担心是多余的`);
      await era.printAndWait(`${tachyon.name}，是天才`);
      await era.printAndWait(`是当之无愧，生而知之的天才`);
      await era.printAndWait(
        `这样的${tachyon.sex}，无论在何处都必然能够绽放出光芒吧`,
      );
      await era.printAndWait(
        `你怀着对不知道身在何处的速子的期许，打开了家中的大门`,
      );
      era.println();
      await tachyon.say_and_wait(`哦呀，豚鼠君，今天回来的挺早啊`);
      era.println();
      await era.printAndWait(
        `无视了躺在沙发上翘着脚的某名废柴${tachyon.get_uma_sex_title()}`,
      );
      era.println();
      await tachyon.say_and_wait(
        `对了，晚餐晚餐……豚鼠君，今天轮到你做了吧～～`,
      );
      era.println();
      await era.printAndWait(
        `自己心目中，天才的${tachyon.get_uma_sex_title()}，超光速的粒子，${
          tachyon.name
        }`,
      );
      await era.printAndWait(
        `一定还在世界的某个角落，进行着与${tachyon.get_uma_sex_title()}的未来息息相关的研究`,
      );
      era.println();
      await tachyon.say_and_wait(
        `对了对了，今天有新的邮件……训练员研讨会……长达三天！？删掉删掉，这种东西参加了有什么意义`,
      );
      era.println();
      await era.printAndWait(
        `绝对，不是那个，毕业之后还赖在学校的废弃教室里不走`,
      );
      await era.printAndWait(`住处则是毕业当天就带着行李自说自话搬进自己家中`);
      await era.printAndWait(`现在已经完全将自己的家当成地盘`);
      await era.printAndWait(
        `现在还在随意侵犯自己隐私的这名咸鱼${tachyon.get_uma_sex_title()}`,
      );
      era.println();
      await tachyon.say_and_wait(`豚鼠君？豚鼠君～～～～理我一下嘛～～～～`);
      await me.say_and_wait(`所以到底为什么速子要赖在我家里啊！`);
      era.println();
      await era.printAndWait(`终于，还是无法无视对方`);
      await era.printAndWait(
        `忍不住喊出了从第一天就憋在心里，却因为对方的理所当然而一时说不出口的疑惑`,
      );
      era.println();
      await tachyon.say_and_wait(`欸———有什么关系吗？`);
      await tachyon.say_and_wait(
        `再说，我又不是完全不做家事，扫地拖地什么的，不是还有帮忙分担做晚饭嘛～～`,
      );
      era.println();
      await era.printAndWait(`确实，要说现在的速子比起过去有什么进展的话`);
      await era.printAndWait(`大概就是生活技能的成长吧`);
      await era.printAndWait(`与以前什么事都要自己代劳的速子不同`);
      await era.printAndWait(`现在的速子，确实在进步着`);
      await era.printAndWait(`从吃完饭后洗碗盘，到生活中会帮忙扫地拖地`);
      await era.printAndWait(`虽然只是极微小的差距，但确实在进步着……`);
      await era.printAndWait(
        `但是，为什么有种淡淡的，像是老父亲看着开始做家事的女儿而感到欣慰的心情呢`,
      );
      await era.printAndWait(
        `不对，差点被绕过去了……重点不是为什么要住在我这里吗！`,
      );
      era.println();
      await tachyon.say_and_wait(`这种小事就别在意了，没事没事`);
      await tachyon.say_and_wait(`哦呀，还是说是那个，钱的问题吗？`);
      await tachyon.say_and_wait(
        `确实，生活上的分担不仅仅只有家事……包括生活开销也是应该分担的`,
      );
      await tachyon.say_and_wait(`那么，先从这个月的生活费开始分担吧，`);
      await tachyon.say_and_wait(
        `幸好，哪怕不谈奖金，过去我申请过的专利什么……专利费大概还是够的吧`,
      );
      era.println();
      await era.printAndWait(`重点不是钱……不，钱很重要，但现在的重点不在钱`);
      await era.printAndWait(
        `说到底……速子不选择继续升学吗？甚至，出国留学之类……？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `我说，豚鼠君，你觉得按部就班的升学，对我真的有任何帮助吗？`,
      );
      await tachyon.say_and_wait(
        `这种团体教育，方便的是没决定好自己路的庸人，对我这种天才而言，自己的决定就是最好的选择`,
      );
      era.println();
      await era.printAndWait(`正如之前不想承认的那样`);
      await era.printAndWait(`${tachyon.name}确实是一名天才`);
      await era.printAndWait(
        `或许自己确实没有办法对${tachyon.sex}的选择做出质疑`,
      );
      await era.printAndWait(
        `但是，除此之外应该还有更多问题吧，比如……家人之类的……？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `我说，豚鼠君……我已经成年了哦？法律上来讲是完全行为能力人了，我有自主选择住处的权利吧？`,
      );
      await me.say_and_wait(`我相信法律绝对不会保障把别人家当成自己住处的行为`);
      await tachyon.say_and_wait(
        `嘛，反正空间不是挺大的吗，让我挤挤也不会怎么样吧`,
      );
      await tachyon.say_and_wait(`……再说，你舍得让我离开吗？`);
      era.println();
      await era.printAndWait(`速子用玩味的眼神盯着你`);
      await era.printAndWait(`每一次都是如此`);
      await era.printAndWait(`仿佛被蛇盯上的豚鼠一般`);
      await era.printAndWait(`仿佛将一切吸入的深渊一般`);
      await era.printAndWait(
        `每次只要被速子用那样的眼眸注视，就再说不出任何反驳的话`,
      );
      era.println();
      await tachyon.say_and_wait(`如此爱着我的你，真的忍心让我离开吗？`);
      await tachyon.say_and_wait(`被我如此爱着的你，真的打算拒绝我的爱吗？`);
      era.println();
      await era.printAndWait(`口舌干燥`);
      await era.printAndWait(`不知不觉，速子已经逼近了自己身前`);
      await era.printAndWait(`就如菊花赏那时的${tachyon.sex}一样`);
      await era.printAndWait(`但与那时不同的，这次真的有着某种预感`);
      await era.printAndWait(`「要被吃掉了」的实感`);
      era.println();
      await era.printAndWait(`啊啊`);
      await era.printAndWait(`说到底，这也是自己选择的道路吧`);
      await era.printAndWait(`你想起了温泉旅行时与速子的对话`);
      era.println();
      await era.printAndWait(
        `当初自己已经决定，无论${tachyon.sex}最后选择的会是什么可能性，都必然会跟随到最后`,
      );
      await era.printAndWait(`注视深渊者，必将被深渊所噬`);
      await era.printAndWait(
        `${me.actual_name}恐怕，一生也逃不出${tachyon.sex}眼中的深渊了吧`,
      );
    }
  }
};
