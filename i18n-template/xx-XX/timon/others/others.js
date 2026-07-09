/**
 * @file 杂项
 * @author 雞雞
 * @author 黑奴队长
 */
const {
  get,
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
   * @param {CharaTalk} aoi 桐生院葵
   * @param {CharaTalk} riko 㭴本理子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} r_call_a 㭴本理子对桐生院葵的称呼
   * @param {boolean} empty_team 是否没有队伍成员
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
   * 重复育成
   * @author 天马闪光蹄
   */

  sc_event_name: '「梦」',
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '「我就是为此而来」',
          no: '「……已经够了」',
        }
      : {
          yes: '继续前进',
          no: '就此回头',
        },
  /**
   * 事件前半段
   * @param {CharaTalk} you 玩家
   */
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('夜深人静。');
      await printAndWait([
        you.get_colored_name(),
        ' 独自前往特雷森的学院中心。',
      ]);
      await printAndWait('一尊三女神的雕塑安然竖立于此。');
      await printAndWait([
        you.get_colored_name(),
        ' 深呼吸，走向泉边，将自己先前所写的书信敬上，投入水中。',
      ]);
      await printAndWait([
        '池里倒映的月光霎时轻摇起来，一片幽光浮动，',
        you.get_colored_name(),
        ' 感觉到数个声音一齐在脑中回荡——',
      ]);
      await printAndWait(
        '人生无常，无论是一马当先的勇者，统治世代的霸主又或是制御领域的帝皇，所经之路都未必一帆风顺，无论光辉黑暗，终究是梦幻的泡影。',
      );
      await printAndWait(
        '不过，噩梦终会逝去，美梦也能成真。浮沫中，也有想要捞出保存的事物。',
      );
      await you.say_as_unknown_and_wait('那么，告诉我你的决心。');
    } else {
      await printAndWait([you.get_colored_name(), ' 又一次回到了这个地方。']);
      await printAndWait([
        '这是……第几次？',
        you.get_colored_name(),
        ' 对此的记忆诡异地模糊起来。',
      ]);
      await printAndWait('不过，这不是关键……');
      await printAndWait([you.get_colored_name(), ' 心中所想之事，才是必需。']);
    }
  },
  sc_limit_template: '请选择要再次育成的角色 (最多选择 %LIMIT% 名)',
  sc_name_template: '%NAME%',
  sc_name_inherited_template: '%NAME%（已被继承）',
  /**
   * 事件前半段
   * @param {CharaTalk} you 玩家
   */
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' 望向雕像的面部，盯着那三对灵动似真的眼眸，俯首行礼。',
      ]);
      await printAndWait('随后，一片光彩绽放——');
      await printAndWait('是时候追寻「下一次」的真实了。');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' 看着三女神的塑像，水雾模糊了她们的面容，',
        you.get_colored_name(),
        ' 想做些什么，刚欲张口伸手，却——',
      ]);
      await printAndWait('眼前的一切在面前扭曲。');
      await printAndWait('随后立刻恢复，仿佛什么都没发生过。');
      await printAndWait('……');
      await printAndWait('一切如常……或有不同？');
      await printAndWait('自己……做了什么来着？');
    }
  },

  /**
   * 超得地文
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
  star_drew_filter_template: '拥有 %FILTERS% 的角色',
  star_drew_filter_kojo_template: '%KOJO% 口上',
  star_drew_filter_image: '专属调教立绘',
  star_drew_bt_filter_kojo_r: '招募',
  star_drew_bt_filter_kojo_d: '日常',
  star_drew_bt_filter_kojo_ed: '育成',
  star_drew_bt_filter_kojo_l: '爱慕',
  star_drew_bt_filter_kojo_er: '调教',
  star_drew_bt_filter_kojo_b: '地下室',
  star_drew_bt_filter_image: '立绘',
  sd_f_title_kojo_r: '招募口上：角色在加入队伍时触发的专属剧情与文本。',
  sd_f_title_kojo_d:
    '日常口上：角色在日常互动或节日庆典中触发的专属剧情与文本。',
  sd_f_title_kojo_ed: '育成口上：角色在育成过程中展开的专属剧情事件与故事线。',
  sd_f_title_kojo_l:
    '爱慕口上：角色在爱慕值提升至特定阶段时触发的专属剧情与事件。',
  sd_f_title_kojo_er: '调教口上：角色在调教的性爱互动中触发的专属剧情与文本。',
  sd_f_title_kojo_b: '地下室口上：角色在绑架并监禁玩家时触发的专属剧情与文本。',
  sd_f_title_image: '专属调教立绘：角色在调教中拥有的独特立绘表现。',
  get_star_drew_selected: (name) => `${name} [已指名]`,
  star_drew_all_chara: '可指名角色',
  star_drew_other_chara: '其他角色',
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
   * 投资理财地文
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

  /**
   * 周年庆事件
   */

  /**
   * 十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   */
  async TEN(you, uma) {
    await printAndWait('时光荏苒，三年之后又三年，三年之后又三年。');
    await printAndWait([
      '樱花开了又谢，谢了又开，',
      you.get_colored_name(),
      '在特雷森学园的时光已过了十年。',
    ]);
    await printAndWait([
      '这十年间',
      you.get_colored_name(),
      '见证着一个个赛',
      uma,
      '的成长，',
      you.get_colored_name(),
      '也从初出茅庐的训练员成长为学园中备受尊敬的存在。',
    ]);
    await printAndWait([
      '感谢',
      you.get_colored_name(),
      '在幕后默默守护，陪伴',
      uma,
      '们一路前行。',
    ]);
    await printAndWait([
      '正因为有',
      you.get_colored_name(),
      '，这十年的故事才如此闪耀。',
    ]);
  },
  /**
   * 二十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} they 她们 or 他们
   */
  async TWENTY(you, uma, they) {
    await printAndWait('二十载光阴如白驹过隙，匆匆而逝。');
    await printAndWait(['特雷森学园的训练场上，赛', uma, '的脚步仍未停歇。']);
    await printAndWait([
      '感谢',
      you.get_colored_name(),
      '从未放弃任何一个梦想。',
    ]);
    await printAndWait([
      they,
      '的每一次冲刺，都有',
      you.get_colored_name(),
      '的影子在其中。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '翻阅着新一代学员的档案，或许，这些青涩的名字中又会诞生下一个改变历史的存在。',
    ]);
  },
  /**
   * 三十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   */
  async THIRTY(you) {
    await printAndWait([
      '三十年的岁月，足够让',
      you.get_colored_name(),
      '成为一代人心中的传奇。',
    ]);
    await printAndWait('赛场依旧热血沸腾，特雷森的校徽依旧散发着光辉。');
    await printAndWait([
      '而',
      you.get_colored_name(),
      '的故事早已被无数人铭记。',
    ]);
    await printAndWait([
      '感谢',
      you.get_colored_name(),
      '用三十年的坚持与信念，书写了不可复制的传奇。',
    ]);
  },
  /**
   * 四十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} they 她们 or 他们
   */
  async FORTY(you, uma, they) {
    await printAndWait([
      '四十年就在弹指一挥间，',
      you.get_colored_name(),
      '的故事已然成为特雷森学园的无可分割的一部分。',
    ]);
    await printAndWait([
      '即使岁月更迭，',
      you.get_colored_name(),
      '的坚持从未改变。',
    ]);
    await printAndWait([
      '赛',
      uma,
      '们不断突破自我，为了彼此的梦想而奔跑，而',
      you.get_colored_name(),
      '始终是',
      they,
      '背后最温暖的存在。',
    ]);
    await printAndWait([
      '学园某面荣誉墙之上中挂满了四十年来的照片，每一张都记录着',
      you.get_colored_name(),
      '的足迹。',
    ]);
  },
  /**
   * 五十周年
   * @author 雞雞
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马娘 or 马郎
   * @param {string} they 她们 or 他们
   */
  async FIFTY(you, uma, they) {
    await printAndWait('人生五十年，如梦亦似幻。');
    await printAndWait(
      '樱花依旧如初般绽放，特雷森学园迎来了属于她的半世纪辉煌。',
    );
    await printAndWait('半个世纪的时间足以改变一切，但有些事却从未改变。');
    await printAndWait([
      '曾经的赛',
      uma,
      '们有的成为了传奇，有的退居幕后，但',
      they,
      '的故事都因',
      you.get_colored_name(),
      '而延续。',
    ]);
    await printAndWait([
      '而',
      you.get_colored_name(),
      '也依然站在训练场上，注视着新的赛',
      uma,
      '们奔跑的身影。',
    ]);
  },
};
