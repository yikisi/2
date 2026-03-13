/**
 * @file 调教指令 - 强奸性交系
 * @author ALEX
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');
const EroRapedFucking = require('#/event/ero/common/rape/raped-fucking');

const { get_random_entry } = require('#/utils/list-utils');

const {
  get_colored_body_hair,
  get_colored_hair,
  get_skin_color,
} = require('#/data/info-generator');

const skin_color_desc = ['象牙白', '白皙', '红润', '浅褐色'];

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function continue_fucking_common(attacker, defender) {
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
          sys_get_colored_callname(attacker.id, defender.id),
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
            color: get_skin_color(defender.id),
            content:
              skin_color_desc[era.get(`cflag:${defender.id}:肤色深度`) + 1],
          },
          '的躯体颤抖，扭捏。',
        ]);
        await defender.say_and_wait(['呜，呜啊……']);
        await defender.print_and_wait([
          '明明身体最需要的就是挣脱 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 的力量，却在快感的驱使下将仅剩的力量用于蜷缩脚趾。',
        ]);
        await defender.print_and_wait([
          '被强暴被侵犯的感觉和被爱抚被玩弄的快感，正将自己的双腿双脚乃至全身逐渐拉低到了一摊追求快乐的雌肉的水准。',
        ]);
        await defender.say_and_wait(['哈啊！']);
        await defender.print_and_wait(['听见自己发出了毫无廉耻的呻吟声。']);
      },
    ];
    if (era.get(`cflag:${defender.id}:种族`)) {
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
          sys_get_colored_callname(attacker.id, defender.id),
          ' 意识到了自己为赛跑而经受锻炼的柔韧身躯正是此刻交合时最好的炮架。',
        ]);
      });
    }
    await get_random_entry(message)();
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_missionary(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait('人渣！离我远点，滚啊！');
    await defender.print_and_wait([
      '试着抬起脚踢出，却被轻易的抓住了脚腕朝上抬起。',
    ]);
    if (era.get(`cflag:${defender.id}:种族`) > 0) {
      await defender.print_and_wait([
        '迫使自己露出了被',
        get_colored_body_hair(defender.id),
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
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_standing(attacker, defender, hook) {
  if (hook.arg) {
    if (era.get(`cflag:${defender.id}:种族`) > 0) {
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
      sys_get_colored_callname(attacker.id, defender.id),
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
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_standing(attacker, defender, hook) {
  if (hook.arg) {
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
    if (era.get(`cflag:${defender.id}:种族`) > 0) {
      await defender.print_and_wait([
        '这种姿势，这种能让肉茎完全贯穿着自己的小穴的姿势，对于赛马娘来说实在是太犯规了啊！连',
        get_colored_body_hair(defender.id),
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
  } else {
    await continue_fucking_common(attacker, defender);
  }
}
/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_doggy_style(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '拉着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的双臂，稍稍一用力就让',
      defender.sex,
      '被迫像是一只母狗一样翘着臀跪在地上。',
    ]);
    await attacker.print_and_wait([
      '试图反抗的',
      era.get(`cflag:${defender.id}:种族`) ? '母马' : '雌性',
      '难耐的扭动着臀部想要逃避，可却又像是在主动诱惑着玩弄。',
    ]);
    await attacker.print_and_wait([
      '腰部往前一撞，肉棒不容阻挡地塞入了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的小穴内。',
    ]);
    await defender.say_and_wait(['咿啊啊啊❤️！']);
    await attacker.print_and_wait([
      '像是触电一般弓起了腰，',
      get_colored_hair(defender.id),
      '的发丝随之晃动。',
    ]);
    if (era.get(`cflag:${defender.id}:种族`) > 0) {
      await attacker.print_and_wait(['连尾巴也笔直的绷了起来……']);
    }
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_sitting(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.say_and_wait('想要逃跑吗？');
    await attacker.print_and_wait([
      '捉住了正摇摇晃晃站起来，试图逃跑的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的足胫，只是一拉就让她被迫投入了怀抱。',
    ]);
    await attacker.print_and_wait([
      '肉棒重重拍在她平坦的肚皮上，甚至能感觉到连小腹都因为惧怕而凹陷了下去。',
    ]);
    await attacker.print_and_wait(['那么，对于不乖的坏孩子当然要给予惩罚了。']);
    await defender.say_and_wait(['呜啊……拔出去啊！']);
    await attacker.print_and_wait([
      '腰肢猛然弓起，',
      era.get(`cflag:${defender.id}:种族`) ? '在赛场上久经锻炼的' : '',
      '双腿紧紧的缠上了自己的腰。',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_sitting(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.say_and_wait('很舒服吧？');
    await attacker.print_and_wait([
      '从后面贴着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' ',
      era.get(`cflag:${defender.id}:种族`) ? '立起来的马耳朵' : '的耳朵 ',
      '询问着。',
    ]);
    await defender.say_and_wait('人渣！变态！');
    await defender.say_and_wait('嗯啊啊❤️……');
    await attacker.print_and_wait([
      '断断续续的反驳被娇媚的淫叫所阻断，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 垂下的头似乎更低了一点。',
    ]);
    await attacker.print_and_wait([
      '就像是不想让自己知道，明明小穴在每次抽插的时候都会紧紧夹住的',
      era.get(`cflag:${defender.id}:种族`) ? '母马' : '雌性',
      '，究竟露出了何等的美妙表情。',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_suspended_congress(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait('不要……呜啊！？');
    await defender.print_and_wait([
      '尽管试图躲避，但还是被身后的人顺着腿弯抱起。',
    ]);
    await defender.print_and_wait([
      '柔韧的身体近乎被整个折叠，膝盖几乎被压在了肩膀上，搭在肩膀上的双腿随着肉棒抽插的动作一上一下的大幅摆动着。',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hug_suspended_congress(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '用这个姿势的话，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 整个人像是挂在自己身上一般。',
    ]);
    if (era.get(`cflag:${defender.id}:种族`) > 0) {
      await attacker.print_and_wait([
        '好处就是，肉棒能借助重力直直的顶入',
        get_colored_body_hair(defender.id),
        '马娘的深处，让双方的性器紧密相连。',
      ]);
    } else {
      await attacker.print_and_wait([
        '好处就是，肉棒能借助重力直直的顶入',
        get_colored_hair(defender.id),
        '女性的深处，让双方的性器紧密相连。',
      ]);
    }
    await defender.say_and_wait('会掉下去！……绝对会掉下去的！');
    await attacker.print_and_wait([
      '在失重和下身强烈快感的共同冲击下，身前几乎失去判断能力 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 下意识的用手臂向后环住了自己的脖颈。',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_cowgirl(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait(
      '骑跨在腰上的少女只是撑起身体，小幅度运动着臀部，甚至还用手还捂着嘴唇，试图强撑着一切正常的样子。',
    );
    await attacker.print_and_wait(['明明开始让小穴吞进去的时候都叫出了声。']);
    await attacker.print_and_wait(['那么，看来得自己这边主动点了。']);
    await attacker.print_and_wait([
      '微微托起双臀，在 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的惊呼声中向上猛挺腰身。',
    ]);
    await defender.say_and_wait(['唔啊❤️！！！']);
    await attacker.print_and_wait([
      '在 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的悲鸣声中反复重复着这一过程，挺腰、起落、磨转，香汗像下雨似的滴在胸膛上，极富有节奏的肉体碰撞声在空气中回荡。',
    ]);
  } else {
    await continue_fucking_common(attacker, defender);
  }
}

class EroRapeFucking extends EroFucking {
  /** @type {EroFucking} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedFucking(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  /** @author ALEX */
  async missionary(attacker, defender, hook) {
    await common_missionary(attacker, defender, hook);
  }

  /** @author ALEX */
  async doggy_style(attacker, defender, hook) {
    await common_doggy_style(attacker, defender, hook);
  }

  /** @author ALEX */
  async sitting(attacker, defender, hook) {
    await common_sitting(attacker, defender, hook);
  }

  /** @author ALEX */
  async hug_sitting(attacker, defender, hook) {
    await common_hug_sitting(attacker, defender, hook);
  }

  /** @author ALEX */
  async standing(attacker, defender, hook) {
    await common_standing(attacker, defender, hook);
  }

  /** @author ALEX */
  async hug_standing(attacker, defender, hook) {
    await common_hug_standing(attacker, defender, hook);
  }

  /** @author ALEX */
  async suspended_congress(attacker, defender, hook) {
    await common_suspended_congress(attacker, defender, hook);
  }

  /** @author ALEX */
  async hug_suspended_congress(attacker, defender, hook) {
    await common_hug_suspended_congress(attacker, defender, hook);
  }

  /** @author ALEX */
  async ask_cowgirl(attacker, defender, hook) {
    await common_ask_cowgirl(attacker, defender, hook);
  }

  /** @author ALEX */
  async stimulate_g_spot(attacker, defender, hook) {
    if (hook.arg) {
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
    } else {
      await continue_fucking_common(attacker, defender);
    }
  }
}

module.exports = EroRapeFucking;
