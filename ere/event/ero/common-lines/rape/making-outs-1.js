/**
 * @file 调教地文 - 强奸爱抚系1
 *
 * @autho ALEX
 */

const era = require('#/era-electron');
const EroMakingOuts = require('#/event/ero/common-lines/interface/ero-making-outs');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const virgin_color_desc = ['粉嫩可人', '红润泛紫', '深邃成熟'];
const skin_color_desc = [`象牙白`, `白皙`, `红润`, `浅褐色`];
module.exports = class extends EroMakingOuts {
  /**
   * @author O口口口口口
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        `未经本人允许的抚摸起 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的耳朵，细密的绒毛和有些发烫的耳廓，与面前人儿涨红的脸色辉映。`,
      ]);
      await attacker.print_and_wait([
        `稍稍捏紧，头几乎是瞬间弹向了另一侧，嘴里也发出了代表着反对的强烈呜咽声。`,
      ]);
      await attacker.print_and_wait([
        `不过任凭这家伙怎么挣扎与皱紧眉头，自耳尖连续不断的强烈刺激，还是在几秒钟之后剥夺了 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的力量`,
      ]);
    } else {
      await defender.print_and_wait([
        `颤巍巍地低下了头部，耳朵被那家伙当成了什么性器官般地爱抚着。`,
      ]);
      await defender.say_and_wait([`能结束了吗……`], true);
      await defender.say_and_wait([`呜！`]);
      await defender.print_and_wait([
        `敏感的根部与内侧忽然被指尖戳弄着，耳朵因为受惊而下意识的绷直。`,
      ]);
      await defender.print_and_wait([
        `报复般地让竖起的马耳朵打在对方侧脸上发出了‘啪’的声响，却只是惹得这家伙发出了一阵笑声。`,
      ]);
    }
  }
  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_ear(attacker, defender) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    await attacker.print_and_wait([
      `已经在先前的抚摸中预热到差不多的${era.get(`cstr:${defender.id}:发色`)}色马耳朵，正相当不情愿的贴在头发上试图躲避进一步的侵犯。`,
    ]);

    await attacker.print_and_wait([
      `不过还是被轻松的抓住了，而后毫不犹豫的肆意拉扯起来，让眼前的赛马娘支支吾吾地吐出了求饶的话语。`,
    ]);
    await attacker.print_and_wait([
      `因为这粗鲁的玩弄而本能地痉挛抖动起来的耳尖，泛着充血的可爱粉红。`,
    ]);
  } /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_breast(attacker, defender, hook) {
    if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait([
        `伸手托住了弹软如布丁般微微颤动的乳肉，轻轻按压，用掌心感受着面前的${era.get(`cflag:${defender.id}:种族`) ? `母马` : `雌性`}因为自己的侵犯而不断升高的心跳。`,
      ]);
      await defender.say_and_wait([`绝对！绝对饶不了你……`]);
      await defender.say_and_wait(['唔！！！']);
      await attacker.print_and_wait([
        `粗鲁的将乳房揉搓成不同形状，让面前这家伙想要吐出的威胁被胸前的火热触感顶掉。`,
      ]);
      await attacker.print_and_wait([`那么接下来又该捏成什么样子呢？`]);
    } else {
      await attacker.print_and_wait([
        `温热乳肉在掌心下挤压变形，连指缝间的乳首也勃起得越发明显。`,
      ]);
      await attacker.print_and_wait([`就象是在不断品味触感般来回抚摸。`]);
      await defender.say_and_wait([`混蛋！！！`]);
      await attacker.print_and_wait([
        `被肆意玩弄胸部的 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 咒骂着在她身上为所欲为的人……但也仅仅只能做到这点而已。`,
      ]);
    }
  }

  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        `捏住已经自觉挺立起来如莓果般硬挺的乳尖细细摩挲，像是调整收音机旋钮般捏弄着。 `,
      ]);
      await attacker.print_and_wait([
        `充血嫣红的乳头像是强调着自己的存在感般的发着热。`,
      ]);
      await attacker.print_and_wait([
        `身前的 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 被刺激地咬紧牙关，抿不紧的唇边开始能看出忍耐的痕迹。`,
      ]);

      await attacker.print_and_wait([`……那么就再加点力道好了。`]);
    } else {
      await attacker.print_and_wait([
        `毫不客气的对着翘立起来的乳头伸出了手，指尖轻巧又迅速地逗弄乳尖，一下又一下地按着挺立的乳头。`,
      ]);
      await attacker.print_and_wait([
        `拉扯玩弄着逐渐如米粒般坚硬的乳头，泛着粉色的身体在微微颤抖着……不过仍旧倔强的抿着唇。`,
      ]);
      await attacker.print_and_wait([`很简单，只要用指甲轻轻一捏……`]);
      await defender.say_and_wait([`唔——❤️！`]);
      await attacker.print_and_wait([
        `就换来了 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 短促而高亢的淫叫，吐露在嘴角的舌尖带着晶莹的涎水。`,
      ]);
    }
  }

  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_clitoris(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        `双指分开，被剥开外皮的小豆豆正害羞的微微抖动。`,
      ]);
      await defender.say_and_wait([`喂……你想……`]);
      await attacker.print_and_wait([
        `指甲轻轻扣进阴蒂的皮肉之间一提，于是 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 便本能地弓起了腰肢，身体放荡的颤抖了起来。`,
      ]);
    } else {
      await attacker.print_and_wait([
        `粗暴地剥露开包覆阴蒂的表皮，用食指挤按固定阴蒂，中指与无名指固定阴唇。`,
      ]);
      await attacker.print_and_wait([
        `熟练地用刮擦与震颤刺激着，充血勃起的阴蒂在肆意地揉捏拉扯下愈发敏感。`,
      ]);
      await attacker.print_and_wait([
        `通过不断的按摩让持续不断的快感沿着脊髓传入 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的大脑，就算是再坚定无比的意识被这么玩弄着也会出现一丝裂痕吧。`,
      ]);
      await defender.say_and_wait([`唔噫……❤️阴蒂，要被揉坏了……啊啊啊啊❤️`]);
      await attacker.print_and_wait([`没错……的确变得有些红肿了呢。`]);
    }
  }
  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async finger_fuck(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        `简单的用食指和中指比划了一下，还没等 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 反应过来，并着的两根手指就直接插入了${virgin_color_desc[era.get(`talent:${defender.id}:茎核类型`)]}的小穴`,
      ]);
      await defender.say_and_wait([`咿……不……不要啊……混蛋！`]);
      await attacker.print_and_wait([
        `螓首后仰，${era.get(`cstr:${defender.id}:毛色`)}毛的${era.get(`cflag:${defender.id}:种族`) ? `马娘` : `雌性`}像是中了箭天鹅般吟出了痛苦中夹着愉悦的甜美悲鸣。`,
      ]);
    } else {
      await attacker.print_and_wait([
        `指尖粗鲁地在柔软湿润的肉穴中抽插着，深入其中的手指变换着敲打，揉捏，划搓，闲下来的另一只手也隔着小腹配合着按压。`,
      ]);
      await defender.say_and_wait([`呜……`]);
      await attacker.print_and_wait([
        ` `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 用手拼命的压住粉唇，漂亮的眸子湿润迷离。`,
      ]);
      await attacker.say_and_wait([
        `看来效果很不错呢， `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 同学。`, // 同学/女士 这块我暂时没有想到如何判断年龄
      ]);
    }
  }

  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([`只是在外面打转有有什么意思？`]);
      await attacker.print_and_wait([
        `于是手指继续向前挺进，探索着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 平时自慰很少碰到的地方，直到指尖划过了肉壁上的一个细小凸起。`,
      ]);
      await defender.say_and_wait([`哈啊……求求你……`]);
      await defender.say_and_wait([`——噫呀~！`]);
      await attacker.print_and_wait([
        `只消一个轻轻的挤压， `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的求饶就转为畅快的呻吟。`,
      ]);
      await attacker.print_and_wait([
        `露出了只有在自甘堕落的退役赛马娘拍摄的a片中才会出现的下贱阿嘿颜。`,
      ]);
    } else {
      await defender.say_and_wait([`哈啊~这是……什么……`]);
      await attacker.print_and_wait([
        ``,
        `不安地扭动着腰部，却只是让已经变得软嫩的穴肉直接紧紧缠住了探入体内的手指。`,
      ]);
      await attacker.print_and_wait([
        `在被识破了弱点之后，开始还试着挤出异物的小穴已经积极用突起不停地摩擦着指腹上的粗糙纹路`,
      ]);

      await attacker.print_and_wait([
        `汗水顺着她光滑的侧脸流到她微微张开的嘴角，和她稍稍吐出的舌尖上的口水一起滴落。`,
      ]);
      await defender.say_and_wait([`呜……`]);
      await attacker.print_and_wait([
        `双眸半睁，瞳孔也翻白的仿佛马上就要昏睡过去一样，`,
      ]);
    }
  }
  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */

  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        `既不是以触诊，也不是以什么恋人的身份，而是违背了对方意愿的把玩着眼前马娘的大腿。`,
      ]);
      await attacker.print_and_wait([
        `有着${skin_color_desc[era.get(`cflag:${defender.id}:肤色深度`)]}的皮肤和恰到好处的肉感。`,
      ]);
      await attacker.print_and_wait([
        `在被识破了弱点之后，开始还试着挤出异物的小穴正积极用突起不停地摩擦着指腹上的粗糙纹路`,
      ]);
      await attacker.print_and_wait([
        `划着优美的腿部曲线，感受着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 被锻炼出来的成果，松手便迅速回弹的绝妙弹性对于指尖而言简直是完美的享受`,
      ]);
      await attacker.print_and_wait([`看来训练的成果很不错……`]);
    } else {
      await attacker.print_and_wait([
        ` `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 兼具着肉感与曲线的大腿，在手掌的来回摩挲着下被染出了下流的粉色和黏腻的油光汗渍。`,
      ]);
      await attacker.print_and_wait([
        `试图并拢大腿躲避玩弄，却只是把更为敏感的大腿根部也一同送上。`,
      ]);
      await attacker.print_and_wait([
        `被腿肉包裹的整个手掌都享受起了紧致腿肉摩擦的触感。`,
      ]);
      await attacker.print_and_wait([
        `看着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的潮红中带着厌恶的脸，感觉就像是未经本人允许碰了什么性器官一样。`,
      ]);
    }
  }
  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_tail(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        `空闲下来的手顺着后背向下摸去，才刚刚碰到尾巴根部的位置，全身绷紧的 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 全身就像过电了哆嗦了一下。`,
      ]);
      await defender.say_and_wait([`你！混蛋！别想！`]);
      await attacker.print_and_wait([
        `猛地抬起头正凶狠地盯着自己的马娘，双眸中却楚楚可怜地噙着闪烁的泪光。`,
      ]);
    } else {
      await attacker.print_and_wait([
        `挑拨般地继续轻挠着尾巴根，望着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 那可怜兮兮却还在强忍着刺激的挣扎表情。`,
      ]);
      await defender.say_and_wait([`哈，哈~哈~人……渣……`]);
      await attacker.print_and_wait([
        `轻轻咬着牙关，身体都微微发抖，却只是勾起了自己的施虐欲。`,
      ]);
      await attacker.print_and_wait([
        `更过分的缠住${era.get(`cstr:${defender.id}:毛色`)}色的尾巴轻轻勾动。`,
      ]);
    }
  }

  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('咿~❤️');
    await defender.print_and_wait(['从尾尖到尾根，而后是席卷全身的奇妙感觉。']);
    await defender.print_and_wait([
      `像是许久未用的缆线突然被再次接通，从发痛的尾巴根到大脑，再由大脑返回给嗡动的小穴。`,
    ]);
    await defender.print_and_wait([
      `在身体向后仰起的同时，下意识的开始摇尾祈怜。`,
    ]);
  }
  /**
   * @author O口口口口口
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cunnilingus(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        `眯着眼睛，贴近观察着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 已经自觉挺立起来的红肿阴蒂。`,
      ]);
      await attacker.print_and_wait([
        `在这过程中故意让自己呼出的气息拍打在上面，受到刺激的小豆豆又挺立了几分。`,
      ]);
      await defender.say_and_wait([`不要，不要看.....`]);
      await attacker.print_and_wait([
        `用舌头落在阴蒂上用力舔舐，于是之前厉声呵斥自己的声音遍带上了些求饶的意味。`,
      ]);
      await attacker.print_and_wait([
        `抽搐着的吐出淫液的小穴把自己的嘴唇也弄的湿漉漉的。`,
      ]);
    } else {
      await defender.print_and_wait([
        `敏感的小豆豆被舌尖舔弄着，试图咬紧的牙关却在随着面前这个混蛋的动作从偶尔泄出嘤咛。`,
      ]);
      await defender.print_and_wait([`不过，不会这么轻易放弃抵抗的！`]);
      await defender.say_and_wait([`咿呀！！！`]);
      await defender.print_and_wait([
        `突然的疼痛与陡然过电般的快感，让身体瞬间绷直，嘴角也不受看控制的抽动了起来。`,
      ]);
      await defender.say_and_wait([`别！别用牙齿咬那里啊！`]);
    }
  }

  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suck_virgin(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait([`别……别……滚开啊……`]);
      await attacker.print_and_wait([
        `自顾自地亲吻在了 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` ${virgin_color_desc[era.get(`talent:${defender.id}:茎核类型`)]}的小穴上，毫无理会那没有威慑力甚至还有些哆嗦的威胁。`,
      ]);
      await attacker.print_and_wait([`轻轻吸吮，温热柔软的舌头进入了腔道。`]);
      await attacker.print_and_wait([
        `来回剐蹭着柔软腔肉上的褶皱，能感觉到时不时收缩的腔道仿佛想将自己的舌头挤出去。`,
      ]);
    } else {
      await defender.say_and_wait([`不要……呜呼呼……`]);
      await defender.print_and_wait([
        `浅处的褶肉已经被探入的异物彻头彻尾的碾过了一遍。`,
      ]);

      await defender.print_and_wait([
        `低声咒骂间，``${era.get(`cflag:${defender.id}:种族`) ? `用于奔跑的` : ``}双腿已经颤抖而无力的夹住了那埋在腿间的头。`,
      ]);
    }
  }

  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait([
        `将伸到嘴边的腥臭龟头含入口中，因犹豫而缓慢的将舌头贴上棒身。`,
      ]);
      await attacker.say_and_wait([`再加把劲吧。`]);
      await defender.say_and_wait([`得寸进尺……`], true);
      await defender.say_and_wait([`呜……`]);
      await defender.print_and_wait([
        `不过屈服于当下的自己还是自觉地缩窄口腔，上下滑动的唇瓣将湿滑的唾液均匀的涂抹在肉棒上。`,
      ]);
      await defender.print_and_wait([
        `舌面极不情愿的舔舐着表面鼓起的青筋，让肉棒被自己的唾液变得亮晶晶的。`,
      ]);
      await defender.say_and_wait([`唔……怎么又变大了一点……`], true);
    } else {
      await defender.print_and_wait([`闭上双眼，想着只要不看到就不会在意。`]);
      await defender.print_and_wait([
        `但可靠的嗅觉还是将现在的情况忠实的反应给了自己。`,
      ]);
      await defender.print_and_wait([
        `柔软的香唇慢慢的将阴茎包裹，练习过歌声的舌尖缭绕着龟头婉转，本该捧着奖杯的双手扶住阴茎。`,
      ]);
      await defender.print_and_wait([`亲吻……呼吸……嗅闻……`]);
      await defender.say_and_wait([`好臭……`], true);
    }
  }
  /**
   * @author ALEX
   *
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        `直接用膨胀到了极点的肉棒撑开了 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的嘴唇。`,
      ]);
      await attacker.print_and_wait([
        `柔软的嘴唇如环一般束缚在肉棒上前后滑动，连侧脸都被顶出了一个凸起。`,
      ]);
      await attacker.print_and_wait([
        `下意识缩紧的嘴唇与脸颊内侧的粘膜为肉茎构筑出了一具极窄的肉穴。`,
      ]);
      await attacker.print_and_wait([
        `不过，更叫人喜欢的，还是望向你的，包含鄙夷的亮晶晶眸子。`,
      ]);
    } else {
      await defender.say_and_wait([`哈……❤️`]);
      await attacker.print_and_wait([
        `刚刚还一直只盯着自己的双眼现在失去了焦点，偶尔在肉棒抽出口腔的喘息间。`,
      ]);
      await attacker.print_and_wait([
        `名叫 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的${era.get(`cflag:${defender.id}:种族`) ? `母马` : `雌性`}就会无意识地用吐出的舌头轻托着肉棒。`,
      ]);
      await attacker.print_and_wait([
        `让口中的唾液缓缓与先走汁一同滴落的同时，大口吸入混着浓烈肉棒臭的空气。`,
      ]);
    }
  }
};
