/**
 * @file 待兼福来 - 调教
 * @author ALEX
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async kiss(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.say_and_wait('唔……');
      await you.print_and_wait('近的可以清楚看到对面星星眼中泛着的水雾。');
      await kitaru.say_and_wait([callname, '……']);
      await you.print_and_wait([
        '不自觉地用手环抱住 ',
        y_call_k,
        '，尽力回应伸入',
        kitaru.sex,
        '口腔中的舌头。',
      ]);
      await you.print_and_wait([
        '双唇分离，二人的舌头之间悬起了一座银色的桥梁，又被呼出的热气吹落。',
      ]);
      await kitaru.say_and_wait('嗯哈……啾哈……❤️');
      await you.print_and_wait([
        '好不容易缓过一口气的 ',
        y_call_k,
        ' 又开始索吻。',
      ]);
    } else {
      await kitaru.say_and_wait('啾噜……嗯……噗哈……啾噜……咕嗯');
      await kitaru.print_and_wait([
        '分明自己是跑长距离的赛',
        kitaru.uma_sex_title,
        '，才是应该主导的那一方啊……',
      ]);
      await kitaru.print_and_wait([
        '可来自命定之人的，成年人令人安心的气味，顺着交换过来的唾液与气息灌入自己的身体中的时候……',
      ]);
      await kitaru.print_and_wait(['……要……要融化了……']);
      await you.print_and_wait([
        '在偶尔唇分时的休息时间，满脸潮红的 ',
        y_call_k,
        ' 小口半张着不断吐出热气，眼角还含着一点泪珠。',
      ]);
      await kitaru.say_and_wait([callname, '……喜欢……']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async french_kiss(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait('自然不满足于浅尝辄止。');
      await you.print_and_wait([
        '于是进一步将舌头深深的插了进去，尽情蹂躏着 ',
        y_call_k,
        ' 的口腔。',
      ]);
      await you.print_and_wait('啪嗒啪嗒地，让动起来的舌头发出下流的水声。');
      await kitaru.say_and_wait('唔！❤️');
      await you.print_and_wait([
        '当二人的舌头纠缠在一起时，怀中的栗毛',
        kitaru.uma_sex_title,
        '自喉中发出了黏糊糊的应答声。',
      ]);
      await you.print_and_wait([
        '身体也是紧紧的贴在一起，快感随着舌头与舌头，口腔粘膜，或是牙齿的接触传递到对方身上，让尝试做出回应的 ',
        y_call_k,
        ' 身体止不住的颤抖起来。',
      ]);
      await you.print_and_wait([
        '只得享受来自于 ',
        callname,
        ' 的，充满侵略性的吻。',
      ]);
    } else {
      await kitaru.say_and_wait('嗯……啾噜……咕嗯……');
      if (!you.race) {
        await kitaru.print_and_wait([
          '明明 ',
          callname,
          ' 是人类但是……肺活量强的有些犯规了呀……',
        ]);
      }
      await kitaru.print_and_wait([
        '舌头充满仪式感的一颗颗舔过牙齿，缠绕着自己的舌头，摩挲着舌根……',
      ]);
      await kitaru.print_and_wait([
        '还有流入自己口腔里的，来自 ',
        callname,
        ' 黏糊糊的唾液……',
      ]);
      await kitaru.say_and_wait('咕噜……唔哈……❤️');
      await kitaru.print_and_wait([
        '在接吻的余韵，自己便会急促的娇喘着，让充满 ',
        callname,
        ' 荷尔蒙的气息流遍全身。',
      ]);
      await kitaru.say_and_wait('那个，总是还想继续呀……❤️', true);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async talk(kitaru, you, callname, y_call_k) {
    if (Math.random() < 0.5) {
      await you.say_and_wait('福来算是犬系还是猫系的呢？');
      await kitaru.say_and_wait('欸！这个吗！');
      await you.say_and_wait('……到不如说是狐狸系？');
      you.print(['被点出自己本性的 ', y_call_k, ' 脸变得更红了。']);
    } else {
      await you.say_and_wait('这样像是在从白兴大人手中抢人呢……');
      await you.print_and_wait([
        '看着身上泛着樱红的 ',
        y_call_k,
        ' 不由得这么说到。',
      ]);
      await you.print_and_wait('……没有被踢……也没有收到回复');
      you.print('……但是脸红得很厉害。');
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_success 调情是否成功
   */
  async lure(kitaru, you, callname, y_call_k, is_success) {
    await you.say_and_wait([y_call_k, '。']);
    await you.print_and_wait(
      '轻轻的，对着那对细长的耳朵，唤着面前担当的名字。',
    );
    if (is_success || era.get(`tcvar:${kitaru.id}:发情`) > 0) {
      await kitaru.say_and_wait(['那……那个，', callname, '。']);
      await you.print_and_wait([
        y_call_k,
        '攀住衣服下摆，像只狐狸一样贴在胸口，用充满期待的目光回应。',
      ]);
      await you.print_and_wait(['是该说些什么的时候吧？']);
      if (kitaru.sex_code !== 1) {
        await you.print_and_wait([
          '不过，还是很享受抱着 ',
          y_call_k,
          ' 柔软身体的现在呀，大手不安分的在占卜少女的身上四处游走，无论是安产型的臀肉，平日束缚在衣服里的巨乳，还是那双匀称的到好处的双腿。',
        ]);
      }
      await you.print_and_wait([
        '能看到 ',
        y_call_k,
        ' 的星星瞳，因为自己的动作闪烁着。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_ear(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '平时因为惩罚的缘故，碰过很多次 ',
        y_call_k,
        ' 的耳朵了',
      ]);
      await you.print_and_wait([
        '不过并不是现在这样把 ',
        y_call_k,
        ' 那对，在',
        kitaru.uma_sex_title,
        '中算的上长的马耳朵，以带着性的意味，肆意的揉捏，把玩。',
      ]);
      await kitaru.say_and_wait(['唔呀❤️……']);
      await you.print_and_wait([
        '栗色的马尾巴一下子绷得笔直，连舌尖也吐了出来，上下颤动着。',
      ]);
      await you.print_and_wait(['看来右边的耳朵会更敏感一些呢。']);
    } else {
      await kitaru.print_and_wait([
        '先是轻捏着耳廓的边缘，然后 ',
        callname,
        ' 直接把手指伸了进来。',
      ]);
      await kitaru.say_and_wait(['咿呀❤️!']);
      await kitaru.print_and_wait([
        '抚摸慢慢变成搓揉，手指还使坏般蹭着绒毛，暖呼呼的感觉不断的自耳朵传来。',
      ]);
      await kitaru.print_and_wait([
        '想要躲开，但背叛了自己的耳朵还是自觉的伸直了开来，被 ',
        callname,
        ' 玩弄了个遍。',
      ]);
      await kitaru.print_and_wait(['好刺激，视线……视线逐渐变得雾蒙蒙的了……']);
      await kitaru.print_and_wait(['并拢的双腿间也变得黏糊糊的了。']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async pull_ear(kitaru, you, y_call_k) {
    await you.print_and_wait(['如果扯一下的话……']);
    await you.print_and_wait([
      '本来只是打算比划一下，但在对上了 ',
      y_call_k,
      ' 同样期待的目光后，想象化为了现实',
    ]);
    await you.print_and_wait([
      '粗暴地，像是对待养殖场里的兔子一样，强迫',
      kitaru.sex,
      '仰起头来',
    ]);
    await you.print_and_wait([
      '敏感的耳朵根部在被 ',
      you.get_colored_name(),
      ' 揪起时向着 ',
      y_call_k,
      ' 的大脑输送着被误认成快感的疼痛。',
    ]);
    await kitaru.say_and_wait(['唔呜呜❤️……呃❤️……']);
    await you.print_and_wait(['是不是玩的有些过了呢？']);
    await you.print_and_wait([
      '但一松开手，因拉扯而泛着樱桃红的栗色马耳朵就欢快地摇摆了起来，诉说着主人心情良好的事实。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async pet_breast_from_back(kitaru, you, y_call_k) {
    await you.print_and_wait([
      '近乎粗鲁地揉捏起那对平时躲在衣服下的丰满乳球, 让那对因为汗液而光滑富有弹性的乳房完全按照自己的意思变换着形状，手指偶尔拂过那莓果般的乳头。',
    ]);
    await kitaru.say_and_wait(['呜……！❤️这里……！❤️❤️']);
    await you.print_and_wait([
      '被掌握了弱点的 ',
      y_call_k,
      ' 发出了甜美闷声的同时反弓起了身子，最后嘤咛着软倒在怀里。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_breast(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([y_call_k, ' 胸口的那对沉甸甸，此刻落入手中。']);
      await you.print_and_wait([
        '虽然平时隔着衣服看起来并不算十分巨大，但那不断传递到手心鼓鼓囊囊的触感，让自己进一步确定了，担当是有着隐藏巨乳的下流马娘。',
      ]);
      await kitaru.say_and_wait(['唔唔……❤️']);
      await you.print_and_wait([
        '噗呢噗呢的揉动着，享受着掌间乳肉那温热又水润的肉浪。',
      ]);
      await you.print_and_wait([
        '每当手指陷进柔软的时候，兴奋起来的 ',
        y_call_k,
        ' 就会一颤一颤地反应着，自喉间漏出暧昧的呻吟。',
      ]);
    } else {
      await you.print_and_wait([
        '近乎完全湿润的黄玉色眸子，伴着鼻腔中发出的诱人呻吟声，看来 ',
        y_call_k,
        ' 有着一对敏感的胸部呢。',
      ]);
      await you.print_and_wait(['要停下来吗？稍稍放慢了手中的动作']);
      await kitaru.say_and_wait(['哈啊❤️……欸……']);
      await kitaru.say_and_wait(['那个，可以继续的……']);
      await you.print_and_wait(['充满欲情地对自己说出了恳求的话语。']);
      await you.print_and_wait([
        '于是变本加厉地将这对柔软到几乎没有固定形状的乳球拉扯成了更符合自己心意的形状，让白花花的乳肉遍布掌印红痕……不知道欢爱结束后会不会留下痕迹呢？',
      ]);
      await kitaru.say_and_wait(['唔哈……❤️']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async kitaru_pet_breast_first(kitaru, callname) {
    await kitaru.print_and_wait([
      '不知道自己该做些什么，于是在食指在 ',
      callname,
      ' 的胸部上画着圈。',
    ]);
    await kitaru.print_and_wait(['被注意到了吗？']);
    await kitaru.print_and_wait([
      '于是索性把脸靠在男人的胸膛上，撒娇般的蹭动着。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_nipple(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '只是碰到胸部就如此敏感的 ',
        y_call_k,
        ' 在被玩弄乳头时会怎么样呢？',
      ]);
      await you.print_and_wait([
        '直接伸手捏住了那对肿胀的不像样子的乳头, 像是把玩着驱魔用的豆子一样碾动着.',
      ]);
      await kitaru.say_and_wait(['啊～！……哈啊❤️、哈啊、嗯～❤️']);
      await you.print_and_wait([
        '自己担当的声音逐渐变得高昂起来, 脸上也露出了因为快感过载的痴态',
      ]);
      await you.print_and_wait(['那么再拉扯一下呢？']);
      await you.print_and_wait([
        '结果 ',
        y_call_k,
        ' 触电般地仰起头来，支支吾吾地靠在了自己的身上',
      ]);
    } else {
      await kitaru.say_and_wait(['……呀啊～❤️']);
      await you.print_and_wait(['使坏般地, 单单玩弄着自己担当的敏感乳头.']);
      await you.print_and_wait([
        '扭扭捏捏的乳头被大拇指和食指捏住, 像是把玩着 ',
        y_call_k,
        ' 决胜服上的念珠般左右拧动着，享受着那个硬邦邦，带着回弹的触感.',
      ]);
      await kitaru.say_and_wait(['……啊❤️～嗯、呜～呀❤️']);
      await you.print_and_wait([
        y_call_k,
        ' 就会因为 ',
        you.get_colored_name(),
        ' 的动作而扭动着身体，如同念着祷词般从口中吐出有节奏的快乐呻吟',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   */
  async finger_fuck(kitaru, you) {
    await you.print_and_wait([
      '只是手指稍微划过，面前 ',
      kitaru.get_colored_name(),
      ' 的穴口便马上更湿了起来。',
    ]);
    await kitaru.say_and_wait(['呀啊……']);
    await you.print_and_wait(['自家巫女湿润娇艳的呻吟声在耳边回荡着。']);
    await you.print_and_wait([
      '先是食指，再是中指，时不时还勾起指尖，在有着褶皱感触的肉壁上用指尖不断刺激着。',
    ]);
    await kitaru.say_and_wait(['呼，呼呼，啊……命定之人……手指，好厉害']);
    await you.print_and_wait([
      '黏黏糊糊的小穴里，早已分不清是 ',
      you.get_colored_name(),
      ' 的手指在翻搅着穴肉，还是寻求着刺激的蜜肉在主动吮吸着手指',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '巫女要掌握乱七八糟的仪式啊，基础的类比学习是必要的能力，但是……没想过会用在这种地方。',
      ]);
      await kitaru.print_and_wait([
        '想象成胡萝卜，用自己的舌尖轻触肉根，然后再缠绕上去舔舐，品尝着来自 ',
        callname,
        ' 雄性荷尔蒙的味道。',
      ]);
      await kitaru.say_and_wait(['哈、呜、啾噜……']);
      await kitaru.print_and_wait([
        ' 嘴巴在吞舔肉棒的过程中流露出淫浊而放浪的液体吸吮声。',
      ]);
    } else {
      await you.say_and_wait(['学得很快呢。']);
      await kitaru.print_and_wait([
        callname,
        ' 望着正呲溜呲溜侍奉着坚挺的自己，拍了拍的脑袋以示夸奖。',
      ]);
      await kitaru.print_and_wait(['嗯……呵呵、很舒服吧。']);
      await kitaru.print_and_wait([
        '伸出淫靡的舌头一点点舔弄着马眼，或者把龟头含在口中用舌面轻压，甚至像小恶魔一样轻轻用牙齿来回刮蹭着 ',
        you.get_colored_name(),
        ' 的敏感带。',
      ]);
      await kitaru.print_and_wait([
        '每当 ',
        callname,
        ' 有所反应的时候，自己都会开心的笑出来。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.say_and_wait(['用嘴吗？']);
      await kitaru.say_and_wait(['嗯，我会尽力的。']);
      await kitaru.print_and_wait([
        '跪坐在地上把头凑了过去，让呼出的吐息拍打肉棒上，看起来又变大了一点呢。',
      ]);
      await kitaru.print_and_wait(['然后……']);
      await kitaru.say_and_wait(['咕！']);
      await kitaru.print_and_wait([
        '一口气把阴茎吞入口中，参拜时用于念祷词的小嘴被肉棒塞得满满的，伴随着咕啾咕啾的声音开始给自己的 ',
        callname,
        ' 口交。',
      ]);
      await kitaru.print_and_wait([
        '巫女要掌握乱七八糟的仪式啊，基础的类比学习是必要的能力，但是……没想过会用在这种地方。',
      ]);
      await kitaru.print_and_wait([
        '想象成胡萝卜，用自己的舌尖轻触肉根，然后再缠绕上去舔舐，品尝着来自 ',
        callname,
        ' 雄性荷尔蒙的味道。',
      ]);
      await kitaru.say_and_wait(['哈、呜、啾噜……']);
      await kitaru.print_and_wait([
        ' 嘴巴在吞舔肉棒的过程中流露出淫浊而放浪的液体吸吮声。',
      ]);
    } else {
      await kitaru.say_and_wait(['知道啦，知道啦。']);
      await you.print_and_wait(['有些心不在蔫的吞下了肉棒，']);
      await kitaru.say_and_wait(['……咕哇、咕噜、啾、呜！']);
      await you.print_and_wait([
        '看来是没做好准备，试着吐出肉棒的 ',
        y_call_k,
        ' 用鼻子吐着气，一点点的让坚挺离开了口中。',
      ]);
      await you.print_and_wait([
        '不过从翕动着的鼻翼与摇晃的尾巴来看，应该是颇为享受的样子。',
      ]);
      await you.say_and_wait(['学得很快呢。']);
      await kitaru.print_and_wait([
        callname,
        ' 望着正呲溜呲溜侍奉着坚挺的自己，拍了拍的脑袋以示夸奖。',
      ]);
      await kitaru.print_and_wait(['嗯……呵呵、很舒服吧。']);
      await kitaru.print_and_wait([
        '伸出淫靡的舌头一点点舔弄着马眼，或者把龟头含在口中用舌面轻压，甚至像小恶魔一样轻轻用牙齿来回刮蹭着 ',
        you.get_colored_name(),
        ' 的敏感带。',
      ]);
      await kitaru.print_and_wait([
        '每当 ',
        callname,
        ' 有所反应的时候，自己都会开心的笑出来。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.say_and_wait('把嘴张开。');
      await kitaru.print_and_wait(
        '挣扎的话说不定有用……虽然有这样想过，身体却一点点被那只手压低了下去……',
      );
      await kitaru.say_and_wait('唔……');
      await kitaru.print_and_wait([
        '巫女要掌握乱七八糟的仪式啊，基础的类比学习是必要的能力，但是……没想过会用在这种地方。',
      ]);
      await kitaru.print_and_wait([
        '想象成胡萝卜，用自己的舌尖轻触肉根，然后再缠绕上去舔舐，品尝着来自 ',
        callname,
        ' 雄性荷尔蒙的味道。',
      ]);
      await kitaru.say_and_wait(['哈、呜、啾噜……']);
      await kitaru.print_and_wait([
        ' 嘴巴在吞舔肉棒的过程中流露出淫浊而放浪的液体吸吮声。',
      ]);
    } else {
      await kitaru.say_and_wait('哈……', true);
      await kitaru.say_and_wait('还要……继续嘛……', true);
      await you.say_and_wait(['学得很快呢。']);
      await kitaru.print_and_wait([
        callname,
        ' 望着正呲溜呲溜侍奉着坚挺的自己，拍了拍的脑袋以示夸奖。',
      ]);
      await kitaru.print_and_wait(['嗯……呵呵、很舒服吧。']);
      await kitaru.print_and_wait([
        '伸出淫靡的舌头一点点舔弄着马眼，或者把龟头含在口中用舌面轻压，甚至像小恶魔一样轻轻用牙齿来回刮蹭着 ',
        you.get_colored_name(),
        ' 的敏感带。',
      ]);
      await kitaru.print_and_wait([
        '每当 ',
        callname,
        ' 有所反应的时候，自己都会开心的笑出来。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(['呼……这样喘气会有点费劲呢。']);
      await kitaru.print_and_wait([
        '向后再仰了仰头，小舌用力的缩起，让肉棒得以挤进了自己的口中。',
      ]);
      await kitaru.print_and_wait(['还是，没有到头吗？']);
      await kitaru.print_and_wait([
        '直到闭上眼睛的自己察觉到了杂乱的毛发戳刺到鼻子的瘙痒感，还有那股愈发明显，莫名令自己沉醉的腥臭味。',
      ]);
      await kitaru.print_and_wait(['头脑发白，这样，再深一点也没有关系的吧？']);
      await kitaru.print_and_wait([
        '脑袋上传来了被抚摸的感觉，来自 ',
        callname,
        ' 的大手轻柔的按在蓬松的橙发上，似乎在鼓励一般的抚摸着，配着自己的动作，时不时的触碰一下已经耷拉下来的两只耳朵。',
      ]);
      await kitaru.print_and_wait([
        '像是……呜不对……这种姿势，分明就是 ',
        callname,
        ' 的宠物嘛，是被当成了小狐狸吗？',
      ]);
      await kitaru.print_and_wait([
        '于是已经在肉棒的气味中被训练好的自己明白了来自主人的每一个指令。',
      ]);
      await kitaru.print_and_wait([
        '像是在被拉着左耳时要抿紧双唇压迫肉棒，并用湿润的粉舌裹住敏感的龟头。',
      ]);
      await kitaru.print_and_wait([
        '被扯着右耳时该左右扭动着脑袋，用脸颊内侧的软肉与嫩舌一同服侍着肉棒。',
      ]);
      await kitaru.print_and_wait([
        '而当 ',
        callname,
        ' 短促的摸头时，则要吸紧肉棒前端让脸颊淫荡的凹陷下去，并用舌尖磨蹭着铃口。',
      ]);
      await kitaru.say_and_wait(['呜咕——']);
      await kitaru.print_and_wait([
        '腿发软似的开始打颤，小脑袋晕乎乎的加快了吞吐肉棒的动作。',
      ]);
    } else {
      await kitaru.say_and_wait(['咕唔—!']);
      await kitaru.print_and_wait([
        '尽管那对星星瞳已经微微翻白，但喉咙仍不停地舒张收缩，用往日里除空气外绝不会有他物触及的喉肉勒紧，刺激着龟头。',
      ]);
      await kitaru.say_and_wait(['唔～哧溜～唔—!']);
      await kitaru.print_and_wait([
        '自贴在阴毛丛中的粉唇与肉棒的缝隙间漏出色情的吐息，翘起的栗色马尾邀功般的摆动了起来。',
      ]);
      await kitaru.say_and_wait(['呜咕——']);
      await you.print_and_wait([
        '双腿发软似的开始打颤，明明能跑长距离的身体也像是支撑不住了一样向前倾倒着，让那俏脸凑近着离肉棒的根部越来越近。',
      ]);
      await you.print_and_wait([
        '微眯着那被肉棒的气味熏的睁不开的星星眼，在呼吸间自嘴角漏出带着淡淡肉棒腥味的口水，顺着伸直的雪颈滑落，挂在那对乳球上。',
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(['唔……唔唔唔唔……']);
      await you.print_and_wait([
        '试探性的问了问身下人的状况，却只得到了支支吾吾的回应，小脸彻底埋在了',
        you.get_colored_name(),
        '的胯下的阴毛丛中。',
      ]);
      await you.print_and_wait([
        '嘛，既然没事，那就继续吧，将担当的脑袋牢牢地按在了自己胯下，然后不断的前后耸动着腰部，像是真的在抽插着 ',
        y_call_k,
        ' 的嘴穴一样，尽情的享受着用肉棒连同担当的小嘴喉咙一起侵犯的快感。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait('还想要，更深一点……');
      await kitaru.print_and_wait([
        '贪心地呓语着，被索取快感的本能所支配的 ',
        callname,
        ' 挺起了腰。',
      ]);
      await kitaru.print_and_wait('更深地含进去了……');
      await kitaru.print_and_wait('顶到，最里面了……');
      await kitaru.print_and_wait(['呼……这样喘气会有点费劲呢。']);
      await kitaru.print_and_wait([
        '向后再仰了仰头，小舌用力的缩起，让肉棒得以挤进了自己的口中。',
      ]);
      await kitaru.print_and_wait(['还是，没有到头吗？']);
      await kitaru.print_and_wait([
        '直到闭上眼睛的自己察觉到了杂乱的毛发戳刺到鼻子的瘙痒感，还有那股愈发明显，莫名令自己沉醉的腥臭味。',
      ]);
      await kitaru.print_and_wait(['头脑发白，这样，再深一点也没有关系的吧？']);
      await kitaru.print_and_wait([
        '脑袋上传来了被抚摸的感觉，来自 ',
        callname,
        ' 的大手轻柔的按在蓬松的橙发上，似乎在鼓励一般的抚摸着，配着自己的动作，时不时的触碰一下已经耷拉下来的两只耳朵。',
      ]);
      await kitaru.print_and_wait([
        '像是……呜不对……这种姿势，分明就是 ',
        callname,
        ' 的宠物嘛，是被当成了小狐狸吗？',
      ]);
      await kitaru.print_and_wait([
        '于是已经在肉棒的气味中被训练好的自己明白了来自主人的每一个指令。',
      ]);
      await kitaru.print_and_wait([
        '像是在被拉着左耳时要抿紧双唇压迫肉棒，并用湿润的粉舌裹住敏感的龟头。',
      ]);
      await kitaru.print_and_wait([
        '被扯着右耳时该左右扭动着脑袋，用脸颊内侧的软肉与嫩舌一同服侍着肉棒。',
      ]);
      await kitaru.print_and_wait([
        '而当 ',
        callname,
        ' 短促的摸头时，则要吸紧肉棒前端让脸颊淫荡的凹陷下去，并用舌尖磨蹭着铃口。',
      ]);
      await kitaru.say_and_wait(['呜咕——']);
      await kitaru.print_and_wait([
        '腿发软似的开始打颤，小脑袋晕乎乎的加快了吞吐肉棒的动作。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
        kitaru.get_colored_name(),
        ' 在这方面出乎',
        you.phy_sex_title,
        '预料的有天赋。',
      ]);
      await kitaru.print_and_wait([
        '用余光看着 ',
        callname,
        ' 吸着气仰起头的姿势，没空哼歌的 ',
        kitaru.get_colored_name(),
        ' 好懂地抖起了耳朵。',
      ]);
      await kitaru.print_and_wait('怎么样～');
      await kitaru.print_and_wait([
        '虽然那张小嘴此刻没有说话的空闲，但与自家的担当正负距离接触的 ',
        callname,
        ' 完全领会了那用舌尖勾勒在肉棒龟头上的邀功言语。',
      ]);
      await kitaru.say_and_wait(['咕唔—!']);
      await kitaru.print_and_wait([
        '尽管那对星星瞳已经微微翻白，但喉咙仍不停地舒张收缩，用往日里除空气外绝不会有他物触及的喉肉勒紧，刺激着龟头。',
      ]);
      await kitaru.say_and_wait(['唔～哧溜～唔—!']);
      await kitaru.print_and_wait([
        '自贴在阴毛丛中的粉唇与肉棒的缝隙间漏出色情的吐息，翘起的栗色马尾邀功般的摆动了起来。',
      ]);
      await kitaru.say_and_wait(['呜咕——']);
      await you.print_and_wait([
        '双腿发软似的开始打颤，明明能跑长距离的身体也像是支撑不住了一样向前倾倒着，让那俏脸凑近着离肉棒的根部越来越近。',
      ]);
      await you.print_and_wait([
        '微眯着那被肉棒的气味熏的睁不开的星星眼，在呼吸间自嘴角漏出带着淡淡肉棒腥味的口水，顺着伸直的雪颈滑落，挂在那对乳球上。',
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(['唔……唔唔唔唔……']);
      await you.print_and_wait([
        '试探性的问了问身下人的状况，却只得到了支支吾吾的回应，小脸彻底埋在了',
        you.get_colored_name(),
        '的胯下的阴毛丛中。',
      ]);
      await you.print_and_wait([
        '嘛，既然没事，那就继续吧，将担当的脑袋牢牢地按在了自己胯下，然后不断的前后耸动着腰部，像是真的在抽插着 ',
        y_call_k,
        ' 的嘴穴一样，尽情的享受着用肉棒连同担当的小嘴喉咙一起侵犯的快感。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait('把头抬起来。');
      await kitaru.print_and_wait('更深地含进去了……');
      await kitaru.print_and_wait('依旧是，叫人难以听出温情的短促命令句。');
      await kitaru.print_and_wait([
        '但 ',
        kitaru.get_colored_name(),
        ' 的身体却难以抗拒地被其所支配着。',
      ]);
      await kitaru.print_and_wait(['呼……这样喘气会有点费劲呢。']);
      await kitaru.print_and_wait([
        '向后再仰了仰头，小舌用力的缩起，让肉棒得以挤进了自己的口中。',
      ]);
      await kitaru.print_and_wait(['还是，没有到头吗？']);
      await kitaru.print_and_wait([
        '直到闭上眼睛的自己察觉到了杂乱的毛发戳刺到鼻子的瘙痒感，还有那股愈发明显，莫名令自己沉醉的腥臭味。',
      ]);
      await kitaru.print_and_wait(['头脑发白，这样，再深一点也没有关系的吧？']);
      await kitaru.print_and_wait([
        '脑袋上传来了被抚摸的感觉，来自 ',
        callname,
        ' 的大手轻柔的按在蓬松的橙发上，似乎在鼓励一般的抚摸着，配着自己的动作，时不时的触碰一下已经耷拉下来的两只耳朵。',
      ]);
      await kitaru.print_and_wait([
        '像是……呜不对……这种姿势，分明就是 ',
        callname,
        ' 的宠物嘛，是被当成了小狐狸吗？',
      ]);
      await kitaru.print_and_wait([
        '于是已经在肉棒的气味中被训练好的自己明白了来自主人的每一个指令。',
      ]);
      await kitaru.print_and_wait([
        '像是在被拉着左耳时要抿紧双唇压迫肉棒，并用湿润的粉舌裹住敏感的龟头。',
      ]);
      await kitaru.print_and_wait([
        '被扯着右耳时该左右扭动着脑袋，用脸颊内侧的软肉与嫩舌一同服侍着肉棒。',
      ]);
      await kitaru.print_and_wait([
        '而当 ',
        callname,
        ' 短促的摸头时，则要吸紧肉棒前端让脸颊淫荡的凹陷下去，并用舌尖磨蹭着铃口。',
      ]);
      await kitaru.say_and_wait(['呜咕——']);
      await kitaru.print_and_wait([
        '腿发软似的开始打颤，小脑袋晕乎乎的加快了吞吐肉棒的动作。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '无言地催促着，',
        you.phy_sex_title,
        '再一次强硬地用手将面前的',
        kitaru.teen_sex_title,
        '固定在了自己的股间，直到自己满足之前。',
      ]);
      await kitaru.say_and_wait(['咕唔—!']);
      await kitaru.print_and_wait([
        '尽管那对星星瞳已经微微翻白，但喉咙仍不停地舒张收缩，用往日里除空气外绝不会有他物触及的喉肉勒紧，刺激着龟头。',
      ]);
      await kitaru.say_and_wait(['唔～哧溜～唔—!']);
      await kitaru.print_and_wait([
        '自贴在阴毛丛中的粉唇与肉棒的缝隙间漏出色情的吐息，翘起的栗色马尾邀功般的摆动了起来。',
      ]);
      await kitaru.say_and_wait(['呜咕——']);
      await you.print_and_wait([
        '双腿发软似的开始打颤，明明能跑长距离的身体也像是支撑不住了一样向前倾倒着，让那俏脸凑近着离肉棒的根部越来越近。',
      ]);
      await you.print_and_wait([
        '微眯着那被肉棒的气味熏的睁不开的星星眼，在呼吸间自嘴角漏出带着淡淡肉棒腥味的口水，顺着伸直的雪颈滑落，挂在那对乳球上。',
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(['唔……唔唔唔唔……']);
      await you.print_and_wait([
        '试探性的问了问身下人的状况，却只得到了支支吾吾的回应，小脸彻底埋在了',
        you.get_colored_name(),
        '的胯下的阴毛丛中。',
      ]);
      await you.print_and_wait([
        '嘛，既然没事，那就继续吧，将担当的脑袋牢牢地按在了自己胯下，然后不断的前后耸动着腰部，像是真的在抽插着 ',
        y_call_k,
        ' 的嘴穴一样，尽情的享受着用肉棒连同担当的小嘴喉咙一起侵犯的快感。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.say_and_wait(['那个，', callname, '……我做的还行吧？']);
      await kitaru.print_and_wait([
        '没听见回答，不过，见到 ',
        callname,
        ' 的腰微微挺起来了呀。',
      ]);
      await kitaru.say_and_wait(['那我继续了……']);
      await kitaru.print_and_wait([
        '用右手的小指和食指轻盈的环在肉棒上，缓慢的撸动着，时不时用另一只手指肚摩擦着龟头的缝隙，刮弄蹭动着发出让两人的身体都为之颤抖的湿粘摩擦声，直到两只手都被通红龟头滴落的透明先走汁弄的黏糊糊的。',
      ]);
      await kitaru.say_and_wait(['唔……这样，就像参拜前的洗手一样。']);
      await kitaru.print_and_wait([
        '被巫女侍奉着尽心的肉棒也滴出了更多的先走汁作为回应。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '用左手微微托起变得更加膨胀的肉竿，然后，在先前的服侍中已经变得黏糊糊的右手就直接罩上了变得晶莹的龟头。',
      ]);
      await kitaru.print_and_wait([
        '在洗切塔罗牌时灵活无比的纤长五指像屈服了一般无力垂下，把白皙的柔软掌心牢牢地同狰狞的肉冠固定在了一起。',
      ]);
      await kitaru.print_and_wait([
        '加快了手中套弄撸动的节奏，发觉身前男人的腰不由自主的挺的更高。',
      ]);
      await kitaru.print_and_wait(['哈……', callname, ' 也很开心呢……']);
      await kitaru.print_and_wait([
        '自己的小腹也一跳一跳的，所以，请赶紧射出来吧……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hand_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '盯着 ',
        callname,
        ' 那光是看见就能让自己的小腹一跳一跳的家伙，自觉的十指已经像平时受到神启一样有律的摆动起来。',
      ]);
      await kitaru.say_and_wait(['那个，想我用手做吗？']);
      await kitaru.print_and_wait([
        '不用说话也能占卜的到了，伸手安慰着青筋跳动的肉棒，直到它慢慢变成能把自己小穴撑开塑造成下流难堪的形状的怪物模样。',
      ]);
      await kitaru.say_and_wait(['那个，', callname, '……我做的还行吧？']);
      await kitaru.print_and_wait([
        '没听见回答，不过，见到 ',
        callname,
        ' 的腰微微挺起来了呀。',
      ]);
      await kitaru.say_and_wait(['那我继续了……']);
      await kitaru.print_and_wait([
        '用右手的小指和食指轻盈的环在肉棒上，缓慢的撸动着，时不时用另一只手指肚摩擦着龟头的缝隙，刮弄蹭动着发出让两人的身体都为之颤抖的湿粘摩擦声，直到两只手都被通红龟头滴落的透明先走汁弄的黏糊糊的。',
      ]);
      await kitaru.say_and_wait(['唔……这样，就像参拜前的洗手一样。']);
      await kitaru.print_and_wait([
        '被巫女侍奉着尽心的肉棒也滴出了更多的先走汁作为回应。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '用左手微微托起变得更加膨胀的肉竿，然后，在先前的服侍中已经变得黏糊糊的右手就直接罩上了变得晶莹的龟头。',
      ]);
      await kitaru.print_and_wait([
        '在洗切塔罗牌时灵活无比的纤长五指像屈服了一般无力垂下，把白皙的柔软掌心牢牢地同狰狞的肉冠固定在了一起。',
      ]);
      await kitaru.print_and_wait([
        '加快了手中套弄撸动的节奏，发觉身前男人的腰不由自主的挺的更高。',
      ]);
      await kitaru.print_and_wait(['哈……', callname, ' 也很开心呢……']);
      await kitaru.print_and_wait([
        '自己的小腹也一跳一跳的，所以，请赶紧射出来吧……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hand_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait([y_call_k, '，摊开手']);
      await kitaru.print_and_wait([
        callname,
        ' 颇为强硬的将肉棒伸到了自己摊开的双手间，散发出来的浓厚气味光是嗅到就让脑子发热。',
      ]);
      await kitaru.print_and_wait([
        '应该做出点不情愿的表情吧？用这么强硬的态度命令自己？',
      ]);
      await kitaru.print_and_wait([
        '但，右手已经颇为虔诚的开始轻轻磨挲着肉冠上敏感的沟壑，左手则是连同鼓囊囊的种子袋一起，将 ',
        callname,
        ' 的肉棒在柔软的掌心上托起。',
      ]);
      await kitaru.say_and_wait(['那个，', callname, '……我做的还行吧？']);
      await kitaru.print_and_wait([
        '没听见回答，不过，见到 ',
        callname,
        ' 的腰微微挺起来了呀。',
      ]);
      await kitaru.say_and_wait(['那我继续了……']);
      await kitaru.print_and_wait([
        '用右手的小指和食指轻盈的环在肉棒上，缓慢的撸动着，时不时用另一只手指肚摩擦着龟头的缝隙，刮弄蹭动着发出让两人的身体都为之颤抖的湿粘摩擦声，直到两只手都被通红龟头滴落的透明先走汁弄的黏糊糊的。',
      ]);
      await kitaru.say_and_wait(['唔……这样，就像参拜前的洗手一样。']);
      await kitaru.print_and_wait([
        '被巫女侍奉着尽心的肉棒也滴出了更多的先走汁作为回应。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '用左手微微托起变得更加膨胀的肉竿，然后，在先前的服侍中已经变得黏糊糊的右手就直接罩上了变得晶莹的龟头。',
      ]);
      await kitaru.print_and_wait([
        '在洗切塔罗牌时灵活无比的纤长五指像屈服了一般无力垂下，把白皙的柔软掌心牢牢地同狰狞的肉冠固定在了一起。',
      ]);
      await kitaru.print_and_wait([
        '加快了手中套弄撸动的节奏，发觉身前男人的腰不由自主的挺的更高。',
      ]);
      await kitaru.print_and_wait(['哈……', callname, ' 也很开心呢……']);
      await kitaru.print_and_wait([
        '自己的小腹也一跳一跳的，所以，请赶紧射出来吧……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(['肉棒变得更大了呢……']);
      await kitaru.print_and_wait([
        '还有那股能把自己弄的乱糟糟，令人自己上瘾的气味也是……',
      ]);
      await kitaru.print_and_wait([
        '稍稍把正握着竿身的双手向后移了一点，露出那挺硬的龟头，用自己的嘴唇轻轻衔住，让舌尖上的热气随着带有自己体温的呼吸飘向 ',
        callname,
        ' 的肉根。',
      ]);
      await kitaru.say_and_wait(['啾～']);
      await kitaru.print_and_wait(['看来 ', callname, ' 很喜欢这样呢。']);
    } else {
      await kitaru.say_and_wait(['呲溜呲溜——']);
      await you.print_and_wait([
        '身下的 ',
        y_call_k,
        ' 稍稍将脸颊抬高了一些，在肉根的旁边舔舐着，舌尖用着力度，轻点着冠状沟和铃口。',
      ]);
      await you.print_and_wait([
        '偶尔唇瓣不得不暂时离开时，等候了许久的双手会替补上空位，纤细的玉指竭尽所能地抚弄肉根，交替着带来快感。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(['试着舔一下。']);
      await kitaru.print_and_wait([
        '从 ',
        callname,
        ' 那里得到了这样的指示，于是毫无怀疑的吐出的舌尖，卷起自马眼滴落的液体吞入腹中。',
      ]);
      await kitaru.print_and_wait([
        '哈，可以的吧，这样自己的舌头都被弄的黏糊糊的了……欸！还要再大胆一点吗？',
      ]);
      await kitaru.print_and_wait([
        '再用手调整了一下角度，然后像对待珍宝珠般用舌尖绕着龟头与冠状沟不断舔弄着。',
      ]);
      await kitaru.print_and_wait(['肉棒变得更大了呢……']);
      await kitaru.print_and_wait([
        '还有那股能把自己弄的乱糟糟，令人自己上瘾的气味也是……',
      ]);
      await kitaru.print_and_wait([
        '稍稍把正握着竿身的双手向后移了一点，露出那挺硬的龟头，用自己的嘴唇轻轻衔住，让舌尖上的热气随着带有自己体温的呼吸飘向 ',
        callname,
        ' 的肉根。',
      ]);
      await kitaru.say_and_wait(['啾～']);
      await kitaru.print_and_wait(['看来 ', callname, ' 很喜欢这样呢。']);
    } else {
      await kitaru.say_and_wait(['呲溜呲溜——']);
      await you.print_and_wait([
        '身下的 ',
        y_call_k,
        ' 稍稍将脸颊抬高了一些，在肉根的旁边舔舐着，舌尖用着力度，轻点着冠状沟和铃口。',
      ]);
      await you.print_and_wait([
        '偶尔唇瓣不得不暂时离开时，等候了许久的双手会替补上空位，纤细的玉指竭尽所能地抚弄肉根，交替着带来快感。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(['给我同时用手和嘴，做的到吧？']);
      await kitaru.print_and_wait([
        '仰视着正居高临下 ',
        callname,
        ' 居高临下的视角里，不由自主的让双腿呈M字的大大张开，肉棒恰巧就在伸出舌尖就能触碰到的地方。',
      ]);
      await kitaru.print_and_wait([
        '呜，态度太恶劣了吧，暗自腹诽着，但抖M的自己已经开始小心地磨挲着肉棒上条条胀起的经络，同时用舌尖轻点起铃口。',
      ]);
      await kitaru.print_and_wait(['咕……当然，当然做的到。']);
      await kitaru.print_and_wait(['肉棒变得更大了呢……']);
      await kitaru.print_and_wait([
        '还有那股能把自己弄的乱糟糟，令人自己上瘾的气味也是……',
      ]);
      await kitaru.print_and_wait([
        '稍稍把正握着竿身的双手向后移了一点，露出那挺硬的龟头，用自己的嘴唇轻轻衔住，让舌尖上的热气随着带有自己体温的呼吸飘向 ',
        callname,
        ' 的肉根。',
      ]);
      await kitaru.say_and_wait(['啾～']);
      await kitaru.print_and_wait(['看来 ', callname, ' 很喜欢这样呢。']);
    } else {
      await kitaru.say_and_wait(['呲溜呲溜——']);
      await you.print_and_wait([
        '身下的 ',
        y_call_k,
        ' 稍稍将脸颊抬高了一些，在肉根的旁边舔舐着，舌尖用着力度，轻点着冠状沟和铃口。',
      ]);
      await you.print_and_wait([
        '偶尔唇瓣不得不暂时离开时，等候了许久的双手会替补上空位，纤细的玉指竭尽所能地抚弄肉根，交替着带来快感。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tit_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '见着身前的担当把自己的肉棒整根塞入乳沟，然后尽力的挤压着那对平时隐藏在校服下硕大调皮的白兔。',
      ]);
      await kitaru.say_and_wait([
        '嗯～嗯咻，呼、嗯～',
        callname,
        ' 感觉……还好吧？',
      ]);
      await you.print_and_wait([
        '于是亲昵地拍了拍正侍奉着自己的少女，手掌在亮橙色的头发上来回蹭了蹭。',
      ]);
      await you.print_and_wait(['嘶……感觉更卖力了呢。']);
    } else {
      await kitaru.print_and_wait([
        '肉棒一跳一跳的，看来自己的侍奉是有效果的呢，不过，总是担心 ',
        callname,
        ' 会不舒服。',
      ]);
      await kitaru.print_and_wait([
        '于是试着将自己的两颗已经挺立变硬的樱桃贴在肉棒上，让那对变得硬硬的乳粒给乳交的过程带来不一样的感觉。',
      ]);
      await kitaru.print_and_wait([
        '乳尖在撞上变得更加滚烫的肉棒时，传来的电流感麻痹着大脑，胯间变得黏糊糊了呢。',
      ]);
      await kitaru.print_and_wait(['哈……哈啊，这样子，看来自己也乐在其中呢。']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tit_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '盯着自家占卜师胸前那对会随着动作而一晃一晃的圆润乳肉，挺立起来的乳尖周围露着健康的粉色。',
      ]);
      await you.print_and_wait(['如果让肉棒被那对奶子包裹的话。']);
      await kitaru.say_and_wait(['可以的～!']);
      await you.print_and_wait([
        '还没说出口便听见了自家担当熟悉的应答声，毕竟 ',
        y_call_k,
        ' 就是这样善解人意的赛马娘。',
      ]);
      await you.print_and_wait([
        '见着身前的担当把自己的肉棒整根塞入乳沟，然后尽力的挤压着那对平时隐藏在校服下硕大调皮的白兔。',
      ]);
      await kitaru.say_and_wait([
        '嗯～嗯咻，呼、嗯～',
        callname,
        ' 感觉……还好吧？',
      ]);
      await you.print_and_wait([
        '于是亲昵地拍了拍正侍奉着自己的少女，手掌在亮橙色的头发上来回蹭了蹭。',
      ]);
      await you.print_and_wait(['嘶……感觉更卖力了呢。']);
    } else {
      await kitaru.print_and_wait([
        '肉棒一跳一跳的，看来自己的侍奉是有效果的呢，不过，总是担心 ',
        callname,
        ' 会不舒服。',
      ]);
      await kitaru.print_and_wait([
        '于是试着将自己的两颗已经挺立变硬的樱桃贴在肉棒上，让那对变得硬硬的乳粒给乳交的过程带来不一样的感觉。',
      ]);
      await kitaru.print_and_wait([
        '乳尖在撞上变得更加滚烫的肉棒时，传来的电流感麻痹着大脑，胯间变得黏糊糊了呢。',
      ]);
      await kitaru.print_and_wait(['哈……哈啊，这样子，看来自己也乐在其中呢。']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tit_and_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        ' 一上一下活动着腰肢，让晶莹的先走汁均匀的涂满了正夹着肉棒的柔嫩沟壑，又被乳沟和肉棒叠加在一起的温度蒸发，弄的脑袋也晕乎乎的。',
      ]);
      await kitaru.print_and_wait(['感觉……味道比平时还浓烈呀。']);
      await kitaru.print_and_wait([
        '小心地调整位置，只露出还在不断滴落先走汁的龟头在自己的嘴前，微微身子微微前倾将其含入口中，舌头正好垫在冠状沟的位置。',
      ]);
      await kitaru.print_and_wait([
        '啊……怎么都算不上美味吧，但是……还是会多吞下去一点的。',
      ]);
    } else {
      await kitaru.say_and_wait(['吸溜吸溜……']);
      await kitaru.print_and_wait([
        '滴落的咸腥液体没有浪费，被自己一滴不剩的吞入了腹中，而偶尔龟头从口中抽离时，粉舌也会伴随着跟上，在液体落入那对已经被弄的滑腻腻亮晶晶的欧派前赶着接住。',
      ]);
      await kitaru.print_and_wait(['直到脑子里都被这股下流的气味充满。']);
      await kitaru.print_and_wait(['毕竟……是 ', callname, ' 认可自己的奖励呢']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tit_and_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        callname,
        ' 从乳肉中冒出头的龟头有些没精打采的样子。',
      ]);
      await kitaru.print_and_wait('而且本人也很好懂地正合起掌拜托。');
      await kitaru.print_and_wait([
        ' 一上一下活动着腰肢，让晶莹的先走汁均匀的涂满了正夹着肉棒的柔嫩沟壑，又被乳沟和肉棒叠加在一起的温度蒸发，弄的脑袋也晕乎乎的。',
      ]);
      await kitaru.print_and_wait(['感觉……味道比平时还浓烈呀。']);
      await kitaru.print_and_wait([
        '小心地调整位置，只露出还在不断滴落先走汁的龟头在自己的嘴前，微微身子微微前倾将其含入口中，舌头正好垫在冠状沟的位置。',
      ]);
      await kitaru.print_and_wait([
        '啊……怎么都算不上美味吧，但是……还是会多吞下去一点的。',
      ]);
    } else {
      await kitaru.say_and_wait(['吸溜吸溜……']);
      await kitaru.print_and_wait([
        '滴落的咸腥液体没有浪费，被自己一滴不剩的吞入了腹中，而偶尔龟头从口中抽离时，粉舌也会伴随着跟上，在液体落入那对已经被弄的滑腻腻亮晶晶的欧派前赶着接住。',
      ]);
      await kitaru.print_and_wait(['直到脑子里都被这股下流的气味充满。']);
      await kitaru.print_and_wait(['毕竟……是 ', callname, ' 认可自己的奖励呢']);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async foot_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.say_and_wait([callname, '～这样……感觉还行吗？']);
      await you.print_and_wait([
        '眯起的橙色眼眸绽着些许狡黠，那双能跑出优秀末脚的双足踏在了 ',
        you.get_colored_name(),
        ' 的肉棒上',
      ]);
      await you.print_and_wait([
        '一脚抚弄龟头，一脚托起杆身，待到淅淅索索的足底摩擦让龟头预热的差不多之后，转而沿着胀红肉棒上根根暴起的粗筋，向感官不那么敏锐的末端探去。',
      ]);
      await kitaru.say_and_wait(['……真热啊……像要融化一样……']);
      await you.print_and_wait([
        '赛马娘们珍视的双足，就这么为了做爱时的情趣，被轻易的使用着，让龟头前端粘粘的先走汁，更多地更快地被生产出来',
      ]);
    } else {
      await kitaru.print_and_wait([
        '大概是擅长差马跑法的自己，平时在赛场上时也要随时分心关注身边对手的缘故吧？',
      ]);
      await kitaru.print_and_wait([
        '所以，在专心致志的用双足照料着 ',
        callname,
        ' 肉棒的自己，还能有余裕注意到 ',
        callname,
        ' 的情况。',
      ]);
      await kitaru.print_and_wait([
        '开始只是用足底脚掌夹住肉棒不住的套弄着，等听到 ',
        callname,
        ' 的喘息声逐渐粗重起来，便又换个姿势继续刺激着肉棒的敏感点。',
      ]);
      await kitaru.print_and_wait([
        '让柔软的足心踏着龟头，等到肉棒开始不住的抖动时，又坏坏的停下摩擦，转而曲起脚趾压在龟头上扣住。',
      ]);
      await kitaru.say_and_wait(
        ['哈……这种能把 ', callname, ' 硬邦邦的肉棒踩在脚下的，莫名的优越感。'],
        true,
      );
      await kitaru.say_and_wait(
        ['……好奇怪，明明只是用脚在做，但心跳快得不行，身体也好热。'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async missionary(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait('唔……可以的。');
    await you.print_and_wait([
      '两手环在了 ',
      callname,
      ' 的背后，像是不想让自己的通红脸颊被看到似的把头靠在了 ',
      callname,
      ' 的肩膀上。',
    ]);
    await you.print_and_wait([
      '肉棒伴着淫靡的水声插入了 ',
      y_call_k,
      ' 的小穴，于是她环抱在背后的双手便下意识的缩紧，连带着让那对匀称的双腿也在你背后猛地绷直，让肉棒径直捅入更深的地方。',
    ]);
    await kitaru.say_and_wait('呜呜！好烫……❤️');
    await you.print_and_wait([
      '就算对面把头侧着也没用，只是听着耳侧 ',
      y_call_k,
      ' 漏出的可爱喘息声，一只因为滚烫肉棒的陡然快感而双眼翻白的栗毛马娘形象便清晰的浮现在脑海中。',
    ]);
    await kitaru.say_and_wait('……哈嗯❤️');
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async doggy_style(kitaru, you, callname) {
    await kitaru.say_and_wait(['……这样趴着吗？']);
    await kitaru.print_and_wait(['按 ', callname, ' 的指示如幼犬般趴在地面。']);
    await kitaru.print_and_wait([
      '唔……明明自己没有特意训练过，但就像是得到了莫名的神启一样，知道要把自己的圆润屁股抬到一个合适的高度，顺带懂事的让湿漉漉的马尾甩在一旁，露出下面的饥渴小穴。',
    ]);
    await kitaru.print_and_wait(['看不到……', callname, ' 的脸']);
    await kitaru.print_and_wait(['但是……咕……兴奋起来了。']);
    await kitaru.say_and_wait('呃啊……');
    await kitaru.print_and_wait([
      '肉棒长驱直入，下身的肿胀和满足感被神经忠实的传递给大脑，让自己的嘴角勾起了幸福而痴痴的笑容。',
    ]);
    await kitaru.print_and_wait(['完，完全和小狗一样了呢。']);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async sitting(kitaru, you, callname, y_call_k) {
    await you.print_and_wait([
      '能感受到 ',
      y_call_k,
      ' 的臀肉压在自己大腿上的，棉花糖般的触感。',
    ]);
    await you.print_and_wait([
      '胸前那两对白兔也随着 ',
      callname,
      ' 抽插的动作一跳一跳的，硬邦邦的乳尖也是。',
    ]);
    await you.print_and_wait([
      '不止于此，这种体位的好处还可以清楚的看见，那对星星眼是如何慢慢变成爱心的。',
    ]);
    await kitaru.say_and_wait(['咕哈……', callname, ' ❤️']);
    await you.print_and_wait([
      '小腹被肉棒顶出明显轮廓的 ',
      y_call_k,
      '，露出了一个有些呆呆的可爱表情。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async hug_sitting(kitaru, you, callname) {
    await kitaru.print_and_wait([
      '配合着缓缓沉下身体，龟头充血着挺入了肉臀间，将臀肉尽数紧抵再推开……',
    ]);
    await kitaru.say_and_wait(['哈❤️啊啊～']);
    await kitaru.print_and_wait([
      '肉棒没有通知自己就直接顶了上来, 发情的濡湿小穴一下子像是要被顶穿般。',
    ]);
    await kitaru.say_and_wait('咕……呜❤️……哈啊……哈啊……❤️');
    await kitaru.print_and_wait([
      '自暴自弃般的将头靠在身后 ',
      callname,
      ' 的胸膛上, 迎合着身后人的挺腰的动作。',
    ]);
    await kitaru.print_and_wait([
      '不过，这个姿势倒是不用担心自己露出的糟糕表情被 ',
      callname,
      ' 看见什么的……',
    ]);
    await kitaru.print_and_wait([
      '但是自口中漏出的淫荡声音，因快感而绷直的马耳朵，还有缠在训练员腰上的懂事尾巴。',
    ]);
    await kitaru.print_and_wait([
      '就算身后那家伙再愚钝，也能猜到自己现在成了怎样糟糕的情况吧。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '握着 ',
        y_call_k,
        ' 右脚的脚踝，把她的腿抬了起来，少女顿时摇摇欲坠，带着胸前的那对沉甸甸也一晃一晃的。',
      ]);
      await kitaru.say_and_wait(['唔哇……要在这个姿势下做吗？']);
      await you.print_and_wait([
        '凭借神乐时的训练，勉勉强强用单脚保持平衡的 ',
        y_call_k,
        ' 看着 ',
        callname,
        ' 挺立起来的胯下之物。',
      ]);
      await kitaru.print_and_wait(['等一下……等下啊呃❤️！']);
      await you.print_and_wait([
        '马娘的柔韧性让 ',
        callname,
        ' 轻松地将那匀称的大腿压到了小穴旁，而后肉棒咕啾咕啾的插入了 ',
        y_call_k,
        ' 的泥泞小穴。',
      ]);
      await you.print_and_wait([
        '随着淫靡又轻块的啪嗒水声响起，',
        callname,
        ' 开始训练起 ',
        y_call_k,
        ' 有关单脚平衡的舞蹈技巧来。',
      ]);
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait(['哈～嗯哈～❤️']);
      await you.print_and_wait([
        '双眼失焦的 ',
        y_call_k,
        ' 环住了 ',
        callname,
        ' 的脖子，两只栗色的耳朵在头皮上卷紧，连那条搭在臂弯上的腿也打着颤。',
      ]);
      await you.print_and_wait([
        '这种体位得以让肉棒更好的捅入深处，小穴如求饶般亲吻着肉棒，每次抽送时，把头靠在肩膀上的 ',
        y_call_k,
        ' 就会随着节奏在耳边吐出软糯的呻吟。',
      ]);
      await kitaru.say_and_wait('太……快了❤命定之人……这样也太快了❤');
      await you.print_and_wait([
        '露出了有些惊慌表情的 ',
        y_call_k,
        ' 反倒是勾起了 ',
        callname,
        ' 的施虐欲，托着臀部让正不断求饶的马娘微微离地，而后又一次挺腰，破开最深层缠绕封锁的层叠膣肉，顶到巫女神圣的子宫颈上，摩擦，旋转。',
      ]);
      await kitaru.say_and_wait('去了～要去了～❤️');
    } else {
      await you.print_and_wait([
        '得益于那份身高差的缘故，被 ',
        callname,
        ' 架着腿抽插的 ',
        y_call_k,
        '，脚尖只能勉强的碰到地面。',
      ]);
      await kitaru.say_and_wait(['抱，抱紧我❤️。']);
      await you.print_and_wait([
        '在请求下搂紧了 ',
        y_call_k,
        ' 的腰，奋力的抽送着，一突入到最深处、',
        y_call_k,
        ' 就会因为腹底传来的冲击而娇媚的呻吟起来',
      ]);
      await kitaru.say_and_wait('嗯啊……哈啊啊啊……');
      await you.print_and_wait(['平日里充满元气的俏脸，此刻正布满着淫态。']);
      await you.print_and_wait([
        '架在 ',
        callname,
        ' 臂弯上的腿止不住的颤抖着，黏腻的爱液不断地自交合处流下。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '被摆成了这样困难的姿势, ',
        callname,
        ' 的下一步会怎么做呢？',
      ]);
      await kitaru.print_and_wait([
        '敏感的耳尖？翘起的臀瓣？又或是那对自己都认为下流的乳房？还是说……',
      ]);
      await kitaru.print_and_wait([
        '在下一秒双腿发软的自己就可能摔倒的现在，完全占卜不出来身后命定之人的行动呀……',
      ]);
      await kitaru.say_and_wait(['咿咿咿——呀❤️！']);
      await kitaru.print_and_wait([
        '来自 ',
        callname,
        ' 的炽热肉棒噗嗤噗嗤地连根肏进了自己的小穴。',
      ]);
      await kitaru.print_and_wait([
        '连求饶都说不出口，早已认清现状的身体本能的弯曲腰部，让臀部进一步向 ',
        callname,
        ' 的方向靠拢。',
      ]);
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait(['咿咿咿——呀❤️！']);
      await you.print_and_wait([
        '握着自己担当的双臂，不停耸动着腰，每次抽送，那摇晃的腰胯与那如同两颗蜜桃一般的臀肉就激烈撞在一起。',
      ]);
      await you.print_and_wait([
        '能跑出出色末脚的肉腿也站不稳般的痉挛着，带着十只软嫩的足趾也蜷曲起来，肉棒抽离时，爱液就会在那激烈交合之间拉出下流的银丝。',
      ]);
      await kitaru.say_and_wait('咕……唔哈……❤️');
      await you.print_and_wait([
        '可惜……看不见 ',
        y_call_k,
        ' 的脸，不过，光是听着口中漏出的声音，就能得知这家伙离高潮只差一步之遥的事实。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '好……好深、身体里……',
        callname,
        ' 的感觉……好棒',
      ]);
      await kitaru.print_and_wait([
        '微微蜷起的马耳中不断传来湿粘液体在腰胯与腿臀的缓慢撞击中沥沥淅淅的声音。',
      ]);
      await kitaru.print_and_wait(['被蹂躏的小腹中传来了令自己安心的充实感。']);
      await kitaru.print_and_wait(['稍稍快点也可以的……']);
      await kitaru.print_and_wait(['于是缠在命定之人腰上的尾巴便微微使劲。']);
      await kitaru.say_and_wait('唔诶？！！❤️哦哦……！❤️');
      await kitaru.print_and_wait([
        '快感如决堤般涌入大脑，就算想要喊着停下来也做不到，自食其果的自己只能靠在身后人的怀中被激烈的抽插着。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async suspended_congress(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait(['唔呀！']);
    await you.print_and_wait([
      '面前还沉浸在幻想中的酥麻身体被 ',
      callname,
      ' 一下子抱了起来，突然的失衡让她向前搂住了 ',
      callname,
      ' 的躯干，肉感的亮晶晶双腿也顺势锁在了 ',
      callname,
      ' 的腰侧。',
    ]);
    await kitaru.say_and_wait(['呃哦哦哦❤️！']);
    await you.print_and_wait([
      '借着重力甩动自己担当的肉体，让硬邦邦的肉棒一口气齐根没入湿漉漉的肉穴，肉棒狠狠的撞击在了子宫口，沟壑和肉棒紧密的贴合在了一起，在 ',
      y_call_k,
      ' 的身下显出浅浅的隆起。',
    ]);
    await you.print_and_wait([
      '每当肉棒要抽离时，锁在 ',
      callname,
      ' 腰侧的双腿也会挽留般的微微伸直，再伴随之后猛烈的插入变回原来的环绕。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async hug_suspended_congress(kitaru, you, callname) {
    await kitaru.print_and_wait([
      '被 ',
      callname,
      ' 掰开托起的双腿，还有以极为别扭的姿势环住他脖颈的双手。',
    ]);
    await kitaru.print_and_wait([
      '这种……像是给小孩把尿，还有可能下一秒就因为重心不稳而摔在地上的羞耻姿势……',
    ]);
    await kitaru.say_and_wait(['咕啾——❤️']);
    await kitaru.print_and_wait([
      '在肉棒插入的瞬间，自己便像是要飞出去一样，不受控制的弓起身子，可又因为重力，摇摇晃晃的落回了，以 ',
      callname,
      ' 的肉棒为支点的悬空椅子上.',
    ]);
    await kitaru.print_and_wait(['哈❤️……哈❤️这样的话。']);
    await kitaru.print_and_wait([
      '看不清 ',
      callname,
      ' 的表情，但在失重和快感双重作用下的身体，已经将那个厉害肉棒的形状记得清清楚楚了。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async ask_cowgirl(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait(['要我自己来吗？']);
    await kitaru.say_and_wait(['唔……']);
    await kitaru.print_and_wait([
      '只是望着 ',
      callname,
      ' 向上挑起的雄壮之物，自己便羞红了脸, 呼吸也变得急促了起来。',
    ]);
    await kitaru.print_and_wait(['一想到自己一会儿会骑在这上面……']);
    await you.say_and_wait([y_call_k, '？']);
    await kitaru.say_and_wait(['滋——唔？']);
    await kitaru.print_and_wait([
      '被 ',
      callname,
      ' 催促之后才发现自己的嘴角流出了涎水。',
    ]);
    await kitaru.print_and_wait(['没想到自己会这么淫乱啊。']);
    await kitaru.print_and_wait([
      '一刻也不想等待，发颤的腰部便「咚」的落了下来，微笑地俯视着身下的 ',
      callname,
      '，心领神会地用腰部做起祭礼的动作，让黏糊糊的穴肉带领着肉棒把小穴探了个遍。',
    ]);
    await kitaru.print_and_wait([
      '顺带着让自己好学的小穴又一次彻底地温习了一遍肉棒的形状。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async ask_stimulate_glans_by_virgin(kitaru, you, callname) {
    await kitaru.print_and_wait(['明明插在自己体内的肉棒还是那样硬邦邦的……']);
    await kitaru.print_and_wait([
      '但 ',
      callname,
      ' 却坏笑着的停了下来，拍了拍我的大腿。',
    ]);
    await kitaru.print_and_wait(['呜，训练员先生就这么喜欢欺负我吗？']);
    await kitaru.print_and_wait([
      '赌气拔出来……让呆在自己体内的坏家伙好好冷静一下什么的？',
    ]);
    await you.say_and_wait(['咕叽咕叽～']);
    await kitaru.print_and_wait([
      '腰部……自己的腰部怎么已经晃起来了？哈……哈啊……',
    ]);
    await kitaru.print_and_wait(['想要……']);
    await kitaru.print_and_wait([
      '赶紧催促着自己浑身发软的肌肉活动起来，命令它们配合自己侍奉起 ',
      callname,
      ' 的肉棒，毕竟，堵气拔出来什么的，可是绝对绝对的大凶啊！',
    ]);
    await kitaru.print_and_wait('白花花的屁股在湿漉漉马尾巴的伴奏下翩翩起舞。');
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   */
  async stimulate_g_spot(kitaru, you, y_call_k) {
    await you.print_and_wait([
      '继续挺腰，让胯下的肉棒向蜜穴的更深处碾去，每当龟头掠过了一处略显粗糙的软肉之后，',
      y_call_k,
      ' 就支支吾吾地颤抖起来。',
    ]);
    await kitaru.say_and_wait(['咕啊❤️～啊啊']);
    await you.print_and_wait([
      '在马娘体内横冲的肉棒妖怪就这样发现了名叫 ',
      kitaru.get_colored_name(),
      ' 的巫女弱点',
    ]);
    await kitaru.say_and_wait(['噫啊啊啊❤️～']);
    await you.print_and_wait([
      '痉挛不止的，被淫水弄的亮晶晶的丰腴双腿，因快感而绷直的马尾与双耳，连眸中的星星眼也被冒着粉光的爱心所顶掉。',
    ]);
    await you.print_and_wait([
      '不言自明，面前算得上是现人神的家伙，现在已经堕落成了一只留着口水的发情母马。',
    ]);
    await you.print_and_wait([
      '每当肉棒撞到 ',
      y_call_k,
      ' 的酥软子宫，半吐着香舌的她便会配合自己动作般的翘起臀部，放声娇吟起来。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async ask_fuck(kitaru, you, callname) {
    await kitaru.say_and_wait(['想……']);
    await kitaru.say_and_wait(['欸！']);
    await kitaru.print_and_wait([
      '立即捂住了嘴，几乎自己都不敢相信身为神社巫女的自己能说出这样的话，简直……简直像是被不知道什么东西夺舍了一样。',
    ]);
    await kitaru.print_and_wait([
      '回过神来，自己丰腴柔软的双腿已经自觉地分了开来，黏腻的穴瓣间拉起了浓厚的银线，入口处还正寂寞地一张一合。',
    ]);
    await kitaru.print_and_wait([
      '唔……真是色情呢，自己的身体，但是，有着厉害肉棒的 ',
      callname,
      ' 能理解的吧……',
    ]);
    await kitaru.say_and_wait(['插进来吧……']);
    await kitaru.print_and_wait([
      '用右手的食指和中指稍稍用力把反射着晶莹光辉的阴唇分开，将内部正叫渴的粉嫩穴肉向 ',
      callname,
      ' 展示出来，补上了名为祈求插入这一动作的最后一块碎片。',
    ]);
    await kitaru.say_and_wait(['为了今日份的大吉……请插进来吧。']);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async cowgirl(kitaru, you, callname) {
    await kitaru.print_and_wait([
      '双手放在 ',
      callname,
      ' 的胸膛上，居高临下的盯着他的脸。',
    ]);
    await kitaru.print_and_wait(['有种自己占上风的感觉呢。']);
    await kitaru.print_and_wait([
      '那么，接下来该怎么让身下这个总是喜欢欺负自己的家伙乖乖求饶呢？',
    ]);
    await kitaru.print_and_wait(['左右？上下？还是转圈似的扭腰？或者……']);
    await kitaru.say_and_wait(['咿呀！～❤️']);
    await kitaru.print_and_wait([
      '趁着别人思考的时候突然动起来什么的，太犯规了呀！',
    ]);
    await kitaru.print_and_wait(['不要动！呃❤️！明明……❤️咿呀～❤️我在上面❤️！']);
    await kitaru.say_and_wait(['唔呃～好棒❤️！']);
    await kitaru.print_and_wait(['失态的呻吟从张开的嘴中不断漏出。']);
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async stimulate_glans_by_virgin(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '总是让 ',
        callname,
        ' 单方面努力的话，感觉有些稍稍愧疚呢。',
      ]);
      await kitaru.print_and_wait([
        '毕竟，两人三足的法则，就算是在做爱这一对于现役赛马娘和训练员来说是背德的行为也一样吧。',
      ]);
      await kitaru.say_and_wait(['哈……❤️']);
      await kitaru.print_and_wait([
        '在充血胀的硬邦邦肉棒下一次撞进来的时候试着深呼吸，「啾」的让缠人的小穴吮吸起顶到子宫颈的充血龟头。',
      ]);
      await kitaru.say_and_wait(['呃啊啊啊啊……']);
      await kitaru.print_and_wait([
        '正缠绞着灼热肉棒的穴内，传来了几乎要让自己瞬间昏过去的快感',
      ]);
      await kitaru.print_and_wait([
        '肉棒跳的更厉害了呢，所以，我也算帮上忙了吧，',
        callname,
        '。',
      ]);
    } else if (era.get(`tcvar:${you.id}:接近高潮`)) {
      await kitaru.print_and_wait(['不妙不妙不妙……']);
      await kitaru.print_and_wait([
        '本来只是想试着配合上 ',
        callname,
        ' 节奏的自己, 却颇为掉链子的忘了深处的穴肉会有多么的敏感。',
      ]);
      await kitaru.print_and_wait([
        '似乎是察觉到了缠绞力度的放松，抵在了子宫口前的龟头对准前方挺起的软肉开始了蛮横无礼的冲刺。',
      ]);
      await kitaru.print_and_wait([
        '方才还能时不时反攻几下肉棒的穴肉，被粗翘滚烫的肉棒完全碾开，粗大的龟头狠狠撞在了自己的子宫颈上。',
      ]);
      await kitaru.print_and_wait(['去了……要去了……']);
    } else {
      await kitaru.print_and_wait(['深呼吸……深呼吸……']);
      await kitaru.print_and_wait([
        '想要尽力配合, 但自己都不知道有没有完整的做完一次动作, 只要塞在体内的肉棒稍稍抽动一下，被快感塞满的大脑就会一片空白, 从嘴里咿咿呀呀的吐出下流的呻吟。',
      ]);
      await kitaru.print_and_wait([
        '不过，听着噗嗤噗嗤的下流声响，黏糊糊的小穴应该有好好的服侍 ',
        callname,
        ' 的肉棒吧.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_stimulate_g_spot(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(
        '能感受到自己穴内的性感带被肉棒蹭过时，让自己上瘾般的快感。',
      );
      await kitaru.say_and_wait('所以……');
      await kitaru.say_and_wait('拜托了……');
      await kitaru.print_and_wait(
        `身为${kitaru.uma_sex_title}，这也太丢人了不是吗……`,
      );
      await kitaru.print_and_wait([
        '但是完全没法忍耐住——流着口水在 ',
        callname,
        ' 耳边轻喃着乞求快感。',
      ]);
      await kitaru.print_and_wait('因为就是很想要啊——');
      await kitaru.print_and_wait(
        '想要子宫的里面，被厉害地肉棒给，厉害地，粗暴地，用力地……',
      );
      await kitaru.print_and_wait('「啾——的一下顶到最里面❤️');
      await kitaru.print_and_wait('让身体「咻」地蜷起来——');
      await kitaru.print_and_wait('变成世界上最舒服的小穴——');
      await kitaru.print_and_wait(
        `所以拜托了……在那之后，就算之后被白兴大人怪罪也无所谓了`,
      );
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait('哈❤️啊啊～');
      await kitaru.print_and_wait([
        kitaru.get_colored_name(),
        ' 的身体破廉耻的在 ',
        callname,
        ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
      ]);
      await kitaru.print_and_wait(
        '以往元气十足的脸上此时只剩下被情欲完全支配的阿嘿颜，粉唇也大张成惊人的O型，支离破碎的表白不停地从口中流出。',
      );
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait([
          '喜欢 ',
          callname,
          '……最喜欢 ',
          you.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await kitaru.say_and_wait(['肉棒……喜欢……坏，要坏掉了❤️']);
      }
      await kitaru.print_and_wait([
        '可能对白兴大人还是有一些羞愧吧，但这份羞愧很快就被当成燃料，用来鼓动着身体用更加下流的扭动去迎合肉棒。',
      ]);
      await kitaru.say_and_wait(['变得更粗鲁了呢，', callname, '。'], true);
      await kitaru.say_and_wait(
        '还有那能让身为兼具占卜师和巫女这二重神秘身份的自己堕落成发情母马的，如涌泉般层层叠叠的快感。',
        true,
      );
      await kitaru.say_and_wait(
        '不……或许简单的预言什么的，大概还是能做到吧？像是自己很快就要高潮的事实。',
        true,
      );
      await kitaru.say_and_wait('去了……快要……去了……');
      await kitaru.say_and_wait('唔呃嗯嗯嗯嗯嗯❤️❤️❤️……');
    } else {
      await kitaru.say_and_wait('慢，啊哈❤️，慢一点❤️～!');
      await kitaru.print_and_wait(
        '尽管已经如此乞求了，肉棒依旧能用短促而精准地命中着自己的弱点，浑浊眼瞳在敏感带带来的快感下泛起几乎将橙色驱尽的粉红。',
      );
      await kitaru.print_and_wait([
        '被驯化的完美贴合 ',
        callname,
        ' 形状的蜜穴，报恩般的而用柔和的收缩蠕动来取悦着 ',
        callname,
        ' 那根为自己的身体带来无尽快感的火热肉杆。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async common_continue_fucking(kitaru, you, callname) {
    if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait('哈❤️啊啊～');
      await kitaru.print_and_wait([
        kitaru.get_colored_name(),
        ' 的身体破廉耻的在 ',
        callname,
        ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
      ]);
      await kitaru.print_and_wait(
        '以往元气十足的脸上此时只剩下被情欲完全支配的阿嘿颜，粉唇也大张成惊人的O型，支离破碎的表白不停地从口中流出。',
      );
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait([
          '喜欢 ',
          callname,
          '……最喜欢 ',
          you.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await kitaru.say_and_wait(['肉棒……喜欢……坏，要坏掉了❤️']);
      }
      await kitaru.print_and_wait([
        '可能对白兴大人还是有一些羞愧吧，但这份羞愧很快就被当成燃料，用来鼓动着身体用更加下流的扭动去迎合肉棒。',
      ]);
      await kitaru.say_and_wait(['变得更粗鲁了呢，', callname, '。'], true);
      await kitaru.say_and_wait(
        '还有那能让身为兼具占卜师和巫女这二重神秘身份的自己堕落成发情母马的，如涌泉般层层叠叠的快感。',
        true,
      );
      await kitaru.say_and_wait(
        '不……或许简单的预言什么的，大概还是能做到吧？像是自己很快就要高潮的事实。',
        true,
      );
      await kitaru.say_and_wait('去了……快要……去了……');
      await kitaru.say_and_wait('唔呃嗯嗯嗯嗯嗯❤️❤️❤️……');
    } else {
      await kitaru.print_and_wait([
        '大概是带着些抖M要素的自己早就期望着被训练员这样支配吧？',
      ]);
      await kitaru.say_and_wait(['啊哈……❤️哈呼哈……']);
      await kitaru.print_and_wait([
        '收紧的穴肉则又被无情的撑开，接踵而来的快感已经让平时能记住复杂祷词的脑袋一片空白了。',
      ]);
      await kitaru.say_and_wait(['哈……哈……哈❤️']);
      await kitaru.print_and_wait([
        '巫女圣洁的俏脸在肉棒大人的进攻下又露出了谄媚的笑容。',
      ]);
      await kitaru.say_and_wait(['肉棒……大人？'], true);
      await kitaru.say_and_wait(['这么叫……白兴大人一定会怪罪的吧？'], true);
      await kitaru.print_and_wait([
        '但发情栗毛马娘巫女散发着下流气味的湿漉漉发热身体还是诚实的往 ',
        callname,
        ' 那靠的更近了一点，',
      ]);
      await kitaru.say_and_wait(['就算，被当成飞机杯使用也没关系的……']);
      await kitaru.print_and_wait([
        '破廉耻的说出了这样的话语，毕竟，比起不知道什么时候会降下来的神罚，果然还是现在能让自己晕乎乎的快感更重要一点。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_insult(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.say_and_wait('想被辱骂？');
      await you.print_and_wait([
        '从圣洁的',
        kitaru.uma_sex_title,
        '巫女那里得到了这样奇怪的请求。',
      ]);
      await kitaru.say_and_wait([
        '我，因为那个……被 ',
        callname,
        ' 粗暴对待的感觉，很不错呢……',
      ]);
      await you.print_and_wait([
        '看来自家担当果然是抖M呢，于是淫荡巫女，肉便器，飞机杯占卜师之类不痛不痒的侮辱话语骂向了面前的栗毛',
        kitaru.uma_sex_title,
        '。',
      ]);
      await you.print_and_wait([
        '看',
        kitaru.get_colored_actual_name(),
        '似乎颇为受用的样子，之后要不要试试更恶劣一点的措辞呢？',
      ]);
    } else {
      await kitaru.print_and_wait([
        '耳边响着各种愈发恶劣的辱骂话语，但更令自己感到有些后怕的，反而是愈发敏感，愈发能从这种行为中感到快乐的自己。',
      ]);
      await kitaru.say_and_wait(['这种感觉，不想，不想停止……'], true);
      await kitaru.say_and_wait(
        ['哈，自己，自己的确是个无可救药的，抖M', kitaru.uma_sex_title, '……'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_k 玩家对待兼福来的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_anal(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(['如果 ', y_call_k, ' 这么想被欺负的话……']);
      await you.print_and_wait([
        '手掌在 ',
        y_call_k,
        ' 圆润的臀部上轻轻磨蹭了两下，让',
        kitaru.sex,
        '的身躯在怀里微微颤抖，说不上是因为害怕还是由于激动。',
      ]);
      await you.print_and_wait(['啪！']);
      await you.print_and_wait([
        '逐渐变得滚烫的臀峰在 ',
        you.get_colored_name(),
        ' 还未从酥麻感中恢复的手掌上轻轻蹭着，看来很喜欢呢。',
      ]);
    } else {
      await kitaru.say_and_wait(['好疼……但是，好喜欢……'], true);
      await kitaru.say_and_wait(['啪啪地打着自己的屁股。'], true);
      await kitaru.say_and_wait(['偶尔又轻轻揉搓着几个来回。'], true);
      await kitaru.say_and_wait(
        ['对逐渐分不清了疼痛还是快乐的自己来说，都是最棒的奖励呢……'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 待兼福来对玩家的称呼
   */
  async stimulate_sleep_glans_by_virgin(kitaru, you, callname) {
    await kitaru.print_and_wait(['哈啊……哈……']);
    await kitaru.print_and_wait([
      '勉强能适应呢，毕竟，',
      callname,
      ' 的肉棒，是还没睡醒的样子。',
    ]);
    await kitaru.print_and_wait(['这个时候的话，就该我来帮忙了吧。']);
    await kitaru.print_and_wait([
      '深呼吸，稍稍绷紧小腹，让蠕动着的小穴唤醒 ',
      callname,
      ' 的肉棒。',
    ]);
    await kitaru.say_and_wait(['唔！！！咿呀！！！']);
    await kitaru.print_and_wait([
      '被唤醒的怪物肉棒给本来还能跟上 ',
      callname,
      ' 节奏的自己带来了几乎失去意识般的快感。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ero_start(kitaru, you, callname) {
    const relation = era.get('relation:56:0');
    if (era.get('status:56:马跳Z') || era.get('status:56:超马跳Z')) {
      await kitaru.say_and_wait(['我的身体……好热啊……']);
      await era.printAndWait([
        '尽力试着自控的 ',
        kitaru.get_colored_name(),
        ' 抱膝缩在角落，粉嫩的锁骨泛着发情的绯红。',
      ]);
      await kitaru.say_and_wait(['哈啊❤️～哈❤️']);
      await era.printAndWait([
        '张开的双唇将香舌暴露在空中，翕动的鼻尖不断吸入着 ',
        you.get_colored_name(),
        ' 的气味。',
      ]);
      await kitaru.say_and_wait(['想要❤️想要❤️想要❤️想要❤️']);
      await era.printAndWait([
        '终于，无法抗拒药性的 ',
        kitaru.get_colored_name(),
        ' 踉踉跄跄的站了起来，衣物一件接着一件落在地上。',
      ]);
      if (kitaru.sex_code - 1) {
        await era.printAndWait([
          '那对奶白色的团子压在了 ',
          you.get_colored_name(),
          ' 的身上，隔着衣服也能感受到 ',
          kitaru.get_colored_name(),
          ' 的硬邦邦乳尖，炽热的吐息从耳畔传来。',
        ]);
      }
      await kitaru.say_and_wait(['已经……极限了，', callname, '，来吃掉我吧。']);
    } else if (era.get('status:56:发情')) {
      await kitaru.say_and_wait(['来做吧？']);
      await kitaru.say_and_wait(['明明……哈❤️好热啊……']);
      await era.printAndWait([
        '由于发情期而变得主动的 ',
        kitaru.get_colored_name(),
        '，自顾自的脱起了汗湿的衣服。',
      ]);
      await era.printAndWait([
        '红润的嘴唇不停半张半合，吐出白雾般的一股股雾气，让催情的荷尔蒙充斥着整个房间。',
      ]);
      await kitaru.say_and_wait(['好热啊……']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 主动褪去衣物, 含着娇媚气息的体液不断的流下来, 啪嗒啪嗒地落在木地板上。',
      ]);
      await era.printAndWait([
        '随后目光涣散的软倒在了 ',
        you.get_colored_name(),
        ' 的怀里, 栗色的马尾也缠上了 ',
        you.get_colored_name(),
        ' 的大腿',
      ]);
      await kitaru.say_and_wait(['帮帮我吧……', callname, '。']);
    } else if (era.get('flag:当前位置') === location_enum.restroom) {
      if (relation < 400) {
        await kitaru.say_and_wait(['唔……那个，', callname, '？']);
        await era.printAndWait([
          '被 ',
          you.get_colored_name(),
          ' 强硬抱在怀里的 ',
          kitaru.get_colored_name(),
          '，轻轻颤抖着，不过耳朵倒是好懂地一摆一摆的。',
        ]);
        await kitaru.say_and_wait([
          '要在这里做吗……万一被风纪委员',
          kitaru.couple_title,
          '发现的话？',
        ]);
        await kitaru.say_and_wait(['咕唔！啾❤️……啾啊❤️']);
        await era.printAndWait([
          '回答 ',
          kitaru.get_colored_name(),
          ' 的是 ',
          you.get_colored_name(),
          ' 的嘴唇。',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '手也不安分的伸进了自己担当的裙子里，揉捏着两腿间的软肉，直到把',
            kitaru.sex,
            '的内裤也弄的湿漉漉的。',
          ]);
        }
        await era.printAndWait([
          '被勾起了情欲的 ',
          kitaru.get_colored_name(),
          ' 眼角含泪的靠在了 ',
          you.get_colored_name(),
          ' 的怀里。',
        ]);
        await kitaru.say_and_wait(['快点开始吧……', callname, ' ❤️']);
      } else {
        await era.printAndWait([
          '对上了 ',
          you.get_colored_name(),
          ' 目光的 ',
          kitaru.get_colored_name(),
          ' 像是突然明白了什么，栗色的尾巴也停止了摆动',
        ]);
        await kitaru.say_and_wait(['是……想要做了吗？']);
        await kitaru.say_and_wait(['用那个眼神，不用占卜也能猜到啦！']);
        await kitaru.say_and_wait(['唔, 明明还在学校里呢, 要是被发现的话……']);
        await era.printAndWait(['咚！']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '嘴上抱怨着, 但是校服的裙子却跌落在了地面，然后又是同样代表着上衣被脱下的闷声……最后, 随着运动内衣的褪下，原本被裹住的乳球一下子跳了出来。',
          ]);
          await era.printAndWait([
            '在那对多了层粉色的丰盈乳房上，乳尖因期待而充血挺立着。',
          ]);
        }
        await kitaru.say_and_wait(['哈啊❤️～哈❤️……']);
        await era.printAndWait([
          '双臂轻轻的环住了 ',
          you.get_colored_name(),
          ' 的脖子, ',
          kitaru.get_colored_name(),
          ' 用变得湿润的星星瞳望向 ',
          you.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait([callname, '……让我变得舒服起来吧']);
      }
    } else if (era.get('flag:当前位置') === location_enum.home) {
      if (relation < 400) {
        await era.printAndWait([
          '从背后靠近正研究着如何在 ',
          you.get_colored_name(),
          ' 家里摆放开运物品的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait(['呀啊……']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '双手伸进 ',
            kitaru.get_colored_name(),
            ' 的衣服里，掠过那对饱满的乳肉，让橙发少女小声的抗议着。',
          ]);
          await kitaru.say_and_wait(['至少，先让我把这个放好吧……']);
          await era.printAndWait([
            '但不安分的手继续向下探去，隔着肚皮轻轻按压着 ',
            kitaru.get_colored_name(),
            ' 正渴求着更多刺激的子宫。',
          ]);
        }
        await era.printAndWait([
          '于是 ',
          kitaru.get_colored_name(),
          ' 便会下意识后退，让自己的臀缝隔着裤子主动的顶上了 ',
          you.get_colored_name(),
          ' 的肉棒。',
        ]);
        await kitaru.say_and_wait(['……硬邦邦的。']);
        await kitaru.say_and_wait(['要现在做吗？']);
        await kitaru.say_and_wait(['感觉 ', callname, ' 也忍的很辛苦呢……']);
      } else {
        await era.printAndWait([
          '从背后搂住正研究着如何在 ',
          you.get_colored_name(),
          ' 家里摆放开运物品的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait(['唔呵呵！！！']);
        await kitaru.say_and_wait([
          callname,
          ' 是打算对我做什么呢……唔～❤️啾～❤️',
        ]);
        await era.printAndWait([
          '早有预料般地侧过头来，仰头堵上了 ',
          you.get_colored_name(),
          ' 的嘴唇。',
        ]);
        await era.printAndWait([
          '二人的唇齿舌立即激烈地纠缠在一起，发出令空气不忍直视的淫靡水声。',
        ]);
        await kitaru.say_and_wait(['唔～❤️……啾啊❤️～啾……嗯❤️']);
        await era.printAndWait([
          '突然，',
          kitaru.get_colored_name(),
          ' 扣住了 ',
          you.get_colored_name(),
          ' 的手，引着 ',
          you.get_colored_name(),
          ' 摸向了',
          kitaru.sex,
          '的两腿间，顺带着扯下了内裤。',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '连大腿根部都有泛着光泽的水渍，肉眼可见的湿透了，',
          ]);
        }
        await kitaru.say_and_wait(['嗯……反正已经写了外宿申请的，所以～❤️']);
        await kitaru.say_and_wait(['让我……变得更加舒服吧～❤️']);
      }
    } else if (
      era.get('love:56') >= 50 &&
      era.get('flag:当前位置') !== location_enum.home
    ) {
      await kitaru.say_and_wait([callname, '，要做了吗？']);
      await era.printAndWait([
        '被 ',
        you.get_colored_name(),
        ' 搂在怀里的 ',
        kitaru.get_colored_name(),
        ' 红着脸说道，马耳一摆一摆的拍在你的脸上。',
      ]);
      await you.say_and_wait(['讨厌了吗？']);
      await kitaru.say_and_wait([
        '欸！并没有！！！绝对，绝对不会讨厌 ',
        you.get_colored_name(),
        ' 的！',
      ]);
      await era.printAndWait([
        '轻轻地摸了',
        kitaru.sex,
        '的脸、拍了拍',
        kitaru.sex,
        '的头发，让因害怕被 ',
        you.get_colored_name(),
        ' 抛弃的 ',
        kitaru.get_colored_name(),
        ' 冷静了下来。',
      ]);
      await you.say_and_wait(['……要吃掉你了哦']);
      await era.printAndWait([
        '软倒在了 ',
        you.get_colored_name(),
        ' 怀里的 ',
        kitaru.get_colored_name(),
        ' 眼神湿润地着看着 ',
        you.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait(['嗯……']);
      await kitaru.say_and_wait(['……请 ', callname, ' 随意地开动吧。']);
    }
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async orgasm_standing(kitaru, you) {
    if (era.get('nowex:0:阴茎高潮') > 0 && era.get('nowex:56:膣内精液') > 0) {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 能感到在体内横冲直撞的肉棒也一跳一跳的做好了发射的准备。',
      ]);
      await era.printAndWait([
        '箍紧正双眼上翻的 ',
        kitaru.get_colored_name(),
        ' 的腰臀，肉棒抵着因发情而下垂的子宫灌射着精液，腔内的穴肉也吮吸般刺激着龟头。',
      ]);
      await kitaru.say_and_wait('～唔呃嗯嗯嗯嗯嗯！！！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 原本充满元气的脸庞双眼翻白，唇瓣此刻大大的张开着，吐出那软嫩的香舌。',
      ]);
      await era.printAndWait(['浓郁的白精的自交合处滴答滴答落在了地上。']);
    } else {
      await kitaru.print_and_wait(['咕齁齁齁齁～！！！']);
      await era.printAndWait([
        '达到了高潮的 ',
        kitaru.get_colored_name(),
        '，痉挛的趾尖连维持平衡都做不到。',
      ]);
      await era.printAndWait([
        '只得进一步抱住了还在不断抽送着肉棒的 ',
        you.get_colored_name(),
        ' 喉咙中低吟着如同求饶般的呜呜声。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async orgasm_hug_standing(kitaru, you) {
    if (era.get('nowex:0:阴茎高潮') > 0 && era.get('nowex:56:膣内精液') > 0) {
      await era.printAndWait([
        '发射边缘的肉棒完全拔出，而后微微抬起那对肉臀，调整角度。',
      ]);
      await era.printAndWait([
        '肉棒长驱直入的碾过布满褶皱的穴壁，抵住 ',
        kitaru.get_colored_name(),
        ' 的宫颈，倾吐起精液。',
      ]);
      await kitaru.say_and_wait('～～唔咕哦，好烫……好……厉害……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 柔美的身体，几乎被 ',
        you.get_colored_name(),
        ' 拉拽成一个弓形，头部高高扬起，而后靠在了 ',
        you.get_colored_name(),
        ' 的怀中，被挤压而流出的精液顺着大腿流下，弄的下垂的栗色马尾上也沾了不少。',
      ]);
    } else {
      await kitaru.print_and_wait(['呀……呀啊❤️']);
      await era.printAndWait([
        '不受控制的弓起身子，仰起了天鹅般的白皙脖颈，向后靠在你的怀中。',
      ]);
      await era.printAndWait([
        '被挤压而流出的爱液顺着大腿流下，弄的栗色马尾也多了不少湿漉漉的深色痕迹。',
      ]);
    }
  },
  /**
   * 获得欢愉刻印
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {number} level 刻印等级
   */
  async mark_pleasure(kitaru, you, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait('呀啊！！！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 移开了视线，在 ',
            you.get_colored_name(),
            ' 询问能否继续时点了点头。',
          ]);
          await era.printAndWait(
            '配合着扭起腰，品味着自己一人时无法体验到的快感。',
          );
        } else {
          await kitaru.say_and_wait('唔唔！哈啊哈啊……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 歪着头沉思了一会。',
          ]);
          await kitaru.say_and_wait('为什么……好舒服。');
        }
        break;
      case 2:
        if (love >= 75) {
          await kitaru.say_and_wait([
            '哈啊啊！！！',
            you.get_colored_actual_name(),
          ]);
          await era.printAndWait([
            '在高潮中大声的叫出了 ',
            you.get_colored_name(),
            ' 的名字，平日偶尔能在 ',
            kitaru.get_colored_name(),
            ' 身上感受到少许来自其为巫女的圣洁。',
          ]);
          await era.printAndWait('此刻彻底荡然无存。');
        } else {
          await kitaru.say_and_wait('哈……快！快点！');
          await era.printAndWait([
            '尽管因为激烈绝顶而颤抖不止，逐渐被快感支配的 ',
            kitaru.get_colored_name(),
            ' 对 ',
            you.get_colored_name(),
            ' 发出了继续袭击的请求。',
          ]);
        }
        break;
      case 3:
        if (love >= 75 && era.get('tcvar:0:阴茎接触部位')?.owner === 56) {
          await kitaru.say_and_wait('肉棒……再激烈些……肉棒大人！！！');
          await era.printAndWait([
            '随着性爱带来的快感逐步覆写完 ',
            kitaru.get_colored_name(),
            ' 的意识。',
          ]);
          await era.printAndWait([
            kitaru.uma_sex_title,
            '口中嚷嚷着的淫语，说明了白兴大人的彻底失败。',
          ]);
        } else {
          await kitaru.say_and_wait('唔啊啊！！！');
          await era.printAndWait([
            '被快感支配的 ',
            kitaru.get_colored_name(),
            ' 失神望着不知待在哪里的神明。',
          ]);
          await era.printAndWait([
            '从嘴里模糊不清的恳求来看，身体完全屈服的',
            kitaru.sex,
            '此时的祈祷对象已经变成了给',
            kitaru.sex,
            '带来如此快感的 ',
            you.get_colored_name(),
            ' 了。',
          ]);
        }
    }
  },
  /**
   * 获得同心刻印
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {number} level 刻印等级
   */
  async mark_meek(kitaru, you, level) {
    switch (level) {
      case 1:
        await kitaru.say_and_wait('咿啊～！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 靠在了 ',
          you.get_colored_name(),
          ' 的身上，任凭摆布。',
        ]);
        await era.printAndWait('面泛春光，娇躯一颤一颤地跳动着。');
        break;
      case 2:
        era.println();
        await kitaru.say_and_wait('呀！！！');
        await kitaru.say_and_wait('不，没事～命定之人请继续吧！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 那蒙上了层水雾的橙色双眸注视着 ',
          you.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '偶尔触碰到',
          kitaru.sex,
          '的敏感带时，',
          kitaru.sex,
          '便会配合发出可爱的叫声。',
        ]);
        break;
      case 3:
        await era.printAndWait([
          '闭上了眼睛的 ',
          kitaru.get_colored_name(),
          ' 将手臂环在 ',
          you.get_colored_name(),
          ' 的脖子上，而后稍稍踮起了脚尖，让双唇贴着 ',
          you.get_colored_name(),
          ' 的耳朵。',
        ]);
        await kitaru.say_and_wait('主人……');
        await kitaru.say_and_wait('嘿嘿，命定之人喜欢这个称呼吗？');
        await kitaru.say_and_wait('那么，主人接下来把小福玩坏也没事哦！');
    }
  },
  /**
   * 获得苦痛刻印
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {number} level 刻印等级
   */
  async mark_pain(kitaru, you, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait('哈啊！好疼！！！');
          await kitaru.say_and_wait('没关系的……');
          await kitaru.say_and_wait('只是希望能再温柔一点……');
        } else {
          await kitaru.say_and_wait('呜……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的表情因为疼痛而变得扭曲，但',
            kitaru.sex,
            '只是尽力咬紧牙关，漏出些许悲鸣。',
          ]);
        }
        break;
      case 2:
        if (love >= 75) {
          era.println();
          await kitaru.say_and_wait('咿啊～！？');
          await kitaru.say_and_wait('我是有些抖M啦……但这实在有些过分了吧！？');
        } else {
          await kitaru.say_and_wait('咿啊～！？');
          await kitaru.say_and_wait('白兴大人……救救我……');
        }
        break;
      case 3:
        if (love >= 75) {
          await kitaru.say_and_wait('不要！不要啊！！！');
          await kitaru.say_and_wait('我不想……我不想命定之人变成这样子……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的身体因为疼痛而颤抖不止，眼泪啪嗒啪嗒的滴落下来。',
          ]);
        } else {
          await kitaru.say_and_wait('……');
          await era.printAndWait([
            '如人偶般任凭 ',
            you.get_colored_name(),
            ' 的摆布，这位名叫 ',
            kitaru.get_colored_name(),
            ' 的赛',
            kitaru.uma_sex_title,
            '正再次尝试将自己的记忆封闭起来。',
          ]);
        }
    }
  },
  /**
   * 获得羞耻刻印
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {number} level 刻印等级
   */
  async mark_shame(kitaru, you, level) {
    switch (level) {
      case 1:
        await kitaru.say_and_wait('呜……请，请继续吧……');
        await era.printAndWait([
          '欢爱过程中的 ',
          kitaru.get_colored_name(),
          ' 试图用手蒙住自己的眼睛，看来',
          kitaru.sex,
          '对这样的行为还是有点害羞。',
        ]);
        break;
      case 2:
        await kitaru.say_and_wait('唔……还是有点害羞……');
        await kitaru.say_and_wait('要是被白兴大人看到话。');
        break;
      case 3:
        await kitaru.say_and_wait('啊啊啊，无所谓了……');
        await era.printAndWait([
          '自暴自弃般地说出了这番话，',
          kitaru.get_colored_name(),
          ' 索性配合起 ',
          you.get_colored_name(),
          ' 愈发大胆的动作来。',
        ]);
        await kitaru.say_and_wait('我……真是败廉耻的行为。');
    }
  },
  /**
   * 获得反抗刻印
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} callname 待兼福来对玩家的称呼
   * @param {number} level 刻印等级
   */
  async mark_hate(kitaru, you, callname, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait(['这，这就是 ', callname, ' 喜欢的吗？']);
          await kitaru.say_and_wait('稍稍有点过分了呢……');
        } else {
          await kitaru.say_and_wait('啊……我可以拒绝吗？');
          await kitaru.say_and_wait([callname, '，我偶尔也是会生气的哦！']);
        }
        break;
      case 2:
        if (love >= 75) {
          await kitaru.say_and_wait([
            '那个……',
            callname,
            '，是有些讨厌我了吗？',
          ]);
          await kitaru.say_and_wait([
            '我，我会好好听话的……告诉我，告诉我怎么取悦 ',
            callname,
            ' 吧……',
          ]);
        } else {
          await kitaru.say_and_wait('是这样吗？');
          await era.printAndWait([
            '原本琥珀般温暖的眼眸变得冰冷，锐利的十字星审视着 ',
            you.get_colored_name(),
            '。',
          ]);
        }
        break;
      case 3:
        if (love >= 75) {
          await kitaru.say_and_wait('命定之人……');
          await kitaru.say_and_wait([
            '……',
            kitaru.elder_sibling_sex_title,
            '，我……',
          ]);
          await kitaru.say_and_wait('我该怎么办……');
          await era.printAndWait('嵌着星星的琥珀色眼眸，此刻黯淡无光。');
        } else {
          await kitaru.say_and_wait('一定要这样吗？');
          await era.printAndWait([
            '一瞬间，宛如被神明凝视般的压力降临到了 ',
            you.get_colored_name(),
            ' 的身上。',
          ]);
          await kitaru.say_and_wait(
            '命定之人……虽然现在觉得这个称呼有些恶心了。',
          );
          await kitaru.say_and_wait(
            '但多少还算是占卜的结果……所以，接下来能不要这么对我吗？',
          );
        }
    }
  },
  /**
   * 获得淫纹刻印
   * @param {CharaTalk} kitaru 待兼福来
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} callname 待兼福来对玩家的称呼
   * @param {number} level 刻印等级
   */
  async mark_ero(kitaru, you, callname, level) {
    switch (level) {
      case 1:
        await era.printAndWait(
          '小腹上那个繁复复杂的图纹，显示出了卵子的活动轨迹……',
        );
        await era.printAndWait(
          '冒着粉红亮光的纹路，暗示主人身份般绘出了类似神道教的鸟居的镂空。',
        );
        await kitaru.say_and_wait(['没想到 ', callname, ' 还会这个……']);
        break;
      case 2:
        await kitaru.say_and_wait('唔……纹路变得更加复杂了呢……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 沉默地看着小腹上坐落于子宫位置的鸟居周围的纹饰……',
        ]);
        await kitaru.say_and_wait('不知道白兴大人会怎么想。');
        break;
      case 3:
        await era.printAndWait(
          '更加复杂的形状，添加了显示出怀孕率和受孕的功能……',
        );
        await era.printAndWait([
          '被神选中的巫女抚摸着脐下的位置，自觉的对 ',
          you.get_colored_name(),
          ' 张开了双腿。',
        ]);
        await era.printAndWait(
          '能拉出丝线的小穴随着呼吸间闪烁的淫纹，有节奏的张合着。',
        );
        await kitaru.say_and_wait('哈……哈……');
        await era.printAndWait([
          '冒着粉光的眸子，呆滞地看着 ',
          you.get_colored_name(),
          '。',
        ]);
    }
  },
};
