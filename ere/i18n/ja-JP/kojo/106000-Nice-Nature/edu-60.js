/**
 * @file ナイスネイチャ - 育成
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  race_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await nature.say_and_wait(
        `1着……あたしが1着！ ${callname}見て！ あたし、1着だよ`,
      );
      era.printButton('「おめでとう。勝てたのは、君が強いからだ」', 1);
      era.printButton('「自分の力で勝ったんだ」', 2);
      if ((await era.input()) === 1) {
        await nature.say_and_wait(
          'うん、あたしが強い……かは、わからないけど。でも……まあ、たまにはトレーナーの褒め言葉も受け取っとくか。',
        );
      } else {
        await nature.say_and_wait(
          `なに～～それ、大声で『だってあたし強いから』って宣言してるみたいじゃない？ あとで負けたら、恥ずかしいよ。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race: (() => {
    const title = 'いつも通り';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await nature.say_and_wait(
        `うんうん。${self_call}、無事にメイクデビューできた……`,
      );
      era.printButton('「お疲れさま」', 1);
      await era.input();
      await nature.say_and_wait('ありがとう。ちゃんと大戦してきたよ──はは。');
      await nature.say_and_wait('どう？ あたしの走り……どうだった？');
      era.printButton('「すごくよかったよ！」', 1);
      await era.input();
      await nature.say_and_wait('あはは！ 答えが潔いね──');
      await nature.say_and_wait(
        `こっちも先に、${callname} の今後の計画が知りたいな。`,
      );
      era.printButton('「先に聞くけど、走りたいレースはある？」', 1);
      await era.input();
      await nature.say_and_wait(
        '……走りたいレース、か……今のあたしに、目標を語る立場あると思う？',
      );
      await nature.say_and_wait(
        'そういうのはトレーナー主導でいいよ。ほら、実力を見せる番だよ～',
      );
      await era.printAndWait(
        `ナイスネイチャのデビュー前から、${you.name} は${nature.sex}が中距離向きだと考えていた。${nature.sex}の末脚は鋭く、踏ん張るべきところでも踏ん張れる。`,
      );
      await era.printAndWait(
        '今後のクラシック戦線を見据え、最初に選ぶべき一戦は──',
      );
      era.printButton('「『若駒ステークス』に出てみない？」', 1);
      await era.input();
      await nature.say_and_wait('おっ、なるほど。オープンで実力を見る、か。');
      await nature.say_and_wait('悪くないんじゃない？ それで行こ。');
      era.printButton('「じゃあ、いつも通り結果を残そう」', 1);
      await era.input();
      await nature.say_and_wait(
        'いつも通りって……それ、3着でいいってこと？ あたしの目標は3着じゃないよ。',
      );
      await nature.say_and_wait('はあ、毎回1着取っちゃう怪物もいるけどね……');
      await nature.say_and_wait(
        `……テイオーはどうするんだろ。${nature.sex}、どのレースに出るのかな。`,
      );
      await era.printAndWait(
        `トウカイテイオーはナイスネイチャと同世代のデビューだから、${nature.sex}が気にするのも無理はない。でも……`,
      );
      era.printButton('「いちばん大事なのはトレーニングだよ！」', 1);
      await era.input();
      await nature.say_and_wait(
        `わかってるよ。ぶつかんなければいいなって思っただけ～ じゃあ、これからもよろしくね～`,
      );
      await era.printAndWait(
        'こうして、次の目標は『若駒ステークス』に決まった！',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_ny: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`${callname}、新年の抱負、書かない？`);
      await era.printAndWait(
        'ナイスネイチャはそう言いながら、筆と紙を差し出してきた。',
      );
      await era.printAndWait(
        '新年の抱負——新しい一年への期待と祝福を紙に託すものだ。書くべきは——',
      );
      era.printButton('「健康」（体力+300）', 1);
      era.printButton('「強くなれ」（全能力+10）', 2);
      era.printButton('「多才」（スキルPt+70）', 3);
      if (era.get('love:60') >= 75) {
        era.printButton('「子孫繁栄」', 4);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            `健康か……${callname} もその年になったんだね、腰痛とか煩いよね？ ${self_call} わかる——`,
          );
          await nature.say_and_wait([
            'ん？ 自分に書くんじゃない？ じゃあ……？ えっ！？ あたし？ ちょ、その……',
            callname,
            '、自分よりあたしを気にしてるんだ……うっ！ そういうの反則！',
            callname,
            ' もあたしも、新しい一年は元気に過ごそうね！',
          ]);
          break;
        case 2:
          await nature.say_and_wait([
            '強くなれ、か～',
            callname,
            '、意外と熱血？ それとも見た目より精神年齢が……ははは、冗談……',
          ]);
          await nature.say_and_wait([
            'ん？ 自分に書くんじゃない？ じゃあ……？ えっ！？ あたし？ ちょ、その……',
            callname,
            '、自分よりあたしを気にしてるんだ……うっ！ そういうの反則！',
            callname,
            ' もあたしも、新しい一年は楽しく過ごそうね！',
          ]);
          break;
        case 3:
          await nature.say_and_wait(
            `多才？ たしかに才能が多い人のほうが${nature.child_sex_title}にもモテるよね、${callname} もその年だし、そろそろ自分の${
              nature.sex
            }のこと考えたほうが……あたしが言うのも変だけど、はははは……`,
          );
          await nature.say_and_wait([
            'ん？ 自分に書くんじゃない？ じゃあ……？ えっ！？ あたし？ ちょ、その……',
            callname,
            '、自分よりあたしを気にしてるんだ……うっ！ そういうの反則！',
            callname,
            ' もあたしも、新しい一年は楽しく過ごそうね！',
          ]);
          break;
        case 4:
          await nature.say_and_wait(
            `し、子孫繁栄？ ${callname} もほんと、朝から大胆な話題……でも ${callname} が望むなら……あたしもいいよ？ いっそ……今から？`,
          );
          await era.printAndWait(
            '頬を赤らめたナイスネイチャが一歩ずつ近づいてくる。どうやら一戦は避けられそうにない……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = '「偶然」から';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, teio, you) => {
      await nature.say_and_wait('勝っちゃった……あたし……テイオーに勝った？');
      await nature.say_and_wait(
        'は、はは……はは……！ すごい、ほんとに……！？ あたしが勝った……',
      );
      await teio.say_and_wait('いやー負けちゃった！');
      await nature.say_and_wait('……うっ！ テイオー……！ あたし──');
      await teio.say_and_wait('──強くなるきっかけ、見つけちゃった！');
      await nature.say_and_wait('えっ……');
      await teio.say_and_wait(
        'ボク、まだ強くなれるんだ！ へへ、楽しみになってきた──！',
      );
      await teio.say_and_wait('最強まであと何キロ？ 一気に駆け上がるよ！');
      await nature.say_and_wait('あ……');
      await nature.say_and_wait(
        '危ない危ない。あたし、得意げになるとこだった。',
      );
      await nature.say_and_wait('ちがう。今回勝てたの……ただの偶然。');
      await nature.say_and_wait(
        'だって、どう考えても──あの子のほうが輝いてるし……',
      );
      era.printButton('「勝ったね、ネイチャ！」', 1);
      await era.input();
      await nature.say_and_wait('……うん。');
      era.printButton('「嬉しくないの？」', 1);
      await era.input();
      await nature.say_and_wait(
        '勝った直後は嬉しかったよ。嬉しいけど……この勝ち、絶対に偶然。実力で勝ったんじゃない。',
      );
      era.printButton('「どうしてそう思うの？」', 1);
      await era.input();
      await nature.say_and_wait(
        'だって……おかしいでしょ？ あたしがテイオーより強いなんて。',
      );
      await nature.say_and_wait(
        'これっぽっちも輝いてないあたしだよ？ どこかで間違えてる。──もう！ 勘違いして、恥ずかしい──！',
      );
      await era.printAndWait(
        `ナイスネイチャは確かに勝った。そしてその理由は間違いなく${nature.sex}の実力だ。でも${nature.sex}は……`,
      );
      await nature.say_and_wait('……ほんと恥ずかしい。');
      await era.printAndWait(
        `勝ったのに負けたみたいに沈むのは、${nature.sex}がまだ自分の実力を信じきれないからだ。つまり自信不足。なら、今必要なのは──`,
      );
      era.printButton('「ネイチャ、遠征しない？」', 1);
      await era.input();
      await nature.say_and_wait('遠征……？ えっ？ どうして……');
      era.printButton('「夏も、結果を残そう」', 1);
      await era.input();
      await era.printAndWait(
        `今${nature.sex}をクラシック戦線に乗せると危険な賭けになる。残っているわずかな自信まで失わせかねない。それより地方競走に挑んで堅実に結果を残し、最後は${nature.sex}の成長につなげたい。`,
      );
      await nature.say_and_wait(
        'つまり……目標は『皐月賞』でも『日本ダービー』でもない……？……あたし、まだ実力が足りないから。',
      );
      era.printButton('「今は焦らず、本当に強くなったことを確かめよう」', 1);
      await era.input();
      await nature.say_and_wait('……わかった。');
      await nature.say_and_wait(
        'そうだね。今のあたしじゃ、次また勝っても……受け止められない。',
      );
      era.printButton('「この夏を乗り越えれば、きっと強くなれる」', 1);
      await era.input();
      await nature.say_and_wait('……そうだといいけど。');
      await era.printAndWait('そう言って、ナイスネイチャは長く息を吐いた');
      await nature.say_and_wait(
        'うん、OKOK！ 各地巡回、あたしも向いてるかも。それで？ ずっと巡回させるつもりじゃないよね？ どのレースにするか、決めた？',
      );
      era.printButton('「『小倉記念』はどう？」', 1);
      await era.input();
      await era.printAndWait(
        '小倉で行われる重賞。ナイスネイチャの自信を育てるには、これ以上ない一戦だ。',
      );
      await nature.say_and_wait(
        'なるほど、距離も若駒ステークスと同じだったよね？ うん、そこにしよう。でも、夏の小倉か……熱中症になりそう……',
      );
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        nature.get_colored_name(),
        ' は次の目標を『小倉記念』に決めた！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  waka_sta_lose: (() => {
    const title = '負けても、夏は来る';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, teio, you, callname, self_call) => {
      await nature.say_and_wait('はぁ……はぁ……はぁ……');
      await nature.say_and_wait(
        `……うん、悪くないよ、${self_call}、ちゃんと結果は残した──`,
      );
      await era.printAndWait('？？？「わああああああ……！！」');
      await nature.say_and_wait('……えっ！？ この声なに──');
      await teio.say_and_wait(
        'ボクの実力はこれだけじゃないよ！ これからもボクの活躍、見ててね！ みんなの想像、どんどん超えていくって約束する！ また会おう！ ありがとう♪',
      );
      await era.printAndWait('？？？「わああああああ……！！」');
      await nature.say_and_wait('…………');
      await nature.say_and_wait(
        '雰囲気、めちゃくちゃ盛り上げてる。さすがテイオー──',
      );
      await nature.say_and_wait(
        '……あたし、バカだ。あんな相手に挑もうなんて。しかもやっぱりこの程度。身の程知らずもいいとこ。ほんとバカ……',
      );
      await nature.say_and_wait('……あー……テイオー……まぶしい……');
      era.drawLine();
      await nature.say_and_wait(
        `──あ、${callname}……、その……${self_call}、走って戻ってきたよ──`,
      );
      era.printButton(`「${nature.sex}に食らいついたのはすごいよ」`, 1);
      await era.input();
      await nature.say_and_wait(
        'はは──もう、慰めなくていいよ。ほら、ちゃんと要求どおりやったでしょ？',
      );
      await nature.say_and_wait(
        '『いつも通り』結果を残す。うん、仕事は果たした。',
      );
      await nature.say_and_wait(
        '……だから、上を目指そうなんて、余計なことだったね。挑もうなんて思わなければ、ほんとにいつも通りだった。',
      );
      await nature.say_and_wait(
        '……気持ちも含めて。もう──輝くにはまだ遠すぎるよ──',
      );
      await era.printAndWait(
        `実際${nature.sex}の言うとおり、今回の結果は十分だ。1着ではなくても、もっと前向きに捉えていい成績。`,
      );
      await nature.say_and_wait('……はあ。');
      await era.printAndWait(
        `なのに${nature.sex}はこう沈んでいる。もともと自信が薄いのが主な理由だろう。なら、今必要なのは──`,
      );
      era.printButton('「ネイチャ、遠征しない？」', 1);
      await era.input();
      await nature.say_and_wait('遠征……？ えっ？ どうして……');
      era.printButton('「夏も、結果を残そう」', 1);
      await era.input();
      await era.printAndWait(
        `今${nature.sex}をクラシック戦線に乗せると危険な賭けになる。残っているわずかな自信まで失わせかねない。それより地方競走に挑んで堅実に結果を残し、最後は${nature.sex}の成長につなげたい。`,
      );
      await nature.say_and_wait(
        'つまり……目標は『皐月賞』でも『日本ダービー』でもない……？……あたし、まだ実力が足りないから。',
      );
      era.printButton('「今は焦らず、本当に強くなったことを確かめよう」', 1);
      await era.input();
      await nature.say_and_wait('……わかった。');
      await nature.say_and_wait(
        'そうだね。今のあたしじゃ、次また勝っても……受け止められない。',
      );
      era.printButton('「この夏を乗り越えれば、きっと強くなれる」', 1);
      await era.input();
      await nature.say_and_wait('……そうだといいけど。');
      await era.printAndWait('そう言って、ナイスネイチャは長く息を吐いた');
      await nature.say_and_wait(
        'うん、OKOK！ 各地巡回、あたしも向いてるかも。それで？ ずっと巡回させるつもりじゃないよね？ どのレースにするか、決めた？',
      );
      era.printButton('「『小倉記念』はどう？」', 1);
      await era.input();
      await era.printAndWait(
        '小倉で行われる重賞。ナイスネイチャの自信を育てるには、これ以上ない一戦だ。',
      );
      await nature.say_and_wait(
        'なるほど、距離も若駒ステークスと同じだったよね？ うん、そこにしよう。でも、夏の小倉か……熱中症になりそう……',
      );
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        nature.get_colored_name(),
        ' は次の目標を『小倉記念』に決めた！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ss_1: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '今日から『夏季合宿』──実力を伸ばす強化トレーニングが始まる。',
      );
      await nature.say_and_wait('暑い……');
      await nature.say_and_wait(
        'お日さま元気すぎ。日陰暮らしのあたしにはまぶしすぎ……',
      );
      await nature.say_and_wait(
        '一瞬で、最後まで無事に持つか心配になってきた。',
      );
      era.printButton('「『小倉記念』もあるし、気合い入れないとね」', 1);
      await era.input();
      await nature.say_and_wait(
        'いや、問題はそこだよ。合宿の途中でレースとか、スケジュール盛りすぎ。',
      );
      await nature.say_and_wait(
        'ここ、小倉から遠いし、移動でトレーニング量が減る……',
      );
      await nature.say_and_wait(
        'もともと雲の上の連中に、あっさり置いていかれる──',
      );
      era.printButton('「じゃあ小倉まで走り続けよう！」', 1);
      await era.input();
      await nature.say_and_wait(
        'あ、いいねいいね！ 走りながらトレーニング、一石二鳥。',
      );
      await nature.say_and_wait('どうせ千キロくらいでしょ？ はいはい、余裕──');
      await nature.say_and_wait('そんなわけないって──急に変な案出さないでよ。');
      await nature.say_and_wait('トレーナー、内心楽しみにしてるでしょ……');
      await era.printAndWait(
        `こうして ${you.name} とナイスネイチャの熱い夏季合宿が始まった。`,
      );
      await nature.say_and_wait(
        'あ、熱血はほどほどでお願い。じゃあ、よろしく──',
      );
    };
    f.title = title;
    return f;
  })(),
  koku_kin: (() => {
    const title = 'メッキでも';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait(
        `えへへ……できたよ、${callname}。ちゃんと結果、残した！`,
      );
      era.printButton('「よくやった！」', 1);
      await era.input();
      await nature.say_and_wait('うん！');
      await nature.say_and_wait(
        'ふふ……あのね、小倉の商店街のみんなも見に来てくれた。二言三言話しただけなのに？ 忙しいはずなのに……',
      );
      await nature.say_and_wait(
        '……あんなに応援してもらえると、これでもいいなって思えてきた。あたしはあたしのやり方で、一歩ずつ……ゆっくり進めばいい、でしょ？',
      );
      await nature.say_and_wait('届く日があるかわからなくても……');
      await nature.say_and_wait(
        `……ねえ、${callname}。ちょっとダサいこと言うね。`,
      );
      era.printButton('「どうしたの？」', 1);
      await era.input();
      await nature.say_and_wait('……あたし、テイオーに勝てるかな？');
      await nature.say_and_wait('……冗談！ 冗談だから忘れて──');
      era.printButton('「勝てるよ」', 1);
      await era.input();
      await nature.say_and_wait('……ありゃ……あうっ。');
      await nature.say_and_wait(`……うん、${callname} ならそう言うと思った。`);
      await nature.say_and_wait('答えわかってて聞くの、卑怯だよね。でも……');
      await nature.say_and_wait('誰かに押してもらわないと、前に進めないから。');
      await nature.say_and_wait(
        `……テイオーはクラシックの道を駆けてる。次は${nature.sex}、きっと──『菊花賞』を目指す。`,
      );
      await nature.say_and_wait(
        'だからあたしも次は……『菊花賞』で……走りたい。どう……思う……？',
      );
      era.printButton('「距離がかなり伸びるけど、大丈夫？」', 1);
      await era.input();
      await era.printAndWait(
        `『菊花賞』は3000メートル。今回の小倉記念より1000メートル長い。ナイスネイチャには厳しい戦いになるかもしれない。でも${nature.sex}が覚悟を決めたなら……！`,
      );
      await nature.say_and_wait(
        'もちろん、問題は大きいと思う。あんな距離、たぶん苦手だし。',
      );
      await nature.say_and_wait(
        'でも……今回は引き下がらない。──『菊花賞』に出よう！',
      );
      era.printButton('「よし！」', 1);
      await era.input();
      await nature.say_and_wait('はあ～～～決まった。ほんとに決まった。');
      await nature.say_and_wait(
        'ネイチャよ、もう逃げ場ないよ。大舞台で真正面からぶつかる……',
      );
      await nature.say_and_wait('でも……うん。これも、悪くない……かな？');
      await era.printAndWait(
        `……${nature.sex}は少し自信を取り戻したようだが、『菊花賞』に向けて、${you.name} はまだ${nature.sex}のためにできることがあるはずだ。そう考えていると、思い出したのは──`,
      );
      await nature.used_to_say_and_wait('どんな成績でも、みんな喜んでくれる。');
      await nature.used_to_say_and_wait(
        '頑張ってるって笑って褒めてくれる。でもあたし自身は、全然確信がない。',
      );
      await nature.used_to_say_and_wait(
        'うん……頑張ったって、はっきり言えないんだよね──たとえば1着なら明確でしょ？ トロフィーもらえるし、天皇賞なら盾とか。',
      );
      await nature.used_to_say_and_wait(
        'それを見ると、ああ、ほんとに頑張ったって思える。',
      );
      await nature.used_to_say_and_wait('……でもその気持ちは、1着だけの特権。');
      await era.printAndWait(
        `……${you.name} はまだ${nature.sex}のために、なにかできる！`,
      );
      await era.printAndWait('──小倉から中央へ戻る道中……');
      await nature.say_and_wait(
        'あ、トレーナー。そっちに預けたお菓子、もらっていい──？',
      );
      await nature.say_and_wait(
        '小倉のみんなが和菓子くれたじゃん？ 新幹線で食べようと思って──',
      );
      era.printButton('「わかった」', 1);
      await era.input();
      await era.printAndWait('（がさごそ……ひらり）');
      await nature.say_and_wait('あ、落ちそうだよ。');
      await nature.say_and_wait('……折り紙のトロフィー……？ いびつだね。');
      era.printButton('「……これ、僕が作った」', 1);
      await era.input();
      await nature.say_and_wait(
        'へぇ～トレーナーが？ ふふ──そんな可愛い趣味があったんだ～',
      );
      era.printButton('「ネイチャに渡したくて作ったんだ」', 1);
      await era.input();
      await nature.say_and_wait('そっか……');
      await nature.say_and_wait('えっ！？ あたしに！？ どうして……？');
      era.printButton('「自信を持ってほしくて」', 1);
      await era.input();
      await nature.say_and_wait('自信……');
      await you.say_and_wait(
        'どんな結果でも、自分を信じにくい気持ちはわかる。',
      );
      await you.say_and_wait(
        'だから、積み重ねた成績を形にしたら、少しは自信になるんじゃないかって。',
      );
      await nature.say_and_wait('……あたしのために……わざわざ……');
      await nature.say_and_wait(
        '……つまり、大人のくせにホテルでこもりながらトロフィー作ってたの？',
      );
      await nature.say_and_wait('あたし、小学生じゃないよ。');
      era.printButton('「それはそうだね……」', 1);
      await era.input();
      await era.printAndWait(
        `……そのとおり。作ったはいいが、子供扱いみたいで、${you.name} は渡すべきか迷っていた……`,
      );
      await nature.say_and_wait('……ふふ。');
      await nature.say_and_wait(
        'しょうがないなあ。あなたのためなら受け取っとく。',
      );
      era.printButton('「え？」', 1);
      await era.input();
      await nature.say_and_wait(
        'ん？ なんで驚くの？ わざわざ作ってくれたんでしょ？',
      );
      await nature.say_and_wait('ほらほら、早く出して。出さないと帰らないよ。');
      era.printButton('「受け取ってくれるの？」', 1);
      await era.input();
      await nature.say_and_wait('……だって……');
      await nature.say_and_wait(
        'いびつなトロフィー、ちょうどあたし向きでしょ？',
      );
      await nature.say_and_wait(
        'メッキの金色とか、角が歪んでるとか。全部……あたしっぽくない？',
      );
      await nature.say_and_wait(
        'なんか親近感？ みたいな……うん、つまりそういうこと。──ありがとう。',
      );
      await nature.say_and_wait('……次のトロフィー、も～っと上手く作ってよね。');
      era.printButton('「次！？」', 1);
      await era.input();
      await nature.say_and_wait(
        'だってまだレース出るし。トレーナーも頑張ってね！ あたしもレースで頑張るから。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_se: (() => {
    const title = '夏季合宿終了';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await era.printAndWait(
        '今日は夏季合宿の最終日。記念に、学園が盛大な花火を打ち上げる',
      );
      await era.printAndWait(
        'ナイスネイチャと並んで海岸に立ち、海の上で咲く花火を見上げる',
      );
      await nature.say_and_wait(
        `——夏、終わっちゃったね。なんていうか、青春だなあ——あたし、そういう役じゃないけど。でも、${callname}——`,
      );
      await era.printAndWait(
        `隣のナイスネイチャは感嘆していたが、花火の破裂音で${nature.sex}の声は聞き取りにくい。`,
      );
      await era.printAndWait(
        `${nature.sex}の最後の言葉を聞き返そうとしても、ナイスネイチャは小さく笑って流した。`,
      );
      await era.printAndWait(
        'ナイスネイチャとの夏季合宿は、こうして終わった。',
      );
    };
    f.title = title;
    return f;
  })(),
  s_a_47_33: (() => {
    const title = '覚悟を決めて、前へ！';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        `川岸でナイスネイチャを見たという話を聞き、${you.name} は${nature.sex}を探しに行った──`,
      );
      await nature.say_and_wait('はぁ、はぁ……はぁ……');
      await nature.say_and_wait('だめ、走ってるとき……頭も動かさないと……');
      await nature.say_and_wait(
        'それから士気。ネイチャ、沈んでるよ。落ち込むな、元気出せ～',
      );
      await nature.say_and_wait(
        '思い出せ、早く思い出せ。あたしはどう走ってた？',
      );
      await nature.say_and_wait(
        '自分のやり方を守って、一歩ずつ……ゆっくり進めばいい、でしょ。',
      );
      await nature.say_and_wait('届く日があるかわからなくても……');
      await nature.say_and_wait('……できる限り、正面から向き合う。');
      await nature.say_and_wait(
        'まだ胸を張って、自信を持ってレースに臨めるわけじゃない……',
      );
      await nature.say_and_wait('でも逃げ場はない。だから、テイオーと──');
      era.printButton('「ネイチャなら、できる」', 1);
      await era.input();
      await nature.say_and_wait(
        `あ……${callname} ったら、すぐ甘やかすんだから～`,
      );
      await nature.say_and_wait(
        'だめだよ～ あたしみたいなのに絡まれちゃうよ……',
      );
      era.printButton('「自主練、お疲れさま！」', 1);
      await era.input();
      await nature.say_and_wait('うわっ！ い、いつからいたの！？');
      await nature.say_and_wait(
        'あ……まあ、言わなくていい。知ったら、たぶん胸が苦しくなる。',
      );
      era.printButton('「今のは、どんなトレーニング？」', 1);
      await era.input();
      await nature.say_and_wait('……トレーニングって言えば、まあそうかな。');
      await nature.say_and_wait(
        '勝つ力を少し磨きたくて、自分に合う武器を探してる。',
      );
      await nature.say_and_wait(
        '要はゴール前。最後の直線をちゃんと掴まないと。',
      );
      await nature.say_and_wait(
        'それを前提にした3000メートル……はは。そう思うと、ほんと長いね。',
      );
      await era.printAndWait(
        '3000メートル……仕掛けのタイミングを誤れば、直線で勝負を決めるのも難しい。',
      );
      await era.printAndWait(
        `${you.name} はナイスネイチャに、伸び伸び走ってほしい。レースのあと、いつもの明るい笑顔が見たい。`,
      );
      await nature.say_and_wait(`${callname}？`);
      era.printButton('「頑張ろう！」', 1);
      await era.input();
      await nature.say_and_wait('なに？');
      await nature.say_and_wait('頑張ろう……雑な助言……');
      era.printButton('「いや、今のは……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は自分を励めるつもりが、つい口に出てしまった。`,
      );
      await nature.say_and_wait(
        'ぷっ、ふふふ……あははは！ もう！ 『終わった』みたいな顔しないでよ。',
      );
      await nature.say_and_wait('ふう……うん、そのとおり、頑張ろう。');
      await nature.say_and_wait('逃げられないなら、前に進むしかない。');
      await nature.say_and_wait(`${callname}、今ちょっと付き合ってくれる？`);
      await nature.say_and_wait(
        `${self_call}、頑張るから。そばで見ててくれたら、嬉しい。`,
      );
      era.printButton('「こちらこそ、よろしく」', 1);
      await era.input();
      await nature.say_and_wait('はは、気が利くね。');
      await nature.say_and_wait('よし、行くよ！');
      await nature.say_and_wait(
        '頑張るほど、トレーナー用トロフィーも期待できるよ？',
      );
      era.printButton('「……精進するよ」', 1);
      await era.input();
      await nature.say_and_wait('あはははは！');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho: (() => {
    const title = '自分のレース';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '観客「ナイスネイチャ、お疲れさま──！ いい走りだったよ──！」',
      );
      await era.printAndWait(
        'レース後、観客席からの声は、ナイスネイチャが『自分のレース』を走れた証だ。そして──',
      );
      await nature.say_and_wait(
        'トレーナー、あたし……勝った……ちゃんと自分のレースを走れた……よね？',
      );
      era.printButton('「うん！」', 1);
      await era.input();
      await nature.say_and_wait('よかった……えへへ。');
      await nature.say_and_wait(
        '『菊花賞』でこの結果、申し分ない！ あたし、ほんと頑張った！',
      );
      await nature.say_and_wait('今日も……いびつなトロフィー、用意してある？');
      era.printButton('「もちろん、『頑張った賞』だよ！」', 1);
      await era.input();
      await nature.say_and_wait('あ……トレーナーの手づくりトロフィー！');
      await era.printAndWait(
        `『小倉記念』のとき、ナイスネイチャに自信を持たせるため、${you.name} は折り紙のトロフィーを作って渡した。前回${nature.sex}が楽しみにしていたから、${you.name} は今回も作った……`,
      );
      await nature.say_and_wait(
        '……ほんとに作ったんだ。えへへ、相変わらずいびつ。',
      );
      await nature.say_and_wait('いいねいいね。あとで授賞式しよ。');
      await nature.say_and_wait(
        `ネイチャ${nature.sex_code === 1 ? '' : 'さん'}の活躍を祝って♪`,
      );
      await nature.say_and_wait(
        `……今は調子乗れてるけど、テイオーも出てたら、こんなにうまくいかなかったかも……テイオー${nature.sex}、大丈夫かな。怪我、どれくらいなんだろ。`,
      );
      era.printButton(`「${nature.sex}なら大丈夫だよ」`, 1);
      await era.input();
      await nature.say_and_wait('うん……そうだね。');
      await nature.say_and_wait(
        `だって${nature.sex}はテイオーだもん。すぐ復活して、『ボクは無敵だよ！』とか言いそう。`,
      );
      await nature.say_and_wait('……その前に、あたしももう少し強くならないと。');
      era.printButton('「まだ大一番が残ってる」', 1);
      await era.input();
      await nature.say_and_wait(
        'なに？ 冬も近いのに、最近まだ大一番？……あ！ もしかして……',
      );
      era.printButton('「『有馬記念』、挑戦しない？」', 1);
      await era.input();
      await era.printAndWait(
        `ナイスネイチャには厚いファンがいて、『菊花賞』でも実力を出せた。今の${
          nature.sex
        }なら『有馬記念』に挑める！ それだけでなく、『有馬記念』の出走者は今年注目の${nature.uma_sex_title}たちだ。${
          nature.couple_title
        }と走ることで、さらに成長できるはず。`,
      );
      await nature.say_and_wait('『有馬記念』か……');
      await nature.say_and_wait(
        'いつもの応援に報いるなら、いちばんいい舞台……だよね？',
      );
      await nature.say_and_wait(
        '……できないかもしれない。出ても全然力を出せないかも。でも……',
      );
      await nature.say_and_wait('──『有馬記念』に出たい！');
      era.printButton('「じゃあ、挑もう！」', 1);
      await era.input();
      await era.printAndWait(
        `こうして、${you.name} とナイスネイチャはクラシック級最後の挑戦を『有馬記念』に決めた！`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「それから……これも祝いだ」', 1);
        await era.input();
        await nature.say_and_wait('えっ？ なになに？');
        await era.printAndWait(
          'ナイスネイチャの疑問にはすぐ答えず、背後で控え室の鍵をかけた',
        );
        era.printButton('「うちの家系、自慢の染色体だよ」', 1);
        await era.input();
        await nature.say_and_wait(
          '……えっ？ 待って待って待って？ ここでするの？ ここ控え室だよ！',
        );
        await era.printAndWait(
          `${you.name} がいきなり服を脱ぎはじめると、ナイスネイチャの頬が一気に赤くなり、ソファの後ろへ縮こまる。`,
        );
        era.printButton(
          '「大丈夫、ここは防音もいいし、誰も来ない……君も、欲しいんだろ？」',
          1,
        );
        await era.printAndWait(
          `レースを終えたばかりの${nature.uma_sex_title}は、高速で駆けた熱をまだ体に溜め、発情に近い状態になる。今がまさにそれで、勝負服の下のスパッツさえ、わずかに湿っているのがわかる`,
        );
        await nature.say_and_wait('で……でも、汗臭くて——');
        era.printButton(
          '「ネイチャの汗が臭いはずない。むしろそれがいい！」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `ナイスネイチャが言い切る前に、${you.name} はソファへ押し倒し、勝負服の内側へ両手を滑り込ませる。ナイスネイチャもすぐ抵抗をやめ、体を ${you.name} に委ねた……`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  s_a_47_42: (() => {
    const title = '王座の裏側';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, luna, maya, you, callname) => {
      await era.printAndWait(
        `${you.name} とナイスネイチャが次の目標『有馬記念』に向けてトレーニングを続けるある日……`,
      );
      await nature.say_and_wait(
        `ベンチプレス終わり～${callname}、ちょっと休んでいい？`,
      );
      era.printButton('「いいよ」', 1);
      await era.input();
      await nature.say_and_wait('じゃあ10分だけ。');
      await teio.say_and_wait('はぁ……はぁ……！ あと3セット……！');
      await nature.say_and_wait('ん？ あれは……');
      await era.printAndWait(
        `${you.name} がナイスネイチャの視線を追うと、トウカイテイオーが必死にトレーニングしていた。${teio.sex}は体を支える特殊な機器を使っているようだ……`,
      );
      await maya.say_and_wait('あ、ネイチャちゃん～♪ 一緒に休もー！');
      await nature.say_and_wait(
        'おっ──マヤノ、ちょうどいい。見て、テイオーなにやってるの？',
      );
      await maya.say_and_wait(
        `${teio.sex}、リハビリだよ──！ 怪我、ちょっと大変だったんだ。`,
      );
      await nature.say_and_wait('えっ……');
      await maya.say_and_wait(
        'だってテイオーちゃん、前はベッドでずっと寝てたし──',
      );
      await nature.say_and_wait('そっか……');
      await teio.say_and_wait('……痛い、脚が重い～～！ ちょっと頑張りすぎ？');
      await luna.say_and_wait('テイオー、奮闘しているようだな。');
      await teio.say_and_wait(
        'わあ、会長！ もちろん、絶好調で頑張ってるよ！……って言いたいけど、絶好調まではまだ遠い。',
      );
      await teio.say_and_wait(
        'でも、完全復活の道は見えてきた！ 前より強くなれるはずだよ♪',
      );
      await luna.say_and_wait('む……努力を褒めろと先に言われると思っていたが……');
      await teio.say_and_wait(
        'えっ──そんな要求しないよ！ 勝ちたいときに褒められたい！',
      );
      await teio.say_and_wait(
        '努力は当たり前だもん！ ずっとここに縛られてられないし。',
      );
      await teio.say_and_wait(
        '早く治さないと走れない。走らないと……会長に追いつけない。でしょ？',
      );
      await luna.say_and_wait(
        '……なるほど。失礼した。君の精神力を、以前は見くびっていた。',
      );
      await luna.say_and_wait(
        '今は実力が安定し、心身ともに充実した時期だ。ここで怪我をすれば、私でも苦しい。',
      );
      await teio.say_and_wait(
        '……だから励ましに来たの？ へへ。会長ったら、ボクを誰だと思ってるの？',
      );
      await teio.say_and_wait(
        'レースもライブも大活躍！ 誰より速く、強く、かっこいい。',
      );
      await teio.say_and_wait(
        'ボク……吾は無敵のテイオー様だよ！ なにがあっても軽く乗り越える！',
      );
      await luna.say_and_wait(
        'ふ……そうだな。期待しているぞ、トウカイテイオー！',
      );
      await teio.say_and_wait('うん！');
      await nature.say_and_wait(`……${teio.sex}、前より輝いてない？`);
      await nature.say_and_wait(
        `壁にぶつかったせいで、${teio.sex}が強くなった、ってやつか……`,
      );
      await nature.say_and_wait(
        'あたしみたいな端役は……壁にぶつかっても悩むだけ。',
      );
      await nature.say_and_wait(
        `……でも${teio.sex}は簡単に立て直す。さすが主役、格が違う。`,
      );
      await maya.say_and_wait(
        `ん──簡単かな？ テイオーちゃん${teio.sex}、あのときすごく泣いてたよ。`,
      );
      await nature.say_and_wait('えっ……？');
      await maya.say_and_wait(
        `だって大事なレースに出られなかったんだもん。あのとき${teio.sex}、ほんとに苦しそうだった。`,
      );
      await nature.say_and_wait('……そ……そっか。あのテイオーが……');
      await era.printAndWait(
        'その後のトレーニング中、ナイスネイチャは考え込んでいた。',
      );
      await era.printAndWait(
        `──トレーニングが終わると、${nature.sex}はゆっくりと ${you.name} に気持ちを話した。`,
      );
      await nature.say_and_wait(
        '……あたし、ずっと誤解してた。ちがう、たぶん……わざと誤解してた。',
      );
      await nature.say_and_wait(
        `テイオーは主役だから強い。${teio.sex}は生まれつき才能がある。最初から恵まれてる。`,
      );
      await nature.say_and_wait(
        `${teio.sex}はあたしみたいな端役とはちがう。そう思って、弱い自分を守ってた。`,
      );
      await nature.say_and_wait('でも……違った。テイオーもあたしも、同じ。');
      await nature.say_and_wait(
        `${teio.sex}だって、どれだけ頑張っても勝てないこともあるし、怪我もする……その苦しさも知ってる。`,
      );
      await nature.say_and_wait(
        `${teio.sex}とちがうのは……打撃を受けたあとの反応。自分の力で立ち上がれるのが、${teio.sex}の強さ。`,
      );
      await nature.say_and_wait(
        '……もう、いまさら怖い。あんなに強い子に勝てるなんて、思ってたなんて。',
      );
      await nature.say_and_wait(
        'あたしなんて、根性も勇気もなくて、前を走る人を見て不公平だって言うだけ。',
      );
      await nature.say_and_wait(
        '──あの舞台に立てないと思ってたけど、降りたのは自分だった。',
      );
      await nature.say_and_wait(
        '身の程知らずで、欲張りで、甘えるだけ。でも、でも……',
      );
      era.printButton('「それでも勝ちたい」', 1);
      await era.input();
      await nature.say_and_wait('……うん。');
      await nature.say_and_wait(
        'あの子と、ほんの少しでも同じところがあるなら、あたしも……',
      );
      await nature.say_and_wait('あたしも……！');
      await era.printAndWait(
        `${nature.sex}は続きを言わなかったが、覚悟の宿った瞳がすべてを語っていた。`,
      );
      era.printButton('「勝とう！」', 1);
      await era.input();
      await nature.say_and_wait('──うん！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_classical: (() => {
    const title = '遠望';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await nature.say_and_wait('勝、勝っちゃった……！ 『有馬記念』で勝った……');
      era.printButton('「おめでとう！」', 1);
      await era.input();
      await nature.say_and_wait('トレーナー！ 聞いて、あたし……！');
      await nature.say_and_wait('全部聞こえた。みんなが応援してくれる声！');
      await nature.say_and_wait('嘘みたいでしょ？ でも、ほんと！');
      await nature.say_and_wait(
        'いつもは自分の心拍と呼吸と、風の音しか聞こえないのに。',
      );
      await nature.say_and_wait(
        '今日は……はっきり聞こえた。『ネイチャ、頑張れ』って声！',
      );
      await nature.say_and_wait(
        'だから体力が尽きそうなときも踏ん張れた。ほんと……楽しく走れた！',
      );
      await era.printAndWait(
        `ナイスネイチャと応援してくれる人たちの間には深い絆がある。${nature.sex}にとって、今日の『有馬記念』は特別な一戦だったようだ。`,
      );
      await nature.say_and_wait('まだ走りたい。来年も……この舞台に立ちたい！');
      await nature.say_and_wait('……あー、バカ！ 焦りすぎ！');
      await nature.say_and_wait('でもほんと楽しかったんだよ……（もじもじ）');
      await era.printAndWait(
        'たしかに、今から来年の『有馬記念』を目標にするのは少し早い。その間に今の勢いを保てるレースを入れるなら……',
      );
      era.printButton('「『宝塚記念』もあるよ！」', 1);
      await era.input();
      await nature.say_and_wait(
        '『宝塚記念』……ファン投票で出走者を決めるレースだよね？ 『有馬記念』と同じ……',
      );
      await nature.say_and_wait(
        'あたし、こういうレースのほうが力出せるかも。うん、出たい……『宝塚記念』！',
      );
      await era.printAndWait(
        `とはいえ、そのレースまでまだ少し時間がある。${you.name}とナイスネイチャは、その間にいろいろなレースに出て、『宝塚記念』へ向けて成長していくことにした。`,
      );
      await nature.say_and_wait(
        'あたしたち、焦りすぎ？ ここで次のレースまで決めちゃうなんて──',
      );
      await era.printAndWait(
        '商店街のみんな「ネイチャ──！ いい走りだったよ──！」',
      );
      await era.printAndWait(
        `商店街のみんな「世界一の${nature.uma_sex_title}だ！ あたしたちの誇りだよ──！」`,
      );
      await nature.say_and_wait(
        '待って、み、みんな……！ 声大きすぎ、ここ店の中じゃないよ！',
      );
      await nature.say_and_wait('それに世界一とか大げさ！ もう、恥ずかしい！');
      await nature.say_and_wait('もう……えへへ。');
      era.printButton('「今は素直に喜ぼう」', 1);
      await era.input();
      await nature.say_and_wait(
        'それがあたしにはいちばん難しいんだよ！ わかってるでしょ。でも、今は……ね。うん、そうだね。',
      );
      await nature.say_and_wait(
        '今のうちに……思いっきり喜ばないと。ここで全部終わるわけじゃないから。',
      );
      await era.printAndWait(
        `ナイスネイチャは小さくそう呟き、『有馬記念』を共に走った${nature.uma_sex_title}たちを見つめる……`,
      );
      await nature.say_and_wait('今日も……いびつなトロフィー、用意してある？');
      era.printButton('「もちろん！」', 1);
      await era.input();
      await nature.say_and_wait(
        '……えへへ。ありがとう。じゃあ……先に反省会だね。',
      );
      await nature.say_and_wait(
        'テイオーとの差ばかり気にして、他のライバルを忘れてた。',
      );
      await nature.say_and_wait(
        '今日のレースでそれがわかった。少しでも気を抜けば、負けてた。',
      );
      await nature.say_and_wait(
        '今は勝てても……これから周りの選手はもっと強くなる。',
      );
      await nature.say_and_wait(
        'このままじゃだめ。テイオーに勝つ、って言うだけじゃ足りない。',
      );
      await era.printAndWait(
        `世代を超えて競う『有馬記念』に出たことで、${nature.sex}の視野が広がった……成長の証だ！`,
      );
      await nature.say_and_wait('周りの選手のこと、もっと知らないと……！');
      if (era.get('love:60') >= 75) {
        era.printButton('「それから、いつものあれ——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  o_s_95_10: (() => {
    const title = 'ネイチャ in メジロ';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await era.printAndWait('今日、ナイスネイチャは現れない。なぜなら──');
      await era.printAndWait(
        '『有馬記念』のあと、ナイスネイチャはメジロマックイーンとメジロライアンに、あれほどの強さの理由を尋ねた。',
      );
      await era.printAndWait(
        `今日${nature.sex}は二人に招かれ、強さの理由を学びに行っている。──メジロ家への一日留学、と言ってもいい。`,
      );
      await era.printAndWait(
        `ナイスネイチャは真面目だ。${nature.sex}は必ず収穫を持って帰ってくる。${you.name} はそう信じて、静かに待つことにした──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait(
        '──先ほどのダージリンは、香りからして違いますね。味わいがとても豊かです。',
      );
      await ryan.say_and_wait(
        '最初から最後まで手摘みだって！ 専門家の技は信頼できるね。',
      );
      await nature.say_and_wait(
        '……すみません──これ、どういう状況？ どうしてお茶してるの？',
      );
      await nature.say_and_wait('トレーニングコースに行くのかと思って……');
      await mcqueen.say_and_wait(
        '飲み終わればもちろん行きます。ただ、紅茶を味わうのも日課の一部ですから。',
      );
      await nature.say_and_wait('日課……？');
      await mcqueen.say_and_wait(
        '今日はネイチャさんに、わたくしたちの普段を見てほしくて。',
      );
      await ryan.say_and_wait(
        'そういうこと！ 時間も時間だし、トレーニング行こ！',
      );
      await nature.say_and_wait('あ、は、はい……！');
      era.drawLine();
      await mcqueen.say_and_wait('はぁ……はぁ……はぁ……');
      await ryan.say_and_wait('おかえり、マックイーン！ 次はなに？');
      await mcqueen.say_and_wait('……もちろん、もう一周です。');
      await mcqueen.say_and_wait(
        '先ほどと比べて、10周目の速度が少し落ちました……そうですよね？',
      );
      await ryan.say_and_wait('あはは！ いいよ、満足するまで走ろう！');
      await mcqueen.say_and_wait('はい、行ってきます！');
      await nature.say_and_wait('はぁ……はぁ……はあっ……！');
      await ryan.say_and_wait(
        'おっ、ネイチャ、おかえり！ マックイーン、ちょうどスタートしたとこ！',
      );
      await nature.say_and_wait(`見えた……${mcqueen.sex}、まだ走るの……！？`);
      await ryan.say_and_wait(
        `まだ、というより、まだ足りない？ だって${mcqueen.sex}、『スピードを上げたい』って言ってるし`,
      );
      await nature.say_and_wait(
        `${mcqueen.sex}、スタミナあんなにあるのに、まだ伸ばしたいの……`,
      );
      await ryan.say_and_wait(
        `……マックイーン${mcqueen.sex}は、どれだけ強くても、今の自分に満足しないんだと思う。`,
      );
      await ryan.say_and_wait(
        `あの子の目標は、それくらい高い。だから${mcqueen.sex}は止めずに努力する。`,
      );
      await ryan.say_and_wait(
        'ずっとああいう姿を見てると、あたしも頑張らなきゃって思うよ。',
      );
      await nature.say_and_wait('……う～～～～あたしももう一周……！');
      await ryan.say_and_wait('あははは！ 負けず嫌いだね！ 気をつけて──！');
      era.drawLine();
      await nature.say_and_wait('──今日は本当にありがとうございました！');
      await ryan.say_and_wait('いやー一日中つき合わせちゃったね。');
      await nature.say_and_wait('いえ、ちょうどよかったです！');
      await nature.say_and_wait(
        '……やっとわかった。あたし、今まで自分のことばっかり考えてた──',
      );
      await nature.say_and_wait(
        'お二人はちゃんと相手を見てる。強さを認め合って、競い合って。',
      );
      await nature.say_and_wait('でもあたしは……人の強さを欲しがるだけだった。');
      await nature.say_and_wait(
        '足りないところばっかり見て……自分に何の才能があるか、考えたことなかった。',
      );
      await mcqueen.say_and_wait('……それで？');
      await nature.say_and_wait(
        'もっと真面目に向き合うつもりです。他の人にも……自分にも。',
      );
      await ryan.say_and_wait('うん、いいね！ それがネイチャの強さになるよ！');
      await nature.say_and_wait('あの……最後にもうひとつ、聞いてもいいですか？');
      await nature.say_and_wait('どうして、お二人は手伝ってくれたんですか？');
      await mcqueen.say_and_wait('……貴族の義務、ですから。');
      await ryan.say_and_wait('ぷはっ！ 照れてる？');
      await ryan.say_and_wait(
        '本当の理由は、強いネイチャと勝負して、自分も強くなりたいから！',
      );
      await ryan.say_and_wait(
        '──あたしたちも次の『宝塚記念』に出るつもりだし！',
      );
      await nature.say_and_wait('……っ！');
      await mcqueen.say_and_wait(
        'ふふ、いい表情です。では次は阪神でお会いしましょう。',
      );
      await nature.say_and_wait('うん……！');
      era.drawLine();
      await era.printAndWait(
        `翌朝 ${you.name} がナイスネイチャに会うと、${nature.sex}の表情は晴れやかだった。`,
      );
      await nature.say_and_wait(
        'あたし……あの二人に勝ちたい。──『宝塚記念』で！',
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin: (() => {
    const title = '届いた指先';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await nature.say_and_wait('──よかった……！ あたし……勝った！');
      era.printButton('「すごい！」', 1);
      await era.input();
      await nature.say_and_wait('どうしてだろ。今までよりずっと嬉しい……');
      era.printButton('「必死に走って、ようやく掴んだ勝ちだからだ」', 1);
      await era.input();
      await nature.say_and_wait('うん、そうだね。');
      await nature.say_and_wait(
        '『どうせあたしみたいな』とか、『無理だよ』とか……',
      );
      await nature.say_and_wait(
        '今日はそういう考え、全然浮かばなかった。ただ、追いつくって心のなかで叫び続けて……',
      );
      await mcqueen.say_and_wait(
        '──印象的な走りでしたよ、ネイチャ。また勝負できるなら、次は負けません。',
      );
      await ryan.say_and_wait(
        'うんうん！ あたしも鍛え直しだね！ ありがとう、ネイチャ！',
      );
      await nature.say_and_wait('そんな、こっちこそ……ありがとう！');
      era.drawLine();
      await nature.say_and_wait(
        `あの二人、最後まで爽やかだったね。${mcqueen.couple_title}はもう先を見てる。`,
      );
      await nature.say_and_wait(
        '負けてもすぐ未来を見る。次の段階へ手を伸ばして、次は絶対勝つって思ってる。',
      );
      await nature.say_and_wait('……テイオーもそう。だからあんなに強い。');
      await nature.say_and_wait(
        'あたしは勝手に自分の限界を決めてた。どれだけ頑張っても、ここまで、って。',
      );
      await nature.say_and_wait(
        '3着もそれが理由。これ以上は無理、って……自分を諦めてた。',
      );
      await nature.say_and_wait(
        'でも、それじゃだめ。光に触りたいなら、自分を信じ続けないと。',
      );
      await nature.say_and_wait(
        '1着を取る覚悟で取った3着なら、きっと……これからに繋がる。',
      );
      await era.printAndWait(
        `ナイスネイチャも前を見ている。今なら大舞台に上げても、${nature.sex}は恐れずに挑めるだろう。`,
      );
      await era.printAndWait(
        `次のあのレースなら、今の${nature.sex}の自信と輝きを、もっと引き出せる……！`,
      );
      era.printButton('「次は『天皇賞（秋）』に挑む？」', 1);
      await era.input();
      await nature.say_and_wait('『天皇賞（秋）』……！');
      await nature.say_and_wait('あたしが……歴史と伝統のある『天皇賞』に？');
      await nature.say_and_wait('……だめだめ。なんで引いてるのあたし。');
      await nature.say_and_wait(
        'こういうとき……資格があるか疑っちゃだめ。出る！ 自分を鼓舞しないと！',
      );
      await nature.say_and_wait('行こ。秋の大舞台へ……！');
      await era.printAndWait(
        `──こうして、${you.name}とナイスネイチャは中距離最強を争う『天皇賞（秋）』への挑戦を決めた！`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「それから、いつものあれ——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  ws_ss_2: (() => {
    const title = '夏季合宿';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await era.printAndWait(
        'また合宿の季節が来た。ナイスネイチャは去年とちがい、前向きな態度を見せている。',
      );
      await era.printAndWait(
        '『天皇賞（秋）』……そしてその先の『有馬記念』に向けて──',
      );
      await nature.say_and_wait('天皇賞秋、か……');
      await era.printAndWait(`${nature.sex}は自分と向き合う、熱い夏を始めた！`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho: (() => {
    const title = '黄昏の空に響け';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait('走り切った……');
      await nature.say_and_wait(
        '高い水準のレースで真剣に戦って……結果を出した。',
      );
      await nature.say_and_wait('限界なんて考えずに……自分の手で結果を掴んだ。');
      await nature.say_and_wait(
        '……このままなら、届くかも？ 輝きたいって……夢に……',
      );
      await nature.say_and_wait(
        '……もっと近く。まだ近く──輝きにもっと近づきたい……！',
      );
      await nature.say_and_wait(`${callname}、お願いがある。`);
      await nature.say_and_wait(
        'シニア級最後の『有馬記念』の前に、もう一レース走りたい。',
      );
      era.printButton('「どうして？」', 1);
      await era.input();
      await nature.say_and_wait(
        '……もっと自信がほしい。1着を取る覚悟で出て、勝ちたい。',
      );
      await era.printAndWait(
        '昔のナイスネイチャなら、自信のなさから『認められたい』と求めただろう。',
      );
      await era.printAndWait(
        `でも今の ${nature.sex} は『勝つため』に強くなりたいと思っている。`,
      );
      era.printButton('「連戦になるけど、大丈夫？」', 1);
      await era.input();
      await nature.say_and_wait('大丈夫だよ、きっと！');
      await nature.say_and_wait(
        `だって ${self_call} の取り柄は、みっともなく走る姿だし。`,
      );
      era.printButton('「わかった」', 1);
      await era.input();
      await nature.say_and_wait('ありがとう！ どのレースにするかは任せる。');
      await nature.say_and_wait(
        `余計なこと考える係は、${callname}に引き継ぐね！`,
      );
      await era.printAndWait(
        `${nature.sex}のこれまでの傾向と、『有馬記念』までの残り時間を考えると、今選ぶべきレースは──`,
      );
      era.printButton('「『中日新聞杯』はどう？」', 1);
      await era.input();
      await era.printAndWait(
        '格は低めだが、ナイスネイチャならここで結果を残せる。1着を堅実に取れる！',
      );
      await nature.say_and_wait('いいね、『中日新聞杯』……そこで1着取る。');
      await nature.say_and_wait(`勝って、胸を張って${nature.sex}に挑む……！`);
      if (era.get('love:60') >= 75) {
        era.printButton('「それから、いつものあれ——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  s_a_95_42: (() => {
    const title = 'きらきら';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string[]} trophies ナイスネイチャに作ったトロフィー一覧、最大4件
     */
    const f = async (nature, you, callname, trophies) => {
      await era.printAndWait(
        `その日、トレーニング時間になってもナイスネイチャは現れなかった。いつもは${nature.sex}のほうが早いのに……`,
      );
      await era.printAndWait(
        `${you.name} は${nature.sex}を心配して、学園内を探した──`,
      );
      await era.printAndWait(
        `──そして枯れ木の洞の前で${
          nature.sex
        }を見つけた。${nature.uma_sex_title}なら知っている、心の声を叫びたいときに来る場所だ。`,
      );
      await nature.say_and_wait('……誰もいないよね。');
      await nature.say_and_wait('よし……！');
      await nature.say_and_wait(
        'なんで……あんなこと言ったの？ バカだあたし──！！',
      );
      await nature.say_and_wait('正統派の主役に宣戦布告しちゃった……！');
      await era.printAndWait(
        `話は天皇賞（秋）のあと、${you.name} とナイスネイチャが帰り道でトウカイテイオーに会い、`,
      );
      await era.printAndWait(
        `${nature.sex}も今年の有馬記念に出ると知ったところに戻る。その場の勢いで、ナイスネイチャは「有馬記念であなたに勝つ」と宣言してしまった——`,
      );
      await nature.say_and_wait(
        '端役のくせに調子乗りすぎ！！ もう無理……バカ────！！',
      );
      await nature.say_and_wait(
        'まだ全然輝いてないのに……バカバカバカバカ！ バカ──！！',
      );
      await nature.say_and_wait('はぁ……はぁ……');
      await nature.say_and_wait('だめ、全然すっきりしない……');
      era.printButton('「ネイチャ！」', 1);
      await era.input();
      await nature.say_and_wait(
        `うわっ！？${callname.substring(0, 1).repeat(4)}、${callname}！？`,
      );
      await nature.say_and_wait('どうしてここに……って、あ！');
      await nature.say_and_wait('もしかして、もうトレーニングの時間……？');
      era.printButton('「そうだよ」', 1);
      await era.input();
      await nature.say_and_wait(
        'ああああああああああ……あー！？ 前にも同じことあった！？',
      );
      await nature.say_and_wait(
        'あうう……なんでいつもトレーナーに、こんな恥ずかしいとこ見せるの……',
      );
      era.printButton('「いいんだよ」', 1);
      await era.input();
      await nature.say_and_wait('えっ……');
      era.printButton('「僕の前では、恥ずかしい顔いくらでも見せていい」', 1);
      await era.input();
      await nature.say_and_wait('……っ！！');
      await nature.say_and_wait('ううう……ううううう～～！！');
      await nature.say_and_wait(`${callname}、あたし……`);
      await nature.say_and_wait('走りたくない！ 怖い……！');
      await nature.say_and_wait('うわあああ……！');
      await era.printAndWait(
        'そのあとナイスネイチャは、子供のように隠さず泣き続けた。そして──',
      );
      await era.printAndWait(
        `落ち着いてから、${nature.sex}は ${you.name} に気持ちを話した……`,
      );
      await nature.say_and_wait(
        '……今の調子、完璧だよね？ たぶん……今が今まででいちばんいい状態。',
      );
      await nature.say_and_wait(
        '実力も増えたし、自分にも自信がある。本気で戦う覚悟も決めた。',
      );
      await nature.say_and_wait('でも……それでも負けたら？');
      await nature.say_and_wait(
        'この最強の状態のあたしでも、輝きからまだ遠かったら……？',
      );
      await nature.say_and_wait('……怖い。');
      await nature.say_and_wait(
        'ここで負けたら、昔のあたしまで全部否定される気がする。',
      );
      await nature.say_and_wait(
        '『まだ本気じゃなかった』『まだ伸びしろがある』『これが全部じゃない』……',
      );
      await nature.say_and_wait(
        '今までそうやって自分を守ってきた。でもその言い訳……もう使えない。',
      );
      era.printButton('「本気なんだね」', 1);
      await era.input();
      await nature.say_and_wait('……！ そう、本気！');
      await nature.say_and_wait(
        'こんなに本気なのに負けたら……また『いい走り、でもいちばんじゃない』自分に戻る。',
      );
      await nature.say_and_wait('怖い。ほんとに怖い……');
      era.printButton('「大丈夫、君は負けない」', 1);
      await era.input();
      await nature.say_and_wait('……ごめん、今回は前より素直に受け取れない。');
      await nature.say_and_wait(
        'だって結果で返せないと思うから。もう一歩も踏み出せない……',
      );
      era.printButton('「それでも信じたい。だめ？」', 1);
      await era.input();
      await nature.say_and_wait('……っ。信じる根拠はなに？');
      era.printButton('「ここに、根拠がいっぱいある」', 1);
      await era.input();
      await nature.say_and_wait('──これ……');
      await nature.say_and_wait('……折り紙のトロフィー……？ いびつだね。');
      await nature.say_and_wait(
        '……ほんとに作ったんだ。えへへ、相変わらずいびつ。',
      );
      await nature.say_and_wait('今日も……いびつなトロフィー、用意してある？');
      await nature.say_and_wait('トレーナーのトロフィー……');
      await era.printAndWait(
        `${you.name} は、今まで ${you.name} が${nature.sex}に渡してきた手づくりトロフィーの試作を見せた。`,
      );
      await nature.say_and_wait([
        trophies.map((e) => `『${e}』`).join('、'),
        '……それ以外にもたくさん……',
      ]);
      await era.printAndWait('……こんなに、作ってくれたんだ……');
      era.printButton('「これも、君を信じ続けてきた成果だ」', 1);
      await era.input();
      await nature.say_and_wait('──あたしが今まで積み上げてきたもの……');
      await nature.say_and_wait(
        '……途中で見捨ててもよかったのに。なんでトレーナーは信じてくれるの？',
      );
      era.printButton('「大好きだから」', 1);
      await era.input();
      await nature.say_and_wait('……は！？ なんでこんなときに……');
      await era.printAndWait(
        `${you.name}はナイスネイチャに伝えた。トレーナーとして、${you.name} は勝ちを諦めずここまで必死に走ってきた${nature.sex}を、心から応援している……`,
      );
      await nature.say_and_wait(
        '……うん、言いたいことはわかった。前から思ってたけど……',
      );
      await nature.say_and_wait('はあ……うん、ごめん。ちょっと慌てすぎた。');
      await nature.say_and_wait('『勝つ』って大声で言うの、ほんとに怖いね。');
      await nature.say_and_wait(
        `……テイオー${nature.sex}は、ずっとこの圧と戦ってたんだ。`,
      );
      await nature.say_and_wait('すごい……でも、あたしももう怖がらない。');
      await nature.say_and_wait(
        'だって、好きだって言ってくれる人がそばにいるし？',
      );
      await nature.say_and_wait('勝つ。大事な……すごく大事な理由があるから。');
      await nature.say_and_wait(
        '……それにしてもトレーナーも大変だね。メンタルケアまで。',
      );
      await nature.say_and_wait('まあ、仕事のうちかもだけど。');
      era.printButton('「僕の仕事は、君を輝かせることだから」', 1);
      await era.input();
      await nature.say_and_wait('……仕事だから？');
      await nature.say_and_wait(
        '……じょ、う、だ、ん、だ、よ──！ 今のは聞かなかったことにして！',
      );
      await nature.say_and_wait(
        'トレーニングの時間でしょ！ わ、走って着替えてくる！',
      );
      await era.printAndWait(
        `……${nature.sex}は気持ちを立て直せたようだ。なら、この先も一緒に進もう！`,
      );
    };
    f.title = title;
    return f;
  })(),
  chun_hai: (() => {
    const title = '最後の大舞台へ';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('取った！');
      await nature.say_and_wait('1着。全力で取った……1着！');
      await nature.say_and_wait('長かったなあ……');
      await nature.say_and_wait(
        'あの弱かったあたしが、励まされて、引っ張られて、必死に追いかけて……',
      );
      await nature.say_and_wait('──今やっと、自分の力でここに立てた！');
      await nature.say_and_wait(
        'これで胸を張って戦える。あの舞台で……みんなと一緒に！',
      );
      era.printButton('「やっとこの日が来た！」', 1);
      await era.input();
      await nature.say_and_wait(
        'うん！ もう逃げないし、みんなの期待も裏切れない。',
      );
      await nature.say_and_wait('絶対……勝つ。');
      await nature.say_and_wait('──『有馬記念』で、輝く主役になる！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_senior: (() => {
    const title = '有馬の勝者は……';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, callname) => {
      await nature.say_and_wait('あ……');
      await nature.say_and_wait('あたし……勝ったんだよね？');
      era.printButton('「ネイチャ、やったぞ！」', 1);
      await era.input();
      await nature.say_and_wait(`${callname}……`);
      await nature.say_and_wait('全然実感ない……ほんとに勝ったの？');
      await era.printAndWait(
        '観客たち「ナイスネイチャ──！！ おめでとう──！！」',
      );
      await nature.say_and_wait('──っ！ えっ？ すごい……こんなにみんな……');
      await era.printAndWait('商店街の人たち「ネイチャ──！ おめでとう──！！」');
      await nature.say_and_wait('商店街のみんな……見に来てくれたんだ。');
      await nature.say_and_wait(
        'みんなが待っててくれた。で、あたし……やっと応えた。',
      );
      era.printButton('「全部、君が掴んだものだよ」', 1);
      await era.input();
      await nature.say_and_wait('……');
      await nature.say_and_wait(`うう～～～～！ ${callname}……！`);
      await nature.say_and_wait(
        '諦めなくてよかった……！ 夢を追い続けてよかった～～！',
      );
      await era.printAndWait(
        `それは${nature.sex}が昔流していた不安の涙とは違う。喜びの大粒の涙が、汗と一緒に陽の下で輝いていた。そのとき──`,
      );
      await teio.say_and_wait('──もう、なんで泣いてるの！？');
      await nature.say_and_wait('……！ テイオー……！');
      await teio.say_and_wait(
        'ボクを倒して1着なんだよ？ ボクを……倒したんだよ……！ 勝者は威勢よく笑うもんだよ！',
      );
      await nature.say_and_wait(
        '……うん、うん、そうだね。あなたもいつも笑ってるし……',
      );
      await nature.say_and_wait('ごめん、大丈夫。あたし……もう泣かない。');
      await teio.say_and_wait(
        'それでいい。泣き続けてたら聞こえないよ。これが──',
      );
      await era.printAndWait('観客の歓声「わあああああ……ネイチャ──！」');
      await teio.say_and_wait('──熱い歓声！ 全部、君のものだよ！');
      await nature.say_and_wait('わかってる。ちゃんと……聞こえてる。');
      await nature.say_and_wait(
        '……ありがとう、テイオー。あなたがいなかったら、あたし……ここまで走れなかった。追いかけてくれてありがとう。正直、後ろを走るのは大変だった。でも……卑怯なあたしは、その位置が楽でもあった。これから先は、どんな挑戦も正面から受ける。',
      );
      await nature.say_and_wait('あたしの物語の主役は、あたし自身！');
      await era.printAndWait(
        'レース後の勝者インタビュー。今のナイスネイチャは、無数のフラッシュに照らされている。',
      );
      await era.printAndWait(
        '記者A「──今回の『有馬記念』は、相手がどれも手強いレースでした。勝てた理由はどこにあると思いますか？」',
      );
      await nature.say_and_wait('そうだね……みんな、ほんとに強かったと思う。');
      await nature.say_and_wait(
        `でもあたしも『強い』${nature.uma_sex_title}だよ。力を全部出せたからだと思う。`,
      );
      await nature.say_and_wait('うん、頑張ったから……はっきり言える！');
      await era.printAndWait(
        '記者A「では、ナイスネイチャさん、最後にファンへ一言！」',
      );
      await nature.say_and_wait(
        'あの、いつも応援してくれるみんな、ありがとう。',
      );
      await nature.say_and_wait(
        '期待に応えられないこと、たくさんあったのに、それでも素直に応援してくれた。',
      );
      await nature.say_and_wait(
        'みんなのおかげで、今日ここに来られた……挫折もいっぱいしたけどね！',
      );
      await nature.say_and_wait('……わがまま、言っていい？');
      await nature.say_and_wait(
        'その……これからも、応援してくれたらうれしいな──',
      );
      await nature.say_and_wait(
        'もちろん、調子が悪いときも、全然だめなときもあると思う。',
      );
      await nature.say_and_wait(
        'だってあたし、特別な才能もないし、超努力家でもないし。',
      );
      await nature.say_and_wait('でも……でもね、これだけは保証できる。');
      await nature.say_and_wait(
        `──みんなの信頼を、いちばん裏切らない${nature.uma_sex_title}だから！`,
      );
    };
    f.title = title;
    return f;
  })(),
  hard_work_trainer: (() => {
    const title = (self_call) => `${self_call} と、お疲れのトレーナー`;
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait('何日も詰まった仕事が、ようやく一段落した……');
      await era.printAndWait(
        `${you.name} は自分へのご褒美に美味しいものを買おうと、重い体を引きずって商店街へ向かう──`,
      );
      await nature.say_and_wait(
        'すみません、そこのトレーナー、ちょっと待って！',
      );
      era.printButton('「ネイチャ……？」', 1);
      await era.input();
      await nature.say_and_wait(
        'はあ──忙しいのは聞いてたけど、ここまで働き詰めでヘトヘトになるとはね。',
      );
      await nature.say_and_wait(
        `しょうがない、${self_call} がおごるよ。ほら、こっち。`,
      );
      await nature.say_and_wait(
        'まだ開店準備中だから客は来ない。一番奥のカラオケ席に座って。',
      );
      await nature.say_and_wait(
        `ここのおかみさん、知り合いなんだ。事情話したら、使っていいって。`,
      );
      await era.printAndWait(
        `ナイスネイチャは ${you.name} を店の隅へ連れていく`,
      );
      await nature.say_and_wait(
        `じゃあ、${callname} はなに食べる？ なんでもいいよ？ あたしにできることなら`,
      );
      era.println();
      era.printButton('「なんでもいい、お腹空いた……」', 1);
      if (era.get('love:60') >= 75) {
        era.printButton('「ネイチャ……」', 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait(
          'もう……待ってて、簡単に作るから……味は保証しないけど。',
        );
        await era.printAndWait(
          `数分後、ナイスネイチャは${nature.sex}の作ったチャーハンを ${you.name} に出した。`,
        );
        era.printButton('「こんなに量あって、大丈夫？」', 1);
        await era.input();
        await nature.say_and_wait(
          'おかみさんも『好きなだけもてなして』って言ってたし。',
        );
        await nature.say_and_wait('ほらほら、熱いうちに食べて。');
        await era.printAndWait(
          `出てきたチャーハンは見た目も味もちゃんとしていて、${you.name} の箸……いや、スプーンが止まらないほど美味しかった。`,
        );
        await nature.say_and_wait(
          '大げさだよ。小さいころからママの手伝いしてたから、作れるだけ。',
        );
        await nature.say_and_wait('……えっ、食べるの速い！ もう終わった！？');
        era.printButton('「美味しくて、気づいたらなくなってた」', 1);
        await era.input();
        await nature.say_and_wait(
          'いいよいいよ、さっきほんとお腹空いてたでしょ？ 厨房片付けるから、皿ちょうだい。',
        );
        await era.printAndWait(`${you.name}はナイスネイチャの背中を見送る。`);
        await era.printAndWait(
          '食べた直後だからか、急に眠気が来て、意識が遠のいていく──',
        );
        await nature.say_and_wait('……ら……らら……♪');
        await nature.say_and_wait('うわっ！ 起こしちゃった？');
        era.printButton('「……その歌は？」', 1);
        await era.input();
        await nature.say_and_wait(
          '実はよく知らないんだ。昔、ママがカウンターで忙しくしてるときよく歌ってた。',
        );
        await nature.say_and_wait(
          '昔のこと思い出して、つい口ずさんじゃった……ごめんね。',
        );
        era.printButton('「むしろ、もっと聞きたい」', 1);
        await era.input();
        await nature.say_and_wait(
          `また始まった～ ${self_call} にそんなお世辞言わなくていいよ。`,
        );
        era.printButton(
          '「ネイチャの歌、本当に好きなんだ。その声ならライブも大丈夫だよ！」',
          1,
        );
        await era.input();
        await nature.say_and_wait('ふ、ふーん？ トレーナー、趣味が独特だね。');
        await nature.say_and_wait(
          '……でも、『上手い』じゃなくてよかった。『好き』って便利な言葉だね。',
        );
        await nature.say_and_wait(
          '誰かと比べられなくて、誰かを失望させなくて、期待に届かない自分にも失望しなくて済む。',
        );
        await nature.say_and_wait('あはは。ごめん、可愛げないこと言って。');
        era.printButton('「そういうネイチャも好きだよ」', 1);
        await era.input();
        await nature.say_and_wait('ば……バカ！');
        await nature.say_and_wait('そういうの、言いすぎると意味なくなるよ？');
        await era.printAndWait('店「もう用済んだ、ネイチャ？」');
        await nature.say_and_wait('おかみさん、ありがとう。ほんと助かった。');
        await era.printAndWait(
          '店「隣の人が噂のトレーナーさんね？ ネイチャからよく聞くわ──」',
        );
        await nature.say_and_wait(
          'もう──！ そういうの言わないで！ 行こ、トレーナー！',
        );
        era.printButton('「噂……？」', 1);
        await era.input();
        await nature.say_and_wait('い、こ、う、よ！');
        await era.printAndWait(
          `こうして、おかみさんの温かい視線に見送られ、${you.name}とナイスネイチャは店を出た。`,
        );
      } else {
        await nature.say_and_wait('え……えっ！？ あたし？');
        await era.printAndWait(
          '返事を聞いたナイスネイチャの驚いた顔に、すぐに赤みが差す',
        );
        await nature.say_and_wait(
          '客は来ないとは言ったけど……ここ、人の店だよ……',
        );
        era.printButton('「ネイチャ、なんでもいいって言ったよね？」', 1);
        await era.input();
        await nature.say_and_wait('ぐっ……そうだけど……でも……');
        await nature.say_and_wait(
          'うっ……わかった……大人のストレスと疲れは、こういうので発散できるんでしょ……',
        );
        await era.printAndWait(
          `ナイスネイチャは唇を噛み、覚悟を決めたように、ソファに沈む ${you.name} の前へ来て、柔らかい体をまるごと預け、耳元で囁いた。`,
        );
        await nature.say_and_wait(
          '激しすぎはだめだよ……服も部屋も片づけるの大変……',
        );
        await nature.say_and_wait('それに、おばさんにバレる……');
        await era.printAndWait(
          `もちろん、${you.name} がそれを聞き入れたかどうかは、また別の話だ……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  grass_baseball: (() => {
    const title = '草野球で応援！';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait('会場ここ？ おっ～たしかに人が集まってるね～');
      await nature.say_and_wait(
        'それにしても、草野球の助っ人、引き受けるなんて……トレーナーの仕事だけでも忙しいのに。',
      );
      await era.printAndWait(
        `実は先日、商店街の人たちに誘われ、${you.name} は草野球に出ることになった。`,
      );
      era.printButton('「いつも君を応援してくれてるからね」', 1);
      await era.input();
      await nature.say_and_wait('はあ、みんな優しいのは確かだけど……');
      await nature.say_and_wait('……でも、はあ……無理しすぎて怪我しないでよ～？');
      await nature.say_and_wait('普段から必死なんだし……');
      await era.printAndWait('こうして、商店街草野球対抗戦の幕が開いた。');
      era.drawLine();
      await era.printAndWait(
        '両チーム譲らず、スコアは0対0のまま、試合は熱を帯びていく。',
      );
      await nature.say_and_wait(
        'わあ、だんだん熱いね～ でも、トレーナー、ヘトヘトだよ。',
      );
      await nature.say_and_wait(
        'ひいき抜きで、もう十分頑張ってる。そろそろ交代したほうがいいんじゃない。',
      );
      era.printButton('「まだいける！……」', 1);
      await era.input();
      await nature.say_and_wait(
        'はあ、熱血……あ、わかった。あたしが世話すれば、まだ頑張るんでしょ。',
      );
      await nature.say_and_wait(
        '飲み物取ってくるから、ここに大人しく座っててよ～？',
      );
      await nature.say_and_wait('もう……どれどれ、実行委員会のテントは……');
      await era.printAndWait(
        `商店街のおじさん「いやーあと一歩。${you.sex}は頑張ってるけど、点が取れなくてねえ……」`,
      );
      await nature.say_and_wait('おっ、トレーナーの話……？', true);
      await era.printAndWait(
        '商店街のおばさん「緊張してるんでしょ。助っ人で、周りは知らない人ばかりだし……」',
      );
      await era.printAndWait(
        `商店街のおじさん「うん……なんか${you.sex}を元気にする方法ないかね？」`,
      );
      await nature.say_and_wait('なんだか……聞き覚えのある展開だね……', true);
      await era.printAndWait(
        'その会話に、ナイスネイチャは自分がレースで受けたみんなの応援を思い出す……',
      );
      await nature.say_and_wait(
        '後ろから押してくれて、頑張れたのはみんなとトレーナー……',
        true,
      );
      await nature.say_and_wait(
        '心配してるだけじゃだめ。今度はあたしが──',
        true,
      );
      era.drawLine();
      await era.printAndWait(
        `ついに9回裏。1点出せば試合終了という場面で、${you.name} の打席が回ってきた。`,
      );
      await era.printAndWait(
        'マウンドに立つおじさんは甲子園まで行った控え投手で、球は一流だ。',
      );
      await era.printAndWait(
        `${you.name} はすでに2ストライクまで追い詰められ、ここで終わりかと思ったとき──`,
      );
      await nature.say_and_wait('頑張れ──！');
      // Do not translate this
      era.printWholeImage('内恰_应援_半身', {
        width: 8,
        offset: 8,
      });
      await era.printAndWait(
        '振り返ると、いつの間にかチアの衣装に着替えたネイチャが観客席にいた',
      );
      await era.printAndWait(`${you.name} を全力で応援している`);
      await nature.say_and_wait(
        '負けるな、トレーナー！ あと1球！ 打てば勝ち！',
      );
      await nature.say_and_wait('気合い入れて！ 気合い！ みんなで叫ぼ！');
      await era.printAndWait('みんな「イエーイ！ Go Fight Win！」');
      await nature.say_and_wait('が、頑張れ！ トレーナー！');
      await era.printAndWait(
        `ナイスネイチャが恥ずかしそうに大声で応援し、${nature.sex}の周りのみんなも同じだ。その気持ちに応えなければ……！`,
      );
      era.printButton('「うおお──！！」', 1);
      await era.input();
      await nature.say_and_wait('いけ──！！');
      await era.printAndWait('カーン──！');
      await nature.say_and_wait(
        'やった～！ 成功！ トレーナーすごい！ ホームラン！ サヨナラホームラン！',
      );
      era.drawLine();
      era.printButton(
        '「応援してくれてありがとう！」（スタミナ+20，スキルPt+20，やる気上昇，『天地無畏』を習得）',
        1,
      );
      era.printButton(
        '「君の応援のおかげだ！」（スタミナ&パワー+20，スキルPt+20，『天地無畏』を習得）',
        2,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「ネイチャ～！ ありがとう～！」', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            'うっ……そんな熱い目で見られると、恥ずかしい……',
          );
          await nature.say_and_wait(
            '……お礼を言うべきなのはあたしのほう。ずっと応援してくれてありがとう。',
          );
          await nature.say_and_wait(
            'とにかく、これからも頑張る……あー、あたしらしくないこと言っちゃった、もう～！',
          );
          await era.printAndWait(
            `ナイスネイチャは恥ずかしがりながらも、心から ${you.name} を応援していた。この日 ${you.name} はかけがえのない思い出を残した！`,
          );
          break;
        case 2:
          await nature.say_and_wait(
            `いやいや、そんなことない。${callname} はもう十分頑張ってたし、自分の努力と実力で取ったもの。でも……`,
          );
          await era.printAndWait('ナイスネイチャは恥ずかしそうに視線を逸らす');
          await nature.say_and_wait(
            '応援してて、達成感あった。次に野球するときも、応援しに行こ……なんてね。',
          );
          await era.printAndWait(
            `${you.name} は互いの絆の深さを感じ、とてもいい一日だった！`,
          );
          break;
        case 3:
          await nature.say_and_wait(
            'ちょっと、そんな大声出さないで～ 目立つよ！',
          );
          await era.printAndWait(
            `ナイスネイチャは頬を赤らめ、${you.name} の呼びかけに応える`,
          );
          await nature.say_and_wait('もう～ 着替えてくる！');
          era.printButton('「着替えはあとでもいい？」', 1);
          await era.input();
          await nature.say_and_wait(
            'どうしたの？ この服、恥ずかしいし、周りに独占されて肌寒いし……',
          );
          await era.printAndWait(
            `ナイスネイチャは文句を言いながら足を止め、${you.name} のほうを向く`,
          );
          era.printButton('「その……その格好のネイチャ、すごく可愛くて……」', 1);
          await era.input();
          await nature.say_and_wait('うっ！ は？ いきなりは反則だよ……');
          await era.printAndWait(
            '予想外の言葉に、ナイスネイチャは一瞬どうしていいかわからない',
          );
          era.printButton('「……性欲が……ちょっと抑えきれなくて……」', 1);
          await era.input();
          await nature.say_and_wait(
            '……なななななにをいきなり言ってるのああああ！',
          );
          await era.printAndWait('連続の奇襲にナイスネイチャは声を上げ、');
          await era.printAndWait(
            'それで商店街のみんなの注目を集めたことに気づくと、',
          );
          await era.printAndWait('周りに愛想笑いをしてから、またこちらを向き');
          await era.printAndWait('二人にしか聞こえない声で拗ねた');
          await nature.say_and_wait(
            `色ボケ ${callname}！ こんなところでそんなこと言わないで！`,
          );
          era.printButton('「でもネイチャの格好、エロすぎて……」', 1);
          await era.input();
          await nature.say_and_wait(
            'うにゃにゃにゃにゃ！ わかった！ もう言わないで！',
          );
          await era.printAndWait(
            `顔を真っ赤にしたネイチャは、両手を振って ${you.name} の続きを止める`,
          );
          await nature.say_and_wait(
            `ぐっ……${callname} をこんなに興奮させちゃったのも、あたしのせいだね`,
          );
          await nature.say_and_wait(
            '責任持って片づけるよ……でも、ここでするわけないでしょ？',
          );
          era.printButton('「更衣室へ行こう」', 1);
          await era.input();
          await nature.say_and_wait('そこもバレやすいよ！');
          era.printButton('「じゃあ、声は小さくお願い」', 1);
          await era.input();
          await nature.say_and_wait(`なにそれ！ 待っ……${callname}！？`);
          await era.printAndWait(
            `${you.name} はナイスネイチャの反対を待たず、${nature.sex}を横抱きにして更衣室へ飛び込み、個室に鍵をかけた。`,
          );
          await era.printAndWait('運よく、この場面を見た人はいなかったようだ');
          await era.printAndWait(
            '個室のなかで、激しい一戦が始まろうとしている……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  see_fish: (() => {
    const title = '魚を見に行こう';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(`${you.name} とナイスネイチャが一緒に帰る道中──`);
      await nature.say_and_wait(
        'ねえ、まだ時間あるし……その………………魚、見に行かない？',
      );
      await nature.say_and_wait(
        `魚屋のおばさんだよ、『一緒に見に行きな』って。`,
      );
      era.printButton('「もちろんいいよ」', 1);
      await era.input();
      await nature.say_and_wait('……よし、行こ。');
      era.drawLine();
      await era.printAndWait(
        `${you.name} は魚屋に${nature.sex}の欲しい魚があるのかと思っていたが、ついていくと……`,
      );
      await nature.say_and_wait(
        'おお～泳いでる泳いでる～～ おいしそうな魚がいっぱい～～',
      );
      era.printButton('「水族館だったなんて……！！」', 1);
      await era.input();
      await nature.say_and_wait('……あは。');
      await nature.say_and_wait(
        'あーはいはい！ わかってる。もっとうまく誘う方法あったでしょ～って思ってる？',
      );
      await nature.say_and_wait(
        `そのね、${self_call}、可愛く誘うとかできないの──`,
      );
      await nature.say_and_wait(
        'でもね、おばさんがチケットくれて、二人でゆっくりしな、って……',
      );
      await nature.say_and_wait('わざと騙すつもりじゃなかった。ほんとだよ。');
      era.printButton('「誘ってくれてありがとう」', 1);
      await era.input();
      await nature.say_and_wait('おっ……おお……これが大人の余裕？ やるね……');
      await nature.say_and_wait('まあ、うん。気にしてないならよかった。');
      await nature.say_and_wait(
        'だから、お詫びってほどじゃないけど……トレーナーの見たいものを見に行こ！',
      );
      await nature.say_and_wait(
        '調べたら面白い展示がいっぱいあったよ。さすがデート……お出かけの定番スポット。',
      );
      await nature.say_and_wait('クラゲ展、エイ……鯛……どれもおいしそうだね。');
      await nature.say_and_wait('あ、定番ならイルカショーとか？');
      await nature.say_and_wait(
        '……いや、あたしとあんな可愛いショーも、ちょっと違うか。',
      );
      await nature.say_and_wait(`まあ、${callname} に任せる！ なにが見たい？`);
      era.println();
      era.printButton('「イルカショー」', 1);
      era.printButton('「……超恐怖・こわい魚展！！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait('……ねえ。話、聞いてた？');
        era.printButton('「聞いてたよ」', 1);
        await era.input();
        await nature.say_and_wait(
          'うん、それはわかってる。そういう意味じゃないよ？',
        );
        await nature.say_and_wait('いや、まあ……付き合うって言ったしね～');
        await nature.say_and_wait(
          'わかったわかった。見てリラックスできるなら、うん。',
        );
        await nature.say_and_wait(
          '『きゃー』みたいなかわいい反応はしないから、そこは勘弁して──',
        );
        era.drawLine();
        await nature.say_and_wait(
          'おお、元気なイルカだね～ えっ？ ぷわっ！？ 待って、水！ 水が──',
        );
        await nature.say_and_wait('ぎゃあああ──！！？');
        await nature.say_and_wait('くそっ……あの水しぶき、反則でしょ。');
        await nature.say_and_wait(
          'イルカショーって、こんなにスリリングな娯楽なの……',
        );
        await nature.say_and_wait(
          'もう……『きゃー』どころか、丹田から声出ちゃった。',
        );
        era.printButton('「楽しそうだったね」', 1);
        await era.input();
        await nature.say_and_wait(
          'ふふ……うん、そうだね。こういう遊びのほうがあたし向きかも。',
        );
        await era.printAndWait(
          `${you.name}とナイスネイチャは水族館で楽しい時間を過ごし、しっかりリラックスした。`,
        );
      } else {
        await nature.say_and_wait('えっ～面白そう！');
        await nature.say_and_wait(
          'しかも『超恐怖』だって。どれくらい怖いの？ 実力見せてもらお～',
        );
        await era.printAndWait(
          `こうして、${you.name}とナイスネイチャは展示エリアへ……`,
        );
        await nature.say_and_wait('か！');
        era.printButton('「……か？」', 1);
        await era.input();
        await nature.say_and_wait('か、わ、い、す、ぎ、！！');
        await nature.say_and_wait(
          'うわああ～～～！！ なにこれ！ まんまるの目！ 『メンダコ』だ～',
        );
        await nature.say_and_wait('きゃあ～～～～');
        await nature.say_and_wait('──あ！！');
        era.printButton('「楽しそうでよかった」', 1);
        await era.input();
        await nature.say_and_wait(
          'あ……反則でしょ！ 超恐怖とか言っといて、こんなに可愛い生き物ばっかり！',
        );
        await nature.say_and_wait('くそっ…………可愛い。');
        era.printButton('「あっちの魚もいいね……」', 1);
        await era.input();
        await nature.say_and_wait(
          'うわ、ほんとだ！ 不細工なくらい可愛い～～！',
        );
        await era.printAndWait(
          `${you.name} とナイスネイチャは水族館で楽しい時間を過ごし、しっかりリラックスした。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
