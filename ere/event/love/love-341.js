/**
 * @file 高多芬柏布 - 爱慕
 * @author フィンランド
 */
const { input, printAndWait, printButton } = require('#/era-electron');

const LoveGod = require('#/event/love/snippets/love-god');
const print_event_name = require('#/event/snippets/print-event-name');

module.exports = class extends LoveGod {
  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id);
    this.fuck_her_button = '听从本能';
    this.fuck_pregnant_button = '服从神意';
    this.fuck_me_button = '服从神意';
    this.reject_button = '南无三';
  }

  async 49(god, me) {
    await print_event_name('祝福之水', god);
    await printAndWait('三女神像静静地矗立着，石刻的双眼一如既往地望向远方。');
    await printAndWait(
      '在三女神的肩膀上，瓶中流出的水倾泻而下，撒向她们脚下的池中。',
    );
    printButton(
      '「如果瓶中洒下的是女神的恩泽，不知道能不能散到我的身上呢……」',
      1,
    );
    await input();
    await printAndWait([
      me.get_colored_name(),
      ' 闭上双眼，在女神像面前祈祷。',
    ]);
    await printAndWait([
      '是巧合吗，飞流而下的水中，一滴水珠恰好飞溅起来，打湿了 ',
      me.get_colored_name(),
      ' 的鞋子。',
    ]);
    await super[49]();
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    await print_event_name('梦中访客', god);
    await printAndWait('（咔哒）');
    await printAndWait(
      '明明并没有门，却传来了门闩转动的声音，接着浮现出一张熟悉的脸。',
    );
    await printAndWait(
      '微笑着的面庞，水蓝色的长发，以及……在缠身布料下若隐若现，如雕塑般美丽的肉体。',
    );
    await printAndWait([
      '现身于梦中的女神，却没有展现出与「神」相称的威严与神迹，正相反，祂温柔地在 ',
      me.get_colored_name(),
      ' 身旁坐下，俯下身子，吻住 ',
      me.get_colored_name(),
      '。',
    ]);
    if (me.sex_code === 1) {
      await printAndWait([
        '祂的手指悄悄地伸向 ',
        me.get_colored_name(),
        ' 的下体，握住那根坚挺的肉棒，温柔地来回抚摸……',
      ]);
    } else {
      await printAndWait([
        '祂的手指悄悄地伸向 ',
        me.get_colored_name(),
        ' 的下体，探入正流淌着爱液的温床之中……',
      ]);
    }
    await super[50](god, me);
  }

  async fuck_her(god, me) {
    if (me.sex_code > 0) {
      await printAndWait([
        '仅仅是唇与手，已无法满足 ',
        me.get_colored_name(),
        ' 高涨的欲望。',
      ]);
      await printAndWait([
        '在本能的驱使之下，在女神无言的注视之中。',
        me.get_colored_name(),
        ' 一把抓住女神的手腕，粗暴地将祂按倒在身下。',
      ]);
      await printAndWait([
        '没有挣扎，没有反抗，祂仅仅是顺从着 ',
        me.get_colored_name(),
        ' 的动作。布料自洁白的胴体上滑落，发出轻微的声响，但旋即淹没在 ',
        me.get_colored_name(),
        ' 野兽般的喘息中……',
      ]);
    } else {
      await printAndWait('在这念头闪过的瞬间，便有什么事情发生');
      await printAndWait('是梦的缘故？还是女神的玩笑？');
      await printAndWait([
        me.get_colored_name(),
        ' 的下身，长出了不属于自己的物体。但相比起眼前娇艳的女神，这种事压根无关紧要。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 一把抓住女神的手腕，将祂压在身下。',
      ]);
      await printAndWait([
        '没有挣扎，没有反抗。祂仅仅是顺从着 ',
        me.get_colored_name(),
        ' 的动作，甚至还在引导 ',
        me.get_colored_name(),
        ' 使用这根并不熟悉的肉棒……',
      ]);
    }
  }

  async fuck_me(god, me) {
    await printAndWait([
      '在迷乱的氛围中，在高涨的爱欲里。',
      me.get_colored_name(),
      ' 渐渐迷失了自我。',
    ]);
    await printAndWait('放空大脑，放松四肢，这样就好。');
    await printAndWait('把身心与灵魂，都献给女神大人吧。');
    await printAndWait('女神身上的衣衫滑落下去，与肌肤摩挲出美妙的音符。');
    await printAndWait([
      me.get_colored_name(),
      ' 闭上双眼，做好了向女神献出一切的准备。',
    ]);
  }

  async reject(god, me) {
    await printAndWait('南无三，何等亵渎！');
    await printAndWait([
      '即使面对这等极乐，',
      me.get_colored_name(),
      ' 的虔诚依然战胜了内心的淫欲。',
    ]);
    await printAndWait([
      me.get_colored_name(),
      ' 颤抖地伸出一只手——已忙得分不清左右。',
    ]);
    await printAndWait('额头，胸口，左肩，接着是右肩……');
    await printAndWait('不断地画着十字……');
  }
};
