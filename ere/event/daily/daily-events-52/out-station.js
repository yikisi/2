const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    urara = get_chara_talk(52);
  hook.arg = await select_action_in_station(52);
  let random_range = 2;
  if (love === 100) {
    random_range = 5;
  } else if (love >= 75) {
    random_range = 4;
  } else if (love >= 50) {
    random_range = 3;
  }
  switch (hook.arg) {
    case 0:
      if (!edu_marks.hid_menu && love >= 75) {
        edu_marks.hid_menu = 1;
        await print_event_name('隐藏菜单真美味呢！', urara);
        await era.printAndWait([
          '在一日的外出用餐结束后，准备买单时的 ',
          me.get_colored_name(),
          ' 愣愣地听着店员提出的特殊要求。',
        ]);
        await say_by_passer_by_and_wait(
          '店员A',
          '好！所以品尝完本店的隐藏情侣菜品后需要做的是什么呢？',
        );
        era.printButton('「接、接吻……？」', 1);
        await era.input();
        await era.printAndWait([
          '复述着面带可疑笑容的服务员提出的可疑条件，再抬头撇了眼一脸无辜的担当，',
          me.get_colored_name(),
          ' 陷入一些思考。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 真的是因为好友的推荐，没有别的什么目的来到这家店的吗？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 真的是因为「不小心」才向这家店问的「隐藏菜单」？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 真的是因为看不出店面外的诡异装潢才拉着别人进到屋内的吗？',
        ]);
        await me.say_and_wait(
          '可是我为什么会怀疑乌拉拉？难道这一切是我的问题？',
          true,
        );
        await era.printAndWait([
          '没能看到的 ',
          urara.get_colored_name(),
          ' 无辜中漏出了一点恶作剧得逞时的坏笑，',
          me.get_colored_name(),
          ' 因大脑失灵不断地怀疑着自己。',
        ]);
        era.println();
        if (relation >= 150) {
          await urara.say_and_wait([callname, '，在愣什么呢？来Kiss吧！']);
          await urara.say_and_wait(
            `来嘛来嘛！嘿嘿～要在外面和 ${callname} 亲亲了！`,
          );
          await era.printAndWait([
            '但看到 ',
            me.get_colored_name(),
            ' 的动摇，',
            urara.get_colored_name(),
            ' 却开心的和周围人一同起哄着。',
          ]);
          await era.printAndWait([
            '面对一脸认真地凑过来的担当，',
            me.get_colored_name(),
            ' 慌张得像撞鬼了一样使劲摇起头来。',
          ]);
          await me.say_and_wait(
            '一定会有别的选择的乌拉拉，你这样做大家都会受打击的，这样是不会得到别人的祝福的……',
          );
        } else {
          await urara.say_and_wait([callname, ' 不想Kiss吗？虽然我是知道的……']);
          await urara.say_and_wait(
            `但是 ${callname}！大人的话，也不是所有事情都可以选择哦？`,
          );
          await era.printAndWait([
            '看着逐渐陷入慌张的 ',
            me.get_colored_name(),
            '，',
            urara.get_colored_name(),
            ' 却露出了有点嫌弃但莫名开心的表情。',
          ]);
          await era.printAndWait([
            '可面对表面冷淡但态度坚决的担当，',
            me.get_colored_name(),
            ' 却将平时该怎么做忘得一干二净。',
          ]);
          await me.say_and_wait(
            '不行的乌拉拉，当着大家的面这样做我会进局子的，商店街的大家也会骂我的，你的朋友也……',
          );
        }
        era.println();
        await urara.say_and_wait(
          `${callname}！不要东张西望，这样会亲不到的哦！`,
        );
        await era.printAndWait([
          '随着 ',
          urara.get_colored_name(),
          ' 话音刚落，试图拒绝的 ',
          me.get_colored_name(),
          ' 马上就被兴致高涨的担当用',
          urara.get_uma_sex_title(),
          '的力量挤住了脸。',
        ]);
        await era.printAndWait('这下，可真是要在社会层面完蛋了……');
        await era.printAndWait([
          '因为被暴走的担当拉抓住而动弹不得的 ',
          me.get_colored_name(),
          '，只能在众人的注视下绝望地看着 ',
          urara.get_colored_name(),
          ' 那目的性强烈的可爱小脸……',
        ]);
        await era.printAndWait([
          '接下来，无法逃跑的 ',
          me.get_colored_name(),
          ' 便彻底感受到了 ',
          urara.get_colored_name(),
          '「窒息般的爱欲」。',
        ]);
        era.println();
        if (era.get('exp:52:接吻次数') >= 10) {
          await era.printAndWait([
            '小',
            urara.get_uma_sex_title(),
            '纯真中带着七分魅惑神情毫不紧张地靠近了 ',
            me.get_colored_name(),
            '，俏皮地咬住了 ',
            me.get_colored_name(),
            ' 的嘴唇。',
          ]);
          await era.printAndWait([
            '而在之后漫长的被小',
            urara.get_uma_sex_title(),
            '索取的过程中，',
            me.get_colored_name(),
            ' 总觉得自己要失去意识了。',
          ]);
          await era.printAndWait([
            '一开始 ',
            me.get_colored_name(),
            ' 还能隐约听到旁观者一下炸开的窃窃私语，但马上就在 ',
            urara.get_colored_name(),
            ' 灌注的爱意中变得模糊了。',
          ]);
          await era.printAndWait([
            '在周围的声音差不多都安静下来的时候，',
            urara.get_colored_name(),
            ' 终于恋恋不舍的放开了快要倒下的 ',
            me.get_colored_name(),
            '。',
          ]);
          await era.printAndWait([
            '但在这之后，',
            urara.get_colored_name(),
            ' 还带着纯真又无辜的表情伸出舌尖抹了抹 ',
            me.get_colored_name(),
            ' 的嘴唇。',
          ]);
        } else {
          await era.printAndWait([
            '或许是出于害羞，又或是缺乏经验而紧张，操之过急的小',
            urara.get_uma_sex_title(),
            '与 ',
            me.get_colored_name(),
            ' 的正脸撞了个正着。',
          ]);
          await urara.say_and_wait('呜哇、好疼！好像磕到嘴唇和牙了……');
          await era.printAndWait([
            '但失败的第一步并没能使 ',
            urara.get_colored_name(),
            ' 停下，焦躁的拽着 ',
            me.get_colored_name(),
            ' 的衣领，',
            urara.get_colored_name(),
            ' 继续粗暴地品尝着 ',
            me.get_colored_name(),
            ' 的口气。',
          ]);
          await era.printAndWait([
            '尽量无视着周围的窃窃私语声，被小',
            urara.get_uma_sex_title(),
            '侵略性拉扯着颈部的 ',
            me.get_colored_name(),
            ' 总觉得自己随时都会晕过去……',
          ]);
          await era.printAndWait([
            '不过在 ',
            me.get_colored_name(),
            ' 临近力竭倒下的时候，',
            urara.get_colored_name(),
            ' 终于带着一点小遗憾放开了自己的 ',
            callname,
            '。',
          ]);
        }
        era.println();
        await me.say_and_wait(
          '虽然这么想很失礼，但乌拉拉不会是欲求不满了……？',
          true,
        );
        await era.printAndWait([
          '瘫坐在椅子上，',
          me.get_colored_name(),
          ' 用余光扫过了捂住脸的服务员与不敢抬头的其他客人，有气无力的喘了口气。',
        ]);
        await era.printAndWait([
          '小小的担当此时此刻还在用爱魅的目光看着 ',
          me.get_colored_name(),
          '，似乎在跟 ',
          me.get_colored_name(),
          ' 说要不要继续。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 承认纯真的 ',
          urara.get_colored_name(),
          ' 的觉醒和自己脱不了干系，可一口气变成这样沉迷色欲的粉红小',
          urara.sex_code - 1 ? '母马' : '公马',
          '，是否太超过了？',
        ]);
        await era.printAndWait([
          '深刻反省着自己的同时，',
          me.get_colored_name(),
          ' 看到 ',
          urara.get_colored_name(),
          ' 好像又面带红晕靠了过来。',
        ]);
        await urara.say_and_wait(
          `要证明是情侣的话，${callname} 觉得这样是不够的吧？没关系，我也是这样想的哦！`,
        );
        await urara.say_and_wait(['所以 ', callname, '……再来一次吧？']);
        await me.say_and_wait(
          `不要这样啊乌拉拉，${callname} 真的已经不行了！至少、至少在社会性死亡后留一条生命上的退路吧！`,
          true,
        );
        await era.printAndWait([
          '注视着悄悄舔着嘴唇的樱粉色，',
          me.get_colored_name(),
          ' 不堪重负的闭上了眼睛……',
        ]);
        begin_and_init_ero(0, 52);
        set_palam_to_max(0, part_enum.mouth);
        set_palam_to_max(52, part_enum.mouth);
        await quick_make_love(
          new EroParticipant(52, part_enum.mouth),
          new EroParticipant(0, part_enum.mouth),
          false,
        );
        end_ero_and_train();
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '嗯、嘛、啊……学会享受吧，不也挺好吗？',
        );
      } else {
        switch (get_random_value(0, random_range)) {
          case 0:
            await urara.say_and_wait([
              sys_get_colored_callname(52, 30),
              ' 和 ',
              sys_get_colored_callname(52, 33),
              ' 共同推荐的面包餐厅果然很棒呢！下次也一起来吧！',
            ]);
            await era.printAndWait([
              '咬着手中的甜甜圈，',
              urara.get_colored_name(),
              ' 开心地擦着嘴角的糖霜。',
            ]);
            break;
          case 1:
            await urara.say_and_wait(
              `那里是上次和大家一起吃过的拉面！听说还有隐藏菜单呢！${callname} 也试试看吧！`,
            );
            await era.printAndWait([
              '看了看偏僻巷子里这意外还算干净的店面，',
              me.get_colored_name(),
              ' 还是与 ',
              urara.get_colored_name(),
              ' 一同踏入店门。',
            ]);
            await era.printAndWait(
              '至于担当的饮食控制……外出的时候就别这么扫兴了吧。',
            );
            break;
          case 2:
            await urara.say_and_wait(
              '诶？今天吃快餐吗？那我要尝尝这个新套餐！',
            );
            await urara.say_and_wait([
              '很多？那 ',
              callname,
              ' 也来一起吃吧！『乌拉拉～』的上了哦！',
            ]);
            await era.printAndWait([
              '一起分享了大份套餐后，',
              me.get_colored_name(),
              ' 觉得现在要控制体重的可能不只是 ',
              urara.get_colored_name(),
              ' 了。',
            ]);
            break;
          case 3:
            await urara.say_and_wait(
              '啊嗯～咕啾——吃东西时不要发出奇怪的声音？我知道了……？',
            );
            await era.printAndWait([
              '虽然被看到了用奇怪的方式吮吸食物的样子，但满脸无辜的小',
              urara.get_uma_sex_title(),
              '好像自己也不知道在做什么。',
            ]);
            break;
          case 4:
            await urara.say_and_wait(
              `嘿嘿～被 ${callname} 喂了！但乌拉拉不是小孩子了！所以接下来轮到我了哦？${callname}，啊——`,
            );
            await era.printAndWait([
              '带着幸福的笑容，',
              urara.get_colored_name(),
              ' 夺过勺子，也学着样子舀起一勺炒饭送到了 ',
              me.get_colored_name(),
              ' 的嘴边。',
            ]);
            break;
          case 5:
            await urara.say_and_wait(
              '听我说！我在杂志上见到了一种很厉害的、嘴对嘴喂饭的游戏哦！',
            );
            await urara.say_and_wait(
              `不过在外面要学会克制啊……那以后独处的时候，${callname} 要和我玩那种游戏吗？`,
            );
            await era.printAndWait([
              '就算说不要也没什么用吧。撇着小',
              urara.get_uma_sex_title(),
              '期待到有点狂热的眼神，',
              me.get_colored_name(),
              ' 默默地干起了饭。',
            ]);
        }
      }
      break;
    case 1:
      switch (get_random_value(0, random_range)) {
        case 0:
          await urara.say_and_wait([
            sys_get_colored_callname(52, 77),
            ' 推荐的那家杂货店今天好像有进了些有意思的东西！一起进去看看吧！',
          ]);
          await era.printAndWait([
            '一路小跑过去的 ',
            urara.get_colored_name(),
            '，现在已经站到了那家精致的杂货店旁边。',
          ]);
          break;
        case 1:
          await urara.say_and_wait([
            '那边的纪念品店，是 ',
            sys_get_colored_callname(52, 58),
            ' 和 ',
            sys_get_colored_callname(52, 56),
            ' 偶尔会去的地方！现在要一起去看看吗？',
          ]);
          await era.printAndWait([
            '不论去几次，那家店都不像正经的纪念品店，不过只要 ',
            urara.get_colored_name(),
            ' 开心就好了吧。',
          ]);
          break;
        case 2:
          await urara.say_and_wait([
            '啊！那家 ',
            sys_get_colored_callname(52, 47),
            ' 推荐的旧书店！听说里面有出现了好多很稀有的书呢！',
          ]);
          await era.printAndWait([
            '拉着 ',
            me.get_colored_name(),
            ' 来到书店门口，',
            urara.get_colored_name(),
            ' 好奇地透过橱窗向内看去。',
          ]);
          break;
        case 3:
          await urara.say_and_wait(
            `哈啊……啊，要好好走路才行！但是 ${callname} 身上的味道……哈啊……`,
          );
          await era.printAndWait([
            '一路拽着 ',
            me.get_colored_name(),
            ' 的衣服，',
            urara.get_colored_name(),
            ' 完全沉浸在了自己 ',
            callname,
            ' 的气味之中。',
          ]);
          break;
        case 4:
          await urara.say_and_wait(
            `又想起入学第一天妈妈送我来特雷森的时候了……但现在也有 ${callname} 在我身边！`,
          );
          await era.printAndWait([
            '挽起 ',
            me.get_colored_name(),
            ' 的手，',
            urara.get_colored_name(),
            ' 笑着与 ',
            me.get_colored_name(),
            ' 一起穿过熙熙攘攘的人流。',
          ]);
          break;
        case 5:
          await urara.say_and_wait([
            callname,
            '，现在不要松手哦？要是在人群中走散了乌拉拉也会害怕的！',
          ]);
          await era.printAndWait([
            '紧紧抱着 ',
            me.get_colored_name(),
            ' 的手臂，虽然看不到表情，但 ',
            urara.get_colored_name(),
            ' 应该是在笑着吧？',
          ]);
      }
      break;
    case 2:
      if (!edu_marks.try_dress && love >= 25) {
        edu_marks.try_dress = 1;
        hook.override = true;
        await print_event_name('要试穿舞台装了哦！', urara);
        await era.printAndWait([
          '为了在下次比赛前做好充分的准备，',
          me.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 来到商场，准备购买之后的训练中需要的运动用品。',
        ]);
        await era.printAndWait([
          '但在路过那家专门定制决胜服的店面时，',
          urara.get_colored_name(),
          ' 却收到了「试穿舞台装」的邀请。',
        ]);
        await era.printAndWait([
          '而在与',
          urara.get_uma_sex_title(),
          '店员的一番短暂交流后，',
          me.get_couple_title(),
          ' 了解到了事情的原委：',
        ]);
        await era.printAndWait(
          '最近他们是收到了来自其他特雷森的委托，需要定制一套新款舞台装。',
        );
        await era.printAndWait(
          '本来是想从过去没用上的样款中进行改进，但又不知道该挑哪款比较好。',
        );
        await era.printAndWait(
          '不过既然不好选择的话，那直接请特雷森的学生们来试穿不就好了？',
        );
        await urara.say_and_wait([
          '所以在这个时候，我和 ',
          callname,
          ' 就正好路过了吗？真的很巧呢！',
        ]);
        await urara.say_and_wait([
          '试穿新衣服的话乌拉拉确实很有兴趣！但是今天还有其他的事要做，所以——',
        ]);
        await era.printAndWait([
          '在短暂的犹豫后，',
          urara.get_colored_name(),
          ' 果断地选择先征求 ',
          me.get_colored_name(),
          ' 的意见。',
        ]);

        era.printButton('「没关系哦，想试试的话就去做。」', 1);
        await era.input();

        await urara.say_and_wait('太好了——！');
        await era.printAndWait([
          '得到了肯定的答复，在短暂等待之后，小',
          urara.get_uma_sex_title(),
          '便兴奋的在店员的指导下跳进了已经挂好试穿衣物的换衣间。',
        ]);
        await era.printAndWait([
          '不过 ',
          urara.get_colored_name(),
          ' 没问题吗？',
          urara.sex,
          '应该能一个人好好穿衣服吧？',
        ]);
        await era.printAndWait([
          '虽然一开始还有这样的担心，但随着 ',
          urara.get_colored_name(),
          ' 衣着整齐的笑着出现在面前时，',
          me.get_colored_name(),
          ' 也随之打消了顾虑。',
        ]);
        await era.printAndWait([
          '不过注视着用Live时的舞步给店员们找拍照角度的担当，',
          me.get_colored_name(),
          ' 还是稍微有些感慨。',
        ]);
        await era.printAndWait([
          '就算平常的表现还很稚嫩，',
          urara.sex,
          '也一直都在成长，就算没能找到训练员，',
          urara.sex,
          '也能够好好长大吧。',
        ]);
        await era.printAndWait([
          '每当有这样的想法，',
          me.get_colored_name(),
          ' 也会为第一次相遇的时，没有与 ',
          urara.get_colored_name(),
          ' 擦肩而过感到庆幸。',
        ]);
        await era.printAndWait([
          '或许没有遇上 ',
          urara.get_colored_name(),
          ' 的 ',
          me.get_colored_name(),
          ' 也可以走出困境，或许没有 ',
          me.get_colored_name(),
          ' 的 ',
          urara.get_colored_name(),
          ' 也能拿到第一名……',
        ]);
        await era.printAndWait([
          '但如今明知道不能做，身为训练员的 ',
          me.get_colored_name(),
          ' 却总会产生想要将 ',
          urara.get_colored_name(),
          ' 独占的念头。',
        ]);
        await era.printAndWait([
          '身为训练员，这还真差劲。摇头否定了作为大人不合格的思绪，',
          me.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 偶然间对上了视线。',
        ]);
        await era.printAndWait([
          '仿佛进行着个人Live的小小偶像，带着樱粉色的明媚笑容向 ',
          me.get_colored_name(),
          ' 无声地比出了「马儿跳传说」的飞吻。',
        ]);
        await era.printAndWait([
          '尽管没有歌声与音乐的衬托，自己也早已在其他地方看过很多次，小',
          urara.get_uma_sex_title(),
          '红晕的脸颊与娇羞的飞吻还是击中了 ',
          me.get_colored_name(),
          ' 的心。',
        ]);
        await era.printAndWait([
          '在 ',
          me.get_colored_name(),
          ' 稳住砰砰直跳的心脏前，',
          urara.get_colored_name(),
          ' 就在店员们「OK」的手势中重新跳进了后台的换衣间中。',
        ]);
        await me.say_and_wait('……刚刚那个，是乌拉拉？', true);
        await era.printAndWait([
          '按住躁动不安的胸口，冷静下来的 ',
          me.get_colored_name(),
          ' 才反应过来，那位掷出了恋爱飞吻的',
          urara.get_teen_sex_title(),
          '，正是表面还显稚嫩的小担当……',
        ]);
        era.drawLine();

        await urara.print_and_wait([
          '在更衣间中，刚刚突袭了 ',
          callname,
          ' 的 ',
          urara.get_colored_name(),
          ' 扶住穿衣镜的边沿，努力抑制着蹦个不停的心跳声。',
        ]);
        await urara.say_and_wait(
          '那个、快停下来啊！现在并没有在训练，也没有在比赛哦？呜……脑袋晕晕的……',
          true,
        );
        await urara.say_and_wait(
          [
            '明明只是想突然吓吓 ',
            callname,
            ' 的，但是为什么做起来后会变得好害羞……',
          ],
          true,
        );
        await urara.print_and_wait([
          '稍微冷静一点后，',
          urara.get_colored_name(),
          ' 带着不明不白的感情慢慢撑起了身子。',
        ]);
        await urara.print_and_wait([
          '随着',
          urara.get_teen_sex_title(),
          '视线上移，从余光的一角到逐渐直视，',
          urara.get_colored_name(),
          ' 从镜中看到了「另一位',
          urara.get_uma_sex_title(),
          '」。',
        ]);
        await urara.print_and_wait([
          '镜中的',
          urara.get_uma_sex_title(),
          '，是谁？虽然和 ',
          urara.get_colored_name(),
          ' 长得很像，穿着 ',
          urara.get_colored_name(),
          ' 一样的衣服，但一看就是讨人喜欢的样子。',
        ]);
        await urara.print_and_wait([
          '就如同书里的',
          urara.sex_code - 1 ? '公主' : '王子',
          '那般，红透的脸颊，含羞的双眼……这大概是「初恋的',
          urara.get_teen_sex_title(),
          '」的样子？',
        ]);
        await urara.print_and_wait([
          '虽然不是很懂，但就像大家说的那样，和幼稚的 ',
          urara.get_colored_name(),
          ' 一点也不一样，没人会不喜欢这样的',
          urara.get_child_sex_title(),
          '……',
        ]);
        await urara.say_and_wait(
          [
            '那……',
            callname,
            ' 也会喜欢这样的',
            urara.get_child_sex_title(),
            '子吗？',
          ],
          true,
        );
        await urara.print_and_wait([
          '伸手轻轻抚摸着镜中的「',
          urara.get_colored_name(),
          '」，感受着再次加速的心跳，',
          urara.get_teen_sex_title(),
          '没来由的想到。',
        ]);
        await urara.say_and_wait(
          ['但是为什么这时又想到了 ', callname, ' 呢？'],
          true,
        );
        era.println();
        if (relation >= 150) {
          await urara.say_and_wait(
            [
              '虽然还是不知道怎么办才好，但是乌拉拉果然是喜欢看到 ',
              callname,
              ' 开心的样子……',
            ],
            true,
          );
          await urara.print_and_wait([
            '小',
            urara.get_uma_sex_title(),
            '看向了更衣室一角中，那件没有被挂起来的衣服。',
          ]);
          await urara.say_and_wait(
            [
              '乌拉拉也知道那件衣服为什么没有提前拿出来，但是那件衣服的话，',
              callname,
              ' 应该会……',
            ],
            true,
          );
          await urara.print_and_wait([
            '努力的支起耳朵，逐渐失去理智的初恋的',
            urara.get_teen_sex_title(),
            '决定做出一个激进的尝试。',
          ]);
        } else {
          await urara.say_and_wait(
            [
              '为什么乌拉拉会感到开心呢？是因为看到了 ',
              callname,
              ' 很开心的样子吗？',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '但如果 ',
              callname,
              ' 更喜欢乌拉拉的话，会为了乌拉拉变得更好吗？',
            ],
            true,
          );
          await urara.say_and_wait(
            ['那让 ', callname, ' 被乌拉拉迷住的话，或许……？'],
            true,
          );
          await urara.print_and_wait([
            '掀开箱子，拿出那件衣服，初恋的',
            urara.get_teen_sex_title(),
            '在犹豫了片刻后用笨拙的理由说服了自己。',
          ]);
        }
        era.drawLine();
        await urara.say_and_wait('这件衣服也换好了哦！');
        await era.printAndWait([
          '随着 ',
          urara.get_colored_name(),
          ' 带着半分羞涩的元气宣言，更衣间过长的帘子被拉开了。',
        ]);
        await era.printAndWait(
          '紧接着，原本好不容易热闹起来的空气也瞬间凝固了。',
        );
        await era.printAndWait([
          '在场除了面色羞红的 ',
          urara.get_colored_name(),
          ' 之外，所有人都像看到了什么震撼的东西般停下了动作。',
        ]);

        era.printButton('「……？！」', 1);
        await era.input();

        await era.printAndWait([
          me.get_colored_name(),
          ' 不知道怎样描述现在的 ',
          urara.get_colored_name(),
          ' 比较准确，别说形容，现在的 ',
          me.get_colored_name(),
          ' 几乎失去了继续直视担当的毅力。',
        ]);
        await era.printAndWait([
          '不过，那的确是作为训练员时从未见过的 ',
          urara.get_colored_name(),
          '——',
        ]);
        await era.printAndWait([
          '被束紧的胸衣突出的弧度下方融为一体的，是被裹住的纤细腰肢与勒进',
          urara.get_teen_sex_title(),
          '肉体曲线的紧致高叉；',
        ]);
        await era.printAndWait([
          '从后腰与尾根延伸出的蕾丝下摆诱惑地摇曳着，故意空出的肚脐与小腹又仿佛只有情趣意味；',
        ]);
        await era.printAndWait([
          '转到一侧的樱色马尾辫旁是心形的金属耳饰与漆黑的耳套，与皮质手套与长靴一同反射着爱欲的光。',
        ]);
        await era.printAndWait([
          '被这身纯黑色的装束包裹的着，本应「稚嫩」的 ',
          urara.get_colored_name(),
          ' 此刻娇艳而魅惑。',
        ]);
        await era.printAndWait(
          '这到底是哪里的偶像？这魅魔般的装束又是要用在哪里的舞台服？',
        );
        await era.printAndWait([
          '为什么在樱瞳中失去光彩的 ',
          urara.get_colored_name(),
          ' 身上，这件过激的舞台服会如此合适？',
        ]);
        await era.printAndWait([
          '眯起眼睛的 ',
          urara.get_colored_name(),
          '，像是锁定了猎物般向',
          urara.sex,
          '的 ',
          callname,
          ' 投来的兴奋的笑容又是？',
        ]);
        await era.printAndWait([
          '被 ',
          urara.get_colored_name(),
          ' 的视线弄得脊背发毛的 ',
          me.get_colored_name(),
          ' 咽了口口水，不知不觉中，',
          me.get_colored_name(),
          ' 仿佛也在逐渐落入不断蒸发理智的陷阱……',
        ]);
        await era.printAndWait([
          '但就在大人们陷入沉默的同时，小',
          urara.get_uma_sex_title(),
          '却率先一步捂住了逐渐红透的脸。',
        ]);
        await urara.say_and_wait('对、对不起，乌拉拉做过头了，大概……');
        await era.printAndWait([
          '小小的魅魔仅维持了几秒，便马上变回了躲进一旁的换衣间帘子后，因过于害羞变得眼泪汪汪的 ',
          urara.get_colored_name(),
          '。',
        ]);
        era.println();

        await me.say_and_wait('与目白城合作，兼职制作特殊用途的衣服？');
        await era.printAndWait([
          '在大家整理好现状之后，被震撼的 ',
          me.get_colored_name(),
          ' 难以置信地复述着还在不停地道歉着店员的话，一时不知该说什么好。',
        ]);
        await say_by_passer_by_and_wait(
          '店员A',
          '真的很对不起，那件衣服原本是准备处理掉的，但是最后却忘在试衣间里了……',
        );
        await me.say_and_wait('这个理由姑且还算那么回事……');
        await me.say_and_wait(
          '等下，其他衣服就算了，为什么这件衣服乌拉拉穿上也正好合适？定制这件衣服的原主又是……？',
          true,
        );
        await me.say_and_wait('……果然还是算了吧。', true);
        await era.printAndWait([
          '走在拎着大包小包的运动用品走在回去的路上，',
          me.get_colored_name(),
          ' 选择不再去思考这个可疑的问题。',
        ]);
        await era.printAndWait([
          '但在 ',
          me.get_colored_name(),
          ' 沉思的片刻，走在身旁的 ',
          urara.get_colored_name(),
          ' 却发问了。',
        ]);
        await urara.say_and_wait([
          `如果乌拉拉以后继续穿给 ${callname} 看的话，${callname} 会心动吗？`,
        ]);
        in_urara.say_as_unknown([
          '面对 ',
          urara.get_colored_name(),
          ' 的问题，训练员',
          me.get_adult_sex_title(),
          '（您）回答道。',
        ]);
        era.printButton('「说什么呢，那样也太过激了……」（好感+10）', 1);
        era.printButton('「如果不管其他的话……应该会吧？」（爱慕+5）', 2);
        const ret = await era.input();
        await era.printAndWait([
          '听到 ',
          me.get_colored_name(),
          ' 的回答，',
          urara.get_colored_name(),
          ' 只露出了一个不像平常般难以琢磨笑容。',
        ]);
        await era.printAndWait([urara.sex, '到底在想什么呢……']);
        era.drawLine();
        await urara.say_and_wait([
          '虽然看上去很不情愿，可 ',
          callname,
          ' 没有否认会心动呢！虽然这次没撑太久。',
        ]);
        await urara.say_and_wait([
          '嘿嘿～这也是为了以后也让 ',
          callname,
          ' 心动嘛！当然，是要看着乌拉拉呢……',
        ]);
        await in_urara.say_as_unknown_and_wait(
          '这样真的好吗？信任这样一份冲动……人类可是非常靠不住的哦？',
        );
        await urara.say_and_wait([
          '没关系的！因为我相信着 ',
          callname,
          ' 哦！',
        ]);
        sys_like_chara(52, 0, (ret === 1) * 10, true, (ret === 2) * 5) &&
          (await era.waitAnyKey());
      } else {
        switch (get_random_value(0, random_range)) {
          case 0:
            await urara.say_and_wait(
              '那边有参赛的大家的广告牌，今天出现在上面的会是——？',
            );
            await era.printAndWait([
              '在商场大厅内，',
              urara.get_colored_name(),
              ' 与 ',
              me.get_colored_name(),
              ' 一同望向了上方的',
              urara.get_uma_sex_title(),
              '宣传广告牌。',
            ]);
            break;
          case 1:
            await urara.say_and_wait([
              callname,
              '！这次的鞋和蹄铁买和上次一样的就好了吧！诶？是那一双吗？',
            ]);
            await era.printAndWait([
              '疑惑的拿着两种不一样的跑鞋，',
              urara.get_colored_name(),
              ' 对比赛和训练的理解似乎还是有些生疏。',
            ]);
            break;
          case 2:
            await urara.say_and_wait(
              '又路过展示决胜服的地方了！而且这次里面又有好看的新衣服了！',
            );
            await era.printAndWait([
              '有新决胜服展出意味着新的',
              urara.get_uma_sex_title(),
              '会参与到重赏之中，未来的压力可能就会更多一分。',
            ]);
            await era.printAndWait([
              '不过，',
              urara.get_colored_name(),
              ' 的笑容也只是因为大家能离未来更进一步感到开心而已。',
            ]);
            break;
          case 3:
            await urara.say_and_wait([
              callname,
              '，最近衣服下面……磨得有些疼了，可以和乌拉拉一起去看看新的……？',
            ]);
            await urara.say_and_wait([
              '找其他同学一起？可是',
              urara.sex,
              '们最近都没空哦？',
              callname,
              '，再帮我一下……',
            ]);
            await era.printAndWait([
              '虽然 ',
              urara.get_colored_name(),
              ' 的眼神很可怜，但为了避免进局子，',
              me.get_colored_name(),
              ' 还是拼命拒绝了 ',
              urara.get_colored_name(),
              ' 的请求。',
            ]);
            break;
          case 4:
            await urara.say_and_wait([
              '啊！这件衣服……不用哦 ',
              callname,
              '！我会攒好零花钱自己来买的！',
            ]);
            await era.printAndWait([
              '虽然有些恋恋不舍，但听到 ',
              me.get_colored_name(),
              ' 来买下的提议后，',
              urara.get_colored_name(),
              ' 却坚定地将洋裙挂回了衣架。',
            ]);
            break;
          case 5:
            await urara.say_and_wait([
              '乌拉拉～嘿嘿，吓到了吗 ',
              callname,
              '？所以说不要离乌拉拉太远哦？要好好把手牵起来！',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              ' 想将担当放在休息区短暂离开一下，',
              urara.sex,
              '却在 ',
              me.get_colored_name(),
              ' 转身的瞬间从后面了扑上来。',
            ]);
            await era.printAndWait([
              '虽然还想让',
              urara.sex,
              '回去坐一会儿，但 ',
              urara.get_colored_name(),
              ' 似乎既不想退让也没有笑意……',
            ]);
        }
      }
  }
};
