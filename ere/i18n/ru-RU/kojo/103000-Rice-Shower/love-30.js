/**
 * @file 米浴 - 爱慕
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '爱欲';
    /**
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 米浴对玩家的称呼
     * @param {string} self_call 米浴的自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.print_and_wait([
        '首先，',
        callname,
        ' 很帅气，温柔、可靠，即使 ',
        self_call,
        ' 给 ',
        callname,
        ' 添了很多麻烦，也还是会笑着给 ',
        self_call,
        ' 打气。',
      ]);
      await rice.print_and_wait([
        '……有时候还很可爱！总之 ',
        self_call,
        ' 喜欢 ',
        callname,
        '。',
      ]);
      await rice.print_and_wait([
        '好几次好几次好几次，',
        self_call,
        ' 想把 ',
        callname,
        ' 扑倒。',
      ]);
      await rice.print_and_wait([
        '可一想到会让 ',
        callname,
        ' 伤心，',
        self_call,
        ' 都努力忍耐下来了。',
      ]);
      era.printButton(
        `当然了，因为 ${callname} 的心情才是最重要的（暂不升级）`,
        1,
        { buttonType: '', color: rice.color },
      );
      era.printButton(
        `不管 ${callname} 的回答是哪一种，${self_call} 都不会再忍受下去了（升级关系）`,
        2,
        { buttonType: '', color: rice.color },
      );
      const ret = await era.input();
      if (ret === 2) {
        await rice.print_and_wait([
          '教会了 ',
          self_call,
          ' 要相信自己的人正是 ',
          callname,
          '，',
          self_call,
          ' 这次一定会努力下去，绝不放弃。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '告白';
    /**
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 米浴对玩家的称呼
     * @param {string} self_call 米浴的自称
     * @param {PrintedSpan} y_call_r 玩家对米浴的称呼
     */
    const f = async (rice, you, callname, self_call, y_call_r) => {
      await rice.print_and_wait([self_call, ' 最喜欢 ', callname, ' 了']);
      await rice.print_and_wait(
        '正因为最喜欢，所以这份爱，即使无法结出果实也没有关系。',
      );
      await rice.print_and_wait('所以呢，这样就可以了。');
      await rice.print_and_wait([self_call, '，走到这里就好。']);
      await rice.print_and_wait([self_call, '，本是如此祈愿的。']);
      era.drawLine();
      await era.printAndWait([
        rice.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 说，无论如何都想要看某些店。',
      ]);
      await era.printAndWait([
        '于是 ',
        you.get_colored_name(),
        ' 就带 ',
        rice.get_colored_name(),
        ' 来到了这里，是距离学园有些远的街区。',
      ]);
      await era.printAndWait('一家是大大的书店，一家是精美的杂货屋。');
      await era.printAndWait('这里尚且是闪耀着彩灯，让恋人们欢度圣诞的街道。');
      await era.printAndWait('稍远处，便是闪烁着霓虹色灯光的大人的场所。');
      await rice.say_and_wait([
        self_call,
        '，有想要送给 ',
        callname,
        ' 的礼物。',
      ]);
      await rice.say_and_wait([
        self_call,
        ' 的一切，都是 ',
        callname,
        ' 赋予的。',
      ]);
      await rice.say_and_wait([
        '所以 ',
        self_call,
        ' 想要对 ',
        callname,
        ' 说一句，万分感谢您一直以来对 ',
        self_call,
        ' 的照顾。',
      ]);
      await rice.say_and_wait([
        callname,
        '，我一定会努力当一个好赛',
        rice.uma_sex_title,
        '的，所以请你不要放弃我。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 抬起头来，突然对 ',
        you.get_colored_name(),
        ' 如此说道。',
      ]);
      await rice.say_and_wait([
        '当我听到 ',
        callname,
        ' 愿意当我训练员的时候，真的很高兴喔。',
      ]);
      await rice.say_and_wait('我从小就一直努力想成为给人带来幸福的人。');
      await rice.say_and_wait([
        '但是，对爸爸妈妈来说，我想他们一定放心不下 ',
        self_call,
        ' 吧。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 一字一句地从喉咙里吐出话来。',
      ]);
      await rice.say_and_wait([
        '从小 ',
        self_call,
        ' 就一直希望有个',
        you.elder_sibling_sex_title,
        '。如果真能有个',
        you.elder_sibling_sex_title,
        '的话，',
        self_call,
        ' 就可以向',
        you.sex,
        '撒娇……',
      ]);
      await era.printAndWait('充满真挚纯粹的眼神。');
      await era.printAndWait([
        rice.get_colored_name(),
        ' 美丽的双眸，现在正静静地凝视 ',
        you.get_colored_name(),
        '。',
      ]);
      await rice.say_and_wait([
        callname,
        '，你会不会觉得这样的 ',
        self_call,
        ' 很麻烦呢？',
      ]);
      era.printButton('「一点也不会觉得麻烦。」', 1);
      await era.input();
      await you.say_and_wait([y_call_r, ' 任何时候都可以向我撒娇哦。']);
      await rice.say_and_wait([
        '真的吗？你愿意一直陪在 ',
        self_call,
        ' 的身边吗？',
      ]);
      await era.printAndWait('两人之间的距离瞬间拉近。');
      era.printButton('「嗯，我会一直陪在你身边。」', 1);
      await era.input();
      await rice.say_and_wait([
        '一定哦？',
        callname,
        ' 要一直陪在 ',
        self_call,
        ' 身旁。',
      ]);
      await rice.say_and_wait('不可以不告而别，也不准突然撒手人寰地离开。');
      await you.say_and_wait(['我会永远陪在 ', y_call_r, ' 身边的。']);
      await rice.say_and_wait(['谢谢，我最喜欢 ', callname, ' 了。']);
      await era.printAndWait([
        rice.get_colored_name(),
        ' 双手一把抱住了 ',
        you.get_colored_name(),
        '。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '佳偶';
    /**
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 米浴对玩家的称呼
     * @param {string} self_call 米浴的自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.print_and_wait('某个休息日的早上');
      await rice.print_and_wait([
        rice.get_colored_name(),
        '，被包裹在灼热中、带有些许痛苦的、无法言说的不安弄醒了。',
      ]);
      await rice.print_and_wait([
        '这种感觉，',
        rice.get_colored_name(),
        ' 并不是第一次经历。',
      ]);
      await rice.print_and_wait(
        '如果是以往，稍微再睡一下，之后活动活动身体，就可以痊愈了。',
      );
      await rice.print_and_wait([
        '于是，',
        rice.get_colored_name(),
        ' 就像往常一样活动身体，换好衣服然后出门。',
      ]);
      era.drawLine();
      await rice.print_and_wait('但是，怎么也治不好。');
      await rice.print_and_wait('漫步、奔跑、坐下休息。');
      await rice.print_and_wait('既不安又难过，可是无可救药。');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' 抱着忐忑的心情坐在路边。',
      ]);
      await rice.print_and_wait(['偶然的，', callname, ' 路过了。']);
      await rice.print_and_wait([
        callname,
        ' 为难地牵起了 ',
        rice.get_colored_name(),
        ' 的手。',
      ]);
      era.drawLine();
      await rice.print_and_wait([
        '到 ',
        callname,
        ' 房间的时候，',
        rice.get_colored_name(),
        ' 已经到极限了。',
      ]);
      await rice.print_and_wait('热情、悲伤、不安。');
      await rice.print_and_wait([
        '但是，心里的某个地方，从被 ',
        callname,
        ' 牵着手开始，就酸酸甜甜的。',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' 把自己寄存在 ',
        callname,
        ' 的怀抱里。',
      ]);
      await rice.print_and_wait('自然的，刚才的不安消失了。');
      await rice.say_and_wait('嘶……');
      await rice.print_and_wait('每一次深呼吸，温暖的东西便会积攒起来。');
      await rice.say_and_wait('呼……');
      await rice.print_and_wait(
        '慢慢地吐气，积蓄的东西就好变成甜蜜的幸福，传遍全身。',
      );
      await rice.print_and_wait('仅仅是呼吸，就会越来越幸福。');
      await rice.say_and_wait('嗯……啊！');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' 因为这份快感要融化了。',
      ]);
      await rice.print_and_wait([
        callname,
        ' 的手触碰到了 ',
        rice.get_colored_name(),
        ' 的后背。',
      ]);
      await rice.print_and_wait('宛如顽童，触摸、轻抚。');
      await rice.say_and_wait('啊……嗯……');
      await rice.print_and_wait([
        '融化在粘稠中的 ',
        rice.get_colored_name(),
        '，被 ',
        callname,
        ' 的手搅拌，卷起快乐的波浪。',
      ]);
      await rice.print_and_wait([
        '然后，',
        callname,
        ' 就把手放在 ',
        rice.get_colored_name(),
        ' 尾巴的根部。',
      ]);
      await rice.print_and_wait('有模有样地，不停地打转、触摸。');
      await rice.say_and_wait('啊……嗯啊！');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' 的身体颤抖着，软成一滩乱七八糟的烂泥。',
      ]);
      await rice.say_and_wait(['啊啊，', callname, '……更多，再多一点！']);
      await rice.print_and_wait(['这时，', callname, ' 的手突然停了下来。']);
      await rice.print_and_wait('波涛汹涌的某物，也一下子变得风平浪静。');
      await rice.say_and_wait(callname);
      await rice.print_and_wait([
        '然后，',
        callname,
        ' 就把 ',
        rice.get_colored_name(),
        ' 的尾巴从根部拽起。',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' 的全身都被幸福的浪潮侵袭。',
      ]);
      await rice.say_and_wait(['啊啊……啊，', callname, '……']);
      await rice.say_and_wait([self_call, '……好幸福！']);
      await rice.print_and_wait([
        '过了一会儿，',
        rice.get_colored_name(),
        ' 沉浸在幸福的泥淖里，就这样睡着了。',
      ]);
      era.drawLine();
      await rice.print_and_wait([
        '起来的时候，神清气爽的 ',
        rice.get_colored_name(),
        ' 对上了 ',
        callname,
        ' 恶作剧似的笑脸。',
      ]);
      await rice.print_and_wait([
        '感觉害羞的脸都快起火了，',
        rice.get_colored_name(),
        ' 只好缩回被子里。',
      ]);
      await rice.say_and_wait('但是，真幸福啊……', true);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '依存';
    /**
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 米浴对玩家的称呼
     * @param {string} self_call 米浴的自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.say_and_wait([
        '为什么不看着 ',
        self_call,
        ' 呢？因为 ',
        self_call,
        ' 是个坏孩子所以讨厌 ',
        self_call,
        ' 了吗？',
      ]);
      await rice.say_and_wait([
        '这样啊……那就必须刻上 ',
        self_call,
        ' 是个坏孩子的证明吧。',
      ]);
      await rice.say_and_wait([
        '所以 ',
        callname,
        ' 必须惩罚 ',
        self_call,
        '，因为 ',
        self_call,
        ' 是个坏孩子，所以 ',
        callname,
        ' 才不给 ',
        self_call,
        ' 爱。',
      ]);
      await rice.say_and_wait([
        '为什么？为了 ',
        callname,
        ' ',
        self_call,
        ' 可以每天训练，每周参加比赛，不需要休息。',
      ]);
      await rice.say_and_wait([
        '只要 ',
        callname,
        ' 爱着 ',
        self_call,
        '，就算 ',
        self_call,
        ' 跑不动了也会继续跑下去。',
      ]);
      await rice.say_and_wait([
        '拜托了，',
        self_call,
        ' 就只有 ',
        callname,
        ' 了……',
      ]);
      await rice.say_and_wait([
        '所以，请爱 ',
        self_call,
        '，看着 ',
        self_call,
        '。',
      ]);
      await rice.say_and_wait([callname, '，摸摸 ', self_call, ' 好吗？']);
      await rice.say_and_wait(['欸欸？谢谢，', callname, '。']);
      await rice.say_and_wait('最喜欢你了！');
    };
    f.title = title;
    return f;
  })(),
};
