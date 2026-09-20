/**
 * @file トレヴ - 恋慕
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  '49-1': (() => {
    const title = 'Un amour à taire（隠しておく恋）';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await treve.print_and_wait([
        'ある夜、',
        treve.get_colored_name(),
        ' は寮で、',
        you.get_colored_name(),
        ' とフランスでいっしょに聴いた歌を思い出した。',
      ]);
      era.setColor(treve.color);
      era.setAlign('center');
      await era.printAndWait(
        '過ぎた日が私たちを前へ導き、もっと醒めた目で見させる。',
      );
      await era.printAndWait(
        '疑いは危うく、命取りにもなる。感情は、それほど脆い。',
      );
      await era.printAndWait('希望に満ちていようと、運に任せようと。');
      await era.printAndWait(
        'すべては天のまま。ならば、成り行きに身を委ねよう。',
      );
      await era.printAndWait('別れと再会は、私たちの共有する記憶。');
      await era.printAndWait('愛は、私たちが思うよりずっと堅い。');
      await era.printAndWait('私のそばにいるとき、あなたは何をしているの？');
      await era.printAndWait('時が、神秘の色をまとう。');
      await era.printAndWait('柔らかい夜風が、ゆっくり通り過ぎる。');
      await era.printAndWait('愛は、私たちが思うよりずっと堅い。');
      await era.printAndWait('あるいは、籠の中で楽しく生きるのか。');
      await era.printAndWait(
        '私たちがいなければ、彼らの選択に何の意味がある？',
      );
      await era.printAndWait('愛は、私たちよりずっと強い……');
      await era.printAndWait(
        '人は、それで足りると言う。もっと愛するために、そう言う。',
      );
      await era.printAndWait(
        'だが、これは私たちの愛でなければならない。私たちより強い、その愛。',
      );
      await era.printAndWait(
        'いっしょにいる通行証があれば、それで足りると私は信じる。',
      );
      await era.printAndWait(
        '醒めた口で言うべきだ。これは全部、私たちのせいだ、と。',
      );
      await era.printAndWait('愛は、私たちよりずっと強い……');
      era.setAlign('left');
      era.setColor();
      era.println();
      era.printButton(
        `「私、こんなに単純なフランスの${treve.child_sex_title}だったのね……」（関係を進める）`,
        1,
      );
      era.printButton(
        '「余計なことを考えない。寝ないと師匠に叱られるわ。」（当面は進めない）',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  '49-2': (() => {
    const title = 'La fée（凡人を愛した妖精）';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     * @param {string} cup トレヴのカップ
     */
    const f = async (treve, you, callname, cup) => {
      const ret = [];
      await era.printAndWait([
        '風が吹き、',
        treve.get_colored_name(),
        ` の金糸を揺らす。${treve.sex}の肌は、明るい雪のようだ。`,
      ]);
      await era.printAndWait('紺碧の瞳は艶やかで、それでいて少しだけ軽い。');
      await era.printAndWait('潤んで光る唇は、ほぼ透明な美しさを見せる。');
      await era.printAndWait(
        '貌には年齢を超えた色気があり、一目で沈み込ませる。',
      );
      await era.printAndWait(
        '色の美しい短い金髪は、低い二つの髻に結ばれ、精緻な光沢を放つ。',
      );
      await era.printAndWait(
        '少女の白タイツの太ももは細くて柔らかい。フランス風の学生靴を踏み、女子らしい元気がある。',
      );
      await era.printAndWait(
        'だが眉宇は彫られたように整い、並の家が近づける貌ではない。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に微笑み、',
        you.get_colored_name(),
        ' の無礼に怒った様子はない。',
      ]);
      await era.printAndWait(
        `${treve.sex}はワンピースを着ている。肩紐が襟元で交差し、首の白いレースのカラーにつながっている。`,
      );
      await era.printAndWait('上半身はおおむね白で、胸を包んでいる。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' の腰も細い。青い革のベルトを締めている。',
      ]);
      await era.printAndWait('腰から下は、青いスカートだ。');
      await era.printAndWait('表地は宝石のような青で、これが上の層。');
      await era.printAndWait(
        '下には白いペチコートがあり、同じくレースと縁取りだ。',
      );
      await era.printAndWait('スカートは長くなく、太ももの中ほどまで。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' の脚は細い。脚には白いニーハイ——半透明だ。',
      ]);
      await era.printAndWait('靴下とスカートのあいだの脚も、格別に誘う。');
      await era.printAndWait('右脚には、白いガーターがある。');
      await era.printAndWait(
        '足元は青い靴で、白い紐が何本か足首に結ばれ、蝶結びまで付いている。',
      );
      era.printButton('「きれいだ。」', 1);
      await era.input();
      await treve.say_and_wait('ありがとう。');
      era.printButton('「でもフランスには金髪碧眼が多い……」', 1);
      await era.input();
      await treve.say_and_wait('私、きれいじゃないの？見て、見て！');
      await era.printAndWait([
        treve.get_colored_name(),
        ' は寄ってきて、上体を伏せ、顔を上げる。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        treve.get_colored_name(),
        ' の鼻先は、一寸にも満たない距離だ。',
      ]);
      await era.printAndWait([
        '下を向くと、この角度ではちょうど ',
        treve.get_colored_name(),
        ' の胸が見える。',
      ]);
      if (cup < 'D') {
        await era.printAndWait(
          `${treve.sex}の胸は大きくない。ざっと見ればBCのあいだの小鳥だ。`,
        );
      }
      await era.printAndWait(
        `だがいま${treve.sex}が前へ伏せると、見え方が変わる。`,
      );
      await era.printAndWait(
        'ワンピースに包まれた南半球と、首のカラーにつながる二本のリボンが、今にも切れそうに張っている。',
      );
      if (you.sex_code === 1) {
        await era.printAndWait([
          '男と女、二人きりでも、',
          treve.sex,
          ' は ',
          you.get_colored_name(),
          ' が度を超すことを恐れていない。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ` は目の前の${treve.teen_sex_title}を見る。目元には、`,
        you.get_colored_name(),
        ' に会うためにわざわざ付けた紅があり、かわいい。',
      ]);
      await era.printAndWait([
        '惜しいのは、ワンピースの ',
        treve.get_colored_name(),
        ' では臍が見えないことだ。',
      ]);
      await era.printAndWait('だが神は一つの扉を閉じるとき、別の窓を開ける。');
      await era.printAndWait([
        '——',
        treve.get_colored_name(),
        ' の服に袖がない。',
      ]);
      era.printButton('「脇を触っていいか？」', 1);
      await era.input();
      await treve.say_and_wait('Non，Trousseur de jupons.');
      era.printButton('「分からない。じゃあ触る。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は電光石火で両手を伸ばし、',
        treve.get_colored_name(),
        ' の両脇を襲った。',
      ]);
      await treve.say_and_wait('あっ！はははは……');
      await era.printAndWait([
        treve.get_colored_name(),
        ' は両手を素早く下ろし、脇を締め付ける。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の指をきつく挟み、それから笑い出す。',
      ]);
      await era.printAndWait('時には顔を上げ、時には伏せようとする。');
      await era.printAndWait(
        '幼いウマ娘の脇は格別に柔らかく、できたての豆腐のようだ。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に進退窮められ、左も右も取れない。両脇をがっちり押さえられている。',
      ]);
      await era.printAndWait([
        '背はすでに壁に付いている。前は ',
        you.get_colored_name(),
        ' という元凶の胸だ。',
      ]);
      await treve.say_and_wait([
        `${callname}、やめて……はははは……もう、もういい！`,
      ]);
      await treve.say_and_wait([
        'お願い……ははははは……',
        treve.get_colored_name(),
        '、お願い',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の振る舞いはますます図太くなり、',
        treve.get_colored_name(),
        ' が自分の唾でむせるまで大笑いする。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、横を向いて二度咳をした ',
        treve.get_colored_name(),
        ' を放した。',
      ]);
      era.printButton('「どうしてガーターを付けようと思った？」', 1);
      await era.input();
      await treve.say_and_wait('ん？きれいだから。');
      era.printButton('「それが何を意味するか、知ってる？」', 1);
      await era.input();
      await treve.say_and_wait('知らない。');
      await era.printAndWait('彼女は小さく首を振り、短い髪が揺れる。');
      era.printButton('「男を誘う、という意味だ。」', 1);
      era.printButton(
        '「土地によっては、娼婦が服を脱いで男と寝たあと、勘定をガーターに挟む。」',
        2,
      );
      await era.input();
      await treve.say_and_wait('そ、それなら外すわ……');
      era.printButton('「これから人前では付けるな。」', 1);
      era.printButton('「私の前では必ず付けろ。」', 2);
      await era.input();
      await treve.say_and_wait('いいわ。でも、どうして？');
      era.printButton('「私の目には、君は小さな色っぽい子だ。salope だ。」', 1);
      era.printButton(
        '「人前では快活なかわいい姫君、夜中は男とくっついている……」',
        2,
      );
      if ((await era.input()) === 1) {
        await treve.say_and_wait('うっ……そんなふうに言わないで……');
      } else {
        await treve.say_and_wait('違う、私が誘ったわけじゃない……');
      }
      era.print([
        '喉を詰まらせて泣きそうな洋種のウマ娘に、',
        you.get_colored_name(),
        ' は……',
      ]);
      era.printButton('胸を揉む', 1);
      era.printButton('脚を触る', 2);
      ret.push(await era.input());
      if (ret.at(-1)) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          treve.get_colored_name(),
          ' に靴を脱がせてベッドへ上がらせ、脚をちょうどよく開いて跪かせた。',
        ]);
        await era.printAndWait([
          `${treve.teen_sex_title}は滑らかに座り、青い裾が小さな円に広がる。`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          treve.get_colored_name(),
          ' の後ろへ回る。滑らかな背中は、とてもきれいだ。',
        ]);
        await era.printAndWait(['両手を力を入れて握り、体の両側に支える。']);
        await era.printAndWait([
          '本格化した ',
          treve.get_colored_name(),
          ' は抵抗せず、',
          you.get_colored_name(),
          ' のままにされる。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          treve.get_colored_name(),
          ' の両胸を掴み、料理の量を見るように測る。',
        ]);
        await era.printAndWait([
          'それから乱れた揉み方で捏ねる。手つきは『軽く寄せ、ゆっくり捻り、撫で、また弾く』といったところだ。',
        ]);
        await era.printAndWait([
          treve.get_colored_name(),
          ' は頭を下げなくても、自分の胸が露出していると分かる。',
        ]);
        await era.printAndWait(['円を描き、弾き、押し……']);
        await era.printAndWait([
          treve.get_colored_name(),
          ' は乳輪から途切れない快感を受けながら、姿勢を保つ。',
        ]);
        await era.printAndWait([
          `${treve.sex}はここで気づく。自分はもう手を上げて後ろの `,
          you.get_colored_name(),
          ' の頭を抱いている。降伏のような姿勢だ。',
        ]);
        await era.printAndWait([
          'そして ',
          you.get_colored_name(),
          ' は口を歪めて笑い、かなり意地が悪い。',
        ]);
        await treve.say_and_wait('やめて……');
        await era.printAndWait([
          treve.get_colored_name(),
          ' は小さく喘ぎ、両目にはすでに恋慕の色が出ている。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が軽く触れただけで、',
          treve.get_colored_name(),
          ' は快感が後頭部まで衝き上げる。',
        ]);
        era.printButton('「さあ、胸を張って、腹を引け。」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の手に従い、順に姿勢を整える。',
        ]);
        await era.printAndWait(
          `息を一度ついたあと、${treve.sex}の腹はまた一回り小さくなった。`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          treve.get_colored_name(),
          ' の腰を撫で、ベルトの位置を確かめ、そっと引く。',
        ]);
        await era.printAndWait('*カチカチ*');
        await era.printAndWait(
          `白いベルトが縮み、${treve.sex}の腰腹に再びぴたりと付くまで。`,
        );
        await treve.say_and_wait('きつい……');
        era.printButton('「きつくてこそ、立つんだ。」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          ' は腰を締められ、胸までより立つように見える。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ` は後ろから${treve.sex}を抱き、両手を交差させて白い兎を一対、握る。`,
        ]);
        era.printButton('「瑞々しい。」', 1);
        era.printButton(
          `「${treve.name} がこんなに遠慮なく胸を揉まれるのは、初めてだろう。」`,
          2,
        );
        if ((await era.input()) === 1) {
          await treve.say_and_wait('何その形容詞！');
        } else {
          await treve.say_and_wait('……うん。');
        }
        await era.printAndWait([
          '張り出した両胸が、',
          you.get_colored_name(),
          ' にさまざまな形へ掴まれる。',
        ]);
        await era.printAndWait('柔らかく、水風船のようだ。');
      } else {
        era.printButton('「それじゃ足りない。肉に食い込んでこそ淑女だ。」', 1);
        await era.input();
        await treve.say_and_wait('肉に、食い込む？');
        await era.printAndWait([
          treve.get_colored_name(),
          ' が理解する前に、',
          you.get_colored_name(),
          ' はガーターのバックルを引いた。',
        ]);
        await treve.say_and_wait('脚……だめ……');
        await era.printAndWait([
          'さっき脇を襲ったとき、',
          you.get_colored_name(),
          ' は彼女がくすぐったがりだと気づいていた。',
        ]);
        await era.printAndWait('いまも両脚が震え、体が一瞬、戦慄する。');
        await treve.say_and_wait('やめて！');
        await treve.say_and_wait(`${callname}……やめてよ、ばか！`);
        era.printButton(
          `「トレヴの罵り方はそんなに優しいの？付き合いやすいね。」`,
          1,
        );
        await era.input();
        await treve.say_and_wait('太もも内側は触らないで！やめて……');
        await era.printAndWait([
          treve.get_colored_name(),
          ' は下唇を噛み、美しい胸を上下に揺らす。',
        ]);
      }
      era.printButton('「私が聞きたい言葉を言え。」', 1);
      era.printButton('「いい言葉を言ってみせる？」', 2);
      await era.input();
      await treve.say_and_wait('……');
      await treve.say_and_wait(`${callname}……${you.actual_name}……好き……`);
      await treve.say_and_wait(`私、${callname} の担当が羨ましい……`);
      await treve.say_and_wait(
        `${treve.name} は ${you.actual_name} を見るだけで膝が緩む……`,
      );
      era.printButton('「まだ足りない。」', 1);
      era.printButton('「君自身は？」', 2);
      if ((await era.input()) === 1) {
        await treve.say_and_wait('ああああ……');
        await treve.say_and_wait(`${you.actual_name} は衆目の的のトレーナー！`);
        await treve.say_and_wait(
          `${treve.name} は進んで ${you.actual_name} の足元にひれ伏す……`,
        );
      } else {
        await treve.say_and_wait(`${treve.name}、${treve.name} 自身が大ばか！`);
        await treve.say_and_wait(
          `私……${callname} を見るだけで発情して、頭の中は糊だらけ……`,
        );
      }
      era.printButton(`「トレヴのおしっこのところを見たい。」`, 1);
      await era.input();
      await treve.say_and_wait('変態！');
      era.printButton('「誰が変態だ？」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' は満面、不満そうに口を尖らせる。',
      ]);
      await treve.say_and_wait(`${treve.name} が変態。`);
      era.drawLine();
      await era.printAndWait([
        '下着を脱ぎ、',
        treve.get_colored_name(),
        ' はベッドに横たわる。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の要求どおり、両脚を脇へ置き、膝を折る。',
      ]);
      await era.printAndWait(
        '踵は腿の付け根にぴったり付き、足裏を完全に伸ばして弛めさせない。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' の秘所は、門戸を大きく開けて ',
        you.get_colored_name(),
        ' に向いている。',
      ]);
      await era.printAndWait(
        '鮑のような秘所。疎らな金毛の下で、淡い両唇が呼吸に合わせて開閉する。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' は自ら手を枕の下に置き、抵抗しない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭を埋め、十数センチ隔てただけでウマ娘の『発情期』の気配を嗅ぐ。',
      ]);
      await era.printAndWait('淡く、少し生臭く、少し少女の芳香がある。');
      await era.printAndWait(
        '二つの大陰唇の隙間には、さらに水々しい小陰唇がある。',
      );
      await era.printAndWait('薄い縁は、近くで見ると格別に誘う。');
      await treve.say_and_wait('あっ……やめて……');
      await era.printAndWait('彼女は呼吸を速め、息が続かない。');
      era.printButton(`${treve.name} の陰唇を、リズムよく舐める。`, 1);
      await era.input();
      await era.printAndWait([
        '淡い塩味が ',
        you.get_colored_name(),
        ' の舌先に広がる。だが、これでは足りない。',
      ]);
      era.printButton(`${treve.name} の陰唇を開く。`, 1);
      await era.input();
      await treve.say_and_wait('やめて……');
      await era.printAndWait([
        you.get_colored_name(),
        ' の前にあるのは、さらに赤い柔らかい肉だ。',
      ]);
      await era.printAndWait('表面には水の層が付き、見た目は極上だ。');
      await treve.say_and_wait(`まだ……処女……${you.actual_name}、まだ……`);
      era.printButton('「分かった。いまは中には入らない」', 1);
      await era.input();
      await treve.say_and_wait('うん。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' の小陰唇は、完全に ',
        you.get_colored_name(),
        ' の舌に押されている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は続けて、陰唇に包まれて膨らんだ核に口を付け、強く吸い始める。',
      ]);
      await era.printAndWait([
        'これで、その一枚の肉が全部 ',
        you.get_colored_name(),
        ' の唇のあいだへ吸われる。',
      ]);
      await era.printAndWait('核は逃げ場がなく、丸く膨らむ。');
      await treve.say_and_wait('だめ……吸かないでええええ……');
      await treve.say_and_wait('赤ちゃん、まだ産めない……');
      await era.printAndWait([
        '何度も吸われ、',
        treve.get_colored_name(),
        ' は額まで汗だくになる。',
      ]);
      await era.printAndWait([
        'そのとき ',
        you.get_colored_name(),
        ' は、穴口を何度も撫でて通る。',
      ]);
      await era.printAndWait(
        '触れて入らない緊張が、少女を絶頂の縁へ追い込む。',
      );
      await treve.say_and_wait('やめて……やめて……');
      await treve.say_and_wait('止めて……');
      await treve.say_and_wait('イっちゃう……いく！');
      await treve.say_and_wait('明日、師匠に会わなきゃ……');
      await era.printAndWait([
        treve.get_colored_name(),
        ' は支離滅裂に言い、そして。',
      ]);
      await era.printAndWait(
        '——淡い白い蜜が柔らかい穴の口から流れ、続く数筋は直接飛び散る。',
      );
      await era.printAndWait('彼女は枕の下から手を抜き、自分の顔を覆う。');
      await treve.say_and_wait(`${callname} のばか！`);
      era.printButton('「私も我慢できない。先に起きて。」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' は怠げに起き上がり、すでに勃起した肉棒を見る。',
      ]);
      era.printButton('「さっき君のを見た。君も私のを見ろ。」', 1);
      await era.input();
      await treve.say_and_wait('見て、何が面白いの。');
      era.drawLine();
      await treve.say_and_wait(
        `……ごめんなさい、${you.actual_name} の肉棒……す、すごく大きい、太い、${treve.name}、好き……`,
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' は床へ這って跪く。絨毯が敷いてあるので、膝も痛まない。',
      ]);
      await treve.say_and_wait('ちょっと臭い……');
      await era.printAndWait([treve.get_colored_name(), ' はそう評した。']);
      era.printButton('「好きか？」', 1);
      await era.input();
      await era.printAndWait([treve.get_colored_name(), ' は黙っている。']);
      era.printButton('「好きらしいな。」', 1);
      await era.input();
      await treve.say_and_wait('そんなことない！');
      await era.printAndWait([
        '言い終わるか終わらないかのうちに、',
        you.get_colored_name(),
        ' は肉棒を彼女の鼻へ真っ直ぐ押し当てる。',
      ]);
      await era.printAndWait(['——正確には人中、唇の上の溝だ。']);
      await era.printAndWait(['亀頭が、両の鼻孔の空気の道を完全に塞ぐ。']);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は吸うたび、',
        you.get_colored_name(),
        ' の匂いを味わわざるを得ない。',
      ]);
      era.printButton('「師匠が、君の歌は上手だと言っていた。」', 1);
      await era.input();
      await treve.say_and_wait('歌？');
      era.printButton('「パリのトレセンの校歌でいい。」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' はそうして床に跪き、鼻を肉棒に突かれながら、校歌を歌う。',
      ]);
      await era.printAndWait([
        'ようやく歌い終えるころ、',
        you.get_colored_name(),
        ' の雄の臭いは、完全に彼女の鼻腔へ入っていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は身を屈めて ',
        treve.get_colored_name(),
        ' を見る。',
      ]);
      await era.printAndWait('両頬は白く、弾けそうに柔らかい。');
      await era.printAndWait(
        '瞳は宝玉のような青で、目尻には化粧があり、夜色の下で艶やかだ。',
      );
      await era.printAndWait('華麗な短い金髪。正真正銘の姫君だ。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に見られて照れ、仕方なく舌を出す。',
      ]);
      await era.printAndWait([
        '彼女の舌は ',
        you.get_colored_name(),
        ' よりずっと尖り、細く、柔らかく、一度で ',
        you.get_colored_name(),
        ' の馬眼まで届く。',
      ]);
      await era.printAndWait([
        'ひととおり舐めたあと、',
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' が動かないのを見て亀頭を含み、吸い始める。',
      ]);
      await era.printAndWait('生臭い匂いが口の中に広がり、歯の隙間まで潜る。');
      await era.printAndWait([
        '吸うたび、',
        treve.get_colored_name(),
        ' は羞恥でいっぱいになる。',
      ]);
      await era.printAndWait([
        '抑えきれなくなった ',
        you.get_colored_name(),
        ' は両手で ',
        treve.get_colored_name(),
        ' の頭を抱え、口へ向けて抽送し始める。',
      ]);
      await treve.say_and_wait('やめて……', true);
      await treve.say_and_wait('苦しい……', true);
      await treve.say_and_wait(
        '臭い！気持ち悪い。上顎に当たる！舌の根、だめ……吐きそう……吐きたい',
        true,
      );
      await era.printAndWait([
        '力を入れて突き入れるたび、',
        you.get_colored_name(),
        ' は亀頭を彼女の口腔の最深まで押し込む。',
      ]);
      await era.printAndWait(['——軟口蓋と舌根のあいだ。']);
      await era.printAndWait([
        '舌根の隆起が、',
        you.get_colored_name(),
        ' の亀頭をさらに快くする。',
      ]);
      await era.printAndWait([
        '惜しむらくは ',
        treve.get_colored_name(),
        ' がこの口淫で、屈辱のまま耐えるしかないことだ。',
      ]);
      era.printButton('我慢できない。', 1);
      era.printButton('口の中へ出す。', 2);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' は口の中の陽物の震えに気づき、話そうとして、話せない。',
      ]);
      await era.printAndWait(
        '舌根を押さえられ、温かく生臭い液が最深へ直接注がれる。',
      );
      await era.printAndWait('粘り気があり、喉を縫い閉じるようだ。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' は本能で白目を剥き、',
        you.get_colored_name(),
        ' の肉棒が抜けると、精液が数滴、絨毯へ落ちる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は口を押さえ、素早く起き上がる。',
      ]);
      await era.printAndWait(
        '数滴の精液がすでに口角から溢れ、白い絹の手袋を汚している。',
      );
      await treve.say_and_wait('くっ……んっん、うっ。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' はうつむき、喉が転がる',
      ]);
      await era.printAndWait([
        '白い精液が口から少しずつ飲み下され、',
        you.get_colored_name(),
        ' に口内射精されたときより気持ち悪い。',
      ]);
      await era.printAndWait('整った白い歯にも、一本ずつ精液が付く。');
      await era.printAndWait(
        '一部の精液は上の歯と下の歯に絡み、口の中で糸を引く。',
      );
      await treve.say_and_wait('はあっ……gros nigaud！');
      era.printButton('「本当に悪い。」', 1);
      await era.input();
      return ret;
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = 'Un heureux événement（幸せな出来事）';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `あの日、放課後に ${callname} が私を車へ引き上げ、国道沿いのラブホテルへ連れていった。`,
      );
      await treve.print_and_wait('こんな場所、入ったことがなかった。');
      await treve.print_and_wait(
        '外観は地味で、ロビーと廊下が一体になっていて、少し狭い。',
      );
      await treve.print_and_wait(
        `${callname} はカウンターのタッチパネルで部屋を選ぶ。`,
      );
      await treve.print_and_wait('半自助だなんて。受付もいない。');
      await treve.print_and_wait(
        `この人とエレベーターの前に立つ。今からの数時間、私は人形として扱われ、${you.sex}の性欲の処理をする。`,
      );
      await treve.print_and_wait(
        `これまでの経験では、${you.sex}を出せば終わる。`,
      );
      await treve.print_and_wait(
        `部屋に入るとすぐ、${callname} はベッドに座って服を脱げと指示した。`,
      );
      await treve.say_and_wait('分かってるはずよ……');
      await you.say_and_wait('ああ、約束は守る。コンドームは付ける。');
      await treve.print_and_wait(
        '服を脱ぐ。どうあれ、こう見られるのは恥ずかしい。',
      );
      await you.say_and_wait('すごいな。まったく垂れていない。');
      await treve.print_and_wait(
        `${callname} を喜ばせる胸は、張りも一級品だ。${
          you.sex
        } が一揉みすれば手に吸い付く、理想の胸。`,
      );
      await treve.print_and_wait(`私は ${callname} 以外に触らせたくない。`);
      await you.say_and_wait('表情が硬いな……肩、もう少し力を抜け。');
      await treve.print_and_wait(
        'するなら早くしてほしい。手も口も膣も、使われるのは分かっている。',
      );
      await treve.print_and_wait(
        `ときどき、自分は${you.sex}の自慰人形でしかないと思う。`,
      );
      await you.say_and_wait('まずベッドに横になって。そう、仰向け。');
      await treve.print_and_wait('は？意味が分からない。種付け体位のつもり？');
      await treve.print_and_wait(
        `${you.sex}の指示どおり仰向けになると、${callname} はピアノを弾くような手つきで、私の体に指を滑らせ始める。`,
      );
      await treve.print_and_wait(
        '首、脇、鎖骨、脇腹。触れたとも言えない弱い力で、ときどき押し付ける。',
      );
      await treve.print_and_wait(
        '嫌になると思っていた。まったく、そうではなかった。',
      );
      await treve.print_and_wait(
        '代わりに来るのは、子どもがふざけ合うような、焦れる感覚だ。',
      );
      await treve.print_and_wait(
        'というか、なぜこんなことをするのか分からない。',
      );
      await treve.print_and_wait(
        '乳首と恥丘は避けながら、器用に指を滑らせる。',
      );
      await treve.print_and_wait('撫でられたところが、少しつっぱる。');
      await treve.print_and_wait(
        `${callname} は、女の体は金庫だと言っていた。`,
      );
      await treve.print_and_wait(
        '順番に鍵を外せば、いちばん良い状態で開く、と。',
      );
      await treve.print_and_wait(
        '指がようやく膣へ入る。入口へ挨拶しながら、奥へ進む。',
      );
      await treve.print_and_wait(
        'もう濡れているのかもしれない。指は滞りなく入る。',
      );
      await treve.print_and_wait('意識を天井へ集め、ほかを忘れようとする。');
      await treve.print_and_wait(
        'LEDの明かりだ。間接照明。天井の模様を数え始める。',
      );
      await you.say_and_wait('だいたい、こんな感じだ。');
      await treve.say_and_wait('ん？おぉあっ！あっ…あ？');
      await treve.print_and_wait('いった、私……いま、イった？');
      await treve.print_and_wait('え？あ？');
      await you.say_and_wait('はは、白目まで剥いて。驚いたか？');
      await treve.print_and_wait('変な薬を打たれた——そう思って周囲を見回す。');
      await treve.print_and_wait(
        `${callname} の右手の指は膣の中にあり、左手は脇腹あたりを撫でている。`,
      );
      await treve.print_and_wait('注射器のような変な道具はない。');
      await treve.print_and_wait('異常なのは、私のそこだけだ。');
      await treve.print_and_wait(
        `腰まで痙攣し、${callname} の指を大口で咥え、愛液を垂らし、完全に媚びた姿だ。`,
      );
      await treve.say_and_wait('私の体に、何をしたの？');
      await you.say_and_wait(
        `首、脇、腹、脇腹。トレヴは本当に、全身が弱点だな。`,
      );
      await treve.print_and_wait(
        `${you.sex}が指をわずかに動かすたび、何十倍もの力で持ち上げられる気がする。`,
      );
      await treve.print_and_wait(
        `違う、私の体が魚のように跳ねている。${callname} に一掻きされるたび、めちゃくちゃに跳ねる。`,
      );
      await treve.say_and_wait('やめて！止めて！止めて！Arrêtez！');
      await you.say_and_wait(`やはり、トレヴの表情は豊かだ。`);
      await treve.print_and_wait(
        `最悪……終わった。${callname} を甘く見ていた。`,
      );
      await treve.print_and_wait(
        `この人は、指先だけで女の子を魂まで蕩けさせ、${you.sex}の哀れな雌犬にできる。`,
      );
      await treve.print_and_wait('入口をいじめただけで、私のそこは降伏した。');
      await treve.print_and_wait('腹の奥、子宮が渇いたようにざわつく。');
      await treve.print_and_wait(
        `どれほど熟練してるの？何人の女の子を泣かせたの？`,
      );
      await treve.print_and_wait(
        '私はまだ中学生よ…この歳でこんなことをされたら……',
      );
      await treve.say_and_wait('待って、お願い、止めて……');
      await you.say_and_wait('分かった。そこまでは、ここまでだ。');
      await treve.print_and_wait('今度は乳首を撫でられる。');
      await treve.print_and_wait(
        '膣内の余韻の中で、容赦ない指先が硬くなった乳首を刺激する。',
      );
      await treve.print_and_wait('私の乳首は勃起しすぎて、乳輪まで熱い。');
      await treve.say_and_wait('あっ！んおぉぉぉ！乳首も！');
      await treve.print_and_wait(`どんな女でも、泣いて止めろと言う。`);
      await treve.say_and_wait('んむぅぅ！');
      await you.say_and_wait('では、そこも…');
      await treve.say_and_wait('んぅぅぅぅ……');
      await treve.print_and_wait(
        '避雷針とはこういう感覚だ。私のそこへ雷が落ちた。',
      );
      await treve.print_and_wait(
        '下半身だけが切り離され、別の生き物になったようだ。',
      );
      await treve.print_and_wait(
        '喉からは、壊れたサイレンのような声しか出ない。',
      );
      await treve.print_and_wait(
        '体の中で爆発しそうな何かを叫んで出さないと、私は耐えられない。',
      );
      await treve.print_and_wait(
        `私の体は、${callname} に好き勝手に壊されている。`,
      );
      await treve.print_and_wait('首は後ろへ反り、腰は勝手に前へ突き出る。');
      await treve.print_and_wait(
        `${callname} の指は容赦なく膣内を掘り、伸ばしたつま先は空を向く。`,
      );
      await treve.print_and_wait(
        'ずっと耐えていた『尿意』が限界に達し、決壊寸前の快感を数百倍にもする。',
      );
      await treve.say_and_wait('おぉあああ、出て……出る！やめて、そんな……');
      await you.say_and_wait('おしっこじゃない。出していい。');
      await treve.print_and_wait(
        `${callname} が陰核を押すと腰が跳ね、水々しい透明な液体が散る。`,
      );
      await treve.print_and_wait(
        '必死に力を入れて尿道を閉じようとするが、体はまったく言うことを聞かない。',
      );
      await treve.print_and_wait(
        'シーツに染みが付き、尻まで水の冷気を感じる。',
      );
      await you.say_and_wait(`初めての潮吹きか？トレヴは本当に感じやすい。`);
      await treve.say_and_wait(
        'あっ……あっ……はあっ……やめて、止めて、お願い止めて、そこを許して……',
      );
      await treve.print_and_wait(
        '腰をずらしても逃げられない。弱点をいじめられ続け、掴まれて責められる。',
      );
      await treve.print_and_wait(
        `愛液を垂らして ${callname} の許しを乞う私の顔は、きっとひどい。`,
      );
      await treve.print_and_wait(
        '涙と涎が飛び散り、世界でいちばん幸せな雌の顔に違いない。',
      );
      await treve.print_and_wait(
        `${callname} の手が抜けるまで、私は何度も潮を吹かされた。`,
      );
      await treve.print_and_wait(
        '全身が痙攣し、姿勢を変えることすらできない。',
      );
      await treve.print_and_wait(
        '神経を全部引き抜かれ、快楽を脳漿へ直接注がれているような感覚だ。',
      );
      await treve.print_and_wait(`${callname} はゆっくり私の腹を、髪を撫でる…`);
      await treve.print_and_wait(
        '腹を晒したペットの犬を愛でるように、跳ねる子宮を優しく捏ねる。',
      );
      await you.say_and_wait(
        'ゆっくり覚えろ。最後には子宮も気持ちよくしてやる。',
      );
      await treve.say_and_wait('ああああ……');
      await treve.print_and_wait(
        `だめ……雌の本能……強い雄に屈して、${you.sex}に支配されたい……`,
      );
      await treve.print_and_wait(
        '師匠はこんなこと教えてくれなかった。全部奪われた。自尊心も、自信も……',
      );
      await treve.print_and_wait(
        `これまで積んできたすべてが${you.sex}の色に塗られる。助けて……`,
      );
      await you.say_and_wait('そろそろ、こっちも頼みたい。');
      await treve.print_and_wait(
        `${callname} は下着を脱ぎ、屹立した陰茎を見せる。`,
      );
      await treve.print_and_wait(
        'どう見ても嘘みたいだ。太さ、長さ、血管まで浮き、映画で見たものとはまったく違う。',
      );
      await treve.print_and_wait(
        '熱気のように立ち上り、鼻を突く雄の匂いが私の脳を焼く。',
      );
      await treve.print_and_wait(
        'その前に、体は完全に屈服し、子孫を残す支度をしている。',
      );
      await treve.print_and_wait(
        '引き締まった腹の奥がかすかに痛み、筋肉が勝手に子宮を引き下ろす。',
      );
      await treve.print_and_wait('強い雄にだけ許された特権。');
      await treve.print_and_wait(
        `${callname} の種に蹂躙されるのが、私の卵の義務。`,
      );
      await treve.print_and_wait('ください、これをください、あなたが欲しい。');
      await treve.print_and_wait(
        '子宮は飢えで媚びて刺すように痛む。抵抗の意識は薄れ、涎を垂らす膣口にも気づかない。',
      );
      await you.say_and_wait('じっと見てる？そんなに好きか。');
      await treve.print_and_wait('煽る、心底からの問い。');
      await treve.print_and_wait(
        `最低、最低すぎる。あなたはきっと、こうして何人もの女を雌にしてきた。`,
      );
      await treve.say_and_wait(
        'くっ……格好はいいわね。とにかく先にコンドームを……',
      );
      await you.say_and_wait(`その前にフェラ。トレヴ、できるだろう？`);
      await treve.print_and_wait('従うしかない。仕方ないでしょう？');
      await treve.print_and_wait(
        '口に含んだ瞬間、鼻の雄臭で頭が焼け、また潮を吹く。',
      );
      await treve.print_and_wait(
        'もう媚びることしか知らない馬鹿なそこは、これから貫かれるのを期待し、淫らな水をひどく流す。',
      );
      await treve.print_and_wait('大きすぎて、半分強しか含めない。');
      await treve.print_and_wait('歯が当たらないよう顎を下げ、口を締める。');
      await treve.print_and_wait('まともに呼吸できず、鼻息も荒くなる。');
      await you.say_and_wait('君の顔、意外だな。');
      await treve.say_and_wait(
        'んおぉぉ、くっ、しっ、うう、はあっ…はあっ、あむ。',
      );
      await you.say_and_wait(`トレヴのがんばる姿はかわいいな。`);
      await treve.print_and_wait('頭を撫でられ、耳を弄られる。');
      await treve.print_and_wait(
        'いつの間にかまた横になっていて、尻尾がハートの形に巻いている。',
      );
      await treve.print_and_wait(
        `${callname} が抜いた陰茎が、私の上に覆いかかる。`,
      );
      await treve.print_and_wait('逃げられない。避けられない。抗えない。');
      await treve.print_and_wait(
        '今から私は、頭がおかしくなるまでいじめられる。',
      );
      await treve.print_and_wait(
        'この生殖器を覚え、雄に勝てない雑魚の雌になる。',
      );
      await treve.print_and_wait('最悪……早く…');
      await treve.say_and_wait('わおぉおぉおぉぉぉ！');
      await treve.print_and_wait('一撃で倒された。');
      await treve.print_and_wait('そこが、おかしくなる。');
      await you.say_and_wait(
        'こうして犯されるのは初めてだろう。できるだけ早く終わらせる。',
      );
      await treve.say_and_wait('止めて、頭がおかしくなる！こんなの、知らない…');
      await treve.print_and_wait(
        'Gスポットを押し出すように、最深へピストンする。',
      );
      await treve.print_and_wait(
        '半狂乱で泣き叫んでも、容赦ない『ぱんぱん』は止まらない。',
      );
      await treve.print_and_wait(
        '意識がどこへ飛んだか分からない。何度イったかも分からない。強引に引き戻され、快楽を注がれる。',
      );
      await treve.print_and_wait(
        `十数分の抽送のあと、${callname} はようやく射精した。`,
      );
      await treve.print_and_wait(
        'ゴム一枚隔てているとは思えない熱さ。マグマを注がれたような一撃。',
      );
      era.drawLine();
      await treve.print_and_wait(
        '意識が戻ったときはすでに数時間経っていた。周囲にはティッシュ箱とコンドームの包装。',
      );
      await treve.print_and_wait(
        'ゴミ箱には結んだコンドームがいくつか。何度替えたか、もう分からない。',
      );
      await treve.print_and_wait(
        `覚えているのは、後ろからされたある回、${callname} が陰茎を抜いてコンドームを替えるとき、私が昏倒したこと。`,
      );
      await treve.print_and_wait(
        `${callname} に抱かれ、体を弄られ続けている。`,
      );
      await treve.print_and_wait(
        '跳ねて離れたいが、いまの私は自分の力で立つことすらできない。',
      );
      await you.say_and_wait(
        `おはよう、トレヴ。体の相性はいい。気持ちよかっただろう？`,
      );
      await treve.say_and_wait('はあっ……はあっ……終わったなら、先に放して。');
      await you.say_and_wait(`トレヴの尻尾が絡んでるから、無理だな。`);
      await treve.print_and_wait('え？');
      await you.say_and_wait('負けず嫌いは、選手にはいいかもしれない。');
      await treve.print_and_wait(
        `${callname} はそう言い、また手を私の陰核へ近づける。`,
      );
      await treve.print_and_wait('条件反射の体の反応で、息が止まる。');
      await treve.say_and_wait(
        '待って！やめて……ごめんなさい！本当に気持ちよかった。',
      );
      await treve.print_and_wait(
        `${callname} は満足げに鼻で笑い、手を私の胸へ戻す。`,
      );
      await treve.print_and_wait(
        '子どもが粘土をいじるように雑な揉み方なのに、私の体はそれにも反応して震える。',
      );
      await treve.print_and_wait(
        'くそ……抱かれているのが気持ちよくて、逆らえない。フランスの皆も、こんな私は見たことがない。',
      );
      await treve.print_and_wait(
        '知らなかったさまざまな快楽が頭に注がれ、心底から喜びを感じる。',
      );
      era.drawLine();
      await treve.print_and_wait(
        `朝、${callname} に寮の前まで送られ、扉を開けてよろよろ歩く。`,
      );
      await treve.print_and_wait(
        '脚は鉛を流し込んだように重く、頭は煙に霞んだようにぼんやりしている。',
      );
      await treve.print_and_wait(
        '携帯を開くと、不在着信と伝言が山のように溜まっている。',
      );
      await treve.print_and_wait(
        '皆が私を心配しているあいだ、私は膣を撫でられて愛液をあちこちに吹いていた。',
      );
      await treve.print_and_wait(
        '皆が私を心配しているあいだ、子宮をひたすらいじめられて嬉しかった。',
      );
      await treve.print_and_wait(
        '皆が私を心配しているあいだ、私は雌としての最上の幸福を味わっていた。',
      );
      await treve.print_and_wait('私は、たくさんの人を裏切った…');
      await treve.say_and_wait('あっ……ああ、んっ。');
      await treve.print_and_wait('気づくと、下着がびしょ濡れだ。');
      await treve.print_and_wait(
        '右手が無意識に股へ伸び、割れ目を撫で、陰核で自慰している。',
      );
      await treve.print_and_wait(
        '——ちっとも気持ちよくない。あのときみたいじゃない。なぜ？同じ場所なのに。',
      );
      await treve.print_and_wait(
        '机にうつ伏せになり、左手をブラの下へ入れ、硬くなった乳首を捏ねる。',
      );
      await treve.print_and_wait(
        'ペン立てから少し太いボールペンを抜く。師匠がくれた贈り物だ。',
      );
      await treve.print_and_wait('浅い……届かない！全然足りない。');
      await treve.print_and_wait(
        '手淫に溺れ、あれこれ突っ込みながら、椅子まで濡らす。',
      );
      await treve.print_and_wait(
        'でもいけない。分かっている。『本物』を味わってしまったから。',
      );
      await treve.print_and_wait(
        '呼吸すら塞ぎ、喉を抉るあの巨物が頭を掠める。',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' のメッセージを受け取った。',
      ]);
      await treve.say_and_wait('次は、いつ？');
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Premier amour（初恋という小事）';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `ある日、私は子宮に正直になり、${callname} の部屋へ行った。`,
      );
      await you.say_and_wait('いきなりその格好で来るとは……どういうつもりだ？');
      await treve.print_and_wait(
        '青と白の控えめな服。本来はG1で着る勝負服なのに、私はそのまま来てしまった。',
      );
      await treve.print_and_wait(
        '優雅さのために通気の一部を犠牲にしている。全力で階段を駆け上がった私の汗は蒸発せず、下着へ染み、ひどく湿っている。',
      );
      await you.say_and_wait('一晩中やるぞ。覚悟しておけ。');
      await treve.print_and_wait('最悪、もう濡れている。');
      await treve.print_and_wait(
        '二週間溜めた性欲と、段階の違う発情期で、そこはもう粘ついている。',
      );
      await treve.print_and_wait(
        '私はどうなるの。どう負け、どう媚び、どう壊されるのか。',
      );
      await treve.print_and_wait(
        `部屋に入って扉を閉めた瞬間、私はショールをハンガーに掛け、${callname} の前に座った。`,
      );
      await you.say_and_wait('落ち着け。逃げたりしない。');
      await treve.print_and_wait(
        `とぼけるこの人を黙らせるため、私は${you.sex}に口付けした。`,
      );
      await treve.print_and_wait(
        '舌を入れて絡め、唾を流し込み、耳障りな水音を立てる。',
      );
      await you.say_and_wait(`トレヴは才能があるな。`);
      await treve.print_and_wait('うるさい……');
      await treve.print_and_wait('口の中を舐められ、未知の感触に少し驚く。');
      await treve.print_and_wait(
        `やはり ${callname} はキスが上手い。性愛で相手を喜ばせる方法を、すべて知っている。`,
      );
      await treve.print_and_wait(
        `ショートブーツを脱いで傍らへ投げ、尻を ${callname} の顔へ向け、肉棒のそばへ寄る。`,
      );
      await treve.print_and_wait(
        '以前は考えることすらできなかった大胆な体臭。',
      );
      await treve.say_and_wait('あなたの生臭い匂い……大きい。');
      await treve.print_and_wait(
        '媚びた甘い言葉が口を出る。仕方ないでしょう？雌が勝てない肉棒だもの。',
      );
      await treve.print_and_wait(`まる二週間、頭は ${callname} で焦げていた。`);
      await treve.print_and_wait(
        `${callname} の半勃起の男根を含み、舌でゆっくり亀頭を半周する。`,
      );
      await treve.print_and_wait('口を閉じて「じゅるじゅる」と音を立てる。');
      await treve.print_and_wait('勃起したそれが、すぐに私の喉の奥を貫く。');
      await you.say_and_wait(`トレヴの足も臭いな。塩辛いのか、酸っぱいのか。`);
      await treve.print_and_wait('変態、変、最低！');
      await treve.print_and_wait('あなた以外、私のその臭いは誰も知らない。');
      await treve.print_and_wait('舌で筋を丁寧に舐め、ゆっくり根元へ迫る。');
      await treve.print_and_wait(
        `期待のあまり陰核が包皮を押し開いて勝手に出てくる。私は太ももで ${callname} の頭を挟み、締め付ける。`,
      );
      await treve.print_and_wait(
        '嗅いで、舐めて、早く！早く、噛んでもいい、そこを噛んで！',
      );
      await treve.print_and_wait(
        '自分でするときも触れなかった、小指の先ほどの栗。',
      );
      await treve.print_and_wait(
        '最近は脚を揃えて歩くだけで陰唇と下着に擦られ、勝手な下品な弱点になっている。',
      );
      await treve.print_and_wait(
        `責めが始まる。このまま ${callname} に吸われ、歯で軽く碾かれる。`,
      );
      await treve.print_and_wait(
        '普段は屋外の空気にすら触れない場所だ。耐えることなど不可能だ。',
      );
      await treve.print_and_wait(
        `私の腰は鯉の逆立ちのように跳ね、潮を${you.sex}の顔へ浴びせる。`,
      );
      await treve.print_and_wait('叫びたいが、口は完全に塞がれている。');
      await treve.say_and_wait('んっ！んあああああ、んっ、おぉぉ。');
      await treve.print_and_wait('感じるたび喉が収縮し、亀頭を搾る。');
      await treve.print_and_wait(
        '私はオナホールにされている。陰核を刺激すれば開閉できる、便利な道具だ。',
      );
      await treve.print_and_wait(
        `${callname} の肉竿が口の中で震え、大量に精を吐く。`,
      );
      await treve.print_and_wait(
        '映画のような水流の射精ではない。練乳のように濃い精液だ。',
      );
      await treve.print_and_wait(
        '喉の奥に穴を開ける勢いで射出された精液を、私は力を入れて喉を動かし、飲み下す。',
      );
      await treve.print_and_wait(
        'あなたのような雄に、精液を吐くことなどできない。',
      );
      await you.say_and_wait('フェラ、上手くなったな。ほら、水。');
      await treve.print_and_wait(
        `${callname} は少し驚いた様子で水を渡してくる。`,
      );
      await treve.print_and_wait(
        `私は大きく口を開け、${you.sex}に喉の奥まで見せる。`,
      );
      await treve.print_and_wait(
        '見て、あなたのいちばん大事な子ども、全部私の胃に落ちたわよ？',
      );
      await treve.say_and_wait('あっ……');
      await treve.print_and_wait('雄の臭いが食道から湧き、脳まで貫く。');
      await treve.print_and_wait(
        'そこからはすでに雪白の淫液が滴り、直接落ちず、粘って垂れる。',
      );
      await treve.print_and_wait(
        '私の子宮……子どもの指でも触れられるところまで下がっている。',
      );
      await treve.say_and_wait('今度は、膣の中に…');
      await treve.print_and_wait(
        '私は蛙のように脚を開き、指で秘所を拡げ、媚びた笑みを試す。',
      );
      await treve.print_and_wait('見て、ここ、あなたを気持ちよくできる穴よ？');
      await treve.print_and_wait('入れたら、いちばん気持ちいいわ。');
      await treve.print_and_wait('粘つく牝馬の雌穴よ？');
      await treve.print_and_wait('来る！');
      await treve.say_and_wait('んっ……！あっ……！');
      await treve.print_and_wait(
        '一気に貫かれ、亀頭に突かれ、子宮と口付けし、おかしくなる。',
      );
      await treve.print_and_wait('熱い、形がいい。');
      await treve.say_and_wait('そこ、もっと突いて……好き。');
      await treve.print_and_wait(
        'ピストンのたびがすごい。脳内の神経がショートしそう。',
      );
      await treve.print_and_wait(
        `膣をきつく締めれば、${callname} も苦しげな顔をする。`,
      );
      await treve.print_and_wait(
        `かわいい。ずっとこうして${you.sex}を締めたい。`,
      );
      await treve.print_and_wait(
        '「ぷっ」という音がして、肉棒が抜けようとする……',
      );
      await treve.print_and_wait(
        'だめ、だめ！もっと愛して、入れていないとだめ…',
      );
      await you.say_and_wait(`何だこれは。最上の名器だ、トレヴ！`);
      await treve.print_and_wait('あっ……嬉しい。');
      await treve.print_and_wait(
        `${callname} に頭を撫でられ、這いつくばらされ、子犬のように後ろからされる。`,
      );
      await treve.print_and_wait('やあ！こんなの、獣の交尾じゃない。');
      await treve.print_and_wait(
        `汗で張り付いた髪を ${callname} が乱暴に掴み、取っ手のように握る。`,
      );
      await treve.print_and_wait(
        'ばか！女の子にとっていちばん大事なものの一つなのに、ひどすぎる。',
      );
      await treve.print_and_wait(
        '後ろから胸をきつく掴まれ、下半身がぶつかり合う。',
      );
      await treve.print_and_wait('私は力なく、顔を枕へ伏せる。');
      await you.say_and_wait('いい尻だな。色っぽすぎる……');
      await treve.print_and_wait('ばか、cruche、Imbécile……');
      await treve.print_and_wait(
        '腰を打たれるたび尻がいじめられる。少し痛いのに、気持ちいい。',
      );
      await treve.say_and_wait('……欲しい。');
      await treve.print_and_wait(
        '言い終わるとひっくり返され、舌を吸われ、それから……潮を吹いた。',
      );
      await treve.print_and_wait('呼吸が危ういのに、口は放さない。');
      await treve.print_and_wait('「ちゅる、ちゅる」と音がする。');
      await you.say_and_wait(`くそ、出すぞ、トレヴ！`);
      await treve.print_and_wait(`私は脚を${you.sex}の腰に絡め、きつく抱く。`);
      await treve.print_and_wait('逃げるな、全部子宮へ注いで。');
      await treve.print_and_wait(
        `${you.sex}の亀頭と、私の子宮口はとても合う。`,
      );
      await treve.print_and_wait('全部私に任せて、一滴も逃さない、全部……');
      await treve.print_and_wait(`脚を締め、${you.sex}に肉棒を抜かせない。`);
      await treve.print_and_wait('人間程度の力で抵抗しても無駄よ？');
      await treve.print_and_wait(`${callname}、注精、完了。`);
      await you.say_and_wait(`……はあっ、トレヴ、アフターサービスは？`);
      await treve.print_and_wait(
        'はは、こんな最低な人を、どうして好きになったのかしら。',
      );
      await treve.print_and_wait(
        'でもわりと美味しいわ。仕方ない、掃除のフェラをしてあげる。',
      );
      await treve.print_and_wait('……足りない、足りない、足りない、足りない！');
      await treve.print_and_wait(
        `私は ${callname} の肩を掴んでひっくり返し、今度は私が上。`,
      );
      await you.say_and_wait('少し休ませてくれ？');
      await treve.print_and_wait(
        '冗談でしょう。あなたなら、何度でもできるはずよ？',
      );
      await treve.print_and_wait(
        '初めて騎乗位で搾る。色情動画の真似しかできない。',
      );
      await treve.print_and_wait('何度しても、慣れない。');
      await treve.print_and_wait(
        '尻を沈めて肉棒を体へ完全に埋めるだけで快感が滲み、意識が飛ばされる。',
      );
      await treve.print_and_wait(
        'さあ、あなたも弛めないで。がんばれ～がんばれ～もっと私を満たして。',
      );
      await treve.print_and_wait('あなたの肉棒で、私を殺して。');
      await treve.print_and_wait(
        '頭が普通に戻ったとき、太陽は完全に昇っていた。',
      );
      await treve.print_and_wait(`${callname}は息も続かない様子。`);
      await treve.print_and_wait(
        'そのあとも私は求め続け、体位を変えて連戦し、少し休めばまた続ける。',
      );
      await treve.print_and_wait(
        '口と膣に入れられた回数は、もう数えられない。',
      );
      await treve.print_and_wait(
        `尻も試したかったが、${callname} はそれは事前の準備が要ると言った。`,
      );
      await treve.print_and_wait('飢えと乾きは満たされた。でも……');
      await treve.print_and_wait(
        `私は ${callname} を再びベッドへ押し倒す。なぜなら：${you.sex}は朝勃ちしていた。`,
      );
      await treve.print_and_wait(
        `私は${you.sex}の乾いた口に、貪欲な口付けを重ねる。`,
      );
    };
    f.title = title;
    return f;
  })(),
  '89-continue-confirm': '二戦目を始める？',
  99: (() => {
    const title = "Ensemble, c'est tout（いっしょにいれば、それでいい）";
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const ret = [];
      await era.printAndWait([
        'ラブホテルに着くと、',
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' をベッドへ押し倒し、唇を重ねる。',
      ]);
      await era.printAndWait([
        '舌を絡められ、',
        you.get_colored_name(),
        ' は唾を流し込む。',
        treve.get_colored_name(),
        ' は徐々に受け入れ、自ら求め始める。',
      ]);
      await era.printAndWait(
        '混ざった唾が口元から滴っても気にせず、キスを続ける。',
      );
      await era.printAndWait([
        'そのあと ',
        you.get_colored_name(),
        ' は ',
        treve.get_colored_name(),
        ' の首筋に吸い付き、赤い跡を残す。すべての印を加えるように。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の手が ',
        treve.get_colored_name(),
        ' の胸に触れ、ブラの上から捏ねる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は突然の刺激で声を出し、',
        you.get_colored_name(),
        ' は同時に二つの乳首を引く。',
      ]);
      await treve.say_and_wait('やああっ！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は続けて手をスカートの中へ入れ、太ももを撫でたあと下着の中へ探る。',
      ]);
      await era.printAndWait([
        '割れ目を ',
        you.get_colored_name(),
        ' が撫でると、',
        treve.get_colored_name(),
        ' の体が震える。',
      ]);
      await treve.say_and_wait('触って……');
      await era.printAndWait([
        '望んだとおり、',
        you.get_colored_name(),
        ' の指が陰核に当たる。',
      ]);
      await era.printAndWait('包皮を剥かれ、敏感な部分を優しく愛撫される。');
      await treve.say_and_wait('あっ……はあっ……んっ！');
      await era.printAndWait([
        you.get_colored_name(),
        ' のもう一方の手がまた ',
        treve.get_colored_name(),
        ' の胸へ入り、乳輪のまわりを撫でる。',
      ]);
      await era.printAndWait('指先で円を描き、少しずつ中心へ向かう。');
      await era.printAndWait(
        'ようやく乳首に達すると、親指と人差し指で軽く押し、転がし、あるいは爪を立てる。',
      );
      await treve.say_and_wait('待、そこ！');
      await era.printAndWait('好きなのに。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は攻め続け、',
        treve.get_colored_name(),
        ' の頭がぼやけて何も考えられなくなるまで。',
      ]);
      await era.printAndWait([
        'そして、我に返ると、',
        treve.get_colored_name(),
        ' は自分で太ももを開いていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は満足げに下着を脱がせる。',
      ]);
      await era.printAndWait([
        'このあとを期待しているのか、',
        treve.get_colored_name(),
        ' の子宮はずっとざわついている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がズボンを脱ぎ、すでに勃起したそれを見せると、',
        treve.get_colored_name(),
        ' は小さく絶頂する。',
      ]);
      await era.printAndWait('怖くても、逃げない。');
      if (!era.get('status:205:经期')) {
        era.print('避妊する？');
        era.printButton('避妊薬を飲ませる', 1);
        era.printButton('生で中出し！', 2);
        ret.push(await era.input());
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' は自分の陽物を掴み、',
        treve.get_colored_name(),
        ' の膣口へ近づけ、ゆっくり挿入する。',
      ]);
      await era.printAndWait(
        '亀頭が入ると、愛液が潤滑になり、肉棒全体が一気に奥まで入る。',
      );
      await treve.say_and_wait('ああああ！だめ！！');
      await era.printAndWait([
        '根元近くまで飲み込んだのを確かめ、',
        you.get_colored_name(),
        ' は動き始める。',
      ]);
      await treve.say_and_wait('あっ！あっ！激しい……');
      await era.printAndWait([
        '腰に当たるたびにぱんという音がし、膣壁を擦られ、',
        treve.get_colored_name(),
        ' は快感の中で喘ぐしかない。',
      ]);
      await era.printAndWait(
        `肉棒の動きに合わせ、${treve.sex}の体が上下する。`,
      );
      await era.printAndWait([
        '表情の管理もすでに崩れているが、',
        treve.get_colored_name(),
        ' はもう気にしていない。',
      ]);
      await treve.say_and_wait('いく！いく！あああ！！');
      await era.printAndWait([
        you.get_colored_name(),
        ' のスパートで、二人は同時に頂点を迎え、温かい因子が ',
        treve.get_colored_name(),
        ' の沈んだ子宮を満たす。',
      ]);
      await era.printAndWait([
        '射精は長く続き、そのあいだ ',
        treve.get_colored_name(),
        ' の子宮は亀頭に口付けされながら精液を注がれる。',
      ]);
      await era.printAndWait([
        'やがてすべて出し切ると、',
        you.get_colored_name(),
        ' は肉棒を抜く。同時に、白濁が逆流する。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' が自分の腹を見ていると、',
        you.get_colored_name(),
        ' がまた彼女の上へ圧し掛かる。',
      ]);
      await era.printAndWait('唇が重なり、舌が絡む。');
      await era.printAndWait([
        '熱いキスをしばらく続けたあと、',
        you.get_colored_name(),
        ' は再び元気を取り戻したそれを押し付ける。',
      ]);
      await treve.say_and_wait('あっ、だめ……');
      await era.printAndWait([
        'だめなことなどない。',
        you.get_colored_name(),
        ' は再びピストンを始める。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に強引に犯される ',
        treve.get_colored_name(),
        ' は必死に抵抗するが、力が入らない。',
      ]);
      await era.printAndWait([
        '膣内の抽送が激しくなり、口も ',
        you.get_colored_name(),
        ' の舌に蹂躙される。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の背中をきつく抱き、体を快楽に任せる。',
      ]);
      await treve.say_and_wait('まったく……私、どうなってもいいの……');
      await era.printAndWait([
        'そんな ',
        treve.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は満足げな笑顔を見せる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は両脚で ',
        you.get_colored_name(),
        ' の背を抱え、',
        you.get_colored_name(),
        ' を逃さない。',
      ]);
      await treve.say_and_wait('んっ！出して、全部ちょうだい。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は亀頭を子宮口に密着させたまま精子を吐く。',
      ]);
      await treve.say_and_wait('ほぉ……あっ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' の射精はまだ続き、脈打つたび ',
        treve.get_colored_name(),
        ' の体も痙攣する。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' の小さな子宮が裂けそうな量だと感じさせるほど出し、ようやく解放が終わる。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は肉棒をゆっくり抜く。',
      ]);
      await treve.say_and_wait('もう一度、いかせて……');
      await era.printAndWait([
        'そう言う ',
        treve.get_colored_name(),
        ' は、顔を ',
        you.get_colored_name(),
        ' の肉棒へ擦り寄せる。',
      ]);
      await era.printAndWait('そのまま舌を出し、亀頭を口に含む。');
      await era.printAndWait('尿道に残ったものまで吸い尽くす。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の肉棒は再びきれいに勃起し、',
        treve.get_colored_name(),
        ' に自分の秘所へ移される。',
      ]);
      await treve.say_and_wait('今度は後ろから……');
      await era.printAndWait('這い、後背の姿勢になる。');
      await treve.say_and_wait('あっ！これだめ、突く場所が違う……');
      await era.printAndWait('膣内の襞、一枚一枚が擦られる。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の激しすぎる動きで、',
        treve.get_colored_name(),
        ' は腕の支えが崩れ、尻を突き出した形になる。',
      ]);
      era.printButton('「トレヴのそこは気持ちいい。きつくて最高だ。」', 1);
      await era.input();
      await era.printAndWait([
        '腰を打ち付けるたび、',
        treve.get_colored_name(),
        ' の体が震える。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は腹を攻めるように、膣壁に沿って上へ押す。',
      ]);
      await era.printAndWait([
        'Gスポットを突かれた ',
        treve.get_colored_name(),
        ' は、全身に電流が走ったように感じる。',
      ]);
      await treve.say_and_wait('そこ！だめ……また来る！');
      await treve.say_and_wait('いく！出して！中に出して。');
      await era.printAndWait([
        '絶頂と同時に ',
        you.get_colored_name(),
        ' に中出しされ、熱い因子汁を注がれる。',
      ]);
      era.drawLine();
      await era.printAndWait([
        'しばし休み、',
        you.get_colored_name(),
        ' にサプライズだと言う ',
        treve.get_colored_name(),
        ' は、小走りで傍らの更衣室へ入る。',
      ]);
      await era.printAndWait([
        'しばらくして、',
        treve.get_colored_name(),
        ' の小さな頭が更衣室の扉の隙間から弾ける。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には不安げな顔が見える。片手で扉の縁を強く支えている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は手を伸ばし、',
        treve.get_colored_name(),
        ' の口を覆う小さな手を掴み、引き寄せて後ろへ捻る。',
      ]);
      await era.printAndWait([
        '小さな手が口を離れた瞬間、',
        treve.get_colored_name(),
        ' の、舌を出して熱い息を吐く小さな口が露わになる。',
      ]);
      await era.printAndWait([
        '声を抑えきれないのを恐れているのか、',
        treve.get_colored_name(),
        ' は急いで下唇を噛む。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の手を叩く。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が彼女を放すと、',
        treve.get_colored_name(),
        ' は雌犬のように両手を床につき、首には目立って黒い革の首輪がある。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は鎖を強く引き、',
        treve.get_colored_name(),
        ' の上半身全体を無理に反らせる。',
      ]);
      await era.printAndWait([
        '窒息は ',
        treve.get_colored_name(),
        ' の両頬を赤くし、両手で絶望的に首輪を引っ掻いて無駄に外そうとするだけでなく、快感の刺激も直線的に上げる。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は両脚を震わせ、淫液が精液を巻き込んで何度も溢れ、太ももを伝って股間を完全に濡らす……',
      ]);
      await era.printAndWait([
        '加虐の性向を満たした ',
        you.get_colored_name(),
        ' が鎖を緩めると、精も根も尽きた ',
        treve.get_colored_name(),
        ' は床に跪き、大きく息をする。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の命令で小さな顔を床に付け、',
        you.get_colored_name(),
        ' に尻を高く上げ、二本の指で赤く腫れた両陰唇を開き、さっき中出しされたそこを ',
        you.get_colored_name(),
        ' に見せる。',
      ]);
      await era.printAndWait([
        '精液が少しずつ床へ滑り落ち、',
        you.get_colored_name(),
        ' は十分に満足する。',
      ]);
      era.printButton('「賢い犬なら、次に何をすべきか分かるだろう。」', 1);
      await era.input();
      await treve.say_and_wait(
        '私のオナホール蜜穴に、あなたの高貴な精液を注いでください❤️～',
      );
      await era.printAndWait([
        '啄むような口付けとともに、',
        you.get_colored_name(),
        ' の肉棒は再び、愛馬への侵犯を始める。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
