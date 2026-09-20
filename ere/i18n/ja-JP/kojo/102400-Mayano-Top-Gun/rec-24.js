/**
 * @file マヤノトップガン - 募集
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_start(maya, you) {
    const ret = [];
    await era.printAndWait(
      `今日は、将来有望なウマ娘を見極め、発掘するための選抜レースの日だ。どんなウマ娘に出会えるのか——${you.name} は胸を高鳴らせながら、会場へ向かった。`,
    );
    await maya.say_and_wait(
      'イヤだイヤだイヤだ————！マヤもレースに出たい！出してよ！！',
    );
    await era.printAndWait(
      `選抜レース係員A「だから、${maya.name} さん！勝手にレースに割り込まないでください！うっ、この身のこなし、柔軟すぎる……！」`,
    );
    await maya.say_and_wait(
      'イヤだイヤだイヤだ～！マヤも心臓がバクバクするやつ、やりたいの～！！',
    );
    await era.printAndWait(
      `少し離れたところで、${maya.name} というウマ娘が係員と押し問答している……あれ、${maya.sex}、こっちに走ってきた？`,
    );
    await maya.say_and_wait('ふんふん、捕まらないもんね～！……わあっ！？');
    await era.printAndWait(
      `${you.name} は、逃げ回ろうとした ${maya.name} とぶつかり、慌てて受け止めた。少女の柔らかい身体との密着は、${you.name} にかつてない衝撃を——物理的な意味で——与えた。`,
    );
    await maya.say_and_wait('あわわわ、ごめんね——！大丈夫！？');
    era.printButton('「トレセンのトレーナーだ、このくらいなんともない！」', 1); //無意味なネタ選択肢
    era.printButton('「大丈夫、君も怪我はないか？」', 2);
    ret.push(await era.input());
    if (ret.at(-1) === 1) {
      await era.printAndWait(
        `実戦空手の父、大山倍達はかつてこう説いた。破壊力＝速度×握力×体重。`,
      );
      await era.printAndWait(
        `ウマ娘、とりわけ中等部のウマ娘の体重は、どれほどか。30kg？ 35kg？ どう考えても40kgは超えないだろう。`,
      );
      await era.printAndWait(
        `だが、${maya.couple_title}が背負う願いと祝福と意志を足せば、そのUma-Soulの重量は400kgを下らない！`,
      );
      await era.printAndWait(
        `人間の三倍の速度、三倍の握力、三倍の体重。足せば人間の十倍、いや九倍をゆうに超える！`,
      );
      await era.printAndWait(
        `これほど強く、これほど豪快な衝撃を、${you.name} がどう受け止められた？ 受け止められるわけがない！`,
      );
      if (
        (ret['down'] =
          era.get(`base:0:耐力`) <= Math.random() * era.get(`base:24:力量`))
      ) {
        era.printButton('「だから、止まっちゃダメなんだ……」', 1); //BGMフリージア
        await era.input();
        await era.printAndWait(
          `${maya.sex}の速さは、本物だった……それが ${you.name} の最後の思考だった。`,
        );
        await era.printAndWait(
          `${you.name} の目の前が暗転し、意識は途切れた……`,
        );
      } else {
        //プレイヤーのスタミナ対トップガンのパワー判定。成功で追加ステータス。筋には影響しない
        await era.printAndWait(
          `だが ${you.name} は受け止められる！ だって ${you.name} は、クソほど強いんだから！`,
        );
        await era.printAndWait(
          `こんな小さなウマ娘ひとりで、${you.name} に傷ひとつ付けられるはずがない。`,
        );
        era.printButton('「ウマ娘を守るのが、俺の使命だからな！」', 1);
        await era.input();
      }
    }
    await maya.say_and_wait('うん、マヤは大丈夫！ 受け止めてもらったから……');
    await maya.say_and_wait(
      `えへへ。やさしいね！ 新人トレーナーさん？ マヤはね、名前は ${maya.name}（Mayano Top Gun）だよ`,
    );
    await era.printAndWait(
      `選抜レース係員A「あ、ちょうどいい！ トレーナーさん！ この子を見ててくれませんか、勝手にレースに出ないように！？ お願いします！」`,
    );
    era.printButton('「イヤだイヤだイヤだ！」', 1); //メスガキの技を以てメスガキを制す
    era.printButton('「わかった、任せてくれ。」', 2);
    ret.push(await era.input());
    if (ret.at(-1) === 1) {
      await era.printAndWait(`大人の崩壊は、たいてい一瞬だ……`);
      await era.printAndWait(
        `代わり映えのない退屈な日々、過密な仕事、新米特有の不安。それだけで ${you.name} の精神は、とっくに崖っぷちだった。`,
      );
      await era.printAndWait(
        `係員の押し売りがその最後の一押しになった。これから毎日、こき使われ、雑用係にも劣る端役に落ち、最後は蹴り飛ばされる——そう思うと、絶望が ${you.name} の胸を埋め尽くした。`,
      );
      await era.printAndWait(
        `${you.name} は地面に丸まり、何十歳にもなって子供のように泣いた。`,
      );
      await maya.say_and_wait('えっ……？');
      await era.printAndWait(`係員も ${maya.name} も、言葉を失った。`);
      await era.printAndWait(
        `だがトレセンの係員は経験豊富で、おかしな事態には慣れている。`,
      );
      await era.printAndWait(
        `選抜レース係員A「そうだ！ ${maya.name} さん、このトレーナーさんの世話を頼めないかしら？」`,
      );
      await maya.say_and_wait('？');
      await era.printAndWait(
        `選抜レース係員A「人の世話ができると、大人っぽく見えるわよ？ ${maya.name} さんの魅力を見せる、絶好のチャンスよ！」`,
      );
      await maya.say_and_wait('おお！ I copy！');
      await era.printAndWait(
        `経緯はどうあれ、係員は ${maya.name} をその場から引き離す目的を果たし、急いで立ち去った。`,
      );
      await maya.say_and_wait('ほらほら、もう泣かないで……');
      await era.printAndWait(
        `少女は不器用に ${you.name} を抱き寄せた。まだ発達しきっていない胸でも、十分に温かく、柔らかい。`,
      );
      await era.printAndWait(
        `ウマ娘から漂う淡い香りに包まれ、${you.name} は妙な安心を覚えた。`,
      );
      era.printButton('「ママ……」', 1);
      await era.input();
      await maya.say_and_wait(
        'ママはここだよ～、いい子いい子……えへへ、なんだか大人になったみたい～',
      );
      await era.printAndWait(
        `${maya.name} に慰められ、${you.name} の心はほどけ、意識もゆっくりと薄れていった……`,
      );
    } else {
      await maya.say_and_wait(
        'えええっ！？ ちょっと待って！ なんで引き受けたの！？',
      );
      await maya.say_and_wait('もう、やさしいトレーナーさんだと思ってたのに！');
      await era.printAndWait(
        `ひと騒動あったものの、結局 ${maya.name} はレースに出られず、選抜レースは ${maya.name} を外したまま始まった……`,
      );
      await maya.say_and_wait(
        'あー、いいなあ、レースいいなあ。マヤも出たいよ～。つまんない。',
      );
      await maya.say_and_wait(
        'ねえねえ、せめてマヤとお話しよ！ なんか面白い話題ない？',
      );
      await era.printAndWait(
        `${you.name} が困っていると、${maya.name} はふとレース場のほうを見て、小さく口を開いた。`,
      );
      await maya.say_and_wait('ん？ 今、二番手の子——');
      await era.printAndWait(
        `${maya.name} の言葉を聞いて、つい二番手のウマ娘へ目をやる。`,
      );
      await era.printAndWait(
        `あの位置なら、タイミング次第で、先頭の突き上げを止められるかもしれない。`,
      );
      await era.printAndWait(
        `それに——うまくいけば、前が一気に開けて、その優位のまま最後の直線に入れる。`,
      );
      await maya.say_and_wait(
        'ちょうどいいときに『ビュン』って踏み出して、あとは『バビュン』って走ればいいはず。',
      );
      await maya.say_and_wait('ちょうどいいとき……あ、今！！');
      await era.printAndWait(`？？？「うっ……動きが……！！」`);
      await maya.say_and_wait('あー————惜しい～');
      await era.printAndWait(
        `……あのウマ娘は失敗したが、${maya.name} の読んだタイミングは完璧だった。`,
      );
      await maya.say_and_wait('あーあ、いいなあいいなあ！ マヤもレース出たい');
      era.printButton('（君は、いったい……？）', 1);
      await era.input();
      await maya.say_and_wait('え？ ……じっとマヤ見て、なに？');
      await maya.say_and_wait(
        'もしかして……これが伝説のひとめぼれ！？ きゃー☆マヤってモテるね',
      );
      await era.printAndWait(
        `まだ言葉にはしきれないが、レースの展開を完全に読み切っていた ${maya.name}。`,
      );
      await era.printAndWait(
        `${maya.sex}が見せた才能の一端が、${you.name} の胸に深く残った……`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_after(maya, you) {
    await era.printAndWait(
      `${maya.name} は ${you.name} に強い印象を残した。もう一度会いたくて、${you.name} は学園内を探し回った……`,
    );
    await maya.say_and_wait('え、へん？ あなた、もしかして――');
    await maya.say_and_wait(
      'やっぱり！ 選抜レースのときの人！ わー————また会えたね～！ ここでなにしてるの？',
    );
    era.printButton('「君を探しに来たんだ。」', 1);
    await era.input();
    await maya.say_and_wait(
      'え、マヤを？ わあっ……なんか————ちょっと大人っぽい～！！ きゃ～～～♪',
    );
    await maya.say_and_wait(
      `でもでも、マヤ、今ちょっと急ぎなの。${you.name} さんとお話ししたいんだけど、うーん……`,
    );
    await maya.say_and_wait('あ、そうだ！ 一緒に来ればいいんだ！');
    await maya.say_and_wait('決めた————！ それじゃあ、Take Off……————！！');
    await era.printAndWait(
      `こうして ${you.name} は、わけもわからず${maya.sex}にレース場まで引っ張られた……`,
    );
    await maya.say_and_wait(
      'そっか、あそこからもシュッて——飛び出していいんだ。マヤ、知らなかった……！',
    );
    await maya.say_and_wait(
      'やっぱり、大人のウマ娘たちのレース、超ワクワクする～！！',
    );
    await era.printAndWait(
      `${maya.name} は、一流のウマ娘たちが激しく競うレースから、目を輝かせて離さない……`,
    );
    await maya.say_and_wait(
      'うぅ～、ワクワクするレースに出てるお姉ちゃんたち、キラキラしてる～！！ いいなあ、マヤもキラキラしたい……！',
    );
    era.printButton('「ワクワク？ キラキラ？」', 1);
    await era.input();
    await maya.say_and_wait(
      'うん！ こういう大きなレースだと、マヤの知らないことがいっぱい起きて、本当にワクワクするの！',
    );
    await maya.say_and_wait(
      'マヤの知らないことを知ってる、そういう大人のウマ娘たち、すごくキラキラして見える～！',
    );
    await maya.say_and_wait(
      'だからね、マヤもああなりたい！ ワクワクするレースに出て、キラキラしたい！',
    );
    await maya.say_and_wait(
      'はあ～、いいなあ。トゥインクル・シリーズ……マヤも早くあそこで走りたいよ～！',
    );
    await era.printAndWait(
      `教官A「あ！ ${maya.name} さん！ またトレーニングをサボったな！」`,
    );
    await maya.say_and_wait(
      'えー、トレーニング……？ ダメ！ マヤ、絶対やだ。つまんないもん。',
    );
    await maya.say_and_wait(
      'マヤはレース場たんけんするの————。バイバーイ————！！',
    );
    await era.printAndWait(`教官A「待て！ あっ、また逃げられた……」`);
    era.printButton('「あの子、トレーニングが苦手なんですか？」', 1);
    await era.input();
    await era.printAndWait(
      `教官A「うーん……苦手なもの、というより……ないんだよな。何をやらせてもすぐ覚える、強い子なんだ。」`,
    );
    await era.printAndWait(
      `教官A「初めてダートを走ったときも要領を掴んだし、ウイナーズステージのダンスの授業でも、苦戦してるところは見たことがない。」`,
    );
    await era.printAndWait(
      `${maya.name} は生まれつき『理解』する力を持っている——つまり、${maya.sex}は『正解』を見つけ出す驚異的な直感を、生まれながらに持っている……！`,
    );
    await era.printAndWait(
      `教官A「勉強もすごい……だが、なぜかトレーニングはつまらないらしい……最初の一回のあと、一度も参加していないんだ。」`,
    );
    era.printButton('「一回だけ、ですか！？」', 1);
    await era.input();
    await era.printAndWait(
      `教官A「そうなんだよ……だから模擬レースを含む、すべてのレースへの出走を止められている。」`,
    );
    await era.printAndWait(
      `レースはトレーニングの成果を出す場だ。その判断も、わからないではない……`,
    );
    await era.printAndWait(
      `だが ${you.name} の脳裏には、レースに出たがる ${maya.name} の姿が浮かぶ……${maya.sex}のために、何かできないだろうか……？`,
    );
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_3(maya, you) {
    await maya.say_and_wait('やっほー♪ 最近よく会うね。');
    await maya.say_and_wait(
      '今ね、下のレース場の模擬レース見てるの。だってマヤ、また出られないし——。',
    );
    await maya.say_and_wait('いいなあ～、マヤもレース出たい。でも――');
    era.printButton('「どうしてもトレーニングはやりたくないのか？」', 1);
    await era.input();
    await maya.say_and_wait('……やりたくない。');
    await maya.say_and_wait(
      'やらないとダメって言われたから、最初はちゃんと出たよ？',
    );
    await maya.say_and_wait(
      'でも、あのことって一回やれば全部わかっちゃうの。わかっちゃったら、つまんないよ。',
    );
    await maya.say_and_wait('つまんないことずっとやって、なにになるの？');
    await era.printAndWait(
      `${maya.name} は何をしてもすぐに『正解』がわかり、しかもうまくこなせる。`,
    );
    await era.printAndWait(
      `おそらく${maya.sex}は、積み重ねた努力の先に何かを得た経験が、ほとんどない。`,
    );
    await era.printAndWait(
      `だから努力の意味がわからず、トレーニングは退屈で苦しいとしか思えないのだろう……`,
    );
    await maya.say_and_wait(
      '……ちゃんとトレーニングしてるみんなと同じじゃないとダメ、マヤもそう思ったことあるよ？',
    );
    await maya.say_and_wait(
      'でも、どうしてもつまんないんだもん。意味ないって、ずっと思うの。',
    );
    await maya.say_and_wait(
      '……みんなと違うから、ダメなの？ マヤは、キラキラしたウマ娘になれないの……？',
    );
    era.printButton('「正直に言うと、そうだな」', 1); //ネタ選択肢。筋には影響しない（初期好感に効くかも？）
    era.printButton('「そんなことない！！」', 2);
    if ((await era.input()) === 1) {
      //天皇玉音放送
      await era.printAndWait(
        `要するになまけものだ。なまけてないならトレーニングしろ。レースのためだろ、レースのためなら走れ、やれ。学校行かなくていいのか？ レース出たいんだろ、突き抜けたいんだろ？`,
      );
      await era.printAndWait(
        `自分で考えてみろ、なまけものじゃないか。寝ててトレーニングに出てこない。午後はゲーム、夜はドラマ。三食とも学園で、ルームメイトに飯まで取ってこさせてる。なまけもの以外のなにかがあるか？`,
      );
      await era.printAndWait(
        `スキル、身についたか自分で思え。同級生は夜中に走って周回してるだろ。小さいランプ、充電式のランプ、USBのランプをつけて読んでる奴もいる。`,
      );
      await era.printAndWait(
        `お前は？ ベッドの上でルームメイトと夜更かしゲーム。なまけものじゃないわけがない。レースのときになって「明日抜かせて、スキルないから」——あれもこれもできない。要するになまけものだ。トレーニングに入らず、遊びたいだけ。`,
      );
      await era.printAndWait(
        `ゲームしてる時間をトレーニングに回せ。大人の真似に使ってる気力をトレーニングに回せ。そしたら上がるか、上がらないか。G1、勝ってるかもしれねえぞ。`,
      );
      await era.printAndWait(
        `言っとくが、人間はみんななまけものだ。ただ、それに気づいてる奴と、気づいてない奴がいる。`,
      );
      await era.printAndWait(
        `とはいえ、トレーナーとして、${you.name} は${maya.sex}を放っておけない。`,
      );
    } else {
      await maya.say_and_wait('わっ！ び、びっくりした。');
      await maya.say_and_wait(
        'そんな大きい声、出せるんだ。やさしい感じなのに……',
      );
    }
    await maya.say_and_wait(
      '……ねえねえ。あなたも、マヤにトレーニングしてほしいの？',
    );
    era.printButton('「してほしい」', 1); //選択の余地なし
    era.printButton('「すごくしてほしい」', 2);
    await era.input();
    await maya.say_and_wait('うーん————……そっか。');
    await maya.say_and_wait(
      '……いいよ？ マヤの話、聞いてくれるなら、トレーニングする！',
    );
    era.printButton('「話？」', 1);
    await era.input();
    await maya.say_and_wait('うん♪ ねえねえ～');
    await maya.say_and_wait('マヤと、駅までデートしよ！！');
    era.printButton('「いいよ」', 1);
    era.printButton('「用事がある、今回はパス」', 2);
    const ret = await era.input();
    if (ret === 2) {
      await maya.say_and_wait(
        'え……わかった……でも空いたら絶対マヤとデートだよ！ You copy？',
      );
    }
    return ret;
  },
  /** @param {CharaTalk} maya */
  async rec_try_skip_station(maya) {
    await maya.say_and_wait(
      'あっ！ あなただ！ マヤと駅に行く約束したのに…………マヤ、ずっと待ってたよ？',
    );
    await maya.say_and_wait('マヤはもう大人だから、多くは言わないけど…………');
    await maya.say_and_wait('でも約束したんだから、忘れちゃダメだよ？');
  },
  /**
   * @param {CharaTalk} maya
   * @param {CharaTalk} you
   */
  async rec_station(maya, you) {
    await era.printAndWait(
      `${you.name} は、${maya.name} との約束を思い出した。`,
    ); //駅に行くたびに発生。3を選ばない限り。招きたくないなら、なぜ押すのか.jpg
    await era.printAndWait(`約束を果たしに行くか？`);
    era.printButton('行く', 1);
    era.printButton('今回はパス', 2);
    era.printButton(`面倒だ。もう${maya.sex}には会いたくない`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(`駅前――`);
      await maya.say_and_wait('Landing！！ おまたせ♪');
      await maya.say_and_wait(
        'えへへ、今日は付き合ってくれてありがとう！ 大人のウマ娘みたいなデート、一回やってみたかったんだ——♪',
      );
      await era.printAndWait(
        `${maya.name} の耳がワクワクと揺れ、身体も軽く揺れている。本当に興奮しているらしい。`,
      );
      await maya.say_and_wait(
        'ねえねえ、どこ行く！？ おしゃれなお店でお買い物、キラキラしたスイーツ店めぐり、どっちも欠かせないよね！',
      );
      await maya.say_and_wait(
        'あと、ロマンチックな映画も見なきゃ——？ 大人っぽいカフェでお茶もしたい……うぅぅ、もう嬉しくなってきた～～！！',
      );
      await maya.say_and_wait(
        'はやくはやく、のんびりしてたら一日終わっちゃう！ それじゃ行くよ、Take Off——————！',
      );
      await era.printAndWait(
        `それから ${you.name} は、${maya.name} のすさまじい勢いに引っ張られ、街をはしごした……`,
      );
      await maya.say_and_wait(
        '見て見て、あのTシャツ超かわいい～！ あ、あれジュース屋さん！？ ニンジンジュース売ってるかな——！？',
      );
      await maya.say_and_wait(
        'ん？ くんくん……いいにおい——！ こっちからだ！ 見に行こ見に行こ～！',
      );
      await maya.say_and_wait(
        'はやくはやく、ぼーっとしてちゃダメ！ ちゃんとマヤについてきてよ♪',
      );
      await maya.say_and_wait(
        'どれ見よっか——！？ うーん、全部おもしろそう～っ、あっ！？',
      );
      await maya.say_and_wait(
        'あわわわ、よ、予告の画面に、キスシーン……！ 見えちゃった～！！ うぅ、顔熱い……！',
      );
      await era.printAndWait(
        `キスの画面を見ただけで真っ赤になる ${maya.name} には、やっぱり子供っぽいところがある。`,
      );
      await maya.say_and_wait(
        'アイス、何玉がいい？ 1玉？ 2玉？ 3玉！？ 3玉にしよ！ ねえ、決めた！！',
      );
      await maya.say_and_wait(
        'どれにしよう～。イチゴおいしそう……バニラも～、チョコクッキーも～',
      );
      await maya.say_and_wait(
        'え、チーズケーキ味、期間限定！？ ……ねえねえ、やっぱり4玉にしよ～！！',
      );
      await era.printAndWait(
        `${you.name} は一日中、${maya.name} に引っ張られ続けた……`,
      );
      await maya.say_and_wait('ああ～、楽しかった——！！');
      await maya.say_and_wait(
        'あなた、すごいよ——！ マヤの全力についてこれた人、マーベちゃん以外だと初めてかも！',
      );
      era.printButton('「途中で倒れるかと思った……」', 1);
      await era.input();
      await maya.say_and_wait(
        'あはは、そうなの！？ じゃあ、すごく頑張ってくれたんだ——！ ありがとう。',
      );
      await maya.say_and_wait(
        '……ねえねえ。あなた、なんでそんなにやさしいの？ なんでマヤとデートしてくれたの？',
      );
      await maya.say_and_wait(
        'やっぱり、マヤが『話聞いてくれたらトレーニングする』って言ったから？',
      );
      era.printButton('「ちょっと違うな。」', 1);
      await era.input();
      await maya.say_and_wait(
        'ちょっと違う？ どういうこと？ マヤにトレーニングしてほしくて、デートしたんじゃないの？',
      );
      await maya.say_and_wait('そうじゃないなら、なんで来てくれたの？');
      era.printButton('「君に、夢を諦めさせたくないから！」', 1);
      await era.input();
      await maya.say_and_wait('夢……？');
      await maya.say_and_wait('マヤの、夢……');
      await era.printAndWait(
        `${maya.name} は口を閉じ、考え込むようになった。そして――`,
      );
      await maya.say_and_wait('……そっか。');
      await maya.say_and_wait('うん……今日は、本当にありがとう——！');
      await maya.say_and_wait('明日、一緒にトレーニングしよ！');
    }
    return ret;
  },
};
