/**
 * @file マンハッタンカフェ - 募集
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_start(coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は、黒髪の',
      coffee.uma_sex_title,
      'に気づいた。',
    ]);
    await era.printAndWait([
      'だが近づこうとした瞬間、',
      coffee.sex,
      'の姿はもうなかった。最初からいなかったように。',
    ]);
    await you.say_and_wait('目の錯覚か？ 帰って休もう', true);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async goto_playground(coffee, you) {
    await era.printAndWait(
      '福は重ならず、禍は重なる。不運というのは、だいたいそういうものだ。',
    );
    await era.printAndWait([
      '早起きしてトレーニング場へ担当',
      coffee.uma_sex_title,
      'を探しに行った ',
      you.get_colored_name(),
      ' は、予想どおり収穫なし。疲れた体を寮へ引きずり、倒れるように眠った。目が覚めると、全身を探しても携帯が見つからない。',
    ]);
    await era.printAndWait('取りに戻るしかない。他にどうする。');
    await era.printAndWait([
      'トレーニング場へ着いたころには、空はすっかり暗くなっていた。探すのに時間がかかると思っていたのに、少し離れた芝生の上に、細かい光点がきらめいていた。',
    ]);
    await era.printAndWait([
      '導かれているような気がした——',
      you.get_colored_name(),
      ' はわけのわからない感覚のまま前へ進み、それが落とした携帯だと知った。',
    ]);
    era.printButton('「運は……悪くない、のか？」', 1);
    await era.input();
    await era.printAndWait('シュッ————');
    await era.printAndWait([
      you.get_colored_name(),
      ' が安堵する暇もなく、何かが風を連れて肩の横を掠めた。周りを見ても、冷たい月明かりの下に、何もいない。',
    ]);
    era.printButton('「これは……」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は、四肢から胴へ這い上がる寒気を感じた。寒気の通ったところが硬くなっていく。動こうとしても手足は冷気に押さえられ、錆びた機械のように動かない。余計な想像はするなと自分に言い聞かせても、あちこちで聞いたトレセンの怪談が頭に浮かび、',
      you.get_colored_name(),
      ' は怖くてたまらなかった。',
    ]);
    await coffee.say_as_unknown_and_wait('あの……');
    await era.printAndWait([
      '背後からの声が、その状況を一瞬で砕いた。動きを取り戻した ',
      you.get_colored_name(),
      ' は、慌てて新鮮な空気を大きく吸い込んだ。逃げ出したくなる恐怖をこらえ、振り返ると、息を切らした、走り終えたばかりらしい',
      coffee.uma_sex_title,
      'が後ろから ',
      you.get_colored_name(),
      ' を見ていた。',
    ]);
    await coffee.say_as_unknown_and_wait(
      'ずっとそこに立っていたので、何かあったのかと……',
    );
    await era.printAndWait([
      'ずっと、立っていた？',
      you.get_colored_name(),
      ' は月明かりで腕時計を見た。分針は文字盤の四分の一以上回っている。もう二十分近く経っていたのか。',
    ]);
    await coffee.say_and_wait([
      '先に見つけたのは、友達です……私は友達と走っていて、',
      coffee.sex,
      'が急に方向を変えたあとで、あなたが見えたんです……',
    ]);
    await era.printAndWait([
      'どちらにせよ、相手と',
      coffee.sex,
      'の友達が ',
      you.get_colored_name(),
      ' を助けてくれた。礼を述べ、身分と来意を説明し、友達の居場所を尋ねて礼を言おうとした。',
    ]);
    await coffee.say_as_unknown_and_wait('友達なら、あなたの傍にいますよ……？');
    await era.printAndWait([
      '腰まで届く黒髪の、細い',
      coffee.uma_sex_title,
      'は、',
      you.get_colored_name(),
      ' の傍の空き地をちらりと見て、首を傾げた。このとき ',
      you.get_colored_name(),
      ' は気づいた。最初から',
      coffee.sex,
      'の視線は自分に固定されたままだ。品定めのようなその態度が、少し異様に感じられた。',
    ]);
    await era.printAndWait([
      '黒髪の',
      coffee.uma_sex_title,
      'の頭の白いアホ毛が、',
      coffee.sex,
      'の呼吸に合わせて微かに揺れる。',
      you.get_colored_name(),
      ' の気持ちも、それに合わせて上下した。',
    ]);
    await era.printAndWait([
      'こんな場所で冗談を言う余裕があるとは、変わった',
      coffee.uma_sex_title,
      'だ。',
    ]);
    await era.printAndWait([
      '……本当に冗談か？ 身をもって味わった怪異に、',
      you.get_colored_name(),
      ' はその空き地から数歩、離れた。',
    ]);
    era.printButton('「……それ、冗談ですか？」', 1);
    await era.input();
    await coffee.say_as_unknown_and_wait([
      '……冗談ではありません……それに、トレーナー',
      you.adult_sex_title,
      '……',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      'はゆっくり ',
      you.get_colored_name(),
      ' へ歩み寄った。このとき初めて',
      coffee.sex,
      'の顔がはっきり見えた。',
      coffee.uma_sex_title,
      'の中でも美人と呼べる整った顔立ち。血の気の少ない白い肌。額から垂れ、その顔を割る黒髪。そして何より印象に残ったのは、',
      coffee.sex,
      'の暗い黄色い双眸だった。',
    ]);
    await coffee.say_as_unknown_and_wait(
      '今すぐ、私と一緒にここを出てください。さっき、何かがあなたを狙いました……',
    );
    await era.printAndWait([
      coffee.teen_sex_title,
      'の低い声が、急に立った夜風と一緒に ',
      you.get_colored_name(),
      ' の耳へ入る。傍の闇から、かすかな笑い声がした。そのあと ',
      you.get_colored_name(),
      ' はこの',
      coffee.uma_sex_title,
      'と無事にトレーニング場を出たが、この夜は深く ',
      you.get_colored_name(),
      ' の記憶に刻まれた。',
    ]);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_again(coffee, you) {
    await era.printAndWait([
      'あの夜から数日が経っても、トレーニング場の黒髪の',
      coffee.uma_sex_title,
      'の姿と言葉が ',
      you.get_colored_name(),
      ' の頭から離れない。選抜レースが始まってようやく、名簿で初めて',
      coffee.sex,
      'の名前を見た——',
      coffee.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '急いで着いたときには、',
      coffee.get_colored_name(),
      ' の選抜レースは終わっていた。目では見ていないが、掲示板の上位に並ぶ名前が、',
      coffee.sex,
      'の実力を十分に示していた。',
    ]);
    await era.printAndWait([
      '賑わう人混みを抜け、レース後の休憩エリアで、',
      you.get_colored_name(),
      ' は',
      coffee.sex,
      'の姿を見つけた。',
    ]);
    era.print([you.get_colored_name(), ' はどうする？']);
    era.printButton('前へ出る（募集を試みる）', 1);
    era.printButton('やめておく（募集を諦める）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        'あの夜の経験は怖かった。けれど好奇心のほうが勝ち、',
        you.get_colored_name(),
        ' は前へ出た。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'の姿は、同期の',
        coffee.uma_sex_title,
        'と募集に来たトレーナーたちの間に隠れていた。選抜レースでは上位だったのに、誰も',
        coffee.sex,
        'を募集しに来ていないようだ。',
      ]);
      era.printButton(
        `「こんにちは、${coffee.name}さん。選抜レース、いい成績でしたね。おめでとう」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait([
        '……ありがとうございます。あの夜の、トレーナー',
        you.adult_sex_title,
        '……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' も ',
        you.get_colored_name(),
        ' に気づいていた。話しかけられたことには少し驚いたらしく、ぼんやりと頷いた。',
      ]);
      era.printButton(
        '「余計なお世話かもしれないが、誰も募集に来ていないのか？」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('……いまのところ、いません。');
      await era.printAndWait('ふたりは、そこで黙った。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、さっき調べた ',
        coffee.get_colored_name(),
        ' の資料を思い出した。',
      ]);
      await era.printAndWait([
        '他の',
        coffee.uma_sex_title,
        'や、かつて',
        coffee.sex,
        'に興味を持ったトレーナーたちの話では、',
        coffee.get_colored_name(),
        ' はいつも奇妙なことを言う。誰も知らない人や出来事の話が多く、何かの後ろを追っている姿を見かけることも多い。経験豊富なトレーナーが接触を試みたこともあったが、去るときの険しい眉間を見れば、うまくいかなかったのは明らかだ。こうして ',
        coffee.get_colored_name(),
        ' は問題児の烙印を押され、トレーナーたちが手を出したがらない存在になっていた。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' はそうは思わない。あの夜の経験と、',
        coffee.sex,
        'の口にした【友達】には、きっと別の事情がある。',
      ]);
      await era.printAndWait('まずは話題を変えよう。');
      era.printButton(
        '「あの夜は、本当に助かった。君がいなければ、たぶん……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'あの夜は闇に隠れて気づかなかったが、',
        coffee.get_colored_name(),
        ' は人の礼を受けるのが苦手らしい。',
        you.get_colored_name(),
        ' の率直な礼に ',
        coffee.get_colored_name(),
        ' は一瞬固まり、後ろの尻尾の左右のリズムが乱れた。しばらくしてようやく ',
        you.get_colored_name(),
        ' に返事をした。',
      ]);
      await coffee.say_and_wait(
        '通りがかりで、しただけです……それより、私には近づかないほうがいい……',
      );
      await era.printAndWait([coffee.sex, 'に近づくな、なぜ？']);
      await era.printAndWait([
        '今度は ',
        you.get_colored_name(),
        ' が固まった。話題を続けるつもりで用意していた言葉が、その拒絶めいた返事で喉に引っかかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が疑問を口にする前に、',
        coffee.get_colored_name(),
        ' は「すみません」と残して人混みから身を逸らした。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'がひとりで去っていく背中を見て、',
        you.get_colored_name(),
        ' の疑問は溜息に変わった。',
      ]);
      era.printButton(`（なんだ、この${coffee.uma_sex_title}は……）`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、「問題児」という四字の重みを、トレセンで少し理解した。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' が去ったあと、',
        you.get_colored_name(),
        ' は選抜レースに気を向けられなくなり、何人か見込みのある',
        coffee.uma_sex_title,
        'と話しても実らず、先にトレセンを出た。',
      ]);
    } else {
      await era.printAndWait([
        'あの夜の経験は ',
        you.get_colored_name(),
        ' の一生の悪夢だ。恐怖が足を止めさせ、',
        you.get_colored_name(),
        ' は踵を返して去った。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_final(coffee, you, callname) {
    await era.printAndWait([
      '夕陽の中、',
      you.get_colored_name(),
      ' はひとり、憂鬱な帰り道を歩いていた。頭は今日の鬱屈でいっぱいだったから、ある角を曲がったあと、周囲の世界が変わっていたことに、いまさら気づいた。',
    ]);
    era.printButton('「おかしい……」', 1);
    await era.input();
    await era.printAndWait(
      'いつもの夕陽より昏い光が後ろから大地を照らしている。見慣れた景色が、この黄昏の中で古い映画のように歪んで見える。足元の影は——',
    );
    await era.printAndWait('違う、影がない！');
    await era.printAndWait([
      '額に冷や汗が浮かび、',
      you.get_colored_name(),
      ' はよろよろと路傍の塀まで行き、背を預けて、抜けそうな足を支えた。',
    ]);
    await era.printAndWait(
      '道の両側を見ても、大きな変化はない。遠くに人影とトレセンも見える。全力でトレセンまで走れば——',
    );
    await era.printAndWait([
      '思ったそばから動き、',
      you.get_colored_name(),
      ' はトレセンの方角へ駆け出した。',
    ]);
    await era.printAndWait([
      'だが結果は、',
      you.get_colored_name(),
      ' の想像どおりではなかった。怪談の知識に感謝すべきか、三度目の同じ看板を見たところで、',
      you.get_colored_name(),
      ' は迷い家に遭った現実を受け入れ、さっきまでいた塀の傍へ戻った。',
    ]);
    await era.printAndWait(
      '夕陽は沈み続け、周囲はますますおかしくなる。とっくに潰れた店の中から細い囁きが漏れ、路傍のゴミ箱からは黒髪が溢れている。遠くのトレセンも、深まる黄昏の中で歪んで見えた。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は、もう限界に近かった。',
    ]);
    await coffee.say_and_wait('トレー……聞こ……ますか？');
    await era.printAndWait([coffee.get_colored_name(), ' の声だ。']);
    await era.printAndWait([
      coffee.sex,
      'とは二度しか会っていない。途切れ途切れでも、',
      you.get_colored_name(),
      ' は',
      coffee.sex,
      '特有の低く、少し掠れた声をはっきり覚えている。',
      coffee.sex,
      'は、どこにいる。',
    ]);
    await era.printAndWait([
      '藁にもすがる思いで、',
      you.get_colored_name(),
      ' は顔を上げ、あたりを見回した。',
    ]);
    await coffee.say_and_wait([
      'トレーナー',
      you.adult_sex_title,
      '、あなたはもう……別の世界に……私は友達を通して……話して……',
    ]);
    era.printButton('「別の世界……死んだのか？」', 1);
    await era.input();
    await coffee.say_and_wait([
      'いいえ……日が落ちるまでなら……まだ……トレーナー',
      you.adult_sex_title,
      '、私は直接は助けられません……落ち着いて……幻覚に惑わされないで。彼らも直接は……対処を見つければ、きっと……',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' の声は次第に消えた。だが ',
      you.get_colored_name(),
      ' は、もう一度気を持ち直した。',
    ]);
    await era.printAndWait([
      '気力を振り絞り、周囲の怪異をできるだけ無視して、',
      you.get_colored_name(),
      ' はすべての始まり——影を考えた。',
    ]);
    await era.printAndWait([
      'そうだ、影。いま ',
      you.get_colored_name(),
      ' に起きている唯一の異変だ。手を上げて見る。指の隙間の陰は残っている。服の皺も光との対比ではっきり見える。失ったのは、足元から広がる、全身の影だけだ。',
    ]);
    await era.printAndWait('あるいは、精神や魂の意味での「影」か？');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' の言う「別の世界」と合わせると、いまいるのは怪異が作った隔絶された世界で、影の消失はその束縛の印なのかもしれない。',
    ]);
    await era.printAndWait('筋は通った。次は抜け出す方法だ。残り時間は……');
    await era.printAndWait(
      '遠くで、夕陽が地平線に触れようとしている。あと数分しかない。',
    );
    await era.printAndWait([
      '全身で心臓の激しい鼓動を感じ、アドレナリンが血とともに巡る。',
      you.get_colored_name(),
      ' は深く息を吸い、目を閉じた。',
    ]);
    await era.printAndWait(
      '光があれば影があるなら、精神の影が消えた今は、心の窓を閉じるべきではないか。',
    );
    await era.printAndWait([
      '記憶の道を辿り、',
      you.get_colored_name(),
      ' は目を閉じたまま、トレセンの方角へ急いだ。',
    ]);
    await era.printAndWait([
      '男の怒号、女の悲鳴、子供の泣き声、老人のため息。さまざまな声が麻縄のように ',
      you.get_colored_name(),
      ' の耳へ入り、この空間の悪意を感じさせた。',
    ]);
    await era.printAndWait([
      '目を開けて安心を得たい欲求をこらえ、',
      you.get_colored_name(),
      ' は速度を上げた。',
    ]);
    await era.printAndWait([
      '結果は意外なほど順調だった。この怪異は、',
      you.get_colored_name(),
      ' に直接手を出せないらしい。',
    ]);
    await era.printAndWait([
      '耳元で何かが割れる音がしたあと、すべてが静まった。',
      you.get_colored_name(),
      ' は目を開けた。空はもう暗く、傍の通行人が、道端でずっとぼうっとしていた変人を不思議そうに見ている。',
    ]);
    await era.printAndWait('足元を見ると、影はきちんとそこにあった。');
    await era.printAndWait('終わったらしい。');
    await coffee.say_and_wait([
      'おかえりなさい、トレーナー',
      you.adult_sex_title,
      '……',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' の声が、後ろから届いた。',
    ]);
    await era.printAndWait([
      '振り返ると、',
      coffee.sex,
      'は割れたお守りを手に、',
      you.get_colored_name(),
      ' から二メートルも離れていない位置で、様子を見ていた。',
    ]);
    era.printButton('「また、助けられたな……」', 1);
    await era.input();
    await era.printAndWait([coffee.get_colored_name(), ' は首を振った。']);
    await coffee.say_and_wait([
      'そう言わないでください。戻る方法を見つけたのは、トレーナーさんの意志です……むしろ、今回危険に遭ったことには、私にも責任が……',
    ]);
    await coffee.say_and_wait([
      'トレーナー',
      you.adult_sex_title,
      ' は、彼らにとって、私の想定以上に魅力的でした……あの夜は私が呼び寄せたのだと思っていました。でも……もっと早く気づいていれば、今日のことは起きなかったかもしれません……',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は、',
      coffee.get_colored_name(),
      ' が前に言いたかったことがわかった。問題は自分にあると思い、他人を巻き込みたくなくて、近づくなと言ったのか。いい子だ……',
    ]);
    era.printButton('「じゃあ、この先も似たことが起きる……んだな？」', 1);
    await era.input();
    await coffee.say_and_wait('あるかもしれません……');
    await coffee.say_and_wait(
      'で、でも！ 私はこれからも助けます。だから、どうか……',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' が慌てるのを心配したのか、',
      coffee.get_colored_name(),
      ' はすぐ後の言葉を足した。',
    ]);
    await era.printAndWait([
      '急に切迫した',
      coffee.uma_sex_title,
      'を見て、',
      you.get_colored_name(),
      ' の胸には、意外なほど未来への恐怖がなかった。今回無事に抜けられたせいで度胸がついたのか。それとも ',
      coffee.get_colored_name(),
      ' と、',
      coffee.sex,
      'の言う「友達」への、わけのわからない信頼か。',
    ]);
    await era.printAndWait([
      'とにかく、',
      you.get_colored_name(),
      ' はある可能性を思いつき、目の前の',
      coffee.teen_sex_title,
      'に分けた。',
    ]);
    era.printButton(
      '「世話になった以上、こちらも釣り合う返礼をしないと……」',
      1,
    );
    era.printButton(
      '「俺が君のトレーナーになる、というのはどうだ？ こう見えても、トレーニングには少し心得がある」',
      2,
    );
    await era.input();
    await era.printAndWait([
      '予想外の募集を聞いて、',
      coffee.get_colored_name(),
      ' は驚いて目を見開いた。それから何か気づいたように、人のいない片隅を見た。しばらくの沈黙のあと、',
      coffee.teen_sex_title,
      'は返事をした。',
    ]);
    await coffee.say_and_wait([
      'それでは、トレーナー',
      you.adult_sex_title,
      '……あの子に、追いつくのを手伝ってくれますか？ 私の……友達に。',
    ]);
    await era.printAndWait([
      '友達。',
      you.get_colored_name(),
      ' はまた ',
      coffee.get_colored_name(),
      ' の口からその言葉を聞いた。',
    ]);
    await era.printAndWait([
      '怪異を身をもって味わった ',
      you.get_colored_name(),
      ' が、それを',
      coffee.sex,
      'の空想だと思うはずもない。それに',
      coffee.sex,
      'の話では、友達は危険から ',
      you.get_colored_name(),
      ' を二度助けた存在だ。',
    ]);
    await era.printAndWait('ならば、答えははっきりしている。');
    era.printButton(
      `「やってみよう……！ 友達でも、他の強い${coffee.uma_sex_title}でも、超えるところまで連れていく！」`,
      1,
    );
    await era.input();
    await coffee.say_and_wait([
      '……はい！ それでは、よろしくお願いします、',
      callname,
      '！',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' へ手を伸ばした。',
      coffee.sex,
      'が ',
      you.get_colored_name(),
      ' の前で初めて笑った。暗い黄色い瞳にも、光が差した。',
    ]);
    await era.printAndWait('ドン——');
    await era.printAndWait([
      you.get_colored_name(),
      ' も手を伸ばし、',
      coffee.get_colored_name(),
      ' と握手した瞬間、何かが肩を軽く叩いた。',
      you.get_colored_name(),
      ' は思わずよろめいた。',
    ]);
    await era.printAndWait('——頼んだよ。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は誰の声も聞いていない。だが、そんな想いだけは感じ取れた。',
    ]);
    await era.printAndWait([
      'これが友達か。',
      you.get_colored_name(),
      ' はあたりを見回しても、相手の姿は見えない。',
    ]);
    await era.printAndWait([
      'これから',
      coffee.sex,
      'と、奇妙な時間を過ごすことになるらしい。',
    ]);
  },
};
