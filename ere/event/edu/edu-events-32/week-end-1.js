const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (tachyon, me) => {
    await print_event_name('实验的开始', tachyon);
    await era.printAndWait([
      '这里是府中特雷森学园，今天 ',
      me.get_colored_name(),
      ' 我的梦想也在这里成长茁壮着',
    ]);
    await tachyon.say_and_wait('训练员君，张口');
    era.println();
    await era.printAndWait('成长茁壮着');
    era.println();
    await tachyon.say_and_wait('训练员君，去跑一圈试试速度');
    era.println();
    await era.printAndWait('成长茁壮');
    era.println();
    await tachyon.say_and_wait('训练员君，把药片含着，我说吞下去才能吞');
    era.println();
    await era.printAndWait('成长……？');
    era.println();
    await era.printAndWait([
      '在从一大早就被叫到实验室做了一早上实验后，',
      me.get_colored_name(),
      ' 内心的疑惑已然达到了巅峰',
    ]);
    era.println();
    await me.say_and_wait(
      ['现在这个时间应该是上课时间，', tachyon.sex, '不用去上学吗？'],
      true,
    );
    await me.say_and_wait('我，这个时候不是应该去做文书业务吗？', true);
    await me.say_and_wait(
      '为什么自己会在这里吃下一堆奇奇怪怪的药做各式各样的实验？',
      true,
    );
    era.println();
    await tachyon.say_and_wait('训练员君？你在发什么呆？');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 疑惑的看着 ',
      me.get_colored_name(),
      '，脸上满是不耐',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '是 ',
      me.get_colored_name(),
      ' 前几天在训练场上看见的',
      tachyon.uma_sex_title,
    ]);
    await era.printAndWait([
      '当时的 ',
      me.get_colored_name(),
      '，被',
      tachyon.sex,
      '那如光一般的速度和跑法所吸引，在冲动下就与',
      tachyon.sex,
      '签订了契约',
    ]);
    await era.printAndWait('然后，冲动下签下了许多奇奇怪怪的契约');
    await era.printAndWait('貌似，其中是包括了试药什么的');
    await era.printAndWait(
      '这么说来，当时的自己竟然就这样毫无怀疑的签下了吗？',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 忍不住开始怀疑自己当时的心智状态',
    ]);
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 忽然回过神来']);
    await era.printAndWait([
      '刚才回忆花了太多的时间，',
      tachyon.get_colored_name(),
      ' 刚刚似乎叫了自己结果自己没有响应',
    ]);
    await era.printAndWait('完蛋了，不会被骂吧');
    await era.printAndWait([
      me.get_colored_name(),
      ' 毫无大人样的，战战兢兢抬头看向负责',
      tachyon.uma_sex_title,
      '，正好对上了',
      tachyon.sex,
      '盯着 ',
      me.get_colored_name(),
      ' 的双眼',
    ]);
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '那暗红色的双眼，如百叶窗一般将 ',
      me.get_colored_name(),
      ' 的目光吸入',
    ]);
    await era.printAndWait('—————不，准确而言，不是吸入');
    await era.printAndWait(
      '那目光只是静静的存在于哪里，但其本身，就如同一面窗户一般',
    );
    await era.printAndWait('使人不由自主想要去探清窗户后的一切');
    await era.printAndWait([
      '将人吸入的，不是',
      tachyon.sex,
      '的目光，而是自己的好奇心',
    ]);
    era.println();
    await era.printAndWait([tachyon.sex, '的极限在哪里？']);
    await era.printAndWait([tachyon.sex, '的脑中到底在想些什么？']);
    await era.printAndWait([tachyon.sex, '的未来究竟能够如何璀璨？']);
    await era.printAndWait([tachyon.sex, '喜欢的类型是？']);
    await era.printAndWait([tachyon.sex, '穿的内裤是什么颜色的？']);
    await era.printAndWait('是戴套派还是吃药派的？');
    await era.printAndWait('敏感带是耳朵还是胸部？');
    await era.printAndWait('在床上喜欢什么体位？');
    era.println();
    await era.printAndWait('一切，一切');
    await era.printAndWait([
      tachyon.sex,
      '的一切 ',
      me.get_colored_name(),
      ' 都想要了解',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '看着 ',
      me.get_colored_name(),
      ' 的眼睛，忽然笑了',
    ]);
    era.println();
    await tachyon.say_and_wait('这种渴求的目光……就像小动物一样啊');
    era.println();
    await era.printAndWait('小动物？自己？');
    await era.printAndWait([me.get_colored_name(), ' 不由得感到有些羞耻']);
    await era.printAndWait('明明是大人的自己却被当成小动物来看待');
    era.println();
    await tachyon.say_and_wait('是啊……小动物，就像……实验动物一样');
    era.println();
    await era.printAndWait([tachyon.sex, '忽然陷入了沉思，不知道在思考些什么']);
    await era.printAndWait('然后，忽然点了点头');
    era.println();
    await tachyon.say_and_wait('……嗯，有了');
    era.println();
    await era.printAndWait([tachyon.sex, '自信满满的说道']);
    era.println();
    await tachyon.say_and_wait(['以后，就叫你 豚鼠君 吧！']);
    era.printButton('「豚，豚鼠？」', 1);
    await era.input();
    await tachyon.say_and_wait('呵呵，不是挺合适的吗？豚鼠君……豚鼠君……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 张口想说些什么，但又闭上了嘴，算了，称呼这种事爱怎么称呼就怎么称呼吧',
    ]);
    await era.printAndWait('看在那双使人发狂的双眸的份上');
    era.set('callname:32:0', 'trainer32');
    if (era.get('cflag:25:66') !== recruit_flags.yes) {
      era.set('callname:25:0', `trainer25t${+(era.get('cflag:0:0') !== 1)}`);
    }
  };

  handlers[47 + 23] = async (tachyon, me, callname, flags) => {
    await print_event_name('最速？最强？', tachyon);
    await tachyon.print_and_wait('更快');
    await tachyon.print_and_wait('还要更快');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在夜晚的训练场奔跑着',
    ]);
    await tachyon.print_and_wait(
      '不管不顾的追求极限，追求速度的极限，可能性的极限',
    );
    await tachyon.print_and_wait('正如，超越光速的粒子（Tachyon）一般');
    await tachyon.print_and_wait('但是……');
    era.println();
    await tachyon.say_and_wait('啧……果然，还是不行……');
    era.println();
    await tachyon.print_and_wait('万物都有自己的代价');
    await tachyon.print_and_wait([
      '据说，曾经有',
      tachyon.uma_sex_title,
      '因为突破了',
      tachyon.uma_sex_title,
      '的极限，而付出生命的代价',
    ]);
    await tachyon.print_and_wait('倘若付出那样的代价真的能够突破极限也就算了');
    await tachyon.print_and_wait([
      '然而 ',
      tachyon.get_colored_name(),
      ' 的双腿，却连那样的资格都不被允许',
    ]);
    era.println();
    await tachyon.say_and_wait('无论怎么做，都无法突破极限……甘于平凡，或是……');
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), ' 停下了脚步']);
    era.println();
    await tachyon.say_and_wait('……我的极限，就在这里了吗？');
    era.println();
    await tachyon.print_and_wait([
      '并非',
      tachyon.uma_sex_title,
      '的极限，而是 ',
      tachyon.get_colored_name(),
      ' 的极限',
    ]);
    era.println();
    await tachyon.say_and_wait('…………那么，要是这条路走不通的话……要选择PlanB吗');
    era.println();
    await tachyon.print_and_wait('放弃「最速」的极限，选择「最强」的极限');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 可以失败，只要失败后，有能够替代',
      tachyon.sex,
      '的人就好了',
    ]);
    await tachyon.print_and_wait('将梦想托付给别人，如同自我逃避一般的选择');
    await tachyon.print_and_wait(
      '原本的话，或许还能说服自己，这是最为理性的选择，将可能性托付在更可能实现的人身上',
    );
    await tachyon.print_and_wait('但是……');
    era.println();
    await me.used_to_say_and_wait('我相信速子');
    await me.used_to_say_and_wait('速子的话，绝对没问题');
    await me.used_to_say_and_wait([
      '一定，别说三冠，突破',
      tachyon.uma_sex_title,
      '的可能性也不成问题……！',
    ]);
    era.println();
    await tachyon.print_and_wait('那个人对自己的信任');
    await tachyon.print_and_wait([
      '这样不亚于对',
      me.sex,
      '的背叛的行为……真的，没问题吗',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……不，这不是背叛，只是，也是给',
      me.sex,
      '一个更好的选择……所以……',
    ]);
    era.println();
    await tachyon.print_and_wait('迷茫');
    await tachyon.print_and_wait('恐惧');
    await tachyon.print_and_wait('困惑');
    await tachyon.print_and_wait('到底……该怎么办才好');
    era.println();
    await tachyon.say_and_wait('……就这样吧');
    era.println();
    await tachyon.print_and_wait('下个月的月桂杯');
    await tachyon.print_and_wait(
      '学生会长举办的，无论年级本格化程度都能参加的比赛',
    );
    await tachyon.print_and_wait('……如果参加的话，从德比到现在短暂的休养期……');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 的双腿一定承受不住的吧',
    ]);
    await tachyon.print_and_wait(
      '但是，这样的数据收集机会，错过了，以后还有机会吗？',
    );
    await tachyon.print_and_wait([
      '不，说到底……',
      tachyon.get_colored_name(),
      ' 真的还有「以后」吗？',
    ]);
    await tachyon.print_and_wait('索性……就在这场比赛中，拼尽全力……吗？');
    era.println();
    await tachyon.print_and_wait('月下的光之粒子，依然迷茫');
    flags.wait_flag = get_attr_and_print_in_event(32, [20, 0, 0, 0, 0], 0);
  };

  handlers.triple_crown = async (tachyon, _, callname, flags) => {
    await print_event_name('三冠之梦', tachyon);
    await tachyon.say_and_wait('……这里是');
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), ' 忽然一阵恍惚']);
    await tachyon.print_and_wait('眼前出现的，是绿草如茵，空无一人的赛场');
    era.println();
    await tachyon.say_and_wait('……是梦吗？');
    era.println();
    await tachyon.print_and_wait([
      '还记得，现在应该是菊花赏结束，刚刚和 ',
      callname,
      ' 分别后，自己累到直接倒上了床',
    ]);
    await tachyon.print_and_wait([
      '菊花赏，确实是目前的自己挑战过最艰难的一次战斗',
    ]);
    await tachyon.print_and_wait('但是，还是赢下来了');
    await tachyon.print_and_wait(
      '然而眼前的，却不是给自己留下如此深刻印象的赛场，而是……',
    );
    era.println();
    await tachyon.print_and_wait('中山赛场？');
    await tachyon.print_and_wait('如果是中山的话，那么……');
    era.println();
    await tachyon.print_and_wait([
      '不出所料，回头看向身后的屏幕，屏幕中播放着皋月赏的图样',
    ]);
    await tachyon.print_and_wait([
      '然而，揭示版上的成绩却昭示着比赛已经结束的事实，第一名，是 ',
      tachyon.get_colored_name(),
      '，理所当然',
    ]);
    era.println();
    await tachyon.say_and_wait(['……回到皋月赏的时候了吗？']);
    era.println();
    await tachyon.print_and_wait([
      '空无一人的赛场，明明没有选手却已经完赛的皋月赏',
    ]);
    await tachyon.print_and_wait(
      '哪怕是不讲逻辑的梦境，这一切也还是太违背常理了',
    );
    era.println();
    await tachyon.print_and_wait('于是……');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 瞪着眼前，不知何时出现的光球',
    ]);
    era.println();
    await tachyon.say_and_wait('你……是谁？是你把我拉进这个梦里的？');
    era.println();
    await tachyon.print_and_wait([
      '所谓的拉入梦里，或许不是那么符合科学的说法，但要是……根据 ',
      sys_get_colored_callname(32, 25),
      ' 的说法来想的话……',
    ]);
    await say_by_passer_by_and_wait('？？？', '…………');
    era.println();
    await tachyon.print_and_wait('光球没有说话，只是在原地漂浮着');
    era.println();
    await tachyon.say_and_wait('……不想说吗？');
    await tachyon.say_and_wait('那么，我就说出自己的猜测了……');
    await tachyon.say_and_wait([
      '你……就是「',
      tachyon.get_colored_name(),
      '」吧',
    ]);
    era.println();
    await tachyon.print_and_wait('要猜出这点，其实没什么困难的');
    await tachyon.print_and_wait([
      '只要能够结合 ',
      sys_get_colored_callname(32, 25),
      ' 说的「另一个自己」就好',
    ]);
    await tachyon.print_and_wait([
      '传说……',
      tachyon.uma_sex_title,
      '是身上宿有异世界的灵魂的存在',
    ]);
    await tachyon.print_and_wait([
      '……虽然说，比起这种说法 ',
      tachyon.get_colored_name(),
      ' 更宁愿相信是生物自然进化的结果就是了',
    ]);
    await tachyon.print_and_wait('但假如，这个说法是真的的话……');
    era.println();
    await tachyon.print_and_wait('「另一个自己」，说的，想必就是这个吧');
    await tachyon.print_and_wait(
      '来自异世界的灵魂，或者被称为「Uma Soul」的存在',
    );
    era.println();
    await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
    await tachyon.say_and_wait('什么？');
    era.println();
    await tachyon.print_and_wait(
      '忽然，光球身上仿佛荡起了涟漪，仿佛拼尽了全力，才发出了这么几个音一般',
    );
    await tachyon.print_and_wait([
      '不自觉的，',
      tachyon.get_colored_name(),
      ' 越靠越近，想听清它在说什么……',
    ]);
    era.println();
    await tachyon.say_and_wait('………！');
    era.println();
    await tachyon.print_and_wait('碰到了');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 的脑中，瞬间出现了不存在的记忆',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '是那个世界，名为 ',
      tachyon.get_colored_name(),
      ' 的生物的记忆',
    ]);
    await tachyon.print_and_wait([
      '如自己最开始所预料的一般，「',
      tachyon.get_colored_name(),
      '」的双腿，在皋月赏后便不堪负荷，被迫引退',
    ]);
    await tachyon.print_and_wait([
      '在那个世界，',
      tachyon.get_colored_name(),
      ' 被认为是可能性的代表，被称为「如果⬛」、「幻之三冠⬛」',
    ]);
    await tachyon.print_and_wait(
      '没有人怀疑，如果让他获得机会，他绝对能够赢下三冠',
    );
    await tachyon.print_and_wait('如果他没有腿伤，绝对会是历史留名的名⬛');
    await tachyon.print_and_wait(
      '如果没有退役，其他同世代的⬛与其相比都会黯淡许多',
    );
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，是最接近三冠的存在',
    ]);
    await tachyon.print_and_wait('但是如果……终究只是如果');
    await tachyon.print_and_wait('无法兑现的如果，那就是一纸废文');
    await tachyon.print_and_wait('随着同期们在不同领域的闪耀');
    await tachyon.print_and_wait('这样的确信也变成了疑问');
    await tachyon.print_and_wait([
      '在东京2400米，真的有办法胜过那个 ',
      get_chara_talk(94).get_colored_name(),
      ' 吗？',
    ]);
    await tachyon.print_and_wait([
      '在京都3000米，真的有办法胜过那个 ',
      get_chara_talk(25).get_colored_name(),
      ' 吗',
    ]);
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), '，是三冠……？']);
    era.println();
    await tachyon.print_and_wait([
      '到此，',
      tachyon.get_colored_name(),
      ' 恢复了神智',
    ]);
    await tachyon.print_and_wait([
      '忽然，',
      tachyon.sex,
      '发现自己能够听懂光球的话了',
    ]);
    await tachyon.say_as_unknown_and_wait('……谢谢……谢谢你……');
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('将如果兑现');
    await tachyon.print_and_wait('将虚无的可能性变成实在的现实');
    era.println();
    await tachyon.print_and_wait([
      '虽然异界的「',
      tachyon.get_colored_name(),
      '」没能成功',
    ]);
    await tachyon.print_and_wait([
      '但 ',
      tachyon.get_colored_name(),
      ' 做到了',
    ]);
    await tachyon.print_and_wait('证明了自己的可能性');
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), '，是三冠⬛']);
    await tachyon.print_and_wait([tachyon.get_colored_name(), '，是三冠⬛？']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，是三冠',
      tachyon.uma_sex_title,
    ]);
    era.println();
    await tachyon.say_and_wait('……这样啊');
    era.println();
    await tachyon.print_and_wait('超越了过去的自己');
    await tachyon.print_and_wait('超越了另一个世界的自己');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，踏出了全新的一步',
    ]);
    era.println();
    await tachyon.say_and_wait('那么，我该走了');
    await tachyon.say_as_unknown_and_wait('…………？');
    era.println();
    await tachyon.print_and_wait([
      '虽然没有说话，但不知为何，',
      tachyon.get_colored_name(),
      ' 能够感受到光球的疑惑',
    ]);
    await tachyon.print_and_wait('去哪里？');
    await tachyon.print_and_wait('梦想已经完成了，不是吗？');
    await tachyon.print_and_wait('目标已经达到了，不是吗？');
    await tachyon.print_and_wait('接下来还要做什么？');
    era.println();
    await tachyon.say_and_wait([
      '哼，『',
      tachyon.get_colored_name(),
      '』的可能性，只能想到经典年的结束吗？',
    ]);
    await tachyon.say_and_wait('……不，这样讲总觉得好像在骂自己啊……咳咳，重来');
    await tachyon.say_and_wait([
      '『',
      tachyon.get_colored_name(),
      '』的可能性，或许只能到经典年结束……',
    ]);
    await tachyon.say_and_wait([
      '不，顶多，也就只到皋月赏为止吧。',
      tachyon.get_colored_name(),
      ' 的可能性……',
    ]);
    await tachyon.say_and_wait('或许也是如此');
    era.println();
    await tachyon.print_and_wait('然而');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 想到了，那个愿意为自己燃尽一切，眼中闪烁着狂气的人',
    ]);
    era.println();
    const relation = era.get('relation:32:0'),
      love = era.get('love:32');
    if (relation <= 0) {
      await tachyon.say_and_wait([
        '虽然……是个非常差劲，就人格而言把',
        get_chara_talk(0).sex,
        '毁灭了或许对世界的贡献还比较大的人',
      ]);
    } else if (love >= 75) {
      await tachyon.say_and_wait('我最爱的，最爱我的，我的恋人');
    } else if (relation <= 225) {
      await tachyon.say_and_wait('与我同行的，志同道合的伙伴');
    } else {
      await tachyon.say_and_wait(
        '理解我的一切，甚至交托性命也不会有丝毫犹豫的那个人',
      );
    }
    era.println();
    await tachyon.print_and_wait('如果……没有那个人在的话');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 后说不定就完全燃尽了',
    ]);
    era.println();
    await tachyon.print_and_wait('如果……没有那个人在的话');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 后说不定就察觉到自己的极限而主动退让了',
    ]);
    era.println();
    await tachyon.print_and_wait('如果……没有那个人在的话');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 绝对，连未来都不敢遐想',
    ]);
    era.println();
    await tachyon.print_and_wait('但是……如果没有意义');
    await tachyon.print_and_wait('并且这个如果，永远不会兑现');
    await tachyon.print_and_wait('所以……');
    era.println();
    await tachyon.say_and_wait([
      '看着吧，『',
      tachyon.get_colored_name(),
      '』，『我们』已经跨越了过去，立足于现在，接下来，是开创未来的时刻了！',
    ]);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，走向了赛场的出口',
    ]);
    await tachyon.print_and_wait(['走出门前，', tachyon.sex, '回头看了一眼']);
    era.println();
    await tachyon.print_and_wait('赛场内的屏幕，皋月赏的图样已经消失');
    await tachyon.print_and_wait('屏幕内的画面一片空白');
    await tachyon.print_and_wait('上一场比赛已经结束');
    await tachyon.print_and_wait(
      '下一场会在这个赛场上上映的，又是怎样的比赛？',
    );
    era.println();
    await tachyon.print_and_wait('不知道，但是，已经说好了，一同前行');
    await tachyon.print_and_wait('所以');
    era.println();
    await tachyon.say_and_wait('继续实验吧……为了，看见可能性能够抵达的彼方');
    flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 20], 0);
  };

  handlers.limited_tachyon = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
  ) => {
    const t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('止步于极限的光子', tachyon);
    era.println();
    await era.printAndWait(['菊花赏，结束了']);
    const coffee = get_chara_talk(25);
    await era.printAndWait([
      '结束后的几天，',
      me.get_colored_name(),
      ' 送了训练到夜晚的 ',
      coffee.get_colored_name(),
      ' 回到寝室，叮嘱',
      tachyon.sex,
      '好好休息，然后……自己回到了学校里',
    ]);
    await era.printAndWait('明明自己也该好好休息的……但毕竟，还有工作没做完啊');
    era.println();
    await era.printAndWait([
      '进入漆黑的训练员室的瞬间，',
      me.get_colored_name(),
      ' 立即发现了房间里还有另一人在',
    ]);
    await era.printAndWait([
      '不是因为 ',
      me.get_colored_name(),
      ' 的感知有多么敏锐，而是那个人手上正拿着能够使人发出光芒的药水',
    ]);
    era.printButton('「……速子啊」', 1);
    await era.input();
    await era.printAndWait([
      '这几个月以来一直帮着为 ',
      coffee.get_colored_name(),
      ' 提供协助的，同样也是 ',
      me.get_colored_name(),
      ' 负责',
      tachyon.uma_sex_title,
      '的 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([tachyon.sex, '手上的药水在月光下散发出七彩的光芒']);
    era.println();
    await tachyon.say_and_wait(['菊花赏，结束了呢']);
    era.printButton('「……是啊」', 1);
    await era.input();
    await era.printAndWait('并非关系不好');
    await era.printAndWait([
      '说到底，',
      tachyon.sex,
      '依然是 ',
      me.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      '，两人日常也总有接触',
    ]);
    await era.printAndWait('所以，正常的交流应该是没问题的');
    await era.printAndWait([
      '但是这几个月以来，你们的交流几乎就没有一次离开过 ',
      coffee.get_colored_name(),
    ]);
    await era.printAndWait('除此之外，再加上合训那时候的事……');
    await era.printAndWait([
      '瞬间，',
      me.get_colored_name(),
      ' 忽然找不到有什么能够和',
      tachyon.sex,
      '聊的话题了',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '的栗色短发在暗沉的月光下，纯褐如酒，暗红的双眼如渴血的野兽，贪婪的注视着 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([
      '在那一瞬间，',
      me.get_colored_name(),
      ' 想到了许多，想到了前辈训练员说的与',
      tachyon.uma_sex_title,
      '维持安全的距离感',
    ]);
    await era.printAndWait([
      '想到了训练员讲座说到的',
      tachyon.uma_sex_title,
      '的独占欲',
    ]);
    await era.printAndWait([
      '想到了',
      tachyon.uma_sex_title,
      '生理学课上教到的',
      tachyon.uma_sex_title,
      '的发情期……',
    ]);
    await era.printAndWait([
      '但这些都帮不了现在手无寸铁面对负责',
      tachyon.uma_sex_title,
      '的自己',
    ]);
    await era.printAndWait([
      '纵使多亏了眼前 ',
      tachyon.get_colored_name(),
      ' 的药剂，自己或许拥有能够稍微抵抗的力量，',
    ]);
    await era.printAndWait('但那真的也就是稍微的力量而已');
    await era.printAndWait([
      tachyon.sex,
      '漫步靠近，下意识的，',
      me.get_colored_name(),
      ' 也跟着慢慢后退',
    ]);
    await era.printAndWait('就这么一进一退，靠到了墙边');
    await era.printAndWait([
      tachyon.sex,
      '压着缩在墙角的 ',
      me.get_colored_name(),
      '，淡淡的说了句',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '，可以……陪我跑一下吗？']);
    era.println();
    await era.printAndWait([
      '说出的是 ',
      me.get_colored_name(),
      ' 意料之中，但比 ',
      me.get_colored_name(),
      ' 的意料还要糟糕的请求',
    ]);
    era.drawLine();
    await era.printAndWait('夜晚下的训练场，空荡的跑道');
    await era.printAndWait([
      '整个赛场上只有 ',
      tachyon.get_colored_name(),
      ' 一人在奔跑着',
    ]);
    await era.printAndWait(['月下的', tachyon.sex, '，跑的十分不像样']);
    await era.printAndWait([
      '这也是难免的，已经将近三个月没有接受训练的',
      tachyon.sex,
      '，',
      '即便是天才，也无法跨越时间，肌肉的退化、感觉的退化等等，对运动员而言都是致命的伤痕',
    ]);
    await era.printAndWait([
      '如果是现在的 ',
      tachyon.get_colored_name(),
      '，说不定连 ',
      me.get_colored_name(),
      ' 都能跑赢……',
    ]);
    await era.printAndWait([
      '虽然听起来很离谱，但每天都在药物锤炼下的身体，或许真的能够胜过已经许久没锻炼过的',
      tachyon.uma_sex_title,
    ]);
    era.println();
    await era.printAndWait('那么，为什么……');
    await era.printAndWait([me.get_colored_name(), ' 痛苦的想着']);
    era.println();
    await era.printAndWait([
      '为什么，即便是如此不堪的跑法，在 ',
      me.get_colored_name(),
      ' 眼中却还是如第一次见到那时一般闪耀',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await era.printAndWait([
      '不知不觉间，',
      tachyon.sex,
      '已经跑完，站在 ',
      me.get_colored_name(),
      ' 的身侧气喘吁吁的喘着气',
    ]);
    await era.printAndWait(['以前的', tachyon.sex, '不该是这样的']);
    await era.printAndWait(['哪怕加上腿伤，', tachyon.sex, '也不应该变成这样']);
    await era.printAndWait([
      '让',
      tachyon.sex,
      '变成这样的，是本应该陪在',
      tachyon.sex,
      '身边，相信',
      tachyon.sex,
      '的那个人',
    ]);
    await era.printAndWait(['是 ', me.get_colored_name()]);
    era.println();
    await tachyon.say_and_wait('……呵呵，跑的很不堪吧');
    era.println();
    await era.printAndWait([
      '没有这回事，',
      me.get_colored_name(),
      ' 想安慰',
      tachyon.sex,
      '道',
    ]);
    await era.printAndWait([
      '但是',
      tachyon.sex,
      '的目光，却不容许 ',
      me.get_colored_name(),
      ' 说出谎言',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '，你还记得吗？月桂杯那时候我说的话',
    ]);
    era.println();
    await era.printAndWait('记得？不如说怎么可能忘掉');
    await era.printAndWait('直到现在，那还是自己常在午夜梦回出现的梦魇');
    await era.printAndWait([
      '怀抱着自己的梦想，与他人的梦想的',
      tachyon.uma_sex_title,
      '在眼前凋零的瞬间',
    ]);
    await era.printAndWait(
      '接下来，无论是责骂怨怼还是哀叹，自己都做好面对的准备了',
    );
    era.println();
    await era.printAndWait(['但', tachyon.sex, '要说的，却不是那些']);
    era.println();
    await tachyon.say_and_wait('剩下用尽全力的几次……现在，机会来了');
    await tachyon.say_and_wait([
      '菊花赏，',
      t_call_c,
      ' 已经绽放出了',
      tachyon.sex,
      '的光芒……是当之无愧，『最强』的',
      tachyon.uma_sex_title,
    ]);
    era.println();
    await era.printAndWait(['最快的', tachyon.uma_sex_title, '赢皋月赏']);
    await era.printAndWait(['最强的', tachyon.uma_sex_title, '赢菊花赏']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 想起了从许久以前流传至今的话语',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '接着……到年底，',
      tachyon.sex,
      '必然将一路抵达巅峰',
    ]);
    era.println();
    await era.printAndWait([tachyon.sex, '畅想着，自己心目中的可能性']);
    await era.printAndWait('……已经不属于自己的可能性');
    era.println();
    await tachyon.say_and_wait([
      '但为了让',
      tachyon.sex,
      '超越极限，还需要磨砺的垫脚石……',
    ]);
    era.println();
    await era.printAndWait(
      '但明明已经失去了自己的可能性，目光中的光芒却还是如此耀眼',
    );
    await era.printAndWait([
      '如果是这样的',
      tachyon.sex,
      '，自己一定会答应的吧，若是',
      tachyon.sex,
      '都能为了梦想燃尽一切，那么陪',
      tachyon.sex,
      '一把又如何',
    ]);
    await era.printAndWait('自己绝对会一如既往，甘之如饴的接受使唤吧');
    await era.printAndWait('但是……');
    era.println();
    await tachyon.say_and_wait(['所以，', callname, '，我需要你的帮助']);
    await tachyon.say_and_wait([
      '我要在明年复归，为了让 ',
      t_call_c,
      ' 抵达更高的极限，只有我，才能以最针对',
      tachyon.sex,
      '的方式制定出战术，逼迫',
      tachyon.sex,
      '抵达极限',
    ]);
    await tachyon.say_and_wait('……你会助我一臂之力的吧');
    era.println();
    await era.printAndWait(
      '如果真的甘心牺牲一切去成就他人，为什么脸上的表情却是如此不甘',
    );
    await era.printAndWait('为什么眼眶却含着泪水');
    era.println();
    await tachyon.say_and_wait('沉默就当默许了');
    era.println();
    await era.printAndWait('说到底，也没有拒绝的理由不是吗');
    await era.printAndWait([
      '为了 ',
      coffee.get_colored_name(),
      ' 能够攀上巅峰',
    ]);
    await era.printAndWait([
      '为了满足 ',
      tachyon.get_colored_name(),
      ' 的「遗愿」',
    ]);
    await era.printAndWait([
      '没什么拒绝的理由吧，只是 ',
      me.get_colored_name(),
      ' 很好奇',
    ]);
    await era.printAndWait(
      '眼前这名栗色头发的天才，现在脑袋里究竟在想些什么呢？',
    );
    edu_marks.glass_leg = 0;
    edu_marks.limited = 1;
    flags.wait_flag = get_attr_and_print_in_event(32, new Array(5).fill(10), 0);
  };
};
