const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');

const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const FukukitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 */
async function cristmas_common(kitaru, me, callname) {
  await kitaru.say_and_wait('嘿！');
  await era.printAndWait([
    '循着声音的方向看了过去。',
    me.get_colored_name(),
    ' 那令人不省心的担当正背着一个大布袋，正尝试通过窗户挤进屋内。',
  ]);
  await era.printAndWait([
    '那包不知道是什么的东西突然被狭窄的窗户卡住，直到在',
    kitaru.get_uma_sex_title(),
    '的怪力下逐渐变形。',
  ]);
  await kitaru.say_and_wait('哎呀！');
  await era.printAndWait(
    '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
  );
  await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
  await kitaru.say_and_wait('当当！待兼圣诞来！');
  await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
  era.printButton('「没事吧？」', 1);
  await era.input();
  await kitaru.say_and_wait('欸！没事的！');
  await kitaru.say_and_wait(['哦，对了对了，有个东西要给 ', callname, ' 呢！']);
  await era.printAndWait([
    '在洒在地上的物品中一阵翻找后，',
    kitaru.get_colored_name(),
    ' 拿起了一个包装意外精美的盒子。',
  ]);
  await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
  await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
  await era.printAndWait(
    '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
  );
  await kitaru.say_and_wait('欸！怎么会！');
  await kitaru.say_and_wait([
    '呼……如果这样的话，就只能麻烦 ',
    callname,
    ' 陪我出门一趟了。',
  ]);
  era.drawLine({ content: '特雷森校园 天台' });
  await era.printAndWait([
    '来到了和 ',
    kitaru.get_colored_name(),
    ' 常去的天台，冬季的寒风吹着 ',
    me.get_colored_name(),
    ' 有些发抖，不过 ',
    kitaru.get_colored_name(),
    ' 却是一点都不在意。',
  ]);
  await kitaru.say_and_wait([
    '好了！',
    callname,
    '，请把手中的圣诞树对着天空举起来吧！',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
  ]);
  await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
  await kitaru.say_and_wait('好浪漫喔！');
}

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  if (event_object?.arg !== 143) {
    return;
  }
  const edu_marks = new FukukitaruEduMarks();
  // 圣诞节 差分，分为有马纪念胜利与未胜利
  era.set('cflag:56:节日事件标记', 0);
  if (
    edu_marks.begin_race_end === 10 &&
    check_aim_race(RaceHistory.get(56).get(), race_enum.arim_kin, 2, 1)
  ) {
    // 差分，分为有马纪念未进行
    await print_event_name('名叫待兼福来的星星', kitaru);
    await era.printAndWait([
      '有马纪念结束了，不过在和 ',
      kitaru.get_colored_name(),
      ' 的契约结束之前，率先到来的是同样是一年一度的圣诞节。',
    ]);
    await era.printAndWait(
      '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
    );
    await era.printAndWait([
      '还在办公室忙碌着年终报告的 ',
      me.get_colored_name(),
      ' 听见窗户传来声响。',
    ]);
    await cristmas_common(kitaru, me, callname);

    if (era.get('love:56') < 75 || kitaru.sex_code === 1 || me.sex_code === 0) {
      await era.printAndWait([
        '庆祝一阵后，和 ',
        kitaru.get_colored_name(),
        ' 回去了。',
      ]);
      return;
    }
    era.printButton('「比较想要实体的星星。」', 1);
    await era.input();
    await kitaru.say_and_wait('欸！天上的星星也不行吗？');
    await era.printAndWait([
      '在听到这句话的同时，橘发的',
      kitaru.get_teen_sex_title(),
      '顿时低下了头。',
    ]);
    era.printButton('「比如……名叫待兼福来的星星就不错呢！」', 1);
    await era.input();
    await kitaru.say_and_wait('欸！我吗？');
    await era.printAndWait([
      '被叫到名字',
      kitaru.get_teen_sex_title(),
      '转过头来看着 ',
      me.get_colored_name(),
      '，十字星状的瞳孔中闪烁着北极星般的明亮光芒。',
    ]);
    await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
    await kitaru.say_and_wait(['那个，今天的 ', callname, ' 真的好有魄力啊！']);
    await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
    ]);
    await era.printAndWait([
      '下意识的伸出手，只是搭在 ',
      kitaru.get_colored_name(),
      ' 的身上，对',
      kitaru.sex,
      '的身体早就知根知底的 ',
      me.get_colored_name(),
      ' 便发现了',
      kitaru.sex,
      '即使是对',
      kitaru.get_uma_sex_title(),
      '而言也有些略高的体温。',
    ]);
    await era.printAndWait('先是隔着校服抚摸着肩膀。');
    await kitaru.say_and_wait('……欸。');
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '顺势滑下后轻捏两下乳房，',
      kitaru.get_colored_name(),
      ' 便配合的发出了一声轻微的呻吟。',
    ]);
    await kitaru.say_and_wait('呜……');
    await kitaru.say_and_wait('那里很敏感的……', true);
    await era.printAndWait([
      '继续往下，指腹划过腰间，明明隔着冬季的厚重校服，',
      kitaru.get_colored_name(),
      ' 却像是被电到了般颤抖起来。',
    ]);
    await kitaru.say_and_wait('……哈。');
    await kitaru.say_and_wait('好久没有被命定之人这样触摸了啊……', true);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的吐息变得更加湿润而荡漾。',
    ]);
    await era.printAndWait([
      '眼前，清秀的面颊完全被赤色红潮浸染，双眼眸光流转、泪水盈盈的 ',
      kitaru.get_colored_name(),
      ' 对 ',
      me.get_colored_name(),
      ' 投来了期待的目光。',
    ]);
    await kitaru.say_and_wait('好想要……', true);
    era.printButton('一言不发的回去', 1);
    era.printButton('抱起待兼福来', 2, {
      disabled:
        kitaru.sex_code === 1 ||
        me.sex_code === 0 ||
        !check_pregnant_unprotect(56),
    });

    if ((await era.input()) === 1) {
      await era.printAndWait([
        '没有理会不知道在期待着什么的 ',
        kitaru.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 转身离开了天台。',
      ]);
      return;
    }

    if (
      !era.get('status:56:短效避孕药') &&
      !era.get('status:56:长效避孕药') &&
      !era.get('status:0:经期') &&
      era.get('cflag:56:妊娠回合计时') === 0
    ) {
      era.set('status:56:短效避孕药', 1);
    }
    await era.printAndWait([
      '为了应对有马纪念，',
      kitaru.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
      ' 早就禁欲了许久。',
    ]);
    await era.printAndWait(
      '而如果用一场酣畅淋漓的性爱来作为奖励的话，或许是个不错的选择。',
    );
    await kitaru.say_and_wait('欸啊！');
    await era.printAndWait([
      '用公主抱的姿势把双腿发软的 ',
      kitaru.get_colored_name(),
      ' 抱在怀中，',
      kitaru.get_colored_name(),
      ' 纤细的藕臂搂住了 ',
      me.get_colored_name(),
      ' 的脖子。',
    ]);
    await kitaru.say_and_wait([callname, ' 的气味……'], true);
    await kitaru.say_and_wait('好热……', true);
    await era.printAndWait([
      '不过只是走到天台入口的路程，',
      kitaru.get_colored_name(),
      ' 便按捺不住的把脸埋在 ',
      me.get_colored_name(),
      ' 的胸口，交叠在一起的双腿越来越过分的摩擦着，直到裙下的糟糕气味传入 ',
      me.get_colored_name(),
      ' 的鼻腔。',
    ]);
    era.printButton('抱起待兼福来', 1);
    await era.input();
    await kitaru.say_and_wait('嗯……', true);
    await era.printAndWait([
      '明明没有开口，不过 ',
      me.get_colored_name(),
      ' 还是看出了怀中担当的意愿。',
    ]);
    await era.printAndWait('关上了通向天台的大门，将寒风阻拦在外。');
    await era.printAndWait('楼梯口的空间并不算大。');
    await era.printAndWait([
      '让怀中的 ',
      kitaru.get_colored_name(),
      ' 背对着 ',
      me.get_colored_name(),
      ' 扶着内侧的水泥墙壁，把',
      kitaru.sex,
      '的校服裙子拉起，露出内裤。',
    ]);
    await kitaru.say_and_wait(
      ['唔，这个姿势，完全看不见 ', callname, '……'],
      true,
    );
    await era.printAndWait(
      '那片布料湿的仿佛能滴下水来，已经快在在双腿不断的交替摩擦间拧成了一股线。',
    );
    era.printButton('分开双腿', 1);
    await era.input();
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 听话的执行了的命令，双腿大大的分开，在伸手拉下内裤的时候，小穴与分离的布料拉起粘稠的丝线。',
    ]);
    await era.printAndWait(
      '而后手指伸入，柔软的嫩肉无法对其形成一分一毫的抵抗。',
    );
    await kitaru.say_and_wait('哈……哈啊');
    await era.printAndWait([
      '开始还小心翼翼的，直到在 ',
      kitaru.get_colored_name(),
      ' 愈发过分的呻吟声下，让剩下的半根手指毫不怜惜的一起进入。',
    ]);
    await kitaru.say_and_wait('唔呜？！');
    begin_and_init_ero(0, 56);
    set_palam_to_max(56, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    await era.printAndWait([
      '剥开包皮，玩弄起肿胀的阴蒂，莫大的快感从 ',
      kitaru.get_colored_name(),
      ' 的尾椎末侧升起，电流沿着脊背流向全身',
    ]);
    await kitaru.say_and_wait('咦呀呀呀呀呀呀！');
    await era.printAndWait(
      '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
    );
    set_palam_to_max(
      56,
      kitaru.sex_code > 0 ? part_enum.virgin : part_enum.clitoris,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(
        56,
        kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
      ),
      false,
    );
    await era.printAndWait([
      '被掀起的冬季校服短裙半掩着的雪臀，在 ',
      kitaru.get_colored_name(),
      ' 的痉挛下不断的颤动着。',
    ]);
    era.printButton('伸手', 1);
    await era.input();
    await kitaru.say_and_wait('咿呀！');
    await era.printAndWait([
      '首先是揉搓，而后，在 ',
      kitaru.get_colored_name(),
      ' 愈发可爱的呻吟声下，变成了对待无机物般下手不知轻重的揉捏，肆意地变幻出淫荡的形状。',
    ]);
    await era.printAndWait(
      '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
    );
    await kitaru.say_and_wait([callname, '……']);
    await era.printAndWait([
      '在 ',
      kitaru.get_colored_name(),
      ' 的催促下，是时候进入正戏了。',
    ]);
    await era.printAndWait('脱下裤子，露出了已经勃起的阴茎。');
    await kitaru.say_and_wait('嗯……');
    await era.printAndWait([
      '似乎是察觉到了逐渐逼近的火热，饥渴的小穴一开一合的对 ',
      me.get_colored_name(),
      ' 的阴茎发出了邀请。',
    ]);
    await era.printAndWait('然后，粗大的肉棒长驱直入。');
    await era.printAndWait('小穴内的爱液和穴内的空气一起被无情的挤出。');
    await era.printAndWait([
      '属于成年男性级别的肉棒霸占了穴内所有的空间，在',
      kitaru.get_teen_sex_title(),
      '的私密地带横行霸道。',
    ]);
    await kitaru.say_and_wait(
      ['小穴一缩一缩的，包裹着 ', callname, ' 的肉棒。'],
      true,
    );
    await era.printAndWait('砰！');
    await era.printAndWait([
      '沉闷的撞击声从 ',
      kitaru.get_colored_name(),
      ' 的小穴深部传来',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 本想大声的叫出来，却又在 ',
      me.get_colored_name(),
      ' 的示意下，把声音压了下去。',
    ]);
    await kitaru.say_and_wait('连自己小穴『啧啧』的淫靡吮吸声都能听见。', true);
    await era.printAndWait([
      '尽管这么想着，',
      kitaru.get_colored_name(),
      ' 双腿还是愈发的分开，让站立后入的体位更加的标准。',
    ]);
    await era.printAndWait(
      '环状的粉红穴肉在肉棒的冲击下，如同被采蜜的花朵般随风抽搐荡漾着。',
    );
    await kitaru.say_and_wait('这么激烈的话，要，要去了啊～～～', true);
    await kitaru.say_and_wait('去了去了啊！！！');
    set_palam_to_max(56, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    await era.printAndWait([
      '将脱力的爱人翻了一个面，水泥墙壁的冰凉刺激让 ',
      kitaru.get_colored_name(),
      ' 失神的星星瞳重新对焦。',
    ]);
    await era.printAndWait([
      '这次是对面立位，',
      me.get_colored_name(),
      ' 得以欣赏着平日里元气的',
      kitaru.get_uma_sex_title(),
      '在性爱中的表情。',
    ]);
    await kitaru.say_and_wait('砰～砰～');
    await era.printAndWait('淫靡的交合声回响在天台楼梯口的狭小空间内。');
    await kitaru.say_and_wait('太激烈！太激烈了！', true);
    await kitaru.say_and_wait('要，要去了啊～');
    await era.printAndWait('压抑着的娇媚声音终于泄了出来。');
    await era.printAndWait([
      '话是这么说，可橙色的尾巴却如同有自我意识般缠在了 ',
      me.get_colored_name(),
      ' 的腿，配合着纠缠地越发紧密的小穴，背叛般的告诉了主人此刻接近高潮的状态。',
    ]);
    await kitaru.say_and_wait('要去了啊！！！');
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(56, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    await era.printAndWait('稍稍前倾，龟头径直抵着子宫口倾吐起精液。');
    await era.printAndWait('从小穴和肉棒交合处漏出了点点白浊。');
    era.drawLine();
    await kitaru.print_and_wait('之后又持续了多久呢？');
    await kitaru.print_and_wait([
      '不过我第二天醒来的时候，发现自己睡在了 ',
      callname,
      ' 家里的床上。',
    ]);
    end_ero_and_train();
  } else {
    await print_event_name('摘下胜利之星', kitaru);
    await era.printAndWait(
      '距离有马纪念只剩下几天，不过在那之前，率先到来的是同样是一年一度的圣诞节。',
    );
    await era.printAndWait(
      '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
    );
    await era.printAndWait([
      '还在研究着有马纪念战术的 ',
      me.get_colored_name(),
      ' 听见窗户传来声响。',
    ]);
    await cristmas_common(kitaru, me, callname);
    era.printButton('「比较想要实体的星星。」', 1);
    await era.input();
    await kitaru.say_and_wait('欸！天上的星星也不行吗？');
    await era.printAndWait([
      '在听到这句话的同时，橘发的',
      kitaru.get_teen_sex_title(),
      '顿时低下了头。',
    ]);
    era.printButton('「用有马纪念的胜利之星来装饰吧！」', 1);
    await era.input();
    await kitaru.say_and_wait('喔！有马纪念！');
    await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
    era.printButton('「那就这么说定了？」', 1);
    await era.input();
    await kitaru.say_and_wait('嗯！……是，是的……我什么都答应。！');
    await kitaru.say_and_wait(['那个，今天的 ', callname, ' 真的好有魄力啊！']);
    await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
    ]);
    await era.printAndWait([
      '不过眼看着有马纪念就要到了，',
      me.get_colored_name(),
      ' 还是压下了自己逐渐膨胀的欲望。',
    ]);
    await era.printAndWait([
      '还没有星星可以装在圣诞树的顶端，和 ',
      kitaru.get_colored_name(),
      ' 一起去拿下最后的星星吧。',
    ]);
    await era.printAndWait('要是有马纪念之后再来庆祝圣诞节或许会比较好吧。');
  }
  return true;
};
