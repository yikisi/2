/**
 * @file 初心者ガイド
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} new_save 新規セーブかどうか
   */
  async game_start(minoru, you, new_save) {
    await era.printAndWait([
      you.get_colored_name(),
      ' はこれから勤める学園へ足を運んだ。大門の前では、全身を翠の色合いでまとった',
      minoru.sex_code === 1 ? '引き締まった人間の男性' : '美しい人間の女性',
      'が静かに待っている。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は、最終面接の面接官のひとりだとすぐに気づいた。',
    ]);
    era.println();
    if (!new_save) {
      await minoru.say_as_unknown_and_wait('こんにちは、新……');
      era.println();

      await era.printAndWait([
        'その',
        minoru.phy_sex_title,
        'は ',
        you.get_colored_name(),
        ' と目が合った瞬間、一瞬戸惑いを浮かべたが、すぐに我に返った。',
      ]);
    } else {
      await era.printAndWait([
        'その',
        minoru.phy_sex_title,
        'は ',
        you.get_colored_name(),
        ' と目が合うなり、満面の笑みを見せた。',
      ]);
    }
    era.println();

    await minoru.say_as_unknown_and_wait([
      'こんにちは。新任のトレーナー',
      you.adult_sex_title,
      '。',
    ]);
    await minoru.say_as_unknown_and_wait('理事長秘書の駿川たづなです。');
    await minoru.say_and_wait('トレセン学園へようこそ。');
    await minoru.say_and_wait(
      'いち早くお仕事に馴染んでいただけるよう、私からご案内とお手伝いをいたします。',
    );

    if (!new_save) {
      era.println();

      await era.printAndWait([minoru.sex, 'は目を細め、続けた。']);
      era.println();

      await minoru.say_and_wait(
        'もっとも、ご経験は十分。すぐに順応していただけるでしょう。',
      );
    }
    era.drawLine();
    await minoru.say_and_wait([
      'トレーナーとして、まずは専属の',
      minoru.uma_sex_title,
      'を見つける必要があります。',
    ]);
    await minoru.say_and_wait(
      'ちょうど、トレセンにも将来を嘱望される新しい顔が何人も入ってきました。',
    );
    await minoru.say_and_wait('それでは、トレーニング場を見てみましょうか。');
  },
  /**
   * @param {CharaTalk} minoru 駿川たづな／豊穣の刻
   * @param {CharaTalk} you プレイヤー
   */
  async recruit(minoru, you) {
    await era.printAndWait([
      'トレーニング場の手前で、',
      minoru.get_colored_name(),
      ' は足を止めた。',
    ]);
    await minoru.say_and_wait(
      '中央トレセン学園では、毎年およそ二千名の生徒を受け入れます。そのほとんどが頂点を目指し、幾多の関門を越えてきたエリートです。',
    );
    await minoru.say_and_wait(
      'ですが、思うようにはいかないことも多い……激しい競争、怪我、あるいはただの不運で。',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' は小さく息をついた。',
    ]);
    await minoru.say_and_wait([
      'さまざまな事情から、オープン戦（OP）を無事に走り切れる',
      minoru.uma_sex_title,
      'は一割にも満たないのです。',
    ]);
    await era.printAndWait([
      minoru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' のほうを向き、真剣な表情を見せた。',
    ]);
    await minoru.say_and_wait([
      'トレーナーは、',
      minoru.uma_sex_title,
      'に代わってレースへ出ることはできません。',
    ]);
    await minoru.say_and_wait(
      'だからこそ、コースの外では担当を全力で支える必要があります。',
    );
    await minoru.say_and_wait([
      '心身の手入れも、競走のトレーニングも。夢へ向かう',
      minoru.couple_title,
      'には、『トレーナー』と呼ばれる大人の導きと助けが要るのです。',
    ]);
    await minoru.say_and_wait(
      'どうか、これから背負う責任をはっきりと自覚してください。',
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' は蝶ネクタイを整え直し、覚悟を示した。',
    ]);
    await minoru.say_and_wait('よろしい。');
    await era.printAndWait([
      minoru.get_colored_name(),
      ' は頷き、',
      you.get_colored_name(),
      ' を連れてトレーニング場の生徒たちのもとへ歩いていった。',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {boolean} has_recruit
   */
  async recruit_end(minoru, you, has_recruit) {
    era.drawLine();
    if (has_recruit) {
      await era.printAndWait([
        '募集を無事に終え、',
        you.get_colored_name(),
        ' は新しい相棒と並んで ',
        minoru.get_colored_name(),
        ' の前へ戻った。',
      ]);
      await minoru.say_and_wait([
        'トレーナー',
        you.adult_sex_title,
        'は担当を見つけられたのですね。それでは……',
      ]);
      await era.printAndWait([minoru.get_colored_name(), ' は軽く一礼した。']);
      await minoru.say_and_wait(
        '駿川、トレーナーさんと担当の三年間が武運長久でありますよう、心よりお祈りいたします。',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' はふさわしい担当を見つけられず、ひとりで ',
        minoru.get_colored_name(),
        ' のもとへ戻った。',
      ]);
      await minoru.say_and_wait([
        'トレーナー',
        you.adult_sex_title,
        '、よい相棒は見つかりましたか？',
      ]);
      era.printButton('「いい担当は、もうほかの人に取られてしまったよ」', 1);
      era.printButton('「面目ない。誰も僕に興味がなかったみたいだ」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' はわざと両手を広げ、困りきった顔を作ってみせた。',
        ]);
        await era.printAndWait(
          '言葉の何割が本音で、何割が建前か。いまはそれほど大事ではない。',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は決まり悪そうに両手を広げ、困りきった顔を見せた。',
        ]);
      }
      era.println();

      await minoru.say_and_wait('そうですか……');
      await minoru.say_and_wait(
        'では、しばらくしてからまた様子を見てみましょう。担当にふさわしい生徒と出会えるかもしれません。',
      );
      await minoru.say_and_wait(
        'すでに目当てがいるなら、理事長にお願いしてみるのも一つの手です。',
      );
      await era.printAndWait('ふたりはトレーニング場を離れた。');
    }
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_train(minoru, you) {
    await minoru.say_and_wait(
      '相棒を募集したあとは、トレーニング場へ連れていき指導できます。',
    );
    await minoru.say_and_wait(
      'トレーニングは大きく五つ。スピード、スタミナ、パワー、根性、賢さです。',
    );
    await minoru.say_and_wait(
      '担当の基礎能力は主にトレーニングで伸びますが、それ以外の道もないわけではありません。',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' は手を叩き、',
      you.get_colored_name(),
      ' に気を引き締めさせた。',
    ]);
    await minoru.say_and_wait(
      '……トレーニングは体力と気力を消費します。疲れているのに無理をさせると、担当が怪我をする恐れがあります。',
    );
    await minoru.say_and_wait('……そこだけは、どうかお気をつけください。');
    await era.printAndWait([
      'そこまで言った ',
      minoru.get_colored_name(),
      ' の声には、ほんの一瞬、苦い色が混じった。だがすぐに落ち着きを取り戻し、少し無理をした微笑を浮かべる。',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_register(minoru, you) {
    await minoru.say_and_wait(
      'こちらが直近のレース情報をまとめた表です。ご確認ください。',
    );
    await minoru.say_and_wait(
      '担当を出走登録したいときは、該当のレースを選ぶだけで構いません。',
    );
    await minoru.say_and_wait(
      'レースごとに距離も馬場も違います。相棒の適性に合わせて選んでください。',
    );
    await minoru.say_and_wait(
      '出走も体力と気力を消費し、終わったあとしばらく疲労が残ります。',
    );
    await minoru.say_and_wait(
      '……担当の体調を顧みず、無理な連戦を強いる悪質なトレーナーがいたこともあります……',
    );
    await minoru.say_and_wait([
      'それでは勝てないばかりか、担当を傷つけてしまいます。トレーナー',
      you.adult_sex_title,
      'は、どうかそういうやり方は取らないでください。',
    ]);
    await minoru.say_and_wait(
      'なお、出走前に怪我や日程の衝突といった急な事情が起きたなら、避戦という選択もあります。',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_trainer_office(minoru, you) {
    await era.printAndWait([
      minoru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' をある執務室へ案内した。中を覗けば、同じ業の者たちばかりだ。',
    ]);
    era.println();
    await minoru.say_and_wait(
      'ここが普段のお仕事場です。ほかのトレーナーもよく顔を出します。',
    );
    await minoru.say_and_wait(
      '同僚の皆さんとも、どうぞよい関係を築いてくださいね。',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {PrintedSpan} call_305
   */
  async school_clinic(minoru, call_305) {
    await minoru.say_and_wait([
      'こちらは本校の保健室です。校医の ',
      call_305,
      ' が……出没します。ええ、出没、です。',
    ]);
    era.println();
    await era.printAndWait([
      minoru.sex,
      'は困ったように頬を掻いた。もしかして ',
      call_305,
      ' は問題人物なのだろうか。',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_god(minoru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      minoru.get_colored_name(),
      ' は、三柱のウマ娘女神を刻んだ噴水の前に立った。女神像が肩に担いだ壺から、水がさらさらと流れ落ちている。',
    ]);
    era.println();

    await minoru.say_and_wait(
      '研修のとき、この三女神像はもうご覧になったはずです。',
    );
    await minoru.say_and_wait(
      '時代が進むにつれ、信仰は少しずつ薄れていきましたが。',
    );
    await minoru.say_and_wait('私たちにとっては、本当にいらっしゃるお方です……');
    await minoru.say_and_wait('……三女神は……本当でなくてはなりません。');
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' は小さく呟いた。だが突然の突風が、',
      minoru.sex,
      'の言葉を空へ散らしてしまった。',
    ]);
    era.println();

    await minoru.say_and_wait(
      'とにかく、悩みごとがあれば、ここで祈ってみるのもよいでしょう。',
    );
    await minoru.say_and_wait(
      '毎年三月にここで祈ると、特別なご利益があるとも言われています。',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_atrium(minoru, you) {
    await minoru.say_and_wait(
      'こちらは中庭です。休み時間には、多くの先生や生徒がここでくつろぎます。',
    );
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' が中庭の一角を指すと、',
      you.get_colored_name(),
      ' の視線の先に、抱きかかえられぬほど太い、人の腰ほどの枯れ木の洞が見えた。',
    ]);
    era.println();

    await minoru.say_and_wait(
      '落ち込む人は、わざわざこの洞に向かって大声を上げ、気を晴らすこともあるんです。',
    );
    await minoru.say_and_wait([
      'ですから、トレーナー',
      you.adult_sex_title,
      'が近くを通ったときに何か声が聞こえても、驚かないでくださいね。',
    ]);
  },
  /** @param {CharaTalk} minoru */
  async school_rooftop(minoru) {
    await minoru.say_and_wait(
      '映像作品では、生徒が屋上へ上がってお弁当を食べたり、内緒話をしたりする場面がよくありますよね。',
    );
    await minoru.say_and_wait(
      'ですが実際は、この『名所』があまりに人気で、トレセンの屋上ではとてもひとりになれません。ふふ。',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {PrintedSpan} chairman
   */
  async school_chairman(minoru, you, chairman) {
    await minoru.say_and_wait([
      'こちらは本校理事長の執務室です。用事があれば、たいていここで ',
      chairman,
      ' にお会いできます。',
    ]);
    await minoru.say_and_wait([
      '理事長とよい関係を築けば、トレーナー',
      you.adult_sex_title,
      'の昇進にも少なからず助けになるかもしれませんよ。',
    ]);
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' にウィンクした。',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_visitors(minoru, you) {
    await minoru.say_and_wait(
      '学外の方が訪れたときは、校側がこれらの部屋で面会を手配します。',
    );
    await minoru.say_and_wait([
      'これから先、トレーナー',
      you.adult_sex_title,
      'を取材しに来る記者も少なくないでしょうね。',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async out(minoru, you) {
    await minoru.say_and_wait([
      'トレセンの正門から出れば、小川沿いの散歩道、商店街、神社、駅前などへ行けます。詳しくは……トレーナー',
      you.adult_sex_title,
      'ご自身で探してみてください。',
    ]);
    await minoru.say_and_wait(
      '学園の用がないときは、だいたい正門のそばにいます。何かあれば、こちらまでどうぞ。',
    );
    await minoru.say_and_wait(
      '……ただし、担当と一緒に外出しているときは、お呼びにならないでくださいね。',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' に手を振り、正門のそばへ歩いていった。',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_sex(minoru, you) {
    await minoru.say_and_wait('あら……そんなご要望、されるのですね……');
    await era.printAndWait([
      minoru.get_colored_name(),
      ' の視線は刃のように、熱を帯びた ',
      you.get_colored_name(),
      ' の顔へ突き刺さった……',
    ]);
  },
};
