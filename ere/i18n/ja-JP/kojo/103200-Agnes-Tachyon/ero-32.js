/**
 * @file アグネスタキオン - 調教
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async kiss(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, ' の柔らかな唇が、自分の唇に重なる。']);
    await tachyon.say_and_wait('んちゅ……ちゅぱ……ちゅ……');
    await you.print_and_wait(
      'はじめは軽い啄みだった接触が、やがて舌を絡め合うものへ変わっていく……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async lure_by_tachyon(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, ' が、艶のある眼差しでこちらを誘う。']);
    if (tachyon.sex_code > 0 && era.get('tcvar:32:发情') > 0) {
      await you.print_and_wait(
        '開いた唇も、下の口も、汁を滴らせて満たされるのを待っている……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_success 誘惑が成功したか
   */
  async lure(tachyon, you, callname, y_call_t, is_success) {
    await you.print_and_wait(['手を伸ばし、', y_call_t, ' の尻を撫でる……']);
    if (is_success || era.get('tcvar:32:发情') > 0) {
      era.println();
      await tachyon.say_and_wait(['ん……', callname, '❤️']);
      era.println();
      await you.print_and_wait([
        '撫でられやすいように、',
        y_call_t,
        ' は自ら尻を突き出した。',
      ]);
      await you.print_and_wait('掌いっぱいに、臀の感触が伝わる……');
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async pet_breast(tachyon, you) {
    await tachyon.say_and_wait('そんなに胸がお好きですの……❤️');
    era.println();
    await you.print_and_wait(
      '眼前で熟れた果実が、両手の動きに合わせて揺れ続ける。',
    );
    await you.print_and_wait('柔らかな乳が、器用な指の下で形を変えていく。');
    era.println();
    await tachyon.say_and_wait('あっ……頭を、そんなふうに……');
    era.println();
    await you.print_and_wait('胸の谷間に顔を埋め、深く息を吸う。');
    await you.print_and_wait(
      '少女の香りと、ウマ娘の発情した匂いが混ざり合う……',
    );
    await you.print_and_wait('もう熟しきった果実だ。味わい始めていい。');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async finger_fuck(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait(
        '指を入れた瞬間、愛液は出口を見つけたように、穴の縁からとろとろ溢れ出した。',
      );
      era.println();
      await you.say_and_wait([y_call_t, '、ずいぶんいやらしいな。']);
      await you.say_and_wait('ここ、こんなに濡れてる。');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……そういうこと、言わなくてもよろしいでしょう……',
      ]);
    } else {
      await tachyon.say_and_wait('ん……❤️');
      era.println();
      await you.print_and_wait(
        '指は湿地に沈むようで、潤んだ土が開発を待っている。',
      );
      era.println();
      await tachyon.say_and_wait(['早く……いらっしゃいな、', callname, '❤️']);
      era.println();
      await you.print_and_wait('透き通った愛液が、秘裂から絶えず落ちる。');
      await you.print_and_wait([
        '尻も揺らし続け、',
        you.get_colored_name(),
        ' に手を出させようとしている。',
      ]);
      await you.print_and_wait('交尾の準備は、もうすっかり整っているらしい。');
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async prepare_virgin(tachyon, you, callname, y_call_t) {
    if (era.get('mark:32:同心') <= 1) {
      await tachyon.say_and_wait('……ひどいですわ……');
      era.println();
      await you.print_and_wait([
        '顔を赤くしてはいるが、拒まない以上、',
        y_call_t,
        ' の本音は見えている。',
      ]);
      await you.print_and_wait('だが、これだけでは物足りない……');
      await you.print_and_wait('ねだる言葉、聞かせてもらおうか？');
      era.println();
      await tachyon.say_and_wait('趣味が悪すぎますわ……');
      await tachyon.say_and_wait([
        'どうぞ……',
        callname,
        ' 専用の淫らな穴が、',
        callname,
        ' にお仕えできるように……',
      ]);
      await tachyon.say_and_wait(
        '思う存分、いじめてくださいまし……このいやらしい穴を❤️',
      );
      era.println();
      await you.print_and_wait('自分から言わせた言葉なのに……');
      await you.print_and_wait([
        y_call_t,
        ' の様子を見るに、その淫語で自分も昂ぶっているらしい……',
      ]);
    } else {
      await tachyon.say_and_wait([callname, '❤️']);
      era.println();
      await you.print_and_wait(
        '今も滴り続ける汁が、べっとりと張りついている。',
      );
      await you.print_and_wait([y_call_t, ' は、下の柔らかい口を開いた。']);
      await you.print_and_wait(
        '待ち焦がれたものが入ってくるのを、待っている……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async pet_anal(tachyon, you, callname, y_call_t) {
    await you.print_and_wait([
      y_call_t,
      ' の発情した穴の汁を潤滑に塗り、手を ',
      y_call_t,
      ' の尻穴の前へ当てる。',
    ]);
    if (era.get('abl:32:肛门耐性') >= 3) {
      await you.print_and_wait(
        '本来は出口であるはずの場所が、押されるだけで自然と微かに開く。',
      );
      await you.print_and_wait(
        '尻も、押すリズムに合わせて無意識に揺れ始めた。',
      );
      era.println();
      await tachyon.say_and_wait([callname, '❤️そこは、だめですわ❤️']);
      era.println();
      await you.print_and_wait(
        '拒む言葉なのに、声が伝えているのは続きへの誘いだ。',
      );
      await you.print_and_wait(
        'だが、それ以上はせず、焦らすようにそっと押し続ける……',
      );
    } else {
      era.println();
      await tachyon.say_and_wait('待ちなさい！ そこは！');
      era.println();
      await you.print_and_wait([
        '聞こえないふりをして、指先で ',
        y_call_t,
        ' の尻穴を軽く押す。',
      ]);
      await you.print_and_wait('閉じた入口が、慣れぬままに震えている。');
      await you.print_and_wait(
        'だが、この未熟さこそ、調教する甲斐があるというものだろう？',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async prepare_anal(tachyon, you, callname, y_call_t) {
    if (era.get('abl:32:肛门耐性') >= 3) {
      await tachyon.say_and_wait(
        '早く……この下品に疼く淫らな尻穴を、罰してくださいまし❤️',
      );
      era.println();
      await you.print_and_wait([
        '菊座を懸命に拡げる ',
        y_call_t,
        ' が、欲しがる言葉を吐き、肉棒の挿入をせき立てる。',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ' に開発された……',
        callname,
        ' の好みでどう使ってもいい尻穴……早く、入れてくださいまし❤️',
      ]);
      await tachyon.say_and_wait([callname, ' の太い肉棒で、強く……突いて❤️']);
      await tachyon.say_and_wait([
        '尻穴だけで何度もいける、淫乱な',
        tachyon.uma_sex_title,
        'に……してくださいまし❤️',
      ]);
      era.println();
      await you.print_and_wait([
        '余裕を持って、',
        y_call_t,
        ' が狂ったようにねだる姿を眺める。震える菊座の皺に息を吹きかけ、',
        y_call_t,
        ' が全身を震わせる反応を見る。',
      ]);
      await you.print_and_wait([
        'いつも強気な ',
        y_call_t,
        ' がこうしてねだるのは、めったに見られない。',
      ]);
      await you.print_and_wait(
        'しかも、楽しむためだけに、生殖の意味などない行為をねだっているのだ。',
      );
      await you.print_and_wait([
        'ただし、',
        y_call_t,
        ' を本気で怒らせないよう注意は要る……が、もう少しだけ、味わっておこう……',
      ]);
    } else {
      await tachyon.say_and_wait([
        '……本当に、そうなさるおつもりですの、',
        callname,
        '……',
      ]);
      await tachyon.say_and_wait(
        'こんなところ……入るわけがありませんわ……絶対に……',
      );
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' は言われた通り臀を押さえ、尻穴を完全に開いている。',
      ]);
      await you.print_and_wait('だが顔には、まだ恐れが残っている。');
      await you.print_and_wait(
        '排泄口を性器として使うと言われて、恐れない者などいないだろう。',
      );
      await you.print_and_wait('だが……');
      era.println();
      await you.print_and_wait('気持ちよくなる。安心していい。');
      await you.print_and_wait([y_call_t, ' の尻を軽く叩き、保証する。']);
      await you.print_and_wait(
        '菊座の皺が一度震え、言葉に応えたかのようだった。',
      );
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async ask_blow_job(tachyon) {
    await tachyon.say_and_wait('まったく……仕方ありませんわね……');
    await tachyon.say_and_wait(
      'いらっしゃい……私の口に、あなたの印を残すつもりで……',
    );
    await tachyon.say_and_wait(
      '存分に、食道も胃も、あなたの因子で満たしてくださいまし❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async ask_deep_blow_job(tachyon, you, callname) {
    await tachyon.print_and_wait([
      '自分が認めた ',
      you.phy_sex_title,
      ' が、自分を狂わせる匂いを放っている。',
    ]);
    await tachyon.print_and_wait('そして、自分を狂わせる頼みを口にした。');
    era.println();
    await tachyon.say_and_wait('ん……あっ❤️');
    era.println();
    await tachyon.print_and_wait(
      '「私にしか、こんなに気持ちよくさせられない」——その観念を相手の頭に焼き付けるように……',
    );
    await tachyon.print_and_wait(
      '時おり唾を含み、淫らな水音を立てて、懸命に吸う。',
    );
    await tachyon.print_and_wait(
      '時おり喉の奥まで呑み込み、雄の匂いの濃い毛が鼻腔をくすぐる感触を味わい、生死を握られた感覚に酔う。',
    );
    await tachyon.print_and_wait([
      callname,
      ' への渇望と、これほど下賤なことをしたい衝動——それ以外、賢い頭にはもう何も入らない……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async force_blow_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait([
      'どうしましたの？ ',
      callname,
      '、入ってこないんですの？',
    ]);
    await tachyon.say_and_wait('まさか、短すぎて笑われるのが怖い、ですの？');
    await tachyon.say_and_wait(
      '大丈夫ですわ、個体差の問題なら私も理……うっ……んぷ……ぷちゅ……',
    );
    era.println();
    await you.print_and_wait([y_call_t, ' の挑発に、堪えきれなかった。']);
    await you.print_and_wait(['うるさい口穴を狙い、無理に肉棒を押し込む。']);
    await you.print_and_wait('潤んで滑らかな口腔を、乱暴に前後へ突く。');
    await you.print_and_wait('この口……話すには惜しい……');
    await you.print_and_wait('肉穴としての価値のほうが、よほど高い。');
    if (
      era.get('talent:32:喜欢责骂') > 0 ||
      era.get('talent:32:喜欢痛苦') > 0
    ) {
      era.println();
      await you.print_and_wait('ん？');
      await you.print_and_wait('気づくと、好きに口穴を突いている感触以外に——');
      await you.print_and_wait([
        y_call_t,
        ' の口も動きに合わせ、自ら吸って快感を返してきていた。',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'もっと……もっと、犯してくださいまし……この下賤な口穴を……',
        true,
      );
      era.println();
      await you.print_and_wait([y_call_t, ' は、恍惚とした顔をしている……']);
    }
  },
  /**
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async force_deep_blow_job(you, y_call_t) {
    await you.print_and_wait([
      '強引な行為なのに、',
      y_call_t,
      ' も自ら合わせて吸ってくる。',
    ]);
    await you.print_and_wait('舌で肉棒を絡め、喉の奥へ導く。');
    await you.print_and_wait('恍惚の表情が、虐げたい欲を何度も煽る……');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async blow_job(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait('肉棒が、ぷるん、と跳ねた。');
      await you.print_and_wait([
        '馬眼から滲む精の匂いが、',
        y_call_t,
        ' の鼻を刺激する。',
      ]);
      era.println();
      await tachyon.say_and_wait('ふふ、跳ねましたわね');
      await tachyon.say_and_wait([
        callname,
        '……そんなに、私の口穴が楽しみですの？',
      ]);
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' は ',
        you.get_colored_name(),
        ' の顔を仰ぎ、艶のある表情で言う。',
      ]);
      await you.print_and_wait(
        'ブラインドのような狂った両眼が、今は色気を帯びて誘惑している。',
      );
    } else if (
      Array.isArray(era.get('tcvar:0:接近高潮')) &&
      era.get('tcvar:0:接近高潮').includes(part_enum.penis)
    ) {
      await you.print_and_wait('舌の感触で、腰を速めたのが伝わってくる。');
      await you.print_and_wait([
        y_call_t,
        ' も速度を上げ、顔で肉竿を繰り返し呑み、肉棒に押し上げられた頬が亀頭の先へさらに快感を与える。',
      ]);
      await you.print_and_wait('突きと吸いの二重の快感で、極楽へ沈んでいく……');
      era.println();
      await tachyon.say_and_wait('ん……んちゅ……んぽ……');
      await tachyon.say_and_wait([callname, ' の……全部……']);
    } else {
      await you.print_and_wait(
        '小さな口穴の中で、潤んだ滑らかな舌が亀頭の上を巡り、一点に快感を集める。',
      );
      await you.print_and_wait([
        '腰を動かし続け、肉棒がより深く ',
        y_call_t,
        ' の至上の快感を味わえるようにする。',
      ]);
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async ask_hand_job(tachyon) {
    await tachyon.say_and_wait('まったく……');
    await tachyon.say_and_wait('どうせ、顔に出すおつもりでしょう❤️');
    await tachyon.say_and_wait(
      'いいですわ……私の顔を、モルモット君の臭い精液で覆って……',
    );
    await tachyon.say_and_wait('濃い匂いですわ❤️');
    await tachyon.say_and_wait('存分に、私にかけてくださいまし❤️');
    if (era.get('tcvar:32:喜欢责骂') || era.get('tcvar:32:喜欢痛苦')) {
      await tachyon.say_and_wait(
        '雑巾のように、好きに拭き取っても構いませんわ❤️',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async ask_tit_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait(
      'わかりませんわ、こんな脂肪の塊の何がいいのか……',
    );
    await tachyon.say_and_wait('いいですわ、いらっしゃい❤️');
    era.println();
    await you.print_and_wait([
      '乳に包まれた肉棒が、',
      y_call_t,
      ' が乳を揉む摩擦で、さらに硬くなっていく。',
    ]);
    await you.print_and_wait('だが、これだけでは……足りない……');
    era.println();
    await you.print_and_wait([
      '両手で ',
      y_call_t,
      ' の乳房を掴み、押し合うように乳で肉茎を挟む。',
    ]);
    await you.print_and_wait([
      '眼前の担当',
      tachyon.uma_sex_title,
      'を、性処理の道具として使いきっている……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_tit(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait('あっ、待ち……');
      era.println();
      await you.say_and_wait([
        y_call_t,
        ' の訴えなど聞かず、',
        y_call_t,
        ' の張りのある乳へ激しく突き始めた。',
      ]);
      await you.print_and_wait([
        'その間 ',
        y_call_t,
        ' は、自分の性欲の吐き出し口と化したように、素直に従っている。',
      ]);
      await you.print_and_wait([
        '担当の',
        tachyon.uma_sex_title,
        'を道具として使う感触に、興奮して体が震える……',
      ]);
    } else {
      await tachyon.say_and_wait('んぅ……❤️');
      era.println();
      await you.print_and_wait(
        'まず乳房を丸ごと持ち上げて擦り潰し、ぷよっ、と元の位置へ戻す。',
      );
      await you.print_and_wait(
        'それから容赦なく、ほとんど暴力に近いピストン……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_you_erect プレイヤーが勃起しているか
   */
  async tit_job(tachyon, you, callname, y_call_t, is_you_erect) {
    if (is_you_erect) {
      await you.print_and_wait([
        y_call_t,
        ' の乳で、痛いくらい硬い肉棒を包む。',
      ]);
    }
    await you.print_and_wait([y_call_t, ' は両手で自分の双乳を支える。']);
    await you.print_and_wait('乳穴が大きく肉棒の竿を包み、揉みほぐす。');
    await you.print_and_wait('溢れた先走りが、乳穴の動きを滑らかにする。');
    era.println();
    await tachyon.say_and_wait([callname, '……気持ちよいですの？❤️']);
    era.println();
    await you.print_and_wait('答える必要があるだろうか？');
    await you.print_and_wait('これ以上気持ちいいことなど、あるだろうか？');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async tit_and_blow_job(tachyon, callname) {
    await tachyon.print_and_wait([
      callname,
      ' が少し上へ突き出すと、頭だけ出ていた肉棒の先が、自分の首に当たる。',
    ]);
    await tachyon.print_and_wait(
      '鈴口から落ちる先走りが、肉棒の突きで顎から首へ塗り広げられ、胸の乳穴へ滑り落ち、潤滑を足す。',
    );
    await tachyon.print_and_wait(
      '肉棒と乳房の淫らな擦れ音に、乳を打つ音が混ざる。',
    );
    await tachyon.print_and_wait('室内の精の匂いも、次第に濃くなっていく。');
    era.println();
    await tachyon.say_and_wait('ちゅ……ちゅちゅ……');
    era.println();
    await tachyon.print_and_wait('口が乾く……舌が渇く……');
    await tachyon.print_and_wait(
      'こんなに汁があるのに、流してしまっては……もったいない……',
    );
    await tachyon.print_and_wait('だから、口づけて含むのは当然ですわ……');
    await tachyon.print_and_wait(
      '亀頭が唾で濡れるにつれ、乳房の動きもさらに滑らかになる……',
    );
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async ask_non_penetrative(tachyon) {
    await tachyon.say_and_wait('ふふ、猿のようですわ……');
    await tachyon.say_and_wait(
      'いいえ、こうして腰ばかり振るのは……子犬のほうが近いですわね❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_lubrication アグネスタキオンの膣が潤滑しているか
   */
  async self_finger_fuck(tachyon, you, callname, y_call_t, is_lubrication) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait(['見てくださいまし……', callname, '……']);
      await tachyon.say_and_wait('私の穴、どう見えますの❤️');
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' の器用な指が自分の穴を弄り、快感を与えている。',
      ]);
      await you.print_and_wait(
        '両脚を左右に開き、誘うように指が穴の奥へ、奥へと進む。',
      );
      await you.print_and_wait([
        tachyon.sex,
        'の指先が光の下で輝き、穴から淫らな糸を引く。',
      ]);
      if (is_lubrication) {
        era.println();
        await tachyon.say_and_wait(
          'もう準備はできていますわ……入ってこないんですの❤️',
        );
        era.println();
        await you.print_and_wait(
          '愛液に浸された下は、いつでも交われる状態になっている……',
        );
      }
    } else {
      await tachyon.say_and_wait([callname, '……❤️']);
      await tachyon.say_and_wait('早く……入れてくださいまし❤️');
      era.println();
      await you.print_and_wait([y_call_t, ' は自ら臀を拡げた。']);
      await you.print_and_wait(
        '濡れきった穴と、微かに開閉する尻穴が、眼前の雌から服従に近い姿勢で差し出される。',
      );
      if (is_lubrication) {
        era.println();
        await you.print_and_wait('ぐぽ……');
        await you.print_and_wait(
          '穴が濡れた音を立て、二本の指に何度も拡げられ、閉じる。',
        );
        await you.print_and_wait(
          '色情じみた汁が、開かれた穴肉からゆっくり流れ出す……',
        );
      }
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async missionary(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(['わあ、', callname, '、待ち……❤️']);
      era.println();
      await you.print_and_wait(['堪えきれず、', y_call_t, ' を地へ押し倒す。']);
      await you.print_and_wait([
        tachyon.sex,
        'の尻と太腿が、挿入とともに痙攣し続ける……',
      ]);
    } else {
      await you.print_and_wait(
        '入れる前から過敏だった穴は、襲われてから小さな絶頂を何度も繰り返している。',
      );
      await you.print_and_wait([
        '突くたびに ',
        y_call_t,
        ' は制御できず震えながらも、肉棒を離さず締め続ける……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async doggy_style(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(
        'この体勢ですと、雄をいちばん完全に受けられる体位ですわ。',
      );
      await tachyon.say_and_wait('人体工学の観点から申しますと……うっ！');
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' が喋り続ける隙に、タイミングを見て',
        tachyon.sex,
        'の晒した蜜穴へ挿入する。',
      ]);
      era.println();
      await you.say_and_wait('続きは？');
      await you.print_and_wait(['わざと ', y_call_t, ' に聞く。']);
      await you.print_and_wait([
        y_call_t,
        ' は顔を赤らめ、完全に満たされた喜悦に沈んでいる。',
      ]);
    } else {
      await tachyon.say_and_wait('深いですわ❤️ 一気に、いっぱいに……❤️');
      era.println();
      await tachyon.print_and_wait(
        '肉棒が穴口へ強く沈み、とうに城門を失った自分の蜜穴を貫く。',
      );
      await tachyon.print_and_wait('狭い雌穴が喜んで収縮し、肉棒に吸い付く……');
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async hug_standing(tachyon) {
    await tachyon.say_and_wait('好きですわ❤️');
    await tachyon.say_and_wait('実験動物のように、ただ交わる快楽❤️');
    await tachyon.say_and_wait(
      '早く、早く、獣のように、私の性処理のいやらしい穴を満たしてくださいまし❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async stimulate_g_spot(tachyon, callname) {
    await tachyon.say_and_wait('あっ❤️');
    await tachyon.say_and_wait(
      'だめですわ❤️頭が壊れます❤️気持ちよいですわ❤️いく❤️いくわ❤️脳みそごと出してしまいますわ❤️',
    );
    era.println();
    await tachyon.print_and_wait(
      '深く突いてGスポットに当たるたび、頭が真っ白になる。',
    );
    await tachyon.print_and_wait([
      '考えられるもの、感じられるものは、',
      callname,
      ' との交尾と、',
      callname,
      ' に強く犯される快感だけ……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async ask_stimulate_glans_by_virgin(tachyon, you) {
    await tachyon.say_and_wait('ひどいですわ……');
    era.println();
    await you.print_and_wait(
      'ひどいと叫びながらも、正直な蜜穴はちゅ、とさらに締まり、非協力運動中の肉棒さんへ全方位の奉仕を味わわせようとする……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async hit_anal(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
        await you.print_and_wait([
          y_call_t,
          ' の尻を強く叩き、快い残響が響く。',
        ]);
        await you.print_and_wait('白い二つの臀に、薄い掌の跡が残る。');
        era.println();
        await tachyon.say_and_wait(['痛っ！？……', callname, '……？']);
        era.println();
        await you.print_and_wait([
          y_call_t,
          ' は哀れに嗚咽したが、それでも尻を高く上げ、反抗する気配はない。',
        ]);
      } else if (era.get('talent:32:喜欢痛苦') > 0) {
        await you.print_and_wait('まったく、いやらしい……');
        await you.print_and_wait([
          y_call_t,
          ' の尻を強く叩き、快い残響が響く。',
        ]);
        await you.print_and_wait('片方の臀に、薄い掌の跡が残る。');
        era.println();
        await tachyon.say_and_wait('強く……もっと、強くしてくださいまし……❤️');
        era.println();
        await you.print_and_wait([y_call_t, ' が淫らな嬌声を上げる。']);
        await you.print_and_wait(
          '赤らんだ尻が小さく捻られ、左右に揺れ、さらなる蹂躙を待っている。',
        );
        await you.print_and_wait('堪えきれず手で揉み、それから——');
        era.println();
        await you.print_and_wait('ぱん！');
        era.println();
        await tachyon.say_and_wait('あっ～～❤️');
        era.println();
        await you.print_and_wait('汁気のある臀の波が立ち、嬌声が続く。');
        await you.print_and_wait('今や両方の尻が、水蜜桃のように瑞々しい。');
      } else {
        await you.print_and_wait([
          y_call_t,
          ' の尻を強く叩き、快い残響が響く。',
        ]);
        await you.print_and_wait('白い二つの臀に、薄い掌の跡が残る。');
        era.println();
        await tachyon.say_and_wait(['痛っ！？……', callname, '……？']);
        era.println();
        await you.print_and_wait([y_call_t, ' は思わず痛みに声を上げた。']);
        await you.print_and_wait(
          '少し不憫ではあるが、あの突き出した尻……叩かずにいれば、かえって無駄というものだろう？',
        );
      }
    } else {
      await you.print_and_wait(
        'タキオンの雪のように白い、張りのある尻を叩き続け、快い残響が響く。',
      );
      await you.print_and_wait('今は真っ赤な掌の跡だらけだ。');
      await you.print_and_wait([
        '叩くたび、',
        y_call_t,
        ' の脚の間の裂け目から愛液が噴き、いつの間にか自分の両手まで濡らしている……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async hit_face(tachyon, you, callname, y_call_t) {
    await you.print_and_wait([y_call_t, ' の頬を、ひとつ叩く。']);
    if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
      await you.print_and_wait([
        y_call_t,
        ' の頬は紅潮し、服従の眼差しで低くこちらを見上げる。',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……いいえ、ご主人様がまだお打ちになりたいなら……',
      ]);
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' は両手で',
        you.get_colored_name(),
        'の手を包み、',
        tachyon.sex,
        'のもう一方の頬へ当てる……',
      ]);
    } else if (era.get('talent:32:喜欢痛苦') > 0) {
      await you.print_and_wait([
        y_call_t,
        ' の頬は紅潮し、両手で ',
        you.get_colored_name(),
        ' の手を包み、指を軽く舐めて服従を献げる。',
      ]);
      era.println();
      await tachyon.say_and_wait('ご主人様……この雌豚にもっとご褒美を……❤️');
      era.println();
      await you.print_and_wait(['また', tachyon.sex, 'の頬をひとつ叩く。']);
      await you.print_and_wait([
        '桃色の掌の跡が、瞬時に',
        tachyon.sex,
        'の顔へ咲く。',
      ]);
    } else {
      await you.print_and_wait('信じられない、という目で見つめられる。');
      era.println();
      await tachyon.say_and_wait([callname, '……どうして……']);
      era.println();
      await you.print_and_wait(['赤くなり始めた頬を押さえる ', y_call_t, '。']);
      await you.print_and_wait([
        '申し訳ないが……',
        tachyon.sex,
        'の、こうもいとおしい表情を見ると、興奮せずにいられない……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async use_love_eggs_in_anal(tachyon, you, y_call_t) {
    await tachyon.say_and_wait('おおっ❤️尻穴が❤️だめですわ❤️');
    era.println();
    await you.print_and_wait([
      'ローターを入れた瞬間、腸内の振動で ',
      y_call_t,
      ' は思わず頭を反らした。',
    ]);
    era.println();
    await tachyon.say_and_wait('だめですわ❤️体が❤️おかしくなりますわ❤️');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async ask_fuck(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait([callname, '……早く、早く❤️']);
    await tachyon.say_and_wait('強く……私の雌穴を満たしてくださいまし❤️');
    era.println();
    await you.print_and_wait([y_call_t, ' は尻を上げ、腰を揺らし続ける。']);
    await you.print_and_wait('豊かな尻が淫らに踊り、情欲を煽る……');
  },
  betrayed1: (() => {
    /**
     * 仕組み上はマンハッタンカフェの調教終了イベント
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, callname_25) => {
      await tachyon.say_and_wait(['はあっ……はあっ……']);
      era.println();

      await tachyon.print_and_wait(['手足が、熱い。']);
      await tachyon.print_and_wait(['頭が、熱い。']);
      era.println();

      await tachyon.say_and_wait(['すぅ……はあっ……はあっ……']);
      era.println();

      await tachyon.print_and_wait(['胸が熱い。']);
      await tachyon.print_and_wait(['秘部が灼ける。']);
      era.println();

      await tachyon.say_and_wait([callname, '……', callname, '……']);
      era.println();

      await tachyon.print_and_wait(['喉が、熱い。']);
      await tachyon.print_and_wait(['舌先が、熱い。']);
      await tachyon.print_and_wait(['だから、抑えきれず呼んでしまう。']);
      await tachyon.print_and_wait(['自分を、全身を熱くする源を。']);
      era.println();

      await tachyon.say_and_wait([callname, '……くださいまし……お願い……']);
      era.println();

      await tachyon.print_and_wait([
        '朦朧とするなか、',
        you.sex,
        'の姿が眼前に現れる。',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        'の手、',
        you.sex,
        'の眼、',
        you.sex,
        'の口、',
        you.sex,
        'の肌。',
      ]);
      await tachyon.print_and_wait([you.sex, 'のすべてが、自分を魅了する。']);
      await tachyon.print_and_wait([
        'だから、',
        you.sex,
        'が欲しい、',
        you.sex,
        'が欲しい。',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        'に弄ばれたい、',
        you.sex,
        'に壊されたい。',
      ]);
      await tachyon.print_and_wait(['どうせ……もう走れない体ですもの。']);
      await tachyon.print_and_wait([
        'すべてを捨て、色に溺れたところで、何の問題がありましょう。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '……撫でて……抱いて……キスして……愛して……',
      ]);
      era.println();

      await tachyon.print_and_wait(['ああ、侵略的な愛撫。']);
      await tachyon.print_and_wait([
        'だが実際に動いているのは、自分の細く弱い指だ。',
      ]);
      await tachyon.print_and_wait([
        '今、自分を撫でているのが、',
        you.sex,
        'の指なら。',
      ]);
      await tachyon.print_and_wait([
        'もし、',
        you.sex,
        'の舌で自分を舐められたなら。',
      ]);
      await tachyon.print_and_wait([
        'もし、',
        you.sex,
        'の口づけで慰められたなら。',
      ]);
      await tachyon.print_and_wait([
        'もし、内も外も',
        you.sex,
        'に満たされ、',
        you.sex,
        'に愛されたなら。',
      ]);
      era.println();

      await tachyon.print_and_wait(['幻覚の', you.sex, 'が、体を寄せてくる。']);
      era.println();

      await tachyon.print_and_wait(['ええ。']);
      await tachyon.print_and_wait(['ください、早くください。']);
      await tachyon.print_and_wait(['もう走る価値のない私。']);
      await tachyon.print_and_wait([
        '残っているのは、女としての価値だけでしょう。',
      ]);
      await tachyon.print_and_wait(['私を満たして。']);
      await tachyon.print_and_wait(['私を注ぎ込んで。']);
      await tachyon.print_and_wait([
        '心の空虚を、あなたの愛で、溢れかえるまで満たして。',
      ]);
      await tachyon.print_and_wait(['私を、あなただけの女にして。']);
      await tachyon.print_and_wait(['そしてあなたも、私だけの……']);
      era.println();

      await coffee.say_and_wait(['ん……あっ……', callname_25, '……お願い……']);
      era.println();

      await tachyon.print_and_wait([
        '心の妄想が、隣の実験室の嬌声で途切れる。',
      ]);

      era.drawLine();

      await tachyon.print_and_wait(['眼前の幻想が、形を変える。']);
      await tachyon.print_and_wait([
        you.sex,
        'の下にいる者が、一瞬で姿を入れ替わる。',
      ]);
      await tachyon.print_and_wait([
        '黒髪に金色の瞳。変わらないのは、眼に満ちた愛情だけ。',
      ]);
      era.println();

      await coffee.say_and_wait([callname_25, '……私を……満たしてください。']);
      era.println();

      await tachyon.print_and_wait([
        '錯覚のように、幻想の',
        you.sex,
        'は、先刻の自分相手より興奮している。',
      ]);
      await tachyon.print_and_wait([
        '否定したいが、これは隣で起きている現実だ。',
      ]);
      await tachyon.print_and_wait([
        '……哀れな',
        tachyon.uma_sex_title,
        'が、頭の中で自分を当てはめるための現実。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        'だめ……',
        callname,
        '……お願い……私を見て……抱いて……愛して……',
      ]);
      era.println();

      await tachyon.print_and_wait([
        '無意識に漏れた懇願まで、声を潜めてしまう。',
      ]);
      await tachyon.print_and_wait(['隣の睦まじい二人に聞かれたくない。']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' が、どれほど哀れな',
        tachyon.uma_sex_title,
        'か、知られたくない。',
      ]);
      era.println();

      await tachyon.print_and_wait([you.couple_title, 'こそ、釣り合う。']);
      await tachyon.print_and_wait([
        you.couple_title,
        'こそ、いちばん相応しい。',
      ]);
      await tachyon.print_and_wait([
        '優しいトレーナーと、その人と愛を育み、夢を叶える',
        tachyon.uma_sex_title,
        '。',
      ]);
      await tachyon.print_and_wait([
        'それに比べれば、自分の存在は第三者に近い。',
      ]);
      era.println();

      await tachyon.print_and_wait(['幻覚の二人は、とても気持ちよさそうだ。']);
      await tachyon.print_and_wait([
        '自分も……',
        you.couple_title,
        'と同じように、気持ちよくなりたい。',
      ]);
      era.println();

      await tachyon.print_and_wait(['無意識に、手が下へ伸びる。']);
      await tachyon.print_and_wait(['だめ……']);
      await tachyon.print_and_wait(['いけない……']);
      await tachyon.print_and_wait([
        '今あそこを触ったら、もう戻れない、という予感がある。',
      ]);
      await tachyon.print_and_wait([
        '愛する人と、その',
        you.sex,
        'の女の睦まじさを妄想の材料にしたら。',
      ]);
      await tachyon.print_and_wait(['もう戻れない……']);
      await tachyon.print_and_wait(['だから……']);
      await tachyon.print_and_wait(['だから、やめて……']);
      era.println();

      await coffee.say_and_wait([callname_25, '……強く……もっと強く……愛して。']);
      era.println();

      await tachyon.print_and_wait(['ああ……']);
      await tachyon.print_and_wait(['もう、だめ。']);
      await tachyon.print_and_wait(['隣室の嬌声が壁を伝って耳へ届いた瞬間。']);
      await tachyon.print_and_wait(['下からも、濁った液体が噴き出した。']);
      await tachyon.print_and_wait(['触れていないのに……']);
      await tachyon.print_and_wait(['我慢できていれば……']);
      era.println();

      await tachyon.print_and_wait(['もう戻れない。']);
      await tachyon.print_and_wait([
        'さっき我慢した分を、一度に取り返すように。',
      ]);
      await tachyon.print_and_wait(['容赦なく、蹂躙と言ってよい力で。']);
      await tachyon.print_and_wait(['掻き、掘り、揉み、挿れる。']);
      await tachyon.print_and_wait([
        'あらゆるやり方で、刺激と痛みと快感を与える。',
      ]);
      await tachyon.print_and_wait(['自分を情欲へ沈める。']);
      await tachyon.print_and_wait(['欲火に、身を囲ませる。']);
      era.println();

      await tachyon.say_and_wait(['気持ちよい……気持ちよいですわ……']);
      era.println();

      await tachyon.print_and_wait([
        '頭の中の',
        you.couple_title,
        'は、まだ睦まじい。',
      ]);
      await tachyon.print_and_wait([
        '頭の中の自分は、',
        you.couple_title,
        'の睦まじさを見て、くすくすと指を噛んでいる。',
      ]);
      await tachyon.print_and_wait(['下から、また潮が噴き出した。']);
    };
    f.title = 'Aromatic Hydrocarbon Addiction（芳香族炭化水素依存）';
    return f;
  })(),
  betrayed2: (() => {
    /**
     * 仕組み上はマンハッタンカフェの調教終了イベント
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {string} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
     * @param {PrintedSpan} item 「嫁衣」アイテム
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      callname_25,
      c_call_t,
      y_call_t,
      item,
    ) => {
      const ret = [];
      await tachyon.print_and_wait(['気持ちよい。堪能している。']);
      await tachyon.print_and_wait([
        '今日の私も、また ',
        callname,
        ' と ',
        t_call_c,
        ' の睦言を肴にしている。',
      ]);
      await tachyon.print_and_wait([
        'こうして情愛に溺れるのも、悪いことばかりではないのかもしれない……',
      ]);
      era.println();

      await tachyon.print_and_wait(['突然、睦言が止まった。']);
      await tachyon.print_and_wait(['絶頂の寸前で寸止めされたように、焦る。']);
      await tachyon.print_and_wait(['どうして続けないの。']);
      await tachyon.print_and_wait(['どうして止まったの。']);
      await tachyon.print_and_wait(['睦言が止んだ瞬間、部屋は静まり返る。']);
      era.println();

      await tachyon.print_and_wait(['たっ。']);
      await tachyon.print_and_wait(['たっ。']);
      await tachyon.print_and_wait(['たっ。']);
      await tachyon.print_and_wait([
        'だから……扉の外の足音が、やけにはっきり聞こえる。',
      ]);
      await tachyon.print_and_wait(['足音は、扉の前で止まった。']);
      await tachyon.print_and_wait(['外の人は、何をするつもりだろう。']);
      await tachyon.print_and_wait(['開けるの？']);
      await tachyon.print_and_wait([
        '開けられたら、自分のこの姿、この卑しい姿が。',
      ]);
      await tachyon.print_and_wait(['見られてしまう……見られてしまう。']);
      await tachyon.print_and_wait([
        '隠れなければ。こんなところを見せられない。どこかに隠れなければ。',
      ]);
      await tachyon.print_and_wait([
        'なのに……どうして、手がまた勝手に動くの……',
      ]);
      era.println();

      await tachyon.print_and_wait(['がらっ。']);
      await tachyon.print_and_wait(['ああ……開いた。']);
      await tachyon.print_and_wait([
        '扉の外に現れた、黒髪に金色の瞳の影を見た瞬間。',
      ]);
      await tachyon.print_and_wait([
        '絶頂は極みへ達し、今まででいちばん興奮した頂きを迎えた。',
      ]);
      era.println();

      await coffee.say_and_wait(['……哀れですね、', c_call_t, '。']);
      await tachyon.say_and_wait([t_call_c, '、どうして……']);
      await coffee.say_and_wait([
        'あんなに大きな声……',
        tachyon.uma_sex_title,
        'でない ',
        callname_25,
        ' にしか、気づかれなかったのでしょう。',
      ]);
      era.println();

      await tachyon.print_and_wait(['読みが外れた。']);
      await tachyon.print_and_wait(['見つかった。']);
      await tachyon.print_and_wait(['どうしよう、どうすればいい。']);
      await tachyon.print_and_wait([
        '哀れなことに、今の自分が一番大事だと思っているのは——',
      ]);
      await tachyon.print_and_wait([
        'どう ',
        t_call_c,
        ' に頼めば、',
        you.couple_title,
        'の交わる声を聞いて自分を慰めることを許してもらえるか、それだけだ。',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '、', you.sex, 'は……']);
      await coffee.say_and_wait([
        '心配いりません……',
        callname_25,
        ' には、物を取りに出ると言ってあります。',
      ]);
      await coffee.say_and_wait([
        c_call_t,
        '……腰の薬筒……一本、いただけますか。',
      ]);
      await coffee.say_and_wait(['欲しい種類は……分かっていますよね。']);
      era.println();

      await tachyon.print_and_wait(['ぼんやりと、相手を見る。']);
      await tachyon.print_and_wait([
        '自分の腰の……',
        t_call_c,
        ' が欲しいのは……',
      ]);
      await tachyon.print_and_wait(['自分が調合した、排卵促進剤？']);
      await tachyon.print_and_wait([
        '抑えきれず、腰から抜き取る……本来は自分と ',
        callname,
        ' のためだけに調合した薬を。',
      ]);
      era.println();

      await coffee.say_and_wait([c_call_t, '、ください。もらえますか。']);
      era.println();

      await tachyon.print_and_wait([
        '彼女は、自分が何を言っているか分かっているの？',
      ]);
      await tachyon.print_and_wait(['妊娠をほぼ確実に促す薬を、自分の手で。']);
      await tachyon.print_and_wait(['自ら捧げ、自ら渡してほしいと。']);
      await tachyon.print_and_wait([
        '彼女が愛する人と睦み、本来自分のものであるはずの子を宿すために。',
      ]);
      await tachyon.print_and_wait([
        '自分を足元に踏みつける、極限の辱めと言ってよい。',
      ]);
      await tachyon.print_and_wait(['なのに、どうして……手は伸びてしまう。']);
      await tachyon.print_and_wait(['どうして体は、こんなに灼ける。']);
      era.println();

      await coffee.say_and_wait([c_call_t, '……そんなに遠いと、取れません。']);
      await coffee.say_and_wait(['こっちへ来て、渡してください。']);
      era.println();

      await tachyon.print_and_wait(['いや。']);
      await tachyon.print_and_wait(['言うことを聞くな。']);
      await tachyon.print_and_wait(['薬を叩きつけろ。']);
      await tachyon.print_and_wait(['自分が飲んでもいい。']);
      await tachyon.print_and_wait([
        'どうせ ',
        callname,
        ' は隣にいる……飲んだあと、自分のものを取り返せばいい。',
      ]);
      await tachyon.print_and_wait(['そう、そのはず。']);
      await tachyon.print_and_wait([
        '今、扉へ向かうのは、薬を渡すためではない。自分のために……',
      ]);
      await tachyon.print_and_wait(['えっ……手が、どうして……']);
      era.println();

      await coffee.say_and_wait(['……そこまでするとは、思いませんでした。']);
      await coffee.say_and_wait(['本当に、気持ちが悪い。']);
      await coffee.say_and_wait(['でも、私は酷い人間でもありません……']);
      await coffee.say_and_wait(['聞くだけ、辛かったでしょう？']);
      era.println();

      await tachyon.print_and_wait([
        '薬を渡した瞬間、魂まで一緒に渡してしまったかのようだった。',
      ]);
      await tachyon.print_and_wait([
        '魂の抜けたまま眼前の影についていき、本来半分は自分のものであるはずの実験室へ入る。',
      ]);
      await tachyon.print_and_wait([
        'だが……これほどしたあとでも、',
        callname,
        ' を見た瞬間、意識は勝手に戻ってしまう。',
      ]);
      era.println();

      await tachyon.say_and_wait([t_call_c, '……']);
      await coffee.say_and_wait([
        '安心してください……友達が ',
        callname_25,
        ' の目と耳を塞いでくれています……今の',
        you.sex,
        'には、私たちが見えませんし、聞こえません。',
      ]);
      await tachyon.say_and_wait(['それは……']);
      await coffee.say_and_wait([
        '選択は ',
        c_call_t,
        ' に預けます……混ざるか、一人で見るか。',
      ]);
      await tachyon.say_and_wait(['……']);
      era.println();

      await tachyon.print_and_wait(['最後の機会。']);
      await tachyon.print_and_wait([
        '最後……今ここで受ければ、まだ二人でいられる。',
      ]);
      await tachyon.print_and_wait(['答えなければ、二度目はない。']);
      await tachyon.print_and_wait(['そんな予感がある。']);
      era.println();

      await tachyon.print_and_wait(['だから……']);
      era.printButton('口を開き、受け入れる', 1, { color: tachyon.color });
      era.printButton('黙ったまま', 2, { color: tachyon.color });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await tachyon.print_and_wait([
          '自分より釣り合うのは、',
          t_call_c,
          ' のはず。',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'に相応しいのも、',
          t_call_c,
          ' のはず。',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'のためなら、自分は手放すべき……なの？',
        ]);
        era.println();

        await tachyon.print_and_wait(['理解できない。分からない。']);
        await tachyon.print_and_wait([
          '人を好きになるとは、こんなに難解なことだったのか。',
        ]);
        await tachyon.print_and_wait([
          '合理に従うなら、ここで心から',
          you.couple_title,
          'を祝うべき。',
        ]);
        await tachyon.print_and_wait(['なのに、なのに……']);
        era.println();

        await tachyon.print_and_wait(['いつの間にか。']);
        await tachyon.print_and_wait([
          'また視線は、ベッドの',
          you.sex,
          'へ向いている。',
        ]);
        await tachyon.print_and_wait([
          '……いつも、勝手な自分を受け止めてくれた',
          you.sex,
          '。',
        ]);
        await tachyon.print_and_wait([
          '今度だけは……もう一度、自分の勝手を許してください。',
        ]);
        era.println();

        await tachyon.print_and_wait([t_call_c, ' へ手を伸ばした瞬間。']);
        await tachyon.print_and_wait([
          'ベッドの',
          you.sex,
          'が、不意に驚いた顔をした瞬間。',
        ]);
        await tachyon.print_and_wait([
          '内心の情を抑えきれず、ベッドの恋人へ飛びかかる。',
        ]);

        era.printButton(`「わあ、${y_call_t}、いつから！？」`, 1);
        await era.input();

        await tachyon.print_and_wait([
          you.sex,
          'の顔には驚き、戸惑い、いくらかの後ろめたさもある。',
        ]);
        await tachyon.print_and_wait([
          'だがいちばん大切なのは……',
          you.sex,
          'の体。',
        ]);
        await tachyon.print_and_wait(['温かい。安心する。']);
        await tachyon.print_and_wait([
          '今になって、長く、長く見ていた悪夢から覚めた気がする。',
        ]);
        await tachyon.print_and_wait(['さっきの自分は、何を考えていたの。']);
        await tachyon.print_and_wait([
          'どうしてこの温もりを自ら捨て、他人が味わうのを見ていたいなどと思ったの。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '遅れてきた恐怖が、今になって ',
          tachyon.get_colored_name(),
          ' の心へ追いつく。',
        ]);
        await tachyon.print_and_wait([
          'もし何も言わず、本当に ',
          callname,
          ' を手放していたら……',
        ]);
        era.println();

        await tachyon.say_and_wait([
          callname,
          '……ごめんなさい……ごめんなさい！',
        ]);
        await tachyon.say_and_wait(['いやですわ……もう誰にも渡しませんわ！']);
        await tachyon.say_and_wait([
          '嫌……嫌ですわ！ 私の ',
          callname,
          '……一生、私のですわ……！',
        ]);
        era.println();

        await tachyon.print_and_wait(['子供のように大声で泣く。']);
        await tachyon.print_and_wait(['恥ずかしい。でも……']);
        await tachyon.print_and_wait([
          '困惑しながらも優しく慰めてくれる',
          you.sex,
          'に抱かれるのは、本当に……気持ちよい。',
        ]);

        era.drawLine();

        await era.printAndWait([
          'まだ自分に縋って泣き続ける ',
          tachyon.get_colored_name(),
          ' を、戸惑って見る。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、少し混乱していた。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' がどう実験室に現れたのかも、今の号泣も、すべてが ',
          you.get_colored_name(),
          ' には訳が分からない。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、事情を知っていそうな唯一の存在である ',
          coffee.get_colored_name(),
          ' を見る。だが……',
        ]);
        era.println();

        await coffee.say_and_wait([
          '今日は……譲ります……',
          callname_25,
          '、彼女が満たされるまで、よく慰めてあげてください。',
        ]);
        await coffee.say_and_wait([
          '代わりに……今日はとても役立つ薬をいただきました……',
          callname_25,
          '、明日は私に、同等の愛をくださいね。',
        ]);
        await era.printAndWait([
          '言い終えると、',
          coffee.get_colored_name(),
          ' は扉を押して出ていった。',
        ]);
        await era.printAndWait(['……結局、何が起きたんだ。']);
        era.println();

        await tachyon.say_and_wait([callname, '……', callname, '……']);
        era.println();

        await era.printAndWait([
          '気づくと、さっきまで泣いていた ',
          tachyon.get_colored_name(),
          ' が、より強く ',
          you.get_colored_name(),
          ' を抱きしめていた。',
        ]);
        era.println();

        await tachyon.say_and_wait([
          'ごめんなさい……でも……もっと深く……愛してもらえますか……',
        ]);
        await tachyon.say_and_wait([
          '今の私には……もっと温かくて、熱いものが要るんです。体を内から外まで温めるものが。',
        ]);
        await tachyon.say_and_wait([
          callname,
          '……お願い……ください、いただけますか。',
        ]);
        era.println();

        await era.printAndWait(['懇願と恐れと情欲の混じった眼を見る。']);
        await era.printAndWait([
          you.get_colored_name(),
          ' は身を翻し、彼女を下へ押さえた。',
        ]);
        era.drawLine();
        await era.printAndWait(['アイテム', item, 'を入手した……']);
      } else {
        await coffee.say_and_wait(['……それがあなたの選択なら。']);
        await coffee.say_and_wait([
          '私は構いません……どのみち、',
          callname_25,
          ' を他人に渡したくはありませんから。',
        ]);
        await coffee.say_and_wait(['ただ……本当に、哀れですね。']);
        era.println();

        await tachyon.print_and_wait(['もう戻れない。']);
        await tachyon.print_and_wait(['もう、二度と戻れない。']);
        await tachyon.print_and_wait(['すべて終わった……なのに、どうして。']);
        await tachyon.print_and_wait(['今の気持ちは、意外なほど……軽い。']);
        await tachyon.print_and_wait(['たしかに、自分は哀れな女だ。']);
        await tachyon.print_and_wait([
          '愛する人が、その',
          you.sex,
          'の女と絡む姿を見て。',
        ]);
        await tachyon.print_and_wait(['自分が……笑っているのだから。']);
        era.println();

        await coffee.say_and_wait([
          'すみません……',
          callname_25,
          '、お待たせしました。',
        ]);
        await coffee.say_and_wait([
          'え？ いいえ……ただ、以前 ',
          c_call_t,
          ' に頼んだ薬を取り忘れていて……',
        ]);
        await coffee.say_and_wait([
          '……',
          c_call_t,
          ' の話をしたら、そんな顔をなさるんですか？ ごめんなさい？ でも……そう言いながら、下はこんなに硬くなっている。',
        ]);
        await coffee.say_and_wait([
          'ぐちゅ……ちゅる……ぷはっ……',
          callname_25,
          '……口の中で……出してください、薬と一緒に……ちょうどいい。',
        ]);
        await coffee.say_and_wait([
          '何の薬？……私たちの愛を結晶にする薬です。安心してください……',
          c_call_t,
          ' は、もう同意しています。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'そこまで言って、',
          t_call_c,
          ' はベッド脇にしゃがむ自分を一目見た。',
        ]);
        await tachyon.print_and_wait(['今の自分の顔は、どんな表情だろう？']);
        await tachyon.print_and_wait(['悲しみ？ 苦痛？ 憎しみ？ 虚無？']);
        await tachyon.print_and_wait(['ああ……']);
        await tachyon.print_and_wait([t_call_c, ' の蔑む眼を見れば分かる。']);
        await tachyon.print_and_wait(['どれにも、当てはまらないのだろう。']);
        era.println();

        await coffee.say_and_wait([callname_25, '……', callname_25, '……']);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          ' が',
          you.sex,
          'の体へ跨る。',
        ]);
        await tachyon.print_and_wait([
          'それから、最下等の娼婦ですら恥じるような嬌声を上げる。',
        ]);
        await tachyon.print_and_wait(['……いいえ、それは自分の色眼鏡だ。']);
        await tachyon.print_and_wait([
          '実際は、幸福で、喜びに満ちた喘ぎなのだろう。',
        ]);
        await tachyon.print_and_wait(['だが、構わない。']);
        await tachyon.print_and_wait([
          'むしろ前者だと思い込んだほうが、自分は興奮する。',
        ]);
        await tachyon.print_and_wait(['自分の恋人。']);
        await tachyon.print_and_wait(['自分の ', callname, '。']);
        await tachyon.print_and_wait([
          '娼婦以下の存在に従わせ、騎乗されている姿。',
        ]);
        era.println();

        await coffee.say_and_wait([
          'ねえ……',
          callname_25,
          '……いいえ、トレーナー君……',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '不意に、',
          t_call_c,
          ' の声が、ひどく艶やかになる。',
        ]);
        await tachyon.print_and_wait([
          '話し方も変わり、見知らぬようで、見慣れた口調になる。',
        ]);
        era.println();

        await coffee.say_and_wait([
          'おや、',
          callname_25,
          '……どうして、急にこんなに強くなったんです？',
        ]);
        await coffee.say_and_wait([
          'まさか……私を通して、誰かを見ているんですか？',
        ]);
        era.println();

        await tachyon.print_and_wait(['いや……']);
        await tachyon.print_and_wait(['やめて。']);
        await tachyon.print_and_wait(['待って、', t_call_c, '、やめて。']);
        await tachyon.print_and_wait(['堪えきれない。']);
        await tachyon.print_and_wait(['結局、声を出してしまった。']);
        await tachyon.print_and_wait(['だが……']);
        era.println();

        await coffee.say_and_wait(
          [you.sex, 'には、あなたは見えませんし、聞こえません。'],
          true,
        );
        era.println();

        await tachyon.print_and_wait([
          '背後で、何かが自分に囁いている気がする。',
        ]);
        await tachyon.print_and_wait(['……', t_call_c, ' の『友達』？']);
        await tachyon.print_and_wait(['違う、そんなことはどうでもいい。']);
        await tachyon.print_and_wait([t_call_c, '、あなたは——————。']);
        era.println();

        await coffee.say_and_wait(['ひどいですよね、', callname_25, '。']);
        era.println();

        await tachyon.print_and_wait([
          '不意に、',
          t_call_c,
          ' の声が元へ戻る。',
        ]);
        era.println();

        await coffee.say_and_wait([
          'あなたは彼女を愛していた……なのに、彼女はあなたの想いを踏みにじった。そうでしょう？',
        ]);
        era.println();

        await tachyon.print_and_wait(['な。']);
        await tachyon.print_and_wait([t_call_c, '……何を言っているの。']);
        await tachyon.print_and_wait(['違う……誰の……話……？']);
        era.println();

        await coffee.say_and_wait([
          'これほど ',
          callname_25,
          ' は ',
          c_call_t,
          ' に捧げてきたのに。',
        ]);
        await coffee.say_and_wait([
          'トレーナーと',
          tachyon.uma_sex_title,
          'の境界を、とうに越えていたのに。',
        ]);
        await coffee.say_and_wait([
          'それなのに……私が『この薬は ',
          callname_25,
          ' と一緒に使う』と言った瞬間……あっさり薬を渡したんですよ。',
        ]);
        era.println();

        await tachyon.print_and_wait([callname, '……好きな……人……']);
        await tachyon.print_and_wait([
          '違う、',
          you.sex,
          'と ',
          t_call_c,
          ' のほうが、釣り合うはず。',
        ]);
        await tachyon.print_and_wait(['第三者なのは、私のほう……']);
        era.println();

        await coffee.say_and_wait(['んっ……急に……急にこんなに強く……❤️。']);
        await coffee.say_and_wait(['ねえ……', callname_25, '……中に……中で……']);
        await coffee.say_and_wait([
          c_call_t,
          ' が嫌がったことは、全部させてあげます……',
          c_call_t,
          ' はあなたを拒みましたが、私は、彼女の何倍も満たしてあげます。',
        ]);
        era.println();

        await tachyon.print_and_wait(['違う。']);
        await tachyon.print_and_wait(['していない。']);
        await tachyon.print_and_wait(['私は……']);
        era.println();

        await tachyon.print_and_wait(['あ。']);
        await tachyon.print_and_wait(['違う。']);
        await tachyon.print_and_wait(['私は、拒んだはず。']);
        era.println();

        await tachyon.print_and_wait(['最後の機会。']);
        await tachyon.print_and_wait(['自分で捨てた。']);
        await tachyon.print_and_wait(['今度は、本当に機会がない。']);
        era.println();

        await tachyon.print_and_wait(['なのに、どうして……']);
        await tachyon.print_and_wait(['どうして体は震え続ける……']);
        await tachyon.print_and_wait(['自分の恋人なのに。']);
        await tachyon.print_and_wait(['自分を愛してくれていた人なのに。']);
        await tachyon.print_and_wait(['第三者が、彼女のほうなのに。']);
        era.println();

        await tachyon.print_and_wait([
          callname,
          ' と ',
          t_call_c,
          ' の立場が、不意に逆転する。',
        ]);
        await tachyon.print_and_wait([
          callname,
          ' が ',
          t_call_c,
          ' を後背位でベッドへ押さえつける。',
        ]);
        await tachyon.print_and_wait([
          'すべてを吐き出すように、止まらないピストン。',
        ]);
        await tachyon.print_and_wait([
          t_call_c,
          ' は白目を剥き、舌まで出している。',
        ]);
        await tachyon.print_and_wait(['なのに……', you.sex, 'の口の形。']);
        await tachyon.print_and_wait([
          callname,
          ' の口は、ずっと何かの言葉を呟いている。',
        ]);
        await tachyon.print_and_wait(['それは……', y_call_t, '。']);
        era.println();

        era.println();

        await tachyon.print_and_wait(['……今なら。']);
        await tachyon.print_and_wait([t_call_c, ' が気を失っている今なら。']);
        await tachyon.print_and_wait(['何をしても、見つからないだろう。']);
        await tachyon.print_and_wait([
          '本当に彼女の言う通り、『友達』が痕跡をすべて隠すなら。',
        ]);
        await tachyon.print_and_wait(['なら……私が……']);
        era.println();

        await coffee.say_and_wait(['ちゅ……ちゅ……']);
        era.println();

        await tachyon.print_and_wait(['肉竿ではない。']);
        await tachyon.print_and_wait(['玉袋でもない。']);
        await tachyon.print_and_wait([
          you.sex,
          'を捨てた私に、',
          you.sex,
          'へそんな越権をする資格はない。',
        ]);
        await tachyon.print_and_wait(['ただ、二人の結合部から溢れた液体。']);
        await tachyon.print_and_wait([
          '自分を、掃除道具のような物として扱う。',
        ]);

        era.printButton('「！？」', 1);
        await era.input();

        await tachyon.print_and_wait(['舐めているだけなのに。']);
        await tachyon.print_and_wait([you.sex, 'が、不意に振り返る。']);
        await tachyon.print_and_wait(['待って。']);
        await tachyon.print_and_wait(['見ないで。']);
        await tachyon.print_and_wait(['こんな下賤な姿を、見ないで。']);
        await tachyon.print_and_wait(['お願い、お願い……']);

        era.printButton('「お前……誰だ？」', 1);
        await era.input();

        await tachyon.print_and_wait(['……えっ？']);
        await tachyon.print_and_wait([
          callname,
          ' は、迷いと羞恥と困惑の顔をしていた。',
        ]);
        await tachyon.print_and_wait([
          'どれも、「私」を見たあとに浮かべる顔ではない。',
        ]);
        era.println();

        await coffee.say_and_wait([
          '彼女も……同じく、',
          callname_25,
          ' に憧れている子です。',
        ]);
        await coffee.say_and_wait([
          'ただ……この子は恥ずかしがり屋なので、友達に頼んで、顔を隠してもらっています……',
        ]);
        await coffee.say_and_wait([
          'それとも……',
          callname_25,
          ' は、彼女の顔を見たいですか？',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '少し緩んだ心が、',
          t_call_c,
          ' の最後の一言で、また張り詰める。',
        ]);
        era.println();

        await you.say_and_wait('いや……見られたくないなら……無理はさせない。');
        await coffee.say_and_wait([callname_25, '……優しいですね……']);
        era.println();

        await tachyon.print_and_wait(['ええ……']);
        await tachyon.print_and_wait(['本当に、優しすぎる。']);
        await tachyon.print_and_wait(['なぜか、頭の中に絵が浮かぶ。']);
        await tachyon.print_and_wait([
          'もし',
          you.sex,
          'が、',
          tachyon.get_colored_name(),
          ' がこんな',
          tachyon.uma_sex_title,
          'だと知ったら。',
        ]);
        await tachyon.print_and_wait([
          'もし',
          you.sex,
          'が、今の下賤な自分を見たら。',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'は……どんな蔑む眼で自分を見るだろう？',
        ]);
        await tachyon.print_and_wait([
          'どんな冷たい言葉で、自分を罵るだろう。',
        ]);
        await tachyon.print_and_wait(['あるいは……']);
        await tachyon.print_and_wait(['もし、', you.sex, 'が自分を許したら。']);
        await tachyon.print_and_wait([
          'ここまで救いようのない自分を、許したら……',
        ]);
        await tachyon.print_and_wait([
          'そのあと再び ',
          t_call_c,
          ' へ売り渡したとき、',
          you.sex,
          'はどんな、興奮する顔をするだろう。',
        ]);
        era.println();

        await coffee.say_and_wait([
          'でも……この子は、本当に ',
          callname_25,
          ' が好きなんです。',
        ]);
        await coffee.say_and_wait([
          'だから、',
          callname_25,
          ' が構わないなら……この子を、傍で見させてあげてもらえますか。',
        ]);
        await coffee.say_and_wait([
          '安心してください、見るだけです……保証します、この子はもう勝手には動きません……ね？',
        ]);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          ' はベッドの縁に座り、足で私の顎を持ち上げる。',
        ]);
        await tachyon.print_and_wait([
          '言うことを聞かない子犬を躾けるように。',
        ]);
        await tachyon.print_and_wait([
          '自分の恋敵なのに、自分のライバルなのに。',
        ]);
        await tachyon.print_and_wait(['なのに……']);
        await tachyon.print_and_wait([
          t_call_c,
          ' の股からゆっくり流れ、脹脛を伝って落ちるのを見る。',
        ]);
        await tachyon.print_and_wait(['足背まで、爪先まで。']);
        await tachyon.print_and_wait([
          '睦んだ跡、二人の愛液と精液の混ざった白濁。',
        ]);
        await tachyon.print_and_wait(['私は……']);
        await tachyon.print_and_wait([
          '気がつくと、',
          t_call_c,
          ' の足を舐めていた。',
        ]);
        await tachyon.print_and_wait(['甘く、苦く、辱められ、興奮する。']);
        await tachyon.print_and_wait(['さまざまな味が、口の中で弾ける。']);
        await tachyon.print_and_wait([
          'いつの間にか、足全体を舐め尽くしていた。',
        ]);
        await tachyon.print_and_wait(['もう、ない……']);
        await tachyon.print_and_wait(['もっと、もっと、あの味が欲しい……']);
        await tachyon.print_and_wait(['どんな代償を払っても……']);
        era.println();

        await tachyon.print_and_wait([
          '私は床に寝そべり、服従の姿勢を見せる。',
        ]);
        await tachyon.print_and_wait([
          t_call_c,
          ' の足を、慎重に自分の腹の上へ乗せる。',
        ]);
        await tachyon.print_and_wait([
          '尊厳をどれほど踏みにじられても構わない。',
        ]);
        await tachyon.print_and_wait(['また、ご褒美がもらえるなら。']);
        era.println();

        await coffee.say_and_wait(['あら……いい子ですね。']);
        await coffee.say_and_wait(['なかなか……いい見せ方です。']);
        await coffee.say_and_wait([
          'この芸が続けられるなら……たまに褒美をやるくらい、構いません……',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '不意に、',
          t_call_c,
          ' が耳元へ口を寄せ、',
          tachyon.uma_sex_title,
          'にしか聞こえない声量で囁く。',
        ]);
        era.println();

        await coffee.say_and_wait([
          '存分に私を悦ばせてください、',
          c_call_t,
          ' ❤️。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'それから、',
          t_call_c,
          ' はベッドへ戻る。',
        ]);
        await tachyon.print_and_wait(['ベッドが、再び揺れ始める。']);
        await tachyon.print_and_wait([
          'ベッド下の ',
          tachyon.get_colored_name(),
          ' は、舌を出したまま。',
        ]);
        await tachyon.print_and_wait([
          '専属の特等席で、蛙のように惨めに体を震わせる。',
        ]);
        await tachyon.print_and_wait([
          '必死に自分を慰めながら、ベッド上の恋敵をも悦ばせる。',
        ]);
        await tachyon.print_and_wait([
          'どうか、卑しい自分を憐れんで、ほんの少し、ほんの少しのご褒美を、と祈る。',
        ]);
      }
      return ret;
    };
    f.title = 'Aromatic Hydrocarbon Poisoning（芳香族炭化水素中毒）';
    return f;
  })(),
  ero_start_reward1: (() => {
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('やっと終わった……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は背伸びをして、思わずため息をつく。',
      ]);
      await era.printAndWait([
        '最近 ',
        tachyon.get_colored_name(),
        ' の実験は増え、複雑にも厄介にもなっている。',
      ]);
      await era.printAndWait([
        '危険度は以前ほど高くないが、トレーナーの本業と合わせると忙しさは極まり、',
        you.get_colored_name(),
        ' は危険な実験のほうを懐かしむほどだった。',
      ]);
      era.println();
      await tachyon.say_and_wait(['お疲れさまですわ、', callname, '……']);
      await tachyon.say_and_wait(
        '安心なさい、あとでちゃんとご褒美を差し上げますわ',
      );
      await era.printAndWait('\nご褒美……？');
      await era.printAndWait([
        '中身は分からないが、ご褒美という言葉は疲れた ',
        you.get_colored_name(),
        ' を励ました。',
      ]);
      await era.printAndWait('\n実験器具を片付けたあと');
      era.println();
      await tachyon.say_and_wait('では……ご褒美として、処理して差し上げますわ');
      await tachyon.say_and_wait('この数日、溜まったもの❤');
      era.println();
      await era.printAndWait('……え？');
      era.println();
      await tachyon.say_and_wait('その反応……まさか、お断りですの？');
      await tachyon.say_and_wait('恋人同士でしょう？');
      era.println();
      await era.printAndWait('眼前に運ばれた肉を、食べない道理がない！');
      await era.printAndWait(
        'それに……この数日は実験の都合で、欲もほとんど発散できていなかった……',
      );
      await era.printAndWait(
        'なら、恋人に手伝ってもらうくらい……行き過ぎではないだろう',
      );
      era.println();
      await era.printAndWait([
        '気がつけば、',
        you.get_colored_name(),
        ' はズボンを下ろしていた',
      ]);
      era.println();
      await tachyon.say_and_wait('すぅ……');
      era.println();
      await era.printAndWait([
        'アニメのように湯気まで立つほどではないが、一日蒸れた肉棒は、どんな',
        tachyon.uma_sex_title,
        'の性欲も唆す匂いを放っていた',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は眼前の肉棒から、視線を外せない',
      ]);
      era.println();
      await tachyon.say_and_wait('だめ……堪えられませんわ……❤');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は忘れていた。この数日、実験で欲を溜めていたのは ',
        you.get_colored_name(),
        ' 一人ではなかった',
      ]);
      await era.printAndWait([
        '傍で実験し続けていた ',
        tachyon.get_colored_name(),
        ' も、同じだったはずだ',
      ]);
      await era.printAndWait('つまり……ご褒美というより、口実だったのか……');
      era.println();
      await era.printAndWait([
        'そう思うと、',
        you.get_colored_name(),
        ' の胸に悪戯心が湧く',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が肉棒を出したまま動かないのを見て、',
        tachyon.get_colored_name(),
        ' は焦りながら ',
        you.get_colored_name(),
        ' を見る',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……何を待っていらっしゃるの、早く、入って',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は唇を突き出し、唇の間の桃色の舌を前後に動かし、',
        you.get_colored_name(),
        ' の情欲を煽ろうとする',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' は動かない。意図を悟った ',
        tachyon.get_colored_name(),
        ' は、恨みがましい顔をした',
      ]);
      era.println();
      await tachyon.say_and_wait('……ひどいですわ');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は床にしゃがみ、懇願するように、高く反った肉棒を見上げる',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'お願いですわ、',
        callname,
        '……ちゅぽちゅぽと……しっかり味わわせて……',
        callname,
        ' の肉棒を……❤️',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' がようやく近づくと、',
        tachyon.get_colored_name(),
        ' は慌てて鼻を肉棒へ寄せ、深く何度も嗅いだ',
      ]);
      await era.printAndWait(
        '落ち着かない手が、ぐちゅぐちゅと蜜穴を掻き、呻きが漏れる',
      );
      await era.printAndWait(
        '理も情も認めたこの雄の前では、雌である自分は跪いて服従するしかない',
      );
      era.println();
      await tachyon.say_and_wait('すぅ……はぁ……すぅ……');
      await tachyon.say_and_wait('肉棒……肉棒の匂い');
      await tachyon.say_and_wait([
        'お願い……もっと嗅がせて……',
        callname,
        ' の……肉棒を……',
      ]);
      await tachyon.say_and_wait('鼻腔の中……全部……雄の匂い');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、先走りだらけの肉棒を握る',
      ]);
      await era.printAndWait([
        '悪戯に、いつの間にか眼前に跪いていた ',
        tachyon.get_colored_name(),
        ' の鼻先を擦る',
      ]);
      await era.printAndWait([
        '印をつけるように、汁と匂いを ',
        tachyon.get_colored_name(),
        ' の鼻へ塗りつける',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ひどい……こんな匂いを……嗅いだら……本当に……戻れなくなりますわ……',
      );
      era.println();
      await era.printAndWait('嫌なら、やめておくか？');
      await era.printAndWait([
        you.get_colored_name(),
        ' が身を引く素振りを見せると、',
        tachyon.get_colored_name(),
        ' は一歩ずつついてきて、鼻は一センチたりとも肉棒から離れない',
      ]);
      era.println();
      await tachyon.say_and_wait('匂いだけで……いきそうですわ……');
      era.println();
      await era.printAndWait('また悪戯されるのを恐れるように');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' のほうが、鼻先で ',
        you.get_colored_name(),
        ' の亀頭の先を擦り続ける',
      ]);
      await era.printAndWait('この匂いを忘れまいと、肉棒の臭いを強く嗅ぐ');
      era.println();
      await tachyon.say_and_wait('だめ……堪えられませんわ……');
      await tachyon.say_and_wait('含ませて……お願い、舐めさせて');
      era.println();
      await era.printAndWait('早く舐めたい');
      await era.printAndWait('肉棒を吸う許可が欲しい');
      await era.printAndWait('恋人の肉棒が眼前にある');
      await era.printAndWait([
        '匂いを味わう ',
        tachyon.get_colored_name(),
        ' は、それでも堪えきれず唾を呑む',
      ]);
      era.println();
      await tachyon.say_and_wait('ぐちゅ');
      await tachyon.say_and_wait('んちゅるるる……ちゅる……ちゅぐ……');
      era.println();
      await era.printAndWait([
        '許可が出る前に、',
        tachyon.get_colored_name(),
        ' はもう肉棒を吸い始めていた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も息を吐く。これ以上続ければ、堪えきれなくなるのは ',
        you.get_colored_name(),
        ' のほうだ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は大きく口を開き、一気に根元まで肉棒を呑む',
      ]);
      await era.printAndWait('上下に吸い続け、下品な水音を立てる');
      era.println();
      await tachyon.say_and_wait('おいしい……おいしいですわ……');
      await tachyon.say_and_wait(['肉棒……', callname, ' の臭い肉棒❤❤']);
      era.println();
      await era.printAndWait(['根元から亀頭まで、余さず包んで吸う']);
      await era.printAndWait(
        '口紅を塗るように、肉棒の味を口の中へ残さず擦りつけたい',
      );
      era.println();
      await era.printAndWait('夕方、ほとんどの者が家か寮へ戻った時間');
      await era.printAndWait(
        '実験室に、ひどく淫らな水音が響く。わざと出しているのか、もう音など気にする余裕がないのか？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' への渇望、肉棒への渇望、あるいはこれほど淫らな行いへの背徳感',
      ]);
      await era.printAndWait(
        '肉棒に仕えながら、揺れる尻も床と指に擦りつけ、慰めを求める',
      );
      await era.printAndWait(
        'だが……いちばんおいしいのは、やはり口の中の肉棒だ',
      );
      await era.printAndWait([
        '愛情のこもった奉仕が、無言で ',
        tachyon.get_colored_name(),
        ' の眼前の肉棒への執着を語っている',
      ]);
      await era.printAndWait([
        '今ここで一生肉棒の奴隷として生きると誓わせても、',
        tachyon.sex,
        'は頷くだろう',
      ]);
      era.println();
      await era.printAndWait([
        '不意に、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の頭を軽く叩く',
      ]);
      await era.printAndWait(['従順な', tachyon.sex, 'は、すぐに意味を察した']);
      era.println();
      await tachyon.say_and_wait(
        '中に……出してくださいまし……私の口穴に……全部……飲みますわ❤❤',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はすぐ、より深く ',
        you.get_colored_name(),
        ' の肉棒を含んで吸う',
      ]);
      await era.printAndWait('ついに、白濁が口の中で弾ける');
      era.println();
      await tachyon.say_and_wait('ちゅ……ぐちゅ………ぷはっ');
      await tachyon.say_and_wait('はあっ……はっ……ん……ちゅ……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、口の中へ射精された精液をゆっくり噛む',
      ]);
      await era.printAndWait(
        'わざとぐちゅ、と音を立ててから、精液をすべて飲み下す',
      );
      await era.printAndWait('残った精液を一滴残さず飲み干すため');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は再び垂れた肉棒を含み、啜り続けて肉棒を掃除する',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の執着した様子を見て、',
        you.get_colored_name(),
        ' の下は、また勝手に硬くなった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '次の実験も、お願いいたしますわよ、',
        callname,
        ' ',
      ]);
      await tachyon.say_and_wait('……もちろん、ご褒美はありますわ');
      await tachyon.say_and_wait('断りませんわね……あなた❤');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'のとろけた流し目を見て、',
        you.get_colored_name(),
        ' は、命令ばかり吐くその小さな口を、もう一度塞ぐことにした',
      ]);
    };
    f.title = '実験の報酬・一';
    return f;
  })(),
  ero_start_reward2: (() => {
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '～今日の実験もお疲れさまでしたわ',
      ]);
      await tachyon.say_and_wait('では……ご褒美が要りますの❤️');
      await you.say_and_wait('頼む');
      era.println();
      await era.printAndWait('じゅちゅ、じゅちゅ');
      await era.printAndWait('実験室は下品な音で満ちている');
      era.println();
      await tachyon.say_and_wait([callname, '……', callname, '❤️']);
      await tachyon.say_and_wait('早く……私のいやらしい穴を満たして❤️');
      await tachyon.say_and_wait(
        '実験の途中から汁を流し続けていた、この淫らな穴を、しっかり調教して',
      );
      await era.printAndWait('入れる前から濡れきった穴が、肉棒をきつく包む');
      await era.printAndWait([
        '突くたびに愛液が飛び散り、机も床も ',
        tachyon.get_colored_name(),
        ' の腥い穴汁に染まる',
      ]);
      era.println();
      await tachyon.say_and_wait('うっ……強いですわ❤️');
      await tachyon.say_and_wait('少し…少し、ゆっくり……❤️');
      await tachyon.say_and_wait('声が……あん❤️');
      era.println();
      await era.printAndWait('これほど誘っておいて、ゆっくりにできるものか？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の尻を強く叩く',
      ]);
      await era.printAndWait('容赦なく、速度を上げる');
      era.println();
      await tachyon.say_and_wait([callname, '……', callname, '❤️']);
      await tachyon.say_and_wait('あっ❤️んあっ❤️あっ❤️ああ❤️');
      await tachyon.say_and_wait([callname, '……ください❤️もっとください❤️']);
      era.println();
      await era.printAndWait([
        '佳境に入ると、腰は ',
        you.get_colored_name(),
        ' の制御を離れ、自ら速くなる',
      ]);
      await era.printAndWait([
        'これほど自ら絡みつかれ、',
        you.get_colored_name(),
        ' の興奮も一段上がり、眼前の雌の体を、雄の本能のままに動かしたくなる',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'すごい❤️',
        callname,
        ' の肉棒❤️すごいですわ❤️',
      ]);
      era.println();
      await era.printAndWait('肉体がぶつかる音が、さらに大きくなる');
      await era.printAndWait('実験室全体が、淫猥な匂いと音で満ちる');
      era.println();
      await tachyon.say_and_wait('また……また大きく……❤️');
      await tachyon.say_and_wait([
        '出しますの……中に、中で出して❤️欲しい……',
        callname,
        ' の赤ちゃんが❤️',
      ]);
      await tachyon.say_and_wait([
        '好き……',
        callname,
        ' に中出しされるのが、いちばん好きですわ❤️',
      ]);
      await tachyon.say_and_wait([
        '穴の中で……存分に出して……',
        callname,
        ' の子を産みたい❤️',
        callname,
        ' に、モルモットの子を一腹産んであげたい❤️',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の言葉を聞き、',
        you.get_colored_name(),
        ' はさらに容赦なく、速く、深くする',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        'の体ですら、',
        you.get_colored_name(),
        ' の動きに合わせて揺れるしかない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は前で揺れ続ける二つの先を摘み、強く下へ引く',
      ]);
      era.println();
      await tachyon.say_and_wait('ほおおおおおお❤️');
      await tachyon.say_and_wait('い、いく❤️乳首を引っ張られていきますわ❤️');
      era.println();
      await era.printAndWait('どっくん、どっくん、しゅるるる❤️');
      await era.printAndWait(
        '最後に、いちばん深く数度突いてから、精の関が完全に開く',
      );
      await era.printAndWait([
        '白濁が ',
        tachyon.get_colored_name(),
        ' の穴を満たす',
      ]);
      await era.printAndWait([
        '白濁を注がれた瞬間、',
        tachyon.get_colored_name(),
        ' も全身を痙攣させて頂きへ達した',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '何日ぶりでしょう……',
        callname,
        ' の肉棒❤️えへへ❤️',
      ]);
      await tachyon.say_and_wait(['すごい……', callname, ' の……んぐっ❤️']);
      era.println();
      await era.printAndWait([
        '終わったと思った ',
        tachyon.get_colored_name(),
        ' の感嘆が、途中で止まる',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の肉棒が、再び口を塞いだからだ',
      ]);
      era.println();
      await tachyon.say_and_wait('ちゅ……ちゅちゅ❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は素直に ',
        you.get_colored_name(),
        ' の肉棒を掃除する',
      ]);
      await era.printAndWait([
        '自分の淫汁と ',
        callname,
        ' の精液に塗れた肉棒は、今の ',
        tachyon.get_colored_name(),
        ' にとって、',
        callname,
        ' の弁当を眼前に置かれても、',
        tachyon.sex,
        'は肉棒を選ぶだろう',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '次の実験も……同じようにお願いしますわ❤️ちゅ❤️ちゅぽ❤️',
      );
      await tachyon.say_and_wait('んっ！ んちゅ❤️ちゅる❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が言い方を変えて「また次もしましょう」と言うのを聞き、',
        you.get_colored_name(),
        ' の肉棒はまた硬くなる',
      ]);
      await era.printAndWait([
        '眼前の',
        tachyon.uma_sex_title,
        'を誘い、再び雌の顔をさせる',
      ]);
    };
    f.title = '実験の報酬・二';
    return f;
  })(),
  ero_start_reward3: (() => {
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '～今日の実験もお疲れさまでしたわ',
      ]);
      await tachyon.say_and_wait('では……ご褒美が要りますの❤️');
      await you.say_and_wait('頼む');
      await tachyon.print_and_wait('やはり、この穴ではないでしょう？');
      await tachyon.print_and_wait('下のいやらしい穴も、疼いて仕方ないのに');
      await tachyon.print_and_wait('どうして挿っているのは、そんなところ');
      await tachyon.print_and_wait('しかも、こんな……こんな体勢');
      era.println();
      await tachyon.print_and_wait([
        'きつい後穴が、',
        callname,
        ' の太い肉棒を包んでいる',
      ]);
      await tachyon.print_and_wait([
        '穴より皺の多い菊座は、',
        callname,
        ' により多くの快感を与えると同時に、自分にも穴の倍の快感をもたらす',
      ]);
      await tachyon.print_and_wait(
        '性欲を満たす条件としては、穴より使い勝手がいいのかもしれない……だが……',
      );
      era.println();
      await tachyon.say_and_wait(
        '子犬のような体勢……それにこの穴……これでは本当の子犬ですわ❤️',
        true,
      );
      era.println();
      await tachyon.print_and_wait(
        'だが……よく考えれば、悪くないかもしれませんわ❤️',
      );
      await tachyon.print_and_wait([callname, ' は、自分専属の ', callname]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は ',
        callname,
        ' 専属の雌犬',
      ]);
      await tachyon.print_and_wait(
        'そう思うと、体はすぐ役に入り込んだように、嬉しそうに尻尾を振り、主人の機嫌を取る',
      );
      era.drawLine();
      await era.printAndWait([
        '下の者が余計なことを考えているのを察したのか、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の尻を叩き、',
        tachyon.sex,
        'に集中を促す',
      ]);
      await era.printAndWait([
        'だが完全に役へ入った ',
        tachyon.get_colored_name(),
        ' は、より強く尻を振り、自分の尻穴を締め付ける',
      ]);
      await era.printAndWait([
        '突然の攻撃に、',
        you.get_colored_name(),
        ' は一瞬、精の関を失う',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の腰を押さえ、尻穴の中へ、数日分溜めた精液をすべて排泄する',
      ]);
      await era.printAndWait([
        '股下の ',
        tachyon.get_colored_name(),
        ' もこのとき、幸福を主人へ伝えたい雌犬のように',
      ]);
      await era.printAndWait('嬉しそうに小便を漏らして、今の気持ちを見せる');
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が反応する前に、二発目の重い衝撃が来る',
      ]);
      era.println();
      await tachyon.say_and_wait('わん……わんわん❤️');
      await era.printAndWait([
        you.get_colored_name(),
        ' の困惑した顔を見て、',
        tachyon.get_colored_name(),
        ' は自分が何をしたか、急に我に返ったらしい',
      ]);
      await era.printAndWait('頬が、一瞬で真っ赤になる');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……違いますわ、私……していません……あなたが思ったようなことでは……',
      ]);
      era.println();
      await era.printAndWait(
        '何が起きたかは分からないが、まずは何事もなかったことにしておこう',
      );
    };
    f.title = '実験の報酬・三';
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
   */
  async ero_start_cuckold(tachyon, callname, t_call_c) {
    if (era.get('cflag:25:招募状态') === 1 && Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '……',
        callname,
        '、あの、',
        t_call_c,
        ' を……一緒に呼びませんの？',
      ]);
      await tachyon.say_and_wait('今日は私だけと……ああ、そうですか。');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、なぜか少し寂しそうだった。',
      ]);
    } else {
      await tachyon.say_and_wait([
        '……ごめんなさい、',
        callname,
        '、ごめんなさい。',
      ]);
      era.println();
      await era.printAndWait([
        'なぜか、床へ入る前から ',
        tachyon.get_colored_name(),
        ' は何度も謝っていた。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
   */
  async ero_start_cuckold_coffee(tachyon, callname, t_call_c) {
    await tachyon.say_and_wait([t_call_c, '、いらっしゃい']);
    await tachyon.say_and_wait([
      'ええ、よく濡らして。そうしないと、あとで ',
      callname,
      ' が入りにくいでしょう',
    ]);
    await tachyon.say_and_wait(
      'よくできたら、終わったあとでもう一度舐めさせてあげますわ',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async ero_end_cuckold_coffee(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      ' の精液と愛液をコーヒーに混ぜる？ それでおいしくなりますの？',
    ]);
    await tachyon.say_and_wait(
      'それとも、屈辱と敗北の味だけを味わっているのですの？',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async cum_in_mouth_tr_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('ちゅ❤️ぐちゅ❤️ちゅる❤️');
    era.println();
    await era.printAndWait([
      '射精された精液が、',
      tachyon.get_colored_name(),
      ' の喉へ注がれる。',
    ]);
    await era.printAndWait([
      'だが射精量が多すぎて、',
      tachyon.get_colored_name(),
      ' が一度に飲みきれる量を超えていた。',
    ]);
    await era.printAndWait([
      '白い精液が口角から乳房へ流れ落ち、',
      tachyon.get_colored_name(),
      ' は慌てて片手で胸を支え、落ちた精液を再び口へ戻す。',
    ]);
    era.println();
    await tachyon.say_and_wait('ちゅ❤️ちゅる❤️');
    await tachyon.say_and_wait('まだ……');
    await tachyon.say_and_wait([
      'これらはすべて ',
      callname,
      ' の大切な因子ですわ❤️無駄にはできませんわ❤️',
    ]);
    era.println();
    await era.printAndWait([
      '自分の体の分を舐め終えると、',
      tachyon.get_colored_name(),
      ' は余韻の残る肉棒へ目を向ける。',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'は強く一口吸い、竿の中に残った精液を吸い出す。',
    ]);
    era.println();
    await tachyon.say_and_wait('これで……綺麗になりましたわね❤️');
    era.println();
    await era.printAndWait([
      '集めた精液を口の中に溜め、見せてから、',
      tachyon.get_colored_name(),
      ' はゆっくり白濁を飲み下す。',
    ]);
    await era.printAndWait([
      '喉が色っぽく上下し、',
      you.get_colored_name(),
      ' に飲み込む過程を見せつけるかのようだ。',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'はあっ……また空きましたわ❤️もっと出して、入ってきませんの❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async cum_in_throat_force(tachyon, you) {
    await tachyon.say_and_wait('んぐっぐぐ❤️んぅ❤️んぐ❤️');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      tachyon.get_colored_name(),
      ' の頭を強く押さえる。',
    ]);
    await era.printAndWait([
      '亀頭を ',
      tachyon.get_colored_name(),
      ' の喉の奥へ押しつけたまま、射精を始める。',
    ]);
    await era.printAndWait([
      '射精が終わっても ',
      you.get_colored_name(),
      ' は肉棒で塞ぎ続け、精液が ',
      tachyon.get_colored_name(),
      ' の胃の隅々まで染み込むようにする。',
    ]);
    era.println();
    await era.printAndWait([
      '酸欠のせいだろう、肉棒を抜いたあと ',
      tachyon.get_colored_name(),
      ' の表情は少し呆けている。',
    ]);
    await era.printAndWait(
      'だが無意識に、口辺の白い漿液と曲がった毛まで口へ運び……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async cum_in_throat(tachyon, you, callname) {
    await tachyon.say_and_wait('ん……ごく……ごくり……');
    era.println();
    if (Math.random() < 0.5) {
      await era.printAndWait('この瞬間を、長く待っていたかのようだ。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は一口また一口、喜んで射精された白濁をすべて飲み下す。',
      ]);
      era.println();
      await tachyon.say_and_wait('ぷはっ……');
      era.println();
      await era.printAndWait('開いた口と舌に、白い糸が少し残っている。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はそのまま口を開け、舌で口内の精液を一つに集める。',
      ]);
      await era.printAndWait('そして、もう一度飲み下す。');
      era.println();
      await tachyon.say_and_wait('ご馳走さまでしたわ❤️');
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の前で舌を出し、自分が搾った大量の精液を見せる。',
      ]);
      await era.printAndWait([
        'いつも自信に満ちた顔が白濁に汚される姿が、',
        you.get_colored_name(),
        ' の内側の欲を煽る。',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'これが、',
        callname,
        ' の因子ですわね……実験に使うなら……',
      ]);
      era.println();
      await era.printAndWait('そう言いながらも、口の中でしばらく弄んだあと……');
      era.println();
      await tachyon.say_and_wait('ぐちゅ……ぐちゅ……ぷはっ❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に向かって、もう何もない小さな口を開ける。',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '全部飲みましたわ……ではもう一度、するしかありませんわね❤️',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async cum_in_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('濃いですわ……❤️');
    await tachyon.say_and_wait([
      '全部顔に塗られて……いっぱい、',
      callname,
      ' の匂い❤️',
    ]);
    era.println();
    await era.printAndWait('濃い漿液が顔を伝い、胸へ落ちる。');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' はまず顔に付いた精液を拭き取り、手の上へ集める。',
    ]);
    await era.printAndWait(
      'だが胸の跡は、うっかり忘れたかのように残している。',
    );
    await era.printAndWait([
      '裸の乳に、',
      you.get_colored_name(),
      ' が射精した腥い白濁がべっとりと乗っている。',
    ]);
    era.println();
    await tachyon.say_and_wait('あら……忘れていましたわ❤️');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' の視線が胸へ吸い寄せられるのを見て。',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は、わざとらしい、作り物の驚きを上げる。',
    ]);
    await era.printAndWait('胸の白濁を層ごとに拭い、口へ運ぶ。');
    era.println();
    await tachyon.say_and_wait('ちゅ……ちゅる❤️ご馳走さまでしたわ❤️');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      'は指を吸い、口を開け、綺麗になった舌と唇を見せて、取りこぼしがないと示す。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async orgasm_non_penetrative(tachyon, callname) {
    await tachyon.say_and_wait('いく……いきますわ❤️');
    await tachyon.say_and_wait([callname, ' 専属の雌犬になりますわおおおお❤️']);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async cum_in_missionary(tachyon, you) {
    await era.printAndWait([
      'いつも主導権を握る ',
      tachyon.get_colored_name(),
      ' を下へ押さえつけて犯す行為が、',
      you.get_colored_name(),
      ' の射精欲をさらに高める。',
    ]);
    era.println();
    await tachyon.say_and_wait('あっ❤️あん❤️モルモット君❤️');
    await tachyon.say_and_wait('穴が……穴の中が❤️気持ちよいですわ❤️');
    era.println();
    await you.say_and_wait('出る……');
    await era.printAndWait([you.get_colored_name(), ' が低く唸る']);
    await era.printAndWait('どっくん❤️どっくん❤️くしゅるる❤️');
    era.println();
    await era.printAndWait(
      '肉棒を抜くと、腔内へ射精された濃い白濁がゆっくり流れ出す……',
    );
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async cum_in_back(tachyon) {
    await tachyon.say_and_wait('はあっ……んあっ……おっ……うおおおお❤️');
    await tachyon.say_and_wait('獣みたいに中出しされましたわおおおお❤️❤️❤️');
    await tachyon.say_and_wait(
      '理性が消えますわ❤️頭の中が肉棒と精液だけの獣になりますわ❤️❤️❤️',
    );
    era.println();
    await era.printAndWait('安産型の尻が、十分に緩衝の役を果たしている。');
    await era.printAndWait('肉棒が子宮口を打つたび、愛液が噴き出す。');
    await era.printAndWait('穴全体が、波のように肉棒を刺激する。');
    await era.printAndWait(
      'やがて亀頭が子宮口を押し、精液を子宮の内側へ注ぐ。',
    );
    await era.printAndWait('びゅっ～びゅっ～びゅっ～');
    await era.printAndWait('長い播種は、まだ終わるまで時間が要りそうだ。');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async cum_in_anal_missionary(tachyon, you) {
    await tachyon.say_and_wait('いく……いくいくいく！');
    await tachyon.say_and_wait('肛門で、尻穴でいきますわおおおおお❤️');
    if (tachyon.sex_code !== 1) {
      era.println();
      await era.printAndWait(
        '強く数度突かれたあと、空の穴から潮が何度も噴き出す。',
      );
      await era.printAndWait(
        '自分にかかった分も、穴からゆっくり流れ出る分も、二人が繋がっている器官へ集まり、そのまま出し入れの潤滑として使われ続ける。',
      );
      era.println();
      await you.say_and_wait('便利な性処理道具だな。潤滑まで自前とは。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の冗談を聞き、',
        tachyon.get_colored_name(),
        ' は肉棒を強く締めようとするが、力の抜けた体ではそれすらできない。それどころか、その圧迫刺激で穴がまた浅く小さく絶頂してしまった。',
      ]);
    }
  },
  /**
   * 快楽刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 快楽刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_pleasure(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            'ん……熱くて、むずむずしますわ……体が少し辛い……薬の副作用ですの？',
          );
        } else {
          await tachyon.say_and_wait('ん……熱くて、むずむず……');
          await tachyon.say_and_wait(
            'いいえ、気分が悪いわけでは……ん……試してみましょう、もう少し……不思議な感じですわ……',
          );
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(
            'だめ……ホルモンの作用なだけ……体の正常な反応なだけ……なのに、なのに……どうして……こんなに気持ちよい……',
          );
        } else {
          await tachyon.say_and_wait(
            '待って……中がまだ落ち着いていない……これ以上気持ちよくなったら……ひっ！',
          );
          await tachyon.say_and_wait(
            'だめ、続けてはいけないと分かっているのに、体が自分で……頭が……考えられませんわ',
          );
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait([
            'もう……考えられませんわ……気持ちよい……もっと……もっと、',
            callname,
            '……ください……まだ欲しい……',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '❤️', callname, '❤️']);
          await tachyon.say_and_wait(
            'もっと……もっとください……内も外も、完全に満たして……❤️',
          );
          await tachyon.say_and_wait(
            'こうなったのはあなたのせいですわ……だから、もっと❤️この賢い頭が、肉体の交わり以外を考えられなくなるまで❤️',
          );
        }
    }
  },
  /**
   * 同心刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_meek(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            '時おり思考を空にして、人に任せきる……ある意味、ストレス解消かもしれませんわ？',
            true,
          );
          await tachyon.say_and_wait([
            callname,
            '………………違いますわ、私は何を考えているの！',
          ]);
        } else {
          await tachyon.say_and_wait([
            'ん❤️んあっ❤️',
            callname,
            '❤️待って……止めて、止めて❤️',
          ]);
          await tachyon.say_and_wait('はあっ……はあっ……');
          await tachyon.say_and_wait(
            '言った通り止めてくれたのに、どうして体はまだおかしいのでしょう……',
            true,
          );
          await tachyon.say_and_wait(
            [
              'まるで……',
              callname,
              ' に私の言葉を無視してほしいと……続けて……人事不省になるまで……私は何を考えているの！',
            ],
            true,
          );
        }
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は突然、激しく頭を振り始めた',
        ]);
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(['待って……', callname, '……そんなに……']);
          await tachyon.say_and_wait(`いいえ、どうして激しくなったの……！`);
          await tachyon.say_and_wait([
            'くっ……ただの ',
            callname,
            ' なのに……私の命令を聞くはずなのに……',
          ]);
          await tachyon.say_and_wait(
            'どうして……体は前より気持ちよいと感じる……私、被虐趣味ですの……',
            true,
          );
        } else {
          await tachyon.say_and_wait([
            'んぅ……',
            callname,
            '、待って……強すぎ……ひっ❤️',
          ]);
          await tachyon.say_and_wait('嫌……………いいえ、そうでも……');
          await tachyon.say_and_wait('待って！ また急にそんな……んあっ❤️❤️');
          await tachyon.say_and_wait([
            '止めなさいと申し上げたでしょう……',
            callname,
            ' ったら、はあ',
          ]);
          await tachyon.say_and_wait(
            '支配権は、私の手元にあるはずなのに',
            true,
          );
          await tachyon.say_and_wait(
            'どうして、逆に……支配されたいなんて……',
            true,
          );
          await tachyon.say_and_wait('まずい……本当にまずいですわ❤️', true);
        }
        break;
      case 3:
        await tachyon.say_and_wait(
          '思考を捨て、誰かの虜になるのが、こんなに気持ちよいなんて……',
          true,
        );
        await tachyon.say_and_wait(
          'ああ……以前の自分は、何に抵抗していたのでしょう',
          true,
        );
        await tachyon.say_and_wait([
          callname,
          '……いいえ、ご主人……様……ください、まだ欲しい……❤️',
        ]);
        await tachyon.say_and_wait(
          '大丈夫……これは……これは……情趣を増す遊びですわ',
          true,
        );
        await tachyon.say_and_wait('終われば元に戻る……ええ……だから……', true);
        await tachyon.say_and_wait('どうか、もっと命令をくださいまし……❤️');
    }
  },
  /**
   * 苦痛刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_pain(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait([
            '痛い！？ 主人にこんなことをするなんて、',
            callname,
            '、何をお考えですの！',
          ]);
        } else {
          await tachyon.say_and_wait([
            '痛い！？ ',
            callname,
            '……もう少し、乱暴にしないでいただけます？',
          ]);
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait('やめて……止めて！ 痛い……もう弄らないで！');
        } else {
          await tachyon.say_and_wait([
            callname,
            '！？ わ、私が何か間違えたのですの……どうして、どうしてこんなことを……',
          ]);
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait(
            '痛い……怖い……ごめんなさい……私が悪かった……私が悪かった……もう弄らないで……痛い、痛い……',
          );
        } else {
          await tachyon.say_and_wait([
            '痛い……',
            callname,
            '……どうして……どうしてこんなことを……理解できませんわ……',
          ]);
          await tachyon.say_and_wait(
            'これが愛ですの？ どうして自分の恋人を、こんなふうに扱うの……分かりませんわ……',
          );
        }
    }
  },
  /**
   * 恥辱刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   */
  async mark_shame(tachyon, callname, level) {
    switch (level) {
      case 1:
        await tachyon.say_and_wait('こんなこと……恥ずかしすぎますわ', true);
        await tachyon.say_and_wait(
          '平常心……平常心……実験だと思えばいい、ええ、実験',
          true,
        );
        break;
      case 2:
        await tachyon.say_and_wait(
          'だめですわ……もう実験ではごまかせません',
          true,
        );
        await tachyon.say_and_wait(
          'この私だって、社会の一部ですもの……こんなことで恥を感じますわ',
          true,
        );
        await tachyon.say_and_wait(
          'くっ……なのに……どうして気持ちよいの……私の体は、どうなってしまったの……',
          true,
        );
        break;
      case 3:
        await tachyon.say_and_wait('はは……あはは……', true);
        await tachyon.say_and_wait(
          '狂った科学者として、他人の目など気にしたことはありませんでしたのに……自分がこうなる日が来るとは、思ってもみませんでしたわ',
          true,
        );
        await tachyon.say_and_wait(
          'いいですわ、どうなっても……もう、考えるのはやめます……',
          true,
        );
    }
  },
  /**
   * 反抗刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_hate(tachyon, you, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 50) {
          await tachyon.say_and_wait('………私の忍耐にも、限度がありますわ。');
          await tachyon.say_and_wait([
            'その限度を試さないことですわ、',
            callname,
            '。',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '……？']);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は呆けたように、いちばん親しく信頼していた人に平手を食らったかのようだった。',
          ]);
          await era.printAndWait(
            '怒りより、戸惑いと、信じられなさが勝っている。',
          );
        }
        break;
      case 2:
        if (love < 50) {
          await tachyon.say_and_wait('忠告はしましたわ。');
          await tachyon.say_and_wait('三度目はありませんわよ。');
        } else {
          await tachyon.say_and_wait([
            'どうして……',
            callname,
            '……私が何か間違えたのですの？',
          ]);
          await tachyon.say_and_wait([
            '私が悪かったのでしょう……教えて、',
            callname,
            '……',
          ]);
          await tachyon.say_and_wait(
            'そうでなければ……そうでなければ……理解できませんわ……どうして、こんなことを！',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は悲痛な眼で ',
            you.get_colored_name(),
            ' を見、心はわけの分からなさと疑いで満ちている。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' へのわけの分からなさと、自分への疑い。',
          ]);
        }
        break;
      case 3:
        if (love < 50) {
          await era.printAndWait([
            '瞬間、灼ける感触が ',
            you.get_colored_name(),
            ' の喉を逆流する。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は咳き込み、床の液体に血の筋が混じっているのを、恐れとともに見つける。',
          ]);
          await tachyon.say_and_wait(['三度目ですわ、', callname, '。']);
          await tachyon.say_and_wait(
            '感謝なさい……名目上、あなたは私の実験動物ですもの。',
          );
          await tachyon.say_and_wait(
            '私の主義は、使える実験体を無駄にしないこと。だから、自分にまだいくらか利用価値があることを感謝なさい……平常心……実験だと思えばいい、ええ、実験。',
          );
          await tachyon.say_and_wait(
            'ただし……実験品としても、生きているほうが死ぬより辛い目に遭わせると保証しますわ。',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' の眼には、嫌悪と憎悪が乗っている。',
          ]);
        } else {
          await tachyon.say_and_wait('ああ……もう結構ですわ。');
          await tachyon.say_and_wait('もう、十分ですわ。');
          await era.printAndWait('赤いブラインドが、完全に閉じる。');
        }
    }
  },
};
