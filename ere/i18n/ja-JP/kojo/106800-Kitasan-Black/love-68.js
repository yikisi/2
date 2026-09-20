/**
 * @file キタサンブラック - 恋慕
 * @author 小黑
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '愛欲';
    /** @param {CharaTalk} kita キタサンブラック */
    const f = async (kita) => {
      await kita.say_and_wait('あっ……んうっ……ううう……');
      await era.printAndWait([
        '体が火照った ',
        kita.get_colored_name(),
        ' は、ベッドの上で自分を弄り、絶頂に達した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '熱恋';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(['ん……', callname, '……', callname, '……ああ……']);
      await era.printAndWait([
        '布団の中で ',
        you.get_colored_name(),
        ' の名前を呟き、',
        kita.get_colored_name(),
        ' は唇を噛んで絶頂した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, callname) => {
      await kita.say_and_wait([
        'う……うう……',
        callname,
        '、',
        callname,
        ' うおおおお～',
      ]);
      await era.printAndWait([
        kita.get_colored_name(),
        ' は敏感な場所を必死に揉み、匂いの濃い汁を布団の中へ勢いよく噴き出した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  m_kita_notify: (kita) => [
    kita.get_colored_name(),
    ' を何度かいじめたあと、発情期に駅へ行くと、思いがけないことが起きるかもしれない！',
  ],
  m_kita: (() => {
    const title = 'いじめられ好きのキタ';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `校門で ${kita.name} と約束し、今日は一緒にデートするはずだった。`,
      );
      await era.printAndWait(
        `だがなぜか、今日のキタはマスクをつけ、しきりに周囲を見回している。`,
      );
      await era.printAndWait(
        `担当が ${you.name} を置いて女子トイレへ何往復したあと、${you.name} はついに少女を引き止め、何が起きたのか尋ねた。`,
      );
      await kita.say_and_wait(
        `トレーナー${you.adult_sex_title}……その、えっと……`,
      );
      await kita.say_and_wait(`キタ、たぶん発情期みたいです……うう……`);
      await kita.say_and_wait(
        `薬を飲んでもだめです。道でトレーナー${you.adult_sex_title}の匂いを嗅いだだけで欲しくなって、どうしたらいいですか……`,
      );
      await era.printAndWait(
        `マスクを外すと、キタの熟れた発情の匂いが、服に籠もった雌の臭いと混ざり、空気の中で目に見える熱気になる。`,
      );
      await era.printAndWait(
        `${you.name} は呼吸し、空気に広がるキタの濃い汗の匂いを嗅ぎ、下半身が熱に反応して立ち上がる。`,
      );
      await era.printAndWait(
        `JK${kita.uma_sex_title}A「ねえ……空気、なんか臭くない？」`,
      );
      await era.printAndWait(
        `JK${kita.uma_sex_title}B「あ、ほんとほんと。何の匂いだろう。」`,
      );
      await era.printAndWait(
        `通りかかったウマ娘JCが鼻を顰めたので、${you.name} は急いで服で発情中のキタを覆い、走り去った。`,
      );
      era.println();
      await era.printAndWait(
        `二人きりのカプセルホテルで、顔を真っ赤にした ${kita.name} は、${you.name} の両脚のあいだに脚を擦り合わせながら座っている。`,
      );
      await era.printAndWait(
        `今のキタには普段の機転がまったくなく、可愛い口をわずかに開き、発情したあとの狐のような下品な表情を浮かべている。`,
      );
      await era.printAndWait(
        `私服のせいもあって、通気のいい白いTシャツはすでに汗で完全に透けていた。`,
      );
      await era.printAndWait(
        `薄い生地が体の曲線に密着し、キタの胸の、豊かに張り出した乳肉を晒している。`,
      );
      await era.printAndWait(
        `普段から大切に扱われている淫らに熟れた双丘は、レースのブラにきつく包まれて押し合い、乳の香りの混じった汗を滲ませる。`,
      );
      await era.printAndWait(
        `トレーナーの視線に気づいたのか、キタは両脚を閉じ、咽び声を漏らす。`,
      );
      await kita.say_and_wait(
        `ん……んうっ……欲しい……トレーナー${you.adult_sex_title}が欲しい……あっ……`,
      );
      await era.printAndWait(
        `突然、${kita.name} が胸を上下に揺らし、肥えた白い兎のような双丘がブラから飛び出す。`,
      );
      await era.printAndWait(
        `ウマ娘のほぼ媚びた表情。さっきまで呼吸の荒かった少女が腕で重い胸を捧げる。大きく目立つ乳首が生地の上に、はっきりした突起を作る。`,
      );
      await era.printAndWait(
        `それから ${you.name} は、温かく柔らかい感触と、わずかに硬くなった乳首が掌を擦る感触を覚えた。`,
      );
      await era.printAndWait(
        `発情で目の焦点が定まらない ${kita.name} は舌を出し、少し間の抜けた顔で雪白の柔らかい乳房を捧げ、トレーナーの腕に擦りつける。`,
      );
      await era.printAndWait(
        `少女の誘う谷間が胸の圧迫で深くなり、ずっしりした実在感が ${you.name} の腕に擦れる。微かな汗臭さの混じった乳の香りが鼻孔に流れ込み、興奮を煽る。`,
      );
      await you.say_and_wait(`俺の担当は、本当に下品な子だな。`);
      await era.printAndWait(
        `小さく嘲り、${you.name} は手を上げて ${kita.name} の立ち上がった乳首を摘まみ、彼女に顔を仰向けさせて、聞いていられないほど淫らな悶え声を出させる。`,
      );
      await era.printAndWait(
        `肉付きのいいふくらはぎがわずかに上がり、男らしいと呼ばれてきたキタの口から雌の絶頂の声が出る。鼓膜を刺すほどの大きさだ。`,
      );
      await era.printAndWait(
        `乳首を弄ばれるウマ娘は支配された顔になり、トレーナーの遊びの下で、ただの役立たずの牝馬に落ちる。`,
      );
      await era.printAndWait(
        `腥く粘る蜜がソファに広がり、脚のあいだの愛液を抑えられない ${kita.name} は太い尻を捻り、乳首を指先に摘ままれた瞬間、歓喜の喘ぎを噴き出した。`,
      );
      await kita.say_and_wait(
        `トレーナー${you.adult_sex_title}、イく、イく、いひょおおおおうううう！？`,
      );
      await era.printAndWait(
        `濁った雌汁が ${kita.name} の両脚のあいだから噴き出し、ウマ娘の脳を不可逆に変えていく。`,
      );
      await era.printAndWait(
        `少女の首をトレーナーが強く締め、${kita.name} は背を反らすしかなく、死んだ魚のように痙攣しながら尻を前後に揺らし、今日最初の絶頂を迎えた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} you プレイヤー */
  async m_kita_end(you) {
    await era.printAndWait(
      `今日はこれでいいかもしれない。${you.name} は喘ぐ少女を抱えてベッドに寝かせ、少女の匂いだらけの自分を、駿川さんにどう説明するか考える。`,
    );
  },
  nyotaimori_notify: (kita) => [
    kita.get_colored_name(),
    ' を何度かいじめたあと商店街へ行くと、思いがけないことが起きるかもしれない！',
  ],
  nyotaimori: (() => {
    const title = '「簡単な」食事';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name} と約束し、商店街の店で簡単に食事をするはずだった……`,
      );
      await era.printAndWait(`怪しい店ではあるが、見た目には問題なさそうだ。`);
      await era.printAndWait(
        'ウェイトレス「あら、キタサンさんとトレーナーさんですね？女体盛り、一卓ご用意できていますよ。」',
      );
      era.println();
      era.printButton('「女体盛り！？」', 1);
      await era.input();
      await era.printAndWait(
        `女体盛り、文字どおり女体を皿にする料理で、多くは刺身が中心だ。芸者の習わしとして文化的には説明できる……`,
      );
      await era.printAndWait(`いやいや、いくらなんでもこれはやりすぎだろう？`);
      await era.printAndWait(
        `全然合理的じゃない！？バレたらトレセンから追放されるし、キタも「トレーナーが変態」という汚名を着せられる！`,
      );
      await era.printAndWait(
        `だが担当の怪力が ${you.name} を引き戻す。振り返ると、キタの真剣で揺るがない眼差しがあった。`,
      );
      era.println();
      await kita.say_and_wait(
        `トレーナー${you.adult_sex_title}、ずっとボクが悩んでるときに助けてくれて、鍛えてくれて、本当にありがとうございます！`,
      );
      await kita.say_and_wait(
        `だから今回はトレーナーさんに、キタの敬意が伝わる贈り物をしたいんです。驚かないでくださいね！`,
      );
      await era.printAndWait(
        `慌てる ${you.name} を見て、${kita.name} は微笑みながら ${you.name} の手を握り、常人より高い体温で掌を温める。`,
      );
      await era.printAndWait(
        `${you.name} は心を鬼にして断とうとするが、担当の頼みを前に、どうしても口に出せない。`,
      );
      await era.printAndWait(
        `担当が ${you.name} に目隠しの黒い布をかけてから、${you.name} は手を引かれてキタの用意した部屋へ連れていかれ、箸を一本握らされた。`,
      );
      await era.printAndWait(
        `十分ほどの不安と細かな物音のあと、${you.name} は担当の声でようやく布を外した。`,
      );
      era.println();
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait(
        `鼻を突く酒の香りとともに、雪白の女体が木の皿の上に仰向けになり、${you.name} の正面を向いている。`,
      );
      await era.printAndWait(
        `黒髪の少女の顔は愛らしく、体つきは豊かでしなやか、M字に開かれた太腿は長く真っ直ぐだ。`,
      );
      await era.printAndWait(
        `だが ${you.name} の真正面にある肉感たっぷりの丸い尻を見た瞬間、自分の担当——${kita.name} だと分かった。`,
      );
      await kita.say_and_wait(`んっん……はうっ……いひ～`);
      await era.printAndWait(
        `無色の雫が少女の裸の首筋をゆっくり滑り、冷たい清酒を吹きかけられた肌が温度で微かに震え、担当は苦しげな顔を見せる。`,
      );
      await era.printAndWait(
        `太ももをきつく抱えてV字を作り、トレーナーの前で尻を高く上げた ${kita.name} は、まるで美味しそうな七面鳥だ。見ているだけで食欲が湧く。`,
      );
      await era.printAndWait(
        `水滴は丘のように盛り上がった乳の根元で止まり、醬色の肉汁と混ざる。だが ${you.name} の目は、食材の艶に吸い寄せられる。`,
      );
      await era.printAndWait(
        `ウマ娘の張りのある豊かな乳肉の上に、薄切りと小切れの醬牛肉が双丘を覆い、桃色の乳首だけを残している。`,
      );
      await era.printAndWait(
        `桜のような可愛い乳先が空気に晒され、牛肉の陰で乳輪は見えず、摘みたての石榴の粒のように瑞々しい。`,
      );
      await era.printAndWait(
        `視線を胸から外すと、鮮やかな赤のマグロ赤身が、少女の体の曲線にぴったり張り付いている。`,
      );
      await era.printAndWait(
        `贅肉のない腰と腹が、いま盛り合わせの主体になり、鯉のように整った形を作っている。`,
      );
      await era.printAndWait(
        `色とりどりの刺身とカニミソが、キタの小さく縦長の臍を中心に密着し、香ばしい酒滴の下で独特の匂いを放つ。`,
      );
      await era.printAndWait(
        `${kita.name} の大切な子宮は特別に印され、『ここをマッサージして❤️』のワインレッドの判が押されている。`,
      );
      await era.printAndWait(
        `判の両側は、少女の厚く淫らな白い尻と、V字に開かれた長く締まった太ももだ。`,
      );
      await era.printAndWait(
        `${kita.name} の動きの下で、雄に種付けされる心地よさを求めて進化した——子を産むために特化した安産型のウマ娘の太い尻が、覆いもなく ${you.name} の前に晒されている。`,
      );
      await era.printAndWait(
        `${you.name} の侵略的な視線を感じたのか、キタの熟れた桃のような尻が、${you.name} の前で意味のない可憐な抵抗を見せる。`,
      );
      await era.printAndWait(
        `薄く切られた鮪が少女の尻の肉色を透かし、下品な曲線にぴったり張り付く。`,
      );
      if (era.get('relation:68:0') > 376) {
        await era.printAndWait(
          `太腿に押し出されて膨らんだ饅頭のような秘部は、小さく開閉しながら ${you.name} の寵愛を歓迎している。`,
        );
        await era.printAndWait(
          `淫らな蜜が、蚌のように白い肉穴から溢れ、少女だけの色情な桃色を濡らす。`,
        );
        await era.printAndWait(
          `わずかに立ち上がった陰核は、${you.name} の箸の前では滑稽な小さな騎士で、軽く突けば媚びて敗れるだろう。`,
        );
      } else {
        await era.printAndWait(
          `少女の両脚のあいだの大切な秘所は、いま蕾のように慎重に隠されている。`,
        );
        await era.printAndWait(
          `雪白で香りのいい蚌肉が、収縮する穴の動きとともに、${kita.name} の下品な桃色の中を出入りしている。`,
        );
        await era.printAndWait(
          `もともと濃く締まった白い軟肉は、ウマ娘の淫らな雌の醬に浸されたあと、見ているだけで罪になる。`,
        );
        await kita.say_and_wait(`んうっ……`);
        await era.printAndWait(
          `キタの臆病な呻きとともに、二枚の色情な穴肉はいま柔らかい蚌殻になり、美味しい真珠を奥へ飲み込む。`,
        );
        await you.say_and_wait(
          '人魚の姫は、こんな貴重な秘宝をあまり見せたくないらしいな。',
        );
        await era.printAndWait(`${you.name} は思わず冗談を言った。`);
      }
      await era.printAndWait(
        `視線をさらに下へ移すと、${kita.name} 最大の弱点が無防備に ${you.name} の前へ晒されている。`,
      );
      await era.printAndWait(
        `${kita.name} の下にある極めて敏感な第二の性器として、キタの尻穴は厚く、柔らかく弾む。`,
      );
      await era.printAndWait(
        `${kita.name} の前穴が大切に守られた秘境なら、後ろ穴は精を搾る天国だ。`,
      );
      await era.printAndWait(
        `陥没乳首のように貴重で、わずかに突き出したドーナツ型の尻穴は、穴肉の吸い付きだけで精を早漏させるに足りる。`,
      );
      await era.printAndWait(
        `淫らな尻肉の圧搾も加わり、キタの肛門はベッドの上では人殺しの魔器と言っていい。`,
      );
      await era.printAndWait(
        `キタの桃色く敏感なしわの上に、美味しい大トロが汚れた溝に沿って平らに敷かれている。`,
      );
      await era.printAndWait(
        `女将の優れた包丁さばきが、いちばん貴重な部分を細く切っても途切れさせず、咲いた花のように穢れた後庭で開かせている。`,
      );
      await era.printAndWait(
        `一口にも満たない小さな料理が尻穴の収縮とともに蠕動する。隅々まで丁寧に洗ったあと、${kita.name} の尻穴に汚いところは一つもない。`,
      );
      await era.printAndWait(
        `ウマ娘の桃色い尻穴は縮んで張り、${you.name} を喜ばせる皿としての役目を果たしている。`,
      );
      await era.printAndWait(
        `${you.name} の箸が少女の臍の上を回り、担当のかわいい抵抗の中で、この豊かな宴を味わおうとする。`,
      );
      await era.printAndWait('美味しい（いろいろな意味で）時間を過ごしたあと');
      await era.printAndWait('結論として、確かに美食だった。');
    };
    f.title = title;
    return f;
  })(),
};
