/** @file 杂项 */
const {
  input,
  print,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

module.exports = {
  /**
   * 办公室初见
   * @author 黑奴队长
   * @param {CharaTalk} aoi
   * @param {CharaTalk} riko
   * @param {CharaTalk} you
   * @param {PrintedSpan} r_call_a
   * @param {boolean} empty_team
   */
  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      ' 来到训练员公用的办公室，里面已经有两位训练员在了。',
    ]);
    await riko.say_as_unknown_and_wait([
      '您好，您就是新来的 ',
      you.actual_name,
      ' 训练员吧。',
    ]);
    await riko.say_and_wait([
      '我是 ',
      riko.get_colored_actual_name(),
      '，今后为了中央特雷森的荣光一起努力吧。',
    ]);
    await aoi.say_and_wait([
      '贵安，我是 ',
      aoi.get_colored_actual_name(),
      '，今后请您多多指教。',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        '您现在还没有担当，如果有什么困难的话请尽管来找我或者这位 ',
        r_call_a,
        ' 商量吧',
      ]);
    }
  },

  /**
   * 以下是 URA 颁奖典礼的地文
   */

  ura_reward: (() => {
    /**
     * URA 颁奖典礼
     * @author 雞雞
     * @author 黑奴队长
     * @param {CharaTalk} etusko
     * @param {CharaTalk} you
     * @param {function(TextContent):Promise} report 用于主持人发言的回调函数
     * @param {string} year 年度
     * @param {string} uma 马郎 or 马娘
     * @param {boolean} is_etusko 是否是乙名史主持（乙名史怀孕或育成期间不会主持）
     * @param uma_list_cb 用于输出选手立绘列表的回调函数们
     * @param {function} uma_list_cb.g1 G1 马娘
     * @param {function} uma_list_cb.best_trainer 年度训练员
     * @param {function} uma_list_cb.junior 最佳新秀马娘
     * @param {function} uma_list_cb.classic 最佳经典马娘
     * @param {function} uma_list_cb.senior 最佳资深马娘
     * @param {function} uma_list_cb.uoty 年度马娘
     * @param {string} uma_list_cb.default_best_trainer 如果玩家没赢得年度训练员，作为替代的训练员名
     * @returns {Promise<void>}
     */
    const f = async (
      etusko,
      you,
      report,
      year,
      uma,
      is_etusko,
      uma_list_cb,
    ) => {
      await report([
        '各位赛',
        uma,
        '粉丝们，晚上好！各位热切期盼的年度盛事，URA颁奖典礼就要开始了！',
      ]);
      await report([
        '与往常一样，大会方设立了多个奖项，向拼尽全力以最高的竞技水平带来精彩表演的各位赛',
        uma,
        '，以及在背后默默支持',
        uma,
        '们的各位训练员们献上敬意！',
      ]);
      if (is_etusko) {
        await report([
          '今年也由我 ',
          etusko.get_colored_actual_name(),
          ' 来主持典礼，请大家多多指教了！',
        ]);
      }
      println();
      await report([
        '在正式开始颁奖前，让我们来重温一下 ',
        year,
        ' 年的 G1 比赛都有哪些赛',
        uma,
        '脱颖而出！',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（一些选手的名字，可惜没有 ',
            you.get_colored_name(),
            ' 的队伍成员）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('在此再次感谢各位选手为竞赛作出的努力！');
      println();
      await report('那么事不宜迟，立即就来开始公布备受瞩目的各个奖项吧！');
      println();
      await report('首先是……本年度《最佳训练员大奖》！');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          you.get_colored_actual_name(),
          '训练员的努力有目共睹呢！',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            uma_list_cb.default_best_trainer,
            '训练员的努力有目共睹呢！',
          ]);
        } else {
          await report('由于本年度没有达标的候选人……');
          await report('非常遗憾，希望来年能看到得奖的幸运儿！');
        }
      }
      println();
      await report('然后是……本年度《最佳新秀大奖》！');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（一位刚刚结束新秀年的选手的名字和照片，可惜并不是 ',
            you.get_colored_name(),
            ' 的队伍成员）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('希望这位选手能继续在赛场上发光发热呢！');
      println();
      await report('接下来是……本年度《最佳经典级大奖》！');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（一位刚刚结束经典年的选手的名字和照片，可惜并不是 ',
            you.get_colored_name(),
            ' 的队伍成员）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('已经逐渐成长成中流砥柱的模样了！');
      println();
      await report('然后是……本年度《最佳资深级大奖》！');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（一位刚刚结束资深年的选手的名字和照片，可惜并不是 ',
            you.get_colored_name(),
            ' 的队伍成员）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('毫无疑问，已经是百战老兵了！');
      println();
      await report([
        '最后！便是决定本年度最快、最高、最强的历史一刻！能在诸多名马之列中留下自己独一无二的印记的赛',
        uma,
        '……到底是谁？！',
      ]);
      await report(['《年度代表', uma, '》，这个最终的荣耀归属于——']);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（一位选手的名字和照片，可惜并不是 ',
            you.get_colored_name(),
            ' 的队伍成员）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('此刻，最强者已经决出！');
      println();
      await report('感谢各位今天大驾光临，让我们明年再会吧！');
    };
    f.title = 'URA 颁奖典礼';
    return f;
  })(),
  /** 乙名史怀孕或育成期间，URA 颁奖典礼的主持人称呼 */
  ur_alternative_reporter: '主持人',
  /**
   * 训练员年度成绩
   * @param {PrintedSpan} total 总胜场
   * @param {PrintedSpan} money 总赏金
   * @param {PrintedSpan} g1_wins G1 胜利数
   * @param {PrintedSpan} all_wins 重赏胜利数
   */
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      '年度团队总胜场：',
      total,
      { isBr: true },
      '年度团队总赏金：',
      money,
      ' 马币',
      { isBr: true },
      '年度团队 G1 胜场：',
      g1_wins,
      { isBr: true },
      '年度团队重赏胜场：',
      all_wins,
    ];
  },
  /**
   * 训练员年度成绩
   * @param {PrintedSpan} total 总胜场
   * @param {PrintedSpan} money 总赏金
   * @param {PrintedSpan} g1_wins G1 胜利数
   * @param {PrintedSpan} all_wins 重赏胜利数
   */
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      '年度总胜场：',
      total,
      { isBr: true },
      '年度总赏金：',
      money,
      ' 马币',
      { isBr: true },
      '年度 G1 胜场：',
      g1_wins,
      { isBr: true },
      '年度重赏胜场：',
      all_wins,
    ];
  },

  /**
   * 以下是超得地文
   */

  /**
   * 超得，但是队伍已达限额
   * @param {CharaTalk} taste 理事长
   */
  async star_drew_limited(taste) {
    await taste.say_and_wait('不 解！你的队伍已经有足够的成员了！');
  },
  /**
   * 超得，但是不在招募季
   * @param {CharaTalk} taste 理事长
   */
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait('疑 惑！现在并不是招募担当的时候！');
  },
  /**
   * 超得开场白
   * @param {CharaTalk} taste 理事长
   */
  star_drew_intro(taste) {
    taste.say(
      '告 知！对于还没有入队但是很有天赋的孩子，学园方面会允许已经做出成绩的训练员直接去指名教导对方，但是需要有能够服众的声望！',
    );
    taste.say('注 意！即使这样指名了，也还请好好和对方从头相处吧！');
  },
  star_drew_options: ['从列表里选', '用名字指名', '用 ID 指名', '再想想'],
  get_star_drew_selected: (name) => `${name} [已指名]`,
  star_drew_kojo_chara: '使用口上的角色',
  star_drew_timon_chara: '使用地文的角色',
  star_drew_chara_name_input: '请输入想指名的角色名',
  star_drew_chara_id_input: '请输入想指名的角色 ID',
  /**
   * 超得，但是重复选择
   * @param {CharaTalk} taste 理事长
   * @param {CharaTalk} chara 被超得的对象
   */
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      '提 醒！',
      chara.get_colored_name(),
      ' 同学已经在训练场等着了！',
    ]);
  },
  /**
   * 超得，但是没有选中任何人
   * @param {CharaTalk} taste 理事长
   */
  async star_drew_no_one(taste) {
    await taste.say_and_wait('疑 惑！查无此人！');
  },
  /**
   * 超得
   * @param {CharaTalk} taste 理事长
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} chara 被超得的对象
   * @param {boolean} changed 是否是变更超得对象
   * @returns {Promise<number>}
   */
  async star_drew(taste, you, chara, changed) {
    taste.say(['抉 择！要让学园帮你接触 ', chara, ' 同学吗？']);
    printButton('「超 得！！」', 1);
    printButton('「慢 着！！」', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        '激 热！',
        chara,
        ' 同学最近将经常去训练场，好好把握！',
      ]);
      if (changed) {
        await taste.say_and_wait([
          '不 快！但还请 ',
          you.get_colored_actual_name(),
          ' 训练员下次想好了再决定！',
        ]);
      }
    } else {
      await taste.say_and_wait('愤 怒！想好了再来啊！');
    }
    return ret;
  },
  grand_live_header: '明年如下赛事将举办大舞台：',

  /**
   * 以下是投资理财地文
   */

  /**
   * 不够1k马币，拒绝投资
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} callname 百炼对玩家的称呼
   */
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      '抱歉呐，但是 ',
      callname,
      ' 你没有足够的资金吧？我的渠道里没有会接受 1,000 马币以下的微型投资的机构诶……',
    ]);
  },
  /**
   * 现在的投资总额和收益
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} funds 投资总额
   * @param {PrintedSpan} income 周收益
   */
  fund_summary(bryne, funds, income) {
    print([
      '现在向 ',
      bryne.get_colored_name(),
      ' 提供了 ',
      funds,
      ' 马币资金，每周共提供 ',
      income,
      ' 马币收益。',
    ]);
  },
  bt_fund: '投资（以 1000 马币为单位）',
  bt_ransom: '赎回',
  fund_confirm: '要投资多少马币？',
  /**
   * 追加投资额和总收益
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} new_funds 追加投资额
   * @param {PrintedSpan} income 追加后的周收益
   */
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      '向 ',
      bryne.get_colored_name(),
      ' 追加了 ',
      new_funds,
      ' 马币资金，每周共提供 ',
      income,
      ' 马币收益。',
    ]);
  },
  get_ransom_confirm(funds) {
    return ['要赎回多少马币？共投资了 ', funds, ' 马币：'];
  },
  /**
   * 赎回投资额、剩余投资额和总收益
   * @param {PrintedSpan} ransomed 赎回额度
   * @param {PrintedSpan|boolean} funds 赎回后的剩余投资额，如果还有就是 Object 类型，否则会是其他类型（Boolean）
   * @param {PrintedSpan} income 赎回后的周收益
   */
  async ransom_result(ransomed, funds, income) {
    print(['赎回了 ', ransomed, ' 马币。']);
    if (typeof funds === 'object') {
      await printAndWait([
        '还有 ',
        funds,
        ' 马币资金，每周共提供 ',
        income,
        ' 马币收益。',
      ]);
    }
  },
};
