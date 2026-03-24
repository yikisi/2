/**
 * @file 孕袋职责之惩戒 - H事件
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { akuochi } = require('#/data/color-const');

const { degeneration_to_evil } = require('#/i18n/zh-CN/snippets');

module.exports = {
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} yayoi
     * @param {CharaTalk} tazuna
     */
    const f = async (you, yayoi, tazuna) => {
      await you.say_and_wait(['唔……咕……呜……']);
      era.println();
      await era.printAndWait(['特雷森学园内，有个平时总无人造访的地方。']);
      await era.printAndWait(['堆满了干草堆，被栅栏围住的某个角落，']);
      await era.printAndWait([
        '看起来像是用来养什么动物的地方，却又从来没看这边有过生物活动的痕迹。',
      ]);
      await era.printAndWait(['这里是用来做什么的呢？']);
      await era.printAndWait([you.get_colored_name(), ' 也曾感到疑惑，']);
      era.println();
      await era.printAndWait([
        '如今，',
        you.get_colored_name(),
        ' 终于知道这个地方是用来做什么的了。',
      ]);
      era.println();
      await yayoi.say_as_unknown_and_wait([
        '惩处！身为孕袋逃避职责，必须严厉责罚！',
      ]);
      await tazuna.say_as_unknown_and_wait([
        '本来，作为孕袋就已经是最严厉的惩罚了……原本是希望在为特雷森及',
        yayoi.uma_sex_title,
        '未来贡献心力的同时，训练员小姐能够好好反省自己的过错，但看来，似乎还是缺了剂猛药呢。',
      ]);
      era.println();
      await era.printAndWait(['随着两人的话语落下，']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 那已经被两人先行使用，白浆还在涓涓流出的红肿小穴，迎来了新的客人。',
      ]);
      const ret = await degeneration_to_evil('服从', '不屈');
      await era.printAndWait([
        '被戴上眼罩和口球的 ',
        you.get_colored_name(),
        '，不知道来人是谁，',
      ]);
      await era.printAndWait([
        '哪怕想要从声音来听，但被降噪耳机盖住的双耳，哪怕是',
        yayoi.uma_sex_title,
        '那卓越的听力，也只能听清在体内发出的声音。',
      ]);
      era.println();
      await era.printAndWait(['啾啪……啾啪……']);
      era.println();
      await era.printAndWait(['缠绵的肉体碰撞声，']);
      await era.printAndWait([
        '以及仿佛舍不得让身后肉棒离开的，来自阴道口的亲吻声，',
      ]);
      if (ret === 1) {
        await era.printAndWait(
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
        await era.printAndWait(
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
      era.println();
      await era.printAndWait(['咕啪……咕啪……']);
      era.println();
      await era.printAndWait(['所有的防御，都会迎来被破坏的一天，']);
      await era.printAndWait([
        '既然如此，防御就是为了被破坏这条等式大抵是成立的。',
      ]);
      await era.printAndWait([
        '因此，那假装矜持的窄小穴道肯定，是为了让',
        yayoi.uma_sex_title,
        '大人雄壮的肉棒能有征服感，才会总装着冷漠，却在肉棒大人触碰到的瞬间便缠绕而上，完美的达成从烈女到荡妇的转变，那缠绕时发出的声音，同样也代表着身体主人的态度。',
      ]);
      await era.printAndWait([
        '明明想怀孕，想的不得了，明明装作正经训练员的模样，就是为了让',
        yayoi.uma_sex_title,
        '大人在享用自己时能够享受到更多情绪上的满足，',
      ]);
      await era.printAndWait([
        '结果却因此而丧失了被',
        yayoi.uma_sex_title,
        '大人的精子侵犯，让',
        yayoi.uma_sex_title,
        '大人教会自己，自己是多么可悲下贱的雌性的机会，这是何等的得不偿失啊。',
      ]);
      era.println();
      await era.printAndWait([
        '幸好，仁慈的',
        yayoi.uma_sex_title,
        '大人会给予愚笨的孕袋机会。',
      ]);
      era.println();
      await era.printAndWait(['咚叩……咚叩……']);
      era.println();
      await era.printAndWait([
        '礼貌敲打着子宫颈口的肉棒，在等待关口的不战而溃，',
      ]);
      await era.printAndWait([
        '全身上下的每个器官，每个组织，每个细胞都已经彻底臣服，',
      ]);
      await era.printAndWait([
        '现在的撞击声，与其说是对最后防线的冲击，不如说只是形式上的敲门而已，',
      ]);
      await era.printAndWait([
        '抵抗？孕袋的身体，怎么可能对',
        yayoi.uma_sex_title,
        '大人的侵犯做出抵抗呢？这是被刻在基因深层的根本逻辑。',
      ]);
      era.println();
      await era.printAndWait(['最后，最期待的声音。']);
      await era.printAndWait([
        '啊啊，',
        you.get_colored_name(),
        ' 不由得将腿张的更开，',
      ]);
      await era.printAndWait([
        '不知何时，将 ',
        you.get_colored_name(),
        ' 束缚在拟牝台上的皮带已经松绑，',
      ]);
      await era.printAndWait(['本来这条皮带就没有任何必要，']);
      await era.printAndWait([
        '毕竟哪有孕袋会反抗',
        yayoi.uma_sex_title,
        '大人的肉棒呢？',
      ]);
      await era.printAndWait([
        '哪有孕袋会拒绝',
        yayoi.uma_sex_title,
        '大人的赏赐呢？',
      ]);
      era.println();
      await era.printAndWait([
        '终于，比跑步更加令人心跳加速，比初恋更让人心生荡漾，',
      ]);
      await era.printAndWait([yayoi.uma_sex_title, '大人的侵犯，来到了尾声。']);
      era.println();
      await era.printAndWait(['咻………咻噜噜噜噜……']);
      era.println();
      await era.printAndWait(['来了。']);
      await era.printAndWait(['就是这个。']);
      await era.printAndWait([you.get_colored_name(), ' 的心中十分确定，']);
      await era.printAndWait(['这就是，会进入自己的子宫，']);
      await era.printAndWait(['让原本贵为此处主人的卵子彻底臣服，']);
      await era.printAndWait([
        '土下座，舔脚，贡献出母体的一切也要讨好的，',
        yayoi.uma_sex_title,
        '大人高贵的种付精液。',
      ]);
      await era.printAndWait(['精子不断的喷涌而出，']);
      await era.printAndWait([
        '蹂躏，侵犯着 ',
        you.get_colored_name(),
        ' 身体的每个角落，',
      ]);
      await era.printAndWait(['这就是，身为孕袋的幸福啊。']);
      era.println();
      era.println();
      await era.printAndWait(['——————']);
      era.println();
      await era.printAndWait(['可惜，欢乐的时光不会永远持续，']);
      await era.printAndWait(['再漫长的射精也有结束的时候，']);
      await era.printAndWait([
        '比起仍沉浸于高潮受孕喜悦的废物孕袋大脑，直接与肉棒大人接触的阴道更加急迫的缠绕着柱身，想要恳求对方留下。',
      ]);
      await era.printAndWait(['或者至少……记住对方的形状，']);
      await era.printAndWait([
        '…………哪怕，那只是在五秒后，下一根肉棒插入进来时便会遗忘的记忆。',
      ]);
    };
    f.title = '孕袋职责之惩戒';
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
      await era.printAndWait(['啾啪……啾啪……']);
      era.println();
      await era.printAndWait(['又一个夜晚，回到了熟悉的地点，']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 再度将面罩和口球戴上，熟悉的夜晚再度开演。',
      ]);
      await era.printAndWait([
        '明明知道，要是一直不履行身为孕袋的义务及责任，会再度来到这里，',
      ]);
      await era.printAndWait([
        '明明无论是自己的担当，学园里的学生及老师，都会很乐意的帮 ',
        you.get_colored_name(),
        ' 这个「举手之劳」，',
      ]);
      await era.printAndWait([
        '明明如果停留在那一步，还可以自己选择孩子的父亲是谁，',
      ]);
      if ((await degeneration_to_evil('服从', '不屈')) === 1) {
        era.setColor(akuochi[1]);
        await era.printAndWait([
          '所以，故意走到这一步的 ',
          you.get_colored_name(),
          '，目的也很明白了吧。',
        ]);
        await era.printAndWait([
          '忘不了那天的欢爱，忘不了自己的一切都被他人掌控的快感，',
        ]);
        await era.printAndWait(['忘不了纯粹被当成性处理工具的感觉。']);
      } else {
        era.setColor(akuochi[0]);
        await era.printAndWait([
          '所以，走到这一步的 ',
          you.get_colored_name(),
          '，下场也很明白了吧——',
          you.get_colored_name(),
          ' 模糊地想着。',
        ]);
        await era.printAndWait([
          '是忘不了那天的欢爱，忘不了自己的一切都被他人掌控的快感？',
        ]);
        await era.printAndWait(['还是忘不了纯粹被当成性处理工具的感觉？']);
        await era.printAndWait(['——因为被灌药而发烧的耳旁传来这样的低语。']);
      }
      era.setColor();
      era.println();
      await era.printAndWait(['咕扭']);
      await era.printAndWait([
        '一下重辗，将痛觉和更多的快感从乳头传达到 ',
        you.get_colored_name(),
        ' 的大脑，不好，怎么能在侍奉中分神呢？',
      ]);
      if (is_teammate) {
        await era.printAndWait([
          '然而，身后',
          uma_sex_title,
          '大人的肉棒却让 ',
          you.get_colored_name(),
          ' 有些熟悉的感觉，',
        ]);
        await era.printAndWait([
          '一般来讲，应该不是什么问题，毕竟身为孕袋，全学园的',
          uma_sex_title,
          '应该都使用过自己，',
        ]);
        await era.printAndWait(['但是……这种熟悉的感觉，']);
        await era.printAndWait([
          '难道说，身后的',
          uma_sex_title,
          '是自己的担当？',
        ]);
        await era.printAndWait(['在隐藏身份的情况下，被担当使用，']);
        await era.printAndWait([
          '不知为何，',
          you.get_colored_name(),
          ' 产生了一种仿佛被捉奸在床一般的紧张……及兴奋。',
        ]);
        await era.printAndWait(['一定很生气，一定很愤怒吧，']);
        await era.printAndWait(['自己的训练员，自己的性奴，自己的孕袋，']);
        await era.printAndWait([
          '却不肯怀上自己的孩子，甚至宁愿被不知道身份的人轮奸。',
        ]);
      } else {
        await era.printAndWait([
          '然而，身后',
          uma_sex_title,
          '大人的肉棒却不知为何，显得尤其急躁。',
        ]);
        await era.printAndWait([
          '一般来讲，应该不是什么问题，毕竟身为孕袋，身为泄欲的工具，怎么粗暴的使用自己都是理所当然的。',
        ]);
        await era.printAndWait(['但是……如此急切，甚至愤怒的感觉，']);
        await era.printAndWait([
          '难道说，身后的',
          uma_sex_title,
          '是自己的粉丝？',
        ]);
        await era.printAndWait(['在隐藏身份的情况下，被粉丝使用着，']);
        await era.printAndWait([
          '不知为何，',
          you.get_colored_name(),
          ' 产生了一种仿佛被捉奸在床一般的紧张……及兴奋。',
        ]);
        await era.printAndWait(['一定很生气，一定很愤怒吧。']);
        await era.printAndWait(['崇拜的训练员，憧憬的对象，']);
        await era.printAndWait([
          '却以如此下贱的姿态，践踏小',
          uma_sex_title,
          '纯真的恋心。',
        ]);
      }
      era.println();
      await era.printAndWait(['很愤怒吧，很生气吧。']);
      await era.printAndWait([
        '所以，要把这个人尽可夫的母猪，狠狠的在里面播种，',
      ]);
      await era.printAndWait([
        '要干烂这个母猪的骚穴，要让她怀孕，怀孕，怀孕，',
      ]);
      await era.printAndWait(['让她彻底变成自己肉棒的隶属。']);
      era.println();
      if (is_teammate) {
        await era.printAndWait([
          '想到这，',
          you.get_colored_name(),
          ' 的腰扭的更加欢腾了。',
        ]);
        await era.printAndWait([
          '没过多久，那根肉棒停滞了一会后，射出了 ',
          you.get_colored_name(),
          ' 最期待的白浆，',
        ]);
        await era.printAndWait(['啊啊……真是可惜，']);
        await era.printAndWait([
          '某种落空的预感在 ',
          you.get_colored_name(),
          ' 心中浮现，',
        ]);
        await era.printAndWait([
          '然而，下一根熟悉的肉棒触感又再次将 ',
          you.get_colored_name(),
          ' 操到无力思考那些多余的事。',
        ]);
        era.println();
        await era.printAndWait([
          '下一胎，还是让自己心爱的担当',
          uma_sex_title,
          '来吧，',
        ]);
        await era.printAndWait([
          '恍惚间，',
          you.get_colored_name(),
          ' 下定了不知会不会遵守的决心。',
        ]);
      } else {
        await era.printAndWait([
          '想到这，',
          you.get_colored_name(),
          ' 的腰扭的更加欢腾了。',
        ]);
        await era.printAndWait(['然而，或许是猛于进攻而疏忽了防守，']);
        await era.printAndWait(['也或许只是时间正凑巧，']);
        await era.printAndWait([
          '正要认真起来的时候，身后的硬直抖了抖，却在穴内泄出了大片的白浆。',
        ]);
        await era.printAndWait(['啊啊……真是可惜，']);
        await era.printAndWait([
          '某种空虚的失落感在 ',
          you.get_colored_name(),
          ' 心中浮现。',
        ]);
        await era.printAndWait([
          '然而，下一根熟悉的肉棒触感又再次将 ',
          you.get_colored_name(),
          ' 操到无力思考那些多余的事。',
        ]);
        era.println();
        await era.printAndWait(['下一次，要更努力哦。']);
        await era.printAndWait([
          '感受着对方射入的精子被更勇猛的肉棒从穴内挖出的感觉，',
          you.get_colored_name(),
          ' 送上了无声的祝福。',
        ]);
      }
    };
    f.title = '孕袋职责之惩戒';
    return f;
  })(),
};
