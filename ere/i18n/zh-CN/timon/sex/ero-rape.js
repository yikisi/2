/**
 * @file 调教地文 - 强奸
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /** 沟通系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async kiss(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        '漂亮的瞳孔因惊恐而扩散，被 ',
        d_call_a,
        ' 双臂禁锢住的身体颤抖着。',
      ]);
      await defender.say_and_wait('呜……');
      await defender.print_and_wait(
        '裹挟着浓烈气息的舌头探入口腔，强行挤入的舌尖越过了试图阻拦的皓齿，极富侵略性地沿着牙龈的根部舔舐而过。',
      );
      await defender.print_and_wait([
        '自己被对方拿捏住的现在，能任凭唇间被磨出的啧响与涎水向外泄出。',
      ]);
    } else {
      await defender.say_and_wait(['咕呜……']);
      await defender.print_and_wait([
        '失态娇呼出声的嘴，却又立即被 ',
        d_call_a,
        ' 的唇封住。',
      ]);
      await defender.print_and_wait([
        '自己只能无助地闭上双眼，握紧了搭在身上的手臂。',
      ]);
      await defender.print_and_wait([
        '任由对方在嘴里掠夺，发出更多唇舌互舔的低沉吻声。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('哈啊……');
      await defender.print_and_wait([
        '以毫无怜惜的粗暴态度撬开了牙关，变得乱哄哄的脑子一时间没有反应过来，任由对方开始肆意妄为。',
      ]);
      await defender.print_and_wait([
        '舔遍了每一寸口腔，又含着瘫软的舌头不知道吸吮了多久……',
      ]);
      await defender.print_and_wait([
        '直到回过神来开始尝试反抗时，口腔内酥酥麻麻的残留快意，让正下意识地吞咽口水的自己差点嘤咛出声。',
      ]);
    } else {
      await defender.say_and_wait('混蛋……给我……停下……噗啾……');
      await attacker.print_and_wait([
        '舌头在 ',
        a_call_d,
        ' 口腔中不断的索取，强撑着的抵抗却只是让舌头在交合推挤间发出更多粘腻的水声。',
      ]);
      await attacker.print_and_wait([
        '带着浓郁荷尔蒙气息的唾液被强硬地灌入口中，为了呼吸而不断吞咽的喉咙，不得不将这强行灌入的唾液全部喝下。',
      ]);
      await attacker.print_and_wait([
        '漫长的深吻持续着，来自 ',
        a_call_d,
        ' 的眼泪与嘴角溢出的晶莹唾液不断滴在地上。',
      ]);
    }
  },
  /** 爱抚系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '未经本人允许的抚摸起 ',
        a_call_d,
        ' 的耳朵，细密的绒毛和有些发烫的耳廓，与面前人儿涨红的脸色辉映。',
      ]);
      await attacker.print_and_wait([
        '稍稍捏紧，头几乎是瞬间弹向了另一侧，嘴里也发出了代表着反对的强烈呜咽声。',
      ]);
      await attacker.print_and_wait([
        '不过任凭这家伙怎么挣扎与皱紧眉头，自耳尖连续不断的强烈刺激，还是在几秒钟之后剥夺了 ',
        a_call_d,
        ' 的力量。',
      ]);
    } else {
      await defender.print_and_wait([
        '颤巍巍地低下了头部，耳朵被那家伙当成了什么性器官般地爱抚着。',
      ]);
      await defender.say_and_wait(['能结束了吗……'], true);
      await defender.say_and_wait(['呜！']);
      await defender.print_and_wait([
        '敏感的根部与内侧忽然被指尖戳弄着，耳朵因为受惊而下意识的绷直。',
      ]);
      await defender.print_and_wait([
        '报复般地让竖起的马耳朵打在对方侧脸上发出了「啪」的声响，却只是惹得这家伙发出了一阵笑声。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait(
      '已经在先前的抚摸中预热到差不多的马耳朵，正相当不情愿的贴在头发上试图躲避进一步的侵犯。',
    );
    await attacker.print_and_wait([
      '不过还是被轻松的抓住了，而后毫不犹豫的肆意拉扯起来，让眼前的赛',
      defender.uma_sex_title,
      '支支吾吾地吐出了求饶的话语。',
    ]);
    await attacker.print_and_wait([
      '因为这粗鲁的玩弄而本能地痉挛抖动起来的耳尖，泛着充血的可爱粉红。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '伸手托住了弹软如布丁般微微颤动的乳肉，轻轻按压，用掌心感受着面前的',
        defender.race > 0 ? '母马' : '雌性',
        '因为自己的侵犯而不断升高的心跳。',
      ]);
      await defender.say_and_wait(['绝对！绝对饶不了你……']);
      await defender.say_and_wait(['唔！！！']);
      await attacker.print_and_wait([
        '粗鲁的将乳房揉搓成不同形状，让面前这家伙想要吐出的威胁被胸前的火热触感顶掉。',
      ]);
      await attacker.print_and_wait(['那么接下来又该捏成什么样子呢？']);
    } else {
      await attacker.print_and_wait([
        '温热乳肉在掌心下挤压变形，连指缝间的乳首也勃起得越发明显。',
      ]);
      await attacker.print_and_wait(['就象是在不断品味触感般来回抚摸。']);
      await defender.say_and_wait(['混蛋！！！']);
      await attacker.print_and_wait([
        '被肆意玩弄胸部的 ',
        a_call_d,
        ' 咒骂着在她身上为所欲为的人……但也仅仅只能做到这点而已。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '捏住已经自觉挺立起来如莓果般硬挺的乳尖细细摩挲，像是调整收音机旋钮般捏弄着。',
      ]);
      await attacker.print_and_wait([
        '充血嫣红的乳头像是强调着自己的存在感般的发着热。',
      ]);
      await attacker.print_and_wait([
        '身前的 ',
        a_call_d,
        ' 被刺激得咬紧牙关，抿不紧的唇边开始能看出忍耐的痕迹。',
      ]);
      await attacker.print_and_wait(['……那么就再加点力道好了。']);
    } else {
      await attacker.print_and_wait([
        '毫不客气的对着翘立起来的乳头伸出了手，指尖轻巧又迅速地逗弄乳尖，一下又一下地按着挺立的乳头。',
      ]);
      await attacker.print_and_wait([
        '拉扯玩弄着逐渐如米粒般坚硬的乳头，泛着粉色的身体在微微颤抖着……不过仍旧倔强的抿着唇。',
      ]);
      await attacker.print_and_wait(['很简单，只要用指甲轻轻一捏……']);
      await defender.say_and_wait(['唔——❤️！']);
      await attacker.print_and_wait([
        '就换来了 ',
        a_call_d,
        ' 短促而高亢的淫叫，吐露在嘴角的舌尖带着晶莹的涎水。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '双指分开，被剥开外皮的小豆豆正害羞的微微抖动。',
      ]);
      await defender.say_and_wait(['喂……你想……']);
      await attacker.print_and_wait([
        '指甲轻轻扣进阴蒂的皮肉之间一提，于是 ',
        a_call_d,
        ' 便本能地弓起了腰肢，身体放荡的颤抖了起来。',
      ]);
    } else {
      await attacker.print_and_wait([
        '粗暴地剥露开包覆阴蒂的表皮，用食指挤按固定阴蒂，中指与无名指固定阴唇。',
      ]);
      await attacker.print_and_wait([
        '熟练地用刮擦与震颤刺激着，充血勃起的阴蒂在肆意地揉捏拉扯下愈发敏感。',
      ]);
      await attacker.print_and_wait([
        '通过不断的按摩让持续不断的快感沿着脊髓传入 ',
        a_call_d,
        ' 的大脑，就算是再坚定无比的意识被这么玩弄着也会出现一丝裂痕吧。',
      ]);
      await defender.say_and_wait(['唔噫……❤️阴蒂，要被揉坏了……啊啊啊啊❤️']);
      await attacker.print_and_wait(['没错……的确变得有些红肿了呢。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方的毛发描述词，带颜色
   */
  async finger_fuck(attacker, defender, is_first, a_call_d, d_hair) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '粉嫩可人';
        break;
      case 1:
        vagina_desc = '红润泛紫';
        break;
      case 2:
        vagina_desc = '深邃成熟';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '简单的用食指和中指比划了一下，还没等 ',
        a_call_d,
        ' 反应过来，并着的两根手指就直接插入了',
        vagina_desc,
        '的小穴。',
      ]);
      await defender.say_and_wait(['咿……不……不要啊……混蛋！']);
      await attacker.print_and_wait([
        '螓首后仰，',
        d_hair,
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        '像是中箭天鹅般吟出了痛苦中夹着愉悦的甜美悲鸣。',
      ]);
    } else {
      await attacker.print_and_wait([
        '指尖粗鲁地在柔软湿润的肉穴中抽插着，深入其中的手指变换着敲打，揉捏，划搓，闲下来的另一只手也隔着小腹配合着按压。',
      ]);
      await defender.say_and_wait(['呜……']);
      await attacker.print_and_wait([
        a_call_d,
        ' 用手拼命的压住粉唇，漂亮的眸子湿润迷离。',
      ]);
      await attacker.say_and_wait(['看来效果很不错呢，', a_call_d, '。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(['只是在外面打转有有什么意思？']);
      await attacker.print_and_wait([
        '于是手指继续向前挺进，探索着 ',
        a_call_d,
        ' 平时自慰很少碰到的地方，直到指尖划过了肉壁上的一个细小凸起。',
      ]);
      await defender.say_and_wait(['哈啊……求求你……']);
      await defender.say_and_wait(['——噫呀～！']);
      await attacker.print_and_wait([
        '只消一个轻轻的挤压，',
        a_call_d,
        ' 的求饶就转为畅快的呻吟。',
      ]);
      await attacker.print_and_wait([
        '露出了只有在 A 片中才会出现的下流阿嘿颜。',
      ]);
    } else {
      await defender.say_and_wait(['哈啊～这是……什么……']);
      await attacker.print_and_wait([
        '不安地扭动着腰部，却只是让已经变得软嫩的穴肉直接紧紧缠住了探入体内的手指。',
      ]);
      await attacker.print_and_wait([
        '在被识破了弱点之后，开始还试着挤出异物的小穴已经积极用突起不停地摩擦着指腹上的粗糙纹路。',
      ]);
      await attacker.print_and_wait([
        '汗水顺着她光滑的侧脸流到她微微张开的嘴角，和她稍稍吐出的舌尖上的口水一起滴落。',
      ]);
      await defender.say_and_wait(['呜……']);
      await attacker.print_and_wait([
        '双眸半睁，瞳孔也翻白的仿佛马上就要昏睡过去一样。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {string} d_skin_color 被动方肤色颜色
   */
  async pet_leg(attacker, defender, is_first, a_call_d, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '象牙白';
        break;
      case 0:
        skin_desc = '白皙';
        break;
      case 1:
        skin_desc = '红润';
        break;
      case 2:
        skin_desc = '浅褐色';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '既不是以触诊，也不是以什么恋人的身份，而是违背了对方意愿的把玩着眼前',
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        '的大腿。',
      ]);
      await attacker.print_and_wait([
        '有着',
        { color: d_skin_color, content: skin_desc },
        '的皮肤和恰到好处的肉感。',
      ]);
      await attacker.print_and_wait([
        '划着优美的腿部曲线，感受着 ',
        a_call_d,
        ' 被锻炼出来的成果，松手便迅速回弹的绝妙弹性对于指尖而言简直是完美的享受。',
      ]);
      await attacker.print_and_wait(['看来训练的成果很不错……']);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        ' 兼具着肉感与曲线的大腿，在手掌的来回摩挲着下被染出了下流的粉色和黏腻的油光汗渍。',
      ]);
      await attacker.print_and_wait([
        '试图并拢大腿躲避玩弄，却只是把更为敏感的大腿根部也一同送上。',
      ]);
      await attacker.print_and_wait([
        '被腿肉包裹的整个手掌都享受起了紧致腿肉摩擦的触感。',
      ]);
      await attacker.print_and_wait([
        '看着 ',
        a_call_d,
        ' 的潮红中带着厌恶的脸，感觉就像是未经本人允许碰了什么性器官一样。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方的毛发描述词，带颜色
   */
  async pet_tail(attacker, defender, is_first, a_call_d, d_hair) {
    if (is_first) {
      await attacker.print_and_wait([
        '空闲下来的手顺着后背向下摸去，才刚刚碰到尾巴根部的位置，全身绷紧的 ',
        a_call_d,
        ' 全身就像过电了哆嗦了一下。',
      ]);
      await defender.say_and_wait(['你！混蛋！别想！']);
      await attacker.print_and_wait([
        '猛地抬起头正凶狠地盯着自己的马娘，双眸中却楚楚可怜地噙着闪烁的泪光。',
      ]);
    } else {
      await attacker.print_and_wait([
        '挑拨般地继续轻挠着尾巴根，望着 ',
        a_call_d,
        ' 那可怜兮兮却还在强忍着刺激的挣扎表情。',
      ]);
      await defender.say_and_wait(['哈，哈～哈～人……渣……']);
      await attacker.print_and_wait([
        '轻轻咬着牙关，身体都微微发抖，却只是勾起了自己的施虐欲。',
      ]);
      await attacker.print_and_wait([
        '更过分的缠住',
        d_hair,
        '的尾巴轻轻勾动。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('咿～❤️');
    await defender.print_and_wait(['从尾尖到尾根，而后是席卷全身的奇妙感觉。']);
    await defender.print_and_wait([
      '像是许久未用的缆线突然被再次接通，从发痛的尾巴根到大脑，再由大脑返回给嗡动的小穴。',
    ]);
    await defender.print_and_wait([
      '在身体向后仰起的同时，下意识的开始摇尾乞怜。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '眯着眼睛，贴近观察着 ',
        a_call_d,
        ' 已经自觉挺立起来的红肿阴蒂。',
      ]);
      await attacker.print_and_wait([
        '在这过程中故意让自己呼出的气息拍打在上面，受到刺激的小豆豆又挺立了几分。',
      ]);
      await defender.say_and_wait(['不要，不要看……']);
      await attacker.print_and_wait([
        '用舌头落在阴蒂上用力舔舐，于是之前厉声呵斥自己的声音遍带上了些求饶的意味。',
      ]);
      await attacker.print_and_wait([
        '抽搐着的吐出淫液的小穴把自己的嘴唇也弄的湿漉漉的。',
      ]);
    } else {
      await defender.print_and_wait([
        '敏感的小豆豆被舌尖舔弄着，试图咬紧的牙关却在随着面前这个混蛋的动作从偶尔泄出嘤咛。',
      ]);
      await defender.print_and_wait(['不过，不会这么轻易放弃抵抗的！']);
      await defender.say_and_wait(['咿呀！！！']);
      await defender.print_and_wait([
        '突然的疼痛与陡然过电般的快感，让身体瞬间绷直，嘴角也不受看控制的抽动了起来。',
      ]);
      await defender.say_and_wait(['别！别用牙齿咬那里啊！']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async suck_virgin(attacker, defender, is_first, a_call_d) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '粉嫩可人';
        break;
      case 1:
        vagina_desc = '红润泛紫';
        break;
      case 2:
        vagina_desc = '深邃成熟';
    }
    if (is_first) {
      await defender.say_and_wait(['别……别……滚开啊……']);
      await attacker.print_and_wait([
        '自顾自地亲吻在了 ',
        a_call_d,
        ' ',
        vagina_desc,
        '的小穴上，毫无理会那没有威慑力甚至还有些哆嗦的威胁。',
      ]);
      await attacker.print_and_wait(['轻轻吸吮，温热柔软的舌头进入了腔道。']);
      await attacker.print_and_wait([
        '来回剐蹭着柔软腔肉上的褶皱，能感觉到时不时收缩的腔道仿佛想将自己的舌头挤出去。',
      ]);
    } else {
      await defender.say_and_wait(['不要……呜呼呼……']);
      await defender.print_and_wait([
        '浅处的褶肉已经被探入的异物彻头彻尾的碾过了一遍。',
      ]);
      await defender.print_and_wait([
        '低声咒骂间，',
        defender.race > 0 ? '用于奔跑的' : '',
        '双腿已经颤抖而无力的夹住了那埋在腿间的头。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        '将伸到嘴边的腥臭龟头含入口中，因犹豫而缓慢的将舌头贴上棒身。',
      ]);
      await attacker.say_and_wait(['再加把劲吧。']);
      await defender.say_and_wait(['得寸进尺……'], true);
      await defender.say_and_wait(['呜……']);
      await defender.print_and_wait([
        '不过屈服于当下的自己还是自觉地缩窄口腔，上下滑动的唇瓣将湿滑的唾液均匀的涂抹在肉棒上。',
      ]);
      await defender.print_and_wait([
        '舌面极不情愿的舔舐着表面鼓起的青筋，让肉棒被自己的唾液变得亮晶晶的。',
      ]);
      await defender.say_and_wait(['唔……怎么又变大了一点……'], true);
    } else {
      await defender.print_and_wait(['闭上双眼，想着只要不看到就不会在意。']);
      await defender.print_and_wait([
        '但可靠的嗅觉还是将现在的情况忠实的反应给了自己。',
      ]);
      await defender.print_and_wait([
        '柔软的香唇慢慢的将阴茎包裹，练习过歌声的舌尖缭绕着龟头婉转，本该捧着奖杯的双手扶住阴茎。',
      ]);
      await defender.print_and_wait(['亲吻……呼吸……嗅闻……']);
      await defender.say_and_wait(['好臭……'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '直接用膨胀到了极点的肉棒撑开了 ',
        a_call_d,
        ' 的嘴唇。',
      ]);
      await attacker.print_and_wait([
        '柔软的嘴唇如环一般束缚在肉棒上前后滑动，连侧脸都被顶出了一个凸起。',
      ]);
      await attacker.print_and_wait([
        '下意识缩紧的嘴唇与脸颊内侧的粘膜为肉茎构筑出了一具极窄的肉穴。',
      ]);
      await attacker.print_and_wait([
        '不过，更叫人喜欢的，还是望向自己的，包含鄙夷的亮晶晶眸子。',
      ]);
    } else {
      await defender.say_and_wait(['哈……❤️']);
      await attacker.print_and_wait([
        '刚刚还一直只盯着自己的双眼现在失去了焦点，偶尔在肉棒抽出口腔的喘息间。',
      ]);
      await attacker.print_and_wait([
        '名叫 ',
        defender.get_colored_name(),
        ' 的',
        defender.race > 0 ? defender.sex_slave_title : defender.phy_sex_title,
        '就会无意识地用吐出的舌头轻托着肉棒。',
      ]);
      await attacker.print_and_wait([
        '让口中的唾液缓缓与先走汁一同滴落的同时，大口吸入混着浓烈肉棒臭的空气。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(['哈啊啊～～～嗯～～咕嗯～～']);
      await attacker.print_and_wait([
        '像是一个精致的',
        defender.race > 0 ? '马耳' : '',
        '性爱娃娃一样被自己摆弄在胯下。',
      ]);
      await attacker.print_and_wait([
        '整个嘴巴的空间被完全征用，形成一个近乎真空的口穴。',
      ]);
      await defender.say_and_wait(['咕呃～']);
      await attacker.print_and_wait([
        '方才满是牢骚的小嘴现在只能做吮吸的动作。',
      ]);
      await defender.say_and_wait(['呜～好热～喘不上气～'], true);
      await defender.print_and_wait(['耳畔只能听见快速且粗重地水声。']);
      await defender.print_and_wait([
        '先前自己试图维持的，饱含厌恶的鄙夷视线也变成了只知道上翻的好看瞳孔。',
      ]);
      await defender.print_and_wait([
        '肉棒每次粗暴地插入都会将喉穴碾平，扩张开来的食管压迫着气管无法呼吸，却让喉肉死死绞住这个混蛋的肉棒。',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '甚至还特意在口腔中停顿些许，将残留的精污涂抹在自己舌苔和樱唇上后才恋恋不舍地抽出。',
        ]);
        await defender.print_and_wait([
          '在粗糙肮脏的龟头与纤薄的唇瓣间拉扯出一条浊白的黏丝。',
        ]);
      }
      await defender.print_and_wait(['多余的喉液和口涎也被挤了下去。']);
      await defender.print_and_wait([
        '只是为了让自己能够吞下眼前强奸犯卵袋中的浓精做好准备。',
      ]);
    } else {
      await defender.say_and_wait(['——咕唔！？']);
      await defender.print_and_wait(['深埋在喉咙之中的肉棒让自己无法低头。']);
      await defender.print_and_wait([
        '只能翘起身体，口腔中混着先走液的口水也被不停地吞咽下去。',
      ]);
      await defender.print_and_wait([
        '被异物侵入的呕吐感，还有腥臭之物塞满喉咙的窒息感。',
      ]);
      await defender.print_and_wait([
        '更多的还有自己为了能够满足眼前这个人渣全根没入深喉的举措，而不得不高高翘起臀部的屈辱。',
      ]);
      await defender.say_and_wait(['快点退出去啊！！！'], true);
      await defender.print_and_wait([
        '只是呼吸进来的空气越来越跟不上眼前这个混蛋粗暴的动作。',
      ]);
      await defender.print_and_wait([
        '微微发紫的脸颊，试图反抗的双手也逐渐失去力气变得绵软。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      if (defender.race > 0) {
        await defender.print_and_wait([
          '装作没听到一样，只是继续维持着衔住龟头吮吸的动作。',
        ]);
        await defender.print_and_wait([
          '毕竟，都已经做到这份上了，还要求含得更深，未免有些太过分了吧？',
        ]);
        await defender.say_and_wait(['呜？']);
        await defender.print_and_wait([
          '尾巴传来了被抚摸的触感，是又想摸了吗？另一只手则挠起了自己的耳朵。',
        ]);
        await defender.say_and_wait(['呜？！']);
        await defender.print_and_wait([
          '尾巴突然被意料之外的扯动让自己瞬间一抖的全身脱力，而抚在头顶的手则狠狠的向下一按。',
        ]);
        await defender.print_and_wait([
          '本来只是卡在唇舌间的龟头直接塞进了喉咙深部。',
        ]);
        await defender.say_and_wait(['咕呜！！']);
        await defender.print_and_wait([
          '被腥臭味充斥的味蕾鼻腔与大脑带着敏感无比的娇躯痉挛抽搐起来。',
        ]);
      } else {
        await defender.say_and_wait(['哈啊啊～～～嗯～～咕嗯～～']);
        await attacker.print_and_wait(
          '像是一个精致的性爱娃娃一样被自己摆弄在胯下。',
        );
        await attacker.print_and_wait([
          '整个嘴巴的空间被完全征用，形成一个近乎真空的口穴。',
        ]);
        await defender.say_and_wait(['咕呃～']);
        await attacker.print_and_wait([
          '方才满是牢骚的小嘴现在只能做吮吸的动作。',
        ]);
      }
      await defender.say_and_wait(['呜～好热～喘不上气～'], true);
      await defender.print_and_wait(['耳畔只能听见快速且粗重地水声。']);
      await defender.print_and_wait([
        '先前自己试图维持的，饱含厌恶的鄙夷视线也变成了只知道上翻的好看瞳孔。',
      ]);
      await defender.print_and_wait([
        '肉棒每次粗暴地插入都会将喉穴碾平，扩张开来的食管压迫着气管无法呼吸，却让喉肉死死绞住这个混蛋的肉棒。',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '甚至还特意在口腔中停顿些许，将残留的精污涂抹在自己舌苔和樱唇上后才恋恋不舍地抽出。',
        ]);
        await defender.print_and_wait([
          '在粗糙肮脏的龟头与纤薄的唇瓣间拉扯出一条浊白的黏丝。',
        ]);
      }
      await defender.print_and_wait(['多余的喉液和口涎也被挤了下去。']);
      await defender.print_and_wait([
        '只是为了让自己能够吞下眼前强奸犯卵袋中的浓精做好准备。',
      ]);
    } else {
      await defender.say_and_wait(['——咕唔！？']);
      await defender.print_and_wait(['深埋在喉咙之中的肉棒让自己无法低头。']);
      await defender.print_and_wait([
        '只能翘起身体，口腔中混着先走液的口水也被不停地吞咽下去。',
      ]);
      await defender.print_and_wait([
        '被异物侵入的呕吐感，还有腥臭之物塞满喉咙的窒息感。',
      ]);
      await defender.print_and_wait([
        '更多的还有自己为了能够满足眼前这个人渣全根没入深喉的举措，而不得不高高翘起臀部的屈辱。',
      ]);
      await defender.say_and_wait(['快点退出去啊！！！'], true);
      await defender.print_and_wait([
        '只是呼吸进来的空气越来越跟不上眼前这个混蛋粗暴的动作。',
      ]);
      await defender.print_and_wait([
        '微微发紫的脸颊，试图反抗的双手也逐渐失去力气变得绵软。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_or_force_hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        '权力也好，武力也罢，总之是让名叫 ',
        defender.get_colored_actual_name(),
        ' 的',
        defender.race > 0 ? '马耳朵' : '',
        defender.phy_sex_title,
        '意识到了现在只能配合自己的事实。',
      ]);
      await attacker.print_and_wait([
        '把正滴着先走汁的龟头插进不情愿伸出来的小手。',
      ]);
      await attacker.print_and_wait([
        '环在肉柱之侧的手指握的很轻，却意外产生了如羽毛掠过般轻飘飘的感觉。',
      ]);
      await attacker.print_and_wait(['还有让人上瘾的亵渎着美好之物的兴奋。']);
    } else {
      await attacker.say_and_wait(['用点力，不要光握着。']);
      await defender.print_and_wait([
        '面前的人渣，迫不及待地提出了更过分的要求，自己不得不让双手与肉棒紧贴。',
      ]);
      await defender.print_and_wait([
        '无论是已经被先走液弄的黏糊糊的手指，还是其下正跳动着的兴奋青筋。',
      ]);
      await defender.say_and_wait(['恶心……']);
      await defender.print_and_wait([
        '报复般的加快了套弄的速度，甚至还故意用指尖戳着铃口。',
      ]);
      await defender.say_and_wait(['呼……总算露出了点难受的表情……'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '托起正跪伏在面前，正发着愣的 ',
        a_call_d,
        ' 的双乳，将肉棒径直插入了乳肉间。',
      ]);
      await defender.say_and_wait(['肉棒，唔，在胸部里面……❤️']);
      await attacker.print_and_wait([
        '无意识间张嘴吐出了让人醉心的淫语后，或许是被胸前的火热触感烫到了，发着呆的 ',
        a_call_d,
        ' 总算是回过神来了，试图用自己的双手推开肉棒。',
      ]);
      await attacker.print_and_wait([
        '于是索性握住她的手，强迫着她托住自己的乳肉。',
      ]);
      await attacker.print_and_wait([
        '顺带着告诉她如何借由搓捏胸部的动作来更好的服侍自己被彻底挑逗起的肉根。',
      ]);
      await defender.say_and_wait(['唔……❤️一跳一跳的……❤️']);
    } else {
      await defender.print_and_wait([
        attacker.race > 0
          ? '无论是自己沟壑间那滚烫的肉根温度，还是呼吸中无法忽视的腥气，以及正被紊乱热气呼呼吹拂着的马耳朵。'
          : '无论是自己沟壑间那滚烫的肉根温度，还是呼吸中无法忽视的腥气。',
      ]);
      await defender.print_and_wait([
        '有些自暴自弃地使劲掐着自己的柔软，不算熟练地加重胸部对肉棒的摩擦力度，以此分散注意力。',
      ]);
      await defender.print_and_wait([
        '让乳肉贴紧肉根，再机械般的推离，不知不觉间挤压乳肉的动作变得粗鲁了许多。',
      ]);
      await defender.say_and_wait(['……哼。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_or_force_tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '故意挺腰，让从乳肉间探出来的龟头戳在的唇上，向 ',
        a_call_d,
        ' 示意现在是该张嘴的时候了。',
      ]);
      await defender.say_and_wait(['唔……']);
      await attacker.print_and_wait([
        a_call_d,
        ' 却只是紧皱着眉头，抿住嘴唇露出了一幅微微呲着牙的表情，就是不愿意张嘴。',
      ]);
      await attacker.print_and_wait([
        '索性让龟头一次次的顶在侧脸和嘴唇上，直到泛着泪光的瞳孔变的逐渐瞪大甚至有些涣散。',
      ]);
      await attacker.print_and_wait([
        '直到，',
        a_call_d,
        ' 终于张嘴露出了她那粉嫩又诱人的双唇。',
      ]);
      await defender.say_and_wait(['——啊——呜。']);
    } else {
      await defender.say_and_wait(['咕啾～咕啾～咕啾～']);
      await defender.print_and_wait([
        '龟头连带着冠状沟的位置被完全吞吐，偶尔还得用舌尖舔弄着竿身。',
      ]);
      await defender.print_and_wait([
        '甚至是被要求用双臂托着乳肉的同时让空出来的手也一起捏着肉棒。',
      ]);
      await defender.print_and_wait([
        '真是屈辱，这种完全低着头，如同臣服和认输一样的姿势。',
      ]);
      await defender.say_and_wait(['呜——']);
      await defender.print_and_wait([
        '不满的发出了阵阵呜咽声，却只是让面前这个强奸犯在自己下次吞咽的时候揉了揉自己的脑袋。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async bite_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait(['不行～不行～～给我滚开！']);
      await attacker.print_and_wait([
        '用牙齿衔住了，',
        a_call_d,
        ' 已经被口水浸湿的嫣红莓果，用力一咬，先前积蓄的强烈的瘙痒与欲望瞬间被引爆。',
      ]);
      await defender.say_and_wait(['唔呀！！！❤️']);
      await attacker.print_and_wait([a_call_d, ' 忍不住娇吟一声。']);
      await attacker.print_and_wait([
        '随即像是回过神一般赶紧抽离螓首，满脸潮红的取回自己的舌尖，连带着一条唾液银丝滴落乳肉上。',
      ]);
    } else {
      await attacker.print_and_wait([
        '用牙尖咬着留下红肿痕迹，时不时狠狠的来上一口让试图推开自己的 ',
        a_call_d,
        ' 瘫软下去。',
      ]);
      await defender.say_and_wait(['唔……混蛋❤️！人……渣！强奸犯❤️！']);
      await attacker.print_and_wait(['就连发出的这些怒骂也变得粘稠诱人起来。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} d_body_hair 被动方毛色
   */
  async missionary(attacker, defender, d_body_hair) {
    await defender.say_and_wait('人渣！离我远点，滚啊！');
    await defender.print_and_wait([
      '试着抬起脚踢出，却被轻易的抓住了脚腕朝上抬起。',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait([
        '迫使自己露出了被',
        d_body_hair,
        '尾巴遮住的雌穴。',
      ]);
    } else {
      await defender.print_and_wait('迫使自己露出了下流的雌穴。');
    }
    await defender.print_and_wait([
      '并在一起的手腕也被面前这家伙扣住，让自己意识到现在已经彻底无法反抗。',
    ]);
    await defender.say_and_wait('齁哦哦哦哦哦！！❤️');
    await defender.print_and_wait(
      '本应传来的谩骂，抵抗，呵斥，在灼热肉棒插入的那一刻，化为了听起来无比谄媚的淫叫。',
    );
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方发色
   */
  async doggy_style(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      '拉着 ',
      a_call_d,
      ' 的双臂，稍稍一用力就让',
      defender.sex,
      '被迫像是一只母狗一样翘着臀跪在地上。',
    ]);
    await attacker.print_and_wait([
      '试图反抗的',
      defender.race > 0 ? '母马' : '雌性',
      '难耐的扭动着臀部想要逃避，可却又像是在主动诱惑着玩弄。',
    ]);
    await attacker.print_and_wait([
      '腰部往前一撞，肉棒不容阻挡地塞入了 ',
      a_call_d,
      ' 的小穴内。',
    ]);
    await defender.say_and_wait(['咿啊啊啊❤️！']);
    await attacker.print_and_wait([
      '像是触电一般弓起了腰，',
      d_hair,
      '的发丝随之晃动。',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait(['连尾巴也笔直的绷了起来……']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('想要逃跑吗？');
    await attacker.print_and_wait([
      '捉住了正摇摇晃晃站起来，试图逃跑的 ',
      a_call_d,
      ' 的足胫，只是一拉就让她被迫投入了怀抱。',
    ]);
    await attacker.print_and_wait([
      '肉棒重重拍在她平坦的肚皮上，甚至能感觉到连小腹都因为惧怕而凹陷了下去。',
    ]);
    await attacker.print_and_wait(['那么，对于不乖的坏孩子当然要给予惩罚了。']);
    await defender.say_and_wait(['呜啊……拔出去啊！']);
    await attacker.print_and_wait([
      defender.race > 0
        ? '腰肢猛然弓起，在赛场上久经锻炼的双腿紧紧的缠上了自己的腰。'
        : '腰肢猛然弓起，双腿紧紧的缠上了自己的腰。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hug_sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('很舒服吧？');
    await attacker.print_and_wait([
      '从后面贴着 ',
      a_call_d,
      ' ',
      defender.race > 0 ? '立起来的马耳朵' : '的耳朵 ',
      '询问着。',
    ]);
    await defender.say_and_wait('人渣！变态！');
    await defender.say_and_wait('嗯啊啊❤️……');
    await attacker.print_and_wait([
      '断断续续的反驳被娇媚的淫叫所阻断，',
      a_call_d,
      ' 垂下的头似乎更低了一点。',
    ]);
    await attacker.print_and_wait([
      '就像是不想让自己知道，明明小穴在每次抽插的时候都会紧紧夹住的',
      defender.race > 0 ? '母马' : '雌性',
      '，究竟露出了何等的美妙表情。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async standing(attacker, defender, a_call_d) {
    if (defender.race > 0) {
      await attacker.print_and_wait([
        '果然，赛',
        defender.uma_sex_title,
        '都有着不错的柔韧性与平衡性呢。',
      ]);
    }
    await attacker.print_and_wait([
      '仅让足尖点地，大腿内侧肌肉拉伸，右腿再慢慢抬到水平位置。',
    ]);

    await attacker.print_and_wait([
      '尽力做着侧抬腿姿势的 ',
      a_call_d,
      ' 就这样将纤细腰肢与诱人侧臀暴露在了自己眼前。',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1 ? '被阴毛遮掩' : '光洁可爱',
      '的小穴正随着紧绷的动作一开一合。',
    ]);
    await defender.say_and_wait('满意了吧……人渣！');
    await attacker.print_and_wait([
      '看来还没到极限，于是自觉伸手纠正动作，将保持在水平高度的右腿慢慢托起，直到垂直朝上与左腿保持在一条直线。',
    ]);
    await defender.say_and_wait('别、别碰我……');
    await attacker.print_and_wait([
      '肉茎径直插入，狭窄软柔的腔穴被强行撑开，滚烫的龟冠无视层层叠叠蠕动收绞的腔肉，撞在了花心。',
    ]);
    await defender.say_and_wait('……哦咕❤️！！');
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} d_body_hair 被动方毛色
   */
  async hug_standing(attacker, defender, d_body_hair) {
    await defender.print_and_wait([
      '双手撑在了墙壁上高高的撅起了屁股，试图丝毫不带感情的询问着。',
    ]);
    await defender.say_and_wait(['这样就可以了吧？']);
    await defender.print_and_wait([
      '大概能猜到是是要后入……但总比被按在地上好吧……',
    ]);
    await defender.print_and_wait([
      '就这么试着慢慢说服自己，直到腰部突然传来被抚摸的触感，转而变成了揉捏，强迫着自己把臀部更高的抬起来。',
    ]);
    await defender.say_and_wait(['咕呜❤️！']);
    if (defender.race > 0) {
      await defender.print_and_wait([
        '这种姿势，这种能让肉茎完全贯穿着自己的小穴的姿势，对于赛马娘来说实在是太犯规了啊！连',
        d_body_hair,
        '的马尾巴也被当成鞭子一样抓着抽在自己的臀瓣上。',
      ]);
    } else {
      await defender.print_and_wait(
        '这种姿势，这种能让肉茎完全贯穿着自己的小穴的姿势，实在是太犯规了啊！',
      );
    }
    await defender.print_and_wait([
      '上半身立即在这撞击之下瘫软下来，仅仅只靠着被拉住的双手在苦苦支持着。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async suspended_congress(attacker, defender) {
    await defender.say_and_wait('不要……呜啊！？');
    await defender.print_and_wait([
      '尽管试图躲避，但还是被身后的人顺着腿弯抱起。',
    ]);
    await defender.print_and_wait([
      '柔韧的身体近乎被整个折叠，膝盖几乎被压在了肩膀上，搭在肩膀上的双腿随着肉棒抽插的动作一上一下的大幅摆动着。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_hair 被动方毛色或发色
   */
  async hug_suspended_congress(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      '用这个姿势的话，',
      a_call_d,
      ' 整个人像是挂在自己身上一般。',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait([
        '好处就是，肉棒能借助重力直直的顶入',
        d_hair,
        '马娘的深处，让双方的性器紧密相连。',
      ]);
    } else {
      await attacker.print_and_wait([
        '好处就是，肉棒能借助重力直直的顶入',
        d_hair,
        '女性的深处，让双方的性器紧密相连。',
      ]);
    }
    await defender.say_and_wait('会掉下去！……绝对会掉下去的！');
    await attacker.print_and_wait([
      '在失重和下身强烈快感的共同冲击下，身前几乎失去判断能力 ',
      a_call_d,
      ' 下意识的用手臂向后环住了自己的脖颈。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_cowgirl(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '骑跨在腰上的',
      era.get(`cflag:${defender.id}:成长阶段`) < 5
        ? defender.teen_sex_title
        : defender.phy_sex_title,
      '只是撑起身体，小幅度运动着臀部，甚至还用手还捂着嘴唇，试图强撑着一切正常的样子。',
    ]);
    await attacker.print_and_wait(['明明开始让小穴吞进去的时候都叫出了声。']);
    await attacker.print_and_wait(['那么，看来得自己这边主动点了。']);
    await attacker.print_and_wait([
      '微微托起双臀，在 ',
      a_call_d,
      ' 的惊呼声中向上猛挺腰身。',
    ]);
    await defender.say_and_wait(['唔啊❤️！！！']);
    await attacker.print_and_wait([
      '在 ',
      a_call_d,
      ' 的悲鸣声中反复重复着这一过程，挺腰、起落、磨转，香汗像下雨似的滴在胸膛上，极富有节奏的肉体碰撞声在空气中回荡。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_g_spot(attacker, defender) {
    await defender.say_and_wait(['喂❤️！别……❤️别顶那里……❤️！']);
    await attacker.print_and_wait(['所以这里就是敏感点了吧？']);
    await attacker.print_and_wait([
      '用肉茎鼓胀起的青筋剐蹭，或者直接用龟头叩击，在自己的持续刺激下，布满神经的腔肉欢快的颤动收缩起来。',
    ]);
    await defender.say_and_wait('咕哦哦哦齁哦哦哦哦————❤️❤️❤️');
    await attacker.print_and_wait([
      '就像是在验证猜想般的，名叫 ',
      defender.get_colored_name(),
      ' 的女性自觉地抬起脑袋发出高亢的浪叫，屁股也配合着抽插翘了起来，让肉棒得以更多的碰到敏感点。',
    ]);
    await attacker.print_and_wait([
      '美眸半开半闭，所剩不多的理智和自尊随爱液一并排出体外。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   * @param {string} d_skin_color 被动方肤色颜色
   */
  async continue_fucking(attacker, defender, a_call_d, d_call_a, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '象牙白';
        break;
      case 0:
        skin_desc = '白皙';
        break;
      case 1:
        skin_desc = '红润';
        break;
      case 2:
        skin_desc = '浅褐色';
    }
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('快……哈啊❤️……停下来……');
      await defender.print_and_wait([
        '鼓胀的肉茎正毫无绅士风度的在自己体内抽插，甚至能清楚的感受到紧贴着肉褶跳动的充血青筋。',
      ]);
      await defender.say_and_wait('呜哈……嗯❤️');
      await defender.say_and_wait('不行……这样下去……', true);
      await defender.print_and_wait([
        '像是精致的肉玩具被粗暴的玩弄着，滚烫的龟头和硬邦邦的肉棒刮蹭过阴道中每一处褶皱。',
      ]);

      await defender.print_and_wait(
        '带来的不是料想中的剧烈痛楚，反而是一波又一波近乎能麻痹脑髓的酥麻快感。',
      );

      await defender.say_and_wait('不能❤️再这样……再这样下去的话……', true);
      await defender.say_and_wait('再这样下去的话，就要……去了❤️', true);
      await defender.print_and_wait([
        '想要反抗，但是脸上失去控制的表情也好，吐出的娇媚喘息也好，绷直的纤细足趾也好，都说明了身体已经毫无余裕的事实。',
      ]);
    } else {
      const message = [
        async () => {
          await defender.say_and_wait('哦咕呜呜！！');
          await attacker.print_and_wait([
            '粗硕的肉茎毫不留情地抽插着 ',
            a_call_d,
            ' 的雌穴，让她发出淫叫的同时，漂亮的瞳孔也一阵翻白。',
          ]);
          await attacker.print_and_wait([
            '火热粗壮的肉棒在小穴里抽插搅弄，让龟头顶在膣道肉壁上，再用翘起的肉冠一路磨蹭着媚肉直直顶上花心……',
          ]);
          await attacker.print_and_wait([
            '全力冲刺的龟首在爱液的润湿下沉重地吻在了娇嫩的子宫颈口，甚至连平坦的小腹上都浮现出龟冠的模糊形状。',
          ]);
          await defender.say_and_wait(['哦！等……慢……一点！求你……']);
          await attacker.print_and_wait([
            '被快感充盈的大脑中只能产生破碎的话语，一同溢出的还有从嘴角流下透亮的液滴。',
          ]);
        },
        async () => {
          await defender.print_and_wait([
            '像是布娃娃一样任人摆布，或是听话的性爱机器一样被把玩便发出淫声。',
          ]);
          await defender.print_and_wait([
            {
              color: d_skin_color,
              content: skin_desc,
            },
            '的躯体颤抖，扭捏。',
          ]);
          await defender.say_and_wait(['呜，呜啊……']);
          await defender.print_and_wait([
            '明明身体最需要的就是挣脱 ',
            d_call_a,
            ' 的力量，却在快感的驱使下将仅剩的力量用于蜷缩脚趾。',
          ]);
          await defender.print_and_wait([
            '被强暴被侵犯的感觉和被爱抚被玩弄的快感，正将自己的双腿双脚乃至全身逐渐拉低到了一摊追求快乐的雌肉的水准。',
          ]);
          await defender.say_and_wait(['哈啊！']);
          await defender.print_and_wait(['听见自己发出了毫无廉耻的呻吟声。']);
        },
      ];
      if (defender.race > 0) {
        message.push(async () => {
          await defender.say_and_wait('嗯啊啊……不要……停下来……求你……呜……');
          await defender.print_and_wait([
            '尽管嘴里还娇呼着不要，可紧绷的膣肉已经开始柔软的拥抱起入侵者，让肉棒能插入到更深的位置。',
          ]);
          await defender.print_and_wait([
            '炽热的子宫颈口被肉茎一次次叩响，龟冠深吻在宫环肉上，连试图闭合的子宫口都一同被顶的向上凹陷了进去。',
          ]);
          await defender.print_and_wait(
            '因为快感而绷直的马耳朵只能听见肉茎将膣内体液排压挤出时「噗嗤噗嗤」的单调声响。',
          );
          await defender.print_and_wait([
            a_call_d,
            ' 意识到了自己为赛跑而经受锻炼的柔韧身躯正是此刻交合时最好的炮架。',
          ]);
        });
      }
      await get_random_entry(message)();
    }
  },
};
