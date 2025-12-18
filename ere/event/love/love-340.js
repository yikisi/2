/**
 * @file 达利阿拉伯 - 爱慕
 * @author O口口口口口
 */
const { get, printAndWait } = require('#/era-electron');

const LoveGod = require('#/event/love/snippets/love-god');
const print_event_name = require('#/event/snippets/print-event-name');

const { skin_colors } = require('#/data/color-const');
const { get_skin, get_skin_color } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends LoveGod {
  get fuck_her_button() {
    return '亵渎';
  }

  get fuck_pregnant_button() {
    return '献身';
  }

  get fuck_me_button() {
    return '献身';
  }

  get reject_button() {
    return '南无三';
  }

  async 49(god, me) {
    await print_event_name('追寻女神像的「目光」', god);
    await printAndWait([
      '在似乎完全没有意义的一番搜索后，',
      me.get_colored_name(),
      ' 仍旧在被谁偷偷看着。',
    ]);
    await printAndWait(
      '嗯…如果需要进一步描述的话，并不是那种带有恶意的目光吧。',
    );
    await printAndWait('要说的话大概是猫舌头？');
    await printAndWait(
      '柔软……又温暖……但是有着能让肌肤发痒的柔韧倒刺，而且不知道什么时候就已经被缠上潜到了身后的感觉也很相似。',
    );
    await printAndWait('要不要向女神大人祈祷一下呢……');
    await super[49]();
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    await print_event_name('「目光」与狩猎', god);
    await printAndWait('轻巧矫健地攀上了床。');
    await printAndWait([
      '双手下撑将 ',
      me.get_colored_name(),
      ' 固定在了身下。',
    ]);
    await printAndWait('像是打量着该从哪里开始下手似的投来翠色的目光。');
    await printAndWait([
      '这也是梦的一环吗…以一个出奇淡漠的视角，',
      me.get_colored_name(),
      ' 看着自己的房间里多出了一只红色头发、肤色',
      { color: skin_colors.at(-1), content: i18n().skin_3 },
      '的马娘，看着',
      god.get_colored_sex(),
      '像雌豹一样将床上的 ',
      me.get_colored_name(),
      ' 扑在了身下，然后是kiss……',
    ]);
    await printAndWait([
      '再之后的……就是蒙进了雾中般的……汗淋淋纠缠在一起的',
      me.get_phy_sex_title(),
      '与马娘的身体……',
    ]);
    await super[50](god, me);
  }

  async fuck_her(god, me) {
    await printAndWait([
      '就算是梦中，就算是面对眼前莫名带着出尘高贵气质的马娘小姐，也没有屈居于身下的理由吧！',
    ]);
    await printAndWait([
      '在面前马娘小姐惊诧的目光下，因上涌的火烧似的的灼热感了失去理智的 ',
      me.get_colored_name(),
      '，同床上小羊羔似的被摆弄着的 ',
      me.get_colored_name(),
      ' 的身体合在了一起，睁开浑浊的眼睛反擒住了那双手。',
    ]);
    if (get('cflag:0:肤色深度') === get('cflag:340:肤色深度')) {
      await printAndWait(
        '紧接着，激烈抵抗着的身体与身体，褐肤的女神屈从在了那与自己有着相同的肤色的孩子之下。',
      );
    } else {
      await printAndWait([
        '紧接着，激烈抵抗着的身体与身体，',
        { color: skin_colors.at(-1), content: i18n().skin_3 },
        '被',
        { color: get_skin_color(0), content: get_skin(0) },
        '压倒',
      ]);
    }
  }

  async fuck_me(god, me) {
    await printAndWait('完全没有力气抵抗。');
    await printAndWait(
      '现在身体如此诉说着，面前的马娘小姐是毫无疑问的上位者。',
    );
    await printAndWait(
      '就算身为训练员被这样平时视为学生的马娘小姐欺在身下相当羞耻，就算被骑上了床，就算被那熟练的唇舌夺去了吻，就算面前的狩猎者直到如此也不愿停下——',
    );
    await printAndWait([me.get_colored_name(), ' 所能做的，也唯有献身……吧……']);
  }

  async after_fuck() {
    await printAndWait('……');
    await printAndWait(['嘶……今天也是……梦……吗。']);
  }

  async reject(god, me) {
    await printAndWait('是梦吧。');
    await printAndWait([
      '虽然在梦中发觉了自己是在做梦似乎有些奇怪，但现在这幅 ',
      me.get_colored_name(),
      ' 正看着 ',
      me.get_colored_name(),
      ' 与',
      god.get_colored_sex(),
      '的场景就是梦吧。',
    ]);
    await printAndWait([
      '所以，就算这边的唇也已感受到了那份柔软，就算那边的',
      me.sex,
      '与',
      god.get_colored_sex(),
      '已经变得赤裸而妖艳，就算 ',
      me.get_couple_title(),
      ' 已如蛇般将光滑的身体纠缠在了一起，',
    ]);
    await printAndWait('只要……继续祈祷……');
  }
};
