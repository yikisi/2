const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
  get_expansion,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const { set_stain } = require('#/system/ero/sys-calc-stain');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async () => {
  const callname = sys_get_colored_callname(32, 0),
    life_marks = new TachyonLifeMarks(),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  if (
    sys_check_awake(0) &&
    sys_check_awake(32) &&
    era.getCharactersInTrain().length === 2 &&
    me.sex_code > 0 &&
    tachyon.sex_code - 1
  ) {
    if (
      check_pregnant_unprotect(0) &&
      check_pregnant_unprotect(32) &&
      era.get('love:32') >= 75 &&
      life_marks.reward < 3 &&
      era.get('cflag:32:位置') === 0
    ) {
      life_marks.reward++;
      switch (life_marks.reward) {
        case 1:
          set_stain(0, part_enum.penis, stain_enum.semen);
          set_stain(32, part_enum.virgin, stain_enum.secretion);
          await era.printAndWait('总算结束了……');
          await era.printAndWait([
            me.get_colored_name(),
            ' 伸了个懒腰，忍不住感慨',
          ]);
          await era.printAndWait([
            '最近 ',
            tachyon.get_colored_name(),
            ' 的实验越来越多，也越来越复杂及麻烦。',
          ]);
          await era.printAndWait([
            '虽说危险度没那么高，但加上训练员的本职工作后忙碌程度甚至让 ',
            me.get_colored_name(),
            ' 有些怀念那些危险的实验了',
          ]);
          era.println();
          await tachyon.say_and_wait(['辛苦了，', callname, '……']);
          await tachyon.say_and_wait('放心吧，之后会好好给你奖励的');
          await era.printAndWait('\n奖励……？');
          await era.printAndWait([
            '虽然不知道具体是什么，但奖励这个词还是激励了疲累的 ',
            me.get_colored_name(),
          ]);
          await era.printAndWait('\n在收拾完实验器材后');
          era.println();
          await tachyon.say_and_wait('那么……作为奖励，就让我来帮你处理一下吧');
          await tachyon.say_and_wait('几天下来，积累的东西❤');
          era.println();
          await era.printAndWait('……欸？');
          era.println();
          await tachyon.say_and_wait('这种反应……难道，要拒绝吗？');
          await tachyon.say_and_wait('明明，都是恋人了不是吗？');
          era.println();
          await era.printAndWait('送到眼前的肉，哪有不吃的道理！');
          await era.printAndWait(
            '再说……这几天由于实验的关系，确实也都没怎么发泄欲望……',
          );
          await era.printAndWait(
            '这样的话，让自己的恋人来帮忙……应该也不是什么过分的事吧',
          );
          era.println();
          await era.printAndWait([
            '鬼使神差下，',
            me.get_colored_name(),
            ' 脱下了裤子',
          ]);
          era.println();
          await tachyon.say_and_wait('嘶……');
          era.println();
          await era.printAndWait([
            '虽然没有动画里甚至冒出蒸气那么夸张，但闷了一天的肉棒，依然散发出了足以挑逗起任何',
            tachyon.get_uma_sex_title(),
            '性欲的气味来',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 紧紧盯着眼前的肉棒，移不开视线',
          ]);
          era.println();
          await tachyon.say_and_wait('不行……忍不住了……❤');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 差点都忘记了，这几天由于实验导致欲望积累的，可不只 ',
            me.get_colored_name(),
            ' 一人而已',
          ]);
          await era.printAndWait([
            '一直在身旁做着实验的 ',
            tachyon.get_colored_name(),
            ' 想必也是如此',
          ]);
          await era.printAndWait('这么说来……比起奖励，果然只是找理由……');
          era.println();
          await era.printAndWait([
            '想到这，',
            me.get_colored_name(),
            ' 的心中忍不住起了坏心眼',
          ]);
          await era.printAndWait([
            '看见 ',
            me.get_colored_name(),
            ' 掏出肉棒后就不再动作的模样，',
            tachyon.get_colored_name(),
            ' 心急的看着 ',
            me.get_colored_name(),
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……再等什么呢，快点，进来']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 撅起双唇，唇间的粉舌前后移动着，尝试勾起 ',
            me.get_colored_name(),
            ' 的情欲',
          ]);
          await era.printAndWait([
            '但 ',
            me.get_colored_name(),
            ' 依然没有做出反应，明白了 ',
            me.get_colored_name(),
            ' 的意图的 ',
            tachyon.get_colored_name(),
            ' 露出了哀怨的神情',
          ]);
          era.println();
          await tachyon.say_and_wait('……真过分');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 蹲在地上，仿佛恳求一般仰视着高高翘起的肉棒',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '求你了，',
            callname,
            '……让我啾啵啾啵的……好好品尝……',
            callname,
            ' 的肉棒……❤',
          ]);
          era.println();
          await era.printAndWait([
            '见到 ',
            me.get_colored_name(),
            ' 总算慢慢靠前了，',
            tachyon.get_colored_name(),
            ' 猴急的将鼻子贴近了肉棒，深深的猛闻了几下',
          ]);
          await era.printAndWait('不老实的手咕啾咕啾的抠弄着蜜穴，发出呻吟');
          await quick_make_love(
            new EroParticipant(32, part_enum.hand),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
          await era.printAndWait(
            '在理性与感性都认可的这名雄性面前，身为雌性的自己只能跪在地上臣服',
          );
          era.println();
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
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 握着满是先走汁的肉棒',
          ]);
          await era.printAndWait([
            '恶作剧的来回磨蹭着不知何时已经跪在自己面前的 ',
            tachyon.get_colored_name(),
            ' 的鼻尖',
          ]);
          await era.printAndWait([
            '仿佛在做标记般，将汁液和气味涂满了 ',
            tachyon.get_colored_name(),
            ' 的鼻子',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '过分……要是……闻到这种味道……不就真的……回不去了……',
          );
          era.println();
          await era.printAndWait('不喜欢的话，那就算了？');
          await era.printAndWait([
            me.get_colored_name(),
            ' 作势要抽身而去，却看 ',
            tachyon.get_colored_name(),
            ' 亦步亦趋的跟随着，其中鼻子完全没离开过肉棒哪怕一厘米的距离',
          ]);
          era.println();
          await tachyon.say_and_wait('光是味道……就要去了……');
          era.println();
          await era.printAndWait('仿佛担心又一次的恶作剧');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 反过来用鼻尖不停刮蹭着 ',
            me.get_colored_name(),
            ' 的龟头尖端',
          ]);
          await era.printAndWait('仿佛要牢记这股味道一般，用力嗅着肉棒的臭味');
          era.println();
          await tachyon.say_and_wait('不行……受不了了……');
          await tachyon.say_and_wait('请让我含……求求，让我舔');
          era.println();
          await era.printAndWait('想要快一点舔到');
          await era.printAndWait('想要获得被允许吸吮肉棒的资格');
          await era.printAndWait('看着爱人的肉棒摆在自己眼前');
          await era.printAndWait([
            '享受着气味的 ',
            tachyon.get_colored_name(),
            ' 还是按耐不住，咽下口水',
          ]);
          era.println();
          await tachyon.say_and_wait('咕啾');
          await tachyon.say_and_wait('嗯啾噜噜噜……啾噜……啾咕……');
          era.println();
          await era.printAndWait([
            '还没得到许可，',
            tachyon.get_colored_name(),
            ' 就已经吮吸起了肉棒',
          ]);
          await era.printAndWait([
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
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 大大张开嘴，一口气将肉棒吞至根部',
          ]);
          await era.printAndWait('不断上下吸弄，发出了下流的水声');
          era.println();
          await tachyon.say_and_wait('好吃……好美味……');
          await tachyon.say_and_wait(['肉棒……', callname, ' 臭臭的肉棒❤❤']);
          era.println();
          await era.printAndWait(['从根部到龟头，完整的包覆吸吮']);
          await era.printAndWait(
            '像涂唇膏一般，想毫无保留的将肉棒的味道蹭在自己口中',
          );
          era.println();
          await era.printAndWait(
            '傍晚时分，大多数人已经回到家中或者宿舍的时间',
          );
          await era.printAndWait(
            '实验室中，回荡着无比淫糜的水声，是故意发出的，还是已经拼命到没有功夫去在意声音了？',
          );
          await era.printAndWait([
            '对 ',
            me.get_colored_name(),
            ' 的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感',
          ]);
          await era.printAndWait(
            '一边服侍肉棒，一边摇晃的屁股也在不停摩擦着地板和手指，期望获得慰藉',
          );
          await era.printAndWait('但是……最美味的，果然还是口中的肉棒');
          await era.printAndWait([
            '带着爱意的服侍，无声的说明着 ',
            tachyon.get_colored_name(),
            ' 对眼前肉棒的痴迷',
          ]);
          await era.printAndWait([
            '倘若让',
            tachyon.sex,
            '现在发誓一辈子作为肉棒的奴隶而活，或许',
            tachyon.sex,
            '都会答应吧',
          ]);
          era.println();
          await era.printAndWait([
            '忽然，',
            me.get_colored_name(),
            ' 拍了拍 ',
            tachyon.get_colored_name(),
            ' 的头',
          ]);
          await era.printAndWait(['听话的', tachyon.sex, '马上察觉到了意思']);
          era.println();
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
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '马上更贴近的含吮着 ',
            me.get_colored_name(),
            ' 的肉棒',
          ]);
          await era.printAndWait('终于，白浆在口中爆发');
          era.println();
          await tachyon.say_and_wait('啾……咕啾………噗哈');
          await tachyon.say_and_wait('哈啊……哈……嗯……啾……');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 慢慢咀嚼着射在口中的精液',
          ]);
          await era.printAndWait('故意发出咕啾的咀嚼声后，将精液全部喝了下去');
          await era.printAndWait('随即，为了使残留的精液能被一滴不剩的喝干');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 又一次含住了垂下的肉棒，不停啜吸着，打扫肉棒',
          ]);
          await era.printAndWait([
            '看见',
            tachyon.sex,
            '如此癡迷的模样，',
            me.get_colored_name(),
            ' 的下体不自觉的又硬了起来',
          ]);
          era.println();
          await tachyon.say_and_wait(['下次实验还要拜托你哦，', callname, ' ']);
          await tachyon.say_and_wait('……当然，还会有奖励的');
          await tachyon.say_and_wait('你不会拒绝吧……亲爱的❤');
          era.println();
          await era.printAndWait([
            '看着',
            tachyon.sex,
            '媚眼如丝的模样，',
            me.get_colored_name(),
            ' 选择再一次堵住那张不断对自己发号施令的小嘴',
          ]);
          break;
        case 2:
          if (get_expansion(get_penis_size(0), 32, part_enum.virgin) > 1) {
            life_marks.reward--;
            return;
          }
          set_stain(0, part_enum.penis, stain_enum.semen);
          set_stain(32, part_enum.virgin, stain_enum.secretion);
          await print_event_name('实验的报酬', tachyon);
          await tachyon.say_and_wait([callname, '～今天的实验也辛苦了']);
          await tachyon.say_and_wait('那么……需要奖励吗❤️');
          await me.say_and_wait('来吧');
          era.println();
          await era.printAndWait('滋啾滋啾');
          await era.printAndWait('实验室裏满是下流的声响');
          era.println();
          await tachyon.say_and_wait([callname, '……', callname, '❤️']);
          await tachyon.say_and_wait('快点……填满我的骚穴❤️');
          await tachyon.say_and_wait(
            '好好调教这个……在实验途中就开始不停流水的淫穴',
          );
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
          await era.printAndWait(
            '肉棒插入前就已经完全湿透的小穴将肉棒紧紧包裹',
          );
          await era.printAndWait([
            '每一下顶弄爱液都会飞溅而出，桌面和地板都染上了 ',
            tachyon.get_colored_name(),
            ' 的腥臭穴汁',
          ]);
          era.println();
          await tachyon.say_and_wait('呜……好用力❤️');
          await tachyon.say_and_wait('稍微…稍微慢一点……❤️');
          await tachyon.say_and_wait('声音……啊嗯❤️');
          era.println();
          await era.printAndWait('都这样勾引了还希望自己能慢一点？');
          await era.printAndWait([
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
          await era.printAndWait('不管不顾的加快了速度');
          era.println();
          await tachyon.say_and_wait([callname, '……', callname, '❤️']);
          await tachyon.say_and_wait('啊❤️嗯啊❤️啊❤️啊啊❤️');
          await tachyon.say_and_wait([callname, '……给我❤️给我更多❤️']);
          era.println();
          await era.printAndWait([
            '渐入佳境后，腰甚至脱离了 ',
            me.get_colored_name(),
            ' 的掌控，自行加快了速度',
          ]);
          await era.printAndWait([
            '如此主动的缠绕使 ',
            me.get_colored_name(),
            ' 的兴奋程度也更上层楼，渴望将眼前雌性的身体，任凭雄性本能操控着身体',
          ]);
          era.println();
          await tachyon.say_and_wait(['好棒❤️', callname, ' 的肉棒❤️好厉害❤️']);
          era.println();
          await era.printAndWait('肉体碰撞的声音更加响亮');
          await era.printAndWait('整个实验室中充斥着淫猥的气味及声音');
          era.println();
          await tachyon.say_and_wait('又……又更大了❤️');
          await tachyon.say_and_wait([
            '要射了吗……在，在里面出来❤️好想要……',
            callname,
            ' 的小宝宝❤️',
          ]);
          await tachyon.say_and_wait([
            '喜欢……最喜欢被 ',
            callname,
            ' 内射了❤️',
          ]);
          await tachyon.say_and_wait([
            '在小穴里面……尽情的出来……想生下 ',
            callname,
            ' 的孩子❤️想给 ',
            callname,
            ' 生一窝小豚鼠❤️',
          ]);
          era.println();
          await era.printAndWait([
            '听见 ',
            tachyon.get_colored_name(),
            ' 的话，',
            me.get_colored_name(),
            ' 更不管不顾的加快加深',
          ]);
          await era.printAndWait([
            '哪怕是',
            tachyon.get_uma_sex_title(),
            '的身体都只能娓娓配合着 ',
            me.get_colored_name(),
            ' 的动作来回',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 捏住前面不停晃动的两点尖端，用力向下拉',
          ]);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(32, part_enum.breast),
            false,
          );
          era.println();
          await tachyon.say_and_wait('齁喔喔喔喔喔喔❤️');
          await tachyon.say_and_wait('去，去了❤️要被扯着奶头去了❤️');
          era.println();
          await era.printAndWait('咚咕，嘟咕，咻噜噜噜❤️');
          await era.printAndWait('最后，最深入的插抽了几下后，精关彻底放开');
          await era.printAndWait([
            '白浆灌满了 ',
            tachyon.get_colored_name(),
            ' 的小穴',
          ]);
          await era.printAndWait([
            '被白浆灌入的瞬间，',
            tachyon.get_colored_name(),
            ' 也全身痉挛着达到了巅峰',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '好几天没能品尝到的……',
            callname,
            ' 的肉棒❤️欸嘿嘿❤️',
          ]);
          await tachyon.say_and_wait(['好棒……', callname, ' 的……好唔唔❤️']);
          era.println();
          await era.printAndWait([
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
          await era.printAndWait([
            '便被 ',
            me.get_colored_name(),
            ' 的肉棒再度堵住了嘴',
          ]);
          era.println();
          await tachyon.say_and_wait('啾……啾啾❤️');
          era.println();
          await era.printAndWait([
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
          await era.printAndWait([
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
          era.println();
          await tachyon.say_and_wait('下次实验……一样拜托你了❤️啾❤️啾啵❤️');
          await tachyon.say_and_wait('唔！唔啾❤️啾噜❤️');
          era.println();
          await era.printAndWait([
            '听见 ',
            tachyon.get_colored_name(),
            ' 变着法子说出的「下次再来做吧」，',
            me.get_colored_name(),
            ' 的肉棒又硬了起来',
          ]);
          await era.printAndWait([
            '勾引的眼前',
            tachyon.get_uma_sex_title(),
            '再度露出雌性的表情',
          ]);
          break;
        case 3:
          if (get_expansion(get_penis_size(0), 32, part_enum.anal) > 1) {
            life_marks.reward--;
            return;
          }
          set_stain(0, part_enum.penis, stain_enum.semen);
          set_stain(32, part_enum.anal, stain_enum.anal);
          await print_event_name('实验的报酬', tachyon);
          await tachyon.say_and_wait([callname, '～今天的实验也辛苦了']);
          await tachyon.say_and_wait('那么……需要奖励吗❤️');
          await me.say_and_wait('来吧');
          await tachyon.print_and_wait('果然，不应该是这个洞口的吧？');
          await tachyon.print_and_wait('明明下面的骚穴也痒的不行');
          await tachyon.print_and_wait('为什么插的却是那种地方');
          await tachyon.print_and_wait('而且还是这种……这种姿势');
          era.println();
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
          era.println();
          await tachyon.say_and_wait(
            '这种像小狗一样的姿势……再加上这个穴……这不就是真正的小狗吗❤️',
            true,
          );
          era.println();
          await tachyon.print_and_wait('但是……仔细想想似乎也不是不行❤️');
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
          era.drawLine();
          await era.printAndWait([
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
          await era.printAndWait([
            '但已经完全代入角色的 ',
            tachyon.get_colored_name(),
            ' 却更用力的摇晃起屁股，夹紧了自己的屁穴',
          ]);
          await era.printAndWait([
            '突如其来的攻击，使得 ',
            me.get_colored_name(),
            ' 一时精关失守',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 按住了 ',
            tachyon.get_colored_name(),
            ' 的腰，在屁穴里将积累了几天的精液全部排泄一空',
          ]);
          await era.printAndWait([
            '胯下的 ',
            tachyon.get_colored_name(),
            ' 在这个时候，也仿佛想将自己的幸福传达给主人的母狗一般',
          ]);
          await era.printAndWait('欢快的排出小便表露自己此时的心情');
          await era.printAndWait([
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
          era.println();
          await tachyon.say_and_wait('汪……汪汪❤️');
          await era.printAndWait([
            '看见 ',
            me.get_colored_name(),
            ' 脸上迷惑的表情后，',
            tachyon.get_colored_name(),
            ' 才仿佛忽然回过神自己都做了什么',
          ]);
          await era.printAndWait('脸颊瞬间通红');
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……不是，我……没有……不是你想的那样……',
          ]);
          era.println();
          await era.printAndWait('虽然不知道发生了什么，但先装作无事发生吧');
      }
    } else if (sys_check_cuckold(32)) {
      if (
        era.get('cflag:25:招募状态') === recruit_flags.yes &&
        Math.random() < 0.5
      ) {
        await tachyon.say_and_wait([
          '……',
          callname,
          '，那个，不找 ',
          sys_get_colored_callname(32, 25),
          '……一起吗？',
        ]);
        await tachyon.say_and_wait('今天只想跟我……啊，这样啊。');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 不知道为什么，似乎有些失望的样子。',
        ]);
      } else {
        await tachyon.say_and_wait(['……对不起，', callname, '，对不起。']);
        era.println();
        await era.printAndWait([
          '不知道为什么，上床前 ',
          tachyon.get_colored_name(),
          ' 不停的在道歉着。',
        ]);
      }
    }
  }
};
