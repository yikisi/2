const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EduEventMarks = require('#/data/event/edu-event-marks');
const event_hooks = require('#/data/event/event-hooks');

/**
 * 周日宁静 - 爱慕
 *
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
module.exports = async (hook, _, event_object) => {
  const event_marks = new EduEventMarks(400),
    love = era.get('love:400'),
    chara_talk = get_chara_talk(400),
    me = get_chara_talk(0);
  // 我在这里设置了爱慕事件,如果三冠条件则会触发<周日宁静的爱>,若未满足则为爱慕暂拒状态
  if (hook === event_hooks.week_end) {
    if (love === 49 && event_marks.get('love') === 1) {
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
    } else if (love === 49) {
      era.set('cflag:400:爱慕暂拒', 49);
    } else {
      throw new Error('unsupported!');
    }
  }
};
