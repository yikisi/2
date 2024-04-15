const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const { say_by_passer_by } = require('#/utils/chara-talk');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const EventObject = require('#/data/event/event-object');
const { get_random_value } = require('#/utils/value-utils');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async function (hook, _, event_object) {
  const relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32),
    coffee = get_chara_talk(25),
    chara33_talk = get_chara_talk(33),
    event_marks = new TachyonEduMarks(),
    edu_weeks = era.get('cflag:32:育成回合计时');
  chara33_talk.name = '???';
  let wait_flag = false;
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
    era.printButton(`速子？妳在说什么？`, 1);
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
  }*/ if (edu_weeks === 16) {
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
          await say_by_passer_by(`店主`, `特等奖！ 温泉旅行券！`);
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
          await say_by_passer_by(`店主`, `特等奖！ 温泉旅行券！`);
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
        await chara33_talk.say_and_wait(
          `心情不好的时候要记住，只有软绵绵是不会背叛你的`,
        );
        //todo If 队伍中有爱慕织姬
        await era.printAndWait(`摊主不知道为什么，有些莫名的眼熟`);
        await era.printAndWait(`……应该，只是错觉而已吧`);

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
