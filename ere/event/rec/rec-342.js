/**
 * @file 拜耶尔土耳其 - 招募
 *
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  set,
} = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  async run() {
    const me = get_chara_talk(0),
      god = get_chara_talk(342);
    await print_event_name('与你相遇的奇迹', god);
    await printAndWait([
      '一如既往的观看着预备入学的小',
      get('flag:角色性别') === 1 ? '马郎' : '马娘',
      '们的赛跑，熟练的将',
      get('flag:角色性别') === 1 ? '他' : '她',
      '们的动作与策略都牢记于心，',
      me.get_colored_name(),
      ' 抬起头，在意料之外地看到了一双难以忘怀的眸子。',
    ]);
    printButton('「真是……难以置信」', 1);
    await input();
    await god.say_as_unknown_and_wait(
      '为什么要露出这样的表情，在这里的尽是些有着美好未来的孩子不是吗？',
    );
    await printAndWait('奇妙的触感从腰部向大脑发出信号。');
    await god.say_as_unknown_and_wait(
      '从评价训练员的角度来说，我认为你依旧不算非常称职，不过也算是有可取之处。',
    );
    await printAndWait([
      '转过身去，在梦中那原本强势的马娘小姐又一次出现在 ',
      me.get_colored_name(),
      ' 的面前，深棕色的头发，美丽的眼眸，以及那依旧存在于右眼之上的疤痕，她上下打量着 ',
      me.get_colored_name(),
      '，直到看到了 ',
      me.get_colored_name(),
      ' 的裆部。',
    ]);
    await god.say_and_wait(
      '又一次见面了，在神像下祈祷的家伙，许下那种让人伤脑筋的愿望真的很麻烦啊。',
    );
    await printAndWait([
      '虽然听起来有些冷淡，但是 ',
      me.get_colored_name(),
      ' 能够感觉到她好像有些许的害羞，简直就好像是那时候被 ',
      me.get_colored_name(),
      ' 攻破防线之后露出柔软模样的样子。',
    ]);
    await printAndWait([
      '两人目光相接，随后 ',
      god.get_colored_name(),
      ' 突然露出了微笑，就好像是心满意足一般，开口说道。',
    ]);
    await god.say_and_wait('那么，就当做是回应你的愿望，请成为我的训练员吧。');
    set('flag:当前互动角色', 342);
    set('cflag:342:招募状态', recruit_flags.yes);
    set('cflag:342:育成回合计时', 'x');
  },
};
