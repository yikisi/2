/**
 * @file 特殊赛后事件口上
 * @author 幽白書
 * @author 无名黑奴（临时）
 */
const {
  add,
  drawLine,
  get,
  input,
  printAndWait,
  printButton,
  println,
  set,
  waitAnyKey,
} = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');
const { class_enum, track_names } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {number} race
 * @param {RaceInfo} info
 * @param {PseudoUma[]} team_contestants
 */
async function check_race_events(race, info, team_contestants) {
  const may_life_marks = new MayLifeMarks();
  let handler = undefined;
  if (team_contestants.findIndex((e) => e.rank.curr === 1) !== -1) {
    switch (race) {
      case race_enum.prix_lat:
        if (get('cflag:204:招募状态') === 0 && get('cflag:204:随机招募') <= 0) {
          add('cflag:204:随机招募', -1);
        }
      // eslint-disable-next-line no-fallthrough
      case race_enum.prix_dia:
        [205, 206].forEach(
          (e) => !get(`cflag:${e}:随机招募`) && add(`cflag:${e}:随机招募`, -1),
        );
    }
  }
  if (
    info === race_infos[race_enum.prix_lat] &&
    team_contestants.findIndex((e) => e.rank.curr === 1) !== -1 &&
    !may_life_marks.who_am_i
  ) {
    may_life_marks.who_am_i = 1;
  }
  if (get('flag:初见URA颁奖') < 2) {
    /**
     * 乙名史悦子 - 初见
     * @author 无名黑奴
     */
    handler = async () => {
      const etsuko = get_chara_talk(303),
        me = get_chara_talk(0);
      await print_event_name('开始采访', etsuko);
      await printAndWait([
        '在离开',
        track_names[info.track],
        '竞马场时，',
        me.get_colored_name(),
        ' 与一位记者打扮的',
        etsuko.get_phy_sex_title(),
        '不期而遇。',
      ]);
      if (get('flag:初见URA颁奖')) {
        await printAndWait([
          me.get_colored_name(),
          ' 认出',
          etsuko.sex,
          '正是每年负责URA颁奖的 ',
          etsuko.get_colored_name(),
          '。',
        ]);
      }
      set('flag:初见URA颁奖', 2);
      await printAndWait([
        etsuko.sex,
        '向 ',
        me.get_colored_name(),
        ' 作了自我介绍，是名为 ',
        etsuko.get_colored_actual_name(),
        ' 的记者。',
      ]);
      await printAndWait([
        '简单打招呼后，',
        etsuko.sex,
        '表示很期待 ',
        me.get_colored_name(),
        ' 的队伍后续的表现。',
      ]);
    };
  } else if (
    !new EtsukoLifeMarks().rape &&
    get('flag:惩戒力度') === 3 &&
    get('cflag:303:招募状态') === recruit_flags.yes &&
    get('cflag:0:妊娠阶段') >> pregnant_stage_enum.fetal > 0 &&
    team_contestants.findIndex((e) => e.index_chara === 0) === -1 &&
    Math.min(...team_contestants.map((e) => e.rank.curr)) === 1 &&
    info.race_class <= class_enum.G3
  ) {
    new EtsukoLifeMarks().rape = 1;
    /**
     * 乙名史悦子 - 孕袋
     * @author 幽白書
     */
    handler = async () => {
      const etsuko = get_chara_talk(303),
        me = get_chara_talk(0),
        champion = get_chara_talk(
          team_contestants.find((e) => e.rank.curr === 1).index_chara,
        );
      if (get_penis_size(303) === 0) {
        set(`status:303:弗隆${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
      }
      if (get_penis_size(champion.id) === 0) {
        set(`status:${champion.id}:弗隆${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
      }
      begin_and_init_ero(0, champion.id, 303);
      await print_event_name('开始「采访」', etsuko);
      await etsuko.say_and_wait('那么，下面让我们开始采访。');
      await me.say_and_wait('咕啾……咕啾……');
      println();
      await printAndWait('选手休息室里，赛后的采访正在有条不紊的进行着。');
      await printAndWait([
        '身为 ',
        me.get_colored_name(),
        ' 的队伍的专访记者的 ',
        etsuko.get_colored_name(),
        ' 坐在访客椅上，采访着比赛刚结束的',
        champion.get_uma_sex_title(),
        '。',
      ]);
      println();
      await etsuko.say_and_wait(
        '首先恭喜今天的胜利，今天的这场比赛……唔……非常的，精彩呢。',
      );
      await champion.say_and_wait(
        '谢谢您的称赞！今天的比赛……能够胜利确实令人高兴。',
      );
      await me.say_and_wait('咕啾……啾啵啾噜……');
      println();
      await printAndWait(
        '除了偶尔不自然的话语暂停，以及不知为何回荡在室内的水声，整场采访顺利的进行着。',
      );
      await etsuko.say_and_wait(
        '那……那么，有什么……想感谢的人，或者想对……观众说的话吗？',
      );
      await champion.say_and_wait('嗯……果然，最感谢的还是训练员呢。');
      await me.say_and_wait('！啾咕……啾啵……啾噜噜……');
      println();
      await etsuko.say_and_wait('唔……！');
      await champion.say_and_wait('哈啊……！');
      println();
      await printAndWait(
        '忽然，不知道发生了什么，但那背景音的水声忽然加快了发声的频率，采访记者与被采访者也一时陷入沉默。',
      );
      println();
      await etsuko.say_and_wait([
        '那可……真是不错呢，',
        champion.get_uma_sex_title(),
        '与训练员……之间互相成就的佳话。',
      ]);
      await champion.say_and_wait(
        '嗯……就是啊……训练员……总是为我们而着想……非常的……帅气呢……',
      );
      await etsuko.say_and_wait(
        '那……那么，感谢今天……接受……采……采访……要，要出来了！',
      );
      set_palam_to_max(303, part_enum.penis);
      set_palam_to_max(0, part_enum.mouth);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      set_palam_to_max(champion.id, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.virgin),
        new EroParticipant(champion.id, part_enum.penis),
        false,
      );
      println();
      await printAndWait('在意义不明的结束语后，采访的录音结束。');
      println();
      await etsuko.say_and_wait(
        '哎呀……之前只知道训练员小姐的培育手段一流，却没想到嘴上的功夫也是如此……',
      );
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        ' 从桌上拿起先前采访用的油性笔，在桌子底下随意的画了些东西。',
      ]);
      await printAndWait([
        '而 ',
        champion.get_colored_name(),
        ' 更是在采访结束的瞬间便将手伸入桌子底下，顿时响亮的拍打声与夹杂其中闷哼的娇喘声响起。',
      ]);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      println();
      await printAndWait(
        '若是此刻有人推门进来，一定会惊讶于眼前看见的景色吧。',
      );
      await printAndWait('又或者……只会觉得司空见惯？');
      await printAndWait('毕竟这种事在特雷森学园内也已经是家常便饭的事了。');
      println();
      await printAndWait([
        '在 ',
        etsuko.get_colored_name(),
        ' 与 ',
        champion.get_colored_name(),
        ' 进行采访的桌子底下，赫然正有一名身材姣好的马娘正在为两人服务着。',
      ]);
      await printAndWait(
        '那名马娘穿着看似特雷森学园训练员西装的衣服，之所以说是看起来，是因为全身上下，或许只有那件披在背上的西装外套看起来像是衣服，其他包括被巨乳及装满精液的孕肚撑破的白色底衫、下半身充斥着精斑以及撕扯的破裂痕迹的丝袜，要称之为衣服还不如视为破布或情趣衣物更为合适。',
      );
      await printAndWait([
        '她含着 ',
        etsuko.get_colored_name(),
        ' 股间的巨根，身后则以后背位容纳来自',
        champion.get_uma_sex_title(),
        '的掌殴及灌播。',
      ]);
      await printAndWait([
        '若是有对本次比赛阵容稍有了解的人更会发现，如此淫猥场景的中心，那名正一前一后被夹击着的马娘，便是本次胜利的 ',
        champion.get_colored_name(),
        '，',
        champion.sex,
        '的训练员，',
        me.get_colored_name(),
        '。',
      ]);
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        ' 将 ',
        me.get_colored_name(),
        ' 的头抬起，细细端详自己的杰作。',
      ]);
      await printAndWait([
        '写在额头上的正字，端正的笔画展现出了 ',
        etsuko.get_colored_name(),
        ' 身为记者的修养。',
      ]);
      await printAndWait('左脸颊上栩栩如生的阴茎图案，展示了记者的素描能力。');
      await printAndWait([
        '右脸颊上可爱的乌龟则展现了 ',
        etsuko.get_colored_name(),
        ' 小小的童心。',
      ]);
      await printAndWait('不过可惜，这样脸上都已经画满了，接下来该怎么办呢？');
      println();
      await printAndWait([
        '此时，由于 ',
        champion.get_colored_name(),
        ' 的激烈活塞运动，导致跟着节奏前后摇摆的 ',
        me.get_colored_name(),
        ' 的雪白胸部映入 ',
        etsuko.get_colored_name(),
        ' 的眼帘。',
      ]);
      println();
      await etsuko.say_and_wait('有了，这不是还空着嘛！');
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        ' 将 ',
        me.get_colored_name(),
        ' 的巨乳托起，放置在腿上，让 ',
        me.get_colored_name(),
        ' 用胸部夹住了自己的阴茎。',
      ]);
      await quick_make_love(
        new EroParticipant(303, part_enum.penis),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await printAndWait([
        '由于整个上半身被抬起，',
        me.get_colored_name(),
        ' 的头也被口中含着的肉棒顶起，撞到桌子发出声响，惹得身后不满的 ',
        champion.get_colored_name(),
        ' 又大力拍打了 ',
        me.get_colored_name(),
        ' 的屁股几下。',
      ]);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      await printAndWait([
        '为了不让头撞到桌子，',
        me.get_colored_name(),
        ' 只能拼命的将巨根吞入，直到将食道完全占满。',
      ]);
      println();
      await printAndWait([
        '然而 ',
        etsuko.get_colored_name(),
        ' 却没在乎那些，眼中只有 ',
        me.get_colored_name(),
        ' 那羊脂一般雪白的胸部，如此又多了一块能够作画的画布了。',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        ' 想了想，在围绕着自己粗壮肉棒的胸肉上，沿着自己的尺寸画圈，沿着圈，画了一个栩栩如生的小穴———就 ',
        me.get_colored_name(),
        ' 那经过改造已经变成完美性用具的身体而言，乳穴确实有着不输小穴的压力，虽说没有小穴的皱折，但那经过完美改造的口穴及喉穴也能提供有过之而无不及的服务。',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        ' 满意的端详着自己的杰作，虽说不太雅观，但起码也比那名在训练员的屁股上用孩子气的笔迹写下『母猪』、『公用厕所』、『便器女』、『训练员失格』的 ',
        champion.get_colored_name(),
        ' 要好些。',
      ]);
      println();
      await printAndWait([
        '没过多久，',
        etsuko.get_colored_name(),
        ' 一阵颤抖，',
        me.get_colored_name(),
        ' 马上明白这是要射出来的前兆，更加用心的服侍着眼前的巨根。',
      ]);
      await printAndWait([
        '随后，大炮射出，白浊的礼炮瞬间灌满了 ',
        me.get_colored_name(),
        ' 的食管，不仅如此，甚至还在向外溢出直到 ',
        me.get_colored_name(),
        ' 的口齿间满是白浊生命后。',
      ]);
      set_palam_to_max(303, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      printButton('「咳……咳咳」', 1);
      await input();
      await printAndWait([
        me.get_colored_name(),
        ' 依然还是忍不住吐出了肉棒，直到这时依旧没停下射精的巨炮朝着 ',
        me.get_colored_name(),
        ' 的背喷出了最后的白浊，如此一来，就连最后能够被称为衣物的黑色西装外套，也被精液完全染成白色了。',
      ]);
      println();
      await champion.say_and_wait('真是没用啊……连乖乖服侍都做不到吗？');
      println();
      await printAndWait([
        '由于 ',
        me.get_colored_name(),
        ' 的乱动，使得原本被夹在穴内的 ',
        champion.get_colored_name(),
        ' 的肉棒也滑了出来，前面可说是被肉棒撑在口中的 ',
        me.get_colored_name(),
        ' 跌在地上，那最先接触到地面的孕肚不堪负荷的从穴内排出精液。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 慌忙朝着两人土下座恳求原谅，颤抖的身躯又不由自主的从身后喷出了小股白泉，在地上留下污渍——不过清理选手休息室当然也是 ',
        me.get_colored_name(),
        ' 的工作之一了，那原本唯一完好无缺的西装外套便是为了这个用途，只可惜现在沾上了精液……看来等会训练员小姐只能用自己的身体来将地板擦干净了。',
      ]);
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        ' 摇了摇头，示意自己没有在意这点小事。',
      ]);
      println();
      await etsuko.say_and_wait(
        '今天的采访也结束了，差不多该回去了，谢谢两位今天的招待。',
      );
      println();
      await printAndWait([
        '听见 ',
        etsuko.get_colored_name(),
        ' 的示意，',
        me.get_colored_name(),
        ' 立马上前含住了 ',
        etsuko.get_colored_name(),
        ' 刚射完还没软下的肉棒做最后的清洁，将刚才自己没做完的事情继续完成。',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      println();
      await printAndWait([
        me.get_colored_name(),
        ' 清洁完后张开口，让主人们看清了口中的白浆，先前没完全清理干净的精垢，以及边上夹杂的几根曲毛后，才一口吞了下去，再度张开口请主人们进行检查。',
      ]);
      println();
      await etsuko.say_and_wait(
        '那么，期待您以后的活跃，我会继续支持着两位的！',
      );
      await champion.say_and_wait([
        '嗯！我一定会继续努力，绝对不会辜负记者',
        etsuko.get_adult_sex_title(),
        '和大家的期待的！',
      ]);
      println();
      await printAndWait([
        '走出了选手休息室的 ',
        etsuko.get_colored_name(),
        '，没有马上离开，因此也听见了门内的声音。',
      ]);
      println();
      await champion.say_and_wait(
        '听到训练员就忽然夹的那么紧，你不会还觉得自己是什么优秀的训练员吧？只有在场上的时候你才是训练员，场下的妳不过是性处理用的母猪孕袋罢了，给我好好记清楚自己的身份啊！',
      );
      println();
      await printAndWait('随着斥责再度响起的是清脆的拍打声和沉闷的碰撞声。');
      await printAndWait([etsuko.get_colored_name(), ' 满意的点了点头。']);
      set_palam_to_max(champion.id, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.abuse),
        new EroParticipant(0, part_enum.masochism),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      println();
      await printAndWait([
        '为负责',
        champion.get_uma_sex_title(),
        '付出一切的训练员，以及虽然信赖对方，但在有错时也会不畏惧指出错误的',
        champion.get_uma_sex_title(),
        '，这对搭档的未来必然也是一片光明。',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        ' 如此深信着，下半身的巨根仿佛赞同着',
        etsuko.sex,
        '的想法一般，也微微抬起了头。',
      ]);
      await end_ero_and_train();
      println();
      sys_like_chara(champion.id, 0, 50) && (await waitAnyKey());
      sys_like_chara(303, 0, 200) && (await waitAnyKey());
    };
  }
  if (handler) {
    drawLine();
    await handler();
  }
}

module.exports = check_race_events;
