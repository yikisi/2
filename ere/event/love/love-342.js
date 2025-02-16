/**
 * @file 拜耶尔土耳其 - 爱慕
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const { printAndWait } = require('#/era-electron');

const LoveGod = require('#/event/love/snippets/love-god');
const print_event_name = require('#/event/snippets/print-event-name');

module.exports = class extends LoveGod {
  /** @param {number} chara_id */
  constructor(chara_id) {
    super(chara_id);
    this.fuck_her_button = '争夺主导权';
    this.fuck_pregnant_button = this.fuck_me_button = '享受';
    this.reject_button = '继续沉眠';
  }

  async 49(god, me) {
    await print_event_name('缘分的引力', god);
    await printAndWait([
      '仿佛是受到了引导，仿佛有人在轻声的呼唤，当回过神来的时候，',
      me.get_colored_name(),
      ' 正在仰望着三女神的雕像。',
    ]);
    await printAndWait([
      '仿佛万年不变的石像沉默的平视前方，就好像 ',
      me.get_couple_title(),
      ' 处于两个平行的世界一般。',
    ]);
    await printAndWait([
      '但是那奇妙的感觉没有消失，就好像是有人牵起了 ',
      me.get_colored_name(),
      ' 的手，在 ',
      me.get_colored_name(),
      ' 前方指引方向一般，',
      me.get_colored_name(),
      ' 看着三女神的石像，陷入了思考。',
    ]);
    await printAndWait([
      '微风吹拂，',
      me.get_colored_name(),
      ' 伸出的手掌心中落下一片树叶，细密的纹路仿佛想要向 ',
      me.get_colored_name(),
      ' 诉说什么。',
    ]);
    await super[49]();
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    await print_event_name('愿望实现之夜', god);
    await printAndWait([
      '某个奇妙的身影慢慢的爬上 ',
      me.get_colored_name(),
      ' 的床，双手按住 ',
      me.get_colored_name(),
      ' 的手，于梦中，那赤色的眼眸的拥有者以自己丰腴的身姿将 ',
      me.get_colored_name(),
      ' 按在身下，如同即将要进食的猛兽一般。',
    ]);
    await printAndWait([
      '但是在这朦胧的梦境之中，',
      me.get_colored_name(),
      ' 的意识却出奇的清醒，那有着赤色眼眸、深棕色头发，右眼处还有一道疤痕的马娘，此刻正将 ',
      me.get_colored_name(),
      ' 的身体压住，就好像是一头发情的野兽一般，亲昵的舔舐 ',
      me.get_colored_name(),
      ' 的脸颊随后便对着 ',
      me.get_colored_name(),
      ' 的嘴唇吻了上去。',
    ]);
    await printAndWait([
      '而后，雾气逐渐蔓延开来，迷蒙的雾中，那马娘身上的衣物逐渐剥落，完美的身体曲线展现在 ',
      me.get_colored_name(),
      ' 的眼前，她按住 ',
      me.get_colored_name(),
      ' 的双手，上下打量着 ',
      me.get_colored_name(),
      ' 的身体，那双已然为情欲所占据的眸子之中满是得意，仿佛 ',
      me.get_colored_name(),
      ' 理所应当为她所用，而且那丰腴的身体俯身与 ',
      me.get_colored_name(),
      ' 纠缠在一起。',
    ]);
    await super[50](god, me);
  }

  async fuck_her(god, me) {
    if (me.sex_code > 0) {
      await printAndWait([
        '就算是在梦中，面对着如此高贵而强势的马娘小姐，',
        me.get_colored_name(),
        ' 依旧没有任何想要放弃主导权的打算。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 用力挣脱她钳住 ',
        me.get_colored_name(),
        ' 的手，一把将她反过来按在床上。',
      ]);
      await printAndWait([
        '对于 ',
        me.get_colored_name(),
        ' 这样粗暴的举动，身下的马娘显然没有预料，她用力的挣扎着，但当 ',
        me.get_colored_name(),
        ' 的肉棒进入她的肉穴之中的时候，她就好像瞬间变成了逆来顺受的羊羔一样承受着 ',
        me.get_colored_name(),
        ' 粗暴的举动，甚至 ',
        me.get_colored_name(),
        ' 能感觉到她的呼吸因为 ',
        me.get_colored_name(),
        ' 的行为更加粗重。',
      ]);
      await printAndWait([
        '粗暴的撞击顶开了她的心防，那高贵无比的赤色眼眸的马娘如同 ',
        me.get_colored_name(),
        ' 的奴隶一般任由 ',
        me.get_colored_name(),
        ' 摆弄姿势，屈从于 ',
        me.get_colored_name(),
        ' 的暴行之中，本应挣扎的手此刻软弱无力，任由 ',
        me.get_colored_name(),
        ' 抓着她已然软趴趴的耳朵像是使用飞机杯一般使用她，如同准备受精的孕袋一般等待着 ',
        me.get_colored_name(),
        ' 的灌注。',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 的内心冒出了及其亵渎的想法，将面前这位高贵而强势的马娘小姐按在身上征服的时候，她的脸上会露出何等美妙的表情呢，但是不等 ',
        me.get_colored_name(),
        ' 将这无稽之谈一般的幻想掐灭，',
        me.get_colored_name(),
        ' 感到身上传来一阵的热意与快感。',
      ]);
      await printAndWait([
        '那刚刚还压在 ',
        me.get_colored_name(),
        ' 身上的马娘小姐此刻将头埋在 ',
        me.get_colored_name(),
        ' 的胯下，正在埋头吞吐着 ',
        me.get_colored_name(),
        ' 不知何时长出来的，一根粗壮而有力的肉棒。',
      ]);
      await printAndWait([
        '仿佛是感受到 ',
        me.get_colored_name(),
        ' 的目光，她吐出肉棒，用舌头轻轻扫过马眼之后，用自己的脸颊贴在肉棒之上，对 ',
        me.get_colored_name(),
        ' 露出了一个温柔的，甚至带着些许得意的笑容。',
      ]);
      await printAndWait([
        '但 ',
        me.get_colored_name(),
        ' 再也无法忍受自己的欲火，将她压在身下，两人的身体交合在一起，唇齿相交之间，',
        me.get_colored_name(),
        ' 看着她的表情从游刃有余逐渐开始变得软弱起来，随即一挺身用那位马娘小姐赠与 ',
        me.get_colored_name(),
        ' 的肉棒挺入了她湿润的肉穴之中。',
      ]);
      await printAndWait([
        '她有些惊慌的看着那根肉棒突入她的肉穴，几乎没有激烈的反抗，赤色眼眸马娘小姐就好像是顺从的羔羊一般承受了 ',
        me.get_colored_name(),
        ' 所有的行为。',
      ]);
    }
  }

  async fuck_me(god, me) {
    await printAndWait([
      '像是理解了 ',
      me.get_colored_name(),
      ' 的想法一样，那高贵无比的马娘身下突然多出了一根粗壮而修长有力的肉棒，仅仅是闻到它那凶恶的味道就让 ',
      me.get_colored_name(),
      ' 浑身燥热无比升不起半点反抗的念头，',
      me.get_colored_name(),
      ' 顺从的跟随着那压在 ',
      me.get_colored_name(),
      ' 身上的马娘的动作。',
    ]);
    await printAndWait([
      '两人的身体交合在一起，她搂住 ',
      me.get_colored_name(),
      ' 的腰掌握着所有的动作，完全没有给 ',
      me.get_colored_name(),
      ' 任何发挥的空间，就好像是 ',
      me.get_colored_name(),
      ' 只是她的肉棒飞机杯一样。',
    ]);
    await printAndWait([
      '但逐渐的，',
      me.get_colored_name(),
      ' 不满足于她的节奏，开始主动扭腰与她一同起舞。',
    ]);
    await printAndWait([
      '在反抗与征服的循环之中，有着赤色眼眸的马娘屈从于 ',
      me.get_colored_name(),
      ' 的动作之下，与 ',
      me.get_colored_name(),
      ' 一同共赴云端。',
    ]);
  }

  async after_fuck() {
    await printAndWait(
      '啊……感觉身体似乎有些沉重……是昨晚那个诡异的梦境吗？看起来很高贵其实一下子就会屈服于胯下的马娘……确实是个不错的春梦题材啊。',
    );
  }

  async reject(god, me) {
    await printAndWait([
      '这只是梦境吧，理所应当的，',
      me.get_colored_name(),
      ' 无视了对方的动作，睡眠时间是非常宝贵的，哪怕在梦境之中 ',
      me.get_colored_name(),
      ' 也如此提醒着自己，赤色眼眸的马娘小姐有些不满 ',
      me.get_colored_name(),
      ' 的动作，但是最后，伴随着黑暗的再度上涌，',
      me.get_colored_name(),
      ' 逐渐沉浸于无边柔软的黑暗之中，拥抱安眠。',
    ]);
  }
};
