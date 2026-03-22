const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const { race_enum } = require('#/data/race/race-const');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} maru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (maru, me, callname, hook, extra_flag) => {
  const event_marks = new MaEduMarks();
  const luna = get_chara_talk(17);
  const edu_weeks = era.get('cflag:4:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・启程之风', maru);
    await era.printAndWait(
      `虽然仅仅只是新马级的出道战,但为了观看 ${maru.name} 的首秀而前来的人们却把整个竞马场坐满了。`,
    );
    await me.say_and_wait(`仔细想想看的话，${maru.name} 的人气还真是可怕啊。`);
    await era.printAndWait(
      `多亏了平日的帮助后辈们的努力，前来观看的人群之中有一大部分都是被帮助过的后辈。`,
    );
    await era.printAndWait(
      `坐在马群之中的 ${me.actual_name} 感受到了格格不入的压力。`,
    );
    await me.say_and_wait(`在手心攥出汗之前找一个人少一点的地方观战吧。`);
    await say_by_passer_by_and_wait(
      `解说`,
      `接下来是备受瞩目的新星，同时也具有压倒性的实力与人气的 ${maru.name}，不知道接下来会让我们看到什么样精彩的画面呢！`,
    );
    await me.say_and_wait(`不妙啊。`);
    await era.printAndWait(
      `在解说铿锵有力的渲染之下，像是沸腾的油锅里进了一滴水一样，呐喊声几乎将竞马场掀翻。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} A`,
      `丸善${era.get('cflag:4:性别') - 1 ? '学姐' : '学长'}加油！`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} B`,
      `再让我们看一遍前辈的帅气跑法吧！`,
    );
    await era.printAndWait(`哦哦哦哦哦！`, { width: 34 });
    await era.printAndWait(`观众们的欢呼声响彻了整个赛马场`);
    await me.say_and_wait(
      `大家看上去都很兴奋啊，果然是 ${maru.name} 的缘故吗？`,
    );
    await era.printAndWait(
      `跟着人群一同站起的 ${me.actual_name} 正努力通过马耳之间的间隙寻找名为 ${maru.name} 的身影。`,
    );
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `啊，抱歉。`);
    await era.printAndWait(
      `虽说只是被不小心被碰了一下，但受到的冲击力之大还是让你险些痛的叫出了声。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `非常抱歉……不小心没控制好自己的力气，没有碰伤吧？`,
    );
    await me.say_and_wait(`不，没关系。`);
    await era.printAndWait(
      `既然是对方的无意，所以没有必要在这个问题上纠缠的 ${me.actual_name} 就这样原谅了对方。`,
    );
    await me.say_and_wait(`你是来看 ${maru.name} 跑步的吗？`);
    await era.printAndWait(`话说出口的一瞬间就因为自己的问题而深感懊悔。`);
    await me.say_and_wait(`你是来看 ${maru.name} 跑步的吗？`);
    await era.printAndWait(
      `这不废话，对方不来看 ${maru.name} 的还是过来干什么？难道是观看长了腿的胡萝卜在场地上跑吗？`,
    );
    await era.printAndWait(`不过，有点想见识一下长了腿的胡萝卜啊。`);
    await me.say_and_wait(`你们也是来看长了腿的胡萝卜在地上跑步吗？`);
    await era.printAndWait(
      `不好，不小心把脑子里想的话和要说的对话混在一起了。`,
    );
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `噗嗤。`);
    await me.say_and_wait(`果不其然被嘲笑了啊。`, true);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `这位训练员${me.get_adult_sex_title()}比想象中还有趣啊。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `稍微有点明白丸善前辈为什么会选择你了。`,
    );
    await me.say_and_wait(`诶？`);
    await me.say_and_wait(`原来我已经这么出名了吗？`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `不如说，你与丸善前辈签约的第二天，整个特雷森都知道这件事情了。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `大家都很好奇作为 ${maru.name} 的训练员会是什么样子的人呢。`,
    );
    await era.printAndWait(`难怪一路上会有那么多好奇的视线。`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `作为丸善前辈的训练员${maru.get_adult_sex_title()}，接下来的道路要加油哦！我也会一直支持你和丸善前辈的！`,
    );
    await era.printAndWait(`这位 ${maru.uma_sex_title} 看上去非常开心的样子。`);
    await era.printAndWait(
      `趁着大家将注意力重新聚焦在 ${maru.name} 身上的时候，${me.actual_name} 悄悄离开了原来的座位。`,
    );
    era.drawLine();
    await era.printAndWait(
      `相比于能正面看见 ${maru.name} 奔跑身影的东部，只能看到背影的西部座位就显得人群稀疏。`,
    );
    await era.printAndWait(
      `更不提有不少 ${maru.uma_sex_title} 宁愿站在人群之中也不会坐在自己的座位之上。`,
    );
    await era.printAndWait(`所以说${maru.uma_sex_title}们真是单纯的生物啊。`);
    await era.printAndWait(
      `不过正因为如此所以我才喜欢 ${maru.sex_code - 1 ? '她' : '他'} 们。`,
    );
    await era.printAndWait(
      `观众席上爆发了一阵欢呼声,是为了庆祝 ${maru.name} 首战获胜的 ${maru.uma_sex_title} 们发出的尖叫。`,
    );
    era.printButton(`「差不多该去迎接 ${maru.name} 了」`, 1);
    await era.input();
    await maru.say_and_wait(` ${callname} ♪,看到了我刚才的精彩表演了吗?`);
    era.printButton(`「比想象之中还要精彩的演出！」`, 1);
    await era.input();
    await maru.say_and_wait(
      `嗯嗯,那么我去准备胜者舞台了，${callname} 可要好好看着 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我哦⭐`,
    );
    await era.printAndWait(
      `胜者舞台上的 ${maru.name} 比起平时看上去更加闪闪发光，像是被发掘的原石终于露出了原本的面目一样。`,
    );
    await era.printAndWait(`不过说起来，训练员不就是这样的职业吗？`);
    era.drawLine({ content: '胜者舞台结束后' });
    await maru.say_and_wait(
      `呼～出了不少汗呢,不过之前的舞蹈训练真是派上大忙了⭐`,
    );
    era.printButton(
      `不愧是 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 大人`,
      1,
    );
    await era.input();
    await maru.say_and_wait(
      `哎呀, ${callname} 比平时还要油嘴滑舌的样子,难道对其他的孩子们也是这样的态度吗？`,
    );
    era.printButton(
      `不如说只有 ${maru.name} 一个 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}，想要对其他人说也做不到吧？`,
      1,
    );
    await era.input();
    await maru.say_and_wait(
      `呵呵呵,听到 ${callname} 这么说，我的心情也愈发高涨起来了呢，嗯——今晚的话要不和小特们一起开个派对庆祝吧！`,
    );
    era.printButton(`「 ${maru.name} 比平时还要兴奋的样子呢」`, 1);
    await era.input();
    await me.say_and_wait(
      `像是火焰一样席卷了整个草场的 ${maru.name} 可真帅气啊。`,
    );
    await maru.say_and_wait(
      `听到作为担当的 ${callname} 这么说，可真是让人感到安心呢。`,
    );
    await maru.say_and_wait(`不过在继续夸赞之前,下一个目标是？`);
    era.printButton(`「朝日杯怎么样？」`, 1);
    await era.input();
    await maru.say_and_wait(`朝日杯吗?`);
    await maru.say_and_wait(
      `如果能与更强的 ${maru.uma_sex_title} 之间竞争的话，说不定能看到更加美丽的风景，${callname} 这份回答我可以给满分哦。`,
    );
    await maru.say_and_wait(`那么,接下来就朝着朝日杯前进吧！`);
    await era.printAndWait(`你和 ${maru.name} 确定了接下来的目标.`);
  }
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('出道战后・再次努力', maru);
    await maru.say_and_wait(`啊，输了……`);
    await era.printAndWait(
      `不知是意外还是训练不足的缘故，${maru.name} 在出道战失利。`,
    );
    era.printButton(`回去开反省会吧。`, 1);
    await era.input();
    await maru.say_and_wait(`嗯！下次绝对会胜利！`);
    await era.printAndWait(`你和 ${maru.name} 确定了接下来的目标。`);
  } else if (
    extra_flag.race === race_enum.asah_sta &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(' 朝日杯后・蜚瓦拔木', maru);
    await era.printAndWait(`阪神竞马场\n`);
    await era.printAndWait(
      `凌冽的空气刺激着你的肺部,寒冷刺激着大脑变得更加的清醒。`,
    );
    await me.say_and_wait(` ${maru.name}，一定要赢啊。`);
    await me.say_and_wait(`……不，如果是 ${maru.name} 的话。`);
    await me.say_and_wait(
      `比起胜利，还是为了感受和 ${maru.uma_sex_title} 们一起的奔跑才更加开心吧`,
      true,
    );
    await era.printAndWait(`你紧紧的凝视着比赛开始的时刻。`);
    era.drawLine({ content: '观众席的另一端' });
    await era.printAndWait(
      `紧紧握住来之不易的马票, ${maru.uma_sex_title} 紧紧地盯着 ${maru.name} 的身影。`,
    );
    await era.printAndWait(`然而，`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `所以我的存在意义是……`,
    );
    await era.printAndWait(
      `不小心下意识将自己与 ${maru.sex_code - 1 ? '她' : '他'} 对比了。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `啊！不小心将心底里的话说出来了。`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `可是为什么，心会这么痛呢？`,
      true,
    );
    await era.printAndWait(`我与你的距离，是用尽全力也触摸不到的程度。`);
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `为什么……`);
    await era.printAndWait(
      `不甘心的咬着嘴唇，将手中紧握的马票搓成了一个圆球。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `为什么我无法从你的脚步之中看到希望呢`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `不对！我在想什么。`,
    );
    await era.printAndWait(
      `似乎有什么珍贵的东西碎裂了，再也找不回来了。${maru.uma_sex_title} 重新看向了 ${maru.name} 的身影。`,
    );
  } else if (
    extra_flag.race === race_enum.asah_sta &&
    edu_weeks < 48 &&
    extra_flag.rank > 1 &&
    extra_flag.rank < 5
  ) {
    await print_event_name('朝日杯后・兴奋的感觉', maru);
    await era.printAndWait(` ${maru.name} 入着。`);
    await maru.say_and_wait(
      `嗨！${callname}，看到${
        era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'
      }我帅气的样子了吗？`,
    );
    era.printButton(`辛苦了。`, 1);
    await era.input();
    era.printButton(`能在G1赛事入着能很厉害了。`, 1);
    await era.input();
    await maru.say_and_wait(
      `奔跑的 ${maru.uma_sex_title} 们都是斗志昂扬的想要取得胜利呢，${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我有点压力山大呢。`,
    );
    await me.say_and_wait(` ${maru.name} 看上去明明乐在其中吧。`);
    await maru.say_and_wait(`毕竟是G1级赛事嘛，遇到的对手比平常要强一个档次。`);
    await maru.say_and_wait(
      `相应的，能在草场上获得的快乐也比之前高了一个级别♪`,
    );
    await me.say_and_wait(`接下来去哪里庆祝一下吧？`);
    await maru.say_and_wait(
      `酱紫的话，${era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'}我知道一家很受欢迎的甜品店。`,
    );
    era.drawLine({ content: '观众席的另一端' });
    await era.printAndWait(
      `紧紧握住来之不易的马票, ${maru.uma_sex_title} 紧紧地盯着 ${maru.name} 的身影。`,
    );
    await era.printAndWait(`然而，`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `所以我的存在意义是……`,
    );
    await era.printAndWait(
      `不小心下意识将自己与 ${maru.sex_code - 1 ? '她' : '他'} 对比了。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `啊！不小心将心底里的话说出来了。`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `可是为什么，心会这么痛呢？`,
      true,
    );
    await era.printAndWait(`我与你的距离，是用尽全力也触摸不到的程度。`);
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `为什么……`);
    await era.printAndWait(
      `不甘心的咬着嘴唇，将手中紧握的马票搓成了一个圆球。`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `为什么我无法从你的脚步之中看到希望呢`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `不对！我在想什么。`,
    );
    await era.printAndWait(
      `似乎有什么珍贵的东西碎裂了，再也找不回来了。${maru.uma_sex_title} 重新看向了 ${maru.name} 的身影。`,
    );
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('春季S后・迷茫之始', maru);
    await era.printAndWait(
      `没有任何意外发生，这场比赛是 ${maru.name} 的碾压式胜利。`,
    );
    await era.printAndWait(
      `因为同时代的 ${maru.uma_sex_title} 纷纷避战的缘故。`,
    );
    await era.printAndWait(
      `作为参赛对手的 ${maru.uma_sex_title} 们，其中最好的一位也只是在一场不知名的G3取胜的程度罢了。`,
    );
    await era.printAndWait(`这场胜利，真的能感受到快乐吗？`);
    await say_by_passer_by_and_wait(
      `解说`,
      ` ${maru.name} ！ ${maru.name} 冲线了！`,
    );
    await say_by_passer_by_and_wait(
      `解说`,
      `大差！是 ${maru.name} 压倒性的胜利！`,
    );
    await maru.say_and_wait(`……`);
    maru.print(`这场胜利，真的能感受到快乐吗？`);
    await me.say_and_wait(` ${maru.name} ？`);
    await say_by_passer_by_and_wait(
      `粉丝A`,
      ` ${maru.name} ！ ${maru.name} ！`,
    );
    await say_by_passer_by_and_wait(
      `粉丝B`,
      `我就知道肯定是 ${maru.name} 的胜利！`,
    );
    await say_by_passer_by_and_wait(
      `粉丝A`,
      `不愧是被称为超级跑车的 ${maru.uma_sex_title} ！我果然没有看错！`,
    );
    maru.print(`有点疲惫啊。`);
    await say_by_passer_by_and_wait(
      `粉丝A`,
      `就这样会压倒性的实力把那些弱者统统消灭吧！`,
    );
    maru.print(`在准备室换决胜服时也是。`);
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} A`,
      `反正都赢不了，还用那么大力气干什么。`,
    );
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} A`,
      `所谓的 ${maru.uma_sex_title} 以奔跑作为偶像的传统，早该被主播淘汰了。`,
    );
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} A`,
      `干脆顺应潮流，转型当主播，就这么退役吧。`,
    );
    maru.print(`演出结束后，路过窃窃私语的 ${maru.uma_sex_title} 们。`);
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} B`,
      `赛 ${maru.uma_sex_title} 这个职业，反正都只是那些有天赋的人的狩猎场。`,
    );
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} B`,
      `对于像我们这样的普通人，比赛不过只是一次又一次沦为陪衬的笑料罢了，真是恶心。`,
    );
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} B`,
      `所以说啊，能在草场上感受到快乐的人，实在无法理解。`,
    );
    await say_by_passer_by_and_wait(
      `赛 ${maru.uma_sex_title} B`,
      `呼啊，当时的自己居然还在憧憬当赛 ${maru.uma_sex_title}，现在想想只是羞耻。`,
    );
    era.drawLine();
    await me.say_and_wait(` ${maru.name} ？`);
    await era.printAndWait(` ${maru.name} 以绝对优势充裕的取得了连胜。`);
    await era.printAndWait(
      `虽然只是皋月赏的前哨战，不过接下来的皋月赏恐怕也不存在什么问题吧。`,
    );
    await era.printAndWait(`这么想着，你推开了房门。`);
    await maru.say_and_wait(`啊，${callname} 是来接我的吗？`);
    await era.printAndWait(` ${maru.name} 看上去与平时几乎没有区别。`);
    await maru.say_and_wait(
      ` ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我的表现怎么样？`,
    );
    era.printButton(`「……也许吧」`, 1); //be1
    era.printButton(`「…… ${maru.name}。」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`虾米？`);
      era.printButton(`啊，抱歉，刚才走神了。`, 1);
      await era.input();
      await me.say_and_wait(
        `不愧是 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}，非常棒哦！`,
      );
      await maru.say_and_wait(`嗯嗯，我也这么想的哦。`);
      await maru.say_and_wait(`嗯——接下来的话，去哪里吃比较好呢？`);
      await maru.say_and_wait(`${callname}有什么推荐的吗？`);
      await me.say_and_wait(`去尝一下萨利亚吧，那里的食物比较好吃。`);
      await maru.say_and_wait(`嗯！那接下来一起去尝尝看吧。`);
      new EduEventMarks(4).add('Self_contempt');
      era.set('flag:强制BE', 4);
    } else {
      await maru.say_and_wait(`哦呀，${callname}怎么了？`);
      await me.say_and_wait(`明天晚上，你有空吗？`);
      await me.say_and_wait(`我有些话想跟你说，就在天台上面谈吧。`);
      await maru.say_and_wait(`有什么事情不能在这里聊吗？`);
      await me.say_and_wait(`抱歉，请允许我任性一次，拜托了。`);
      await maru.say_and_wait(`欸？ ${callname} ？`);
      await me.say_and_wait(`拜托了。`);
      await era.printAndWait(`你深深低下了头。`);
      await maru.say_and_wait(`居然做到这种程度……`, true);
      await maru.say_and_wait(`既然 ${me.actual_name} 都这么说了。`);
      await maru.say_and_wait(`我明白了。`);
      await era.printAndWait(` ${maru.name} 带着有点忧虑的表情看着你。`);
      await me.say_and_wait(`那么，明天晚上9点，在学校天台上见。`);
      await era.printAndWait(
        `背后已经被汗水打湿，虽然已经做好了最坏的打算，但能得到 ${maru.name} 的同意，还是让你长呼了一口气。`,
      );
      await maru.say_and_wait(
        ` ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我做了让${
          callname
        }受伤的事情吗？`,
      );
    }
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('皐月賞后・如火焰一样美丽的奔跑', maru);
    await era.printAndWait(`胜者舞台\n`);
    await era.printAndWait(`工作人员们为了确保胜者舞台装置正常而忙碌着。`);
    await say_by_passer_by_and_wait(
      `工作人员A`,
      `胜者舞台马上就要开始了，最后一次调试！`,
    );
    await say_by_passer_by_and_wait(
      `工作人员B`,
      `最后再检查一遍气柱机位置！果然，我就知道是 ${maru.name} 会获胜。`,
    );
    await say_by_passer_by_and_wait(
      `工作人员B`,
      `之前出道战的时候我就开始关注 ${maru.sex_code - 1 ? '她' : '他'} 了。`,
    );
    await say_by_passer_by_and_wait(
      `工作人员C`,
      `灯光向左再打一点！啊，我是在希望杯开始关注的。`,
    );
    await say_by_passer_by_and_wait(
      `工作人员C`,
      `虽然之前就听说了有个跑得非常厉害的 ${maru.uma_sex_title}，但不是实地观看还真无法了解。`,
    );
    await say_by_passer_by_and_wait(
      `工作人员B`,
      `准备就绪！接下来的东京优骏胜者肯定还会是 ${maru.sex_code - 1 ? '她' : '他'} ！`,
    );
    await say_by_passer_by_and_wait(`工作人员A`, `全体都有！各就位！预备！`);
    await era.printAndWait(`如预料一般，${maru.name} 取得了胜利。`);
    await era.printAndWait(
      `不论是最后冲线的刹那，还是在胜者舞台中央的表演，俘获了众多粉丝的 ${maru.name}。`,
    );
    await era.printAndWait(`带着满足的笑容回到了休息室。`);
    era.printButton(`「辛苦了，演出很精彩。」`, 1);
    await era.input();
    await era.printAndWait(
      `轻轻脱下 ${maru.name} 的长靴，从脚踝开始一直到大腿，小心翼翼控制着按摩的力度。`,
    );
    await me.say_and_wait(
      `该说不愧是王道路线的第一场吗？不管是新闻发布会，还是之后的比赛与胜者舞台，都不是之前参加的同为G1的朝日杯可比的。`,
    );
    await me.say_and_wait(`之后还会遇到比这更加盛大的赛事，${maru.name} ——`);
    await era.printAndWait(
      `在按摩了大约五分钟左右，十指轻轻按压大腿内侧，一遍观察着 ${maru.name} 的反应一遍继续着对话。`,
    );
    await maru.say_and_wait(
      `嗯～谢谢 ${callname} 这么关心了，与其说累到几乎动不了，${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我可是从精神到身体都满足了呢。`,
    );
    await era.printAndWait(
      `一边露出了笑容的 ${maru.name} 不时的传出了小小的喘息声。`,
    );
    await maru.say_and_wait(
      `像这样让更多的 ${maru.uma_sex_title} 们看到我的背影，${maru.sex_code - 1 ? '她' : '他'} 们一定也会憧憬着在赛场上奔跑的样子吧。`,
    );
    await maru.say_and_wait(`然后，在努力训练的过程之中，慢慢发现奔跑的快乐。`);
    await maru.say_and_wait(
      `这样的话，我就能看着后辈们追赶着我的背影努力的样子而感到开心了。`,
    );
    await era.printAndWait(
      ` ${maru.name} 那因为微弱的痛苦与稍稍的酥麻感而显得额外明亮的眼睛直直的盯着你看。`,
    );
    await me.say_and_wait(
      `嗯，为了一个月后的东京优骏，接下来这段时间要提高耐力才行了。`,
    );
    await maru.say_and_wait(`嗯——接下来去哪里庆祝才好呢？`);
    await era.printAndWait(
      `按摩结束之后，似乎意犹未尽的 ${maru.name} 在座位上发出了满足的感叹声。`,
    );
    await maru.say_and_wait(`高档餐厅？还是亲民的赛利亚？还是说`);
    era.printButton(`「干脆在训练室庆祝吧！」`, 1);
    await era.input();
    await me.say_and_wait(`多点一份披萨和饮料，然后邀请后辈们一起庆祝。`);
    await maru.say_and_wait(
      `就按 ${callname} 说的那样，开始期待晚上的派对了呢♪`,
    );
    await era.printAndWait(
      `穿起靴子，重新适应着走路感觉的${maru.sex_code - 1 ? '少女' : '少年'}期待着之后的庆典。`,
    );
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1 &&
    extra_flag.rank < 5
  ) {
    await print_event_name('皐月賞后・换挡起步', maru);
    await era.printAndWait(`等候室\n`);
    await maru.say_and_wait(`嗨！ ${callname} ！`);
    await era.printAndWait(`从胜者舞台下来的 ${maru.name} 回到了等候室`);
    await me.say_and_wait(`感觉怎么样？`);
    await era.printAndWait(
      `轻轻脱下 ${maru.name} 的靴子，从脚踝开始一直到大腿，小心翼翼控制着按摩的力度。`,
    );
    await maru.say_and_wait(
      `超级稀饭这种感觉！不愧是经典三冠的皋月赏，为争夺三冠聚集而来的 ${maru.uma_sex_title} 们强者如云呢。`,
    );
    await maru.say_and_wait(
      `还能在之后德比体验更大规模的赛事，${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我有点生无可恋的感觉呢。`,
    );
    await era.printAndWait(
      `在按摩了大约五分钟左右，十指轻轻按压大腿内侧，一遍观察着 ${maru.name} 的反应一遍继续着对话。`,
    );
    await me.say_and_wait(`就按这样的气势挑战德比吧！`);
    await maru.say_and_wait(`没错！就是这种感觉！`);
    await era.printAndWait(
      `按摩结束后，你轻轻给 ${maru.name} 套上靴子，后者站了起来气势高涨的决定了接下来的目标。`,
    );
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日本德比后・抉择开始', maru);
    await era.printAndWait(
      `没有任何意外，${maru.name} 漂亮的取得了德比的优胜。`,
    );
    await era.printAndWait(
      `当 ${maru.sex_code - 1 ? '她' : '他'} 冲线的那一刻，如雷鸣般的喝彩声从观众席上传来。`,
    );
    await era.printAndWait(`休息室\n`);
    await maru.say_and_wait(`呼～不愧是经典三冠之中最受瞩目的赛事呢。`);
    await maru.say_and_wait(
      `参加德比的赛 ${maru.uma_sex_title} 们个个都是赛 ${maru.uma_sex_title} 的精英呢。`,
    );
    era.printButton(`「虽然跑道是在德比最外侧，但是在这种不利条件下。」`, 1);
    await era.input();
    era.printButton(`「还能漂亮赢下德比的 ${maru.name} 才是最厉害的。」`, 1);
    await era.input();
    await maru.say_and_wait(
      `其实也没那么厉害啦⭐只是和往常一样，不对，也就比之前稍稍跑得更快了一点的程度呢。`,
    );
    await maru.say_and_wait(`能比德比还要盛大的赛事，恐怕也剩下——`);
    era.printButton(`「要不要去凯旋门？」`, 1);
    era.printButton(`「果然还是有马纪念吗？」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`诶？凯旋门吗？`);
      await maru.say_and_wait(
        `跪了！果然和${callname}在一起每次都能感受到惊喜呢～`,
      );
      await maru.say_and_wait(
        `如果是凯旋门的话，说不定能在那里遇到世界级的赛 ${maru.uma_sex_title} 呢。`,
      );
      await maru.say_and_wait(`嗯——怎么办才好呢？`);
      era.printButton(`怎么样才好呢？`, 1);
      await era.input();
    } else {
      await maru.say_and_wait(`对吧？果然还是有马纪念。`);
      era.printButton(
        `「我也期待着 ${maru.name} 能在有马纪念上玩得开心。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`${callname}就好好看着吧。`);
    }
    await maru.say_and_wait(`啊，差不多该去胜者舞台了。`);
    await maru.say_and_wait(`跟 ${callname} 在一起，时间总是过得很快呢。`);
    await me.say_and_wait(
      `在舞台之上也要把这份感情让一直支持着 ${maru.name} 的粉丝们感受到哦！`,
    );
    await maru.say_and_wait(`嗯。要让一直支持着的粉丝们好好看着我才行。`);
    await maru.say_and_wait(`差不多该出发了。`);
    await era.printAndWait(` ${maru.name} 离开了休息室。`);
    await me.say_and_wait(`……`);
    await era.printAndWait(`把休息室门关上后，房间里只剩下自己一个人了。`);
    await me.say_and_wait(`差不多该下定决心了吧。`, true);
    await era.printAndWait(`正准备出发的时候。`);
    await era.printAndWait(`咚咚咚`);
    await era.printAndWait(`真是的，又想到什么新奇的潮流了吗？`);
    await era.printAndWait(`一边苦笑着一边打开了休息室的门。`);
    await me.say_and_wait(`丸善——`);
    await era.printAndWait(`门口留下了一张纸条。`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `丸善前辈，我有些疑问想要问你，如果可以的话，明天晚上可以到空教室里见面吗？`,
    );
    await era.printAndWait(`你决定`);
    era.printButton(`「告诉 ${maru.name} 」`, 1); //NE
    era.printButton(`「代替 ${maru.name} 前去」`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await me.say_and_wait(`有点头疼啊，是给 ${maru.name} 的。`);
      await me.say_and_wait(
        `虽然也想自己去看看，不过还是交给 ${maru.sex_code - 1 ? '她' : '他'} 比较好吧？`,
      );
      await era.printAndWait(
        `等到 ${maru.name} 回来后，你将这张纸条上的事情告诉了 ${maru.sex_code - 1 ? '她' : '他'}。`,
      );
      event_marks.happiness_day++;
      era.set('flag:强制BE', 4);
    } else {
      await era.printAndWait(
        `环顾四周无人后，你将纸条捡起，然后放进了口袋之中。`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(`为什么要捡起这张纸条，连自己也不清楚。不过——`);
      await era.printAndWait(`总觉得，如果就这么错过的话。`);
      await era.printAndWait(`我可能会失去什么。`);
      await me.say_and_wait(`……抱歉，${maru.name}。`);
      await me.say_and_wait(`无论如何我都要过去一趟。`);
    }
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('日本德比后・抉择开始', maru);
    await era.printAndWait(
      `没有任何意外，${maru.name} 漂亮的取得了德比的优胜。`,
    );
    await era.printAndWait(
      `当 ${maru.sex_code - 1 ? '她' : '他'} 冲线的那一刻，如雷鸣般的喝彩声从观众席上传来。`,
    );
    await era.printAndWait(`休息室\n`);
    await maru.say_and_wait(`呼～不愧是经典三冠之中最受瞩目的赛事呢。`);
    await maru.say_and_wait(
      `参加德比的赛 ${maru.uma_sex_title} 们个个都是赛 ${maru.uma_sex_title} 的精英呢。`,
    );
    await maru.say_and_wait(`能比德比还要盛大的赛事，恐怕也剩下`);
    era.printButton(`「要不要去凯旋门？」`, 1);
    era.printButton(`「果然还是有马纪念吧！」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`诶？凯旋门吗？`);
      await maru.say_and_wait(
        `跪了！果然和${callname}在一起每次都能感受到惊喜呢～`,
      );
      await maru.say_and_wait(
        `如果是凯旋门的话，说不定能在那里遇到世界级的赛 ${maru.uma_sex_title} 呢。`,
      );
      await maru.say_and_wait(`嗯——怎么办才好呢？`);
      era.printButton(`怎么样才好呢？`, 1);
      await era.input();
    } else {
      await maru.say_and_wait(`对吧？果然还是有马纪念。`);
      era.printButton(
        `「我也期待着 ${maru.name} 能在有马纪念上玩得开心。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`${callname}就好好看着吧。`);
    }
    await maru.say_and_wait(`啊，差不多该去胜者舞台了。`);
    await maru.say_and_wait(`跟 ${callname} 在一起，时间总是过得很快呢。`);
    await me.say_and_wait(
      `在舞台之上也要把这份感情让一直支持着 ${maru.name} 的粉丝们感受到哦！`,
    );
    await maru.say_and_wait(`嗯。要让一直支持着的粉丝们好好看着我才行。`);
    await maru.say_and_wait(`差不多该出发了。`);
    await era.printAndWait(` ${maru.name} 离开了休息室。`);
    await me.say_and_wait(`……`);
    await era.printAndWait(`把休息室门关上后，房间里只剩下自己一个人了。`);
    await me.say_and_wait(`差不多该下定决心了吧。`, true);
    await era.printAndWait(`正准备出发的时候。`);
    await era.printAndWait(`咚咚咚`);
    await era.printAndWait(`真是的，又想到什么新奇的潮流了吗？`);
    await era.printAndWait(`一边苦笑着一边打开了休息室的门。`);
    await me.say_and_wait(`丸善——`);
    await era.printAndWait(`门口留下了一张纸条。`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `丸善前辈，我有些疑问想要问你，如果可以的话，二周后可以到空教室里见面吗？`,
    );
    await era.printAndWait(`你决定`);
    era.printButton(`「告诉 ${maru.name} 」`, 1); //NE
    era.printButton(`「代替 ${maru.name} 前去」`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await me.say_and_wait(`有点头疼啊，是给 ${maru.name} 的。`);
      await me.say_and_wait(
        `虽然也想自己去看看，不过还是交给 ${maru.sex_code - 1 ? '她' : '他'} 比较好吧？`,
      );
      await era.printAndWait(
        `等到 ${maru.name} 回来后，你将这张纸条上的事情告诉了 ${maru.sex_code - 1 ? '她' : '他'}。`,
      );
      event_marks.happiness_day++;
      era.set('flag:强制BE', 4);
    } else {
      await era.printAndWait(
        `环顾四周无人后，你将纸条捡起，然后放进了口袋之中。`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(`为什么要捡起这张纸条，连自己也不清楚。不过——`);
      await era.printAndWait(`总觉得，如果就这么错过的话。`);
      await era.printAndWait(`我可能会失去什么。`);
      await me.say_and_wait(`……抱歉，${maru.name}。`);
      await me.say_and_wait(`无论如何我都要过去一趟。`);
    }
  } else if (
    extra_flag.race === race_enum.radi_shi &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('日经广播赏后・迷茫之路', maru);
    await era.printAndWait(`休息室\n`);
    await me.say_and_wait(`辛苦了，${maru.name}。`);
    await era.printAndWait(
      `虽然中盘险些被马群所追上，但 ${maru.name} 有惊无险的取得了比赛的胜利。`,
    );
    await me.say_and_wait(
      `这可不像平时的那位 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 模样的 ${maru.sex_code - 1 ? '她' : '他'}。`,
      true,
    );
    await me.say_and_wait(`恐怕现在还困在怀疑的阴影之中吧。`, true);
    await maru.say_and_wait(` ${callname} ！`);
    await era.printAndWait(`注意到你的瞬间，${maru.name} 露出了开朗的笑容。`);
    await era.printAndWait(`然而，那黯淡的神情却深深烙印在你的脑海之中。`);
    await maru.say_and_wait(`可以多夸夸我吗？`);
    era.printButton(
      `辛苦了，作为美丽又强大的 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 大人，这次表现得非常精彩！`,
      1,
    );
    await era.input();
    await maru.say_and_wait(
      `哼哼～那是当然的事情呦，不如说失败的话才更奇怪吧？`,
    );
    era.printButton(`「大腿怎么样了？」`, 1);
    await era.input();
    await maru.say_and_wait(`比想象之中要好的多。`);
    era.printButton(`「大腿怎么样了？」`, 1);
    await era.input();
    await maru.say_and_wait(`……`);
    era.printButton(
      `作为你的训练员，我不会眼睁睁看着爱马因为不断积累的压力最后黯然退场。`,
      1,
    );
    await era.input();
    await me.say_and_wait(`就像之前的 ${maru.uma_sex_title} 一样。`);
    await me.say_and_wait(`原谅我，对不起。`);
    await era.printAndWait(
      `在胜者舞台结束后，你决定放弃秋季的菊花赏，转而备战有马纪念。`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('有马纪念后・希望的辉光', maru);
    await era.printAndWait(
      `在有马纪念上披荆斩棘战胜了众多强敌后，${maru.name} 取得了有马纪念的胜利`,
    );
    await say_by_passer_by_and_wait(
      `记者A`,
      `恭喜 ${maru.name} ${
        maru.sex_code === 1 ? '先生' : '小姐'
      }取得了有马纪念的胜利，战况真是激烈呢。`,
    );
    await maru.say_and_wait(
      `是啊，选手们个个都是实力派呢，拜此所赐我也跑的很开心呢`,
    );
    await say_by_passer_by_and_wait(`记者A`, ` ${maru.name} 有什么感想吗？`);
    await maru.say_and_wait(
      `如果能让更多的 ${maru.uma_sex_title} 们看到我的背影然后产生追逐的想法就好了`,
    );
    await say_by_passer_by_and_wait(`记者A`, `真是非常远大的理想呢。`);
    await maru.say_and_wait(` ${callname} 这边`);
    await era.printAndWait(
      ` ${maru.name} 看到你的到来后将你拉到了记者面前。」`,
    );
    await say_by_passer_by_and_wait(
      `记者A`,
      `请问训练员先生对 ${maru.name} 获胜有什么感谢吗？`,
    );
    era.printButton(`「比起胜利与否，${maru.name} 能够高兴才是最重要的」`, 1);
    await era.input();
    await maru.say_and_wait(
      ` ${callname} 真会说话～不过，没有 ${callname} 的鼓励的话，恐怕我也无法取得胜利呢。`,
    );
    await say_by_passer_by_and_wait(
      `记者A`,
      `真是令人感动的羁绊，感谢两位接受我的采访。`,
    );
    await maru.say_and_wait(`今天去哪里大吃一顿庆祝一下吧`);
    await me.say_and_wait(`果然还是露出笑脸的 ${maru.name} 最棒了`, true);
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('有马纪念后・最大的舞台！', maru);
    await era.printAndWait(`等候室\n`);
    await me.say_and_wait(`感觉怎么样？`);
    await maru.say_and_wait(
      `一起奔跑的赛 ${maru.uma_sex_title} 都是以最强赛 ${maru.uma_sex_title} 为目标的 ${maru.uma_sex_title}，能与这些${maru.sex_code - 1 ? '她' : '他'}们奔跑也很开心呢。`,
    );
    await me.say_and_wait(`满足了吗？`);
    await maru.say_and_wait(
      `虾米？能比这更大的赛事也只有凯旋门了吧。我喜欢这种感觉哦？`,
    );
    await me.say_and_wait(`等到资深年结束后，第二年夏天去法国参加比赛吧？`);
    await maru.say_and_wait(
      `${era.get('cflag:4:性别') - 1 ? '美眉' : '帅锅'}我也是这么想的呢。`,
    );
    await maru.say_and_wait(`接下来也一起努力吧！`);
  } else if (
    extra_flag.race === race_enum.sank_hai &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('大阪杯结束后・风卷残云', maru);
    await maru.say_and_wait(`哈啊，哈啊，哈啊。`);
    await maru.say_and_wait(`赢了吗？`, true);
    await era.printAndWait(
      `与皇帝之间的对决，最终以 ${maru.name} 获胜告一段落。`,
    );
    await me.say_and_wait(`真是精彩的比赛，冷汗都不知不觉流了下来。`);
    await era.printAndWait(
      `在奔腾的马群之中找到最合适的位置，冲刺之时理所应当应该在最前面——。`,
    );
    await era.printAndWait(`但就差一点，就会超过 ${maru.name} 了。`);
    await era.printAndWait(`……即使如此，`);
    await maru.say_and_wait(
      `应该说是兴奋还是恐惧呢？能踩中怪物影子的 ${maru.uma_sex_title}，你还是第一个呢小鲁铎♪`,
    );
    await era.printAndWait(
      `似乎对终于遇到能追上 ${maru.sex_code - 1 ? '她' : '他'} 的脚步而感到了满足的 ${maru.name} 露出了笑容。`,
    );
    era.drawLine();
    await luna.say_and_wait(`……太好了。`);
    await era.printAndWait(
      `皇帝目不斜视地看着你们远去的背影，${maru.sex_code - 1 ? '她' : '他'} 舔舐着自己的牙齿，一种狂喜油然而生。`,
    );
    await era.printAndWait(
      `皇帝未竟的事业太多，故仍需证明自己——证明 ${maru.sex_code - 1 ? '她' : '他'} 独一无二，不止无敌于同世代，还能击溃过往的荣耀、镇压未来的荣光。`,
    );
    era.println();
    await luna.say_and_wait(`丸善，你最好真能从一而终地贯彻你的理念。`);
    await luna.say_and_wait(
      `还有——不要以王道自居。开拓者应当只受苦难，你伟大，便倒下，成为后来者向上的阶梯。`,
    );
    await luna.say_and_wait(
      `为了日本赛 ${maru.uma_sex_title} 的未来——为了一个更强的皇帝。`,
    );
    await era.printAndWait(`为此……皇帝昂起头，居高临下地看着 ${maru.name}。`);
    era.println();
    await luna.say_and_wait(
      `褪下你的教养、撕开你文明的包装！用尽一切方法，卑贱也罢、粗鲁也好，最好无所不用其极！！！`,
    );
    await luna.say_and_wait(
      `再怎么难看也是被允许的。做好所有准备……在天皇赏秋，迎接吾（皇帝）的复仇。\n`,
    );
    await era.printAndWait(`说罢，和颜悦色的皇帝脚步轻盈，离开了赛场。`);
  } else if (
    extra_flag.race === race_enum.sank_hai &&
    edu_weeks > 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('大阪杯结束后・郁郁苍苍', maru);
    await maru.say_and_wait(`没想到还是输给小鲁铎了呜呜——`);
    await era.printAndWait(`但是 ${maru.name} 却并没有想象之中消沉。`);
    era.printButton(`回去开反省会重新商量一下复仇战吧`, 1);
    await era.input();
    await era.printAndWait(`与皇帝之间的对决暂时告一段落。`);
  } else if (
    extra_flag.race === race_enum.yasu_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('安田記念结束后・让人想奔跑的竞赛', maru);
    era.drawLine({ content: '准备室内' });
    await maru.say_and_wait(` ${callname}，看到我精彩的背影了吗？`);
    await era.printAndWait(
      `安田纪念上，后辈的 ${maru.uma_sex_title} 们似乎都受到了 ${maru.name} 背影的激励，开始以 ${maru.sex_code - 1 ? '她' : '他'} 为目标不断向前奔跑着`,
    );
    await maru.say_and_wait(
      `后辈们也变得很厉害了呢，说不定哪天 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我也要被后辈们超越然后咬着手帕一脸嫉妒地瞪着领奖台上的 ${maru.sex_code - 1 ? '她' : '他'} 们看呢`,
    );
    await maru.say_and_wait(
      `为了安抚 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我受伤的心灵，${callname} 今天和我一起睡吧`,
    );
    await me.say_and_wait(`比起这个 ${maru.name} 似乎很享受跑步的快乐呢`);
    await maru.say_and_wait(
      `诶，居然岔开话题，${callname} 对我的态度也变得这么冷淡了。`,
    );
    await maru.say_and_wait(
      `是不是我已经失去魅力了，这样下去的话要 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我要被负心人抛弃了。`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我好可怜啊`,
    );
    await era.printAndWait(` ${maru.name} 现在也学会向你撒娇了`);
    await me.say_and_wait(`这个时候就应该`, true);
    await era.printAndWait(
      `右手轻轻搂住 ${maru.name} 的腰肢，再向其中注入深深一吻，左手不是抚摸着耳朵边的敏感地带`,
    );
    await era.printAndWait(
      `像是吸了猫薄荷的小猫一样，${maru.name} 现在彻底放松下来了。`,
    );
    await maru.say_and_wait(
      `回去的时候让你尝尝 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 的爱情便当吧♪`,
    );
    await era.printAndWait(
      ` ${me.actual_name} 回忆起了松软奶酪与浇灌着蜂蜜的面包发出的香甜气息，以及 ${maru.name} 在晴朗的天空之下露出的笑容。`,
    );
    era.printButton(`「 ${maru.name} 的厨艺一直都是这么好呢」`, 1);
    await era.input();
    await era.printAndWait(
      `像是回忆起了什么一样，微笑之中露出了狡黠表情的 ${maru.name} 轻轻摆动着尾巴。`,
    );
    await maru.say_and_wait(` ${callname} 接下来也一直做我的试吃员吧。`);
    await me.say_and_wait(`说起来的话，我明天想尝尝看中华料理。`);
    await maru.say_and_wait(`呵呵♪ ${callname} 就拭目以待吧。`);
    era.drawLine();
    await era.printAndWait(
      `等到晚上 ${maru.name} 从厨房将做好的包菜炒肉端上来之后，尚未动筷，那鲜美的气味便急不可耐的从鼻腔之中钻入，搅的馋虫从胃中勾了出来。`,
    );
    await era.printAndWait(
      `等到动筷之时，夹起一块猪肉，那嫩滑的感觉像是夹起了一块豆腐。放入口中，含有菜汁的猪肉在口中迸开，让人恨不得将舌头都吃下去。`,
    );
    await maru.say_and_wait(`味道怎么样？`);
    await era.printAndWait(
      `看着正大块朵颐的 ${me.actual_name}， ${maru.name} 露出了满意的笑容。`,
    );
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    const chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342);
    chara340_talk.name = '睿智的女神';
    chara341_talk.name = '温柔的女神';
    chara342_talk.name = '严肃的女神';
    await print_event_name('天皇赏秋结束后・金色之秋，黄金之梦', maru);
    // 修改为丸善斯基个人的独白
    await maru.say_and_wait(`哈啊，哈啊，哈啊。`);
    await maru.say_and_wait(`就差一点了。`);
    await era.printAndWait(`在最后的弯道一口气加速。`);
    await era.printAndWait(`此时此刻，赛马场化为了两人之间的角斗场。`);
    await era.printAndWait(`还有10马身，8马身，6马身。`);
    await era.printAndWait(`离终点还有不到15m。`);
    await era.printAndWait(`后方传来的雷霆声越来越近。`);
    await maru.say_and_wait(`果然最后还是差了一点吗？`, true);
    await era.printAndWait(`先前积攒的优势像被火焰融化的积雪一样迅速消融。`);
    await era.printAndWait(`最后冲刺的瞬间。`);
    await era.printAndWait(`皇帝追上了 ${maru.name} 的背影。`);
    await era.printAndWait(`但 ${maru.name} 跨出了的一步。`);
    await era.printAndWait(`皇帝：没想到居然会这样，真是有趣。`);
    await say_by_passer_by_and_wait(`解说`, `最后的胜利者是—— ${maru.name} ！`);
    await maru.say_and_wait(`已经胜利了。`);
    await maru.say_and_wait(`……为什么好累。`);
    era.drawLine();
    maru.print(
      `再次睁开双眼的时候，仿佛从一场大梦苏醒。眼前是一片朦胧而神秘的草原。`,
    );
    maru.print(
      `阳光透过稀疏的云层，如细丝般轻轻洒落，将无垠的绿意染上一层温暖而柔和的金辉。`,
    );
    maru.print(`尝试坐起身来，却感觉身体中的每一个细胞都充满了活力。`);
    maru.print(
      `就这么顺势站了起来。环顾四周，蓝天白云之下，宛如巨大翡翠般镶嵌在大地之中一望无际的草原，散发着柔和而神秘的气息。`,
    );
    maru.print(`微风拂过，草浪翻滚，宛如海洋的波涛，带来了阵阵清新的草香。`);
    await maru.say_and_wait(`这里是哪里？`);
    maru.print(`无人回答，但我的内心却无比确信着，哪里有能回答我答案的地方。`);
    await maru.say_and_wait(`跟平常一样马力全开！`);
    await maru.say_and_wait(`三！`);
    await era.printAndWait(`上半身挺直，肩膀放松下沉。`);
    await maru.say_and_wait(`二！`);
    await era.printAndWait(`将全部的力量注入腿部。`);
    await maru.say_and_wait(`一！`);
    await era.printAndWait(`深吸一口气，感受着弥漫于空气之中清新的草味。`);
    await era.printAndWait(
      `随后，追寻着答案，${maru.name} 在草地的怀抱之中疾驰。`,
    );
    era.drawLine();
    await era.printAndWait(` ${maru.name} 来到了一片金色的草原。`);
    await era.printAndWait(
      `那是令人怀念的，${maru.uma_sex_title} 灵魂的摇篮。`,
    );
    await maru.say_and_wait(`这里是？`);
    await chara341_talk.say_and_wait(`终于来了，温柔的孩子。`);
    await era.printAndWait(
      `突然出现在面前的是，以温柔、爱护之心包容万物的女神。`,
    );
    await chara340_talk.say_and_wait(`这一路的辛苦我们都看在眼里。`);
    await era.printAndWait(
      `紧接着尊重并祝福着每位赛 ${maru.uma_sex_title} 与生俱来的个性，冷静且和蔼的女神出现了。`,
    );
    await chara342_talk.say_and_wait(`追求赋予时间意义而从中获取的强大力量`);
    await chara342_talk.say_and_wait(
      `作为凡人来说，或许也是一种强大的展示吧。`,
    );
    await era.printAndWait(
      `坚信着强大才能开拓未来的，严肃而又强大的女神出现了。`,
    );
    await maru.say_and_wait(`为什么我会出现在这里？`);
    await chara342_talk.say_and_wait(
      `……这里是所有领悟领域的 ${maru.uma_sex_title} 在才能发挥到极致后，会到达的竞技场。`,
    );
    await chara341_talk.say_and_wait(
      `也是度过精彩的一生后，所有 ${maru.uma_sex_title} 们最后会到达的温柔乡。`,
    );
    await chara340_talk.say_and_wait(`到达伊甸的赛 ${maru.uma_sex_title} 啊。`);
    await chara340_talk.say_and_wait(
      `你应该明白，有我们缔造的这个世界，因为不同的理念之间发生的永恒对立，所造成了诸多悲伤与痛苦。`,
    );
    await chara340_talk.say_and_wait(
      `但也保证了这个世界上永远存在的，不同的，势均力敌的其他选择。`,
    );
    await chara341_talk.say_and_wait(
      `同样也为那些无人认可的，被认为不合时宜的梦想，有着可以永远憧憬的那个彼方。`,
    );
    await chara341_talk.say_and_wait(
      `无论你怀抱什么样的信念，这个世界上总有一处可以作为你内心深处的归宿。`,
    );
    await chara342_talk.say_and_wait(
      `人类与 ${maru.uma_sex_title} 需要很长的一段学习时间，用来学习和平且怀有敬意地进行着争斗。`,
    );
    await chara342_talk.say_and_wait(
      `在一切争斗的最后，都会得出一个意义，这意义终将救赎为获得胜利而付出代价的各方 ${maru.uma_sex_title}。`,
    );
    await chara340_talk.say_and_wait(
      ` ${maru.name}，如同千万来到伊甸的 ${maru.uma_sex_title} 们一样，你有什么想要问的吗？`,
    );
    await maru.say_and_wait(`想问的吗？`);
    maru.print(`一瞬间因为想要询问的问题太多，话语堵在了喉咙之中。`);
    maru.print(`但是，。`);
    await maru.say_and_wait(`不用了。`);
    await maru.say_and_wait(`旅途之中最重要的是路边的风景。`);
    await maru.say_and_wait(
      `如果从一开始就知道终点的答案的话，那么路边的风景就失去了存在的意义。`,
    );
    await maru.say_and_wait(
      `如果非要说的话，等我结束了这段愉快的旅程之后，再次见面时提出的问题才是明智的选择吧？`,
    );
    await chara340_talk.say_and_wait(
      `比起真相更关心世俗吗？你选择了一条有趣的道路呢。`,
    );
    await chara341_talk.say_and_wait(`尽管接下来的道路比现在还要艰难。`);
    await chara342_talk.say_and_wait(`不论什么困难都能跨越吧？你有这个资格。`);
    await chara340_talk.say_and_wait(`祝你之后的道路一路顺风。`);
    await era.printAndWait(
      `柔和的风轻轻将 ${maru.name} 托起，向着远方的世界加速前进。`,
    );
    await era.printAndWait(
      `在意识消失之前的一刹那，${maru.name} 将这片黄金般的故乡深深铭记在了心底。`,
    );
    era.drawLine();
    era.printButton(`「 ${maru.name} ？」`, 1);
    await era.input();
    await era.printAndWait(
      `应该说是不幸中的万幸吗？从比赛结束之后就一直浑浑噩噩的 ${maru.name}，在胜者舞台上依然将自己的舞蹈传达到了每一个支持者的心底。`,
    );
    await era.printAndWait(
      `以训练员身份声称现在的 ${maru.name} 需要休息谢绝了所有的见面会与采访，在确认了 ${maru.name} 处于一种无法用现有科学解释的一动不动的状态后，你小心翼翼的背起 ${maru.name}，开着小塔把 ${maru.sex_code - 1 ? '她' : '他'} 送到了居住的公寓中。`,
    );
    era.printButton(`「打扰了。」`, 1);
    await era.input();
    await era.printAndWait(
      `一边将小塔停在附近的停车场，一边小心翼翼的抱起 ${maru.name}。`,
    );
    await era.printAndWait(
      `将 ${maru.sex_code - 1 ? '她' : '他'} 安置在床上后，你便抽了张椅子坐在 ${maru.sex_code - 1 ? '她' : '他'} 的身边。`,
    );
    await me.say_and_wait(`千万不要有事情，${maru.name}。`, true);
    await era.printAndWait(
      `在尽了自己最大的努力之后，一边祈祷着自己的沉睡能换取 ${maru.name} 的苏醒。`,
    );
    await era.printAndWait(`一边在忐忑不安之中度过。`);
    await era.printAndWait(`一分，一时，一夜无话。`);
    await maru.say_and_wait(`唔。`);
    await era.printAndWait(
      `直到阳光透过云层，将斑驳的光影洒在 ${maru.name} 的身上时。`,
    );
    await maru.say_and_wait(`这里是？`);
    await era.printAndWait(
      `苏醒的${maru.sex_code - 1 ? '少女' : '少年'}疑惑地看着熟悉的天花板，然后将目光定格在了这个陌生而又熟悉的身影之上。`,
    );
    await maru.say_and_wait(` ${callname} ？`);
    await era.printAndWait(
      `似乎是一天一夜积累下来的疲劳将 ${me.actual_name} 彻底压垮了，${me.actual_name} 不知不觉间睡着了。`,
    );
    await maru.say_and_wait(`从这种角度看过去的话，${callname} 真帅气呢♪`);
    await maru.say_and_wait(`不管看多少遍都不会腻呢♪`);
    await maru.say_and_wait(`……一路走来辛苦你了，${callname}。`);
    await maru.say_and_wait(`不论发生什么，我们都要在一起哦？`);
    await era.printAndWait(` ${maru.name} 紧紧抱住了你。`);
    await era.printAndWait(`三女神温柔的注视着孩子们。`);
    await chara340_talk.say_and_wait(`……温柔的孩子，你的愿望一定会实现的。`);
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', maru);
    await maru.say_and_wait(
      `victory!victory！胜利了哦，训练员♪第一名果然不一样呢，内心的兴奋完全停不下来啊`,
    );
    await maru.say_and_wait(`训练员看到了我跑步的模样吗？`);
    era.printButton(`「你是最棒的！」`, 1);
    era.printButton(`「还可以做的更好哦！」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(
        `对吧对吧♪今天就去喫茶店喝柠檬茶、吃提拉米苏吧。`,
      );
      await maru.say_and_wait(`训练员当然也会一起来的吧？呵呵♪`);
    } else {
      await maru.say_and_wait(`哎呀，训练员真是直接啊！`);
      await maru.say_and_wait(`不过我也不能就这样沾沾自喜！`);
      await era.printAndWait(
        ` ${maru.name} 把 ${maru.sex_code - 1 ? '她' : '他'} 最喜欢的椰果饮料一口气喝完了！`,
      );
      await maru.say_and_wait(
        `——噗哈！真是凉快！好，接下来也会充满干劲的努力哦！`,
      );
    }
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜', maru);
    await maru.say_and_wait(
      `虽然想为了来看比赛的后辈们拿下第一的，不过我的实力还不够呢……`,
    );
    era.printButton(`「你跑的并不差！」`, 1);
    era.printButton(`「下次要拿第一名！」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(`呵呵，训练员在安慰我吧。谢谢你。`);
      await maru.say_and_wait(
        `不过…….哎呀，居然还让训练员来担心我，${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我真是没用呢。`,
      );
      await maru.say_and_wait(
        '好，下次一定要让大家看到超级跑车的风采，干脆利落的赢得第一！',
      );
    } else {
      await maru.say_and_wait('是啊，老是唉声叹气就不像我了。');
      await maru.say_and_wait(
        `下次一定要让后辈们看到 ${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'} 我拿出真本事的样子！`,
      );
      await maru.say_and_wait('和塔酱一起去海边兜风吧♪');
      await era.printAndWait(
        `后来你陪 ${maru.name} 去海边兜风，直到 ${maru.sex_code - 1 ? '她' : '他'} 尽兴为止才回家。`,
      );
    }
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛败北', maru);
    await maru.say_and_wait('伤心……');
    await maru.say_and_wait(`抱歉呢……训练员。没能让你看到我帅气的模样…….`);
    era.printButton(`「期待下一次的表现！」`, 1);
    era.printButton(`「垂头丧气也没有用！」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(`……你真温柔呢，训练员。`);
      await maru.say_and_wait(
        `……好，那我们得快点回去训练才行！下一次一定要让你看到我帅气的一面！`,
      );
    } else {
      await maru.say_and_wait('……说的也是呢。垂头丧气也不能让我跑的更快。');
      await maru.say_and_wait(
        '所以我不能在沮丧下去了。要向就算撞凹了也能马上修好的塔酱一样！',
      );
      await maru.say_and_wait('好！我的修理到此结束。得快点加满油好好冲刺！');
    }
  } else {
    return true;
  }
};
