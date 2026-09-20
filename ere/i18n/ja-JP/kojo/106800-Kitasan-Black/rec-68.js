/**
 * @file キタサンブラック - 募集
 * @author 小黑
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} kita
   * @param {CharaTalk} you
   */
  async rec(kita, you) {
    await era.printAndWait(
      '早朝のトレセンはいつものように閑散としていて、レンガ道を走る子が数人いるだけだった。',
    );
    await era.printAndWait(
      `重いレース道具の箱を抱えた ${you.name} は、澄んだ空を見上げ、一歩一歩、選抜レースの会場へ向かう。`,
    );
    await era.printAndWait(
      '蹄鉄がチンチンとぶつかり合い、名札とスターターの空砲弾が箱の中に山積みになっている。',
    );
    await era.printAndWait(
      '中央は全国一設備の整った土地でも、節約できるところは節約するらしい……',
    );
    await era.printAndWait(`${you.name} はそう感心しながら、歩き続ける。`);
    await era.printAndWait(
      `トレセン学園に大勢いる新人トレーナーの一人として、まだ担当のいないウマ娘たちの世話をするのは、学園に代々受け継がれてきた伝統だ。`,
    );
    await era.printAndWait(
      '実際にやってみると、新人トレーナーの労働力を搾る力仕事である。',
    );
    await era.printAndWait(
      '仕事量は多くも少なくもないが、早朝から起こされるのは、どうしても苛立つ。',
    );
    await era.printAndWait(
      `一人で会場数十頭分の道具を運ばされるあたり、新人たちは「これは搾取だ」と怒ってぼやく。`,
    );
    await era.printAndWait(
      `実際にはほぼ全トレーナーが一度はこの力仕事を回され、名の知れたトレーナーも例外ではない。`,
    );
    await era.printAndWait(
      `とはいえ選抜レースの会場は多く、新人全員を何日も休まず働かせて通常業務を潰すわけにもいかない。`,
    );
    await era.printAndWait(
      `数人なら楽に終わる仕事量が、一日一人か二人の苦行史になる。`,
    );
    await era.printAndWait(
      `個人に割り振られた瞬間、天気の悪い日に当たった者が損をする、誰も幸せにならない苦難の循環になる。`,
    );
    await you.say_and_wait(`ひどいなあ……`, true);
    await era.printAndWait(
      `${you.name} が心の中でそうぼやいたとき、両腕の重い箱が急に軽くなり、${you.name} は思わず驚いた。`,
    );
    await kita.say_and_wait(
      'トレーナーさん、これ全部、選抜レースの会場まで運ぶんですか？ボクに任せてください。',
    );
    await era.printAndWait(
      `${you.name} が振り返ると、祭りの朝のように爛漫な${kita.teen_sex_title}の体香が顔にぶつかる`,
    );
    await era.printAndWait(
      `夏の夜の屋台のような、ウマ娘の体には淡い花火の匂いが残っていて、屋台のそばにしゃがむ${kita.teen_sex_title}の白い肌に滲んだ汗まで嗅げる気がした。`,
    );
    await era.printAndWait(
      `微かな汗の匂いには安心感がある。だが教師としての責任が、${you.name} をすぐに現実へ引き戻した。`,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' の後ろで、黒い短髪の',
      kita.child_sex_title,
      'が ',
      you.get_colored_name(),
      ' に笑顔を向け、',
      you.get_colored_name(),
      ' の胸に残っていた怨念を跡形もなく払い飛ばす。',
    ]);
    await kita.say_and_wait(
      'トレーナーさん、大丈夫ですか？保健室までボクが連れていきましょうか？',
    );
    await era.printAndWait(
      `ウマ娘は片手で箱を抱え、もう一方の手で ${
        you.name
      } の額に触れ、心配そうに尋ねる。`,
    );
    era.printButton('「ああ……大丈夫だ、心配してくれてありがとう」', 1);
    era.printButton(`「助かる。ところで、名前は？」`, 2);
    await era.input();
    await era.printAndWait(
      `初対面なのに遠慮なく人助けをしてくる、名前すら知らない${kita.uma_sex_title}に、${
        you.name
      } は理由もなく申し訳なさを覚えた。`,
    );
    await kita.say_and_wait(
      `ボクの名前は ${kita.name}、今年初等部に入学したばかりです。`,
    );
    await kita.say_and_wait(`これ、どこへ運ぶんですか？ボクが運びますよ。`);
    await era.printAndWait(
      `黒髪の子は笑って ${you.name} に頷き、行き先を確かめると、${you.name} を連れて選抜レースの会場へ歩き出した。`,
    );
    await era.printAndWait(
      `${kita.teen_sex_title}と並んで歩くあいだ、${
        you.name
      } は顔を横に向け、右前方を歩くウマ娘をこっそり観察する。`,
    );
    await era.printAndWait(
      `${kita.child_sex_title}は ${
        you.name
      } の視線に気づかず、鼻歌を歌いながら小道を歩いている。だから ${
        you.name
      } は遠慮なく、${kita.sex}のきれいな横顔を見つめていられた。`,
    );
    await era.printAndWait(
      `この子は白い顔をしていて、澄んだ琥珀色の瞳が、自信に満ちて悩みのない光を放っている。`,
    );
    await era.printAndWait(
      `${kita.sex}は足元の道を真剣に見つめ、ときどき膝で箱を持ち上げて、よりしっかりと抱え直している。`,
    );
    if (kita.sex_code !== 1) {
      await era.printAndWait(
        `だが汗で肌に張り付いたジャージは、勝手に、張りのある柔らかい形を描き出していた。`,
      );
      await era.printAndWait([
        '赤い生地が',
        kita.child_sex_title,
        'の肉感のある太ももと尻をきつく包み、安産型の広い尻が太ももの動きで互いに押し合い擦れ合い、白い餅のように想像を掻き立てる。',
      ]);
    }
    await era.printAndWait([
      kita.child_sex_title,
      'の肌の一寸一寸が下品な汗の香りを放っているのに、その澄んだ瞳は自分の体の淫らさにまったく気づいていない。',
    ]);
    await kita.say_and_wait(
      'トレーナーさん、新しく着任したばかりですよね？朝早くから道具運び、お疲れ様です。',
    );
    await kita.say_and_wait(
      '実家にいた頃、父も弟子たちに荷物運びをよくさせてたので、使われる気持ち、ボクよく分かりますよ。',
    );
    await era.printAndWait([
      kita.child_sex_title,
      'は素朴な笑顔で ',
      you.get_colored_name(),
      ' に話し掛ける。温かい陽だまりが揺れているようだった。',
    ]);
    await era.printAndWait(
      `陽射しが林の木陰を細かく切り、この明るくて優しい${kita.uma_sex_title}の上に落ちる。`,
    );
    await era.printAndWait(
      `その隔てのない空気に、この子へ欲を抱いてしまった ${you.name} は、少し面映ゆくなった。`,
    );
    era.println();
    era.printButton('「やっぱりありがとう。すごく助かった。」', 1);
    await era.input();
    await kita.say_and_wait(
      'いえいえ、ボクもこのグラウンドで選抜レースを走るんです。荷物くらい、造作ないですよ。',
    );
    await era.printAndWait(
      `${kita.name} は胸を叩き、暇を持て余した${kita.sex}は ${you.name} に、自分ともう一人の子の話をし始める。`,
    );
    await era.printAndWait(
      `${
        kita.sex
      }の話はまさに滔々として、幼い頃からウマ娘の先輩を慕っていた二人が、約束のうえでトレセン学園の舞台へ足を踏み入れた物語だった。`,
    );
    await era.printAndWait(
      `${you.name} はこの朝を美しいと思う。陽射しが林の木陰を細かく切り、雀がこの爽やかな春の日に高く歌う。`,
    );
    await era.printAndWait(
      `だが短い時間は長くは続かない。グラウンドに入った ${kita.name} が箱を走路に置くと、並んで歩いた時間はそこで終わった。`,
    );
    await kita.say_and_wait(
      'じゃあトレーナーさん、ボクは準備運動してきます。時間があったら、ボクのレースを見に来てくださいね。',
    );
    await era.printAndWait(
      `黒髪のウマ娘は小走りに走路へ跳び、${
        kita.sex
      }の知っている子と話し始める。`,
    );
    await era.printAndWait(
      `見に行った方がいいかもしれない、と ${you.name} は思い、選手たちへ名札の配布を始めた。`,
    );
    era.drawLine();
    await era.printAndWait(
      `午前いっぱい忙しく働いたあと、やっと手が空いた ${you.name} は観客席に座り、選抜レースの観察を始める。`,
    );
    await era.printAndWait(
      `すでに一レースが号砲とともに始まっていた。ゲートが開き、快活な黒が一閃、颶風のように過ぎる。`,
    );
    await era.printAndWait(
      `トレーナーA「あの子が ${kita.name} か？実力、すごいな。」`,
    );
    await era.printAndWait(
      `トレーナーB「調子がいい。このレースの勝ちは${kita.sex}のものだな。」`,
    );
    await era.printAndWait(
      `トレーナーC「記録上の性格も合ってる。担当にするなら、かなりいい選択だろう。」`,
    );
    await era.printAndWait(
      `トレーナーたちの低い歓声の中、${kita.name} は一馬身も譲らず先頭を走る`,
    );
    await era.printAndWait(
      `力を孕んだ両脚が芝に、泥まで見える足跡を残す。その生まれつきの素質が、場にいるすべてのトレーナーの目を奪った。`,
    );
    await era.printAndWait([
      kita.get_colored_name(),
      ' の歩幅とともに、大逃げを戦術とするウマ娘がゴールを駆け抜け、',
      kita.sex,
      'の勝利を迎える。',
    ]);
    await era.printAndWait(`今の ${you.name} は……？`);
    era.printButton(`（${kita.sex}のトレーナーになりたい……！）`, 1);
    era.print('（募集を続ける）', { offset: 1, width: 12 });
    era.printButton(
      `（たぶん、${kita.sex}にはもっと良いトレーナーがいる……）`,
      2,
    );
    era.print('（募集を諦める）', { offset: 1, width: 12 });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `飲み込まれたように、逃げられないように、感情が ${you.name} の胸で燃え、口を噤んでいられなくする。`,
      );
      await era.printAndWait(
        `レースが終わるとウマ娘たちは散り、トレーナーたちは餌を追う魚のようにその後を追う。`,
      );
      await kita.say_and_wait(
        `うわああああ！${you.name} さんって……さっきのトレーナーさん！`,
      );
      await era.printAndWait(
        `走路の隅で、${you.name} は汗を拭いている ${kita.name} を見つけた。`,
      );
      await kita.say_and_wait(
        'あの、ボク……今、汗を拭いてるので、トレーナーさん、募集ならちょっと待ってもらえますか…？',
      );
      await kita.say_and_wait('できれば、もう少し待ってほしいです……');
      await era.printAndWait(
        `この${kita.child_sex_title}はキャップを開けたミネラルウォーターを握り、困った顔で ${
          you.name
        } を見る。${kita.sex}の頬は走りで真っ赤で、尻尾は混乱した感情に揺れている。`,
      );
      await era.printAndWait(
        `だが ${you.name} は我慢できない。我慢できない。あの走りを見たあとで、どうして我慢できる！`,
      );
      await you.say_and_wait(
        `${kita.name}、お前の表情も目も最高だ。俺をトレーナーにさせてくれ！`,
      );
      await era.printAndWait(
        `${you.name} の誘いを聞いて、もともと混乱していた ${kita.name} はさらに混乱する。`,
      );
      await kita.say_and_wait(
        'ま、待って待ってこれってナンパ！？早すぎ早すぎ！こんな熱烈な憧れ、どう始めたらいいか分からないです！',
      );
      await kita.say_and_wait(
        'どうしようダイヤ、ボクまだ心の準備できてない！見た目だけで募集しないでくださいトレーナーさん！ボク、実力もありますから！',
      );
      await era.printAndWait(`${kita.name} は尻尾を揺らし、慌てた顔を見せる。`);
      await era.printAndWait(
        `今朝知り合ったばかりのトレーナーさんに口説かれ、ウマ娘である${kita.teen_sex_title}の頭はオーバーヒートし、思考能力を失った。`,
      );
      await era.printAndWait(
        `一歩一歩迫ってくるトレーナーに対し、${kita.name} は脊髄反射に近い反応で、反射的に脚を上げ……`,
      );
      await you.say_and_wait('だから、俺をトレーナーに——ぷあっ！？');
      await era.printAndWait(`重い蹴りが ${you.name} の顔に入った。`);
      await era.printAndWait(
        `たっぷり三十分かけて事情を説明した ${you.name} は、ようやく ${kita.name} の連絡先を手に入れた。`,
      );
      await era.printAndWait(
        `${you.name} は正午の陽射しと ${kita.name} の申し訳なさそうな顔を見て、こんな子と契約できたことに安心する。`,
      );
    } else {
      await era.printAndWait(
        `${you.name} は胸のときめきを払い、トレーニング場を後にした。`,
      );
    }
    return ret;
  },
};
