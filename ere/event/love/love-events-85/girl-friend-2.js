const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string)>} handlers */
module.exports = (handlers) => {
  handlers.delicious = async (ruby, me) => {
    await print_event_name('美食', ruby);
    await era.printAndWait([
      '不止怎的，',
      me.get_couple_title(),
      ' 突然说到饮食上来了。',
    ]);
    await era.printAndWait([
      '于是，',
      me.get_colored_name(),
      ' 决定亲自下厨，为 ',
      ruby.get_colored_name(),
      ' 烹制一桌华夏美食。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 看 ',
      me.get_colored_name(),
      ' 兴致勃勃，就随 ',
      me.get_colored_name(),
      ' 去了，当然也跟随 ',
      me.get_colored_name(),
      ' 来了。',
    ]);
    await era.printAndWait([
      '在华丽一族的仓库里，白花花的大米成色比 ',
      me.get_colored_name(),
      ' 以前吃过的好了不止一倍。',
    ]);
    await era.printAndWait(
      '在厨房，很容易地找到了葱、姜、蒜、酱油、料酒等调味料。',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 很少吃猪肉，大多以牛羊为主，但 ',
      me.get_colored_name(),
      ' 还是找到了一块腊肉。',
    ]);
    await era.printAndWait([
      '用餐在一个华丽的的大厅里进行，除了管家立在一旁，就只有 ',
      ruby.get_colored_name(),
      ' 坐在中间的位置。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 忙着端菜，空荡荡的房间里似乎有些冷清，好在有炉火与佳人。',
    ]);
    await era.printAndWait([ruby.get_colored_name(), ' 将信将疑地动筷。']);
    await ruby.say_and_wait('嗯，真好吃。');
    await era.printAndWait([
      '其实 ',
      me.get_colored_name(),
      ' 做的只是一般的家常小菜，味道在 ',
      me.get_colored_name(),
      ' 看来也是一般。',
    ]);
    await era.printAndWait([
      '但对 ',
      ruby.get_colored_name(),
      ' 来说，这样的味觉刺激绝对称得上是美味。',
    ]);
    era.printButton('「你要是喜欢，我可以教你。」', 1);
    await era.input();
    await ruby.say_and_wait('好。');
    await era.printAndWait([
      '饭后散步是必不可少的，性情愉悦的 ',
      ruby.get_colored_name(),
      ' 出了主馆。',
    ]);
    await era.printAndWait([
      me.get_couple_title(),
      ' 沿着一条石头小径走着，这是通往庄园的路，但 ',
      me.get_couple_title(),
      ' 只是随便走走。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的嘴角一直翘着，她挽着 ',
      me.get_colored_name(),
      ' 的手臂，哼着 ',
      me.get_colored_name(),
      ' 没听过的曲调。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 从背后伸手搭上 ',
      ruby.get_colored_name(),
      ' 的腰，然后再慢慢搂紧。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 心情好到了极点，由着 ',
      me.get_colored_name(),
      ' 动作。',
    ]);
    await era.printAndWait([
      '回到房间，',
      me.get_colored_name(),
      ' 开始兴奋。',
    ]);
    await era.printAndWait([ruby.get_colored_name(), ' 脱掉衣服踏进浴室。']);
    await ruby.say_and_wait('进来。');
    await era.printAndWait([
      '终于如愿的 ',
      me.get_colored_name(),
      ' 有点控制不住力道。',
    ]);
    await era.printAndWait(
      '本来想轻轻吻上去，却变成了狂暴的啃食，彷佛要咬下来一般。',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 张开嘴，用舌头去安抚 ',
      me.get_colored_name(),
      ' 这头野兽。',
    ]);
    await era.printAndWait([
      '直到她伸手掐了下 ',
      me.get_colored_name(),
      ' 的侧腰，',
      me.get_colored_name(),
      ' 才意识到自己亲过头了。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 往后缩了缩，把整个身体移到地面。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 咽了咽口水，双手扶起 ',
      ruby.get_colored_name(),
      ' 的脚，开始从脚趾膜拜。',
    ]);
    await era.printAndWait('把大脚趾含进去，舌头不停转动。');
    await era.printAndWait('然后是一个一个的指头、蹦的直直的脚背。');
    await era.printAndWait([
      '不同于洗澡水的冲洗，',
      me.get_colored_name(),
      ' 的唾液在她身上彷佛有催情的作用。',
    ]);
    await ruby.say_and_wait('快点。');
    await era.printAndWait([
      '流连于细腻肌肤的 ',
      me.get_colored_name(),
      ' 舍不得移动嘴巴，舔到大腿、舔到腿根。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 挺了挺腰，让自己的阴茎拍打 ',
      ruby.get_colored_name(),
      ' 的脸颊。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 抓住不老实的肉棒，从顶端开始舔。',
    ]);
    await ruby.say_and_wait('啊……嗯……');
    await era.printAndWait([
      '毫无顾忌的声音让 ',
      me.get_colored_name(),
      ' 把持不住。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 一手抓住眼前垂下的脑袋，一手把着 ',
      ruby.get_colored_name(),
      ' 的耳朵揉搓。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 双手抱住努力奋斗的 ',
      ruby.get_colored_name(),
      ' 的脑袋，自己也开始前后耸动。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 感觉自己被一片柔软和温热包围，挤弄的压力让 ',
      me.get_colored_name(),
      ' 情绪高涨。',
    ]);
    await era.printAndWait([
      '阴毛对 ',
      ruby.get_colored_name(),
      ' 的脸颊起着无法言说的刺激作用，让 ',
      ruby.get_colored_name(),
      ' 吃的更卖力。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 吞下了 ',
      me.get_colored_name(),
      ' 的精液。',
    ]);
    await era.printAndWait([
      '不好吃，但她还是咽下去了，那是属于 ',
      me.get_colored_name(),
      ' 的。',
    ]);
    await era.printAndWait([
      '自己的身体里有 ',
      me.get_colored_name(),
      ' 的液体，这远比接吻来的更有意义。',
    ]);
    await era.printAndWait('但爱马还没有释放。');
    await era.printAndWait([
      '她抬起脚，',
      me.get_colored_name(),
      ' 坏心眼地去逗弄 ',
      ruby.get_colored_name(),
      ' 勃起的乳头，夹在手指的缝隙里拉扯。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 抓住 ',
      me.get_colored_name(),
      ' 不安分的手，把它移到下体上。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 触碰到火热的勃起物，被 ',
      ruby.get_colored_name(),
      ' 瞪了一眼。',
    ]);
    await era.printAndWait([
      '她的脚趾也微微收拢，被 ',
      me.get_colored_name(),
      ' 指甲滑过阴蒂时，不禁颤动。',
    ]);
    await era.printAndWait([
      '等 ',
      ruby.get_colored_name(),
      ' 高潮，已经过了好一会儿了。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 不敢大意，拿过大毛巾把爱马裹住，抱着她走出浴室。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 有些困了，',
      me.get_couple_title(),
      ' 俩裹着厚厚的被子，在大床上相互拥抱。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 摸了摸 ',
      ruby.get_colored_name(),
      ' 的头发，才发现没全干。',
    ]);
    await era.printAndWait([
      '在一遍又一遍地给 ',
      ruby.get_colored_name(),
      ' 擦干头发时，她反正睡不着，便在 ',
      me.get_colored_name(),
      ' 怀里抱着 ',
      me.get_colored_name(),
      '。',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.foot),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.mouth, -0.5),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(85, part_enum.virgin),
      new EroParticipant(0, part_enum.hand),
      false,
    );
    end_ero_and_train();
    return true;
  };

  handlers.dessert = async (ruby, me) => {
    await print_event_name('餐后甜点', ruby);
    await era.printAndWait([
      '用餐后，',
      me.get_colored_name(),
      ' 一时兴起，把 ',
      ruby.get_colored_name(),
      ' 抱到餐桌上。',
    ]);
    await era.printAndWait(
      '突然的举动让她「啊！」地有点震惊，但很快镇静下来。',
    );
    await era.printAndWait('穿着白色过膝袜的小脚悬在空中。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 掀起 ',
      ruby.get_colored_name(),
      ' 的裙子，将她穿的高档内裤小心地脱下。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 张开 ',
      ruby.get_colored_name(),
      ' 的双腿仔细观察那朵含苞待放的红色玫瑰。',
    ]);
    await era.printAndWait(
      '白里透红的耻丘上，似乎可以看到脉动的血管。两瓣不输樱唇的小小阴唇，一张一合间彷佛是另一种活物在喘息。',
    );
    await era.printAndWait([
      '哪怕是面对面，',
      ruby.get_colored_name(),
      ' 对 ',
      me.get_colored_name(),
      ' 也没有抗拒的反应。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 将头埋进 ',
      ruby.get_colored_name(),
      ' 的胯下，伸出舌头品尝花苞的美味。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 惊讶地并拢双腿，',
      me.get_colored_name(),
      ' 是真的觉得头要被爱马有力的大腿夹爆了。',
    ]);
    era.printButton('发出呼吸困难的求救声。', 1);
    era.printButton('伸入那片细缝。', 2);
    await era.input();
    await era.printAndWait([ruby.get_colored_name(), ' 红着脸打开双腿。']);
    await era.printAndWait([
      '她的身体本能地想要夹紧大腿，但害怕伤害到 ',
      me.get_colored_name(),
      '，非常努力地忍耐着。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 用脸颊感受少女下体的弹性，用舌尖爱抚勃起的阴蒂，再探入深润的阴道里拨弄娇嫩的肉褶。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 忍不住发出小小的呻吟。',
    ]);
    await era.printAndWait([
      '被刺激欲望的 ',
      me.get_colored_name(),
      ' 开始吮吸那小小的阴核。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 抱着 ',
      me.get_colored_name(),
      ' 的脑袋不停发抖，',
      me.get_colored_name(),
      ' 感觉到脖子后的呼吸逐渐急促。',
    ]);
    await era.printAndWait([
      '最后，',
      me.get_colored_name(),
      ' 含入一口 ',
      ruby.get_colored_name(),
      ' 的潮水，与 ',
      ruby.get_colored_name(),
      ' 拥吻，和她分享 ',
      me.get_colored_name(),
      ' 嘴里头她的味道。',
    ]);
    begin_and_init_ero(0, 85);
    set_palam_to_max(85, part_enum.clitoris);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    return true;
  };

  handlers.non_penetration = async (ruby, me, r_call_m, m_call_r) => {
    await print_event_name('一起洗澡', ruby);
    let _relation = 0,
      _love = 0;
    begin_and_init_ero(0, 85);
    era.printButton('「一起洗澡怎么样？」', 1);
    await era.input();
    await era.printAndWait([ruby.get_colored_name(), ' 抬起头来，瞪大了眼。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 也被自己的话语吓了一跳。',
    ]);
    await era.printAndWait(
      '这个建议倒不算太出格，毕竟两个人已经坦诚相待很多次了。',
    );
    await era.printAndWait([
      '可在今天，这个工作日当面向 ',
      ruby.get_colored_name(),
      ' 提出这个建议，多少有点大胆了。',
    ]);
    await ruby.say_and_wait('唔……');
    await ruby.say_and_wait('也不是不可以。');
    era.printButton(`「${m_call_r} 最棒了！」`, 1);
    era.printButton(`「我这不是没办法吗，${m_call_r} 实在太可爱了啊。」`, 2);
    era.printButton(`把 ${m_call_r} 抱起来。`, 3);
    switch (await era.input()) {
      case 1:
        _relation += 5;
        break;
      case 2:
        _love++;
        break;
      case 3:
        _relation += 5;
        _love++;
    }
    await era.printAndWait([ruby.get_colored_name(), ' 有些害羞。']);
    await era.printAndWait([
      '看着眼前肤如凝脂，曼妙妖娆的身躯，',
      me.get_colored_name(),
      ' 不禁口干舌燥。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 被 ',
      me.get_colored_name(),
      ' 灼热的视线看得有些害臊。',
    ]);
    await ruby.say_and_wait('洗澡吧。');
    era.drawLine();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 快步走向浴缸，伸出手试了下水温。层层水雾遮掩起爱马青涩的身体，若隐若现中更具朦胧的美感。',
    ]);
    await era.printAndWait([
      '将赤裸的美背与翘臀展示给 ',
      me.get_colored_name(),
      '，',
      ruby.get_colored_name(),
      ' 抬起玉足，在水中点起阵阵涟漪。',
    ]);
    await era.printAndWait('入水轻盈，没有溅起多少水花。');
    era.printButton(`「${m_call_r}，好漂亮。」`, 1);
    era.printButton('脱下裤子，让龟头暴露在空气中。', 2);
    if ((await era.input()) === 1) {
      _relation += 3;
    } else {
      _love++;
    }
    await ruby.say_and_wait('呜……您是几天没清理……');
    await era.printAndWait([
      '可见到 ',
      me.get_colored_name(),
      ' 的肉棒威风地挺立，',
      ruby.get_colored_name(),
      ' 不禁双腿一夹。',
    ]);
    await era.printAndWait('蜜穴明明被热水滋润，少女的神情却有些空虚失落。');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 在短暂的尴尬之后，不解风情地笑着落入水中。',
    ]);
    await era.printAndWait([
      '不似 ',
      ruby.get_colored_name(),
      ' 轻盈，令水花四溅。',
    ]);
    era.printButton('坐在她对面。', 1);
    await era.input();
    await era.printAndWait([
      '因为浴缸狭窄的关系，',
      ruby.get_colored_name(),
      ' 的双足就在 ',
      me.get_colored_name(),
      ' 阴囊的下部。',
    ]);
    await era.printAndWait([
      '只需微微抬起，就可以给予 ',
      me.get_colored_name(),
      ' 那令人发狂的刺激。',
    ]);
    await ruby.say_and_wait('粗鲁……');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 说着，大眼睛无法从 ',
      me.get_colored_name(),
      ' 的肉棒上移开。',
    ]);
    await era.printAndWait('它虽然藏在水下，却以不容忽视的雄武姿态昂首。');
    await era.printAndWait([
      '尽管如此，',
      ruby.get_colored_name(),
      ' 捧起沾着 ',
      me.get_couple_title(),
      ' 两人味道的清水泼在身上的动作还是优雅可爱。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 呆呆地看着 ',
      ruby.get_colored_name(),
      ' 清洗身体。',
    ]);
    await era.printAndWait(
      '忘记了动作，只是注视着那每一寸白嫩肌肤被小手沾着热水轻轻擦过。',
    );
    await era.printAndWait([
      '名贵香皂搓出的花香附着在每个香甜的泡泡上，把 ',
      ruby.get_colored_name(),
      ' 衬托得如公主一般。',
    ]);
    await ruby.say_and_wait('别发愣。');
    await era.printAndWait([
      '爱马的催促让 ',
      me.get_colored_name(),
      ' 回过神来，却猛感两腿间贴着某种娇嫩。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 不知道是无意的交错还是刻意的诱惑。',
    ]);
    era.printButton('抓住如花瓣般娇嫩的玉足。', 1);
    era.printButton('把玩起来。', 2);
    await era.input();
    await ruby.say_and_wait('哈……痒……你做什么呢？');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 被抬起小脚，被 ',
      me.get_colored_name(),
      ' 或轻或重地揉捏到腿软。',
    ]);
    await era.printAndWait([
      '虽然任由 ',
      me.get_colored_name(),
      ' 玩弄，洗澡的动作却越来越慢。',
    ]);
    era.printButton(`「我帮你好好清洗，${m_call_r} 不方便洗到脚吧？」`, 1);
    await era.input();
    await era.printAndWait([
      '当然，在 ',
      me.get_colored_name(),
      ' 的锻炼下，以 ',
      ruby.get_colored_name(),
      ' 的柔韧性把脚洗干净也是能做好的，但确实麻烦许多。',
    ]);
    await era.printAndWait([
      '最重要的是，被 ',
      me.get_colored_name(),
      ' 这么捏着。',
    ]);
    await ruby.say_and_wait('嗯……啊！用力过头了……不过，很舒服……');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 闭起双眼，在 ',
      me.get_colored_name(),
      ' 的揉捏中发出一声声诱人的呻吟。',
    ]);
    await era.printAndWait(
      '华丽一族的少女双眼迷离地靠在浴缸边缘，棕黑长发散在水中如柳枝般扶起。',
    );
    await era.printAndWait(
      '能把人类男性轻易打趴的洁白玉手此时交叉挡在了两腿间被大腿摩擦。',
    );
    await era.printAndWait([
      '一对比艺术品更完美的玉足在少女的娇吟声中被 ',
      me.get_colored_name(),
      ' 玩了个遍。',
    ]);
    await era.printAndWait([ruby.get_colored_name(), ' 几乎要躺进水底。']);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.foot),
      false,
    );
    era.printButton('将她搂腰抱入怀中。', 1);
    await era.input();
    await era.printAndWait([
      '少女白嫩地肌肤和一对玉乳紧贴在 ',
      me.get_colored_name(),
      ' 的胸膛。',
    ]);
    await ruby.say_and_wait('你……干什么啊？');
    era.printButton(`「当然是帮 ${m_call_r} 洗澡啦。」`, 1);
    era.printButton(`「${m_call_r} 的后背也得交给我来才行吧。」`, 2);
    await era.input();
    await era.printAndWait([
      '不等 ',
      ruby.get_colored_name(),
      ' 理解，',
      me.get_colored_name(),
      ' 把她整个人抱着转了个方向。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 用自己的大腿把 ',
      ruby.get_colored_name(),
      ' 夹在中间。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 弧线优美的后背依靠在 ',
      me.get_colored_name(),
      ' 的胸膛上，被迫感受下面那根比热水更让她感觉躁动的阳具。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 伸手把 ',
      ruby.get_colored_name(),
      ' 的乳鸽揉出各种形状，诱人的粉红在洁白的肌肤上蔓延。',
    ]);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的胸部被大手揉捏，屁股被肉棒摩擦，甚至双腿也被 ',
      me.get_colored_name(),
      ' 的汗毛蹭着。',
    ]);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    await era.printAndWait('全身的快感以电流的形式一次次透过脊髓穿透大脑。');
    await era.printAndWait('淫液从蜜穴口流出。');
    await ruby.say_and_wait('不……不行！');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 动摇的神态让 ',
      me.get_colored_name(),
      ' 无比欣喜，但她依旧没有同意。',
    ]);
    await ruby.say_and_wait('只能，腿……');
    era.printButton('身子向后一倒，双手依托浴缸。', 1);
    era.printButton('凑上脑袋，带着灼热气息对爱马耳鬓厮磨。', 2);
    if ((await era.input()) === 1) {
      await me.say_and_wait('想要的话，自己来吧。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 把小屁股往上挪了挪，一坐下来就令小肉缝紧贴大肉棒。',
      ]);
      await era.printAndWait([
        '玉腿直接夹紧，于是 ',
        me.get_colored_name(),
        ' 立刻感受到了 ',
        ruby.get_colored_name(),
        ' 肉缝的吮吸。',
      ]);
      await era.printAndWait([
        '没等 ',
        me.get_colored_name(),
        ' 爽的叫出声，',
        ruby.get_colored_name(),
        ' 伸出匆匆玉指，按在水底的龟头上。',
      ]);
      await era.printAndWait([
        '指尖一次次滑过，若有若无的感觉让 ',
        me.get_colored_name(),
        ' 心醉。',
      ]);
      await era.printAndWait([
        '这种活色生香的状态让 ',
        me.get_colored_name(),
        ' 按捺不住，重新攀上 ',
        ruby.get_colored_name(),
        ' 的腰肢。',
      ]);
      await era.printAndWait([
        '被玩弄的 ',
        ruby.get_colored_name(),
        ' 不自禁夹紧双腿，摩擦、扭动着。',
      ]);
      await era.printAndWait([
        '最终，感觉到 ',
        me.get_colored_name(),
        ' 肉棒的胀大，',
        ruby.get_colored_name(),
        ' 将双腿用力一夹。',
      ]);
      await era.printAndWait([
        '犹如火山爆发，打量白浊液喷涌而出，沾染上 ',
        ruby.get_colored_name(),
        ' 的玉腿与花苞。',
      ]);
      await era.printAndWait('随着灼热扩散，清水中也多了一种白色。');
      await era.printAndWait([
        '华丽一族的瑰宝，再次被 ',
        me.get_colored_name(),
        ' 玷污了。',
      ]);
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 心领神会，回过头迎上 ',
        me.get_colored_name(),
        ' 的嘴唇。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 肥厚的舌头堂堂正正闯入 ',
        ruby.get_colored_name(),
        ' 的小嘴，与丁香小舌交缠着发出淫靡之音。',
      ]);
      await era.printAndWait('一方红光满面，一方星眸如醉。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 手上用力，轻轻捏住小巧胸部上的樱桃。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 肆意亵玩其他人想都不敢想的美少女。',
      ]);
      await era.printAndWait([
        '秀发、香肩、酥胸、翘臀、玉腿，甚至让 ',
        ruby.get_colored_name(),
        ' 配合自己的行为。',
      ]);
      await era.printAndWait('唇分，肉棒迸发出浓厚的白浊。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 挑起 ',
        ruby.get_colored_name(),
        ' 光洁的下巴，欣赏眼前平静的通红小脸。',
      ]);
      await era.printAndWait([
        '失神的 ',
        ruby.get_colored_name(),
        ' 轻轻挣脱 ',
        me.get_colored_name(),
        ' 的怀抱。',
      ]);
      await era.printAndWait([
        '随后，',
        me.get_couple_title(),
        ' 清理了足够引人遐想的痕迹，快速互相清洗干净。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.mouth),
        false,
      );
    }
    await quick_make_love(
      new EroParticipant(85, part_enum.body, -0.4),
      new EroParticipant(0, part_enum.penis, -0.4),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.clitoris, -0.4),
      new EroParticipant(0, part_enum.penis, -0.4),
      false,
    );
    end_ero_and_train();
    era.println();
    sys_like_chara(85, 0, _relation, true, _love) && (await era.waitAnyKey());
  };
};
