const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[race_enum.tenn_spr] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('彼岸', coffee);
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32);
      await era.printAndWait('惊心动魄的一战。');
      await era.printAndWait([
        '这场全长3200米的 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        ' 最后以 ',
        coffee.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 在最终直线上的厮杀告终。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 那仿佛超越光速的身姿、',
        coffee.get_colored_name(),
        ' 那仿佛追猎般的狂野脚步，深深地震撼了在场所有人。',
      ]);
      await era.printAndWait([
        '——但最后，还是 ',
        coffee.get_colored_name(),
        ' 更胜一筹。',
      ]);
      await era.printAndWait([
        '在',
        coffee.sex,
        '冲线的一刻，京都竞马场的欢呼声响彻云霄。',
      ]);
      await era.printAndWait('选手通道内。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在比赛结束后就不知所踪，而 ',
        coffee.get_colored_name(),
        ' 仍同往常一般在等待 ',
        me.get_colored_name(),
        ' 的到来。',
      ]);
      await coffee.say_and_wait([
        '呼、呼、呼……是我赢了，',
        callname,
        '……在最后的直线那，拼尽全力，超越了 ',
        sys_get_colored_callname(25, 32),
        '。',
      ]);
    } else {
      await era.printAndWait('惊心动魄的一战。');
      await era.printAndWait([
        '这场全长3200米的 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        ' 最后以 ',
        coffee.get_colored_name(),
        ' 在最终直线上仿佛要猎杀前列',
        coffee.get_uma_sex_title(),
        '般的惊人末脚结束。在',
        coffee.sex,
        '冲线的一刻，京都竞马场的欢呼声响彻云霄。',
      ]);
      await era.printAndWait('选手通道内。');
      await coffee.say_and_wait(['呼、呼、呼……我赢了，', callname]);
    }
    const edu_marks = new CoffeeEduMarks();
    await coffee.say_and_wait(
      '而且……我和朋友间的距离……又拉近一些了……虽然还是没能追上。',
    );
    await era.printAndWait([
      '比赛过后，在比赛中全力释放的 ',
      coffee.get_colored_name(),
      ' 变回了往常的样子。',
    ]);
    era.printButton('「很完美的奔跑，恭喜你。」', 1);
    await era.input();
    await coffee.say_and_wait('谢谢，但在能追上朋友之前，还远远不能说是完美……');
    await coffee.say_and_wait([
      callname,
      ' 现在，该选定之后的比赛了对吧。关于下一个目标——',
    ]);
    await era.printAndWait([
      '接下来的目标……就一般而言，大多会选择春季的 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，但让 ',
      coffee.get_colored_name(),
      ' 暂时休息也是一个不错的……',
    ]);
    await coffee.say_and_wait('——我想去远征法国。');
    await era.printAndWait('！？');
    await era.printAndWait([
      '一瞬间，',
      me.get_colored_name(),
      ' 怀疑自己的耳朵听错了，',
      coffee.get_colored_name(),
      ' 的爆炸性发言直接把 ',
      me.get_colored_name(),
      ' 的思维击碎。',
    ]);
    era.printButton('「法国！？凯旋门吗，你要去跑凯旋门！？」', 1);
    await era.input();
    await coffee.say_and_wait(
      '……要更快、更强，只有去另一边……海洋另一边的法国。',
    );
    era.printButton('「………理由呢？又是因为朋友？」', 1);
    await era.input();
    await coffee.say_and_wait(
      '嗯……朋友，快要离开了……一个人去了法国……所以我绝对……',
    );
    if (edu_marks.horse) {
      era.println();
      await era.printAndWait('——不对。');
      await era.printAndWait([
        '突然，',
        me.get_colored_name(),
        ' 的脑海中仿佛凭空出现了一股意念。',
      ]);
      await era.printAndWait([
        '不对？什么不对，是 ',
        coffee.get_colored_name(),
        ' 前往法国的计划不对……亦或是引导',
        coffee.sex,
        '去法国的根本不是朋友？',
      ]);
    }
    era.println();
    await coffee.say_and_wait([callname, '……这个愿望，你会答应吧？']);
    await coffee.say_and_wait('因为朋友也要我过去。所以……');
    if (edu_marks.horse) {
      era.println();
      await era.printAndWait('——不对。');
      await era.printAndWait([
        '又来了，那股意念再一次出现在了 ',
        me.get_colored_name(),
        ' 的脑海。',
      ]);
      await era.printAndWait('到底什么不对，倒是说清楚啊！');
    }
    era.println();
    await coffee.say_and_wait('追上朋友——这是我们之间重要的约定。');
    await coffee.say_and_wait('我是不会放弃的……因为我们是为此，才签订的契约……');
    era.printButton('「…………」', 1);
    await era.input();
    await era.printAndWait([
      '无法反驳，这确实是 ',
      me.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 之间契约关系的基石。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 无法说服 ',
      coffee.get_colored_name(),
      ' 放弃远征。最后，',
      me.get_couple_title(),
      ' 决定先保留国内目标 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，至于是否前往法国远征，则等到下个月中旬再做出决定。',
    ]);
    if (edu_marks.horse) {
      era.println();
      await era.printAndWait([
        '只是，你又想起了那仿佛直接出现在脑海中的意念。',
      ]);
      await era.printAndWait([
        '……引导 ',
        coffee.get_colored_name(),
        ' 前往法国的，到底是什么？',
      ]);
    }
  };

  handlers[race_enum.takz_kin] = async (coffee, me, callname, extra_flag) => {
    if (era.get('cflag:25:育成回合计时') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('代替之物', coffee);
    if (check_tachyon_plan_b()) {
      const c_call_t = sys_get_colored_callname(25, 32);
      await coffee.say_and_wait([
        '呼、呼、呼……',
        c_call_t,
        '……好强……就差一点……',
      ]);
      await coffee.say_and_wait(
        '甚至……感觉已经能碰到朋友的肩膀……但最后，还是我赢了。',
      );
    } else {
      await coffee.say_and_wait(
        '呼、呼、呼……更接近了……我离朋友……前所未有的近……',
      );
      await coffee.say_and_wait('甚至……感觉已经能碰到朋友的肩膀……');
    }
    await era.printAndWait([
      '今年上半年的最后盛事——',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，以 ',
      coffee.get_colored_name(),
      ' 的胜利告终。',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 的身体相较过去已经改善了许多。在完成这样一场激烈的比赛后，只耗费了不久的时间便从全力冲线的虚脱中恢复过来。',
    ]);
    era.printButton('「你变强了，茶座。」', 1);
    await era.input();
    await era.printAndWait([coffee.get_colored_name(), ' 确实变强了很多。']);
    await era.printAndWait([
      '还记得两年半之前 ',
      me.get_colored_name(),
      ' 与 ',
      coffee.get_colored_name(),
      ' 意外的相遇，那时的',
      coffee.sex,
      '还是一个只会在夜晚的训练场独自追逐无形之物的孤僻',
      coffee.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait('现在回头一看，已是走过了这么长的道路。');
    await era.printAndWait([
      '虽然没能前往国外远征，但还是希望能让 ',
      coffee.get_colored_name(),
      ' 的梦想延续的。',
    ]);
    await era.printAndWait('国外远征……');
    await coffee.say_and_wait([callname, '，那我们的下个目标是……']);
    era.printButton('「日本杯，如何？」', 1);
    await era.input();
    await coffee.say_and_wait([
      race_infos[race_enum.japa_cup].get_colored_name(),
      '……与 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
      ' 相同的2400米中距离比赛……',
    ]);
    await coffee.say_and_wait([
      '谢谢你，',
      callname,
      '。那里……就相当于我们的法国了对吧……',
    ]);
    await era.printAndWait([
      '作为无法实现的梦想的延续，11月的东京便是 ',
      me.get_couple_title(),
      ' 的巴黎。',
    ]);
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await era.printAndWait('那真正的巴黎呢？');
      await tachyon.say_and_wait(['是我输了啊，', t_call_c, '。']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 走入了选手通道，坦然地承认了自己的失败。',
      ]);
      await tachyon.say_and_wait('你身上所存在的可能性，比我想象的还要庞大。');
      await tachyon.say_and_wait('到现在为止……Plan B也算是有成果了吧。');
      await coffee.say_and_wait([
        sys_get_colored_callname(25, 32),
        '……谢谢你……',
      ]);
      await tachyon.say_and_wait([
        '那么，也该就此别过了，',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '……或许是我参加的最后一场比赛了。和你的比赛一直都很有趣，',
        t_call_c,
        '。',
      ]);
      await coffee.say_and_wait('……我也会去看你的比赛的。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 只是摆了摆手，没有对 ',
        coffee.get_colored_name(),
        ' 的话做出正面回应。',
      ]);
      await era.printAndWait([
        '于是，',
        coffee.get_colored_name(),
        ' 的下一场目标比赛就决定是 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        ' 了。',
      ]);
      await era.printAndWait([
        '而 ',
        tachyon.get_colored_name(),
        '，也将在 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 迸发自己的光辉。',
      ]);
    } else {
      await era.printAndWait([
        '于是，下一场目标竞赛就决定是 ',
        race_infos[race_enum.japa_cup].get_colored_name(),
        ' 了。',
      ]);
    }
    extra_flag.attr_change = new Array(5).fill(6);
    extra_flag.pt_change = 45;
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.japa_cup] = async (coffee, me, callname, extra_flag) => {
    if (era.get('cflag:25:育成回合计时') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('胜负', coffee);
    await era.printAndWait([
      '全世界关注 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 的观众应该都会记住这一天。',
    ]);
    await era.printAndWait([
      '最终直线上，那道漆黑的影子从队伍的后段奔袭向前，仿佛撕咬着背影般、以无法抵挡的力量与爆发力猎杀了前方每一个「猎物」，被',
      coffee.sex,
      '超越的',
      coffee.get_uma_sex_title(),
      '甚至因为惊吓而短暂失速。',
    ]);
    await era.printAndWait([
      coffee.sex,
      '冲线时高速摄像机所捕捉到的模糊身影，使其后来获得了「漆黑的魅影」这样的称号。',
    ]);
    await era.printAndWait('但这些都是后话。');
    await era.printAndWait([
      '此时，选手休息室内，',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 的获胜者 ',
      coffee.get_colored_name(),
      ' 正在被 ',
      me.get_colored_name(),
      ' 按着进行按摩。',
    ]);
    era.printButton('「今天太乱来了，要是受伤了该怎么办？」', 1);
    await era.input();
    await era.printAndWait([
      '尽管还是没能追上朋友，但 ',
      coffee.get_colored_name(),
      ' 在世界面前跑出了足以自豪的精彩比赛，代价则是在场下见到 ',
      me.get_colored_name(),
      ' 后立刻就坚持不住，倒在了 ',
      me.get_colored_name(),
      ' 怀里。',
    ]);
    await era.printAndWait([
      '万幸的是并没有受伤，只是耗尽体力后的肌肉虚脱。',
      me.get_colored_name(),
      ' 在选手休息室内就地为',
      coffee.sex,
      '做起了肌肉按摩。',
    ]);
    await coffee.say_and_wait(['啊，好痛！……', callname, '，请轻一点……']);
    await coffee.say_and_wait('我只是……感受到观众席上的欢呼声……没能忍住脚步……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 倒没有真的责怪',
      coffee.sex,
      '的意思，在一边按摩一边进行说教后，也就原谅了 ',
      coffee.get_colored_name(),
      ' 的今天的行为。',
    ]);
    await coffee.say_and_wait([
      callname,
      '……下一个目标，就是 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 了吧。',
    ]);
    await era.printAndWait([
      '按摩结束了，',
      me.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 正在收拾东西准备回特雷森时，',
      coffee.sex,
      '提到了一个月后的年末盛事——',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '现在想来，与 ',
      coffee.get_colored_name(),
      ' 相伴的日子也快三年了，与',
      coffee.sex,
      '曾经有过欢乐也有过争吵，有时也会灵异事件而陷入危险，但 ',
      me.get_colored_name(),
      ' 从未后悔当初与',
      coffee.sex,
      '签下契约。',
    ]);
    await era.printAndWait([
      '就用这最后的 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '，检验 ',
      me.get_couple_title(),
      ' 这三年来的成就吧。',
    ]);
    extra_flag.attr_change = new Array(5).fill(10);
    extra_flag.pt_change = 45;
    extra_flag.relation_change = 20;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.arim_kin] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    if (era.get('cflag:25:育成回合计时') < 96) {
      await print_event_name('妖异', coffee);

      await say_by_passer_by_and_wait('解说员', [
        '夺下今年 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 的是——',
        coffee.get_colored_name(),
        '！',
      ]);
      await say_by_passer_by_and_wait('观众们', '喔哦哦哦哦哦！！！！！」');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 即使面对资深级的对手，依旧展现出高水准的表现，拿下了 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '。然而……',
      ]);
      await coffee.say_and_wait('怎么会……距离，被拉开了……');
      await coffee.say_and_wait([
        '比 ',
        race_infos[race_enum.kiku_sho].get_colored_name(),
        ' 的时候……距离更远……怎么会……',
      ]);
      await era.printAndWait([
        '选手通道内，明明胜利了的 ',
        coffee.get_colored_name(),
        ' 却失落的靠在墙边——不，不能说是胜利了，因为',
        coffee.sex,
        '再一次的输给了',
        coffee.sex,
        '的朋友。',
      ]);
      era.printButton('「茶座……」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 想安慰',
        coffee.sex,
        '，却又不知该从何下手。',
      ]);
      await coffee.say_and_wait([
        callname,
        '……朋友变得……更快了。比之前，还要快上许多……',
      ]);
      await coffee.say_and_wait(
        '就像是……为了回应我变得更快，所以才认真了起来一样……',
      );
      await coffee.say_and_wait('怎么会……怎么会……');
      await coffee.say_and_wait('怎么会、怎么会、怎么……！！');
      await era.printAndWait('——啪嚓！');
      await coffee.say_and_wait('唔……！');
      await era.printAndWait([
        '难道说又！？',
        me.get_colored_name(),
        ' 立刻上前扶住了 ',
        coffee.get_colored_name(),
        '，痛苦与泪水在同一时刻涌上了',
        coffee.sex,
        '的面孔，就像是易碎的玻璃一样，令人心疼。',
      ]);
      await era.printAndWait([
        '脱下',
        coffee.sex,
        '的鞋袜，熟悉的趾甲开裂情况再次出现了。虽然',
        coffee.sex,
        '的体重确实不再急遽增减，没想到却还是……',
      ]);
      await era.printAndWait([
        '笼罩 ',
        coffee.get_colored_name(),
        ' 的阴影尚未消失。这到底是诅咒……亦或是某种存在……',
      ]);
      await coffee.say_and_wait('我一定，会拼命追上朋友！');
      await coffee.say_and_wait(
        '明年我一定会……我已经不再是过去那个软弱的自己了……',
      );
      await coffee.say_and_wait(['……', callname, '，下一个目标是……？']);
      await era.printAndWait(['还是先让', coffee.sex, '冷静——唔！']);
      await era.printAndWait([
        '没能把话说出口，',
        me.get_colored_name(),
        ' 突然感到一股……上腹部被人重殴般的冲击感。像是某种……非常强烈的意志……',
      ]);
      era.printButton('「…………春季天皇赏。」', 1);
      await era.input();
      await coffee.say_and_wait([
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '……吗。3200米的长距离比赛……',
      ]);
      await coffee.say_and_wait('意思是……距离这么长的话就能追上朋友，吗？');
      era.printButton('「…………嗯。」', 1);
      await era.input();
      await era.printAndWait([
        '方针上没有问题。既然要决定下一个目标，就该瞄准春季的大型G1。而 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        ' 便是春季的首要赛事，同时也符合 ',
        coffee.get_colored_name(),
        ' 的长距离适性。',
      ]);
      await era.printAndWait([
        '……但刚才那些话，真的是出自 ',
        me.get_colored_name(),
        ' 自己的意志吗？',
      ]);
      extra_flag.attr_change = new Array(5).fill(10);
      extra_flag.pt_change = 45;
    } else {
      await print_event_name('摩天楼', coffee);
      await say_by_passer_by_and_wait('解说员', [
        coffee.get_colored_name(),
        '！是 ',
        coffee.get_colored_name(),
        '——！冲过终点后的',
        coffee.sex,
        '，依旧注视着地平线的远方！！',
      ]);
      await say_by_passer_by_and_wait('解说员', [
        '究竟',
        coffee.sex,
        '的最终目的地会是哪里呢！？又会成长到什么样的境界呢！？',
      ]);
      await era.printAndWait([
        '比赛结束后 ',
        coffee.get_colored_name(),
        ' 没有马上离去，只是站在原地，看向赛道远方。',
      ]);
      await era.printAndWait([
        '担心是不是出现了什么问题，',
        me.get_colored_name(),
        ' 走上前去。',
      ]);
      era.printButton('「那个……茶座？」', 1);
      await era.input();
      await coffee.say_and_wait(['…………', callname, '，我明白了……']);
      await coffee.say_and_wait('是因为你的缘故……所以朋友、走了……');
      await era.printAndWait('啊……？');
      await era.printAndWait([
        '难道是 ',
        me.get_colored_name(),
        ' 的缘故所以让朋友跑走了吗？',
      ]);
      await era.printAndWait([
        '正当 ',
        me.get_colored_name(),
        ' 想就此道歉时——',
      ]);
      await coffee.say_and_wait('我不是……这个意思。');
      await coffee.say_and_wait(
        '我是要说……因为你的关系……让朋友的速度变得快到我无法追上了。',
      );
      await coffee.say_and_wait('没错……朋友在不断进化……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 看着 ',
        me.get_colored_name(),
        ' 的脸，用严肃的表情说道。',
      ]);
      await coffee.say_and_wait('朋友会随着我的理想提升，速度也会变得更快……');
      await coffee.say_and_wait(
        '当我不断变强后……朋友就会到更远的地方招手，并对我说『你还能更快吧』。',
      );
      await coffee.say_and_wait(
        '如果只有我一个人，也许早就能追上朋友了。追上之后……梦想也将在那里止步吧。但是……',
      );
      await coffee.say_and_wait(
        '我现在却仍然……在抬头仰望。仰望着那座看不见顶端的摩天楼……',
      );
      await coffee.say_and_wait('是你……激励了朋友。是你……激励了我。');
      await coffee.say_and_wait('让我到达了，一个人绝对无法触及的……高度……');
      await era.printAndWait([
        '朋友究竟是什么，',
        me.get_couple_title(),
        ' 似乎终于看到了答案的曙光。',
      ]);
      await era.printAndWait('朋友既不是善、也不是恶，因为——');
      await coffee.say_and_wait('我想还会变得更快吧……朋友……');
      await coffee.say_and_wait('然后，我们也还能继续追着朋友前进对吧……');
      await coffee.say_and_wait(
        '朋友不再是我一个人的朋友了……已经成为了我们二人意志的承载……就像赛前我们的约定那样，我想跟你一起追逐，直到天涯海角。',
      );
      era.printButton('「嗯……直到天涯海角。」', 1);
      await era.input();
      await era.printAndWait([
        '从今以后，',
        me.get_colored_name(),
        ' 也会像往常一样同 ',
        coffee.get_colored_name(),
        ' 一起追逐着朋友的背影，不断前行吧。',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        ' 并肩仰望着天空，细细体会着，两人的这个目标是多么珍贵且无边无际……',
      ]);
      extra_flag.attr_change = new Array(5).fill(10);
      extra_flag.pt_change = 45;
      extra_flag.relation_change = 30;
      extra_flag.love_change = 5;
    }
  };
};
