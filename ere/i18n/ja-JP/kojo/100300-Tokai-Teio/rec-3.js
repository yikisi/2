/**
 * @file トウカイテイオー - 募集
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {string} title
   */
  async rec(teio, you, title) {
    const ret = [];
    await era.printAndWait(
      '抜けるような青空が、ゆるやかなリボンのように広がっている。巻き雲がところどころに散り、橙赤の太陽がその真ん中で輝いて、暖かさと光を四方へ注いでいた。',
    );
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は陽の光を浴び、芝生のあいだを歩きながら、清んだ空気を深く吸い込む。ふぅ——さっぱりする。',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' の気分も、今日の空と同じくらい明るい。',
    ]);
    era.println();
    await era.printAndWait([
      title,
      'トレーナーである ',
      you.get_colored_name(),
      ' は、今日もトレセン学園へ向かい、',
      teio.uma_sex_title,
      'の夢を支える道を歩いている。',
    ]);
    await era.printAndWait([
      '仕事が楽だなどとはとても言えない。それでも、宿舎と食事込みで特殊な【ウマコイン】で支払われる厚い報酬と、',
      teio.uma_sex_title,
      'たちの成長を見届け、',
      teio.couple_title,
      'が夢を掴んだときの心からの笑顔を見る精神的な豊かさは、負の感情を充分に打ち消してくれる。',
    ]);
    await you.say_and_wait(
      '今日の午後も、メイクデビューがあるはずだ。見に行って、担当を物色するか……',
      true,
    );
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' が考えに沈んでいると、突然、世界全体が静まったように感じられた。',
    ]);
    await era.printAndWait([
      '木の葉がゆるく、ゆっくり揺れ、まわりの空気が粘るように固まる。何が起きた？',
      you.get_colored_name(),
      ' は疑問に前方の通行人を見る。',
      teio.sex,
      'の口が、徐々に大きく開いていく……',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait('やあっ！');
    era.println();
    await era.printAndWait([
      'その声と同時に、勢いのある風が ',
      you.get_colored_name(),
      ' の背後へ襲いかかる。',
    ]);
    await era.printAndWait([
      'だがトレーナーの第六感か、意識が追いつく前に体が動いていた。腰を落とし、膝を曲げ、重心を低くする。ところが想像した危機は来ない。下から見上げた ',
      you.get_colored_name(),
      ' の目が、小さくぼやけた影が軽やかに、さっきまで自分の頭があった位置を飛び越え、そのまま上の枝のあいだへ飛び込んでいくのを捉えた。',
    ]);
    era.println();
    await era.printAndWait([
      '続いて葉のさらさらという音とともに、白く細い小さな手が緑の葉のあいだから現れ、色とりどりの風船を摘んでいる。',
      you.get_colored_name(),
      ' が立ち上がったところで、そばに細かな足音が近づき、小さな女の子が木の下まで歩いてきた。',
    ]);
    await era.printAndWait([
      '女の子「わあ、ありがとう',
      teio.elder_sibling_sex_title,
      '！今のジャンプ、かっこよかった！」',
    ]);
    await teio.say_as_unknown_and_wait(
      'ふふん、ボクは【無敵のテイオーさま】だよ！これ、キミのだ。しっかり持って、もう逃がさないようにね！',
    );
    await era.printAndWait([
      '勢いのある',
      teio.teen_sex_title,
      'の喉の音が上から届く。',
      you.get_colored_name(),
      ' が目を上げると、小柄で愛らしい',
      teio.uma_sex_title,
      'が、やや太い枝の上に端座し、下へ風船を差し出していた。だが',
      teio.sex,
      'と女の子の手は、まだわずかに届かない……',
    ]);
    era.printButton('手を貸す', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      ' は考えるより先に手を添え、',
      teio.uma_sex_title,
      'の手から風船を受け取り、そばの女の子へ渡す。女の子は礼を言った。',
    ]);
    await era.printAndWait('女の子「テイオーさま！もう一回跳んでくれない？」');
    await era.printAndWait([
      'どう見ても、あの',
      teio.uma_sex_title,
      'が木からひらりと降りるさまを見たいのだ。',
      you.get_colored_name(),
      ' は笑って、場所を譲ろうとする。今日は「ヒーロー着地」が見られるかもしれない。',
    ]);
    await era.printAndWait([
      'ところが不思議なことに、樹上の',
      teio.uma_sex_title,
      'は小さなファンの要望に応じない。',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      'えっと、その、テイオーダンスには準備がいるから、ちょっと……あ、お母さんが呼んでるよ。行っておいで、心配させちゃだめだよ！',
    );
    era.println();
    await era.printAndWait([
      '女の子は少し困惑した顔をする。そのとき ',
      you.get_colored_name(),
      ' は、重なった葉のあいだから覗く淡い肌に気づき、事情を察した。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は体をわずかに後ろへずらす。',
    ]);
    era.println();
    era.printButton(
      `「お嬢ちゃん、${teio.elder_sibling_sex_title}の言うことを聞こう。お母さんと離れてると心配するよ。ほら、向こうで手を振ってる」`,
      1,
    );
    await era.input();

    await era.printAndWait([
      '女の子はまだ少し迷いながらも、母親のほうへ歩いていった。一瞬、ここには ',
      you.get_colored_name(),
      ' と、樹上の',
      teio.teen_sex_title,
      'だけが残る。',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      `あの……トレセンのトレーナー${you.adult_sex_title}ですよね！お願い、手伝ってくれませんか！`,
    );
    await era.printAndWait([
      '胸元のバッジに、',
      teio.sex,
      'は気づいたのだろう。',
    ]);
    era.println();
    era.printButton('「もちろん」', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      ' は返事をして頷く。',
      teio.sex,
      'は嬉しそうに笑って、胸を張った……',
    ]);
    era.println();
    era.printButton(
      'すぐに木の下へ走り、両手を差し出して受け止める（恋慕+1）',
      1,
    );
    era.printButton(
      `さっき内側に隠していた、${teio.uma_sex_title}が蹴り落としたサンダルを拾い、木の下に置く（好感+5）`,
      2,
    );
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は素早く',
        teio.sex,
        'の足元へ走り、両手を差し出す。',
        teio.sex,
        'は驚いたように頬を赤らめながらも滑り降り、両手で ',
        you.get_colored_name(),
        ' の肩を支え、白い小さな両足を正確に掌のうえへ乗せた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は掌の内側に、',
        teio.uma_sex_title,
        teio.teen_sex_title,
        'の弾力があり滑らかな足裏を感じる——これが',
        teio.uma_sex_title,
        'の天賦か。苛烈なトレーニングと運動で足は逞しいのに、肌はなお柔らかい。皮膚がわずかに縮み、',
        you.get_colored_name(),
        ' は土踏まずが少し持ち上がり、肉色の趾が落ち着かなげに動くのを察する。気を取り直し、可愛い両足から視線を外し、ゆっくりと安定して向きを変え、',
        teio.sex,
        'をそばのベンチへ下ろす。それから背を向け、',
        teio.teen_sex_title,
        'が少し恥ずかしそうに靴を履く様子を、見なかったことにした。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、女の子に事情を悟られないよう体の内側に隠していたサンダルを持ち上げ、木のそばへ置く。視線で',
        teio.uma_sex_title,
        'の着地を見守り、いつでも両腕を伸ばせるようにしていたが、',
        teio.sex,
        'はその機会を与えなかった。',
      ]);
      await era.printAndWait([
        teio.uma_sex_title,
        teio.teen_sex_title,
        'は軽く一跳びで降り、靴のうえへ乗る動作も安定して正確だった。',
        teio.sex,
        'は顔を上げ、',
        you.get_colored_name(),
        ' へ微笑む。太陽よりまぶしい顔だった。',
      ]);
      await era.printAndWait(['その子供っぽい私服と、妙に釣り合っている。']);
    }
    await era.printAndWait([
      '靴を履き終えると、',
      teio.sex,
      'の声が再び届く。',
    ]);
    era.println();
    await teio.say_as_unknown_and_wait(
      'ありがとう！ごめんね、面倒かけちゃった！跳びやすいように先に靴を脱いじゃって、そしたらこんなことに……無敵のテイオーさまだって、たまにミスするよね！',
    );
    era.println();
    era.printButton('「テイオー……？」', 1);
    await era.input();

    await teio.say_as_unknown_and_wait([
      'そうだよ！ボクの名前はトウカイテイオー！将来、伝説になる',
      teio.uma_sex_title,
      'だよ！ちょうど今日の午後、レースがあるから、トレーナーさん、暇なら絶対見に来てね！ボクはまだ急いでるから、先に失礼するよ。午後、学園で会おう！',
    ]);
    era.println();
    await era.printAndWait([
      '言い終わるやいなや、',
      teio.sex,
      'は小走りに去っていった。',
      you.get_colored_name(),
      ' は',
      teio.sex,
      'の背中を見つめ、笑って手を振る。',
    ]);
    era.drawLine({
      content: '午後、トレセン学園 選抜レース 2000メートル',
      position: 'left',
    });
    await era.printAndWait([
      '学園のグラウンドには、すでにかなりの人が集まっていた。今日は意外と多いな、と ',
      you.get_colored_name(),
      ' は比較的静かな場所に座り、密かに思う。誰か有望な新人を奪い合うためだろうか。',
    ]);
    era.println();
    await era.printAndWait([
      '頭のなかに、',
      teio.get_colored_name(),
      ' という名の',
      teio.uma_sex_title,
      teio.teen_sex_title,
      'の姿が浮かぶ。軽い歩幅に強い爆発力が潜み、張りつめた脚の筋肉が収縮しては弛緩する。常人と違う、独自の振り足が力を両足の裏へ運び、大地に触れて弾み、その勢いで前へ飛び、誰も追いつけない速度を叩き出す……',
    ]);
    era.println();
    await era.printAndWait([
      '頭のなかの幻と、眼前の現実が重なる。',
      you.get_colored_name(),
      ' は青と白の流光が場内を跳び、好き勝手に自分の色を輝かせ、他の相手を後ろへ置き去りにするのを見る。勝利は',
      teio.sex,
      'の掌中にある——この光景を見た者なら、誰もがそう確信するだろう。',
    ]);
    era.println();
    await era.printAndWait([
      teio.sex,
      'は当然のように自分の存在を宣言し、勝利を手にした。',
      you.get_colored_name(),
      ' は画面に大きく出た「1着」を見て、思わず微笑み、立ち上がって下へ向かう。',
    ]);
    era.println();
    await teio.say_and_wait('ん……');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は人込みのなかを前へ押し進む。天才',
      teio.uma_sex_title,
      teio.teen_sex_title,
      'の初走は誰の血も沸かせる。この状況は予想できた。相棒を求めるトレーナーたちがこちらを取り囲んでいる。青空と白い雲の配色をしたテイオーは、むしろ小さな太陽のようで、首を伸ばして待つ向日葵を無数に引き寄せている。尻尾を軽く揺らす',
      teio.sex,
      'は興奮しているように見えるが、',
      you.get_colored_name(),
      ' は',
      teio.sex,
      'の目の奥のわずかな困惑も捉えた。そして、呼応するように——',
      teio.sex,
      'はこちらへ向き、',
      you.get_colored_name(),
      ' の視線を捉える。',
    ]);
    era.println();
    await era.printAndWait('どうする？');
    era.println();
    era.printButton(
      '大声でテイオーの名を呼び、担当になると申し出る（募集を続ける）',
      1,
    );
    era.printButton('やめておこう……（募集を諦める）', 2);
    ret.push(await era.input());
    if (ret[1] === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は自分が ',
        teio.get_colored_name(),
        ' の名を叫ぶのを聞く。',
        teio.sex,
        'の目が跳ね、驚喜して ',
        you.get_colored_name(),
        ' に応えた。人の壁は察して割れ、迷わず ',
        you.get_colored_name(),
        ' は利き手を伸ばして契約の証を出し、もう一方の手は無意識に、風と汗で皺になった',
        teio.teen_sex_title,
        'の肩の生地を撫でていた。運動のあと、頬の赤みはまだ残っている。',
        teio.sex,
        'は嬉しそうに笑い、自分の名を記し、',
        you.get_colored_name(),
        ' を',
        teio.sex,
        'のトレーナーだと認めた。',
      ]);
      era.println();
      await era.printAndWait('ふたりの物語は、ここから始まる。');
    } else {
      await era.printAndWait(
        'この子は……自分には向かないかもしれない。挑戦が大きすぎるのかもしれない。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は小さく、だがはっきりと首を振り、そっと人込みから抜けた。',
      ]);
    }
    return ret;
  },
};
