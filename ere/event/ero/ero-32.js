const {
  drawLine,
  get,
  getCharactersInTrain,
  printAndWait,
  println,
  set,
} = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @type {Record<string,function>} */
const handlers = {};

handlers[ero_hooks.ero_start] = async () => {
  const callname = sys_get_callname(32, 0),
    life_marks = new TachyonLifeMarks(),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  if (
    sys_check_awake(0) &&
    sys_check_awake(32) &&
    getCharactersInTrain().length === 2 &&
    me.sex_code > 0 &&
    tachyon.sex_code - 1 &&
    check_pregnant_unprotect(0) &&
    check_pregnant_unprotect(32) &&
    get('love:32') >= 75 &&
    life_marks.reward < 3
  ) {
    life_marks.reward++;
    await print_event_name('实验的报酬', tachyon);
    switch (life_marks.reward) {
      case 1:
        await printAndWait('总算结束了……');
        await printAndWait([me.get_colored_name(), ' 伸了个懒腰，忍不住感慨']);
        await printAndWait([
          '最近 ',
          tachyon.get_colored_name(),
          ' 的实验越来越多，也越来越复杂及麻烦',
        ]);
        await printAndWait([
          '虽说危险度没那么高，但加上训练员的本职工作后忙碌程度甚至让 ',
          me.get_colored_name(),
          ' 有些怀念那些危险的实验了',
        ]);
        println();
        await tachyon.say_and_wait(['辛苦了，', callname, '……']);
        await tachyon.say_and_wait('放心吧，之后会好好给你奖励的');
        println();
        await printAndWait('奖励……？');
        await printAndWait([
          '虽然不知道具体是什么，但奖励这个词还是激励了疲累的 ',
          me.get_colored_name(),
        ]);
        println();
        await printAndWait('在收拾完实验器材后');
        println();
        await tachyon.say_and_wait('那么……作为奖励，就让我来帮你处理一下吧');
        await tachyon.say_and_wait('几天下来，积累的东西❤');
        println();
        await printAndWait('……欸？');
        println();
        await tachyon.say_and_wait('这种反应……难道，要拒绝吗？');
        await tachyon.say_and_wait('明明，都是恋人了不是吗？');
        println();
        await printAndWait('送到眼前的肉，哪有不吃的道理！');
        await printAndWait(
          '再说……这几天由于实验的关系，确实也都没怎么发泄欲望……',
        );
        await printAndWait(
          '这样的话，让自己的恋人来帮忙……应该也不是什么过分的事吧',
        );
        println();
        await printAndWait([
          '鬼使神差下，',
          me.get_colored_name(),
          ' 脱下了裤子',
        ]);
        println();
        await tachyon.say_and_wait('嘶……');
        println();
        await printAndWait([
          '虽然没有动画里甚至冒出蒸气那么夸张，但闷了一天的肉棒，依然散发出了足以挑逗起任何',
          tachyon.get_uma_sex_title(),
          '性欲的气味来',
        ]);
        await printAndWait([
          tachyon.get_colored_name(),
          ' 紧紧盯着眼前的肉棒，移不开视线',
        ]);
        println();
        await tachyon.say_and_wait('不行……忍不住了……❤');
        println();
        await printAndWait([
          me.get_colored_name(),
          ' 差点都忘记了，这几天由于实验导致欲望积累的，可不只 ',
          me.get_colored_name(),
          ' 一人而已',
        ]);
        await printAndWait([
          '一直在身旁做着实验的 ',
          tachyon.get_colored_name(),
          ' 想必也是如此',
        ]);
        await printAndWait('这么说来……比起奖励，果然只是找理由……');
        println();
        await printAndWait([
          '想到这，',
          me.get_colored_name(),
          ' 的心中忍不住起了坏心眼',
        ]);
        await printAndWait([
          '看见 ',
          me.get_colored_name(),
          ' 掏出肉棒后就不再动作的模样，',
          tachyon.get_colored_name(),
          ' 心急的看着 ',
          me.get_colored_name(),
        ]);
        println();
        await tachyon.say_and_wait([callname, '……再等什么呢，快点，进来']);
        println();
        await printAndWait([
          tachyon.get_colored_name(),
          ' 撅起双唇，唇间的粉舌前后移动着，尝试勾起 ',
          me.get_colored_name(),
          ' 的情欲',
        ]);
        await printAndWait([
          '但 ',
          me.get_colored_name(),
          ' 依然没有做出反应，明白了 ',
          me.get_colored_name(),
          ' 的意图的 ',
          tachyon.get_colored_name(),
          ' 露出了哀怨的神情',
        ]);
        println();
        await tachyon.say_and_wait('……真过分');
        println();
        await printAndWait([
          tachyon.get_colored_name(),
          ' 蹲在地上，仿佛恳求一般仰视着高高翘起的肉棒',
        ]);
        println();
        await tachyon.say_and_wait([
          '求你了，',
          callname,
          '……让我啾啵啾啵的……好好品尝……',
          callname,
          ' 的肉棒……❤',
        ]);
        println();
        await printAndWait([
          '见到 ',
          me.get_colored_name(),
          ' 总算慢慢靠前了，',
          tachyon.get_colored_name(),
          ' 猴急的将鼻子贴近了肉棒，深深的猛闻了几下',
        ]);
        await printAndWait('不老实的手咕啾咕啾的抠弄着蜜穴，发出呻吟');
        await quick_make_love(
          new EroParticipant(32, part_enum.hand),
          new EroParticipant(32, part_enum.virgin),
          false,
        );
        await printAndWait(
          '在理性与感性都认可的这名雄性面前，身为雌性的自己只能跪在地上臣服',
        );
        println();
        await tachyon.say_and_wait('嘶……哈……嘶……');
        await tachyon.say_and_wait('肉棒……肉棒的味道');
        await tachyon.say_and_wait([
          '请……让我再多闻闻……',
          callname,
          ' 的……肉棒……',
        ]);
        await tachyon.say_and_wait('鼻腔里面……全都是……雄性的味道');
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(32, part_enum.body),
          false,
        );
        await quick_make_love(
          new EroParticipant(32, part_enum.hit),
          new EroParticipant(32, part_enum.mouth, -0.5),
          false,
        );
        println();
        await printAndWait([me.get_colored_name(), ' 握着满是先走汁的肉棒']);
        await printAndWait([
          '恶作剧的来回磨蹭着不知何时已经跪在自己面前的 ',
          tachyon.get_colored_name(),
          ' 的鼻尖',
        ]);
        await printAndWait([
          '仿佛在做标记般，将汁液和气味涂满了 ',
          tachyon.get_colored_name(),
          ' 的鼻子',
        ]);
        println();
        await tachyon.say_and_wait(
          '过分……要是……闻到这种味道……不就真的……回不去了……',
        );
        println();
        await printAndWait('不喜欢的话，那就算了？');
        await printAndWait([
          me.get_colored_name(),
          ' 作势要抽身而去，却看 ',
          tachyon.get_colored_name(),
          ' 亦步亦趋的跟随着，其中鼻子完全没离开过肉棒哪怕一厘米的距离',
        ]);
        println();
        await tachyon.say_and_wait('光是味道……就要去了……');
        println();
        await printAndWait('仿佛担心又一次的恶作剧');
        await printAndWait([
          tachyon.get_colored_name(),
          ' 反过来用鼻尖不停刮蹭着 ',
          me.get_colored_name(),
          ' 的龟头尖端',
        ]);
        await printAndWait('仿佛要牢记这股味道一般，用力嗅着肉棒的臭味');
        println();
        await tachyon.say_and_wait('不行……受不了了……');
        await tachyon.say_and_wait('请让我含……求求，让我舔');
        println();
        await printAndWait('想要快一点舔到');
        await printAndWait('想要获得被允许吸吮肉棒的资格');
        await printAndWait('看着爱人的肉棒摆在自己眼前');
        await printAndWait([
          '享受着气味的 ',
          tachyon.get_colored_name(),
          ' 还是按耐不住，咽下口水',
        ]);
        println();
        await tachyon.say_and_wait('咕啾');
        await tachyon.say_and_wait('嗯啾噜噜噜……啾噜……啾咕……');
        println();
        await printAndWait([
          '还没得到许可，',
          tachyon.get_colored_name(),
          ' 就已经吮吸起了肉棒',
        ]);
        await printAndWait([
          me.get_colored_name(),
          ' 也松了口气，要是再继续下去，忍不住的就要换成 ',
          me.get_colored_name(),
          ' 了',
        ]);
        await quick_make_love(
          new EroParticipant(32, part_enum.mouth),
          new EroParticipant(0, part_enum.penis),
          false,
        );
        println();
        await printAndWait([
          tachyon.get_colored_name(),
          ' 大大张开嘴，一口气将肉棒吞至根部',
        ]);
        await printAndWait('不断上下吸弄，发出了下流的水声');
        println();
        await tachyon.say_and_wait('好吃……好美味……');
        await tachyon.say_and_wait(['肉棒……', callname, ' 臭臭的肉棒❤❤']);
        println();
        await printAndWait(['从根部到龟头，完整的包覆吸吮']);
        await printAndWait(
          '像涂唇膏一般，想毫无保留的将肉棒的味道蹭在自己口中',
        );
        println();
        await printAndWait('傍晚时分，大多数人已经回到家中或者宿舍的时间');
        await printAndWait(
          '实验室中，回荡着无比淫糜的水声，是故意发出的，还是已经拼命到没有功夫去在意声音了？',
        );
        await printAndWait([
          '对 ',
          me.get_colored_name(),
          ' 的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感',
        ]);
        await printAndWait(
          '一边服侍肉棒，一边摇晃的屁股也在不停摩擦着地板和手指，期望获得慰藉',
        );
        await printAndWait('但是……最美味的，果然还是口中的肉棒');
        await printAndWait([
          '带着爱意的服侍，无声的说明着 ',
          tachyon.get_colored_name(),
          ' 对眼前肉棒的痴迷',
        ]);
        await printAndWait([
          '倘若让',
          tachyon.sex,
          '现在发誓一辈子作为肉棒的奴隶而活，或许',
          tachyon.sex,
          '都会答应吧',
        ]);
        println();
        await printAndWait([
          '忽然，',
          me.get_colored_name(),
          ' 拍了拍 ',
          tachyon.get_colored_name(),
          ' 的头',
        ]);
        await printAndWait(['听话的', tachyon.sex, '马上察觉到了意思']);
        println();
        await tachyon.say_and_wait(
          '进来……请射进来……在我的嘴穴里……全部……喝下去❤❤',
        );
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(32, part_enum.mouth);
        await quick_make_love(
          new EroParticipant(32, part_enum.mouth),
          new EroParticipant(0, part_enum.penis),
          false,
        );
        println();
        await printAndWait([
          tachyon.sex,
          '马上更贴近的含吮着 ',
          me.get_colored_name(),
          ' 的肉棒',
        ]);
        await printAndWait('终于，白浆在口中爆发');
        println();
        await tachyon.say_and_wait('啾……咕啾………噗哈');
        await tachyon.say_and_wait('哈啊……哈……嗯……啾……');
        println();
        await printAndWait([
          tachyon.get_colored_name(),
          ' 慢慢咀嚼着射在口中的精液',
        ]);
        await printAndWait('故意发出咕啾的咀嚼声后，将精液全部喝了下去');
        await printAndWait('随即，为了使残留的精液能被一滴不剩的喝干');
        await printAndWait([
          tachyon.get_colored_name(),
          ' 又一次含住了垂下的肉棒，不停啜吸着，打扫肉棒',
        ]);
        await printAndWait([
          '看见',
          tachyon.sex,
          '如此癡迷的模样，',
          me.get_colored_name(),
          ' 的下体不自觉的又硬了起来',
        ]);
        println();
        await tachyon.say_and_wait(['下次实验还要拜托你哦，', callname, ' ']);
        await tachyon.say_and_wait('……当然，还会有奖励的');
        await tachyon.say_and_wait('你不会拒绝吧……亲爱的❤');
        println();
        await printAndWait([
          '看着',
          tachyon.sex,
          '媚眼如丝的模样，',
          me.get_colored_name(),
          ' 选择再一次堵住那张不断对自己发号施令的小嘴',
        ]);
        break;
      case 2:
        set_stain(0, part_enum.penis, stain_enum.semen);
        set_stain(32, part_enum.virgin, stain_enum.secretion);
        if (get_expansion(get_penis_size(0), 32, part_enum.virgin) <= 1) {
          life_marks.reward--;
          return;
        }
        await tachyon.say_and_wait([callname, '～今天的实验也辛苦了']);
        await tachyon.say_and_wait('那么……需要奖励吗♡');
        await me.say_and_wait('来吧');
        println();
        await printAndWait('滋啾滋啾');
        await printAndWait('实验室裏满是下流的声响');
        println();
        await tachyon.say_and_wait([callname, '……', callname, '♡']);
        await tachyon.say_and_wait('快点……填满我的骚穴♡');
        await tachyon.say_and_wait(
          '好好调教这个……在实验途中就开始不停流水的淫穴',
        );
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(32, part_enum.virgin),
          false,
        );
        await printAndWait('肉棒插入前就已经完全湿透的小穴将肉棒紧紧包裹');
        await printAndWait([
          '每一下顶弄爱液都会飞溅而出，桌面和地板都染上了 ',
          tachyon.get_colored_name(),
          ' 的腥臭穴汁',
        ]);
        println();
        await tachyon.say_and_wait('呜……好用力♡');
        await tachyon.say_and_wait('稍微…稍微慢一点……♡');
        await tachyon.say_and_wait('声音……啊嗯♡');
        println();
        await printAndWait('都这样勾引了还希望自己能慢一点？');
        await printAndWait([
          me.get_colored_name(),
          ' 用力拍打着 ',
          tachyon.get_colored_name(),
          ' 的屁股',
        ]);
        await quick_make_love(
          new EroParticipant(0, part_enum.hit),
          new EroParticipant(32, part_enum.anal),
          false,
        );
        await printAndWait('不管不顾的加快了速度');
        println();
        await tachyon.say_and_wait([callname, '……', callname, '♡']);
        await tachyon.say_and_wait('啊♡嗯啊♡啊♡啊啊♡');
        await tachyon.say_and_wait([callname, '……给我♡给我更多♡']);
        println();
        await printAndWait([
          '渐入佳境后，腰甚至脱离了 ',
          me.get_colored_name(),
          ' 的掌控，自行加快了速度',
        ]);
        await printAndWait([
          '如此主动的缠绕使 ',
          me.get_colored_name(),
          ' 的兴奋程度也更上层楼，渴望将眼前雌性的身体，任凭雄性本能操控着身体',
        ]);
        println();
        await tachyon.say_and_wait(['好棒♡', callname, ' 的肉棒♡好厉害♡']);
        println();
        await printAndWait('肉体碰撞的声音更加响亮');
        await printAndWait('整个实验室中充斥着淫猥的气味及声音');
        println();
        await tachyon.say_and_wait('又……又更大了♡');
        await tachyon.say_and_wait([
          '要射了吗……在，在里面出来♡好想要……',
          callname,
          ' 的小宝宝♡',
        ]);
        await tachyon.say_and_wait(['喜欢……最喜欢被 ', callname, ' 内射了♡']);
        await tachyon.say_and_wait([
          '在小穴里面……尽情的出来……想生下 ',
          callname,
          ' 的孩子♡想给 ',
          callname,
          ' 生一窝小豚鼠♡',
        ]);
        println();
        await printAndWait([
          '听见 ',
          tachyon.get_colored_name(),
          ' 的话，',
          me.get_colored_name(),
          ' 更不管不顾的加快加深',
        ]);
        await printAndWait([
          '哪怕是',
          tachyon.get_uma_sex_title(),
          '的身体都只能娓娓配合着 ',
          me.get_colored_name(),
          ' 的动作来回',
        ]);
        await printAndWait([
          me.get_colored_name(),
          ' 捏住前面不停晃动的两点尖端，用力向下拉',
        ]);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(32, part_enum.breast),
          false,
        );
        println();
        await tachyon.say_and_wait('齁喔喔喔喔喔喔♡');
        await tachyon.say_and_wait('去，去了♡要被扯着奶头去了♡');
        println();
        await printAndWait('咚咕，嘟咕，咻噜噜噜♡');
        await printAndWait('最后，最深入的插抽了几下后，精关彻底放开');
        await printAndWait([
          '白浆灌满了 ',
          tachyon.get_colored_name(),
          ' 的小穴',
        ]);
        await printAndWait([
          '被白浆灌入的瞬间，',
          tachyon.get_colored_name(),
          ' 也全身痉挛着达到了巅峰',
        ]);
        println();
        await tachyon.say_and_wait([
          '好几天没能品尝到的……',
          callname,
          ' 的肉棒♡欸嘿嘿♡',
        ]);
        await tachyon.say_and_wait(['好棒……', callname, ' 的……好唔唔♡']);
        println();
        await printAndWait([
          '自以为已经结束的 ',
          tachyon.get_colored_name(),
          '，感叹的话才说到一半',
        ]);
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(32, part_enum.virgin);
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(32, part_enum.virgin),
          false,
        );
        await printAndWait([
          '便被 ',
          me.get_colored_name(),
          ' 的肉棒再度堵住了嘴',
        ]);
        println();
        await tachyon.say_and_wait('啾……啾啾♡');
        println();
        await printAndWait([
          tachyon.get_colored_name(),
          ' 顺从的帮 ',
          me.get_colored_name(),
          ' 清理着肉棒',
        ]);
        await quick_make_love(
          new EroParticipant(32, part_enum.mouth),
          new EroParticipant(0, part_enum.penis),
          false,
        );
        await printAndWait([
          '满是自己淫汁和 ',
          callname,
          ' 精液的肉棒，对 ',
          tachyon.get_colored_name(),
          ' 而言现在哪怕将 ',
          callname,
          ' 的便当摆在面前，',
          tachyon.sex,
          '大概都会优先选择肉棒',
        ]);
        println();
        await tachyon.say_and_wait('下次实验……一样拜托你了♡啾♡啾啵♡');
        await tachyon.say_and_wait('唔！唔啾♡啾噜♡');
        println();
        await printAndWait([
          '听见 ',
          tachyon.get_colored_name(),
          ' 变着法子说出的「下次再来做吧」，',
          me.get_colored_name(),
          ' 的肉棒又硬了起来',
        ]);
        await printAndWait([
          '勾引的眼前',
          tachyon.get_uma_sex_title(),
          '再度露出雌性的表情',
        ]);
        break;
      case 3:
        set_stain(0, part_enum.penis, stain_enum.semen);
        set_stain(32, part_enum.anal, stain_enum.anal);
        if (get_expansion(get_penis_size(0), 32, part_enum.anal) <= 1) {
          life_marks.reward--;
          return;
        }
        await tachyon.say_and_wait([callname, '～今天的实验也辛苦了']);
        await tachyon.say_and_wait('那么……需要奖励吗♡');
        await me.say_and_wait('来吧');
        await tachyon.print_and_wait('果然，不应该是这个洞口的吧？');
        await tachyon.print_and_wait('明明下面的骚穴也痒的不行');
        await tachyon.print_and_wait('为什么插的却是那种地方');
        await tachyon.print_and_wait('而且还是这种……这种姿势');
        println();
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(32, part_enum.anal),
          false,
        );
        await tachyon.print_and_wait([
          '紧紧的后穴，包裹着 ',
          callname,
          ' 的粗壮肉棒',
        ]);
        await tachyon.print_and_wait([
          '比起小穴，皱折更多的菊穴在给予 ',
          callname,
          ' 更多快感的同时，也给自己带来了小穴两倍的快感',
        ]);
        await tachyon.print_and_wait(
          '这点来讲，对于满足性欲的条件来说，或许确实比小穴更好用……但是……',
        );
        println();
        await tachyon.say_and_wait(
          '这种像小狗一样的姿势……再加上这个穴……这不就是真正的小狗吗♡',
          true,
        );
        println();
        await tachyon.print_and_wait('但是……仔细想想似乎也不是不行♡');
        await tachyon.print_and_wait([callname, ' 是自己专属的 ', callname]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' 是 ',
          callname,
          ' 专属的小母狗',
        ]);
        await tachyon.print_and_wait(
          '这么一想，自己的身体仿佛马上就无缝代入角色了一般，开始高兴的摇晃着尾巴，讨着主人欢心',
        );
        drawLine();
        await printAndWait([
          '好像感觉到了身下人的胡思乱想，',
          me.get_colored_name(),
          ' 拍了 ',
          tachyon.get_colored_name(),
          ' 的屁股提醒',
          tachyon.sex,
          '专心',
        ]);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(32, part_enum.anal),
          false,
        );
        await printAndWait([
          '但已经完全代入角色的 ',
          tachyon.get_colored_name(),
          ' 却更用力的摇晃起屁股，夹紧了自己的屁穴',
        ]);
        await printAndWait([
          '突如其来的攻击，使得 ',
          me.get_colored_name(),
          ' 一时精关失守',
        ]);
        await printAndWait([
          me.get_colored_name(),
          ' 按住了 ',
          tachyon.get_colored_name(),
          ' 的腰，在屁穴里将积累了几天的精液全部排泄一空',
        ]);
        await printAndWait([
          '胯下的 ',
          tachyon.get_colored_name(),
          ' 在这个时候，也仿佛想将自己的幸福传达给主人的母狗一般',
        ]);
        await printAndWait('欢快的排出小便表露自己此时的心情');
        await printAndWait([
          '然而 ',
          me.get_colored_name(),
          ' 还没来得及做出表示，就迎来了第二个重量级的冲击',
        ]);
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(32, part_enum.anal);
        if (tachyon.sex_code === 0) {
          set_palam_to_max(32, part_enum.clitoris);
        }
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(32, part_enum.anal),
          false,
        );
        println();
        await tachyon.say_and_wait('汪……汪汪♡');
        await printAndWait([
          '看见 ',
          me.get_colored_name(),
          ' 脸上迷惑的表情后，',
          tachyon.get_colored_name(),
          ' 才仿佛忽然回过神自己都做了什么',
        ]);
        await printAndWait('脸颊瞬间通红');
        println();
        await tachyon.say_and_wait([
          callname,
          '……不是，我……没有……不是你想的那样……',
        ]);
        println();
        await printAndWait('虽然不知道发生了什么，但先装作无事发生吧');
    }
  }
};

/**
 * @param _
 * @param {{level:number,name:string,new:boolean}} extra_flag
 */
handlers[ero_hooks.get_mark] = async (_, extra_flag) => {
  if (!sys_check_awake(32) || extra_flag.name === '淫纹') {
    throw new Error();
  }
  const callname = sys_get_colored_callname(32, 0),
    love = get('love:32'),
    tachyon = get_chara_talk(32);
  switch (extra_flag.name) {
    case '欢愉':
      switch (extra_flag.level) {
        case 1:
          if (love < 75) {
            await tachyon.say_and_wait(
              '唔……热热痒痒的……身体有点难受……是药的副作用吗？',
            );
          } else {
            await tachyon.say_and_wait('嗯……热热痒痒的……');
            await tachyon.say_and_wait(
              '不，没有不舒服……唔……试试看，多做点吧……感觉，有些不可思议……',
            );
          }
          break;
        case 2:
          if (love < 75) {
            await tachyon.say_and_wait(
              '不行……明明只是激素作用……只是，身体正常反应……可是，可是……为什么……这么舒服……',
            );
          } else {
            await tachyon.say_and_wait(
              '等等……里面还没缓过来……要是，要是更舒服的话……咿！',
            );
            await tachyon.say_and_wait(
              '不行，明明知道不能继续下去，可是身体自己……脑袋……无法思考',
            );
          }
          break;
        case 3:
          if (love < 75) {
            await tachyon.say_and_wait([
              '已经……不能再思考了……好舒服……更多……还要更多，',
              callname,
              '……给我……我还要……',
            ]);
          } else {
            await tachyon.say_and_wait([callname, '♡', callname, '♡']);
            await tachyon.say_and_wait(
              '更多……给我更多……从里到外把我完全填满……♡',
            );
            await tachyon.say_and_wait(
              '是你把我变成这样的……所以，还想要更多♡让我聪明的脑袋再也无法思考肉体交合以外的东西♡',
            );
          }
      }
      break;
    case '同心':
      switch (extra_flag.level) {
        case 1:
          if (love < 75) {
            await tachyon.say_and_wait(
              '偶尔放空思考，任人摆布……某种意义上或许也是种舒压的方法？',
              true,
            );
            await tachyon.say_and_wait([callname, '………………不对，我在想什么！']);
          } else {
            await tachyon.say_and_wait([
              '嗯♡嗯啊♡',
              callname,
              '♡等等……停，停一下♡',
            ]);
            await tachyon.say_and_wait('哈啊……哈啊……');
            await tachyon.say_and_wait(
              '明明……按我说的停下来了，为什么身体还是觉得有点奇怪呢……',
              true,
            );
            await tachyon.say_and_wait(
              [
                '仿佛……我在希望 ',
                callname,
                ' 能够无视我说的话……继续……把我弄到不省人事……………到底在想什么东西啊我！',
              ],
              true,
            );
          }
          await printAndWait([
            tachyon.get_colored_name(),
            ' 忽然疯狂的摇晃起头来',
          ]);
          break;
        case 2:
          if (love < 75) {
            await tachyon.say_and_wait(['等等……', callname, '……不要那么……']);
            await tachyon.say_and_wait(`不，为什么更激烈了……！`);
            await tachyon.say_and_wait([
              '咕……明明只是 ',
              callname,
              '……明明应该听我的命令的……',
            ]);
            await tachyon.say_and_wait(
              '为什么……身体却觉得比之前更舒服了……难道我是什么被虐狂吗……',
              true,
            );
          } else {
            await tachyon.say_and_wait([
              '唔嗯……',
              callname,
              '，等一下……太用力……咿♡',
            ]);
            await tachyon.say_and_wait('讨厌……………不，也没有……');
            await tachyon.say_and_wait('等！又忽然这么……嗯啊♡♡');
            await tachyon.say_and_wait(['都说住手了……', callname, ' 你啊，唉']);
            await tachyon.say_and_wait('明明……支配权应该在我手上的啊', true);
            await tachyon.say_and_wait('为什么，我却反过来……想被支配……', true);
            await tachyon.say_and_wait('不妙……真的不妙啊♡', true);
          }
          break;
        case 3:
          await tachyon.say_and_wait(
            '放弃思考，完全成为某人的俘虏居然是这么舒服的事情……',
            true,
          );
          await tachyon.say_and_wait('啊啊……之前的自己到底在抵抗什么呢', true);
          await tachyon.say_and_wait([
            callname,
            '……不，主人……大人……给我，还想要更多……♡',
          ]);
          await tachyon.say_and_wait(
            '没关系的……这只是……只是……增加情趣的玩法',
            true,
          );
          await tachyon.say_and_wait('结束之后就恢复正常了……对……所以……', true);
          await tachyon.say_and_wait('请再……给我更多命令吧……♡');
          set('callname:32:0', [callname, '主人大人']);
      }
      break;
    case '苦痛':
      switch (extra_flag.level) {
        case 1:
          if (love < 75) {
            await tachyon.say_and_wait([
              '好痛！？居然对主人做出这种事来，',
              callname,
              ' 你在想什么！',
            ]);
          } else {
            await tachyon.say_and_wait([
              '好痛！？',
              callname,
              '……可以不要那么粗鲁吗？',
            ]);
          }
          break;
        case 2:
          if (love < 75) {
            await tachyon.say_and_wait('不要……住手！好痛……不要再弄了！');
          } else {
            await tachyon.say_and_wait([
              callname,
              '！？是，是我哪里做错了吗……为什么，为什么要这样对我……',
            ]);
          }
          break;
        case 3:
          if (love < 75) {
            await tachyon.say_and_wait(
              '好痛……好可怕……对不起……是我不好……是我不好……不要再弄了……好痛，好痛……',
            );
          } else {
            await tachyon.say_and_wait([
              '好痛……',
              callname,
              '……为什么……为什么要这样对我……我不理解……',
            ]);
            await tachyon.say_and_wait(
              '这就是爱吗？为什么要这样对待自己的爱人……我不懂啊……',
            );
          }
      }
      break;
    case '羞耻':
      switch (extra_flag.level) {
        case 1:
          await tachyon.say_and_wait('这种事……也太让人害羞了', true);
          await tachyon.say_and_wait(
            '平常心……平常心……当成实验就好，嗯，实验',
            true,
          );
          break;
        case 2:
          await tachyon.say_and_wait(
            '不行了……已经无法用实验来蒙混过去了',
            true,
          );
          await tachyon.say_and_wait(
            '即便是我，也是社会的一部分啊……也是会因为这种事而感到羞耻啊',
            true,
          );
          await tachyon.say_and_wait(
            '咕……但是……为什么会感到舒服啊……我的身体到底怎么了……',
            true,
          );
          break;
        case 3:
          await tachyon.say_and_wait('哈哈……啊哈哈……', true);
          await tachyon.say_and_wait(
            '就算身为疯狂科学家，没有在乎过他人的看法……我也从来没想过居然有一天自己会变成这样',
            true,
          );
          await tachyon.say_and_wait(
            '来吧，怎样都好了……已经，放弃思考了……',
            true,
          );
      }
      break;
    case '反抗':
      switch (extra_flag.level) {
        case 1:
          if (love < 50) {
            await tachyon.say_and_wait('………我的忍耐是有极限的。');
            await tachyon.say_and_wait(['不要挑战我的极限，', callname, '。']);
          } else {
            await tachyon.say_and_wait([callname, '……？']);
            await printAndWait([
              tachyon.get_colored_name(),
              ' 愣着神，就仿佛被自己最亲密信赖的人甩了一巴掌一般。',
            ]);
            await printAndWait('比起愤怒，更多的是错愕和不敢置信。');
          }
          break;
        case 2:
          if (love < 50) {
            await tachyon.say_and_wait('我警告过你了。');
            await tachyon.say_and_wait('事不过三。');
          } else {
            await tachyon.say_and_wait([
              '为什么……',
              callname,
              '……是我哪里做错了吗？',
            ]);
            await tachyon.say_and_wait([
              '是我做错了吧……告诉我，',
              callname,
              '……',
            ]);
            await tachyon.say_and_wait(
              '不然的话……不然的话……我无法理解啊……为什么你要做出这种事来！',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              ' 万番悲痛的看着 ',
              get_chara_talk(0).get_colored_name(),
              '，心中满是不解和怀疑。',
            ]);
            await printAndWait([
              '对 ',
              get_chara_talk(0).get_colored_name(),
              ' 的不解，对自己的怀疑。',
            ]);
          }
          break;
        case 3:
          if (love < 50) {
            await printAndWait([
              '瞬间，一股灼烧感通过 ',
              get_chara_talk(0).get_colored_name(),
              ' 的喉咙逆流而出。',
            ]);
            await printAndWait([
              get_chara_talk(0).get_colored_name(),
              ' 忍不住咳了几声，并惊恐的发现地上的液体带有几缕血丝。',
            ]);
            await tachyon.say_and_wait(['这是第三次了，', callname, '。']);
            await tachyon.say_and_wait(
              '你应该感谢……你自己在名义上是我的实验动物。',
            );
            await tachyon.say_and_wait(
              '而我的主张是不会浪费可利用的实验体，所以感谢你自己还有那么点利用价值吧……平常心……当成实验就好，嗯，实验。',
            );
            await tachyon.say_and_wait(
              '不过……我能保证就算当实验品，也绝对能让你生不如死。',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              ' 的眼中带着厌恶及憎恶的情绪。',
            ]);
          } else {
            await tachyon.say_and_wait('啊啊……够了。');
            await tachyon.say_and_wait('已经够了。');
            await printAndWait('红色的百叶窗，彻底关上。');
          }
      }
  }
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
