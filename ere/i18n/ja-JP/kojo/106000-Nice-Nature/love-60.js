/**
 * @file ナイスネイチャ - 恋慕
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  async 49(nature, you, callname, self_call) {
    const ret = [];
    await nature.print_and_wait([
      'ある夜、',
      nature.get_colored_name(),
      ' は、自分の ',
      you.get_colored_actual_name(),
      ' への想いが、担当の枠を少しはみ出していることに気づきはじめていた。',
    ]);
    await nature.print_and_wait([
      you.sex,
      ' と過ごした時間を思い出すたび、淡い温もりが、気づかないうちに胸の奥へ浮かんでくる。',
    ]);
    await nature.say_and_wait([callname, '……']);
    await nature.print_and_wait(
      'ひとりごとで名前を呼ぶだけでも、その顔がはっきりと目の前に浮かぶ。',
    );
    await nature.print_and_wait(
      'それは年頃の淡いときめきなのか、それとも毎日隣にいたせいで生まれた錯覚なのか。',
    );
    era.println();

    era.printButton(
      `「あたし、${callname} のことが好きみたい……」（関係を進める）`,
      1,
    );
    era.printButton(
      `「ううんううん、${self_call}がそんな気持ちになるわけないでしょ？」（まだ進めない）`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '明かりの下で、',
        nature.teen_sex_title,
        'は大事にしている紙のトロフィーをいじりながら、思わずつぶやいていた。',
      ]);
      await nature.say_and_wait([
        '待って！ 今なんて言ったのあたし！ 恋してる',
        nature.teen_sex_title,
        'みたいじゃない！ あたし、そういう役じゃないってば！',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'は言葉を必死に否定する。それでも、想いの種はもう、静かに芽を出していた……',
      ]);
      era.drawLine({ content: 'それから少しして……', position: 'left' });
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は自室のベッドにひとり座っていた。もともと薄着の',
        nature.sex,
        'は、灰色のショートパンツに手をかけ、下着ごと下ろす。',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'の手にはTシャツ。想いを寄せる相手の、その一枚。',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'はTシャツを鼻先に押し当てたまま、すでに湿りはじめた秘部へ手を伸ばす。入口をこすり、ときには突起を指ではさみ、行為は少しずつ深くなっていく。',
      ]);
      nature.say(['トレーナー、', you.adult_sex_title, '、もっと……ほしい……']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' の手は、もう真っ赤に充血し蜜を滴らせる秘所を、乱れながら刺激し、一段ずつ先へ進んでいく。',
      ]);
      await nature.print_and_wait([
        '十分に緩んだと判断したのか、',
        nature.sex,
        'はより快感の得られる場所へ指を沈める。吸い込まれた指が内壁と擦れ、粘る音を立てた。',
      ]);
      await nature.say_and_wait('ん～～～～！！');
      await nature.print_and_wait([
        'はっきりと絶頂を迎えた ',
        nature.get_colored_name(),
        ' は、声にならない喘ぎを漏らし、荒い息をつく。呼吸を整えるため、',
        nature.sex,
        'は一度手を止め、それからまた指を動かしはじめる。',
      ]);
      nature.say([
        callname,
        '、',
        callname,
        '……こんな下品なことしてるの、',
        callname,
        ' のこと考えて、こうなっちゃったから……',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'の中で攪拌する指が、速度を上げる。ぐちゅぐちゅと淫らな音が鳴るたび、',
        nature.sex,
        'の意識も乱れていく。',
      ]);
      nature.say([
        'あたし……あたし、',
        callname,
        ' が好き、大好き！ だから、もっと激しく……！',
      ]);
      nature.say(['いく、いく、', callname, '、いっちゃう～～～～！！']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は体を反らせ、腰を止めどなく震わせ、潮を噴き出した。シーツを汚さないよう敷いてあったタオルを越え、シーツまでびしょ濡れにする。長い絶頂に',
        nature.sex,
        'の全身が震え、満たされた余韻のなかで、',
        nature.sex,
        'は深く眠りに落ちた。',
      ]);
    } else {
      await nature.print_and_wait([
        '夜のひとりごとだろう、と ',
        nature.get_colored_name(),
        ' は布団をかぶり、雑念を振り払うように早く眠ることにした。',
      ]);
    }
    return ret;
  },
  async '74-1'(nature, you, callname) {
    const ret = [];
    await nature.print_and_wait([
      'ある夜、',
      nature.get_colored_name(),
      ' は、自分の ',
      you.get_colored_actual_name(),
      ' への想いが、恋だと気づきはじめていた。',
    ]);
    await nature.print_and_wait(
      '窓にうつぶせ、通りを隔ててまだ明かりのついたトレーナー室を眺めていると、温もりが胸を包んでいく。',
    );
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      ' の行き届いた世話を思い浮かべ、',
      nature.get_colored_name(),
      ' は、胸の内にある感情の名前を理解したようだった。',
    ]);
    era.println();

    era.printButton(`「あたし……${callname} が好き！」（関係を進める）`, 1);
    era.printButton(
      `「いやいやいや、あたしたちは${nature.uma_sex_title}と担当トレーナーの関係でしょ！ 夜になるとセンチメンタルになるよね、ほんと。早く寝よ！」（まだ進めない）`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '声はか細いが、',
        nature.teen_sex_title,
        'の覚悟ははっきりしていた。',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        'は自分の気持ちを受け入れ、何を望んでいるかもわかった。残るのは、最後のひとつ……',
      ]);
    }
    return ret;
  },
  async '74-2'(nature, you, callname, call_55) {
    const ret = [];
    await nature.say_and_wait('はぁ～～～～');
    await nature.print_and_wait([
      'トレーナー室で、',
      nature.get_colored_name(),
      ' は今日何度目かのため息をつく',
    ]);
    await nature.print_and_wait([
      '原因は、',
      nature.sex,
      'の手にある一枚の便箋だ',
    ]);
    await nature.print_and_wait(
      'ピンクの封筒にハートのシール。誰が見てもラブレターだとわかる。',
    );
    await nature.print_and_wait([
      '今朝、名前も知らない',
      nature.uma_sex_title,
      'から渡されたものだ、と',
      nature.sex,
      'は言う。',
      callname,
      'に渡してください、と。',
    ]);
    await nature.print_and_wait([
      '頼まれた以上、',
      you.sex,
      'に渡すしかない。恋する',
      nature.uma_sex_title,
      nature.child_sex_title,
      'の気持ちは、',
      nature.get_colored_name(),
      ' 自身がいちばんよく知っている',
    ]);
    await nature.say_and_wait('でも……それでも', true);
    await nature.say_and_wait(
      'トレーナーとその子が、もしうまくいっちゃったら——',
      true,
    );
    await nature.say_and_wait(
      [
        'いっそ捨てちゃおうか…いや、いや、そんなの無理。でも ',
        callname,
        ' を取られたくないよ…',
      ],
      true,
    );
    await nature.print_and_wait([
      '赤毛の',
      nature.teen_sex_title,
      'は何度も考える。正しい答えを必死に探すが、見つからない',
    ]);
    nature.say(['はぁ～～～', callname, '……']);
    era.printButton('「なに、ネイチャ、どうしたの？」', 1);
    await era.input();
    nature.say(['あ、', callname, '、聞いてよ、実はね……']);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' は言いかけて何かにはっとし、悲鳴を上げて飛びのいた。',
    ]);
    await nature.say_and_wait('あああああああ！？');
    nature.say([
      callname[0],
      callname[0],
      callname[0],
      callname,
      '！ いつからいたの！？',
    ]);
    era.printButton('「今来たところ。ん？ その手紙は……？」', 1);
    await era.input();
    await nature.say_and_wait(
      'いまさら隠しても遅い。こんなデザイン、すぐラブレターだとバレる……',
      true,
    );
    era.printButton('「かわいい便箋だね。ファンレター？」', 1);
    await era.input();
    await nature.say_and_wait('まさか、気づいてない。', true);
    await nature.say_and_wait('ちがう、ファンレターじゃなくて……');
    era.printButton('「違うの？ じゃあ何の手紙？」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      ' から二球目の直球を投げられ、',
      nature.get_colored_name(),
      ' は、さっき反射で否定した自分を後悔する。もう逃げ場がない',
    ]);
    await nature.say_and_wait('うん、これは……');
    await nature.say_and_wait(
      [you.sex, 'に、こんな形で渡すことになるなんて'],
      true,
    );
    await nature.print_and_wait([
      '自業自得、と',
      nature.teen_sex_title,
      'は思いつつも、覚悟を決めて手紙を ',
      callname,
      ' に渡した。',
    ]);
    await nature.say_and_wait('その……ラブレター……');
    era.printButton('「え？ ラブレター？ やっぱりネイチャはモテるなあ。」', 1);
    await era.input();
    await nature.say_and_wait([
      'ちょっと！ 男の子がこんな便箋でラブレター書くわけないでしょ？ ',
      callname,
      ' 宛、あなたへの！',
    ]);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' は混乱しすぎて、手紙を卓に乱暴に置いてしまった。',
    ]);
    era.printButton('「僕への……ラブレター？」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      ' は便箋を丁寧に見つめ、その顔に浮かんだ笑顔が、',
      nature.get_colored_name(),
      ' の胸を締めつける',
    ]);
    era.printButton('「ありがとう、すごく嬉しい。」', 1);
    await era.input();
    await nature.say_and_wait('やっぱり、こういうの貰うと嬉しいんだ？');
    era.printButton(
      `「可愛い${nature.uma_sex_title}${nature.child_sex_title}、できれば好きな${nature.uma_sex_title}${nature.child_sex_title}からなら、すごく嬉しいよ。」`,
      1,
    );
    await era.input();
    await nature.say_and_wait(
      ['好きな', nature.uma_sex_title, nature.child_sex_title, '……そうなんだ'],
      true,
    );
    await nature.say_and_wait(
      [
        callname,
        ' の好きな',
        nature.uma_sex_title,
        nature.child_sex_title,
        'が',
        nature.sex,
        'にラブレターを渡した。お互いの気持ちを知ったふたりは両想い……',
      ],
      true,
    );
    await nature.say_and_wait(
      '最初から、あたしに勝ち目なんてなかったんだ……',
      true,
    );
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' の胸の痛みは限界だが、それでも会話を続ける……',
    ]);
    await nature.say_and_wait([
      'そっか、',
      callname,
      '、好きな',
      nature.uma_sex_title,
      nature.child_sex_title,
      '、',
      nature.sex,
      'も可愛いんだし、お似合いじゃない？',
    ]);
    era.println();

    era.printButton(
      '「え……？ このラブレター、ネイチャがくれたんじゃないの？」（関係を進める）',
      1,
    );
    era.printButton(
      '「いたらいいんだけどね。残念、今はそういう相手はいないよ。」（まだ進めない）',
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.say_and_wait('は？');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' の言葉に、',
        nature.get_colored_name(),
        ' は一瞬、頭が真っ白になる。',
      ]);
      await nature.say_and_wait(
        [callname, '、あたしが書いたラブレターだと思ってる？'],
        true,
      );
      await nature.say_and_wait(
        [callname, '、ラブレターをもらって喜んでる？'],
        true,
      );
      await nature.say_and_wait(
        [
          callname,
          ' は、好きな',
          nature.uma_sex_title,
          nature.child_sex_title,
          'からのラブレターだと思って、嬉しいって？',
        ],
        true,
      );
      await nature.say_and_wait(
        [
          '——つまり、',
          callname,
          ' の好きな',
          nature.uma_sex_title,
          nature.child_sex_title,
          'は……',
        ],
        true,
      );
      await nature.print_and_wait([
        '前後の筋をようやくつなぎ合わせた ',
        nature.get_colored_name(),
        ' は、一瞬で顔を真っ赤にした。',
      ]);
      await nature.say_and_wait([
        'あー！ そういえば、',
        call_55,
        ' が用事あるんだった～！ ごめん！',
        callname,
        '！ ちょっと行ってくる！ 今夜ご飯作るから、そんとき会お！',
      ]);
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' の言葉を遮り、',
        nature.get_colored_name(),
        ' はトレーナー室から飛び出した',
      ]);
      await nature.print_and_wait(
        '走って走って、商店街で足が止まり、力なく座り込む',
      );
      await nature.say_and_wait(
        'あたしバカ？ なんで逃げるの？ 受け止めればよかったのに？ あー！ さっき夜ご飯作るって言っちゃったし！',
      );
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は頭をかきむしる。この流れで夜に ',
        you.get_colored_actual_name(),
        ' に会いに戻ったら、答えの準備ができてるってことになる……',
      ]);
      await nature.say_and_wait([
        'もう、振り返らない。前に進もう。',
        callname,
        ' がくれた全部に、報いるために。',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は覚悟を決める…立ち上がり、文具店へ向き直った。',
      ]);
      await nature.print_and_wait('自分の気持ちを乗せる便箋を買うために。');
      await nature.say_and_wait(
        'それから……念のため、下着も替えとこう……た、ただの念のためだから……',
      );
    } else {
      await nature.say_and_wait('えっ？ そうなの？');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' の答えは ',
        nature.get_colored_name(),
        ' の予想外で、胸の締めつけが一気に緩んだ。',
      ]);
      await nature.say_and_wait('そっか……えへへ、じゃあ……まだチャンスあるね。');
      era.printButton('「ん？ 何のチャンス？」', 1);
      await era.input();
      await nature.say_and_wait('ひみつ！');
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は悪戯っぽい笑顔に切り替え、軽く跳ねるようにトレーナー室を出ていった',
      ]);
      await nature.say_and_wait(
        'でも、これじゃ悠長にしてられない。動かないと……',
      );
    }
    return ret;
  },
  async 89(nature, you) {
    await nature.print_and_wait([
      '夜、',
      nature.get_colored_name(),
      ' は押し入れから、少し年季の入ったクッキー缶を取り出し、大切に卓へ置く。',
    ]);
    await nature.print_and_wait([
      '缶のなかには折り紙のトロフィーが整然と重なっている。どれも ',
      you.get_colored_actual_name(),
      ' との軌跡で、どれもかけがえのない思い出だ。走ってきたレースだけでなく、ふたりで過ごした幸せな時間まで、そこにしまわれている。',
    ]);
    await nature.print_and_wait([
      'このコレクションがこれからもっと増えていくと思うと、笑みが自然に',
      nature.sex,
      'の頬へ浮かぶ。',
    ]);
  },
};
