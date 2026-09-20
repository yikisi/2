/**
 * @file ワンダーアキュート - 育成
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  ts_add: (() => {
    const title = '熱い追加調教';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await acute.say_and_wait('ふふふ……この程度では——');
      await era.printAndWait([
        '調教が終わったばかりなのに、体操服の ',
        acute.get_colored_name(),
        ' はまだ物足りなさそうだ。',
      ]);
      await acute.say_and_wait(
        'この程度では、とても『満足』とは言えませんね……',
      );
      await acute.say_and_wait(['ねえねえ、', callname]);
      await era.printAndWait([
        '服を引っ張り、息をするたびに湯気の匂いを漂わせる ',
        acute.get_colored_name(),
        '。明るい瞳が光る——',
      ]);
      await acute.say_and_wait(
        'まだ、続けられますか？ わたしは、まだいけますよ——',
      );
      era.print('…………なぜか、意味深な一言に聞こえる。');
      era.printButton('許可', 1);
      era.printButton('保留', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '頷いて、',
          acute.get_colored_name(),
          ' の願いを受けた。',
        ]);
        await era.printAndWait('トレーナーとして、「無理だ」とは言えない。');
        await era.printAndWait([
          '夕陽の下、',
          you.get_colored_name(),
          ' とワンダーアキュートの姿が、グラウンドで走り続ける——',
        ]);
      } else {
        await era.printAndWait([
          '……',
          acute.get_colored_name(),
          ' はわざと挑発して、承諾を引き出そうとしている気がする。',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          ' の提案を押し切って断り、早めに風呂へ入って休むよう言いつけた。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title = '超究極武神極大化以下略 · チョコレートムースケーキ';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, minoru, taste, you, callname) => {
      await era.printAndWait([
        '冬の気配が薄れ、万物が蘇り始める。屋上で出会った、おばあちゃんみたいな',
        acute.teen_sex_title,
        'と出会ってから、あっという間に二月も半ばだ。',
      ]);
      await era.printAndWait([
        'もうバレンタインだ。トレセン学園に隣接する商店街では、多くの店が「バレンタイン特売」を掲げ、季節の商品を売っている。',
      ]);
      await era.printAndWait([
        '買い物の主役は、もちろんトレセンの',
        acute.uma_sex_title,
        'たちだ——',
        acute.uma_sex_title,
        'の多くはレースに集中していて、恋にはあまり興味がない。それでも小さな菓子を友情の贈り物にする分には、悪くない。',
      ]);
      await era.printAndWait([
        'もちろん、トレセンで働く教職員も混ざっている……それはまた別の話だ。',
      ]);
      await you.say_and_wait(['……何だって？ なぜ商店街に来たか、だと？']);
      await era.printAndWait([
        '——それはもちろん、',
        taste.get_colored_name(),
        ' と ',
        minoru.get_colored_name(),
        ' の命令だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がこのところの不調から抜け出したのを見て、',
        minoru.get_colored_name(),
        ' が教職員向けのバレンタイン・パーティーを開き、気分転換しようと提案したのだ。',
      ]);
      await era.printAndWait([
        '商店街で予約済みの「チョコレートムースケーキ」を受け取る役が、',
        you.get_colored_name(),
        ' に回ってきた。',
      ]);
      await you.say_and_wait([
        '……ただの運び役にされた気がする。もしかして ',
        minoru.get_colored_name(),
        ' は俺が嫌いなのか？',
      ]);
      await era.printAndWait([
        'もともと「チョコレートムースケーキ」を取りに行くのは ',
        minoru.get_colored_name(),
        ' の仕事だった。なのに',
        minoru.sex,
        'はどうしても ',
        you.get_colored_name(),
        ' に行かせたがる……妙な話だ。',
      ]);
      await era.printAndWait([
        '今さら言っても遅い。来てしまった以上、済ませるしかない。',
      ]);
      await era.printAndWait([
        '少し投げやりな気持ちで、',
        you.get_colored_name(),
        ' は溜息をつき、商店街の奥のケーキ店へ入った……',
      ]);

      era.drawLine();
      await era.printAndWait([
        '……校舎の三女神像と同じ高さのケーキ箱は、何なんだ。',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        '……お待たせしました、',
        you.actual_name,
        'さん。駿川',
        minoru.adult_sex_title,
        'がご予約の『超究極武神極大化威力強化豪華特典版 · チョコレートムースケーキ』です',
      ]);
      await era.printAndWait([
        '……ケーキ屋の店員は、みんな早口言葉を覚えるのか。',
      ]);
      await you.say_and_wait([
        '……店員さん、店いっぱいに収まりきらないこの箱が、俺の頼んだチョコレートムースケーキで合ってる？',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        '？ 『',
        you.actual_name,
        '』さん、ですよね？',
      ]);
      await era.printAndWait([
        'そう、それは確かに ',
        you.get_colored_name(),
        ' の名前だ……この瞬間だけは、認めたくなかったが。',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        'では間違いありません。駿川',
        minoru.adult_sex_title,
        'がご予約の『超究極武神極大化威力強化豪華特典版 · チョコレートムースケーキ。』',
      ]);
      await era.printAndWait(['よし、逃げられない。']);
      await you.say_and_wait([
        '……分かった。一万歩譲って、一万歩譲って、目の前のこの巨大なものが俺のケーキだとしよう。で、どうやってトレセンまで運ぶんだ？',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        '？ トレセン学園の方ですよね？',
      ]);
      await era.printAndWait([
        '店員は再び、不思議そうな目で ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await era.printAndWait([
        'そう、',
        you.get_colored_name(),
        ' はそうだ……ここで「違う」と言える選択肢はない。',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        'それなら簡単です——この箱を担いで歩いてお帰りになれば。',
      ]);
      await you.say_and_wait([
        'いやいやいや！ 無理だろ！？ 俺をヘラクレスとでも思ってるのか？',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        'でも',
        acute.uma_sex_title,
        'ならできますよね？',
      ]);
      await you.say_and_wait([
        acute.uma_sex_title,
        'でも無理だよ！？ そんな気楽に言うな！',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        'でも駿川',
        minoru.adult_sex_title,
        'はできますよ？',
      ]);
      await you.say_and_wait(['駿川……']);
      await era.printAndWait(['…………ああ、なるほど。']);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' か。それで筋が通った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はすべてが自然な流れに思え、顔を上げた瞬間、もう迷いも苦しさも残らなかった。',
      ]);
      await you.say_as_passer_by_and_wait('店員', [
        'とにかく、当店の商品は販売後の返品・交換はできません。これが駿川',
        minoru.adult_sex_title,
        'がご注文のケーキです——',
      ]);
      await era.printAndWait([
        'そう言って、店員は ',
        you.get_colored_name(),
        ' に恭しく礼をした。',
      ]);
      await you.say_as_passer_by_and_wait('店員', ['ご署名をお願いします。']);

      era.drawLine();
      await you.say_and_wait(['力点、支点、作用点……']);
      await you.say_and_wait(['力点、支点、作用点……']);
      await era.printAndWait([
        '自分の何倍もあるケーキ箱を背負って通りを歩く。これが現実でなければ、',
        you.get_colored_name(),
        ' はダークソウルの新キャラに見えたはずだ。',
      ]);
      await era.printAndWait([
        '重力で箱が傾かないよう、',
        you.get_colored_name(),
        ' はバランスを保つ呪文を唱え続けなければならない。',
      ]);
      await you.say_and_wait(['力点、支点、作用点……']);
      await you.say_and_wait(['力点、支点、作用点……']);
      await acute.say_and_wait([
        '……ねえ、',
        callname,
        '、何の呪文を唱えているのですか？',
      ]);
      await era.printAndWait(['！？', acute.get_colored_name(), '！？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' が首を傾けると、',
        acute.get_colored_name(),
        ' が身を屈めて、',
        you.get_colored_name(),
        ' の傍らに立っていた。',
      ]);
      await you.say_and_wait('ワンダーアキュート？ いつからいたんだ？');
      await acute.say_and_wait([
        '……',
        you.actual_name,
        'さんがケーキ店に入ったときから、ついてきていましたよ……ねえ、',
        you.actual_name,
        'さん。何の呪文を唱えているのですか？',
      ]);
      await era.printAndWait(['最初からついていたのか……ごまかしようがない。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は気まずい空気を笑いで流そうとしたが、口を開けた瞬間、額の汗が舌先へ落ち、塩辛くてとても笑えなかった。',
      ]);
      await you.say_and_wait([
        'これは……唱えると平常心を保てる呪文だ。いわゆる『静心の呪』——',
      ]);
      await acute.say_and_wait(['『静心の呪』、ですか……']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' は考え込むように「静心の呪」と口にする。',
      ]);
      await era.printAndWait([
        '……あれ？ 突っ込まないのか？',
        you.get_colored_name(),
        ' は突っ込まれると思っていた。',
      ]);
      await acute.say_and_wait([
        '『静心の呪』なのですね、よかった。',
        callname,
        ' が憑かれたのかと思いました……',
      ]);
      await you.say_and_wait(['憑かれた？']);
      await acute.say_and_wait([
        'ええ、だって ',
        callname,
        ' はケーキ店から、どう見ても大きさがおかしいものを背負って出てきましたから。',
      ]);
      await era.printAndWait(['ああ……そっちか。']);
      await era.printAndWait([
        '傍目には、こんな大きなケーキ箱を背負った人間は、どう見てもおかしい。',
      ]);
      await acute.say_and_wait(['お手伝いしましょうか、', callname, '？']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' の声は相変わらず優しいが、巨物を背負った ',
        you.get_colored_name(),
        ' には、その穏やかな顔から癒やされる余裕がない。',
      ]);
      await you.say_and_wait(['いい……重力仕事は若者の役目だ。']);
      await era.printAndWait([
        '当然のように ',
        acute.get_colored_name(),
        ' の助けを断った。',
        you.get_colored_name(),
        ' にはトレーナーとしての矜持がまだ残っている。少なくとも荷物運びのような力仕事を、',
        you.get_colored_name(),
        ' は ',
        acute.get_colored_name(),
        ' に押しつける気にはなれない。',
      ]);
      await era.printAndWait([
        'だいたい、',
        acute.get_colored_name(),
        ' は見た目からしてこんなに「華奢」だ。',
        acute.sex,
        'に重力の束縛を受けさせるわけにはいかない。',
      ]);
      await acute.say_and_wait([
        'ねえ、',
        callname,
        '、年齢で言えば、わたしの方が下ですよ？',
      ]);
      await era.printAndWait([
        '怒っているのではなく、穏やかに訂正しているだけだ。',
        acute.get_colored_name(),
        ' は急がず話している。',
      ]);
      await era.printAndWait([
        'それから',
        acute.sex,
        'は背を伸ばし、歩幅を少し落とし、',
        you.get_colored_name(),
        ' から見えない横へ退いた。',
      ]);
      await era.printAndWait([
        acute.sex,
        'は顔を上げ、巨大な箱のチョコレートムースの印を見て、自分にしか聞こえない声でつぶやく。',
      ]);
      await acute.say_and_wait([
        '……',
        callname,
        ' は、チョコレートケーキがお好きなのですね——',
      ]);
      await era.printAndWait([
        'そう言って、',
        acute.get_colored_name(),
        ' は息を吐き、右手を ',
        you.get_colored_name(),
        ' から見えない箱の後ろへ伸ばした。',
      ]);
      await era.printAndWait([
        '——人差し指の先が、ケーキ箱の後方にそっと当たる。',
      ]);

      era.drawLine();
      await era.printAndWait([
        '驚くべきことに、',
        you.get_colored_name(),
        ' は途中で倒れなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は巨大チョコレートムースの輸送中、体力が尽きて道で倒れると思っていた。なのに後半、背中が急に軽くなり、最後は小走りでトレセンまで戻れた。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' と別れたあと、なぜかまた背中が重くなった。だがあと二、三歩だ。',
        you.get_colored_name(),
        ' はすぐに巨大チョコレートムースケーキを ',
        minoru.get_colored_name(),
        ' へ渡した。',
      ]);
      await minoru.say_and_wait([
        'お疲れさま、',
        you.actual_name,
        'さん。パーティーはあなただけですよ。さあ、入って——',
      ]);
      await you.say_and_wait('悪い、先に休む。');
      await minoru.say_and_wait(['えっ？']);
      await era.printAndWait([
        'これほど大きな箱を遠くまで背負えば、',
        you.get_colored_name(),
        ' の体力はもう尽きている。今の ',
        you.get_colored_name(),
        ' はパーティーより、ベッドに倒れたい。',
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' に事情を話し、',
        you.get_colored_name(),
        ' は振り返らず休憩室へ戻った。今日も、重い一日だった。',
      ]);
      await era.printAndWait(['…………………']);
      await era.printAndWait(['………………']);
      await era.printAndWait(['…………']);
      await era.printAndWait([
        'そもそも、このパーティーは何のために開いたんだっけ。',
      ]);
      await era.printAndWait(['まあ、どうでもいい。']);

      era.drawLine();
      await era.printAndWait([
        '翌朝、休憩室の扉の前に「ご就職おめでとう」と書かれたチョコレートムースケーキが置いてあった。',
      ]);
      await era.printAndWait(['誰が置いたのだろう。気になる。']);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '不安';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        '六月、',
        acute.get_colored_name(),
        ' のメイクデビュー。',
      ]);
      await era.printAndWait([
        '会場は札幌近くの小さな競馬場だ。出走側として、',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' は一日早く現地へ着いた。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('不安。');
      await era.printAndWait('極度の不安。');
      await era.printAndWait(
        '喩えるなら、月面へ行ったアポロ17号の帰還カプセルの床に、突然ねじが一本現れたほどの不安だ。',
      );
      await era.printAndWait(
        '夜は眠れない。ベッドに凭れているだけでも、落ち着かない心拍が聞こえる。',
      );
      await era.printAndWait('……正直、うまくいくのか。');
      await era.printAndWait([
        '担当の ',
        acute.get_colored_name(),
        ' は、本当にこのレースで勝てるのか。',
      ]);
      await era.printAndWait('握りしめた掌が、無意識に汗をかく……');
      await acute.say_and_wait('……');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        '振り返ると、',
        acute.get_colored_name(),
        ' が後ろに立っていた。',
      ]);
      await era.printAndWait(
        '無意識に、汗ばんだ両腕を背に回す。悪さをした子供そのものだ。',
      );
      await acute.say_and_wait(['大丈夫ですよ、', callname, '。']);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait('太陽のような、温かい微笑み。');
      await era.printAndWait('それを見た自分は、なぜか名のない罪悪を覚える。');
      await acute.say_and_wait([
        'もう十分、頑張ってくださいましたよ、',
        callname,
        '。',
      ]);
      await acute.say_and_wait('あとは、わたしに任せてください。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の肩を叩き、',
        acute.get_colored_name(),
        ' は振り返らず、凛とした背中で通路の出口へ向かう——',
      ]);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait('なんという、凛とした背中だろう。');
      await era.printAndWait(
        'その巍峨とした後ろ姿を見て、胸に恥じらいが浮かぶ——',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async begin_race_win(acute, you, callname) {
    await era.printAndWait('空の果ての燕が、競馬場の上を巡る。');
    await era.printAndWait('語り、伝え、述べ、表す。');
    await era.printAndWait('凛とした姿を伝え、凱旋の答えを得る——');
    await era.printAndWait('小さな会場、百人にも満たない観客。');
    await era.printAndWait('喝采は、それほど沸き立っていないかもしれない。');
    await era.printAndWait(
      'だが昂り、凛とした姿は、ひとりの胸に忘れがたい印を残すには十分だ。',
    );
    await era.printAndWait([
      '場の上で、',
      acute.get_colored_name(),
      ' は疑いようのない中心に立っている。',
    ]);
    await era.printAndWait('その凛とした姿に、いつもの穏やかな笑み。');
    await era.printAndWait(['金色の光の下、', acute.sex, 'は拳を高く上げた。']);
    await era.printAndWait('——なんという輝きだろう。');
    await era.printAndWait([
      'その神聖な一瞬を直視し、',
      you.get_colored_name(),
      ' は恍惚の中で神を失った。',
    ]);
    await era.printAndWait([
      'そのあいだに、',
      acute.sex,
      'は勝利の儀式を終えていた。',
    ]);
    await era.printAndWait([
      'つま先立ちで、',
      acute.get_colored_name(),
      ' がこちらへ歩いてくる——',
    ]);
    era.printButton('「——」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は口を開き、',
      acute.sex,
      'の勝利を祝おうとした。',
    ]);
    era.printButton('「……あ、あ——」', 1);
    await era.input();
    await era.printAndWait('だが口を開いた瞬間、言葉が消えた。');
    await era.printAndWait([
      you.get_colored_name(),
      ' が、こんなに取り乱した自分を責めているうちに、',
    ]);
    await era.printAndWait(['先に口を開いたのは', acute.sex, 'だった。']);
    await acute.say_and_wait(['むふふ……本当にお疲れさまでした、', callname]);
    await era.printAndWait(['——', acute.sex, 'が口を開いた。']);
    await era.printAndWait([acute.sex, 'の最初の一言は、']);
    await era.printAndWait([
      '敗れた ',
      you.get_colored_name(),
      ' への礼だった。',
    ]);
    era.printButton('「————」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' はその場で啞然とし、周囲が一瞬で静まり、',
      you.get_colored_name(),
      ' の胸へ感情の熱波だけが押し寄せる。',
    ]);
    await era.printAndWait('指が止まらない——');
    await acute.say_and_wait([
      '……',
      callname,
      '？ どうしました。急に具合が悪いのですか？',
    ]);
    era.printButton('「いや、大丈夫だ——俺は平気だ。」', 1);
    await era.input();
    await era.printAndWait([
      '噴き出す情を抑え、指と眉から滲む水を押さえ、',
      you.get_colored_name(),
      ' はできるだけ狼狽を整える。',
    ]);
    era.printButton(`「何もない——安心してくれ、${acute.name}。」`, 1);
    await era.input();
    await era.printAndWait([
      'それがその日、',
      you.get_colored_name(),
      ' が ',
      acute.get_colored_name(),
      ' に言った最後の言葉だった。',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait([era.get('flag:当前年'), ' 年。']);
    await era.printAndWait([
      '一度敗れた育成者が、担当の',
      acute.uma_sex_title,
      'に拾われた最初の年。',
    ]);
    await era.printAndWait(
      'そしてこの年の六月、ありふれたメイクデビューのあと、一度敗れた育成者は決心した。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は決めた。担当の',
      acute.uma_sex_title,
      'を',
    ]);
    await era.printAndWait('本当の殿堂入りへ——');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async begin_race_lose(acute, you, callname) {
    await era.printAndWait('囲碁には「棋差一着」という成語がある。');
    await era.printAndWait('その続きは、「満盤皆輸」だ。');
    await era.printAndWait('今起きていることを表すなら、これ以上ない。');
    await era.printAndWait(
      '凛とした体が豊かで美しくても、一手の差は覆せない事実だ。',
    );
    await era.printAndWait(
      '掲示板が示す事実の前では、敗北への弁明はすべて言い逃れに聞こえる。',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' はゆっくり場を離れ、拍手と喝采は今、',
      you.get_colored_name(),
      ' と ',
      acute.get_colored_name(),
      ' のものではない。',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '少し沈んだ ',
      acute.get_colored_name(),
      ' の姿を見て、',
      you.get_colored_name(),
      ' は何か言いたくなる——',
    ]);
    await acute.say_and_wait(['大丈夫ですよ、', callname]);
    await era.printAndWait('……');
    await era.printAndWait('口を開く前に、相手からの慰めが先に届いた。');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' は、今何をすべきか分からない。',
    ]);
    await era.printAndWait('氷のような冷気が、頭頂から爪先まで落ちる。');
    await era.printAndWait([
      you.get_colored_name(),
      ' はその場に立ち尽くし、どうすることもできず、静かに ',
      acute.get_colored_name(),
      ' が遠ざかるのを見送った。',
    ]);
    await era.printAndWait('…………………');
    await era.printAndWait('……………');
    await era.printAndWait('………');
    await era.printAndWait('一瞬では、調教の喜びにはならない。');
    await era.printAndWait('世は、勝敗のその一瞬だけを信じる——');
  },
  ws_47: (() => {
    const title = '賭けと愛と飛行';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_301 ワンダーアキュートの駿川たづなへの呼び方
     * @param {PrintedSpan} m_call_t 駿川たづなの秋川やよいへの呼び方
     * @param {PrintedSpan} y_call_m プレイヤーの駿川たづなへの呼び方
     */
    const f = async (
      acute,
      minoru,
      you,
      callname,
      call_301,
      m_call_t,
      y_call_m,
    ) => {
      await era.printAndWait(['春が去り秋が来て、気づくとクリスマス前夜だ。']);
      await era.printAndWait([
        '冬、生徒が風邪をひかないよう校舎の暖房は全開だ。あまりに効きすぎて、',
        you.get_colored_name(),
        ' はマフラーとコートを脱ぎ、教職員休憩室の扉横のハンガーに掛けざるを得なかった。',
      ]);
      await era.printAndWait([
        'クリスマスとはいえ、この時期のレースも少なくない。トレセン学園のトレーナーである以上、持ち場で働き続けるしかなく、他の人のように休みを満喫はできない。',
      ]);
      await era.printAndWait([
        '……とはいえ、夜になれば仕事の合間に休む時間くらいは作れる。',
      ]);
      await era.printAndWait([
        '誰の提案だったか、休憩室の教職員が集まり、引き出しの隙間に隠していたトランプを取り出した。教職員の執務室は、たちまち楽しげな空気に包まれる。',
      ]);
      await era.printAndWait([
        '大人なら、何か賭けるのが自然だ。何を賭けようと、',
        you.get_colored_name(),
        ' には絶対の自信がある。誰にも負けない、と。',
      ]);
      await you.say_and_wait(['何だって？ なぜ誰にも負けないか、だと？']);
      await you.say_and_wait([
        '聞くまでもない。鼻の眼鏡を押せば、分かりきっている。',
      ]);
      await era.printAndWait([
        'これは ',
        you.get_colored_name(),
        ' が今日の賭けのために、「あらゆる生体実験を受ける」契約書（以下、身売り契約）に署名して、商店街の謎の娘から借りた「透視フレーム」入りの万能眼鏡だ。これがあれば、',
        you.get_colored_name(),
        ' は相手の手札をすべて見透かし、賭けで不敗の地に立てる。',
      ]);
      await era.printAndWait([
        'もちろん、この眼鏡には小さな付属機能もある。たとえば、服の上から裸が見える。だから今、',
        you.get_colored_name(),
        ' は桐生院トレーナーの小さな胸までよく見えている——',
      ]);
      await era.printAndWait([
        'だがそんなことはどうでもいい！ 女の体がトランプより大事なわけがない！？',
      ]);
      await era.printAndWait([
        'かつてゴールドシップは競馬場で一夜に百二十一億を賭けて勝った。お前 ',
        you.actual_name,
        ' が教職員相手に「20000」ウマコイン勝つなど、造作もない！',
      ]);
      await era.printAndWait(['今日、トレセンの賭聖伝説が江湖に轟く！']);
      await era.printAndWait(['各位、乞うご期待！']);

      era.drawLine({ content: '三女神像の前' });
      await acute.say_and_wait([
        'それで、',
        you.actual_name,
        'さん。どうして三女神像に吊るされて、晒されているのですか？',
      ]);
      await era.printAndWait([
        'トレセンの中庭。',
        acute.get_colored_name(),
        ' は池の傍らに座り、薄着のまま三女神像に吊るされた ',
        you.get_colored_name(),
        ' を見上げている。',
      ]);
      await you.say_and_wait([
        '……透視眼鏡の件を、',
        y_call_m,
        ' に見つかった。',
      ]);
      await acute.say_and_wait(['あら～ そうなのですね～']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' は穏やかに話し、ゆったりした口調はいつもの優しさだ。',
      ]);
      await era.printAndWait(['……本当は、最初は順調だった。']);
      await era.printAndWait([
        '透視眼鏡のおかげで、',
        you.get_colored_name(),
        ' は卓上で不敗を保ち、幾つかの賭けを経て、かなり稼いだ。「20000」ウマコインまで、あと一歩だった。',
      ]);
      await era.printAndWait([
        '——',
        minoru.get_colored_name(),
        ' が来るまでは。',
      ]);

      era.drawLine({ content: 'トレセン教職員執務室' });
      await minoru.used_to_say_and_wait([
        'ほう……1980年、西独輸入の最新技術、透視できるX線眼鏡ですね……',
      ]);
      await you.used_to_say_and_wait(['うっ！？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' が緊張して振り返ると、いつの間にか ',
        minoru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の後ろにいた。',
      ]);
      await minoru.used_to_say_and_wait([
        '安心してください。暴露するつもりはありません、',
        you.actual_name,
        'さん……',
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' は冷たく言い、',
        you.get_colored_name(),
        ' の肩を軽く叩く。だが一瞬で、見えない大きな手が ',
        you.get_colored_name(),
        ' を椅子へ押し付けた。',
      ]);
      await minoru.used_to_say_and_wait([
        '前から言っています。トレセンでトランプはいいですが、賭けはだめ、と。残念ながら皆さんは聞いてくれませんでした……これで教訓になれば、もう学内で賭ける人はいなくなるでしょう……',
      ]);
      await minoru.used_to_say_and_wait([
        'ただ、こんなに勝たせてしまうと、外聞が悪い……ちょうど最近 ',
        m_call_t,
        ' の方でも資金が足りないので——',
        you.actual_name,
        'さん、私と一勝負しませんか？',
      ]);

      era.drawLine({ content: '三女神像の前' });
      await acute.say_and_wait([
        'ええ……',
        call_301,
        ' の意図は、',
        callname,
        ' に贓金を賭けの形で渡させたい、ということでしょうね……',
      ]);
      await era.printAndWait([
        '……そうだ、',
        you.get_colored_name(),
        ' もそう思った。',
      ]);
      await era.printAndWait([
        '贓金を捨てて名誉を守るか、',
        minoru.get_colored_name(),
        ' にイカサマを暴露されて贓金も名誉も失うか……',
        you.get_colored_name(),
        ' は、後者を選ぶほど狂ってはいない。',
      ]);
      await acute.say_and_wait([
        'では、',
        you.actual_name,
        'さんは、なぜ像に吊るされたのですか？',
      ]);
      await era.printAndWait(['それは……']);

      era.drawLine({ content: 'トレセン教職員執務室' });
      await era.printAndWait([
        you.get_colored_name(),
        ' の贓金が「3000」ウマコインまで減ったところで、',
        minoru.get_colored_name(),
        ' は自ら手を止めた。',
      ]);
      await minoru.used_to_say_and_wait([
        'ふう……このあたりで。痛快な勝負でした。お疲れさまです。',
      ]);
      await you.used_to_say_and_wait(['えっ？ もういいのか？']);
      await minoru.used_to_say_and_wait([
        'ええ。私も悪魔ではありませんから。追い打ちはしません——それに、このお金、あなたにも使い道があるでしょう？',
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' は首を振り、緑の帽子が左右に揺れる。',
        acute.sex,
        'は人差し指を口元へ当て、狡猾な微笑みを浮かべた。',
      ]);
      await era.printAndWait([
        '……ところで、',
        acute.sex,
        'はどうして ',
        you.get_colored_name(),
        ' が今すぐ金が要ると知っていたんだ。',
      ]);
      await minoru.used_to_say_and_wait([
        'まあ、私の情報網を甘く見ないでください。',
      ]);
      await era.printAndWait([acute.sex, 'は笑って言い、多くは語らない。']);
      await minoru.used_to_say_and_wait([
        'それにしても、この西独のハイテク製品はどこで手に入れたのですか。この手のX線眼鏡は、もう生産終了していたはずですが……',
      ]);
      await you.used_to_say_and_wait([
        'いや……まず、これはX線眼鏡じゃない。透視フレームを差し込んだ万能フレームで……',
      ]);
      await minoru.used_to_say_and_wait(['……透視フレーム？']);
      await you.used_to_say_and_wait([
        'そう。簡単に言えば、このフレームを入れると、眼鏡で見たものがすべて透視できる。服も例……',
      ]);
      await era.printAndWait(['………………']);
      await era.printAndWait([
        '待て、',
        you.get_colored_name(),
        ' は今、何を口走った。',
      ]);
      await minoru.used_to_say_and_wait([
        '……服も例外ではない、ということは。今、誰を見ても裸……ですか？',
      ]);
      await you.used_to_say_and_wait(['…………']);
      await era.printAndWait([
        '漆黒の気配が ',
        you.get_colored_name(),
        ' へ迫る。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は鋭く察した。頭上に「危」の字が浮かび消えている。見えない大きな手が ',
        you.get_colored_name(),
        ' を押し潰す前に、何かしないと、何かしないとだめだ。',
      ]);
      await era.printAndWait(['謝るか。跪いて謝るか。今か。ここでか。']);
      await era.printAndWait([
        'いや、別の方法があるはずだ。もっと上手い言い方が、この危機を解けるはずだ……',
      ]);
      await era.printAndWait([
        '——そうだ、',
        you.get_colored_name(),
        ' は思いついた。こんな大事なことを忘れるなんて。',
        minoru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' のこの言葉を聞けば、必ず許してくれる。',
      ]);
      await you.used_to_say_and_wait([
        '……安心してください、',
        y_call_m,
        '。あなたの裸は見ていません。',
      ]);
      await you.used_to_say_and_wait([
        'だって俺はカード屋だ。カード屋の注意は、カードだけに——',
      ]);
      await you.used_to_say_and_wait(['上上上上上上上上上上上上上———']);
      await era.printAndWait([
        '……気づいたときには、体は ',
        minoru.get_colored_name(),
        ' のヌンチャクになっていた。',
      ]);

      era.drawLine({ content: '三女神像の前' });
      await acute.say_and_wait([
        'うわあ……裸を覗く眼鏡をかけて、裸には興味がない、などと言っては。牢屋行きになるだけでなく、性質もかなり悪いですよ、',
        callname,
        '。',
      ]);
      await you.say_and_wait(['まあ……確かにそのとおりだ——']);
      await era.printAndWait([
        'たしかに、どう考えても ',
        you.get_colored_name(),
        ' が先に悪い。だから三女神像に吊るされて反省しても、文句は言えない。',
      ]);
      await era.printAndWait(['ただ、それはそれとして……']);
      await you.say_and_wait([
        acute.get_colored_name(),
        '、こんなに遅いのに寮に戻らなくていいのか。門限とか……',
      ]);
      await acute.say_and_wait(['ええ……']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' は顔を上げ、空を遥かに見る。雲のない夜、都会の明かりの下では、星はほとんど見えない。',
      ]);
      await acute.say_and_wait([
        callname,
        ' をひとりにしておくのが、少し心配で……',
      ]);
      await you.say_and_wait(['……そうか。']);
      await you.say_and_wait('俺は大丈夫だ。早く戻って休め', true);
      await era.printAndWait([
        '……そんな言葉で',
        acute.sex,
        'を慰めたいのに、なぜか ',
        you.get_colored_name(),
        ' が口を開こうとした瞬間、空虚と胸の痛みが ',
        you.get_colored_name(),
        ' の喉を満たした。',
      ]);
      await era.printAndWait([
        '三女神像に吊るされ、高い所から ',
        acute.get_colored_name(),
        ' の寂しげな姿を見るしかない……なぜか、',
        you.get_colored_name(),
        ' は言いようのない息苦しさと胸の痛みを覚える。',
      ]);
      await you.say_and_wait('……なあ、ワンダーアキュート。');
      await acute.say_and_wait(['ん？']);
      await you.say_and_wait(['春節の休みに……一緒に沖縄へ行かないか？']);
      await acute.say_and_wait(['……沖縄、旅行ですか？']);
      await era.printAndWait([
        acute.sex,
        'は振り返り、像の上の ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await you.say_and_wait([
        'ああ。残りの『3000』ウマコインで、飛行機の往復、二泊一日の沖縄旅行……うん——足りるだろ？',
      ]);
      await acute.say_and_wait([
        '……どうして、わたしを誘うのですか、',
        callname,
        '？',
      ]);
      await you.say_and_wait([
        'それは……一時の迷いとも、最初から目的があったとも……最初から ',
        acute.get_colored_name(),
        ' のために、この賭けに出たのかもしれない。',
      ]);
      await you.say_and_wait([
        '『20000』ウマコインを稼いで、',
        acute.get_colored_name(),
        ' の前に持っていき、',
        acute.get_colored_name(),
        ' が驚いて『まあ～』と拍手する声を聞きたくて……',
      ]);
      await you.say_and_wait([
        acute.get_colored_name(),
        ' を喜ばせたくて、',
        acute.get_colored_name(),
        ' に褒めてほしくて……はは、変だろ？',
      ]);
      await acute.say_and_wait(['……']);
      await acute.say_and_wait(['……そう、ですか。']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' はうつむき、穏やかな笑顔のまま、顔色だけが少し沈む。',
      ]);
      await era.printAndWait([
        '月明かりが',
        acute.sex,
        'を照らす。恍惚の中、',
        acute.get_colored_name(),
        ' からいつもの穏やかさが薄れ、',
        acute.teen_sex_title,
        'らしい脆さが混ざる。',
      ]);
      await you.say_and_wait(['……悪い。傷つけたか。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は無意識に謝る。だが ',
        acute.get_colored_name(),
        ' は小さく首を振るだけだ。',
      ]);
      await acute.say_and_wait([
        'いいえ。反対です。わたしは、とても嬉しいのですよ。',
      ]);
      await acute.say_and_wait([
        'ただ、沖縄旅行は……やめましょう。わたし、暑い所はあまり得意ではなくて～',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' は立ち上がり、池を越え、高台へ上がり、像——つまり ',
        you.get_colored_name(),
        ' の前まで来る。',
      ]);
      await you.say_and_wait(['……暑い所が苦手？']);
      await acute.say_and_wait([
        'ええ。実は、飛行機があまり好きではなくて。空を飛ぶ鉄の鳥は、とても怖いのです……ですから——',
      ]);
      await acute.say_and_wait([
        callname,
        '、まずは自分を大切にしてくださいね。',
      ]);
      await era.printAndWait([
        '茶黒のマフラーを解き、',
        acute.get_colored_name(),
        ' はそれを ',
        you.get_colored_name(),
        ' の首にかける。',
      ]);
      await era.printAndWait([
        '二つ折り、裏返し、回して、隙間に通す……すぐにマフラーが巻かれた。',
      ]);
      await acute.say_and_wait(['はい、それでは……']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' の手が ',
        you.get_colored_name(),
        ' の頬を撫でる。',
      ]);
      await era.printAndWait([acute.sex, 'の掌は、とても冷たい。']);
      await acute.say_and_wait([
        '次は、こんなことしないでくださいね、',
        callname,
        '。',
      ]);
      await era.printAndWait(['………………']);
      await era.printAndWait(['……………']);
      await era.printAndWait(['………']);
      await era.printAndWait(['おかしい。']);
      await era.printAndWait(['どうして、急に涙が止まらないんだ。']);

      era.drawLine();
      await era.printAndWait(['再び目が覚めたときは、翌朝だった。']);
      await era.printAndWait([
        '服も乱れ、窓辺に寝ている。窓の外は白い雪が舞う。',
      ]);
      await era.printAndWait(['立ち上がると、少し茫然とする。']);
      await era.printAndWait([
        '昨日のことは、なぜかぼやけている。覚えているのは最後、',
        you.get_colored_name(),
        ' が温かい夢に沈んだことだけだ。',
      ]);
      await era.printAndWait([
        '起きて、いつものように顔を洗い、食べ、調教計画を立て、準備をする。商店街の謎の実験女に身売り契約で強制された薬物実験を受け、「3000」ウマコインで借りた透視フレームが壊れた借金を返す。',
      ]);
      await era.printAndWait(['意外なほど、気分がいい。']);
      await era.printAndWait([
        'それから中庭を通り、',
        acute.get_colored_name(),
        ' が枯れ木の洞に蹲っているのを見る。',
      ]);
      await era.printAndWait(['空から雪が舞う。']);
      await era.printAndWait(['つま先立ちで、そっと、そっと、']);
      await era.printAndWait(['後ろから近づく——']);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        '元日、',
        acute.get_colored_name(),
        ' とトレーナー室でテレビを見ながら、新年を待っている。',
      ]);
      await acute.say_and_wait('ふふふ～ こたつの中、ぽかぽかですね～');
      await era.printAndWait([
        'こたつに入った ',
        acute.get_colored_name(),
        ' は、みかんの白い筋を剥きながら、気ままに話す。',
      ]);
      await acute.say_and_wait([
        'あ、そうだ。',
        callname,
        '～ ひとつ聞いてもいいですか？',
      ]);
      era.printButton('「ん？ どうした？」', 1);
      await era.input();
      await acute.say_and_wait(
        '実は……最近、同年代と話すとき、若者との付き合い方がよく分からなくて。',
      );
      await acute.say_and_wait(
        '好きなもの、よく散歩する場所、最近聴いている音楽——そういった話題が、今の若者と噛み合わない気がするのです。',
      );
      await acute.say_and_wait(
        'ですから……新年になったら、同年代から見るわたしを、がらりと変えたいと思って……',
      );
      await acute.say_and_wait([
        'それで、',
        callname,
        '。どうすればいいと思いますか？',
      ]);
      era.println();
      era.printButton('「若者の文化をしっかり勉強しよう！」（根性+25）', 1);
      era.printButton('「そんなことは一旦置いておこう？」（スタミナ+20）', 2);
      era.printButton(
        '「もっと面白い話題で同年代の注目を集め、同年代の頂点を目指そう！」（スキルPt+20）',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await acute.say_and_wait('若者の文化を学ぶ、ですか……なるほど。');
          await acute.say_and_wait(
            'ではまず、携帯で今の流行を調べてみましょう。',
          );
          await acute.say_and_wait(
            'G.E.N.Z.A.I.N.O.R.Y.U.K.O……打ち間違い、削除——',
          );
          await acute.say_and_wait('あ、消しすぎました……やり直し——');
          await era.printAndWait(
            '人差し指で携帯を叩きながら、打ち込んだ文字を小さく読む。',
          );
          await era.printAndWait('遠くから見ると、かなりかわいい。');
          await acute.say_and_wait('G.E.N.Z.A.I.N.O.R.Y.U.K.O.U——エンター');
          await acute.say_and_wait('………………');
          await acute.say_and_wait('むる？ 画面が動きませんね？');
          await era.printAndWait([
            acute.get_colored_name(),
            ' の携帯操作は、よく分からない。',
          ]);
          await era.printAndWait(
            '傍で聞いている限り、エンターを確定キーと間違えたらしい。',
          );
          await era.printAndWait([
            '【若者文化の学習】は、',
            acute.get_colored_name(),
            ' にとって、まだ道のりが長そうだ——',
          ]);
          break;
        case 2:
          await acute.say_and_wait('一旦置いておく……ですか？');
          await acute.say_and_wait(
            'ええ……そうですね。新年なのですから——しっかり休まないと。',
          );
          await acute.say_and_wait(['では——どうぞ、', callname, '。']);
          await era.printAndWait([
            'ゆったりした ',
            acute.get_colored_name(),
            ' は、白い筋を取ったみかんを半分に割り、手渡してきた。',
          ]);
          await era.printAndWait('一片をちぎり、口へ——');
          era.printButton('「——————————————」', 1);
          await era.input();
          await era.printAndWait('酸っぱすぎる！！！！');
          await era.printAndWait([
            '傍らで、酸っぱさに顔を歪めた ',
            you.get_colored_name(),
            ' を見た ',
            acute.get_colored_name(),
            ' が、思わず声を出して笑う。',
          ]);
          await era.printAndWait(
            'その笑い声の中で、酸っぱさたっぷりの新年を過ごした——',
          );
          break;
        case 3:
          await acute.say_and_wait('同年代の頂点、ですか？');
          await era.printAndWait([
            acute.get_colored_name(),
            ' は、少し分かっていないようだ。',
          ]);
          await acute.say_and_wait(
            'よく分かりませんが……つまり、話題を探すのに頑張れ、ということでしょうか。',
          );
          await acute.say_and_wait('話題を探す……話題——');
          await acute.say_and_wait(
            'あ、思いつきました。新年のお祝い煮物の作り方——これを話題にすれば、きっと場が和みます……えへへ。',
          );
          await era.printAndWait([
            acute.get_colored_name(),
            ' は穏やかに笑う。',
          ]);
          await era.printAndWait(
            'そのとき台所では、炉の前の煮込みが、賑やかな音を立てていた——',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '世紀初最強拳人節';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} jordan トーセンジョーダン
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_48 ワンダーアキュートのトーセンジョーダンへの呼び方
     * @param {PrintedSpan} j_call_a トーセンジョーダンのワンダーアキュートへの呼び方
     */
    const f = async (
      acute,
      jordan,
      minoru,
      taste,
      you,
      callname,
      call_48,
      j_call_a,
    ) => {
      await era.printAndWait([
        '春が来て秋が去り、',
        acute.get_colored_name(),
        ' のトレーナーになってから、もう二年目だ。',
      ]);
      await era.printAndWait(
        '元日の空気はまだ残っている。去年の暮れ、商店街で買い物中にふと見たクリスマスツリーが、また新しい飾りをつけて入り口に立っている。',
      );
      await era.printAndWait(
        '少し離れてツリーの贈り物を眺め、何の祭りの飾りかと不思議に思い、指を折って日を数えて、ようやく思い出した。あと数日でバレンタインだ。',
      );
      await era.printAndWait([
        '……まあ、',
        you.get_colored_name(),
        ' とは無縁の祭りだ。',
      ]);
      await era.printAndWait([
        'トレセンの高い壁の中で暮らす ',
        you.get_colored_name(),
        ' にとって、日常は前途ある新人',
        acute.uma_sex_title,
        'との途切れない調教だ。壁の外で同年代の異性と甘酸っぱい恋をする時間など、あるはずがない。',
      ]);
      await era.printAndWait([
        '人気のトレーナーは、バレンタインに担当',
        acute.uma_sex_title,
        'から友情チョコをもらうこともある、と聞く……',
      ]);
      await era.printAndWait([
        'だが、どう考えても、',
        acute.get_colored_name(),
        ' は、バレンタインを祝う若い系の',
        acute.uma_sex_title,
        'には見えない——',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('…………');
      era.printButton('「ん？」', 1);
      await era.input();
      await era.printAndWait([
        '商店街で調教用品を買っていると、入り口でちょうど通りかかった「',
        acute.get_colored_name(),
        '」と「',
        jordan.get_colored_name(),
        '」。',
      ]);
      await era.printAndWait(
        '二人は話しながら並んで歩いている。何の話かは分からない。',
      );
      await era.printAndWait('向きからすると、「駅」の近くへ向かうらしい——');
      await era.printAndWait('…………ついて行ってみるか。');
      await era.printAndWait('なぜか、何か起きそうな予感がする。');
      await era.printAndWait(
        '買ったばかりの特価鶏胸肉二斤とプロテインを提げ、担当の生徒の後ろをこっそりつける。',
      );
      await era.printAndWait('……');
      await era.printAndWait([
        '……気のせいか。道端の警官が ',
        you.get_colored_name(),
        ' を見る目が、少しおかしい。',
      ]);
      era.drawLine();
      await jordan.say_and_wait([
        'これこれ！',
        j_call_a,
        '——見て、全然遊べないんだけど！',
      ]);
      await acute.say_and_wait('……『パンチングマシン』？');
      await acute.print_and_wait([
        '駅前のゲームセンター。',
        acute.get_colored_name(),
        ' と ',
        jordan.get_colored_name(),
        ' の二人が、新しいパンチングマシンを囲んでいる。',
      ]);
      await jordan.say_and_wait([
        'そう、このゲームセンターの新作。『',
        acute.uma_sex_title,
        '』級のパンチングマシン。',
      ]);
      await jordan.say_and_wait([
        '『',
        acute.uma_sex_title,
        '』級で高得点を出せば、景品がもらえるんだけど——',
      ]);
      await jordan.say_and_wait(
        '前に来て何回も打ったのに、高得点どころか数字が全然動かなくて——壊れてるに決まってる！',
      );
      await acute.say_and_wait('……『パンチングマシン』？');
      await acute.print_and_wait([
        '自分の頬を撫でながら、',
        acute.get_colored_name(),
        ' は見たことのない機械を眺める。',
      ]);
      await jordan.say_and_wait('最悪……景品のネイルセットが欲しかったのに。');
      await acute.say_and_wait(
        'あらあら……そういうことでしたか。だからそんなに悔しいのですね、うむうむ——',
      );
      await acute.say_and_wait([
        call_48,
        '、もう一度試してみますか？ 傍で見ていてあげますよ～',
      ]);
      await jordan.say_and_wait('オッケー、今度は本気出す。ちょっと離れてて。');
      await jordan.say_and_wait('いくよ——');
      await acute.print_and_wait('╲！どん～！╱');
      await jordan.say_and_wait(
        '——ふぅ、見て！ 打ち終わっても順位が動かない。明らかに壊れてるでしょ。',
      );
      await acute.say_and_wait('ええ……なるほど。');
      await era.printAndWait([
        '傍らの ',
        acute.get_colored_name(),
        ' は、少しコツを見抜いたようだ。',
      ]);
      await acute.say_and_wait([
        'では、言ったとおりにもう一度。',
        call_48,
        '。',
      ]);
      await acute.say_and_wait(
        'まず、親指を拳の中に入れないでください。さっきみたいに無意識に爪を守って、力が入りません。',
      );
      await acute.say_and_wait(
        '次は立ち位置。拳を出すときは反対側の足を前に、それから体を横に——',
      );
      await jordan.say_and_wait('あ、あれ？……こう？');
      await acute.say_and_wait(
        'はい、はい……それから膝を緩め、脇を締める。拳を出すとき腕と肩は平行に。下半身の重心に気をつけて【黄金矩形】を作って、それから——',
      );
      await acute.say_and_wait('それから全力で、打つ！……試してみますか？');
      await jordan.say_and_wait([
        'え？ うん……こう？……本当に大丈夫、',
        j_call_a,
        '？',
      ]);
      await acute.say_and_wait([
        '信じてください、',
        call_48,
        '。黄金矩形の姿勢が取れれば、必ずできますよ。',
      ]);
      await jordan.say_and_wait('うーん……そこまで言うなら……いくよ——');
      await era.printAndWait('╲！！！どん～！！！╱');
      await era.printAndWait('*～ちん～*');
      await era.printAndWait('*～景品を獲得しました～*');
      await jordan.say_and_wait('え！？ うそ、本当に景品出た？');
      await jordan.say_and_wait([
        j_call_a,
        ' の言うとおりに姿勢を直しただけなのに……しかも今、腕がしびれてる——',
      ]);
      await jordan.say_and_wait([j_call_a, '、すごすぎ！']);
      await acute.say_and_wait(
        'ふふ……ボクシングには、す・こ・しだけ経験がある、からでしょうか。',
      );
      await acute.say_and_wait(
        '昔、拳を打っていたころは、『右ストレートの小鋭』と呼ばれていましたよ？',
      );
      await acute.say_and_wait(
        'まあ……南〇四天王を倒してからは、『伝説』と呼ばれていましたけれど。',
        true,
      );
      await jordan.say_and_wait([
        'えーーーー！ じゃあ ',
        j_call_a,
        ' がやったら、景品もっと取れるでしょ？',
      ]);
      await acute.say_and_wait('あはは……それは——');
      await acute.print_and_wait('……正直に言えば、試したくはなかった。');
      await acute.print_and_wait(
        'もう何年も拳を打っていない。かつての絶頂には、とうに届かない。',
      );
      await acute.print_and_wait(
        'この機械で測れば、結果がどうであれ、かつての感触が戻らないことへの残念さだけが残るだろう。',
      );
      await acute.print_and_wait(
        '手を出して、断ろうとした——そのとき、壁の景品欄が目に入る。',
      );
      await acute.say_and_wait(
        'ぐるむ……三等、チョコレートムース特大ケーキ？',
        true,
      );
      await acute.say_and_wait(
        ['そういえば、もうすぐバレンタインですね。', callname, ' のところ——'],
        true,
      );
      await acute.say_and_wait('…………');
      await acute.say_and_wait([
        'うん、分かりました。では、試してみましょう。',
        call_48,
        '、少し下がっていてくださいね？',
      ]);
      await acute.print_and_wait([
        '断るはずだった右手が拳になる。',
        acute.get_colored_name(),
        ' の覚悟が、そこに籠もる。',
      ]);
      await jordan.say_and_wait('よっしゃ！');
      await acute.say_and_wait('ぐるむ……昔の感覚を、思い出して。', true);
      await acute.say_and_wait(
        '思い出す……エジプトで〇オーと戦ったとき、目を覆われたまま振り抜いた、あの一打——',
        true,
      );
      await acute.say_and_wait(
        '支点、力点、作用点……支点、力点、作用点——はっ！！！',
      );
      await era.printAndWait('╲╲╲！！！！！！！！どん！！！！！！！！╱╱╱');
      await acute.print_and_wait([
        acute.get_colored_name(),
        ' の一撃とともに、どこからともなく大きな砂煙が四周に立つ。',
      ]);
      await era.printAndWait('*～ちん～*');
      await era.printAndWait(
        '*～故障、故障、故障——直ちに係員へご連絡ください～*',
      );
      await acute.say_and_wait(
        'あら……あらあら？ 機械を壊してしまったのでしょうか……',
      );
      await acute.say_and_wait(
        '長く打っていなかったせいで、やはり手が鈍っていますね——',
      );
      await jordan.say_and_wait('………………嘘でしょ。');
      await acute.print_and_wait([
        jordan.get_colored_name(),
        ' は目を丸くし、たった一撃で歪み切った機械を、じっと見つめている。',
      ]);
      await acute.print_and_wait(
        'まもなく、この街の地下拳術界に、新しい伝説が生まれる——',
      );
      era.drawLine();
      await acute.print_and_wait([
        'その夜、ゲームセンターの一等・三千ウマコインを辞退した ',
        acute.get_colored_name(),
        ' は、チョコレートムース特大ケーキを抱えてトレーナー室へ来た。',
      ]);
      await acute.print_and_wait(
        'ケーキをこたつの上に置き、脇のギフト箱に隠れ、わざと明かりを消す。',
      );
      await acute.say_and_wait(
        [
          '聞くところによると、',
          call_48,
          ' いわく、若者が好むサプライズ……こういうことでしょうか？',
        ],
        true,
      );
      await acute.say_and_wait(
        [
          'そのために、',
          call_48,
          ' が着ていた……勝負服？ まで借りて。',
          callname,
          ' が帰ってきたら、飛び出て、びっくりさせて……',
        ],
        true,
      );
      await acute.say_and_wait(
        'えへへ……よく考えると、わたしらしくないことをしていますね。',
        true,
      );
      await acute.print_and_wait([
        'なぜ ',
        callname,
        ' に、こんなバレンタインのサプライズをするのか。正直、',
        acute.get_colored_name(),
        ' 自身にも分からない。',
      ]);
      await acute.print_and_wait([
        'パンチングマシンの景品一覧でチョコレートムース特大ケーキを見た瞬間、頭の中に、',
        callname,
        ' を驚かせる光景が浮かんだだけだ。',
      ]);
      await acute.print_and_wait([
        '初めて屋上で、こっそり泣いている ',
        callname,
        ' を見たときは、異性に振られて一人で泣いている子供だと思っていた。',
      ]);
      await acute.print_and_wait([
        'それが、気づいたら、',
        callname,
        ' の担当',
        acute.uma_sex_title,
        'になってから、もう一年になる。',
      ]);
      await acute.say_and_wait(
        '……一年、ですか。月日が経つのは、早いものですね。',
        true,
      );
      await acute.say_and_wait(
        [
          'トレセン学園の競走',
          acute.uma_sex_title,
          'として、退屈な調教ばかりだと思っていたのに……意外と、悪くないですね。',
        ],
        true,
      );
      await acute.print_and_wait([
        '目を閉じると、頭の中に ',
        callname,
        ' の姿が浮かぶ。',
      ]);
      await acute.print_and_wait(
        '臆病で、運が悪く、一喜一憂して、どこか子供っぽい。',
      );
      await acute.print_and_wait(
        'それでも優しくて、善良で、行動力があって、意外と筋が通っている。',
      );
      await acute.print_and_wait('自分は、そんな人と一年を過ごした。');
      await acute.print_and_wait('この先も、まだ二年ある……');
      await acute.print_and_wait(
        'この先の二年も、共に過ごしたこの一年のように、あっという間に過ぎてしまうのだろうか。',
      );
      await acute.say_and_wait('…………');
      await acute.print_and_wait('なぜか、そこまで考えると、少し焦る。');
      await acute.print_and_wait(
        '首を振り、自分に言い聞かせる——「まだ二年ある。焦らなくていい」。',
      );
      await acute.print_and_wait([
        callname,
        ' が帰るまで待とう——帰ってきたら、大きなサプライズを——',
      ]);
      await acute.say_and_wait('でも——');
      await acute.say_and_wait('——……');
      await acute.say_and_wait('……');
      await acute.print_and_wait('言葉は唇まで来て、出ない。');
      await acute.print_and_wait([
        'この焦りの正体が分からない ',
        acute.get_colored_name(),
        ' は、暗いこたつの中で身を縮める。',
      ]);
      await acute.print_and_wait(
        '自分にしか聞こえない、自分のドキドキが続く。',
      );
      await acute.print_and_wait('………………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('……');
      await acute.print_and_wait([
        '今日の ',
        callname,
        ' は、帰りが格別に遅い。',
      ]);
      era.drawLine({ content: 'トレセンの外・交番' });
      era.printButton(
        `「お巡りさん、信じてください。担当の${acute.uma_sex_title}が心配で、後ろをついていただけなんです。尾行の痴漢じゃありません！」`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('警官', [
        '逃げるな！ 今どきの痴漢は、人気の競走',
        acute.uma_sex_title,
        'に妄想を抱いて、表向きはトレセンのトレーナーを名乗る。今週だけで、自称トレーナーが八人、自称教師が三人、自称医学博士が一人、尾行で捕まったぞ。',
      ]);
      era.printButton(
        '「俺はあいつらと違います！ ちゃんとした仕事もあるし、立派な理想もある——」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        '警官',
        'それがどうした？ 隣の房にも、大晦日の街で理想を飛ばす志士だと言い張るのが二人いるが、実態は無許可で花火を売ってた露天だぞ？',
      );
      era.printButton(
        '「お巡りさん、本当に違うんです——もういい、言い方を変えます。お願いです、放してください。実は——俺、メジロ家にコネがあるんです。」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        '警官',
        'は？ 脅すつもりか？ 今まで誰にも脅された覚えはない——恐くないね！ メジロ家にコネがある？ 言っとくが、この交番は——メジロ家がやってるんだよ！',
      );
      era.printButton(
        '「……は？ メジロ家、交番まで手を広げてたのか？ うわあ、誰でもいいから出してくれ！ 冤罪だ！！！」',
        1,
      );
      await era.input();
      era.drawLine();

      await era.printAndWait([
        'その後、',
        minoru.get_colored_name(),
        ' が巡回で近くの交番を通りかかり、',
        you.get_colored_name(),
        ' の助けを呼ぶ声を聞いて、ようやく連れ出してくれた。',
      ]);
      await era.printAndWait([
        '「',
        acute.uma_sex_title,
        'の尾行」で入れられたと知ると、',
        minoru.get_colored_name(),
        ' に、きつい白い目を向けられる。',
      ]);
      await era.printAndWait([
        '帰り道、必死に尾行の痴漢ではないと説明し、誠意のつもりで',
        acute.sex,
        'を自分の休憩室へ夜食に誘った。',
      ]);
      await era.printAndWait([
        '結果、部屋には巨大なチョコレートムースケーキと、なぜか露出の多いサンタ（勝負服）姿で巨大ギフト箱に入って眠っている ',
        acute.get_colored_name(),
        ' がいた。',
      ]);
      await minoru.say_and_wait('………………');
      era.printButton('「………………」', 1);
      await era.input();
      era.printButton('「受け身だったって、信じます？」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        'その後、全身麻酔をかけられ、庭に逆さに挿された。',
      );
      await era.printAndWait('三ヶ月分の給料を罰として取られて、一件落着。');
      await era.printAndWait([
        'それからというもの、',
        taste.get_colored_name(),
        '、',
        minoru.get_colored_name(),
        '、',
        acute.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' を見る目が、少し変わった。',
      ]);
      await era.printAndWait('いい変化であることを祈る……はは。（空を見る）');
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '新春の贈り物';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        '三年目の正月も、',
        acute.get_colored_name(),
        ' とトレーナー室で過ごしている。',
      ]);
      await acute.say_and_wait([
        'あけましておめでとうございます、',
        callname,
        '～ お餅をたくさん焼きましたよ。一緒に召し上がりますか？',
      ]);
      await era.printAndWait([
        '厨房から盆を持って、手慣れた足取りで出てきた ',
        acute.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' よりこのトレーナー室の主人に見える。',
      ]);
      await era.printAndWait([
        '盆を抱えた ',
        acute.get_colored_name(),
        ' と対照的なのは、休日以来、こたつと一体化した怠惰な自分だ。',
      ]);
      await era.printAndWait([
        '……先に言っておく。',
        you.get_colored_name(),
        ' はサボっているのではない。休息の時間を、きちんと使い切っているだけだ。',
      ]);
      await era.printAndWait([
        '普段は調教と競馬場の下見で埋まっている。稀な自由時間も、ほとんど ',
        acute.get_colored_name(),
        ' と一緒に動く。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' と過ごすこと自体は疲れない……それでも、貴重な休みが削られているのは事実だ。',
      ]);
      await era.printAndWait([
        '平日は夜の調教を終えて家に戻ると、ベッドに倒れ込んで眠る。翌朝起きれば、すぐ ',
        acute.get_colored_name(),
        ' との調教。終わりが見えない日々だ。',
      ]);
      await era.printAndWait(
        '週に一度の休日でさえ、洗濯機に山のように積まれた臭い洗濯物と、どうやっても終わらない休憩室の家事を見ると、空に四時間しか残っていない太陽といっしょに、気分まで沈む。',
      );
      await era.printAndWait([
        '正直、',
        acute.get_colored_name(),
        ' が三食を用意してくれなければ、食事の仕方すら忘れそうだ……',
      ]);
      await acute.say_and_wait([callname, '、口を開けて。あ～～～']);
      era.printButton('「あ——ん。」', 1);
      await era.input();
      await era.printAndWait([
        acute.get_colored_name(),
        ' が差し出した焼き餅を一口噛むと、熱く甘い味が口の中に広がる。',
      ]);
      await acute.say_and_wait([
        'むむ～ よくできました、',
        callname,
        '——次は、自分で食べてくださいね？',
      ]);
      await era.printAndWait([
        '甘やかすような顔の ',
        acute.get_colored_name(),
        ' は、餅の入った碗と箸をこちらへ渡す。',
      ]);
      await era.printAndWait(
        'それから立ち上がり、楽しげな鼻歌を口ずさみ、ベランダへ向かう——',
      );
      await acute.say_and_wait('次は洗濯ですよ～ 洗濯～～～');
      await era.printAndWait('………………');
      await era.printAndWait('なぜか、後ろめたい。');
      await era.printAndWait([
        '担当',
        acute.uma_sex_title,
        'に掃除も洗濯も食事も任せて、自分はこたつで冗談を飛ばす……',
      ]);
      await era.printAndWait('……これは、かなりみっともないのでは。');
      await era.printAndWait('いや、みっともなすぎる。');
      await era.printAndWait('何かしないと——');
      era.println();
      era.printButton('「台所を手伝おう！」（全能力+5）', 1);
      era.printButton('「自分の服は自分で洗う！」（スキルPt+35）', 2);
      era.printButton(`「${acute.name} の肩を揉もう！」（スタミナ+30）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            'だらだらした幸福は格別だが、それに浸ってばかりはいられない。',
          );
          await era.printAndWait('——よし、決めた！');
          await era.printAndWait('立ち上がり、胸を張って厨房へ向かう。');
          await era.printAndWait(
            '少なくとも今年の夕食と正月のおかずは、自分で作ろう。',
          );
          await era.printAndWait('まずは、凍った餃子を解かして……');
          await era.printAndWait('………………');
          break;
        case 2:
          await era.printAndWait([
            'いくらなんでも、家事を全部 ',
            acute.get_colored_name(),
            ' 一人に任せるわけにはいかない。',
          ]);
          await era.printAndWait('立ち上がり、胸を張ってベランダへ向かう。');
          await acute.say_and_wait('くん————');
          await era.printAndWait('…………ん？');
          await era.printAndWait([
            '図らずも、',
            acute.get_colored_name(),
            ' が昨日脱いだばかりのシャツを嗅いでいるところを見てしまった。',
          ]);
          era.printButton(`「えっと……${acute.name}？」`, 1);
          await era.input();
          await acute.say_and_wait(['あら……', callname, ' でしたか～']);
          await era.printAndWait([
            '何でもないことのように、',
            acute.get_colored_name(),
            ' は鼻に当てていたシャツを下ろす。',
          ]);
          await acute.say_and_wait(['何かございましたか、', callname, '？']);
          era.printButton('「その……俺のシャツ、どうかした？」', 1);
          await era.input();
          await acute.say_and_wait([
            'ああ……これですか。つい、ふと思い立って嗅いでみただけですよ——男の匂いがしますね、',
            callname,
            '。',
          ]);
          era.printButton('「………………」', 1);
          await era.input();
          await era.printAndWait('…………');
          await era.printAndWait([
            'とりあえず、',
            acute.get_colored_name(),
            ' をベランダから追い出した。',
          ]);
          await era.printAndWait([
            '洗濯機の中で服がぐるぐる回る。さっきの ',
            acute.get_colored_name(),
            ' がシャツを嗅いでいた光景を思い出すと、なぜか胸がざわつく。',
          ]);
          await era.printAndWait('………………');
          await era.printAndWait('部屋に戻るのは、もう少し後にしよう。');
          break;
        case 3:
          await era.printAndWait([
            acute.get_colored_name(),
            ' が洗濯を終えて部屋に戻ると、とりあえずこたつへ案内した。',
          ]);
          await acute.say_and_wait([
            'ぐるむ？ 何かございましたか、',
            callname,
            '？',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            ' は顔を上げ、後ろに立つ自分を不思議そうに見る。',
          ]);
          await era.printAndWait([
            'そのとき、',
            you.get_colored_name(),
            ' の罪深い両手が ',
            acute.get_colored_name(),
            ' の体へ伸びる——',
          ]);
          await era.printAndWait('——そっと摘む。');
          await acute.say_and_wait('あっ？❤️');
          await era.printAndWait([
            '小さな手で優しく揉むと、',
            acute.get_colored_name(),
            ' の尻尾が、一瞬でピンと伸びる。',
          ]);
          await era.printAndWait([
            '……なるほど、ここが ',
            acute.get_colored_name(),
            ' の弱点か。',
          ]);
          await acute.say_and_wait(['そ、それは❤️……', callname, '……これは？']);
          era.printButton(
            `「動かないで、${acute.name}。ずっと忙しかったんだから、マッサージしてあげる。」`,
            1,
          );
          await era.input();
          await acute.say_and_wait('で、でもそこは……あっ❤️～');
          await era.printAndWait([
            '少し強く摘むと、許しを乞うような声が ',
            acute.get_colored_name(),
            ' の口から漏れる。',
          ]);
          await era.printAndWait([
            '力を入れるたび、',
            acute.get_colored_name(),
            ' は思わず短い声を上げる。',
          ]);
          await era.printAndWait('なぜか、妙な興奮と背徳感がある。');
          await era.printAndWait([
            'こうして、二人だけの休憩室で、',
            acute.get_colored_name(),
            ' のマッサージを存分にした。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '拳人節 · 特大号追加超量重ね無敵燃焼版';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} jordan トーセンジョーダン
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_19 ワンダーアキュートのアグネスデジタルへの呼び方
     * @param {PrintedSpan} call_48 ワンダーアキュートのトーセンジョーダンへの呼び方
     * @param {PrintedSpan} call_49 ワンダーアキュートのナカヤマフェスタへの呼び方
     * @param {PrintedSpan} d_call_a アグネスデジタルのワンダーアキュートへの呼び方
     * @param {PrintedSpan} j_call_a トーセンジョーダンのワンダーアキュートへの呼び方
     * @param {PrintedSpan} callname_49 ナカヤマフェスタのプレイヤーへの呼び方
     * @param {PrintedSpan} f_call_a ナカヤマフェスタのワンダーアキュートへの呼び方
     * @param {PrintedSpan} y_call_m プレイヤーの駿川たづなへの呼び方
     */
    const f = async (
      acute,
      digital,
      jordan,
      festa,
      minoru,
      you,
      callname,
      call_19,
      call_48,
      call_49,
      d_call_a,
      j_call_a,
      callname_49,
      f_call_a,
      y_call_m,
    ) => {
      await era.printAndWait([
        '春が去り秋が来て、今年は ',
        acute.get_colored_name(),
        ' と出会って三年目になる。',
      ]);
      await era.printAndWait(
        '冬の雪は溶け、春の気配はまだ残る。指を折って日を数えると、バレンタインがまた目の前だ。',
      );
      await era.printAndWait([
        '去年の空回りと、理想の放飛を経て、今年の ',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' は、それぞれ成長している。',
      ]);
      await era.printAndWait([
        'だからこそ、バレンタイン当日の夕方、いつもの調教を終えると、',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' は手慣れた足取りで自分の休憩室へ向かった。',
      ]);
      await era.printAndWait(
        '電源を入れ、並んで座り、それぞれこたつへ足を入れる——',
      );
      era.printButton('「うわあ～～～❤️」', 1);
      await era.input();
      await acute.say_and_wait('あはは～ 温かいですね❤️');
      await era.printAndWait([
        '互いの存在に慣れた ',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' は、寄り添ってこたつの前に座る。',
      ]);
      era.printButton(
        '「今週が終わったらこたつをしまうのかと思うと……惜しいな。」',
        1,
      );
      await era.input();
      await acute.say_and_wait(
        'ふふふ……もうすぐ気温が上がりますから。しまわないと、あせもが出ますよ？',
      );
      era.printButton('「えーーー もう少し遅くしまえない？」', 1);
      await era.input();
      await acute.say_and_wait([
        'だめですよ？ ',
        callname,
        ' がこたつ廃人になったら、わたしも一緒にだらけてしまいますから～',
      ]);
      era.printButton('「む……自分を盾にするのは、反則だろ？」', 1);
      await era.input();
      await acute.say_and_wait([
        'ほほほ……',
        callname,
        '、わたしの根性なしを恨まないでくださいね——',
      ]);
      era.printButton('「去年は中で寝てたくせに……」', 1);
      await era.input();
      await acute.say_and_wait('あらあら……聞こえませんよ？');
      await era.printAndWait(
        '雪がまだ残る季節、調教を終えて休憩室へ戻った二人は、こたつの中で冗談を飛ばし、汗を蒸らしている。',
      );
      await acute.say_and_wait('うん……でも、先にお風呂ですね。');
      await era.printAndWait([
        'そう言いながら、',
        acute.get_colored_name(),
        ' はこたつから抜け出し、立ち上がる。',
      ]);
      await acute.say_and_wait([
        '先にお湯を沸かしてきますね、',
        callname,
        '。沸いたら、早めに入ってくださいね？',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' に、今の技術では風呂のお湯をわざわざ沸かす必要がないと伝えたい。',
      ]);
      await era.printAndWait([
        'だが ',
        acute.get_colored_name(),
        ' は、そういう言い方が好きらしい——訂正する必要もないだろう。',
      ]);
      era.printButton('「了解——いってらっしゃい～」', 1);
      await era.input();
      await acute.say_and_wait(
        'それから——チョコレートは冷蔵庫に入れてあります。食べてくださいね？',
      );
      era.printButton('「了解了解～ 任せて。」', 1);
      await era.input();
      await era.printAndWait(
        '気のない手を振る。雅ではないが、安心できる相手の前では、一番だらけた自分が出る。',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' はゆっくり浴室へ向かい、扉を閉めて、かちゃりと音がする。',
      ]);
      await era.printAndWait('こたつの前に座り、視線はつい浴室へ流れる——');
      await era.printAndWait('【かちゃ、かちゃ——】');
      await era.printAndWait('【ざーーーー】');
      await era.printAndWait('隙間から水音が漏れる……');
      await you.say_and_wait('…………', true);
      era.printButton('（まったく、油断しすぎだ。）', 1);
      await era.input();
      await era.printAndWait('ちょっと……見てみるか？');
      await era.printAndWait(
        'こたつから苦労して這い出し、腹ばいで、よからぬ密事へ向かう。',
      );
      await era.printAndWait(
        '居間を横切り、廊下を這い、反対側の浴室の前まで来る。',
      );
      await era.printAndWait(
        '滴る水音が、目の前の隙間から聞こえる。軽く押せば、峰の輝きが望める。',
      );
      await you.say_and_wait('もちろん、これは変態行為ではない。', true);
      await you.say_and_wait(
        ['ただ ', acute.get_colored_name(), ' は、風呂に三十分かかる。'],
        true,
      );
      await you.say_and_wait('三十分待つなら、おとなしく待つしかない。', true);
      await you.say_and_wait(
        [
          'だが三十分待つなら、なぜ ',
          acute.get_colored_name(),
          ' のいる浴室の前で待ってはいけないのか。',
        ],
        true,
      );
      await you.say_and_wait(
        '扉が閉まっていないので、閉めてあげようとして、うっかり中が見えてしまった——それくらい、合理的だろう～',
        true,
      );
      await you.say_and_wait('おお———！', true);
      await era.printAndWait('仙境の中、雲と霧が漂う。');
      await era.printAndWait(
        '天から銀河の水が落ち、双峰を流れ、平らな湖を越え、浅葱へ入り、やがて大河へ帰る。',
      );
      await era.printAndWait(
        '古来、仁者は山を好む。白い谷、玉の峰、白い霧が雲を渡る。苦心した者だけが、頂へ登れる。',
      );
      await era.printAndWait(
        '智者は水を好む。灰色の髪の下に銀の流れ、滴る玉は髄となる。縁ある者だけが、味わえる。',
      );
      await era.printAndWait(
        'この仙人の景色は、光を盗む者だけのもの。平視でも充分、仰ぎ見ればさらにいい。一言で「いい」では足りない。',
      );
      await you.say_and_wait('最高～～～～！', true);
      era.printButton('（では、もう少し、もう少し近づいて……）', 1);
      await era.input();
      await era.printAndWait(
        'ところがそのとき、がたん、と休憩室の玄関が開く——',
      );
      await minoru.say_and_wait([
        you.actual_name,
        '、いますか？ 荷物が届いています……',
      ]);
      await era.printAndWait([
        '玄関から、浴室の前に伏せている自分が、',
        minoru.get_colored_name(),
        ' に丸見えになる。',
      ]);
      await minoru.say_and_wait('………………');
      await era.printAndWait('ざーーーー～');
      await era.printAndWait('ざーーーー～');
      era.printButton('「………………」', 1);
      await era.input();
      await you.say_and_wait(['待って、', y_call_m, '、説明させてください。']);
      await you.say_and_wait('その、実は、これは……');
      await you.say_and_wait('壁に穴を開けて覗——');
      await era.printAndWait('【ぱん！！！！！】');
      await era.printAndWait('澄んで乾いた音が、トレセン全体に響く——');
      era.drawLine();
      await era.printAndWait([
        '三十分後、バスローブを羽織った ',
        acute.get_colored_name(),
        ' が、ゆっくり浴室から出てくる。',
      ]);
      await acute.say_and_wait([
        'あらあら……',
        callname,
        '、居間で三十分も待っていてくださったのですか？ えらいですね——',
      ]);
      await acute.say_and_wait('でも……右の頬の、この赤い跡は？');
      era.printButton('「……蚊に刺された。」', 1);
      await era.input();
      await acute.say_and_wait('鼻の青あざは？');
      era.printButton('「……大きい蚊に刺された。」', 1);
      await era.input();
      await acute.say_and_wait('頭頂の、この赤褐色の液体は……？');
      era.printButton('「……特大の蚊に刺された。」', 1);
      await era.input();
      await acute.say_and_wait(
        'あら……この季節にも、そんな大きな蚊がいるのですね——',
      );
      await era.printAndWait([
        '考え込む ',
        acute.get_colored_name(),
        ' は、のんびり冷蔵庫へ歩き、何かを取り出す。',
      ]);
      await acute.say_and_wait(
        'では……今日もよく聞いて、よく頑張って、いい子にしていたトレーナーさんへ。はい、昨日作ったチョコレートですよ。',
      );
      era.printButton('「……それを言う前に、服を着てもらえますか？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' にバスローブを味わう余裕がないわけではない。ただ先ほど ',
        minoru.get_colored_name(),
        ' に、「裸をもう一度見たら七孔から血を噴いて爆散死する」急所を封じられている。',
      ]);
      await era.printAndWait([
        '命のためにも、',
        acute.get_colored_name(),
        ' には早く着替えてもらった方がいい——',
      ]);
      await acute.say_and_wait(
        'お歳暮？ 違いますよ、今日はバレンタインでしょう？ チョコレートを贈り合う日です……',
      );
      era.printButton(
        '「いや……なぜ急にギャルゲーみたいに話が進むんだ？ それにヒロインがバスローブでバレンタインチョコを渡す展開、あるか？」',
        1,
      );
      await era.input();
      await acute.say_and_wait(
        'ぐるる？ どうしました、チョコレートがお嫌いですか？ こちらにゼリーの詰め合わせも……',
      );
      era.printButton('「む……嫌いというわけでは——」', 1);
      await era.input();
      await era.printAndWait('……くそっ、これはもう誘惑だろう。');
      await era.printAndWait(
        'トレーナー室で風呂に入り、バスローブでトレーナーの前を歩く。これは完全に「誘惑」だろう。',
      );
      await era.printAndWait([
        'それとも「あれ」か。「あれ」——したい≠同意、みたいな……',
      ]);
      await era.printAndWait([
        'くそっ……一瞬の迷いがなければ、',
        minoru.get_colored_name(),
        ' に急所を封じられることもなく、',
        you.get_colored_name(),
        ' は今すぐ赤い形態に変身して無限の戦神を召喚していた……',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait('まあいい。邪念は、ここまでにしよう。');
      era.printButton('「実は……俺からも、渡したいものがある。」', 1);
      await era.input();
      await acute.say_and_wait('むるむ？');
      await you.say_and_wait(
        '去年のバレンタイン、お前からもチョコをもらっただろ。まあ、びっくりさせる形だったけど……',
      );
      await you.say_and_wait(
        '本当なら、去年のホワイトデーに返すはずだった——何を贈ればいいか、ずっと分からなくて。',
      );
      await you.say_and_wait(
        'チョコで返そうとも思った……でも、お前は甘いものが苦手だ。他のものを贈るのも、この日にはそぐわない気がして……',
      );
      await you.say_and_wait(
        'それで去年は先送りにして、レースの日程も忙しくて、お返しが遅れた……',
      );
      await you.say_and_wait([
        'だから今年は、先に用意した——ハッピーバレンタイン、',
        acute.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        'そう言って、',
        you.get_colored_name(),
        ' はカーテンの陰に隠していた花束を取り出し、',
        acute.get_colored_name(),
        ' へ渡す。',
      ]);
      await acute.say_and_wait('あ……');
      await you.say_and_wait([
        'あはは……ジョーダンの助言だよ。バレンタインには少し合わないけど……どう、気に入った？',
      ]);
      await acute.say_and_wait('……');
      era.printButton(`「……${acute.name}？」`, 1);
      await era.input();
      await acute.say_and_wait('……');
      await era.printAndWait([
        'なぜか、花束を抱えた ',
        acute.get_colored_name(),
        ' が、その場で固まっている。',
      ]);
      await era.printAndWait(
        'いくら声をかけても、大きな返事はない。三十秒ほど待つと——',
      );
      await acute.say_and_wait('う……わ……あ……あああああ！！！');
      await acute.say_and_wait('たいへん、たいへんですよ！！！！');
      await era.printAndWait([
        acute.get_colored_name(),
        ' は花束を抱えたまま、休憩室を飛び出していく。',
      ]);
      await era.printAndWait('……もちろん、バスローブのまま。');
      era.drawLine({ content: '校舎' });
      await acute.say_and_wait([
        call_48,
        '、',
        call_48,
        '、たいへんですよ！～',
      ]);
      await jordan.say_and_wait([
        'どうしたの、',
        j_call_a,
        '——うわ、なんで浴衣……バスローブなの！？',
      ]);
      era.drawLine({ content: '中庭' });
      await acute.say_and_wait([
        call_49,
        '、',
        call_49,
        '、たいへんですよ！～',
      ]);
      await festa.say_and_wait([
        'バスローブ？……その花束は、俺が ',
        callname_49,
        ' に、',
        f_call_a,
        ' へのバレンタインの贈り物として勧めたやつだ……なるほど。伝説の拳術師は、もうすぐ隠退か——',
      ]);
      era.drawLine({ content: 'トレセン学園 · 廊下' });
      await acute.say_and_wait([
        call_19,
        '、',
        call_19,
        '、たいへんですよ！～',
      ]);
      await digital.say_and_wait([
        'えええっ！？ 廊下をバスローブで走り回る ',
        d_call_a,
        '！？ それも尊い！ でもこの光景、まさか！？',
      ]);
      era.drawLine({ content: '屋上' });
      await era.printAndWait(
        'ぼろぼろの体を引きずり、ようやく屋上でバスローブの後ろ姿に追いつく。',
      );
      await acute.say_and_wait([
        callname[0],
        '……',
        callname,
        '、わ、わたし……どうすればいいのでしょう。少し、どうしていいか分からなくなりました。',
      ]);
      era.printButton('「とりあえず……休憩室に戻って、服を着よう？」', 1);
      await era.input();
      await acute.say_and_wait(['えへへ……すみません、', callname, '。']);
      await acute.say_and_wait(
        'ただ、こんなにきれいな花をもらったら、胸の中まで温かくなって……あ、あ、あああ……',
      );
      era.printButton(
        '「それでも、バスローブで学園を走る理由にはならないよ……」',
        1,
      );
      await era.input();
      await era.printAndWait('……ふう、まあ、よかった。');
      await era.printAndWait([
        '様子を見る限り、',
        you.get_colored_name(),
        ' の贈り物が嫌だったわけではなさそうだ。普段もらわない贈り物に、少し揺れただけだろう。',
      ]);
      await era.printAndWait([
        '地味な印象のせいで、',
        acute.sex,
        'に花を贈る人は少なかったのかもしれない。',
      ]);
      await acute.say_and_wait(['ありがとうございます……', callname, '。']);
      await acute.say_and_wait(
        'こんなにきれいな贈り物がもらえるなんて、思ってもみませんでした。大切にしますね。',
      );
      await acute.say_and_wait(
        'うん……お返しとしては……む、少し違う気がします。贈り物をいただいたらお礼を言うのが筋ですが、今回は贈ったあとに返礼をもらった形ですね～',
      );
      await acute.say_and_wait([
        'む……とにかく、本当にありがとうございました、',
        callname,
        '。',
      ]);
      era.printButton('「あはは……気に入ってもらえてよかった。」', 1);
      await era.input();
      await era.printAndWait([
        '屋上で、バスローブの',
        acute.sex,
        'と、頭頂から赤褐色の液体をにじませている ',
        you.get_colored_name(),
        ' が、互いに礼を述べる。',
      ]);
      await era.printAndWait([
        '間違いなく、これは ',
        you.get_colored_name(),
        ' の人生で、いちばん印象に残るバレンタインになるだろう。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' といると、こういう予想外の出来事がよく起きる——',
      ]);
      era.drawLine({ content: '地下取調室' });
      await minoru.say_and_wait('最近、生徒から通報がありました。');
      await minoru.say_and_wait([
        acute.get_colored_name(),
        ' のトレーナーが花束を抱えて ',
        acute.get_colored_name(),
        ' に求婚し、愛の証としてバスローブで学内を走らせた、と。',
      ]);
      await minoru.say_and_wait([
        '事実ですか、',
        you.actual_name,
        'トレーナー',
      ]);
      era.printButton('「………………」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の肉身は……燃え尽きた灰となった——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} princess カワカミプリンセス
     * @param {CharaTalk} city ゴールドシチー
     * @param {CharaTalk} sirius シリウスシンボリ
     * @param {CharaTalk} muteki ヤエノムテキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} call_72 ワンダーアキュートのヤエノムテキへの呼び方
     * @param {PrintedSpan} m_call_a ヤエノムテキのワンダーアキュートへの呼び方
     * @param {number} win_count ワンダーアキュートの勝利数
     */
    const f = async (
      acute,
      princess,
      city,
      sirius,
      muteki,
      you,
      callname,
      call_72,
      m_call_a,
      win_count,
    ) => {
      await era.printAndWait(
        'ファン感謝祭は、ファンをトレセンへ招いて遊ぶ運動の祭典だ。',
      );
      await era.printAndWait([
        'その中で ',
        acute.get_colored_name(),
        ' が挑んだ種目は——',
      ]);
      await acute.say_and_wait(
        '実は、昔も打ったことがありますよ？ うん……覚えている限り、姿勢はこう——むむむ。',
      );
      await era.printAndWait([
        '——伝統種目の「ゴルフ」。',
        acute.sex,
        'が昔からやっていたとは、思わなかった。',
      ]);
      await acute.say_and_wait([
        'ぐるむ……ところで、',
        callname,
        '。狙うゴールは——どこでしょう？',
      ]);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' は十ウマコイン賭ける。',
        acute.get_colored_name(),
        ' はゴルフをサッカーだと思っている。',
      ]);
      await era.printAndWait([
        'つまり、',
        acute.get_colored_name(),
        ' は、やはりゴルフができない。',
      ]);
      await era.printAndWait('それから、というわけで……');
      await era.printAndWait('————');
      await acute.say_and_wait(
        'ふふ、やはりこの種目の方がわたし向きですね——ボクシング。',
      );
      await acute.say_and_wait(
        '……ぐるむ？ よく見ると、ボクシングの前に別の字が——【フィギュアボクシング】？',
      );
      era.printButton('「ああ、ボクシング風の体操競技だな。」', 1);
      await era.input();
      await era.printAndWait(
        '実際に打ち合う必要はなく、見栄えのするボクシングの型を見せ、【動きの美しさ】と【持久力】を審査員に採点してもらう競技——',
      );
      await era.printAndWait([
        '……考えてみれば当然だ。十万人近いファンを抱える',
        acute.uma_sex_title,
        'アイドル同士が、トレセンで本気のボクシングをしたら、場内のファンが修羅場にしかねない。',
      ]);
      await acute.say_and_wait([
        'むむむ……残念ですね。',
        callname,
        ' は、女の子のボクシングがお好きなのに——',
      ]);
      await you.say_and_wait([
        'あはは……',
        acute.get_colored_name(),
        '、その話は駿川',
        acute.adult_sex_title,
        'の前では絶対にしないでくれ。死ぬ。',
      ]);
      await era.printAndWait([
        '……訂正する。',
        you.get_colored_name(),
        ' は、演壇に立って望遠鏡で、体育館の大人数が血みどろで殴り合うのを見る趣味はない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が好きなのは、',
        acute.uma_sex_title,
        '同士が髪を引っ張り、爪を剥がし合う光景だけだ。',
      ]);
      await era.printAndWait('——それだけだ。');
      await era.printAndWait(
        '自分の偏愛を開拓しているあいだに、フィギュアボクシングの選手たちは試合を始めていた——',
      );
      await era.printAndWait('…………');
      await sirius.say_and_wait(
        'は、フィギュアボクシングか。サバットを何手か出せばいいだろう。',
      );
      await era.printAndWait([
        '一方は、フランスの護身術「サバット」に通じた ',
        sirius.get_colored_name(),
        '——',
      ]);
      await city.say_and_wait(
        'かつて、体を整えるために、遠い東でしばらく拳術を学んだことがある。',
      );
      await city.say_and_wait('1、2……ストレート、ストレート、フック！');
      await era.printAndWait([
        'もう一方は、学生でありモデルでもあるスーパー ',
        city.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('この大道の一戦に、審判が下した裁定は——');
      await you.say_as_passer_by_and_wait(
        '審判',
        'ここまで！ お二人とも、下がってください。',
      );
      await acute.say_and_wait('決勝に進めなかったのですか？ なぜでしょう？');
      await you.say_as_passer_by_and_wait(
        '審判',
        '【フィギュアボクシング】の最中、シリウスさんは蹴りを入れて、私のサングラスを落としそうになりました。',
      );
      await you.say_as_passer_by_and_wait(
        '審判',
        'ゴールドシチーさんは【フィギュアボクシング】の合間に、たびたびカメラへポーズを向け、挑発技のように見えました。',
      );
      await city.say_and_wait('な！——つい職業病が……この種目も、甘くないわね。');
      await era.printAndWait('……何の職業の職業病だ。');
      await era.printAndWait('そのとき、隣の試合から大きな音がする——');
      await princess.say_and_wait('はっ、わっ、ちゃっ、あっ——だ！');
      await era.printAndWait('——ぴ～け～ぺん～～～！——');
      await you.say_as_passer_by_and_wait(
        '審判',
        'カワカミプリンセス、失格！ 試合中に飛び蹴りで柵を蹴り壊すのは、反則です！',
      );
      await era.printAndWait('…………');
      await you.say_as_passer_by_and_wait(
        '髪を挟んだ中年女性ファン',
        'あなた、見た？',
      );
      await you.say_as_passer_by_and_wait(
        '患者服の中年男性ファン',
        '見たよ。正統・仏〇無影脚、しょっぱすぎる。',
      );
      await you.say_as_passer_by_and_wait(
        '隣のおかゆ仲間の若いファン',
        'しょっぱい足？ どのくらいしょっぱい？',
      );
      await you.say_as_passer_by_and_wait('黒い高級スーツの傷顔ファン', [
        '北部家の',
        acute.sex_code - 1 ? '娘' : '息子',
        '？……ふん、いい通背拳だ。拳風が車まで届いている。',
      ]);
      await you.say_as_passer_by_and_wait(
        '車で来た白衣の野次馬ファン',
        '車？ 俺の車は！？ ここに置いたあんなに大きい車は！？ 新車だぞ！ サイドミラーしか残ってない！？',
      );
      await you.say_as_passer_by_and_wait(
        'タバコを銜え、サイドミラーのない新車に座る頭の大きな中年男性ファン',
        [
          '分かったよ。トレセンの',
          acute.uma_sex_title,
          'は、みな一芸を持っている——',
        ],
      );
      await era.printAndWait('…………');
      await era.printAndWait(
        '世の広さを嘆かざるを得ない、トレセンのフィギュアボクシング会場で、',
      );
      await era.printAndWait('人類未解明の試合を眺めながら、');
      await era.printAndWait([
        acute.get_colored_name(),
        ' は淡々と勝ち上がり、ついに決勝の場へ来た——',
      ]);
      await era.printAndWait('…………');
      await muteki.say_and_wait([m_call_a, '、よろしくお願いします。']);
      await muteki.say_and_wait([
        '伝説の拳術師である',
        acute.uma_sex_title,
        'と手合わせできるとは、実に奮い立ちます。',
      ]);
      await acute.say_and_wait([
        'おおお～',
        call_72,
        '、こちらこそ、よろしくお願いしますね？ 立ち姿は、相変わらず眩しいですよ～',
      ]);
      await era.printAndWait([
        '恭しく礼をする ',
        muteki.get_colored_name(),
        ' に、',
        acute.get_colored_name(),
        ' はいつものように気ままに応える——',
      ]);
      await era.printAndWait('……待って、伝説の拳術師？ それは何だ。');
      await muteki.say_and_wait('では……八重古武術、ご指導ください。');
      await era.printAndWait([
        '古武術に通じた ',
        muteki.get_colored_name(),
        ' が、もう一度礼をする。',
      ]);
      await era.printAndWait(
        '拳の動きは完璧、呼吸のリズムにも隙がない。露出した腋までよく見え、どの面も完璧だ。',
      );
      await era.printAndWait([
        'そんな相手を前にしても、',
        acute.get_colored_name(),
        ' は余裕のままだ。',
      ]);
      await era.printAndWait('笛が鳴り、二人は試合を始める——');
      await era.printAndWait('…………');
      await muteki.say_and_wait('ん——はっ！ とうっ！');
      await era.printAndWait([
        '決勝の幕開けは、',
        muteki.get_colored_name(),
        ' の急な突進だった。',
      ]);
      await era.printAndWait('激しい拳風、猛烈な突撃。嵐のようなボクシング。');
      await era.printAndWait(
        '一打ごとに剛猛で、型の套路をほとんど捨て、力と速さの正撃だけで相手を裂く。',
      );
      await you.say_as_passer_by_and_wait(
        'おさげの浅黒い大男',
        '少〇拳法！——間違いない、これが少〇拳法だ！」',
      );
      era.printButton(
        '（隣の、浅黒くて茶色いかぼちゃみたいな解説者は、どこから来た？）',
        1,
      );
      await era.input();
      await muteki.say_and_wait(
        'ああ！！ 一心不乱！ 最後まで立てば！ この場に最後まで立てば、勝利は私のもの！！！',
      );
      await era.printAndWait([
        '一打、二打、三打……',
        muteki.get_colored_name(),
        ' の攻撃は、まだ続いている。',
      ]);
      await era.printAndWait(
        '常識で考えれば、こんな剛猛な攻めは、体力を大きく削るはずだ。',
      );
      await era.printAndWait([
        'つまり、',
        acute.get_colored_name(),
        ' が相手の尽きるまで耐えれば——',
      ]);
      await you.say_as_passer_by_and_wait('浅黒い大男', 'いや、無駄だ。');
      era.printButton('「……え？」', 1);
      await era.input();
      await era.printAndWait([
        '隣の浅黒い大男は、心を読むように、',
        you.get_colored_name(),
        ' の考えを否定する。',
      ]);
      await you.say_as_passer_by_and_wait(
        '浅黒い大男',
        'よく聞け、相手の呼吸のリズムだ——乱れが一糸もない！',
      );
      await you.say_and_wait('いや、誰が聞き分けられるんだ！？', true);
      await you.say_as_passer_by_and_wait(
        '浅黒い大男',
        'そう、この特殊な呼吸……西〇の僧侶が使う、特殊な呼吸法だ。',
      );
      await you.say_as_passer_by_and_wait(
        '浅黒い大男',
        '高山病に抗うため、呼吸の頻度を整え、酸素を体の隅々の筋肉まで使い切る。',
      );
      await you.say_as_passer_by_and_wait(
        '浅黒い大男',
        '伝説では、呼吸法の最強者は肉体の年齢すら戻せる。数倍の重力がかかる数千メートルの高原でも、最高最強の一打を自在に振るえる——',
      );
      await you.say_and_wait('………………………………');
      await you.say_and_wait('で？');
      await you.say_as_passer_by_and_wait('浅黒い大男', 'まだ分からないのか？');
      await era.printAndWait([
        '浅黒い大男は、信じられない顔で ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await era.printAndWait(
        '……誰が、普通の人間に武術の専門語を常識として持たせた自信を与えたんだ。',
      );
      await you.say_as_passer_by_and_wait('浅黒い大男', [
        'これ · く · ら · いの攻撃頻度なら、呼吸法を使う ',
        muteki.get_colored_name(),
        ' は、三日三晩打っても疲れないだろう。',
      ]);
      era.printButton('「……ふーん？」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait('浅黒い大男', [
        '……いや、三日三晩は人☆類という生物の限界にすぎない——競走',
        acute.uma_sex_title,
        'なら、もっと長く持つだろう。',
      ]);
      await you.say_as_passer_by_and_wait('浅黒い大男', [
        '古武術に通じた',
        acute.uma_sex_title,
        ' ',
        muteki.get_colored_name(),
        ' に、伝説の拳術家 ',
        acute.get_colored_name(),
        ' はどう応える？',
        acute.get_colored_name(),
        ' は、どうすれば ',
        muteki.get_colored_name(),
        ' の呼吸法連打を破れる？ は……この精妙な場面、気功と拳功、自〇山大会の百年後の最終決戦……ますます楽しみだ。',
      ]);
      await you.say_and_wait('…………');
      era.printButton('（今から夕食を作りに戻っても、間に合うか？）', 1);
      await era.input();
      await era.printAndWait('…………');
      await acute.say_and_wait('いち…に…さん…し！（*拳を振る）');
      await acute.say_and_wait(
        [
          'さすがは ',
          call_72,
          '……呼吸法を、ここまで手慣れて使って、何度も拳を振っても、汗ひとつ落ちない——',
        ],
        true,
      );
      await acute.say_and_wait(
        [
          'この攻めを耐え続けるのは、とても辛い——でも、わたしはボクサーの父の',
          acute.sex_code - 1 ? '娘' : '息子',
          'です！',
        ],
        true,
      );
      await acute.say_and_wait('に…に…さん…し！（*拳を振る）');
      await era.printAndWait([
        '相手の呼吸連打の下でも、強い意地の ',
        acute.get_colored_name(),
        ' は、守りで後れを取らない！',
      ]);
      await era.printAndWait([
        'どれだけ攻めても隙が見えない ',
        acute.get_colored_name(),
        ' に、',
        muteki.get_colored_name(),
        ' の攻めは、だんだん焦り始める——',
      ]);
      await era.printAndWait([
        '……このままなら、',
        muteki.get_colored_name(),
        ' の隙を待ち、一打で決められるかもしれない。',
      ]);
      await acute.say_and_wait('む……でも、体はもう限界——このままでは……', true);
      era.printButton(
        `「頑張れ！ ${acute.name}！ 肉は鍋で煮てある！ 勝ったら、肉じゃがを一緒に食べよう！」`,
        1,
      );
      await era.input();
      await acute.say_and_wait(
        [callname, '……', callname, ' が、応援してくれている——'],
        true,
      );
      await acute.say_and_wait(
        ['ふう——', callname, ' に、みっともないところは見せられません。'],
        true,
      );
      await acute.say_and_wait(
        'もう耐えられないなら……すべてを、この一打に——！',
        true,
      );
      await acute.say_and_wait(
        'うわああ！！！ 熱血を燃やして、最後の一瞬まで。受けなさい、わたしの最後の一打！！！',
      );
      await era.printAndWait([
        'その瞬間、',
        acute.get_colored_name(),
        ' は守りを捨てる。',
      ]);
      await era.printAndWait('足を後ろへ引き、尻尾が一揺れ——');
      await era.printAndWait('すべてが、この一打に籠もる！');
      if (win_count >= 5) {
        await era.printAndWait([
          acute.get_colored_name(),
          '、伝説の拳術師。すべてを賭けた、天下に冠絶する柔拳。',
        ]);
        await era.printAndWait([
          'その一瞬、',
          muteki.get_colored_name(),
          ' の天下に剛なる剛拳をすり抜け——筋肉の詰まった腹へ、まっすぐに入る！',
        ]);
        await era.printAndWait(['そう、', acute.sex, 'は剛拳ほど烈しくない。']);
        await era.printAndWait([
          'そう、',
          acute.sex,
          'は剛拳ほど勇ましくない。',
        ]);
        await era.printAndWait('そう、この柔らかい一打だけでは勝てない。');
        await era.printAndWait(
          '大樹のようにしなやかで、柳の葉のように柔らかい柔拳は、剛拳ほど眩しくはないのかもしれない。',
        );
        await era.printAndWait('だが、この一打があれば、足りる。');
        await era.printAndWait('金剛不壊の剛勇を破るには——');
        await era.printAndWait('この一打だけ、あ · れ · ば · 足 · り · る。');
        await muteki.say_and_wait('あっ！ く——');
        await muteki.say_and_wait('こ、呼吸のリズム！？', true);
        await you.say_as_passer_by_and_wait('審判', 'びっ、びっ、びっ——');
        await you.say_as_passer_by_and_wait('浅黒い大男', '崩れた！');
        await era.printAndWait('そう、誰の目にも分かった。');
        await era.printAndWait([
          'まさに ',
          acute.get_colored_name(),
          ' の柔拳が ',
          muteki.get_colored_name(),
          ' の腹に当たった、その瞬間。',
        ]);
        await era.printAndWait([
          muteki.get_colored_name(),
          ' の、ほぼ完璧だった呼吸法——そこに、隙が生まれた！',
        ]);
        await muteki.say_and_wait(
          'くっ……呼吸を崩す、それが目的だったのか？',
          true,
        );
        await muteki.say_and_wait(
          '攻めの切れ目を狙い、呼吸の隙間を探す。吸気の一瞬に、腹へ刺してリズムを断つ柔拳——なんという観察力だ。',
          true,
        );
        await muteki.say_and_wait(
          '伝説の拳法家、奇跡の時代の伝説。歳月に削られ、拳は往年の迫力を失った。だが歳月が与えた知恵と、不屈者の意地が、かえって新しい境地へ押し上げたのか——',
          true,
        );
        await muteki.say_and_wait(['——', m_call_a, '！'], true);
        await acute.say_and_wait('ふん……息をつかせるつもりはありませんよ！');
        await acute.say_and_wait([
          '見ていてください、',
          muteki.get_colored_name(),
          ' さん——わたしの辞書に、『終わり』という字はありません！！！',
        ]);
        await era.printAndWait('もう立てなくても、');
        await era.printAndWait('もう目が見えなくても、');
        await era.printAndWait('脚が千斤のように重く震えても。');
        await era.printAndWait(
          '武術界の伝説の拳師は——この程度の困難では止まらない！',
        );
        await era.printAndWait([
          '短い息継ぎさえあれば、',
          muteki.get_colored_name(),
          ' は、呼吸のリズムを取り戻せるかもしれない。',
        ]);
        await era.printAndWait(
          '攻めのリズムを少し緩めれば、無敵の剛拳は再び尽きない攻めへ戻れるかもしれない。',
        );
        await era.printAndWait([
          '新時代の逸材——',
          muteki.get_colored_name(),
          ' は、何度でも過ちを犯せる。旧時代の伝説——',
          acute.get_colored_name(),
          ' は、一度の過ちで敗れる。',
        ]);
        await era.printAndWait('——だが、それがどうした。');
        await era.printAndWait('「一度の過ちで敗れる」なら——');
        await era.printAndWait(
          '【一 · 度 · も · 間 · 違 · え · な · け · れ · ば · い · い · だ · け · だ】',
          {
            color: acute.color,
            fontSize: '2rem',
          },
        );
        await era.printAndWait(
          '嵐の花のような柔拳、止まらない柔拳、意地と勇気の柔拳——',
        );
        await acute.say_and_wait('わたしの柔拳は、まだ終わりません！！！！');
        era.drawLine();
        await era.printAndWait('黄昏の擂台上に、立っている勝者は一人だけ。');
        await you.say_as_passer_by_and_wait('審判', 'ここまで、勝負あり！');
        await you.say_as_passer_by_and_wait(
          '審判',
          'トレセン第83回天下一フィギュアボクシング、最終勝者は——',
        );
        await you.say_as_passer_by_and_wait('審判', [
          acute.get_colored_name(),
          ' さん！',
        ]);
        await era.printAndWait([
          '決勝の擂台上、目の霞んだ ',
          acute.get_colored_name(),
          ' が、右の拳を高く掲げる。',
        ]);
        await era.printAndWait(
          '擂台の下、雷のような拍手が勝者に栄光と喝采を贈る。',
        );
        await you.say_as_passer_by_and_wait(
          '浅黒い大男',
          '勝った、勝った！！！',
        );
        await you.say_as_passer_by_and_wait(
          '浅黒い大男',
          '歳月は飛び、伝説の拳術家の拳は、とうに往年の迫力を失っている。',
        );
        await you.say_as_passer_by_and_wait('浅黒い大男', [
          'だが',
          acute.sex,
          'は自分に勝ち、歳月の侵食に勝ち、至絶至速の柔拳で、剛絶無敵の剛拳に勝った！',
        ]);
        await you.say_as_passer_by_and_wait('浅黒い大男', [
          acute.get_colored_name(),
          '！',
          acute.get_colored_name(),
          '！！！',
          acute.sex,
          'は、ついに武術界の頂点に立った！',
        ]);
        await you.say_as_passer_by_and_wait('浅黒い大男', [
          acute.sex,
          'は時間に勝った！！！！！！',
        ]);
        await era.printAndWait('舞台下、興奮した観客たちが抱き合う。');
        await era.printAndWait(
          '涙と感動が会場を満たす。審判まで、そっと感動の涙を拭っている。',
        );
        await era.printAndWait('この瞬間——擂台上の武者。');
        await era.printAndWait(
          '高く掲げた拳は、武術界の、まことの永遠の伝説となった。',
        );
        era.drawLine();
        await era.printAndWait([
          '黄昏、人波が散るころ。力の尽きた ',
          acute.get_colored_name(),
          ' を背負い、',
          you.get_colored_name(),
          ' と ',
          acute.get_colored_name(),
          ' は帰り道を歩き出す。',
        ]);
        await acute.say_and_wait(
          'えへへ……自分が勝てるなんて、思ってもみませんでした',
        );
        await era.printAndWait([
          '背中に凭れ、もう動けないほど力がないのに、',
          acute.get_colored_name(),
          ' は相変わらず穏やかで、のんびりと今日の勝ちを報告する。',
        ]);
        era.printButton(
          '「はは……危なかったな。あの南瓜みたいな大男と、擂台の下で本気で冷や汗かいたよ」',
          1,
        );
        await era.input();
        await acute.say_and_wait('あら～～～そうでしたか～？');
        await era.printAndWait([
          'ことのほか嬉しいせいか、',
          acute.get_colored_name(),
          ' の声に、珍しく軽い調子が混じる。',
        ]);
        await acute.say_and_wait([
          'でも覚えていますよ——',
          callname,
          '、ボクシングにはあまり興味がなかったはずでは？',
        ]);
        era.printButton('「はは……それは別の話だよ」', 1);
        await era.input();
        await era.printAndWait([
          '少し気まずい笑みを二つ零す。',
          you.get_colored_name(),
          ' はわざと顔を逸らし、遠くの黄昏の太陽を見る。背後でいつも心事を見透かす',
          acute.uma_sex_title,
          'と、目を合わせないように。',
        ]);
        era.printButton('「正直……最初は、ボクシングに興味なんてなかった」', 1);
        await era.input();
        await acute.say_and_wait(
          'うん～——そう言うなら、いまは改まったのですか？',
        );
        era.printButton('「ああ、改まった」', 1);
        await era.input();
        await era.printAndWait('迷わず、それを認める。');
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' は認めざるを得ない。最初は、ボクシングに偏見があった。',
        ]);
        await era.printAndWait(
          '印象では、殴り合う試合は、どうしても【野蛮】という言葉と結びつく。',
        );
        await era.printAndWait(
          'だが胸の奥に隠していた小さな偏見は、この感動の一戦のあと、もう煙のように消えていた。',
        );
        await era.printAndWait('擂台上で折れなかった姿と、高く掲げた右拳。');
        await era.printAndWait('弱い自分にとって、生涯忘れられないだろう。');
        await era.printAndWait('だって、あれはあまりに【輝いて】いた。');
        await acute.say_and_wait('うん～ふん～');
        await era.printAndWait([
          '肩に凭れた ',
          acute.get_colored_name(),
          ' は、何を思っているのか。ふいに、楽しげな鼻歌を口ずさむ。',
        ]);
        await acute.say_and_wait(['ねえ、', callname]);
        await you.say_and_wait(['どうした、', acute.get_colored_name(), '？']);
        await acute.say_and_wait(
          'あのね——もし……もし、わたしが負けていたら。あなたは、どうしますか？',
        );
        era.printButton('「……負けてたら？」', 1);
        await era.input();
        await era.printAndWait('眉を寄せる。意地悪で奇妙な問いだ。');
        await era.printAndWait([acute.get_colored_name(), ' が負ける？']);
        await era.printAndWait(
          'その考えは、自分の中に一瞬も浮かんだことがなかった。',
        );
        await era.printAndWait(
          'だが問いである以上——答えは、きちんと考える必要がある。',
        );
        era.printButton(
          `「……負けても、大丈夫だ。そんなことで ${acute.name} は折れない」`,
          1,
        );
        await era.input();
        await acute.say_and_wait('……ふむ？ どうしてです？');
        await era.printAndWait([
          acute.get_colored_name(),
          ' は興味深そうに聞く——',
          acute.sex,
          'はこの答えに、ことのほか関心があるらしい。',
        ]);
        era.printButton('「だって——失敗しても、起き上がればいいだろ？」', 1);
        await era.input();
        await era.printAndWait([
          '黄昏の、誰もいない中庭。',
          acute.get_colored_name(),
          ' を背負った ',
          you.get_colored_name(),
          ' は、枯れ木の洞のそばで足を止める。',
        ]);
        await era.printAndWait('そうだ、失敗した。だが、それがどうした。');
        await era.printAndWait('【今回】負けただけだ。');
        await era.printAndWait('【次】で取り返せばいい。');
        await era.printAndWait([
          'たとえ【100】回の敗者でも、【取り返せ】れば——',
          acute.sex,
          'は最後の勝者のままだ。',
        ]);
        await era.printAndWait('ごく簡単な道理だ。');
        await era.printAndWait([
          '——と同時に、これは ',
          acute.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に教えてくれた道理でもある。',
        ]);
        await era.printAndWait([
          '黄昏の下、悪さを見咎められた少年のように、',
          you.get_colored_name(),
          ' はそっと振り返り、年上の「顔色」を探る。',
        ]);
        await era.printAndWait([
          '振り返ると——',
          acute.get_colored_name(),
          ' も、こちらを見ていた。',
        ]);
        await era.printAndWait(
          '深い色の瞳に、朝の「露」が混じり、生命の光を宿している——',
        );
        await era.printAndWait('恍惚として、心臓がどんどんと打つ。');
        await acute.say_and_wait('……');
        await acute.say_and_wait(['…………あの、', callname]);
        await acute.say_and_wait('もう……下ろしてもらえますか？');
        era.printButton('「あ——す、すぐ、すぐ下ろす——」', 1);
        await era.input();
        await era.printAndWait('とたんに、手際が乱れる。');
        await era.printAndWait('年上に現行犯で捕まった悪戯っ子のようだ。');
        await era.printAndWait([
          '腰を落とし、',
          acute.get_colored_name(),
          ' のつま先が、そっと地面に触れる。',
        ]);
        await era.printAndWait('くるり——不意に、一回転する。');
        await era.printAndWait([
          '振り返ると、',
          acute.get_colored_name(),
          ' は背を向けている——',
          acute.sex,
          'の顔は見えない。',
        ]);
        await acute.say_and_wait([
          '……ごめんなさい、',
          callname,
          '。実は、うそをついていました',
        ]);
        await era.printAndWait('熱い胸が、どんどんと打つ。');
        await acute.say_and_wait(
          '実はね……試合のあと、まだ少し力は残っていたのです……休憩室まで歩くくらい、問題なかったのですよ',
        );
        await era.printAndWait(
          '夜近い黄昏なのに、体は沸騰した溶岩のように熱い。',
        );
        await acute.say_and_wait('ですから、その……');
        await era.printAndWait([
          acute.sex,
          'が振り返り、美しい長い髪が一揺れする。差し色の白い筋が、月明かりのように——',
        ]);
        await acute.say_and_wait([
          '……わたしから——あるいは他の',
          acute.uma_sex_title,
          'から、何度も聞いたことがあるかもしれませんね？',
        ]);
        await era.printAndWait('羞恥に染まった頬が、熱い蒸気を放っている。');
        await acute.say_and_wait(
          'でも、やっぱり、あなたが好きです——トレーナーさん',
        );
        await era.printAndWait(
          '黄昏の下、誇らしい顔と、まっすぐな言葉が、誰もいない中庭に残る。',
        );
        await era.printAndWait([
          acute.get_colored_name(),
          ' の顔はもう真っ赤だ——だが',
          acute.sex,
          'の目は、しっかりこちらを見ている。',
        ]);
        await era.printAndWait('……おかしいか？');
        await era.printAndWait('少しも。');
        await era.printAndWait('なぜか。');
        await era.printAndWait([
          'それが、自分が知っている ',
          acute.get_colored_name(),
          ' だからだ。',
        ]);
        await era.printAndWait('穏やかで、勇敢で、折れない。');
        await era.printAndWait([
          '静かな表の下で、熱い心を燃やしている ',
          acute.get_colored_name(),
          '。',
        ]);
        await you.say_and_wait('……');
        await you.say_and_wait('…………');
        await you.say_and_wait('………………はは');
        await era.printAndWait('理由もなく、笑いが零れる。');
        await era.printAndWait('……おかしいか？');
        await era.printAndWait('少しも。');
        await era.printAndWait('なぜか。');
        await era.printAndWait([
          'それが、',
          acute.get_colored_name(),
          ' の知っているトレーナーだからだ。',
        ]);
        era.drawLine();
        await era.printAndWait('黄昏の下、ふたりは黙ったまま。');
        await era.printAndWait('小さな歩幅で、家（トレーナー室）へ戻る。');
        await era.printAndWait('炉の前のじゃがいもが、ようやく煮えた。');
        await era.printAndWait([
          acute.get_colored_name(),
          ' がそれを盛り、',
          you.get_colored_name(),
          ' が器を出す。',
        ]);
        await era.printAndWait('牛肉を足して、一緒に混ぜご飯にする。');
        await era.printAndWait('あむあむ、と腹へ収める。');
      } else {
        await you.say_as_passer_by_and_wait('審判', 'ここまで！');
        await you.say_as_passer_by_and_wait(
          '審判',
          'トレセン第83回天下一フィギュアボクシング、最終勝者は——',
        );
        await you.say_as_passer_by_and_wait('審判', [
          muteki.get_colored_name(),
          ' さん！',
        ]);
        await you.say_as_passer_by_and_wait('浅黒い大男', [
          acute.get_colored_name(),
          ' さんの最後の一打は、腹を突いて ',
          muteki.get_colored_name(),
          ' さんの呼吸を崩す、奇跡の拳……',
        ]);
        await you.say_as_passer_by_and_wait(
          '浅黒い大男',
          'だが惜しい。最強の柔拳は、なお最強の剛拳には及ばなかった——',
        );
        await you.say_as_passer_by_and_wait(
          '浅黒い大男',
          '十年早ければ、あの伝説の拳師の剛がまだ残っていたころ。あの冠絶の一打で、試合は終わっていたはずだ。',
        );
        await you.say_as_passer_by_and_wait(
          '浅黒い大男',
          'ああ……年歳。あらゆる武術家の大敵だ。',
        );
        await era.printAndWait(
          '擂台の下、解説の浅黒い大男が、涙を流している。',
        );
        await era.printAndWait('一方、擂台の上では——');
        await acute.say_and_wait([
          callname.substring(0, 1),
          '……',
          callname,
          '……',
        ]);
        await era.printAndWait([
          '擂台上、汗が蒸気になるころ、',
          acute.get_colored_name(),
          ' の目に涙が満ちる。',
        ]);
        await acute.say_and_wait(
          'う～～～わたしは……燃え尽きました。真っ白な灰に——',
        );
        await era.printAndWait([
          '力の尽きた ',
          acute.get_colored_name(),
          ' は、擂台の上に力なく崩れ落ちる。',
        ]);
        await era.printAndWait('——それと同時に、観客の雷のような拍手が——');
        await era.printAndWait([
          'こうして、',
          acute.get_colored_name(),
          ' は拍手のなか、幕を下りた。',
        ]);
        await era.printAndWait('旧時代の伝説は、新時代の伝説に道を譲る——');
        era.drawLine();
        await era.printAndWait([
          '黄昏、人波が散るころ。力の尽きた ',
          acute.get_colored_name(),
          ' を背負い、',
          you.get_colored_name(),
          ' と ',
          acute.get_colored_name(),
          ' は帰り道を歩き出す。',
        ]);
        await acute.say_and_wait([
          'む～～',
          callname,
          ' に、負けたところを見られてしまいましたね——',
        ]);
        await era.printAndWait([
          '背中に凭れ、もう動けないほど力がないのに、',
          acute.get_colored_name(),
          ' はなお口を尖らせ、今日の決勝を忘れられない様子だ。',
        ]);
        era.printButton(
          '「まあ——最後の一打は、俺も観客も見てたぞ？ みんな感動してた」',
          1,
        );
        await era.input();
        await acute.say_and_wait('でも……負けは、負けです');
        era.printButton('「はは……そうだな、確かに負けた」', 1);
        await era.input();
        await era.printAndWait('擂台上の勝負は、こうも無情だ。');
        await era.printAndWait(
          '勝者がいれば、必ず敗者がいる。勝者は輝き、敗者は惨めに退場する。',
        );
        await era.printAndWait(
          '体も、調子も、運も。場で百パーセントを出して勝てなければ、どれだけきれいな調教成績も意味を持たない。',
        );
        await era.printAndWait('この世界は結果論だ。擂台も、レースも。');
        await era.printAndWait('……ただ——');
        era.printButton('「いま負けたなら、次で取り返せばいい」', 1);
        await era.input();
        await acute.say_and_wait(['……', callname, '？']);
        era.printButton('「だから——いま負けても、次で取り返せばいいんだ」', 1);
        await era.input();
        await era.printAndWait(
          'この世界が結果論でも、誰にも【一度きり】の機会しかないわけではない。',
        );
        await era.printAndWait('そうだ、失敗した。だが、それがどうした。');
        await era.printAndWait('【今回】負けただけだ。');
        await era.printAndWait('【次】で取り返せばいい。');
        await era.printAndWait([
          'たとえ【100】回の敗者でも、【取り返せ】れば——',
          acute.sex,
          'は最後の勝者のままだ。',
        ]);
        await era.printAndWait([
          '背中の ',
          acute.get_colored_name(),
          ' をそっと揺らし、家（トレーナー室）まであと数歩。',
        ]);
        await era.printAndWait([
          '振り返ると ',
          acute.get_colored_name(),
          '——いま、',
          acute.get_colored_name(),
          ' も ',
          you.get_colored_name(),
          ' を見ていた。',
        ]);
        await era.printAndWait([
          'ただ、このときの ',
          acute.get_colored_name(),
          ' の目は、いつものそれと違う。',
        ]);
        await era.printAndWait('——言葉にするなら、どう言えばいい。');
        await era.printAndWait('のんびりでも、ただ優しいのでもない……');
        await era.printAndWait(
          '驚きの混じった穏やかさで、優しさよりもっと弱い。',
        );
        await era.printAndWait(
          '深い色の瞳に、朝の「露」が混じり、生命の光を宿している——',
        );
        await era.printAndWait([
          'なぜか、背中の「初めて見る」「弱い',
          acute.teen_sex_title,
          '」を見て、心臓がどんどんと打つ。',
        ]);
        await era.printAndWait(
          '打って、打って——赤い勇気が、喉まで上がってくる。',
        );
        era.printButton('「……はは」', 1);
        await era.input();
        await era.printAndWait('思わず、笑いが零れる。');
        await acute.say_and_wait('……なにがおかしいのです？');
        era.printButton('「笑ったのは……鍋で煮てる肉だ」', 1);
        await era.input();
        await era.printAndWait([
          'そう言って、',
          you.get_colored_name(),
          ' は振り返る。眼前は黄昏の廊下だ。',
        ]);
        await acute.say_and_wait('……それが、なにかおかしいのですか');
        await era.printAndWait([
          '口を尖らせ、娘のような ',
          acute.get_colored_name(),
          ' が、肩に凭れる。',
        ]);
        era.drawLine();
        await acute.print_and_wait('……実は、体力はもう戻っている。');
        await acute.print_and_wait([
          'この数歩くらい、',
          acute.uma_sex_title,
          'の意地でなら、楽に歩ける。',
        ]);
        await acute.print_and_wait('……でも。');
        await acute.print_and_wait('でも……');
        await acute.print_and_wait('あと数歩しかないなら。');
        await acute.print_and_wait([
          callname,
          ' に背負ってもらう……それくらい、いいでしょう？',
        ]);
        await acute.say_and_wait('………………');
        await acute.say_and_wait('胸の、このときめき……', true);
        await acute.say_and_wait(
          ['やはり、わたしは ', callname, ' を……彼を——'],
          true,
        );
        era.drawLine();
        await acute.print_and_wait('こうして、少し塩の効いたファン感謝祭は。');
        await acute.print_and_wait('夜の、少し塩辛すぎた肉じゃがのなかで、');
        await acute.print_and_wait('幕を閉じた——');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_palace_ge: (() => {
    const title = '誓い';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        acute.get_colored_name(),
        ' と出会って四年目、三月。',
      ]);
      await era.printAndWait('気温は戻りつつあるが、地面はまだ湿って冷たい。');
      await era.printAndWait([
        acute.get_colored_name(),
        ' が殿堂入りして、三日目。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' が北海道へ休暇に来た、一日目でもある。',
      ]);
      era.drawLine({ content: '北海道 温泉旅館' });
      await acute.say_and_wait(
        'わあ～生きてるタラバガニを見るのは、初めてです——',
      );
      await era.printAndWait([
        '眼前の宴に、',
        acute.get_colored_name(),
        ' は心から感嘆の声を上げる。',
      ]);
      await era.printAndWait([
        'ふん、おかげさまと言えば ',
        you.get_colored_name(),
        ' の下準備だ。',
      ]);
      await era.printAndWait([
        'そう、休暇が始まる前から。',
        you.get_colored_actual_name(),
        ' という名のトレーナーは、旅館の案内を夜更かしで読み込み、三千字の『北海道サバイバル美食案内』を暗記していた——',
      ]);
      await you.say_and_wait([
        'ふんふん～',
        acute.get_colored_name(),
        '、知ってるか？ タラバガニは、実はカニじゃなくてヤドカリの仲間なんだ——',
      ]);
      await acute.say_and_wait('むぐむぐ～');
      await you.say_and_wait(
        '食卓に並ぶタラバガニは、だいたい四種類。俺たちが食べてるのは、土地の名物ハナサキガニだ——',
      );
      await acute.say_and_wait('ごくごく～');
      await you.say_and_wait(
        'ハナサキガニといえば、三通りの食べ方と、六つの呼び方を語らずにはいられない——',
      );
      await acute.say_and_wait('えへ——あはは～');
      era.printButton(`……なあ、${acute.name}。聞いてるか？`, 1);
      await era.input();
      await acute.say_and_wait('聞いてますよ～');
      await era.printAndWait([
        acute.sex,
        'はそう言いながら、手元の作業に忙しい——',
      ]);
      await acute.say_and_wait(
        'いまのは、タラバガニの四通りの書き方、ですよね～',
      );
      await you.say_and_wait('ま・っ・た・く・違・う！');
      await era.printAndWait('美食の紹介を、誰かの悲しい名言みたいに言うな。');
      await acute.say_and_wait('あはは～手元の作業が、なかなか面白くて。');
      await era.printAndWait([
        '声のした方を見ると、',
        acute.get_colored_name(),
        ' の手には、金色のカニばさみがある。',
      ]);
      await era.printAndWait(
        '脚の殻を縁から切り、関節を一周させる。そうすれば爪を持ったまま、身を最大限に味わえる。',
      );
      await era.printAndWait(
        '予約したこの旅館のタラバガニは、たいてい下処理済みで出てくる。客に脚を任せるのは、珍しい。',
      );
      await you.say_and_wait('……店が客をナメてる、とかじゃないよな？');
      await acute.say_and_wait('わたしが、お願いしたんですよ');
      await acute.say_and_wait(
        'こうして小さなはさみで、少しずつ殻を切るのが、実家の工作を思い出して……',
      );
      await era.printAndWait(
        '澄んだ瞳がゆっくり見開き、はさみを持った小さな手がわずかに動く。がちがちと音がして、殻の破片が卓に落ちる。',
      );
      await era.printAndWait([
        'ほどなく、透き通ったカニの棒肉が、',
        acute.get_colored_name(),
        ' の手に現れる。',
      ]);
      await acute.say_and_wait(['ねえ、', callname, '。']);
      await you.say_and_wait('ん？');
      await acute.say_and_wait('はい、あーん');
      await era.printAndWait([
        '母のような優しい声の下、カニの棒肉がもう ',
        you.get_colored_name(),
        ' の顔の前まで来ている。',
      ]);
      await you.say_and_wait(['あのな、', acute.get_colored_name(), '……']);
      await acute.say_and_wait('あーん');
      await you.say_and_wait('ここは、人前なんだが……');
      await acute.say_and_wait('あーん');
      await you.say_and_wait('その、自分の分は自分で……');
      await acute.say_and_wait('あーん');
      await you.say_and_wait('……');
      await era.printAndWait(
        '——口を開けなければ、この棒肉は鼻先に突き当たる！',
      );
      await era.printAndWait(
        '口を開け、大きく真っすぐに、赤い光沢の棒肉へ、そっと歯を立てる。',
      );
      await era.printAndWait(
        '締まった歯ごたえ、熱い汁、海のものだけの塩気、そして高級食材らしい品格——',
      );
      await you.say_and_wait('ん……これ、うまいぞ');
      await you.say_and_wait([
        'なあ、',
        acute.get_colored_name(),
        '、お前も一口——',
      ]);
      await acute.say_and_wait('ああ、少し待ってくださいね～');
      await era.printAndWait(
        'いい味を確かめたところで、手元の一品を分けようとする。',
      );
      await era.printAndWait([
        '隣の ',
        acute.get_colored_name(),
        ' は、興味深げにはさみで、次の脚を弄んでいる。',
      ]);
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait('ついさっき口に押し込まれた棒肉を見る。');
      await acute.say_and_wait('んふんふん～ふんふんふん～');
      await era.printAndWait([
        '食事の時間なのに、まだ手芸みたいに手を動かしている ',
        acute.get_colored_name(),
        ' を見る。',
      ]);
      await era.printAndWait('片手で棒肉を外し、見知らぬ決心が湧く。');
      await you.say_and_wait(['なあ、', acute.get_colored_name(), '。']);
      await acute.say_and_wait(['どうしました、', callname, '？']);
      await you.say_and_wait('いまは食事の時間だよな？');
      await acute.say_and_wait('ええ。～');
      await you.say_and_wait('だからだな……');
      await era.printAndWait([
        'それから片手を',
        acute.sex,
        'の前へ伸ばし、',
        acute.get_colored_name(),
        ' の手仕事を遮る。',
      ]);
      await era.printAndWait([
        '深い色の瞳が一瞬きらめく。胸元へ突然入ってきた右手が、どうやら',
        acute.sex,
        'の注意を奪った。',
      ]);
      await era.printAndWait([
        '続いてその手は、エデンの蛇のように、',
        acute.get_colored_name(),
        ' の顎を引っかける。',
      ]);
      await era.printAndWait('向きを変え、目と目が合う。');
      await era.printAndWait([
        '突然のことに驚いたのか、',
        acute.get_colored_name(),
        ' は逆らわず、その場でぼんやりしている。白い頬にピンクが滲み、喜びか、戸惑いか、見分けがつかない。',
      ]);
      await acute.say_and_wait(['そ、その……', callname, '……？']);
      await era.printAndWait(
        'その声は迷いのようで、驚きのようで、七分の不解に三分の好奇心が混じる。',
      );
      await era.printAndWait(
        '一度出した指は退かない。微かな目の奥で、前へ出る野心が燃えている。',
      );
      await era.printAndWait('前哨はもう済んだ。ここからが本番だ。');
      await you.say_and_wait(['なあ、', acute.get_colored_name(), '～。']);
      await acute.say_and_wait('ん❤️……');
      await you.say_and_wait('いまは食事の時間、だよな？');
      await acute.say_and_wait('……ん？');
      await you.say_and_wait('だからだな……');
      await era.printAndWait('微笑みの顔に、大きな（カニの）棒肉が映る。');
      await era.printAndWait('掌の中は穏やかな顔、寸分の間には獰猛な巨獣——');
      await era.printAndWait('今だ、孤独な勇者よ！');
      await you.say_and_wait('ちゃんとカニの棒肉を食べろ！！！！');
      await era.printAndWait([
        '大きな槍が、その一瞬、',
        acute.get_colored_name(),
        ' の口へ飛び込む。',
      ]);
      await acute.say_and_wait('ぐっ！？');
      await acute.say_and_wait('ん、む、る……');
      await acute.say_and_wait('…………');
      await acute.say_and_wait('……❤️');
      await era.printAndWait('——————');
      await era.printAndWait('——正直に言えば、');
      await era.printAndWait('これは、実に良い宴だった。');
      era.drawLine();
      await era.printAndWait([
        acute.get_colored_name(),
        ' と出会って四年目、三月。',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' が殿堂入りして、三日目。',
      ]);
      await era.printAndWait([
        '理事長の気前のよい計らいで、北海道の温泉旅館へ休暇に来ている。',
      ]);
      await era.printAndWait([
        '……まあ、',
        you.get_colored_name(),
        ' から見れば、この宿は自分には少々贅沢すぎる。',
      ]);
      await era.printAndWait('——夜は、もう深い。');
      await era.printAndWait(
        '温泉に浸かったあと、布団で早めに眠るつもりだった。',
      );
      await era.printAndWait('だが寝返りを打っても、眠れない。');
      await era.printAndWait([
        '布団をはね、窓の外の月を見る。わけのわからない寂しさが、',
        you.get_colored_name(),
        ' の胸へ涌く。',
      ]);
      await era.printAndWait([
        '振り返ると、そこには ',
        acute.get_colored_name(),
        ' の安らかな寝顔。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('夜に紛れて、つま先立ちで、');
      await era.printAndWait('そっと、そっと、扉を開ける。');
      await era.printAndWait('果てのない深夜へ、足を踏み出す。');
      await era.printAndWait('………………');
      await era.printAndWait('夜は、いつも漆黒だ。');
      await era.printAndWait('人のすべてを呑み込めそうな黒。');
      await era.printAndWait('それでも淡い星と月が、蛍のような微光を残す。');
      await era.printAndWait(
        'しばらく生きる方角と、まだ前へ進める希望を、人に渡す。',
      );
      await era.printAndWait('三月の北海道の夜は、四方まだ寒い。');
      await era.printAndWait('だがその寒さこそ、人を醒ませる。');
      await era.printAndWait('宴は良く、寝床は柔らかく、暖房も足りている。');
      await era.printAndWait(
        'それでも全部が、浮ついた影のように、泡のように感じる。',
      );
      await era.printAndWait('——そうだ、自分はまだ弱い。');
      await era.printAndWait('前へ出るなら、「精進」するしかない——');
      await acute.say_as_unknown_and_wait([
        'まだ、眠っていなかったのですね、',
        callname,
        '。',
      ]);
      await era.printAndWait('後ろから、聞き慣れた声がする。');
      await era.printAndWait('体は寒さに震え、頭は寒さで澄んでいる。');
      era.printButton(`「寝てると思ってたぞ、${acute.name}」`, 1);
      await era.input();
      await acute.say_and_wait(
        'あなたが眠るまで、わたしはずっと起きていましたよ',
      );
      await era.printAndWait(
        '後ろを一つの影が過ぎる。深い灰色の長い髪を持つ、脈打つ心だ。',
      );
      await era.printAndWait([
        acute.sex,
        'の歩幅はいつも ',
        you.get_colored_name(),
        ' より広く、だから池にも、月にも、より近い。',
      ]);
      await acute.say_and_wait(
        '今日の宴で、教えてくださるものだと、思っていました',
      );
      await you.say_and_wait('……');
      await you.say_and_wait('……何のことだ？');
      await acute.say_and_wait('フランスへ行くことですよ、トレーナーさん');
      await acute.say_and_wait([
        'フランスの',
        acute.uma_sex_title,
        '界からの招待を受けて、パリで学ぶ。三日後には、ひとりでパリ行きの飛行機に乗る。そうですよね？',
      ]);
      await you.say_and_wait('……');
      await era.printAndWait([acute.sex, 'の言葉は、紛れもない事実だ。']);
      await acute.say_and_wait('……どうして、教えてくれなかったのです？');
      await era.printAndWait('深い灰色の背中が、冷たい言葉を述べる。');
      await you.say_and_wait([
        '……隠したかったわけじゃない。',
        acute.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait('ただ、どう伝えればいいか、分からなかっただけだ');
      await you.say_and_wait([
        'この',
        acute.uma_sex_title,
        'の世界で、もう一段上へ行くなら。今の俺には、お前の隣に立つ資格が、まだない。',
      ]);
      await you.say_and_wait('だが……本当に資格のある人間として、隣に立ちたい');
      await acute.say_and_wait(
        'だから……パリへ行って、三年、学ぶつもりなのですね？',
      );
      await you.say_and_wait('……ああ');
      await acute.say_and_wait(
        'だから……パリへ行って、三年、学ぶつもりなのですね？',
      );
      await era.printAndWait('寒風の中、沈黙が答える。');
      await era.printAndWait('どうしようもない冷たさと、ひとりで貫く無情。');
      await era.printAndWait('月の下、風が微かに撫で、林の音は変わらない。');
      await era.printAndWait('深い灰色の背中が、そっと顔を上げる。');
      await acute.say_and_wait([
        '……『凱旋門賞』は、ご存じですか、',
        callname,
        '？',
      ]);
      await you.say_and_wait('フランスの、最高峰のレースのことか？');
      await acute.say_and_wait([
        'ええ。毎年こちらから『最強の',
        acute.uma_sex_title,
        '』がひとり海を渡り、パリへ赴く、あのレースです',
      ]);
      await acute.say_and_wait('今年は、もう機会がないかもしれません');
      await acute.say_and_wait('でも、来年なら——');
      await you.say_and_wait('……つまり？');
      await acute.say_and_wait('つまり……');
      await era.printAndWait('月明かりの下、深い灰色の影が振り返る。');
      await era.printAndWait('凛とした姿の下で、前へ進む野心が燃えている。');
      await era.printAndWait(
        '三分の迷い、七分の驚き。残念のようで、この上ない喜びに似ている。',
      );
      await era.printAndWait(
        'ソクラテスの麦穂のように、耳を劈くほどなのに、高尚な者の優しさに近い。',
      );
      await era.printAndWait([
        '月の下、星が輝き、灰色の',
        acute.teen_sex_title,
        'が、',
        acute.sex,
        'の約束を口にする。',
      ]);
      await acute.say_and_wait('あなたがパリへ行くなら、わたしも後を追います');
      await acute.say_and_wait('もう一年、ください。トレーナー');
      await acute.say_and_wait('必ず、追いかけてみせます');
      await acute.say_and_wait([callname, '——']);
      era.drawLine();
      await era.printAndWait('北海道の話は、いったんここで区切る。');
      await era.printAndWait('未来の話は、まだ、まだまだ長い——');
    };
    f.title = title;
    return f;
  })(),
  ws_palace_ne: (() => {
    const title = '起点';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} minoru 駿川たづな/ハープスター
     * @param {CharaTalk} taste 秋川やよい/ノースフライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_m プレイヤーの駿川たづなへの呼び方
     * @param {PrintedSpan} y_call_t プレイヤーの秋川やよいへの呼び方
     */
    const f = async (
      acute,
      minoru,
      taste,
      you,
      callname,
      y_call_m,
      y_call_t,
    ) => {
      await era.printAndWait([
        acute.get_colored_name(),
        ' と出会って四年目、三月。',
      ]);
      await era.printAndWait('気温は戻りつつあるが、地面はまだ湿って冷たい。');
      await era.printAndWait([
        acute.get_colored_name(),
        ' が殿堂入りして、六日目。',
      ]);
      await era.printAndWait([
        '一度は肩を寄せ合った ',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' が、これから離れる、一年目でもある。',
      ]);
      era.drawLine({ content: '東京 国際空港' });
      era.printButton('「ここまででいい」', 1);
      await era.input();
      await you.say_and_wait([
        'ここまで付き合ってくれて、ありがとう。',
        y_call_t,
        '、',
        y_call_m,
        '。',
      ]);
      await minoru.say_and_wait(
        'あはは——何年も一緒なのに、そんな遠慮しなくても。',
      );
      await taste.say_and_wait([
        '同 意！',
        you.actual_name,
        ' トレーナーは、とっくにトレセン学園の家族じゃ。',
      ]);

      await era.printAndWait([
        '空港の搭乗口の前で、',
        you.get_colored_name(),
        ' は ',
        minoru.get_colored_name(),
        '、',
        taste.get_colored_name(),
        ' と、最後の世間話をしている。',
      ]);
      await minoru.say_and_wait(
        'でもね……まさか、本当にフランスの招待を受けるなんて。',
      );
      await taste.say_and_wait(
        '驚 愕！その知らせを聞いたとき、衝撃でにんじんが地面に落ちてしもうた。',
      );
      await you.say_and_wait('はは……たしかに、俺らしいやり方じゃないかもな');
      await era.printAndWait([
        '片手で後頭部を掻き、',
        minoru.get_colored_name(),
        ' と ',
        taste.get_colored_name(),
        ' の前で、気まずい笑いが零れる。',
      ]);
      await you.say_and_wait('実は……決心したのも、つい最近だ');
      await you.say_and_wait([
        acute.get_colored_name(),
        ' のトレーナーになって三年。本当に優秀なトレーナーからは、まだ遠いと分かった。',
      ]);
      await you.say_and_wait('動じない心も、緩急を見極めて組む調教計画も');
      await you.say_and_wait('今の俺は、『優秀なトレーナー』には、まだ遠い。');
      await minoru.say_and_wait(
        'それで、フランスのウマ娘界からの招待を受けて、パリでしばらく学ぶことにしたの？',
      );
      await you.say_and_wait(
        'ああ——ただし、二人が知ってる俺だ。自分だけじゃ、故郷を離れる度胸なんてなかった。',
      );
      await you.say_and_wait([
        '実際……決心を後押ししてくれたのは、',
        acute.get_colored_name(),
        ' だ。',
      ]);
      await you.say_and_wait([
        'こんな無能で失格のトレーナーでも、',
        acute.get_colored_name(),
        ' は折れずに、努力と小さな運で、殿堂入りを果たした。そうだろう？',
      ]);
      await you.say_and_wait('だから——自分も、少しは頑張るべきだと思った');
      await you.say_and_wait([
        '本当に資格のあるトレーナーとして、',
        acute.get_colored_name(),
        ' の隣に立ちたい。',
      ]);
      await minoru.say_and_wait('そう……');
      await taste.say_and_wait(
        '無 悔！それがおぬしの決断なら、我らは無条件で応援する。',
      );
      await minoru.say_and_wait([
        'でも……',
        acute.get_colored_name(),
        ' は、今日はどうして見送りに来なかったの？',
      ]);
      await you.say_and_wait([
        'それは……フランスのことは、今も',
        acute.sex,
        'に隠してる。',
      ]);
      await taste.say_and_wait([
        '驚 愕！？まだ ',
        acute.get_colored_name(),
        ' に隠しておるのか！？',
      ]);
      await you.say_and_wait(['はは……手紙は、残した']);
      await you.say_and_wait([
        '正しいのか、間違っているのか、自分でも分からない',
      ]);
      await you.say_and_wait([
        'ただ、',
        acute.sex,
        'の前で別れるなら……ひとりで、こっそり、野良犬みたいに逃げる方が……まだいい。',
      ]);
      await era.printAndWait('【ボン、ボン、ボン、ボン～】');
      await era.printAndWait('【パリ行きのお客様にお知らせします～】');
      await era.printAndWait('【QR5201便は、ただいま搭乗を開始いたします～】');
      await you.say_and_wait([
        '時間みたいだ——',
        y_call_t,
        '、',
        y_call_m,
        '。',
      ]);
      await minoru.say_and_wait(['いってらっしゃい、', you.actual_name, '。']);
      await taste.say_and_wait('宏 図！学び終えたら、早く戻ってくるのじゃ！');
      await you.say_and_wait('ありがとう。じゃあ——');
      await you.say_and_wait('三年後に会おう');
      await era.printAndWait('………………');
      await era.printAndWait('平凡な列、面白みのない改札。');
      await era.printAndWait('二階から下りてホールへ入る。');
      await era.printAndWait('面白いとも、語る価値があるとも言えない。');
      await era.printAndWait(
        'ふと喉が渇く。癖で手を伸ばし、鞄から渇きを癒す干しにんじんを探してしまう。',
      );
      await era.printAndWait([
        '探して、ようやく思い出す。',
        you.get_colored_name(),
        ' は、もともと外出に食べ物を持たない。',
      ]);
      await you.say_and_wait('……');
      await you.say_and_wait('……はは——');
      era.printButton(
        '「俺は、どれだけの間、ひとりで遠出をしていなかったんだ？」',
        1,
      );
      await era.input();
      await era.printAndWait('急ぐ人波の真ん中で、返事はない。');
      await era.printAndWait('思わず顔を上げ、搭乗口を振り返る。');
      await era.printAndWait(
        'そこには盆栽がいつもどおり、人影が数人行き来している。',
      );
      await you.say_and_wait(
        [
          '……あそこに ',
          acute.get_colored_name(),
          ' がいたら、どれだけ良かったか',
        ],
        true,
      );
      await era.printAndWait('頭の中で、そう思う。');
      await era.printAndWait('続いて、自分で自分を優しく嗤う。');
      era.printButton('（今さら……何を考えてるんだ）', 1);
      await era.input();
      era.printButton(
        `（${you.actual_name}よ、${you.actual_name}。そんなに弱くていいのか）`,
        1,
      );
      await era.input();
      await era.printAndWait('自嘲の苦笑いが空へ散り、人の海に呑まれる。');
      await era.printAndWait('気を引き締める。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、「最初」の一歩を踏み出した——',
      ]);
      era.drawLine();
      await acute.print_and_wait('盆栽の下、ガラスの傍。');
      await acute.print_and_wait([
        'ひとりの',
        acute.child_sex_title,
        'が、静かに座っている。',
      ]);
      await acute.print_and_wait([
        '人はよく、',
        acute.child_sex_title,
        'は穏やかで優しく、年寄りじみていると言う。',
      ]);
      await acute.print_and_wait([
        '本当は、',
        acute.child_sex_title,
        'は人の口ほど、いつも穏やかでも優しくもない。',
      ]);
      await acute.print_and_wait([
        acute.sex,
        'も普通の人と同じで、圧を感じ、辛さを感じ、どこにも置けない寂しさを感じ、胸が裂ける痛みを感じる。',
      ]);
      await acute.print_and_wait([
        'ただ——',
        acute.sex,
        'は、その内を人に話したくない。',
      ]);
      await acute.print_and_wait([
        acute.sex,
        'は、ひとりでこっそり隠れる方が好きだ。',
      ]);
      await acute.print_and_wait('「誰にも見つからない」場所へ。');
      await acute.print_and_wait('そこで、そっと座る。');
      await acute.print_and_wait('「最初」と同じように——');
      minoru.name = `緑の帽子の${minoru.phy_sex_title}`;
      acute.name = acute.child_sex_title;
      await minoru.say_and_wait([
        '——',
        you.sex,
        'に、別れを言いに行かないの？',
      ]);
      await acute.print_and_wait([
        '傍らで、親切な',
        acute.phy_sex_title,
        'が、',
        acute.sex,
        'の横に立っている。',
      ]);
      await acute.say_and_wait('いいえ、結構です……これで、いいんです');
      await minoru.say_and_wait('そう……');
      await acute.print_and_wait([
        '下の人波を眺め、',
        you.child_sex_title,
        'の背中を拾い出す。',
      ]);
      await acute.print_and_wait([
        'なぜか、',
        acute.phy_sex_title,
        'が、思わず息を吐く。',
      ]);
      await minoru.say_and_wait('あの子、本当に馬鹿ね——');
      await acute.say_and_wait(['', callname, ' のこと、ですか？']);
      await minoru.say_and_wait([you.sex, '以外に、誰がいるの？']);
      await acute.print_and_wait([
        '言い終えると、',
        acute.phy_sex_title,
        'の帽子が一揺れし、隠していた秘密が今にも溢れそうだ。',
      ]);
      await acute.say_and_wait('わたしは、違うのでしょうか', true);
      await acute.print_and_wait([
        acute.child_sex_title,
        'は、胸から溢れたその言葉を、口の中へ戻す。',
      ]);
      await acute.print_and_wait([
        'なにしろ、',
        you.child_sex_title,
        'は、隠すのが苦手だ。',
      ]);
      await acute.print_and_wait('網の空間には疎く、現実にも余地がない。');
      await acute.print_and_wait([
        '行き来する郵便、NOKの勧誘は、トレセンに届いたあと、いつも',
        acute.child_sex_title,
        'の手を経由する。',
      ]);
      await acute.print_and_wait('——最初から、ふたりの間に秘密などなかった。');
      await minoru.say_and_wait('……今からでも、間に合うわよ？');
      await acute.print_and_wait([acute.phy_sex_title, 'は、少し心配そうだ。']);
      await minoru.say_and_wait('最後に顔を合わせるなら——');
      await acute.say_and_wait('結構です');
      await acute.print_and_wait([
        acute.child_sex_title,
        'は座ったまま、きっぱり言い切る。',
      ]);
      await acute.print_and_wait([
        'ざわつく胸が、かえって',
        acute.sex,
        'に勇気を持たせる。',
      ]);
      await acute.print_and_wait([
        minoru.phy_sex_title,
        'に向き直り、いつも弱い',
        acute.child_sex_title,
        'が、ようやく本心を吐く——',
      ]);
      await acute.say_and_wait('馬鹿なら——ここにも、もうひとりいます');
      await acute.print_and_wait([
        'この瞬間、殿堂へ歩いた',
        acute.child_sex_title,
      ]);
      await acute.print_and_wait('はじめて、「勇気」を持った。');
      era.drawLine();
      minoru.name = undefined;
      acute.name = undefined;
      await acute.print_and_wait('飛ぶ鉄の鳥が、轟きを奏でる。');
      await acute.print_and_wait(
        '鉄の穹の中の人たちは、その別れの音を聞かない。',
      );
      await acute.print_and_wait([
        '空の雲を見上げ、',
        acute.get_colored_name(),
        ' は手元の封を開く。',
      ]);
      await acute.print_and_wait('中は、少し硬いピンクの厚紙。');
      await acute.print_and_wait('上には、走り書きがびっしりと並んでいる。');
      await you.say_and_wait([acute.get_colored_name(), ' 拝啓']);
      await you.say_and_wait(
        'この手紙を読んでいるころ、俺はパリ行きの飛行機に乗っているはずだ。',
      );
      await you.say_and_wait(
        '無断で離れたことを許してほしい。どんな顔で、旅立ちを伝えればいいか、分からなかった。',
      );
      await you.say_and_wait(
        'お前のトレーナーとして、長くて面白い三年を一緒に過ごした。',
      );
      await you.say_and_wait('この三年で、たくさんの思い出を作った。');
      await you.say_and_wait('弱い俺も、そのあいだ、何度もお前に助けられた。');
      await you.say_and_wait(
        '幸運もあっただろう。だが何より、お前が絶えず努力したおかげで、三年の鍛錬の末、殿堂入りできた。',
      );
      await you.say_and_wait(
        'だからこそ分かった——俺には、まだ学ぶことが多すぎる。',
      );
      await you.say_and_wait(
        'だから、フランスからの招待を受けることにした。より先を行く国外のウマ娘界で学ぶ。',
      );
      await you.say_and_wait(
        '残念だが、この三年、俺はもうお前のトレーナーではいられない。',
      );
      await you.say_and_wait(
        'だがもしよければ——三年後、お前がまだウマ娘の世界にいるなら。そのときの担当トレーナーの席を、私のために空けておいてほしい。',
      );
      await you.say_and_wait(
        '私心を許してほしい——だが、その私心があるからこそ、この三年、刻苦して励む。',
      );
      await you.say_and_wait('何があっても、お前を目標にする。');
      await you.say_and_wait(
        '本当に隣に立てるトレーナーになるために、努力する。',
      );
      await you.say_and_wait('まずはご自愛ください。');
      await you.say_and_wait(['——', you.get_colored_actual_name()]);
      era.drawLine();
      await acute.say_and_wait('……');
      await acute.say_and_wait('わたしたちは——');
      await acute.say_and_wait('——紛れもない、大馬鹿ですね');
      await acute.print_and_wait(
        '広い天の下に残るのは、ふたりの凛とした姿だけ。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_leg: (() => {
    const title = 'ワンダーアキュートの膝枕で';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        'よく休めなかったせいか、今朝はどうも眠気が取れない。',
      );
      await era.printAndWait('まずい。もうすぐ調教の時間だ。');
      await era.printAndWait([
        '一人前のトレーナーなら、',
        acute.get_colored_name(),
        ' にだらけたところは見せられない——',
      ]);
      await acute.say_and_wait([callname, '？']);
      await you.say_and_wait('——！？');
      await era.printAndWait('息を呑んだころには、もう後ろに立っていた。');
      era.printButton(`「ア、${acute.name}！？ いつ来たんだ？」`, 1);
      await era.input();
      await acute.say_and_wait([
        'ずいぶん前からですよ？ ただ、',
        callname,
        ' がとてもお疲れに見えたので、声をかけずにいたんです～',
      ]);
      await era.printAndWait([
        '穏やかな言葉の下に、気配のなさが隠れている。赤い体操服の',
        acute.teen_sex_title,
        'は、白い百合の傍の階段に腰を下ろした。',
      ]);
      await acute.say_and_wait([
        '調教まで、まだ少しあります……休みましょう、',
        callname,
      ]);
      await era.printAndWait([
        acute.sex,
        'は膝という極楽を軽く叩き、右手を振って ',
        you.get_colored_name(),
        ' を幸福の座へ誘う。',
      ]);
      await era.printAndWait([
        '……はじめ、',
        you.get_colored_name(),
        ' は断った。',
      ]);
      await era.printAndWait(
        'だが、そこは本当に幸福だった……ミントの清らかな香りまで漂っている。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、わざと',
        acute.sex,
        'の視線を外していたのかもしれない。',
      ]);
      await era.printAndWait([
        'それでも温かな掌は、もう ',
        you.get_colored_name(),
        ' の髪へ乗っていた。',
      ]);
      await era.printAndWait([
        'それから、口ずさむ歌が ',
        you.get_colored_name(),
        ' の耳元で揺れる——',
      ]);
      const buffer = [
        async () => {
          await acute.say_and_wait(
            '風がきた～雨がきた～雷さまが太鼓をかついできた～',
          );
          await acute.say_and_wait(
            'あなたトントン～わたしトントン～雷さまが腰を折った～',
          );
          await acute.say_and_wait(
            'あなたバンバン～わたしバンバン～雷さまが歯をむいた～',
          );
        },
        async () => {
          await acute.say_and_wait('おおきい～ちいさい～');
          await acute.say_and_wait('いちにさんしごろくしち～');
          await acute.say_and_wait('おおきい～ちいさい～');
          await acute.say_and_wait('ドレミファソラシ～');
        },
        async () => {
          await acute.say_and_wait(
            'はやく伝えたいな 毎日いっしょにいたいって～',
          );
          await acute.say_and_wait('十万のなぜを ふたりで調べたいって～');
          await acute.say_and_wait('はやく伝えたいな 大きな道理を～');
          await acute.say_and_wait('友だちがいちばん大切にするのは絆～');
          await acute.say_and_wait('わたしの心は あなたのところにあるの～');
        },
        async () => {
          await acute.say_and_wait(
            'お月さま～白い蓮のような雲のなかを～縫ってゆく～',
          );
          await acute.say_and_wait('夜風が運んでくる 楽しい歌声を～');
        },
      ];
      await get_random_entry(buffer)();
      await era.printAndWait('……………………');
      await era.printAndWait('上手な歌ではない。');
      await era.printAndWait('強いて言えば、歌う人は少し音を外している。');
      await era.printAndWait('それでも……膝枕の上で、そんな歌を聞いていると、');
      await era.printAndWait('心の底から安心してしまう——');
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = '月は昇らなかった';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {string} title プレイヤーの肩書き
     */
    const f = async (acute, you, title) => {
      await era.printAndWait(
        '失敗そのものは恥ではない。もう一度起き上がればいい。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、その格言を信じて疑わなかった。',
      ]);
      await era.printAndWait([
        '醜聞、傷病、過失、噂。漆黒のものが ',
        you.get_colored_name(),
        ' と ',
        acute.get_colored_name(),
        ' の空に居座っていた。',
      ]);
      await era.printAndWait([
        'それでも ',
        you.get_colored_name(),
        ' は信じていた。次のレースで勝てば、勝利の栄光が影をすべて吹き払うと。',
      ]);
      await era.printAndWait([
        'そのために夕方、',
        you.get_colored_name(),
        ' はトレセンを出て、商店街へ調教用品を買いに行った。',
      ]);
      await era.printAndWait([
        '人々は ',
        you.get_colored_name(),
        ' を認めた。',
        title,
        'トレーナーの ',
        you.get_colored_name(),
        '。嘲り、蔑み、汚い言葉が、途切れずに降る。',
      ]);
      await era.printAndWait([
        '正直、',
        you.get_colored_name(),
        ' は相手にする気もなかった。だが敵意は買い物の邪魔になった。店を出たころには、空はもう暗かった。',
      ]);
      await era.printAndWait([
        '本来なら、',
        you.get_colored_name(),
        ' は大通りを通ってトレセンへ戻れた。',
      ]);
      await era.printAndWait([
        '本来なら、',
        you.get_colored_name(),
        ' はあの路地へ入らずに済んだ。',
      ]);
      await era.printAndWait('本来なら——');
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');

      await acute.print_and_wait(
        'わたしが駆け付けたとき、路地には小刀と白い布と、血だまりだけがありました。',
      );
      await acute.print_and_wait(
        'それから、血を浴びて、片側を踏み潰されたケーキ箱。',
      );
      await acute.print_and_wait(
        'こぼれ落ちたケーキが犯人の靴底につき、白い布の傍から路地の外まで続いていました。',
      );
      await acute.print_and_wait(
        'ケーキの跡を辿って路地の外へ出ると、両手を手錠で繋がれ、パトカーへ乗せられようとしている酔っ払いがいました。',
      );
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('あの夜、商店街のネオンの下で。');
      await acute.print_and_wait([
        '月は、',
        { color: 'red', content: '昇らなかった。' },
      ]);
      era.println();
      await era.printAndWait([
        '怒れるファンの報復を受け、',
        you.get_colored_name(),
        ' は結末を迎えた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
