/**
 * @file ハルウララ - 日常
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { lust_border } = require('#/data/ero/orgasm-const');

module.exports = {
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
   * @param {PrintedSpan} call_11 ハルウララのグラスワンダーへの呼び方
   * @param {PrintedSpan} call_14 ハルウララのエルコンドルパサーへの呼び方
   * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
   * @param {PrintedSpan} call_19 ハルウララのアグネスデジタルへの呼び方
   * @param {PrintedSpan} call_20 ハルウララのセイウンスカイへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   * @param {PrintedSpan} call_33 ハルウララのアドマイヤベガへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのゼンノロブロイへの呼び方
   * @param {PrintedSpan} call_58 ハルウララのメイショウドトウへの呼び方
   * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
   * @param {PrintedSpan} call_77 ハルウララのナリタトップロードへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   */
  good_morning(
    urara,
    you,
    callname,
    self_call,
    call_1,
    call_11,
    call_14,
    call_15,
    call_19,
    call_20,
    call_30,
    call_33,
    call_47,
    call_58,
    call_61,
    call_77,
    high_relation,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    if (high_relation) {
      buffer.push(
        () => {
          urara.say(`${callname}！今日はなにする？`);
          era.print([
            urara.get_colored_name(),
            ' が元気いっぱいに、',
            you.get_colored_name(),
            ' へ今日の予定を聞く。',
          ]);
        },
        () => {
          urara.say(
            `畑のおじいちゃんがまたにんじん送ってくれたよ。あとで一緒にみんなに分けよう！ これは ${callname} のぶん！`,
          );
          era.print([
            'たくさん抱えた ',
            urara.get_colored_name(),
            ' が、嬉しそうに紙袋いっぱいのにんじんを ',
            you.get_colored_name(),
            ' の腕に押し込む。',
          ]);
        },
        () => {
          urara.say(
            `${callname} との約束、ちゃんと守るからね！ 一緒に、いっぱい1着取ろうね！`,
          );
          era.print([
            'いつものように、',
            urara.get_colored_name(),
            ' が ',
            you.get_colored_name(),
            ' へ興奮して話す。',
          ]);
        },
        () => {
          urara.say(
            `${callname}、${callname}！ 雑誌見た？ みんな、ウララのこと『勇気をくれる${urara.uma_sex_title}』って言ってたよ！ えへへ～`,
          );
          era.print([
            urara.get_colored_name(),
            ' がその意味をわかっているかは不明だが、',
            urara.sex,
            'の笑顔には少し照れがある。',
          ]);
        },
        () => {
          urara.say([
            '昨日、',
            call_1,
            ' と ',
            call_20,
            ' ',
            urara.couple_title,
            'でラーメン食べに行ったよ。量はちゃんと気をつけたよ？ ……でも、やっぱり食べすぎちゃった！',
          ]);
          era.print([
            urara.get_colored_name(),
            ' が笑いながら ',
            you.get_colored_name(),
            ' の前に来る。少なくとも、少しふっくらしたお腹を見る限り、',
            urara.sex,
            'は本当に楽しそうだ。',
          ]);
        },
        () => {
          urara.say([
            'あ、',
            call_14,
            '、また ',
            call_11,
            ' に包丁持って追われてる！ みんな、今日も元気だね！',
          ]);
          era.print([
            '聞くだけでも危ない話だが、',
            urara.get_colored_name(),
            ' が緊張していないなら、大丈夫なのだろう？',
          ]);
        },
        () => {
          urara.say([
            '今日の ',
            call_15,
            ' も屋上でなにか練習してたよ。楽しそう！ まあ',
            urara.sex,
            '、いつもああいう感じだけど！',
          ]);
          era.print([
            urara.get_colored_name(),
            ' は話しながら ',
            you.get_colored_name(),
            ' にテイエムオペラオーの真似をする。あまり似ていないが、意外とかわいい。',
          ]);
        },
        () => {
          urara.say([
            '昨日 ',
            call_58,
            ' が寮に戻ったら、ベッドの上にたぬきさんがいたよ！ たぬきさん、ほんとカワイイね！',
          ]);
          era.print([
            'たぬき？ 学生寮にたぬき？ ',
            urara.get_colored_name(),
            ' が嘘をつかないのはわかっているので、',
            you.get_colored_name(),
            ' は余計に首を傾げる。',
          ]);
        },
        () => {
          urara.say([
            call_77,
            ' と ',
            call_33,
            '、フワフワの話してたみたい！ でも途中から ',
            call_33,
            ' が布団乾燥機の売り込み始めちゃって！ なんでだろう？',
          ]);
          era.print([
            '最後まで聞いて、',
            urara.get_colored_name(),
            ' まで珍しく困惑している。そう、なぜだろう。',
          ]);
        },
      );
      if (love > 0) {
        buffer.push(
          () => {
            urara.say(
              `最近、おいしいものあったら最初に分けるの、いつも ${callname} だよ！ うん！ ${callname} とウララ、仲良しだからだよね！`,
            );
            era.print([
              urara.get_colored_name(),
              ' は手元のお菓子を ',
              you.get_colored_name(),
              ' と分けながら、嬉しそうに笑う。',
            ]);
          },
          () => {
            urara.say(
              `${callname} がいてくれたら、もっと速く走れる気がする！ 走るのも、前より楽しいよ！`,
            );
            era.print([
              '気づいたら、跳ねる ',
              urara.get_colored_name(),
              ' が ',
              you.get_colored_name(),
              ' にもっと近づいている。',
            ]);
          },
          () => {
            urara.say([
              call_61,
              '、今日も ',
              callname,
              ' の言うこと聞きなさいって、お母さんみたい！ でも ',
              self_call,
              '、もう子供じゃないよ！ ',
              call_61,
              ' だって、いつもおっちょこちょいなのに……あ、',
              call_61,
              ' には言わないでね、',
              callname,
              '！',
            ]);
            era.print([
              urara.get_colored_name(),
              ' は今日も',
              urara.sex,
              'のルームメイトと仲が良さそうだ。だが反撃のために友達の悪口は言ってはいけない。',
            ]);
          },
          () => {
            urara.say(
              `みんな、ウララの走りは希望をくれるって言うんだ！ ${self_call}、ちゃんと ${callname} を笑顔にできてる？`,
            );
            era.print([
              'いつもより少し大人びた笑顔を見せ、',
              urara.get_colored_name(),
              ' はちゃんと成長しているらしい。',
            ]);
          },
        );
      }
      if (love >= 25) {
        buffer.push(
          () => {
            urara.say(
              `お母さんね、信じ合ってる人だけ、身だしなみを任せられるんだって！ ${self_call} の髪、乱れてる？ じゃあ ${callname}、梳かしてくれる？`,
            );
            era.print([
              you.get_colored_name(),
              ' の返事を待たず、',
              urara.get_colored_name(),
              ' はもう笑いながらリボンをほどき、',
              you.get_colored_name(),
              ' の前でピンクのポニーテールをほどく',
            ]);
          },
          () => {
            urara.say([
              call_30,
              ' に借りた絵本に、恋ってすっごく素敵で、果物みたいに酸っぱくて甘いって書いてあったよ！ ',
              self_call,
              ' も、いっぱい考えてるよ！ でも……今はまだ、',
              callname,
              ' にもっと教えられないや！',
            ]);
            era.print([
              '気づいたら、いつまでも大きくならない小さな',
              urara.uma_sex_title,
              'に、恋する少女の気配が混ざり始めている。',
            ]);
          },
          () => {
            urara.say(
              `${callname}、もっと近づいてもいいよ？ わっ！ えへへ、また ${callname} の膝に座っちゃった！ ${callname} の体、あたたかいね！`,
            );
            era.print([
              urara.get_colored_name(),
              ' が嬉しそうに言う。一瞬、潤んだ色が顔をよぎった気がする。',
            ]);
          },
          () => {
            urara.say(
              `みんな、大人になれって言うけど、${self_call} も子供扱いされたくないよ！ え？ 大人になる理由……あっ、あそこににんじん！`,
            );
            era.print([
              '何かを隠すように、',
              you.get_colored_name(),
              ' の問いを受けた ',
              urara.get_colored_name(),
              ' は突然顔を赤らめ、慌てて言い訳して走り去る。',
            ]);
          },
        );
      }
      if (love >= 50) {
        buffer.push(
          () => {
            urara.say(
              `${callname} の匂い、いいにおい！ はぁ……あっ！ ごめんね！ ${callname} を困らせちゃだめだよね。でも、ん……`,
            );
            era.print([
              '離そうとはするものの、',
              urara.get_colored_name(),
              ' は抑えきれず、顔を赤らめたまま勝手に ',
              you.get_colored_name(),
              ' の匂いを嗅いでいる。',
            ]);
          },
          () => {
            urara.say([
              `『雑魚～雑魚～』、これ `,
              call_19,
              ` のメモ帳で習ったんだ。${callname} が嬉しくなるって！ え？ もう言わないで？ じゃあ ${self_call}、言わない！ でも ${callname}……まだ ${self_call} のこと、見ててね？`,
            ]);
            era.print([
              you.get_colored_name(),
              ' の戸惑いを眺めながら、',
              urara.get_colored_name(),
              ' の澄んだ笑顔に、いつの間にか忍び笑いのような愉悦が混ざる。',
            ]);
          },
          () => {
            urara.say([
              `昨日の夜、`,
              call_61,
              ` がベッドで変な声出してたよ！ でもその声聞いてたら、${self_call} の頭の中、全部 ${callname} で……なんで？ ${self_call}、よくわかんない。でもそのあと……？ そのあと……${self_call}、寝ちゃった！`,
            ]);
            era.print([
              '最近の話を最後まで言えず、',
              urara.get_colored_name(),
              ' は真っ赤な顔で視線を逸らす。',
            ]);
          },
          () => {
            urara.say(
              `あは～ ${callname} の『足のあいだ』は ${self_call} の『指定席』、約束でしょ？ 誤解されること言わないで？ 誤解じゃないよ！ それとも……${callname}、またなに考えてるの？`,
            );
            era.print([
              '無垢な口調で ',
              you.get_colored_name(),
              ' に誘惑の囁きを吐き、',
              urara.get_colored_name(),
              ' のかわいい顔まで『色気』を帯びて見える……',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `この新しい味のはちみつ特飲、おいしいよ？ ${callname} も飲んでみて！ 間接キス……？ ${self_call} は平気だよ？ もしかして……${callname}、はずかしいの？`,
            );
            era.print([
              '小さな',
              urara.uma_sex_title,
              'が ',
              you.get_colored_name(),
              ' に笑いながら目を細める。手の中の甘すぎる飲み物にも、もっと別の意味が乗っているらしい。',
            ]);
          },
          () => {
            urara.say(
              `最近またお料理おぼえたよ！ これから ${callname} のお腹、いっぱいにできるように、${self_call} がんばるね！ そんなこと言わないで？ じゃあ ${callname} も、${self_call} の体をいっぱいにしたいの？ 大人をからかうなって？ わかったよ……`,
            );
            era.print([
              you.get_colored_name(),
              ' の注意を聞いて、',
              urara.get_colored_name(),
              ' はやっと、言い終わる前から真っ赤だった顔を逸らす。',
            ]);
          },
          () => {
            urara.say(
              `商店街のみんな、また ${self_call} がきれいになったって！ ${self_call} が速くなったから？ ん？ それだけじゃない？ 実はわかってるよ！ ${callname} が ${self_call} の体を見る目、前より夢中なのも……冗談だよ！`,
            );
            era.print([
              'そっと裾をめくって柔らかい体を見せ、',
              urara.get_colored_name(),
              ' の純粋な笑顔に ',
              you.get_colored_name(),
              ' は焦って目が回りそうになる。',
            ]);
          },
          () => {
            urara.say(
              `最近 ${self_call}、いっぱい考えたよ？ うん！ みんなに、もっと勝つところ見せたい！ 無理しないで？ わかってるよ！ だから『1着』のなかには、${callname} にだけ見せるのもあるんだ……えへへ～`,
            );
            era.print([
              urara.get_colored_name(),
              ' の笑顔は相変わらず無邪気だ。だが ',
              callname,
              ' にだけ見せる1着とは……？',
            ]);
          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `今日もちゃんと見ててね。ウララ、${callname} に勇気、届け続けるから！ ……それにこのあと、ふたりだけのときは、${callname} もがんばってね？`,
            );
            era.print([
              'つま先立ちで、',
              urara.get_colored_name(),
              ' が優しく ',
              you.get_colored_name(),
              ' の頬を撫でる。同時に、',
              you.get_colored_name(),
              ' を不安にさせる言い方も残した。',
            ]);
          },
          () => {
            urara.say(
              `これから先、${callname} は子供、何人ほしい？ 何人でも ${self_call}、受け入れるよ！`,
            );
            era.print([
              '前後の噛み合わない話をしながら、',
              urara.get_colored_name(),
              ' の熱い視線に ',
              you.get_colored_name(),
              ' は落ち着かない。',
            ]);
          },
          () => {
            urara.say(
              `独占は愛の全部じゃないって言いながら、みんな互いをじっと見てるよね……${callname} はどう思う？ ${self_call} も独占はよくないと思うよ。でも ${self_call}、不安にもなるんだよ？`,
            );
            era.print([
              you.get_colored_name(),
              ' の袖をきつく掴み、小さな',
              urara.uma_sex_title,
              'の笑顔は少し寂しそうで、もっと近くにいてほしいらしい。',
            ]);
          },
          () => {
            urara.say(
              `ねえねえ、${callname}！ 気持ちよくて楽しいこと、今日も一緒にしない？ 声大きい？ でもウララが言ったの、一緒にトレーニングだよ？ もしかして ${callname}、${self_call} に……？`,
            );
            era.print([
              you.get_colored_name(),
              ' の反応を眺め、',
              urara.get_colored_name(),
              ' のまだ幼い笑顔に、羞恥の赤みが少し乗る。',
            ]);
          },
        );
      }
      if (love >= 100) {
        buffer.push(
          () => {
            urara.say(
              `走りにも行きたいし、お出かけもしたい。でも一番は、${callname} が一緒にいてくれること！ ${callname}、勝手にいなくならないで。誰が来てもだめだよ！ 誰が来ても、だめ……`,
            );
            era.print([
              '気分の上がった ',
              urara.get_colored_name(),
              ' が、珍しく自分から ',
              you.get_colored_name(),
              ' に甘える。だが、空気が少し危なくなった気がする……？',
            ]);
          },
          () => {
            urara.say(
              `${callname} と離れても、また会えるなら、前が地獄でも追いかけるよ……あは～ これ、${self_call} がテレビで習ったやつ！ ${self_call} の演技、どう？ びっくりした、${callname}？`,
            );
            era.print([
              '演技だと言いながら、',
              urara.get_colored_name(),
              ' の目は真剣そのものだ。',
            ]);
          },
          () => {
            urara.say(
              `${callname}、${self_call} のこと想った？ 昼のほうが想う？ 夜のほうが想う？ ふんふん～ ${callname} が怒ってもやめないよ。今のウララは、悪い ${self_call} だよ！`,
            );
            era.print([
              '後ろから ',
              you.get_colored_name(),
              ' の腰を抱き、',
              urara.get_colored_name(),
              ' が甘い声で ',
              you.get_colored_name(),
              ' の神経をくすぐる……',
            ]);
          },
          () => {
            urara.say(
              `${self_call} は天使……？ まだよくわかんないけど、${self_call} もずっと ${callname} の天使でいたいな！ だから ${callname} がまた疲れたら、いつでも ${self_call} に頼っていいよ？`,
            );
            era.print([
              you.get_colored_name(),
              ' が何気なく漏らした感慨を聞き、小さな担当は妻のようでも母のようでもある仕草で、',
              you.get_colored_name(),
              ' の手を取る。',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        () => {
          urara.say(`……${callname}！ 今日のトレーニング……がんばろうね！`);
          era.print([
            'ただの朝の挨拶なのに、',
            urara.get_colored_name(),
            ' は笑うたびに、勇気を振り絞っているみたいだ。',
          ]);
        },
        () => {
          urara.say(
            `今日も大丈夫！ ${self_call}、${callname} との約束、ちゃんと守るよ！`,
          );
          era.print([
            '気を張り、',
            urara.get_colored_name(),
            ' が真剣に顔を上げて ',
            you.get_colored_name(),
            ' の目を見る。',
          ]);
        },
        () => {
          urara.say(`${callname}、あの、にんじん！ これ、${callname} のぶん！`);
          era.print([
            '少し怯えた様子でも、',
            urara.get_colored_name(),
            ' は笑って手元のにんじんを ',
            you.get_colored_name(),
            ' に押しつける。',
          ]);
        },
        () => {
          urara.say(
            `勇気……だよね！ ${self_call}、もっと勇気出さなきゃ！ でも、ほんと難しいよ……`,
          );
          era.print([
            '今日の雑誌を眺め、',
            urara.get_colored_name(),
            ' の笑顔が、なぜか少し寂しい。',
          ]);
        },
        () => {
          urara.say(
            `最近みんなとお出かけしたら、また食べすぎちゃった……ごめんね。${self_call}、次は気をつけるから！`,
          );
          era.print([
            '無理な笑顔を見せ、',
            you.get_colored_name(),
            ' の前の ',
            urara.get_colored_name(),
            ' は少し自信がなさそうだ。',
          ]);
        },
        () => {
          urara.say(
            `補習のとき、またみんなに助けてもらったよ。そうだよね！ ${self_call} もみんなみたいに頭よかったら……`,
          );
          era.print([
            you.get_colored_name(),
            ' の隣に立ち、',
            urara.get_colored_name(),
            ' は何かを思い出して、元気が足りない。',
          ]);
        },
      );
      if (love > 0) {
        buffer.push(
          () => {
            urara.say(
              `${callname}、これおいしいよ！ もう最後のちょっとしか残ってないけど……`,
            );
            era.print([
              '最後のおやつを全部 ',
              you.get_colored_name(),
              ' に分けて、',
              urara.get_colored_name(),
              ' はトレーナーのことを忘れかけたのが、少し恥ずかしいらしい。',
            ]);
          },
          () => {
            urara.say(
              `${callname} と一緒だと、${self_call}、ほんと速くなったよ！ なのに、どうしてそんなに嬉しくならないんだろ……`,
            );
            era.print([
              '自分の成長は嬉しいはずなのに、',
              urara.get_colored_name(),
              ' の笑顔はどこか無理をしている。',
            ]);
          },
          () => {
            urara.say(
              `${callname}、見てなくてもいいよ、${self_call} ひとりでもできる——なんて、言わないよ！ ${self_call}、${callname} に勇気をあげるって約束したから。だから ${callname} も、逃げちゃだめだよ？`,
            );
            era.print([
              '桜色の瞳で大人の目をまっすぐ見て、',
              urara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' に、断りようのない願いを出す。',
            ]);
          },
        );
      }
      if (love >= 25) {
        buffer.push(
          () => {
            urara.say(
              `髪、乱れてる？ やばい……えっ？ 手伝ってくれるの？ じゃあ……${callname}、ちょっと優しくしてね？`,
            );
            era.print([
              you.get_colored_name(),
              ' の申し出に、',
              urara.get_colored_name(),
              ' はリボンとヘアバンドを慎重にほどき、緊張しつつも背中を向ける。',
            ]);
          },
          () => {
            urara.say(
              `${self_call}、ずっと子供のままじゃいやなのに、大人の ${callname} がまたこういう顔してる。大人になるのって、走るのとかレースみたいに難しいね……`,
            );
            era.print([
              urara.get_colored_name(),
              ' は何かつぶやいているみたいだけど、',
              you.get_colored_name(),
              ' が',
              urara.sex,
              'を見ると、また視線をそらした。',
            ]);
          },
          () => {
            urara.say([
              call_47,
              ' の本にね、恋は悩みと一緒に来るって書いてあったよ。ずっと苦しくなるんだって……最近の ',
              self_call,
              ' も悩んでる。自分が本当に気にしてるのか、よくわかんない……',
            ]);
            era.print([
              'いつまでも大きくならない小さな ',
              urara.get_colored_name(),
              ' が、いまは恋に悩む少女みたいにひとりごとを言っている。',
            ]);
          },
        );
      }
      if (love >= 50) {
        buffer.push(
          () => {
            urara.say(
              `${callname}、今日の匂い……ん？ ${self_call}、わざとじゃないよ？`,
            );
            era.print([
              'ぼんやりと ',
              you.get_colored_name(),
              ' の服にすり寄り、小さな担当は少し投げやりに ',
              you.get_colored_name(),
              ' へ謝る。',
            ]);
          },
          () => {
            urara.say(
              `最近 ${callname} を見ると体がほてって、夜に ${callname} のこと考えると、下が……ごめん、${self_call}、もう言わない。でも……やっぱり、なんでもないよね……？`,
            );
            era.print([
              'しばらくもじもじしたあと、真っ赤になった ',
              urara.get_colored_name(),
              ' は、最後まで言い切れなかった。',
            ]);
          },
          () => {
            urara.say(
              `『意気地なしの雑魚さん、生徒を騙すニセモノの優しさ、嫌い、最低……』やめて？ でも ${callname} も興奮してるでしょ？ 『${self_call} にすら騙せない変態トレーナー』……`,
            );
            era.print([
              you.get_colored_name(),
              ' の耳元で思う存分『いたずら』をして、',
              urara.get_colored_name(),
              ' の興奮した顔には、隠しきれない侮蔑と情欲が混ざる。',
            ]);
          },
        );
      }
      if (love >= 75) {
        buffer.push(
          () => {
            urara.say(
              `${self_call}、ずっと料理の練習してるよ？ でも ${callname} は普段……好きな人からもらったお弁当、困らないよね。そうだよね。${self_call} はもっと先のこと考えてるから、お腹空いたら ${self_call} に頼ってみていいよ？`,
            );
            era.print([
              you.get_colored_name(),
              ' に自分のことを話しながら、',
              urara.get_colored_name(),
              ' の笑顔は少し諦めのようで、少し楽になったようでもある。',
            ]);
          },
          () => {
            urara.say(
              `またみんな、${self_call} が綺麗になったって言うんだ。${self_call}、本当に綺麗になった？ でも知ってるよ、${callname} が ${self_call} をめちゃくちゃにしたってこと……冗談じゃないよ？`,
            );
            era.print([
              'ふたりきりのとき、隠さず ',
              you.get_colored_name(),
              ' に体を寄せて見せて、',
              urara.get_colored_name(),
              ' の純粋だった笑顔が、少し濁っていく。',
            ]);
          },
          () => {
            urara.say(
              `気持ちいいこと、${self_call} も ${callname} としたいよ。でも毎日のトレーニングも大事だよ？ それに次、一着取れたら ${callname} ももっと喜ぶでしょ。そのとき……`,
            );
            era.print([
              '口では気が進まないみたいなのに、小さな',
              urara.uma_sex_title,
              'の頬は赤くなっている。そのときは、何を言うつもりなんだろう？',
            ]);
          },
        );
      }
      if (love >= 90) {
        buffer.push(
          () => {
            urara.say(
              `${self_call}、ここに座っていい？ ありがとう！ じゃあ……いまの ${callname}、何考えてるの？`,
            );
            era.print([
              '素直に ',
              you.get_colored_name(),
              ' の太ももへ座ると、',
              urara.get_colored_name(),
              ' は意外なほど甘えて、安心して ',
              you.get_colored_name(),
              ' の体に密着する。',
            ]);
          },
          () => {
            urara.say(
              `みんな、${self_call} の走りは笑顔をくれるって言うんだ。いまの ${callname}、出会ったときの希望、ちゃんと見つけられてる？`,
            );
            era.print([
              '以前より大人びすぎた微笑みを浮かべて、',
              urara.get_colored_name(),
              ' は期待するような顔で ',
              you.get_colored_name(),
              ' のそばに寄りかかる。',
            ]);
          },
          () => {
            urara.say(
              `将来の家族とか、子供たち……${self_call}、そういうの期待しちゃだめなのかな？ だって ${callname} も……`,
            );
            era.print([
              '前後の噛み合わない話をしながら、小さな',
              urara.uma_sex_title,
              'の顔が、少し憂いを帯びたように見える。',
            ]);
          },
        );
      }
      if (love >= 100) {
        buffer.push(
          () => {
            urara.say(
              `担当として出会わなくてもいい。こうしてる ${callname} を信じたいよ。わたしたちのあいだは、まだ……テレビの台詞だけど、${self_call}、演じてないよ、${callname} はどう思う？`,
            );
            era.print([
              '芝居でも嘘でもなく、',
              urara.get_colored_name(),
              ' の笑顔には、ひとりへの愛情しかない。',
            ]);
          },
          () => {
            urara.say(
              `最初はみんなを笑顔にしたくて走ってたのに、いまはひとりのためでも悪くないって思う……でも ${callname} がまた疲れたら、${self_call}、${callname} ひとりの天使になってもいいよ？`,
            );
            era.print([
              '妻のように ',
              you.get_colored_name(),
              ' の腕を取り、小さな担当はまた、うっかりひとりだけのための感慨をこぼす。',
            ]);
          },
          () => {
            urara.say(
              `${self_call}、${callname} を独占したいよ？ ${callname} の心が ${self_call} だけのものじゃないって知ってても、同じ。今日も同じ。だから ${callname} が拒んでも、${self_call} は諦めないよ？`,
            );
            era.print([
              '眩しい笑顔で、見る者を混乱させる独占欲を見せるのに、',
              urara.get_colored_name(),
              ' の桜色の瞳には、笑意が一点もない。',
            ]);
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {boolean} awake ウララが起きているか
   */
  select(urara, you, callname, self_call, high_relation, awake) {
    const buffer = [];
    const love = era.get('love:52');
    if (awake) {
      if (era.get('base:52:体力') < 0.4 * era.get('maxbase:52:体力')) {
        buffer.push(() => {
          urara.say(`うあー……${callname}、${self_call}……もう動けない……`);
          era.print([
            '地面に寝そべり、',
            urara.get_colored_name(),
            ' はほとんど動けない。',
          ]);
        });
        if (love > 0) {
          buffer.push(() => {
            urara.say('体力、体力が飛んでっちゃった……だめ……');
            era.print([
              'うつ伏せの ',
              urara.get_colored_name(),
              ' が、ふらふらと大きく息をつく。',
            ]);
          });
        }
        if (love >= 25) {
          buffer.push(() => {
            urara.say('負けない……負けない……');
            era.print([
              urara.get_colored_name(),
              ' は何度か体を起こそうとして、それでも失敗する。',
            ]);
          });
        }
        if (love >= 50) {
          buffer.push(() => {
            urara.say(`ト、トレーナー……もう一回引っ張って……`);
            era.print([
              '地面に座り込んだ ',
              urara.get_colored_name(),
              ' は顔を少し赤くして、',
              you.get_colored_name(),
              ' に手を伸ばして助けを求める。',
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(`ちょっとだけ休ませて……ちょっとだけでいいからね！はぁ……`);
            era.print([
              '地面に座り込むほど疲れているのに、',
              urara.get_colored_name(),
              ' はそれでも立ち上がろうとする。',
            ]);
          });
        }
        if (love >= 90) {
          buffer.push(() => {
            urara.say(`わ、わたし、まだいけるよ……`);
            era.print([
              '耳をピンと立て、',
              you.get_colored_name(),
              ' の体を支えにして、',
              urara.get_colored_name(),
              ' は倒れないように必死に踏ん張っている。',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `ふう……ふう……大丈夫！${callname} がいてくれれば、まだ頑張れる……`,
            );
            era.print([
              '立っているのもやっとなのに、',
              urara.get_colored_name(),
              ' はそれでも体を支えている。',
            ]);
          });
        }
      } else if (high_relation) {
        buffer.push(
          () => {
            urara.say(
              '先に家を出たのに、なんでみんなウララより先に着いてるの？ふしぎだね！',
            );
            era.print([
              '遅刻したのに、',
              urara.get_colored_name(),
              ' はそれでも楽しそうだ。',
            ]);
          },
          () => {
            urara.say(
              `${callname}！今日はちょうど間に合ったよ！前より速く走れたかも！`,
            );
            era.print([
              'ぎりぎり間に合っただけなのに、',
              urara.get_colored_name(),
              ' はとても満足そうだ。',
            ]);
          },
          () => {
            urara.say(
              `こっちだよ ${callname}！早く来て！今日も ${callname} に話したいこと、いっぱいあるんだから！`,
            );
            era.print([
              '',
              you.name,
              ' と一緒に駆けつけた ',
              urara.get_colored_name(),
              ' は笑いながら ',
              you.name,
              ' に手を振る。',
            ]);
          },
        );
        if (love >= 50) {
          buffer.push(() => {
            urara.say(
              `${callname}……うっ……え？${callname}？！き、今日も一緒に頑張ろうね！`,
            );
            era.print([
              urara.get_colored_name(),
              ' はこそこそ何かしていたらしく、',
              you.get_colored_name(),
              ` が${urara.sex}の後ろに来て、ようやく顔を赤くして気づいた。`,
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(
              `${callname} に会えてよかった！このままずっと続いたらいいのに……あ！${callname}！今日は何するの？`,
            );
            era.print([
              'いつもより早く来た ',
              urara.get_colored_name(),
              ' は嬉しそうに ',
              you.get_colored_name(),
              ' のそばへ寄る。',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `${callname} に早く会いたくて、今日も早起きしたよ！${self_call} を見て、${callname} は幸せって思う？`,
            );
            era.print([
              '長いこと待っていた ',
              urara.get_colored_name(),
              ' はしっぽを振り、幸せそうな笑顔を浮かべている。',
            ]);
          });
        }
      } else {
        buffer.push(
          () => {
            urara.say(
              `ごめんね ${callname}、今日も ${self_call}、遅れちゃった……`,
            );
            era.print([
              '遅刻で怒るつもりはなかったのに、',
              urara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の前で耳を縮こませる。',
            ]);
          },
          () => {
            urara.say(`間に合ったよ！あ、${callname}、おはよう……`);
            era.print([
              '息を切らして駆けてきた ',
              urara.get_colored_name(),
              ' は、',
              you.get_colored_name(),
              ' を見てなぜか少し下がる。',
            ]);
          },
        );
        if (love >= 50) {
          buffer.push(() => {
            urara.say(
              `${callname}！${self_call}、ちょっと……だめ、${callname} に迷惑かけちゃだめ！えっ……本当になんでもないよ？`,
            );
            era.print([
              '',
              you.get_colored_name(),
              ' に背を向けているとき、',
              urara.get_colored_name(),
              ` は何かしていたようだが、${urara.sex}はずっと認めない顔をしている。`,
            ]);
          });
        }
        if (love >= 75) {
          buffer.push(() => {
            urara.say(
              `${self_call}、なんでだろう……あ、${callname} がもうすぐ来る、急いで準備しなきゃ……！`,
            );
            era.print([
              '早く来ていた ',
              urara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' を見て急いで立ち上がり、気合いを入れて ',
              you.get_colored_name(),
              ' に笑顔を見せる。',
            ]);
          });
        }
        if (love >= 100) {
          buffer.push(() => {
            urara.say(
              `${callname}！今日、その……${self_call} にもっと優しくしてくれる？ちょっとだけでいいから！`,
            );
            era.print([
              'まだ少し縮こまってはいるけれど、',
              you.get_colored_name(),
              ' の後ろをついていく ',
              urara.get_colored_name(),
              ' は笑いながら ',
              you.get_colored_name(),
              ' の服の端を掴んでいる。',
            ]);
          });
        }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P') ||
      era.get('base:52:性欲') >= lust_border.absent_mind
    ) {
      buffer.push(() => {
        urara.say('……うっん、あ……');
        era.print([
          '体は落ち着かないのに起きられず、',
          urara.get_colored_name(),
          ' は眠ったまま顔を赤くして甘い声を漏らす。',
        ]);
      });
    } else {
      buffer.push(
        () => {
          urara.say('えへへ……にんじん……');
          era.print([
            '小さな寝言を言いながら、',
            urara.get_colored_name(),
            ' はそっと寝返りを打つ。',
          ]);
        },
        () => {
          urara.say('……');
          era.print([
            '小さな寝息だけを立てて、今日熟睡している ',
            urara.get_colored_name(),
            ' は意外なほど静かだ。',
          ]);
        },
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
   */
  async office_study(urara, you, callname, call_61) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          'うー……この算数、まだわからない！',
          callname,
          '、もう一回教えてくれる？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は困った顔で頭を抱えて机にうつ伏せになり、勉強する気力がほとんど残っていない。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '実はね、得意な科目もあるんだよ！',
          call_61,
          ' も、他の科目もこうだったらいいのにって言ってたよ！',
        ]);
        await era.printAndWait([
          '得意げな ',
          urara.get_colored_name(),
          ' だが、それは褒め言葉ではなさそうだ。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '英語……単語は覚えたけど、文法がむずかしい……',
          callname,
          '、もうちょっと手伝って——',
        ]);
        await era.printAndWait([
          '英語の宿題に降参した ',
          urara.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' も仕方なく',
          urara.sex,
          'と教科書を復習し直す。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '近い……',
          callname,
          ' がすぐそばに……あ！ごめん！集中しなきゃ……うぅ……',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の両脚のあいだに割り込んだ ',
          urara.get_colored_name(),
          ' はまだそわそわしていて、今日の補習も変な方向に傾き始めている……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '勉強が大事なのはわかってるけど、やっぱり走るほうが楽しい！でも ',
          callname,
          ' がいてくれたら、むずかしい問題も頭に入るよ！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' のそばに寄りかかった ',
          urara.get_colored_name(),
          ' は、いつもより勉強する気が出ているようだ。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '！今度いい点取れたら！……特別なご褒美、もらってもいい？',
        ]);
        await era.printAndWait([
          '引き受けてもいいのだが、',
          urara.get_colored_name(),
          ' の赤らんだ顔と虚ろな目を見て、',
          you.get_colored_name(),
          ' はこの爆弾を受け取るべきか迷い始める。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_prepare(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          'うんうん！そのときはいつもみたいに『ウララ～』って飛び出せばいいんだよね！',
        );
        await era.printAndWait(
          '首をかしげてホワイトボードの注意事項を見ているが、小さな担当の理解は相変わらず「一直線」だ。',
        );
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！蹄鉄、ウララも打つの手伝うよ！うん！手は叩かないから！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' が心配そうに見守るなか、',
          urara.get_colored_name(),
          ' は危うくも蹄鉄を打ち終えた。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          'え？今度はこうやって走るの……こう走ったら1着、取れるんだよね！わかった！',
        );
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' の',
          urara.sex,
          'の戦術の実行にはいつも穴があるが、',
          you.get_colored_name(),
          ' は今回の',
          urara.sex,
          'なら大丈夫かもしれないと思う。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'そっか……じゃあ次も勝ったら、',
          callname,
          ' はウララと……な、なんでもない！',
        ]);
        await era.printAndWait([
          '危うく過激な欲望を漏らしかけたことに気づいたのか、',
          urara.get_colored_name(),
          ' は慌てて視線をそらす。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '『負けてもいいウララ』なんかじゃない！レースはむずかしいかもしれないけど、',
          callname,
          ' のために、もう負けたくない！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は真剣に準備をしながら、めずらしく闘志をにじませている。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'わかってる！どんなレースでも、',
          callname,
          ' の視線がウララだけに止まるようにするから！',
        ]);
        await urara.say_and_wait([
          'だから、もっとウララに夢中になってくれる？',
          callname,
          '？',
        ]);
        await era.printAndWait([
          'ピンクの小さなウマ娘には似合わない凄みを漂わせ、',
          you.get_colored_name(),
          ' に密着した ',
          urara.get_colored_name(),
          ' の桜色の瞳が、真っ赤に染まっていくようだ。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} awake ウララが起きているか
   */
  async talk(urara, you, callname, awake) {
    const buffer = [];
    const love = era.get('love:52');
    if (awake) {
      switch (era.get('cflag:52:干劲')) {
        case 2:
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '！今日のウララ、すっごくすごいよ！感じるんだ！',
              ]),
            () =>
              urara.say_and_wait(
                'いまのウララはスーパーウララだよ！調子がすっごくいいからね！',
              ),
            () =>
              urara.say_and_wait(
                '毎日こんなに楽しかったら、レース絶対1着取れるよ！',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                'えへへ～',
                callname,
                ' がいてくれたら、なんでもできそう！',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                '見ててね ',
                callname,
                '！いまなら一日中走っても負けないよ！',
              ]),
            );
          }
          break;
        case 1:
          buffer.push(
            () =>
              urara.say_and_wait([
                '『ウララ～』って行くよ！',
                callname,
                ' も一緒に頑張ろうね！',
              ]),
            () =>
              urara.say_and_wait(
                'よーし！今日の予定もちゃんとやる！準備運動、はじめるよ！',
              ),
            () =>
              urara.say_and_wait('体が鳥みたいに軽いよ！いま何かやろうよ！'),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '',
                callname,
                ' と一緒なら、ウララは絶好調だよ！',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                '今日早く終わったら、',
                callname,
                ' と遊んでいい？',
              ]),
            );
          }
          break;
        case 0:
          buffer.push(
            () => urara.say_and_wait('頑張れば絶対できる！次は1着取るために！'),
            () =>
              urara.say_and_wait([
                '楽しい練習したいな、',
                callname,
                '、そういうのある──？',
              ]),
            () => urara.say_and_wait([callname, '！今日の予定、いま教えて！']),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait('終わったら、おいしいもの食べに行こうよ！'),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait('今日も見ててくれる？うん！わかってるよ！'),
            );
          }
          break;
        case -1:
          buffer.push(
            () =>
              urara.say_and_wait(
                'あう……でもトレーニングは大事だもん、大丈夫、頑張るから！',
              ),
            () =>
              urara.say_and_wait(
                'うん……ちょっと元気出ないけど、楽しいこと思い出すんだ……！',
              ),
            () =>
              urara.say_and_wait(
                'え？ウララ元気だよ！耳としっぽが垂れてるだけ……！',
              ),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                '',
                callname,
                ' が見ててくれるなら、大丈夫だよね……！',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait('元気出ないけど、わがまま言っちゃだめ……！'),
            );
          }
          break;
        case -2:
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '……今日……今日はお休みをトレーニングにしてもいい？',
              ]),
            () => urara.say_and_wait('楽しいはずなのに、楽しくならない……'),
            () => urara.say_and_wait('体が重いよ、力出ない……'),
          );
          if (love >= 75) {
            buffer.push(() =>
              urara.say_and_wait([
                callname,
                '、おやつ持ってきた？ちょっと糖分ほしい……',
              ]),
            );
          }
          if (love >= 100) {
            buffer.push(() =>
              urara.say_and_wait([
                callname,
                '、やる気、またどっか行っちゃったみたい、探してくれる……',
              ]),
            );
          }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P')
    ) {
      buffer.push(
        () =>
          era.printAndWait([
            '薬の影響で、眠っている ',
            urara.get_colored_name(),
            ' の吐息が、次第に甘く色っぽくなっていく。',
          ]),
        () =>
          era.printAndWait([
            '卑劣な薬に屈して意識を失った ',
            urara.teen_sex_title,
            ' は、いまは使われるのを待つ肉人形だ。',
          ]),
        () =>
          era.printAndWait([
            '手足は夢の中で抵抗するように身をよじっているのに、小さな',
            urara.uma_sex_title,
            'の股間はもう素直にぐしょぐしょに濡れている。',
          ]),
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            '小さな吐息とともに、小さな',
            urara.uma_sex_title,
            'は眠ったまま寝返りを打つ。',
          ]),
        () =>
          era.printAndWait([
            '',
            you.get_colored_name(),
            ' のそばに穏やかに寄りかかり、',
            urara.get_colored_name(),
            ' は安心して眠っている。',
          ]),
        () =>
          era.printAndWait([
            '眠っている ',
            urara.get_colored_name(),
            ' は嬉しそうな顔をしている。いい夢を見ているのだろうか？',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのヒシアマゾンへの呼び方
   */
  async office_gift(urara, you, callname, call_47) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          'ん？',
          callname,
          ' がプレゼントくれるの？ありがとう！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' はしっぽを振り、嬉しそうに ',
          you.get_colored_name(),
          ' の贈り物を受け取る。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          ' がプレゼントくれるなら、ちょうどウララもおいしいの、',
          callname,
          ' と分けたいんだ！えへへ～',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は笑いながらにんじんを、',
          you.get_colored_name(),
          ' の手の贈り物と交換する。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          'よーし！',
          callname,
          ' のプレゼントのお礼に、今日のウララもっと頑張る！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の贈り物を受け取ると、',
          urara.get_colored_name(),
          ' は一段と元気になった。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '',
          callname,
          ' のプレゼント、ありがとう！ウララもお返し用意しなきゃ！え？いいの？',
        ]);
        await era.printAndWait([
          '実は ',
          urara.get_colored_name(),
          ' はほとんどお返しを覚えていないが、',
          urara.sex,
          'の笑顔が見られれば、お返しなんてどうでもいい。',
        ]);
      },
    );
    if (love > 0) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            call_47,
            ' は、贈り物によって違う意味があるって……じゃあ ',
            callname,
            ' のプレゼントは……やっぱりウララにもっと速く走ってほしいからだよね！',
          ]);
          await era.printAndWait([
            '相変わらず ',
            urara.get_colored_name(),
            ' らしい答えだが、最後に',
            urara.sex,
            'は何か別のことを思い浮かべた気がする。',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '高いものじゃないって？高くても安くても、ウララ大事にするよ！これは ',
            callname,
            ' のプレゼントだもん！',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' は穏やかに笑って贈り物を受け取り、',
            urara.sex,
            'は以前より少し大人びた気がする。',
          ]);
        },
      );
    }
    if (love >= 50) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            'よくわからないけど、',
            callname,
            ' のプレゼントもらうと体がぽかぽかする！なんでだろう……',
          ]);
          await era.printAndWait([
            '贈り物の話をしているのに、顔を赤くした ',
            urara.get_colored_name(),
            ' は熱っぽく ',
            you.get_colored_name(),
            ' の目を見つめ続けている。',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            'ありがとう、',
            callname,
            '！でもこれって……この贈り物にも ',
            callname,
            ' の匂い、つくのかな……？',
          ]);
          await era.printAndWait([
            '手の中の贈り物を見つめ、',
            urara.get_colored_name(),
            ' からどこかおかしな気配が漂い始める。',
          ]);
        },
      );
    }
    if (love >= 75) {
      buffer.push(
        async () => {
          await urara.say_and_wait(
            '今日は特別な日？毎日が特別な日だったらいいのに！',
          );
          await urara.say_and_wait([
            '特別じゃなくてもいいよ！ウララにとっては ',
            callname,
            ' といる毎日が特別だもん！',
          ]);
          await era.printAndWait([
            '贈り物を抱えて ',
            you.get_colored_name(),
            ' にぴったり寄り添い、しっぽをそっと ',
            you.get_colored_name(),
            ' の脚に絡ませながら、小さな担当は嬉しそうに言う。',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            'プレゼント……',
            callname,
            ' がお返しいらないなら、じゃあ……先にウララの『これ』もらって！',
          ]);
          await era.printAndWait([
            '耳を立て、',
            urara.get_colored_name(),
            ' はつま先立ちで、',
            you.get_colored_name(),
            ' が気づかないうちに「ちゅっ」と ',
            you.get_colored_name(),
            ' の頬を襲って、恥ずかしそうに離れた。',
          ]);
        },
      );
    }
    if (love >= 100) {
      buffer.push(
        async () => {
          await urara.say_and_wait([
            '',
            callname,
            '、ありがとう！',
            callname,
            ' は次の1着がほしいの？それともいまのウララを抱きしめたくて？',
          ]);
          await urara.say_and_wait([
            'ウララ的には、',
            callname,
            ' どっちもおすすめだよ？',
          ]);
          await era.printAndWait([
            '無邪気な口調で神経をくすぐる言葉を言い、',
            urara.get_colored_name(),
            ' の欲しがる桜色の瞳に ',
            you.get_colored_name(),
            ' の姿が揺れている……',
          ]);
        },
        async () => {
          await urara.say_and_wait([
            '……',
            callname,
            '、いまだけじゃなく、ウララのこれからのお返しも、ちゃんと楽しみにしてていい？',
          ]);
          await era.printAndWait([
            '贈り物を受け取った ',
            urara.get_colored_name(),
            ' は静かに手を下腹に重ね、顔を赤らめて ',
            you.get_colored_name(),
            ' に曖昧な問いを向ける。',
          ]);
          await era.printAndWait([
            '小さな',
            urara.uma_sex_title,
            'が答えを求めていないのはわかっているので、',
            you.get_colored_name(),
            ' も仕方なく、ありうる未来を受け止める覚悟を決める。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_cook(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          '具材は鍋に入れたから、ウララ、ご飯あったまってるか見てきていい！',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' はそう言って炊飯器のほうへ走っていく。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！ウララも野菜切るの手伝うよ！え？いいの？',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' の頼りない包丁さばきを思い出して、',
          you.get_colored_name(),
          ' は迷わず小さな',
          urara.uma_sex_title,
          'の手伝いを断った。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '何食べたい？大丈夫！ちょっとまずいものもあるけど、ウララは好き嫌いしないよ！',
        );
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の問いかけに、',
          urara.get_colored_name(),
          ' の答えはいつものように安心できる。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait('えへへ～うっかりこぼしちゃった……あう～');
        await era.printAndWait([
          '気にせず小さな舌を出し、',
          urara.get_colored_name(),
          ' は子猫みたいにソースのついた指を舐め、舌と指のあいだに細い銀糸が伸びていく……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '大きくなったら、ウララと ',
          callname,
          ' が並んで立って、そのときは夫婦みたいになってるよね！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' と一緒に手の中のハンバーグを叩き固めながら、',
          urara.get_colored_name(),
          ' はそう遠くないかもしれない未来を想像している。',
        ]);
      });
    }
    if (love === 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'こうすると ',
          callname,
          ' にウララの匂いがつくって聞いたけど、',
          callname,
          ' 知ったら許してくれるかな……？',
        ]);
        await era.printAndWait([
          '抑えきれない熱い思いを抱えたまま、小さな',
          urara.uma_sex_title,
          'は震えながら舌を出し、自分の唾液をそっと ',
          you.get_colored_name(),
          ' の飲み物に混ぜる……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_rest(urara, you, callname) {
    const love = era.get('love:52');
    const buffer = [
      async () => {
        await urara.say_and_wait([
          callname,
          '！棚の上のお菓子、取ってくれる？うん！ありがとう ',
          callname,
          '！がまんするから！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の「ほどほどに」という注意を受け入れたあと、',
          urara.get_colored_name(),
          ' は嬉しそうに ',
          you.get_colored_name(),
          ' の手からお菓子の箱を受け取る。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          'ふえ～疲れた……あ！ありがとう ',
          callname,
          '！えへへ～冷えてる！',
        ]);
        await era.printAndWait([
          'タオルを頭に乗せ、鍛錬を終えたばかりの ',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' からスポーツドリンクを受け取る。',
        ]);
      },
      async () => {
        await urara.say_and_wait('今日のきもち～も『ウララ』～');
        await era.printAndWait([
          '自作の歌を口ずさみ、',
          urara.get_colored_name(),
          ' は楽しそうに室内のホワイトボードに油性ペンで何か描いている。',
        ]);
      },
    ];
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          'んあっ～ごめん……うぅ……ウララ、声小さくするから……',
        );
        await era.printAndWait([
          '脚をマッサージしているだけなのに、',
          urara.get_colored_name(),
          ' は何度も顔の赤くなる声を漏らしてしまう……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'みんなのレース映像、見たいの？うん！じゃあウララも ',
          callname,
          ' と一緒に見る！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の膝の中に座り、',
          urara.get_colored_name(),
          ' は素直に ',
          you.get_colored_name(),
          ' の代わりにトレーナー室のテレビをつけた。',
        ]);
      });
    }
    if (love === 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'えへへ……',
          callname,
          '、ずっと、ずっとお互いのこと、覚えててね……',
        ]);
        await era.printAndWait([
          '息が苦しくて目を覚ますと、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の体の上に覆い被さって、小さな声で何か囁いているのを見つける……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async office_game(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          'うぅ……なんで追い抜けないの……もう一回！今度こそできる！',
        );
        await era.printAndWait([
          'レースゲームで何度も負けたあと、',
          urara.get_colored_name(),
          ' はまた諦めずにコントローラーを握る。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '哼哼！',
          callname,
          '、今度は勝つ方法見つけたよ！ウララの必殺技、見てて——',
        ]);
        await era.printAndWait([
          '格闘ゲームで ',
          you.get_colored_name(),
          ' に完敗する前、',
          urara.get_colored_name(),
          ' はそう自信満々に笑って言っていた。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          'き、今日もこれで遊ぼう！え？ウ、ウララ、怖くないよ！',
        );
        await era.printAndWait([
          '声は震えているのに、',
          urara.get_colored_name(),
          ' は以前クリアできなかったホラーゲームを勇敢に取り出す。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'ウ、ウララ知らないよ？このゲーム……デジタルちゃんが貸してくれたんだよ？',
        ]);
        await era.printAndWait([
          '自動再生される恥ずかしい画面に目を奪われないよう、',
          urara.get_colored_name(),
          ' は顔を赤くして、黙った ',
          you.get_colored_name(),
          ' にごにょごにょ弁解する。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(() =>
        urara
          .say_and_wait([
            'ゲームは集中しなきゃ……えい！ははっ～',
            callname,
            '、',
            callname,
            '～くすぐったい！ウララ、わかったから～',
          ])
          .then(() =>
            era.printAndWait([
              'くすぐりなどの盤外戦でずっと邪魔してくる ',
              urara.get_colored_name(),
              ' に、',
              you.get_colored_name(),
              ' はついにコントローラーを置いて担当と笑いながら転がった。',
            ]),
          ),
      );
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          ' は何して遊びたい？ウララ、なんでもいいよ！',
          callname,
          ' と一緒なら……',
        ]);
        await era.printAndWait([
          '無邪気な笑顔の ',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の胸にすり寄り、耳元でそっと吐息を漏らす。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async s_a_tree_hollow(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          callname,
          '、今日の木のうろ、また新しい変化あるみたい！',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' のヒントを聞き、',
          you.get_colored_name(),
          ' も木のうろの中を覗き込む。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          'みんな木のうろさんに嫌な気持ちを持ってってもらうけど、いいことも分けてあげたら、いいこと起きるかも！',
        );
        await era.printAndWait([
          '子供の空想みたいだけど、それこそ ',
          urara.get_colored_name(),
          ' ならではの祝福だろう。',
        ]);
      },
    );
    if (love >= 25) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '！一緒に木のうろさんに楽しいこと、話そうよ！木のうろさんも嬉しいはず！',
        ]);
        await era.printAndWait([
          '早く中庭に走り、木のうろのそばで ',
          you.get_colored_name(),
          ' を待っていた ',
          urara.get_colored_name(),
          ' は、',
          you.get_colored_name(),
          ' に笑いながら手を振る。',
        ]);
      });
    }
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '噂だと、溜まりすぎた欲も木のうろさんが持ってってくれるらしいけど、そうされたら木のうろさんもかわいそう……',
        );
        await era.printAndWait([
          '口ではそう言いながら、',
          urara.get_colored_name(),
          ' の視線はかわいそうな枯れうろから離れない。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '木のうろさん！',
          callname,
          ' にもっと好かれる方法、教えて？えへへ～やっぱり木のうろさんも知らないんだ！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は迷いもなく木のうろにそんな問いを投げた。この小さな',
          urara.uma_sex_title,
          'は、もう自分の答えを持っているのかもしれない。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '貢ぎ物を捧げたら、欲しい人がずっと自分だけを見てくれるようになるって……',
        );
        await urara.say_and_wait(
          '考えたことはあるけど……だめ！そんなことしたら、木のうろさんも楽しくないよ！',
        );
        await era.printAndWait([
          '少し怖くはあるが、',
          urara.get_colored_name(),
          ' がここで嘘をつくことはないと思えば、そうしないと決めた',
          urara.sex,
          'はやはり安心できる。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_20 ハルウララのセイウンスカイへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   * @param {PrintedSpan} call_56 ハルウララのマチカネフクキタルへの呼び方
   */
  async s_a_dating(urara, you, callname, call_20, call_30, call_56) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '実は ',
          call_20,
          '、ここの木の下でよくお昼寝してるんだよ！んー——今日はいないみたい！',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' の言う通り、木の下で日向ぼっこする猫たちの中に、あのおなじみの芦毛',
          urara.uma_sex_title,
          'の姿はない。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          call_56,
          ' はあそこで無料占いの屋台出すことが多いけど、やりすぎると先生たちに追い出されちゃうんだよ！',
        ]);
        await era.printAndWait([
          'いま小さな',
          urara.uma_sex_title,
          'が指した中庭の一角は空っぽだ。フクキタル',
          urara.sex,
          'はまた追い出されたらしい。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          ' は絵本、好き？',
          call_30,
          ' から新しい絵本もらったんだよ！',
        ]);
        await era.printAndWait([
          '中庭のベンチに座り、',
          urara.get_colored_name(),
          ' は二人のあいだに、あらかじめ持ってきた絵本を笑いながら広げる。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'お日さまに当たったあと、',
          callname,
          ' の匂い、すっごくいいにおい……本当だよ！',
        ]);
        await urara.say_and_wait([
          'でも、ウララのからだもいいにおいするよ！',
          callname,
          ' も嗅いでみて……！',
        ]);
        await era.printAndWait([
          '赤らんだ笑顔のまま、',
          urara.get_colored_name(),
          ' は',
          urara.uma_sex_title,
          'の力で ',
          you.get_colored_name(),
          ' を、',
          urara.teen_sex_title,
          'の体香でいっぱいの胸に引き込む……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'えへへ～',
          callname,
          ' と中庭をお散歩してると、デートみたい！',
        ]);
        await urara.say_and_wait([
          'え？これがデート？じゃあ……ウララ、毎日 ',
          callname,
          ' とデートしてる？',
        ]);
        await era.printAndWait([
          'デートはそういう数え方じゃないだろう。それでも ',
          urara.get_colored_name(),
          ' といる時間は、いつも楽しい。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '芝生に一緒に寝転ぶと、安心する！お日さまの下、眠くなっちゃう！',
        );
        await urara.say_and_wait([
          callname,
          '！抱っこしてくれる？ウララ、ここ——まだ空いてるよ？',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' のそばに寝転び、',
          urara.get_colored_name(),
          ' はやさしく柔らかい腕を広げ、微笑みながら ',
          you.get_colored_name(),
          ' を誘う。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
   * @param {PrintedSpan} call_32 ハルウララのアグネスタキオンへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのヒシアマゾンへの呼び方
   * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
   */
  async school_rooftop(
    urara,
    you,
    callname,
    call_15,
    call_32,
    call_47,
    call_61,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          callname,
          '、見て、今日のお弁当、おいしい野菜入ってる！うん！',
          call_61,
          ' が作ってくれたんだよ！',
        ]);
        await era.printAndWait([
          '表面は少し焦げているが意外と悪くない弁当を見て、',
          you.get_colored_name(),
          ' は担当のママのようなルームメイトに心の中で礼を言う。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          call_15,
          ' はよくここで歌の練習してるけど、',
          urara.sex,
          'は人の邪魔になるの嫌がるから、お昼の時間は来ないよ！',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' の言う通り、みんな良い子だ。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          'お弁当おいしい！空気もきれい！でも……なんで屋上でお弁当食べるんだっけ？',
        );
        await era.printAndWait(
          'そういえば、なんで屋上で弁当を食べるんだったか？',
        );
        await era.printAndWait([
          '同じ疑問を同時に抱えて、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' は妙な思索に沈む。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '聞いたんだけど、',
          call_32,
          ' ',
          urara.sex,
          'が特別な調味料を売ってるらしい……あれ、どんな味なんだろう？',
        ]);
        await era.printAndWait([
          '特別な話題を小さな声で話す ',
          urara.get_colored_name(),
          ' は、なぜか何かを夢想するような恍惚した顔になる。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'えへへ～今日のお弁当、ウララが作ったよ！一緒に食べよう ',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '幸せそうに笑い、',
          urara.get_colored_name(),
          ' は二人分の弁当箱を広げ、青くさいが愛情たっぷりのおかずを ',
          you.get_colored_name(),
          ' の前に並べる。',
        ]);
        await era.printAndWait(
          '絆創膏を巻いた担当の指で運ばれた料理を飲み込み、担当の笑顔に似た幸福感も胸に広がる。',
        );
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          call_47,
          ' が言ってた、世界には愛の妙薬って薬があって、二人をずっと愛し合わせるんだって！',
        ]);
        await urara.say_and_wait([
          'そんな薬……お弁当に入れたら味、変わるかな？',
          callname,
          '、食べてくれる？',
        ]);
        await era.printAndWait([
          '危ないことを考えているのに、小さな',
          urara.uma_sex_title,
          'はそれでも相手の意思を気にかけている。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {number} jpy 漁獲の売却収入
   */
  async o_r_fishing(urara, you, callname, high_relation, jpy) {
    await era.printAndWait([
      '今日の屋外活動のため、',
      you.get_colored_name(),
      ' と ',
      urara.get_colored_name(),
      ' は釣り道具を持って、いつもの散歩で行く川辺にやってきた。',
    ]);
    await era.printAndWait([
      '',
      urara.get_colored_name(),
      ' と今日は遊びに出ると約束していたが、まさか ',
      you.get_colored_name(),
      ' が ',
      urara.get_colored_name(),
      ' と釣りに来るとは思っていなかった。',
    ]);
    await era.printAndWait([
      '隣でライブ曲を楽しそうに口ずさむ ',
      urara.get_colored_name(),
      ' を見ながら、',
      you.get_colored_name(),
      ' は心の中で、今日の ',
      urara.get_colored_name(),
      ' が「三日坊主」にならないよう祈る。',
    ]);
    await era.printAndWait([
      'それにしても、釣りは ',
      urara.get_colored_name(),
      ' の忍耐のトレーニングになるだろうか？',
    ]);
    era.println();
    if (high_relation) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は本能的に考えているが、いつものように答えが出る前に ',
        urara.get_colored_name(),
        ' の声に遮られる。',
      ]);
      await urara.say_and_wait([
        'あ！',
        callname,
        '、見て！水の中の小魚、手を伸ばせば捕れそう！',
      ]);
      await era.printAndWait([
        '道具も置かないまま川辺にしゃがみ、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に興奮して指を動かす。',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' の隣でできるだけ静かにしているが、水辺に近づくと',
        urara.sex,
        'の足取りも目に見えて軽やかになっていく。',
      ]);
      await urara.say_and_wait([callname, '！ここ、ここから見えるよ！']);
      await era.printAndWait([
        '興奮を抑えきれず、小さな',
        urara.uma_sex_title,
        'は水辺に着くなり笑いながら指を水面の魚影に近づける。',
      ]);
    }
    era.println();

    era.printButton('「川に飛び込んで魚を捕っちゃだめだよ？」', 1);
    await era.input();

    await urara.say_and_wait('うん！今日のウララは釣竿でちゃんと釣るよ！');
    await era.printAndWait([
      '少なくとも「飛び込まない」と正確に約束してほしい。担当の「がまんする」だけの返事に、',
      you.get_colored_name(),
      ' は苦笑して首を振るしかない。',
    ]);
    await era.printAndWait([
      '準備が整うと、',
      you.get_colored_name(),
      ' と ',
      urara.get_colored_name(),
      ' は一緒に竿を振り、針が弧を描き、ウキが水面の目立たない点になる。',
    ]);
    await era.printAndWait([
      'それにしても、釣りは ',
      urara.get_colored_name(),
      ' の忍耐のトレーニングになるだろうか？竿を握ったまま、',
      you.get_colored_name(),
      ' はまた本能的に考え始める。',
    ]);
    era.println();
    if (jpy > 0) {
      await urara.say_and_wait([callname, '！ウララ、また捕れたよ！']);
      await era.printAndWait([
        'バケツは時間とともに徐々に埋まり、',
        urara.get_colored_name(),
        ' は最後の「戦利品」を水から引き上げている。',
      ]);
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' がここで本当に言うことを聞いて、自分で川に入って魚を掴み出さなければ、もっとよかったのだが。',
      ]);
      await era.printAndWait([
        '衣類の大半が濡れた ',
        urara.get_colored_name(),
        ' と、',
        urara.sex,
        'の懐の大きな魚を見て苦笑する ',
        you.get_colored_name(),
        ' は、いつものように叱る言葉が出てこない。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は確かにすごい。だが勝手に水に入れば、',
        urara.uma_sex_title,
        'でも簡単に風邪をひく。',
      ]);
      await era.printAndWait([
        '竿をしまい、',
        you.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'の水滴のついた髪を拭き、',
        urara.get_colored_name(),
        ' も応えようとして、かわいく小さなくしゃみをする。',
      ]);
      await era.printAndWait([
        '結局こうなる。少し申し訳なさそうな ',
        urara.get_colored_name(),
        ' に外套をかけて笑い、',
        you.get_colored_name(),
        ' は担当と満杯のバケツ二つを提げて帰路につく。',
      ]);
      await era.printAndWait([
        '今回は、危うく風邪をひきかけた小さな',
        urara.uma_sex_title,
        'に魚のスープを作ってやろう。',
      ]);
    } else {
      await urara.say_and_wait('えへへ……いったい……かかったのかな……');
      await era.printAndWait([
        '釣り道具の箱と空のバケツ二つを片付け、',
        you.get_colored_name(),
        ' は途切れ途切れに寝言を言う担当を背負う。',
      ]);
      await era.printAndWait([
        'もともと忍耐のない ',
        urara.get_colored_name(),
        ' が収穫のため眠るまで待ったのに、今日の成果は見ればわかる、間違いなくゼロだ。',
      ]);
      await era.printAndWait([
        'せっかく ',
        urara.get_colored_name(),
        ' が真剣になったのに空振りは惜しいが、釣りとはそういうものだと思えば、残るのは少しの無力感だけだ。',
      ]);
      await era.printAndWait([
        '健康診断の体重は少し増えたと書いてあるのに、',
        urara.get_colored_name(),
        ' は意外なほど軽い。',
      ]);
      await era.printAndWait([
        '',
        urara.teen_sex_title,
        'には少し失礼かもしれないことを考えながら、',
        you.get_colored_name(),
        ' は熟睡した小さな ',
        urara.get_colored_name(),
        ' を背負って来た道を歩く。',
      ]);
      await era.printAndWait([
        'ただわからないのは、',
        urara.get_colored_name(),
        ' が夢の中でいったい何匹釣れているのか、ということだ……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   */
  async o_r_walking(urara, you, callname, call_30) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '今日もここの空気、新鮮で体が軽くなった！',
          callname,
          '！いま走ってもいい？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は担当の願いを受け入れたが、',
          urara.get_colored_name(),
          ' が転ぶ可能性を考えて、',
          you.get_colored_name(),
          ' も ',
          urara.get_colored_name(),
          ' と一緒に小走りする。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          'このへん、きれいな虫がいっぱいいるよ！捕まえて ',
          callname,
          ' にあげる……え？だめ？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は担当の分けたい気持ちには感謝するが、散歩中に虫捕りはあまりに ',
          urara.get_colored_name(),
          ' らしい……',
        ]);
        await era.printAndWait([
          'そう思いながら、',
          you.get_colored_name(),
          ' はすぐ止められた担当に虫除けスプレーを吹きかける。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          'みんなもたまにここ来るよ！やっぱり誰かと来たほうが楽しい！',
        );
        await urara.say_and_wait(
          'はしゃいでみんなと川に飛び込まない……？わ、わかったよ……',
        );
        await era.printAndWait([
          '相変わらず抜けているが、',
          urara.get_colored_name(),
          ' に友達がついていれば、大丈夫だろう。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'ここ、人あんまり来ないよね！',
          callname,
          ' と遊んでも邪魔されない！いい場所だね！',
        ]);
        await urara.say_and_wait([
          'えへへ～そういうの、よくないけど、ここはウララと ',
          callname,
          ' だけだよ……',
        ]);
        await era.printAndWait([
          '木立の影の下で、',
          urara.get_colored_name(),
          ' の微かに赤い頬が、どこか怖く見えてくる……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '！もっと近づいて……えへへ～川辺でデートしてるみたい！',
          callname,
          ' はどう思う？',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の答えを待っているらしく、',
          urara.get_colored_name(),
          ' の無垢な笑顔に恥ずかしい赤みが差す。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          call_30,
          ' の本、川辺で逢瀬する話がいっぱいあるよ！手をつないだあと、次に起きるのは……',
        ]);
        await urara.say_and_wait([
          'えへへ～よくわからないことだね！でもそんなことしなくても、ウララと ',
          callname,
          ' は一緒だよ！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の手をきつく握り、',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に、大人みたいにやさしく笑う。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 ハルウララのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_24 ハルウララのマヤノトップガンへの呼び方
   */
  async o_s_arcade(urara, teio, maya, you, callname, call_3, call_24) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait('目が回る……なんで通り抜けられないの、うえ……');
        await era.printAndWait([
          'GAME OVERの筐体にうつ伏せになり、',
          urara.get_colored_name(),
          ' の桜の瞳はいま渦巻きになっている。',
        ]);
        await era.printAndWait([
          '何度か勇敢に挑戦したあと、負けず嫌いの ',
          urara.get_colored_name(),
          ' は結局、高難度STGの目まぐるしい弾幕に撃墜された。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '格闘ゲームの台、いつも人いっぱい！でもわかるよ！みんなの必殺技、すっごくかっこいいから！',
        );
        await era.printAndWait([
          'かわいく格闘キャラの動きを真似しながら、',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を筐体の前に座らせる。',
        ]);
        await era.printAndWait([
          'ただ ',
          urara.get_colored_name(),
          ' は格闘ゲームが苦手なままらしい。今回はどう手加減するか考えないと……',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！ここ、ゲームのディスクも売ってる！あ！これ、',
          call_3,
          ' と ',
          call_24,
          ' が最近好きなゲーム！',
        ]);
        await era.printAndWait([
          '最近流行りのゲームを手に取り、',
          urara.get_colored_name(),
          ' の笑顔とホラーな表紙が鮮やかに対比する。',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' も、',
          teio.get_colored_name(),
          ' と ',
          maya.get_colored_name(),
          ' がホラー好きだとは思えない。たぶん',
          urara.couple_title,
          'はまた噂を真に受けてついでに手に入れたのだろう。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          'あの格好、目が離せないね……みんな、ああいうの好きなの？',
        );
        await urara.say_and_wait([
          callname,
          ' は、',
          urara.get_colored_name(),
          ' が大人の格好して、大人のダンスするの、見たい？もし ',
          callname,
          ' がそうしたいなら……',
        ]);
        await era.printAndWait([
          'ダンスゲームの待機画面で繰り返される際どいダンス映像に目を奪われ、',
          urara.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の服の端を掴む力もまた強くなる。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'どんなゲームでも、やっぱり ',
          callname,
          ' と一緒に遊ぶほうが楽しいよ！',
        ]);
        await era.printAndWait([
          '通りがかりの生徒と筐体のイルミネーションを見ながら、',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' と十指を重ね、幸せそうに ',
          you.get_colored_name(),
          ' のそばに寄りかかる。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '今日は普通にぬいぐるみ取ろう！普通に取るだけでいいから！',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' は頬を赤らめて宣言し、',
          you.get_colored_name(),
          ' が真剣にクレーンをしている最中、突然胸元に潜り込んで小さな口で ',
          you.get_colored_name(),
          ' の首筋をそっと襲う。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} has_ticket 温泉旅行券を引いたか
   */
  async o_s_drawing(urara, you, callname, has_ticket) {
    await era.printAndWait([
      'トレーナー室の冷蔵庫に足りない食材を補充するため、',
      you.get_colored_name(),
      ' と ',
      urara.get_colored_name(),
      ' は商店街へ買い出しに来た。',
    ]);
    await era.printAndWait([
      '食品の買い出しだけのつもりだったのに、帰り際、なぜか人だかりに視線を吸われる。',
    ]);
    await era.printAndWait(
      'その空気に染まったのか、だんだん似てきた担当とトレーナーも、息を合わせて人ごみに潜り込む。',
    );
    await era.printAndWait(
      'レバーとともに回る多角形の箱が、乾いた音を立てて止まり、また一人、ティッシュを増やした残念な人が増える……',
    );
    await you.say_and_wait(
      'でも商店街の抽選は、たしか抽選券がいるはずだよな。じゃあ俺たちは……？',
    );
    await era.printAndWait([
      '振り返った瞬間、',
      you.get_colored_name(),
      ' は ',
      urara.get_colored_name(),
      ' がポケットを探ったあと、手品みたいに抽選券を一枚取り出すのを見る。',
    ]);
    await era.printAndWait([
      '……うん、商店街の小さなアイドル ',
      urara.get_colored_name(),
      ' なら、それはとても自然なことだ。',
    ]);
    await era.printAndWait([
      '目を輝かせて待ちきれない ',
      urara.get_colored_name(),
      ' を見て、',
      you.get_colored_name(),
      ' もさりげなく',
      urara.sex,
      'に親指を立てる。',
    ]);
    await urara.say_and_wait([callname, '！一緒に回すよ！いちに——！']);
    await era.printAndWait([
      'はしゃぐ ',
      urara.get_colored_name(),
      ' の誘いに、',
      you.get_colored_name(),
      ' は前に出て担当と一緒にレバーを下ろす。',
    ]);
    await era.printAndWait([
      '小さな',
      urara.uma_sex_title,
      'の期待に満ちた視線の中、箱は回転しながら違う乾いた音を立て続け、そして——',
    ]);
    if (has_ticket) {
      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'おめでとう、ウララちゃん！特等『温泉旅行券』だよ！！',
      );
      await era.printAndWait([
        '抽選を仕切るスタッフの祝福の声のなか、温泉旅館の旅行券が ',
        urara.get_colored_name(),
        ' の手に渡される。',
      ]);
      await era.printAndWait([
        '券の温泉旅館は見覚えがある。中央トレセンとずっと提携している店のようだ。',
      ]);
      await urara.say_and_wait('温泉？ウララ、温泉入れるの？やった！');
      await urara.say_and_wait([
        callname,
        '！いつ行く？明日？明後日？その次？それとも……',
      ]);

      era.printButton('「まずはレース後のご褒美にしておく？」', 1);
      await era.input();

      await era.printAndWait([
        '今はまだ早いことと、',
        urara.get_colored_name(),
        ' がこれからも頑張る気を保てるように、',
        you.get_colored_name(),
        ' はそう提案する。',
      ]);
      await urara.say_and_wait([
        'うん！それできまり！券は ',
        callname,
        ' が持ってて！',
      ]);
      await urara.say_and_wait([
        'ウララもご褒美もらえるように頑張る！そのときは一緒に楽しく温泉行こうね！',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' はうなずき、温泉券を笑いながら ',
        you.get_colored_name(),
        ' の手に渡す。',
      ]);
      await urara.say_and_wait('ふんふん～楽しみだね、ご褒美の日！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、未来に期待を膨らませる ',
        urara.get_colored_name(),
        ' の笑顔を見て、手の中の券の重みが増した気がする。',
      ]);
      await era.printAndWait([
        'その時機が早く来るように、',
        urara.get_colored_name(),
        ' と一緒に頑張らなくては。',
      ]);
    } else {
      const buffer = [
        async () => {
          await you.say_as_passer_by_and_wait(
            'スタッフA',
            'おめでとう、1等！賞品は『特上にんじんハンバーグ』！',
          );
          await era.printAndWait(
            '湯気の立つにんじんハンバーグが一皿、二人の前に運ばれてくる。',
          );
          await urara.say_and_wait([
            'おっ！',
            callname,
            '、これ見ただけでおいしそう！いま食べていい？',
          ]);
          await era.printAndWait(
            'ん？たしかに上等そうで、見た目まで光っているが……',
          );

          era.printButton(
            '「ここだと落ち着かないし、学園に持って帰って食べよう！」',
            1,
          );
          await era.input();

          await urara.say_and_wait([
            'それもそうだね！じゃあ一緒に帰ろう ',
            callname,
            '！',
          ]);
          await era.printAndWait([
            '学園に戻ったあと、',
            urara.get_colored_name(),
            ' と ',
            you.get_colored_name(),
            ' はその見た目からしてすごいハンバーグを分け合う。',
          ]);
          await era.printAndWait(
            '何度見ても不思議だ。とっくに出来上がっていた料理なのに、こんな味が出るなんて。',
          );
          await era.printAndWait(
            'トレーナー室で同じ味が出せたらなあ……そんな方法、あるだろうか？',
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            'スタッフA',
            'おめでとう！2等、賞品は『にんじん一籠』！',
          );
          await era.printAndWait([
            '2等だが、',
            urara.get_colored_name(),
            ' にとってはこれが一番嬉しいはずだ。',
          ]);
          await era.printAndWait([
            '',
            you.get_colored_name(),
            ' の思った通り、',
            urara.get_colored_name(),
            ' は礼を言いながらにんじんを受け取り、嬉しそうに ',
            you.get_colored_name(),
            ' のほうを向く。',
          ]);
          await urara.say_and_wait([
            callname,
            '！帰ったらみんなでにんじん分けよう！',
          ]);
          await urara.say_and_wait(
            '分ける人、いっぱいいるよ！でもまずこれを一緒に抱えて帰らなきゃ！',
          );

          era.printButton('「うん、これは俺が持つよ！」', 1);
          await era.input();

          await era.printAndWait([
            '',
            urara.get_colored_name(),
            ' からその大きな籠を受け取ると、',
            you.get_colored_name(),
            ' と ',
            urara.get_colored_name(),
            ' は帰路につく。',
          ]);
          await era.printAndWait([
            '帰り道では、商店街のおじさんおばさんたちから熱い祝福と気遣いまで受ける。',
          ]);
          await era.printAndWait([
            'だがこの量、配っても配りきれないだろう？',
            urara.get_colored_name(),
            ' は本当に人気者のいい子だ……',
          ]);
          await era.printAndWait([
            'いつの間にかさらに増えたにんじんを抱え、',
            you.get_colored_name(),
            ' は『幸せな悩み』を抱える。',
          ]);
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            'スタッフA',
            '3等！賞品は『にんじん一本』！」',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            ' はスタッフに礼を言いながら、嬉しそうににんじんを受け取る。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は、にんじん一本でも ',
            urara.get_colored_name(),
            ' は喜ぶと知っている。それでも何かしないと、心が落ち着かない。',
          ]);
          await era.printAndWait([
            '',
            you.get_colored_name(),
            ' が何を言うか迷っているあいだに、',
            urara.get_colored_name(),
            ' のほうが先に動く。',
          ]);
          await era.printAndWait([
            '『パキッ』という乾いた音とともに、',
            urara.get_colored_name(),
            ' はにんじんを真ん中から二つに割り、太いほうを嬉しそうに ',
            you.get_colored_name(),
            ' へ差し出す。',
          ]);
          await urara.say_and_wait([
            '大丈夫、一本でもにんじんはにんじん！',
            callname,
            '！こっちの大きいほう、あげるね！',
          ]);

          era.printButton('「……ありがとう。」', 1);
          await era.input();

          await era.printAndWait([
            'また ',
            urara.get_colored_name(),
            ' に心を動かされた ',
            you.get_colored_name(),
            ' は、用意していた言葉がたくさんあったのに、いま言えるのは短い礼だけだ。',
          ]);
          await urara.say_and_wait([
            'えへへ～どういたしまして ',
            callname,
            '！',
          ]);
          await era.printAndWait([
            'だが ',
            urara.get_colored_name(),
            ' は気にせず、いつもの笑顔のまま、小さな',
            urara.uma_sex_title,
            'は半分にしたにんじんを ',
            you.get_colored_name(),
            ' の手に押し込む。',
          ]);
          await era.printAndWait([
            '周囲の同じように優しい、癒された視線のなか、',
            you.get_colored_name(),
            ' と ',
            urara.get_colored_name(),
            ' はその特別な意味を帯びたにんじんを分け合う。',
          ]);
          await era.printAndWait([
            'これから外見がどう変わっても、',
            urara.get_colored_name(),
            ' はずっと優しいいい子のままだろう。',
          ]);
          await era.printAndWait([
            '帰り道の空を見上げ、',
            you.get_colored_name(),
            ' はそう信じている。',
          ]);
        },
        async () => {
          await urara.say_and_wait('あれ、ティッシュだ……！');
          await era.printAndWait([
            'ティッシュを受け取ったあと、少し落ち込みそうな ',
            urara.get_colored_name(),
            ' は逆に ',
            you.get_colored_name(),
            ' を慰め始める。',
          ]);
          await urara.say_and_wait([
            callname,
            '！落ち込まないで、抽選は楽しいし、ティッシュもいいよ！',
          ]);
          await era.printAndWait([
            '',
            urara.get_colored_name(),
            ' は一生懸命',
            urara.sex,
            'のトレーナーを慰めているが、その様子は自分を慰めているようにも見える。',
          ]);

          era.printButton(
            `「うん、大丈夫だよ。${callname} は落ち込まないから。」`,
            1,
          );
          await era.input();

          await era.printAndWait([
            '',
            you.get_colored_name(),
            ' の返事を聞いて、',
            urara.get_colored_name(),
            ' は嬉しそうに笑うけれど、しばらくすると無理な笑顔になっていく。',
          ]);
          await urara.say_and_wait('でも、やっぱりにんじん食べたいな……');
          await era.printAndWait([
            '落ち込みを隠そうとしているのに、',
            urara.get_colored_name(),
            ' の耳は垂れてしまう。',
          ]);
          await era.printAndWait([
            '結局少し元気がなくなった。帰り道、',
            you.get_colored_name(),
            ' は慰めながら ',
            urara.get_colored_name(),
            ' の頭を撫でる。',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} opera テイエムオペラオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
   */
  async o_s_ktv(urara, opera, you, callname, call_15) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          '歌の練習したいとき、みんなとよくここ来るんだよ！',
          callname,
          ' が聴きたい歌、なんでも歌えるよ！',
        ]);
        await era.printAndWait([
          '先にマイクを手に取り、',
          urara.get_colored_name(),
          ' は練習の成果を ',
          you.get_colored_name(),
          ' に見せたいみたいに笑いながら ',
          you.get_colored_name(),
          ' に尋ねる。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '照明つけたら、ライブはじまるみたい！',
          callname,
          ' も一緒に歌おう！',
        ]);
        await era.printAndWait([
          '遊び心で天井のミラーボールをつけ、',
          urara.get_colored_name(),
          ' は嬉しそうに ',
          you.get_colored_name(),
          ' の手を引いて一緒にマイクを取る。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '今日は何歌う？えへへ～実は ',
          call_15,
          ' のところで新しい歌、習ったんだよ！',
        ]);
        await era.printAndWait([
          '',
          opera.get_colored_name(),
          ' から習った新曲が少し危うく聞こえても、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' が歌い出す瞬間を楽しみにしている。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          '……え、え？',
          callname,
          '、隣の部屋、いったい……？',
        ]);
        await era.printAndWait([
          '隣の個室から絶えず聞こえる水音と喘ぎに、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はしばらく何をすればいいかわからなくなる……',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'どうかな ',
          callname,
          '？ウララに、こ、心、撃たれた？',
        ]);
        await era.printAndWait([
          '幼い声でぎこちなくラブソング系のアイドル曲を歌い終え、',
          urara.get_colored_name(),
          ' は恥ずかしそうに ',
          you.get_colored_name(),
          ' にハートのポーズを決める。',
        ]);
        await era.printAndWait([
          '',
          urara.sex,
          'は少し無理をしている気がするが、やっぱりかわいい……',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '、バニラパフェだよ！口あけて！あーん！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は本能で ',
          urara.get_colored_name(),
          ' がすくったアイスを飲み込み、なぜカラオケでこんなことをするのか疑問に思う。',
        ]);
        await era.printAndWait([
          'だが背を向けた ',
          you.get_colored_name(),
          ' は、担当がこっそり顔を赤らめて舌を出し、',
          you.get_colored_name(),
          ' が口をつけたスプーンを丁寧に舐めている、目のとろんとした様子を見逃す……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async o_s_movie(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          'ポップコーンおいしいし、飲み物もおいしい！でもやっぱり映画が大事！',
        );
        await urara.say_and_wait('今度は映画に集中したい！');
        await era.printAndWait([
          'そうは言っても、',
          urara.get_colored_name(),
          ' はまだ食べたそうだと察した ',
          you.get_colored_name(),
          ' は、それでもポップコーンと飲み物を買う。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '大丈夫だよ ',
          callname,
          '！おもしろかったらウララ、眠くならない……たぶん！',
        ]);
        await era.printAndWait([
          '意外と硬い題材の映画を選んだあと、',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に自信たっぷりに宣言する。',
        ]);
        await era.printAndWait([
          '本当に大丈夫か？',
          urara.get_colored_name(),
          ' の笑顔を見て、',
          you.get_colored_name(),
          ' はそれでも少し心配になる。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '『幻の馬』、またリバイバル上映だよ！見るたびに主役の顔、なつかしい感じがする！でも、なんで？',
        ]);
        await era.printAndWait([
          '一つの上映室の前を通り、壁の案内を見ながら、',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' にそう言う。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' はずっと勘がいい。',
          urara.sex,
          'はこの名作の中に、本当に大事な何かを見つけたのかもしれない。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          'この映画、こわいところあるらしいけど、ウララは勇敢だよ！',
        );
        await urara.say_and_wait([
          'だから ',
          callname,
          ' がびっくりしたら、ウララが ',
          callname,
          ' を慰めてあげる？',
        ]);
        await era.printAndWait([
          '暗闇のなかでそっと肘掛けに手をかけ、',
          urara.get_colored_name(),
          ' は肌の触れ合いを通して、速くなる鼓動と上がる体温を ',
          you.get_colored_name(),
          ' に伝える。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          'えへへ～まだわからないところもあるけど、男の人と女の人、仲いいね！',
        );
        await urara.say_and_wait([
          'でも ',
          callname,
          ' とウララも、こんなに仲いいよね？それはウララ、わかってるよ！',
        ]);
        await era.printAndWait([
          '映画館の肘掛けの上で、',
          urara.get_colored_name(),
          ' は少し大人びた微笑みを浮かべて ',
          you.get_colored_name(),
          ' の手をきつく握る。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'いつかウララの話も映画になったら……主役はぜったい ',
          callname,
          ' がモデルでいてほしい！',
        ]);
        await urara.say_and_wait(
          'だって、『ウララ』はずっと、『トレーナー』だけの担当でいてほしいから！',
        );
        await era.printAndWait([
          '安心して ',
          you.get_colored_name(),
          ' の肩に寄りかかり、',
          urara.teen_sex_title,
          'の桜色の瞳の光が、スクリーンの変化に合わせてやさしく揺れる。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {number} dice 祈願のダイス結果。0-1の小数で、小さいほど良い
   */
  async o_c_pray(urara, you, callname, high_relation, dice) {
    await era.printAndWait([
      '乗り気な ',
      urara.get_colored_name(),
      ' のため、そして次のレース前に縁起を担ぐため、',
      you.get_colored_name(),
      ' は',
      urara.uma_sex_title,
      'を連れて神社へ行くことにした。',
    ]);
    await era.printAndWait('急ぎの用事もないし、来たからには、だ。');
    await era.printAndWait([
      'ただ階段に足をかけたとき、',
      you.get_colored_name(),
      ' はここの空気がいつもの来訪と少し違うのを感じる。',
    ]);
    await era.printAndWait([
      'この小さな神社は普段にぎやかだ。近所の住民やここで遊ぶ子供のほか、長い階段を使ってトレーニングする',
      urara.uma_sex_title,
      'たちも来る。',
    ]);
    await era.printAndWait(
      'だが今日の階段は格別に静かで、両側の林の揺れと鳥の声以外は、二人の足音だけだ。',
    );
    era.println();
    if (high_relation) {
      await era.printAndWait([
        '二人だけの登りはたしかに活気が足りないが、',
        you.get_colored_name(),
        ' の手をちゃんと握っている ',
        urara.get_colored_name(),
        ' は、笑顔のままずっと ',
        you.get_colored_name(),
        ' のそばにいる。',
      ]);
      await urara.say_and_wait('今日のここの空気、なんかきれい！');
      await era.printAndWait([
        'どの意味かはわからないが、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の見方にうなずき、',
        urara.uma_sex_title,
        'と一緒にいるうちに気分も明るくなっていく。',
      ]);
    } else {
      await era.printAndWait([
        '少し迷ったあと、',
        urara.get_colored_name(),
        ' は一歩前に出て ',
        you.get_colored_name(),
        ' の手を握り、いきなり ',
        you.get_colored_name(),
        ' の前に立つ。',
      ]);
      await urara.say_and_wait([
        callname,
        '！スタミナトレーニング、ついてきてね？',
      ]);
      await era.printAndWait([
        '気づく前に、',
        you.get_colored_name(),
        ' は悪戯っぽく笑いながら走り出した担当に、次の段へ引き上げられる——',
      ]);
    }
    era.println();

    await era.printAndWait([
      '先に走っていた ',
      urara.get_colored_name(),
      ' に手を引かれて最後の段を踏むと、おなじみの小さな神社が、階段の先の鳥居の向こうに現れる。',
    ]);
    await era.printAndWait(
      '空気がどう変わっても、今日もそれはここで静かに参拝者を待っている。',
    );
    await era.printAndWait([
      '',
      urara.get_colored_name(),
      ' と並んで賽銭箱の前に立ち、',
      you.get_colored_name(),
      ' は硬貨を二枚取り出し、一枚を ',
      urara.get_colored_name(),
      ' の手に渡す。',
    ]);
    await era.printAndWait([
      '硬貨にまばたきしたあと、',
      urara.get_colored_name(),
      ' は耳を立て、察したようにそれを握りしめる……',
    ]);
    await era.printAndWait([
      'あまり型通りではない儀式を簡単に終えると、',
      you.get_colored_name(),
      ' は ',
      urara.get_colored_name(),
      ' の畳んだおみくじを外し、',
      urara.get_colored_name(),
      ' と一緒に紙を開こうとする——',
    ]);
    if (dice < 0.5) {
      await urara.say_and_wait('あ！今度の運、いいね！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' は嬉しそうに ',
        you.get_colored_name(),
        ' へ開いた紙を見せる。印字された結果も、たしかに悪くない。',
      ]);

      era.printButton('「おめでとう。俺のも悪くないよ。」', 1);
      await era.input();

      await urara.say_and_wait([
        'おみくじでいい結果だと、いつも嬉しい！',
        callname,
        ' も元気出たでしょ！',
      ]);
      await era.printAndWait([
        'だが嬉しい理由は、良い籤より ',
        urara.get_colored_name(),
        ' のほうが多い。小さな担当の笑顔を見て、',
        you.get_colored_name(),
        ' も知らないうちに口角が少し上がる。',
      ]);
      await era.printAndWait([
        '神社の庭で、楽しそうな小鳥みたいにくるくる回る ',
        urara.get_colored_name(),
        ' を見ると、おなじみの温もりがまた ',
        you.get_colored_name(),
        ' の体を満たす。',
      ]);
      await era.printAndWait([
        '気分がかなり楽になった。これなら近いうちも頑張れそうだ。二人の出会いを思い出し、',
        you.get_colored_name(),
        ' は深く息を吸う。',
      ]);
      await urara.say_and_wait([callname, '、行くよ——']);
      await era.printAndWait([
        '赤い鳥居の前で止まり、ピンクの小鳥が手を振って ',
        you.get_colored_name(),
        ' を呼んでいる。',
      ]);
      await era.printAndWait([
        '去る前に、林の枝葉の向こうの空を見上げ、',
        you.get_colored_name(),
        ' はどこかで見ている誰かに礼を伝える。',
      ]);
      await era.printAndWait('今日はいい日だ。');
    } else {
      await urara.say_and_wait([
        'え？',
        callname,
        '、今度の結果、ちょっとよくないみたい、',
        callname,
        ' のも？',
      ]);
      await era.printAndWait([
        'あまり良くない紙を見せながら、',
        urara.get_colored_name(),
        ' は少し落ち込みそうになるが、すぐに気にしていないみたいに笑って ',
        you.get_colored_name(),
        ' のほうを向く。',
      ]);

      era.printButton('「うん、でも大丈夫だと思う。」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！運が悪いこと、よくあるよ。前のウララもずっと負けてたし！安心して一緒に帰ろう！',
      );
      await era.printAndWait([
        '',
        you.get_colored_name(),
        ' の返事を聞いて、',
        urara.get_colored_name(),
        ' は安心して笑い、前に出て ',
        you.get_colored_name(),
        ' の手を握る。',
      ]);
      await era.printAndWait(
        '帰ろうと踏み出した二人は、少し滑稽にそろって前へ突っ込む。いつの間にか、二人の靴紐が音もなくほどけていた。',
      );
      await era.printAndWait(
        '地面に座った互いのぼんやりした顔を見て、同時に靴紐で転んだ二人は、わけもなく笑い出す。',
      );
      await era.printAndWait([
        '悪い紙を引いても、結果が悪いとは限らない！互いの埃を払いながら、',
        urara.get_colored_name(),
        ' は楽観的に思う。',
      ]);
      await era.printAndWait([
        'だが、本当に効いてしまったのだろうか。さっきのただならない空気を思い出し、',
        urara.get_colored_name(),
        ' を連れて帰路につく ',
        you.get_colored_name(),
        ' は考え込む。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
   * @param {PrintedSpan} call_33 ハルウララのファインモーションへの呼び方
   */
  async o_s_restaurant(urara, you, callname, call_30, call_33) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          call_30,
          ' 和 ',
          call_33,
          ' がいっしょに推してたパン屋、やっぱりすごい！今度も一緒に来よう！',
        ]);
        await era.printAndWait([
          '手のドーナツをかじり、',
          urara.get_colored_name(),
          ' は嬉しそうに口角の砂糖を拭く。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          `あそこ、前にみんなと食べたラーメン！隠しメニューもあるらしいよ！${callname} も試してみて！`,
        );
        await era.printAndWait([
          '路地の奥にある、意外と清潔な店構えを見て、',
          you.get_colored_name(),
          ' はそれでも ',
          urara.get_colored_name(),
          ' と店に入る。',
        ]);
        await era.printAndWait(
          '担当の食事制限は……外出のときは、そんなに水を差さなくてもいいだろう。',
        );
      },
      async () => {
        await urara.say_and_wait(
          'え？今日はファストフード？じゃあこの新しいセット、試す！',
        );
        await urara.say_and_wait([
          '多い？じゃあ ',
          callname,
          ' も一緒に食べよう！『ウララ～』って行くよ！',
        ]);
        await era.printAndWait([
          '大盛りセットを分けたあと、',
          you.get_colored_name(),
          ' は、体重を気にすべきなのはもう ',
          urara.get_colored_name(),
          ' だけではないと思う。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          'あーん～ぐちゅ——食べるとき変な音出さない？わかったよ……？',
        );
        await era.printAndWait([
          '変な吸い方で食べ物を味わうところを見られたのに、真っ白な顔の小さな',
          urara.uma_sex_title,
          'は、自分でも何をしているのかわかっていないらしい。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `えへへ～${callname} に食べさせてもらった！でもウララ、もう子供じゃないよ！だから次はウララの番？${callname}、あーん`,
        );
        await era.printAndWait([
          '幸せそうな笑顔のまま、',
          urara.get_colored_name(),
          ' はスプーンを奪い、真似してチャーハンを一すくい ',
          you.get_colored_name(),
          ' の口元へ運ぶ。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait(
          '聞いて！雑誌で、すごい口移しでご飯あげる遊び、見たよ！',
        );
        await urara.say_and_wait(
          `でも外ではがまんしなきゃ……じゃあ二人だけのとき、${callname}、その遊び、してくれる？`,
        );
        await era.printAndWait([
          '断っても無駄だろう。小さな',
          urara.uma_sex_title,
          'の期待に熱を帯びた目を余所に、',
          you.get_colored_name(),
          ' は黙って飯をかき込む。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   * @param {PrintedSpan} call_47 ハルウララのヒシアマゾンへの呼び方
   * @param {PrintedSpan} call_56 ハルウララのマチカネフクキタルへの呼び方
   * @param {PrintedSpan} call_58 ハルウララのメイショウドトウへの呼び方
   * @param {PrintedSpan} call_77 ハルウララのナリタトップロードへの呼び方
   */
  async o_s_dating(urara, you, callname, call_47, call_56, call_58, call_77) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait([
          call_77,
          ' が推してた雑貨屋、今日おもしろいもの入ったらしい！一緒に見てみよう！',
        ]);
        await era.printAndWait([
          '小走りで先に行った ',
          urara.get_colored_name(),
          ' は、もうそのきれいな雑貨屋のそばに立っている。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          'あっちの土産物屋、',
          call_58,
          ' と ',
          call_56,
          ' がたまに行くところ！いま一緒に見てみる？',
        ]);
        await era.printAndWait([
          '何度行っても、あの店はまっとうな土産物屋には見えない。でも ',
          urara.get_colored_name(),
          ' が楽しければいいだろう。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          'あ！あの ',
          call_47,
          ' が推してた古本屋！中に珍しい本、いっぱい出てきたらしいよ！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' を書店の入口まで引っ張り、',
          urara.get_colored_name(),
          ' は好奇心いっぱいにショーウィンドウから中を覗く。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `はぁ……あ、ちゃんと歩かなきゃ！でも ${callname} の匂い……はぁ……`,
        );
        await era.printAndWait([
          'ずっと ',
          you.get_colored_name(),
          ' の服を掴んだまま、',
          urara.get_colored_name(),
          ' は自分の ',
          callname,
          ' の匂いにすっかり浸っている。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait(
          `入学の初日、お母さんがトレセンまで送ってくれた日、また思い出した……でもいまは ${callname} もそばにいるよ！`,
        );
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の腕を取り、',
          urara.get_colored_name(),
          ' は笑いながら ',
          you.get_colored_name(),
          ' と混雑した人波を抜けていく。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '、いま手、離さないでね？人ごみではぐれたら、ウララもこわいから！',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の腕をきつく抱き、顔は見えないが、',
          urara.get_colored_name(),
          ' は笑っているはずだ。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async o_s_shopping(urara, you, callname) {
    const buffer = [];
    const love = era.get('love:52');
    buffer.push(
      async () => {
        await urara.say_and_wait(
          'あっちに出走してるみんなの看板があるよ、今日出てるのは——？',
        );
        await era.printAndWait([
          'モールのホールで、',
          urara.get_colored_name(),
          ' と ',
          you.get_colored_name(),
          ' は上の',
          urara.uma_sex_title,
          '宣伝看板を見上げる。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！今度の靴と蹄鉄、前と同じのでいいよね！え？そっちの一足？',
        ]);
        await era.printAndWait([
          '違う二足のランニングシューズを困った顔で持ち、',
          urara.get_colored_name(),
          ' のレースとトレーニングの理解は、まだ少しあやふやだ。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '勝負服の展示、また通っちゃった！それに今度もきれいな新しい服があるよ！',
        );
        await era.printAndWait([
          '新しい勝負服の展示は、新しい',
          urara.uma_sex_title,
          'が重賞に出てくることを意味し、これからの圧はまた少し増えるかもしれない。',
        ]);
        await era.printAndWait([
          'だが ',
          urara.get_colored_name(),
          ' の笑顔は、みんなが未来に一歩近づけることだけを喜んでいる。',
        ]);
      },
    );
    if (love >= 50) {
      buffer.push(async () => {
        await urara.say_and_wait([
          callname,
          '、最近服の下……擦れて痛いの、ウララと一緒に新しいの見に行って……？',
        ]);
        await urara.say_and_wait([
          '他の子と？でも',
          urara.couple_title,
          '、最近みんな暇じゃないよ？',
          callname,
          '、もう少し手伝って……',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' の目はかわいそうだが、捕まるのを避けるため、',
          you.get_colored_name(),
          ' は必死に ',
          urara.get_colored_name(),
          ' の頼みを断る。',
        ]);
      });
    }
    if (love >= 75) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'あ！この服……いいよ ',
          callname,
          '！お小遣い貯めて、自分で買うから！',
        ]);
        await era.printAndWait([
          '名残惜しそうではあるが、',
          you.get_colored_name(),
          ' が買おうと提案すると、',
          urara.get_colored_name(),
          ' はきっぱりとワンピースをハンガーに戻す。',
        ]);
      });
    }
    if (love >= 100) {
      buffer.push(async () => {
        await urara.say_and_wait([
          'ウララ～えへへ、びっくりした？',
          callname,
          '？だからウララから離れすぎないでね？ちゃんと手、つなごう！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は担当を休憩スペースに置いて少し離れようとしたが、',
          urara.sex,
          'は ',
          you.get_colored_name(),
          ' が振り返った瞬間、後ろから飛びついてくる。',
        ]);
        await era.printAndWait([
          'もう少し',
          urara.sex,
          'を座らせておきたいが、',
          urara.get_colored_name(),
          ' は譲る気配もなく、笑ってもいない……',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {boolean} u_awake ウララが起きているか
   * @param {boolean} y_awake プレイヤーが起きているか
   */
  good_night_normal(
    urara,
    you,
    callname,
    self_call,
    high_relation,
    u_awake,
    y_awake,
  ) {
    const buffer = [];
    const love = era.get('love:52');
    if (u_awake && y_awake) {
      if (high_relation) {
        buffer.push(
          () => {
            urara.say(['今日はここまで？じゃあまたねー ', callname, '！']);
            era.print([
              '',
              you.get_colored_name(),
              ' に別れを告げると、',
              urara.get_colored_name(),
              ' は嬉しそうに走り去る。',
            ]);
          },
          () => {
            urara.say(['もう帰るの？わかった！またね ', callname, '！']);
            era.print([
              '去る前に、',
              urara.get_colored_name(),
              ' は笑いながら ',
              you.get_colored_name(),
              ' にきちんとさよならを言う。',
            ]);
          },
          () => {
            urara.say(['もうこんな時間！', callname, '、帰り道気をつけてね！']);
            era.print([
              '',
              you.get_colored_name(),
              ' にやさしく声をかけ、小さな',
              urara.uma_sex_title,
              'は跳ねるように寮へ走っていく。',
            ]);
          },
          () => {
            urara.say([
              callname,
              ' も疲れた？おつかれさま！帰ったらちゃんと休んでね？',
            ]);
            era.print([
              '一日の終わりに、',
              urara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' に手を振って去る。',
            ]);
          },
        );
        if (love > 0) {
          buffer.push(
            () => {
              urara.say([
                'あんまり実感ないけど、二人だと時間、あっという間だね！もしかして ',
                callname,
                '、時間を速くできるの！え？できない？',
              ]);
              era.print([
                'とんちんかんなことを言いながら、',
                urara.get_colored_name(),
                ' は ',
                you.get_colored_name(),
                ' と別れを交わして分かれる。',
              ]);
            },
            () => {
              urara.say(['え？送ってくれるの？ありがとう ', callname, '！']);
              era.print([
                '',
                you.get_colored_name(),
                ' の提案を聞いて、',
                urara.get_colored_name(),
                ' は笑いながら ',
                you.get_colored_name(),
                ' と最後の道を一緒に歩く。',
              ]);
            },
          );
        }
        if (love >= 25) {
          buffer.push(
            () => {
              urara.say([
                'もう少しいたいけど、そしたらみんな心配するよね！じゃあまたね、',
                callname,
                '！',
              ]);
              era.print([
                urara.get_colored_name(),
                ' はまだ物足りなそうだが、それでも素直に ',
                you.get_colored_name(),
                ' に別れを告げる。',
              ]);
            },
            () => {
              urara.say([
                'ここで ',
                callname,
                ' とさよならするの、ちょっと寂しい！今度はもっと ',
                self_call,
                ' に付き合ってくれる？',
              ]);
              era.print([
                '名残惜しそうに ',
                you.get_colored_name(),
                ' の服の端を引っ張りつつも、',
                urara.get_colored_name(),
                ' は小さな声で別れを済ませて去る。',
              ]);
            },
          );
        }
        if (love >= 50) {
          buffer.push(
            () => {
              urara.say([
                'はぁ……ごめんね ',
                callname,
                '、ん～もうちょっと待って……',
              ]);
              era.print([
                '顔に妙な赤みが差したまま、',
                urara.get_colored_name(),
                ' は去る前に発情した小動物みたいに ',
                you.get_colored_name(),
                ' の体にすり寄る。',
              ]);
            },
            () => {
              urara.say([
                callname,
                '！行く前に、もう一回ぎゅって ',
                self_call,
                ' を抱っこしてくれる？ん……もっと強くてもいいよ？',
              ]);
              era.print([
                'さよなら前の小さな願いを出して、',
                you.get_colored_name(),
                ' の抱擁で顔を真っ赤にした ',
                urara.get_colored_name(),
                ' はとろんとした表情になる。',
              ]);
            },
          );
        }
        if (love >= 75) {
          buffer.push(
            () => {
              urara.say([
                'え？この時間……えへへ～今日、本当に楽しかった！今度も一緒にいようね！',
              ]);
              era.print([
                '',
                you.get_colored_name(),
                ' に恋人の抱擁をしてから、',
                urara.get_colored_name(),
                ' は耳を震わせて満足そうに走り去る。',
              ]);
            },
            () => {
              urara.say([
                'え……もう少しいてはだめ？でもたしかに ',
                callname,
                ' に迷惑かけちゃだめだよね、またね！',
              ]);
              era.print([
                '名残惜しそうに別れ前の親密を切り上げ、',
                urara.get_colored_name(),
                ' は何度も振り返りながら去る。',
              ]);
            },
          );
        }
        if (love >= 90) {
          buffer.push(
            () => {
              urara.say([
                'もう行くの？じゃあ……ちゅっ！えへへ～さよならのキスだよ！',
              ]);
              era.print([
                'しっぽを振り、',
                urara.get_colored_name(),
                ' は去る前に ',
                you.get_colored_name(),
                ' の頬を軽く啄んで、小鳥みたいに笑いながら走り去る。',
              ]);
            },
            () => {
              urara.say([
                'えへへ～',
                callname,
                '、もう行くの？帰り道気をつけてね？帰ったらちゃんと休んで、夜中に出かけて浮気しないでね？',
              ]);
              era.print([
                '去る直前の ',
                urara.get_colored_name(),
                ' の意味深な笑顔を見て、',
                you.get_colored_name(),
                ' は背筋が少し冷える気がする。',
              ]);
            },
          );
        }
        if (love >= 100) {
          buffer.push(
            () => {
              urara.say([
                'もし ',
                callname,
                ' がいま手を離したら、',
                self_call,
                '、『スーッ』てどこか行っちゃうかも……冗談だよ！もう子供じゃないもん！でも今度一緒のときも、',
                self_call,
                ' の手、ぎゅって握っててね！',
              ]);
              era.print([
                '担当の去り際の冗談を反芻しているうち、なぜか ',
                you.get_colored_name(),
                ' の気分がそわそわしてくる……',
              ]);
            },
            () => {
              urara.say([
                'ちゅん～はぁ……ん！今日はここまで、',
                callname,
                ' がまだ欲しいなら次に遊ぼう！大丈夫、',
                callname,
                ' が来なくても、',
                self_call,
                ' はずっと ',
                callname,
                ' を待ってるから……',
              ]);
              era.print([
                '恋人の首に別れ前の赤い印を吸い、小さな',
                urara.uma_sex_title,
                'の澄んだ声が濁って色っぽく ',
                you.get_colored_name(),
                ' の耳に絡みつく。',
              ]);
            },
          );
        }
      } else {
        buffer.push(
          () => {
            urara.say(['もう帰る？じゃあ……またね ', callname, '！']);
            era.print([
              '何を言うか少し考えて、',
              urara.get_colored_name(),
              ' は結局 ',
              you.get_colored_name(),
              ' に笑顔を渡すことにする。',
            ]);
          },
          () => {
            urara.say(['もうこんな時間だよ、帰ろうね ', callname, '！']);
            era.print([
              '笑いながら ',
              you.get_colored_name(),
              ' に声をかけてから、小さな',
              urara.uma_sex_title,
              'は淡々と寮へ向かう。',
            ]);
          },
          () => {
            urara.say([
              '',
              self_call,
              ' を送るの？でも大丈夫だよ、ありがとう ',
              callname,
              '！',
            ]);
            era.print([
              '手を振って ',
              you.get_colored_name(),
              ' を断ったあと、',
              urara.get_colored_name(),
              ' はひとりで去る。',
            ]);
          },
        );
        if (love > 0) {
          buffer.push(
            () => {
              urara.say([
                '今日もあっという間だった、',
                callname,
                ' もちょっと優しくなったね……なんでもない！またね ',
                callname,
                '！',
              ]);
              era.print([
                'よくわからないことを言いながら、',
                urara.get_colored_name(),
                ' は ',
                you.get_colored_name(),
                ' と別れてゆっくり去る。',
              ]);
            },
            () => {
              urara.say([
                'よくわからないけど、もう行きたくない気がする、でもそれもよくないよね……',
              ]);
              era.print([
                '耳を揺らしながら独り言を言ったあと、',
                urara.get_colored_name(),
                ' はきちんと ',
                you.get_colored_name(),
                ' に別れを告げて去る。',
              ]);
            },
          );
        }
        if (love >= 25) {
          buffer.push(
            () => {
              urara.say([
                'みんな心配する？でもみんな、',
                callname,
                ' と ',
                self_call,
                ' が一緒でいいって言ってるし、心配されないよね！',
              ]);
              era.print([
                'まだ物足りなそうでも、小さな',
                urara.uma_sex_title,
                'は素直に去る。ただ ',
                you.get_colored_name(),
                ' は担当に少し文句を言われた気がする。',
              ]);
            },
            () => {
              urara.say([
                '大丈夫、',
                self_call,
                ' は走り回らないよ！でも ',
                callname,
                ' がそう言うなら……一緒に歩こう！',
              ]);
              era.print([
                'もじもじしていた小さな',
                urara.uma_sex_title,
                'はそれでも ',
                you.get_colored_name(),
                ' の願いを受け入れ、並んで歩く空気が少し微妙になっていく。',
              ]);
            },
          );
        }
        if (love >= 50) {
          buffer.push(
            () => {
              urara.say([
                'ごめん……これ、もう少し ',
                self_call,
                ' に時間、ちょうだい……',
              ]);
              era.print([
                '分かれる前に何度も ',
                you.get_colored_name(),
                ' の体にすり寄り、',
                urara.get_colored_name(),
                ' は欲情で震えるのを必死に抑える。',
              ]);
            },
            () => {
              urara.say([
                'あんな人なのに、',
                callname,
                ' の匂い……あ！ごめん……',
              ]);
              era.print([
                'うっとりからようやく我に返り、',
                urara.get_colored_name(),
                ' は慌てて恥ずかしそうに ',
                you.get_colored_name(),
                ' の服の端を離す。',
              ]);
            },
          );
        }
        if (love >= 75) {
          buffer.push(
            () => {
              urara.say([
                callname,
                '！行く前にもう一回抱っこ……いい？じゃあ……できるだけ優しくね？',
              ]);
              era.print(
                'つかず離れずの触れ合いから、またきつく抱き合うまで。別れの時間はまたしばらく延びてしまう。',
              );
            },
            () => {
              urara.say([
                'もうこんな時間だし、今日も楽しかった、でも ',
                callname,
                '……',
              ]);
              era.print([
                '迷ったあと ',
                you.get_colored_name(),
                ' に恋人の抱擁をして、',
                urara.get_colored_name(),
                ' はそれでも名残惜しそうに去る。',
              ]);
            },
          );
        }
        if (love >= 90) {
          buffer.push(
            () => {
              urara.say([
                '……ちゅっ～これは特別なさよならだよ！だから ',
                callname,
                '、次会うときはもっとよくなっててね？',
              ]);
              era.print([
                '桜色の唇で恋人の頬に軽く触れ、小さな',
                urara.uma_sex_title,
                'は恥ずかしそうに耳を震わせながら、小さな声で恋人を励ます。',
              ]);
            },
            () => {
              urara.say([
                callname,
                '、夜に大人の遊びするときも気をつけてね！行かない？本当でもいいよ……',
              ]);
              era.print([
                '別れ前の雑談で、',
                urara.get_colored_name(),
                ' の疑いつつも受け入れる目が、',
                you.get_colored_name(),
                ' を少し落ち着かなくさせる。',
              ]);
            },
          );
        }
        if (love >= 100) {
          buffer.push(
            () => {
              urara.say([
                'もう分かれるの？でもいま手を離したら、',
                callname,
                '、誰かと仲良くしに行くかも？冗談だよ！',
              ]);
              era.print([
                you.get_colored_name(),
                ' は ',
                urara.get_colored_name(),
                ' に見送られて去るが、担当の後ろからの視線が ',
                you.get_colored_name(),
                ' の背中をぞわぞわさせる……',
              ]);
            },
            () => {
              urara.say([
                'ちゅっ～ぐちゅ～はぁ……えへへ～好き？今日はここまで、次都合がいいとき、',
                self_call,
                ' が ',
                callname,
                ' に言うから！',
              ]);
              era.print([
                '別れ前の恋人に自分の印を強く焼き、小さな',
                urara.uma_sex_title,
                'は澄んだ声で濁った欲を語る。',
              ]);
            },
          );
        }
      }
    } else if (y_awake) {
      if (
        era.get('status:52:马跳S') ||
        era.get('status:52:马跳Z') ||
        era.get('status:52:超马跳Z') ||
        era.get('status:52:弗隆K') ||
        era.get('status:52:弗隆P') ||
        era.get('base:52:性欲') >= lust_border.absent_mind
      ) {
        buffer.push(
          () => {
            urara.say('うっ……ん……');
            era.print([
              '',
              you.get_colored_name(),
              ' が',
              urara.sex,
              'を送る道でも、眠っている ',
              urara.get_colored_name(),
              ' はずっと落ち着かない声を漏らしている。',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '小さな体が熱っぽく ',
              you.get_colored_name(),
              ' の胸に縮こまり、帰り道でも ',
              urara.get_colored_name(),
              ' はピンクの夢に浸ったままだ。',
            ]);
          },
        );
      } else {
        buffer.push(
          () => {
            urara.say('ふえ……');
            era.print([
              '呼吸がだんだん落ち着き、',
              urara.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' のそばに安心して眠っている。',
            ]);
          },
          () => {
            urara.say('……');
            era.print([
              '疲れすぎたのか、',
              you.get_colored_name(),
              ' の胸の中の ',
              urara.get_colored_name(),
              ' は静かに眠っている。',
            ]);
          },
          () => {
            urara.say('えへへ……');
            era.print([
              '帰り道ずっと寝言を言い、',
              you.get_colored_name(),
              ' の背中の ',
              urara.get_colored_name(),
              ' は、いったい何を見ているのだろう？',
            ]);
          },
        );
      }
    } else {
      buffer.push(
        () =>
          era.print([
            '',
            you.get_colored_name(),
            ' が寝てしまったのを見て、',
            urara.get_colored_name(),
            ' は何かの方法でこっそり ',
            you.get_colored_name(),
            ' を住まいに運んだらしい。',
          ]),
        () =>
          era.print([
            '目を覚ますと ',
            you.get_colored_name(),
            ' はもう住まいに戻っており、耳元にはまだ ',
            urara.get_colored_name(),
            ' の別れの声が残っている気がする。',
          ]),
        () => {
          era.print(
            '目を開けると、おなじみの天井だ。やっぱり寝室に戻っていた。',
          );
          era.print(
            `担当に迷惑をかけたのは確かだが、小さな${urara.sex}はいったいどうやってひとりで人を送り届けたのだろう……`,
          );
        },
      );
      if (love >= 50) {
        buffer.push(() => {
          era.print([
            '',
            you.get_colored_name(),
            ' を住まいに送り届けたあと、',
            urara.get_colored_name(),
            ' は気を利かせて ',
            you.get_colored_name(),
            ' の部屋も少し整えたらしい。',
          ]);
          era.print([
            'ただわからないのは、',
            you.get_colored_name(),
            ' は洗濯かごの服が誰かに漁られた気がしてならない……',
          ]);
        });
      }
      if (love >= 75) {
        buffer.push(() => {
          era.print([
            '朦朧としたなか、名残惜しそうなキスが ',
            you.get_colored_name(),
            ' の頬に落ちる。',
          ]);
          era.print([
            '目を覚ますと ',
            urara.get_colored_name(),
            ' はもうそばにいないが、顔に残るキスの感触はまだはっきりしている。',
          ]);
        });
      }
      if (love >= 100) {
        buffer.push(() => {
          era.print([
            'もう一度目を開けると、',
            you.get_colored_name(),
            ' はもう住まいに戻っていた。',
          ]);
          era.print([
            'そばにはまだ ',
            urara.get_colored_name(),
            ' の体温が残っていて、ここで',
            urara.sex,
            'も ',
            you.get_colored_name(),
            ' にしばらく付き合っていたらしい。',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {string} self_call ハルウララの自称
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   * @param {number} check 求愛判定値。大成功なら既定で同意
   */
  async good_night_sex(urara, you, callname, self_call, high_relation, check) {
    const love = era.get('love:52');
    if (high_relation) {
      if (love === 100) {
        urara.say([
          'ぐちゅ～はぁ……',
          callname,
          '、今度も気持ちいいことしよ？満足するまでやっていいよ？',
        ]);
        era.print([
          '抑えきれない抱擁と湿ったキスのあと、小さな',
          urara.sex,
          'は無邪気な口調で ',
          you.get_colored_name(),
          ' の耳元に魔性の誘いを囁く。',
        ]);
      } else if (love >= 90) {
        urara.say([
          'ちゅっ～つまり今夜は ',
          self_call,
          '、大丈夫だよ？だから……',
          callname,
          '、',
          self_call,
          ' と一緒にいる？',
        ]);
        era.print([
          '少し大人びた羞じらいを帯びて恋人の顔にキスを落とし、',
          urara.get_colored_name(),
          ' の笑顔の下は潤んだ頬だ。',
        ]);
      } else if (love >= 75) {
        urara.say([
          '帰るとき、',
          self_call,
          '、',
          callname,
          ' の部屋、見に行っていい？み、見るだけだから！',
        ]);
        era.print([
          '',
          urara.teen_sex_title,
          'の欲しがる目で曖昧な言い訳を言い、頬を赤らめた ',
          urara.get_colored_name(),
          ' は、言わずとも伝わっている。',
        ]);
      } else {
        urara.say([
          callname,
          '！今日は、も、もっと ',
          self_call,
          ' に付き合ってくれる？夜、もう少しいて！',
        ]);
        era.print([
          'ごにょごにょしながら ',
          you.get_colored_name(),
          ' の体にすり寄り、',
          urara.get_colored_name(),
          ' は息を荒くして ',
          you.get_colored_name(),
          ' を引き止める。',
        ]);
      }
    } else if (love === 100) {
      urara.say([
        '最近、疲れてる？じゃあ、ちゅっ……えへへ、今日 ',
        callname,
        ' は ',
        self_call,
        ' に、もっとすごいことしていいよ？',
      ]);
      era.print([
        '柔らかい感触が ',
        you.get_colored_name(),
        ' の口元を撫で、つま先立ちの ',
        urara.get_colored_name(),
        ' は軽いキスで',
        urara.sex,
        'の ',
        callname,
        ' に纏綿とした願いを出す。',
      ]);
    } else if (love >= 90) {
      urara.say([
        '',
        self_call,
        ' は寂しくないけど、',
        callname,
        ' が欲しいなら……',
        self_call,
        ' も大丈夫だよ？',
      ]);
      era.print([
        '建前で誘いを出し、別れ際の ',
        urara.get_colored_name(),
        ' は突然とろんとした目で ',
        you.get_colored_name(),
        ' の腰を抱きしめる。',
      ]);
    } else if (love >= 75) {
      urara.say([
        '',
        self_call,
        ' を連れて帰りたい？明日に差し支えなければ、大丈夫だよね……？',
      ]);
      era.print([
        '',
        you.get_colored_name(),
        ' が最初の問いに答える前に、詰め寄る小さな',
        urara.uma_sex_title,
        'は満たされない顔で ',
        you.get_colored_name(),
        ' に二問目を投げる。',
      ]);
    } else {
      urara.say([callname, '、', self_call, ' の体、なんか変……行かないで？']);
      era.print([
        '気が進まないのに、小さな',
        urara.uma_sex_title,
        'は顔を真っ赤にして ',
        you.get_colored_name(),
        ' の服の端を掴む。',
      ]);
    }
    era.printButton('受け入れる', 1);
    era.printButton('断る', 2, { disabled: check === 2 });
    return await era.input();
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
   */
  async after_punish(urara, you, callname, high_relation) {
    await era.printAndWait([
      '羞じらいも忘れたように、見知らぬほど敏感になった体を弄り、今日の ',
      you.get_colored_name(),
      ' はトレーナー室の隅で小さな甘い声を漏らしている。',
    ]);
    await era.printAndWait([
      '鏡の中の体と顔は自分とは思えないほど整っているが、',
      you.get_colored_name(),
      ' は覚めない悪夢に浸ったまま抜けられない。',
    ]);
    await era.printAndWait([
      '軽く触れただけで、この体はかゆくてたまらない……これも改造のせい？それとも、これがウマ娘の体……？',
    ]);
    await era.printAndWait([
      'だが ',
      you.get_colored_name(),
      ' がさらに服を脱ごうとしたとき、鍵のかかっていない後ろの扉から、軽く丁寧なノックが聞こえる。',
    ]);
    await era.printAndWait([
      '扉が開く一秒前、ほとんど目が覚めた ',
      you.get_colored_name(),
      ' は恐怖で跳ねる胸を押さえ、慌てて体を隠す。',
    ]);
    await era.printAndWait([
      '目の前の服の乱れた「ウマ娘のお姉さん」を見て、入ってきた ',
      urara.get_colored_name(),
      ' は無邪気に首をかしげる。',
    ]);
    await urara.say_and_wait([
      'え？',
      callname,
      ' だったんだ。ウララもいつかこうなるって思ってたけど、早すぎない？',
    ]);
    await era.printAndWait([
      '驚いたあと、いつもの笑顔に戻り、すぐ ',
      callname,
      ' だと気づいた小さな',
      urara.uma_sex_title,
      'は、相変わらず素直に ',
      you.get_colored_name(),
      ' のそばに座る。',
    ]);
    await urara.say_and_wait([
      'えへへ～',
      callname,
      ' は ',
      callname,
      ' だね！また一から知り合い直すのかと思った、それ残念すぎる！',
    ]);

    era.printButton('「……ウララ、知ってたの？」', 1);
    await era.input();

    await urara.say_and_wait([
      'うん！ウララ、前にもみんなから聞いたことあるよ。でも ',
      callname,
      ' みたいなのは初めて！',
    ]);
    await urara.say_and_wait([
      'でも ',
      callname,
      '、すごく変わったね。匂いだけはぜんぜん変わってないから、すぐわかったよ！',
    ]);
    await era.printAndWait([
      'そっと両手を伸ばし、',
      urara.get_colored_name(),
      ' は慰めるように ',
      you.get_colored_name(),
      ' の頬を撫で、少し迷ってから上へ辿る。',
    ]);
    await era.printAndWait([
      '担当の悪戯な手が ',
      you.get_colored_name(),
      ' のさらに柔らかくなった髪を撫で、最後に頭頂のまだ言うことを聞かないふわふわのウマ耳を掴む。',
    ]);
    if (high_relation) {
      await urara.say_and_wait([
        callname,
        '、いま不便でしょ？でも大丈夫、ウララが ',
        callname,
        ' の生活、教えてあげる！',
      ]);
      await urara.say_and_wait([
        'ウララ、みんなから聞いたんだけど、',
        callname,
        ' がもっと変わったら、もっとこわいことが起きるらしい……',
      ]);
      await era.printAndWait([
        'こわいことを思い出したように、',
        urara.get_colored_name(),
        ' は震えながら一度止まり、それから慰めるように笑ってそばの ',
        you.get_colored_name(),
        ' を抱きしめる。',
      ]);
      await urara.say_and_wait([
        '大丈夫！本当にそうなっても、ウララが ',
        callname,
        ' の面倒見るから！でも ',
        callname,
        ' がそうならないのがいちばんいいよ！',
      ]);
    } else {
      await urara.say_and_wait([
        'こうなった ',
        callname,
        ' が、これからウララにもっと優しくしてくれたらいいな。でも本当にそうなる？',
      ]);
      await urara.say_and_wait([
        'それにウララ聞いたんだけど、前みたいなままなら、',
        callname,
        '、変な姿になっちゃうらしい……',
      ]);
      await era.printAndWait([
        '急に悲しいことを思い出したみたいに ',
        you.get_colored_name(),
        ' の体をきつく抱き、小さな',
        urara.uma_sex_title,
        'が ',
        you.get_colored_name(),
        ' を見る目も少し複雑になる。',
      ]);
      await urara.say_and_wait([
        '本当にそうなったら……',
        callname,
        ' が嫌でも、ウララが世話するしかないよ？',
      ]);
    }

    await era.printAndWait([
      '小さな ',
      urara.get_colored_name(),
      ' が知っていることは、',
      you.get_colored_name(),
      ' の想像より……いや、あるいは ',
      you.get_colored_name(),
      ' が知っているより多いかもしれない。',
    ]);
    await era.printAndWait([
      'ただ……以前の付き合いがどうであれ、目の前の澄んだ桜色の瞳は、ずっと',
      urara.sex,
      'の ',
      callname,
      ' を気にかけている。',
    ]);
    await era.printAndWait([
      'もう戻れなくても、いまなら遅くない？',
      urara.get_colored_name(),
      ' のためでも、いま変わろうとすればまだ間に合う？',
    ]);
    await era.printAndWait([
      '……少なくとも、遅れたあの一言を',
      urara.sex,
      'に伝えよう。胸の小さな',
      urara.uma_sex_title,
      'を抱きしめ、',
      you.get_colored_name(),
      ' は医務室での初めての抱擁を思い出す……',
    ]);

    era.printButton('「ありがとう……」', 1);
    await era.input();

    await urara.say_and_wait([
      'ん？',
      callname,
      '、なんでお礼？ウララ、まだ何もしてないよ？',
    ]);
    await urara.say_and_wait([
      'でも……',
      callname,
      ' がそうならないために、ウララと ',
      callname,
      '、口だけじゃだめだよ？',
    ]);
    await era.printAndWait([
      '迷子の女の子をなだめるみたいにやさしく ',
      you.get_colored_name(),
      ' の背を叩き、',
      urara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の胸の中で、それでもやさしく笑っている。',
    ]);
    await era.printAndWait([
      'いまこのとき、幼く見える',
      urara.sex,
      'こそ、本当に頼れる「大人」なのかもしれない……',
    ]);
    await urara.say_and_wait([
      'だからウララ決めた、今日から一緒に並走しよ？本気出したら、これから絶対よくなるよね？',
    ]);

    era.printButton('「え？でもこの体、まだ……」', 1);
    await era.input();

    await urara.say_and_wait([
      '心配しないで？約束するよ？',
      callname,
      '、これからウララより速く走れるようになるから！',
    ]);
    await urara.say_and_wait([
      'だから……負けたほうがしっぽ触らせて！えへへ～どうせ ',
      callname,
      ' のしっぽ、起きたてみたいにボサボサでしょ？',
    ]);
    await era.printAndWait([
      '',
      you.get_colored_name(),
      ' が気づく前に、',
      urara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の手を引いてトレーナー室を飛び出し、トレーニング場へ走る。',
    ]);
    await era.printAndWait([
      '',
      you.get_colored_name(),
      ' はまだ何もしていないのに、小さな担当との距離は知らないうちにまた縮まっていた。',
    ]);
    await era.printAndWait([
      'ウマ娘にされたこと……完全に悪いことばかりでもないのか？',
    ]);
  },
  lets_slp: (() => {
    const title = '一緒に寝よう！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        'トレーナー室に入った途端、',
        you.get_colored_name(),
        ' は、寝相が少し快適すぎる ',
        urara.get_colored_name(),
        ' を見つける。',
      ]);
      await era.printAndWait(
        'トレーナー室が心地よすぎるのか、それとも小さな担当はここを「家」みたいにしているのか。',
      );
      await era.printAndWait([
        '脱いだ服を横に無造作に積み、いまの',
        urara.sex,
        'は全身、きつめのピンクのスポーツ下着だけだ。',
      ]);
      await era.printAndWait([
        '桜色の髪としっぽが体の下に自然に広がり、小さくかわいい耳もゆるんで揺れている。',
      ]);
      await era.printAndWait([
        '人形みたいなかわいい顔は安心した表情で、眠ったまま自然に体を伸ばす小さな',
        urara.uma_sex_title,
        'の肌が、灯りに健康な光を返す。',
      ]);
      await era.printAndWait([
        'タイトな下着が',
        urara.teen_sex_title,
        'の柔らかい体に少し食い込み、初々しい肉感と育ちゆく曲線が、つぼみのような体の上で微妙な均衡を保っている。',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '事情あって過剰に豊かな胸は、上半身に残った布をいっぱいに押し広げ、小さな',
          urara.uma_sex_title,
          'の体の上で自由に形を主張している。',
        ]);
      }
      await era.printAndWait([
        'トレーナー室のソファベッドに横たわり、',
        urara.get_colored_name(),
        ' は無防備に愛らしい体を晒している。',
      ]);
      await era.printAndWait([
        'こんなに警戒のないかわいい生き物を前に、小さな',
        urara.uma_sex_title,
        'と初めて出会い、同じベッドで眠ったときと似た考えが ',
        you.get_colored_name(),
        ' の頭に浮かぶ。',
      ]);
      await era.printAndWait([
        'こんなに柔らかい小さな生き物、',
        urara.sex,
        'の邪魔にならなければ撫でてみたくなる。担当のこの様子では、見ている側まで眠くなる。',
      ]);
      await era.printAndWait([
        '仕事が残っていなければ、',
        urara.get_colored_name(),
        ' と少し横になるのも悪くないかもしれない。',
      ]);
      await era.printAndWait([
        'もう大人の ',
        you.get_colored_name(),
        ' は、たとえ ',
        urara.get_colored_name(),
        ' ',
        urara.sex,
        'が許しても、そんな我儘はできないはずだ……',
      ]);
      await era.printAndWait('だがこの無防備な寝相では、お腹を冷やすと困る。');
      await era.printAndWait([
        'そう思い、',
        you.get_colored_name(),
        ' はそばの毛布を取り、',
        urara.get_colored_name(),
        ' を起こさないようそっと近づく。',
      ]);
      await urara.say_and_wait(['ん？', callname, '……？']);
      await era.printAndWait([
        '敏感な小さな耳を揺らし、音を捉えた無防備な',
        urara.teen_sex_title,
        'は薄く目を開け、朦朧とした視線で、毛布をかけようとする ',
        you.get_colored_name(),
        ' を見分ける。',
      ]);
      await era.printAndWait([
        '眠ったままの小さな手が探ったあと、',
        you.get_colored_name(),
        ' の手首に掴まる。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の力を緩めない引っ張りで、',
        you.get_colored_name(),
        ' は毛布ごと担当にベッドへ引き倒される。',
      ]);
      await era.printAndWait([
        '横になった瞬間に腰をきつく巻かれ、いまの ',
        urara.get_colored_name(),
        ' は自分の ',
        callname,
        ' を安眠用の抱き枕にしている。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(['えへへ～', callname, ' の感じ……']);
        await era.printAndWait([
          '完全に夢の中の反応で、',
          urara.get_colored_name(),
          ' は満足そうに ',
          you.get_colored_name(),
          ' の体にすり寄る。',
        ]);
        await era.printAndWait([
          '弱い呼吸が落ち着き、',
          you.get_colored_name(),
          ' をきつく抱いた',
          urara.teen_sex_title,
          'は安心して深い眠りに落ちる。',
        ]);
      } else {
        await urara.say_and_wait('ん……？あんまり柔らかくない……');
        await era.printAndWait([
          '抱き枕が柔らかくないからか、',
          urara.get_colored_name(),
          ' は眠ったまま少し不満そうに口を尖らせる。',
        ]);
        await era.printAndWait([
          '',
          you.get_colored_name(),
          ' の不親切を小さな声でこぼしているのに、',
          urara.get_colored_name(),
          ' は手を離す気配がない。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '首筋に埋まった髪が甘い香りを放ち、小さな',
        urara.uma_sex_title,
        'の鎮めるような匂いは肌の触れ合いを伝って、悪戯に ',
        you.get_colored_name(),
        ' の鼻へ潜り込む。',
      ]);
      await era.printAndWait(
        '気が緩むにつれて視界がぼやけ、両手はまだかけきっていない毛布すら掴みきれなくなる。',
      );
      await era.printAndWait([
        '仕事が残っているどころか、横になった瞬間に睡魔は止められない。だが ',
        urara.get_colored_name(),
        ' と一緒に眠るのも悪くない。先に一眠りしても遅くはない。',
      ]);
      await era.printAndWait(
        'また目を覚ましたら仕事は山ほど溜まっているだろう。だが、刃を研いでも薪割りは遅くならない……',
      );
      await era.printAndWait([
        '自分を説得しながら、',
        you.get_colored_name(),
        ' は眠る前に毛布を二人にかけ、',
        urara.get_colored_name(),
        ' と一緒に、珍しい休息へ落ちていく。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '恥知らずで、妬ましいくらいですわ……いいえ、加わりたいわけでは、本当にありません……',
      );
    };
    f.title = title;
    return f;
  })(),
  time_cap: (() => {
    const title = 'タイムカプセルだよ？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait(
        '今日の中庭は誰もいない。あの枯れうろも、芝生の真ん中で静かに周りを見守っている。',
      );
      await era.printAndWait([
        'おなじみの切り株の縁に座り、そばでもう特別な意味を持った ',
        you.get_colored_name(),
        ' を見つめ、今日の ',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' にいつもと違う話を投げる。',
      ]);
      await urara.say_and_wait([
        callname,
        '、この前ね、みんなとタイムカプセル作ったんだよ！',
      ]);

      era.printButton('「おもしろそうだね！」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！みんな慌てて、書いた文もぐちゃぐちゃだったけど、本当に楽しかった！',
      );
      await urara.say_and_wait(
        'それでね、書き終わって埋めるとき、場所はいろいろ話したけど、やっぱりいつものところにしたよ！',
      );
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' の視線を追い、',
        you.get_colored_name(),
        ' も黙ったうろを見る。うろの足元の芝生の一部に、たしかに掘り返した跡がある。',
      ]);
      await era.printAndWait([
        '他の人には意外でも、トレセンの',
        urara.uma_sex_title,
        'たちには、なるほどという選択だ。',
      ]);

      era.printButton('「でも、なんでわざわざ教えてくれたの？」', 1);
      await era.input();

      await urara.say_and_wait([
        'あれ……え、たぶん ',
        callname,
        ' は木のうろさんみたいに、秘密を守るのが上手だから！',
      ]);
      await era.printAndWait([
        '表情が一瞬止まってから、小さな',
        urara.uma_sex_title,
        'は視線を、誰もいない中庭へ戻す。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は相変わらず明るく笑っているが、',
        urara.sex,
        'はめずらしく何かを温め、少し悩んでいる。いまの',
        urara.sex,
        'は、いつもと違うことを考えているようだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、その明るさの中の一筋の憂いと、ふと見つけた憧れと迷いを察するが、',
        urara.sex,
        'の様子はまだはっきりしない。',
      ]);
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' 自身もまだわかっていないのかもしれない。トレーナーである ',
        you.get_colored_name(),
        ' が、傍聴者の目でたまたまいまそれに気づいただけだ。',
      ]);
      await urara.say_and_wait(
        '将来の夢はみんな違うけど、集合写真の笑顔は一緒だよ！だからこのまま分かれても、みんな嬉しいはず——',
      );
      await urara.say_and_wait(
        'でも、みんな楽しいのに、夢が違うから、分かれる日はいつか来るよね……',
      );
      await era.printAndWait([
        '「楽しい」口調で ',
        you.get_colored_name(),
        ' にタイムカプセルを埋めた話をし、',
        urara.get_colored_name(),
        ' のしっぽと右足は',
        urara.sex,
        'の思考に合わせて、勝手にくるくる回る。',
      ]);
      await era.printAndWait([
        'それから、少し飲み込めたらしい ',
        urara.get_colored_name(),
        ' は、「わかったあと」の笑顔で ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await urara.say_and_wait([
        callname,
        '！分かれる日、',
        callname,
        ' はウララ、名残惜しい？……ウララはぜったい ',
        callname,
        ' が名残惜しいよ、そのときは泣いちゃう！',
      ]);
      await era.printAndWait([
        'それでも笑顔の ',
        urara.get_colored_name(),
        ' は、大人が言いたくても言えないことを、明るく認める。',
      ]);
      await era.printAndWait([
        'いつの間にか大きくなった ',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に微笑み、少し止まっても声は揺れない。',
      ]);
      await urara.say_and_wait([
        'でも、そしたら ',
        callname,
        ' も悲しいよね？だからそのときが来ても、ウララ、泣かないようにがまんする！',
      ]);
      await era.printAndWait([
        'いつの間にか ',
        you.get_colored_name(),
        ' のそばにぴったり寄り、ピンクの影がかすかに震えている。それは ',
        you.get_colored_name(),
        ' の錯覚ではない。だが ',
        urara.get_colored_name(),
        ' は笑ったまま、',
        you.get_colored_name(),
        ' の指を絡める。',
      ]);
      await urara.say_and_wait([
        'だからそのとき ',
        callname,
        ' も泣かないで！約束だよ！',
        callname,
        ' とウララ、ぜったいまた会えるから！',
      ]);
      await era.printAndWait([
        '桜色の瞳が薄い涙の中で咲き、いま懸命に耳を立てようとする',
        urara.sex,
        'は、誰にも負けない重い、誠実な気持ちを抱えている。',
      ]);
      await urara.say_and_wait([
        '関係がどうなっても、これからどこに行っても、ウララは ',
        callname,
        ' を覚えてる！だから、だから……',
      ]);

      era.printButton(
        '「だから約束したよ？未来で分かれても、また会える。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '担当が本当に涙を落とす前に、',
        you.get_colored_name(),
        ' が先に誓い、',
        urara.sex,
        'に大人の抱擁を贈る。',
      ]);
      await era.printAndWait(
        '衝動で動くな、安易に誓うな、誰との約束も軽んじるな、約束する前に果たせるか考えろ——',
      );
      await era.printAndWait([
        'それを ',
        you.get_colored_name(),
        ' は全部知っている。だがいま、知らないうちに成長した ',
        urara.get_colored_name(),
        ' に惹かれた ',
        you.get_colored_name(),
        ' は、心のままに唯一の答えを出す。',
      ]);
      await era.printAndWait([
        '契約を結んだときと似て非なる鼓動を感じ、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の柔らかい髪を撫で、',
        urara.sex,
        'の目尻の涙を拭う。',
      ]);

      era.printButton('「一緒に帰ろう！」', 1);
      await era.input();

      await urara.say_and_wait('うん！');
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'そうなのですね。では未来のウララが、そのとき願いを叶えられますように……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '未来のあなたも、変わっても、この',
        urara.teen_sex_title,
        'との約束を守れますように……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  rof_time: (() => {
    const title = 'ぼんやり屋上時間';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '成長しても、いまの ',
        urara.get_colored_name(),
        ' は子供の生活習慣をまだ完全には直せない。',
      ]);
      await era.printAndWait([
        'さっき疲れすぎた？昼ごはんが少し遅れただけなのに、',
        urara.get_colored_name(),
        ' はもう眠気モードに入りかけている。',
      ]);
      await era.printAndWait([
        '食事前にうとうとする担当の小さな顔を見ながら、',
        you.get_colored_name(),
        ' は二人分の弁当箱を出し、屋上のベンチに場所を空ける。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'は主観では早く大人になりたいが、本当に大きくなるにはまだ時間がいる。',
      ]);
      await era.printAndWait([
        'それでもご飯は時間通りに食べるものだ。',
        urara.get_colored_name(),
        ' の眠そうな顔を見て、',
        you.get_colored_name(),
        ' は少し考える。',
      ]);
      await era.printAndWait('手段がないわけではない。ただ……');

      era.printButton(
        '「ウララ、本当に眠いなら力抜いて。俺が食べさせるよ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '',
        you.get_colored_name(),
        ' の提案を聞いて、ふらふらの ',
        urara.get_colored_name(),
        ' は一度固まり、目を擦りながら ',
        you.get_colored_name(),
        ' に眠そうな笑顔を無理に作る。',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          'ベンチに素直に座り、',
          urara.get_colored_name(),
          ' は餌を待つ雛みたいに恥ずかしそうに目を閉じ、小さな口を開ける。',
        ]);
        await era.printAndWait([
          '箸を出し、卵焼きをひとかけ軽く挟み、鳥の母親役の ',
          you.get_colored_name(),
          ' は慎重に小鳥の口へ運ぶ。',
        ]);
        await era.printAndWait([
          '半分を軽く噛み、',
          urara.get_colored_name(),
          ' は目を閉じたまま ',
          callname,
          ' が食べさせた料理を味わう。',
        ]);
        await era.printAndWait([
          '安心して飲み込んだあと、小さな',
          urara.uma_sex_title,
          'は満足げに箸の残り半分も食べる。',
        ]);
      } else {
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'は少し気が進まなそうだが、疲れが勝った',
          urara.sex,
          'はそれでも ',
          you.get_colored_name(),
          ' に少し寄る。',
        ]);
        await era.printAndWait([
          '',
          urara.get_colored_name(),
          ' が食べてくれるかまだわからず、',
          you.get_colored_name(),
          ' は試しに箸で唐揚げを挟み、担当のほうへ寄る。',
        ]);
        await era.printAndWait([
          '少し迷っても、揚げ物の匂いを嗅いだあと、',
          urara.get_colored_name(),
          ' は素直に小さな口を開けて肉を噛む。',
        ]);
        await era.printAndWait([
          '小さな咀嚼と飲み込む音とともに、小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' の食べさせでだんだん安心していく。',
        ]);
      }
      era.println();
      await era.printAndWait('今回の味が悪くなくてよかった。');
      await era.printAndWait([
        '担当のゆっくりした咀嚼を待ち、',
        you.get_colored_name(),
        ' は箸でもう一品を挟む。',
      ]);
      await era.printAndWait([
        '丁寧に ',
        urara.get_colored_name(),
        ' へ食べさせ、ティッシュで',
        urara.sex,
        'の口角を拭いているうち、妙な感覚が ',
        you.get_colored_name(),
        ' を包んでいく。',
      ]);
      await era.printAndWait([
        'もともと同い年より幼く見え、いまは元気もなくてふにゃふにゃなので、小さな',
        urara.uma_sex_title,
        'はますます本物の子供みたいだ。',
      ]);
      await era.printAndWait([
        'でもかわいい。',
        urara.get_colored_name(),
        ' が人から離れられない小さなペットみたいなままだったら、それも悪くない？',
      ]);
      await era.printAndWait([
        'とりとめのない考えのあいだに、手の弁当箱は ',
        you.get_colored_name(),
        ' の小さな生き物への給餌でだんだん空になっていく。',
      ]);
      await era.printAndWait(
        'ただ、このぼんやりした食事のあと……やっぱり子供、と言うべきか。',
      );
      await era.printAndWait([
        '満足げに食べ飽きたあと、もともとふらふらだった ',
        urara.get_colored_name(),
        ' は食後の眠気でさらに支えきれない。',
      ]);
      await era.printAndWait(
        'こうなることも、たぶん担当トレーナーの予想の内だ。',
      );

      era.printButton(
        '「いまは少し目を閉じて。用事があれば先にウララを呼ぶから。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '倒れそうな担当を前に、',
        you.get_colored_name(),
        ' は三分の諦めを込めて太ももを叩く。',
      ]);
      await era.printAndWait([
        '考えも態度ももうどうでもいい。',
        you.get_colored_name(),
        ' の休息の提案を聞くと、小さな',
        urara.uma_sex_title,
        'はすぐ踏ん張っていた体を緩める。',
      ]);
      await era.printAndWait([
        '待ちきれずに伸びをして ',
        you.get_colored_name(),
        ' へ倒れ、',
        you.get_colored_name(),
        ' の太ももを枕に屋上のベンチで丸まり、',
        urara.get_colored_name(),
        ' はすぐに熟睡する。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' はやっぱり子供だろう。だが',
        urara.sex,
        'がそんな良い子だからこそ、今日の小さな',
        urara.uma_sex_title,
        'の癒しは一級だ。',
      ]);
      await era.printAndWait([
        '',
        you.get_colored_name(),
        ' の膝の上で穏やかに呼吸するピンクの小さな生き物を撫で、',
        you.get_colored_name(),
        ' も気持ちよく自分の弁当を取る。',
      ]);
      await era.printAndWait('今日の空は本当にいい。');
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' は拒むかもしれないが、二人の弁当箱は今日、',
        urara.sex,
        'の ',
        callname,
        ' が片付けることにしよう。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'はぁ、いいですね……いいえ、羨ましいわけでは……',
      );
    };
    f.title = title;
    return f;
  })(),
  spe_mach: (() => {
    const title = '隅の変な機械';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_19 ハルウララのアグネスデジタルへの呼び方
     * @param {PrintedSpan} call_30 ハルウララの呼び方
     */
    const f = async (urara, inner_urara, you, callname, call_19, call_30) => {
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await urara.print_and_wait([
        'ある外出のとき、',
        callname,
        ' が少し胃の調子で席を外し、ひとり残された ',
        urara.get_colored_name(),
        ' は好奇心に任せて周りを探索し始める。',
      ]);
      await urara.print_and_wait([
        '賞品の違うクレーンゲームのあいだを縫っていると、',
        urara.get_colored_name(),
        ' はすぐに、今まで気づかなかった一台に惹かれる。',
      ]);
      await urara.print_and_wait(
        'その地味な機械は狩りをする蜘蛛みたいに暗い隅に座り、質素な筐体と暗いピンクの灯りが中の謎の賞品を隠している。',
      );
      await urara.print_and_wait(
        '機械の隅の「目白城製」は、ここにあってよいはずがないと証明するが、この隠れた隅を見つけた時点でもう遅い。',
      );
      await urara.print_and_wait([
        '小さな',
        urara.uma_sex_title,
        'は一瞬でこの幻覚じみた機械に魂を掴まれ、驚きで声が出そうな口を押さえても、中の「サプライズ」に視線を奪われている。',
      ]);
      await urara.print_and_wait([
        '薄暗いピンクの光の下、禍々しい器具たちが衝撃的に積み上がり、薄いガラス越しに',
        urara.sex,
        'へ誘惑の指先を伸ばしている。',
      ]);
      await urara.print_and_wait(
        '早く離れなければとわかっているのに、普段いちばん素直な両脚は主人の意思に逆らい、桃色の罠へ少しずつ寄っていく。',
      );
      await urara.print_and_wait([
        '穴に飛び込む前に一瞬迷うアリスみたいに、',
        urara.teen_sex_title,
        'は未知のざわめきのなかで耳を折り、震える手を投入口へ伸ばす。',
      ]);
      await urara.print_and_wait(
        '他ののろいクレーンと違い、この不気味な機械は動き出した瞬間からレバーの命令を真っ直ぐ実行する。',
      );
      await urara.print_and_wait(
        '力強い掴みと安定した運搬のあと、大きすぎる爪は少し潰れたギフト箱を簡単に吐き出す。',
      );
      await urara.print_and_wait([
        '肝を冷やしながら適当に掴んだものを取り出し、',
        urara.get_colored_name(),
        ' は少しの僥倖を抱えて、ランドセルに隠せる小さな箱を開ける。',
      ]);
      await urara.print_and_wait([
        '透明な窓越しに、ショーケースの禍々しい器具よりずっと小さいのに、',
        urara.get_colored_name(),
        ' は目の前の「現物」に圧倒される。',
      ]);
      await urara.print_and_wait([
        'これは',
        urara.sex,
        'が ',
        call_30,
        ' と ',
        call_19,
        ' の隠していた変な漫画で見た「おもちゃ」だが、型は違う。',
      ]);
      await urara.print_and_wait([
        '尖った頭と楕円の胴の金属プラグが',
        urara.child_sex_title,
        'の手で冷気を放ち、短い金属棒でつながった柔らかい台座の下には黒い強力吸盤がついている。',
      ]);
      await urara.print_and_wait([
        '手に取ってから、小さな',
        urara.uma_sex_title,
        'はそれが細長い梨ほどもあると気づく。これは絶対に「初心者」用ではない。',
      ]);
      await urara.print_and_wait([
        '心を失ったみたいに、',
        urara.teen_sex_title,
        'の桜色の瞳は灯りで色っぽい濃いピンクになり、',
        urara.sex,
        'はぼんやりと隅でスカートと上着をめくる……',
      ]);
      await urara.say_and_wait('だ、大丈夫……ちょっと、ちょっと試すだけ……');
      await urara.print_and_wait([
        '小さな声で自分を説得しながら、',
        urara.get_colored_name(),
        ' は包装の指示どおり、吸盤を床に固定する。',
      ]);
      await urara.print_and_wait([
        urara.teen_sex_title,
        'は陰で片手でスカートを解き、スパッツと下着を脱いで横に投げ、もう一方の手でしっぽを軽く払う。',
      ]);
      await urara.print_and_wait([
        '漫画の被虐のヒロインを真似て、下半身裸の小さな',
        urara.uma_sex_title,
        'は四つん這いでゆっくり身をかがめる。',
      ]);
      await urara.print_and_wait([
        '冷たい空気に晒された後穴は秘裂と同じく緊張して収縮し、震えながらアナルプラグの金属の先端に合わせる。',
      ]);
      era.println();
      if (era.get('exp:52:肛交次数') >= 10) {
        await urara.print_and_wait([
          '先端の冷たい感触が沈むと、',
          urara.teen_sex_title,
          'は体を抑え、この少し過大な長いプラグを辛抱強く飲み込もうとする。',
        ]);
        await urara.print_and_wait([
          'だが',
          urara.sex,
          'は自分の経験と性の耐性を過信し、この小さな',
          urara.sex_slave_title,
          'の体がどれほど淫らなのかを見誤った。',
        ]);
        await urara.print_and_wait(
          '両脚が力を失うと、菊穴は下向きの重力のなか、準備もなく巨大な金属を丸ごと飲み込む……',
        );
      } else {
        await urara.print_and_wait([
          '先端の冷たい感触が、',
          urara.teen_sex_title,
          'の緩みかけた菊穴を引き締め、',
          urara.sex,
          'に一筋の理性的な退きを戻す。',
        ]);
        await urara.print_and_wait(
          'だが鍛えられた両脚は敏感すぎて、体の催情の信号に触れた瞬間に力を失う。',
        );
        await urara.print_and_wait([
          urara.teen_sex_title,
          'は滑るように膝をついて床に落ち、巨大なアナルプラグが一瞬で後部に丸ごと飲み込まれる……',
        ]);
      }
      era.println();
      await urara.print_and_wait([
        '悲鳴を出す余裕もなく、小さな',
        urara.uma_sex_title,
        'は突然の刺激で下半身を固くして前へ倒れる。',
      ]);
      await urara.print_and_wait([
        '底の吸盤が「プクッ」と床の吸い付きから外れ、',
        urara.get_colored_name(),
        ' の小さな体は冷たい床に重く伏す。',
      ]);
      await urara.print_and_wait([
        '生まれつき淫らな体は異常な性器の突入で連なって頂点へ押し上げられ、脳が瞬時に落ちた小さな',
        urara.uma_sex_title,
        'の喉は声にならない音を押し出す。',
      ]);
      await urara.print_and_wait(
        '孕む準備のような姿勢で無力に床に伏し、荒い息の淫らなピンクは小さな懇願にも、蕩けた悲鳴にも聞こえる。',
      );
      await urara.print_and_wait(
        '体を支える力すら消え、腕は体の揺れに合わせて無力に床を引きずる。',
      );
      await urara.print_and_wait(
        '幼い顔は凌辱を受けているみたいに、自分の体に床へ押しつけられて擦られる。',
      );
      await urara.print_and_wait(
        '尻としっぽも発情期に肉棒へ頭を下げる雌みたいに、快感のなかで無意識に高く上がる。',
      );
      await urara.print_and_wait(
        '生まれつき淫らな後穴は甘い飴を吸うみたいに、巨大な球体を貪欲に奥へ締め続ける。',
      );
      await urara.print_and_wait([
        '小さな',
        urara.sex_code - 1 ? '牝馬' : '牡馬',
        'の育ちすぎた蜜尻は法外な大きさではないが、厚く柔らかい尻肉は締めつけて台座を変形させ、跡も残さず包み込む。',
      ]);
      await urara.print_and_wait(
        '恐怖と快感の混ざった涙、涎と汗は、両脚のあいだで抑えきれない愛液とともに、下の滑らかな床タイルを濡らす。',
      );
      era.println();
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait(
          '二つの白い膨らみが体とともに荒く震え、発情した乳首は壊れた蛇口みたいに白い汁を勝手に押し出す。',
        );
        await urara.print_and_wait(
          '強い絶頂が続き、白い媚肉は主人が慌てるほど母乳を搾り出し、誰かが牛乳を半分箱、悪戯に床へこぼしたみたいだ。',
        );
        await urara.print_and_wait(
          '先に服をめくり胸帯を解いていなければ、噴き続ける淫らな胸は内側から布を、人に見せられないほど濡らしていただろう。',
        );
        era.println();
      }
      await urara.print_and_wait(
        'さまざまな液体が激しく途切れず壁際のタイルと床へ飛び、ゲームセンターの誰もいない隅を一枚に染める。',
      );
      await urara.print_and_wait([
        '水音が何度か止まったあと、少し力と理性を取り戻した小さな',
        urara.uma_sex_title,
        'はやっと何かを思い出し、淫らな体を引きずるようにみっともなく這い始める……',
      ]);
      await urara.print_and_wait([
        '並んだ筐体を支えに歩き、',
        urara.get_colored_name(),
        ' はやっと、下腹に硬いものが触れる体にどうにか慣れる。',
      ]);
      await urara.print_and_wait([
        '半ば隠した淫らな格好のまま、小さな',
        urara.uma_sex_title,
        'はそれでも ',
        callname,
        ' より先に、半ば這って待ち合わせの場所へ戻る。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '遅れて来た ',
        you.get_colored_name(),
        ' は、顔を赤くして荒い息の ',
        urara.get_colored_name(),
        ' を見て、驚いて眉を上げる。',
      ]);

      era.printButton(
        '「どうした？体の調子が悪い？つらいならもう少し休もう……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' はもちろんある程度察しているが、',
        urara.get_colored_name(),
        ' のためなら、いまは知らないふりしかない。',
      ]);
      await era.printAndWait([
        '何も知らないふりをした ',
        you.get_colored_name(),
        ' の気遣いを前に、もう考える力のない ',
        urara.get_colored_name(),
        ' は本能で震える両脚を押さえるだけだ。',
      ]);
      await era.printAndWait([
        'だが無理な笑顔の',
        urara.sex,
        'は、今回は意外なほどきっぱり「大丈夫！」と言い、自分で歩いて帰ると言い張る。',
      ]);
      await era.printAndWait([
        '押し問答のあと、敏感な体に自信のない小さな',
        urara.uma_sex_title,
        'はそれでもどうにか ',
        you.get_colored_name(),
        ' の支えを受け入れる。',
      ]);
      await era.printAndWait([
        'もともと知らないふりをしている ',
        you.get_colored_name(),
        ' も、緊張して担当に密着して支えながら、',
        urara.sex,
        'が残したほかの異常はできるだけ見ないことにする。',
      ]);
      await era.printAndWait([
        'たとえば ',
        urara.get_colored_name(),
        ' が立ち上がった回転椅子に、円い吸盤型の押し跡の水染みが残っている。',
      ]);
      await era.printAndWait([
        'たとえば帰り道、小さな',
        urara.uma_sex_title,
        'は不自然な痙攣で何度も足を緩める。',
      ]);
      await era.printAndWait(
        'たとえばチャックを閉め忘れたランドセルの中、圧痕のついたピンクの箱が揺れに合わせて見え隠れする……',
      );

      await era.printAndWait([
        '',
        you.get_colored_name(),
        ' がふらふらの ',
        urara.get_colored_name(),
        ' を寮まで連れて戻るまで、まだ震えている',
        urara.sex,
        'は ',
        you.get_colored_name(),
        ' にまともな一文も言えない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も事が特殊すぎて、発情した担当のそばで生理反応は起きなかった。外で余計なことをしなくてよかった、と ',
        you.get_colored_name(),
        ' は安堵もする。',
      ]);
      await era.printAndWait([
        'だが下を見ると、担当の足元で銀糸を引き続けている ',
        you.get_colored_name(),
        ' は、結局我慢できなくなる……',
      ]);
      await era.printAndWait([
        '逃げ出す ',
        you.get_colored_name(),
        ' の背中を見て、まだ淫らな水を垂らす ',
        urara.get_colored_name(),
        ' の顔に、一瞬……物足りなさが過る？',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '淫らな小さな',
        urara.uma_sex_title,
        'は、いつかまた隅の魔性の機械へ手を伸ばすかもしれませんわ……',
      ]);
      await inner_urara.say_as_unknown_and_wait('うっ……わ、もうだめです……');
    };
    f.title = title;
    return f;
  })(),
  spe_item: (() => {
    const title = '特別賞品';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
     * @param {PrintedSpan} call_14 ハルウララのエルコンドルパサーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      halo,
      you,
      callname,
      call_1,
      call_14,
      call_61,
    ) => {
      await era.printAndWait([
        'トレーナー室の冷蔵庫に足りない食材を補充するため、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は商店街へ買い出しに来た。',
      ]);
      await era.printAndWait([
        '食品の買い出しだけのつもりだったのに、帰り際、なぜか人だかりに視線を吸われる。',
      ]);
      await era.printAndWait(
        'その空気に染まったのか、だんだん似てきた担当とトレーナーも、息を合わせて人ごみに潜り込む。',
      );
      await era.printAndWait(
        'レバーとともに回る多角形の箱が、乾いた音を立てて止まり、また一人、ティッシュを増やした残念な人が増える……',
      );
      await you.say_and_wait(
        'でも商店街の抽選は、たしか抽選券がいるはずだよな。じゃあ俺たちは……？',
      );
      await era.printAndWait([
        '振り返った瞬間、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' がポケットを探ったあと、手品みたいに抽選券を一枚取り出すのを見る。',
      ]);
      await era.printAndWait([
        '……うん、商店街の小さなアイドル ',
        urara.get_colored_name(),
        ' なら、それはとても自然なことだ。',
      ]);
      await era.printAndWait([
        '目を輝かせて待ちきれない ',
        urara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' もさりげなく',
        urara.sex,
        'に親指を立てる。',
      ]);
      await urara.say_and_wait([callname, '！一緒に回すよ！いちに——！']);
      await era.printAndWait([
        'はしゃぐ ',
        urara.get_colored_name(),
        ' の誘いに、',
        you.get_colored_name(),
        ' は前に出て担当と一緒にレバーを下ろす。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の期待に満ちた視線の中、箱は回転しながら違う乾いた音を立て続け、そして——',
      ]);

      await you.say_as_passer_by_and_wait(
        'スタッフA',
        'おっ！特別賞だ、ちょっと待ってて！',
      );
      await era.printAndWait(
        '抽選を仕切るスタッフが振り返って机の下を探したあと、箱入りの丸頭の電動マッサージ器を出す。',
      );
      await era.printAndWait([
        '',
        urara.get_colored_name(),
        ' は箱を受け取ってしばらく眺め、ふと思い出したみたいに顔を上げる。',
      ]);
      await urara.say_and_wait([
        'あ、これ知ってる！',
        call_61,
        ' も持ってるよ！みんなで貸し借りして——',
      ]);
      await era.printAndWait(
        'マッサージ器を貸し借りするなんて、仲がいいなあ。でもなんで自分で買わない？',
      );
      await era.printAndWait([
        'たとえ ',
        you.get_colored_name(),
        ' の疑問が口に出なくても、',
        urara.get_colored_name(),
        ' はすぐ次の一句で答えを出す。',
      ]);
      await urara.say_and_wait([
        'うん！みんな夜、これで脚の間を押すんだよ！そのときみんな、ああいう、ああいう……',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'が何かを思い出して詰まり、羞恥の赤が頬から ',
        urara.get_colored_name(),
        ' の頭頂までそっと上る。',
      ]);
      await urara.say_and_wait([
        'みんなあまり服を着てなくて、すごく、すごく大人みたいな声も出して、そういう……',
      ]);

      era.printButton('「……？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' がもごもご言い終えたあと、',
        you.get_colored_name(),
        ' もスタッフも、周囲の人まで動きを止める。',
      ]);
      await era.printAndWait([
        '自分が何か間違えたのか疑い、',
        urara.get_colored_name(),
        ' も一瞬きょとんとしてから、急に怖いくらい静かになった人ごみをきょろきょろ見回す。',
      ]);
      await urara.say_and_wait([
        'え？違うの？でも ',
        call_61,
        ' は本当にああやって使うし、',
        call_1,
        ' と ',
        call_14,
        ' も……',
      ]);
      await urara.say_and_wait([
        'で、でも使い終わるとみんな気持ちよさそうな顔するよ！汗もいっぱい！そ、その……',
      ]);
      await era.printAndWait([
        '周囲のひそひそが増えていくなか、',
        urara.get_colored_name(),
        ' はまだ無邪気で恥じらいのある顔のまま何かを言っている。',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await era.printAndWait('だめだ、このままじゃ範囲社会的死亡が起きる！');
      await era.printAndWait([
        'まずいと察した ',
        you.get_colored_name(),
        ' は、すぐ気づいたスタッフと目を合わせる。',
      ]);
      await era.printAndWait([
        'スタッフが気をそらすための掛け声のなか、',
        you.get_colored_name(),
        ' はまだ何か言いたそうな担当の手を引いて現場から逃げる。',
      ]);
      await era.printAndWait([
        '一路駆けてトレセンに戻り、',
        urara.get_colored_name(),
        ' を寮の玄関に置いたあと、',
        you.get_colored_name(),
        ' はようやく息を吐く。',
      ]);
      await era.printAndWait([
        'だが帰る前、',
        urara.get_colored_name(),
        ' はもごもごしながらも異常なほど強く、',
        you.get_colored_name(),
        ' にそのマッサージ器をせがむ。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'に服を掴まれ、逃げられも折れられもしない ',
        you.get_colored_name(),
        ' は、仕方なくマッサージ器を ',
        urara.get_colored_name(),
        ' に渡す。',
      ]);
      await era.printAndWait([
        '担当が手を離した瞬間 ',
        you.get_colored_name(),
        ' は後悔するが、今から寮へ飛び込んだ',
        urara.sex,
        'を追うのはもう無理だ。',
      ]);
      await era.printAndWait(
        '好奇心盛りの年頃で何でも試したくなるのは仕方ないが、さすがにこれは……',
      );
      await era.printAndWait([
        'あとで、機会を見て ',
        halo.get_colored_name(),
        ' に何か言っておこう。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……でも、心配はいらないはず。若いころの過ち、ということにしておきましょうか？',
      );
    };
    f.title = title;
    return f;
  })(),
  cor_game: (() => {
    const title = '隅のゲーム？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, gs, you, callname) => {
      await era.printAndWait('やはりこの映画は、人間にはまだ早すぎる。');
      await era.printAndWait([
        '懐で安らかに眠る ',
        urara.get_colored_name(),
        ' を抱え、',
        you.get_colored_name(),
        ' は危機の場面でも同じ台詞を繰り返す役者たちにため息をつく。',
      ]);
      await era.printAndWait([
        '刺激的なホラー映画のはずが、上映が始まった瞬間から ',
        you.get_colored_name(),
        ' の懐に潜り込んだ ',
        urara.get_colored_name(),
        ' は、わけのわからない展開ですぐ眠ってしまった。',
      ]);
      await era.printAndWait([
        '今スクリーンの、仮面をかぶった',
        urara.uma_sex_title,
        'もどきのおかしな生き物は、どう見ても ',
        gs.get_colored_name(),
        ' に似ている……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' はまた奇声に睡眠を邪魔されたらしく、耳を折り、',
        you.get_colored_name(),
        ' の体にすり寄ってもっと眠りやすい姿勢に変える。',
      ]);
      await era.printAndWait([
        'また美味しいものを夢見たのか、寝つきの悪い小さな',
        urara.uma_sex_title,
        'はキスみたいに ',
        you.get_colored_name(),
        ' の首の内側を吸ったり噛んだりしてやまない。',
      ]);
      await era.printAndWait([
        '傍から見れば幼い子に求められる禁断の光景かもしれないが、',
        you.get_colored_name(),
        ' は知っている。',
        urara.get_colored_name(),
        ' はきっと大根に関することを夢に見ているのだ。',
      ]);
      await era.printAndWait([
        'とはいえ、',
        you.get_colored_name(),
        ' の意志力も確かに大きな試練を受けている。',
      ]);
      await era.printAndWait([
        '尻尾をゆっくり ',
        you.get_colored_name(),
        ' の太ももに絡め、',
        urara.teen_sex_title,
        'の健康で肉感的な体は相変わらず ',
        you.get_colored_name(),
        ' の敏感なところを往復して擦る。',
      ]);
      await era.printAndWait([
        'キス痕みたいな跡が',
        urara.teen_sex_title,
        'の粘っこい吸い音とともに増え続けるが、その魅惑的な桜色のかたまりは止まる気配がない。',
      ]);
      await era.printAndWait([
        '出会ったときの同衾が、まだ精神のおかしかった ',
        you.get_colored_name(),
        ' の落ち度で、',
        urara.get_colored_name(),
        ' はただの無垢な小さな',
        urara.uma_sex_title,
        'だったとしても……',
      ]);
      await era.printAndWait(
        '今度は無垢なサキュバスみたいな担当が、夢の中で好意のあるトレーナーを無意識に誘惑しているのだ。',
      );
      await era.printAndWait([
        '少なくとも今の ',
        you.get_colored_name(),
        ' は、ゆっくり上げた自分の手にそんな言い訳を探している。',
      ]);

      await inner_urara.say_as_unknown_and_wait(
        'ちょ、ちょっと、今ならまだ手を引けます——',
      );
      era.printButton('「このエッチな子馬に仕返し……」', 1);
      era.printButton('「やめよう、我慢だ！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '眠ったまま身を翻す ',
          urara.get_colored_name(),
          ' に乗じて、',
          you.get_colored_name(),
          ' は暗い映画館で担当の服の下へ手を入れる。',
        ]);
        await era.printAndWait(
          'この映画はそもそもほとんど客がいないし、無人の最後列はもともと最高の隠れ蓑だ。',
        );
        await era.printAndWait([
          '片手は試しに服の上から、',
          urara.teen_sex_title,
          'のまだ青い峰をいじり、もう片手は',
          urara.teen_sex_title,
          'のスカートの下へ入り、',
          urara.uma_sex_title,
          'の敏感な太もも内側を撫でる。',
        ]);
        await era.printAndWait([
          '少し急になった吐息で ',
          you.get_colored_name(),
          ' の指は一瞬止まるが、何かに気づいても小さな',
          urara.uma_sex_title,
          'はまだ目を覚まさない。',
        ]);
        await era.printAndWait([
          '指先はさらに深く、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' のスパッツをめくり、最後の一枚の布越しに',
          urara.teen_sex_title,
          'の秘密を撫でる。',
        ]);
        await era.printAndWait([
          'スクリーンの騒音が',
          urara.teen_sex_title,
          'の夢の中の嬌声を覆い、',
          you.get_colored_name(),
          ' はその天然の隠れ蓑のなかで、ほどよく',
          urara.sex,
          'の柔らかく敏感な三点をいじり続ける。',
        ]);
        await era.printAndWait([
          '同時に、欲張りな担当が ',
          you.get_colored_name(),
          ' に残した痕を思い、仕返し心が膨らんだ ',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'の首の柔らかい肌を狙って強くキスする。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'の体が突然震えると、',
          you.get_colored_name(),
          ' のスパッツに入れた手に少し湿った感触が来る。まさか',
          urara.sex,
          'は……？',
        ]);
        await era.printAndWait([
          '度肝を抜かれた ',
          you.get_colored_name(),
          ' は急に手を引っ込め、',
          urara.get_colored_name(),
          ' も体の催促でようやく朦朧と目を開ける。',
        ]);
        await urara.say_and_wait([callname, '～映画……ううんんんん——？！']);
        await era.printAndWait([
          '寝起きのぼんやりのなか、',
          urara.get_colored_name(),
          ' の幼い体は ',
          you.get_colored_name(),
          ' が積み上げた刺激で震えて決壊する——',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の股間から伝わるしとしととした水音のなか、',
          you.get_colored_name(),
          ' はようやく思い出す。映画が退屈すぎて、',
          urara.sex,
          'は眠る前に大きなドリンクを一気に飲んでいた……',
        ]);
        await era.printAndWait([
          '詫びながら、',
          you.get_colored_name(),
          ' は「うっかり」失禁して泣きじゃくる ',
          urara.get_colored_name(),
          ' を慰めつつ、',
          urara.sex,
          'をトイレへ連れていく。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'を早めに連れて帰る道中、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' の秘部に触れた手が、まだ湿って粘っこい気がしてならない……',
        ]);
      } else {
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' が ',
          urara.get_colored_name(),
          ' を起こそうとしたとき、小さな',
          urara.uma_sex_title,
          'はまた身を翻して、ちょうど ',
          you.get_colored_name(),
          ' の前に止まった指を噛む。',
        ]);
        await era.printAndWait([
          '温かく柔らかい舌が ',
          you.get_colored_name(),
          ' の指先を絡め、',
          you.get_colored_name(),
          ' の指を少しずつ口の中へ巻き込む。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'は小さな口を一生懸命開け、指は舌先の愛撫に従って ',
          you.get_colored_name(),
          ' の制御を離れ、自ら温かく柔らかい奥へ入っていく。',
        ]);
        await era.printAndWait([
          '幻惑的な吸い音を立て続ける小さな担当を見て、',
          you.get_colored_name(),
          ' は少し息が詰まるのに、視線を外せない。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          ' は無垢で、とても淫らな子だ」。',
        ]);
        await era.printAndWait([
          urara.sex,
          'に初めて会ったときから ',
          you.get_colored_name(),
          ' はそんな下品な予感を抱いていたが、',
          urara.get_colored_name(),
          ' が本当に本性を出したとき、',
          you.get_colored_name(),
          ' は慌てた。',
        ]);
        await era.printAndWait([
          '味わいの最後、液体の滴りと指の解放とともに、小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' の指の関節に小さな歯型をそっと残す。',
        ]);
        await era.printAndWait([
          '余韻を味わうみたいに舌打ちし、',
          urara.get_colored_name(),
          ' はまだ夢の中の笑顔のまま姿勢を変え、また ',
          you.get_colored_name(),
          ' の襟を噛み始める。',
        ]);
        await era.printAndWait([
          '衝撃を受けた ',
          you.get_colored_name(),
          ' はぼんやり座席に座り、',
          urara.get_colored_name(),
          ' が',
          urara.sex,
          'の匂いを夢の中で塗り続けるのに任せる。',
        ]);
        await era.printAndWait([
          '映画が終わりかけたころ、',
          you.get_colored_name(),
          ' は懐からの小さな呼びかけでようやく我に返る。',
        ]);
        await urara.say_and_wait([callname, '……トイレ行きたい……']);
        await era.printAndWait([
          '我に返ると、',
          you.get_colored_name(),
          ' も ',
          urara.get_colored_name(),
          ' が眠る前に大きなドリンクを飲んでいたことを思い出す。',
        ]);
        await era.printAndWait([
          '逃げるみたいに、まだ目を擦っている ',
          urara.get_colored_name(),
          ' を連れて、慌ただしくトイレへ逃げる……',
        ]);
      }
      await era.printAndWait([
        '当然、',
        urara.get_colored_name(),
        ' が残した噛み跡を隠し忘れて見つかった ',
        you.get_colored_name(),
        ' は、駿川さんに厳しく話をされた。',
      ]);
      await era.printAndWait(
        'もちろん、観賞中の経緯に比べればそれほど大事でもない。',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'やはり一部の作品は、人間にはまだ早すぎます。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  church: (() => {
    const title = '塞翁が馬？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_56 ハルウララのマチカネフクキタルへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上かつ三周目ループ中でない）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_56,
      high_relation,
    ) => {
      await era.printAndWait([
        '乗り気の ',
        urara.get_colored_name(),
        ' のためにも、次のレース前の縁起を担ぐためにも、',
        you.get_colored_name(),
        ' は',
        urara.uma_sex_title,
        'を連れて神社へ行くことにした。',
      ]);
      await era.printAndWait('急用もないし、来たからには。');
      await era.printAndWait([
        'ただ階段を踏み出したとき、',
        you.get_colored_name(),
        ' はここの空気がいつもの参拝と少し違うのを感じる。',
      ]);
      await era.printAndWait([
        '普段この小さな神社は賑やかで、近所の住民やここで遊ぶ子供のほか、長い階段を使って訓練する',
        urara.uma_sex_title,
        'たちもいる。',
      ]);
      await era.printAndWait(
        'だが今日の階段は格別に静かで、両側の林の揺れと鳥の声以外は、二人の足音だけだ。',
      );
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '二人だけの登りは確かに活気が足りないが、ちゃんと ',
          you.get_colored_name(),
          ' の手を握る ',
          urara.get_colored_name(),
          ' は、ずっと笑顔で ',
          you.get_colored_name(),
          ' のそばにいる。',
        ]);
        await urara.say_and_wait('今日のここの空気、なんかすごくきれい！');
        await era.printAndWait([
          'どの意味かはわからないが、',
          you.get_colored_name(),
          ' は頷いて ',
          urara.get_colored_name(),
          ' に同意し、',
          urara.uma_sex_title,
          'と並ぶうちに気分も明るくなる。',
        ]);
      } else {
        await era.printAndWait([
          '少し迷ったあと、',
          urara.get_colored_name(),
          ' は前に出て ',
          you.get_colored_name(),
          ' の手を握り、いきなり ',
          you.get_colored_name(),
          ' の前に立つ。',
        ]);
        await urara.say_and_wait([callname, '！スタミナ訓練、ついてきてね？']);
        await era.printAndWait([
          '反応するより先に、',
          you.get_colored_name(),
          ' はいきなり悪戯っぽく笑って走り出した担当に、次の段へ引き上がられる——',
        ]);
      }
      era.println();

      await era.printAndWait([
        '先を走る ',
        urara.get_colored_name(),
        ' に手を引かれて最後の段を踏むと、見慣れた小さな神社が階段上の鳥居の向こうに現れる。',
      ]);
      await era.printAndWait(
        '空気がどう変わろうと、今日もここは静かに参拝者を待っている。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' と並んで賽銭箱の前に立ち、',
        you.get_colored_name(),
        ' は硬貨を二枚取り出し、一枚を ',
        urara.get_colored_name(),
        ' の手に渡す。',
      ]);
      await era.printAndWait([
        '硬貨を見てまばたきしたあと、',
        urara.get_colored_name(),
        ' は耳を立て、察したようにそれを握りしめる……',
      ]);
      await era.printAndWait([
        'あまり正式ではない儀式を簡単に済ませたあと、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の畳まれたおみくじを取り、',
        urara.get_colored_name(),
        ' と一緒に紙を開こうとする——',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'むかし塞翁と呼ばれる人がいて、ある',
        urara.uma_sex_title,
        'に出会いました——',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'こほん、違います、間違えました——',
      );
      era.drawLine();

      await era.printAndWait([
        'だが今回は、担当に渡す前に、',
        you.get_colored_name(),
        ' は無意識に紙を先に開いてしまった。',
      ]);

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait([
        'こうして、期待でいっぱいの顔の ',
        urara.get_colored_name(),
        ' を見ながら、同じ「大凶」を二枚持つ ',
        you.get_colored_name(),
        ' は複雑な沈黙に落ちる。',
      ]);

      inner_urara.say_as_unknown([
        'ここで、トレーナー',
        you.adult_sex_title,
        '（あなた）の選択は……',
      ]);
      era.printButton('「だ、大凶だよ……」（スタミナ+10）', 1);
      era.printButton('「こ、小吉……？」（スピード+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は震えながらも ',
          urara.get_colored_name(),
          ' に本当のことを言う。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の答えを聞いて、少し寂しそうな顔になるが、数秒でまた恐れ知らずの笑顔に戻る。',
        ]);
        await urara.say_and_wait([
          '大丈夫だよ、大凶なら帰るとき足元を見てれば平気！',
          call_56,
          ' もそう言ってた！それにウララ、信号渡りは得意だよ？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の少し頼もしい可愛い答えを聞いて、',
          you.get_colored_name(),
          ' も安心して頷き、心の重荷が少し降りる。',
        ]);
        await era.printAndWait([
          'だが重荷を下ろして二秒も経たないうちに、新しい圧が ',
          you.get_colored_name(),
          ' の鼓動を喉元まで押し上げる。',
        ]);
        await era.printAndWait([
          '先に帰路へ踏み出した ',
          urara.get_colored_name(),
          ' はまだ振り返って ',
          you.get_colored_name(),
          ' に何か言っているが、そのせいで「足元注意」を忘れている。',
        ]);
        await era.printAndWait([
          '今の',
          urara.uma_sex_title,
          'は階段の最上段の前まで来ており、階段のどこかの石が鏡みたいに光を返している。',
        ]);
        await era.printAndWait([
          'そして小さな',
          urara.uma_sex_title,
          'は、少し茫然とした顔のまま足元を滑らせ……',
        ]);

        era.printButton('「足元注意！」', 1);
        await era.input();

        await era.printAndWait([
          you.get_colored_name(),
          ' は間に合って ',
          urara.get_colored_name(),
          ' を掴んだが、足元が空くと、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' の下に敷いたまま、公園の滑り台みたいにあの超長い階段を滑り落ちる。',
        ]);
        await era.printAndWait(
          '転ぶ前に心の準備はしていたが、この滑り台の弧はあまりにでこぼこしていた。',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は少し後ろめたく、二枚の紙を背中に隠す。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は疑いもなく ',
          you.get_colored_name(),
          ' の答えを信じ、吉を引いたのが嬉しいらしい。',
        ]);
        await era.printAndWait([
          'さっきまで迷っていたが、今は ',
          urara.get_colored_name(),
          ' の笑顔のほうが大事だ。',
        ]);
        await era.printAndWait([
          'そう思い、',
          you.get_colored_name(),
          ' はそっと息を吐く。二枚のおみくじをこっそりしまってから、',
          you.get_colored_name(),
          ' は次に ',
          urara.get_colored_name(),
          ' とどこを回ろうか考える。',
        ]);
        await era.printAndWait([
          '見くびられた恨みを晴らすみたいに、庭を出た途端、',
          you.get_colored_name(),
          ' が没収した二枚の「大凶」は待ちきれず効力を ',
          you.get_colored_name(),
          ' の頭に叩きつける。',
        ]);
        await urara.say_and_wait([callname, '！足元注意！']);
        await era.printAndWait([
          you.get_colored_name(),
          ' の後ろの ',
          urara.get_colored_name(),
          ' は最速で走り出したが、体の小さすぎる',
          urara.uma_sex_title,
          'はそれでも ',
          you.get_colored_name(),
          ' の傾いた体を間に合って掴めない。',
        ]);
        await era.printAndWait([
          '成就を急ぐみたいに、考えごとに気を取られた ',
          you.get_colored_name(),
          ' は、いつの間にか階段最上段のいちばん滑る石を踏んでいる。',
        ]);
        await era.printAndWait([
          'こうして足元が空くと、',
          you.get_colored_name(),
          ' は訓練に失敗した',
          urara.uma_sex_title,
          'みたいに、',
          urara.get_colored_name(),
          ' の慌てた呼び声のなか、ぱらぱらと神社の超長い階段を滑り落ちる……',
        ]);
      }

      era.println();
      await era.printAndWait([
        'しばらくして、',
        you.get_colored_name(),
        ' はまっすぐに階段の下で仰向けになり、落ちてごちゃごちゃになった頭で、散らばった考えを必死に拾っている。',
      ]);
      await era.printAndWait([
        'こうして滑ったのが ',
        urara.get_colored_name(),
        ' でなくてよかった。上の青空と、心配そうな ',
        urara.get_colored_name(),
        ' の小さな顔を見上げて、',
        you.get_colored_name(),
        ' にはこの考えだけがはっきりしている。',
      ]);
      await era.printAndWait([
        '幸い身体を一通り確認したあと、',
        urara.get_colored_name(),
        ' も ',
        you.get_colored_name(),
        ' も、',
        you.get_colored_name(),
        ' の体に大事がなくて息を吐く。',
      ]);
      await era.printAndWait([
        'ただ空を、',
        you.get_colored_name(),
        ' の目の前を風に乗って飛んでいく二枚の「大凶」は、見えないどこかで誰かが無言で ',
        you.get_colored_name(),
        ' を笑っているみたいだ。',
      ]);
      await era.printAndWait('いてて、背中が本当に痛い……');
      await era.printAndWait([
        'ただ戻ったあと、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のためにいっそう',
        ret === 1 ? 'そばにいて' : '訓練して',
        'くれたらしい。実際 ',
        you.get_colored_name(),
        ' は怪我などしていないのに……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ん？何を見ています？わではありませんよ？本当ではありませんよ？',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  hid_menu: (() => {
    const title = '隠しメニュー、おいしいね！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '一日のお出かけ食事が終わり、会計しようとした ',
        you.get_colored_name(),
        ' は、店員の特殊な条件をぼんやり聞いている。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店員A',
        'はい！では本店の隠しカップルメニューを味わったあと、お二人にしていただくことは？',
      );
      era.printButton('「キ、キス……？」', 1);
      await era.input();
      await era.printAndWait([
        '怪しい笑顔の店員が出した怪しい条件を復唱し、顔を上げて無邪気な担当を一目見て、',
        you.get_colored_name(),
        ' は考え込む。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は本当に友だちの紹介だけで、ほかの目的もなくこの店に来たのか？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は本当に「うっかり」この店で「隠しメニュー」を聞いたのか？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は本当に店の外の妙な内装に気づかず、人を店内に引っ張ってきたのか？',
      ]);
      await you.say_and_wait(
        'でも、なんでウララを疑ってるんだ？ もしかして全部、俺のせい？',
        true,
      );
      await era.printAndWait([
        '見えなかった ',
        urara.get_colored_name(),
        ' の無邪気な顔に、悪戯が成功したときの悪い笑みがわずかに混じる。',
        you.get_colored_name(),
        ' は頭が回らず、自分を疑い続ける。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([callname, '、ぼーっとしてるの？ キスしよ！']);
        await urara.say_and_wait(
          `ほらほら！ えへへ～外で ${callname} とちゅーするよ！`,
        );
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' の動揺を見ても、',
          urara.get_colored_name(),
          ' は楽しそうにまわりと一緒に囃し立てる。',
        ]);
        await era.printAndWait([
          '真剣な顔で寄ってくる担当に、',
          you.get_colored_name(),
          ' は幽霊でも見たみたいに必死で首を振る。',
        ]);
        await you.say_and_wait(
          'ほかの選択肢があるはずだウララ、こんなことしたらみんなショックを受けるし、祝福なんてされない……',
        );
      } else {
        await urara.say_and_wait([
          callname,
          ' はキスしたくない？ わかってるけど……',
        ]);
        await urara.say_and_wait(
          `でも ${callname}！ 大人でも、全部選べるわけじゃないよ？`,
        );
        await era.printAndWait([
          'だんだん慌てていく ',
          you.get_colored_name(),
          ' を見て、',
          urara.get_colored_name(),
          ' は少し呆れつつも、なぜか嬉しそうな顔をする。',
        ]);
        await era.printAndWait([
          '表面は冷たいが態度は譲らない担当を前に、',
          you.get_colored_name(),
          ' は普段の対処をきれいさっぱり忘れる。',
        ]);
        await you.say_and_wait(
          'だめだよウララ、みんなの前でこんなことしたら捕まるし、商店街のみんなにも怒られるし、ウララの友だちも……',
        );
      }
      era.println();
      await urara.say_and_wait(
        `${callname}！ よそ見しないで、そしたらキスできないよ！`,
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の言葉が終わるやいなや、拒もうとした ',
        you.get_colored_name(),
        ' は、乗っている担当に',
        urara.uma_sex_title,
        'の力で顔を挟まれる。',
      ]);
      await era.printAndWait('これで、社会的には本当に終わりだ……');
      await era.printAndWait([
        '暴走した担当に掴まれて動けない ',
        you.get_colored_name(),
        ' は、みんなの視線の中、目的のはっきりした ',
        urara.get_colored_name(),
        ' のかわいい小さな顔を絶望的に見つめる……',
      ]);
      await era.printAndWait([
        'このあと、逃げられない ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の「息が止まるような愛欲」をたっぷり味わうことになる。',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') >= 10) {
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'は無邪気さに七分の色気を混ぜ、緊張もなく ',
          you.get_colored_name(),
          ' に近づき、悪戯っぽく ',
          you.get_colored_name(),
          ' の唇を噛む。',
        ]);
        await era.printAndWait([
          'そのあと長いあいだ、小さな',
          urara.uma_sex_title,
          'に求められ続け、',
          you.get_colored_name(),
          ' は意識が飛びそうになる。',
        ]);
        await era.printAndWait([
          '最初は ',
          you.get_colored_name(),
          ' にもまわりのざわめきが聞こえていたが、すぐ ',
          urara.get_colored_name(),
          ' が注ぎ込む愛情のなかでぼやけていく。',
        ]);
        await era.printAndWait([
          'まわりの声がだいたい静かになったころ、',
          urara.get_colored_name(),
          ' は名残惜しそうに、倒れそうな ',
          you.get_colored_name(),
          ' をようやく離す。',
        ]);
        await era.printAndWait([
          'だがそのあと、',
          urara.get_colored_name(),
          ' は無邪気で何も知らない顔のまま、舌先で ',
          you.get_colored_name(),
          ' の唇をそっと拭う。',
        ]);
      } else {
        await era.printAndWait([
          '恥ずかしさからか、経験不足の緊張からか、焦った小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' の正面に真正面からぶつかる。',
        ]);
        await urara.say_and_wait('うわっ、いたい！ 唇と歯、ぶつけちゃった……');
        await era.printAndWait([
          'だが最初の失敗でも ',
          urara.get_colored_name(),
          ' は止まらず、焦って ',
          you.get_colored_name(),
          ' の襟を掴み、',
          urara.get_colored_name(),
          ' は乱暴に ',
          you.get_colored_name(),
          ' の息を味わい続ける。',
        ]);
        await era.printAndWait([
          'まわりのささやきをできるだけ無視しながら、小さな',
          urara.uma_sex_title,
          'に首を引っ張られる ',
          you.get_colored_name(),
          ' は、いつ倒れてもおかしくない……',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' が力尽きて倒れそうになったとき、',
          urara.get_colored_name(),
          ' はやっと少し名残惜しそうに、自分の ',
          callname,
          ' を離す。',
        ]);
      }
      era.println();
      await you.say_and_wait(
        '失礼な考えだけど、ウララ、欲求不満なんじゃ……？',
        true,
      );
      await era.printAndWait([
        '椅子にへたり込み、',
        you.get_colored_name(),
        ' は顔を覆う店員と顔を上げられないほかの客を余目で見て、力なく息を吐く。',
      ]);
      await era.printAndWait([
        '小さな担当は今も色っぽい目で ',
        you.get_colored_name(),
        ' を見て、続けるかどうかを ',
        you.get_colored_name(),
        ' に聞いているみたいだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は無邪気な ',
        urara.get_colored_name(),
        ' の目覚めに自分の責任があるのは認める。だが一気にこんな色欲に溺れたピンクの小さな',
        urara.sex_code - 1 ? '牝馬' : '牡馬',
        'になるのは、やりすぎではないか？',
      ]);
      await era.printAndWait([
        '深く反省しているあいだにも、',
        you.get_colored_name(),
        ' はまた赤らんだ顔で寄ってくる ',
        urara.get_colored_name(),
        ' を見る。',
      ]);
      await urara.say_and_wait(
        `カップルの証明なら、${callname} もこれじゃ足りないって思うでしょ？ 大丈夫、ウララもそう思うよ！`,
      );
      await urara.say_and_wait(['だから ', callname, '……もう一回しよ？']);
      await you.say_and_wait(
        `やめてくれウララ、${callname} は本当にもう無理だ！ せめて、せめて社会的に死んだあと、命の逃げ道は残してくれ！`,
        true,
      );
      await era.printAndWait([
        'そっと唇を舐める桜色を見つめたまま、',
        you.get_colored_name(),
        ' は耐えきれず目を閉じる……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ん、まあ、ああ……楽しむことを覚えるのも、悪くないでしょう？',
      );
    };
    f.title = title;
    return f;
  })(),
  try_dress: (() => {
    const title = 'ステージ衣装、着てみるよ！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await era.printAndWait([
        '次のレースまでにしっかり備えるため、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' はモールへ行き、これから先のトレーニングで使う運動用品を揃えることにした。',
      ]);
      await era.printAndWait([
        'だが勝負服を特注する店の前を通ったとき、',
        urara.get_colored_name(),
        ' は「ステージ衣装の試着」に誘われる。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'の店員と短いやりとりをしたあと、事情が分かった。',
      ]);
      await era.printAndWait(
        '最近、ほかのトレセンから委託があり、新しいステージ衣装を仕立てる必要があるらしい。',
      );
      await era.printAndWait(
        '使われなかった旧サンプルから改良するつもりだったが、どれを選ぶか決めきれない。',
      );
      await era.printAndWait(
        '選ぶのが難しいなら、トレセンの生徒に試着してもらえばいい——そういう話だった。',
      );
      await urara.say_and_wait([
        'だからこのタイミングで、ウララと ',
        callname,
        ' がちょうど通ったの？ ほんとうに偶然だね！',
      ]);
      await urara.say_and_wait([
        '新しい服の試着、ウララ、興味あるよ！ でも今日はほかの用事もあるから——',
      ]);
      await era.printAndWait([
        '短い迷いのあと、',
        urara.get_colored_name(),
        ' はさっさと ',
        you.get_colored_name(),
        ' の意見を聞くことにする。',
      ]);

      era.printButton('「大丈夫だよ。試したいならやっていい。」', 1);
      await era.input();

      await urara.say_and_wait('やった——！');
      await era.printAndWait([
        '肯定をもらい、少し待ったあと、小さな',
        urara.uma_sex_title,
        'は興奮して、店員の案内で試着服が掛かっている更衣室へ跳ねていく。',
      ]);
      await era.printAndWait([
        'だが ',
        urara.get_colored_name(),
        ' は大丈夫か？',
        urara.sex,
        'はひとりでちゃんと服を着られるだろうか？',
      ]);
      await era.printAndWait([
        '最初はそんな心配もあったが、',
        urara.get_colored_name(),
        ' がきちんと着こなして笑って現れたとき、',
        you.get_colored_name(),
        ' も不安を引っ込める。',
      ]);
      await era.printAndWait([
        'Liveのステップで店員に撮影アングルを探してあげる担当を見ていると、',
        you.get_colored_name(),
        ' はそれでも少し感慨がある。',
      ]);
      await era.printAndWait([
        '普段の様子はまだ幼いが、',
        urara.sex,
        'はずっと成長してきた。たとえトレーナーが見つからなくても、',
        urara.sex,
        'はちゃんと大きくなれたはずだ。',
      ]);
      await era.printAndWait([
        'そう思うたび、',
        you.get_colored_name(),
        ' は初めて出会ったとき、',
        urara.get_colored_name(),
        ' とすれ違わずに済んだことを幸運に思う。',
      ]);
      await era.printAndWait([
        'もしかしたら ',
        urara.get_colored_name(),
        ' に出会わなくても ',
        you.get_colored_name(),
        ' は苦境を抜けられたし、',
        you.get_colored_name(),
        ' がいなくても ',
        urara.get_colored_name(),
        ' は1着を取れたのかもしれない……',
      ]);
      await era.printAndWait([
        'だが今は、してはいけないと分かっていても、トレーナーである ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' を独占したくなる。',
      ]);
      await era.printAndWait([
        'トレーナーとして、これは相当だめだ。大人として失格な考えを首を振って打ち消し、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' はたまたま目が合う。',
      ]);
      await era.printAndWait([
        '個人Liveみたいに踊る小さなアイドルは、桜色の明るい笑顔で ',
        you.get_colored_name(),
        ' に無言の「ウマ跳び伝説」の投げキスを送る。',
      ]);
      await era.printAndWait([
        '歌声も音楽もなく、ほかの場所でも何度も見てきたはずなのに、小さな',
        urara.uma_sex_title,
        'の赤らんだ頬と恥ずかしげな投げキスは、それでも ',
        you.get_colored_name(),
        ' の胸を撃つ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が跳ねる心臓を落ち着ける前に、',
        urara.get_colored_name(),
        ' は店員たちの「OK」の合図で、また舞台裏の更衣室へ跳ねて戻る。',
      ]);
      await you.say_and_wait('……今の、ウララだったのか？', true);
      await era.printAndWait([
        'ざわつく胸を押さえ、落ち着いた ',
        you.get_colored_name(),
        ' はようやく気づく。恋の投げキスを投げたあの',
        urara.teen_sex_title,
        'は、表面はまだ幼い小さな担当そのものだ……',
      ]);
      era.drawLine();

      await urara.print_and_wait([
        '更衣室で、さっき ',
        callname,
        ' を奇襲した ',
        urara.get_colored_name(),
        ' は姿見の縁を掴み、跳ねて止まない心拍を必死に抑える。',
      ]);
      await urara.say_and_wait(
        'あの、止まって！ いまはトレーニングでもレースでもないよ？ うぅ……頭がふらふら……',
        true,
      );
      await urara.say_and_wait(
        [
          'ただ急に ',
          callname,
          ' をびっくりさせようとしただけなのに、やってみたらすごく恥ずかしい……',
        ],
        true,
      );
      await urara.print_and_wait([
        '少し落ち着いてから、',
        urara.get_colored_name(),
        ' はよく分からない気持ちのまま、ゆっくり体を起こす。',
      ]);
      await urara.print_and_wait([
        urara.teen_sex_title,
        'の視線が上へ、余目の端から正面へ移るにつれ、',
        urara.get_colored_name(),
        ' は鏡の中に「もうひとりの',
        urara.uma_sex_title,
        '」を見る。',
      ]);
      await urara.print_and_wait([
        '鏡の中の',
        urara.uma_sex_title,
        'は、誰？ ',
        urara.get_colored_name(),
        ' によく似て、',
        urara.get_colored_name(),
        ' と同じ服を着ているのに、一目で好かれそうな顔をしている。',
      ]);
      await urara.print_and_wait([
        '本の中の',
        urara.sex_code - 1 ? 'お姫さま' : '王子さま',
        'みたいに、真っ赤な頬、恥じらった瞳……これが「初恋の',
        urara.teen_sex_title,
        '」の顔？',
      ]);
      await urara.print_and_wait([
        'よく分からないけど、みんなの言うとおり、幼い ',
        urara.get_colored_name(),
        ' とは全然違う。こんな',
        urara.child_sex_title,
        'を嫌う人はいない……',
      ]);
      await urara.say_and_wait(
        [
          'じゃあ……',
          callname,
          ' も、こんな',
          urara.child_sex_title,
          'が好き？',
        ],
        true,
      );
      await urara.print_and_wait([
        '手を伸ばして鏡の中の「',
        urara.get_colored_name(),
        '」をそっと撫で、また速くなる心拍を感じながら、',
        urara.teen_sex_title,
        'は根拠もなくそう思う。',
      ]);
      await urara.say_and_wait(
        ['でも、なんで今また ', callname, ' を思い出すの？'],
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          [
            'どうしたらいいか、まだ分からない。でもウララ、やっぱり ',
            callname,
            ' が嬉しそうな顔、見るのが好き……',
          ],
          true,
        );
        await urara.print_and_wait([
          '小さな',
          urara.uma_sex_title,
          'は更衣室の隅で、掛けられていない一着を見る。',
        ]);
        await urara.say_and_wait(
          [
            'ウララも、なんでその服を先に出さなかったか分かるよ。でもその服なら、',
            callname,
            ' は……',
          ],
          true,
        );
        await urara.print_and_wait([
          '耳を精一杯立て、だんだん理性が薄れる初恋の',
          urara.teen_sex_title,
          'は、思い切った試しをすることにする。',
        ]);
      } else {
        await urara.say_and_wait(
          ['なんでウララ、嬉しいんだろう？ ', callname, ' が嬉しそうだから？'],
          true,
        );
        await urara.say_and_wait(
          [
            'でも ',
            callname,
            ' がウララをもっと好きなら、ウララのために良くなってくれる？',
          ],
          true,
        );
        await urara.say_and_wait(
          ['じゃあ ', callname, ' をウララに夢中にさせたら、もしかして……？'],
          true,
        );
        await urara.print_and_wait([
          '箱を開けてその服を取り出し、初恋の',
          urara.teen_sex_title,
          'は少し迷ったあと、不器用な理由で自分を説得する。',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait('この服も着替えたよ！');
      await era.printAndWait([
        '半分は羞じらい、半分は元気な ',
        urara.get_colored_name(),
        ' の宣言とともに、更衣室の長すぎるカーテンが開く。',
      ]);
      await era.printAndWait(
        'すると、やっと賑やかになっていた空気が一瞬で固まる。',
      );
      await era.printAndWait([
        '赤らんだ顔の ',
        urara.get_colored_name(),
        ' 以外、その場の全員が何か衝撃的なものを見たみたいに動きを止める。',
      ]);

      era.printButton('「……？！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' は今の ',
        urara.get_colored_name(),
        ' をどう言い表せばいいか分からない。形容どころか、今の ',
        you.get_colored_name(),
        ' は担当を直視し続ける気力すら失いかけている。',
      ]);
      await era.printAndWait([
        'だがそれは確かに、トレーナーとして見たことのない ',
        urara.get_colored_name(),
        ' だ——',
      ]);
      await era.printAndWait([
        '締められた胸衣の膨らみの下でひとつになったのは、包まれた細い腰と、',
        urara.teen_sex_title,
        'の肉の曲線に食い込む高い股のライン。',
      ]);
      await era.printAndWait([
        '後腰と尾の根元から伸びるレースの裾が色っぽく揺れ、わざと空けた臍と下腹は、もはや情趣以外の意味がなさそうだ。',
      ]);
      await era.printAndWait([
        '横へ寄せた桜色のポニーテールの横にはハートの金属耳飾りと漆黒のイヤーカバー。皮の手袋とブーツが、愛欲の光を反射している。',
      ]);
      await era.printAndWait([
        '真っ黒な装いに包まれた、本来は「幼い」はずの ',
        urara.get_colored_name(),
        ' が、今は艷やかで蠱惑的だ。',
      ]);
      await era.printAndWait(
        'いったいどこのアイドルだ？ このサキュバスみたいな装いは、どこのステージ衣装なんだ？',
      );
      await era.printAndWait([
        '桜瞳の光が落ちた ',
        urara.get_colored_name(),
        ' に、この過激なステージ衣装が、なぜこんなに似合う？',
      ]);
      await era.printAndWait([
        '目を細めた ',
        urara.get_colored_name(),
        ' が、獲物を定めたみたいに',
        urara.sex,
        'の ',
        callname,
        ' へ送る、興奮した笑顔は何だ？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の視線で背筋がざわついた ',
        you.get_colored_name(),
        ' は唾を飲み、いつの間にか、',
        you.get_colored_name(),
        ' も理性が蒸発していく罠へ落ちていく……',
      ]);
      await era.printAndWait([
        'だが大人が黙り込むより先に、小さな',
        urara.uma_sex_title,
        'のほうが真っ赤になっていく顔を押さえる。',
      ]);
      await urara.say_and_wait(
        'ご、ごめんね、ウララ、やりすぎちゃった、たぶん……',
      );
      await era.printAndWait([
        '小さなサキュバスは数秒だけ続き、すぐ隣の更衣室カーテンの陰へ逃げ込む。恥ずかしさで涙目になった ',
        urara.get_colored_name(),
        ' に戻る。',
      ]);
      era.println();

      await you.say_and_wait(
        '目白城と提携して、特殊用途の服を副業で作ってる？',
      );
      await era.printAndWait([
        'みんなが現状を整えたあと、衝撃を受けた ',
        you.get_colored_name(),
        ' は、謝り続ける店員の言葉を信じられないまま復唱し、何を言えばいいか分からない。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店員A',
        '本当に申し訳ありません。あの服は処分する予定だったのですが、試着室に置き忘れてしまって……',
      );
      await you.say_and_wait('その理由は、まあ分からなくもない……');
      await you.say_and_wait(
        '待て、ほかの服はいいとして、なんでこの服までウララにぴったりなんだ？ 特注した元の主は……？',
        true,
      );
      await you.say_and_wait('……やっぱり、考えないでおこう。', true);
      await era.printAndWait([
        '運動用品の袋をたくさん提げて帰る道で、',
        you.get_colored_name(),
        ' はこの怪しい疑問を考えるのをやめる。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が沈思している隙に、そばを歩く ',
        urara.get_colored_name(),
        ' が聞いてくる。',
      ]);
      await urara.say_and_wait([
        'ウララがこれから先も ',
        callname,
        ' に着てみせたら、',
        callname,
        '、ドキドキする？',
      ]);
      inner_urara.say_as_unknown([
        urara.get_colored_name(),
        ' の問いに、トレーナー',
        you.adult_sex_title,
        '（あなた）は答える。',
      ]);
      era.printButton('「何言ってるんだ、それは過激すぎる……」（好感+10）', 1);
      era.printButton('「ほかを気にしなければ……すると思う」（恋慕+5）', 2);
      const ret = await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の答えを聞き、',
        urara.get_colored_name(),
        ' はいつもの分かりにくい笑顔とは違う笑みだけを見せる。',
      ]);
      await era.printAndWait([urara.sex, 'は、いったい何を考えているんだ……']);
      era.drawLine();
      await urara.say_and_wait([
        'あんまり乗り気じゃなさそうだったけど、',
        callname,
        '、ドキドキするって否定しなかったよ！ 今回はすぐダメになっちゃったけど。',
      ]);
      await urara.say_and_wait([
        'えへへ～これも、これから先も ',
        callname,
        ' をドキドキさせるためだよ！ もちろん、見てるのはウララだよ……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'それでいいのですか？ そんな衝動を信じるなんて……人間は、とても当てになりませんよ？',
      );
      await urara.say_and_wait([
        '大丈夫！ だってウララ、',
        callname,
        ' を信じてるから！',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '前へ進むと決めた夜';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {number} arim_kin_rank 有馬記念の着順。0は未出走
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      arim_kin_rank,
    ) => {
      inner_urara.name = '「ハルウララ」';
      await era.printAndWait(
        'クリスマスが完全に訪れたのは昨日のイブのあとだが、外は数日前から甘い祭りの気配に包まれている。',
      );
      await era.printAndWait([
        'ただ ',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' にとっては、同じく年に一度でも、昨日の有馬記念のほうが今日のクリスマスよりずっと大事だった。',
      ]);
      await era.printAndWait([
        '祭りを楽しみにしていないわけではない。喜びを広げられる祭りなら、',
        urara.get_colored_name(),
        ' はどれも歓迎するし、',
        you.get_colored_name(),
        ' も前もって用意する。',
      ]);
      if (arim_kin_rank > 0) {
        await era.printAndWait(
          'だが有馬で燃えすぎたのか、今の小さなウマは必要な用事以外、ずっとぐったりモードだ。',
        );
        await era.printAndWait([
          'トレーナー室で、ソファに寝てふにゃふにゃになった ',
          urara.get_colored_name(),
          ' を撫でながら、',
          you.get_colored_name(),
          ' は仕事の締めの最後の文字をキーボードに打ち込む。',
        ]);
        if (arim_kin_rank === 1) {
          await era.printAndWait([
            '驚きの出会いのあと、入場通路へ潜り込んだときに見た光景を思い出す。当時の ',
            you.get_colored_name(),
            ' は、白昼夢を見ているとすら思った。',
          ]);
          await era.printAndWait([
            '驚いているあいだにみんなに囲まれてあれこれ聞かれ、よく分からないまま ',
            urara.get_colored_name(),
            ' がLiveのセンターに立つのを見て、ようやく全部が事実だと確信した。',
          ]);
          await era.printAndWait([
            'そのあと、',
            urara.get_colored_name(),
            ' は友だちたちにしっかり守られている。だが ',
            you.get_colored_name(),
            ' は今、ひとりになると面倒ごとが飛び続けてくる。',
          ]);
          await era.printAndWait([
            '今では「',
            urara.get_colored_name(),
            ' の世話をしている」が避難の言い訳みたいになっても、それ以上の圧は ',
            urara.get_colored_name(),
            ' にかけられない。',
          ]);
          await era.printAndWait([
            '大人の面倒は、せめて大人が自分で悩もう。パソコンを閉じ、',
            you.get_colored_name(),
            ' は小さく息を吐く。',
          ]);
          await era.printAndWait([
            callname,
            ' の動きに気づいて起き上がろうとする小さな',
            urara.uma_sex_title,
            'から、',
            you.get_colored_name(),
            ' もちょうどよく、まだ柔らかい感触の残る指を引く。',
          ]);
        } else {
          await era.printAndWait([
            '有馬に出たことについて、',
            you.get_colored_name(),
            ' の考えはみんなとだいたい同じだ。',
            urara.get_colored_name(),
            ' が今コースに立てただけで、もう勝ちだ。',
          ]);
          await era.printAndWait([
            '喜ぶべきことなのに、突然 ',
            you.get_colored_name(),
            ' と会った',
            inner_urara.get_colored_name(),
            'の言葉は、いったい……',
          ]);
          await era.printAndWait([
            callname,
            ' の動きに気づいて起き上がろうとする小さな',
            urara.uma_sex_title,
            'から、',
            you.get_colored_name(),
            ' もちょうどよく、まだ柔らかい感触の残る指を引く。',
          ]);
        }
      } else {
        await era.printAndWait([
          '今日の ',
          urara.get_colored_name(),
          ' は仕事中の ',
          callname,
          ' のそばに静かに座っている。だがじっとしていられない小さな耳は、こっそり ',
          you.get_colored_name(),
          ' の肩に乗る。',
        ]);
        await era.printAndWait([
          '待っている小さな',
          urara.uma_sex_title,
          'の期待にすぐ応えるため、',
          you.get_colored_name(),
          ' もキーボードを叩く指を少し速める……',
        ]);
      }
      await era.printAndWait(
        'それにしても、こちらはもともと本気でクリスマスを過ごすつもりはなかった。だが特別な日を選んで祝福を贈り合うのは、いつだって価値がある。',
      );
      await era.printAndWait([
        'だから、小さな',
        urara.uma_sex_title,
        'のこれまでの頑張りに礼を言うためにも、今日の',
        urara.sex,
        'には ',
        you.get_colored_name(),
        ' が特別な思い出を用意する価値がある。',
      ]);
      await era.printAndWait([
        'パソコンを閉じ、',
        you.get_colored_name(),
        ' は机の下から、前もって ',
        urara.get_colored_name(),
        ' のために用意したクリスマスプレゼントを出す。今日の',
        urara.sex,
        'は、この瞬間を待っていたはずだ。',
      ]);
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が突然差し出したギフトボックスを見て、',
          urara.get_colored_name(),
          ' はまず少し驚いて固まるが、すぐかわいい笑顔が驚きとともに頬へ広がる。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の肯定で嬉しそうに箱を開け、小さな',
          urara.uma_sex_title,
          'は箱の中から新品のピンクのイヤーカバーを受け取って驚く。',
        ]);
      } else {
        await era.printAndWait([
          '自分が贈り物をもらえると思っていなかったのか、',
          urara.get_colored_name(),
          ' はまず固まる。だが ',
          you.get_colored_name(),
          ' の肯定を得て、それでも箱を受け取る。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の促しで少し迷って包装を開け、箱の中の新品のイヤーカバーを手にしたあと、',
          urara.get_colored_name(),
          ' の桜瞳はだんだん明るくなる。',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait(
          '「恋人が贈るイヤーカバーと尾飾りは愛の証」——古事記にはまったく載っていないが、今の生徒のあいだではとても流行っている。',
        );
        await era.printAndWait([
          'クリスマスに乗じて高価ではない小さな飾りを贈るのは少しずるい。だが小さな',
          urara.uma_sex_title,
          'と長く走ってきた古いイヤーカバーは、確かに洗い色褪せていた。',
        ]);
      } else {
        await era.printAndWait([
          'そこまで親しくない',
          urara.uma_sex_title,
          'にイヤーカバーや尾飾りを贈るのは失礼と取られるかもしれない。だが ',
          urara.get_colored_name(),
          ' は、そこまで気にしないはずだ。',
        ]);
        await era.printAndWait([
          'もちろん ',
          you.get_colored_name(),
          ' に不埒な意図はない。ただ ',
          urara.get_colored_name(),
          ' の、いつから使っているかも分からないイヤーカバーが古すぎただけだ。',
        ]);
      }
      await urara.say_and_wait([
        'え？ これ、',
        callname,
        ' が用意したの？ すごい——！ それにウララが今つけてるのと同じだよ！',
      ]);

      era.printButton('「サンタさんに頼まれて、渡してきたんだよ。」', 1);
      await era.input();

      await urara.say_and_wait([
        '本当！？ じゃあ今年のサンタさんは ',
        callname,
        ' なんだね！ えへへ～ありがとう ',
        callname,
        '！',
      ]);
      await era.printAndWait([
        'ん？ ',
        urara.get_colored_name(),
        ' はサンタを信じないタイプだったのか……違う、サンタの正体を見抜いているタイプか？',
      ]);
      await era.printAndWait([
        '嬉しそうなのに、どこか別の意味もありそうな担当の笑顔を見て、',
        you.get_colored_name(),
        ' は不意に、',
        urara.get_colored_name(),
        ' の意外な情報が増えた気がする……',
      ]);
      await urara.say_and_wait(
        'でもね、クリスマスはみんな嬉しいお祭りだよ！ 子供だけじゃなくて、大人も！',
      );
      await urara.say_and_wait([
        'だからウララも、今はサンタさんになって、',
        callname,
        ' だけのプレゼントをあげる！',
      ]);
      await era.printAndWait([
        '笑顔で寄ってきて、',
        urara.get_colored_name(),
        ' はポケットから取り出した何かを ',
        you.get_colored_name(),
        ' の手に押し込む。',
      ]);
      await era.printAndWait([
        '手のひらを開くと、小さな',
        urara.uma_sex_title,
        'が ',
        you.get_colored_name(),
        ' に渡したのは、塗りつぶした色紙で、真ん中に「なんでもお助け券」と書いてある。',
      ]);
      await urara.say_and_wait(
        '大掃除を手伝うのも、ご飯を作るのも、お話するのも、なんでも言って！',
      );
      await urara.say_and_wait([
        'ウララ、これから先ももっと頑張るから、',
        callname,
        ' が手伝ってほしいときは、遠慮なく呼んでね！',
      ]);

      era.printButton('「うん！ ありがとう！」', 1);
      await era.input();

      await urara.say_and_wait([
        'えへへ～',
        callname,
        '、今嬉しいでしょ？ ウララが小さいときも、こんな券をお父さんにあげたんだ。お父さんもすごく喜んでたよ！',
      ]);
      await urara.say_and_wait([
        'ウララも ',
        callname,
        ' をお父さんみたいに喜ばせたい！ でもお父さんは券を大事にしまって、今まで一枚も使ってない……',
      ]);
      await urara.say_and_wait([
        'だから！ ウララは ',
        callname,
        ' に、券をしまわず、今すぐウララにちゃんと使ってほしいの！',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'の悪戯っぽい笑顔で ',
        you.get_colored_name(),
        ' の胸に飛び込み、いつの間にかまた少し大きくなった小さな',
        urara.uma_sex_title,
        'は、少し我がままに ',
        you.get_colored_name(),
        ' の上へ乗る。',
      ]);

      await urara.say_and_wait(['だから ', callname, '、この券で何をする？']);
      era.printButton(
        '「今なら、ウララがこれからもっと速く走れるように願うよ？」（スピード&スタミナ&賢さ+10）',
        1,
      );
      era.printButton(
        '「じゃあ次、商店街で特訓するとき、もっとみんなを手伝ってね？」（パワー&根性+10）',
        2,
      );
      era.printButton(
        '「……この券、ウララの体をプレゼントに換えられる？」（全能力+5）',
        3,
        { disabled: era.get('love:52') < 50 },
      );
      const ret = await era.input();
      if (ret < 3) {
        await urara.say_and_wait([
          'え？ そんな普通の願いなの？ ウララ、',
          callname,
          ' は大人だから、ウララの知らないものが欲しいと思ってた！',
        ]);

        era.printButton(
          `「何を期待してるんだか置いといて、ウララは大人の${callname}が知らないものを欲しがると思うの？」`,
          1,
        );
        await era.input();

        await urara.say_and_wait([
          'ん……なんだろう？ たとえば ',
          callname,
          ' がウララを欲しがるとか？',
        ]);
        await era.printAndWait('あ？');
        await urara.say_and_wait([
          'たとえば ',
          callname,
          ' が、ウララにずっとそばにいてほしいとか……でもそれ、普段やってる？',
        ]);
        await era.printAndWait('——ふぅ！');
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'の、まだ曇りのない顔を見て、',
          you.get_colored_name(),
          ' は心の中で長く息を吐く。危ない、',
          urara.get_colored_name(),
          ' また誰かに変な知識を入れられたのかと思った……',
        ]);
        await urara.say_and_wait([
          'でもウララが自分の全部を ',
          callname,
          ' にあげたいって思ったら、',
          callname,
          '、受け取ってくれる？',
        ]);
        await era.printAndWait(
          '……やっぱり油断できない。これは誰が教えたんだ？ だが今この瞬間、この問いは答える価値がある——',
        );

        era.printButton(
          '「もう貰ってるだろ？ 『ウララがくれた全部の日常』。」',
          1,
        );
        await era.input();

        await era.printAndWait([
          '見返りを求めない',
          urara.teen_sex_title,
          'は、とうにいちばん似合う贈り物を ',
          you.get_colored_name(),
          ' の手に渡している。聖夜が訪れた今、ほかに要るものがあるだろうか？',
        ]);
        await era.printAndWait([
          '少し困惑の混ざった',
          urara.teen_sex_title,
          'の笑顔を眺め、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はまた、贈り物みたいな一日を一緒に過ごす。',
        ]);
      } else {
        await urara.say_and_wait([
          'うん！ いいよ？ だって ',
          callname,
          ' が言わなくても、ウララ、そうするつもりだったし……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の欲の混ざった試しに、迷いなく答え、小さな手が羞じらいながら ',
          you.get_colored_name(),
          ' の敏感なところへ登る。',
        ]);
        await urara.say_and_wait([
          '……それに ',
          callname,
          ' のここ、もう感じちゃってるよね？',
        ]);
        await era.printAndWait([
          '布の上から指で ',
          you.get_colored_name(),
          ' の敏感なところを撫で、小さな',
          urara.uma_sex_title,
          'の幼い頬はだんだん緋色に染まる。',
        ]);
        await era.printAndWait([
          '待ちきれない水音は、とうに',
          urara.teen_sex_title,
          'のきつく包んだ下着を浸し、発情の潮を抑えきれず ',
          you.get_colored_name(),
          ' の脚へ塗りつける。',
        ]);
        if (era.get('exp:52:性爱次数') >= 10) {
          await urara.say_and_wait(
            'えへへ～実は乗ったときから、ウララ、もうぐしょぐしょだったよ……',
          );
          await urara.say_and_wait([
            'もう、がまんできない……ウララが悪い子になったの、どう考えても ',
            callname,
            ' のせい……ちゅっ～',
          ]);
          await era.printAndWait([
            '自然に恋人を抱き、',
            you.get_colored_name(),
            ' に日々調教された小さな体は、今は主人の欲を受け入れる前戯を手慣れて用意する。',
          ]);
          await era.printAndWait([
            '濡れた深いキスの中で ',
            you.get_colored_name(),
            ' と粘る体液を絡め合い、乗ってきた小さな',
            urara.sex_slave_title,
            'は手慣れて自分の服を脱ぐ。',
          ]);
        } else {
          await urara.say_and_wait([
            'はぁ……ごめんね、',
            callname,
            ' の服、汚しちゃった……でもウララ、もう、がまんできない……',
          ]);
          await urara.say_and_wait([
            'ウララ、',
            callname,
            ' の願い、叶えるから。だからウララ、頑張る……はぁん～',
          ]);
          await era.printAndWait([
            '本能に押されて恋人と抱き合い、愛人の命令で、小さな',
            urara.sex_slave_title,
            'は不慣れでも真剣に、主人への奉仕の前戯を始める。',
          ]);
          await era.printAndWait([
            'ぼんやり意識が飛ぶ隙間に口の中を侵され、',
            you.get_colored_name(),
            ' に体を好きにされる小さな',
            urara.uma_sex_title,
            'は、すぐ服を剥がされる。',
          ]);
        }
        await urara.say_and_wait([
          '……',
          callname,
          '、今日は、好きなだけ味わって……クリスマスプレゼントのウララを～？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' に下へ押し倒される最後、愛情でとろんとした ',
          urara.get_colored_name(),
          ' は小さく ',
          you.get_colored_name(),
          ' の耳たぶを舐め、二人だけの淫らな晩餐の始まりを告げる……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  // TODO Synced from the current i18n template; this new scene is not translated yet.
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {number} pregnant 春乌拉拉作为母亲的孩子数量（生下+怀孕）
   * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
   */
  async load_talk(urara, inner_urara, callname, pregnant, high_relation) {
    const buffer = [];
    if (pregnant) {
      if (high_relation) {
        if (era.get('love:52') >= 75) {
          buffer.push(
            () =>
              urara.say_and_wait([
                callname,
                '，下次再见时，请多抱抱',
                pregnant > 1 ? '孩子们' : '这个孩子',
                '吧！',
              ]),
            () =>
              urara.say_and_wait(
                '没关系的，乌拉拉会安慰好大家的，如果下次能再见的话，再一起——',
              ),
          );
        } else {
          buffer.push(
            () =>
              urara.say_and_wait([
                '看来 ',
                callname,
                ' 和乌拉拉，都没能做好准备呢……对不起……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                '，乌拉拉想留下',
                pregnant > 1 ? '孩子们' : '这个孩子',
                '，或者下次还能再见的话——',
              ]),
          );
        }
      } else if (era.get('love:52') >= 75) {
        buffer.push(
          () =>
            urara.say_and_wait([
              '我们还能见面对吧？',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '也能……对不起，但是我们还能——',
            ]),
          () =>
            urara.say_and_wait([
              '不要抛弃',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '！求你了，',
              callname,
              '！答应乌拉拉，至少让我们下次——',
            ]),
        );
      } else {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 对',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '是什么样的感觉呢？乌拉拉还不想……',
            ]),
          () =>
            urara.say_and_wait([
              '只是被抛弃的话乌拉拉一个人也可以，但是',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '也再也不见的话——',
            ]),
        );
      }
      await get_random_entry(buffer)();
      await inner_urara.say_as_unknown_and_wait(
        '……哈，一句安慰您的话都想不出来呢……',
      );
    } else {
      if (high_relation) {
        if (era.get('love:52') >= 75) {
          buffer.push(
            () =>
              urara.say_and_wait([
                '乌拉拉还不想离开呢，所以 ',
                callname,
                '，下次也可以和乌拉拉在一起吗……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                '，还能相遇的话，不管发生什么，一定可以再次喜欢上彼此吧——',
              ]),
          );
        } else {
          buffer.push(
            () =>
              urara.say_and_wait([
                '不用担心我哦？乌拉拉愿意相信 ',
                callname,
                ' 的选择！所以——',
              ]),
            () =>
              urara.say_and_wait([
                '下次还能在一起的话，也能和 ',
                callname,
                ' 做上舒服的事就好了——',
              ]),
          );
        }
      } else if (era.get('love:52') >= 75) {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 不是在抛弃乌拉拉对吧……对不起，不管发生什么，乌拉拉都不怪 ',
              callname,
              '……',
            ]),
          () =>
            urara.say_and_wait(
              '还是厌倦了，或者乌拉拉又做错了什么？对不起，乌拉拉还是……对不起……',
            ),
        );
      } else {
        buffer.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 再见到上一个乌拉拉的时候，可以……对她好一点吗？',
            ]),
          () =>
            urara.say_and_wait([
              callname,
              '，下次的话，还能和 ',
              callname,
              ' 一起……对不起，没什么……',
            ]),
        );
      }
      await get_random_entry(buffer)();
      await inner_urara.say_as_unknown_and_wait(
        '……姑且还没关系，下次别做过头了哦？',
      );
    }
  },
  basement_end: (() => {
    const title = '無期の自由';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait(['……']);
      await era.printAndWait([
        '今は何時だ？ 前回時間を聞いてから、またどれだけ経った？ 昼夜のない密室で、',
        you.get_colored_name(),
        ' は時間の感覚を失っている。',
      ]);
      await era.printAndWait(['ただ、今さら時間は大事なのか？']);
      await era.printAndWait([
        '元は薄暗い室内が優しい暖色に満たされ、生活感のある家具が部屋を埋め、片側の壁には自然光の偽窓まで掛かっている。',
      ]);
      await era.printAndWait([
        'ベッド脇の机にはパソコンと書類、部屋の中央の低い机にはお菓子と果物。反対側の壁際には独立した浴室まで仕切ってある……',
      ]);
      await era.printAndWait([
        '普通の居間みたいに明るく整えられたまわりを見回し、',
        you.get_colored_name(),
        ' は少し夢心地だ。',
      ]);
      await urara.say_and_wait(['えへへ～ここ、二人の小さなお家みたいだね！']);
      await era.printAndWait([
        '最初は冗談みたいな言葉が、今はだんだん現実になっている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        urara.get_colored_name(),
        ' が人に',
        urara.sex,
        'のトレーナーの行方をどう説明したのか知らない。家具をどこから運び、水道も電気もどう引いたのかも知らない。',
      ]);
      await era.printAndWait([
        '本来なら大事な問いなのに、今は手を伸ばせば小さな',
        urara.uma_sex_title,
        'の柔らかいピンクの長い髪に触れる。それも、もうどうでもよくなっている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' のそばに安心して眠る ',
        urara.get_colored_name(),
        ' は、夢の中で知らないうちに幸せそうな笑顔を浮かべている。',
      ]);
      await era.printAndWait([
        'ずっと出ようとして、最後は諦めたトレーナーと、監禁を選んでだんだん優しくなった',
        urara.uma_sex_title,
        '。いったい誰が誰を飼い慣らしたのか。',
      ]);
      await era.printAndWait([
        'その答えは、たぶんここにいる二人にしか分からない。',
      ]);
      await urara.say_and_wait([callname, '、', callname, '、今日は……']);
      await era.printAndWait([
        'いつの間にか短い眠りから覚めた ',
        urara.get_colored_name(),
        ' が、寄りかかっている人を見上げている。また澄んで明るい瞳が、桜色を咲かせている。',
      ]);

      era.printButton('「……今日は、外へ出る日か？」', 1);
      await era.input();

      await urara.say_and_wait([
        'うん、今日は ',
        callname,
        ' を外に連れてって、お日さまを浴びる日だよ？',
      ]);
      await era.printAndWait([
        '「愛人」の逃走は怖くないのか。そんな問いは、もう出ない。本当に去りたいなら、',
        you.get_colored_name(),
        ' はとうに何度も出ていっている。',
      ]);
      await era.printAndWait([
        '久しぶりに人通りの多い通りに立ち、二人は指を組むだけなのに、手錠や鎖よりしっかり結ばれているみたいだ。',
      ]);
      await era.printAndWait([
        '春の花が咲くみたいな ',
        urara.get_colored_name(),
        ' の笑顔が青空の下で元どおりになるのを見て、何度目かも分からない夢心地がまた ',
        you.get_colored_name(),
        ' の額へ込み上げる。',
      ]);
      await era.printAndWait(['本当は、分かっていたこともあるだろう？']);
      await era.printAndWait([
        '優しい',
        urara.sex,
        'が「監禁」を選んだ理由。背徳の体で ',
        you.get_colored_name(),
        ' と溶け合った、数えきれない濁った夜の理由。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は独占したいだけではない。',
        urara.sex,
        'は今も、自分のトレーナーを正したい、守ることさえしたい。',
      ]);
      await era.printAndWait([
        urara.sex,
        'はただ心から、',
        you.get_colored_name(),
        ' が',
        urara.sex,
        'で幸せになってほしい。',
        urara.get_colored_actual_name(),
        ' という小さな',
        urara.uma_sex_title,
        'に愛されるトレーナーであってほしい。',
      ]);
      await era.printAndWait([
        'だから',
        urara.sex,
        'は、トレーナーにも本気で自分を見てほしい。だから ',
        urara.get_colored_actual_name(),
        ' という小さな',
        urara.uma_sex_title,
        'は、もう ',
        you.get_colored_name(),
        ' を誰にも渡したくない。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' はとうに、',
        urara.sex,
        'のトレーナーを責めたいとは思っていない。',
        urara.sex,
        'は一度も ',
        you.get_colored_name(),
        ' を傷つけたいとは思わなかった。ただ ',
        you.get_colored_name(),
        ' に、ずっと',
        urara.sex,
        'のそばにいてほしいだけだ。',
      ]);
      await era.printAndWait(['たぶん、これでもいい……']);
      await era.printAndWait([
        '物語の行き方が美しいとは言えない。それでも、互いを縛り合った二人に、幸せな終わりは残せる。',
      ]);

      era.printButton('「たぶん、俺はずっとウララを愛してた。」', 1);
      await era.input();

      await era.printAndWait([
        '当たり前の宣言ではない。誰かを愛することは、もともと当たり前ではない。ただ今の ',
        you.get_colored_name(),
        ' は、昔はいつも忘れていた一事を、より確かに知っている。',
      ]);
      await era.printAndWait([
        'かつては ',
        you.actual_name,
        ' という名の',
        you.sex,
        'が、たくさんの人を、たくさんの',
        urara.uma_sex_title,
        'を好きになったかもしれない。だが今は、選ぶことに意味はない。',
      ]);
      await era.printAndWait([
        'だって ',
        you.get_colored_name(),
        ' のそばに立つこの小さな',
        urara.uma_sex_title,
        'は、余地を残さず ',
        you.get_colored_name(),
        ' の全部になろうとしている。',
      ]);
      await era.printAndWait([
        'だから今日は特別な日になる。小さな',
        urara.uma_sex_title,
        'も、かつて悪い子になると決めたときと同じように、もう決めてしまっている。',
      ]);
      await urara.say_and_wait([callname, '、ウララ、決めたよ——']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の小さな呟きを聞いたのか、小さな',
        urara.uma_sex_title,
        'はそう宣言する。',
      ]);
      await urara.say_and_wait([
        'ちょっと名残惜しい気もするけど、一緒にあそこから出て、ちゃんとお日さまを浴びられるところに住もう！',
      ]);

      era.printButton('「でも……」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        ' とウララ、もうそんな関係じゃなくていいよね？',
      ]);
      await urara.say_and_wait([
        'ウララ、もう子供じゃないよ？ だから ',
        callname,
        ' も追いついて？ ここの陽射し、気持ちいいよ！',
      ]);
      await era.printAndWait([
        'まぶしい陽射しが ',
        you.get_colored_name(),
        ' の顔に降り、横から ',
        you.get_colored_name(),
        ' を抱き、',
        urara.get_colored_name(),
        ' の笑顔は陽射しと同じくらい明るい。',
      ]);
      await era.printAndWait(['やっぱり、もう「でも」なんて要らない……']);
      await era.printAndWait([
        '「赦されない罪人」は、いちばん自由な、「',
        urara.get_colored_actual_name(),
        ' の愛」という名の「牢」に閉じ込められている——',
      ]);
      await era.printAndWait([
        'これは世界でいちばん幸せな「無期懲役」か？ 今の ',
        you.get_colored_name(),
        ' には、まだ答えが分からない。',
      ]);
      await era.printAndWait([
        'この先、陽射しの下に立つ ',
        you.get_colored_name(),
        ' は余生を、いちばん ',
        you.get_colored_name(),
        ' を愛する「小さな看守」と一緒に、ずっと続いていく「獄中の思い出」に書いていく。',
      ]);

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '……はぁ。',
        urara.sex,
        'がそう望むなら、それが最善の終わりでしょう。ただ、少しあなたが得をした気がします。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'わたくしも狭量な人間ではありません。ただ、少しだけ面白くないだけです。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '最初にウララと立てた約束を、まだ覚えていますか？ あなたは、あまりに多くを省いていませんか？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '拗ねるつもりはありません。ですが、こんな虚ろな終わりで結ぶのは、少し雑ではありませんか？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'また会う機会があるなら、十二分に気を引き締めてください。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
