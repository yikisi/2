/**
 * @file 优秀素质 - 育成
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  race_win: (() => {
    const title = '竞赛获胜！';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {string} callname 优秀素质对玩家的称呼
     */
    const f = async (nature, callname) => {
      await nature.say_and_wait(
        `第一名……我是第一名！${callname}你看！我是第一名哦`,
      );
      era.printButton('「恭喜你，你会赢是因为你很强」', 1);
      era.printButton('「你是靠自己的实力赢的」', 2);
      if ((await era.input()) === 1) {
        await nature.say_and_wait(
          '嗯，我很强吗……我是不知道啦。但是……好吧，偶尔也接受看看训练员的吹捧好了。',
        );
      } else {
        await nature.say_and_wait(
          `什么～～那不就简直像在大声宣言『因为我很强』吗？要是之后又跑输，那可就丢脸了。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race: (() => {
    const title = '一如既往';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, you, callname, self_call) => {
      await nature.say_and_wait(`嗯嗯。${self_call} 顺利地闪耀出道了……`);
      era.printButton('「辛苦了」', 1);
      await era.input();
      await nature.say_and_wait('谢谢。我去大战了一场呢──哈哈。');
      await nature.say_and_wait('怎么样？我跑得……如何啊？');
      era.printButton('「很不错哦！」', 1);
      await era.input();
      await nature.say_and_wait('啊哈哈！你回答得真干脆──');
      await nature.say_and_wait(`我也想先知道 ${callname} 打算怎么规划未来。`);
      era.printButton('「先问一下，你有想跑的比赛吗？」', 1);
      await era.input();
      await nature.say_and_wait(
        '……想跑的比赛啊……你觉得现在的我有立场谈目标吗？',
      );
      await nature.say_and_wait(
        '这种事就交给训练员主导没关系的。快点，是你展现实力的机会哦～',
      );
      await era.printAndWait(
        `从优秀素质出道前，${you.name} 就认为${nature.sex}适合跑中距离。${nature.sex}的尾段加速很精湛，该坚持时也能坚持住。`,
      );
      await era.printAndWait(
        '为了确保今后的经典赛战线，该选择的第一场战役是──',
      );
      era.printButton('「要不要去跑『青年骏马锦标』？」', 1);
      await era.input();
      await nature.say_and_wait('哦，原来如此啊。在公开赛见识一下实力是吗？');
      await nature.say_and_wait('没什么不好的吧？就这么办吧。');
      era.printButton('「那就一如往常地留下成绩吧」', 1);
      await era.input();
      await nature.say_and_wait(
        '要我一如往常……那不就等于叫我得第三名吗？我的目标可不是得第三名哦。',
      );
      await nature.say_and_wait('唉，虽然也有每次都能得第一名的怪物就是了……');
      await nature.say_and_wait(
        `……帝王打算怎么做呢？${nature.sex}会参加什么比赛呢？`,
      );
      await era.printAndWait(
        `东海帝王与优秀素质同时期出道，所以难免会令${nature.sex}在意。不过……`,
      );
      era.printButton('「最重要的是训练哦！」', 1);
      await era.input();
      await nature.say_and_wait(
        `我知道啦。我只是在想，如果不会碰上${nature.sex}就好了～那么，今后也请你多多照顾咯～`,
      );
      await era.printAndWait('于是，下次的目标就决定是「青年骏马锦标』了！');
    };
    f.title = title;
    return f;
  })(),
  ws_ny: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`${callname}，不写点新年题词吗？`);
      await era.printAndWait('优秀素质一边说着，一边递来毛笔和纸。');
      await era.printAndWait(
        '新年题词——即使将自己对新一年的期待和祝福寄托与纸上，因此，要写的是——',
      );
      era.printButton('「健康」（体力+300）', 1);
      era.printButton('「变强」（全属性+10）', 2);
      era.printButton('「多才」（技能点数+70）', 3);
      if (era.get('love:60') >= 75) {
        era.printButton('「多子」', 4);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            `健康啊……看来 ${callname} 也到这个年纪了呢腰酸背痛什么的很烦人对吧？${self_call} 懂的——`,
          );
          await nature.say_and_wait([
            '嗯？不是写给自己的？那是……？诶？！我？不、那个……',
            callname,
            '，比起自己更关注我啊……呜！说这种话就太犯规了！',
            callname,
            ' 也是我也是，都要健健康康地度过这新的一年啊！',
          ]);
          break;
        case 2:
          await nature.say_and_wait([
            '变强啊～',
            callname,
            '，意外地热血呢？还是说心理年龄比看上去的要……哈哈哈，开个玩笑……',
          ]);
          await nature.say_and_wait([
            '嗯？不是写给自己的？那是……？诶？！我？不、那个……',
            callname,
            '，比起自己更关注我啊……呜！说这种话就太犯规了！',
            callname,
            ' 也是我也是，都要快快乐乐地度过这新的一年啊！',
          ]);
          break;
        case 3:
          await nature.say_and_wait(
            `多才吗？确实呢，有更多才能的人也更会招${nature.child_sex_title}子喜欢对吧，${callname} 也到这个年龄了呢，也是时候该考虑考虑自己的${
              nature.sex
            }了……虽然这话由我说挺奇怪呢，哈哈哈哈……`,
          );
          await nature.say_and_wait([
            '嗯？不是写给自己的？那是……？诶？！我？不、那个……',
            callname,
            '，比起自己更关注我啊……呜！说这种话就太犯规了！',
            callname,
            ' 也是我也是，都要快快乐乐地度过这新的一年啊！',
          ]);
          break;
        case 4:
          await nature.say_and_wait(
            `多、多子么？${callname} 也真是的，一大早就开始说这么大胆的话题……不过要是 ${callname} 想的话……我也可以哦？要不然……就从现在开始吧？`,
          );
          await era.printAndWait(
            '面色绯红的优秀素质一步步向身前靠近，看来一场大战在所难免……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = '从「偶然」开始';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (nature, teio, you) => {
      await nature.say_and_wait('跑赢了……我……跑赢帝王了？');
      await nature.say_and_wait(
        '哈、哈哈……哈哈……！好棒，真的吗……！？是我赢了……',
      );
      await teio.say_and_wait('哎呀──我输了！');
      await nature.say_and_wait('……唔！帝王……！我──');
      await teio.say_and_wait('──我遇到变强的契机了！');
      await nature.say_and_wait('咦……');
      await teio.say_and_wait(
        '原来我还能变得更强啊！嘿嘿，我开始期待起来了──！',
      );
      await teio.say_and_wait('距离成为最强还差几公里呢？我要一口气狂奔赶上！');
      await nature.say_and_wait('啊……');
      await nature.say_and_wait('危险危险。我差点真的得意忘形起来了。');
      await nature.say_and_wait('不是的。我这次能跑赢……只是偶然。');
      await nature.say_and_wait('因为，不管怎么想──都是那孩子比较耀眼啊……');
      era.printButton('「你赢了呢，内恰！」', 1);
      await era.input();
      await nature.say_and_wait('……嗯。');
      era.printButton('「不开心吗？」', 1);
      await era.input();
      await nature.say_and_wait(
        '刚跑赢时当然很开心咯。虽然很开心……但这场胜利一定只是偶然。我不是靠实力赢的。',
      );
      era.printButton('「为什么会这么想？」', 1);
      await era.input();
      await nature.say_and_wait('因为……这不是很奇怪吗？我怎么可能比帝王还强。');
      await nature.say_and_wait(
        '这可是一点都不闪闪发光的我哦？一定有什么地方搞错了。──真是的！我竟然误会了，真是丢脸──！',
      );
      await era.printAndWait(
        `优秀素质确实胜利了。而且原因无疑是出自于${nature.sex}的实力。但${nature.sex}……`,
      );
      await nature.say_and_wait('……真的好丢脸。');
      await era.printAndWait(
        `跑赢却消沉得像是输了一样，是因为${nature.sex}还不能完全相信自己的实力。也就是自信心不足。既然如此，现在需要的是──`,
      );
      era.printButton('「内恰，要不要去远征？」', 1);
      await era.input();
      await nature.say_and_wait('远征……？咦？为什么……');
      era.printButton('「我们在夏天也留下成果吧」', 1);
      await era.input();
      await era.printAndWait(
        `现在让${nature.sex}站上经典赛战线比赛会是场危险的赌博。可能会害${nature.sex}失去目前仅剩的一点自信。那还不如挑战地方竞赛，稳健地留下成绩，这样最后应该能引导${nature.sex}的成长才对。`,
      );
      await nature.say_and_wait(
        '也就是说……目标不是『皋月赏』，也不是『日本德比』……？……因为我实力还不足。',
      );
      era.printButton('「现在就别焦急，先确认自己真的变强了吧」', 1);
      await era.input();
      await nature.say_and_wait('……我知道了。');
      await nature.say_and_wait(
        '说得也是。现在我这个样子，就算下次又跑赢……我也很难接受。',
      );
      era.printButton('「只要能克服这个夏天，一定能变强」', 1);
      await era.input();
      await nature.say_and_wait('……希望是这样咯。');
      await era.printAndWait('说完，优秀素质长舒一口气');
      await nature.say_and_wait(
        '嗯，OKOK！各地巡回演出应该也很适合我。然后呢？该不会真的要让我一直到处各地巡回吧？你决定好到底要跑哪一场比赛了吗？',
      );
      era.printButton('「『小仓纪念』怎么样？」', 1);
      await era.input();
      await era.printAndWait(
        '在小仓举办的重赏比赛。要帮助优秀素质提升自信，这是最适合不过的竞赛了。',
      );
      await nature.say_and_wait(
        '原来如此，我记得距离也跟青年骏马锦标一样对吧？嗯，就去那里吧。不过，夏天去小仓吗……感觉会热倒耶……',
      );
      await era.printAndWait([
        '就这样，',
        you.get_colored_name(),
        ' 和 ',
        nature.get_colored_name(),
        ' 决定下次的目标就是「小仓纪念」！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  waka_sta_lose: (() => {
    const title = '即使输了，夏天仍会到来';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, teio, you, callname, self_call) => {
      await nature.say_and_wait('呼……呼……呼……');
      await nature.say_and_wait(
        `……嗯，还不错哦，${self_call}，的确留下成果了──`,
      );
      await era.printAndWait('？？？「哇啊啊啊啊啊……！！」');
      await nature.say_and_wait('……咦！？这声音是怎么了──');
      await teio.say_and_wait(
        '我的实力还不只这样哦！接下来也要紧盯我的活跃表现哦！我跟你们约好，会继续不断超越你们的想像！下次见咯！谢谢大家♪',
      );
      await era.printAndWait('？？？「哇啊啊啊啊啊……！！」');
      await nature.say_and_wait('…………');
      await nature.say_and_wait('气氛被炒得超热耶。真不愧是帝王──');
      await nature.say_and_wait(
        '……我真是蠢。竟然说要挑战那种对手。而且我果然还是只有这种程度啊。未免太不知天高地厚了。我真的好蠢……',
      );
      await nature.say_and_wait('……啊──帝王……真是耀眼……');
      era.drawLine();
      await nature.say_and_wait(
        `──啊，${callname}……，那个……${self_call} 比完回来了──`,
      );
      era.printButton(`「你能紧咬住${nature.sex}真是厉害」`, 1);
      await era.input();
      await nature.say_and_wait(
        '哈哈──好了啦，不用这样安慰我。而且你看，我有好好达成你的要求了吧？',
      );
      await nature.say_and_wait(
        '『一如往常』地留下结果。嗯，我有做好我的工作了。',
      );
      await nature.say_and_wait(
        '……所以啊，竟然还想向上挑战，简直就是多此一举啊。要是没去想什么挑战，就真的一切都跟往常一样了。',
      );
      await nature.say_and_wait(
        '……包含我的心情也是。真是的──我离闪闪发光还太远了啦──',
      );
      await era.printAndWait(
        `实际上${nature.sex}说得没错，这次的成果相当不错。尽管不是第一名，还是可以更正向地看待这次的成绩。`,
      );
      await nature.say_and_wait('……唉。');
      await era.printAndWait(
        `但${nature.sex}却如此消沉。主要原因可能是${nature.sex}原本就比较没自信。既然如此，现在需要的是──`,
      );
      era.printButton('「内恰，要不要去远征？」', 1);
      await era.input();
      await nature.say_and_wait('远征……？咦？为什么……');
      era.printButton('「我们在夏天也留下成果吧」', 1);
      await era.input();
      await era.printAndWait(
        `现在让${nature.sex}站上经典赛战线比赛会是场危险的赌博。可能会害${nature.sex}失去目前仅剩的一点自信。那还不如挑战地方竞赛，稳健地留下成绩，这样最后应该能引导${nature.sex}的成长才对。`,
      );
      await nature.say_and_wait(
        '也就是说……目标不是『皋月赏』，也不是『日本德比』……？……因为我实力还不足。',
      );
      era.printButton('「现在就别焦急，先确认自己真的变强了吧」', 1);
      await era.input();
      await nature.say_and_wait('……我知道了。');
      await nature.say_and_wait(
        '说得也是。现在我这个样子，就算下次又跑赢……我也很难接受。',
      );
      era.printButton('「只要能克服这个夏天，一定能变强」', 1);
      await era.input();
      await nature.say_and_wait('……希望是这样咯。');
      await era.printAndWait('说完，优秀素质长舒一口气');
      await nature.say_and_wait(
        '嗯，OKOK！各地巡回演出应该也很适合我。然后呢？该不会真的要让我一直到处各地巡回吧？你决定好到底要跑哪一场比赛了吗？',
      );
      era.printButton('「『小仓纪念』怎么样？」', 1);
      await era.input();
      await era.printAndWait(
        '在小仓举办的重赏比赛。要帮助优秀素质提升自信，这是最适合不过的竞赛了。',
      );
      await nature.say_and_wait(
        '原来如此，我记得距离也跟青年骏马锦标一样对吧？嗯，就去那里吧。不过，夏天去小仓吗……感觉会热倒耶……',
      );
      await era.printAndWait([
        '就这样，',
        you.get_colored_name(),
        ' 和 ',
        nature.get_colored_name(),
        ' 决定下次的目标就是「小仓纪念」！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ss_1: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '从今天开始「夏季集训」──为了提升实力的强化训练即将展开。',
      );
      await nature.say_and_wait('好热……');
      await nature.say_and_wait(
        '太阳公公真是有精神。对于活在阴影里的我来说太过耀眼了……',
      );
      await nature.say_and_wait('害我瞬间就开始担心自己能不能平安撑到最后了。');
      era.printButton('「还得参加「小仓纪念」，非加油不可啊」', 1);
      await era.input();
      await nature.say_and_wait(
        '不是啦，问题就在这啊。竟然要在集训中途去比赛，行程也太丰富了。',
      );
      await nature.say_and_wait('这里离小仓又那么远，交通时间会让训练量减少……');
      await nature.say_and_wait('我会被原本就远在天边的那些选手们狠狠甩开的──');
      era.printButton('「那我们一路冲刺到小仓吧！」', 1);
      await era.input();
      await nature.say_and_wait(
        '啊，不错耶不错耶！跑过去还可以当作训练，一石二鸟。',
      );
      await nature.say_and_wait(
        '反正再远也不过1000公里左右吧？好的好的，轻轻松松──',
      );
      await nature.say_and_wait('哪有可能这样说啊──不要突然出馊主意啊。');
      await nature.say_and_wait('我看你这个训练员其实很期待吧……');
      await era.printAndWait(
        `于是 ${you.name} 与优秀素质的热血夏季集训就这么开始了。`,
      );
      await nature.say_and_wait('啊，还请适度热血就好，那麻烦多指教咯──');
    };
    f.title = title;
    return f;
  })(),
  koku_kin: (() => {
    const title = '即使是镀金';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait(
        `嘿嘿……我做到了喔，${callname}。我确实留下成果了！`,
      );
      era.printButton('「做得很好！」', 1);
      await era.input();
      await nature.say_and_wait('嗯！');
      await nature.say_and_wait(
        '呵呵……那个啊，小仓商店街的大家也来看我了。我们才聊过一两句而已喔？明明他们应该也很忙的……',
      );
      await nature.say_and_wait(
        '……看到他们这么支持我，让我开始觉得这样也不错。我只要以自己的作风，一步一步……慢慢前进就好了，对吧？',
      );
      await nature.say_and_wait('就算不知道有没有到达的一天……');
      await nature.say_and_wait(
        `……那个，${callname}。我要开始说有点逊的事了。`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await nature.say_and_wait('……我能赢过帝王吗？');
      await nature.say_and_wait('……说笑的啦！我开玩笑的，你还是忘记吧──');
      era.printButton('「你可以的」', 1);
      await era.input();
      await nature.say_and_wait('……哎呀……啊呜。');
      await nature.say_and_wait(`……嗯，我就知道 ${callname} 一定会这么说。`);
      await nature.say_and_wait('明明知道答案还是要问，对，我很卑鄙。但是……');
      await nature.say_and_wait('因为要是没人来推我一把，我就无法前进啊。');
      await nature.say_and_wait(
        `……帝王正在经典之道上冲刺，这样看来，下次${nature.sex}一定──会以『菊花赏』为目标。`,
      );
      await nature.say_and_wait(
        '所以我下次也……想在『菊花赏』上……奔驰。你觉得……怎么样……？',
      );
      era.printButton('「距离会增长不少，没问题吧？」', 1);
      await era.input();
      await era.printAndWait(
        `菊花赏』是3000米的竞赛。跟这次参加的小仓纪念比起来，距离多了1000米。对优秀素质来说或许会是场艰难的战役。但既然${nature.sex}已经下定决心……！`,
      );
      await nature.say_and_wait(
        '当然了，想必问题会很大。因为我大概不擅长跑那么长的距离。',
      );
      await nature.say_and_wait('不过……我这次不想退缩。──去参加『菊花赏』吧！');
      era.printButton('「好！」', 1);
      await era.input();
      await nature.say_and_wait('唉～～～决定了。真的决定了。');
      await nature.say_and_wait(
        '内恰哟，你已经无路可逃咯。要在大型竞赛上直接对决了……',
      );
      await nature.say_and_wait('不过……嗯。这样也不错……吧？');
      await era.printAndWait(
        `……虽然${nature.sex}似乎稍微找回一点自信了，但为了迎战「菊花赏』，${you.name} 应该还能为${nature.sex}做点什么。${you.name} 思考这些事时，想起来的是──`,
      );
      await nature.used_to_say_and_wait(
        '不管我跑出什么成绩，大家都会为我开心。',
      );
      await nature.used_to_say_and_wait(
        '都会笑着称赞我很努力。但我自己完全不确定。',
      );
      await nature.used_to_say_and_wait(
        '嗯……我真的说不出我很努力了啊──比如说，第一名就很明确对吧？会得到奖杯啊，天皇赏的话就是盾形奖牌之类的。',
      );
      await nature.used_to_say_and_wait(
        '看到那些就会觉得，是啊，我真的很努力。',
      );
      await nature.used_to_say_and_wait('……但这种心情是第一名才有的特权。');
      await era.printAndWait(
        `……${you.name} 应该还能为${nature.sex}做些什么事！`,
      );
      await era.printAndWait('──于是，从小仓回到中央的路上……');
      await nature.say_and_wait('啊，训练员。我可以拿放在你那里的点心吗──？');
      await nature.say_and_wait(
        '小仓的大家不是有送我们日式点心吗？我想说搭新干线的时候可以吃──',
      );
      era.printButton('「我知道了」', 1);
      await era.input();
      await era.printAndWait('（咖沙咖沙……飘落）');
      await nature.say_and_wait('啊，有东西快掉了喔。');
      await nature.say_and_wait('……用纸折成的奖杯……吗？看起来歪歪扭扭的。');
      era.printButton('「……这是，我做的」', 1);
      await era.input();
      await nature.say_and_wait(
        '哦～训练员做的？呵呵──原来你有这么可爱的兴趣～',
      );
      era.printButton('「我想做来送给内恰你的」', 1);
      await era.input();
      await nature.say_and_wait('这样啊……');
      await nature.say_and_wait('咦！？送我！？为什么……？');
      era.printButton('「我想让你建立自信」', 1);
      await era.input();
      await nature.say_and_wait('自信……');
      await you.say_and_wait(
        '我懂那种无论跑出什么成果，都难以对自己有自信的心情。',
      );
      await you.say_and_wait(
        '这样的话，如果将累积的成绩化为实体，是否就能建立一点自信了呢？',
      );
      await nature.say_and_wait('……为了我……特地做的……');
      await nature.say_and_wait(
        '……也就是说，你这么大一个人，在酒店里不断埋头尝试后做出了奖杯？',
      );
      await nature.say_and_wait('我可不是小学生喔。');
      era.printButton('「说的也是啦……」', 1);
      await era.input();
      await era.printAndWait(
        `……没错。虽然做是做了，但这样简直就像把${nature.sex}当小孩子看待，所以 ${you.name} 很犹豫是否该送出去……`,
      );
      await nature.say_and_wait('……呵呵。');
      await nature.say_and_wait('真是拿你没办法呢。我就为了你收下吧。');
      era.printButton('「诶？」', 1);
      await era.input();
      await nature.say_and_wait('咦？你为什么要惊讶？那不是特地做给我的吗？');
      await nature.say_and_wait('好啦好啦，快点拿来吧。不拿来我就不回去喔。');
      era.printButton('「你愿意收下吗？」', 1);
      await era.input();
      await nature.say_and_wait('……因为啊……');
      await nature.say_and_wait('因为歪歪扭扭的奖杯，不就正好适合我吗？');
      await nature.say_and_wait(
        '像镀上去的金色、边角歪掉的感觉之类的。这些……不全都很像我吗？',
      );
      await nature.say_and_wait(
        '总觉得有股亲近感？之类的……嗯，所以呢，也就是说。──谢谢你。',
      );
      await nature.say_and_wait('……我很期待下一个奖杯你会做得更～好喔。');
      era.printButton('「下一个！？」', 1);
      await era.input();
      await nature.say_and_wait(
        '因为我还会继续比赛啊。也请训练员多多加油咯！我也会在比赛中加油的。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_se: (() => {
    const title = '夏季集训结束';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {string} callname 优秀素质对玩家的称呼
     */
    const f = async (nature, callname) => {
      await era.printAndWait(
        '今天是夏日合宿的最后一天。作为留念，学园组织了一场盛大的烟火表演',
      );
      await era.printAndWait(
        '和优秀素质一起，肩并肩站在海滩上，看着一朵朵烟花在海面上绽放',
      );
      await nature.say_and_wait(
        `——夏天，结束了呢。怎么说呢，真是青春啊——但我又不是那种形象就是了。不过，${callname}——`,
      );
      await era.printAndWait(
        `身旁的优秀素质感叹着，但烟花的爆破声让${nature.sex}的声音听着模糊不清。`,
      );
      await era.printAndWait(
        `尝试着追问${nature.sex}最后的话语，但却被优秀素质微微的一笑一笔带过。`,
      );
      await era.printAndWait('与优秀素质的夏日合宿，就这样结束了。');
    };
    f.title = title;
    return f;
  })(),
  s_a_47_33: (() => {
    const title = '下定决心努力前行！';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        `听说有人在河岸边看到优秀素质，于是 ${you.name} 过去找${nature.sex}──`,
      );
      await nature.say_and_wait('呼、呼……呼……');
      await nature.say_and_wait('不行，奔跑的时候……要多动动脑袋……');
      await nature.say_and_wait(
        '还有士气。内恰，你变消沉了。别沮丧，振作一点～',
      );
      await nature.say_and_wait('想起来、快想起来。我是怎么奔跑的？');
      await nature.say_and_wait(
        '只要保持自己的作风，一步一步……慢慢前进就好了，对吧。',
      );
      await nature.say_and_wait('就算不知道有没有到达的一天……');
      await nature.say_and_wait('……我也要竭尽所能，勇敢面对。');
      await nature.say_and_wait('虽然还不算是能抬头挺胸，有自信地面对比赛……');
      await nature.say_and_wait('但我没得逃避。所以，我一定要跟帝王──');
      era.printButton('「内恰你一定办得到」', 1);
      await era.input();
      await nature.say_and_wait(`啊……${callname} 真是的，动不动就这么宠我～`);
      await nature.say_and_wait('这可不行喔～这样会被我这样的人缠住不放的……');
      era.printButton('「自主练习辛苦了！」', 1);
      await era.input();
      await nature.say_and_wait('唔哇！你、你什么时候来的！？');
      await nature.say_and_wait(
        '啊……算了，不必说出来。知道的话，大概会胸口堵堵的。',
      );
      era.printButton('「刚才做的是什么训练？」', 1);
      await era.input();
      await nature.say_and_wait('……要说是训练的话，也算是吧。');
      await nature.say_and_wait(
        '我想要稍微磨练赢得胜利的力量，找出适合自己的武器。',
      );
      await nature.say_and_wait('关键还是在于终点前。必须好好把握最后的直线。');
      await nature.say_and_wait(
        '以这个为前提的3000米……哈哈。这么一想，真的很长呢。',
      );
      await era.printAndWait(
        '3000米……若不抓准进攻时机，要在直线决定胜负恐怕也很难。',
      );
      await era.printAndWait(
        `${you.name} 希望优秀素质可以惬意地奔跑。能在比赛结束后，露出一如往常的开朗笑容。`,
      );
      await nature.say_and_wait(`${callname}？`);
      era.printButton('「加油吧！」', 1);
      await era.input();
      await nature.say_and_wait('什么？');
      await nature.say_and_wait('加油……好随便的建议……');
      era.printButton('「不，刚才那是……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}本来是要鼓励自己的，却不小心脱口而出。`,
      );
      await nature.say_and_wait(
        '噗，呵呵呵……啊哈哈哈！讨厌啦！别一副『完蛋了』的表情嘛。',
      );
      await nature.say_and_wait('呼……嗯，你说得对，加油吧。');
      await nature.say_and_wait('既然没办法逃避，就只能勇往直前。');
      await nature.say_and_wait(`${callname}，现在可以陪我一下吗？`);
      await nature.say_and_wait(
        `${self_call} 会加油的。若你能在一旁关注着我，我会很开心的。`,
      );
      era.printButton('「我才要请你多多指教」', 1);
      await era.input();
      await nature.say_and_wait('哈哈，你真的很上道。');
      await nature.say_and_wait('好，那就来吧！');
      await nature.say_and_wait('越是努力，越有望拿下训练员奖杯喔？');
      era.printButton('「……我会精进自己的」', 1);
      await era.input();
      await nature.say_and_wait('啊哈哈哈哈！');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho: (() => {
    const title = '自己的比赛';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     */
    const f = async (nature, you) => {
      await era.printAndWait('观众「优秀素质，辛苦了──！你跑得很精彩哦──！」');
      await era.printAndWait(
        '竞赛结束后，从观众席传来的讨论声，证明优秀素质跑出了「属于自己的比赛」。而且──',
      );
      await nature.say_and_wait(
        '训练员，我……我赢了……我的确跑出了属于自己的比赛……对吧？',
      );
      era.printButton('「嗯！」', 1);
      await era.input();
      await nature.say_and_wait('太好了……嘿嘿。');
      await nature.say_and_wait(
        '在『菊花赏』能交出这种成果，已经无可挑剔了！我真的很努力了！',
      );
      await nature.say_and_wait('你今天也有为我准备……歪歪扭扭的奖杯吗？');
      era.printButton('「当然，这是『你努力了奖』！」', 1);
      await era.input();
      await nature.say_and_wait('啊……训练员亲手做的奖杯！');
      await era.printAndWait(
        `「小仓纪念』时，为了让优秀素质建立自信，${you.name} 做了折纸奖杯送${nature.sex}。因为之前${nature.sex}很期待，所以 ${you.name} 这次又做了……`,
      );
      await nature.say_and_wait('……你真的做了啊？嘿嘿，还是做得歪歪扭扭的。');
      await nature.say_and_wait('很好很好。等一下来举办颁奖典礼吧。');
      await nature.say_and_wait(
        `当作庆祝素质${nature.sex_code === 1 ? '' : '小姐'}的活跃表现♪`,
      );
      await nature.say_and_wait(
        `……虽然现在可以这样得意忘形，但要是帝王也有参赛，可能就不会这么顺利了……帝王${nature.sex}没事吧？不知道伤势有多严重。`,
      );
      era.printButton(`「${nature.sex}一定没问题的」`, 1);
      await era.input();
      await nature.say_and_wait('嗯……也对呢。');
      await nature.say_and_wait(
        `毕竟${nature.sex}是帝王啊。一定很快就能复活，然后还会说什么『我可是无敌的哦！』`,
      );
      await nature.say_and_wait('……在那之前我可要再变强点才行呢。');
      era.printButton('「还有一场大对决在等着呢」', 1);
      await era.input();
      await nature.say_and_wait(
        '什么？冬天都快到了，最近还有大对决？……啊！你该不会是指……',
      );
      era.printButton('「你不挑战『有马纪念』吗？」', 1);
      await era.input();
      await era.printAndWait(
        `优秀素质拥有坚定的忠实粉丝，也在『菊花赏』确实发挥出实力，现在的${
          nature.sex
        }一定能够挑战『有马纪念』！不仅如此，『有马纪念』的参赛者都是今年倍受瞩目的各位赛${nature.uma_sex_title}。跟${
          nature.couple_title
        }一起比赛一定能带来更多成长。`,
      );
      await nature.say_and_wait('『有马纪念』吗……');
      await nature.say_and_wait(
        '想要回报大家平时的支持，这是最适合的舞台……对吧？',
      );
      await nature.say_and_wait(
        '……或许我根本办不到。搞不好就算参赛也完全无法发挥，但是……',
      );
      await nature.say_and_wait('──我想参加『有马纪念』！');
      era.printButton('「那就去挑战吧！」', 1);
      await era.input();
      await era.printAndWait(
        `于是，${you.name} 和优秀素质决定经典级最后一场挑战就是『有马纪念』了！`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「还有……这个也是贺礼」', 1);
        await era.input();
        await nature.say_and_wait('诶？什么什么？');
        await era.printAndWait(
          '没有立刻回答优秀素质的疑问，而是反手锁上了休息室的门',
        );
        era.printButton('「是我们家族优选的祖传染色体哦」', 1);
        await era.input();
        await nature.say_and_wait(
          '……诶？等等等等等下？是要在这做吗？这里可是休息室诶！',
        );
        await era.printAndWait(
          `看见 ${you.name} 突然开始宽衣解带，优秀素质的俏脸刷的一下涨红了，连连缩向沙发后面。`,
        );
        era.printButton(
          '「没事的，这里隔音好得很，不会有人来打搅我们的……你也应该很想要了吧？」',
          1,
        );
        await era.printAndWait(
          `刚刚结束比赛的${nature.uma_sex_title}，身体会不断散发出由于高速冲刺而产生的大量热量，因而会产生一种接近发情的状态，眼下的情况正是如此，哪怕是厚如决胜服下的安全裤，现在也已能略见湿润`,
        );
        await nature.say_and_wait('但……但是，身上会有汗臭——');
        era.printButton('「内恰的汗怎么会臭？倒不如说就好这口！」', 1);
        await era.input();
        await era.printAndWait(
          `不等优秀素质再说下去，${you.name} 便将优秀素质按倒在沙发上，双手探入决胜服中，而优秀素质也很快便不再反抗，将身体委于 ${you.name} 摆弄……`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  s_a_47_42: (() => {
    const title = '王座的背后';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     */
    const f = async (nature, teio, luna, maya, you, callname) => {
      await era.printAndWait(
        `在 ${you.name} 和优秀素质为了准备下个目标「有马纪念」，持续进行训练的某一天……`,
      );
      await nature.say_and_wait(
        `仰卧推举结束～${callname}，我可以稍微休息一下吗？`,
      );
      era.printButton('「好啊」', 1);
      await era.input();
      await nature.say_and_wait('那我小歇个10分钟。');
      await teio.say_and_wait('呼……呼……！还剩三组……！');
      await nature.say_and_wait('嗯？那是……');
      await era.printAndWait(
        `${you.name} 顺着优秀素质的视线看去，东海帝王正在努力投入训练。${teio.sex}似乎正在使用能辅助身体的特殊机器……`,
      );
      await maya.say_and_wait('啊，是内恰酱～♪一起休息吧──！');
      await nature.say_and_wait(
        '哦──重炮，你来得正好。你看那边，帝王在做什么啊？',
      );
      await maya.say_and_wait(
        `${teio.sex}是在复健哦──！${teio.sex}的伤有点严重呢。`,
      );
      await nature.say_and_wait('咦……');
      await maya.say_and_wait('毕竟小帝王之前在床上躺了满久的嘛──');
      await nature.say_and_wait('这样啊……');
      await teio.say_and_wait(
        '……好痛，脚好沉重～～！是不是有点努力过头了啊──？',
      );
      await luna.say_and_wait('帝王，看来你正在奋发向上呢。');
      await teio.say_and_wait(
        '哇啊，是会长！当然了，我状态绝佳地在努力哦！……虽然我是很想这样说啦，但其实我离状态绝佳应该还很远。',
      );
      await teio.say_and_wait(
        '不过，我已经可以看到完全复活之路了！应该能变得比以前更强哦♪',
      );
      await luna.say_and_wait('唔……我还以为你会劈头就要我称赞你的努力呢……');
      await teio.say_and_wait('咦──我才不会要求那个！我比较想在跑赢时被称赞！');
      await teio.say_and_wait(
        '因为努力是理所当然的嘛！我也不能一直被困在这里。',
      );
      await teio.say_and_wait(
        '不快点治好的话就不能奔跑。不奔跑的话……就追不上会长了。不是吗？',
      );
      await luna.say_and_wait(
        '……原来如此。是我失礼了。看来我之前小看了你的精神力。',
      );
      await luna.say_and_wait(
        '现在是实力稳定，身心都很充实的时期。在此时受伤，就连我都会感到痛苦。',
      );
      await teio.say_and_wait(
        '……所以你跑来鼓励我吗？嘿嘿。会长真是的，你以为我是谁啊？',
      );
      await teio.say_and_wait(
        '无论比赛还是演唱会都大活跃！比谁都快、都强、都帅气。',
      );
      await teio.say_and_wait(
        '我……吾可是无敌的帝王大人哦！无论发生什么事都能轻松克服！',
      );
      await luna.say_and_wait('呵……说得也是呢。我很期待哦，东海帝王！');
      await teio.say_and_wait('嗯！');
      await nature.say_and_wait(`……${teio.sex}是不是比之前更闪亮了啊？`);
      await nature.say_and_wait(`该说是这次的碰壁让${teio.sex}变得更强了吗……`);
      await nature.say_and_wait('我这种小路人……就算碰壁也只会胡思乱想而已。');
      await nature.say_and_wait(
        `……但${teio.sex}却能轻易地重新振作。不愧是主角，格局就是不一样。`,
      );
      await maya.say_and_wait(
        `嗯──算轻易吗？小帝王${teio.sex}当时哭得很惨哦。`,
      );
      await nature.say_and_wait('咦……？');
      await maya.say_and_wait(
        `毕竟那时${teio.sex}无法参加重要的竞赛嘛。当时${teio.sex}看起来真的很痛苦呢。`,
      );
      await nature.say_and_wait('……这……这样啊。那个帝王竟然……');
      await era.printAndWait('之后的训练中，优秀素质看起来若有所思。');
      await era.printAndWait(
        `──而在训练结束后，${teio.sex}缓缓地对 ${you.name} 说出了自己的心情。`,
      );
      await nature.say_and_wait(
        '……我一直以来都误解了。不对，我可能是……故意这么误解的。',
      );
      await nature.say_and_wait(
        `因为帝王是主角，所以才会那么强。因为${teio.sex}天生就很有才华。因为${teio.sex}从一开始就备受眷顾。`,
      );
      await nature.say_and_wait(
        `${teio.sex}当然会跟我这种路人不一样。我一直用这种想法保护弱小的自己。`,
      );
      await nature.say_and_wait('不过……其实我错了。帝王跟我都是一样的。');
      await nature.say_and_wait(
        `${teio.sex}也可能再怎么努力都跑不赢、也会受伤……而且${teio.sex}也知道其中的痛苦之处。`,
      );
      await nature.say_and_wait(
        `${teio.sex}跟我不一样的是……遇到打击之后的反应。能靠着自己重新站起来，就是${teio.sex}的坚强之处。`,
      );
      await nature.say_and_wait(
        '……真是的，事到如今我还是觉得可怕。我之前竟然认为自己能赢过那么强的孩子。',
      );
      await nature.say_and_wait(
        '我这种人，既没毅力也没勇气，却只会看着前面的人，嘴里说着不公平。',
      );
      await nature.say_and_wait(
        '──我以为自己无法站上那个舞台，但明明是我自己走下台的。',
      );
      await nature.say_and_wait('我不知好歹、贪得无厌、只会撒娇。但是、但是……');
      era.printButton('「即使如此还是想跑赢」', 1);
      await era.input();
      await nature.say_and_wait('……嗯。');
      await nature.say_and_wait('既然我跟那孩子还有那么一点共同点，那我也……');
      await nature.say_and_wait('那我也……！');
      await era.printAndWait(
        `虽然${teio.sex}没再继续说下去，但那充满决心的双眼已经说明了一切。`,
      );
      era.printButton('「要赢哦！」', 1);
      await era.input();
      await nature.say_and_wait('──嗯！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_classical: (() => {
    const title = '远望';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     */
    const f = async (nature, you) => {
      await nature.say_and_wait('跑、跑赢了……！我在『有马纪念』赢了……');
      era.printButton('「恭喜你！」', 1);
      await era.input();
      await nature.say_and_wait('训练员！我跟你说，我……！');
      await nature.say_and_wait('我都听到了。听到大家替我加油的声音！');
      await nature.say_and_wait('听起来很像在骗人吧？但是，是真的！');
      await nature.say_and_wait(
        '明明平常都只能听见自己的心跳声、呼吸声、还有风吹声而已。',
      );
      await nature.say_and_wait(
        '但今天……我清楚地听到加油声了。我听到了『内恰，加油啊』的呼声！',
      );
      await nature.say_and_wait(
        '因为这样，体力快用完的时候我才能撑住。我真的……跑得很开心！',
      );
      await era.printAndWait(
        `优秀素质与支持者之间有着深刻的情感。看来对${nature.sex}来说，今天的『有马纪念』是一场特别的比赛。`,
      );
      await nature.say_and_wait('我还想继续跑。明年……也想站上这个舞台！');
      await nature.say_and_wait('……呃，我这笨蛋！太心急了吧！');
      await nature.say_and_wait('但是我真的跑得很开心啊……（扭捏）');
      await era.printAndWait(
        '确实，现在就把目标订为明年的『有马纪念』，似乎还有点太早了。如果想在这之间安排一场能保持目前动力的竞赛……',
      );
      era.printButton('「还有『宝冢纪念』啊！」', 1);
      await era.input();
      await nature.say_and_wait(
        '『宝冢纪念』……是以粉丝投票选出参赛者的竞赛对吧？跟『有马纪念』一样……',
      );
      await nature.say_and_wait(
        '但我好像在这种比赛中能表现得更好呢。嗯，我想参加……『宝冢纪念』！',
      );
      await era.printAndWait(
        `虽然如此，距离这场竞赛还稍微有点时间。于是${you.name}和优秀素质决定这期间要参加各种比赛，为了挑战『宝冢纪念』而不断成长。`,
      );
      await nature.say_and_wait(
        '我们两个是不是都太心急了？竟然在这里决定起接下来的比赛──',
      );
      await era.printAndWait('商店街的大家「内恰──！你跑得很好呢──！」');
      await era.printAndWait(
        `商店街的大家「你是世界第一的赛${nature.uma_sex_title}！你是我们的骄傲──！」`,
      );
      await nature.say_and_wait(
        '等一下，大、大家……！太大声了啦，这里又不是店里！',
      );
      await nature.say_and_wait(
        '还有，说什么世界第一，太夸张了啦！真是的，真是难为情！',
      );
      await nature.say_and_wait('真是的……嘿嘿。');
      era.printButton('「现在就坦率地感到开心吧」', 1);
      await era.input();
      await nature.say_and_wait(
        '那对我来说就是最难的啦！你明明很清楚的。不过，现在……是吧。嗯，就是啊。',
      );
      await nature.say_and_wait(
        '该趁现在……尽情开心才行。因为并不是一切就到此结束了。',
      );
      await era.printAndWait(
        `优秀素质小声地说着这些话，望向一起跑完『有马纪念』的赛${nature.uma_sex_title}们……`,
      );
      await nature.say_and_wait('你今天也有为我准备……歪歪扭扭的奖杯吗？');
      era.printButton('「当然！」', 1);
      await era.input();
      await nature.say_and_wait('……嘿嘿。谢谢你。那……得先开检讨会议呢。');
      await nature.say_and_wait(
        '我光在意自己与帝王间的差距，完全忘记还有其他竞争对手。',
      );
      await nature.say_and_wait(
        '今天的比赛让我认知到这件事了。要是稍微有一点松懈，我应该就会跑输了。',
      );
      await nature.say_and_wait(
        '就算现在可能还跑得赢……但今后周围的选手还会越来越强。',
      );
      await nature.say_and_wait('不能再这样下去了。现在不能光喊着要赢过帝王。');
      await era.printAndWait(
        `看来借着参加各世代选手互相竞争的『有马纪念』，让${nature.sex}的视野更加宽广了……这是成长的证明！`,
      );
      await nature.say_and_wait('我得更加了解自己周遭的选手才行……！');
      if (era.get('love:60') >= 75) {
        era.printButton('「还有，这是惯例的那个——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  o_s_95_10: (() => {
    const title = '内恰 in 目白';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} ryan 目白莱恩
     * @param {CharaTalk} you 玩家
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await era.printAndWait('今天优秀素质不会出现。因为──');
      await era.printAndWait(
        '「有马纪念」后，优秀素质向目白麦昆与目白莱恩请教了实力如此坚强的原因。',
      );
      await era.printAndWait(
        `今天${nature.sex}受到两位邀请，去学习坚强的原因了。──或许可以说是去目白家留学一天吧。`,
      );
      await era.printAndWait(
        `优秀素质个性很认真。${nature.sex}一定会带着收获回来吧。${you.name} 这么相信着，决定默默等${nature.sex}回来──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait(
        '──刚刚那杯大吉岭茶果然连香味都不一样。滋味相当丰富。',
      );
      await ryan.say_and_wait(
        '据说从头到尾都是手工制茶呢！专家的技术果然值得信任。',
      );
      await nature.say_and_wait('……请问──这是什么状况？为什么在喝茶？');
      await nature.say_and_wait('我还以为我们会去训练赛道……');
      await mcqueen.say_and_wait(
        '喝完后当然会去。不过品尝红茶也是例行公事的一部分。',
      );
      await nature.say_and_wait('例行公事……？');
      await mcqueen.say_and_wait('今天我们想让内恰同学看看我们平常的样子。');
      await ryan.say_and_wait('就是这样！不过时间也差不多了，我们去训练吧！');
      await nature.say_and_wait('啊，好、好的……！');
      era.drawLine();
      await mcqueen.say_and_wait('呼……呼……呼……');
      await ryan.say_and_wait('欢迎回来，麦昆！接下来要做什么？');
      await mcqueen.say_and_wait('……当然是再跑一圈了。');
      await mcqueen.say_and_wait(
        '跟刚刚比起来，第十圈的速度有点变慢了……对吧？',
      );
      await ryan.say_and_wait('啊哈哈！好啊，就跑到你满意为止吧！');
      await mcqueen.say_and_wait('是，我出发了！');
      await nature.say_and_wait('呼……呼……呼啊……！');
      await ryan.say_and_wait('哦，内恰，欢迎回来！麦昆正好刚起跑呢！');
      await nature.say_and_wait(`我看到了……${mcqueen.sex}还要继续跑吗……！？`);
      await ryan.say_and_wait(
        `与其说还要，应该说是还不满足？毕竟${mcqueen.sex}说『想提升速度』嘛`,
      );
      await nature.say_and_wait(
        `${mcqueen.sex}的持久力明明都那么优秀了，竟然还想更加精进吗……`,
      );
      await ryan.say_and_wait(
        `……我想麦昆${mcqueen.sex}啊，无论再怎么强，都不会满足于目前的自己。`,
      );
      await ryan.say_and_wait(
        `那孩子的目标就是如此高远。所以${mcqueen.sex}才会一直努力不懈。`,
      );
      await ryan.say_and_wait('一直看着那样的身影，会觉得自己也该加油呢。');
      await nature.say_and_wait('……唔～～～～我也再去跑……！');
      await ryan.say_and_wait('啊哈哈哈！真是不服输！路上小心哦──！');
      era.drawLine();
      await nature.say_and_wait('──今天非常感谢两位！');
      await ryan.say_and_wait('哎呀──结果害你这一整天都在陪我们训练了呢。');
      await nature.say_and_wait('不，这样正好！');
      await nature.say_and_wait('……我终于明白了。我过去真的都只想着自己呢──');
      await nature.say_and_wait(
        '你们两位都好好地看着对方。互相认可对方的强劲，互相竞争。',
      );
      await nature.say_and_wait('但是我……却只会妄想获得别人的那份坚强。');
      await nature.say_and_wait(
        '我老是只看着自己不足的地方……从没想过自己有哪些才能。',
      );
      await mcqueen.say_and_wait('……所以？');
      await nature.say_and_wait(
        '我打算更认真地正视这些事。正视其他人……也正视自己。',
      );
      await ryan.say_and_wait('嗯，很好！这一定会成为内恰变强的助力！');
      await nature.say_and_wait('那个……最后可以再请教一件事吗？');
      await nature.say_and_wait('为什么两位愿意帮我的忙呢？');
      await mcqueen.say_and_wait('……因为我们有贵族义务啊。');
      await ryan.say_and_wait('噗哈！你在掩饰害羞吗？');
      await ryan.say_and_wait(
        '真正的原因呢，是想跟坚强的你对决，好让自己变得更强！',
      );
      await ryan.say_and_wait('──因为我们也打算参加下一次的『宝冢纪念』嘛！');
      await nature.say_and_wait('……唔！');
      await mcqueen.say_and_wait('呵呵，表情很棒呢。那么下次就在阪神再见啦。');
      await nature.say_and_wait('嗯……！');
      era.drawLine();
      await era.printAndWait(
        `隔天 ${you.name} 见到优秀素质时，${nature.sex}脸上的表情看起来神清气爽。`,
      );
      await nature.say_and_wait('我……想赢过那两人。──在『宝冢纪念』上！');
    };
    f.title = title;
    return f;
  })(),
  takz_kin: (() => {
    const title = '触及的指尖';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} ryan 目白莱恩
     * @param {CharaTalk} you 玩家
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await nature.say_and_wait('──太好了……！我……赢了！');
      era.printButton('「太棒了！」', 1);
      await era.input();
      await nature.say_and_wait('这是为什么呢？我比以往更加开心……');
      era.printButton('「因为是你拼命奔跑，好不容易夺下的胜利」', 1);
      await era.input();
      await nature.say_and_wait('嗯，是啊。');
      await nature.say_and_wait(
        '像『反正像我这种人』，或是『我办不到的啦』之类的……',
      );
      await nature.say_and_wait(
        '这些想法今天完全没有浮现。我只是在心里不断喊着一定要追上……',
      );
      await mcqueen.say_and_wait(
        '──你的表现令人印象深刻呢，内恰。但要是还有机会较量，下次我不会输的。',
      );
      await ryan.say_and_wait('嗯嗯！我也该重新开始锻炼呢！谢谢你，内恰！');
      await nature.say_and_wait('别这么说，我才要……谢谢你们！');
      era.drawLine();
      await nature.say_and_wait(
        `那两位直到最后都这么爽朗呢。${mcqueen.couple_title}已经看向前方了。`,
      );
      await nature.say_and_wait(
        '就算跑输，仍立刻将目光朝向未来。已经伸手朝向下个阶段，想着下次绝对要赢。',
      );
      await nature.say_and_wait('……帝王也是这样。所以才会那么强大。');
      await nature.say_and_wait(
        '过去我老是擅自决定自己的极限。告诉自己无论再怎么努力，这样就是极限了。',
      );
      await nature.say_and_wait(
        '跑第三名也是因为这样。说自己无法跑得更好……其实是放弃了自己。',
      );
      await nature.say_and_wait(
        '但是那样是不行的。要是想触及光芒，就要持续相信自己。',
      );
      await nature.say_and_wait(
        '如果是抱着拿第一的决心获得的第三名，一定……能为今后奠定基础的。',
      );
      await era.printAndWait(
        `优秀素质也正望着前方。现在即使要${nature.sex}登上大舞台，应该也能无所畏惧地挑战了吧。`,
      );
      await era.printAndWait(
        `接下来的那场比赛，一定能让现在的${nature.sex}激发出更多自信与光芒……！`,
      );
      era.printButton('「再下来要挑战『天皇赏（秋）』吗？」', 1);
      await era.input();
      await nature.say_and_wait('『天皇赏（秋）』……！');
      await nature.say_and_wait('要我参加……富有历史与传统的『天皇赏』？');
      await nature.say_and_wait('……不行不行。我怎么退缩了呢？');
      await nature.say_and_wait(
        '这种时候……不能怀疑自己有没有资格。一定要参加！要激励自己才行！',
      );
      await nature.say_and_wait('走吧。直闯秋天的大舞台……！');
      await era.printAndWait(
        `──就这样，${you.name}和优秀素质决定挑战争夺中距离最强选手的『天皇赏（秋）』了！`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「还有，这是惯例的那个——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  ws_ss_2: (() => {
    const title = '夏季合宿';
    /** @param {CharaTalk} nature 优秀素质 */
    const f = async (nature) => {
      await era.printAndWait(
        '又到了集训的季节。优秀素质不同于去年，展现了积极的态度。',
      );
      await era.printAndWait(
        '为了迎接「天皇赏（秋）」……以及之后即将挑战的「有马纪念」──',
      );
      await nature.say_and_wait('天皇赏秋么……');
      await era.printAndWait(`${nature.sex}开始了正视自己的热血夏天！`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho: (() => {
    const title = '响彻黄昏天空';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait('跑完了……');
      await nature.say_and_wait('我在高水准的比赛认真地战斗……拿出了成果。');
      await nature.say_and_wait('不去考虑什么极限……用自己的手抓住了成果。');
      await nature.say_and_wait(
        '……照这样下去，或许能够达成？达成想闪闪发光的……梦想……',
      );
      await nature.say_and_wait('……要更近。还要更近──我还想更接近闪闪发光……！');
      await nature.say_and_wait(`${callname}，我有事拜托你。`);
      await nature.say_and_wait(
        '参加资深级最后的『有马纪念』之前，我还想再跑一场比赛。',
      );
      era.printButton('「为什么？」', 1);
      await era.input();
      await nature.say_and_wait(
        '……我想要更多自信。我想带着要得第一的觉悟参赛并取胜。',
      );
      await era.printAndWait(
        '要是以前的优秀素质，应该会因自信不足而想要寻求『认同』吧。',
      );
      await era.printAndWait(
        `但是现在的 ${nature.sex} 是『为了得胜』而想变得更强。`,
      );
      era.printButton('「这样会变成连续参赛，没问题吗？」', 1);
      await era.input();
      await nature.say_and_wait('一定没问题的吧！');
      await nature.say_and_wait(
        `毕竟 ${self_call} 的独到之处，就是跑得狼狈不堪的模样啊。`,
      );
      era.printButton('「我知道了」', 1);
      await era.input();
      await nature.say_and_wait('谢谢你！至于跑什么比赛就交给你决定了。');
      await nature.say_and_wait(
        `我把负责胡思乱想的这份工作交接给${callname}！`,
      );
      await era.printAndWait(
        `观察${nature.sex}至今的倾向，再考虑到距离『有马纪念』还有多少时间，现在该选择的竞赛是──`,
      );
      era.printButton('「参加『中日新闻杯』怎么样？」', 1);
      await era.input();
      await era.printAndWait(
        '虽然这场赛事等级较低，但优秀素质能在此留下成果。可以稳操胜券地拿下第一名！',
      );
      await nature.say_and_wait(
        '不错呢，『中日新闻杯』……我会在那拿下第一名的。',
      );
      await nature.say_and_wait(`我要跑赢，然后挺起胸膛挑战${nature.sex}……！`);
      if (era.get('love:60') >= 75) {
        era.printButton('「还有，这是惯例的那个——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  s_a_95_42: (() => {
    const title = '闪闪发光';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string[]} trophies 给优秀素质做的奖杯列表，最多四项
     */
    const f = async (nature, you, callname, trophies) => {
      await era.printAndWait(
        `那一天，都到训练时间了，优秀素质却没有出现。平常${nature.sex}都会提早来的……`,
      );
      await era.printAndWait(
        `${you.name} 很担心${nature.sex}，于是到学园内寻找──`,
      );
      await era.printAndWait(
        `──结果在枯树洞前发现了${
          nature.sex
        }。赛${nature.uma_sex_title}们都知道，想大叫发泄内心的情绪时都会来这里。`,
      );
      await nature.say_and_wait('……应该没有人在吧。');
      await nature.say_and_wait('好……！');
      await nature.say_and_wait('为──什么……要说那种话啊？我这个笨蛋──！！');
      await nature.say_and_wait('我竟然对那个正统主角宣战了……！');
      await era.printAndWait(
        `话要说回天皇赏（秋）结束后，${you.name} 和优秀素质在回程的路途上碰到了东海帝王，`,
      );
      await era.printAndWait(
        `并得知了${nature.sex}也要出战今年的有马纪念。不过在氛围的推动下，优秀素质做出了「我一定会在有马纪念上战胜你」的宣言——`,
      );
      await nature.say_and_wait(
        '我这路人也太得意忘形了吧！！真是受不了……笨蛋────！！',
      );
      await nature.say_and_wait(
        '明明我根本还没闪闪发光……笨蛋笨蛋笨蛋笨蛋！笨蛋──！！',
      );
      await nature.say_and_wait('呼……呼……');
      await nature.say_and_wait('不行，完全没有舒畅的感觉……');
      era.printButton('「内恰！」', 1);
      await era.input();
      await nature.say_and_wait(
        `唔啊！？${callname.substring(0, 1).repeat(4)}、${callname}！？`,
      );
      await nature.say_and_wait('你怎么会在这……呃，啊！');
      await nature.say_and_wait('该不会早就到了训练时间……？');
      era.printButton('「是啊」', 1);
      await era.input();
      await nature.say_and_wait(
        '啊啊啊啊啊啊啊啊啊啊……啊──！？之前是不是也发生过一样的事！？',
      );
      await nature.say_and_wait(
        '啊呜呜……为什么总是让训练员看到我这么丢脸的一面呢……',
      );
      era.printButton('「没关系的」', 1);
      await era.input();
      await nature.say_and_wait('咦……');
      era.printButton('「在我面前你可以尽量露出丢脸的一面」', 1);
      await era.input();
      await nature.say_and_wait('……唔！！');
      await nature.say_and_wait('呜呜呜……呜呜呜呜呜～～！！');
      await nature.say_and_wait(`${callname}，我……`);
      await nature.say_and_wait('我不想跑！我好害怕……！');
      await nature.say_and_wait('呜哇啊啊啊……！');
      await era.printAndWait(
        '后来优秀素质像个孩子一样毫无掩饰地不断哭泣。接着──',
      );
      await era.printAndWait(
        `冷静下来后，${nature.sex}对 ${you.name} 说出自己的心情……`,
      );
      await nature.say_and_wait(
        '……现在我的状态调整得很完美对吧？我想……现在应该是有史以来最好的状态。',
      );
      await nature.say_and_wait(
        '我的实力增加了，也对自己有信心。也下定决心要认真应战了。',
      );
      await nature.say_and_wait('但是……万一这样还是输了呢？');
      await nature.say_and_wait(
        '要是连现在这个最强状态的我，都还是离闪闪发光非常遥远……？',
      );
      await nature.say_and_wait('……我好害怕。');
      await nature.say_and_wait(
        '要是在这里输了，感觉就连过去的我都会一起被否定。',
      );
      await nature.say_and_wait(
        '『我还没认真起来』、『我还有成长空间』、『这不是我的所有实力』……',
      );
      await nature.say_and_wait(
        '我之前一直像这样拼命保护着自己。但是那种借口……现在已经不管用了啊。',
      );
      era.printButton('「你是认真的呢」', 1);
      await era.input();
      await nature.say_and_wait('……！是啊，我很认真！');
      await nature.say_and_wait(
        '我都这么认真了，要是输了……又会变回『表现很好，但不是最棒』的自己。',
      );
      await nature.say_and_wait('我好害怕。真的好害怕……');
      era.printButton('「别担心，你不会输的」', 1);
      await era.input();
      await nature.say_and_wait(
        '……抱歉，这次我比以前更没办法坦率地接受这句话。',
      );
      await nature.say_and_wait(
        '因为我一定无法用结果回应这句话。我觉得自己已经一步都踏不出去了……',
      );
      era.printButton('「即使这样我还是想相信你，不行吗？」', 1);
      await era.input();
      await nature.say_and_wait('……唔。你相信的根据是什么？');
      era.printButton('「这里就有很多根据」', 1);
      await era.input();
      await nature.say_and_wait('──这是……');
      await nature.say_and_wait('……用纸折成的奖杯……吗？看起来歪歪扭扭的。');
      await nature.say_and_wait('……你真的做了啊？嘿嘿，还是做得歪歪扭扭的。');
      await nature.say_and_wait('你今天也有为我准备……歪歪扭扭的奖杯吗？');
      await nature.say_and_wait('训练员做的奖杯……');
      await era.printAndWait(
        `${you.name} 让优秀素质看了目前为止 ${you.name} 送给${nature.sex}的那些手工制奖杯的试做样品。`,
      );
      await nature.say_and_wait([
        trophies.map((e) => `『${e}』`).join('、'),
        '……除此之外还有好多……',
      ]);
      await era.printAndWait('……你为我做了这么多啊……');
      era.printButton('「这也是我持续相信你所累积下来的成果」', 1);
      await era.input();
      await nature.say_and_wait('──我到目前为止所累积下来的东西……');
      await nature.say_and_wait(
        '……你明明也可以中途放弃我啊。为什么训练员愿意相信我呢？',
      );
      era.printButton('「因为我很喜欢你啊」', 1);
      await era.input();
      await nature.say_and_wait('……什么！？为什么要在这种时候……');
      await era.printAndWait(
        `${you.name}告诉优秀素质，身为一个训练员，${you.name} 是真心地支持着从不放弃获胜、一路拼命努力至今的${nature.sex}……`,
      );
      await nature.say_and_wait('……嗯，我明白你的意思了。虽然我早就想到了……');
      await nature.say_and_wait('唉……嗯，抱歉啊。我可能有点太慌张了。');
      await nature.say_and_wait('大声宣布『我会赢』，真的是件很可怕的事呢。');
      await nature.say_and_wait(
        `……原来帝王${nature.sex}一直都在对抗这种压力啊。`,
      );
      await nature.say_and_wait('好厉害……不过，我也不会再害怕了。');
      await nature.say_and_wait('毕竟有喜欢我的人跟在我身边嘛？');
      await nature.say_and_wait(
        '我要赢，因为我还有一个很重要……非常重要的理由。',
      );
      await nature.say_and_wait(
        '……话说回来，训练员也真辛苦呢。竟然还得帮我心理辅导。',
      );
      await nature.say_and_wait('虽然这应该也是工作之一啦。');
      era.printButton('「因为我的工作是让你闪闪发光」', 1);
      await era.input();
      await nature.say_and_wait('……只是因为工作？');
      await nature.say_and_wait(
        '……开、玩、笑、的、啦──！刚才的就当作没听到吧！',
      );
      await nature.say_and_wait('该训练了对吧！我、我要用跑的去换衣服了！');
      await era.printAndWait(
        `……看来${nature.sex}重新调整好心情了。既然如此，接下来就朝着前方一同前进吧！`,
      );
    };
    f.title = title;
    return f;
  })(),
  chun_hai: (() => {
    const title = '朝着最后的大舞台';
    /** @param {CharaTalk} nature 优秀素质 */
    const f = async (nature) => {
      await nature.say_and_wait('拿到了！');
      await nature.say_and_wait('第一名。我全力以赴得到的……第一名！');
      await nature.say_and_wait('过程真漫长啊……');
      await nature.say_and_wait(
        '那个软弱的我，一直受人鼓舞、被拉着前进、拼命追赶……',
      );
      await nature.say_and_wait('──现在终于靠着自己的力量站在这里了！');
      await nature.say_and_wait(
        '这下我可以抬头挺胸地战斗了。在那个舞台上……跟大家一起！',
      );
      era.printButton('「终于到这天了！」', 1);
      await era.input();
      await nature.say_and_wait(
        '嗯！我已经不会再逃跑，也不会背叛大家的期待了。',
      );
      await nature.say_and_wait('我一定……要赢。');
      await nature.say_and_wait('──要在『有马纪念』当上闪闪发光的主角！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_senior: (() => {
    const title = '有马的胜者是……';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} teio 东海帝王
     * @param {string} callname 优秀素质对玩家的称呼
     */
    const f = async (nature, teio, callname) => {
      await nature.say_and_wait('啊……');
      await nature.say_and_wait('我……赢了对吧？');
      era.printButton('「内恰，你成功了！」', 1);
      await era.input();
      await nature.say_and_wait(`${callname}……`);
      await nature.say_and_wait('总觉得完全没有现实感……我真的赢了吗？');
      await era.printAndWait('观众们「优秀素质──！！恭喜你──！！」');
      await nature.say_and_wait('──唔！咦？好厉害……这么多人都……');
      await era.printAndWait('商店街的人们「内恰──！恭喜你──！！」');
      await nature.say_and_wait('商店街的大家……也来看我了啊。');
      await nature.say_and_wait('原来大家都在等我啊。而我……终于回应了大家。');
      era.printButton('「全都是你努力掌握住的哦」', 1);
      await era.input();
      await nature.say_and_wait('……');
      await nature.say_and_wait(`呜呜～～～～！${callname}……！`);
      await nature.say_and_wait('幸好我没放弃……！幸好我有持续追逐梦想～～！');
      await era.printAndWait(
        `这跟${nature.sex}以前流下的不安的泪水不一样。${nature.sex}因喜悦而流下大滴大滴的眼泪，跟汗水一起在太阳下闪闪发光。这时──`,
      );
      await teio.say_and_wait('──真是的，为什么要哭啊！？');
      await nature.say_and_wait('……！帝王……！');
      await teio.say_and_wait(
        '你可是打败了我得到第一哦？你可是……打败了我哦……！胜利者就该威风地笑着啊！',
      );
      await nature.say_and_wait('……嗯、嗯，也对。你也总是一直笑着呢……');
      await nature.say_and_wait('抱歉，我没事。我……不会再哭了。');
      await teio.say_and_wait('就是这样。一直哭就听不见了哦。听不见这个──');
      await era.printAndWait('观众的欢呼「哇啊啊啊啊……内恰──！」');
      await teio.say_and_wait('──热烈的欢呼声！这全都是属于你的哦！');
      await nature.say_and_wait('我知道。我听得……很清楚。');
      await nature.say_and_wait(
        '……谢谢你，帝王。要是没有你在，我……是没办法跑到这里的。谢谢你一直让我追赶你。老实说，跑在你后面真的很辛苦。不过……卑鄙的我曾经觉得那个位置很舒适。但是从今以后，无论什么挑战，我都会正面迎战的。',
      );
      await nature.say_and_wait('在我的故事中，我自己才是主角！');
      await era.printAndWait(
        '赛后接受胜利者访谈时。现在的优秀素质被大量闪光灯照耀着。',
      );
      await era.printAndWait(
        '记者A「──这次的『有马纪念』，对手都很难缠呢。请问你觉得自己能赢得这场比赛的原因是？」',
      );
      await nature.say_and_wait('这个嘛……我也觉得大家真的都很强。');
      await nature.say_and_wait(
        `但我也是『很强的』赛${nature.uma_sex_title}。我觉得应该是因为我发挥出了所有实力吧。`,
      );
      await nature.say_and_wait('嗯，是因为我很努力……我可以明确地这么说！');
      await era.printAndWait('记者A「那么，优秀素质，最后请对粉丝说句话！」');
      await nature.say_and_wait('那个，总是支持着我的大家，谢谢你们。');
      await nature.say_and_wait(
        '虽然我很常无法回应大家的期待，但你们仍旧很单纯地支持我。',
      );
      await nature.say_and_wait(
        '托大家的福，今天我才能来到这里……虽然也经历了不少挫折啦！',
      );
      await nature.say_and_wait('……我可以说句任性的话吗？');
      await nature.say_and_wait('那个……真希望大家以后也能继续支持我呢──');
      await nature.say_and_wait(
        '当然我想之后也会有状况不佳，或是完全不行的时候。',
      );
      await nature.say_and_wait(
        '毕竟我既没有优异的天赋，也不是超级努力的人嘛。',
      );
      await nature.say_and_wait('但是……但是啊，我想只有这点我可以保证。');
      await nature.say_and_wait(
        `──我可是最不会背叛大家信赖的赛${nature.uma_sex_title}哦！`,
      );
    };
    f.title = title;
    return f;
  })(),
  hard_work_trainer: (() => {
    const title = (self_call) => `${self_call} 与辛苦的训练员`;
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait('连续好几天行程满满的工作终于告一段落……');
      await era.printAndWait(
        `${you.name} 想买点美味的食物来犒赏自己，拖着沉重的身体前往商店街时──`,
      );
      await nature.say_and_wait('不好意思，那位训练员，请稍等一下！');
      era.printButton('「内恰……？」', 1);
      await era.input();
      await nature.say_and_wait(
        '唉──我是有听说你工作很忙啦，但没想到你埋头苦干到累成这样啊。',
      );
      await nature.say_and_wait(
        `真拿你没办法，让 ${self_call} 招待你一顿吧。快点，过来这里。`,
      );
      await nature.say_and_wait(
        '现在还在开店准备中，不会有客人来。你就坐在最里面的卡拉OK桌吧。',
      );
      await nature.say_and_wait(
        `这间店的老板娘我认识。跟她说明缘由后，她说可以借我用。`,
      );
      await era.printAndWait(`优秀素质带 ${you.name} 来到某间店的角落`);
      await nature.say_and_wait(
        `那么，${callname} 想点些什么呢？什么都可以点哦？只要是我能做的的话`,
      );
      era.println();
      era.printButton('「随便什么都行，我好饿……」', 1);
      if (era.get('love:60') >= 75) {
        era.printButton('「内恰……」', 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait(
          '真是的……你等一下，我简单煮点东西……虽然我不保证味道啦。',
        );
        await era.printAndWait(
          `几分钟后，优秀素质端了${nature.sex}做的炒饭来给 ${you.name}。`,
        );
        era.printButton('「量这么多，没问题吗？」', 1);
        await era.input();
        await nature.say_and_wait('反正老板娘也跟我说『尽情招待他吧』了嘛。');
        await nature.say_and_wait('来吧来吧，趁热快点吃吧。');
        await era.printAndWait(
          `端上来的炒饭外观跟味道都很有模有样，好吃到让 ${you.name} 的筷子……不，是让 ${you.name} 的汤匙停不下来。`,
        );
        await nature.say_and_wait(
          '你太夸张了啦。我只是从小就帮妈妈的忙，所以才会煮啦。',
        );
        await nature.say_and_wait('……呃，你吃得好快！已经吃完了吗！？');
        era.printButton('「因为很好吃，不知不觉就吃完了」', 1);
        await era.input();
        await nature.say_and_wait(
          '没关系没关系，你刚刚真的很饿对吧？我去整理厨房，把盘子给我吧。',
        );
        await era.printAndWait(
          `${you.name}目送着优秀素质的背影看${nature.sex}走远。`,
        );
        await era.printAndWait(
          '不知是否因为刚吃饱，突然感到一阵困意，意识也逐渐远去──',
        );
        await nature.say_and_wait('……啦……啦啦……♪');
        await nature.say_and_wait('呜哇！我该不会吵醒你了吧？');
        era.printButton('「……那首歌是？」', 1);
        await era.input();
        await nature.say_and_wait(
          '其实我也不太清楚，是以前妈妈在柜台忙时常唱的歌。',
        );
        await nature.say_and_wait(
          '我回想起以前的事情，就忍不住哼了起来……抱歉咯。',
        );
        era.printButton('「我反倒想继续听下去呢」', 1);
        await era.input();
        await nature.say_and_wait(
          `你又来了～不用对 ${self_call} 说这种客套话啦。`,
        );
        era.printButton(
          '「但我是真的喜欢内恰的歌声，有这副歌喉，演唱会也没问题了呢！」',
          1,
        );
        await era.input();
        await nature.say_and_wait('哼、哼～是吗？训练员果然品味特殊呢。');
        await nature.say_and_wait(
          '……不过，你不是说『好听』倒是让我安心了。『喜欢』这个词真是方便呢。',
        );
        await nature.say_and_wait(
          '因为这样就不会被拿去跟谁比较，害谁失望，自己也不会对不符合期待的自己失望了。',
        );
        await nature.say_and_wait('啊哈哈。真抱歉，我说话这么不可爱。');
        era.printButton('「我也喜欢这样的内恰哦」', 1);
        await era.input();
        await nature.say_and_wait('笨……笨蛋！');
        await nature.say_and_wait('那种话要是说太多次，可是会失去意义的哦？');
        await era.printAndWait('店家「你借用完了吗，内恰？」');
        await nature.say_and_wait('老板娘，谢谢你啊。真的帮了大忙呢。');
        await era.printAndWait(
          '店家「旁边这位就是传闻中的训练员对吧？我常听内恰提起你──」',
        );
        await nature.say_and_wait('真是的──！不用说那些啦！我们走吧，训练员！');
        era.printButton('「传闻……？」', 1);
        await era.input();
        await nature.say_and_wait('我、们、走、吧！');
        await era.printAndWait(
          `就这样，在老板娘温暖的眼光目送下、${you.name}和优秀素质离开了店里。`,
        );
      } else {
        await nature.say_and_wait('诶……诶？！我吗？');
        await era.printAndWait(
          '听到回答后，优秀素质惊讶的脸庞上迅速染上了一丝绯红',
        );
        await nature.say_and_wait(
          '虽然是说过不会有客人来……但这里再怎么说也是别人的店里耶……',
        );
        era.printButton('「内恰不是说什么都可以吗？」', 1);
        await era.input();
        await nature.say_and_wait('咕……虽然是这样……但是……');
        await nature.say_and_wait(
          '呜……我知道了……成年人的压力和疲劳通过这种事，能得到有效释放对吧……',
        );
        await era.printAndWait(
          `优秀素质咬了咬嘴唇，像是下定了什么决心一般，走到瘫坐在沙发上的 ${you.name} 面前，然后将娇软的躯体整个俯趴在 ${you.name} 身上，并在耳边低语到：`,
        );
        await nature.say_and_wait(
          '太激烈的可不行哦……衣服和房间清理起来会很麻烦的……',
        );
        await nature.say_and_wait('还有，会被阿姨发现的……');
        await era.printAndWait(
          `当然，至于 ${you.name} 听没听进去，那就是另外一回事了……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  grass_baseball: (() => {
    const title = '用草地棒球声援！';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait('会场是这里吗？哦～确实聚集着人潮呢～');
      await nature.say_and_wait(
        '不过，你竟然会答应帮忙打草地棒球……明明训练员的工作就够忙了。',
      );
      await era.printAndWait(
        `其实是前几天，商店街的人们邀请 ${you.name}，因此 ${you.name} 决定参加草地棒球。`,
      );
      era.printButton('「毕竟大家总是很支持你嘛」', 1);
      await era.input();
      await nature.say_and_wait('唉，大家确实是对我很好啦……');
      await nature.say_and_wait('……不过，唉……别拼命过头，弄伤自己喔～？');
      await nature.say_and_wait('你平常就已经很拼命了……');
      await era.printAndWait('就这样，商店街草地棒球对抗赛终于拉开序幕。');
      era.drawLine();
      await era.printAndWait('两队互不相让，比分保持0比0，战况渐渐白热化。');
      await nature.say_and_wait(
        '哇，战况越来越激烈了～不过，训练员看起来精疲力尽耶。',
      );
      await nature.say_and_wait(
        '不偏心地说，你已经很努力了，差不多该换人上场了吧。',
      );
      era.printButton('「我还能继续！……」', 1);
      await era.input();
      await nature.say_and_wait(
        '唉，真热血……啊，我懂了。有我的照料，你就会努力下去吧。',
      );
      await nature.say_and_wait('我去拿喝的过来，请乖乖坐在这里喔～？');
      await nature.say_and_wait('真是的……我看看，执行委员会的帐篷在……');
      await era.printAndWait(
        `商店街的大叔「哎呀～就差一点。虽然${you.sex}很努力，但迟迟没办法得分……」`,
      );
      await nature.say_and_wait('喔，他们在聊训练员的事……？', true);
      await era.printAndWait(
        '商店街的阿姨「肯定很紧张吧。毕竟是来帮忙的，身边都是不认识的人……」',
      );
      await era.printAndWait(
        `商店街的大叔「嗯……有没有办法让${you.sex}打起精神呢？」`,
      );
      await nature.say_and_wait('总觉得……听起来好熟悉的情况呢……', true);
      await era.printAndWait(
        '这番对话，让优秀素质不禁想起了自己在比赛时收到的大家的声援打气……',
      );
      await nature.say_and_wait(
        '在背后推了我一把，促使我努力下去的人就是大家和训练员……',
        true,
      );
      await nature.say_and_wait('不该光顾着担心，这次我要──', true);
      era.drawLine();
      await era.printAndWait(
        `终于来到九局下半。在只要打出一分就宣告结束的情况下，轮到 ${you.name} 上场打击。`,
      );
      await era.printAndWait(
        '眼前站在投手丘的大叔曾是闯进甲子园的板凳球员，球技一流。',
      );
      await era.printAndWait(
        `${you.name} 已经被逼得打出两好球，眼看就要到此为止时──`,
      );
      await nature.say_and_wait('加油──！');
      // Do not translate this
      era.printWholeImage('内恰_应援_半身', {
        width: 8,
        offset: 8,
      });
      await era.printAndWait(
        '回头一看，不知什么时候换上了啦啦队服的内恰正在观众席上',
      );
      await era.printAndWait(`竭尽全力地为 ${you.name} 声援着`);
      await nature.say_and_wait('别输啊，训练员！再一球！打出去就赢了！');
      await nature.say_and_wait('振作起来！振作！大家一起喊！');
      await era.printAndWait('众人「耶～！Go Fight Win！」');
      await nature.say_and_wait('加、加油！训练员！');
      await era.printAndWait(
        `优秀素质害羞地大声为 ${you.name} 加油，还有${nature.sex}身边的人也是。一定要回应他们的心意……！`,
      );
      era.printButton('「喝啊啊──！！」', 1);
      await era.input();
      await nature.say_and_wait('上啊──！！');
      await era.printAndWait('铿──！');
      await nature.say_and_wait(
        '好耶～！成功了！训练员好厉害！全垒打！是再见全垒打！',
      );
      era.drawLine();
      era.printButton(
        '「谢谢你帮我加油！」（耐力+20，技能点数+20，干劲上升，习得「天地无畏」）',
        1,
      );
      era.printButton(
        '「多亏有你为我加油！」（耐力&力量+20，技能点数+20，习得「天地无畏」）',
        2,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「内恰～！谢谢你～！」', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            '唔……被这么热烈的目光盯着看，感觉好难为情……',
          );
          await nature.say_and_wait(
            '……该道谢的人是我才对。谢谢你一直为我加油打气。',
          );
          await nature.say_and_wait(
            '总之，今后也会继续加油的……啊～说了一点也不像我会说的话，真是的～！',
          );
          await era.printAndWait(
            `优秀素质虽然感到害羞，却发自内心地为 ${you.name} 加油。这一天 ${you.name} 留下了无可取代的宝贵回忆！`,
          );
          break;
        case 2:
          await nature.say_and_wait(
            `不不不，别那么说。${callname} 已经很努力了，这是靠你自己的努力跟实力得来的。不过……`,
          );
          await era.printAndWait('优秀素质害羞地撇开视线');
          await nature.say_and_wait(
            '帮你加油很有成就感。下次打棒球的时候，我再去加油好了……随便说的啦。',
          );
          await era.printAndWait(
            `${you.name} 感受到彼此之间深刻的情谊，真是美好的一天！`,
          );
          break;
        case 3:
          await nature.say_and_wait('呃，别喊那么大声～这样很引人注目的！');
          await era.printAndWait(
            `优秀素质涨红了脸颊，回应着 ${you.name} 的呼喊`,
          );
          await nature.say_and_wait('真是的～我要去换衣服了！');
          era.printButton('「换衣服的事可以晚一点吗？」', 1);
          await era.input();
          await nature.say_and_wait(
            '怎么了啦？这身衣服穿着很羞人啊，而且独占周围凉飕飕的……',
          );
          await era.printAndWait(
            `优秀素质抱怨着停下脚步，转过身来面对着 ${you.name}`,
          );
          era.printButton('「那个……这副打扮的内恰实在太可爱了……」', 1);
          await era.input();
          await nature.say_and_wait('唔！哈？这样突然袭击很犯规耶……');
          await era.printAndWait('意料之外的话语让优秀素质一时间手足无措');
          era.printButton('「……性欲……有点压制不住了……」', 1);
          await era.input();
          await nature.say_and_wait('……你你你你突然间又在说什么啊啊啊啊！');
          await era.printAndWait('连续的突袭让优秀素质失声大叫了出来，');
          await era.printAndWait('但突然意识到这样招来了商店街各位的瞩目后，');
          await era.printAndWait('连忙向四周陪笑，然后又转过头来');
          await era.printAndWait('以只有二人能听到的音量娇嗔到');
          await nature.say_and_wait(
            `色鬼 ${callname}！怎么能在这种地方说这种话啊！`,
          );
          era.printButton('「可是内恰的打扮实在太色了……」', 1);
          await era.input();
          await nature.say_and_wait('呜喵喵喵喵！我知道了！不要再说了！');
          await era.printAndWait(
            `满面潮红的内恰拼命挥舞着双手阻止 ${you.name} 说下去`,
          );
          await nature.say_and_wait(
            `咕……让 ${callname} 兴奋成这样，也是我的错呢`,
          );
          await nature.say_and_wait(
            '我会负起责任处理好的啦……但再怎么说也不能在这里做吧？',
          );
          era.printButton('「去更衣室吧」', 1);
          await era.input();
          await nature.say_and_wait('那不是也很容易暴露嘛！');
          era.printButton('「那就拜托你叫小声点了」', 1);
          await era.input();
          await nature.say_and_wait(`那算什么嘛！等……${callname}？！`);
          await era.printAndWait(
            `${you.name} 不等优秀素质反对，就一把横抱起${nature.sex}冲进了更衣室，反锁上了隔间。`,
          );
          await era.printAndWait('非常幸运似乎没有人看到这一幕');
          await era.printAndWait('而隔间内翻云覆雨的战斗即将打响……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  see_fish: (() => {
    const title = '去看鱼吧';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(`在 ${you.name} 跟优秀素质一同回程的路上──`);
      await nature.say_and_wait('我说，反正还有时间……那个………………要去看鱼吗？');
      await nature.say_and_wait(`是卖鱼的阿姨啦，她叫我们『一起去看看』。`);
      era.printButton('「当然可以啊」', 1);
      await era.input();
      await nature.say_and_wait('……很好，那我们走吧。');
      era.drawLine();
      await era.printAndWait(
        `${you.name} 本来以为是鱼贩那有卖${nature.sex}想要的鱼，结果跟着${nature.sex}来到目的地后……`,
      );
      await nature.say_and_wait(
        '哦哦～在游耶在游耶～～一整群看起来好好吃的鱼～～',
      );
      era.printButton('「没想到是来水族馆……！！」', 1);
      await era.input();
      await nature.say_and_wait('……啊哈。');
      await nature.say_and_wait(
        '啊──好啦好啦！我知道啦。应该有更好的邀请方法吧～你是不是这样想？',
      );
      await nature.say_and_wait(`那个嘛，${self_call} 可没办法可爱地邀请人──`);
      await nature.say_and_wait(
        '不过啊，难得阿姨送了门票，叫我们两人好好放松……',
      );
      await nature.say_and_wait('我绝对不是存心要骗你的。我说真的。');
      era.printButton('「谢谢你邀请我来」', 1);
      await era.input();
      await nature.say_and_wait('哦……哦哦……这就是大人的从容吗？真有一套……');
      await nature.say_and_wait('好吧，嗯。既然你不在意就好。');
      await nature.say_and_wait(
        '所以说，虽然也算不上赔罪啦……但我们去看训练员想看的东西吧！',
      );
      await nature.say_and_wait(
        '我查了一下，发现有很多有趣的展示呢。真不愧是约……出门玩的热门地点呢。',
      );
      await nature.say_and_wait(
        '有水母展、魟鱼……鲷鱼……每种看起来都相当好吃呢。',
      );
      await nature.say_and_wait('啊，走标准行程的话可以去看海豚秀之类的？');
      await nature.say_and_wait('……不对，跟我去看那么可爱的表演也不太对吧。');
      await nature.say_and_wait(
        `好吧，就交给 ${callname} 决定了！你想看什么？`,
      );
      era.println();
      era.printButton('「海豚秀」', 1);
      era.printButton('「……极度恐怖 · 可怕鱼展览！！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait('……我说啊。你有在听我说话吗？');
        era.printButton('「有哦」', 1);
        await era.input();
        await nature.say_and_wait('嗯，我知道。但我不是那个意思哦？');
        await nature.say_and_wait('不对，好吧……毕竟我也说了啊～说我会配合你。');
        await nature.say_and_wait(
          '知道啦知道啦。既然你觉得看了可以放松的话，嗯。',
        );
        await nature.say_and_wait(
          '我是不会做出『呀啊～』那种可爱反应的，这点就请多包容啦──',
        );
        era.drawLine();
        await nature.say_and_wait(
          '哦哦，好有活力的海豚呢～咦？噗哇！？等一下，水！有水──',
        );
        await nature.say_and_wait('嘎呀啊啊啊──！！？');
        await nature.say_and_wait('可恶……那道水花太犯规了吧。');
        await nature.say_and_wait('原来海豚秀是这么惊悚刺激的娱乐吗……');
        await nature.say_and_wait(
          '真是的……何止是『呀啊～』，害我根本从丹田喊出来了。',
        );
        era.printButton('「看得真开心呢」', 1);
        await era.input();
        await nature.say_and_wait('呵呵……嗯，是啊。看来这种玩法比较适合我呢。');
        await era.printAndWait(
          `${you.name}跟优秀素质在水族馆一起度过快乐时光，好好地放松了一番。`,
        );
      } else {
        await nature.say_and_wait('咦～听起来很有趣嘛！');
        await nature.say_and_wait(
          '而且竟然说是『极度恐怖』呢。到底有多恐怖？让我们见识一下实力吧～',
        );
        await era.printAndWait(`就这样，${you.name}跟优秀素质一起到了展示区……`);
        await nature.say_and_wait('可！');
        era.printButton('「……可？」', 1);
        await era.input();
        await nature.say_and_wait('可、爱、到、不、行！！');
        await nature.say_and_wait(
          '呜哇啊啊～～～！！这什么！圆滚滚的双眼！是叫『扁面蛸』啊～',
        );
        await nature.say_and_wait('呀啊～～～～');
        await nature.say_and_wait('──啊！！');
        era.printButton('「看你这么开心，真是太好了」', 1);
        await era.input();
        await nature.say_and_wait(
          '太……太犯规了吧！说什么极度恐怖，结果都是这么可爱的生物！',
        );
        await nature.say_and_wait('可恶…………好可爱。');
        era.printButton('「那边的鱼也很不赖……」', 1);
        await era.input();
        await nature.say_and_wait('呜哇，真的耶！丑到很可爱～～！');
        await era.printAndWait(
          `${you.name} 跟优秀素质在水族馆一起度过快乐时光，好好地放松了一番。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
