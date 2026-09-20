/**
 * @file 雑項
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
   * オフィス初対面
   * @param {CharaTalk} aoi 桐生院葵
   * @param {CharaTalk} riko 樫本理子
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} r_call_a 樫本理子から桐生院葵への呼び方
   * @param {boolean} empty_team チームメンバーがいないか
   */
  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      ' はトレーナー共用の執務室へ入った。すでに二人のトレーナーがいる。',
    ]);
    await riko.say_as_unknown_and_wait([
      'こんにちは。新任の ',
      you.actual_name,
      ' トレーナーですね。',
    ]);
    await riko.say_and_wait([
      '樫本理子です。これから中央トレセンの栄えのため、一緒に励みましょう。',
    ]);
    await aoi.say_and_wait([
      'ごきげんよう。桐生院葵です。どうぞよろしくお願いいたします。',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        'まだ担当がいらっしゃらないようですね。困ったことがあれば、私かこちらの ',
        r_call_a,
        ' に遠慮なくご相談ください',
      ]);
    }
  },

  /**
   * 以下は URA 表彰式の地の文
   */

  ura_reward: (() => {
    /**
     * URA 表彰式
     * @author 雞雞
     * @param {CharaTalk} etusko
     * @param {CharaTalk} you
     * @param {function(TextContent):Promise} report 司会発言のコールバック
     * @param {string} year 年度
     * @param {string} uma ウマ郎 or ウマ娘
     * @param {boolean} is_etusko 乙名史が司会か（妊娠または育成中は司会しない）
     * @param uma_list_cb 選手立ち絵リスト出力のコールバック群
     * @param {function} uma_list_cb.g1 G1 ウマ娘
     * @param {function} uma_list_cb.best_trainer 年間最優秀トレーナー
     * @param {function} uma_list_cb.junior 最優秀ジュニアウマ娘
     * @param {function} uma_list_cb.classic 最優秀クラシックウマ娘
     * @param {function} uma_list_cb.senior 最優秀シニアウマ娘
     * @param {function} uma_list_cb.uoty 年度代表ウマ娘
     * @param {string} uma_list_cb.default_best_trainer プレイヤーが年間最優秀トレーナーを取れなかったときの代替名
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
        '各',
        uma,
        'ファンの皆さん、こんばんは！ 皆さんが心待ちにしていた年に一度の祭典、URA表彰式の始まりです！',
      ]);
      await report([
        '例年どおり、大会側は複数の賞を設け、最高の競技水準で精彩を届けてくれた各',
        uma,
        'と、その陰で支えてきたトレーナーの皆さんへ敬意を表します！',
      ]);
      if (is_etusko) {
        await report([
          '今年も私、',
          etusko.get_colored_actual_name(),
          ' が司会を務めます。どうぞよろしくお願いいたします！',
        ]);
      }
      println();
      await report([
        '表彰に入る前に、',
        year,
        ' 年の G1 で輝いた',
        uma,
        'たちを振り返りましょう！',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（何人かの選手の名。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーはいない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('改めて、各選手の尽力に感謝します！');
      println();
      await report('では早速、注目の各賞を発表しましょう！');
      println();
      await report('まずは……本年度《最優秀トレーナープライズ》！');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          you.get_colored_actual_name(),
          'トレーナーの尽力は、誰の目にも明らかです！',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            uma_list_cb.default_best_trainer,
            'トレーナーの尽力は、誰の目にも明らかです！',
          ]);
        } else {
          await report('本年度は基準を満たす候補がいませんでした……');
          await report('残念です。来年こそ、受賞の幸運を期待しましょう！');
        }
      }
      println();
      await report('続いて……本年度《最優秀ジュニアプライズ》！');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（ジュニア級を終えたばかりの選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report(
        'この選手が、これからもコースで輝き続けることを願っています！',
      );
      println();
      await report('次は……本年度《最優秀クラシック級プライズ》！');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（クラシック級を終えたばかりの選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('もう中核を担う風格が出てきましたね！');
      println();
      await report('そして……本年度《最優秀シニア級プライズ》！');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（シニア級を終えたばかりの選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('疑いようもなく、百戦錬磨の古強者です！');
      println();
      await report([
        '最後！ 本年度いちばん速く、いちばん高く、いちばん強い歴史の一瞬です！ 数多の名馬の列に、唯一無二の印を残した',
        uma,
        '……果たして誰か？！',
      ]);
      await report(['《年度代表', uma, '》。この最終の栄誉は——']);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（ある選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('いま、最強は決しました！');
      println();
      await report(
        '本日はご来場ありがとうございました。来年、またお会いしましょう！',
      );
    };
    f.title = 'URA 表彰式';
    return f;
  })(),
  /** 乙名史が妊娠または育成中のときの URA 表彰式司会の呼び方 */
  ur_alternative_reporter: '司会',
  /**
   * トレーナー年度成績
   * @param {PrintedSpan} total 総勝鞍
   * @param {PrintedSpan} money 総賞金
   * @param {PrintedSpan} g1_wins G1 勝利数
   * @param {PrintedSpan} all_wins 重賞勝利数
   */
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      '年度チーム総勝鞍：',
      total,
      { isBr: true },
      '年度チーム総賞金：',
      money,
      ' ウマコイン',
      { isBr: true },
      '年度チーム G1 勝鞍：',
      g1_wins,
      { isBr: true },
      '年度チーム重賞勝鞍：',
      all_wins,
    ];
  },
  /**
   * ウマ娘年度成績
   * @param {PrintedSpan} total 総勝鞍
   * @param {PrintedSpan} money 総賞金
   * @param {PrintedSpan} g1_wins G1 勝利数
   * @param {PrintedSpan} all_wins 重賞勝利数
   */
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      '年度総勝鞍：',
      total,
      { isBr: true },
      '年度総賞金：',
      money,
      ' ウマコイン',
      { isBr: true },
      '年度 G1 勝鞍：',
      g1_wins,
      { isBr: true },
      '年度重賞勝鞍：',
      all_wins,
    ];
  },

  /**
   * 繰り返し育成
   * @author 天马闪光蹄
   */

  sc_event_name: '「夢」',
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '「そのために来た」',
          no: '「……もう十分だ」',
        }
      : {
          yes: '先へ進む',
          no: 'ここで引き返す',
        },
  /**
   * イベント前半
   * @param {CharaTalk} you プレイヤー
   */
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('夜は深く、人は寝静まっている。');
      await printAndWait([
        you.get_colored_name(),
        ' はひとり、トレセンの学園中心へ向かった。',
      ]);
      await printAndWait('三女神の像が、そこに穏やかに立っている。');
      await printAndWait([
        you.get_colored_name(),
        ' は深く息を吸い、泉のほとりへ歩み、先に書いた手紙を捧げて水へ投じた。',
      ]);
      await printAndWait([
        '池に映る月がふっと揺れ、幽かな光が漂う。',
        you.get_colored_name(),
        ' は、いくつかの声が同時に頭の中で響くのを感じた——',
      ]);
      await printAndWait(
        '人生は無常。先を行く勇者も、世代を治めた覇者も、領域を制した帝王も、その道が必ずしも順風であるとは限らない。光も闇も、ついには夢幻の泡影。',
      );
      await printAndWait(
        'だが悪夢は去り、美夢も叶う。浮沫のなかにも、掬い取って残したいものがある。',
      );
      await you.say_as_unknown_and_wait('では、あなたの決意を聞かせて。');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' は、またこの場所へ戻ってきた。',
      ]);
      await printAndWait([
        'これは……何度目だろう。',
        you.get_colored_name(),
        ' の記憶は、奇妙にぼやけていく。',
      ]);
      await printAndWait('だが、それが肝要ではない……');
      await printAndWait([
        you.get_colored_name(),
        ' が胸に思うことこそ、必要なのだ。',
      ]);
    }
  },
  sc_limit_template: '再び育成するキャラを選んでください（最大 %LIMIT% 名）',
  sc_name_template: '%NAME%',
  sc_name_inherited_template: '%NAME%（継承済み）',
  /**
   * イベント後半
   * @param {CharaTalk} you プレイヤー
   */
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' は像の顔へ視線を上げ、真に動くかのような三対の瞳を見つめ、頭を下げて礼をした。',
      ]);
      await printAndWait('それから、光彩が咲いた——');
      await printAndWait('「次」の真実を追う時が来た。');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' は三女神の塑像を見た。水霧が彼女たちの顔をぼかし、',
        you.get_colored_name(),
        ' は何かをしようと口を開き、手を伸ばしかけて——',
      ]);
      await printAndWait('眼前のすべてが歪んだ。');
      await printAndWait('すぐに元へ戻り、何も起きなかったかのようだ。');
      await printAndWait('……');
      await printAndWait('すべてはいつもどおり……あるいは、違うのか？');
      await printAndWait('自分は……何をしたのだったか。');
    }
  },

  /**
   * 超得の地の文
   */

  /**
   * 超得だが、チームが上限
   * @param {CharaTalk} taste 理事長
   */
  async star_drew_limited(taste) {
    await taste.say_and_wait(
      '不 解！ あなたのチームにはもう十分なメンバーがいる！',
    );
  },
  /**
   * 超得だが、募集季ではない
   * @param {CharaTalk} taste 理事長
   */
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait('疑 惑！ いまは担当を募集する時期ではない！');
  },
  /**
   * 超得の導入
   * @param {CharaTalk} taste 理事長
   */
  star_drew_intro(taste) {
    taste.say(
      '告 知！ まだ入団していないが天賦のある子について、学園は実績のあるトレーナーが直接指名して指導することを認める！ ただし衆を納得させる名声が必要だ！',
    );
    taste.say(
      '注 意！ 指名したとしても、相手とはきちんと一から付き合ってほしい！',
    );
  },
  star_drew_options: ['一覧から選ぶ', '名前で指名', 'ID で指名', '考え直す'],
  star_drew_filter_template: '%FILTERS% を持つキャラ',
  star_drew_filter_kojo_template: '%KOJO% 口上',
  star_drew_filter_image: '専用調教立ち絵',
  star_drew_bt_filter_kojo_r: '募集',
  star_drew_bt_filter_kojo_d: '日常',
  star_drew_bt_filter_kojo_ed: '育成',
  star_drew_bt_filter_kojo_l: '恋慕',
  star_drew_bt_filter_kojo_er: '調教',
  star_drew_bt_filter_kojo_b: '地下室',
  star_drew_bt_filter_image: '立ち絵',
  sd_f_title_kojo_r: '募集口上：キャラがチーム加入時に発動する専用劇情と本文。',
  sd_f_title_kojo_d:
    '日常口上：キャラが日常の交流や祭事で発動する専用劇情と本文。',
  sd_f_title_kojo_ed:
    '育成口上：キャラが育成の過程で展開する専用イベントと物語。',
  sd_f_title_kojo_l:
    '恋慕口上：キャラの恋慕が特定段階へ上がったときに発動する専用劇情とイベント。',
  sd_f_title_kojo_er: '調教口上：キャラが調教の性愛で発動する専用劇情と本文。',
  sd_f_title_kojo_b:
    '地下室口上：キャラがプレイヤーを拉致・監禁したときに発動する専用劇情と本文。',
  sd_f_title_image: '専用調教立ち絵：キャラが調教中に持つ独自の立ち絵表現。',
  get_star_drew_selected: (name) => `${name} [指名済み]`,
  star_drew_all_chara: '指名できるキャラ',
  star_drew_other_chara: 'その他のキャラ',
  star_drew_chara_name_input: '指名したいキャラ名を入力してください',
  star_drew_chara_id_input: '指名したいキャラ ID を入力してください',
  /**
   * 超得だが、重複選択
   * @param {CharaTalk} taste 理事長
   * @param {CharaTalk} chara 超得の対象
   */
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      '提 醒！',
      chara.get_colored_name(),
      ' さんはすでにトレーニング場で待っている！',
    ]);
  },
  /**
   * 超得だが、誰も選んでいない
   * @param {CharaTalk} taste 理事長
   */
  async star_drew_no_one(taste) {
    await taste.say_and_wait('疑 惑！ 該当者なし！');
  },
  /**
   * 超得
   * @param {CharaTalk} taste 理事長
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} chara 超得の対象
   * @param {boolean} changed 超得対象を変更したか
   * @returns {Promise<number>}
   */
  async star_drew(taste, you, chara, changed) {
    taste.say(['抉 択！ 学園に ', chara, ' さんとの接触を手伝わせるか？']);
    printButton('「超 得！！」', 1);
    printButton('「待 て！！」', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        '激 熱！',
        chara,
        ' さんは近いうちトレーニング場へよく来る。しっかり掴まえろ！',
      ]);
      if (changed) {
        await taste.say_and_wait([
          '不 快！ だが ',
          you.get_colored_actual_name(),
          ' トレーナー、次はよく考えてから決めてほしい！',
        ]);
      }
    } else {
      await taste.say_and_wait('憤 怒！ 考えてから来い！');
    }
    return ret;
  },
  grand_live_header: '来年、次のレースでグランドライブが開催される：',

  /**
   * 投資の地の文
   */

  /**
   * 1k ウマコイン未満で投資を拒否
   * @param {CharaTalk} bryne タッカー・ブライネ
   * @param {PrintedSpan} callname ブライネからプレイヤーへの呼び方
   */
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      '悪いけど、',
      callname,
      '、資金が足りないんじゃない？ うちの経路には 1,000 ウマコイン未満の小口投資を受ける機関はないよ……',
    ]);
  },
  /**
   * いまの投資総額と収益
   * @param {CharaTalk} bryne タッカー・ブライネ
   * @param {PrintedSpan} funds 投資総額
   * @param {PrintedSpan} income 週収益
   */
  fund_summary(bryne, funds, income) {
    print([
      'いま ',
      bryne.get_colored_name(),
      ' へ ',
      funds,
      ' ウマコインを預けており、毎週 ',
      income,
      ' ウマコインの収益がある。',
    ]);
  },
  bt_fund: '投資（1,000 ウマコイン単位）',
  bt_ransom: '換金',
  fund_confirm: 'いくら投資する？',
  /**
   * 追加投資額と総収益
   * @param {CharaTalk} bryne タッカー・ブライネ
   * @param {PrintedSpan} new_funds 追加投資額
   * @param {PrintedSpan} income 追加後の週収益
   */
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      bryne.get_colored_name(),
      ' へ ',
      new_funds,
      ' ウマコインを追加し、毎週の収益は合計 ',
      income,
      ' ウマコインになった。',
    ]);
  },
  get_ransom_confirm(funds) {
    return ['いくら換金する？ 投資済みは ', funds, ' ウマコイン：'];
  },
  /**
   * 換金額、残額、総収益
   * @param {PrintedSpan} ransomed 換金額
   * @param {PrintedSpan|boolean} funds 換金後の残額。残っていれば Object、なければ他の型（Boolean）
   * @param {PrintedSpan} income 換金後の週収益
   */
  async ransom_result(ransomed, funds, income) {
    print([' ', ransomed, ' ウマコインを換金した。']);
    if (typeof funds === 'object') {
      await printAndWait([
        'まだ ',
        funds,
        ' ウマコインあり、毎週 ',
        income,
        ' ウマコインの収益がある。',
      ]);
    }
  },

  /**
   * 周年イベント
   */

  /**
   * 十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   */
  async TEN(you, uma) {
    await printAndWait('歳月は流れ、三年のあとまた三年、そのあとまた三年。');
    await printAndWait([
      '桜は咲いて散り、散ってまた咲く。',
      you.get_colored_name(),
      'がトレセン学園で過ごした時は、すでに十年になった。',
    ]);
    await printAndWait([
      'この十年、',
      you.get_colored_name(),
      'は一人また一人の',
      uma,
      'の成長を見届け、新米トレーナーから学園で敬われる存在へと育った。',
    ]);
    await printAndWait([
      '陰で静かに守り、',
      uma,
      'たちと道を歩んできた',
      you.get_colored_name(),
      'に、感謝を。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      'がいたからこそ、この十年の物語はこれほど輝いた。',
    ]);
  },
  /**
   * 二十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} they 彼女たち or 彼ら
   */
  async TWENTY(you, uma, they) {
    await printAndWait('二十年の光陰は白駒の隙を過ぐるがごとし。');
    await printAndWait([
      'トレセン学園のトレーニング場では、',
      uma,
      'の脚はまだ止まらない。',
    ]);
    await printAndWait([
      'どの夢も捨てなかった',
      you.get_colored_name(),
      'に、感謝を。',
    ]);
    await printAndWait([
      they,
      'のスパートのたび、そこに',
      you.get_colored_name(),
      'の影がある。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      'は新世代の生徒の資料をめくる。あるいは、これらの未熟な名のなかから、また歴史を変える存在が生まれるかもしれない。',
    ]);
  },
  /**
   * 三十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   */
  async THIRTY(you) {
    await printAndWait([
      '三十年は、',
      you.get_colored_name(),
      'を一代の伝説にするのに十分な歳月だった。',
    ]);
    await printAndWait('コースはなお熱く、トレセンの校章はなお光を放つ。');
    await printAndWait([
      'そして',
      you.get_colored_name(),
      'の物語は、すでに無数の人の記憶に残っている。',
    ]);
    await printAndWait([
      '三十年の堅持と信念で、複製できない伝説を書いた',
      you.get_colored_name(),
      'に、感謝を。',
    ]);
  },
  /**
   * 四十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} they 彼女たち or 彼ら
   */
  async FORTY(you, uma, they) {
    await printAndWait([
      '四十年は指を弾く間。',
      you.get_colored_name(),
      'の物語は、すでにトレセン学園の切り離せない一部になった。',
    ]);
    await printAndWait([
      '歳月が代わっても、',
      you.get_colored_name(),
      'の堅持は変わらない。',
    ]);
    await printAndWait([
      uma,
      'たちは自らを超え続け、互いの夢のために走る。そして',
      you.get_colored_name(),
      'は、いつも',
      they,
      'の背後でいちばん温かい存在だ。',
    ]);
    await printAndWait([
      '学園のある栄誉の壁には、四十年分の写真が掛かっている。一枚ごとに',
      you.get_colored_name(),
      'の足跡がある。',
    ]);
  },
  /**
   * 五十周年
   * @author 雞雞
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} they 彼女たち or 彼ら
   */
  async FIFTY(you, uma, they) {
    await printAndWait('人生五十年、夢のごとく幻のごとし。');
    await printAndWait(
      '桜は初々しく咲き、トレセン学園は半世紀の輝きを迎えた。',
    );
    await printAndWait(
      '半世紀はすべてを変えうる。だが、変わらないこともある。',
    );
    await printAndWait([
      'かつての',
      uma,
      'たちは伝説になった者もいれば、裏方へ退いた者もいる。だが',
      they,
      'の物語はみな、',
      you.get_colored_name(),
      'によって続いた。',
    ]);
    await printAndWait([
      'そして',
      you.get_colored_name(),
      'はいまもトレーニング場に立ち、新しい',
      uma,
      'たちの走る姿を見つめている。',
    ]);
  },
};
