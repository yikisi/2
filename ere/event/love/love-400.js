const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const SSEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-400');

/**
 * 周日宁静 - 爱慕
 *
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
module.exports = async (hook) => {
  const event_marks = new SSEduMarks(),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:400:育成回合计时'),
    love = era.get('love:400'),
    chara_talk = get_chara_talk(400),
    me = get_chara_talk(0);
  // 我在这里设置了爱慕事件,如果三冠条件则会触发<周日宁静的爱>,若未满足则为爱慕暂拒状态
  if (hook === event_hooks.week_end) {
    if (event_marks.love === 1) {
      event_marks.love++;
      //TODO 未获得三冠时强制进入爱慕事件
      await print_event_name('周日宁静的爱', chara_talk);
      await chara_talk.say_and_wait(`拖雷纳君......我有件事想要和你说。`);
      await era.printAndWait(
        `周日宁静二话不说拉着你的手走进了你们初遇的那片小树林里面，`,
      );
      await era.printAndWait(
        `自从她成为三冠赛马娘之后，你隐约能够察觉到她的心态发生了些许的变化。`,
      );
      await chara_talk.say_and_wait(`我......有一件事想要告知于您。`);
      await era.printAndWait(`周日宁静看起来似乎有些难以开口，`);
      await era.printAndWait(
        `那娇艳欲滴的红唇张了又闭，以至于你开始往最坏的方向去猜想。`,
      );
      era.printButton(`你.....该不会是打算退役了吧？`, 1);
      await era.input();
      await chara_talk.say_and_wait(
        `怎么可能！！！我们才刚刚开始我们的竞赛之路不是吗？`,
      );
      await era.printAndWait(
        `周日宁静无奈的反驳道，不过她看起来似乎没有那么紧张了，深呼吸之后她重新张嘴。`,
      );
      await chara_talk.say_and_wait(`训练员先生，请和我谈恋爱吧！！`);
      era.printButton(`什.......什么`, 1);
      await era.input();
      await era.printAndWait(
        `你开始怀疑自己的耳朵出现了问题，那个除了训练和比赛之外几乎什么都不管的周日宁静居然向你提出了谈恋爱的要求。`,
      );
      era.printButton(`接受`, 1);
      era.printButton(`暂拒`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await me.say_and_wait(
          `我明白了，那么......请多指教，周日宁静......我的女朋友。`,
        );
        await era.printAndWait(`你说这话的时候感觉自己有些不太适应这个称呼，`);
        await era.printAndWait(
          `但是她看起来似乎比你更加羞涩，那张平日里古井无波的脸庞此刻已经被红霞所占据，`,
        );
        await era.printAndWait(
          `游离的眼神和不安晃动的尾巴说明她绝对没有看起来那么平静。`,
        );
        await chara_talk.say_and_wait(
          `请.....请多多指教，我会承担起作为一个合格女友的责任，拖雷纳君......我或许，已经无法离开你的身边了。`,
        );
        await era.printAndWait(
          `她抱住了你的身子，捧住你的脸将你的吻夺走，她的吻技非常的生涩，一上来就咬破了你的嘴唇。`,
        );
        await era.printAndWait(
          `但是你们什么都没有说，两个人在小树林里面拥抱着直到似乎有人靠近这里才像是偷到了鸡的黄鼠狼逃跑一样匆匆离开。`,
        );
        await sys_love_uma_in_event(400);
      } else {
        await me.say_and_wait(
          `那个.......很抱歉，我想我们都需要再思考一下这件事。`,
        );
        await era.printAndWait(
          `周日宁静听到了这句话之后委屈的仿佛要哭出来了一样，她强行眯起眼睛，低着脑袋不让你看到她的脸，闷闷的点了点头。`,
        );
        await chara_talk.say_and_wait(
          `我知道了......拖雷纳君说得对，是我太草率了，对不起......但是.......如果可以的话，请务必给我一个正式的答复吧。`,
        );
        await era.printAndWait(
          `说完她就逃跑一样的离开了这片小树林，跑到了你找不到的地方。`,
        );
        era.set('cflag:400:爱慕暂拒', 49);
      }
    } else if (
      event_marks.broken_love === 1 ||
      (edu_weeks > 47 + 40 && love === 49)
    ) {
      event_marks.broken_love++;
      event_marks.broken_love++;
      await print_event_name('周日宁静的爱', chara_talk);
      await chara_talk.say_and_wait(
        `结果........结果我依旧是一个可悲的失败者.......连她们的愿望都没有办法完成，对不起对不起对不起对不起.....`,
      );
      await chara_talk.say_and_wait(`…...`);
      await era.printAndWait(
        `周日宁静靠在墙角留着眼泪，这里是特雷森这个巨大的学校里面的一处不起眼的角落，周日宁静以前没事的时候就喜欢跑到这里开看着天空发呆。`,
      );
      era.printButton(`原来你在这里啊......我有事情要和你说。`, 1);
      await era.input();
      await chara_talk.say_and_wait(
        `我明白了........拖雷纳君......不，（玩家名）君，就像我以前说的那样，这次是我的问题，`,
      );
      await chara_talk.say_and_wait(
        `是我没能完成属于我们的目标，你已经尽了所有的能力完成了你的责任，`,
      );
      await chara_talk.say_and_wait(
        `如果你想要的话，我随时可以与你解约，非常抱歉，因为我的问题浪费了你那么多时间。`,
      );
      era.printButton(
        `你在说什么傻话啊，今年的年末还有有马纪念你得参加呢。`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `你将手贴在了她的脑门上，本来应该很快就被甩掉的手，此刻却稳稳的贴在周日宁静的脸颊上，`,
      );
      await era.printAndWait(
        `这是她从来没有露出过的神情，疲惫、失望而茫然，就好像是一直以来支撑着她走下去的支柱突然就碎裂了一般。`,
      );
      await me.say_and_wait(
        `宁静，人从来都不是为了他人而活着的，我记得你和我说过的那些事情，那个雨夜所发生的事情，我都记得一清二楚。`,
      );
      await era.printAndWait(`周日宁静抬起头，在等待着你的下文。`);
      await me.say_and_wait(
        `或许你失败了，或许你没有完成她们最后的愿望.......但是，如果是你最好的朋友们的话，她们是不会希望你像现在这样的.......不是吗？`,
      );
      await era.printAndWait(
        `周日宁静摸着自己的脸颊，她轻轻的起身，然后瘫在你的怀里面。`,
      );
      await chara_talk.say_and_wait(
        `我不知道........她们和我谈起赛马娘的时候，那种就好像是发光一样的眼神，`,
      );
      await chara_talk.say_and_wait(
        `说到三冠赛事的时候的兴奋......但是我却失败了。`,
      );
      await era.printAndWait(
        `你没有继续说话，默默的抱着周日宁静，让她在你的怀中默默的流泪。`,
      );
      await chara_talk.say_and_wait(
        `抱歉.......拖雷纳君，我好像做了很丢人的事情。`,
      );
      await era.printAndWait(
        `周日宁静没有抬头，声音微弱，但是你能听得出来，她的心情已经平稳了下来。`,
      );
      era.printButton(
        `并没有，能够勇敢的面对自己的挫折和失败，是非常厉害的事情。所以说，有马纪念，你要参加吗？`,
        1,
      );
      await era.input();
      await chara_talk.say_and_wait(
        `当然了，虽然没有能把三冠献给您，但是我依旧希望您能和我一起在这条路上走下去，`,
      );
      await chara_talk.say_and_wait(
        `不仅仅只是作为我的训练员......感谢您一直陪伴在我的身边.....拖雷纳君，这是一个小马娘微不足道但是真挚的心意，我喜欢你，`,
      );
      await chara_talk.say_and_wait(
        `我希望成为你的恋人，我希望能够和你一起走进婚姻的殿堂，我希望我们能够一辈子一起走下去，不知道您.....有什么想法呢？`,
      );
      era.printButton(`接受`, 1);
      era.printButton(`暂拒`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        era.printButton(
          `我明白了，那么......请多指教，周日宁静......我的女朋友。`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `你说这话的时候感觉自己有些不太适应这个称呼，但是她看起来似乎比你更加羞涩，`,
        );
        await era.printAndWait(
          `那张平日里古井无波的脸庞此刻已经被红霞所占据，游离的眼神和不安晃动的尾巴说明她绝对没有看起来那么平静。`,
        );
        await chara_talk.say_and_wait(
          `请.....请多多指教，我会承担起作为一个合格女友的责任，拖雷纳君......我或许，已经无法离开你的身边了。`,
        );
        await era.printAndWait(
          `她抱住了你的身子，捧住你的脸将你的吻夺走，她的吻技非常的生涩，一上来就咬破了你的嘴唇。`,
        );
        await era.printAndWait(
          `但是你们什么都没有说，两个人拥吻在一起，许久之后才松开嘴唇，周日宁静舔着口腔中的血腥味，露出了愉快的笑容。`,
        );
        await chara_talk.say_and_wait(
          `拖雷纳君，我以后再也不会放开你的手了........绝对不会。`,
        );
        await sys_love_uma_in_event(400);
      } else {
        era.printButton(
          `那个.......很抱歉，我想我们都需要再思考一下这件事。`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `周日宁静听到了这句话之后委屈的仿佛要哭出来了一样，她强行眯起眼睛，低着脑袋不让你看到她的脸，闷闷的点了点头。`,
        );
        await chara_talk.say_and_wait(
          `我知道了......拖雷纳君说得对，是我太草率了，对不起......但是.......如果可以的话，请务必给我一个正式的答复吧。`,
        );
        await era.printAndWait(
          `周日宁静头也不回的离开了你们所在的地方，似乎是怕你看到她的表情，周日宁静跑的非常快。`,
        );
        era.set('cflag:400:爱慕暂拒', 49);
      }
    } else if (love === 49) {
      await print_event_name('爱慕暂拒', chara_talk);
      await era.printAndWait(
        `周日宁静躺在属于她的床上，摸着自己的胸口，呼吸逐渐粗重起来。`,
      );
      await chara_talk.say_and_wait(
        `为什么呢？拖雷纳君，为什么我会在这个时候想起你呢？`,
      );
      await era.printAndWait(
        `明明此刻早就应该入睡，保证明天有充足的精力去进行训练，但是周日宁静的脸上出现了一丝连她自己都弄不明白的神色。`,
      );
      await chara_talk.say_and_wait(`我居然也会.......这样想念一个人吗？`);
      await era.printAndWait(
        `心脏在剧烈的挑动，看向窗外皎洁的月亮，露出了一丝苦笑。`,
      );
      await chara_talk.say_and_wait(
        `已经开始对夜晚感到焦躁了，但是为什么呢.......是因为感觉和您在一起很美好.......不想离开您吗？`,
      );
      await era.printAndWait(
        `她的手不自觉的伸向了更加隐私的部位，周日宁静曾经感受过来自（玩家名）的怀抱，而这一刻，连她自己都没有意识到的种子正在缓缓的生根发芽。`,
      );
      await chara_talk.say_and_wait(
        `呼.....哈......明明明天还要训练......周日宁静，你可真是个无药可救的白痴啊。`,
      );
      await era.printAndWait(
        `解开上衣的口子，捏住鲜红如蓓蕾的乳头，另一只手轻轻在已经开始湿润的穴口摩擦着，周日宁静将自己的身体交给了快感。`,
      );
      await era.printAndWait(`在周日宁静低沉的喘息声逐渐减弱之后。`);
      await chara_talk.say_and_wait(
        `被单都有点湿了，但是.......好像.....好点了，明明在成为三冠马娘之前，都不应该有这种念头才对的。但是.......忘不了他啊。`,
      );
      await chara_talk.say_and_wait(
        `不行.......这个时候，已经到了这种时候，为了我们的愿望，我绝对不能有任何的分心......`,
      );
      await era.printAndWait(
        `这样说着，周日宁静捏了一把自己的脸颊，清理完床铺之后闭上眼睛。`,
      );
      era.set('cflag:400:爱慕暂拒', 49);
    } else {
      throw new Error('unsupported stage!');
    }
  } else {
    throw new Error('unsupported stage!');
  }
};
