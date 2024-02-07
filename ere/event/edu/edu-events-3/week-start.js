const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');

const { add_event, cb_enum } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const HookArg = require('#/data/event/hook-arg');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async () => {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:3:育成回合计时'),
    event_marks = new TeioEduMarks();
  let wait_flag = false;
  if (edu_weeks === 47 + 1) {
    await print_event_name('新年的抱负', teio);
    await teio.say_and_wait('训练员训练员～今天是我们这个组合，第一次跨年哦！');
    era.println();

    await era.printAndWait(
      `${me.name} 看着穿着私服，在房间里兴奋地上蹿下跳的帝王，眼角抽动了几下。`,
    );
    await era.printAndWait('真是活力十足啊……自己是不是选了个小祖宗过来？');
    era.println();

    await teio.say_and_wait('呐呐！训练员怎么没什么精神啊，来陪我玩啦！');
    era.println();

    era.printButton('「来吃饭吧，先吃完再说」', 1);
    await era.input();

    await era.printAndWait(
      `${me.name} 把大锅炖菜搬到桌上，${teio.sex}一听开饭便一下子溜了过来，端坐在椅子上，顺便帮 ${me.name} 分好了餐具。`,
    );
    await era.printAndWait(
      `${me.name}们 一起开心地享用了一顿新年晚宴。温馨欢乐的气氛让 ${me.name} 不禁觉得与${teio.sex}一起，就像一个小家一样。`,
    );
    era.println();

    await teio.say_and_wait(
      '训练员，我的新年愿望和我之前说的一样哦！不败三冠，我要成为传说中的帝王！',
    );
    era.println();

    await era.printAndWait(
      `${teio.get_teen_sex_title()}的话语虽然还有点孩子气，不过可以听出${
        teio.sex
      }是认真的。`,
    );
    era.println();

    era.print(`${me.name} ——`);
    era.printButton('「没错，就保持这股气势吧！」', 1);
    era.printButton('「嗯，让我们一起努力，迈向胜利！」', 2);
    era.printButton('「唔……按照你的目标，我们似乎得调整一下」', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        wait_flag =
          get_attr_and_print_in_event(3, [0, 0, 0, 20, 0], 0) || wait_flag;
        break;
      case 2:
        wait_flag =
          get_attr_and_print_in_event(3, [0, 20, 0, 0, 0], 0) || wait_flag;
        break;
      case 3:
        wait_flag =
          get_attr_and_print_in_event(3, new Array(5).fill(0), 20) || wait_flag;
    }
    era.set('cflag:3:节日事件标记', 0);
  } else if (edu_weeks === 47 + 12) {
    await print_event_name('记者招待会', teio);
    await era.printAndWait(
      `被灯光和话筒所围绕，镜头前的每个人都用混杂着好奇和饥渴的眼神注视着 ${
        me.name
      }们。${me.name} 看了看旁边的小${teio.get_uma_sex_title()}，${
        teio.sex
      }显然不习惯这样的事情——无敌的帝王大人也有怯场的时候。`,
    );
    await era.printAndWait(
      `不易察觉地，${me.name} 轻轻碰了碰${teio.sex}的手，安抚一下${teio.sex}的心情，不料${teio.sex}却反手回握住 ${me.name}，微微出汗的小手掌心触感鲜明，${me.name} 稍楞了一下想抽出手来，不过还是决定换一种方式。${me.name} 略用力紧了紧${teio.sex}的手，止住${teio.sex}的颤抖。`,
    );
    era.println();
    await era.printAndWait(
      `面对摄像头和记者的提问，${me.name} 发挥超常，回答的完美又风趣。在 ${me.name} 的带动下，帝王的心态也渐渐好了起来，${teio.sex}也大方开心地分享了关于自己的事情，特别是理想。`,
    );
    await era.printAndWait(
      `${me.name} 也在众人面前，保证会帮助 ${teio.sex} 把梦想变成现实。`,
    );
    await era.printAndWait('记者会在掌声中落下帷幕。');
    era.println();
    wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
    wait_flag =
      get_attr_and_print_in_event(3, [15, 0, 0, 10, 0], 0) || wait_flag;
  } else if (edu_weeks === 95 + 5) {
    await print_event_name('放弃', teio);
    await me.say_and_wait('帝王，我们必须严肃地谈谈这个问题');
    era.println();

    await era.printAndWait(
      `${me.name} 的手上拿着医生给的资料，以及自己收集的材料，其中无一不在说明东海帝王腿部现今的情况。`,
    );
    await era.printAndWait(
      `如果不加以修养……恐怕${teio.sex}的腿在跑完下次比赛之时，就会成为一辈子的伤痛吧。`,
    );
    era.println();

    await me.say_and_wait(
      `帝王，你的腿脚构造就算是在${teio.get_uma_sex_title()}中，也算是与众不同的，这种结构带给你独有的跑法，但这种“帝王舞步”实际上是透支自己的身体。`,
    );
    await me.say_and_wait(
      '上次比赛的失速，上上次比赛后的伤，只不过是前兆。对你来说最重要的双腿……有可能彻底毁掉',
    );
    era.printButton('「医生和我都同意……让你暂时离开赛场，修养一段时间。」', 1);
    await era.input();
    await me.say_and_wait(
      '这段时间内我们会尽全力帮助你治疗的。校方那边也已经打过招呼了，这是对你一生有益的事情。',
    );

    await era.printAndWait(
      `${me.name} 看着紧紧抿着嘴唇，低下头的自家担当，心里一阵难受，但还是咬咬牙，这是为了${teio.sex}好，${me.name} 在心底对自己说。`,
    );
    era.println();
    await teio.say_and_wait('不……');
    era.println();
    await era.printAndWait(
      `细微却坚定的声音响起，${me.name} 叹了口气，早就料想到这样不是吗。`,
    );
    era.println();
    await era.printAndWait(
      `转眼间，${teio.get_teen_sex_title()}已经抬起来头，${
        me.name
      } 能看到有液体汇聚在眼角，让${
        teio.sex
      }本来就如蓝宝石一般的眼睛更加晶莹剔透。`,
    );
    era.println();
    await teio.say_and_wait(
      '我不能放弃春天皇赏……那样的话，就等于我自己放弃了自己的三冠梦！那么，我至今的奋斗……又是为了什么？',
    );
    era.println();
    await teio.say_and_wait(
      '再说，我天生有这样的身体，难道不是证明我一定能依靠它实现奔跑的梦想吗！我是不会认可其他结局的……我不想避战！',
    );
    era.println();
    await era.printAndWait(
      `${teio.get_teen_sex_title()}倔强的眼神与你对视，你能看到${
        teio.sex
      }瞳孔中自己的倒影。${teio.sex}最亲密的人，如今却“背叛”了${teio.sex}……${
        me.name
      } 看着自己的镜像，不是滋味。`,
    );
    era.println();
    await teio.say_and_wait('这是我一生一次的请求……求你了');
    era.println();
    await era.printAndWait(`${me.name} 决定——`);
    era.printButton(`「我用训练员的身份要求你，放弃下次比赛。」`, 1);
    era.print('【若选择此项，东海帝王将强制避战春季天皇赏】', {
      offset: 1,
      width: 23,
    });
    era.printButton(`「你是我的担当马娘，我会一直支持你的梦想前行的。」`, 2);
    era.print(
      `【若选择此项，帝王的腿伤将不可逆转，你是否有了与${teio.sex}从一齐跌入低谷相互搀扶爬升的心理准备？】`,
      { offset: 1, width: 23, color: buff_colors[3] },
    );
    let ret = await era.input();
    if (ret === 2) {
      era.print(
        `【警告，若选择此项帝王的腿伤将不可逆转，你是否有了与${teio.sex}从一齐跌入低谷相互搀扶爬升的心理准备？】`,
        { color: buff_colors[3] },
      );
      era.printButton('还是算了', 1);
      era.printButton('准备好了！', 2);
      ret = await era.input();
    }
    if (ret === 1) {
      await era.printAndWait(
        `${teio.get_teen_sex_title()}眼含泪光，但终究，还是被 ${
          me.name
        } 压制住了。${teio.sex}沉默地离去，夕阳在${
          teio.sex
        }身后拖出一道长长的影子。`,
      );
      era.println();
      // TODO 技能【帝王舞步】消失
      wait_flag =
        get_attr_and_print_in_event(3, new Array(5).fill(5), 20) || wait_flag;
      event_marks.give_up++;
    } else {
      await era.printAndWait(
        `${teio.get_teen_sex_title()}破涕为笑，握着 ${
          me.name
        } 的手，体温烘暖了接触的部位。${
          me.name
        } 紧锁眉头，不知道自己的选择是对是错。`,
      );
      await era.printAndWait('但是，训练员就是为了实现马娘梦想的职业……对吧？');
      era.println();
      wait_flag = sys_like_chara(3, 0, 10, true, 1) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        3,
        undefined,
        0,
        JSON.parse('{"体力":-150,"精力":-50}'),
      );
    }
  } else if (edu_weeks === 95 + 14) {
    await print_event_name('粉丝感谢祭', teio);
    if (event_marks.give_up) {
      await era.printAndWait(
        `虽然 ${me.name} 和东海帝王已经宣布了将要避战的消息，不过粉丝们的热情还是一如既往。`,
      );
      await era.printAndWait(
        `听到了腿伤的理由后都纷纷表示理解，并对 ${me.name}们 送上了祝福。`,
      );
      await era.printAndWait(`帝王的神情看来也回复了以前朝气的样子……`);
      await era.printAndWait(
        `或许吧。如果 ${me.name} 扮一次黑脸就能让${teio.sex}一直这样的话，那也没什么大不了……`,
      );
    } else {
      await era.printAndWait(`临上台前，${me.name} 再度帮助帝王梳理着毛发。`);
      await era.printAndWait(
        `其实今天已经做了好几遍类似的动作，不过，${me.name}们 都默契地没人点破，或许这也是梳理内心的方式。`,
      );
      await era.printAndWait(
        '踏入场中，面对着不远而来的众多粉丝，帝王又向往常一样展露出自信的模样，即兴的帝王舞步·改让现场气氛活跃至极。',
      );
      await era.printAndWait(
        `${me.name} 却悄然隐藏进幕布里，思考着即将到来的比赛。`,
      );
      await era.printAndWait(
        `帝王今日表现得越是出色，${me.name} 脑海中的警铃声便越大……`,
      );
    }
  } else if (edu_weeks === 95 + 17) {
    await print_event_name('新闻发布会', teio);
    await era.printAndWait(
      ` ${me.name} 整理了一下领带，最后对着镜子打量了下自己。`,
    );
    await era.printAndWait('——唔，没什么好说的。');
    await era.printAndWait('也没什么好做的了。');
    await era.printAndWait(
      ` ${me.name} 看了眼手表，时间很紧，已经不能在说服自己找借口拖延了。`,
    );
    await era.printAndWait('深呼吸，努力放松。');
    await era.printAndWait(` ${me.name} 走出了卫生间，走向了自己的毁灭。`);
    era.println();
    await era.printAndWait(
      `这次新闻发布会，${me.name} 没有带上帝王，对外界的说法是需要治疗静养，不过 ${me.name} 也觉得${teio.sex}这种状态出席只对${teio.sex}百害而无一利。坏消息是——这样一来，${me.name} 得自己承担所有了。`,
    );
    await era.printAndWait(`不过想必 ${me.name} 早有这种心理准备了，不是吗？`);
    era.println();
    await era.printAndWait(
      `来到会场，在无数聚光灯和镜头前，应付牙尖嘴利的记者，${me.name} 用尽平生力气，争取沉稳，有理作答。浑身的汗已经湿透了内衫，不过总算是要熬过去了，感谢特雷森提供的培训，${me.name} 一边暗自心想，一边集中精力回答各种刁钻的提问。而真正要命的，也终于——`,
    );
    era.println();
    await era.printAndWait(
      `记者A「请问，我们听专家分析，东海帝王的伤势源自于${teio.sex}的独特跑法，那么您作为${teio.sex}的训练员，想必不会不清楚这个情况吧，也就是说，您在明知这个问题的情况下，仍然让${teio.sex}去上场而酿成如今的惨剧吗？」`,
    );
    era.println();
    await era.printAndWait('——来了。');
    await era.printAndWait('必须慎重。');
    await era.printAndWait(`这个回答或许关乎于 ${me.name} 的职业生涯。`);
    await era.printAndWait(`${me.name} 决定——`);
    era.printButton(
      `「并不十分清楚，是东海帝王向我要求出战的，我只不过是顺应了担当的想法」`,
      1,
    );
    era.printButton(`「我是${teio.sex}的训练员，一切责任由我承担。」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `人群窃窃私语了好一会才平静下来，${me.name} 知道他们会有什么反应，不过也不关心了。`,
      );
    } else {
      era.get('love:3') >= 75 &&
        add_event(event_hooks.week_end, new EventObject(3, cb_enum.edu));
      await era.printAndWait('一片哗然。');
      await era.printAndWait(
        '不过，说完这个爆炸一样的话语，剩下的也没什么好应付的了。',
      );
      await era.printAndWait('终于，熬到结束了。');
      await era.printAndWait(
        `聚光灯撤下，记者们和摄影师在提完问题后，慢慢散去，最终，舞台上只留 ${me.name} 一人，正当 ${me.name} 长出一口气准备离去时——`,
      );
      era.println();
      await era.printAndWait('粉丝A「为什么……」');
      era.println();
      await era.printAndWait(` ${me.name} 疑惑地抬起头。`);
      era.println();
      await era.printAndWait('粉丝B「可恶……」');
      era.println();
      await era.printAndWait(
        `两个没见过的人突然出现在室内，看来是人群散去之后溜进来的。`,
      );
      era.println();
      await era.printAndWait(`粉丝A「你毁了${teio.sex}！」`);
      era.println();
      await era.printAndWait(
        `粉丝B「就因为你自私，只追求成绩而毫不关心${teio.get_uma_sex_title()}的态度，你让东海帝王变成了现在这个样子！」`,
      );
      era.println();
      await era.printAndWait(
        `粉丝A「然后你这声称是训练员的家伙……完全可以拍拍屁股走人！声称的负责只不过是在别人面前说几句话，鞠个躬道个歉，大不了避纪念风头后再找新的苗子签契约！而原先${teio.get_uma_sex_title()}的一生可是就直接被毁掉了啊！」`,
      );
      era.println();
      await era.printAndWait(
        `两个人靠过来，怒气冲冲地瞪着 ${me.name}，${me.name} 与他们对视，却欲言又止。`,
      );
      await era.printAndWait(
        '他们的眼神中，充满的除了怒火和哀怨，还有一种空洞。',
      );
      await era.printAndWait('那是失去梦想的眼神。');
      await era.printAndWait(`——${me.name} 贩卖的是梦想。`);
      await era.printAndWait(`——${me.name} 杀死了给予我们梦想的人。`);
      await era.printAndWait('三双眼睛各自将情绪掩藏在心底，互相瞪视着。');
      era.printButton(`「我会负责的。」`, 1);
      await era.input();
      await me.say_and_wait(
        `等到${teio.sex}重新复出的那天……你们会看到，${teio.sex}还是帝王。`,
      );
    }
  } else if (edu_weeks === 95 + 19) {
    await print_event_name('交涉', teio);
    await me.say_and_wait('这次又是什么……');
    await era.printAndWait(
      `${me.name} 盯着陌生的房间，犹豫了一下，还是敲了敲门，立刻，门就开了。${me.name} 走入其中。`,
    );
    era.println();
    await era.printAndWait(
      `当时春季天皇赏赛后，${me.name} 被学校管理层叫去单独开会，并且让 ${
        me.name
      } 去见一位已经退居二线的资深训练员前辈寻求指导，这位训练员在业界里很有名气，指导过无数名${teio.get_uma_sex_title()}，当 ${
        me.name
      } 还在学生时代时，还曾有幸当过她一学期的学生。${
        me.name
      } 没有理由推脱这件事，便于今日来到了这里。`,
    );
    era.println();
    await era.printAndWait(
      `一位中年妇人端坐在椅子上等着 ${me.name}，桌上是一些资料，${me.name} 行礼后便坐下，顺势扫了一眼桌面，果不其然，是关于契约关系的表格。`,
    );
    era.println();
    await era.printAndWait(
      `中年妇人「你就是${me.actual_name}吧？我还对你有印象，现在已经成了个小有名气的训练员啊。」`,
    );
    era.println();
    await era.printAndWait(`${me.name} 点点头，算是回应。`);
    era.println();
    await era.printAndWait(
      `中年妇人「我今天来是受校方之托，跟你谈一些关于你，和你的担当${teio.get_uma_sex_title()} ${
        teio.name
      } 的事情。」`,
    );
    era.println();
    await era.printAndWait(
      `听到${teio.sex}的名字，${me.name} 虽早有准备却仍不禁心下一沉，终于还是来了吗—— ${me.name} 心想。`,
    );
    era.println();
    await era.printAndWait(
      `中年妇人「我们就单刀直入吧——你是因为顺应了${teio.get_uma_sex_title()}的想法才会导致今天的失利吧？错不在你。而事实上，对训练员而言，实现自己目标的机会也有很多，一次培育失败，你完全可以解除契约后再签订新的${teio.get_uma_sex_title()}。我今天给你提供这个选择——与你的现担当解约吧，我保证你以后还能签约其他优秀的孩子，也保证你的原担当会得到我们最好的照顾。」`,
    );
    await era.printAndWait(
      `虽然 ${me.name} 早有会听到什么的心理准备，但仍不禁愕然。`,
    );
    era.println();
    await era.printAndWait(
      '中年妇人「你是有潜力的——浪费在这里着实可惜，不是吗？要为自己的前途而考虑啊。不要绑死在一棵树上。」',
    );
    era.println();
    await era.printAndWait(`${me.name} 的答复是——`);
    era.printButton('「我……同意您的看法。」', 1, {
      disabled: event_marks.abandon_disabled > 0,
    });
    era.print('【若选择此项，一切将无可挽回！请确认是否保存了存档！】', {
      offset: 1,
      width: 23,
      color: buff_colors[3],
    });
    era.printButton('「不。」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${me.name} 默默在解约书上签下了自己的名字，浑浑噩噩地办理了手续，走出了房间，越走越快，${me.name} 的情绪已经无法稳定，终于，在路人的惊讶神色中，${me.name} 一边吼着，一边逃也似的奔向家中。`,
      );
      await era.printAndWait(
        `${me.name} 再也没有勇气去见 ${teio.name}，${teio.sex}和 ${me.name} 的人生，就此分别。`,
      );
      era.set('flag:强制BE', 3);
      era.set('cflag:3:招募状态', recruit_flags.no);
    } else {
      await era.printAndWait(`${me.name} 听到自己的声音回荡在室内。`);
      era.println();
      await me.say_and_wait(
        `您说的非常正确……对于训练员而言，还有很多机会。为了自己的前途，不如及时放弃失败了的担当，另选${teio.sex}人……`,
      );
      era.println();
      await era.printAndWait(
        `中年妇人端坐在椅子上，眯起眼睛听着 ${me.name} 的回复。`,
      );
      era.println();
      await me.say_and_wait(
        '我知道，固执地执着于一个没有未来的学生，对我们两边而言都不是好事，并且我也理解职业上做出的妥协。',
      );
      era.println();
      await me.say_and_wait(
        '但是真的听到您说出这种话……又经我之口复述了一遍……这让我感到无法接受。',
      );
      era.println();
      era.printButton('「因此，我拒绝接受」', 1);
      await era.input();
      await me.say_and_wait(
        `特雷森的训练员制度，是对${teio.get_uma_sex_title()}成长的帮扶不可缺少的部分。而训练员的任务，就是对自己的担当${teio.get_uma_sex_title()}负起责任。`,
      );
      era.println();
      era.printButton(`我作为 ${teio.name} 的专属训练员，会做应行之事。`, 1);
      await era.input();
      await era.printAndWait('中年妇人「好孩子。」');
      await era.printAndWait('中年妇人笑了笑');
      await era.printAndWait(
        `她抬起手，把桌上的文件收好，接着又对 ${me.name} 微笑了一下。`,
      );
      era.println();
      await era.printAndWait(
        '中年妇人「这是一条险路，不过你选择了它，也令人赞赏。加油吧，我祝福你们——也会竭尽所能地给你们一些帮助。」',
      );
      era.println();
      await era.printAndWait(
        `${me.name} 被请出了房间，虽然不免有些云里雾里，不过 ${me.name} 的心底，还是坚定下了信念——帮助 ${teio.name} 实现${teio.sex}的梦想。`,
      );
      era.println();
      await era.printAndWait(
        `事后不知为何，关于 ${me.name} 的风言风语少了很多，特雷森方面也给了 ${me.name} 一些支持。`,
      );
      sys_change_fame(10);
      sys_change_money(300);
    }
  } else if (edu_weeks === 143 + 9 && !era.get('cflag:3:可再次育成')) {
    await require('#/event/edu/edu-common')(
      3,
      new HookArg(event_hooks.week_start),
    );
    era.println();
    await teio.say_and_wait(
      event_marks.give_up
        ? '我的名字是东海帝王。东海——帝王！'
        : '这是，属于我们的丰碑——',
    );
  }
  wait_flag && (await era.waitAnyKey());
};
