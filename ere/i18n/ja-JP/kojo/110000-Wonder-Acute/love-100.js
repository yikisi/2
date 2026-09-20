/**
 * @file ワンダーアキュート - 恋慕
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  async '49-before'(acute) {
    await era.printAndWait([
      '最近、なぜか ',
      acute.get_colored_name(),
      ' は中庭の枯れ木の洞に座っていることが多い。',
    ]);
    await era.printAndWait([
      '数日前、こっそり後をつけ、遠くから眺めていたら、',
      acute.sex,
      'は洞の中で何かを考えているようだった。',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      acute.get_colored_name(),
      ' をもっと知りたいなら、中庭の枯れ木の洞を覗いてみるといいかもしれない。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async 49(acute, you) {
    await era.printAndWait('調教の合間、ひとりで中庭へ来た。');
    await era.printAndWait([
      acute.get_colored_name(),
      ' がときどき入っている木の洞が見え、足が自然とそちらへ向く。',
    ]);
    await era.printAndWait('身を屈めて覗き込むと、洞の中は意外なほど狭い。');
    await era.printAndWait(
      '梢なのか根なのか、黒い跡のついた木端が露出し、凸凹の表面を黒い蟻が縫う。座って気持ちいいはずがない。',
    );
    await era.printAndWait([
      'では、なぜ洞に座る ',
      acute.get_colored_name(),
      ' は、あんなに落ち着いていられるのだろう。',
    ]);
    await era.printAndWait('あれこれ考えても——どうにも分からない。');
    await era.printAndWait(
      '「はぁ」と溜息をつき、立ち上がろうとした、そのとき——',
    );
    await you.say_and_wait('ばっ！？');
    await era.printAndWait(
      '突然、両脚が強い力に押される。眼前の天地が上下に入れ替わり、体は無理やり一回転して洞の中へ「転がり」込んだ——',
    );
    await era.printAndWait('何が起きた！？');
    await era.printAndWait(
      '困惑の悲鳴を上げかけたところで、逆さまの空に、見慣れた顔が浮かぶ。',
    );
    era.printButton(`「${acute.name}！」`, 1);
    await era.input();
    await era.printAndWait([
      '出そうだった疑問は、子供のように興奮した顔の ',
      acute.get_colored_name(),
      ' を見て、驚きに変わった。',
    ]);
    await era.printAndWait(
      'だがその驚きは、すぐ新しい疑問に取って代わられる。',
    );
    era.printButton(`「${acute.name}？」`, 1);
    await era.input();
    await era.printAndWait('二度目の呼びかけ。');
    await era.printAndWait(
      '最初の茫然とも、一声目の驚きとも違い、この一声は、ほとんどが疑問だった。',
    );
    await era.printAndWait([
      'これまで、',
      you.get_colored_name(),
      ' は、こんな子供みたいに興奮した ',
      acute.get_colored_name(),
      ' を見たことがなかった。',
    ]);
    await era.printAndWait('それが、今、突然目の前にある。');
    await era.printAndWait([
      'それは ',
      you.get_colored_name(),
      ' を喜ばせ、同時に、それ以上の戸惑いを生んだ——',
    ]);
    await era.printAndWait([
      '目の前の、子供のように嬉しそうな ',
      acute.get_colored_name(),
      ' は、本当に ',
      you.get_colored_name(),
      ' の知る、いつもの穏やかな ',
      acute.get_colored_name(),
      ' なのだろうか。',
    ]);
    await era.printAndWait([
      '目の前の ',
      acute.get_colored_name(),
      ' は、まるで ',
      you.get_colored_name(),
      ' の胸の疑問を聞いたかのように、二度目の呼びかけのあと表情を変え、最初の喜びを拭い、なぜかその場で固まってしまった。',
    ]);
    await era.printAndWait([
      acute.sex,
      'が固まり、',
      you.get_colored_name(),
      ' もどうしていいか分からず固まり、こうして ',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' は、並んで固まっていた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は足首を掴まれ、逆さまに洞の中へ寝かされ、',
      acute.sex,
      'は ',
      you.get_colored_name(),
      ' の足首を掴んだまま、洞の上に覆いかぶさっている。',
    ]);
    await era.printAndWait([
      acute.sex,
      'はうつむき、正面を遮る豊かな実を通して ',
      you.get_colored_name(),
      ' を見る。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は顔を上げ、できるだけその実の隙間から',
      acute.sex,
      'を見る。',
    ]);
    await era.printAndWait('……');
    await era.printAndWait([
      'しばらくして、ようやく何か気づいたらしい ',
      acute.get_colored_name(),
      ' は、耳まで赤くなった。',
    ]);
    await era.printAndWait('………');
    await era.printAndWait([
      'ようやく ',
      acute.get_colored_name(),
      ' の投げ技から解放されたあと、',
      acute.get_colored_name(),
      ' の慌てふためいた謝罪を聞くことになった。',
    ]);
    await era.printAndWait([
      '聞くところでは、',
      acute.get_colored_name(),
      ' はいつものように中庭へ来て枯れ木の洞で休もうとしたところ、洞の前に屈む自分の背中を、ふと目にしたらしい。',
    ]);
    await era.printAndWait([
      'そして、なぜか「興が乗って」しまい、足首を持ち上げ、',
      you.get_colored_name(),
      ' を洞の中へ押し込んだ、とのこと。',
    ]);
    await you.say_and_wait('……');
    await acute.say_and_wait('……');
    await era.printAndWait([
      '二人とも言葉がなく、何を言えばいいか分からない。ただ ',
      acute.get_colored_name(),
      ' の赤らんだ頬はまだ引いておらず、視線がせわしなく揺れ、何か言えない考えを隠しているようだった。',
    ]);
    await era.printAndWait('……何を、考えているのだろう。');
    await era.printAndWait([
      '正直、',
      you.get_colored_name(),
      ' には口に出せない。',
      acute.get_colored_name(),
      ' も同じで、恥ずかしさに口を開けない。',
    ]);
    await era.printAndWait([
      '二人は黙契のように互いの顔を見ず、そろって顔をそむけた。',
    ]);
    await era.printAndWait(
      '傍らで、最初は狭いと思っていた洞を眺め、感慨と、この気まずい沈黙を破りたい気持ちが重なり、口を開く——',
    );
    await you.say_and_wait('……大きいな。');
    await acute.say_and_wait('……ええ——');
    await era.printAndWait(
      '何の黙契なのか自分でも分からないまま、そろって頷いた——',
    );
  },
  async '74-before'(acute) {
    await era.printAndWait([
      '最近、',
      acute.get_colored_name(),
      ' と一緒にいる時間が、どんどん長くなっている。',
    ]);
    await era.printAndWait([
      '離れていても、頭の中は',
      acute.sex,
      'のことでいっぱいだ。',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      'もしかすると、',
      acute.get_colored_name(),
      ' との関係は、もう一歩進められるのかもしれない。',
    ]);
    await era.printAndWait([
      '……覚悟が決まったら、',
      acute.get_colored_name(),
      ' を駅へデートに誘おう。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async 74(acute, you, callname) {
    await era.printAndWait([
      acute.get_colored_name(),
      ' と駅前でデートをしている……',
    ]);
    await acute.say_and_wait([
      'あの……',
      you.actual_name,
      'さん。どうして、どうしても駅まで来なければいけなかったのですか？',
    ]);
    await era.printAndWait('うん……いい質問だ。');
    await era.printAndWait([
      you.get_colored_name(),
      ' からすれば、',
      acute.get_colored_name(),
      ' と二人きりで外出できれば、どこへ行ってもデートと呼べるはずだ。',
    ]);
    await era.printAndWait(
      'なのに、駅に来て初めて「デート」になる、というのか？',
    );
    await era.printAndWait('これが神様の悪趣味でないなら、');
    await era.printAndWait('つまり……');
    era.println();

    era.printButton(`「${acute.name} に告白する。（関係を進める）」`, 1);
    era.printButton('「……考えすぎだったのかもしれない。（まだ進めない）」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        '……わざわざ「デート」と強調した理由を、まだ聞くのか。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        acute.get_colored_name(),
        ' が好きだ。だからデートを口実に、',
        acute.sex,
        'へ告白したかった。',
      ]);
      await era.printAndWait('——それ以外に、理由などあるだろうか。');
      await era.printAndWait([
        'そうだ、',
        you.get_colored_name(),
        ' は ',
        acute.get_colored_name(),
        ' が好きだ。',
      ]);
      await era.printAndWait(
        '忌むべき秘密などではない。何度もの胸の高鳴りの中で、ようやく認めた事実にすぎない。',
      );
      await era.printAndWait(
        'どれほど困難でも乗り越えようと、トレーニング場に残した汗。',
      );
      await era.printAndWait(
        'どれほど疲れていても、微笑みで応じてくれる穏やかさ。',
      );
      await era.printAndWait('数えきれない、一緒に過ごした昼と夜。');
      await era.printAndWait('数えきれない、一緒に味わったたくあん。');
      await era.printAndWait(
        '同じ広い空の下にいながら、星を見上げる余裕など一度もなかった。',
      );
      await era.printAndWait(
        '指先が触れること自体が、奇跡でできた夢なのかもしれないから。',
      );
      await era.printAndWait('空がふいに雨を落とし、駅の屋根を叩く。');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' は並んで座り、雨音の中、左の胸がどきどきと鳴る。',
      ]);
      await you.say_and_wait(
        ['そうだ、勇気を出せ、', you.actual_name, '、勇気を出せ。'],
        true,
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' のように——努力して、勇敢で、折れないで。',
      ]);
      await era.printAndWait(
        '左の胸がどきどきと鳴り、雨音の中、指先がそっと近づく。',
      );
      await you.say_and_wait(
        [
          'そうだ、',
          acute.sex,
          'の方を向け、',
          you.actual_name,
          '、',
          acute.sex,
          'の方を向け。',
        ],
        true,
      );
      await era.printAndWait([
        '雨音の中、',
        acute.get_colored_name(),
        ' は顔を上げている。',
      ]);
      await era.printAndWait([
        acute.sex,
        'の視線はいつもどおり、どこか遠い彼方を見ている。',
      ]);
      await you.say_and_wait(['伝えろ、', acute.sex, 'に伝えろ。'], true);
      await era.printAndWait(['そうだ、伝えろ、', you.actual_name, '。']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' に伝えろ。自分がどれほど',
        acute.sex,
        'を好きかを。',
      ]);
      await era.printAndWait(
        '唇が微かに震え、吐き出そうとした言葉はダイヤの結晶になって、喉の関所を塞ぐ。',
      );
      await you.say_and_wait(['伝えろ、', acute.sex, 'に伝えろ。'], true);
      era.printButton('「ぼ、僕……好き——」', 1);
      await era.input();
      await acute.say_and_wait('好きですよ、トレーナー。');
      await you.say_and_wait('……えっ？');
      await acute.say_and_wait('——————');
      await era.printAndWait(
        '雨粒が落ちる瞬間、空気と、この一瞬の時間が凍りついた。',
      );
      await era.printAndWait([
        '耳に残るのは、',
        you.get_colored_name(),
        ' が聞くはずのなかった声。',
      ]);
      await era.printAndWait([
        'いつも前方を見つめていた ',
        acute.get_colored_name(),
        ' は、いつの間にか視線を逸らし、目立たない ',
        you.get_colored_name(),
        ' を見ていた。',
      ]);
      await era.printAndWait(
        'こんなはずではなかった……こんなはずでは、なかっただろう。',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' のような強くて勇敢な',
        acute.phy_sex_title,
        'が、どうして……',
      ]);
      await acute.say_and_wait([
        '本当に、好きですよ、',
        you.actual_name,
        'さん。',
      ]);
      await era.printAndWait(['今度は、', acute.sex, 'の声はもう小さくない。']);
      await era.printAndWait([
        '優しく、それでも芯のある眼差しが、赤らんだ羞恥と一緒に ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      era.printButton('「ぼ、僕……」', 1);
      await era.input();
      await acute.say_and_wait([
        '焦らなくていいですよ、',
        callname,
        '。ゆっくり、どうぞ～',
      ]);
      era.printButton(`「僕も——僕も好きだ、${acute.name}！」`, 1);
      await era.input();
      await era.printAndWait('————————');
      await era.printAndWait('それは、晴れ渡った午後だった。');
      await era.printAndWait('大きくもなく、小さくもない雨の中。');
      await era.printAndWait('駅の小さな屋根で雨宿りする二人は、');
      await era.printAndWait('そっと、気づかないうちに、近づいていった……');
      await era.printAndWait('……………………');
      await era.printAndWait([
        '【',
        acute.get_colored_name(),
        ' と恋人になった！】',
      ]);
    } else {
      await era.printAndWait([
        '担当の',
        acute.uma_sex_title,
        'とのデートに、理由が要るだろうか。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' と一緒にいたい。',
        acute.get_colored_name(),
        ' といると楽しい。理由は、それだけだ。',
      ]);
      await era.printAndWait('首を振り、余分な悩みを払い落とす。');
      await era.printAndWait('………………');
      await era.printAndWait([
        acute.get_colored_name(),
        ' と駅前で、楽しい時間を過ごした。',
      ]);
    }
    return ret;
  },
  async '89-before'(acute, you) {
    await era.printAndWait([
      acute.get_colored_name(),
      ' との恋は、本当に幸せなことだ。',
    ]);
    await era.printAndWait([
      'だが、',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' が抱き合うたび、人のいない場所を選ばなければならない。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は、そのこそこそした振る舞いが、うまく言えないまま気になっていた。',
    ]);
    await era.printAndWait([
      'その焦りを ',
      acute.get_colored_name(),
      ' に話しても、',
      acute.sex,
      'はいつも微笑んでこう言う。',
    ]);
    await acute.used_to_say_and_wait(
      '大丈夫ですよ。今のままでも、わたしは十分幸せですから。',
    );
    await era.printAndWait([
      'だが、逢瀬のように隠すこの関係は、本当に ',
      acute.get_colored_name(),
      ' に公平だろうか。',
    ]);
    await era.printAndWait([
      '……あるいは、',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' は、この恋を公にしていいのかもしれない。',
    ]);
    await era.printAndWait(
      'トレセンの皆の前でこの恋を公にするには、【鋼のような意志】が要るだろう。',
    );
    await era.printAndWait(
      'それでも迷いはなく、この一歩を踏み出すと決めたなら——',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' と、中庭でデートしよう。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} tama タマモクロス
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async 89(acute, tama, you, callname) {
    tama.name = `某関西の${tama.uma_sex_title}`;
    await era.printAndWait([
      '人通りの多い中庭で、他の',
      acute.uma_sex_title,
      'の視線に耐えながらデートするには、相当な覚悟が要る……',
    ]);
    await acute.say_and_wait(
      'あら……ここでデート、ですか？ わたしは構いませんよ～',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' は、周囲の',
      acute.uma_sex_title,
      'の目など気にしていないようだった……',
    ]);
    await era.printAndWait([
      '本当に踏み出せないのは、',
      you.get_colored_name(),
      ' の方だ。',
    ]);
    await era.printAndWait([
      '——',
      acute.get_colored_name(),
      ' の、期待する眼差しを感じる。',
    ]);
    await era.printAndWait('………………');
    await you.say_and_wait('お前は、いつまで臆病でいるつもりだ。');
    await era.printAndWait('ふと、胸の中をそんな言葉が横切った。');
    await era.printAndWait('一瞬、体に衝動が走る——');
    await acute.say_and_wait(['どうしました、', callname, '……んっ！']);
    await era.printAndWait([
      acute.get_colored_name(),
      ' が問い終わる前に、',
      you.get_colored_name(),
      ' は ',
      acute.get_colored_name(),
      ' を抱きしめていた。',
    ]);
    await era.printAndWait(
      '唇がもう一枚の唇に重なり、甘い気配が胸の奥まで沁みる。',
    );
    await era.printAndWait(
      '一方は強く、一方は迷い、やがて門が叩かれ、激しい交換が始まる——',
    );
    await era.printAndWait('…………');
    await you.say_as_passer_by_and_wait(
      'タイムライン民',
      'あ、見て見て、中庭でキスしてるよ。',
    );
    await you.say_as_passer_by_and_wait(
      'ウマ垢ユーザー',
      'うわ、マジ！？ 撮って投稿しとこ～',
    );
    await tama.say_and_wait([
      'なんや気色悪いカップルやな。しかもウチの学校の',
      acute.uma_sex_title,
      'やて、みっともないわ。',
    ]);
    await era.printAndWait('…………');
    await acute.say_and_wait([
      'ん～～～はぁ……',
      callname.substring(0, 1),
      '、',
      callname,
      '——',
    ]);
    await era.printAndWait([
      '腕の中の ',
      acute.get_colored_name(),
      ' は、頬を赤らめ、とろんとした目で自分を見ている。',
    ]);
    await era.printAndWait(
      '拒絶とも、承諾ともつかず、拒みながら迎えているようで……',
    );
    await era.printAndWait(
      'なぜこんなことをしたのか。こんな大胆なことをして、どんな結末が待っているのか。',
    );
    await era.printAndWait('そんなことは、今はどうでもいい。');
    await era.printAndWait('少なくとも今は……今は。');
    await era.printAndWait('今は幸せだ。それで、十分だろう。');
  },
  async '99-before'(acute, you) {
    await era.printAndWait(
      '【君よ、金縷の衣を惜しむなかれ、君よ、少年の時を惜しむべし、】',
    );
    await era.printAndWait(
      '【花開きて折るべくんば直ちに折るべし、花無きを待ちて空しく枝を折る莫れ。】',
    );
    await era.printAndWait('………………');
    await era.printAndWait([acute.get_colored_name(), ' との恋は、もう長い。']);
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' は毎日、同じ時刻に起き、同じ時刻に食べ、同じ時刻に調教し、同じ時刻にレースへ出る。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' はいつも支え合い、',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' はいつも離れない。',
    ]);
    await era.printAndWait([
      '疑いようもなく、',
      you.get_colored_name(),
      ' は ',
      acute.get_colored_name(),
      ' を愛している。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は思う。',
      acute.get_colored_name(),
      ' も ',
      you.get_colored_name(),
      ' を愛している、と。',
    ]);
    await era.printAndWait([
      'だからこそ、',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' は、調教と暮らしの一つひとつを一緒に過ごせている。',
    ]);
    await era.printAndWait(
      '——だが、この暮らしは、本当にずっと続くのだろうか。',
    );
    await era.printAndWait('………………');
    await era.printAndWait('年は時とともに馳せ、意は日とともに去る。');
    await era.printAndWait('三年の光陰は、いつも静かに流れていく。');
    await era.printAndWait([
      'たとえ三年だけの黄粱の夢でも、',
      acute.get_colored_name(),
      ' と愛し合った日々は、',
      you.get_colored_name(),
      ' の一生でいちばん幸せな時間だ。',
    ]);
    await era.printAndWait(
      'だが、この幸せを手放したくないなら、灰色の熱い愛を生命の終わりまで燃やし続けるなら。',
    );
    await era.printAndWait([
      '——ならば、',
      acute.get_colored_name(),
      ' と、【帰る約束】と【再び会う誓い】を立てよう。',
    ]);
    await era.printAndWait([
      '準備が整えば、',
      acute.sex,
      'は屋上で ',
      you.get_colored_name(),
      ' を待っている。',
    ]);
  },
  async '99-notify'(acute, you) {
    await era.printAndWait([
      '準備が整えば、',
      acute.sex,
      'は屋上で ',
      you.get_colored_name(),
      ' を待っている。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async 99(acute, you, callname) {
    await era.printAndWait(
      '空の果てで轟音がひとつ、鉄の鳥がオレンジ色の飛行機雲を残す。',
    );
    await era.printAndWait(
      '黄昏のまばゆい輝きは間もなく幕を閉じ、そのあとは漆黒で幽かな月夜だ。',
    );
    await era.printAndWait([
      '屋上で、',
      acute.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' に背を向け、空の果ての雲を仰いでいる。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' の初対面と同じ、',
      acute.get_colored_name(),
      ' が屋上で行き場をなくした ',
      you.get_colored_name(),
      ' を拾ったあのときと同じ、今夜の屋上にも ',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' の二人しかいない。',
    ]);
    await era.printAndWait([
      '——だが今夜、',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' が立つ位置は、あのときと逆だ。',
    ]);
    await era.printAndWait([
      '屋上の扉をそっと閉じ、胸のざわめきを沈め、',
      you.get_colored_name(),
      ' はゆっくり近づく。',
    ]);
    await era.printAndWait([
      acute.sex,
      'の後ろに立ち、',
      acute.sex,
      'と一緒に空の果てのオレンジ色の雲を仰ぐ。',
    ]);
    await era.printAndWait(['それから、', acute.sex, 'の口調を真似て——']);
    era.printButton('「あらあら」', 1);
    await era.input();
    era.printButton('「溜息ばかりついていると、福が逃げてしまいますよ——」', 1);
    await era.input();
    await acute.say_and_wait('——');
    await era.printAndWait('心配の言葉は空に散り、風の中で砕ける。');
    await era.printAndWait([
      you.get_colored_name(),
      ' の知る ',
      acute.get_colored_name(),
      ' らしく、',
      acute.sex,
      'に余計な驚きはない。',
    ]);
    await era.printAndWait([
      acute.sex,
      'はゆっくり振り返り、つま先立ちになり、穏やかな表情の下、暗い瞳に晶の珠を溜めている。',
    ]);
    await acute.say_and_wait(['来てくれましたね、', callname, '。']);
    era.printButton(`「来たよ、ワンダーアキュート。」`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' は挨拶を交わす。穏やかさそのものが、もう多くを含んでいる。',
    ]);
    await era.printAndWait([
      'だが',
      acute.sex,
      'は両手を広げず、それに応じて ',
      you.get_colored_name(),
      ' も広げない。',
    ]);
    await era.printAndWait(
      'これはただの感謝の抱擁ではない。心まで独占したい、熱い私欲だ。',
    );
    await era.printAndWait(
      'つま先が立ち、きれいな鼻筋が顎の剃り残しを上下に撫で、桜色の痕が赤白い首筋に吸いつく。',
    );
    await era.printAndWait([
      '揺れる両耳が、',
      you.get_colored_name(),
      ' の口元を滑る。',
    ]);
    await era.printAndWait(
      '桃色のものが蠕き、深い灰色を飲み込みたがっている——',
    );
  },
  async '99-end'(acute, callname) {
    await era.printAndWait([
      '熱い液体の交換のあと、まだ溢れる泉を構わず、',
      acute.get_colored_name(),
      ' は下を包む白い布を身につけた。',
    ]);
    await era.printAndWait('月明かりの下、下腹の刻印が桃色の微光を放つ。');
    await era.printAndWait([
      acute.get_colored_name(),
      ' は言う。これはトレセンの最近の流行だ、と。この刻印を体に持つ',
      acute.uma_sex_title,
      'は、刻印の主だけのものになる、と。',
    ]);
    await era.printAndWait('そして今、刻印はあと一歩だ。');
    await acute.say_and_wait(['……ねえ、', callname, '？']);
    await era.printAndWait(
      '長いスカートを咥え、白い腹を見せ、言葉にならない欲を訴える。',
    );
    await era.printAndWait(
      '開いた胸は豊かな赤い実を晒し、両手に捧げる銀の輪は献上の宝物のようだ。',
    );
    await era.printAndWait(
      '野の鳥が慈悲を請うようでも、主を認めた家畜のようでもある。目尻の銀の珠が、胸の高ぶりを止められない。',
    );
    await era.printAndWait([
      'その精緻な銀の輪を受け取り、自分の両手で、',
      acute.get_colored_name(),
      ' の首にかける。',
    ]);
    await era.printAndWait([
      'それから、満ち足りた ',
      acute.get_colored_name(),
      ' は、微笑んで蹲る。',
    ]);
    await era.printAndWait('赤い舌を出し、獰猛な主獣に仕える。');
  },
};
