const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.sank_hai] = async (
    tachyon,
    me,
    callname,
    _,
    relation,
    love,
  ) => {
    await print_event_name('变量·群众感情的刺激', tachyon);
    await era.printAndWait('大阪杯');
    await era.printAndWait('一年中，中长距离最初的一场G1赛事');
    await era.printAndWait([
      '对于刚刚进入资深年的',
      tachyon.get_uma_sex_title(),
      '来说，这是最初检验其实力的一场比赛',
    ]);
    await era.printAndWait(['然而……对 ', tachyon.get_colored_name(), ' 而言']);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '速子前辈！皋月赏那个时候真的太帅了！',
    );
    await tachyon.say_and_wait(
      '呵呵，谢谢支持，不过我的跑法是一直在进步的，比起皋月赏，现在跑的……绝对会更加惊艳哦',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'B', [
      '速子前辈……看到你在德比的跑法……我真的觉得，如果说',
      tachyon.get_uma_sex_title(),
      '有极限的话，大概就是那样了！',
    ]);
    await tachyon.say_and_wait([
      '不，那只是 ',
      tachyon.get_colored_name(),
      ' 的极限而已……',
      tachyon.get_uma_sex_title(),
      '是没有极限的，我相信你们都拥有着无穷的可能性',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'C',
      '速子前辈！到底要怎么样才能变成像你一样跑的这么快……！',
    );
    await tachyon.say_and_wait('哦？真的想知道吗？那么，明天下午到教学理科……');
    era.printButton('「咳咳」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 咳了两声，提醒 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      '正与后辈们友好交流的',
      tachyon.sex,
      '僵了一下，人后装作什么也没有发生的继续说了下去',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 不停说着自己比赛时的事，引的这些后辈的小',
      tachyon.get_uma_sex_title(),
      '们专注聆听',
    ]);
    await era.printAndWait('看上去就像赛前的正常粉丝服务一般温馨的场景');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 叹了口气，回想起前几个月 ',
      tachyon.get_colored_name(),
      ' 说的实验内容',
    ]);
    era.println();
    await tachyon.used_to_say_and_wait([
      '根据资料的收集……',
      tachyon.get_uma_sex_title(),
      '在比赛或者奔跑中会感到快乐的原因，首先排在最优先的是被人称赞，收到观众的支持……',
    ]);
    await tachyon.used_to_say_and_wait([
      '毕竟都还是初中生高中生的年纪，渴望认可也是很正常的',
    ]);
    await tachyon.used_to_say_and_wait(
      '虽然我觉得自己不会受到影响……但既然是实验，那就必须要将所有可能性都考虑于内',
    );
    await tachyon.used_to_say_and_wait('综合以上……没错，获得观众的支持……');
    era.println();
    await era.printAndWait([
      '说到这，',
      me.get_couple_title(),
      ' 忽然陷入了卡壳',
    ]);
    era.println();
    await era.printAndWait(
      '回想起几个月前暑期的事……以及在那之后各种的拒绝采访',
    );
    await era.printAndWait([
      '在大众眼中的 ',
      tachyon.get_colored_name(),
      '，在媒体的宣传以及我方的忽视下，似乎已经变成现役的最大问题儿童了',
    ]);
    era.println();
    await tachyon.say_and_wait('……总之，先从特雷森内部能够掌握的来吧');
    era.drawLine();
    await era.printAndWait('如此如此这般这般');
    await era.printAndWait([
      '不过，虽然已经不是第一次看见了，但 ',
      tachyon.get_colored_name(),
      ' 的交流能力还是一如既往的强大啊……',
    ]);
    await era.printAndWait(
      '要是愿意把花费在那些危险实验的精力分出一些在经营人际交往上……',
    );
    await era.printAndWait(['自己说不定就不会被', tachyon.sex, '迷上了吧']);
    await era.printAndWait(
      '那种不顾一切，为了研究一切都能做到最好的奉献般的身姿',
    );
    await era.printAndWait('以及抛却一切，将所有甩在背后的跑法');
    await era.printAndWait([
      '两者合一的 ',
      tachyon.get_colored_name(),
      '，才是最令人着迷的',
      tachyon.sex,
    ]);
    if (love >= 75 && tachyon.sex_code - 1 && me.sex_code > 0) {
      await era.printAndWait('……不过');
      await era.printAndWait([
        '看着自己的爱人这样被他人围拥，哪怕都是同性也还是令人有些吃醋啊',
      ]);
      await era.printAndWait('这种时候……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 偷偷按下了藏在手上的某个按纽',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '速子前辈！可以帮我签名吗！',
      );
      await tachyon.say_and_wait('呵呵，当然可……唔！');
      era.println();
      await era.printAndWait([
        '在签名的瞬间被启动的某个小玩具，使得 ',
        tachyon.get_colored_name(),
        ' 的签名歪了一些',
      ]);
      await era.printAndWait(
        '幸好那名眼神里满是崇拜的小粉丝似乎并不在意这点小事',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 回过头来暗暗瞪了 ',
        me.get_colored_name(),
        ' 一眼',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 点了点头，露出歉意的笑容……然后，将手上的遥控器强度调高一阶',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'B',
        '速子前辈……今天的比赛请一定要加油！',
      );
      await tachyon.say_and_wait('好呜呜……一……一定会……');
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'C',
        '速子前辈……怎么了吗？',
      );
      await tachyon.say_and_wait('没……没什么……只是……只是……咕……');
      era.printButton('「时候也不早了，该回去选手休息室准备了」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 连忙上前帮 ',
        tachyon.get_colored_name(),
        ' 解围，在',
        tachyon.sex,
        '那比起瞪视更像欲求不满的调情的目光下，带着',
        tachyon.sex,
        '连忙回到选手休息室',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……真是的……别那么嫉妒啊……连后辈的醋都吃……',
        me.sex_code === 1 ? '男人不大方点怎么行呢' : '',
      ]);
      era.printButton('「那，我去关心一下茶座的赛况了」', 1, {
        disabled: sys_reg_race(25).curr.race === race_enum.sank_hai,
      });
      era.printButton('「那，我也去关心一下你的后辈们吧」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '都把人家的性欲勾起了，现在还想去找其他人……这可不行啊',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 轻轻的从背后抱了上来',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '比赛前……时间还够吧♡别用这种无聊的玩具了……难道你不想，直接填满我的里面吗♡',
      ]);
      era.drawLine();
      await era.printAndWait([tachyon.get_colored_name(), ' 踏上了赛场']);
      await era.printAndWait([
        '不过……这是唯一一次幸亏',
        tachyon.sex,
        '那掩的遮实的胜负服，不然大概所有人都会发现',
        tachyon.sex,
        '那莫名突起的小腹了吧',
      ]);
      begin_and_init_ero(0, 32);
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(32, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(32, part_enum.virgin),
        false,
      );
      end_ero_and_train();
    }
    era.printButton('「时间差不多了，速子」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '啊，也是，那么该上场了……请在比赛结束后再为我祝贺吧，小马驹们',
    );
    era.println();
    await era.printAndWait([
      '最后的一个媚眼引得小',
      tachyon.get_uma_sex_title(),
      '们再度发生了惊呼',
    ]);
    era.printButton('「……小马驹？」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '跟 ',
      sys_get_colored_callname(32, 5),
      ' 学的……怎么，你也想被这么称呼吗？我的小豚鼠？',
    ]);
    era.printButton('…………不，还是算了吧', 1);
    await era.input();
    await tachyon.say_and_wait(['哦呀，居然害羞了吗？真是纯情啊，', callname]);
    era.printButton('毕竟……硬件比不上，这样模仿只会让人觉得……', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 可怜的看着 ',
      tachyon.get_colored_name(),
      ' 的胸前',
    ]);
    await tachyon.say_and_wait([
      '…………',
      callname,
      '？能麻烦你说清楚硬件是什么意思吗？',
    ]);
    era.printButton('……不，什么也没有', 1);
    await era.input();
    await era.printAndWait('在打闹中，比赛开始的时间也到了');
  };

  handlers[race_enum.takz_kin] = async (tachyon, me, callname, edu_marks) => {
    if (era.get('cflag:32:育成回合计时') < 96) {
      return true;
    }
    if (edu_marks.plan_b) {
      await print_event_name('齐心', tachyon);
      await era.printAndWait('热血沸腾');
      await era.printAndWait('已经多久没有感受过了，这种比赛的热情');
      era.println();
      await tachyon.say_and_wait([callname, '……我要上了']);
      era.printButton(
        `「上吧！让我看看${tachyon.get_uma_sex_title()}的极限！」`,
        1,
      );
      era.printButton('「放心赢下吧，再让我热血沸腾一次吧！」', 2);
      await era.input();
      await tachyon.say_and_wait('嗯……然后，等到宝冢结束……');
      era.println();
      await era.printAndWait([me.get_colored_name(), ' 点了点头']);
      await era.printAndWait('那时候说好的，更宽广的世界');
      era.printButton('「将我们的极限，刻在世界的顶端吧！」', 1);
      await era.input();
    } else {
      await print_event_name('万众其心', tachyon);
      await era.printAndWait([
        '在 ',
        me.get_couple_title(),
        ' 抵达阪神赛场的时候，全场已经人声鼎沸',
      ]);
      era.println();
      await say_by_passer_by_and_wait('观众A', [
        '果然看好的还是 ',
        tachyon.get_colored_name(),
        ' 啊',
      ]);
      await say_by_passer_by_and_wait('观众B', [
        tachyon.get_colored_name(),
        '？那不是……之前……',
      ]);
      await say_by_passer_by_and_wait('观众C', [
        '一听就知道上次大阪杯你没看了，能够跑出那种跑法的',
        tachyon.get_uma_sex_title(),
        '不可能是坏人！',
      ]);
      await say_by_passer_by_and_wait(
        '观众D',
        '人格跑法论什么的差不多得了……不过，确实是非常与众不同的跑法',
      );
      await say_by_passer_by_and_wait('观众E', [
        '加油啊！再跑出大阪杯的跑法来吧！',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '哦呀哦呀……真是受欢迎啊，而且提的都是大阪杯……我说，我去年的比赛就这么无聊吗？',
      );
      era.printButton('「去年当然也很精彩」', 1);
      era.printButton('「只是大阪杯尤其精彩」', 2);
      await era.input();
      await era.printAndWait([
        '去年的 ',
        tachyon.get_colored_name(),
        '，跑起来除了光的眩目感外，却带有一丝虚幻',
      ]);
      await era.printAndWait([
        '因此看完',
        tachyon.sex,
        '的比赛，比起惊艳更多还是担心',
      ]);
      await era.printAndWait(['害怕', tachyon.sex, '会就这么化光而去']);
      await era.printAndWait('没有了那丝虚幻感后');
      await era.printAndWait([tachyon.get_colored_name(), ' 的跑法，堪称艺术']);
      era.println();
      await tachyon.say_and_wait(
        '……姑且当成是夸奖吧，那么，这样的气氛也正好进行第二次的实验',
      );
      await tachyon.say_and_wait(
        '大阪杯那次……没能在比赛途中确定，现在G1的舞台，还有应援的粉丝，呵呵，到底能够走到哪一步呢',
      );
    }
  };

  handlers[race_enum.arim_kin] = async (tachyon, me, callname, edu_marks) => {
    if (era.get('cflag:32:育成回合计时') < 96) {
      return true;
    }
    await print_event_name('最终实验准备完成', tachyon);
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    if (edu_marks.plan_b) {
      const c_call_me = sys_get_colored_callname(25, 0),
        c_call_t = sys_get_colored_callname(25, 32);
      await tachyon.print_and_wait('有马纪念');
      await tachyon.print_and_wait([
        '按 ',
        callname,
        ' 所说，这场比赛后就能给自己一个解答了',
      ]);
      await tachyon.print_and_wait('有些恐惧，却又有些期待');
      await tachyon.print_and_wait('恐惧即将迎来的结局');
      await tachyon.print_and_wait('期待即将揭晓的真相');
      await tachyon.print_and_wait([me.sex, '到底想说些什么']);
      await tachyon.print_and_wait('今天的有马，就能说清了吗？');
      era.println();
      await coffee.say_and_wait(['……', c_call_t, '？']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '！']);
      await tachyon.say_and_wait('……啊？');
      era.println();
      await era.printAndWait([
        '回过神来，眼前的 ',
        t_call_c,
        ' 正无奈的看着自己',
      ]);
      era.println();
      await coffee.say_and_wait('叫了好几声了……又在分什么心？');
      await tachyon.say_and_wait('……没什么，没事');
      await coffee.say_and_wait('……奇怪');
      await tachyon.print_and_wait([
        '如果不是为了 ',
        t_call_c,
        '，自己绝对不会变成这样',
      ]);
      await tachyon.print_and_wait([
        '如果当初没有尽心帮助 ',
        t_call_c,
        ' 就好了，最起码，还能让自己成为 ',
        callname,
        ' 心中最亮的光',
      ]);
      await tachyon.print_and_wait([
        '……之类的想法，哪怕一点，都不曾在 ',
        tachyon.get_colored_name(),
        ' 的脑海中出现过',
      ]);
      await tachyon.print_and_wait([
        '要是产生了那样的想法，就真的是将过去的 ',
        tachyon.get_colored_name(),
        ' 全数否定了',
      ]);
      await tachyon.print_and_wait([
        '更何况，',
        t_call_c,
        ' 自己并没有做错任何事',
      ]);
      await tachyon.print_and_wait('只是……一切的发展，都与预料的不同');
      await tachyon.print_and_wait([
        '导致 ',
        tachyon.get_colored_name(),
        ' 只能以一种极为复杂的眼神看着 ',
        t_call_c,
      ]);
      era.println();
      await coffee.say_and_wait('差不多该上场了');
      await tachyon.say_and_wait('……啊啊，加油');
      await coffee.say_and_wait([c_call_t, '……你的声音有点怪怪的']);
      era.println();
      await tachyon.print_and_wait([
        '是因为过于期待吗？',
        tachyon.get_colored_name(),
        ' 的声音变得有些沙哑',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……没什么，昨天跟 ',
        callname,
        ' 出去逛街的时候有点着凉了而已',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '等一下，你们两位，在圣诞节，出去逛街？……比赛之后请详细解释到底是怎么回事',
        );
      } else {
        await coffee.say_and_wait([
          '又跟 ',
          c_call_me,
          ' 乱跑……明明今天是 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          ' 还这样',
        ]);
      }
      era.println();
      await era.printAndWait('后面的话语已经无关紧要了');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 等待着，等待比赛结束谜底揭开的瞬间',
      ]);
    } else {
      await era.printAndWait('那天到来时，一切显得意外的平静');
      await era.printAndWait([
        '在前一天晚上舒服的安眠后，今天格外有精神的 ',
        me.get_colored_name(),
        ' 一早便起床给 ',
        tachyon.get_colored_name(),
        ' 泡好了红茶',
      ]);
      await era.printAndWait('阳光洒在室内，灰尘在光影下舞动');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 没有在做实验，只是平常的阅读着早报',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 也没有发出光芒，只是安静的品味着红茶',
      ]);
      await era.printAndWait('两人在实验室里享受着暴风雨前最后的宁静');
      era.println();
      await say_by_passer_by_and_wait('记者A', [
        '请问速子',
        tachyon.get_adult_sex_title(),
        '，这次的有马纪念有没有特别关注的对手呢',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……嗯，前几天刚出现了，',
        coffee.get_colored_name(),
        '，',
        t_call_c,
        '……应该，是能够被称为劲敌的存在吧',
      ]);
      await say_by_passer_by_and_wait('记者A', '应该……？');
      await tachyon.say_and_wait('嗯，差不多就是这么回事');
      era.println();
      await era.printAndWait([
        '踏上赛场前的时光，',
        me.get_colored_name(),
        ' 忽然想起了前几天采访时 ',
        tachyon.get_colored_name(),
        ' 说的话',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '，你有听过物理学的两大乌云吗？']);
      await tachyon.say_and_wait('没听过？没事没事，只是个故事的引子罢了');
      await tachyon.say_and_wait(
        '据说，开尔文爵士曾经说过，物理学的大厦已经建成，只是在天空中还有两朵小小的乌云',
      );
      await tachyon.say_and_wait(
        '然而，谁也没有想到，这两朵小小的乌云，却引出了量子力学和相对论两大近代物理巨头……',
      );
      await tachyon.say_and_wait([
        '当然，这个故事八成是穿凿附会的，但是……我的意思是，',
        t_call_c,
        ' 就是那朵乌云',
      ]);
      await tachyon.say_and_wait([
        '在我的理论中，',
        t_call_c,
        ' 是最后剩下的那块拼图……但在这之后呢？',
      ]);
      await tachyon.say_and_wait(
        '这朵乌云，能够给我带来相对论一般的冲击吗？让我……见识看看吧',
      );
    }
  };
};
