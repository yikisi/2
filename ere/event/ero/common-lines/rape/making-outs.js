/**
 * @file 调教地文 - 强奸爱抚系
 *
 * @author ALEX
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common-lines/interface/ero-making-outs');

const { stain_enum } = require('#/data/ero/stain-const');

const virgin_color_desc = ['粉嫩可人', '红润泛紫', '深邃成熟'];
const skin_color_desc = ['象牙白', '白皙', '红润', '浅褐色'];

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function deep_blow_job_common(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait(['呜～好热～喘不上气～'], true);
    await defender.print_and_wait(['耳畔只能听见快速且粗重地水声。']);
    await defender.print_and_wait([
      '先前自己试图维持的，饱含厌恶的鄙夷视线也变成了只知道上翻的好看瞳孔。',
    ]);
    await defender.print_and_wait([
      '肉棒每次粗暴地插入都会将喉穴碾平，扩张开来的食管压迫着气管无法呼吸，却让喉肉死死绞住这个混蛋的肉棒。',
    ]);
    if ((era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) > 0) {
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hand_job(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '权力也好，武力也罢，总之是让名叫 ',
      defender.get_colored_actual_name(),
      ' 的',
      era.get(`cflag:${defender.id}:种族`) ? '马耳朵' : '',
      defender.get_phy_sex_title(),
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_deep_blow_job(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait(['哈啊啊～～～嗯～～咕嗯～～']);
    await attacker.print_and_wait([
      '像是一个精致的',
      era.get(`cflag:${attacker.id}:种族`) ? '马耳' : '',
      '性爱娃娃一样被自己摆弄在胯下。',
    ]);
    await attacker.print_and_wait([
      '整个嘴巴的空间被完全征用，形成一个近乎真空的口穴。',
    ]);
    await attacker.say_and_wait(['咕呃～']);
    await attacker.print_and_wait(['方才满是牢骚的小嘴现在只能做吮吸的动作。']);
  } else {
    await defender.print_and_wait([
      '一根、两根……鼻子完全没入浓郁的森林中，雄性的气味夹杂着浓郁的腥臭。',
    ]);
    await defender.print_and_wait([
      '却被自己的鼻腔一点一点熟悉，与已经伸入到喉咙的肉棒交融在一起。',
    ]);
    await defender.print_and_wait([
      '奋力想把肉棒从喉中反吐出来，但',
      sys_get_colored_callname(defender.id, attacker.id),
      '的手掌已经牢牢控制住了自己的脑袋，按着自己的双耳。',
    ]);
    await defender.say_and_wait(['咕～']);
    await defender.print_and_wait([
      '脖颈上，不断起伏的食管响动着液体流入胃中的淫靡声。',
    ]);
  }
  era.println();
  await deep_blow_job_common(attacker, defender, hook);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_tit_job(attacker, defender, hook) {
  if (era.get(`talent:${defender.id}:乳房尺寸`) < 0) {
    return;
  }
  if (hook.arg) {
    await attacker.print_and_wait([
      '托起正跪伏在面前，正发着愣的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的双乳，将肉棒径直插入了乳肉间。',
    ]);
    await defender.say_and_wait(['肉棒，唔，在胸部里面……❤️']);
    await attacker.print_and_wait([
      '无意识间张嘴吐出了让人醉心的淫语后，或许是被胸前的火热触感烫到了，发着呆的',
      sys_get_colored_callname(attacker.id, defender.id),
      '总算是回过神来了，试图用自己的双手推开肉棒。',
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
      '无论是自己沟壑间那滚烫的肉根温度，还是呼吸中无法忽视的腥气，',
      era.get(`cflag:${attacker.id}:种族`)
        ? '以及正被紊乱热气呼呼吹拂着的马耳朵'
        : '',
      '。',
    ]);
    await defender.print_and_wait([
      '有些自暴自弃地使劲掐着自己的柔软，不算熟练地加重胸部对肉棒的摩擦力度，以此分散注意力。',
    ]);
    await defender.print_and_wait([
      '让乳肉贴紧肉根，再机械般的推离，不知不觉间挤压乳肉的动作变得粗鲁了许多。',
    ]);
    await defender.say_and_wait(['……哼。']);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function tit_and_blow_job(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '故意挺腰，让从乳肉间探出来的龟头戳在的唇上，向 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 示意现在是该张嘴的时候了。',
    ]);
    await defender.say_and_wait(['唔……']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 却只是紧皱着眉头，抿住嘴唇露出了一幅微微呲着牙的表情，就是不愿意张嘴。',
    ]);
    await attacker.print_and_wait([
      '索性让龟头一次次的顶在侧脸和嘴唇上，直到泛着泪光的瞳孔变的逐渐瞪大甚至有些涣散。',
    ]);
    await attacker.print_and_wait([
      '直到，',
      sys_get_colored_callname(attacker.id, defender.id),
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
}

class EroRapeMakingOuts extends EroMakingOuts {
  /** @author ALEX */
  async pet_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '未经本人允许的抚摸起 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的耳朵，细密的绒毛和有些发烫的耳廓，与面前人儿涨红的脸色辉映。',
      ]);
      await attacker.print_and_wait([
        '稍稍捏紧，头几乎是瞬间弹向了另一侧，嘴里也发出了代表着反对的强烈呜咽声。',
      ]);
      await attacker.print_and_wait([
        '不过任凭这家伙怎么挣扎与皱紧眉头，自耳尖连续不断的强烈刺激，还是在几秒钟之后剥夺了 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
        '报复般地让竖起的马耳朵打在对方侧脸上发出了‘啪’的声响，却只是惹得这家伙发出了一阵笑声。',
      ]);
    }
  }

  /** @author ALEX */
  async pull_ear(attacker, defender) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    await attacker.print_and_wait([
      '已经在先前的抚摸中预热到差不多的',
      era.get(`cstr:${defender.id}:发色`),
      '色马耳朵，正相当不情愿的贴在头发上试图躲避进一步的侵犯。',
    ]);
    await attacker.print_and_wait([
      '不过还是被轻松的抓住了，而后毫不犹豫的肆意拉扯起来，让眼前的赛马娘支支吾吾地吐出了求饶的话语。',
    ]);
    await attacker.print_and_wait([
      '因为这粗鲁的玩弄而本能地痉挛抖动起来的耳尖，泛着充血的可爱粉红。',
    ]);
  }

  /** @author ALEX */
  async pet_breast(attacker, defender, hook) {
    if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait([
        '伸手托住了弹软如布丁般微微颤动的乳肉，轻轻按压，用掌心感受着面前的',
        era.get(`cflag:${defender.id}:种族`) ? '母马' : '雌性',
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 咒骂着在她身上为所欲为的人……但也仅仅只能做到这点而已。',
      ]);
    }
  }

  /** @author ALEX */
  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '捏住已经自觉挺立起来如莓果般硬挺的乳尖细细摩挲，像是调整收音机旋钮般捏弄着。',
      ]);
      await attacker.print_and_wait([
        '充血嫣红的乳头像是强调着自己的存在感般的发着热。',
      ]);
      await attacker.print_and_wait([
        '身前的 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 短促而高亢的淫叫，吐露在嘴角的舌尖带着晶莹的涎水。',
      ]);
    }
  }

  /** @author ALEX */
  async pet_clitoris(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '双指分开，被剥开外皮的小豆豆正害羞的微微抖动。',
      ]);
      await defender.say_and_wait(['喂……你想……']);
      await attacker.print_and_wait([
        '指甲轻轻扣进阴蒂的皮肉之间一提，于是 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的大脑，就算是再坚定无比的意识被这么玩弄着也会出现一丝裂痕吧。',
      ]);
      await defender.say_and_wait(['唔噫……❤️阴蒂，要被揉坏了……啊啊啊啊❤️']);
      await attacker.print_and_wait(['没错……的确变得有些红肿了呢。']);
    }
  }

  /** @author ALEX */
  async finger_fuck(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '简单的用食指和中指比划了一下，还没等 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 反应过来，并着的两根手指就直接插入了',
        virgin_color_desc[era.get(`talent:${defender.id}:茎核类型`)],
        '的小穴。',
      ]);
      await defender.say_and_wait(['咿……不……不要啊……混蛋！']);
      await attacker.print_and_wait([
        '螓首后仰，',
        era.get(`cstr:${defender.id}:毛色`),
        '毛的',
        era.get(`cflag:${defender.id}:种族`) ? '马娘' : '雌性',
        '像是中了箭天鹅般吟出了痛苦中夹着愉悦的甜美悲鸣。',
      ]);
    } else {
      await attacker.print_and_wait([
        '指尖粗鲁地在柔软湿润的肉穴中抽插着，深入其中的手指变换着敲打，揉捏，划搓，闲下来的另一只手也隔着小腹配合着按压。',
      ]);
      await defender.say_and_wait(['呜……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 用手拼命的压住粉唇，漂亮的眸子湿润迷离。',
      ]);
      await attacker.say_and_wait([
        '看来效果很不错呢，',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
    }
  }

  /** @author ALEX */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(['只是在外面打转有有什么意思？']);
      await attacker.print_and_wait([
        '于是手指继续向前挺进，探索着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 平时自慰很少碰到的地方，直到指尖划过了肉壁上的一个细小凸起。',
      ]);
      await defender.say_and_wait(['哈啊……求求你……']);
      await defender.say_and_wait(['——噫呀～！']);
      await attacker.print_and_wait([
        '只消一个轻轻的挤压，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的求饶就转为畅快的呻吟。',
      ]);
      await attacker.print_and_wait([
        '露出了只有在A片中才会出现的下贱阿嘿颜。',
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
  }

  /** @author ALEX */
  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '既不是以触诊，也不是以什么恋人的身份，而是违背了对方意愿的把玩着眼前',
        era.get(`cflag:${defender.id}:种族`)
          ? defender.get_uma_sex_title()
          : '',
        '的大腿。',
      ]);
      await attacker.print_and_wait([
        '有着',
        skin_color_desc[era.get(`cflag:${defender.id}:肤色深度`)],
        '的皮肤和恰到好处的肉感。',
      ]);
      await attacker.print_and_wait([
        '在被识破了弱点之后，开始还试着挤出异物的小穴正积极用突起不停地摩擦着指腹上的粗糙纹路。',
      ]);
      await attacker.print_and_wait([
        '划着优美的腿部曲线，感受着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 被锻炼出来的成果，松手便迅速回弹的绝妙弹性对于指尖而言简直是完美的享受。',
      ]);
      await attacker.print_and_wait(['看来训练的成果很不错……']);
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的潮红中带着厌恶的脸，感觉就像是未经本人允许碰了什么性器官一样。',
      ]);
    }
  }

  /** @author ALEX */
  async pet_tail(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '空闲下来的手顺着后背向下摸去，才刚刚碰到尾巴根部的位置，全身绷紧的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 全身就像过电了哆嗦了一下。',
      ]);
      await defender.say_and_wait(['你！混蛋！别想！']);
      await attacker.print_and_wait([
        '猛地抬起头正凶狠地盯着自己的马娘，双眸中却楚楚可怜地噙着闪烁的泪光。',
      ]);
    } else {
      await attacker.print_and_wait([
        '挑拨般地继续轻挠着尾巴根，望着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那可怜兮兮却还在强忍着刺激的挣扎表情。',
      ]);
      await defender.say_and_wait(['哈，哈～哈～人……渣……']);
      await attacker.print_and_wait([
        '轻轻咬着牙关，身体都微微发抖，却只是勾起了自己的施虐欲。',
      ]);
      await attacker.print_and_wait([
        '更过分的缠住',
        era.get(`cstr:${defender.id}:毛色`),
        '色的尾巴轻轻勾动。',
      ]);
    }
  }

  /** @author ALEX */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('咿～❤️');
    await defender.print_and_wait(['从尾尖到尾根，而后是席卷全身的奇妙感觉。']);
    await defender.print_and_wait([
      '像是许久未用的缆线突然被再次接通，从发痛的尾巴根到大脑，再由大脑返回给嗡动的小穴。',
    ]);
    await defender.print_and_wait([
      '在身体向后仰起的同时，下意识的开始摇尾乞怜。',
    ]);
  }

  /** @author ALEX */
  async cunnilingus(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '眯着眼睛，贴近观察着 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
  }

  /** @author ALEX */
  async suck_virgin(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait(['别……别……滚开啊……']);
      await attacker.print_and_wait([
        '自顾自地亲吻在了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' ',
        virgin_color_desc[era.get(`talent:${defender.id}:茎核类型`)],
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
        era.get(`cflag:${defender.id}:种族`) ? '用于奔跑的' : '',
        '双腿已经颤抖而无力的夹住了那埋在腿间的头。',
      ]);
    }
  }

  /** @author ALEX */
  async ask_blow_job(attacker, defender, hook) {
    if (hook.arg) {
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
  }

  /** @author ALEX */
  async force_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '直接用膨胀到了极点的肉棒撑开了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的嘴唇。',
      ]);
      await attacker.print_and_wait([
        '柔软的嘴唇如环一般束缚在肉棒上前后滑动，连侧脸都被顶出了一个凸起。',
      ]);
      await attacker.print_and_wait([
        '下意识缩紧的嘴唇与脸颊内侧的粘膜为肉茎构筑出了一具极窄的肉穴。',
      ]);
      await attacker.print_and_wait([
        '不过，更叫人喜欢的，还是望向你的，包含鄙夷的亮晶晶眸子。',
      ]);
    } else {
      await defender.say_and_wait(['哈……❤️']);
      await attacker.print_and_wait([
        '刚刚还一直只盯着自己的双眼现在失去了焦点，偶尔在肉棒抽出口腔的喘息间。',
      ]);
      await attacker.print_and_wait([
        '名叫 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的',
        era.get(`cflag:${defender.id}:种族`)
          ? defender.get_sex_slave_title()
          : defender.get_phy_sex_title(),
        '就会无意识地用吐出的舌头轻托着肉棒。',
      ]);
      await attacker.print_and_wait([
        '让口中的唾液缓缓与先走汁一同滴落的同时，大口吸入混着浓烈肉棒臭的空气。',
      ]);
    }
  }

  /** @author ALEX */
  async ask_deep_blow_job(attacker, defender, hook) {
    await common_deep_blow_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async force_deep_blow_job(attacker, defender, hook) {
    if (hook.arg && era.get(`cflag:${defender.id}:种族`)) {
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
      await common_deep_blow_job(attacker, defender, hook);
    }
  }

  /** @author ALEX */
  async ask_hand_job(attacker, defender, hook) {
    await common_hand_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async force_hand_job(attacker, defender, hook) {
    await common_hand_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async ask_tit_job(attacker, defender, hook) {
    await common_tit_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async fuck_tit_and_mouth(attacker, defender, hook) {
    await tit_and_blow_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async ask_tit_and_blow_job(attacker, defender, hook) {
    await tit_and_blow_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.say_and_wait(['不行～不行～～给我滚开！']);
      await attacker.print_and_wait([
        '用牙齿衔住了，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 已经被口水浸湿的嫣红莓果，用力一咬，先前积蓄的强烈的瘙痒与欲望瞬间被引爆。',
      ]);
      await defender.say_and_wait(['唔呀！！！❤️']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 忍不住娇吟一声。',
      ]);
      await attacker.print_and_wait([
        '随即像是回过神一般赶紧抽离螓首，满脸潮红的取回自己的舌尖，连带着一条唾液银丝滴落乳肉上。',
      ]);
    } else {
      await attacker.print_and_wait([
        '用牙尖咬着留下红肿痕迹，时不时狠狠的来上一口让试图推开自己的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 瘫软下去。',
      ]);
      await defender.say_and_wait(['唔……混蛋❤️！人……渣！强奸犯❤️！']);
      await attacker.print_and_wait(['就连发出的这些怒骂也变得粘稠诱人起来。']);
    }
  }
}

module.exports = EroRapeMakingOuts;
