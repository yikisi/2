/**
 * @file マンハッタンカフェ - 育成
 * @author Necroz
 * @author Mr.E.（イベント「暗がり」）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  race_end_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……できました……私が……一番になりました。');
      await coffee.say_and_wait(
        'あの背中に……近づけました……ふふ。やっぱり、好きです……この感覚……',
      );
      era.printButton('おめでとう、カフェ！', 1);
      await era.input();
      await coffee.say_and_wait([
        'ありがとうございます、',
        callname,
        '……次も、頑張ります……',
      ]);
      await coffee.say_and_wait(
        '勝つために努力して……また、この気持ちを味わう……',
      );
      era.printButton('でも、気は抜けない。', 1);
      await era.input();
      await coffee.say_and_wait('……！');
      await coffee.say_and_wait(
        '……ええ、そのとおりです。油断せず、警戒を保たないと……',
      );
      await coffee.say_and_wait(
        'だって私は——いいえ、私たちは……まだ、あの背中を超えていないから……',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着！！';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……入着、しました……');
      era.printButton('よく頑張った、カフェ。', 1);
      await era.input();
      await coffee.say_and_wait('……ええ、自分の力は……出せたと思います……');
      await coffee.say_and_wait('……でも、まだ遠い……');
      await coffee.say_and_wait('私たちの目標は……もっと先にあります……');
      era.printButton('これから、もっとトレーニングしよう。', 1);
      await era.input();
      await coffee.say_and_wait('……はい、ここで足を止めるわけにはいきません……');
      await coffee.say_and_wait([
        '……',
        callname,
        '。これからも……よろしくお願いします……！',
      ]);
      era.println();
      await era.printAndWait('——コン。');
      await era.printAndWait([
        '強くもない、弱くもない打撃音が、',
        coffee.get_colored_name(),
        ' の額に響いた。',
      ]);
      era.println();
      await coffee.say_and_wait('痛っ……忘れてなんて、いません……！');
      era.println();
      era.printButton('これから、みんなで頑張ろう。', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'レース敗北……';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('……負けました……私の力が、足りなかった……');
      await coffee.say_and_wait('ここで負けるなら……あの背中まで、私は……');
      era.printButton('十分よくやった！', 1);
      await era.input();
      await coffee.say_and_wait(
        '『十分よくやった』、ですか……そういう精神的な励ましは……意味があるとは思えません……',
      );
      era.println();
      await era.printAndWait('——コン。');
      await era.printAndWait('少し強めの打撃音が、カフェの額に響いた。');
      era.println();
      await coffee.say_and_wait(
        '痛い……！ 友達も、こうして……でも、今の私の力では……',
      );
      era.printButton('このまま、諦めるのか？', 1);
      await era.input();
      await coffee.say_and_wait('……このまま諦めるのは……嫌です。');
      era.println();
      await era.printAndWait('——それでいい。');
      await era.printAndWait([
        '耳元でそんな言葉が聞こえた気がして、周囲の空気が一瞬凍りついたように、温度が下がった……',
      ]);
      era.println();
      await coffee.say_and_wait([
        callname,
        '……それから友達……ありがとうございます……',
      ]);
      await coffee.say_and_wait('もう、負けません。');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はやる気を取り戻し、次のレースへ進む準備をした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '漆黒の猟犬';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      callname_32,
      t_call_c,
    ) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の募集に成功したあと、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' と約束してトレーニング場へ走りの確認に来た。',
      ]);
      await era.printAndWait([
        'そういえば、',
        coffee.get_colored_name(),
        ' のトレーナーになったのに、',
        coffee.sex,
        'の走りを生で見るのはこれが初めてだ。映像で選抜レースを何度か見返してはいるが、どうしても何かが足りない。',
      ]);
      await era.printAndWait(
        '担当の選抜レースすら見ずに募集したトレーナーとしては、トレセンでも一人前、だろう……',
      );
      await era.printAndWait([
        '少し離れた位置で、すでに構えた ',
        coffee.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' へ手を振った。',
        you.get_colored_name(),
        ' は思考をしまい、',
        coffee.get_colored_name(),
        ' の動きに集中した。',
      ]);
      await era.printAndWait([
        '合図のあと、',
        coffee.get_colored_name(),
        ' はスタート位置から飛び出した。',
      ]);
      era.printButton('「……出脚は速くない。やはり追込と差し向きか。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' への指示は、',
        coffee.sex,
        '自身のリズムで走ること、他の',
        coffee.uma_sex_title,
        'がいる場面を想像することだった。',
      ]);
      await era.printAndWait([
        '自分のリズムを保ったまま、',
        coffee.get_colored_name(),
        ' は柔らかく緩やかに脚を運び、中盤を無事に越え、最後のスパート地点へ来た。',
      ]);
      await era.printAndWait('——ドン。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の目が、聞こえるはずの音を教えてくれた。',
      ]);
      await era.printAndWait([
        'ゴールへ向かい、',
        coffee.get_colored_name(),
        ' の体が一気に沈み、足元から土が弾け、弦を離れた矢のように前方へ刺さる。尋常でない爆発力が、一瞬で ',
        you.get_colored_name(),
        ' の視線を食い止めた。',
      ]);
      await era.printAndWait([
        '兎を追う猟犬のようでもあり、飢えた蒼鷺のようでもある。',
        you.get_colored_name(),
        ' は、この荒々しい歩様を、あの静かで冷たい',
        coffee.child_sex_title,
        'と結び付けられなかった。',
      ]);
      await era.printAndWait('けれど……');
      await era.printAndWait('あまりに、美しい。');
      await era.printAndWait([
        '漆黒の猟犬のようにゴール板を裂く姿を見て、',
        you.get_colored_name(),
        ' はつい、そう思った。',
      ]);
      era.println();
      if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait(['よう、', callname_32, '。']);
        await era.printAndWait([
          '聞き慣れた声がして、',
          you.get_colored_name(),
          ' が振り返ると、',
          tachyon.get_colored_name(),
          ' が後ろに立っていた。',
        ]);
        await tachyon.say_and_wait([
          '新しい担当が ',
          t_call_c,
          ' か？ 奇遇だな、ハハハ。',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          ' の目的は、誰にも見えない空想の友達に追いつくこと。ふむ、普通の人間には理解しにくい。で、私はというと、ウマ',
          coffee.uma_sex_title,
          'の限界を追い——限界を超える。単なる勝利では止まらない。',
        ]);
        await tachyon.say_and_wait(
          'こんな変人コンビのトレーナーとは、君も災難だな。',
        );
        await coffee.say_and_wait([call_32, '……何をしていますか？']);
        await era.printAndWait([
          '確認を終えた ',
          coffee.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の傍へ戻り、あまり嬉しそうでない目で ',
          you.get_colored_name(),
          ' の隣の ',
          tachyon.get_colored_name(),
          ' を見ている。',
        ]);
        await tachyon.say_and_wait([
          'おや、あまり嬉しそうじゃないな、',
          t_call_c,
          '……だが、私たちの接点はこれから深まる一方だ。同じトレーナーの下の担当',
          coffee.uma_sex_title,
          'だからな。そうだろう？ ト・レ・ー・ナ・ー・君？',
        ]);
        await coffee.say_and_wait([
          'トレーナー君……',
          call_32,
          ' も、あなたの担当なのですか？ ',
          callname,
          '……',
        ]);
        await era.printAndWait([
          'これは面倒だ。',
          coffee.couple_title,
          'が知り合いだったとは。しかも、あまり仲が良くなさそうだ……',
        ]);
        await tachyon.say_and_wait([
          'じゃあな、おふたり。これからよろしく。それに、君には期待しているよ、',
          t_call_c,
          '。期待する——私とは違う意味で、ね。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          coffee.get_colored_name(),
          ' へどう説明するか考えているうちに、',
          tachyon.get_colored_name(),
          ' は意味深な一言を残して去った。',
        ]);
        era.printButton('「あいつ……まったく……」', 1);
        await era.input();
        await coffee.say_and_wait([
          callname,
          '……しばらくは ',
          call_32,
          ' のことは考えないでください。いまのあなたは、私のトレーナーです……私たちにとって大事なのは、友達に追いつくこと。それだけ、単純です……ね？',
        ]);
        await era.printAndWait([
          'そのとおりだ。',
          coffee.sex,
          'は ',
          coffee.get_colored_name(),
          ' だ。他のウマ',
          coffee.uma_sex_title,
          'とは関係ない。',
        ]);
      }
      await era.printAndWait(['頭を整理して、今日のトレーニングを始めた。']);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'メイクデビューへ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait('いない……どこにもいない……いったい、どこへ……');
      await era.printAndWait([
        '今日は ',
        coffee.get_colored_name(),
        ' のメイクデビューだ。多くのウマ',
        coffee.uma_sex_title,
        'は緊張で震えているのに、',
        coffee.sex,
        'の意識はそこにない。',
      ]);
      await coffee.say_and_wait([
        callname,
        '、レースの前に……少し、探しても……いいですか？',
      ]);
      era.printButton('「行ってこい。大丈夫だ。」', 1);
      await era.input();
      await coffee.say_and_wait('ここには、いない……');
      await coffee.say_and_wait('ここにも、いない……');
      await coffee.say_and_wait(
        '……見つけました……！ ゴール板の、もっと先。あそこで、待っています。',
      );
      await coffee.say_and_wait('楽しそうです。間違っていなかった……');
      era.printButton('「全力で、追え。」', 1);
      await era.input();
      await coffee.say_and_wait('……はい。');
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        coffee.sex,
        'の、誰にも知られてこなかった追い駆けが、ついにレースの場で本格的に始まる。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '蜃気楼';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}A`,
        'は、ふぅ……！ みんなお疲れ！ いいレースだったね！',
      );
      await you.say_as_passer_by_and_wait(`ウマ${coffee.uma_sex_title}A`, [
        'そちらの……',
        coffee.get_colored_name(),
        ' さんだっけ？ お疲れ……',
      ]);
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}A`,
        'えっ、あれ……聞いてない？ あの……',
      );
      await coffee.say_and_wait('…………');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は他のウマ',
        coffee.uma_sex_title,
        'に背を向け、黙って遠くを見ている。',
      ]);
      await era.printAndWait([
        '選手通路へ駆けつけた ',
        you.get_colored_name(),
        ' は、',
        coffee.get_colored_name(),
        ' を見つけると前へ出た。',
      ]);
      await coffee.say_and_wait(['あっ、', callname, '……']);
      era.printButton('「レースの結果は？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……負けました。友達はひとりで一番前を走り、ゴールを……どんどん遠ざかって……',
      );
      await coffee.say_and_wait(
        'それに、楽しそうでした。広い場所で走れたからでしょう。でも同時に……',
      );
      await coffee.say_and_wait(
        '差は……今までで一番大きかった……何かの縛りが解けたみたいに、とても速く。',
      );
      await coffee.say_and_wait('……友達に追いつきたい。でも……どうすれば……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の話からすると、「友達」と',
        coffee.sex,
        'の速さの差は、相当大きいらしい……',
      ]);
      await era.printAndWait(
        'なら、慌てて計画を立てても効果は薄いだろう。それなら——',
      );
      era.printButton('「日程は急がず、一歩ずつ鍛えよう。」', 1);
      await era.input();
      await coffee.say_and_wait(
        '一歩ずつ……長い時間がかかる、ということですか……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の提案に、',
        coffee.get_colored_name(),
        ' は迷っている。',
        coffee.sex,
        'の重い表情からすると、頭の中で激しく秤にかけているのだろう。',
      ]);
      await coffee.say_and_wait(
        '……わかりました。すぐに追いつけないなら、それに私の体は丈夫とは言えません……そのほうが、合っているかもしれません。',
      );
      await era.printAndWait('それで、合意が取れた。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        coffee.sex,
        'に頷き、傍に立ち、同じ目標を追うと心に誓った。',
      ]);
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}A`,
        'ねえ、あのふたり、変じゃない……？ 何もない遠くをずっと見てるよ。',
      );
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}B`,
        'たぶん、ふたりとも……変人なんじゃない。近づかないほうがいいよ……」',
      );
      await era.printAndWait([
        '偶然もうひとつの世界に触れ、',
        coffee.get_colored_name(),
        ' に救われた ',
        you.get_colored_name(),
        ' は、いま、',
        coffee.sex,
        'だけが知る世界を理解しようと決めた……そして一歩ずつ、成績を積み上げていく。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_our_taste: (() => {
    const title = '私たちだけの味';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' と一緒に帰る途中——',
      ]);
      await coffee.say_and_wait(['……', callname, '。']);
      await coffee.say_and_wait(
        'よければ、このあと……コーヒーを一杯、いかがですか……',
      );
      await coffee.say_and_wait([
        '少し……',
        callname,
        ' に味わってほしい豆が、あるんです……',
      ]);
      era.printButton('「もちろん。」', 1);
      await era.input();
      await coffee.say_and_wait('……ありがとうございます。');
      await coffee.say_and_wait('では、私をよく見ていてください……ついてきて……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を、学園内の',
        coffee.sex,
        'の私的な空間へ連れていった。',
      ]);
      await coffee.say_and_wait('さっき言った豆は、これです……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はそう言って、机の上のガラス瓶に入った、まだ挽いていない豆を指した。',
      ]);
      await coffee.say_and_wait(
        'これは……私のコーヒーの木から採った豆です……自分で焙煎したものです……',
      );
      era.printButton('「コーヒーの木……」', 1);
      await era.input();
      await coffee.say_and_wait(
        'コーヒーの木が……実をつけるまで……最短でも、三年はかかります。',
      );
      await coffee.say_and_wait('それに、収穫は……年に一度だけ……');
      await era.printAndWait([
        'つまりこれは、',
        coffee.get_colored_name(),
        ' が自分で育てた木から採り、',
        coffee.sex,
        '自身の手で焙煎したコーヒー豆……',
      ]);
      await era.printAndWait('なんと貴重な……');
      era.printButton(
        '「……そんな大事なものを、本当に飲ませてくれるのか？」',
        1,
      );
      await era.input();
      await coffee.say_and_wait([
        '……大事だからこそ、',
        callname,
        ' に味わってほしいんです……',
      ]);
      await coffee.say_and_wait('それでは…………一緒に、飲んでくれますか？');
      era.printButton('「喜んで！」', 1);
      await era.input();
      await coffee.say_and_wait('では、いま淹れます……少々お待ちください。');
      await era.printAndWait([
        'この静かな空間には、',
        coffee.get_colored_name(),
        ' がコーヒーを淹れる音だけが響いている……',
      ]);
      await coffee.say_and_wait('…………お待たせしました。どうぞ。');
      await era.printAndWait([
        coffee.sex,
        'が淹れたコーヒーを口に含む。刹那、風味と温度が、肉体と心へ染み込んでいくようだった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' は向かい合って座り、静かにコーヒーを味わった。',
      ]);
      await era.printAndWait([
        '一杯を飲み終え、余韻に浸っていると、',
        coffee.get_colored_name(),
        ' がそっと ',
        you.get_colored_name(),
        ' の手に触れた。',
      ]);
      await coffee.say_and_wait('…………味は、いかがでしたか？');
      era.printButton('「……こんなに美味しいコーヒーは、初めてだ。」', 1);
      era.printButton('「いい時間をありがとう。」', 2);
      era.printButton('「機会があれば、俺も君に淹れてみたい。」', 3);
      await era.input();
      await coffee.say_and_wait('……言いすぎです。');
      await coffee.say_and_wait('でも……私も、同じ気持ちです。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の賛辞に、',
        coffee.get_colored_name(),
        ' の白い顔が羞恥で染まった。',
      ]);
      await era.printAndWait([
        'だがそれはお世辞ではない。この一杯に注がれた心と時間は、千の言葉に勝る。ここで',
        coffee.sex,
        'と味わった味を、',
        you.get_colored_name(),
        ' は一生忘れられないだろう……',
      ]);
      await coffee.say_and_wait('……礼を言うべきなのは、私です。');
      await coffee.say_and_wait(
        '……私のトレーナーになってくれて、ありがとうございます……',
      );
      await coffee.say_and_wait('来年の収穫のときも……今日のように……');
      await coffee.say_and_wait('一緒に、飲みましょうか？');
      era.printButton('「来年も再来年も、一緒に飲む。」', 1);
      await era.input();
      await coffee.say_and_wait('——！');
      await coffee.say_and_wait('……はい。');
      await coffee.say_and_wait('来年も……再来年も……一緒に……');
      await era.printAndWait([
        '来年、',
        coffee.sex,
        'と飲むコーヒーはどんな味だろう。そう思うと、近い将来の ',
        coffee.get_colored_name(),
        ' との日々が、想像で満ちた。',
      ]);
      await coffee.say_and_wait('……それなら……');
      await coffee.say_and_wait(
        '試してみますか……？ ……一緒に、コーヒーの木を。',
      );
      await coffee.say_and_wait(
        '新しく植えるなら……収穫まで、少なくとも三年はかかります。',
      );
      era.printButton('「その日のために、ちゃんと頑張る。」', 1);
      await era.input();
      await coffee.say_and_wait('……ふふ、少し遠い約束をしてしまいましたね。');
      await coffee.say_and_wait('でも……私も、楽しみにしています。');
      await era.printAndWait([
        'そのとき',
        coffee.sex,
        'と一緒に仕上げるコーヒーは、今飲んだものより美味しいはずだ。',
      ]);
      await era.printAndWait([
        'こうして、夜より香醇で濃い未来に、期待を抱いた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = '霊障';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([
        callname,
        '……今日は……体が、とても重いんです……',
      ]);
      await era.printAndWait([
        'トレーニング中の ',
        coffee.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の傍で足を止め、ゆっくり言った。',
      ]);
      await era.printAndWait([
        '「体がよくない」——以前、',
        coffee.sex,
        'はそう ',
        you.get_colored_name(),
        ' に言った。最初は単なる体質の問題だと思っていた。',
      ]);
      await era.printAndWait([
        '以前もたまにこうしたことがあり、',
        you.get_colored_name(),
        ' は深く気にせず、無理せず休むよう言ったあと……',
      ]);
      await era.printAndWait('——シャ、シャシャシャ……');
      await era.printAndWait([
        '地面の砂が突然おかしくなった。',
        coffee.get_colored_name(),
        ' の通った跡に、重いものを引きずったような痕が残っている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は倒れそうな',
        coffee.sex,
        'を慌てて呼び止め、保健室へ送った。',
      ]);
      era.drawLine();
      await coffee.say_and_wait(
        '体重が……こんな数字、見たことがありません……いったい、何が……',
      );
      await era.printAndWait([
        '保健室で簡単な検査をしても異常は見つからず、',
        coffee.get_colored_name(),
        ' が試しに体重計に乗ったあと、その衝撃的な数字に ',
        you.get_colored_name(),
        ' は本当に驚いた。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'の体重は大幅に増え、通常の変動の範囲をはるかに超えていた。',
      ]);
      await coffee.say_and_wait(
        'それに今日は……体が紙みたいで……全身が乾いているみたいで……うっ！？',
      );
      await era.printAndWait('——ギギッ、パチン！');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の言葉が終わる前に、小さな裂ける音とともに、激しい痛みが ',
        coffee.get_colored_name(),
        ' の青白い顔を駆け上がった。',
      ]);
      era.printButton('「どうした！？」', 1);
      await era.input();
      await era.printAndWait([
        '突然立てなくなった ',
        coffee.get_colored_name(),
        ' を支えると、体が軽くなった気がした。だが今はそれどころではない。',
        you.get_colored_name(),
        ' は視線を下ろした。まさか、',
        coffee.sex,
        'の足か！？',
      ]);
      await coffee.say_and_wait('私の……爪が……');
      await era.printAndWait([
        '急いで',
        coffee.sex,
        'の靴を脱がすと、乾いた趾の爪にひびが入り、小さな穴が開いている。',
      ]);
      await coffee.say_and_wait(
        '今日の体重は急に重くなって、いまは急に軽い……力が入らないわけですね……爪が割れたのも、乾きすぎたせいでしょう……',
      );
      era.printButton('「爪を整えて、消毒しよう。」', 1);
      await era.input();
      await coffee.say_and_wait('えっ……そんな、方法があるんですか？');
      await era.printAndWait([
        '専用の治療薬と補強剤で',
        coffee.sex,
        'の爪を固定した。トレーニングやレースを止めるほどではなさそうだが、長く続けば……',
      ]);
      await coffee.say_and_wait([
        callname,
        '、本当にすごいです……少し、楽になりました……',
      ]);
      await era.printAndWait([
        'それにしても、',
        coffee.sex,
        'のこの激しい体重変化は、まさか……',
      ]);
      era.printButton('「……普段の食欲は？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '食欲……ときどき、特別に旺盛になります。胃が底なしになったみたいで……いくら食べても満腹感がなくて……頭を空にして食べ続けるしかなくて……反対に、まったく食べられないときもあります。口へ押し込みたくても、手がまったく言うことを聞かなくて……',
      );
      await coffee.say_and_wait('でもそれは……私自身の意志ではないんです……');
      await era.printAndWait([
        coffee.sex,
        'は、ずっとこんな異常に耐えていたのか。この苦難を抱えながら、自ら危険を冒して自分を助けてくれた……',
      ]);
      era.printButton('「次に体に異状が出たら、写真を撮ってくれ。」', 1);
      await era.input();
      await coffee.say_and_wait(
        '写真、わかりました。撮ってお見せします……でも……',
      );
      era.drawLine();
      await era.printAndWait([
        '数日後、',
        coffee.get_colored_name(),
        ' から写真が届いた。',
      ]);
      await era.printAndWait([
        'だが……何を撮ったのか、まったくわからない。写真には奇妙な模様しか映っていない。',
      ]);
      await coffee.say_and_wait(
        'どう撮っても、ああなります。だから傷ついた場所をお見せできないんです……昔から、そうでした。たぶん、解けないのでしょう……私の体は、きっと……ずっと、こう……',
      );
      era.printButton('「教えてくれればいい！」', 1);
      await era.input();
      await coffee.say_and_wait('教える……？ 毎回、ですか？');
      era.printButton('「ああ、治療は俺がやる！」', 1);
      await era.input();
      await coffee.say_and_wait([
        'ありがとうございます、',
        callname,
        '……あなたがいると……少し、安心します。',
      ]);
      await era.printAndWait([
        'その後、',
        you.get_colored_name(),
        ' は持てる知識を総動員し、いつでも備えを整えて、なんとか ',
        coffee.get_colored_name(),
        ' が普通の生活を送れるようにした。だが……これは「体がよくない」のレベルをとうに超えている。',
      ]);
      await era.printAndWait('やはり、怪異なのか……');
      await era.printAndWait([
        'そう思うと、',
        you.get_colored_name(),
        ' は未来に、わずかな不安を覚えた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '新年とともに、',
        coffee.get_colored_name(),
        ' もクラシック級へ上がった。',
      ]);
      await era.printAndWait([
        'こういうとき、普通のトレーナーは担当',
        coffee.uma_sex_title,
        'と遠大な抱負を語り合うものだが……',
      ]);
      await coffee.say_and_wait(
        'いまは……この体の調子では、立派な抱負なんて言えません……',
      );
      await coffee.say_and_wait(
        '今年は……少なくとも、友達の後ろに、くっつけるくらいには……',
      );
      await era.printAndWait([
        coffee.sex,
        'の生まれつきの虚弱は、まだ改善されていない。目標も遠い。それでも ',
        you.get_colored_name(),
        ' は、',
        coffee.sex,
        'の気持ちだけでも前向きになってほしいと思った。',
      ]);
      era.printButton('「出かけて、気分転換しないか？」', 1);
      await era.input();
      await coffee.say_and_wait('出かける……そうは言っても、どこへ……');
      era.printButton(
        `${coffee.sex}に水を得た魚のような感覚を（スタミナ+20）`,
        1,
      );
      era.printButton(
        `${coffee.sex}にコーヒーをゆっくり味わわせる（体力+400）`,
        2,
      );
      era.printButton('「外をぶらつこう」（スキルPt+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '水を得た魚……？ よくわかりませんが、雑念を魚の泡みたいに吐き出せるなら……悪くないかもしれません……',
          );
          await era.printAndWait([
            'そうして ',
            coffee.get_colored_name(),
            ' を連れて水族館へ行った。',
            coffee.sex,
            'は水槽の魚を、とても真剣に見つめている……',
          ]);
          await coffee.say_and_wait(
            '……この魚たちは、終わりのない水圧を、ただ静かに耐えているんですね……',
          );
          await coffee.say_and_wait(
            '私も、彼らのように……もっと強くならないと……',
          );
          await era.printAndWait([
            coffee.sex,
            'は魚の感覚に共鳴し、少し忍耐を学んだらしい。',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            'コーヒー……そうですね。コーヒーの香りは、いつもすべてを忘れさせてくれます……',
          );
          await coffee.say_and_wait(
            'では、あの店へ行きましょう……普段はひとりで行っているんですけれど……',
          );
          await era.printAndWait([
            coffee.get_colored_name(),
            ' に案内され、小さなカフェへ着いた。',
            coffee.sex,
            'は慣れた様子で、いつもの席に座った……',
          ]);
          await coffee.say_and_wait([
            callname,
            '……コーヒーの飲み方を知っていますか？ この店には、味わう順番があるんです……',
          ]);
          await coffee.say_and_wait(
            'まず、空気に漂う香りを楽しんで……それから、旬のコーヒーを一杯……',
          );
          await era.printAndWait([
            coffee.sex,
            'は少しずつ口に含んでは飲み、コーヒーの美味を存分に味わった。',
          ]);
          break;
        case 3:
          await coffee.say_and_wait(
            '……ぶらつくのは、あまり好きではありません……人波に呑まれて、消えてしまいそうで……',
          );
          await coffee.say_and_wait([
            'でも……そうですね。',
            callname,
            ' も、いるなら……',
          ]);
          await era.printAndWait([
            'そうして ',
            coffee.get_colored_name(),
            ' を連れて、トレセン近くの街へ出た。',
            coffee.sex,
            'は好奇心いっぱいに、路傍の店のウィンドウを見回している……',
          ]);
          await coffee.say_and_wait(
            '意外と……面白いですね……見たことのない家具や服が、たくさん……',
          );
          await coffee.say_and_wait(
            'あっ、古いサイフォン……それから、アンティークのカップ……',
          );
          await era.printAndWait([
            '普段は街を歩かない ',
            coffee.get_colored_name(),
            ' も、見たことのないものを見つけて、心に少し刺激を得たらしい。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '転機';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     */
    const f = async (coffee, tachyon, you, callname, call_32, hoch_sho) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は無数の怪異に苛まれてきたが、絶え間ないケアの末、成績はなんとか合格圏まで届いた。',
      ]);
      await coffee.say_and_wait(
        '体重は……まだ急に重くなったり軽くなったりします……でも成績は、安定してきました。',
      );
      await coffee.say_and_wait([
        'これも ',
        callname,
        ' のおかげです……目標までは、まだ遠いですけれど。',
      ]);
      await coffee.say_and_wait('目標どころか……そもそも……');
      await era.printAndWait([
        coffee.sex,
        'が言いたかったことを想像しても、',
        you.get_colored_name(),
        ' には',
        coffee.sex,
        'の考えが読めない。',
      ]);
      era.printButton('「次の目標は、どこに置く？」', 1);
      await era.input();
      await era.printAndWait([
        coffee.sex,
        'の状態では、春のクラシック級で勝つのは難しいかもしれない。だが、それで自分を制限してほしくはない。',
      ]);
      await era.printAndWait([
        'まず ',
        coffee.get_colored_name(),
        ' の意見を聞けば、',
        coffee.sex,
        'の答えから、少しは考えが見えるはずだ。',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await coffee.say_and_wait(['……', call_32, ' も出る、', hoch_sho, '。']);
        await era.printAndWait([
          hoch_sho,
          '……',
          tachyon.get_colored_name(),
          ' がクラシック三冠へ進むうえで、重要な一戦だ。',
        ]);
      } else {
        await coffee.say_and_wait(['……', hoch_sho, '。']);
      }
      era.printButton('「理由を聞いてもいいか？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '本当は……私の意志ではありません。でも、友達がずっとそう求めて……',
      );
      await coffee.say_and_wait('『この一走を走れ』と。走らなければ……');
      await era.printAndWait([
        '走らなければ？',
        you.get_colored_name(),
        ' は背筋を伸ばし、',
        coffee.get_colored_name(),
        ' の次の言葉を待った。',
      ]);
      await coffee.say_and_wait(
        'どうなるかは……私もわかりません。友達は、そう言っただけです……でも、怖いことが起きるかもしれません……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は溜息をつき、椅子の背へ凭れた。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'はもう決めているらしい——自分の意志からではないにせよ、トレーナーとしては……',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        era.printButton('「アグネスタキオンと勝負しよう！」', 1);
      } else {
        era.printButton('「全力で走ってこい！」', 1);
      }
      await era.input();
      await coffee.say_and_wait('……はい！ 誰であろうと……超えてみせます……');
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = '弥生賞へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} vs_tachyon 相手にアグネスタキオンがいるか
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     */
    const f = async (coffee, you, call_32, vs_tachyon, hoch_sho) => {
      await era.printAndWait([
        '今日は ',
        hoch_sho,
        '。だが選手通路の ',
        coffee.get_colored_name(),
        ' は、少し憔悴している。',
      ]);
      era.printButton('「緊張しているのか？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の問いを聞いて、',
        coffee.get_colored_name(),
        ' は首を振った。',
      ]);
      if (vs_tachyon) {
        await coffee.say_and_wait([
          '昨夜からずっと……どうすれば ',
          call_32,
          ' に勝てるかを、考えていました……',
        ]);
      } else {
        await coffee.say_and_wait(
          '昨夜からずっと……どうすれば他の相手に勝てるかを、考えていました……',
        );
      }
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の憔悴は、',
        coffee.sex,
        'がこの一戦を重く見ている証だろう。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'の肩を叩く。トレーナーの ',
        you.get_colored_name(),
        ' に今できることは、ひとつだけだ。',
      ]);
      era.printButton('「頑張れ。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉に小さく頷き、',
        coffee.get_colored_name(),
        ' はレース場へ向かった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = '道標';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} vs_tachyon 相手にアグネスタキオンがいるか
     * @param {PrintedSpan} hoch_sho 弥生賞（着色名）
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     * @param {PrintedSpan} stli_kin セントライト記念（着色名）
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      vs_tachyon,
      hoch_sho,
      sats_sho,
      toky_yus,
      stli_kin,
      kiku_sho,
    ) => {
      await era.printAndWait([
        'レースが終わると、',
        you.get_colored_name(),
        ' はすぐ選手通路へ駆けつけた。',
      ]);
      era.printButton('「カフェ！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の呼びかけを聞いて、まだ息を切らしている ',
        coffee.get_colored_name(),
        ' がこちらを見た。レースの疲れから立ち直れていない',
        coffee.sex,
        'の顔は普段より青白く、額から汗が流れ続けている。',
      ]);
      await coffee.say_and_wait([
        'は、は……',
        callname,
        '、',
        you.adult_sex_title,
        '……ごほっ、ごほっ……',
      ]);
      era.printButton('「大丈夫か！？」', 1);
      await era.input();
      await coffee.say_and_wait('大丈夫です……少し、走りすぎただけ……');
      await era.printAndWait([
        '今回の ',
        hoch_sho,
        '、',
        coffee.get_colored_name(),
        ' の相手はいずれも強かった。最後まで手に汗握っていた ',
        you.get_colored_name(),
        ' は、',
        coffee.get_colored_name(),
        ' がゴールした瞬間にようやく息をついた。',
      ]);
      await era.printAndWait(['だが……単なる勝利は、目標ではない。']);
      era.printButton('「友達は？」', 1);
      await era.input();
      await coffee.say_and_wait(
        'まだ、追いつけません……でも、距離は縮まりました……！',
      );
      await coffee.say_and_wait('このままレースを重ねていけば……いつかは……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' のこれまでの話からすれば、友達はかなり強い存在だ……友達を追う目標は、',
        coffee.get_colored_name(),
        ' の成績を伸ばすことと、きれいに重なっている。',
      ]);
      await era.printAndWait([
        'その点では、このままクラシック三冠路線を狙うのが最善だが……',
      ]);
      if (vs_tachyon) {
        await tachyon.say_and_wait([
          'いたいた、',
          callname_32,
          '、それに ',
          t_call_c,
          '。',
        ]);
        await era.printAndWait([
          '今回は ',
          coffee.get_colored_name(),
          ' に負けたのに、',
          tachyon.get_colored_name(),
          ' は弱っている ',
          coffee.get_colored_name(),
          ' より余裕がある。いつもの笑みを浮かべ、ふたりのほうへ歩いてきた。',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          '、今回は——よく走った、非常によく！ ダメだが、いい！ 予想外の成功と予想どおりの失敗は相殺できる！',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はひとりでしばらく笑い、空を見て、何か小さく呟いた。',
        ]);
        await tachyon.say_and_wait('タキオン——光より速く動く、仮想粒子だ。');
        await tachyon.say_and_wait(
          'だが仮想であっても、狂熱の残光は見せてやる。',
        );
        await tachyon.say_and_wait([
          sats_sho,
          ' で燃え尽きたあと、眩しい残骸が生まれるはずだ。',
        ]);
        await tachyon.say_and_wait([
          'では、しばらくこれで。',
          t_call_c,
          '、これからも期待しているよ。',
        ]);
        era.printButton('「…………」', 1);
        await era.input();
        await era.printAndWait([
          'いつものように、',
          tachyon.get_colored_name(),
          ' は突然現れて難解なことを言い、勝手に去っていった。遠ざかる姿を見て黙り込む ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          ' が残された。',
        ]);
        await coffee.say_and_wait([callname, '……', sats_sho, '……出ますか？']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の言葉で何かを思い出し、',
          coffee.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に振り返って尋ねた。',
        ]);
      }
      era.printButton('「今日のレースは、かなりきつかっただろう？」', 1);
      await era.input();
      await coffee.say_and_wait('はい……少し、力が足りませんでした……');
      era.printButton('「なら、皐月賞は……いったん諦めよう。」', 1);
      await era.input();
      await era.printAndWait([
        '今日の激しいレースは、',
        coffee.sex,
        'の華奢な体に大きな負担をかけたはずだ。これから挑む路線は見えたが、こんなに早くG1へ行くのは、まだ無理がある。',
      ]);
      await coffee.say_and_wait('では……ダービーは……');
      await era.printAndWait([
        toky_yus,
        ' は確かに、',
        you.get_colored_name(),
        ' が ',
        coffee.get_colored_name(),
        ' に取ってほしいレースだ。だが次の目標をダービーにするなら、',
        coffee.sex,
        'が持つかは賭けになる……',
      ]);
      await coffee.say_and_wait([
        '……すみません、',
        callname,
        '……私が、こんなに弱いせいで……',
      ]);
      await coffee.say_and_wait(
        'あなたの優しさに、甘えたくない……それに……こんな大事な一戦……ごほっ……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の背を軽く叩き、',
        coffee.sex,
        'に少し息を整えさせた。',
      ]);
      era.printButton('「秋のセントライト記念に挑もう。」', 1);
      await era.input();
      await coffee.say_and_wait([
        stli_kin,
        '……',
        kiku_sho,
        ' の前哨戦、ですか……そんなに先……',
      ]);
      await coffee.say_and_wait('でも……それなら……少なくともダービーはまだ……');
      era.printButton('「ダービーは、様子を見て決めよう。」', 1);
      await era.input();
      await coffee.say_and_wait('様子を見て……はい、状況が許せば、また……');
      await era.printAndWait([
        'こうして次の目標は ',
        stli_kin,
        ' に決まり、',
        toky_yus,
        ' は状況が許せば出走することになった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = '諦めるかどうか';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' にとって、',
        toky_yus,
        ' は',
        coffee.sex,
        'の目標に必須の選択肢ではない。',
      ]);
      await era.printAndWait([
        '——とはいえ、一生に一度のダービーは、',
        coffee.sex,
        'にとっても魅力的だ。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' が ',
        toky_yus,
        ' に出られるかを確かめるため、トレーニング場へ来た。',
      ]);
      await coffee.say_and_wait(['は、は……', callname, '、このラップなら……']);
      await coffee.say_and_wait(
        'ダービー……勝機はありますか？ 勝てれば……友達にも、もっと近づける……',
      );
      era.printButton('「体の調子は？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……よくはありません……でも、これが一日や二日のことでもなくて……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' をダービーに出すかどうか……正直、判断は難しい。',
      ]);
      await era.printAndWait([
        'トレーナーの ',
        you.get_colored_name(),
        ' は、いま決断しなければならない。',
      ]);
      era.printButton('「……体のために、諦めよう。」', 1);
      era.printButton('「……チャンスは、一度きりだ。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await coffee.say_and_wait('諦める、ですか……わかりました……');
        await era.printAndWait([
          '一生に一度のダービーに出られないのは残念だ……この選択が、秋の ',
          coffee.get_colored_name(),
          ' に追い風をもたらすことを願う。',
        ]);
      } else {
        await coffee.say_and_wait(
          'わかりました……！ 頑張ります！ 必ず、ダービーを……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は闘志に満ちている……この選択が秋のレースに禍根を残さないことを願う。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '日本ダービーへ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        toky_yus,
        '——この一生に一度のレースのため、',
        coffee.get_colored_name(),
        ' は厳しいトレーニングを重ねてきた。',
      ]);
      await era.printAndWait('そしていま、収穫の時が来た。');
      await coffee.say_and_wait([callname, '……行ってきます。']);
      await era.printAndWait([
        '選手通路で、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' がレース場へ向かう背中を、無言で見送った。',
      ]);
      await era.printAndWait(
        '言うことはない。言うべきこともない。余分な言葉は、トレーニングの日々で吐き尽くした。',
      );
      await era.printAndWait([
        'これから先は、',
        coffee.sex,
        'ひとりと、他の出走',
        coffee.uma_sex_title,
        '——そして友達との勝負だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '屹立';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (coffee, you, toky_yus) => {
      await you.say_as_passer_by_and_wait('実況', [
        coffee.get_colored_name(),
        ' がダービーを制した──！！ 不滅の摩天楼、ここに屹立！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        'しかし',
        coffee.sex,
        'は大丈夫か？ 体力を使い果たし、足元もおぼつかない……それでも',
        coffee.sex,
        'は、',
        coffee.sex,
        'に夢を託した人々の宿願を叶えた——！！',
      ]);
      await era.printAndWait([
        '選手通路で、',
        coffee.get_colored_name(),
        ' はよろよろと ',
        you.get_colored_name(),
        ' のほうへ歩いてきた。',
      ]);
      await coffee.say_and_wait(['トレーナー……', you.adult_sex_title, '……']);
      era.printButton('「よくやった、カフェ……」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の胸に倒れ込んだ。疲れ果てた姿に胸が痛む。それでも',
        coffee.sex,
        'は勝利を手にした。',
      ]);
      await coffee.say_and_wait('は、は……');
      era.printButton('「これから、しっかり休もう。」', 1);
      era.printButton('「トレーニングの強度も、少し落とす。」', 2);
      await era.input();
      await coffee.say_and_wait('はい……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は ',
        toky_yus,
        ' を制した。長い努力が、最良の実を結んだ。同時に、',
        you.get_colored_name(),
        ' の全力のケアで、',
        coffee.sex,
        'の回復は順調だ。秋にも、いい成績が望めるだろう……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（クラシック）開始';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     */
    const f = async (coffee, tachyon, you, callname, callname_32, t_call_c) => {
      await era.printAndWait([
        'トレセンの慣例どおり、',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' は夏季合宿へ来た。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' のもともと良くない体は、これまでのトレーニングとレースで疲れを溜めている。この期間で、なんとか回復させなければならない。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の決意とは裏腹に、まだ学生だと言われればそれまでで、合宿地に着いたウマ',
        coffee.uma_sex_title,
        'たちはみな浮き浮きしている。',
      ]);
      await coffee.say_and_wait(
        'ふふふ……楽しみです、合宿……どこへ行きましょうか？',
      );
      await coffee.say_and_wait(
        'えっ？ 人のいない断崖ですか？ そうですね、山奥の忘れられた洞窟も、悪くないかもしれません。ふふふふ……',
      );
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}A`,
        'だ、誰に話してるの？ カフェ～！？ なんか、背筋がぞくぞくするんだけど！',
      );
      await you.say_as_passer_by_and_wait(`ウマ${coffee.uma_sex_title}B`, [
        'ハハハ……理由はわからないけど、',
        coffee.sex,
        'がいると霊が寄りそう……',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await tachyon.say_and_wait([
          'ふむ～霊異というより神秘、だろう。なあ？ ',
          callname_32,
          '。',
        ]);
        await era.printAndWait([
          '少し離れたところで虚空に呟いている ',
          coffee.get_colored_name(),
          ' を見ながら、',
          you.get_colored_name(),
          ' の傍の ',
          tachyon.get_colored_name(),
          ' が勝手に話を始めた。',
        ]);
        await tachyon.say_and_wait([
          '君が ',
          t_call_c,
          ' と何を経験したかはよく知らないが、見える怪物より、見えないもののほうが厄介だろう。だから距離は取っておいたほうがいい。',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          ' については、あの友達が何なのか、本当にいるのかは興味がない。気になるのは、',
          coffee.sex,
          'が何をしようとしているかだ。',
        ]);
      } else {
        await era.printAndWait([
          '少し離れたところで虚空に呟いている ',
          coffee.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' はあることを思った。',
        ]);
      }
      await era.printAndWait([
        '——友達。何度も ',
        you.get_colored_name(),
        ' を助けてくれたのに、ほとんど何も知らない存在。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の目標の核である友達は、どんな存在なのだろう。',
      ]);
      await era.printAndWait(
        '普段は深く知る時間も気力もない。だが夏季合宿という機会なら……',
      );
      await coffee.say_and_wait(['…………？ ', callname, '、どうかしましたか？']);
      era.printButton('「この夏は……ちゃんと話そう。」', 1);
      await era.input();
      await coffee.say_and_wait('……喜んで。');
      await era.printAndWait([
        '友達を深く知ることは、',
        coffee.get_colored_name(),
        ' を知ることに繋がる——',
        you.get_colored_name(),
        ' はそう思った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'Plan B';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     */
    const f = async (coffee, tachyon, you, call_32, t_call_c) => {
      await era.printAndWait([
        '夏季合宿が始まったある日、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' を合宿地の一室へ呼んだ。',
      ]);
      era.printButton('「君に関わる話がある……まず、テレビを見てくれ。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はぼんやり頷き、',
        you.get_colored_name(),
        ' の指示でテレビをつけた。',
      ]);
      await coffee.say_and_wait(['…………！？ ', call_32, '？']);
      await era.printAndWait([
        '画面に映っているのは、',
        tachyon.get_colored_name(),
        ' の記者会見だ。',
      ]);
      await tachyon.print_and_wait(
        '……先ほども申し上げたとおり、本日より、私アグネスタキオンは——無期限の休養に入ります！',
      );
      await you.say_as_passer_by_and_wait('記者たち', '————は！？');
      await era.printAndWait([
        'クラシック三冠路線で最も注目を集めるウマ',
        coffee.uma_sex_title,
        'のひとりの、突然の発表……会場は騒然となった。',
      ]);
      await you.say_as_passer_by_and_wait('記者A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '……レースで大きな可能性を見せていたのに、なぜそんな決断を！？',
      ]);
      await tachyon.print_and_wait(
        '大きな可能性、か……あれすら、私の本当の力ではないがな。',
      );
      await you.say_as_passer_by_and_wait(
        '記者B',
        '多くの人が、さらなる勝利を確信していました。いったいなぜ！？',
      );
      await tachyon.print_and_wait(
        'まあ、理由は一言では済まない。真実はいつも複数の因子でできているだろう？',
      );
      await you.say_as_passer_by_and_wait(
        '記者C',
        '実質的な引退宣言……そう理解していいんですか？',
      );
      await tachyon.print_and_wait(
        'そう聞いても意味はない。未来に何が起きるか、誰にも確定できないからな。',
      );
      await tachyon.print_and_wait('では、発表は以上だ。');
      await era.printAndWait([
        'そのあと ',
        tachyon.get_colored_name(),
        ' は現場を去り、',
        you.get_colored_name(),
        ' もテレビを消して、情報過多の ',
        coffee.get_colored_name(),
        ' を見た。',
      ]);
      era.printButton(
        '「簡単に言えば……タキオンはレースを捨てるつもりだ。」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('いったい……なぜ……');
      era.printButton(
        `「これは……俺とタキオンの決定だ。これから${tachyon.sex}は——」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('その点は、私自身が説明しよう。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が部屋の扉を開け、',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' の視線を受け止めた。',
      ]);
      await tachyon.say_and_wait([
        '簡単に言えば、',
        t_call_c,
        '——君の中に、新しい可能性を見つけたんだ。',
      ]);
      await coffee.say_and_wait('新しい……可能性？');
      await tachyon.say_and_wait([
        'そうだ。私の目標——ウマ',
        coffee.uma_sex_title,
        'の限界に到達し、超えること……だが、それを私自身が実現する必要があるか？ 道は一本ではない。検証すべき真理はひとつでも、終点へ至る道はいくつかある。',
      ]);
      await coffee.say_and_wait('それは……どういう意味ですか？');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は溜息をつき、大げさに手を振った。',
      ]);
      await tachyon.say_and_wait([
        'ここまで言ってわからないか……『顧問』だ、『顧問』！ ',
        t_call_c,
        '、私は君の顧問になる！',
      ]);
      await coffee.say_and_wait('えっ……顧問！？');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はぼんやり ',
        you.get_colored_name(),
        ' を見た。',
        you.get_colored_name(),
        ' は頷いた。',
      ]);
      era.printButton(
        '「そのとおりだ。これからタキオンは君の顧問になる。同時に……」',
        1,
      );
      era.printButton(`「君も、タキオンの目標を助ける責任を負う……」`, 2);
      era.printButton('「いま求めているのは、カフェの意見だ。」', 3);
      await era.input();
      await era.printAndWait([
        '言い終え、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' に考える時間を残そうとした。だが ',
        tachyon.get_colored_name(),
        ' はそう思っていない。',
      ]);
      await tachyon.say_and_wait(
        '私の助けがあれば、友達にもっと早く追いつけるぞ？',
      );
      await era.printAndWait([
        '友達に追いつく——それが ',
        coffee.get_colored_name(),
        ' の最大の願いだ。',
        tachyon.get_colored_name(),
        ' の実力と科学の力は、',
        coffee.sex,
        'に不満のある ',
        coffee.get_colored_name(),
        ' も認めている。',
      ]);
      await era.printAndWait('友達にもっと早く追いつけるなら……');
      await coffee.say_and_wait(
        'あなたは、まだ理解できません……でも、私の助けになるなら……',
      );
      await tachyon.say_and_wait(
        'ふふふふ……いい、それでいい。決まりだ、Plan B、開始！',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の助っ人を得たあと、',
        coffee.get_colored_name(),
        ' のクラシック挑戦は、どんな方向へ進むのだろう……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_31: (() => {
    const title = '友達';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([callname, '……友達のこと、ですよね……？']);
      era.printButton('「ああ。詳しく知りたい。」', 1);
      await era.input();
      await era.printAndWait([
        '夏季合宿のある夜、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' に、',
        coffee.sex,
        'の心の中で特別な存在——友達について尋ねた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は以前、偶然',
        coffee.sex,
        'から聞いたことがある。友達は',
        coffee.sex,
        'が小さい頃から傍にいて、ずっと前方を走り、',
        coffee.sex,
        'を導いてきた存在らしい。',
      ]);
      await era.printAndWait('だが、その導きとは、いったい何なのか。');
      await coffee.say_and_wait('何を……知りたいのですか？');
      era.printButton('「友達が導く、というのはどういう意味だ？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '導きとは……ずっと『私の前を走る』ということです。',
      );
      await coffee.say_and_wait('いいえ、それだけではありません……');
      await coffee.say_and_wait(
        '『友達』は私を……幸せな場所へ、連れていってくれるんです……',
      );
      await coffee.say_as_unknown_and_wait('ふふふ、ふふふふふ……♪');
      await era.printAndWait('周囲から、あるかないかの笑い声がした。');
      await coffee.say_and_wait(
        'こっそり、誰も知らない静かな場所へ連れていってくれたり……',
      );
      await coffee.say_as_unknown_and_wait('ふふふ、ふふふふふ……♪');
      await era.printAndWait([
        you.get_colored_name(),
        ' の耳元から聞こえるように、感覚をからかっている。',
      ]);
      await coffee.say_and_wait(
        '遊園地へ行ったとき……友達は観覧車の一番上に座っていました。追いつこうとして籠に乗ったら……とても美しい景色が見えて……',
      );
      await coffee.say_and_wait(
        '友達を追っていると、いつも楽しいことが起きるんです……',
      );
      await coffee.say_and_wait(
        '私が望めば、友達はいつも、どこへ行けばいいか教えてくれます……',
      );
      await coffee.say_and_wait(
        '他の人は……何も、くれなかった……友達だけが、違いました。',
      );
      await coffee.say_and_wait('楽しい時間をくれる……唯一無二の存在です……');
      era.printButton('「……今も、そうなのか？」', 1);
      await era.input();
      await coffee.say_and_wait([
        '……',
        callname,
        ' も、友達と少し似ています。',
      ]);
      await coffee.say_and_wait([
        'でも出会えたのは、友達が私を、危険に遭っていた ',
        callname,
        ' の前へ導いてくれたからです……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は少しわかった。',
        coffee.get_colored_name(),
        ' にとって友達は、レースで前を走る存在だけではない……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' にとっては、幸せへ連れていく水先案内人に近いのかもしれない。',
      ]);
      await coffee.say_and_wait(
        '今も、望めば、友達はどこへでも連れていってくれます。たとえば……',
      );
      await coffee.say_and_wait([
        callname,
        '、『今こんな場所にあるはずのないもの』を、ひとつ考えてくれますか？',
      ]);
      await era.printAndWait([
        'ここにあるはずのないもの……',
        you.get_colored_name(),
        ' の頭に浮かんだのは——',
      ]);
      era.printButton('「……ラベンダー。」（パワー+20）', 1);
      era.printButton('「……マリモ。」（根性+20）', 2);
      era.printButton('「四本脚の……馬。」', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            'ラベンダー……ですね。シソ科ラヴァンデュラ属……ここでは育たない花……',
          );
          await coffee.say_and_wait('でも、心から望めば……');
          await era.printAndWait('——ドン！');
          await era.printAndWait([
            you.get_colored_name(),
            ' の背中が……突然、強い力で押された。',
          ]);
          await era.printAndWait([
            '友達か！？ そう思うより先に、体は急かされるように押された方向へ進んでいた。',
          ]);
          await era.printAndWait('たどり着いた先は……');
          await coffee.say_and_wait('岩ですね。一緒に、どかしましょう。');
          await coffee.say_and_wait('いち～に……よいしょ……');
          await era.printAndWait([
            coffee.get_colored_name(),
            ' は細い腕で岩をどかした。岩の下には……海草のようなものが大量にあった。',
          ]);
          await coffee.say_and_wait(
            '一本一本の先端に、蕾のようなもの……これで、ラベンダーの代わり、ということでしょうか……',
          );
          break;
        case 2:
          await coffee.say_and_wait(
            'マリモ……ですね。北海道の阿寒湖などにいる、球状の藻……',
          );
          await coffee.say_and_wait(
            'この辺りでは見つからないはずですが、心から望めば……',
          );
          await era.printAndWait('——ドン！');
          await era.printAndWait([
            you.get_colored_name(),
            ' の背中が……突然、強い力で押された。',
          ]);
          await era.printAndWait([
            '友達か！？ そう思うより先に、体は急かされるように押された方向へ進んでいた。',
          ]);
          await era.printAndWait('たどり着いた先は……');
          await coffee.say_and_wait('はぁ、はぁ、ずいぶん……歩きましたね。');
          await coffee.say_and_wait([
            'あっ、',
            callname,
            '……波で浜に打ち上げられた、あれは……',
          ]);
          await coffee.say_and_wait('藻の塊、でしょうか。');
          await era.printAndWait(
            'そこにあるのは、海の汚濁をたっぷり吸って絡まった植物の残骸だった……',
          );
          await coffee.say_and_wait(
            '見た目はよくありませんが……これが、マリモの代わり、ということでしょうか？',
          );
          break;
        case 3:
          await coffee.say_and_wait([
            '馬……',
            coffee.uma_sex_title,
            'のことですか？ ……四本脚というのは……',
          ]);
      }
      if (ret < 3) {
        await era.printAndWait(
          '友達にできるのは、ここまでが限界なのだろう。万能ではないらしい。',
        );
        await era.printAndWait('尽力してくれる守護霊に近いのかもしれない。');
        await coffee.say_and_wait(
          '友達はいつもこうして、私をまっすぐ幸せへ導いてくれます。',
        );
        await coffee.say_and_wait(
          'ずっと傍にいて、助けてくれる……とても大切な……『友達』……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' が今あるのは、この守護霊のおかげかもしれない。',
        ]);
        await coffee.say_and_wait([
          '……あっ、',
          callname,
          '、見てください。海上に島が……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は遠くの海を見た……確かに島がある。だが橋も船もなく、泳いで届く距離でもない。',
        ]);
        await coffee.say_and_wait(
          '少し、行ってみたいです……きっと……静かで、美しい場所でしょう。',
        );
        await era.printAndWait('本当にその島へ行きたいなら……');
        await era.printAndWait('——トン、トン、トン！');
        await era.printAndWait([
          '理由もなく、',
          you.get_colored_name(),
          ' の背中を連続で突かれた……！ 「迷うな、行け」と言っているみたいだ。',
        ]);
        await coffee.say_and_wait(
          'あっ、『友達』が……手を振っています……海の向こうで『こっちへ来て』と……',
        );
        await era.printAndWait([
          '友達は、',
          coffee.get_colored_name(),
          ' にとって守護霊のような存在だ。',
        ]);
        await era.printAndWait([
          'だが、',
          coffee.sex,
          'を守る心があるのかどうかは、よくわからない。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿（クラシック）終了';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      m_horse,
      t_plan_b,
    ) => {
      await era.printAndWait('夏季合宿の全日程が終わった。');
      await coffee.say_and_wait([
        callname,
        '……あなたのおかげで、体がこんなに回復しました……',
      ]);
      if (t_plan_b) {
        await era.printAndWait([
          '夏いっぱいの必死のケアは実を結び、',
          coffee.get_colored_name(),
          ' の体調は目に見えて良くなった。',
        ]);
        await tachyon.say_and_wait([
          'やあ、',
          callname_32,
          '。この夏の ',
          t_call_c,
          ' の進捗は？',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の顧問、',
          tachyon.get_colored_name(),
          ' も顔を出した。',
        ]);
        era.printButton('「……少しは、わかった。」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' と、合宿で得た情報と友達のことを共有した。',
        ]);
        await tachyon.say_and_wait([
          'なるほど。意味不明なこともしているが、全体としては面白い……いや、',
          t_call_c,
          ' には有利、か。',
        ]);
        await tachyon.say_and_wait(
          'つまり——いやいや待て、外圧性、あるいは自傷衝動。いろいろな方向から考えると……',
        );
        await era.printAndWait([
          'そのあと ',
          tachyon.get_colored_name(),
          ' は思考の海に沈んだ。',
        ]);
      }
      await era.printAndWait([
        '夏は過ぎ、もうすぐ来る秋には、',
        coffee.get_colored_name(),
        ' も花開くはずだ。',
      ]);
      if (m_horse) {
        await era.printAndWait([
          '……ただ、あの漆黒の奇妙な獣だけは、',
          you.get_colored_name(),
          ' の頭から離れなかった。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_stli_kin: (() => {
    const title = 'セントライト記念へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (coffee, tachyon, you, t_call_c, t_plan_b, kiku_sho) => {
      era.printButton('「カフェ、体の調子は？」', 1);
      await era.input();
      await coffee.say_and_wait('体の奥が……以前と違います……');
      await coffee.say_and_wait(
        '奇妙な疼きがなくて……体が、確かに私のもの、という感じです……',
      );
      if (t_plan_b) {
        await tachyon.say_and_wait([
          '私の栄養指導なら当然だ。それに……春より体重も増えているぞ、',
          t_call_c,
          '……',
        ]);
        await tachyon.say_and_wait(
          'だがこの状態は……ふふふ、怪異とは無関係だな。単なる物理的な蓄積なら……',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          coffee.get_colored_name(),
          ' の体を上下から観察し、触ろうとして ',
          coffee.get_colored_name(),
          ' に器用に避けられた。',
        ]);
        await era.printAndWait(
          'どうやら、最も不可解な時期は乗り越えたらしい……',
        );
        await coffee.say_and_wait([
          'この感覚と調子で走って……このレースを確実に取れれば……',
          kiku_sho,
          ' にも勝機がありますか……？',
        ]);
        await tachyon.say_and_wait([
          'ふふ、実験の前に結果を語っても意味はないぞ、',
          t_call_c,
          '。',
        ]);
        await tachyon.say_and_wait([
          'レース場で見極めよう。',
          coffee.get_colored_name(),
          '——君という試験紙が、どんな色を出すか。',
        ]);
        await era.printAndWait(
          '明るい色であってほしい……どちらにせよ、今日は勝たなければならない。',
        );
      } else {
        await era.printAndWait(
          'どうやら、最も不可解な時期は乗り越えたらしい……',
        );
        await coffee.say_and_wait([
          'この感覚と調子で走って……このレースを確実に取れれば……',
          kiku_sho,
          ' にも勝機がありますか……？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は答えられなかった。',
          coffee.get_colored_name(),
          ' の体調には、まだ未知の因子が多すぎる。',
        ]);
        era.printButton('「とにかく、まずこのレースを取ろう。」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は頷き、レース場へ向かった。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = '過渡';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (coffee, you, callname, kiku_sho) => {
      era.printButton('「お疲れ、カフェ！」', 1);
      await era.input();
      await era.printAndWait([
        'いつものように、',
        you.get_colored_name(),
        ' は早く選手通路へ来て ',
        coffee.get_colored_name(),
        ' を待っていた。',
      ]);
      await coffee.say_and_wait(['は、ふ、は……', callname, '。できました……']);
      await coffee.say_and_wait(
        '楽ではなかったですが……足には……まだ余力があります。',
      );
      await era.printAndWait([
        '好走したあとも、',
        coffee.sex,
        'にはわずかな弱さが残っている。だが体は、夏の鍛錬で以前よりずっと丈夫になったらしい。',
      ]);
      await era.printAndWait([
        'ここで気を緩めてはいけない。一ヶ月後には、肝心の——',
        kiku_sho,
        ' が待つ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '菊花賞へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_plan_b,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await coffee.say_and_wait('…………');
      if (t_plan_b) {
        await tachyon.say_and_wait('…………');
      }
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        '選手通路では、誰も口を開かない。今日のレースがどれほど重いか、互いにわかっているからだ。',
      );
      await era.printAndWait([
        '——',
        kiku_sho,
        '。一生に一度のレース。これまでのどのレースとも違う、3000メートルの長距離。',
      ]);
      await era.printAndWait([
        '最も速いウマ',
        coffee.uma_sex_title,
        'が ',
        sats_sho,
        ' を獲り、最も幸運なウマ',
        coffee.uma_sex_title,
        'が ',
        toky_yus,
        ' を獲り、最も強いウマ',
        coffee.uma_sex_title,
        'が ',
        kiku_sho,
        ' を獲る。',
      ]);
      await era.printAndWait([
        '今日、',
        coffee.get_colored_name(),
        ' の本当の力が試される。',
      ]);
      await coffee.say_and_wait([callname, '、初めてです。']);
      await era.printAndWait([
        '長い沈黙のあと、',
        coffee.get_colored_name(),
        ' が言った。',
      ]);
      await coffee.say_and_wait(
        'レースの前に……友達に追いつけるかもしれない、そんな予感が……',
      );
      era.printButton('「超えてこい！」', 1);
      await era.input();
      await coffee.say_and_wait('……はい！');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はめずらしく明るい笑みを見せた。結果がどうであれ、この一戦は ',
        coffee.get_colored_name(),
        ' のレース人生の転機になる……いまできるのは、傍で祈ることだけだ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '収穫';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      kiku_sho,
      japa_cup,
      arim_kin,
    ) => {
      await you.say_as_passer_by_and_wait('実況', [
        coffee.get_colored_name(),
        '！ ',
        coffee.sex,
        'は破竹の勢いで衆を超え、真っ先にゴールした！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客たち',
        'おおおおおおおおおお！！！！！」',
      );
      await you.say_as_passer_by_and_wait('実況', [
        coffee.sex,
        'のあの速い脚……いや、驚異の脚だ！ 現場の誰もが目を見張っている……！',
      ]);
      await era.printAndWait([
        kiku_sho,
        ' で、',
        coffee.get_colored_name(),
        ' はかつてない安定した歩様でゴールへ至った。',
      ]);
      await era.printAndWait(
        '春、夏……この期間に積み重ねた努力が、いま花開いた。',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はめずらしく興奮した顔で選手通路を抜け、',
        you.get_colored_name(),
        ' の傍へ来た。',
      ]);
      await coffee.say_and_wait(
        'トレーナー……！ 友達が……！ さっき……目の前に……！ レースで、こんなに近くまで来たことは……！',
      );
      era.printButton('「おめでとう。顔は、はっきり見えたか？」', 1);
      await era.input();
      await coffee.say_and_wait(
        'まだです……でも今日は全程を走って、少しも辛くなかった……',
      );
      await coffee.say_and_wait('これが私……今の、私……');
      await era.printAndWait([
        coffee.sex,
        'の声には信じられない色が混じっている。',
        you.get_colored_name(),
        ' もその言葉から、ずっと ',
        coffee.get_colored_name(),
        ' の体に悪さしていた怪異が、消えたのだと読み取れた。',
      ]);
      await coffee.say_and_wait([callname, '……次の目標は？']);
      await era.printAndWait('興奮が収まれば、次の目標を決める番だ。');
      era.printButton('「……有馬記念だ。」', 1);
      await era.input();
      await coffee.say_and_wait([
        arim_kin,
        '……では ',
        japa_cup,
        ' は、諦めますか？',
      ]);
      await era.printAndWait([
        arim_kin,
        ' を選んだ主な理由は、',
        coffee.get_colored_name(),
        ' に休んでほしいからだ。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'の体調は明らかに良くなったが、高強度のレースにはまだ大きな危うさがある。',
      ]);
      await era.printAndWait([
        'それに、今日のレースを見て、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' が長距離向きだとわかった。',
        japa_cup,
        ' と ',
        arim_kin,
        ' は100メートルしか違わない……だが、その一見わずかな100メートルが勝負を決めることもある。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' に説明すると、',
        coffee.sex,
        'は反論せず、一歩前へ出て ',
        you.get_colored_name(),
        ' の手を握った。',
      ]);
      await coffee.say_and_wait([
        '私は……',
        callname,
        ' を信じています。',
        callname,
        ' がいるから……今の成績があり、友達に、こんなに近づけた……',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          'ふふふ、ハハハ！ いい、いいぞ。',
          t_call_c,
          '、よく走った！',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が、このときになってゆっくり観客席から到着した。',
        ]);
        await tachyon.say_and_wait([
          '完全に予想どおりだ！ さすが私が選んだPlan B！ 違うか、',
          t_call_c,
          '！？',
        ]);
        await coffee.say_and_wait([
          call_32,
          '……まだ、完全には信頼できません……でも、助けてくれたことには、感謝しています。',
        ]);
        await era.printAndWait([
          '言い終え、',
          coffee.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の手を引いて去ろうとした。去り際、',
          you.get_colored_name(),
          ' はもうひとりの担当',
          coffee.uma_sex_title,
          '——',
          tachyon.get_colored_name(),
          ' を振り返った。',
          coffee.sex,
          'はいつものように、余裕のある笑みを浮かべている。',
        ]);
        await era.printAndWait([
          'ただ、',
          you.get_colored_name(),
          ' も ',
          coffee.get_colored_name(),
          ' も気づかないところで、',
          tachyon.get_colored_name(),
          ' は一瞬だけ、失落を見せた。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '有馬記念へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      await era.printAndWait([arim_kin, '。']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の今年最後のレースであり、同時に',
        coffee.sex,
        'のクラシック級の終わりでもある。',
      ]);
      await era.printAndWait([
        '選手通路で、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' の両肩を支え、最後の言いつけをしている。',
      ]);
      era.printButton('「集中しろ……アドレナリンを、出し切れ……」', 1);
      await era.input();
      await coffee.say_and_wait('……はい。');
      await era.printAndWait([
        '目を閉じたまま、',
        coffee.get_colored_name(),
        ' は小さく答えた。',
      ]);
      await era.printAndWait('再び目を開けたとき、その瞳は揺るぎなかった。');
      await coffee.say_and_wait([callname, '、勝ちます。']);
      await era.printAndWait([coffee.sex, 'の背中が、光の中へ沈んでいく。']);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '妖異';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     */
    const f = async (coffee, you, callname, kiku_sho, arim_kin, tenn_spr) => {
      await you.say_as_passer_by_and_wait('実況', [
        '今年の ',
        arim_kin,
        ' を獲ったのは——',
        coffee.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客たち',
        'おおおおおおおお！！！！！」',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はシニア級の相手を前にしても高い水準を見せ、',
        arim_kin,
        ' を獲った。だが……',
      ]);
      await coffee.say_and_wait('どうして……距離が、開いて……');
      await coffee.say_and_wait([kiku_sho, ' のときより……遠い……どうして……']);
      await era.printAndWait([
        '選手通路で、勝ったはずの ',
        coffee.get_colored_name(),
        ' が壁に寄りかかって沈んでいる——いや、勝ったとは言えない。',
        coffee.sex,
        'はまた、',
        coffee.sex,
        'の友達に負けたのだ。',
      ]);
      era.printButton('「カフェ……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は慰めたいのに、どこから手をつけていいかわからない。',
      ]);
      await coffee.say_and_wait([
        callname,
        '……友達が……速くなりました。前より、ずっと速く……',
      ]);
      await coffee.say_and_wait(
        '私が速くなったことに応えるように……本気を出したみたいで……',
      );
      await coffee.say_and_wait('どうして……どうして……');
      await coffee.say_and_wait('どうして、どうして、どう……！！');
      await era.printAndWait('——パチン！');
      await coffee.say_and_wait('うっ……！');
      await era.printAndWait([
        'またか！？',
        you.get_colored_name(),
        ' はすぐ前へ出て ',
        coffee.get_colored_name(),
        ' を支えた。痛みと涙が同時に',
        coffee.sex,
        'の顔へ溢れ、壊れやすいガラスのように、見ていて辛い。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'の靴と靴下を脱がすと、見慣れた爪の割れが再び出ていた。体重の急変こそ収まったが、まさかまだ……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' を覆う影は、まだ消えていない。呪いなのか……それとも、何かの存在なのか……',
      ]);
      await coffee.say_and_wait('必ず、友達に追いつきます！');
      await coffee.say_and_wait(
        '来年は必ず……もう、昔の弱い自分ではありません……',
      );
      await coffee.say_and_wait(['……', callname, '、次の目標は……？']);
      await era.printAndWait(['まず落ち着かせなければ——うっ！']);
      await era.printAndWait([
        '言葉が出る前に、',
        you.get_colored_name(),
        ' は突然、上腹部を殴られたような衝撃を感じた。何か……とても強い意志……',
      ]);
      era.printButton('「…………天皇賞（春）。」', 1);
      await era.input();
      await coffee.say_and_wait([tenn_spr, '……ですか。3200メートルの長距離……']);
      await coffee.say_and_wait(
        'つまり……距離が長ければ、友達に追いつける、と？',
      );
      era.printButton('「…………ああ。」', 1);
      await era.input();
      await era.printAndWait([
        '方針に問題はない。次の目標を決めるなら、春の大型G1を狙うべきだ。',
        tenn_spr,
        ' は春の首座であり、',
        coffee.get_colored_name(),
        ' の長距離適性にも合う。',
      ]);
      await era.printAndWait([
        '……だがさっきの言葉は、本当に ',
        you.get_colored_name(),
        ' 自身の意志だったのか。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} kiku_sho 菊花賞（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_plan_b,
      kiku_sho,
      arim_kin,
      tenn_spr,
    ) => {
      await era.printAndWait('シニア級、年の初め。');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の今年の成功を祈って、神社へ初詣に来た。',
      ]);
      if (t_plan_b) {
        await coffee.say_and_wait([
          'あの……',
          call_32,
          ' は、最近どうですか……？ ',
          coffee.sex,
          '、レースに戻ると言っていました……',
        ]);
        await era.printAndWait([
          kiku_sho,
          ' のあと、',
          tachyon.get_colored_name(),
          ' はトレーニングを再開した。',
          arim_kin,
          ' が終わると、',
          coffee.sex,
          'は復帰を公に発表し、最初に出るレースは、',
          coffee.get_colored_name(),
          ' も出る ',
          tenn_spr,
          ' だ。',
        ]);
        era.printButton(`「${tachyon.sex}は……最近、忙しい。」`, 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は頷き、そのあと ',
          tachyon.get_colored_name(),
          ' の話は出さなかった。',
        ]);
      }
      await coffee.say_and_wait(
        '今日は私たち……ふたりだけですね……友達が、なぜか見当たらなくて……',
      );
      await era.printAndWait([
        arim_kin,
        ' のあと、',
        coffee.get_colored_name(),
        ' の様子は少しおかしい……だが、いつもそうというわけでもない。',
      ]);
      await era.printAndWait(['普段の', coffee.sex, 'はとても静かだ——']);
      await era.printAndWait(
        'スタッフ「皆さん、新年の祈りをしましょう！ どんな願いでも、神様は叶えてくださいますよ！」',
      );
      await coffee.say_and_wait('……………………');
      await coffee.say_and_wait('嘘です。');
      await coffee.say_and_wait(
        '願いは叶いません。この場所に、神なんていません。',
      );
      await era.printAndWait([
        '——だが……たまに、こうなる。何かのスイッチで',
        coffee.sex,
        'が変わってしまうのか。',
      ]);
      await coffee.say_and_wait([
        callname,
        '、こっちへ……すべての願いが叶う街へ行きましょう……',
      ]);
      era.drawLine();
      await era.printAndWait([
        'そのあと ',
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を、新年の気配のない不気味な街へ連れていった……',
      ]);
      await coffee.say_and_wait('ここが……本当に願いの叶う場所です……');
      await coffee.say_and_wait([
        '友達に追いつくために……',
        callname,
        ' は、私にどんな願いをしますか？',
      ]);
      await coffee.say_and_wait('この中から……ひとつ、選んでください。');
      await era.printAndWait('地面の砂がゆっくり動き、足元に文字が浮かんだ。');
      await era.printAndWait([
        '怪異は一度や二度ではないのに、それでも ',
        you.get_colored_name(),
        ' は震えた。',
      ]);
      await era.printAndWait([
        'その中から、',
        you.get_colored_name(),
        ' が選んだのは——',
      ]);
      era.printButton('「星光の治療」（体力+500）', 1);
      era.printButton('「全身の鱗」（全能力+10）', 2);
      era.printButton('「過ぎ去りし者の叡智」（スキルPt+35）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            '治療……そうですね……星は……ずっと空から、私たちを見ています……',
          );
          await coffee.say_and_wait('制限のない星光で、全身を包めば……');
          await coffee.say_and_wait([
            'ありがとうございます、',
            callname,
            '。少し、元気が出ました……',
          ]);
          await coffee.say_and_wait(
            'また、トレーニングを続けられそうです。俯かずに……前へ……',
          );
          await era.printAndWait([
            'さっきの街は幻覚だったのか……？ 瞬く間に、普通の通りへ戻っていた。',
          ]);
          await era.printAndWait([
            'どちらにせよ、',
            coffee.get_colored_name(),
            ' の顔には、再び活力が戻っていた。',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            '全身の鱗……髪も……網膜も……魂も……鱗で覆うみたいに……',
          );
          await coffee.say_and_wait('私という存在を強められるなら。ああ……');
          await era.printAndWait('——ぽちゃん。');
          await era.printAndWait(
            '耳元に幻聴のような水音がした。漆黒の海へ沈んだみたいで、果てもない。',
          );
          await era.printAndWait([
            '水圧が優しく ',
            you.get_colored_name(),
            ' の全身を包み、何かが傍を泳ぐ気がした——冷たく細かな鱗が水流とともに耳を掠め、分かれた細い舌が試しに出て、髪を撫でる……',
          ]);
          await era.printAndWait('…………');
          await era.printAndWait([
            you.get_colored_name(),
            ' が恍惚から覚めると、また普通の通りに戻っていた。',
          ]);
          await era.printAndWait('さっきのは夢か、それともまた怪異か。');
          await era.printAndWait([
            '傍で元気いっぱいに、まだ余韻を楽しんでいる ',
            coffee.get_colored_name(),
            ' を見れば、願いは効いたのかもしれない……',
          ]);
          break;
        case 3:
          await coffee.say_and_wait('過ぎ去りし者の叡智……先人たちの記憶……');
          await coffee.say_and_wait(
            'その一端でも覗ければ……たとえ、ほんの少しでも……',
          );
          await era.printAndWait([
            '——見知らぬ記憶が ',
            coffee.get_colored_name(),
            ' の頭へ流れ込んだ。',
          ]);
          await era.printAndWait(
            '存在したかすらわからない景色と、その中の古い知恵が一斉に湧き、すぐに蜻蛉の水面のように消える。覚えられたのは、皮一枚だけだ。',
          );
          await era.printAndWait('だが、皮一枚でも……');
          await coffee.say_and_wait([
            callname,
            '、世の中にはいろいろな走り方があるのが、わかった気がします。もっと……',
          ]);
          await coffee.say_and_wait(
            'この着想を……これからのレースで、ひとつずつ試してみたい……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' には何が起きたのかわからない。傍で見えたのは、',
            coffee.get_colored_name(),
            ' が目を閉じて開いた一瞬のあと、また普通の通りに戻っていたことだけだ。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '天皇賞（春）へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} callname_32 アグネスタキオンがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      call_32,
      callname_32,
      t_call_c,
      t_plan_b,
      tenn_spr,
    ) => {
      await era.printAndWait([tenn_spr, ' のレース当日。']);
      await coffee.say_and_wait('勝ちます……勝ちます……必ず、勝ちます……');
      await coffee.say_and_wait(
        '誰であろうと……私の前に立ち、友達へ追いつく道を塞ぐなら、私は……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は漆黒の炎を燃やすようだった。',
        coffee.sex,
        'の勝利への渇望は、かつてないほどだ。',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          'よう、',
          t_call_c,
          ' と ',
          callname_32,
          '。すごい顔だな。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '——',
          you.get_colored_name(),
          ' のもうひとりの担当であり、このレースの出走者でもある——が、後ろから現れた。',
        ]);
        await coffee.say_and_wait([
          call_32,
          '……あなたが出ても、私は止められません……',
        ]);
        await tachyon.say_and_wait([
          'ハハ、止める、か？ ……始まる前から勝ちを確信するなよ、',
          coffee.get_colored_name(),
          '。',
        ]);
        await era.printAndWait(
          '対立するふたり、決着はレース場でつけるしかない。',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は黙って、',
          coffee.get_colored_name(),
          ' の異常なほど険しい顔を見ていた。',
        ]);
        await era.printAndWait([
          'できるなら……友達を追うのはやめろと言いたい——そんな言葉は当然出せない。それは ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          ' が契約を結んだとき、最初に立てた約束だからだ。',
        ]);
        await era.printAndWait([
          'だから今日は……',
          coffee.sex,
          'の無事を祈るしかない。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '彼岸';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      m_horse,
      t_plan_b,
      tenn_spr,
      takz_kin,
    ) => {
      if (t_plan_b) {
        await era.printAndWait('息を呑む一戦だった。');
        await era.printAndWait([
          '全長3200メートルの ',
          tenn_spr,
          ' は、最後の直線で ',
          coffee.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' が殺し合う形で終わった。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の光速を超えたような姿、',
          coffee.get_colored_name(),
          ' の狩るような荒々しい脚。現場の誰もが深く揺さぶられた。',
        ]);
        await era.printAndWait([
          '——だが最後は、',
          coffee.get_colored_name(),
          ' が一歩上回った。',
        ]);
        await era.printAndWait([
          coffee.sex,
          'がゴールした瞬間、京都競馬場の歓声が空を裂いた。',
        ]);
        await era.printAndWait('選手通路。');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はレース後、姿が見えない。',
          coffee.get_colored_name(),
          ' はいつものように、',
          you.get_colored_name(),
          ' の到着を待っていた。',
        ]);
        await coffee.say_and_wait([
          'は、は、は……勝ちました、',
          callname,
          '……最後の直線で、全力で、',
          call_32,
          ' を超えました。',
        ]);
      } else {
        await era.printAndWait('息を呑む一戦だった。');
        await era.printAndWait([
          '全長3200メートルの ',
          tenn_spr,
          ' は、最後の直線で前列の',
          coffee.uma_sex_title,
          'を狩るような ',
          coffee.get_colored_name(),
          ' の凄まじい末脚で終わった。',
          coffee.sex,
          'がゴールした瞬間、京都競馬場の歓声が空を裂いた。',
        ]);
        await era.printAndWait('選手通路。');
        await coffee.say_and_wait(['は、は、は……勝ちました、', callname]);
      }
      await coffee.say_and_wait(
        'それに……友達との距離も……また少し縮まりました……まだ、追いつけていませんが。',
      );
      await era.printAndWait([
        'レースが終わり、場で全力を出した ',
        coffee.get_colored_name(),
        ' は、いつもの顔に戻っていた。',
      ]);
      era.printButton('「完璧な走りだった。おめでとう。」', 1);
      await era.input();
      await coffee.say_and_wait(
        'ありがとうございます。でも、友達に追いつくまでは、完璧なんて言えません……',
      );
      await coffee.say_and_wait([
        callname,
        '、これから先のレースを決める番ですね。次の目標は——',
      ]);
      await era.printAndWait([
        '次の目標……普通なら春の ',
        takz_kin,
        ' を選ぶことが多い。だが ',
        coffee.get_colored_name(),
        ' にしばらく休ませるのも悪くない……',
      ]);
      await coffee.say_and_wait('——フランス遠征へ、行きたいです。');
      await era.printAndWait('！？');
      await era.printAndWait([
        '一瞬、',
        you.get_colored_name(),
        ' は耳を疑った。',
        coffee.get_colored_name(),
        ' の爆弾発言が、思考を粉砕した。',
      ]);
      era.printButton('「フランス！？ 凱旋門賞か、凱旋門賞に出るのか！？」', 1);
      await era.input();
      await coffee.say_and_wait(
        '……もっと速く、もっと強く。そのためには、向こう側へ……海の向こうのフランスへ。',
      );
      era.printButton('「………理由は？ また友達か？」', 1);
      await era.input();
      await coffee.say_and_wait(
        'ええ……友達が、もう離れようとしています……ひとりでフランスへ……だから私は、絶対に……',
      );
      if (m_horse) {
        era.println();
        await era.printAndWait('——違う。');
        await era.printAndWait([
          '突然、',
          you.get_colored_name(),
          ' の頭の中に、虚空から意志が現れた気がした。',
        ]);
        await era.printAndWait([
          '違う？ 何が違う。',
          coffee.get_colored_name(),
          ' のフランス計画が違うのか……それとも、',
          coffee.sex,
          'をフランスへ導いているのは友達ではないのか。',
        ]);
      }
      era.println();
      await coffee.say_and_wait([callname, '……この願い、聞いてくれますよね？']);
      await coffee.say_and_wait('友達も、行ってほしいと言っています。だから……');
      if (m_horse) {
        era.println();
        await era.printAndWait('——違う。');
        await era.printAndWait([
          'また来た。その意志が、もう一度 ',
          you.get_colored_name(),
          ' の頭に現れた。',
        ]);
        await era.printAndWait('何が違うんだ、はっきり言え！');
      }
      era.println();
      await coffee.say_and_wait(
        '友達に追いつく——それが、私たちの大切な約束です。',
      );
      await coffee.say_and_wait(
        '諦めません……そのために、契約を結んだんですから……',
      );
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait([
        '反論できない。それは確かに ',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' の契約の礎だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' に遠征を諦めさせることができなかった。結局、国内目標の ',
        takz_kin,
        ' は残し、フランス遠征するかどうかは来月中旬に決めることにした。',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          'ただ、頭の中に直接現れたあの意志を、また思い出した。',
        ]);
        await era.printAndWait([
          '……',
          coffee.get_colored_name(),
          ' をフランスへ導いているのは、いったい何だ。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_19: (() => {
    const title = '別離';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_call_c,
      m_horse,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' と話し合った結果、国外遠征——フランスG1の ',
        prix_lat,
        ' へ行くことが正式に決まった。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は今日、この空港から出発する。',
        you.get_colored_name(),
        ' も同行し、ふたりでこの挑戦に向かう。',
      ]);
      await coffee.say_and_wait([
        '行きましょう、',
        callname,
        '。空の向こうで、友達に追いつくために……',
      ]);
      era.printButton('「……ちょっと待て。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は首を傾げて ',
        you.get_colored_name(),
        ' を見た。出発直前に何をするつもりなのか、わからないらしい。',
      ]);
      await you.say_and_wait(
        'フランス遠征は並大抵じゃない。出発前にもう一度、状況を整理する必要がある……',
      );
      await you.say_and_wait(
        '国外の馬場は国内とまったく違う。環境の変化と長い移動もある。体の調子を確かめておかないと……',
      );
      await coffee.say_and_wait('いまさら、そんなことを考えても……私も……');
      era.printButton('遮る', 1);
      await era.input();
      await you.say_and_wait(
        '最後に、トレーナーとしての立場は一時捨てる……行ってほしくない。',
      );
      await coffee.say_and_wait(
        '……なぜですか？ 私たちは……約束したはずです……一緒に、友達に追いつくまで歩く、と。',
      );
      await you.say_and_wait('カフェ……君のことは、いつだって最優先だ……');
      await you.say_and_wait(
        'カフェの夢を叶えるためなら、その夢と一緒に落ちても構わない……',
      );
      await you.say_and_wait(
        'だが……これは戻れない賭けだ。一度失敗すれば、君の競走生命は……終わる。',
      );
      await era.printAndWait(
        'ここまで積み重ねた努力が、最後に「終わり」と引き換えになるなら……',
      );
      await era.printAndWait([
        '夢を追うために、',
        coffee.get_colored_name(),
        ' が他のすべてを失うなら……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の成功とこれから先のほうが、いわゆる夢より大事だ。',
      ]);
      era.printButton('「だから、国外遠征は……取りやめよう。」', 1);
      await era.input();
      await coffee.say_and_wait('…………');
      await coffee.say_and_wait('そう、ですか……では……');
      if (era.get('love:25') > 75) {
        await coffee.say_and_wait('さよならです……私の、愛する人……');
      } else {
        await coffee.say_and_wait(['さよならです……', callname, '……']);
      }
      era.println();
      await coffee.say_and_wait(
        'あなただけは違うと思っていました……私の夢を真正面から見てくれた……私の世界に入ってくれた……',
      );
      await coffee.say_and_wait('結局……私の独りよがりでしたか……');
      era.println();
      await coffee.say_and_wait('大丈夫です……平気です。これから……ひとりでも……');
      await coffee.say_and_wait('大丈夫です……平気です。元の状態に戻るだけ……');
      await coffee.say_and_wait('必ず友達に追いつきます。だから——');
      era.println();
      await coffee.say_and_wait('……さよなら。');
      era.println();
      await era.printAndWait([
        '容赦なく別れを告げ、背を向けて去る。',
        coffee.get_colored_name(),
        ' は血の滲む言葉で関係を断とうとした——いや、言葉だけではない。',
      ]);
      await era.printAndWait([
        'いつの間にか、',
        coffee.get_colored_name(),
        ' の趾から血が滲み、伸ばした指からも血が滲んでいる。',
      ]);
      era.println();
      await coffee.say_and_wait('なぜ、動けない……私の……足が……');
      await coffee.say_and_wait('……なぜ？ 行かなければ……いけないのに……');
      await coffee.say_and_wait('行かなければ、友達が……');
      await coffee.say_and_wait('友達が……消えてしまう……');
      await coffee.say_and_wait('動けなくても、私は……！！');
      if (m_horse) {
        era.println();
        await era.printAndWait(['——', coffee.sex, 'を止めろ。']);
        await era.printAndWait([
          'わけのわからない意志がまた ',
          you.get_colored_name(),
          ' の頭に現れた——だが言われなくても、',
          you.get_colored_name(),
          ' はそうする……！',
        ]);
      }
      era.println();
      if (t_plan_b) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が駆け寄るより先に、予想外の人物が ',
          coffee.get_colored_name(),
          ' の傍に現れ、震える肩を掴んだ。',
        ]);
        await tachyon.say_and_wait([
          'みっともないな、',
          t_call_c,
          '。そんなに ',
          prix_lat,
          ' に出たいのか？',
        ]);
        await coffee.say_and_wait('……！？');
        era.printButton('「タキオン！？ なぜここに？」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はなぜかこっそり空港までついてきて、会話を傍観したあと、現場に加わった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は駆け寄り、',
          coffee.get_colored_name(),
          ' の無理な移動を止め、片手を腋の下へ、もう片手で脚を抱え、',
          coffee.sex,
          'をお姫様抱っこした。',
        ]);
        await tachyon.say_and_wait(
          '『なぜここに』とは何だ。実験対象の動向を気にするのは当然だろう？',
        );
        await coffee.say_and_wait(
          '……何もわかっていないのに……いつも、割り込んで……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の腕の中で少し抵抗したあと諦め、',
          tachyon.get_colored_name(),
          ' へ一言絞り出した。',
        ]);
        await tachyon.say_and_wait(
          'その姿で無理に出るのか。だからみっともないと言うんだ……',
        );
        await tachyon.say_and_wait([
          'どうしても ',
          prix_lat,
          ' に出たいなら——私が代わりに出てやろうか？',
        ]);
        await coffee.say_and_wait('……何を、言っているんですか？');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の発言に、腕の中の ',
          coffee.get_colored_name(),
          ' は衝撃を受けた。そんな話は、聞いたことがない。',
        ]);
        await tachyon.say_and_wait([
          '科学者は無駄なことはしない。',
          prix_lat,
          ' に出るのも私の算段だ……ああ、ただし ',
          takz_kin,
          ' にも出るがな。',
        ]);
        await tachyon.say_and_wait(
          'それに、君の言う友達にもずっと興味があった。私が代わりに追いついてやろう、どうだ？',
        );
        await coffee.say_and_wait('なぜ……友達が、同意して……');
        await coffee.say_and_wait('体の異状も……少しずつ戻って……');
        await coffee.say_and_wait('でも……でも私は……これから、どうすれば……');
        await coffee.say_and_wait('うっ、うううっ……ううう……');
        await era.printAndWait([
          '泣いている ',
          coffee.get_colored_name(),
          ' を抱えたまま、三人はトレセンへの帰り道へ着いた。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の国外遠征は出発直前に取り消され、次の目標は国内の ',
          takz_kin,
          ' に戻った。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          takz_kin,
          ' のあと、フランスの ',
          prix_lat,
          ' へ向かう。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は駆け寄り、',
          coffee.get_colored_name(),
          ' の無理な移動を止め、片手を腋の下へ、もう片手で脚を抱え、',
          coffee.sex,
          'をお姫様抱っこした。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は腕の中で抵抗しなかった。魂が抜けたみたいに……長いあと、',
          coffee.sex,
          'は再び反応した。',
        ]);
        await coffee.say_and_wait('どうやら……仕方ありません……');
        await coffee.say_and_wait([
          callname,
          ' の言うとおり……遠征は、取りやめます……',
        ]);
        await coffee.say_and_wait('でも……でも私は……これから、どうすれば……');
        await coffee.say_and_wait('うっ、うううっ……ううう……');
        await era.printAndWait([
          '泣き出した ',
          coffee.get_colored_name(),
          ' を抱えたまま、',
          you.get_colored_name(),
          ' はトレセンへの帰り道へ着いた。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の国外遠征は出発直前に取り消され、次の目標は国内の ',
          takz_kin,
          ' に戻った。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '宝塚記念へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        '空港での一件で、',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' は少し気まずい冷戦に入った。だが本音を打ち明けたあと、時間が沈殿するにつれ、関係は元どおり——それ以上に深くなった。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'は落胆から立ち直り、以前よりよく笑うようになった。そして——',
      ]);
      await era.printAndWait([takz_kin, ' 前の選手通路。']);
      await coffee.say_and_wait([takz_kin, '……ここが……私の新しい起点です……']);
      await coffee.say_and_wait('友達はいなくても……私は必ず——');
      await coffee.say_and_wait('——！？');
      era.printButton('「どうした？」', 1);
      await era.input();
      await coffee.say_and_wait('友達！ 通路の出口に……まだ、待っています！');
      await era.printAndWait([
        '友達は……フランスへ行き、',
        prix_lat,
        ' で ',
        coffee.get_colored_name(),
        ' の挑戦を待っているはずではなかったか。',
      ]);
      await era.printAndWait([
        'どちらにせよ、再び現れた友達を見て ',
        coffee.get_colored_name(),
        ' は気を持ち直し、レースでもいい状態を出せるかもしれない。',
      ]);
      await coffee.say_and_wait('必ず、勝ちます……');
      if (t_plan_b) {
        await tachyon.say_and_wait(['そう言い切るなよ、', t_call_c, '。']);
        await era.printAndWait([
          '整備を終えた ',
          tachyon.get_colored_name(),
          ' が、',
          coffee.sex,
          'の白い勝負服を着て選手通路へ来た。',
        ]);
        await tachyon.say_and_wait([
          takz_kin,
          ' で君を超え……それから ',
          prix_lat,
          ' で、君の友達を超える。',
        ]);
        await coffee.say_and_wait('……できるなら、どうぞ……！');
        await era.printAndWait([
          'ふたりの間に火薬の匂いが漂う。対立するふたりは、',
          takz_kin,
          ' で最後の勝負を迎える。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '代わりになるもの';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
      japa_cup,
    ) => {
      if (t_plan_b) {
        await coffee.say_and_wait([
          'は、は、は……',
          call_32,
          '……強い……あと少しで……',
        ]);
        await coffee.say_and_wait(
          '友達の肩に、届きそうでした……でも最後は、私が勝ちました。',
        );
      } else {
        await coffee.say_and_wait(
          'は、は、は……もっと近く……友達に……今までで一番近く……',
        );
        await coffee.say_and_wait('肩に、届きそうでした……');
      }
      await era.printAndWait([
        '今年上半期最後の大舞台——',
        takz_kin,
        ' は、',
        coffee.get_colored_name(),
        ' の勝利で終わった。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の体は、過去よりずっと良くなっている。激しい一戦のあとでも、全力ゴールの虚脱から立ち直るのに、さほど時間はかからなかった。',
      ]);
      era.printButton('「強くなったな、カフェ。」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は、確かに強くなった。',
      ]);
      await era.printAndWait([
        '二年半前、',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' が偶然出会ったころ、',
        coffee.sex,
        'は夜のトレーニング場で、見えないものをひとりで追う孤高の',
        coffee.uma_sex_title,
        'だった。',
      ]);
      await era.printAndWait('いま振り返れば、ずいぶん長い道を歩いてきた。');
      await era.printAndWait([
        '国外遠征には行けなかったが、それでも ',
        coffee.get_colored_name(),
        ' の夢は続けたい。',
      ]);
      await era.printAndWait('国外遠征……');
      await coffee.say_and_wait([callname, '、次の目標は……']);
      era.printButton('「ジャパンカップは、どうだ？」', 1);
      await era.input();
      await coffee.say_and_wait([
        japa_cup,
        '……',
        prix_lat,
        ' と同じ2400メートルの中距離……',
      ]);
      await coffee.say_and_wait([
        'ありがとうございます、',
        callname,
        '。そこが……私たちのフランス、ですね……',
      ]);
      await era.printAndWait([
        '叶えられなかった夢の続きとして、十一月の東京が、ふたりのパリになる。',
      ]);
      if (t_plan_b) {
        await era.printAndWait('では、本当のパリは？');
        await tachyon.say_and_wait(['私の負けだ、', t_call_c, '。']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が選手通路へ入り、坦々と敗北を認めた。',
        ]);
        await tachyon.say_and_wait(
          '君の中にある可能性は、私の想像よりずっと大きい。',
        );
        await tachyon.say_and_wait(
          'ここまでで……Plan B にも成果はあった、ということにしておこう。',
        );
        await coffee.say_and_wait([call_32, '……ありがとうございます……']);
        await tachyon.say_and_wait([
          'では、ここで別れだ。',
          prix_lat,
          '……私が走る最後のレースになるかもしれない。君とのレースは、いつも面白かったよ、',
          t_call_c,
          '。',
        ]);
        await coffee.say_and_wait('……あなたのレースも、見に行きます。');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は手を振るだけで、',
          coffee.get_colored_name(),
          ' の言葉には正面から答えなかった。',
        ]);
        await era.printAndWait([
          'こうして ',
          coffee.get_colored_name(),
          ' の次走は ',
          japa_cup,
          ' に決まった。',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          prix_lat,
          ' で、自分の輝きを迸らせるだろう。',
        ]);
      } else {
        await era.printAndWait([
          'こうして、次走は ',
          japa_cup,
          ' に決まった。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿（シニア）開始';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, japa_cup, arim_kin) => {
      await era.printAndWait('夏季合宿へ向かうバスの中。');
      await era.printAndWait([
        'この合宿のあと、',
        coffee.get_colored_name(),
        ' を待つのは ',
        japa_cup,
        ' だ。十一月はまだ遠く見えるが、油断すれば劣勢になる。出走未定の ',
        arim_kin,
        ' もある。',
      ]);
      await era.printAndWait(
        'だから今回の合宿の主な目標は、しっかり休ませること——',
      );
      era.printButton('「——わかったか、カフェ？ ……カフェ？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の隣の ',
        coffee.get_colored_name(),
        ' はいつの間にか肩に頭を預け、静かに眠っていた。体が車の揺れに合わせて微かに揺れている。',
      ]);
      await era.printAndWait([
        '座り方を少し直し、',
        coffee.sex,
        'が楽に眠れるようにした。',
      ]);
      await coffee.say_and_wait('………………ん……');
      await era.printAndWait('なんて可愛い寝顔だ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' にも眠気が差し、',
        coffee.get_colored_name(),
        ' と寄り添って眠った……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿（シニア）終了';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} m_horse 「友達」イベントで「馬」を選んだか
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     */
    const f = async (coffee, you, m_horse, japa_cup) => {
      await era.printAndWait('二ヶ月の夏季合宿が終わった。');
      await era.printAndWait([
        'この夏、特別なことは起きなかった。',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' は毎日浜辺でトレーニングし、',
        coffee.get_colored_name(),
        ' の体調は十分に整った。',
      ]);
      await coffee.say_and_wait('淡々とした合宿……これも、悪くないですね……');
      await era.printAndWait([
        'トレセンへ戻るバスの中、',
        coffee.get_colored_name(),
        ' は窓の外を流れる景色を見て、そう呟いた。',
      ]);
      era.printButton('「淡々とした暮らしも、悪くないな……」', 1);
      await era.input();
      await era.printAndWait([
        'だがウマ',
        coffee.uma_sex_title,
        'の生涯が、ずっと淡々と続くはずはない。トレセンに戻れば、緊張の ',
        japa_cup,
        ' 準備が始まる。',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          '重い空気が ',
          you.get_colored_name(),
          ' と ',
          coffee.get_colored_name(),
          ' のふたりを包む。異界の競走馬の魂、神秘の友達。さまざまな因子が ',
          coffee.get_colored_name(),
          ' に絡み、',
          coffee.sex,
          'を迷わせている。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の目標——友達に追いつくこと——は、本当に',
          coffee.sex,
          '自身の願いなのか。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = 'ジャパンカップへ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} call_32 マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
     * @param {boolean} t_plan_b アグネスタキオンが Plan B に入ったか
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     */
    const f = async (
      coffee,
      you,
      callname,
      call_32,
      t_plan_b,
      prix_lat,
      japa_cup,
    ) => {
      await era.printAndWait([japa_cup, ' 当日、選手通路。']);
      await era.printAndWait([
        '偶然の出会いから始まったふたりは、ついにここまで来た。',
      ]);
      await coffee.say_and_wait('…………');
      await era.printAndWait([
        you.get_colored_name(),
        ' と並んで歩いていた ',
        coffee.get_colored_name(),
        ' が突然足を止め、振り返った ',
        you.get_colored_name(),
        ' と目が合った。',
      ]);
      era.printButton('「緊張したか？」', 1);
      await era.input();
      await coffee.say_and_wait('……緊張ではありません。ただ……');
      if (t_plan_b) {
        await coffee.say_and_wait([
          call_32,
          ' の ',
          prix_lat,
          ' を見て、思いました……今日の私は、',
          coffee.sex,
          'のような素晴らしいレースが、走れるでしょうか。',
        ]);
      } else {
        await coffee.say_and_wait(
          '今日の私は……素晴らしいレースが、走れるでしょうか。',
        );
      }
      await era.printAndWait([
        'かつては友達を超えることしか考えず、外のすべてを顧みなかった ',
        coffee.get_colored_name(),
        ' は、さまざまな出来事を経て、変わっていた。',
      ]);
      era.printButton('「行け。自慢の末脚で、その姿を世界に見せてこい。」', 1);
      await era.input();
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait([callname, '……キスを、してもいいですか？']);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の額の長い髪をそっと分け、少し俯く。',
          coffee.get_colored_name(),
          ' は合わせて爪先立ちし、',
          you.get_colored_name(),
          ' の唇に口づけた。',
        ]);
        await era.printAndWait([
          '商店街の路地のあの日と同じように、',
          coffee.get_colored_name(),
          ' の両手は自然と ',
          you.get_colored_name(),
          ' の首の後ろに回り、唇の奥で互いの想いを交わした。',
        ]);
        await era.printAndWait([
          '長いあと、ふたりは離れ、見つめ合って笑い、それから ',
          japa_cup,
          ' のレース場へ走った。',
        ]);
      } else {
        await coffee.say_and_wait([callname, '……抱きしめてもらえますか？']);
        await era.printAndWait([
          '両手を開き、',
          coffee.get_colored_name(),
          ' は一歩前へ出て ',
          you.get_colored_name(),
          ' を抱いた。ふたりとも他の動作はせず、ただ静かに相手の温度を感じていた。',
        ]);
        await era.printAndWait([
          '長いあと、手を離し、それから ',
          japa_cup,
          ' のレース場へ走った。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '勝負';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} japa_cup ジャパンカップ（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, callname, japa_cup, arim_kin) => {
      await era.printAndWait([
        '世界中で ',
        japa_cup,
        ' を見ていた観客は、この日を覚えるだろう。',
      ]);
      await era.printAndWait([
        '最後の直線、漆黒の影が隊列の後方から襲い、背中を噛むように、抗えない力と爆発力で前方の「獲物」を狩り尽くした。超えられた',
        coffee.uma_sex_title,
        'は恐怖で一瞬失速したほどだ。',
      ]);
      await era.printAndWait([
        coffee.sex,
        'がゴールした瞬間、ハイスピードカメラが捉えたぼやけた姿から、のちに「漆黒の魅影」という称号がついた。',
      ]);
      await era.printAndWait('だがそれは、後の話だ。');
      await era.printAndWait([
        'いま選手控え室では、',
        japa_cup,
        ' の勝者 ',
        coffee.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' に押さえられ、マッサージを受けている。',
      ]);
      era.printButton('「今日は無茶しすぎだ。怪我したらどうする。」', 1);
      await era.input();
      await era.printAndWait([
        '友達にはまだ追いつけていない。だが ',
        coffee.get_colored_name(),
        ' は世界の前で誇れる走りを見せた。代償は、場を下りて ',
        you.get_colored_name(),
        ' に会った瞬間に支えきれなくなり、胸へ倒れ込んだことだ。',
      ]);
      await era.printAndWait([
        '幸い怪我はなく、体力を使い果たしたあとの筋肉の虚脱だけだった。',
        you.get_colored_name(),
        ' はその場で',
        coffee.sex,
        'の筋肉をほぐし始めた。',
      ]);
      await coffee.say_and_wait([
        'あっ、痛い……！ ',
        callname,
        '、もう少し優しく……',
      ]);
      await coffee.say_and_wait(
        '客席の歓声を感じて……足が、止まらなかっただけです……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' に本気で責めるつもりはない。マッサージしながら説教したあと、今日の ',
        coffee.get_colored_name(),
        ' の行いを許した。',
      ]);
      await coffee.say_and_wait([
        callname,
        '……次の目標は、',
        arim_kin,
        ' ですね。',
      ]);
      await era.printAndWait([
        'マッサージが終わり、',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' が荷物をまとめてトレセンへ戻ろうとしたとき、',
        coffee.sex,
        'は一ヶ月後の年末の大舞台——',
        arim_kin,
        ' に触れた。',
      ]);
      await era.printAndWait([
        'いま思えば、',
        coffee.get_colored_name(),
        ' と歩んだ日々はもうすぐ三年だ。楽しいことも、言い合ったこともあった。怪異で危険に陥ることもあった。だが ',
        you.get_colored_name(),
        ' は、',
        coffee.sex,
        'と契約したことを一度も後悔していない。',
      ]);
      await era.printAndWait([
        'この最後の ',
        arim_kin,
        ' で、三年の成果を確かめよう。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '有馬記念へ';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      era.printButton('「……これが、最後だ。」', 1);
      await era.input();
      await coffee.say_and_wait('……ええ。時間が、早かったですね……');
      await era.printAndWait([
        '選手通路で、',
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' と ',
        arim_kin,
        ' 前の最後の会話をしていた。',
      ]);
      await coffee.say_and_wait([callname, '、少し、お願いします……']);
      await era.printAndWait([
        'そう言って、',
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の手を取り、自分の胸に当てた。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の力強い心拍が柔らかさを通して掌に届く。この瞬間、',
        you.get_colored_name(),
        ' は十分に感じた。',
        coffee.get_colored_name(),
        ' という存在が、どれほど生きていて、どれほど美しいかを。',
      ]);
      await coffee.say_and_wait('……暖かい……少し、安心しました……');
      await coffee.say_and_wait([
        'この ',
        arim_kin,
        ' が終わっても……ずっと一緒にいてください、',
        callname,
        '……',
      ]);
      era.printButton('「離れない。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の肯定を得て、',
        coffee.get_colored_name(),
        ' は手を離し、微笑んで選手通路を出ていった。',
      ]);
      await era.printAndWait([
        '三年分の、',
        you.get_colored_name(),
        ' との小さな思い出を胸に、',
        coffee.get_colored_name(),
        ' は最後のゲートへ向かった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '摩天楼';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait('実況', [
        coffee.get_colored_name(),
        '！ ',
        coffee.get_colored_name(),
        ' だ——！ ゴールしたあとも、',
        coffee.sex,
        'は地平線の彼方を見つめている！！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        coffee.sex,
        'の最終目的地は、どこなのか！？ どこまで成長するのか！？',
      ]);
      await era.printAndWait([
        'レースが終わっても ',
        coffee.get_colored_name(),
        ' はすぐには去らず、その場に立ち、コースの先を見ていた。',
      ]);
      await era.printAndWait([
        '何か問題が起きたのかと心配になり、',
        you.get_colored_name(),
        ' は前へ出た。',
      ]);
      era.printButton('「あの……カフェ？」', 1);
      await era.input();
      await coffee.say_and_wait(['…………', callname, '、わかりました……']);
      await coffee.say_and_wait(
        'あなたのせいです……だから友達が、行ってしまった……',
      );
      await era.printAndWait('は……？');
      await era.printAndWait([
        you.get_colored_name(),
        ' のせいです友達が走り去った、ということか。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' が謝ろうとしたとき——']);
      await coffee.say_and_wait('そういう意味では、ありません。');
      await coffee.say_and_wait(
        '言いたいのは……あなたのせいで……友達の速さが、もう追いつけないほどになった、ということです。',
      );
      await coffee.say_and_wait('そうです……友達は、進化し続けています……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の顔を見て、真剣な表情で言った。',
      ]);
      await coffee.say_and_wait(
        '友達は私の理想とともに上がり、速さも増していく……',
      );
      await coffee.say_and_wait(
        '私が強くなったあと……友達はもっと遠くで手を振り、『まだ速くなれるでしょう』と言うんです。',
      );
      await coffee.say_and_wait(
        '私ひとりなら、とっくに追いついていたかもしれません。追いついた先で……夢もそこで止まっていたでしょう。でも……',
      );
      await coffee.say_and_wait(
        '今の私は、まだ……上を見上げています。頂の見えない摩天楼を……',
      );
      await coffee.say_and_wait(
        'あなたが……友達を励ました。あなたが……私を励ました。',
      );
      await coffee.say_and_wait(
        'ひとりでは絶対に届かない……高さまで、連れてきてくれた……',
      );
      await era.printAndWait([
        '友達とは何か。ようやく、答えの曙光が見えた気がする。',
      ]);
      await era.printAndWait('友達は善でも悪でもない。だって——');
      await coffee.say_and_wait('もっと速くなるでしょうね……友達は……');
      await coffee.say_and_wait(
        'それで、私たちも、これからも友達を追っていける……',
      );
      await coffee.say_and_wait(
        '友達はもう、私ひとりの友達ではありません……ふたりの意志を乗せるものになりました……レース前の約束どおり、あなたと一緒に、天涯海角まで追いたいです。',
      );
      era.printButton('「ああ……天涯海角まで。」', 1);
      await era.input();
      await era.printAndWait([
        'これから先も、',
        you.get_colored_name(),
        ' はいつものように ',
        coffee.get_colored_name(),
        ' と友達の背中を追い、進んでいくのだろう。',
      ]);
      await era.printAndWait([
        'ふたりは並んで空を仰ぎ、この目標がどれほど貴重で、果てがないかを、静かに噛みしめた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = '静謐の継承者';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' はトゥインクル・シリーズ最初の三年で、大きな成功を収めた。',
      ]);
      await era.printAndWait([
        '眼前に並ぶトロフィーは、高層の立ち並ぶ街のようだ。だが',
        coffee.sex,
        'の活躍は、そこで止まらなかった——',
      ]);
      await coffee.say_and_wait(
        '今日も……お客さんがたくさん……では……相談したいことは……？',
      );
      await era.printAndWait([
        'いつの間にか、レースでの姿から……',
        coffee.get_colored_name(),
        ' は多くのウマ',
        coffee.uma_sex_title,
        'に慕われるようになっていた。',
      ]);
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}A`,
        'あの～カフェさん……ダートでうまく走る方法を教えてほしくて。いつも走れなくて……',
      );
      await coffee.say_and_wait('ダート……そうですか……');
      await coffee.say_and_wait('力みすぎないほうが、いいと思います。');
      await coffee.say_and_wait('砂の中で……振り子を振るみたいに……');
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}B`,
        '次は私！ 次は逃げに挑戦しようと思ってるんですが、コツはありますか！？',
      );
      await coffee.say_and_wait('逃げ……あまり得意ではありませんが……');
      await coffee.say_and_wait(
        'いちばん大事なのは……心持ちです……重心をどこに置くか……走り方は、心の現れにすぎません……',
      );
      await coffee.say_and_wait('少しは……着想になりましたか？');
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}たち`,
        'はい！ ありがとうございました！！',
      );
      await coffee.say_and_wait('では……コーヒーを一杯、飲んでいきますか？');
      await you.say_as_passer_by_and_wait(
        `ウマ${coffee.uma_sex_title}たち`,
        '……いただきます！',
      );
      await era.printAndWait([
        '多くの',
        coffee.uma_sex_title,
        'の質問に、',
        coffee.get_colored_name(),
        ' は誰にでも霊性のある助言を出せ、実際に',
        coffee.couple_title,
        'の助けになっている。',
      ]);
      await era.printAndWait([
        'トレーナーである ',
        you.get_colored_name(),
        ' ですら、自らの及ばなさを感じるほどだ。',
      ]);
      era.drawLine();
      await coffee.say_and_wait([
        'はぁ、はぁ……',
        callname,
        '……もう一度、走りを見ていてもらえますか？',
      ]);
      await coffee.say_and_wait(
        '今日は新しい走りを試したいんです。誰かの参考に……なれば……',
      );
      era.printButton('「後輩たちのためか？」', 1);
      await era.input();
      await coffee.say_and_wait(
        'はい……最近よく考えるんです。前を走る友達に追いつくのは大事ですが……',
      );
      await coffee.say_and_wait([
        '同時に……後ろから自分を追うウマ',
        coffee.uma_sex_title,
        'たちを支えるのも、大事だと。',
      ]);
      await coffee.say_and_wait(
        '私は……友達ほど速くありません……それでも、静かに助けになりたい……',
      );
      await coffee.say_and_wait([
        '静かに両手を広げて……いつか、すべてのウマ',
        coffee.uma_sex_title,
        'の助けになれるように……',
      ]);
      await era.printAndWait('——シュッ。');
      await era.printAndWait([
        '突然、',
        you.get_colored_name(),
        ' の目の前を何かが速く通り過ぎた。見たことはないのに、頭の中に「友達」の二字が浮かんだ。',
      ]);
      era.printButton('「……カフェ、友達はいまどこにいる？」', 1);
      await era.input();
      await coffee.say_and_wait('友達なら、そこに……えっ？ いない……');
      await era.printAndWait('——シュッ。');
      era.printButton(`「カフェ、君は……ウマ${coffee.uma_sex_title}の……」`, 1);
      await era.input();
      await era.printAndWait([
        '聞こえた気がした……「種」の声が。ウマ',
        coffee.uma_sex_title,
        'の種の声が、耳の傍で回り続ける……',
      ]);
      await era.printAndWait([
        'そうだ、',
        coffee.sex,
        '——',
        coffee.get_colored_name(),
        ' こそが——',
      ]);
      era.drawLine();
      await era.printAndWait([
        'あるウマ',
        coffee.uma_sex_title,
        'についての寓話がある。',
      ]);
      await era.printAndWait([
        'そのウマ',
        coffee.uma_sex_title,
        'はほとんど究極の速さを持ち、',
        coffee.get_colored_name(),
        ' によく似ていたという。',
      ]);
      await era.printAndWait([
        'もしかすると ',
        coffee.get_colored_name(),
        ' は……ずっと夢の中にいたのかもしれない。',
      ]);
      await era.printAndWait([
        '究極のウマ',
        coffee.uma_sex_title,
        'が目の前に現れ、',
        coffee.get_colored_name(),
        ' に「',
        coffee.sex,
        'になれ、そして超えろ」と期待する、そんな夢……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  scared: (() => {
    const title = '暗がり';
    /**
     * @author Mr.E.
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        '深夜、真っ暗な学園から泣き声がする。子供だろうか。',
      ]);
      era.println();
      era.printButton('早く寮へ戻ろう……', 1);
      era.printButton('急いで行かないと。大事でなければいいが……', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        for (let i = 0; i < 5; ++i) {
          await era.delay(500);
          era.replaceText('…'.repeat(i + 1));
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' は再び出口を探したが、どこも真っ暗で、どうしても出られない。',
        ]);
        era.println();
        const random_colors = Object.values(chara_colors).map((e) =>
          Array.isArray(e) ? e[0] : e,
        );
        const buffer = [];
        buffer.push({ content: '？？？', fontWeight: 'bold' }, '「');
        const content = 'いやだいやだ';
        for (let i = 0; i < content.length; ++i) {
          buffer.push({
            content: content[i],
            color: get_random_entry(random_colors),
          });
        }
        buffer.push('あなた！」');
        await era.printAndWait(buffer);
        era.println();
        await you.say_and_wait(['あっ！']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は勢いよく起き上がり、周囲を見た。',
        ]);
        era.println();
        await you.say_and_wait(['夢、か……？']);
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の膝に頭を預けたまま、',
          coffee.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' をマッサージしている。',
        ]);
        era.println();
        await coffee.say_and_wait([
          '大丈夫です、',
          callname,
          '。もう終わりました。あの子は、少し寂しいだけです。',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' を起こさないよう、',
          coffee.get_colored_name(),
          ' の声はいつもより柔らかく、低い。',
        ]);
        era.println();
        await coffee.say_and_wait([
          'これから、こんなことは怖がらなくていいです。ずっと傍にいますから',
        ]);
      } else {
        await era.printAndWait([
          'なぜか、子供を探そうと気を引き締めた瞬間、',
          you.get_colored_name(),
          ' の速度は上がり続け、明かりのある寮の扉が近づいていく。頭の中の泣き声は、むしろ小さくなっていく。',
        ]);
        era.println();
        await you.say_and_wait(['一日疲れたな。早く休もう。']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' はそう思いながら、寮の扉を開けた。',
        ]);
        era.println();
        await you.say_and_wait(['何か、忘れていないか？']);
        era.println();
        await era.printAndWait([
          '疑問を抱えたまま、',
          you.get_colored_name(),
          ' は深く眠った。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  palace: (() => {
    const title = '楽園';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await coffee.print_and_wait([
        '万華鏡のように絢爛な光を放つ空と大地、夢のように金色の光沢を帯びた巨大な歯車……',
      ]);
      await coffee.print_and_wait('ここは……夢の世界でしょうか。');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' は周囲を見回した。目の前の景色は、',
        coffee.sex,
        'にとって見知らぬものではない。',
      ]);
      era.println();
      await coffee.print_and_wait([
        '数えきれない夜、',
        coffee.sex,
        'はこの夢幻の世界を歩いてきた。虹へ飛び込む飛行鯨を見た。宝石のような翼を持つ巨竜を見た。日夜追い続け、「友達」と呼ぶ存在も見た。',
      ]);
      await coffee.print_and_wait([
        'では今日は、',
        coffee.sex,
        'は何を見るのだろう。',
      ]);
      era.println();
      await coffee.print_and_wait(
        '一道の影が波のように眼前に浮かぶ。黒い長い髪、白い流星のようなアホ毛、見慣れた勝負服……',
      );
      era.println();
      await coffee.say_and_wait(['あなたは……']);
      era.println();
      await coffee.print_and_wait([
        '問いかけを聞いて来客が振り返ると、',
        coffee.get_colored_name(),
        ' が見たのは、鏡を見るように自分とそっくりな',
        coffee.uma_sex_title,
        'だった。',
      ]);
      era.println();
      await coffee.print_and_wait('——友達。');
      await coffee.print_and_wait([
        '最初に ',
        coffee.get_colored_name(),
        ' の頭に浮かんだのは、その言葉だった。',
      ]);
      era.println();
      await coffee.print_and_wait(['——だが', coffee.sex, 'は、友達ではない。']);
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' は確信した。相手は友達でも怪異でもなく、自分と同じ生身の存在、自分の夢に現れた人だ。',
      ]);
      era.println();
      await coffee.print_and_wait(
        'もうひとりのカフェ「……自分と同じ存在を見て、驚かないのですか？」',
      );
      era.println();
      await coffee.print_and_wait(['——声まで、自分とそっくりだ。']);
      era.println();
      await coffee.say_and_wait([
        '……ここで、自分に似た人は見たことがあります。あなたは？',
      ]);
      era.println();
      await coffee.print_and_wait(
        'もうひとりのカフェ「職業柄、鏡には慣れています……ここには、あなたひとりですか？」',
      );
      era.println();
      await coffee.say_and_wait([
        '……私のほかに、たまに友達もいます。でも他の人を見るのは初めてです……少し話しませんか。出会えたのも、縁ですから……',
      ]);
      era.println();
      await coffee.print_and_wait([
        'もうひとりのカフェ「縁、ですか……私たち',
        coffee.uma_sex_title,
        'に似合う言葉ですね。私たち',
        coffee.uma_sex_title,
        'は、運命に導かれる存在なのですから」',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——どう言えばいいだろう……顔はそっくりなのに、性格は微妙に違う。',
      ]);
      era.println();
      await coffee.print_and_wait(
        'もうひとりのカフェ「……運命は、厄介です……勝手に、私たちを縛る」',
      );
      era.println();
      await coffee.say_and_wait(
        '……ええ。思い返せば、私もずっと縛られていたのかもしれません……友達に追いつき、超えること。それも運命の導きだったのかも。',
      );
      era.println();
      await coffee.print_and_wait(
        'もうひとりのカフェ「あなたの目標は、追いつけない友達を超えること、ですか？',
      );
      era.println();
      await coffee.say_and_wait(['……おかしいですよね……']);
      era.println();
      await coffee.print_and_wait(
        'もうひとりのカフェ「いいえ、私たちは似ています……私は『楽園』を探しています。届かない楽土へ……遠すぎて、方向はわかっても、視線すら届かない……」',
      );
      era.println();
      await coffee.say_and_wait(
        'ええ、私も……友達は、私を幸せへ導く人です。昔の私は、それで追いつきたかった……でも追えば追うほど、友達は速くなって……',
      );
      era.println();
      await coffee.print_and_wait(
        'もうひとりのカフェ「昔のあなた……今のあなたは、もう追いついたのですか？」',
      );
      era.println();
      await coffee.say_and_wait('いいえ……もう、導いてもらう必要はありません……');
      era.println();
      await coffee.print_and_wait([
        '夢の世界で、光が少しずつ暗くなる。夢が、醒めるのだろうか。',
      ]);
      era.println();
      await coffee.print_and_wait([
        'もうひとりのカフェ「……ここでお別れのようです。さようなら、こちらの ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '。」',
      ]);
      era.println();
      await coffee.say_and_wait([
        'あなたも、お元気で。あちらの ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '……',
      ]);
      era.drawLine();
      era.printButton('目覚めたか、カフェ。夢を見ていたみたいだぞ？', 1);
      await era.input();
      era.println();
      await coffee.print_and_wait([
        '再び目を開けると、',
        coffee.get_colored_name(),
        ' の眼前にあるのは、いちばん見慣れた顔……いつも傍にいて、幸せを表す顔だった。',
      ]);
      await coffee.print_and_wait([
        '——そうだ……',
        callname,
        ' の徹夜に付き合って疲れて、眠ってしまったのだった。',
      ]);
      era.println();
      await coffee.say_and_wait([
        'はい……面白い夢でした……時間があれば、',
        callname,
        ' に話します……',
      ]);
      era.println();
      await coffee.print_and_wait(
        '——楽園は探しません。だって……私は、もういちばん幸せな場所にいるから。',
      );
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '雨とコーヒー';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (coffee, you) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の趾の爪は、最後まで根治しなかった。あるトレーニング中の事故のあと、校側は ',
        coffee.get_colored_name(),
        ' の健康を理由に引退を決めた……だが、そうは思わない者もいた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' に渡すコーヒー豆を提げ、ひとり大雨の道を歩いていた。後ろから急な足音がし、それから腰に抉るような痛みが走った。',
        you.get_colored_name(),
        ' は押し倒され、後ろの人物は動かなくなるまで背を刺し続けた。',
      ]);
      await era.printAndWait([
        '紙袋のコーヒー豆が地面に散り、',
        you.get_colored_name(),
        ' は、あるはずのないコーヒーの香りを嗅いだ……',
      ]);
      await era.printAndWait([
        '死んだあと、また ',
        coffee.get_colored_name(),
        ' に会えるだろうか。',
        coffee.sex,
        'なら、もしかしたら……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の意識は、闇へ沈んだ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
