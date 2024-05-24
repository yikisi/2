const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { race_enum } = require('#/data/race/race-const');

/** @param {{relation_change:number}} extra_flag */
async function sex_with_nice_nature(extra_flag) {
  if (era.get('love:60') >= 75) {
    era.printButton('「还有，这是惯例的那个——」', 1);
    await era.input();
    sys_change_lust(0, lust_from_palam);
    sys_change_lust(60, lust_from_palam);
    // 决胜服
    await quick_into_sex(60);
  } else {
    era.println();
    extra_flag.relation_change = 50;
  }
}

/**
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const chara_talk = get_chara_talk(60),
    edu_weeks = era.get('cflag:60:育成回合计时'),
    me = get_chara_talk(0);
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・一如既往', chara_talk);

    await chara_talk.say_and_wait(
      `嗯嗯。${sys_get_callname(60, 60)} 顺利地闪耀出道了……`,
    );
    era.printButton('「辛苦了」', 1);
    await era.input();
    await chara_talk.say_and_wait('谢谢。我去大战了一场呢──哈哈。');
    await chara_talk.say_and_wait('怎么样？我跑得……如何啊？');
    era.printButton('「很不错哦！」', 1);
    await era.input();
    await chara_talk.say_and_wait('啊哈哈！你回答得真干脆──');
    await chara_talk.say_and_wait(
      `我也想先知道 ${sys_get_callname(60, 0)} 打算怎么规划未来。`,
    );
    era.printButton('「先问一下，你有想跑的比赛吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '……想跑的比赛啊……你觉得现在的我有立场谈目标吗？',
    );
    await chara_talk.say_and_wait(
      '这种事就交给训练员主导没关系的。快点，是你展现实力的机会哦～',
    );
    await era.printAndWait(
      `从优秀素质出道前，${me.name} 就认为${chara_talk.sex}适合跑中距离。${chara_talk.sex}的尾段加速很精湛，该坚持时也能坚持住。`,
    );
    await era.printAndWait('为了确保今后的经典赛战线，该选择的第一场战役是──');
    era.printButton('「要不要去跑『若驹锦标』？」', 1);
    await era.input();
    await chara_talk.say_and_wait('哦，原来如此啊。在公开赛见识一下实力是吗？');
    await chara_talk.say_and_wait('没什么不好的吧？就这么办吧。');
    era.printButton('「那就一如往常地留下成绩吧」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '要我一如往常……那不就等于叫我得第三名吗？我的目标可不是得第三名哦。',
    );
    await chara_talk.say_and_wait('唉，虽然也有每次都能得第一名的怪物就是了……');
    await chara_talk.say_and_wait(
      `……帝王打算怎么做呢？${chara_talk.sex}会参加什么比赛呢？`,
    );
    await era.printAndWait(
      `东海帝王与优秀素质同时期出道，所以难免会令${chara_talk.sex}在意。不过……`,
    );
    era.printButton('「最重要的是训练哦！」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      `我知道啦。我只是在想，如果不会碰上${chara_talk.sex}就好了～那么，今后也请你多多照顾咯～`,
    );
    await era.printAndWait('于是，下次的目标就决定是「若驹锦标』了！');
    era.println();
    extra_flag.relation_change = 50;
  } else if (extra_flag.race === race_enum.waka_sta) {
    // 经典年若驹S
    const teio_talk = get_chara_talk(3);
    if (extra_flag.rank === 1) {
      await print_event_name('从「偶然」开始', chara_talk);

      await chara_talk.say_and_wait('跑赢了……我……跑赢帝王了？');
      await chara_talk.say_and_wait(
        '哈、哈哈……哈哈……！好棒，真的吗……！？是我赢了……',
      );
      await teio_talk.say_and_wait('哎呀──我输了！');
      await chara_talk.say_and_wait('……唔！帝王……！我──');
      await teio_talk.say_and_wait('──我遇到变强的契机了！');
      await chara_talk.say_and_wait('咦……');
      await teio_talk.say_and_wait(
        '原来我还能变得更强啊！嘿嘿，我开始期待起来了──！',
      );
      await teio_talk.say_and_wait(
        '距离成为最强还差几公里呢？我要一口气狂奔赶上！',
      );
      await chara_talk.say_and_wait('啊……');
      await chara_talk.say_and_wait('危险危险。我差点真的得意忘形起来了。');
      await chara_talk.say_and_wait('不是的。我这次能跑赢……只是偶然。');
      await chara_talk.say_and_wait('因为，不管怎么想──都是那孩子比较耀眼啊……');
      era.printButton('「你赢了呢，内恰！」', 1);
      await era.input();
      await chara_talk.say_and_wait('……嗯。');
      era.printButton('「不开心吗？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '刚跑赢时当然很开心咯。虽然很开心……但这场胜利一定只是偶然。我不是靠实力赢的。',
      );
      era.printButton('「为什么会这么想？」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '因为……这不是很奇怪吗？我怎么可能比帝王还强。',
      );
      await chara_talk.say_and_wait(
        '这可是一点都不闪闪发光的我哦？一定有什么地方搞错了。──真是的！我竟然误会了，真是丢脸──！',
      );
      await era.printAndWait(
        `优秀素质确实胜利了。而且原因无疑是出自于${chara_talk.sex}的实力。但${chara_talk.sex}……`,
      );
      await chara_talk.say_and_wait('……真的好丢脸。');
      await era.printAndWait(
        `跑赢却消沉得像是输了一样，是因为${chara_talk.sex}还不能完全相信自己的实力。也就是自信心不足。既然如此，现在需要的是──`,
      );
    } else {
      await print_event_name('即使输了，夏天仍会到来', chara_talk);

      await chara_talk.say_and_wait('呼……呼……呼……');
      await chara_talk.say_and_wait(
        `……嗯，还不错哦，${era.get('callname:60:60')}，的确留下成果了──`,
      );
      await era.printAndWait('？？？「哇啊啊啊啊啊……！！」');
      await chara_talk.say_and_wait('……咦！？这声音是怎么了──');
      await teio_talk.say_and_wait(
        '我的实力还不只这样哦！接下来也要紧盯我的活跃表现哦！我跟你们约好，会继续不断超越你们的想像！下次见咯！谢谢大家♪',
      );
      await era.printAndWait('？？？「哇啊啊啊啊啊……！！」');
      await chara_talk.say_and_wait('…………');
      await chara_talk.say_and_wait('气氛被炒得超热耶。真不愧是帝王──');
      await chara_talk.say_and_wait(
        '……我真是蠢。竟然说要挑战那种对手。而且我果然还是只有这种程度啊。未免太不知天高地厚了。我真的好蠢……',
      );
      await chara_talk.say_and_wait('……啊──帝王……真是耀眼……');
      era.drawLine();
      await chara_talk.say_and_wait(
        `──啊，${era.get('callname:60:0')}……，那个……${era.get(
          'callname:60:60',
        )} 比完回来了──`,
      );
      era.printButton(`「你能紧咬住${chara_talk.sex}真是厉害」`, 1);
      await era.input();
      await chara_talk.say_and_wait(
        '哈哈──好了啦，不用这样安慰我。而且你看，我有好好达成你的要求了吧？',
      );
      await chara_talk.say_and_wait(
        '『一如往常』地留下结果。嗯，我有做好我的工作了。',
      );
      await chara_talk.say_and_wait(
        '……所以啊，竟然还想向上挑战，简直就是多此一举啊。要是没去想什么挑战，就真的一切都跟往常一样了。',
      );
      await chara_talk.say_and_wait(
        '……包含我的心情也是。真是的──我离闪闪发光还太远了啦──',
      );
      await era.printAndWait(
        `实际上${chara_talk.sex}说得没错，这次的成果相当不错。尽管不是第一名，还是可以更正向地看待这次的成绩。`,
      );
      await chara_talk.say_and_wait('……唉。');
      await era.printAndWait(
        `但${chara_talk.sex}却如此消沉。主要原因可能是${chara_talk.sex}原本就比较没自信。既然如此，现在需要的是──`,
      );
    }
    era.printButton('「内恰，要不要去远征？」', 1);
    await era.input();
    await chara_talk.say_and_wait('远征……？咦？为什么……');
    era.printButton('「我们在夏天也留下成果吧」', 1);
    await era.input();
    await era.printAndWait(
      `现在让${chara_talk.sex}站上经典赛战线比赛会是场危险的赌博。可能会害${chara_talk.sex}失去目前仅剩的一点自信。那还不如挑战地方竞赛，稳健地留下成绩，这样最后应该能引导${chara_talk.sex}的成长才对。`,
    );
    await chara_talk.say_and_wait(
      '也就是说……目标不是『皋月赏』，也不是『日本德比』……？……因为我实力还不足。',
    );
    era.printButton('「现在就别焦急，先确认自己真的变强了吧」', 1);
    await era.input();
    await chara_talk.say_and_wait('……我知道了。');
    await chara_talk.say_and_wait(
      '说得也是。现在我这个样子，就算下次又跑赢……我也很难接受。',
    );
    era.printButton('「只要能克服这个夏天，一定能变强」', 1);
    await era.input();
    await chara_talk.say_and_wait('……希望是这样咯。');
    await era.printAndWait('说完，优秀素质长舒一口气');
    await chara_talk.say_and_wait(
      '嗯，OKOK！各地巡回演出应该也很适合我。然后呢？该不会真的要让我一直到处各地巡回吧？你决定好到底要跑哪一场比赛了吗？',
    );
    era.printButton('「『小仓纪念』怎么样？」', 1);
    await era.input();
    await era.printAndWait(
      '在小仓举办的重赏比赛。要帮助优秀素质提升自信，这是最适合不过的竞赛了。',
    );
    await chara_talk.say_and_wait(
      '原来如此，我记得距离也跟若驹一样对吧？嗯，就去那里吧。不过，夏天去小仓吗……感觉会热倒耶……',
    );
    await era.printAndWait([
      '就这样，',
      me.get_colored_name(),
      ' 和 ',
      chara_talk.get_colored_name(),
      ' 决定下次的目标就是「小仓纪念」！',
    ]);
    era.println();
    extra_flag.relation_change = 50;
  } else if (
    extra_flag.race === race_enum.koku_kin &&
    edu_weeks < 95 &&
    extra_flag.rank <= 5
  ) {
    // 经典年小仓纪念
    await print_event_name('即使是镀金', chara_talk);

    await chara_talk.say_and_wait(
      `嘿嘿……我做到了喔，${era.get('callname:60:0')}。我确实留下成果了！`,
    );
    era.printButton('「做得很好！」', 1);
    await era.input();
    await chara_talk.say_and_wait('嗯！');
    await chara_talk.say_and_wait(
      '呵呵……那个啊，小仓商店街的大家也来看我了。我们才聊过一两句而已喔？明明他们应该也很忙的……',
    );
    await chara_talk.say_and_wait(
      '……看到他们这么支持我，让我开始觉得这样也不错。我只要以自己的作风，一步一步……慢慢前进就好了，对吧？',
    );
    await chara_talk.say_and_wait('就算不知道有没有到达的一天……');
    await chara_talk.say_and_wait(
      `……那个，${era.get('callname:60:0')}。我要开始说有点逊的事了。`,
    );
    era.printButton('「怎么了？」', 1);
    await era.input();
    await chara_talk.say_and_wait('……我能赢过帝王吗？');
    await chara_talk.say_and_wait('……说笑的啦！我开玩笑的，你还是忘记吧──');
    era.printButton('「你可以的」', 1);
    await era.input();
    await chara_talk.say_and_wait('……哎呀……啊呜。');
    await chara_talk.say_and_wait(
      `……嗯，我就知道 ${era.get('callname:60:0')} 一定会这么说。`,
    );
    await chara_talk.say_and_wait('明明知道答案还是要问，对，我很卑鄙。但是……');
    await chara_talk.say_and_wait('因为要是没人来推我一把，我就无法前进啊。');
    await chara_talk.say_and_wait(
      `……帝王正在经典之道上冲刺，这样看来，下次${chara_talk.sex}一定──会以『菊花赏』为目标。`,
    );
    await chara_talk.say_and_wait(
      '所以我下次也……想在『菊花赏』上……奔驰。你觉得……怎么样……？',
    );
    era.printButton('「距离会增长不少，没问题吧？」', 1);
    await era.input();
    await era.printAndWait(
      `菊花赏』是3000米的竞赛。跟这次参加的小仓纪念比起来，距离多了1000米。对优秀素质来说或许会是场艰难的战役。但既然${chara_talk.sex}已经下定决心……！`,
    );
    await chara_talk.say_and_wait(
      '当然了，想必问题会很大。因为我大概不擅长跑那么长的距离。',
    );
    await chara_talk.say_and_wait(
      '不过……我这次不想退缩。──去参加『菊花赏』吧！',
    );
    era.printButton('「好！」', 1);
    await era.input();
    await chara_talk.say_and_wait('唉～～～决定了。真的决定了。');
    await chara_talk.say_and_wait(
      '内恰哟，你已经无路可逃咯。要在大型竞赛上直接对决了……',
    );
    await chara_talk.say_and_wait('不过……嗯。这样也不错……吧？');
    await era.printAndWait(
      `……虽然${chara_talk.sex}似乎稍微找回一点自信了，但为了迎战「菊花赏』，${me.name} 应该还能为${chara_talk.sex}做点什么。${me.name} 思考这些事时，想起来的是──`,
    );
    await chara_talk.print_and_wait(
      '【不管我跑出什么成绩，大家都会为我开心。】',
    );
    await chara_talk.print_and_wait(
      '【都会笑着称赞我很努力。但我自己完全不确定。】',
    );
    await chara_talk.print_and_wait(
      '【嗯……我真的说不出我很努力了啊──比如说，第一名就很明确对吧？会得到奖杯啊，天皇赏的话就是盾形奖牌之类的。】',
    );
    await chara_talk.print_and_wait(
      '【看到那些就会觉得，是啊，我真的很努力。】',
    );
    await chara_talk.print_and_wait('【……但这种心情是第一名才有的特权。】');
    await era.printAndWait(
      `……${me.name} 应该还能为${chara_talk.sex}做些什么事！`,
    );
    await era.printAndWait('──于是，从小仓回到中央的路上……');
    await chara_talk.say_and_wait('啊，训练员。我可以拿放在你那里的点心吗──？');
    await chara_talk.say_and_wait(
      '小仓的大家不是有送我们日式点心吗？我想说搭新干线的时候可以吃──',
    );
    era.printButton('「我知道了」', 1);
    await era.input();
    await era.printAndWait('（咖沙咖沙……飘落）');
    await chara_talk.say_and_wait('啊，有东西快掉了喔。');
    await chara_talk.say_and_wait('……用纸折成的奖杯……吗？看起来歪歪扭扭的。');
    era.printButton('「……这是，我做的」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '哦～训练员做的？呵呵──原来你有这么可爱的兴趣～',
    );
    era.printButton('「我想做来送给内恰你的」', 1);
    await era.input();
    await chara_talk.say_and_wait('这样啊……');
    await chara_talk.say_and_wait('咦！？送我！？为什么……？');
    era.printButton('「我想让你建立自信」', 1);
    await era.input();
    await chara_talk.say_and_wait('自信……');
    await me.say_and_wait(
      '我懂那种无论跑出什么成果，都难以对自己有自信的心情。',
    );
    await me.say_and_wait(
      '这样的话，如果将累积的成绩化为实体，是否就能建立一点自信了呢？',
    );
    await chara_talk.say_and_wait('……为了我……特地做的……');
    await chara_talk.say_and_wait(
      '……也就是说，你这么大一个人，在酒店里不断埋头尝试后做出了奖杯？',
    );
    await chara_talk.say_and_wait('我可不是小学生喔。');
    era.printButton('「说的也是啦……」', 1);
    await era.input();
    await era.printAndWait(
      `……没错。虽然做是做了，但这样简直就像把${chara_talk.sex}当小孩子看待，所以 ${me.name} 很犹豫是否该送出去……`,
    );
    await chara_talk.say_and_wait('……呵呵。');
    await chara_talk.say_and_wait('真是拿你没办法呢。我就为了你收下吧。');
    era.printButton('「诶？」', 1);
    await era.input();
    await chara_talk.say_and_wait('咦？你为什么要惊讶？那不是特地做给我的吗？');
    await chara_talk.say_and_wait('好啦好啦，快点拿来吧。不拿来我就不回去喔。');
    era.printButton('「你愿意收下吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait('……因为啊……');
    await chara_talk.say_and_wait('因为歪歪扭扭的奖杯，不就正好适合我吗？');
    await chara_talk.say_and_wait(
      '像镀上去的金色、边角歪掉的感觉之类的。这些……不全都很像我吗？',
    );
    await chara_talk.say_and_wait(
      '总觉得有股亲近感？之类的。……嗯，所以呢，也就是说。──谢谢你。',
    );
    await chara_talk.say_and_wait('……我很期待下一个奖杯你会做得更～好喔。');
    era.printButton('「下一个！？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '因为我还会继续比赛啊。也请训练员多多加油咯！我也会在比赛中加油的。',
    );
    era.println();
    extra_flag.relation_change = 50;
  } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank <= 5) {
    await print_event_name('自己的比赛', chara_talk);

    await era.printAndWait('观众「优秀素质，辛苦了──！你跑得很精彩哦──！」');
    await era.printAndWait(
      '竞赛结束后，从观众席传来的讨论声，证明优秀素质跑出了「属于自己的比赛」。而且──',
    );
    await chara_talk.say_and_wait(
      '训练员，我……我赢了……我的确跑出了属于自己的比赛……对吧？',
    );
    era.printButton('「嗯！」', 1);
    await era.input();
    await chara_talk.say_and_wait('太好了……嘿嘿。');
    await chara_talk.say_and_wait(
      '在『菊花赏』能交出这种成果，已经无可挑剔了！我真的很努力了！',
    );
    await chara_talk.say_and_wait('你今天也有为我准备……歪歪扭扭的奖杯吗？');
    era.printButton('「当然，这是『你努力了奖』！」', 1);
    await era.input();
    await chara_talk.say_and_wait('啊……训练员亲手做的奖杯！');
    await era.printAndWait(
      `「小仓纪念』时，为了让优秀素质建立自信，${me.name} 做了折纸奖杯送${chara_talk.sex}。因为之前${chara_talk.sex}很期待，所以 ${me.name} 这次又做了……`,
    );
    await chara_talk.say_and_wait('……你真的做了啊？嘿嘿，还是做得歪歪扭扭的。');
    await chara_talk.say_and_wait('很好很好。等一下来举办颁奖典礼吧。');
    await chara_talk.say_and_wait(
      `当作庆祝素质${chara_talk.sex_code === 1 ? '' : '小姐'}的活跃表现♪`,
    );
    await chara_talk.say_and_wait(
      `……虽然现在可以这样得意忘形，但要是帝王也有参赛，可能就不会这么顺利了。……帝王${chara_talk.sex}没事吧？不知道伤势有多严重。`,
    );
    era.printButton(`「${chara_talk.sex}一定没问题的」`, 1);
    await era.input();
    await chara_talk.say_and_wait('嗯……也对呢。');
    await chara_talk.say_and_wait(
      `毕竟${chara_talk.sex}是帝王啊。一定很快就能复活，然后还会说什么『我可是无敌的哦！』`,
    );
    await chara_talk.say_and_wait('……在那之前我可要再变强点才行呢。');
    era.printButton('「还有一场大对决在等着呢」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '什么？冬天都快到了，最近还有大对决？……啊！你该不会是指……',
    );
    era.printButton('「你不挑战『有马纪念』吗？」', 1);
    await era.input();
    await era.printAndWait(
      `优秀素质拥有坚定的忠实粉丝，也在『菊花赏』确实发挥出实力，现在的${
        chara_talk.sex
      }一定能够挑战『有马纪念』！不仅如此，『有马纪念』的参赛者都是今年倍受瞩目的各位赛${chara_talk.get_uma_sex_title()}。跟${
        chara_talk.sex
      }们一起比赛一定能带来更多成长。`,
    );
    await chara_talk.say_and_wait('『有马纪念』吗……');
    await chara_talk.say_and_wait(
      '想要回报大家平时的支持，这是最适合的舞台……对吧？',
    );
    await chara_talk.say_and_wait(
      '……或许我根本办不到。搞不好就算参赛也完全无法发挥，但是……',
    );
    await chara_talk.say_and_wait('──我想参加『有马纪念』！');
    era.printButton('「那就去挑战吧！」', 1);
    await era.input();
    await era.printAndWait(
      `于是，${me.name} 和优秀素质决定经典级最后一场挑战就是『有马纪念』了！`,
    );
    if (era.get('love:60') >= 75) {
      era.printButton('「还有……这个也是贺礼」', 1);
      await era.input();
      await chara_talk.say_and_wait('诶？什么什么？');
      await era.printAndWait(
        '没有立刻回答优秀素质的疑问，而是反手锁上了休息室的门',
      );
      era.printButton('「是我们家族优选的祖传染色体哦」', 1);
      await era.input();
      await chara_talk.say_and_wait(
        '……诶？等等等等等下？是要在这做吗？这里可是休息室诶！',
      );
      await era.printAndWait(
        `看见 ${me.name} 突然开始宽衣解带，优秀素质的俏脸刷的一下涨红了，连连缩向沙发后面。`,
      );
      era.printButton(
        '「没事的，这里隔音好得很，不会有人来打搅我们的……你也应该很想要了吧？」',
        1,
      );
      await era.printAndWait(
        `刚刚结束比赛的${chara_talk.get_uma_sex_title()}，身体会不断散发出由于高速冲刺而产生的大量热量，因而会产生一种接近发情的状态，眼下的情况正是如此，哪怕是厚如决胜服下的安全裤，现在也已能略见湿润`,
      );
      await chara_talk.say_and_wait('但……但是，身上会有汗臭——');
      era.printButton('「内恰的汗怎么会臭？倒不如说就好这口！」', 1);
      await era.input();
      await era.printAndWait(
        `不等优秀素质再说下去，${me.name} 便将优秀素质按倒在沙发上，双手探入决胜服中，而优秀素质也很快便不再反抗，将身体委于 ${me.name} 摆弄……`,
      );
      sys_change_lust(0, lust_from_palam);
      sys_change_lust(60, lust_from_palam);
      // 决胜服
      await quick_into_sex(60);
    } else {
      era.println();
      extra_flag.relation_change = 50;
    }
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('远望', chara_talk);

    await chara_talk.say_and_wait('跑、跑赢了……！我在『有马纪念』赢了……');
    era.printButton('「恭喜你！」', 1);
    await era.input();
    await chara_talk.say_and_wait('训练员！我跟你说，我……！');
    await chara_talk.say_and_wait('我都听到了。听到大家替我加油的声音！');
    await chara_talk.say_and_wait('听起来很像在骗人吧？但是，是真的！');
    await chara_talk.say_and_wait(
      '明明平常都只能听见自己的心跳声、呼吸声、还有风吹声而已。',
    );
    await chara_talk.say_and_wait(
      '但今天……我清楚地听到加油声了。我听到了『内恰，加油啊』的呼声！',
    );
    await chara_talk.say_and_wait(
      '因为这样，体力快用完的时候我才能撑住。我真的……跑得很开心！',
    );
    await era.printAndWait(
      `优秀素质与支持者之间有着深刻的情感。看来对${chara_talk.sex}来说，今天的『有马纪念』是一场特别的比赛。`,
    );
    await chara_talk.say_and_wait('我还想继续跑。明年……也想站上这个舞台！');
    await chara_talk.say_and_wait('……呃，我这笨蛋！太心急了吧！');
    await chara_talk.say_and_wait('但是我真的跑得很开心啊……（扭捏）');
    await era.printAndWait(
      '确实，现在就把目标订为明年的『有马纪念』，似乎还有点太早了。如果想在这之间安排一场能保持目前动力的竞赛……',
    );
    era.printButton('「还有『宝冢纪念』啊！」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '『宝冢纪念』……是以粉丝投票选出参赛者的竞赛对吧？跟『有马纪念』一样……',
    );
    await chara_talk.say_and_wait(
      '但我好像在这种比赛中能表现得更好呢。嗯，我想参加……『宝冢纪念』！',
    );
    await era.printAndWait(
      `虽然如此，距离这场竞赛还稍微有点时间。于是${me.name}和优秀素质决定这期间要参加各种比赛，为了挑战『宝冢纪念』而不断成长。`,
    );
    await chara_talk.say_and_wait(
      '我们两个是不是都太心急了？竟然在这里决定起接下来的比赛──',
    );
    await era.printAndWait('商店街的大家「内恰──！你跑得很好呢──！」');
    await era.printAndWait(
      `商店街的大家「你是世界第一的赛${chara_talk.get_uma_sex_title()}！你是我们的骄傲──！」`,
    );
    await chara_talk.say_and_wait(
      '等一下，大、大家……！太大声了啦，这里又不是店里！',
    );
    await chara_talk.say_and_wait(
      '还有，说什么世界第一，太夸张了啦！真是的，真是难为情！',
    );
    await chara_talk.say_and_wait('真是的……嘿嘿。');
    era.printButton('「现在就坦率地感到开心吧」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '那对我来说就是最难的啦！你明明很清楚的。不过，现在……是吧。嗯，就是啊。',
    );
    await chara_talk.say_and_wait(
      '该趁现在……尽情开心才行。因为并不是一切就到此结束了。',
    );
    await era.printAndWait(
      `优秀素质小声地说着这些话，望向一起跑完『有马纪念』的赛${chara_talk.get_uma_sex_title()}们……`,
    );
    await chara_talk.say_and_wait('你今天也有为我准备……歪歪扭扭的奖杯吗？');
    era.printButton('「当然！」', 1);
    await era.input();
    await chara_talk.say_and_wait('……嘿嘿。谢谢你。那……得先开检讨会议呢。');
    await chara_talk.say_and_wait(
      '我光在意自己与帝王间的差距，完全忘记还有其他竞争对手。',
    );
    await chara_talk.say_and_wait(
      '今天的比赛让我认知到这件事了。要是稍微有一点松懈，我应该就会跑输了。',
    );
    await chara_talk.say_and_wait(
      '就算现在可能还跑得赢……但今后周围的选手还会越来越强。',
    );
    await chara_talk.say_and_wait(
      '不能再这样下去了。现在不能光喊着要赢过帝王。',
    );
    await era.printAndWait(
      `看来借着参加各世代选手互相竞争的『有马纪念』，让${chara_talk.sex}的视野更加宽广了。……这是成长的证明！`,
    );
    await chara_talk.say_and_wait('我得更加了解自己周遭的选手才行……！');
    await sex_with_nice_nature(extra_flag);
  } else if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    // 资深年宝冢纪念
    await print_event_name('触及的指尖', chara_talk);

    const mcqueen_talk = get_chara_talk(13);
    const ryan_talk = get_chara_talk(27);
    await chara_talk.say_and_wait('──太好了……！我……赢了！');
    era.printButton('「太棒了！」', 1);
    await era.input();
    await chara_talk.say_and_wait('这是为什么呢？我比以往更加开心……');
    era.printButton('「因为是你拼命奔跑，好不容易夺下的胜利」', 1);
    await era.input();
    await chara_talk.say_and_wait('嗯，是啊。');
    await chara_talk.say_and_wait(
      '像『反正像我这种人』，或是『我办不到的啦』之类的……',
    );
    await chara_talk.say_and_wait(
      '这些想法今天完全没有浮现。我只是在心里不断喊着一定要追上……',
    );
    await mcqueen_talk.say_and_wait(
      '──你的表现令人印象深刻呢，内恰。但要是还有机会较量，下次我不会输的。',
    );
    await ryan_talk.say_and_wait('嗯嗯！我也该重新开始锻炼呢！谢谢你，内恰！');
    await chara_talk.say_and_wait('别这么说，我才要……谢谢你们！');
    era.drawLine();
    await chara_talk.say_and_wait(
      `那两位直到最后都这么爽朗呢。${mcqueen_talk.sex}们已经看向前方了。`,
    );
    await chara_talk.say_and_wait(
      '就算跑输，仍立刻将目光朝向未来。已经伸手朝向下个阶段，想着下次绝对要赢。',
    );
    await chara_talk.say_and_wait('……帝王也是这样。所以才会那么强大。');
    await chara_talk.say_and_wait(
      '过去我老是擅自决定自己的极限。告诉自己无论再怎么努力，这样就是极限了。',
    );
    await chara_talk.say_and_wait(
      '跑第三名也是因为这样。说自己无法跑得更好……其实是放弃了自己。',
    );
    await chara_talk.say_and_wait(
      '但是那样是不行的。要是想触及光芒，就要持续相信自己。',
    );
    await chara_talk.say_and_wait(
      '如果是抱着拿第一的决心获得的第三名，一定……能为今后奠定基础的。',
    );
    await era.printAndWait(
      `优秀素质也正望着前方。现在即使要${chara_talk.sex}登上大舞台，应该也能无所畏惧地挑战了吧。`,
    );
    await era.printAndWait(
      `接下来的那场比赛，一定能让现在的${chara_talk.sex}激发出更多自信与光芒……！`,
    );
    era.printButton('「再下来要挑战『天皇赏（秋）』吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait('『天皇赏（秋）』……！');
    await chara_talk.say_and_wait('要我参加……富有历史与传统的『天皇赏』？');
    await chara_talk.say_and_wait('……不行不行。我怎么退缩了呢？');
    await chara_talk.say_and_wait(
      '这种时候……不能怀疑自己有没有资格。一定要参加！要激励自己才行！',
    );
    await chara_talk.say_and_wait('走吧。直闯秋天的大舞台……！');
    await era.printAndWait(
      `──就这样，${me.name}和优秀素质决定挑战争夺中距离最强选手的『天皇赏（秋）』了！`,
    );
    await sex_with_nice_nature(extra_flag);
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    edu_weeks >= 96 &&
    extra_flag.rank <= 5
  ) {
    await print_event_name('响彻黄昏天空', chara_talk);

    await chara_talk.say_and_wait('跑完了……');
    await chara_talk.say_and_wait('我在高水准的比赛认真地战斗……拿出了成果。');
    await chara_talk.say_and_wait('不去考虑什么极限……用自己的手抓住了成果。');
    await chara_talk.say_and_wait(
      '……照这样下去，或许能够达成？达成想闪闪发光的……梦想……',
    );
    await chara_talk.say_and_wait(
      '……要更近。还要更近──我还想更接近闪闪发光……！',
    );
    await chara_talk.say_and_wait(
      `${era.get('callname:60:0')}，我有事拜托你。`,
    );
    await chara_talk.say_and_wait(
      '参加资深级最后的『有马纪念』之前，我还想再跑一场比赛。',
    );
    era.printButton('「为什么？」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '……我想要更多自信。我想带着要得第一的觉悟参赛并取胜。',
    );
    await era.printAndWait(
      '要是以前的优秀素质，应该会因自信不足而想要寻求『认同』吧。',
    );
    await era.printAndWait(
      `但是现在的 ${chara_talk.sex} 是『为了得胜』而想变得更强。`,
    );
    era.printButton('「这样会变成连续参赛，没问题吗？」', 1);
    await era.input();
    await chara_talk.say_and_wait('一定没问题的吧！');
    await chara_talk.say_and_wait(
      `毕竟 ${sys_get_callname(60, 60)} 的独到之处，就是跑得狼狈不堪的模样啊。`,
    );
    era.printButton('「我知道了」', 1);
    await era.input();
    await chara_talk.say_and_wait('谢谢你！至于跑什么比赛就交给你决定了。');
    await chara_talk.say_and_wait(
      `我把负责胡思乱想的这份工作交接给${era.get('callname:60:0')}！`,
    );
    await era.printAndWait(
      `观察${chara_talk.sex}至今的倾向，再考虑到距离『有马纪念』还有多少时间，现在该选择的竞赛是──`,
    );
    era.printButton('「参加『中日新闻杯』怎么样？」', 1);
    await era.input();
    await era.printAndWait(
      '虽然这场赛事等级较低，但优秀素质能在此留下成果。可以稳操胜券地拿下第一名！',
    );
    await chara_talk.say_and_wait(
      '不错呢，『中日新闻杯』……我会在那拿下第一名的。',
    );
    await chara_talk.say_and_wait(
      `我要跑赢，然后挺起胸膛挑战${chara_talk.sex}……！`,
    );
    await sex_with_nice_nature(extra_flag);
  } else if (
    extra_flag.race === race_enum.chun_hai &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('朝着最后的大舞台', chara_talk);

    await chara_talk.say_and_wait('拿到了！');
    await chara_talk.say_and_wait('第一名。我全力以赴得到的……第一名！');
    await chara_talk.say_and_wait('过程真漫长啊……');
    await chara_talk.say_and_wait(
      '那个软弱的我，一直受人鼓舞、被拉着前进、拼命追赶……',
    );
    await chara_talk.say_and_wait('──现在终于靠着自己的力量站在这里了！');
    await chara_talk.say_and_wait(
      '这下我可以抬头挺胸地战斗了。在那个舞台上……跟大家一起！',
    );
    era.printButton('「终于到这天了！」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '嗯！我已经不会再逃跑，也不会背叛大家的期待了。',
    );
    await chara_talk.say_and_wait('我一定……要赢。');
    await chara_talk.say_and_wait('──要在『有马纪念』当上闪闪发光的主角！');
    era.println();
    extra_flag.relation_change = 50;
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 96 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('有马的胜者是……', chara_talk);

    const teio_talk = get_chara_talk(3);
    await chara_talk.say_and_wait('啊……');
    await chara_talk.say_and_wait('我……赢了对吧？');
    era.printButton('「内恰，你成功了！」', 1);
    await era.input();
    await chara_talk.say_and_wait(`${era.get('callname:60:0')}……`);
    await chara_talk.say_and_wait('总觉得完全没有现实感……我真的赢了吗？');
    await era.printAndWait('观众们「优秀素质──！！恭喜你──！！」');
    await chara_talk.say_and_wait('──唔！咦？好厉害……这么多人都……');
    await era.printAndWait('商店街的人们「内恰──！恭喜你──！！」');
    await chara_talk.say_and_wait('商店街的大家……也来看我了啊。');
    await chara_talk.say_and_wait('原来大家都在等我啊。而我……终于回应了大家。');
    era.printButton('「全都是你努力掌握住的哦」', 1);
    await era.input();
    await chara_talk.say_and_wait('……');
    await chara_talk.say_and_wait(
      `呜呜～～～～！${era.get('callname:60:0')}……！`,
    );
    await chara_talk.say_and_wait('幸好我没放弃……！幸好我有持续追逐梦想～～！');
    await era.printAndWait(
      `这跟${chara_talk.sex}以前流下的不安的泪水不一样。${chara_talk.sex}因喜悦而流下大滴大滴的眼泪，跟汗水一起在太阳下闪闪发光。这时──`,
    );
    await teio_talk.say_and_wait('──真是的，为什么要哭啊！？');
    await chara_talk.say_and_wait('……！帝王……！');
    await teio_talk.say_and_wait(
      '你可是打败了我得到第一哦？你可是……打败了我哦……！胜利者就该威风地笑着啊！',
    );
    await chara_talk.say_and_wait('……嗯、嗯，也对。你也总是一直笑着呢……');
    await chara_talk.say_and_wait('抱歉，我没事。我……不会再哭了。');
    await teio_talk.say_and_wait('就是这样。一直哭就听不见了哦。听不见这个──');
    await era.printAndWait('观众的欢呼「哇啊啊啊啊……内恰──！」');
    await teio_talk.say_and_wait('──热烈的欢呼声！这全都是属于你的哦！');
    await chara_talk.say_and_wait('我知道。我听得……很清楚。');
    await chara_talk.say_and_wait(
      '……谢谢你，帝王。要是没有你在，我……是没办法跑到这里的。谢谢你一直让我追赶你。老实说，跑在你后面真的很辛苦。不过……卑鄙的我曾经觉得那个位置很舒适。但是从今以后，无论什么挑战，我都会正面迎战的。',
    );
    await chara_talk.say_and_wait('在我的故事中，我自己才是主角！');
    await era.printAndWait(
      '赛后接受胜利者访谈时。现在的优秀素质被大量闪光灯照耀着。',
    );
    await era.printAndWait(
      '记者A「──这次的『有马纪念』，对手都很难缠呢。请问你觉得自己能赢得这场比赛的原因是？」',
    );
    await chara_talk.say_and_wait('这个嘛……我也觉得大家真的都很强。');
    await chara_talk.say_and_wait(
      `但我也是『很强的』赛${chara_talk.get_uma_sex_title()}。我觉得应该是因为我发挥出了所有实力吧。`,
    );
    await chara_talk.say_and_wait('嗯，是因为我很努力……我可以明确地这么说！');
    await era.printAndWait('记者A「那么，优秀素质，最后请对粉丝说句话！」');
    await chara_talk.say_and_wait('那个，总是支持着我的大家，谢谢你们。');
    await chara_talk.say_and_wait(
      '虽然我很常无法回应大家的期待，但你们仍旧很单纯地支持我。',
    );
    await chara_talk.say_and_wait(
      '托大家的福，今天我才能来到这里。……虽然也经历了不少挫折啦！',
    );
    await chara_talk.say_and_wait('……我可以说句任性的话吗？');
    await chara_talk.say_and_wait('那个……真希望大家以后也能继续支持我呢──');
    await chara_talk.say_and_wait(
      '当然我想之后也会有状况不佳，或是完全不行的时候。',
    );
    await chara_talk.say_and_wait(
      '毕竟我既没有优异的天赋，也不是超级努力的人嘛。',
    );
    await chara_talk.say_and_wait('但是……但是啊，我想只有这点我可以保证。');
    await chara_talk.say_and_wait(
      `──我可是最不会背叛大家信赖的赛${chara_talk.get_uma_sex_title()}哦！`,
    );
    era.println();
    extra_flag.relation_change = 50;
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜！', chara_talk);

    await chara_talk.say_and_wait(
      `第一名……我是第一名！${era.get('callname:60:0')}你看！我是第一名哦`,
    );
    era.printButton('「恭喜你，你会赢是因为你很强」', 1);
    era.printButton('「你是靠自己的实力赢的」', 2);
    await chara_talk.say_and_wait(
      (await era.input()) === 1
        ? '嗯，我很强吗……我是不知道啦。但是……好吧，偶尔也接受看看训练员的吹捧好了。'
        : `什么～～那不就简直像在大声宣言『因为我很强』吗？要是之后又跑输，那可就丢脸了。`,
    );
  } else {
    throw new Error('unsupported');
  }
};
