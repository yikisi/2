/**
 * @file アグネスデジタル - 育成
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {number|undefined} japa_dir_rank ジャパンダートダービー着順
   */
  async race_start(digital, japa_dir_rank) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '勝ちを確信した',
          digital.uma_sex_title,
          'ちゃん、張り詰めた',
          digital.uma_sex_title,
          'ちゃん、気にしてないようで本気の',
          digital.uma_sex_title,
          'ちゃん……ふ……へ……',
        ]),
      () =>
        digital.say_and_wait([
          'いやいや、いくらなんでも私みたいな',
          digital.uma_sex_title,
          'がレース場に立つのは変でしょ？',
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          'デジたんの勝負服、お腹出るやつ?! やばいやばい、隠す？ どう隠す？ 隠せる？',
        ),
      );
    }
    if (japa_dir_rank <= 3) {
      buffer.push(() =>
        digital.say_and_wait('私は選手として、相手に恥じないレースを走る。'),
      );
    }
    await get_random_entry(buffer)();
  },
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        'かわわわわ！ どの子もいちばん尊い光を放ってる！',
      );
      await era.printAndWait([
        'レース後の ',
        digital.get_colored_name(),
        ' は、大レースを走ったとは思えない元気さで、いつもの熱を見せている。',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        'ちゃんと一緒に走れた……本当に嬉しい……！',
      ]);
      await digital.say_and_wait('しかも1着！ 感謝して受け取るよ！');
      era.printButton('「君がいちばん輝いてたよ！」', 1);
      era.printButton('「次のレースも頑張ろう！」', 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          'え？ そ、そんな、こんなに',
          digital.uma_sex_title,
          'がいるのに、私は空気みたいな存在……私を見てたの？',
        ]);
        await era.printAndWait('この照れも、もう何度も見ている。');
        await you.say_and_wait('当然だ。君は俺の愛馬だ！');
        await digital.say_and_wait('ううう……');
        await digital.say_and_wait('褒められると、落ち着かないね……');
        await era.printAndWait('毎回見ても飽きない。');
      } else {
        await digital.say_and_wait(
          'よし！ 次もこの勢いで、もっと強くなる！ Power！',
        );
        await digital.say_and_wait([
          'もっと強くなって、もっと激しいレースで、もっと輝く',
          digital.uma_sex_title,
          'ちゃんを見る！',
        ]);
        await era.printAndWait('その勢いで！ 続けよう！');
        await digital.say_and_wait('え！ え！ む！');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} digital アグネスデジタル */
    const f = async (digital) => {
      await digital.say_and_wait(
        'うむうむ、なるほど、君たちの輝きは、まだ少し遠い……',
      );
      await era.printAndWait([
        '勝てなかった ',
        digital.get_colored_name(),
        ' は、レース後も大きな落ち込みを見せない……',
      ]);
      await digital.say_and_wait(
        'うっ……やっぱり、ファンとしてここにいるべきじゃなかった……',
      );
      await era.printAndWait('おいおい。');
      era.printButton(`「今回、${digital.uma_sex_title}を楽しめたか？」`, 1);
      era.printButton(
        `「次はいちばん前で${digital.couple_title}を見よう！」`,
        2,
      );
      if ((await era.input()) === 1) {
        await digital.say_and_wait('え！ そうだ！ デジ、可！');
        await era.printAndWait('どういう意味だ？');
      } else {
        await digital.say_and_wait([
          'もっと前なら、絶対……！ もっと美しい',
          digital.uma_sex_title,
          'ちゃんたちを見られる！',
        ]);
        await era.printAndWait([
          'とにかく、',
          digital.get_colored_name(),
          ' は元気を出した！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'メイクデビュー開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait([
        'んふん、聞こえる？ 私は ',
        digital.get_colored_name(),
        '。新葉が芽吹くころ、皆さまいかがですか。今、メイクデビューのパドックに立っています。周りは……',
      ]);
      await digital.say_and_wait([
        'デジ……デジ……',
        digital.uma_sex_title,
        'ちゃんの周り……というか',
        digital.uma_sex_title,
        'ちゃんの中にいる！',
      ]);
      await digital.say_and_wait([
        'もう……萌え死ぬ……',
        callname,
        '！ 見える?! 周りの',
        digital.uma_sex_title,
        'ちゃんたち！',
      ]);
      await era.printAndWait([
        '見える。周りの',
        digital.uma_sex_title,
        'には緊張で震えている子も、目を輝かせている子もいる。だがいちばん特別なのは……',
      ]);
      await era.printAndWait([
        '頬を手で支えて、危うい目でこのすべてを味わっている——',
        digital.get_colored_name(),
        '。',
      ]);
      await digital.say_and_wait([
        'ずるる、言いたいのは',
        digital.couple_title,
        'はまだどこまで行けるのか！ 尊力測定器はもう振り切れて、私、その中に混ざれている！',
      ]);
      await digital.say_and_wait('はぁ～、尊死する……デジ……灰になる……');
      await you.say_and_wait('今からレースだぞ！');
      await digital.say_and_wait('わっ！ そうだ！ 昇天してる場合じゃない！');
      await digital.say_and_wait([
        '今の私は',
        digital.uma_sex_title,
        'ちゃんと肩を並べる存在。私の存在が',
        digital.couple_title,
        'に影を落としてはいけない！',
      ]);
      await digital.say_and_wait(
        '頑張る！ エネルギー充足、チェック完了！ 尊力機能100%稼働！',
      );
      await digital.say_and_wait([
        'デジの目はフィルム。',
        digital.uma_sex_title,
        'ちゃんたちの笑みと涙を全部焼き付ける！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は覚悟を抱いて、レース場へ向かった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'メイクデビュー勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} hyac_sta ヒヤシンスステークス（着色名）
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        'メイクデビュー、',
        digital.get_colored_name(),
        ' はこのレースで見事1着を取り、それから……',
      ]);
      await era.printAndWait([
        '尊さで灰になる ',
        digital.get_colored_name(),
        ' が、いつものように愛を解放すると思っていた。だが',
        digital.sex,
        'は静かになっている。',
        digital.sex,
        'にも、こういうときがあるのか……',
      ]);
      await digital.say_and_wait('……原点であり、頂点……');
      await digital.say_and_wait(
        '初めてのゲート、掴めないタイミング、絡み合う脚……',
      );
      await digital.say_and_wait(
        '汗が飛び、焦りで真っ白な頭。でも観客の歓声が消えたあと残るのは、掲示板の結果だけ……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' が、こんなに確かな感情を描けるなんて。',
      ]);
      await digital.say_and_wait(
        'あ！ 感動した！ 何もかも涙が出る、でしょ！ でしょ！',
      );
      era.printButton(
        '「そうだな。初めてのレース、メイクデビュー、おめでとう。」',
        1,
      );
      await era.input();
      await digital.say_and_wait([
        'あああ、走っているとき、デジは他の',
        digital.uma_sex_title,
        'ちゃんの感情にめちゃくちゃにされて、デジは……',
      ]);
      await digital.say_and_wait(
        'メイクデビューを甘く見てた！ メイクデビューは、誰もが勝者なんだ！ 誰もが！',
      );
      await digital.say_and_wait(
        'こんなに豊かな感情に挟まれたら、誰だって収穫だらけでしょ？',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は本当に嬉しそうだ。レース中の脚も、レース後の感想も、',
        digital.sex,
        'のレース好きが伝わってくる。',
      ]);
      await digital.say_and_wait([
        callname,
        '、今日のレースは入門でしょ！ これからまだたくさんある！ もっと',
        digital.uma_sex_title,
        'ちゃんに会える！',
      ]);
      await you.say_and_wait([
        'そうだ。先には、まだたくさんの',
        digital.uma_sex_title,
        'が待っている。',
      ]);
      await digital.say_and_wait(
        '最高！ 楽園の敷居を跨いじゃった、うっかり跨いじゃった！ 自分の領域じゃないと思ってた！',
      );
      await digital.say_and_wait([
        '次も、こういう',
        digital.uma_sex_title,
        'ちゃんたちを見たい！',
      ]);
      await you.say_and_wait('じゃあ次は芝はどうだ？');
      await digital.say_and_wait(
        'ん？ え、今回はダートで、次は芝……ごめん、調子に乗った。嬉しすぎて頭が九霄の外まで飛んでた。',
      );
      await digital.say_and_wait(
        'もう一度ダートを走って、この空気を感じたい！',
      );
      await era.printAndWait([
        '相談の末、次のレースは新年の ',
        hyac_sta,
        ' に決めた',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_42: (() => {
    const title = 'マイルCS観戦';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      doto,
      halo,
      you,
      callname,
      call_58,
      call_61,
      mile_cha,
    ) => {
      await era.printAndWait([
        digital.get_colored_name(),
        ' はまだデビュー1年目。出たいレースがあっても、選べる幅は少ない。だが他の',
        digital.uma_sex_title,
        'たちにとっては、今がいちばん忙しい時期だ。',
      ]);
      await era.printAndWait([
        '今回 ',
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' が見に来たのは ',
        mile_cha,
        '。',
      ]);
      await era.printAndWait([
        'このレースには、',
        digital.get_colored_name(),
        ' の激推し',
        digital.uma_sex_title,
        'のひとり——',
        halo.get_colored_name(),
        ' も出走する。',
      ]);
      await digital.say_and_wait([callname, '！こっちこっち！']);
      await era.printAndWait([
        'いい場所を取った ',
        digital.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' に手を振る。',
        you.get_colored_name(),
        ' はなんとか割り込んだ。',
      ]);
      await digital.say_and_wait(['もうすぐ始まるよ！ ', call_61, ' だよ！']);
      await era.printAndWait('それから……');
      await you.say_as_passer_by_and_wait('実況', [
        '続いて ',
        halo.get_colored_name(),
        '！ 外から追い上げ、',
        halo.get_colored_name(),
        ' は2着！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '続いて ',
        halo.get_colored_name(),
        '！ 外から追い上げ、',
        halo.get_colored_name(),
        ' は2着！',
      ]);
      await era.printAndWait([
        '2着か。最近の ',
        halo.get_colored_name(),
        ' の成績からすれば、かなりいい。',
      ]);
      await halo.say_and_wait(
        '全国各地の私のファンの皆さま、勝利は逃してしまいましたが……',
      );
      await halo.say_and_wait(
        'このKing、必ず縛りを打ち破ります。これからも短距離・マイルの道を歩き続けます。それがKingの新しい路線ですわよ！ お！ ほほほ！',
      );
      await digital.say_and_wait(
        'うおおおお……本当に、万分の感動！ 新しい路線を選ぶなんて、どれだけの勇気、どれだけの覚悟がいるか！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は感動で泣きじゃくり、',
        you.get_colored_name(),
        ' に ',
        halo.get_colored_name(),
        ' の経歴を話す。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' はもともと自分の才能を証明したくて、クラシック競走にこだわっていた',
        digital.uma_sex_title,
        'だった。だが今年',
        digital.sex,
        'は路線を変え、目標を立て直した。',
      ]);
      await digital.say_and_wait(
        'どっちの路線だって、自分の強さを証明できるんだよ！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' のデビュー後、',
        digital.get_colored_name(),
        ' の見方も前とは大きく違って、選手の立場からレース場の内と外を味わえるようになった。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' の努力が報われるのを期待していたからこそ、',
        digital.get_colored_name(),
        ' は現地観戦に来て、',
        halo.get_colored_name(),
        ' が苦節を実らせたとき、',
        digital.sex,
        'は会場の誰より大きな声で泣いた。',
      ]);
      era.drawLine({ content: '帰り道' });
      await era.printAndWait([
        '学園のそばの小川沿いで、川辺のダートをうつむいて走っている',
        digital.uma_sex_title,
        'を見つけた。',
      ]);
      await digital.say_and_wait(['おおお！ ', call_58, ' だ……']);
      await era.printAndWait([
        doto.get_colored_name(),
        ' は少し落ち込んでいるようで、それでもここで走っている……',
      ]);
      await era.printAndWait([
        'うん……',
        doto.get_colored_name(),
        ' は、もともとこういう子だったっけ？',
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        ' は最近成績が振るわない。トレーナーの ',
        you.get_colored_name(),
        ' はよくわかっている。',
        doto.sex,
        'はまだ本格化の時期ではない。だが',
        doto.sex,
        '自身は、それに気づいていないようだ。',
      ]);
      await digital.say_and_wait(
        '本格化……自分で知らないと、やっぱり苦しいよね……',
      );
      await digital.say_and_wait([
        '前の私なら、',
        call_58,
        ' の努力しか見えなかったと思う。でも今の私は……',
      ]);
      await digital.say_and_wait('少なくとも、これを知ってると安心できるよ……');
      await you.say_and_wait(['どうした、声をかけてやらないのか？']);
      await digital.say_and_wait(
        'え？ おいおいおい……私は一介のファンだよ？ ファンがアイドルに意見なんてできないよ！ マネージャーに追い出される！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は助けたいのに、出過ぎなんじゃないかとためらっている。',
      ]);
      await digital.say_and_wait(
        '現実的に言うと、経営がうまくいってないラーメン屋を見て、店主に「まだ時期じゃないですよ」って慰めるようなもんでしょ?!',
      );
      await you.say_and_wait(
        'いやいや、これは根拠がある話だ……それにデジ、まだ自分をファンだと思ってるのか？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' に言い聞かせる。もうファンだけじゃない。選手としてレース場に立っている。',
      ]);
      await digital.say_and_wait([
        'あ、うん、まあ……デビューはしたけど、',
        call_58,
        ' との溝は越えられないよ……',
      ]);
      await you.say_and_wait([
        '君と',
        digital.sex,
        '、',
        digital.couple_title,
        'との差は、思っているより小さいぞ！',
      ]);
      await you.say_and_wait(
        '毎日観察してるからこそ、ドトウが抱えてる問題が見える。でもそのせいで、自分を部外者にして、仲間じゃないと思ってるんだ。',
      );
      await era.printAndWait([digital.get_colored_name(), ' はうつむいた。']);
      await digital.say_and_wait(
        'うう……そうなんだけど、今すぐ推しに話しかけるのは、まだちょっと……',
      );
      await digital.say_and_wait(
        'なんだか、とんでもないことを考えてる気がする……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、それでも ',
        doto.get_colored_name(),
        ' を助けたいと決めた。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は土手の柵を飛び越え、斜面を滑ってドトウの前に現れた。この登場の仕方、すごいな。',
      ]);
      await digital.say_and_wait([
        'あ、あ、あ、あの！ ',
        call_58,
        '！ ちょっと話してもいい？',
      ]);
      await doto.say_and_wait('ええええ、な、なに？');
      await digital.say_and_wait('本格化、知ってる?!');
      await doto.say_and_wait('えええ？ それって何？');
      await digital.say_and_wait('いわゆる本格化っていうのは……');
      await era.printAndWait('岸から見ていれば、大丈夫だろう。');
      await digital.say_and_wait('それから本格化の時期は、だいたい……');
      await era.printAndWait('うん、かなり詳しいな。');
      await digital.say_and_wait(
        'そうそう、この本格化の時期に鍛えたいなら、足元に注意して……',
      );
      await era.printAndWait(
        'おお、トレーナー資格試験でもあまり触れない内容だ。',
      );
      await digital.say_and_wait(
        '……本格化の前の期間、鍛えても無駄ってわけじゃない。',
      );
      await digital.say_and_wait(
        'このときに太ももをしっかり鍛えておけば、本格化のあいだに一気にぐんと伸びるよ！',
      );
      await era.printAndWait([
        'いや、これは最近の研究まで踏み込んでる。',
        you.get_colored_name(),
        ' の記憶では、この内容はつい先日『トレーナー月刊』に載った研究だ……',
      ]);
      era.drawLine({ content: 'トレーニング室に戻ると' });
      await digital.say_and_wait([
        'わわわわ！ やらかした！ 現実で、目の中に結像した ',
        call_58,
        '……つい……',
      ]);
      await era.printAndWait([
        '実際、',
        doto.get_colored_name(),
        ' は後半よくわかっていなかったようだが、岸からでもわかる。',
        digital.sex,
        'は元気を取り戻していた。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' も、わかっているはずだ。',
      ]);
      await you.say_and_wait([
        'でも、ドトウ',
        digital.sex,
        'は収穫が大きかったんじゃないか？',
      ]);
      await era.printAndWait([
        '……',
        digital.get_colored_name(),
        ' は胸を押さえるだけだった。',
      ]);
      await era.printAndWait([
        '初めて推しのアイドルと、ああやって話したのだ。',
        digital.get_colored_name(),
        ' のプレッシャーは相当だったろう。',
      ]);
      await era.printAndWait([
        '……それにしても ',
        digital.get_colored_name(),
        ' の機関銃みたいな早口、',
        digital.sex,
        '実はかなりヤバい子なんじゃないか？',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} daiwa ダイワスカーレット
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, teio, daiwa, doto, you, callname) => {
      await era.printAndWait([
        '新しい年。',
        digital.get_colored_name(),
        ' は、',
        digital.uma_sex_title,
        'にとって極めて大事なクラシック級を迎えた。',
      ]);
      await era.printAndWait([
        'もっとも',
        digital.sex,
        'は、クラシック級の',
        digital.uma_sex_title,
        'に身をもって近づけること自体に、まだ興奮しているようだ。',
      ]);
      await digital.say_and_wait(['あけましておめでとう！ ', callname, '！']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は手短に ',
        you.get_colored_name(),
        ' へ新年の挨拶をした。',
      ]);
      await era.printAndWait('朝早くからトレーニング室に来るとは、勤勉だな。');
      await digital.say_and_wait(
        '年末はどうだった？ コミケでいい本、何冊か買えた？',
      );
      await you.say_and_wait('え？ コミケ？ 本？');
      await digital.say_and_wait(
        'あ……うん、なければ今の話は忘れて。デジの独り言だから。',
      );
      await digital.say_and_wait(
        'でも！ 今年のレースは！ 語り甲斐がある！ クラシック級のレースは星のように多いんだから！',
      );
      await era.printAndWait([
        'たしかに、',
        digital.get_colored_name(),
        ' はクラシック級に出られるようになった。去年より選択肢は一気に増える。G1の大半は、クラシック級にならないと出られない。',
      ]);
      await digital.say_and_wait([
        'あ、急に去年のことを思い出した。私、調子に乗りすぎて初心を忘れかけてた。合格な',
        digital.uma_sex_title,
        'ファンになるって言ったのに?!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、前回',
        digital.sex,
        'が ',
        doto.get_colored_name(),
        ' と話したことが、まだ引っかかっているようだ……',
      ]);
      era.println();
      await digital.say_and_wait(
        'だから！ 今年は、もう一度原点に戻る！ もう一度ファンになる！ それを原則に！',
      );
      await era.printAndWait([
        'ただ今のところ、どうしようもない。',
        digital.get_colored_name(),
        ' がそれに気づくには、まだ……',
      ]);
      await digital.say_and_wait([
        callname,
        '！ アドバイスくれる？ どう応援すればいい？',
      ]);
      era.print([you.get_colored_name(), ' の選択は：']);
      era.printButton(`ウマ娘ちゃんに奉仕（スピード+10）`, 1);
      era.printButton('読書（スタミナ+10）', 2);
      era.printButton('真似から学ぶ（スキルPt+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait([
            'いつものように、',
            digital.uma_sex_title,
            'ちゃんに奉仕するのはどうだ？',
          ]);
          await digital.say_and_wait([
            'おおお！ いい助言だ。そういえば最近、レースでも交流でも、ずっと',
            digital.uma_sex_title,
            'ちゃんに失礼してたかも……',
          ]);
          await digital.say_and_wait(
            'だから！ まさに原点回帰のとき！ 聖地を一回浄化しないと！',
          );
          await era.printAndWait('浄化?!');
          await era.printAndWait('レース場を手入れしただけだった。よかった。');
          await era.printAndWait([
            '手入れのあと、ちょうど ',
            daiwa.get_colored_name(),
            ' が最初に芝へ到着した。',
            daiwa.get_colored_name(),
            ' が芝を気持ちよく走るのを見て、',
            digital.get_colored_name(),
            ' もやる気でいっぱいになった。',
          ]);
          break;
        case 2:
          await you.say_and_wait(
            'それなら、買ったって本を読んでみたらどうだ？',
          );
          await digital.say_and_wait(
            'え！ それは……どれも短いし、もう一度振り返ってもいいね！',
          );
          await digital.say_and_wait([
            'いろんな',
            digital.uma_sex_title,
            'ちゃんのエネルギーを摂取して、新しい年も走り続けられるように！',
          ]);
          await era.printAndWait([
            'こうして ',
            digital.get_colored_name(),
            ' は今日、寮に戻って本を読んだ。次に会ったとき、浸りきった顔の ',
            digital.get_colored_name(),
            ' を見て、',
            you.get_colored_name(),
            ' は',
            digital.sex,
            'がよく休めたとわかった。',
          ]);
          break;
        case 3:
          await you.say_and_wait([
            '他の',
            digital.uma_sex_title,
            'を真似て、そこからスキルを学ぶのはどうだ？',
          ]);
          await digital.say_and_wait(
            'たしかに！ 推したちを真似てスキルを学ぶ！ まさに吾輩の使命！',
          );
          await digital.say_and_wait('おおお！ お？');
          await era.printAndWait([
            'トレーニング場のスタンドに行き、以前台上から観察した',
            digital.uma_sex_title,
            'のスキルを思い出す……',
          ]);
          await digital.say_and_wait('次はこちら！ 帝王ステップ！');
          await era.printAndWait(
            'おおお、あの有名な帝王ステップだ！ 大きく腿を上げて歩幅を伸ばすスキル！',
          );
          await era.printAndWait('おおお、ご本人も来たみたいだ。');
          await era.printAndWait([teio.get_colored_name(), '？ いつ来た？']);
          await digital.say_and_wait('うわわわ！ わざと失礼したんじゃないよ！');
          await era.printAndWait([digital.get_colored_name(), '！ しおれた！']);
          await era.printAndWait([
            'そのあと ',
            digital.get_colored_name(),
            ' は、ちゃんと ',
            teio.get_colored_name(),
            ' からコツを教わった。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_hyac_sta: (() => {
    const title = 'ヒヤシンスS開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} nikk_hai 日経新春杯（着色名）
     */
    const f = async (digital, doto, you, callname, nikk_hai) => {
      await era.printAndWait([
        '少し前、',
        nikk_hai,
        ' で ',
        doto.get_colored_name(),
        ' が2着を取った。',
      ]);
      await era.printAndWait([
        '地下通路で ',
        doto.get_colored_name(),
        ' を祝おうとしていた ',
        digital.get_colored_name(),
        '。出過ぎたことをまだ気にしていたのに、思いがけず ',
        doto.get_colored_name(),
        ' から感謝された。',
      ]);
      await era.printAndWait([
        '普通のファンならしない決断だったのに、それが実を結び始めている。',
        digital.get_colored_name(),
        ' には、だんだん理解できなくなってきた。',
      ]);
      await era.printAndWait(
        '問題を解く手段はレースだ。今日の一戦は、前から決まっていたレース。',
      );
      await era.printAndWait('OP戦で、G3ですらない小さなレース。');
      await era.printAndWait([
        'パドックで、',
        digital.get_colored_name(),
        ' は他の',
        digital.uma_sex_title,
        'をじっと見つめている。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' の両手は爪のように空を舞い、瞳は「おいしい」で満ちている……',
      ]);
      era.printButton('「デジ、飛びかかっちゃだめだぞ。」', 1);
      await era.input();
      await digital.say_and_wait('いや、そもそも前も飛びかかってないでしょ。');
      await digital.say_and_wait([
        'そういえば、',
        callname,
        '、なんだか変だね。',
      ]);
      await digital.say_and_wait(
        '雰囲気はすごく険しいのに、中にある尊味は変わってない……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は気づいた。どの',
        digital.uma_sex_title,
        'の顔にも臨戦態勢が書いてある。その感情に ',
        digital.get_colored_name(),
        ' は抗えない。だが空気が、いつものように口に出すことを許さない。',
      ]);
      await digital.say_and_wait([
        'この中には、もっと純粋なものがある。',
        digital.uma_sex_title,
        'がなぜ尊いのか……',
      ]);
      await you.say_and_wait('それに、触れたいのか？');
      await digital.say_and_wait('え！ それは失礼すぎる！');
      await digital.say_and_wait(
        'でも、前より近い位置で、できるだけ観察したい……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は相変わらず自分を観客だと思っている。だが',
        digital.sex,
        'の目は、以前とは少し違っていた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hyac_sta_win: (() => {
    const title = 'ヒヤシンスS勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} diamond_lord ダイヤモナーク（アグネスデジタル口上NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     */
    const f = async (digital, diamond_lord, you, callname, nhk_cup) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' はやはりきれいにゴールした。余裕、と言っていいのか……',
      ]);
      await digital.say_and_wait('ふ……は……デジ、やった……');
      await digital.say_and_wait([
        'ゴールを駆け抜けて、それから、見届けた。',
        digital.uma_sex_title,
        'ちゃんたちの輝きを！',
      ]);
      await digital.say_and_wait([
        'やっぱり少し意外だったかも！ ',
        digital.uma_sex_title,
        'ちゃんたちの走る覚悟が尊いと思ってたけど……',
      ]);
      await digital.say_and_wait([
        'でもきっと、',
        digital.uma_sex_title,
        'ちゃんたちがレースに託す願いのほうが深い……私が走り続ければ、',
        digital.couple_title,
        'がまぶしい理由が絶対わかる！',
      ]);
      await digital.say_and_wait('このまま、邪魔しない主義で推し続けよう！');
      await you.say_as_passer_by_and_wait('？？？', 'ううう……う……');
      await you.say_as_passer_by_and_wait('？？？', 'うああああああ！');
      await digital.print_and_wait([
        '少し離れたところから、ある',
        digital.uma_sex_title,
        'の号泣が聞こえた。',
      ]);
      await digital.say_and_wait([
        'あの',
        digital.uma_sex_title,
        '、さっきの……',
      ]);
      await digital.print_and_wait([
        '記憶が正しければ、',
        digital.sex,
        'はちょうど6着。掲示板の外だ。',
      ]);
      await you.say_as_passer_by_and_wait(
        '？？？',
        '掲示板……掲示板にも乗れなくて……重賞なんて、どうして……！',
      );
      await digital.print_and_wait([
        'ずっと',
        digital.uma_sex_title,
        'を見てきた ',
        digital.get_colored_name(),
        ' が、今はもう見つめられない。視線を外して、背を向けた。',
      ]);
      await digital.print_and_wait([
        '地下通路を通るあいだ、',
        digital.get_colored_name(),
        ' は他の',
        digital.uma_sex_title,
        'を避け続けた。いつもの距離ではなく、見ないように、わざと避けている。',
      ]);
      await digital.say_and_wait('……');
      await digital.print_and_wait([
        'それでも前に、2人の',
        digital.uma_sex_title,
        'がいた。さっきの2着と3着だ。',
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' は避けようとして、それから……',
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title}A`;
      await diamond_lord.say_and_wait('ううう……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'ちがうちがう、2着だよ？ 何泣いてるの？',
      );
      await diamond_lord.say_and_wait(
        'だって、だって、先輩との勝負だったのに……ずっと、先輩と勝負して、それから、追い越したくて……',
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '届いたじゃない。あんた、本当に強いよ。私もそろそろ枯れかけてるしね～',
      );
      await diamond_lord.say_and_wait([
        '……ずっと……先輩に勝てれば……私は……でも、',
        digital.sex,
        'は本当に、強い……手を伸ばしても届かなくて……',
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        diamond_lord.get_colored_name(),
        '！ 頑張ったでしょ！ 全力だったでしょ！',
      ]);
      await diamond_lord.say_and_wait('でも……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '私たちがどんな成績でも、トゥインクルシリーズは続いていく。待ってくれないんだから！',
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        'あんたは私より強い。それに、まだ伸びる。これから重賞に挑むでしょ！ G1に挑むでしょ！',
        digital.couple_title,
        'を見返してやりなよ！',
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'ウイニングライブ、一緒に行けるよね？',
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        'Bは手を上げて、仲間の涙を拭った。',
      ]);
      await diamond_lord.say_and_wait('！');
      await digital.print_and_wait([
        digital.sex,
        'は流れた鼻水を強くすすって、力いっぱい頷いた。',
      ]);
      await digital.print_and_wait([
        digital.couple_title,
        'が手をつないで遠ざかるのを見て、',
        digital.get_colored_name(),
        ' は今度ばかり、「尊い」なんて言葉が出なかった。',
      ]);
      era.drawLine();
      await digital.say_and_wait('……');
      await you.say_and_wait('デジ、大丈夫か？');
      await digital.say_and_wait('嘘だ……不干渉だなんて……');
      await digital.say_and_wait('そんなの、無理だよ。');
      await digital.say_and_wait(
        '出たら、必ず勝者がいて、必ず敗者がいる……負けても尊い、全員が勝者だなんて、よく言えたものだ……',
      );
      era.printButton(
        '「レース場に上がって築いた繋がりが、君たちをこんなに尊くする。ずっと知ってたことだろ？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' は今回のレースで、',
        digital.uma_sex_title,
        'がなぜ尊く、なぜ偉大なのか、その一端を覗けたようだ。',
      ]);
      await era.printAndWait([
        'だが',
        digital.sex,
        'は突然悟った。相手として走りながら、自分を観客だと思い、無情に1着を奪っていたことを。',
      ]);
      await era.printAndWait('それは、かなり失礼だ。');
      await era.printAndWait([
        'だから ',
        digital.get_colored_name(),
        ' は、ウイニングライブのあと、トレーニング室に戻ると……',
      ]);
      await digital.say_and_wait([
        callname,
        '、この先の話がしたい。私らしくないことを言うけど、いい？',
      ]);
      await you.say_and_wait('もちろん。');
      await digital.say_and_wait('どうしても、G1に出たい。');
      await digital.say_and_wait(
        'ここにいるみんなに対して、熱い鉄板の上で土下座しても足りない失礼をした気がする',
      );
      await digital.say_and_wait(
        'なら、やらなきゃ。出て、G1を勝って、それからみんなに、デジは強いって思わせる。',
      );
      await era.printAndWait([
        '証明したい。',
        digital.sex,
        'が本当に強いことを。',
        digital.sex,
        'に負けたすべての',
        digital.uma_sex_title,
        'へのけじめとして。',
      ]);
      await digital.say_and_wait([
        'それから、確かめたい。',
        digital.uma_sex_title,
        'ちゃんたちが、G1にどう向き合ってるのか！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は、次のレースを5月前半の ',
        nhk_cup,
        ' に決めた。',
      ]);
      await digital.say_and_wait([
        '私は、出走する。それから——',
        digital.couple_title,
        'の分も一緒に！',
      ]);
      await era.printAndWait([
        '偶然の出来事。だが結果は偶然じゃない。勝ちと負け、そこに込められた悲しみが——',
        digital.get_colored_name(),
        ' の未来を押し出した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_nhk_cup: (() => {
    const title = 'NHKマイルカップ開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait('おおおおおおお！ やっぱり、違う！');
      await era.printAndWait('G1のレース場。観客10万人を超える一戦……');
      await era.printAndWait(
        '何度も見てきたのに、パドックに立つ感覚はまだ新しい。',
      );
      await era.printAndWait(
        '10万人の空気は十分に衝撃だが、本当の主役は、選手の……',
      );
      await digital.say_and_wait(
        'なななななんだこれは！ この気配、領域みたいな圧！',
      );
      await digital.say_and_wait('やばい！ サイコー！ 尊高って言っていい！');
      await you.say_and_wait('興奮してるな！ なら調子はいいぞ！');
      await digital.say_and_wait('もう、もう何も考えられない、脳が、もう……');
      await digital.say_and_wait(
        '美しい、怖い、解像度が4Kまで来てる。今は立ってるのもちょっとキツい……',
      );
      await digital.say_and_wait([
        'でも、わからなきゃ。',
        digital.uma_sex_title,
        'ちゃんの尊さの奥義を！',
      ]);
      await digital.say_and_wait('たとえ……尊さで灰になっても……は?!');
      await era.printAndWait([
        'どうした、',
        digital.get_colored_name(),
        ' は話している途中で、いきなり身震いした。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はあたりを見回して、それから……',
      ]);
      await digital.say_and_wait('誰かに見られてる気がする？');
      await era.printAndWait([
        '選手のほうは、',
        you.get_colored_name(),
        ' にはよく見える。',
        digital.get_colored_name(),
        ' を見つめている者はいない。観客席からだ。',
      ]);
      await digital.say_and_wait(
        'そうか、私まで、推しの中で、推される夢を見てるのか……',
      );
      await digital.say_and_wait('これ以上、軽薄じゃいられない！');
      await era.printAndWait([
        'これほど大きなレースなら、',
        digital.get_colored_name(),
        ' も',
        digital.sex,
        'の素質を引き出せるだろう。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  nhk_cup_win: (() => {
    const title = 'NHKマイルカップ勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} callname_15 テイエムオペラオーのプレイヤーへの呼び方
     * @param {PrintedSpan} o_call_di テイエムオペラオーのアグネスデジタルへの呼び方
     * @param {PrintedSpan} o_call_do テイエムオペラオーのメイショウドトウへの呼び方
     * @param {PrintedSpan} do_call_di メイショウドトウのアグネスデジタルへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      call_15,
      call_58,
      callname_15,
      o_call_di,
      o_call_do,
      do_call_di,
      takz_kin,
      japa_dir,
    ) => {
      await you.say_as_passer_by_and_wait('実況', [
        digital.get_colored_name(),
        '！ ',
        digital.get_colored_name(),
        '！ 芝でもダートでも、',
        digital.sex,
        'の話の下にはないことを見せつけた！',
      ]);
      await era.printAndWait([
        'ゴールを駆け抜けた ',
        digital.get_colored_name(),
        ' は、足元までふらついている。',
      ]);
      await digital.say_and_wait(
        'は……ふ……よし……残りエネルギーゼロ……推しの余裕もない……使った、全力……！',
      );
      await digital.say_and_wait('あああ、陽射し……まぶしい……空……遠い……');
      await digital.say_and_wait('あ……これが……');
      await era.printAndWait('（どん！）');
      await era.printAndWait([digital.get_colored_name(), ' が倒れた！']);
      era.drawLine();
      await era.printAndWait([
        '幸い、駆け付けた医師の判断では、',
        digital.get_colored_name(),
        ' は運動のしすぎだ。休めば大丈夫。',
      ]);
      await era.printAndWait([
        '今回、',
        digital.get_colored_name(),
        ' は本当に全力を出した。これまでと違い、今回の ',
        digital.get_colored_name(),
        ' は、選手としての信念を背負っていた。',
      ]);
      await era.printAndWait([
        'だから、力を使い切ったあと、',
        digital.get_colored_name(),
        ' は興奮しすぎて倒れた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' を背負って休憩室へ戻った。それから……見覚えのある2人を見つけた。',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        '。',
      ]);
      await opera.say_and_wait([o_call_di, '？ しっかりしたまえ！']);
      await you.say_and_wait(['大丈夫、', digital.sex, 'は休めば治る。']);
      await era.printAndWait([
        '話しながら、',
        digital.get_colored_name(),
        ' を休憩室のソファに寝かせた。',
      ]);
      await era.printAndWait([
        'ほどなく、',
        digital.get_colored_name(),
        ' は目を開けた。',
      ]);
      await digital.say_and_wait('ん……ん……え?!');
      await digital.say_and_wait([call_15, ' と ', call_58, '?! どうして？']);
      await you.say_and_wait([
        digital.couple_title,
        'が心配して、休憩室まで見に来た……というより、最初から休憩室にいた。',
      ]);
      await digital.say_and_wait('急すぎない？');
      await opera.say_and_wait([
        '急ではない！ ',
        o_call_do,
        ' が、あらゆる舞台を舞い回る踊り手がいると聞いてな。新しい役者の誕生を鑑賞するため、私が来たのだ。',
      ]);
      await doto.say_and_wait([
        'ううう、',
        do_call_di,
        ' の助言、本当に感謝してる！ だから、このレースも応援しに来たの！',
      ]);
      await opera.say_and_wait(
        '試合前から覇王の気配を隠し、通りすがりの観客を装って研究していたのだ！',
      );
      await doto.say_and_wait(
        '私みたいなのがパドックで話しかけたら、影響しちゃうと思って……だから……',
      );
      await digital.say_and_wait(
        'いやいやいいや！ 影響なんてないよ、むしろ光栄……最初の違和感はこれだったのか。',
      );
      await digital.say_and_wait([
        'それから、だんだんわかってきた。',
        call_15,
        ' と ',
        call_58,
        '、なんでこんなにまぶしく華やかなのか……',
      ]);
      await digital.say_and_wait('やっと……少し……近づけた……');
      await opera.say_and_wait(
        'ははは！ そうか？ だがやはり、私の華麗は生まれつきだからな！',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' をかなり気に入っている。一方 ',
        doto.get_colored_name(),
        ' は、',
        digital.get_colored_name(),
        ' の励ましに感謝している。',
      ]);
      await you.say_and_wait(
        'ここに来たのは、他にも言いたいことがあったんだろ？',
      );
      await era.printAndWait([
        'それから、',
        digital.couple_title,
        'は宣言した……',
      ]);
      await opera.say_and_wait([
        '私と ',
        o_call_do,
        ' は、次の ',
        takz_kin,
        ' で初の共演だ！',
      ]);
      await doto.say_and_wait(
        'わ、私もやっとG1に出られる。隅っこの、誰も気にしない場所だけど……',
      );
      await digital.say_and_wait(
        '！ 初めてのレヴュー、わかった！ これは見に行かないと！',
      );
      await opera.say_and_wait(
        'だが、君にも相応の演目があるだろう？ その全能の才能を見せてみせろ！',
      );
      await opera.say_and_wait(
        '君はまだダートG1を勝っていない。それがなければ、まだ不完全だ、そうだろう？',
      );
      await you.say_and_wait([
        '次に合いそうなダートG1は、夏合宿中の ',
        japa_dir,
        ' だ。',
      ]);
      await opera.say_and_wait([
        'さすがは ',
        callname_15,
        '！ では、',
        digital.get_colored_name(),
        '、我らの招待を受けるか？',
      ]);
      await digital.say_and_wait('受ける！');
      await era.printAndWait([
        'こうして',
        digital.couple_title,
        'は約束した。',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' は ',
        takz_kin,
        ' でいちばん盛大なレースを届け、',
        digital.get_colored_name(),
        ' は ',
        japa_dir,
        ' で、全能選手としての腕を見せる。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_24: (() => {
    const title = '宝塚記念';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, japa_dir) => {
      await era.printAndWait([
        'この日は、',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の初対決だ。',
      ]);
      await digital.say_and_wait(
        'ああ、避けられない一日、やっぱり来た！ 脳が、もう止まらない！',
      );
      await digital.say_and_wait(
        '夢でも見ていたレース！ 違う、夢のレースなんて、現実のレースには到底及ばない！',
      );
      await digital.say_and_wait('どうする、全身にサイリウム挿して応援する?!');
      era.printButton('「いやいや、警備に追い出されるぞ。」', 1);
      await era.input();
      await era.printAndWait([
        'こうして阪神競馬場へ来た。',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の激闘だ……',
      ]);
      await era.printAndWait(
        'こうして阪神競馬場へ来た。テイエムオペラオーとメイショウドトウの激闘だ…',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' の実力は ',
        you.get_colored_name(),
        ' にはよくわかる。だが ',
        doto.get_colored_name(),
        ' もここまで来ていたとは……',
      ]);
      await era.printAndWait([
        '最後は並んでゴール。',
        opera.get_colored_name(),
        ' がわずかに ',
        doto.get_colored_name(),
        ' を上回った。',
      ]);
      await era.printAndWait(
        '何が理由だ。本格化だけでは、この心境の変化はまだ説明できない……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' が',
        digital.sex,
        'をこう変えたのか……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はすごい、と言うべきか……ちらりと ',
        digital.get_colored_name(),
        ' を見る。え、',
        digital.sex,
        'はやっぱり夢中で頭を振っている。',
      ]);
      await digital.say_and_wait('えわわわわ……', true);
      await digital.say_and_wait('うむ……', true);
      await digital.say_and_wait('さっき、あれは何……あの輝き？', true);
      await digital.say_and_wait(
        '私はもう……さっき、尊いという考えから離れてた……',
        true,
      );
      await digital.say_and_wait(
        [
          call_15,
          ' と ',
          call_58,
          ' だから……',
          digital.couple_title,
          'が特別だから？',
        ],
        true,
      );
      await era.printAndWait([
        'こうして、',
        digital.get_colored_name(),
        ' はまだ本意を理解しきれないまま、バトンは ',
        digital.get_colored_name(),
        ' に渡された。次は ',
        digital.get_colored_name(),
        ' の ',
        japa_dir,
        ' の舞台だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = 'ジャパンダートダービー開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (digital, you, japa_dir) => {
      await digital.say_and_wait(
        [
          'まだ気づいてない。',
          digital.uma_sex_title,
          'ちゃんたちの尊エネルギーの根源。あれはきっと、この上なく貴重なもの……',
        ],
        true,
      );
      await digital.say_and_wait(
        '大井……夜……ダート……めったに来ない異郷のコース、この特別なレース場に、私が探してる秘密があるかも……',
        true,
      );
      era.drawLine();
      await digital.say_and_wait([
        '『',
        japa_dir,
        '』、なんだかこのレースの空気は独特だね。',
      ]);
      await you.say_and_wait(
        'JpnIのレース……この手のレースには、どうしても偏見がつきまとう。',
      );
      await digital.say_and_wait(
        'それでも、このレースが運んでくる熱さは、夏の太陽みたい……',
      );
      await digital.say_and_wait(
        'コースも景色も、芝もダートも違う。それでもいい……',
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        'ちゃんの気持ちは、同じでしょ？',
      ]);
      await era.printAndWait(
        'そうだ。G1でもG3でも、重賞でもオープンでも、芝でもダートでも、中央でも地方でも……',
      );
      await you.say_and_wait('同じだ。');
      await you.say_and_wait(
        'このレースが終われば、君はあらゆるタイプのレースを経験する。なぜ同じか、きっとわかる。',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、もうわかっているのかもしれない。',
        digital.sex,
        'に必要なのは証明だ。このレースで。',
      ]);
      await digital.say_and_wait([
        '今！ 大井のダート',
        digital.uma_sex_title,
        'ちゃんと一緒に、答えを見つける！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = 'ジャパンダートダービー勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      japa_dir,
    ) => {
      await digital.say_and_wait(
        'このレースは、前の芝のレースと違うようで同じ。',
        true,
      );
      await digital.say_and_wait('うおおおおおおお！！！！', true);
      await digital.say_and_wait(
        '舞い上がる砂塵……見えない……でも輝きが……透けてくる……',
        true,
      );
      await digital.say_and_wait(
        [
          'まったく違うコースでも……',
          digital.couple_title,
          'は、変わらない輝きを持ってる……',
        ],
        true,
      );
      await digital.say_and_wait(
        [
          'ここで、',
          digital.couple_title,
          'の心を裏切るわけにはいかない！！！！',
        ],
        true,
      );
      await digital.say_and_wait('はあああああああ！', true);
      era.drawLine();
      await era.printAndWait([
        '完走した。',
        digital.get_colored_name(),
        ' は本当に見事だ。環境がまったく違うコースでも、これだけの成績を残した。',
      ]);
      await you.say_and_wait('どんな感じだった？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、以前とはまったく違う、真剣な顔をしている。',
      ]);
      await digital.say_and_wait([
        'デジ、',
        digital.get_colored_name(),
        '、わかった。',
      ]);
      await you.say_and_wait('うん。');
      await digital.say_and_wait([
        '子どものころから、ずっと私を夢中にさせてきた',
        digital.uma_sex_title,
        'ちゃんの尊さ……',
      ]);
      await digital.say_and_wait([
        'わかった。今日『',
        japa_dir,
        '』を走り終えて、わかった。',
      ]);
      await digital.say_and_wait([digital.uma_sex_title, 'ちゃん、かわいい。']);
      await digital.say_and_wait([digital.uma_sex_title, 'ちゃん、尊い。']);
      await digital.say_and_wait([
        'じゃあ、',
        digital.couple_title,
        'はなぜかわいい？ ',
        digital.couple_title,
        'のどこが偉大で、どうしようもなく私を惹きつける？',
      ]);
      await digital.say_and_wait([
        '今日やっとわかった。私が好きなのは、',
        digital.couple_title,
        'が『身を捨てて自分の夢にぶつかる』姿なんだ！',
      ]);
      await era.printAndWait([
        'どんどんどんと足を踏み鳴らして、',
        digital.get_colored_name(),
        ' は',
        digital.sex,
        'がやっとわかった喜びを表す。',
      ]);
      await digital.say_and_wait(
        'わかったら、タイムスリップして、『中央の芝G1だけが特別』だと思ってた過去の自分を殴りたくなった！',
      );
      await you.say_and_wait('はは、定番の感想だな。');
      await digital.say_and_wait([
        'おいおいおい、最初から知ってたんでしょ。',
        digital.uma_sex_title,
        'ちゃんたちは、ずっと同じなんだよ。',
      ]);
      await digital.say_and_wait([
        digital.couple_title,
        'には本当に欲しいもの、なりたい自分がいて、それを目指して必死に努力してる。',
      ]);
      await era.printAndWait(
        'そういう人は、どこに置いてもまぶしい。まして一緒に走ったら？',
      );
      await digital.say_and_wait([
        digital.couple_title,
        'は全力でつながり、助け合う……時には同じ勝利を争う。でも争いを恐れず、ずっと前を見てる。',
      ]);
      await digital.say_and_wait('全部が落ち着いたら、一緒にべったり！');
      await you.say_and_wait('まあ、また定番展開だな。');
      await digital.say_and_wait(
        'この定番展開だからこそ、私の魂がこんなに揺れるんだよ！',
      );
      await digital.say_and_wait(
        'デビュー前はずっと思い上がってた……でも結局、今日になってやっと……',
      );
      await digital.say_and_wait('あわわわ、本当に……');
      await digital.say_and_wait([
        call_15,
        ' と ',
        call_58,
        ' のあのレースも、今振り返ると、やっとわかる。',
      ]);
      await era.printAndWait([
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の宝塚での輝きに、',
        digital.get_colored_name(),
        ' はひどく憧れていた。',
      ]);
      await era.printAndWait([
        'そして今、',
        digital.get_colored_name(),
        ' もその光に触れられた。',
      ]);
      await digital.say_and_wait(
        'このままじゃ……だめ！ デジ！ 動き出さないと！',
      );
      await digital.say_and_wait(
        '私だって、覚悟を決めて、純粋な気持ちでゲートの前に立てるなら！',
      );
      await digital.say_and_wait([
        callname,
        '……私……私でも……そんな存在になれる?!',
      ]);
      era.printButton('「もちろん！」', 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' はついに、この瞬間、本当の選手になった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿（クラシック級）開始';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (digital, you, japa_dir, mile_cha) => {
      await era.printAndWait([
        '夏合宿！ 一年でいちばん大事な行事！ この期間は',
        digital.uma_sex_title,
        'たちの伸びしろが一番大きい！ トレーナーの ',
        you.get_colored_name(),
        ' も、当然この行事を特に重視している。',
      ]);
      await era.printAndWait([
        '特に、前回の ',
        japa_dir,
        ' の勢いのまま、次のレースへぶつかっていくためだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には、もう ',
        digital.get_colored_name(),
        ' の明るい道が見えている。ただ……',
      ]);
      await digital.say_and_wait(
        'くわ……やっぱり勝利に頭がくらんだ。私ったら、神聖な存在になろうなんて……',
      );
      await era.printAndWait('……ああ、出だしが悪いな。');
      await digital.say_and_wait(
        '余韻が過ぎて、いわゆる賢者モードに入ると、自分がどれだけ……って後悔する……',
      );
      era.printButton('「待てデジ、後悔してるのか？ 自分の決断を？」', 1);
      await era.input();
      await era.printAndWait([
        '急所を突かれたように、',
        digital.get_colored_name(),
        ' は体をぴんと伸ばした。',
      ]);
      await digital.say_and_wait([
        'ただ、自分が面倒くさいと思うこともある……なのに ',
        mile_cha,
        ' まで予定してるし……',
      ]);
      await digital.say_and_wait(
        'ののののの！ 面倒なことは後回し！ 次はコミックのことを考えないと！',
      );
      era.printButton('「コミック？ 何だそれ？」', 1);
      await era.input();
      await digital.say_and_wait('え！');
      await era.printAndWait([
        you.get_colored_name(),
        ' に急に遮られた ',
        digital.get_colored_name(),
        ' は、しどろもどろになった。',
      ]);
      await digital.say_and_wait(
        'とにかく！ レースが終わったばかりだし、先にリラックスさせて！ あははは!',
      );
      await era.printAndWait('今回の夏合宿、少し心配だ……');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = '夏合宿（クラシック級）途中';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_61 キングヘイローのプレイヤーへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      mile_cha,
    ) => {
      await era.printAndWait([
        '夏合宿が始まって最初の一週間。',
        digital.get_colored_name(),
        ' は訓練は落としていない。だが……どうも ',
        digital.get_colored_name(),
        ' は上の空だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' もだいたいわかっている。',
        digital.get_colored_name(),
        ' は他の準備もしているらしい。だがそれも ',
        digital.get_colored_name(),
        ' の趣味だ。あまり口を出せない。',
      ]);
      era.printButton('「どうすればいいんだ……」', 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' がパワートレーニングをしているのを見ながら、',
        you.get_colored_name(),
        ' はふと、砂浜のほうで海を見ている ',
        halo.get_colored_name(),
        ' に気づいた。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' は、',
        digital.get_colored_name(),
        ' が以前から強く推していた',
        digital.uma_sex_title,
        'だ。あのときの ',
        mile_cha,
        ' も、',
        digital.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は一緒に見に行った。',
      ]);
      await era.printAndWait([
        '最近の',
        digital.sex,
        'の成績は、だんだん……微妙だ。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' も ',
        halo.get_colored_name(),
        ' に気づいた。ファンとして、',
        digital.sex,
        'の気分も沈んでいる。',
      ]);
      await you.say_and_wait(['どうだ、', call_61, ' を励ましてみないか？']);
      await digital.say_and_wait(
        'うん……ファンとして、アイドルを励ますのも道理……よし！ 決めた、手元の原稿は一旦置く！',
      );
      await you.say_and_wait('原稿？ 何の原稿だ？');
      await digital.say_and_wait('本の原稿。');
      await you.say_and_wait('何の本だ？');
      await digital.say_and_wait('普通の同人誌だよ。');
      await era.printAndWait('わからない……');
      await digital.say_and_wait([
        '近いうちの即売会で、',
        call_61,
        ' の同人誌を売って、みんなに ',
        call_61,
        ' のよさを広めようと思ってたんだ……',
      ]);
      await halo.say_as_unknown_and_wait(
        'キングの同人誌ですの？ そんな話、本人は聞いておりませんわ。',
      );
      await digital.say_and_wait([
        'あ、本人に知られるのは禁忌だよ、もちろん ',
        call_61,
        ' には……しゅわ！ ',
        call_61,
        '?!',
      ]);
      await era.printAndWait('主人公が同人誌から出てきた。');
      await digital.say_and_wait('さっきのは冗談！ 全部、暇つぶしの妄想です！');
      await halo.say_and_wait(
        'でも、ありがとう。おかげさまで、あはははは！ Kingの魅力も一流ですわね！',
      );
      await halo.say_and_wait([
        '本当に聞きたかったのは、',
        h_call_d,
        '、あなたは今年の『',
        mile_cha,
        '』に出ますのよね？',
      ]);
      await digital.say_and_wait([
        'え？ はい！ 去年のレースで感動したから、できるだけ近づきたくて……でも……どうして ',
        call_61,
        ' が……',
      ]);
      await halo.say_and_wait('わたくしも出走しますから。');
      await era.printAndWait([
        halo.get_colored_name(),
        ' も ',
        mile_cha,
        ' に出る。しかも ',
        digital.get_colored_name(),
        ' と同じ舞台で競う。',
      ]);
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' の顔に、急に影が差した。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はわかっている。長いキャリアの中で、',
        halo.get_colored_name(),
        ' は頂点から谷へ、徐々に落ちてきている。',
      ]);
      await digital.say_and_wait([
        'あの、',
        call_61,
        '……こんなこと言うのは厚かましいけど……私、応援するよ。',
      ]);
      await digital.say_and_wait(
        'あの……相手でも、推したい気持ちは同じくらい強い……',
      );
      await era.printAndWait([
        'この状況に、',
        digital.get_colored_name(),
        ' の気持ちは複雑だ。アイドルと同じ舞台で走るのは夢だった。だが、そのアイドルがすでに衰え始めているとしたら？',
      ]);
      await you.say_and_wait('デジ！');
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は少しとぼけた顔で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await you.say_and_wait([
        'デジ、わかってるはずだ。レース場の',
        digital.uma_sex_title,
        'は——',
      ]);
      await halo.say_and_wait([
        callname_61,
        '、割り込んでごめんなさい。',
        h_call_d,
        '、提案がありますわ。',
      ]);
      await halo.say_and_wait([
        h_call_d,
        '、この合宿が終わるとき、一緒に一走しましょう。',
      ]);
      await digital.say_and_wait(
        'は?! うお？ アイドルと一緒なんて、できない……',
      );
      await you.say_and_wait(['キング……本当にありがとう。']);
      await halo.say_and_wait([
        '構いませんわ。一流の',
        digital.uma_sex_title,
        'なら、一流のファンに返すのが自然です——あはははは！',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' の戸惑いを見抜いて、',
        digital.sex,
        'は ',
        digital.get_colored_name(),
        ' を一緒に走ろうと誘った。',
      ]);
      await era.printAndWait([
        'こうして、残りの夏合宿で、',
        digital.get_colored_name(),
        ' は最後に ',
        halo.get_colored_name(),
        ' と模擬レースをすることになった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿（クラシック級）終了';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_61 キングヘイローのプレイヤーへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} takm_kin 高松宮記念（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      takm_kin,
    ) => {
      await digital.say_and_wait('へへ……ふ……対局を賜り、感謝……');
      await era.printAndWait([
        '夏合宿の最後は、予定どおり ',
        digital.get_colored_name(),
        ' と ',
        halo.get_colored_name(),
        ' の対決……',
      ]);
      await era.printAndWait('ただ、少し……ゆるい？');
      await halo.say_and_wait([
        'は……ふ……',
        h_call_d,
        '、あなたの脚、かなり躊躇っていますわね。どうしましたの？',
      ]);
      await digital.say_and_wait(
        'いや、その……ずっと閃光弾を食らってるっていうか、空気に乗った尊さで窒息してるっていうか……',
      );
      await digital.say_and_wait(
        '前は観客側だったのに……追い付こうだなんて、調子に乗りすぎ……',
      );
      await digital.say_and_wait(
        '私も最近になって、『本気で走る』覚悟ができた普通の底辺ですから……',
      );
      await halo.say_and_wait([
        'あら、ずいぶん自信がありませんわね。でも、本当にそれだけ？ ',
        callname_61,
        '、',
        h_call_d,
        ' の実力はご存じですわよね？',
      ]);
      await you.say_and_wait('今の砂の上なら、デジは負けない。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は今の ',
        halo.get_colored_name(),
        ' を、まだ気にしている。',
      ]);
      await digital.say_and_wait([
        call_61,
        '……今は……昔とはかけ離れてる……でしょ……',
      ]);
      await digital.say_and_wait([
        '今年の春、『',
        takm_kin,
        '』で勝って、それから……流れる走り、体の躍動、今回の実力とは比べものにならないっていうか……',
      ]);
      await digital.say_and_wait(
        '知ってるよ。毎回柵に掴まって身を乗り出して見てたから。',
      );
      await digital.say_and_wait([
        '今の ',
        call_61,
        ' がどれだけ苦しいか、私もデビューしたから、少しは……わかる……',
      ]);
      await era.printAndWait([
        '選手になってからの ',
        digital.get_colored_name(),
        ' は、以前より触れられるものが増えた。こういう感情も。',
      ]);
      await halo.say_and_wait([
        'だから気が乗らない……そう、ふん……',
        h_call_d,
        ' あなたは……',
      ]);
      await halo.say_and_wait('馬鹿ですわ。');
      await digital.say_and_wait('え？');
      await era.printAndWait([
        '予想外の言葉に、',
        digital.get_colored_name(),
        ' は驚いた。',
      ]);
      await halo.say_and_wait('馬鹿、大馬鹿ですわ。');
      await halo.say_and_wait(
        'わかっているつもりで、まだ何もわかっていませんわ。',
      );
      await era.printAndWait('厳しい言葉。だが声は優しい。');
      await halo.say_and_wait([
        'ねえ、',
        h_call_d,
        '、あなたはこの',
        digital.uma_sex_title,
        'に、興味がありますわよね？',
      ]);
      await digital.say_and_wait('！ はい！');
      await halo.say_and_wait(
        'では合宿が終わったら、わたくしと一緒に訓練する権利を差し上げます！',
      );
      await halo.say_and_wait([
        '見せてあげますわ。',
        halo.get_colored_name(),
        ' がどんな',
        digital.uma_sex_title,
        'か！',
      ]);
      await digital.say_and_wait('ぜひ！');
      await digital.say_and_wait([
        '光栄すぎて尻尾まで跳ねた！ デジがあの',
        digital.sex_code - 1 ? '女神' : '神',
        'と一緒に！',
      ]);
      await era.printAndWait([
        '夏の終わり、',
        digital.get_colored_name(),
        ' は憧れていた',
        digital.uma_sex_title,
        'と繋がりを築いた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = '一流の条件';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} sprt_sta スプリンターズS（着色名）
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (digital, halo, call_61, h_call_d, sprt_sta, mile_cha) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' が ',
        mile_cha,
        ' へ進むあいだ、',
        halo.get_colored_name(),
        ' も同時に努力していた。',
      ]);
      await digital.print_and_wait([
        sprt_sta,
        '、短距離G1。理論上は ',
        halo.get_colored_name(),
        ' の得意……',
      ]);
      await digital.print_and_wait('——7着');
      await digital.print_and_wait('入着すらできなかった。');
      await digital.print_and_wait([
        'レース後まもなく、',
        digital.get_colored_name(),
        ' は ',
        halo.get_colored_name(),
        ' の前へ来た。',
      ]);
      await halo.say_and_wait([
        '見に来ましたのね、',
        h_call_d,
        '。構わないで——そう言うつもりでしたけど、あなたなら、わたくしのそばにいる権利を差し上げますわ。',
      ]);
      await digital.say_and_wait([
        'あの……最後は届かなかったけど、',
        call_61,
        ' のすばらしさに、また感服したよ。',
      ]);
      await digital.say_and_wait('鋭い目、漂う品格、華麗なコーナー！');
      await halo.say_and_wait('……それだけですの？');
      await digital.say_and_wait('え？');
      await halo.say_and_wait('わたくしを一流だと思う理由は、それだけですの？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' はさらにたくさん言った。だが……',
      ]);
      await halo.say_and_wait('……一流になるために、何より大事なものが一つ……');
      await digital.print_and_wait(
        'レース後の場内は、もうほとんど人がいない。',
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' はコースのスタート地点へ歩き、スタートの姿勢を取った。',
      ]);
      await halo.say_and_wait('せっかくですもの、これから一緒に走ります？');
      era.drawLine();
      await digital.print_and_wait([
        'ついさっきレースを終えたばかりだ。',
        halo.get_colored_name(),
        ' の疲労は明らかに見て取れる。',
      ]);
      await halo.say_and_wait(
        'は……は……ごほ……ほほほ……本当に、見苦しいですわね。',
      );
      await halo.say_and_wait([
        h_call_d,
        '、今のわたくしはどう？ 鋭い目も、品格も華麗も、全部ありませんわ。',
      ]);
      await halo.say_and_wait(
        '一流の証拠が何も残っていないわたくしは、まだ一流ですの？',
      );
      await digital.say_and_wait('それは……それは……');
      await halo.say_and_wait('でも、こんなわたくしでも——');
      await digital.print_and_wait([
        'レースで見た鋭い目が、今の ',
        halo.get_colored_name(),
        ' に、もう一度宿った。',
      ]);
      await halo.say_and_wait('もう一走したら、どうなりますの？');
      await halo.say_and_wait('だめなら、明日もう一走したら、どうなりますの？');
      await halo.say_and_wait(
        '明日失敗しても、明後日もう一度来たら、またどうなりますの？',
      );
      await halo.say_and_wait([
        h_call_d,
        '！ 見てなさい、今のわたくしに、本当に何も残っていませんの？',
      ]);
      await digital.say_and_wait('！');
      await digital.say_and_wait(
        '残ってる！ 開拓の羅針盤みたいに、万年の氷みたいに、変わらない！',
      );
      await halo.say_and_wait('——不屈の執念。打ち負かされても屈しない心。');
      await halo.say_and_wait('これだけは、誰にもわたくしから奪えませんわ。');
      await halo.say_and_wait(
        'これこそ、このKingが永遠の一流である理由ですわよ！',
      );
      await digital.print_and_wait([
        '実力が落ちても、',
        halo.get_colored_name(),
        ' の「一流」の精神、不屈の意志は、一度も衰えていない。',
      ]);
      await digital.say_and_wait(['おおお……', call_61, '……！']);
      await digital.print_and_wait([
        '傷だらけでも、',
        halo.get_colored_name(),
        ' の姿は、こんなに美しい。',
      ]);
      await halo.say_and_wait([
        '約束しますわ。『',
        mile_cha,
        '』では、以前の状態に戻ります！',
      ]);
      await halo.say_and_wait(
        '同情して全力を出さないなんて、失礼にもほどがありますわ。',
      );
      await digital.say_and_wait(
        'はい、わかりました。一流の欠片……受け取ります。',
      );
      await digital.say_and_wait('でも、今だけ、一言言わせて……');
      await digital.say_and_wait([
        'あなたはやはり……',
        halo.sex_code !== 1 ? '女神' : '神',
        '……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_mile_cha_c: (() => {
    const title = 'マイルCS開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     */
    const f = async (digital, halo, h_call_d) => {
      await era.printAndWait([
        halo.get_colored_name(),
        '——',
        digital.get_colored_name(),
        ' がデビュー前からずっと仰ぎ見てきた',
        digital.uma_sex_title,
        '。今、',
        digital.get_colored_name(),
        ' はやっと',
        digital.sex,
        'と並んで立てた。',
      ]);
      await era.printAndWait([
        'パドックの ',
        halo.get_colored_name(),
        ' は、これまでの衰えを一掃し、気迫が高まっている。まるで全盛期に戻ったようだ。',
      ]);
      await halo.say_and_wait([
        'どう？ ',
        h_call_d,
        '、今日のわたくしは、目がくらむほどまぶしいでしょう？',
      ]);
      await digital.say_and_wait(
        'はい！ この上なくまぶしい！ でも……背筋は、今年の春ほどピンとしてない……',
      );
      await halo.say_and_wait(
        'あは……やはり隠せませんわね。そこまで気づくなんて。',
      );
      await halo.say_and_wait([h_call_d, '、わたくしをどれくらい好きですの？']);
      await digital.say_and_wait('この推しは、マリアナ海溝より深いよ！');
      await era.printAndWait([
        halo.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' は笑い合いながら話している。ここでは、',
        digital.couple_title,
        'が言葉にできないレースを見せてくれるとわかる。',
      ]);
      await digital.say_and_wait(
        'あなたの本当の思い、今日のレースで、はっきりさせたい！',
      );
      await halo.say_and_wait([
        '本物の一流を、全身全霊で理解しなさい！ ',
        h_call_d,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_c: (() => {
    const title = 'マイルCS勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      h_call_d,
      mile_cha,
    ) => {
      await digital.print_and_wait([
        'いちばん下から這い上がってきた ',
        halo.get_colored_name(),
        '。',
        digital.get_colored_name(),
        ' は',
        digital.sex,
        'の生存戦略を、最初から最後まで見届けた。',
      ]);
      await halo.say_and_wait([
        'どう、',
        h_call_d,
        '？ わたくしとこの大事なレースを走って、わかりましたわね？',
      ]);
      await halo.say_and_wait([
        halo.get_colored_name(),
        ' がどんな',
        digital.uma_sex_title,
        'か。',
      ]);
      await digital.say_and_wait('は……はい……');
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' に「',
        digital.uma_sex_title,
        'とは何か」を教えられた ',
        digital.get_colored_name(),
        ' は、',
        mile_cha,
        ' を取ったあと、泣きじゃくった。',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' の存在は、それほど',
        digital.sex,
        'を感動させた。',
      ]);
      await halo.say_and_wait(
        'どうしましたの？ ずっと泣いていては、話せませんわよ。',
      );
      await digital.say_and_wait('全身……輝きを浴びた……');
      await digital.say_and_wait([
        'それから、わかった。',
        digital.uma_sex_title,
        'として生きるって、どういうことか。',
      ]);
      await digital.say_and_wait(
        '不屈の走りに宿る魂！ 本能！ 準備が足りなくても、一流の気概を貫く！',
      );
      await digital.say_and_wait(
        '前の私は全然わからなかった。でも今はわかった。走ればいい！ 弱音だって、走りながら言えばいい！',
      );
      await digital.say_and_wait([
        '今の私は、もっと',
        digital.uma_sex_title,
        'が好きになった！',
      ]);
      await halo.say_and_wait([
        'ふふ、あなたは本当に',
        digital.uma_sex_title,
        'が好きですわね。',
      ]);
      await halo.say_and_wait([
        h_call_d,
        '、もっとたくさんの',
        digital.uma_sex_title,
        'と走りなさい！ すべてを吸収して、それから……',
      ]);
      await halo.say_and_wait([
        '本物の全能選手になりなさい！ だってあなたは、いちばん好きな',
        digital.uma_sex_title,
        'のひとりなのですから！',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' は最後に、',
        digital.get_colored_name(),
        ' へ祝福を贈った。これからもっと多くの',
        digital.uma_sex_title,
        'と対決して、本物の「全能ランナー」になるように。',
      ]);
      era.drawLine({ content: '地下通路' });
      await digital.say_and_wait([
        callname,
        '、私の同志よ。',
        call_61,
        ' から、かけがえのないものを受け取った。',
      ]);
      await digital.say_and_wait([
        'もっと多くの',
        digital.uma_sex_title,
        'と走らないと。私は何をすればいい……',
      ]);
      await era.printAndWait('それなら、いっそ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' は、これからもっと多くのG1に出ると決めた。',
      ]);
      await digital.say_and_wait([
        'そうそう、それからそのあと、',
        call_15,
        ' と ',
        call_58,
        ' に挑む！',
      ]);
      await era.printAndWait([
        'ずっと仰ぎ見るだけだった ',
        digital.get_colored_name(),
        ' が、やっと勇気を出して、かつての推しに挑もうとしている。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param opera
     * @param tachyon
     * @param shakur
     * @param falcon
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_32 アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_d アグネスタキオンのアグネスデジタルへの呼び方
     * @param {PrintedSpan} s_call_d エアシャカールのアグネスデジタルへの呼び方
     * @param {PrintedSpan} f_call_d スマートファルコンのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      opera,
      tachyon,
      shakur,
      falcon,
      you,
      callname,
      call_15,
      call_61,
      callname_32,
      t_call_d,
      s_call_d,
      f_call_d,
    ) => {
      await digital.say_and_wait(
        '神さま！ 今年はグッズはいらないから、ライバルをください！',
      );
      await era.printAndWait([
        'なんてことだ！ ',
        digital.get_colored_name(),
        ' にこんなことを言わせるとは、',
        digital.sex,
        'は何に刺激された?!',
      ]);
      await you.say_and_wait('デジ？ どうして急にそんなことを？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に話した。少し前、',
        opera.get_colored_name(),
        ' がはっきり言った。',
        digital.get_colored_name(),
        ' にはライバルが足りない、と。',
      ]);
      await digital.say_and_wait([
        'うん、前に ',
        call_15,
        ' が言ってた通り、今の私がまだ強くない理由は……',
      ]);
      await era.printAndWait('ライバル。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' にはライバルが足りない。トレーナーとして、',
        you.get_colored_name(),
        ' は、ライバルが',
        digital.uma_sex_title,
        'にどれだけ動力と励ましを与えるか知っている。',
      ]);
      await era.printAndWait([
        'だが ',
        digital.get_colored_name(),
        ' の場合は特殊すぎる。',
        digital.sex,
        'が持つあの性質、',
        digital.uma_sex_title,
        'への純粋な好きも、ライバルに近い効果を',
        digital.sex,
        'に与える。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' に、本当にライバルは必要なのか？',
      ]);
      await digital.say_and_wait(
        'ううう、前は出しゃばりたくなくて、ライバルどころか、レース場でも相手とほとんど話してなかった。そのツケが来たのか……',
      );
      await era.printAndWait([
        'でもこの機会に、',
        digital.get_colored_name(),
        ' が他の',
        digital.uma_sex_title,
        'と交渉してみるのも悪くない。',
      ]);
      await you.say_and_wait('じゃあ、ライバルを探しに行こう！');
      await era.printAndWait('それで……');
      era.drawLine();
      await shakur.say_and_wait('は？ ライバル？ 早く寝ろ。');
      await digital.say_and_wait(
        '待ってほしいのだが！ 同期だし、ちょうどよくない？',
      );
      await shakur.say_and_wait([
        'なあ、',
        s_call_d,
        '、他は知らんが、少なくとも俺は向いてない。以上。',
      ]);
      era.drawLine();
      await falcon.say_and_wait(
        'え？ ライバル？ アイドルのイメージにはあんまり合わないかも～',
      );
      await digital.say_and_wait(
        'いやいや、アイドルにも、そういう相手がいて、対決しながら助け合う感じ、あるでしょ？',
      );
      await falcon.say_and_wait([
        'あはは、ファル子は',
        digital.uma_sex_title,
        'の小さなアイドルしかできなさそう。そういうの向かない……でも、',
        f_call_d,
        ' の誘い、すごくうれしいよ！',
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        'ふんふん……ライバルか……だが ',
        t_call_d,
        '、君は研究対象としては、違うな。私の理念に合わない！',
      ]);
      await digital.say_and_wait('……そう。');
      await era.printAndWait([
        'いろんな理由で何度も断られた ',
        digital.get_colored_name(),
        ' は、',
        digital.sex,
        'でも耳が少し垂れていた。',
      ]);
      await tachyon.say_and_wait([
        'そんなに沈むな、',
        t_call_d,
        '。それと君、',
        callname_32,
        '、わかっているはずだ。',
        t_call_d,
        ' のライバルになれる人選を。',
      ]);
      await era.printAndWait([
        '独特の目で ',
        you.get_colored_name(),
        ' を見つめ、',
        tachyon.get_colored_name(),
        ' は顎を少し上げて ',
        you.get_colored_name(),
        ' に合図した。',
      ]);
      await digital.say_and_wait([
        'えええ！ ',
        callname,
        '、知ってるの？ 私のライバルになれる人選？',
      ]);
      await you.say_and_wait('たしかにそうだ。');
      await digital.say_and_wait('じゃあ最初から言ってくれればよかったのに？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は焦って、',
        you.get_colored_name(),
        ' を叩きそうになった。',
      ]);
      await tachyon.say_and_wait([
        'どうやら、あちらにも見定めがあるらしい。',
        t_call_d,
        '、ここから先は退屈な解答だ。さらば。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は場を見て、気の利いたタイミングで離れた。',
      ]);
      await you.say_and_wait(
        '実は、君が探し始めてからわかった面もある。もう一方で、俺にも知りたいことがあって……',
      );
      await you.say_and_wait(
        'だから、最終的な結論はこれだ。君のライバルは、みんなだ！',
      );
      await digital.say_and_wait(
        'みんな……！ つまりDD箱推しでもいい?! 待って、つまり前の……',
      );
      await era.printAndWait([
        'そうだ。今日 ',
        digital.get_colored_name(),
        ' が探している人を見て思いついた。',
        digital.get_colored_name(),
        ' が探していたのは、芝が得意な子もダートが得意な子もいる。最初からそうだった……',
      ]);
      await you.say_and_wait('一人だけ選ぶ、なんてできない。');
      await you.say_and_wait(
        '誰を選んでも、デジみたいに二つのコースを走れる選手はいない。でも、もし……',
      );
      await digital.say_and_wait('みんな……');
      await you.say_and_wait('そうだ。');
      await digital.say_and_wait('はははは、まさか、またみんななんだ。');
      await digital.say_and_wait([
        call_61,
        ' の言葉、『もっと多くの',
        digital.uma_sex_title,
        'と一緒に走る』、絶対達成する！',
      ]);
      await digital.say_and_wait(
        'みんなをライバルにするなんて、考えると欲張りだな……みんなから、何をもらえるんだろう？',
      );
      era.print([you.get_colored_name(), ' の決定：']);
      era.printButton('養分（スタミナ+20）', 1);
      era.printButton('友情パワー（全能力+5）', 2);
      era.printButton('多様性（スキルPt+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('言うなら、養分だな');
          await digital.say_and_wait([
            'そう！ ',
            digital.uma_sex_title,
            'ちゃんたち、それぞれのおいしさが、毎回元気をくれる！',
          ]);
          await digital.say_and_wait(
            '毎日、新鮮な糧食！ これ以上の燃料はない！',
          );
          await era.printAndWait([
            'この先も',
            digital.uma_sex_title,
            'たちが、',
            digital.get_colored_name(),
            ' にもっと活力をくれるだろう。',
          ]);
          break;
        case 2:
          await you.say_and_wait('そう、友情だ！ POWER！');
          await digital.say_and_wait([
            'おほほ、',
            digital.uma_sex_title,
            'ちゃん一人ひとりが少し力をくれれば、私は無敵！',
          ]);
          await digital.say_and_wait(
            'ふんふん、うははは、考えただけで、全身に力が満ちてくる！',
          );
          await era.printAndWait([
            '一人一ウマコイン、というのとは少し違う。',
            digital.get_colored_name(),
            ' は',
            digital.uma_sex_title,
            'から力をもらって、もっと強くなれる。',
          ]);
          break;
        case 3:
          await you.say_and_wait('多様性、だろ！');
          await digital.say_and_wait([
            'もちろん！ ',
            digital.uma_sex_title,
            'ちゃんの走りの多様性は、普段決めてる走法じゃ枠に収まらない！',
          ]);
          await digital.say_and_wait(
            'UMAMO図鑑を集めるみたいに、全部記録する！',
          );
          await era.printAndWait([
            'コンプ勢か。',
            digital.get_colored_name(),
            ' はこのゲームで、きっとスキルを得られるだろう！',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await era.printAndWait([
        '朝早くトレーニング室に着いた ',
        digital.get_colored_name(),
        ' が持ってきたのは——チョコレートの「重ね」。',
      ]);
      await era.printAndWait('どうして量詞が「重ね」なんだ?!');
      await digital.say_and_wait([
        'これは私の心血だ！ 思いつく限りの',
        digital.uma_sex_title,
        'の特徴を、全部このチョコに込めた！',
      ]);
      await era.printAndWait(
        '箱を重ねた塔を見る。まさか、中のチョコ一粒一粒、全部違うのか?!',
      );
      await digital.say_and_wait('では、祭祀だ！');
      await era.printAndWait('何だ、どこから神棚が?!');
      await era.printAndWait([
        digital.get_colored_name(),
        ' はチョコを全部神棚の前に並べ、まず何か唱え、それから妙な手もみまでした。',
      ]);
      await digital.say_and_wait(
        'よし、できた！ 三女神は私のお願いを受け取ったはず。',
      );
      await era.printAndWait('三女神に拝むなら、どうして中庭に行かない?!');
      await digital.say_and_wait([
        callname,
        '、これから一緒に食べよう。無駄にしちゃだめだよ。',
      ]);
      era.printButton('「食べられるのか?!」', 1);
      await era.input();
      await digital.say_and_wait(
        'もちろん。気持ちがあればいいんだし、食べ物を無駄にするのも冒涜だから！',
      );
      await digital.say_and_wait('これから食べながら話そう！');
      await digital.say_and_wait([
        'ううう、私って本当に幸運だ。一緒に',
        digital.uma_sex_title,
        'を語れる同志に出会えるなんて……',
      ]);
      await digital.say_and_wait([
        'ほらほら、',
        callname,
        '、最近いちばん推してる',
        digital.uma_sex_title,
        'は……誰？',
      ]);
      await era.printAndWait('聞くまでもない。');
      era.printButton('「はい、チョコを。」', 1);
      await era.input();
      await era.printAndWait('冷蔵庫から、チョコを取り出す……');
      await digital.say_and_wait('おおお、私だ。');
      await digital.say_and_wait('いええええ？ ちがう、チョコなの？');
      await digital.say_and_wait([
        'こ、これは何という博愛?! こんなマイナーな',
        digital.uma_sex_title,
        'を推そうとする人がいる？',
      ]);
      await you.say_and_wait([
        '何言ってる。俺は君の ',
        callname,
        ' だ……それに、自分がマイナーだと思ってたのか……？ ウマ推しのファン数、低くないだろ？',
      ]);
      await era.printAndWait([
        'そう言われた ',
        digital.get_colored_name(),
        ' は、急にしどろもどろになった。',
      ]);
      await digital.say_and_wait(
        'それは……実は私のウマ推し、デビュー前からファンは少なくなかった。前からずっと……同人誌を……',
      );
      await era.printAndWait([
        'え？ たしかに聞いたことがある。',
        digital.get_colored_name(),
        ' はデビュー前から、ある方面では有名だったらしい……',
      ]);
      await digital.say_and_wait([
        'でも！ ',
        callname,
        ' のこの精神、これこそオタクの鑑！ 君となら、十年でも、もっとでも、一緒にバレンタインを過ごせそう！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' と話しながら、騒がしいバレンタインを過ごした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, luna, you, callname) => {
      await digital.say_and_wait([
        'デジ、',
        digital.get_colored_name(),
        ' の祭りが、やっと来た！ わわわ、この周りの景色、まさにファンの天国……',
      ]);
      await era.printAndWait([
        'ファン感謝祭……その名のとおり、アイドル属性を持つ',
        digital.uma_sex_title,
        'が応援ファンに返す行事だ。',
      ]);
      await era.printAndWait('そうは言っても、実際は学園祭にも近い。');
      await era.printAndWait([
        'だが、',
        digital.get_colored_name(),
        '。今年の役割は、ファンだけじゃない！',
      ]);
      await you.say_and_wait('実はデジ、今日の君は、応援される側だぞ！');
      await digital.say_and_wait('くや！');
      await digital.say_and_wait('いやいや、私みたいなのが……');
      await era.printAndWait([
        '「ありえない」という顔の ',
        digital.get_colored_name(),
        '。以前ならその通りだった……',
      ]);
      await you.say_and_wait(
        'あんなにたくさんのレースで結果を出した君だ。自覚を持とう。ウマ推しのファンに前からの分があるのはわかる。でも新規ファン、少なくないぞ。',
      );
      await era.printAndWait([
        '急所を突かれたように、',
        digital.get_colored_name(),
        ' は両手を上げて降参した。準備はできているらしい。',
      ]);
      await era.printAndWait([
        'それからサイン会に来た ',
        digital.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '最初は ',
        digital.get_colored_name(),
        ' も少し戸惑っていた。だがそのあと',
        digital.sex,
        'は……',
      ]);
      await digital.say_and_wait('はいはい、色紙にちゃんと名前を書いたよ！');
      await era.printAndWait('ファン一人ひとりを笑わせて並ばせている?!');
      await digital.say_and_wait(
        '前はずっと推す側だったから……ファンの気持ちは当然わかるよ。',
      );
      await digital.say_and_wait([
        'それから、',
        callname,
        '、あとでこの会場を最適化させてくれない？ 許可さえ取れれば、デジの主催者魂を見せるよ！',
      ]);
      await era.printAndWait([
        'スタッフから許可をもらうと、',
        digital.get_colored_name(),
        ' はすぐ各会場を一掃し、いろいろな企画までうまく整えてしまった?!',
      ]);
      await era.printAndWait([
        'そのあと話が ',
        luna.get_colored_name(),
        ' の耳に入り、',
        digital.sex,
        '自ら多くの',
        digital.uma_sex_title,
        'を連れて感謝しに来たとき……',
      ]);
      await digital.say_and_wait('どうなってる、私が推される一日になった?!');
      await era.printAndWait([
        '興奮しすぎて倒れた ',
        digital.get_colored_name(),
        ' は、やっと今日の奮闘を終えた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = 'NHKマイルカップ観戦';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     */
    const f = async (digital, nhk_cup) => {
      await era.printAndWait([
        digital.get_colored_name(),
        ' と一緒に、去年 ',
        digital.get_colored_name(),
        ' が走った ',
        nhk_cup,
        ' を見に来た。',
      ]);
      await era.printAndWait([
        '最近の ',
        digital.get_colored_name(),
        ' は後輩にも目を向け始めた。その中でいちばん',
        digital.sex,
        'の目を引いたのは——',
      ]);
      await era.printAndWait([
        '今年の ',
        nhk_cup,
        ' を勝った、最近話題の新人——クロフネ。',
      ]);
      await digital.say_and_wait('うおおお、大きな歩幅、長い脚！ 私、もう！');
      await digital.say_and_wait([
        'クロフネ、',
        digital.sex,
        '、',
        digital.sex,
        'は私が走った芝を走ったんだ！',
      ]);
      await digital.say_and_wait('内側の感覚が、弾けそう！');
      await era.printAndWait([
        'それから ',
        digital.get_colored_name(),
        ' はすぐ柵のそばまで走った……',
      ]);
      await digital.say_and_wait(
        'クロフネさん！ 頑張れ！ これから何があっても、先輩たちが助けるから！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、去年の ',
        nhk_cup,
        ' から多くのことを経験した。',
      ]);
      await era.printAndWait([
        '一年経って、また新しい世代が現れる。この蹄跡の続きが、',
        digital.get_colored_name(),
        ' の胸を熱くしたのだろう。',
      ]);
      await era.printAndWait([
        '戻ってきた ',
        digital.get_colored_name(),
        ' は、またクロフネの紹介を始めた……',
      ]);
      era.println();
      await era.printAndWait([
        '複数の馬場への適性が ',
        digital.get_colored_name(),
        ' と似ているのも、',
        digital.get_colored_name(),
        ' に親近感を持たせている。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、ただ推しを仰ぎ見る人から、後輩を気遣える先輩になれた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = '勇者の挑戦';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, tenn_sho) => {
      await era.printAndWait([
        'やっと、',
        digital.get_colored_name(),
        ' は夏合宿の前に大きなレースをいくつも走った。十分な経験も積めたはずだ。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' とこれまでのレースを振り返ると、またたくさんの出会いだ。',
      ]);
      await digital.say_and_wait([
        'よし！ 時機は来た！ 虎牢関の戦い！ ',
        call_15,
        ' と ',
        call_58,
        ' に挑戦状を出す！',
      ]);
      await digital.say_and_wait('うん……待って、どのレースがいい？');
      await era.printAndWait([
        'たしかに、',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の適性は、ダートが弱く、距離ではマイルが弱い。',
      ]);
      await era.printAndWait([
        '一方 ',
        digital.get_colored_name(),
        ' は長距離適性もあまりよくない……',
      ]);
      await you.say_and_wait('本気で挑むなら、やっぱり黄金の芝・中距離だな。');
      await era.printAndWait('ただ、これは……');
      await digital.say_and_wait([
        'たしかに……',
        digital.couple_title,
        'を私の泥のほうへ引きずりたくない……やっぱり正々堂々と一戦だ。',
      ]);
      await era.printAndWait([
        '今や自称だけではない覇王の ',
        opera.get_colored_name(),
        ' と、そのすぐ後ろの ',
        doto.get_colored_name(),
        '。黄金距離での勝負……',
      ]);
      await you.say_and_wait([tenn_sho, '、これがいちばん合う。']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はこのレースでは、まったく優位が取れない。',
      ]);
      await digital.say_and_wait(
        'そう！ これだ！ 東京2000メートルの芝、これ以上合うものはない！',
      );
      await you.say_and_wait('本当にいいのか？');
      await digital.say_and_wait('ほえ？ どういう意味？');
      await you.say_and_wait('かなりキツいぞ？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' でも、この話には少し言葉が詰まった。',
      ]);
      await digital.say_and_wait(
        '……ああ、性分だな。ゲームで最低難度を選ばないし、おまけDLCの強い装備も着ないのと同じ……',
      );
      await digital.say_and_wait('それに、私は、いちばんいい走りが見たい！');
      await digital.say_and_wait('だから、付き合ってくれるよね！');
      await you.say_and_wait('もちろん！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、こういう子だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿（シニア級）開始';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_15,
      call_58,
      call_61,
      h_call_d,
      nhk_cup,
      tenn_sho,
    ) => {
      await digital.say_and_wait(
        'うぐぐ、今年、今年だけは……時間がない！ 止めなきゃ！',
      );
      await era.printAndWait([
        '夏合宿の始まりから、頭を抱えてうめく ',
        digital.get_colored_name(),
        ' が見えた。どう言えばいいか、',
        digital.get_colored_name(),
        ' をよく見てきた ',
        you.get_colored_name(),
        ' もだんだんわかってきた。',
        digital.get_colored_name(),
        ' には同人誌を作る趣味もある。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は作った同人誌を即売会に出して布教する。相当な熱愛だ。',
      ]);
      await era.printAndWait('しかも、次の大型即売会は夏合宿の期間中だ。');
      await digital.say_and_wait([
        tenn_sho,
        '！ この夏は ',
        call_61,
        ' の新刊は出さない。レースに全力を尽くす！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' も、テイエムオペラオーとメイショウドトウとの対決を相当重視しているようだ。なら今回の夏合宿は、心配しなくてよさそうだ。',
      ]);
      await halo.say_and_wait('あら、それでは当分お目にかかれませんわね');
      await digital.say_and_wait(['しゅえ！ ', call_61, '！']);
      await halo.say_and_wait([
        'それより、',
        h_call_d,
        '、あなたは今年 ',
        tenn_sho,
        ' に出ますのよね。',
      ]);
      await digital.say_and_wait([
        'は、はい……',
        call_61,
        ' に体も意志も鍛えられたから……やっと、',
        call_15,
        ' と ',
        call_58,
        ' と決戦できる時が来た！',
      ]);
      await halo.say_and_wait([
        'では、',
        tenn_sho,
        ' は三人——いいえ、四人の対決ですわね。',
      ]);
      await digital.say_and_wait([
        'え？ 他にも、実力ありと評される',
        digital.uma_sex_title,
        'ちゃんが？',
      ]);
      await halo.say_and_wait(['今年の ', nhk_cup, '、見に行きましたわよね？']);
      await digital.say_and_wait([
        'もちろん。だって私は ',
        digital.get_colored_name(),
        ' だもん！ あははは……まさか……',
      ]);
      await era.printAndWait([
        '実は、',
        you.get_colored_name(),
        ' も数日前に噂を聞いていた。それは……',
      ]);
      await halo.say_and_wait([
        'クロフネ、',
        digital.sex,
        'は今年の ',
        tenn_sho,
        ' に出ますわ。',
      ]);
      await era.printAndWait([
        'クロフネ……今年のNHKを取ったあの',
        digital.uma_sex_title,
        'だ。恐ろしい脚を持っている。',
      ]);
      await era.printAndWait([digital.sex, 'も、このレースに出るのか。']);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（シニア級）終了';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      tenn_sho,
    ) => {
      await era.printAndWait([
        '今回の夏合宿、',
        digital.get_colored_name(),
        ' は本当に特別頑張った。',
        you.get_colored_name(),
        ' は、こんなに真剣な ',
        digital.get_colored_name(),
        ' を見たことがない。',
      ]);
      await era.printAndWait([
        '先輩の ',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' との約束、後輩クロフネとの対決。二つの要素で、今の ',
        digital.get_colored_name(),
        ' の状態はかつてなくいい！',
      ]);
      await digital.say_and_wait([
        callname,
        '、感じるよ。この感覚、みんなに加護された勇者みたい！ これなら',
        digital.couple_title,
        'と対決できる！',
      ]);
      await you.say_and_wait('勝てるか？');
      await digital.say_and_wait(
        '正直、不安しかない！ あの三人、誰一人として勝つ自信がない……',
      );
      await digital.say_and_wait(
        'だから、私ができるのは、これまで積み上げた多様な経験だけ！',
      );
      await era.printAndWait([
        '前に立つ壁がどれだけ高くても、',
        digital.get_colored_name(),
        ' は迷わなかった。',
      ]);
      await era.printAndWait('だが、その夜……');
      await era.printAndWait('クロフネが出走できないという知らせが届いた。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' はその夜、',
        you.get_colored_name(),
        ' を呼び出した。深夜の砂浜で、うつむいて一言も発しない。',
      ]);
      await era.printAndWait([
        '長い時間が経って、',
        digital.get_colored_name(),
        ' はやっと口を開いた——',
      ]);
      await digital.say_and_wait([
        callname,
        '……ねえ、こんなこと、本当にあるの？',
      ]);
      await era.printAndWait([
        '骨折、ファン数、票数、抽選、回避……いろんな理由での不出走は、',
        digital.get_colored_name(),
        ' も見てきた。',
      ]);
      await era.printAndWait([
        'だが、出走枠が足りなくて出られない。こういうのは、',
        digital.get_colored_name(),
        ' は初めてだ。',
      ]);
      await digital.say_and_wait(
        'レースだから、必ず勝利の笑顔と敗北の涙がある。',
      );
      await digital.say_and_wait([
        'でも、涙の先には必ず感動がある。だから',
        digital.uma_sex_title,
        'たちは、また次のレース場でぶつかり合える。',
      ]);
      await digital.say_and_wait('……でも……走れないなら、それってどう……');
      await era.printAndWait('全部準備して、それでも出られない。');
      await digital.say_and_wait([
        'もし私が出たせいで……',
        digital.sex,
        'の夢が摘まれたなら……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はひどく沈み、もう引き下がる気持ちが生まれていた。',
      ]);
      await you.say_and_wait([
        '自分は ',
        tenn_sho,
        ' に出ない、と言うつもりか?!',
      ]);
      await digital.say_and_wait('そ……そんなことはない。');
      await digital.say_and_wait([
        '私だって、私だって、',
        call_15,
        ' と ',
        call_58,
        ' との約束がある……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はわかっている。',
        digital.sex,
        'には何も変えられない。',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        'が好きだから、あの',
        digital.uma_sex_title,
        'の遭遇が、水草みたいに',
        digital.sex,
        'の脚に絡みつく。',
      ]);
      await era.printAndWait('でも、このままだと……');
      await you.say_and_wait([
        digital.sex,
        'を信じろ。同時に、俺も君を信じてる。',
      ]);
      await digital.say_and_wait([
        'それって……どういう意味？ ',
        digital.sex,
        'を信じる……？',
      ]);
      await you.say_and_wait([
        'クロフネ',
        digital.sex,
        'の脚は止まらない。',
        digital.sex,
        'には来年もある。今年の ',
        tenn_sho,
        ' に',
        digital.sex,
        'が出られないのは事実だ……',
      ]);
      await you.say_and_wait([
        'でも',
        digital.sex,
        'がこれで立ち直れず、引退すると思うか？',
      ]);
      await digital.say_and_wait('！ そ……そんなわけない。');
      await era.printAndWait([
        '優れた',
        digital.uma_sex_title,
        'は、こういう挫折では倒れない。',
      ]);
      await you.say_and_wait(
        '君がいちばんいい答案を出すこと。それがクロフネへのいちばんの助けだ。',
      );
      await digital.say_and_wait([
        '……',
        digital.uma_sex_title,
        'ちゃんたちが、苦しみの最後に掴むもの。あの何人かを経て、わかった。あれは比類ないものだ。',
      ]);
      await digital.say_and_wait(
        'もたらされる悲しみも、その悔恨さえも、明日の力になる！ わかった！ だって自分で感じたから！',
      );
      await digital.say_and_wait([
        'だから私は、心の底から言える。',
        digital.uma_sex_title,
        'は最高だ！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は立ち上がり、海辺まで走った——',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        'は、どんな苦難でも、不屈の意志で、全部、弾き飛ばあああああ！！！！！',
      ]);
      await digital.say_and_wait([
        '私も、',
        digital.sex,
        'も！ 絶対に乗り越えられる！！！！',
      ]);
      await digital.say_and_wait('……あああ……');
      await era.printAndWait([
        '思い切り叫んだあと、',
        digital.get_colored_name(),
        ' は我に返った。',
      ]);
      await you.say_and_wait('どうやらデジ、答えは出たな。');
      await digital.say_and_wait([
        '……私も、ここで止まっちゃだめだ。',
        call_61,
        ' から受け取った貴重なものを、',
        digital.sex,
        'に見せなきゃ！',
      ]);
      await digital.say_and_wait([
        '私は、必ず ',
        tenn_sho,
        ' に出る。しかも、しかも！ 圧倒的な勝利を取る！',
      ]);
      await digital.say_and_wait([
        digital.sex,
        'が来年このレースで私に追いつくために、全力を尽くせるように！',
      ]);
      await digital.say_and_wait('絶対！ 絶対に！');
      await digital.say_and_wait([
        'それに、これまで出会ったすべての',
        digital.uma_sex_title,
        'の感情を、全部注ぎ出す！',
      ]);
      await digital.say_and_wait('それが、私の責任！');
      await era.printAndWait(
        '勝つ。しかも大勝する。それでクロフネの最後の悔いを断つ。',
      );
      await era.printAndWait([
        'それが ',
        digital.get_colored_name(),
        ' が自分に課した責任だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '天皇賞（秋）開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} o_call_di テイエムオペラオーのアグネスデジタルへの呼び方
     * @param {PrintedSpan} do_call_di メイショウドトウのアグネスデジタルへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      call_15,
      call_58,
      o_call_di,
      do_call_di,
      tenn_sho,
    ) => {
      await era.printAndWait(['やっと来た、', tenn_sho, ' 当日。']);
      await era.printAndWait([
        'パドックで、',
        digital.get_colored_name(),
        ' は馴染みの二人と顔を合わせた。',
      ]);
      await digital.say_and_wait([
        'よろしくお願いします！ ',
        call_15,
        '、',
        call_58,
        '。',
      ]);
      await doto.say_and_wait([
        'こちらこそ！ よろしくお願いします、',
        do_call_di,
        '！',
      ]);
      await era.printAndWait([
        '三年越しに、',
        digital.get_colored_name(),
        ' はやっと推しの前で普通に話せるようになった。',
      ]);
      await opera.say_and_wait(
        'あははは、名刺の交換か？ だが覇王である私は、輝くこの身がすべてを語る！ 紹介など不要だ！',
      );
      await opera.say_and_wait([o_call_di, '、我が戴冠式へようこそ！']);
      await opera.say_and_wait(
        '君の努力は見てきた。君が我らの後ろまで来たことは認めざるを得ない。',
      );
      await opera.say_and_wait([
        'だが後ろは、あくまで後ろだ！ ',
        o_call_di,
        '、この芝では、君はまだ私に勝てない。『世紀末覇王』として、中距離の芝を駆ける私に！',
      ]);
      await digital.say_and_wait(
        'たしかに……言われたとおり、ハード面ではまだ君に及ばない……',
      );
      await digital.say_and_wait('でも、私の技術は、芝とダートの技術は……');
      await era.printAndWait([
        'そうだ。この芝のレースで、二刀流の ',
        digital.get_colored_name(),
        ' の優位は……もう少し待てば、明らかになる。',
      ]);
      await era.printAndWait('ぽつ……ぽつ……');
      await era.printAndWait('ざあ……ざあ……');
      await era.printAndWait('最初は一点。それから全部に広がった！');
      await era.printAndWait([
        'そう、重馬場だ。今回の ',
        tenn_sho,
        ' は、重馬場だ！',
      ]);
      await digital.say_and_wait([
        'これは……',
        digital.uma_sex_title,
        'ちゃんの涙雨……違う、私が出会ったすべての',
        digital.uma_sex_title,
        'ちゃんのうれし泣き。私の勝利を祝う雨だ！',
      ]);
      await opera.say_and_wait(
        '……雨か……先に言っておくが、私は重馬場が得意だぞ。覇王は馬場がどうであれ適応できる！',
      );
      await doto.say_and_wait('あわわわ……雨だああ……');
      await era.printAndWait([
        'オペラオーは重馬場が得意だ。だが、',
        digital.get_colored_name(),
        ' は、得意なだけじゃない！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は文字どおり泥の上を走ってきた。この状況では……',
      ]);
      await era.printAndWait('勝つ可能性しかない。');
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '天皇賞（秋）勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (digital, you, callname, tenn_sho) => {
      await era.printAndWait('どんどんどんどん——');
      await era.printAndWait([
        '低い脚音の中、',
        digital.uma_sex_title,
        'たちが観客席に迫る。このとき、意外にも外を走っていたのは——',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        digital.get_colored_name(),
        '！ ',
        digital.get_colored_name(),
        ' だ！ 雨の中、荒れ果てた芝を、馬群から抜け出して最良の進路を選んだ！ そして——！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        'ゴール！ 不思議な走りで ',
        tenn_sho,
        ' を征服したのは——',
        digital.get_colored_name(),
        '！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' が積み上げてきた知識、スキル、感情が、今回いちばんいい条件を ',
        digital.get_colored_name(),
        ' に与えた。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は泥の芝の上で、まるで実家に帰ったようだ。進路選択も最後の加速も、トレーナーの ',
        you.get_colored_name(),
        ' から見て、足りないところはまったくない。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は揺るぎなく勝利を取った。',
      ]);
      era.println();
      await digital.say_and_wait('へへ……ごほごほ……あははは……');
      await digital.say_and_wait('そう、私の勝利でしょ。');
      await you.say_and_wait('そうだ、君の勝利だ、デジ。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は振り返り、観客席を向いた。',
      ]);
      await digital.say_and_wait('うおおおおおおおおおおおおお！');
      await you.say_as_passer_by_and_wait(
        '観客席',
        'うおおおおおおおおおおおおお！',
      );
      await digital.say_and_wait('へわああああああああああ！');
      await you.say_as_passer_by_and_wait(
        '観客席',
        'へわああああああああああ！',
      );
      await digital.say_and_wait('い！ へ！ お！ おおおおおお！');
      await you.say_as_passer_by_and_wait(
        '観客席',
        'い！ へ！ お！ おおおおおお！',
      );
      await era.printAndWait('はははは、叫んで喉が少し嗄れた。');
      await era.printAndWait([
        'しかも普通の名前コールと違う。さすが ',
        digital.get_colored_name(),
        ' らしい。',
      ]);
      await era.printAndWait([
        '両手を大きく開いて ',
        you.get_colored_name(),
        ' の前まで走り、柵越しに ',
        you.get_colored_name(),
        ' を抱き上げた。',
      ]);
      await digital.say_and_wait([callname, '！ 未知だ、未知の景色だ！']);
      await digital.say_and_wait(
        'ステージの上でコールの力を感じる！ この感覚は本当に比類ない！',
      );
      await you.say_and_wait(
        'ああ！ これはデジだけのコールだ、唯一無二のコールだ！',
      );
      await digital.say_and_wait(
        'クロフネ……勝利を、あの二人から奪ってきたよ……',
      );
      await era.printAndWait([
        digital.sex,
        'が悔恨を抱いていようと悲しみを抱いていようと、このレースを見れば、',
        digital.sex,
        'も、きっと救われるだろう。',
      ]);
      await digital.say_and_wait(
        '私一人じゃ、できなかった——ずっとそう思ってた。だから推しに願いを託した……',
      );
      await digital.say_and_wait('でも……');
      era.printButton('「俺の一番推しは、君だぞ！」', 1);
      await era.input();
      await digital.say_and_wait([
        'あははは、えへへへ……',
        callname,
        '、今それを言うなんて、本当に……私、私……',
      ]);
      await digital.say_and_wait([
        'さあさあ！ サービスだ！ そうそう、ファンサービス！ ',
        callname,
        '、尻尾の毛が欲しい？',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は嬉しすぎて、少し意味不明なことを言い始めている。',
      ]);
      era.printButton('「表彰台へ行こう、みんなが待ってる。」', 1);
      await era.input();
      await digital.say_and_wait('おおお、無礼にもほどがある、忘れかけてた！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を柵のこちらへ運び、二人で表彰台へ来た。',
      ]);
      era.println();
      await digital.say_and_wait([
        'どどどど、どうも！ 私は ',
        digital.get_colored_name(),
        '！ 結局私は、',
        digital.uma_sex_title,
        'ちゃんが好きな……',
      ]);
      await digital.say_and_wait([
        '私はただ、',
        digital.uma_sex_title,
        'ちゃんのお尻……いや、尻尾を追って、ここに来ただけ……',
      ]);
      await digital.say_and_wait([
        'わかる?! この感動!? 最初の私は、普通の',
        digital.uma_sex_title,
        'ちゃんですらなくて、ただのファンだったんだよ！',
      ]);
      await digital.say_and_wait(
        'でも、この輝きに混ざれて、この尊景のいちばん前でゴールできたこと、本当に……感謝してもしきれない……',
      );
      await digital.say_and_wait(
        '勝てたのは、もう私一人の成果じゃない。出会ったすべての人の結晶だ。',
      );
      await digital.say_and_wait([
        '一路の',
        digital.uma_sex_title,
        'ちゃん、最初は自分にいるはずがないと思ってたファン、それから ',
        callname,
        '！',
      ]);
      await digital.say_and_wait('今日、勝たせてくれたのは、みんなだ。');
      await digital.say_and_wait('感謝……本当に、すごく、感謝……');
      await digital.say_and_wait([
        digital.uma_sex_title,
        'ちゃんたちは、ファンだったころに思ってた',
        digital.uma_sex_title,
        'ちゃんより……百倍、千倍まぶしい……',
      ]);
      await era.printAndWait([
        '話しているうちに、',
        digital.get_colored_name(),
        ' はもうレースの選手の紹介を始めていた。',
      ]);
      await digital.say_and_wait(
        '見た?! 颯爽とした短髪、猛然とスパートするときの揺れ……',
      );
      await digital.say_and_wait('あの、脚に合わせて揺れる袋……');
      await digital.say_and_wait(
        'それと、今日は場にいられないクロフネ。いつか必ず、一緒にダートを走りたい……',
      );
      era.println();
      await era.printAndWait([
        '話の匣が開いて、',
        digital.get_colored_name(),
        ' がまだ話しているとき……',
      ]);
      await you.say_as_passer_by_and_wait('スタッフ', [
        digital.get_colored_name(),
        ' のトレーナーさん、盛り上がっているところ申し訳ありません……ウイニングライブが……',
      ]);
      await era.printAndWait([
        'ああああ、うつむいて ',
        digital.get_colored_name(),
        ' に何度か声をかけるが、',
        digital.sex,
        'はまったく気づいていない。',
      ]);
      await era.printAndWait('無理やり連れていくしかないな。');
      await digital.say_and_wait(['おいおいおい、', callname, '？']);
      await digital.say_and_wait('待って、せめてもう一言、もう一言だけ——');
      await digital.say_and_wait([
        digital.uma_sex_title,
        'は——最——高——だ——！！！！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {CharaTalk} l_call_d シンボリルドルフのアグネスデジタルへの呼び方
     */
    const f = async (digital, luna, you, callname, l_call_d) => {
      await era.printAndWait([
        'トレセンはクリスマスの自由行動を、比較的応援している。',
        digital.uma_sex_title,
        'にとっても特別な日だからだ。',
      ]);
      await era.printAndWait([
        '校外だけでなく、一風変わった',
        digital.uma_sex_title,
        'にも光を当てるため、学園内でも大きな行事が開かれている。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' と各会場を渡り歩いて食べ歩き、いろいろなゲームで遊び、それから ',
        digital.get_colored_name(),
        ' と熱く議論した。',
      ]);
      await era.printAndWait([
        '突然、',
        luna.get_colored_name(),
        ' と一行が ',
        you.get_colored_name(),
        ' の前に現れた。',
      ]);
      await digital.say_and_wait('うわわ、うるさすぎた？');
      await luna.say_and_wait('心配は要らん。むしろ褒美だ。');
      await era.printAndWait([
        'それから',
        digital.sex,
        'は後ろから大きなギフトボックスを取り出し、',
        digital.get_colored_name(),
        ' に渡した……',
      ]);
      await digital.say_and_wait('これは……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' が箱を開けると、中に入っていたのは——',
      ]);
      await era.printAndWait('色紙の重ね……びっしりと、いろいろな……名前？');
      await digital.say_and_wait('ちがう、これ、これは……！ サインだ！');
      await era.printAndWait([
        'サイン！ よく見ると、ここには馴染みの',
        digital.uma_sex_title,
        'の直筆サインがたくさん入っている?!',
      ]);
      await digital.say_and_wait(
        'ああああ……単品で買ったら、ウマコインいくついるんだ……私の預金、いくら残ってたっけ……',
      );
      await luna.say_and_wait([
        'この期間、',
        l_call_d,
        ' の助けや励ましを受けた',
        digital.uma_sex_title,
        'たちの謝意だ。それに学生会長として、学園の宣伝にも感謝している……',
      ]);
      await luna.say_and_wait([
        'それに、',
        l_call_d,
        ' の趣味は……少々独特だからな。',
        l_call_d,
        ' を好きな',
        digital.uma_sex_title,
        'を募って、この贈り物を用意した。',
      ]);
      await era.printAndWait([
        'この大礼を受け取った ',
        digital.get_colored_name(),
        ' は……',
      ]);
      await digital.say_and_wait(
        'あわあわ……これが……推す者は恒に推される、か……',
      );
      await you.say_as_passer_by_and_wait('みんな', [
        'おめでとう！ ',
        digital.get_colored_name(),
      ]);
      await digital.say_and_wait([callname, '！ ', callname, '！ これ……']);
      await era.printAndWait([
        'すぐ尊さで気を失いかけ、',
        you.get_colored_name(),
        ' にもたれかかった。',
      ]);
      await era.printAndWait([
        '意外にも立場が入れ替わった ',
        digital.get_colored_name(),
        ' は、今日、推される喜びも味わった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = (digital) => [
      'ただの普通の',
      digital.uma_sex_title,
      digital.sex,
    ];
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} dober メジロドーベル
     * @param {CharaTalk} kris シンボリクリスエス
     * @param {CharaTalk} diamond_lord ダイヤモナーク（アグネスデジタル口上NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_59 アグネスデジタルのメジロドーベルへの呼び方
     * @param {PrintedSpan} do_call_di メジロドーベルのアグネスデジタルへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      digital,
      dober,
      kris,
      diamond_lord,
      you,
      callname,
      call_59,
      do_call_di,
      arim_kin,
    ) => {
      await era.printAndWait([
        '霜の舞う十二月の最後の数日。少し前に見た ',
        arim_kin,
        ' の熱はまだ残っている。',
        kris.get_colored_name(),
        ' のきれいなゴールを見届けたあとでも、',
        digital.get_colored_name(),
        ' はすぐコミケの準備に没頭した。',
      ]);
      await era.printAndWait('サークル主なら、早めに入って設営できる。だが……');
      await era.printAndWait(
        'それでも感嘆する。サークル主だけでも、まだこんなに人がいる。',
      );
      await era.printAndWait(
        '展示場へうねっていく長い列を見る。あとどれだけで自分たちの番になるのかわからない。',
      );
      await digital.say_and_wait([
        'ふんふんふん、',
        callname,
        '、君は一般入場の列に並んだことがないんだ。本番は、東京ビッグサイトの門の前後が割り込めない人波になるよ！',
      ]);
      await era.printAndWait([
        '……よかった。',
        digital.get_colored_name(),
        ' はサークル主だから、早めの通路を一緒に歩ける。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はフックだらけの特製の大きなリュックを背負い、いろいろな小さな置き物や飾りを吊るしている……',
      ]);
      await era.printAndWait('中には掛け軸の重ねもあるらしい……');
      era.printButton(
        '「あの、デジ、これ、全部一人で作ったんじゃないよな？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'じゃらじゃら。',
        digital.get_colored_name(),
        ' が振り向くと、飾りの金属がぶつかり合って耳に鋭い音を立てた。',
      ]);
      await digital.say_and_wait([
        'うん……',
        callname,
        ' は私の仕事量に驚いてる？ 実はこれ、再販が多いんだ。つまりデジの昔の成果。',
      ]);
      await era.printAndWait('昔、昔か……');
      await digital.say_and_wait([
        'デビューしてから、デジの成果は実はかなり減った。出展しても薄い本が一二冊、欠席することもある……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は振り返り、巨大な東京ビッグサイトを見つめた。',
      ]);
      await digital.say_and_wait([
        'たぶん……このあとは普通の速度に戻ると思う。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' の言葉がわかる。',
        digital.get_colored_name(),
        ' がなぜこんなに……沈んでいるのかも？',
      ]);
      await era.printAndWait([
        '早起きで少し生気のない ',
        digital.get_colored_name(),
        ' の目を見て、',
        you.get_colored_name(),
        ' は思い出した……',
      ]);
      await era.printAndWait('ダートのレースだった。雨が降っていた。');
      await era.printAndWait([
        '小雨混じりの寒風が、',
        you.get_colored_name(),
        ' のレインコートに容赦なく吹き込んだ。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' も、さぞ寒かっただろう。',
      ]);
      await era.printAndWait([
        'コース上の ',
        digital.get_colored_name(),
        ' は泥だらけで、マカロン色の勝負服にも灰色がにじんでいた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は掲示板の成績を見ていない。見えるのは、掲示板を見上げている ',
        digital.get_colored_name(),
        ' だけだ。',
      ]);
      era.drawLine();
      await era.printAndWait(
        '列は思ったほど長くなかった。気づいたら会場に入っていた。',
      );
      await era.printAndWait([
        '苦労して',
        digital.uma_sex_title,
        'エリアへ割り込むと、設営中のサークル主が何人か、遠くから ',
        digital.get_colored_name(),
        ' に手を振った。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はここでは、かなり名が通っているらしい。',
      ]);
      await digital.say_and_wait('おおおお？');
      await era.printAndWait([
        'ん？ ',
        digital.get_colored_name(),
        ' の視線の先を見ると、マスクに帽子、服を重ねて少しふくらんだ……',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '普通の帽子だが、少し持ち上がった形からも、だいたい',
        digital.uma_sex_title,
        'だとわかる。',
      ]);
      await era.printAndWait([
        'それに実際、みんなだいたい',
        digital.sex,
        'が誰か知っている……',
      ]);
      await digital.say_and_wait([
        'ドー……',
        { color: dober.color, content: '白目先生', fontWeight: 'bold' },
        '！ 今回も新刊ある?! 三冊ありがとう！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はドーベル……うん、',
        {
          color: dober.color,
          content: '白目先生',
          fontWeight: 'bold',
        },
        ' のスペースへ行き、すぐ三冊予約した。',
      ]);
      await era.printAndWait([
        'そしてドーベル……まあ、',
        {
          color: dober.color,
          content: 'ドーベル先生',
          fontWeight: 'bold',
        },
        ' もこそこそ左右を見回し、他の人が（意識して）目を逸らしたのを確認してから……',
      ]);
      await era.printAndWait([
        'そっとリュックから、丁寧に包んだ何かを取り出し、興奮している ',
        digital.get_colored_name(),
        ' に渡した。',
      ]);
      await era.printAndWait('いろいろな交換のあと、迎えるのは……');
      await era.printAndWait('コミケの正式開幕！');
      await era.printAndWait(
        '何度見ても感嘆する。人類は多すぎて、地球は小さすぎる。',
      );
      await you.say_as_unknown_and_wait('おおおおおおお！');
      await era.printAndWait(
        '入場ゲートから、人々の魂の叫びが聞こえる。先頭の人間は人気ブースへ一直線に走り、スペースの前で丁寧に減速して紙幣を出し、貴重な戦利品を受け取る。',
      );
      await era.printAndWait('先頭から人が湧き続け、次に現場へ来たのは……');
      await diamond_lord.say_as_unknown_and_wait([
        'ええ！ ',
        do_call_di,
        '！ 来たよ！',
      ]);
      await era.printAndWait([
        '遠くの人混みから、栗毛の',
        digital.uma_sex_title,
        'が飛び出した。',
        digital.uma_sex_title,
        'の脚力ですぐ ',
        digital.get_colored_name(),
        ' の前まで来た。',
      ]);
      await digital.say_and_wait(['いつもの新刊、はい～']);
      await era.printAndWait([
        '新刊を受け取った',
        digital.uma_sex_title,
        'は跳ねるように離れた。最初の客。だが次は……',
      ]);
      era.printButton('「デジ……知名度は少し聞いてたけど……」', 1);
      await era.input();
      await era.printAndWait(
        '手が……回らなくなってきた。リュックの中の巻いた掛け絵を取り出し、受け取った現金も数えなきゃ……',
      );
      await era.printAndWait(
        'なぜ電子決済がないか聞くな。入場してからスマホは静かにポケットで眠ったきり、音ひとつ立てない。',
      );
      await era.printAndWait([
        'しばらく忙しく働いたあと、やっと「完売」の札を出せた。',
      ]);
      era.println();
      await era.printAndWait([
        digital.get_colored_name(),
        ' と、URA公式ブースを見に行くか話していると、',
        {
          color: dober.color,
          content: 'ドーベル先生',
          fontWeight: 'bold',
        },
        ' が別れに来た。',
      ]);
      await dober.say_and_wait([
        do_call_di,
        '、一緒にブースを回ろうと思っていたのだけれど、残念、ここで失礼するわ。これからも、もっと優れた作品を。',
      ]);
      await digital.say_and_wait(
        'えええ、お世話になりました！ 死ぬ気で創作します！',
      );
      await digital.say_and_wait(
        'デビュー後は作品が怠けてたけど、安心してください、このあと立て直します!',
      );
      await dober.say_and_wait(['！']);
      await era.printAndWait([
        'マスク越しでも、目だけでも、',
        dober.get_colored_name(),
        ' の激しい感情の変化がわかる。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は拳を握り、変装用の帽子とマスクを外した。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は固まった。なぜ ',
        dober.get_colored_name(),
        ' が急に怒っているのかわからない。',
      ]);
      await digital.say_and_wait(['シロ……', call_59, '……？']);
      await era.printAndWait([
        dober.get_colored_name(),
        ' はショルダーバッグから ',
        digital.get_colored_name(),
        ' の同人誌を抜き、',
        digital.get_colored_name(),
        ' のスペースに戻した。',
      ]);
      await dober.say_and_wait([
        'これ、帰りに読むつもりだったの。ごめんなさい。',
      ]);
      await era.printAndWait([
        dober.get_colored_name(),
        ' は振り返らずに歩いていった。',
        digital.get_colored_name(),
        ' の引き止めも見なかった。',
      ]);
      await digital.say_and_wait(['……']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はうつむき、自分が丁寧に包んだ同人誌を見つめた。',
      ]);
      await diamond_lord.say_as_unknown_and_wait(['あの……', do_call_di, '？']);

      await era.printAndWait([
        '最初にスペースへ駆けつけた栗毛の',
        digital.uma_sex_title,
        'だ。',
        digital.sex,
        'も大きな戦利品の袋を持っている。挨拶に来たようだ。',
      ]);
      await digital.say_and_wait([
        '見苦しいところを見せてごめん、',
        diamond_lord.get_colored_name(),
        '。私……',
      ]);
      await digital.say_and_wait([
        '聞きたいんだけど、ファンとして、先生の作品をもっと見たいのは……普通、だよね？',
      ]);
      await diamond_lord.say_and_wait('うん……でも……');
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ' という',
        digital.uma_sex_title,
        'は……そのまま地面に座り、巨大なリュックを探って、分厚い本を一冊取り出した。',
      ]);
      await era.printAndWait(
        '開いてみると、厚い保護カバーに包まれた同人誌だった。',
      );
      await diamond_lord.say_and_wait(
        'これ、君がデビュー一年目のころに出した同人誌……',
      );
      await diamond_lord.say_and_wait(
        'あのときはまだ君のファンじゃなかった。これ、他の人から高値で買ったんだ……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は唇を噛み、何も言わない。',
      ]);
      await diamond_lord.say_and_wait([
        '高値で買っても、いちばん元が取れた一冊だと思う。',
        do_call_di,
        '、なぜかわかる？',
      ]);
      await diamond_lord.say_and_wait([
        'この一冊が描いてるのは、駆け出しの',
        digital.uma_sex_title,
        'のレース。いつもの',
        digital.uma_sex_title,
        'への愛以外に、中には、少し違うものがある。',
      ]);
      await diamond_lord.say_and_wait(
        'もう一つ言いたいのは、君とのあのレースでファンになったってこと……そのあと、君のレースは全部見に行った。',
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ' はまたその同人誌を宝物のように厚いカバーで包み、リュックに戻した。それから',
        digital.sex,
        'はリュックを背負って、歩いていった。',
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、場外で有名な',
        digital.uma_sex_title,
        'のコスをして踊っているレイヤーをぼんやり見ていた。',
      ]);
      await era.printAndWait([
        digital.couple_title,
        'の中には、仮耳の普通の',
        digital.phy_sex_title,
        'もいれば、コス用の耳カバーを着けた',
        digital.uma_sex_title,
        'もいる。',
      ]);
      await era.printAndWait([
        digital.couple_title,
        'が軽やかに踊るのを見て、',
        digital.get_colored_name(),
        ' は……',
      ]);
      await digital.say_and_wait([callname, '、なんで？']);
      era.printButton('「ドーベルのこと？ モナークのこと？」', 1);
      await era.input();
      await digital.say_and_wait('……どっちも。');
      era.printButton(
        `「デジ、君はレース場を駆けられる${digital.uma_sex_title}だろ？」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、噛み合わない質問に少し止まり、首を振った。',
      ]);
      await you.say_and_wait([
        'ドーベルとモナークに感謝しないとな。',
        digital.couple_title,
        'のおかげで、この ',
        callname,
        ' は思い出した。',
      ]);
      era.println();
      await era.printAndWait([
        'コースの上ではずいぶん変態で、他の',
        digital.uma_sex_title,
        'をじっと見つめていた ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        '君が',
        digital.uma_sex_title,
        'じゃなかったら、俺やファンたちが見てるデジは、誰なんだ？',
      ]);
      await digital.say_and_wait(['あのデジ……まだ現状を認めてないデジ……']);
      era.println();
      await era.printAndWait([
        '目の前がゴールでも、変わらない ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        'レース場に踏み込めば、君は',
        digital.uma_sex_title,
        'だ。ファンに応援される存在なんだ！',
      ]);
      await digital.say_and_wait(['踏み込めば……レース場に？']);
      await you.say_and_wait([
        'そう！ ファンだった君がいちばんよく知ってるだろ！ レース場のすべての',
        digital.uma_sex_title,
        'は、成績がどうであれ、そうなんだ！',
      ]);
      era.println();
      await era.printAndWait([
        '泥だらけでも、力いっぱい前へ進む ',
        digital.get_colored_name(),
        '……',
      ]);
      era.printButton('「君はもう、ファンが支える存在なんだ！」', 1);
      await era.input();
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' はその言葉を聞いて、全身が震えた。',
      ]);
      era.printButton('「ファンサービス、わかるか！」', 1);
      await era.input();
      await digital.say_and_wait('わかる！');
      era.println();
      await era.printAndWait([digital.get_colored_name(), '、本当に……']);
      await digital.say_and_wait([
        'うおおおおおお、ファンの期待を裏切れない……あははは……',
      ]);
      era.println();
      await era.printAndWait([digital.uma_sex_title, 'だな。']);
      await digital.say_and_wait('私は、もう少し頑張ってみよう。');
      await era.printAndWait(
        '眉は下がり、目は濁り、涙まで帯びている。苦笑いと言ってもいい。',
      );
      await era.printAndWait(
        'でもこの笑顔は、ファンを感動の涙にさせるはずだ……',
      );
      await era.printAndWait('ああ、よく見えない……');
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = '世界の旅人';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} halo キングヘイロー
     */
    const f = async (digital, opera, tachyon, doto, halo) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' はまだ挑戦を続けている。このあとの海外遠征のために。',
      ]);
      await digital.print_and_wait([
        '勝利のためだけじゃない。同志と一緒に、もっと多くの',
        digital.uma_sex_title,
        'に会うためだ。',
      ]);
      await digital.print_and_wait(
        '下見のため、あまり知られていない便に乗った……',
      );
      await digital.print_and_wait('出発の前……');
      await digital.print_and_wait('おやおや、知り合いがたくさん来た。');
      await digital.print_and_wait([
        halo.get_colored_name(),
        '、',
        opera.get_colored_name(),
        '、',
        doto.get_colored_name(),
        '、',
        tachyon.get_colored_name(),
        '……それにクロフネ？',
      ]);
      await digital.print_and_wait(
        'もともと一時的に離れて、海外の環境に慣れるだけ。むしろ観光？',
      );
      await digital.print_and_wait('こんなに人が見送りに来るのか？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        '、本当にすごいな。',
      ]);
      await digital.say_and_wait([
        'でも、もう待てない！ 異郷の出会い、同志と一緒に、世界各地の',
        digital.uma_sex_title,
        'たちと出会いたい！',
      ]);
      await digital.print_and_wait([
        '世界の旅人、',
        digital.get_colored_name(),
        ' は、今も走っている。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
