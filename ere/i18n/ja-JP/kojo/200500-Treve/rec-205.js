/**
 * @file トレヴ - 募集
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} taste 秋川やよい／北方の味
   * @param {CharaTalk} may サタケメイ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
   */
  async rec(treve, taste, may, you, callname) {
    const ret = [];
    await era.printAndWait(
      `ある休日、${you.name} は ${taste.name} とパリ・トレセン学園公式の連絡メールを同時に受け取った。`,
    );
    await era.printAndWait('文面は違うが、伝えたいことは一つだ。');
    if (era.get('flag:当前声望') >= 1000) {
      await era.printAndWait(
        `短期間で国際G1を連勝した ${you.name} は、すでに各国の競馬界が無視できない存在になっている。`,
      );
    }
    await era.printAndWait([
      '先日、パリ・トレセン学園の院長が ',
      taste.get_colored_name(),
      ' と会談した。その結果——',
    ]);
    await era.printAndWait(
      `近く、優秀なフランスの幼駒が中央へ交流に来る。${you.name} はその責任者として、双方の窓口を任された。`,
    );
    await era.printAndWait([
      '理事長の幼馴染——',
      may.get_colored_name(),
      ' が、最初から最後まで ',
      you.get_colored_name(),
      ' を補佐する。',
    ]);

    await era.printAndWait('パリへ向かうか？');
    era.printButton('はい', 1);
    era.printButton('いいえ', 2);
    ret.push((ret['foreign'] = await era.input()));
    if (ret['foreign'] === 1) {
      await era.printAndWait(
        `${you.name} はスーツケースを引き、リュックを背負って列車を降り、混雑する人の流れに乗って駅を出た。`,
      );
      await era.printAndWait(
        '辺りを見回す。出迎えの人も車も多いが、パリ・トレセンの職員がどこにいるか分からない。',
      );
      await era.printAndWait(
        `${you.name} は少し後悔した。${may.name} が送ると言ったのを、${you.name} はきっぱり断ったのだ。`,
      );
      await era.printAndWait(
        'この歳なら、昔も遠出はした。この程度は乗り越えられる、と思っていた。',
      );
      await era.printAndWait(
        'ところが列車の前にバスを一本乗り、昼も食べず、水だけ飲んでいた。',
      );
      await era.printAndWait('いま、空腹はないが、ひどく疲れている。');
      await era.printAndWait(
        `${you.name} は日差しの下へ出て、大きな日傘を一つ一つ確かめる。`,
      );
      era.println();
      await era.printAndWait(
        `ようやく ${you.name} はパリ・トレセン学園の送迎地点を見つけた。日傘がいくつか並んでいる。`,
      );
      await era.printAndWait('およそ二時間半して、車が止まった。');
      await era.printAndWait('着いた。面会場所は校長室だ。');
      await era.printAndWait(
        `引き継ぎを終え、${you.name} は仮の拠点へ向かう。`,
      );
      await era.printAndWait(
        'パリ・トレセンは校区が大きいだけでなく、寮も数棟に見えて、実際は中央の寮よりずっと広い。',
      );
      await era.printAndWait('雀は小さくない。臓も揃っている。');
      await era.printAndWait(
        'ベッドはダブルサイズで、脇に机とクローゼット、バルコニーもある。',
      );
      await era.printAndWait(
        `${you.name} のフランス・トレセンの旅が、本格的に始まった。`,
      );
      era.drawLine();
      if (era.get('flag:当前声望') >= 1000) {
        await era.printAndWait(
          `${you.name} のトレーナー歴は、もう短いとは言えない。長い歳月に洗われれば、あの取るに足らない功績も、誰にでもできたことだったと思いたくなる。`,
        );
      }
      await era.printAndWait(
        '身震いしながら椅子から立ち上がり、部屋の隅に掛けたコートを取る。窓の外は陰った空だ。灰色の光が、寂しいトレーナー室に落ちている。',
      );
      await era.printAndWait(
        '秋が近い。外套なしでは、震え始めたこの体は耐えられそうにない。',
      );
      await era.printAndWait(
        `ハンガーに掛けた中折れ帽をかぶり、右手に封筒を持って出る。ドアを閉じる瞬間、${you.name} は少し長くこの部屋を見つめた。どれも、大して意味のないものだ。`,
      );
      await era.printAndWait(
        '外でいちばん近い場所を探すと、競馬場の歓声が聞こえる。',
      );
      await era.printAndWait(
        `${you.name} は何かあったのかと考えたが、まったく見当がつかない。`,
      );
      await era.printAndWait('仕方なく、記憶を少し遡る。');
      era.printButton('「メイクデビューか？」', 1);
      await era.input();
      await era.printAndWait(
        `大勢の${treve.uma_sex_title}が実戦に近いレースで実力を示し、発掘の機会を受ける。若いトレーナーたちが集まる、あの場所だ。`,
      );
      await era.printAndWait(
        '運動場とはまったく逆の方向へ歩きながら、発掘に熱中していた昔を思い出す。',
      );
      await era.printAndWait('嫌でも分かる。自分はこの場所に向いていない。');
      await era.printAndWait(
        `石畳を歩き、体操着の${treve.uma_sex_title}たちとすれ違う。`,
      );
      await era.printAndWait(
        `そのときまた何かが ${you.name} の耳を刺激する。ポケットに入れたスマホの着信音だ。`,
      );
      await era.printAndWait(
        `相手を確認せずに出るのは、${you.name} が情報に左右される職業病だ。`,
      );
      await era.printAndWait('受け取った電話。');
      era.printButton('「もしもし。」', 1);
      await era.input();
      await taste.say_and_wait('詫 び！ちょっとお願いがあるの。');
      await era.printAndWait([
        taste.get_colored_name(),
        '。見た目は普通の学園理事長だが、組織と才能と眼力を考えれば、間違いなく唯一無二の存在だ。',
      ]);
      await era.printAndWait(
        `${you.name} は深く息を吐く。さっきの安寧とは違い、分かりやすい力で、不愉快な種類のそれだ。`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await taste.say_and_wait(
        `報 告！実はね、そちらの${treve.uma_sex_title}に、メイクデビューはすごくいいのに、誰も声をかけていない子がいるの。実力は強くて、レースも一位だったらしいのに、なぜ発掘されないのか、不思議でしょう？`,
      );
      era.printButton('「理事長が内定してるからだろう。」', 1);
      await era.input();
      await taste.say_and_wait(
        `冗 談！それは……とにかくあなたには実力があるから、そちらで${treve.sex}を預かってもらえないかと思って。`,
      );
      await era.printAndWait(
        'この若作りの耳の穴は、空気を通すために開いているのか。',
      );
      await era.printAndWait(
        `なぜフランスの${treve.uma_sex_title}を、この土地に来たばかりのトレーナーに預けるのか。`,
      );
      await era.printAndWait(
        `${you.name} の顔は他人から見れば明らかに歪んでいて、恐ろしい。${treve.uma_sex_title}たちは次々と避ける。`,
      );
      await era.printAndWait(
        `歩きながら電話を続け、道端のベンチに座ったところで、対岸に同じく座っている${treve.uma_sex_title}と目が合う。`,
      );
      await era.printAndWait(
        `${you.name} は手の電話を軽く揺らし、栗毛の${treve.sex}はそれに頷く。`,
      );
      await era.printAndWait(
        `とりあえず、このまま電話しても ${you.name} の迷惑にはならない。`,
      );
      era.printButton('「実力次第だ。」', 1);
      await era.input();
      await taste.say_and_wait(
        `賛 辞！特に頭が良くて、レース展開がとても上手。${treve.sex}の冷静な走りは新人らしくなくて、教官もすぐ教えることがなくなったの。`,
      );
      await era.printAndWait(
        `${you.name} は聞いているだけで優秀な${treve.uma_sex_title}だと思う。それで発掘されていないなら、つまり……`,
      );
      era.printButton('「性格に問題がある。」', 1);
      await era.input();
      await taste.say_and_wait('否 定！自信もあるわ。');
      era.printButton('「脚に不安がある。」', 1);
      await era.input();
      await taste.say_and_wait('健 康！何も問題ないわ');
      era.printButton('「なら、なぜ発掘されない？」', 1);
      await era.input();
      await taste.say_and_wait('残 念！私も知りたいのよ！');
      await era.printAndWait(
        '電話の向こうから溜息が聞こえる。本当に自信があるらしい。',
      );
      await era.printAndWait(
        `そう言われると、${you.name} はどんな${treve.uma_sex_title}なのか気になる。`,
      );
      await era.printAndWait(
        '基本は断るつもりだが、少なくとも一度は会ってみよう。',
      );
      await era.printAndWait(
        '自分が担当しなくても、この学園のちょうどよさそうな知人に紹介できるはずだ。',
      );

      era.printButton('「どんなやつだ？」', 1);
      await era.input();
      await taste.say_and_wait(
        `回 想！ええ、栗毛の${treve.uma_sex_title}。ただ髪色は明るめで、ローズゴールドみたいな感じ。`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は顔を上げ、さっき電話の許可を得た',
        treve.uma_sex_title,
        'と目を合わせる。',
      ]);
      await era.printAndWait('栗色。明るい髪色。');
      era.printButton('「……他は？」', 1);
      await era.input();
      await taste.say_and_wait('特 徴！後ろ髪に小さな結びが二つあるの。');
      await era.printAndWait(`${treve.sex}の二つの結びが風に揺れる。`);
      era.printButton('「……まだある。」', 1);
      await era.input();
      await taste.say_and_wait(
        '補 足！耳飾りはね、左が白い帽子と赤いリボン。これが特徴的だから、すぐ分かるわ。',
      );
      await era.printAndWait(
        '白い帽子と赤いリボンも揺れて、濃い青の線がはっきり見える。',
      );
      await era.printAndWait(
        `ずっと見つめられているのに、その栗毛の${treve.uma_sex_title}は泰然と ${you.name} を見ている。`,
      );
      await era.printAndWait(
        `アクアマリンの目が、微動だにせず ${you.name} の方を向いている。`,
      );
      await taste.say_and_wait(
        `ど う？そちらの学校は大きいでしょう。今メイクデビューしている${treve.uma_sex_title}も多いし、見つけるのは難しいかも。`,
      );
      era.printButton('「……いや、すぐ見つかると思う。」', 1);
      await era.input();
      await taste.say_and_wait('完 璧！見つかるならいいわ。じゃあね。');
      await era.printAndWait(
        `${you.name} は無機質な発信音とともに電話を切る。`,
      );
      await era.printAndWait(
        `ゆっくりスマホをしまい、両手を組んで、石段の歩道を隔てて向かい合う${treve.sex}と、改めて向き合う。`,
      );
      era.printButton('「すみません——ここで何を？」', 1);
      await era.input();
      await era.printAndWait(
        `その${treve.uma_sex_title}は口に手を当て、答えを考える。`,
      );
      await treve.say_as_unknown_and_wait(
        'ええ、メイクデビューには勝ったんですけど、どのトレーナーも私の担当にはなってくれなくて。今は、ある大人物が探してくれている人を待っているところです……',
      );
      era.printButton('「俺だ。」', 1);
      await era.input();
      await treve.say_as_unknown_and_wait('え？');
      era.printButton('「その馬鹿理事長に呼ばれたトレーナーが、俺だ。」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.sex}は一瞬だけ、小さな口を開けて目を見開く。`,
      );
      await era.printAndWait(
        `地元のトレーナーに囲まれるはずが、こんな外国人では、${treve.sex}は失望するかもしれない。`,
      );
      await era.printAndWait(
        `だがそれは杞憂だった。${treve.sex}は立ち上がり、${you.name} へ歩み寄って右手を差し出す。`,
      );
      await era.printAndWait(
        `微笑む顔に不純物はない。${you.name} は、その純粋さに焼かれる感覚を知った。`,
      );
      await treve.say_and_wait(`私は ${treve.name}、はじめまして！`);
      era.printButton(
        `「……${you.actual_name}。中央トレセンのトレーナーだ。」`,
        1,
      );
      await era.input();
      await era.printAndWait(`両手を振ったあと、再び${treve.sex}と握手する。`);
      era.printButton('「大体は聞いた……発掘されていないのは本当か？」', 1);
      await era.input();
      await treve.say_and_wait(
        '本当です。挨拶してくれたトレーナーはいましたけど、誰も私の担当トレーナーにはなりませんでした。',
      );
      await era.printAndWait(
        `${you.name} は会話が通るか不安だったが、初対話に特別な障害はなかった。`,
      );
      era.printButton('「何があった？」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.name} は ${you.name} の目を真っ直ぐ見て、遠慮なく答える。`,
      );
      await treve.say_and_wait('凱旋門賞で勝ちたいんです。');
      await era.printAndWait(
        `一言で、どのトレーナーにも拾われなかった理由が分かる。${you.name} は顔を覆いたくなった。`,
      );
      await era.printAndWait(
        `${treve.sex}は純粋すぎる。おそらく最大の原因は、この自己売込みの仕方だ。`,
      );
      await era.printAndWait(
        `慌てる ${you.name} に、${treve.name} は首を傾げる。`,
      );
      await treve.say_and_wait(
        'そういえば、みんなこんな感じでした……でも、凱旋門賞を目指すのがそんなにおかしいですか？',
      );
      era.printButton('「おかしくはない。」', 1);
      await era.input();
      await era.printAndWait(
        `やり方が悪い。${you.name} は先に${treve.sex}と同じベンチに座り、それから ${you.name} を見る ${treve.name} に向き直る。`,
      );
      era.printButton(`説明を展開する`, 1);
      await era.input();
      await you.say_and_wait(
        `聞け。凱旋門賞はこの国、いや世界中の${treve.uma_sex_title}の目標だ。芝の中距離を主戦場とする${treve.uma_sex_title}なら、最後に辿り着くのは必ず凱旋門賞だ。`,
      );
      await era.printAndWait(
        `もちろん、頷く${treve.sex}の素質はまだ不明だ。だがそんな目標を立てられるなら、芝中距離には相当の自信があるのだろう。`,
      );
      await era.printAndWait(
        `だが、${treve.uma_sex_title}の実力だけでは足りない。`,
      );
      era.printButton(`「だが——凱旋門賞への挑戦は、賭けに近い。」`, 1);
      await era.input();
      await you.say_and_wait(
        `各国の${treve.uma_sex_title}のデータを集め、それに特化したトレーニングを組まなければ、あのレースに勝つのはほぼ不可能だ。メイクデビューに勝ったばかりの${treve.uma_sex_title}に、その膨大な労力を割ける人間はいない。`,
      );
      await era.printAndWait(
        `トレーナーは基本、複数の${treve.uma_sex_title}を担当する。凱旋門賞への挑戦がチームの効率を大きく落とすのは周知で、平均成績のために国際レースには出ない、と明言するトレーナーもいる。`,
      );
      await era.printAndWait(
        `最初から凱旋門賞を目指す ${treve.name} は、彼らの地雷を踏んだと言っていい。`,
      );
      await treve.say_and_wait('……');
      await era.printAndWait('要するに、初期目標が大きすぎてはいけない。');
      await era.printAndWait(
        'たとえば普通のG1を勝ちたい、と言うだけなら、トレーナーに拾われるのも難しくないだろう。',
      );
      await era.printAndWait(
        'フランス国内、あるいはイギリスやドイツのレースで実力をつけ、熟練の領域に達してから凱旋門賞へ挑む、と言えば、首を振る人も減る。',
      );
      await era.printAndWait(
        `${you.name} は、素直すぎるのも問題だと思いながら続ける。`,
      );
      era.printButton('「他のトレーナーを紹介できる……」（募集を諦める）', 1);
      era.printButton('「そんなに凱旋門賞で勝ちたいのか？」', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        await era.printAndWait(
          `${treve.name} のさっきの沈みようは、嘘のようだ。`,
        );
        await era.printAndWait(`${you.name} のその一言に反応し、目が輝く。`);
        await treve.say_and_wait('絶対です！');
        await era.printAndWait(
          'なら、下手に目標を隠すより、最初から凱旋門賞を目指すと本人の動機を示す方がいちばんだ。',
        );
        await era.printAndWait(`それを否定したのは ${you.name} だ。`);
        era.printButton(
          '「……まあ、凱旋門賞を目指しても余裕のあるトレーナーに会えればいいんだが。」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${you.name} が立ち上がろうとした瞬間、${treve.name} が焦ってコートの裾を掴む。`,
        );
        era.printButton('「どうした？」', 1);
        await era.input();
        await treve.say_and_wait('あなたに発掘してもらうのは……');
        await era.printAndWait('どこか、濡れた小動物を想像してしまう。');
        await era.printAndWait('正直で実力があり、志も高い。');
        await era.printAndWait(
          `${treve.name} は必死に考えている。ここまで拒まれても、なお。`,
        );
        await era.printAndWait(
          `${treve.sex}は ${you.name} を救助船だと思っているのかもしれない。だがこの泥船は沈みかけている。`,
        );
        await era.printAndWait(
          `他にも${treve.sex}に期待するトレーナーはいるはずだ。`,
        );
        await era.printAndWait('そのとき、トレヴが指を鳴らした。');
        await treve.say_and_wait(
          'フランスに来たということは、今は暇なんですよね？',
        );
        era.printButton('「そうだな。」', 1);
        await era.input();
        await era.printAndWait('この無礼な言い方は、とりあえず無視する。');
        await treve.say_and_wait(
          'でもパリ・トレセンから指導支援金は出ますよね？',
        );
        era.printButton('「……そうだ。」', 1);
        await era.input();
        await treve.say_and_wait('では、それを全部私にください！');
        await era.printAndWait(
          `両手を広げて差し出す${treve.teen_sex_title}も、今は無視する。`,
        );
        era.printButton('「断る。」', 1);
        await era.input();
        await treve.say_and_wait('どうして！');
        await era.printAndWait(
          `一歩ずつ離れようとするが、${treve.sex}にコートを引かれて動けない。`,
        );
        await era.printAndWait(
          `このまま引き裂かれたら長年の友人にも合わせる顔がない。仕方なく振り返ると、${treve.name} が再び真正面から ${you.name} の目を覗く。`,
        );
        await era.printAndWait('苦手になりそうな、澄んだ目。');
        await treve.say_and_wait(
          `では理由を差し上げます。凱旋門賞を連覇できる${treve.uma_sex_title}を担当すれば、社会人としての評価も上がりますよね？`,
        );
        era.printButton('「その自信はどこから来る？」', 1);
        await era.input();
        await era.printAndWait(
          `とはいえ、実力は ${taste.name} とレースの結果が保証している。`,
        );
        await era.printAndWait(`${you.name} は小さく息を吐き、空を仰ぐ。`);
        await era.printAndWait(
          '灰色の天井の代わりに、広い空には至る所に黒雲が散り、隙間から青空の気配が覗くだけだ。',
        );
        await era.printAndWait(
          `${treve.name} は相変わらず ${you.name} を見上げ続けている。${you.name} は……`,
        );
        era.printButton('「やはり他を当たれ。」（募集を諦める）', 1);
        era.printButton(`${you.name} を走路へ引っ張るその手を握る。`, 2);
        ret.push((ret['select'] = await era.input()));
        if (ret['select'] === 2) {
          await era.printAndWait(
            `眼前の${treve.teen_sex_title}の目が、さらに強く輝く。`,
          );
          await treve.say_and_wait('よろしくお願いします、トレーナーさん！');
          await era.printAndWait(
            `${you.name} の気持ちなど構わず、${treve.name} は ${you.name} を走路へ引っ張る。`,
          );
          await treve.say_and_wait(
            'だってトレーナーさんは、まだ私の走りを見ていないでしょう。今すぐ見なければ、何も始まりませんよ？',
          );
          await treve.say_and_wait('ほら、鉄は熱いうちに打て、です。');
          era.printButton('「熱いうちに打つのは火じゃなくて鉄だ。」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name} の自信が確かな実力に裏打ちされていることを、${you.name} が理解したのは、トレーニングを始めてからだった。`,
          );
          await era.printAndWait(
            `${treve.sex}を担当するとき、${you.name} は過去の記録とコツを参照した。`,
          );
          await era.printAndWait(
            `そして、これまでのやり方で${treve.sex}をどう指導するか考えるほど、${treve.sex}の優れた実力が分かる。`,
          );
          await era.printAndWait(
            '加速と最高速度を冷静に理解できる脚力、最後の直線でも疲れを見せない耐久、そして自分で臨機応変に戦略を立てる頭。',
          );
          await era.printAndWait(
            `${treve.uma_sex_title}に必要なものが、すべて極めて高い水準にある。`,
          );
          await era.printAndWait(
            `バランスが良いので、${you.name} はどの脚質でも好勝負が取れると思った。`,
          );
          await era.printAndWait('この脚なら、先行か差しだろう。');
          await treve.say_and_wait(
            '先行の方がいいです。集団の前の方が、外へ出しやすいので。',
          );
          await era.printAndWait(
            `${treve.name} はグラウンドを走るクラスメイトを横目に見ながら、タオルで汗を拭く。`,
          );
          await era.printAndWait(
            `体は十分強く、しかも${treve.sex}にはそれと相乗する武器がある。`,
          );
          await era.printAndWait(
            '次の模擬レースは先行策でいこう。ただし年上の相手になる……',
          );
          await treve.say_and_wait(['勝ちます、', callname, '。']);
          await era.printAndWait(
            '自分の実力を冷静に理解しているからこその自信だ。',
          );
          await era.printAndWait([
            '過剰な自尊でも謙遜でもなく、自分の精神状態を客観視できることも、',
            treve.get_colored_name(),
            ' という',
            treve.uma_sex_title,
            'の完成度を上げている。',
          ]);
          await era.printAndWait(
            `下手なトレーナーなら、ここから手を入れて${treve.sex}の才能を潰すだろう。`,
          );
          await era.printAndWait([
            '栗毛の',
            treve.uma_sex_title,
            'は練習を終えようとする ',
            you.get_colored_name(),
            ' に近づき、もう一周走りたいと ',
            you.get_colored_name(),
            ' に告げる。',
          ]);
          era.printButton('「いいが、そこまでしてなぜだ？」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name} の顔は夕陽に照らされ、いつものようにくすくす笑う。`,
          );
          await era.printAndWait(
            `${treve.sex}に残る幼さは、天与の才の象徴のようだ。${treve.name} には若さに比例する強さがある。`,
          );
          await treve.say_and_wait(
            '家族も友達も、もっとたくさんの人が私を支えてくれています。だから、みんなの期待に応えたいんです！',
          );
          await era.printAndWait(
            `そう言って走り去る${treve.sex}の背が遠ざかる。`,
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' は、その小さな姿を、',
            treve.get_colored_name(),
            ' がカーブを曲がるまで目で追っていた。',
          ]);
        }
      }
    }
    return ret;
  },
  rec_final: (() => {
    /**
     * @param {CharaTalk} treve
     * @param {CharaTalk} you
     */
    const f = async (treve, you) => {
      await era.printAndWait('学園の木々が季節の色を帯びている。');
      await era.printAndWait('淡い黄の回廊、透明な大ガラス、角のある立面。');
      await era.printAndWait('現代的な学園建築が、紺青の空と響き合う。');
      await era.printAndWait(
        '銀杏、松、中庭の枯れ木の洞も、一緒に陽を浴びている。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' は中央の制服に着替え、校舎とトレーナー室をつなぐ庭を歩く。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' の専属トレーナーになった。',
      ]);
    };
    f.title = '前人未到';
    return f;
  })(),
};
