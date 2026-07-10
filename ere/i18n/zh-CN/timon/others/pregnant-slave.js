/**
 * @file 孕袋相关事件
 * @author 幽白書
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  setColor,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { akuochi, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const { degeneration_to_evil } = require('#/i18n/zh-CN/snippets');

module.exports = {
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await printAndWait([
      '在指导了 ',
      chara.get_colored_name(),
      ' 课业方面的知识后，',
      chara.get_colored_name(),
      ' 红着脸颊望着 ',
      you.get_colored_name(),
      '，接下来，该轮到性教育的时间了。',
    ]);
    await printAndWait([
      '明明 ',
      you.get_colored_name(),
      ' 才是指导者，但 ',
      chara.get_colored_name(),
      ' 却比 ',
      you.get_colored_name(),
      ' 自己都了解自己的身体，在 ',
      chara.get_colored_name(),
      ' 的手中，',
      you.get_colored_name(),
      ' 被迫理解了自己身体的每个敏感点，以及它们被触碰时自己会做出的羞人反应。',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' 带着 ',
      you.get_colored_name(),
      ' 到枯树洞旁，',
    ]);
    await printAndWait([
      '正当 ',
      you.get_colored_name(),
      ` 以为${chara.sex}是最近有压力想宣泄时，却被措不及防的推倒在树桩上。`,
    ]);
    await printAndWait([
      '随后 ',
      you.get_colored_name(),
      ' 下半身的衣装被缓缓脱下，温热的肉柱抵住了自己的穴口。',
    ]);
    await printAndWait([
      '如果发出声音的话，树洞的回音效果一定会让 ',
      you.get_colored_name(),
      ' 的声音响彻校园吧。',
    ]);
    await printAndWait([
      `要是被自己的负责${chara.uma_sex_title}按在枯树洞上干的事情传出去的话，`,
      you.get_colored_name(),
      ' 身为训练员的声名就完蛋了吧……',
    ]);
    await printAndWait('不过，本来那种东西也早就没有了。');
    await printAndWait([
      you.get_colored_name(),
      ' 在枯树洞旁浪叫着，但对身为',
      get('flag:35') === 2 ? '性奴' : '孕袋',
      '的 ',
      you.get_colored_name(),
      ' 而言，这也不过是平常的一天罢了。',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' 牵着 ',
      you.get_colored_name(),
      ' 的手，一起到中庭约会。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' 夹着双腿，大腿两侧白色的液体缓缓流下，脸上的口罩仿佛被什么液体浸润过，湿漉漉的贴着 ',
      you.get_colored_name(),
      ` 的口鼻，身上那股发情的气味连路过的${chara.uma_sex_title}都不禁红着脸捏起鼻子。`,
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async school_rooftop(chara, you) {
    await printAndWait([
      '在天台上的公开露出……如果有人在此时抬起头的话，',
      you.get_colored_name(),
      ' 绝对会忍不住的。',
    ]);
    await printAndWait(`天台下方，训练场上奔跑着的${chara.uma_sex_title}们。`);
    await printAndWait(
      '要是被看到的话，一定会忍不住高潮的，喷出的潮水会如雨水一样落在下面的人身上……',
    );
    await printAndWait([
      '然而，被 ',
      chara.get_colored_name(),
      ' 抬起一条腿，维持着无从施力的姿势的 ',
      you.get_colored_name(),
      ' 只能依靠着天台上保护用的栅栏网，任凭铁丝在乳房上压出红色的印痕。',
    ]);
    // TALENTNAME:32 = 泌乳
    if (get('talent:0:32') > 0) {
      await printAndWait('啊啊，居然被挤出来了……');
      await printAndWait([
        `在私处的潮水涌出前，先一步落在下面${chara.uma_sex_title}头上的是从 `,
        you.get_colored_name(),
        ' 的乳头细流涌出的乳汁。',
      ]);
    }
  },
  race_start: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await printAndWait([
        `当其他训练员都在为自己的负责${chara.uma_sex_title}做最后叮嘱时，`,
        you.get_colored_name(),
        ' 却在吞吐着 ',
        chara.get_colored_name(),
        ' 的肉棒，',
      ]);
      await printAndWait([
        '沉醉于赛前热血气氛中的 ',
        chara.get_colored_name(),
        // FLAGNAME:35 = 惩戒力度
        ' 那硬朗的下体自然需要解决，这也是身为',
        get('flag:35') === 2 ? '性奴' : '孕袋',
        '的 ',
        you.get_colored_name(),
        ' 不可缺少的职责。',
      ]);
      await printAndWait([
        '在将所有精液吞入口中后，',
        you.get_colored_name(),
        ' 为 ',
        chara.get_colored_name(),
        ' 的肉棒献上祈祷比赛顺利的吻作为祝福。',
      ]);
    };
    f.title = '竞赛之前';
    return f;
  })(),
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await printAndWait([
        you.get_colored_name(),
        ' 被 ',
        child.get_colored_name(),
        ' 与 ',
        father.get_colored_name(),
        ' 紧紧夹在中间，',
      ]);
      await printAndWait([
        '两根灼热的肉棒一起进攻着 ',
        you.get_colored_name(),
        ' 的前后两穴，每一次插入都带来一阵全新的快感。',
      ]);
      await printAndWait([
        '恍惚间，',
        you.get_colored_name(),
        ' 想起 ',
        child.get_colored_name(),
        ' 刚出生时的事——',
      ]);
      await you.used_to_say_and_wait(
        '甚至，等到孩子长大之后……被孩子与孩子的父亲一起使用，被紧紧夹在中间，沉溺于雄性的肉棒之中……',
        true,
      );
      await printAndWait('那时的妄想，已经变成了现实……');
    };
    f.title = '父子丼';
    return f;
  })(),
  /**
   * 被父子丼睡奸惊醒
   * @author 幽白書
   * @param {CharaTalk} chara 孩子的父亲
   * @param {CharaTalk} child 孩子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname_c 孩子对玩家的称呼
   */
  async be_awake_as_slave(chara, child, you, callname_c) {
    await printAndWait(['半夜，', you.get_colored_name(), ' 惊醒过来']);
    await printAndWait('身为孕袋，哪怕睡眠时间也不能忘记自己的职责');
    await printAndWait('只是今天来使用自己的客人比较特殊而已');
    println();
    await printAndWait([
      you.get_colored_name(),
      ' 感受着身前身后不同频率的冲击',
    ]);
    await printAndWait([
      child.get_colored_name(),
      ' 一边低声喊着 ',
      callname_c,
      ' 一边晃动着腰，每一下都能顶到 ',
      you.get_colored_name(),
      ' 的最深处',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' 跪伏在床上，害羞的感受着被自己的孩子用野兽一般的姿势侵犯的感觉',
    ]);
    await printAndWait(
      '身为人母的尊严——假如真的有过那种东西的话——在此刻彻底消失殆尽',
    );
    await printAndWait([
      '像母狗一样摇晃着屁股，渴望被欺负的模样也惹得正在被 ',
      you.get_colored_name(),
      ' 用嘴服侍的 ',
      chara.get_colored_name(),
      ' 一阵取笑',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' 只能将口中的肉棒含的更深，将自己的脸埋进那浓厚的腥臭味中来逃避现实',
    ]);
    println();
    await printAndWait([
      '没过一会，',
      chara.get_colored_name(),
      ' 与 ',
      child.get_colored_name(),
      ' 便射出了浓浓的精液',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' 将口中的精液吐出，涂满手后，再将手指插入自己的小穴内，缓缓搅拌，溢出的白浆也被 ',
      you.get_colored_name(),
      ' 用另一只手沾起吞下',
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        ' 的精液与 ',
        child.get_colored_name(),
        ' 的精液混合在一起，究竟谁会先让自己怀孕呢？',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' 畅想着，却没注意到眼前的 ',
        chara.get_colored_name(),
        ' 与 ',
        child.get_colored_name(),
        ' 的肉棒因 ',
        you.get_colored_name(),
        ' 的举动已经再度翘起',
      ]);
    } else {
      await printAndWait([
        '看到 ',
        you.get_colored_name(),
        ' 的举动，',
        chara.get_colored_name(),
        ' 与 ',
        child.get_colored_name(),
        ' 的肉棒已经再度翘起',
      ]);
    }
    await printAndWait('夜晚还在继续……');
  },
  morning_duty: (() => {
    /**
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {string} your_title 玩家当前头衔（XX性奴/XX孕袋）
     * @param {string} penis_desc 角色阴茎的描述
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([you.get_colored_name(), ' 被击打脸颊的温热唤醒。']);
      if (chara.sex_code === 0) {
        await printAndWait([
          '折磨了 ',
          you.get_colored_name(),
          ' 一整晚的 ',
          chara.get_colored_name(),
          ' 又一次饮用了药物，屈尊用',
          chara.sex,
          '那根高贵的',
          penis_desc,
          '肉棒作为闹钟。',
        ]);
      } else {
        await printAndWait([
          '折磨了 ',
          you.get_colored_name(),
          ' 一整晚的 ',
          chara.get_colored_name(),
          ' 又一次屈尊用',
          chara.sex,
          '那根高贵的',
          penis_desc,
          '肉棒作为闹钟。',
        ]);
      }
      await printAndWait([
        '——提醒着 ',
        you.get_colored_name(),
        '，',
        you.sex,
        '还有未尽的义务。从早到晚，周而复始。',
      ]);
      ret.push(await degeneration_to_evil('顺从地含住', '厌恶地扭过脸去'));
      if (ret[0] === 1) {
        await printAndWait([
          '其实不劳费心，',
          you.get_colored_name(),
          ' 刚刚张开一点嘴唇，那根肉棒就迫不及待地捅了进来。',
        ]);
        await printAndWait([
          '在 ',
          chara.get_colored_name(),
          ' 肆意地使用之下，',
          you.get_colored_name(),
          ' 温顺地用唇舌服侍着。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          '，今天也牢记着自己的职责……',
        ]);
      } else {
        await printAndWait([
          '即使沦落到这步田地，',
          you.get_colored_name(),
          ' 也是有尊严、至少是脾气的——',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 只是微微扭开了脸、正打算如此主张时，早已失去耐心的 ',
          chara.get_colored_name(),
          ' 主人甩了 ',
          you.get_colored_name(),
          ' 一个耳光，提醒着 ',
          you.get_colored_name(),
          ' 现在到底是何等处境。',
        ]);
        await printAndWait([
          '随后，',
          chara.get_colored_name(),
          ' 不再希冀 ',
          you.get_colored_name(),
          ' 的配合，就开始自行取用这顿自助的早餐。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          '，今天也被灌输着、自己的职责……',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = '隔日清晨之义务履行';
    return f;
  })(),
  /**
   * 性奴/孕袋工作事件
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} sex 她 or 他
   * @param {string} they 她们 or 他们
   * @param {string} slave 性奴 or 孕袋
   */
  work(you, uma, sex, they, slave) {
    print([
      '【今天 ',
      you.get_colored_name(),
      ' 也被要求进行',
      slave,
      '的工作】',
    ]);
    const buffer = [
      () => {
        print([
          you.get_colored_name(),
          ' 被带到赛场的选手休息室，慰劳比赛中失利的',
          uma,
          '们。',
        ]);
        print([
          '休息室门一关，',
          you.get_colored_name(),
          ' 聊胜于无的衣服就被完全扯下，身体被激烈的肉棒冲击得不断颤抖。',
        ]);
        print([
          uma,
          '们尽情发泄着失败的悲愤，在 ',
          you.get_colored_name(),
          ' 的身上留下道道爪印和齿痕……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' 被带到赛场的选手休息室，慰劳贡献了精彩比赛的',
          uma,
          '们。',
        ]);
        print([
          '在其他选手之前，夺冠',
          uma,
          '率先蹦了进来，推倒',
          you.get_colored_name(),
          '之前甚至还打了声招呼。',
        ]);
        print([
          sex,
          '一边笑着一边扭腰，在 ',
          you.get_colored_name(),
          ' 的子宫中伴着尿射出了精液……',
        ]);
      },
      () => {
        print(['在前往工作之前，', you.get_colored_name(), ' 决定上个厕所。']);
        print([
          '还未开始，五六根肉棒就堵住了 ',
          you.get_colored_name(),
          ' 的去路。',
        ]);
        print([
          you.get_colored_name(),
          ' 被迫憋着尿服侍',
          uma,
          '大人们，很快就在白浊中表演了强烈的失禁……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' 被一对看起来关系很好的',
          uma,
          '点单。',
        ]);
        print([
          they,
          '挺着肉棒，一前一后侵犯 ',
          you.get_colored_name(),
          ' 的下体。',
        ]);
        print([
          '在双重的强烈刺激之下，',
          you.get_colored_name(),
          ' 伴随着熟悉的内射感发生了盛大的高潮，失去了意识……',
        ]);
      },
      () => {
        print([you.get_colored_name(), ' 被要求参与', uma, '的誓师大会。']);
        print([
          '作为大会的一部分，',
          uma,
          '们排着队使用 ',
          you.get_colored_name(),
          ' 从里到外的每一个淫穴。',
        ]);
        print([
          '每时每刻都有一到三根肉棒在体内进进出出，在被完全填满之前 ',
          you.get_colored_name(),
          ' 已经爽得魂飞天外了……',
        ]);
      },
      () => {
        print([you.get_colored_name(), ' 接待了一同在训练场训练的', uma, '。']);
        print([
          sex,
          '扒光 ',
          you.get_colored_name(),
          ' 的衣服，毫不在意斑斑点点的下体，径直捅了进去。',
        ]);
        print([
          uma,
          '一边抽送，一边戏谑地问 ',
          you.get_colored_name(),
          ' 每天训练前是否都会被担当射进一整天的存货',
        ]);
        print([
          '在极度的快感和羞耻中，',
          you.get_colored_name(),
          ' 失去了意识……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' 去工作的路上被一个小学部',
          uma,
          '堵住了。',
        ]);
        print([
          '来不及拒绝，尚且稚嫩的',
          uma,
          '就露出了与年龄毫不相配的巨大肉棒。',
        ]);
        print([
          '屈服于被改造的身体本能，',
          you.get_colored_name(),
          ' 半推半就地被小学生按在地上，享受着淫穴被巨物进进出出的感觉……',
        ]);
      },
    ];
    if (
      get('talent:0:泌乳') > 0 &&
      get('cflag:0:胸围') - get('cflag:0:下胸围') >= 20
    ) {
      buffer.push(() => {
        print([
          you.get_colored_name(),
          ' 被',
          uma,
          '们绑在架子上，身子前倾，开洞的木板卡住头、手和巨大的乳房。',
        ]);
        print([
          you.get_colored_name(),
          ' 的身体被',
          they,
          '肆意揉捏，乳房更是被大力挤压，喷出洁白的乳汁。',
        ]);
        print([
          uma,
          '们分组轮流操穴和挤奶，在最后才一起将精液射到 ',
          you.get_colored_name(),
          ' 的胸乳和脸上……',
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     */
    const f = async (you, taste, minoru) => {
      await you.say_and_wait(['唔……咕……呜……']);
      println();
      await printAndWait(['特雷森学园内，有个平时总无人造访的地方。']);
      await printAndWait(['堆满了干草堆，被栅栏围住的某个角落，']);
      await printAndWait([
        '看起来像是用来养什么动物的地方，却又从来没看这边有过生物活动的痕迹。',
      ]);
      await printAndWait(['这里是用来做什么的呢？']);
      await printAndWait([you.get_colored_name(), ' 也曾感到疑惑，']);
      println();
      await printAndWait([
        '如今，',
        you.get_colored_name(),
        ' 终于知道这个地方是用来做什么的了。',
      ]);
      println();
      await taste.say_as_unknown_and_wait([
        '惩处！身为孕袋逃避职责，必须严厉责罚！',
      ]);
      await minoru.say_as_unknown_and_wait([
        '本来，作为孕袋就已经是最严厉的惩罚了……原本是希望在为特雷森及',
        taste.uma_sex_title,
        '未来贡献心力的同时，训练员小姐能够好好反省自己的过错，但看来，似乎还是缺了剂猛药呢。',
      ]);
      println();
      await printAndWait(['随着两人的话语落下，']);
      await printAndWait([
        you.get_colored_name(),
        ' 那已经被两人先行使用，白浆还在涓涓流出的红肿小穴，迎来了新的客人。',
      ]);
      const ret = await degeneration_to_evil('服从', '不屈', false);
      await printAndWait([
        '被戴上眼罩和口球的 ',
        you.get_colored_name(),
        '，不知道来人是谁，',
      ]);
      await printAndWait([
        '哪怕想要从声音来听，但被降噪耳机盖住的双耳，哪怕是',
        taste.uma_sex_title,
        '那卓越的听力，也只能听清在体内发出的声音。',
      ]);
      println();
      await printAndWait(['啾啪……啾啪……']);
      println();
      await printAndWait(['缠绵的肉体碰撞声，']);
      await printAndWait([
        '以及仿佛舍不得让身后肉棒离开的，来自阴道口的亲吻声，',
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            '那啾的吻声大的让 ',
            you.get_colored_name(),
            ' 几乎以为，这根肉棒才是自己身体的支配者———倒也不足为奇，这样的想法，今晚的每根肉棒进入 ',
            you.get_colored_name(),
            ' 身体时 ',
            you.get_colored_name(),
            ' 都曾经想过。',
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            '那啾的吻声大的让 ',
            you.get_colored_name(),
            ' 几乎以为，这根肉棒才是自己身体的支配者———',
            you.get_colored_name(),
            ' 本不愿这么想，但因被灌药而昏沉的大脑让 ',
            you.get_colored_name(),
            ' 不得不接受这个事实。',
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(['咕啪……咕啪……']);
      println();
      await printAndWait(['所有的防御，都会迎来被破坏的一天，']);
      await printAndWait([
        '既然如此，防御就是为了被破坏这条等式大抵是成立的。',
      ]);
      await printAndWait([
        '因此，那假装矜持的窄小穴道肯定，是为了让',
        taste.uma_sex_title,
        '大人雄壮的肉棒能有征服感，才会总装着冷漠，却在肉棒大人触碰到的瞬间便缠绕而上，完美的达成从烈女到荡妇的转变，那缠绕时发出的声音，同样也代表着身体主人的态度。',
      ]);
      await printAndWait([
        '明明想怀孕，想的不得了，明明装作正经训练员的模样，就是为了让',
        taste.uma_sex_title,
        '大人在享用自己时能够享受到更多情绪上的满足，',
      ]);
      await printAndWait([
        '结果却因此而丧失了被',
        taste.uma_sex_title,
        '大人的精子侵犯，让',
        taste.uma_sex_title,
        '大人教会自己，自己是多么可悲下贱的雌性的机会，这是何等的得不偿失啊。',
      ]);
      println();
      await printAndWait([
        '幸好，仁慈的',
        taste.uma_sex_title,
        '大人会给予愚笨的孕袋机会。',
      ]);
      println();
      await printAndWait(['咚叩……咚叩……']);
      println();
      await printAndWait(['礼貌敲打着子宫颈口的肉棒，在等待关口的不战而溃，']);
      await printAndWait([
        '全身上下的每个器官，每个组织，每个细胞都已经彻底臣服，',
      ]);
      await printAndWait([
        '现在的撞击声，与其说是对最后防线的冲击，不如说只是形式上的敲门而已，',
      ]);
      await printAndWait([
        '抵抗？孕袋的身体，怎么可能对',
        taste.uma_sex_title,
        '大人的侵犯做出抵抗呢？这是被刻在基因深层的根本逻辑。',
      ]);
      println();
      await printAndWait(['最后，最期待的声音。']);
      await printAndWait([
        '啊啊，',
        you.get_colored_name(),
        ' 不由得将腿张的更开，',
      ]);
      await printAndWait([
        '不知何时，将 ',
        you.get_colored_name(),
        ' 束缚在拟牝台上的皮带已经松绑，',
      ]);
      await printAndWait(['本来这条皮带就没有任何必要，']);
      await printAndWait([
        '毕竟哪有孕袋会反抗',
        taste.uma_sex_title,
        '大人的肉棒呢？',
      ]);
      await printAndWait([
        '哪有孕袋会拒绝',
        taste.uma_sex_title,
        '大人的赏赐呢？',
      ]);
      println();
      await printAndWait([
        '终于，比跑步更加令人心跳加速，比初恋更让人心生荡漾，',
      ]);
      await printAndWait([taste.uma_sex_title, '大人的侵犯，来到了尾声。']);
      println();
      await printAndWait(['咻………咻噜噜噜噜……']);
      println();
      await printAndWait(['来了。']);
      await printAndWait(['就是这个。']);
      await printAndWait([you.get_colored_name(), ' 的心中十分确定，']);
      await printAndWait(['这就是，会进入自己的子宫，']);
      await printAndWait(['让原本贵为此处主人的卵子彻底臣服，']);
      await printAndWait([
        '土下座，舔脚，贡献出母体的一切也要讨好的，',
        taste.uma_sex_title,
        '大人高贵的种付精液。',
      ]);
      await printAndWait(['精子不断的喷涌而出，']);
      await printAndWait([
        '蹂躏，侵犯着 ',
        you.get_colored_name(),
        ' 身体的每个角落，',
      ]);
      await printAndWait(['这就是，身为孕袋的幸福啊。']);
      println();
      await printAndWait(['——————']);
      println();
      await printAndWait(['可惜，欢乐的时光不会永远持续，']);
      await printAndWait(['再漫长的射精也有结束的时候，']);
      await printAndWait([
        '比起仍沉浸于高潮受孕喜悦的废物孕袋大脑，直接与肉棒大人接触的阴道更加急迫的缠绕着柱身，想要恳求对方留下。',
      ]);
      await printAndWait(['或者至少……记住对方的形状，']);
      await printAndWait([
        '…………哪怕，那只是在五秒后，下一根肉棒插入进来时便会遗忘的记忆。',
      ]);
      println();
      await printAndWait(
        '【在精液的浇灌下，泛着妖艳粉光的淫纹悄然改变了形状】',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: '孕袋职责之惩戒' }];
    return f;
  })(),
  punish: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {string} uma_sex_title
     * @param {boolean} is_teammate
     */
    const f = async (you, uma_sex_title, is_teammate) => {
      await printAndWait(['啾啪……啾啪……']);
      println();
      await printAndWait(['又一个夜晚，回到了熟悉的地点，']);
      await printAndWait([
        you.get_colored_name(),
        ' 再度将面罩和口球戴上，熟悉的夜晚再度开演。',
      ]);
      await printAndWait([
        '明明知道，要是一直不履行身为孕袋的义务及责任，会再度来到这里，',
      ]);
      await printAndWait([
        '明明无论是自己的担当，学园里的学生及老师，都会很乐意的帮 ',
        you.get_colored_name(),
        ' 这个「举手之劳」，',
      ]);
      await printAndWait([
        '明明如果停留在那一步，还可以自己选择孩子的父亲是谁，',
      ]);
      if ((await degeneration_to_evil('服从', '不屈')) === 1) {
        await printAndWait([
          '所以，故意走到这一步的 ',
          you.get_colored_name(),
          '，目的也很明白了吧。',
        ]);
        await printAndWait([
          '忘不了那天的欢爱，忘不了自己的一切都被他人掌控的快感，',
        ]);
        await printAndWait(['忘不了纯粹被当成性处理工具的感觉。']);
      } else {
        await printAndWait([
          '所以，走到这一步的 ',
          you.get_colored_name(),
          '，下场也很明白了吧——',
          you.get_colored_name(),
          ' 模糊地想着。',
        ]);
        await printAndWait([
          '是忘不了那天的欢爱，忘不了自己的一切都被他人掌控的快感？',
        ]);
        await printAndWait(['还是忘不了纯粹被当成性处理工具的感觉？']);
        await printAndWait(['——因为被灌药而发烧的耳旁传来这样的低语。']);
      }
      setColor();
      println();
      await printAndWait(['咕扭']);
      await printAndWait([
        '一下重辗，将痛觉和更多的快感从乳头传达到 ',
        you.get_colored_name(),
        ' 的大脑，不好，怎么能在侍奉中分神呢？',
      ]);
      if (is_teammate) {
        await printAndWait([
          '然而，身后',
          uma_sex_title,
          '大人的肉棒却让 ',
          you.get_colored_name(),
          ' 有些熟悉的感觉，',
        ]);
        await printAndWait([
          '一般来讲，应该不是什么问题，毕竟身为孕袋，全学园的',
          uma_sex_title,
          '应该都使用过自己，',
        ]);
        await printAndWait(['但是……这种熟悉的感觉，']);
        await printAndWait(['难道说，身后的', uma_sex_title, '是自己的担当？']);
        await printAndWait(['在隐藏身份的情况下，被担当使用，']);
        await printAndWait([
          '不知为何，',
          you.get_colored_name(),
          ' 产生了一种仿佛被捉奸在床一般的紧张……及兴奋。',
        ]);
        await printAndWait(['一定很生气，一定很愤怒吧，']);
        await printAndWait(['自己的训练员，自己的性奴，自己的孕袋，']);
        await printAndWait([
          '却不肯怀上自己的孩子，甚至宁愿被不知道身份的人轮奸。',
        ]);
      } else {
        await printAndWait([
          '然而，身后',
          uma_sex_title,
          '大人的肉棒却不知为何，显得尤其急躁。',
        ]);
        await printAndWait([
          '一般来讲，应该不是什么问题，毕竟身为孕袋，身为泄欲的工具，怎么粗暴的使用自己都是理所当然的。',
        ]);
        await printAndWait(['但是……如此急切，甚至愤怒的感觉，']);
        await printAndWait(['难道说，身后的', uma_sex_title, '是自己的粉丝？']);
        await printAndWait(['在隐藏身份的情况下，被粉丝使用着，']);
        await printAndWait([
          '不知为何，',
          you.get_colored_name(),
          ' 产生了一种仿佛被捉奸在床一般的紧张……及兴奋。',
        ]);
        await printAndWait(['一定很生气，一定很愤怒吧。']);
        await printAndWait(['崇拜的训练员，憧憬的对象，']);
        await printAndWait([
          '却以如此下贱的姿态，践踏小',
          uma_sex_title,
          '纯真的恋心。',
        ]);
      }
      println();
      await printAndWait(['很愤怒吧，很生气吧。']);
      await printAndWait(['所以，要把这个人尽可夫的母猪，狠狠的在里面播种，']);
      await printAndWait(['要干烂这个母猪的骚穴，要让她怀孕，怀孕，怀孕，']);
      await printAndWait(['让她彻底变成自己肉棒的隶属。']);
      println();
      if (is_teammate) {
        await printAndWait([
          '想到这，',
          you.get_colored_name(),
          ' 的腰扭的更加欢腾了。',
        ]);
        await printAndWait([
          '没过多久，那根肉棒停滞了一会后，射出了 ',
          you.get_colored_name(),
          ' 最期待的白浆，',
        ]);
        await printAndWait(['啊啊……真是可惜，']);
        await printAndWait([
          '某种落空的预感在 ',
          you.get_colored_name(),
          ' 心中浮现，',
        ]);
        await printAndWait([
          '然而，下一根熟悉的肉棒触感又再次将 ',
          you.get_colored_name(),
          ' 操到无力思考那些多余的事。',
        ]);
        println();
        await printAndWait([
          '下一胎，还是让自己心爱的担当',
          uma_sex_title,
          '来吧，',
        ]);
        await printAndWait([
          '恍惚间，',
          you.get_colored_name(),
          ' 下定了不知会不会遵守的决心。',
        ]);
      } else {
        await printAndWait([
          '想到这，',
          you.get_colored_name(),
          ' 的腰扭的更加欢腾了。',
        ]);
        await printAndWait(['然而，或许是猛于进攻而疏忽了防守，']);
        await printAndWait(['也或许只是时间正凑巧，']);
        await printAndWait([
          '正要认真起来的时候，身后的硬直抖了抖，却在穴内泄出了大片的白浆。',
        ]);
        await printAndWait(['啊啊……真是可惜，']);
        await printAndWait([
          '某种空虚的失落感在 ',
          you.get_colored_name(),
          ' 心中浮现。',
        ]);
        await printAndWait([
          '然而，下一根熟悉的肉棒触感又再次将 ',
          you.get_colored_name(),
          ' 操到无力思考那些多余的事。',
        ]);
        println();
        await printAndWait(['下一次，要更努力哦。']);
        await printAndWait([
          '感受着对方射入的精子被更勇猛的肉棒从穴内挖出的感觉，',
          you.get_colored_name(),
          ' 送上了无声的祝福。',
        ]);
      }
      println();
      await printAndWait(
        '【在精液的浇灌下，泛着妖艳粉光的淫纹悄然改变了形状】',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: '孕袋职责之惩戒' }];
    return f;
  })(),
  report_preg_duty: (() => {
    const title = '职责';
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} edu_count
     * @param {number} children_count
     */
    const f = async (you, father, edu_count, children_count) => {
      await printAndWait([
        you.get_colored_name(),
        ' 盯着小腹淫纹上代表怀孕的图案，冲到卫生间呕吐了起来。',
      ]);
      await printAndWait([
        '对这个打乱步调的小生命，',
        you.get_colored_name(),
        ' 决定——',
      ]);
      const ret = await degeneration_to_evil(
        '欢喜地期待到来',
        '无奈地接受事实',
      );
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' 欣喜地畅想着']);
        await printAndWait('有了孩子之后的未来、孩子出生之后的教育……');
        await printAndWait([
          '但是，在 ',
          you.get_colored_name(),
          ' 心中最值得思考的，果然还是',
        ]);
        println();
        await printAndWait('孩子的父亲会是谁呢？');
        await printAndWait(
          `是前几天那个输掉了比赛，在自己的全身留下齿痕作为泄愤的${father.uma_sex_title}？`,
        );
        await printAndWait(
          `还是那个赢下比赛，高兴的甚至在自己的子宫里尿出来的${father.uma_sex_title}？`,
        );
        if (edu_count > 0) {
          await printAndWait(
            `又或者，是那每天的训练时间都会先在自己的小穴内舒服的把一整天的存货灌进来，让自己夹着时不时滴落在走廊上的白浆到训练场上的负责${father.uma_sex_title}？`,
          );
        }
        if (children_count > 0) {
          await printAndWait(
            '又或者，是明明印象中还只是个孩子，却仿佛还记得怎么从妈妈的肚子里出来的一般，每次都能把没用的妈妈操成阿嘿颜母猪的贴心小棉袄？',
          );
        }
        println();
        await printAndWait('无论是谁，新生命的诞生总是令人欢喜');
        await printAndWait([
          '不过，最令 ',
          you.get_colored_name(),
          ' 担心的果然还是……',
        ]);
        println();
        await printAndWait('（孩子出生前，身为孕袋的职责……）');
        println();
        await printAndWait([
          '还没来得及完整的想完一句话，从身后传来的冲击便打断了 ',
          you.get_colored_name(),
          ' 的思绪',
        ]);
        await printAndWait(
          `对方毫不在意自己的意愿，甚至连确认一下下体是否湿润都没有———当然，由于肉体改造所以也无需确认，反正二十四小时都是湿润着欢迎${father.uma_sex_title}大人的使用———就直接插入`,
        );
        await printAndWait([
          '在猛烈的撞击，将 ',
          you.get_colored_name(),
          ' 操到几乎失去意识后，身后的',
          father.uma_sex_title,
          '才好不容易射了出来，用 ',
          you.get_colored_name(),
          ' 的脸擦了擦肉棒后直接转身离去',
        ]);
        await printAndWait([
          '过程中 ',
          you.get_colored_name(),
          ' 甚至不知道对方长什么样子',
        ]);
        println();
        await printAndWait('不说自己已经怀孕');
        await printAndWait(
          `哪怕自己已经大腹便便，对${father.uma_sex_title}主人而言，也就是多了个可以玩弄的部位而已吧`,
        );
        await printAndWait([
          '领悟了这点的 ',
          you.get_colored_name(),
          '，下体又忍不住一阵痉挛，无法控制的潮吹在阳光下竟生成了彩虹，仿佛在恭贺着自己的怀孕一般',
        ]);
      } else {
        await printAndWait('没有什么好意外的');
        await printAndWait(
          '———每天就连上个厕所都会被五六根肉棒堵在门外，最后只能自己将混杂着潮水、精液以及失禁的尿液的地板仔细舔舐干净的生活，怀孕真的有那么难以想像吗？',
        );
        println();
        await printAndWait('孩子的父亲是谁呢？');
        await printAndWait([you.get_colored_name(), ' 又忍不住想到——']);
        await printAndWait(
          `是昨天那对关系看起来很好，连使用孕袋都是一起用的两名${father.uma_sex_title}？`,
        );
        await printAndWait(
          '还是那只在自己面前誓师的队伍里的谁，将自己从里到外每个洞口射满，连吐出的气息都带着浓精味……最后还必须将身上的精液一点点舔入口中和塞进小穴——说不定就是这时怀上的',
        );
        println();
        await printAndWait([
          '不知不觉，',
          you.get_colored_name(),
          ' 的心中莫名因孩子的未来感到恐惧和害怕',
        ]);
        if (children_count > 0) {
          await printAndWait(
            `想起那孩子小时候的事，仿佛才没过去多久，${father.sex}就已经从眼神纯真的幼儿，变成会以带着性欲的目光盯着自己诞生的洞口的野兽`,
          );
          await printAndWait([
            you.get_colored_name(),
            ' 忍不住担心起，自己是否会再度被孩子玩弄成无法称为人母的羞耻模样',
          ]);
        } else {
          await printAndWait(
            `将被生下来的这孩子，会不会变得像其他${father.uma_sex_title}们一样，将自己当成孕袋……`,
          );
          await printAndWait(
            '……不行，必须要尽起职责，最起码，要好好将这孩子养育成材',
          );
        }
        println();
        await printAndWait('由孕袋培养出的孩子，真的有办法正常成人吗？');
        await printAndWait(
          `天天看着自己的妈妈被各式各样的${father.elder_sibling_sex_title}肏到涕沫横流，毫无尊严的求饶的模样`,
        );
        await printAndWait('这样的孩子，真的有可能不屈不挠的茁壮成长吗？');
        await printAndWait('然而，也没什么好嘲笑的');
        await printAndWait([
          '毕竟现在又被路过厕所的小学部',
          father.uma_sex_title,
          '按在地上服侍肉棒的 ',
          you.get_colored_name(),
          '，也只能将希望放在如此微薄的光芒上了',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_in_sleep: (() => {
    const title = '新生命';
    /**
     * 孕袋被睡奸生子
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([you.get_colored_name(), ' 抱起了孩子——']);
      const ret = await degeneration_to_evil('慈爱地轻抚', '无声地反抗');
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' 的心中满是疼爱']);
        await printAndWait('孩子的父亲是谁已经不重要了');
        await printAndWait([
          '甚至不如说，只是进行孕袋的例行工作，就能获得如此可爱的孩子……',
          you.get_colored_name(),
          ' 不禁在心中，对那未曾谋面的孩子父亲道了声谢',
        ]);
        await printAndWait('接下来，一定要好好的把这孩子养育成材……');
        await printAndWait([
          '不知不觉间，曾经在 ',
          you.get_colored_name(),
          ' 心中的，身为训练员的责任感和荣誉感渐渐萌芽……',
        ]);
        printButton('「！」', 1);
        await input();
        await printAndWait([
          '忽然的水流，将 ',
          you.get_colored_name(),
          ' 从幻想中沖醒',
        ]);
        await printAndWait('被抱起的孩子朝着自己的母亲洒出了人生中的第一泡尿');
        await printAndWait([
          '被自己的孩子当成便所，即便只是意外，这都使 ',
          you.get_colored_name(),
          ' 感到无比的快感，仿佛自己便是为了让这孩子能够将自己当成厕所使用才将',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 温柔地帮孩子舔干净了尿出尿液的私处，接着将洒在自己身上的液体全部干干凈凈沾进口中，满足的舔了舔手指',
        ]);
        println();
        await printAndWait('如此下贱的模样，哪怕最低等的孕袋也不过如此');
        await printAndWait('这样的自己，怎么还有可能回到原来的生活');
        await printAndWait('又怎么能够忍受回到那样的生活');
        await printAndWait([
          you.get_colored_name(),
          ' 温柔地看着怀中的孩子，表情依旧',
        ]);
        await printAndWait('但心中想的已然不同');
        await printAndWait(
          '————该怎么做，才能将这孩子养育成最适合调教自己的主人呢？',
        );
      } else {
        await printAndWait(
          '对这个孩子，理论上身为母亲应该要有的感情都变得淡漠',
        );
        await printAndWait('明明知道，刚出生的孩子是无罪的……');
        printButton('「！」', 1);
        await printAndWait(['忽然，', you.get_colored_name(), ' 发出一声惊呼']);
        await printAndWait([
          '孩子的第一泡尿仿佛瞄准了角度一般，顿时喷洒而出，淋了 ',
          you.get_colored_name(),
          ' 一脸',
        ]);
        await printAndWait(
          '护士也发出了善意的笑声，仿佛是为了孩子的健康而喜悦',
        );
        await printAndWait([
          '但 ',
          you.get_colored_name(),
          ' 的心中却毫无喜色，脑海中回想起了那些过往',
        ]);
        println();
        await printAndWait(
          `早上被迫双腿岔开蹲坐，张口为没睡醒的${father.uma_sex_title}处理晨勃，将${father.uma_sex_title}一天的初精和初尿一同吞入腹中的经验`,
        );
        await printAndWait(
          `傍晚，在训练场上就被训练结束的${father.uma_sex_title}们恳求处理性欲，将那充满了一整天未能清理的汗臭和尿垢的肉棒含在口中，让${father.couple_title}将训练的辛劳全数发泄在自己嘴里`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            ' 悲哀地想起前几天的晚上',
          ]);
          await printAndWait([
            '哪怕自己的',
            children_count > 0 ? '孩子' : `负责${father.uma_sex_title}`,
            '梦游到自己房中，半梦半醒间把自己的小穴灌满后再强行撑开自己正处于睡梦中的双唇进行清理，自己都没能醒过来的事',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            ' 甚至开始怀疑，自己是不是已经习惯起这种生活……',
          ]);
          await printAndWait([
            '不行，不能这么想，',
            you.get_colored_name(),
            ' 惊醒般摇了摇头',
          ]);
        }
        println();
        await printAndWait('……果然，想起的都是痛苦的回忆。但是……');
        await printAndWait(
          '看着怀中一无所知，即便尿在自己母亲脸上也不觉得有什么，露出咯咯笑容的孩子',
        );
        await printAndWait('孩子的天性，是无关善恶的……');
        await printAndWait('或许，还能有机会……？');
        println();
        await printAndWait('忘却了孩子对周围行为的学习能力');
        await printAndWait(
          `也忘却了孕袋所要服务的对象是无关身份的「全体${father.uma_sex_title}」`,
        );
        await printAndWait('没发现一旁的护士已经忍不住想要接受孕袋的口穴侍奉');
        await printAndWait(
          '更没发现自己在无意识中舔干净了亲生孩子尿在自己身上的尿液',
        );
        await printAndWait([
          you.get_colored_name(),
          ' 抱着孩子，哪怕被强迫着吮吸护士裙下粗壮的巨物，眼中的光芒也未曾消失',
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            '再一次怀抱着空虚的梦想，',
            you.get_colored_name(),
            ' 下定决心这次一定要好好的养育这个孩子',
          ]);
        } else {
          await printAndWait([
            '怀抱着空虚的梦想，',
            you.get_colored_name(),
            ' 下定决心一定要好好的养育这个孩子',
          ]);
        }
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_after_raped: (() => {
    const title = '新生命';
    /**
     * 孕袋被强奸生子
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' 抱起了孩子——']);
      const ret = await degeneration_to_evil(
        '孩子必须有个爸爸',
        '不，我自己也能照顾的来',
      );
      if (ret === 1) {
        await printAndWait('……无论如何，自己或许可以一个人过');
        await printAndWait('但最起码，还是想让孩子有个完整的家庭');
        println();
        await printAndWait(`看向了孩子的父亲，将手上的孩子抱给${father.sex}看`);
        await printAndWait(`希望这个孩子，能够勾起${father.sex}的责任感`);
        await printAndWait([
          father.get_colored_name(),
          ' 紧紧地将 ',
          you.get_colored_name(),
          ' 与孩子抱在怀中，发誓以后会好好对待 ',
          you.get_colored_name(),
          ' 和孩子',
        ]);
        await printAndWait('浪子回头的父亲，以及不离不弃的母亲');
        await printAndWait('刚刚那一家三口的幻想，仿佛直接化作了现实');
        println();
        await printAndWait('然而……');
        await printAndWait([
          '身为孕袋的职业本能，让 ',
          you.get_colored_name(),
          ' 没有错过',
        ]);
        await printAndWait([
          '在看见自己给婴儿喂奶时，',
          father.get_colored_name(),
          ' 胯下颤动的模样',
        ]);
        println();
        await printAndWait('家庭生活……真是个好理由');
        await printAndWait(
          '这样的话，就算在自己给孩子喂奶的同时将肉棒塞入自己口中，也可以以「补充营养」的名分一言带过吧',
        );
        await printAndWait([
          '作为丈夫的 ',
          father.get_colored_name(),
          ' 亲切的将抱着孩子的自己抱在怀中的画面，想必会让任何对自己家庭有疑问的人抛却疑心吧……只要他们没发现与此同时堵住自己下面流水的小穴的粗壮肉棒',
        ]);
        await printAndWait(
          '甚至，等到孩子长大之后……被孩子与孩子的父亲一起使用，被紧紧夹在中间，沉溺于雄性的肉棒之中……',
        );
        println();
        await printAndWait([
          '想到那样的未来，',
          you.get_colored_name(),
          ' 不由得舔了舔唇……',
        ]);
        await printAndWait('开始期待起那样的明天');
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 瞪着当初痛快在自己体内释放欲望，毫无责任感的在自己体内中出的 ',
          father.get_colored_name(),
        ]);
        await printAndWait(
          `这样的${father.sex}，怎么想也不可能会担起父亲的责任来吧`,
        );
        await printAndWait(
          '自己需要的是在饱受侮辱的时候可以扶持自己与孩子，保护孩子的人',
        );
        await printAndWait(
          '而不是在自己被当成泄欲工具时，会上来用肉棒堵住最后的发声管道的人渣',
        );
        println();
        await printAndWait('就算只有自己一人，也要照顾好这孩子');
        await printAndWait([
          '此刻的 ',
          you.get_colored_name(),
          '，无疑选择了一条最为艰难的道路',
        ]);
        println();
        await printAndWait('忽然，怀中的孩子发出了哭声');
        await printAndWait('是肚子饿了吗？要喝奶吗？');
        await printAndWait('那么……现在的自己，这个饱经调教的身体');
        await printAndWait(
          `在被吸住乳头的时候，一定会想起对自己的乳头又咬又舔的那些${father.uma_sex_title}们吧`,
        );
        await printAndWait(
          '在被含住乳房的瞬间，一定会因为回忆起被揉胸挤奶的那些晚上而瞬间高潮吧',
        );
        await printAndWait(
          '甚至，在孩子喝完奶，躺在自己胸间时……会不会想起，那和婴儿体温差不多的肉棒在自己胸前宣示主权，最后在自己口中灌入浓浓白浆的时候呢？',
        );
        println();
        await printAndWait('然后，即便撑过了这些，好不容易将这孩子养育成人……');
        await printAndWait(
          '当孩子，将那还不懂得什么叫作爱，就已经靠着本能明白什么叫做性的眼光投向自己时',
        );
        await printAndWait('自己又该如何是好');
        println();
        await printAndWait('眼前的道路，仿佛一片漆黑……');
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_dedicate: (() => {
    const title = '新生命';
    /**
     * 孕袋主动献身生子
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' 抱起了孩子——']);
      const ret = await degeneration_to_evil('回忆欢愉', '泛起母爱');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' 抱着孩子，心中涌起某种激荡',
        ]);
        await printAndWait([
          '这是 ',
          you.get_colored_name(),
          ' 和 ',
          father.get_colored_name(),
          ' 结合诞下的孩子',
        ]);
        await printAndWait('……不……不是结合');
        await printAndWait([
          '而是 ',
          you.get_colored_name(),
          ' 的基因主动臣服，跪伏在 ',
          father.get_colored_name(),
          ' 的基因下诞生出的产物',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 的身体，无法抗拒身体的相性，无法抵抗基因底层的渴望',
        ]);
        await printAndWait([
          '看着这孩子的模样，',
          you.get_colored_name(),
          ' 心中百般怜爱',
        ]);
        await printAndWait([
          '每个从它身上看出的，来自 ',
          father.get_colored_name(),
          ' 的影子，都代表着一次又一次强烈而毫不留情的甜蜜侵犯',
        ]);
        await printAndWait([
          '想到未来带着这孩子出门的画面，就仿彿带着自己是 ',
          father.get_colored_name(),
          ' 的专属孕袋的证明出行……',
        ]);
        await printAndWait([you.get_colored_name(), ' 的下体忍不住颤抖了起来']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 抱着孩子，心中涌起某种波澜',
        ]);
        await printAndWait([
          '这是 ',
          you.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 结合诞下的孩子',
        ]);
        await printAndWait('不……不是结合');
        await printAndWait([
          '而是 ',
          father.get_colored_name(),
          ' 的基因侵犯了 ',
          you.get_colored_name(),
          ' 的基因后诞生出的产物',
        ]);
        await printAndWait([
          '难以反抗这具身体天生的奴性，哪怕心底无法接受，甚至厌恶这一切，经过改造的身体也会自己把小宝宝的房间敞开，做好被 ',
          father.get_colored_name(),
          ' 播种的一切准备',
        ]);
        await printAndWait([
          '看着怀中的孩子，',
          you.get_colored_name(),
          ' 应该要恨的',
        ]);
        await printAndWait([
          '每个从它身上看出的，来自 ',
          father.get_colored_name(),
          ' 的影子，都代表着一次又一次强烈而毫不留情的侵犯',
        ]);
        await printAndWait([
          '在怀上这孩子的那个晚上，在 ',
          father.get_colored_name(),
          ' 要求下，',
          you.get_colored_name(),
          ' 像小狗一样趴着，直到灌满了精液，双手再无力支撑身体，',
          father.get_colored_name(),
          ' 才把肉棒拔出，塞进 ',
          you.get_colored_name(),
          ' 的嘴里作为结束',
        ]);
        await printAndWait([
          '然而或许两人之间的基因就是如此登对，',
          you.get_colored_name(),
          ' 发现自己恨不起来，心中涌现的只有名母爱的感情',
        ]);
        await printAndWait([
          '——只是，',
          you.get_colored_name(),
          ' 尚不知道，在这孩子成长之后，这种感情会再度演化为基因上的屈服……',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
