/**
 * @file 卓芙 - 爱慕
 *
 * @author 梦露
 */
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
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const Love205UtilWife = require('#/event/love/love-events-205/util-wife');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love205UtilWife {
  async 99(vp, me) {
    await print_event_name("Ensemble, c'est tout（只要在一起）", vp);
    if (vp.sex_code !== 1 && me.sex_code > 0 && check_pregnant_unprotect(205)) {
      begin_and_init_ero(0, 205);
      await era.printAndWait([
        '来到情人宾馆，',
        me.get_colored_name(),
        ' 把 ',
        vp.get_colored_name(),
        ' 推倒在床上，嘴唇重叠起来。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '舌头被缠住，',
        me.get_colored_name(),
        ' 把唾液灌进去。',
        vp.get_colored_name(),
        ' 渐渐接受了，开始自己寻求。',
      ]);
      await era.printAndWait('混合的唾液从嘴边滴下也不介意，继续接吻。');
      await era.printAndWait([
        '之后 ',
        me.get_colored_name(),
        ' 吸住了 ',
        vp.get_colored_name(),
        ' 的脖颈，留下红色的痕迹，好像是要加上所有的标记。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的手触摸着 ',
        vp.get_colored_name(),
        ' 的胸口，隔着胸罩揉捏。',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        ' 因为突然的刺激而发出声音，',
        me.get_colored_name(),
        ' 同时扯住了两个乳头。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await vp.say_and_wait('呀啊啊！');
      await era.printAndWait([
        me.get_colored_name(),
        ' 接着把手伸进裙子里，抚摸大腿后，探进内裤。',
      ]);
      await era.printAndWait([
        '缝隙一被 ',
        me.get_colored_name(),
        ' 滑过，',
        vp.get_colored_name(),
        ' 的身体就发抖了。',
      ]);
      await vp.say_and_wait('快摸……');
      await era.printAndWait([
        '正如她希望的那样，',
        me.get_colored_name(),
        ' 的手指碰到了阴核。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          205,
          vp.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait('包皮被剥掉，敏感的部分被温柔地爱抚了。');
      await vp.say_and_wait('啊……哈啊……嗯！');
      await era.printAndWait([
        me.get_colored_name(),
        ' 的另一只手又伸进 ',
        vp.get_colored_name(),
        ' 的胸口，在乳晕周围抚摸着。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await era.printAndWait('以指尖画圆，一点一点地朝着中心走去。');
      await era.printAndWait(
        '终于到达乳头后，用大拇指和食指轻轻地按下，滚动，或者竖起指甲。',
      );
      await vp.say_and_wait('等、那里！');
      await era.printAndWait('明明是喜欢的。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 继续进攻，直到 ',
        vp.get_colored_name(),
        ' 头脑模糊到什么也无法思考。',
      ]);
      await era.printAndWait([
        '然后，回过神来，',
        vp.get_colored_name(),
        ' 自己张开了大腿。',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 满意地把内裤脱下。']);
      await era.printAndWait([
        '也许是期待之后的事情吧，',
        vp.get_colored_name(),
        ' 的子宫一直躁动着。',
      ]);
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 脱下裤子，露出已经勃起的那个时，',
        vp.get_colored_name(),
        ' 轻轻地高潮了。',
      ]);
      await era.printAndWait('即使害怕，也不会逃跑。');
      if (check_pregnant_unprotect(205) && !era.get(`status:205:经期`)) {
        if (await select_yes_or_no('要避孕吗？', '是', '生中出！')) {
          era.set('status:205:短效避孕药', 1);
        }
      }
      await era.printAndWait([
        me.get_colored_name(),
        ' 抓着自己的阳具，靠近 ',
        vp.get_colored_name(),
        ' 的阴道口，慢慢地插入了。',
      ]);
      await era.printAndWait(
        '龟头部分进入后，爱液成为润滑油，让整根肉棒一下子插到了里面。',
      );
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.say_and_wait('啊啊啊啊！不行！！');
      await era.printAndWait([
        '确认被吞到根部附近，',
        me.get_colored_name(),
        ' 开始动了。',
      ]);
      await vp.say_and_wait('啊！啊！好激烈……');
      await era.printAndWait([
        '每次打到腰上都会响起啪的一声，阴道壁被擦过，',
        vp.get_colored_name(),
        ' 只能在快感中喘息。',
      ]);
      await era.printAndWait(`随着肉棒的动作，${vp.sex}的身体上下移动。`);
      await era.printAndWait([
        '表情管理也已经崩坏，但 ',
        vp.get_colored_name(),
        ' 已经不在意了。',
      ]);
      await vp.say_and_wait('去了！去了！啊啊啊！！');
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 的冲刺下，二人同时迎来了顶峰，温热的因子填满了 ',
        vp.get_colored_name(),
        ' 沉下的子宫。',
      ]);
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '射精持续了很久，在这期间，',
        vp.get_colored_name(),
        ' 的子宫一直被龟头亲吻着灌入精液。',
      ]);
      await era.printAndWait([
        '不久全部射出来后，',
        me.get_colored_name(),
        ' 拔出肉棒。与此同时，白浊逆流而出。',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        ' 看着自己的肚子，',
        me.get_colored_name(),
        ' 又压到了她身上。',
      ]);
      await era.printAndWait('嘴唇重叠，舌头缠绕。');
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '持续热吻了一会儿后，',
        me.get_colored_name(),
        ' 把重新恢复精神的那东西顶了过去。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.say_and_wait('啊，不行的……');
      await era.printAndWait([
        '没有什么不行的，',
        me.get_colored_name(),
        ' 再次开始活塞运动。',
      ]);
      await era.printAndWait([
        '被 ',
        me.get_colored_name(),
        ' 强行侵犯的 ',
        vp.get_colored_name(),
        ' 拼命抵抗，但是使不上力气。',
      ]);
      await era.printAndWait([
        '阴道内的抽插变得激烈，嘴巴也被 ',
        me.get_colored_name(),
        ' 的舌头蹂躏。',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        ' 紧紧抱住 ',
        me.get_colored_name(),
        ' 的后背，把身体交给快乐。',
      ]);
      await vp.say_and_wait('真是……我变成什么样都可以吗……');
      await era.printAndWait([
        '看着这样的 ',
        vp.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 露出了满意的笑容。',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        ' 双脚抱住 ',
        me.get_colored_name(),
        ' 的后背，不让 ',
        me.get_colored_name(),
        ' 逃跑。',
      ]);
      await vp.say_and_wait('嗯！射出来，全部给我。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 在龟头紧贴子宫口的状态下吐出精子。',
      ]);
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await vp.say_and_wait('齁哦……啊……');
      await era.printAndWait([
        me.get_colored_name(),
        ' 的射精还在持续，每次脉动时 ',
        vp.get_colored_name(),
        ' 的身体都会跟着痉挛。',
      ]);
      await era.printAndWait([
        '让人感觉是 ',
        vp.get_colored_name(),
        ' 小小的子宫会破裂的量，终于释放结束了。',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 把肉棒慢慢地拔出。']);
      await vp.say_and_wait('能让我再去一次吗……');
      await era.printAndWait([
        '这样说的 ',
        vp.get_colored_name(),
        '，把脸蹭到 ',
        me.get_colored_name(),
        ' 的肉棒上。',
      ]);
      await era.printAndWait('就这样伸出舌头，把龟头含在嘴里。');
      await era.printAndWait('就连尿道里剩下的东西也被吸取干净。');
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 的肉棒再次漂亮地勃起了，被 ',
        vp.get_colored_name(),
        ' 挪到了自己的私处。',
      ]);
      await vp.say_and_wait('这次从后面……');
      await era.printAndWait('匍匐而行，变成了后入的姿势。');
      await vp.say_and_wait('啊！这个不行，戳到的地方不对啊……');
      await era.printAndWait('阴道内的每一块褶皱都被摩擦。');
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await era.printAndWait([
        '由于 ',
        me.get_colored_name(),
        ' 过于激烈的动作，',
        vp.get_colored_name(),
        ' 手臂的姿势崩溃，变成了突出臀部的样子。',
      ]);
      era.printButton(
        `「${sys_get_callname(0, 205)} 的小穴很舒服，紧紧的棒极了。」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '腰撞上去的时候，',
        vp.get_colored_name(),
        ' 的身体就会发抖。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 像攻打腹部一样顺着阴道壁往上推。',
      ]);
      await era.printAndWait([
        '被戳到G点的 ',
        vp.get_colored_name(),
        ' 感觉全身都被通了电。',
      ]);
      await vp.say_and_wait('那里！不行……又要来了！');
      await vp.say_and_wait('去了！射给我！射在我里面吧。');
      await era.printAndWait([
        '高潮的同时被 ',
        me.get_colored_name(),
        ' 中出，注入热乎的因子汁。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '稍憩片刻，说要给 ',
        me.get_colored_name(),
        ' 个惊喜的 ',
        vp.get_colored_name(),
        ' 小跑进了一旁的更衣室。',
      ]);
      await era.printAndWait([
        '过了一会儿，',
        vp.get_colored_name(),
        ' 的小脑袋从更衣室的门缝里弹了出来。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 能看出她一脸不安的表情，一手用力撑着门沿。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 伸手抓住 ',
        vp.get_colored_name(),
        ' 捂住嘴的小手，抓过来反剪到了身后。',
      ]);
      await era.printAndWait([
        '在小手离开嘴巴的一瞬间，',
        vp.get_colored_name(),
        ' 吐出舌头喘着热气的小嘴暴露无遗。',
      ]);
      await era.printAndWait([
        '或许是害怕自己控制不住会发出声音，',
        vp.get_colored_name(),
        ' 急忙咬住下唇。',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        ' 拍了拍 ',
        me.get_colored_name(),
        ' 的手。',
      ]);
      await era.printAndWait([
        '等 ',
        me.get_colored_name(),
        ' 放开她后，',
        vp.get_colored_name(),
        ' 就像母狗一样双手撑在地上，脖子上有一条无比显眼的黑色皮质项圈。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 猛地一拉狗链，让 ',
        vp.get_colored_name(),
        ' 的整个上半身被迫昂起。',
      ]);
      await era.printAndWait([
        '窒息不仅让 ',
        vp.get_colored_name(),
        ' 双颊通红，双手绝望地扣弄着项圈，徒劳地想要解开，也让她快感的刺激直线上升。',
      ]);
      set_palam_to_max(0, part_enum.sadism);
      set_palam_to_max(205, part_enum.masochism);
      await quick_make_love(
        new EroParticipant(0, part_enum.hit),
        new EroParticipant(205, part_enum.body),
        false,
      );
      await era.printAndWait([
        vp.get_colored_name(),
        ' 双腿颤抖着，淫液裹挟着精液一股股地泄出，顺着大腿将胯间完全濡湿……',
      ]);
      await era.printAndWait([
        '施虐癖得到了满足的 ',
        me.get_colored_name(),
        ' 松开了狗链，精疲力尽的 ',
        vp.get_colored_name(),
        ' 跪在了地上，大口喘息着。',
      ]);
      await era.printAndWait([
        vp.get_colored_name(),
        ' 在 ',
        me.get_colored_name(),
        ' 的命令下，小脸贴到地板上，冲着 ',
        me.get_colored_name(),
        ' 撅高了屁股，用双指掰开两瓣红肿的阴唇，向 ',
        me.get_colored_name(),
        ' 展示自己刚刚被内射过的小穴。',
      ]);
      await era.printAndWait([
        '精液一点点滑落到地板上，',
        me.get_colored_name(),
        ' 十分满意。',
      ]);
      era.printButton('「聪明的狗狗一定知道接下来该怎么做吧。」', 1);
      await era.input();
      await vp.say_and_wait('请在我的飞机杯蜜穴里注入您高贵的精液吧❤️～');
      await era.printAndWait([
        '伴随着啄食般的亲吻，',
        me.get_colored_name(),
        ' 的肉棒再次开始了对爱马的侵犯。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      end_ero_and_train();
      era.println();
    }
    await sys_love_uma_in_event(205);
  }
};
