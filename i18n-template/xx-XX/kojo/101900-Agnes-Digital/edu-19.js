/**
 * @file 爱丽数码 - 育成
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {number|undefined} japa_dir_rank 日本泥地德比名次
   */
  async race_start(digital, japa_dir_rank) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '胜券在握的',
          digital.uma_sex_title,
          '酱，紧绷的',
          digital.uma_sex_title,
          '酱，还是看似不在乎实则认真的',
          digital.uma_sex_title,
          '酱……呼……嘿……',
        ]),
      () =>
        digital.say_and_wait([
          '不不不，再怎么想我这种',
          digital.uma_sex_title,
          '上赛场还是很奇怪吧？',
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          '数码碳的决胜服好像是露肚子的来着？！遭了遭了，要藏吗？怎么藏？藏得了吗？',
        ),
      );
    }
    if (japa_dir_rank <= 3) {
      buffer.push(() =>
        digital.say_and_wait('我要，作为一名选手，跑出不负于对手的比赛。'),
      );
    }
    await get_random_entry(buffer)();
  },
  race_end_win: (() => {
    const title = '竞赛获胜';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     */
    const f = async (digital, you) => {
      await digital.say_and_wait('咔哇哇哇哇！每个孩子都闪耀着最尊的光辉啊！');
      await era.printAndWait([
        '赛后的 ',
        digital.get_colored_name(),
        ' 精神得完全不像经历了一场大赛，一如既往地展现了',
        digital.sex,
        '的热情。',
      ]);
      await digital.say_and_wait([
        '能和',
        digital.uma_sex_title,
        '酱一起比赛……真的是非常开心……！',
      ]);
      await digital.say_and_wait('而且，还拿到了第一！真的要满含感激地收下！');
      era.printButton('「你是最闪耀的哦！」', 1);
      era.printButton('「下次的比赛也要加油噢！」', 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          '诶？这这这，怎可能？！这么多',
          digital.uma_sex_title,
          '，我就只是像空气一般的存在……居然看着我吗？',
        ]);
        await era.printAndWait('这份娇羞也是见多了。');
        await you.say_and_wait('这不当然，你可是我的爱马啊！');
        await digital.say_and_wait('呜呜呜……');
        await digital.say_and_wait('被夸奖真的是难以平静下来呢……');
        await era.printAndWait('也当然每一次看都不厌。');
      } else {
        await digital.say_and_wait(
          '好！为了下次比赛也要照这个劲头，我要变得更强！Power！',
        );
        await digital.say_and_wait([
          '变得更强大，然后在更激烈的比赛中看到更加闪耀的',
          digital.uma_sex_title,
          '酱！',
        ]);
        await era.printAndWait('就是这个势头！继续加油吧！');
        await digital.say_and_wait('诶！诶！姆！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜';
    /** @param {CharaTalk} digital 爱丽数码 */
    const f = async (digital) => {
      await digital.say_and_wait(
        '唔姆唔姆，原来如此，你们的闪耀，还是有点难以接近……',
      );
      await era.printAndWait([
        '没能获胜的 ',
        digital.get_colored_name(),
        '，在赛后也没表现出太大的失落……',
      ]);
      await digital.say_and_wait('呜……果然，我还是不该作为粉丝出现在这里的……');
      await era.printAndWait('喂喂喂。');
      era.printButton(`「这次，有没有欣赏到${digital.uma_sex_title}啊？」`, 1);
      era.printButton(`「下次争取在最前方欣赏${digital.couple_title}吧！」`, 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait('诶！对诶！数码，可！');
        await era.printAndWait('这是什么意思？');
      } else {
        await digital.say_and_wait([
          '如果在更前方的话，那绝对可以……！欣赏到更为美丽的',
          digital.uma_sex_title,
          '酱们！',
        ]);
        await era.printAndWait([
          '总之，',
          digital.get_colored_name(),
          ' 打起了精神！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '出道战开始！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait([
        '嗯哼，能听到吗？我是 ',
        digital.get_colored_name(),
        '，正值新叶萌发之时，各位大家过得好吗？我现在正站在出道战的亮相圈里，在周围的则是……',
      ]);
      await digital.say_and_wait([
        '数码……数码……在',
        digital.uma_sex_title,
        '酱的周边……倒不如说就在',
        digital.uma_sex_title,
        '酱里面！',
      ]);
      await digital.say_and_wait([
        '已经要……萌死了……',
        callname,
        '！能看到吗！这周边的',
        digital.uma_sex_title,
        '酱们！',
      ]);
      await era.printAndWait([
        '看得到，周围的',
        digital.uma_sex_title,
        '有些都紧张地发抖了，有些眼神在发光，但其中最特别的是……',
      ]);
      await era.printAndWait([
        '托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——',
        digital.get_colored_name(),
        '。',
      ]);
      await digital.say_and_wait([
        '吸溜溜，我想说的是',
        digital.couple_title,
        '还能到什么地步啊！尊力检测仪都已经爆表了，而我，居然能够混入其中！',
      ]);
      await digital.say_and_wait('哈～要，尊死了……数码……就要变成灰了……');
      await you.say_and_wait('现在可是要比赛了哦！');
      await digital.say_and_wait('哇！对啊！现在不是升天的场合！');
      await digital.say_and_wait([
        '现在的我，也是和',
        digital.uma_sex_title,
        '酱们肩并肩的存在，绝不能让我的存在使',
        digital.couple_title,
        '蒙上阴影！',
      ]);
      await digital.say_and_wait(
        '我会努力的！能量充足，检查完备！尊力机能100%运作！',
      );
      await digital.say_and_wait([
        '数码的眼睛就是底片，要把',
        digital.uma_sex_title,
        '酱们所有的笑容与泪水全都印在里面！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '，怀抱着觉悟，走向了赛场。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '出道战胜利';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} hyac_sta 风信子锦标（上色版名字）
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        '出道战，',
        digital.get_colored_name(),
        ' 在这场比赛中出色地拿到了第一名，然后……',
      ]);
      await era.printAndWait([
        '本来以为会看到会尊成灰的 ',
        digital.get_colored_name(),
        '，像平时一样释放',
        digital.sex,
        '的爱意，没想到看起来',
        digital.sex,
        '居然安静下来了，',
        digital.sex,
        '也有这种时候啊……',
      ]);
      await digital.say_and_wait('……是原点，也是顶点……');
      await digital.say_and_wait(
        '初次的出闸，无法把控的时间节点，相互纠缠的玉足……',
      );
      await digital.say_and_wait(
        '汗水四溅，因为焦急而一片空白的大脑，但是伴随着观众的欢呼声消失，留下来的只有揭示板上的结果……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '，居然能这样描绘出确切的情感啊。',
      ]);
      await digital.say_and_wait(
        '太！太感动了！无论什么都令人不禁落泪，对吧！对吧！',
      );
      era.printButton('「对呢，初次的比赛，出道赛，恭喜了。」', 1);
      await era.input();
      await digital.say_and_wait([
        '啊啊啊，奔跑的时候，数码被其他',
        digital.uma_sex_title,
        '酱的情感冲击得乱七八糟，数码我……',
      ]);
      await digital.say_and_wait(
        '我真的是，小看了出道战！出道战，谁都是赢家呢！谁都是！',
      );
      await digital.say_and_wait(
        '被夹杂着如此丰富的情感，无论是谁，都会收获满满吧？',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '，真的很开心，无论是在比赛中的步伐，还是比赛后的感想，都传达出',
        digital.sex,
        '对比赛的喜爱。',
      ]);
      await digital.say_and_wait([
        callname,
        '，今天的比赛只是入门吧！接下来还有很多比赛吧！还会遇到更多的',
        digital.uma_sex_title,
        '酱吧！',
      ]);
      await you.say_and_wait([
        '对，前面，还有很多',
        digital.uma_sex_title,
        '在等着你。',
      ]);
      await digital.say_and_wait(
        '太棒了！我跨过了乐园的门槛，真的不小心就跨过去了！一直以为那是我不应涉及的领域！',
      );
      await digital.say_and_wait([
        '下一次，我想要再看到这样的',
        digital.uma_sex_title,
        '酱们！',
      ]);
      await you.say_and_wait('那么，下一次跑草地比赛怎么样呢？');
      await digital.say_and_wait(
        '嗯？诶，这次是泥地，下次就草地吗……对不起，是我有些得意忘形了，因为太开心，脑海里的都跑到九霄云外了。',
      );
      await digital.say_and_wait(
        '我还想再跑一次泥地比赛，再感受一次这种气氛！',
      );
      await era.printAndWait([
        '商量过后，你们决定下一次比赛是：新年的 ',
        hyac_sta,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_42: (() => {
    const title = '观战英里冠军赛';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (
      digital,
      doto,
      halo,
      you,
      callname,
      call_58,
      call_61,
      mile_cha,
    ) => {
      await era.printAndWait([
        '虽然 ',
        digital.get_colored_name(),
        ' 目前还只是出道第一年，即使想要参加比赛，选择的空间也不多，但是对于其他',
        digital.uma_sex_title,
        '而言，最近是最为忙碌的一段时间。',
      ]);
      await era.printAndWait([
        '这次 ',
        you.get_colored_name(),
        ' 和 ',
        digital.get_colored_name(),
        ' 来观看的比赛是 ',
        mile_cha,
        '。',
      ]);
      await era.printAndWait([
        '在这场比赛里，',
        digital.get_colored_name(),
        ' 的激推',
        digital.uma_sex_title,
        '之一——',
        halo.get_colored_name(),
        ' 也会出赛。',
      ]);
      await digital.say_and_wait([callname, '！这边这边！']);
      await era.printAndWait([
        '抢到好位置的 ',
        digital.get_colored_name(),
        ' 向 ',
        you.get_colored_name(),
        ' 招手，',
        you.get_colored_name(),
        ' 尽量挤了进去。',
      ]);
      await digital.say_and_wait(['快要开始了哦！是 ', call_61, ' 哦！']);
      await era.printAndWait('然后……');
      await you.say_as_passer_by_and_wait('解说', [
        '接着之后的是 ',
        halo.get_colored_name(),
        '！从外道赶上，',
        halo.get_colored_name(),
        ' 是第二名！',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        '接着之后的是 ',
        halo.get_colored_name(),
        '！从外道赶上，',
        halo.get_colored_name(),
        ' 是第二名！',
      ]);
      await era.printAndWait([
        '第二名啊，对于 ',
        halo.get_colored_name(),
        ' 最近的战绩来说很不错了。',
      ]);
      await halo.say_and_wait(
        '全国各地的我的粉丝啊，虽然没能获胜我很遗憾，但是……',
      );
      await halo.say_and_wait(
        '我必将突破束缚，接下来也将继续走在短距离、英里赛道路上，这就是King我新的路线哟！哦！吼吼吼！',
      );
      await digital.say_and_wait(
        '唔噢噢噢哦哦……真是，万分的感动！敢于选择新路线，这是需要多大的勇气，多大的觉悟！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' 感动得痛哭流涕，跟 ',
        you.get_colored_name(),
        ' 说起 ',
        halo.get_colored_name(),
        ' 的经历。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' 原本是想要证明自己的才能，所以一直专注于经典赛事的',
        digital.uma_sex_title,
        '，但是今年',
        digital.sex,
        '改变了路线，重新定下了目标。',
      ]);
      await digital.say_and_wait(
        '无论是哪一种路线，都是可以证明自己的强大的啊！',
      );
      await era.printAndWait([
        '在 ',
        digital.get_colored_name(),
        ' 出道后，',
        digital.get_colored_name(),
        ' 的想法跟之前也有了很大的区别，更能从一个选手的角度去体会赛场上赛场后的种种了。',
      ]);
      await era.printAndWait([
        '正因为期待着 ',
        halo.get_colored_name(),
        ' 的努力能得到回报，',
        digital.get_colored_name(),
        ' 才会来看现场比赛，在 ',
        halo.get_colored_name(),
        ' 终于苦尽甘来的时候，',
        digital.sex,
        '哭得比在场的每个人都响。',
      ]);
      era.drawLine({ content: '回去的路上' });
      await era.printAndWait([
        '学校旁边的小河边，发现了一个低头奔跑在河边泥地的',
        digital.uma_sex_title,
        '。',
      ]);
      await digital.say_and_wait(['哦哦哦！是 ', call_58, ' 啊……']);
      await era.printAndWait([
        doto.get_colored_name(),
        ' 看起来有点失落，训练还在这里训练……',
      ]);
      await era.printAndWait([
        '嗯……',
        doto.get_colored_name(),
        ' 是不是一直都是这样来着？',
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        ' 最近成绩不佳，作为训练员的 ',
        you.get_colored_name(),
        ' 很清楚，',
        doto.sex,
        '还未到本格化时期，但是',
        doto.sex,
        '本身好像并没有察觉到。',
      ]);
      await digital.say_and_wait(
        '本格化……如果自己不知道的话，果然还是比较痛苦……',
      );
      await digital.say_and_wait([
        '以前我大概只能看到 ',
        call_58,
        ' 的努力吧，但是现在我……',
      ]);
      await digital.say_and_wait('至少，知道这件事能安心很多啊……');
      await you.say_and_wait(['怎么了，不打算上去对', doto.sex, '说一下吗？']);
      await digital.say_and_wait(
        '诶？喂喂喂……我可是一介粉丝啊？粉丝也不能向偶像提意见的啊！会被经纪人请出去的！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' 很想要帮忙，却又觉得自己是不是太过逾越了。',
      ]);
      await digital.say_and_wait(
        '用一个现实点的例子就是，就好像你看到一间经营不善的面馆，然后安慰店主只是时机未到吗？！',
      );
      await you.say_and_wait(
        '不不不，这个的确是有根据的……再说了，数码，你还只是把自己当作粉丝吗？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 提醒 ',
        digital.get_colored_name(),
        '，',
        digital.get_colored_name(),
        ' 已经不再是粉丝，也是作为一名选手站在了赛场上。',
      ]);
      await digital.say_and_wait([
        '啊，嗯，倒也……虽然我的确出了道，但是 ',
        call_58,
        ' 和我之间的横沟可是跨越不了的啊……',
      ]);
      await you.say_and_wait([
        '你与',
        digital.sex,
        '，与',
        digital.couple_title,
        '的差距，比你想象中的小哦！',
      ]);
      await you.say_and_wait(
        '正是你每日的观察，才能看到怒涛所面临的问题，但也就是因此，你把自己置身事外了，觉得自己并不是其中的一员。',
      );
      await era.printAndWait([digital.get_colored_name(), ' 低下了头。']);
      await digital.say_and_wait(
        '唔唔……虽然是这样，但是你现在要我上去跟偶像交流，我还是有点……',
      );
      await digital.say_and_wait('总感觉，自己有了不得了的想法……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 最终还是决定了，想要帮助 ',
        doto.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        digital.sex,
        '跃下岸堤的栅栏，一个滑坡，直接出现在了怒涛面前，这种登场方式，真的是厉害啊。',
      ]);
      await digital.say_and_wait([
        '那那那那那个！',
        call_58,
        '！稍微说一下可以吗？',
      ]);
      await doto.say_and_wait('诶诶诶诶，什什什么？');
      await digital.say_and_wait('本格化，知道吗！');
      await doto.say_and_wait('诶诶诶？那是什么？');
      await digital.say_and_wait('所谓本格化，就是……');
      await era.printAndWait('就在岸边看着，应该问题不大吧？');
      await digital.say_and_wait('还有就是本格化的时间，大概都在……');
      await era.printAndWait('嗯，讲得还挺详细的嘛。');
      await digital.say_and_wait(
        '对了对了，要是想要趁这本格化时间要锻炼的话，要注意脚步的……',
      );
      await era.printAndWait('哦哦，是连训练员资格考试都没过多涉及的内容。');
      await digital.say_and_wait(
        '……在本格化时期前的一段时间内，并不是说锻炼是白费的，',
      );
      await digital.say_and_wait(
        '如果此时能加紧锻炼大腿肌的话，能在本格化期间瞬间哗地一下成长噢！',
      );
      await era.printAndWait([
        '不对，这已经都涉及到最近的研究了吧，',
        you.get_colored_name(),
        ' 记得这个内容还是前不久刊登在《训练员月刊》里面的研究……',
      ]);
      era.drawLine({ content: '回到训练室时' });
      await digital.say_and_wait([
        '哇哇哇哇！搞砸了啊！是现实中，在眼睛里成像的 ',
        call_58,
        '……一不小心就……',
      ]);
      await era.printAndWait([
        '事实上 ',
        doto.get_colored_name(),
        ' 虽然后面听得云里雾里的，但是在岸边都能看得到，',
        digital.sex,
        '已经恢复了元气。',
      ]);
      await era.printAndWait([digital.get_colored_name(), ' 肯定也是知道的。']);
      await you.say_and_wait([
        '但是，怒涛',
        digital.sex,
        '不是觉得收获挺大的吗？',
      ]);
      await era.printAndWait([
        '……',
        digital.get_colored_name(),
        ' 只是捂着胸口。',
      ]);
      await era.printAndWait([
        '第一次与推的偶像这样对话，想必 ',
        digital.get_colored_name(),
        ' 压力很大。',
      ]);
      await era.printAndWait([
        '……不过 ',
        digital.get_colored_name(),
        ' 那连环机关枪的语速，',
        digital.sex,
        '该不会事实上是挺不妙的人吧？',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} daiwa 大和赤骥
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, teio, daiwa, doto, you, callname) => {
      await era.printAndWait([
        '新的一年，',
        digital.get_colored_name(),
        ' 迎来了对于',
        digital.uma_sex_title,
        '来说至关重要的经典年。',
      ]);
      await era.printAndWait([
        '虽然',
        digital.sex,
        '好像还停留在对于可以切身接近经典年',
        digital.uma_sex_title,
        '而激动。',
      ]);
      await digital.say_and_wait(['新年快乐！', callname, '！']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 简单地对 ',
        you.get_colored_name(),
        ' 道了新年。',
      ]);
      await era.printAndWait('一大早就来到了训练室，真是勤勉啊。');
      await digital.say_and_wait('年底过得怎么样呢？有在CM上买到几本好书吗？');
      await you.say_and_wait('诶？CM？书？');
      await digital.say_and_wait(
        '啊……嗯，如果没有的话就忘记我说的话吧，只是数码的一些胡言乱语罢了。',
      );
      await digital.say_and_wait(
        '不过！今年的比赛！可就有得聊了！经典年的比赛可是多如繁星啊！',
      );
      await era.printAndWait([
        '的确，',
        digital.get_colored_name(),
        ' 可以参加经典级比赛了，选择相比去年就多得多了，大多数的G1比赛，都是要到经典年才能参加。',
      ]);
      await digital.say_and_wait([
        '啊，突然想起了去年，我还是太过得意忘形了，似乎都忘记了自己的初心，说好的要当合格的',
        digital.uma_sex_title,
        '粉丝呢？！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 似乎是对上次',
        digital.sex,
        '与 ',
        doto.get_colored_name(),
        ' 的谈话仍有郁结……',
      ]);
      era.println();
      await digital.say_and_wait(
        '所以说！今年，我要再次回归起点！再次成为粉丝！以其为原则！',
      );
      await era.printAndWait([
        '不过目前来看，也还没有办法，',
        digital.get_colored_name(),
        ' 想要认识到的话，还得……',
      ]);
      await digital.say_and_wait([
        callname,
        '！你可以给我一些建议吗！应该如何应援？',
      ]);
      era.print([you.get_colored_name(), ' 的选择是：']);
      era.printButton(`侍奉${digital.uma_sex_title}酱（速度+10）`, 1);
      era.printButton('读书（耐力+10）', 2);
      era.printButton('从模仿中学习（技能点数+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait([
            '像平时那样，侍奉',
            digital.uma_sex_title,
            '酱不挺不错吗？',
          ]);
          await digital.say_and_wait([
            '哦哦哦！很好的建议呢，说到这个，感觉最近无论是比赛什么的还是交流什么的一直都有在冒犯',
            digital.uma_sex_title,
            '酱呢……',
          ]);
          await digital.say_and_wait(
            '所以！的确是个回归起点的时候！是时候把圣地净化一遍了！',
          );
          await era.printAndWait('净化？！');
          await era.printAndWait('原来只是将赛场打理一遍，还好还好。');
          await era.printAndWait([
            '打理后恰好是 ',
            daiwa.get_colored_name(),
            ' 第一个到达草地，看着 ',
            daiwa.get_colored_name(),
            ' 在草地上爽快地奔跑，',
            digital.get_colored_name(),
            ' 觉得自己也充满了干劲。',
          ]);
          break;
        case 2:
          await you.say_and_wait('既然这样的话，读一下你说的买到的书如何？');
          await digital.say_and_wait(
            '诶！这个确实……虽然都挺短的，再次回顾一下也无妨！',
          );
          await digital.say_and_wait([
            '摄入各种各样',
            digital.uma_sex_title,
            '酱的能量，这样在新的一年才有能量持续冲刺啊！',
          ]);
          await era.printAndWait([
            '就这样，',
            digital.get_colored_name(),
            ' 今天回到了宿舍看书，等再次看到 ',
            digital.get_colored_name(),
            ' 带着满脸沉浸的表情，',
            you.get_colored_name(),
            ' 知道',
            digital.sex,
            '休息得很不错。',
          ]);
          break;
        case 3:
          await you.say_and_wait([
            '模仿一下其他',
            digital.uma_sex_title,
            '，从中学得技能如何？',
          ]);
          await digital.say_and_wait(
            '的确！模仿推们学习技能！这正是吾辈的任务所在！',
          );
          await digital.say_and_wait('哦哦哦！哦？');
          await era.printAndWait([
            '来到训练场上的看台，回忆之前在台上观察着',
            digital.uma_sex_title,
            '的技能……',
          ]);
          await digital.say_and_wait('接下来请看！帝王舞步！');
          await era.printAndWait(
            '哦哦哦，是著名的那个帝王舞步！通过高幅度高抬腿的动作来达到增长步幅的技能！',
          );
          await era.printAndWait('哦哦哦，本尊貌似也到了。');
          await era.printAndWait([teio.get_colored_name(), '？何时到的？']);
          await digital.say_and_wait('呜哇哇哇！我不是故意要冒犯的！');
          await era.printAndWait([digital.get_colored_name(), '！凋零！']);
          await era.printAndWait([
            '不过之后 ',
            digital.get_colored_name(),
            ' 倒是从 ',
            teio.get_colored_name(),
            ' 那里真的学到了技巧。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_hyac_sta: (() => {
    const title = '风信子锦标开始！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} nikk_hai 日经新春杯（上色版名字）
     */
    const f = async (digital, doto, you, callname, nikk_hai) => {
      await era.printAndWait([
        '在前一段时间里，',
        nikk_hai,
        ' 中，',
        doto.get_colored_name(),
        ' 拿到了第二名。',
      ]);
      await era.printAndWait([
        '本来只是想要在地下通道祝贺 ',
        doto.get_colored_name(),
        ' 的 ',
        digital.get_colored_name(),
        '，还为之前的逾越头疼的 ',
        digital.get_colored_name(),
        '，却意外地收获了 ',
        doto.get_colored_name(),
        ' 的感谢。',
      ]);
      await era.printAndWait([
        '明明是违背了一般粉丝的决定，却逐渐开花结果了，这让 ',
        digital.get_colored_name(),
        ' 逐渐无法理解了。',
      ]);
      await era.printAndWait(
        '而解决问题的方式，就是比赛，今天的这场比赛，就是之前就已经预定的比赛。',
      );
      await era.printAndWait('作为一场OP赛，连G3都不是的小比赛。');
      await era.printAndWait([
        '在亮相圈里，',
        digital.get_colored_name(),
        ' 死死地盯着其他的',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 的双手化作爪子在空中舞动，瞳孔里饱含着「美味」的含义……',
      ]);
      era.printButton('「数码你可不要扑上去了哦。」', 1);
      await era.input();
      await digital.say_and_wait('不，本来之前也没有扑过吧。');
      await digital.say_and_wait([
        '说到这里，',
        callname,
        '，总感觉好奇怪啊。',
      ]);
      await digital.say_and_wait(
        '感觉好像，气氛特别的严峻，但是其中所包含的尊味，又没有变化……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' 发现，每个',
        digital.uma_sex_title,
        '表情上都写满了严阵以待，这股情感让 ',
        digital.get_colored_name(),
        ' 欲罢不能，但气氛又不容 ',
        digital.get_colored_name(),
        ' 像以往那样说出口。',
      ]);
      await digital.say_and_wait([
        '在这里面，应该是有更为纯粹的事物，使得',
        digital.uma_sex_title,
        '为何为尊……',
      ]);
      await you.say_and_wait('你想，触碰它？');
      await digital.say_and_wait('诶！这样也太失敬了！');
      await digital.say_and_wait(
        '不过，我想，尽量在比起以前更为接近的位置观察……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' 依旧还是把自己当成观众，但是，',
        digital.sex,
        '的眼神却比以往发生了一丝变化。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hyac_sta_win: (() => {
    const title = '风信子胜利';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} diamond_lord 钻石君主（爱丽数码剧情 NPC）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} nhk_cup NHK英里杯（上色版名字）
     */
    const f = async (digital, diamond_lord, you, callname, nhk_cup) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' 果然还是漂亮地到达了终点，该说是毫无悬念吗……',
      ]);
      await digital.say_and_wait('呼……哈……数码我，做到了……');
      await digital.say_and_wait([
        '冲过了终点，然后，见证到了，',
        digital.uma_sex_title,
        '酱们的光辉！',
      ]);
      await digital.say_and_wait([
        '该说是果然还是有点意外呢！我本以为是',
        digital.uma_sex_title,
        '酱们这种奔跑的觉悟很尊……',
      ]);
      await digital.say_and_wait([
        '但恐怕',
        digital.uma_sex_title,
        '酱们对比赛所寄托的愿望更深……只要我再继续比赛，那一定能知道',
        digital.couple_title,
        '耀眼的原因！',
      ]);
      await digital.say_and_wait('再接着以这种不干扰的主义推下去吧！');
      await you.say_as_passer_by_and_wait('？？？', '呜呜呜……呜……');
      await you.say_as_passer_by_and_wait('？？？', '唔啊啊啊啊啊！');
      await digital.print_and_wait([
        '从不远处传来了某个',
        digital.uma_sex_title,
        '的痛哭。',
      ]);
      await digital.say_and_wait([
        '那个',
        digital.uma_sex_title,
        '，我记得是刚才……',
      ]);
      await digital.print_and_wait([
        '如果没记错的话，',
        digital.sex,
        '刚好是第六名，恰好在揭示板外。',
      ]);
      await you.say_as_passer_by_and_wait(
        '？？？',
        '揭示板……连揭示板都没能……重赏又怎么有可能……！',
      );
      await digital.print_and_wait([
        '一直以来都看着',
        digital.uma_sex_title,
        '的 ',
        digital.get_colored_name(),
        '，现在却完全不敢再继续注视了，扭开视角转过身来。',
      ]);
      await digital.print_and_wait([
        '在穿过地下通道时，',
        digital.get_colored_name(),
        ' 一直都回避着其他',
        digital.uma_sex_title,
        '，不是以往的保持距离，而是刻意避开不看。',
      ]);
      await digital.say_and_wait('……');
      await digital.print_and_wait([
        '即使如此，前面还是看到了两个',
        digital.uma_sex_title,
        '，是刚才第二第三的',
        digital.uma_sex_title,
        '啊。',
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' 正准备避开，然后……',
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title}A`;
      await diamond_lord.say_and_wait('呜呜呜……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '不是不是，第二名了哦？你哭什么啊？',
      );
      await diamond_lord.say_and_wait(
        '明明，明明，是与前辈你的对决的……一直以来都想着，能与你比胜负，然后，超越你……',
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '那不是达到了吗？你啊，真的很强啊，我也差不多要成老骨头了噢～',
      );
      await diamond_lord.say_and_wait([
        '……我一直都以为……我只要胜过前辈……我就能……但是，',
        digital.sex,
        '真的，很强……伸出手都无法……',
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        diamond_lord.get_colored_name(),
        '！你努力了吧！全力以赴了吧！',
      ]);
      await diamond_lord.say_and_wait('但是……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '不管你我的成绩如何，闪耀系列赛还是会一直持续下去，它可不会等我们！',
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        '你比我强，而且，你还有潜力，你以后，一定会挑战重赏吧！一定会挑战G1吧！',
        '让',
        digital.couple_title,
        '刮目相看吧！',
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '胜者舞台，能一起去吧？',
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        'B抬起了手，擦了',
        digital.sex,
        '同伴的眼泪。',
      ]);
      await diamond_lord.say_and_wait('！');
      await digital.print_and_wait([
        digital.sex,
        '使劲地吸了下流下的鼻涕，狠狠地点了头。',
      ]);
      await digital.print_and_wait([
        '看着',
        digital.couple_title,
        '拉着手远去，',
        digital.get_colored_name(),
        ' 这次，再也无法说出任何「磕到了」的话。',
      ]);
      era.drawLine();
      await digital.say_and_wait('……');
      await you.say_and_wait('数码，还好吗？');
      await digital.say_and_wait('骗人的……不干涉什么的……');
      await digital.say_and_wait('这种事情，根本不可能。');
      await digital.say_and_wait(
        '只要参赛，那就一定会有胜者，一定会有败者……就算输了也很尊，全部都是胜者什么的，真亏我说得出这种话啊……',
      );
      era.printButton(
        '「正是登上赛场，所建立的联系，才会让你们如此之尊，这不是你一直以来就知道的吗？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' 在此次比赛，似乎是能窥探到了一些',
        digital.uma_sex_title,
        '为何尊，为何伟大的奥秘了。',
      ]);
      await era.printAndWait([
        '但是',
        digital.sex,
        '又突然认识到了',
        digital.sex,
        '作为一个对手，却把自己当成一个观众，还无情地夺走了冠军。',
      ]);
      await era.printAndWait('这是十分失敬的。');
      await era.printAndWait([
        '所以 ',
        digital.get_colored_name(),
        '，在胜者舞台后，回到训练室时……',
      ]);
      await digital.say_and_wait([
        callname,
        '，我想要聊一下关于之后的事情，我要说一些不像我自己的话了，可以吗？？',
      ]);
      await you.say_and_wait('当然。');
      await digital.say_and_wait('我觉得，不论如何，我都要参加……G1赛事。');
      await digital.say_and_wait(
        '感觉，对在场的所有你们，都是犯下了需要在炙热铁板上土下座的失礼',
      );
      await digital.say_and_wait(
        '既然如此，那就不得不去做了，参赛，战胜G1，然后让其他人觉得，数码很强。',
      );
      await era.printAndWait([
        '想要证明，证明',
        digital.sex,
        '真的是足够强大的，为了给所有输给',
        digital.sex,
        '的',
        digital.uma_sex_title,
        '一个交代。',
      ]);
      await digital.say_and_wait([
        '还有，想要确定一下，',
        digital.uma_sex_title,
        '酱们到底是如何面对G1比赛的！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        '，将下一次比赛，定在了五月前半的 ',
        nhk_cup,
        '。',
      ]);
      await digital.say_and_wait([
        '我要，出赛，然后——带着',
        digital.couple_title,
        '的份一起！',
      ]);
      await era.printAndWait([
        '偶然的事件，但并不是偶然的结果，胜利与失败，其所蕴含的悲哀——推动了 ',
        digital.get_colored_name(),
        ' 的未来。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_nhk_cup: (() => {
    const title = 'NHK英里杯开始！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     */
    const f = async (digital, you) => {
      await digital.say_and_wait('噢噢噢噢噢噢噢！果然，很不一样啊！');
      await era.printAndWait('G1赛场，超过十万观众的比赛……');
      await era.printAndWait(
        '即使是经常观看，站在亮相圈所带来的感觉还是十分新鲜。',
      );
      await era.printAndWait(
        '十万观众所带来的气氛足够震撼，但真正的大头，是选手的……',
      );
      await digital.say_and_wait(
        '怎怎怎怎么回事！这股气息，这股如同领域般的压迫力！',
      );
      await digital.say_and_wait('糟糕！赛高！简直可以说是尊高！');
      await you.say_and_wait('很兴奋是吧！那就正是在状态上啊！');
      await digital.say_and_wait('已经，已经什么都想不了了，大脑，已经……');
      await digital.say_and_wait(
        '美丽，恐怖，感觉这分辨率都要达到4K了，现在连站在这里都有点难……',
      );
      await digital.say_and_wait([
        '不过，我要搞明白，',
        digital.uma_sex_title,
        '酱的尊的奥妙！',
      ]);
      await digital.say_and_wait('就算……我会尊得幻化成灰……哈？！');
      await era.printAndWait([
        '怎么了，',
        digital.get_colored_name(),
        ' 说着说着突然一个哆嗦。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 环视了一下，然后……',
      ]);
      await digital.say_and_wait('感觉好像有人在盯着我？');
      await era.printAndWait([
        '选手的话，',
        you.get_colored_name(),
        ' 看得很清楚，并没有盯着 ',
        digital.get_colored_name(),
        ' 的人，那应该就是从观众席传过来的。',
      ]);
      await digital.say_and_wait('是吗，我居然，也在推中，做着被推的梦吗……');
      await digital.say_and_wait('不能在这样轻浮了！');
      await era.printAndWait([
        '如此重大的比赛，想必 ',
        digital.get_colored_name(),
        ' 也能激发',
        digital.sex,
        '的素质吧。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  nhk_cup_win: (() => {
    const title = 'NHK英里杯胜利';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} callname_15 好歌剧对玩家的称呼
     * @param {PrintedSpan} o_call_di 好歌剧对爱丽数码的称呼
     * @param {PrintedSpan} o_call_do 好歌剧对名将怒涛的称呼
     * @param {PrintedSpan} do_call_di 名将怒涛对爱丽数码的称呼
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      call_15,
      call_58,
      callname_15,
      o_call_di,
      o_call_do,
      do_call_di,
      takz_kin,
      japa_dir,
    ) => {
      await you.say_as_passer_by_and_wait('解说', [
        '是 ',
        digital.get_colored_name(),
        '！',
        digital.get_colored_name(),
        '！',
        digital.sex,
        '给我们展示了无论是草地还是泥地，都不在',
        digital.sex,
        '的话下！',
      ]);
      await era.printAndWait([
        '冲过终点的 ',
        digital.get_colored_name(),
        '，连脚步都有点踉踉跄跄了。',
      ]);
      await digital.say_and_wait(
        '哈……呼……好……没有一点残余能量了……连推的余力都没了……用了，全力……！',
      );
      await digital.say_and_wait('啊啊啊，阳光……好耀眼……天空……好……遥远……');
      await digital.say_and_wait('啊……这就是……');
      await era.printAndWait('（咚！）');
      await era.printAndWait([digital.get_colored_name(), ' 倒下了！']);
      era.drawLine();
      await era.printAndWait([
        '幸好，经过了赶来医生的判断，',
        digital.get_colored_name(),
        ' 只是运动过度了，休息一下就好。',
      ]);
      await era.printAndWait([
        '在这一次，',
        digital.get_colored_name(),
        ' 真正地用出了全力，跟以往不同，这次的 ',
        digital.get_colored_name(),
        '，背负了作为选手的信念。',
      ]);
      await era.printAndWait([
        '所以，在用尽全力后，',
        digital.get_colored_name(),
        ' 激动地倒下了。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 背着 ',
        digital.get_colored_name(),
        '，回到了休息室，然后……发现了两个熟悉的身影，是 ',
        opera.get_colored_name(),
        ' 还有 ',
        doto.get_colored_name(),
        '。',
      ]);
      await opera.say_and_wait([o_call_di, '？振作一点！']);
      await you.say_and_wait(['没事，', digital.sex, '休息一下就好。']);
      await era.printAndWait([
        '在说着的过程中，把 ',
        digital.get_colored_name(),
        ' 躺着放在了休息室的沙发上。',
      ]);
      await era.printAndWait([
        '没过多久，',
        digital.get_colored_name(),
        ' 就睁开了双眼。',
      ]);
      await digital.say_and_wait('嗯……嗯……诶？！');
      await digital.say_and_wait([call_15, ' 和 ', call_58, '？！你们怎么？']);
      await you.say_and_wait([
        digital.couple_title,
        '非常担心你，所以也来到了休息室来看望你……倒不如说是一开始就在休息室里面了。',
      ]);
      await digital.say_and_wait('怎么这么突然？');
      await opera.say_and_wait([
        '不是突然！是 ',
        o_call_do,
        '，说有一位能在各种舞台回旋的舞者，为了欣赏新的演员的诞生，所以，我来了。',
      ]);
      await doto.say_and_wait([
        '唔唔唔，我非常感谢 ',
        do_call_di,
        ' 你的开导！因此，在这场比赛我也来给你加油了！',
      ]);
      await opera.say_and_wait(
        '我们在比赛前就一直隐藏我霸王的气息，装作一般路过的观众来研究你！',
      );
      await doto.say_and_wait('因为怕我这种人在亮相圈搭话会影响到你……所以……');
      await digital.say_and_wait(
        '不不不！怎么会影响呢，倒不如说是我的荣幸……原来一开始的异样感是这样啊。',
      );
      await digital.say_and_wait([
        '还有，我逐渐明白了，',
        call_15,
        ' 和 ',
        call_58,
        ' 啊，为什么这么耀眼华丽……',
      ]);
      await digital.say_and_wait('终于……稍微……能接近了一些……');
      await opera.say_and_wait(
        '哈哈哈！是吗？不过，果然还是因为我的华丽可是天生的啊！',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' 相当欣赏 ',
        digital.get_colored_name(),
        '，而 ',
        doto.get_colored_name(),
        ' 则是感谢 ',
        digital.get_colored_name(),
        ' 对',
        digital.sex,
        '的鼓舞。',
      ]);
      await you.say_and_wait('你们应该来到这里，应该还有其他想说的吧？');
      await era.printAndWait(['接着，', digital.couple_title, '宣布了……']);
      await opera.say_and_wait([
        '我和 ',
        o_call_do,
        '，在接下来的 ',
        takz_kin,
        ' 要进行初次的共演！',
      ]);
      await doto.say_and_wait(
        '我，我终于也能出战G1了，虽然，只是在一个无人在意的角落……',
      );
      await digital.say_and_wait('！初次的revue，我明白了！这下不得不去看了！');
      await opera.say_and_wait(
        '不过，你也应该有对应的节目吧？向我们展示你的全能才能！',
      );
      await opera.say_and_wait(
        '你还未在泥地G1胜利过，没有这个的话，还不完整，是吧？',
      );
      await you.say_and_wait([
        '接下来比较合适的泥地G1，是夏合宿期间的 ',
        japa_dir,
        '。',
      ]);
      await opera.say_and_wait([
        '不愧是 ',
        callname_15,
        '！那么，',
        digital.get_colored_name(),
        '，你要接受我们的邀请吗？',
      ]);
      await digital.say_and_wait('我接受了！');
      await era.printAndWait([
        '所以',
        digital.couple_title,
        '做出约定，',
        opera.get_colored_name(),
        ' 和 ',
        doto.get_colored_name(),
        ' 在 ',
        takz_kin,
        ' 中给予最盛大的比赛，而 ',
        digital.get_colored_name(),
        ' 要在 ',
        japa_dir,
        ' 中也要展示',
        digital.sex,
        '身为全能选手的本领。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_24: (() => {
    const title = '宝冢纪念';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, japa_dir) => {
      await era.printAndWait([
        '这天，就是 ',
        opera.get_colored_name(),
        ' 和 ',
        doto.get_colored_name(),
        ' 的初次对决。',
      ]);
      await digital.say_and_wait(
        '啊啊，无法避免的一天，果然还是来了！大脑，已经停不下来了！',
      );
      await digital.say_and_wait(
        '在梦里都能见到的比赛！不对，梦里的终究无法比及现实的比赛！',
      );
      await digital.say_and_wait('怎么，要全身插满应援棒去应援吗？！');
      era.printButton('「不不，这样会被保安请出去的吧。」', 1);
      await era.input();
      await era.printAndWait([
        '就这样来到了阪神赛场，',
        opera.get_colored_name(),
        ' 和 ',
        doto.get_colored_name(),
        ' 的激斗啊……',
      ]);
      await era.printAndWait('就这样来到了阪神赛场，好歌剧和名将怒涛的激斗啊…');
      await era.printAndWait([
        opera.get_colored_name(),
        ' 的实力 ',
        you.get_colored_name(),
        ' 比较清楚，但 ',
        doto.get_colored_name(),
        ' 居然也能到这种地步……',
      ]);
      await era.printAndWait([
        '最后甚至还是并列冲线，',
        opera.get_colored_name(),
        ' 仅仅略胜 ',
        doto.get_colored_name(),
        ' 一筹。',
      ]);
      await era.printAndWait(
        '是什么原因，仅仅的本格化也暂且带不来这心境的转化……',
      );
      await era.printAndWait([
        '是 ',
        digital.get_colored_name(),
        ' 让',
        digital.sex,
        '变成这样的吗……',
      ]);
      await era.printAndWait([
        '该说 ',
        digital.get_colored_name(),
        ' 真是厉害吗……瞄了一眼 ',
        digital.get_colored_name(),
        '，诶，',
        digital.sex,
        '果然还是着迷地摇头晃脑。',
      ]);
      await digital.say_and_wait('诶哇哇哇哇……', true);
      await digital.say_and_wait('唔姆……', true);
      await digital.say_and_wait('刚才，那是什么……那个光辉？', true);
      await digital.say_and_wait(
        '我甚至已经……在刚才都脱离了尊这一念头……',
        true,
      );
      await digital.say_and_wait(
        [
          '是因为是 ',
          call_15,
          ' 和 ',
          call_58,
          ' 吗……是因为',
          digital.couple_title,
          '是特别的吗？',
        ],
        true,
      );
      await era.printAndWait([
        '就这样，即使 ',
        digital.get_colored_name(),
        ' 仍未能明白其中本意，接力棒还是递给了 ',
        digital.get_colored_name(),
        '，接下来就是 ',
        digital.get_colored_name(),
        ' 在 ',
        japa_dir,
        ' 的舞台了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = '日本泥地德比开始！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (digital, you, japa_dir) => {
      await digital.say_and_wait(
        [
          '我还没注意到，',
          digital.uma_sex_title,
          '酱们的尊能源的根源，那一定是无比珍贵之物……',
        ],
        true,
      );
      await digital.say_and_wait(
        '大井……夜晚……泥地……在这少来的异乡赛道，在这特殊的赛场，也许，就存在着我想要找到的秘密……',
        true,
      );
      era.drawLine();
      await digital.say_and_wait([
        '『',
        japa_dir,
        '』，总感觉这场比赛的氛围很独特呢。',
      ]);
      await you.say_and_wait('JG1赛事……这种类型赛事总会带有很多的偏见。');
      await digital.say_and_wait(
        '即使如此，这场赛事带来的炙热气息，就像夏日的太阳……',
      );
      await digital.say_and_wait(
        '无论是赛道、景色、还是草地泥地都不一样，就算如此也好……',
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        '酱的心情，都是一样的吧？',
      ]);
      await era.printAndWait(
        '没错，无论是G1还是G3、重赏还是公开赛、草地还是泥地、中央还是地方……',
      );
      await you.say_and_wait('都一样的。');
      await you.say_and_wait(
        '这场比赛过后，你就经历了所有类型比赛了，肯定能明白为何一样吧。',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '，或许早就明白了，',
        digital.sex,
        '只是需要求证而已，就通过这场比赛。',
      ]);
      await digital.say_and_wait([
        '现在！就和大井的泥地',
        digital.uma_sex_title,
        '酱一起，找到答案！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = '日本泥地德比胜利';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      japa_dir,
    ) => {
      await digital.say_and_wait(
        '在这场比赛，与先前的草地比赛不同却又相同。',
        true,
      );
      await digital.say_and_wait('唔噢噢噢噢噢噢噢！！！！', true);
      await digital.say_and_wait(
        '扬起的沙尘……看不清……但是感觉光辉……透过来了……',
        true,
      );
      await digital.say_and_wait(
        [
          '即使是完全不同的赛道……',
          digital.couple_title,
          '都始终拥有着不渝的光辉……',
        ],
        true,
      );
      await digital.say_and_wait(
        ['不能在这里，辜负', digital.couple_title, '的心啊！！！！'],
        true,
      );
      await digital.say_and_wait('哈啊啊啊啊啊啊啊！', true);
      era.drawLine();
      await era.printAndWait([
        '完赛了，',
        digital.get_colored_name(),
        ' 真的很出色，在这场环境完全不同的赛道，也能取得这样优秀的成绩。',
      ]);
      await you.say_and_wait('感觉怎么样？');
      await era.printAndWait([
        digital.get_colored_name(),
        '，带着与以前完全不同的，认真的表情。',
      ]);
      await digital.say_and_wait([
        '数码，',
        digital.get_colored_name(),
        '，我懂了。',
      ]);
      await you.say_and_wait('嗯。');
      await digital.say_and_wait([
        '从儿时开始，就一直让我入迷的',
        digital.uma_sex_title,
        '酱的尊……',
      ]);
      await digital.say_and_wait([
        '我知道了，在今天跑完『',
        japa_dir,
        '』后，明白了。',
      ]);
      await digital.say_and_wait([digital.uma_sex_title, '酱，可爱。']);
      await digital.say_and_wait([digital.uma_sex_title, '酱，很尊。']);
      await digital.say_and_wait([
        '那么，',
        digital.couple_title,
        '为何而可爱？',
        digital.couple_title,
        '的哪里让我觉得伟大、无可救药地吸引着我？',
      ]);
      await digital.say_and_wait([
        '今天终于明白了，我喜欢的是',
        digital.couple_title,
        '『奋不顾身地为自己的梦想而拼搏』的样子啊！',
      ]);
      await era.printAndWait([
        '咚咚咚地跺着脚，表达出 ',
        digital.get_colored_name(),
        ' ',
        digital.sex,
        '终于明白的喜悦。',
      ]);
      await digital.say_and_wait(
        '明白了后，真想穿越回去暴揍过去以为『只有中央的草地G1才是特别的』我！',
      );
      await you.say_and_wait('哈哈，简直就是定番的感想啊。');
      await digital.say_and_wait([
        '喂喂喂，你早就知道的吧，',
        digital.uma_sex_title,
        '酱们一直都是一样的。',
      ]);
      await digital.say_and_wait([
        digital.couple_title,
        '真的有想要的东西，想要成为的人，以那为目标，在拼命的努力着。',
      ]);
      await era.printAndWait(
        '这种人，无论放在哪里，都是耀眼的，何况放在一起比赛呢？',
      );
      await digital.say_and_wait([
        digital.couple_title,
        '全力互相联系，互相帮助……时而为同一个胜利斗争，但又不惧怕斗争，一直都在看着前方。',
      ]);
      await digital.say_and_wait('在一切都尘埃落定后，一起贴贴！');
      await you.say_and_wait('嘛，又是定番剧情呢。');
      await digital.say_and_wait('正是这种定番剧情，我的灵魂才会如此震撼啊！');
      await digital.say_and_wait(
        '虽然在出道之前一直都自以为是……但结果今天才……',
      );
      await digital.say_and_wait('啊哇哇哇，真是……');
      await digital.say_and_wait([
        call_15,
        ' 和 ',
        call_58,
        ' 的那次比赛，现在回过头来，也总算懂了。',
      ]);
      await era.printAndWait([
        opera.get_colored_name(),
        ' 和 ',
        doto.get_colored_name(),
        ' 的对决在宝冢上的光辉，让 ',
        digital.get_colored_name(),
        ' 无比羡慕。',
      ]);
      await era.printAndWait([
        '而现在，',
        digital.get_colored_name(),
        ' 终于也能够触碰到这束光芒。',
      ]);
      await digital.say_and_wait(
        '如果在这样下去的话……不行！数码啊！要开始动起来！',
      );
      await digital.say_and_wait(
        '即使是我的话，我能做好觉悟，怀着纯粹的心情站在闸门前的话！',
      );
      await digital.say_and_wait([
        callname,
        '……我……即使是我……也能成为，这样的存在吗？！',
      ]);
      era.printButton('「当然能！」', 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' 终于，在此刻，成为一名真正的选手。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（经典年）开始';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (digital, you, japa_dir, mile_cha) => {
      await era.printAndWait([
        '夏合宿！是一年中最重要的活动！这一段时间是',
        digital.uma_sex_title,
        '们进步的大好时机！作为训练员的 ',
        you.get_colored_name(),
        '，自然也特别重视这次活动。',
      ]);
      await era.printAndWait([
        '特别是要接着上次 ',
        japa_dir,
        ' 的势头，接着去冲击下一场比赛。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 已经能想象得到 ',
        digital.get_colored_name(),
        ' 的光明道路了，只是……',
      ]);
      await digital.say_and_wait(
        '库哇……果然还是被胜利冲晕了头脑，我居然，我居然想要成为这神圣的存在……',
      );
      await era.printAndWait('……啊，开局不利啊。');
      await digital.say_and_wait(
        '一旦余韵过去之后，进入那种所谓的贤者模式，就会懊恼自己是那么的……',
      );
      era.printButton('「等等，数码，你在后悔吗？在后悔自己做的决定吗？」', 1);
      await era.input();
      await era.printAndWait([
        '像是被戳到痛点一样，',
        digital.get_colored_name(),
        ' 整个身子都立了起来。',
      ]);
      await digital.say_and_wait([
        '只是，也有时候觉得自己挺麻烦的……明明自己还预定了 ',
        mile_cha,
        '……',
      ]);
      await digital.say_and_wait(
        '喏喏喏喏喏！麻烦的事情就先不想了！接下来应该先想一下Comic的事情！',
      );
      era.printButton('「Comic？那是什么？」', 1);
      await era.input();
      await digital.say_and_wait('诶！');
      await era.printAndWait([
        '突然被 ',
        you.get_colored_name(),
        ' 打断的 ',
        digital.get_colored_name(),
        ' 变得支支吾吾了起来。',
      ]);
      await digital.say_and_wait(
        '总之！刚比赛结束，也先让我放松一下吧，啊哈哈哈!',
      );
      await era.printAndWait('这次的夏合宿，有点让人担忧啊……');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = '夏季合宿（经典年）途中';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} callname_61 圣王光环对玩家的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} mile_cha 爱丽数码对圣王光环的称呼
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      mile_cha,
    ) => {
      await era.printAndWait([
        '在夏合宿开始的第一周，',
        digital.get_colored_name(),
        ' 虽然训练是没落下，但……总觉得 ',
        digital.get_colored_name(),
        ' 有点心不在焉。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也大概知道了，',
        digital.get_colored_name(),
        ' 似乎也在准备点其他的东西，但那也是 ',
        digital.get_colored_name(),
        ' 的爱好，你也不太好说什么。',
      ]);
      era.printButton('「该怎么办才好呢……」', 1);
      await era.input();
      await era.printAndWait([
        '看着 ',
        digital.get_colored_name(),
        ' 在做着力量训练的同时，',
        you.get_colored_name(),
        ' 无意间看到了 ',
        halo.get_colored_name(),
        ' 在沙滩那边站着看着海。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        '，',
        digital.get_colored_name(),
        ' 在以前就十分推的',
        digital.uma_sex_title,
        '，当时的 ',
        mile_cha,
        ' ',
        digital.get_colored_name(),
        ' 和 ',
        you.get_colored_name(),
        ' 还一起去看了来着。',
      ]);
      await era.printAndWait([
        '最近',
        digital.sex,
        '的战绩，也逐渐有点……微妙。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 也注意到了 ',
        halo.get_colored_name(),
        '，身为粉丝，',
        digital.sex,
        '的情绪也有点低落。',
      ]);
      await you.say_and_wait(['要不，帮 ', call_61, ' 打一下气如何？']);
      await digital.say_and_wait(
        '嗯……身为粉丝，帮助偶像打气也是一个道理……好！决定了，先把手头的原稿放下！',
      );
      await you.say_and_wait('原稿？什么原稿？');
      await digital.say_and_wait('本子的原稿。');
      await you.say_and_wait('什么的本子？');
      await digital.say_and_wait('就是普通同人志的本子啊。');
      await era.printAndWait('听不懂了……');
      await digital.say_and_wait([
        '我本来是准备想要在最近的漫展上销售 ',
        call_61,
        ' 的同人志，向大家宣传 ',
        call_61,
        ' 的好的……',
      ]);
      await halo.say_as_unknown_and_wait(
        '圣王的同人志吗，这种事情本人都没听说过啊。',
      );
      await digital.say_and_wait([
        '啊，这种让本人知道可是禁忌哦，当然不能让 ',
        call_61,
        '……咻哇！',
        call_61,
        '？！',
      ]);
      await era.printAndWait('主人公从同人志里跑出来了。');
      await digital.say_and_wait('刚刚都是开玩笑的！都是我无聊的妄想罢了！');
      await halo.say_and_wait(
        '不过，谢谢了，也多亏了你，啊哈哈哈哈！King的魅力也是一流啊！',
      );
      await halo.say_and_wait([
        '事实上，我想问的是，',
        h_call_d,
        '，你是要出赛今年的『',
        mile_cha,
        '』吧？',
      ]);
      await digital.say_and_wait([
        '诶？是的！因为被您在去年的比赛所感动，所以我也想要尽可能接近您……但是……为什么 ',
        call_61,
        ' 你……',
      ]);
      await halo.say_and_wait('因为我也会出赛。');
      await era.printAndWait([
        halo.get_colored_name(),
        ' 在 ',
        mile_cha,
        ' 也会出场，并且还会和 ',
        digital.get_colored_name(),
        ' 同台竞技。',
      ]);
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 的脸上突然蒙上了一层阴影。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 明白，在长时间的职业生涯里，',
        halo.get_colored_name(),
        ' 已经从巅峰期逐渐下滑到了低谷。',
      ]);
      await digital.say_and_wait([
        '那个，',
        call_61,
        '……虽然我说这话有点厚颜无耻……我，会为你应援的。',
      ]);
      await digital.say_and_wait(
        '那个……就算是对手，想推的心情也是一样强烈的……',
      );
      await era.printAndWait([
        '面对此种情况，',
        digital.get_colored_name(),
        ' 心情复杂，跟偶像同台竞技，本来就是梦寐以求的，但是，如果面对的偶像早已开始衰退呢？',
      ]);
      await you.say_and_wait('数码！');
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 略有无辜地看向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait([
        '数码，你应该明白的才对，在赛场上的',
        digital.uma_sex_title,
        '——',
      ]);
      await halo.say_and_wait([
        callname_61,
        '，很抱歉打断你，',
        h_call_d,
        '，我有一个提案。',
      ]);
      await halo.say_and_wait([
        h_call_d,
        '，在这个合宿结束的时候，我们一起来一场比赛吧。',
      ]);
      await digital.say_and_wait('哈？！唔噢？跟偶像一起什么的，做不到的……');
      await you.say_and_wait(['圣王……十分感谢你。']);
      await halo.say_and_wait([
        '没问题，作为一流的',
        digital.uma_sex_title,
        '自然要回馈一流的粉丝——啊哈哈哈哈！',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' 看出了 ',
        digital.get_colored_name(),
        ' 的困惑，',
        digital.sex,
        '邀请 ',
        digital.get_colored_name(),
        ' 一起跑步。',
      ]);
      await era.printAndWait([
        '于是，在接下来仅剩的夏合宿中，',
        digital.get_colored_name(),
        ' 将要在最后和 ',
        halo.get_colored_name(),
        ' 一同进行一场模拟比赛。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿（经典年）结束';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} callname_61 圣王光环对玩家的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} takm_kin 高松宫纪念（上色版名字）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      takm_kin,
    ) => {
      await digital.say_and_wait('嘿嘿……呼……感谢赐予的对决……');
      await era.printAndWait([
        '在夏合宿的最后，就是预定的 ',
        digital.get_colored_name(),
        ' 和 ',
        halo.get_colored_name(),
        ' 的对决……',
      ]);
      await era.printAndWait('不过，看起来有点……随意吗？');
      await halo.say_and_wait([
        '哈……呼……',
        h_call_d,
        '，你的脚步，相当地踌躇呢，怎么了？',
      ]);
      await digital.say_and_wait(
        '呀，不……该说是一直都在吃着闪光弹吗，还是被空气中携带的尊窒息了吗……',
      );
      await digital.say_and_wait(
        '以前我都是作为观众那一方的……居然想要追上什么的，太得意忘形啦……',
      );
      await digital.say_and_wait(
        '我也是最近，才有那种『认真去跑』觉悟的普通底层人而已……',
      );
      await halo.say_and_wait([
        '啊啦，看起来相当地没自信啊。不过，真仅此而已吗？',
        callname_61,
        '，',
        h_call_d,
        ' 的实力，你应该知道的吧？',
      ]);
      await you.say_and_wait('要是在现在的沙地的话，数码是不会输的。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' ',
        digital.sex,
        '仍在在意现在的 ',
        halo.get_colored_name(),
        '。',
      ]);
      await digital.say_and_wait([call_61, '……现在……和原来相差甚远……是吧……']);
      await digital.say_and_wait([
        '今年春天，在『',
        takm_kin,
        '』上的胜利，然后就……流利的跑姿，身体的跃动感，该说都没这次比赛的实力了吗……',
      ]);
      await digital.say_and_wait(
        '我知道的，正因为每次都扶着栅栏探出身子去看的啊。',
      );
      await digital.say_and_wait([
        '现在的 ',
        call_61,
        ' 有多么痛苦，因为我也出道了，所以我也能……知道了一些……',
      ]);
      await era.printAndWait([
        '成为选手后的 ',
        digital.get_colored_name(),
        '，比起以前，所能触碰到的都更多了，像这样的感情也是。',
      ]);
      await halo.say_and_wait([
        '所以才没心情吗……这样啊，哼……',
        h_call_d,
        ' 你……',
      ]);
      await halo.say_and_wait('是笨蛋啊。');
      await digital.say_and_wait('诶？');
      await era.printAndWait([
        '意外之外的话语让 ',
        digital.get_colored_name(),
        ' 吃了一惊。',
      ]);
      await halo.say_and_wait('笨蛋，还是大笨蛋。');
      await halo.say_and_wait('你看着很了解我，但还啥都不懂呢。');
      await era.printAndWait('严厉的话语，却带着温柔的声音。');
      await halo.say_and_wait([
        '那个，',
        h_call_d,
        '，你对我这个',
        digital.uma_sex_title,
        '，很感兴趣吧？',
      ]);
      await digital.say_and_wait('！是的！');
      await halo.say_and_wait(
        '这样吧，在合宿结束后，我赐予你和我一起训练的权利！',
      );
      await halo.say_and_wait([
        '让你看看，',
        halo.get_colored_name(),
        ' 是怎样的',
        digital.uma_sex_title,
        '！',
      ]);
      await digital.say_and_wait('请务必！');
      await digital.say_and_wait([
        '太过于光荣连尾巴都弹跳起来了！数码居然要和那个',
        digital.sex_code - 1 ? '女神' : '神明',
        '一起！',
      ]);
      await era.printAndWait([
        '在夏天的末尾，',
        digital.get_colored_name(),
        ' 和憧憬的',
        digital.uma_sex_title,
        '建立了联系。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = '一流的条件';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} sprt_sta 短途马锦标（上色版名字）
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (digital, halo, call_61, h_call_d, sprt_sta, mile_cha) => {
      await digital.print_and_wait([
        '在 ',
        digital.get_colored_name(),
        ' 向着 ',
        mile_cha,
        ' 前进的同时，',
        halo.get_colored_name(),
        ' 也在同时做出努力。',
      ]);
      await digital.print_and_wait([
        sprt_sta,
        '，短距离G1比赛，理论上应该是 ',
        halo.get_colored_name(),
        ' 的优势……',
      ]);
      await digital.print_and_wait('——第七名');
      await digital.print_and_wait('连入着都没有。');
      await digital.print_and_wait([
        '赛后不久，',
        digital.get_colored_name(),
        ' 就来到 ',
        halo.get_colored_name(),
        ' 面前。',
      ]);
      await halo.say_and_wait([
        '你来看了呢，',
        h_call_d,
        '，不要管我——本来是想这样说的，但既然是你，就给你和我待在一起的权利吧。',
      ]);
      await digital.say_and_wait([
        '那个……虽然最终没能到达，但 ',
        call_61,
        ' 的美妙，再次让我钦佩不已。',
      ]);
      await digital.say_and_wait('锐利的眼神，散发的品格，华丽的过弯！');
      await halo.say_and_wait('……仅此而已吗？');
      await digital.say_and_wait('诶？');
      await halo.say_and_wait('觉得我是一流的理由，仅此而已吗？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' 接着再说了很多，但是……',
      ]);
      await halo.say_and_wait('……为了成为一流，有一件比什么都重要的东西……');
      await digital.print_and_wait('赛后的赛场，人都差不多走光了。');
      await digital.print_and_wait([
        halo.get_colored_name(),
        '，走到了赛道的起跑线，做出了起跑姿势。',
      ]);
      await halo.say_and_wait('机会难得，接下来要和我一起跑吗？');
      era.drawLine();
      await digital.print_and_wait([
        '毕竟是刚刚才比赛后，能显然看出 ',
        halo.get_colored_name(),
        ' 的乏力。',
      ]);
      await halo.say_and_wait('哈……哈……咳……呵呵呵……真是，难看啊。');
      await halo.say_and_wait([
        h_call_d,
        '，现在的我怎么样，无论是锐利的眼神，品格还是华丽，全都没有了。',
      ]);
      await halo.say_and_wait('没有留下任何一流证据的我，还是一流吗？');
      await digital.say_and_wait('这……那是……');
      await halo.say_and_wait('不过，即使是这样的我——');
      await digital.print_and_wait([
        '在比赛中看到的锐利的眼神，再一次出现在了现在的 ',
        halo.get_colored_name(),
        ' 身上。',
      ]);
      await halo.say_and_wait('再比一场的话，会怎么样？');
      await halo.say_and_wait('如果不行，明天再比一场，会怎么样？');
      await halo.say_and_wait('就算明天失败了，后天再来一次，又会怎样？');
      await halo.say_and_wait([
        h_call_d,
        '！你看看，现在的我，真的什么都不剩了？',
      ]);
      await digital.say_and_wait('！');
      await digital.say_and_wait(
        '还有留下来的！就像开拓的罗盘，万年的寒冰，不会改变！',
      );
      await halo.say_and_wait('——不屈的执念。就算被打垮也不会屈服的心。');
      await halo.say_and_wait('只有这一份，谁都无法从我这里拿走。');
      await halo.say_and_wait('这正是，我这个King，身为永远的一流的原因哟！');
      await digital.print_and_wait([
        '即便实力衰退，但是，',
        halo.get_colored_name(),
        ' 那「一流」的精神，不屈的意志，从来没有衰减。',
      ]);
      await digital.say_and_wait(['哦哦哦……', call_61, '……！']);
      await digital.print_and_wait([
        '即便遍体鳞伤，',
        halo.get_colored_name(),
        ' 的姿态还是如此美丽。',
      ]);
      await halo.say_and_wait([
        '我向你做出约定，我在『',
        mile_cha,
        '』会回到之前的状态！',
      ]);
      await halo.say_and_wait('如果要同情我，不使出全力的话，也太过于失礼了。');
      await digital.say_and_wait('是，我明白了。一流的碎片……我收下了。');
      await digital.say_and_wait('不过，在这个时候，请允许我说一句话……');
      await digital.say_and_wait([
        '您果然是……',
        halo.sex_code !== 1 ? '女神' : '神明',
        '……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_mile_cha_c: (() => {
    const title = '英里冠军赛开始！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     */
    const f = async (digital, halo, h_call_d) => {
      await era.printAndWait([
        halo.get_colored_name(),
        '，',
        digital.get_colored_name(),
        ' 出道前就已经一直仰望的',
        digital.uma_sex_title,
        '，现在，',
        digital.get_colored_name(),
        ' 终于能够和',
        digital.sex,
        '站在了一起。',
      ]);
      await era.printAndWait([
        '亮相圈上的 ',
        halo.get_colored_name(),
        '，一扫之前的颓势，气场高涨，简直就像是回到了巅峰时期。',
      ]);
      await halo.say_and_wait([
        '怎么样？',
        h_call_d,
        '，今天的我，是不是耀眼得眼睛都要花了？',
      ]);
      await digital.say_and_wait(
        '是！无比耀眼！不过……脊梁还是没有今年春天的挺直……',
      );
      await halo.say_and_wait('啊哈……还真瞒不过你呢，没想到这你都能察觉出来。');
      await halo.say_and_wait([h_call_d, '，你喜欢我到什么程度？']);
      await digital.say_and_wait('在这推得要比马里亚纳海沟还要深！');
      await era.printAndWait([
        halo.get_colored_name(),
        ' 和 ',
        digital.get_colored_name(),
        ' 有说有笑，在这里，能看出',
        digital.couple_title,
        '一定能给出一场无法述说的比赛。',
      ]);
      await digital.say_and_wait(
        '你真正的想法，我想要在今天的比赛里，弄明白！',
      );
      await halo.say_and_wait([
        '真正的一流，就用你的全身心来理解吧！',
        h_call_d,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_c: (() => {
    const title = '英里冠军赛胜利';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (
      digital,
      halo,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      h_call_d,
      mile_cha,
    ) => {
      await digital.print_and_wait([
        '从最底层爬上来的 ',
        halo.get_colored_name(),
        '，',
        digital.get_colored_name(),
        ' 将',
        digital.sex,
        '的生存战略从头到尾都看到了最后。',
      ]);
      await halo.say_and_wait([
        '怎么样，',
        h_call_d,
        '？和我一起跑了这场重要比赛，理解了吧？',
      ]);
      await halo.say_and_wait([
        halo.get_colored_name(),
        ' 是一个怎么样的',
        digital.uma_sex_title,
        '。',
      ]);
      await digital.say_and_wait('是……是的……');
      await digital.print_and_wait([
        '被 ',
        halo.get_colored_name(),
        ' 教导了「',
        digital.uma_sex_title,
        '为何物」的 ',
        digital.get_colored_name(),
        '，在夺下 ',
        mile_cha,
        ' 的胜利后泣不成声。',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' 的存在就是如此让',
        digital.sex,
        '深受感动。',
      ]);
      await halo.say_and_wait('怎么了？一直在哭，可是说不出来的哦。');
      await digital.say_and_wait('全身……都沐浴到了光辉……');
      await digital.say_and_wait([
        '然后，我明白了，作为',
        digital.uma_sex_title,
        '而活，意味着什么。',
      ]);
      await digital.say_and_wait(
        '不屈的奔跑中寄宿着灵魂！本能！无论准备是否完全，始终贯彻一流的气概！',
      );
      await digital.say_and_wait(
        '之前的我一直都无法理解，不过现在我明白了，只要奔跑就行！就连丧气话，也要边跑边说！',
      );
      await digital.say_and_wait([
        '我现在，更喜欢',
        digital.uma_sex_title,
        '了！',
      ]);
      await halo.say_and_wait([
        '呵呵，你真是喜欢',
        digital.uma_sex_title,
        '呢。',
      ]);
      await halo.say_and_wait([
        h_call_d,
        '，和更多',
        digital.uma_sex_title,
        '比赛吧！吸收一切，然后……',
      ]);
      await halo.say_and_wait([
        '成为真正的全能选手吧！毕竟，你就是你最喜欢的',
        digital.uma_sex_title,
        '的一员啊！',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' 在最后，给予了 ',
        digital.get_colored_name(),
        ' 祝福，愿 ',
        digital.get_colored_name(),
        ' 在今后与更多',
        digital.uma_sex_title,
        '对决，成为真正的「全能跑者」',
      ]);
      era.drawLine({ content: '地下通道' });
      await digital.say_and_wait([
        callname,
        '，我的同志啊，我从 ',
        call_61,
        ' 那里获得了无比珍贵的事物。',
      ]);
      await digital.say_and_wait([
        '需要和更多',
        digital.uma_sex_title,
        '比赛，我需要做什么呢……',
      ]);
      await era.printAndWait('既然如此，不妨就……');
      await era.printAndWait([
        '和 ',
        digital.get_colored_name(),
        ' 决定了，接下来参加更多的G1赛事。',
      ]);
      await digital.say_and_wait([
        '对的对的，还有，然后在之后，我要向 ',
        call_15,
        ' 和 ',
        call_58,
        ' 发起挑战！',
      ]);
      await era.printAndWait([
        '一直以来仅是仰慕的 ',
        digital.get_colored_name(),
        '，现在终于也能鼓起勇气，向以前的偶像发起挑战。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '初诣';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param opera
     * @param tachyon
     * @param shakur
     * @param falcon
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_d 爱丽速子对爱丽数码的称呼
     * @param {PrintedSpan} s_call_d 空中神宫对爱丽数码的称呼
     * @param {PrintedSpan} f_call_d 醒目飞鹰对爱丽数码的称呼
     */
    const f = async (
      digital,
      opera,
      tachyon,
      shakur,
      falcon,
      you,
      callname,
      call_15,
      call_61,
      callname_32,
      t_call_d,
      s_call_d,
      f_call_d,
    ) => {
      await digital.say_and_wait(
        '神啊！今年就不用什么周边了，请给我劲敌就好！',
      );
      await era.printAndWait([
        '天呐！居然让 ',
        digital.get_colored_name(),
        ' 说出这番话，',
        digital.sex,
        '受到了什么刺激？！',
      ]);
      await you.say_and_wait('数码？为什么突然说这个？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 告诉 ',
        you.get_colored_name(),
        '，在之前一段时间，',
        opera.get_colored_name(),
        ' 明白指出，',
        digital.get_colored_name(),
        '，缺少劲敌。',
      ]);
      await digital.say_and_wait([
        '唔，就如之前 ',
        call_15,
        ' 的说法，我目前还不够强大的原因是……',
      ]);
      await era.printAndWait('劲敌。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 缺少劲敌，作为一名训练员，',
        you.get_colored_name(),
        ' 清楚竞争对手可以给',
        digital.uma_sex_title,
        '带来多少动力和鼓舞。',
      ]);
      await era.printAndWait([
        '但是 ',
        digital.get_colored_name(),
        ' 的情况又过于特殊，',
        digital.sex,
        '所具备的那种特性，那种对',
        digital.uma_sex_title,
        '纯粹的喜欢也能给',
        digital.sex,
        '带来与竞争对手相似的效果。',
      ]);
      await era.printAndWait([digital.get_colored_name(), ' 真的需要劲敌吗？']);
      await digital.say_and_wait(
        '唔唔唔，以前因为不想过分干涉，所以别说什么劲敌了，数码在赛场上跟对手都没怎么交流，现在后果来了吗……',
      );
      await era.printAndWait([
        '不过趁这次机会让 ',
        digital.get_colored_name(),
        ' 跟其他',
        digital.uma_sex_title,
        '交涉一下也挺好。',
      ]);
      await you.say_and_wait('那就去寻找劲敌吧！');
      await era.printAndWait('所以……');
      era.drawLine();
      await shakur.say_and_wait('哈？劲敌？早点歇吧。');
      await digital.say_and_wait('等等的说！正好是同期，这不是恰好吗');
      await shakur.say_and_wait([
        '那个啊，',
        s_call_d,
        '，其他的我不好说，我觉得至少我不合适，就这样。',
      ]);
      era.drawLine();
      await falcon.say_and_wait('诶？劲敌吗？感觉不太符合偶像的形象呢～');
      await digital.say_and_wait(
        '不不不，偶像里面，不都是有一个那种对手，然后在互相对决的过程中又互相帮助的感觉吗？',
      );
      await falcon.say_and_wait([
        '啊哈哈，飞鹰子好像只能做个',
        digital.uma_sex_title,
        '小偶像呢，不适合那种……不过，十分感谢 ',
        f_call_d,
        ' 的邀请！',
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        '哼哼……劲敌吗……但 ',
        t_call_d,
        ' 你作为一个研究对象，不对吧，不符合我的理念！',
      ]);
      await digital.say_and_wait('……这样吗。');
      await era.printAndWait([
        '被各种原因拒绝了几次的 ',
        digital.get_colored_name(),
        '，即使是',
        digital.sex,
        '，耳朵都有点耷拉了。',
      ]);
      await tachyon.say_and_wait([
        '不要这么消沉嘛，',
        t_call_d,
        '，还有你，',
        callname_32,
        '，你应该清楚的吧？能成为 ',
        t_call_d,
        ' 劲敌的人选。',
      ]);
      await era.printAndWait([
        '用其独特的眼睛盯着 ',
        you.get_colored_name(),
        '，',
        tachyon.get_colored_name(),
        ' 抬了下下巴朝 ',
        you.get_colored_name(),
        ' 示意。',
      ]);
      await digital.say_and_wait([
        '诶诶诶！',
        callname,
        '，你知道吗？能成为我劲敌的人选？',
      ]);
      await you.say_and_wait('的确如此。');
      await digital.say_and_wait('那为什么不一开始就告诉我？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 急的都快要往 ',
        you.get_colored_name(),
        ' 身上锤了。',
      ]);
      await tachyon.say_and_wait([
        '看起来，那人也有自己的打量，',
        t_call_d,
        '，接下来就是无趣的解答了，再见。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 看了下场面，很识趣地离开了现场。',
      ]);
      await you.say_and_wait(
        '事实上，一方面是在你开始找才知道的，另一方面，我也有想要去了解的地方……',
      );
      await you.say_and_wait(
        '所以，最终我得出的结论就是：你的劲敌，就是大家！',
      );
      await digital.say_and_wait(
        '大家……！也就是说DD箱推都可以吗？！等等，也就是之前的……',
      );
      await era.printAndWait([
        '是的，是在看到今天 ',
        digital.get_colored_name(),
        ' 在找的人才想到的，',
        digital.get_colored_name(),
        ' 找的人既有擅长草地，也有擅长泥地的',
        digital.uma_sex_title,
        '，就如一开始的那般……',
      ]);
      await you.say_and_wait('只选一个什么的，是做不到的。');
      await you.say_and_wait(
        '无论选谁，都不会有像数码那般，可以在两种赛道上奔跑的选手，但是，如果是……',
      );
      await digital.say_and_wait('大家……');
      await you.say_and_wait('对的。');
      await digital.say_and_wait('哈哈哈哈，没想到，又是大家呢。');
      await digital.say_and_wait([
        call_61,
        ' 的话，『和更多',
        digital.uma_sex_title,
        '一起比赛』我一定能够达成！',
      ]);
      await digital.say_and_wait(
        '大家作为劲敌，这么一想，还挺贪心的……我可以从大家那里获得什么呢？',
      );
      era.print([you.get_colored_name(), ' 决定：']);
      era.printButton('养分（耐力+20）', 1);
      era.printButton('友情力量（全属性+5）', 2);
      era.printButton('多样性（技能点数+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('要说的话，那就是养分吧');
          await digital.say_and_wait([
            '对的！',
            digital.uma_sex_title,
            '酱们，各自的美味之处，每次都给予我元气！',
          ]);
          await digital.say_and_wait(
            '每天，都有新鲜的口粮！没有比这更好的燃料了！',
          );
          await era.printAndWait([
            '在之后',
            digital.uma_sex_title,
            '们一定会给 ',
            digital.get_colored_name(),
            ' 带来更多的活力吧。',
          ]);
          break;
        case 2:
          await you.say_and_wait('没错，就是友情！POWER！');
          await digital.say_and_wait([
            '哦吼吼，只要每个',
            digital.uma_sex_title,
            '酱们给我一点力量，我就是无敌的！',
          ]);
          await digital.say_and_wait(
            '哼哼，唔哈哈哈，只是想想，就已经感到全身充满了力量了！',
          );
          await era.printAndWait([
            '与那个每人给一马币还是有点不一样的，',
            digital.get_colored_name(),
            ' 肯定能从',
            digital.uma_sex_title,
            '处得到力量，变得更强。',
          ]);
          break;
        case 3:
          await you.say_and_wait('多样性，没错吧！');
          await digital.say_and_wait([
            '当然！',
            digital.uma_sex_title,
            '酱的奔跑，其多样性，不仅仅是平日所描定的跑法所能框定的！',
          ]);
          await digital.say_and_wait(
            '就像收集UMAMO图鉴那样，全部都记录下来吧！',
          );
          await era.printAndWait([
            '是全收集类玩家吗，',
            digital.get_colored_name(),
            ' 在这场游戏肯定能得到技能吧！',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await era.printAndWait([
        '一大早到达训练室的 ',
        digital.get_colored_name(),
        '，其所带的是——一叠巧克力。',
      ]);
      await era.printAndWait('为什么要用叠作为量词？！');
      await digital.say_and_wait([
        '这是我的心血之作！我将我所能想到的各位',
        digital.uma_sex_title,
        '的特征，都融入了这份巧克力！',
      ]);
      await era.printAndWait(
        '看着这一盒盒巧克力叠成的高塔，难道，里面的每颗巧克力，都是不同的吗？！',
      );
      await digital.say_and_wait('那么，来祭祀吧！');
      await era.printAndWait('什么，哪里来的神龛？！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 把巧克力全摆在神龛前，先是念念有词，接着还带着一些奇怪的搓手动作。',
      ]);
      await digital.say_and_wait('好了，可以了！三女神应该收到了我的请求。');
      await era.printAndWait('既然是拜的三女神，为什么不去庭院呢？！');
      await digital.say_and_wait([
        callname,
        '，接下来就一起吃吧，可不能浪费哦。',
      ]);
      era.printButton('「居然是能吃的吗？！」', 1);
      await era.input();
      await digital.say_and_wait(
        '当然啦，只要有这份心意就可以了，而且浪费食物也是一种亵渎啊！',
      );
      await digital.say_and_wait('接下来就一边吃着一边谈吧！');
      await digital.say_and_wait([
        '呜呜呜，我真是幸运啊，居然能遇到能一起讨论',
        digital.uma_sex_title,
        '的同志……',
      ]);
      await digital.say_and_wait([
        '来来来，',
        callname,
        '，聊一下最近最推的',
        digital.uma_sex_title,
        '……是谁呀？',
      ]);
      await era.printAndWait('那还用问？');
      era.printButton('「好，给你巧克力。」', 1);
      await era.input();
      await era.printAndWait('从冰箱里，拿出巧克力……');
      await digital.say_and_wait('哦哦哦，是我啊。');
      await digital.say_and_wait('噫诶诶诶诶？不是，居然是巧克力？');
      await digital.say_and_wait([
        '这，这是何等的博爱？！居然，有人会想要推如此小众的',
        digital.uma_sex_title,
        '？',
      ]);
      await you.say_and_wait([
        '说什么呢，我可是你的 ',
        callname,
        '……还有，你居然觉得你很小众……吗？马推的粉丝数，不低的来吧？',
      ]);
      await era.printAndWait([
        '被这么一说的 ',
        digital.get_colored_name(),
        '，却突然变得支支吾吾了起来。',
      ]);
      await digital.say_and_wait(
        '那是……事实上我的马推，在出道前，粉丝就不少来着，因为之前一直都有在做……同人志……',
      );
      await era.printAndWait([
        '诶？好像的确是听说过，',
        digital.get_colored_name(),
        ' 在出道前就在某些方面挺出名来着……',
      ]);
      await digital.say_and_wait([
        '不过！',
        callname,
        ' 的这种精神，这，才是宅中之鉴！如果是和你的话，哪怕十年，还是多久，感觉都可以一起过情人节！',
      ]);
      await era.printAndWait([
        '和 ',
        digital.get_colored_name(),
        ' 边说边聊，度过了一个吵闹的情人节。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, luna, you, callname) => {
      await digital.say_and_wait([
        '数码，属于 ',
        digital.get_colored_name(),
        ' 的节日，终于来了！哇哇哇，看看这周围的景色，简直就是粉丝的天堂……',
      ]);
      await era.printAndWait([
        '粉丝感谢祭呢……顾名思义，就是作为具有偶像属性的赛',
        digital.uma_sex_title,
        '回馈应援粉丝的活动。',
      ]);
      await era.printAndWait('说是这么说，事实上感觉也有点像校园祭。');
      await era.printAndWait([
        '不过，',
        digital.get_colored_name(),
        '，今年所担当的角色，可不仅是粉丝啊！',
      ]);
      await you.say_and_wait('事实上，数码，你在今天，可是被应援的一方哦！');
      await digital.say_and_wait('库呀！');
      await digital.say_and_wait('不不不，就我这种人……');
      await era.printAndWait([
        '摆出一脸「不可能」表情的 ',
        digital.get_colored_name(),
        '，要说是以前的话那的确如此……',
      ]);
      await you.say_and_wait(
        '在那么多场比赛中取得出色成绩的你，倒也要有点自觉了吧，虽然你说你的马推粉丝有之前的因素……但是新粉丝，可不少啊。',
      );
      await era.printAndWait([
        '像是被戳到痛点的 ',
        digital.get_colored_name(),
        ' 双手投降，看来应该有所准备了。',
      ]);
      await era.printAndWait([
        '接着便是来到了签名会的 ',
        digital.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '一开始 ',
        digital.get_colored_name(),
        ' 还有点不适应，不过之后的',
        digital.sex,
        '……',
      ]);
      await digital.say_and_wait('好好，有在色纸上好好地签上名字了哦！');
      await era.printAndWait('甚至都做到了让每一个粉丝都笑着排队？！');
      await digital.say_and_wait(
        '因为之前一直都是作为推的那一方的人嘛……所以当然能猜出来粉丝们的心情。',
      );
      await digital.say_and_wait([
        '还有，',
        callname,
        '，待会能让我优化一下这个会场吗，只要拿到许可的话，就能让你看看数码的主办方之魂哦！',
      ]);
      await era.printAndWait([
        '向工作人员拿到许可后，',
        digital.get_colored_name(),
        ' 立刻在各个会场都扫荡了一遍，还把各种各样的活动都优化得很好？！',
      ]);
      await era.printAndWait([
        '之后因为传到了 ',
        luna.get_colored_name(),
        ' 的耳里，由',
        digital.sex,
        '亲自带领很多',
        digital.uma_sex_title,
        '过来感谢时……',
      ]);
      await digital.say_and_wait('怎么回事，我成为被推的一天了？！');
      await era.printAndWait([
        '激动晕倒的 ',
        digital.get_colored_name(),
        ' 终于结束了今天的奋斗。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = '观战NHK英里杯';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {PrintedSpan} nhk_cup NHK英里杯（上色版名字）
     */
    const f = async (digital, nhk_cup) => {
      await era.printAndWait([
        '与 ',
        digital.get_colored_name(),
        ' 一同来观看去年 ',
        digital.get_colored_name(),
        ' 奋斗过的 ',
        nhk_cup,
        '。',
      ]);
      await era.printAndWait([
        '最近来 ',
        digital.get_colored_name(),
        ' 也关注起了后辈，其中最引起',
        digital.sex,
        '注意的——',
      ]);
      await era.printAndWait([
        '也是今年 ',
        nhk_cup,
        ' 取得胜利的是，最近很火的新人——黑船。',
      ]);
      await digital.say_and_wait(
        '唔噢噢噢，大幅的步伐，修长的玉腿！我，我已经！',
      );
      await digital.say_and_wait([
        '黑船，',
        digital.sex,
        '，',
        digital.sex,
        '跑过在我奔跑过的草地啊！',
      ]);
      await digital.say_and_wait('感觉，内心中的感觉要迸发出来了！');
      await era.printAndWait([
        '接着 ',
        digital.get_colored_name(),
        ' 立刻跑到了栅栏边……',
      ]);
      await digital.say_and_wait(
        '黑船桑！加油啊！无论之后会遇到什么，前辈们都会帮助你的！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        '，从去年的 ',
        nhk_cup,
        ' 以来经历了很多，',
      ]);
      await era.printAndWait([
        '过去一年，再次看到有新世代出现，这蹄迹的延续，想必让 ',
        digital.get_colored_name(),
        ' 感慨万千吧。',
      ]);
      await era.printAndWait([
        '回到这里的 ',
        digital.get_colored_name(),
        '，开始再次介绍起来了黑船……',
      ]);
      era.println();
      await era.printAndWait([
        '因为在对多种场地的适应性上，黑船都与 ',
        digital.get_colored_name(),
        ' 很像，这也让 ',
        digital.get_colored_name(),
        ' 带有一种亲切感。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 已经从单纯地仰慕偶像的人，变到可以成为前辈关怀后辈的人了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = '勇者挑战';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, tenn_sho) => {
      await era.printAndWait([
        '终于，',
        digital.get_colored_name(),
        ' 赶在夏合宿前参加了诸多大型比赛，想必也终于积累了足够的经验。',
      ]);
      await era.printAndWait([
        '跟着 ',
        digital.get_colored_name(),
        ' 回忆了一下之前的比赛，又是许多的相遇啊。',
      ]);
      await digital.say_and_wait([
        '好！这下是时候了！虎牢关之战！该向 ',
        call_15,
        ' 和 ',
        call_58,
        ' 发出挑战书了！',
      ]);
      await digital.say_and_wait('嗯……稍等，该选哪项比赛比较好？');
      await era.printAndWait([
        '这么说确实，',
        opera.get_colored_name(),
        ' 和 ',
        doto.get_colored_name(),
        ' 赛场适性的话，泥地适性都比较差，距离适性的话，则是英里适性比较差。',
      ]);
      await era.printAndWait([
        '而 ',
        digital.get_colored_name(),
        ' 在长距离适性也不佳……',
      ]);
      await you.say_and_wait(
        '要真是说要挑战的话，果然还是黄金的草地中距离比赛啊。',
      );
      await era.printAndWait('不过，这……');
      await digital.say_and_wait([
        '的确……我也不想将',
        digital.couple_title,
        '拉到我身边的泥塘……果然还得是堂堂正正地比一场。',
      ]);
      await era.printAndWait([
        '和现在已经不仅仅是自称霸王的 ',
        opera.get_colored_name(),
        ' 还有紧随其后的 ',
        doto.get_colored_name(),
        '，在黄金距离竞赛……',
      ]);
      await you.say_and_wait([tenn_sho, '，这是最合适的比赛了。']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 会在这场比赛上吃不到一点优势的。',
      ]);
      await digital.say_and_wait(
        '对！就是这个！东京2000米草地赛道，没有比这更合适的了！',
      );
      await you.say_and_wait('真的可以吗？');
      await digital.say_and_wait('吼诶？什么意思？');
      await you.say_and_wait('会相当吃力的哦？');
      await era.printAndWait([
        '即使是 ',
        digital.get_colored_name(),
        '，面对这种情况，也有点哑口无言。',
      ]);
      await digital.say_and_wait(
        '……啊，天性如此啊，就好像玩游戏不愿意开最低难度，不愿意穿赠送的DLC强力装备差不多……',
      );
      await digital.say_and_wait('还有，我，想要看到最棒的奔跑！');
      await digital.say_and_wait('所以，你一定能奉陪我吧！');
      await you.say_and_wait('当然！');
      await era.printAndWait([digital.get_colored_name(), ' 本是如此啊。']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿（资深年）开始';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} nhk_cup NHK英里杯（上色版名字）
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (
      digital,
      halo,
      you,
      call_15,
      call_58,
      call_61,
      h_call_d,
      nhk_cup,
      tenn_sho,
    ) => {
      await digital.say_and_wait(
        '唔咕咕，今年，就今年这一次……没时间了啊！得停下来了！',
      );
      await era.printAndWait([
        '夏合宿一开始就看到了抱头痛鸣的 ',
        digital.get_colored_name(),
        '，该怎么说呢，看得多 ',
        digital.get_colored_name(),
        ' 的 ',
        you.get_colored_name(),
        ' 也逐渐明白，',
        digital.get_colored_name(),
        ' ',
        digital.sex,
        '也有制作同人志的兴趣。',
      ]);
      await era.printAndWait([
        digital.sex,
        '会将',
        digital.sex,
        '制作的同人志放到漫展上向别人传教，真是相当地热爱呢。',
      ]);
      await era.printAndWait('而且，最近的一次大型漫展，就在夏合宿期间。');
      await digital.say_and_wait([
        tenn_sho,
        '！这个夏天，就不出 ',
        call_61,
        ' 新刊了，要为比赛倾尽全力！',
      ]);
      await era.printAndWait([
        '看起来 ',
        digital.get_colored_name(),
        ' 也相当地看重这次与好歌剧还有名将怒涛的对决，那么这次夏合宿，也一定不会让人担心了。',
      ]);
      await halo.say_and_wait('啊啦，那我就暂时看不到了呢');
      await digital.say_and_wait(['咻诶！', call_61, '！']);
      await halo.say_and_wait([
        '比起那个，',
        h_call_d,
        '，你今年要参加 ',
        tenn_sho,
        ' 吧。',
      ]);
      await digital.say_and_wait([
        '是，是的……毕竟已经被 ',
        call_61,
        ' 锻炼过了，无论是身体还是意志……终于，到了可以和 ',
        call_15,
        ' ',
        call_58,
        ' 决战的时候了！',
      ]);
      await halo.say_and_wait([
        '那么，',
        tenn_sho,
        '，就是三个——不，四个人的对决了呢。',
      ]);
      await digital.say_and_wait([
        '诶？还有其他，被评为有实力的',
        digital.uma_sex_title,
        '酱吗？',
      ]);
      await halo.say_and_wait(['今年的 ', nhk_cup, '，你应该去看了吧？']);
      await digital.say_and_wait([
        '那当然，因为我可是 ',
        digital.get_colored_name(),
        '！啊哈哈哈……难道说……',
      ]);
      await era.printAndWait([
        '事实上，',
        you.get_colored_name(),
        ' 前几天也听到有传言了，那就是……',
      ]);
      await halo.say_and_wait([
        '黑船，',
        digital.sex,
        '要参加今年的 ',
        tenn_sho,
        '。',
      ]);
      await era.printAndWait([
        '黑船……就是拿下今年NHK的那位',
        digital.uma_sex_title,
        '，具有着可怕的脚步。',
      ]);
      await era.printAndWait([digital.sex, '也要参加这场比赛啊。']);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（资深年）结束';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      tenn_sho,
    ) => {
      await era.printAndWait([
        '在这次的夏合宿，',
        digital.get_colored_name(),
        ' 真的是特别努力了，',
        you.get_colored_name(),
        ' 从来没见过如此认真的 ',
        digital.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '与前辈 ',
        opera.get_colored_name(),
        ' ',
        doto.get_colored_name(),
        ' 的约定，与后辈黑船的对决，两个因素使现在 ',
        digital.get_colored_name(),
        ' 的状况前所未有地好！',
      ]);
      await digital.say_and_wait([
        callname,
        '，我感觉到了，这种感觉，就像是被所有人加持了的勇者！这样一来，就能和',
        digital.couple_title,
        '对决了！',
      ]);
      await you.say_and_wait('能赢吗？');
      await digital.say_and_wait(
        '说实话，只有不安！那三位，无论是谁感觉我都没有获胜的把握……',
      );
      await digital.say_and_wait(
        '所以，我能做到的只有凭借一直以来的丰富多样的经验了！',
      );
      await era.printAndWait([
        '无论立在前面的墙壁有多高，',
        digital.get_colored_name(),
        ' 都没有迷茫。',
      ]);
      await era.printAndWait('但是，在那天夜里……');
      await era.printAndWait('却传来了黑船无法参赛的消息。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 那天晚上，把 ',
        you.get_colored_name(),
        ' 叫了出来，在深夜的海滩上，垂着头一言不语。',
      ]);
      await era.printAndWait([
        '等过了很久，',
        digital.get_colored_name(),
        ' 才开口——',
      ]);
      await digital.say_and_wait([
        callname,
        '……你说，这种事情，是真实存在的吗？',
      ]);
      await era.printAndWait([
        '骨折、粉丝数、投票数、抽选、避战……各种原因所造成的不出赛，',
        digital.get_colored_name(),
        ' 都见过。',
      ]);
      await era.printAndWait([
        '但是，因为参赛名额意外不够用，这种情况，',
        digital.get_colored_name(),
        ' 第一次遇见。',
      ]);
      await digital.say_and_wait(
        '因为是比赛，所以绝对会有胜利的笑容以及失败的泪水。',
      );
      await digital.say_and_wait([
        '但是，在泪水的前方，必定存在着感动，正因如此，',
        digital.uma_sex_title,
        '们才能在又一个赛场上再次碰撞。',
      ]);
      await digital.say_and_wait(
        '……但是……如果，连跑都不能跑的话，那又怎么说……',
      );
      await era.printAndWait('明明准备好了所有，却不能参赛。');
      await digital.say_and_wait([
        '如果是因为我的出赛……',
        digital.sex,
        '的梦想就此被摘下的话……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 十分沮丧，已经产生了退却心理。',
      ]);
      await you.say_and_wait(['你难道要说自己不参加 ', tenn_sho, ' 吗？！']);
      await digital.say_and_wait('那……没那回事。');
      await digital.say_and_wait([
        '就算是我，就算是我，也有着和 ',
        call_15,
        ' 和 ',
        call_58,
        ' 的约定啊……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 明白，',
        digital.sex,
        '什么都不能改变。',
      ]);
      await era.printAndWait([
        '因为喜欢',
        digital.uma_sex_title,
        '，所以那位',
        digital.uma_sex_title,
        '的遭遇，才会像水草一样缠上',
        digital.sex,
        '的脚。',
      ]);
      await era.printAndWait('不过，如果就这样的话……');
      await you.say_and_wait([
        '相信',
        digital.sex,
        '吧，于此同时，我也相信你。',
      ]);
      await digital.say_and_wait([
        '这是……这是什么意思？相信',
        digital.sex,
        '……？',
      ]);
      await you.say_and_wait([
        '黑船',
        digital.sex,
        '的脚步不会停下，',
        digital.sex,
        '，还有明年，今年的 ',
        tenn_sho,
        '，',
        digital.sex,
        '的确是不能参加了没错……',
      ]);
      await you.say_and_wait([
        '但是你觉得',
        digital.sex,
        '会就此一蹶不振，然后就此退役吗？',
      ]);
      await digital.say_and_wait('！那……那肯定不会。');
      await era.printAndWait([
        '出色的',
        digital.uma_sex_title,
        '，不会因为这些挫折所击倒。',
      ]);
      await you.say_and_wait('给出你最好的答卷，这就是对黑船最好的帮助。');
      await digital.say_and_wait([
        '……',
        digital.uma_sex_title,
        '酱们，在痛苦中最后抓住的东西，在历经了那几位后，我知道了，那是无与伦比的事物。',
      ]);
      await digital.say_and_wait(
        '所有带来的悲伤，即使是那份悔恨，都会成为明天的力量！我明白了！毕竟正是亲自感受过了啊！',
      );
      await digital.say_and_wait([
        '所以我，我才能打心底里说出，',
        digital.uma_sex_title,
        '太棒了啊！',
      ]);
      await era.printAndWait([digital.get_colored_name(), ' 站起身跑到海边——']);
      await digital.say_and_wait([
        digital.uma_sex_title,
        '，无论是怎样的苦难，都能用不屈的意志，全都，弹飞啊啊啊啊啊！！！！！',
      ]);
      await digital.say_and_wait([
        '无论是我，还是',
        digital.sex,
        '！都绝对能过跨越啊！！！！',
      ]);
      await digital.say_and_wait('……啊啊啊……');
      await era.printAndWait([
        '尽情呼喊后，',
        digital.get_colored_name(),
        ' 回过神来。',
      ]);
      await you.say_and_wait('看来，数码你，已经得到答案了。');
      await digital.say_and_wait([
        '……我，我也不能停在这里，一定，一定要把从 ',
        call_61,
        ' 那里拿到的珍贵的东西，展示给',
        digital.sex,
        '！',
      ]);
      await digital.say_and_wait([
        '我，我一定要参加 ',
        tenn_sho,
        '，而且，而且！一定要拿到，压倒性胜利！',
      ]);
      await digital.say_and_wait([
        '让',
        digital.sex,
        '，为了明年这番比赛能够追上我，拼尽全力！',
      ]);
      await digital.say_and_wait('绝对！绝对要！');
      await digital.say_and_wait([
        '而且，要把我至今为止所有邂逅的',
        digital.uma_sex_title,
        '的感情，全部倾倒出去！',
      ]);
      await digital.say_and_wait('这就是，我的责任！');
      await era.printAndWait('要获胜，而且是要大胜，才能断绝黑船最后的遗憾。');
      await era.printAndWait([
        '这就是 ',
        digital.get_colored_name(),
        ' 给予自己的责任。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '秋季天皇赏开始！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} o_call_di 好歌剧对爱丽数码的称呼
     * @param {PrintedSpan} do_call_di 名将怒涛对爱丽数码的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      call_15,
      call_58,
      o_call_di,
      do_call_di,
      tenn_sho,
    ) => {
      await era.printAndWait(['终于到了，', tenn_sho, ' 当天。']);
      await era.printAndWait([
        '在亮相圈中，',
        digital.get_colored_name(),
        ' 与熟悉的那两位碰面了。',
      ]);
      await digital.say_and_wait(['请多关照！', call_15, '，', call_58, '。']);
      await doto.say_and_wait(['这边才是！请多关照了，', do_call_di, '！']);
      await era.printAndWait([
        '时隔三年，',
        digital.get_colored_name(),
        ' 也终于能够在自己的推面前正常地交流了。',
      ]);
      await opera.say_and_wait(
        '啊哈哈哈，你们这是在发名片吗？不过，身为霸王的我，其闪耀的自身，就已经表明了我的一切！不需要任何介绍！',
      );
      await opera.say_and_wait([o_call_di, '，欢迎来到我的加冕典礼！']);
      await opera.say_and_wait(
        '你的努力，我都看在眼里，我不得不承认你也到达了我们的身后。',
      );
      await opera.say_and_wait([
        '但身后终究是身后！',
        o_call_di,
        '，在这草地上，你还赢不了我，身为『世纪末霸王』，驱驰于中距离草场的我！',
      ]);
      await digital.say_and_wait('的确……如你所言，在硬实力上，我还比不过你……');
      await digital.say_and_wait('但是，我的技巧，在草地与泥地的技巧……');
      await era.printAndWait([
        '是的，在这场草地比赛中，双刀流的 ',
        digital.get_colored_name(),
        '，其优势在……只要在等一会，就会明了。',
      ]);
      await era.printAndWait('滴答……滴答……');
      await era.printAndWait('哗啦……哗啦……');
      await era.printAndWait('一开始仅是一点，紧接着便遍及全部！');
      await era.printAndWait([
        '是的，重马场，这次的 ',
        tenn_sho,
        '，是重马场啊！',
      ]);
      await digital.say_and_wait([
        '这是……',
        digital.uma_sex_title,
        '酱的泪雨吗……不，是我遇见的所有',
        digital.uma_sex_title,
        '酱的喜极而泣，是庆祝我的胜利的雨啊！',
      ]);
      await opera.say_and_wait(
        '……雨吗……先说明，我可是擅长重马场的喔，霸王无论场况如何，都能适应！',
      );
      await doto.say_and_wait('啊哇哇哇……是雨啊啊啊……');
      await era.printAndWait([
        '好歌剧是擅长重马场，但是，',
        digital.get_colored_name(),
        '，',
        digital.sex,
        '可不仅是擅长啊！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 可是字面意思地在泥潭上跑过的，面对这种情况……',
      ]);
      await era.printAndWait('仅有赢的可能。');
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '秋季天皇赏胜利';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (digital, you, callname, tenn_sho) => {
      await era.printAndWait('咚咚咚咚——');
      await era.printAndWait([
        '在低沉的脚步声，',
        digital.uma_sex_title,
        '们逐渐逼近观众席，此时，意外地跑在外道的是——',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        digital.get_colored_name(),
        '！是 ',
        digital.get_colored_name(),
        '！在雨中，在一片狼籍的草地上，从马群中钻了出来，选择了最好的道路！然后——！',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        '冲线！用不可思议的跑法征服了 ',
        tenn_sho,
        ' 的是——',
        digital.get_colored_name(),
        '！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 一直以来所积累的知识、技能以及情感，给予了 ',
        digital.get_colored_name(),
        ' 这次最好的条件。',
      ]);
      await era.printAndWait([
        digital.sex,
        '在泥泞的草地上，简直像是回到了老家一样，无论是道路选择还是最终加速，作为训练员的 ',
        you.get_colored_name(),
        ' 也完全找不出任何不足之处。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 不可动摇地拿下了胜利。',
      ]);
      era.println();
      await digital.say_and_wait('嘿嘿……咳咳咳……啊哈哈哈……');
      await digital.say_and_wait('是，我的胜利吧。');
      await you.say_and_wait('是的，是你的胜利，数码。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 转过身来，面向观众席。',
      ]);
      await digital.say_and_wait('唔噢噢噢噢噢噢噢噢噢噢噢噢噢！');
      await you.say_as_passer_by_and_wait(
        '观众席',
        '唔噢噢噢噢噢噢噢噢噢噢噢噢噢！',
      );
      await digital.say_and_wait('嘿哇啊啊啊啊啊啊啊啊啊啊！');
      await you.say_as_passer_by_and_wait(
        '观众席',
        '嘿哇啊啊啊啊啊啊啊啊啊啊！',
      );
      await digital.say_and_wait('噫！嘿！哦！噢噢噢噢噢噢！');
      await you.say_as_passer_by_and_wait(
        '观众席',
        '噫！嘿！哦！噢噢噢噢噢噢！',
      );
      await era.printAndWait('哈哈哈哈，喊得喉咙都有点哑了。');
      await era.printAndWait([
        '而且跟一般的喊名字不同，该说真有 ',
        digital.get_colored_name(),
        ' 的特色吗。',
      ]);
      await era.printAndWait([
        '大张着手跑到 ',
        you.get_colored_name(),
        ' 跟前，隔着栏杆将 ',
        you.get_colored_name(),
        ' 抱了起来。',
      ]);
      await digital.say_and_wait([callname, '！未知的，是未知的景色啊！']);
      await digital.say_and_wait(
        '在台上感受Call的力量！这感觉真的是绝无伦比啊！',
      );
      await you.say_and_wait('是啊！这是独属于数码你的Call，独一无二的Call！');
      await digital.say_and_wait('黑船……我把胜利，从那两人夺过来了哦……');
      await era.printAndWait([
        '无论',
        digital.sex,
        '是怀着悔恨还是悲伤，看到这场比赛，',
        digital.sex,
        '，想必也会感到解脱了吧。',
      ]);
      await digital.say_and_wait(
        '仅凭我自己，是无法做到的——我一直以来，都这么认为。所以我向推寄托了愿望……',
      );
      await digital.say_and_wait('但是……');
      era.printButton('「我的第一位推，就是你噢！」', 1);
      await era.input();
      await digital.say_and_wait([
        '啊哈哈哈，诶嘿嘿嘿……',
        callname,
        '，居然现在说这话，可真是……我要，我要……',
      ]);
      await digital.say_and_wait([
        '给给给！给你杀必死！对对对，就是粉丝服务！',
        callname,
        '，想要我尾巴上的毛吗！',
      ]);
      await era.printAndWait([
        '看起来 ',
        digital.get_colored_name(),
        ' 已经高兴得已经在开始说有点意味不明的话了。',
      ]);
      era.printButton('「到领奖台吧，大家在等着呢。」', 1);
      await era.input();
      await digital.say_and_wait('哦哦哦，如此傲慢无礼，我差点忘了！');
      await era.printAndWait([
        '一把把 ',
        you.get_colored_name(),
        ' 从栅栏一边搬运过来，',
        digital.get_colored_name(),
        ' 跟 ',
        you.get_colored_name(),
        ' 来到了领奖台。',
      ]);
      era.println();
      await digital.say_and_wait([
        '多多多多，多谢！我是 ',
        digital.get_colored_name(),
        '！说到底我只不过是一个喜欢',
        digital.uma_sex_title,
        '酱的……',
      ]);
      await digital.say_and_wait([
        '我只不过是追着',
        digital.uma_sex_title,
        '酱的屁股……哦不，是尾巴，才来到这里的……',
      ]);
      await digital.say_and_wait([
        '能懂吗！这份感动！？我最一开始，甚至不能说是普通的',
        digital.uma_sex_title,
        '酱，只是一个粉丝而已诶！',
      ]);
      await digital.say_and_wait(
        '但是，我能混杂在这份闪耀中，在这个尊景中，能在最前方冲线，真的是……感激不尽……',
      );
      await digital.say_and_wait(
        '之所以能够获胜，一定不是我自己的成果了，是与所有邂逅的人的结晶，',
      );
      await digital.say_and_wait([
        '一路以来的',
        digital.uma_sex_title,
        '酱，最一开始认为自己不该会有的粉丝，还有 ',
        callname,
        '！',
      ]);
      await digital.say_and_wait('今天，是大家让我拿下了胜利。');
      await digital.say_and_wait('感激……真的是，非常，感激……');
      await digital.say_and_wait([
        digital.uma_sex_title,
        '酱们，比起身为在粉丝的时候所想的',
        digital.uma_sex_title,
        '酱……要耀眼百倍，千倍……',
      ]);
      await era.printAndWait([
        '说着说着，',
        digital.get_colored_name(),
        ' 已经开始介绍起了比赛的选手了。',
      ]);
      await digital.say_and_wait(
        '看到了吗！英姿飒爽的短发，在猛然冲刺时的摇曳……',
      );
      await digital.say_and_wait('那伴随着脚步晃动的包……');
      await digital.say_and_wait(
        '有，今天不能在场的黑船，如果能的话，总有一天，一定要一起跑在泥地上……',
      );
      era.println();
      await era.printAndWait([
        '打开了话匣子，',
        digital.get_colored_name(),
        ' 还在聊的时候……',
      ]);
      await you.say_as_passer_by_and_wait('工作人员', [
        digital.get_colored_name(),
        ' 的训练员，很抱歉在这兴头上打断……胜者舞台……',
      ]);
      await era.printAndWait([
        '啊啊啊啊，低头对着 ',
        digital.get_colored_name(),
        ' 说几声，',
        digital.sex,
        '好像完全没注意到。',
      ]);
      await era.printAndWait('看来只能强行拉走了。');
      await digital.say_and_wait(['喂喂喂，', callname, '？']);
      await digital.say_and_wait('等等，至少请让我再说一句，我再说一句吧——');
      await digital.say_and_wait([
        digital.uma_sex_title,
        '真是——太——棒——啦——！！！！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {CharaTalk} l_call_d 鲁铎象征对爱丽数码的称呼
     */
    const f = async (digital, luna, you, callname, l_call_d) => {
      await era.printAndWait([
        '特雷森对于圣诞节的自由活动通常都是比较支持的，毕竟这对于',
        digital.uma_sex_title,
        '来说也是一个特殊日子。',
      ]);
      await era.printAndWait([
        '在校外之余，为了给一些特立独行的',
        digital.uma_sex_title,
        '一些光照，学校内部也举办了大型活动。',
      ]);
      await era.printAndWait([
        '和 ',
        digital.get_colored_name(),
        ' 穿梭在各个活动现场蹭吃蹭喝，一起游玩各种游戏，还有就是和 ',
        digital.get_colored_name(),
        ' 一起激烈讨论。',
      ]);
      await era.printAndWait([
        '突然，',
        luna.get_colored_name(),
        ' 以及一行人出现在了 ',
        you.get_colored_name(),
        ' 的面前。',
      ]);
      await digital.say_and_wait('呜哇哇，是太吵闹了吗？');
      await luna.say_and_wait('不用太过担心，倒不如说是奖励。');
      await era.printAndWait([
        '接着，',
        digital.sex,
        '从背后拿出一个大型礼盒，递给了 ',
        digital.get_colored_name(),
        '……',
      ]);
      await digital.say_and_wait('这是……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 打开了礼盒，然后里面装的是——',
      ]);
      await era.printAndWait(
        '一叠色纸……里面密密麻麻地写满了各种各样的……名字？',
      );
      await digital.say_and_wait('不，这个，这个是……！签名啊！');
      await era.printAndWait([
        '签名！定睛一看，这里面，包含了很多熟悉的',
        digital.uma_sex_title,
        '的亲笔签名？！',
      ]);
      await digital.say_and_wait(
        '啊啊啊啊……这就算是单买，都要多少马币呢……我的存款，还有多少来着……',
      );
      await luna.say_and_wait([
        '这是这段时间以来，接受过 ',
        l_call_d,
        ' 帮助或者鼓舞的各位',
        digital.uma_sex_title,
        '的谢意，而且，作为学生会长，我也非常感谢你对学校的宣传……',
      ]);
      await luna.say_and_wait([
        '而且，',
        l_call_d,
        ' 你的爱好……也有点独特，所以我募集了所有喜欢 ',
        l_call_d,
        ' 你的',
        digital.uma_sex_title,
        '，为你准备了这份礼物。',
      ]);
      await era.printAndWait([
        '收到这份大礼，',
        digital.get_colored_name(),
        ' ',
        digital.sex,
        '……',
      ]);
      await digital.say_and_wait('啊哇啊哇……难道这就是……推人着恒被推吗……');
      await you.say_as_passer_by_and_wait('众人', [
        '节日快乐！',
        digital.get_colored_name(),
      ]);
      await digital.say_and_wait([callname, '！', callname, '！这……']);
      await era.printAndWait([
        '立刻尊晕地靠在了 ',
        you.get_colored_name(),
        ' 身上。',
      ]);
      await era.printAndWait([
        '意外地互换了位置的 ',
        digital.get_colored_name(),
        '，在今天也享受到了被推的快乐。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = (digital) => [
      '只是作为普通的',
      digital.uma_sex_title,
      digital.sex,
    ];
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} dober 目白多伯
     * @param {CharaTalk} kris 吉兆
     * @param {CharaTalk} diamond_lord 钻石君主（爱丽数码剧情 NPC）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_59 爱丽数码对目白多伯的称呼
     * @param {PrintedSpan} do_call_di 目白多伯对爱丽数码的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      digital,
      dober,
      kris,
      diamond_lord,
      you,
      callname,
      call_59,
      do_call_di,
      arim_kin,
    ) => {
      await era.printAndWait([
        '在冷霜飞舞十二月的最后几天，虽然仍留着不久前观看 ',
        arim_kin,
        ' 的热情，见证了 ',
        kris.get_colored_name(),
        ' 的漂亮冲线，',
        digital.get_colored_name(),
        ' 还是立刻投身于CM的准备之中。',
      ]);
      await era.printAndWait('即使作为摊主，能够提前进场布置，但……');
      await era.printAndWait('还是不禁感叹，就算只有摊主，都还是很多人啊。');
      await era.printAndWait([
        '看着一条狞狰的长蛇不断向展览中心扭去，不知还得多久轮到你们。',
      ]);
      await digital.say_and_wait([
        '哼哼哼，',
        callname,
        '，你是没坐过普通观众那一桌，到时候，整个东京国际展览中心的门前门后都是扔不进萝卜的浪潮！',
      ]);
      await era.printAndWait([
        '……幸好 ',
        digital.get_colored_name(),
        ' 作为摊主，能够一起走提前通道。',
      ]);
      await era.printAndWait([
        '眼见 ',
        digital.get_colored_name(),
        ' 背着一个特制有特多挂钩的大背包，挂着各种小摆件，小挂饰……',
      ]);
      await era.printAndWait('听说里面还带有一叠挂轴……');
      era.printButton('「那个，数码，这些，不会都是你一个人做的吧？」', 1);
      await era.input();
      await era.printAndWait([
        '哗啦哗啦，随着 ',
        digital.get_colored_name(),
        ' 的转身，一堆挂饰上的金属互相碰撞，发出了锐耳的响声。',
      ]);
      await digital.say_and_wait([
        '嗯……',
        callname,
        ' 是对我的工作量感到惊奇吗？事实上，这上面有不少是再版的，也就是数码以前的成果。',
      ]);
      await era.printAndWait('以前，以前吗……');
      await digital.say_and_wait([
        '自从出道以来，数码我的成果其实减少了不少，基本上出展只会出一两本小薄本了，还有缺席的时候……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 转回身，盯着巨大的东京国际展览中心。',
      ]);
      await digital.say_and_wait(['或许……之后就会恢复正常速度吧。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 明白 ',
        digital.get_colored_name(),
        ' 的话，也明白 ',
        digital.get_colored_name(),
        ' 为何会如此……颓废……吗？',
      ]);
      await era.printAndWait([
        '看着 ',
        digital.get_colored_name(),
        ' 因早起略无精神的眼神，',
        you.get_colored_name(),
        ' 回想起了……',
      ]);
      await era.printAndWait('那是在一场泥地赛，下着雨。');
      await era.printAndWait([
        '夹杂着些许小雨的寒风狠狠地灌进 ',
        you.get_colored_name(),
        ' 的雨衣。',
      ]);
      await era.printAndWait([
        '想必，',
        digital.get_colored_name(),
        ' 也觉得很冷吧。',
      ]);
      await era.printAndWait([
        '在赛道上的 ',
        digital.get_colored_name(),
        '，沾满泥泞，原本马卡龙色的决胜服都染上了些许灰色。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有看到揭示板上的成绩，',
        you.get_colored_name(),
        ' 只能看到 ',
        digital.get_colored_name(),
        ' 正在抬着头，看着那揭示板。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '队伍其实也没有想象中那么长，一不留神其实就进到了会场。',
      ]);
      await era.printAndWait([
        '艰难地穿插来到',
        digital.uma_sex_title,
        '专区，里面有几个正在布置的摊主看到 ',
        digital.get_colored_name(),
        ' 都远远地朝 ',
        digital.get_colored_name(),
        ' 挥了挥手。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 看起来在这里名气不小啊。',
      ]);
      await digital.say_and_wait('哦哦哦噢？');
      await era.printAndWait([
        '嗯？伴随着 ',
        digital.get_colored_name(),
        ' 的眼光看过去，是一个带着口罩，带着帽子，穿比较多衣服稍显臃肿的……',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '虽然穿的是那种普通的帽子，从帽子被略微顶起的形状也可以大致猜出是',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '而且事实上，大家大致上都知道',
        digital.sex,
        '是……',
      ]);
      await digital.say_and_wait([
        '多……',
        { color: dober.color, content: '白目老师', fontWeight: 'bold' },
        '！这一次你也有出新刊吗？！三本新刊多谢！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 来到多伯……嗯，是 ',
        {
          color: dober.color,
          content: '白目老师',
          fontWeight: 'bold',
        },
        ' 的摊位，立刻预订了三本。',
      ]);
      await era.printAndWait([
        '而多伯……算了，',
        {
          color: dober.color,
          content: '多伯老师',
          fontWeight: 'bold',
        },
        ' 也鬼祟地左右扫视，确认其他人都（有意识地）避开眼色后……',
      ]);
      await era.printAndWait([
        '悄悄地拿起放在背包里精致包装好的某物递给了激动的 ',
        digital.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('伴随着各种各样的交换后，即将迎来的是……');
      await era.printAndWait('CM的正式开幕！');
      await era.printAndWait(
        '无论看过多少次仍会让人感叹，人类还是太多了，地球还是太小了。',
      );
      await you.say_as_unknown_and_wait('噢噢噢噢噢噢！');
      await era.printAndWait(
        '从入闸处传来各种人群心灵的呐喊，冲在最前头的人类径直跑到大热门区域，快到摊位时又礼貌地缓慢停下递出纸币收下珍贵的战利品。',
      );
      await era.printAndWait('前头继续涌出人群，接着赶到现场的是……');
      await diamond_lord.say_as_unknown_and_wait([
        '诶诶！',
        do_call_di,
        '！我来了！',
      ]);
      await era.printAndWait([
        '远处从人群窜出来一个栗毛',
        digital.uma_sex_title,
        '，凭借着',
        digital.uma_sex_title,
        '的脚力立刻就来到 ',
        digital.get_colored_name(),
        ' 的面前。',
      ]);
      await digital.say_and_wait(['惯例的新刊请收好～']);
      await era.printAndWait([
        '接过新刊的',
        digital.uma_sex_title,
        '一路小跳着离场了，第一位顾客，但接下来的是……',
      ]);
      era.printButton('「数码……虽说我对你的知名度也略有耳闻……」', 1);
      await era.input();
      await era.printAndWait(
        '要……要忙不过来了，正拿起包内卷好的挂画，又要清点接过的现金……',
      );
      await era.printAndWait(
        '别问为什么没有电子支付，手机自从进场后就静静地躺在口袋里，再也没有发出任何声响。',
      );
      await era.printAndWait([
        '经过了一段不断的忙活后，终于，可以摆上「已告罄」的牌子。',
      ]);
      era.println();
      await era.printAndWait([
        '正和 ',
        digital.get_colored_name(),
        ' 讨论着要不要去看一下URA官方馆区的时候，',
        {
          color: dober.color,
          content: '多伯老师',
          fontWeight: 'bold',
        },
        ' 过来告别了。',
      ]);
      await dober.say_and_wait([
        do_call_di,
        '，虽然本来想邀请你一起逛一下馆区的，实在可惜，我得在此告别了。在此祝你能够创作出更优秀的作品。',
      ]);
      await digital.say_and_wait('诶诶欸，承蒙关照！我势必会拼死创作的！');
      await digital.say_and_wait(
        '因为出道后对作品有所懈怠，不过请放心，我在这之后会调整回来的!',
      );
      await dober.say_and_wait(['！']);
      await era.printAndWait([
        '隔着口罩，即使只看那眼睛，也能察觉到 ',
        dober.get_colored_name(),
        ' 激烈的情绪变化。',
      ]);
      await era.printAndWait([
        digital.sex,
        '握紧拳头，摘下了伪装用的帽子和口罩。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 愣住了，',
        digital.sex,
        '不知道为什么 ',
        dober.get_colored_name(),
        ' 突然这么气愤。',
      ]);
      await digital.say_and_wait(['白……', call_59, '……？']);
      await era.printAndWait([
        dober.get_colored_name(),
        ' 从挎包中抽出 ',
        digital.get_colored_name(),
        ' 的同人志，放回了 ',
        digital.get_colored_name(),
        ' 的摊位。',
      ]);
      await dober.say_and_wait(['这本，我本来还想回去看的，抱歉。']);
      await era.printAndWait([
        dober.get_colored_name(),
        ' 头也不回地走了，连 ',
        digital.get_colored_name(),
        ' 的挽留都没看。',
      ]);
      await digital.say_and_wait(['……']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 低着头，望着那本自己精致包装过的同人志。',
      ]);
      await diamond_lord.say_as_unknown_and_wait(['那个……', do_call_di, '？']);

      await era.printAndWait([
        '是最开始赶到摊位的栗毛',
        digital.uma_sex_title,
        '，',
        digital.sex,
        '也拿着一大包战利品，看起来也是来问候一下的。',
      ]);
      await digital.say_and_wait([
        '抱歉让你见丑了，',
        diamond_lord.get_colored_name(),
        '。我……',
      ]);
      await digital.say_and_wait([
        '我想问一下，作为粉丝，想要看到更多老师的作品，不是……正常的吗？',
      ]);
      await diamond_lord.say_and_wait('是的……不过……');
      await era.printAndWait([
        '名为 ',
        diamond_lord.get_colored_name(),
        ' 的',
        digital.uma_sex_title,
        ' ',
        digital.sex,
        '……直接就坐在地上，翻找那个硕大的背包，从中拿出来了一本厚书。',
      ]);
      await era.printAndWait(
        '然后一打开才发现，这是外裹了厚保护封皮的同人志。',
      );
      await diamond_lord.say_and_wait(
        '这本，是你在出道第一年那个时候出的同人志……',
      );
      await diamond_lord.say_and_wait(
        '那时候我还不是你的粉丝，这本，还是我在其他人手里高价买下来的……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' 抿着嘴唇，一言不发。',
      ]);
      await diamond_lord.say_and_wait([
        '即使是高价买下来，但却是我觉得买得最值的一本，',
        do_call_di,
        ' 知道是为什么吗。',
      ]);
      await diamond_lord.say_and_wait([
        '这一本，描绘的是一个初出牛犊的',
        digital.uma_sex_title,
        '的比赛，除了一贯的对',
        digital.uma_sex_title,
        '的爱以外，里面，还有一些不一样的东西。',
      ]);
      await diamond_lord.say_and_wait(
        '我另一个想说的事情是，我是在那场与你的比赛成为你的粉丝的……之后，你的每一次比赛我都有去看。',
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ' 再次把那本同人志视若珍宝地再次用厚封皮包裹起来放进背包，接着',
        digital.sex,
        '背起背包，走了。',
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        ' 出神地看着在场外Cos知名',
        digital.uma_sex_title,
        '跳舞的Coser。',
      ]);
      await era.printAndWait([
        digital.couple_title,
        '有些是带着假耳的普通',
        digital.phy_sex_title,
        '，也有一些是直接戴上Cos耳套的',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '眼见着',
        digital.couple_title,
        '翩翩起舞，',
        digital.get_colored_name(),
        '……',
      ]);
      await digital.say_and_wait([callname, '，为什么？']);
      era.printButton('「是想问多伯还是君主？」', 1);
      await era.input();
      await digital.say_and_wait('……都是。');
      era.printButton(
        `「数码你啊，是能在赛场中飞驰的赛${digital.uma_sex_title}吧？`,
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' 对这牛头不搭马嘴的提问停顿了一下，摇了摇头。',
      ]);
      await you.say_and_wait([
        '我要谢谢多伯和君主，是',
        digital.couple_title,
        '让我这个 ',
        callname,
        ' 想起来了。',
      ]);
      era.println();
      await era.printAndWait([
        '那个在赛道中虽然很变态，紧紧盯着其他',
        digital.uma_sex_title,
        '的 ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        '如果你不是赛',
        digital.uma_sex_title,
        '的话，那我，你的粉丝们，看到的数码又是谁呢？',
      ]);
      await digital.say_and_wait(['那个数码……只是还没认清现状的数码……']);
      era.println();
      await era.printAndWait([
        '即使前面就是终点线，依旧如此的 ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        '只要踏进赛场，你就成为赛',
        digital.uma_sex_title,
        '了，你就是被粉丝们所应援的存在了啊！',
      ]);
      await digital.say_and_wait(['只要……踏进赛场？']);
      await you.say_and_wait([
        '对！身为粉丝的你不是最清楚不过了吗！在赛场上的每一个',
        digital.uma_sex_title,
        '，无论表现如何，都是如此啊！',
      ]);
      era.println();
      await era.printAndWait([
        '即使一片泥泞，也要奋力向前的 ',
        digital.get_colored_name(),
        '……',
      ]);
      era.printButton('「你早已，成为粉丝拥护着的存在了啊！」', 1);
      await era.input();
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 听到这句话后，浑身一震。',
      ]);
      era.printButton('「粉丝服务，明白吗！」', 1);
      await era.input();
      await digital.say_and_wait('明白！');
      era.println();
      await era.printAndWait([digital.get_colored_name(), '，真的是……']);
      await digital.say_and_wait([
        '唔噢噢噢噢噢噢，可不能辜负粉丝们的期待啊……啊哈哈哈……',
      ]);
      era.println();
      await era.printAndWait([digital.uma_sex_title, '啊。']);
      await digital.say_and_wait('我还是，再努力一下好了。');
      await era.printAndWait(
        '眉毛低垂，眼神浑浊，还带着泪光，甚至可以说是苦笑。',
      );
      await era.printAndWait('不过这个笑容，必定能让粉丝感动地留下眼泪……');
      await era.printAndWait('啊，看不清了……');
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = '世界的旅人';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} halo 圣王光环
     */
    const f = async (digital, opera, tachyon, doto, halo) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' 仍在继续挑战，为之后去海外远征而努力。',
      ]);
      await digital.print_and_wait([
        '不仅是为了胜利，也是为了和同志一起，去遇见更多的',
        digital.uma_sex_title,
        '。',
      ]);
      await digital.print_and_wait('在为了先行考察，并没有太多人知道的航班……');
      await digital.print_and_wait('准备启程前……');
      await digital.print_and_wait('诶呀呀，来了不少熟人啊。');
      await digital.print_and_wait([
        halo.get_colored_name(),
        '、',
        opera.get_colored_name(),
        '、',
        doto.get_colored_name(),
        '、',
        tachyon.get_colored_name(),
        '……还有黑船？',
      ]);
      await digital.print_and_wait(
        '本来就是暂时离开，适应一下海外环境，倒不如说是旅游？',
      );
      await digital.print_and_wait('结果还来了这么多人告别吗？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        '，真的了不起啊。',
      ]);
      await digital.say_and_wait([
        '不过，我等不了了！异域的邂逅，我要和同志一起，想要和世界各地的',
        digital.uma_sex_title,
        '们相遇啊！',
      ]);
      await digital.print_and_wait([
        '世界的旅人，',
        digital.get_colored_name(),
        '，现在仍在奔跑中。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
