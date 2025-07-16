const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.pet_breast(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.pet_breast) {
        life_marks.pet_breast = 1;
        await attacker.print_and_wait([
          '贴在 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的后背将',
          defender.sex,
          '的身体揽入怀中，感受着',
          defender.sex,
          '的硕乳在我小臂上的重量。',
        ]);
        await attacker.print_and_wait([
          defender.get_teen_sex_title(),
          '在我怀里轻轻喘着气，缓缓扭动摩擦着包覆在',
          defender.sex,
          '乳下的手臂。',
        ]);
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '……可以哦……如果想摸的话。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的身体在我的怀抱中微微颤抖，',
          defender.sex,
          '的肌肤因兴奋而泛起一层薄汗。',
        ]);
      }
      await attacker.print_and_wait([
        '当我的手掌覆上 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的乳房时，',
        defender.sex,
        '忍不住发出一声轻喘。',
      ]);
      await defender.say_and_wait([
        '啊～',
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的乳房饱满而富有弹性，乳晕因兴奋而扩大，尖端挺立得像两颗熟成的樱桃。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 轻声呻吟着，',
        defender.sex,
        '的身体不自觉地向后贴紧着我。',
      ]);
      await attacker.print_and_wait([
        '手掌继续在',
        defender.sex,
        '的乳房上游走，感受着',
        defender.sex,
        '肌肤的柔软和温暖。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体在这样的爱抚下变得越来越敏感，每一次触碰都让',
        defender.sex,
        '颤抖不已。',
      ]);
    } else {
      await attacker.print_and_wait([
        '手指捏住 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的乳头轻轻拉扯，引得 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 发出一声惊呼。',
      ]);
      await defender.say_and_wait([
        '啊！',
        sys_get_colored_callname(defender.id, attacker.id),
        '……不要……太用力……',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的声音里带着羞涩，但身体却诚实地做出了反应，条件反射般抖动着。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的乳头变得更加硬挺，仿佛在渴求更多的爱抚。',
      ]);
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.prepare_anal) {
        life_marks.prepare_anal = 1;
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 跪趴在床上，臀部高高翘起，等待我的手掌轻轻抚上',
          defender.sex,
          '的臀瓣，引起一阵颤栗。',
        ]);
        await defender.say_and_wait(['真的吗？这里也……很……很脏的。']);
        await attacker.print_and_wait([
          '手指慢慢滑向 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的股缝，沿着那个紧闭的小口周围的褶皱打转，',
          defender.sex,
          '缓缓扭动着。',
        ]);
        await attacker.print_and_wait([
          '当我的指尖轻轻按压那个敏感的入口时，它猛地收缩，随之而来的是 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的惊呼。',
        ]);
        await defender.say_and_wait(['呜！……']);
      }
      await attacker.print_and_wait([
        '我俯下身，轻轻吻了吻 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的后颈，试图安抚',
        defender.sex,
        '的紧张。',
      ]);
      await attacker.print_and_wait([
        '然后张开',
        defender.sex,
        '的臀部，将 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那敏感可爱的后穴暴露在空气中，引得它不断抽动。',
      ]);
      await defender.say_and_wait(['不……不要……羞死了……']);
      await attacker.print_and_wait([
        '我缓缓将一根手指推入，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体猛地一颤，后穴本能地收缩，紧紧咬住入侵的手指。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的脸颊烧得通红，羞耻和快感交织在一起，让',
        defender.sex,
        '不知所措。',
      ]);
    } else {
      await attacker.print_and_wait([
        '我耐心地扩张着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的菊穴，每一步都小心翼翼，而',
        defender.sex,
        '则咬着下唇努力放松身体。',
      ]);
      await defender.say_and_wait(['嗯……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 不再遮掩喉咙里漏出的声音，随着我手指的动作慢慢摆动臀部。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的后穴随着我手指的摩挲一点点绽开，似乎在期待着更大的侵入……',
      ]);
    }
  }

  async cunnilingus(attacker, defender, hook) {
    if (defender.id !== 64 || !hook.arg) {
      return await super.cunnilingus(attacker, defender, hook);
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.cunnilingus) {
      life_marks.cunnilingus = 1;
      await defender.say_and_wait(['不要看……不要再看了。']);
      await attacker.print_and_wait([
        '这样说着的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 却只是捂住双眼，任由我在',
        defender.sex,
        '的双腿间端详摸索。',
      ]);
      await attacker.print_and_wait([
        '修剪整齐的栗色阴毛下，裹满粘液的粉色豆豆映着微光。',
      ]);
      await attacker.print_and_wait([
        '略显深色的阴唇间是已经绽开的、因兴奋而肿胀的肉色花瓣，似乎已经迈出了成熟的第一步呢。',
      ]);
      await attacker.print_and_wait([
        '是感受到我的气息了吗，花蕊微微抽动着，散发着淡淡的雌性气味。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的双腿不自主地想要合上，却在被触碰的瞬间失去所有力量，轻轻一推便又服帖地倒在一旁。',
      ]);
    }
    await attacker.print_and_wait([
      '将',
      defender.get_teen_sex_title(),
      '的花瓣张开，我用舌面扫过胀红的阴蒂，然后在肉球上用舌尖打着转。',
    ]);
    await defender.say_and_wait(['不要……啊……嗯……']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 按住我的头想要推开，但双腿已经被紧紧锁住，只能捂住面庞呜咽着。',
    ]);
    await attacker.print_and_wait([
      defender.sex,
      '的腰部上下抽动，不知是想要挣脱还是下意识迎合着我嘴里的动作。',
    ]);
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.ask_blow_job) {
        life_marks.ask_blow_job = 1;
        await defender.say_and_wait(['嗅……嗅嗅。']);
        await attacker.print_and_wait([
          '第一次答应口交的 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 跪在我的腿间，用鼻尖轻触着顶端，尝试用气味缓解不适感。',
        ]);
        await attacker.print_and_wait([
          defender.get_teen_sex_title(),
          '的鼻息拂过血脉崩张的根部，兴奋感直冲脊髓……',
        ]);
        await defender.say_and_wait(['要……开始了哦，如果哪里痛的话就告诉我。']);
        await attacker.print_and_wait([
          defender.sex,
          '把侧发拨到耳后，然后将敏感的尖端迎入嘴唇，接吻般前后吮吸着。',
        ]);
        await attacker.print_and_wait([
          '温润的触感从龟头覆到前端，偶尔令牙齿擦过外皮却更添兴奋，快感如电流般扩散全身……',
        ]);
        await attacker.print_and_wait([
          '我握住 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的一只手给予鼓励，另一只手拨开刘海，欣赏着',
          defender.sex,
          '透红的漂亮脸蛋。',
        ]);
        await attacker.print_and_wait([
          '尽管害羞无比，',
          defender.sex,
          '还是尝试着与我对视，眼中是无法掩饰的欲望与诉求……',
        ]);
      }
      await attacker.print_and_wait([
        '依从我的请求，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 用唇舌和龟头相吻，然后将前端迎入口中吮吸着。',
      ]);
      await attacker.print_and_wait([
        '被湿暖口穴包裹的前端，先走液与唾液相融，在',
        defender.get_teen_sex_title(),
        '的唇间发出阵阵淫靡的水声。',
      ]);
      await attacker.print_and_wait(['「呲啾，呲啾。」']);
      await attacker.print_and_wait([
        '一双碧蓝的眼瞳透过前发观察着我的反应，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 慢慢改变着嘴上的节奏。',
      ]);
    } else {
      await defender.say_and_wait(['嗯、嗯。']);
      await attacker.print_and_wait([
        '只需轻按头顶，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 便会顺从地闭眼进行服侍，伴着时不时从喉咙里漏出的娇声。',
      ]);
      await attacker.print_and_wait([
        '液体沿着',
        defender.sex,
        '的下唇垂流至前胸，却只是为',
        defender.sex,
        '的脸上增添了几分红晕。',
      ]);
      await attacker.print_and_wait([
        '射精感如潮汐般随着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的动作在下体中翻涌，如果就这样……',
      ]);
    }
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['可以哦，从上面……接下来就交给我吧。']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 跪坐着仰起头，摊出舌头迎接我的伸入，涎水充盈的口穴清晰可见。',
      ]);
      await attacker.print_and_wait([
        '我弯下腰缓慢探进，直至将 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的鼻尖埋入丛林，食道的紧致感令我下体酥麻。',
      ]);
      await attacker.print_and_wait([
        '是因为刺激到干呕了吗，每一次抽插都能感受到咽管的收缩，却更添一层兴奋。',
      ]);
      await attacker.print_and_wait([
        '虽然眼角已现出泪滴，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 还是扶住我的腰，顺从地配合着我的动作。',
      ]);
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 用我的腰部作支撑，将被口穴和食道完全包裹的肉棒上下榨取着。',
      ]);
      await attacker.print_and_wait([
        '溢出的汁液在下唇和蛋蛋间拉着银丝，把 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的前胸沾湿得一塌糊涂。',
      ]);
      await attacker.print_and_wait([
        '似乎是想尽快结束吗，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 渐渐提高速度，本来就挣扎着的声音和鼻息愈加慌乱……',
      ]);
    }
  }

  async sixty_nine(attacker, defender, hook) {
    if (
      defender.id !== 64 ||
      !hook.arg ||
      attacker.sex_code === 0 ||
      defender.sex_code === 1
    ) {
      return await super.sixty_nine(attacker, defender, hook);
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.sixty_nine) {
      life_marks.sixty_nine = 1;
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……这个姿势好羞人……',
      ]);
      await attacker.print_and_wait([
        '我跨坐在平躺的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 头顶，将胀硬的阴茎悬在',
        defender.sex,
        '面前，同时将脸埋入 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的双腿之间。',
      ]);
      await attacker.print_and_wait([
        '将',
        defender.sex,
        '的阴唇微微张开，露出里面粉嫩的褶肉，然后在伸舌舔舐的同时沉下腰去——',
      ]);
      await defender.say_and_wait(['等……等等！……唔。']);
      await attacker.print_and_wait([
        '虽然有些措手不及，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 还是将我的龟头含入口中，舌头笨拙地舔舐着柱身。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的呻吟被堵在喉咙里，变成了含糊不清的哼声。',
      ]);
      await attacker.print_and_wait([
        '而我将舌面在',
        defender.sex,
        '的阴唇上来回扫动，然后将舌尖伸入品尝着',
        defender.get_teen_sex_title(),
        '的滋味。',
      ]);
      await attacker.print_and_wait([
        '每一次刺激都让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体颤抖不已，直至几乎窒息的',
        defender.sex,
        '将我推开——',
      ]);
      await defender.say_and_wait([
        '哈啊……哈啊……抱歉，',
        sys_get_colored_callname(defender.id, attacker.id),
        '……可以再来一次吗？',
      ]);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 努力集中精神，将悬在面前的阴茎含入口中，配合着我在',
      defender.sex,
      '下身舔舐的节奏。',
    ]);
    await attacker.print_and_wait([
      defender.sex,
      '将囊袋握住轻轻揉捏，舌头沿着柱身上下滑动，时不时用舌尖刺激着马眼。',
    ]);
    await defender.say_and_wait(['唔……唔……']);
    await attacker.print_and_wait([
      '被刺激到的我，将舌头游走在',
      defender.sex,
      '的阴唇间，时而浅尝辄止，时而深入花径。',
    ]);
    await attacker.print_and_wait([
      '我们寻找着彼此的节奏，伴着低吟和淫靡的水声，沉溺在快感的酝酿与奉献之中。',
    ]);
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.ask_foot_job) {
        life_marks.ask_foot_job = 1;
        await defender.say_and_wait([
          '用……脚来做吗？',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 喜欢这个呀……',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 将那双裸足伸给我，',
          defender.sex,
          '的脚掌白皙如玉，每一寸肌肤都散发着诱人的光泽。',
        ]);
        await attacker.print_and_wait([
          '脚趾圆润可爱，指甲修剪得恰到好处，泛着淡淡的粉色，此时正有些紧张地里外伸展着。',
        ]);
        await defender.say_and_wait([
          '在目白家有每天给我们做脚部护理的人，我是有些嫌麻烦啦，但……等等，',
          sys_get_colored_callname(defender.id, attacker.id),
          '？',
        ]);
        await attacker.print_and_wait([
          '抓住 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的脚踝，我将鼻尖埋在',
          defender.sex,
          '的脚趾间吮吸着，浴液的芬香充满鼻腔。',
        ]);
        await defender.say_and_wait(['再……再闻也闻不出味道的啦，已经……好痒！']);
      }
      await attacker.print_and_wait([
        '我将鼻子按在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 精致的脚掌上确认气味，下体便如拨开开关般充血胀硬。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 深吸一口气，缓缓将双脚靠近我挺立的阴茎，直至脚掌触碰到它敏感的外皮。',
      ]);
      await defender.say_and_wait(['好烫……要……开始动了。']);
      await attacker.print_and_wait([
        defender.sex,
        '圆润的脚趾时而轻抚龟头，时而揉搓柱身，脚跟贴在我的囊袋上缓缓按压。',
      ]);
      await attacker.print_and_wait([
        '我扶住',
        defender.sex,
        '的脚踝引导着，虽然只是笨拙的摩擦，却如同魔力般让我兴奋不已。',
      ]);
    } else {
      await defender.say_and_wait(['哈啊……哈啊……']);
      await attacker.print_and_wait([
        '兴奋和腿上的运动让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的气息慌乱不已，面容被潮红填满，乳房随着动作跳动着。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '那对脚掌形成的足穴将我的肉棒裹住上下撸动，先走液在',
        defender.sex,
        '的脚趾间垂流。',
      ]);
      await attacker.print_and_wait([
        '越过腿间与 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 四目相对，只有片刻',
        defender.sex,
        '便别过脸去闭上双眼，似乎在羞耻中挣扎呢。',
      ]);
    }
  }
};
