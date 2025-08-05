const era = require('#/era-electron');

const {
  japa_cup_common,
  takz_kin_common,
} = require('#/event/edu/edu-events-67-1/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const { race_enum, race_infos } = require('#/data/race/race-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,number,{race:number,rank:number},DaiyaEduMarks):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.sank_hai] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('共鸣', daiya);
    const kita = get_chara_talk(68);
    const mcqueen = get_chara_talk(13);
    const teio = get_chara_talk(3);
    if (extra_flag.rank === 1) {
      await say_by_passer_by_and_wait(
        '实况',
        '钻石的光芒没有一丝的阴影！成功称霸『大阪杯』的是里见光钻！',
      );
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
      await say_by_passer_by_and_wait(
        '观众C',
        '真的是完全没有破绽啊，里见光钻！今天的跑姿依然非常亮眼。',
      );
      await say_by_passer_by_and_wait(
        '观众B',
        `${daiya.sex}的实力就像是去年崛起的北部玄驹一样……不对，甚至可以说是超越了……」`,
      );
      await say_by_passer_by_and_wait(
        '观众A',
        '北部玄驹也不是会就这样没落的角色。里见对北部，今后还很有看头呢……！',
      );
    } else {
      await say_by_passer_by_and_wait(
        '实况',
        `北部玄驹不给人靠近的机会！${daiya.sex}为去年雪耻了，今天又是一场北部祭典！」`,
      );
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
      await say_by_passer_by_and_wait(
        '观众B',
        '哎呀，真是了不起的风范啊！看来你又变得更强了呢，北部玄驹！！',
      );
      await say_by_passer_by_and_wait(
        '观众A',
        `年度代表赛${daiya.get_uma_sex_title()}的实力今年也丝毫不减呢！`,
      );
      await say_by_passer_by_and_wait(
        '观众C',
        '里见光钻也感觉很有前途喔。绝不会就这样一直输下去的吧。北部对里见的对决，今后也不能错过！',
      );
    }
    await teio.say_and_wait('嗯嗯，小北跟小钻都长大了呢！');
    await mcqueen.say_and_wait(
      '你这是用什么身份的角度在说的啊……不过，我也是这么想的。',
    );
    await teio.say_and_wait(
      `看着${daiya.sex}们比赛的样子，让我忍不住想起我跟你对决的时候。`,
    );
    await mcqueen.say_and_wait([
      '你是在说 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 吧。',
    ]);
    await mcqueen.say_and_wait(`说不定……${daiya.sex}们的下一场比赛也会是呢。`);
    await teio.say_and_wait('说不定喔～是说，麦昆。');
    await teio.say_and_wait('我现在觉得超～～～～想要跑步的！');
    await mcqueen.say_and_wait('哎呀，还真巧呢。我也是这么想的。');
    await teio.say_and_wait('那我们一起跑到车站吧！');
    await mcqueen.say_and_wait('好啊，就这么做吧。');
    era.drawLine();
    if (extra_flag.rank === 1) {
      await kita.say_and_wait(
        '唔啊啊啊啊啊，好不甘心！！我的目标是要称霸资深级正统路线耶！',
      );
      await kita.say_and_wait('居然第一场就失败了，可恶──！！');
      await daiya.say_and_wait('小、小北……！');
      await kita.say_and_wait(
        '我完全甩不开小钻！我明明一直都是做非常严苛的训练耶。',
      );
      await kita.say_and_wait(
        '但是小钻还是追上来了！不对，不如说会被超越什么的，是因为我最后太掉以轻心了！',
      );
      await kita.say_and_wait('可恶可恶可恶！真不愧是小钻耶！');
      await daiya.say_and_wait(
        '嘿嘿嘿！我为了不被小北给甩开，真的非常拼命呢！',
      );
      await kita.say_and_wait(
        '可以跟小钻认真对决，我真的好开心！我还想要一起跑更多比赛！',
      );
      await kita.say_and_wait([
        '我想要跑赢认真的小钻！所以……我希望你能参加 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '！',
      ]);
    } else {
      await kita.say_and_wait(
        '好耶────！！我拿下大阪杯了──！完成第一个目标！！',
      );
      await daiya.say_and_wait('唔……！');
      await daiya.say_and_wait(
        '果然，小北已经比之前在『有马纪念』的时候，又变得更强了……！',
        true,
      );
      await daiya.say_and_wait('本以为跑步的实力已经追上小北了……', true);
      await daiya.say_and_wait('但小北又进步得更多了！', true);
      await daiya.say_and_wait('……本来以为自己有办法追上的。又被甩开了……');
      await kita.say_and_wait('我为了不输给小钻，可是非常拼命地努力了呢！');
      await kita.say_and_wait('就是自从在『有马纪念』体验到小钻的实力之后。');
      await daiya.say_and_wait(
        '我本来也以为自己够努力了，看来是还完全不够呀……',
      );
      await daiya.say_and_wait(
        '不过！我也还能更加努力！所以下次一定会是我赢的！！',
      );
      await kita.say_and_wait(
        '嗯，我们还要再比喔，小钻！我也还想跟小钻一起跑更多比赛！',
      );
      await kita.say_and_wait('想要赢过小钻的这个想法能够让我变得更强！');
      await kita.say_and_wait([
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '！！我希望小钻也可以参加！',
      ]);
    }
    await daiya.say_and_wait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '……那是关系到小北能不能连霸的比赛吧。',
    ]);
    await kita.say_and_wait(
      '嗯！G1最长距离的3200米竞赛，我想跟小钻一起跑跑看！',
    );
    await kita.say_and_wait('你再跟训练员一起讨论，考虑看看吧。');
    await kita.say_and_wait('我会在京都等你的！！');
    era.drawLine();
    await daiya.say_and_wait('……训练员，关于下一场比赛……');
    era.printButton('「你想参加的是『天皇赏（春）』对吧？」', 1);
    await era.input();
    await daiya.say_and_wait('是的！不过……你怎么知道？');
    await era.printAndWait(
      `里见光钻曾说过，${
        daiya.sex
      }要追着北部玄驹的背影，找到身为「知名赛${daiya.get_uma_sex_title()}』该有姿态的答案。`,
    );
    await era.printAndWait(
      `因此，${me.name} 预设${daiya.sex}会想跟北部玄驹参加同一场比赛。`,
    );
    await era.printAndWait([
      `加上以里见光钻的个性来说，${daiya.sex}甚至会特意选择对北部玄驹较为有利且准备挑战连霸的 `,
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 来对决。',
    ]);
    await daiya.say_and_wait(
      '全都被你看穿了呢……嗯，这么看来，以后我自己做决定应该也没问题了。',
    );
    era.printButton('「不行，还是要跟我商量一下吧！？」', 1);
    await era.input();
    await daiya.say_and_wait('呵呵呵，我开玩笑的♪');
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait([
        '那下一场比赛就确定是 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        ' 了。我要为里见家争夺那面历史悠久且充满荣誉的盾形奖牌。',
      ]);
    } else {
      await daiya.say_and_wait(
        `我因为实力还不足以成为『知名赛${daiya.get_uma_sex_title()}』，今天才会落败。`,
      );
      await daiya.say_and_wait([
        '所以我下次一定要在 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        ' 赢过小北……！！',
      ]);
      await daiya.say_and_wait(
        '然后，我要为里见家争夺那面历史悠久且充满荣誉的盾形奖牌。',
      );
    }
  };

  handlers[race_enum.tenn_spr] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('二强', daiya);
    const kita = get_chara_talk(68);
    const mcqueen = get_chara_talk(13);
    const teio = get_chara_talk(3);
    await era.printAndWait(
      '实况「经过第二个坡道后，现在进入第三弯道了！很艰辛，但接下来才是胜负关键！」',
    );
    await daiya.say_and_wait('呼、呼、呼、呼！');
    await kita.say_and_wait('呼、呼、呼、呼────！');
    await era.printAndWait('观众A「光钻加油啊────！」');
    await era.printAndWait('观众B「北部冲啊────！！」');
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        '实况「北部玄驹、里见光钻！二强对决的赢家是……里见光钻──！」',
      );
    } else {
      await era.printAndWait(
        '实况「北部玄驹、里见光钻！二强对决的赢家是……北部玄驹──！北部玄驹达成连霸────！！」',
      );
    }
    await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊啊啊啊！');
    await say_by_passer_by_and_wait('观众A', '……好厉害……真是惊人的表现……');
    await say_by_passer_by_and_wait(
      '观众C',
      '天啊，起鸡皮疙瘩了……！背脊都发麻了……！',
    );
    await say_by_passer_by_and_wait(
      '穿着帽T的男性',
      '呜呜……两个人都……！都表现得很好……！！',
    );
    await teio.say_and_wait(`哈……啊哈哈！${daiya.sex}们两个都很厉害嘛！`);
    await teio.say_and_wait('……欸，麦昆。');
    await mcqueen.say_and_wait('嗯，我们走吧。');
    if (extra_flag.rank === 1) {
      await kita.say_and_wait('呼、呼……嘿嘿嘿，感觉心跳还是很快呢……');
      await daiya.say_and_wait('我也是……呼、呼……');
      await kita.say_and_wait(
        '……嗯，如果拿出全力还是跑输，那也只能认输了！今天是我彻底输了！',
      );
      await kita.say_and_wait('恭喜你，小钻！');
      await daiya.say_and_wait(
        '我能跑赢也都是因为小北的关系！因为有小北在前面激出我的潜能，我才有办法超越自己的极限。',
      );
    } else {
      await daiya.say_and_wait('呼、呼……脚都在发抖了……');
      await kita.say_and_wait(
        '呼、呼……嘿嘿嘿，我也是……！真的觉得超────级累的──！！',
      );
      await daiya.say_and_wait('……真不甘心……我明明都已经用尽全力了……');
      await daiya.say_and_wait(
        '明明已经努力到超越自己的极限了……却还是赢不了……',
      );
      await kita.say_and_wait('小钻……');
      await daiya.say_and_wait('是我彻底输了……恭喜你达成连霸，小北。');
      await kita.say_and_wait('……谢谢你，小钻。');
      await daiya.say_and_wait(
        '嘿嘿嘿，不过呀……因为有小北在前面激出我的潜能，今天我才有办法超越自己的极限……',
      );
    }
    await daiya.say_and_wait('只要跟小北一起跑，就觉得能够更加进步！');
    await kita.say_and_wait('这点我也认同！我们就这样一起迎向顶点吧！');
    await teio.say_and_wait('呵呵呵，顶点啊～！竟然讲得这么轻松！');
    await teio.say_and_wait('你知道到了顶点要面对的对手是谁吗？小北！');
    await kita.say_and_wait('呃，帝王！？');
    await daiya.say_and_wait('麦昆也来了！');
    await teio.say_and_wait(
      '你说的顶点可是吾之领域呢！想要站上我的地盘，就要先战胜帝王大人我～！',
    );
    await mcqueen.say_and_wait('帝王，你捉弄得太过头了。');
    await daiya.say_and_wait('呃……？');
    await teio.say_and_wait('我向你们宣战！！我跟麦昆会参加秋季的竞赛！');
    await teio.say_and_wait('你们想要到达顶点对吧！那就来挑战我们看看！');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      '「咦咦咦咦咦～～！？」',
    ]);
    await daiya.say_and_wait(
      '你、你们真的会参赛吗！？原本都没听说……怎么会这么突然……？',
    );
    await mcqueen.say_and_wait('是啊，原本的计划中是没有打算要参赛的。');
    await mcqueen.say_and_wait(
      '但我们在看了里见和北部的比赛后，就改变主意了。',
    );
    await mcqueen.say_and_wait('我们想和你们跑一战看看。');
    await mcqueen.say_and_wait('是你们两位的表现激起了我们的斗志。');
    await daiya.say_and_wait('……！');
    await mcqueen.say_and_wait('──如何呢？你们愿意接受我们的挑战吗？');
    await daiya.say_and_wait('唔！这是我的荣幸！！请务必一定要给我这个机会！');
    await kita.say_and_wait('我也是！麻烦多多指教了！！');
    await teio.say_and_wait('就该是这样没错！');
    await teio.say_and_wait('我会参加『日本杯』！');
    await mcqueen.say_and_wait('那我就在『天皇赏（秋）』等你们来了。');

    await teio.say_and_wait('真期待啊～！好久没有跑闪耀系列赛了！');
    await mcqueen.say_and_wait('那么我先告辞了。');
    await kita.say_and_wait('小钻……！我不是在做梦吧……？');
    await daiya.say_and_wait(
      '嗯！不过……也有可能是我们两个人同时都在做梦也不一定……',
    );
    era.printButton('「我也全程听见了，这不是在做梦哟」', 1);
    await era.input();
    await kita.say_and_wait(
      '唔哇啊啊啊！！原来真的不是梦啊！我可以跟帝王一起比赛了！！',
    );
    await daiya.say_and_wait('我可以跟麦昆一起在闪耀系列赛的舞台上……！');
    await daiya.say_and_wait('好开心……没想到竟然会有这一天……');
    await era.printAndWait('里见光钻感动得湿了眼眶。北部玄驹也一样。');
    await era.printAndWait(
      `毕竟${daiya.sex}们各自都是因为崇拜目白麦昆和东海帝王才进入特雷森学园的，反应会这么大也是理所当然的。`,
    );
    await kita.say_and_wait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 我都要参加！',
    ]);
    await kita.say_and_wait(
      '毕竟本来就都是『秋季资深三冠』的目标赛事。小钻呢？',
    );
    await daiya.say_and_wait([
      '我想要参加 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '！我想要挑战麦昆！！',
    ]);
    era.printButton('「『天皇赏（秋）』啊……」', 1);
    await era.input();
    await era.printAndWait(
      `这样一来就会先经过夏季集训。考量到${daiya.sex}本身原本就不擅长在酷暑中训练的状况……`,
    );
    await era.printAndWait(
      `夏天一过就要直接正面对决让 ${me.name} 不放心。还是在『天皇赏（秋）』之前，先让${daiya.sex}参加别的竞赛确认状态比较好。`,
    );
    era.printButton('「在那之前先参加『京都大赏典』吧」', 1);
    await era.input();
    await daiya.say_and_wait([
      '意思是要透过 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      ' 来观察状况，视情况调整到最佳状态吧。这点我没有意见。',
    ]);
    await kita.say_and_wait([
      '我的话，会先参加靠粉丝投票获得参赛资格的 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，然后再参加 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '！',
    ]);
    await kita.say_and_wait([
      '为了能赢过麦昆，我们一定要为了 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 好好努力！',
    ]);
    await daiya.say_and_wait('呼…………我到现在都还觉得像是在做梦……');
    era.printButton('「之后会慢慢越来越有真实感的」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是呀……所以我也不能只顾着高兴了。难得有可以跟麦昆一起比赛的机会嘛。',
    );
    await daiya.say_and_wait(
      `麦昆跟帝王都已经是以『知名赛${daiya.get_uma_sex_title()}』的身份在各处活跃的人了。`,
    );
    await daiya.say_and_wait(
      `我打算从${
        teio.sex
      }们两位身上学习『知名赛${daiya.get_uma_sex_title()}』该有的姿态。`,
    );
    await daiya.say_and_wait(
      `尤其是麦昆，${mcqueen.sex}背负着目白家的责任，感觉处境和我很接近。`,
    );
    await daiya.say_and_wait(
      `我身为里见家的代表，该成为什么样的『知名赛${daiya.get_uma_sex_title()}』呢──`,
    );
    era.printButton('「你可以随时跟我分享烦恼」', 1);
    await era.input();
    await era.printAndWait(
      `『成为能够赢得G1竞赛的知名赛${daiya.get_uma_sex_title()}』，${
        me.name
      } 答应过要和${daiya.sex}一起完成这个梦想。`,
    );
    await era.printAndWait(
      `身为${daiya.sex}的训练员，只要是对${daiya.sex}将来有帮助的事情，${me.name} 都愿意竭尽所能地去协助${daiya.sex}。`,
    );
    await daiya.say_and_wait('嘿嘿嘿，到时候就要靠你帮忙了♪');
    await daiya.say_and_wait('……要是我能赢过麦昆──');
    await era.printAndWait(
      `赢过『知名赛${daiya.get_uma_sex_title()}』目白麦昆，实质上来说等同于实力达到『知名赛${daiya.get_uma_sex_title()}』的水准。`,
    );
    await era.printAndWait(
      `要完成里见家的宿愿也是指日可待──${me.name} 揣摩着她欲言又止的话，更重新意识到自己身负重任。`,
    );
    await era.printAndWait([
      '首先是 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      '。绝不能在前哨战失手。',
    ]);
  };

  handlers[race_enum.takz_kin] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('阴影', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait('……小北……');
    await kita.say_and_wait('………………唔。');
    await era.printAndWait(
      '观众A「喂，北部这是怎么了啊……今天的状态很不好吗……？」',
    );
    await era.printAndWait(
      '观众B「最后的时候，没有像平常一样坚持住呢。北部的表现应该要更好才对……」',
    );
    await era.printAndWait(
      '观众C「垂头丧气可不像你的作风喔！平常的气势跑去哪了，北部！！」',
    );
    await takz_kin_common(daiya, me, kita, true);
  };

  handlers[race_enum.kyot_dai] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('结果', daiya);
    const mcqueen = get_chara_talk(13);
    await say_by_passer_by_and_wait('实况', '里见光钻领先冲过终点！');
    await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
    await say_by_passer_by_and_wait(
      '观众C',
      `什么嘛，${daiya.sex}状态根本没有不好啊！」`,
    );
    await say_by_passer_by_and_wait(
      '观众A',
      `${daiya.sex}真的表现得很好呢！！光钻跑步的时候，就是非常专注地看着前面加速的样子……」`,
    );
    await say_by_passer_by_and_wait(
      '观众A',
      '不受任何事情影响跟干扰的姿态。我真的好喜欢喔……」',
    );
    await mcqueen.say_and_wait('……呵呵，这是理所当然的结果。');
    await mcqueen.say_and_wait('要是在这里就失败的话，要怎么成为我的对手呢。');
    await daiya.say_and_wait('……嗯！');
    await daiya.say_and_wait('这就是我的跑法……！');
    await daiya.say_and_wait('训练员，我终于能够很自在地奔跑了！');
    era.printButton('「看起来的确是这样呢！」', 1);
    await era.input();
    await daiya.say_and_wait(
      '连训练员都觉得没有问题的话，那就真的可以放心了呢！',
    );
    era.printButton('「你的脚步变得很有力道喔」', 1);
    await era.input();
    await era.printAndWait(
      `虽然还称不上非常强力，但 ${me.name} 将自己从步伐中感觉到力道及安定感的事实告诉${daiya.sex}。`,
    );
    await daiya.say_and_wait('真的吗……？我完全就只是很自然地跑而已呢……');
    era.printButton('「看来你已经熟练这样的跑法了哟」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 想，应该是因为${daiya.sex}找回属于自己的跑法，所以先前训练的成果也跟着展现出来了。`,
    );
    await daiya.say_and_wait(
      '太好了……！这也就代表，我可以放心继续练步伐的力道了吧……！',
    );
    await daiya.say_and_wait('也就代表，我是有机会朝国外竞赛前进的……');
    era.printButton('「我们一起找出适合你的方式吧」', 1);
    await era.input();
    await era.printAndWait(
      `虽然之后的训练也有可能再次影响到她的跑法，但现在的${daiya.sex}应该是没有问题了。`,
    );
    await era.printAndWait(
      `如果是已经明白自己跑步初衷的${daiya.sex}，相信一定能找出最适合自己的成长方法。`,
    );
    await daiya.say_and_wait('是，不用担心。我已经不会再迷惘了。');
    await daiya.say_and_wait('我只需要专注地为了我的梦想向前迈进！');
    era.printButton('「『天皇赏（秋）』的时候也要保持这样！」', 1);
    await era.input();
    await daiya.say_and_wait('是！终于要和麦昆一起……！还有，小北也是！！');
    await daiya.say_and_wait('我梦寐以求的舞台终于就要……！');
    await daiya.say_and_wait(
      `而且，只要跑赢了，就能证明我已经拥有『知名赛${daiya.get_uma_sex_title()}』的实力。`,
    );
    await daiya.say_and_wait(
      '崇拜的人和长久以来的对手……可以和她们一决胜负的机运──',
    );
    await daiya.say_and_wait('我会做好赌上一切的觉悟去挑战的！！');
  };

  handlers[race_enum.tenn_sho] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('到达', daiya);
    const kita = get_chara_talk(68);
    const mcqueen = get_chara_talk(13);
    const teio = get_chara_talk(3);
    await daiya.say_and_wait(
      '路况极差根本不重要！！我只需要用自己的跑法朝终点前进！',
      true,
    );
    await daiya.say_and_wait('喝啊啊啊啊啊啊啊啊啊啊啊！！');
    await say_by_passer_by_and_wait(
      '实况',
      '第一名是里见光钻────！！最高级钻石没有蒙灰！呈现出纯净无暇的光芒！',
    );
    await say_by_passer_by_and_wait('观众', '（哇啊啊啊啊啊啊啊啊啊！）');
    await say_by_passer_by_and_wait(
      '观众B',
      '真是震撼人心的表现啊，里见光钻！！想不到竟然能够赢过麦昆！真是无可挑剔的实力！」',
    );
    await say_by_passer_by_and_wait(
      '观众A',
      '就算全身沾满了泥土也依旧凛然坚定……那样的姿态真的好美……」',
    );
    await kita.say_and_wait('唔啊啊啊啊啊啊啊啊！！不甘心、不甘心、不甘心！！');
    await kita.say_and_wait('明明我的状态非常完美的说！');
    await kita.say_and_wait('……不过，这也就代表小钻真的非常厉害。');
    await kita.say_and_wait('我还要更加精进自己才行！');
    await daiya.say_and_wait('嗯，我也会努力不被小北给追过的。');
    await mcqueen.say_and_wait('里见，你表现得非常精彩。');
    await daiya.say_and_wait('麦昆！谢谢你，可是──');
    await mcqueen.say_and_wait('怎么了吗？');
    await daiya.say_and_wait(
      '毕竟我在距离上占了上风，对长途跑者的麦昆来说，还是长距离的比赛比较擅长吧。',
    );
    await mcqueen.say_and_wait([
      '是啊，但也是我自己指定要跑 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 的。',
    ]);
    await daiya.say_and_wait('我、我希望有机会也能一起跑长距离的比赛！！');
    await daiya.say_and_wait('我想要在长距离的比赛中赢过麦昆……！');
    await mcqueen.say_and_wait('……！');
    await teio.say_as_unknown_and_wait('很了不起的心态呢～小钻！');
    await daiya.say_and_wait('帝王！');
    await teio.say_and_wait('不然这样你看如何？');
    await teio.say_and_wait('我们几个全部一起跑同一个比赛！！');
    await daiya.say_and_wait('……！我、我愿意！请给我这个机会！！');
    await mcqueen.say_and_wait('真是的……是帝王自己也想跟里见一起比赛吧？');
    await teio.say_and_wait('嘿嘿♪被你看穿啦。');
    await mcqueen.say_and_wait([
      '──',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '！',
    ]);
    await mcqueen.say_and_wait([
      '如果大家都愿意的话，那我们就在 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 再战吧！',
    ]);
    await teio.say_and_wait('我也会参加喔！粉丝投票，就麻烦大家了喔！');
    await say_by_passer_by_and_wait(
      '观众B',
      '真的假的！？我一定会投票的！帝王、麦昆！！',
    );
    await daiya.say_and_wait('麦昆……！谢谢你！！');
    await daiya.say_and_wait('我会参加『有马纪念』的！！');
    await kita.say_and_wait('我也是！！到时候就麻烦多多指教了！！');
    await say_by_passer_by_and_wait('观众', '唔喔喔喔喔喔喔喔喔喔喔喔！！');
    await era.printAndWait([
      '现场六万名观众的骚动震荡看台。想必 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 会成为世纪之最的梦幻赛事吧。',
    ]);
    await era.printAndWait([
      '面对府中赛场热烈的欢呼声，现场根本不存在不参加 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 的选择。',
    ]);
    await daiya.say_and_wait('──那个，麦昆！');
    await daiya.say_and_wait('我可以跟你请教一件事吗？');
    await mcqueen.say_and_wait('什么事呢？');
    await daiya.say_and_wait('麦昆你……为什么会愿意跟我们一起比赛呢？');
    await mcqueen.say_and_wait(
      `……你们两个的比赛激起了我的斗志。再加上，身为目白家的赛${daiya.get_uma_sex_title()}，我认为我必须做这样的选择。`,
    );
    await daiya.say_and_wait(`身为目白家的赛${daiya.get_uma_sex_title()}……`);
    await mcqueen.say_and_wait('光钻想要知道的，是我现在的处境跟心境吧？');
    await daiya.say_and_wait(
      `是的，因为麦昆是里见家期望能成为的『知名赛${daiya.get_uma_sex_title()}』，并以这样的身份在各处活跃。`,
    );
    await daiya.say_and_wait(
      `所以我才会认为，这次麦昆愿意跟我们一起比赛，是不是出自于『知名赛${daiya.get_uma_sex_title()}』的考量。`,
    );
    await mcqueen.say_and_wait('是的，正是如此。');
    await mcqueen.say_and_wait(
      `──以绝对强势到甚至没有新意的实力，在赛${daiya.get_uma_sex_title()}界尽情打响目白家名号，这是我一直督促自己的课题。`,
    );
    await mcqueen.say_and_wait(
      `因此，当我和目白家都特别看重的『天皇赏（春）』……出现强力赛${daiya.get_uma_sex_title()}参赛时，我就必须奋起迎战。`,
    );
    await mcqueen.say_and_wait(
      `不单是如此，我不仅要和在闪耀系列赛创下好成绩的赛${daiya.get_uma_sex_title()}比赛──`,
    );
    await mcqueen.say_and_wait(
      `也要接受像你们这些新一代崭露头角的赛${daiya.get_uma_sex_title()}的挑战，并用压倒性的实力赢过你们。`,
    );
    await mcqueen.say_and_wait('用这种方式──让目白家的名声永不凋零。');
    await mcqueen.say_and_wait('这就是我现在的处境和心境。');
    await daiya.say_and_wait('为的是让目白家能够以实力继续自豪……');
    await mcqueen.say_and_wait('……然而，里见家和目白家的立场并不相同。');
    await mcqueen.say_and_wait(
      `里见家在赛${daiya.get_uma_sex_title()}界的历史，可以说是由光钻开始的。`,
    );
    await mcqueen.say_and_wait('所以，光钻应该有和我不同的路可以选择。');
    await daiya.say_and_wait('……里见家的历史是由我开始……');
    await daiya.say_and_wait('…………');
    await daiya.say_and_wait('谢谢你，麦昆。我会好好想想的。');
    await mcqueen.say_and_wait('嗯，你就好好想想吧。');
    await mcqueen.say_and_wait('我先预祝光钻的前途光明。告辞了。');
    await daiya.say_and_wait('……我就知道，麦昆她真的是很了不起的人！');
    await daiya.say_and_wait(
      `${
        mcqueen.sex
      }对『知名赛${daiya.get_uma_sex_title()}』的身份竟然会有那么坚定明确的定义跟目标……真的令我感到非常尊敬……！`,
    );
    era.printButton('「能成为你的参考真是太好了呢」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是啊！我会像麦昆所说的那样，仔细想想自己该怎么做……',
    );
    await daiya.say_and_wait(
      '可以的话，希望可以赶上在『有马纪念』的时候，告诉她我想出的答案！',
    );
    await era.printAndWait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      `──里见光钻想要成为『知名赛${daiya.get_uma_sex_title()}』的梦想，或许真的能在那找到答案也不一定。`,
    ]);
  };

  handlers[race_enum.japa_cup] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('挑战', daiya);
    const kita = get_chara_talk(68);
    const teio = get_chara_talk(3);
    await say_by_passer_by_and_wait('实况', '现在领先抵达终点！第一名是──');
    await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
    await daiya.say_and_wait('呼、呼……');
    await teio.say_and_wait(
      '想不到竟然会有这样的实力……！你表现得很好喔，小钻。',
    );
    await daiya.say_and_wait('谢谢你！');
    await teio.say_and_wait('小北也是，你已经比我想像的还要更强了！');
    await kita.say_and_wait([
      '真的吗！？但我会在 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 呈现出比今天更好的表现！',
    ]);
    await daiya.say_and_wait('我也不会满足于现状的。');
    await daiya.say_and_wait(
      '我觉得现在的自己终于和比我早一步出发的小北、麦昆以及帝王，站上了同一个起跑点。',
    );
    await teio.say_and_wait('──不错嘛。小北跟小钻都很棒。');
    await teio.say_and_wait('充满决心要赢过我们的这个眼神，真的很棒喔。');
    await teio.say_and_wait('不小心让我想起了以前的自己呢。');
    await daiya.say_and_wait('以前的……帝王吗？');
    await teio.say_and_wait(
      '对，以前我也是这样崇拜着会长……一边想着总有一天一定要超越会长，一边在闪耀系列赛中努力着。',
    );
    await teio.say_and_wait('等到我终于跟会长直接对决时──');
    await teio.say_and_wait(
      '崇拜的对象瞬间变成了对手。我当时想着自己一定要打败她。',
    );
    await teio.say_and_wait(
      '你们两个现在就跟当时的我是一样的心情吧，我就是突然这么觉得啦！',
    );
    await teio.say_and_wait('不过呢，我也从来没有忘记当时挑战会长的感觉。');
    await teio.say_and_wait(
      '看到你们这么优秀的表现，让我自己也忍不住想要上场！',
    );
    await teio.say_and_wait(
      '到时候的『有马纪念』，我会以挑战者的身份去挑战小钻跟小北的！',
    );
    await japa_cup_common(daiya, me, kita, teio);
  };
};
