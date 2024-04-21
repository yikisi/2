const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');
const { attr_names, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(HookArg,*,EventObject):Promise<*>>}*/
const handlers = {};

handlers[event_hooks.week_start] = async function (hook, _, event_object) {
  const relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32),
    coffee = get_chara_talk(25),
    vega = get_chara_talk(33),
    event_marks = new TachyonEduMarks(),
    edu_weeks = era.get('cflag:32:育成回合计时');
  /*
  if (event_marks.restart === 1) {
    event_marks.restart++;
    await print_event_name(`rewrite！`, tachyon);
    await era.printAndWait(`今天，速子忽然兴高采烈的跑进了训练员室`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君！豚鼠君！我知道了(Eureka)……我知道(Eureka)了！`,
    );
    era.println();
    await era.printAndWait(`听见这莫名耳熟的句式，你紧张的看了看速子，`);
    await era.printAndWait(
      `却让${tachyon.sex}身上穿的并不是浴巾，也不像是刚洗完澡就跑出来的样子才稍微放下心来`,
    );
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君！我发现了……最大的可能性……没错……为什么，之前一直没注意到`,
    );
    era.println();
    await era.printAndWait(`究竟在说什么呢`);
    await era.printAndWait(`你一脸茫然的看着速子`);
    await era.printAndWait(`不知为何，你忽然有种陌生的感觉`);
    await era.printAndWait(
      `明明已经一起经历了许多，好不容易才走过了最初的三年`,
    );
    await era.printAndWait(`彼此应该是知根知底的才对`);
    await era.printAndWait(`为什么，忽然会有一种难以言喻的陌生感`);
    era.printButton(`速子？你在说什么？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `哦呀，我还没说明吗？真是……太激动了，导致完全忘记了`,
    );
    await tachyon.say_and_wait(`嘛，简单来讲，就是所谓的————平行世界`);
    await tachyon.say_and_wait(
      `如果将时间比喻成一条长河的话，在这条河上，有着各种不同的支流`,
    );
    await tachyon.say_and_wait(
      `这些支流，大多都是极为细小，没有办法单成一河的分岔`,
    );
    await tachyon.say_and_wait(
      `但是……在某些情况下，河流会在某些节点，会产生足够大的分支———`,
    );
    await tachyon.say_and_wait(`这些节点，就是所谓的可能性`);
    await tachyon.say_and_wait(
      `这些分支，也会化作河流往下流动，而产生的这条支流，便是平行世界的存在`,
    );
    era.println();
    await era.printAndWait(`平行世界`);
    await era.printAndWait(`是在各种科幻或者玄幻小说中都经常出现的主题`);
    await era.printAndWait(`但没想到速子居然会相信这些`);
    era.printButton(`但说到底，这种东西也没有人能验证他的真假不是吗`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`嗯……你说的对`);
    await tachyon.say_and_wait(
      `科学无论如何都是要小心求证的……虽然假设是这样，但到底该如何证明平行世界的存在与否……`,
    );
    await tachyon.say_and_wait(
      `到底该怎么证明呢……果然，还是必须要有某个，可能穿越，`,
    );
    await tachyon.say_and_wait(
      `有办法在世界中穿梭而不干涉原先记忆的人，到底哪里会有这种人呢……真是，苦恼呢`,
    );
    era.println();
    await era.printAndWait(`速子在讲的时候，不断将眼神朝向你这边瞄着`);
    era.printButton(`…………`, 1);
    era.printButton(`速子？什么意思？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await tachyon.say_and_wait(
        `呵呵……看来你很清楚我在说的是什么啊，豚鼠君……还是说，应该称呼你为……`,
      );
      await tachyon.say_and_wait(
        `不，算了，我不管你在其他地方是谁，在这里，你就是我的豚鼠君，除此之外没有其他身份`,
      );
    } else {
      await tachyon.say_and_wait(
        `哦？真的不知道……还是在装傻？罢了，不重要，反正在这里你就是我的豚鼠君，没有其他身份`,
      );
      era.println();
      await tachyon.say_and_wait(
        `过，真是令人好奇啊……其他世界，具有其他可能性的${tachyon.name}，到底会是什么样……`,
      );
      await tachyon.say_and_wait(
        `会不会有早就跨越了极限，又或者被困在原地，止步于可能性之前的${tachyon.name}……`,
      );
      await tachyon.say_and_wait(
        `豚鼠君，你一定要好好的留下记录啊，就当成你这次出差的研究课题了`,
      );
      era.println();
      await era.printAndWait(`……欸？`);
      await era.printAndWait(`等一下，什么情况？`);
      await era.printAndWait(`为什么从刚刚开始，就一直在说些听不懂的话`);
      await era.printAndWait(
        `虽说速子本来就是这种自说自话的人，但今天也太过头了`,
      );
      era.println();
      era.printButton(`速子？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`还有————哦呀，看来时间差不多了`);
      era.println();
      await era.printAndWait(`时间？`);
      await era.printAndWait(`什么时间？`);
      await era.printAndWait(`你回过头，忽然发现一切都消失了`);
      await era.printAndWait(`只剩下一片空白`);
      await era.printAndWait(`一片苍白的空间中，只有前方，一扇古旧深桐的木门`);
      await era.printAndWait(
        `印象中仿佛见过，踩着彩色光芒的${tachyon.get_uma_sex_title()}从门里跑出的画面`,
      );
      await era.printAndWait(
        `转过头来，速子不知何时已经不在，整个空间中仅剩你一人和眼前的门`,
      );
      await era.printAndWait(`空间中却还回荡着，速子最后的一句话`);
      if (love < 50) {
        await tachyon.say_and_wait(`一定不要忘了，实验数据啊！`);
        era.println();
        await era.printAndWait(`速子那狂热的声音在你耳边回荡`);
        await era.printAndWait(`你仿佛看见${tachyon.sex}那因研究而陷入狂热的表情`);
      } else if (love < 90 && love > 50) {
        await tachyon.say_and_wait(`一定，要把实验数据带回来哦`);
        era.println();
        await era.printAndWait(`听见${tachyon.sex}的最后一句话，你愣了愣`);
        await era.printAndWait(`明面上是${tachyon.sex}对实验数据的狂热`);
        await era.printAndWait(`但你却听出了话中的另一层意思`);
        await tachyon.say_and_wait(`一定，要回来哦`);
      } else {
        await tachyon.say_and_wait(
          `真令人烦恼……那个世界的我一定也会爱上豚鼠君吧，情敌增加了呢`,
        );
        era.println();
        await era.printAndWait(`最后的最后，说的却是这样仿佛无关紧要的闲话`);
        await era.printAndWait(`那是因为……除此之外的已经无须说明`);
        await era.printAndWait(
          `实验数据？身为${tachyon.sex}的爱人，没有不满足${tachyon.sex}的好奇心的理由`,
        );
        await era.printAndWait(`一定要回来？哪怕不用速子来说，也一定会回来的`);
        await era.printAndWait(
          `整个过程就宛如自己只是要出门去打酱油一般稀松平常`,
        );
        era.println();
        await era.printAndWait(`那么……`);
        await era.printAndWait(`你朝着大门伸手`);
        await era.printAndWait(`这一次遇到的，会是怎么样的速子呢？`);
      }
    }
  } else if (event_marks.reforger === 1) {
    event_marks.reforger++;
    await print_event_name(`reforger`, tachyon);
    if (love > 75) {
      await tachyon.say_and_wait(`早上好啊，豚鼠君，或者说……好久不见？`);
      await tachyon.say_and_wait(`不，果然还是这样比较好吧……欢迎回来❤`);
    } else {
      switch (get_random_value(0, 3)) {
        case 0:
          await tachyon.say_and_wait(`哦？豚鼠君，又要去寻找新的可能性了吗？`);
          break;
        case 1:
          await tachyon.say_and_wait(
            `哦呀，既然回来了，那就赶快先把实验数据交出来！`,
          );
          break;
        case 2:
          await tachyon.say_and_wait(`这样啊……听起来真不错呢`);
          await tachyon.say_and_wait(`那么时间也差不多了，对吧？`);
          await tachyon.say_and_wait(`下次再聊吧，豚鼠君`);
          break;
      }
    }
  }*/
  if (edu_weeks === 16) {
    // todo 速度+5
    await print_event_name(`实验课题的订定`, tachyon);
    await tachyon.say_and_wait(`想要跑的比赛？`);
    era.println();
    await era.printAndWait(
      `某旧理科准备室，或者说${tachyon.name}的实验室内，你坐在小沙发上对着在实验桌前的速子点了点头`,
    );
    await era.printAndWait(
      `虽然说这似乎是与${tachyon.get_uma_sex_title()}签约的第一天就该问的事情，但当时的你似乎太为速子着迷而导致几乎完全忘了这回事`,
    );
    await era.printAndWait(
      `无论如何，既然打算参加闪耀系列赛，赛程的规划就一定是必须的，在问出${tachyon.sex}的选择后，才能更好的为${tachyon.sex}安排训练的针对方向`,
    );
    await era.printAndWait(`不管是三冠路线还是后冠，又或者英里？`);
    await era.printAndWait(
      `短距离……大概不行吧，虽然很抱歉但速子应该是没有那方面适性的`,
    );
    era.println();
    await tachyon.say_and_wait(`……比赛？不感兴趣`);
    await tachyon.say_and_wait(
      `说到底我的研究是为了自身的可能性，别人如何与我何干，比较强弱，那是小孩子的游戏罢了`,
    );
    await era.printAndWait(`非常有速子特征的回答`);
    await era.printAndWait(`说实话，${tachyon.sex}会这样回答完全不令人意外`);
    await era.printAndWait(`但是，身为训练员而言，还是有着应尽的责任在`);
    await era.printAndWait(
      `而且……身为被${tachyon.sex}所吸引了目光的粉丝，想要看见自己的偶像在更大的舞台之上绽放光芒，这不也是理所当然的吗？`,
    );
    era.println();
    await era.printAndWait(`因此，你整理好语言，开口说道`);
    era.println();
    if (relation < 225 && love < 50) {
      era.printButton(
        `要是参加比赛的话，比赛后的奖金不是可以用在实验上吗，这样研究经费的问题就解决了吧`,
        1,
      );
      era.printButton(`因为，我想看`, 2, { disabled: true });
      await era.input();
      await era.printAndWait(
        `先诱之以利，对于${tachyon.name}这样的研究者而言，谈论感情那也未免太过可笑，最好的办法就是在道理上说服对方`,
      );
      await tachyon.say_and_wait(
        `驳回，豚鼠君，我的研究副产物本身就能够用于卖钱，`,
      );
      await tachyon.say_and_wait(
        `而为了这些比赛准备所浪费的时间在机会成本上来看已经远远大过于比赛奖金本身带来的益处了`,
      );
      era.printButton(
        `但比赛吸引而来的粉丝呢，粉丝的消费能力也能提供不少的经费吧？`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        `你说的对，如果真的能够获得人气的话那么利益或许确实会大于研究本身可带来的利益……`,
      );
      await tachyon.say_and_wait(
        `但是，那样的话花在所谓粉丝福利上的时间也需要更多，如winning live或是经营自己的社会形象等等，时间成本也会更加提升，`,
      );
      await tachyon.say_and_wait(
        `除此之外，你似乎忘了一件事，我需要钱，是用以作为实验经费，实验，才是我的根本目的，而非赚钱`,
      );
      era.println();
      await me.say_and_wait(
        `……要是放弃参加比赛的话，那算是与特雷森学园建校方针相悖的行为…`,
      );
      await me.say_and_wait(
        `虽说一般而言应该不会这么严重，但如果是前面就有过前科的速子……最坏的情况可能导致退学`,
      );
      era.println();
      await era.printAndWait(`诱之以利不行，那就威之以势，`);
      await era.printAndWait(
        `虽说这样吓唬人不大好，但不得不说这确实是有可能的走向……`,
      );
      await era.printAndWait(
        `只是那名理事长大概是不会允许这种事发生的吧，但现在姑且还是能拿来吓唬一下速子`,
      );
      era.println();
      await era.printAndWait(`但速子的反应，就彷佛听见了什么好笑的笑话一般`);
      era.println();
      await tachyon.say_and_wait(
        `豚鼠君，你还记得我们第一次见面那时候吗？那时候我就已经被退学威胁过一次了，你真的认为我会在乎吗？`,
      );
      era.println();
      await me.say_and_wait(`！`, true);
      await era.printAndWait(`瞬间被点破了盲点`);
      await era.printAndWait(
        `印象中，当时的自己听见可能退学的说法时就飞一般的去寻找${tachyon.name}了，`,
      );
      await era.printAndWait(
        `但反过来呢？当时的${tachyon.sex}，依然故我的在实验室里做着自己的实验`,
      );
      await era.printAndWait(
        `从与自己签下契约时的态度来看，也不像是有替代方案的样子`,
      );
      await era.printAndWait(
        `换句话说……${tachyon.sex}是真的不在乎被退学与否的`,
      );
      era.println();
      await era.printAndWait(
        `该怎么办……利诱不成，威逼也不成的${tachyon.sex}，到底还有什么办法……`,
      );
      era.printButton(`放弃`, 1);
      era.printButton(`继续思考`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(`束手无策，大概就是此时你的状态吧`);
        await era.printAndWait(
          `已经毫无办法，对${tachyon.name}而言，${tachyon.sex}的所需都没有必要从比赛中获得`,
        );
        await era.printAndWait(
          `这样的你，也只能使出前面自己最不认为会被接受的办法了`,
        );
        era.println();
        await tachyon.say_and_wait(`那么，豚鼠君，你还有什么说服我的办法吗？`);
        era.println();
        await era.printAndWait(
          `${tachyon.sex}饶有兴致的看着你，下一秒脸上的兴趣却转为了吃惊`,
        );
        await era.printAndWait(
          `原因也很简单，无论任何人，看见原本好端端在自己身前说话的人忽然跪坐在地，也一定会露出吃惊的表情吧`,
        );
        era.println();
        era.printButton(`因为……想看`, 1);
        await era.input();
        era.printButton(`我想看见速子在赛场上奔跑的模样，`, 1);
        await era.input();
        era.printButton(
          `想看见速子与其他${tachyon.get_uma_sex_title()}在拼斗后最后赢下的样子，`,
          1,
        );
        await era.input();
        era.printButton(`想看速子站在winning live的中心C位闪烁的模样！`, 1);
        await era.input();
        era.println();
        await era.printAndWait(
          `声音越说越强，人也越说越激动，到最后一句几乎是用喊的喊出来的`,
        );
        await era.printAndWait(
          `最后的动之以情，发自内心把自己心中的话说出，希望能够被速子听进去`,
        );
        await era.printAndWait(`虽说……一切大概只是自己的自作多情而已`);
        era.println();
        await era.printAndWait(`你战战兢兢的将头贴在地上，等待着对方的回答`);
        era.println();
        await tachyon.say_and_wait(`………就为了这种事……下跪？`);
        era.println();
        await era.printAndWait(`你没有抬起头，只是继续跪在地上`);
        era.println();
        await tachyon.say_and_wait(`我不在乎比赛，不在乎是否退学，`);
        await tachyon.say_and_wait(
          `说坦白讲，跟着这样的${tachyon.get_uma_sex_title()}也只会造成困扰吧……`,
        );
        await tachyon.say_and_wait(
          `如果我是你的话，我会选择在现在就因为协商不一提出负责合同的解除……结果你……`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}似乎想不到该怎么形容你的行为，因此一时语顿`,
        );
        era.println();
        await tachyon.say_and_wait(
          `…………你的脑袋到底在想什么，有这个必要吗？值得吗？`,
        );
        era.println();
        await era.printAndWait(`你没有说话，只是抬起头来，看向${tachyon.sex}`);
      } else {
        await era.printAndWait(
          `忽然，你彷佛从${tachyon.sex}的话语中得到了什么启发`,
        );
        era.println();
        await era.printAndWait(`虽说你们认识的可能，大概，或许还没有那么久`);
        await era.printAndWait(
          `但根据你对${tachyon.name}这名${tachyon.get_uma_sex_title()}的了解……`,
        );
        await era.printAndWait(
          `${tachyon.sex}是不会浪费时间在毫无意义的事情上面的`,
        );
        await era.printAndWait(`没错，不会在毫无意义的事情上`);
        await era.printAndWait(`那么换句话说`);
        era.println();
        await era.printAndWait(
          `${tachyon.sex}肯花时间去做的事情，那必然是具有其意义在的`,
        );
        await era.printAndWait(`那么，问题1`);
        era.println();
        await era.printAndWait(`${tachyon.name}，进入特雷森学园的理由是？`);
        era.println();
        await era.printAndWait(
          `如果真的没有必要，那么${tachyon.sex}必然不会如此选择`,
        );
        await era.printAndWait(`${tachyon.name}能从进入特雷森学园获得的好处……`);
        await era.printAndWait(
          `这想都不用想，从${
            tachyon.sex
          }的目标来看足以——寻找${tachyon.get_uma_sex_title()}的可能性，超越可能性的界限`,
        );
        await era.printAndWait(
          `既然如此，那就需要先研究透彻${tachyon.get_uma_sex_title()}的一切才能谈及极限`,
        );
        await era.printAndWait(
          `所以，拥有最多高质量的${tachyon.get_uma_sex_title()}所聚集的特雷森学园绝对是最佳的研究场所，没有之一`,
        );
        await era.printAndWait(
          `因此，被退学绝对不是${tachyon.sex}说的那般可有可无`,
        );
        era.println();
        await era.printAndWait(`问题2`);
        await era.printAndWait(`为什么${tachyon.name}要以学生的身份进入学园`);
        era.println();
        await era.printAndWait(
          `特雷森学园除去学生也是有着各式各样的支持职位，也有非赛${tachyon.get_uma_sex_title()}学科，如果说想避免这些麻烦为什么不从一开始就加入这些科系？`,
        );
        era.println();
        await era.printAndWait(`你彷佛捉住了什么灵感`);
        era.println();
        await era.printAndWait(
          `成为赛${tachyon.get_uma_sex_title()}的原因，就是为了上场比赛`,
        );
        await era.printAndWait(
          `如果不上场比赛的话，那么根本没有选择成为赛${tachyon.get_uma_sex_title()}的必要`,
        );
        await era.printAndWait(
          `到此，已经可以宣布速子前面说的不想参加比赛什么……`,
        );
        await era.printAndWait(
          `不知道，虽然不知道${tachyon.sex}这么骗人的理由，但是`,
        );
        await era.printAndWait(`如果只是度过眼前这关，那也不需要知道那么多`);
        era.println();
        era.printButton(`你在乎，因为实验需要验证`, 1);
        await era.input();
        era.println();
        await era.printAndWait(`没有错`);
        await era.printAndWait(`这就是参加比赛的原因`);
        await era.printAndWait(`一切都是为了研究及最终的目的`);
        era.println();
        await me.say_and_wait(
          `:如果连其他${tachyon.get_uma_sex_title()}，甚至同期都无法战胜，那还谈何超越速度极限？`,
        );
        await me.say_and_wait(
          `虽然你我都有${tachyon.name}能够战胜任何人的信心，但实验的验证依然是必须的`,
        );
        era.println();
        await era.printAndWait(`就好比1+1=2`);
        await era.printAndWait(
          `即便所有人都知道这个答案的正确与否，还是需要存在验算及式子`,
        );
        await era.printAndWait(`这不是多余的步骤，而是研究的严谨性`);
        await tachyon.say_and_wait(`……说得好，但是，还有仿真赛呢？`);
        await tachyon.say_and_wait(
          `哪怕并非比赛，我也能找到机会，与同期甚至更强的对手一较高下，也不用担心会找不到人，`,
        );
        await tachyon.say_and_wait(
          `如果说我真能表现出自己的强悍，那么沉浸于本能的那些凶兽是不会放过与我一决高下的机会的，不是吗？`,
        );
        era.println();
        await era.printAndWait(`听上去十分具有说服力的回答`);
        await era.printAndWait(
          `即便是模拟赛，只要有机会能够与${
            tachyon.name
          }这般强悍的${tachyon.get_uma_sex_title()}一较高下，那么绝对不用担心对方不会拿出100%的实力来`,
        );
        await era.printAndWait(`但是……`);
        era.println();
        era.printButton(
          `你有见过，发挥出120%实力的${tachyon.get_uma_sex_title()}吗？`,
          1,
        );
        await era.input();
        await tachyon.say_and_wait(`…………哦？`);
        await era.printAndWait(`模拟赛所能表现出来的，从来就只是平常的实力`);
        await era.printAndWait(`要想超越极限，只有在真正的赛场上才有办法`);
        await era.printAndWait(`从古至今，那么多的赛场爆冷，不都是如此？`);
        era.printButton(
          `${tachyon.get_uma_sex_title()}的特性，便是只有在赛场上才能发挥出超越极限的实力`,
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          `…………原来如此，这是你身为训练员的看法吗？除此之外呢？还有其他的理由吗？`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}依旧用着那种说不清道不明的玩味目光望着你，你不由得感到有些不自在`,
        );
        await era.printAndWait(`但你还是坚持，将埋藏在你心中最深的理由说出`);
        era.println();
        era.printButton(`…………我想看`, 1);
        await era.input();
        await tachyon.say_and_wait(`嗯？`);
        await me.say_and_wait(`我想看见速子在赛场上奔跑的模样，`);
        await me.say_and_wait(
          `想看见速子与其他${tachyon.get_uma_sex_title()}在拼斗后最后赢下的样子，`,
        );
        await me.say_and_wait(`想看速子站在winning live的中心C位闪烁的模样`);
        await tachyon.say_and_wait(`…………`);
        era.println();
      }
      await era.printAndWait(
        `${tachyon.sex}仔细端详了你的神情，随后将目光停留在你的眼睛，就如你们初次见面那时一般，凝视着你的眼眸深处`,
      );
      era.println();
      await tachyon.say_and_wait(`…………呵呵，疯子配狂人吗？有意思，有意思！`);
      era.println();
      await era.printAndWait(
        `你有些忐忑不安的望着忽然开始大笑的${tachyon.sex}`,
      );
      await era.printAndWait(
        `虽然不太明白${tachyon.sex}的情绪为何变动如此剧烈，但看起来……事态似乎在朝着对你有利的方向发展？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `既然如此，为了实验动物的积极度，有时候适度的奖励也是必须的吧。`,
      );
      await tachyon.say_and_wait(
        `我同意了，我会参加比赛的。那么既然决定了要跑，那就先简单拿下个经典三冠再说……`,
      );
      await tachyon.say_and_wait(`你不会说做不到吧，豚鼠君？`);
      era.println();
      await era.printAndWait(`但是，${tachyon.sex}补充道`);
      era.println();
      await tachyon.say_and_wait(`作为代价……可千万别让我感到无趣了啊，豚鼠君`);
      era.println();
      await era.printAndWait(`你和${tachyon.name}的目标确定了`);
    } else if (relation > 225 && love < 50) {
      era.printButton(`因为，我想看`, 1);
      await era.input();
      await tachyon.say_and_wait(`……哈？`);
      era.printButton(`我想看见速子在赛场上奔跑的模样，`, 1);
      await era.input();
      era.printButton(
        `想看见速子与其他${tachyon.get_uma_sex_title()}在拼斗后最后赢下的样子，`,
        1,
      );
      await era.input();
      era.printButton(`想看速子站在winning live的中心C位闪烁的模样！`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`以及，除此之外……`);
      await era.printAndWait(`你想了想，又补充说道`);
      era.println();
      era.printButton(
        `当然，要是，真的，如果万一的话，也想看看速子输掉比赛趴在地上不甘心的痛苦的样子！`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(`！`);
      era.println();
      await era.printAndWait(`哎呀，好像生效了？`);
      era.printButton(
        `不过，要是速子害怕输掉的话也不是不能理解，这样的话确实还是不参加的好……`,
        1,
      );
      await era.input();
      era.println();
      await era.printAndWait(
        `你又故意瞄了速子一眼，发现${tachyon.sex}的态度有些不对，连忙闭上嘴，见好就收`,
      );
      era.println();
      await tachyon.say_and_wait(
        `……居然敢把卡里古拉效应用在我身上，豚鼠君你好大的胆子啊`,
      );
      await me.say_and_wait(`我没……咕噗！！？`);
      era.println();
      await era.printAndWait(
        `你想反驳，却被站起身来的速子以重力加速度用力坐在了腹部上，使你不由得发出彷佛青蛙被压扁的声音`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哼……为了自己的一己之私，就想把天才的我的宝贵时间浪费在这种无聊的斗兽上吗？真是胆大妄为啊`,
      );
      era.printButton(
        `我不是那个意思……再说，参加比赛也可以搜集到需要的实验数据不是吗……`,
        1,
      );
      await era.input();
      era.println();
      await era.printAndWait(
        `速子调整了下，将你的姿势调整到了最适合${tachyon.sex}舒服坐着的人肉靠椅的姿势`,
      );
      await era.printAndWait(
        `你也很自然的将手抬起，放在${tachyon.sex}的肩上为${tachyon.sex}按摩`,
      );
      era.println();
      await tachyon.say_and_wait(
        `呼……真是帮大忙了，最近一直坐在实验桌前，全身酸痛的要命……`,
      );
      await tachyon.say_and_wait(`至于参加比赛……`);
      await tachyon.say_and_wait(`倒也不是不行，目标，就先订个三冠吧，`);
      await tachyon.say_and_wait(
        `要是连同期中的第一都做不到，那确实没什么资格谈论极限……`,
      );
      await tachyon.say_and_wait(`那么，豚鼠君，你会尽心尽力辅佐我的吧？`);
      era.println();
      await era.printAndWait(`你看着${tachyon.sex}疯狂的眼神，笑着说道`);
      era.println();
      era.printButton(`那是当然`, 1);
      await era.input();
      await era.printAndWait(`你和${tachyon.name}的目标确定了`);
    } else if (relation < 225 && love > 50) {
      era.printButton(
        `因为，你需要比赛，${tachyon.get_uma_sex_title()}需要比赛`,
        1,
      );
      era.printButton(`因为……`, 2, { disabled: true });
      await era.input();
      era.println();
      await era.printAndWait(`这不是猜测，也不是虚张声势，而是事实的陈述`);
      await era.printAndWait(
        `${tachyon.name}需要比赛，作为${tachyon.sex}实验的验证`,
      );
      await era.printAndWait(
        `${tachyon.get_uma_sex_title()}需要比赛，作为其斗争心的发泄`,
      );
      await era.printAndWait(
        `能够一次满足两种所需，${tachyon.sex}没有拒绝的理由`,
      );
      era.println();
      await tachyon.say_and_wait(
        `……虽然明白你的意思，但你这说法是真不讨人喜欢啊`,
      );
      era.println();
      await era.printAndWait(`速子冷冷的看着你`);
      era.println();
      await era.printAndWait(`看来，还是需要一剂猛的吗？这样的话……`);
      era.println();
      await me.say_and_wait(
        `啊，要是速子是因为怕输所以才拒绝参赛的话，那我就能够理解了，`,
      );
      await me.say_and_wait(`毕竟事关速子的尊严，这届的孩子里也有很多强者，`);
      await me.say_and_wait(
        `要是出现了实力上胜过速子的${tachyon.get_uma_sex_title()}出现，说什么超越极限的速子不就像……`,
      );
      era.println();
      await era.printAndWait(`笑话一样`);
      await era.printAndWait(
        `在看见双手一挥掏出十根试管，太阳穴青筋直冒的速子后，你不得不将后面想说出的话吞入腹中`,
      );
      await tachyon.say_and_wait(
        `豚鼠君，你这人……人不讨喜就算了，还喜欢说些主动讨打的话，是真不怕死啊`,
      );
      await me.say_and_wait(`呜呜呜呜……`);
      era.println();
      await era.printAndWait(
        `你想开口辩解，却因为嘴被速子用手捂住而说不出话来`,
      );
      era.println();
      await tachyon.say_and_wait(`让我想想……有了`);
      era.println();
      await era.printAndWait(`似乎是觉得一直这样捂着有些麻烦，速子灵光一闪`);
      await era.printAndWait(
        `同时，你的脑中也忽然闪过一阵电流，彷佛在预告有什么不好的事情将要发生`,
      );
      await era.printAndWait(
        `${tachyon.sex}缓缓拉起白大褂的下摆，此时你心中的危险预感已经达到了巅峰，可就算想跑又能往哪里跑呢？`,
      );
      await era.printAndWait(
        `更何况，从${tachyon.get_uma_sex_title()}手中逃脱？你虽然被速子称为疯狂，但也不是弱智，不会妄想那种没有可能的事情`,
      );
      era.println();
      await era.printAndWait(`白大褂的下方，是反射着润光的黑色裤袜`);
      await era.printAndWait(
        `从一大早开始，便将丰腴的臀部，纤细的美腿封藏于内的闷热裤袜，在经过了一天的窖藏，已经从里到外完全的入味完毕`,
      );
      await era.printAndWait(`加上穿着这双裤袜的，还是一向生活邋遢的速子`);
      era.println();
      await era.printAndWait(`你惊恐的摇着头，但一切已经来不及了`);
      era.println();
      await era.printAndWait(
        `${tachyon.sex}缓缓褪下裤袜，当裤袜从臀部褪下的瞬间，你彷佛看见速子的身体都因那翘臀的反弹而抖了一下`,
      );
      await era.printAndWait(
        `裤袜缓缓脱到胯部，彷佛不希望酿造至今的味道从中散去一般，黑色的丝绸却还与女孩子双腿间那神奇的部位牵连着线————`,
      );
      await era.printAndWait(
        `${tachyon.sex}今天不会没穿内裤吧？你忽然想到，看这牵丝，大概真相不言自明`,
      );
      await era.printAndWait(
        `彷佛舞台揭幕一般，接着将底下雪白的大腿肌肤露出，也象征着——惨绝人寰的悲剧即将开演`,
      );
      era.println();
      await tachyon.say_and_wait(`来，豚鼠君，张口～～`);
      era.printButton(`呜呜呜呜！！`, 1);
      await era.input();
      await era.printAndWait(
        `这样下去不行，在内心的驱使下，你还是忍不住做出了徒劳的尝试`,
      );
      await era.printAndWait(
        `你慌忙四肢着地的想逃出实验室，但也如预想的一般，只踏出去一步就被速子以人类无法反应过来的速度坐在了背上`,
      );
      await era.printAndWait(
        `${tachyon.sex}骑在你的背上，用裤袜勒住了你的嘴，就彷佛口球一般将你固定住，被勒的受不了的你张开了嘴，裤袜顺势卡住了你的脸颊及嘴角`,
      );
      await era.printAndWait(
        `瞬间，酸爽的臭味弥漫了你的口中，濡湿的口感，以及淡淡来自胯下的骚臭味从你的鼻腔侵入，被这猛烈的气味攻势突袭，导致你不由得四肢发软跪倒在地`,
      );
      era.println();
      await tachyon.say_and_wait(`哼……稍微出了口恶气了，回到正题来吧。`);
      await tachyon.say_and_wait(`参加比赛当然是必须的，至于选择的赛事……`);
      await tachyon.say_and_wait(
        `呵呵，那么就以三冠为目标吧，刚刚说成那样，要是敢拖了我的后腿小心剥了你的皮，没有异议吧？`,
      );
      era.println();
      await era.printAndWait(
        `在被熏的失去意识前，你的最后一个想法是：哪怕有意见也要你让我说出口啊……`,
      );
    } else if (relation > 225 && love > 50) {
      era.printButton(`因为……`, 1);
      await era.input();
      await era.printAndWait(
        `你正想说出口，却被转过身来的速子按住了嘴唇无法开口`,
      );
      await era.printAndWait(
        `${tachyon.sex}站起身来，压住了坐在沙发上的你，与你四目相对的凝视着`,
      );
      era.println();
      await tachyon.say_and_wait(
        `我知道你想说什么，也知道于公于私我都有参加比赛的理由及必要性，但是……`,
      );
      era.println();
      await era.printAndWait(
        `${tachyon.sex}转过身来，一屁股坐在你的大腿上，拍了拍你的大腿外侧`,
      );
      era.println();
      await tachyon.say_and_wait(
        `但我现在没有参加比赛的兴致，所以好好想想办法，说些话来讨好我吧，要是心情好了……说不定我就愿意参赛了呢？`,
      );
      era.println();
      await era.printAndWait(`你露出苦笑，环抱住速子的腰`);
      await era.printAndWait(
        `${tachyon.sex}十分自然的往里蹭了蹭，调整成最舒服的姿势`,
      );
      era.println();
      await era.printAndWait(`速子最帅了`);
      await era.printAndWait(`速子好可爱`);
      await era.printAndWait(`速子好漂亮`);
      await era.printAndWait(`最厉害最强的${tachyon.get_uma_sex_title()}`);
      await era.printAndWait(`超光速的公主`);
      era.println();
      await era.printAndWait(`你不停在速子耳边倾诉着称赞${tachyon.sex}的话语`);
      await era.printAndWait(
        `而${tachyon.sex}的耳朵也不停的晃着，显露出这些话的受用程度`,
      );
      await era.printAndWait(
        `${tachyon.sex}露出了洋洋得意的表情，用力拍打你的大腿示意继续`,
      );
      era.println();
      await tachyon.say_and_wait(`哼哼……再来，再来，多说点！`);
      era.println();
      await era.printAndWait(`被拍的有些吃痛的你心念一转，起了恶作剧的念头`);
      await era.printAndWait(`你将环抱的手放开，移到${tachyon.sex}的大腿外侧`);
      era.println();
      await tachyon.say_and_wait(`……？豚鼠君？`);
      era.printButton(`好想看速子在跑步时这对大屁股摇晃的模样啊`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`你用力一拍${tachyon.sex}那丰满的臀部`);
      await era.printAndWait(
        `${tachyon.sex}全身颤了颤，那刚好合身紧贴的裤袜迭起了千层黑色浪花`,
      );
      era.printButton(
        `好想在比赛结束后，在休息室里狠狠把速子的里面灌满白浆`,
        1,
      );
      await era.input();
      era.println();
      await era.printAndWait(
        `你的口气依然如先前夸赞时一般轻柔，话中的内容却是无比粗鄙的言语`,
      );
      await era.printAndWait(
        `然而，不知是不是错觉，感觉速子的耳朵反而更加挺直了`,
      );
      era.println();
      era.printButton(
        `然后，用按摩棒把速子的里面堵住，就这么让速子上台去跳winning live，`,
        1,
      );
      await era.input();
      era.printButton(`穿着表演服的速子就这么顶着腹部的突起站上舞台中央……`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`你缓缓抚摸${tachyon.sex}的肚子，想将话说完……`);
      await era.printAndWait(`然而，你的手被握住了`);
      await era.printAndWait(
        `速子转头看向了你，不知不觉间，那暗红色的瞳孔已经变为了充满情欲的浅粉`,
      );
      era.println();
      await tachyon.say_and_wait(
        `豚鼠君……说这种话来挑逗我……下场是什么你明白的吧……❤`,
      );
      era.println();
      await era.printAndWait(`啊啊，好像玩过头了呢`);
      await era.printAndWait(`不知从何时开始，速子的屁股靠着你的下腹`);
      await era.printAndWait(`不断的磨蹭着，彷佛在等待主人调教的小狗一般`);
      era.println();
      await era.printAndWait(
        `虽然就这么开始做也不是不行……但一开始你的目的是什么来着……？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `比赛会参加的❤三冠❤目标就三冠吧❤好了……豚鼠君❤快点❤来嘛❤`,
      );
      era.println();
      await era.printAndWait(`你露出笑容，翻身将速子压在身下`);
      era.println();
      await era.printAndWait(`你和${tachyon.name}的目标决定了`);
    }
  } else if (edu_weeks === 40) {
    era.println();
    await era.printAndWait(
      `在出道赛过去了两个月后，你忽然被${tachyon.name}叫到了实验室`,
    );
    await era.printAndWait(`原本以为又是像平常一样的实验药剂，却没想到……`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君，我打算参加十二月底的希望锦标赛，你去安排一下吧`,
    );
    era.printButton(`欸？希望锦标赛？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`嗯哼？有什么问题吗？`);
    era.println();
    await era.printAndWait(
      `一进门，速子就以轻描淡写，彷佛在谈论晚餐要吃什么一般的口气和你说道`,
    );
    await era.printAndWait(
      `希望锦标赛……那是十二月底的G1中距离赛事，可以说是对青年级的${tachyon.get_uma_sex_title()}而言最重要的赛事之一`,
    );
    await era.printAndWait(
      `比赛安排的话……毕竟现在还有两个月，报名的话现在正好是时机，因此倒也不会来不及`,
    );
    await era.printAndWait(
      `能否赢下……说实话根本没有思考这个问题的必要，世界上最快的速度是光速，而比光速还要快的就是${tachyon.name}`,
    );
    await era.printAndWait(`唯一的问题是，why do it`);
    await era.printAndWait(
      `为什么一向对比赛不感兴趣的速子会忽然想要参加某特定比赛？`,
    );
    await era.printAndWait(`你老实的问出了心中的疑惑`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}没有回答，只是拍了拍桌上的报纸，那是今天的运动新闻，没记错的话……`,
    );
    await era.printAndWait(
      `今天最大的新闻应该是『森林宝穴和黑船确定参赛希望锦标』`,
    );
    era.println();
    await era.printAndWait(
      `原来如此……无论是森林宝穴还是黑船都是这个世代最为人关注的代表之一`,
    );
    await era.printAndWait(`再怎么说，速子也有与同世代的强者交锋的想法吧……`);
    era.println();
    await tachyon.say_and_wait(
      `当然是为了新药的试验了！没有强敌的比赛怎么能将人逼到极限，连极限都触碰不到那就更不需要药的辅助了`,
    );
    era.println();
    await era.printAndWait(`啊……反正铁定是这种发展，我就知道……嗯？`);
    era.printButton(`等等，比赛用药……违反规则了吧？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `嗯？你在担心这个啊，豚鼠君，放心，你难道觉得那些三脚猫的药检技术能查到我用的药吗？`,
    );
    era.println();
    await me.say_and_wait(`不是！重点不在这里啊！`);
    era.println();
    era.printButton(`这个……会不会……有点违反……运动家精神什么的……？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `你战战兢兢的挑选措辞，尽量不使用那种有可能刺激到对方的名词`,
    );
    era.println();
    await tachyon.say_and_wait(
      `嗯？豚鼠君？你该不会觉得，我要用的药是兴奋剂一类的东西？我在你心目中原来是这种人吗？`,
    );
    era.println();
    await era.printAndWait(`这算是恶人先告状吗？你连忙摇头说不是`);
    era.println();
    await tachyon.say_and_wait(
      `……你放心，这种药不是什么兴奋剂，也不会造成什么加快赛场上的速度之类的效果……`,
    );
    await tachyon.say_and_wait(
      `只是，确实是需要有足够强悍的对手才能实验出效果的药而已`,
    );
    era.println();
    await tachyon.say_and_wait(`听见${tachyon.sex}的话，你……`);
    era.printButton(`相信`, 1);
    era.printButton(`半信半疑`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      era.println();
      await era.printAndWait(
        `这样啊，你听完${tachyon.sex}的解释后点了点头，没说什么就准备去帮${tachyon.name}办理参加比赛的手续，这反而引起了速子的迷惑`,
      );
      era.println();
      await tachyon.say_and_wait(
        `不是不是……豚鼠君，你就这么相信我说的话了吗？`,
      );
      era.println();
      await era.printAndWait(`你点了点头，不理解为什么速子本人反而如此诧异`);
      era.println();
      await tachyon.say_and_wait(
        `万一我是，万一那真的是……我是说，万一我骗了你呢？`,
      );
      era.println();
      await era.printAndWait(`如果速子欺骗了自己……`);
      await era.printAndWait(`虽然从未想过这样的问题，但如果，万一的话`);
      era.println();
      era.printButton(`就算被骗了也没关系`, 1);
      await era.input();
      await era.printAndWait(`从那天开始就已经决定的`);
      await era.printAndWait(`相信${tachyon.sex}的可能及一切`);
      await era.printAndWait(
        `只要能够让${tachyon.sex}看见更远的世界，被欺骗又有什么`,
      );
      era.println();
      await tachyon.say_and_wait(`……信任，不，盲信吗？`);
      era.println();
      await era.printAndWait(`盲信`);
      await era.printAndWait(`仔细想想确实如此`);
      await era.printAndWait(`自己是因${tachyon.name}而再也见不到他物的盲人`);
      await era.printAndWait(
        `因为盲目，所以才渴求光明，渴求最亮的${tachyon.sex}`,
      );
      if (relation < 375) {
        era.println();
        await tachyon.say_and_wait(
          `呵呵呵无妨，既然如此，那就好好跟上我的脚步吧，豚鼠君`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}甩了甩衣袖，继续回到实验中，宣布了此次谈话的结束`,
        );
        era.println();
        await era.printAndWait(`结束前，最后说了一句`);
        era.println();
        await tachyon.say_and_wait(
          `作为奖赏，我答应你，你将会在特等席上见证可能性的彼方！`,
        );
      } else if (relation > 375) {
        era.println();
        await tachyon.say_and_wait(`豚鼠君……`);
        era.println();
        await era.printAndWait(`不知为何，速子似乎有些不满的样子`);
        era.println();
        await tachyon.say_and_wait(
          `一般情况下，这时候我应该会很高兴，因为这代表你身为豚鼠对我的忠诚度`,
        );
        era.println();
        await era.printAndWait(`${tachyon.sex}不高兴的戳着你的胸口`);
        era.println();
        await tachyon.say_and_wait(
          `但是，我讨厌像这样的盲从，我希望你能成为给予我建议，行走在我身旁的伙伴，而不是不会提出意见的实验动物`,
        );
        era.println();
        await era.printAndWait(
          `你稍稍反省了下自己的行为，于是作为改变，你选择提问`,
        );
        era.printButton(`那么，这么做的原因是…？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`…………很抱歉，现在还不能告诉你，`);
        await tachyon.say_and_wait(
          `总有一天一定，但……不是现在，我可以向你保证，现在就先相信我吧？`,
        );
        era.println();
        era.printButton(`不是前面才让我不要盲信？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(
          `这个，那个……不一样，前面是没有理由就相信，现在是相信我有理由但是不能说`,
        );
        era.println();
        await era.printAndWait(
          `虽然你心中还是很疑惑这两者有什么差别，但你明智的选择不去争吵`,
        );
        era.println();
        await era.printAndWait(
          `总之，你和${tachyon.name}的下个目标就决定为希望锦标了`,
        );
        await era.printAndWait(
          `如果没有意外的话，让${tachyon.sex}参加应该不会造成什么问题吧……`,
        );
      }
    } else {
      era.println();
      await me.say_and_wait(`真的吗？`, true);
      await era.printAndWait(`你心里总还是有些怀疑，不过……`);
      era.println();
      await era.printAndWait(
        `你耸了耸肩，开始准备帮${tachyon.name}办理参赛的申请数据`,
      );
      era.println();
      await tachyon.say_and_wait(
        `……豚鼠君？虽然我自己这么讲有些奇怪，但你都没有一点怀疑吗？就这么相信了吗？`,
      );
      era.printButton(`不信，但我相信即便不用药速子也能赢`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`虽然对速子的行为毫无头绪，也不知道药的作用`);
      await era.printAndWait(
        `说到底，你也不觉得${tachyon.name}是和${tachyon.sex}说声“规矩不行”${tachyon.sex}就会乖乖住手的人`,
      );
      await era.printAndWait(`但只有这点，是无需任何怀疑的`);
      era.println();
      await era.printAndWait(
        `${tachyon.name}，不需要药物这种外力，也绝对能够胜利`,
      );
      await era.printAndWait(
        `${tachyon.sex}没有使用兴奋剂的必要，你只是相信着这点`,
      );
      if (relation < 0) {
        era.println();
        await tachyon.say_and_wait(`……平常你要也能说的这么好听就好了`);
        era.println();
        await era.printAndWait(
          `速子冷淡的说道，但看${tachyon.sex}尾巴摇晃的模样似乎挺受用的`,
        );
        era.println();
        await era.printAndWait(
          `于是，你和${tachyon.name}的下个目标就决定为希望锦标了`,
        );
        await era.printAndWait(
          `只是……虽然这么说，但让这样的${tachyon.sex}上场真的没问题吗？或许还是需要好好烦恼一下`,
        );
      } else if (relation > 0 && love > 50) {
        era.println();
        await tachyon.say_and_wait(
          `豚鼠君……你这话，说的好像你一点也不相信我一样`,
        );
        era.println();
        await era.printAndWait(`速子有些不满的鼓起了嘴，头用力的转向一旁`);
        era.println();
        await era.printAndWait(`不管相信还是不信都不行吗……`);
        era.println();
        await era.printAndWait(
          `你忍不住扶额，像哄小孩一样告诉速子自己有多信任多爱${tachyon.sex}，好不容易才使${tachyon.sex}不再闹脾气`,
        );
        era.println();
        await era.printAndWait(
          `于是，你和${tachyon.name}的下个目标就决定是希望锦标了`,
        );
        await era.printAndWait(
          `只是……虽然这么说，但让这样的${tachyon.sex}上场真的没问题吗？或许还是需要好好烦恼一下`,
        );
      } else if (relation > 0) {
        era.println();
        await tachyon.say_and_wait(
          `这就是你的回答吗？不信任我但是信任我的才能？不错！这才是研究者应有的态度啊！`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}彷佛十分满意自己的回答一般，“嗯嗯”的点着头`,
        );
        era.println();
        await tachyon.say_and_wait(
          `那么，就尽管相信我的胜利吧，追随在我身后，我就会让你看见你所希望的光辉`,
        );
        era.println();
        await era.printAndWait(
          `于是，你和${tachyon.name}的下个目标就决定为希望锦标了`,
        );
        await era.printAndWait(
          `只是……虽然用听上去很帅气的话作为总结了，但这样参赛真的没问题吗？或许还需要好好思量一下`,
        );
      }
    }
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('二期目标确立', tachyon);
    await tachyon.say_and_wait(`哦呀，豚鼠君，你在………春联？`);
    era.println();
    await era.printAndWait(
      `门都不敲就闯入训练员室的速子在看到你手上的动作后发出了疑问，你点了点头`,
    );
    era.println();
    await era.printAndWait(`今天是春节，而你在做的，便是将新一年的期许写下`);
    era.println();
    await tachyon.say_and_wait(
      `三冠……我说啊，豚鼠君，虽然我大概没什么资格讲，但你可真是执着啊，三冠对你来说是有什么特殊的含义在吗？`,
    );
    era.println();
    await me.say_and_wait(`含义……倒也没有，但如果要说的话`);
    era.printButton(`因为速子答应了参赛……而我不觉得速子会败北`, 1);
    await era.input();
    // todo 目标赛事无败且好感>0
    if (relation > 0) {
      await tachyon.say_and_wait(`哼哼，不错，天才的我确实是无败的`);
      era.println();
      await era.printAndWait(`速子一脸得意的说道`);
    } else if (relation < 0) {
      await tachyon.say_and_wait(
        `赢还是输，这种跟实验没有一点关系的东西真亏你能如此热衷啊`,
      );
      era.println();
      await era.printAndWait(`速子冷漠的说道`);
    }
    // todo 目前为止已有败绩
    else if (relation > 1) {
      await tachyon.say_and_wait(`…………豚鼠君，你是忘记我已经败北过了吗？`);
      era.println();
      await era.printAndWait(`……啊，这么说来好像确实有这么回事……`);
      era.printButton(`但是，速子还是最强的！`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`…………天真成这样，我都不知道该怎么说了`);
      await era.printAndWait(`速子忍不住扶额`);
    }
    await tachyon.say_and_wait(`既然如此，那么梦不放远一点吗？`);
    era.println();
    await era.printAndWait(`远一点……？`);
    await era.printAndWait(`你一时不能明白速子的意思`);
    era.println();
    await tachyon.say_and_wait(
      `把梦想放在优先啊，豚鼠君，你的梦想，我的梦想，将更远大的梦想写上吧！`,
    );
    era.println();
    await era.printAndWait(`速子的双眼放光，眼中充满热情`);
    era.println();
    await era.printAndWait(
      `更远大的梦想……你沉思了一会，又抽出一张春联纸，在上面写上……`,
    ); // todo 目前为止已有败绩
    if (relation > 1) {
      era.printButton(`无败`, 1, { disabled: true });
    } else {
      era.printButton(`无败`, 1);
    }
    era.printButton(`无限`, 2);
    era.printButton(`无伤`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      // todo 全属性+5
      await era.printAndWait(`无败，要超越光速的粒子，是不可能败于区区凡人的`);
      era.println();
      await tachyon.say_and_wait(
        `哦？意思是年间无败吗？呵呵，不错，是个可以期待的目标`,
      );
      era.println();
      await era.printAndWait(
        `${tachyon.sex}饶有兴致的看着你的目标，却又泼下了一桶冷水`,
      );
      era.println();
      await tachyon.say_and_wait(`不过……参赛与否，也要看我的兴趣就是了`);
      era.println();
      await era.printAndWait(
        `毕竟不参赛也是一种无败啊，速子哈哈大笑，说了个在你听起来一点也不好笑的笑话`,
      );
      await era.printAndWait(`这种事……感觉速子真有可能做得出来啊……`);
      await era.printAndWait(
        `大年初一你的胃就开始因负责${tachyon.get_uma_sex_title()}而生疼了，看来今年也一定不会是轻松的一年吧`,
      );
    } else if (ret1 === 2) {
      await era.printAndWait(
        `无限，如果是梦想的话……那么，没有什么是比速子的梦想更适合作为目标的了`,
      );
      await era.printAndWait(`超越极限，再无限制，所以无限`);
      // todo 技能点+20
      if (relation < 0) {
        era.println();
        await tachyon.say_and_wait(
          `……呵呵，你这种人还会想这些？用来拐小女孩的话术就收一收吧，你只是辅助我的工具而已，认清自己的身份`,
        );
        era.println();
        await era.printAndWait(`速子无情的奚落了你一番`);
        await era.printAndWait(
          `……虽然确实自己的表现无法让人相信吧，但你确实是如此想的啊`,
        );
        era.println();
        await era.printAndWait(
          `在苦笑中，你预料到了今年八成也不会是个轻松的一年`,
        );
      } else if (relation > 0 && relation < 225) {
        era.println();
        await tachyon.say_and_wait(
          `哦？无限的可能性吗？不错，确实是很适合我们的选项，新的一年就朝着这个目标前进吧`,
        );
        era.println();
        await era.printAndWait(`速子看上去很满意的模样，太好了！`);
        era.println();
        await tachyon.say_and_wait(`所以，为了达到可能性，今天的药……`);
        era.println();
        await era.printAndWait(`忽然的图穷匕现！？`);
        await era.printAndWait(
          `刚说完那样的豪情壮志导致无法拒绝的你硬吞下了药剂`,
        );
        await era.printAndWait(
          `在头顶顶着的光环之下，你预感今年必定也会是不轻松的一年`,
        );
      } else if (relation > 225) {
        era.println();
        await tachyon.say_and_wait(
          `哼哼！当然了，豚鼠君，你当然会做出这样的选择吧！`,
        );
        await tachyon.say_and_wait(
          `我们的梦想，我们一起追寻的可能性，为了更广阔的未来，突破极限，达致无限！`,
        );
        era.println();
        await era.printAndWait(
          `速子狂热的看着你，眼中绽放着将你吸引的疯狂目光`,
        );
        await era.printAndWait(`没错，为了我们的梦想……`);
        era.println();
        await tachyon.say_and_wait(`所以，今天的年节菜也麻烦你了`);
        era.println();
        await era.printAndWait(
          `等等，年节菜也要自己做什么的，从来没听说过啊！？`,
        );
        await era.printAndWait(
          `在${tachyon.sex}的期待目光下，你还是认命的拿起了锅铲`,
        );
        await era.printAndWait(`看来今年又会是个不轻松的一年啊……`);
      }
    } else {
      await era.printAndWait(
        `无伤，比赛什么都无所谓，可能性什么的也只要尽力追取，最重要的是无病无伤，为了更长远的未来`,
      );
      if (relation < 225) {
        // todo 干劲下降一级 体力恢复20%
        await tachyon.say_and_wait(`…………`);
        era.println();
        era.printButton(`速子？`, 1);
        await era.input();
        era.println();
        await era.printAndWait(`速子不知为何忽然陷入了沉默，你疑惑的开口询问`);
        era.println();
        await tachyon.say_and_wait(`……无聊的答案`);
        await tachyon.say_and_wait(
          `无伤怎么创造历史，没有牺牲又怎么会有创造，无伤……我没想到，豚鼠君你的答案竟然会如此无聊`,
        );
        await era.printAndWait(
          `速子不知道为什么忽然心情十分不悦，自己难道说错什么话了吗？`,
        );
        await tachyon.say_and_wait(`无伤……要是可以……要是……`);
        await era.printAndWait(
          `但你随即发现，${tachyon.sex}的愤怒似乎并非是针对你，而是针对某种……不知道，说到底你连${tachyon.sex}生气的原因都搞不清楚不是吗`,
        );
        era.println();
        await tachyon.say_and_wait(`……随便你吧，这种无聊的愿望，这种无聊的……`);
        era.println();
        await tachyon.say_and_wait(
          `但你随即发现，${tachyon.sex}的愤怒似乎并非是针对你，而是针对某种……不知道，说到底你连${tachyon.sex}生气的原因都搞不清楚不是吗`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}气愤的离开了训练员室，留下依然一脸蒙逼的你`,
        );
      } else {
        era.println();
        await tachyon.say_and_wait(`…………嗯，也是啊`);
        era.printButton(`速子？`, 1);
        await era.input();
        era.println();
        await era.printAndWait(`速子的情绪似乎有些奇怪，你不禁疑惑的问道`);
        era.println();
        await tachyon.say_and_wait(
          `啊，没什么，是啊，毕竟以训练员的身分而言，${tachyon.get_uma_sex_title()}的健康才是第一优先的吧，不过……稍微有些无聊了`,
        );
        era.println();
        await era.printAndWait(
          `无聊吗……以速子追求可能性的想法而言，或许确实会如此觉得吧，但对自己而言，最重要的还是速子的健康`,
        );
        await era.printAndWait(
          `不知为何，速子的模样看起来有些悲伤，虽然强装镇静，但总觉得有种无奈的悲哀感，难道自己不该这么说的吗……`,
        );
        await era.printAndWait(`难道自己不该这么说的吗……`);
        era.println();
        await tachyon.say_and_wait(
          `…………没什么，呵呵，这样的话，为了你的愿望，我今天就回去好好休息吧……`,
        );
        await tachyon.say_and_wait(`无伤……啊……`);
        era.println();
        await era.printAndWait(
          `这样的提议倒是与你的心意相符，只是速子究竟是怎么了？`,
        );
        await era.printAndWait(
          `你目送着${tachyon.sex}离去，脑海中依旧百思不得其解`,
        );
        //todo 干劲下降一级 体力恢复20%
      }
    }
    era.set('cflag:32:节日事件标记', 0);
  } else if (edu_weeks === 47 + 8) {
    await print_event_name(`研究计画与进度回报`, tachyon);
    await era.printAndWait(
      `虽然新年已经过去，但二月的特雷森学园仍然被笼罩于寒冬之中`,
    );
    await era.printAndWait(`你望着训练场，口中不住吐出叹息的白气`);
    era.println();
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}A`,
      `那个人今天也站在这里啊`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `嘘……小声点，听说他其实是某人的训练员来着`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}A`,
      `欸……真的假的，他已经站了三天了吧，也没看到过他的负责${tachyon.get_uma_sex_title()}啊`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `谁知道呢……听说其他年级有个存在感低到会完全被人忽视的${tachyon.get_uma_sex_title()}，说不定他负责的就是${
        tachyon.sex
      }吧`,
    );
    era.println();
    await era.printAndWait(
      `啊哈哈……被当成毫无存在的${tachyon.get_uma_sex_title()}了哦，${
        tachyon.name
      }小姐？`,
    );
    await era.printAndWait(
      `不过，要是自己上去主动说自己的负责${tachyon.get_uma_sex_title()}是${
        tachyon.name
      }的话，也一定不会有人相信的吧`,
    );
    await era.printAndWait(
      `说来十分令人悲哀，但有谁会相信这样一个没有在发光的普通人会是${tachyon.name}的训练员呢`,
    );
    await era.printAndWait(
      `毕竟这几天由于完全没喝速子的药导致自己已经好几天没发光过了`,
    );
    era.println();
    await me.say_and_wait(
      `今天已经是${tachyon.name}没有来训练的第三天了`,
      true,
    );
    await era.printAndWait(
      `岂止如此，甚至你已经三天没有见到过自己的负责${tachyon.get_uma_sex_title()}了`,
    );
    await era.printAndWait(
      `连试药都没有的三天，你就这么一直待在训练场上等待着理应在训练时间来到这里却不在的那个人`,
    );
    era.println();
    await me.say_and_wait(`看来今天也不会来了吧……`, true);
    await era.printAndWait(`就在你如此想着的时候`);
    if (relation < 225) {
      await tachyon.say_and_wait(`哦呀，豚鼠君？你怎么在这？我找你找好久`);
      await me.say_and_wait(`……`);
      await era.printAndWait(
        `对于一边说着理所当然的话语一边悠哉出现的速子，现在的你已经连脾气都不剩了`,
      );
      await era.printAndWait(`总之，来到训练场……算了，反正一定又是药……`);
      era.println();
      await tachyon.say_and_wait(`总之，快来帮我测时吧`);
      era.println();
    } else {
      await tachyon.say_and_wait(
        `豚鼠君！你这几天都跑哪里去了！我都好久没吃便当了！！！`,
      );
      await era.printAndWait(
        `怎么还能恶人先告状的，这不是因为这几天${tachyon.sex}自己把实验室门锁上了吗`,
      );
      await tachyon.say_and_wait(
        `算了，重点不在这，总之快点帮我测一下，新的实验数据`,
      );
    }
    era.drawLine();
    await era.printAndWait(`嗯？等一下，难道，莫非`);
    await era.printAndWait(
      `对眼前发生的事有些不敢置信的你愣愣的按下了计时器，愣愣的看着速子跑了一圈回来，再愣愣的按下计时停止`,
    );
    era.println();
    await tachyon.say_and_wait(`时间？`);
    era.printButton(`比……比原纪录快了三秒`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `你不由得感到兴奋，几天没来训练？那种俗事早被你抛到了一旁，拥有这样的速度的${tachyon.sex}，绝对，一定……`,
    );
    era.println();
    await me.say_and_wait(`很好，速子满意的拍了拍手`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，那么告诉你一个好消息吧`);
    await tachyon.say_and_wait(`弥生赏，我决定要出赛了`);
    era.println();
    await era.printAndWait(`弥……弥生赏？`);
    era.println();
    await era.printAndWait(
      `那是皋月赏的前哨战，大部分有志于皋月赏的${tachyon.get_uma_sex_title()}都会以弥生赏或者希望锦标先为目标，以此获得人气后再挑战皋月赏`,
    );
    await era.printAndWait(
      `不过……弥生赏再怎么说也还是G2比赛，不缺乏人气的速子会对这场比赛感兴趣的原因究竟是……？`,
    );
    era.println();
    await tachyon.say_and_wait(`……有些东西，必须要在皋月赏以前确认才行`);
    era.println();
    await era.printAndWait(`${tachyon.sex}的口气让你稍稍感到了一些不安`);
    await era.printAndWait(`不过`);
    era.printButton(`速子的话，一定没问题的`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`呵，难道你觉得我会连G2都拿不下吗？`);
    era.println();
    await era.printAndWait(`你只能苦笑解释自己不是那个意思`);
    await era.printAndWait(`总之，目标姑且确定为弥生赏了`);
    //todo 速度+10
  } else if (edu_weeks === 47 + 23) {
    await print_event_name(`最速？最强？`, tachyon);
    await era.printAndWait(`更快`);
    await era.printAndWait(`还要更快`);
    era.println();
    await era.printAndWait(`${tachyon.name}在夜晚的训练场奔跑着`);
    await era.printAndWait(`不管不顾的追求极限，追求速度的极限，可能性的极限`);
    await era.printAndWait(`正如，超越光速的粒子(Tachyon)一般`);
    await era.printAndWait(`但是……`);
    era.println();
    await tachyon.say_and_wait(`啧……果然，还是不行……`);
    era.println();
    await era.printAndWait(`万物都有自己的代价`);
    await era.printAndWait(
      `据说，曾经有${tachyon.get_uma_sex_title()}因为突破了${tachyon.get_uma_sex_title()}的极限，而付出生命的代价`,
    );
    await era.printAndWait(`倘若付出那样的代价真的能够突破极限也就算了`);
    await era.printAndWait(
      `然而${tachyon.name}的双腿，却连那样的资格都不被允许`,
    );
    era.println();
    await tachyon.say_and_wait(`无论怎么做，都无法突破极限……甘于平凡，或是……`);
    era.println();
    await era.printAndWait(`${tachyon.name}停下了脚步`);
    era.println();
    await tachyon.say_and_wait(`……我的极限，就在这里了吗？`);
    era.println();
    await era.printAndWait(
      `并非${tachyon.get_uma_sex_title()}的极限，而是${tachyon.name}的极限`,
    );
    era.println();
    await tachyon.say_and_wait(`…………那么，要是这条路走不通的话……要选择PlanB吗`);
    era.println();
    await era.printAndWait(`放弃『最速』的极限，选择『最强』的极限`);
    era.println();
    await era.printAndWait(
      `${tachyon.name}可以失败，只要失败后，有能够替代${tachyon.sex}的人就好了`,
    );
    await era.printAndWait(`将梦想托付给别人，如同自我逃避一般的选择`);
    await era.printAndWait(
      `原本的话，或许还能说服自己，这是最为理性的选择，将可能性托付在更可能实现的人身上`,
    );
    await era.printAndWait(`但是……`);
    era.println();
    await me.say_and_wait(`我相信速子`);
    await me.say_and_wait(`速子的话，绝对没问题`);
    await me.say_and_wait(
      `一定，别说三冠，突破${tachyon.get_uma_sex_title()}的可能性也不成问题……！`,
    );
    era.println();
    await era.printAndWait(`那个人对自己的信任`);
    await era.printAndWait(`这样不亚于对他的背叛的行为……真的，没问题吗`);
    era.println();
    await tachyon.say_and_wait(
      `……不，这不是背叛，只是，也是给他一个更好的选择……所以……`,
    );
    era.println();
    await era.printAndWait(`迷茫`);
    await era.printAndWait(`恐惧`);
    await era.printAndWait(`困惑`);
    await era.printAndWait(`到底……该怎么办才好`);
    era.println();
    await tachyon.say_and_wait(`……就这样吧`);
    era.println();
    await era.printAndWait(`下个月的月桂赏`);
    await era.printAndWait(`学生会长举办的，无论年级本格化程度都能参加的比赛`);
    await era.printAndWait(`……如果参加的话，从德比到现在短暂的休养期……`);
    await era.printAndWait(`${tachyon.name}的双腿一定承受不住的吧`);
    await era.printAndWait(
      `但是，这样的数据收集机会，错过了，以后还有机会吗？`,
    );
    await era.printAndWait(`不，说到底……${tachyon.name}真的还有『以后』吗？`);
    await era.printAndWait(`索性……就在这场比赛中，拼尽全力……吗？`);
    era.println();
    await era.printAndWait(`月下的光之粒子，依然迷茫`);
    // 速+20
  } else if (edu_weeks === 47 + 25) {
    await print_event_name(`狂热`, tachyon);
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}A`,
      `速子前辈要参加月桂杯的事情是真的吗！`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `好期待……速子前辈的跑法真的好让人着迷……`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}C`,
      `绝对，绝对会去看的！`,
    );
    era.println();
    await era.printAndWait(`如今学院中最处于话题中心的，那便是月桂杯了`);
    await era.printAndWait(`由学生会长组织，以对标URA总决赛为主的比赛，月桂杯`);
    await era.printAndWait(
      `甚至无论年级无论本格化开始或者结束，只要有意愿的皆能参加`,
    );
    await era.printAndWait(`速子自然也不会放过如此好的数据收集机会`);
    await era.printAndWait(
      `最近这几周，更是拼足了全力在训练上，按${tachyon.sex}的说法，要是自己不提升到相应的等级，那又怎么能够逼出对手的可能性来`,
    );
    era.println();
    await era.printAndWait(`今天，${tachyon.sex}也在训练场上努力锻炼着自己`);
    era.printButton(`速子！今天的训练成果也大幅超越过去记录了！`, 1);
    era.printButton(`太厉害了！速子！`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `……哈哈哈！哪怕已经习惯你这种夸张的说法了，但听到还是会忍不住讶异一下啊……`,
    );
    await tachyon.say_and_wait(`真的是，说认真的，你都不会害羞的吗`);
    era.printButton(`我说的都是肺腑之言！`, 1);
    era.printButton(`为了帮助速子，我也会不遗余力拼上性命！`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `夸张……比起这种好听话，还不如实际帮助我的实验更有意义些`,
    );
    era.println();
    await era.printAndWait(`说到这，速子忽然从白大褂下掏出了几根试管`);
    era.println();
    await tachyon.say_and_wait(
      `这么说来，正好……这是今天早上灵感来了做出的药……`,
    );
    await tachyon.say_and_wait(
      `怎么样？要是你能现在喝下去，等我下一趟跑完回来跟我报告药物效果的话，成效大概会比你这些……？`,
    );
    era.println();
    await era.printAndWait(`连话都没说完，${tachyon.name}便陷入了呆滞`);
    await era.printAndWait(
      `在${tachyon.sex}眼前，是已经喝下药水，拿着三管空试管的你`,
    );
    era.println();
    await tachyon.say_and_wait(`你……`);
    era.printButton(`这样，速子就能安心了吧？`, 1);
    era.printButton(`这样，就能帮到速子了吧？`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……`);
    era.println();
    await era.printAndWait(`速子不知为何，久久没有说出任何话来`);
    era.printButton(`速子？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……真是……你到底要把一切搅乱到什么地步啊……`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}扶着头，脸上带着无奈的表情，仿佛有什么话想要说出`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君，等一下，到我实验室来……有事要和你商量`);
  } else if (edu_weeks === 47 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('媒体应对办法', tachyon);
    await era.printAndWait(`夏日集训`);
    await era.printAndWait(
      `对${tachyon.get_uma_sex_title()}们而言，是兼具放松及提升实力的时间`,
    );
    await era.printAndWait(
      `对记者们而言，则是平常除了比赛便不会轻易暴露于人前的${tachyon.get_uma_sex_title()}们难得有机会能够采访到的日子`,
    );
    await era.printAndWait(`也因此，狗仔队们早早便聚集在了合宿点外`);
    await say_by_passer_by(`记者A`, `有看到吗？`);
    await say_by_passer_by(`记者B`, `别急，还没完全下来呢`);
    await say_by_passer_by(
      `记者C`,
      `来了来了！就是那个，训练员正在发出光芒的！`,
    );
    await era.printAndWait(
      `你和${tachyon.name}一下车，就受到了记者们的团团包围`,
    );
    await era.printAndWait(
      `你暗叫不好，连忙降低了身上的亮度，只可惜已经为时已晚`,
    );
    await say_by_passer_by(
      `记者A`,
      `请问${tachyon.name}拒绝参加月桂杯的原因是什么？`,
    );
    await say_by_passer_by(`记者B`, `是有什么苦衷吗？`);
    await say_by_passer_by(`记者C`, `是对学生会长的不信任吗？`);
    await era.printAndWait(
      `呜哇，麻烦的问题好多，还有最后一个记者这思想很危险啊，想挑动对立吗？`,
    );
    await era.printAndWait(`面对这么多记者，你决定……`);
    era.printButton(`耐心解释`, 1); //todo 速子干劲下降
    era.printButton(`驱赶`, 2); //todo 声望下降20
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`你耐心的与记者们解释了阵营目标是年底的菊花赏，`);
      await era.printAndWait(
        `因此在此之前其他的事情都需要推移，另外并没有对现今会长的不满`,
      );
      await era.printAndWait(
        `为了应付记者们耽误了许多时间，速子的情绪也因此不耐了起来，`,
      );
      await era.printAndWait(
        `见此你匆忙找了个理由结束他们的采访便带着速子进入合宿宿舍`,
      );
    } else {
      await era.printAndWait(`啊，好吵啊`);
      await era.printAndWait(`你和速子交换了一下眼神`);
      await era.printAndWait(
        `在长时间的配合下，${tachyon.sex}马上理解了你要做什么，从包里掏出了墨镜`,
      );
      await era.printAndWait(`然后……`);
      era.printButton(`认真发光！`, 1);
      era.printButton(` 太阳拳！`, 2);
      await era.input();
      await say_by_passer_by(`记者A`, `我的眼睛！`);
      await say_by_passer_by(`记者B`, `好亮！`);
      era.println();
      await era.printAndWait(`在你120%全力的发光照射下，连太阳都显得黯然失色`);
      await era.printAndWait(
        `趁着记者们揉着双眼的时候，你带着速子快步进入了合宿的宿舍`,
      );
    }
  } else if (edu_weeks === 47 + 31 && event_marks.plan_b === 0) {
    await print_event_name('夏日的数据采集', tachyon);
    await tachyon.say_and_wait(`哈啊……哈啊……哈啊……`);
    era.println();
    await era.printAndWait(
      `合宿期间，你和速子努力进行着对菊花赏的特训，在劳逸结合的训练方式下，训练成果颇有成效`,
    );
    era.println();
    await tachyon.say_and_wait(`数据……怎么样？`);
    era.println();
    era.printButton(
      `已经恢复到改变跑法前的速度了……这样下去，菊花赏绝对没问题！`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `为了最大化降低速子腿部负荷改良的跑法，如今也以至大成，在两人的努力下，菊花赏想必绝对……`,
    );
    era.println();
    await era.printAndWait(`正当你敞想于速子的未来中时，喘过气来的速子开口了`);
    era.println();
    await tachyon.say_and_wait(`好，我的部分训练结束了，接下来该你了`);
    era.println();
    await era.printAndWait(`…………该来的还是得来啊`);
    await era.printAndWait(
      `所谓的劳逸结合，具体而言其实就是，在速子训练时你休息，而速子休息时……自然就轮到你上了`,
    );
    await era.printAndWait(
      `在速子的药物帮助下，如今的你在短暂爆发力上可以说已经不输给公开赛等级的${tachyon.get_uma_sex_title()}了，`,
    );
    await era.printAndWait(
      `而测量你的药物实验数据也是速子合宿期间好好训练的前提之一`,
    );
    era.println();
    await tachyon.say_and_wait(
      `今天就大发慈悲让你自己选吧，豚鼠君……力量训练和耐力训练，你要选择哪一个呢`,
    );
    era.println();
    await era.printAndWait(`唔……虽然感觉都差不多，但`);
    era.printButton(`力量训练`, 1);
    era.printButton(`耐力训练`, 2);
    era.printButton(`速度训练`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`如此如此这般这般`);
      await era.printAndWait(`于是你拖着比人还高三倍的大轮胎在沙滩上走着`);
      await era.printAndWait(
        `天知道这种轮胎到底是给什么车用的，横着躺还有人的三倍高度`,
      );
      await era.printAndWait(`这期间，速子一直坐在轮胎上为你加油打气……`);
      era.println();
      await tachyon.say_and_wait(`走快点啊豚鼠君`);
      await tachyon.say_and_wait(`怎么慢成这样，速度速度`);
      await tachyon.say_and_wait(`大不了爆衣变身绿巨人吧`);
      era.println();
      await era.printAndWait(`加油……打气？`);
      era.println();
      await era.printAndWait(
        `在这比起打气，更像是锻炼人耐压性的呼声中，你完成了今天的训练`,
      );
      //todo 力量+10 根性+10 训练员体力下降
    } else if (ret1 === 2) {
      era.println();
      await tachyon.say_and_wait(`下去吧`);
      era.println();
      await era.printAndWait(`你震惊的看着速子，但不是因为训练的艰难，而是……`);
      era.printButton(`……只要下去游泳就好了？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`嗯哼，按正常圈数游完就好了～～`);
      era.println();
      await era.printAndWait(`看速子的表情明显有阴谋，但实在想不到……`);
      await era.printAndWait(
        `不，应该说，能想到${tachyon.sex}会做什么的可能性太多了，实在猜不到${tachyon.sex}到底用的是什么`,
      );
      await era.printAndWait(`但在这边干等着也没用，于是你先下了水`);
      era.println();
      await era.printAndWait(`好冰！`);
      await era.printAndWait(`海水的温度明显不同以往的冰，要说的话……`);
      await era.printAndWait(
        `就像之前速子为了测试耐寒药水而让自己跳进去的冰块池一般`,
      );
      await era.printAndWait(
        `你连忙慌张的看向周围，却发现其他学生依然一如往常的在海中嬉戏`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哼哼，感觉现在特别冷吧，这就是在下水前给你喝的药的效果，可以提高知觉的药物，没错，就是对O忍里面会出现的那种药物！`,
      );
      era.println();
      await era.printAndWait(`不要说O魔忍啊！？`);
      await era.printAndWait(
        `但奇怪的是，除了现在的体感温度仿佛像在冬天泡冰块浴一般，就没有什么其他特别的感受了，如果是对魔O的话这时候应该是……`,
      );
      era.println();
      await tachyon.say_and_wait(
        `当然，这还只是半成品而已，主要就是提高对寒冷神经上的敏感度而已，那么，你就好好游完指定的目标里数吧`,
      );
      era.println();
      await era.printAndWait(`好冷……`);
      await era.printAndWait(
        `即便没有速子的指示，在寒冷下你还是被迫拼命活动身体来产生热量，最终好不容易完成了游泳的目标`,
      );
      era.drawLine({ content: '题外话' });
      await tachyon.say_and_wait(
        `……为什么明明只是提高你的神经敏感度也能感冒啊，豚鼠君`,
      );
      era.println();
      await era.printAndWait(`……这个问题不是该问你吗？`);
      // todo 耐力+10
      // 力量+10
      // 训练员体力下降
    } else {
      await era.printAndWait(`无论哪一个看起来都不怀好意啊……`);
      await era.printAndWait(`机智的你选择`);
      era.printButton(`……我忽然想起宿舍瓦斯炉好像没关，先回去了！`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`三十六计走为上策！`);
      era.println();
      await tachyon.say_and_wait(
        `吼吼，居然想和我赛跑吗？看来最近的体力提升让你有些膨胀了啊，豚鼠君。`,
      );
      await tachyon.say_and_wait(
        `没问题，我让你十秒，要是被我追上了，今天的药就加倍。`,
      );
      await tachyon.say_and_wait(`来，让我玩的开心点吧，啊哈哈哈哈哈哈！`);
      era.println();
      await era.printAndWait(`十秒的限时一过，速子的脚步声就立即出现在耳边了`);
      await era.printAndWait(
        `快啊，快啊，仔细想想这个时候训练员培训学校是怎么教的`,
      );
      await me.say_and_wait(
        `寻找障碍物来干扰${tachyon.get_uma_sex_title()}的动作!`,
        true,
      );
      await era.printAndWait(
        `好，快点………这里是沙滩哪里来的障碍物啊啊啊啊啊啊！！！`,
      );
      era.println();
      era.println();
      await tachyon.say_and_wait(
        `啧啧，跑的太慢了啊豚鼠君，那么今天的两管……好，再来一次吧，一样十秒，这次再追到就是四管了……继续吧～～`,
      );
      await me.say_and_wait(`还来啊！？`);
      await era.printAndWait(
        `最终，你被速子追了又放四次，总共灌了十六管的药水`,
      );
    }
  } else if (edu_weeks === 47 + 31 && event_marks.plan_b === 1) {
    await print_event_name(`月光`, tachyon);
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}A`,
      `速子前辈最近……似乎深夜总在沙滩上跑步的样子`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `虽然不算什么大事，但总觉得速子前辈跑起来好像……很吃力的样子`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}C`,
      `毕竟也受过速子前辈不少帮助……速子前辈${tachyon.sex}真的没事吧？`,
    );
    era.println();
    await era.printAndWait(
      `由于许多${tachyon.get_uma_sex_title()}的关心，你在深夜离开了训练员宿舍，走向合宿的沙滩`,
    );
    await era.printAndWait(
      `居然需要靠着其他${tachyon.get_uma_sex_title()}的提醒才能发现自家${tachyon.get_uma_sex_title()}的不对劲，真是……训练员失格`,
    );
    await era.printAndWait(
      `不过，感谢${tachyon.sex}的帮助吗……虽然说${tachyon.sex}只当成了实验，但因${tachyon.sex}的药物而受惠的人确实是存在的啊`,
    );
    await era.printAndWait(`也不知是出于何种原因何种情绪，你莫名的感到感慨`);
    era.println();
    await tachyon.say_and_wait(`哈啊……哈啊……哈啊……`);
    era.println();
    await era.printAndWait(
      `在来到了沙滩的你眼前的，是合宿期间也在不断与你一起为了茶座的跑法改善研究的速子`,
    );
    await era.printAndWait(
      `专注于奔跑的${tachyon.sex}，在夜色的遮蔽下并没能注意到你的到来`,
    );
    await era.printAndWait(`你也静静的望着，没有破坏这一刻的寂静`);
    era.println();
    await era.printAndWait(`沙滩上的${tachyon.sex}，跑法并不完美`);
    await era.printAndWait(
      `不用说与皋月赏时相比，哪怕是与更久远以前速子的跑法比起来，都显得十分别扭`,
    );
    await era.printAndWait(
      `除了大概是因为顾虑脚的坚固度而有些不敢放开的姿态，那种跑法也并非是${tachyon.name}平常所擅长的跑法`,
    );
    await era.printAndWait(
      `可即便如此，月光下${tachyon.sex}的身姿却还是吸引着你的目光，`,
    );
    await era.printAndWait(
      `无关完美与否，${tachyon.name}的跑法本身便吸引着你的注目，如光一般，再微弱的光芒那都是能够使人狂热追逐的光`,
    );
    await era.printAndWait(`你忍不住踏出一步，想要抓住那道光……`);
    era.println();
    await tachyon.say_and_wait(`谁？……啊，豚鼠君啊`);
    era.println();
    await era.printAndWait(
      `停下了奔跑的${tachyon.sex}，很快便观察到了附近的人影，出言说道`,
    );
    era.printButton(`这么晚了在做什么？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`没什么，为了茶座在实验新的跑法而已……`);
    await tachyon.say_and_wait(
      `你刚刚大概也看到了吧，虽然说我跑起来有些不伦不类，但要是让茶座的跑法能够往这个方向改善的话……`,
    );
    era.println();
    await era.printAndWait(`想说出口的话，止住了`);
    await era.printAndWait(`没有错，一切都是为了速子的PlanB`);
    await era.printAndWait(`同时，也是为了让曼城茶座抵达巅峰的高度`);
    if (relation < 225) {
      await era.printAndWait(`这是当初已经做好的决定`);
      await era.printAndWait(`从合理性来说，这也是最理智的选择不是吗？`);
      await era.printAndWait(`所以`);
    } else {
      await era.printAndWait(`这是当初已经做好的决定`);
      await era.printAndWait(`毕竟，你不想再看速子受那样的苦了，不是吗？`);
      await era.printAndWait(`所以`);
    }
    era.printButton(`……不过，还是要注意休息啊`, 1);
    await era.input();
    await tachyon.say_and_wait(
      `知道了，你也是，这么晚还不睡明天茶座的训练怎么办？`,
    );
    era.println();
    await era.printAndWait(`你只能说出这种无关痛痒的做作关心，便离开了沙滩`);
    // todo 速度+10
  } else if (edu_weeks === 47 + 41) {
    await print_event_name(`论文初稿撰写和三期目标确立`, tachyon);
    await tachyon.say_and_wait(`那么……该来谈正经的话题了`);
    era.println();
    await era.printAndWait(`时间是菊花赏后`);
    await era.printAndWait(`地点是${tachyon.name}的实验室`);
    era.println();
    await era.printAndWait(`${tachyon.sex}严肃的拉下了窗帘，点亮照明灯光`);
    await era.printAndWait(`你紧张的咽了口口水`);
    await era.printAndWait(`如此紧张的气氛……以速子的性格`);
    await era.printAndWait(
      `难道是实验失误？有什么危险的实验动物跑出去了？把什么危险性药物散播在水源里了？还是……`,
    );
    era.printButton(`……`, 1);
    era.printButton(`……`, 2);
    era.printButton(`……`, 3);
    await era.input();
    await tachyon.say_and_wait(
      `……不是，你在说什么乱七八糟的，我有点理解不能。我要说的是，三冠也结束了，差不多该来讨论今后的目标了`,
    );
    await era.printAndWait(`…………欸！？`);
    await era.printAndWait(
      `由于话题的内容比自己预想的还要正经太多导致你陷入了无声的惊愕`,
    );
    era.printButton(`目标……`, 1);
    era.printButton(`啊，是研究的目标吧`, 2);
    await era.printAndWait(
      `肯定是这样吧，是指实验，毕竟速子的双腿在菊花赏后确实感觉比起以前稳定了许多，最起码目前应该不用特别担心伤病了`,
    );
    await era.printAndWait(
      `那么接下来实验确实也该进入下个阶段了，肯定是这样，不是的话，那不就好像在说……`,
    );
    era.println();
    await tachyon.say_and_wait(`实验的目标……确实也是，但是我现在要讨论的，`);
    await tachyon.say_and_wait(
      `是赛程的目标，当初讲好的是到三冠吧，现在三冠结束，也该进入下个阶段了`,
    );
    era.println();
    await era.printAndWait(`欸欸欸欸！！！！？？？？`);
    await era.printAndWait(
      `这次你真的陷入了惊愕，惊讶的程度让你做出了《呐喊》的姿势`,
    );
    await era.printAndWait(`这惹的眼前的速子也忍不住笑了出来`);
    era.println();
    await tachyon.say_and_wait(
      `呵呵……我会主动开始谈论比赛的事有这么令人吃惊吗？`,
    );
    era.println();
    await era.printAndWait(
      `你看着${tachyon.sex}的态度，回想着以往只将比赛视为实验验证的附加物的速子`,
    );
    era.printButton(`…速子…改变了呢`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `要说的话，本来就没有什么是不变的，以研究而言，故步自封闭门造车更是最忌讳的事……`,
    );
    await tachyon.say_and_wait(
      `不过，改变也有分好与坏，至少目前而言我很满意现在的改变，这点我必须要感谢你才行`,
    );
    era.println();
    await era.printAndWait(`听见速子难得坦率的话语，你一时慌了阵脚`);
    await era.printAndWait(`今天无论对你还是对速子，都发生太多的第一次了`);
    era.println();
    await tachyon.say_and_wait(
      `真的没想到，凭着当时的一腔热血，居然能够走到这一步……`,
    );
    await tachyon.say_and_wait(
      `连我都有些惧怕了，所谓的可能性，就好像毒药一样，让人不由得将理智忘却……`,
    );
    era.println();
    await era.printAndWait(`速子看着自己的双腿，身体有些颤抖`);
    await era.printAndWait(`虽然不太懂${tachyon.sex}的意思，但`);
    era.printButton(`速子还想继续挑战极限吗？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `继续？不，豚鼠君，我一直都在挑战极限的路途上，没有停下来过。`,
    );
    await tachyon.say_and_wait(
      `菊花赏不过是一个起点而已，在菊花赏后才是真正朝着极限出发的旅途啊！`,
    );
    await tachyon.say_and_wait(
      `中距离最强的大阪杯、全现役${tachyon.get_uma_sex_title()}中上半年及下半年最强的宝冢纪念和有马纪念……`,
    );
    await tachyon.say_and_wait(`要超越的目标，要抵达的巅峰不是比比皆是吗？`);
    era.println();
    await era.printAndWait(`因此`);
    await era.printAndWait(`${tachyon.name}笔直的盯着你的双眼`);
    era.println();
    await tachyon.say_and_wait(`三冠结束后的世界，再与我一起同行吧，豚鼠君`);
    await tachyon.say_and_wait(`作为报酬，我会让你看见更加宽广的世界`);
    era.printButton(`……`, 1);
    era.printButton(`……`, 2);
    await era.input();
    era.println();
    await era.printAndWait(`你和${tachyon.name}的经典战线结束了`);
    await era.printAndWait(`古典战线即将开始！`);
    // todo 智+10
  } else if (edu_weeks === 95 + 3) {
    await print_event_name(`抽奖与代偿剂效应`, tachyon);
    era.println();
    await tachyon.say_and_wait(`真是……没想到居然会那么容易爆炸`);
    await tachyon.say_and_wait(
      `茶座也是……不就是加了点提升身体能力的药在咖啡粉里吗？怎么就那么生气……`,
    );
    await tachyon.say_and_wait(`果然这次还是要买些能禁得起诅咒的烧杯吧？`);
    era.printButton(`这种东西要跟谁进货啊……`, 1);
    era.printButton(`说到底根本就不会有需求的东西……`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `哼，不管${tachyon.sex}那个诅咒的原理是什么，说到底还是只能用外力的方式来破坏，`,
    );
    await tachyon.say_and_wait(
      `换句话说只要能够加强到怎么使用外力也破坏不了的程度就可以了`,
    );
    await tachyon.say_and_wait(
      `所以这次我们要找的是用太空材料制的，能够扛住宇宙高冷高热及气压的高规格烧杯哦`,
    );
    era.printButton(`啊，找到了，豚鼠君你看`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`真的假的！商店街好厉害！`);
    era.drawLine({ content: '时间稍微往前一点' });
    era.println();
    await era.printAndWait(`这天，你与速子一起上街采买实验用具`);
    await era.printAndWait(`采买完准备回家时……`);
    await say_by_passer_by(`商店街大叔`, `来哦来哦！商店街实验器材大出清！`);
    await say_by_passer_by(
      `商店街大叔`,
      `一次购买太空特制玻璃烧杯、宇宙陨矿坩埚，火箭燃料酒精灯的都能获得一次抽奖机会！`,
    );
    await say_by_passer_by(
      `商店街大叔`,
      `特等奖温泉旅行券！一等奖特大份胡萝卜汉堡排！`,
    );
    era.println();
    await era.printAndWait(
      `欸欸……这种东西，第一个就算了，后面几个真的有人会买吗……`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君，去抽奖吧`);
    era.printButton(`原来你全买了吗！？`, 1);
    era.printButton(`……酒精灯用火箭燃料真的不会有问题吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await tachyon.say_and_wait(`那还用说，实验室里需要补充的东西还是挺多的`);
      era.println();
      await era.printAndWait(`速子理所当然的说着`);
      await era.printAndWait(`……所以这条商店街到底是什么情况`);
    } else {
      await tachyon.say_and_wait(
        `豚鼠君，你连噱头都不明白吗？当然是噱头了噱头`,
      );
      era.println();
      await era.printAndWait(
        `……不，如果前几个都是真货的话最后一个被怀疑也是很正常的吧`,
      );
    }
    era.printButton(`不过，速子会对这种抽签感兴趣真少见`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `嗯……说的也是，毕竟比起抽签，这些奖品都是能直接用钱买到的……以我们的比赛奖金也不缺这点钱`,
    );
    era.println();
    await era.printAndWait(`这样的话……`);
    era.println();
    await tachyon.say_and_wait(`但我的目的不是奖品，而是观察`);
    era.println();
    await era.printAndWait(`观察……？`);
    era.println();
    await tachyon.say_and_wait(
      `还记得之前新年时说的吗？我想开始研究感情的影响了……`,
    );
    await tachyon.say_and_wait(
      `这样的话当然必须要有对照，最好的对照当然就是一直在我身边的你了`,
    );
    await tachyon.say_and_wait(`让我看看吧，你抽奖之后的反应`);
    era.println();
    await era.printAndWait(`于是，你上前转动滚轮……`);
    switch (get_random_value(0, 5)) {
      case 0:
        if (relation < 225) {
          await say_by_passer_by(`店主`, `安慰奖，面纸一包`);
          await era.printAndWait(`安慰奖啊……可惜，不过也没办法`);
          era.println();
          await tachyon.say_and_wait(`唔……你好像没什么反应啊`);
          era.println();
          await era.printAndWait(`不……毕竟一开始就没什么期待啊`);
          era.println();
          await tachyon.say_and_wait(
            `没有期待的意思是，从一开始你就不觉得会中吗？……这种在见到结果前就否认其可能性的做法，我并不欣赏就是了`,
          );
          era.println();
          await era.printAndWait(`啊……`);
          era.println();
          await tachyon.say_and_wait(`走吧，该回去继续实验了`);
          era.println();
          await era.printAndWait(`速子的心情变差了`);
          await era.printAndWait(`你们默默的回到了学园`);
        } else {
          await say_by_passer_by(`店主`, `安慰奖，面纸一包`);
          await era.printAndWait(`安慰奖啊……可惜，不过也没办法`);
          era.println();
          await tachyon.say_and_wait(`安慰奖啊……算了，其实也没什么关系`);
          era.println();
          await era.printAndWait(
            `速子也附和着，说到底就只是个商店街的小活动而已`,
          );
          era.println();
          await tachyon.say_and_wait(`毕竟这些奖品什么的我们都买得起不是吗`);
          await tachyon.say_and_wait(
            `再说，面纸其实也很有用……你看，可以用来擦东西不是吗？`,
          );
          await tachyon.say_and_wait(
            `还有，就是……那个温泉旅行券……就算抽到了我们也没时间去旅游不是吗`,
          );
          era.println();
          await era.printAndWait(`嗯？为什么忽然要说这么多`);
          await tachyon.say_and_wait(
            `……对了，豚鼠君，我听说这种抽奖有些商家都会做些机关……`,
          );
          era.println();
          await era.printAndWait(
            `见到速子甚至想上手去检查抽奖箱，你连忙拉着速子离开了商店街`,
          );
          await tachyon.say_and_wait(
            `咕……放开我，豚鼠君，我不在乎抽奖的奖品什么，但是身为消费者我有确认公平与否的权利及责任……！`,
          );
          era.println();
          await era.printAndWait(
            `……其实，${tachyon.sex}也没自己说的那么不在乎嘛`,
          );
        }
        // todo 干劲下降1级
        break;
      case 1:
        await say_by_passer_by(`店主`, `三等奖，特选胡萝卜一根！`);
        era.println();
        await era.printAndWait(`说什么特选……只是清库存吧`);
        await era.printAndWait(`你无奈的拿着一根胡萝卜`);
        await era.printAndWait(`不知是否是应该吐槽的点，但这抽奖的奖品`);
        await era.printAndWait(
          `怎么感觉除了安慰奖的面纸和特奖的温泉旅行券其他都是专门为${tachyon.get_uma_sex_title()}而设计的呢？`,
        );
        era.println();
        if (relation < 225 && event_marks.plan_b === 1) {
          await tachyon.say_and_wait(
            `胡萝卜啊……这么说来，他们的奖品基本都是挺实用的呢`,
          );
          era.println();
          await era.printAndWait(
            `速子没多说什么，自然从你手中接过了胡萝卜，掰了一小口放入嘴中`,
          );
          era.println();
          await tachyon.say_and_wait(`不错，挺甜的`);
        } else if (relation < 225 && event_marks.plan_b === 0) {
          await tachyon.say_and_wait(`哦？豚鼠君，你现在的表情挺不错的`);
          era.println();
          await era.printAndWait(`欸？表情？`);
          era.println();
          await tachyon.say_and_wait(`无奈，失落，安慰，很复杂的表情呢`);
          era.println();
          await era.printAndWait(
            `啊……这么说起来，是为了让速子研究感情才抽奖的来着`,
          );
          await era.printAndWait(
            `……研究感情什么的，总觉得像什么不懂人心的机器人啊`,
          );
          await era.printAndWait(`但想想眼前如疯狂科学家一般的速子……`);
          await era.printAndWait(
            `哪怕${tachyon.sex}现在说出什么不明白人心为何物大概都不会让人意外`,
          );
          era.println();
          await tachyon.say_and_wait(
            `今天的实验还算成功，接下来请再多表现出其他的感情给我吧，豚鼠君`,
          );
          era.println();
          await era.printAndWait(
            `速子擅自从你手上抢过胡萝卜，掰了尖头的一小段含入口中`,
          );
          era.println();
          await tachyon.say_and_wait(`味道不错`);
        }
        if (relation > 225) {
          era.println();
          await tachyon.say_and_wait(`哦呀，胡萝卜，这不是不错吗？`);
          era.println();
          await era.printAndWait(`速子走过来安慰你`);
          era.println();
          await tachyon.say_and_wait(
            `比起那些华而不实的东西，能够补充营养的还是比较实际吧`,
          );
          await tachyon.say_and_wait(
            `胡萝卜的话……回去做胡萝卜炒蛋吗？还是直接做胡萝卜汉堡排？直接打成胡萝卜汁似乎也不错……`,
          );
          era.println();
          await era.printAndWait(`听见速子安慰的话，你也忍不住笑了起来`);
          era.printButton(`那样的话一根可不够啊`, 1);
          era.printButton(`得再多买一些了`, 2);
          await era.input();
          era.println();
          await era.printAndWait(
            `于是，你们又回到商店街，买了足够做晚饭的量的胡萝卜`,
          );
          await era.printAndWait(`……这不是上了商店街推销的当了吗？`);
          await era.printAndWait(`回程的路上，你才后知后觉的发现`);
        }
        //todo 体力恢复20%
        break;
      case 2:
        await say_by_passer_by(`店主`, `二等奖，山一样高的胡萝卜堆！`);
        era.println();
        await era.printAndWait(`呜哇！好多！`);
        await era.printAndWait(`真的是字面意义堆的像小山一样高`);
        if (relation < 225) {
          era.println();
          await tachyon.say_and_wait(`哦呀，这不是很不错吗？`);
          era.println();
          await era.printAndWait(`速子露出欣喜的表情`);
          era.println();
          await tachyon.say_and_wait(`这个月，不，说不定这半年都不用愁萝卜了`);
          // todo 训练员不是${tachyon.get_uma_sex_title()}
          era.println();
          await era.printAndWait(
            `但，身为人类要那么多胡萝卜做什么啊……你将你的烦恼告诉了速子`,
          );
          era.println();
          await tachyon.say_and_wait(
            `哦呀……你的意思是，要以人类转化${tachyon.get_uma_sex_title()}的可能性进行实验吗？这样的研究……或许也不是不行……`,
          );
          era.println();
          await era.printAndWait(`…………速子？`);
          era.println();
          await tachyon.say_and_wait(
            `呵呵……提出了新的研究可能呢，豚鼠君……这个，姑且当成以防万一的planC吧`,
          );
          era.println();
          await era.printAndWait(`十分危险及不妙的名词令你忍不住背后一颤`);
          era.printButton(`还……还是给速子吧`, 1);
          era.printButton(`毕竟是你的抽奖券抽到的`, 2);
          await era.input();
          await tachyon.say_and_wait(`……也是，可惜了，明明有这么好的机会`);
          era.println();
          await era.printAndWait(
            `好不容易又逃过一劫的你与速子拉着一车的胡萝卜回到了特雷森学园`,
          );
          //todo 训练员是${tachyon.get_uma_sex_title()}
          await era.printAndWait(
            `不，但就算是${tachyon.get_uma_sex_title()}自己也吃不了那么多啊……`,
          );
          era.println();
          await tachyon.say_and_wait(
            `一般而言，对于${tachyon.get_uma_sex_title()}来说，消耗的能量越多需要补充的也就越多，所以吃得越多=越强其实是能够成立的`,
          );
          era.println();
          await era.printAndWait(`速子带着审量的眼神看着你的身体`);
          era.println();
          await tachyon.say_and_wait(
            `增加食欲的药吗？……呵呵，说不定是个好选择呢`,
          );
          era.println();
          await era.printAndWait(
            `看来这堆胡萝卜不可逃避的要变成你一个人的责任了`,
          );
          era.println();
          await era.printAndWait(
            `你垂头丧气的拉着一车胡萝卜与速子回到了特雷森学园`,
          );
        } else {
          era.println();
          await era.printAndWait(
            `看见奖品的瞬间你就开始思考，这么多的胡萝卜……能给速子做多少餐呢`,
          );
          era.println();
          await tachyon.say_and_wait(`真多啊……`);
          era.println();
          await era.printAndWait(`速子也不由得因这一堆的胡萝卜而惊呆了脸`);
          era.println();
          await tachyon.say_and_wait(`这样的话……有了……`);
          era.println();
          await era.printAndWait(`速子陷入了沉思`);
          await era.printAndWait(`对${tachyon.sex}熟悉颇深的你立马看出不妙`);
          era.println();
          await tachyon.say_and_wait(`……免费胡萝卜……药……找小栗帽或特别周……`);
          era.println();
          await era.printAndWait(`你连忙开口打断${tachyon.sex}的思绪`);
          era.printButton(`对……对了，来做胡萝卜满汉全席吧！`, 1);
          era.printButton(`我，我最近正好学了不少料理都是胡萝卜为主的！`, 2);
          await era.input();
          era.println();
          await tachyon.say_and_wait(`………………`);
          era.println();
          await era.printAndWait(`果然……还是不行吗？`);
          era.println();
          await tachyon.say_and_wait(
            `怎么不早说！哎呀，蒸煮炒炸……会怎么做呢～～豚鼠君，尽管做吧！食材这些没问题吧？需不需要更多点！`,
          );
          era.println();
          await era.printAndWait(`已经很够了，你苦笑着摇摇头`);
          await era.printAndWait(
            `能够用食物转移速子的注意力真是太好了……虽然接下来要是做的不好一定会被惩罚的吧`,
          );
          await era.printAndWait(`但自己受药总比闹到全校好……`);
          era.println();
          await era.printAndWait(
            `你拉着一车胡萝卜与兴奋的速子一同回到特雷森，路上脑袋里还在想着如何做出令速子满意的菜肴来`,
          );
        }
        //todo 速子状态上升 体力恢复20% 速子全属性+5
        break;
      case 3:
        await say_by_passer_by(`店主`, `一等奖 特大份胡萝卜汉堡排！`);
        era.println();
        await era.printAndWait(`欸……？`);
        await era.printAndWait(`一等奖就这个吗？`);
        era.println();
        await era.printAndWait(
          `……这样啊，是知名大厨做的，虽然是自己没听过的人就是`,
        );
        await era.printAndWait(
          `是错觉吗，但总觉得这个还不如二等奖的一车胡萝卜啊`,
        );
        era.println();
        await tachyon.say_and_wait(
          `哦呀，居然是一等奖……不过，豚鼠君你的情绪似乎不怎么开心的样子？`,
        );
        era.printButton(`毕竟这个奖品只有速子能吃吧`, 1);
        era.printButton(`感觉……还不如二等奖啊`, 2);
        await era.input();
        await tachyon.say_and_wait(
          `哦？……嗯，某种意义上来讲确实如此，无论是由大厨制作的，总归来说，也就是胡萝卜与肉而已，`,
        );
        await tachyon.say_and_wait(
          `原料层面上来看，价值确实不如二等奖的胡萝卜数量`,
        );
        era.println();
        // todo 还未给速子做过便当
        await era.printAndWait(`说完，速子捧过作为奖品的汉堡排`);
        await era.printAndWait(`切下刚好一口的大小，然后递到你的嘴旁。`);
        await me.say_and_wait(`欸，这是……`);
        era.println();
        await tachyon.say_and_wait(
          `胡萝卜的营养成分，对人类而言也是相当有益的，汉堡排中的动物蛋白也是……`,
        );
        await tachyon.say_and_wait(
          `不如说以人类的消化速率，对肉类的需求反而比${tachyon.get_uma_sex_title()}高上许多`,
        );
        era.println();
        await era.printAndWait(`不，不是，所以说这是……要自己吃下去的意思？`);
        era.println();
        await tachyon.say_and_wait(`啧……来，听话，啊～～`);
        era.println();
        await era.printAndWait(`居，居然还是『啊～～』`);
        await era.printAndWait(`你带着感动吃下了汉堡排……`);
        era.drawLine();
        era.printButton(`…………什么时候`, 1);
        await era.input();
        await era.printAndWait(`无事献殷勤，必然有诈`);
        await era.printAndWait(`然而……美人计总是防不胜防`);
        await era.printAndWait(
          `尤其对方还是准备给你喂食的绝世美${tachyon.get_teen_sex_title}`,
        );
        era.println();
        await era.printAndWait(`你看着身上发出的点点深蓝光芒，无语的问道`);
        era.println();
        await tachyon.say_and_wait(
          `哼，我的下药技术要是连你都能看穿，那也枉费我每天苦心骗茶座喝下我调制的药剂花的功夫了`,
        );
        await tachyon.say_and_wait(
          `剩下的……你自己吃了吧，我对这种东西不怎么感兴趣`,
        );
        era.println();
        await era.printAndWait(
          `速子……不知为何，${tachyon.sex}对一切饮食方面的要求都极为低标准`,
        );
        await era.printAndWait(`不，与其说是低标准不如说……毫无要求`);
        await era.printAndWait(`只要能够补充营养，什么都可以`);
        await era.printAndWait(
          `不过……毕竟现在还算在新年期间……稍稍得寸进尺一下应该也是可以的吧`,
        );
        era.printButton(`……真的很好吃的，速子不吃一口试试吗？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`不用了，不是客气，是真的不需要`);
        era.printButton(
          `但，这是速子的抽奖券抽到的，要是自己不尝尝的话就不公平了吧`,
          1,
        );
        await era.input();
        era.println();
        await tachyon.say_and_wait(`……也是，就吃一口试试`);
        era.println();
        await era.printAndWait(
          `回过神来，你叉子上叉着的那块肉已经被速子以迅雷不及掩耳的速度咬下`,
        );
        era.println();
        await tachyon.say_and_wait(
          `回过神来，你叉子上叉着的那块肉已经被速子以迅雷不及掩耳的速度咬下`,
        );
        era.println();
        await tachyon.say_and_wait(`好了，味道确实不错，就这样吧`);
        era.println();
        await era.printAndWait(`……好快！？`);
        await era.printAndWait(`完全没看到动嘴就……！`);
        await era.printAndWait(
          `……要是${tachyon.sex}真的开始享受起吃饭，大概会成为饭桌上的抢食能手吧`,
        );
        await era.printAndWait(`不知为何，你忽然开始思考起这些莫名其妙的事情`);
        // todo 已经有做便当经验
        await tachyon.say_and_wait(`那么……就让我来赋予其相应的价值吧`);
        era.println();
        await era.printAndWait(`说完，速子捧过作为奖品的汉堡排`);
        await era.printAndWait(`切下刚好一口的大小，然后递到你的嘴旁`);
        await era.printAndWait(`欸，这是……`);
        if (relation < 225) {
          await tachyon.say_and_wait(
            `身为G1赛${tachyon.get_uma_sex_title()}的${
              tachyon.name
            }亲手喂食的汉堡排，这样有没有相应的价值了？`,
          );
        } else {
          await tachyon.say_and_wait(
            `身为超绝美${
              tachyon.get_teen_sex_title
            }，还是G1赛${tachyon.get_uma_sex_title()}的${
              tachyon.name
            }亲手喂食的汉堡排，你愿意花多少来尝这一口呢？`,
          );
        }
        era.println();
        await tachyon.say_and_wait(`来，听话，啊～～`);
        era.println();
        await era.printAndWait(`居，居然还是『啊～～』`);
        await era.printAndWait(`你带着感动吃下了汉堡排……`);
        era.drawLine();
        era.printButton(`…………什么时候`, 1);
        await era.input();
        await era.printAndWait(`无事献殷勤，必然有诈`);
        await era.printAndWait(`然而……美人计总是防不胜防`);
        await era.printAndWait(
          `尤其对方还是准备给你喂食的绝世美${tachyon.get_teen_sex_title}`,
        );
        era.println();
        await era.printAndWait(`你看着身上发出的点点深蓝光芒，无语的问道`);
        era.println();
        await tachyon.say_and_wait(
          `哼，我的下药技术要是连你都能看穿，那也枉费我每天苦心骗茶座喝下我调制的药剂花的功夫了`,
        );
        await tachyon.say_and_wait(`剩下的……喂！给我也留一口啊！`);
        era.println();
        await era.printAndWait(
          `化悲愤为食欲的你拼命的与速子争夺着剩下的汉堡排`,
        );
        await era.printAndWait(
          `…………不得不承认，知名主厨做的确实比自己要强上许多`,
        );
        //todo 速子体力 + 30;速子全属性 + 10; 速子干劲上升一级;
        if (love < 75 && love > 50) {
          await tachyon.say_and_wait(`……再说，做的也不如你`);
          era.println();
          await era.printAndWait(`欸……？`);
          await era.printAndWait(
            `虽然被这样称赞很让人高兴，但自己的厨艺大概还是比不上这种知名主厨……`,
          );
          era.println();
          await tachyon.say_and_wait(
            `呵呵……重要的不是营养，也不是味道，而是做的心意……这个，不是你教我的吗？`,
          );
          era.println();
          await era.printAndWait(`说完，速子捧过作为奖品的汉堡排`);
          await era.printAndWait(`切下刚好一口的大小，然后递到你的嘴旁`);
          await era.printAndWait(`欸，这是……`);
          era.println();
          await tachyon.say_and_wait(
            `不过你说的也对……没有比较确实不好确定啊，科学必须严谨对吧`,
          );
          await tachyon.say_and_wait(
            `所以……有技术但没有爱，以及技术略逊但有爱，其中究竟谁优谁劣……❤`,
          );
          era.println();
          await era.printAndWait(`将汉堡排轻柔的喂入你口中的速子`);
          await era.printAndWait(`再切了一小块放入自己口中`);
          era.println();
          await tachyon.say_and_wait(
            `就麻烦你回去再做一份了以做比较了，豚鼠君❤`,
          );
          era.println();
          await era.printAndWait(`在${tachyon.sex}的笑容面前`);
          await era.printAndWait(`自己仿佛真的变成了豚鼠一般，只能任其摆弄`);
        } else if (love > 75) {
          await tachyon.say_and_wait(`那么，就让我来赋予它相应的价值吧……`);
          era.println();
          await era.printAndWait(`说完，速子捧过作为奖品的汉堡排`);
          await era.printAndWait(`切下刚好一口的大小，然后递到你的嘴旁`);
          await era.printAndWait(`欸，这是……`);
          era.println();
          await tachyon.say_and_wait(
            `与爱人一起吃的汉堡排……这样它的价值是否提升了呢？`,
          );
          era.println();
          await era.printAndWait(`没有等你回话，速子就将汉堡排戳进了你的口中`);
          await era.printAndWait(`嚼完汉堡排后，${tachyon.sex}才将叉子抽离`);
          era.println();
          await tachyon.say_and_wait(`接下来轮到你了，亲爱的❤`);
          era.println();
          await era.printAndWait(`速子张开嘴，等待着你的喂食`);
          await era.printAndWait(`你们分享完了这个汉堡排`);
        }
        //todo 速子体力 + 30;速子全属性 + 10; 速子干劲上升一级;
        break;
      case 4:
        if (love > 75) {
          await tachyon.say_and_wait(`……没错，就是现在`);
          await tachyon.say_and_wait(`转！`);
          era.println();
          await era.printAndWait(
            `相信着速子的你听见${tachyon.sex}的话立马转动了滚轮`,
          );
          await say_by_passer_by(`店主`, `特等奖！温泉旅行券！`);
          era.println();
          await era.printAndWait(`商店街的大叔用力摇晃着铃铛`);
          await era.printAndWait(`宣布今天的最大奖已被抽出`);
          era.println();
          await tachyon.say_and_wait(`哦呀……温泉旅行券啊，看起来不错呢`);
          era.println();
          await era.printAndWait(`期限……到明年四月`);
          await era.printAndWait(`这样的话，等到URA总决赛结束正好是时间`);
          era.printButton(`速子，要一起去吗？`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(
            `那当然，不如说除了我，还有什么其他人会跟你一起去吗？`,
          );
          era.println();
          await era.printAndWait(`真是不留情的话啊`);
          era.println();
          await tachyon.say_and_wait(
            `开玩笑的，这张温泉券，就当作我给你三年以来的奖励吧……在突破了一切困难伤病之后迎来的……我们的happy ending`,
          );
          era.println();
          await era.printAndWait(`速子贴在你耳边说道`);
          await era.printAndWait(
            `让人难以想象会是速子说出的这些话使你不由得惊讶的想抬起眼……`,
          );
          era.println();
          await tachyon.say_and_wait(`不要动`);
          era.println();
          await era.printAndWait(
            `速子依旧贴在你身旁，和你一起，两人站在抽奖箱前亲昵的聊着`,
          );
          await era.printAndWait(`奇怪的是……为什么不肯离开抽奖箱……？`);
          era.println();
          await tachyon.say_and_wait(`好了，我们走吧，豚鼠君`);
          era.println();
          await era.printAndWait(`欸`);
          await era.printAndWait(
            `一直依偎在身旁的热度忽然消失，你连忙跟上了速子离开了商店街`,
          );
          await era.printAndWait(`只看见走出商店街的速子从左眼里取出了什么`);
          era.println();
          await tachyon.say_and_wait(`呼，总算好点了`);
          era.println();
          await era.printAndWait(`…………？速子的眼睛……？`);
          await era.printAndWait(
            `你仔细盯着速子，这才发现原本${tachyon.sex}的红色渐层双眼，不知为何有一边看上去有那么一点点淡`,
          );
          era.println();
          await me.say_and_wait(`……美瞳？`);
          era.println();
          await era.printAndWait(`难以想象速子是会带这种东西的人`);
          era.println();
          await tachyon.say_and_wait(
            `呵呵……这个啊，是神宫君和我合作研发的东西哦，`,
          );
          await tachyon.say_and_wait(
            `首先呢，我的药剂可以让这种美瞳具有透视非生物的能力，`,
          );
          await tachyon.say_and_wait(
            `而神宫君可以根据看见的东西来分析其运动轨迹，本来是用在分析比赛跑者上`,
          );
          era.println();
          await era.printAndWait(`速子霹雳啪啦说了许多，让你有些晕乎`);
          await era.printAndWait(`不过……`);
          era.println();
          era.printButton(`难道说……这就是透视眼镜？`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(`嘛，差不多……不过，因为一些小瑕疵，`);
          await tachyon.say_and_wait(
            `比如要是戴着这个的话，在习惯眼前改变的视线前可以说一步都走不了，`,
          );
          await tachyon.say_and_wait(
            `随便乱用的话甚至可能会因过多的资讯量而使大脑陷入昏迷，`,
          );
          await tachyon.say_and_wait(
            `所以我跟神宫君是打算把这东西封印的，呵呵，没想到居然能够在这里派上用场……`,
          );
          era.println();
          await era.printAndWait(`派上用场……？`);
          await era.printAndWait(`透视+轨迹分析………`);
          await era.printAndWait(`不能动所以站在福抽的抽奖箱面前……`);
          await me.say_and_wait(`啊`);
          era.printButton(`刚刚的福抽！`, 1);
          era.printButton(`速子你……`, 2);
          await era.input();
          await tachyon.say_and_wait(`嘘`);
          era.println();
          await era.printAndWait(
            `${tachyon.sex}把手放在唇前，比了个安静的手势`,
          );
          era.println();
          await tachyon.say_and_wait(`我不是说过吗？这是我送给你的礼物`);
          era.println();
          await tachyon.say_and_wait(`不是神明，也不是什么冥冥之中的运气`);
          await tachyon.say_and_wait(
            `是我，${tachyon.name}给我的爱人送上的新年贺礼`,
          );
          await tachyon.say_and_wait(`新年快乐，${me.actual_name}君`);
          era.println();
          await era.printAndWait(
            `以前提到新年，可能脑袋里会浮现出许许多多难忘的回忆`,
          );
          await era.printAndWait(
            `诸如围炉、全家团圆、年夜饭或者电视上无聊的新春节目`,
          );
          await era.printAndWait(
            `但从今天起，提起新年，脑袋里会浮现的第一印象便只有一个了`,
          );
          await era.printAndWait(
            `在逐渐亮起的路灯下，如偷腥的小猫一般露出计谋得逞的微笑的${tachyon.sex}，`,
          );
          era.println();
          await me.say_and_wait(`以及那个吻的滋味`, true);
          await era.printAndWait(`那个吻的味道是甜蜜的滋味，比速子的红茶还甜`);
          {
            const event_marks = new TachyonEduMarks();
            if (!event_marks.hot_spring) {
              event_marks.hot_spring++;
            }
          }
        } else {
          await say_by_passer_by(`店主`, `特等奖！温泉旅行券！`);
          era.println();
          await era.printAndWait(`商店街的大叔用力摇晃着铃铛`);
          await era.printAndWait(`宣布今天的最大奖已被抽出`);
          era.println();
          await era.printAndWait(`抽到特等奖了！`);
          await era.printAndWait(`居然是双人的温泉旅行券`);
          era.println();
          await tachyon.say_and_wait(`哦呀……温泉旅行券啊，看起来不错呢`);
          era.println();
          await era.printAndWait(`期限……到明年四月`);
          await era.printAndWait(`这样的话，等到URA总决赛结束正好是时间`);
          if (love > 50 && love < 75) {
            era.printButton(`速子，一起去吧！`, 1);
            await era.input();
            await tachyon.say_and_wait(`呼姆……一起去吗？`);
            await tachyon.say_and_wait(
              `豚鼠君，你是在理解一般『一起去温泉旅行』的人都是什么关系之后，对我提出的邀请吗？`,
            );
            era.println();
            await era.printAndWait(`一般一起去温泉旅行的人……`);
            era.printButton(`夫妻`, 1);
            era.printButton(`情侣`, 2);
            era.printButton(
              `……一般的${tachyon.get_uma_sex_title()}和训练员不是本来就会去吗？`,
              3,
            );
            const ret1 = await era.input();
            if (ret1 === 1) {
              await era.printAndWait(`一般来讲……新婚夫妻吧`);
              await era.printAndWait(`新婚旅行什么的很常去温泉旅行不是吗`);
              await era.printAndWait(`……我和速子，新婚夫妻……？`);
            } else if (ret1 === 2) {
              await era.printAndWait(`大概……是情侣吧`);
              //todo 马娘性转马郎后，或玩家选择女性相关不同
              await era.printAndWait(
                `如果不是这么亲密的关系，一般也不会一男一女独自去温泉旅行吧`,
              );
              await era.printAndWait(`我和速子……情侣吗？`);
            } else {
              await era.printAndWait(
                `……不，一般${tachyon.get_uma_sex_title()}和训练员不是本来就很常去吗？`,
              );
              await era.printAndWait(
                `每年四月都有很多前辈会和自己的负责${tachyon.get_uma_sex_title()}去……而且似乎都是在商店街抽到的，真不可思议`,
              );
              await era.printAndWait(
                `不过……果然孤男寡女去温泉旅行，还是会有些奇怪吧……？`,
              );
              era.println();
              await tachyon.say_and_wait(
                `那么，你又希望和我在那时候变成什么关系呢？豚鼠君……明年四月啊，呵呵，令人期待`,
              );
              era.println();
              await era.printAndWait(`明年四月，自己与速子的关系吗……`);
            }
          } else if (relation < 225) {
            await era.printAndWait(`不过……速子会愿意和自己去吗？`);
            era.println();
            await tachyon.say_and_wait(`URA总决赛结束温泉旅行吗……听起来不错呢`);
            era.println();
            await era.printAndWait(`哦？居然这么轻松就答应了吗？`);
            await era.printAndWait(`还以为会嫌麻烦拒绝呢`);
            era.println();
            await tachyon.say_and_wait(
              `温泉旅馆就是那个吧，无论发生什么意外事件哪怕死了人都是很正常的地方，`,
            );
            await tachyon.say_and_wait(
              `这样的话我做点无害的小实验应该也无伤大雅……`,
            );
            era.println();
            await era.printAndWait(`…………要不，现在把券还回去吧？`);
          } else if (relation > 225) {
            await tachyon.say_and_wait(
              `嗯……一起去吗？做为实验场所而言，确实是个不错的地方`,
            );
            await tachyon.say_and_wait(
              `温泉旅馆就是那个吧，无论发生什么意外事件哪怕死了人都是很正常的地方，`,
            );
            await tachyon.say_and_wait(
              `这样的话我做点无害的小实验应该也无伤大雅……`,
            );
            era.printButton(`不是的`, 1);
            await era.input();
            era.println();
            await era.printAndWait(`不是作为实验或研究的场所`);
            await era.printAndWait(`而是在三年的两人三脚结束后两人的歇息`);
            era.printButton(`无关训练，无关实验，只是纯粹的休息……不行吗？`, 1);
            await era.input();
            era.println();
            await tachyon.say_and_wait(`……明年四月吗`);
            await tachyon.say_and_wait(`呵呵，那就当成对豚鼠的犒劳吧`);
            await tachyon.say_and_wait(
              `明年四月，等到我们的梦想告一段落……要是到那时候，你依然跟在我的身旁的话，就一起去吧`,
            );
            era.printButton(`嗯！`, 1);
            await era.input();
            await tachyon.say_and_wait(`不过，既然给予了奖励……`);
            await tachyon.say_and_wait(
              `那么剩下的一年，你也要好好加油才行啊，`,
            );
            await tachyon.say_and_wait(
              `乖乖接受实验，每天给我做饭，还有茶座想逃跑的时候要把${tachyon.sex}抓回来给我实验……`,
            );
            era.println();
            await era.printAndWait(`等一下等一下！最后那个明显做不到吧！`);
            era.println();
            await era.printAndWait(`在嬉笑中，你们回到了特雷森学园`);
            await era.printAndWait(`明年四月啊……真令人期待`);
          }
          // todo 速子体力+30
          // 速子干劲上升
          // 速子全属性+10
          break;
        }
    }
  } else if (edu_weeks === 95 + 6) {
    await print_event_name(`情人节`, tachyon);
    if (love > 75) {
      await tachyon.say_and_wait(`来，豚鼠君，情人节巧克力`);
      era.println();
      await era.printAndWait(
        `听见忽然闯入训练员室的速子，淡淡说出的话，你才意识到，今天原来是情人节啊`,
      );
      await era.printAndWait(`为了速子的训练整天忙前忙后，连时间都忘了`);
      era.println();
      await me.say_and_wait(`不过……速子给的巧克力吗`, true);
      await era.printAndWait(
        `你看着速子从身后捧出的心型盒子，里面用小格子一格格分开的小巧巧克力`,
      );
      await era.printAndWait(`里面该不会……`);
      era.println();
      await tachyon.say_and_wait(
        `嗯？什么嘛，这种表情，难道是觉得我会在里面加甚么药？`,
      );
      era.printButton(`(点了点头)`, 1);
      era.printButton(`难道没有吗？`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……真是过分的说法，虽然无法反驳`);
      await tachyon.say_and_wait(
        `不过今天……毕竟是特别的日子，我还是不会做出那种事的啦`,
      );
      await tachyon.say_and_wait(`不信的话，我先吃一块？`);
      era.println();
      await era.printAndWait(`你看着速子将巧克力缓缓推入口中`);
      await era.printAndWait(`被前牙抵住的巧克力，随着樱唇的微启`);
      await era.printAndWait(`一口，两口`);
      await era.printAndWait(`顺着手指的推入，巧克力渐渐消失在速子的口中`);
      era.println();
      await era.printAndWait(`这样的话……或许就能放心吃下去了吧`);
      await era.printAndWait(`你伸手，朝向桌上的巧克力`);
      await era.printAndWait(`然而`);
      era.printButton(`……？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`巧克力盒，在手伸过去的瞬间被抽走了`);
      await era.printAndWait(`正当你感到奇怪时`);
      era.printButton(`！？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`没有防备的唇被偷袭`);
      await era.printAndWait(`灵巧的舌头撬开牙关后，灌入的是甜腻的黏浆`);
      await era.printAndWait(
        `被紧紧压住，抵住的舌头，和压住自己的不速之客化作桥梁，让浓稠的，浓稠的液体顺流而下`,
      );
      await era.printAndWait(`好甜，好甜`);
      await era.printAndWait(`完全符合速子口味的巧克力沁入口腔`);
      await era.printAndWait(
        `明明对你而言应该会太甜的口味，在速子的舌头搅拌下，竟然渐渐的习惯了起来`,
      );
      await era.printAndWait(`仿佛自己从身体在被改造，被调整成速子喜欢的模样`);
      await era.printAndWait(`……不，调整这个词，或许用的不是那么好`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，巧克力，还有很多哦❤`);
      era.println();
      await era.printAndWait(`看着眼前爱人充满情欲及兽慾的眼神`);
      await era.printAndWait(`啊啊……被“料理”好的食材，就要准备被食用了`);
    } else if (love > 50) {
      await tachyon.say_and_wait(`哦呀，豚鼠君，情人节快乐！`);
      era.println();
      await era.printAndWait(
        `晴朗的一天，忽然打破这宁静早晨撞开大门，是身后拿着一个大袋子的${tachyon.name}`,
      );
      await era.printAndWait(`……奇怪，今天应该不是圣诞节啊`);
      era.println();
      await tachyon.say_and_wait(
        `嗯？这些？是别的${tachyon.get_uma_sex_title()}们送的礼物哦？`,
      );
      await tachyon.say_and_wait(
        `真是……明明都说不需要了，比起这种东西，倒不如说自愿提供给我实验我还会比较高兴……`,
      );
      era.println();
      await era.printAndWait(`原来速子……这么受欢迎吗`);
      await era.printAndWait(`你的心中忽然涌起一丝丝的嫉妒`);
      era.println();
      await tachyon.say_and_wait(`不提这个了，总之豚鼠君快收下我的巧克力吧！`);
      era.println();
      await era.printAndWait(
        `速子从包里挑挑拣拣，翻找着袋子里那些大小略有不同但大同小异的巧克力`,
      );
      await era.printAndWait(`难道说……只是随便把其他人给的巧克力转送而已吗？`);
      await era.printAndWait(
        `明明和速子的关系并没有到那种程度，却还是忍不住觉得，自己应该有所不同，应该会被特殊对待`,
      );
      era.printButton(`那是……义理的巧克力吗？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`身为指导者明明不该问这种问题的`);
      await era.printAndWait(`但是……果然`);
      await era.printAndWait(`还是想要知道，速子的真实想法`);
      era.println();
      await tachyon.say_and_wait(`…………`);
      era.println();
      await era.printAndWait(`听见你的话，速子停下了翻找袋子的手`);
      await era.printAndWait(`抬起头来，直直盯着你的眼睛`);
      await era.printAndWait(`那双美丽的红瞳，仿佛看透了你的内心一般`);
      era.println();
      await tachyon.say_and_wait(`哦呀，这句话是什么意思呢，豚鼠君？`);
      await tachyon.say_and_wait(`如果说是义理的，该怎么办？`);
      await tachyon.say_and_wait(`还是你希望……是什么类型的巧克力呢？`);
      era.printButton(`希望是速子特别送的`, 1);
      era.printButton(`希望是速子只送给我一人的巧克力`, 2);
      await era.input();
      era.println();
      await era.printAndWait(`最后，还是不敢说出那两个字`);
      await era.printAndWait(
        `怎么可以呢，身为训练员的自己，居然要问负责${tachyon.get_uma_sex_title()}对自己是不是“真爱”`,
      );
      era.println();
      await tachyon.say_and_wait(`那么，就给你吧`);
      era.println();
      await era.printAndWait(
        `终于，从布袋最底下翻出一个七彩颜色，绝不会被人认错的小包装后`,
      );
      await era.printAndWait(`速子将巧克力塞进胸口的小口袋`);
      era.println();
      await tachyon.say_and_wait(
        `来吧，给亲爱的实验动物，作为一年的感激……以及，感激之外的❤`,
      );
      await tachyon.say_and_wait(`就请你，亲自来将其拿出吧`);
      // todo if 玩家还未有过性经验
      era.println();
      await era.printAndWait(`看见速子明显将胸前突出的动作`);
      await era.printAndWait(`你颤颤巍巍的伸出手来`);
      await era.printAndWait(`小心翼翼，不碰到胸的取出了巧克力`);
      // todo if 玩家已经有过性经验
      await era.printAndWait(`看见速子明显将胸前突出的动作`);
      await era.printAndWait(`你大方的伸出手，不客气的直接拿走了巧克力`);
      await era.printAndWait(
        `途中捏到的，使得身前${tachyon.get_uma_sex_title()}发出娇声的肉块？`,
      );
      await era.printAndWait(
        `大概是错觉吧，毕竟放巧克力的架子怎么会发出声音来呢`,
      );
      era.println();
      await era.printAndWait(`拨开巧克力的包装，你将巧克力含在口中`);
      await era.printAndWait(`在放进口中的瞬间，巧克力便直接融化了`);
      era.printButton(`！？`, 1);
      await era.input();
      await era.printAndWait(`猪肉、洋葱、酱汁……`);
      await era.printAndWait(`完全不像巧克力该出现的味道弥漫在你口中`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？表情怎么这么奇怪？`);
      await tachyon.say_and_wait(
        `快点快点，有什么效果？……肉体上看不出变化，难道是什么内在上发作的吗……`,
      );
      await era.printAndWait(
        `忽然一改前面的暧昧气氛，速子兴奋的问起你吃下巧克力的反应`,
      );
      era.println();
      await tachyon.say_and_wait(
        `豚鼠君？难道说，你不想对我辛苦在实验室调配了半天做出的巧克力做出评价吗？`,
      );
      era.println();
      await era.printAndWait(`…………这个家伙`);
    }
    await tachyon.say_and_wait(`豚鼠君！哈哈哈，情人节快乐！`);
    era.printButton(`……速子？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`看见如此亢奋的速子，你不由得有些警惕`);
    await era.printAndWait(
      `原因无他，平常态度总是冷淡的速子，今天的态度却意外的亢奋`,
    );
    era.println();
    await tachyon.say_and_wait(
      `嗯？豚鼠君？怎么了，不祝我情人节快乐吗？是不是……不喜欢我……咕呜……`,
    );
    await tachyon.say_and_wait(`呜呜……唔……头……好晕……`);
    era.println();
    await era.printAndWait(`奇怪，怎么总觉得今天的速子……有些奇怪`);
    await era.printAndWait(
      `你仔细观察着速子的脸，原本以为是因为寒冷的天气或者兴奋的情绪而微红的脸颊和迷离的双眼顿时被你捕捉`,
    );
    era.printButton(`……速子，你喝酒了？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`唔……才没有……`);
    await tachyon.say_and_wait(`只是……只是……不小心喝了点……乙醇的混合物……`);
    era.println();
    await era.printAndWait(`乙醇混合物……那不就是酒吗！？`);
    await era.printAndWait(`难怪速子的情绪看起来如此不对劲……`);
    await era.printAndWait(`总之，这样今天大概是没法训练了`);
    await era.printAndWait(`还是先让${tachyon.sex}好好休息吧`);
    era.println();
    await era.printAndWait(`然而看上去并不想休息的速子躲过了你的手后`);
    await era.printAndWait(
      `在怀中翻了几下，才从那总是藏在白大褂内侧口袋的药瓶中，勉强找出了某个用实验滤纸包裹的东西`,
    );
    await era.printAndWait(`拨开一看，里面是一块七彩颜色的巧克力`);
    era.println();
    await tachyon.say_and_wait(`唔……对……对了……豚鼠君……？`);
    await tachyon.say_and_wait(`情……情人节的，巧克力……`);
    era.drawLine();
    await era.printAndWait(`如此不妙的情人节礼物，真是第一次看到啊`);
    await era.printAndWait(`真的要把这么可疑的巧克力吃下去吗`);
    era.printButton(`这是……用什么做的？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`用……什么？唔……忘记了……`);
    await tachyon.say_and_wait(
      `好像……好像…可可粉……牛奶……糖……酱油……洋葱……生猪肉？`,
    );
    era.println();
    await era.printAndWait(`最后那几个完全不是应该出现在巧克力里的东西吧！？`);
    await era.printAndWait(`不过……值得庆幸的是起码没放什么有毒的东西吗？`);
    await era.printAndWait(`虽然味道一定会很怪`);
    era.println();
    await tachyon.say_and_wait(`为……为什么不吃……`);
    await tachyon.say_and_wait(`吃啊……豚鼠君……是不是……不给我面子……`);
    era.println();
    await era.printAndWait(`怎么忽然变成劝酒的大叔口气了！？`);
    await era.printAndWait(`速子看你一直迟迟不肯动手，干脆自己拿起了巧克力`);
    await era.printAndWait(`然后……叼在口中`);
    era.println();
    await tachyon.say_and_wait(`唔……吞舒君，滋样继嫩吃了吧(这样就能吃了吧)`);
    era.println();
    await era.printAndWait(`速子将巧克力轻轻咬在口中`);
    await era.printAndWait(`樱唇微启，朝着你示意从另外一边咬上来`);
    await era.printAndWait(`……欸？`);
    era.println();
    await tachyon.say_and_wait(
      `嘻嘻……滋样苏不定u机会亲得呃(这样说不定有机会亲到哦)`,
    );
    era.println();
    await era.printAndWait(`……这就是酒的魔力吗`);
    await era.printAndWait(
      `原本总是不给自己好脸色看的速子，表情居然变得如此柔和，妩媚`,
    );
    await era.printAndWait(`不由自主的，你上前咬住了巧克力`);
    era.println();
    await era.printAndWait(`好近，好近`);
    await era.printAndWait(`近的能够直接感受到速子的鼻息`);
    await era.printAndWait(`你望着速子的眼睛`);
    await era.printAndWait(`那令人着迷，现在却有些醉朦的眼眸`);
    era.println();
    await era.printAndWait(
      `你小口小口咬着，生怕万一巧克力吃完了，这样的时光就会消失`,
    );
    await era.printAndWait(
      `速子也慢慢的，向前靠近，近的两对蝶唇几乎就要碰在一起……不，也或许，已经碰到了呢？`,
    );
    await era.printAndWait(`然而……巧克力的大小也就那样`);
    await era.printAndWait(
      `或许是温度影响，也或许是谁率先断了这维持不易的连结`,
    );
    await era.printAndWait(
      `巧克力在你们两人的口中融化，断裂，进入了两人的口中`,
    );
    era.printButton(`！？`, 1);
    await era.input();
    await era.printAndWait(`……没毒`);
    await era.printAndWait(
      `在速子的淫威下试过许多次药的你可以大胆做出判断，不是有毒的东西`,
    );
    await era.printAndWait(`但是这个味道……这个味道……`);
    era.printButton(`为什么……是猪肉盖饭……？`, 1);
    await era.input();
    await era.printAndWait(`虽然在听见最后那些莫名其妙的食材之后就有所预感`);
    await era.printAndWait(`但这味道还是令人难以理解`);
    await era.printAndWait(`不如说，到底是怎么做出这种巧克力来的……`);
    await era.printAndWait(`你看向速子，速子却一直没有说话`);
    await era.printAndWait(`该不会……有什么问题……`);
    era.println();
    await tachyon.say_and_wait(`……………噗`);
    await tachyon.say_and_wait(`哈哈哈哈！这什么味道啊！也太奇怪了！`);
    era.println();
    await era.printAndWait(`速子忽然开始大笑`);
    await era.printAndWait(`难道是有什么自己并不知道的笑点吗？`);
    await era.printAndWait(`你思考了一下`);
    await era.printAndWait(`猪排盖饭味道的巧克力`);
    await era.printAndWait(`…………仔细想想，好像确实挺好玩的`);
    era.println();
    await era.printAndWait(`不知不觉，你也跟着笑了起来`);
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(`zzz……唔嗯……咻……`);
    era.println();
    await era.printAndWait(`真是……胡闹完之后就自顾自的睡着了`);
    await era.printAndWait(`难道说，速子有变成那种酒品不好的醉汉的潜力吗……？`);
    era.println();
    await tachyon.say_and_wait(`嗯……豚鼠……谢……咻……`);
    era.println();
    await era.printAndWait(`………难道说`);
    await era.printAndWait(`是因为害羞，不敢说出口所以……`);
    await era.printAndWait(`不，在想什么呢，速子的话……八成真的是意外……吗？`);
    await era.printAndWait(`你擦了擦速子嘴边的口水`);
    await era.printAndWait(
      `姑且……等${tachyon.sex}醒来之后跟${tachyon.sex}确认一下吧，希望……${tachyon.sex}最起码知道巧克力里该加和不该加的东西`,
    );
    if (relation > 225) {
      await tachyon.say_and_wait(`哈哈哈！豚鼠君！`);
      era.println();
      await era.printAndWait(
        `随着一阵开朗的笑声，撞开训练员室大门的，是身后拿着一个大袋子的${tachyon.name}`,
      );
      era.println();
      await tachyon.say_and_wait(
        `Merry Christmas？Happy New Year？反正就是某种节日快乐，快快快，收下我的礼物吧！`,
      );
      era.printButton(`……是说，情人节吗？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `唔……不重要，总之这是个可以合法塞食物给别人的节日对吧？`,
      );
      era.println();
      await era.printAndWait(`……这样解释似乎也没错？`);
      await era.printAndWait(`但是一想到对方是速子……`);
      era.printButton(`……你加了什么药`, 1);
      era.printButton(`……你给多少人了`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`那种事不重要！快收下吧，我的情人节礼物！`);
      era.println();
      await era.printAndWait(
        `速子从包里挑挑拣拣，拿出了一块尤其大块的巧克力，没有问过你的允许就塞进你的手里`,
      );
      await era.printAndWait(
        `看${tachyon.sex}熟练的动作，一路上应该已经给过不少人了吧`,
      );
      await era.printAndWait(`……明天得去各方道歉才行，但首先要先活过这关`);
      await era.printAndWait(`你战战兢兢的咬了口巧克力`);
      era.printButton(`！？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`发光、变形、长出两颗头、背上生出翅膀、液化……`);
      await era.printAndWait(`种种变化都………没有发生`);
      await era.printAndWait(`要说的话，大概，可能，说不定只是普通的巧克力`);
      await era.printAndWait(`但是，这是${tachyon.name}标准的『正常』`);
      await era.printAndWait(`要说是不是正常人来说的巧克力……`);
      era.printButton(`为什么……是猪排盖饭味的！？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`猪肉、洋葱、酱汁……`);
      await era.printAndWait(`完全不像巧克力该出现的味道弥漫在你口中`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？表情怎么这么奇怪？`);
      await tachyon.say_and_wait(
        `快点快点，有什么效果？……肉体上看不出变化，难道是什么内在上发作的吗……`,
      );
      era.println();
      await era.printAndWait(`这家伙……连自己都不知道药效是什么就随便给人塞吗`);
      await era.printAndWait(
        `其他日子也就算了，想起这个情侣们到处放闪喂狗粮的日子被速子这样毁掉…………`,
      );
      await era.printAndWait(`奇怪，怎么忽然觉得速子做的对呢`);
      await era.printAndWait(`…………总之，还是该给速子些教训才对`);
      era.printButton(`好像没有出现效果啊`, 1);
      era.printButton(`速子也吃吃看吧`, 2);
      await era.input();
      era.println();
      await era.printAndWait(
        `没等速子回应，你就将吃了一口的巧克力塞进速子口中`,
      );
      era.println();
      await tachyon.say_and_wait(`唔！？咕呜！？`);
      era.println();
      await era.printAndWait(`破不及防的速子被塞了满嘴的巧克力`);
      await era.printAndWait(
        `想要开口的${tachyon.sex}不由得将嘴里的巧克力吞下`,
      );
      era.println();
      await tachyon.say_and_wait(`等，你在做什么！豚鼠君！？`);
      await tachyon.say_and_wait(`呜呃……这是什么味道！？`);
      await tachyon.say_and_wait(
        `好奇怪的味道！！为什么巧克力会有猪排的味道啊！`,
      );
      era.println();
      await era.printAndWait(
        `虽然明天大概会被狠狠报复，但此刻看见速子满脸惊愕和恶心的模样`,
      );
      await era.printAndWait(`你还是感到心中一阵畅快`);
      era.println();
      await era.printAndWait(`你和速子吵吵闹闹的情人节结束了`);
    }
    new TachyonLifeMarks().choco = 1;
  } else if (edu_weeks === 95 + 13) {
    if (event_marks.plan_b === 1) {
      await print_event_name(`闪烁的光子`, tachyon);
      await era.printAndWait(`夜间的训练场`);
      await era.printAndWait(`理应无人，理应不该有人的这个时间点……`);
      era.println();
      await tachyon.say_and_wait(`……哈哈，人可真多啊……`);
      era.println();
      await era.printAndWait(`意外的，赛场上充满了自主训练的人`);
      await era.printAndWait(
        `由于G1战线的开始，感到紧张的${tachyon.get_uma_sex_title()}们自作主张的训练也是这个时期特雷森的常见风景线啊`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `啊，速子前……欸，训练员先生！？`,
      );
      era.println();
      await era.printAndWait(
        `一名看见了速子想上来打招呼的后辈，看到隐藏在${tachyon.sex}背后的你，立马僵住了步伐`,
      );
      await era.printAndWait(`毕竟再怎么说，自主训练还是不被鼓励的行为……`);
      await era.printAndWait(
        `不过，陪着负责${tachyon.get_uma_sex_title()}主动来自主训练的你也没什么资格责备${
          tachyon.sex
        }们吧`,
      );
      era.printButton(`嘘`, 1);
      await era.input();
      era.println();
      await era.printAndWait(
        `你苦笑着对${tachyon.sex}比了个嘘的手势，${tachyon.sex}也悟性很高的装作没看到你，继续和速子说着话`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `速子前辈！我今年也进入经典赛了！皋月赏好可惜～～没办法参赛，但德比我会加油的！`,
      );
      await tachyon.say_and_wait(`呵呵，那要好好努力了`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `速子前辈！我今年也进入经典赛了！皋月赏好可惜～～没办法参赛，但德比我会加油的！`,
      );
      await tachyon.say_and_wait(`呵呵，那要好好努力了`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `可恶～～因为本格化的太晚，所以训练员让我回避了皋月赏……有没有办法能够加快本格化的速度呢`,
      );
      await tachyon.say_and_wait(
        `还是顺其自然发展比较好……强迫发育无论如何都会留下隐患……`,
      );
      era.println();
      await era.printAndWait(`和后辈谈话时的速子，温和的出乎你的意料`);
      await era.printAndWait(`甚至让人有点难以相信这是速子会说出的话`);
      await era.printAndWait(`……不过仔细想想，却又是情理之中`);
      await era.printAndWait(`最看重可能性的速子，是绝对不可能会容许`);
      await era.printAndWait(
        `为了一时的成绩而牺牲${tachyon.get_uma_sex_title()}的可能性的`,
      );
      await era.printAndWait(`尤其对方还是拥有更宽广可能性的后辈`);
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `啊……时间也不早了，速子前辈！我先回去了！`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `另外……天皇赏春，虽然茶座前辈很强，但我相信速子前辈一定会赢的！`,
      );
      era.println();
      await era.printAndWait(`满怀憧憬的${tachyon.sex}，眼神中闪烁着光芒`);
      era.drawLine();
      await era.printAndWait(`茶座很强，这是理所当然的`);
      await era.printAndWait(`哪怕不加上速子和自己的辅助，茶座都很强`);
      await era.printAndWait(`正常竞争的情况速子都必须经过一番苦战`);
      await era.printAndWait(`除此之外……`);
      // todo If 全属性1200
      await era.printAndWait(
        `虽然能力上足够，但在比赛经验上，以及几个月没踏上赛场的速子绝对不如茶座`,
      );
      // todo If 全属性未1200
      await era.printAndWait(
        `能力上，现在的速子甚至不如皋月和德比时的${tachyon.sex}`,
      );
      await era.printAndWait(`哪怕尽力想要恢复，能力却还是有限`);
      era.println();
      await era.printAndWait(`更何况，速子参赛的目的……不是为了赢下比赛`);
      await era.printAndWait(`只是为了让茶座能够登上更高的顶点`);
      await era.printAndWait(
        `可以说，不是输赢都不重要，而是……不能赢，不希望赢`,
      );
      await era.printAndWait(
        `要是赢了就代表速子的梦想，最后的希望曼城茶座也败给${tachyon.name}的极限了`,
      );
      await era.printAndWait(`所以……`);
      era.println();
      await tachyon.say_and_wait(`…………`);
      era.println();
      await era.printAndWait(`所以，很难回答吧`);
      await era.printAndWait(`能对信赖自己的后辈说出这种话吗？`);
      await era.printAndWait(`说，天皇赏春一定赢不下来`);
      await era.printAndWait(
        `对着眼神中的憧憬由于忽然冻结的气氛渐渐转为困惑的后辈，真的说得出口吗？`,
      );
      era.println();
      await era.printAndWait(
        `理论上这个时候应该站出来帮速子解围的你，不知为何却钉在原地无法动弹，无法开口`,
      );
      await era.printAndWait(`或许是因为你也在等待一个答案`);
      era.println();
      await me.say_and_wait(`${tachyon.name}，真的不在乎胜负吗？`, true);
      await era.printAndWait(`真的甘愿拱手让出胜利吗？`);
      await era.printAndWait(`有办法在自己重视的可能性面前说出放弃吗？`);
      era.println();
      await era.printAndWait(`不知道过去了多久`);
      await era.printAndWait(
        `在其他自主训练的${tachyon.get_uma_sex_title()}们都已回去，沉默已经变成夜的常态`,
      );
      era.println();
      await tachyon.say_and_wait(`…………茶座${tachyon.sex}，真的是个很强的对手`);
      era.println();
      await era.printAndWait(`……也是`);
      await era.printAndWait(`这才是理所当然的`);
      era.println();
      await era.printAndWait(
        `说到底，万一速子真的认真想拿下这场胜负，那么最头疼的人应该是自己才对`,
      );
      await era.printAndWait(
        `说到底最初会答应这种闹剧般的提议，不就是因为这是对茶座和速子双赢的方案`,
      );
      await era.printAndWait(
        `茶座获得荣光，速子获得${tachyon.sex}想要的实验结果`,
      );
      await era.printAndWait(
        `万一速子现在改卜，那么将陷于两难中的，就变成你了`,
      );
      era.println();
      await tachyon.say_and_wait(
        `但是……我会赢。不管茶座${tachyon.sex}多强都一样，赢的会是我`,
      );
      era.println();
      await era.printAndWait(`！`);
      await era.printAndWait(`居然……是回马枪吗`);
      await era.printAndWait(`这下，可不妙了啊……`);
      await era.printAndWait(
        `哪怕只是敷衍后辈的话，这样的回答都一定说明了速子的心已经发生动摇了`,
      );
      await era.printAndWait(`更何况，如果只是敷衍，那前面又何必沉默那么久`);
      await era.printAndWait(`这样的话……自己该怎么办才好`);
      await era.printAndWait(`茶座的训练员先生，速子的豚鼠君`);
      await era.printAndWait(`到底该怎么选择？`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `是！我那天绝对会去给速子前辈加油的！`,
      );
      era.println();
      await era.printAndWait(
        `欢快的脚步声离开，留下你们两人继续在寂静的训练场上，星空作伴`,
      );
      era.println();
      await era.printAndWait(
        `要是选择速子的话，当初选择了PlanB的自己又算什么？`,
      );
      // todo If 茶座爱慕值>50
      if (love > 50) {
        await era.printAndWait(
          `要是还继续帮助速子的话，对得起自己竭尽全力支持的那名${tachyon.get_teen_sex_title}吗？对得起${tachyon.sex}泡的咖啡吗？`,
        );
        era.println();
        await era.printAndWait(`所以，应该要帮助茶座吧`);
        await era.printAndWait(
          `所以，应该和速子确认吧，确认${tachyon.sex}说的不过是应付后辈用的场面话而已`,
        );
        await era.printAndWait(`所以……这种情况下，内心是不该感到喜悦的吧？`);
        era.println();
        await era.printAndWait(`为什么，此刻内心会如此喜悦`);
        await era.printAndWait(`难道说，自己当初真心想选择的，其实是PlanA吗？`);
        await era.printAndWait(`难道说，自己帮助茶座，是违背本心的行为`);
        await era.printAndWait(`……不，只有这个，自己可以断言绝非如此`);
        await era.printAndWait(
          `那为什么……明明应该是无比让人纠结的事，自己的心却怎么也无法平缓心跳`,
        );
        await era.printAndWait(`不由自主的，你开口问道`);
        era.printButton(`速子……刚刚说的，不是认真的吧？`, 1);
        era.printButton(`速子……刚刚说的，当然是开玩笑的吧？`, 2);
        await era.input();
        era.println();
        await tachyon.say_and_wait(
          `当然了，计较输赢那是小孩子的权利……我们需要的，只有实验的数据，仅此而已`,
        );
        await era.printAndWait(`话语会骗人`);
        await era.printAndWait(`声音会骗人`);
        await era.printAndWait(`自诩永远理性的人，会为了自己的利益骗人`);
        await era.printAndWait(`但……感动不会`);
        era.println();
        await era.printAndWait(`这句话有几成真几成假，你不得而知`);
        await era.printAndWait(
          `但……${tachyon.sex}目光中，几个月前几乎消失的光芒`,
        );
        await era.printAndWait(`令你灼目，陷入感动却已经熄灭的光芒`);
        await era.printAndWait(`在今夜，又亮起了微弱的火光`);
        //todo 技能点+10
      }
    }
  } else if (edu_weeks === 95 + 14) {
    await print_event_name(`粉丝感谢祭`, tachyon);
    if (event_marks.plan_b === 0) {
      await tachyon.say_and_wait(`因此，根据我的实验结果……大阪杯时粉丝……`);
      await tachyon.say_and_wait(
        `以及某人，具有的热情制造出了力量，使我超越了原来的速度，果然，感情是带有一定程度力量的吧`,
      );
      era.printButton(`没想到速子居然会相信这种唯心的概念啊`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `我只相信真理及可能性，只要有这个可能性我就能赌上一切……豚鼠君你不也是吗？`,
      );
      await tachyon.say_and_wait(
        `唯物唯心都好，只要能够为我所用，让我超越极限，抵达可能性的尽头……`,
      );
      await tachyon.say_and_wait(
        `用，让我超越极限，抵达可能性的尽头……哪怕是茶座的朋友，我也不会吝啬借其一用的`,
      );
      await tachyon.say_and_wait(
        `……不过要合理解释的话，大概是与大脑皮层及中枢神经的活跃程度有关吧，简单来讲就是……呵呵，合法的兴奋剂？`,
      );
      era.printButton(`！？`, 1);
      await era.input();
      await tachyon.say_and_wait(
        `呵呵，开玩笑的……但本质上这种兴奋对体能的加成，如果是无意识之下，那么提升的兴奋阀值也有限，`,
      );
      await tachyon.say_and_wait(
        `起码绝对不会有大阪杯那时测量出来的那么高…难道说是我自己精神上…`,
      );
      era.printButton(`速子？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `……不，没什么，还需要再进行验证罢了，比起这个，我想更加深入研究看看……『粉丝』的概念`,
      );
      era.printButton(`粉丝……`, 1);
      era.printButton(`那也就是说……`, 2);
      await era.input();
      await tachyon.say_and_wait(`错……我打算参加看看，粉丝感谢祭`);
      await tachyon.say_and_wait(
        `近距离的接触……这次的目的有二，如果顺利的话……希望能一次解决`,
      );
      era.drawLine();
      await say_by_passer_by(`粉丝A`, `速子小姐！请问可以和您拍张照吗！`);
      await tachyon.say_and_wait(`呵呵，当然可以了，需要摆什么特殊的姿势吗？`);
      await say_by_passer_by(
        `粉丝A`,
        `不，不用，只需要像这样双手抱胸就可以了！`,
      );
      await tachyon.say_and_wait(`像这样吗？`);
      await say_by_passer_by(`粉丝A`, `非，非常感谢！`);
      era.println();
      await say_by_passer_by(
        `粉丝B`,
        `速子同学！我支持你很久了！宝冢纪念也要加油啊`,
      );
      await tachyon.say_and_wait(`是吗是吗？谢谢你的鼓励`);
      await say_by_passer_by(
        `粉丝B`,
        `是的，希望速子同学之后也能继续跑出更加令人着迷的跑法来！`,
      );
      await tachyon.say_and_wait(`一定会的，哈哈哈哈！`);
      era.println();
      await era.printAndWait(`速子有条不紊的与来访的粉丝们进行着应答`);
      await era.printAndWait(`速子营业模式与一般情况的差距……`);
      await era.printAndWait(
        `有时差距真的大到会让人开始怀疑到底哪边才是${tachyon.sex}的本性`,
      );
      await era.printAndWait(`很快的，活动便结束了`);
      era.println();
      await tachyon.say_and_wait(`唔……收集到了很有趣的数据呢`);
      await tachyon.say_and_wait(
        `我整理了今天来无论是握手签名还是拍照的比赛观众——`,
      );
      await tachyon.say_and_wait(
        `以下简称为『粉丝』，观看比赛的目的，以及见到我之后的心跳呼吸脉搏反应速率……`,
      );
      await tachyon.say_and_wait(`根据粉丝不同的说法做出了结论`);
      await tachyon.say_and_wait(
        `————${tachyon.name}，对这些粉丝而言，类似于实验中的奖赏`,
      );
      await tachyon.say_and_wait(
        `付出名为应援的努力，希望能够获得回应作为奖赏……`,
      );
      era.printButton(`……我不觉得是这样`, 1);
      era.printButton(`对速子的应援没有那么复杂`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `……嗯，这个论述的话，最大的破绽就在于，豚鼠君，你的支援又是为了什么`,
      );
      await tachyon.say_and_wait(
        `皋月赏、日本德比、菊花赏，还有大阪杯……你都为我应援了吧`,
      );
      await tachyon.say_and_wait(
        `但是与他们不同……跟在我身边的你是知道的，知道当时的我还没有将粉丝的支持当成需要特别看待的实验变量`,
      );
      await tachyon.say_and_wait(
        `所以你的应援及支持，无法获得任何的回报，和你对我的研究的支持不同……`,
      );
      await tachyon.say_and_wait(
        `相比你对我研究上的支持，能够获得你想要看见的跑法和比赛……`,
      );
      await tachyon.say_and_wait(`但应援和支持这方面，完全不明白啊`);
      era.println();
      await era.printAndWait(`听见速子的询问，你不由得一时语塞`);
      await era.printAndWait(`要对速子的问题做出回答其实并不难`);
      await era.printAndWait(
        `但……这种感情上的东西，真的是能够透过言语来使人理解的吗`,
      );
      await era.printAndWait(`看你没回话，速子又继续说道`);
      era.println();
      await tachyon.say_and_wait(`这样的话，今天的实验只能算成功一半吧……`);
      await tachyon.say_and_wait(
        `之后就是宝冢纪念了，这次要整体测量粉丝的支持对数据的影响才行`,
      );
      await era.printAndWait(`在迷惑中，速子的粉丝感谢祭结束了`);
      //todo 干劲上升1级
    } else {
      await era.printAndWait(
        `对身体的准备还没完全完善，因此速子拒绝了关于粉丝感谢祭的活动与采访`,
      );
      await era.printAndWait(
        `这也使得周围对于“${tachyon.name}复出”一事产生了不稳定的心态以及怀疑`,
      );
      await era.printAndWait(`但这些都与你和速子无关，质疑……`);
      await era.printAndWait(
        `不，如果按照两人的预定计画走，那么质疑越多可能反而越利于两人的计画推行才对`,
      );
      await era.printAndWait(
        `……因此，听见那些人对速子的批评，你只能默默咬着牙关，离开现场`,
      );
    }
  } else if (edu_weeks === 95 + 18) {
    await print_event_name(`重新绽放的光子`, tachyon);
    await era.printAndWait(`不能再这样下去了`);
    await era.printAndWait(`在速子不知道第几次回避与你的对话后，你下定了决心`);
    await era.printAndWait(`虽然训练都有来，也都正常的做着实验`);
    await era.printAndWait(
      `但只要一停下来，想与${tachyon.sex}谈论天春时的事情就会马上逃离现场`,
    );
    await era.printAndWait(`无论何时何地，甚至哪怕是实验中也是`);
    era.println();
    await era.printAndWait(`这样下去不行`);
    await era.printAndWait(
      `看着${tachyon.sex}的表情，一天比一天衰败，甚至畏缩`,
    );
    await era.printAndWait(`${tachyon.name}不应该是这样`);
    await era.printAndWait(`${tachyon.name}不可以是这样`);
    era.println();
    await era.printAndWait(`明明好不容易寻回了眼中的光`);
    await era.printAndWait(`却因为这种事情熄灭什么的，绝对不行`);
    await era.printAndWait(`逃避的原因，大概也能理解`);
    if (love < 75) {
      await era.printAndWait(`虽然还有一部分不得而知`);
      await era.printAndWait(`因此……`);
      era.printButton(`必须要对${tachyon.sex}说清楚才行`, 1);
      await era.input();
      era.drawLine();
      tachyon.print(`test`);
      tachyon.print(`……已经逃避了几周了`);
      tachyon.print(`自天春结束以来，一直在躲着他`);
      tachyon.print(`躲着那个，为了我牺牲一切的人`);
      tachyon.print(
        `理性而言，继续负责一名不想跑步，没有未来的${tachyon.get_uma_sex_title()}，这是毫无意义，浪费名额资源及时间的行为`,
      );
      tachyon.print(
        `感性而言，是将他的梦想，将他所着迷的跑法毁掉，于此之上还要求他配合什么荒谬的PlanB，牺牲梦想去配合他人`,
      );
      era.println();
      tachyon.print(`即便如此，他还是义无反顾的跟了上来`);
      tachyon.print(`为了我的研究，自愿当实验品`);
      tachyon.print(`为了我的任性，带着茶座一起被卷入其中`);
      tachyon.print(`因此作为交换，想让他和茶座获得声誉，作为微不足道的补偿`);
      tachyon.print(`但是……`);
      era.println();
      await tachyon.say_and_wait(`……嗯？`);
      era.println();
      tachyon.print(
        `今天也一样，刻意避开了与他的对话，躲避除去必要情况以外的交流，回到实验室前`,
      );
      tachyon.print(`但……已经有人在实验室外等待着自己了`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君`);
      era.println();
      tachyon.print(`不要`);
      tachyon.print(`不行`);
      tachyon.print(`不是现在`);
      era.println();
      tachyon.print(`明明很简单`);
      tachyon.print(`${tachyon.name}只要在宝冢纪念输掉就好`);
      tachyon.print(`只要在宝冢纪念让出胜利，就可以重新……`);
      era.println();
      tachyon.print(`不，已经没有办法了`);
      tachyon.print(`奔跑的本能无法抑制`);
      tachyon.print(`这只不过是自欺欺人，逃避现实的做法`);
      era.println();
      tachyon.print(`眼前的身影站在走道的正中央`);
      tachyon.print(`全身颤抖……也是，肯定会愤怒的吧`);
      tachyon.print(`犯了错之后还不停逃避的蠢货`);
      tachyon.print(`算了，已经做好觉悟了`);
      tachyon.print(`将一切的怒气……发泄出来吧`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君`);
      era.drawLine();
      era.println();
      await era.printAndWait(`首先，该说什么呢？`);
      await era.printAndWait(
        `应该先说出口吧，告诉${tachyon.sex}，自己并没有责怪的意思`,
      );
      await era.printAndWait(
        `说到底，因为对手放水才获得的胜利，那种胜利茶座${tachyon.sex}是绝对不会高兴的`,
      );
      await era.printAndWait(`帮助茶座抵达更高的巅峰，这一目的并没有被毁坏`);
      await era.printAndWait(
        `不如说，前面觉得可以把茶座完全握在手中揉捏的想法，那也太过傲慢了`,
      );
      await era.printAndWait(
        `接下来，继续拼尽全力的参加比赛，互相砥砺，才是PlanB最好的执行方式`,
      );
      await era.printAndWait(`所以……`);
      await era.printAndWait(`没错，就这么说吧`);
      era.printButton(`速子……`, 1);
      era.printButton(`天皇赏跑的，真的太厉害了！`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……欸？`);
      era.println();
      await era.printAndWait(`没错`);
      await era.printAndWait(`比起那些理论道理，还是这样的话语更适合自己`);
      await era.printAndWait(`痴迷于速子的跑法，并且愿意为其牺牲一切的豚鼠`);
      era.println();
      await era.printAndWait(`速子不知为何，忽然直直地盯着自己的双眼`);
      await era.printAndWait(`如同第一次见面时一样，也和皋月赏、德比前一样`);
      await era.printAndWait(
        `到底自己的眼睛是什么颜色的，能让${tachyon.sex}每次都发出那样的感叹呢`,
      );
      era.println();
      await tachyon.say_and_wait(`……可是，这样的话，PlanB……`);
      era.printButton(
        `必须要${
          tachyon.name
        }放水才能胜利的茶座，真的有可能超越${tachyon.get_uma_sex_title()}的极限吗？`,
        1,
      );
      await era.input();
      era.println();
      await tachyon.say_and_wait(`…………`);
      era.println();
      await era.printAndWait(`是因为对梦想的盲目吗？`);
      await era.printAndWait(`还是对茶座的执着`);
      await era.printAndWait(`导致速子似乎遗忘了最重要的事`);
      if (love > 75) {
        await me.say_and_wait(
          `这样看来婚后或许速子会是意外溺爱孩子的性格也说不定`,
          true,
        );
      }
      era.println();
      await tachyon.say_and_wait(
        `……这是，${tachyon.name}的训练员的说法吧？那曼城茶座的训练员怎么办`,
      );
      if (love < 75) {
        era.println();
        await era.printAndWait(`……一时的震惊让你忘记言语`);
        await era.printAndWait(`无法明白的速子逃离自己的原因`);
        await era.printAndWait(
          `如果是对茶座抱有罪恶感也就算了，为什么要躲避自己`,
        );
        await era.printAndWait(`${tachyon.name}……在为自己担心……？`);
      }
      await era.printAndWait(`那么，曼城茶座的训练员，应该对此做出回应吧`);
      era.printButton(`很不甘心……没能带着茶座取得胜利`, 1);
      era.printButton(`所以，宝冢茶座绝对会变得比现在更强来超越速子！`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……不甘心……吗？`);
      era.println();
      await era.printAndWait(`速子咀嚼着话语，但是，要说的还没说完`);
      era.printButton(`但是，身为${tachyon.name}的训练员！`, 1);
      era.printButton(`绝不会让速子输给茶座的，宝冢一定也是速子的胜利！`, 2);
      await era.input();
      era.println();
      await era.printAndWait(`没有错`);
      await era.printAndWait(
        `这就是，${tachyon.name}的训练员『以及』曼城茶座的训练员做出的回答`,
      );
      await era.printAndWait(`理由？天春的时候不就说过了吗？`);
      await era.printAndWait(`因为自己，深深的爱着${tachyon.sex}们的跑法`);
      if (love > 75) {
        await era.printAndWait(`因为自己，深深的爱着${tachyon.sex}们`);
      }
      era.println();
      await tachyon.say_and_wait(`……豚鼠君`);
      era.println();
      await era.printAndWait(`低声的呼唤`);
      await era.printAndWait(`然后是令人紧张的沉默`);
      await era.printAndWait(`在不知道多久的沉默过后……`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，你就这么喜欢我的跑法吗？`);
      era.println();
      await era.printAndWait(`答案自不用说，脸上的表情和眼神已经说明了一切`);
      era.println();
      await tachyon.say_and_wait(`…………那么，有兴趣，陪我多走几段路吗？`);
      await tachyon.say_and_wait(`陪我，来趟法国的浪漫之旅吧`);
      era.println();
      await era.printAndWait(`……欸？`);
      // todo 速子状态上升
      // 技能点+10
    }
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name(`夏日集训开始·实验的短暂歇息`, tachyon);
    await tachyon.say_and_wait(`夏日集训，然后……`);
    if (event_marks.plan_b === 0) {
      era.println();
      await tachyon.say_and_wait(`然后再下一步……就是年底的有马纪念了`);
      await tachyon.say_and_wait(
        `嗯，以最具有影响力的比赛作为我们理论的结束……呵呵，这真是，再适合不过了啊`,
      );
    } else {
      await tachyon.say_and_wait(`然后再下一步……就是凯旋门了了`);
      await tachyon.say_and_wait(
        `嗯，以世界的顶点作为巅峰的目标……呵呵，这真是，再适合不过了啊`,
      );
    }
    era.printButton(`不过，在这之前……`, 1);
    era.printButton(`还是先好好享受一番吧`, 2);
    await era.input();
    await era.printAndWait(`阳光，沙滩，比基尼`);
    await era.printAndWait(`还有速子的泳装`);
    await era.printAndWait(`速子的，泳装`);
    if (love > 50) {
      await tachyon.say_and_wait(
        `只是看看……就够了吗？难道不想，亲自体验上手吗？`,
      );
      era.println();
      await era.printAndWait(`速子前倾望着你的双眼，等待着某人主动踏出一步`);
      era.printButton(`……`, 1);
      era.printButton(`……`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        era.println();
        await era.printAndWait(
          `你忍不住伸手，朝向速子胸前，那两条敷衍的细布完全装不下的果实`,
        );
        era.println();
        await tachyon.say_and_wait(`嗯……❤`);
        era.println();
        await era.printAndWait(`速子发出了低吟，但瞳中的情绪却没什么变化`);
        await era.printAndWait(`你不由得陷入紧张，是自己的技术不够好吗？`);
        era.println();
        await tachyon.say_and_wait(`不管怎么努力，都还是会被说更用力一些`);
        await tachyon.say_and_wait(
          `说到底本来想用人类的力道去满足${tachyon.get_uma_sex_title()}就是难以做到的事吧……`,
        );
        await tachyon.say_and_wait(
          `此时，你忽然发现，在泳装的下方，有着两颗先前没有，或者说没有那么明显的突起`,
        );
        await tachyon.say_and_wait(
          `或许是作为速通的作弊按纽吧，鬼使神差的，你按下了圆润的球体上唯一的突起`,
        );
        era.println();
        await tachyon.say_and_wait(`等……咿！豚……豚鼠君！那里，那里不行！`);
        era.println();
        await era.printAndWait(
          `前面被指使了那么久，现在哪有说停就停的道理，你不问不顾继续逮着尖顶的位置欺负`,
        );
        era.println();
        await tachyon.say_and_wait(
          `我……是我错了……刚刚不该那么说……不要，不要再按了……不行，不可以……`,
        );
        era.println();
        await era.printAndWait(`速子的反应比你想象的还要大上许多`);
        await era.printAndWait(
          `不由得产生了好奇心的你忽然童心大发，想测试看看怎么做速子的反应才会最为激烈`,
        );
        era.println();
        await tachyon.say_and_wait(`豚鼠君……哈啊……哈啊……`);
      }
      era.println();
      await era.printAndWait(
        `你稍稍放松了手上的动作，在以为已经脱离危险的豚鼠小姐放松警惕后……`,
      );
      era.println();
      await tachyon.say_and_wait(`咿——————去，去了`);
      era.println();
      await era.printAndWait(`如压榨奶牛挤奶一般，用力的向下一拉`);
      await era.printAndWait(
        `伴随全身不住的颤抖，${tachyon.name}翻着白眼，向前倒下，压在了你的身子上`,
      );
      era.println();
      await tachyon.say_and_wait(`欸嘿嘿……`);
      era.println();
      await era.printAndWait(
        `你轻轻抚摸着速子的背部，缓解${tachyon.sex}的全身痉挛`,
      );
      era.printButton(`真是没用啊，只是捏了捏乳头就去了吗？`, 1);
      era.printButton(
        `比起赛${tachyon.get_uma_sex_title()}，不如说是繁殖用的母马更合适吧`,
        2,
      );
      await era.input();
      era.println();
      await era.printAndWait(
        `听见你侮辱性的话语，速子又抖了抖身子，被${tachyon.sex}压在身下的你感受到了微微的暖意从${tachyon.sex}的股间流出`,
      );
    } else if (relation < 0) {
      await tachyon.say_and_wait(
        `……我不会要求你必须和我一样以理性至上，但至少收收你那发情猴子一样的眼神`,
      );
    } else if (relation > 0 && relation < 225) {
      era.println();
      await tachyon.say_and_wait(
        `呵，就这么喜欢这种露出度高的衣服吗？……不，这种情况风阻变小，确实有可能增加速度……`,
      );
      era.println();
      await era.printAndWait(`速子说到一半又陷入了自己的沉思`);
      await era.printAndWait(
        `至于泳装对跑步的加成……你看了看${tachyon.sex}那不工整的热裤和凉鞋……你想，问题应该不在泳装上吧`,
      );
    } else if (relation > 225) {
      era.println();
      await tachyon.say_and_wait(
        `怎么？看得这么入迷？呵呵，作为对帮助实验的奖励，再多看一些也没关系哦`,
      );
      era.println();
      await era.printAndWait(`速子扭了扭身子，更加凸显了胸前的硕大`);
    }
  } else if (edu_weeks === 95 + 31) {
    if (event_marks.plan_b === 0) {
      era.println();
      await era.printAndWait(`阳光，沙滩`);
      await era.printAndWait(
        `以及在沙滩上奔跑着的${tachyon.get_uma_sex_title()}们`,
      );
      era.printButton(`真是青春啊`, 1);
      await era.input();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `……看着眼前的场景居然能说出这种话来，训练员先生您也……真不愧是速子前辈的训练员啊`,
      );
      era.println();
      await era.printAndWait(
        `夏日的沙滩上，正在进行着${tachyon.get_uma_sex_title()}间的追逐战`,
      );
      await era.printAndWait(`仿佛鬼抓人一般`);
      await era.printAndWait(
        `明明是以一对多，但不知为何惧怕并逃跑的却是人多的一方`,
      );
      await era.printAndWait(
        `而被惧怕着的一方，赫然是今年上半年风头最盛的${tachyon.get_uma_sex_title()}，也是你的负责${tachyon.get_uma_sex_title()}，${
          tachyon.name
        }`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哦呀哦呀……这可真是，现在的孩子连良药苦口的道理都不明白了吗`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}B`,
        `……如果，只是苦的程度也就算了`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}C`,
        `速子前辈的药……虽然味道不错，虽然不错，但是……！`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}D`,
        `身体发光什么的……这种事真的太丢人了！`,
      );
      era.println();
      await era.printAndWait(`…………欸？`);
      await era.printAndWait(
        `你看着眼前的${tachyon.get_uma_sex_title()}们……虽然因为阳光的关系不太明显，但确实在手臂肩膀或者腿的位置散发着微弱的光芒`,
      );
      await era.printAndWait(`不过，为什么发光的都是些奇怪的地方`);
      await era.printAndWait(
        `嗯？怎么还有个${tachyon.get_uma_sex_title()}大腿内侧在……`,
      );
      era.println();
      await tachyon.say_and_wait(
        `……这种药的效果，是让血流加速的部位发光，而且药效应该只有训练的那一个小时有效，`,
      );
      await tachyon.say_and_wait(
        `但副作用是会加速兴奋情况下被触碰位置的蛋白质UMA—A的活性，而血流加速发光的原理就是透过对UMA—A`,
      );
      era.drawLine();
      await tachyon.say_and_wait(
        `总而言之，就是……与心上人，或者会使自己心跳加速的人身体接触，才会发光`,
      );
      era.println();
      await era.printAndWait(`啊，原来如此`);
      await era.printAndWait(`这下能够明白肩膀手臂发光的原因了`);
      await era.printAndWait(`……等等，那大腿内侧的……`);
      await era.printAndWait(
        `你看${tachyon.sex}忽然羞红了脸的模样，已经领悟了一切`,
      );
      await era.printAndWait(`……现在的孩子玩的真花啊`);
      era.println();
      await tachyon.say_and_wait(
        `总之……这种药，主要还是辅佐作用，必须要结合持之以恒的训练才能有效`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}B`,
        `我……我们会好好训练的！真的不会偷懒！所以药什么的……`,
      );
      await tachyon.say_and_wait(
        `呵呵，那可不行，两者结合才能达到最佳的提升效果，所以……乖乖喝下去吧！`,
      );
      era.println();
      await era.printAndWait(
        `眨眼间，速子便趁着${tachyon.get_uma_sex_title()}们放松警惕时一个箭步冲到了其中一名${tachyon.get_uma_sex_title()}面前，以迅雷不及掩耳的速度将药灌入${
          tachyon.sex
        }的口中`,
      );
      era.println();
      await tachyon.say_and_wait(
        `就让你们瞧瞧吧……以豚鼠君为对象训练出来的灌药能力！哈哈哈哈哈哈！`,
      );
      await say_by_passer_by(`${tachyon.get_uma_sex_title()}B`, `咿呀———`);
      await say_by_passer_by(`${tachyon.get_uma_sex_title()}C`, `咕哇————`);
      era.println();
      await era.printAndWait(
        `再怎么说，也是身为G1级${tachyon.get_uma_sex_title()}，也是你认可的最快的${tachyon.get_uma_sex_title()}，这些还未完全发育成的后辈当然不是速子的对手`,
      );
      await era.printAndWait(`不过几分钟的时间，整个沙滩已经尸横遍野`);
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}B`,
        `速……速子前辈怎么，好像变了个人一样`,
      );
      era.println();
      await era.printAndWait(
        `这么说来，为了后辈们眼中的形象好方便实验，速子一般在后辈们面前都是维持着装出来的成熟前辈样来着`,
      );
      await era.printAndWait(
        `要说的话，眼前这副模样才是${
          tachyon.name
        }这名${tachyon.get_uma_sex_title()}的本性才对`,
      );
      await era.printAndWait(`不过……${tachyon.sex}说的也没错`);
      era.printButton(`速子确实……改变了很多呢`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`你想起了前几天速子说的话`);
      tachyon.print(`想要变得和速子前辈一样强……那些孩子这么和我说了哦！`);
      tachyon.print(
        `来吧！豚鼠君！为了那些孩子，必须要努力调配最适合${tachyon.sex}们的药出来才行！`,
      );
      tachyon.print(`不是，『为了实验，让${tachyon.sex}们试药』`);
      tachyon.print(`不是，『为了实验，让${tachyon.sex}们试药』`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `果然是这样吧……以前那个温柔的速子前辈到底去哪里了……`,
      );
      era.println();
      await tachyon.say_and_wait(`哦呀～～这里不还有一匹小马驹吗？`);
      await say_by_passer_by(`${tachyon.get_uma_sex_title()}A`, `咿！！！`);
      era.println();
      await era.printAndWait(
        `看着最后躲在你身旁的小${tachyon.get_uma_sex_title()}也被速子按倒灌药，这场沙滩上的残忍实验总算以${
          tachyon.name
        }的完胜作为结局`,
      );
      era.println();
      await tachyon.say_and_wait(`好了，豚鼠君，开始我们今天的实验吧`);
      await era.printAndWait(`但只有这点，是不会改变的`);
      await era.printAndWait(
        `${
          tachyon.name
        }始终还是追求着极限以及突破极限的${tachyon.get_uma_sex_title()}`,
      );
      era.printButton(`那么，今天的实验主题是？`, 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait(
          `豚鼠君……你应该知道吧，最近铃鹿君似乎学会了在水上跑步的方法`,
        );
        await era.printAndWait(`…………欸？`);
        era.println();
        await tachyon.say_and_wait(
          `根据计算，只要能够以超过30m每秒的速度在水上奔跑，确实是可以达到类似于轻功点水的效果`,
        );
        era.println();
        await era.printAndWait(`……不是，30m？每秒？`);
        await era.printAndWait(`不知何时，自己的腰上已经被绑上了一条绳子`);
        await era.printAndWait(`而速子坐上了海边的水上摩托`);
        await era.printAndWait(`……为什么你是水上摩托我却要在水上跑啊！？`);
        era.println();
        await tachyon.say_and_wait(`加油吧，豚鼠君，你一定可以的`);
        era.println();
        await era.printAndWait(`话音刚落，整个人便飞了出去`);
        await era.printAndWait(
          `轻功水上飘有没有成功不知道，但据看见那道风景线的小${tachyon.get_uma_sex_title()}们所说，倒是像打水漂时在水面上弹跳的石子`,
        );
        // todo 耐+10
        // 根+5
      } else {
        await tachyon.say_and_wait(`今天的话……来点有意思的实验吧`);
        era.println();
        await era.printAndWait(`忽然，速子当着一群后辈们的面前，牵住了你的手`);
        era.printButton(`速……速子？`, 1);
        await era.input();
        era.println();
        await era.printAndWait(
          `原本趴在地上装死的后辈们忽然抬起眼睛盯着你们两人`,
        );
        await era.printAndWait(`速子将脸贴近你的耳朵，悄悄说道`);
        era.println();
        await tachyon.say_and_wait(
          `之前不是说过吗，想要进行对于观众，或者说粉丝的观察`,
        );
        await tachyon.say_and_wait(
          `现在是对于情感挑动方面的探查……举例来讲，要是我在这里亲你一下，${tachyon.sex}们的反应会如何呢？`,
        );
        era.println();
        await era.printAndWait(
          `或许是因为阳光太过炙热，导致你竟然有些不敢抬头去看速子此时的眼神`,
        );
        await era.printAndWait(
          `忽然，速子的唇凑近了你的脸庞，由于身体的遮挡，看上去就仿佛真的亲上去了一般`,
        );
        await era.printAndWait(
          `一旁围观的${tachyon.get_uma_sex_title()}们发出了小小的惊呼`,
        );
        era.println();
        await tachyon.say_and_wait(
          `真是……不可思议。豚鼠君，不知道为什么，听见${tachyon.sex}们的声音之后，我感觉自己似乎更有行动的欲望了`,
        );
        await tachyon.say_and_wait(
          `是卡里古拉效应吗？由于在公共场所进行这样的事会使人感到害羞，因此反而增加了行为的欲望`,
        );
        era.println();
        await tachyon.say_and_wait(`啾❤`);
        era.println();
        await era.printAndWait(`亲上去了`);
        await era.printAndWait(`连说服自己的借口都没有了`);
        era.println();
        await tachyon.say_and_wait(
          `那么……还要不要继续呢？让我们听听看，观众的感想吧❤`,
        );
        era.println();
        await era.printAndWait(`说到最后一句是，速子的音量忽然放大`);
        await era.printAndWait(
          `你转头看向沙滩，却看见一张张因眼前景色而满脸通红的稚嫩脸庞`,
        );
        era.println();
        await tachyon.say_and_wait(
          `看来……大家都很喜欢呢，这不是你宝冢时跟我说过的吗？粉丝服务……之类的？`,
        );
        era.println();
        await era.printAndWait(`不妙啊，当初劝速子的话竟然变成迴力镖了吗`);
        await era.printAndWait(`速子抱住了你的身体，顺势向前将你压在了沙滩上`);
        era.println();
        await tachyon.say_and_wait(`还想……继续吗？`);
        era.printButton(`不想`, 1);
        era.printButton(`………不想`, 2);
        await era.input();
        era.println();
        await era.printAndWait(
          `再怎么说，即便退一万步来讲，在这么多人面前，还是太过头了吧`,
        );
        await era.printAndWait(
          `而且仔细看了一眼，其实速子的脸庞也有淡淡的微红……虽然不知道是因为害羞还是兴奋就是了`,
        );
        era.println();
        await tachyon.say_and_wait(
          `那么……就麻烦你跟这些小${tachyon.get_uma_sex_title()}们收集兴奋时的数据了`,
        );
        era.println();
        await era.printAndWait(`忽然，速子从你身上爬了起来`);
        era.println();
        await tachyon.say_and_wait(
          `那么……就麻烦你跟这些小${tachyon.get_uma_sex_title()}们收集兴奋时的数据了`,
        );
        era.println();
        await era.printAndWait(`忽然，速子从你身上爬了起来`);
        era.println();
        await tachyon.say_and_wait(`如果还想继续的话……记得带着数据回来找我❤`);
        era.println();
        await era.printAndWait(
          `没有放低音量的暗示话语，使周围${tachyon.get_uma_sex_title()}们又发出了阵阵的惊呼`,
        );
        await era.printAndWait(
          `你摸摸鼻子，这下数据收集虽然容易，但之后不管回去不回去都得有人说闲话了啊`,
        );
        // todo 智+10
        // 根+5
      }
    } else {
      await print_event_name(`再度闪耀的光子`, tachyon);
      era.println();
      await era.printAndWait(`${tachyon.name}独自在沙滩上奔跑着`);
      await era.printAndWait(`与前一年的此时仿佛似曾相似的场景`);
      await era.printAndWait(`想到这，${tachyon.name}忽然停下脚步`);
      era.println();
      await era.printAndWait(`此时此刻，恰如彼时彼刻`);
      era.println();
      await tachyon.say_and_wait(`……你来了啊`);
      era.println();
      era.printButton(`我来了`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`你不该来的`);
      era.println();
      era.printButton(`但我还是来了`, 1);
      era.println();
      await era.printAndWait(
        `明明没有提前约定过，你却还是在隔了一年后的这一天，再一次来到这片沙滩上`,
      );
      era.println();
      await tachyon.say_and_wait(`……好了，别闹了，说正事`);
      era.println();
      await era.printAndWait(
        `不愿意配合你继续接梗下去的速子马上想要进入正题，却被打断了发言`,
      );
      era.printButton(`比起那个`, 1);
      era.printButton(`可以先跑一趟让我看看吗？`, 2);
      await era.input();
      era.drawLine();
      era.println();
      await era.printAndWait(`比起去年的这个时候`);
      await era.printAndWait(`恢复训练的速子，跑法自然不可与昨日同比`);
      await era.printAndWait(`但是，差的却不只是训练的程度`);
      era.println();
      await era.printAndWait(
        `如同去年，明明是久未锻鍊下，形不成形的跑法，却还是闪烁着令人着迷的光芒一般`,
      );
      await era.printAndWait(`如今的速子，闪耀着你曾见过的最耀眼的光芒`);
      await era.printAndWait(`亮的令人不由得产生一种错觉`);
      await era.printAndWait(`———亮的哪怕此刻熄灭，也不会有任何一点遗憾一般`);
      era.println();
      await tachyon.say_and_wait(
        `豚鼠君，凯旋门赏结束之后，我会退出闪耀系列赛`,
      );
      era.println();
      await era.printAndWait(`不是暂停，而是退出，换句话说就是退役`);
      await era.printAndWait(`一旦退出，将不再有任何挽回的机会`);
      era.println();
      await tachyon.say_and_wait(
        `我的腿……勉强撑了半年下来，也已经差不多知足了`,
      );
      await tachyon.say_and_wait(
        `天皇赏春，还有宝冢纪念……然后，最后的凯旋门赏`,
      );
      await era.printAndWait(`速子说的话让你开始回忆`);
      await era.printAndWait(`后悔，后悔什么？`);
      await era.printAndWait(`后悔让速子在宝冢纪念发挥全力？`);
      await era.printAndWait(`后悔在天春前的晚上没有阻止速子？`);
      await era.printAndWait(`后悔选择了PlanB？`);
      await era.printAndWait(`还是……后悔招募了速子？`);
      era.println();
      await era.printAndWait(`你将问题问出口，速子沉默了一会`);
      await era.printAndWait(`随后，开口回答`);
      era.println();
      await tachyon.say_and_wait(`……都有`);
      await tachyon.say_and_wait(
        `不后悔吗？找了我这么一个难搞，出尔反尔，三心二意的${tachyon.get_uma_sex_title()}当负责人`,
      );
      if (love > 50) {
        await tachyon.say_and_wait(`要是当初只负责了茶座就好了～～之类的？`);
        era.println();
        await era.printAndWait(
          `虽然听起来像在询问，但给人的感觉却更接近于吃醋的闹脾气`,
        );
      }
      era.println();
      await era.printAndWait(`听${tachyon.sex}这么说，你认真的回忆了一下`);
      await era.printAndWait(
        `想起宝冢纪念时，脑袋里只能回想起速子与茶座的巅峰对决`,
      );
      await era.printAndWait(
        `想起天皇赏春时，只能回想起茶座诡谲的跑法以及……速子那再次绽放的闪光`,
      );
      await era.printAndWait(
        `想起选择了PlanB的那天……真心希望速子可以安稳平安的心情`,
      );
      await era.printAndWait(
        `最后，想起那天在训练场，被${tachyon.sex}的跑法灼伤双眼，留下永远无法愈合的伤痕的那天`,
      );
      era.printButton(`不后悔`, 1);
      era.printButton(`后悔，后悔没早一点认识速子`, 2);
      await era.input();
      await tachyon.say_and_wait(`……哼哼，这样啊`);
      await tachyon.say_and_wait(`那么，就继续跟着我吧……`);
      await tachyon.say_and_wait(
        `一起登上世界的巅峰，然后我会让你看见研究的成果———最能令人满意的，属于${tachyon.name}的跑法！`,
      );
      await era.printAndWait(`跑出至今为止，最令人满意，最令人眩目的跑法`);
      await era.printAndWait(
        `让一直关注着自己的，身边最大的粉丝满意的一场比赛`,
      );
      await era.printAndWait(`不知不觉，唇间有些干燥`);
      await era.printAndWait(`期待着更加精彩的比赛，期待着更加璀璨的姿态`);
      await era.printAndWait(
        `身为偶像的${tachyon.sex}都已经如此开口了，被其跑法所迷诱的豚鼠，除了同意，还有什么话能说呢`,
      );
      era.printButton(`上吧，速子`, 1);
      await era.input();
      await era.printAndWait(`过去不会后悔，现在如此，未来也将如此`);
      await era.printAndWait(`两人踏向了法国———凯旋门赏`);
      // todo 根性+20
      // 智力+10
      // 爱慕值+5
    }
  } else if (edu_weeks === 95 + 35) {
    if (event_marks.plan_b === 0) {
      await print_event_name(`变量·旁观者设置`, tachyon);
      await tachyon.say_and_wait(
        `不过仔细想想……这大概是我第一次在观众席看比赛吧`,
      );
      era.println();
      await era.printAndWait(`今天是神户新闻杯`);
      await era.printAndWait(`是${tachyon.name}受后辈之邀来观赛的日子`);
      era.printButton(`毕竟主要都是自己上场跑呢`, 1);
      era.printButton(`毕竟主要都是看比赛录像呢`, 2);
      await era.input();
      era.println();
      await era.printAndWait(
        `对速子而言，除了自己的比赛外，应该就没有需要到赛场的情况了，`,
      );
      await era.printAndWait(
        `比赛数据分析什么的，比起在观众席上看，看比赛结束后的录象能得到的数据还更多一些`,
      );
      await era.printAndWait(
        `因此今天确实是第一次，或者说第一次以观众的身份而非研究角度来观看比赛`,
      );
      era.println();
      await tachyon.say_and_wait(`……实际在现场的感觉……果然很吵啊`);
      era.println();
      await say_by_passer_by(`粉丝A`, `加油！`);
      await say_by_passer_by(`粉丝B`, `一定要赢啊！`);
      await say_by_passer_by(
        `粉丝C`,
        `神户新闻杯虽然说是菊花赏的先行赛，但实际上2400米和阪神赛场举办这两点对菊花赏而言都不算是对菊花赏检验的效果……`,
      );
      await say_by_passer_by(
        `粉丝C`,
        `……因此其实很难说在神户新闻杯胜出的${tachyon.get_uma_sex_title()}就一定能赢下菊花赏`,
      );
      await say_by_passer_by(`粉丝D`, `怎么忽然说这个`);
      era.println();
      await tachyon.say_and_wait(`这就是平常我比赛前观众席上的场景吗？`);
      era.printButton(`差不多吧，甚至更热闹一点`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `……也是，毕竟是G1。嘛，虽然能理解他们的心情，不过这个时候加油也是没用的吧`,
      );
      era.printButton(`有没有用……不是这样算的`, 1);
      era.printButton(`看下去就知道了`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`看下去什么的……哦？开始入闸了`);
      era.drawLine();
      await era.printAndWait(`那孩子进入闸门了`);
      await era.printAndWait(
        `但说实话，这场比赛对${tachyon.name}而言，其实需要关注的点不多`,
      );
      await era.printAndWait(`具有可能性的那孩子，必然是重中之重`);
      await era.printAndWait(`……但除此之外，这场比赛不过是经典级限定的G2赛事`);
      era.println();
      await tachyon.say_and_wait(`可以说，没有输掉的可能性吧`);
      era.println();
      await era.printAndWait(`赛前人气也是理所当然的第一人气`);
      await era.printAndWait(`天时地利人和，不可能输`);
      await era.printAndWait(`赛前分析胜率高达97.46%`);
      era.println();
      await era.printAndWait(`然而……`);
      era.println();
      await say_by_passer_by(`观众A`, `不要输！`);
      await say_by_passer_by(
        `观众B`,
        `加油！还有机会！从外侧超${tachyon.sex}啊！`,
      );
      await say_by_passer_by(`观众C`, `不要放弃！一定可以追上！`);
      era.println();
      await era.printAndWait(
        `为什么还在为后面的${tachyon.get_uma_sex_title()}加油`,
      );
      await era.printAndWait(`明显，已经追不上了不是吗`);
      await era.printAndWait(`……不明白`);
      await era.printAndWait(
        `不，能够理解，虽然徒劳但还是想要为自己支持的${tachyon.get_uma_sex_title()}发出喊声，这种事情自己还是能够理解的`,
      );
      await era.printAndWait(
        `虽然说是疯狂科学家，但自己也不是什么不懂人性的机器人`,
      );
      await era.printAndWait(`但，为什么自己……`);
      era.println();
      await say_by_passer_by(
        `解说`,
        `追上来了！现在后面的${tachyon.get_uma_sex_title()}追上来了！`,
      );
      era.println();
      await tachyon.say_and_wait(`！`);
      await tachyon.say_and_wait(`……加油`);
      await tachyon.say_and_wait(`加油！不要输啊！`);
      era.println();
      era.printButton(`！`, 1);
      await era.input();
      await say_by_passer_by(`解说`, `冲—————线！第一名的是一号一闸—————`);
      era.drawLine();
      await era.printAndWait(
        `${tachyon.name}的应援声，被淹没在全场的喝采及加油声`,
      );
      await era.printAndWait(
        `全场能够听见的恐怕只有在${tachyon.sex}身边的你，以及……`,
      );
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `前辈！我听见你的加油声了！谢谢前辈的应援……那个时候，感觉全身忽然涌起了力量！`,
      );
      era.println();
      await tachyon.say_and_wait(`……呵呵，跑的很不错，未来还要继续努力下去`);
      await say_by_passer_by(`${tachyon.get_uma_sex_title()}A`, `是！`);
      era.println();
      await era.printAndWait(`神户新闻杯结束，你和速子离开了赛场`);
      era.println();
      await tachyon.say_and_wait(
        `……虽然理论上已经确定，但实际以场外人……或者，以当事人的身份来看，还是第一次`,
      );
      await tachyon.say_and_wait(
        `无论是其他孩子，还是那孩子，最后都……真的超越极限了`,
      );
      era.println();
      await era.printAndWait(
        `今天的比赛上，好几名${tachyon.get_uma_sex_title()}都是`,
      );
      await era.printAndWait(`超越了极限`);
      await era.printAndWait(
        `超越了在赛前测出的，${tachyon.sex}们的理论最大速度`,
      );
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，你还记得之前粉丝感谢祭时的事吗？`);
      era.println();
      era.printButton(`速子是想着获得回报而为那孩子应援的吗？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`你没有回答，只是反问了句`);
      era.println();
      await tachyon.say_and_wait(`……呵呵`);
      await tachyon.say_and_wait(`不是因为想被人听见，想产生互动的行为……`);
      await tachyon.say_and_wait(
        `而是纯粹，将自己的心情、情绪发泄出来而高喊出声`,
      );
      await tachyon.say_and_wait(`换句话说，就是『感动』`);
      await tachyon.say_and_wait(
        `观众被${tachyon.get_uma_sex_title()}感动而发出欢呼，${tachyon.get_uma_sex_title()}也被观众感动而超越自己的极限……`,
      );
      await tachyon.say_and_wait(
        `明明是好像左脚踩右脚，甚至永动机一样的不合理的概念，却实际的发生了`,
      );
      await tachyon.say_and_wait(
        `真的，果然这些都是在实验室里完全体验不到的啊，哈哈哈哈！`,
      );
      era.println();
      era.printButton(`这样，算是『喜欢』上比赛了吗`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……嗯，我也不知道`);
      era.println();
      await era.printAndWait(`……也是`);
      await era.printAndWait(`毕竟说到底依然不是自己登上赛场去跑的`);
      await era.printAndWait(`要说喜欢与不喜欢，或许还是难以说明吧`);
      await era.printAndWait(
        `但无论如何，随着神户新闻杯的结束，有马纪念也已经快要进入眼前了`,
      );
      await era.printAndWait(`研究的尽头(Deadline)，就在眼前了`);
      // todo 技能点+20
    } else {
      await print_event_name(`决心`, tachyon);
      era.println();
      await tachyon.say_and_wait(`哈啊……哈啊……`);
      era.println();
      await era.printAndWait(`${tachyon.name}在法国的训练场上奔跑着`);
      await era.printAndWait(`这几天是豚鼠君回日本的日子`);
      era.println();
      await tachyon.say_and_wait(`接着就是，世界的最高峰，凯旋门赏……`, true);
      era.println();
      await era.printAndWait(`现在他应该还在疑惑吧`);
      await era.printAndWait(`到底为什么要选择凯旋门赏`);
      await era.printAndWait(`抵达极限的彼方，这是${tachyon.name}的梦想`);
      await era.printAndWait(
        `${tachyon.sex}也一直以为，自己能够为了这个目标赌上一切，只要能够抵达，无论那个人是不是自己都无所谓`,
      );
      await era.printAndWait(
        `……但是，${tachyon.sex}其实并没有自己想的那么无所谓`,
      );
      era.println();
      await era.printAndWait(
        `本质上，${tachyon.sex}还是想要奔跑的${tachyon.get_uma_sex_title()}`,
      );
      await era.printAndWait(`但是，${tachyon.sex}也不想放弃超越极限的梦想`);
      await era.printAndWait(`那么，该怎么办呢，该怎么做才有两全其美的办法`);
      await era.printAndWait(`很简单，只要，${tachyon.name}成为『极限』就好`);
      era.println();
      await era.printAndWait(`所以才选择凯旋门赏`);
      await era.printAndWait(`选择世界的最高峰，最能代表极限的赛事`);
      await era.printAndWait(
        `在这个舞台上，以自身来定义，${tachyon.get_uma_sex_title()}的极限`,
      );
      era.println();
      await tachyon.say_and_wait(`……呵呵`);
      era.println();
      await era.printAndWait(`在想到超越众人，化身极限的时候`);
      await era.printAndWait(`身体忍不住的发热`);
      era.println();
      await tachyon.say_and_wait(`果然，还是渴望奔跑的啊……我`);
      era.println();
      await era.printAndWait(`决心已经燃起`);
      await era.printAndWait(`那么便抛开一切，专注于眼前的胜利吧`);
      //todo 全属性+5
    }
  } else if (edu_weeks === 95 + 39 && event_marks.plan_b === 0) {
    await print_event_name(`最终变量的寻求`, tachyon);
    await era.printAndWait(`随着时间进入秋季，年尾最重要的比赛也映入大众眼帘`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `${tachyon.name}小姐，请问对今年底的有马纪念自己是第一人气有什么感想吗？`,
    );
    await tachyon.say_and_wait(
      `第一人气？没什么……不，感谢各位的支持，有马纪念……`,
    );
    await tachyon.say_and_wait(`我会努力，以超越自己的极限为目标去跑`);
    await say_by_passer_by(
      `记者B`,
      `速子小姐的目标是超越${tachyon.get_uma_sex_title()}的极限，请问这是什么意思呢？`,
    );
    await tachyon.say_and_wait(
      `呵呵呵……如果一切顺利的话，你们在有马纪念上就能看到了`,
    );
    await say_by_passer_by(
      `记者C`,
      `请问目前对于有马纪念，${tachyon.name}小姐有进行过哪些准备呢？`,
    );
    await tachyon.say_and_wait(
      `场地及肉体的突破自不用说，但除此之外……事实上，我正在寻求精神上的突破啊`,
    );
    era.println();
    await era.printAndWait(`精神上的突破`);
    await era.printAndWait(`这一话题让现场的记者都有些困惑`);
    await era.printAndWait(`无论是从外表给人的形象，还是偶尔听见的传闻`);
    await era.printAndWait(
      `${tachyon.name}都不像是会讲精神论的${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await say_by_passer_by(
      `记者A`,
      `精…精神上的突破？……毕竟下一场的对手是那个曼城茶座，所以想要寻求精神面的帮助吗？`,
    );
    await tachyon.say_and_wait(`茶座君……对手……？`);
    await say_by_passer_by(`记者A`, `难，难道不是吗？`);
    await tachyon.say_and_wait(`……不，是值得探讨的可能性啊，呵呵呵`);
    era.println();
    await era.printAndWait(`速子留下了意味深长的话语，并没有做出解释`);
    if (love > 50 && love < 75) {
      await say_by_passer_by(
        `记者A`,
        `对了……另外还有关于${tachyon.name}与训练员的传闻`,
      );
      await say_by_passer_by(`记者A`, `想问两位……`);
      era.println();
      await era.printAndWait(`速子看了你一眼，不知为何，你心里有些毛毛的`);
      era.println();
      await tachyon.say_and_wait(
        `你是想问，我和他之间……有没有恋爱方面的感情吗？`,
      );
      era.println();
      await era.printAndWait(
        `速子又看了你一眼，这次你明白了，${tachyon.sex}的意思是『你希望我怎么回答？』`,
      );
      await era.printAndWait(
        `你以不会被记者看到的角度，以最小限度摇了摇头，希望${tachyon.sex}能看见`,
      );
      era.println();
      await tachyon.say_and_wait(`……这么说吧，他……是我最重要的……`);
      await say_by_passer_by(`记者A`, `最重要的……？`);
      era.println();
      await era.printAndWait(`全场都集中了注意力在速子的话语上`);
      await era.printAndWait(`你也不由得吞了口口水`);
      era.println();
      await tachyon.say_and_wait(`最重要的……实验动物`);
      era.println();
      await era.printAndWait(`记者们听见回答全都泄了口气`);
      await era.printAndWait(`你也吐了口气，不过是安心的泄气`);
      await era.printAndWait(`${tachyon.sex}悄悄用嘴型对你说了『欠我一次』`);
      await era.printAndWait(`但现在的你也没有功夫去顾虑这些了`);
      era.println();
      await era.printAndWait(`题外话，在那之后隔天的新闻头条……`);
      await era.printAndWait(
        `${tachyon.name}对谣言做出回应！声称训练员为最重要的存在！`,
      );
      await me.say_and_wait(`…………这不是什么也没回避到吗`, true);
    }
  } else if (edu_weeks === 95 + 40) {
    if (event_marks.plan_b === 1) {
      await print_event_name(`超越极限……？`, tachyon);
      await era.printAndWait(
        `自从${tachyon.name}退役以来，实验室里总是能听见${tachyon.sex}欢快的声音`,
      );
      await tachyon.say_and_wait(`哈哈哈！茶座！茶座！快来试试我的新药！`);
      await coffee.say_and_wait(`……好烦`);
      era.println();
      await era.printAndWait(
        `仿佛在退役的同时抛却了一切压力的${tachyon.sex}，万般的精力都用在了制作新药上，`,
      );
      await era.printAndWait(
        `首当其冲的被害者自然就是与${tachyon.sex}最为亲密的你和茶座了`,
      );
      await era.printAndWait(
        `对此，在退役后便担心${tachyon.sex}会不会一蹶不振无法振作的你也稍稍放下了心来`,
      );
      era.println();
      await tachyon.say_and_wait(`豚鼠君！你也别想跑！你的份在这里！`);
      era.printButton(`(二话不说接过药就喝下去)`, 1);
      era.printButton(`只要能让速子开心，喝什么都行！`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`哦呀哦呀，今天居然这么主动？`);
        await coffee.say_and_wait(`……你又给训练员先生灌什么药了，老实交代`);
        await tachyon.say_and_wait(
          `唔……昨天的话是提升营养吸收效率的，发的是蓝色的光，今天是……`,
        );
        await coffee.say_and_wait(
          `骗人……一定是灌了什么迷魂药吧，不然训练员先生怎么可能这么听话的喝下那种奇怪的东西`,
        );
        await tachyon.say_and_wait(`好过分的说法！`);
      }
    } else {
      if (love > 75) {
        await tachyon.say_and_wait(`什……笨蛋……为什么忽然说这么肉麻的话……`);
      } else if (relation < 225) {
        await tachyon.say_and_wait(`……不是，为什么忽然说这么噁心的话……`);
      } else if (relation >= 225) {
        await tachyon.say_and_wait(`欸……不是，为什么忽然说这么肉麻的话`);
        era.println();
        await era.printAndWait(`速子用一脸傻眼的表情看着你`);
        await era.printAndWait(`好过分啊`);
      }
      // todo If 茶座爱慕<75 注：跟在速子之后
      await coffee.say_and_wait(`……麻烦你们别在这里打情骂俏`);
      // todo If 茶座爱慕>75 注：跟在速子之后
      await coffee.say_and_wait(
        `速子同学？训练员先生？可以稍微说明一下这是什么关系吗？……我现在，可能不太冷静`,
      );
      era.drawLine();
      await tachyon.say_and_wait(`……对了，训练员先生，差不多……`);
      era.println();
      await era.printAndWait(`吵吵闹闹过后，也到茶座训练的时间了`);
      await era.printAndWait(`你点了点头，准备和茶座一起到训练场上`);
      era.println();
      await tachyon.say_and_wait(
        `哦？又去训练吗？最近茶座怎么感觉特别勤奋的样子`,
      );
      await coffee.say_and_wait(
        `……我训练一直都很认真，请不要把我和速子同学混为一谈`,
      );
      await coffee.say_and_wait(`再说，年底快到了……一定要成功超越朋友`);
      await coffee.say_and_wait(`除此之外……`);
      await coffee.say_and_wait(`还有某人的挑战……`);
      era.println();
      await era.printAndWait(`茶座直直盯着速子`);
      await era.printAndWait(`你想起了凯旋门赏时速子说过的话`);
      await coffee.say_and_wait(`我一定，会超越速子同学的`);
      await tachyon.say_and_wait(`……哼哼，能做到，就尽管试试看吧`);
      await tachyon.say_and_wait(`来超越极限吧！茶座！`);
      era.println();
      await era.printAndWait(`速子的眼中依旧闪烁着狂热的光芒`);
      await era.printAndWait(
        `只是……不知是不是你的错觉，那光芒似乎有些动摇的模样`,
      );
    }
  } // todo 条件：曼城茶座日本杯参赛后
  else if (edu_weeks === 95 + 41) {
    await print_event_name(`超越极限`, tachyon);
    if (event_marks.plan_b === 1) {
      await say_by_passer_by(
        `解说`,
        `曼城茶座！打破了日本杯的纪录……不！打破了世界纪录！世界2400m的纪录，在几个月前才由${tachyon.name}击破的纪录，被漆黑的幻影再次超越！`,
      );
      era.println();
      await era.printAndWait(`真的超越了`);
      await era.printAndWait(`在茶座跑过终点线的瞬间`);
      await era.printAndWait(`自己与其他人同样兴奋`);
      era.println();
      await era.printAndWait(`这也是理所当然的`);
      await era.printAndWait(
        `虽然有些自卖自夸，但${
          tachyon.sex
        }可是自己看中最有可能超越极限的${tachyon.get_uma_sex_title()}`,
      );
      await era.printAndWait(`只是最接近与能够超越，还是有着极大的区别`);
      await era.printAndWait(`但是……${tachyon.sex}真的做到了！`);
      await era.printAndWait(
        `虽然看上去不知为何……跑的有种不明的违和感，但那也无所谓`,
      );
      await era.printAndWait(
        `${tachyon.name}是极限的${tachyon.get_uma_sex_title()}，而曼城茶座${
          tachyon.sex
        }现在，超越了极限`,
      );
      era.println();
      await tachyon.say_and_wait(`豚鼠君！豚鼠君！茶座${tachyon.sex}……`);
      era.println();
      await era.printAndWait(`想要兴奋的与身边的人分享喜悦`);
      await era.printAndWait(`万般的艰辛研究，现在终于得到了结果`);
      await era.printAndWait(`然而`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君？`);
      era.println();
      await era.printAndWait(`没有应答`);
      await era.printAndWait(`身边的他，看台上的观众，所有人的焦点`);
      await era.printAndWait(`全都聚焦在中央的${tachyon.sex}身上`);
      await era.printAndWait(
        `${tachyon.name}的呼唤，被震耳欲聋的欢呼及喝采盖过`,
      );
    }
  } else if (edu_weeks === 95 + 43) {
    if (event_marks.plan_b === 0) {
      await print_event_name(`完全燃起的胜负心`, tachyon);
      era.println();
      await tachyon.say_and_wait(`呼……呼……`);
      era.println();
      await era.printAndWait(
        `从神户新闻杯结束后到今天，速子的训练一直维持在良好的状态`,
      );
      era.println();
      await tachyon.say_and_wait(`……今天，也还是一样啊`);
      era.println();
      await era.printAndWait(`然而……维持，也就代表着没有进步`);
      await era.printAndWait(
        `随着时间距离有马越来越近，你和速子的情绪也不免有些急躁起来`,
      );
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `速子前辈！今天我也来了！`,
      );
      era.println();
      await era.printAndWait(
        `这时出现治癒两人的，便是神户新闻杯时的后辈${tachyon.get_uma_sex_title()}了`,
      );
      await era.printAndWait(
        `那名后辈的${tachyon.get_uma_sex_title()}，现在经常会跟着速子一起锻鍊`,
      );
      await era.printAndWait(
        `而身为训练员的你也不时会对${tachyon.sex}做出指点`,
      );
      await era.printAndWait(
        `正当你无聊的盯着对方时，眼前忽然浮现了一张熟悉的脸庞`,
      );
      era.println();
      await tachyon.say_and_wait(
        `怎么？盯着人家看的那么起劲，不会是看上那孩子了吧？`,
      );
      era.println();
      await era.printAndWait(`你慌忙摇头`);
      if (relation > 0) {
        era.println();
        await tachyon.say_and_wait(`呵呵……那孩子确实具有相当可观的可能性`);
        await tachyon.say_and_wait(
          `……如果是以前的我的话，或许可能将${tachyon.sex}当成planB的备选吧`,
        );
        await tachyon.say_and_wait(
          `但是整个planB，都是建立在planA不可行的备选`,
        );
        await tachyon.say_and_wait(`可别逐末忘本了，豚鼠君`);
      } else {
        await tachyon.say_and_wait(`别用那种眼神盯着我关注的后辈`);
        await tachyon.say_and_wait(`……像你这种人，就别去祸害别人了`);
        await tachyon.say_and_wait(`跟在我身边，算是给你的最大的怜悯了`);
      }
      if (love > 75) {
        await tachyon.say_and_wait(
          `要是忘记的话，就让我重新让你的眼睛灼伤吧……`,
          true,
        );
        await tachyon.say_and_wait(
          `这次，会亮至炫目……直到你再也看不清其他${tachyon.get_uma_sex_title()}的模样为止`,
          true,
        );
        era.println();
        await era.printAndWait(`这个，某种意义上来说是速子的独占欲吗？`);
        await era.printAndWait(`你只能苦笑带过`);
        era.println();
        await era.printAndWait(
          `然而，今天的来客，却不只后辈的${tachyon.get_uma_sex_title()}`,
        );
        era.println();
        await tachyon.say_and_wait(`……哦呀`);
        await coffee.say_and_wait(`速子同学……`);
        era.println();
        await era.printAndWait(`曼城茶座，${tachyon.name}PlanB的主选`);
        //TODO IF 担当里有茶座
        await era.printAndWait(`也是你的负责${tachyon.get_uma_sex_title()}`);
        await era.printAndWait(`与你发誓，要一起追上朋友的重要的担当`);
        era.println();

        await era.printAndWait(`不知为何忽然找上了速子`);
        era.println();
        await tachyon.say_and_wait(
          `茶座君？是来接受我的实验的吗？要的话随时欢……`,
        );
        await coffee.say_and_wait(`不是……只是想，可以和我来场模拟赛吗？`);
        await tachyon.say_and_wait(`……模拟赛？`);
        await coffee.say_and_wait(`是的……无论如何，请务必`);
        era.println();
        await era.printAndWait(
          `……模拟赛的申请十分简单，更何况你是${tachyon.sex}们两人的训练员`,
        );
        await era.printAndWait(`甚至不需要特殊安排，只需要租借场地就好`);
        era.println();
        await era.printAndWait(`申请的手续没过多久就放了下来`);
        await era.printAndWait(
          `只有两人的赛道上，你充当起跑的宣布者站在赛道旁`,
        );
        await era.printAndWait(`心中是不安与忐忑`);
        await era.printAndWait(
          `${tachyon.name}，${
            tachyon.sex
          }的目标是超越${tachyon.get_uma_sex_title()}的极限`,
        );
        await era.printAndWait(
          `曼城茶座，${tachyon.sex}的目标是追上朋友的步伐`,
        );
        era.println();
        await era.printAndWait(`不知是命中注定的安排还是恶趣味的巧合，`);
        await era.printAndWait(`这两人都将最终的目标选在有马纪念`);
        await era.printAndWait(
          `今天的模拟赛……虽然不知道原因为何，但大概可以视为那天的预演吧`,
        );
        await era.printAndWait(`怀着各种复杂的心情，你挥下了旗子`);
        era.drawLine();
        await era.printAndWait(`第三弯道，然后……是最终直线`);
        await era.printAndWait(`茶座在左边？不，右边`);
        await era.printAndWait(`茶座的跑法还是和以前一样……无法捉摸`);
        await era.printAndWait(`但是，规律的话，还是能够抓到的`);
        era.println();
        await tachyon.say_and_wait(`就是这……什！？`);
        era.println();
        await era.printAndWait(`必须承认`);
        await era.printAndWait(`赛前的自己确实有些大意了`);
        await era.printAndWait(`作为PlanB的代替品`);
        // todo if 曾经胜过茶座
        await era.printAndWait(`除此之外还是曾经的手下败将`);
        await era.printAndWait(`哪怕嘴上说的再好听`);
        await era.printAndWait(`什么曼城茶座是独立的个体`);
        await era.printAndWait(`什么曼城茶座拥有不输给自己的才能`);
        await era.printAndWait(`心中还是产生了几乎无法称之为傲慢的轻视`);
        await era.printAndWait(
          `觉得伪物的${tachyon.sex}，怎么可能胜过状态绝佳的真物`,
        );
        era.println();
        await tachyon.say_and_wait(`跑法也好，速度也好……好陌生`);
        era.println();
        await era.printAndWait(`这也是当然`);
        await era.printAndWait(
          `毕竟上一次，${tachyon.name}仔细观察曼城茶座的跑法及速度，那已经是一年前的七月的事了`,
        );
        era.println();
        await era.printAndWait(
          `天真的以为，在自己进步时对手会乖乖原地踏步的理论家必须付出小瞧对手的代价`,
        );
        await era.printAndWait(`……对手，吗？`);
        era.println();
        await era.printAndWait(`不是伪物`);
        await era.printAndWait(`不是替代品`);
        await era.printAndWait(`漆黑的猎犬，对傲慢研究者的脖子露出了尖牙`);
        await era.printAndWait(`以疼痛，以败北来证明自己的存在`);
        await era.printAndWait(
          `证明自己，是足以与${tachyon.sex}站在同个舞台上的『对手』`,
        );
        era.println();
        await tachyon.say_and_wait(
          `……呵呵，想要胜过对手，想要赢过对方，想要超越某人……原来如此，原来是这样的感觉吗？`,
        );
        era.println();
        await era.printAndWait(`好吧，承认吧`);
        await era.printAndWait(`这次是${tachyon.name}败了`);
        await era.printAndWait(`觉悟不足，研究不足，认真的程度不足`);
        await era.printAndWait(
          `这种情况下要是还赢了，那才真是轻视了对方的努力`,
        );
        await era.printAndWait(`不如说，还要感谢茶座才对`);
        await era.printAndWait(
          `要是一直放着，直到有马纪念才发现这缺少的『最后一个要素』，那可没有再来一次的机会了`,
        );
        await era.printAndWait(`所以……`);
        era.println();
        await tachyon.say_and_wait(`啊啊……这次是我———`);
        era.printButton(`速子不要输！`, 1);
        era.printButton(`茶座加油啊！`, 2, { disabled: true });
        //todo if 队伍里有茶座解锁此选项
        era.printButton(`速子不要输！`, 1);
        era.printButton(`茶座加油啊！`, 2);
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(`话到了嘴边，开不了口`);
          await era.printAndWait(
            `如果是纯粹的${tachyon.name}的话，那么承认眼前的败北应该也不是什么难事`,
          );
          await era.printAndWait(`比赛就和实验一样，没有一定成功的道理`);
          await era.printAndWait(
            `但失败了也不要紧，吸取教训，重新来过，无非就是这样`,
          );
          await era.printAndWait(`更何况这只是一场模拟赛而已`);
          era.println();
          await era.printAndWait(`说服自己放弃的理由可以有很多`);
          await era.printAndWait(`说服自己坚持下去的理由只有一个`);
          await era.printAndWait(`但这一个理由，胜过其他全部`);
          era.println();
          await tachyon.say_and_wait(`我想要……想要赢下来！`);
          era.println();
          await era.printAndWait(`连自己都感到讶异的执着`);
          await era.printAndWait(
            `如果是纯粹的${tachyon.name}，此时一定能够干脆放弃`,
          );
          await era.printAndWait(
            `但是，那个不受外界影响，纯粹冷酷的研究者已经不在了`,
          );
          era.println();
          await era.printAndWait(`在接纳他人的应援，受到他人的感染时`);
          await era.printAndWait(`${tachyon.name}就已经不再纯粹了`);
          await era.printAndWait(
            `现在的${tachyon.name}，是为了研究，为了超越极限`,
          );
          await era.printAndWait(`以及……`);
          await era.printAndWait(`那个无论哪一场比赛都跟在自己身旁的人`);
          await era.printAndWait(
            `无论何时都能以${tachyon.name}的要求为优先的人`,
          );
          if (love > 50) {
            era.println();
            await era.printAndWait(
              `${tachyon.name} 是为了自己唯一的爱人而跑的`,
            );
            era.println();
            await era.printAndWait(`反应是交互的，这是化学的基本定理`);
            await era.printAndWait(
              `在名为『玩家名』的豚鼠被速子的跑法灼烧双眼的同时`,
            );
            await era.printAndWait(`速子也在接受他的声援同时，被他所改变`);
            era.println();
            await tachyon.say_and_wait(
              `不想在他面前输掉……不想辜负他的信任……还有……`,
            );
            era.println();
            await tachyon.say_and_wait(`不想，输给曼城茶座！`);
            era.println();
            tachyon.print(`身为研究者的傲气？`);
            tachyon.print(`对备用计画的轻视？`);
            tachyon.print(`不对，不是这样`);
            tachyon.print(`只是想要胜利，想要彻底的超越`);
            tachyon.print(`不想输给曼城茶座`);
            tachyon.print(`想要赢过曼城茶座`);
            era.println();
            await tachyon.say_and_wait(`一定……要赢！`);
          } else if (relation < 225) {
            era.println();
            await era.printAndWait(
              `${tachyon.name}，是为了自己唯一的实验动物而跑的`,
            );
          } else {
            era.println();
            await era.printAndWait(
              `${tachyon.name}，是为了与自己志同道合的同志而跑的`,
            );
          }
          era.drawLine();
          await era.printAndWait(`速子不要输！`);
          await era.printAndWait(`但是……只是极微小的差距`);
          era.println();
          await tachyon.say_and_wait(
            `哈啊……哈啊……呼……呼哈哈哈！怎么样？茶座，最后还是我赢了吧！`,
          );
          await coffee.say_and_wait(
            `……请不要认为，现在就是我真正的实力了……这只是模拟赛而已`,
          );
          await tachyon.say_and_wait(
            `哈哈哈！愉悦，愉悦，败犬不甘心的吠声真是不错……咕呜！`,
          );
          await coffee.say_and_wait(`…………给我记住`);
          era.println();
          await era.printAndWait(
            `速子装模作样的高笑做到一半便在茶座的瞪视下忽然噤了声，仿佛被无形的手捂住了口鼻一般`,
          );
          // todo If 队伍里有茶座+茶座爱慕>75
          await coffee.say_and_wait(
            `训练员先生……等到……有马的时候，要是可以为我加油的话，我会很开心的`,
          );
          era.println();
          await era.printAndWait(
            `茶座头也不回的离开了训练场，留下你和速子，以及虽然一直没有戏份但确实还在训练场上的${tachyon.get_uma_sex_title()}后辈`,
          );
          era.println();
          await say_by_passer_by(
            `${tachyon.get_uma_sex_title()}A`,
            `速子前辈！真的太厉害了！`,
          );
          await tachyon.say_and_wait(
            `……哼哼，这算不上什么，等到有马纪念再看吧，到时候会让你们都看见最极致的跑法！`,
          );
          await say_by_passer_by(
            `${tachyon.get_uma_sex_title()}A`,
            `速子前辈～～～～！`,
          );
          era.println();
          await era.printAndWait(`速子和后辈应付了几声后，后辈也离开了赛场`);
          await era.printAndWait(`直到这时……`);
          era.printButton(`……可以了，${tachyon.sex}们都走了`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(`哈啊～～………………`);
          era.println();
          await era.printAndWait(
            `速子忽然仿佛提着的一口气泻下来一般靠着你瘫坐在地上`,
          );
          await era.printAndWait(
            `一般这种情况你会满脸担心的关心${tachyon.sex}是不是有什么不舒服`,
          );
          await era.printAndWait(`但现在……`);
          era.printButton(`辛苦了`, 1);
          era.printButton(`很累吧`, 2);
          await era.input();
          era.println();
          await era.printAndWait(
            `只有你能够看出，在刚才的比赛中${tachyon.name}真的拼尽了全力`,
          );
          await era.printAndWait(
            `在曼城茶座的跑法及可能性的逼迫下，拼尽了全力，好不容易，才勉强，真的是勉强，`,
          );
          await era.printAndWait(`以几乎能称之为误差的差距胜出`);
          era.println();
          await tachyon.say_and_wait(
            `嗯……茶座……成长到，已经超乎我的想像了啊……`,
          );
          await tachyon.say_and_wait(
            `我却还是……用原本的态度来对待${tachyon.sex}……`,
          );
          await tachyon.say_and_wait(`……真是……羞愧啊……`);
          era.println();
          await era.printAndWait(
            `${tachyon.sex}喘着气说出的话，都是今天以前难以想像速子会说出口的`,
          );
          //todo if ${tachyon.name}目前无败
          await era.printAndWait(
            `从未感受过败北的${tachyon.name}，在那一刻真的体会到了败北的可能性`,
          );
          //todo if ${tachyon.name}有过败绩
          await era.printAndWait(
            `哪怕是以前输过的比赛，都没有感受过如此的压迫感`,
          );
          era.println();
          await tachyon.say_and_wait(`要是……要是刚才，我真的输给了茶座的话`);
          await tachyon.say_and_wait(
            `一想到那种可能性，就感到全身颤抖……我在抗拒，抗拒那样的可能性`,
          );
          await tachyon.say_and_wait(`不想输给茶座……不甘心输给茶座`);
          await tachyon.say_and_wait(
            `但是……心里却还在燃烧着，想要再次与茶座分出胜负，想要从正面彻底击败${tachyon.sex}`,
          );
          era.println();
          await era.printAndWait(`${tachyon.sex}抬头看向你的眼睛`);
          await era.printAndWait(
            `比起以前令人沉迷发狂的光子般的目光，现在${tachyon.sex}的双眸充斥着感情的波动`,
          );
          await era.printAndWait(
            `仿佛燃烧的火炬，但这旺盛的火光，却比毫无波动的光子更加明亮夺目，也更加吸引你的眼神`,
          );
          era.println();
          await tachyon.say_and_wait(`这就是……劲敌的感觉吗？`);
          await tachyon.say_and_wait(`不是不甘心输掉……而是不甘心输给『茶座』`);
          await tachyon.say_and_wait(`一定是这样，不然怎么解释，这样的热度……`);
          await tachyon.say_and_wait(
            `……现在马上回去吧！豚鼠君！这就是了！就是这个！这就是最后缺少的东西了！`,
          );
          era.println();
          await era.printAndWait(`年关将至，接下来，就是有马纪念了`);
          //todo if 根+5
          // 技能点+10
        } else {
          era.println();
          await tachyon.say_and_wait(`————是我，输了`);
          era.println();
          await era.printAndWait(`但是，不是永远`);
          await era.printAndWait(`只有现在，只有这个瞬间承认`);
          await era.printAndWait(`${tachyon.name}不如曼城茶座`);
          await era.printAndWait(`下一次，有马纪念`);
          await era.printAndWait(`自己会反过身来，以挑战者的身份`);
          await era.printAndWait(`将曼城茶座的咽喉撕碎，嚼烂`);
          era.println();
          tachyon.print(`啊啊……不停灼烧的热意`);
          tachyon.print(`怎么也消退不下去`);
          era.println();
          tachyon.print(`身为研究者的傲气？`);
          tachyon.print(`对备用计画的轻视？`);
          tachyon.print(`不对，不是这样`);
          tachyon.print(`只是想要胜利，想要彻底的超越`);
          tachyon.print(`不想输给曼城茶座`);
          tachyon.print(`想要赢过曼城茶座`);
          era.println();
          tachyon.print(`啊啊……这种感觉，就是……`);
          era.drawLine();
          await era.printAndWait(`速子输掉了模拟赛`);
          await era.printAndWait(`但是，只是以极微小的差距败北`);
          era.println();
          await coffee.say_and_wait(`……如果只是这点程度的话，那，我很失望`);
          await coffee.say_and_wait(
            `这样的速子同学，对我超越朋友的目标，没有任何助益……`,
          );
          if (love > 75) {
            await coffee.say_and_wait(
              `搞不懂……为什么训练员先生会把时间浪费在你身上`,
            );
            era.println();
            await era.printAndWait(
              `茶座贴在你身旁，亲昵的动作和毫不留情的批评让你产生了一些反差感`,
            );
            await era.printAndWait(
              `刚跑完步身上淡淡的草香，以及微微的汗味搔痒着你的嗅觉`,
            );
            await era.printAndWait(
              `微微湿润的头发和喘完气有些红润的脸庞刺激着你的视觉`,
            );
            await era.printAndWait(`不由自主的，你有些按耐不住自己的手`);
            era.println();
            await coffee.say_and_wait(
              `训练员先生……要在这里吗？在速子同学面前……？`,
            );
            await era.printAndWait(
              `你看着眼前趴在草地上还在喘气的速子，回过神来`,
            );
            await coffee.say_and_wait(
              `训练员先生，刚刚的……如果可以的话，等一下请……`,
            );
            await era.printAndWait(`茶座留下暧昧的话语之后便离开了`);
            await era.printAndWait(`速子狠狠瞪了你一眼`);
            await era.printAndWait(`你游移视线，有些不敢看${tachyon.sex}`);
          }
          era.println();
          await era.printAndWait(`茶座离开后，速子依然没从草地上起身`);
          await era.printAndWait(`你担忧的望着趴在草地上的速子`);
          era.println();
          await tachyon.say_and_wait(
            `……豚鼠君……茶座真的……成长到，已经超乎我的想像了啊……`,
          );
          await tachyon.say_and_wait(
            `我却还是……用原本的态度来对待${tachyon.sex}……`,
          );
          await tachyon.say_and_wait(`……真是……羞愧啊……`);
          era.println();
          await era.printAndWait(
            `${tachyon.sex}喘着气说出的话，都是今天以前难以想像速子会说出口的`,
          );
          // todo If ${tachyon.name}目前无败
          await era.printAndWait(
            `从未感受过败北的${tachyon.name}，在那一刻体会到了败北的真实`,
          );
          // todo If ${tachyon.name}目前无败
          await era.printAndWait(
            `哪怕是以前输过的比赛，都没有感受过如此的压迫感`,
          );
          era.println();
          await tachyon.say_and_wait(`要是……要是刚才，我要是赢过茶座的话`);
          await tachyon.say_and_wait(
            `一想到那种可能性，就感到全身颤抖……我在渴望，渴望那样的可能性`,
          );
          await tachyon.say_and_wait(`不想输给茶座……不甘心输给茶座`);
          await tachyon.say_and_wait(
            `除此之外……心里还在燃烧着，想要再次与茶座分出胜负，想要从正面彻底击败${tachyon.sex}`,
          );
          era.println();
          await era.printAndWait(`${tachyon.sex}抬头看向你的眼睛`);
          await era.printAndWait(
            `比起以前令人沉迷发狂的光子般的目光，现在${tachyon.sex}的双眸充斥着感情的波动`,
          );
          await era.printAndWait(
            `仿佛燃烧的火炬，但这旺盛的火光，却比毫无波动的光子更加明亮夺目，也更加吸引你的眼神`,
          );
          era.println();
          await tachyon.say_and_wait(`这就是……劲敌的感觉吗？`);
          await tachyon.say_and_wait(`不是不甘心输掉……而是不甘心输给『茶座』`);
          await tachyon.say_and_wait(`一定就是这样……不然怎么解释，这种热度`);
          await tachyon.say_and_wait(
            `……现在马上回去吧！豚鼠君！这就是了！就是这个！这就是最后缺少的东西了！`,
          );
          era.println();
          await era.printAndWait(`年关将至，接下来，就是有马纪念了`);
          //todo 根+5
          // 技能点+10
        }
      }
    }
  } else if (edu_weeks === 95 + 45) {
    await print_event_name(`被超越的极限`, tachyon);
    if (event_marks.plan_b === 1) {
      await era.printAndWait(`梦中的${tachyon.name}，又回到了那一天`);
      era.println();
      await era.printAndWait(
        `全场的欢呼声，以及他的目光全都聚集在跨越终点线，淡淡挥着手的那名${tachyon.get_uma_sex_title()}身上`,
      );
      await era.printAndWait(`这也是很正常的，毕竟今天的主角是茶座`);
      await era.printAndWait(
        `主角不是自己，周围的人关注${tachyon.sex}也是理所应当的`,
      );
      await era.printAndWait(`但是……`);
      await era.printAndWait(`为什么`);
      era.println();
      await tachyon.say_and_wait(`不是说好了吗？会一直看着我`, true);
      era.println();
      await era.printAndWait(`${tachyon.name}无法再奔跑了`);
      await era.printAndWait(`所以就将目光转移到曼城茶座身上吗？`);
      era.println();
      await era.printAndWait(
        `周围的观众中，也不乏喊出『比起${tachyon.name}，还是曼城茶座更强』的人`,
      );
      await era.printAndWait(
        `但比起那些踩一捧一的言论，他的眼神更令自己感到受伤`,
      );
      era.println();
      await era.printAndWait(
        `曾几何时，那种原本只会在看着自己时露出的目光，却出现在了他看着茶座时的双瞳中`,
      );
      await tachyon.say_and_wait(`那种目光，不是我专属的吗？`);
      await tachyon.say_and_wait(`被我灼伤的双眼已经愈合了吗？`);
      await tachyon.say_and_wait(`要留我，孤单一人了吗？`);
      era.println();
      await era.printAndWait(`梦中的他，与茶座越行越远`);
      await era.printAndWait(`将自己抛弃在漆黑的空间中`);
      era.println();
      await tachyon.say_and_wait(`不要……等等，等等我……`, true);
      era.println();
      await era.printAndWait(`想要追上他们`);
      await era.printAndWait(`但是……双腿不听使唤`);
      await era.printAndWait(`低下头来才发现……啊啊`);
      await era.printAndWait(`已经碎裂的双腿，又怎么追得上正在奔跑前行的人呢`);
      era.println();
      await era.printAndWait(`仿佛听见了自己的声音，那个背影回过头来`);
      await era.printAndWait(`眼中的光，却已经消失不见`);
      await era.printAndWait(`不，不是消失不见————而是转移到了另一个人身上`);
      era.println();
      await era.printAndWait(`不要`);
      await era.printAndWait(`看着我`);
      await era.printAndWait(`像以前一样的看着我`);
      await era.printAndWait(`不要把我抛下，不要让我一个人`);
      era.println();
      await era.printAndWait(`但是`);
      await era.printAndWait(
        `无法奔跑的${tachyon.name}，又有什么资格去要求留住对方呢`,
      );
      era.drawLine();
      await era.printAndWait(`${tachyon.name}从梦中醒来`);
      await era.printAndWait(`梦到了什么已经记不太清了`);
      await era.printAndWait(
        `……但从身上不适的感觉来看，八成又是日本杯那时的事吧`,
      );
      await era.printAndWait(`曼城茶座已经超越了极限`);
      await era.printAndWait(`超越了${tachyon.name}`);
      await era.printAndWait(`所以……就算他被茶座迷住了，也是很正常的吧`);
      await era.printAndWait(`毕竟，那可是超越了${tachyon.name}的跑法啊`);
      era.println();
      await tachyon.say_and_wait(`……不要`);
      if (love < 50) {
        await era.printAndWait(`事到如今才发现，是不是有些太晚了？`);
        await era.printAndWait(
          `明明都已经陪在自己身边如此之久，却一直当成理所当然`,
        );
        await era.printAndWait(`直到要失去了才发现，自己已经离不开他了`);
      }
      era.println();
      await era.printAndWait(`如果是他的话，还会和往常一样照顾自己的吧`);
      await era.printAndWait(`还是会和以往一样，照料${tachyon.name}的需求`);
      await era.printAndWait(`因为他就是如此温柔的一个人`);
      await era.printAndWait(`……但是，只是这样${tachyon.name}是无法满足的`);
      await era.printAndWait(`是他的光，温暖了自己`);
      await era.printAndWait(`让自己产生了希望，对比赛的渴望`);
      await era.printAndWait(`所以请不要……不要把属于自己的光夺走`);
      era.println();
      await era.printAndWait(`Jingle bell Jingle bell Jingle all the way～～`);
      era.println();
      await era.printAndWait(`忽然，窗外响起了圣诞歌的声音`);
      await era.printAndWait(`圣诞将至，${tachyon.name}的心中却仍是一片黑暗`);
      //todo 状态：不可缺少之人：如果爱慕值在75以下则强制提升至75，≥75则不受影响
    }
  } else if (edu_weeks === 95 + 48) {
    if (event_marks.plan_b === 0) {
      await print_event_name(`临夜的圣诞老人`, tachyon);
      era.println();
      await era.printAndWait(`寒冬的夜里`);
      await era.printAndWait(`明天，就是有马纪念了`);
      await era.printAndWait(`必须维持良好的作息，好去支援速子才行`);
      await era.printAndWait(`所以，必须要早睡`);
      await era.printAndWait(`所以……`);
      era.println();
      await era.printAndWait(`到底是谁，这个时候还在外面嘎吱嘎吱吵人睡觉！`);
      era.println();
      await era.printAndWait(
        `你愤怒的推开窗一看，看见窗外是拿着试管的${tachyon.name}`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哦呀，居然醒来了吗，可惜没机会尝试最新调的试剂了……`,
      );
      era.printButton(`……那是什么`, 1);
      era.printButton(`……你为什么会在窗外`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(
          `唔……某种能够无声无味将玻璃腐蚀的药，只对玻璃有效，所以可以防止像之前一样不小心滴穿地板的事，不过副作用嘛…`,
        );
        await tachyon.say_and_wait(
          `…它在溶解完之后会自动进入缝隙中，很难清理，所以被腐蚀掉的地方基本上除非全部拆掉否则应该都再也装不了玻璃了`,
        );
        era.println();
        await era.printAndWait(`好恐怖！？`);
      } else {
        await tachyon.say_and_wait(
          `哼哼，惊喜哦……比起这个，不先放我进去吗？外面有点冷啊`,
        );
        era.println();
        await era.printAndWait(`所以说为什么要爬窗啊！！`);
        era.println();
        await era.printAndWait(`速子径直进了房间`);
        await era.printAndWait(`你有些戒备的看着对方`);
        era.println();
        await era.printAndWait(
          `这也不是${tachyon.name}第一次闯入私宅了，每次都是以无法忍耐到早上才做实验为由来给自己下药`,
        );
        await era.printAndWait(
          `平常也就算了，有马前一天的重要时光说什么也不能再让${tachyon.sex}为所欲为了`,
        );
        era.printButton(`明天就是有马纪念了`, 1);
        era.printButton(`快回去休息吧`, 2);
        await era.input();
        await tachyon.say_and_wait(
          `……嗯哼，明天就是有马纪念了，那么……今天呢？`,
        );
        era.printButton(`今天？`, 1);
        era.printButton(`……有马纪念前一天？`, 2);
        await era.input();
        await era.printAndWait(`…………`);
        await era.printAndWait(`现场忽然陷入沉默`);
        await era.printAndWait(`仿佛连速子都无语了一般`);
        era.println();
        await tachyon.say_and_wait(
          `……豚鼠君，不知道你今天有没有注意到，街上的面包坊最近忽然开始卖起木头蛋糕了`,
        );
        era.printButton(`是因为最近流行吗？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`…………肯O基开始推出炸鸡套餐了？`);
        era.printButton(`O德基除了炸鸡还有啥能当套餐的吗？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`……………学生会长穿的布偶服？`);
        era.printButton(
          `肯定又是什么冷笑话的梗吧，我才不会上当，装成圣诞树什么…………欸？`,
          1,
        );
        await era.input();
        await era.printAndWait(`…………`);
        await era.printAndWait(`房间内又陷入一阵沉默`);
        era.printButton(`难道说……今天……是，圣诞节？`, 1);
        await era.input();
        era.println();
        await era.printAndWait(`哈哈哈`);
        await era.printAndWait(`室内响起了${tachyon.sex}银铃般的笑声`);
        await era.printAndWait(
          `如果是以这声音作为铃铛的话，或许自己真的会相信圣诞老人的到来吧`,
        );
        era.println();
        await tachyon.say_and_wait(
          `没错，豚鼠君！今天就是圣诞节！那么……有没有什么想要的圣诞礼物呢？今天，就让本圣诞老人大方的为你实现吧！`,
        );
        era.println();
        await era.printAndWait(
          `速子掏出了先前不知道藏在哪里的圣诞帽，斜斜戴在耳朵上`,
        );
        await era.printAndWait(
          `张开双臂，摆出了往常的姿势，然而口中说出的却不是『开始实验吧』，而是『Merry Christmas』`,
        );
        era.printButton(`Merry Christmas`, 1);
        era.printButton(`圣诞快乐`, 2);
        await era.input();
        await tachyon.say_and_wait(`好啦好啦，总之快说，想要什么圣诞礼物！`);
        era.printButton(`速子的吻`, 1);
        era.printButton(`有马胜利`, 2);
        const ret1 = await era.input();
        if (ret1 === 1) {
          era.println();
          await era.printAndWait(`可能是因为圣诞节的气氛吧`);
          await era.printAndWait(
            `一不小心，对速子做出了明显越过师生关系的发言`,
          );
          if (love > 75) {
            await tachyon.say_and_wait(`欸………`);
            era.println();
            await era.printAndWait(`果……果然很奇怪吧`);
            await era.printAndWait(`还是换个`);
            era.println();
            await tachyon.say_and_wait(
              `不……只是，平常都在做的事，拿来当圣诞愿望什么的，也太掉价了`,
            );
            await tachyon.say_and_wait(
              `这可是难得的圣诞节啊……不换个特殊点的愿望吗？`,
            );
            await tachyon.say_and_wait(`比如……`);
            era.println();
            await era.printAndWait(`慢慢掀开的校服裙，底下是深紫的蕾丝`);
            await era.printAndWait(`暗示性的眼神，充满了情欲和渴望`);
            await era.printAndWait(`但是……`);
            era.printButton(`明天……有马……`, 1);
            await era.input();
            era.println();
            await era.printAndWait(`只能说出关键词来的原因`);
            await era.printAndWait(`是因为理智也只能支撑自己说出这些单词来了`);
            await era.printAndWait(`心里半是害怕半是期待`);
            await era.printAndWait(`害怕速子不听劝告`);
            await era.printAndWait(`期待速子不听劝告`);
            era.println();
            await tachyon.say_and_wait(`……算了`);
            era.println();
            await era.printAndWait(`速子停下了手上的动作`);
            await era.printAndWait(`你的心中半是庆幸半是遗憾`);
            era.println();
            await tachyon.say_and_wait(
              `毕竟仔细想想，等到明天，做为实验成功的庆祝方式，不也挺不错的吗`,
            );
            era.println();
            await era.printAndWait(`明天……`);
            await era.printAndWait(`看来，需要期待的事又多一件了啊`);
          } else if (love > 50) {
            era.println();
            await tachyon.say_and_wait(`可以哦`);
            era.println();
            await era.printAndWait(`欸……？`);
            await era.printAndWait(`没等你反应过来，速子便主动靠上前`);
            await era.printAndWait(`等等，什么情况`);
            era.println();
            await tachyon.say_and_wait(`咕啾……啾……啾噜……`);
            era.println();
            await era.printAndWait(`长达数分钟的长吻`);
            await era.printAndWait(
              `短暂而又漫长的时间里，寂静的圣诞夜中只有唾液交换的声音响起`,
            );
            // todo If 训练员是初吻
            await era.printAndWait(`初吻就是法式深吻`);
            await era.printAndWait(
              `这种奇幻的梦境，或许也只有圣诞之夜会发生吧`,
            );
            era.println();
            await tachyon.say_and_wait(`这个圣诞礼物，喜欢吗？`);
            era.println();
            await era.printAndWait(
              `月下的${tachyon.sex}，眼神带着妖豔且危险的色彩`,
            );
            era.println();
            await tachyon.say_and_wait(`放心吧……我还是知道轻重缓急的`);
            era.println();
            await era.printAndWait(
              `再怎么说，明天是有马纪念的情况下还做那种事绝对是对对手和自己的最大不敬`,
            );
            era.println();
            await tachyon.say_and_wait(
              `所以……只是稍微，做个记号，等到有马结束之后，呵呵……仔细想想，到时候要怎么回应我吧`,
            );
          } else if (relation < 0) {
            await tachyon.say_and_wait(
              `喂喂，哪怕是圣诞节，这种玩笑也开的过头了吧`,
            );
            era.println();
            await era.printAndWait(`速子用危险的眼神警告你`);
            await era.printAndWait(`然而这种熟悉的冷漠回覆反而让你安心了下来`);
          } else if (relation < 225 && relation > 0) {
            await tachyon.say_and_wait(`哦？真的想要吗？`);
            era.println();
            await era.printAndWait(`————欸？`);
            era.println();
            await tachyon.say_and_wait(
              `听说，似乎是有这么种东西，叫什么誓约之吻的`,
            );
            era.println();
            await era.printAndWait(`欸欸———！？`);
            era.println();
            await tachyon.say_and_wait(`这样的话，来吧`);
            era.println();
            await era.printAndWait(`速子说完后，忽然靠近了你`);
            era.println();
            await tachyon.say_and_wait(`就当成，节日的大放送……`);
            era.println();
            await era.printAndWait(`${tachyon.sex}轻轻的，贴近你的身体`);
            await era.printAndWait(`温柔的———在手背，轻啄了一下`);
            era.println();
            await tachyon.say_and_wait(`好了`);
            era.println();
            await era.printAndWait(`…………欸？`);
            era.println();
            await tachyon.say_and_wait(
              `顺带一提，誓约的内容是从今以后你必须永远作为我的豚鼠君接受实验哦？`,
            );
            era.println();
            await era.printAndWait(`等一下！？`);
            await era.printAndWait(
              `一个手背的社交吻换一辈子是不是两边的价值差有点大了！？`,
            );
            era.println();
            await era.printAndWait(`速子没有回应你的抱怨，只是咯咯笑着`);
            await era.printAndWait(`也不知道到底是认真的还是说着玩的`);
          } else if (relation > 225) {
            era.println();
            await tachyon.say_and_wait(`嗯？真是奇怪的要求啊……只有这样吗？`);
            era.println();
            await era.printAndWait(`速子很正常的在你的脸颊上亲了一下`);
            era.println();
            await era.printAndWait(`……好像，没什么感觉？`);
            era.println();
            await tachyon.say_and_wait(
              `真是的，难得的圣诞愿望，浪费在这种事情上，真不理解你……`,
            );
            era.println();
            await era.printAndWait(
              `虽然感觉还好，但被这么一说也有种自己似乎亏了的感觉`,
            );
            await era.printAndWait(`这样的话……`);
            era.println();
            await tachyon.say_and_wait(`！……喂，喂喂，豚鼠君……你在做什么`);
            era.println();
            await era.printAndWait(`你反过来，搂住了速子的腰`);
            await era.printAndWait(`来而不往，非礼也……是这么说的吗？随便吧`);
            await era.printAndWait(
              `难得的圣诞节，由自己掌握主导权，不也是一次有趣的经历吗？`,
            );
            era.println();
            await era.printAndWait(`你轻轻的，在速子的额头上啄吻了一下`);
            era.printButton(`圣诞快乐`, 1);
            await era.input();
            era.println();
            await tachyon.say_and_wait(
              `…………看在今天圣诞节的份上，就不跟你计较了……之后给我记住`,
            );
            era.printButton(`虽然这么说，但速子的脸却很红……`, 1);
            await era.input();
            era.println();
            await tachyon.say_and_wait(`闭嘴！`);
          }
        } else {
          await era.printAndWait(`大概是因为明天就是有马纪念`);
          await era.printAndWait(
            `导致你脑子一热，不由得将可以被称之为ky(搞不懂气氛)的话说了出口`,
          );
          era.printButton(`有马……`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(`嘘`);
          era.println();
          await era.printAndWait(`话说到一半便被速子的食指按住`);
          era.println();
          await tachyon.say_and_wait(
            `今天是奇迹及魔幻的夜晚，那些现实的话，等到明天再说，好吗？`,
          );
          era.println();
          await era.printAndWait(`月下的${tachyon.sex}，如同真正的天使一般`);
          era.printButton(`没想到速子也有这么浪漫的一面啊`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(
            `哦？哈哈哈！这么说来，不是有句话吗？『科学家才是世界上最大的浪漫主义者』啊`,
          );
          era.println();
          await era.printAndWait(`如果不是相信那些浪漫的，感性的东西`);
          await era.printAndWait(
            `是不会将自己的人生都投入在枯燥重复的研究中的吧`,
          );
          await era.printAndWait(
            `相信着${tachyon.get_uma_sex_title()}的可能性的${
              tachyon.sex
            }，相信着${tachyon.name}的可能性的你`,
          );
          await era.printAndWait(`不就是最天真的两名梦想家吗？`);
          era.println();
          await tachyon.say_and_wait(`那么，还有什么想要的其他圣诞礼物吗？`);
          era.printButton(`不用了`, 1);
          await era.input();
          era.println();
          await era.printAndWait(`这场梦，就是最棒的礼物了`);
          await era.printAndWait(
            `速子好似理解了你的意思般，点了点头仿佛在认同你的想法`,
          );
          era.drawLine();
          await tachyon.say_and_wait(`那么……你想要的礼物送完了`);
          era.println();
          await era.printAndWait(`嗯……？`);
          await era.printAndWait(
            `在『礼物』环节结束后，速子却好像还没玩够一般，又接着开口说道`,
          );
          era.println();
          await tachyon.say_and_wait(`接下来，该轮到圣诞老人想送的礼物了`);
          era.println();
          await era.printAndWait(`听见这句话，你立马绷紧了神经`);
          await era.printAndWait(`果然……还是逃不掉吗？`);
          era.println();
          await tachyon.say_and_wait(`豚鼠君，这几天，你也应该累了吧`);
          era.println();
          await era.printAndWait(
            `伴随着为你着想的起手式，速子一步一步靠近了床边的你`,
          );
          await era.printAndWait(`渐渐的，将你逼退到床角`);
          await era.printAndWait(`这次的会是什么呢？发光？变色？变形？`);
          era.println();
          await era.printAndWait(`与恐惧一同爬上床边的红眼阴影不断迫近`);
          await era.printAndWait(
            `最后，在距离接近于零时，${tachyon.sex}展露出了${tachyon.sex}的真实目的`,
          );
          era.println();
          await tachyon.say_and_wait(`————好乖，好乖`);
          era.println();
          await era.printAndWait(`垫在后脑勺下的是丝质的触感`);
          await era.printAndWait(
            `眼前是${tachyon.sex}豔丽的脸庞——原本想这么说，但却被两座山脉给挡住了视线`,
          );
          await era.printAndWait(`这是……膝枕？`);
          era.println();
          await tachyon.say_and_wait(
            `真是的，你以为会是什么？不是都说了吗？今天晚上的我，只是名普通的圣诞老人而已，不在此之上，也不在此之下`,
          );
          era.println();
          await era.printAndWait(
            `你愣愣的听着，${tachyon.sex}轻柔的仿佛在唱童谣一般的话语`,
          );
          era.println();
          await tachyon.say_and_wait(`辛苦了———还有，谢谢你`);
          era.println();
          await era.printAndWait(
            `今天晚上之前，一直都在配合着负责${tachyon.get_uma_sex_title()}的胡闹`,
          );
          await era.printAndWait(
            `明天早上之后，还要继续面对有马纪念以及在那之后的URA总决赛`,
          );
          await era.printAndWait(`所以至少现在，这个夜晚`);
          await era.printAndWait(`祝，一夜好梦`);
          // todo 体力+40%
          // 好感+100
        }
      }
    } else {
      await print_event_name(`圣夜的诺言`, tachyon);
      era.println();
      await era.printAndWait(`最近速子的情绪似乎有些反常`);
      await era.printAndWait(
        `总是一个人闷闷不乐的，茶座的训练也都不跟着，甚至连实验都很少做了`,
      );
      await era.printAndWait(
        `虽说对于实验最大受害者的你和茶座而言也不能说这是什么坏事，但还是令人有些担心`,
      );
      await era.printAndWait(`忽然，商店街的圣诞歌声传入你的耳中`);
      await era.printAndWait(`有了，以圣诞节为理由找${tachyon.sex}出门谈心吧`);
      era.drawLine();
      await era.printAndWait(`圣诞夜的商店街比起平时更加灯火通明气氛火热`);
      await era.printAndWait(`其原因不只是圣诞节，更是因为……`);
      await say_by_passer_by(
        `商店街大叔`,
        `有马纪念预测！明天的有马纪念赛前预测！`,
      );
      await say_by_passer_by(
        `游客A`,
        `不知道明天有马纪念会怎么样……不过，赢的应该会是曼城茶座吧`,
      );
      await say_by_passer_by(
        `游客B`,
        `日本杯的表现，真的太强了！……说是史上最强也不为过吧`,
      );
      era.println();
      await tachyon.say_and_wait(`…………`);
      era.println();
      await era.printAndWait(`一直沉默也不是办法，这个时候还是该说点话吧`);
      era.printButton(`明天就是有马纪念了，不过茶座不会有问题的`, 1);
      era.printButton(`那边的蜂蜜特饮好像在搞圣诞特卖的样子`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`…………`);
        era.println();
        await era.printAndWait(`${tachyon.sex}还是没说什么`);
        await era.printAndWait(
          `感到有些气氛尴尬的你只能继续聊着茶座最近的训练状况`,
        );
      } else {
        await tachyon.say_and_wait(`……那就，来一杯吧`);
      }
      era.println();
      await era.printAndWait(`喝了最甜的蜂蜜后，速子的心情似乎缓和一些了`);
      await era.printAndWait(`顺带一提，你为了配合也点了最甜的，然而……`);
      await era.printAndWait(`只吸了一口，你便感到牙齿生疼`);
      await era.printAndWait(
        `看着速子欢快喝着蜂蜜的模样，你开始思考是不是该找机会带${tachyon.sex}去检查牙齿了`,
      );
      era.println();
      await era.printAndWait(`没过多久，你们走到了商店街中央的圣诞树前`);
      await era.printAndWait(
        `忽然，一阵狂风，将周围有马纪念的报导吹到了你们面前`,
      );
      await era.printAndWait(`报纸上是日本杯时的茶座，看上去威风凛凛`);
      era.printButton(
        `日本杯……那时候的茶座，真的好厉害，虽然不太合适，但要是跟速子……`,
        1,
      );
      era.printButton(`速子！那边的棉花糖摊看起来好厉害！`, 2);
      const ret2 = await era.input();
      if (ret2 === 1) {
        await era.printAndWait(`前面看提起有马纪念速子的心情似乎不太好`);
        await era.printAndWait(`因此你转而提起日本杯的事`);
        await era.printAndWait(
          `速子的宿愿被达成的那天，想必一定能让速子提起精神来吧`,
        );
        await era.printAndWait(`然而……`);
        era.println();
        await tachyon.say_and_wait(`………………`);
        era.println();
        await era.printAndWait(`速子依然什么话也没说`);
        await era.printAndWait(`还是不对吗……`);
      } else {
        era.println();
        await era.printAndWait(
          `你看着圣诞树旁的棉花糖摊，在师傅高超的手艺下，各种模样的软绵绵动物瞬间被雕塑而成`,
        );
        era.println();
        await tachyon.say_and_wait(`……不，我……`);
        era.println();
        await era.printAndWait(
          `没等速子说完，棉花糖摊的摊主便塞了个又大又软绵绵的棉花糖豚鼠在速子手中`,
        );
        await vega.say_as_unknown_and_wait(
          `心情不好的时候要记住，只有软绵绵是不会背叛你的`,
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait(`摊主不知道为什么，有些莫名的眼熟`);
          await era.printAndWait(`……应该，只是错觉而已吧`);
        }
        era.println();
        await era.printAndWait(
          `速子愣愣的接过了棉花糖豚鼠，没有退回去也没有多说什么`,
        );
        await era.printAndWait(`然后，${tachyon.sex}轻启朱唇，小小的咬了一口`);
        era.println();
        await tachyon.say_and_wait(`……软绵绵的`);
        era.println();
        await era.printAndWait(
          `不知道为什么，摊主听见这句话后骄傲的挺起了胸膛`,
        );
        era.println();
        await era.printAndWait(`最后，你们走到了商店街末尾`);
        await era.printAndWait(
          `你们看见路旁的书店，店内最引人注目的地方，摆放着几本过期的杂志`,
        );
        await era.printAndWait(`过期……也不能这么说`);
        await era.printAndWait(
          `虽然以比赛情报来说是已经过期的，但就时间而言，只是前两个月的杂志而已`,
        );
        await era.printAndWait(`————是速子凯旋门赏后的采访杂志`);
        await say_by_passer_by(`书店老板`, `欢迎光临！`);
        era.printButton(`这是……`, 1);
        era.printButton(`凯旋门赏的杂志？`, 2);
        await era.input();
        era.println();
        await era.printAndWait(`书店老板并没有注意到跟在你身后将头低下的速子`);
        await era.printAndWait(`望着杂志开始夸夸而谈`);
        await say_by_passer_by(
          `书店老板`,
          `喔！这些杂志啊，我专门摆在这里的！好不容易啊，日本${tachyon.get_uma_sex_title()}终于赢下世界的凯旋门！当然要摆出来做纪念了！`,
        );
        await say_by_passer_by(
          `书店老板`,
          `要我说外面那些人根本不懂，${tachyon.name}才是最强的！要是没退役那什么曼城茶座根本不会是${tachyon.sex}的对手！`,
        );
        era.printButton(`也不好说呢……`, 1);
        era.printButton(`当然，${tachyon.name}是最强的`, 2);
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(`如果是日本杯前的话确实如此`);
          await era.printAndWait(
            `但日本杯之后的茶座，已经是速子认证的完成体了`,
          );
          await era.printAndWait(
            `这种情况下的茶座，要是再与速子比一场的话……谁胜谁负真不好说`,
          );
          await era.printAndWait(
            `没错，哪怕茶座已经超越了极限……自己的心里还是相信，速子一定能够与${tachyon.sex}一较高下`,
          );
          await era.printAndWait(`绝对不是像${tachyon.sex}自己说的什么绊脚石`);
          await say_by_passer_by(
            `书店老板`,
            `切，还以为来了个识货的，没想到也是什么都不懂的家伙`,
          );
          era.println();
          await era.printAndWait(`听见店老板这么说，你只能露出苦笑`);
          await era.printAndWait(`忽然，你看到速子走近了那堆杂志`);
          era.println();
          await tachyon.say_and_wait(`……老板，给我一本`);
          await say_by_passer_by(`书店老板`, `喔喔，小姑娘挺识货的嘛`);
          era.println();
          await era.printAndWait(
            `速子刻意压低了声音，不让人听出${tachyon.sex}的真实音色`,
          );
          await era.printAndWait(
            `不过这杂志……当初应该有收到样品才对，为什么要再买一次呢？`,
          );
          era.println();
          await tachyon.say_and_wait(
            `……没办法，有人不懂这些杂志的价值，我只好自己好好珍惜了`,
          );
          era.println();
          await era.printAndWait(`欸`);
          await era.printAndWait(`看着速子偷偷对你露出的带着恼怒的眼神`);
          await era.printAndWait(`你不禁开始思考，自己难道又说错什么了吗？`);
        } else {
          era.println();
          await tachyon.say_and_wait(`……！`);
          era.println();
          await era.printAndWait(`这还需要问吗？`);
          await era.printAndWait(`虽说如果毫无意义`);
          await era.printAndWait(
            `但还是让人忍不住去想如果的${tachyon.get_uma_sex_title()}`,
          );
          await era.printAndWait(
            `带来无限的可能性及遐想的${tachyon.get_uma_sex_title()}`,
          );
          await era.printAndWait(`这就是${tachyon.name}`);
          await say_by_passer_by(
            `书店老板`,
            `果然！小哥你进来的时候我就有感觉了，这家伙一定是个懂行的！`,
          );
          await say_by_passer_by(
            `书店老板`,
            `我就说了，${tachyon.name}才是最强的！什么曼城茶座根本就不会是对手！`,
          );
          await say_by_passer_by(
            `书店老板`,
            `实不相瞒，我其实从去年的皋月赏就开始关注${
              tachyon.name
            }了！那种跑法……说是${tachyon.get_uma_sex_title()}的极限真的不夸张啊！`,
          );
          era.println();
          await era.printAndWait(`你和老板兴致勃勃的谈论着速子的比赛`);
          await era.printAndWait(`直到身后的速子受不了了拉着你想往店外走`);
          await era.printAndWait(
            `不知为何，${tachyon.sex}的脸看起来似乎有点红……大概是灯光的错觉吧`,
          );
          //todo if 三次选项中选1次数≥2+爱慕>75
          era.println();
          await era.printAndWait(`不知不觉，你们漫步到了河堤旁`);
          await era.printAndWait(
            `昏暗寂静的河岸，与远处商店街的灯火及圣诞歌曲成为对比`,
          );
          era.println();
          await tachyon.say_and_wait(`……下雪了`);
          era.println();
          await era.printAndWait(`确实，周围开始飘起了绵绵雪絮`);
          await era.printAndWait(
            `……这么晚，还是下雪天跑到这种地方来，果然还是很危险吧`,
          );
          await era.printAndWait(
            `虽然没能问出速子心情沮丧的原因，但今天真的太晚了`,
          );
          await era.printAndWait(`你正想提议今天就到这边结束的时候……`);
          era.println();
          await tachyon.say_and_wait(`…………呼`);
          era.println();
          await era.printAndWait(`忽然，你被速子抱住了`);
          await era.printAndWait(`非常突然，毫无前兆的拥抱`);
          era.printButton(`速子……？`, 1);
          await era.input();
          era.println();
          await era.printAndWait(
            `你想说些什么，但怀中人微微颤抖的身体，以及靠在你肩膀上的脑袋，还有莫名湿热的肩膀，使你意识到此时或许不该开口说话`,
          );
          era.println();
          await tachyon.say_and_wait(`对不起……但是……只要，只要一下就好……`);
          era.println();
          await era.printAndWait(`你愣着神让速子在你的怀中哭泣`);
          await era.printAndWait(`内心满是疑惑`);
          await era.printAndWait(`速子到底怎么了`);
          era.drawLine();
          await era.printAndWait(`其实，已经猜到了`);
          await era.printAndWait(`这次出来，不过是再一次确认自己的猜想`);
          await era.printAndWait(`但实际听见还是忍不住心中刺痛`);
          era.println();
          await era.printAndWait(`从先前的闲聊就已经能够发现`);
          await era.printAndWait(
            `他的话题总是三句不离茶座，眼中也满是对${tachyon.sex}的期待`,
          );
          await era.printAndWait(
            `以前那个凡事总以${tachyon.name}为优先的豚鼠君，已经不在了`,
          );
          await era.printAndWait(`现在的他，是茶座的『训练员先生』`);
          await era.printAndWait(`于情于理这都是最正确的选项`);
          await era.printAndWait(
            `自己不过是利用跑法将其魅惑，将其当成方便工具对待的卑鄙魔女`,
          );
          await era.printAndWait(
            `跨越了各种阻碍，最终超越了极限的${tachyon.get_uma_sex_title()}，`,
          );
          await era.printAndWait(
            `用自己的跑法将魔女施加在他身上的魔咒破除，最后两人过着幸福快乐的生活`,
          );
          await era.printAndWait(`这一定就是，故事最好的结局`);
          era.println();
          await era.printAndWait(`所以……`);
          era.println();
          await tachyon.say_and_wait(`最后一次……让我，最后爱我一次就好`);
          await tachyon.say_and_wait(`只要一次……之后就再也不会干涉你跟茶座了`);
          era.println();
          await era.printAndWait(`利用各种借口理由，只求一夜欢愉`);
          await era.printAndWait(`可悲的是，直到最后自己也还是只能用这种借口`);
          await era.printAndWait(
            `用好像威胁一样的口吻，期望他能给予最后一次的慈悲`,
          );
          await era.printAndWait(`只要一次就好`);
          await era.printAndWait(`然后自己就能放弃，衷心的祝福他们了`);
          await era.printAndWait(`无视脑海中“你真的觉得自己能够放弃吗”的低语`);
          await era.printAndWait(`用这样的话来说服自己`);
          era.println();
          await era.printAndWait(`看着这样的速子，你选择`);
          era.printButton(`抱住`, 1);
          era.printButton(`亲吻`, 2);
          const ret1 = await era.input();
          if (ret1 === 1) {
            await era.printAndWait(`忽然，还想说出口的话被堵住了`);
            await era.printAndWait(`……被他反向抱住了自己`);
            await era.printAndWait(`想说的话卡在喉咙说不出口`);
          } else {
            await era.printAndWait(`忽然，还想说出口的话被堵住了`);
            await era.printAndWait(`……温柔，暖和的触感`);
            await era.printAndWait(`仿佛将冬日的寒冷完全去除的圣诞之吻`);
            era.println();
            await era.printAndWait(`不……自己的意思不是这样`);
            await era.printAndWait(
              `还是说……${tachyon.name}已经连被爱着的资格都没有了？`,
            );
            await era.printAndWait(`自暴自弃下，不由得产生这样的想法`);
            era.println();
            await tachyon.say_and_wait(`唔……豚鼠君`);
            era.println();
            await era.printAndWait(`正当自己这么想的时候`);
            await era.printAndWait(
              `仿佛在驱赶自己心中的杂念般，他加重了拥抱的力道`,
            );
            era.printButton(`至少，看完明天的有马纪念吧`, 1);
            era.printButton(`一定会给速子一个交代的`, 2);
            await era.input();
            era.println();
            await era.printAndWait(`交代……什么样的交代`);
            await era.printAndWait(`作为……关系结束的交代吗？`);
            await era.printAndWait(`直直望着他的双眼，却无法看出任何含义`);
            era.println();
            await era.printAndWait(`……也不错吧`);
            await era.printAndWait(`如果可以最后，再看见他那狂热的眼神的话`);
            await era.printAndWait(
              `……即便目光指向的对象，已经不是${tachyon.name}`,
            );
          }
          // todo 好感-20
          // 爱慕+10

          //todo If 三次选项中选2次数≥2+爱慕>75
          era.println();
          await tachyon.say_and_wait(`……啊，下雪了`);
          era.println();
          await era.printAndWait(`忽然，天空中开始飘起渺渺白雪`);
          await era.printAndWait(
            `是不是该回去了……正当你这么想着的时候，速子拉了拉你的衣服`,
          );
          era.println();
          await tachyon.say_and_wait(`找个地方先坐坐吧`);
          era.println();
          await era.printAndWait(`也是，今天的目标还没达成呢`);
          await era.printAndWait(
            `找个店先坐一下，然后把速子不高兴的原因问出来吧`,
          );
          await era.printAndWait(`你给自己打了打气`);
          era.drawLine();
          era.printButton(`…………`, 1);
          await era.input();
          await tachyon.say_and_wait(`豚鼠君？不坐吗？`);
          era.printButton(`……不，那个`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(
            `这样支支吾吾的，可不像你啊……还是说，有什么难言之隐吗？`,
          );
          era.println();
          await era.printAndWait(
            `不，要说的话，也并非是难言之隐的问题，而是……`,
          );
          era.printButton(`和学生一起进居酒屋什么的，NG了吧`, 1);
          era.printButton(`和未成年一起进居酒屋什么的，犯法了吧`, 2);
          await era.input();
          era.println();
          await era.printAndWait(
            `速子拉着你要进入的，赫然是商店街末尾的居酒屋`,
          );
          era.println();
          await tachyon.say_and_wait(
            `都已经退役了，没关系的吧……虽然我也是第一次来这种地方，不过应该不会有问题`,
          );
          await tachyon.say_and_wait(
            `还是豚鼠君，你都这么大的人了，难道说连居酒屋都不敢进？`,
          );
          era.printButton(`问题不是退役不退役而是学生啊！`, 1);
          era.printButton(`……激将法是没用的`, 2);
          await era.input();
          era.println();
          await era.printAndWait(
            `你正想拒绝拉着速子往回走时，速子却直接就进入了店里`,
          );
          era.println();
          await tachyon.say_and_wait(`好啦好啦，来吧，就当吃个宵夜……之类的`);
          await say_by_passer_by(`店主`, `欢迎光临～～`);
          era.println();
          await era.printAndWait(
            `店门一开，温暖的暖气与外面的冷空气成对比后便让你再也走不动路了`,
          );
          era.printButton(`……坐一下或许也不是不行`, 1);
          await era.input();
          era.println();
          await era.printAndWait(`进了店内，你才意外的发现`);
          await era.printAndWait(
            `在店内忙里忙完的店主，身后竟然有着根长长的栗色尾巴`,
          );
          era.println();
          await tachyon.say_and_wait(`……哦呀，居然……`);
          era.println();
          await tachyon.say_and_wait(
            `欢迎光临！……我说这位客人，应该，是学生吧？`,
          );
          era.println();
          await tachyon.say_and_wait(
            `啊啦，看起来是这样吗？不过我可是已退役身份就是了`,
          );
          era.println();
          await era.printAndWait(`不，已经退役不代表就不是学生了吧`);
          await era.printAndWait(`虽然很想吐槽，但店主却点了点头说那就没问题`);
          await era.printAndWait(`不……没问题什么啊`);
          era.println();
          await say_by_passer_by(
            `店主`,
            `再说，身边那位应该是你的训练员吧，有训练员陪着就没问题啦`,
          );
          await tachyon.say_and_wait(`……哦，看得出来吗？`);
          era.println();
          await era.printAndWait(
            `问题很大吧……不过比起这个，你也好奇为什么能够看出自己是训练员`,
          );
          await say_by_passer_by(
            `店主`,
            `他的眼神啊，和我老公一模一样，都是看见自家担当就走不动路的眼神`,
          );
          era.println();
          await era.printAndWait(`这，这是什么说法`);
          await era.printAndWait(`自己难道是什么变态吗`);
          await say_by_passer_by(
            `店主`,
            `呵呵，这种眼神可是好老公必备的～～千万别放过了`,
          );
          era.println();
          await era.printAndWait(`店主说完后就去招待其他客人了`);
          await era.printAndWait(
            `你战战兢兢的望着速子，心想这下绝对会被${tachyon.sex}嘲笑了……`,
          );
          era.println();
          await tachyon.say_and_wait(`…………`);
          era.println();
          await era.printAndWait(`不知道在思考些什么`);
          await era.printAndWait(`速子的神情看起来仿佛出神了一般`);
          era.printButton(`速子？`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(`……啊，嗯，咳咳，没什么`);
          era.println();
          await era.printAndWait(`回过神后，速子脸仿佛延时启动的自热便当一般`);
          await era.printAndWait(
            `瞬间变得通红，你仿佛能看见蒸气从${tachyon.sex}脸上冒出`,
          );
          await era.printAndWait(
            `为了掩饰尴尬，${tachyon.sex}将注意力转移到了店内的情况`,
          );
          await era.printAndWait(`你也将目光望了过去`);
          era.println();
          await era.printAndWait(`店主忙前忙后招待着客人`);
          await era.printAndWait(
            `店里的客人虽然有些在谈论着有马纪念的事，却也并非主流`,
          );
          await era.printAndWait(`就和每天的天气一般，是无聊时聊个两句的话题`);
          await era.printAndWait(`证据就是，到现在还没有人认出${tachyon.name}`);
          await era.printAndWait(
            `身为在特雷森学园附近的商店街，不认识上半年最为出名的${tachyon.get_uma_sex_title()}，可以说是极为异类的情况了`,
          );
          era.println();
          await era.printAndWait(
            `看到这，你不由得想起身为${tachyon.get_uma_sex_title()}的店主`,
          );
          await era.printAndWait(
            `既然说老公是训练员，那么代表${
              tachyon.sex
            }当初应该也是竞赛${tachyon.get_uma_sex_title()}吧`,
          );
          await era.printAndWait(`退役后却过着这样，与比赛几乎无缘的生活`);
          await era.printAndWait(`如此平淡，如此乏味，如此……祥和`);
          era.println();
          await tachyon.say_and_wait(`……这也是，一种可能性吗`);
          era.println();
          await era.printAndWait(`${tachyon.get_uma_sex_title()}的可能性`);
          await era.printAndWait(`这是速子总放在口上的话`);
          await era.printAndWait(
            `……但，${tachyon.get_uma_sex_title()}绝对不是每个人都能成为赛${tachyon.get_uma_sex_title()}的`,
          );
          await era.printAndWait(
            `就算是赛${tachyon.get_uma_sex_title()}，也能选择走上并非赛场的那条路`,
          );
          era.println();
          await era.printAndWait(`那么，这种可能性能否共用在速子身上呢？`);
          await era.printAndWait(`忽然，你能够理解速子消沉的原因了`);
          await era.printAndWait(`对速子而言，会有这样的可能性吗？`);
          await era.printAndWait(`成为茶楼老板的速子`);
          await era.printAndWait(`走上科研道路成为科学家的速子`);
          await era.printAndWait(
            `作为普通的学生，继续升学，成为大学生进入社会的..?!!`,
          );
          await era.printAndWait(`变成上班族的速子`);
          await era.printAndWait(
            `${tachyon.sex}也会有吗，像正常人一样，离开赛场，过着自己的生活的日子`,
          );
          era.println();
          await tachyon.say_and_wait(`……豚鼠君，你愿意跟着我吗？`);
          await tachyon.say_and_wait(`如果……我选择了这种可能性的话`);
          era.println();
          await era.printAndWait(
            `和速子一起，过着与比赛无关，与${tachyon.get_uma_sex_title()}的速度无关的平淡，祥和的日常`,
          );
          await era.printAndWait(`那样的生活，想必会十分美好吧`);
          await era.printAndWait(
            `就算是平淡的生活，只要有速子在，就绝对不会无聊`,
          );
          await era.printAndWait(`与${tachyon.sex}一起，建筑属于两人的生活`);
          await era.printAndWait(`……但是，现在不行`);
          era.printButton(`……可以等到明天的有马之后吗`, 1);
          era.printButton(`明天看完有马之后再问我一次`, 2);
          await era.input();
          await era.printAndWait(`想要离开赛场，本身也是一种可以选择的可能性`);
          await era.printAndWait(
            `但绝对不是像速子现在这样，如同逃避一般的远离`,
          );
          await era.printAndWait(`……只能希望，明天的有马能够令其改观了`);
          // todo 好感 + 100;
          // 爱慕 + 20;
        }
      }
    }
  }
};

handlers[event_hooks.week_end] = async function (hook, _, event_object) {
  const me = get_chara_talk(0),
    love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32),
    event_marks = new TachyonEduMarks(),
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
      era.printButton(`我会与你『一起』，实现『我们』的梦想`, 1);
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
        event_marks.plan_b++;
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
    await say_by_passer_by(`？？？`, `……谢谢……谢谢你……`);
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
    if (event_marks.plan_b === 0) {
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
    } else if (event_marks.plan_b === 1) {
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
      era.printButton(`这样就能同时看着你和茶座的跑法了`, 2);
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
    if (event_marks.plan_b === 0) {
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
      era.printButton(`退一万步，就算真的有好了，你都不用去上课的吗！？`, 2);
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
    } else if (event_marks.plan_b === 1 && event_marks.hot_spring_event === 1) {
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

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
handlers[event_hooks.race_start] = async (hook, extra_flag) => {
  const event_marks = new TachyonEduMarks(),
    relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    tachyon = get_chara_talk(32),
    coffee = get_chara_talk(25),
    edu_weeks = era.get('cflag:32:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name(`出道战前・研究可行度测试`, tachyon);
    await era.printAndWait(
      `如果说${tachyon.get_uma_sex_title()}与训练员的初遇，是两人的齿轮开始转动的瞬间`,
    );
    await era.printAndWait(`那么这一天，就是这齿轮运转的声音，震撼世界的瞬间`);
    await era.printAndWait(
      `…………最起码，对其他${tachyon.get_uma_sex_title()}而言是如此的`,
    );
    era.println();
    era.printButton(`速子！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `倘若自己的${tachyon.get_uma_sex_title()}真的有这种彷佛史诗的开卷一般的感想的话，现在大概便不会耗费重要的赛前准备时光于与其他${tachyon.get_uma_sex_title()}聊天上了吧`,
    );
    era.println();
    await tachyon.say_and_wait(
      `因此，所谓时间，不过是人为给予的定义罢了，本身就只是个人类创造出的单位，快与慢更是相对的概念而已…………`,
    );
    await tachyon.say_and_wait(`哦呀，豚鼠君？你来了啊`);
    era.println();
    await era.printAndWait(
      `你不由得感到无语，还差几分钟参赛${tachyon.get_uma_sex_title()}就要入场，一辈子理论上只有这么一次的首场出道赛，`,
    );
    await era.printAndWait(
      `身为第一人气主角的${tachyon.sex}，却在比赛开始前还在一旁与人聊天，聊的还是这种无关紧要的话题`,
    );
    era.println();
    await era.printAndWait(
      `你向那几名听速子的论点听的如痴如醉的孩子道别后，拉着速子走下地下道`,
    );
    era.println();
    await tachyon.say_and_wait(`男人如此急躁可是会被讨厌的啊，豚鼠君`);
    era.println();
    await era.printAndWait(`${tachyon.sex}依旧不慌不忙的跟在你身后`);
    await era.printAndWait(
      `你们两人的脚步声在空荡的地下道内回荡着，气氛一时竟有些尴尬`,
    );
    era.println();
    era.printButton(`……没想到，你这么善于与人交流啊`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `开口就是明显的没话找话式发言，但速子似乎没注意到这份尴尬，又或者注意到了但装作没注意的说道`,
    );
    era.println();
    await tachyon.say_and_wait(
      `那还用说，不偶尔经营一下个人形象哪里能有源源不绝的实验品呢`,
    );
    era.println();
    await era.printAndWait(`要是真在意形象的话平常就别做那些奇怪的事啊……`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君，你还嫩的很啊，形象这种东西，人们最喜欢的就是为恶人赋予理由，为善人寻找破绽，`,
    );
    await tachyon.say_and_wait(
      `比起塑造一个完美人设被揭穿，他们更喜欢为一个疯狂科学家寻找他受人排挤的理由并加以同情`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}冷笑一声`);
    era.println();
    await tachyon.say_and_wait(
      `刚刚的对话只是植入种子，等到待会的比赛赢下今天的对话就能在${tachyon.sex}们心底生根发芽，`,
    );
    await tachyon.say_and_wait(
      `未来碰到问题时，自然会来寻找『亲切的速子前辈』来解答了，`,
    );
    await tachyon.say_and_wait(`而仁慈的我，当然会无偿帮助${tachyon.sex}们，`);
    await tachyon.say_and_wait(
      `不过，作为答谢让我纪录点实验数据也是应当的吧？`,
    );
    era.println();
    await era.printAndWait(
      `你不由得冒出冷汗，虽说大概能猜到是为了形象之类的东西，却没想到竟然算计到如此后头了`,
    );
    if (love > 50) {
      await tachyon.say_and_wait(`哦呀哦呀，不会是某人嫉妒了吧？`);
      era.println();
      await era.printAndWait(`似乎误会了什么，速子忽然贴近了你的身体`);
      await era.printAndWait(
        `${tachyon.sex}忽然从背后抱住了你的身子，纤纤素手却不干净的在你身上胡乱抚摸着，最后停留在文件下的位置`,
      );
      await era.printAndWait(
        `${tachyon.sex}隔着裤子，缓缓勾勒出凸起的形状，随着你身体部位的苏醒，${tachyon.sex}的动作也从原来的轻轻描绘转为了抓握撸动`,
      );
      era.println();
      // todo 男豚鼠限定
      await tachyon.say_and_wait(`放心吧，比起女性，我还是喜欢被填满的感觉`);
      era.println();
      await era.printAndWait(
        `${tachyon.sex}靠在你的耳边，用如兰一般的口气说道`,
      );
      era.println();
      await tachyon.say_and_wait(
        `不过……要是你变成女性的话，说不定也能接受呢？`,
      );
      era.println();
      await era.printAndWait(
        `${tachyon.sex}忽然咯咯一笑，放开了你，自顾自朝着赛场走去`,
      );
      era.printButton(`哈哈哈！豚鼠君，这是什么新的笑话吗？`, 1);
      await era.input();
      await era.printAndWait(`速子没有回头，径直走向了光芒处`);
      await era.printAndWait(
        `由于忽然从黑暗的地下道望出，导致你甚至感到刺眼的光芒`,
      );
      await era.printAndWait(
        `在泪水的映照下，走上赛场的${tachyon.sex}，宛如融化在光中一般`,
      );
      era.println();
      await tachyon.say_and_wait(`你只需要在这里乖乖等着我的胜利凯旋就够了`);
    }
  } else if (extra_flag.race === race_enum.hope_sta && edu_weeks < 95) {
    await print_event_name(`研究技术路线—工具申报`, tachyon);
    era.println();
    await era.printAndWait(`终于到了这天`);
    await era.printAndWait(
      `希望锦标，可以说对刚出道的${tachyon.get_uma_sex_title()}们而言下半年最重要的比赛，`,
    );
    await era.printAndWait(`尤其是三冠战线的更是如此，`);
    await era.printAndWait(
      `作为青年级唯一的中距离G1赛事，这是许多有才能的${tachyon.get_uma_sex_title()}踏上梦想之旅的第一步。`,
    );
    era.println();
    await era.printAndWait(
      `然而，如此重要的一天，你的负责${tachyon.get_uma_sex_title()}${
        tachyon.name
      }……`,
    );
    era.println();
    await era.printAndWait(`咦？`);
    era.println();
    await era.printAndWait(
      `原本以为会到处乱跑的速子，今天却反常的乖巧待在选手准备室里`,
    );
    era.println();
    await tachyon.say_and_wait(`哦呀，豚鼠君，你来了啊`);
    era.println();
    await era.printAndWait(
      `待在选手准备室，正拿着某种喷雾往腿上喷的${tachyon.name}只抬头看了你一眼就继续专心于手上的喷雾`,
    );
    era.println();
    era.printButton(`这就是你说的药物？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`是啊，希望这场比赛上能派上用场吧……`);
    await tachyon.say_and_wait(
      `事到如今其实也没什么好瞒着你的了，这种药啊，是能让腿部肌肉舒缓的药物……`,
    );
    await tachyon.say_and_wait(
      `要说的话，类似于冷却剂之类的东西吧，为了不让选手在比赛后受伤提前使用，要是这次实验成功的话……”`,
    );
    era.println();
    await era.printAndWait(`原来如此`);
    await era.printAndWait(`听到这，你不由得松了一口气`);
    await era.printAndWait(
      `虽说相信${tachyon.name}，但心中无论如何都还是会有一丝的担心`,
    );
    await era.printAndWait(
      `倒不是针对速子本人，只是速子的药也不是每一次都那么的准确有效……不然自己也不会到现在全身还闪着光芒了吧`,
    );
    era.println();
    await tachyon.say_and_wait(`好了，准备万全，豚鼠君，出发吧`);
    era.println();
    await era.printAndWait(`口气的情绪高涨，是因为赛场的气氛吗？`);
    await era.printAndWait(`目光的炯炯有神，是因对劲敌的期待吗？`);
    await era.printAndWait(`又或者……`);
    era.println();
    await tachyon.say_and_wait(`希望今天的对手能把药效完全逼出来啊`);
    era.println();
    await era.printAndWait(`果然，是为了实验吧`);
    await era.printAndWait(`你目送着依然故我的${tachyon.sex}步上赛场`);
  } else if (extra_flag.race === race_enum.hoch_sho && edu_weeks < 95) {
    await print_event_name(`调研方向的确立`, tachyon);
    await tachyon.say_and_wait(
      `虽然已经有所准备了，但……果然没什么特别值得一提的实验对照组啊`,
    );
    era.println();
    await era.printAndWait(`但是，这场比赛是皋月赏的前哨战`);
    await era.printAndWait(
      `以皋月赏为目标的话，无论强弱这场比赛的结果都是不能错过的`,
    );
    /* todo 茶座参赛
    era.println();
    await chara_talk.say_and_wait(`说起来，今天茶座也有参赛啊`);
    await chara_talk.say_and_wait(
      `茶座君……希望能跑出令人满意的表现来啊，毕竟……`,
    );
    await chara_talk.say_and_wait(`这么说起来，豚鼠君你对茶座君是怎么看的？`);
    era.println();
    await era.printAndWait(`欸？`);
    await era.printAndWait(`莫名其妙的问题使你陷入思考`);
    await era.printAndWait(`灰色的脑细胞不停开始运转`);
    await era.printAndWait(`速子这么说的意义到底是……`);
    era.println();
    await era.printAndWait(`看你提神戒备的模样，速子笑了出来`);
    era.println();
    await chara_talk.say_and_wait(
      `别那么紧张，只是问问而已，然后我个人还是希望你能和${tachyon.sex}打好关系的……以防万一`,
    );
    era.printButton(`听起来好让人不安啊……`, 1);
    era.printButton(`我永远都会是速子的训练员的！`, 2);
    await era.input();
    era.println();
    await chara_talk.say_and_wait(`你想哪里去了啊……真是，不说了，该上场了`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}拿起希望锦标前见过的喷雾朝着腿上喷了喷后，准备上场`,
    );*/
    //茶座未参赛
    era.println();
    await tachyon.say_and_wait(`要是茶座君参赛的话……肯定会更有实验价值的吧`);
    await tachyon.say_and_wait(`这么说起来，豚鼠君你对茶座君是怎么看的？`);
    era.println();
    await era.printAndWait(`欸？`);
    await era.printAndWait(`莫名其妙的问题使你陷入思考`);
    await era.printAndWait(`灰色的脑细胞不停开始运转`);
    await era.printAndWait(`速子这么说的意义到底是……`);
    era.println();
    await era.printAndWait(`看你提神戒备的模样，速子笑了出来`);
    era.println();
    await tachyon.say_and_wait(
      `别那么紧张，只是问问而已，然后我个人还是希望你能和${tachyon.sex}打好关系的……以防万一`,
    );
    era.printButton(`听起来好让人不安啊……`, 1);
    era.printButton(`我永远都会是速子的训练员的！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`你想哪里去了啊……真是，不说了，该上场了`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}拿起希望锦标前见过的喷雾朝着腿上喷了喷后，准备上场`,
    );
  } else if (extra_flag.race === race_enum.sats_sho && edu_weeks < 95) {
    await print_event_name(`数据分析及实践`, tachyon);
    await era.printAndWait(`今天是经典赛事的第一站，皋月赏`);
    await era.printAndWait(
      `观众们都兴奋的期待着比赛的开锣，连带着选手们也在赛前感到了兴奋`,
    );
    await era.printAndWait(`没错，就连${tachyon.name}也是一样`);
    await era.printAndWait(
      `只是……${tachyon.sex}兴奋的原因，有那么一些的与众不同`,
    );
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君！你看，果然……还是G1的赛场，才有数据收集的价值啊！`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.sex}兴奋的来来回回跑着，甚至想要潜入其他选手的休息室去收集对方的个体资料，`,
    );
    await era.printAndWait(
      `还好在你拼死的阻拦下才使${tachyon.sex}放弃了这个念头`,
    );
    await era.printAndWait(
      `与赛前兴奋的速子做为对比的，是赛前莫名感到不安的你`,
    );
    era.println();
    await era.printAndWait(`先前弥生赏说的起码，到皋月赏前不会有问题`);
    await era.printAndWait(`但……皋月赏后不一定？`);
    await era.printAndWait(`速子的身体……有什么问题吗？`);
    era.println();
    await tachyon.say_and_wait(
      `……豚鼠君？怎么了，今天的你沉默的不像平时的你啊`,
    );
    await era.printAndWait(`居然反过来被速子担心了，这可不行`);
    await era.printAndWait(`你慌忙打起精神，让自己恢复状态`);
    era.println();
    await tachyon.say_and_wait(
      `罢了，今天……就让你看看吧，动真格的模样…真正的，${tachyon.get_uma_sex_title()}的极限`,
    );
    era.println();
    await era.printAndWait(`极限…?`);
    await era.printAndWait(`不，没有问题的，一定`);
    await era.printAndWait(`你抛开疑惑和不安，目送着速子登上赛场`);
    // todo 获得状态 ${tachyon.get_uma_sex_title()}的极限
  } else if (extra_flag.race === race_enum.toky_yus && edu_weeks < 95) {
    await print_event_name(`日本德比前·研究基础缺失 研究目标的再设定`, tachyon);
    era.println();
    await tachyon.say_and_wait(
      `哦呀哦呀，不愧是日本德比……宝穴君应该也要出赛吧，真令人期待啊，${tachyon.sex}的可能性……`,
    );
    era.println();
    await era.printAndWait(
      `日本德比，据说是最幸运的${tachyon.get_uma_sex_title()}得胜的比赛`,
    );
    await era.printAndWait(
      `最快的${tachyon.get_uma_sex_title()}赢皋月，最幸运的${tachyon.get_uma_sex_title()}赢德比，最强的${tachyon.get_uma_sex_title()}赢菊花`,
    );
    await era.printAndWait(
      `比起最快最强这种已经确定的东西……运气的虚无飘渺还是让你不由得在比赛前为${tachyon.sex}感到担心`,
    );
    era.printButton(`真的没问题吗？`, 1);
    era.printButton(`果然还是，戴着去神社求来的大吉签……？`, 2);
    await era.input();
    await era.printAndWait(
      `今天一大早，为了速子而爬上百阶阶梯的神社去求来的福签`,
    );
    await era.printAndWait(`不知为何，听见你的举动后，速子露出了奇怪的神情`);
    era.println();
    await tachyon.say_and_wait(
      `……一大早跑去抽这种东西……没想到豚鼠君你是这么迷信的人啊`,
    );
    era.println();
    await era.printAndWait(`听见速子的话，你摇了摇头`);
    era.printButton(
      `不管是求神拜佛还是什么，只要能让速子跑的更快，无论是什么我都能做！`,
      1,
    );
    await era.input();
    await tachyon.say_and_wait(
      `……呵呵，这种迷信的东西，你还是自己收着就好，但这份心意……我收下了，今天的实验，想必会有一个好结果吧`,
    );
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    event_marks.plan_b === 0 &&
    edu_weeks < 95
  ) {
    if (relation < 225) {
      await print_event_name(`菊花赏前·不同的可能性`, tachyon);
      await era.printAndWait(`那天晚上，你做了一个梦`);
      await era.printAndWait(
        `被人称为超光速粒子的${tachyon.sex}，在赛场上折翼的梦`,
      );
      await era.printAndWait(`那玻璃的双腿破碎，四散的琉璃碎片刺入了你的双眼`);
      era.println();
      await era.printAndWait(`你从梦中惊醒，久久无法恢复平静`);
      await era.printAndWait(`梦境实在太过真实，让你不由得心有余悸`);
      await era.printAndWait(`剩下的夜晚你依然辗转无法入眠，直至天亮`);
      era.drawLine();
      await era.printAndWait(`天才蒙蒙亮，你便匆忙离开了训练员宿舍`);
      await era.printAndWait(
        `虽说赛前已经无数次确认过${tachyon.sex}的身体状况`,
      );
      await era.printAndWait(
        `虽说怎么想也不可能像梦中那样夸张的碎裂。还是担心，还是害怕`,
      );
      await era.printAndWait(
        `还是必须亲眼看见${tachyon.sex}，才能确定梦中的一切并非真实`,
      );
      era.println();
      await tachyon.say_and_wait(`哦呀，豚鼠君？今天来的真早`);
      era.println();
      await era.printAndWait(
        `你冲进实验室时，看见的是一大清早便悠哉喝着红茶的速子`,
      );
      era.println();
      await tachyon.say_and_wait(
        `不过今天毕竟是三冠的最后一场了……紧张也是正常的吧`,
      );
      await era.printAndWait(
        `菊花赏，最强的${tachyon.get_uma_sex_title()}才能赢下的比赛`,
      );
      await era.printAndWait(`忽然，你一时陷入了语塞`);
      await era.printAndWait(`自己做出的选择真的是正确的吗？`);
      await era.printAndWait(`万一，${tachyon.sex}真的像梦中那样碎裂`);
      await era.printAndWait(`自己真的有办法坦然面对吗？`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？怎么了吗？`);
      era.println();
      await era.printAndWait(`明明是如此冲动的情况下冲入实验室的`);
      await era.printAndWait(`在看见${tachyon.sex}的刹那，却什么也说不出口了`);
      era.printButton(`……没什么，菊花赏，一定会赢的`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`你只能，说出连自我安慰都不足以的话语`);
      era.println();
      await tachyon.say_and_wait(`……嗯，一定能赢`);
      era.println();
      await era.printAndWait(`无言`);
      await era.printAndWait(`今日的菊花赏，愿一切安好`);
      await era.printAndWait(`你向神，向佛，向光祈祷`);
    } else {
      await print_event_name(`菊花赏前·会赢吗？`, tachyon);
      await era.printAndWait(
        `菊花赏，最强的${tachyon.get_uma_sex_title()}才能赢下的比赛`,
      );
      await era.printAndWait(`最强，这个词代表着，是全方位`);
      await era.printAndWait(`速度，耐力，力量，毅力，智慧`);
      await era.printAndWait(
        `五种在训练员间最为重视的能力都均衡的达到最强才能赢下的比赛`,
      );
      await era.printAndWait(`但是……如果是${tachyon.name}的话，没有问题`);
      era.println();
      await era.printAndWait(`天生的强者`);
      await era.printAndWait(
        `哪怕无须锻炼，${tachyon.sex}也必然能够达到这样的程度吧`,
      );
      await era.printAndWait(`这就是${tachyon.name}，绝对的强悍`);
      await era.printAndWait(`……不如说，自己真的对${tachyon.sex}有帮助吗？`);
      // todo if 此刻属性未达到全1200
      if (love > 75) {
        await era.printAndWait(
          `说到底，现在的${tachyon.sex}距离当初${tachyon.sex}的极限，不是还有很长一段距离吗？`,
        );
      } else {
        await era.printAndWait(
          `说到底，现在的${tachyon.sex}不就只是恢复到以前该有的水平而已不是吗？`,
        );
        era.println();
        await tachyon.say_and_wait(`豚鼠君？比赛前你又在发什么呆？`);
        era.println();
        await era.printAndWait(
          `打断沉浸于自我厌恶中的你的，是正在钉蹄铁的${tachyon.name}`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}听见你的话后，不出你所料的，速子对此嗤之以鼻`,
        );
        era.println();
        await tachyon.say_and_wait(
          `无聊，我的双腿现在是建立在我的研究与你的训练之下的，`,
        );
        era.println();
        await tachyon.say_and_wait(
          `要是没有你的努力，现在的我说不定已经无法奔跑了，你的意思是希望变成那样吗？`,
        );
        era.println();
        await era.printAndWait(`你连忙道歉说自己不是那个意思`);
        era.println();
        await tachyon.say_and_wait(
          `晚了，明天的药量加倍，既然你感受不出这中间努力的重量，那么就让你多体会一点吧`,
        );
        era.println();
        await era.printAndWait(
          `不，都已经一天三顿像饭一样吃了，这还能再增加的吗`,
        );
        await era.printAndWait(`你在心里忍不住吐槽道`);
        era.println();
        await era.printAndWait(`就在你们毫无压力的谈天时，比赛时间也快到了`);
        await era.printAndWait(`你们漫步走向赛场`);
        era.printButton(`今天的比赛，能赢吧？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`这个吗……究竟能不能呢～～`);
        await tachyon.say_and_wait(
          `不，就算你说什么认真问的我也真不好回答啊……`,
        );
        await tachyon.say_and_wait(
          `毕竟茶座君和其他${tachyon.get_uma_sex_title()}可完全不是一个等级的啊`,
        );
        await tachyon.say_and_wait(
          `再怎么说${tachyon.sex}可是被我选中同样能够踏足极限以后的世界的人……`,
        );
        await tachyon.say_and_wait(
          `以及这个距离的茶座君……说不定，称之为历史最强都不为过`,
        );
        era.printButton(`那么，会输吗？`, 1);
        await era.input();
        era.println();
        await tachyon.say_and_wait(`会赢哦`);
        era.println();
        await tachyon.say_and_wait(`『我们』一定能赢`);
        era.println();
        await era.printAndWait(`不再是目送`);
        await era.printAndWait(`你与${tachyon.name}一同走向赛场`);
      }
    }
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    event_marks.plan_b === 1 &&
    edu_weeks < 95
  ) {
    //todo 有${tachyon.get_uma_sex_title()}参赛则触发该剧情
    await print_event_name(`菊花赏前·不同的可能性`, tachyon);
    await era.printAndWait(`那天晚上，你做了一个梦`);
    await era.printAndWait(
      `赢下了菊花赏的${tachyon.sex}，站在赛场上挥舞着被白大褂包裹的手`,
    );
    await era.printAndWait(`所有人都在呼喊着${tachyon.sex}的名字`);
    await era.printAndWait(`${tachyon.sex}转过头来，看向了观众席中的你`);
    await era.printAndWait(`脸部却是一片漆黑`);
    await say_by_passer_by(`观众们`, `⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！`);
    await era.printAndWait(`周围的观众们呼喊着${tachyon.sex}的名字`);
    await era.printAndWait(`${tachyon.sex}的名字是什么？`);
    await era.printAndWait(`${tachyon.sex}……是谁？`);
    era.println();
    await era.printAndWait(`你从梦中惊醒，久久无法恢复平静`);
    await era.printAndWait(`梦境实在太过真实，让你不由得心有余悸`);
    await era.printAndWait(`剩下的夜晚你依然辗转无法入眠，直至天亮`);
    era.println();
    await era.printAndWait(`天才蒙蒙亮，你便匆忙离开了训练员宿舍`);
    await era.printAndWait(
      `虽说知道${tachyon.sex}已经向媒体宣布了暂停出赛的消息`,
    );
    await era.printAndWait(
      `虽说知道${tachyon.sex}再怎么说也不可能瞒着自己去报名比赛`,
    );
    await era.printAndWait(`还是担心，还是害怕`);
    await era.printAndWait(
      `还是必须亲眼看见${tachyon.sex}，才能确定梦中的一切并非真实`,
    );
    era.println();
    await tachyon.say_and_wait(`哦呀，豚鼠君？今天来的真早`);
    era.println();
    await era.printAndWait(
      `你冲进实验室时，看见的是一大清早便悠哉喝着红茶的速子`,
    );
    era.println();
    await tachyon.say_and_wait(`不过今天毕竟是菊花赏，紧张也是正常的吧`);
    // todo If 茶座参赛菊花赏
    await tachyon.say_and_wait(
      `晚点一起出发吧，呵呵……这还是我第一次并非自己上场，而是在观众席上看着别人跑呢`,
    );
    // todo If 茶座不参赛菊花赏
    await tachyon.say_and_wait(
      `你要加油啊，不过嘛，毕竟茶座${tachyon.sex}没打算参加，我就在这里看着直播就好，好好表现吧`,
    );
    era.println();
    await tachyon.say_and_wait(`……还是说，有什么其他想说的话？`);
    era.println();
    await era.printAndWait(`明明如此唐突的闯入了实验室`);
    await era.printAndWait(`明明想要将恶梦吐出`);
    await era.printAndWait(`却在见到${tachyon.sex}的瞬间，一切话语都说不出口`);
    era.println();
    await era.printAndWait(`该怎么说呢？`);
    await era.printAndWait(`说，我梦见了你赢下菊花赏的样子？`);
    await era.printAndWait(`说，梦中的你没有脸，没有姓名？`);
    await era.printAndWait(`说，自己后悔……`);
    era.println();
    await era.printAndWait(
      `你用力晃了晃头，随意说了声没事作为回答后，狼狈的离开了实验室`,
    );
    await era.printAndWait(`有什么好说的呢`);
    await era.printAndWait(`有什么能说的呢`);
    await era.printAndWait(
      `事到如今，竟然为了自己做出的决定而后悔什么的，开玩笑也要有个限度`,
    );
    era.println();
    await era.printAndWait(`你离开了实验室，前去准备今日的菊花赏`);
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    event_marks.plan_b === 1 &&
    edu_weeks >= 95
  ) {
    await print_event_name(`黯淡的光辉`, tachyon);
    era.println();
    await tachyon.say_and_wait(`话说，明天就是有马纪念了啊，豚鼠君`);
    era.println();
    await era.printAndWait(`在月下训练的速子无意间向你提起`);
    await era.printAndWait(
      `自从菊花赏结束以来，你们便一直维持着这样在晚上进行训练及指导的关系`,
    );
    await era.printAndWait(
      `原本尴尬的对话，在两个月的接触沟通后也已经渐渐回到了以往的熟悉`,
    );
    await era.printAndWait(
      `虽然这样讲有些过分，但要说对现在的状态，自己是什么样的感受的话`,
    );
    await era.printAndWait(`那大概是享受吧`);
    await era.printAndWait(`白天为了茶座而努力，夜晚则帮助速子恢复`);
    await era.printAndWait(
      `虽然工作量比以前增加了，但与菊花赏前的你相比，心情上的负担可以说每一天都在减轻`,
    );
    await era.printAndWait(`…………也因此，你几乎忘了时间`);
    // todo If 茶座出赛有马纪念
    era.println();
    await tachyon.say_and_wait(`明天，就是茶座今年的最后一场比赛了`);
    // todo If 茶座不出赛有马纪念
    era.println();
    await tachyon.say_and_wait(`明天，就是今年赛季的结束了`);
    era.println();
    await era.printAndWait(`在有马纪念之后`);
    await era.printAndWait(`就是你一直不敢去面对的，来年了`);
    era.println();
    await tachyon.say_and_wait(
      `明年……茶座打算出走的比赛……我会尽全力一个不漏跟上的`,
    );
    era.println();
    await era.printAndWait(
      `你看着${tachyon.sex}的眼眸，里面是为了茶座燃烧的觉悟和热情`,
    );
    era.println();
    await tachyon.say_and_wait(`……所以，明年也请，多多指教了`);
    era.println();
    await era.printAndWait(`没有光芒`);
    await era.printAndWait(
      `一直以来将你双眼灼烧的，${tachyon.name}眼中的光芒，已经黯淡的几乎看不出来了`,
    );
    era.printButton(`明年也请……多多指教`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`在有马纪念后，${tachyon.name}马上召开了记者会`);
    await era.printAndWait(`宣布回归赛场的消息，造成了社会的轩然大波`);
    await era.printAndWait(`但这些后续与现在的你们两人没有半点关系`);
    // todo ${tachyon.name}的出赛限制解除
  } else if (extra_flag.race === race_enum.sank_hai && edu_weeks > 95) {
    await print_event_name(`大阪杯前·变量 群众感情的刺激`, tachyon);
    await era.printAndWait(`大阪杯`);
    await era.printAndWait(`一年中，中长距离最初的一场G1赛事`);
    await era.printAndWait(
      `对于刚刚进入古典年的${tachyon.get_uma_sex_title()}来说，这是最初检验其实力的一场比赛`,
    );
    await era.printAndWait(`然而……对${tachyon.name}而言`);
    era.println();
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}A`,
      `速子前辈！皋月赏那个时候真的太帅了！`,
    );
    await tachyon.say_and_wait(
      `呵呵，谢谢支持，不过我的跑法是一直在进步的，比起皋月赏，现在跑的……绝对会更加惊艳哦`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `速子前辈……看到你在德比的跑法……我真的觉得，如果说${tachyon.get_uma_sex_title()}有极限的话，大概就是那样了！`,
    );
    await tachyon.say_and_wait(
      `不，那只是${
        tachyon.name
      }的极限而已……${tachyon.get_uma_sex_title()}是没有极限的，我相信你们都拥有着无穷的可能性`,
    );
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}C`,
      `速子前辈！到底要怎么样才能变成像你一样跑的这么快……！`,
    );
    await tachyon.say_and_wait(`哦？真的想知道吗？那么，明天下午到教学理科……`);
    era.printButton(`咳咳`, 1);
    await era.input();
    await era.printAndWait(`你咳了两声，提醒速子`);
    await era.printAndWait(
      `正与后辈们友好交流的${tachyon.sex}僵了一下，人后装作什么也没有发生的继续说了下去`,
    );
    await era.printAndWait(
      `速子不停说着自己比赛时的事，引的这些后辈的小${tachyon.get_uma_sex_title()}们专注聆听`,
    );
    await era.printAndWait(`看上去就像赛前的正常粉丝服务一般温馨的场景`);
    era.println();
    await era.printAndWait(`你叹了口气，回想起前几个月速子说的实验内容`);
    era.println();
    await tachyon.say_and_wait(
      `根据资料的收集……${tachyon.get_uma_sex_title()}在比赛或者奔跑中会感到快乐的原因，首先排在最优先的是被人称赞，收到观众的支持……`,
    );
    await tachyon.say_and_wait(
      `毕竟都还是初中生高中生的年纪，渴望认可也是很正常的`,
    );
    await tachyon.say_and_wait(
      `虽然我觉得自己不会受到影响……但既然是实验，那就必须要将所有可能性都考虑于内`,
    );
    await tachyon.say_and_wait(`综合以上……没错，获得观众的支持……`);
    era.println();
    await era.printAndWait(`说到这，你们忽然陷入了卡壳`);
    era.println();
    await era.printAndWait(
      `回想起几个月前暑期的事……以及在那之后各种的拒绝采访`,
    );
    await era.printAndWait(
      `在大众眼中的${tachyon.name}，在媒体的宣传以及我方的忽视下，似乎已经变成现役的最大问题儿童了`,
    );
    era.println();
    await tachyon.say_and_wait(`……总之，先从特雷森内部能够掌握的来吧`);
    era.drawLine();
    await era.printAndWait(`如此如此这般这般`);
    await era.printAndWait(
      `不过，虽然已经不是第一次看见了，但速子的交流能力还是一如既往的强大啊……`,
    );
    await era.printAndWait(
      `要是愿意把花费在那些危险实验的精力分出一些在经营人际交往上……`,
    );
    await era.printAndWait(`自己说不定就不会被${tachyon.sex}迷上了吧`);
    await era.printAndWait(
      `那种不顾一切，为了研究一切都能做到最好的奉献般的身姿`,
    );
    await era.printAndWait(`以及抛却一切，将所有甩在背后的跑法`);
    await era.printAndWait(
      `两者合一的${tachyon.name}，才是最令人着迷的${tachyon.sex}`,
    );
    if (love > 75) {
      await era.printAndWait(`……不过`);
      await era.printAndWait(
        `看着自己的爱人这样被他人围拥，哪怕都是女孩子也还是令人有些吃醋啊`,
      );
      await era.printAndWait(`这种时候……`);
      era.println();
      await era.printAndWait(`你偷偷按下了藏在手上的某个按纽`);
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}A`,
        `速子前辈！可以帮我签名吗！`,
      );
      await tachyon.say_and_wait(`呵呵，当然可……唔！`);
      era.println();
      await era.printAndWait(
        `在签名的瞬间被启动的某个小玩具，使得${tachyon.name}的签名歪了一些`,
      );
      await era.printAndWait(
        `幸好那名眼神里满是崇拜的小粉丝似乎并不在意这点小事`,
      );
      era.println();
      await era.printAndWait(`速子回过头来暗暗瞪了你一眼`);
      await era.printAndWait(
        `你点了点头，露出歉意的笑容……然后，将手上的遥控器强度调高一阶`,
      );
      era.println();
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}B`,
        `速子前辈……今天的比赛请一定要加油！`,
      );
      await tachyon.say_and_wait(`好呜呜……一……一定会……`);
      await say_by_passer_by(
        `${tachyon.get_uma_sex_title()}C`,
        `速子前辈……怎么了吗？`,
      );
      await tachyon.say_and_wait(`没……没什么……只是……只是……咕……`);
    }
    era.printButton(`时候也不早了，该回去选手休息室准备了`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `你连忙上前帮速子解围，在${tachyon.sex}那比起瞪视更像欲求不满的调情的目光下，带着${tachyon.sex}连忙回到选手休息室`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……真是的……别那么嫉妒啊……连后辈的醋都吃……男人不大方点怎么行呢`,
    );
    // todo If 队伍中有茶座
    if (love > 1) {
      era.printButton(`那，我去关心一下茶座的赛况了`, 1);
      era.printButton(`那，我也去关心一下你的后辈们吧`, 2);
    } else {
      era.printButton(`那，我去关心一下茶座的赛况了`, 1, { disabled: true });
      era.printButton(`那，我也去关心一下你的后辈们吧`, 2);
    }
    await era.input();
    await tachyon.say_and_wait(
      `都把人家的性欲勾起了，现在还想去找其他女人……这可不行啊`,
    );
    era.println();
    await era.printAndWait(`速子轻轻的从背后抱了上来`);
    era.println();
    await tachyon.say_and_wait(
      `比赛前……时间还够吧♡别用这种无聊的玩具了……难道你不想，直接填满我的里面吗♡`,
    );
    era.drawLine();
    await era.printAndWait(`${tachyon.name}踏上了赛场`);
    await era.printAndWait(
      `不过……这是唯一一次幸亏${tachyon.sex}那掩的遮实的胜负服，不然大概所有人都会发现${tachyon.sex}那莫名突起的小腹了吧`,
    );
    era.printButton(`时间差不多了，速子`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `啊，也是，那么该上场了……请在比赛结束后再为我祝贺吧，小马驹们`,
    );
    era.println();
    await era.printAndWait(
      `最后的一个媚眼引得小${tachyon.get_uma_sex_title()}们再度发生了惊呼`,
    );
    era.printButton(`……小马驹？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `跟富士君学的……怎么，你也想被这么称呼吗？我的小豚鼠？`,
    );
    era.printButton(`…………不，还是算了吧`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`哦呀，居然害羞了吗？真是纯情啊，豚鼠君`);
    era.printButton(`毕竟……硬体条件比不上，这样模仿只会让人觉得……`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`你可怜的看着速子的胸前`);
    era.printButton(`…………豚鼠君？能麻烦你说清楚硬体条件是什么意思吗？`, 1);
    await era.input();
    era.printButton(`……不，什么也没有`, 1);
    await era.input();
    await era.printAndWait(`在打闹中，比赛开始的时间也到了`);
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    event_marks.plan_b === 0
  ) {
    await print_event_name(`宝冢纪念前·万众其心A`, tachyon);
    await era.printAndWait(`在你们抵达阪神赛场的时候，全场已经人声鼎沸`);
    era.println();
    await say_by_passer_by(`观众A`, `果然看好的还是${tachyon.name}啊`);
    await say_by_passer_by(`观众B`, `${tachyon.name}？那不是……之前……`);
    await say_by_passer_by(
      `观众C`,
      `一听就知道上次大阪杯你没看了，能够跑出那种跑法的${tachyon.get_uma_sex_title()}不可能是坏人！`,
    );
    await say_by_passer_by(
      `观众D`,
      `人格跑法论什么的差不多得了……不过，确实是非常与众不同的跑法`,
    );
    await say_by_passer_by(`观众E`, `加油啊！再跑出大阪杯的跑法来吧！`);
    era.println();
    await tachyon.say_and_wait(
      `哦呀哦呀……真是受欢迎啊，而且提的都是大阪杯……我说，我去年的比赛就这么无聊吗？`,
    );
    era.printButton(`去年当然也很精彩`, 1);
    era.printButton(`只是大阪杯尤其精彩`, 2);
    await era.input();
    era.println();
    await era.printAndWait(
      `去年的速子，跑起来除了光的眩目感外，却带有一丝虚幻`,
    );
    await era.printAndWait(
      `因此看完${tachyon.sex}的比赛，比起惊艳更多还是担心`,
    );
    await era.printAndWait(`害怕${tachyon.sex}会就这么化光而去`);
    await era.printAndWait(`没有了那丝虚幻感后`);
    await era.printAndWait(`${tachyon.name}的跑法，堪称艺术`);
    era.println();
    await tachyon.say_and_wait(
      `……姑且当成是夸奖吧，那么，这样的气氛也正好进行第二次的实验`,
    );
    await tachyon.say_and_wait(
      `大阪杯那次……没能在比赛途中确定，现在G1的舞台，还有应援的粉丝，呵呵，到底能够走到哪一步呢`,
    );
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    event_marks.plan_b === 1
  ) {
    await print_event_name(`宝冢纪念前·万众其心B`, tachyon);
    await era.printAndWait(`热血沸腾`);
    await era.printAndWait(`已经多久没有感受过了，这种比赛的热情`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君……我要上了`);
    era.printButton(`上吧！让我看看${tachyon.get_uma_sex_title()}的极限！`, 1);
    era.printButton(`放心赢下吧，再让我热血沸腾一次吧！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`嗯……然后，等到宝冢结束……`);
    era.println();
    await era.printAndWait(`你点了点头`);
    await era.printAndWait(`那时候说好的，更宽广的世界`);
    era.printButton(`将我们的极限，刻在世界的顶端吧！`, 1);
    await era.input();
  } else if (
    extra_flag.race === race_enum.prix_lat &&
    edu_weeks > 95 &&
    event_marks.plan_b === 1
  ) {
    era.println();
    await era.printAndWait(`在凯旋门赏的前一天`);
    await era.printAndWait(`${tachyon.name}居住的酒店中，来了一名不速之客`);
    era.println();
    await tachyon.say_and_wait(`……茶座君？你怎么会……`);
    await coffee.say_and_wait(`…………速子同学`);
    era.println();
    await era.printAndWait(`本应留在日本的曼城茶座`);
    await era.printAndWait(`在凯旋门赏的前一天，抵达法国`);
    era.println();
    await coffee.say_and_wait(`……是我拜托训练员先生带我来的`);
    await coffee.say_and_wait(`训练员先生说，说……`);
    era.println();
    await era.printAndWait(`速子静静的坐在床边，没有开口`);
    await era.printAndWait(`等待着茶座将话说完`);
    era.println();
    await coffee.say_and_wait(`说，速子同学，你的腿……`);
    await tachyon.say_and_wait(
      `……嗯，已经在极限了，哪怕不是如此，我也会在明天的比赛中拼尽一切……不会留下任何余地`,
    );
    await coffee.say_and_wait(`……为什么`);
    era.println();
    await era.printAndWait(`不知为何，比起当事人的速子，茶座反而更显得急迫`);
    await coffee.say_and_wait(
      `……如果又是跟宝冢前一样，觉得是为我好，为了我和朋友参赛什么的……`,
    );
    await coffee.say_and_wait(
      `那我是绝对不会接受的，哪怕————要在这里阻止你参赛也一样`,
    );
    era.println();
    await era.printAndWait(`曼城茶座的双瞳忽然瞪大`);
    await era.printAndWait(
      `瞬间，仿佛有无形的巨手控制住了${tachyon.name}的行动一般`,
    );
    await era.printAndWait(`${tachyon.sex}被束缚在原地，动弹不得`);
    await era.printAndWait(`但即便如此，${tachyon.sex}的目光却还是依然平静`);
    await era.printAndWait(`而后……`);
    era.println();
    await tachyon.say_and_wait(`………呵呵`);
    await coffee.say_and_wait(`速子同学……？`);
    await tachyon.say_and_wait(`呵呵呵……哈哈哈！`);
    era.println();
    await era.printAndWait(
      `仿佛精神失常一般，哪怕处在这样的情况下，速子依然畅快的笑出了声来`,
    );
    era.println();
    await tachyon.say_and_wait(`我说啊，茶座……你是不是，有点太自我意识过剩了`);
    await coffee.say_and_wait(`！？`);
    await tachyon.say_and_wait(`什么为了你而跑……别想太多了`);
    await tachyon.say_and_wait(
      `我的目的，至始至终就只有一个，那就是超越${tachyon.get_uma_sex_title()}的极限……证明${tachyon.get_uma_sex_title()}的可能性`,
    );
    era.println();
    await era.printAndWait(`不知不觉，原本束缚着速子的力量已经松开`);
    await era.printAndWait(`速子好整以暇的站起身，拍了拍身上并不存在的尘土`);
    era.println();
    await tachyon.say_and_wait(
      `……为了达成这个目的，无论要牺牲什么我都愿意，哪怕是我自己也一样`,
    );
    await tachyon.say_and_wait(
      `反倒是你，茶座……你有这样的觉悟吗？现在的你，能够超越我吗？`,
    );
    await coffee.say_and_wait(`…………！`);
    await tachyon.say_and_wait(
      `……其他的，等到比赛结束……我会在那时候全部说出口的`,
    );
    era.println();
    await era.printAndWait(`没有等待应答，${tachyon.name}便离开了房间`);
    await era.printAndWait(`迎面而来的是一直在房间外等待着两人结束谈话的你`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君，去你的房间坐坐`);
    era.println();
    await era.printAndWait(`……欸？`);
    era.println();
    await tachyon.say_and_wait(`怎么？`);
    // todo 根据男女关系改变
    era.printButton(`深夜进异性的房间，果然还是不太好吧……`, 1);
    era.printButton(`速子这是在诱惑我吗？`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `蠢货！……刚刚才说完那种话耍完帅，现在马上回房间那不就破功了，所以让我去你房间待一下`,
    );
    await tachyon.say_and_wait(`顺便……你房间里有实验用的器具吧？`);
    await tachyon.say_and_wait(
      `刚刚看见茶座那副模样，不知道为什么忽然脑袋里又有灵感了……`,
    );
    await tachyon.say_and_wait(
      `毕竟我明天要上场，今天也不能乱喝什么奇怪的东西，你会帮我喝的吧～～`,
    );
    era.println();
    await era.printAndWait(`看着${tachyon.sex}浮夸的表现，你不由得笑了`);
    await era.printAndWait(`无论明天如何，最起码，享受这今天的时光吧`);
    // todo 速度+5
    // 耐力+5
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    event_marks.plan_b === 0 &&
    edu_weeks > 95
  ) {
    await print_event_name(`有马纪念前·变量添加完毕`, tachyon);
    await era.printAndWait(`那天到来时，一切显得意外的平静`);
    await era.printAndWait(
      `在前一天晚上舒服的安眠后，今天格外有精神的你一早便起床给速子泡好了红茶`,
    );
    await era.printAndWait(`阳光洒在室内，灰尘在光影下舞动`);
    await era.printAndWait(`速子没有在做实验，只是平常的阅读着早报`);
    await era.printAndWait(`你也没有发出光芒，只是安静的品味着红茶`);
    await era.printAndWait(`两人在实验室里享受着暴风雨前最后的宁静`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `请问速子小姐，这次的有马纪念有没有特别关注的对手呢`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……嗯，前几天刚出现了，曼城茶座，茶座君……应该，是能够被称为劲敌的存在吧`,
    );
    await say_by_passer_by(`记者A`, `应该……？`);
    await tachyon.say_and_wait(`嗯，差不多就是这么回事`);
    era.println();
    await era.printAndWait(
      `踏上赛场前的时光，你忽然想起了前几天采访时速子说的话`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君，你有听过物理学的两大乌云吗？`);
    await tachyon.say_and_wait(`没听过？没事没事，只是个故事的引子罢了`);
    await tachyon.say_and_wait(
      `据说，开尔文爵士曾经说过，物理学的大厦已经建成，只是在天空中还有两朵小小的乌云`,
    );
    await tachyon.say_and_wait(
      `然而，谁也没有想到，这两朵小小的乌云，却引出了量子力学和相对论两大近代物理巨头……`,
    );
    await tachyon.say_and_wait(
      `当然，这个故事八成是穿凿附会的，但是……我的意思是，茶座就是那朵乌云`,
    );
    await tachyon.say_and_wait(
      `在我的理论中，茶座是最后剩下的那块拼图……但在这之后呢？`,
    );
    await tachyon.say_and_wait(
      `这朵乌云，能够给我带来相对论一般的冲击吗？让我……见识看看吧`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    event_marks.plan_b === 1 &&
    edu_weeks > 95
  ) {
    await print_event_name(`迎向${tachyon.name}的最终解`, tachyon);
    tachyon.print(`有马纪念`);
    tachyon.print(`按豚鼠君所说，这场比赛后就能给自己一个解答了`);
    tachyon.print(`有些恐惧，却又有些期待`);
    tachyon.print(`恐惧即将迎来的结局`);
    tachyon.print(`期待即将揭晓的真相`);
    tachyon.print(`他到底想说些什么`);
    tachyon.print(`今天的有马，就能说清了吗？`);
    era.println();
    await coffee.say_and_wait(`……速子同学？`);
    await tachyon.say_and_wait(`…………`);
    await coffee.say_and_wait(`速子同学！`);
    await tachyon.say_and_wait(`……啊？`);
    era.println();
    await era.printAndWait(`回过神来，眼前的茶座正无奈的看着自己`);
    era.println();
    await coffee.say_and_wait(`叫了好几声了……又在分什么心？`);
    await tachyon.say_and_wait(`……没什么，没事`);
    await coffee.say_and_wait(`……奇怪`);
    tachyon.print(`如果不是为了茶座，自己绝对不会变成这样`);
    tachyon.print(
      `如果当初没有尽心帮助茶座就好了，最起码，还能让自己成为豚鼠君心中最亮的光`,
    );
    tachyon.print(
      `……之类的想法，哪怕一点，都不曾在${tachyon.name}的脑海中出现过`,
    );
    tachyon.print(
      `要是产生了那样的想法，就真的是将过去的${tachyon.name}全数否定了`,
    );
    tachyon.print(`更何况，茶座自己并没有做错任何事`);
    tachyon.print(`只是……一切的发展，都与预料的不同`);
    tachyon.print(`导致速子只能以一种极为复杂的眼神看着茶座`);
    era.println();
    await coffee.say_and_wait(`差不多该上场了`);
    await tachyon.say_and_wait(`……啊啊，加油`);
    await coffee.say_and_wait(`速子同学…你的声音有点怪怪的`);
    era.println();
    tachyon.print(`是因为过于期待吗？速子的声音变得有些沙哑`);
    era.println();
    await tachyon.say_and_wait(
      `……没什么，昨天跟豚鼠君出去逛街的时候有点着凉了而已`,
    );
    // todo If 茶座爱慕值<75
    await coffee.say_and_wait(`又跟训练员先生乱跑……明明今天是有马纪念还这样`);
    // todo If 茶座爱慕值>75
    await coffee.say_and_wait(
      `等一下，你们两位，在圣诞节，出去逛街？……比赛之后请详细解释到底是怎么回事`,
    );
    era.println();
    await era.printAndWait(`后面的话语已经无关紧要了`);
    await era.printAndWait(`${tachyon.name}等待着，等待比赛结束谜底揭开的瞬间`);
  }
};

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
handlers[event_hooks.race_end] = async (hook, extra_flag) => {
  const event_marks = new TachyonEduMarks(),
    coffee = get_chara_talk(25),
    relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    tachyon = get_chara_talk(32),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:32:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・可行性评估结束', tachyon);
    era.printButton(`跑的太精彩了！就像光一样！`, 1);
    await era.input();

    era.println();
    await tachyon.say_and_wait(
      `不过是实验的验算而已就高兴成这副模样，豚鼠君你可真是天真……啊！`,
    );
    era.printButton(`怎么了！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`你看着忽然发出声音的速子，内心一阵紧张`);
    await me.say_and_wait(`比赛后……难不成，是腿……`, true);
    era.println();
    await era.printAndWait(`你慌忙上前想要确认速子腿的状况，但……`);
    era.println();
    await tachyon.say_and_wait(
      `完蛋完蛋！我忘记回收装在闸门上用来记录出闸速度的仪器了！`,
    );
    era.println();
    if (relation < 225 && love < 50) {
      //todo 随机三属性+6 声望-10
      await era.printAndWait(`什，什么玩意！？`);
      await era.printAndWait(
        `在闸门内等待起跑的时候，这个人还有心情去做这种事？`,
      );
      await era.printAndWait(`不，说到底随便乱在闸门上加感测仪器什么的`);
      await era.printAndWait(`你不由得感到一阵胃痛`);
      era.println();
      await era.printAndWait(
        `在那之后，为了回收器械你和${tachyon.name}潜入了赛场……`,
      );
      await era.printAndWait(
        `不用说，自然被URA的人发现了,再三道歉后，${tachyon.name}总算成功回收了器械.一切都十分顺利`,
      );
      await era.printAndWait(
        `……只是，在回收期间，那些职员看你们的眼光有些刺痛而已`,
      );
    } else if (relation > 225 && love < 50) {
      // todo 随机三属性+3
      await era.printAndWait(`你叹了口气，原来是因为这个吗`);
      era.printButton(`没有问题，出闸速度已经记录好了`, 1);
      await era.input();
      await era.printAndWait(`虽然不到心灵相通，但身为速子的训练员，`);
      await era.printAndWait(
        `也多少知道${tachyon.sex}会需要怎么样的数据，这种事说到底本就不应该在场上奔跑的${tachyon.sex}来担心`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哦哦！干得好啊，豚鼠君！现在就马上来确认吧！`,
      );
      era.println();
      await era.printAndWait(
        `刚获得的胜利、即将开始的Winning Live，一切的一切都不在你们眼中，彷佛刚才并非跑了场比赛，而只是一场普通的研究一般`,
      );
      era.println();
      await era.printAndWait(
        `你们不停观看着纪录下来的数据，提出一个又一个的猜想，直到winning live开始，外面传来了急促的敲门声才回过神来`,
      );
    }
  } else if (
    extra_flag.race === race_enum.hope_sta &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('希望锦标后・希望', tachyon);
    era.printButton(`太强了！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `第一次的G1舞台，哪怕是${tachyon.name}，你也还是忍不住为${tachyon.sex}捏了把冷汗`,
    );
    await era.printAndWait(
      `但哪怕是国内最高级的赛事之上，${tachyon.sex}表现出的依然是超乎众人的强悍`,
    );
    era.println();
    await tachyon.say_and_wait(`呵呵，这么兴奋什么的，太夸张了`);
    era.println();
    await era.printAndWait(`下了赛场的速子回到休息室后声音也带着愉悦`);
    await era.printAndWait(`听见这声音，哪怕是你也明白了`);
    era.printButton(`实验成功了吧？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `是啊是啊！哎呀，果然好的实验品很重要啊！今天的实验大成功！`,
    );
    era.println();
    await era.printAndWait(
      `果然对速子而言，即便是G1的赛事也只是大一点的实验舞台吧`,
    );
    await era.printAndWait(`即便如此，${tachyon.sex}还是表现出了压倒众人的跑`);
    era.println();
    await tachyon.say_and_wait(`比起这种事，赶快回去了，快去准备下场比赛吧！`);
    era.println();
    await me.say_and_wait(`欸？怎么忽然这么有热情？`);
    await me.say_and_wait(`虽然觉得不会，但难道觉醒了对比赛的热情了……？`, true);
    era.println();
    await tachyon.say_and_wait(`我脑袋里已经有下场比赛实验的蓝图了！哈哈哈！`);
    era.println();
    await era.printAndWait(
      `……算了，不管怎么说，对实验的热情也算是热情觉醒了吧`,
    );
    era.println();
    await era.printAndWait(`你和${tachyon.name}的希望锦标结束了`);
  } else if (
    extra_flag.race === race_enum.hope_sta &&
    edu_weeks < 48 &&
    extra_flag.rank > 1
  ) {
    // todo 力+3
    await print_event_name('希望锦标后・希望', tachyon);
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`比赛结束后，你看着默默回到选手休息室的速子`);
    await era.printAndWait(`一路上谁也没有说话`);
    await era.printAndWait(
      `这场比赛的落败，对你还是对${tachyon.sex}而言，都是一场重大的打击`,
    );
    era.println();
    await tachyon.say_and_wait(`……实验，失败了啊`);
    era.println();
    await era.printAndWait(
      `这场比赛中，${tachyon.name}的状态明显十分的不对劲……`,
    );
    await era.printAndWait(
      `虽说一般的人大概看不出来，但今天的表现，并没有展现出${tachyon.sex}所拥有的那种……光芒`,
    );
    await era.printAndWait(
      `从一开始就黯淡的光芒，在比赛进入到后期更是几乎完全熄灭，因此，${tachyon.name}落败`,
    );
    era.println();
    await tachyon.say_and_wait(`……`);
    era.printButton(
      `……没什么，只是一次实验的失败而已，回去吧，实验哪有一定成功的？`,
      1,
    );
    await era.input();
    era.println();
    await era.printAndWait(`你不由得出言安慰${tachyon.sex}`);
    await era.printAndWait(
      `但坐在地上的${tachyon.sex}，却不知为何，表情有些奇怪`,
    );
    await era.printAndWait(`不是懊悔，反而……像在忍着什么？`);
    era.println();
    era.printButton(`速子……？你的身体……`, 1);
    await era.input();
    if (relation < 225) {
      await tachyon.say_and_wait(`没什么，不用担心……走吧`);
      era.println();
      await era.printAndWait(`或许，自己还无法打破${tachyon.sex}的心防吧`);
      await era.printAndWait(`你没说什么，跟在${tachyon.sex}的后头离去`);
    } else if (relation > 225) {
      await tachyon.say_and_wait(
        `……没事的，豚鼠君，我的腿……没什么问题，只要下次调整好就没问题了`,
      );
      era.println();
      await era.printAndWait(`速子反过来安慰着说道，想使你放下心来`);
      await era.printAndWait(
        `想到平时${tachyon.sex}胸有成竹的样子，你的内心也渐渐平稳了下来`,
      );
      era.println();
      await tachyon.say_and_wait([
        { content: '…………备选方案吗……或许……', fontSize: '12px' },
      ]);
      era.println();
      await era.printAndWait(
        `只是，${tachyon.sex}以为没被听到而喃喃说出的词句，却还是使你的心再度提了起来`,
      );
    }
  } else if (
    extra_flag.race === race_enum.hoch_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('弥生赏胜利后・研究对象确认', tachyon);
    await era.printAndWait(`理所当然的，速子赢下了弥生赏`);
    era.printButton(`好厉害的比赛！`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `呼……呼……呵呵，你的反应真是，每次都这么夸张啊，明明我都没认真跑，怎么就厉害了`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}语气玩味的说道`);
    era.println();
    await era.printAndWait(`一点也不夸张`);
    await era.printAndWait(
      `无论有没有认真跑，速子的跑法都同样的吸引着自己，就好比……对了，光电子`,
    );
    era.println();
    await tachyon.say_and_wait(`光电子……？`);
    era.println();
    await era.printAndWait(
      `打在电极上的光束，无论强弱都能使电极发射出电子，这是频率，也就是规格上的不同而导致的`,
    );
    await era.printAndWait(
      `无论强弱，无论认真与否，速子的跑法对自己而言就是超越次元，唯一能够在电极上打出电子的光芒`,
    );
    era.println();
    await tachyon.say_and_wait(`……这算什么比喻啊`);
    era.println();
    await era.printAndWait(`欸欸……不行吗`);
    await era.printAndWait(`明明花了很多时间来想，还挺有自信的……`);
    era.println();
    if (love > 75) {
      await tachyon.say_and_wait(
        `不过……你的意思我明白了，也就是说，你戴着只有我能够解锁的贞操带吧？`,
      );
      await era.printAndWait(`不，这比喻更烂吧……`);
    } else {
      await tachyon.say_and_wait(
        `不过……你的意思我明白了，也就是无论跑的如何，只要是我就能让你满意对吧？`,
      );
    }
    await era.printAndWait(`不过还是希望速子能认真跑了`);
    await era.printAndWait(`说到这，你忽然想起了速子赛前说的测试……`);
    era.println();
    await tachyon.say_and_wait(`……没什么问题，起码，皋月赏不会有问题`);
    era.println();
    await era.printAndWait(`起码……吗？`);
    await era.printAndWait(`让人很无法安心下来的词语，使你也陷入了沉默`);
    era.println();
    await tachyon.say_and_wait(`……不提这个了，快点回去继续实验吧`);
    era.println();
    await era.printAndWait(`于是，你和${tachyon.name}的弥生赏结束了`);
    await era.printAndWait(`下个目标皋月赏就近在眼前了！`);
    // 智+5
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('皋月赏胜利后・虚幻', tachyon);
    await tachyon.say_and_wait(`豚鼠君，你看见了吗？`);
    era.println();
    await era.printAndWait(`跑完皋月赏的速子，获得了至今为止最为热烈的欢呼声`);
    await era.printAndWait(`观众们兴奋的原因你也能理解`);
    await era.printAndWait(`今天的速子的表现堪称完美，`);
    await era.printAndWait(
      `不，可以说如果${tachyon.get_uma_sex_title()}有极限的话，那必然就是今天的速子`,
    );
    await era.printAndWait(`光一般的速度，光一般的闪耀，光一般的……虚幻`);
    era.println();
    await era.printAndWait(`仿佛在结束后就要如光一般消散的跑法`);
    await era.printAndWait(
      `在冲过终点的瞬间，所有人都不敢出声，哪怕是始终相信着速子实力的自己也一样不敢置信`,
    );
    await era.printAndWait(
      `那种跑法只能解释成，${tachyon.get_uma_sex_title()}这种生物的极限`,
    );
    await era.printAndWait(
      `是看到的瞬间就会感到「啊啊，这种跑法不可能有人能够超越的」的跑法`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君……这个啊，就是我们要超越的极限`);
    era.println();
    await era.printAndWait(`将自己定义为极限`);
    await era.printAndWait(`这是多么傲慢的说法`);
    await era.printAndWait(
      `但在看了先前那场比赛后，无论是谁都必须赞同这样的傲慢`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……没错，必须要超越这样的速度，才能称之为超越极限，否则，一切就全是空谈`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.sex}说出这句话时，直直盯着你的双眼，等待回答`,
    );
    await era.printAndWait(`这句话的潜意思，相信你能够明白`);
    await era.printAndWait(`自己有自信，能够超越那样的速度吗？`);
    era.printButton(`绝对可以`, 1);
    era.printButton(`因为是速子，所以绝对可以`, 2);
    await era.input();
    await era.printAndWait(`可以说是瞬间`);
    await era.printAndWait(`在领会出速子的含义后，你在瞬间便做出了回答`);
    await era.printAndWait(`不用经过思考，无须多加考虑`);
    await era.printAndWait(
      `眼前的这名${tachyon.get_uma_sex_title()}，拥有超越极限的力量`,
    );
    await era.printAndWait(`这是从第一次见面就已经确信的`);
    await era.printAndWait(
      `现在只不过是将你与${tachyon.sex}的目标放在眼前而已`,
    );
    await era.printAndWait(`已经看见目标了，那就必然能够超越`);
    era.println();
    await tachyon.say_and_wait(`如此快的反应，思考……不，是本能吗？你……`);
    era.println();
    await era.printAndWait(`不知为何，速子看着你露出了有些微妙的表情`);
    await era.printAndWait(
      `过了一会后，${tachyon.sex}仿佛下定了什么决心一般说道`,
    );
    era.println();
    await tachyon.say_and_wait(`那么，就来试试看吧，豚鼠君……`);
    await tachyon.say_and_wait(`不过首先，先确认好下一场的比赛吧……`);
    await tachyon.say_and_wait(
      `目前可以确认，日本德比我能出赛，以此来做准备吧，豚鼠君`,
    );
    era.println();
    await era.printAndWait(`……又来了`);
    await era.printAndWait(
      `如果要说，速子身上有任何一点是令你感到不安的要素，那么就只有这个了`,
    );
    await era.printAndWait(`……仿佛下场比赛便是最后一场一般的，不确定的态度`);
    await era.printAndWait(`但是，速子的话，一定能将这一切不确定跨越吧`);
    await era.printAndWait(`你如此乐观的想着`);
    era.println();
    await era.printAndWait(`下一场比赛，就决定是日本德比了！`);
    // 力+5
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`日本德比后·研究目标的再设定`, tachyon);
    era.printButton(`速子！太帅了！`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`唔……`);
    era.println();
    await era.printAndWait(`你一如既往的想要夸奖速子的跑姿，然而`);
    era.println();
    await tachyon.say_and_wait(`……实验，没有成功啊`);
    era.println();
    await era.printAndWait(`嗯？`);
    await era.printAndWait(`明明跑的很精彩，结果实验却没有成功吗`);
    era.println();
    await tachyon.say_and_wait(
      `宝穴君……虽然很让人期待，但${tachyon.sex}的可能性与我在寻找的并不相符……果然，还是茶座……`,
    );
    era.println();
    await era.printAndWait(`不知为何，速子喃喃说着你听不太懂的话`);
    era.println();
    await tachyon.say_and_wait(
      `……总之，先不说了吧，接下来，就要进入实验的关键点了`,
    );
    era.println();
    await era.printAndWait(
      `虽然不太明白，但你看着速子脸上严肃的表情，整个人也不禁正襟危坐了起来`,
    );
    era.println();
    await tachyon.say_and_wait(
      `下一场比赛……暂时……还不能确定……我还有些事情需要好好想想`,
    );
    era.println();
    await era.printAndWait(
      `充满了不确定的话语，让你在比赛结束后的欣喜瞬间化为了不安`,
    );
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 0
  ) {
    await print_event_name(`菊花赏后·会赢的`, tachyon);
    // todo 三冠达成
    await say_by_passer_by(
      `解说`,
      `三冠${tachyon.get_uma_sex_title()}诞生！同年中的最强！最快最幸运最强的${tachyon.get_uma_sex_title()}就是，${
        tachyon.name
      }！`,
    );
    // todo 无败三冠达成
    await say_by_passer_by(
      `解说`,
      `无败三冠诞生！历史的车轮再一次的转动了！${tachyon.name}，无败三冠达成！`,
    );
    // todo 非三冠
    await say_by_passer_by(
      `解说`,
      `超越了一众强敌率先越过终点线的是，超光速的公主，${
        tachyon.name
      }！菊花赏最强的${tachyon.get_uma_sex_title()}，就是${tachyon.name}！`,
    );
    await era.printAndWait(`${tachyon.name}拿下了菊花赏，当之无愧的胜利`);
    await era.printAndWait(
      `然而，还来不及为胜利而庆祝，便出现了一名造访的不速之客`,
    );
    era.println();
    await coffee.say_and_wait(`速子同学……你今天的跑法……`);
    await tachyon.say_and_wait(`哦呀，茶座君，怎么了吗？`);
    era.println();
    await era.printAndWait(`曼城茶座`);
    era.println();
    await era.printAndWait(`${tachyon.name}PlanB的接班人`);
    await era.printAndWait(`${tachyon.name}PlanA的试金石`);
    await era.printAndWait(`这场菊花赏上，${tachyon.name}最大的敌人`);
    // todo If 队伍里有曼城茶座
    await era.printAndWait(
      `同时也是，你的另一名负责${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await coffee.say_and_wait(`速子同学，你的跑法，和以前不一样了……`);
    await tachyon.say_and_wait(
      `呵呵，有什么问题吗？跑法本不就是不断在进化的吗？`,
    );
    await coffee.say_and_wait(`没什么……只是，恭喜你，跨越了另一个自己`);
    await tachyon.say_and_wait(`……另一个自己？等等，茶座！什么意思！`);
    await coffee.say_and_wait(
      `……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已`,
    );
    // todo If 队伍里有曼城茶座 茶座好感度≥一般
    await coffee.say_and_wait(`对了……等一下记得把训练员先生还给我`);
    // todo If 队伍里有曼城茶座  茶座爱慕值>50
    await coffee.say_and_wait(
      `因为今天是特别的日子所以先把训练员先生借你一下……等一下要还给我`,
    );
    // todo If 队伍里有曼城茶座  茶座爱慕值>75
    await coffee.say_and_wait(
      `还有，就算是负责${tachyon.get_uma_sex_title()}…不要占用别人的爱人太久了，速子同学`,
    );
    era.println();
    await era.printAndWait(`说完后，茶座在你的脸上吻了一下宣示主权`);
    await tachyon.say_and_wait(`茶座！…………啧，走掉了……`);
    await era.printAndWait(`没事吧，你担心的望着速子`);
    // todo If 茶座爱慕>75，速子爱慕<50
    await tachyon.say_and_wait(`没什么……话说，豚鼠君，你可真受欢迎啊`);
    // todo If 茶座爱慕>75，75>速子爱慕>50
    await tachyon.say_and_wait(`没什么……话说豚鼠君，你的风流债可真多啊`);
    // todo If 茶座爱慕>75，速子爱慕>75
    await tachyon.say_and_wait(`没什么……比起这个，豚鼠君……你的风流债可真多啊`);
    era.println();
    await era.printAndWait(`速子咬牙切齿的回过头来说道`);
    era.println();
    await tachyon.say_and_wait(`必须要好好消毒被茶座弄脏的地方才行！`);
    era.println();
    await era.printAndWait(
      `以此为理由，${tachyon.sex}不停的亲吻着你的脸颊，以十倍百倍的数量想压过茶座刚刚印上的吻`,
    );
    era.println();
    await era.printAndWait(
      `总之，无论如何，你与${tachyon.name}荣光的菊花赏结束了`,
    );
    // todo 耐+10
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1 &&
    event_marks.plan_b === 0
  ) {
    await print_event_name(`火苗点现`, tachyon);
    await tachyon.say_and_wait(`………`);
    era.printButton(`……`, 1);
    await era.input();
    await tachyon.say_and_wait(`………`);
    era.printButton(`……`, 1);
    await era.input();
    era.printButton(`……速子？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `比赛结束，荣光的菊花赏，决出最强${tachyon.get_uma_sex_title()}的竞赛`,
    );
    await era.printAndWait(
      `你的负责${tachyon.get_uma_sex_title()}${
        tachyon.name
      }却败在了这场比赛之上`,
    );
    await era.printAndWait(
      `在比赛结束进入选手休息室后，你们两人就一直维持着沉默`,
    );
    await era.printAndWait(
      `你暗暗看着${tachyon.sex}的脸庞，却猜不透${tachyon.sex}的心思`,
    );
    await era.printAndWait(`就在沉默的压力累积到极限时……`);
    era.println();
    await tachyon.say_and_wait(`呵呵……`);
    era.println();
    era.printButton(`速子……？`, 1);
    await era.input();
    await tachyon.say_and_wait(`明明都觉得不会输的……哎呀，还是被超越了`);
    await tachyon.say_and_wait(
      `果然，${tachyon.get_uma_sex_title()}的可能性还是只有在比赛中才能探索啊`,
    );
    await tachyon.say_and_wait(`输了输了`);
    era.println();
    await era.printAndWait(`速子的态度，出乎你意料之外的轻松`);
    await era.printAndWait(
      `也是啊……对${tachyon.sex}而言，不管怎么说比赛都是实验而已`,
    );
    await era.printAndWait(`实验有成功有失败，比赛也是`);
    await era.printAndWait(`失败了吸取教训就好`);
    era.println();
    await era.printAndWait(
      `虽然这样的态度是否适合比赛还不好说，但最起码可以安心${tachyon.sex}大概并没有受到太多影响了`,
    );
    era.println();
    await era.printAndWait(
      `然而，还来不及为此感到安心，便出现了一名造访的不速之客`,
    );
    era.println();
    await coffee.say_and_wait(`速子同学……你今天的跑法……`);
    await tachyon.say_and_wait(`哦呀，茶座君，怎么了吗？`);
    era.println();
    await era.printAndWait(`曼城茶座`);
    era.println();
    await era.printAndWait(`${tachyon.name}PlanB的接班人`);
    await era.printAndWait(`${tachyon.name}PlanA的试金石`);
    await era.printAndWait(`这场菊花赏上，${tachyon.name}最大的敌人`);
    // todo If 队伍里有曼城茶座
    await coffee.say_and_wait(`速子同学，你的跑法，和以前不一样了……`);
    await tachyon.say_and_wait(
      `呵呵，有什么问题吗？跑法本不就是不断在进化的吗？`,
    );
    await coffee.say_and_wait(`没什么……只是，恭喜你，跨越了另一个自己`);
    await tachyon.say_and_wait(`……另一个自己？等等，茶座！什么意思！`);
    await coffee.say_and_wait(
      `……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已`,
    );
    // todo If 队伍里有曼城茶座 茶座好感度≥一般
    await coffee.say_and_wait(`对了……等一下记得把训练员先生还给我`);
    // todo If 队伍里有曼城茶座  茶座爱慕值>50
    await coffee.say_and_wait(
      `因为今天是特别的日子所以先把训练员先生借你一下……等一下要还给我`,
    );
    // todo If 队伍里有曼城茶座  茶座爱慕值>75
    await coffee.say_and_wait(
      `还有，就算是负责${tachyon.get_uma_sex_title()}…不要占用别人的爱人太久了，速子同学`,
    );
    era.println();
    await era.printAndWait(`说完后，茶座在你的脸上吻了一下宣示主权`);
    await tachyon.say_and_wait(`茶座！…………啧，走掉了……`);
    await era.printAndWait(`没事吧，你担心的望着速子`);
    // todo If 茶座爱慕>75，速子爱慕<50
    await tachyon.say_and_wait(`没什么……话说，豚鼠君，你可真受欢迎啊`);
    // todo If 茶座爱慕>75，75>速子爱慕>50
    await tachyon.say_and_wait(`没什么……话说豚鼠君，你的风流债可真多啊`);
    // todo If 茶座爱慕>75，速子爱慕>75
    await tachyon.say_and_wait(`没什么……比起这个，豚鼠君……你的风流债可真多啊`);
    await era.printAndWait(
      `以此为理由，${tachyon.sex}不停的亲吻着你的脸颊，以十倍百倍的数量想压过茶座刚刚印上的吻`,
    );
    era.println();
    await era.printAndWait(
      `总之，无论如何，你与${tachyon.name}的经典战线结束了！`,
    );
    // todo 耐+10
  } else if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 1
  ) {
    // todo 曼城茶座参加菊花赏后
    await print_event_name(`止步于极限的光子`, tachyon);
    era.println();
    await era.printAndWait(`菊花赏，结束了`);
    await era.printAndWait(
      `结束后的几天，你送了训练到夜晚的茶座回到寝室，叮嘱${tachyon.sex}好好休息，然后……自己回到了学校里`,
    );
    await era.printAndWait(`明明自己也该好好休息的……但毕竟，还有工作没做完啊`);
    era.println();
    await era.printAndWait(
      `进入漆黑的训练员室的瞬间，你立即发现了房间里还有另一人在`,
    );
    await era.printAndWait(
      `不是因为你的感知有多么敏锐，而是那个人手上正拿着能够使人发出光芒的药水`,
    );
    era.printButton(`……速子啊`, 1);
    await era.input();
    await era.printAndWait(
      `这几个月以来一直帮着为茶座提供协助的，同样也是你负责${tachyon.get_uma_sex_title()}的${
        tachyon.name
      }`,
    );
    await era.printAndWait(`${tachyon.sex}手上的药水在月光下散发出七彩的光芒`);
    era.println();
    await tachyon.say_and_wait(`菊花赏，结束了呢`);
    era.printButton(`……是啊`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`并非关系不好`);
    await era.printAndWait(
      `说到底，${
        tachyon.sex
      }依然是你的负责${tachyon.get_uma_sex_title()}，两人日常也总有接触`,
    );
    await era.printAndWait(`所以，正常的交流应该是没问题的`);
    await era.printAndWait(
      `但是这几个月以来，你们的交流几乎就没有一次离开过茶座`,
    );
    await era.printAndWait(`除此之外，再加上合训那时候的事……`);
    await era.printAndWait(
      `瞬间，你忽然找不到有什么能够和${tachyon.sex}聊的话题了`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}的栗色短发在暗沉的月光下，纯褐如酒，暗红的双眼如渴血的野兽，贪婪的注视着你`,
    );
    await era.printAndWait(
      `在那一瞬间，你想到了许多，想到了前辈训练员说的与${tachyon.get_uma_sex_title()}维持安全的距离感，`,
    );
    await era.printAndWait(
      `想到了训练员讲座说到的${tachyon.get_uma_sex_title()}的独占欲，`,
    );
    await era.printAndWait(
      `想到了${tachyon.get_uma_sex_title()}生理学课上教到的${tachyon.get_uma_sex_title()}的发情期……`,
    );
    await era.printAndWait(
      `但这些都帮不了现在手无寸铁面对负责${tachyon.get_uma_sex_title()}的自己，`,
    );
    await era.printAndWait(
      `纵使多亏了眼前速子的药剂，自己或许拥有能够稍微抵抗的力量，`,
    );
    await era.printAndWait(`但那真的也就是稍微的力量而已`);
    await era.printAndWait(
      `${tachyon.sex}漫步靠近，下意识的，你也跟着慢慢后退`,
    );
    await era.printAndWait(`就这么一进一退，靠到了墙边`);
    await era.printAndWait(`${tachyon.sex}压着缩在墙角的你，淡淡的说了句`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，可以……陪我跑一下吗？`);
    era.println();
    await era.printAndWait(`说出的是你意料之中，但比你的意料还要糟糕的请求`);
    era.println();
    await era.printAndWait(`夜晚下的训练场，空荡的跑道`);
    await era.printAndWait(`整个赛场上只有${tachyon.name}一人在奔跑着`);
    await era.printAndWait(`月下的${tachyon.sex}，跑的十分不像样`);
    await era.printAndWait(
      `这也是难免的，已经将近三个月没有接受训练的${tachyon.sex}，`,
    );
    await era.printAndWait(
      `即便是天才，也无法跨越时间，肌肉的退化、感觉的退化等等，对运动员而言都是致命的伤痕`,
    );
    await era.printAndWait(`如果是现在的${tachyon.name}，说不定连你都能跑赢……`);
    await era.printAndWait(
      `虽然听起来很离谱，但每天都在药物锤炼下的身体，或许真的能够胜过已经许久没锻炼过的${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await era.printAndWait(`那么，为什么……`);
    await era.printAndWait(`你痛苦的想着`);
    era.println();
    await era.printAndWait(
      `为什么，即便是如此不堪的跑法，在你眼中却还是如第一次见到那时一般闪耀`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠……君……`);
    era.println();
    await era.printAndWait(
      `不知不觉间，${tachyon.sex}已经跑完，站在你的身侧气喘吁吁的喘着气`,
    );
    await era.printAndWait(`以前的${tachyon.sex}不该是这样的`);
    await era.printAndWait(`哪怕加上腿伤，${tachyon.sex}也不应该变成这样`);
    await era.printAndWait(
      `让${tachyon.sex}变成这样的，是本应该陪在${tachyon.sex}身边，相信${tachyon.sex}的那个人`,
    );
    await era.printAndWait(`是你`);
    era.println();
    await tachyon.say_and_wait(`……呵呵，跑的很不堪吧`);
    era.println();
    await era.printAndWait(`没有这回事，你想安慰${tachyon.sex}道`);
    await era.printAndWait(`但是${tachyon.sex}的目光，却不容许你说出谎言`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，你还记得吗？月桂杯那时候我说的话`);
    era.println();
    await era.printAndWait(`记得？不如说怎么可能忘掉`);
    await era.printAndWait(`直到现在，那还是自己常在午夜梦回出现的梦魇`);
    await era.printAndWait(
      `怀抱着自己的梦想，与他人的梦想的${tachyon.get_uma_sex_title()}在眼前凋零的瞬间`,
    );
    await era.printAndWait(
      `接下来，无论是责骂怨怼还是哀叹，自己都做好面对的准备了`,
    );
    era.println();
    await era.printAndWait(`但${tachyon.sex}要说的，却不是那些`);
    era.println();
    await tachyon.say_and_wait(`剩下用尽全力的几次……现在，机会来了`);
    await tachyon.say_and_wait(
      `菊花赏，茶座已经绽放出了${
        tachyon.sex
      }的光芒……是当之无愧，『最强』的${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await era.printAndWait(`最快的${tachyon.get_uma_sex_title()}赢皋月赏`);
    await era.printAndWait(`最强的${tachyon.get_uma_sex_title()}赢菊花赏`);
    await era.printAndWait(`你想起了从许久以前流传至今的话语`);
    era.println();
    await tachyon.say_and_wait(
      `接着……到年底，${tachyon.sex}必然将一路抵达巅峰`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}畅想着，自己心目中的可能性`);
    await era.printAndWait(`……已经不属于自己的可能性`);
    era.println();
    await tachyon.say_and_wait(
      `但为了让${tachyon.sex}超越极限，还需要磨砺的垫脚石……`,
    );
    era.println();
    await era.printAndWait(
      `但明明已经失去了自己的可能性，目光中的光芒却还是如此耀眼`,
    );
    await era.printAndWait(
      `如果是这样的${tachyon.sex}，自己一定会答应的吧，若是${tachyon.sex}都能为了梦想燃尽一切，那么陪${tachyon.sex}一把又如何`,
    );
    await era.printAndWait(`自己绝对会一如既往，甘之如饴的接受使唤吧`);
    await era.printAndWait(`但是……`);
    era.println();
    await tachyon.say_and_wait(`所以，豚鼠君，我需要你的帮助`);
    await tachyon.say_and_wait(
      `我要在明年复归，为了让茶座抵达更高的极限，只有我，才能以最针对${tachyon.sex}的方式制定出战术，逼迫${tachyon.sex}抵达极限`,
    );
    await tachyon.say_and_wait(`……你会助我一臂之力的吧`);
    era.println();
    await era.printAndWait(
      `如果真的甘心牺牲一切去成就他人，为什么脸上的表情却是如此不甘`,
    );
    await era.printAndWait(`为什么眼眶却含着泪水`);
    era.println();
    await tachyon.say_and_wait(`沉默就当默许了`);
    era.println();
    await era.printAndWait(`说到底，也没有拒绝的理由不是吗`);
    await era.printAndWait(`为了茶座能够攀上巅峰`);
    await era.printAndWait(`为了满足速子的『遗愿』`);
    await era.printAndWait(`没什么拒绝的理由吧，只是你很好奇`);
    await era.printAndWait(
      `眼前这名栗色头发的天才，现在脑袋里究竟在想些什么呢？`,
    );
    era.println();
    // todo 菊花赏后，${tachyon.name}训练选项解锁 状态『止步于极限的光子』获得 全属性+10
  } else if (
    extra_flag.race === race_enum.sank_hai &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`大阪杯后·变量的确定 未知的变量`, tachyon);
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}！新一年的G1连战敲响了超光速的钟声！${tachyon.name}漂亮的越过终点！`,
    );
    era.println();
    await era.printAndWait(`哦，赢了啊`);
    await era.printAndWait(
      `虽然说来可能十分不尊重人，但这确实就是${tachyon.name}的真实想法`,
    );
    await era.printAndWait(
      `在这个赛场上，能够阻止${tachyon.name}的就只有${tachyon.sex}自己的伤病`,
    );
    await era.printAndWait(
      `在已经摆脱伤病的现在，哪怕被称为自傲也无所谓，${tachyon.name}无法输给任何人`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}唯一在乎的，只有实验的结果`);
    await era.printAndWait(`但是……`);
    era.println();
    tachyon.print(
      `没有欢呼声……也是啊，这种临时抱佛脚的收买人心怎么可能有用……还是需要时间积累`,
    );
    tachyon.print(`再说，就算有了欢呼声，对比赛也不可能有什么影响的吧`);
    tachyon.print(`不然比赛只要看人气颁发名次不就好了`);
    tachyon.print(`比赛结束……那么，该去找豚鼠……`);
    era.println();
    await say_by_passer_by(`观众A`, `好厉害啊！`);
    era.println();
    await tachyon.say_and_wait(`…………？`);
    await say_by_passer_by(`观众B`, `好快的跑法……那个就是${tachyon.name}吗？`);
    await say_by_passer_by(
      `观众C`,
      `因为媒体的关系，原本以为是个问题儿童……就算真的是问题儿童，在赛场上就该是成绩论高下吧！`,
    );
    await say_by_passer_by(
      `观众D`,
      `本来经典赛上的战绩就堪称逆天，这种${tachyon.get_uma_sex_title()}到底为什么会在闪耀系列赛里乱杀啊，哪怕梦之杯来人都赢不过的啦！`,
    );
    await say_by_passer_by(
      `观众E`,
      `从经典赛就一直在看了，但无论看几次果然还是太强了！`,
    );
    era.println();
    tachyon.print(`这是……`);
    era.println();
    await era.printAndWait(`仿佛定格了一般，在通过终点线一会后才响起的`);
    await era.printAndWait(`全场的欢呼声`);
    await era.printAndWait(`夸张，夸大，毫无根据的赞扬，荒谬至极的吹嘘`);
    await era.printAndWait(`……奇怪，是这场比赛有什么特别的吗？`);
    era.println();
    tachyon.print(`不……一直都是如此，只是……一直都没注意到而已`);
    tachyon.print(`担心双腿崩溃`);
    tachyon.print(`担心实验失败`);
    tachyon.print(`担心止步不前`);
    tachyon.print(`所以……不是不存在，只是没听见，因为不重要`);
    await say_by_passer_by(`${tachyon.get_uma_sex_title()}A`, `速子前辈好帅！`);
    await say_by_passer_by(
      `${tachyon.get_uma_sex_title()}B`,
      `果然速子前辈才是最强的${tachyon.get_uma_sex_title()}！`,
    );
    await say_by_passer_by(`${tachyon.get_uma_sex_title()}C`, `速子前辈必胜！`);
    tachyon.print(`实际上，一直存在`);
    tachyon.print(
      `在皋月赏的时候，那个人一定喊过“超越光速吧！${tachyon.name}！”`,
    );
    tachyon.print(
      `在日本德比的时候，那个人一定喊过“让我看见${tachyon.get_uma_sex_title()}的可能性吧！”`,
    );
    tachyon.print(
      `在菊花赏的时候，那个人一定喊过“向我证明，${tachyon.get_uma_sex_title()}的伤病是可以被超越的吧！”`,
    );
    era.println();
    tachyon.print(`然后……是大阪杯`);
    tachyon.print(`“${tachyon.name}的可能性，绝对不只三冠！”`);
    era.println();
    tachyon.print(`啊啊`);
    tachyon.print(`这次，终于听见了`);
    era.println();
    tachyon.print(`原来，${tachyon.name}一直都是被人爱着的`);
    tachyon.print(`被粉丝，被后辈，被世界`);
    tachyon.print(`还有……观众席最前排`);
    tachyon.print(`明明没有在发光，却比谁都还要亮眼的那个人`);
    era.println();
    tachyon.print(`真是，这个笨蛋`);
    tachyon.print(`明明比赛的时候都喊得出那样的话来`);
    tachyon.print(`怎么面对面时，就只能说出那种蹩脚的夸奖了？`);
    tachyon.print(`要是我没听到的话怎么办`);
    tachyon.print(`这些支持不就白费了吗？`);
    tachyon.print(`支持……原来不是为了被支持的人听见才喊出的吗？`);
    tachyon.print(`……那么，不为了被听见而喊出的，才是真正的支持吗？`);
    era.println();
    await tachyon.say_and_wait(`我回来了……豚鼠君`);
    era.printButton(`欢迎回来，速子，腿没有任何问题吧！`, 1);
    era.printButton(`今天跑的一样真的，太厉害了！`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `……原本感觉对支持的定义已经能够明确了，都怪你啊，又得重新调查了`,
    );
    era.println();
    await era.printAndWait(`欸————为啥！？`);
    era.println();
    await tachyon.say_and_wait(
      `作为惩罚……今天的药是干扰大脑高级认知判断能力的药……`,
    );
    await tachyon.say_and_wait(
      `或者通俗一点来讲叫做吐真剂，喝下去之后好好聊聊今天比赛的看法吧`,
    );
    era.println();
    await era.printAndWait(`欸—————！？`);
    // todo 智+10
  } else if (
    extra_flag.race === race_enum.tenn_spr &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`天皇赏春后·わかります`, tachyon);
    era.println();
    await era.printAndWait(`啊啊，原来如此`);
    era.println();
    await era.printAndWait(`天皇赏春`);
    await era.printAndWait(`看着那两人在最终直线上的争斗`);
    await era.printAndWait(`总算，弄懂了`);
    era.println();
    await era.printAndWait(
      `为什么当初明明知道要以速子的成果做为基石也要支持茶座`,
    );
    await era.printAndWait(`为什么那天晚上却又为速子的回答感到欣喜`);
    era.println();
    await era.printAndWait(
      `在看见那超越光速的身姿，以及如同漆黑的猎犬一般撕咬前者的跑法时，终于理解了`,
    );
    await era.printAndWait(`早在第一次看见${tachyon.sex}们跑步的模样时`);
    // todo If 速子&茶座爱慕值<75
    await era.printAndWait(`自己，就已经深深爱上${tachyon.sex}们了`);
    era.println();
    await era.printAndWait(`闪烁如光的${tachyon.sex}`);
    await era.printAndWait(`漆黑如影的${tachyon.sex}`);
    await era.printAndWait(`最开始就是如此简单的事`);
    era.println();
    await era.printAndWait(`只是像孩子一样稚气的愿望`);
    await era.printAndWait(`想要分出强弱……不，只是想要看同场的竞技`);
    await era.printAndWait(
      `强还是弱那都不是重点，只是想看${tachyon.sex}们奔跑的模样`,
    );
    era.println();
    await era.printAndWait(`希望终点前的这段直线可以永远不要结束`);
    await era.printAndWait(
      `希望可以永远看着${tachyon.sex}们在赛场上奔驰的这一幕`,
    );
    await era.printAndWait(`不知不觉，你流下泪来`);
    era.println();
    await era.printAndWait(`是光，还是影`);
    await era.printAndWait(`是照亮一切的光使阴影无处遁形`);
    await era.printAndWait(`还是吞没一切的黑暗将光明噬尽`);
    era.println();
    await say_by_passer_by(
      `解说`,
      `撕咬至最后一刻的大接战！曼城茶座！还是${tachyon.name}！是超光速的逃脱还是摩天楼的逮捕！现在，冲过终点的是……！`,
    );
    // todo If 第二名
    era.println();
    await tachyon.say_and_wait(`………输了……吗？`);
    era.println();
    await era.printAndWait(`不可理喻`);
    await era.printAndWait(`毫无道理`);
    era.println();
    await era.printAndWait(`${tachyon.name}的出赛，是为了让曼城茶座取得成功`);
    await era.printAndWait(
      `为了让${tachyon.sex}登上巅峰，在比赛中针对${tachyon.sex}最难受的点进行刺激，迫使${tachyon.sex}产生进步`,
    );
    await era.printAndWait(
      `然后……不引人注目的退居幕后，让${tachyon.sex}享受名为胜利的补偿`,
    );
    await era.printAndWait(`明明应该是这样的，那……`);
    era.println();
    await say_by_passer_by(
      `解说`,
      `是曼城茶座！将超光速吞没，立于淀坡之上的盾之荣光归于曼城茶座！`,
    );
    era.println();
    await era.printAndWait(`为什么……此刻却感到如此的……不甘心！`);
    era.println();
    await era.printAndWait(`一开始明明很正常的`);
    await era.printAndWait(`茶座的优势和劣势都在其稳定性`);
    await era.printAndWait(
      `由于极强的稳定，使得${tachyon.sex}在最考验强度的长距离比赛中总能取得优势`,
    );
    await era.printAndWait(
      `但也因为太过稳定，导致${tachyon.sex}欠缺关键时的爆发力`,
    );
    await era.printAndWait(
      `所以破坏了${tachyon.sex}的舒适状态，这样才能刺激${tachyon.sex}超越极限`,
    );
    era.println();
    await era.printAndWait(`结果，出乎意料的`);
    await era.printAndWait(
      `${tachyon.sex}不但找回了节奏，还更进一步的进化，完善了自己的跑法`,
    );
    await era.printAndWait(`到此，这场比赛的目的就应该已经结束了才对`);
    await era.printAndWait(`可是……`);
    era.println();
    await era.printAndWait(`原因不用想也知道`);
    await era.printAndWait(`那天晚上和后辈的对话是主要原因`);
    await era.printAndWait(`但是……后辈${tachyon.sex}也没做错什么`);
    await era.printAndWait(`有问题的，是${tachyon.name}`);
    era.println();
    await era.printAndWait(`如果心中没有犹豫的话，那时候应该能准确回答出口的`);
    era.println();
    await tachyon.say_and_wait(`我……`);
    era.println();
    await era.printAndWait(
      `${tachyon.name}，说到底还是一名${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(`还是无法抗拒，奔跑和争胜的本能`);
    await era.printAndWait(
      `明明关于${tachyon.get_uma_sex_title()}的可能性还有很多其他的路径`,
    );
    await era.printAndWait(`没有必要执着于赛场的`);
    await era.printAndWait(
      `却还是选择了茶座，哪怕只能痛苦的看着他人奔跑的模样，也不选择其他道路的原因`,
    );
    await era.printAndWait(`因为……${tachyon.name}，是爱着跑步的啊`);
    era.println();
    await era.printAndWait(`想到这里，忽然释怀了`);
    await era.printAndWait(`无论找多么冠冕堂皇的借口和理由来掩盖都一样`);
    await era.printAndWait(
      `无论怎么努力，也无法挣脱${tachyon.get_uma_sex_title()}的本能`,
    );
    await era.printAndWait(`……也不想挣脱`);
    await era.printAndWait(`想要变成最快最强的${tachyon.get_uma_sex_title()}`);
    await era.printAndWait(`想要与敌手纠缠死斗到最后一刻`);
    await era.printAndWait(`想要……证明自己`);
    era.println();
    await era.printAndWait(`……但是，这样的话，自己该怎么去面对他`);
    await era.printAndWait(`一直帮助着自己的，总在身边支持着自己的那个人`);
    await era.printAndWait(`该用什么面目去面对他`);
    await era.printAndWait(`……哪怕是他，一定也会生气的吧`);
    await era.printAndWait(`身为${tachyon.name}和曼城茶座的专属训练员`);
    await era.printAndWait(`当初说好的，将比赛让给茶座，自己专注于幕后`);
    era.println();
    await era.printAndWait(`结果……`);
    await era.printAndWait(`现在却要告诉他，自己……还是想要继续跑步？`);
    await era.printAndWait(`耍人也该有个限度吧`);
    era.println();
    await era.printAndWait(`不知不觉`);
    await era.printAndWait(`${tachyon.name}逃离了赛场`);
    // todo 速子状态下降
    // todo 第一名
    await era.printAndWait(`速子没有回到选手休息室`);
    await era.printAndWait(`整个赛场里也没有${tachyon.sex}的踪影`);
    await era.printAndWait(
      `你担心的打电话回去找宿舍长确认消息，得到了速子已经回到特雷森的消息才放下心来`,
    );
    await era.printAndWait(`……不，也不能说放下心来`);
    await era.printAndWait(`速子究竟怎么了……为什么会自己跑回学园`);
    await era.printAndWait(`有机会找${tachyon.sex}聊聊吧`);
    //todo 闲聊、外出选项换成“你想与速子聊天春时的事，但${tachyon.sex}马上就跑不见了”
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 0
  ) {
    await print_event_name(`宝冢纪念后·神话诞生`, tachyon);
    await say_by_passer_by(
      `解说`,
      `称霸了上半年的总决赛，化身为神话的是${tachyon.name}！`,
    );
    era.println();
    await era.printAndWait(`${tachyon.name}理所当然的第一个跨越了终点线`);
    await era.printAndWait(`全场响起了响亮的掌声及欢呼`);
    await era.printAndWait(`空中彩纸飞舞，又是一次辉煌且精彩的比赛`);
    era.println();
    await era.printAndWait(`忽然，观众席发出惊呼，接着喧闹变得更为热络`);
    await era.printAndWait(
      `那个比赛后总是轻描淡写草草挥手下场的${tachyon.name}`,
    );
    await era.printAndWait(`现在却依然留在场上，大方的回应着粉丝们的欢呼声`);
    await era.printAndWait(`而这一举动也引发了更热闹的声援，声音响彻云霄`);
    era.drawLine({ content: '下场后' });
    era.println();
    await tachyon.say_and_wait(`……呵呵`);
    era.printButton(`速子！`, 1);
    era.printButton(`今天也很精彩！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`嗯？哦，比起这个，豚鼠君！你看，测试的结果！`);
    await tachyon.say_and_wait(
      `这次的实验中比起大阪杯加入了更多的欢呼声变量，根据比赛结束后的数据分析，`,
    );
    await tachyon.say_and_wait(
      `确实对肌肉的输出力量产生了帮助……其输出量大于平常情绪增长造成的幅度……`,
    );
    await tachyon.say_and_wait(
      `简单来讲，实验成功！观众的应援确实能够造成影响，哈哈哈哈哈哈！`,
    );
    era.println();
    await era.printAndWait(`……虽然不太明白，但总之实验似乎是成功了`);
    era.printButton(`恭喜！`, 1);
    era.printButton(`这样距离可能性就更进一步了！`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `呵呵……虽然还有些地方没能搞清楚，但在比赛中运用已经没有问题了！`,
    );
    await tachyon.say_and_wait(
      `不过……这么看来，其实我确实是会因喝采而感到高兴的啊……该说毕竟还是社会性生物吗……`,
    );
    era.printButton(
      `大家都是很认真的为速子加油的哦，要是速子做出反应一定会很高兴的`,
      1,
    );
    era.printButton(`我是很认真为速子加油的，要是速子能够感到高兴就太好了`, 2);
    const ret1 = await era.input();
    if (love < 50) {
      if (ret1 === 1) {
        era.println();
        await tachyon.say_and_wait(
          `呵呵，说的也是……那么下次做点回应吧，就当作支援报酬的粉丝服务吧`,
        );
        era.println();
        await era.printAndWait(
          `并不是报酬……虽然想这么说，但速子大概还是无法明白吧`,
        );
      } else {
        era.println();
        await tachyon.say_and_wait(`你的喝采……嗯，我也确实的听到了……`);
        await tachyon.say_and_wait(
          `话说，明明能说出那种话来，怎么每次跑完回来都是这些老套的陈腔滥调啊？`,
        );
      }
    }
    //todo 耐+10
    // 技能点+10
    else {
      if (love > 50) {
        if (ret1 === 1) {
          era.println();
          await tachyon.say_and_wait(
            `那么，这个大家一定也包括了你吧……你希望我做出怎么样的回应，来感谢你呢♡`,
          );
        } else {
          await tachyon.say_and_wait(
            `这样啊，那么，我该用什么来回报我最大的粉丝才好呢`,
          );
        }
        era.println();
        await era.printAndWait(`速子用妩媚的眼神看着你`);
        await era.printAndWait(`一时你竟忘记了言语`);
      }
    }
    era.println();
    await era.printAndWait(`你和${tachyon.name}的宝冢纪念结束了！`);
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 1
  ) {
    await print_event_name(`宝冢纪念后·前往极限`, tachyon);
    era.println();
    await tachyon.say_and_wait(`哈啊……哈啊……茶……茶座……！`);
    era.println();
    await era.printAndWait(`拼尽全力喊出的嘶吼`);
    await era.printAndWait(`在比赛中说话`);
    await era.printAndWait(
      `这无论在实验的角度来看，又或者是竞赛的角度来看，都是极度不符合常理的行为`,
    );
    await era.printAndWait(`但是，${tachyon.name}还是喊出声了`);
    era.println();
    await era.printAndWait(`在最终直线前，在最后的冲刺开始前`);
    await era.printAndWait(`${tachyon.name}发出的，违背常理的宣言`);
    era.println();
    await tachyon.say_and_wait(`要是能追上的话……就试试看啊！`);
    era.println();
    await era.printAndWait(`跑在前方的${tachyon.name}`);
    await era.printAndWait(`对着紧紧撕咬在后的猎犬发出挑衅`);
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(`……无聊`);
    await tachyon.say_and_wait(`你觉得做这种事能让任何人开心吗？`);
    await tachyon.say_and_wait(
      `不需要你让，我也会堂堂正正的超越你……然后，超越朋友`,
    );
    era.println();
    await era.printAndWait(`比赛前的坦承错误，果不其然，被狠狠数落了一顿啊`);
    await era.printAndWait(`不过……嘛，这样也轻松多了`);
    await era.printAndWait(`要是像豚鼠君那样全肯定反而才更让人担心`);
    await era.printAndWait(`所以，今天可以毫无顾虑，用尽全力的跑了`);
    era.println();
    await era.printAndWait(`对对手的尊重`);
    await era.printAndWait(`对自己的渴望`);
    await era.printAndWait(`对支持者的回报`);
    era.println();
    await tachyon.say_and_wait(
      `以此献上的，${tachyon.name}于日本国内的最后一舞`,
    );
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}！还是曼城茶座！${tachyon.name}！曼城茶座！${tachyon.name}！曼城茶座！现在，两人冲线———————————！`,
    );
    era.println();
    await era.printAndWait(`谁赢了`);
    await era.printAndWait(`谁输了`);
    await era.printAndWait(`不，那些都无关紧要`);
    era.println();
    await era.printAndWait(`这样一切就，都结束了`);
    await era.printAndWait(`今天的比赛，${tachyon.name}跑出了自己的最佳`);
    await era.printAndWait(`下场比赛，也已经在射程以内了`);
    era.drawLine();
    era.printButton(`好强，好快！不管是茶座……还是速子都是……！`, 1);
    era.printButton(`能够成为你们的训练员……真是……太好了！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `呵呵，忽然讲这么煽情的话，搞得像大结局一样，我们的比赛可还没结束呢，豚鼠君`,
    );
    era.println();
    await era.printAndWait(`啊啊，是啊`);
    era.println();
    await tachyon.say_and_wait(`……记者会，差不多要开始了`);
    era.println();
    await era.printAndWait(
      `上半年最强${tachyon.get_uma_sex_title()}总决赛，这种比赛想也知道必然会聚集许多记者媒体`,
    );
    await era.printAndWait(`就在这个舞台上，宣布今后的目标吧`);
    era.printButton(`上吧，速子`, 1);
    era.printButton(`我永远站在你身后`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……嗯，我上了`);
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(
      `如此这般，于是下场比赛，我的预定计画是，世界最高峰，凯旋门杯。以上有任何记者有问题吗？`,
    );
    era.println();
    await era.printAndWait(`鸦雀无声`);
    await era.printAndWait(
      `哪怕是在记者会前便听说了今天${tachyon.name}阵营将宣布重量级消息的记者`,
    );
    await era.printAndWait(`也不由得因这重磅消息而大吃一惊`);
    era.println();
    await tachyon.say_and_wait(`———如果没有问题的话，那么今天的采访到此……`);
    era.println();
    await era.printAndWait(
      `直到这时，记者们才忽然如梦中醒，纷纷开始做出提问，`,
    );
    await era.printAndWait(
      `但看得出由于太过突然的展开，导致他们原本准备的问题全都派不上场，只能临时寻找话题`,
    );
    await era.printAndWait(`而速子也不慌不忙的进行回答`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `为什么如此突然做出决定，真的是深思熟虑下做出的出赛安排吗？`,
    );
    await tachyon.say_and_wait(
      `这是我与训练员君相谈后做出的决定，是在几个月前就已经决定的，并不突然也不唐突，只是先前并没有通知媒体`,
    );
    await say_by_passer_by(
      `记者B`,
      `请问${tachyon.name}小姐去年由于不明原因暂停出赛闪耀系列赛的原因是……？今年凯旋门杯应该不会……`,
    );
    await tachyon.say_and_wait(
      `这方面无可奉告，但我可以做出保证，今年的凯旋门杯我必然会参赛`,
    );
    await say_by_passer_by(
      `记者B`,
      `……那个，今天的比赛很精彩，请问${tachyon.name}小姐有没有什么想对对手曼城茶座说的话吗？`,
    );
    await tachyon.say_and_wait(
      `嗯……也是啊，那么，『不管是你，还是你的朋友，我都会在凯旋门上一并超越』，就这样吧`,
    );
    era.println();
    await era.printAndWait(
      `你身居幕后，望着记者会上如星光一般闪耀的${tachyon.sex}`,
    );
    await era.printAndWait(`一度黯淡的光子，如今正绽放着最为闪耀的光芒`);
    // todo 耐+10
    // 技能点+10
  } else if (
    extra_flag.race === race_enum.prix_lat &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 1
  ) {
    await print_event_name(`凯旋门赏后·止于极限`, tachyon);
    era.println();
    await era.printAndWait(`${tachyon.name}，登上了世界的顶点`);
    await era.printAndWait(
      `来自日本的${tachyon.get_uma_sex_title()}，打破了世界的纪录`,
    );
    await era.printAndWait(
      `那灼伤了自己双眼的跑法，第一次，也是最后一次在世界上绽放出最璀璨的光彩`,
    );
    era.println();
    await era.printAndWait(`比赛后回到选手休息室的速子没有多说什么`);
    await era.printAndWait(`你一如往常的先为${tachyon.sex}检查腿部状况`);
    era.println();
    await tachyon.say_and_wait(`……没有必要了吧，豚鼠君`);
    await tachyon.say_and_wait(`明明知道的不是吗？`);
    era.println();
    await era.printAndWait(`你陷入沉默`);
    await era.printAndWait(`虽然知道结局，但还是忍不住期待奇迹`);
    await era.printAndWait(`然而……`);
    era.println();
    await era.printAndWait(
      `你没有多说什么，只是帮着速子用药冷却及减轻腿的负担`,
    );
    await era.printAndWait(
      `直到官方通知，颁奖仪式已经准备好了，你们才慢慢的朝着舞台走去`,
    );
    era.println();
    await tachyon.say_and_wait(`……那么，怎么样？这场比赛，让你满意了吗？`);
    era.println();
    await era.printAndWait(`拼尽了一切，燃烧了自己的双腿`);
    await era.printAndWait(`以此获得的胜利`);
    await era.printAndWait(`怎么可能不使人着迷，又怎么可能不使人狂热`);
    era.println();
    await era.printAndWait(`自己，一定不是个称职的训练员吧`);
    await era.printAndWait(
      `身为训练员，应该要理智的为${tachyon.get_uma_sex_title()}考虑对${
        tachyon.sex
      }们最好的选项`,
    );
    await era.printAndWait(
      `但自己，只是为了看见最美的跑法，最强的跑姿，就放任自己的负责${tachyon.get_uma_sex_title()}做出了这种事`,
    );
    await era.printAndWait(`幸好，此时的问题也不是需要以训练员的身份做回答的`);
    await era.printAndWait(`以一名粉丝，以${tachyon.name}最狂热的死忠粉的身份`);
    era.printButton(`是我看过的，最精彩的一场比赛了`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`${tachyon.name}露出了朝阳般的微笑`);
    await era.printAndWait(
      `比起${tachyon.sex}的光芒，略显弱小，却更加柔和，更加温暖的光芒`,
    );
    era.drawLine();
    await era.printAndWait(`隐隐作痛的腿`);
    await era.printAndWait(`明显刺痛的足跟`);
    await era.printAndWait(`但比起这些，更多的还是遗憾`);
    era.println();
    await era.printAndWait(`虽然早就知道了，但果然……`);
    await era.printAndWait(`${tachyon.name}，直到最后也还是没能超越极限`);
    era.println();
    await era.printAndWait(`没有什么好失望的，只不过照着原计划进行而已`);
    era.println();
    await say_by_passer_by(
      `记者A`,
      `速子小姐！恭喜您今天拿下凯旋门赏！除此之外，这次的凯旋门还打破了历届以来的纪录！`,
    );
    await say_by_passer_by(
      `记者A`,
      `关于这场胜利，请问有想对对手或日本的亲友说的话吗？`,
    );
    era.println();
    await tachyon.say_and_wait(`……呵呵`);
    await tachyon.say_and_wait(`那么最后……让我说几句吧`);
    await say_by_passer_by(`记者A`, `最后……？`);
    await tachyon.say_and_wait(
      `我，相信所有${tachyon.get_uma_sex_title()}都具有自己的可能性`,
    );
    await tachyon.say_and_wait(`无论是什么样的高墙，都一定能将其超越`);
    await tachyon.say_and_wait(`所以……这个纪录，只是个开始，而非结束`);
    await tachyon.say_and_wait(
      `接下来，必然会有更多的${tachyon.get_uma_sex_title()}能够站上世界，然后……超越极限`,
    );
    await tachyon.say_and_wait(`我如此相信，并期望着各位，以及……`);
    era.println();
    await era.printAndWait(
      `充满了对后来者的期望，却又将傲慢的将自己定义为极限`,
    );
    await era.printAndWait(`台下的众人燃烧着斗志，望着台上的${tachyon.sex}`);
    await era.printAndWait(
      `但${tachyon.sex}的眼中，却是至今仍躲在观众席上的那人`,
    );
    await era.printAndWait(`舞台已经布置完成`);
    await era.printAndWait(`热场已经结束`);
    await era.printAndWait(`接下来，你有办法超越这一切吗？`);
    era.println();
    await era.printAndWait(`${tachyon.name}，对曼城茶座发出了无声的挑战`);
    era.drawLine();
    await era.printAndWait(`凯旋门赏结束`);
    await era.printAndWait(`在比赛结束后你马上带着速子到医院进行检查`);
    await era.printAndWait(`如预料一般，却又在预料之外`);
    await era.printAndWait(`如预料一般，是严重到必须退役的腿伤`);
    await era.printAndWait(`预料之外的，伤势远没有想像的那么严重`);
    await era.printAndWait(`除了无法奔跑以外，就没有其他更严重的情况了`);
    await era.printAndWait(
      `……然而对${tachyon.get_uma_sex_title()}而言，也不需要比这更严重的状况了`,
    );
    era.println();
    await era.printAndWait(`${tachyon.name}退役的消息瞬间震惊了世界`);
    await era.printAndWait(
      `身为其训练员的你受到了全世界的关注，其中也不免有对此的抱怨微词出现`,
    );
    // todo 爱慕值+10
    // 扣除20声望
    // ${tachyon.name}退役，不可进行训练&比赛
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 0
  ) {
    await print_event_name(`有马纪念后·超越极限`, tachyon);
    era.println();
    await tachyon.say_and_wait(`哈啊……哈啊……`);
    era.println();
    await era.printAndWait(`脚步沉重，迟钝`);
    await era.printAndWait(`原因……很清楚`);
    await era.printAndWait(`来自身后的猎犬散发出了强烈的压迫感`);
    era.println();
    await era.printAndWait(
      `在茶座奔跑时，无论是前后的${tachyon.get_uma_sex_title()}都会感受到的极强压迫力`,
    );
    await era.printAndWait(
      `和${tachyon.sex}的朋友在内，都是自己的科学无法解释的东西`,
    );
    era.println();
    await tachyon.say_and_wait(`……来了！`);
    era.println();
    await era.printAndWait(`曼城茶座追在身后`);
    await era.printAndWait(
      `后颈汗毛竖立，仿佛能够感受到${tachyon.sex}的鼻息一般`,
    );
    await era.printAndWait(`就是现在，就在这里`);
    era.println();
    await era.printAndWait(`如果说${tachyon.name}拥有的是超越次元的速度`);
    await era.printAndWait(`那么曼城茶座就是跨越次元的弔诡`);
    await era.printAndWait(`不知会从何出现，仿佛从镜中世界穿越而来的异形身姿`);
    era.println();
    await era.printAndWait(`那漆黑的幻影，瞬间超越了${tachyon.name}`);
    era.println();
    await tachyon.say_and_wait(`……抱歉`);
    era.println();
    await era.printAndWait(`为了实现自己的梦想，而将他人的梦想踢落`);
    await era.printAndWait(`更何况，对方还是……`);
    await era.printAndWait(`是什么呢？`);
    await era.printAndWait(`朋友？宿敌？天生相克的存在？研究者和实验品？`);
    await era.printAndWait(`将最后一个选项甩出脑袋后，曼城茶座继续向前奔驰`);
    await era.printAndWait(
      `在通往梦想的道路上，即便是再深的感情，顶多也就只能化作这样一句抱歉`,
    );
    era.println();
    await era.printAndWait(
      `只要跨越此处，接下来，下个目标，就是『那个身影』……！`,
    );
    era.println();
    await era.printAndWait(`但是，${tachyon.sex}漏判了一个可能性`);
    era.println();
    await era.printAndWait(`${tachyon.name}，还留有余力的可能性`);
    await era.printAndWait(`${tachyon.name}，一开始就没有用尽全力的可能性`);
    await era.printAndWait(`${tachyon.name}，在等待的就是这个时机的可能性`);
    era.println();
    await era.printAndWait(
      `前方的${tachyon.get_uma_sex_title()}是……跑在最前头的逃${tachyon.get_uma_sex_title()}，以及曼城茶座`,
    );
    await era.printAndWait(
      `最适合${tachyon.name}的位置，仿佛在实验室里一般舒适的位置`,
    );
    await era.printAndWait(`就是现在，就在这里`);
    era.println();
    await era.printAndWait(`时间停滞了，世界改变了`);
    era.println();
    await era.printAndWait(`眼前是无穷无尽无垠的黑色空间`);
    await era.printAndWait(`充满了算式的数理公式`);
    era.println();
    await era.printAndWait(`想要超越曼城茶座——变量宿敌已添加`);
    await era.printAndWait(`最适合自己的环境——变量跑位已添加`);
    await era.printAndWait(`锻鍊及天赋的结合——变量速度已添加`);
    await era.printAndWait(`然后是……`);
    era.println();
    await era.printAndWait(`从身后，感觉到了一丝暖意及红茶的香味`);
    await era.printAndWait(`但${tachyon.name}没有回头`);
    await era.printAndWait(`不需要回头，因为那是对对方的不信任`);
    await era.printAndWait(
      `看着前方，然后……等待对方，相信他必然会追上自己，与自己同行`,
    );
    era.println();
    await era.printAndWait(`冒着热气的红茶被摆放在${tachyon.name}的面前`);
    await era.printAndWait(`宛如日常的实验室一般`);
    await era.printAndWait(`一切都是如此理所当然`);
    era.println();
    await era.printAndWait(`他会理所当然的陪伴在${tachyon.name}身旁`);
    await era.printAndWait(`${tachyon.name}理所当然的会解决面前一切难题`);
    era.println();
    await tachyon.say_and_wait(`最后的解就是这个……`);
    era.println();
    await era.printAndWait(`在宛如黑板的空间中画下U=MA2的公式`);
    await era.printAndWait(`瞬间，黑暗的空间中，所有算式发出光芒`);
    await era.printAndWait(`这就是，${tachyon.name}的最终解`);
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}追上来了！${tachyon.name}追上来了！`,
    );
    await say_by_passer_by(
      `解说`,
      `最前面的逃${tachyon.get_uma_sex_title()}已经后继无力，最后的激战果然还是这两人！`,
    );
    await say_by_passer_by(
      `解说`,
      `${tachyon.name}！曼城茶座！几乎并排冲入最终直线！`,
    );
    // todo 曼城茶座菊花赏胜利
    await say_by_passer_by(
      `解说`,
      `『最强的${tachyon.get_uma_sex_title()}，与最快的${tachyon.get_uma_sex_title()}，要在这里绝出胜负！』`,
    );
    await era.printAndWait(`啊啊`);
    await era.printAndWait(`明明是在比赛`);
    await era.printAndWait(`却感觉……如此畅快`);
    era.println();
    await era.printAndWait(`与自己认可的劲敌`);
    await era.printAndWait(`发挥出自己的全力`);
    await era.printAndWait(`但是……还不够`);
    era.printButton(`超越极限吧！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`随着接受过的几次采访`);
    await era.printAndWait(
      `超越极限似乎已经成为${tachyon.name}的粉丝口中，超越『${tachyon.name}最强』、『${tachyon.name}必胜』等的口号了`,
    );
    await era.printAndWait(
      `但即便是如此杂乱的助威声，与他的话语相比，听起来都是那么模糊`,
    );
    era.println();
    await era.printAndWait(`嗯，没错`);
    await era.printAndWait(`就是现在`);
    era.println();
    await era.printAndWait(`比起领域更上一层的极限`);
    await era.printAndWait(`超越极限吧`);
    await era.printAndWait(`超越${tachyon.get_uma_sex_title()}的极限`);
    await era.printAndWait(`超越${tachyon.name}的极限`);
    await era.printAndWait(`超越一切，然后，在这之后`);
    await era.printAndWait(`朝着更加遥远的彼方—————伸手`);
    await say_by_passer_by(
      `解说`,
      `冲————线！破，破纪录了！年度的总决赛！是${tachyon.name}！打破纪录，在今日称霸中山赛场的是${tachyon.name}！`,
    );
    era.println();
    await era.printAndWait(`结束了`);
    await era.printAndWait(`结束……了？`);
    era.println();
    await era.printAndWait(`应该是，结束了吧`);
    await era.printAndWait(`毕竟揭示版上都排出成绩了`);
    await era.printAndWait(`但是，身体的热意却丝毫不像比赛已经结束一样`);
    await era.printAndWait(`肾上腺素仿佛沸腾一般还在源源不绝产出`);
    era.println();
    await say_by_passer_by(`观众A`, `做到了啊！`);
    era.println();
    await era.printAndWait(`忽然的喊声，使自己在吓了一跳的同时回归现实`);
    await say_by_passer_by(`观众B`, `真的，真的打破记录了啊！`);
    await say_by_passer_by(`观众C`, `好样的！`);
    era.println();
    await era.printAndWait(`整个会场欢声雷动`);
    await era.printAndWait(`……简直，比胜利的自己还要兴奋啊`);
    era.println();
    await era.printAndWait(`应该，要做出回应的吧`);
    await era.printAndWait(`不管怎么说，应该要做出社会性的表达`);
    await era.printAndWait(`……不，这只是纯粹，对支援者的感谢`);
    await era.printAndWait(`应该要表现出来才对`);
    await era.printAndWait(`但是……`);
    era.println();
    await era.printAndWait(`挣扎了半天`);
    await era.printAndWait(`也只能勉强抬手`);
    await era.printAndWait(`仿佛整个人依然活在梦里一般`);
    era.println();
    await era.printAndWait(`只是`);
    await era.printAndWait(`光是这样，便足以掀起巨浪般的欢声了`);
    era.drawLine();
    era.printButton(`速子……那就是……！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`不敢做出定论`);
    await era.printAndWait(`没有人会敢对自己从没见过的东西做出定论`);
    await era.printAndWait(
      `如果为真的话，那么，这将是从未有人抵达过的领域————`,
    );
    era.println();
    await era.printAndWait(`…………`);
    era.printButton(`……速子？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`仿佛还没从梦中惊醒一般`);
    await era.printAndWait(`虽然很难描述，但眼前的速子，就好像在梦游一般`);
    await era.printAndWait(`这种情况下，应该唤醒${tachyon.sex}的吧？`);
    await era.printAndWait(`但是，要怎么做呢？`);
    await era.printAndWait(`毕竟连自己都忍不住怀疑，眼前的这些只是一场梦而已`);
    await era.printAndWait(
      `如此漫长的三年，在今天终于以最完美的实验成果画下尾声`,
    );
    era.println();
    await tachyon.say_and_wait(`…………呵呵`);
    await tachyon.say_and_wait(`哈哈哈哈哈哈哈！`);
    era.println();
    await era.printAndWait(`如果说前一秒发出的笑声是让人欣慰总算回过神来`);
    await era.printAndWait(`那么，后一秒的狂笑便是使人怀疑是否是脑袋出问题了`);
    await era.printAndWait(`正当你担忧的想上前检查时……`);
    era.println();
    await tachyon.say_and_wait(`你看到了吗？……你看到了吧！豚鼠君！`);
    await tachyon.say_and_wait(
      `这就是，实验的成果……我带你看见了！这就是，极限之后的世界！`,
    );
    await era.printAndWait(`你想起去年十一月时速子说过的话`);
    era.println();
    tachyon.print(`作为报酬，我会让你看见更加宽广的世界`);
    era.println();
    await era.printAndWait(`${tachyon.sex}真的做到了`);
    await era.printAndWait(`每一场比赛，都在距离目标更近一步`);
    await era.printAndWait(`然后现在`);
    await era.printAndWait(`两人真的看见了更宽广的，极限后的世界`);
    era.printButton(`嗯……我们真的，做到了`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `这是你第一次看见，世界上竟然还有比速子的跑法更加闪耀的东西`,
    );
    await era.printAndWait(`那就是，此时速子脸上露出的笑容`);
    era.drawLine();
    era.println();
    await era.printAndWait(`有马后隔天`);
    await era.printAndWait(
      `或许是目的达到使你放下心来，这三年以来，你第一次迟到了`,
    );
    await era.printAndWait(`不过，毕竟两人的目标已经实现`);
    await era.printAndWait(`接下来就轻松的迎接URA总决赛吧`);
    era.println();
    if (love < 50) {
      await tachyon.say_and_wait(`你在搞什么？这么慢，实验都开始多久了`);
      era.println();
      await era.printAndWait(
        `当你来到速子的实验室时，看见的却是一如既往专注于研究的速子`,
      );
      era.println();
      await tachyon.say_and_wait(
        `昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！`,
      );
      await tachyon.say_and_wait(
        `只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！`,
      );
      await tachyon.say_and_wait(`快点换好实验服过来帮忙！`);
      await coffee.say_and_wait(`……速子同学，你好吵`);
      await tachyon.say_and_wait(
        `哦呀哦呀，这不是昨天有马纪念输给我的茶座君吗？`,
      );
      await tachyon.say_and_wait(
        `有什么想说的我洗耳恭听，毕竟接受败者的狂吠也是身为胜利者的————`,
      );
      await coffee.say_and_wait(`啧……`);
      await tachyon.say_and_wait(`哇啊！我的实验资料————烧………没烧起来？`);
      era.println();
      await era.printAndWait(
        `瞬间，速子的实验资料燃烧了起来，但正当速子急急忙忙冲上去想抢救资料时，火焰忽然消失了`,
      );
      era.println();
      await tachyon.say_and_wait(
        `……只有这次姑且承认……昨天速子同学确实，跑的不错……`,
      );
      await tachyon.say_and_wait(
        `虽然很不甘心……但……一不小心把你和『朋友』重叠了……`,
      );
      await coffee.say_and_wait(
        `朋友？哦？这个……很有意思啊！茶座，希望你还请务必仔细说说！`,
      );
      await tachyon.say_and_wait(`吵死了……走开……`);
      era.println();
      await era.printAndWait(
        `看着吵闹的两人，你换上了实验服，苦笑着加入这今后也会继续下去的日常`,
      );
    } else if (love > 50) {
      await era.printAndWait(`然而，当你到了实验室门前`);
      await era.printAndWait(`你听见了里面的对话声`);
      era.println();
      await tachyon.say_and_wait(
        `茶座……怎么办……豚鼠君他该不会，真的不来了吧……`,
      );
      await coffee.say_and_wait(`……关我什么事`);
      await tachyon.say_and_wait(
        `昨天我说了目标已经达成……他会不会因为这样就不来了……`,
      );
      await tachyon.say_and_wait(
        `说到底会不会其实什么三年以来累积的羁绊都是我自己的妄想，说不定他从头到尾都没有……都没有……`,
      );
      await coffee.say_and_wait(`……如果真的是那样的话，你要怎么办？`);
      await tachyon.say_and_wait(
        `……果然，那就得用药让他离不开我了啊，仔细想想这不是很不公平吗？`,
      );
      await tachyon.say_and_wait(
        `只有我离不开他，他离了我却一样能活的好好的，还是得尽快弄出点成瘾性高的药让他从此再也离不开我……`,
      );
      await tachyon.say_and_wait(
        `或者像小说里面那种蛊毒……要是不定时服用我做的解药就会发作……`,
      );
      await coffee.say_and_wait(`……真重啊`);
      // todo If 茶座爱慕值>50
      await coffee.say_and_wait(`但警告你，不准对我的训练员先生做那种事`);
      era.println();
      await era.printAndWait(`听到这有些背脊发凉的你连忙推了门进去`);
      era.println();
      era.printButton(`对不起！我睡过头了！`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `豚鼠君！………你在搞什么？这么慢，实验都开始多久了！`,
      );
      era.println();
      await era.printAndWait(
        `虽然板着脸装作严厉的样子，但速子身后那疯狂摇摆的尾巴却完全按耐不住`,
      );
      await era.printAndWait(
        `${tachyon.sex}似乎也注意到了般努力的压了几下，但还是压不住，于是转过头来，好似什么也没发生的继续念叨`,
      );
      era.println();
      await tachyon.say_and_wait(
        `昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！`,
      );
      await tachyon.say_and_wait(
        `只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！`,
      );
      era.println();
      await tachyon.say_and_wait(`……所以说，快点换好实验服过来帮忙！……好吗？`);
      era.println();
      await era.printAndWait(
        `看着想要装作严厉的虚张声势却又不安的望着你的速子`,
      );
      await era.printAndWait(`你忍不住上前，抱住了${tachyon.sex}`);
      era.println();
      await tachyon.say_and_wait(`！豚鼠君……！`);
      era.println();
      await era.printAndWait(
        `${tachyon.name}与${tachyon.sex}的实验动物，在三年后，还将迎来第二个，第三个三年，直到永久……`,
      );
      //todo 茶座爱慕值<50
      await coffee.say_and_wait(`……你们可以不要在我面前秀恩爱吗？`);
      era.println();
      await era.printAndWait(`却忘记了，房间里另一位正在忍受狗粮袭击的同房者`);
      // todo 茶座爱慕值>50
      await coffee.say_and_wait(`……别得寸进尺了，把训练员先生还我`);
      era.println();
      await era.printAndWait(`在两人的争夺下，你苦笑着加入了吵吵闹闹的日常`);
    }
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1 &&
    event_marks.plan_b === 1
  ) {
    await print_event_name(
      `有马纪念后·最强的${tachyon.get_uma_sex_title()} 最快的跑法`,
      tachyon,
    );
    era.println();
    await era.printAndWait(`一开始，${tachyon.name}只是在等待着`);
    await era.printAndWait(`等待比赛结束，等待豚鼠君给出他的回答`);
    era.println();
    await era.printAndWait(`${tachyon.sex}不能理解这场比赛到底有什么意义`);
    await era.printAndWait(`难道是为了让自己看清现在与茶座的差距吗？`);
    await era.printAndWait(
      `是嫌现在的自己还不够可悲吗？甚至不由得产生这种自暴自弃的想法`,
    );
    await era.printAndWait(`因此，${tachyon.sex}并没有仔细关注着赛场`);
    await era.printAndWait(`只是等待时间过去`);
    era.println();
    await say_by_passer_by(
      `解说`,
      `比赛开始！所有${tachyon.get_uma_sex_title()}稳定的出闸`,
    );
    era.println();
    await era.printAndWait(`最开始，是解说的声音勾起了${tachyon.sex}的好奇心`);
    await era.printAndWait(
      `哪怕不能奔跑，${tachyon.name}也还是对一切都具有着好奇`,
    );
    await era.printAndWait(`尤其对方是理论上自己应该知根知底的茶座`);
    era.println();
    await era.printAndWait(`随后，是违和`);
    await era.printAndWait(`其实违和感并非是从现在才有的`);
    await era.printAndWait(`从日本杯结束那时起就有这种感觉`);
    await era.printAndWait(
      `曼城茶座的跑法……似乎和最初${tachyon.sex}的跑法有些微小的不同点`,
    );
    await era.printAndWait(
      `如果说，自己是一直盯着茶座的话，或许根本发现不了这种不同，便是如此微小的不同`,
    );
    await era.printAndWait(
      `但对日本杯后便再也没有认真看过茶座奔跑的自己而言，哪怕只是一丝丝的改变，都是无比明显的`,
    );
    await era.printAndWait(`尤其……`);
    await era.printAndWait(`那虽然依旧是茶座自己的跑法，但是……`);
    await era.printAndWait(`细节部分……出闸的姿势……换气的方式……`);
    await era.printAndWait(
      `那些细节……是${tachyon.name}自己都未曾注意过的，自己特有的习惯`,
    );
    await era.printAndWait(`那是……`);
    era.println();
    era.printButton(
      `这是……融合了我所知道，最快，最强的两名${tachyon.get_uma_sex_title()}的跑法`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `令自己魂牵梦萦的那个人，不知何时已经站在了自己身旁`,
    );
    await era.printAndWait(
      `眼中的光，依旧闪烁，依旧盯着在赛场上奔跑的那名${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(`但是……`);
    era.println();
    await era.printAndWait(`他眼中的光，究竟为谁而明`);
    await era.printAndWait(`是为了${tachyon.name}，还是曼城茶座`);
    await era.printAndWait(
      `以前的自己想当然尔认为，既然自己已经无法登上赛场，那么看着的必然就是茶座`,
    );
    await era.printAndWait(`但是……`);
    era.printButton(
      `除此之外我也坚信，没有比这更绚烂，更灼目，更使人着迷的跑法了`,
      1,
    );
    await era.input();
    await say_by_passer_by(
      `解说`,
      `曼城茶座！超越了光速的漆黑幻影！称霸了年末的中山赛场的是曼城茶座！`,
    );
    era.println();
    await era.printAndWait(
      `恍惚下，自己仿佛看见了，${tachyon.name}与曼城茶座同时跨越终点线的瞬间`,
    );
    era.drawLine();
    await era.printAndWait(
      `为了实现那名${tachyon.get_teen_sex_title}能够超越朋友的梦想`,
    );
    await era.printAndWait(`为了让使自己魂牵梦萦的身影能够继续在眼前奔跑`);
    await era.printAndWait(
      `让最强的${tachyon.get_uma_sex_title()}与最快的速度结合`,
    );
    await era.printAndWait(`脑袋里想了许多应该在此时说出的帅气话语`);
    await era.printAndWait(`但在开口的瞬间……又被堵了回去`);
    await era.printAndWait(`啾……咕……啾咕……`);
    await tachyon.say_and_wait(`如此多人的观众席上，如此大胆的吻`);
    await era.printAndWait(
      `……如果不是周围的人都在关注赛场中央的茶座的话，绝对会引起又一波的声讨风波吧`,
    );
    await era.printAndWait(`某种意义上，也真不愧是${tachyon.sex}会做出的行为`);
    era.println();
    await era.printAndWait(
      `持续了不知道多久，久到你开始起自己的生命，以及静下心来的观众会发现你们二人的不对时，`,
    );
    await era.printAndWait(
      `${
        tachyon.sex
      }才总算想起了无论对人类还是${tachyon.get_uma_sex_title()}而言，最重要的氧气的存在`,
    );
    await era.printAndWait(
      `速子那不知是因缺氧，还是某些情绪上的原因而微红的脸庞，`,
    );
    await era.printAndWait(
      `以及被你爱着的，那闪烁着狂气光芒的暗红眼眸依然正对着你的脸`,
    );
    await era.printAndWait(`而后……`);
    await era.printAndWait(
      `这是你第一次看见，世界上竟然还有比速子的跑法更加闪耀的东西`,
    );
    await era.printAndWait(`那就是，此时速子脸上露出的笑容`);
    era.drawLine({ content: '回到特雷森学园后' });
    await coffee.say_and_wait(`……今天赢下有马的，是我没错吧`);
    await tachyon.say_and_wait(`那当然了，茶座，比赛很精彩哦`);
    await coffee.say_and_wait(
      `那么……可以说明一下，为什么速子同学却一副得意洋洋的样子黏在训练员先生身边吗？`,
    );
    era.println();
    await era.printAndWait(`从赛场回来后，速子便一直扒着自己不放`);
    await era.printAndWait(`现在也是，拉着你坐在沙发上后便一直抱着自己的左手`);
    await era.printAndWait(
      `除此之外，还一直用一种都是自己的功劳的神情得意的看着茶座`,
    );
    era.println();
    await tachyon.say_and_wait(`哼哼～～有什么不好嘛，有什么不好嘛`);
    // todo 茶座爱慕<75
    await era.printAndWait(
      `速子露出了恶代官的笑容，放在你身上的手还不安份的乱动着`,
    );
    await era.printAndWait(`然后……`);
    era.println();
    await tachyon.say_and_wait(`咕欸————`);
    era.println();
    await era.printAndWait(
      `忽然，速子仿佛被未知的无名力量击中脑袋一般，瞬间昏迷了过去`,
    );
    await coffee.say_and_wait(`……真是`);
    await coffee.say_and_wait(
      `这样总算能安静些了……那么，训练员先生，要来杯咖啡吗？`,
    );
    era.println();
    await era.printAndWait(`你微微露出苦笑，对茶座说了声“麻烦了”`);
    await era.printAndWait(`不过，单纯的咖啡不知为何此刻忽然觉得有些太苦`);
    await era.printAndWait(`在冬阳照射的训练员室中，总觉得现在的此刻`);
    await era.printAndWait(`更适合加入一些其他的东西……`);
    era.printButton(`……那个，要不要试试，鸳鸯咖啡？`, 1);
    await era.input();
    await era.printAndWait(
      `茶座看着你，先是有些恼怒，随后仿佛想到了什么，露出了无奈的表情`,
    );
    await coffee.say_and_wait(
      `……只有今天，而且一定要瞒着速子同学，不然${tachyon.sex}一定又会开始吵`,
    );
    await era.printAndWait(`喝了一口与咖啡混合的红茶`);
    await era.printAndWait(
      `咖啡的苦味和红茶的涩味淡了，但其香气却没有任何减少，反而更加突显出彼此的风味`,
    );
    await era.printAndWait(`不知为何，你感觉现在正是这个味道合适`);

    // todo If 茶座爱慕>75
    await era.printAndWait(`听见速子仿佛时代剧里的恶役一般口吻的话`);
    await era.printAndWait(`茶座先是全身颤抖`);
    await era.printAndWait(
      `正当你担心${tachyon.sex}会不会冲动下做出什么事的时候`,
    );
    await coffee.say_and_wait(`————那我也要`);
    era.println();
    await era.printAndWait(
      `仿佛赌气一般，茶座瞬间挤上了沙发，坐在了你的双腿中间`,
    );
    era.println();
    await tachyon.say_and_wait(`喂——茶座，这也太狡猾了！`);
    await coffee.say_and_wait(
      `……才不狡猾，再说……狡猾又有什么不对，今天的赢家明明是我……`,
    );
    await tachyon.say_and_wait(`可恶，我也要坐！`);
    era.println();
    await era.printAndWait(`看着像小孩一般争吵的两人，你不由得露出苦笑`);
    await era.printAndWait(`—————不知道为什么，忽然想喝鸳鸯咖啡了`);
    await coffee.say_and_wait(
      `……对了，训练员先生……关于速子同学比赛前说的，昨天晚上出门的事情……可以请您之后好好说清楚吗？`,
    );
    await era.printAndWait(`听见茶座借着地理优势在你耳边悄悄说出的话`);
    await era.printAndWait(`你的苦笑僵在了脸上`);
  }
};

handlers[event_hooks.crazy_fan_end] = async () => {
  const event_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  me.name = '豚鼠';
  if (era.get('flag:强制BE') === 32) {
    await print_event_name(`魔女之药`, tachyon);
    await era.printAndWait(`让速子自己将药喝下去`);
    era.println();
    await era.printAndWait(`你忽然觉得累了`);
    era.println();
    await era.printAndWait(`你把药剂塞回速子的手上`);
    era.println();
    await tachyon.say_and_wait(`…………豚鼠君？`);
    era.printButton(`我累了，要喝你自己喝吧`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`是从什么时候开始的？原因是什么？`);
    await era.printAndWait(
      `或许是你再也受不了${
        tachyon.name
      }这名${tachyon.get_uma_sex_title()}的任性了`,
    );
    await era.printAndWait(`或许是你已经对${tachyon.name}失去耐心了`);
    await era.printAndWait(`又或许你觉得这只是${tachyon.sex}又一次的玩笑而已`);
    await era.printAndWait(
      `说到底，因为${tachyon.sex}的原因就想让自己去死，这个家伙在开什么玩笑啊`,
    );
    era.println();
    await era.printAndWait(`总之，你把药推还给了${tachyon.sex}`);
    await era.printAndWait(`你不在乎这种药是不是真的能致人于死地`);
    await era.printAndWait(`不，要是真的制人于死地那或许也不错吧`);
    await era.printAndWait(`你的内心甚至产生了如此阴暗的想法`);
    era.println();
    await tachyon.say_and_wait(`…………啊，这样啊……我明白了`);
    era.println();
    await era.printAndWait(`速子没有做出什么过于激烈的反应`);
    await era.printAndWait(
      `比起往常的${tachyon.sex}，可说是异常的举止反而让你提起了点兴致`,
    );
    await era.printAndWait(
      `你看见终于抬起了头的${tachyon.sex}，露出了一张释怀、解脱般的笑容`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……说的也是，解决这个问题的答案，一直都不只两个啊`,
    );
    await tachyon.say_and_wait(
      `在生与死之外，还存在着第三个选项，也就是让出题者去死，对吧？`,
    );
    era.println();
    await era.printAndWait(`你忍不住皱起了眉头`);
    await era.printAndWait(`废话好多，到底喝不喝`);
    await era.printAndWait(`……不，说到底这个一向习惯灌别人药的女人`);
    await era.printAndWait(`根本就没想过自己喝下药剂吧`);
    await era.printAndWait(`你叹了口气，感叹这又一场的闹剧，准备离开实验室`);
    era.drawLine();
    await era.printAndWait(`然后，在你准备转身离开的瞬间`);
    era.println();
    await tachyon.say_and_wait(`咕呜………！`);
    era.println();
    await era.printAndWait(`你被强吻了`);
    await era.printAndWait(
      `你想要挣扎，但人类终究还是敌不过${tachyon.get_uma_sex_title()}的力量，即便是被药物改造过多次的你也一样`,
    );
    await era.printAndWait(
      `${tachyon.sex}的舌头撬开了你的唇，在你的口中不停搅拌，引导`,
    );
    await era.printAndWait(
      `${tachyon.sex}的舌头留恋的舐过你的齿间、你的舌尖、你的龈内————然而，这些都不是${tachyon.sex}的目标`,
    );
    await era.printAndWait(
      `${tachyon.sex}的目标是————将口中尚未咽下的，那足以使人『消失』的药物，引导至你的口中`,
    );
    era.println();
    await me.say_and_wait(`咕呜……！呜呜呜………！！！`);
    era.println();
    await era.printAndWait(`你拼命挣扎，扭动身躯，却无法阻止对方的行为`);
    await era.printAndWait(
      `在你徒劳无功的挣扎下，药剂还是被你们两人平分干净了`,
    );
    era.println();
    await me.say_and_wait(`该死……！`);
    era.println();
    await era.printAndWait(`你忍不住大骂出声`);
    await era.printAndWait(`这个女人在想什么，要死还要拖一个垫背的吗`);
    await era.printAndWait(
      `你恶狠狠的瞪着${tachyon.sex}，马上就要破口大骂……却在话语要吐出的瞬间停住了`,
    );
    era.println();
    era.println();
    era.println();
    await era.printAndWait(`${tachyon.name}哭了`);
    await era.printAndWait(
      `不……准确来讲，${tachyon.sex}正流着泪水，也很努力的想要挤出笑容，但最终脸上露出的，却是张比哭还要难看的笑容`,
    );
    await era.printAndWait(
      `这是你认识${tachyon.sex}以来，第一次看到${tachyon.sex}如此狼狈的模样`,
    );
    era.println();
    await tachyon.say_and_wait(`哈……哈哈哈，豚鼠君，抱歉，我骗了你`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}试图装出若无其事的口气来，但哽咽的声音却使得这一行为变得无比困难`,
    );
    era.println();
    await tachyon.say_and_wait(
      `这个啊，才不是什么毒药…………相反的，这是个『重新开始』的药哦`,
    );
    era.println();
    await era.printAndWait(
      `虽然${tachyon.sex}这么说，但${tachyon.sex}依然举着试管的那只手，现在却在不住的颤抖着，使得你无法信任${tachyon.sex}的话语`,
    );
    era.println();
    await era.printAndWait(`…………不相信对吧？没关系，等到药效发作就知道了`);
    era.println();
    await era.printAndWait(`开什么玩笑……！`);
    await era.printAndWait(`你想这么喊出声，却发现自己的身体已经变得动弹不得`);
    // todo 如果此时已经经历过情人节事件，还未经历则跳过下面一段
    await era.printAndWait(
      `然后，在你口中残存的药剂在此时忽然改变了味道，原来喝下去无色无味的药，现在的味道……`,
    );
    // todo 如果${tachyon.name}此时未有过接吻经验
    era.println();
    await tachyon.say_and_wait(`没想到，初吻的味道竟然是猪肉盖饭的味道啊`);
    // todo 如果${tachyon.name}此时有过接吻经验
    await tachyon.say_and_wait(
      `没想到，最后一个吻的味道竟然是猪肉盖饭的味道啊`,
    );

    await era.printAndWait(`你想起了情人节时收到的巧克力`);
    await era.printAndWait(
      `从那时开始，这名${tachyon.get_uma_sex_title()}就不断的在用这些奇怪的药物折磨着自己`,
    );
    await era.printAndWait(`每次都看着自己喝下药物的反应哈哈大笑来取乐`);
    await era.printAndWait(`事到如今，不想再忍耐这一切的自己又有什么错了？`);

    await era.printAndWait(
      `确实，在一开始你确实对${
        tachyon.name
      }这名${tachyon.get_uma_sex_title()}的跑法，及${
        tachyon.sex
      }的梦想感到有趣`,
    );
    await era.printAndWait(
      `确实，你曾经真心希望能够帮助${tachyon.sex}，守护${tachyon.sex}，直到${tachyon.sex}完成梦想为止`,
    );
    await era.printAndWait(`但是，你已经受够了`);
    await era.printAndWait(
      `对${tachyon.sex}的愤怒、不满、沮丧、厌恶堆积起来的重量，已经超越了天平另一端对${tachyon.sex}的期望、喜爱、憧憬`,
    );
    era.println();
    await era.printAndWait(
      `现在的你只是希望能够尽快摆脱这名${tachyon.get_uma_sex_title()}，结果还得被灌这样的毒药，`,
    );
    await era.printAndWait(`我可没功夫跟你这种家伙玩罗密欧与朱丽叶的游戏啊！`);
    await era.printAndWait(
      `但说不出话的你只能默默的听着速子说完，最起码，用恶毒的视线盯着速子，作为发泄不满的管道`,
    );
    era.println();
    await tachyon.say_and_wait(`说实话，我真的很害怕`);
    await tachyon.say_and_wait(
      `喜欢一个人，却不知道对方是不是喜欢自己的感觉真的，好可怕`,
    );
    await tachyon.say_and_wait(
      `比任何的实验结果都还要让人心潮澎湃，比任何的比赛结果都还要使人心跳加速`,
    );
    await tachyon.say_and_wait(`说实话，我真的很害怕`);
    await tachyon.say_and_wait(
      `要是对方喜欢的不是自己，而只是自己所有的『某些东西』，`,
    );
    await tachyon.say_and_wait(
      `那该怎么办。要是对方眼中看到的，只是自己的『梦想』，而非自己这个人怎么办`,
    );
    await tachyon.say_and_wait(
      `我啊，一直都在担心着这些……却忘记了，最重要的事情，最恐怖的可能性`,
    );
    era.println();
    await era.printAndWait(
      `${tachyon.name}露出了嗤笑，嘲笑着太过天真、乐观的自己`,
    );
    era.println();
    await tachyon.say_and_wait(
      `对方，根本就不喜欢自己，不喜欢自己的一切，包括但不限于梦想的可能性`,
    );
    era.println();
    await era.printAndWait(
      `终于，${tachyon.name}脸上的笑容——如果那能够称为笑容的话——崩溃了`,
    );
    await era.printAndWait(`化为了彻底的哭脸`);
    era.println();
    await tachyon.say_and_wait(
      `原来……这就是失恋的感觉啊……呜……好难受……好可怕……心好像要碎了一样……`,
    );
    await tachyon.say_and_wait(`原来是这样啊……我被甩了啊……好痛……我的心好痛……`);
    await tachyon.say_and_wait(
      `为什么……为什么明明只是不被一个人喜欢……为什么心会这么难受……呜呜呜……我不要……`,
    );
    await tachyon.say_and_wait(
      `不要啊……早知道会这么痛的话我就不要恋爱了啊……下一次，下一次……不要了……再也不要了……好痛……`,
    );
    await tachyon.say_and_wait(
      `豚鼠君……豚鼠君……你在哪里……为什么我找不到你……你去哪里了……`,
    );
    await tachyon.say_and_wait(
      `为什么我这么痛苦的时候你却不在我身边……豚鼠君……我再也不拿你做实验了……都是我不好……所以……所以回来好不好……`,
    );
    await tachyon.say_and_wait(
      `这里好可怕……带我回去，回去我们的实验室……我再也不会任性了……`,
    );
    await tachyon.say_and_wait(
      `衣服会自己洗……便当盒吃完不会再到处乱丢了……豚鼠君……豚鼠君…………`,
    );
    era.println();
    await era.printAndWait(
      `你看着${tachyon.name}，从中途开始就彷佛忘掉了自己是谁一般`,
    );
    await era.printAndWait(
      `明明眼中在看着自己，却还在一直喊着豚鼠君，彷佛在寻找不属于此处的某人一样`,
    );
    await era.printAndWait(`不……豚鼠君……？`);
    await era.printAndWait(`这是谁？你明明从来没听过这个名字不是吗？`);
    await era.printAndWait(
      `眼前的这名${tachyon.get_uma_sex_title()}又是谁，自己认识${
        tachyon.sex
      }吗`,
    );
    era.println();
    await era.printAndWait(`头痛，头痛，头痛欲裂`);
    await era.printAndWait(`越是思考，忘掉的就越多`);
    era.println();
    await era.printAndWait(
      `终于，在一声声呼喊着豚鼠君的悲鸣声中，你的意识陷入了深渊`,
    );
    era.drawLine();
    era.println();
    await tachyon.say_and_wait(`……醒`);
    await tachyon.say_and_wait(`………醒醒`);
    era.println();
    await era.printAndWait(`你醒来了`);
    await era.printAndWait(
      `被某个声音所唤醒的你，发现自己睁开眼睛看见的是一个陌生的天花板`,
    );
    era.printButton(`这里是哪里？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`……这里是我的实验室`);
    era.println();
    await era.printAndWait(`你看向声音传来的方向`);
    await era.printAndWait(
      `眼前是一名栗毛的${tachyon.get_uma_sex_title()}，利落的短发以及身上的白大褂说明了${
        tachyon.sex
      }研究者的身份，`,
    );
    await era.printAndWait(
      `${tachyon.sex}用一种审视的眼光看着你，不知为何，你感到一股毛骨悚然`,
    );
    era.printButton(`你是谁？`, 1);
    await era.input();
    await era.printAndWait(`栗毛${tachyon.get_uma_sex_title()}说道`);
    await era.printAndWait(`这时你才发现自己还躺在地板上，连忙爬了起来`);
    era.printButton(`我是(玩家名)，是一名训练员`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………哦？那么训练员君，你躺在这里又有何贵干`);
    era.println();
    await era.printAndWait(
      `你试着回想在躺在这里前你究竟在做什么，却怎么也想不出来`,
    );
    era.println();
    await tachyon.say_and_wait(
      `…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……`,
    );
    await era.printAndWait(
      `算了，不提这个，总之，我是${tachyon.name}，训练员君，请多指教`,
    );
    await era.printAndWait(`${tachyon.name}`);
    await era.printAndWait(
      `听起来真是个奇怪的名字……嘛，毕竟${tachyon.get_uma_sex_title()}的名字大多都是这样的，歧视他人的姓名也不好`,
    );
    await era.printAndWait(
      `但不知为何，有种直觉在告诉你，和眼前的这名${tachyon.get_uma_sex_title()}要保持距离`,
    );
    era.println();
    era.printButton(
      `那么，今天就先到这里吧，非常抱歉闯进了你的实验室，日后我会再来致上歉意，${tachyon.name}同学`,
      1,
    );
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………不，不必了，说到底两人同时失忆这种事情……`);
    await tachyon.say_and_wait(
      `算了，就这样吧，后面也不用特别过来了，训练员君`,
    );
    era.println();
    await era.printAndWait(`于是，你离开了${tachyon.name}的实验室`);
    await era.printAndWait(`在离开门之前，你忽然回过了头`);
    era.println();
    await tachyon.say_and_wait(`嗯？训练员君，还有什么事吗？`);
    era.println();
    await era.printAndWait(
      `你有种预感，要是自己踏出了这扇门，大概，就再也不会与这名${tachyon.get_uma_sex_title()}有所交集了吧`,
    );
    era.println();
    await me.say_and_wait(`没什么，是我多心了吧`);
    era.println();
    await era.printAndWait(`你走出了实验室的门，这次没有丝毫犹豫`);
  } else if (love > 75 && event_marks.plan_b === 0) {
    await print_event_name(`停滞的钟摆`, tachyon);
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`求求你……醒过来吧`);
    era.drawLine();
    await era.printAndWait(`我是谁`);
    era.println();
    await tachyon.say_and_wait(`你是……豚鼠君，是我的专属训练员`);
    era.println();
    await era.printAndWait(`……你是谁？`);
    era.println();
    await tachyon.say_and_wait(
      `……我是${tachyon.name}，是你的负责${tachyon.get_uma_sex_title()}`,
    );
    await me.say_and_wait(`…………`);
    era.println();
    await tachyon.say_and_wait(`……你，还记得吗？`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(
      `不……不要不说话啊，你还记得我吧？记得吗？这里是特雷森学园里我们的实验室，那边是茶座的地盘……`,
    );
    await me.say_and_wait(`抱歉……我真的不记得了`);
    era.println();
    await tachyon.say_and_wait(`豚……`);
    era.printButton(`——当然，是骗你的了！`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………欸？`);
    era.printButton(`你在想什么，我怎么可能会把速子忘掉呢？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    era.printButton(`……欸？速子？`, 1);
    await era.input();
    await era.printAndWait(`速子忽然默声不语，低下头来`);
    await era.printAndWait(`忽然，速子压住了你的身体`);
    era.println();
    await tachyon.say_and_wait(`你这家伙！你知道我有多担心吗！`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}没有抬起头，但是，从地板上溅落的水渍能看出————${tachyon.sex}在哭`,
    );
    era.printButton(`速子？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `不要……不要再这样骗我了，求求你，好不好，真的，好可怕……不想要失去你……`,
    );
    era.printButton(`…………好的，对不起`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`对不起`);
    await era.printAndWait(`真的对不起`);
    await era.printAndWait(`虽然不知道发生了什么，但我又欺骗${tachyon.sex}了`);
    await era.printAndWait(
      `欺骗了———眼前这名，叫做${
        tachyon.name
      }的陌生${tachyon.get_uma_sex_title()}`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君……你还记得，之前发生什么事了吗？`);
    era.println();
    await era.printAndWait(`这个……答应应该没关系吧`);
    await era.printAndWait(`你摇了摇头`);
    await era.printAndWait(`说实话，什么也不知道`);
    await era.printAndWait(
      `这里是哪里，眼前的${tachyon.get_teen_sex_title}是谁`,
    );
    await era.printAndWait(`一切的一切，都不知道`);
    await era.printAndWait(`但只有一点，是埋藏在心中不变的`);
    await era.printAndWait(`—————不想让${tachyon.sex}伤心`);
    await era.printAndWait(`—————不想让${tachyon.sex}难过`);
    await era.printAndWait(`为此，哪怕要用谎言来掩盖过去都没关系`);
    era.println();
    await tachyon.say_and_wait(
      `……没什么，那就算了，反正，你现在醒过来了……这样，就好了`,
    );
    era.println();
    await era.printAndWait(`看起来，${tachyon.sex}似乎没有要解释清楚的意思`);
    await era.printAndWait(`那就没办法了`);
    era.println();
    era.printButton(`对了，现在是————`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`豚鼠君，你应该也累了吧，明天再聊吧`);
    era.println();
    await era.printAndWait(
      `正当自己想问现在时间时，被${tachyon.sex}紧张的转移了话题`,
    );
    await era.printAndWait(`虽然没有过往记忆，但身为人的常识还是有的`);
    await era.printAndWait(
      `从${tachyon.sex}的表情能够看出${tachyon.sex}不想回答这个问题`,
    );
    await era.printAndWait(`……那就算了吧，不问了`);
    await era.printAndWait(
      `如果，这个问题会让${tachyon.sex}露出那种惊慌的表情的话`,
    );
    era.drawLine();
    await tachyon.say_and_wait(
      `好了，豚鼠君，既然你已经醒过来了，那么首先要做的第一件事是什么，你知道吧？`,
    );
    await me.say_and_wait(`是……？`);
    await tachyon.say_and_wait(
      `当然是吃饭了！饭！肚子快饿死了，豚鼠君，快去做点吃的来！`,
    );
    await me.say_and_wait(`…………好`);
    era.println();
    await me.say_and_wait(`感觉……怎么样？`);
    await tachyon.say_and_wait(`………嗯`);
    await tachyon.say_and_wait(`咕呃……好难吃……`);
    await tachyon.say_and_wait(`怎么做的这么难吃……豚鼠君，你……`);
    await me.say_and_wait(`！？`);
    await tachyon.say_and_wait(`一定……是身体还没完全恢复吧，毕竟躺了那么久`);
    await tachyon.say_and_wait(`这次就放你一马，但之后要赶快恢复过来啊`);
    await me.say_and_wait(`……啊哈哈，抱歉啦`);
    era.drawLine();
    await tachyon.say_and_wait(`那么……接下来，先去操场上训练吧`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(`………豚鼠君？`);
    await me.say_and_wait(`啊，怎么……`);
    await tachyon.say_and_wait(
      `你居然一点都没感到讶异吗？我居然，主动跑去训练了哦？`,
    );
    await me.say_and_wait(`……欸`);
    await me.say_and_wait(`……我下意识以为你说的是又要偷懒了`);
    await me.say_and_wait(`速子你居然真的要去训练了吗！？`);
    await tachyon.say_and_wait(`不，这又太夸张了`);
    await me.say_and_wait(`啊哈哈……这样吗`);
    era.drawLine();
    await me.say_and_wait(`商店街……？`);
    await tachyon.say_and_wait(
      `是啊，毕竟我的实验器具有点不够了，陪我去逛逛吧`,
    );
    await me.say_and_wait(`啊，好，那当然`);
    await tachyon.say_and_wait(`豚鼠君？你在往哪走？商店街不在那边啊`);
    await me.say_and_wait(`……啊，没，没什么，只是忽然想起有东西要拿`);
    await me.say_and_wait(`不过仔细想想其实也没什么特别重要的啊哈哈哈`);
    await tachyon.say_and_wait(`……真是奇怪`);
    era.drawLine();
    await tachyon.say_and_wait(`哼～哼哼哼`);
    await me.say_and_wait(`……那个，速子？`);
    await tachyon.say_and_wait(`嗯？`);
    await me.say_and_wait(`为什么……商店街的人看你的眼神总觉得怪怪的`);
    await tachyon.say_and_wait(`……有，有这回事吗？只是你的错觉吧，豚鼠君`);
    await me.say_and_wait(`不，明明就有，好像在看什么危险人物……`);
    await tachyon.say_and_wait(`是你看错了`);
    await me.say_and_wait(`可是`);
    await tachyon.say_and_wait(`你看错了`);
    await me.say_and_wait(`……好吧`);
    era.drawLine();
    await tachyon.say_and_wait(
      `……我说，豚鼠君，你现在最好，小心的，把手上的东西放下来`,
    );
    await me.say_and_wait(`呃……怎么了吗？`);
    await tachyon.say_and_wait(`还怎么了，你忘记那是茶座的东西了吗？`);
    await me.say_and_wait(`欸……不过，稍微碰一下应该也不会有事吧`);
    await tachyon.say_and_wait(
      `怎么可能！上次我只是稍微碰到一下我的研究资料就瞬间烧起来了！`,
    );
    await me.say_and_wait(`可是……`);
    await tachyon.say_and_wait(`………`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(
      `那我也试试………哇啊啊！着火了！快点抢救资料啊啊啊！`,
    );
    era.drawLine();
    await tachyon.say_and_wait(`喂喂，豚鼠君`);
    await me.say_and_wait(`嗯？速子，怎么了？`);
    await tachyon.say_and_wait(`我说，你醒过来之后，都没和我亲热过了吧？`);
    await me.say_and_wait(`……欸？`);
    await tachyon.say_and_wait(
      `把恋人这样抛着一直不管不顾，就算前面当成你还没恢复……现在身体检查也都没什么问题，也该好好你侬我侬一下了吧？`,
    );
    await me.say_and_wait(`不，等一下，速子还是学生吧`);
    await tachyon.say_and_wait(`是啊，有什么问题吗？`);
    await me.say_and_wait(`问题很大吧！？伦理之类……`);
    await tachyon.say_and_wait(`……怎么忽然这么激动，明明当初你都那么主动的♡`);
    await me.say_and_wait(`…以前的我这么人渣吗`);
    await tachyon.say_and_wait(`？豚鼠君，你刚刚说什么了吗？`);
    await me.say_and_wait(`……不，什么也没有`);
    await tachyon.say_and_wait(`那就快点，来好好亲热吧♡`);
    era.drawLine();
    await tachyon.say_and_wait(
      `喔喔，这次这便当做的不错啊！豚鼠君！总算恢复你以前的水准了！`,
    );
    await me.say_and_wait(`是……是吗？`);
    await tachyon.say_and_wait(`你那么拼命复健果然是有成效的！`);
    await me.say_and_wait(`是啊…………还有那些食谱书也是`);
    await tachyon.say_and_wait(
      `真是……好久没吃到了啊，这种味道…………真的，好久………`,
    );
    await me.say_and_wait(`……速子，我可以问一个问题吗？`);
    await tachyon.say_and_wait(`嗯？`);
    await me.say_and_wait(`我到底……昏过去了多久`);
    await tachyon.say_and_wait(`……………`);
    await tachyon.say_and_wait(`……………年`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(`……豚鼠君？`);
    await me.say_and_wait(`对不起……这么多年里，你……一定很寂寞吧`);
    await tachyon.say_and_wait(`！`);
    await me.say_and_wait(`……我已经回来了，已经可以了，可以不必再……`);
    await tachyon.say_and_wait(`……`);
    await tachyon.say_and_wait(`豚鼠君……我真的……真的，差点就支撑不下去了……`);
    await tachyon.say_and_wait(
      `要是……你醒不过来……要是……完全把我忘了……要是……要是……`,
    );
    await tachyon.say_and_wait(
      `真的……好可怕……像是一场恶梦……持续了许多年的恶梦……`,
    );
    await me.say_and_wait(`……………`);
    await tachyon.say_and_wait(`但是……你回来了，你还是回来了`);
    await tachyon.say_and_wait(`答应我……这次，不要再离开我了……好吗？`);
    await me.say_and_wait(`……嗯，我不会再离开了`);
    era.drawLine();
    await me.say_and_wait(`所以……那天究竟是怎么……`);
    await tachyon.say_and_wait(
      `……那天，你在商店街……我只是，离开了一下，结果有个……自称是粉丝的人，冲上去……然后……`,
    );
    await tachyon.say_and_wait(`……要是那个时候，我能更快一点，`);
    await tachyon.say_and_wait(`不，要是我一直留在你身边的话……`);
    await tachyon.say_and_wait(`绝对，绝对不会发生那种事……对不起……`);
    await me.say_and_wait(`没关系……毕竟，现在已经没事了，不是吗？`);
    await tachyon.say_and_wait(
      `但是……中间你的人生……有那么多年都…………你不会恨我吗？`,
    );
    await tachyon.say_and_wait(
      `如果不是因为我……如果不是因为负责了我……你可能，根本就不会遭受到这种事`,
    );
    await me.say_and_wait(`为什么我会恨你呢？`);
    await me.say_and_wait(`明明不是速子害的……而且，速子还努力的把我抢救了回来`);
    await me.say_and_wait(`感谢你都来不及了，怎么会怨恨`);
    await tachyon.say_and_wait(`…………也是啊，毕竟是你，肯定会说这种话的吧`);
    await me.say_and_wait(`？什么意思`);
    await tachyon.say_and_wait(`不……没什么`);
    era.drawLine();
    await era.printAndWait(`就这样`);
    await era.printAndWait(
      `${tachyon.name}与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点`,
    );
    await era.printAndWait(`训练场、赛场、河滨、神社`);
    await era.printAndWait(`为了回味过去，为了让在多年前停下的时间继续走动`);
    await era.printAndWait(`或许，中间失去的岁月无法弥补`);
    await era.printAndWait(`但他们依然努力创造出了，独属他们的崭新人生`);
    era.println();
    await tachyon.say_and_wait(`……这样的故事结尾，你满意吗？`);
    era.println();
    await me.say_and_wait(`……嗯，很好哦`);
    era.println();
    await me.say_and_wait(`不用了，只要，这样就好了`, true);
    await me.say_and_wait(`我……就要死了啊`, true);
    await tachyon.say_and_wait(`…………`);
    await me.say_and_wait(`速子……谢谢你`, true);
    await tachyon.say_and_wait(`你答应过我的……不会再离开我了，你答应过的`);
    era.println();
    await era.printAndWait(`……对不起`);
    await me.say_and_wait(`请当我，又欺骗了你一次吧`, true);
    await era.printAndWait(`这段日子里，我过的很幸福`);
    await me.say_and_wait(`但是，这些幸福……不应是我的，而是『豚鼠君』的`, true);
    await era.printAndWait(`认识了速子……是我人生中，最美好的事`);
    await me.say_and_wait(`所以，已经不想再欺骗下去了`, true);
    await era.printAndWait(`所以，很抱歉`);
    await me.say_and_wait(`所以，对不起`, true);
    await era.printAndWait(`${tachyon.name}和豚鼠君的故事……就要在这里结束了`);
    await tachyon.say_and_wait(`如果，你希望的话……`);
    era.println();
    await era.printAndWait(`……对不起`);
    await era.printAndWait(`但我，不希望再继续拌着你的脚了`);
    await era.printAndWait(`就让豚鼠君在这里结束吧`);
    era.println();
    await era.printAndWait(`抱歉，速子，我真的困了……可以了吗？`);
    await tachyon.say_and_wait(`……是啊，好好睡吧，我会陪在你身边的`);
    era.drawLine();
    await era.printAndWait(`豚鼠君安详的闭上了眼睛`);
    await era.printAndWait(`${tachyon.name}没有哭泣，因为……已经不是第一次了`);
    era.println();
    await era.printAndWait(`与豚鼠君的分离`);
    await era.printAndWait(`第一次，是那天在商店街`);
    await era.printAndWait(`要是自己没有离开的话`);
    await era.printAndWait(`要是有强硬的把他留在身边的话`);
    await era.printAndWait(`要是……`);
    await era.printAndWait(`没有要是`);
    era.println();
    await era.printAndWait(`哪怕把凶手挫骨扬灰`);
    await era.printAndWait(`哪怕在商店街，自己像个疯子一样乱冲乱闯`);
    await era.printAndWait(`他也无法回来`);
    await era.printAndWait(`急救的措施更是无法填补他腹腔流出的血液`);
    era.println();
    await tachyon.say_and_wait(
      `明明都已经欺骗了那么久了……再骗我一次又有什么关系……`,
    );
    era.println();
    await era.printAndWait(`从一开始，就已经知道了`);
    await era.printAndWait(`是他，也不是他`);
    await era.printAndWait(
      `虽然努力伪装起来了，但失去记忆的人脸上那种茫然绝不是简单就能被隐藏起来的`,
    );
    await era.printAndWait(`更何况……在那之后的谎言，又是那么的蹩脚`);
    era.println();
    await era.printAndWait(`但是……${tachyon.name}不在乎`);
    await era.printAndWait(`只要是他就好`);
    await era.printAndWait(`只要能够活下来，活下去就好`);
    await era.printAndWait(`没有记忆？那又有什么关系`);
    await era.printAndWait(
      `只要他能继续下去，${tachyon.name}就能甘心被欺骗一辈子`,
    );
    await era.printAndWait(`……但是`);
    await era.printAndWait(`还是一样，哪怕『这次』，他欺骗了自己整整一辈子`);
    await era.printAndWait(
      `也还是不愿意，在最后的最后，再欺骗${tachyon.name}一次`,
    );
    era.println();
    await era.printAndWait(`喝了口放在床边的红茶`);
    await era.printAndWait(`自己泡的红茶，和他泡的理论成分完全一样`);
    await era.printAndWait(`毕竟，已经自己泡了这么多年`);
    await era.printAndWait(`能够琢磨的，能够更改的，都已经研究到了最好`);
    await era.printAndWait(`但是，味道不一样`);
    await era.printAndWait(`不可能一样，永远无法一样`);
    await era.printAndWait(`今天的红茶，永远胜不过昨天的味道`);
    era.println();
    await tachyon.say_and_wait(`————那么，该开始下一次实验了`);
    era.drawLine({ content: '特雷森学院的地下室' });
    await tachyon.say_and_wait(`上次来这里……是什么时候了`);
    era.println();
    await era.printAndWait(`三个月？五个月？还是……`);
    await era.printAndWait(`『这次』又跟豚鼠君度过了多长的时间？`);
    era.println();
    await tachyon.say_and_wait(`算了，不重要了`);
    era.println();
    await era.printAndWait(`打开灯`);
    await era.printAndWait(`在眼睛慢慢适应亮光后`);
    await era.printAndWait(`眼前出现的，是数以千计的营养槽`);
    era.println();
    await era.printAndWait(`啊啊，要是让他知道的话，他绝对不会原谅我吧`);
    await era.printAndWait(`但是……他说了，不会怨恨我`);
    await era.printAndWait(`所以，就算默认了`);
    era.println();
    await tachyon.say_and_wait(
      `第五十七次，记忆没有恢复倾向，身体无异状，存活时间五个月……`,
    );
    era.println();
    await era.printAndWait(`从他离开那天开始才启动的计画`);
    await era.printAndWait(`已经无数次咒骂过自己`);
    await era.printAndWait(`为什么如此晚才想到`);
    await era.printAndWait(
      `已经被泡沫般的幸福麻痹到忘记研究者最基本的未雨绸缪了吗？`,
    );
    await era.printAndWait(`所以才会落得如此下场`);
    era.println();
    await era.printAndWait(
      `只能一点一滴，像堆沙堡一般，将他的身体重新拼凑而成`,
    );
    await era.printAndWait(
      `但，哪怕一切都拼凑起来了，也无法将无形的东西重新塑成`,
    );
    await era.printAndWait(`人体中蕴含最多秘密的大脑————记忆`);
    await era.printAndWait(
      `连一开始都不知道到底存在与否的东西，到底又能怎么重塑`,
    );
    await era.printAndWait(`只能像这样`);
    await era.printAndWait(`一次又一次的实验，一次又一次的唤醒`);
    await era.printAndWait(`一次又一次的……等待着奇迹`);
    era.println();
    await tachyon.say_and_wait(`失敗主因，呼吸衰竭伴随肺性脑病……生存意愿，无`);
    era.println();
    await era.printAndWait(`凡人的捏泥土游戏，大概是永远也及不上女神大人的`);
    await era.printAndWait(`所以，每次塑造出的他总是这样`);
    await era.printAndWait(`至多半年，至少……两周`);
    await era.printAndWait(`只要到了时间，总会因为各式各样的原因而陷入永眠`);
    await era.printAndWait(`……当然`);
    await era.printAndWait(`这些疾病，再怎么说，依然是常人范围`);
    await era.printAndWait(`凭借着${tachyon.name}的研究成果`);
    await era.printAndWait(
      `要续命的话，多活上三到五年绝对不是问题，甚至……还能更久`,
    );
    await era.printAndWait(
      `只要愿意，可以有一个三到五年，就能有第二个，第三个，第四个，直到永久`,
    );
    era.println();
    await tachyon.say_and_wait(`他还是……没有说`);
    era.println();
    await era.printAndWait(`无论重复多少次`);
    await era.printAndWait(`无论怎么对身体进行改动`);
    await era.printAndWait(`最后的最后，他说的总是大同小异`);
    era.println();
    await tachyon.say_and_wait(`已经结束了`);
    await tachyon.say_and_wait(`已经满足了`);
    era.println();
    await tachyon.say_and_wait(`开什么玩笑……开什么玩笑！`);
    await tachyon.say_and_wait(
      `谁允许你擅自满足了！给我说啊！对我说啊！说想要活下去！说想要继续和我生活下去啊！`,
    );
    await tachyon.say_and_wait(`欺骗我也没关系，没有记忆也没关系，`);
    await tachyon.say_and_wait(
      `要花一辈子找回记忆也没关系，说啊……为什么不说……为什么……要留我一个人……`,
    );
    era.println();
    await era.printAndWait(
      `如果，他是因为憎恨，憎恨害自己失去性命的${tachyon.name}，因此宁愿死也不愿意与${tachyon.name}一起生活，那都能接受`,
    );
    await era.printAndWait(
      `如果真的是这样，那么${tachyon.name}会不说二话的离开他的生活，只进行最低程度的医疗接触`,
    );
    await era.printAndWait(
      `只要能在最后，有那么一点迟疑，或者表露出那么一点对${tachyon.name}的嫌弃，`,
    );
    await era.printAndWait(`那么哪怕心跳停止，自己都能在最后关头将他抢救回来`);
    await era.printAndWait(`但是……五十七次里`);
    await era.printAndWait(`这种事，一次也没发生过`);
    era.println();
    await era.printAndWait(`不想拖累自己`);
    await era.printAndWait(`不想束缚自己`);
    await era.printAndWait(`哪怕失去一切，包括生命，包括记忆`);
    await era.printAndWait(
      `五十七次里，每一次，他直到最后想的都是${tachyon.name}的可能性`,
    );
    era.println();
    await era.printAndWait(`但是，${tachyon.name}的可能性，已经结束了`);
    await era.printAndWait(`${tachyon.name}的时间，已经停止走动`);
    await era.printAndWait(`那杯红茶的味道从那刻开始就已经定格`);
    era.println();
    await tachyon.say_and_wait(`第五十八次，开始`);
    era.println();
    await era.printAndWait(
      `随着培养槽将营养液排干，在培养槽中的人影被释放出来`,
    );
    era.println();
    await era.printAndWait(`不能让他结束，不会让他结束`);
    await era.printAndWait(`${tachyon.name}与豚鼠君的故事，必须永远继续下去`);
    era.println();
    await era.printAndWait(
      `于是，将过去束缚，也被束缚在过去的科学家，开始了新一轮的实验`,
    );
  } else if (love > 75 && event_marks.plan_b === 1) {
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`醒醒`);
    await tachyon.say_and_wait(`求求你……醒过来吧`);
    era.drawLine();
    await era.printAndWait(`我是谁`);
    era.println();
    await tachyon.say_and_wait(`你是……豚鼠君，是我的专属训练员`);
    era.println();
    await era.printAndWait(`……你是谁？`);
    era.println();
    await tachyon.say_and_wait(
      `……我是${tachyon.name}，是你的负责${tachyon.get_uma_sex_title()}`,
    );
    await me.say_and_wait(`…………`);
    era.println();
    await tachyon.say_and_wait(`……你，还记得吗？`);
    await me.say_and_wait(`…………`);
    await tachyon.say_and_wait(
      `不……不要不说话啊，你还记得我吧？记得吗？这里是特雷森学园里我们的实验室，那边是茶座的地盘……`,
    );
    era.println();
    await me.say_and_wait(`……对不起`);
    era.println();
    await era.printAndWait(`你摇了摇头`);
    await era.printAndWait(
      `眼前的${tachyon.get_teen_sex_title}……虽然不知道为什么，给人一种熟悉的感觉`,
    );
    await era.printAndWait(`但自己确实，一点也不认识`);
    era.println();
    await tachyon.say_and_wait(
      `……没关系，失忆也是一种……一种可能性……只要再把记忆找回来就好了`,
    );
    era.println();
    await era.printAndWait(`……可能性`);
    await era.printAndWait(`这个词，似乎唤醒了烂泥中的一些灵光`);
    await era.printAndWait(`然而……`);
    await era.printAndWait(`灵光，总是只能乍现的`);
    era.println();
    await era.printAndWait(`不知道`);
    await era.printAndWait(`越思考脑袋空白的地方越多`);
    await era.printAndWait(`但是，还是得努力去回忆`);
    await era.printAndWait(`祈祷能够翻到刚刚闪过的灵光`);
    await era.printAndWait(`理由只有一个`);
    await era.printAndWait(
      `虽然不认识眼前名为${tachyon.name}的${tachyon.get_teen_sex_title}`,
    );
    await era.printAndWait(
      `但潜意识在喊着，不能让${tachyon.sex}受伤，不要让${tachyon.sex}悲伤`,
    );
    era.println();
    await era.printAndWait(
      `因此，在${tachyon.sex}提出稍微看看四周，尝试回忆一下的建议时`,
    );
    await era.printAndWait(`你没有拒绝`);
    await era.printAndWait(
      `只是跟着${tachyon.sex}，在校园(按${tachyon.sex}所说应该是如此)里走着`,
    );
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君……你看，这边是训练场，我们就是在这里相遇的`,
    );
    era.println();
    await era.printAndWait(`相遇……吗？`);
    era.println();
    await tachyon.say_and_wait(
      `没错，虽然当时的我并没有真正看到你就是……是你和我说的`,
    );
    era.println();
    await era.printAndWait(`这样吗……`);
    await era.printAndWait(`那么，当时的自己，一定是被速子的跑法给迷住了吧`);
    era.println();
    await tachyon.say_and_wait(`！……你，你想起来了吗！`);
    era.println();
    await era.printAndWait(`……对不起`);
    await era.printAndWait(`只是，某种感觉……觉得速子，要是跑起来一定会很漂亮`);
    era.println();
    await tachyon.say_and_wait(
      `………是啊，你说过很多次……虽然我自己是看不出来，明明只是普通的跑步而已，到底有什么让人着迷的`,
    );
    era.println();
    await era.printAndWait(`……不`);
    await era.printAndWait(
      `其他人可能是这样，但速子的跑法……我有感觉，一定能让自己着迷`,
    );
    era.println();
    await tachyon.say_and_wait(`……这样啊，那，要不要看我跑一次看看呢？`);
    era.println();
    await era.printAndWait(`！可以吗！`);
    await era.printAndWait(`但是……速子的脚……`);
    era.println();
    await tachyon.say_and_wait(`……你，你还记得吗？`);
    era.drawLine();
    await era.printAndWait(`沉默就是最好的回答`);
    await era.printAndWait(
      `要是在此时欺骗${tachyon.sex}，说自己已经想起来了的话`,
    );
    await era.printAndWait(`${tachyon.sex}肯定会很开心的吧`);
    await era.printAndWait(`但是……那样欺骗${tachyon.sex}，真的好吗？`);
    era.println();
    await era.printAndWait(`不知道为什么，心中的声音又开始高喊`);
    await era.printAndWait(`不要『再』欺骗${tachyon.sex}了`);
    await era.printAndWait(`不要『再』欺骗自己了`);
    await era.printAndWait(`……为什么是再呢？`);
    era.println();
    await tachyon.say_and_wait(`……没关系，我去跑一圈`);
    await tachyon.say_and_wait(`这样，说不定能想起些什么呢`);
    era.println();
    await era.printAndWait(`${tachyon.sex}跑完了一圈`);
    await era.printAndWait(`如你想的一般，是极为动人的跑法`);
    await era.printAndWait(`但……也就仅此而已`);
    era.println();
    await era.printAndWait(`${tachyon.sex}跑完一圈，准备停下`);
    await era.printAndWait(
      `但，看见你依然茫然的眼神，${tachyon.sex}不知为何，又跑了起来`,
    );
    await era.printAndWait(
      `在愣神的你面前，${tachyon.sex}跑了一圈又一圈，直到天黑`,
    );
    era.println();
    await era.printAndWait(`……对不起`);
    era.println();
    await tachyon.say_and_wait(`不，没什么……只是，只是我忽然想跑而已`);
    era.println();
    await era.printAndWait(`这是骗人的`);
    await era.printAndWait(`你听的出来，但没有点出`);
    await era.printAndWait(`怎么能点出来`);
    await era.printAndWait(
      `点出那名${tachyon.get_teen_sex_title}，徒劳无功的悲哀`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……明天，再一起寻找吧，一定，总有一天能够找回来的`,
    );
    era.println();
    await era.printAndWait(`因此，即便知道这是徒劳无功`);
    await era.printAndWait(`你还是没能吐出拒绝的话语`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君……你看，平常我们就是在这里做实验的，每次都是我做完药然后让你喝下去`,
    );
    era.println();
    await era.printAndWait(`欸欸……那不是，实验品吗？`);
    era.println();
    await tachyon.say_and_wait(`当然了，你以为豚鼠君是什么意思`);
    era.println();
    await era.printAndWait(`……原来真的是指实验动物啊`);
    era.println();
    await tachyon.say_and_wait(
      `……所以说，最近我会研究的，研究能让记忆恢复的药……你会帮我的吧？`,
    );
    era.println();
    await era.printAndWait(`……当然了`);
    era.drawLine();
    await tachyon.say_and_wait(
      `豚鼠君……那边是茶座的地盘，所以要小心点哦，要是随便碰那里的东西，可能会出事的……`,
    );
    era.println();
    await era.printAndWait(`欸……？`);
    await era.printAndWait(`……没发生什么事啊`);
    era.println();
    await tachyon.say_and_wait(`嗯？怎么可能……我试试……啊！研究资料烧起来了！`);
    era.drawLine();
    await tachyon.say_and_wait(`豚鼠君，你还记得红茶怎么泡吗？`);
    era.println();
    await era.printAndWait(`当然，红茶什么的还是会泡的`);
    era.println();
    await tachyon.say_and_wait(`嘶……这不是完全不行吗？`);
    era.println();
    await era.printAndWait(`欸欸？`);
    era.println();
    await tachyon.say_and_wait(`红茶跟糖的比例最起码也要1：1才对！`);
    era.println();
    await era.printAndWait(`这也太甜了吧！？`);
    era.drawLine();
    await era.printAndWait(`速子……失忆前的我和你，是什么关系？`);
    era.println();
    await tachyon.say_and_wait(`……怎么了？忽然回忆起什么了吗？`);
    await era.printAndWait(
      `……没有，只是从你说的感觉听起来，总觉得不只是训练员和${tachyon.get_uma_sex_title()}的关系……或者实验品与实验动物的关系`,
    );
    era.println();
    await tachyon.say_and_wait(`…………其实，我们，是恋人哦`);
    await era.printAndWait(`真的吗？`);
    era.println();
    await tachyon.say_and_wait(
      `……嗯，是超级相亲相爱的恋人，每天都腻在一起，甜腻到茶座${tachyon.sex}都受不了了`,
    );
    await era.printAndWait(`…………对不起`);
    era.println();
    await tachyon.say_and_wait(`没什么好道歉的，不是吗？`);
    await era.printAndWait(`要是……我能想起来的话`);
    era.println();
    await tachyon.say_and_wait(
      `……说什么话呢，不是要是能想起来，只是还没想起来而已……一定，一定会想起来的`,
    );
    await era.printAndWait(`……是啊，谢谢你，速子`);
    era.drawLine();
    await tachyon.say_and_wait(
      `你看，这里是商店街……我们平常的实验用具都是在这里买的`,
    );
    await era.printAndWait(`……那个，速子`);
    era.println();
    await tachyon.say_and_wait(`嗯？怎么了？`);
    await era.printAndWait(`……为什么，周围的人都在用一种看到鬼的眼神看我们`);
    era.println();
    await tachyon.say_and_wait(`有吗？可能是我上个月的实验吧`);
    await tachyon.say_and_wait(`嗯，那时候的实验不小心把整条街都染成血红色了`);
    await era.printAndWait(`嗯，那时候的实验不小心把整条街都染成血红色了`);
    era.println();
    await tachyon.say_and_wait(
      `真没礼貌，我可是清廉正直的青春美${tachyon.get_teen_sex_title}啊`,
    );
    await tachyon.say_and_wait(
      `只是要是豚鼠君不在身边的话就会变成暴走的地球最终兵器而已`,
    );
    await era.printAndWait(`好可怕！`);
    era.println();
    await tachyon.say_and_wait(`……所以，千万不要再离开我了，好吗？`);
    await era.printAndWait(`…………嗯`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君，你，不怪我吗？`);
    await era.printAndWait(`为什么？`);
    era.println();
    await tachyon.say_and_wait(`是我，把你的人生束缚在了这里，如果……`);
    await era.printAndWait(`……为什么`);
    await era.printAndWait(`明明应该是你该怪罪我的，不是吗？`);
    await era.printAndWait(`没有记忆的我……真的有资格接受你的爱吗？`);
    era.println();
    await tachyon.say_and_wait(`！不是……不是这样的！`);
    await tachyon.say_and_wait(
      `一定能回忆起来的……！所以，所以……别再说那种话了……`,
    );
    era.drawLine();
    await era.printAndWait(
      `${tachyon.name}与豚鼠君的足迹，踏遍了一切他们曾经经历过的地点`,
    );
    await era.printAndWait(`训练场、赛场、河滨、神社`);
    await era.printAndWait(`直到最后，一切都还是没能重新唤起豚鼠君的记忆`);
    await era.printAndWait(`但是，他们一点也不为此伤心`);
    await era.printAndWait(`因为，他们在这些地方，重新留下了最美好的回忆`);
    era.println();
    await tachyon.say_and_wait(`……这样的故事结尾，你喜欢吗？`);
    await era.printAndWait(`……嗯，很好哦`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君`);
    await era.printAndWait(`不用了，只要，这样就好了`);
    await era.printAndWait(`我……就要死了啊`);
    era.println();
    await tachyon.say_and_wait(`…………`);
    era.println();
    await era.printAndWait(`速子……谢谢你`);
    await era.printAndWait(`虽然，是无比短暂的人生`);
    await era.printAndWait(`但这段日子里，我过的很幸福`);
    await era.printAndWait(`哪怕不记得过去……我也能自豪的说出`);
    await era.printAndWait(`认识了速子……是我人生中，最美好的事`);
    await era.printAndWait(`所以，很抱歉`);
    await era.printAndWait(`${tachyon.name}和豚鼠君的故事……就要在这里结束了`);
    era.println();
    await tachyon.say_and_wait(`如果，你希望的话……`);
    await era.printAndWait(`……对不起`);
    await era.printAndWait(`但我，不希望再继续拌着你的脚了`);
    await era.printAndWait(`就让故事在这里结束吧`);
    era.println();
    await me.say_and_wait(`抱歉，速子，我真的困了……可以了吗？`);
    await tachyon.say_and_wait(`……是啊，好好睡吧，我会陪在你身边的`);
    era.drawLine();
    await era.printAndWait(`豚鼠君安详的闭上了眼睛`);
    await era.printAndWait(`${tachyon.name}没有哭泣，因为……已经不是第一次了`);
    era.println();
    await era.printAndWait(`与豚鼠君的分离`);
    await era.printAndWait(`第一次，是那天在商店街`);
    await era.printAndWait(`要是自己没有离开的话`);
    await era.printAndWait(`要是有强硬的把他留在身边的话`);
    await era.printAndWait(`要是……`);
    await era.printAndWait(`没有要是`);
    era.println();
    await era.printAndWait(`哪怕已经把凶手挫骨扬灰`);
    await era.printAndWait(`哪怕将商店街染成鲜红`);
    await era.printAndWait(`他也无法回来`);
    await era.printAndWait(`那点鲜红更无法填补他腹腔流出的血液`);
    era.println();
    await tachyon.say_and_wait(`他还是……没有怪我`);
    era.println();
    await era.printAndWait(`哪怕被自己变成这样`);
    await era.printAndWait(`眼前豚鼠君的脸，洋溢着青春的痕迹`);
    await era.printAndWait(`他不应该在这里离去`);
    await era.printAndWait(`他不应该在现在离去`);
    await era.printAndWait(`但是，因为${tachyon.name}`);
    await era.printAndWait(`因为他在错误的时间，错误的地点，遇上了……错误的人`);
    era.println();
    await era.printAndWait(`喝了口放在床边的红茶`);
    await era.printAndWait(`自己泡的红茶，和他泡的理论成分完全一样`);
    await era.printAndWait(`毕竟，已经自己泡了这么多年`);
    await era.printAndWait(`能够琢磨的，能够更改的，都已经研究到了最好`);
    await era.printAndWait(`但是，味道不一样`);
    await era.printAndWait(`不可能一样，永远无法一样`);
    await era.printAndWait(`今天的红茶，永远胜不过昨天的味道`);
    era.println();
    await tachyon.say_and_wait(`————那么，该开始下一次实验了`);
    era.drawLine();
    await era.printAndWait(`特雷森学院的地下室`);
    era.println();
    await tachyon.say_and_wait(`上次来这里……是什么时候了`);
    era.println();
    await era.printAndWait(`三个月？五个月？还是……`);
    await era.printAndWait(`『这次』又跟豚鼠君度过了多长的时间？`);
    era.println();
    await tachyon.say_and_wait(`算了，不重要了`);
    era.println();
    await era.printAndWait(`打开灯`);
    await era.printAndWait(`在眼睛慢慢适应亮光后`);
    await era.printAndWait(`眼前出现的，是数以千计的营养槽`);
    era.println();
    await era.printAndWait(`啊啊，要是让他知道的话，他绝对不会原谅我吧`);
    await era.printAndWait(`但是……他还是没有怪罪我`);
    await era.printAndWait(`所以，这就算默认了`);
    era.println();
    await tachyon.say_and_wait(
      `第五十六次，记忆没有恢复倾向，身体无异状，存活时间五个月……`,
    );
    era.println();
    await era.printAndWait(`从他离开那天开始才启动的计画`);
    await era.printAndWait(`已经无数次咒骂过自己`);
    await era.printAndWait(`为什么如此晚才想到`);
    await era.printAndWait(
      `已经被泡沫般的幸福麻痹到忘记研究者最基本的未雨绸缪了吗？`,
    );
    await era.printAndWait(`所以才会落得如此下场`);
    era.println();
    await era.printAndWait(`一点一滴，像堆沙堡一般，将他的身体重新拼凑而成`);
    await era.printAndWait(
      `但，哪怕一切都拼凑起来了，也无法将无形的东西重新塑成`,
    );
    await era.printAndWait(`人体中蕴含最多秘密的大脑————记忆`);
    await era.printAndWait(
      `连一开始都不知道到底存在与否的东西，到底又能怎么重塑`,
    );
    await era.printAndWait(`只能像这样`);
    await era.printAndWait(`一次又一次的实验，一次又一次的唤醒`);
    await era.printAndWait(`一次又一次的……等待着奇迹`);
    era.println();
    await tachyon.say_and_wait(`失败主因，多器官衰竭引起败血症……生存意愿，无`);
    era.println();
    await era.printAndWait(`凡人的捏泥土游戏，大概是永远也及不上女神大人的`);
    await era.printAndWait(`所以，每次塑造出的他总是这样`);
    await era.printAndWait(`至多半年，至少……两周`);
    await era.printAndWait(`只要到了时间，总会因为各式各样的原因而陷入永眠`);
    await era.printAndWait(`……当然`);
    await era.printAndWait(`这些疾病，再怎么说，依然是常人范围`);
    await era.printAndWait(`凭借着${tachyon.name}的研究成果`);
    await era.printAndWait(
      `要续命的话，多活上三到五年绝对不是问题，甚至……还能更久`,
    );
    await era.printAndWait(
      `只要愿意，可以有一个三到五年，就能有第二个，第三个，第四个，直到永久`,
    );
    era.println();
    await tachyon.say_and_wait(`他还是……没有说`);
    era.println();
    await era.printAndWait(`无论重复多少次`);
    await era.printAndWait(`无论怎么对身体进行改动`);
    await era.printAndWait(`最后的最后，他说的总是大同小异`);
    era.println();
    await tachyon.say_and_wait(`已经结束了`);
    await tachyon.say_and_wait(`已经满足了`);
    era.println();
    await tachyon.say_and_wait(`开什么玩笑……开什么玩笑！`);
    await tachyon.say_and_wait(
      `谁允许你擅自满足了！给我说啊！对我说啊！说想要活下去！说想要继续和我生活下去啊！`,
    );
    await tachyon.say_and_wait(
      `没有记忆也没关系，要花一辈子找回记忆也没关系，说啊……为什么不说……为什么……要留我一个人……`,
    );
    era.println();
    await era.printAndWait(
      `如果，他是因为憎恨，憎恨害自己失去性命的${tachyon.name}，因此宁愿死也不愿意与${tachyon.name}一起生活，那都能接受`,
    );
    await era.printAndWait(
      `如果真的是这样，那么${tachyon.name}会不说二话的离开他的生活，只进行最低程度的医疗接触`,
    );
    await era.printAndWait(
      `只要能在最后，有那么一点迟疑，或者表露出那么一点对${tachyon.name}的嫌弃，`,
    );
    await era.printAndWait(`那么哪怕心跳停止，自己都能在最后关头将他抢救回来`);
    await era.printAndWait(`但是……五十六次里`);
    await era.printAndWait(`这种事，一次也没发生过`);
    era.println();
    await era.printAndWait(`不想拖累自己`);
    await era.printAndWait(`不想束缚自己`);
    await era.printAndWait(`哪怕失去一切，包括生命，包括记忆`);
    await era.printAndWait(
      `五十六次里，每一次，他直到最后想的都是${tachyon.name}的可能性`,
    );
    era.println();
    await era.printAndWait(`但是，${tachyon.name}的可能性，已经结束了`);
    await era.printAndWait(`${tachyon.name}的时间，已经停止走动`);
    await era.printAndWait(`那杯红茶的味道从那刻开始就已经定格`);
    era.println();
    await tachyon.say_and_wait(`第五十七次，开始`);
    era.println();
    await era.printAndWait(
      `随着培养槽将营养液排干，在培养槽中的人影被释放出来`,
    );
    era.println();
    await era.printAndWait(`不能让他结束，不会让他结束`);
    await era.printAndWait(`${tachyon.name}与豚鼠君的故事，必须永远继续下去`);
    era.println();
    await era.printAndWait(
      `于是，将过去束缚，也被束缚在过去的科学家，开始了新一轮的实验`,
    );
  } else {
    throw new Error();
  }
};

handlers[event_hooks.train] = async function () {
  const love = era.get('love:32'),
    motivation = era.get('cflag:32:干劲'),
    relation = era.get('relation:32:0');
  const tachyon = get_chara_talk(32);
  if (love < 75) {
    if (relation < 75) {
      //todo 干劲不调、绝不调
      if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        await print_event_name(`燃烧不完全`, tachyon);
        era.println();
        await tachyon.say_and_wait(`今天的目标……是……`);
        era.println();
        await era.printAndWait(`你忧心的看着爱丽速子的模样`);
        await era.printAndWait(
          `今天的她依然在尝试着为了突破极限而进行的实验，也可以称之为，训练`,
        );
        await era.printAndWait(
          `倘若她的体力充足，只是状态不好，那你必然会狠下心来将其推向实验吧，因为有时严厉的举止也是必要的`,
        );
        await era.printAndWait(
          `倘若她的体力不足，但状态出奇良好，那你在思考过后也会尝试让她继续进行锻炼吧，`,
        );
        await era.printAndWait(
          `毕竟就如前辈训练员们说过的，贴近马娘的心灵才是身为训练员最重要的工作`,
        );
        await era.printAndWait(`但是……`);
        era.println();
        await era.printAndWait(
          `对于体力明显不支，状态也心不在焉的她，你真的能够狠下心来吗？`,
        );
        era.printButton(`……继续吧`, 1);
        era.printButton(`……休息吧`, 2);
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(
            `为了爱丽速子的目标及梦想……以及，自己的一点点私心`,
          );
          await era.printAndWait(`你看着速子现在的模样`);
          await era.printAndWait(
            `从被汗水浸湿的运动服透出的雪白肌肤，与奔跑时沾在衣服上的泥点，`,
          );
          await era.printAndWait(
            `形成了显著的对比，紧紧贴合的运动服更凸显了她的姣好身材`,
          );
          await era.printAndWait(
            `圆润的胸部及臀部，加上因疲惫而发出的喘息和泛红的脸颊，明明只是训练，却不住使人产生遐想`,
          );
          await era.printAndWait(
            `要是能够将那不停弹跳的圆球当成自己的东西在手里尽情揉捏的话`,
          );
          await era.printAndWait(
            `要是能用唇舌堵住那张平常总对自己爱搭不理的小嘴，使其只能发出娇嫩喘息的话`,
          );
          await era.printAndWait(
            `这样的想法，以一名训练员，以一名成熟的大人来说，绝对是不应允许的行为吧`,
          );
          await era.printAndWait(
            `但是，以身为男性的立场而言，内心的欲望却不允许你提出反对`,
          );
          await era.printAndWait(
            `虽然犹豫，虽然不舍，但你还是装作没发现她的不适，让她继续训练`,
          );
          await era.printAndWait(
            `……不知是不是发现了你内心的龌龊，又或者只是对训练的继续感到不满，爱丽速子没说什么，却瞪了你一眼`,
          );
          //todo 爱丽速子 的 好感度 -10
        }
        await era.printAndWait(`身为训练员，不合理的过度训练也是应该避免的`);
        await era.printAndWait(`你在爱丽速子跑完一圈后，马上喊了停`);
        era.println();
        await tachyon.say_and_wait(
          `……结束？实验才刚开始不是吗，还有很多今天要完成的对比实……实验……啊……`,
        );
        await era.printAndWait(
          `她的强硬话语只说了一半便坚持不下去，忍不住发出了低吟`,
        );
        await era.printAndWait(
          `谁能想得到呢，只是轻轻按压了下小腿内侧，往来如此强硬的小嘴竟然会发出如此诱人的声音`,
        );
        await era.printAndWait(
          `当然，你的按压并没有神奇到能让人立即发春，这一切的主因还是在速子自己`,
        );
        await era.printAndWait(
          `你扶着已经瘫软的速子，轻轻按压她已经有些发肿的小腿`,
        );
        era.println();
        await tachyon.say_and_wait(`……嗯……呀……这样……不行……住手……啊嗯……`);
        era.println();
        await era.printAndWait(`她的小嘴不住发出令人沉醉的娇吟`);
        await era.printAndWait(
          `雪白的肌肤已经有些红肿，每次按压着不同的地方，她都会发出令人遐想的声音，`,
        );
        await era.printAndWait(
          `彷佛你在做的这些并非是健全的按摩，而是某些更邪恶，下流的行为`,
        );
        await era.printAndWait(
          `在神圣的赛场上做这样的事情，当然不免会引起他人的关注，`,
        );
        await era.printAndWait(
          `不知不觉间，一些还在锻炼的小马娘们也被速子的娇吟吸引过来`,
        );
        era.println();
        await tachyon.say_and_wait(`等…豚鼠…咿…不可以……有人……啊啊～～♡`);
        era.println();
        await era.printAndWait(`你置若罔闻的按压着`);
        await era.printAndWait(
          `速子的腿，比你想象中的还要娇嫩纤细，轻轻握在手里的感觉使你有了一种掌握了她的生杀大权的错觉`,
        );
        await era.printAndWait(
          `要是能在床上，看着她不甘却还是忍不住发出呻吟的模样，抓着她的双腿将其分开，那带来的征服感想必是胜过世间一切的吧`,
        );
        era.println();
        await tachyon.say_and_wait(`……！那边不可以！`);
        era.println();
        await era.printAndWait(`不知不觉间，有些起劲的你向上摸到了大腿`);
        await era.printAndWait(`速子用力将双腿抽回时的力道唤醒了你的理智，`);
        await era.printAndWait(
          `提醒你眼前的少女，实际上是力量大过于成年男性三倍的马娘`,
        );
        await era.printAndWait(`你连忙向她道歉`);
        era.println();
        await tachyon.say_and_wait(
          `……我，我知道了……今天，就先到这里吧……我，我需要休息一下……`,
        );
        await era.printAndWait(
          `速子语速飞快的说完这些后便起身要回到实验室，但随即便被失力感导致瘫软在你怀中`,
        );
        await era.printAndWait(
          `此时你们二人看上去的模样哪里像是正常训练中的训练员及马娘，`,
        );
        await era.printAndWait(
          `倒不如说是扑在男友怀中的撒娇女友，及温柔的将她拥在怀中的男伴`,
        );
        await era.printAndWait(
          `被他人所惧的疯狂科学家，此时却小鸟依人的靠在你怀里`,
        );
        await era.printAndWait(`对此你忍不住产生了一种自豪及骄傲感`);
        era.println();
        await tachyon.say_and_wait(`……带我回实验室，现在，马上`);
        era.println();
        await era.printAndWait(`但随即，科学家的瞪视却使你变回了听话的豚鼠`);
        await era.printAndWait(
          `于是，你们两人在周围马娘们的半是佩服半是羡慕的目光中，缓缓走回了实验室`,
        );
        //todo 本轮禁止训练 爱丽速子的状态 上升
      } else if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`那么，开始实验吧。`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `快点，去准备纪录实验数据，不要分心了。`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`哼……`);
              await era.printAndWait(
                `速子没有说话，但你看得出她身上满溢的干劲。`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `你在慢什么，还不快去准备纪录实验数据，敢出什么差错我剥了你的皮。`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `方向发生错误了吗……为什么……明明体力充沛，却完全没有能够超越极限的自信……。`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`……最近你提出的实验，越来越无趣了啊`);
              await era.printAndWait(`速子用危险的眼神看着你。`);
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`……开始实验吧。`);
              await tachyon.say_and_wait(
                `累？没这回事，我有预感，这一次，这一次一定能够突破瓶颈……`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(`必须更快……咕……身体无法……动弹……。`);
              break;
            case 2:
              await tachyon.say_and_wait(
                `开什么玩笑……突破极限的首要条件就是抵达极限。`,
              );
              await tachyon.say_and_wait(
                `还要更快，要是连极限都无法抵达……那还谈什么超越极限……！`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`今天的目标……是……`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `方向发生错误了吗……为什么……明明体力充沛，却完全没有能够超越极限的自信……。`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`……最近你提出的实验，越来越无趣了啊`);
              await era.printAndWait(`速子用危险的眼神看着你。`);
              break;
          }
        }
      }
    } else if (relation < 225 && relation > 75) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`豚鼠君！开始我们的研究吧！`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `状态绝佳！今天绝对能跑出堪比普朗克时间的纪录出来！`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `直到超越光速！直到抵达可能性的彼方！`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`……无趣啊`);
              await era.printAndWait(`爱丽速子喃喃自语道。`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `豚鼠君……我认为实验的灵感是很重要的，成功虽说是99%的努力加上1%的灵感，`,
              );
              await tachyon.say_and_wait(
                `但没有1%的灵感无论努力了99%还是99.99%都是一样毫无用处，你明白我的意思吗？`,
              );
              await tachyon.say_and_wait(
                `不，我不是为了翘掉训练才这么说的，这只是在陈述一件事实，`,
              );
              await tachyon.say_and_wait(
                `但既然你提到了这个话题，那我们也可以顺带代入进去来看，所以今天的训练……`,
              );
              await era.printAndWait(`你摇了摇头`);
              await tachyon.say_and_wait(`切`);
              await era.printAndWait(`爱丽速子啧了一声`);
              break;
            case 2:
              await tachyon.say_and_wait(
                `训练？今天的实验都还没做完不是吗？唉……罢了，等我做完实验之后就去`,
              );
              await era.printAndWait(
                `最后，在速子来训练前你等了足足三个小时，直到太阳下山她才出现在训练场上`,
              );
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `哈啊哈啊……体力？没问题，今天一定能够突破……哈啊，哈啊……`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `直到极限……在体力的极限才能见到真正的突破！`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `理性在告诉我自己需要休息了，但感性却怎么也不想停下来……真是幸福的烦恼啊，哈哈哈！`,
              );
              break;
          }
        }
      }
    } else if (relation < 525 && relation > 225) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 1)) {
            case 0:
              await tachyon.say_and_wait(
                `快快快！时间不等人的！今天的实验数据起码可以水五篇论文！接下来两个月的研究经费都可以不用愁了！`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `训练？没问题，但是有个条件，豚鼠君，今天你也来一起并跑吧？`,
              );
              await tachyon.say_and_wait(
                `没问题没问题，现在你的身体素质如果短时间爆发已经能够跑出不输给马娘的速度了……`,
              );
              await tachyon.say_and_wait(
                `没问题没问题，嗯，短时间的话，大概……五秒内？`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `训练？又是跑操场啊……我说，豚鼠君，能不能来点更有趣的训练啊？`,
              );
              await tachyon.say_and_wait(
                `比如……药剂俄罗斯轮盘赛？先各喝五管随机效果的药然后开始比赛？`,
              );
              await tachyon.say_and_wait(
                `先找到能够配合的马娘？茶座君……欸，不行吗？`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `我说啊豚鼠君，我们冷静分析，这样每天锻炼的效率真的会比研究高吗？`,
              );
              await tachyon.say_and_wait(
                `什么？我的特殊事件触发一次也就+5，哪来的自信跟锻炼比的？`,
              );
              await tachyon.say_and_wait(
                `不是，等等，豚鼠君你在说什么……我怎么听不懂……`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `欸……训练好麻烦，要跑你自己上去跑不就好了`,
              );
              await tachyon.say_and_wait(
                `乖孩子什么的……我说豚鼠君，你不会是把我当成小孩子了吧？`,
              );
              await tachyon.say_and_wait(
                `不过嘛……偶尔去跑一下也不是什么坏事，大概。`,
              );
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        switch (get_random_value(0, 2)) {
          case 0:
            await tachyon.say_and_wait(
              `豚鼠君……我看见光了……再努力，再努力一定能追上……就在前面……`,
            );
            break;
          case 1:
            await tachyon.say_and_wait(`豚鼠君…给我……药……快点……我快撑不住了…`);
            await tachyon.say_and_wait(
              `啊，没错没错，就是这个就是这个，没有这个我怎么活啊……`,
            );
            await tachyon.say_and_wait(
              `嗯？说话方式很奇怪？不就是普通的营养剂而已吗？有什么奇怪的？像嗑多了？只有脑袋里都塞了那种东西的人才会想歪啦`,
            );
            break;
          case 2:
            await tachyon.say_and_wait(`……呼`);
            await tachyon.say_and_wait(`双腿？没问题`);
            await tachyon.say_and_wait(
              `再说，就算出了问题也无妨吧，毕竟就算双腿再也无法奔跑，你也会跟着我的吧？`,
            );
            await tachyon.say_and_wait(
              `虽然是实话，但还是不想看到受伤？哎呀呀，那该怎么办呢～～`,
            );
            break;
        }
      }
    }
  } else if (love > 90) {
    if (relation > 75) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `走吧走吧，豚鼠君～～快点开始我们今天的实验吧`,
              );
              await tachyon.say_and_wait(`……还是说，要我喊你，亲爱的❤`);
              break;
            case 1:
              await tachyon.say_and_wait(`豚鼠君～～今天的训练可不能马虎哦`);
              await tachyon.say_and_wait(
                `为什么？真是……连最基础的生物常识都不懂吗`,
              );
              await tachyon.say_and_wait(
                `母体的锻炼不足，可是会影响到后代的健康的❤`,
              );
              await tachyon.say_and_wait(
                `为了备孕，可千万不能手下留情哦，孩子他爸❤`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `状态很好？呵呵，只要和豚鼠君在一起，无论哪一天我的状态都是一样好哦`,
              );
              await tachyon.say_and_wait(`……当然，其他方面的状态也是❤`);
              break;
          }
        }
      }
    }
  } else if (love > 75) {
    if (relation > 75) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`豚鼠君……我在思考一件事`);
              await tachyon.say_and_wait(
                `最近训练的时候，只要一想到豚鼠君你在看着我，就觉得特别有动力`,
              );
              await tachyon.say_and_wait(
                `嗯……爱情的影响吗，是个不错的研究课题，下次来试试不同爱情表现的变量下会导致的训练结果差别吧`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `豚鼠君，今天我这么难得的有干劲想训练，对这样的爱马，你不觉得应该有些什么奖励才对呢`,
              );
              await tachyon.say_and_wait(
                `……训练结束？我说，我可等不了那么久啊`,
              );
              await tachyon.say_and_wait(`唔……咕啾……啾噜……啾啵……啾……啾咕`);
              await tachyon.say_and_wait(
                `呼……姑且算你及格了，剩下的，训练结束之后再继续吧❤`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `有种说法，训练员就是将马娘『驯服』的存在，因此驯服的驯才是马字旁，也因此驯和训的读音如此相近`,
              );
              await tachyon.say_and_wait(
                `如果是这样的话，那么把这样的我给驯服了的训练员君，今天希望我做些什么呢❤`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `欸欸～～居然要强迫状态不好的爱人利用身体来取悦自己吗？`,
              );
              await tachyon.say_and_wait(
                `……豚鼠君，真没想到你居然是这种人呢……哭哭……`,
              );
              await tachyon.say_and_wait(
                `啧啧，只是玩笑而已，何必认真呢……不过要是你想玩过分一点的玩法，我也不介意哦❤`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `训练？不如好好做实验……今天的实验都没做完呢，急什么`,
              );
              await tachyon.say_and_wait(
                `嗯？不客气了？呵呵，有什么办法就用上来吧，我拭目以待`,
              );
              await tachyon.say_and_wait(
                `等……公主抱什么的……这也太让人害羞了……`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`训练？嗯……喝了今天的药再说吧`);
              await tachyon.say_and_wait(
                `全身发热？意识模糊？没事没事，这是正常现象`,
              );
              await tachyon.say_and_wait(`嗯哼……时间应该差不多了，`);
              await tachyon.say_and_wait(
                `那么，今天的药是引动雌性激素雄性激素皮质醇生长激素加压素达到平均以上水平的药物，或者通俗一点来讲的话，就是媚药哦❤`,
              );
              await tachyon.say_and_wait(`训练什么的，等结束之后再说吧❤`);
              // todo 无钢之意志
              await era.printAndWait(
                `在速子的诱惑下，你将她扑倒在实验室里的小床里……`,
              );
              // todo 上床，本次事件跳过

              // todo 存在钢之意志
              era.printButton(`别闹了，快点去训练`, 1);
              await era.input();
              await era.printAndWait(`你靠着学习到的钢之意志撑住了诱惑`);
              await tachyon.say_and_wait(`这也可以的吗！？`);
              await era.printAndWait(
                `你不顾吐槽的速子，把她硬抱到了训练场上。`,
              );
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `呼……偶尔认真的流流汗也不错啊，休息？现在状态这么好，休息也太可惜了。`,
              );
              await tachyon.say_and_wait(
                `等，豚鼠君，你在做什么……不要闻啊……现在很臭的……`,
              );
              await tachyon.say_and_wait(
                `我，我知道了……我回去休息，所以别闻了……`,
              );
              await tachyon.say_and_wait(
                `什么叫可以继续啊！？豚鼠君，你……真的是变态啊`,
              );
              await tachyon.say_and_wait(
                `真是，不过会因此而感到兴奋的我，绝对也是变态无误了❤`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(`体力不支，需要休息？`);
              await tachyon.say_and_wait(
                `……那还不是因为某人前几天……我的腰到现在都还在痛……`,
              );
              await tachyon.say_and_wait(
                `喂！……真是，腰还在痛只是比喻啦……大惊小怪的……就那么担心我吗❤`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`哈啊……哈啊……`);
              await tachyon.say_and_wait(
                `没什么，耐力用尽什么的，还早得很呢！`,
              );
              await tachyon.say_and_wait(
                `不过……要是真的受不了了，就麻烦你帮我补充『精』力了，豚鼠君❤`,
              );
              break;
          }
        }
        /*
        //todo 每个回合20%机率触发5选一
        await tachyon.say_and_wait(`哦呀，豚鼠君，来得正好，这是今天的药`);
        era.println();
        await era.printAndWait(
          `爱丽速子递了瓶发出(深/浅)(红/橙/黄/绿/蓝/靛/紫/灰/银/金)/七彩 的药水给你`,
        );
        era.println();
        await era.printAndWait(`你二话不说喝下药水`);
        switch (get_random_value(0, 4)) {
          case 0:
            await era.printAndWait(`你喝下药水后忽然感觉喉咙很痒`);
            await era.printAndWait(`忍不住想咳嗽，没想到一咳出来的却是火星`);
            era.println();
            await tachyon.say_and_wait(`哦呀哦呀，看来龙息药水的效果很好啊`);
            era.println();
            await era.printAndWait(
              `速子一脸高兴的记录着实验数据，却没预料到接下的后果，咳出的火星落到了她身旁的实验纪录上`,
            );
            era.println();
            await tachyon.say_and_wait(
              `怎么…………有股烧焦味……………我的实验数据！！？？`,
            );
            era.println();
            await era.printAndWait(
              `她连忙开始挽救那些还没烧着的实验纪录，你想上前帮忙，但喉咙实在痒的不行`,
            );
            era.println();
            await tachyon.say_and_wait(`咳咳！！`);
            era.println();
            await era.printAndWait(
              `在药效消失前，速子只是不停的跑来跑去抢救着资料`,
            );
            //todo 速子的速度 增加 5 速子的心情，下降1级
            break;
          case 1:
            era.println();
            await era.printAndWait(
              `你喝下药水后感觉眼睛看出去的世界忽然变得清楚了许多，`,
            );
            await era.printAndWait(
              `但你不禁开始怀疑那是不是迷幻药一类的东西，因为你的眼前开始看见了一些奇怪的东西`,
            );
            era.println();
            await tachyon.say_and_wait(
              `哦？看来有什么效果的样子？这是我根据茶座君说的看见另一个世界的感觉制造出来的灵视药剂`,
            );
            era.println();
            await era.printAndWait(
              `她到底做了什么出来！这已经跨越正常化学领域了吧！？`,
            );
            era.println();
            await tachyon.say_and_wait(
              `顺便，要是你现在能看见的话，帮我看看我身上吧`,
            );
            era.println();
            await era.printAndWait(`你听见这句话，下意识看向了速子`);
            await era.printAndWait(`随即，你的意识瞬间停止了运作`);
            era.println();
            await tachyon.say_and_wait(
              `昨天缠着茶座君的时候好像不小心把她惹毛了，从昨天回来之后就觉得身体好沉重……`,
            );
            era.println();
            await era.printAndWait(
              `你看见，有某个黑影用双手压在了爱丽速子的肩上`,
            );
            await era.printAndWait(
              `黑影似乎察觉到了你的视线，伸出手指在可能是脸的部分比了一个嘘的手势`,
            );
            await era.printAndWait(`接下来，你感觉自己什么也说不出口了`);
            era.println();
            await tachyon.say_and_wait(
              `………奇怪，真的没什么吗，为什么感觉身体这么重`,
            );
            era.println();
            await era.printAndWait(
              `速子没注意到你的不对，喃喃自语说完后走出了房间`,
            );
            await era.printAndWait(
              `此时你才总算能够大口呼吸，那个黑影，到底是什么………`,
            );
            era.println();
            await era.printAndWait(
              `顺带一提，隔天速子就恢复正常了，看来或许只是茶座的稍加惩戒而已吧`,
            );
            //todo 速子的耐力 增加了5
            break;
          case 2:
            await era.printAndWait(`你喝下药后忽然感觉身体无比僵硬`);
            await era.printAndWait(
              `你惊恐的发现现在的自己全身上下除了嘴和脑袋其他所有地方都无法动弹了`,
            );
            era.println();
            await tachyon.say_and_wait(
              `哎呀………原本是想做能够增强身体抗打击力的药剂，结果变成类似石化的效果了吗………`,
            );
            era.println();
            await era.printAndWait(`你没有功夫理会速子的实验后感想`);
            await era.printAndWait(`你的心情十分着急`);
            await era.printAndWait(`拼命想移动身体却动弹不得`);
            await era.printAndWait(
              `接下来还有一场关于训练场时间分配的会议，要是今天没法出席之后一个月训练场都没得使用了`,
            );
            await era.printAndWait(`你将事情的严重性告诉了速子`);
            await era.printAndWait(`她也感到大事不妙`);
            era.println();
            await tachyon.say_and_wait(
              `要是没法上训练场怎么确认我药剂的效果！？`,
            );
            era.println();
            await era.printAndWait(
              `总之，姑且不论原因为何，现在的当要之急是把你送到会议室去`,
            );
            await era.printAndWait(`速子努力将你抬起，要送到会议室去`);
            await era.printAndWait(
              `不知为何喝下了药剂后你的身子变得特别沉重，就连速子用马娘的力气想将你托起都耗费了好大一番功夫`,
            );
            await era.printAndWait(
              `最后好不容易，总算将你抬到会议室，并且为了被人发现不对，速子在旁全程陪同参加会议`,
            );
            era.println();
            await era.printAndWait(
              `在那天之后，不知为何学园里开始流传起速子和你的绯闻`,
            );
            await say_by_passer_by(`路人马娘A`, `据说是用公主抱抱去参加会议的`);
            await say_by_passer_by(
              `路人训练员A`,
              `会议上也全程陪同，帮忙端茶递水，完全就是贤内助的模样`,
            );
            await say_by_passer_by(
              `路人马娘B`,
              `没想到那个爱丽速子也恋爱了啊…………`,
            );
            era.println();
            await era.printAndWait(`……………为什么会产生这样的绯闻呢`);
            await era.printAndWait(
              `以及，为什么听到这样的绯闻后，速子的脸仿佛有点红的样子`,
            );
            //todo 速子的力量 增加了5
            // 速子的心情 提升了1级
            break;
          case 3:
            await era.printAndWait(
              `药水在你喝下之前便爆出了粉色的浓雾，将你和速子包裹在雾中`,
            );
            era.println();
            await tachyon.say_and_wait(`咳咳！怎么回事！？`);
            era.println();
            await era.printAndWait(
              `你摇头表示自己不知道，说到底连药的效果是什么都不知道的你怎么可能会知道这是怎么回事`,
            );
            era.println();
            await tachyon.say_and_wait(
              `明明只是普通的精力药而已……算了，先把窗户跟门打开让雾气散掉`,
            );
            era.println();
            await era.printAndWait(`速子连忙到窗前想要开窗散气，然而`);
            era.println();
            await tachyon.say_and_wait(`咕，身体提不起劲……！`);
            era.println();
            await era.printAndWait(
              `这段期间，你一直端坐在椅子上，哪都没去，这并非是因为你内心的余裕，`,
            );
            await era.printAndWait(
              `而是因为你下半身的兄弟已经高高立起/下面已经泛滥成灾`,
            );
            await era.printAndWait(
              `你想起了速子说的精力药，一般而言的精力药指的……都是针对那方面的药吧`,
            );
            await era.printAndWait(
              `为什么速子会做那样的药，你的内心感到疑惑，但现在不是思考这些的时候了，因为……`,
            );
            era.println();
            await tachyon.say_and_wait(`豚鼠君……我的身体……好热……`);
            era.println();
            await era.printAndWait(
              `爱丽速子用变成爱心状的双眼看着你，眼中流露出一丝恐慌，以及更多的情欲`,
            );
            await era.printAndWait(`看见她的模样，你……`);
            // todo 若速子未有过性经验或者好感<225、爱慕<75
            era.println();
            await era.printAndWait(`不行，她是你的负责马娘，你不能做这种事`);
            await era.printAndWait(
              `你冷静的拒绝了她，幸好，速子看上去也维持着一定的冷静`,
            );
            era.println();
            await tachyon.say_and_wait(
              `没事的……这个药的药效最多也就一个小时……只要撑过一个小时就……`,
            );
            await era.printAndWait(
              `你们没有再多说什么，你和瘫软着身子坐在地上的她默默的等待时间过去`,
            );
            era.println();
            await era.printAndWait(
              `你拼命的忍耐着，但目光还是忍不住移向了速子的方向`,
            );
            era.println();
            await era.printAndWait(
              `速子的全身大汗淋漓——想来你也应是如此——由于白大褂遮掩的关系，衣服并未透出什么不该吐露的东西`,
            );
            era.println();
            await era.printAndWait(
              `然而，终究百密一疏，原本大上一号的白大褂，却在汗水的湿润下呈现出了十分贴合速子身材的曲线，`,
            );
            await era.printAndWait(
              `从圆润的股丰及丰内深邃的沟槽，到胸前不算太大却十分坚挺的山峰，都清晰的描绘在你的眼中`,
            );
            era.println();
            await tachyon.say_and_wait(`豚鼠君……`);
            era.println();
            await era.printAndWait(
              `速子似乎注意到你的视线了，有些责怪的喊了一声，`,
            );
            await era.printAndWait(
              `但在情欲的感染下这一声豚鼠君都带上了娇媚的色彩，你连忙道歉了一声后收回视线`,
            );
            era.println();
            await era.printAndWait(`忍耐，忍耐，忍耐`);
            await era.printAndWait(
              `总算，药效逐渐消退，速子艰难的站起身来，抛了句今天就到这里后仓皇的离开了训练员室……`,
            );
            await era.printAndWait(
              `你晃了晃头，希望将今天发生的这些摇出脑袋，但速子那姣好的身材依然留存于你的脑海中，无法忘怀……`,
            );
            era.println();
            await era.printAndWait(
              `顺带一提，事后你问了速子，得知了那种精力药是供应给校内某秘密商店的，`,
            );
            await era.printAndWait(
              `据说这才是她研究资金的主要来源，要是在校园里多逛逛的话说不定能找到……？`,
            );
            // todo 速子的根性+10 训练员的根性+10(?)
            // 速子的爱慕值+5
            break;
          case 4:
            await era.printAndWait(
              `你喝下药剂后，全身忽然发出了光芒，你感到有些惊恐，却发现速子依然一幅兴奋的样子`,
            );
            era.println();
            await tachyon.say_and_wait(`快，把衣服脱了`);
            era.println();
            await era.printAndWait(`这个家伙在说什么！？`);
            await era.printAndWait(
              `是变态吗！？是特雷森最近流行的女骚扰犯吗！？`,
            );
            await era.printAndWait(
              `你连忙抓紧了自己的衣服，但人类终究还是敌不过马娘的力量，在长达三秒的挣扎后，你的衣服在拉扯间被撕了开来`,
            );
            era.println();
            await era.printAndWait(
              `无力抵抗的你闭上了双眼，无法反抗那就只能享受了，来吧，别怜惜我是朵娇花！`,
            );
            era.println();
            await tachyon.say_and_wait(`…………原来如此，原来如此`);
            era.println();
            await era.printAndWait(
              `等待了许久都没有等到你所期待发生的那种事，你瞧瞧睁开了眼睛，`,
            );
            await era.printAndWait(
              `却看到速子正盯着你的身体念念有词，一边在记录本上写着什么`,
            );
            era.println();
            await era.printAndWait(
              `你将视线移回自己身上，发现自己的身体确实正发着光，但发光的部位都有着一定的规律性，看上去就好像…………`,
            );
            era.println();
            await tachyon.say_and_wait(
              `原来人类的身体具体是这样运作的……但是……和马娘之间的区别…………`,
            );
            era.println();
            await era.printAndWait(
              `你听见速子喃喃自语的声音后察觉，这依然是为了探讨马娘的奥秘而展开的实验`,
            );
            await era.printAndWait(`你不禁为自己肤浅的想法感到有些不好意思`);
            era.println();
            await tachyon.say_and_wait(
              `好，今天就先观察到这吧，我先回去做实验了，豚鼠君你记得把衣服穿上！`,
            );
            era.println();
            await era.printAndWait(
              `速子纪录完后飞快的离开了训练员室，留下你一个人在训练员室里`,
            );
            await era.printAndWait(
              `你看着地上已经不能称作是衣服的那堆碎片，心想着到底是该趁着夜色漆黑跑回家，还是麻烦同事帮你拿件衣服过来`,
            );
            //todo 速子的智力 增加了5
            break;
        }*/
      }
    }
  }
};

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const tachyon = get_chara_talk(32);
  era.print(
    `${tachyon.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`,
  );
  if (Math.random() < 0.9 * extra_flag.stamina_ratio) {
    const me = get_chara_talk(0);
    await print_event_name('额外的自主训练', tachyon);

    await era.printAndWait(`在${tachyon.name}的训练结束后。`);

    await tachyon.say_and_wait(
      `喂喂，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，待会有空吗？`,
    );

    await tachyon.say_and_wait(
      '我在雨天兜风的时候，在这种天气跑步应该会很开心。',
    );

    await tachyon.say_and_wait(
      '溅起的水花、雨中朦胧的视野……这种时候好像可以感受到别具一格的风。',
    );

    await tachyon.say_and_wait(
      '今天我不是跑得非常有干劲吗！我觉得就这样结束练习有点可惜呢♪',
    );

    await tachyon.say_and_wait(`在雨中奔跑感觉也不错哦♪`);

    await tachyon.say_and_wait(`这种程度的雨，跟晨浴差不多吧。`);

    await tachyon.say_and_wait('不过现在应该说是傍晚浴才对吧……？');

    await tachyon.say_and_wait('我的身体还火热得不得了啊。');

    await tachyon.say_and_wait(
      `说不定现在才是我发挥作用的时候？${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }又是怎么想的呢？`,
    );
    era.printButton('「我知道了，那就跑吧。」', 1);
    era.printButton('「还是先不跑吧！」', 2);
    hook.arg = (await era.input()) === 1;
    if (hook.arg) {
      await tachyon.say_and_wait(
        `就是这样！我今天要跑一整晚哦。呵呵，天空好像也很高兴呢。`,
      );

      await tachyon.say_and_wait(`那就出发吧，走向风的世界。`);
      await era.printAndWait('于是额外训练，就在雨中不断持续下去了。');
    } else {
      await tachyon.say_and_wait('哎呀，真可惜。');
      await tachyon.say_and_wait('难得有这种机会的……！');
      await tachyon.say_and_wait(
        '不过这也是没办法的事情呢。毕竟体力的保存也很重要嘛……！',
      );
      await tachyon.say_and_wait('而且害训练员感冒的话，那就伤脑筋了呢。');
      await tachyon.say_and_wait(
        `虽然讨价还价也不好，不过${me.name}陪我去雨里兜风吧，就我们两个哦♪`,
      );
      era.println();
      await era.printAndWait(
        `雨天兜风虽然让我们精疲力尽，不过${tachyon.name}却似乎十分享受。`,
      );
    }
    era.println();
  }
};

/**
 * @param {HookArg} hook
 * @param {{fumble:boolean,train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  const love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32);
  extra_flag['args'] = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  if (extra_flag.fumble) {
    await print_event_name('严禁逞强！', tachyon);
    /* todo 德比前一周
    await chara_talk.say_and_wait(`这样的话，还是放弃吧`);
    await chara_talk.say_and_wait(`没关系的，因为有备用计画……`);
    await chara_talk.say_and_wait(`虽然不甘心，但……`, true);
    await me.say_and_wait(`速子！没事吧！`);
    await chara_talk.say_and_wait(`……为什么这么着急呢`);
    await chara_talk.say_and_wait(
      `如果，真的没有相信我的梦想的人那也罢了`,
      true,
    );
    await chara_talk.say_and_wait(`但是……只有他，他的期待……`, true);
    await chara_talk.say_and_wait(
      `算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止`,
    );
*/
    /* todo 德比后
    await me.say_and_wait(`速子！没事吧！`);
    await chara_talk.say_and_wait(`……不能啊`);
    await chara_talk.say_and_wait(`已经不能回头了`);
    chara_talk.print(`他的支持，让我走到了这一步`);
    chara_talk.print(`要是自己现在抽身，那可真是天大的笑话了`);
    chara_talk.print(`为了相信我的人……再坚持下去吧`);
  */
    /* todo PlanB 第二年十二月后
      await me.say_and_wait(`这样的话，还是放弃吧`);
      await chara_talk.say_and_wait(`反正，茶座君也已经成长起来了不是吗？`);
      await chara_talk.say_and_wait(`虽然很遗憾，但……`);
      await me.say_and_wait(`速子！没事吧！`);
      await chara_talk.say_and_wait(`……为什么这么着急呢`);
      await chara_talk.say_and_wait(
        `如果，真的没有相信我的梦想的人那也罢了`,
        true,
      );
      await chara_talk.say_and_wait(`但是……只有他，他的期待……`, true);
      await chara_talk.say_and_wait(
        `算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止`,
      );
  */
    await tachyon.say_and_wait(`好痛`);
    await tachyon.say_and_wait(`好可怕`);
    await tachyon.say_and_wait(`果然……我的极限就是……`);
  } else {
    if (love > 50) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 1)) {
        case 0:
          await tachyon.say_and_wait(`嗯～～豚鼠君，来帮我按摩一下～～`);
          await tachyon.say_and_wait(`要……那种按摩哦❤`);
          break;
        case 1:
          await tachyon.say_and_wait(`好痛……豚鼠君`);
          await tachyon.say_and_wait(`不，脚应该没事……`);
          await tachyon.say_and_wait(`但是，某人的下半身有没有事就不知道了`);
          await tachyon.say_and_wait(
            `为什么在看到我脱袜子时，忽然弯下腰了呢❤`,
          );
          await tachyon.say_and_wait(`要是有伤就不好了……让我看看吧❤`);
          break;
      }
    } else if (relation < 225) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(`咕……还是太勉强了吗？`);
          break;
        case 1:
          await tachyon.say_and_wait(`腿……无法动弹`);
          await tachyon.say_and_wait(`实验失败了啊……`);
          break;
        case 2:
          await tachyon.say_and_wait(`我的极限……就只有这样了吗`);
          break;
      }
    } else if (relation < 525) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(`豚鼠君……好痛……`);
          break;
        case 1:
          await tachyon.say_and_wait(
            `……没有关系，只是一时失败而已……重头再来实验……`,
          );
          break;
        case 2:
          await tachyon.say_and_wait(`咕嘶……豚鼠君……我，我没事。`);
          await tachyon.say_and_wait(`只要，休息一下……哈啊。`);
          break;
      }
    } else if (relation > 525) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(`起不来了……豚鼠君，背我～～`);
          break;
        case 1:
          await tachyon.say_and_wait(`腿好重……豚鼠君，回去帮我按摩一下……`);
          break;
        case 2:
          await tachyon.say_and_wait(
            `哼哼，区区一次实验失败而已，你不会以为这样就能把我击倒了吧，豚鼠君`,
          );
          break;
      }
    }
  }
};

handlers[event_hooks.out_start] = async (hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 32) {
    add_event(hook.hook, event_object);
    return;
  }
  const love = era.get('love:32'),
    tachyon = get_chara_talk(32),
    event_marks = new TachyonEduMarks();
  if (event_marks.hot_spring_event === 1) {
    event_marks.hot_spring_event++;
    if (event_marks.plan_b === 0) {
      await print_event_name(`薛定鄂的超光速粒子`, tachyon);
      await tachyon.say_and_wait(`对了，这么说起来，还有这个东西啊……`);
      await tachyon.say_and_wait(
        `感觉浪费了也不好，怎么样，豚鼠君？要一起去吗？`,
      );
      era.println();
      await era.printAndWait(`在偶然整理实验室时`);
      await era.printAndWait(`你们发现了被藏在某个角落的信封袋`);
      if (love > 75) {
        await era.printAndWait(`嗯……？`);
        await era.printAndWait(`不知道为什么，总觉得违和感十分重`);
        await era.printAndWait(`你仔细观察了一下，随即发现端倪`);
        await era.printAndWait(
          `明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着`,
        );
        await era.printAndWait(`联想到是速子『找』出来的，你大致猜到了真相`);
        era.println();
        await tachyon.say_and_wait(`嗯？豚鼠君？怎么了吗？`);
        era.println();
        await era.printAndWait(`……还是别说出来吧`);
        await era.printAndWait(
          `不然，速子恼羞成怒事小，问题在${tachyon.sex}恼羞成怒之后晚上自己绝对不会好受`,
        );
      }
      era.println();
      await era.printAndWait(
        `你们来到的温泉旅店，就商店街的活动标准来看，算是相当豪华的场所`,
      );
      await era.printAndWait(`独间的温泉池，日式的标准客房，甚至还有怀石料理`);
      await era.printAndWait(
        `不如说……一般商店街的抽奖真的会准备如此豪华的大奖吗？`,
      );
      await era.printAndWait(
        `难不成……其实一开始就是有人安排过的，只是借这个机会提供给${tachyon.get_uma_sex_title()}和训练员？`,
      );
      era.println();
      await era.printAndWait(`你坐在温泉池内，胡思乱想着一些无边无际的事情`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？我进去了哦～～`);
      era.println();
      await era.printAndWait(
        `忽然，负责${tachyon.get_uma_sex_title()}在门外的呼喊将你的神智唤回`,
      );
      await era.printAndWait(`你下意识的回答了请便后才想起现在自己正在泡汤`);
      await era.printAndWait(`现在要遮挡自己已经来不及了—————`);
      await era.printAndWait(
        `你连忙将身体完全缩进了温泉中，希望能靠着温泉的雾气稍微遮蔽一些不该被看到的部位`,
      );
      //todo if 已和速子有性经验
      await tachyon.say_and_wait(
        `豚鼠君—————怎么这么害羞的缩着身体呢？明明都已经看过那么多次了`,
      );
      //todo if 还未和速子有过性经验
      await tachyon.say_and_wait(
        `豚鼠君—————怎么这么害羞的缩着身体呢？明明实验的时候都全看光过了`,
      );
      era.println();
      await era.printAndWait(`虽然这么说，但速子的语气其实也有些拘谨`);
      await era.printAndWait(`与光着身子的你不同，速子的身上围了一层浴巾`);
      await era.printAndWait(`${tachyon.sex}自顾自的进了温泉，朝着你靠了过来`);
      await era.printAndWait(`随后坐在你的身旁，一脸放松的依偎着你`);
      era.println();
      await tachyon.say_and_wait(`总算……URA也结束了啊`);
      await tachyon.say_and_wait(`偶尔，像这样放松一下也不错呢`);
      era.println();
      await era.printAndWait(`${tachyon.sex}满足的叹了口气`);
      await era.printAndWait(
        `仿佛刚完成了一件大案子的社畜，在酒会上猛灌了口啤酒后吐出的那口气一般`,
      );
      await era.printAndWait(
        `说不清到底是解放感，成就感，可能……还有淡淡的，自己都找不到原因的失落感？`,
      );
      await era.printAndWait(`回想这三年，你和速子确实一起达到了许多成就`);
      await era.printAndWait(`三冠的道路，对情感的研究课题，与茶座的激战……`);
      await era.printAndWait(`还有更多更多，值得一提，或者不值一提`);
      await era.printAndWait(`这三年的重量，让你不由得也和速子一样吐出了叹息`);
      era.println();
      await era.printAndWait(
        `接下来的时间，你们二人谁也没说话，只是互相依偎着`,
      );
      await era.printAndWait(
        `此时的你才发觉，身旁的${tachyon.sex}身体是如此娇小`,
      );
      await era.printAndWait(
        `此时不是什么天才${tachyon.get_uma_sex_title()}，也不是疯狂科学家`,
      );
      await era.printAndWait(
        `${tachyon.sex}也不过是一名普通的${tachyon.get_teen_sex_title}而已`,
      );
      era.println();
      await era.printAndWait(`热烟缭绕的温泉中，静静享受着片刻宁静的两人`);
      await era.printAndWait(
        `对熟知麻烦制造者${tachyon.name}，以及助纣为虐的其负责训练员的人来说，这想必是难以置信的画面吧`,
      );
      await era.printAndWait(`但此时，两人便是如此沉浸于此`);
      era.drawLine();
      await tachyon.say_and_wait(`豚鼠君，你知道，薛定鄂的猫吗？`);
      era.println();
      await era.printAndWait(`忽然，速子打破了这份沉默`);
      await era.printAndWait(`薛定鄂的猫……？`);
      era.printButton(`不知道`, 1);
      era.printButton(`知道`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(
          `薛定鄂的猫，最早是薛定鄂用以反驳量子力学而提出的假想实验，`,
        );
        await tachyon.say_and_wait(
          `令人讽刺的是，现在却变成了用以诠释量子力学的最佳代表`,
        );
        await tachyon.say_and_wait(
          `简单来说，就是将放射性物质、会被放射线触发的毒气开关，以及猫放在完全隔绝外界的箱子中`,
        );
        await tachyon.say_and_wait(
          `没有人知道放射性物质何时会衰变生成放射线，`,
        );
        await tachyon.say_and_wait(
          `换言之，没有人知道开关究竟会不会触发，在打开箱子前，猫会同时处于死亡和生存的叠加状态`,
        );
      } else {
        await tachyon.say_and_wait(
          `关于这个实验，如今各种学派都有各自的想法，但万变不离其宗的……你知道，这个实验中最重要的是什么吗？`,
        );
      }
      era.printButton(`……猫？`, 1);
      era.printButton(`……毒气？`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `哈哈，确实，要是没有这些的话实验根本是无法成立的……不过，都不对哦`,
      );
      era.println();
      await era.printAndWait(
        `忽然，速子从温泉里站起身来，面对着你，与你双目相对`,
      );
      await era.printAndWait(`那酒红色的眼眸如久酿的蜜泉一般，令人沉醉`);
      await era.printAndWait(
        `忽然你有些好奇，这样的${tachyon.sex}也曾经评价过自己拥有一双疯狂的眼睛`,
      );
      await era.printAndWait(
        `那么现在，从${tachyon.sex}的眼眸中看见的又是什么呢？`,
      );
      era.println();
      await tachyon.say_and_wait(`答案是—————『观测者』`);
      await tachyon.say_and_wait(
        `无论猫是死是活，这都只是『可能』，是无限接近，却无法定型的可能性`,
      );
      await tachyon.say_and_wait(
        `只有在加入了观测后，可能性才能彻底定型，化为无论生死的结果`,
      );
      era.println();
      await era.printAndWait(`换言之`);
      await era.printAndWait(
        `${tachyon.name}伸出手，好似想要触碰你的眼睛，却又有些颤抖，怕一不小心伤害到你`,
      );
      await era.printAndWait(
        `你主动抓住了${tachyon.sex}的手，缓慢，却稳当的朝着自己的双眼靠近`,
      );
      era.println();
      await tachyon.say_and_wait(`你，就是我的观测者`);
      await tachyon.say_and_wait(`是将${tachyon.name}的可能性固定的人`);
      await tachyon.say_and_wait(`是决定了此刻的${tachyon.name}的人`);
      await tachyon.say_and_wait(
        `在这场实验中，你才是研究者，而我，不过是被你放进箱子里的猫而已`,
      );
      era.println();
      await era.printAndWait(`轻轻的，碰到了`);
      await era.printAndWait(`没什么特殊的感觉，除了眼珠被触碰的刺痛感`);
      await era.printAndWait(`但速子仿佛这样就满足了一般，主动收回了手`);
      era.println();
      await tachyon.say_and_wait(`今后的实验……还请多多指教`);
      await tachyon.say_and_wait(`我亲爱的，教授君`);
      await tachyon.say_and_wait(`等会出去，不要忘记我给你准备的礼物哦`);
      era.println();
      await era.printAndWait(`说完后，速子便先上了岸`);
      era.println();
      await tachyon.say_and_wait(
        `对了，今天的药我加在冰镇牛奶里了，要记得喝哦`,
      );
      era.println();
      await era.printAndWait(
        `…………最起码，会帮自己准备冰牛奶，这也算是一种成长吗？`,
      );
      await era.printAndWait(
        `你一边思考着近似于被PUA的人会有的想法，一边决定在温泉里再多泡一会`,
      );
      //todo 结束后获得道具，[用途不明的眼镜]
    } else {
      await print_event_name(`其他的可能性`, tachyon);
      await tachyon.say_and_wait(`对了，这么说起来，还有这个东西啊……`);
      await tachyon.say_and_wait(
        `感觉浪费了也不好，怎么样，豚鼠君？要一起去吗？`,
      );
      era.println();
      await era.printAndWait(`在偶然整理实验室时`);
      await era.printAndWait(`你们发现了被藏在某个角落的信封袋`);
      if (love > 75) {
        await era.printAndWait(`嗯……？`);
        await era.printAndWait(`不知道为什么，总觉得违和感十分重`);
        await era.printAndWait(`你仔细观察了一下，随即发现端倪`);
        await era.printAndWait(
          `明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着`,
        );
        await era.printAndWait(`联想到是速子『找』出来的，你大致猜到了真相`);
        era.println();
        await tachyon.say_and_wait(`嗯？豚鼠君？怎么了吗？`);
        era.println();
        await era.printAndWait(`……还是别说出来吧`);
        await era.printAndWait(
          `不然，速子恼羞成怒事小，问题在${tachyon.sex}恼羞成怒之后晚上自己绝对不会好受`,
        );
      }
      era.println();
      await era.printAndWait(`正好，现在该忙的事也差不多忙完了`);
      await era.printAndWait(`茶座的URA总决赛也已经结束`);
      await era.printAndWait(`有机会就一起去吧`);
      era.drawLine();
      await era.printAndWait(`坐了将近十多个小时的车后`);
      await era.printAndWait(`你和速子总算抵达了温泉旅馆`);
      era.println();
      await tachyon.say_and_wait(`呼……总算到了啊`);
      await tachyon.say_and_wait(`我说……我们真的没走错吧`);
      era.printButton(`……地图写的确实是这里没错`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`也不免你们会有些迟疑`);
      await era.printAndWait(
        `此处两人所在的地方，是称之为原始森林也不为过的深山`,
      );
      await era.printAndWait(`这种地方，真的会有温泉吗……`);
      era.println();
      await tachyon.say_and_wait(
        `我找找……等一下，为什么这里连讯号都没有啊！？`,
      );
      era.println();
      await era.printAndWait(`你掏出手机来看，深山裏确实毫无讯号`);
      await era.printAndWait(`这下……可不妙了`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……要不，我们回去吧`);
      era.println();
      await era.printAndWait(`正当你也想着打退堂鼓的时候`);
      await era.printAndWait(`在拨开一层树丛，出现在眼前的赫然是一座温泉旅馆`);
      era.drawLine();
      await era.printAndWait(`你和速子在前台登记入住后，你便马上进了露天温泉`);
      await era.printAndWait(
        `在还未完全回暖的冬天，坐了十几个小时的车后又跋山涉水，真的把人累坏了`,
      );
      await era.printAndWait(
        `但在深山也不是没有好处，整间旅馆除了自己两人外就没有其他的客人了，可以说是一人独占整间旅馆的状态`,
      );
      await era.printAndWait(`因此，此时泡的温泉格外使人舒畅`);
      era.println();
      era.printButton(`……嗯？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`这时更衣室的门帘响起了有人的声音`);
      await era.printAndWait(`嗯？才说完没人的，结果就有其他人来了吗？`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？你在里面吗？`);
      era.println();
      await era.printAndWait(`……啊？`);
      era.printButton(`速……速子！？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`哦哦，你在啊，那么我就直接进来了`);
      era.println();
      await era.printAndWait(
        `说完后，${tachyon.sex}不等你回应便推开了更衣间的门走了进来`,
      );
      await era.printAndWait(
        `……看见${tachyon.sex}身上裹着浴巾的模样，你的心中不知是庆幸还是失望`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哈哈哈！那种表情，你以为我会光着身体进来吗？`,
      );
      await tachyon.say_and_wait(`再怎么说那种常识我也还是有的`);
      era.println();
      await era.printAndWait(
        `虽然语气上仿佛在逗自己玩，但你总觉得${tachyon.sex}似乎有些什么话想说`,
      );
      era.println();
      await tachyon.say_and_wait(
        `我刚刚和柜台的老板娘聊了会……${tachyon.sex}啊，完全不知道我是谁`,
      );
      await tachyon.say_and_wait(
        `或者说不知道赛${tachyon.get_uma_sex_title()}${tachyon.name}是谁`,
      );
      era.println();
      await era.printAndWait(`仿佛怕你误会，速子连忙补充了一句`);
      await era.printAndWait(
        `认不出速子或许可以理解，毕竟不是每个人都对${tachyon.get_uma_sex_title()}的比赛热衷到记得每一名选手的模样`,
      );
      await era.printAndWait(
        `但不认识赛${tachyon.get_uma_sex_title()}的${
          tachyon.name
        }……不认识拿下了世界最高峰，凯旋门赏冠军的${tachyon.get_uma_sex_title()}，在这个世界上确实稀奇`,
      );
      await era.printAndWait(
        `但想想这里是如此偏远的旅馆，忽然又觉得大概也算正常了`,
      );
      era.println();
      await tachyon.say_and_wait(
        `说真的，挺令人吃惊啊……居然会有人真的，完全不知道，不认识……`,
      );
      era.println();
      await era.printAndWait(`你等着速子继续说下去`);
      await era.printAndWait(
        `虽然确实也让你震惊了一下，但${
          tachyon.name
        }也不是那种好名利的${tachyon.get_uma_sex_title()}，名声这种东西更可以说是${
          tachyon.sex
        }最不在乎的东西之一了`,
      );
      await era.printAndWait(`特别提出这个，想必是有什么其他的理由吧`);
      //todo  圣诞节选择选项2较多
      era.println();
      await tachyon.say_and_wait(`你还记得圣诞节那天的事吗？`);
      era.println();
      await era.printAndWait(`圣诞节……你想起了那间小居酒屋`);
      await era.printAndWait(`赛场的世界好像真的与其毫无相干`);
      await era.printAndWait(`没有比赛，这些人的人生也一样在运转着`);
      await era.printAndWait(`此时此刻，恰如彼时彼刻`);
      await era.printAndWait(`……当时自己对速子提出的可能性是拒绝的`);
      await era.printAndWait(
        `因为当时的${tachyon.sex}只是为了逃避而选择离开赛场`,
      );
      await era.printAndWait(`那，现在呢？`);
      await era.printAndWait(`你默默等待着速子将话说完`);
      era.println();
      await era.printAndWait(`坐在岸边的${tachyon.sex}不发一语`);
      await era.printAndWait(`在月光下看起来是无比的寂静，宛如身处画中`);
      await era.printAndWait(
        `这是但凡认识${tachyon.sex}，认识${
          tachyon.name
        }这名${tachyon.get_uma_sex_title()}的人都难以想像的`,
      );
      await era.printAndWait(`${tachyon.name}，竟然会与宁静这个词如此般配`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……那天的回答，你还没给我吧`);
      await tachyon.say_and_wait(`这样的可能性，是可以存在的吗？`);
      await tachyon.say_and_wait(
        `不停追寻可能性的科学家，某天忽然觉得累了，没有任何契机，`,
      );
      await tachyon.say_and_wait(
        `只是觉得差不多够了，接下来的道路，交给后来的人吧……`,
      );
      await tachyon.say_and_wait(`只想与自己重视的，重视自己的人一起生活……`);
      await tachyon.say_and_wait(
        `你不觉得，对这种人而言……这样的地方，就很适合吗？`,
      );
      era.println();
      await era.printAndWait(`没有人认识${tachyon.name}的地方`);
      await era.printAndWait(`不需要继续探索可能性`);
      await era.printAndWait(
        `可以停下来歇歇脚，或者……就这么在此过着平安喜乐的生活`,
      );
      await era.printAndWait(`这样的可能性……`);
      era.printButton(`听起来……挺不错的`, 1);
      era.printButton(`或许……再思考看看吧`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……呵呵`);
      era.println();
      await era.printAndWait(`对你的回答，速子没有多说什么`);
      await era.printAndWait(
        `${tachyon.sex}用脚滑绕着水面，在水上荡出层层水波`,
      );
      await era.printAndWait(`忽然，风起，你听见整个森林又活了起来`);
      await era.printAndWait(`树叶沙沙落下，夜晚安眠的鸟雀被惊醒呱呱乱飞`);
      await era.printAndWait(
        `夜晚的寂静，仿佛因为${tachyon.sex}这一时的搅乱而被瞬间打破`,
      );
      era.println();
      await era.printAndWait(`这样的${tachyon.sex}，真的能过上那样的生活吗？`);
      await era.printAndWait(
        `想到无论能与不能会带来的可能性，让你忽然有些兴奋`,
      );
      await era.printAndWait(
        `不过，无论能与不能，自己都必然陪伴着${tachyon.sex}，直到最后的吧`,
      );
      // todo 圣诞节选择选项1较多
      era.println();
      await tachyon.say_and_wait(`这个地方，很安静呢`);
      era.println();
      await era.printAndWait(
        `……除了风声，以及温泉水的声音外，就没有任何其他人声的温泉旅馆`,
      );
      await era.printAndWait(
        `过于寂静的环境在其他时刻或许会让人有些恐惧，但有了速子陪伴，这样的空间其实也不是无法忍受`,
      );
      era.println();
      await tachyon.say_and_wait(`而且，也很大`);
      era.println();
      await era.printAndWait(
        `……毕竟是温泉旅馆，虽然现在只有自己两人，但原本设计来容纳数百名游客的旅馆，大也是当然的`,
      );
      era.println();
      await tachyon.say_and_wait(`而且，没什么人`);
      era.println();
      await era.printAndWait(`……毕竟在这样的深山里啊`);
      await era.printAndWait(
        `一连说了许多没头没脑的话，导致你越发无法理解速子到底想说什么`,
      );
      era.println();
      era.println();
      await tachyon.say_and_wait(
        `如此广大，宁静，祥和的地方……应该也容得下一名凯旋门赏${tachyon.get_uma_sex_title()}和${
          tachyon.sex
        }的训练员吧`,
      );
      await tachyon.say_and_wait(
        `像这样……无人认识，安静平和的生活……也是一种可能性吗？`,
      );
      era.println();
      await era.printAndWait(`${tachyon.get_uma_sex_title()}的可能性`);
      await era.printAndWait(`这是速子总放在口上的话`);
      await era.printAndWait(
        `但${tachyon.get_uma_sex_title()}是无法一辈子奔跑的`,
      );
      await era.printAndWait(
        `就算是赛${tachyon.get_uma_sex_title()}，也终会走上离开赛场，离开对速度的追求的道路`,
      );
      era.println();
      await era.printAndWait(`那么，这种可能性能否共用在速子身上呢？`);
      await era.printAndWait(`对速子而言，会有这样的可能性吗？`);
      await era.printAndWait(`成为茶楼老板的速子`);
      await era.printAndWait(`走上科研道路成为科学家的速子`);
      await era.printAndWait(
        `作为普通的学生，继续升学，成为大学生而后进入社会变成上班族的速子`,
      );
      await era.printAndWait(
        `${tachyon.sex}也会有吗，像正常人一样，离开赛场，过着自己的生活的日子`,
      );
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，你愿意跟着我吗？`);
      await tachyon.say_and_wait(`如果……我选择了这种可能性的话`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，你愿意跟着我吗？`);
      await tachyon.say_and_wait(`如果……我选择了这种可能性的话`);
      era.println();
      await era.printAndWait(
        `和速子一起，过着与比赛无关，与${tachyon.get_uma_sex_title()}的速度无关的平淡，祥和的日常`,
      );
      await era.printAndWait(`那样的生活，想必会十分美好吧`);
      await era.printAndWait(`就算是平淡的生活，只要有速子在，就绝对不会无聊`);
      era.printButton(`听起来……挺不错的`, 1);
      era.printButton(`或许……再思考看看吧`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……呵呵`);
      era.println();
      await era.printAndWait(`对你的回答，速子没有多说什么`);
      await era.printAndWait(
        `${tachyon.sex}用脚滑绕着水面，在水上荡出层层水波`,
      );
      await era.printAndWait(`忽然，风起，你听见整个森林又活了起来`);
      await era.printAndWait(`树叶沙沙落下，夜晚安眠的鸟雀被惊醒呱呱乱飞`);
      await era.printAndWait(
        `夜晚的寂静，仿佛因为${tachyon.sex}这一时的搅乱而被瞬间打破`,
      );
      era.println();
      await era.printAndWait(`这样的${tachyon.sex}，真的能过上那样的生活吗？`);
      await era.printAndWait(
        `想到无论能与不能会带来的可能性，让你忽然有些兴奋`,
      );
      await era.printAndWait(
        `不过，无论能与不能，自己都必然陪伴着${tachyon.sex}，直到最后的吧`,
      );
      era.println();
      await tachyon.say_and_wait(`话说`);
      era.println();
      await era.printAndWait(`在周围的环境恢复冬夜的宁静及吵杂后`);
      await era.printAndWait(`速子仿佛忽然想起一般开口说道`);
      await era.printAndWait(
        `一边说着，一边悄悄将浴巾的下摆卷了起来，直到接近大腿根部`,
      );
      era.println();
      await tachyon.say_and_wait(`虽然包了浴巾比较抱歉……`);
      await tachyon.say_and_wait(`但是，下面确实是没穿的哦……要看看吗？`);
      era.println();
      await era.printAndWait(
        `速子用玩味的眼神看着你，手上慢慢的将浴巾打结的部分悄悄揭开`,
      );
      await era.printAndWait(`你看见了浴巾下若隐若现，似乎有些潮湿的缝隙`);
      await era.printAndWait(`……大概，是温泉水吧`);
      await era.printAndWait(
        `虽然知道速子明明还没进入温泉，但你还是决定这么骗自己`,
      );
      era.printButton(`在温泉里，不太好吧……`, 1);
      era.printButton(`要不，等到回房间……？`, 2);
      await era.input();
      await tachyon.say_and_wait(
        `我已经确认过了……这几天只有我们有预定住宿，所以就算在这里做什么都不会有关系`,
      );
      await tachyon.say_and_wait(
        `除此之外……因为不会有人来，所以就算你想反抗，也是没用的哦♡`,
      );
      await tachyon.say_and_wait(`放宽心，好好享受吧`);
      era.println();
      await era.printAndWait(
        `不知何时脱下浴巾，赤裸着身子进入温泉的速子趴在了你的身上，将那在进入温泉前就已经完全湿透的粉嫩缝隙对准了粗棒……`,
      );
      await era.printAndWait(`云雨过后，速子先一步出了温泉`);
      await era.printAndWait(
        `你看着${tachyon.sex}满足的摸着稍微有些变大的肚子的模样，以及顺着大腿流出，`,
      );
      await era.printAndWait(`不知是温泉水还是其他什么东西的透明液体，`);
      await era.printAndWait(
        `还有从一字型变成了双唇模样，唇间还留着刚偷吃完的白浆的穴口`,
      );
      await era.printAndWait(`胯下又一次硬了起来`);
      await era.printAndWait(
        `${tachyon.sex}仿佛察觉到了一般，稍稍扭动了一下屁股`,
      );
      await era.printAndWait(`看来回房之后，又会是一场恶战啊……`);
      await era.printAndWait(`在大战前，你望着天空，享受战前最后的宁静`);
    }
  }
};
handlers[event_hooks.out_church] = async () => {
  const event_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:32:育成回合计时');
  const tachyon = get_chara_talk(32);
  if (event_marks.deities_possible === 1) {
    event_marks.deities_possible++;
    await print_event_name(`神明捕捉行动`, tachyon);
    await era.printAndWait(`今天，你与速子一起前往神社时……`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君！还不快点！要是让『神明大人』等急了就不好了！`,
    );
    era.println();
    await era.printAndWait(`速子兴奋的跑上神社阶梯回头喊道`);
    await era.printAndWait(
      `姑且不论以人类之身追上${tachyon.get_uma_sex_title()}的可能性，除了物理上的不可能外，`,
    );
    await era.printAndWait(
      `在精神上你也死命的想要拒绝接下来的行为，但在爱马的任性要求下，你依然只能露出苦笑勉强跟上`,
    );
    era.println();
    await era.printAndWait(`事情的起因……说来复杂，却也简单`);
    await era.printAndWait(`一言以蔽之`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君，你知道的吧，我一向是不相信什么灵魂鬼神的存在的，`,
    );
    await tachyon.say_and_wait(
      `但是，在未经确认前便加以否认这也不符合研究者应有的态度`,
    );
    await me.say_and_wait(`嗯嗯`);
    await tachyon.say_and_wait(`但是要如何验证呢，从以前其实就一直有种说法，`);
    await tachyon.say_and_wait(`所谓的鬼神，其实就是自然界游离的能量团而已，`);
    await tachyon.say_and_wait(
      `虽然这样的说法有失偏颇，但确实能够以此为基础去进行验证`,
    );
    await me.say_and_wait(`嗯嗯`);
    era.println();
    await tachyon.say_and_wait(
      `所以，如此如此这般这般，我们去神社捕捉神明吧！`,
    );
    await me.say_and_wait(`嗯……嗯？`);
    era.println();
    await era.printAndWait(
      `如果说真的有这么一种一般人类无法感知无法察觉的东西存在，`,
    );
    await era.printAndWait(`那他的存在本身必然也需要能量，`);
    await era.printAndWait(
      `因此初步选择能够探测到不正常的能量消耗地方为探测基准，`,
    );
    await era.printAndWait(`但都市内乱七八糟的干扰太多，`);
    await era.printAndWait(
      `相比之下，要想探查的话最好当然就是地处偏远的神社了，`,
    );
    await era.printAndWait(
      `除此之外，既然称之为神，那么能量的等级必然也跟一般的鬼魂不同，`,
    );
    await era.printAndWait(
      `要是连在神社都补捉不到所谓神明，那么基本就可以认定这种东西是不可能存在的………`,
    );
    era.println();
    await era.printAndWait(`总而言之，大致上就是出于如此不敬的原因，`);
    await era.printAndWait(`你们今日来到了偏远地方无人经过的神社`);
    await era.printAndWait(
      `南无三，还请三女神大人有大量，别计较这种小事情了，万分拜托，阿弥陀佛，阿门`,
    );
    era.println();
    await era.printAndWait(`带着万分不情愿的心情，你总算爬上了神社`);
    await era.printAndWait(
      `在你的以死相逼的恳求下，速子心不甘情不愿的答应了在开始使用${tachyon.sex}手上那莫名其妙的能量探测器之前先参拜一次表示敬意`,
    );
    era.println();
    await era.printAndWait(`于是你们双手合十，朝着神社敬拜……`);
    await tachyon.say_and_wait(`好啦！那么废话不多说就让我们开始……`);
    era.println();
    await era.printAndWait(
      `参拜完的瞬间，速子便拿起了${tachyon.sex}放在一旁的能量探测器对准了神社的方向开始探测`,
    );
    await era.printAndWait(
      `你只能苦笑着站在一旁祈祷神明大人有大量不要跟小孩子计较了`,
    );
    era.println();
    switch (get_random_value(0, 1)) {
      case 0:
        await tachyon.say_and_wait(
          `嗯嗯……嗯嗯……！等一下！豚鼠君！你过来看，这里好像有………`,
        );
        era.println();
        await era.printAndWait(
          `你听见速子的呼喊声急忙跑了过去，却发现${tachyon.sex}在探测到某个地方后就忽然不动了`,
        );
        await era.printAndWait(
          `你连忙上去拍${tachyon.sex}的肩膀确认是否没事，${tachyon.sex}却忽然将你扑倒在地`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}将你的双手按倒在地，你面朝天，看着压在自己身上的速子，`,
        );
        await era.printAndWait(
          `${tachyon.sex}的眼神冷酷，但在冷酷之下彷佛又藏着一丝狂热，`,
        );
        await era.printAndWait(`像是捕捉到猎物，正要开始进食的猫科动物一般`);
        era.println();
        await me.say_and_wait(
          `这下真的遭天谴了吗……不是，为什么受天谴的是我不是${tachyon.sex}啊！？`,
          true,
        );
        era.println();
        await era.printAndWait(`万般话语也陷入了无力的无奈`);
        await era.printAndWait(`你只能眼睁睁看着${tachyon.sex}的下一步动作`);
        era.println();
        await era.printAndWait(
          `在确认你已经失去反抗的意志后，${tachyon.sex}松开了一只手，解开你的衬衫上衣`,
        );
        era.println();
        await era.printAndWait(`啊啊，这样要训练员失格了啊，你心中无奈的想着`);
        await era.printAndWait(`${tachyon.sex}拉开了你的上衣，然后……`);
        era.println();
        await tachyon.say_and_wait(`喵～～～`);
        era.println();
        await era.printAndWait(
          `${tachyon.sex}发出了小猫一般的叫声，像猫一样钻进你的怀中，发出舒服的咕噜声`,
        );
        await era.printAndWait(
          `当然，即便动作再像猫，依然改变不了${
            tachyon.sex
          }的身体是${tachyon.get_uma_sex_title()}身体的事实，`,
        );
        await era.printAndWait(`虽然想象小猫一样钻进衬衫，但就你所看见的，`);
        await era.printAndWait(
          `${tachyon.sex}的行为不过是在解开上衣后便躺在你赤裸的胸板上磨蹭`,
        );
        era.println();
        await tachyon.say_and_wait(`喵～～喵呜～喵`);
        era.println();
        await era.printAndWait(
          `似乎对这样的接触有些不满意，${tachyon.sex}换了个方式，拉起了你的双手，使你的双手重迭在${tachyon.sex}的肚子上`,
        );
        await era.printAndWait(
          `你想趁机起身，但察觉到你的动作后用力压下的重量使你再次无法动弹`,
        );
        await era.printAndWait(
          `你只能继续任由${tachyon.sex}将你的手摆成了拥抱的姿势`,
        );
        await era.printAndWait(
          `${tachyon.sex}在固定完你手的姿势后，便翻了个身，脸颊平贴在你的胸膛上，发出了满足的声音`,
        );
        era.printButton(`……速子？`, 1);
        await era.input();
        era.println();
        await era.printAndWait(
          `这只小猫没有做出回答，渐渐的，${tachyon.sex}的呼吸趋于平缓，然后……`,
        );
        era.println();
        await tachyon.say_and_wait(`zzz……喵……zzz……`);
        era.println();
        await era.printAndWait(`就这么躺在你的胸膛上睡着了`);
        await era.printAndWait(`现在的你倒是能够将${tachyon.sex}挣脱，但……`);
        era.println();
        await era.printAndWait(`现在速子的模样明显的很不正常`);
        await era.printAndWait(`但是无论如何，前面都被折腾成这样了`);
        await era.printAndWait(
          `睡着的现在，让自己稍稍收点补偿应该，也没关系吧？`,
        );
        era.println();
        await era.printAndWait(
          `你轻轻松开了抱住${tachyon.sex}的臂弯，将一只手伸向了上方…………`,
        );
        era.println();
        await era.printAndWait(
          `好软，好舒服……原来如此，这就是${tachyon.get_uma_sex_title()}的………`,
        );
        era.println();
        await era.printAndWait(`耳朵啊`);
        era.println();
        await era.printAndWait(
          `你轻轻抚摸着这只小猫的头，不时搓揉头顶上垂下的耳朵，柔软却富有弹性的毛茸茸触感使你忍不住一摸再摸`,
        );
        era.println();
        await tachyon.say_and_wait(`喵呀……咕噜……喵喵`);
        era.println();
        await era.printAndWait(
          `梦中的小猫也发出了可爱的声音，彷佛在鼓励着你继续动作`,
        );
        await era.printAndWait(`不妙啊……这种软绵绵的触感……要沦陷了………`);
        era.println();
        await era.printAndWait(`不知不觉，你也陷入了梦乡…………`);
        era.drawLine();
        await tachyon.say_and_wait(`啊啊啊啊啊！！！我的仪器啊啊啊啊啊！！！`);
        era.println();
        await era.printAndWait(`你看着发出悲鸣的速子，露出苦笑`);
        await era.printAndWait(
          `先前不知道发生了什么事，你们忽然就在神社里昏过去了，再次醒来时速子发现${tachyon.sex}花了大钱(貌似)买的仪器就这么不动了`,
        );
        await era.printAndWait(
          `奇怪的是，两人的记忆都只停留在参拜的瞬间，参拜后发生了什么竟然一点印象都没有，`,
        );
        await era.printAndWait(
          `不过不知为何，你感觉身体一阵舒畅，彷佛在昏迷前做了什么抒发压力的举动`,
        );
        await era.printAndWait(
          `……你忽然想起醒来时发现上衣扣子被全数解开的事情，在昏迷前到底发生了甚么呢`,
        );
        await era.printAndWait(`……果然，鬼神什么的还是多少信一些吧`);
        era.println();
        await era.printAndWait(`你带着速子离开了神社`);
        break;
      case 1:
        era.println();
        await era.printAndWait(
          `你看着他拿着探测器在神社内戳来戳去，也不知道这样到底有没有效`,
        );
        era.drawLine();
        era.println();
        await tachyon.say_and_wait(`…………果然，什么也没有啊`);
        era.println();
        await era.printAndWait(`速子一脸失望的说道`);
        await era.printAndWait(
          `你也不明白${tachyon.sex}为什么会如此失望，证明了鬼神的不存在不应该是对${tachyon.sex}而言的好事吗？`,
        );
        await era.printAndWait(`在不明所以中，你们就这么下了山回去了`);
        break;
    }
  } else if (edu_weeks === 95 + 1 && event_marks.plan_b === 0) {
    await print_event_name('三期目标和最终完成度确认', tachyon);
    // todo PlanA
    await era.printAndWait(`今年，就是与${tachyon.name}的古典年了`);
    await era.printAndWait(
      `今年两人的目标……虽然先前没有明说，但果然，要以最强为目标的话，那两场比赛就是绝不可少的`,
    );
    await era.printAndWait(
      `【宝冢纪念】和【有马纪念】啊……除此之外，【大阪杯】若是有机会的话也想参加`,
    );
    era.println();
    await era.printAndWait(
      `能够赢下这三场比赛的话，应该就能抵达所谓${tachyon.get_uma_sex_title()}的极限了吧`,
    );
    await era.printAndWait(
      `但是，速子的目标不只在此，${tachyon.sex}的目标是……超越极限`,
    );
    await era.printAndWait(`所以除了比赛之外，研究上的协助也不能忘了……`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，来的这么早啊？`);
    era.println();
    await era.printAndWait(`不知不觉，说好了今天一起来参拜的速子也已经到了`);
    era.printButton(
      `那当然！今年的古典战线，还有其他各式各样的事情……要许的愿太多了！`,
      1,
    );
    await era.input();
    if (relation < 0) {
      await tachyon.say_and_wait(
        `呵，怪力乱神的东西都当成宝，想那种事还不如专心想想怎么帮助我的实验吧`,
      );
    } else if (relation < 225 && relation > 0) {
      await tachyon.say_and_wait(
        `呵呵，虽然我不相信这种怪力乱神的东西，但姑且还是接受你的好意了`,
      );
    } else if (relation > 225) {
      await tachyon.say_and_wait(`是吗？那么，你的愿望必然会被实现`);
    }
    era.println();
    await era.printAndWait(`听见速子的口气，你有些意外`);
    await era.printAndWait(
      `原本以为对这种迷信的事${tachyon.sex}大概就算不是嗤之以鼻，也不会认真对待吧`,
    );
    await era.printAndWait(
      `然而${tachyon.sex}的口气听起来却仿佛打从心底确信如此`,
    );
    era.printButton(`速子……？`, 1);
    era.printButton(`你不是不信这些吗？`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `当然了，比起神明什么的，我更信任手上的研究……但是，比起研究，我更加信任的，是你`,
    );
    era.println();
    await era.printAndWait(`准确来说，是你做出的努力`);
    await era.printAndWait(`${tachyon.sex}补充道`);
    era.println();
    await tachyon.say_and_wait(
      `你这一年所做的努力，必然能够受到回报，如果神明不给，那么就由我来给`,
    );
    era.println();
    await era.printAndWait(`速子自信满满的说道。`);
    await me.say_and_wait(`取代神明的功能吗？`, true);
    await era.printAndWait(
      `真像速子会说的话啊，不过……在神社里还是别这样讲比较好吧`,
    );
    if (love > 50 && love < 75) {
      await tachyon.say_and_wait(`其他的愿望……比如呢？`);
      era.println();
      await era.printAndWait(`速子饶有兴致的看着你`);
      era.printButton(`希望……和速子的关系变得更好`, 1);
      era.printButton(`希望……与其他担当的关系变得更好`, 2);
      era.printButton(`希望……丝之歌今年能出！`, 3);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`呵呵，我相信，一定会的❤`);
      } else if (ret1 === 2) {
        await tachyon.say_and_wait(
          `……特别讲其他担当故意想惹我生气？可惜，我是不会上这种当的`,
        );
        era.println();
        await era.printAndWait(`虽然这么说，但速子还是不高兴的鼓起了脸颊`);
      } else {
        await tachyon.say_and_wait(
          `欸……那是什么东西……圣巢？空洞骑士？……原来豚鼠君你这么喜欢游戏吗？`,
        );
      }
    } else if (love > 75) {
      await tachyon.say_and_wait(`这样啊……那么，有没有什么想向我许的愿呢？❤`);
      era.println();
      await era.printAndWait(`速子用魅惑的眼神，带着暗示意味的询问你`);
      await era.printAndWait(`自己有没有什么，这一年希望能对速子做的事……`);
      era.printButton(`希望能跟速子更多的sex`, 1);
      era.printButton(`希望速子的身体更加敏感`, 2);
      era.printButton(`希望被速子踩`, 3);
      era.printButton(`希望速子认真训练`, 4);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`……色鬼，想做的话，回去再说吧`);
        era.println();
        await era.printAndWait(`速子靠在你耳边轻声说道`);
      } else if (ret1 === 2) {
        await tachyon.say_and_wait(
          `这个嘛……吃药的话倒是很简单就能达到了，不过，还是希望豚鼠君你能透过自己的手来让我变成你喜欢的样子呢❤`,
        );
        era.println();
        await era.printAndWait(`速子爬在你肩上，惬意的说着`);
      } else if (ret1 === 3) {
        await tachyon.say_and_wait(`居然许这种愿望…果然是变态啊，豚鼠君`);
        era.println();
        await era.printAndWait(
          `虽然嘴上这样说着，但速子却悄悄脱下了鞋，露出黑丝包裹的足底`,
        );
        await era.printAndWait(`今天为了参拜走了一整天，被酿窖入味的黑丝`);
        era.println();
        await tachyon.say_and_wait(`想要……被这样的双足踩吗?`);
        await tachyon.say_and_wait(
          `想被压在脸上，让肺部被我足底的肮脏空气灌满吗?`,
        );
        await tachyon.say_and_wait(
          `想要被踩着肉棒，直到整根肉棒都被我的足臭和你的先走汁弄得哪怕十米内都能闻到上面的气味吗?`,
        );
        era.println();
        await era.printAndWait(`你狂热的望着速子，答案不言自喻`);
        era.println();
        await tachyon.say_and_wait(`……色鬼，想做的话，回去再说吧`);
        era.println();
        await era.printAndWait(`速子靠在你耳边轻声说道`);
      } else {
        await tachyon.say_and_wait(`……不解风情的家伙`);
        era.println();
        await era.printAndWait(`速子无趣的切了一声`);
      }
    }
    era.drawLine();
    await era.printAndWait(
      `虽然过年的神社十分热闹，你们还是很快就结束了参拜的过程`,
    );
    await era.printAndWait(`结束参拜后，你和速子讨论了今年度的计画`);
    era.println();
    await tachyon.say_and_wait(`嗯……就像十一月那时谈论过的一样，没有问题`);
    era.println();
    await era.printAndWait(
      `比赛的事情简单的就过去了，接下来，才是今天的重头戏`,
    );
    // todo if 全属性1200
    era.println();
    await tachyon.say_and_wait(
      `极限……在我们的努力之下，我可以大胆说出现在的自己已经到达了极限……${tachyon.get_uma_sex_title()}的极限`,
    );
    // todo if 尚未1200
    era.println();
    await tachyon.say_and_wait(
      `极限……虽然目前还没达到，但坚持实验下去迟早能够达到，所以不成问题`,
    );
    era.println();
    await tachyon.say_and_wait(`唯一的问题是……跨越极限`);
    await tachyon.say_and_wait(`而关于这个……现在的我，没有任何头绪`);
    era.println();
    await era.printAndWait(
      `明明说的是毫无头绪，但速子眼神中的骄傲却让人觉得仿佛${tachyon.sex}刚说出的是已经想出黎曼猜想的解法一般的话语`,
    );
    era.printButton(`毫无头绪……听起来真不妙呢`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`这下没办法了呢`);
    await era.printAndWait(`真的毫无头绪的话`);
    era.println();
    await era.printAndWait(`明明应该是十分令人烦恼的事，心情却感觉十分平和`);
    await era.printAndWait(`毫无头绪，那么，就得寻找头绪了吧`);
    era.printButton(`那么速子，试试看把精力投注在比赛上吧？`, 1);
    era.printButton(
      `${tachyon.get_uma_sex_title()}的极限，果然还是必须在赛场上才能突破吧`,
      2,
    );
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `……有一定道理，但我怎么觉得，这是豚鼠君你在满足自己的私欲呢`,
    );
    era.printButton(`毕竟速子说过，会让我看见更宽广的世界不是吗？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `呵呵，说的也是啊，那么继续吧，我们新一年的研究！`,
    );
    era.println();
    await era.printAndWait(`那么，在开始研究前……`);
    era.printButton(`先吃年糕吧`, 1);
    era.printButton(`马上去训练吧`, 2);
    era.printButton(`回去研究吧`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`你们回到了速子的实验室`);
      await era.printAndWait(`而后，你们做的第一件事……`);
      era.println();
      await tachyon.say_and_wait(
        `……虽然由我来这么说有点不对吧，但我们……明明才刚说了那样的话，现在却在干嘛啊`,
      );
      era.println();
      await era.printAndWait(`以前学生进行理科实验用的教室`);
      await era.printAndWait(
        `现在正被你用于进行热能释放及测量糯米合成物燃点的实验`,
      );
      await era.printAndWait(
        `你和速子围坐在作为实验仪器的烤炉边，享受着火炉的温暖`,
      );
      await era.printAndWait(
        `洒水器？那种东西在以前被速子用来于校园内散布大规模药剂实验时就已经被学生会下令强制拆除以免让速子有接触机会了`,
      );
      era.printButton(`差不多烤好了哦`, 1);
      era.printButton(`那，速子不吃吗？`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`当然吃`);
      await era.printAndWait(
        `速子接过了你烤好的糯米合成物——年糕，立马咬了下去，然后，不出你所料的……`,
      );
      era.println();
      await tachyon.say_and_wait(`好烫！……呼呼`);
      // todo  If 没有做过料理or做料理次数<10
      await tachyon.say_and_wait(`……没想到你做的还挺好吃的，出乎意料了`);
      // todo If 已做过料理
      era.println();
      await tachyon.say_and_wait(`好烫……不过好吃，不愧是经过我锻炼的豚鼠`);
      era.println();
      await me.say_and_wait(`为什么好像是自己的功劳一样啊……`);
      era.println();
      await era.printAndWait(
        `不管怎么样，不管是实验研究，还是训练及比赛对策，改天做都行`,
      );
      await era.printAndWait(`难得的新年，还是好好享受一下这份平静吧`);
      era.println();
      await tachyon.say_and_wait(`速子笑了，然后轻轻咬了口年糕`);
      await era.printAndWait(
        `最近不知道为什么，只要提到『明天』、『以后』，速子的心情就会忽然转好`,
      );
      await era.printAndWait(`感到好奇的你，忍不住发问了`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，我的脚……`);
      // todo 体力+30%
    } else if (ret1 === 2) {
      await era.printAndWait(
        `为了把握速子难得有干劲的时间，你立马和${tachyon.sex}一起到了训练场`,
      );
      await era.printAndWait(
        `看见${tachyon.sex}在训练场上奔驰的模样，尽管已经是见过无数次的光景，你还是忍不住陷入了沉迷`,
      );
      await era.printAndWait(`如光一般灿烂，如光一般眩目……如光一般，永恒`);
      await era.printAndWait(`以前那种奔跑起来时的虚幻感，不知何时已经不见`);
      await era.printAndWait(`失去了不安，剩下的是最纯粹的光`);
      await era.printAndWait(`你更深一层的陷入沉醉`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？……豚鼠君！`);
      era.println();
      await era.printAndWait(
        `不知不觉，连${tachyon.sex}已经结束训练回到你身边都没能发觉`,
      );
      era.println();
      await tachyon.say_and_wait(`在看我训练的时候还敢发呆……好胆子啊……`);
      era.println();
      await era.printAndWait(`你连忙和${tachyon.sex}解释了自己感受到的不同`);
      era.println();
      await tachyon.say_and_wait(`……是吗`);
      await tachyon.say_and_wait(`其实……我自己也有一种奇怪的感觉`);
      await tachyon.say_and_wait(`感觉在菊花赏后……我的腿……有种怪怪的感觉`);
      // todo 全属性+10
    } else {
      await tachyon.say_and_wait(
        `豚鼠君，那根试管拿过来，不要晃到了，要是洒出来大概能把地板融化到一楼`,
      );
      await tachyon.say_and_wait(
        `豚鼠君，我现在手上有点忙，帮我点一下酒精灯然后把旁边那管药剂倒到坩埚煮到沸腾`,
      );
      await tachyon.say_and_wait(
        `然后是……好，把这些染成咖啡色，放进茶座的咖啡粉……豚鼠君！你拿走干什么！`,
      );
      await tachyon.say_and_wait(
        `戴一下口罩，等下的烟雾会有严重的昏睡效果，要是不好好做好防护的话大概能昏到周末吧`,
      );
      await tachyon.say_and_wait(
        `这个……往里面再加点苹果汁和砂糖……药剂？不是，这是等一下赤骥君来要给${tachyon.sex}的饮料`,
      );
      era.println();
      await era.printAndWait(
        `你们参拜完后便回到了速子的实验室，今天的速子状态无比的好`,
      );
      await era.printAndWait(
        `不停的下达指令，除去某些太过奇怪的指令外，你也完成了大部分${tachyon.sex}交代的事，但……`,
      );
      era.println();
      await tachyon.say_and_wait(`没成功啊……啧，再多加点`);
      await tachyon.say_and_wait(`今天以内……必须做完二十二次临床测试`);
      era.println();
      await era.printAndWait(`一如既往急躁的实验效率，加上极佳的实验状态`);
      await era.printAndWait(`结果就是需要做的事情成倍的增加`);
      era.printButton(`速子，不能休息一下吗`, 1);
      era.printButton(`不用这么急吧，明天再做也可以……`, 2);
      await era.input();
      await tachyon.say_and_wait(`明天什么……`);
      era.println();
      await era.printAndWait(`想要训斥的话语说到一半忽然停下`);
      await era.printAndWait(`速子仿佛被按了暂停键一般停下了手上的动作`);
      await era.printAndWait(
        `手上的药管眼看就要流出到地上，你慌忙上去稳住了那管据说只要一滴就能腐蚀到一楼的药剂`,
      );
      era.printButton(`速子！怎么了……！`, 1);
      era.printButton(`怎么忽然停住了！`, 2);
      await era.input();
      await tachyon.say_and_wait(`…………哈哈`);
      era.println();
      await era.printAndWait(`速子忽然笑了起来`);
      era.printButton(`脑子……终于坏掉了吗`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……等会再跟你算帐，豚鼠君……我只是在想`);
      era.println();
      await era.printAndWait(`想什么？`);
      era.println();
      await tachyon.say_and_wait(`……我们真的，看见明天了呢`);
      await era.printAndWait(`明天？`);
      await era.printAndWait(`到底在说什么，难道真的是脑袋撞到了吗？`);
      await era.printAndWait(
        `还是什么，天才跟疯子只有一线之隔所以速子终于疯了吗？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `总觉得你在想什么很失礼的事啊……就像你说的，明天再做，也不迟呢，呵呵`,
      );
      await tachyon.say_and_wait(`毕竟，接下来还有很多明天吧`);
      era.printButton(`不管怎么样，明天总会到来的吧`, 1);
      era.printButton(`别想那么多了，总之明天再继续吧`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`是啊，不过……这么美好的明天真的……是第一次`);
        await era.printAndWait(`速子喃喃说着什么听不懂的话`);
      } else {
        await tachyon.say_and_wait(`呵呵，当然，明天再继续吧，嗯，明天`);
        era.println();
        await era.printAndWait(`哪怕被你扫了兴速子还是一副高兴的模样`);
        era.println();
        await era.printAndWait(
          `不知道为什么，听到『明天』之后，速子的心情忽然变得很开心的样子`,
        );
        await era.printAndWait(`感到好奇的你，忍不住发问了`);
        era.println();
      }
      //todo pt+30
    }
    await tachyon.say_and_wait(`……豚鼠君，我的脚……`);
    era.printButton(`怎么了！`, 1);
    era.printButton(`有哪里不对吗！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `……呵呵，别那么紧张，我是想说，我的脚……在菊花赏之后，感觉忽然稳定了许多`,
    );
    era.println();
    await era.printAndWait(`稳定了许多，这……不是好事吗？`);
    await era.printAndWait(`欸，意思是，现在应该恭喜吗？`);
    await era.printAndWait(
      `展开过度突然的话题，使你陷入迷茫，不理解${tachyon.sex}忽然提到这个的原因`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……这是我人生中第一次，可以抛弃对腿脚的担心专注于一件事上……`,
    );
    await tachyon.say_and_wait(
      `就仿佛，可以理所当然的一直跑下去，哪怕跑到天涯海角`,
    );
    await tachyon.say_and_wait(
      `所以……只要一想到明天，未来……这种对一般人来说最理所当然的事，我也会有种……`,
    );
    await tachyon.say_and_wait(
      `怎么说呢……按你说的，我确实表现出了喜悦的感情来，`,
    );
    await tachyon.say_and_wait(`不过，是因为能够专心于研究的喜悦吗？`);
    await tachyon.say_and_wait(`……唔，好像又不太是……值得探讨`);
    era.println();
    await era.printAndWait(`听到这，你忽然灵光一闪`);
    era.printButton(`难道，不是因为可以毫无顾虑的跑步了吗？`, 1);
    era.printButton(`难道，不是因为可以自由自在的跑步了吗？`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `唔……豚鼠君，我的意思不就是这样吗？我不理解你再说一次的理由`,
    );
    era.printButton(`不是实验，而是跑步本身`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `……你的意思是，我是因为喜欢跑步，可以自由自在的跑步了，所以感到高兴？`,
    );
    era.println();
    await era.printAndWait(`啊……果然，速子的话应该很难接受的吧`);
    await era.printAndWait(`毕竟要承认纯粹理智的自己喜欢某种东西……`);
    await tachyon.say_and_wait(`这……`);
    era.println();
    await era.printAndWait(`这？`);
    era.println();
    await tachyon.say_and_wait(`这不是很有趣的可能性吗！`);
    era.println();
    await era.printAndWait(`…………欸？`);
    era.println();
    await tachyon.say_and_wait(
      `对跑步本身感兴趣……感觉，是个很有意思的课题啊！豚鼠君！接下来的研究就决定是这个了！`,
    );
    era.println();
    await era.printAndWait(`研，研究什么？`);
    era.println();
    await tachyon.say_and_wait(`那还用说！当然是对跑步的『喜欢』了！`);
    era.println();
    await era.printAndWait(`研究……喜欢？`);
    await era.printAndWait(`没等你回过神来，兴奋中的速子继续说道`);
    era.println();
    await tachyon.say_and_wait(
      `我有一种预感……突破极限的可能性，就在这个上了！接下来的目标就定为研究这个吧！`,
    );
    era.println();
    await era.printAndWait(`听速子这么说，你也冷静了下来，开始思考利弊`);
    await era.printAndWait(`如果是真的，那么无论如何也要帮助速子达成目标`);
    await era.printAndWait(
      `如果只是错觉的话……那么速子开始享受起跑步，这本身对你而言也不是什么坏事`,
    );
    await era.printAndWait(
      `为了研究而跑和为了自己喜欢而跑，怎么想都是后者更好吧`,
    );
    era.println();
    await era.printAndWait(
      `所以，除了某个难题外，可以说这是百利而无一害的决定……`,
    );
    await era.printAndWait(`思考清楚后，你对速子点了点头`);
    era.printButton(`就以这个为目标吧！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`百利而无一害的决定，只要除去最大的难题`);
    await era.printAndWait(`那么，究竟该如何研究『感情』呢？加油吧，豚鼠！`);
  } else {
    if (!(edu_weeks === 95 + 1 && event_marks.plan_b === 1)) {
      return;
    }
    await print_event_name(`下定决心的新年`, tachyon);
    await era.printAndWait(`新年`);
    await era.printAndWait(`本该是除旧岁，迎新年的喜庆日子`);
    await era.printAndWait(
      `到神社参拜，也象征着洗去去年的一切，迎接新年的到来`,
    );
    era.println();
    await era.printAndWait(`然而……孽缘往往，是难以洗净的`);
    await era.printAndWait(`无论是与谁，在什么地点，哪怕神社也不例外`);
    await era.printAndWait(`会如影随形，死缠烂打跟在身边，令人厌恶的存在`);
    await era.printAndWait(`没错，所谓的孽缘即是————`);
    era.println();
    await tachyon.say_and_wait(`哦呀，豚鼠君……真巧啊`);
    era.printButton(`速…速子！`, 1);
    era.printButton(`先不说这个了，快跑！`, 2);
    await era.input();
    await tachyon.say_and_wait(`啊，等……`);
    await era.printAndWait(
      `没等速子回应，你便拉着${tachyon.sex}往神社里钻，很快便消失在了人群之中`,
    );
    await say_by_passer_by(`记者A`, `咕……没逮到`);
    await say_by_passer_by(`记者B`, `没想到没发着光的时候这么难找……`);
    era.println();
    await say_by_passer_by(`记者C`, `……在这边堵着，千万不能漏掉了`);
    era.println();
    await era.printAndWait(
      `你拉着速子躲在人群中，确认没有拿着摄影机的记者追上来才放下了心来`,
    );
    await era.printAndWait(
      `速子在有马纪念后的忽然宣布复归，对媒体而言可以说是最让人注目的焦点了`,
    );
    await era.printAndWait(`但由于担心速子的状况，你拒绝了一切关于此事的采访`);
    await era.printAndWait(`却没想到他们直接追上门来……！`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君`);
    era.println();
    await era.printAndWait(`这时你才想起，你刚刚没想太多就抓着速子跑了起来……`);
    era.println();
    era.printButton(`速子，腿没事吧！`, 1);
    await era.input();
    await era.printAndWait(`……没什么，只是，有点吓到了，呵呵`);
    await era.printAndWait(
      `毕竟还是${tachyon.get_uma_sex_title()}，哪怕是腿脚不便的${tachyon.get_uma_sex_title()}身体素质比起人类还是强上许多，更何况还是今年要回归赛场的前G1${tachyon.get_uma_sex_title()}了`,
    );
    era.println();
    await me.say_and_wait(`……是啊，回归赛场`, true);
    era.printButton(`速子`, 1);
    era.printButton(`今年的赛程……`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`那当然……是和茶座一样了，这不用我多说吧`);
    era.println();
    await era.printAndWait(`果然如此`);
    await era.printAndWait(`你点了点头`);
    await era.printAndWait(
      `${
        tachyon.name
      }离开赛场，以及离开赛场的原因，都是为了曼城茶座———你的另一名负责${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(
      `那么，在有限能够选择的比赛中，当然必须要以茶座参加的比赛为优先…………`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君？怎么了吗？`);
    era.println();
    await era.printAndWait(`心中还是忍不住想起`);
    await era.printAndWait(`夏日集训时速子脸上的表情`);
    await era.printAndWait(`菊花赏后速子的眼神`);
    await era.printAndWait(`有马前……速子下定决心时的神情`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君？`);
    era.println();
    await era.printAndWait(
      `你这才发现速子正盯着你似乎有些时间了，连忙回过神来问怎么了`,
    );
    era.println();
    await tachyon.say_and_wait(`……没什么，只是快轮到我们了`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}指着神社，然后你才发现，你们匆忙跑入的，是本舍前祈求神明保佑的长列`,
    );
    era.printButton(`速子你不是不信这些吗？`, 1);
    await era.input();
    await era.printAndWait(`话一出口你便感觉坏事`);
    if (relation < 0) {
      await tachyon.say_and_wait(`……哦，真看不出来，你原来还会在乎我的意愿啊`);
      era.println();
      await era.printAndWait(`果不其然，遭到了${tachyon.sex}的冷嘲热讽`);
    } else if (relation > 0 && relation < 225) {
      era.println();
      await tachyon.say_and_wait(`……不是你把我拉过来的吗？`);
      era.println();
      await era.printAndWait(`这么说起来，似乎还没跟速子解释过……`);
      await era.printAndWait(`你连忙说了记者的事情`);
      await era.printAndWait(
        `听完后${tachyon.sex}没有过多的反应，只说了句这样啊`,
      );
    } else if (relation > 225 && relation < 525) {
      await tachyon.say_and_wait(
        `虽然不信……但我姑且当成你的心意吧，再说不是你先把我拉过来的吗？`,
      );
      era.println();
      await era.printAndWait(`这么说起来，似乎还没跟速子解释过……`);
      await era.printAndWait(`你连忙说了记者的事情`);
      await era.printAndWait(`听完后${tachyon.sex}露出了有些抱歉的眼神`);
    } else if (relation > 525) {
      await tachyon.say_and_wait(`我相信的不是神，而是将我带到这里的你`);
      era.println();
      await era.printAndWait(`速子忽然说了些令人羞耻的内容`);
      await era.printAndWait(`这么说起来，似乎还没跟速子解释过……`);
      await era.printAndWait(`你连忙说了记者的事情`);
      await tachyon.say_and_wait(`呵，一群庸碌的蚊蝇而已，也敢质疑我们？`);
      await era.printAndWait(`速子不屑的笑了声`);
    }
    await era.printAndWait(`对话的途中，你们已经排到了队伍最前方`);
    await era.printAndWait(`你望着眼前的神像`);
    await era.printAndWait(`那么……该许什么愿呢`);
    era.println();
    await era.printAndWait(`你思考了许多，想了许多要许的愿望`);
    await era.printAndWait(`双手合十，向神明祈祷`);
    await era.printAndWait(`希望速子的双腿不要有事，健康跑完`);
    await era.printAndWait(`希望速子的比赛可以一如往常的精彩`);
    await era.printAndWait(`希望……茶座的训练也能平安进行`);
    era.println();
    await era.printAndWait(`结束祈祷，你抬头看向一旁的速子`);
    await era.printAndWait(
      `${tachyon.sex}早就已经结束了敷衍的祈祷，正等待着你`,
    );
    await era.printAndWait(
      `你们两人离开人群，小心的避开了还不死心的记者回到学园`,
    );
    era.println();
    await tachyon.say_and_wait(`那么……你都祈祷了什么？`);
    era.println();
    await era.printAndWait(`不知为何，速子很好奇的样子`);
    await era.printAndWait(`你告诉${tachyon.sex}……`);
    era.printButton(`速子的健康`, 1);
    era.printButton(`速子的比赛`, 2);
    era.printButton(`茶座的训练`, 3);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await era.printAndWait(
        `你告诉${tachyon.sex}，你祈祷了${tachyon.sex}的双腿健康`,
      );
      if (relation < 225) {
        await tachyon.say_and_wait(`……无聊的愿望`);
        await tachyon.say_and_wait(
          `如果只求身体健康……那我不回归赛场不就好了吗？`,
        );
        await tachyon.say_and_wait(
          `都已经决定抛弃一切了，还许这种愿……豚鼠君你的觉悟不足啊`,
        );
        era.println();
        await era.printAndWait(`速子的回复十分辛辣`);
        await era.printAndWait(`听起来仿佛对你说的愿望打从心底嗤之以鼻`);
        era.println();
      }
      //  todo 体力+30%
      else if (relation > 225) {
        era.println();
        await tachyon.say_and_wait(`……身体健康啊`);
        await tachyon.say_and_wait(`不，没什么，只是……呵呵`);
        await tachyon.say_and_wait(`是啊，要是能够健康的跑完就好了`);
        era.println();
        await era.printAndWait(`速子轻描淡写的说着`);
        await era.printAndWait(`仿佛这只是一场普通的谈天——也确实如此——而已`);
        era.println();
      }
      await era.printAndWait(`但是你没有看漏`);
      await era.printAndWait(`在说出愿望的同时，速子眼神中绽放出的希望和渴望`);
      await era.printAndWait(`……可是，看见了又能怎么办呢？`);
      await era.printAndWait(
        `追寻那种可能的道路，在几个月前就已经被你亲手封上`,
      );
      await era.printAndWait(
        `现在的你与${tachyon.sex}，只是在朝着自毁的道路狂奔而已`,
      );
      era.println();
      await era.printAndWait(`所以只能献上祈祷`);
      await era.printAndWait(`至少，在这最后的时间里`);
      await era.printAndWait(`${tachyon.sex}能免于痛苦，免于伤病`);
      era.println();
      await tachyon.say_and_wait(`……没什么事，我就回去了`);
      era.printButton(`注意休息`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`${tachyon.sex}挥了挥手，表示知道了`);
    } else if (ret2 === 2) {
      await era.printAndWait(
        `你告诉${tachyon.sex}，你祈祷了${tachyon.sex}和茶座的比赛顺利`,
      );
      era.println();
      await tachyon.say_and_wait(`哈哈，这不是不错的愿望吗？`);
      await tachyon.say_and_wait(
        `茶座已经证明了${tachyon.sex}的可能性……接下来，该轮到我了`,
      );
      await tachyon.say_and_wait(
        `明明说着要成为${tachyon.sex}的垫脚石，我可不能原地踏步啊，不然，充其量也就是鹅卵石而已了`,
      );
      era.println();
      await me.say_and_wait(`虽然速子口口声声说着为了茶座`);
      await era.printAndWait(`但你依然没有错过……`);
      await era.printAndWait(`在提起比赛时，速子眼中闪过的斗志`);
      await era.printAndWait(`果然，速子还是渴望回到赛场的吧`);
      await era.printAndWait(`……但是，渴望又能怎么办呢`);
      await era.printAndWait(
        `追寻那种可能的道路，在几个月前就已经被你亲手封上`,
      );
      await era.printAndWait(
        `现在的你与${tachyon.sex}，只是在朝着自毁的道路狂奔而已`,
      );
      era.println();
      await era.printAndWait(`所以只能献上祈祷`);
      await era.printAndWait(`至少，在这最后的时间里`);
      await era.printAndWait(
        `希望在剩下的时间中，${tachyon.sex}能尽情享受，那样的时光`,
      );
      era.println();
      await tachyon.say_and_wait(`呵呵，为了你的期待，得马上开始训练了啊`);
      era.println();
      await era.printAndWait(`速子开心的朝着训练场走去`);
      era.printButton(`……训练小心`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`${tachyon.sex}挥了挥手表示知道了`);
      // todo 随机属性 +10
    } else {
      await era.printAndWait(`你告诉${tachyon.sex}，你祈祷了茶座的训练顺利`);
      era.println();
      await tachyon.say_and_wait(`……嗯`);
      await tachyon.say_and_wait(
        `当然了……毕竟我们做的，都是为了茶座能够更加，并且超越极限啊`,
      );
      await tachyon.say_and_wait(
        `要是${tachyon.sex}的训练出现问题，那么……一切就白费了`,
      );
      await tachyon.say_and_wait(
        `所以这个才是重中之重……你能够不忘优先顺序，我很高兴`,
      );
      era.println();
      await era.printAndWait(`虽然速子口口声声说着为了茶座`);
      await era.printAndWait(
        `但你依然没有错过……提起茶座时${tachyon.sex}眼神中的落寞`,
      );
      await era.printAndWait(`果然，自己不该提起茶座的吧`);
      await era.printAndWait(
        `现在，身为${tachyon.name}的训练员时的自己，应该要为了${tachyon.sex}而想才对吧`,
      );
      await era.printAndWait(
        `但……为${tachyon.sex}着想的权利早在几个月前就已经被自己抛弃了`,
      );
      await era.printAndWait(
        `现在的你和${tachyon.sex}，只是在朝着自毁的道路狂奔而已`,
      );
      era.println();
      await era.printAndWait(`因此只能献上祈祷`);
      await era.printAndWait(`希望能够保障一切的外在因素`);
      await era.printAndWait(
        `满足${tachyon.sex}，满足${tachyon.name}的『遗愿』`,
      );
      era.println();
      await tachyon.say_and_wait(
        `呵呵，为了你的期待，接下来我也不能输啊，必须让自己恢复到足以与茶座站上同个舞台才行`,
      );
      era.println();
      await era.printAndWait(`速子淡淡的说完，朝着实验室走去`);
      era.printButton(`……实验小心`, 1);
      await era.input();
      await era.printAndWait(`${tachyon.sex}挥了挥手表示知道了`);
      // todo pt+30
    }
  }
};

handlers[event_hooks.office_study] = async () => {
  const tachyon = get_chara_talk(32),
    event_marks = new TachyonEduMarks();
  if (event_marks.explore_reward === 1) {
    event_marks.explore_reward++;
    await print_event_name(`实验的报酬`, tachyon);
    era.println();
    await era.printAndWait(`总算结束了……`);
    await era.printAndWait(`你伸了个懒腰，忍不住感慨`);
    await era.printAndWait(`最近速子的实验越来越多，也越来越复杂及麻烦`);
    await era.printAndWait(
      `虽说危险度没那么高，但加上训练员的本职工作后忙碌程度甚至让你有些怀念那些危险的实验了`,
    );
    era.println();
    await tachyon.say_and_wait(`辛苦了，豚鼠君……`);
    await tachyon.say_and_wait(`放心吧，之后会好好给你奖励的`);
    era.println();
    await era.printAndWait(`奖励……？`);
    await era.printAndWait(
      `虽然不知道具体是什么，但奖励这个词还是激励了疲累的你`,
    );
    era.println();
    await era.printAndWait(`在收拾完实验器材后`);
    era.println();
    await tachyon.say_and_wait(`那么……作为奖励，就让我来帮你处理一下吧`);
    await tachyon.say_and_wait(`几天下来，积累的东西❤`);
    era.println();
    await era.printAndWait(`……欸？`);
    era.println();
    await tachyon.say_and_wait(`这种反应……难道，要拒绝吗？`);
    await tachyon.say_and_wait(`明明，都是恋人了不是吗？`);
    era.println();
    await era.printAndWait(`送到眼前的肉，哪有不吃的道理！`);
    await era.printAndWait(
      `再说……这几天由于实验的关系，确实也都没怎么发泄欲望……`,
    );
    await era.printAndWait(
      `这样的话，让自己的恋人来帮忙……应该也不是什么过分的事吧`,
    );
    era.println();
    await era.printAndWait(`鬼使神差下，你脱下了裤子`);
    era.println();
    await tachyon.say_and_wait(`嘶……`);
    era.println();
    await era.printAndWait(
      `虽然没有动画里甚至冒出蒸气那么夸张，但闷了一天的肉棒，依然散发出了足以挑逗起任何${tachyon.get_uma_sex_title()}性欲的气味来`,
    );
    await era.printAndWait(`速子紧紧盯着眼前的肉棒，移不开视线`);
    era.println();
    await tachyon.say_and_wait(`不行……忍不住了……❤`);
    era.println();
    await era.printAndWait(
      `你差点都忘记了，这几天由于实验导致欲望积累的，可不只你一人而已`,
    );
    await era.printAndWait(`一直在身旁做着实验的速子想必也是如此`);
    await era.printAndWait(`这么说来……比起奖励，果然只是找理由……`);
    era.println();
    await era.printAndWait(`想到这，你的心中忍不住起了坏心眼`);
    await era.printAndWait(
      `看见你掏出肉棒后就不再动作的模样，速子心急的看着你`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君……再等什么呢，快点，进来`);
    era.println();
    await era.printAndWait(
      `速子撅起双唇，唇间的粉舌前后移动着，尝试勾起你的情欲`,
    );
    await era.printAndWait(
      `但你依然没有做出反应，明白了你的意图的速子露出了哀怨的神情`,
    );
    era.println();
    await tachyon.say_and_wait(`……真过分`);
    era.println();
    await era.printAndWait(`速子蹲在地上，仿佛恳求一般仰视着高高翘起的肉棒`);
    era.println();
    await tachyon.say_and_wait(
      `求你了，豚鼠君……让我啾啵啾啵的……好好品尝……豚鼠君的肉棒……❤`,
    );
    era.println();
    await era.printAndWait(
      `见到你总算慢慢靠前了，速子猴急的将鼻子贴近了肉棒，深深的猛闻了几下`,
    );
    await era.printAndWait(`不老实的手咕啾咕啾的抠弄着蜜穴，发出呻吟`);
    await era.printAndWait(
      `在理性与感性都认可的这名雄性面前，身为雌性的自己只能跪在地上臣服`,
    );
    era.println();
    await tachyon.say_and_wait(`嘶……哈……嘶……`);
    await tachyon.say_and_wait(`肉棒……肉棒的味道`);
    await tachyon.say_and_wait(`请……让我再多闻闻……豚鼠君的……肉棒……`);
    await tachyon.say_and_wait(`鼻腔里面……全都是……雄性的味道`);
    era.println();
    await era.printAndWait(`你握着满是先走汁的肉棒`);
    await era.printAndWait(
      `恶作剧的来回磨蹭着不知何时已经跪在自己面前的速子的鼻尖`,
    );
    await era.printAndWait(`仿佛在做标记般，将汁液和气味涂满了速子的鼻子`);
    era.println();
    await tachyon.say_and_wait(
      `过分……要是……闻到这种味道……不就真的……回不去了……`,
    );
    era.println();
    await era.printAndWait(`不喜欢的话，那就算了？`);
    await era.printAndWait(
      `你作势要抽身而去，却看速子亦步亦趋的跟随着，其中鼻子完全没离开过肉棒哪怕一厘米的距离`,
    );
    era.println();
    await tachyon.say_and_wait(`光是味道……就要去了……`);
    era.println();
    await era.printAndWait(`仿佛担心又一次的恶作剧`);
    await era.printAndWait(`速子反过来用鼻尖不停刮蹭着你的龟头尖端`);
    await era.printAndWait(`仿佛要牢记这股味道一般，用力嗅着肉棒的臭味`);
    era.println();
    await tachyon.say_and_wait(`不行……受不了了……`);
    await tachyon.say_and_wait(`请让我含……求求，让我舔`);
    era.println();
    await era.printAndWait(`想要快一点舔到`);
    await era.printAndWait(`想要获得被允许吸吮肉棒的资格`);
    await era.printAndWait(`看着爱人的肉棒摆在自己眼前`);
    await era.printAndWait(`享受着气味的速子还是按耐不住，咽下口水`);
    era.println();
    await tachyon.say_and_wait(`咕啾`);
    await tachyon.say_and_wait(`嗯啾噜噜噜……啾噜……啾咕……`);
    era.println();
    await era.printAndWait(`还没得到许可，速子就已经吮吸起了肉棒`);
    await era.printAndWait(
      `你也松了口气，要是再继续下去，忍不住的就要换成你了`,
    );
    era.println();
    await era.printAndWait(`速子大大张开嘴，一口气将肉棒吞至根部`);
    await era.printAndWait(`不断上下吸弄，发出了下流的水声`);
    era.println();
    await tachyon.say_and_wait(`好吃……好美味……`);
    await tachyon.say_and_wait(`肉棒……豚鼠君臭臭的肉棒❤❤`);
    era.println();
    await era.printAndWait(`从根部到龟头，完整的包覆吸吮`);
    await era.printAndWait(
      `像涂唇膏一般，想毫无保留的将肉棒的味道蹭在自己口中`,
    );
    era.println();
    await era.printAndWait(`傍晚时分，大多数人已经回到家中或者宿舍的时间`);
    await era.printAndWait(
      `实验室中，回荡着无比淫糜的水声，是故意发出的，还是已经拼命到没有功夫去在意声音了？`,
    );
    await era.printAndWait(
      `对你的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感`,
    );
    await era.printAndWait(
      `对你的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感`,
    );
    await era.printAndWait(
      `一边服侍肉棒，一边摇晃的屁股也在不停摩擦着地板和手指，期望获得慰藉`,
    );
    await era.printAndWait(`但是……最美味的，果然还是口中的肉棒`);
    await era.printAndWait(`带着爱意的服侍，无声的说明着速子对眼前肉棒的癡迷`);
    await era.printAndWait(
      `倘若让${tachyon.sex}现在发誓一辈子作为肉棒的奴隶而活，或许${tachyon.sex}都会答应吧`,
    );
    era.println();
    await era.printAndWait(`忽然，你拍了拍速子的头`);
    await era.printAndWait(`听话的${tachyon.sex}马上察觉到了意思`);
    era.println();
    await tachyon.say_and_wait(
      `进来……请射进来……在我的嘴穴里……全部……喝下去❤❤`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}马上更贴近的含吮着你的肉棒`);
    await era.printAndWait(`终于，白浆在口中爆发`);
    era.println();
    await tachyon.say_and_wait(`啾……咕啾………噗哈`);
    await tachyon.say_and_wait(`哈啊……哈……嗯……啾……`);
    era.println();
    await era.printAndWait(`速子慢慢咀嚼着射在口中的精液`);
    await era.printAndWait(`故意发出咕啾的咀嚼声后，将精液全部喝了下去`);
    await era.printAndWait(`随即，为了使残留的精液能被一滴不剩的喝干`);
    await era.printAndWait(`速子又一次含住了垂下的肉棒，不停啜吸着，打扫肉棒`);
    await era.printAndWait(
      `看见${tachyon.sex}如此癡迷的模样，你的下体不自觉的又硬了起来`,
    );
    era.println();
    await tachyon.say_and_wait(`下次实验还要拜托你哦，豚鼠君`);
    await tachyon.say_and_wait(`……当然，还会有奖励的`);
    await tachyon.say_and_wait(`你不会拒绝吧……亲爱的❤`);
    era.println();
    await era.printAndWait(
      `看着${tachyon.sex}媚眼如丝的模样，你选择再一次堵住那张不断对自己发号施令的小嘴`,
    );
  } else if (event_marks.explore_reward1 === 1) {
    event_marks.explore_reward1++;
    await print_event_name(`实验的奖励2`, tachyon);
    era.println();
    await tachyon.say_and_wait(`豚鼠君～今天的实验也辛苦了`);
    await tachyon.say_and_wait(`那么……需要奖励吗♡`);
    era.printButton(`来吧`, 1);
    era.printButton(`不……有点累了，还是先休息吧`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      era.println();
      await era.printAndWait(`滋啾滋啾`);
      await era.printAndWait(`实验室裏满是下流的声响`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……豚鼠君♡`);
      await tachyon.say_and_wait(`快点……填满我的骚穴♡`);
      await tachyon.say_and_wait(
        `好好调教这个……在实验途中就开始不停流水的淫穴`,
      );
      await era.printAndWait(`肉棒插入前就已经完全湿透的小穴将肉棒紧紧包裹`);
      await era.printAndWait(
        `每一下顶弄爱液都会飞溅而出，桌面和地板都染上了速子的腥臭穴汁`,
      );
      era.println();
      await tachyon.say_and_wait(`呜……好用力♡`);
      await tachyon.say_and_wait(`稍微…稍微慢一点……♡`);
      await tachyon.say_and_wait(`声音……啊嗯♡`);
      era.println();
      await era.printAndWait(`都这样勾引了还希望自己能慢一点？`);
      await era.printAndWait(`你用力拍打着速子的屁股`);
      await era.printAndWait(`不管不顾的加快了速度`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……豚鼠君♡`);
      await tachyon.say_and_wait(`啊♡嗯啊♡啊♡啊啊♡`);
      await tachyon.say_and_wait(`豚鼠君……给我♡给我更多♡`);
      era.println();
      await era.printAndWait(
        `渐入佳境后，腰甚至脱离了你的掌控，自行加快了速度`,
      );
      await era.printAndWait(
        `如此主动的缠绕使你的兴奋程度也更上层楼，渴望将眼前雌性的身体，任凭雄性本能操控着身体`,
      );
      era.println();
      await tachyon.say_and_wait(`好棒♡豚鼠君的肉棒♡好厉害♡`);
      era.println();
      await era.printAndWait(`肉体碰撞的声音更加响亮`);
      await era.printAndWait(`整个实验室中充斥着淫猥的气味及声音`);
      era.println();
      await tachyon.say_and_wait(`又……又更大了♡`);
      await tachyon.say_and_wait(
        `要射了吗……在，在里面出来♡好想要……豚鼠君的小宝宝♡`,
      );
      await tachyon.say_and_wait(`喜欢……最喜欢被豚鼠君内射了♡`);
      await tachyon.say_and_wait(
        `在小穴里面……尽情的出来……想生下豚鼠君的孩子♡想给豚鼠君生一窝小豚鼠♡`,
      );
      era.println();
      await era.printAndWait(`听见速子的话，你更不管不顾的加快加深`);
      await era.printAndWait(
        `哪怕是${tachyon.get_uma_sex_title()}的身体都只能娓娓配合着你的动作来回`,
      );
      await era.printAndWait(`你捏住前面不停晃动的两点尖端，用力向下拉`);
      era.println();
      await tachyon.say_and_wait(`齁喔喔喔喔喔喔♡`);
      await tachyon.say_and_wait(`去，去了♡要被扯着奶头去了♡`);
      era.println();
      await era.printAndWait(`咚咕，嘟咕，咻噜噜噜♡`);
      await era.printAndWait(`最后，最深入的插抽了几下后，精关彻底放开`);
      await era.printAndWait(`白浆灌满了速子的小穴`);
      await era.printAndWait(`被白浆灌入的瞬间，速子也全身痉挛着达到了巅峰`);
      era.println();
      await tachyon.say_and_wait(`好几天没能品尝到的……豚鼠君的肉棒♡欸嘿嘿♡`);
      await tachyon.say_and_wait(`好棒……豚鼠君的……好唔唔♡`);
      era.println();
      await era.printAndWait(`自以为已经结束的速子，感叹的话才说到一半`);
      await era.printAndWait(`便被你的肉棒再度堵住了嘴`);
      era.println();
      await tachyon.say_and_wait(`啾……啾啾♡`);
      era.println();
      await era.printAndWait(`速子顺从的帮你清理着肉棒`);
      await era.printAndWait(
        `满是自己淫汁和豚鼠君精液的肉棒，对速子而言现在哪怕将豚鼠君的便当摆在面前，${tachyon.sex}大概都会优先选择肉棒`,
      );
      era.println();
      await tachyon.say_and_wait(`下次实验……一样拜托你了♡啾♡啾啵♡`);
      await tachyon.say_and_wait(`唔！唔啾♡啾噜♡`);
      era.println();
      await era.printAndWait(
        `听见速子变着法子说出的”下次再来做吧”，你的肉棒又硬了起来`,
      );
      await era.printAndWait(
        `勾引的眼前${tachyon.get_uma_sex_title()}再度露出雌性的表情`,
      );
    } else {
      await era.printAndWait(`今天太累了，还是改天吧`);
      await era.printAndWait(`速子不满的望着你，却没有说什么`);
      await era.printAndWait(
        `毕竟这几天无论是你还是${tachyon.sex}都已经累的不行这也是事实`,
      );
      await era.printAndWait(
        `不过……给人奖励的人露出这样的臭脸，不就搞不清楚到底谁才是“被奖励”的那方了吗？`,
      );
    }
  } else if (event_marks.explore_reward2 === 1) {
    event_marks.explore_reward2++;
    await print_event_name(`实验的奖励3`, tachyon);
    await tachyon.say_and_wait(`豚鼠君～今天的实验也辛苦了`);
    await tachyon.say_and_wait(`那么……需要奖励吗♡`);
    era.printButton(`来吧`, 1);
    era.printButton(`不……有点累了，还是先休息吧`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`果然，不应该是这个洞口的吧？`);
      await era.printAndWait(`明明下面的骚穴也痒的不行`);
      await era.printAndWait(`为什么插的却是那种地方`);
      await era.printAndWait(`而且还是这种……这种姿势`);
      era.println();
      await era.printAndWait(`紧紧的后穴，包裹着豚鼠君的粗壮肉棒`);
      await era.printAndWait(
        `比起小穴，皱折更多的菊穴在给予豚鼠君更多快感的同时，也给自己带来了小穴两倍的快感`,
      );
      await era.printAndWait(
        `这点来讲，对于满足性欲的条件来说，或许确实比小穴更好用……但是……`,
      );
      era.println();
      await tachyon.say_and_wait(
        `这种像小狗一样的姿势……再加上这个穴……这不就是真正的小狗吗♡`,
        true,
      );
      era.println();
      await era.printAndWait(`但是……仔细想想似乎也不是不行♡`);
      await era.printAndWait(`豚鼠君是自己专属的豚鼠君`);
      await era.printAndWait(`${tachyon.name}是豚鼠君专属的小母狗`);
      await era.printAndWait(
        `这么一想，自己的身体仿佛马上就无缝代入角色了一般，开始高兴的摇晃着尾巴，讨着主人欢心`,
      );
      era.println();
      await era.printAndWait(
        `好像感觉到了身下人的胡思乱想，你拍了速子的屁股提醒${tachyon.sex}专心`,
      );
      await era.printAndWait(
        `但已经完全代入角色的速子却更用力的摇晃起屁股，夹紧了自己的屁穴`,
      );
      await era.printAndWait(`突如其来的攻击，使得你一时精关失守`);
      await era.printAndWait(
        `你按住了速子的腰，在屁穴里将积累了几天的精液全部排泄一空`,
      );
      await era.printAndWait(
        `胯下的速子在这个时候，也仿佛想将自己的幸福传达给主人的母狗一般`,
      );
      await era.printAndWait(`欢快的排出小便表露自己此时的心情`);
      await era.printAndWait(
        `然而你还没来得及做出表示，就迎来了第二个重量级的冲击`,
      );
      era.println();
      await tachyon.say_and_wait(`汪……汪汪♡`);
      await era.printAndWait(
        `看见你脸上迷惑的表情后，速子才仿佛忽然回过神自己都做了什么`,
      );
      await era.printAndWait(`脸颊瞬间通红`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……不是，我……没有……不是你想的那样……`);
      era.println();
      await era.printAndWait(`虽然不知道发生了什么，但先装作无事发生吧`);
    } else {
      await era.printAndWait(`今天太累了，还是改天吧`);
      await era.printAndWait(`速子不满的望着你，却没有说什么`);
      await era.printAndWait(
        `毕竟这几天无论是你还是${tachyon.sex}都已经累的不行这也是事实`,
      );
      await era.printAndWait(
        `不过……给人奖励的人露出这样的臭脸，不就搞不清楚到底谁才是“被奖励”的那方了吗？`,
      );
    }
  }
};

/**
 * 速子的日常事件，id=32
 *
 * @author 名贵易碎电子盆栽孕袋女士
 * @author 黑奴一号 黑奴队长（修订）
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
