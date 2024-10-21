const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.missionary) {
      life_marks.missionary = 1;
      await attacker.print_and_wait([
        '扶住膝盖张开 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的双腿，',
        defender.sex,
        '色情的模样便在我面前展露无遗。',
      ]);
      await attacker.print_and_wait([
        '此时此刻，',
        defender.get_teen_sex_title(),
        '身体上的每一部分都像是为交配而生的，无论是丰盈的酥胸还是垂涎的小穴。',
      ]);
      await attacker.print_and_wait([
        '又或是经过细心打理的粉嫩脚掌，散发着香气的脖颈，就连 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 引以为豪的腰部也显得丰满肥硕。',
      ]);
      await defender.say_and_wait([
        '别看那么仔细啦……',
        sys_get_colored_callname(defender.id, attacker.id),
        '。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 娇嗔着捂住脸，却还是在指间偷瞄着我的反应。',
      ]);
      await attacker.print_and_wait([
        '将',
        defender.sex,
        '的手移开，十指相插握在一起，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 看着我的眼神稍稍有些惊讶，然后现出了会意的微笑。',
      ]);
      await defender.say_and_wait(['可以哦……请进来吧，在这里。']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 用手指将阴唇张开，跟随着',
        defender.sex,
        '的引导，我缓缓顶入……',
      ]);
    } else if (era.get('love:64') >= 50) {
      if (hook.arg) {
        await attacker.print_and_wait([
          '按住 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的双膝，用最容易深入的姿势挺进温润的小穴，面对面开始了交合……',
        ]);
        await defender.say_and_wait(['嗯、嗯、嗯……']);
        await attacker.print_and_wait([
          defender.get_teen_sex_title(),
          '按捺不住的娇声随着每一次抽插此起彼伏，两只丰腴的奶子也跟着恣意摇摆。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 紧握着我的手，似乎在索求安全感，又像是在确认性爱的对象，十指与我紧紧扣在一起。',
        ]);
        await defender.say_and_wait([
          '嗯……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……哈啊、嗯……',
        ]);
      } else {
        await attacker.print_and_wait([
          '肉体间的碰撞夹杂着汁液的声音愈发猛烈，无法抑制的娇喘从 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 唇间漏了出来。',
        ]);
        await defender.say_and_wait(['哈啊、啊、啊、啊嗯。']);
        await attacker.print_and_wait([
          '交合处被相融的体液沾污得一塌糊涂，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 也不再遮掩脸部，沉浸在性快感中的',
          defender.get_teen_sex_title(),
          '面容一览无遗。',
        ]);
      }
    } else {
      throw new Error();
    }
  };

  handlers[ero_hooks.doggy_style] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.doggy_style) {
      life_marks.doggy_style = 1;
      await defender.say_and_wait(['从后面？……可以哦。']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 趴在床上，像猫一样压低上身，将诱人的硕大臀部奉献给我。',
      ]);
      await attacker.print_and_wait([
        '果然还是有些害羞吗，马尾仍耸拉在双腿间遮掩着私处。',
      ]);
      await attacker.print_and_wait([
        '将五指陷进',
        defender.sex,
        '柔滑紧致的臀肉里，一边抓捏一边用轻浮的褒奖缓解',
        defender.sex,
        '的紧张。',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 太着迷啦……屁股……虽然不是不可以……',
      ]);
      await attacker.print_and_wait([
        '随着软绵绵的声音，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 不由自主地摆动臀部，摇曳的尾巴后面是若隐若现的秘裂。',
      ]);
      await attacker.print_and_wait([
        '当我的根部贴在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的股间，',
        defender.sex,
        '无意识地呜咽着弓起背。',
      ]);
      await attacker.print_and_wait([
        '将自己的耻部毫无保留地展示给我，用滑润的入口挑逗着尖端。',
      ]);
    } else if (era.get('love:64') >= 50) {
      if (hook.arg) {
        await attacker.print_and_wait([
          '扶住 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的臀部，我缓缓顶入深处，直至',
          defender.sex,
          '的双股贴在我的腰间。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 紧抓床单，将半边脸埋在枕头里低吟着，硕大的乳房压在身下。',
        ]);
        await defender.say_and_wait(['嗯……嗯……啊嗯……']);
        await attacker.print_and_wait([
          '淫秽的拍打声在房间里回荡着，汁液从交合处连绵滴落在 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 腿间的床单上。',
        ]);
      } else {
        await attacker.print_and_wait([
          '我肆意地撞击着 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的臀部，感受着肉壁的每一次紧缩与吸附。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 那原本有些僵硬的腰部完全下沉，鼓励着我一次次探索',
          defender.sex,
          '最敏感的地方。',
        ]);
        await defender.say_and_wait([
          '嗯……啊嗯……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……哦……嗯嗯……',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的双股随着我的节奏激起一层层肉浪，沉浸于快感的',
          defender.sex,
          '四处伸展着脚趾。',
        ]);
      }
    } else {
      throw new Error();
    }
  };

  handlers[ero_hooks.sitting] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.sitting) {
      life_marks.sitting = 1;
      await attacker.print_and_wait([
        '我与 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 两人面对面坐着，呼吸交织，彼此都能感受到对方剧烈的心跳。',
      ]);
      await defender.say_and_wait(['好近……有点……不好意思。']);
      await attacker.print_and_wait([
        '虽然这样说着，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 还是握住我的臂膀迫不及待地拉近距离，将我的勃起贴在小腹。',
      ]);
      await attacker.print_and_wait([
        '感受着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 在自己腿上的重量，',
        defender.sex,
        '发硬的乳头摩擦着我的前胸。',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……已经等不及了呢……嘿嘿。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 进一步靠近，将我的根部贴在双腿之间，',
        defender.sex,
        '那片稀疏的草丛刺挠着上面每一根神经。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '缓慢地扭着腰，似乎是为了接下来的正戏做着预热，两只腿扣住我的腰部。',
      ]);
      await defender.say_and_wait(['哈……就像这样？……']);
    } else if (era.get('love:64') >= 50) {
      if (hook.arg) {
        await attacker.print_and_wait([
          '扶住 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的腰，我引导',
          defender.sex,
          '缓缓从上方抵入，当对准入口时，',
          defender.sex,
          '的身体在我的手中绷紧。',
        ]);
        await defender.say_and_wait(['啊……！']);
        await attacker.print_and_wait([
          '当我的阴茎挺入深处，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 发出一声轻呼，',
          defender.sex,
          '的眉头微皱，适应着被填满的感觉。',
        ]);
        await attacker.print_and_wait([
          '片刻后，',
          defender.sex,
          '搭在我肩上开始扭动腰肢，每一寸温热紧致的内壁都随之蠕动着，带来极致的快感。',
        ]);
        await defender.say_and_wait(['嗯……嗯……啊嗯……']);
      } else {
        await attacker.print_and_wait([
          '湿润的甬道随着抽插的节奏不断收缩，令人窒息的快感窜遍全身。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的身体随着我的每一次挺动而颤栗，仿佛一根绷紧的琴弦。',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '的双手紧扣着我的肩膀，指尖深陷肌肤，留下一道道浅浅的红痕。',
        ]);
        await defender.say_and_wait([
          '啊……啊嗯……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……啊……嗯嗯……',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的臀部一次次压迫着我的睾丸，仿佛在催促我射精。',
        ]);
      }
    } else {
      throw new Error();
    }
  };

  handlers[ero_hooks.hug_standing] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.hug_standing) {
      life_marks.hug_standing = 1;
      await attacker.print_and_wait([
        '面对 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 诱人的腰肢与臀部，我不由得张开双手。',
      ]);
      await attacker.print_and_wait([
        '企图用指尖勾勒',
        defender.sex,
        '的每一处线条，以至于陷入了兴奋的茫然之中。',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……别再摸了啦。',
      ]);
      await attacker.print_and_wait([
        '回过神时，我搭在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 臀间的男根已经坚挺无比。',
      ]);
      await attacker.print_and_wait([
        '眼前的尤物苦闷地扭动着腰肢，尾巴在溢出汁液的尖端上挑逗似地来回扑腾。',
      ]);
    } else if (era.get('love:64') >= 50) {
      if (hook.arg) {
        await attacker.print_and_wait([
          '双手紧紧扣住 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的腰部，从背后紧贴着进入了',
          defender.get_teen_sex_title(),
          '的秘穴。',
        ]);
        await defender.say_and_wait([
          '啊啊～',
          sys_get_colored_callname(defender.id, attacker.id),
          '……',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的声音里带着一丝颤抖，尾巴不由自主地缠上了我的手臂。',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '的蜜穴紧紧吸附着侵入物，内壁的褶皱被完全撑开。',
        ]);
        await attacker.print_and_wait([
          '那对硕乳随着动作来回晃动，乳尖挺立得像两颗石子，摩擦着我的掌心。',
        ]);
      } else {
        await defender.say_and_wait(['啊啊、啊嗯、啊……']);
        await attacker.print_and_wait([
          '随着性交的继续，我感受到手中的重量越来越沉。',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的双腿不住地打颤，几乎无法支撑自己的体重，却还是向后靠近迎合着我的动作。',
        ]);
        await attacker.print_and_wait([
          '两人的体液在交合处汇成一股股银丝绵延而下，在地板上形成一滩水渍。',
        ]);
      }
    } else {
      throw new Error();
    }
  };

  handlers[ero_hooks.ask_cowgirl] = async (attacker, defender, hook) => {
    if (defender.id !== 64) {
      throw new Error();
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.ask_cowgirl) {
      life_marks.ask_cowgirl = 1;
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 跨坐在我的腰间，湿滑的大腿内侧蹭过我的腹肌。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '俯下身，温热的吐息拂过我的耳廓，乳房摊在我的前胸，散发出馥郁的雌性气味。',
      ]);
      await defender.say_and_wait([
        '接下来就……交给我吧？虽然不知道是不是这样做……嘻……',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '缓缓抬起臀部，用手扶住我硬挺的阴茎，对准自己湿润的入口。',
      ]);
      await attacker.print_and_wait([
        '随着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 慢慢坐下，我能感受到',
        defender.sex,
        '紧致的内壁一寸寸吞没自己。',
      ]);
      await defender.say_and_wait(['唔……嗯……']);
    } else if (era.get('love:64') >= 50) {
      if (hook.arg) {
        await defender.say_and_wait(['要……开始动咯。']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 深吸一口气，双手撑在我的胸膛上，开始缓慢地扭动腰肢。',
        ]);
        await attacker.print_and_wait([
          '温暖的肉褶摩挲着我的根部，令我的手不由地扶上',
          defender.sex,
          '的大腿，配合节奏向上顶弄。',
        ]);
        await attacker.print_and_wait([
          '汗水顺着',
          defender.sex,
          '的锁骨滑落到乳间，在灯光下闪烁着诱人的光泽。',
        ]);
        await defender.say_and_wait(['嗯……嗯……']);
      } else {
        await attacker.print_and_wait([
          '随着动作的加快，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 丰满的乳房开始恣意晃动，吸引着我的目光。',
        ]);
        await defender.say_and_wait([
          '哈啊……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……啊……哈啊……',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '的声音从轻柔的呻吟逐渐变成满足的娇喘，焦躁般渴求地在我的胯间上下起伏。',
        ]);
        await attacker.print_and_wait([
          '肉体碰撞的声音在房间里回荡，伴着交欢带来的快感浪潮，似要将我溺毙其中。',
        ]);
      }
    } else {
      throw new Error();
    }
  };
};
