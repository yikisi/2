const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[36] = async (tachyon, me, callname, flags, relation, love) => {
    await print_event_name('年度研究计划制定', tachyon);
    await era.printAndWait([
      '在出道赛过去了两个月后，',
      me.get_colored_name(),
      ' 忽然被 ',
      tachyon.get_colored_name(),
      ' 叫到了实验室',
    ]);
    await era.printAndWait('原本以为又是像平常一样的实验药剂，却没想到……');
    era.println();
    await tachyon.say_and_wait([
      callname,
      '，我打算参加十二月底的 ',
      race_infos[race_enum.hope_sta].get_colored_name(),
      '，你去安排一下吧',
    ]);
    era.printButton('「欸？希望锦标赛？」', 1);
    await era.input();
    await tachyon.say_and_wait('嗯哼？有什么问题吗？');
    era.println();
    await era.printAndWait([
      '一进门，',
      tachyon.get_colored_name(),
      ' 就以轻描淡写，彷佛在谈论晚餐要吃什么一般的口气和 ',
      me.get_colored_name(),
      ' 说道',
    ]);
    await era.printAndWait([
      '希望锦标赛……那是十二月底的G1中距离赛事，可以说是对新秀级的',
      tachyon.uma_sex_title,
      '而言最重要的赛事之一',
    ]);
    await era.printAndWait(
      '比赛安排的话……毕竟现在还有两个月，报名的话现在正好是时机，因此倒也不会来不及',
    );
    await era.printAndWait([
      '能否赢下……说实话根本没有思考这个问题的必要，世界上最快的速度是光速，而比光速还要快的就是 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait('唯一的问题是，why do it');
    await era.printAndWait([
      '为什么一向对比赛不感兴趣的 ',
      tachyon.get_colored_name(),
      ' 会忽然想要参加某特定比赛？',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 老实的问出了心中的疑惑']);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '没有回答，只是拍了拍桌上的报纸，那是今天的运动新闻，没记错的话……',
    ]);
    await era.printAndWait([
      '今天最大的新闻应该是「',
      get_chara_talk(94).get_colored_name(),
      ' 和 黑船 确定参赛 ',
      race_infos[race_enum.hope_sta].get_colored_name(),
      '」',
    ]);
    era.println();
    await era.printAndWait([
      '原来如此……无论是 ',
      get_chara_talk(94).get_colored_name(),
      ' 还是 黑船 都是这个世代最为人关注的代表之一',
    ]);
    await era.printAndWait([
      '再怎么说，',
      tachyon.get_colored_name(),
      ' 也有与同世代的强者交锋的想法吧……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '当然是为了新药的试验了！没有强敌的比赛怎么能将人逼到极限，连极限都触碰不到那就更不需要药的辅助了',
    );
    era.println();
    await era.printAndWait('啊……反正铁定是这种发展，我就知道……嗯？');
    era.printButton('「等等，比赛用药……违反规则了吧？」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '嗯？你在担心这个啊，',
      callname,
      '，放心，你难道觉得那些三脚猫的药检技术能查到我用的药吗？',
    ]);
    era.println();
    await me.say_and_wait('不是！重点不在这里啊！');

    era.printButton('「这个……会不会……有点违反……运动家精神什么的……？」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 战战兢兢的挑选措辞，尽量不使用那种有可能刺激到对方的名词',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '嗯？',
      callname,
      '？你该不会觉得，我要用的药是兴奋剂一类的东西？我在你心目中原来是这种人吗？',
    ]);
    era.println();
    await era.printAndWait([
      '这算是恶人先告状吗？',
      me.get_colored_name(),
      ' 连忙摇头说不是',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……你放心，这种药不是什么兴奋剂，也不会造成什么加快赛场上的速度之类的效果……',
    );
    await tachyon.say_and_wait(
      '只是，确实是需要有足够强悍的对手才能实验出效果的药而已',
    );
    era.println();
    era.print(['听见', tachyon.sex, '的话，', me.get_colored_name(), '……']);
    era.printButton('相信', 1);
    era.printButton('半信半疑', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '这样啊，',
        me.get_colored_name(),
        ' 听完',
        tachyon.sex,
        '的解释后点了点头，没说什么就准备去帮 ',
        tachyon.get_colored_name(),
        ' 办理参加比赛的手续，这反而引起了 ',
        tachyon.get_colored_name(),
        ' 的迷惑',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '不是不是……',
        callname,
        '，你就这么相信我说的话了吗？',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 点了点头，不理解为什么 ',
        tachyon.get_colored_name(),
        ' 本人反而如此诧异',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '万一我是，万一那真的是……我是说，万一我骗了你呢？',
      );
      era.println();
      await era.printAndWait([
        '如果 ',
        tachyon.get_colored_name(),
        ' 欺骗了自己……',
      ]);
      await era.printAndWait('虽然从未想过这样的问题，但如果，万一的话');

      era.printButton('「就算被骗了也没关系」', 1);
      await era.input();
      await era.printAndWait('从那天开始就已经决定的');
      await era.printAndWait(['相信', tachyon.sex, '的可能及一切']);
      await era.printAndWait([
        '只要能够让',
        tachyon.sex,
        '看见更远的世界，被欺骗又有什么',
      ]);
      era.println();
      await tachyon.say_and_wait('……信任，不，盲信吗？');
      era.println();
      await era.printAndWait('盲信');
      await era.printAndWait('仔细想想确实如此');
      await era.printAndWait([
        '自己是因 ',
        tachyon.get_colored_name(),
        ' 而再也见不到他物的盲人',
      ]);
      await era.printAndWait([
        '因为盲目，所以才渴求光明，渴求最亮的',
        tachyon.sex,
      ]);
      era.println();
      if (relation <= 375) {
        await tachyon.say_and_wait([
          '呵呵呵无妨，既然如此，那就好好跟上我的脚步吧，',
          callname,
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '甩了甩衣袖，继续回到实验中，宣布了此次谈话的结束',
        ]);
        era.println();
        await era.printAndWait('结束前，最后说了一句');
        era.println();
        await tachyon.say_and_wait(
          '作为奖赏，我答应你，你将会在特等席上见证可能性的彼方！',
        );
      } else {
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          '不知为何，',
          tachyon.get_colored_name(),
          ' 似乎有些不满的样子',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '一般情况下，这时候我应该会很高兴，因为这代表你身为豚鼠对我的忠诚度',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '不高兴的戳着 ',
          me.get_colored_name(),
          ' 的胸口',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '但是，我讨厌像这样的盲从，我希望你能成为给予我建议，行走在我身旁的伙伴，而不是不会提出意见的实验动物',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 稍稍反省了下自己的行为，于是作为改变，',
          me.get_colored_name(),
          ' 选择提问',
        ]);
        era.printButton('「那么，这么做的原因是……？」', 1);
        await era.input();
        await tachyon.say_and_wait('…………很抱歉，现在还不能告诉你');
        await tachyon.say_and_wait(
          '总有一天一定，但……不是现在，我可以向你保证，现在就先相信我吧？',
        );

        era.printButton('「不是前面才让我不要盲信？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '这个，那个……不一样，前面是没有理由就相信，现在是相信我有理由但是不能说',
        );
        era.println();
        await era.printAndWait([
          '虽然 ',
          me.get_colored_name(),
          ' 心中还是很疑惑这两者有什么差别，但 ',
          me.get_colored_name(),
          ' 明智的选择不去争吵',
        ]);
        era.println();
        await era.printAndWait([
          '总之，',
          me.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 的下个目标就决定为 ',
          race_infos[race_enum.hope_sta].get_colored_name(),
          ' 了',
        ]);
        await era.printAndWait([
          '如果没有意外的话，让',
          tachyon.sex,
          '参加应该不会造成什么问题吧……',
        ]);
      }
    } else {
      era.println();
      await me.say_and_wait('真的吗？', true);
      await era.printAndWait([
        me.get_colored_name(),
        ' 心里总还是有些怀疑，不过……',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 耸了耸肩，开始准备帮 ',
        tachyon.get_colored_name(),
        ' 办理参赛的申请数据',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '？虽然我自己这么讲有些奇怪，但你都没有一点怀疑吗？就这么相信了吗？',
      ]);
      era.printButton('「不信，但我相信即便不用药速子也能赢」', 1);
      await era.input();
      await era.printAndWait([
        '虽然对 ',
        tachyon.get_colored_name(),
        ' 的行为毫无头绪，也不知道药的作用',
      ]);
      await era.printAndWait([
        '说到底，',
        me.get_colored_name(),
        ' 也不觉得 ',
        tachyon.get_colored_name(),
        ' 是和',
        tachyon.sex,
        '说声「规矩不行」',
        tachyon.sex,
        '就会乖乖住手的人',
      ]);
      await era.printAndWait('但只有这点，是无需任何怀疑的');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，不需要药物这种外力，也绝对能够胜利',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '没有使用兴奋剂的必要，',
        me.get_colored_name(),
        ' 只是相信着这点',
      ]);
      if (relation <= 0) {
        era.println();
        await tachyon.say_and_wait('……平常你要也能说的这么好听就好了');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 冷淡的说道，但看',
          tachyon.sex,
          '尾巴摇晃的模样似乎挺受用的',
        ]);
      } else if (love >= 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……你这话，说的好像你一点也不相信我一样',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 有些不满的鼓起了嘴，头用力的转向一旁',
        ]);
        era.println();
        await era.printAndWait('不管相信还是不信都不行吗……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 忍不住扶额，像哄小孩一样告诉 ',
          tachyon.get_colored_name(),
          ' 自己有多信任多爱',
          tachyon.sex,
          '，好不容易才使',
          tachyon.sex,
          '不再闹脾气',
        ]);
      } else {
        era.println();
        await tachyon.say_and_wait(
          '这就是你的回答吗？不信任我但是信任我的才能？不错！这才是研究者应有的态度啊！',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '彷佛十分满意自己的回答一般，「嗯嗯」的点着头',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '那么，就尽管相信我的胜利吧，追随在我身后，我就会让你看见你所希望的光辉',
        );
        era.println();
        await era.printAndWait([
          '于是，',
          me.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 的下个目标就决定为 ',
          race_infos[race_enum.hope_sta].get_colored_name(),
          ' 了',
        ]);
        await era.printAndWait(
          '只是……虽然用听上去很帅气的话作为总结了，但这样参赛真的没问题吗？或许还需要好好思量一下',
        );
        return;
      }
      era.println();
      await era.printAndWait([
        '于是，',
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的下个目标就决定为 ',
        race_infos[race_enum.hope_sta].get_colored_name(),
        ' 了',
      ]);
      await era.printAndWait([
        '只是……虽然这么说，但让这样的',
        tachyon.sex,
        '上场真的没问题吗？或许还是需要好好烦恼一下',
      ]);
    }
  };

  handlers[47 + 1] = async (tachyon, me, callname, flags, relation) => {
    await print_event_name('年度审核', tachyon);
    await tachyon.say_and_wait(['哦呀，', callname, '，你在………春联？']);
    era.println();
    await era.printAndWait([
      '门都不敲就闯入训练员室的 ',
      tachyon.get_colored_name(),
      ' 在看到 ',
      me.get_colored_name(),
      ' 手上的动作后发出了疑问，',
      me.get_colored_name(),
      ' 点了点头',
    ]);
    era.println();
    await era.printAndWait([
      '今天是春节，而 ',
      me.get_colored_name(),
      ' 在做的，便是将新一年的期许写下',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '三冠……我说啊，',
      callname,
      '，虽然我大概没什么资格讲，但你可真是执着啊，三冠对你来说是有什么特殊的含义在吗？',
    ]);
    era.println();
    await me.say_and_wait('含义……倒也没有，但如果要说的话');
    era.printButton('「因为速子答应了参赛……而我不觉得速子会败北」', 1);
    await era.input();
    const hope_sta_check = check_aim_race(
      RaceHistory.get(32).get(),
      race_enum.hope_sta,
      0,
      1,
    );
    if (hope_sta_check) {
      if (relation > 0) {
        await tachyon.say_and_wait('哼哼，不错，天才的我确实是无败的');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 一脸得意的说道']);
      } else {
        await tachyon.say_and_wait(
          '赢还是输，这种跟实验没有一点关系的东西真亏你能如此热衷啊',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 冷漠的说道']);
      }
    } else {
      await tachyon.say_and_wait([
        '…………',
        callname,
        '，你是忘记我已经败北过了吗？',
      ]);
      era.println();
      await era.printAndWait('……啊，这么说来好像确实有这么回事……');
      era.printButton('「但是，速子还是最强的！」', 1);
      await era.input();
      await tachyon.say_and_wait('…………天真成这样，我都不知道该怎么说了');
      await era.printAndWait([tachyon.get_colored_name(), ' 忍不住扶额']);
    }
    await tachyon.say_and_wait('既然如此，那么梦不放远一点吗？');
    era.println();
    await era.printAndWait('远一点……？');
    await era.printAndWait([
      me.get_colored_name(),
      ' 一时不能明白 ',
      tachyon.get_colored_name(),
      ' 的意思',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '把梦想放在优先啊，',
      callname,
      '，你的梦想，我的梦想，将更远大的梦想写上吧！',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的双眼放光，眼中充满热情',
    ]);
    era.println();
    await era.printAndWait([
      '更远大的梦想……',
      me.get_colored_name(),
      ' 沉思了一会，又抽出一张春联纸，在上面写上……',
    ]);
    era.printButton('无败（全属性+5）', 1, { disabled: !hope_sta_check });
    era.printButton('无限（技能点数+20）', 2);
    era.printButton('无伤（耐力+20）', 3);
    switch (await era.input()) {
      case 1:
        await era.printAndWait(
          '无败，要超越光速的粒子，是不可能败于区区凡人的',
        );
        era.println();
        await tachyon.say_and_wait(
          '哦？意思是年间无败吗？呵呵，不错，是个可以期待的目标',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '饶有兴致的看着 ',
          me.get_colored_name(),
          ' 的目标，却又泼下了一桶冷水',
        ]);
        era.println();
        await tachyon.say_and_wait('不过……参赛与否，也要看我的兴趣就是了');
        era.println();
        await era.printAndWait([
          '毕竟不参赛也是一种无败啊，',
          tachyon.get_colored_name(),
          ' 哈哈大笑，说了个在 ',
          me.get_colored_name(),
          ' 听起来一点也不好笑的笑话',
        ]);
        await era.printAndWait([
          '这种事……感觉 ',
          tachyon.get_colored_name(),
          ' 真有可能做得出来啊……',
        ]);
        await era.printAndWait([
          '大年初一 ',
          me.get_colored_name(),
          ' 的胃就开始因负责',
          tachyon.uma_sex_title,
          '而生疼了，看来今年也一定不会是轻松的一年吧',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          32,
          new Array(5).fill(5),
          0,
        );
        break;
      case 2:
        await era.printAndWait([
          '无限，如果是梦想的话……那么，没有什么是比 ',
          tachyon.get_colored_name(),
          ' 的梦想更适合作为目标的了',
        ]);
        await era.printAndWait('超越极限，再无限制，所以无限');
        era.println();
        if (relation <= 0) {
          await tachyon.say_and_wait(
            '……呵呵，你这种人还会想这些？用来拐小女孩的话术就收一收吧，你只是辅助我的工具而已，认清自己的身份',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 无情的奚落了 ',
            me.get_colored_name(),
            ' 一番',
          ]);
          await era.printAndWait([
            '……虽然确实自己的表现无法让人相信吧，但 ',
            me.get_colored_name(),
            ' 确实是如此想的啊',
          ]);
          era.println();
          await era.printAndWait([
            '在苦笑中，',
            me.get_colored_name(),
            ' 预料到了今年八成也不会是个轻松的一年',
          ]);
        } else if (relation <= 225) {
          await tachyon.say_and_wait(
            '哦？无限的可能性吗？不错，确实是很适合我们的选项，新的一年就朝着这个目标前进吧',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 看上去很满意的模样，太好了！',
          ]);
          era.println();
          await tachyon.say_and_wait('所以，为了达到可能性，今天的药……');
          era.println();
          await era.printAndWait('忽然的图穷匕现！？');
          await era.printAndWait([
            '刚说完那样的豪情壮志导致无法拒绝的 ',
            me.get_colored_name(),
            ' 硬吞下了药剂',
          ]);
          await era.printAndWait([
            '在头顶顶着的光环之下，',
            me.get_colored_name(),
            ' 预感今年必定也会是不轻松的一年',
          ]);
        } else {
          await tachyon.say_and_wait([
            '哼哼！当然了，',
            callname,
            '，你当然会做出这样的选择吧！',
          ]);
          await tachyon.say_and_wait(
            '我们的梦想，我们一起追寻的可能性，为了更广阔的未来，突破极限，达致无限！',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 狂热的看着 ',
            me.get_colored_name(),
            '，眼中绽放着将 ',
            me.get_colored_name(),
            ' 吸引的疯狂目光',
          ]);
          await era.printAndWait('没错，为了我们的梦想……');
          era.println();
          await tachyon.say_and_wait('所以，今天的年节菜也麻烦你了');
          era.println();
          await era.printAndWait(
            '等等，年节菜也要自己做什么的，从来没听说过啊！？',
          );
          await era.printAndWait([
            '在',
            tachyon.sex,
            '的期待目光下，',
            me.get_colored_name(),
            ' 还是认命的拿起了锅铲',
          ]);
          await era.printAndWait('看来今年又会是个不轻松的一年啊……');
        }
        flags.wait_flag = get_attr_and_print_in_event(32, undefined, 20);
        break;
      case 3:
        await era.printAndWait(
          '无伤，比赛什么都无所谓，可能性什么的也只要尽力追取，最重要的是无病无伤，为了更长远的未来',
        );
        era.println();
        if (relation <= 225) {
          await tachyon.say_and_wait('…………');

          era.printButton('「速子？」', 1);
          await era.input();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 不知为何忽然陷入了沉默，',
            me.get_colored_name(),
            ' 疑惑的开口询问',
          ]);
          era.println();
          await tachyon.say_and_wait('……无聊的答案');
          await tachyon.say_and_wait([
            '无伤怎么创造历史，没有牺牲又怎么会有创造，无伤……我没想到，',
            callname,
            ' 你的答案竟然会如此无聊',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 不知道为什么忽然心情十分不悦，自己难道说错什么话了吗？',
          ]);
          era.println();
          await tachyon.say_and_wait('无伤……要是可以……要是……');
          era.println();
          await era.printAndWait([
            '但 ',
            me.get_colored_name(),
            ' 随即发现，',
            tachyon.sex,
            '的愤怒似乎并非是针对 ',
            me.get_colored_name(),
            '，而是针对某种……不知道，说到底 ',
            me.get_colored_name(),
            ' 连',
            tachyon.sex,
            '生气的原因都搞不清楚不是吗',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '……随便你吧，这种无聊的愿望，这种无聊的……',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '气愤的离开了训练员室，留下依然一脸蒙逼的 ',
            me.get_colored_name(),
          ]);
        } else {
          await tachyon.say_and_wait('…………嗯，也是啊');
          era.printButton('「速子？」', 1);
          await era.input();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 的情绪似乎有些奇怪，',
            me.get_colored_name(),
            ' 不禁疑惑的问道',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '啊，没什么，是啊，毕竟以训练员的身分而言，',
            tachyon.uma_sex_title,
            '的健康才是第一优先的吧，不过……稍微有些无聊了',
          ]);
          era.println();
          await era.printAndWait([
            '无聊吗……以 ',
            tachyon.get_colored_name(),
            ' 追求可能性的想法而言，或许确实会如此觉得吧，但对自己而言，最重要的还是 ',
            tachyon.get_colored_name(),
            ' 的健康',
          ]);
          await era.printAndWait([
            '不知为何，',
            tachyon.get_colored_name(),
            ' 的模样看起来有些悲伤，虽然强装镇静，但总觉得有种无奈的悲哀感，难道自己不该这么说的吗……',
          ]);
          await era.printAndWait('难道自己不该这么说的吗……');
          era.println();
          await tachyon.say_and_wait(
            '…………没什么，呵呵，这样的话，为了你的愿望，我今天就回去好好休息吧……',
          );
          await tachyon.say_and_wait('无伤……啊……');
          era.println();
          await era.printAndWait([
            '这样的提议倒是与 ',
            me.get_colored_name(),
            ' 的心意相符，只是 ',
            tachyon.get_colored_name(),
            ' 究竟是怎么了？',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 目送着',
            tachyon.sex,
            '离去，脑海中依旧百思不得其解',
          ]);
        }
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 20, 0, 0, 0], 0);
        flags.wait_flag = sys_change_motivation(32, -1) || flags.wait_flag;
    }
    era.set('cflag:32:节日事件标记', 0);
  };

  handlers[47 + 5] = async (tachyon, me, callname, flags, relation) => {
    await print_event_name('中期报告提交', tachyon);
    await era.printAndWait(
      '虽然新年已经过去，但二月的特雷森学园仍然被笼罩于寒冬之中',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 望着训练场，口中不住吐出叹息的白气',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.uma_sex_title + 'A',
      '那个人今天也站在这里啊',
    );
    await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
      '嘘……小声点，听说',
      me.sex,
      '其实是某人的训练员来着',
    ]);
    await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
      '欸……真的假的，',
      me.sex,
      '已经站了三天了吧，也没看到过',
      me.sex,
      '的负责',
      tachyon.uma_sex_title,
      '啊',
    ]);
    await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
      '谁知道呢……听说其他年级有个存在感低到会完全被人忽视的',
      tachyon.uma_sex_title,
      '，说不定',
      me.sex,
      '负责的就是',
      tachyon.sex,
      '吧',
    ]);
    era.println();
    await era.printAndWait([
      '啊哈哈……被当成毫无存在的',
      tachyon.uma_sex_title,
      '了哦，',
      tachyon.get_colored_name(),
      ' ',
      tachyon.adult_sex_title,
      '？',
    ]);
    await era.printAndWait([
      '不过，要是自己上去主动说自己的负责',
      tachyon.uma_sex_title,
      '是 ',
      tachyon.get_colored_name(),
      ' 的话，也一定不会有人相信的吧',
    ]);
    await era.printAndWait([
      '说来十分令人悲哀，但有谁会相信这样一个没有在发光的普通人会是 ',
      tachyon.get_colored_name(),
      ' 的训练员呢',
    ]);
    await era.printAndWait([
      '毕竟这几天由于完全没喝 ',
      tachyon.get_colored_name(),
      ' 的药导致自己已经好几天没发光过了',
    ]);
    era.println();
    await era.printAndWait([
      '今天已经是 ',
      tachyon.get_colored_name(),
      ' 没有来训练的第三天了',
    ]);
    await era.printAndWait([
      '岂止如此，甚至 ',
      me.get_colored_name(),
      ' 已经三天没有见到过自己的负责',
      tachyon.uma_sex_title,
      '了',
    ]);
    await era.printAndWait([
      '连试药都没有的三天，',
      me.get_colored_name(),
      ' 就这么一直待在训练场上等待着理应在训练时间来到这里却不在的那个人',
    ]);
    era.println();
    await me.say_and_wait('看来今天也不会来了吧……', true);
    await era.printAndWait(['就在 ', me.get_colored_name(), ' 如此想着的时候']);
    if (relation <= 225) {
      await tachyon.say_and_wait([
        '哦呀，',
        callname,
        '？你怎么在这？我找你找好久',
      ]);
      await me.say_and_wait('……');
      await era.printAndWait([
        '对于一边说着理所当然的话语一边悠哉出现的 ',
        tachyon.get_colored_name(),
        '，现在的 ',
        me.get_colored_name(),
        ' 已经连脾气都不剩了',
      ]);
      await era.printAndWait('总之，来到训练场……算了，反正一定又是药……');
      era.println();
      await tachyon.say_and_wait('总之，快来帮我测时吧');
    } else {
      await tachyon.say_and_wait([
        callname,
        '！你这几天都跑哪里去了！我都好久没吃便当了！！！',
      ]);
      await era.printAndWait([
        '怎么还能恶人先告状的，这不是因为这几天',
        tachyon.sex,
        '自己把实验室门锁上了吗',
      ]);
      await tachyon.say_and_wait(
        '算了，重点不在这，总之快点帮我测一下，新的实验数据',
      );
    }
    era.println();
    await era.printAndWait('嗯？等一下，难道，莫非');
    await era.printAndWait([
      '对眼前发生的事有些不敢置信的 ',
      me.get_colored_name(),
      ' 愣愣的按下了计时器，愣愣的看着 ',
      tachyon.get_colored_name(),
      ' 跑了一圈回来，再愣愣的按下计时停止',
    ]);
    era.println();
    await tachyon.say_and_wait('时间？');
    era.printButton('「比……比原纪录快了三秒」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 不由得感到兴奋，几天没来训练？那种俗事早被 ',
      me.get_colored_name(),
      ' 抛到了一旁，拥有这样的速度的',
      tachyon.sex,
      '，绝对，一定……',
    ]);
    era.println();
    await era.printAndWait([
      '很好，',
      tachyon.get_colored_name(),
      ' 满意的拍了拍手',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '，那么告诉你一个好消息吧']);
    await tachyon.say_and_wait([
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '，我决定要出赛了',
    ]);
    era.println();
    await era.printAndWait([race_infos[race_enum.hoch_sho].get_colored_name()]);
    era.println();
    await era.printAndWait([
      '那是 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 的前哨战，大部分有志于 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 的',
      tachyon.uma_sex_title,
      '都会以 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      ' 或者 ',
      race_infos[race_enum.hope_sta].get_colored_name(),
      ' 先为目标，以此获得人气后再挑战',
      race_infos[race_enum.sats_sho].get_colored_name(),
    ]);
    await era.printAndWait([
      '不过……',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      ' 再怎么说也还是G2比赛，不缺乏人气的 ',
      tachyon.get_colored_name(),
      ' 会对这场比赛感兴趣的原因究竟是……？',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……有些东西，必须要在 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 以前确认才行',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '的口气让 ',
      me.get_colored_name(),
      ' 稍稍感到了一些不安',
    ]);
    await era.printAndWait('不过');
    era.printButton('「速子的话，一定没问题的」', 1);
    await era.input();
    await tachyon.say_and_wait('呵，难道你觉得我会连G2都拿不下吗？');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 只能苦笑解释自己不是那个意思',
    ]);
    await era.printAndWait(['总之，目标姑且确定为弥生赏了']);
    flags.wait_flag = get_attr_and_print_in_event(32, [10, 0, 0, 0, 0], 0);
  };
};
